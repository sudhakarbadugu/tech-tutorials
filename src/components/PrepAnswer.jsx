import InterviewAnswer from './InterviewAnswer'

export default function PrepAnswer({ html, useLanguageTabs = false, className = '' }) {
  return (
    <InterviewAnswer
      html={html}
      useLanguageTabs={useLanguageTabs}
      className={className}
    />
  )
}