[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [misc](../index.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`func`, `timeout`, `immediate`): (...`args`) => `void`

Defined in: [misc.ts:31](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/misc.ts#L31)

Delays execution until a timeout passes after the most recent call.

## Type Parameters

### T

`T` *extends* (...`args`) => `ReturnType`\<`T`\>

## Parameters

### func

`T`

### timeout

`number` = `300`

### immediate

`boolean` = `false`

## Returns

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const fn = debounce(console.log, 200)
fn('a'); fn('b') // logs only 'b'
```
