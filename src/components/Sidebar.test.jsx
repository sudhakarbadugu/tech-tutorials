import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from './Sidebar'
import { mockPythonStructure } from '../test/fixtures'

describe('Sidebar', () => {
  const defaultProps = {
    subject: 'python',
    structure: mockPythonStructure,
    activeUnit: 'module1',
    activeTopic: 'intro-python',
    onSelect: vi.fn(),
    isOpen: true,
    setIsOpen: vi.fn(),
  }

  beforeEach(() => {
    vi.stubGlobal('innerWidth', 1200)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders nothing when closed', () => {
    const { container } = render(<Sidebar {...defaultProps} isOpen={false} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('renders subject title and topic navigation', () => {
    render(<Sidebar {...defaultProps} />)

    expect(screen.getByRole('heading', { name: 'Python Programming' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Introduction to Python' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Variables and Data Types' })).toBeInTheDocument()
  })

  it('calls onSelect when a topic is chosen', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    render(<Sidebar {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByRole('button', { name: 'Variables and Data Types' }))

    expect(onSelect).toHaveBeenCalledWith('module1', 'variables-data-types')
  })

  it('collapses and expands a unit section', async () => {
    const user = userEvent.setup()

    render(<Sidebar {...defaultProps} />)

    const unitToggle = screen.getByRole('button', { name: /module 1: python fundamentals/i })
    expect(screen.getByRole('button', { name: 'Introduction to Python' })).toBeInTheDocument()

    await user.click(unitToggle)

    expect(screen.queryByRole('button', { name: 'Introduction to Python' })).not.toBeInTheDocument()
  })

  it('closes the sidebar on mobile after selecting a topic', async () => {
    vi.stubGlobal('innerWidth', 500)
    const user = userEvent.setup()
    const setIsOpen = vi.fn()

    render(<Sidebar {...defaultProps} setIsOpen={setIsOpen} />)

    await user.click(screen.getByRole('button', { name: 'Variables and Data Types' }))

    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})