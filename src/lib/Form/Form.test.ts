import { describe, test, expect } from 'vitest';
import { render } from '../../test-setup';
import FormTestNameField from './FormTestNameField.svelte';
import FormTestTwoFields from './FormTestTwoFields.svelte';
import FormTestInverted from './FormTestInverted.svelte';
import FormTestCustomGap from './FormTestCustomGap.svelte';
import { configure, takeSnapshot } from '@chromatic-com/vitest';

configure({
  title: 'PolarizedForm',
});

describe('Form', () => {
  test('renders its field children', async () => {
    const screen = await render(FormTestNameField);
    await expect.element(screen.getByLabelText('Full Name')).toBeVisible();
    await takeSnapshot('Form - Default props');
  });

  test('accepts typed input (default scenario)', async () => {
    const screen = await render(FormTestTwoFields);

    const name = screen.getByLabelText('Full Name');
    await name.fill('John Doe');
    await expect.element(name).toHaveValue('John Doe');

    const email = screen.getByLabelText('Email Address');
    await email.fill('john@example.com');
    await expect.element(email).toHaveValue('john@example.com');
    await takeSnapshot('Form - Default scenario');
  });

  test('renders correctly in the inverted scenario', async () => {
    const screen = await render(FormTestInverted);
    const user = screen.getByLabelText('Username');
    await user.fill('alice');
    await expect.element(user).toHaveValue('alice');
    await takeSnapshot('Form - Inverted scenario');
  });

  test('applies a custom gap', async () => {
    const screen = await render(FormTestCustomGap);
    await expect
      .element(screen.getByRole('form', { name: 'spaced' }))
      .toHaveStyle({ gap: '24px' });
    await takeSnapshot('Form - Custom gap');
  });
});
