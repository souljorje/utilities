import { describe, expect, it } from 'bun:test'

import { debounce, functionable, safeJSONParse, throttle, delay as waitDelay } from '../src/misc'

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('misc', () => {
  it('resolves function values and parses json safely', () => {
    expect(functionable((x: number, y: number) => x + y, 1, 2)).toBe(3)
    expect(functionable(5)).toBe(5)
    expect(safeJSONParse<{ ok: boolean }>('{"ok":true}')).toEqual({ ok: true })
    expect(safeJSONParse('{bad}')).toBe('')
  })

  it('debounces and throttles calls', async () => {
    const debouncedHits: string[] = []
    const throttledHits: string[] = []

    const debounced = debounce((value: string) => debouncedHits.push(value), 10)
    debounced('a')
    debounced('b')

    const throttled = throttle((value: string) => throttledHits.push(value), 20)
    throttled('x')
    throttled('y')

    await delay(30)

    expect(debouncedHits).toEqual(['b'])
    expect(throttledHits).toEqual(['x'])
  })

  it('waits for delay promise', async () => {
    await expect(waitDelay(1)).resolves.toBeUndefined()
  })
})
