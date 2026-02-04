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

> **convertArrayOfObjectsToCSV**(`data`, `__namedParameters`): `string` | `null`

Defined in: [csv.ts:15](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/csv.ts#L15)

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

> **CsvRow** = `Record`<`string`, [`CsvValue`](#csvvalue)>

Defined in: [csv.ts:4](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/csv.ts#L4)

***

### CsvValue

> **CsvValue** = `string` | `number` | `boolean` | `null` | `undefined`

Defined in: [csv.ts:3](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/csv.ts#L3)
