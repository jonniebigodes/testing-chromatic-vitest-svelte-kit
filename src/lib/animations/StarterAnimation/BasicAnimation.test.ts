import { describe, test, expect } from 'vitest';
import { render } from '../../../test-setup';
import BasicAnimation from './BasicAnimation.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('BasicAnimation', () => {
  test('Default - renders with default props', async () => {
    const screen = await render(BasicAnimation, { props: {} });
    expect(screen.container.firstChild).toBeTruthy();
    await takeSnapshot('BasicAnimation - Default props');
  });
});
