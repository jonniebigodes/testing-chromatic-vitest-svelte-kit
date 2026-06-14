<script lang="ts">
  import '../../styles/story-decorators.css';
  import AspectRatio from './AspectRatio.svelte';

  let {
    ratio = 16 / 9,
    label = '16:9',
    gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textColor = 'white'
  }: {
    ratio?: number;
    label?: string;
    gradient?: string;
    textColor?: string;
  } = $props();
</script>

<div class="story-decorator-narrow">
  <AspectRatio {ratio}>
    <div
      style:width="100%"
      style:height="100%"
      style:background={gradient}
      style:display="flex"
      style:align-items="center"
      style:justify-content="center"
      style:color={textColor}
      style:font-size="24px"
      style:font-weight="bold"
    >
      {label}
    </div>
  </AspectRatio>
</div>
