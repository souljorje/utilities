import { isPlainObject, isSet } from '../is'

export * from './binary-search'

/**
 * Returns true when object has no enumerable keys.
 *
 * @example
 * isEmptyObject({}) // true
 * isEmptyObject({ a: 1 }) // false
 */
export function isEmptyObject(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0
}

/**
 * Groups array items by selected key.
 *
 * @example
 * groupBy([{ t: 'a' }, { t: 'a' }, { t: 'b' }], 't') // { a: [...], b: [...] }
 * groupBy([{ n: 1 }, { n: 2 }], 'n') // { 1: [...], 2: [...] }
 */
export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((acc, x) => {
    const groupKey = String(x[key]);
    (acc[groupKey] = acc[groupKey] || []).push(x)
    return acc
  }, {})
}

/**
 * Normalizes a single value to an array.
 *
 * @example
 * ensureArray(5) // [5]
 * ensureArray([1, 2]) // [1, 2]
 */
export const ensureArray = <T>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value])

/**
 * Maps tabular rows to objects using provided keys.
 *
 * @example
 * mapKeysToValues(['a', 'b'], [[1, 2]]) // [{ a: 1, b: 2 }]
 * mapKeysToValues(['a'], [[1], [2]]) // [{ a: 1 }, { a: 2 }]
 */
export function mapKeysToValues<K extends string, V, R = V>(
  keys: K[],
  values: V[][],
  getValue: (key: K, value: V) => R = (_key, value) => value as unknown as R,
): Array<Record<K, R>> {
  return values.map((item) => (
    keys.reduce((acc, key, index) => {
      acc[key] = getValue(key, item[index])
      return acc
    }, {} as Record<K, R>)
  ))
}

/**
 * Finds first item by matching property value.
 *
 * @example
 * findByPropertyValue({ x: { id: 1 } }, 'id', 1) // { id: 1 }
 * findByPropertyValue({ x: { id: 1 } }, 'id', 2) // undefined
 */
export function findByPropertyValue<T extends Record<string, any>, K extends keyof T>(
  obj: Record<string, T>,
  key: K,
  value: T[K],
): T | undefined {
  return Object.values(obj).find((item) => item[key] === value)
}

/**
 * Returns value/fallback as array depending on condition.
 *
 * @example
 * arrayAddConditionally(true, 1) // [1]
 * arrayAddConditionally(false, 1, 2) // [2]
 */
export function arrayAddConditionally<T, F = never>(
  condition: boolean,
  value: T | T[],
  fallbackValue: F | F[] = [] as unknown as F[],
): Array<T | F> {
  return condition ? ensureArray(value) : ensureArray(fallbackValue)
}

/**
 * Builds an array from direct values and conditional tuples.
 *
 * @example
 * arrayCreateConditionally([true, 'a'], [false, 'b'], 'c') // ['a', 'c']
 * arrayCreateConditionally([true, 1, 2], [true, 3]) // [1, 2, 3]
 */
export function arrayCreateConditionally<T>(
  ...map: Array<T | [boolean, ...T[]]>
): T[] {
  return map.reduce<T[]>((newArray, item) => {
    if (!Array.isArray(item)) {
      newArray.push(item)
    } else {
      const [condition, ...value] = item
      if (condition) newArray.push(...value)
    }
    return newArray
  }, [])
}

/**
 * Returns random item from the array.
 *
 * @example
 * getRandomArrayItem(['a', 'b']) // 'a' | 'b'
 * getRandomArrayItem([1]) // 1
 */
export const getRandomArrayItem = <T>(array: readonly T[]): T => array[Math.floor(Math.random() * array.length)]

/**
 * Gets nested property value by dotted or array path.
 *
 * @example
 * getPropByPath({ a: { b: 1 } }, 'a.b') // 1
 * getPropByPath({ a: {} }, 'a.b', 0) // 0
 */
export function getPropByPath<T = unknown>(object: any, path: string | Array<string | number>, defaultValue?: T): T | undefined {
  const normalizedPath = Array.isArray(path) ? [...path] : path.split('.')
  if (object && normalizedPath.length) {
    return getPropByPath(object[normalizedPath.shift() as keyof typeof object], normalizedPath, defaultValue)
  }
  return object === undefined ? defaultValue : (object as T)
}

/**
 * Removes duplicate values using `Set`.
 *
 * @example
 * uniq([1, 1, 2]) // [1, 2]
 * uniq(['a', 'a', 'b']) // ['a', 'b']
 */
export const uniq = <T>(items: T[]): T[] => [...new Set(items)]

/**
 * Removes duplicate items by selector key.
 *
 * @example
 * uniqBy([{ id: 1 }, { id: 1 }], (x) => x.id) // [{ id: 1 }]
 * uniqBy([{ n: 'a' }, { n: 'b' }], (x) => x.n) // [{ n: 'a' }, { n: 'b' }]
 */
export function uniqBy<T, K>(
  arr: T[],
  selector: (item: T) => K = (item) => item as unknown as K,
): T[] {
  const map = new Map<K, T>()
  arr.forEach((item) => {
    const prop = selector(item)
    if (!map.has(prop)) map.set(prop, item)
  })
  return [...map.values()]
}

/**
 * Deep-merges plain objects without mutating inputs.
 * Arrays are not concatenated and are treated as scalar values.
 *
 * @example
 * mergeObjects({ a: 1, b: { c: 1 } }, { b: { d: 2 } }) // { a: 1, b: { c: 1, d: 2 } }
 * mergeObjects({ a: 1 }, {}) // { a: 1 }
 */
export function mergeObjects<T extends Record<string, any>>(source: T, updates: Partial<T>): T {
  return Object.keys(source).reduce((acc, key) => {
    acc[key] = isPlainObject(acc[key])
      ? mergeObjects(source[key], acc[key] ?? {})
      : acc[key] ?? source[key]
    return acc
  }, { ...updates } as Record<string, any>) as T
}

/**
 * Maps object values and keeps original keys.
 *
 * @example
 * mapObjectValues({ a: 1 }, (_k, v) => v + 1) // { a: 2 }
 * mapObjectValues({ a: 1, b: 2 }, (_k, v) => v * 2) // { a: 2, b: 4 }
 */
export function mapObjectValues<T extends Record<string, any>, R>(
  obj: T,
  callback: (key: string, value: T[keyof T], obj: T) => R,
): Record<string, R> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = callback(key, value, obj)
    return acc
  }, {} as Record<string, R>)
}

/**
 * Maps object entries with optional key remapping.
 *
 * @example
 * mapObjectEntries({ a: 1 }, (k, v) => [k.toUpperCase(), v]) // { A: 1 }
 * mapObjectEntries({ a: 1 }, () => ['x', 2]) // { x: 2 }
 */
export function mapObjectEntries<T extends Record<string, any>, R>(
  obj: T,
  callback: (key: string, value: T[keyof T], obj: T) => [newKey?: string, newValue?: R],
): Record<string, R | T[keyof T]> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const [newKey = key, newValue = value] = callback(key, value, obj)
    acc[newKey] = newValue
    return acc
  }, {} as Record<string, R | T[keyof T]>)
}

/**
 * Returns weighted random item based on the `weight` field.
 * Higher weight values increase selection probability proportionally.
 *
 * @example
 * getWeightedRandomItem([{ id: 1, weight: 1 }, { id: 2, weight: 3 }]) // { id: 1, weight: 1 } | { id: 2, weight: 3 }
 * getWeightedRandomItem([{ id: 1, weight: 1 }]) // { id: 1, weight: 1 }
 */
export function getWeightedRandomItem<T extends { weight: number }>(items: T[]): T {
  const weights = items.reduce((acc, item, i) => {
    acc.push(item.weight + (acc[i - 1] || 0))
    return acc
  }, [] as number[])

  const random = Math.random() * weights[weights.length - 1]
  return items[weights.findIndex((weight) => weight > random)]
}

/**
 * Converts iterable values to a Set instance.
 *
 * @example
 * toSet([1, 1, 2]) // Set(2) { 1, 2 }
 * toSet(new Set([1, 2])) // Set(2) { 1, 2 }
 */
export function toSet<T>(values: Iterable<T> | Set<T>): Set<T> {
  return isSet(values) ? values : new Set(values)
}

/**
 * Generates all possible combinations by taking one element from each input array.
 * Aka Cartesian product (not complete).
 *
 * Order of combinations is deterministic and stable.
 *
 * @example
 * getAllCombinations([[1, 2], [3, 4]]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * getAllCombinations([]); // [[]]
 */
export function getAllCombinations<T>(arraysToCombine: ReadonlyArray<ReadonlyArray<T>>): T[][] {
  const divisors: number[] = []
  let combinationsCount = 1

  for (let i = arraysToCombine.length - 1; i >= 0; i--) {
    const next = arraysToCombine[i + 1]
    divisors[i] = divisors[i + 1] ? divisors[i + 1] * (next?.length ?? 0) : 1

    const len = arraysToCombine[i]?.length ?? 0
    combinationsCount *= len || 1
  }

  const getCombination = (
    n: number,
    arrays: ReadonlyArray<ReadonlyArray<T>>,
    divs: ReadonlyArray<number>,
  ): T[] =>
    arrays.reduce<T[]>((acc, arr, i) => {
      acc.push(arr[Math.floor(n / divs[i]) % arr.length])
      return acc
    }, [])

  const combinations: T[][] = []
  for (let i = 0; i < combinationsCount; i++) {
    combinations.push(getCombination(i, arraysToCombine, divisors))
  }

  return combinations
}
