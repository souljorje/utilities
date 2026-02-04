[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / ensureArray

# Function: ensureArray()

> **ensureArray**\<`T`\>(`value`): `T`[]

Defined in: object/index.ts:38

Normalizes a single value to an array.

## Type Parameters

### T

`T`

## Parameters

### value

`T` | `T`[]

## Returns

`T`[]

## Example

```ts
ensureArray(5) // [5]
ensureArray([1, 2]) // [1, 2]
```
