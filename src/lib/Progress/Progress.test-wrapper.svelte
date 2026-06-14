<script lang="ts">
  import Progress from './Progress.svelte';
  import type { ProgressProps } from './Progress.types';

  let { label, ...progressProps }: ProgressProps & { label?: string } = $props();
</script>

<Progress {...progressProps}>{label}</Progress>
