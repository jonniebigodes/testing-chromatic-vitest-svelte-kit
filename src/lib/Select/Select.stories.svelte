<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Select from './Select.svelte';
  import SelectDefault from './SelectDefault.demo.svelte';
  import SelectControlled from './SelectControlled.demo.svelte';
  import SelectWithChangeHandler from './SelectWithChangeHandler.demo.svelte';
  import SelectWithOpenChangeHandler from './SelectWithOpenChangeHandler.demo.svelte';
  import SelectInForm from './SelectInForm.demo.svelte';
  import SelectMultipleSelects from './SelectMultipleSelects.demo.svelte';
  import { frameworks } from './select-data';

  const manyItems = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' },
    { label: 'Ember', value: 'ember' },
    { label: 'Preact', value: 'preact' },
    { label: 'Alpine', value: 'alpine' },
    { label: 'Lit', value: 'lit' },
    { label: 'Qwik', value: 'qwik' },
    { label: 'Astro', value: 'astro' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Remix', value: 'remix' },
    { label: 'SvelteKit', value: 'sveltekit' },
  ];

  const { Story } = defineMeta({
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: {
      onValueChange: fn(),
      onOpenChange: fn(),
      items: frameworks,
    },
  });
</script>

<Story name="Default" asChild><SelectDefault /></Story>
<Story name="Open" asChild>
  <Select items={frameworks} open={true}>
    {#snippet children()}Framework{/snippet}
  </Select>
</Story>
<Story
  name="Disabled"
  asChild
>
  <Select items={frameworks} disabled={true}>
    {#snippet children()}Framework (disabled){/snippet}
  </Select>
</Story>
<Story name="CustomPlaceholder" asChild>
  <Select items={frameworks} placeholder="Choose your framework...">
    {#snippet children()}Framework{/snippet}
  </Select>
</Story>
<Story
  name="WithoutLabel"
  args={{ items: frameworks, placeholder: 'Select a framework' }}
/>
<Story name="Required" asChild>
  <Select items={frameworks} required={true}>
    {#snippet children()}Framework (required){/snippet}
  </Select>
</Story>
<Story name="WithName" asChild>
  <Select items={frameworks} name="framework">
    {#snippet children()}Framework{/snippet}
  </Select>
</Story>
<Story name="Multiple" asChild>
  <Select
    items={frameworks}
    type="multiple"
    placeholder="Select one or more frameworks"
  >
    {#snippet children()}Select frameworks{/snippet}
  </Select>
</Story>
<Story name="ManyItems" asChild>
  <Select items={manyItems} placeholder="Select a framework">
    {#snippet children()}Framework{/snippet}
  </Select>
</Story>
<Story name="WithDisabledItems" asChild>
  <Select
    items={[
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular', disabled: true },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid', disabled: true },
    ]}
  >
    {#snippet children()}Framework{/snippet}
  </Select>
</Story>
<Story name="Controlled" asChild><SelectControlled /></Story>
<Story name="WithChangeHandler" asChild><SelectWithChangeHandler /></Story>
<Story name="WithOpenChangeHandler" asChild><SelectWithOpenChangeHandler /></Story>
<Story name="InForm" asChild><SelectInForm /></Story>
<Story name="MultipleSelects" asChild><SelectMultipleSelects /></Story>
