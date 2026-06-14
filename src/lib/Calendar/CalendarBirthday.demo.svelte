<script lang="ts">
  import Calendar from './Calendar.svelte';
  import { CalendarDate } from '@internationalized/date';
  import type { DateValue } from './Calendar.types';

  let value = $state<DateValue[]>([]);
  const currentYear = new Date().getFullYear();
</script>

<div class="demo-birthday">
  <div>
    <h3 class="demo-title">🎂 Select Your Birthday</h3>
    <p class="demo-subtitle">We'll send you a special gift!</p>
  </div>

  <Calendar
    {value}
    onValueChange={(details) => (value = details.value)}
    maxValue={new CalendarDate(currentYear - 13, 12, 31)}
    placeholder={new CalendarDate(currentYear - 25, 1, 1)}
  />

  {#if value.length > 0}
    <div class="demo-birthday-result">
      Birthday: {value[0].year}-{value[0].month.toString().padStart(2, '0')}-{value[0]
        .day
        .toString()
        .padStart(2, '0')}
    </div>
  {/if}
</div>

<style>
  .demo-birthday {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background-color: var(--color-yellow-50);
    border-radius: var(--spacing-3);
  }
  .demo-title {
    margin: 0;
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-semibold);
    color: var(--color-yellow-600);
  }
  .demo-subtitle {
    margin: var(--spacing-1) 0 0;
    font-size: var(--font-size-14);
    color: var(--color-yellow-600);
  }
  .demo-birthday-result {
    padding: var(--spacing-3);
    background-color: var(--color-yellow-100);
    color: var(--color-yellow-600);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
    border: 1px solid var(--color-yellow-300);
  }
</style>
