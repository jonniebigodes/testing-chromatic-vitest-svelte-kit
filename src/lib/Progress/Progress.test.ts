import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Progress from './Progress.svelte';
import ProgressTestWrapper from './Progress.test-wrapper.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Progress', () => {
  test('renders the default label', async () => {
    const screen = await render(Progress, { props: { value: 50 } });
    await expect.element(screen.getByText('Loading...')).toBeVisible();
    await takeSnapshot('Progress - Default props');
  });

  test('renders a custom label', async () => {
    const screen = await render(ProgressTestWrapper, {
      props: { value: 50, label: 'Uploading' },
    });
    await expect.element(screen.getByText('Uploading')).toBeVisible();
    await takeSnapshot('Progress - Custom label');
  });

  test('exposes the value via the progressbar role', async () => {
    const screen = await render(Progress, { props: { value: 75 } });
    await expect
      .element(screen.getByRole('progressbar'))
      .toHaveAttribute('aria-valuenow', '75');
    await takeSnapshot('Progress - ARIA attributes');
  });
});
