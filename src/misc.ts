import { isFunction } from './is'

/**
 * Resolves value directly, or calls it if it is a function
 * with rest parameters as arguments
 *
 * @example
 * functionable((x: number, y: number) => x + y, 1, 2) // 3
 * functionable(5) // 5
 */
export function functionable<T, A extends unknown[]>(value: T | ((...args: A) => T), ...args: A): T {
  return isFunction<(...fnArgs: A) => T>(value) ? value(...args) : value
}

/**
 * Resolves after the provided delay.
 *
 * @example
 * await delay(100) // resolves after 100ms
 * await delay(0) // resolves on next tick
 */
export const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Delays execution until a timeout passes after the most recent call.
 *
 * @example
 * const fn = debounce(console.log, 200)
 * fn('a'); fn('b') // logs only 'b'
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(func: T, timeout: number = 300, immediate: boolean = false): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  let callNow: boolean

  return (...args: Parameters<T>) => {
    callNow = !timer && immediate
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
    if (callNow) func(...args)
  }
}

/**
 * Limits execution to at most once per timeout window.
 *
 * @example
 * const fn = throttle(console.log, 200)
 * fn('a'); fn('b') // second call is ignored in same window
 */
export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(func: T, timeout = 300): ((...args: Parameters<T>) => void) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timer) return
    func(...args)
    timer = setTimeout(() => {
      timer = null
    }, timeout)
  }
}

/**
 * Parses JSON and returns an empty string on failure.
 *
 * @example
 * safeJSONParse<{ a: number }>('{"a":1}') // { a: 1 }
 * safeJSONParse('{bad}') // ''
 */
export function safeJSONParse<T>(v: string): T | '' {
  try {
    return JSON.parse(v)
  } catch {
    return ''
  }
}
