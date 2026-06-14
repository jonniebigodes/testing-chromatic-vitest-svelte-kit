<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import { CalendarDate } from '@internationalized/date';
  import DatePicker from './DatePicker.svelte';
  import DatePickerControlled from './DatePickerControlled.demo.svelte';
  import DatePickerMultipleControlled from './DatePickerMultipleControlled.demo.svelte';
  import DatePickerBooking from './DatePickerBooking.demo.svelte';
  import DatePickerFormIntegration from './DatePickerFormIntegration.demo.svelte';
  import DatePickerDifferentLocales from './DatePickerDifferentLocales.demo.svelte';
  import DatePickerVariations from './DatePickerVariations.demo.svelte';

  const isWeekendDisabled = (date: { year: number; month: number; day: number }) => {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  };

  const { Story } = defineMeta({
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
      type: { control: 'select', options: ['single', 'multiple'] },
      weekStartsOn: { control: 'select', options: [0, 1, 2, 3, 4, 5, 6] },
      weekdayFormat: { control: 'select', options: ['narrow', 'short', 'long'] },
      monthFormat: {
        control: 'select',
        options: ['short', 'long', 'narrow', 'numeric', '2-digit'],
      },
      yearFormat: { control: 'select', options: ['numeric', '2-digit'] },
    },
    args: {
      onValueChange: fn(),
      onOpenChange: fn(),
      onInvalid: fn(),
    },
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
<Story name="CloseOnSelect" args={{ children: 'Close on select', closeOnDateSelect: true }} />
<Story name="Required" args={{ children: 'Required Date *', required: true }} />
<Story
  name="Disabled"
  args={{
    children: 'Disabled Date Picker',
    disabled: true,
    value: [new CalendarDate(2024, 1, 15)],
  }}
/>
<Story
  name="ReadOnly"
  args={{
    children: 'Read-only Date Picker',
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
<Story name="MultipleMonths" args={{ children: 'Multiple Months', numberOfMonths: 2 }} />
<Story
  name="CustomDisabledDates"
  args={{ children: 'Weekends Disabled', isDateDisabled: isWeekendDisabled }}
/>
<Story
  name="PreventDeselect"
  args={{
    children: 'Prevent Deselect',
    preventDeselect: true,
    value: [new CalendarDate(2024, 1, 15)],
  }}
/>
<Story name="Controlled" asChild>
  <DatePickerControlled />
</Story>
<Story name="MultipleControlled" asChild>
  <DatePickerMultipleControlled />
</Story>
<Story name="BookingDatePicker" asChild>
  <DatePickerBooking />
</Story>
<Story name="FormIntegration" asChild>
  <DatePickerFormIntegration />
</Story>
<Story name="DifferentLocales" asChild>
  <DatePickerDifferentLocales />
</Story>
<Story name="Variations" asChild>
  <DatePickerVariations />
</Story>
