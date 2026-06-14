<script lang="ts">
  import { Select } from '$lib/Select';
  import { Combobox } from '$lib/Combobox';
  import { RadioGroup } from '$lib/RadioGroup';
  import Button from '$lib/Button';

  let currentStep = $state(1);
  const totalSteps = 3;

  const roleItems = [
    { label: 'Frontend Engineer', value: 'frontend' },
    { label: 'Backend Engineer', value: 'backend' },
    { label: 'Full-Stack Engineer', value: 'fullstack' },
    { label: 'Product Designer', value: 'designer' },
    { label: 'Product Manager', value: 'pm' },
    { label: 'DevOps / SRE', value: 'devops' },
  ];

  const technologies = [
    'React', 'Vue', 'Svelte', 'Angular', 'Next.js', 'Nuxt',
    'Node.js', 'Python', 'Go', 'Rust', 'TypeScript', 'Docker',
  ];

  const planOptions = [
    { label: 'Free – Up to 3 projects, community support', value: 'free' },
    { label: 'Pro – Unlimited projects, priority support ($9/mo)', value: 'pro' },
    { label: 'Team – Everything in Pro + team features ($29/mo)', value: 'team' },
  ];

  function next() {
    if (currentStep < totalSteps) currentStep++;
  }
  function prev() {
    if (currentStep > 1) currentStep--;
  }
</script>

<main style="padding:2rem;max-width:560px;margin:0 auto;">
  <h1 style="margin-bottom:0.25rem;">Create your account</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Step {currentStep} of {totalSteps}</p>

  <div style="display:flex;gap:0.5rem;margin-bottom:2rem;">
    {#each Array.from({ length: totalSteps }, (_, i) => i + 1) as step (step)}
      <div style="flex:1;height:4px;border-radius:2px;background:{step <= currentStep ? '#3b82f6' : '#e2e8f0'};"></div>
    {/each}
  </div>

  {#if currentStep === 1}
    <section>
      <h2 style="margin-bottom:0.5rem;">What's your role?</h2>
      <p style="color:#64748b;margin-bottom:1.5rem;">This helps us tailor the experience for you.</p>
      <Select items={roleItems} placeholder="Select your role" name="role" />
    </section>
  {:else if currentStep === 2}
    <section>
      <h2 style="margin-bottom:0.5rem;">Your tech stack</h2>
      <p style="color:#64748b;margin-bottom:1.5rem;">Which technologies do you work with most?</p>
      <Combobox items={technologies} label="Technologies" placeholder="Search technologies..." />
    </section>
  {:else}
    <section>
      <h2 style="margin-bottom:0.5rem;">Choose a plan</h2>
      <p style="color:#64748b;margin-bottom:1.5rem;">You can upgrade or downgrade at any time.</p>
      <RadioGroup label="Plan" options={planOptions} defaultValue="free" />
    </section>
  {/if}

  <div style="display:flex;justify-content:space-between;margin-top:2rem;">
    <Button
      label="Back"
      size="medium"
      backgroundColor="#f1f5f9"
      onclick={prev}
    />
    <Button
      label={currentStep === totalSteps ? 'Create account' : 'Continue'}
      size="medium"
      onclick={next}
    />
  </div>
</main>
