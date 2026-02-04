[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [misc](../index.md) / delay

# Function: delay()

> **delay**(`ms`): `Promise`\<`void`\>

Defined in: [misc.ts:22](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/misc.ts#L22)

Resolves after the provided delay.

## Parameters

### ms

`number`

## Returns

`Promise`\<`void`\>

## Example

```ts
await delay(100) // resolves after 100ms
await delay(0) // resolves on next tick
```
