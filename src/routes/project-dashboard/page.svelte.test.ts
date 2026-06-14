import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/ProjectDashboard' });

describe('/progress – Project Dashboard', () => {
  test('renders the Project Dashboard heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Project Dashboard' })).toBeVisible();
    await takeSnapshot('Project Dashboard - heading');
  });

  test('renders project names in the progress section', async () => {
    const screen = await render(Page);
    // Each project name appears twice (card header + Progress label), so use .first()
    await expect.element(screen.getByText('Website Redesign').first()).toBeVisible();
    await expect.element(screen.getByText('Mobile App v2').first()).toBeVisible();
    await expect.element(screen.getByText('API Migration').first()).toBeVisible();
    await takeSnapshot('Project Dashboard - project names');
  });

  test('renders progress bars for each project', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('progressbar').first()).toBeVisible();
    await takeSnapshot('Project Dashboard - progress bars');
  });

  test('renders status pills for projects', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('On track').first()).toBeVisible();
    await expect.element(screen.getByText('At risk')).toBeVisible();
    await takeSnapshot('Project Dashboard - status pills');
  });

  test('renders server health meters', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('CPU Usage')).toBeVisible();
    await expect.element(screen.getByText('Memory Usage')).toBeVisible();
    await expect.element(screen.getByText('Disk I/O')).toBeVisible();
    await expect.element(screen.getByRole('meter').first()).toBeVisible();
    await takeSnapshot('Project Dashboard - server health meters');
  });

  test('renders the team satisfaction rating', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Sprint Rating')).toBeVisible();
    await takeSnapshot('Project Dashboard - team satisfaction');
  });
});
