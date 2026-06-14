import { describe, test, expect, vi } from 'vitest';
import { render } from '../../test-setup';
import Footer from './Footer.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('Footer', () => {
  test('renders the label text', async () => {
    const screen = await render(Footer, {
      props: { label: '© 2025 Acme' },
    });
    await expect.element(screen.getByText('© 2025 Acme')).toBeVisible();
    await takeSnapshot('Footer - Default props');
  });

  test('renders the provided links', async () => {
    const screen = await render(Footer, {
      props: { links: ['Privacy', 'Terms'] },
    });
    await expect.element(screen.getByText('Privacy')).toBeVisible();
    await expect.element(screen.getByText('Terms')).toBeVisible();
    await takeSnapshot('Footer - Links visible');
  });

  test('invokes onLinkClick with the clicked link', async () => {
    const onLinkClick = vi.fn();
    const screen = await render(Footer, {
      props: { onLinkClick, links: ['Privacy'] },
    });
    await screen.getByText('Privacy').click();
    expect(onLinkClick).toHaveBeenCalledWith('Privacy');
    await takeSnapshot('Footer - Link clicked');
  });
});
