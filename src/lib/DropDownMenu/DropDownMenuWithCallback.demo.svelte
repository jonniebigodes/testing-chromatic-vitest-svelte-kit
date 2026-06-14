<script lang="ts">
  import { fn } from 'storybook/test';
  import DropDownMenu from './DropDownMenu.svelte';

  const onSelect = fn((item: string) => {
    alert(`Selected: ${item}`);
  });
</script>

<DropDownMenu
  label="File"
  color="#3b82f6"
  children={['New', 'Open', 'Save', 'Save As', 'Exit']}
  inverted={false}
  {onSelect}
/>
