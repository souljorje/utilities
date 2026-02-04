[**@souljorje/utils v0.1.0**](../../../index.md)

***

[@souljorje/utils](../../../index.md) / [object/binary-search](../index.md) / lowerBound

# Function: lowerBound()

> **lowerBound**\<`T`\>(`array`, `target`, `compare`): `number`

Defined in: object/binary-search.ts:42

Returns first index where `array[index] >= target`.

## Type Parameters

### T

`T`

## Parameters

### array

readonly `T`[]

### target

`T`

### compare

[`Comparator`](../type-aliases/Comparator.md)\<`T`\> = `...`

## Returns

`number`

## Example

```ts
lowerBound([1, 2, 2, 4], 2) // 1
lowerBound([1, 2, 2, 4], 3) // 3
```
