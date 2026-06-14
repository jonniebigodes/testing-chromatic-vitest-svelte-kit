<script lang="ts">
  import Progress from './Progress.svelte';

  let value = $state(0);

  function startProgress() {
    value = 0;
    const interval = setInterval(() => {
      value = value + 5;
      if (value >= 100) {
        clearInterval(interval);
        value = 100;
      }
    }, 200);
  }
</script>

<div style="display: flex; flex-direction: column; gap: 16px">
  <Progress {value}>Loading...</Progress>
  <button
    type="button"
    onclick={startProgress}
    style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer"
  >
    Start Progress
  </button>
</div>
