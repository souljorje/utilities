[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `key`): `Record`\<`string`, `T`[]\>

Defined in: object/index.ts:23

Groups array items by selected key.

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### arr

`T`[]

### key

`K`

## Returns

`Record`\<`string`, `T`[]\>

## Example

```ts
groupBy([{ t: 'a' }, { t: 'a' }, { t: 'b' }], 't') // { a: [...], b: [...] }
groupBy([{ n: 1 }, { n: 2 }], 'n') // { 1: [...], 2: [...] }
```
