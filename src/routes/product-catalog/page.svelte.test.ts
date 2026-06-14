import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import Page from './+page.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({ title: 'Routes/ProductCatalog' });

describe('/buttons – Product Catalog', () => {
  test('renders the page heading', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('heading', { name: 'Product Catalog' })).toBeVisible();
    await takeSnapshot('Product Catalog - heading');
  });

  test('renders all six products by default', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Wireless Headphones')).toBeVisible();
    await expect.element(screen.getByText('Running Shoes')).toBeVisible();
    await expect.element(screen.getByText('The Great Gatsby')).toBeVisible();
    await takeSnapshot('Product Catalog - all products visible');
  });

  test('renders Add to Cart buttons for each product', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByRole('button', { name: 'Add to Cart' }).first()).toBeVisible();
    await takeSnapshot('Product Catalog - add to cart buttons');
  });

  test('renders category filter pills', async () => {
    const screen = await render(Page);
    await expect.element(screen.getByText('Electronics')).toBeVisible();
    await expect.element(screen.getByText('Clothing')).toBeVisible();
    await expect.element(screen.getByText('Books')).toBeVisible();
    await takeSnapshot('Product Catalog - category filters');
  });

  test('filters products when a category pill is clicked', async () => {
    const screen = await render(Page);
    await screen.getByText('Books').click();
    await expect.element(screen.getByText('The Great Gatsby')).toBeVisible();
    await takeSnapshot('Product Catalog - filtered by Books');
  });
});
