<script lang="ts">
  import './Button.css';
  import type { ButtonProps } from './Button.types';

  let {
    backgroundColor,
    size = 'medium',
    label,
    onclick,
  }: ButtonProps = $props();

  const bgStyle = $derived(
    backgroundColor ? `background-color: ${backgroundColor}` : 'background-color: var(--color-blue-500)',
  );
</script>

<button
  type="button"
  class={['button', `button--${size}`].join(' ')}
  style={bgStyle}
  {onclick}
>
  {label}
</button>
