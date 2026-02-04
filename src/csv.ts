import { isNullish } from './is'

export type CsvValue = string | number | boolean | null | undefined
export type CsvRow = Record<string, CsvValue>

/**
 * Converts object rows into CSV text.
 *
 * It uses keys from the first row as header columns and keeps the same
 * column order for all rows.
 *
 * @example
 * convertArrayOfObjectsToCSV([{ a: 1, b: 2 }], { columnDelimiter: ';' }) // 'a;b\n1;2\n'
 */
export function convertArrayOfObjectsToCSV(data: CsvRow[] | null | undefined, {
  columnDelimiter = ',',
  lineDelimiter = '\n',
}: {
  columnDelimiter?: string
  lineDelimiter?: string
} = {}): string | null {
  if (isNullish(data) || !data.length) {
    return null
  }

  const keys = Object.keys(data[0])
  let result = ''

  result += keys.join(columnDelimiter)
  result += lineDelimiter

  data.forEach((item) => {
    keys.forEach((key, index) => {
      if (index > 0) result += columnDelimiter
      result += item[key] ?? ''
    })
    result += lineDelimiter
  })

  return result
}
