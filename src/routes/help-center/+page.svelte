<script lang="ts">
  import Accordion from '$lib/Accordion';

  const gettingStarted = [
    { title: 'How do I create a new account?', content: 'Click the "Sign up for free" button on the homepage, fill in your name, email and password, then verify your email address.' },
    { title: 'Is there a free trial?', content: 'Yes! The Free plan is free forever with up to 3 projects. Upgrade to Pro or Team at any time to unlock more features.' },
    { title: 'Can I import data from other tools?', content: 'Absolutely. We support imports from CSV, JSON, Notion, Jira, and Linear. Head to Settings → Import to get started.' },
  ];

  const billing = [
    { title: 'What payment methods do you accept?', content: 'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Annual plans come with a 20% discount.' },
    { title: 'Can I change my plan at any time?', content: 'Yes, you can upgrade or downgrade your plan at any time from the Billing section in your account settings. Changes take effect immediately.' },
    { title: 'Do you offer refunds?', content: 'We offer a 30-day money-back guarantee. If you are not satisfied, contact support@acme.com for a full refund.' },
  ];

  const technical = [
    { title: 'What browsers are supported?', content: 'We support the latest two versions of Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.' },
    { title: 'Is there an API?', content: 'Yes! Our REST API and GraphQL API are available on all paid plans. Full documentation is available at docs.acme.com/api.' },
    { title: 'How is my data backed up?', content: 'Your data is backed up in real-time across multiple availability zones. We retain backups for 30 days on Pro plans and 90 days on Enterprise.' },
  ];
</script>

<main style="padding:2rem;max-width:800px;margin:0 auto;">
  <h1>Help Center</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Find answers to the most common questions about Acme.</p>

  <section style="margin-bottom:2rem;">
    <h2 style="margin-bottom:1rem;">Getting Started</h2>
    <Accordion items={gettingStarted} />
  </section>

  <section style="margin-bottom:2rem;">
    <h2 style="margin-bottom:1rem;">Billing & Plans</h2>
    <Accordion items={billing} />
  </section>

  <section style="margin-bottom:2rem;">
    <h2 style="margin-bottom:1rem;">Technical</h2>
    <Accordion items={technical} />
  </section>

  <div style="margin-top:3rem;padding:1.5rem;background:#f8fafc;border-radius:0.5rem;text-align:center;">
    <p style="margin:0 0 0.5rem;font-weight:500;">Still have questions?</p>
    <p style="color:#64748b;margin:0;">Contact our support team at <a href="mailto:support@acme.com" style="color:#3b82f6;">support@acme.com</a></p>
  </div>
</main>
