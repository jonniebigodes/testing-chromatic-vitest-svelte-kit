<script lang="ts">
  import { untrack } from 'svelte';
  import './RadioGroup.css';
  import type { RadioGroupProps, RadioOption } from './RadioGroup.types';

  let {
    onValueChange,
    disabled = false,
    required = false,
    name,
    orientation = 'vertical',
    readOnly = false,
    label,
    children,
    value,
    defaultValue,
    options,
  }: RadioGroupProps = $props();

  const groupName = $derived(name ?? `radio-${Math.random().toString(36).slice(2, 9)}`);
  let internalValue = $state<string | null>(untrack(() => defaultValue ?? null));
  const isControlled = $derived(value !== undefined);
  const selectedValue = $derived(isControlled ? value : internalValue);

  function selectOption(option: RadioOption) {
    if (disabled || readOnly || option.disabled) return;
    if (!isControlled) internalValue = option.value;
    onValueChange?.({ value: option.value });
  }
</script>

<div role="radiogroup" aria-orientation={orientation} class="radio-group">
  {#if children || label}
    <span class="radio-group__label">
      {#if children}
        {@render children()}
      {:else}
        {label}
      {/if}
      {#if required}<span class="radio-group__required">*</span>{/if}
    </span>
  {/if}
  <div
    class={[
      'radio-group__options',
      orientation === 'horizontal'
        ? 'radio-group__options--horizontal'
        : 'radio-group__options--vertical',
    ].join(' ')}
  >
    {#each options as option (option.value)}
      {@const isItemDisabled = disabled || option.disabled || false}
      {@const checked = selectedValue === option.value}
      <label
        class={[
          'radio-group__item',
          disabled || readOnly || option.disabled
            ? 'radio-group__item--disabled'
            : 'radio-group__item--interactive',
        ].join(' ')}
      >
        <input
          type="radio"
          class="radio-group__input"
          name={groupName}
          value={option.value}
          checked={checked}
          disabled={isItemDisabled}
          {required}
          onchange={() => selectOption(option)}
        />
        <span
          aria-hidden="true"
          class={[
            'radio-group__indicator',
            checked ? 'radio-group__indicator--checked' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          data-state={checked ? 'checked' : 'unchecked'}
          data-disabled={isItemDisabled || undefined}
        ></span>
        <span
          class={[
            'radio-group__option-label',
            disabled || option.disabled ? 'radio-group__option-label--disabled' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {option.label}
        </span>
      </label>
    {/each}
  </div>
</div>
