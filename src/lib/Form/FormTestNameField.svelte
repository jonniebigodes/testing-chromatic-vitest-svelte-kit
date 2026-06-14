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
</Form>
