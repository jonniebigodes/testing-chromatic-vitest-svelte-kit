<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BounceElevation from './BounceElevation.svelte';

  const { Story } = defineMeta({
    title: 'Animations/BounceElevation',
    component: BounceElevation,
  });
</script>

<Story name="Default" />
<Story name="HigherLift" args={{ liftPx: 52, cycleMs: 1800 }} />
