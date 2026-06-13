import { useMemo } from 'react'
import { flattenDetails } from './interviewPrepUtils'
import { parseCodingAnswerLanguages } from './parseCodingAnswerLanguages'
import CodingAnswerTabs from './CodingAnswerTabs'
import HighlightedHtml from './HighlightedHtml'
import styles from './Interview.module.css'

export default function InterviewAnswer({ html, useLanguageTabs = false, className = '' }) {
  const parsed = useMemo(() => {
    if (!useLanguageTabs || !html) return { hasLanguageTabs: false }
    return parseCodingAnswerLanguages(flattenDetails(html))
  }, [html, useLanguageTabs])

  if (!parsed.hasLanguageTabs) {
    return (
      <HighlightedHtml
        html={html}
        className={`${styles.answerContent} ${className}`.trim()}
      />
    )
  }

  return (
    <CodingAnswerTabs
      key={parsed.languages.join('-')}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      languages={parsed.languages}
      byLanguage={parsed.byLanguage}
    />
  )
}