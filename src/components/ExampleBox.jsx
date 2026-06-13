import { Terminal, Eye, Copy, Check } from 'lucide-react'
import { useState } from 'react'

function ExampleBox({ title, code, output, type = 'code' }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="example-box" role="region" aria-label={`Example: ${title || 'Code example'}`}>
      <div className="example-header">
        <div className="example-title">
          {type === 'code' ? <Terminal size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
          <span>{title || 'Example'}</span>
        </div>
        <button 
          className="copy-btn" 
          onClick={handleCopy} 
          title="Copy to clipboard"
          aria-label={copied ? 'Copied!' : 'Copy code to clipboard'}
        >
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          <span className="sr-only">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      
      {code && (
        <pre className="example-code" role="code" aria-label="Code example">
          <code>{code}</code>
        </pre>
      )}
      
      {output && (
        <div className="example-output">
          <div className="output-label">Output:</div>
          <div className="output-content" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      )}
    </div>
  )
}

export default ExampleBox
