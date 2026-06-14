import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/LandingPage' });

describe('/navigation – Landing Page', () => {
  test('renders the site header with brand name', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('banner')).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Acme Corp' })).toBeVisible();
    await takeSnapshot('Landing Page - header');
  });

  test('renders all navigation links', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect.element(screen.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect.element(screen.getByRole('link', { name: 'Docs' })).toBeVisible();
    await takeSnapshot('Landing Page - nav links');
  });

  test('renders the hero headline', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: /Build products faster/ })).toBeVisible();
    await takeSnapshot('Landing Page - hero headline');
  });

  test('renders call-to-action buttons', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: 'Get started for free' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'View live demo' })).toBeVisible();
    await takeSnapshot('Landing Page - CTA buttons');
  });

  test('renders the features section', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Fast & Reliable')).toBeVisible();
    await expect.element(screen.getByText('Secure by Default')).toBeVisible();
    await expect.element(screen.getByText('Easy Integration')).toBeVisible();
    await takeSnapshot('Landing Page - features section');
  });

  test('renders the footer with copyright', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('contentinfo')).toBeVisible();
    await expect.element(screen.getByText('© 2025 Acme Corp. All rights reserved.')).toBeVisible();
    await takeSnapshot('Landing Page - footer');
  });
});
