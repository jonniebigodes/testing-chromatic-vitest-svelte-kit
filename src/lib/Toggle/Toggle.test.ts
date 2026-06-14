import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Toggle from './Toggle.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({
  title: 'PolarizedToggle',
});

describe('Toggle', () => {
  test('renders the accompanying label', async () => {
    const screen = await render(Toggle, { props: { label: 'Notifications' } });
    await expect.element(screen.getByText('Notifications')).toBeVisible();
    await takeSnapshot('Toggle - Default props');
  });

  test('reflects the pressed state', async () => {
    const screen = await render(Toggle, {
      props: { pressed: true, label: 'On' },
    });
    await expect
      .element(screen.getByRole('button'))
      .toHaveAttribute('aria-pressed', 'true');
    await takeSnapshot('Toggle - Pressed state');
  });

  test('invokes onPressedChange when clicked', async () => {
    const onPressedChange = vi.fn();
    const screen = await render(Toggle, {
      props: { onPressedChange, label: 'X' },
    });
    await screen.getByRole('button').click();
    expect(onPressedChange).toHaveBeenCalledWith(true);
    await takeSnapshot('Toggle - Pressed state after click');
  });

  test('is disabled when the disabled prop is set', async () => {
    const screen = await render(Toggle, {
      props: { disabled: true, label: 'X' },
    });
    await expect.element(screen.getByRole('button')).toBeDisabled();
    await takeSnapshot('Toggle - Disabled state');
  });
});
