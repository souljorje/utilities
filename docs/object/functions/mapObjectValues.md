[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / mapObjectValues

# Function: mapObjectValues()

> **mapObjectValues**\<`T`, `R`\>(`obj`, `callback`): `Record`\<`string`, `R`\>

Defined in: object/index.ts:170

Maps object values and keeps original keys.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

### R

`R`

## Parameters

### obj

`T`

### callback

(`key`, `value`, `obj`) => `R`

## Returns

`Record`\<`string`, `R`\>

## Example

```ts
mapObjectValues({ a: 1 }, (_k, v) => v + 1) // { a: 2 }
mapObjectValues({ a: 1, b: 2 }, (_k, v) => v * 2) // { a: 2, b: 4 }
```
