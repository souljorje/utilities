[@souljorje/utils](index.md) / csv

# csv

## Table of contents

* [Functions](#functions)
  * [convertArrayOfObjectsToCSV()](#convertarrayofobjectstocsv)
* [Type Aliases](#type-aliases)
  * [CsvRow](#csvrow)
  * [CsvValue](#csvvalue)

## Functions

### convertArrayOfObjectsToCSV()

```ts
function convertArrayOfObjectsToCSV(data, __namedParameters): string | null;
```

Defined in: [csv.ts:15](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/csv.ts#L15)

Converts object rows into CSV text.

It uses keys from the first row as header columns and keeps the same
column order for all rows.

#### Parameters

##### data

[`CsvRow`](#csvrow)\[] | `null` | `undefined`

##### \_\_namedParameters

###### columnDelimiter?

`string` = `','`

###### lineDelimiter?

`string` = '\n'

#### Returns

`string` | `null`

#### Example

```ts
convertArrayOfObjectsToCSV([{ a: 1, b: 2 }], { columnDelimiter: ';' }) // 'a;b\n1;2\n'
```

## Type Aliases

### CsvRow

```ts
type CsvRow = Record<string, CsvValue>;
```

Defined in: [csv.ts:4](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/csv.ts#L4)

***

### CsvValue

```ts
type CsvValue = string | number | boolean | null | undefined;
```

Defined in: [csv.ts:3](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/csv.ts#L3)
