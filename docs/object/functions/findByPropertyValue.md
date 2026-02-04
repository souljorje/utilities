[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / findByPropertyValue

# Function: findByPropertyValue()

> **findByPropertyValue**\<`T`, `K`\>(`obj`, `key`, `value`): `T` \| `undefined`

Defined in: object/index.ts:63

Finds first item by matching property value.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`Record`\<`string`, `T`\>

### key

`K`

### value

`T`\[`K`\]

## Returns

`T` \| `undefined`

## Example

```ts
findByPropertyValue({ x: { id: 1 } }, 'id', 1) // { id: 1 }
findByPropertyValue({ x: { id: 1 } }, 'id', 2) // undefined
```
