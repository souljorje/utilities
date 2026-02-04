[**@souljorje/utils v0.1.0**](../../../index.md)

***

[@souljorje/utils](../../../index.md) / [object/binary-search](../index.md) / upperBound

# Function: upperBound()

> **upperBound**\<`T`\>(`array`, `target`, `compare`): `number`

Defined in: object/binary-search.ts:57

Returns first index where `array[index] > target`.

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
upperBound([1, 2, 2, 4], 2) // 3
upperBound([1, 2, 2, 4], 5) // 4
```
