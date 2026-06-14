import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import PinInput from './PinInput.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({});

describe('PinInput', () => {
  test('renders the label', async () => {
    const screen = await render(PinInput, {
      props: { label: 'Verification code' },
    });
    await expect.element(screen.getByText('Verification code')).toBeVisible();
    await takeSnapshot('PinInput - Default props');
  });

  test('renders one field per maxLength', async () => {
    const screen = await render(PinInput, { props: { maxLength: 4 } });
    expect(screen.getByRole('textbox').elements()).toHaveLength(4);
    await takeSnapshot('PinInput - Max length fields');
  });

  test('disables the fields when disabled', async () => {
    const screen = await render(PinInput, { props: { maxLength: 3, disabled: true } });
    const inputs = screen.getByRole('textbox').elements();
    expect(inputs).toHaveLength(3);
    inputs.forEach((input) => expect(input).toBeDisabled());
    await takeSnapshot('PinInput - Disabled');
  });
});
