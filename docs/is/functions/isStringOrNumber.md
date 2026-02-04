[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isStringOrNumber

# Function: isStringOrNumber()

> **isStringOrNumber**(`value`): value is string \| number

Defined in: [is.ts:36](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L36)

Returns true for string or finite number values.

## Parameters

### value

`unknown`

## Returns

value is string \| number

## Example

```ts
isStringOrNumber('abc') // true
isStringOrNumber({ value: 42 }) // false
```
