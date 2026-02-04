[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / isToday

# Function: isToday()

> **isToday**(`date`): `boolean`

Defined in: [date.ts:238](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L238)

Returns true when date falls on current local day.

## Parameters

### date

`Date`

## Returns

`boolean`

## Example

```ts
isToday(new Date()) // true
isToday(new Date('2000-01-01T00:00:00Z')) // false
```
