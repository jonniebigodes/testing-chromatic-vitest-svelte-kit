<script lang="ts">
  import { untrack } from 'svelte';
  import './DatePicker.css';
  import {
    CalendarDate,
    getLocalTimeZone,
    today,
  } from '@internationalized/date';
  import type { DateValue } from '@internationalized/date';
  import type { DatePickerProps } from './DatePicker.types';

  let {
    type = 'single',
    value,
    onValueChange,
    open,
    onOpenChange,
    placeholder,
    isDateUnavailable,
    isDateDisabled,
    required = false,
    errorMessageId,
    disableDaysOutsideMonth = false,
    closeOnDateSelect = false,
    weekStartsOn = 0,
    weekdayFormat = 'short',
    fixedWeeks = false,
    minValue,
    maxValue,
    locale = 'en-US',
    disabled = false,
    readOnly = false,
    monthFormat = 'long',
    children,
    name,
  }: DatePickerProps = $props();

  let labelId = `datepicker-label-${Math.random().toString(36).slice(2, 9)}`;
  let rootRef: HTMLDivElement | undefined = $state();

  let internalOpen = $state(false);
  const isOpenControlled = $derived(open !== undefined);
  const isOpen = $derived(isOpenControlled ? open! : internalOpen);

  const initialFocus = untrack(
    () => (value && value[0]) ?? placeholder ?? today(getLocalTimeZone()),
  );
  let focused = $state(
    new CalendarDate(initialFocus.year, initialFocus.month, 1),
  );

  const setOpen = (next: boolean) => {
    if (!isOpenControlled) internalOpen = next;
    onOpenChange?.({ open: next });
  };

  $effect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef && !rootRef.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const toComparable = (date: DateValue | undefined) =>
    date ? date.year * 10000 + date.month * 100 + date.day : null;

  const sameDay = (a: DateValue, b: DateValue) =>
    a.year === b.year && a.month === b.month && a.day === b.day;

  const minComparable = $derived(toComparable(minValue));
  const maxComparable = $derived(toComparable(maxValue));

  const monthLabelFormat = $derived(
    typeof monthFormat === 'function' ? 'long' : monthFormat,
  );

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
      month: monthLabelFormat as 'short' | 'long' | 'narrow' | 'numeric' | '2-digit',
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

  const formatInputDate = (d: DateValue) =>
    new Intl.DateTimeFormat(locale).format(
      new Date(d.year, d.month - 1, d.day),
    );

  const inputValue = $derived(value?.map(formatInputDate).join(', ') ?? '');

  const emit = (next: DateValue[]) =>
    onValueChange?.({
      value: next,
      valueAsString: next.map((v) => v.toString()),
    });

  const selectDay = (day: CalendarDate, outsideMonth: boolean) => {
    if (disabled || readOnly) return;
    if (outsideMonth && disableDaysOutsideMonth) return;

    if (type === 'multiple') {
      const exists = value?.some((v) => sameDay(v, day));
      emit(
        exists
          ? (value ?? []).filter((v) => !sameDay(v, day))
          : [...(value ?? []), day],
      );
    } else {
      emit([day]);
    }

    if (closeOnDateSelect) setOpen(false);
  };

  const dayClass = (
    selected: boolean,
    isDisabled: boolean,
    outsideMonth: boolean,
  ) => {
    const classes = ['date-picker__day'];
    if (selected) classes.push('date-picker__day--selected');
    if (isDisabled) classes.push('date-picker__day--disabled');
    if (outsideMonth) classes.push('date-picker__day--outside');
    return classes.join(' ');
  };
</script>

<div class="date-picker" bind:this={rootRef}>
  {#if children}
    <span id={labelId} class="date-picker__label">{children}</span>
  {/if}

  <div class="date-picker__controls">
    <input
      type="text"
      readonly
      value={inputValue}
      aria-describedby={errorMessageId}
      aria-labelledby={children ? labelId : undefined}
      {required}
      {disabled}
      class="date-picker__input"
    />

    <button
      type="button"
      aria-label="📅"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      {disabled}
      class="date-picker__trigger"
      onclick={() => setOpen(!isOpen)}
    >
      📅
    </button>

    <button
      type="button"
      {disabled}
      class="date-picker__clear"
      onclick={() => !disabled && emit([])}
    >
      Clear
    </button>
  </div>

  {#if isOpen}
    <div role="dialog" class="date-picker__dialog">
      <div class="date-picker__view-control">
        <button
          type="button"
          aria-label="Previous month"
          class="date-picker__nav"
          onclick={() => (focused = focused.subtract({ months: 1 }))}
        >
          ←
        </button>
        <button type="button" class="date-picker__view-trigger">
          {headerLabel}
        </button>
        <button
          type="button"
          aria-label="Next month"
          class="date-picker__nav"
          onclick={() => (focused = focused.add({ months: 1 }))}
        >
          →
        </button>
      </div>

      <table role="grid" class="date-picker__table">
        <thead>
          <tr>
            {#each weekdayLabels as weekDay, id (id)}
              <th scope="col" class="date-picker__weekday">{weekDay}</th>
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
                  (isDateUnavailable
                    ? isDateUnavailable(day, locale)
                    : false) ||
                  outOfRange ||
                  (disableDaysOutsideMonth && outsideMonth)}
                {@const selected = !!value?.some((v) => sameDay(v, day))}
                <td class="date-picker__cell" role="gridcell" aria-selected={selected || undefined}>
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
    </div>
  {/if}

  {#if name}
    <input type="hidden" {name} value={inputValue} />
  {/if}
</div>
