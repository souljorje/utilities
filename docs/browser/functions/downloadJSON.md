[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [browser](../index.md) / downloadJSON

# Function: downloadJSON()

> **downloadJSON**(`data`, `fileName`): `void`

Defined in: [browser.ts:32](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/browser.ts#L32)

Downloads object/string payload as JSON file.

## Parameters

### data

`unknown`

### fileName

`string` = `'download.json'`

## Returns

`void`

## Example

```ts
downloadJSON({ a: 1 }, 'data.json') // starts download
```
