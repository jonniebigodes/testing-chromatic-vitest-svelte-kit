<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Meter from './Meter.svelte';

  const { Story } = defineMeta({
    title: 'Components/Meter',
    component: Meter,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      min: { control: 'number' },
      max: { control: 'number' },
      value: { control: 'number' },
      optimum: { control: 'number' },
      low: { control: 'number' },
      high: { control: 'number' },
    },
  });
</script>

<Story name="Default" args={{ value: 50, min: 0, max: 100 }}>
  {#snippet template(args)}
    <Meter {...args}>Usage</Meter>
  {/snippet}
</Story>
<Story name="CustomRange" args={{ value: 150, min: 0, max: 200 }}>
  {#snippet template(args)}
    <Meter {...args}>Storage Usage</Meter>
  {/snippet}
</Story>
<Story name="LowValue" args={{ value: 25, min: 0, max: 100, optimum: 20, low: 30, high: 70 }}>
  {#snippet template(args)}
    <Meter {...args}>Temperature</Meter>
  {/snippet}
</Story>
<Story name="HighValue" args={{ value: 85, min: 0, max: 100, optimum: 100, low: 33, high: 66 }}>
  {#snippet template(args)}
    <Meter {...args}>Download Speed</Meter>
  {/snippet}
</Story>
<Story name="CriticalValue" args={{ value: 95, min: 0, max: 100, optimum: 20, low: 30, high: 70 }}>
  {#snippet template(args)}
    <Meter {...args}>CPU Temperature</Meter>
  {/snippet}
</Story>
<Story name="MinimalNoLabel" args={{ value: 60, min: 0, max: 100 }} />
<Story name="FullRange" args={{ value: 100, min: 0, max: 100 }}>
  {#snippet template(args)}
    <Meter {...args}>Complete</Meter>
  {/snippet}
</Story>
