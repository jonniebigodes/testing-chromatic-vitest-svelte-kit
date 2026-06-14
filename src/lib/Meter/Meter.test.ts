import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import MeterTestWrapper from './Meter.test-wrapper.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Meter', () => {
  test('renders the label', async () => {
    const screen = await render(MeterTestWrapper, {
      props: { value: 40, label: 'Disk Usage' },
    });
    await expect.element(screen.getByText('Disk Usage')).toBeVisible();
    await takeSnapshot('Meter - Default props');
  });

  test('colors the range green when the value is in the optimal band', async () => {
    await render(MeterTestWrapper, {
      props: { value: 80, label: 'Health' },
    });
    const range = document.querySelector('[data-part="range"]') as HTMLElement | null;
    expect(range).not.toBeNull();
    expect(range!).toHaveStyle({ backgroundColor: 'rgb(102, 191, 60)' });
    await takeSnapshot('Meter - Optimal range');
  });

  test('colors the range red when the value is far below optimum', async () => {
    await render(MeterTestWrapper, {
      props: { value: 10, label: 'Health' },
    });
    const range = document.querySelector('[data-part="range"]') as HTMLElement | null;
    expect(range).not.toBeNull();
    expect(range!).toHaveStyle({ backgroundColor: 'rgb(232, 28, 97)' });
    await takeSnapshot('Meter - Far below optimum');
  });
});
