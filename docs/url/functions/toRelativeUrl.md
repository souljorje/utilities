[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [url](../index.md) / toRelativeUrl

# Function: toRelativeUrl()

> **toRelativeUrl**(`url`, `currentBaseUrl`): `string`

Defined in: [url.ts:49](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/url.ts#L49)

Removes base URL prefix from absolute URL.

## Parameters

### url

`string`

### currentBaseUrl

`string` = `baseUrl`

## Returns

`string`

## Example

```ts
toRelativeUrl('https://site.com/path', 'https://site.com') // '/path'
toRelativeUrl('/path', 'https://site.com') // '/path'
```
