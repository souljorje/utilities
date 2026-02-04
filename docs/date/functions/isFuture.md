[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / isFuture

# Function: isFuture()

> **isFuture**(`date`): `boolean`

Defined in: [date.ts:82](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L82)

Returns true when target date is in the future.

## Parameters

### date

[`DateInput`](../type-aliases/DateInput.md)

## Returns

`boolean`

## Example

```ts
isFuture(Date.now() + 1000) // true
isFuture(Date.now() - 1000) // false
```
