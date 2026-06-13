export const categoryGradients = {
  backend: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)',
  web: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
  database: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
  mobile: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',
  devops: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
  fundamentals: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
  frameworks: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
  ai: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)'
}

export const categoryColors = {
  backend: '#16a34a',
  web: '#2563eb',
  database: '#d97706',
  mobile: '#db2777',
  devops: '#4f46e5',
  fundamentals: '#7c3aed',
  frameworks: '#0d9488',
  ai: '#db2777'
}

export const categoryBgColors = {
  backend: '#dcfce7',
  web: '#dbeafe',
  database: '#fef3c7',
  mobile: '#fce7f3',
  devops: '#e0e7ff',
  fundamentals: '#f3e8ff',
  frameworks: '#ccfbf1',
  ai: '#fce7f3'
}

export const difficultyConfig = {
  Beginner: { color: '#16a34a', bg: '#dcfce7', border: '#86efac', label: 'Beginner' },
  Intermediate: { color: '#d97706', bg: '#fef3c7', border: '#fcd34d', label: 'Intermediate' },
  Advanced: { color: '#dc2626', bg: '#fee2e2', border: '#fca5a5', label: 'Advanced' },
  Mixed: { color: '#4f46e5', bg: '#e0e7ff', border: '#a5b4fc', label: 'Mixed' }
}

export const PROGRESS_KEY = 'interviewProgress'
export const BOOKMARKS_KEY = 'interviewBookmarks'

export function readAllProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}')
  } catch {
    return {}
  }
}

export function getSubjectProgress(subjectId) {
  const progress = readAllProgress()
  const viewed = progress[subjectId] || []
  return { viewed: viewed.length, viewedIndices: viewed }
}

export const POPULAR_INTERVIEW_IDS = ['react', 'java', 'javascript', 'dsa', 'spring-boot', 'sql']

export function getRecentInterviewSubject(interviewSubjects) {
  try {
    const all = Object.entries(readAllProgress())
      .filter(([, viewed]) => viewed.length > 0)
      .sort((a, b) => b[1].length - a[1].length)

    if (all.length > 0) {
      const [id, viewed] = all[0]
      const sub = interviewSubjects[id]
      if (sub) {
        return {
          id,
          title: sub.title.replace(' Interview Questions', ''),
          total: sub.totalQuestions,
          viewed: viewed.length
        }
      }
    }
  } catch {
    // ignore storage errors
  }
  return null
}

export function getInterviewCategoryEntries(interviewCategories, interviewSubjects) {
  return Object.entries(interviewCategories)
    .map(([id, cat]) => ({
      id,
      title: cat.title,
      color: categoryColors[id] || '#2563eb',
      subjects: cat.subjects.filter(sid => interviewSubjects[sid]?.totalQuestions > 0)
    }))
    .filter(cat => cat.subjects.length > 0)
}

export function getInterviewStats(interviewCategories, interviewSubjects) {
  const categories = getInterviewCategoryEntries(interviewCategories, interviewSubjects)
  const totalSubjects = categories.reduce((sum, cat) => sum + cat.subjects.length, 0)
  const totalQuestions = Object.values(interviewSubjects).reduce(
    (sum, sub) => sum + (sub.totalQuestions || 0),
    0
  )
  return { categories, totalSubjects, totalQuestions, categoryCount: categories.length }
}

export function getPopularInterviewSubjects(interviewSubjects, ids = POPULAR_INTERVIEW_IDS) {
  return ids
    .filter(id => interviewSubjects[id]?.totalQuestions > 0)
    .map(id => ({
      id,
      title: interviewSubjects[id].title.replace(' Interview Questions', '')
    }))
}

export function getSameCategorySubjects(interviewCategories, interviewSubjects, currentSubject, limit = 6) {
  const entry = Object.entries(interviewCategories).find(([, cat]) =>
    cat.subjects.includes(currentSubject)
  )
  if (!entry) return { categoryTitle: null, subjects: [] }

  const [, cat] = entry
  const subjects = cat.subjects
    .filter(id => id !== currentSubject && interviewSubjects[id]?.totalQuestions > 0)
    .slice(0, limit)
    .map(id => ({
      id,
      title: interviewSubjects[id].title.replace(' Interview Questions', '')
    }))

  return { categoryTitle: cat.title, subjects }
}