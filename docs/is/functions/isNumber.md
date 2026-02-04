[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [is.ts:27](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L27)

Returns true for finite numbers excluding NaN.

## Parameters

### value

`unknown`

## Returns

`value is number`

## Example

```ts
isNumber(42) // true
isNumber('abc') // false
isNumber(Number.NaN) // false
```
