<script lang="ts">
  import '../../styles/story-decorators.css';
  import AspectRatio from './AspectRatio.svelte';

  let { ratio = 16 / 9 }: { ratio?: number } = $props();
</script>

<div class="story-decorator-narrow">
  <AspectRatio {ratio}>
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="Landscape"
      style="width: 100%; height: 100%; object-fit: cover"
    />
  </AspectRatio>
</div>
