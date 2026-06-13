const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, '..', 'src', 'data')

function escapeCodeBlocks(source) {
  // Escape < and > inside <code>...</code> blocks while leaving the code tags
  // themselves intact. Convert <br> tags inside code into real newlines first,
  // and normalize &nbsp; to spaces so code is readable after escaping.
  return source.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (match) => {
    const openEnd = match.indexOf('>') + 1
    const closeStart = match.lastIndexOf('<')
    const openTag = match.slice(0, openEnd)
    const inner = match.slice(openEnd, closeStart)

    const cleaned = inner
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/&nbsp;/g, ' ')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    return `${openTag}${cleaned}</code>`
  })
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  const fixed = escapeCodeBlocks(original)
  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, 'utf8')
    return true
  }
  return false
}

const files = fs
  .readdirSync(DATA_DIR)
  .filter((name) => name.startsWith('interviewQuestions') && name.endsWith('.js'))

let changedCount = 0
for (const file of files) {
  const changed = processFile(path.join(DATA_DIR, file))
  if (changed) {
    console.log('Updated', file)
    changedCount++
  }
}

console.log(`\nDone. ${changedCount} file(s) updated.`)
