/**
 * Conservative automated fixes for interview content audit findings.
 * Only touches patterns with high confidence of being errors.
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

const FILES = [
  'src/data/interviewQuestionsHTML.js',
  'src/data/interviewQuestionsCSS.js',
  'src/data/interviewQuestionsJS.js',
  'src/data/interviewQuestionsAngular.js',
  'src/data/interviewQuestionsReact.js',
  'src/data/interviewQuestionsPython.js',
  'src/data/interviewQuestionsDSA.js',
  'src/data/interviewQuestionsSQL.js',
  'src/data/interviewQuestionsSpring.js',
  'src/data/interviewQuestionsMicroservices.js',
  'src/data/interviewQuestionsDesignPatterns.js',
  'src/data/interviewQuestionsTypeScript.js',
]

// Fix malformed escapes: &lt;tag...> -> &lt;tag...&gt;
// Only when the tag name is a known HTML tag and the > is not inside an attribute.
const KNOWN_HTML_TAGS = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi',
  'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code',
  'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog',
  'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer',
  'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i',
  'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main',
  'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup',
  'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt',
  'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
  'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template',
  'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul',
  'var', 'video', 'wbr', 'svg', 'class',
]

function fixMalformedEscapes(text) {
  const tagPattern = KNOWN_HTML_TAGS.join('|')
  // Match &lt;tag ... > where > is a raw closing angle bracket and the
  // region does not cross a correctly-escaped &gt; terminator.
  const pattern = new RegExp(`&lt;(${tagPattern})\\b(?:(?!&gt;)[^>])*>`, 'gi')
  return text.replace(pattern, (match) => match.slice(0, -1) + '&gt;')
}

function fixGrammar(text) {
  // Remove leftover brand references
  return text
    .replace(/Trinits Technologies/g, 'My Company')
    .replace(/Trinits is a product based company/g, 'My site')
    .replace(/Trinits/g, 'My site')
}

for (const file of FILES) {
  const path = join(root, file)
  let content = readFileSync(path, 'utf8')
  const original = content

  content = fixMalformedEscapes(content)
  content = fixGrammar(content)

  if (content !== original) {
    writeFileSync(path, content, 'utf8')
    console.log(`Fixed ${file}`)
  } else {
    console.log(`No changes ${file}`)
  }
}
