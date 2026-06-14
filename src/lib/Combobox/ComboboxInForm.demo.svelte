<script lang="ts">
  import Combobox from './Combobox.svelte';
</script>

<form
  class="combobox-form"
  onsubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    alert(JSON.stringify(Object.fromEntries(formData), null, 2));
  }}
>
  <h3>Developer Survey</h3>
  <Combobox
    label="Primary Framework"
    placeholder="Select framework..."
    items={['React', 'Vue', 'Svelte', 'Angular', 'Solid']}
    name="framework"
    required
  />
  <Combobox
    label="Experience Level"
    placeholder="Select level..."
    items={['Beginner', 'Intermediate', 'Advanced', 'Expert']}
    name="experience"
    required
  />
  <Combobox
    label="Favorite Tool"
    placeholder="Select tool..."
    items={['VSCode', 'WebStorm', 'Sublime', 'Vim', 'Emacs']}
    name="tool"
  />
  <button type="submit" class="combobox-form__submit">Submit Survey</button>
</form>

<style>
  .combobox-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding: var(--spacing-5);
    border: 1px solid var(--color-slate-200);
    border-radius: var(--spacing-2);
  }
  .combobox-form h3 {
    margin: 0 0 var(--spacing-2) 0;
    font-size: var(--font-size-16);
  }
  .combobox-form__submit {
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
