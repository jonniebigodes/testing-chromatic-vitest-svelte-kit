<script lang="ts">
  import './ParallaxLayers.css';
  import type { ParallaxLayersProps } from './ParallaxLayers.types';

  let { axis = 'horizontal', durationMs = 5000 }: ParallaxLayersProps = $props();

  let progress = $state(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  $effect(() => {
    let raf = 0;
    const start = performance.now();
    const period = durationMs * 2;

    const tick = (now: number) => {
      const elapsed = (now - start) % period;
      const p =
        elapsed < durationMs
          ? elapsed / durationMs
          : 1 - (elapsed - durationMs) / durationMs;
      progress = p;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  });

  const horizontal = $derived(axis === 'horizontal');
  const backRange = $derived(horizontal ? [-26, 26] : [-18, 18]);
  const midRange = $derived(horizontal ? [-44, 44] : [-32, 32]);
  const frontRange = $derived(horizontal ? [-62, 62] : [-46, 46]);

  const translate = (range: number[]) => {
    const v = lerp(range[0], range[1], progress);
    return horizontal ? `translateX(${v}px)` : `translateY(${v}px)`;
  };
</script>

<div class="parallax-layers">
  <div
    class={[
      'parallax-layers__viewport',
      horizontal
        ? 'parallax-layers__viewport--horizontal'
        : 'parallax-layers__viewport--vertical',
    ].join(' ')}
  >
    <div
      class="parallax-layers__layer parallax-layers__layer--back"
      style:transform={translate(backRange)}
    ></div>
    <div
      class="parallax-layers__layer parallax-layers__layer--mid"
      style:transform={translate(midRange)}
    ></div>
    <div
      class="parallax-layers__layer parallax-layers__layer--front"
      style:transform={translate(frontRange)}
    ></div>
  </div>
</div>
