[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [string](../index.md) / abbreviateString

# Function: abbreviateString()

> **abbreviateString**(`v`, `startCount`, `endCount`): `string`

Defined in: [string.ts:53](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/string.ts#L53)

Keeps start and end segments with ellipsis in the middle.

## Parameters

### v

`string`

### startCount

`number`

### endCount

`number`

## Returns

`string`

## Example

```ts
abbreviateString('abcdefgh', 2, 2) // 'ab...gh'
abbreviateString('abcdef', 3, 1) // 'abc...f'
```
