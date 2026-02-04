[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [url](../index.md) / isLocalUrl

# Function: isLocalUrl()

> **isLocalUrl**(`url`, `currentBaseUrl`): `boolean`

Defined in: [url.ts:38](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/url.ts#L38)

Checks whether URL is local or relative.

## Parameters

### url

`string`

### currentBaseUrl

`string` = `baseUrl`

## Returns

`boolean`

## Example

```ts
isLocalUrl('/blocks') // true
isLocalUrl('https://example.com') // false
```
