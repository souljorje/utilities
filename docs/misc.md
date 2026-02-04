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
   func, 
   timeout, 
   immediate): (...args) => void;
```

Defined in: [misc.ts:31](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/misc.ts#L31)

Delays execution until a timeout passes after the most recent call.

#### Type Parameters

##### T

`T` *extends* (...`args`) => `ReturnType`<`T`>

#### Parameters

##### func

`T`

##### timeout

`number` = `300`

##### immediate

`boolean` = `false`

#### Returns

```ts
(...args): void;
```

##### Parameters

###### args

...`Parameters`<`T`>

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
function delay(ms): Promise<void>;
```

Defined in: [misc.ts:22](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/misc.ts#L22)

Resolves after the provided delay.

#### Parameters

##### ms

`number`

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
function functionable<T, A>(value, ...args): T;
```

Defined in: [misc.ts:11](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/misc.ts#L11)

Resolves value directly, or calls it if it is a function
with rest parameters as arguments

#### Type Parameters

##### T

`T`

##### A

`A` *extends* `unknown`\[]

#### Parameters

##### value

`T` | (...`args`) => `T`

##### args

...`A`

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
function safeJSONParse<T>(v): "" | T;
```

Defined in: [misc.ts:71](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/misc.ts#L71)

Parses JSON and returns an empty string on failure.

#### Type Parameters

##### T

`T`

#### Parameters

##### v

`string`

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
function throttle<T>(func, timeout): (...args) => void;
```

Defined in: [misc.ts:52](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/misc.ts#L52)

Limits execution to at most once per timeout window.

#### Type Parameters

##### T

`T` *extends* (...`args`) => `ReturnType`<`T`>

#### Parameters

##### func

`T`

##### timeout

`number` = `300`

#### Returns

```ts
(...args): void;
```

##### Parameters

###### args

...`Parameters`<`T`>

##### Returns

`void`

#### Example

```ts
const fn = throttle(console.log, 200)
fn('a'); fn('b') // second call is ignored in same window
```
