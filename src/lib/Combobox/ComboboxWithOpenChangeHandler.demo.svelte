<script lang="ts">
  import Combobox from './Combobox.svelte';

  const items = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];
  let isOpen = $state(false);
</script>

<div class="story-decorator-stack">
  <Combobox
    label="Select a framework"
    placeholder="Choose a framework..."
    {items}
    open={isOpen}
    onOpenChange={(details) => (isOpen = details.open)}
  />
  <div class="combobox-demo__status">
    <strong>Dropdown state:</strong> {isOpen ? 'Open' : 'Closed'}
  </div>
</div>

<style>
  .story-decorator-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .combobox-demo__status {
    padding: var(--spacing-3);
    background-color: var(--color-slate-100);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
  }
</style>
