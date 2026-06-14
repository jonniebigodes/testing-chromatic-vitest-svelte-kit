import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/TeamDirectory' });

describe('/avatar – Team Directory', () => {
  test('renders the Our Team heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Our Team' })).toBeVisible();
    await takeSnapshot('Team Directory - heading');
  });

  test('renders team member names', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Sarah Chen')).toBeVisible();
    await expect.element(screen.getByText('Marcus Webb')).toBeVisible();
    await expect.element(screen.getByText('Priya Patel')).toBeVisible();
    await takeSnapshot('Team Directory - team members');
  });

  test('renders avatar initials as fallback', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('SC')).toBeVisible();
    await expect.element(screen.getByText('MW')).toBeVisible();
    await takeSnapshot('Team Directory - avatar fallbacks');
  });

  test('renders department filter pills', async () => {
    const screen = await render(Page);
    // Use exact:true — "Engineering"/"Design"/"Product" are substrings of role names like "Engineering Manager"/"Product Designer"
    await expect.element(screen.getByText('Engineering', { exact: true })).toBeVisible();
    await expect.element(screen.getByText('Design', { exact: true })).toBeVisible();
    await expect.element(screen.getByText('Product', { exact: true })).toBeVisible();
    await takeSnapshot('Team Directory - department filters');
  });

  test('filters by department when pill is clicked', async () => {
    const screen = await render(Page);
    await screen.getByText('Design', { exact: true }).click();
    await expect.element(screen.getByText('Priya Patel')).toBeVisible();
    await takeSnapshot('Team Directory - filtered by Design');
  });
});
