<script lang="ts">
  import Form from './Form.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';
</script>

<Form inverted={true} gap="16px">
  <div>
    <Label htmlFor="name-inverted" inverted>{#snippet children()}Full Name{/snippet}</Label>
    <Input id="name-inverted" type="text" placeholder="John Doe" inverted />
  </div>
  <div>
    <Label htmlFor="email-inverted" inverted>{#snippet children()}Email Address{/snippet}</Label>
    <Input id="email-inverted" type="email" placeholder="john@example.com" inverted />
  </div>
  <button type="submit" class="form-story__submit">Submit</button>
</Form>

<style>
  .form-story__submit {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-400);
    color: var(--color-white);
    border: none;
    border-radius: var(--spacing-2);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
  }
</style>
