<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Form from './Form.svelte';
  import FormDefault from './FormDefault.demo.svelte';
  import FormInverted from './FormInverted.demo.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/Form',
    component: Form,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
  });
</script>

<Story name="Default" asChild><FormDefault /></Story>

<Story name="SmallGap" asChild>
  <Form gap="8px">
    <div>
      <Label htmlFor="name-small">{#snippet children()}Full Name{/snippet}</Label>
      <Input id="name-small" type="text" placeholder="John Doe" />
    </div>
    <div>
      <Label htmlFor="email-small">{#snippet children()}Email Address{/snippet}</Label>
      <Input id="email-small" type="email" placeholder="john@example.com" />
    </div>
    <button type="submit" class="form-story__submit">Submit</button>
  </Form>
</Story>

<Story name="LargeGap" asChild>
  <Form gap="24px">
    <div>
      <Label htmlFor="name-large">{#snippet children()}Full Name{/snippet}</Label>
      <Input id="name-large" type="text" placeholder="John Doe" />
    </div>
    <div>
      <Label htmlFor="email-large">{#snippet children()}Email Address{/snippet}</Label>
      <Input id="email-large" type="email" placeholder="john@example.com" />
    </div>
    <button type="submit" class="form-story__submit">Submit</button>
  </Form>
</Story>

<Story name="Inverted" asChild><FormInverted /></Story>

<Story name="LoginForm" asChild>
  <Form gap="16px">
    <h2 class="form-story__title">Login</h2>
    <div>
      <Label htmlFor="login-email">{#snippet children()}Email{/snippet}</Label>
      <Input id="login-email" type="email" placeholder="your@email.com" />
    </div>
    <div>
      <Label htmlFor="login-password">{#snippet children()}Password{/snippet}</Label>
      <Input id="login-password" type="password" placeholder="••••••••" />
    </div>
    <button type="submit" class="form-story__submit">Sign In</button>
  </Form>
</Story>

<style>
  :global(.form-story__submit) {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
  }
  :global(.form-story__title) {
    margin: 0 0 var(--spacing-2) 0;
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-semibold);
    color: var(--color-slate-800);
  }
</style>
