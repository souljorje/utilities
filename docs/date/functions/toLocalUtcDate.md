[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / toLocalUtcDate

# Function: toLocalUtcDate()

> **toLocalUtcDate**(`date`): `Date`

Defined in: [date.ts:220](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L220)

Creates local-time Date from UTC date components.

## Parameters

### date

`Date`

## Returns

`Date`

## Example

```ts
toLocalUtcDate(new Date('2024-01-01T00:00:00Z')) // Date
toLocalUtcDate(new Date()) // Date
```
