<script lang="ts">
  import Combobox from './Combobox.svelte';

  const items = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

  let message = $state('');
</script>

<div class="story-decorator-stack">
  <Combobox
    label="Select a framework"
    placeholder="Choose a framework..."
    {items}
    onValueChange={(details) => {
      message = `Selected: ${details.value.length > 0 ? details.value.join(', ') : 'None'}`;
    }}
  />
  {#if message}
    <div class="combobox-demo__message">{message}</div>
  {/if}
</div>

<style>
  .story-decorator-stack {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  .combobox-demo__message {
    padding: var(--spacing-3);
    background-color: var(--color-blue-100);
    color: var(--color-slate-800);
    border-radius: var(--spacing-1);
    font-size: var(--font-size-14);
  }
</style>
