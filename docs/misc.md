[@souljorje/utils](index.md) / misc

# misc

## Table of contents

* [Functions](#functions)
  * [debounce()](#debounce)
  * [delay()](#delay)
  * [functionable()](#functionable)
  * [safeJSONParse()](#safejsonparse)
  * [throttle()](#throttle)

## Functions

### debounce()

```ts
function debounce<T>(
   func: T, 
   timeout: number, 
   immediate: boolean): (...args: Parameters<T>) => void;
```

Defined in: [misc.ts:31](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/misc.ts#L31)

Delays execution until a timeout passes after the most recent call.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `Parameters`<`T`>) => `ReturnType`<`T`> |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `func` | `T` | `undefined` |
| `timeout` | `number` | `300` |
| `immediate` | `boolean` | `false` |

#### Returns

```ts
(...args: Parameters<T>): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`<`T`> |

##### Returns

`void`

#### Example

```ts
const fn = debounce(console.log, 200)
fn('a'); fn('b') // logs only 'b'
```

***

### delay()

```ts
function delay(ms: number): Promise<void>;
```

Defined in: [misc.ts:22](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/misc.ts#L22)

Resolves after the provided delay.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`>

#### Example

```ts
await delay(100) // resolves after 100ms
await delay(0) // resolves on next tick
```

***

### functionable()

```ts
function functionable<T, A>(value: T | (...args: A) => T, ...args: A): T;
```

Defined in: [misc.ts:11](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/misc.ts#L11)

Resolves value directly, or calls it if it is a function
with rest parameters as arguments

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `A` *extends* `unknown`\[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` | (...`args`: `A`) => `T` |
| ...`args` | `A` |

#### Returns

`T`

#### Example

```ts
functionable((x: number, y: number) => x + y, 1, 2) // 3
functionable(5) // 5
```

***

### safeJSONParse()

```ts
function safeJSONParse<T>(v: string): "" | T;
```

Defined in: [misc.ts:71](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/misc.ts#L71)

Parses JSON and returns an empty string on failure.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

#### Returns

`""` | `T`

#### Example

```ts
safeJSONParse<{ a: number }>('{"a":1}') // { a: 1 }
safeJSONParse('{bad}') // ''
```

***

### throttle()

```ts
function throttle<T>(func: T, timeout: number): (...args: Parameters<T>) => void;
```

Defined in: [misc.ts:52](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/misc.ts#L52)

Limits execution to at most once per timeout window.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `Parameters`<`T`>) => `ReturnType`<`T`> |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `func` | `T` | `undefined` |
| `timeout` | `number` | `300` |

#### Returns

```ts
(...args: Parameters<T>): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Parameters`<`T`> |

##### Returns

`void`

#### Example

```ts
const fn = throttle(console.log, 200)
fn('a'); fn('b') // second call is ignored in same window
```
