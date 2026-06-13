import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Content from './Content'
import { mockPythonContent } from '../test/fixtures'

describe('Content', () => {
  const defaultProps = {
    subject: 'python',
    unit: 'module1',
    topic: 'intro-python',
    onNavigate: vi.fn(),
    version: '1.0.0',
    onOnePageView: vi.fn(),
    subjectContent: mockPythonContent,
    loading: false,
  }

  it('shows a loading state while content is being fetched', () => {
    render(<Content {...defaultProps} loading subjectContent={null} />)

    expect(screen.getByText('Loading content...')).toBeInTheDocument()
  })

  it('shows a placeholder when the selected topic has no content', () => {
    render(
      <Content
        {...defaultProps}
        topic="missing-topic"
        subjectContent={mockPythonContent}
      />
    )

    expect(screen.getByRole('heading', { name: /welcome to python programming/i })).toBeInTheDocument()
    expect(screen.getByText(/select a topic from the sidebar/i)).toBeInTheDocument()
  })

  it('renders topic title, sections, and app footer', () => {
    render(<Content {...defaultProps} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Introduction to Python' })).toBeInTheDocument()
    expect(screen.getByText('Getting started with Python')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByText('Tech Tutorials v1.0.0')).toBeInTheDocument()
  })

  it('navigates to the next topic', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Content {...defaultProps} onNavigate={onNavigate} />)

    await user.click(screen.getByRole('button', { name: /next topic: variables and data types/i }))

    expect(onNavigate).toHaveBeenCalledWith('module1', 'variables-data-types')
  })

  it('expands practice question accordions on click', async () => {
    const user = userEvent.setup()

    render(<Content {...defaultProps} />)

    const accordion = screen.getByRole('button', { name: 'Practice Questions' })
    expect(accordion).toHaveAttribute('aria-expanded', 'false')

    await user.click(accordion)

    expect(accordion).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Q1: What is Python?')).toBeInTheDocument()
  })

  it('opens one-page views for unit and full subject', async () => {
    const user = userEvent.setup()
    const onOnePageView = vi.fn()

    render(<Content {...defaultProps} onOnePageView={onOnePageView} />)

    await user.click(screen.getByRole('button', { name: /view all topics in this unit/i }))
    await user.click(screen.getByRole('button', { name: /view entire subject/i }))

    expect(onOnePageView).toHaveBeenNthCalledWith(1, 'module1')
    expect(onOnePageView).toHaveBeenNthCalledWith(2, '__all__')
  })
})