import { describe, it, expect } from 'vitest'
import {
  interviewCategories,
  interviewSubjects,
  interviewQuestions,
} from './interviewData'

const ALL_INTERVIEW_SUBJECTS = Object.keys(interviewSubjects)

const TRINITS_IMPORTED_SUBJECTS = [
  'java',
  'spring-boot',
  'javascript',
  'react',
  'angular',
  'react-native',
  'html',
  'css',
  'sql',
  'dsa',
  'design-patterns',
]

const EXPECTED_MIN_QUESTIONS = {
  java: 90,
  'spring-boot': 60,
  javascript: 50,
  react: 70,
  angular: 40,
  'react-native': 25,
  html: 25,
  css: 25,
  sql: 15,
  dsa: 35,
  'design-patterns': 20,
}

const VALID_DIFFICULTIES = new Set(['Beginner', 'Intermediate', 'Advanced'])

function assertValidQuestion(question, label) {
  expect(question.question, `${label} question`).toBeTruthy()
  expect(question.answer, `${label} answer`).toBeTruthy()
  expect(question.answer.length, `${label} answer length`).toBeGreaterThan(10)
  expect(VALID_DIFFICULTIES.has(question.difficulty), `${label} difficulty`).toBe(true)
  expect(Array.isArray(question.tags), `${label} tags`).toBe(true)
  expect(question.tags.length, `${label} tags length`).toBeGreaterThan(0)
}

describe('interviewData', () => {
  describe('interviewSubjects', () => {
    it('registers every category subject in interviewSubjects', () => {
      const categorySubjects = Object.values(interviewCategories).flatMap((cat) => cat.subjects)
      const uniqueSubjects = [...new Set(categorySubjects)]

      for (const subject of uniqueSubjects) {
        expect(interviewSubjects[subject], `missing subject meta for ${subject}`).toBeTruthy()
      }
    })

    it('syncs totalQuestions with loaded question arrays', () => {
      for (const subject of ALL_INTERVIEW_SUBJECTS) {
        const expected = interviewQuestions[subject]?.questions?.length ?? 0
        expect(interviewSubjects[subject].totalQuestions).toBe(expected)
      }
    })

    it.each(TRINITS_IMPORTED_SUBJECTS)(
      '%s has trinits-sourced question volume',
      (subject) => {
        expect(interviewSubjects[subject].totalQuestions).toBeGreaterThanOrEqual(
          EXPECTED_MIN_QUESTIONS[subject]
        )
      }
    )
  })

  describe('interviewQuestions', () => {
    it.each(
      ALL_INTERVIEW_SUBJECTS.filter((subject) => interviewSubjects[subject].totalQuestions > 0)
    )('%s questions have required fields', (subject) => {
      const questions = interviewQuestions[subject].questions

      expect(questions.length).toBeGreaterThan(0)

      for (const [index, question] of questions.entries()) {
        assertValidQuestion(question, `${subject}[${index}]`)
      }
    })

    it.each(TRINITS_IMPORTED_SUBJECTS)('%s first question is populated from trinits content', (subject) => {
      const first = interviewQuestions[subject].questions[0]
      assertValidQuestion(first, `${subject}[0]`)
      expect(first.answer).toMatch(/<(?:ul|ol|p|pre|table|code|div|strong|li)\b/i)
    })

    it('has microservices content populated', () => {
      expect(interviewSubjects.microservices.totalQuestions).toBeGreaterThan(0)
      expect(interviewQuestions.microservices?.questions?.length).toBeGreaterThan(0)
    })

    it('has coding and typescript subjects populated for fundamentals prep', () => {
      expect(interviewSubjects.coding.totalQuestions).toBeGreaterThan(0)
      expect(interviewSubjects.typescript.totalQuestions).toBeGreaterThan(0)
      expect(interviewCategories.fundamentals.subjects).toEqual(
        expect.arrayContaining(['coding', 'system-design', 'dsa'])
      )
    })
  })

  describe('interviewCategories', () => {
    it('only lists subjects that exist in interviewSubjects', () => {
      for (const category of Object.values(interviewCategories)) {
        for (const subject of category.subjects) {
          expect(interviewSubjects[subject], `unknown category subject ${subject}`).toBeTruthy()
        }
      }
    })

    it('places trinits-imported web and framework subjects in the right categories', () => {
      expect(interviewCategories.web.subjects).toEqual(
        expect.arrayContaining(['javascript', 'html', 'css'])
      )
      expect(interviewCategories.frameworks.subjects).toEqual(
        expect.arrayContaining(['react', 'angular', 'react-native'])
      )
      expect(interviewCategories.backend.subjects).toEqual(
        expect.arrayContaining(['java', 'spring-boot', 'design-patterns'])
      )
      expect(interviewCategories.database.subjects).toContain('sql')
      expect(interviewCategories.fundamentals.subjects).toContain('dsa')
    })
  })
})