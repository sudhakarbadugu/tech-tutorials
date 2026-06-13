import { describe, it, expect, beforeEach, vi } from 'vitest'
import { interviewQuestions, interviewSubjects } from '../data/interviewData'
import { getStudyPath } from '../data/interviewStudyPaths'
import { BOOKMARKS_KEY } from './interviewUi'
import {
  flattenDetails,
  shuffleArray,
  readAllBookmarks,
  getBookmarkedQuestions,
  pickRandomQuestions,
  readPathProgress,
  savePathProgress,
  getUsedPathIndices,
  ensureDayQuestions,
  markDayComplete,
  getPathCompletionPercent,
  formatTimer
} from './interviewPrepUtils'

describe('interviewPrepUtils', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('flattenDetails', () => {
    it('converts details/summary into always-visible divs', () => {
      const html = '<details><summary>Tip</summary><p>Body</p></details>'
      const out = flattenDetails(html)
      expect(out).toContain('<div class="answer-detail">')
      expect(out).toContain('<div class="answer-summary">Tip</div>')
      expect(out).not.toContain('<details')
      expect(out).not.toContain('<summary>')
    })

    it('returns falsy html unchanged', () => {
      expect(flattenDetails('')).toBe('')
      expect(flattenDetails(null)).toBe(null)
    })
  })

  describe('shuffleArray', () => {
    it('returns a permutation with the same elements', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.1)
      const input = [1, 2, 3, 4]
      const out = shuffleArray(input)
      expect(out).toHaveLength(input.length)
      expect([...out].sort()).toEqual(input)
      expect(input).toEqual([1, 2, 3, 4])
      vi.restoreAllMocks()
    })
  })

  describe('bookmarks', () => {
    it('reads empty bookmarks when storage is missing', () => {
      expect(readAllBookmarks()).toEqual({})
      expect(getBookmarkedQuestions(interviewQuestions, interviewSubjects)).toEqual([])
    })

    it('collects bookmarked questions with subject metadata', () => {
      localStorage.setItem(
        BOOKMARKS_KEY,
        JSON.stringify({ react: [0, 2], javascript: [1] })
      )

      const items = getBookmarkedQuestions(interviewQuestions, interviewSubjects)
      expect(items).toHaveLength(3)
      expect(items[0]).toMatchObject({
        subjectId: expect.any(String),
        subjectTitle: expect.any(String),
        index: expect.any(Number),
        question: expect.objectContaining({
          question: expect.any(String),
          answer: expect.any(String)
        })
      })
      expect(items.some(i => i.subjectId === 'react' && i.index === 0)).toBe(true)
    })

    it('ignores invalid bookmark indices and unknown subjects', () => {
      localStorage.setItem(
        BOOKMARKS_KEY,
        JSON.stringify({ react: [99999], unknown: [0], javascript: 'bad' })
      )
      expect(getBookmarkedQuestions(interviewQuestions, interviewSubjects)).toEqual([])
    })
  })

  describe('pickRandomQuestions', () => {
    const questions = interviewQuestions.react.questions

    it('respects difficulty filter when enough questions exist', () => {
      const picked = pickRandomQuestions(questions, 5, { difficulty: 'Beginner' })
      expect(picked.length).toBe(5)
      expect(picked.every(({ q }) => q.difficulty === 'Beginner')).toBe(true)
    })

    it('excludes already-used indices', () => {
      const picked = pickRandomQuestions(questions, 10, { excludeIndices: [0, 1, 2] })
      expect(picked.every(({ i }) => ![0, 1, 2].includes(i))).toBe(true)
    })

    it('returns no duplicate indices', () => {
      const picked = pickRandomQuestions(questions, 15)
      const indices = picked.map(p => p.i)
      expect(new Set(indices).size).toBe(indices.length)
    })

    it('handles Mixed difficulty without throwing', () => {
      const picked = pickRandomQuestions(questions, 6, { difficulty: 'Mixed' })
      expect(picked.length).toBeGreaterThan(0)
      expect(picked.length).toBeLessThanOrEqual(6)
    })
  })

  describe('path progress', () => {
    const path = getStudyPath('react-2-week')
    const questions = interviewQuestions.react.questions

    it('reads and writes path progress in localStorage', () => {
      const progress = { completedDays: [1], dayQuestions: { 1: [0, 1] }, startedAt: 100 }
      savePathProgress(path.id, progress)
      expect(readPathProgress(path.id)).toEqual(progress)
    })

    it('returns default progress for unknown paths', () => {
      expect(readPathProgress('missing-path')).toEqual({
        completedDays: [],
        dayQuestions: {},
        startedAt: null
      })
    })

    it('tracks used indices across days', () => {
      const progress = { completedDays: [], dayQuestions: { 1: [0, 1], 2: [2] }, startedAt: 1 }
      expect(getUsedPathIndices(progress)).toEqual(new Set([0, 1, 2]))
    })

    it('assigns non-overlapping questions across two days', () => {
      const progress = { completedDays: [], dayQuestions: {}, startedAt: null }
      const day1 = ensureDayQuestions(path, 1, questions, progress)
      const day2 = ensureDayQuestions(path, 2, questions, readPathProgress(path.id))

      const day1Indices = new Set(day1.map(q => q.i))
      const day2Indices = new Set(day2.map(q => q.i))
      for (const idx of day2Indices) {
        expect(day1Indices.has(idx)).toBe(false)
      }
    })

    it('marks a day complete only once', () => {
      markDayComplete(path.id, 3)
      markDayComplete(path.id, 3)
      const progress = readPathProgress(path.id)
      expect(progress.completedDays).toEqual([3])
    })

    it('returns empty list for invalid day numbers', () => {
      const progress = { completedDays: [], dayQuestions: {}, startedAt: null }
      expect(ensureDayQuestions(path, 99, questions, progress)).toEqual([])
    })
  })

  describe('formatTimer', () => {
    it('formats seconds as m:ss', () => {
      expect(formatTimer(0)).toBe('0:00')
      expect(formatTimer(65)).toBe('1:05')
      expect(formatTimer(125)).toBe('2:05')
    })
  })

  describe('getPathCompletionPercent', () => {
    it('returns 0 for invalid input', () => {
      expect(getPathCompletionPercent(null, { completedDays: [] })).toBe(0)
      expect(getPathCompletionPercent({ days: [] }, { completedDays: [1] })).toBe(0)
    })
  })
})