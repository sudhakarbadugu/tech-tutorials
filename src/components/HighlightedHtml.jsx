import { useHighlightedAnswer } from './useHighlightedAnswer'
import { flattenDetails } from './interviewPrepUtils'

export default function HighlightedHtml({ html, className = '' }) {
  const highlighted = useHighlightedAnswer(html || '')
  if (!html) return null

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: flattenDetails(highlighted) }}
    />
  )
}