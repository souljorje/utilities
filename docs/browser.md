[@souljorje/utils](index.md) / browser

# browser

## Table of contents

* [Functions](#functions)
  * [confirmExternalLinks()](#confirmexternallinks)
  * [copyToClipboard()](#copytoclipboard)
  * [downloadCSV()](#downloadcsv)
  * [downloadFile()](#downloadfile)
  * [downloadJSON()](#downloadjson)
  * [getCSSVariable()](#getcssvariable)
  * [getScrollParent()](#getscrollparent)
  * [hasScroll()](#hasscroll)
  * [isInViewport()](#isinviewport)
  * [isOutsideParentView()](#isoutsideparentview)
  * [updateQuery()](#updatequery)

## Functions

### confirmExternalLinks()

```ts
function confirmExternalLinks(confirmationFn): void;
```

Defined in: [browser.ts:71](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L71)

Guards external links with a confirmation callback.
Ignores local links and whitelisted domains.

#### Parameters

##### confirmationFn

(`link`) => `boolean` | `Promise`<`boolean`>

#### Returns

`void`

***

### copyToClipboard()

```ts
function copyToClipboard(text): Promise<void>;
```

Defined in: [browser.ts:9](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L9)

Copies text to the clipboard

#### Parameters

##### text

`string`

#### Returns

`Promise`<`void`>

***

### downloadCSV()

```ts
function downloadCSV(data, filename): void;
```

Defined in: [browser.ts:47](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L47)

Downloads rows as CSV file.

#### Parameters

##### data

[`CsvRow`](csv.md#csvrow)\[]

##### filename

`string` = `'export'`

#### Returns

`void`

#### Example

```ts
downloadCSV([{ a: 1 }]) // starts download
```

***

### downloadFile()

```ts
function downloadFile(data, fileName): void;
```

Defined in: [browser.ts:17](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L17)

Triggers browser file download from URL/blob URL.

#### Parameters

##### data

`string`

##### fileName

`string` = `'download'`

#### Returns

`void`

#### Example

```ts
downloadFile('data:text/plain,hello', 'hello.txt') // starts download
```

***

### downloadJSON()

```ts
function downloadJSON(data, fileName): void;
```

Defined in: [browser.ts:32](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L32)

Downloads object/string payload as JSON file.

#### Parameters

##### data

`unknown`

##### fileName

`string` = `'download.json'`

#### Returns

`void`

#### Example

```ts
downloadJSON({ a: 1 }, 'data.json') // starts download
```

***

### getCSSVariable()

```ts
function getCSSVariable(name): string;
```

Defined in: [browser.ts:150](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L150)

Reads a CSS variable value from the document root.

#### Parameters

##### name

`string`

#### Returns

`string`

#### Example

```ts
getCSSVariable('--color-primary') // '#013370'
```

***

### getScrollParent()

```ts
function getScrollParent(node): Node | null;
```

Defined in: [browser.ts:104](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L104)

Finds nearest scrollable parent node recursively

#### Parameters

##### node

`Node` | `null`

#### Returns

`Node` | `null`

***

### hasScroll()

```ts
function hasScroll(node): boolean;
```

Defined in: [browser.ts:96](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L96)

Returns true when element node has vertical or horizontal scroll overflow.

#### Parameters

##### node

`Node`

#### Returns

`boolean`

***

### isInViewport()

```ts
function isInViewport(el): boolean;
```

Defined in: [browser.ts:115](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L115)

Checks whether element is fully visible in viewport

#### Parameters

##### el

`HTMLElement`

#### Returns

`boolean`

***

### isOutsideParentView()

```ts
function isOutsideParentView(child, parent): boolean;
```

Defined in: [browser.ts:131](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L131)

Checks whether child element is outside its parent bounds

#### Parameters

##### child

`HTMLElement`

##### parent

`HTMLElement` | `null`

#### Returns

`boolean`

***

### updateQuery()

```ts
function updateQuery(query, value): void;
```

Defined in: [browser.ts:61](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/browser.ts#L61)

Updates query parameter without page reload.

#### Parameters

##### query

`string`

##### value

`string`

#### Returns

`void`

#### Example

```ts
updateQuery('foo', 'bar') // URL gets ?foo=bar
```
