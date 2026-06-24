import { useState, useEffect, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

/**
 * Floating "scroll to top" button.
 *
 * - Fixed to the bottom-right of the viewport.
 * - Appears on every page, regardless of where you are.
 * - Shows only after the user has scrolled down `threshold` pixels.
 * - Smooth-scrolls to the top, falling back to instant scroll if the user
 *   prefers reduced motion.
 */
function getTutorialContentScroller() {
  if (typeof document === 'undefined') return null
  return document.querySelector('.app.tutorial-layout .content')
}

function getScrollTop() {
  const contentScroller = getTutorialContentScroller()
  if (contentScroller) return contentScroller.scrollTop
  if (typeof window === 'undefined') return 0
  return window.scrollY
}

function scrollPageToTop() {
  const contentScroller = getTutorialContentScroller()
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const behavior = reduceMotion ? 'auto' : 'smooth'
  if (contentScroller) {
    contentScroller.scrollTo({ top: 0, behavior })
    return
  }
  window.scrollTo({ top: 0, behavior })
}

export default function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return
      setVisible(getScrollTop() > threshold)
    }

    // Run once on mount in case the page is already scrolled
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Capture scroll on nested panels (e.g. tutorial content) — scroll does not bubble.
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll, { capture: true })
    }
  }, [threshold])

  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return
    scrollPageToTop()
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      aria-label="Scroll to top"
      title="Scroll to top"
      // Hide from tab order & a11y tree when invisible so screen readers
      // and keyboard users don't get a hidden control.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  )
}
