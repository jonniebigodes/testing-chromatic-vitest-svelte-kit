<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Avatar from './Avatar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: Avatar,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
      src: { control: 'text' },
      alt: { control: 'text' },
      fallback: { control: 'text' },
    },
    args: { onStatusChange: fn() },
  });
</script>

<Story
  name="Default"
  args={{ src: 'https://i.pravatar.cc/300', alt: 'John Doe', fallback: 'JD' }}
/>
<Story
  name="WithFallback"
  args={{
    src: 'https://invalid-url-that-will-fail.com/avatar.jpg',
    alt: 'Jane Smith',
    fallback: 'JS',
  }}
/>
<Story name="SingleLetter" args={{ alt: 'Alice', fallback: 'A' }} />
<Story name="ThreeLetters" args={{ alt: 'Bob Anderson Brown', fallback: 'BAB' }} />
<Story
  name="CustomStyled"
  args={{
    src: 'https://i.pravatar.cc/300?img=3',
    alt: 'Sarah Johnson',
    fallback: 'SJ',
    rootStyle: 'width: 100px; height: 100px; border-radius: 50%; border: 3px solid #4F46E5; overflow: hidden',
  }}
/>
<Story
  name="Small"
  args={{
    src: 'https://i.pravatar.cc/300?img=5',
    alt: 'Emma Wilson',
    fallback: 'EW',
    rootStyle: 'width: 32px; height: 32px; border-radius: 50%; overflow: hidden; font-size: 12px',
  }}
/>
<Story
  name="Large"
  args={{
    src: 'https://i.pravatar.cc/300?img=6',
    alt: 'David Miller',
    fallback: 'DM',
    rootStyle: 'width: 150px; height: 150px; border-radius: 50%; overflow: hidden; font-size: 48px',
  }}
/>
