[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / getDateDiff

# Function: getDateDiff()

> **getDateDiff**(`date`, `opts`): `string`

Defined in: [date.ts:202](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L202)

Returns relative date text with optional absolute-date fallback.

When `opts.limit` is exceeded it returns `dateToString` instead of relative text.

## Parameters

### date

[`DateInput`](../type-aliases/DateInput.md)

### opts

[`DateDiffOptions`](../interfaces/DateDiffOptions.md) = `{}`

## Returns

`string`

## Example

```ts
getDateDiff(Date.now() - 30000, { short: true }) // '30s ago'
getDateDiff(Date.now() + 30000, { short: true }) // '30s left'
```
