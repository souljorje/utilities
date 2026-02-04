[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [url](../index.md) / isWhitelistedUrl

# Function: isWhitelistedUrl()

> **isWhitelistedUrl**(`url`, `whitelist`, `hostname`): `boolean`

Defined in: [url.ts:78](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/url.ts#L78)

Checks whitelist membership by normalized domain.

## Parameters

### url

`string`

### whitelist

`Iterable`\<`string`, `any`, `any`\> | `Set`\<`string`\>

### hostname

`string` = `...`

## Returns

`boolean`

## Example

```ts
isWhitelistedUrl('https://site.com', ['site.com']) // true
isWhitelistedUrl('https://evil.io', ['site.com']) // false
```
