[@souljorje/utils](index.md) / date

# date

## Table of contents

* [Functions](#functions)
  * [dateDiffStructure()](#datediffstructure)
  * [dateStructureToTime()](#datestructuretotime)
  * [dateToString()](#datetostring)
  * [getDateDiff()](#getdatediff)
  * [getTimeDelta()](#gettimedelta)
  * [getTwoMinutesDeadline()](#gettwominutesdeadline)
  * [isFuture()](#isfuture)
  * [isToday()](#istoday)
  * [toLocalUtcDate()](#tolocalutcdate)
* [Variables](#variables)
  * [timeUnits](#timeunits)
  * [timeUnitsNames](#timeunitsnames)
  * [timeUnitsNamesShort](#timeunitsnamesshort)
* [Interfaces](#interfaces)
  * [DateDiffOptions](#datediffoptions)
  * [DateToStringOptions](#datetostringoptions)
* [Type Aliases](#type-aliases)
  * [DateInput](#dateinput)
  * [TimeStructure](#timestructure)
  * [TimeUnitName](#timeunitname)

## Functions

### dateDiffStructure()

```ts
function dateDiffStructure(date, units?): TimeStructure;
```

Defined in: [date.ts:133](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L133)

Splits date delta into unit buckets.

#### Parameters

##### date

[`DateInput`](#dateinput)

##### units?

[`TimeUnitName`](#timeunitname)\[]

#### Returns

[`TimeStructure`](#timestructure)

#### Example

```ts
dateDiffStructure(Date.now() - 61000, ['minute', 'second']) // { minute: 1, second: 1 }
dateDiffStructure(Date.now() - 3600000, ['hour']) // { hour: 1 }
```

***

### dateStructureToTime()

```ts
function dateStructureToTime(structure): number;
```

Defined in: [date.ts:188](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L188)

Converts unit structure into milliseconds.

#### Parameters

##### structure

[`TimeStructure`](#timestructure)

#### Returns

`number`

#### Example

```ts
dateStructureToTime({ day: 1, hour: 2 }) // 93600000
dateStructureToTime({ minute: 1 }) // 60000
```

***

### dateToString()

```ts
function dateToString(date, options?): string;
```

Defined in: [date.ts:93](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L93)

Formats date using locale with optional compact output.

For close dates it hides year/day pieces unless explicitly requested.

#### Parameters

##### date

[`DateInput`](#dateinput)

##### options?

`boolean` | [`DateToStringOptions`](#datetostringoptions)

#### Returns

`string`

#### Example

```ts
dateToString(new Date('2024-01-01T12:30:00Z'), { short: true }) // locale date string
dateToString(new Date('2024-01-01T12:30:00Z'), { displayYear: true }) // locale date string with year
```

***

### getDateDiff()

```ts
function getDateDiff(date, opts): string;
```

Defined in: [date.ts:202](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L202)

Returns relative date text with optional absolute-date fallback.

When `opts.limit` is exceeded it returns `dateToString` instead of relative text.

#### Parameters

##### date

[`DateInput`](#dateinput)

##### opts

[`DateDiffOptions`](#datediffoptions) = `{}`

#### Returns

`string`

#### Example

```ts
getDateDiff(Date.now() - 30000, { short: true }) // '30s ago'
getDateDiff(Date.now() + 30000, { short: true }) // '30s left'
```

***

### getTimeDelta()

```ts
function getTimeDelta(date): number;
```

Defined in: [date.ts:124](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L124)

Returns absolute milliseconds difference between now and date.

#### Parameters

##### date

[`DateInput`](#dateinput)

#### Returns

`number`

#### Example

```ts
getTimeDelta(Date.now() - 5000) // 5000
```

***

### getTwoMinutesDeadline()

```ts
function getTwoMinutesDeadline(): string;
```

Defined in: [date.ts:73](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L73)

Creates an ISO timestamp exactly two minutes from now.

#### Returns

`string`

#### Example

```ts
getTwoMinutesDeadline() // '2026-02-04T12:34:56.000Z'
typeof getTwoMinutesDeadline() // 'string'
```

***

### isFuture()

```ts
function isFuture(date): boolean;
```

Defined in: [date.ts:82](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L82)

Returns true when target date is in the future.

#### Parameters

##### date

[`DateInput`](#dateinput)

#### Returns

`boolean`

#### Example

```ts
isFuture(Date.now() + 1000) // true
isFuture(Date.now() - 1000) // false
```

***

### isToday()

```ts
function isToday(date): boolean;
```

Defined in: [date.ts:238](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L238)

Returns true when date falls on current local day.

#### Parameters

##### date

`Date`

#### Returns

`boolean`

#### Example

```ts
isToday(new Date()) // true
isToday(new Date('2000-01-01T00:00:00Z')) // false
```

***

### toLocalUtcDate()

```ts
function toLocalUtcDate(date): Date;
```

Defined in: [date.ts:220](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L220)

Creates local-time Date from UTC date components.

#### Parameters

##### date

`Date`

#### Returns

`Date`

#### Example

```ts
toLocalUtcDate(new Date('2024-01-01T00:00:00Z')) // Date
toLocalUtcDate(new Date()) // Date
```

## Variables

### timeUnits

```ts
const timeUnits: Record<TimeUnitName, number>;
```

Defined in: [date.ts:41](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L41)

***

### timeUnitsNames

```ts
const timeUnitsNames: TimeUnitName[];
```

Defined in: [date.ts:54](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L54)

***

### timeUnitsNamesShort

```ts
const timeUnitsNamesShort: Record<TimeUnitName, string>;
```

Defined in: [date.ts:56](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L56)

## Interfaces

### DateDiffOptions

Defined in: [date.ts:14](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L14)

#### Properties

##### displayToday?

```ts
optional displayToday: boolean;
```

Defined in: [date.ts:20](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L20)

##### displayYear?

```ts
optional displayYear: boolean;
```

Defined in: [date.ts:21](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L21)

##### limit?

```ts
optional limit: Partial<Record<TimeUnitName, number>>;
```

Defined in: [date.ts:19](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L19)

##### prefix?

```ts
optional prefix: boolean;
```

Defined in: [date.ts:18](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L18)

##### short?

```ts
optional short: boolean;
```

Defined in: [date.ts:17](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L17)

##### units?

```ts
optional units: TimeUnitName[];
```

Defined in: [date.ts:15](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L15)

##### unitsCount?

```ts
optional unitsCount: number;
```

Defined in: [date.ts:16](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L16)

***

### DateToStringOptions

Defined in: [date.ts:8](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L8)

#### Properties

##### displayToday?

```ts
optional displayToday: boolean;
```

Defined in: [date.ts:10](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L10)

##### displayYear?

```ts
optional displayYear: boolean;
```

Defined in: [date.ts:11](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L11)

##### short?

```ts
optional short: boolean;
```

Defined in: [date.ts:9](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L9)

## Type Aliases

### DateInput

```ts
type DateInput = Date | number;
```

Defined in: [date.ts:4](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L4)

***

### TimeStructure

```ts
type TimeStructure = Partial<Record<TimeUnitName, number>>;
```

Defined in: [date.ts:6](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L6)

***

### TimeUnitName

```ts
type TimeUnitName = "year" | "month" | "week" | "day" | "hour" | "minute" | "second";
```

Defined in: [date.ts:5](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/date.ts#L5)
