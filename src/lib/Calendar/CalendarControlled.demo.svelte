<script lang="ts">
  import Calendar from './Calendar.svelte';
  import { CalendarDate } from '@internationalized/date';
  import type { DateValue } from './Calendar.types';

  let value = $state<DateValue[]>([new CalendarDate(2024, 1, 15)]);
</script>

<div class="demo-stack">
  <Calendar
    {value}
    onValueChange={(details) => (value = details.value)}
    children="Select a date"
  />
  <div class="demo-info">
    Selected:
    {value.length > 0
      ? `${value[0].year}-${value[0].month.toString().padStart(2, '0')}-${value[0].day.toString().padStart(2, '0')}`
      : 'None'}
  </div>
  <button
    type="button"
    class="demo-button"
    onclick={() => (value = [new CalendarDate(2024, 1, 1)])}
  >
    Set to January 1, 2024
  </button>
</div>

<style>
  .demo-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .demo-info {
    font-size: var(--font-size-14);
    color: var(--color-slate-500);
    padding: var(--spacing-3);
    background-color: var(--color-slate-100);
    border-radius: var(--spacing-2);
  }
  .demo-button {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: var(--font-size-14);
  }
</style>
