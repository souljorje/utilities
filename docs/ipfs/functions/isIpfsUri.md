[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [ipfs](../index.md) / isIpfsUri

# Function: isIpfsUri()

> **isIpfsUri**(`v`): `boolean`

Defined in: [ipfs.ts:13](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/ipfs.ts#L13)

Validates IPFS URI format.

## Parameters

### v

`string`

## Returns

`boolean`

## Example

```ts
isIpfsUri('ipfs://QmHash?foo') // true
isIpfsUri('https://ipfs.io/ipfs/QmHash') // false
```
