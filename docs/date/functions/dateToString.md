[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / dateToString

# Function: dateToString()

> **dateToString**(`date`, `options?`): `string`

Defined in: [date.ts:93](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L93)

Formats date using locale with optional compact output.

For close dates it hides year/day pieces unless explicitly requested.

## Parameters

### date

[`DateInput`](../type-aliases/DateInput.md)

### options?

`boolean` | [`DateToStringOptions`](../interfaces/DateToStringOptions.md)

## Returns

`string`

## Example

```ts
dateToString(new Date('2024-01-01T12:30:00Z'), { short: true }) // locale date string
dateToString(new Date('2024-01-01T12:30:00Z'), { displayYear: true }) // locale date string with year
```
