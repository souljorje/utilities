[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [url](../index.md) / getDomain

# Function: getDomain()

> **getDomain**(`url`): `string`

Defined in: [url.ts:60](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/url.ts#L60)

Extracts top-level domain from URL.

## Parameters

### url

`string`

## Returns

`string`

## Example

```ts
getDomain('https://api.site.com/v1') // 'site.com'
getDomain('https://site.com') // 'site.com'
```
