import { describe, expect, it } from 'bun:test'

import {
  isDate,
  isDefined,
  isFunction,
  isMap,
  isNullish,
  isNumber,
  isPlainObject,
  isSet,
  isString,
  isStringOrNumber,
} from '../src/is'

describe('is', () => {
  it('checks primitive and object guards', () => {
    expect(isString('abc')).toBe(true)
    expect(isDate(new Date())).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isStringOrNumber('x')).toBe(true)
    expect(isFunction(() => 1)).toBe(true)
    expect(isDefined(false)).toBe(true)
    expect(isNullish(undefined)).toBe(true)
    expect(isPlainObject({ a: 1 })).toBe(true)
    expect(isSet(new Set([1]))).toBe(true)
    expect(isMap(new Map())).toBe(true)
  })
})
