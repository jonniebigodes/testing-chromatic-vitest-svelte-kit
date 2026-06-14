import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/CreateAccount' });

describe('/select – Create Account', () => {
  test('renders the Create your account heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Create your account' })).toBeVisible();
    await takeSnapshot('Create Account - heading');
  });

  test('renders the step indicator for step 1', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Step 1 of 3')).toBeVisible();
    await takeSnapshot('Create Account - step 1');
  });

  test('renders the role select on step 1', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: "What's your role?" })).toBeVisible();
    await expect.element(screen.getByText('Select your role')).toBeVisible();
    await takeSnapshot('Create Account - role select');
  });

  test('advances to step 2 when Continue is clicked', async () => {
    const screen = await render(Page);
    await screen.getByRole('button', { name: 'Continue' }).click();
    await expect.element(screen.getByText('Step 2 of 3')).toBeVisible();
    await expect.element(screen.getByRole('heading', { name: 'Your tech stack' })).toBeVisible();
    await takeSnapshot('Create Account - step 2');
  });

  test('advances to step 3 and shows plan radio group', async () => {
    const screen = await render(Page);
    await screen.getByRole('button', { name: 'Continue' }).click();
    await screen.getByRole('button', { name: 'Continue' }).click();
    await expect.element(screen.getByText('Step 3 of 3')).toBeVisible();
    await expect.element(screen.getByRole('radio', { name: /Free/ })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Create account' })).toBeVisible();
    await takeSnapshot('Create Account - step 3 with plans');
  });
});
