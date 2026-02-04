[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / getWeightedRandomItem

# Function: getWeightedRandomItem()

> **getWeightedRandomItem**\<`T`\>(`items`): `T`

Defined in: object/index.ts:200

Returns weighted random item based on the `weight` field.
Higher weight values increase selection probability proportionally.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### items

`T`[]

## Returns

`T`

## Example

```ts
getWeightedRandomItem([{ id: 1, weight: 1 }, { id: 2, weight: 3 }]) // { id: 1, weight: 1 } | { id: 2, weight: 3 }
getWeightedRandomItem([{ id: 1, weight: 1 }]) // { id: 1, weight: 1 }
```
