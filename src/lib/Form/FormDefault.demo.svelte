<script lang="ts">
  import Form from './Form.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';
</script>

<Form inverted={false} gap="16px">
  <div>
    <Label htmlFor="name">{#snippet children()}Full Name{/snippet}</Label>
    <Input id="name" type="text" placeholder="John Doe" />
  </div>
  <div>
    <Label htmlFor="email">{#snippet children()}Email Address{/snippet}</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  <button type="submit" class="form-story__submit">Submit</button>
</Form>

<style>
  .form-story__submit {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
  }
</style>
