import { describe, it, expect } from 'vitest'
import { interviewQuestions, interviewSubjects } from './interviewData'

const SUBJECTS_WITH_QUESTIONS = Object.keys(interviewSubjects).filter(
  id => interviewSubjects[id].totalQuestions > 0
)

/** Raw HTML inside <pre><code> is parsed by the browser instead of shown as code. */
const UNESCAPED_CODE_BLOCK = /<pre><code>\s*<[a-z]/i

/** Raw HTML inside any <code> block should also be escaped so it renders as text. */
const CODE_BLOCK_RE = /<code\b[^>]*>([\s\S]*?)<\/code>/gi

function findUnescapedCodeBlocks(answer) {
  const offenders = []
  let match
  while ((match = CODE_BLOCK_RE.exec(answer)) !== null) {
    const inner = match[1]
    if (/<[a-zA-Z!/?]/.test(inner) || />/.test(inner)) {
      offenders.push(inner.slice(0, 80).replace(/\s+/g, ' '))
    }
  }
  CODE_BLOCK_RE.lastIndex = 0
  return offenders
}

/** Void/list HTML tags as list items render as elements, not tag names. */
const VOID_TAG_IN_LIST_ITEM = /<li>\s*<(br|hr|img|input|label|datalist|script)\b/i

describe('interview answer quality', () => {
  it.each(SUBJECTS_WITH_QUESTIONS)(
    '%s answers do not embed unescaped HTML inside pre/code blocks',
    (subject) => {
      const questions = interviewQuestions[subject].questions
      const offenders = questions
        .map((q, index) => ({ index, question: q.question, answer: q.answer }))
        .filter(({ answer }) => UNESCAPED_CODE_BLOCK.test(answer))

      expect(
        offenders,
        offenders.map(o => `${subject}[${o.index}]: ${o.question}`).join('\n')
      ).toEqual([])
    }
  )

  it.each(SUBJECTS_WITH_QUESTIONS)(
    '%s answers do not embed unescaped HTML inside any code block',
    (subject) => {
      const questions = interviewQuestions[subject].questions
      const offenders = questions
        .map((q, index) => ({ index, question: q.question, snippets: findUnescapedCodeBlocks(q.answer) }))
        .filter(({ snippets }) => snippets.length > 0)

      expect(
        offenders,
        offenders.map(o => `${subject}[${o.index}]: ${o.question}\n  ${o.snippets.join('\n  ')}`).join('\n')
      ).toEqual([])
    }
  )

  it.each(SUBJECTS_WITH_QUESTIONS)(
    '%s answers do not use live void tags as list item content',
    (subject) => {
      const questions = interviewQuestions[subject].questions
      const offenders = questions.filter(({ answer }) => VOID_TAG_IN_LIST_ITEM.test(answer))
      expect(offenders).toEqual([])
    }
  )

  it('escapes common HTML examples in code tags', () => {
    const htmlQuestions = interviewQuestions.html.questions
    const datalist = htmlQuestions.find(q =>
      q.question.toLowerCase().includes('datalist')
    )
    expect(datalist).toBeTruthy()
    expect(datalist.answer).toContain('&lt;datalist')
    expect(datalist.answer).not.toMatch(/<datalist\b/i)
  })

  it.each(SUBJECTS_WITH_QUESTIONS)(
    '%s questions have at least one key point summary',
    (subject) => {
      const questions = interviewQuestions[subject].questions
      const offenders = questions
        .map((q, index) => ({ index, question: q.question }))
        .filter(({ index }) => {
          const kp = interviewQuestions[subject].questions[index].keyPoints
          return !Array.isArray(kp) || kp.length === 0 || kp.some(p => typeof p !== 'string' || p.trim() === '')
        })
      expect(
        offenders,
        offenders.map(o => `${subject}[${o.index}]: ${o.question}`).join('\n')
      ).toEqual([])
    }
  )
})