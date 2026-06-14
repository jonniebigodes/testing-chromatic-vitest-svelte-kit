<script lang="ts">
  import Checkbox from './Checkbox.svelte';

  let checked = $state(false);
</script>

<div class="story-decorator-stack">
  <Checkbox checked={checked} onCheckedChange={(details) => (checked = !!details.checked)}>
    {#snippet children()}Accept terms and conditions{/snippet}
  </Checkbox>
  <div class="checkbox-demo__status">
    <strong>Checked:</strong> {checked ? 'Yes' : 'No'}
  </div>
</div>

<style>
  .story-decorator-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .checkbox-demo__status {
    padding: var(--spacing-3);
    background-color: var(--color-slate-100);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
  }
</style>
