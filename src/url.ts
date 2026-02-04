import { toSet } from './object'

export const baseUrl = typeof window === 'undefined' ? '' : window.location.origin

const hasHttpProtocol = (url: URL): boolean => url.protocol === 'http:' || url.protocol === 'https:'

/**
 * Validates URL string format.
 *
 * @example
 * isValidUrl('https://site.com') // true
 * isValidUrl('/accounts') // false
 */
export function isValidUrl(url: string): boolean {
  try {
    return hasHttpProtocol(new URL(url))
  } catch {
    return false
  }
}

/**
 * Returns true for absolute URLs.
 *
 * @example
 * isAbsoluteUrl('https://site.com') // true
 * isAbsoluteUrl('/account') // false
 */
export const isAbsoluteUrl = (url: string): boolean => isValidUrl(url)

/**
 * Checks whether URL is local or relative.
 *
 * @example
 * isLocalUrl('/blocks') // true
 * isLocalUrl('https://example.com') // false
 */
export function isLocalUrl(url: string, currentBaseUrl = baseUrl): boolean {
  return url.startsWith(currentBaseUrl) || !isAbsoluteUrl(url)
}

/**
 * Removes base URL prefix from absolute URL.
 *
 * @example
 * toRelativeUrl('https://site.com/path', 'https://site.com') // '/path'
 * toRelativeUrl('/path', 'https://site.com') // '/path'
 */
export function toRelativeUrl(url: string, currentBaseUrl = baseUrl): string {
  return url.replace(currentBaseUrl, '')
}

/**
 * Extracts top-level domain from URL.
 *
 * @example
 * getDomain('https://api.site.com/v1') // 'site.com'
 * getDomain('https://site.com') // 'site.com'
 */
export function getDomain(url: string): string {
  const urlInstance = new URL(url)
  const urlDomains = urlInstance.hostname.split('.')

  if (urlDomains.length === 2) {
    return urlInstance.hostname
  }

  return `${urlDomains.at(-2) ?? ''}.${urlDomains.at(-1) ?? ''}`
}

/**
 * Checks whitelist membership by normalized domain.
 *
 * @example
 * isWhitelistedUrl('https://site.com', ['site.com']) // true
 * isWhitelistedUrl('https://evil.io', ['site.com']) // false
 */
export function isWhitelistedUrl(url: string, whitelist: Iterable<string> | Set<string> = [], hostname = typeof window === 'undefined' ? '' : window.location.hostname): boolean {
  const domain = getDomain(url)
  return domain === hostname || toSet(whitelist).has(domain)
}
