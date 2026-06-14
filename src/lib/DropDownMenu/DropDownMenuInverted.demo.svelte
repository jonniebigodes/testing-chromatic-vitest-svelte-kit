<script lang="ts">
  import DropDownMenu from './DropDownMenu.svelte';

  let {
    label = 'Settings',
    color = '#1f2937',
    children = ['Profile', 'Preferences', 'Security', 'Logout'],
  } = $props();
</script>

<div class="dropdown-inverted-bg">
  <DropDownMenu {label} {color} {children} inverted={true} />
</div>

<style>
  .dropdown-inverted-bg {
    background-color: #1f2937;
    padding: var(--spacing-8);
    border-radius: var(--spacing-2);
    min-height: 300px;
  }
</style>
