<script lang="ts">
  import Form from './Form.svelte';
  import Label from './Label.svelte';
  import Input from './Input.svelte';
</script>

<Form inverted>
  <div>
    <Label htmlFor="user" inverted>{#snippet children()}Username{/snippet}</Label>
    <Input id="user" type="text" placeholder="username" inverted />
  </div>
</Form>
