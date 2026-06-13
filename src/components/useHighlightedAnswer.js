import { useEffect, useState } from 'react'
import { highlightAnswerHtml } from './highlightAnswer'

/**
 * Re-highlight the answer HTML whenever the question or theme changes.
 * Returns the (possibly highlighted) HTML string ready for
 * dangerouslySetInnerHTML.
 */
export function useHighlightedAnswer(rawHtml) {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  })
  const [html, setHtml] = useState(rawHtml)

  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    const target = document.documentElement
    const observer = new MutationObserver(() => {
      const next = target.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
      setTheme((prev) => (prev === next ? prev : next))
    })
    observer.observe(target, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    // Reset to the raw HTML immediately so the answer never shows stale
    // highlighted output while the new question is being highlighted.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHtml(rawHtml)
    Promise.resolve(highlightAnswerHtml(rawHtml, theme))
      .then((out) => {
        if (!cancelled && out) setHtml(out)
      })
      .catch(() => { /* keep original */ })
    return () => {
      cancelled = true
    }
  }, [rawHtml, theme])

  return html
}
