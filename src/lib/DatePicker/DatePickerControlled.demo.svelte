<script lang="ts">
  import DatePicker from './DatePicker.svelte';
  import { CalendarDate } from '@internationalized/date';
  import type { DateValue } from './DatePicker.types';

  let value = $state<DateValue[]>([new CalendarDate(2024, 1, 15)]);
  let open = $state(false);
</script>

<div class="demo-stack">
  <DatePicker
    {value}
    onValueChange={(details) => (value = details.value)}
    {open}
    onOpenChange={(details) => (open = details.open)}
    children="Select a date"
  />
  <div class="demo-info">
    Selected:
    {value.length > 0
      ? `${value[0].year}-${value[0].month.toString().padStart(2, '0')}-${value[0].day.toString().padStart(2, '0')}`
      : 'None'}
    <br />
    Open: {open ? 'Yes' : 'No'}
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
