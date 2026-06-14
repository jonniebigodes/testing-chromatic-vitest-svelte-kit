<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Footer from './Footer.svelte';
  import FooterPage from './FooterPage.demo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Footer',
    component: Footer,
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
    argTypes: {
      color: { control: 'color' },
      label: { control: 'text' },
      links: { control: 'object' },
      inverted: { control: 'boolean' },
    },
    args: { onLinkClick: fn() },
  });
</script>

<Story name="Default" asChild>
  <FooterPage
    footerProps={{
      color: '#1f2937',
      label: '© 2025 Company Name. All rights reserved.',
      links: [],
      inverted: false,
    }}
  />
</Story>
<Story name="WithLinks" asChild>
  <FooterPage
    footerProps={{
      color: '#1f2937',
      label: '© 2025 Acme Corporation. All rights reserved.',
      links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Careers'],
      inverted: false,
    }}
  />
</Story>
<Story name="Inverted" asChild>
  <FooterPage
    footerProps={{
      color: '#ffffff',
      label: '© 2025 Light Theme Inc. All rights reserved.',
      links: [],
      inverted: true,
    }}
    pageBg="#1f2937"
    headingColor="#ffffff"
    textColor="#d1d5db"
  />
</Story>
