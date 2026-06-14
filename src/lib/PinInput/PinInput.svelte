<script lang="ts">
  import { untrack } from 'svelte';
  import './PinInput.css';
  import type { PinInputProps } from './PinInput.types';

  let {
    value,
    onValueChange,
    disabled = false,
    maxLength = 4,
    label,
    children,
    required = false,
    name,
    type = 'numeric',
    mask = false,
    placeholder = '○',
    otp = false,
  }: PinInputProps = $props();

  let inputRefs: (HTMLInputElement | undefined)[] = $state([]);
  let internal = $state<string[]>(untrack(() => buildValues(value)));

  function buildValues(source?: string[]) {
    return Array.from({ length: maxLength }, (_, i) => source?.[i] ?? '');
  }

  const values = $derived(value !== undefined ? buildValues(value) : internal);

  function sanitize(raw: string) {
    switch (type) {
      case 'numeric':
        return raw.replace(/[^0-9]/g, '');
      case 'alphabetic':
        return raw.replace(/[^a-zA-Z]/g, '');
      default:
        return raw.replace(/[^a-zA-Z0-9]/g, '');
    }
  }

  function emit(next: string[]) {
    if (value === undefined) {
      internal = next;
    }
    const trimmed = next.filter((char) => char !== '');
    onValueChange?.({ value: trimmed, valueAsString: next.join('') });
  }

  function focusInput(index: number) {
    const target = inputRefs[index];
    if (target) {
      target.focus();
      target.select();
    }
  }

  function handleChange(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    const sanitized = sanitize(target.value);
    const char = sanitized.slice(-1);
    const next = [...values];
    next[index] = char;
    emit(next);
    if (char && index < maxLength - 1) {
      focusInput(index + 1);
    }
  }

  function handleKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      if (!values[index] && index > 0) {
        event.preventDefault();
        const next = [...values];
        next[index - 1] = '';
        emit(next);
        focusInput(index - 1);
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      focusInput(index - 1);
    } else if (event.key === 'ArrowRight' && index < maxLength - 1) {
      event.preventDefault();
      focusInput(index + 1);
    }
  }

  function handlePaste(event: ClipboardEvent, index: number) {
    event.preventDefault();
    const pasted = sanitize(event.clipboardData?.getData('text') ?? '');
    if (!pasted) return;
    const next = [...values];
    let cursor = index;
    for (const char of pasted) {
      if (cursor >= maxLength) break;
      next[cursor] = char;
      cursor += 1;
    }
    emit(next);
    focusInput(Math.min(cursor, maxLength - 1));
  }
</script>

<div class="pin-input">
  {#if children || label}
    <label class="pin-input__label">
      {#if children}
        {@render children()}
      {:else}
        {label}
      {/if}
    </label>
  {/if}

  <div class="pin-input__fields">
    {#each Array(maxLength) as _, index (index)}
      <input
        bind:this={inputRefs[index]}
        class="pin-input__field"
        value={values[index] ?? ''}
        oninput={(e) => handleChange(e, index)}
        onkeydown={(e) => handleKeyDown(e, index)}
        onpaste={(e) => handlePaste(e, index)}
        {disabled}
        {required}
        {placeholder}
        type={mask ? 'password' : 'text'}
        inputmode={type === 'numeric' ? 'numeric' : 'text'}
        autocomplete={otp ? 'one-time-code' : 'off'}
        aria-label={`Digit ${index + 1}`}
        maxlength={1}
      />
    {/each}
  </div>

  {#if name}
    <input type="hidden" {name} value={values.join('')} />
  {/if}
</div>
