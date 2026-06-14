import './styles/tokens.css';
import { render as svelteRender } from 'vitest-browser-svelte';
import type { Component, ComponentImport, ComponentOptions } from 'vitest-browser-svelte';

export async function render<C extends Component>(
  component: ComponentImport<C>,
  options?: ComponentOptions<C>,
) {
  return await svelteRender(component, options);
}
