<script lang="ts">
  import './AspectRatio.css';
  import type { AspectRatioProps } from './AspectRatio.types';
  import type { Snippet } from 'svelte';

  let { ratio, children }: AspectRatioProps & { children?: Snippet } = $props();

  const paddingBottom = $derived(`${(1 / ratio) * 100}%`);
</script>

<div class="aspect-ratio" style:padding-bottom={paddingBottom}>
  <div class="aspect-ratio__inner">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
