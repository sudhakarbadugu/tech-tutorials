/**
 * Lightweight client-side search index for tutorials and interviews.
 * No external dependencies; uses lowercased substring matching.
 */

import { tutorialData, getSubjectStructure } from './tutorialDataLoader'
import { interviewSubjects, interviewQuestions } from './interviewData'

function stripHtml(html) {
  if (!html) return ''
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function collectStringsFromSections(sections) {
  const parts = []
  if (!Array.isArray(sections)) return ''
  for (const section of sections) {
    if (!section) continue
    if (section.heading) parts.push(section.heading)
    if (section.content) {
      parts.push(...(Array.isArray(section.content) ? section.content : [section.content]))
    }
    if (section.code) parts.push(section.code)
    if (section.example?.code) parts.push(section.example.code)
    if (section.example?.output) parts.push(section.example.output)
  }
  return stripHtml(parts.join(' '))
}

export const SEARCH_TYPES = {
  TUTORIAL_TOPIC: 'tutorial-topic',
  TUTORIAL_CONTENT: 'tutorial-content',
  INTERVIEW_SUBJECT: 'interview-subject',
  INTERVIEW_QUESTION: 'interview-question',
}

let searchIndex = []
let indexBuilt = false

export function buildStaticSearchIndex() {
  if (indexBuilt) return searchIndex
  const items = []

  // Tutorial subjects, units, topics
  for (const [subjectKey, subject] of Object.entries(tutorialData)) {
    const structure = getSubjectStructure(subjectKey)
    items.push({
      type: SEARCH_TYPES.TUTORIAL_TOPIC,
      title: subject.title,
      subject: subjectKey,
      text: `${subject.title} ${subjectKey}`.toLowerCase(),
      url: `/tutorials/${subjectKey}`,
      meta: { subject: subjectKey },
    })

    for (const [unitKey, unit] of Object.entries(structure)) {
      items.push({
        type: SEARCH_TYPES.TUTORIAL_TOPIC,
        title: `${subject.title} › ${unit.title}`,
        subject: subjectKey,
        unit: unitKey,
        text: `${subject.title} ${unit.title}`.toLowerCase(),
        url: `/tutorials/${subjectKey}/${unitKey}`,
        meta: { subject: subjectKey, unit: unitKey },
      })

      for (const topic of unit.topics || []) {
        items.push({
          type: SEARCH_TYPES.TUTORIAL_TOPIC,
          title: `${subject.title} › ${unit.title} › ${topic.title}`,
          subject: subjectKey,
          unit: unitKey,
          topic: topic.id,
          text: `${subject.title} ${unit.title} ${topic.title} ${topic.id}`.toLowerCase(),
          url: `/tutorials/${subjectKey}/${unitKey}/${topic.id}`,
          meta: { subject: subjectKey, unit: unitKey, topic: topic.id },
        })
      }
    }
  }

  // Interview subjects
  for (const [subjectKey, subject] of Object.entries(interviewSubjects)) {
    items.push({
      type: SEARCH_TYPES.INTERVIEW_SUBJECT,
      title: subject.title,
      subject: subjectKey,
      text: `${subject.title} ${subject.description || ''} ${(subject.topics || []).join(' ')} ${subjectKey}`.toLowerCase(),
      url: `/interview/${subjectKey}`,
      meta: { subject: subjectKey },
    })
  }

  // Interview questions
  for (const [subjectKey, data] of Object.entries(interviewQuestions)) {
    if (!data?.questions) continue
    for (const [index, q] of data.questions.entries()) {
      items.push({
        type: SEARCH_TYPES.INTERVIEW_QUESTION,
        title: q.question,
        subject: subjectKey,
        text: `${q.question} ${stripHtml(q.answer || '')} ${(q.tags || []).join(' ')}`.toLowerCase(),
        url: `/interview/${subjectKey}`,
        meta: { subject: subjectKey, questionIndex: index },
      })
    }
  }

  searchIndex = items
  indexBuilt = true
  return items
}

export function addTutorialContentToIndex(subjectKey, content) {
  buildStaticSearchIndex()
  if (!content) return

  // Remove any previous content entries for this subject
  searchIndex = searchIndex.filter(
    (item) => !(item.type === SEARCH_TYPES.TUTORIAL_CONTENT && item.subject === subjectKey)
  )

  const subject = tutorialData[subjectKey]
  const subjectTitle = subject?.title || subjectKey

  for (const [unitKey, unit] of Object.entries(content)) {
    for (const [topicId, topic] of Object.entries(unit)) {
      const sections = topic?.sections || []
      const bodyText = collectStringsFromSections(sections).toLowerCase()
      if (!bodyText) continue

      searchIndex.push({
        type: SEARCH_TYPES.TUTORIAL_CONTENT,
        title: `${subjectTitle} › ${topic.title || topicId}`,
        subject: subjectKey,
        unit: unitKey,
        topic: topicId,
        text: `${topic.title || ''} ${topicId} ${bodyText}`.toLowerCase(),
        url: `/tutorials/${subjectKey}/${unitKey}/${topicId}`,
        meta: { subject: subjectKey, unit: unitKey, topic: topicId },
      })
    }
  }
}

export function searchAll(query, options = {}) {
  const term = query.trim().toLowerCase()
  if (!term) return []

  buildStaticSearchIndex()

  const limit = options.limit || 20
  const includeTypes = options.includeTypes || Object.values(SEARCH_TYPES)

  const matches = searchIndex
    .filter((item) => includeTypes.includes(item.type) && item.text.includes(term))
    .slice(0, limit)

  return matches
}

export function getGroupedSearchResults(query, options = {}) {
  const matches = searchAll(query, options)
  const groups = {}

  for (const item of matches) {
    if (!groups[item.type]) groups[item.type] = []
    groups[item.type].push(item)
  }

  return groups
}
