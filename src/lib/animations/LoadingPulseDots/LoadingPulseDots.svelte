<script lang="ts">
  import './LoadingPulseDots.css';
  import type { LoadingPulseDotsProps } from './LoadingPulseDots.types';

  let { dotCount = 5, cycleMs = 1400, color = '#6366f1' }: LoadingPulseDotsProps = $props();

  const dots = $derived(Array.from({ length: dotCount }, (_, i) => i));
</script>

<div class="loading-pulse-dots">
  {#each dots as i (i)}
    <div
      class="loading-pulse-dots__dot"
      style="
        background-color: {color};
        animation-duration: {cycleMs}ms;
        animation-delay: {-((i / dotCount) * cycleMs)}ms;
      "
    ></div>
  {/each}
</div>
