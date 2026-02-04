import { describe, expect, it } from 'bun:test'

import {
  confirmExternalLinks,
  copyToClipboard,
  downloadCSV,
  downloadFile,
  downloadJSON,
  getCSSVariable,
  getScrollParent,
  hasScroll,
  isInViewport,
  isOutsideParentView,
  updateQuery,
} from '../src/browser'

function setReadonlyNumber(target: object, key: string, value: number): void {
  Object.defineProperty(target, key, {
    configurable: true,
    value,
  })
}

describe('browser', () => {
  it('handles scroll and viewport checks in happy-dom', () => {
    const parent = document.createElement('div')
    const child = document.createElement('div')
    parent.appendChild(child)

    setReadonlyNumber(parent, 'scrollHeight', 200)
    setReadonlyNumber(parent, 'clientHeight', 100)
    setReadonlyNumber(parent, 'scrollWidth', 100)
    setReadonlyNumber(parent, 'clientWidth', 100)

    child.getBoundingClientRect = () => ({
      top: 10,
      left: 10,
      bottom: 90,
      right: 90,
      width: 80,
      height: 80,
      x: 10,
      y: 10,
      toJSON: () => ({}),
    })

    parent.getBoundingClientRect = () => ({
      top: 0,
      left: 0,
      bottom: 100,
      right: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    })

    setReadonlyNumber(window, 'innerWidth', 100)
    setReadonlyNumber(window, 'innerHeight', 100)

    document.documentElement.style.setProperty('--color-primary', '#013370')

    expect(hasScroll(parent)).toBe(true)
    expect(getScrollParent(child)).toBe(parent)
    expect(isInViewport(child)).toBe(true)
    expect(isOutsideParentView(child, parent)).toBe(false)
    expect(getCSSVariable('--color-primary').trim()).toBe('#013370')
  })

  it('copies text to clipboard', async () => {
    const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard')
    const recorded: string[] = []
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          recorded.push(text)
        },
      },
    })

    try {
      await copyToClipboard('hello')
      expect(recorded).toEqual(['hello'])
    } finally {
      if (originalClipboard) {
        Object.defineProperty(navigator, 'clipboard', originalClipboard)
      }
    }
  })

  it('downloads files from URL and JSON payload', () => {
    const originalCreateElement = document.createElement.bind(document)
    const clicked: HTMLAnchorElement[] = []

    document.createElement = ((tagName: string) => {
      const element = originalCreateElement(tagName)
      if (tagName === 'a') {
        const anchor = element as HTMLAnchorElement
        anchor.click = () => {
          clicked.push(anchor)
        }
      }
      return element
    }) as typeof document.createElement

    const originalCreateObjectURL = URL.createObjectURL
    URL.createObjectURL = (() => 'blob:json') as typeof URL.createObjectURL

    try {
      downloadFile('data:text/plain,hello', 'hello.txt')
      downloadJSON({ a: 1 }, 'payload.json')
      downloadCSV([{ a: 1 }], 'rows')

      expect(clicked).toHaveLength(3)
      expect(clicked[0].download).toBe('hello.txt')
      expect(clicked[0].href).toContain('data:text/plain,hello')
      expect(clicked[1].download).toBe('payload.json')
      expect(clicked[1].href).toContain('blob:json')
      expect(clicked[2].download).toBe('rows.csv')
      expect(decodeURIComponent(clicked[2].href)).toContain('data:text/csv;charset=utf-8,a')
    } finally {
      document.createElement = originalCreateElement
      URL.createObjectURL = originalCreateObjectURL
    }
  })

  it('updates query string and confirms external links', async () => {
    const originalReplaceState = window.history.replaceState.bind(window.history)
    const replaceStateCalls: string[] = []
    window.history.replaceState = ((...args: [any, string, string | URL | null | undefined]) => {
      replaceStateCalls.push(String(args[2] ?? ''))
    }) as History['replaceState']

    const originalOpen = window.open
    const opened: string[] = []
    window.open = ((url?: string | URL | undefined) => {
      opened.push(String(url ?? ''))
      return null
    }) as typeof window.open

    const externalLink = document.createElement('a')
    externalLink.setAttribute('href', 'https://example.org/page')
    externalLink.textContent = 'external'
    document.body.appendChild(externalLink)

    const localLink = document.createElement('a')
    localLink.setAttribute('href', '/local')
    localLink.textContent = 'local'
    document.body.appendChild(localLink)

    confirmExternalLinks(async (link) => link.includes('example.org'))
    updateQuery('foo', 'bar')

    const externalEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
    externalLink.dispatchEvent(externalEvent)
    await Promise.resolve()

    const localEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
    localLink.dispatchEvent(localEvent)
    await Promise.resolve()

    expect(replaceStateCalls.at(-1)).toContain('?foo=bar')
    expect(externalEvent.defaultPrevented).toBe(true)
    expect(localEvent.defaultPrevented).toBe(false)
    expect(opened).toEqual(['https://example.org/page'])

    window.history.replaceState = originalReplaceState
    window.open = originalOpen
    externalLink.remove()
    localLink.remove()
  })
})
