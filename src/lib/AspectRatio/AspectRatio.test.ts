import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import AspectRatioTestWrapper from './AspectRatio.test-wrapper.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('AspectRatio', () => {
  test('renders its children', async () => {
    const screen = await render(AspectRatioTestWrapper, {
      props: { ratio: 16 / 9, content: 'Framed' },
    });
    await expect.element(screen.getByText('Framed')).toBeVisible();
    await takeSnapshot('AspectRatio with child content');
  });

  test('centers content inside the frame', async () => {
    const screen = await render(AspectRatioTestWrapper, {
      props: { ratio: 1, content: 'Square' },
    });
    const inner = screen.getByText('Square').element().parentElement!;
    expect(inner).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });
    await takeSnapshot('AspectRatio with centered content');
  });
});
