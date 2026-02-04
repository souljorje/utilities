[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [is](../index.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`v`): `v is T`

Defined in: [is.ts:47](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/is.ts#L47)

Returns true when the value is callable.

## Type Parameters

### T

`T` *extends* (...`args`) => `unknown`

## Parameters

### v

`unknown`

## Returns

`v is T`

## Example

```ts
isFunction(() => 1) // true
isFunction('abc') // false
```
