import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { BOOKMARKS_KEY } from './components/interviewUi'

describe('App interview prep routes', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it.each([
    ['/interview/mock', 'Mock Interview'],
    ['/interview/paths', 'Study Paths'],
    ['/interview/path/react-2-week', '2-Week React Prep']
  ])('renders %s at %s', (path, heading) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  })

  it('renders revision deck empty state when no bookmarks exist', () => {
    render(
      <MemoryRouter initialEntries={['/interview/revision']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: 'No bookmarks yet' })).toBeInTheDocument()
  })

  it('renders revision deck when bookmarks exist', () => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify({ react: [0] }))
    render(
      <MemoryRouter initialEntries={['/interview/revision']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: 'Revision Deck' })).toBeInTheDocument()
  })
})