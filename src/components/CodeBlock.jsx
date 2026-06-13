import { useEffect, useRef, useState } from 'react'
import { Copy, Check, Terminal, FileCode } from 'lucide-react'
import { resolveLanguage, SUPPORTED_LANGS } from './codeBlockUtils'

/**
 * Theme-aware syntax-highlighted code block.
 *
 * - Lazy-loads Shiki on first use (does not block the initial bundle).
 * - Re-highlights automatically when the theme changes.
 * - Renders the unhighlighted, monospaced code first so the UI is usable
 *   immediately, then swaps in the highlighted HTML once Shiki is ready.
 * - Falls back to a plain code block on any error.
 *
 * Props:
 *   code             string  - the source code to highlight
 *   language         string? - optional explicit language hint
 *   title            string? - optional heading shown in the header bar
 *   showLineNumbers  boolean - default false
 *   showCopy         boolean - default true
 */

let highlighterPromise = null
let highlighterInstance = null

async function getHighlighter() {
  if (highlighterInstance) return highlighterInstance
  if (!highlighterPromise) {
    highlighterPromise = import('shiki').then(async (mod) => {
      const { createHighlighter } = mod
      const hl = await createHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: SUPPORTED_LANGS,
      })
      highlighterInstance = hl
      return hl
    })
  }
  return highlighterPromise
}

function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = false,
  showCopy = true,
}) {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  })
  const [highlighted, setHighlighted] = useState({ light: null, dark: null })
  const [copied, setCopied] = useState(false)
  const codeRef = useRef(null)

  // React to theme changes (Header toggles data-theme on <html>).
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

  const lang = resolveLanguage(language, code)

  useEffect(() => {
    let cancelled = false
    async function highlight() {
      try {
        const hl = await getHighlighter()
        if (cancelled) return
        const lightHtml = hl.codeToHtml(code, { lang, theme: 'github-light' })
        const darkHtml = hl.codeToHtml(code, { lang, theme: 'github-dark' })
        if (cancelled) return
        setHighlighted({ light: lightHtml, dark: darkHtml })
      } catch {
        // Stay on plain code on failure.
      }
    }
    highlight()
    return () => {
      cancelled = true
    }
  }, [code, lang])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* noop */ }
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const html = theme === 'dark' ? highlighted.dark : highlighted.light

  return (
    <div className="code-block" data-language={lang} data-theme={theme}>
      {(title || showCopy || lang !== 'plaintext') && (
        <div className="code-block-header">
          <div className="code-block-title">
            {lang !== 'plaintext'
              ? <FileCode size={14} aria-hidden="true" />
              : <Terminal size={14} aria-hidden="true" />}
            <span>{title || lang.toUpperCase()}</span>
          </div>
          {showCopy && (
            <button
              type="button"
              className="code-block-copy"
              onClick={handleCopy}
              aria-label={copied ? 'Copied!' : 'Copy code to clipboard'}
              title="Copy to clipboard"
            >
              {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              <span className="sr-only">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          )}
        </div>
      )}
      <div className={`code-block-body ${showLineNumbers ? 'with-line-numbers' : ''}`}>
        {html ? (
          <div
            ref={codeRef}
            className="code-block-highlighted"
            // Shiki output is built locally from our own content.
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="code-block-plain">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default CodeBlock
