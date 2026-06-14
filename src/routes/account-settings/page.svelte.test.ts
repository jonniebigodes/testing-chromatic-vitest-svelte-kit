import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/AccountSettings' });

describe('/interactive – Account Settings', () => {
  test('renders the Account Settings heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Account Settings' })).toBeVisible();
    await takeSnapshot('Account Settings - heading');
  });

  test('renders collapsible section triggers', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: /Notification Preferences/ })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: /Two-Factor Authentication/ })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: /Privacy & Data/ })).toBeVisible();
    await takeSnapshot('Account Settings - collapsible triggers');
  });

  test('reveals notification toggles when section is expanded', async () => {
    const screen = await render(Page);
    await screen.getByRole('button', { name: /Notification Preferences/ }).click();
    await expect.element(screen.getByText('Email notifications')).toBeVisible();
    await expect.element(screen.getByText('Push notifications')).toBeVisible();
    await takeSnapshot('Account Settings - notifications expanded');
  });

  test('reveals PIN input when 2FA section is expanded', async () => {
    const screen = await render(Page);
    await screen.getByRole('button', { name: /Two-Factor Authentication/ }).click();
    await expect.element(screen.getByText('Verification code')).toBeVisible();
    await takeSnapshot('Account Settings - 2FA expanded');
  });

  test('reveals privacy callout when Privacy section is expanded', async () => {
    const screen = await render(Page);
    await screen.getByRole('button', { name: /Privacy & Data/ }).click();
    await expect.element(screen.getByText(/Your data is stored securely/)).toBeVisible();
    await takeSnapshot('Account Settings - privacy expanded');
  });
});
