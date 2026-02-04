[@souljorje/utils](../index.md) / object/binary-search

# object/binary-search

## Table of contents

* [Functions](#functions)
  * [binarySearch()](#binarysearch)
  * [binarySearchBase()](#binarysearchbase)
  * [equalRange()](#equalrange)
  * [lowerBound()](#lowerbound)
  * [upperBound()](#upperbound)
* [Type Aliases](#type-aliases)
  * [Comparator()](#comparator)

## Functions

### binarySearch()

```ts
function binarySearch<T>(
   array, 
   target, 
   compare): number;
```

Defined in: [object/binary-search.ts:72](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L72)

Returns exact-match index for target, or -1 when absent.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`\[]

##### target

`T`

##### compare

[`Comparator`](#comparator)<`T`> = `...`

#### Returns

`number`

#### Example

```ts
binarySearch([1, 2, 4], 2) // 1
binarySearch([1, 2, 4], 3) // -1
```

***

### binarySearchBase()

```ts
function binarySearchBase<T>(array, predicate): number;
```

Defined in: [object/binary-search.ts:18](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L18)

Core first-true binary search over a sorted array.

It returns the smallest index where `predicate(array[index])` is true,
or `array.length` if the predicate is never true.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`\[]

##### predicate

(`value`) => `boolean`

#### Returns

`number`

#### Example

```ts
binarySearchBase([1, 3, 5], (v) => v >= 4) // 2
binarySearchBase([1, 3, 5], (v) => v > 10) // 3
```

***

### equalRange()

```ts
function equalRange<T>(
   array, 
   target, 
   compare): [number, number];
```

Defined in: [object/binary-search.ts:93](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L93)

Returns `[firstIndex, pastLastIndex]` range for all equal elements.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`\[]

##### target

`T`

##### compare

[`Comparator`](#comparator)<`T`> = `...`

#### Returns

\[`number`, `number`]

#### Example

```ts
equalRange([1, 2, 2, 2, 4], 2) // [1, 4]
equalRange([1, 2, 2, 2, 4], 3) // [4, 4]
```

***

### lowerBound()

```ts
function lowerBound<T>(
   array, 
   target, 
   compare): number;
```

Defined in: [object/binary-search.ts:42](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L42)

Returns first index where `array[index] >= target`.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`\[]

##### target

`T`

##### compare

[`Comparator`](#comparator)<`T`> = `...`

#### Returns

`number`

#### Example

```ts
lowerBound([1, 2, 2, 4], 2) // 1
lowerBound([1, 2, 2, 4], 3) // 3
```

***

### upperBound()

```ts
function upperBound<T>(
   array, 
   target, 
   compare): number;
```

Defined in: [object/binary-search.ts:57](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L57)

Returns first index where `array[index] > target`.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

readonly `T`\[]

##### target

`T`

##### compare

[`Comparator`](#comparator)<`T`> = `...`

#### Returns

`number`

#### Example

```ts
upperBound([1, 2, 2, 4], 2) // 3
upperBound([1, 2, 2, 4], 5) // 4
```

## Type Aliases

### Comparator()

```ts
type Comparator<T> = (a, b) => number;
```

Defined in: [object/binary-search.ts:4](https://github.com/souljorje/utilities/blob/9dde720731fd4c1e3ea7908eb257479d127501e7/src/object/binary-search.ts#L4)

Comparator contract used by binary-search helpers.

#### Type Parameters

##### T

`T`

#### Parameters

##### a

`T`

##### b

`T`

#### Returns

`number`
