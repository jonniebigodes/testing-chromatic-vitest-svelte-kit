<script lang="ts">
  import Toolbar from './Toolbar.svelte';
  import type { ToolbarProps } from './Toolbar.types';

  let { orientation, buttons = ['One', 'Two'] }: ToolbarProps & { buttons?: string[] } = $props();
</script>

<Toolbar {orientation}>
  {#each buttons as label}
    <button type="button">{label}</button>
  {/each}
</Toolbar>
