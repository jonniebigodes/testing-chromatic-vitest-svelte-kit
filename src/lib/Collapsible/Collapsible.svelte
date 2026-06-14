<script lang="ts">
  import './Collapsible.css';
  import type { CollapsibleProps } from './Collapsible.types';

  let {
    open,
    onOpenChange,
    disabled = false,
    label = 'Toggle',
    children,
    labelContent,
  }: CollapsibleProps = $props();

  const contentId = `collapsible-${Math.random().toString(36).slice(2, 9)}`;
  let internalOpen = $state(false);
  const isControlled = $derived(open !== undefined);
  const isOpen = $derived(isControlled ? open : internalOpen);

  function toggle() {
    if (disabled) return;
    const next = !isOpen;
    if (!isControlled) internalOpen = next;
    onOpenChange?.({ open: next });
  }
</script>

<div class="collapsible">
  <button
    type="button"
    class="collapsible__trigger"
    onclick={toggle}
    {disabled}
    aria-expanded={isOpen}
    aria-controls={contentId}
  >
    {#if labelContent}
      {@render labelContent()}
    {:else}
      <span>{label}</span>
    {/if}
    <span class="collapsible__chevron" class:collapsible__chevron--open={isOpen}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 4L10 8L6 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
  {#if isOpen}
    <div id={contentId} role="region" class="collapsible__content">
      {#if typeof children === 'string'}
        {children}
      {:else if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>
