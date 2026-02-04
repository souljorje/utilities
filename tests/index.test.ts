import { describe, expect, it } from 'bun:test'

import * as exported from '../src/index'

describe('index exports', () => {
  it('re-exports module members', () => {
    expect(typeof exported.binarySearch).toBe('function')
    expect(typeof exported.hex2rgba).toBe('function')
    expect(typeof exported.getDateDiff).toBe('function')
  })
})
