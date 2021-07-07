/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import moment, { Moment, MomentInput } from 'moment';
import momentTimeZone from 'moment-timezone';

export const ISO_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
export const currentTimezone = momentTimeZone.tz.guess();

export const DATE_FORMAT = 'ddd M/D';
export const TIME_FORMAT = 'hh:mm A';

export const formatDayDateTimePmAm = (date: MomentInput) => {
  return moment(date).format('dddd, MMM D h:mm A');
};

export const formatDayDateTimePmAmWithTimeZone = (
  date: MomentInput,
  timeZone: string,
) => {
  return momentTimeZone(date).tz(timeZone).format('dddd, MMM D h:mm A');
};

export const formatHours = (date: MomentInput) => {
  if (!date) {
    return null;
  }
  return moment(date).format('hh:mm A');
};

export const formatHoursWithTimeZone = (
  date: MomentInput,
  timeZone: string,
) => {
  if (!date) {
    return null;
  }
  return momentTimeZone.tz(date, timeZone).format('hh:mm A');
};

export const formatDatePeriodWithTimeZone = (
  from: Date,
  to: Date,
  timeZone: string,
) => {
  if (!from || !to) {
    return null;
  }

  const fromTime = formatHoursWithTimeZone(from, timeZone);
  const toTime = formatHoursWithTimeZone(to, timeZone);

  return `${fromTime} - ${toTime}`;
};

export const dateFromUtcWithTimeZone = (
  dateString: string,
  timeZone: string,
) => {
  return momentTimeZone.tz(dateString, timeZone).format();
};

export const dateToUtcStringWithTimeZone = (
  date: Date | Moment,
  timeZone: string,
) => {
  if (timeZone) {
    return momentTimeZone(date).utc().tz(timeZone).format(ISO_DATETIME_FORMAT);
  }
};

export const isSameDay = (
  beforeTime: Date | Moment,
  actualTime: Date | Moment,
  timeZone: string,
) => {
  if (beforeTime && actualTime && timeZone) {
    const before = momentTimeZone(beforeTime).tz(timeZone);
    const actual = momentTimeZone(actualTime).tz(timeZone);
    return before.isSame(actual, 'day');
  }
  return false;
};

export const formatCompleteNameAndDateTz = (
  date: MomentInput,
  timezone: string,
) => {
  return momentTimeZone.tz(date, timezone).format('dddd, MMMM D');
};
