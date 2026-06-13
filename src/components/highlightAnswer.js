/**
 * Highlight <pre><code> blocks inside an answer HTML string using Shiki.
 *
 * The function is idempotent: pre/code blocks that have already been
 * highlighted (e.g., from a previous render) are skipped.
 *
 * Returns the modified HTML. On any error, the original HTML is returned.
 */

import { resolveLanguage } from './codeBlockUtils'

let highlighterPromise = null

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = import('shiki').then(async (mod) => {
      const { createHighlighter } = mod
      return createHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: [
          'javascript', 'typescript', 'jsx', 'tsx',
          'python', 'java', 'kotlin', 'go', 'rust', 'c', 'cpp', 'csharp',
          'html', 'css', 'scss',
          'json', 'yaml', 'xml', 'markdown',
          'sql', 'graphql',
          'bash', 'shell', 'powershell',
          'plaintext',
        ],
      })
    })
  }
  return highlighterPromise
}

const DECODE_MAP = [
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&quot;', '"'],
  ['&#39;', "'"],
  ['&amp;', '&'],
]

function decode(s) {
  let out = s
  for (const [from, to] of DECODE_MAP) {
    if (out.includes(from)) out = out.split(from).join(to)
  }
  return out
}

/**
 * Replace <pre><code class="language-xxx">...</code></pre> with
 * Shiki-highlighted output. Inline <code> snippets are left untouched.
 */
export async function highlightAnswerHtml(html, currentTheme = 'light') {
  if (!html || typeof window === 'undefined') return html
  if (!/<pre[\s>]/i.test(html)) return html

  let hl
  try {
    hl = await getHighlighter()
  } catch {
    return html
  }

  const theme = currentTheme === 'dark' ? 'github-dark' : 'github-light'

  // Match <pre><code class="...">...</code></pre> (non-greedy across newlines)
  const blockPattern = /<pre\b([^>]*)>\s*<code\b([^>]*)>([\s\S]*?)<\/code>\s*<\/pre>/gi

  return html.replace(blockPattern, (_match, preAttrs, codeAttrs, raw) => {
    if (/class\s*=\s*"[^"]*shiki/i.test(preAttrs + codeAttrs)) return _match

    const attrs = (preAttrs + ' ' + codeAttrs).toLowerCase()
    let lang
    const langMatch = attrs.match(/language-([a-z0-9+#-]+)/i)
    if (langMatch) {
      lang = resolveLanguage(langMatch[1], decode(raw))
    } else {
      lang = resolveLanguage(null, decode(raw))
    }

    const code = decode(raw).replace(/\r\n/g, '\n')
    try {
      return hl.codeToHtml(code, { lang, theme })
    } catch {
      return _match
    }
  })
}

export function highlightAnswerHtmlSync(html) {
  return html
}
