<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FillTextLoading from './FillTextLoading.svelte';

  const { Story } = defineMeta({
    title: 'Animations/FillTextLoading',
    component: FillTextLoading,
  });
</script>

<Story name="Default" />
<Story name="LongLabel" args={{ label: 'Synchronizing', cycleMs: 3000 }} />
