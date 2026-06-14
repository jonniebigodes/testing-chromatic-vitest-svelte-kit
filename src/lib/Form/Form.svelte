<script lang="ts">
  import './Form.css';
  import type { FormProps } from './Form.types';

  let {
    inverted = false,
    gap,
    children,
    onsubmit: externalOnsubmit,
    ...rest
  }: FormProps = $props();

  const resolvedGap = $derived(
    gap !== undefined
      ? typeof gap === 'number'
        ? `${gap}px`
        : gap
      : undefined,
  );

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    externalOnsubmit?.(e);
  }
</script>

<form
  class={['form', inverted && 'form--inverted'].filter(Boolean).join(' ')}
  style={resolvedGap ? `gap: ${resolvedGap}` : undefined}
  onsubmit={handleSubmit}
  {...rest}
>
  {@render children()}
</form>
