<script lang="ts">
  import { DatePicker } from '$lib/DatePicker';
  import { Calendar } from '$lib/Calendar';
  import { RadioGroup } from '$lib/RadioGroup';
  import { Select } from '$lib/Select';

  const timeSlots = [
    { label: '9:00 AM', value: '09:00' },
    { label: '10:30 AM', value: '10:30' },
    { label: '1:00 PM', value: '13:00' },
    { label: '2:30 PM', value: '14:30' },
    { label: '4:00 PM', value: '16:00' },
  ];

  const meetingTypes = [
    { label: 'In-person', value: 'in-person' },
    { label: 'Video call', value: 'video' },
    { label: 'Phone call', value: 'phone' },
  ];
</script>

<main style="padding:2rem;max-width:960px;margin:0 auto;">
  <h1 style="margin-bottom:0.25rem;">Book an Appointment</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Schedule time with our team at your convenience.</p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;">
    <div>
      <section style="margin-bottom:2rem;">
        <h2 style="margin-bottom:1rem;font-size:1.125rem;">Select a Date</h2>
        <Calendar />
      </section>

      <section>
        <h2 style="margin-bottom:1rem;font-size:1.125rem;">Meeting Type</h2>
        <RadioGroup label="How would you like to meet?" options={meetingTypes} defaultValue="video" />
      </section>
    </div>

    <div>
      <section style="margin-bottom:2rem;">
        <h2 style="margin-bottom:1rem;font-size:1.125rem;">Pick a Start Date</h2>
        <DatePicker />
      </section>

      <section>
        <h2 style="margin-bottom:1rem;font-size:1.125rem;">Available Time Slots</h2>
        <Select
          items={timeSlots}
          placeholder="Choose a time slot"
          name="time-slot"
        />
      </section>

      <div style="margin-top:2rem;padding:1.25rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:0.5rem;">
        <p style="margin:0;font-size:0.875rem;color:#166534;">
          Appointments are 30 minutes long. You will receive a confirmation email with a calendar invite after booking.
        </p>
      </div>
    </div>
  </div>
</main>
