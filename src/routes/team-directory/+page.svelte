<script lang="ts">
  import { Avatar } from '$lib/Avatar';
  import { Pill } from '$lib/Pill';

  const team = [
    { name: 'Sarah Chen', role: 'Engineering Manager', department: 'Engineering', fallback: 'SC', status: 'online' as const },
    { name: 'Marcus Webb', role: 'Senior Frontend Engineer', department: 'Engineering', fallback: 'MW', status: 'online' as const },
    { name: 'Priya Patel', role: 'Product Designer', department: 'Design', fallback: 'PP', status: 'away' as const },
    { name: 'James Okafor', role: 'Backend Engineer', department: 'Engineering', fallback: 'JO', status: 'offline' as const },
    { name: 'Lucia Fernandez', role: 'Product Manager', department: 'Product', fallback: 'LF', status: 'online' as const },
    { name: 'Tom Nguyen', role: 'UX Researcher', department: 'Design', fallback: 'TN', status: 'away' as const },
  ];

  const statusVariant = {
    online: 'success',
    away: 'warning',
    offline: 'default',
  } as const;

  const departments = ['All', 'Engineering', 'Design', 'Product'];
  let activeDept = $state('All');

  const filteredTeam = $derived(
    activeDept === 'All' ? team : team.filter((m) => m.department === activeDept),
  );
</script>

<main style="padding:2rem;max-width:900px;margin:0 auto;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
    <div>
      <h1 style="margin:0 0 0.25rem;">Our Team</h1>
      <p style="color:#64748b;margin:0;">{team.length} people building the future</p>
    </div>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
      {#each departments as dept (dept)}
        <Pill
          variant={activeDept === dept ? 'success' : 'default'}
          onclick={() => { activeDept = dept; }}
        >{dept}</Pill>
      {/each}
    </div>
  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;">
    {#each filteredTeam as member (member.name)}
      <div style="display:flex;align-items:center;gap:1rem;padding:1.25rem;border:1px solid #e2e8f0;border-radius:0.75rem;background:white;">
        <Avatar alt={member.name} fallback={member.fallback} />
        <div style="flex:1;min-width:0;">
          <p style="margin:0 0 0.125rem;font-weight:600;font-size:0.9375rem;">{member.name}</p>
          <p style="margin:0 0 0.5rem;color:#64748b;font-size:0.8125rem;">{member.role}</p>
          <Pill size="small" variant={statusVariant[member.status]}>{member.status}</Pill>
        </div>
      </div>
    {/each}
  </div>
</main>
