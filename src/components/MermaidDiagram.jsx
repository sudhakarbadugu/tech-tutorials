import { useEffect, useRef, useState } from 'react'
import { Loader } from 'lucide-react'

let mermaidPromise = null

async function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then(mod => {
      const mermaid = mod.default || mod
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif',
      })
      return mermaid
    })
  }
  return mermaidPromise
}

function MermaidDiagram({ chart, caption }) {
  const containerRef = useRef(null)
  const [svg, setSvg] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        setLoading(true)
        setError(null)
        const mermaid = await loadMermaid()
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`
        const { svg: renderedSvg } = await mermaid.render(id, chart.trim())
        if (!cancelled) {
          setSvg(renderedSvg)
        }
      } catch (e) {
        if (!cancelled) {
          setError(e.message || 'Failed to render diagram')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    render()

    return () => {
      cancelled = true
    }
  }, [chart])

  return (
    <figure className="mermaid-figure" role="img" aria-label={caption || 'Diagram'}>
      <div ref={containerRef} className="mermaid-diagram">
        {loading && (
          <div className="mermaid-loading">
            <Loader size={24} className="loading-icon" aria-hidden="true" />
            <span>Rendering diagram…</span>
          </div>
        )}
        {error && (
          <div className="mermaid-error" role="alert">
            <strong>Diagram error:</strong> {error}
            <pre>{chart}</pre>
          </div>
        )}
        {!loading && !error && (
          <div
            className="mermaid-svg"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        )}
      </div>
      {caption && <figcaption className="mermaid-caption">{caption}</figcaption>}
    </figure>
  )
}

export default MermaidDiagram
