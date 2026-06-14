<script lang="ts">
  import Calendar from './Calendar.svelte';
  import { CalendarDate } from '@internationalized/date';
  import type { DateValue } from './Calendar.types';

  let value = $state<DateValue[]>([]);
  const unavailableDates: DateValue[] = [
    new CalendarDate(2024, 1, 10),
    new CalendarDate(2024, 1, 11),
    new CalendarDate(2024, 1, 24),
  ];

  const isDateUnavailable = (date: DateValue) =>
    unavailableDates.some(
      (d) =>
        d.year === date.year && d.month === date.month && d.day === date.day,
    );
</script>

<div class="demo-booking">
  <div>
    <h3 class="demo-title">Book Your Appointment</h3>
    <p class="demo-subtitle">Select an available date</p>
  </div>

  <Calendar
    {value}
    onValueChange={(details) => (value = details.value)}
    {isDateUnavailable}
    minValue={new CalendarDate(2024, 1, 1)}
    maxValue={new CalendarDate(2024, 1, 31)}
  />

  {#if value.length > 0}
    <div class="demo-success">
      ✓ Appointment booked for: {value[0].year}-{value[0].month
        .toString()
        .padStart(2, '0')}-{value[0].day.toString().padStart(2, '0')}
    </div>
  {/if}
</div>

<style>
  .demo-booking {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background-color: var(--color-slate-50);
    border-radius: var(--spacing-3);
  }
  .demo-title {
    margin: 0;
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-semibold);
    color: var(--color-slate-900);
  }
  .demo-subtitle {
    margin: var(--spacing-1) 0 0;
    font-size: var(--font-size-14);
    color: var(--color-slate-500);
  }
  .demo-success {
    padding: var(--spacing-3);
    background-color: var(--color-green-50);
    color: var(--color-green-600);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
  }
</style>
