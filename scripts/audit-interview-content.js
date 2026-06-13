/**
 * Interview content audit
 * Checks for common grammar issues and HTML tag escaping problems.
 */

import {
  interviewQuestions,
} from '../src/data/interviewData.js'

// Tags that, when appearing raw in an answer, are very likely meant to be
// escaped as code examples rather than rendered as HTML.
// Note: <p> is intentionally excluded because it is commonly used as real
// paragraph formatting in answer HTML.
const RAW_TAGS_TO_FLAG = [
  'div', 'span', 'a', 'button', 'label', 'input', 'img',
  'h1', 'h2', 'h3',
  'header', 'nav', 'main', 'article', 'section', 'aside', 'footer',
  'form', 'figure', 'figcaption', 'time', 'mark', 'canvas', 'svg',
  'video', 'audio', 'iframe', 'script', 'style', 'link', 'meta', 'title',
  'body', 'html', 'head',
]

// Don't flag likely-intentional links/images as escaping errors.
const rawTagPattern = new RegExp(
  `<(${RAW_TAGS_TO_FLAG.join('|')})\\b(?:(?!href=|src=)[^>])*>`,
  'gi'
)

// Find malformed escapes: &lt;tag> closed with a raw ">" instead of &gt;.
// We scan for each &lt; and check whether the next terminator is a raw >
// (malformed) or &gt; (correct).
function* findMalformedEscapes(text) {
  let pos = 0
  while (true) {
    const start = text.indexOf('&lt;', pos)
    if (start === -1) return

    const nextGtEntity = text.indexOf('&gt;', start + 4)
    const nextRawGt = text.indexOf('>', start + 4)

    // No terminator found
    if (nextGtEntity === -1 && nextRawGt === -1) return

    // If raw > comes before &gt;, it's malformed.
    // Skip > that is preceded by = (e.g. =>, >=) to avoid false positives in code.
    const charBeforeGt = nextRawGt > 0 ? text[nextRawGt - 1] : ''
    if (
      nextRawGt !== -1 &&
      (nextGtEntity === -1 || nextRawGt < nextGtEntity) &&
      charBeforeGt !== '='
    ) {
      const tagMatch = text.slice(start + 4, nextRawGt).match(/^([a-z0-9]+)\b/i)
      if (tagMatch && !/^\d+$/.test(tagMatch[1])) {
        yield {
          tag: tagMatch[1].toLowerCase(),
          full: text.slice(start, nextRawGt + 1),
        }
      }
      pos = nextRawGt + 1
    } else {
      // Correctly escaped; move past &gt;
      pos = nextGtEntity + 4
    }
  }
}

const GRAMMAR_PATTERNS = [
  {
    name: 'Plural subject + singular verb "starts"',
    pattern: /\b(elements?|items?|they|we|inline|block)s?\b[^,.]{0,60}\bstarts\b/gi,
    example: 'Block level elements always starts',
  },
  {
    name: '"are always starts"',
    pattern: /\bare always starts\b/gi,
    example: 'Inline elements are always starts',
  },
  {
    name: '"angel brackets" typo',
    pattern: /\bangel brackets?\b/gi,
    example: 'angel brackets',
  },
  {
    name: 'Awkward "Margin and top and bottom"',
    pattern: /\bmargin and top and bottom\b/gi,
    example: 'Margin and top and bottom are applicable',
  },
  {
    name: 'Awkward "margin top and bottom"',
    pattern: /\bmargin top and bottom\b/gi,
    example: 'margin top and bottom are not applicable',
  },
  {
    name: 'Awkward "Width and height are applicable"',
    pattern: /\bwidth and height are applicable\b/gi,
    example: 'Width and height are applicable',
  },
  {
    name: 'Awkward "width and height are not applicable"',
    pattern: /\bwidth and height are not applicable\b/gi,
    example: 'width and height are not applicable',
  },
  {
    name: 'Singular "It will" with plural subject nearby',
    pattern: /\b(Block|Inline|They|Elements)\b[^.]{0,40}\bIt will\b/gi,
    example: 'Block level elements ... It will occupy',
  },
  {
    name: 'Awkward "Next items will be placed"',
    pattern: /\bnext items will be placed\b/gi,
    example: 'Next items will be placed at the bottom',
  },
  {
    name: 'Awkward "placed at the same line"',
    pattern: /\bat the same line\b/gi,
    example: 'placed at the same line',
  },
  {
    name: 'Awkward "placed at the bottom"',
    pattern: /\bat the bottom\b/gi,
    example: 'placed at the bottom',
  },
  {
    name: 'Missing article "What is block level element?"',
    pattern: /What is (block|inline|semantic|non-semantic) level element\?/gi,
    example: 'What is block level element?',
  },
  {
    name: 'Double comma',
    pattern: /,\s*,/g,
    example: 'form>, , <figure',
  },
  {
    name: '" Trinits" leftover brand reference',
    pattern: /Trinits/g,
    example: 'Trinits Technologies',
  },
]

const findings = []

for (const [subject, data] of Object.entries(interviewQuestions)) {
  if (!data?.questions) continue

  for (const [index, q] of data.questions.entries()) {
    const label = `${subject}[${index}]`
    const questionText = q.question || ''
    const answerText = q.answer || ''
    const combined = `${questionText} ${answerText}`

    // Raw HTML tags that should probably be escaped
    const rawMatches = [...answerText.matchAll(rawTagPattern)]
    for (const match of rawMatches) {
      findings.push({
        subject,
        index,
        label,
        type: 'html-escaping',
        issue: `Unescaped <${match[1].toLowerCase()}> tag in answer`,
        snippet: truncate(match[0], 60),
      })
    }

    // Malformed escaping: &lt;tag> without &gt;
    for (const match of findMalformedEscapes(answerText)) {
      findings.push({
        subject,
        index,
        label,
        type: 'html-escaping',
        issue: `Malformed escape: &lt;${match.tag}> without &gt;`,
        snippet: truncate(match.full, 60),
      })
    }

    // Malformed self-closing: &lt;tag/> should be &lt;tag /&gt;
    const malformedSelfClosePattern = /&lt;([a-z0-9]+)\b[^>]*\/>/gi
    const malformedSelfClose = [...answerText.matchAll(malformedSelfClosePattern)]
    for (const match of malformedSelfClose) {
      findings.push({
        subject,
        index,
        label,
        type: 'html-escaping',
        issue: `Malformed self-closing escape: &lt;${match[1].toLowerCase()}/>`,
        snippet: truncate(match[0], 60),
      })
    }

    // Grammar checks
    for (const { name, pattern } of GRAMMAR_PATTERNS) {
      const matches = [...combined.matchAll(pattern)]
      for (const match of matches) {
        findings.push({
          subject,
          index,
          label,
          type: 'grammar',
          issue: name,
          snippet: truncate(match[0], 80),
        })
      }
    }
  }
}

function truncate(str, max) {
  if (str.length <= max) return str
  return str.slice(0, max - 1) + '…'
}

// Summarize
const byType = { grammar: 0, 'html-escaping': 0 }
const bySubject = {}
for (const f of findings) {
  byType[f.type]++
  bySubject[f.subject] = (bySubject[f.subject] || 0) + 1
}

console.log('=== Interview Content Audit Report ===\n')
console.log(`Total findings: ${findings.length}`)
console.log(`  Grammar issues: ${byType.grammar}`)
console.log(`  HTML escaping issues: ${byType['html-escaping']}\n`)

console.log('Findings by subject:')
for (const [subject, count] of Object.entries(bySubject).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${subject.padEnd(18)} ${count}`)
}

console.log('\n=== Detailed findings ===\n')
for (const f of findings) {
  console.log(`[${f.type.toUpperCase()}] ${f.label}: ${f.issue}`)
  console.log(`  snippet: "${f.snippet}"`)
  console.log()
}

// Write JSON report for easier downstream processing
import { writeFileSync } from 'fs'
writeFileSync(
  'audit-interview-content-report.json',
  JSON.stringify({ summary: { total: findings.length, byType, bySubject }, findings }, null, 2)
)
console.log('JSON report written to audit-interview-content-report.json')
