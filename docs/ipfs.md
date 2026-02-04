[@souljorje/utils](index.md) / ipfs

# ipfs

## Table of contents

* [Functions](#functions)
  * [cidToIpfsUri()](#cidtoipfsuri)
  * [ipfsUriToCid()](#ipfsuritocid)
  * [ipfsUriToUri()](#ipfsuritouri)
  * [isIpfsUri()](#isipfsuri)

## Functions

### cidToIpfsUri()

> **cidToIpfsUri**(`v`): `string`

Defined in: [ipfs.ts:31](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/ipfs.ts#L31)

Builds `ipfs://` URI from CID.

#### Parameters

##### v

`string`

#### Returns

`string`

#### Example

```ts
cidToIpfsUri('QmHash') // 'ipfs://QmHash'
cidToIpfsUri('bafy123') // 'ipfs://bafy123'
```

***

### ipfsUriToCid()

> **ipfsUriToCid**(`v`): `string`

Defined in: [ipfs.ts:22](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/ipfs.ts#L22)

Extracts CID from an `ipfs://` URI.

#### Parameters

##### v

`string`

#### Returns

`string`

#### Example

```ts
ipfsUriToCid('ipfs://QmHash') // 'QmHash'
ipfsUriToCid('ipfs://bafy123') // 'bafy123'
```

***

### ipfsUriToUri()

> **ipfsUriToUri**(`v`, `gatewayUrl`): `string`

Defined in: [ipfs.ts:39](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/ipfs.ts#L39)

Converts `ipfs://` URI to HTTP gateway URL.

#### Parameters

##### v

`string`

##### gatewayUrl

`string`

#### Returns

`string`

#### Example

```ts
ipfsUriToUri('ipfs://QmHash', 'https://ipfs.io') // 'https://ipfs.io/ipfs/QmHash'
```

***

### isIpfsUri()

> **isIpfsUri**(`v`): `boolean`

Defined in: [ipfs.ts:13](https://github.com/souljorje/utilities/blob/3f91830d17da9fbdba6ce578971e8051de26d2e3/src/ipfs.ts#L13)

Validates IPFS URI format.

#### Parameters

##### v

`string`

#### Returns

`boolean`

#### Example

```ts
isIpfsUri('ipfs://QmHash?foo') // true
isIpfsUri('https://ipfs.io/ipfs/QmHash') // false
```
