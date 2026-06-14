<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordion from './Accordion.svelte';

  const defaultItems = [
    {
      title: 'What is React?',
      content:
        'React is a JavaScript library for building user interfaces. It lets you create reusable components that manage their own state.',
    },
  ];

  const multipleItems = [
    {
      title: 'What is React?',
      content:
        'React is a JavaScript library for building user interfaces. It lets you create reusable components that manage their own state.',
    },
    {
      title: 'What is Ark UI?',
      content:
        'Ark UI is a headless UI library that provides accessible and customizable components for React, Vue, and Solid applications.',
    },
    {
      title: 'What is Storybook?',
      content:
        'Storybook is a tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.',
    },
    {
      title: 'What is TypeScript?',
      content:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language.',
    },
  ];

  const { Story } = defineMeta({
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
  });
</script>

<div style="width: 500px; max-width: 100%;">
  <Story name="Default" args={{ items: defaultItems }} />
  <Story name="MultipleItems" args={{ items: multipleItems }} />
  <Story
    name="Inverted"
    args={{
      inverted: true,
      items: multipleItems.slice(0, 3),
    }}
    parameters={{ backgrounds: { default: 'dark' } }}
  />
  <Story
    name="InvertedSingleItem"
    args={{
      inverted: true,
      items: [
        {
          title: 'Dark Mode Example',
          content:
            'This accordion is displayed with inverted colors suitable for dark backgrounds.',
        },
      ],
    }}
    parameters={{ backgrounds: { default: 'dark' } }}
  />
  <Story
    name="LongContent"
    args={{
      items: [
        {
          title: 'Getting Started with Accordion',
          content:
            'The accordion component is a vertically stacked set of interactive headings that each reveal a section of content.',
        },
        {
          title: 'Accessibility Features',
          content:
            'Our accordion implementation follows ARIA best practices, including proper keyboard navigation.',
        },
      ],
    }}
  />
  <Story
    name="ManyItems"
    args={{
      items: Array.from({ length: 8 }, (_, i) => ({
        title: `Section ${i + 1}`,
        content: `Content for section ${i + 1}`,
      })),
    }}
  />
</div>
