import { describe, expect, it } from 'bun:test'

import { getDomain, isAbsoluteUrl, isLocalUrl, isValidUrl, isWhitelistedUrl, toRelativeUrl } from '../src/url'

describe('url', () => {
  it('checks url structure helpers', () => {
    expect(isValidUrl('https://example.com')).toBe(true)
    expect(isAbsoluteUrl('https://example.com')).toBe(true)
    expect(isLocalUrl('/account', 'https://example.com')).toBe(true)
    expect(toRelativeUrl('https://example.com/path', 'https://example.com')).toBe('/path')
    expect(getDomain('https://api.example.com/v1')).toBe('example.com')
    expect(isWhitelistedUrl('https://app.example.com', ['example.com'], 'localhost')).toBe(true)
  })
})
