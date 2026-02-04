[@souljorje/utils](index.md) / object

# object

## Table of contents

* [Functions](#functions)
  * [arrayAddConditionally()](#arrayaddconditionally)
  * [arrayCreateConditionally()](#arraycreateconditionally)
  * [ensureArray()](#ensurearray)
  * [findByPropertyValue()](#findbypropertyvalue)
  * [getAllCombinations()](#getallcombinations)
  * [getPropByPath()](#getpropbypath)
  * [getRandomArrayItem()](#getrandomarrayitem)
  * [getWeightedRandomItem()](#getweightedrandomitem)
  * [groupBy()](#groupby)
  * [isEmptyObject()](#isemptyobject)
  * [mapKeysToValues()](#mapkeystovalues)
  * [mapObjectEntries()](#mapobjectentries)
  * [mapObjectValues()](#mapobjectvalues)
  * [mergeObjects()](#mergeobjects)
  * [toSet()](#toset)
  * [uniq()](#uniq)
  * [uniqBy()](#uniqby)
* [References](#references)
  * [binarySearch](#binarysearch)
  * [binarySearchBase](#binarysearchbase)
  * [Comparator](#comparator)
  * [equalRange](#equalrange)
  * [lowerBound](#lowerbound)
  * [upperBound](#upperbound)

## Functions

### arrayAddConditionally()

```ts
function arrayAddConditionally<T, F>(
   condition: boolean, 
   value: T | T[], 
   fallbackValue: F | F[]): (T | F)[];
```

Defined in: [object/index.ts:82](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L82)

Returns value/fallback as array depending on condition.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `F` | `never` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `condition` | `boolean` |
| `value` | `T` | `T`\[] |
| `fallbackValue` | `F` | `F`\[] |

#### Returns

(`T` | `F`)\[]

#### Example

```ts
arrayAddConditionally(true, 1) // [1]
arrayAddConditionally(false, 1, 2) // [2]
```

***

### arrayCreateConditionally()

```ts
function arrayCreateConditionally<T>(...map: (T | [boolean, ...T[]])[]): T[];
```

Defined in: [object/index.ts:97](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L97)

Builds an array from direct values and conditional tuples.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`map` | (`T` | \[`boolean`, `...T[]`])\[] |

#### Returns

`T`\[]

#### Example

```ts
arrayCreateConditionally([true, 'a'], [false, 'b'], 'c') // ['a', 'c']
arrayCreateConditionally([true, 1, 2], [true, 3]) // [1, 2, 3]
```

***

### ensureArray()

```ts
function ensureArray<T>(value: T | T[]): T[];
```

Defined in: [object/index.ts:38](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L38)

Normalizes a single value to an array.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` | `T`\[] |

#### Returns

`T`\[]

#### Example

```ts
ensureArray(5) // [5]
ensureArray([1, 2]) // [1, 2]
```

***

### findByPropertyValue()

```ts
function findByPropertyValue<T, K>(
   obj: Record<string, T>, 
   key: K, 
   value: T[K]): T | undefined;
```

Defined in: [object/index.ts:67](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L67)

Finds first item by matching property value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`<`string`, `any`> |
| `K` *extends* `string` | `number` | `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `Record`<`string`, `T`> |
| `key` | `K` |
| `value` | `T`\[`K`] |

#### Returns

`T` | `undefined`

#### Example

```ts
findByPropertyValue({ x: { id: 1 } }, 'id', 1) // { id: 1 }
findByPropertyValue({ x: { id: 1 } }, 'id', 2) // undefined
```

***

### getAllCombinations()

```ts
function getAllCombinations<T>(arraysToCombine: readonly readonly T[][]): T[][];
```

Defined in: [object/index.ts:254](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L254)

Generates all possible combinations by taking one element from each input array.
Aka Cartesian product (not complete).

Order of combinations is deterministic and stable.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arraysToCombine` | readonly readonly `T`\[]\[] |

#### Returns

`T`\[]\[]

#### Example

```ts
getAllCombinations([[1, 2], [3, 4]]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
getAllCombinations([]); // [[]]
```

***

### getPropByPath()

```ts
function getPropByPath<T>(
   object: any, 
   path: string | (string | number)[], 
   defaultValue?: T): T | undefined;
```

Defined in: [object/index.ts:127](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L127)

Gets nested property value by dotted or array path.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `any` |
| `path` | `string` | (`string` | `number`)\[] |
| `defaultValue?` | `T` |

#### Returns

`T` | `undefined`

#### Example

```ts
getPropByPath({ a: { b: 1 } }, 'a.b') // 1
getPropByPath({ a: {} }, 'a.b', 0) // 0
```

***

### getRandomArrayItem()

```ts
function getRandomArrayItem<T>(array: readonly T[]): T;
```

Defined in: [object/index.ts:118](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L118)

Returns random item from the array.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | readonly `T`\[] |

#### Returns

`T`

#### Example

```ts
getRandomArrayItem(['a', 'b']) // 'a' | 'b'
getRandomArrayItem([1]) // 1
```

***

### getWeightedRandomItem()

```ts
function getWeightedRandomItem<T>(items: T[]): T;
```

Defined in: [object/index.ts:223](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L223)

Returns weighted random item based on the `weight` field.
Higher weight values increase selection probability proportionally.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`\[] |

#### Returns

`T`

#### Example

```ts
getWeightedRandomItem([{ id: 1, weight: 1 }, { id: 2, weight: 3 }]) // { id: 1, weight: 1 } | { id: 2, weight: 3 }
getWeightedRandomItem([{ id: 1, weight: 1 }]) // { id: 1, weight: 1 }
```

***

### groupBy()

```ts
function groupBy<T, K>(arr: T[], key: K): Record<string, T[]>;
```

Defined in: [object/index.ts:23](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L23)

Groups array items by selected key.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* `string` | `number` | `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `T`\[] |
| `key` | `K` |

#### Returns

`Record`<`string`, `T`\[]>

#### Example

```ts
groupBy([{ t: 'a' }, { t: 'a' }, { t: 'b' }], 't') // { a: [...], b: [...] }
groupBy([{ n: 1 }, { n: 2 }], 'n') // { 1: [...], 2: [...] }
```

***

### isEmptyObject()

```ts
function isEmptyObject(obj: Record<string, unknown>): boolean;
```

Defined in: [object/index.ts:12](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L12)

Returns true when object has no enumerable keys.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `Record`<`string`, `unknown`> |

#### Returns

`boolean`

#### Example

```ts
isEmptyObject({}) // true
isEmptyObject({ a: 1 }) // false
```

***

### mapKeysToValues()

```ts
function mapKeysToValues<K, V, R>(
   keys: K[], 
   values: V[][], 
   getValue: (key: K, value: V) => R): Record<K, R>[];
```

Defined in: [object/index.ts:47](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L47)

Maps tabular rows to objects using provided keys.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `V` | - |
| `R` | `V` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `K`\[] |
| `values` | `V`\[]\[] |
| `getValue` | (`key`: `K`, `value`: `V`) => `R` |

#### Returns

`Record`<`K`, `R`>\[]

#### Example

```ts
mapKeysToValues(['a', 'b'], [[1, 2]]) // [{ a: 1, b: 2 }]
mapKeysToValues(['a'], [[1], [2]]) // [{ a: 1 }, { a: 2 }]
```

***

### mapObjectEntries()

```ts
function mapObjectEntries<T, R>(obj: T, callback: (key: string, value: T[keyof T], obj: T) => [string, R]): Record<string, R | T[keyof T]>;
```

Defined in: [object/index.ts:204](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L204)

Maps object entries with optional key remapping.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`<`string`, `any`> |
| `R` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `T` |
| `callback` | (`key`: `string`, `value`: `T`\[keyof `T`], `obj`: `T`) => \[`string`, `R`] |

#### Returns

`Record`<`string`, `R` | `T`\[keyof `T`]>

#### Example

```ts
mapObjectEntries({ a: 1 }, (k, v) => [k.toUpperCase(), v]) // { A: 1 }
mapObjectEntries({ a: 1 }, () => ['x', 2]) // { x: 2 }
```

***

### mapObjectValues()

```ts
function mapObjectValues<T, R>(obj: T, callback: (key: string, value: T[keyof T], obj: T) => R): Record<string, R>;
```

Defined in: [object/index.ts:187](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L187)

Maps object values and keeps original keys.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`<`string`, `any`> |
| `R` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `T` |
| `callback` | (`key`: `string`, `value`: `T`\[keyof `T`], `obj`: `T`) => `R` |

#### Returns

`Record`<`string`, `R`>

#### Example

```ts
mapObjectValues({ a: 1 }, (_k, v) => v + 1) // { a: 2 }
mapObjectValues({ a: 1, b: 2 }, (_k, v) => v * 2) // { a: 2, b: 4 }
```

***

### mergeObjects()

```ts
function mergeObjects<T>(source: T, updates: Partial<T>): T;
```

Defined in: [object/index.ts:171](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L171)

Deep-merges plain objects without mutating inputs.
Arrays are not concatenated and are treated as scalar values.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`<`string`, `any`> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `T` |
| `updates` | `Partial`<`T`> |

#### Returns

`T`

#### Example

```ts
mergeObjects({ a: 1, b: { c: 1 } }, { b: { d: 2 } }) // { a: 1, b: { c: 1, d: 2 } }
mergeObjects({ a: 1 }, {}) // { a: 1 }
```

***

### toSet()

```ts
function toSet<T>(values: Iterable<T, any, any> | Set<T>): Set<T>;
```

Defined in: [object/index.ts:240](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L240)

Converts iterable values to a Set instance.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `Iterable`<`T`, `any`, `any`> | `Set`<`T`> |

#### Returns

`Set`<`T`>

#### Example

```ts
toSet([1, 1, 2]) // Set(2) { 1, 2 }
toSet(new Set([1, 2])) // Set(2) { 1, 2 }
```

***

### uniq()

```ts
function uniq<T>(items: T[]): T[];
```

Defined in: [object/index.ts:142](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L142)

Removes duplicate values using `Set`.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `T`\[] |

#### Returns

`T`\[]

#### Example

```ts
uniq([1, 1, 2]) // [1, 2]
uniq(['a', 'a', 'b']) // ['a', 'b']
```

***

### uniqBy()

```ts
function uniqBy<T, K>(arr: T[], selector: (item: T) => K): T[];
```

Defined in: [object/index.ts:151](https://github.com/souljorje/utilities/blob/169988197b77930f2b27fa9b6ee38613b7569ed4/src/object/index.ts#L151)

Removes duplicate items by selector key.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `T`\[] |
| `selector` | (`item`: `T`) => `K` |

#### Returns

`T`\[]

#### Example

```ts
uniqBy([{ id: 1 }, { id: 1 }], (x) => x.id) // [{ id: 1 }]
uniqBy([{ n: 'a' }, { n: 'b' }], (x) => x.n) // [{ n: 'a' }, { n: 'b' }]
```

## References

### binarySearch

Re-exports [binarySearch](object/binary-search.md#binarysearch)

***

### binarySearchBase

Re-exports [binarySearchBase](object/binary-search.md#binarysearchbase)

***

### Comparator

Re-exports [Comparator](object/binary-search.md#comparator)

***

### equalRange

Re-exports [equalRange](object/binary-search.md#equalrange)

***

### lowerBound

Re-exports [lowerBound](object/binary-search.md#lowerbound)

***

### upperBound

Re-exports [upperBound](object/binary-search.md#upperbound)
