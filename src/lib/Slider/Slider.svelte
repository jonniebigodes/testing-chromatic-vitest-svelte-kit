<script lang="ts">
  import './Slider.css';
  import type { SliderProps } from './Slider.types';

  let {
    value,
    onValueChange,
    disabled = false,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    label,
    children,
  }: SliderProps = $props();

  let trackEl: HTMLDivElement | undefined = $state();

  const isVertical = $derived(orientation === 'vertical');
  const currentValue = $derived(value?.[0] ?? min);
  const range = $derived(max - min || 1);
  const percent = $derived(
    Math.min(100, Math.max(0, ((currentValue - min) / range) * 100)),
  );

  function clampVal(v: number) {
    return Math.min(max, Math.max(min, v));
  }

  function snapToStep(raw: number) {
    const steps = Math.round((raw - min) / step);
    const snapped = min + steps * step;
    return clampVal(Number(snapped.toFixed(10)));
  }

  function commit(next: number) {
    if (next === currentValue) return;
    onValueChange?.({ value: [next] });
  }

  function valueFromPointer(clientX: number, clientY: number) {
    if (!trackEl) return currentValue;
    const rect = trackEl.getBoundingClientRect();
    const ratio = isVertical
      ? 1 - (clientY - rect.top) / (rect.height || 1)
      : (clientX - rect.left) / (rect.width || 1);
    return snapToStep(min + Math.min(1, Math.max(0, ratio)) * range);
  }

  function handlePointerDown(event: PointerEvent & { currentTarget: HTMLElement }) {
    if (disabled) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    commit(valueFromPointer(event.clientX, event.clientY));
  }

  function handlePointerMove(event: PointerEvent & { currentTarget: HTMLElement }) {
    if (disabled || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
    commit(valueFromPointer(event.clientX, event.clientY));
  }

  function handlePointerUp(event: PointerEvent & { currentTarget: HTMLElement }) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (disabled) return;
    let next = currentValue;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = clampVal(currentValue + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        next = clampVal(currentValue - step);
        break;
      case 'Home':
        next = min;
        break;
      case 'End':
        next = max;
        break;
      default:
        return;
    }
    event.preventDefault();
    commit(snapToStep(next));
  }
</script>

<div
  class={[
    'slider',
    isVertical ? 'slider--vertical' : 'slider--horizontal',
    disabled ? 'slider--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')}
>
  {#if children || label}
    <span class="slider__label">
      {#if children}
        {@render children()}
      {:else}
        {label}
      {/if}
    </span>
  {/if}
  <span class="slider__value">{currentValue}</span>
  <div
    role="group"
    class={['slider__control', disabled ? 'slider__control--disabled' : ''].filter(Boolean).join(' ')}
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
  >
    <div
      bind:this={trackEl}
      class={[
        'slider__track',
        isVertical ? 'slider__track--vertical' : 'slider__track--horizontal',
      ].join(' ')}
    >
      <div
        class={[
          'slider__range',
          isVertical ? 'slider__range--vertical' : 'slider__range--horizontal',
          disabled ? 'slider__range--disabled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={isVertical ? `height: ${percent}%` : `width: ${percent}%`}
      ></div>
    </div>
    <div
      role="slider"
      tabindex={disabled ? -1 : 0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={currentValue}
      aria-orientation={orientation}
      aria-disabled={disabled || undefined}
      onkeydown={handleKeyDown}
      class={[
        'slider__thumb',
        isVertical ? 'slider__thumb--vertical' : 'slider__thumb--horizontal',
        disabled ? 'slider__thumb--disabled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={isVertical ? `top: ${100 - percent}%` : `left: ${percent}%`}
    ></div>
  </div>
</div>
