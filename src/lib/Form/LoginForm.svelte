<script lang="ts">
  import Form from './Form.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';
  import Button from '../Button/Button.svelte';
  import type { LoginFormProps } from './LoginForm.types';

  let { inverted = false, onclick }: LoginFormProps = $props();
</script>

<Form {inverted}>
  <div>
    <Label htmlFor="email" {inverted}>{#snippet children()}Email{/snippet}</Label>
    <Input id="email" type="email" placeholder="Enter your email" {inverted} />
  </div>
  <div>
    <Label htmlFor="password" {inverted}>{#snippet children()}Password{/snippet}</Label>
    <Input
      id="password"
      type="password"
      placeholder="Enter your password"
      {inverted}
    />
  </div>
  <Button label="Login" {onclick} />
</Form>
