<script lang="ts">
  import Header from './Header.svelte';
  import type { HeaderProps } from './Header.types';

  let {
    headerProps,
    pageBg = '#f9fafb',
    textColor = '#374151',
  }: {
    headerProps: HeaderProps;
    pageBg?: string;
    textColor?: string;
  } = $props();
</script>

<div style:min-height="200px" style:background-color={pageBg}>
  <Header {...headerProps} />
  <div style:padding="16px">
    <p style:color={textColor}>Main content below header…</p>
  </div>
</div>
