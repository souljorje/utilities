[@souljorje/utils](index.md) / url

# url

## Table of contents

* [Functions](#functions)
  * [getDomain()](#getdomain)
  * [isAbsoluteUrl()](#isabsoluteurl)
  * [isLocalUrl()](#islocalurl)
  * [isValidUrl()](#isvalidurl)
  * [isWhitelistedUrl()](#iswhitelistedurl)
  * [toRelativeUrl()](#torelativeurl)
* [Variables](#variables)
  * [baseUrl](#baseurl)

## Functions

### getDomain()

```ts
function getDomain(url: string): string;
```

Defined in: [url.ts:60](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L60)

Extracts top-level domain from URL.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

`string`

#### Example

```ts
getDomain('https://api.site.com/v1') // 'site.com'
getDomain('https://site.com') // 'site.com'
```

***

### isAbsoluteUrl()

```ts
function isAbsoluteUrl(url: string): boolean;
```

Defined in: [url.ts:29](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L29)

Returns true for absolute URLs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

`boolean`

#### Example

```ts
isAbsoluteUrl('https://site.com') // true
isAbsoluteUrl('/account') // false
```

***

### isLocalUrl()

```ts
function isLocalUrl(url: string, currentBaseUrl: string): boolean;
```

Defined in: [url.ts:38](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L38)

Checks whether URL is local or relative.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `url` | `string` | `undefined` |
| `currentBaseUrl` | `string` | `baseUrl` |

#### Returns

`boolean`

#### Example

```ts
isLocalUrl('/blocks') // true
isLocalUrl('https://example.com') // false
```

***

### isValidUrl()

```ts
function isValidUrl(url: string): boolean;
```

Defined in: [url.ts:14](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L14)

Validates URL string format.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

`boolean`

#### Example

```ts
isValidUrl('https://site.com') // true
isValidUrl('/accounts') // false
```

***

### isWhitelistedUrl()

```ts
function isWhitelistedUrl(
   url: string, 
   whitelist: Iterable<string, any, any> | Set<string>, 
   hostname: string): boolean;
```

Defined in: [url.ts:78](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L78)

Checks whitelist membership by normalized domain.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `url` | `string` | `undefined` |
| `whitelist` | `Iterable`<`string`, `any`, `any`> | `Set`<`string`> | `[]` |
| `hostname` | `string` | `...` |

#### Returns

`boolean`

#### Example

```ts
isWhitelistedUrl('https://site.com', ['site.com']) // true
isWhitelistedUrl('https://evil.io', ['site.com']) // false
```

***

### toRelativeUrl()

```ts
function toRelativeUrl(url: string, currentBaseUrl: string): string;
```

Defined in: [url.ts:49](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L49)

Removes base URL prefix from absolute URL.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `url` | `string` | `undefined` |
| `currentBaseUrl` | `string` | `baseUrl` |

#### Returns

`string`

#### Example

```ts
toRelativeUrl('https://site.com/path', 'https://site.com') // '/path'
toRelativeUrl('/path', 'https://site.com') // '/path'
```

## Variables

### baseUrl

```ts
const baseUrl: string;
```

Defined in: [url.ts:3](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/url.ts#L3)
