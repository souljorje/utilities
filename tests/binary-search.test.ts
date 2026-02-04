import { describe, expect, it } from 'bun:test'

import { binarySearch, binarySearchBase, equalRange, lowerBound, upperBound } from '../src/binary-search'

describe('binary-search', () => {
  const values = [1, 2, 2, 4, 9]

  it('resolves bounds and exact search', () => {
    expect(lowerBound(values, 2)).toBe(1)
    expect(upperBound(values, 2)).toBe(3)
    expect(binarySearch(values, 4)).toBe(3)
    expect(binarySearch(values, 5)).toBe(-1)
  })

  it('supports generic first true and equal range', () => {
    expect(binarySearchBase(values, (value) => value >= 4)).toBe(3)
    expect(equalRange(values, 2)).toEqual([1, 3])
  })
})
