<script lang="ts">
  import Pill from './Pill.svelte';
  import type { PillProps } from './Pill.types';

  let { content, ...pillProps }: PillProps & { content: string } = $props();
</script>

<Pill {...pillProps}>{content}</Pill>
