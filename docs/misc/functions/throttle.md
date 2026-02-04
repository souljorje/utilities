[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [misc](../index.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `timeout`): (...`args`) => `void`

Defined in: [misc.ts:52](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/misc.ts#L52)

Limits execution to at most once per timeout window.

## Type Parameters

### T

`T` *extends* (...`args`) => `ReturnType`\<`T`\>

## Parameters

### func

`T`

### timeout

`number` = `300`

## Returns

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const fn = throttle(console.log, 200)
fn('a'); fn('b') // second call is ignored in same window
```
