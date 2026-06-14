<script lang="ts">
  import { untrack } from 'svelte';
  import './Calendar.css';
  import {
    CalendarDate,
    getLocalTimeZone,
    today,
  } from '@internationalized/date';
  import type { DateValue } from '@internationalized/date';
  import type { CalendarProps } from './Calendar.types';

  let {
    type = 'single',
    value,
    onValueChange,
    placeholder,
    weekStartsOn = 0,
    weekdayFormat = 'short',
    fixedWeeks = false,
    isDateDisabled,
    isDateUnavailable,
    minValue,
    maxValue,
    locale = 'en-US',
    disabled = false,
    readOnly = false,
    disableDaysOutsideMonth = false,
    maxDays,
    monthFormat = 'long',
    children,
    name,
  }: CalendarProps = $props();

  const initialFocus = untrack(
    () => (value && value[0]) ?? placeholder ?? today(getLocalTimeZone()),
  );
  let focused = $state(
    new CalendarDate(initialFocus.year, initialFocus.month, 1),
  );

  const toComparable = (date: DateValue | undefined) =>
    date ? date.year * 10000 + date.month * 100 + date.day : null;

  const sameDay = (a: DateValue, b: DateValue) =>
    a.year === b.year && a.month === b.month && a.day === b.day;

  const minComparable = $derived(toComparable(minValue));
  const maxComparable = $derived(toComparable(maxValue));

  const weekdayLabels = $derived(
    Array.from({ length: 7 }, (_, i) => {
      const dow = (weekStartsOn + i) % 7;
      const reference = new Date(2024, 0, 7 + dow);
      return new Intl.DateTimeFormat(locale, { weekday: weekdayFormat }).format(
        reference,
      );
    }),
  );

  const headerLabel = $derived(
    new Intl.DateTimeFormat(locale, {
      month: monthFormat,
      year: 'numeric',
    }).format(new Date(focused.year, focused.month - 1, 1)),
  );

  const weeks = $derived.by(() => {
    const firstWeekdayOfMonth = new Date(
      focused.year,
      focused.month - 1,
      1,
    ).getDay();
    const leadingDays = (firstWeekdayOfMonth - weekStartsOn + 7) % 7;
    const daysInMonth = new Date(focused.year, focused.month, 0).getDate();
    const firstVisible = focused.subtract({ days: leadingDays });
    const weekCount = fixedWeeks
      ? 6
      : Math.ceil((leadingDays + daysInMonth) / 7);

    return Array.from({ length: weekCount }, (_, w) =>
      Array.from({ length: 7 }, (_, d) =>
        firstVisible.add({ days: w * 7 + d }),
      ),
    );
  });

  const isSelected = (day: DateValue) => !!value?.some((v) => sameDay(v, day));

  const changeMonth = (delta: number) => {
    if (disabled) return;
    focused = focused.add({ months: delta });
  };

  const selectDay = (day: CalendarDate, outsideMonth: boolean) => {
    if (disabled || readOnly) return;
    if (outsideMonth && disableDaysOutsideMonth) return;

    let nextValue: DateValue[];
    if (type === 'multiple') {
      const exists = value?.some((v) => sameDay(v, day));
      nextValue = exists
        ? (value ?? []).filter((v) => !sameDay(v, day))
        : [...(value ?? []), day];
      if (maxDays && nextValue.length > maxDays) return;
    } else {
      nextValue = [day];
    }

    onValueChange?.({
      value: nextValue,
      valueAsString: nextValue.map((v) => v.toString()),
    });
  };

  const dayClass = (
    selected: boolean,
    isDisabled: boolean,
    outsideMonth: boolean,
  ) => {
    if (selected) return 'calendar__day calendar__day--selected';
    if (isDisabled) return 'calendar__day calendar__day--disabled';
    if (outsideMonth) return 'calendar__day calendar__day--outside';
    return 'calendar__day calendar__day--default';
  };
</script>

<div class="calendar">
  {#if children}
    <div class="calendar__heading">{children}</div>
  {/if}

  <div class="calendar__view-control">
    <button
      type="button"
      aria-label="Previous month"
      class="calendar__arrow"
      {disabled}
      onclick={() => changeMonth(-1)}
    >
      ←
    </button>

    <button
      type="button"
      class="calendar__view-trigger"
      disabled={disabled || readOnly}
    >
      {headerLabel}
    </button>

    <button
      type="button"
      aria-label="Next month"
      class="calendar__arrow"
      {disabled}
      onclick={() => changeMonth(1)}
    >
      →
    </button>
  </div>

  <table role="grid" class="calendar__table">
    <thead>
      <tr>
        {#each weekdayLabels as weekDay, id (id)}
          <th scope="col" class="calendar__weekday">{weekDay}</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each weeks as week, weekId (weekId)}
        <tr>
          {#each week as day, dayId (dayId)}
            {@const outsideMonth = day.month !== focused.month}
            {@const comparable = toComparable(day)!}
            {@const outOfRange =
              (minComparable !== null && comparable < minComparable) ||
              (maxComparable !== null && comparable > maxComparable)}
            {@const isDisabled =
              (isDateDisabled ? isDateDisabled(day) : false) ||
              (isDateUnavailable ? isDateUnavailable(day, locale) : false) ||
              outOfRange ||
              (outsideMonth && disableDaysOutsideMonth)}
            {@const selected = isSelected(day)}
            <td class="calendar__cell" role="gridcell" aria-selected={selected || undefined}>
              <button
                type="button"
                aria-disabled={isDisabled || undefined}
                disabled={disabled || readOnly || isDisabled}
                class={dayClass(selected, isDisabled, outsideMonth)}
                onclick={() => selectDay(day, outsideMonth)}
              >
                {day.day}
              </button>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  {#if name}
    <input
      type="hidden"
      {name}
      value={value?.map((v) => v.toString()).join(',') ?? ''}
    />
  {/if}
</div>
