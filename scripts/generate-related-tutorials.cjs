const fs = require('fs')
const path = require('path')

const STOPWORDS = new Set([
  'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'who', 'boy', 'did', 'she', 'use', 'her', 'way', 'many', 'oil', 'sit', 'set', 'run', 'eat', 'far', 'sea', 'eye', 'ask', 'own', 'say', 'too', 'any', 'try', 'let', 'put', 'end', 'why', 'turn', 'here', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'where', 'help', 'much', 'before', 'move', 'right', 'too', 'means', 'old', 'any', 'same', 'tell', 'boy', 'follow', 'came', 'want', 'show', 'also', 'around', 'farm', 'three', 'small', 'set', 'put', 'end', 'does', 'another', 'well', 'large', 'must', 'big', 'even', 'such', 'because', 'turn', 'here', 'why', 'asked', 'went', 'men', 'read', 'need', 'land', 'different', 'home', 'us', 'move', 'try', 'kind', 'hand', 'picture', 'again', 'change', 'off', 'play', 'spell', 'air', 'away', 'animal', 'house', 'point', 'page', 'letter', 'mother', 'answer', 'found', 'study', 'still', 'learn', 'should', 'america', 'world',
  // interview-specific generics
  'what', 'how', 'explain', 'difference', 'between', 'with', 'without', 'using', 'used', 'when', 'which', 'there', 'their', 'they', 'them', 'then', 'than', 'that', 'this', 'these', 'those', 'have', 'from', 'into', 'over', 'after', 'before', 'during', 'about', 'above', 'below', 'only', 'some', 'time', 'will', 'would', 'could', 'should', 'called', 'example', 'examples', 'interview', 'question'
])

function normalize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;|&gt;|&amp;|&quot;|&#39;/g, ' ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(text) {
  return normalize(text)
    .split(/[\s-]+/)
    .map((t) => t.replace(/^-+|-+$/g, ''))
    .filter((t) => t.length >= 3 && !STOPWORDS.has(t))
}

function topicKeywords(subjectKey, subjectTitle, unitKey, unitTitle, topic) {
  const bag = new Set()
  tokenize(subjectTitle).forEach((t) => bag.add(t))
  tokenize(unitTitle).forEach((t) => bag.add(t))
  tokenize(topic.title).forEach((t) => bag.add(t))
  tokenize(topic.id).forEach((t) => bag.add(t))
  tokenize(unitKey).forEach((t) => bag.add(t))
  // Keep the original subject key as a strong signal
  bag.add(subjectKey.toLowerCase())
  return Array.from(bag)
}

async function main() {
  const { interviewQuestions } = await import(path.join(__dirname, '..', 'src', 'data', 'interviewData.js'))
  const { tutorialData } = await import(path.join(__dirname, '..', 'src', 'data', 'tutorialDataLoader.js'))

  // Build tutorial topic index
  const topics = []
  for (const [subjectKey, subject] of Object.entries(tutorialData)) {
    const subjectTitle = subject.title || ''
    for (const [unitKey, unit] of Object.entries(subject.structure || {})) {
      for (const topic of unit.topics) {
        topics.push({
          subject: subjectKey,
          unit: unitKey,
          topic: topic.id,
          title: topic.title,
          unitTitle: unit.title,
          subjectTitle,
          keywords: topicKeywords(subjectKey, subjectTitle, unitKey, unit.title, topic),
        })
      }
    }
  }

  const result = {}

  function canLinkToTutorial(interviewSubject, tutorialSubject) {
    if (interviewSubject === tutorialSubject) return true
    // The Java tutorial should only surface Java and Spring Boot interview
    // questions; other subjects are not relevant there.
    if (tutorialSubject === 'java') {
      return interviewSubject === 'spring-boot'
    }
    // Java and Spring Boot interview questions should not be linked to
    // unrelated subjects such as AI/ML/data-science tutorials.
    if (interviewSubject === 'java' || interviewSubject === 'spring-boot') {
      return tutorialSubject === 'java'
    }
    // Avoid mapping interview questions to unrelated tutorial subjects.
    return false
  }

  for (const [subject, data] of Object.entries(interviewQuestions)) {
    result[subject] = {}
    data.questions.forEach((q, index) => {
      const text = normalize([
        q.question,
        q.answer,
        ...(q.tags || []),
        ...(q.keyPoints || []),
      ].join(' '))

      const interviewSubject = subject.toLowerCase()

      const scores = topics
        .filter((t) => canLinkToTutorial(interviewSubject, t.subject))
        .map((t) => {
          let score = 0
          // Strongly prefer the same subject area
          if (t.subject === interviewSubject) {
            score += 10
          }
        // Exact phrase matches for topic title and unit title are stronger
        const phrases = [t.title, t.unitTitle, t.subjectTitle].map((p) => normalize(p))
        for (const phrase of phrases) {
          if (phrase.length > 3 && text.includes(phrase)) {
            score += phrase.split(' ').length * 2
          }
        }
        // Keyword token matches
        for (const kw of t.keywords) {
          if (text.includes(kw)) score += 1
        }
        return { topic: t, score }
      })

      scores.sort((a, b) => b.score - a.score)
      const best = scores
        .filter((s) => s.score > 0)
        .slice(0, 3)
        .map((s) => ({
          subject: s.topic.subject,
          unit: s.topic.unit,
          topic: s.topic.topic,
          title: s.topic.title,
        }))

      if (best.length > 0) {
        result[subject][index] = best
      }
    })
  }

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'interviewRelatedTutorials.js')
  const header = `// Auto-generated mapping from interview questions to related tutorial topics\n// Generated: ${new Date().toISOString()}\n\n`
  fs.writeFileSync(outputPath, header + 'export const interviewRelatedTutorials = ' + JSON.stringify(result, null, 2) + '\n', 'utf8')
  console.log('Wrote', outputPath)

  // Stats
  let total = 0
  let linked = 0
  for (const subject of Object.keys(result)) {
    for (const idx of Object.keys(result[subject])) {
      total += 1
      linked += 1
    }
  }
  console.log(`Linked ${linked} questions to at least one tutorial topic.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
