import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/SignIn' });

describe('/forms – Sign In', () => {
  test('renders the welcome heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await takeSnapshot('Sign In - heading');
  });

  test('renders the email input', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('textbox', { name: /email/i })).toBeVisible();
    await takeSnapshot('Sign In - email input');
  });

  test('renders the login button', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: 'Login' })).toBeVisible();
    await takeSnapshot('Sign In - login button');
  });

  test('renders the sign up link', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('link', { name: 'Sign up for free' })).toBeVisible();
    await takeSnapshot('Sign In - sign up link');
  });

  test('renders the forgot password link', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
    await takeSnapshot('Sign In - forgot password link');
  });
});
