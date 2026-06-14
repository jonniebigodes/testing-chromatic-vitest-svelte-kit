<script lang="ts">
  import Button from '$lib/Button';
  import { Pill } from '$lib/Pill';

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];
  let activeCategory = $state('All');

  const products = [
    { name: 'Wireless Headphones', price: '$89.99', category: 'Electronics', badge: 'Best Seller' as const },
    { name: 'Running Shoes', price: '$64.99', category: 'Clothing', badge: 'New' as const },
    { name: 'The Great Gatsby', price: '$12.99', category: 'Books', badge: null },
    { name: 'Indoor Plant Pot', price: '$24.99', category: 'Home & Garden', badge: 'Sale' as const },
    { name: 'USB-C Hub', price: '$39.99', category: 'Electronics', badge: null },
    { name: 'Yoga Mat', price: '$29.99', category: 'Clothing', badge: 'New' as const },
  ];

  const filteredProducts = $derived(
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory),
  );
</script>

<main style="padding: 2rem;">
  <h1>Product Catalog</h1>
  <p style="color:#64748b;margin-bottom:1.5rem;">Browse our collection of {products.length} products</p>

  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2rem;">
    {#each categories as cat (cat)}
      <Pill
        variant={activeCategory === cat ? 'success' : 'default'}
        onclick={() => { activeCategory = cat; }}
      >{cat}</Pill>
    {/each}
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem;">
    {#each filteredProducts as product (product.name)}
      <div style="border:1px solid #e2e8f0;border-radius:0.5rem;padding:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.5rem;">
          <h3 style="margin:0;font-size:1rem;">{product.name}</h3>
          {#if product.badge}
            <Pill size="small" variant={product.badge === 'Sale' ? 'warning' : 'success'}>{product.badge}</Pill>
          {/if}
        </div>
        <p style="color:#64748b;margin:0.25rem 0 1rem;font-size:1.125rem;font-weight:600;">{product.price}</p>
        <Button label="Add to Cart" size="small" />
      </div>
    {/each}
  </div>
</main>
