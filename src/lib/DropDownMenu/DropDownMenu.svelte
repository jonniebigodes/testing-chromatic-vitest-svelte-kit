<script lang="ts">
  import './DropDownMenu.css';
  import type { DropDownMenuProps } from './DropDownMenu.types';

  let {
    color: customColor,
    label,
    children,
    inverted = false,
    onSelect,
  }: DropDownMenuProps = $props();

  const buttonColor = $derived(
    inverted ? 'var(--color-slate-800)' : (customColor ?? 'var(--color-blue-500)'),
  );

  let open = $state(false);
  let rootRef = $state<HTMLDivElement | null>(null);

  $effect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef && !rootRef.contains(event.target as Node)) {
        open = false;
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') open = false;
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleSelect(item: string) {
    onSelect?.(item);
    open = false;
  }
</script>

<div class="dropdown-menu" bind:this={rootRef}>
  <button
    type="button"
    class="dropdown-menu__trigger"
    style={`background-color: ${buttonColor}`}
    aria-haspopup="menu"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    {label}
    <span class="dropdown-menu__chevron">▼</span>
  </button>
  {#if open}
    <div class="dropdown-menu__panel">
      <div
        role="menu"
        class={[
          'dropdown-menu__menu',
          inverted ? 'dropdown-menu__menu--inverted' : 'dropdown-menu__menu--default',
        ].join(' ')}
      >
        {#each children as item, index (index)}
          <button
            type="button"
            role="menuitem"
            class={[
              'dropdown-menu__item',
              inverted ? 'dropdown-menu__item--inverted' : 'dropdown-menu__item--default',
            ].join(' ')}
            onclick={() => handleSelect(item)}
          >
            {item}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
