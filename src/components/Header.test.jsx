import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import { mockSubjects } from '../test/fixtures'

describe('Header', () => {
  const defaultProps = {
    theme: 'light',
    toggleTheme: vi.fn(),
    version: '2.0.0',
    sidebarOpen: true,
    setSidebarOpen: vi.fn(),
    subjects: mockSubjects,
    activeSubject: 'python',
    onSubjectChange: vi.fn(),
    onBackToLanding: vi.fn(),
    showBackButton: true,
  }

  it('renders branding, active subject, and version', () => {
    render(<Header {...defaultProps} />)

    expect(screen.getByText('Tech Tutorials')).toBeInTheDocument()
    expect(screen.getByText('Python Programming')).toBeInTheDocument()
    expect(screen.getByText('v2.0.0')).toBeInTheDocument()
  })

  it('toggles the sidebar', async () => {
    const user = userEvent.setup()
    const setSidebarOpen = vi.fn()

    render(<Header {...defaultProps} setSidebarOpen={setSidebarOpen} />)

    await user.click(screen.getByTitle('Toggle sidebar'))

    expect(setSidebarOpen).toHaveBeenCalledWith(false)
  })

  it('switches subjects from the dropdown', async () => {
    const user = userEvent.setup()
    const onSubjectChange = vi.fn()

    render(<Header {...defaultProps} onSubjectChange={onSubjectChange} />)

    await user.click(screen.getByRole('button', { name: 'Select subject' }))
    await user.click(screen.getByRole('option', { name: 'Java Programming' }))

    expect(onSubjectChange).toHaveBeenCalledWith('java')
  })

  it('toggles theme and navigates back to the landing page', async () => {
    const user = userEvent.setup()
    const toggleTheme = vi.fn()
    const onBackToLanding = vi.fn()

    render(
      <Header
        {...defaultProps}
        toggleTheme={toggleTheme}
        onBackToLanding={onBackToLanding}
      />
    )

    await user.click(screen.getByTitle('Switch to dark mode'))
    await user.click(screen.getByRole('button', { name: 'Home' }))

    expect(toggleTheme).toHaveBeenCalledTimes(1)
    expect(onBackToLanding).toHaveBeenCalledTimes(1)
  })

  it('navigates home when the brand logo is clicked', async () => {
    const user = userEvent.setup()
    const onBackToLanding = vi.fn()

    render(<Header {...defaultProps} onBackToLanding={onBackToLanding} />)

    await user.click(screen.getByRole('button', { name: 'Tech Tutorials' }))

    expect(onBackToLanding).toHaveBeenCalledTimes(1)
  })
})