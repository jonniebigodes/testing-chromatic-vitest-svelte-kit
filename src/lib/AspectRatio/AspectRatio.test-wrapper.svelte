<script lang="ts">
  import AspectRatio from './AspectRatio.svelte';

  let { ratio, content }: { ratio: number; content: string } = $props();
</script>

<AspectRatio {ratio}>
  <span>{content}</span>
</AspectRatio>
