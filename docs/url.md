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
function getDomain(url): string;
```

Defined in: [url.ts:60](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L60)

Extracts top-level domain from URL.

#### Parameters

##### url

`string`

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
function isAbsoluteUrl(url): boolean;
```

Defined in: [url.ts:29](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L29)

Returns true for absolute URLs.

#### Parameters

##### url

`string`

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
function isLocalUrl(url, currentBaseUrl): boolean;
```

Defined in: [url.ts:38](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L38)

Checks whether URL is local or relative.

#### Parameters

##### url

`string`

##### currentBaseUrl

`string` = `baseUrl`

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
function isValidUrl(url): boolean;
```

Defined in: [url.ts:14](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L14)

Validates URL string format.

#### Parameters

##### url

`string`

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
   url, 
   whitelist, 
   hostname): boolean;
```

Defined in: [url.ts:78](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L78)

Checks whitelist membership by normalized domain.

#### Parameters

##### url

`string`

##### whitelist

`Iterable`<`string`, `any`, `any`> | `Set`<`string`>

##### hostname

`string` = `...`

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
function toRelativeUrl(url, currentBaseUrl): string;
```

Defined in: [url.ts:49](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L49)

Removes base URL prefix from absolute URL.

#### Parameters

##### url

`string`

##### currentBaseUrl

`string` = `baseUrl`

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

Defined in: [url.ts:3](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/url.ts#L3)
