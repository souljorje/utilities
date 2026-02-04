/**
 * Returns true when the value is a string.
 *
 * @example
 * isString('abc') // true
 * isString(42) // false
 */
export const isString = (v: unknown): v is string => typeof v === 'string'

/**
 * Returns true when the value is a Date instance.
 *
 * @example
 * isDate(new Date()) // true
 * isDate('abc') // false
 */
export const isDate = (v: unknown): v is Date => v instanceof Date

/**
 * Returns true for finite numbers excluding NaN.
 *
 * @example
 * isNumber(42) // true
 * isNumber('abc') // false
 * isNumber(Number.NaN) // false
 */
export const isNumber = (value: unknown): value is number => Number.isFinite(value)

/**
 * Returns true for string or finite number values.
 *
 * @example
 * isStringOrNumber('abc') // true
 * isStringOrNumber({ value: 42 }) // false
 */
export function isStringOrNumber(value: unknown): value is string | number {
  return isString(value) || isNumber(value)
}

/**
 * Returns true when the value is callable.
 *
 * @example
 * isFunction(() => 1) // true
 * isFunction('abc') // false
 */
export function isFunction<T extends (...args: any[]) => unknown>(v: unknown): v is T {
  return typeof v === 'function'
}

/**
 * Returns true when the value is not undefined.
 *
 * @example
 * isDefined(null) && isDefined(false) && isDefined('') // true
 * isDefined(undefined) // false
 */
export const isDefined = <T>(v: T | undefined): v is T => typeof v !== 'undefined'

/**
 * Returns true when value is null or undefined.
 *
 * @example
 * isNullish(null || undefined) // true
 * isNullish('') // false
 */
export const isNullish = (v: unknown): v is null | undefined => v == null

/**
 * Returns true only for plain object literals.
 *
 * @example
 * isPlainObject({ a: 1 }) // true
 * isPlainObject([]) // false
 */
export function isPlainObject(v: unknown): v is Record<string, unknown> {
  if (Object.prototype.toString.call(v) !== '[object Object]') return false
  const prototype = Object.getPrototypeOf(v)
  return prototype === null || prototype === Object.prototype
}

/**
 * Returns true when value is a Set.
 *
 * @example
 * isSet(new Set([1])) // true
 * isSet([1]) // false
 */
export const isSet = (v: unknown): v is Set<unknown> => (v instanceof Set)

/**
 * Returns true when value is a Map.
 *
 * @example
 * isMap(new Map()) // true
 * isMap({}) // false
 */
export const isMap = (v: unknown): v is Map<unknown, unknown> => v instanceof Map
