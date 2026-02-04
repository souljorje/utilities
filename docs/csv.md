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
function convertArrayOfObjectsToCSV(data: CsvRow[] | null | undefined, __namedParameters: object): string | null;
```

Defined in: [csv.ts:15](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/csv.ts#L15)

Converts object rows into CSV text.

It uses keys from the first row as header columns and keeps the same
column order for all rows.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`CsvRow`](#csvrow)\[] | `null` | `undefined` |
| `__namedParameters` | { `columnDelimiter?`: `string`; `lineDelimiter?`: `string`; } |
| `__namedParameters.columnDelimiter?` | `string` |
| `__namedParameters.lineDelimiter?` | `string` |

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

Defined in: [csv.ts:4](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/csv.ts#L4)

***

### CsvValue

```ts
type CsvValue = string | number | boolean | null | undefined;
```

Defined in: [csv.ts:3](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/csv.ts#L3)
