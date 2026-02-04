[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isDefined

# Function: isDefined()

> **isDefined**\<`T`\>(`v`): `v is T`

Defined in: [is.ts:58](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L58)

Returns true when the value is not undefined.

## Type Parameters

### T

`T`

## Parameters

### v

`T` | `undefined`

## Returns

`v is T`

## Example

```ts
isDefined(null) && isDefined(false) && isDefined('') // true
isDefined(undefined) // false
```
