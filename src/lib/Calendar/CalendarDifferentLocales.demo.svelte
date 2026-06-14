<script lang="ts">
  import Calendar from './Calendar.svelte';
</script>

<div class="story-decorator-row" style="flex-wrap: wrap;">
  <Calendar children="English (US)" locale="en-US" />
  <Calendar children="Español" locale="es-ES" />
  <Calendar children="Français" locale="fr-FR" />
  <Calendar children="Deutsch" locale="de-DE" />
</div>
