[@souljorje/utils](index.md) / string

# string

## Table of contents

* [Functions](#functions)
  * [abbreviateString()](#abbreviatestring)
  * [capitalize()](#capitalize)
  * [decodeHEX()](#decodehex)
  * [emptyable()](#emptyable)
  * [generateId()](#generateid)
  * [humanize()](#humanize)
  * [pluralize()](#pluralize)
  * [snakeCaseToCamelCase()](#snakecasetocamelcase)
  * [titleize()](#titleize)
  * [trimToLowercase()](#trimtolowercase)
* [Variables](#variables)
  * [blankValue](#blankvalue)

## Functions

### abbreviateString()

```ts
function abbreviateString(
   v: string, 
   startCount: number, 
   endCount: number): string;
```

Defined in: [string.ts:53](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L53)

Keeps start and end segments with ellipsis in the middle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |
| `startCount` | `number` |
| `endCount` | `number` |

#### Returns

`string`

#### Example

```ts
abbreviateString('abcdefgh', 2, 2) // 'ab...gh'
abbreviateString('abcdef', 3, 1) // 'abc...f'
```

***

### capitalize()

```ts
function capitalize(s: string): string;
```

Defined in: [string.ts:28](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L28)

Uppercases the first character.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

#### Returns

`string`

#### Example

```ts
capitalize('foo') // 'Foo'
capitalize('') // ''
```

***

### decodeHEX()

```ts
function decodeHEX(s: string): string;
```

Defined in: [string.ts:71](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L71)

Decodes a hex string into UTF-8 text.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

#### Returns

`string`

#### Example

```ts
decodeHEX('68656c6c6f') // 'hello'
decodeHEX('74657a6f73') // 'foo'
```

***

### emptyable()

```ts
function emptyable<T>(value: T, emptyValue: unknown): unknown;
```

Defined in: [string.ts:100](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L100)

Returns fallback text when value is falsy.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `T` | `undefined` |
| `emptyValue` | `unknown` | `blankValue` |

#### Returns

`unknown`

#### Example

```ts
emptyable('', 'n/a') // 'n/a'
emptyable('ok', 'n/a') // 'ok'
```

***

### generateId()

```ts
function generateId(): string;
```

Defined in: [string.ts:44](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L44)

Creates a random UUID.

#### Returns

`string`

#### Example

```ts
generateId() // '550e8400-e29b-41d4-a716-446655440000'
```

***

### humanize()

```ts
function humanize(s: string): string;
```

Defined in: [string.ts:19](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L19)

Replaces underscores with spaces.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

#### Returns

`string`

#### Example

```ts
humanize('hello_world') // 'hello world'
humanize('hello') // 'hello'
```

***

### pluralize()

```ts
function pluralize(word: string, count: number): string;
```

Defined in: [string.ts:10](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L10)

Adds plural suffix when count is not singular.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `word` | `string` |
| `count` | `number` |

#### Returns

`string`

#### Example

```ts
pluralize('block', 2) // 'blocks'
pluralize('block', 1) // 'block'
```

***

### snakeCaseToCamelCase()

```ts
function snakeCaseToCamelCase(s: string): string;
```

Defined in: [string.ts:86](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L86)

Converts snake\_case text to camelCase.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

#### Returns

`string`

#### Example

```ts
snakeCaseToCamelCase('my_token_id') // 'myTokenId'
snakeCaseToCamelCase('alreadyCamel') // 'alreadyCamel'
```

***

### titleize()

```ts
function titleize(s: string): string;
```

Defined in: [string.ts:36](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L36)

Humanizes and capitalizes a string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

#### Returns

`string`

#### Example

```ts
titleize('hello_world') // 'Hello world'
```

***

### trimToLowercase()

```ts
function trimToLowercase(s?: string | null): string | undefined;
```

Defined in: [string.ts:62](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L62)

Trims and lowercases a string safely.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `s?` | `string` | `null` |

#### Returns

`string` | `undefined`

#### Example

```ts
trimToLowercase('  HeLLo ') // 'hello'
trimToLowercase(undefined) // undefined
```

## Variables

### blankValue

```ts
const blankValue: "—" = '—';
```

Defined in: [string.ts:1](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/string.ts#L1)
