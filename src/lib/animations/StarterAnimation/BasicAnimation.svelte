<script lang="ts">
  import './BasicAnimation.css';
  import type { BasicAnimationProps } from './BasicAnimation.types';

  let { tickMs = 3000, widthMaxPx = 350 }: BasicAnimationProps = $props();

  let width = $state(10);

  $effect(() => {
    const id = setInterval(() => {
      width = Math.random() * widthMaxPx;
    }, tickMs);
    return () => clearInterval(id);
  });
</script>

<div class="basic-animation">
  <div class="basic-animation__bar" style:width="{width}px"></div>
</div>
