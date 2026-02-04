import { describe, expect, it } from 'bun:test'

import { getCSSVariable, getScrollParent, hasScroll, isInViewport, isOutsideParentView } from '../src/browser'

interface RectLike {
  top: number
  left: number
  bottom: number
  right: number
}

class MockNode {
  parentNode: MockNode | null = null
}

class MockHTMLElement extends MockNode {
  scrollHeight = 0
  clientHeight = 0
  scrollWidth = 0
  clientWidth = 0
  private readonly rect: RectLike

  constructor(rect: RectLike) {
    super()
    this.rect = rect
  }

  getBoundingClientRect(): RectLike {
    return this.rect
  }
}

describe('browser', () => {
  it('handles scroll and viewport checks', () => {
    const originalHTMLElement = (globalThis as any).HTMLElement
    const originalWindow = (globalThis as any).window
    const originalDocument = (globalThis as any).document
    const originalComputedStyle = (globalThis as any).getComputedStyle

    ;(globalThis as any).HTMLElement = MockHTMLElement
    ;(globalThis as any).window = {
      innerWidth: 100,
      innerHeight: 100,
      document: {
        documentElement: { clientWidth: 100, clientHeight: 100 },
      },
    }
    ;(globalThis as any).document = { documentElement: {} }
    ;(globalThis as any).getComputedStyle = () => ({
      getPropertyValue: (name: string) => (name === '--color-primary' ? '#013370' : ''),
    })

    try {
      const parent = new MockHTMLElement({ top: 0, left: 0, bottom: 100, right: 100 })
      parent.scrollHeight = 200
      parent.clientHeight = 100

      const child = new MockHTMLElement({ top: 10, left: 10, bottom: 90, right: 90 })
      child.parentNode = parent

      expect(hasScroll(parent as unknown as Node)).toBe(true)
      expect(getScrollParent(child as unknown as Node)).toBe(parent as unknown as Node)
      expect(isInViewport(child as unknown as HTMLElement)).toBe(true)
      expect(isOutsideParentView(child as unknown as HTMLElement, parent as unknown as HTMLElement)).toBe(false)
      expect(getCSSVariable('--color-primary')).toBe('#013370')
    } finally {
      ;(globalThis as any).HTMLElement = originalHTMLElement
      ;(globalThis as any).window = originalWindow
      ;(globalThis as any).document = originalDocument
      ;(globalThis as any).getComputedStyle = originalComputedStyle
    }
  })
})
