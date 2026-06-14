<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PinInput from './PinInput.svelte';
  import PinInputControlled from './PinInputControlled.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/PinInput',
    component: PinInput,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      disabled: { control: 'boolean' },
      maxLength: { control: 'number' },
      required: { control: 'boolean' },
      name: { control: 'text' },
      type: { control: 'select', options: ['numeric', 'alphanumeric', 'alphabetic'] },
      mask: { control: 'boolean' },
      placeholder: { control: 'text' },
      otp: { control: 'boolean' },
      label: { control: 'text' },
    },
  });
</script>

<Story name="Default" args={{ label: 'Enter PIN', maxLength: 4 }} />
<Story name="Disabled" args={{ label: 'Disabled PIN', maxLength: 4, disabled: true }} />
<Story name="Required" args={{ label: 'Required PIN', maxLength: 4, required: true }} />
<Story name="WithName" args={{ label: 'PIN with Name', maxLength: 4, name: 'verification-code' }} />
<Story name="CustomChildren" args={{ label: 'Enter your security code', maxLength: 6 }} />
<Story name="SixDigits" args={{ label: '6-Digit Code', maxLength: 6 }} />
<Story name="Masked" args={{ label: 'Secret PIN', maxLength: 4, mask: true }} />
<Story name="Alphanumeric" args={{ label: 'Alphanumeric Code', maxLength: 5, type: 'alphanumeric' }} />
<Story name="Alphabetic" args={{ label: 'Letter Code', maxLength: 4, type: 'alphabetic' }} />
<Story name="CustomPlaceholder" args={{ label: 'Enter Code', maxLength: 4, placeholder: '0' }} />
<Story name="OTPMode" args={{ label: 'One-Time Password', maxLength: 6, otp: true }} />
<Story name="Controlled" asChild>
  <PinInputControlled />
</Story>
