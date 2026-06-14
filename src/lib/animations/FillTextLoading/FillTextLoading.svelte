<script lang="ts">
  import './FillTextLoading.css';
  import type { FillTextLoadingProps } from './FillTextLoading.types';

  let { label = 'Loading', cycleMs = 2200 }: FillTextLoadingProps = $props();

  let progress = $state(0);
  let fullWidth = $state(0);
  let baseEl: HTMLSpanElement | undefined = $state();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  $effect(() => {
    let raf = 0;
    const start = performance.now();
    const period = cycleMs * 2;

    const tick = (now: number) => {
      const elapsed = (now - start) % period;
      const linear =
        elapsed < cycleMs ? elapsed / cycleMs : 1 - (elapsed - cycleMs) / cycleMs;
      progress = easeInOutCubic(linear);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  });

  $effect(() => {
    const el = baseEl;
    if (!el) return;
    const update = () => {
      fullWidth = el.getBoundingClientRect().width;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  });
</script>

<div class="fill-text-loading">
  <span class="fill-text-loading__wrapper">
    <span class="fill-text-loading__base" bind:this={baseEl}>{label}</span>
    <span class="fill-text-loading__overlay" aria-hidden="true">
      <span class="fill-text-loading__progress" style="width: {fullWidth * progress}px">
        <span class="fill-text-loading__filled">{label}</span>
      </span>
    </span>
  </span>
</div>
