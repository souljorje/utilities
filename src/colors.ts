/**
 * Converts hex color code to rgba string.
 *
 * @example
 * hex2rgba('#ff0000', 0.5) // 'rgba(255,0,0,0.5)'
 */
export function hex2rgba(hex: string, alpha = 1): string {
  const [r, g, b] = (hex.match(/\w\w/g) ?? []).map((x) => Number.parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
