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
function confirmExternalLinks(confirmationFn: (link: string) => boolean | Promise<boolean>): void;
```

Defined in: [browser.ts:71](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L71)

Guards external links with a confirmation callback.
Ignores local links and whitelisted domains.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `confirmationFn` | (`link`: `string`) => `boolean` | `Promise`<`boolean`> |

#### Returns

`void`

***

### copyToClipboard()

```ts
function copyToClipboard(text: string): Promise<void>;
```

Defined in: [browser.ts:9](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L9)

Copies text to the clipboard

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`Promise`<`void`>

***

### downloadCSV()

```ts
function downloadCSV(data: CsvRow[], filename: string): void;
```

Defined in: [browser.ts:47](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L47)

Downloads rows as CSV file.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `data` | [`CsvRow`](csv.md#csvrow)\[] | `undefined` |
| `filename` | `string` | `'export'` |

#### Returns

`void`

#### Example

```ts
downloadCSV([{ a: 1 }]) // starts download
```

***

### downloadFile()

```ts
function downloadFile(data: string, fileName: string): void;
```

Defined in: [browser.ts:17](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L17)

Triggers browser file download from URL/blob URL.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `data` | `string` | `undefined` |
| `fileName` | `string` | `'download'` |

#### Returns

`void`

#### Example

```ts
downloadFile('data:text/plain,hello', 'hello.txt') // starts download
```

***

### downloadJSON()

```ts
function downloadJSON(data: unknown, fileName: string): void;
```

Defined in: [browser.ts:32](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L32)

Downloads object/string payload as JSON file.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `data` | `unknown` | `undefined` |
| `fileName` | `string` | `'download.json'` |

#### Returns

`void`

#### Example

```ts
downloadJSON({ a: 1 }, 'data.json') // starts download
```

***

### getCSSVariable()

```ts
function getCSSVariable(name: string): string;
```

Defined in: [browser.ts:150](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L150)

Reads a CSS variable value from the document root.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`string`

#### Example

```ts
getCSSVariable('--color-primary') // '#013370'
```

***

### getScrollParent()

```ts
function getScrollParent(node: Node | null): Node | null;
```

Defined in: [browser.ts:104](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L104)

Finds nearest scrollable parent node recursively

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `Node` | `null` |

#### Returns

`Node` | `null`

***

### hasScroll()

```ts
function hasScroll(node: Node): boolean;
```

Defined in: [browser.ts:96](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L96)

Returns true when element node has vertical or horizontal scroll overflow.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `Node` |

#### Returns

`boolean`

***

### isInViewport()

```ts
function isInViewport(el: HTMLElement): boolean;
```

Defined in: [browser.ts:115](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L115)

Checks whether element is fully visible in viewport

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `el` | `HTMLElement` |

#### Returns

`boolean`

***

### isOutsideParentView()

```ts
function isOutsideParentView(child: HTMLElement, parent: HTMLElement | null): boolean;
```

Defined in: [browser.ts:131](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L131)

Checks whether child element is outside its parent bounds

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `child` | `HTMLElement` | `undefined` |
| `parent` | `HTMLElement` | `null` | `child.parentElement` |

#### Returns

`boolean`

***

### updateQuery()

```ts
function updateQuery(query: string, value: string): void;
```

Defined in: [browser.ts:61](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/browser.ts#L61)

Updates query parameter without page reload.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Example

```ts
updateQuery('foo', 'bar') // URL gets ?foo=bar
```
