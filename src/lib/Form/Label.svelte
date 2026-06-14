<script lang="ts">
  import './Label.css';
  import type { LabelProps } from './Label.types';

  let { htmlFor, inverted = false, children }: LabelProps = $props();
</script>

<label
  for={htmlFor}
  class={[
    'label',
    htmlFor && 'label--linked',
    inverted && 'label--inverted',
  ]
    .filter(Boolean)
    .join(' ')}
>
  {@render children()}
</label>
