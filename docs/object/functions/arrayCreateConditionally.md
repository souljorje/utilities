[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / arrayCreateConditionally

# Function: arrayCreateConditionally()

> **arrayCreateConditionally**\<`T`\>(...`map`): `T`[]

Defined in: object/index.ts:85

Builds an array from direct values and conditional tuples.

## Type Parameters

### T

`T`

## Parameters

### map

...(`T` \| \[`boolean`, `...T[]`\])[]

## Returns

`T`[]

## Example

```ts
arrayCreateConditionally([true, 'a'], [false, 'b'], 'c') // ['a', 'c']
arrayCreateConditionally([true, 1, 2], [true, 3]) // [1, 2, 3]
```
