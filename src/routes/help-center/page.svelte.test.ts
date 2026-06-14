import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/HelpCenter' });

describe('/accordion – Help Center', () => {
  test('renders the Help Center heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Help Center' })).toBeVisible();
    await takeSnapshot('Help Center - heading');
  });

  test('renders all three FAQ sections', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Getting Started' })).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Billing & Plans' })).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Technical' })).toBeVisible();
    await takeSnapshot('Help Center - section headings');
  });

  test('renders FAQ triggers in Getting Started', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: /How do I create a new account/ })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: /Is there a free trial/ })).toBeVisible();
    await takeSnapshot('Help Center - getting started triggers');
  });

  test('first Getting Started item is expanded by default', async () => {
    const screen = await render(Page);
    await expect
      .element(screen.getByText(/Click the "Sign up for free" button/))
      .toBeVisible();
    await takeSnapshot('Help Center - first item expanded');
  });

  test('expands a billing question on click', async () => {
    const screen = await render(Page);
    // item-0 of each Accordion section is open by default; click a closed item (item-1)
    await screen.getByRole('button', { name: /Can I change my plan/ }).click();
    await expect.element(screen.getByText(/you can upgrade or downgrade/)).toBeVisible();
    await takeSnapshot('Help Center - billing question expanded');
  });

  test('renders the contact support callout', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Still have questions?')).toBeVisible();
    await takeSnapshot('Help Center - contact callout');
  });
});
