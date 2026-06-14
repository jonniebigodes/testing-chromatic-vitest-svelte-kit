<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Divider from './Divider.svelte';
  import DividerInContext from './DividerInContext.demo.svelte';
  import DividerMultipleColors from './DividerMultipleColors.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Divider',
    component: Divider,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      color: { control: 'color', description: 'Color of the divider line' },
      inverted: { control: 'boolean', description: 'Renders the divider in inverted colors' },
    },
  });
</script>

<Story name="Default" asChild>
  <DividerInContext color="#d1d5db" />
</Story>
<Story name="CustomColor" asChild>
  <DividerInContext color="#ef4444" />
</Story>
<Story name="BlueColor" asChild>
  <DividerInContext color="#3b82f6" />
</Story>
<Story name="Inverted" asChild>
  <DividerInContext color="#ffffff" inverted aboveColor="#ffffff" belowColor="#ffffff" />
</Story>
<Story name="ThickGreen" asChild>
  <div style="width: 400px">
    <div style="height: 2px; background-color: #10b981; margin: 16px 0">
      <Divider color="#10b981" />
    </div>
  </div>
</Story>
<Story name="MultipleColors" asChild>
  <DividerMultipleColors />
</Story>
