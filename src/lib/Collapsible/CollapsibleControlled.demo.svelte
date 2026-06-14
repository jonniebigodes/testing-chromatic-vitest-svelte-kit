<script lang="ts">
  import Collapsible from './Collapsible.svelte';

  let open = $state(false);
</script>

<div style="width: 500px; max-width: 100%; display: flex; flex-direction: column; gap: 16px;">
  <Collapsible
    {open}
    onOpenChange={(details) => (open = details.open)}
    label="Controlled Collapsible ({open ? 'Open' : 'Closed'})"
  >
    This collapsible is controlled by external state. The state is currently:
    <strong>{open ? 'open' : 'closed'}</strong>
  </Collapsible>
  <button
    type="button"
    onclick={() => (open = !open)}
    style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
  >
    Toggle from outside
  </button>
</div>
