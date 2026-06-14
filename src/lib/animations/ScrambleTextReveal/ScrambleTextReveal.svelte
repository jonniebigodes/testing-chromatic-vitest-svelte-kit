<script lang="ts">
  import { untrack } from 'svelte';
  import './ScrambleTextReveal.css';
  import type { ScrambleTextRevealProps } from './ScrambleTextReveal.types';

  const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  function randomChar() {
    return CHARSET[Math.floor(Math.random() * CHARSET.length)] ?? 'X';
  }

  let {
    words: wordsProp,
    wordHoldMs = 2200,
    scrambleTickMs = 45,
  }: ScrambleTextRevealProps = $props();

  const words = $derived(wordsProp ?? ['Hello', 'Storybook', 'Reanimated']);
  let display = $state(untrack(() => wordsProp?.[0] ?? 'Hello'));

  $effect(() => {
    let wordIndex = 0;
    let scrambleTimer: ReturnType<typeof setInterval> | undefined;

    const advanceWord = () => {
      const next = words[(wordIndex + 1) % words.length] ?? '';
      wordIndex += 1;
      let step = 0;
      const steps = Math.max(next.length * 2, 14);

      if (scrambleTimer) {
        clearInterval(scrambleTimer);
      }

      scrambleTimer = setInterval(() => {
        step += 1;
        if (step >= steps) {
          if (scrambleTimer) {
            clearInterval(scrambleTimer);
            scrambleTimer = undefined;
          }
          display = next;
          return;
        }
        const revealCount = Math.min(
          Math.floor((step / steps) * next.length),
          next.length,
        );
        const chars = next.split('');
        const scrambled = chars.map((ch, i) => {
          if (i < revealCount) return ch;
          if (ch === ' ') return ' ';
          return randomChar();
        });
        display = scrambled.join('');
      }, scrambleTickMs);
    };

    const cycle = setInterval(advanceWord, wordHoldMs);
    return () => {
      clearInterval(cycle);
      if (scrambleTimer) clearInterval(scrambleTimer);
    };
  });
</script>

<div class="scramble-text-reveal">
  <div class="scramble-text-reveal__content">
    <span class="scramble-text-reveal__text">{display}</span>
    <span class="scramble-text-reveal__cursor" aria-hidden="true"></span>
  </div>
</div>
