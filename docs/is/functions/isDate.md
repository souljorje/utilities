[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isDate

# Function: isDate()

> **isDate**(`v`): `v is Date`

Defined in: [is.ts:17](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L17)

Returns true when the value is a Date instance.

## Parameters

### v

`unknown`

## Returns

`v is Date`

## Example

```ts
isDate(new Date()) // true
isDate('abc') // false
```
