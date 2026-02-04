[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [string](../index.md) / pluralize

# Function: pluralize()

> **pluralize**(`word`, `count`): `string`

Defined in: [string.ts:10](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/string.ts#L10)

Adds plural suffix when count is not singular.

## Parameters

### word

`string`

### count

`number`

## Returns

`string`

## Example

```ts
pluralize('block', 2) // 'blocks'
pluralize('block', 1) // 'block'
```
