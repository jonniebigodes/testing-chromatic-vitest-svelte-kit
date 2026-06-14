<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TimeField from './TimeField.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/TimeField',
    component: TimeField,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
  });
</script>

<Story name="Default" asChild>
  <TimeField>{#snippet children()}Start time{/snippet}</TimeField>
</Story>
<Story name="WithValue" asChild>
  <TimeField value="14:30">{#snippet children()}Meeting time{/snippet}</TimeField>
</Story>
<Story name="Required" asChild>
  <TimeField required>{#snippet children()}Appointment time{/snippet}</TimeField>
</Story>
<Story name="Disabled" asChild>
  <TimeField value="09:00" disabled>{#snippet children()}Time{/snippet}</TimeField>
</Story>
