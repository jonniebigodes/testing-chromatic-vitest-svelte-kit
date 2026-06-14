<script lang="ts">
  import './ColorInterpolation.css';
  import type { ColorInterpolationProps } from './ColorInterpolation.types';

  let { durationMs = 3200 }: ColorInterpolationProps = $props();

  let progress = $state(0);

  const hexToRgb = (hex: string): [number, number, number] => {
    const v = hex.replace('#', '');
    const r = parseInt(v.substring(0, 2), 16);
    const g = parseInt(v.substring(2, 4), 16);
    const b = parseInt(v.substring(4, 6), 16);
    return [r, g, b];
  };

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const interpolateColor = (
    value: number,
    inputRange: number[],
    colors: string[],
  ) => {
    if (value <= inputRange[0]) return colors[0];
    if (value >= inputRange[inputRange.length - 1])
      return colors[colors.length - 1];

    for (let i = 0; i < inputRange.length - 1; i++) {
      if (value >= inputRange[i] && value <= inputRange[i + 1]) {
        const t = (value - inputRange[i]) / (inputRange[i + 1] - inputRange[i]);
        const [r1, g1, b1] = hexToRgb(colors[i]);
        const [r2, g2, b2] = hexToRgb(colors[i + 1]);
        const r = Math.round(lerp(r1, r2, t));
        const g = Math.round(lerp(g1, g2, t));
        const b = Math.round(lerp(b1, b2, t));
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
    return colors[0];
  };

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

  const backgroundColor = $derived(
    interpolateColor(
      progress,
      [0, 0.33, 0.66, 1],
      ['#4f46e5', '#ec4899', '#f59e0b', '#10b981'],
    ),
  );
</script>

<div class="color-interpolation">
  <div class="color-interpolation__swatch" style:background-color={backgroundColor}></div>
</div>
