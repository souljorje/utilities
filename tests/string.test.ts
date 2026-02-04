import { describe, expect, it } from 'bun:test'

import {
  abbreviateString,
  blankValue,
  capitalize,
  decodeHEX,
  emptyable,
  generateId,
  humanize,
  pluralize,
  snakeCaseToCamelCase,
  titleize,
  trimToLowercase,
} from '../src/string'

describe('string', () => {
  it('formats and normalizes string values', () => {
    expect(pluralize('block', 1)).toBe('block')
    expect(pluralize('block', 2)).toBe('blocks')
    expect(humanize('hello_world')).toBe('hello world')
    expect(capitalize('tezos')).toBe('Tezos')
    expect(titleize('hello_world')).toBe('Hello world')
    expect(abbreviateString('abcdefgh', 2, 2)).toBe('ab...gh')
    expect(trimToLowercase('  HeLLo  ')).toBe('hello')
    expect(decodeHEX('68656c6c6f')).toBe('hello')
    expect(snakeCaseToCamelCase('my_token_id')).toBe('myTokenId')
    expect(emptyable('', blankValue)).toBe(blankValue)
  })

  it('creates a uuid', () => {
    expect(generateId()).toHaveLength(36)
  })
})
