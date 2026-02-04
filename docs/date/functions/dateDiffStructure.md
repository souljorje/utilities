[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / dateDiffStructure

# Function: dateDiffStructure()

> **dateDiffStructure**(`date`, `units?`): [`TimeStructure`](../type-aliases/TimeStructure.md)

Defined in: [date.ts:133](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L133)

Splits date delta into unit buckets.

## Parameters

### date

[`DateInput`](../type-aliases/DateInput.md)

### units?

[`TimeUnitName`](../type-aliases/TimeUnitName.md)[]

## Returns

[`TimeStructure`](../type-aliases/TimeStructure.md)

## Example

```ts
dateDiffStructure(Date.now() - 61000, ['minute', 'second']) // { minute: 1, second: 1 }
dateDiffStructure(Date.now() - 3600000, ['hour']) // { hour: 1 }
```
