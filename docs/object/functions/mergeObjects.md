[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / mergeObjects

# Function: mergeObjects()

> **mergeObjects**\<`T`\>(`source`, `updates`): `T`

Defined in: object/index.ts:154

Deep-merges plain objects without mutating inputs.
Arrays are not concatenated and are treated as scalar values.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### source

`T`

### updates

`Partial`\<`T`\>

## Returns

`T`

## Example

```ts
mergeObjects({ a: 1, b: { c: 1 } }, { b: { d: 2 } }) // { a: 1, b: { c: 1, d: 2 } }
mergeObjects({ a: 1 }, {}) // { a: 1 }
```
