<script lang="ts">
  import Footer from './Footer.svelte';
  import type { FooterProps } from './Footer.types';

  let {
    footerProps,
    pageBg = '#f9fafb',
    headingColor = '#1f2937',
    textColor = '#6b7280',
  }: {
    footerProps: FooterProps;
    pageBg?: string;
    headingColor?: string;
    textColor?: string;
  } = $props();
</script>

<div style:min-height="400px" style:display="flex" style:flex-direction="column">
  <div style:flex="1" style:padding="32px" style:background-color={pageBg}>
    <h1 style:color={headingColor}>Page Content</h1>
    <p style:color={textColor}>This is sample page content. Scroll down to see the footer.</p>
  </div>
  <Footer {...footerProps} />
</div>
