<script lang="ts">
  import './Form.css';
  import type { FormProps } from './Form.types';

  let {
    inverted = false,
    gap,
    children,
    ...rest
  }: FormProps = $props();

  const resolvedGap = $derived(
    gap !== undefined
      ? typeof gap === 'number'
        ? `${gap}px`
        : gap
      : undefined,
  );
</script>

<form
  class={['form', inverted && 'form--inverted'].filter(Boolean).join(' ')}
  style={resolvedGap ? `gap: ${resolvedGap}` : undefined}
  {...rest}
>
  {@render children()}
</form>
