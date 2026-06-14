<script lang="ts">
  import './BounceElevation.css';
  import type { BounceElevationProps } from './BounceElevation.types';

  let { liftPx = 36, cycleMs = 1400 }: BounceElevationProps = $props();

  let y = $state(0);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const easeBounceOut = (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    if (t < 2 / d1) {
      const u = t - 1.5 / d1;
      return n1 * u * u + 0.75;
    }
    if (t < 2.5 / d1) {
      const u = t - 2.25 / d1;
      return n1 * u * u + 0.9375;
    }
    const u = t - 2.625 / d1;
    return n1 * u * u + 0.984375;
  };

  $effect(() => {
    const liftDuration = cycleMs * 0.42;
    const fallDuration = cycleMs * 0.58;
    let raf = 0;
    let start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) % cycleMs;
      let nextY: number;
      if (elapsed < liftDuration) {
        nextY = -liftPx * easeOutCubic(elapsed / liftDuration);
      } else {
        const b = easeBounceOut((elapsed - liftDuration) / fallDuration);
        nextY = -liftPx + liftPx * b;
      }
      y = nextY;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
    };
  });

  const ratio = $derived(-y / liftPx);
  const shadowOpacity = $derived(0.18 + ratio * 0.22);
  const shadowScaleX = $derived(0.85 + ratio * 0.18);
</script>

<div class="bounce-elevation">
  <div
    class="bounce-elevation__shadow"
    style="opacity: {shadowOpacity}; transform: scaleX({shadowScaleX})"
  ></div>
  <div class="bounce-elevation__box" style="transform: translateY({y}px)">
    <div class="bounce-elevation__inner"></div>
  </div>
</div>
