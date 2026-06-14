import { describe, test, expect } from 'vitest';
import { render } from '../../../test-setup';
import RotationLoop from './RotationLoop.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('RotationLoop', () => {
  test('Default - renders with default props', async () => {
    const screen = await render(RotationLoop, { props: {} });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('RotationLoop - Default props');
  });

  test('Slower - renders with custom durationMs', async () => {
    const screen = await render(RotationLoop, {
      props: { durationMs: 6000 },
    });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('RotationLoop - Slower props');
  });
});
