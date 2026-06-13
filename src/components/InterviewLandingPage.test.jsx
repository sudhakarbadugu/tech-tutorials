import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InterviewLandingPage from './InterviewLandingPage'
import { BOOKMARKS_KEY } from './interviewUi'
import { studyPaths } from '../data/interviewStudyPaths'

describe('InterviewLandingPage', () => {
  const onSelectSubject = vi.fn()
  const onBack = vi.fn()
  const onMockInterview = vi.fn()
  const onRevisionDeck = vi.fn()
  const onStudyPaths = vi.fn()

  const defaultProps = {
    onSelectSubject,
    onBack,
    onMockInterview,
    onRevisionDeck,
    onStudyPaths,
    theme: 'light'
  }

  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('renders interview prep tool cards', () => {
    render(<InterviewLandingPage {...defaultProps} />)

    expect(screen.getByRole('heading', { name: 'Interview prep tools' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /mock interview/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /revision deck/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /study paths/i })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`${studyPaths.length} curated plans`, 'i'))).toBeInTheDocument()
  })

  it('navigates to mock interview from prep tool card', async () => {
    const user = userEvent.setup()
    render(<InterviewLandingPage {...defaultProps} />)

    await user.click(screen.getByRole('button', { name: /mock interview/i }))

    expect(onMockInterview).toHaveBeenCalledTimes(1)
  })

  it('navigates to revision deck from prep tool card', async () => {
    const user = userEvent.setup()
    render(<InterviewLandingPage {...defaultProps} />)

    await user.click(screen.getByRole('button', { name: /revision deck/i }))

    expect(onRevisionDeck).toHaveBeenCalledTimes(1)
  })

  it('navigates to study paths from prep tool card', async () => {
    const user = userEvent.setup()
    render(<InterviewLandingPage {...defaultProps} />)

    await user.click(screen.getByRole('button', { name: /study paths/i }))

    expect(onStudyPaths).toHaveBeenCalledTimes(1)
  })

  it('shows bookmark count on the revision deck card when bookmarks exist', () => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ react: [0, 2], html: [1] }))

    render(<InterviewLandingPage {...defaultProps} />)

    expect(screen.getByText(/review bookmarked questions \(3\)/i)).toBeInTheDocument()
  })

  it('hides prep tools when search filters are active', async () => {
    const user = userEvent.setup()
    render(<InterviewLandingPage {...defaultProps} />)

    expect(screen.getByRole('heading', { name: 'Interview prep tools' })).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText(/search subjects or topics/i), 'react')

    expect(screen.queryByRole('heading', { name: 'Interview prep tools' })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Search Results' })).toBeInTheDocument()
  })
})