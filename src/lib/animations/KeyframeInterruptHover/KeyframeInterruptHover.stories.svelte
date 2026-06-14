<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import KeyframeInterruptHover from './KeyframeInterruptHover.svelte';

  const { Story } = defineMeta({
    title: 'Animations/KeyframeInterruptHover',
    component: KeyframeInterruptHover,
  });
</script>

<Story name="Default" />
<Story name="FasterInterrupts" args={{ keyframeCycleMs: 1200, interruptCycleMs: 320 }} />
