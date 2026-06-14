<script lang="ts">
  import './KeyframeInterruptHover.css';
  import type { KeyframeInterruptHoverProps } from './KeyframeInterruptHover.types';

  let {
    keyframeCycleMs = 1600,
    interruptCycleMs = 550,
  }: KeyframeInterruptHoverProps = $props();

  let enterKey = $state(0);
  let barWidth = $state(48);

  $effect(() => {
    const id = setInterval(() => {
      enterKey += 1;
    }, keyframeCycleMs);
    return () => clearInterval(id);
  });

  $effect(() => {
    const id = setInterval(() => {
      barWidth = 56 + Math.random() * 140;
    }, interruptCycleMs);
    return () => clearInterval(id);
  });
</script>

<div class="keyframe-interrupt-hover">
  <span class="keyframe-interrupt-hover__heading">Keyframe (remount)</span>
  {#key enterKey}
    <div class="keyframe-interrupt-hover__card">
      <span class="keyframe-interrupt-hover__card-text">Hover-like</span>
    </div>
  {/key}

  <span class="keyframe-interrupt-hover__heading keyframe-interrupt-hover__heading--spaced">
    Interruptible timing
  </span>
  <div class="keyframe-interrupt-hover__track">
    <div class="keyframe-interrupt-hover__bar" style={`width: ${barWidth}px`}></div>
  </div>
</div>
