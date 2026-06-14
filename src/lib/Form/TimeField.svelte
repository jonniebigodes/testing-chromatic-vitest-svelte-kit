<script lang="ts">
  import './TimeField.css';
  import type { TimeFieldProps, TimeValue } from './TimeField.types';

  let {
    value = '',
    onValueChange,
    placeholder,
    required = false,
    oninvalid,
    'aria-describedby': ariaDescribedby,
    min,
    max,
    disabled = false,
    readonly = false,
    children,
    name,
    allowSeconds = false,
  }: TimeFieldProps = $props();

  function parseTimeString(timeString: string): TimeValue {
    const parts = timeString.split(':');
    return {
      hour: parseInt(parts[0] || '0', 10),
      minute: parseInt(parts[1] || '0', 10),
      second: parts[2] ? parseInt(parts[2], 10) : undefined,
    };
  }

  function handleChange(event: Event) {
    const newValue = (event.currentTarget as HTMLInputElement).value;
    onValueChange?.({
      value: newValue,
      valueAsTime: parseTimeString(newValue),
    });
  }

  function handleClear() {
    onValueChange?.({
      value: '',
      valueAsTime: { hour: 0, minute: 0 },
    });
  }
</script>

<div class="time-field">
  {#if children}
    <label class="time-field__label">
      {@render children()}
      {#if required}
        <span class="time-field__required">*</span>
      {/if}
    </label>
  {/if}

  <div
    class={[
      'time-field__wrapper',
      disabled && 'time-field__wrapper--disabled',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <input
      type="time"
      class={['time-field__input', disabled && 'time-field__input--disabled']
        .filter(Boolean)
        .join(' ')}
      {value}
      onchange={handleChange}
      {name}
      {required}
      {disabled}
      readonly={readonly}
      {min}
      {max}
      step={allowSeconds ? 1 : undefined}
      {placeholder}
      aria-describedby={ariaDescribedby}
      {oninvalid}
    />

    {#if value && !disabled && !readonly}
      <button
        type="button"
        class="time-field__clear"
        onclick={handleClear}
        aria-label="Clear time"
      >
        ×
      </button>
    {/if}
  </div>
</div>
