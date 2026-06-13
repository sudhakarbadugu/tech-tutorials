import { useState } from 'react'
import HighlightedHtml from './HighlightedHtml'
import styles from './Interview.module.css'

export default function CodingAnswerTabs({ prefix, suffix, languages, byLanguage }) {
  const [active, setActive] = useState(languages[0])

  return (
    <div className={styles.answerContent}>
      <HighlightedHtml html={prefix} />
      <div className={styles.languageTabs}>
        <div className={styles.languageChips} role="tablist" aria-label="Solution language">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              role="tab"
              aria-selected={active === lang}
              className={[
                styles.languageChip,
                active === lang ? styles.languageChipActive : ''
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActive(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <div role="tabpanel" className={styles.languagePanel}>
          <HighlightedHtml html={byLanguage[active]} />
        </div>
      </div>
      <HighlightedHtml html={suffix} />
    </div>
  )
}