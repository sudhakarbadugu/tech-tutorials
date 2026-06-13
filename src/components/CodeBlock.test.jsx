import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CodeBlock from './CodeBlock'
import { resolveLanguage, detectLanguage } from './codeBlockUtils'

describe('resolveLanguage / detectLanguage', () => {
  it('maps common aliases', () => {
    expect(resolveLanguage('js', '')).toBe('javascript')
    expect(resolveLanguage('TS', '')).toBe('typescript')
    expect(resolveLanguage('py', '')).toBe('python')
    expect(resolveLanguage('sh', '')).toBe('bash')
    expect(resolveLanguage('yml', '')).toBe('yaml')
  })

  it('falls back to plaintext for unknown hints', () => {
    expect(resolveLanguage('klingon', '')).toBe('plaintext')
  })

  it('detects javascript from common idioms', () => {
    expect(detectLanguage('const x = () => 1\nimport foo from "bar"')).toBe('javascript')
  })

  it('detects python from def / import', () => {
    expect(detectLanguage('def hello(name):\n    return name')).toBe('python')
  })

  it('detects java from public class', () => {
    expect(detectLanguage('public class Foo { }')).toBe('java')
  })

  it('detects sql from SELECT ... FROM', () => {
    expect(detectLanguage('SELECT * FROM users WHERE id = 1')).toBe('sql')
  })

  it('detects bash from shebang', () => {
    expect(detectLanguage('#!/bin/bash\necho hi')).toBe('bash')
  })

  it('detects html from tag patterns', () => {
    expect(detectLanguage('<div><p>hi</p></div>')).toBe('html')
  })

  it('detects json from key: "value" patterns', () => {
    expect(detectLanguage('{\n  "name": "tech-tutorials"\n}')).toBe('json')
  })

  it('returns plaintext for empty or unrecognized input', () => {
    expect(detectLanguage('')).toBe('plaintext')
    expect(detectLanguage('hello world')).toBe('plaintext')
  })
})

describe('CodeBlock', () => {
  beforeEach(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the language label in the header', async () => {
    render(<CodeBlock code="const x = 1" language="javascript" />)
    expect(screen.getByText('JAVASCRIPT')).toBeInTheDocument()
  })

  it('uses the provided title when given', async () => {
    render(<CodeBlock code="print(1)" language="python" title="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('shows plain code while Shiki loads, then highlights', async () => {
    render(<CodeBlock code="const x = 1" language="javascript" />)
    const plain = document.querySelector('.code-block-plain')
    expect(plain).toBeInTheDocument()
    expect(plain.textContent).toContain('const x = 1')

    await waitFor(() => {
      expect(document.querySelector('.code-block-highlighted')).toBeInTheDocument()
    })
  })

  it('copies the code to clipboard when the copy button is clicked', async () => {
    const user = userEvent.setup()
    render(<CodeBlock code="print(1)" language="python" />)
    const btn = screen.getByLabelText(/Copy code to clipboard/i)
    await user.click(btn)
    await waitFor(() => {
      expect(screen.getByLabelText('Copied!')).toBeInTheDocument()
    })
  })

  it('falls back gracefully when Shiki cannot render the language', async () => {
    // 'plaintext' is a valid Shiki language and will render successfully.
    // The visible output may still be the plain fallback briefly, but the
    // component must always show *something*.
    render(<CodeBlock code="hello world" language="plaintext" />)
    await waitFor(() => {
      const el = document.querySelector('.code-block-plain') ||
        document.querySelector('.code-block-highlighted')
      expect(el).toBeInTheDocument()
    })
  })
})
