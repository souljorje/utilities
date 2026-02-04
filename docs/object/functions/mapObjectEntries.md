[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / mapObjectEntries

# Function: mapObjectEntries()

> **mapObjectEntries**\<`T`, `R`\>(`obj`, `callback`): `Record`\<`string`, `R` \| `T`\[keyof `T`\]\>

Defined in: object/index.ts:184

Maps object entries with optional key remapping.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

### R

`R`

## Parameters

### obj

`T`

### callback

(`key`, `value`, `obj`) => \[`string`, `R`\]

## Returns

`Record`\<`string`, `R` \| `T`\[keyof `T`\]\>

## Example

```ts
mapObjectEntries({ a: 1 }, (k, v) => [k.toUpperCase(), v]) // { A: 1 }
mapObjectEntries({ a: 1 }, () => ['x', 2]) // { x: 2 }
```
