<script lang="ts">
  import './Divider.css';
  import type { DividerProps } from './Divider.types';

  let { color, inverted = false }: DividerProps = $props();

  const lineColor = $derived(
    inverted ? 'var(--color-white)' : (color ?? 'var(--color-slate-300)'),
  );
</script>

<div class={['divider', inverted && 'divider--inverted'].filter(Boolean).join(' ')}>
  <hr class="divider__line" style:background-color={lineColor} />
</div>
