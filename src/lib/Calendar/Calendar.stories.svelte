<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import { CalendarDate } from '@internationalized/date';
  import Calendar from './Calendar.svelte';
  import CalendarControlled from './CalendarControlled.demo.svelte';
  import CalendarMultipleControlled from './CalendarMultipleControlled.demo.svelte';
  import CalendarBooking from './CalendarBooking.demo.svelte';
  import CalendarEvent from './CalendarEvent.demo.svelte';
  import CalendarDifferentLocales from './CalendarDifferentLocales.demo.svelte';
  import CalendarBirthday from './CalendarBirthday.demo.svelte';
  import CalendarVariations from './CalendarVariations.demo.svelte';

  const isWeekendDisabled = (date: { year: number; month: number; day: number }) => {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  };

  const { Story } = defineMeta({
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      type: { control: 'select', options: ['single', 'multiple'] },
      weekStartsOn: { control: 'select', options: [0, 1, 2, 3, 4, 5, 6] },
      weekdayFormat: { control: 'select', options: ['narrow', 'short', 'long'] },
      monthFormat: { control: 'select', options: ['long', 'short'] },
      yearFormat: { control: 'select', options: ['numeric', '2-digit'] },
    },
    args: { onValueChange: fn() },
  });
</script>

<Story name="Default" args={{ children: 'Select a date' }} />
<Story
  name="WithMinMaxValue"
  args={{
    children: 'Choose a date in range',
    value: [new CalendarDate(2024, 6, 15)],
    minValue: new CalendarDate(2024, 6, 1),
    maxValue: new CalendarDate(2024, 6, 30),
  }}
/>
<Story name="CustomChildren" args={{ children: 'Book an Appointment' }} />
<Story
  name="MultipleSelection"
  args={{
    children: 'Select multiple dates',
    type: 'multiple',
    value: [
      new CalendarDate(2024, 1, 15),
      new CalendarDate(2024, 1, 20),
      new CalendarDate(2024, 1, 25),
    ],
  }}
/>
<Story
  name="Disabled"
  args={{
    children: 'Disabled Calendar',
    disabled: true,
    value: [new CalendarDate(2024, 1, 15)],
  }}
/>
<Story
  name="ReadOnly"
  args={{
    children: 'Read-only Calendar',
    readOnly: true,
    value: [new CalendarDate(2024, 1, 15)],
  }}
/>
<Story name="WeekStartsMonday" args={{ children: 'Week starts on Monday', weekStartsOn: 1 }} />
<Story name="FixedWeeks" args={{ children: 'Fixed 6 Weeks', fixedWeeks: true }} />
<Story name="NarrowWeekdays" args={{ children: 'Narrow Weekday Format', weekdayFormat: 'narrow' }} />
<Story name="LongWeekdays" args={{ children: 'Long Weekday Format', weekdayFormat: 'long' }} />
<Story
  name="DisableDaysOutsideMonth"
  args={{ children: 'Days Outside Month Disabled', disableDaysOutsideMonth: true }}
/>
<Story
  name="MaxDaysLimit"
  args={{ children: 'Max 3 Days Selection', type: 'multiple', maxDays: 3 }}
/>
<Story
  name="CustomDisabledDates"
  args={{ children: 'Weekends Disabled', isDateDisabled: isWeekendDisabled }}
/>
<Story name="Controlled" asChild>
  <CalendarControlled />
</Story>
<Story name="MultipleControlled" asChild>
  <CalendarMultipleControlled />
</Story>
<Story name="BookingCalendar" asChild>
  <CalendarBooking />
</Story>
<Story name="EventCalendar" asChild>
  <CalendarEvent />
</Story>
<Story name="DifferentLocales" asChild>
  <CalendarDifferentLocales />
</Story>
<Story name="ShortMonthFormat" args={{ children: 'Short Month Format', monthFormat: 'short' }} />
<Story name="LongMonthFormat" args={{ children: 'Long Month Format', monthFormat: 'long' }} />
<Story name="BirthdayCalendar" asChild>
  <CalendarBirthday />
</Story>
<Story name="Variations" asChild>
  <CalendarVariations />
</Story>
