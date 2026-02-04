[**@souljorje/utils v0.1.0**](../../../index.md)

***

[@souljorje/utils](../../../index.md) / [object/binary-search](../index.md) / binarySearch

# Function: binarySearch()

> **binarySearch**\<`T`\>(`array`, `target`, `compare`): `number`

Defined in: object/binary-search.ts:72

Returns exact-match index for target, or -1 when absent.

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
binarySearch([1, 2, 4], 2) // 1
binarySearch([1, 2, 4], 3) // -1
```
