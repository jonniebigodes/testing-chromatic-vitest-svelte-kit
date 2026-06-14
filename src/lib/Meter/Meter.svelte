<script lang="ts">
  import './Meter.css';
  import { getMeterColor, type MeterProps } from './Meter.types';
  import type { Snippet } from 'svelte';

  let {
    min = 0,
    max = 100,
    value = 0,
    optimum,
    low,
    high,
    children,
  }: MeterProps & { children?: Snippet } = $props();

  const currentValue = $derived(value ?? min);
  const clampedPercentage = $derived.by(() => {
    const percentage = ((currentValue - min) / (max - min)) * 100;
    return Math.max(0, Math.min(100, percentage));
  });
  const meterColor = $derived(getMeterColor(currentValue, min, max, optimum, low, high));
</script>

<div
  role="meter"
  aria-valuenow={currentValue}
  aria-valuemin={min}
  aria-valuemax={max}
  class="meter"
>
  <div class="meter__header">
    {#if children}
      <span class="meter__label">
        {@render children()}
      </span>
    {/if}
    <span class="meter__percentage">{Math.round(clampedPercentage)}%</span>
  </div>

  <div class="meter__track">
    <div
      data-part="range"
      class="meter__range"
      style:width="{clampedPercentage}%"
      style:background-color={meterColor}
    ></div>
  </div>
</div>
