<script lang="ts">
  import DropDownMenu from './DropDownMenu.svelte';
</script>

<div class="story-decorator-row">
  <DropDownMenu label="File" color="#3b82f6" children={['New', 'Open', 'Save']} />
  <DropDownMenu label="Edit" color="#ef4444" children={['Cut', 'Copy', 'Paste']} />
  <DropDownMenu label="View" color="#10b981" children={['Zoom In', 'Zoom Out', 'Reset']} />
</div>
