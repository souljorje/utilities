[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / getAllCombinations

# Function: getAllCombinations()

> **getAllCombinations**\<`T`\>(`arraysToCombine`): `T`[][]

Defined in: object/index.ts:231

Generates all possible combinations by taking one element from each input array.
Aka Cartesian product (not complete).

Order of combinations is deterministic and stable.

## Type Parameters

### T

`T`

## Parameters

### arraysToCombine

readonly readonly `T`[][]

## Returns

`T`[][]

## Example

```ts
getAllCombinations([[1, 2], [3, 4]]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
getAllCombinations([]); // [[]]
```
