<script lang="ts">
  import './Select.css';
  import type { SelectItem, SelectProps } from './Select.types';

  let {
    type = 'single',
    value,
    onValueChange,
    open,
    onOpenChange,
    disabled = false,
    placeholder = 'Select an option',
    name,
    required = false,
    items,
    children,
  }: SelectProps = $props();

  const isMultiple = $derived(type === 'multiple');
  const isOpenControlled = $derived(open !== undefined);
  const isValueControlled = $derived(value !== undefined);

  let internalOpen = $state(false);
  let internalValue = $state<string[]>([]);

  const isOpen = $derived(isOpenControlled ? open! : internalOpen);
  const selectedValue = $derived(isValueControlled ? value! : internalValue);

  let rootRef = $state<HTMLDivElement | null>(null);

  function setOpen(next: boolean) {
    if (!isOpenControlled) {
      internalOpen = next;
    }
    onOpenChange?.({ open: next });
  }

  function setValue(next: string[]) {
    if (!isValueControlled) {
      internalValue = next;
    }
    onValueChange?.({ value: next });
  }

  $effect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (rootRef && !rootRef.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  const selectedItems = $derived(
    items.filter((item) => selectedValue.includes(item.value)),
  );

  const valueText = $derived(
    selectedItems.length > 0
      ? selectedItems.map((item) => item.label).join(', ')
      : '',
  );

  const listboxId = $derived(name ? `${name}-listbox` : undefined);

  function handleSelect(item: SelectItem) {
    if (item.disabled) return;
    if (isMultiple) {
      const next = selectedValue.includes(item.value)
        ? selectedValue.filter((v) => v !== item.value)
        : [...selectedValue, item.value];
      setValue(next);
    } else {
      setValue([item.value]);
      setOpen(false);
    }
  }

  function handleTriggerKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setOpen(false);
    } else if (
      (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') &&
      !isOpen
    ) {
      event.preventDefault();
      setOpen(true);
    }
  }

  function handleOptionKeyDown(event: KeyboardEvent, item: SelectItem) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(item);
    }
  }
</script>

<div class="select" bind:this={rootRef}>
  {#if children}
    <span class="select__label">{@render children()}</span>
  {/if}
  <div>
    <button
      type="button"
      class="select__trigger"
      {disabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls={listboxId}
      onclick={() => !disabled && setOpen(!isOpen)}
      onkeydown={handleTriggerKeyDown}
    >
      <span
        class={['select__value', !valueText && 'select__value--placeholder']
          .filter(Boolean)
          .join(' ')}
      >
        {valueText || placeholder}
      </span>
      <span class="select__chevron">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
  </div>
  {#if isOpen}
    <div class="select__dropdown">
      <ul
        id={listboxId}
        class="select__listbox"
        role="listbox"
        aria-multiselectable={isMultiple || undefined}
      >
        {#each items as item (item.value)}
          {@const isSelected = selectedValue.includes(item.value)}
          <li
            role="option"
            aria-selected={isSelected}
            aria-disabled={item.disabled || undefined}
            class={['select__option', item.disabled && 'select__option--disabled']
              .filter(Boolean)
              .join(' ')}
            onclick={() => handleSelect(item)}
            onkeydown={(event) => handleOptionKeyDown(event, item)}
          >
            <span>{item.label}</span>
            {#if isSelected}
              <span class="select__check">✓</span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <select
    class="select__native"
    {name}
    {required}
    {disabled}
    multiple={isMultiple}
    value={isMultiple ? selectedValue : (selectedValue[0] ?? '')}
    aria-hidden="true"
    tabindex={-1}
    onchange={() => {}}
  >
    {#if !isMultiple}
      <option value=""></option>
    {/if}
    {#each items as item (item.value)}
      <option value={item.value}>{item.label}</option>
    {/each}
  </select>
</div>
