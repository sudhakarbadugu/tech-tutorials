import { describe, it, expect, beforeEach } from 'vitest'
import { studyPaths, getStudyPath } from './interviewStudyPaths'
import { interviewQuestions, interviewSubjects } from './interviewData'
import {
  pickRandomQuestions,
  getPathCompletionPercent,
  ensureDayQuestions,
  readPathProgress,
  getUsedPathIndices
} from '../components/interviewPrepUtils'

const VALID_DAY_DIFFICULTIES = new Set(['Beginner', 'Intermediate', 'Advanced', 'Mixed'])

describe('interviewStudyPaths', () => {
  it('defines all four curated prep paths', () => {
    expect(studyPaths.map(p => p.id)).toEqual([
      'react-2-week',
      'java-2-week',
      'javascript-1-week',
      'spring-2-week'
    ])
  })

  it('returns null for unknown path ids', () => {
    expect(getStudyPath('missing')).toBeNull()
  })

  it.each(studyPaths.map(p => p.id))('path %s references a valid subject', (pathId) => {
    const path = getStudyPath(pathId)
    expect(path).toBeTruthy()
    expect(interviewSubjects[path.subject]?.totalQuestions).toBeGreaterThan(0)
    expect(path.days.length).toBe(path.durationDays)
    expect(path.title).toBeTruthy()
    expect(path.description.length).toBeGreaterThan(20)
    expect(path.gradient).toMatch(/linear-gradient/)
  })

  it.each(studyPaths.map(p => p.id))('path %s has sequential valid day configs', (pathId) => {
    const path = getStudyPath(pathId)
    path.days.forEach((day, index) => {
      expect(day.day).toBe(index + 1)
      expect(day.title.length).toBeGreaterThan(0)
      expect(day.count).toBeGreaterThan(0)
      expect(VALID_DAY_DIFFICULTIES.has(day.difficulty)).toBe(true)
    })
  })

  it.each(studyPaths.map(p => p.id))(
    'path %s total planned questions fit within subject pool',
    (pathId) => {
      const path = getStudyPath(pathId)
      const poolSize = interviewQuestions[path.subject].questions.length
      const planned = path.days.reduce((sum, day) => sum + day.count, 0)
      expect(planned).toBeLessThanOrEqual(poolSize)
    }
  )

  it('curves difficulty from beginner toward advanced', () => {
    const react = getStudyPath('react-2-week')
    const first = react.days[0].difficulty
    const last = react.days[react.days.length - 1].difficulty
    expect(first).toBe('Beginner')
    expect(last).toBe('Mixed')
  })

  it('includes intermediate days before advanced days in 2-week paths', () => {
    for (const pathId of ['react-2-week', 'java-2-week', 'spring-2-week']) {
      const path = getStudyPath(pathId)
      const firstAdvanced = path.days.findIndex(d => d.difficulty === 'Advanced')
      const lastIntermediate = path.days.map(d => d.difficulty).lastIndexOf('Intermediate')
      expect(firstAdvanced).toBeGreaterThan(lastIntermediate)
    }
  })
})

describe('interviewPrepUtils paths', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('picks random questions without duplicates', () => {
    const questions = interviewQuestions.react.questions
    const picked = pickRandomQuestions(questions, 10, { difficulty: 'Beginner' })
    const indices = picked.map(p => p.i)
    expect(new Set(indices).size).toBe(indices.length)
    expect(picked.length).toBeLessThanOrEqual(10)
  })

  it('stores stable day question sets', () => {
    const path = getStudyPath('javascript-1-week')
    const questions = interviewQuestions.javascript.questions
    const progress = { completedDays: [], dayQuestions: {}, startedAt: null }

    const first = ensureDayQuestions(path, 1, questions, progress)
    const second = ensureDayQuestions(path, 1, questions, readPathProgress(path.id))

    expect(first.map(f => f.i)).toEqual(second.map(s => s.i))
    expect(first.length).toBe(path.days[0].count)
  })

  it('computes path completion percent', () => {
    const path = getStudyPath('react-2-week')
    const progress = { completedDays: [1, 2], dayQuestions: {} }
    expect(getPathCompletionPercent(path, progress)).toBe(Math.round((2 / 14) * 100))
  })

  it('assigns unique questions across a full path without reuse', () => {
    const path = getStudyPath('javascript-1-week')
    const questions = interviewQuestions.javascript.questions
    for (const day of path.days) {
      const progress = readPathProgress(path.id)
      ensureDayQuestions(path, day.day, questions, progress)
    }

    const stored = readPathProgress(path.id)
    const used = getUsedPathIndices(stored)
    const planned = path.days.reduce((sum, day) => sum + day.count, 0)
    const assigned = Object.values(stored.dayQuestions).flat().length

    expect(used.size).toBe(assigned)
    expect(used.size).toBeLessThanOrEqual(planned)
    expect(used.size).toBeLessThanOrEqual(questions.length)
    expect(used.size).toBeGreaterThan(planned * 0.85)
  })
})