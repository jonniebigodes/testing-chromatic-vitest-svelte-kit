<script lang="ts">
  import Select from './Select.svelte';
  import { frameworks } from './select-data';
</script>

<Select items={frameworks}>
  {#snippet children()}Framework{/snippet}
</Select>
