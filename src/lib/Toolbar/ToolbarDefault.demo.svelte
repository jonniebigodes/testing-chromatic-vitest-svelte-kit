<script lang="ts">
  import Toolbar from './Toolbar.svelte';
  import Button from '../Button/Button.svelte';

  let { orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' } = $props();
</script>

<Toolbar {orientation}>
  <Button label="Save" />
  <Button label="Edit" />
  <Button label="Delete" backgroundColor="#ef4444" />
</Toolbar>
