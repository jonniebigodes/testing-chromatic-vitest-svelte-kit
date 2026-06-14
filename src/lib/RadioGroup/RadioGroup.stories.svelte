<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import RadioGroup from './RadioGroup.svelte';
  import type { RadioOption } from './RadioGroup.types';

  const frameworks: RadioOption[] = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const sizes: RadioOption[] = [
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' },
    { label: 'Extra Large', value: 'xl' },
  ];

  const { Story } = defineMeta({
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      disabled: { control: 'boolean' },
      required: { control: 'boolean' },
      name: { control: 'text' },
      orientation: { control: 'select', options: ['horizontal', 'vertical'] },
      readOnly: { control: 'boolean' },
      label: { control: 'text' },
      value: { control: 'text' },
      defaultValue: { control: 'text' },
    },
    args: { onValueChange: fn(), options: frameworks },
  });
</script>

<Story name="Default" />
<Story name="WithLabel" args={{ label: 'Select a framework' }} />
<Story
  name="Disabled"
  args={{ disabled: true, defaultValue: 'react', label: 'Disabled radio group' }}
/>
<Story name="ReadOnly" args={{ readOnly: true, defaultValue: 'vue', label: 'Read-only selection' }} />
<Story name="Required" args={{ required: true, label: 'Required selection' }} />
<Story name="WithName" args={{ name: 'framework', label: 'Framework preference' }} />
<Story name="Horizontal" args={{ options: sizes, orientation: 'horizontal', label: 'Select size' }} />
<Story name="Vertical" args={{ orientation: 'vertical', label: 'Select framework' }} />
<Story
  name="WithDisabledItems"
  args={{
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular', disabled: true },
      { label: 'Svelte', value: 'svelte' },
    ],
    label: 'Select framework',
  }}
/>
<Story name="WithDefaultValue" args={{ defaultValue: 'react', label: 'Framework preference' }} />
