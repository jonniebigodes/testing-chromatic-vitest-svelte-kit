<script lang="ts">
  import { Progress } from '$lib/Progress';
  import { Meter } from '$lib/Meter';
  import { RatingGroup } from '$lib/RatingGroup';
  import { Pill } from '$lib/Pill';

  const projects = [
    { name: 'Website Redesign', progress: 78, status: 'On track' as const, due: 'Jun 30' },
    { name: 'Mobile App v2', progress: 42, status: 'At risk' as const, due: 'Jul 15' },
    { name: 'API Migration', progress: 95, status: 'On track' as const, due: 'Jun 20' },
    { name: 'Analytics Dashboard', progress: 18, status: 'Behind' as const, due: 'Aug 1' },
  ];

  const statusVariant = {
    'On track': 'success',
    'At risk': 'warning',
    'Behind': 'inverted',
  } as const;

  const serverHealth = [
    { label: 'CPU Usage', value: 42, low: 33, high: 66 },
    { label: 'Memory Usage', value: 71, low: 33, high: 66 },
    { label: 'Disk I/O', value: 88, low: 33, high: 66 },
  ];
</script>

<main style="padding:2rem;max-width:960px;margin:0 auto;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
    <div>
      <h1 style="margin:0 0 0.25rem;">Project Dashboard</h1>
      <p style="color:#64748b;margin:0;">Q2 2025 overview</p>
    </div>
    <Pill variant="success">4 Active Projects</Pill>
  </div>

  <section style="margin-bottom:2.5rem;">
    <h2 style="margin-bottom:1rem;">Project Progress</h2>
    <div style="display:flex;flex-direction:column;gap:1.25rem;">
      {#each projects as project (project.name)}
        <div style="padding:1.25rem;border:1px solid #e2e8f0;border-radius:0.5rem;background:white;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
            <div>
              <span style="font-weight:600;">{project.name}</span>
              <span style="color:#94a3b8;font-size:0.875rem;margin-left:0.75rem;">Due {project.due}</span>
            </div>
            <Pill size="small" variant={statusVariant[project.status]}>{project.status}</Pill>
          </div>
          <Progress value={project.progress}>{project.name}</Progress>
        </div>
      {/each}
    </div>
  </section>

  <section style="margin-bottom:2.5rem;">
    <h2 style="margin-bottom:1rem;">Server Health</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
      {#each serverHealth as metric (metric.label)}
        <div style="padding:1.25rem;border:1px solid #e2e8f0;border-radius:0.5rem;background:white;">
          <p style="margin:0 0 0.5rem;font-weight:500;">{metric.label}</p>
          <Meter value={metric.value} min={0} max={100} low={metric.low} high={metric.high} />
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2 style="margin-bottom:1rem;">Team Satisfaction</h2>
    <div style="padding:1.25rem;border:1px solid #e2e8f0;border-radius:0.5rem;background:white;max-width:400px;">
      <p style="margin:0 0 0.75rem;color:#64748b;">How would you rate this sprint?</p>
      <RatingGroup label="Sprint Rating" max={5} defaultValue={4} />
    </div>
  </section>
</main>
