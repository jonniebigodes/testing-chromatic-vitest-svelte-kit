<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Combobox from './Combobox.svelte';
  import ComboboxWithChangeHandler from './ComboboxWithChangeHandler.demo.svelte';
  import ComboboxWithOpenChangeHandler from './ComboboxWithOpenChangeHandler.demo.svelte';
  import ComboboxInForm from './ComboboxInForm.demo.svelte';

  const frameworkItems = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

  const { Story } = defineMeta({
    title: 'Components/Combobox',
    component: Combobox,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: {
      onValueChange: fn(),
      onOpenChange: fn(),
    },
  });
</script>

<div class="story-decorator-narrow">
  <Story
    name="Default"
    args={{
      label: 'Select a framework',
      placeholder: 'Choose a framework...',
      items: frameworkItems,
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="WithManyItems"
    args={{
      label: 'Select a country',
      placeholder: 'Search countries...',
      items: [
        'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
        'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland',
        'Sweden', 'Norway', 'Denmark', 'Finland', 'Poland', 'Portugal',
        'Austria', 'Ireland', 'Greece',
      ],
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="Open"
    args={{
      label: 'Select a framework',
      placeholder: 'Choose a framework...',
      items: frameworkItems,
      open: true,
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="Disabled"
    args={{
      label: 'Select a framework',
      placeholder: 'This combobox is disabled',
      items: frameworkItems,
      disabled: true,
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="Required"
    args={{
      label: 'Select a framework (required)',
      placeholder: 'Choose a framework...',
      items: frameworkItems,
      required: true,
      name: 'framework',
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="WithFormName"
    args={{
      label: 'Favorite programming language',
      placeholder: 'Select...',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      name: 'programming-language',
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="Multiple"
    args={{
      label: 'Select frameworks (multiple)',
      placeholder: 'Choose frameworks...',
      items: ['React', 'Vue', 'Svelte', 'Angular', 'Solid', 'Preact', 'Lit'],
      type: 'multiple',
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="WithoutLabel"
    args={{
      placeholder: 'Search...',
      items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    }}
  />
</div>

<Story name="WithChangeHandler" asChild><ComboboxWithChangeHandler /></Story>
<Story name="WithOpenChangeHandler" asChild><ComboboxWithOpenChangeHandler /></Story>
<Story name="InForm" asChild><ComboboxInForm /></Story>

<Story name="CustomWidth" asChild>
  <div style="width: 600px">
    <Combobox
      label="Select a framework"
      placeholder="Choose a framework..."
      items={frameworkItems}
    />
  </div>
</Story>

<Story name="SmallWidth" asChild>
  <div style="width: 200px">
    <Combobox label="Size" placeholder="Select..." items={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />
  </div>
</Story>

<div class="story-decorator-narrow">
  <Story
    name="Categories"
    args={{
      label: 'Select a category',
      placeholder: 'Choose a category...',
      items: [
        'Technology', 'Science', 'Health', 'Business', 'Entertainment',
        'Sports', 'Politics', 'Education', 'Travel', 'Food',
      ],
    }}
  />
</div>

<div class="story-decorator-narrow">
  <Story
    name="ProgrammingLanguages"
    args={{
      label: 'Favorite programming language',
      placeholder: 'Select a language...',
      items: [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++',
        'Go', 'Rust', 'Ruby', 'PHP', 'Swift', 'Kotlin',
      ],
    }}
  />
</div>
