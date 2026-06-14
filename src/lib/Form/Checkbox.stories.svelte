<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Checkbox from './Checkbox.svelte';
  import CheckboxControlled from './CheckboxControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: { onCheckedChange: fn() },
  });
</script>

<Story name="Default" asChild>
  <Checkbox>{#snippet children()}Accept terms and conditions{/snippet}</Checkbox>
</Story>
<Story name="Checked" asChild>
  <Checkbox checked>{#snippet children()}Subscribed to newsletter{/snippet}</Checkbox>
</Story>
<Story name="Disabled" asChild>
  <Checkbox disabled>{#snippet children()}Disabled option{/snippet}</Checkbox>
</Story>
<Story name="Controlled" asChild><CheckboxControlled /></Story>
