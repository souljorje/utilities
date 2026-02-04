import { describe, expect, it } from 'bun:test'

import { convertArrayOfObjectsToCSV } from '../src/csv'

describe('csv', () => {
  it('converts objects to csv text', () => {
    expect(convertArrayOfObjectsToCSV([{ a: 1, b: 'x' }])).toBe('a,b\n1,x\n')
    expect(convertArrayOfObjectsToCSV([], { columnDelimiter: ';' })).toBeNull()
  })
})
