[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / toSet

# Function: toSet()

> **toSet**\<`T`\>(`values`): `Set`\<`T`\>

Defined in: object/index.ts:217

Converts iterable values to a Set instance.

## Type Parameters

### T

`T`

## Parameters

### values

`Iterable`\<`T`, `any`, `any`\> | `Set`\<`T`\>

## Returns

`Set`\<`T`\>

## Example

```ts
toSet([1, 1, 2]) // Set(2) { 1, 2 }
toSet(new Set([1, 2])) // Set(2) { 1, 2 }
```
