<script lang="ts">
  import Header from '$lib/Header';
  import Footer from '$lib/Footer';
  import DropDownMenu from '$lib/DropDownMenu';
  import Button from '$lib/Button';
  import Divider from '$lib/Divider';

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Docs', href: '#docs' },
  ];

  const features = [
    { title: 'Fast & Reliable', description: 'Built for speed with 99.9% uptime SLA.' },
    { title: 'Secure by Default', description: 'Enterprise-grade security out of the box.' },
    { title: 'Easy Integration', description: 'Connect to any tool in your existing stack.' },
  ];
</script>

<div>
  <Header title="Acme Corp" links={navLinks} isSticky />

  <main>
    <section style="padding:5rem 2rem;text-align:center;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2.5rem;line-height:1.2;margin-bottom:1rem;">Build products faster,<br />ship with confidence</h1>
      <p style="font-size:1.125rem;color:#64748b;margin-bottom:2rem;">The all-in-one platform that helps modern development teams move fast without breaking things.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <Button label="Get started for free" size="large" />
        <Button label="View live demo" size="large" backgroundColor="#ffffff" />
      </div>
    </section>

    <Divider />

    <section id="features" style="padding:4rem 2rem;max-width:900px;margin:0 auto;">
      <h2 style="text-align:center;margin-bottom:2rem;">Everything your team needs</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;">
        {#each features as feat (feat.title)}
          <div style="padding:1.5rem;border:1px solid #e2e8f0;border-radius:0.5rem;">
            <h3 style="margin:0 0 0.5rem;">{feat.title}</h3>
            <p style="color:#64748b;margin:0;">{feat.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <Divider />

    <section id="pricing" style="padding:4rem 2rem;text-align:center;max-width:600px;margin:0 auto;">
      <h2 style="margin-bottom:0.5rem;">Simple, transparent pricing</h2>
      <p style="color:#64748b;margin-bottom:1.5rem;">Start free, scale as you grow. No hidden fees.</p>
      <DropDownMenu label="Compare plans" children={['Free – 0$/mo', 'Pro – $9/mo', 'Team – $29/mo', 'Enterprise – contact us']} />
    </section>
  </main>

  <Footer
    label="© 2025 Acme Corp. All rights reserved."
    links={['Privacy Policy', 'Terms of Service', 'Contact Us', 'Status']}
  />
</div>
