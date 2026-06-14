<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import ColorInterpolation from './ColorInterpolation.svelte';

  const { Story } = defineMeta({
    title: 'Animations/ColorInterpolation',
    component: ColorInterpolation,
  });
</script>

<Story name="Default" />
<Story name="SlowerSweep" args={{ durationMs: 6000 }} />
