<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Collapsible from './Collapsible.svelte';
  import CollapsibleControlled from './CollapsibleControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Collapsible',
    component: Collapsible,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      open: { control: 'boolean' },
      disabled: { control: 'boolean' },
      label: { control: 'text' },
      children: { control: 'text' },
    },
    args: { onOpenChange: fn() },
  });
</script>

<div style="width: 500px; max-width: 100%;">
  <Story
    name="Default"
    args={{
      label: 'Click to expand',
      children: 'This is the collapsible content that can be shown or hidden.',
    }}
  />
  <Story
    name="Open"
    args={{
      open: true,
      label: 'This collapsible is open',
      children:
        'This content is visible by default because the collapsible is in an open state.',
    }}
  />
  <Story
    name="Closed"
    args={{
      open: false,
      label: 'This collapsible is closed',
      children: 'This content is hidden by default.',
    }}
  />
  <Story
    name="Disabled"
    args={{
      disabled: true,
      label: 'This collapsible is disabled',
      children: 'This content cannot be toggled because the collapsible is disabled.',
    }}
  />
  <Story
    name="DisabledOpen"
    args={{
      disabled: true,
      open: true,
      label: 'This is disabled and open',
      children:
        'This content is visible but cannot be toggled because the collapsible is disabled.',
    }}
  />
  <Story name="Controlled" asChild>
    <CollapsibleControlled />
  </Story>
</div>
