import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Collapsible from './Collapsible.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Collapsible', () => {
  test('renders the trigger label', async () => {
    const screen = await render(Collapsible, {
      props: { label: 'Details', children: 'Hidden body' },
    });
    await expect.element(screen.getByText('Details')).toBeVisible();
    await takeSnapshot('Collapsible - Default props');
  });

  test('reveals content when open', async () => {
    const screen = await render(Collapsible, {
      props: { label: 'Details', open: true, children: 'Visible body' },
    });
    await expect.element(screen.getByText('Visible body')).toBeVisible();
    await takeSnapshot('Collapsible - Open state');
  });

  test('disables the trigger when disabled', async () => {
    const screen = await render(Collapsible, {
      props: { label: 'Details', disabled: true, children: 'Body' },
    });
    await expect
      .element(screen.getByRole('button', { name: 'Details' }))
      .toBeDisabled();
    await takeSnapshot('Collapsible - Disabled state');
  });
});
