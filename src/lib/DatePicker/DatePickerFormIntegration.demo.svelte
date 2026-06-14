<script lang="ts">
  import DatePicker from './DatePicker.svelte';
  import type { DateValue } from './DatePicker.types';

  let value = $state<DateValue[]>([]);
  let errorMessage = $state('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (value.length === 0) {
      errorMessage = 'Please select a date';
    } else {
      errorMessage = '';
      console.log(
        `Form submitted with date: ${value[0].year}-${value[0].month}-${value[0].day}`,
      );
    }
  };
</script>

<form class="demo-form" onsubmit={handleSubmit}>
  <DatePicker
    {value}
    onValueChange={(details) => {
      value = details.value;
      if (details.value.length > 0) errorMessage = '';
    }}
    required
    name="appointmentDate"
    errorMessageId={errorMessage ? 'date-error' : undefined}
    children="Select Date *"
  />

  {#if errorMessage}
    <div id="date-error" class="demo-error">{errorMessage}</div>
  {/if}

  <button type="submit" class="demo-submit">Submit</button>
</form>

<style>
  .demo-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background-color: var(--color-white);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--spacing-3);
    max-width: 400px;
  }
  .demo-error {
    padding: var(--spacing-2) var(--spacing-3);
    background-color: var(--color-pink-50);
    color: var(--color-pink-600);
    border-radius: 6px;
    font-size: var(--font-size-14);
    border: 1px solid var(--color-pink-200);
  }
  .demo-submit {
    padding: 10px var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
  }
</style>
