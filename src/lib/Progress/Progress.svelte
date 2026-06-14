<script lang="ts">
  import './Progress.css';
  import type { ProgressProps } from './Progress.types';
  import type { Snippet } from 'svelte';

  let {
    min = 0,
    max = 100,
    value,
    disabled = false,
    readonly = false,
    orientation = 'horizontal',
    children,
  }: ProgressProps & { children?: Snippet } = $props();

  const isVertical = $derived(orientation === 'vertical');
  const currentValue = $derived(value ?? min);
  const clampedPercentage = $derived.by(() => {
    const percentage = ((currentValue - min) / (max - min)) * 100;
    return Math.max(0, Math.min(100, percentage));
  });
</script>

<div
  role="progressbar"
  aria-valuenow={currentValue}
  aria-valuemin={min}
  aria-valuemax={max}
  data-disabled={disabled || undefined}
  data-readonly={readonly || undefined}
  class={[
    'progress',
    isVertical ? 'progress--vertical' : 'progress--horizontal',
    disabled && 'progress--disabled',
    readonly && 'progress--readonly',
  ]
    .filter(Boolean)
    .join(' ')}
>
  <div class="progress__header">
    <span class="progress__label">
      {#if children}
        {@render children()}
      {:else}
        Loading...
      {/if}
    </span>
    <span class="progress__percentage">{Math.round(clampedPercentage)}%</span>
  </div>

  <div
    class={[
      'progress__track',
      isVertical ? 'progress__track--vertical' : 'progress__track--horizontal',
    ].join(' ')}
  >
    <div
      class={[
        'progress__fill',
        isVertical ? 'progress__fill--vertical' : 'progress__fill--horizontal',
        readonly ? 'progress__fill--readonly' : 'progress__fill--default',
      ].join(' ')}
      style:width={isVertical ? '100%' : `${clampedPercentage}%`}
      style:height={isVertical ? `${clampedPercentage}%` : '100%'}
    ></div>
  </div>
</div>
