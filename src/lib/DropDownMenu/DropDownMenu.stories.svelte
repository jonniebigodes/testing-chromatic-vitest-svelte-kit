<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import DropDownMenu from './DropDownMenu.svelte';
  import DropDownMenuInverted from './DropDownMenuInverted.demo.svelte';
  import DropDownMenuMultiple from './DropDownMenuMultiple.demo.svelte';
  import DropDownMenuWithCallback from './DropDownMenuWithCallback.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/DropDownMenu',
    component: DropDownMenu,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: { onSelect: fn() },
  });
</script>

<Story
  name="Default"
  args={{
    label: 'Options',
    color: '#3b82f6',
    children: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    inverted: false,
  }}
/>
<Story
  name="CustomColor"
  args={{
    label: 'Actions',
    color: '#ef4444',
    children: ['Edit', 'Delete', 'Archive', 'Share'],
    inverted: false,
  }}
/>
<Story
  name="GreenColor"
  args={{
    label: 'Choose',
    color: '#10b981',
    children: ['Accept', 'Decline', 'Pending', 'Review'],
    inverted: false,
  }}
/>
<Story name="Inverted" asChild><DropDownMenuInverted /></Story>
<Story
  name="ManyOptions"
  args={{
    label: 'Countries',
    color: '#8b5cf6',
    children: [
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
      'France', 'Japan', 'Brazil', 'India', 'Mexico',
    ],
    inverted: false,
  }}
/>
<Story
  name="ShortOptions"
  args={{
    label: 'Priority',
    color: '#f59e0b',
    children: ['High', 'Medium', 'Low'],
    inverted: false,
  }}
/>
<Story name="WithCallback" asChild><DropDownMenuWithCallback /></Story>
<Story name="Multiple" asChild><DropDownMenuMultiple /></Story>
