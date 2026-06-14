import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Header from './Header.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
];

describe('Header', () => {
  test('renders the title', async () => {
    const screen = await render(Header, {
      props: { title: 'Dashboard' },
    });
    await expect
      .element(screen.getByRole('heading', { name: 'Dashboard' }))
      .toBeVisible();
    await takeSnapshot('Header - Default props');
  });

  test('renders navigation links', async () => {
    const screen = await render(Header, {
      props: { title: 'App', links },
    });
    await expect.element(screen.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect.element(screen.getByRole('link', { name: 'About' })).toBeVisible();
    await takeSnapshot('Header - Navigation links');
  });

  test('invokes onLinkClick with the clicked link', async () => {
    const onLinkClick = vi.fn();
    const screen = await render(Header, {
      props: { title: 'App', links, onLinkClick },
    });
    await screen.getByRole('link', { name: 'About' }).click();
    expect(onLinkClick).toHaveBeenCalledWith(links[1]);
    await takeSnapshot('Header - Link click');
  });
});
