<script lang="ts">
  import './Header.css';
  import type { HeaderLink, HeaderProps } from './Header.types';

  let {
    title = 'Application',
    links = [],
    isSticky = false,
    inverted = false,
    logo,
    fullWidth = false,
    onLinkClick,
  }: HeaderProps = $props();

  function handleLinkClick(link: HeaderLink, event: MouseEvent) {
    onLinkClick?.(link);
  }
</script>

<header
  class={[
    'header',
    isSticky ? 'header--sticky' : 'header--relative',
    inverted && 'header--inverted',
  ]
    .filter(Boolean)
    .join(' ')}
>
  <div class={['header__inner', fullWidth && 'header__inner--full-width'].filter(Boolean).join(' ')}>
    <div class="header__brand">
      {#if logo}
        <img class="header__logo" src={logo} alt="Logo" />
      {/if}
      <h1 class="header__title">{title}</h1>
    </div>
    {#if links.length > 0}
      <nav class="header__nav">
        {#each links as link, i (link.label + i)}
          <a
            class="header__link"
            href={link.href}
            onclick={(event) => handleLinkClick(link, event)}
          >
            {link.label}
          </a>
        {/each}
      </nav>
    {/if}
  </div>
</header>
