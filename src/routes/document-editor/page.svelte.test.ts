import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/DocumentEditor' });

describe('/toolbar – Document Editor', () => {
  test('renders the Document Editor heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Document Editor' })).toBeVisible();
    await takeSnapshot('Document Editor - heading');
  });

  test('renders the formatting toolbar', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('toolbar')).toBeVisible();
    await takeSnapshot('Document Editor - toolbar');
  });

  test('renders bold, italic and underline toggle buttons', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: 'Bold' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Italic' })).toBeVisible();
    await expect.element(screen.getByRole('button', { name: 'Underline' })).toBeVisible();
    await takeSnapshot('Document Editor - format toggles');
  });

  test('renders the font size slider', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText(/Size: 16px/)).toBeVisible();
    await expect.element(screen.getByRole('slider')).toBeVisible();
    await takeSnapshot('Document Editor - font size slider');
  });

  test('renders the editable content area', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText(/This is an editable document/)).toBeVisible();
    await takeSnapshot('Document Editor - content area');
  });
});
