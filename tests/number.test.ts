import { describe, expect, it } from 'bun:test'

import { getDecimalsCount, getPercentage, getPercentageChange, getRandomNumber } from '../src/number'

function withMockedRandom<T>(value: number, callback: () => T): T {
  const originalRandom = Math.random
  Math.random = () => value
  try {
    return callback()
  } finally {
    Math.random = originalRandom
  }
}

describe('number', () => {
  it('computes numeric helpers', () => {
    expect(getPercentage(25, 200)).toBe(12.5)
    expect(getPercentageChange(200, 25)).toBe(700)
    expect(getDecimalsCount(12.34)).toBe(2)
  })

  it('returns random integer in inclusive bounds', () => {
    expect(withMockedRandom(0, () => getRandomNumber(10, 12))).toBe(10)
    expect(withMockedRandom(0.99999, () => getRandomNumber(10, 12))).toBe(12)
  })
})
