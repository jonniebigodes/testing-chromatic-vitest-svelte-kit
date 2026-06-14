<script lang="ts">
  import RatingGroup from './RatingGroup.svelte';

  let value = $state(3);
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <RatingGroup {value} onValueChange={(details) => (value = details.value)} label="Controlled rating" />
  <div style="padding: 12px; background-color: #f3f4f6; border-radius: 6px; font-size: 14px;">
    <strong>Current rating:</strong> {value} / 5
  </div>
  <div style="display: flex; gap: 8px;">
    <button
      type="button"
      onclick={() => (value = 0)}
      style="padding: 8px 16px; background-color: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
    >
      Clear
    </button>
    <button
      type="button"
      onclick={() => (value = 5)}
      style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
    >
      Set to 5
    </button>
  </div>
</div>
