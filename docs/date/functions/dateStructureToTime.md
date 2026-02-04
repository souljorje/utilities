[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [date](../index.md) / dateStructureToTime

# Function: dateStructureToTime()

> **dateStructureToTime**(`structure`): `number`

Defined in: [date.ts:188](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/date.ts#L188)

Converts unit structure into milliseconds.

## Parameters

### structure

[`TimeStructure`](../type-aliases/TimeStructure.md)

## Returns

`number`

## Example

```ts
dateStructureToTime({ day: 1, hour: 2 }) // 93600000
dateStructureToTime({ minute: 1 }) // 60000
```
