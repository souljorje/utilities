[@souljorje/utils](index.md) / is

# is

## Table of contents

* [Functions](#functions)
  * [isDate()](#isdate)
  * [isDefined()](#isdefined)
  * [isFunction()](#isfunction)
  * [isMap()](#ismap)
  * [isNullish()](#isnullish)
  * [isNumber()](#isnumber)
  * [isPlainObject()](#isplainobject)
  * [isSet()](#isset)
  * [isString()](#isstring)
  * [isStringOrNumber()](#isstringornumber)

## Functions

### isDate()

```ts
function isDate(v: unknown): v is Date;
```

Defined in: [is.ts:17](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L17)

Returns true when the value is a Date instance.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is Date`

#### Example

```ts
isDate(new Date()) // true
isDate('abc') // false
```

***

### isDefined()

```ts
function isDefined<T>(v: T | undefined): v is T;
```

Defined in: [is.ts:58](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L58)

Returns true when the value is not undefined.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `T` | `undefined` |

#### Returns

`v is T`

#### Example

```ts
isDefined(null) && isDefined(false) && isDefined('') // true
isDefined(undefined) // false
```

***

### isFunction()

```ts
function isFunction<T>(v: unknown): v is T;
```

Defined in: [is.ts:47](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L47)

Returns true when the value is callable.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `any`\[]) => `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is T`

#### Example

```ts
isFunction(() => 1) // true
isFunction('abc') // false
```

***

### isMap()

```ts
function isMap(v: unknown): v is Map<unknown, unknown>;
```

Defined in: [is.ts:98](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L98)

Returns true when value is a Map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is Map<unknown, unknown>`

#### Example

```ts
isMap(new Map()) // true
isMap({}) // false
```

***

### isNullish()

```ts
function isNullish(v: unknown): v is null | undefined;
```

Defined in: [is.ts:67](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L67)

Returns true when value is null or undefined.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

v is null | undefined

#### Example

```ts
isNullish(null || undefined) // true
isNullish('') // false
```

***

### isNumber()

```ts
function isNumber(value: unknown): value is number;
```

Defined in: [is.ts:27](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L27)

Returns true for finite numbers excluding NaN.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is number`

#### Example

```ts
isNumber(42) // true
isNumber('abc') // false
isNumber(Number.NaN) // false
```

***

### isPlainObject()

```ts
function isPlainObject(v: unknown): v is Record<string, unknown>;
```

Defined in: [is.ts:76](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L76)

Returns true only for plain object literals.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is Record<string, unknown>`

#### Example

```ts
isPlainObject({ a: 1 }) // true
isPlainObject([]) // false
```

***

### isSet()

```ts
function isSet(v: unknown): v is Set<unknown>;
```

Defined in: [is.ts:89](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L89)

Returns true when value is a Set.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is Set<unknown>`

#### Example

```ts
isSet(new Set([1])) // true
isSet([1]) // false
```

***

### isString()

```ts
function isString(v: unknown): v is string;
```

Defined in: [is.ts:8](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L8)

Returns true when the value is a string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `unknown` |

#### Returns

`v is string`

#### Example

```ts
isString('abc') // true
isString(42) // false
```

***

### isStringOrNumber()

```ts
function isStringOrNumber(value: unknown): value is string | number;
```

Defined in: [is.ts:36](https://github.com/souljorje/utilities/blob/5127f543787eb962535c0d7b8597eaa0719901c4/src/is.ts#L36)

Returns true for string or finite number values.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

value is string | number

#### Example

```ts
isStringOrNumber('abc') // true
isStringOrNumber({ value: 42 }) // false
```
