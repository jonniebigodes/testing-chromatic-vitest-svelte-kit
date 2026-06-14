<script lang="ts">
  import Select from './Select.svelte';
  import { frameworks, countries } from './select-data';
</script>

<form
  class="select-form"
  onsubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    alert(JSON.stringify(Object.fromEntries(formData), null, 2));
  }}
>
  <h3>User Preferences</h3>
  <Select items={frameworks} name="framework" required>
    {#snippet children()}Preferred Framework{/snippet}
  </Select>
  <Select items={countries} name="country" required>
    {#snippet children()}Country{/snippet}
  </Select>
  <button type="submit" class="select-form__submit">Submit</button>
</form>

<style>
  .select-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-5);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--spacing-2);
    min-width: 400px;
  }
  .select-form h3 {
    margin: 0 0 var(--spacing-2) 0;
    font-size: var(--font-size-16);
  }
  .select-form__submit {
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-blue-500);
    color: var(--color-white);
    border: none;
    border-radius: var(--spacing-1);
    cursor: pointer;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-medium);
  }
</style>
