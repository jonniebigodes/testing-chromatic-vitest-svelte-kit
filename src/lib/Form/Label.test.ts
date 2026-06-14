import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Label from './Label.svelte';
import { textSnippet } from '../../test-snippet';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Label', () => {
  test('renders its text', async () => {
    const screen = await render(Label, {
      props: { htmlFor: 'email', children: textSnippet('Email Address') },
    });
    await expect.element(screen.getByText('Email Address')).toBeVisible();
    await takeSnapshot('Label - Default props');
  });

  test('associates with a field via htmlFor', async () => {
    const screen = await render(Label, {
      props: { htmlFor: 'email', children: textSnippet('Email Address') },
    });
    await expect
      .element(screen.locator.locator('label[for="email"]'))
      .toHaveAttribute('for', 'email');
    await takeSnapshot('Label - Associated with field');
  });

  test('uses inverted text color when inverted', async () => {
    const screen = await render(Label, {
      props: { inverted: true, children: textSnippet('Inverted') },
    });
    await expect
      .element(screen.getByText('Inverted'))
      .toHaveStyle({ color: 'rgb(255, 255, 255)' });
    await takeSnapshot('Label - Inverted styling');
  });
});
