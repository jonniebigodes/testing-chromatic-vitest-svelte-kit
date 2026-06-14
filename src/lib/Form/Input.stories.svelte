<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
  });
</script>

<Story name="Default" args={{ placeholder: 'Enter text...' }} />
<Story name="Email" args={{ type: 'email', placeholder: 'you@example.com' }} />
<Story name="Password" args={{ type: 'password', placeholder: '••••••••' }} />
<Story name="Inverted" args={{ placeholder: 'Inverted input', inverted: true }} />
