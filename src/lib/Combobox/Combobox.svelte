<script lang="ts">
  import './Combobox.css';
  import type { ComboboxProps } from './Combobox.types';

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
    items = [],
    label,
  }: ComboboxProps = $props();

  const isMultiple = $derived(type === 'multiple');
  const isOpenControlled = $derived(open !== undefined);
  const isValueControlled = $derived(value !== undefined);

  let internalOpen = $state(false);
  let internalValue = $state<string[]>([]);
  let inputValue = $state('');
  let highlightedIndex = $state(-1);

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
    if (!isMultiple && selectedValue.length > 0) {
      inputValue = selectedValue[0];
    }
  });

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

  const filteredItems = $derived(
    items.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase()),
    ),
  );

  const listboxId = $derived(name ? `${name}-listbox` : undefined);

  function handleSelect(item: string) {
    if (isMultiple) {
      const next = selectedValue.includes(item)
        ? selectedValue.filter((v) => v !== item)
        : [...selectedValue, item];
      setValue(next);
      inputValue = '';
    } else {
      setValue([item]);
      inputValue = item;
      setOpen(false);
    }
    highlightedIndex = -1;
  }

  function handleClear() {
    setValue([]);
    inputValue = '';
    highlightedIndex = -1;
  }

  function handleInputChange(next: string) {
    inputValue = next;
    highlightedIndex = -1;
    if (!isOpen) setOpen(true);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        setOpen(true);
        return;
      }
      highlightedIndex =
        highlightedIndex < filteredItems.length - 1
          ? highlightedIndex + 1
          : highlightedIndex;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      highlightedIndex = highlightedIndex > 0 ? highlightedIndex - 1 : 0;
    } else if (event.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
        event.preventDefault();
        handleSelect(filteredItems[highlightedIndex]);
      }
    }
  }

  const inputId = `combobox-input-${Math.random().toString(36).slice(2, 9)}`;

  function handleOptionKeyDown(event: KeyboardEvent, item: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(item);
    }
  }
</script>

<div class="combobox" bind:this={rootRef}>
  {#if label}
    <label class="combobox__label" for={inputId}>{label}</label>
  {/if}
  <div class="combobox__input-wrapper">
    <input
      id={inputId}
      type="text"
      class="combobox__input"
      role="combobox"
      aria-autocomplete="list"
      aria-expanded={isOpen}
      aria-controls={listboxId}
      {name}
      {required}
      {disabled}
      {placeholder}
      value={inputValue}
      oninput={(e) => handleInputChange((e.currentTarget as HTMLInputElement).value)}
      onfocus={() => !disabled && setOpen(true)}
      onkeydown={handleKeyDown}
    />
    <div class="combobox__actions">
      <button
        type="button"
        class="combobox__icon-btn"
        aria-label="Clear"
        {disabled}
        onclick={handleClear}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button
        type="button"
        class="combobox__icon-btn"
        aria-label="Toggle"
        {disabled}
        onclick={() => !disabled && setOpen(!isOpen)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  {#if isOpen}
    <div class="combobox__dropdown">
      <ul id={listboxId} class="combobox__listbox" role="listbox">
        {#if filteredItems.length > 0}
          {#each filteredItems as item, index (item)}
            {@const isSelected = selectedValue.includes(item)}
            <li
              role="option"
              aria-selected={isSelected}
              class={[
                'combobox__option',
                index === highlightedIndex && 'combobox__option--highlighted',
              ]
                .filter(Boolean)
                .join(' ')}
              onmousedown={(e) => e.preventDefault()}
              onclick={() => handleSelect(item)}
              onkeydown={(event) => handleOptionKeyDown(event, item)}
            >
              <span>{item}</span>
              {#if isSelected}
                <span class="combobox__check">✓</span>
              {/if}
            </li>
          {/each}
        {:else}
          <li class="combobox__empty">No results found</li>
        {/if}
      </ul>
    </div>
  {/if}
</div>
