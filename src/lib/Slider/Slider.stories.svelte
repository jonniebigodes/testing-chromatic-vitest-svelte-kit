<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Slider from './Slider.svelte';
  import SliderControlled from './SliderControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      value: { control: 'object' },
      disabled: { control: 'boolean' },
      min: { control: 'number' },
      max: { control: 'number' },
      step: { control: 'number' },
      orientation: { control: 'select', options: ['horizontal', 'vertical'] },
      label: { control: 'text' },
    },
    args: { onValueChange: fn() },
  });
</script>

<Story name="Default" args={{ value: [50] }} />
<Story name="WithLabel" args={{ value: [50], label: 'Volume' }} />
<Story name="Disabled" args={{ value: [50], disabled: true, label: 'Disabled slider' }} />
<Story name="CustomRange" args={{ value: [0], min: -50, max: 50, label: 'Temperature (°C)' }} />
<Story
  name="CustomStep"
  args={{ value: [0], min: 0, max: 100, step: 10, label: 'Brightness (10% increments)' }}
/>
<Story name="Horizontal" args={{ value: [50], orientation: 'horizontal', label: 'Horizontal slider' }} />
<Story name="Vertical" args={{ value: [50], orientation: 'vertical', label: 'Volume' }} />
<Story name="MinValue" args={{ value: [0], min: 0, max: 100, label: 'Progress' }} />
<Story name="MaxValue" args={{ value: [100], min: 0, max: 100, label: 'Completion' }} />
<Story name="SmallRange" args={{ value: [5], min: 0, max: 10, step: 1, label: 'Rating (0-10)' }} />
<Story
  name="DecimalStep"
  args={{ value: [2.5], min: 0, max: 5, step: 0.5, label: 'Price multiplier' }}
/>
<Story name="Controlled" asChild>
  <SliderControlled />
</Story>
