import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Checkbox from './Checkbox.svelte';
import { textSnippet } from '../../test-snippet';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Checkbox', () => {
  test('renders its label', async () => {
    const screen = await render(Checkbox, {
      props: { children: textSnippet('Accept terms') },
    });
    await expect.element(screen.getByText('Accept terms')).toBeVisible();
    await takeSnapshot('Checkbox - Default props');
  });

  test('reflects the checked prop', async () => {
    const screen = await render(Checkbox, {
      props: { checked: true, children: textSnippet('Subscribed') },
    });
    await expect.element(screen.getByRole('checkbox')).toBeChecked();
    await takeSnapshot('Checkbox - Checked state');
  });

  test('invokes onCheckedChange when toggled', async () => {
    const onCheckedChange = vi.fn();
    const screen = await render(Checkbox, {
      props: { onCheckedChange, children: textSnippet('Toggle me') },
    });
    await screen.getByText('Toggle me').click();
    expect(onCheckedChange).toHaveBeenCalled();
    await takeSnapshot('Checkbox - Toggled');
  });

  test('does not toggle when disabled', async () => {
    const onCheckedChange = vi.fn();
    const screen = await render(Checkbox, {
      props: {
        disabled: true,
        onCheckedChange,
        children: textSnippet('Disabled'),
      },
    });
    await screen.getByText('Disabled').click({ force: true });
    expect(onCheckedChange).not.toHaveBeenCalled();
    await takeSnapshot('Checkbox - Disabled state');
  });
});
