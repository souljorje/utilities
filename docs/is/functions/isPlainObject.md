[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`v`): `v is Record<string, unknown>`

Defined in: [is.ts:76](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L76)

Returns true only for plain object literals.

## Parameters

### v

`unknown`

## Returns

`v is Record<string, unknown>`

## Example

```ts
isPlainObject({ a: 1 }) // true
isPlainObject([]) // false
```
