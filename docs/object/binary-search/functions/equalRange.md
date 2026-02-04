[**@souljorje/utils v0.1.0**](../../../index.md)

***

[@souljorje/utils](../../../index.md) / [object/binary-search](../index.md) / equalRange

# Function: equalRange()

> **equalRange**\<`T`\>(`array`, `target`, `compare`): \[`number`, `number`\]

Defined in: object/binary-search.ts:93

Returns `[firstIndex, pastLastIndex]` range for all equal elements.

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

\[`number`, `number`\]

## Example

```ts
equalRange([1, 2, 2, 2, 4], 2) // [1, 4]
equalRange([1, 2, 2, 2, 4], 3) // [4, 4]
```
