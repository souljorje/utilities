[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isNullish

# Function: isNullish()

> **isNullish**(`v`): v is null \| undefined

Defined in: [is.ts:67](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L67)

Returns true when value is null or undefined.

## Parameters

### v

`unknown`

## Returns

v is null \| undefined

## Example

```ts
isNullish(null || undefined) // true
isNullish('') // false
```
