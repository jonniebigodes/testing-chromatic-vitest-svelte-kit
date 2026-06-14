<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SpringOscillator from './SpringOscillator.svelte';

  const { Story } = defineMeta({
    title: 'Animations/SpringOscillator',
    component: SpringOscillator,
  });
</script>

<Story name="Default" />
<Story name="WiderSpan" args={{ spanPx: 80 }} />
