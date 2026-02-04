import { describe, expect, it } from 'bun:test'

import {
  arrayAddConditionally,
  arrayCreateConditionally,
  ensureArray,
  findByPropertyValue,
  getAllCombinations,
  getPropByPath,
  getWeightedRandomItem,
  groupBy,
  isEmptyObject,
  mapKeysToValues,
  mapObjectEntries,
  mapObjectValues,
  mergeObjects,
  toSet,
  uniq,
  uniqBy,
} from '../src/object'

function withMockedRandom<T>(value: number, callback: () => T): T {
  const originalRandom = Math.random
  Math.random = () => value
  try {
    return callback()
  } finally {
    Math.random = originalRandom
  }
}

describe('object', () => {
  it('works with object and array shaping helpers', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(groupBy([{ t: 'a' }, { t: 'b' }, { t: 'a' }], 't')).toEqual({
      a: [{ t: 'a' }, { t: 'a' }],
      b: [{ t: 'b' }],
    })
    expect(ensureArray(1)).toEqual([1])
    expect(mapKeysToValues(['id'], [[1], [2]])).toEqual([{ id: 1 }, { id: 2 }])
    expect(findByPropertyValue({ a: { id: 1 } }, 'id', 1)).toEqual({ id: 1 })
    expect(arrayAddConditionally(true, 1)).toEqual([1])
    expect(arrayCreateConditionally([true, 'x'], [false, 'y'], 'z')).toEqual(['x', 'z'])
    expect(uniq([1, 1, 2])).toEqual([1, 2])
    expect(uniqBy([{ id: 1 }, { id: 1 }, { id: 2 }], (item) => item.id)).toEqual([{ id: 1 }, { id: 2 }])
    expect(mapObjectValues({ a: 1, b: 2 }, (key, value) => `${key}:${value}`)).toEqual({ a: 'a:1', b: 'b:2' })
    expect(mapObjectEntries({ a: 1 }, (key, value) => [key.toUpperCase(), value])).toEqual({ A: 1 })
  })

  it('covers nested access, merge and set operations', () => {
    expect(getPropByPath<{ a: number }>({ x: { a: 1 } }, 'x', { a: 0 })).toEqual({ a: 1 })
    const merged = mergeObjects({ a: 1, b: { c: 1 } }, { b: { d: 2 } } as any) as { a: number, b: { c: number, d: number } }
    expect(merged).toEqual({ a: 1, b: { c: 1, d: 2 } })
    expect(toSet([1, 1, 2])).toEqual(new Set([1, 2]))
    expect(getAllCombinations([[1, 2], [3, 4]])).toEqual([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ])
    expect(withMockedRandom(0.1, () => getWeightedRandomItem([
      { id: 1, weight: 1 },
      { id: 2, weight: 3 },
    ]))).toEqual({ id: 1, weight: 1 })
  })
})
