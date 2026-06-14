<script lang="ts">
  import { untrack } from 'svelte';
  import './Accordion.css';
  import type { AccordionProps } from './Accordion.types';

  let { inverted = false, items }: AccordionProps = $props();

  const baseId = `accordion-${Math.random().toString(36).slice(2, 9)}`;
  let openItems = $state<string[]>(
    untrack(() => (items.length > 0 ? ['item-0'] : [])),
  );

  function toggleItem(value: string) {
    openItems = openItems.includes(value)
      ? openItems.filter((v) => v !== value)
      : [...openItems, value];
  }
</script>

<div class={['accordion', inverted ? 'accordion--inverted' : ''].filter(Boolean).join(' ')}>
  {#each items as item, index (index)}
    {@const value = `item-${index}`}
    {@const isOpen = openItems.includes(value)}
    {@const triggerId = `${baseId}-trigger-${index}`}
    {@const contentId = `${baseId}-content-${index}`}
    <div class="accordion__item">
      <button
        type="button"
        id={triggerId}
        class="accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onclick={() => toggleItem(value)}
      >
        <span>{item.title}</span>
        <span class="accordion__chevron" class:accordion__chevron--open={isOpen}>▼</span>
      </button>
      {#if isOpen}
        <div id={contentId} role="region" aria-labelledby={triggerId} class="accordion__content">
          {item.content}
        </div>
      {/if}
    </div>
  {/each}
</div>
