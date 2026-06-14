<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Pill from './Pill.svelte';
  import PillAllVariants from './PillAllVariants.demo.svelte';
  import PillAllSizes from './PillAllSizes.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Pill',
    component: Pill,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        options: ['default', 'inverted', 'warning', 'success'],
      },
      size: { control: 'select', options: ['small', 'medium', 'large'] },
      disabled: { control: 'boolean' },
    },
    args: { onclick: fn() },
  });
</script>

<Story name="Default" args={{ variant: 'default', size: 'medium' }}>
  {#snippet template(args)}
    <Pill {...args}>Default Pill</Pill>
  {/snippet}
</Story>
<Story name="Inverted" args={{ variant: 'inverted', size: 'medium' }}>
  {#snippet template(args)}
    <Pill {...args}>Inverted Pill</Pill>
  {/snippet}
</Story>
<Story name="Warning" args={{ variant: 'warning', size: 'medium' }}>
  {#snippet template(args)}
    <Pill {...args}>Warning</Pill>
  {/snippet}
</Story>
<Story name="Success" args={{ variant: 'success', size: 'medium' }}>
  {#snippet template(args)}
    <Pill {...args}>Success</Pill>
  {/snippet}
</Story>
<Story name="Small" args={{ variant: 'default', size: 'small' }}>
  {#snippet template(args)}
    <Pill {...args}>Small Pill</Pill>
  {/snippet}
</Story>
<Story name="Medium" args={{ variant: 'default', size: 'medium' }}>
  {#snippet template(args)}
    <Pill {...args}>Medium Pill</Pill>
  {/snippet}
</Story>
<Story name="Large" args={{ variant: 'default', size: 'large' }}>
  {#snippet template(args)}
    <Pill {...args}>Large Pill</Pill>
  {/snippet}
</Story>
<Story name="Disabled" args={{ variant: 'default', size: 'medium', disabled: true }}>
  {#snippet template(args)}
    <Pill {...args}>Disabled</Pill>
  {/snippet}
</Story>
<Story
  name="Clickable"
  args={{ variant: 'default', size: 'medium', onclick: fn(() => alert('Pill clicked!')) }}
>
  {#snippet template(args)}
    <Pill {...args}>Click me</Pill>
  {/snippet}
</Story>
<Story name="AllVariants" asChild>
  <PillAllVariants />
</Story>
<Story name="AllSizes" asChild>
  <PillAllSizes />
</Story>
