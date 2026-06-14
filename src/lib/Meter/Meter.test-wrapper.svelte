<script lang="ts">
  import Meter from './Meter.svelte';
  import type { MeterProps } from './Meter.types';

  let { label, ...meterProps }: MeterProps & { label?: string } = $props();
</script>

<Meter {...meterProps}>{label}</Meter>
