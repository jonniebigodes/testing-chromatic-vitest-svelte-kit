<script lang="ts">
  import Slider from './Slider.svelte';

  let value = $state([50]);
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <Slider {value} onValueChange={(details) => (value = details.value)} label="Controlled slider" />
  <div style="padding: 12px; background-color: #f3f4f6; border-radius: 6px; font-size: 14px;">
    <strong>Current value:</strong> {value[0]}
  </div>
  <button
    type="button"
    onclick={() => (value = [0])}
    style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
  >
    Reset to 0
  </button>
</div>
