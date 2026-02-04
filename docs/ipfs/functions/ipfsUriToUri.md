[**@souljorje/utils v0.1.0**](../../index.md)

***

[@souljorje/utils](../../index.md) / [ipfs](../index.md) / ipfsUriToUri

# Function: ipfsUriToUri()

> **ipfsUriToUri**(`v`, `gatewayUrl`): `string`

Defined in: [ipfs.ts:39](https://github.com/souljorje/utilities/blob/f205ae757725396cf33b09b4b37b23211a3f389e/src/ipfs.ts#L39)

Converts `ipfs://` URI to HTTP gateway URL.

## Parameters

### v

`string`

### gatewayUrl

`string`

## Returns

`string`

## Example

```ts
ipfsUriToUri('ipfs://QmHash', 'https://ipfs.io') // 'https://ipfs.io/ipfs/QmHash'
```
