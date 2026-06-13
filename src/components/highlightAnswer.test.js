import { describe, it, expect } from 'vitest'
import { highlightAnswerHtml } from './highlightAnswer'

describe('highlightAnswerHtml', () => {
  it('returns plain HTML unchanged when there is no <pre>', async () => {
    const html = '<p>Some <strong>text</strong></p>'
    const out = await highlightAnswerHtml(html)
    expect(out).toBe(html)
  })

  it('returns plain HTML when html is empty', async () => {
    expect(await highlightAnswerHtml('')).toBe('')
    expect(await highlightAnswerHtml(null)).toBe(null)
  })

  it('highlights a <pre><code> with explicit language class', async () => {
    const html = '<pre><code class="language-python">def f():\n    return 1</code></pre>'
    const out = await highlightAnswerHtml(html)
    expect(out).toContain('shiki')
    // The output is HTML produced by shiki with inline-styled spans
    expect(out).toMatch(/<span[^>]*style=/)
  })

  it('highlights a <pre><code> without a language class via auto-detection', async () => {
    const html = '<pre><code>const x = () =&gt; 1</code></pre>'
    const out = await highlightAnswerHtml(html)
    expect(out).toContain('shiki')
  })

  it('is idempotent: re-running does not double-highlight', async () => {
    const html = '<pre><code class="language-sql">SELECT * FROM t</code></pre>'
    const once = await highlightAnswerHtml(html)
    const twice = await highlightAnswerHtml(once)
    expect(twice).toBe(once)
  })

  it('uses the dark theme when requested', async () => {
    const html = '<pre><code class="language-bash">echo hi</code></pre>'
    const out = await highlightAnswerHtml(html, 'dark')
    expect(out).toContain('shiki')
  })
})
