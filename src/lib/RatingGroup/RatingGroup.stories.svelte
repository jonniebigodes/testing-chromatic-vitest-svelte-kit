<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import RatingGroup from './RatingGroup.svelte';
  import RatingGroupControlled from './RatingGroupControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/RatingGroup',
    component: RatingGroup,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      disabled: { control: 'boolean' },
      required: { control: 'boolean' },
      name: { control: 'text' },
      min: { control: 'number' },
      max: { control: 'number' },
      readOnly: { control: 'boolean' },
      orientation: { control: 'select', options: ['horizontal', 'vertical'] },
      label: { control: 'text' },
      value: { control: 'number' },
      defaultValue: { control: 'number' },
    },
    args: { onValueChange: fn() },
  });
</script>

<Story name="Default" args={{ defaultValue: 0 }} />
<Story name="WithLabel" args={{ defaultValue: 3, label: 'Rate this product' }} />
<Story name="Disabled" args={{ disabled: true, defaultValue: 3, label: 'Disabled rating' }} />
<Story name="ReadOnly" args={{ readOnly: true, defaultValue: 4, label: 'Read-only rating' }} />
<Story name="Required" args={{ required: true, label: 'Required rating' }} />
<Story name="WithName" args={{ name: 'product-rating', defaultValue: 3, label: 'Product rating' }} />
<Story name="CustomMax" args={{ max: 10, defaultValue: 7, label: 'Rate out of 10' }} />
<Story name="CustomRange" args={{ min: 1, max: 3, defaultValue: 2, label: 'Rate from 1 to 3' }} />
<Story name="Vertical" args={{ orientation: 'vertical', defaultValue: 3, label: 'Vertical rating' }} />
<Story name="FullRating" args={{ defaultValue: 5, label: '5-star rating' }} />
<Story name="EmptyRating" args={{ defaultValue: 0, label: 'Not yet rated' }} />
<Story name="Controlled" asChild>
  <RatingGroupControlled />
</Story>
