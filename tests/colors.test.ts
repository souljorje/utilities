import { describe, expect, it } from 'bun:test'

import { hex2rgba } from '../src/colors'

describe('colors', () => {
  it('converts hex color to rgba', () => {
    expect(hex2rgba('#ff0000', 0.5)).toBe('rgba(255,0,0,0.5)')
  })
})
