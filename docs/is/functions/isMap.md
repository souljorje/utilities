[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isMap

# Function: isMap()

> **isMap**(`v`): `v is Map<unknown, unknown>`

Defined in: [is.ts:98](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L98)

Returns true when value is a Map.

## Parameters

### v

`unknown`

## Returns

`v is Map<unknown, unknown>`

## Example

```ts
isMap(new Map()) // true
isMap({}) // false
```
