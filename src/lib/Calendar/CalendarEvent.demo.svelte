<script lang="ts">
  import Calendar from './Calendar.svelte';
  import { CalendarDate } from '@internationalized/date';
  import type { DateValue } from './Calendar.types';

  let value = $state<DateValue[]>([
    new CalendarDate(2024, 1, 5),
    new CalendarDate(2024, 1, 12),
    new CalendarDate(2024, 1, 19),
    new CalendarDate(2024, 1, 26),
  ]);
</script>

<div class="demo-event">
  <div>
    <h3 class="demo-title">Team Meeting Days</h3>
    <p class="demo-subtitle">Every Friday in January</p>
  </div>

  <Calendar
    type="multiple"
    {value}
    onValueChange={(details) => (value = details.value)}
    maxDays={5}
    placeholder={new CalendarDate(2024, 1, 1)}
  />

  <div class="demo-meta">
    {value.length} meeting{value.length !== 1 ? 's' : ''} scheduled
  </div>
</div>

<style>
  .demo-event {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background-color: var(--color-white);
    border: 1px solid var(--color-slate-200);
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
  .demo-meta {
    font-size: var(--font-size-12);
    color: var(--color-slate-500);
  }
</style>
