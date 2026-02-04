[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [ipfs](../index.md) / cidToIpfsUri

# Function: cidToIpfsUri()

> **cidToIpfsUri**(`v`): `string`

Defined in: [ipfs.ts:31](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/ipfs.ts#L31)

Builds `ipfs://` URI from CID.

## Parameters

### v

`string`

## Returns

`string`

## Example

```ts
cidToIpfsUri('QmHash') // 'ipfs://QmHash'
cidToIpfsUri('bafy123') // 'ipfs://bafy123'
```
