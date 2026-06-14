<script lang="ts">
  import Calendar from './Calendar.svelte';
  import type { DateValue } from './Calendar.types';

  let value = $state<DateValue[]>([]);
</script>

<div class="demo-stack">
  <Calendar
    type="multiple"
    {value}
    onValueChange={(details) => (value = details.value)}
    children="Select multiple dates"
  />
  <div class="demo-info">
    Selected dates ({value.length}):
    {#if value.length > 0}
      <ul class="demo-list">
        {#each value as date, idx (idx)}
          <li>
            {date.year}-{date.month.toString().padStart(2, '0')}-{date.day
              .toString()
              .padStart(2, '0')}
          </li>
        {/each}
      </ul>
    {:else}
      None
    {/if}
  </div>
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
  .demo-list {
    margin: var(--spacing-2) 0 0;
    padding-left: var(--spacing-5);
  }
</style>
