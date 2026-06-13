import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import MockInterview from './MockInterview'
import RevisionDeck from './RevisionDeck'
import StudyPathView from './StudyPathView'
import { BOOKMARKS_KEY } from './interviewUi'

function renderAt(path, ui) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/interview/mock" element={ui} />
        <Route path="/interview/revision" element={ui} />
        <Route path="/interview/paths" element={ui} />
        <Route path="/interview/path/:pathId" element={ui} />
      </Routes>
    </MemoryRouter>
  )
}

describe('Interview prep UI', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('MockInterview', () => {
    it('renders setup screen with subject and start controls', () => {
      renderAt('/interview/mock', <MockInterview theme="light" />)

      expect(screen.getByRole('heading', { name: 'Mock Interview' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /start mock session/i })).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('pre-selects subject from query string', () => {
      render(
        <MemoryRouter initialEntries={['/interview/mock?subject=java']}>
          <Routes>
            <Route path="/interview/mock" element={<MockInterview theme="light" />} />
          </Routes>
        </MemoryRouter>
      )

      expect(screen.getByRole('combobox')).toHaveValue('java')
    })

    it('starts a timed session and reveals the answer', async () => {
      const user = userEvent.setup()
      renderAt('/interview/mock', <MockInterview theme="light" />)

      await user.click(screen.getByRole('button', { name: /start mock session/i }))
      expect(screen.getByText(/question 1 of/i)).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: /reveal answer/i }))
      expect(screen.getByRole('button', { name: /next question|finish session/i })).toBeInTheDocument()
    })
  })

  describe('RevisionDeck', () => {
    it('shows empty state when there are no bookmarks', () => {
      renderAt('/interview/revision', <RevisionDeck theme="light" />)
      expect(screen.getByRole('heading', { name: 'No bookmarks yet' })).toBeInTheDocument()
    })

    it('lists bookmarked questions and opens study mode', async () => {
      const user = userEvent.setup()
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ react: [0] }))

      renderAt('/interview/revision', <RevisionDeck theme="light" />)

      expect(screen.getByRole('heading', { name: 'Revision Deck' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /study deck/i })).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: /study deck/i }))
      expect(screen.getByRole('button', { name: /show answer/i })).toBeInTheDocument()
    })
  })

  describe('StudyPathView', () => {
    it('lists all curated study paths', () => {
      renderAt('/interview/paths', <StudyPathView theme="light" />)

      expect(screen.getByRole('heading', { name: 'Study Paths' })).toBeInTheDocument()
      expect(screen.getByText('2-Week React Prep')).toBeInTheDocument()
      expect(screen.getByText('2-Week Java Prep')).toBeInTheDocument()
      expect(screen.getByText('1-Week JavaScript Prep')).toBeInTheDocument()
      expect(screen.getByText('2-Week Spring Boot Prep')).toBeInTheDocument()
    })

    it('shows day plan for a specific path', async () => {
      const user = userEvent.setup()
      renderAt('/interview/path/react-2-week', <StudyPathView theme="light" />)

      expect(screen.getByRole('heading', { name: '2-Week React Prep' })).toBeInTheDocument()
      expect(screen.getByText('Day 1')).toBeInTheDocument()
      expect(screen.getByText(/start today/i)).toBeInTheDocument()

      await user.click(screen.getByText('React basics & JSX'))
      expect(screen.getByRole('button', { name: /reveal answer/i })).toBeInTheDocument()
    })

    it('shows not-found state for unknown paths', () => {
      renderAt('/interview/path/does-not-exist', <StudyPathView theme="light" />)
      expect(screen.getByRole('heading', { name: 'Path not found' })).toBeInTheDocument()
    })
  })
})