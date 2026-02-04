[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [object](../index.md) / isEmptyObject

# Function: isEmptyObject()

> **isEmptyObject**(`obj`): `boolean`

Defined in: object/index.ts:12

Returns true when object has no enumerable keys.

## Parameters

### obj

`Record`\<`string`, `unknown`\>

## Returns

`boolean`

## Example

```ts
isEmptyObject({}) // true
isEmptyObject({ a: 1 }) // false
```
