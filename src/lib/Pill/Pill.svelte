<script lang="ts">
  import './Pill.css';
  import type { PillProps } from './Pill.types';
  import type { Snippet } from 'svelte';

  let {
    variant = 'default',
    size = 'medium',
    onclick,
    disabled = false,
    children,
  }: PillProps & { children?: Snippet } = $props();

  const isInteractive = $derived(!disabled && !!onclick);

  function handleClick() {
    if (!disabled && onclick) {
      onclick();
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
  class={[
    'pill',
    `pill--${size}`,
    disabled ? 'pill--disabled' : `pill--${variant}`,
    isInteractive && 'pill--interactive',
  ]
    .filter(Boolean)
    .join(' ')}
  onclick={handleClick}
>
  {#if children}
    {@render children()}
  {/if}
</span>
