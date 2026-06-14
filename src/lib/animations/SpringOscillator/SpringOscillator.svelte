<script lang="ts">
  import './SpringOscillator.css';
  import type { SpringConfig, SpringOscillatorProps } from './SpringOscillator.types';

  let { spanPx = 56 }: SpringOscillatorProps = $props();

  let x = $state(0);

  $effect(() => {
    const sequence: SpringConfig[] = [
      { target: spanPx, damping: 8, stiffness: 140 },
      { target: -spanPx, damping: 8, stiffness: 140 },
      { target: 0, damping: 12, stiffness: 180 },
    ];

    let raf = 0;
    let position = 0;
    let velocity = 0;
    let stepIndex = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 1 / 30);
      lastTime = now;

      const cfg = sequence[stepIndex];
      const force =
        -cfg.stiffness * (position - cfg.target) - cfg.damping * velocity;
      velocity += force * dt;
      position += velocity * dt;

      const settled =
        Math.abs(position - cfg.target) < 0.5 && Math.abs(velocity) < 0.5;
      if (settled) {
        position = cfg.target;
        velocity = 0;
        stepIndex = (stepIndex + 1) % sequence.length;
      }

      x = position;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  });
</script>

<div class="spring-oscillator">
  <div class="spring-oscillator__track">
    <div class="spring-oscillator__knob" style:transform="translateX({x}px)"></div>
  </div>
</div>
