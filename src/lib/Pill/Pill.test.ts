import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import PillTestWrapper from './Pill.test-wrapper.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({
  title: 'PolarizedPill',
});

describe('Pill', () => {
  test('renders its content', async () => {
    const screen = await render(PillTestWrapper, {
      props: { content: 'New' },
    });
    await expect.element(screen.getByText('New')).toBeVisible();
    await takeSnapshot('Pill - Default props');
  });

  test('renders the success variant with a green background', async () => {
    const screen = await render(PillTestWrapper, {
      props: { content: 'Done', variant: 'success' },
    });
    await expect
      .element(screen.getByText('Done'))
      .toHaveStyle({ backgroundColor: 'rgb(102, 191, 60)' });
    await takeSnapshot('Pill - Success variant');
  });

  test('renders the warning variant with a yellow background', async () => {
    const screen = await render(PillTestWrapper, {
      props: { content: 'Careful', variant: 'warning' },
    });
    await expect
      .element(screen.getByText('Careful'))
      .toHaveStyle({ backgroundColor: 'rgb(255, 174, 0)' });
    await takeSnapshot('Pill - Warning variant');
  });

  test('invokes onClick when interactive', async () => {
    const onclick = vi.fn();
    const screen = await render(PillTestWrapper, {
      props: { content: 'Tap', onclick },
    });
    await screen.getByText('Tap').click();
    expect(onclick).toHaveBeenCalledTimes(1);
    await takeSnapshot('Pill - Clickable');
  });

  test('does not fire onClick when disabled', async () => {
    const onclick = vi.fn();
    const screen = await render(PillTestWrapper, {
      props: { content: 'Off', onclick, disabled: true },
    });
    await screen.getByText('Off').click();
    expect(onclick).not.toHaveBeenCalled();
    await takeSnapshot('Pill - Disabled');
  });
});
