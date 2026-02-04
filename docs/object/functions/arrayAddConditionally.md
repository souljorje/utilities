[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / arrayAddConditionally

# Function: arrayAddConditionally()

> **arrayAddConditionally**\<`T`, `F`\>(`condition`, `value`, `fallbackValue`): (`T` \| `F`)[]

Defined in: object/index.ts:74

Returns value/fallback as array depending on condition.

## Type Parameters

### T

`T`

### F

`F` = `never`

## Parameters

### condition

`boolean`

### value

`T` | `T`[]

### fallbackValue

`F` | `F`[]

## Returns

(`T` \| `F`)[]

## Example

```ts
arrayAddConditionally(true, 1) // [1]
arrayAddConditionally(false, 1, 2) // [2]
```
