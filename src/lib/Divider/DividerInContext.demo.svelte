<script lang="ts">
  import Divider from './Divider.svelte';

  let {
    color,
    inverted = false,
    aboveText = 'Content above the divider',
    belowText = 'Content below the divider',
    aboveColor = '#374151',
    belowColor = '#374151',
    width = '400px',
  }: {
    color?: string;
    inverted?: boolean;
    aboveText?: string;
    belowText?: string;
    aboveColor?: string;
    belowColor?: string;
    width?: string;
  } = $props();
</script>

<div style:width={width}>
  <p style:margin="0 0 16px 0" style:color={aboveColor}>{aboveText}</p>
  <Divider {color} {inverted} />
  <p style:margin="16px 0 0 0" style:color={belowColor}>{belowText}</p>
</div>
