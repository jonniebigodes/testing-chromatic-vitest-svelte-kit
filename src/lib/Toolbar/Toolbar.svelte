<script lang="ts">
  import './Toolbar.css';
  import type { ToolbarProps } from './Toolbar.types';
  import type { Snippet } from 'svelte';

  let { orientation = 'horizontal', children }: ToolbarProps & { children?: Snippet } = $props();

  const isHorizontal = $derived(orientation === 'horizontal');
</script>

<div
  role="toolbar"
  aria-orientation={orientation}
  class={['toolbar', isHorizontal ? 'toolbar--horizontal' : 'toolbar--vertical'].join(' ')}
>
  {#if children}
    {@render children()}
  {/if}
</div>
