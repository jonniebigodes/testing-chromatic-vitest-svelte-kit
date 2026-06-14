import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import TimeField from './TimeField.svelte';
import { textSnippet } from '../../test-snippet';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('TimeField', () => {
  test('renders its label', async () => {
    const screen = await render(TimeField, {
      props: { children: textSnippet('Start time') },
    });
    await expect.element(screen.getByText('Start time')).toBeVisible();
    await takeSnapshot('TimeField - Default props');
  });

  test('shows a clear button when a value is set', async () => {
    const screen = await render(TimeField, {
      props: { value: '14:30', children: textSnippet('Time') },
    });
    await expect
      .element(screen.getByRole('button', { name: 'Clear time' }))
      .toBeVisible();
    await takeSnapshot('TimeField - Clear button visible');
  });

  test('clears the value when the clear button is clicked', async () => {
    const onValueChange = vi.fn();
    const screen = await render(TimeField, {
      props: {
        value: '14:30',
        onValueChange,
        children: textSnippet('Time'),
      },
    });
    await screen.getByRole('button', { name: 'Clear time' }).click();
    expect(onValueChange).toHaveBeenCalledWith(
      expect.objectContaining({ value: '' }),
    );
    await takeSnapshot('TimeField - Value cleared');
  });

  test('hides the clear button when disabled', async () => {
    const screen = await render(TimeField, {
      props: { value: '14:30', disabled: true, children: textSnippet('Time') },
    });
    expect(
      screen.getByRole('button', { name: 'Clear time' }).query(),
    ).toBeNull();
    await takeSnapshot('TimeField - Clear button hidden when disabled');
  });
});
