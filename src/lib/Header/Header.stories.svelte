<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Header from './Header.svelte';
  import HeaderPage from './HeaderPage.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Header',
    component: Header,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      links: { control: 'object' },
      isSticky: { control: 'boolean' },
      inverted: { control: 'boolean' },
      logo: { control: 'text' },
      fullWidth: { control: 'boolean' },
    },
    args: { onLinkClick: fn() },
  });
</script>

<Story
  name="Default"
  asChild
>
  <HeaderPage
    headerProps={{
      title: 'My App',
      links: [],
      isSticky: false,
      inverted: false,
      fullWidth: false,
    }}
  />
</Story>
<Story name="WithLinks" asChild>
  <HeaderPage
    headerProps={{
      title: 'My App',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'About', href: '#' },
      ],
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    }}
  />
</Story>
<Story name="Inverted" asChild>
  <HeaderPage
    headerProps={{
      title: 'Dark App',
      links: [
        { label: 'Docs', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Community', href: '#' },
      ],
      isSticky: true,
      inverted: true,
      fullWidth: true,
    }}
    pageBg="#111827"
    textColor="#e5e7eb"
  />
</Story>
