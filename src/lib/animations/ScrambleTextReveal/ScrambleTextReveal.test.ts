import { describe, test, expect } from 'vitest';
import { render } from '../../../test-setup';
import ScrambleTextReveal from './ScrambleTextReveal.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('ScrambleTextReveal', () => {
  test('Default - renders with default props', async () => {
    const screen = await render(ScrambleTextReveal, { props: {} });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('ScrambleTextReveal - Default props');
  });

  test('StatusLabels - renders with custom words and timing', async () => {
    const screen = await render(ScrambleTextReveal, {
      props: {
        words: ['Idle', 'Fetching', 'Ready'],
        wordHoldMs: 2800,
        scrambleTickMs: 40,
      },
    });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('ScrambleTextReveal - StatusLabels props');
  });
});
