import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CodingAnswerTabs from './CodingAnswerTabs'

vi.mock('./HighlightedHtml', () => ({
  default: ({ html }) => (html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : null)
}))

describe('CodingAnswerTabs', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return []
        }
      }
    )
  })

  it('shows one language panel at a time and switches on chip click', async () => {
    const user = userEvent.setup()

    render(
      <CodingAnswerTabs
        prefix="<p>Intro</p>"
        suffix="<p>Footer</p>"
        languages={['Java', 'Python']}
        byLanguage={{
          Java: '<strong>Java</strong><pre><code>void sort()</code></pre>',
          Python: '<strong>Python</strong><pre><code>def sort(): pass</code></pre>'
        }}
      />
    )

    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Java' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('void sort()')).toBeInTheDocument()
    expect(screen.queryByText('def sort(): pass')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Python' }))

    expect(screen.getByRole('tab', { name: 'Python' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('def sort(): pass')).toBeInTheDocument()
    expect(screen.queryByText('void sort()')).not.toBeInTheDocument()
  })
})