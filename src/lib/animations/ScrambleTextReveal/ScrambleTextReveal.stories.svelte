<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrambleTextReveal from './ScrambleTextReveal.svelte';

  const { Story } = defineMeta({
    title: 'Animations/ScrambleTextReveal',
    component: ScrambleTextReveal,
  });
</script>

<Story name="Default" />
<Story
  name="StatusLabels"
  args={{
    words: ['Idle', 'Fetching', 'Ready'],
    wordHoldMs: 2800,
    scrambleTickMs: 40,
  }}
/>
