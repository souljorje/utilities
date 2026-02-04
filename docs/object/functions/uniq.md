[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / uniq

# Function: uniq()

> **uniq**\<`T`\>(`items`): `T`[]

Defined in: object/index.ts:128

Removes duplicate values using `Set`.

## Type Parameters

### T

`T`

## Parameters

### items

`T`[]

## Returns

`T`[]

## Example

```ts
uniq([1, 1, 2]) // [1, 2]
uniq(['a', 'a', 'b']) // ['a', 'b']
```
