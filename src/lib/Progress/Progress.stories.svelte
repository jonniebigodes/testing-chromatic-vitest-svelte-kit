<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Progress from './Progress.svelte';
  import ProgressControlled from './ProgressControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Progress',
    component: Progress,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      min: { control: 'number' },
      max: { control: 'number' },
      value: { control: 'number' },
      disabled: { control: 'boolean' },
      readonly: { control: 'boolean' },
      orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    },
  });
</script>

<Story name="Default" args={{ value: 50, min: 0, max: 100 }} />
<Story name="CustomRange" args={{ value: 75, min: 0, max: 200 }}>
  {#snippet template(args)}
    <Progress {...args}>Custom Range Progress</Progress>
  {/snippet}
</Story>
<Story name="Disabled" args={{ value: 60, disabled: true }}>
  {#snippet template(args)}
    <Progress {...args}>Disabled Progress</Progress>
  {/snippet}
</Story>
<Story name="ReadOnly" args={{ value: 75, readonly: true }}>
  {#snippet template(args)}
    <Progress {...args}>Read-only Progress</Progress>
  {/snippet}
</Story>
<Story name="Vertical" args={{ value: 65, orientation: 'vertical' }}>
  {#snippet template(args)}
    <Progress {...args}>Vertical Progress</Progress>
  {/snippet}
</Story>
<Story name="ZeroProgress" args={{ value: 0 }}>
  {#snippet template(args)}
    <Progress {...args}>Not Started</Progress>
  {/snippet}
</Story>
<Story name="Complete" args={{ value: 100 }}>
  {#snippet template(args)}
    <Progress {...args}>Complete!</Progress>
  {/snippet}
</Story>
<Story name="CustomChildren" args={{ value: 45 }}>
  {#snippet template(args)}
    <Progress {...args}>Uploading files...</Progress>
  {/snippet}
</Story>
<Story name="Controlled" asChild>
  <ProgressControlled />
</Story>
