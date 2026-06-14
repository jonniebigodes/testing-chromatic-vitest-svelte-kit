<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button from './Button.svelte';
  import ButtonAllSizes from './ButtonAllSizes.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      backgroundColor: { control: 'color' },
      size: { control: 'select', options: ['small', 'medium', 'large'] },
      label: { control: 'text' },
    },
    args: { onclick: fn() },
  });
</script>

<Story
  name="Default"
  args={{ label: 'Click me', backgroundColor: '#3b82f6', size: 'medium' }}
/>
<Story
  name="CustomBackgroundColor"
  args={{ label: 'Red Button', backgroundColor: '#ef4444', size: 'medium' }}
/>
<Story
  name="GreenButton"
  args={{ label: 'Green Button', backgroundColor: '#10b981', size: 'medium' }}
/>
<Story
  name="Small"
  args={{ label: 'Small Button', backgroundColor: '#3b82f6', size: 'small' }}
/>
<Story
  name="Medium"
  args={{ label: 'Medium Button', backgroundColor: '#3b82f6', size: 'medium' }}
/>
<Story
  name="Large"
  args={{ label: 'Large Button', backgroundColor: '#3b82f6', size: 'large' }}
/>
<Story name="AllSizes" asChild>
  <ButtonAllSizes />
</Story>
<Story
  name="WithClickHandler"
  args={{
    label: 'Click to Alert',
    backgroundColor: '#8b5cf6',
    size: 'medium',
    onclick: fn(() => alert('Button clicked!')),
  }}
/>
