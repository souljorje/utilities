[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / getTimeDelta

# Function: getTimeDelta()

> **getTimeDelta**(`date`): `number`

Defined in: [date.ts:124](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L124)

Returns absolute milliseconds difference between now and date.

## Parameters

### date

[`DateInput`](../type-aliases/DateInput.md)

## Returns

`number`

## Example

```ts
getTimeDelta(Date.now() - 5000) // 5000
```
