<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ParallaxLayers from './ParallaxLayers.svelte';

  const { Story } = defineMeta({
    title: 'Animations/ParallaxLayers',
    component: ParallaxLayers,
  });
</script>

<Story name="Horizontal" args={{ axis: 'horizontal' }} />
<Story name="Vertical" args={{ axis: 'vertical', durationMs: 4200 }} />
