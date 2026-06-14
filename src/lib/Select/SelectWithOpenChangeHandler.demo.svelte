<script lang="ts">
  import Select from './Select.svelte';
  import { frameworks } from './select-data';

  let message = $state('');
</script>

<div class="story-decorator-stack">
  <Select
    items={frameworks}
    onOpenChange={(details) => {
      message = details.open ? 'Dropdown opened' : 'Dropdown closed';
    }}
  >
    {#snippet children()}Framework{/snippet}
  </Select>
  {#if message}
    <div class="select-demo__message">{message}</div>
  {/if}
</div>

<style>
  .story-decorator-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .select-demo__message {
    padding: var(--spacing-3);
    background-color: var(--color-yellow-100);
    color: var(--color-slate-800);
    border-radius: var(--spacing-1);
    font-size: var(--font-size-14);
  }
</style>
