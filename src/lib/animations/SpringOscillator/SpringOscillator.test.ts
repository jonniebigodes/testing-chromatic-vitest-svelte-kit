import { describe, test, expect } from 'vitest';
import { render } from '../../../test-setup';
import SpringOscillator from './SpringOscillator.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('SpringOscillator', () => {
  test('Default - renders with default props', async () => {
    const screen = await render(SpringOscillator);
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('SpringOscillator - Default props');
  });

  test('WiderSpan - renders with custom spanPx', async () => {
    const screen = await render(SpringOscillator, {
      props: { spanPx: 80 },
    });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('SpringOscillator - WiderSpan props');
  });
});
