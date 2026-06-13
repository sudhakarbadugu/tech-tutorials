import { describe, it, expect, beforeEach } from 'vitest'
import {
  PROGRESS_KEY,
  getSubjectProgress,
  getInterviewStats,
  getPopularInterviewSubjects,
  getSameCategorySubjects
} from './interviewUi'
import { interviewCategories, interviewSubjects } from '../data/interviewData'

describe('interviewUi helpers', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns zero progress for unseen subjects', () => {
    expect(getSubjectProgress('react')).toEqual({ viewed: 0, viewedIndices: [] })
  })

  it('reads stored viewed indices for a subject', () => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ react: [0, 2, 5] }))
    expect(getSubjectProgress('react')).toEqual({ viewed: 3, viewedIndices: [0, 2, 5] })
  })

  it('summarizes interview catalog stats', () => {
    const stats = getInterviewStats(interviewCategories, interviewSubjects)
    expect(stats.totalSubjects).toBeGreaterThan(0)
    expect(stats.totalQuestions).toBeGreaterThan(500)
    expect(stats.categoryCount).toBe(Object.keys(interviewCategories).length)
  })

  it('returns popular subjects that exist in the catalog', () => {
    const popular = getPopularInterviewSubjects(interviewSubjects)
    expect(popular.length).toBeGreaterThan(0)
    popular.forEach(item => {
      expect(interviewSubjects[item.id].totalQuestions).toBeGreaterThan(0)
    })
  })

  it('lists related subjects from the same category', () => {
    const { categoryTitle, subjects } = getSameCategorySubjects(
      interviewCategories,
      interviewSubjects,
      'react'
    )
    expect(categoryTitle).toBeTruthy()
    expect(subjects.length).toBeGreaterThan(0)
    expect(subjects.every(s => s.id !== 'react')).toBe(true)
  })
})