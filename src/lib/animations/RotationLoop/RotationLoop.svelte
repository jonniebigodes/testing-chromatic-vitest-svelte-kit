<script lang="ts">
  import './RotationLoop.css';
  import type { RotationLoopProps } from './RotationLoop.types';

  let { durationMs = 3200 }: RotationLoopProps = $props();
</script>

<div class="rotation-loop">
  <div class="rotation-loop__box" style:animation-duration="{durationMs}ms">
    <div class="rotation-loop__dot"></div>
  </div>
</div>
