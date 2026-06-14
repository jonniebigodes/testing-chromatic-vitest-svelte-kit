<script lang="ts">
  import PinInput from './PinInput.svelte';

  let value = $state<string[]>([]);
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <PinInput {value} onValueChange={(details) => (value = details.value)} maxLength={4} label="Controlled PIN" />
  <div style="font-size: 14px; color: #6b7280;">
    Current value: {value.join('') || '(empty)'}
  </div>
  <button
    type="button"
    onclick={() => (value = [])}
    style="padding: 8px 16px; background-color: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px;"
  >
    Clear
  </button>
</div>
