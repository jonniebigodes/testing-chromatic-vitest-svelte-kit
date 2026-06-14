<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AspectRatio from './AspectRatio.svelte';
  import AspectRatioDefault from './AspectRatioDefault.demo.svelte';
  import AspectRatioGradient from './AspectRatioGradient.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/AspectRatio',
    component: AspectRatio,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      ratio: {
        control: { type: 'number', min: 0.1, max: 5, step: 0.1 },
        description: 'The aspect ratio of the container',
      },
    },
  });
</script>

<Story name="Default" asChild>
  <AspectRatioDefault />
</Story>
<Story name="Ratio16x9" asChild>
  <AspectRatioGradient ratio={16 / 9} label="16:9" />
</Story>
<Story name="Ratio4x3" asChild>
  <AspectRatioGradient
    ratio={4 / 3}
    label="4:3"
    gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  />
</Story>
<Story name="Ratio1x1" asChild>
  <AspectRatioGradient
    ratio={1}
    label="1:1"
    gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  />
</Story>
<Story name="Ratio21x9" asChild>
  <AspectRatioGradient
    ratio={21 / 9}
    label="21:9"
    gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  />
</Story>
<Story name="Ratio9x16" asChild>
  <AspectRatioGradient
    ratio={9 / 16}
    label="9:16"
    gradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    textColor="#333"
  />
</Story>
