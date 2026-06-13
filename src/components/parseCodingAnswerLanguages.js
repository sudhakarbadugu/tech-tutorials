const KNOWN_LANGUAGES = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'C#',
  'Go',
  'Rust',
  'Kotlin',
  'Scala',
  'Ruby',
  'PHP',
  'Swift'
]

const LANGUAGE_FROM_CLASS = {
  java: 'Java',
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  kotlin: 'Kotlin',
  scala: 'Scala',
  ruby: 'Ruby',
  php: 'PHP',
  swift: 'Swift'
}

const BLOCK_RE = /<strong>([^<]*)<\/strong>\s*(<pre[\s\S]*?<\/pre>)/gi

const LANGUAGE_ORDER = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'C#',
  'Go',
  'Rust',
  'Kotlin',
  'Scala',
  'Ruby',
  'PHP',
  'Swift'
]

function normalizeLangName(raw) {
  if (!raw) return raw
  const lower = raw.toLowerCase()
  if (lower === 'javascript') return 'JavaScript'
  if (lower === 'typescript') return 'TypeScript'
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()
}

function languageFromTitle(title) {
  const t = title.trim()
  for (const lang of KNOWN_LANGUAGES) {
    const escaped = lang.replace(/\+/g, '\\+').replace(/#/g, '\\#')
    const prefixRe = new RegExp(
      `^${escaped}(?:\\s+Implementation)?(?:\\s*[—–-]|\\s*:)`,
      'i'
    )
    if (prefixRe.test(t)) return normalizeLangName(lang)
  }
  return null
}

function languageFromCodeClass(preHtml) {
  const match = preHtml.match(/class="language-([^"]+)"/i)
  if (!match) return null
  return LANGUAGE_FROM_CLASS[match[1].toLowerCase()] || null
}

function languageFromCodeContent(preHtml) {
  const codeMatch = preHtml.match(/<code[^>]*>([\s\S]*?)<\/code>/i)
  if (!codeMatch) return null
  const code = codeMatch[1]
  if (/^\s*(import java|public class|void |int\[|class \w+)/m.test(code)) return 'Java'
  if (/^\s*(from |import |def )/m.test(code)) return 'Python'
  if (/^\s*(function |const |let |var |export )/m.test(code)) return 'JavaScript'
  return null
}

function detectBlockLanguage(title, preHtml) {
  return (
    languageFromTitle(title) ||
    languageFromCodeClass(preHtml) ||
    languageFromCodeContent(preHtml)
  )
}

function sortLanguages(languages) {
  return [...languages].sort((a, b) => {
    const ai = LANGUAGE_ORDER.indexOf(a)
    const bi = LANGUAGE_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })
}

/**
 * Parse coding interview answer HTML into prefix, per-language solution blocks, and suffix.
 * Returns { hasLanguageTabs: false } when fewer than two languages are present.
 */
export function parseCodingAnswerLanguages(html) {
  if (!html) return { hasLanguageTabs: false, html }

  const blocks = []
  const re = new RegExp(BLOCK_RE.source, 'gi')
  let match

  while ((match = re.exec(html)) !== null) {
    blocks.push({
      start: match.index,
      end: re.lastIndex,
      title: match[1],
      pre: match[2],
      language: detectBlockLanguage(match[1], match[2])
    })
  }

  if (blocks.length < 2) return { hasLanguageTabs: false, html }

  const languages = sortLanguages([
    ...new Set(blocks.map((b) => b.language).filter(Boolean))
  ])

  if (languages.length < 2) return { hasLanguageTabs: false, html }

  const prefix = html.slice(0, blocks[0].start)
  const suffix = html.slice(blocks[blocks.length - 1].end)

  const byLanguage = Object.fromEntries(
    languages.map((lang) => [
      lang,
      blocks
        .filter((b) => b.language === lang)
        .map((b) => `<strong>${b.title}</strong>\n${b.pre}`)
        .join('\n\n')
    ])
  )

  return {
    hasLanguageTabs: true,
    prefix,
    suffix,
    languages,
    byLanguage
  }
}