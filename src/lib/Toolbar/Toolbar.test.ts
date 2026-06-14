import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import ToolbarTestWrapper from './Toolbar.test-wrapper.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Toolbar', () => {
  test('renders children inside a toolbar role', async () => {
    configure({
      title: 'PolarizedToolbar - Default props - two buttons',
    });
    const screen = await render(ToolbarTestWrapper, {
      props: { buttons: ['One', 'Two'] },
    });
    await expect.element(screen.getByRole('toolbar')).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'One' })).toBeVisible();
    await takeSnapshot('Toolbar - Default props');
  });

  test('lays out horizontally by default', async () => {
    const screen = await render(ToolbarTestWrapper, {
      props: { buttons: ['X'] },
    });
    await expect
      .element(screen.getByRole('toolbar'))
      .toHaveStyle({ flexDirection: 'row' });
    await takeSnapshot('Toolbar - Horizontal layout');
  });

  test('lays out vertically when requested', async () => {
    const screen = await render(ToolbarTestWrapper, {
      props: { orientation: 'vertical', buttons: ['X'] },
    });
    await expect
      .element(screen.getByRole('toolbar'))
      .toHaveStyle({ flexDirection: 'column' });
    await takeSnapshot('Toolbar - Vertical layout');
  });
});
