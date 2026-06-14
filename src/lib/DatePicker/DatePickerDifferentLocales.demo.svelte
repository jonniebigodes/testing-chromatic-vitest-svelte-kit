<script lang="ts">
  import DatePicker from './DatePicker.svelte';
</script>

<div class="story-decorator-row" style="flex-wrap: wrap;">
  <DatePicker children="English (US)" locale="en-US" />
  <DatePicker children="Español" locale="es-ES" />
  <DatePicker children="Français" locale="fr-FR" />
  <DatePicker children="Deutsch" locale="de-DE" />
</div>
