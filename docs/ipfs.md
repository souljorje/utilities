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

```ts
function cidToIpfsUri(v): string;
```

Defined in: [ipfs.ts:31](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/ipfs.ts#L31)

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

```ts
function ipfsUriToCid(v): string;
```

Defined in: [ipfs.ts:22](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/ipfs.ts#L22)

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

```ts
function ipfsUriToUri(v, gatewayUrl): string;
```

Defined in: [ipfs.ts:39](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/ipfs.ts#L39)

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

```ts
function isIpfsUri(v): boolean;
```

Defined in: [ipfs.ts:13](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/ipfs.ts#L13)

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
