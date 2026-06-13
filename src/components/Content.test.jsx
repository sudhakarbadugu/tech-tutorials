import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Content from './Content'
import { mockPythonContent } from '../test/fixtures'

const renderWithRouter = (ui, options = {}) =>
  render(ui, { wrapper: MemoryRouter, ...options })

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
    renderWithRouter(<Content {...defaultProps} loading subjectContent={null} />)

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
    renderWithRouter(<Content {...defaultProps} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Introduction to Python' })).toBeInTheDocument()
    expect(screen.getByText('Getting started with Python')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByText('Tech Tutorials v1.0.0')).toBeInTheDocument()
  })

  it('navigates to the next topic', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    renderWithRouter(<Content {...defaultProps} onNavigate={onNavigate} />)

    await user.click(screen.getByRole('button', { name: /next topic: variables and data types/i }))

    expect(onNavigate).toHaveBeenCalledWith('module1', 'variables-data-types')
  })

  it('scrolls the content panel to top when the topic changes', () => {
    const scrollTo = vi.fn()
    const { rerender } = renderWithRouter(<Content {...defaultProps} />)

    const main = screen.getByRole('main', { name: 'Course content' })
    main.scrollTo = scrollTo

    // Re-render with the same wrapper so the router context is preserved.
    rerender(<Content {...defaultProps} topic="variables-data-types" />)

    expect(scrollTo).toHaveBeenCalled()
  })

  it('keeps Common Mistakes, Real-World Application, and Quick Recap collapsed by default', async () => {
    const user = userEvent.setup()
    const contentWithSupplementary = {
      module1: {
        'intro-python': {
          ...mockPythonContent.module1['intro-python'],
          sections: [
            { heading: 'Overview', text: 'Python is a versatile language.' },
            { heading: 'Common Mistakes', list: ['Forgetting indentation'] },
            { heading: 'Real-World Application', text: 'Used in web, data, and automation.' },
            { heading: 'Quick Recap', list: ['Python is readable and versatile'] }
          ]
        }
      }
    }

    renderWithRouter(<Content {...defaultProps} subjectContent={contentWithSupplementary} />)

    const commonMistakes = screen.getByRole('button', { name: 'Common Mistakes' })
    const realWorld = screen.getByRole('button', { name: 'Real-World Application' })
    const quickRecap = screen.getByRole('button', { name: 'Quick Recap' })

    expect(commonMistakes).toHaveAttribute('aria-expanded', 'false')
    expect(realWorld).toHaveAttribute('aria-expanded', 'false')
    expect(quickRecap).toHaveAttribute('aria-expanded', 'false')

    const collapsedBody = commonMistakes.closest('.accordion-section')?.querySelector('.accordion-body')
    expect(collapsedBody).not.toHaveClass('open')
    expect(collapsedBody).toHaveAttribute('aria-hidden', 'true')

    await user.click(commonMistakes)
    expect(commonMistakes).toHaveAttribute('aria-expanded', 'true')
    expect(collapsedBody).toHaveClass('open')
    expect(screen.getByText('Forgetting indentation')).toBeInTheDocument()
  })

  it('expands practice question accordions on click', async () => {
    const user = userEvent.setup()

    renderWithRouter(<Content {...defaultProps} />)

    const accordion = screen.getByRole('button', { name: 'Practice Questions' })
    expect(accordion).toHaveAttribute('aria-expanded', 'false')

    await user.click(accordion)

    expect(accordion).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Q1: What is Python?')).toBeInTheDocument()
  })

  it('opens one-page views for unit and full subject', async () => {
    const user = userEvent.setup()
    const onOnePageView = vi.fn()

    renderWithRouter(<Content {...defaultProps} onOnePageView={onOnePageView} />)

    await user.click(screen.getByRole('button', { name: /view all topics in this unit/i }))
    await user.click(screen.getByRole('button', { name: /view entire subject/i }))

    expect(onOnePageView).toHaveBeenNthCalledWith(1, 'module1')
    expect(onOnePageView).toHaveBeenNthCalledWith(2, '__all__')
  })
})