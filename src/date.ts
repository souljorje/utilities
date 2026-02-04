import { isPlainObject } from './is';
import { pluralize } from './string';

type DateInput = Date | number;
type TimeUnitName = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';
type TimeStructure = Partial<Record<TimeUnitName, number>>;

type DateToStringOptions = {
    short?: boolean;
    displayToday?: boolean;
    displayYear?: boolean;
};

type DateDiffOptions = {
    units?: TimeUnitName[];
    unitsCount?: number;
    short?: boolean;
    prefix?: boolean;
    limit?: TimeStructure;
    displayToday?: boolean;
    displayYear?: boolean;
};

/**
 * Normalizes a date-like value into a Date instance.
 *
 * @example
 * toDate('2024-01-01T00:00:00Z') // Date
 * toDate(new Date()) // same Date instance
 */
const toDate = (date: DateInput): Date => (date instanceof Date ? date : new Date(date));

/**
 * Returns unix timestamp from date-like input.
 *
 * @example
 * toTimestamp(new Date('2024-01-01T00:00:00Z')) // 1704067200000
 */
const toTimestamp = (date: DateInput): number => toDate(date).getTime();

export const timeUnits: Record<TimeUnitName, number> = {
    year: 31536e6,
    month: 2592e6,
    week: 6048e5,
    day: 864e5,
    hour: 36e5,
    minute: 6e4,
    second: 1e3,
};

const halfYear = timeUnits.year / 2;
const halfDay = timeUnits.day / 2;

export const timeUnitsNames = Object.keys(timeUnits) as TimeUnitName[];

export const timeUnitsNamesShort: Record<TimeUnitName, string> = {
    year: 'yr',
    month: 'mo',
    week: 'w',
    day: 'd',
    hour: 'h',
    minute: 'min',
    second: 's',
};

/**
 * Creates an ISO timestamp exactly two minutes from now.
 *
 * @example
 * getTwoMinutesDeadline() // '2026-02-04T12:34:56.000Z'
 * typeof getTwoMinutesDeadline() // 'string'
 */
export const getTwoMinutesDeadline = (): string => new Date(new Date().getTime() + 2 * 60000).toISOString();

/**
 * Returns true when target date is in the future.
 *
 * @example
 * isFuture(Date.now() + 1000) // true
 * isFuture(Date.now() - 1000) // false
 */
export const isFuture = (date: DateInput): boolean => toTimestamp(date) > Date.now();

/**
 * Formats date using locale with optional compact output.
 *
 * For close dates it hides year/day pieces unless explicitly requested.
 *
 * @example
 * dateToString(new Date('2024-01-01T12:30:00Z'), { short: true }) // locale date string
 * dateToString(new Date('2024-01-01T12:30:00Z'), { displayYear: true }) // locale date string with year
 */
export const dateToString = (
    date: DateInput,
    options?: DateToStringOptions | boolean,
): string => {
    const targetDate = toDate(date);

    const optionsObj = isPlainObject(options) ? options : {};
    const short = options === true || !!optionsObj.short;
    const { displayYear, displayToday } = optionsObj;

    const now = new Date();
    const delta = Math.abs(now.getTime() - targetDate.getTime());

    const hideYear = !displayYear && delta < halfYear;
    const hideToday = !displayToday && delta < halfDay;

    const formatOptions: Intl.DateTimeFormatOptions = {
        year: hideYear ? undefined : 'numeric',
        month: hideToday ? undefined : 'short',
        day: hideToday ? undefined : 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: short ? undefined : '2-digit',
    };

    return targetDate.toLocaleString('en-GB', formatOptions);
};

/**
 * Returns absolute milliseconds difference between now and date.
 *
 * @example
 * getTimeDelta(Date.now() - 5000) // 5000
 */
export const getTimeDelta = (date: DateInput): number => Math.abs(toTimestamp(date) - Date.now());

/**
 * Splits date delta into unit buckets.
 *
 * @example
 * dateDiffStructure(Date.now() - 61000, ['minute', 'second']) // { minute: 1, second: 1 }
 * dateDiffStructure(Date.now() - 3600000, ['hour']) // { hour: 1 }
 */
export const dateDiffStructure = (date: DateInput, units?: TimeUnitName[]): TimeStructure => {
    let delta = getTimeDelta(date);
    const filteredTimeUnits: Record<TimeUnitName, number> = units
        ? units.reduce((acc, item) => ({ ...acc, [item]: timeUnits[item] }), {} as Record<TimeUnitName, number>)
        : timeUnits;

    return Object.entries(filteredTimeUnits).reduce((acc, [key, value]) => {
        const unit = key as TimeUnitName;
        acc[unit] = Math.floor(delta / value);
        delta -= (acc[unit] ?? 0) * value;
        return acc;
    }, {} as TimeStructure);
};

/**
 * Makes human-readable diff text from a unit structure.
 *
 * Supports short/long units, limiting number of units, and optional prefix mode.
 *
 * @example
 * dateDiffStructureToString(Date.now() + 60000, { minute: 1 }, { short: false }) // '1 minute left'
 * dateDiffStructureToString(Date.now() - 60000, { minute: 1 }, { short: true, prefix: true }) // 'is late for 1min'
 */
const dateDiffStructureToString = (
    date: DateInput,
    diffStructure: TimeStructure,
    {
        unitsCount,
        short,
        prefix,
    }: Pick<DateDiffOptions, 'unitsCount' | 'short' | 'prefix'>,
): string => {
    let diffStructureEntries = Object.entries(diffStructure).filter(([, value]) => value);
    if (unitsCount) {
        diffStructureEntries = diffStructureEntries.slice(0, unitsCount);
    }

    if (!diffStructureEntries.length) return 'just now';

    const diffString = diffStructureEntries.reduce((acc, [key, value]) => {
        const typedValue = value as number;
        const timeUnit = short ? timeUnitsNamesShort[key as TimeUnitName] : ` ${pluralize(key, typedValue)}`;
        return `${acc ? `${acc} ` : ''}${typedValue}${timeUnit}`;
    }, '');

    if (prefix) {
        return `${isFuture(date) ? 'in' : 'is late for'} ${diffString}`;
    }

    return `${diffString} ${isFuture(date) ? 'left' : 'ago'}`;
};

/**
 * Converts unit structure into milliseconds.
 *
 * @example
 * dateStructureToTime({ day: 1, hour: 2 }) // 93600000
 * dateStructureToTime({ minute: 1 }) // 60000
 */
export const dateStructureToTime = (structure: TimeStructure): number => (
    Object.entries(structure)
        .reduce((acc, [key, value]) => acc + (timeUnits[key as TimeUnitName] * (value ?? 0)), 0)
);

/**
 * Returns relative date text with optional absolute-date fallback.
 *
 * When `opts.limit` is exceeded it returns `dateToString` instead of relative text.
 *
 * @example
 * getDateDiff(Date.now() - 30000, { short: true }) // '30s ago'
 * getDateDiff(Date.now() + 30000, { short: true }) // '30s left'
 */
export const getDateDiff = (date: DateInput, opts: DateDiffOptions = {}): string => {
    if (opts.limit) {
        const limit = dateStructureToTime(opts.limit);
        const delta = getTimeDelta(date);
        if (delta > limit) return dateToString(date, opts);
    }

    const diffStructure = dateDiffStructure(date, opts.units);
    return dateDiffStructureToString(date, diffStructure, opts);
};

/**
 * Creates local-time Date from UTC date components.
 *
 * @example
 * toLocalUtcDate(new Date('2024-01-01T00:00:00Z')) // Date
 * toLocalUtcDate(new Date()) // Date
 */
export const toLocalUtcDate = (date: Date): Date => {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    );
};

/**
 * Returns true when date falls on current local day.
 *
 * @example
 * isToday(new Date()) // true
 * isToday(new Date('2000-01-01T00:00:00Z')) // false
 */
export const isToday = (date: Date): boolean => date.toDateString() === new Date().toDateString();
