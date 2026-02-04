[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [string](../index.md) / trimToLowercase

# Function: trimToLowercase()

> **trimToLowercase**(`s?`): `string` \| `undefined`

Defined in: [string.ts:62](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/string.ts#L62)

Trims and lowercases a string safely.

## Parameters

### s?

`string` | `null`

## Returns

`string` \| `undefined`

## Example

```ts
trimToLowercase('  HeLLo ') // 'hello'
trimToLowercase(undefined) // undefined
```
