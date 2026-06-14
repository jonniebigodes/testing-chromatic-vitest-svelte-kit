<script lang="ts">
  import './Toggle.css';
  import type { ToggleProps } from './Toggle.types';

  let {
    onPressedChange,
    pressed,
    disabled = false,
    name,
    label,
    children,
  }: ToggleProps = $props();

  function handleClick() {
    onPressedChange?.(!pressed);
  }
</script>

<div class="toggle">
  <button
    type="button"
    class={[
      'toggle__button',
      pressed ? 'toggle__button--on' : 'toggle__button--off',
    ].join(' ')}
    aria-pressed={!!pressed}
    aria-label={label ?? 'Toggle'}
    {disabled}
    {name}
    onclick={handleClick}
  >
    <div
      class={['toggle__dot', pressed ? 'toggle__dot--on' : 'toggle__dot--off'].join(
        ' ',
      )}
    ></div>
  </button>
  {#if children || label}
    <span
      class={[
        'toggle__label',
        disabled ? 'toggle__label--disabled' : 'toggle__label--enabled',
      ].join(' ')}
    >
      {#if children}
        {@render children()}
      {:else}
        {label}
      {/if}
    </span>
  {/if}
</div>
