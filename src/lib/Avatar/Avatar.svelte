<script lang="ts">
  import './Avatar.css';
  import type { AvatarProps } from './Avatar.types';

  let {
    src,
    alt,
    fallback,
    onStatusChange,
    ids,
    rootStyle,
    rootClass,
  }: AvatarProps = $props();

  let status = $state<'loading' | 'loaded' | 'error'>('loading');

  $effect(() => {
    const next = src ? 'loading' : 'error';
    status = next;
    onStatusChange?.({ status: next });
  });

  function updateStatus(next: 'loading' | 'loaded' | 'error') {
    status = next;
    onStatusChange?.({ status: next });
  }

  const showImage = $derived(!!src && status !== 'error');
</script>

<div
  id={ids?.root}
  class={['avatar', rootClass].filter(Boolean).join(' ')}
  style={rootStyle}
>
  {#if !showImage}
    <span id={ids?.fallback}>{fallback}</span>
  {/if}
  {#if src}
    <img
      id={ids?.image}
      {src}
      {alt}
      class={['avatar__image', status === 'loaded' ? 'avatar__image--visible' : 'avatar__image--hidden'].join(' ')}
      onload={() => updateStatus('loaded')}
      onerror={() => updateStatus('error')}
    />
  {/if}
</div>
