<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toolbar from './Toolbar.svelte';
  import ToolbarDefault from './ToolbarDefault.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Toolbar',
    component: Toolbar,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    },
  });
</script>

<Story name="Default" asChild>
  <ToolbarDefault orientation="horizontal" />
</Story>
<Story name="Horizontal" asChild>
  <ToolbarDefault orientation="horizontal" />
</Story>
<Story name="Vertical" asChild>
  <ToolbarDefault orientation="vertical" />
</Story>
<Story name="Empty" args={{ orientation: 'horizontal' }} />
