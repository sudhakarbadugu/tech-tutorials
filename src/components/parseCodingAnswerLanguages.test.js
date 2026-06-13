import { describe, it, expect } from 'vitest'
import { codingQuestions } from '../data/interviewQuestionsCoding'
import { highlightAnswerHtml } from './highlightAnswer'
import { parseCodingAnswerLanguages } from './parseCodingAnswerLanguages'

describe('parseCodingAnswerLanguages', () => {
  it('groups Java and Python blocks into language tabs', () => {
    const html = codingQuestions.questions[1].answer
    const parsed = parseCodingAnswerLanguages(html)

    expect(parsed.hasLanguageTabs).toBe(true)
    expect(parsed.languages).toEqual(['Java', 'Python'])
    expect(parsed.byLanguage.Java).toContain('HashMap Approach')
    expect(parsed.byLanguage.Java).toContain('language-java')
    expect(parsed.byLanguage.Python).toContain('collections.Counter')
    expect(parsed.suffix).toContain('Variations')
    expect(parsed.prefix).toContain('HashMap')
  })

  it('groups multiple Java variants under the Java tab', () => {
    const html = codingQuestions.questions[0].answer
    const parsed = parseCodingAnswerLanguages(html)

    expect(parsed.hasLanguageTabs).toBe(true)
    expect(parsed.byLanguage.Java).toContain('Merge Sort')
    expect(parsed.byLanguage.Java).toContain('Quick Sort')
    expect(parsed.byLanguage.Python).toContain('nums.sort()')
    expect(parsed.suffix).toContain('Interview Tip')
  })

  it('returns flat html when only one language is present', () => {
    const html = codingQuestions.questions[4].answer
    const parsed = parseCodingAnswerLanguages(html)

    expect(parsed.hasLanguageTabs).toBe(false)
    expect(parsed.html).toBe(html)
  })

  it('returns flat html for empty input', () => {
    expect(parseCodingAnswerLanguages('')).toEqual({ hasLanguageTabs: false, html: '' })
  })

  it('still detects languages after Shiki highlighting', async () => {
    const html = codingQuestions.questions[1].answer
    const highlighted = await highlightAnswerHtml(html, 'light')
    const parsed = parseCodingAnswerLanguages(highlighted)

    expect(parsed.hasLanguageTabs).toBe(true)
    expect(parsed.languages).toEqual(['Java', 'Python'])
  })
})