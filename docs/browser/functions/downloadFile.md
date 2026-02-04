[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [browser](../index.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`data`, `fileName`): `void`

Defined in: [browser.ts:17](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/browser.ts#L17)

Triggers browser file download from URL/blob URL.

## Parameters

### data

`string`

### fileName

`string` = `'download'`

## Returns

`void`

## Example

```ts
downloadFile('data:text/plain,hello', 'hello.txt') // starts download
```
