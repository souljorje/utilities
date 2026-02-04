[**@souljorje/utils v0.1.0**](../../../index.md)

***

[@souljorje/utils](../../../index.md) / [object/binary-search](../index.md) / binarySearchBase

# Function: binarySearchBase()

> **binarySearchBase**\<`T`\>(`array`, `predicate`): `number`

Defined in: object/binary-search.ts:18

Core first-true binary search over a sorted array.

It returns the smallest index where `predicate(array[index])` is true,
or `array.length` if the predicate is never true.

## Type Parameters

### T

`T`

## Parameters

### array

readonly `T`[]

### predicate

(`value`) => `boolean`

## Returns

`number`

## Example

```ts
binarySearchBase([1, 3, 5], (v) => v >= 4) // 2
binarySearchBase([1, 3, 5], (v) => v > 10) // 3
```
