<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Label from './Label.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
  });
</script>

<Story name="Default" asChild>
  <div style="padding: 16px">
    <Label>{#snippet children()}Email Address{/snippet}</Label>
  </div>
</Story>

<Story name="WithHtmlFor" asChild>
  <div style="padding: 16px">
    <Label htmlFor="email-input">{#snippet children()}Email Address{/snippet}</Label>
    <input id="email-input" type="email" placeholder="you@example.com" />
  </div>
</Story>

<Story name="Inverted" asChild>
  <div style="padding: 16px; background: var(--color-slate-800)">
    <Label inverted>{#snippet children()}Inverted Label{/snippet}</Label>
  </div>
</Story>
