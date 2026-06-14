<script lang="ts">
  import Calendar from './Calendar.svelte';
</script>

<div class="demo-variations">
  <Calendar children="Default" />
  <Calendar children="Fixed Weeks" fixedWeeks />
  <Calendar children="Week Starts Monday" weekStartsOn={1} />
  <Calendar children="Multiple Selection" type="multiple" maxDays={5} />
  <Calendar children="Narrow Weekdays" weekdayFormat="narrow" />
</div>

<style>
  .demo-variations {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }
</style>
