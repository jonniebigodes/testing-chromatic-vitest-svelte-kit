import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/BookAppointment' });

describe('/pickers – Book an Appointment', () => {
  test('renders the page heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Book an Appointment' })).toBeVisible();
    await takeSnapshot('Book Appointment - heading');
  });

  test('renders the calendar', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Select a Date' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: /previous/i }).first()).toBeVisible();
    await takeSnapshot('Book Appointment - calendar');
  });

  test('renders meeting type radio group', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('radio', { name: 'In-person' })).toBeVisible();
    await expect.element(screen.getByRole('radio', { name: 'Video call' })).toBeVisible();
    await expect.element(screen.getByRole('radio', { name: 'Phone call' })).toBeVisible();
    await takeSnapshot('Book Appointment - meeting type options');
  });

  test('renders the date picker section', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Pick a Start Date' })).toBeVisible();
    await takeSnapshot('Book Appointment - date picker');
  });

  test('renders the time slot select', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Choose a time slot')).toBeVisible();
    await takeSnapshot('Book Appointment - time slot select');
  });

  test('renders the booking info callout', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText(/Appointments are 30 minutes long/)).toBeVisible();
    await takeSnapshot('Book Appointment - info callout');
  });
});
