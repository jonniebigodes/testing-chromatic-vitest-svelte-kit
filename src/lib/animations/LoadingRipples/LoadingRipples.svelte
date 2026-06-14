<script lang="ts">
  import './LoadingRipples.css';
  import type { LoadingRipplesProps } from './LoadingRipples.types';

  let {
    ringCount = 3,
    cycleMs = 2400,
    color = '#3b82f6',
  }: LoadingRipplesProps = $props();

  const rings = $derived(Array.from({ length: ringCount }, (_, i) => i));
</script>

<div class="loading-ripples">
  <div class="loading-ripples__container">
    {#each rings as i (i)}
      <div
        class="loading-ripples__ring"
        style={`
          border-color: ${color};
          animation-duration: ${cycleMs}ms;
          animation-delay: ${-(i / ringCount) * cycleMs}ms;
        `}
      ></div>
    {/each}
  </div>
</div>
