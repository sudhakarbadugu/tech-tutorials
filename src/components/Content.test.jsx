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

  it('merges consecutive Python/Java Implementation sections into a language tab view', async () => {
    const user = userEvent.setup()
    const dsaLikeContent = {
      module1: {
        'arrays-strings': {
          title: 'Arrays & Strings',
          sections: [
            { heading: 'Overview', text: 'Arrays are contiguous blocks of memory.' },
            {
              heading: 'Python Implementation',
              example: {
                title: 'Arrays in Python',
                code: 'arr = [1, 2, 3]\nprint(arr[0])',
                output: '1',
                language: 'python',
                type: 'code',
              },
            },
            {
              heading: 'Java Implementation',
              example: {
                title: 'Arrays in Java',
                code: 'int[] arr = {1, 2, 3};\nSystem.out.println(arr[0]);',
                output: '1',
                language: 'java',
                type: 'code',
              },
            },
            { heading: 'Step-by-Step Walkthrough', list: ['Step 1: ...', 'Step 2: ...'] },
          ],
        },
      },
    }

    renderWithRouter(
      <Content {...defaultProps} topic="arrays-strings" subjectContent={dsaLikeContent} />
    )

    // The Python heading is no longer rendered as a standalone section heading.
    expect(screen.queryByRole('heading', { name: 'Python Implementation' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Java Implementation' })).not.toBeInTheDocument()

    // The merged section is rendered as a tabbed region with one chip per language.
    const pythonTab = screen.getByRole('tab', { name: 'Python' })
    const javaTab = screen.getByRole('tab', { name: 'Java' })
    expect(pythonTab).toHaveAttribute('aria-selected', 'true')
    expect(javaTab).toHaveAttribute('aria-selected', 'false')

    // Initially shows the Python example.
    const tabPanel = screen.getByRole('tabpanel')
    expect(tabPanel.textContent).toContain('arr = [1, 2, 3]')
    expect(tabPanel.textContent).not.toContain('int[] arr = {1, 2, 3};')

    // Clicking the Java tab reveals the Java example and hides the Python one.
    await user.click(javaTab)
    expect(javaTab).toHaveAttribute('aria-selected', 'true')
    expect(pythonTab).toHaveAttribute('aria-selected', 'false')
    const javaPanel = screen.getByRole('tabpanel')
    expect(javaPanel.textContent).toContain('int[] arr = {1, 2, 3};')
    expect(javaPanel.textContent).not.toContain('arr = [1, 2, 3]')

    // Surrounding sections still render correctly.
    expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Step-by-Step Walkthrough' })).toBeInTheDocument()
  })

  it('does not collapse a single standalone Implementation section', () => {
    const singleLangContent = {
      module1: {
        'intro-python': {
          ...mockPythonContent.module1['intro-python'],
          sections: [
            { heading: 'Overview', text: 'Python is a versatile language.' },
            {
              heading: 'Python Implementation',
              example: {
                title: 'Hello in Python',
                code: "print('hi')",
                language: 'python',
                type: 'code',
              },
            },
          ],
        },
      },
    }

    renderWithRouter(
      <Content {...defaultProps} subjectContent={singleLangContent} />
    )

    // No tab chips should appear when there is only one language section.
    expect(screen.queryByRole('tab', { name: 'Python' })).not.toBeInTheDocument()
    // The example still renders normally.
    expect(screen.getByText("print('hi')")).toBeInTheDocument()
  })

  it('persists the active language tab to localStorage and restores it', async () => {
    const user = userEvent.setup()
    const dsaLikeContent = {
      module1: {
        'arrays-strings': {
          title: 'Arrays & Strings',
          sections: [
            { heading: 'Overview', text: 'Arrays are contiguous blocks of memory.' },
            {
              heading: 'Python Implementation',
              example: { title: 'Python', code: 'arr = []', language: 'python', type: 'code' },
            },
            {
              heading: 'Java Implementation',
              example: { title: 'Java', code: 'int[] a = {};', language: 'java', type: 'code' },
            },
          ],
        },
      },
    }

    const expectedKey = 'tt:langTab:python:module1:arrays-strings'

    const { unmount } = renderWithRouter(
      <Content
        {...defaultProps}
        subject="python"
        topic="arrays-strings"
        subjectContent={dsaLikeContent}
      />
    )

    // Switch to Java and confirm the choice is persisted.
    await user.click(screen.getByRole('tab', { name: 'Java' }))
    expect(window.localStorage.getItem(expectedKey)).toBe('Java')

    // Re-render the same topic and confirm Java is restored as the active tab.
    unmount()
    renderWithRouter(
      <Content
        {...defaultProps}
        subject="python"
        topic="arrays-strings"
        subjectContent={dsaLikeContent}
      />
    )

    const javaTab = screen.getByRole('tab', { name: 'Java' })
    const pythonTab = screen.getByRole('tab', { name: 'Python' })
    expect(javaTab).toHaveAttribute('aria-selected', 'true')
    expect(pythonTab).toHaveAttribute('aria-selected', 'false')
    const panel = screen.getByRole('tabpanel')
    expect(panel.textContent).toContain('int[] a = {};')
    expect(panel.textContent).not.toContain('arr = []')

    // Clean up the storage value so it doesn't leak into other tests.
    window.localStorage.removeItem(expectedKey)
  })

  it('supports keyboard navigation between language tabs', async () => {
    const user = userEvent.setup()
    const dsaLikeContent = {
      module1: {
        'arrays-strings': {
          title: 'Arrays & Strings',
          sections: [
            { heading: 'Overview', text: 'Arrays are contiguous blocks of memory.' },
            {
              heading: 'Python Implementation',
              example: { title: 'Python', code: 'arr = []', language: 'python', type: 'code' },
            },
            {
              heading: 'Java Implementation',
              example: { title: 'Java', code: 'int[] a = {};', language: 'java', type: 'code' },
            },
          ],
        },
      },
    }

    renderWithRouter(
      <Content
        {...defaultProps}
        subject="python"
        topic="arrays-strings"
        subjectContent={dsaLikeContent}
      />
    )

    const pythonTab = screen.getByRole('tab', { name: 'Python' })
    const javaTab = screen.getByRole('tab', { name: 'Java' })

    // The active tab is focusable, the others are only reachable via arrow keys.
    expect(pythonTab).toHaveAttribute('tabindex', '0')
    expect(javaTab).toHaveAttribute('tabindex', '-1')

    // ArrowRight moves focus + selection from Python → Java.
    pythonTab.focus()
    await user.keyboard('{ArrowRight}')
    expect(javaTab).toHaveAttribute('aria-selected', 'true')
    expect(document.activeElement).toBe(javaTab)

    // ArrowLeft wraps from Java back to Python.
    await user.keyboard('{ArrowLeft}')
    expect(pythonTab).toHaveAttribute('aria-selected', 'true')
    expect(document.activeElement).toBe(pythonTab)

    // Home and End jump to the first / last tab.
    await user.keyboard('{End}')
    expect(javaTab).toHaveAttribute('aria-selected', 'true')
    expect(document.activeElement).toBe(javaTab)
    await user.keyboard('{Home}')
    expect(pythonTab).toHaveAttribute('aria-selected', 'true')
    expect(document.activeElement).toBe(pythonTab)

    // Clean up so other tests don't observe a stale tab choice.
    window.localStorage.removeItem('tt:langTab:python:module1:arrays-strings')
  })

  it('works generically for any subject with Implementation sections', async () => {
    const user = userEvent.setup()
    // The feature must not be hardcoded to a single subject — it should
    // activate for any "X Implementation" + "Y Implementation" pair.
    const javaLikeContent = {
      module1: {
        'intro-java': {
          title: 'Introduction to Java',
          sections: [
            { heading: 'Overview', text: 'Java is a typed, class-based language.' },
            {
              heading: 'Python Implementation',
              example: { title: 'Python', code: 'x = 1', language: 'python', type: 'code' },
            },
            {
              heading: 'Java Implementation',
              example: { title: 'Java', code: 'int x = 1;', language: 'java', type: 'code' },
            },
          ],
        },
      },
    }

    const expectedKey = 'tt:langTab:java:module1:intro-java'

    renderWithRouter(
      <Content
        {...defaultProps}
        subject="java"
        topic="intro-java"
        subjectContent={javaLikeContent}
      />
    )

    // Both language tabs render for the Java subject too.
    expect(screen.getByRole('tab', { name: 'Python' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Java' })).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Java' }))
    expect(window.localStorage.getItem(expectedKey)).toBe('Java')

    // Per-subject storage keys don't collide.
    expect(window.localStorage.getItem('tt:langTab:python:module1:arrays-strings')).toBeNull()

    // Clean up the storage value.
    window.localStorage.removeItem(expectedKey)
  })
})