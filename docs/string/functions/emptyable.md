[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [string](../index.md) / emptyable

# Function: emptyable()

> **emptyable**\<`T`\>(`value`, `emptyValue`): `unknown`

Defined in: [string.ts:100](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/string.ts#L100)

Returns fallback text when value is falsy.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

### emptyValue

`unknown` = `blankValue`

## Returns

`unknown`

## Example

```ts
emptyable('', 'n/a') // 'n/a'
emptyable('ok', 'n/a') // 'ok'
```
