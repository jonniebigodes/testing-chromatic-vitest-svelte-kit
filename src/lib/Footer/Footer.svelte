<script lang="ts">
  import './Footer.css';
  import type { FooterProps } from './Footer.types';

  let {
    color: _customColor,
    label = '© 2025 Company Name. All rights reserved.',
    links = [],
    inverted = false,
    onLinkClick,
  }: FooterProps = $props();

  function handleLinkClick(link: string, event: MouseEvent) {
    event.preventDefault();
    onLinkClick?.(link);
  }
</script>

<footer class={['footer', inverted && 'footer--inverted'].filter(Boolean).join(' ')}>
  <div class="footer__inner">
    {#if links.length > 0}
      <nav class="footer__nav">
        {#each links as link, index (index)}
          <button
            type="button"
            class="footer__link"
            onclick={(event) => handleLinkClick(link, event)}
          >
            {link}
          </button>
        {/each}
      </nav>
    {/if}
    <p class="footer__label">{label}</p>
  </div>
</footer>
