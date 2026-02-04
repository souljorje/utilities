[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isSet

# Function: isSet()

> **isSet**(`v`): `v is Set<unknown>`

Defined in: [is.ts:89](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L89)

Returns true when value is a Set.

## Parameters

### v

`unknown`

## Returns

`v is Set<unknown>`

## Example

```ts
isSet(new Set([1])) // true
isSet([1]) // false
```
