[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [misc](../index.md) / safeJSONParse

# Function: safeJSONParse()

> **safeJSONParse**\<`T`\>(`v`): `""` \| `T`

Defined in: [misc.ts:71](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/misc.ts#L71)

Parses JSON and returns an empty string on failure.

## Type Parameters

### T

`T`

## Parameters

### v

`string`

## Returns

`""` \| `T`

## Example

```ts
safeJSONParse<{ a: number }>('{"a":1}') // { a: 1 }
safeJSONParse('{bad}') // ''
```
