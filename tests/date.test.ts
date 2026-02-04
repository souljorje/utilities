import { describe, expect, it } from 'bun:test'

import {
  dateDiffStructure,
  dateStructureToTime,
  getDateDiff,
  isFuture,
  isToday,
  timeUnits,
  toLocalUtcDate,
} from '../src/date'

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
    expect(getDateDiff(Date.now() + 120_000, { prefix: true, unitsCount: 1 })).toContain('in')
    expect(getDateDiff(oneMinuteAgo, { prefix: true, short: true })).toContain('is late for')
  })

  it('converts utc date components to local date', () => {
    const utcDate = new Date('2024-01-01T10:20:30.000Z')
    const converted = toLocalUtcDate(utcDate)

    expect(converted.getFullYear()).toBe(utcDate.getUTCFullYear())
    expect(converted.getMonth()).toBe(utcDate.getUTCMonth())
    expect(converted.getDate()).toBe(utcDate.getUTCDate())
    expect(converted.getHours()).toBe(utcDate.getUTCHours())
    expect(converted.getMinutes()).toBe(utcDate.getUTCMinutes())
    expect(converted.getSeconds()).toBe(utcDate.getUTCSeconds())
  })
})
