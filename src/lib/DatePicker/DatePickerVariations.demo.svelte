<script lang="ts">
  import DatePicker from './DatePicker.svelte';
</script>

<div class="demo-variations">
  <DatePicker children="Default" />
  <DatePicker children="Fixed Weeks" fixedWeeks />
  <DatePicker children="Week Starts Monday" weekStartsOn={1} />
  <DatePicker children="Multiple Selection" type="multiple" />
  <DatePicker children="Close on Select" closeOnDateSelect />
  <DatePicker children="Narrow Weekdays" weekdayFormat="narrow" />
</div>

<style>
  .demo-variations {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }
</style>
