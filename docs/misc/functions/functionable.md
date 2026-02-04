[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [misc](../index.md) / functionable

# Function: functionable()

> **functionable**\<`T`, `A`\>(`value`, ...`args`): `T`

Defined in: [misc.ts:11](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/misc.ts#L11)

Resolves value directly, or calls it if it is a function
with rest parameters as arguments

## Type Parameters

### T

`T`

### A

`A` *extends* `unknown`[]

## Parameters

### value

`T` | (...`args`) => `T`

### args

...`A`

## Returns

`T`

## Example

```ts
functionable((x: number, y: number) => x + y, 1, 2) // 3
functionable(5) // 5
```
