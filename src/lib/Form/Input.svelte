<script lang="ts">
  import './Input.css';
  import type { InputProps } from './Input.types';

  let {
    inverted = false,
    placeholder = '',
    type = 'text',
    ...rest
  }: InputProps = $props();
</script>

<input
  class={['input', inverted && 'input--inverted'].filter(Boolean).join(' ')}
  {type}
  {placeholder}
  {...rest}
/>
