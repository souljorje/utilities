/**
 * Calculates first as a percentage of second.
 *
 * @example
 * getPercentage(25, 200) // 12.5
 * getPercentage(1, 4) // 25
 */
export const getPercentage = (first: number, second: number): number => (first / second) * 100

/**
 * Calculates percentage change between two numbers
 *
 * @example
 * getPercentageChange(200, 25) // 700
 * getPercentageChange(25, 200) // −87.5
 */
export const getPercentageChange = (from: number, to: number): number => getPercentage(from - to, to)

/**
 * Returns count of decimal digits in number representation.
 *
 * @example
 * getDecimalsCount(12.345) // 3
 * getDecimalsCount(10) // 0
 */
export const getDecimalsCount = (num: number): number => num.toString().split('.')[1]?.length ?? 0

export const MAX_INT_32 = Number.MAX_SAFE_INTEGER

/**
 * Generates a random integer in the inclusive range [min, max].
 *
 * @example
 * getRandomNumber(1, 3) // 1 | 2 | 3
 * getRandomNumber(5, 5) // 5
 */
export const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)
