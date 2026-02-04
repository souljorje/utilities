[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [ipfs](../index.md) / ipfsUriToCid

# Function: ipfsUriToCid()

> **ipfsUriToCid**(`v`): `string`

Defined in: [ipfs.ts:22](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/ipfs.ts#L22)

Extracts CID from an `ipfs://` URI.

## Parameters

### v

`string`

## Returns

`string`

## Example

```ts
ipfsUriToCid('ipfs://QmHash') // 'QmHash'
ipfsUriToCid('ipfs://bafy123') // 'bafy123'
```
