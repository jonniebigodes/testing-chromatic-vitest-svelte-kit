<script lang="ts">
  import Select from './Select.svelte';
  import { frameworks } from './select-data';

  let value = $state<string[]>([]);
</script>

<div class="story-decorator-stack">
  <Select
    items={frameworks}
    {value}
    onValueChange={(details) => (value = details.value)}
  >
    {#snippet children()}Framework{/snippet}
  </Select>
  <div class="select-demo__status">
    <strong>Selected value:</strong>
    {value.length > 0 ? value.join(', ') : 'None'}
  </div>
  <button type="button" class="select-demo__button" onclick={() => (value = ['react'])}>
    Select React
  </button>
</div>

<style>
  .story-decorator-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .select-demo__status {
    padding: var(--spacing-3);
    background-color: var(--color-slate-100);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
  }
  .select-demo__button {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: var(--spacing-1);
    cursor: pointer;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
  }
</style>
