export const blankValue = '—'

/**
 * Adds plural suffix when count is not singular.
 *
 * @example
 * pluralize('block', 2) // 'blocks'
 * pluralize('block', 1) // 'block'
 */
export const pluralize = (word: string, count: number): string => (count === 1 ? word : `${word}s`)

/**
 * Replaces underscores with spaces.
 *
 * @example
 * humanize('hello_world') // 'hello world'
 * humanize('hello') // 'hello'
 */
export const humanize = (s: string): string => s.replaceAll('_', ' ')

/**
 * Uppercases the first character.
 *
 * @example
 * capitalize('foo') // 'Foo'
 * capitalize('') // ''
 */
export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Humanizes and capitalizes a string.
 *
 * @example
 * titleize('hello_world') // 'Hello world'
 */
export const titleize = (s: string): string => humanize(capitalize(s))

/**
 * Creates a random UUID.
 *
 * @example
 * generateId() // '550e8400-e29b-41d4-a716-446655440000'
 */
export const generateId = (): string => crypto.randomUUID()

/**
 * Keeps start and end segments with ellipsis in the middle.
 *
 * @example
 * abbreviateString('abcdefgh', 2, 2) // 'ab...gh'
 * abbreviateString('abcdef', 3, 1) // 'abc...f'
 */
export const abbreviateString = (v: string, startCount: number, endCount: number): string => `${v.slice(0, startCount)}...${v.slice(-endCount)}`

/**
 * Trims and lowercases a string safely.
 *
 * @example
 * trimToLowercase('  HeLLo ') // 'hello'
 * trimToLowercase(undefined) // undefined
 */
export const trimToLowercase = (s?: string | null): string | undefined => s?.trim().toLowerCase()

/**
 * Decodes a hex string into UTF-8 text.
 *
 * @example
 * decodeHEX('68656c6c6f') // 'hello'
 * decodeHEX('74657a6f73') // 'foo'
 */
export function decodeHEX(s: string): string {
  const parsed = s
    .replace(/\s+/g, '')
    .replace(/[0-9a-f]{2}/g, '%$&')

  return decodeURIComponent(parsed)
}

/**
 * Converts snake_case text to camelCase.
 *
 * @example
 * snakeCaseToCamelCase('my_token_id') // 'myTokenId'
 * snakeCaseToCamelCase('alreadyCamel') // 'alreadyCamel'
 */
export function snakeCaseToCamelCase(s: string): string {
  return s.replace(
    /(_[a-z])/gi,
    (segment) => segment.toUpperCase().replace('_', ''),
  )
}

/**
 * Returns fallback text when value is falsy.
 *
 * @example
 * emptyable('', 'n/a') // 'n/a'
 * emptyable('ok', 'n/a') // 'ok'
 */
export const emptyable = <T>(value: T, emptyValue: unknown = blankValue): T | unknown => value || emptyValue
