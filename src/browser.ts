import type { CsvRow } from './csv'
import { convertArrayOfObjectsToCSV } from './csv'
import { isString } from './is'
import { isLocalUrl, isWhitelistedUrl } from './url'

/**
 * Copies text to the clipboard
 */
export const copyToClipboard = (text: string): Promise<void> => navigator.clipboard.writeText(text)

/**
 * Triggers browser file download from URL/blob URL.
 *
 * @example
 * downloadFile('data:text/plain,hello', 'hello.txt') // starts download
 */
export function downloadFile(data: string, fileName = 'download'): void {
  const anchor = document.createElement('a')
  anchor.target = '_blank'
  anchor.download = fileName
  anchor.href = data
  anchor.click()
  anchor.remove()
}

/**
 * Downloads object/string payload as JSON file.
 *
 * @example
 * downloadJSON({ a: 1 }, 'data.json') // starts download
 */
export function downloadJSON(data: unknown, fileName = 'download.json'): void {
  downloadFile(
    URL.createObjectURL(
      new Blob([isString(data) ? data : JSON.stringify(data)], { type: 'text/json' }),
    ),
    fileName,
  )
}

/**
 * Downloads rows as CSV file.
 *
 * @example
 * downloadCSV([{ a: 1 }]) // starts download
 */
export function downloadCSV(data: CsvRow[], filename = 'export'): void {
  const csv = convertArrayOfObjectsToCSV(data)
  downloadFile(
    encodeURI(`data:text/csv;charset=utf-8,${csv ?? ''}`),
    `${filename}.csv`,
  )
}

/**
 * Updates query parameter without page reload.
 *
 * @example
 * updateQuery('foo', 'bar') // URL gets ?foo=bar
 */
export function updateQuery(query: string, value: string): void {
  const queryParams = new URLSearchParams(window.location.search)
  queryParams.set(query, value)
  window.history.replaceState(null, '', `?${queryParams.toString()}`)
}

/**
 * Guards external links with a confirmation callback.
 * Ignores local links and whitelisted domains.
 */
export function confirmExternalLinks(
  confirmationFn: (link: string) => boolean | Promise<boolean> = () => (
    // eslint-disable-next-line no-alert
    window.confirm('Open an external link?')
  ),
): void {
  document.addEventListener('click', async (e) => {
    const target = e.target as Element | null
    const linkElement = target?.closest('a')
    if (!linkElement) return

    const link = linkElement.getAttribute('href')
    if (!link) return

    if (isLocalUrl(link) || isWhitelistedUrl(link)) return

    e.preventDefault()
    const confirmation = await confirmationFn(link)
    if (confirmation) window.open(link)
  })
}

/**
 * Returns true when element node has vertical or horizontal scroll overflow.
 */
export function hasScroll(node: Node): boolean {
  return node instanceof HTMLElement
    && (node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth)
}

/**
 * Finds nearest scrollable parent node recursively
 */
export function getScrollParent(node: Node | null): Node | null {
  if (node === null) return null

  if (hasScroll(node)) return node

  return getScrollParent(node.parentNode)
}

/**
 * Checks whether element is fully visible in viewport
 */
export function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= viewportHeight
    && rect.right <= viewportWidth
  )
}

/**
 * Checks whether child element is outside its parent bounds
 */
export function isOutsideParentView(child: HTMLElement, parent: HTMLElement | null = child.parentElement): boolean {
  if (!parent) return false
  const childRect = child.getBoundingClientRect()
  const parentRect = parent.getBoundingClientRect()

  return (
    childRect.top < parentRect.top
    || childRect.bottom > parentRect.bottom
    || childRect.left < parentRect.left
    || childRect.right > parentRect.right
  )
}

/**
 * Reads a CSS variable value from the document root.
 *
 * @example
 * getCSSVariable('--color-primary') // '#013370'
 */
export function getCSSVariable(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}
