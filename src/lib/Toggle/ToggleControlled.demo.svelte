<script lang="ts">
  import Toggle from './Toggle.svelte';

  let pressed = $state(false);
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <Toggle {pressed} onPressedChange={(p) => (pressed = p)} label="Feature {pressed ? 'enabled' : 'disabled'}" />
  <div
    style="padding: 12px; background-color: #f3f4f6; border-radius: 6px; font-size: 14px;"
  >
    <strong>State:</strong> {pressed ? 'ON' : 'OFF'}
  </div>
  <button
    type="button"
    onclick={() => (pressed = !pressed)}
    style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
  >
    Toggle from outside
  </button>
</div>
