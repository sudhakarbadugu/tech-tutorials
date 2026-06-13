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
export default function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // window may be undefined in some test environments
      if (typeof window === 'undefined') return
      setVisible(window.scrollY > threshold)
    }

    // Run once on mount in case the page is already scrolled
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
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
