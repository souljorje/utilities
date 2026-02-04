[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [csv](../index.md) / convertArrayOfObjectsToCSV

# Function: convertArrayOfObjectsToCSV()

> **convertArrayOfObjectsToCSV**(`data`, `__namedParameters`): `string` \| `null`

Defined in: [csv.ts:15](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/csv.ts#L15)

Converts object rows into CSV text.

It uses keys from the first row as header columns and keeps the same
column order for all rows.

## Parameters

### data

[`CsvRow`](../type-aliases/CsvRow.md)[] | `null` | `undefined`

### \_\_namedParameters

#### columnDelimiter?

`string` = `','`

#### lineDelimiter?

`string` = '\n'

## Returns

`string` \| `null`

## Example

```ts
convertArrayOfObjectsToCSV([{ a: 1, b: 2 }], { columnDelimiter: ';' }) // 'a;b\n1;2\n'
```
