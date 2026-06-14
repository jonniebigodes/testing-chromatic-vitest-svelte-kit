<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BasicAnimation from './BasicAnimation.svelte';

  const { Story } = defineMeta({
    title: 'Animations/BasicAnimation',
    component: BasicAnimation,
  });
</script>

<Story name="Default" />
