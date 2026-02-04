[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / uniqBy

# Function: uniqBy()

> **uniqBy**\<`T`, `K`\>(`arr`, `selector`): `T`[]

Defined in: object/index.ts:137

Removes duplicate items by selector key.

## Type Parameters

### T

`T`

### K

`K`

## Parameters

### arr

`T`[]

### selector

(`item`) => `K`

## Returns

`T`[]

## Example

```ts
uniqBy([{ id: 1 }, { id: 1 }], (x) => x.id) // [{ id: 1 }]
uniqBy([{ n: 'a' }, { n: 'b' }], (x) => x.n) // [{ n: 'a' }, { n: 'b' }]
```
