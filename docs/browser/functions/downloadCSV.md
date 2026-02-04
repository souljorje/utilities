[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [browser](../index.md) / downloadCSV

# Function: downloadCSV()

> **downloadCSV**(`data`, `filename`): `void`

Defined in: [browser.ts:47](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/browser.ts#L47)

Downloads rows as CSV file.

## Parameters

### data

[`CsvRow`](../../csv/type-aliases/CsvRow.md)[]

### filename

`string` = `'export'`

## Returns

`void`

## Example

```ts
downloadCSV([{ a: 1 }]) // starts download
```
