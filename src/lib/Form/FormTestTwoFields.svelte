<script lang="ts">
  import Form from './Form.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';
</script>

<Form>
  <div>
    <Label htmlFor="name">{#snippet children()}Full Name{/snippet}</Label>
    <Input id="name" type="text" placeholder="John Doe" />
  </div>
  <div>
    <Label htmlFor="email">{#snippet children()}Email Address{/snippet}</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
</Form>
