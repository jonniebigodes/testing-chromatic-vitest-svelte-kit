<script lang="ts">
  import { Toolbar } from '$lib/Toolbar';
  import { Slider } from '$lib/Slider';
  import Divider from '$lib/Divider';
  import { Toggle } from '$lib/Toggle';
  import { Select } from '$lib/Select';

  let fontSize = $state([16]);
  let isBold = $state(false);
  let isItalic = $state(false);
  let isUnderline = $state(false);

  const fontFamilyItems = [
    { label: 'Inter', value: 'Inter, sans-serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Courier New', value: '"Courier New", monospace' },
  ];

  let selectedFont = $state(['Inter, sans-serif']);

  const bodyStyle = $derived(
    `font-size:${fontSize[0]}px;font-family:${selectedFont[0] ?? 'Inter, sans-serif'};font-weight:${isBold ? 700 : 400};font-style:${isItalic ? 'italic' : 'normal'};text-decoration:${isUnderline ? 'underline' : 'none'};`,
  );
</script>

<main style="padding:2rem;max-width:760px;margin:0 auto;">
  <h1 style="margin-bottom:0.25rem;">Document Editor</h1>
  <p style="color:#64748b;margin-bottom:1.5rem;">Draft and format your content with real-time preview.</p>

  <div style="border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
    <div style="padding:0.75rem 1rem;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
      <Toolbar>
        <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
          <Toggle
            label="Bold"
            pressed={isBold}
            onPressedChange={(p) => { isBold = p; }}
          ><strong>B</strong></Toggle>
          <Toggle
            label="Italic"
            pressed={isItalic}
            onPressedChange={(p) => { isItalic = p; }}
          ><em>I</em></Toggle>
          <Toggle
            label="Underline"
            pressed={isUnderline}
            onPressedChange={(p) => { isUnderline = p; }}
          ><span style="text-decoration:underline;">U</span></Toggle>

          <Divider />

          <div style="width:160px;">
            <Select
              items={fontFamilyItems}
              value={selectedFont}
              onValueChange={(d) => { selectedFont = d.value; }}
              placeholder="Font"
            />
          </div>

          <div style="display:flex;align-items:center;gap:0.5rem;min-width:160px;">
            <span style="font-size:0.75rem;color:#64748b;white-space:nowrap;">Size: {fontSize[0]}px</span>
            <Slider
              value={fontSize}
              onValueChange={(d) => { fontSize = d.value; }}
              min={10}
              max={32}
              step={1}
            />
          </div>
        </div>
      </Toolbar>
    </div>

    <div style="padding:1.5rem;min-height:280px;">
      <p style={bodyStyle} contenteditable="true">
        This is an editable document. Start typing to add your content here. The toolbar above controls the formatting of the text. You can adjust the font size using the slider, toggle bold, italic, and underline styles, and change the font family.
      </p>
    </div>
  </div>
</main>
