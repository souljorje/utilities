import { describe, expect, it } from 'bun:test'

import { dateDiffStructure, dateStructureToTime, getDateDiff, isFuture, isToday, timeUnits } from '../src/date'

describe('date', () => {
  it('computes structure and time values', () => {
    expect(dateStructureToTime({ minute: 1, second: 1 })).toBe(timeUnits.minute + timeUnits.second)
    expect(isFuture(Date.now() + 5000)).toBe(true)
    expect(isToday(new Date())).toBe(true)
    expect(dateDiffStructure(Date.now() - 61_000, ['minute', 'second'])).toEqual({ minute: 1, second: 1 })
  })

  it('formats relative text', () => {
    const oneMinuteAgo = Date.now() - 60_000
    expect(getDateDiff(oneMinuteAgo, { short: true })).toContain('ago')
    expect(getDateDiff(oneMinuteAgo, { limit: { second: 10 } })).not.toContain('ago')
  })
})
