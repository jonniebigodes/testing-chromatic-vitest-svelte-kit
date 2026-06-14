<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LoadingPulseDots from './LoadingPulseDots.svelte';

  const { Story } = defineMeta({
    title: 'Animations/LoadingPulseDots',
    component: LoadingPulseDots,
  });
</script>

<Story name="Default" />
<Story name="Compact" args={{ dotCount: 7, cycleMs: 1000, color: '#0d9488' }} />
