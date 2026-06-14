<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Toggle from './Toggle.svelte';
  import ToggleControlled from './ToggleControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      pressed: { control: 'boolean' },
      disabled: { control: 'boolean' },
      required: { control: 'boolean' },
      name: { control: 'text' },
      label: { control: 'text' },
    },
    args: { onPressedChange: fn() },
  });
</script>

<Story name="Default" />
<Story name="Pressed" args={{ pressed: true }} />
<Story name="Unpressed" args={{ pressed: false }} />
<Story name="Disabled" args={{ disabled: true }} />
<Story name="DisabledPressed" args={{ disabled: true, pressed: true }} />
<Story name="WithLabel" args={{ label: 'Enable notifications' }} />
<Story name="Required" args={{ required: true, label: 'Accept terms and conditions' }} />
<Story name="WithName" args={{ name: 'notifications-enabled', label: 'Email notifications' }} />
<Story
  name="LongLabel"
  args={{
    label: 'Enable automatic synchronization of data across all your devices',
  }}
/>
<Story name="Controlled" asChild>
  <ToggleControlled />
</Story>
