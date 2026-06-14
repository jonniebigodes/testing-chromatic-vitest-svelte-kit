<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LoadingRipples from './LoadingRipples.svelte';

  const { Story } = defineMeta({
    title: 'Animations/LoadingRipples',
    component: LoadingRipples,
  });
</script>

<Story name="Default" />
<Story name="WarmTone" args={{ color: '#ea580c', ringCount: 4, cycleMs: 3000 }} />
