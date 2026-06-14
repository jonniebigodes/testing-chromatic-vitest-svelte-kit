<script lang="ts">
  import Select from './Select.svelte';
  import { frameworks, countries } from './select-data';

  let framework = $state<string[]>([]);
  let country = $state<string[]>([]);
</script>

<div class="select-multi">
  <h3>Multiple Independent Selects</h3>
  <Select
    items={frameworks}
    value={framework}
    onValueChange={(details) => (framework = details.value)}
  >
    {#snippet children()}Framework{/snippet}
  </Select>
  <Select
    items={countries}
    value={country}
    onValueChange={(details) => (country = details.value)}
  >
    {#snippet children()}Country{/snippet}
  </Select>
  <div class="select-multi__status">
    <div><strong>Framework:</strong> {framework.length > 0 ? framework.join(', ') : 'None'}</div>
    <div><strong>Country:</strong> {country.length > 0 ? country.join(', ') : 'None'}</div>
  </div>
</div>

<style>
  .select-multi {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
    padding: var(--spacing-5);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--spacing-2);
    min-width: 400px;
  }
  .select-multi h3 {
    margin: 0 0 var(--spacing-2) 0;
    font-size: var(--font-size-16);
  }
  .select-multi__status {
    padding: var(--spacing-3);
    background-color: var(--color-slate-100);
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
  }
</style>
