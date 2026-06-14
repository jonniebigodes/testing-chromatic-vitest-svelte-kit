<script lang="ts">
  import { untrack } from 'svelte';
  import './RatingGroup.css';
  import type { RatingGroupProps } from './RatingGroup.types';

  let {
    onValueChange,
    disabled = false,
    required = false,
    name,
    min = 1,
    max = 5,
    readOnly = false,
    orientation = 'horizontal',
    label,
    children,
    value,
    defaultValue,
  }: RatingGroupProps = $props();

  const isVertical = $derived(orientation === 'vertical');
  const count = $derived(max - min + 1);
  const interactive = $derived(!disabled && !readOnly);

  let internalValue = $state(untrack(() => defaultValue ?? 0));
  let hovered = $state<number | null>(null);
  const isControlled = $derived(value !== undefined);
  const currentValue = $derived(isControlled ? value : internalValue);
  const highlightValue = $derived(hovered ?? currentValue ?? 0);

  function selectValue(ratingValue: number) {
    if (!interactive) return;
    if (!isControlled) internalValue = ratingValue;
    onValueChange?.({ value: ratingValue });
  }

  function handleKeyDown(event: KeyboardEvent, ratingValue: number) {
    if (interactive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      selectValue(ratingValue);
    }
  }
</script>

<div
  role="radiogroup"
  class={[
    'rating-group',
    isVertical ? 'rating-group--vertical' : 'rating-group--horizontal',
  ].join(' ')}
>
  {#if children || label}
    <span class="rating-group__label">
      {#if children}
        {@render children()}
      {:else}
        {label}
      {/if}
    </span>
  {/if}
  <div
    class={[
      'rating-group__stars',
      isVertical ? 'rating-group__stars--vertical' : 'rating-group__stars--horizontal',
    ].join(' ')}
  >
    {#each Array(count) as _, i (i)}
      {@const ratingValue = min + i}
      {@const highlighted = ratingValue <= highlightValue}
      <span
        role="radio"
        aria-checked={currentValue === ratingValue}
        aria-label={`${ratingValue}`}
        tabindex={interactive ? 0 : -1}
        class={[
          'rating-group__star',
          interactive ? 'rating-group__star--interactive' : '',
          disabled ? 'rating-group__star--disabled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onclick={() => selectValue(ratingValue)}
        onmouseenter={() => interactive && (hovered = ratingValue)}
        onmouseleave={() => interactive && (hovered = null)}
        onkeydown={(e) => handleKeyDown(e, ratingValue)}
      >
        <svg
          class="rating-group__star-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={highlighted ? 'currentColor' : 'none'}
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
      </span>
    {/each}
    {#if name}
      <input type="hidden" {name} value={currentValue} {required} />
    {/if}
  </div>
</div>
