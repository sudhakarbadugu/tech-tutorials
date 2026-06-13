import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import InterviewContent from './InterviewContent'
import { BOOKMARKS_KEY } from './interviewUi'
import { interviewQuestions } from '../data/interviewData'

const renderInRouter = (ui) =>
  render(<MemoryRouter initialEntries={['/interview/html']}>{ui}</MemoryRouter>)

describe('InterviewContent bookmarks', () => {
  const defaultProps = {
    subject: 'html',
    onBack: vi.fn(),
    onBackToHome: vi.fn(),
    onSelectSubject: vi.fn(),
    onMockInterview: vi.fn(),
    onRevisionDeck: vi.fn(),
    onStudyPaths: vi.fn(),
    theme: 'light'
  }

  const firstQuestionText = interviewQuestions.html.questions[0].question

  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() { return [] }
      }
    )
  })

  it('renders subject questions', async () => {
    renderInRouter(<InterviewContent {...defaultProps} />)
    expect(await screen.findByText(firstQuestionText)).toBeInTheDocument()
  })

  it('persists a bookmark to localStorage when toggled on', async () => {
    const user = userEvent.setup()
    renderInRouter(<InterviewContent {...defaultProps} />)
    const [btn] = await screen.findAllByLabelText('Bookmark question')
    await user.click(btn)
    const stored = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
    expect(stored.html).toContain(0)
  })

  it('removes a bookmark from localStorage when toggled off', async () => {
    const user = userEvent.setup()
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ html: [0, 2] }))
    renderInRouter(<InterviewContent {...defaultProps} />)
    const [btn] = await screen.findAllByLabelText('Remove bookmark')
    await user.click(btn)
    const stored = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
    expect(stored.html).toEqual([2])
  })

  it('restores bookmark state from localStorage on mount', async () => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ html: [0] }))
    renderInRouter(<InterviewContent {...defaultProps} />)
    expect(await screen.findByLabelText('Remove bookmark')).toBeInTheDocument()
  })

  it('keeps bookmarks scoped per subject', async () => {
    const user = userEvent.setup()
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ react: [0] }))
    renderInRouter(<InterviewContent {...defaultProps} subject="html" />)
    // findByLabelText throws if there are multiple matches; use findAllByLabelText
    // and click the first (index 0).
    const btns = await screen.findAllByLabelText('Bookmark question')
    await user.click(btns[0])
    const stored = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
    expect(stored.react).toEqual([0])
    expect(stored.html).toContain(0)
  })

  it('shows language chips for coding answers with multiple languages', async () => {
    renderInRouter(<InterviewContent {...defaultProps} subject="coding" />)
    const tablists = await screen.findAllByRole('tablist', { name: 'Solution language' })
    expect(tablists.length).toBeGreaterThan(0)
    expect(screen.getAllByRole('tab', { name: 'Java' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('tab', { name: 'Python' }).length).toBeGreaterThan(0)
  })

  it('accumulates multiple bookmarks for the same subject', async () => {
    const user = userEvent.setup()
    const { unmount } = renderInRouter(<InterviewContent {...defaultProps} subject="html" />)
    let btns = await screen.findAllByLabelText('Bookmark question')
    await user.click(btns[0])
    unmount()
    renderInRouter(<InterviewContent {...defaultProps} subject="html" />)
    btns = await screen.findAllByLabelText('Bookmark question')
    await user.click(btns[3])
    const stored = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
    expect(stored.html).toEqual(expect.arrayContaining([0, 4]))
  })
})
