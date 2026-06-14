import { describe, test, expect } from 'vitest';
import { render } from '../../../test-setup';
import BounceElevation from './BounceElevation.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('BounceElevation', () => {
  test('Default - renders with default props', async () => {
    const screen = await render(BounceElevation, { props: {} });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('BounceElevation - Default props');
  });

  test('HigherLift - renders with custom liftPx and cycleMs', async () => {
    const screen = await render(BounceElevation, {
      props: { liftPx: 52, cycleMs: 1800 },
    });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('BounceElevation - Custom liftPx and cycleMs');
  });
});
