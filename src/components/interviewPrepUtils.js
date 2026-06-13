import { BOOKMARKS_KEY } from './interviewUi'

export const PATH_PROGRESS_KEY = 'interviewPathProgress'

export function flattenDetails(html) {
  if (!html) return html
  return html
    .replace(/<details[^>]*>/gi, '<div class="answer-detail">')
    .replace(/<\/details>/gi, '</div>')
    .replace(/<summary>/gi, '<div class="answer-summary">')
    .replace(/<\/summary>/gi, '</div>')
}

export function shuffleArray(items) {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function readAllBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
  } catch {
    return {}
  }
}

export function getBookmarkedQuestions(interviewQuestions, interviewSubjects) {
  const bookmarks = readAllBookmarks()
  const items = []

  for (const [subjectId, indices] of Object.entries(bookmarks)) {
    const questions = interviewQuestions[subjectId]?.questions
    const meta = interviewSubjects[subjectId]
    if (!questions || !Array.isArray(indices)) continue

    for (const idx of indices) {
      if (questions[idx]) {
        items.push({
          subjectId,
          subjectTitle: meta?.title?.replace(' Interview Questions', '') || subjectId,
          subjectIcon: meta?.icon || '📘',
          index: idx,
          question: questions[idx]
        })
      }
    }
  }

  return items
}

export function pickRandomQuestions(questions, count, options = {}) {
  const { difficulty = 'all', excludeIndices = [] } = options
  const excluded = new Set(excludeIndices)

  let pool = questions
    .map((q, i) => ({ q, i }))
    .filter(({ i }) => !excluded.has(i))

  if (difficulty && difficulty !== 'all' && difficulty !== 'Mixed') {
    const filtered = pool.filter(({ q }) => q.difficulty === difficulty)
    if (filtered.length >= count) pool = filtered
  }

  if (difficulty === 'Mixed') {
    const byDiff = { Beginner: [], Intermediate: [], Advanced: [] }
    pool.forEach(entry => {
      if (byDiff[entry.q.difficulty]) byDiff[entry.q.difficulty].push(entry)
    })
    const mixed = shuffleArray([
      ...shuffleArray(byDiff.Beginner).slice(0, Math.ceil(count * 0.35)),
      ...shuffleArray(byDiff.Intermediate).slice(0, Math.ceil(count * 0.4)),
      ...shuffleArray(byDiff.Advanced).slice(0, Math.floor(count * 0.25))
    ])
    if (mixed.length >= count) return mixed.slice(0, count)
    pool = mixed.length ? mixed : pool
  }

  return shuffleArray(pool).slice(0, Math.min(count, pool.length))
}

export function readPathProgress(pathId) {
  try {
    const all = JSON.parse(localStorage.getItem(PATH_PROGRESS_KEY) || '{}')
    return all[pathId] || { completedDays: [], dayQuestions: {}, startedAt: null }
  } catch {
    return { completedDays: [], dayQuestions: {}, startedAt: null }
  }
}

export function savePathProgress(pathId, progress) {
  try {
    const all = JSON.parse(localStorage.getItem(PATH_PROGRESS_KEY) || '{}')
    all[pathId] = progress
    localStorage.setItem(PATH_PROGRESS_KEY, JSON.stringify(all))
  } catch {
    // ignore storage errors
  }
}

export function getUsedPathIndices(progress) {
  const used = new Set()
  Object.values(progress.dayQuestions || {}).forEach(indices => {
    indices.forEach(i => used.add(i))
  })
  return used
}

export function ensureDayQuestions(path, dayNumber, questions, progress) {
  const dayConfig = path.days.find(d => d.day === dayNumber)
  if (!dayConfig) return []

  if (!progress.dayQuestions) progress.dayQuestions = {}
  if (!progress.completedDays) progress.completedDays = []

  if (!progress.startedAt) {
    progress.startedAt = Date.now()
  }

  if (!progress.dayQuestions[dayNumber]) {
    const used = getUsedPathIndices(progress)
    const picked = pickRandomQuestions(questions, dayConfig.count, {
      difficulty: dayConfig.difficulty,
      excludeIndices: [...used]
    })
    progress.dayQuestions[dayNumber] = picked.map(p => p.i)
    savePathProgress(path.id, progress)
  }

  return progress.dayQuestions[dayNumber]
    .map(i => ({ q: questions[i], i }))
    .filter(entry => entry.q)
}

export function markDayComplete(pathId, dayNumber) {
  const progress = readPathProgress(pathId)
  if (!progress.completedDays.includes(dayNumber)) {
    progress.completedDays = [...progress.completedDays, dayNumber].sort((a, b) => a - b)
    savePathProgress(pathId, progress)
  }
  return progress
}

export function getPathCompletionPercent(path, progress) {
  if (!path?.days?.length) return 0
  return Math.round((progress.completedDays.length / path.days.length) * 100)
}

export function formatTimer(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}