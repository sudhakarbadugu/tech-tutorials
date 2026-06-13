const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, '..', 'src', 'data')

function decodeEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ')
}

function cleanText(html) {
  return stripTags(decodeEntities(html)).replace(/\s+/g, ' ').trim()
}

function extractKeyPoints(answer) {
  // 1. Try list items first; they usually contain concise takeaways.
  const listItems = []
  const liRe = /<li>([\s\S]*?)<\/li>/gi
  let liMatch
  while ((liMatch = liRe.exec(answer)) !== null) {
    const text = cleanText(liMatch[1])
    if (text.length >= 25 && text.length <= 220) {
      listItems.push(text)
    }
  }
  if (listItems.length > 0) {
    return listItems.slice(0, 3)
  }

  // 2. Fall back to complete sentences from the answer text.
  const text = cleanText(answer)
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || [])
    .map((s) => s.trim())
    .filter((s) => s.length >= 35 && s.length <= 220)
  if (sentences.length > 0) {
    return sentences.slice(0, 2)
  }

  // 3. Last resort: chunk the first clean line.
  const firstLine = text.split(/\n|\. /)[0].trim()
  if (firstLine.length > 10) {
    return [firstLine.slice(0, 200)]
  }
  return ['Review the detailed answer above.']
}

async function processFile(fileName) {
  const filePath = path.join(DATA_DIR, fileName)
  const originalSource = fs.readFileSync(filePath, 'utf8')

  // Extract the export name, e.g. "export const htmlQuestions = {...}"
  const exportMatch = originalSource.match(/export\s+const\s+(\w+)\s*=\s*/)
  if (!exportMatch) {
    console.warn(`Skipping ${fileName}: no export const found`)
    return false
  }
  const exportName = exportMatch[1]

  const module = await import(filePath)
  const data = module[exportName]
  if (!data || !Array.isArray(data.questions)) {
    console.warn(`Skipping ${fileName}: unexpected shape`)
    return false
  }

  let changed = false
  for (const q of data.questions) {
    if (!Array.isArray(q.keyPoints) || q.keyPoints.length === 0) {
      q.keyPoints = extractKeyPoints(q.answer || '')
      changed = true
    }
  }

  if (!changed) {
    return false
  }

  const header = `// Auto-generated interview questions with key-points summaries\n// Generated: ${new Date().toISOString()}\n\n`
  const output = header + `export const ${exportName} = ` + JSON.stringify(data, null, 2) + '\n'
  fs.writeFileSync(filePath, output, 'utf8')
  return true
}

async function main() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((name) => name.startsWith('interviewQuestions') && name.endsWith('.js'))

  let changedCount = 0
  for (const file of files) {
    const changed = await processFile(file)
    if (changed) {
      console.log('Updated', file)
      changedCount++
    }
  }
  console.log(`\nDone. ${changedCount} file(s) updated.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
