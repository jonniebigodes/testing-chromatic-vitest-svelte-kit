<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RotationLoop from './RotationLoop.svelte';

  const { Story } = defineMeta({
    title: 'Animations/RotationLoop',
    component: RotationLoop,
  });
</script>

<Story name="Default" />
<Story name="Slower" args={{ durationMs: 6000 }} />
