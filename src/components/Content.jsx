import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ExampleBox from './ExampleBox'
import MermaidDiagram from './MermaidDiagram'
import { ChevronLeft, ChevronRight, BookOpen, Layers, ChevronDown, Loader, Focus, Minimize2 } from 'lucide-react'
import { getSubjectStructure, subjectMeta } from '../data/tutorialDataLoader'
import { interviewRelatedTutorials } from '../data/interviewRelatedTutorials'
import { interviewQuestions, interviewSubjects } from '../data/interviewData'
import { APP_NAME } from '../constants/brand'

// Matches section headings like "Python Implementation", "Java Implementation",
// "JavaScript Implementation", etc. — anything ending in " Implementation".
const LANGUAGE_IMPLEMENTATION_RE = /^([A-Za-z+#.\- ]+)\s+Implementation\s*$/

// Canonical display name for a language identifier (e.g. "python" → "Python").
function displayLanguageName(raw) {
  if (!raw) return ''
  const trimmed = raw.trim()
  // Handle common aliases used inside code-fence languages.
  const aliases = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    cs: 'C#',
    csharp: 'C#',
    cpp: 'C++',
    'c++': 'C++',
    py: 'Python',
    python: 'Python',
    java: 'Java',
    go: 'Go',
    rust: 'Rust',
    kotlin: 'Kotlin',
    scala: 'Scala',
    ruby: 'Ruby',
    php: 'PHP',
    swift: 'Swift',
  }
  const normalized = aliases[trimmed.toLowerCase()] || trimmed
  return normalized
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')
}

// Extract language label from a section heading like "Python Implementation".
function languageFromHeading(heading) {
  if (!heading) return null
  const match = heading.match(LANGUAGE_IMPLEMENTATION_RE)
  if (!match) return null
  return displayLanguageName(match[1])
}

// Check if a section is a single-language implementation section:
// - heading ends with " Implementation"
// - has a single `example` block with a recognizable language
// - has no other prose/list/table content
function isLanguageImplementationSection(section) {
  if (!section || !section.heading) return false
  if (section.text || section.content || section.list || section.table || section.diagram || section.note) {
    return false
  }
  if (!section.example && !section.code) return false
  // If both code and example are present we still treat it as one — ExampleBox
  // handles the rendering.
  return Boolean(languageFromHeading(section.heading))
}

// Merge consecutive single-language implementation sections into a single
// tabbed section of the form { heading, type: 'languageTabs', examples }.
// Returns a new array; non-language sections pass through unchanged.
function mergeLanguageImplementationSections(sections) {
  if (!Array.isArray(sections) || sections.length === 0) return sections
  const out = []
  let i = 0
  while (i < sections.length) {
    const current = sections[i]
    if (!isLanguageImplementationSection(current)) {
      out.push(current)
      i += 1
      continue
    }
    // Collect this section + any following language-implementation sections.
    const group = [current]
    let j = i + 1
    while (j < sections.length && isLanguageImplementationSection(sections[j])) {
      group.push(sections[j])
      j += 1
    }
    if (group.length === 1) {
      out.push(current)
      i += 1
      continue
    }
    // Build a tabbed section. Prefer the first non-empty heading stripped of
    // its trailing "Implementation" so it reads naturally as a section title.
    const baseHeading = group[0].heading.replace(LANGUAGE_IMPLEMENTATION_RE, 'Implementation')
    const examples = group.map((section) => {
      const language = languageFromHeading(section.heading) || 'Example'
      const example = section.example || {
        title: section.heading,
        code: section.code,
        language: section.language,
        type: section.type,
      }
      return { language, example }
    })
    out.push({
      heading: baseHeading,
      type: 'languageTabs',
      examples,
    })
    i = j
  }
  return out
}

function scrollContentPanelToTop(element) {
  if (!element || typeof element.scrollTo !== 'function') return
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  element.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

function LanguageTabsSection({ examples, storageKey }) {
  const languages = useMemo(() => examples.map((e) => e.language), [examples])
  // Read the saved choice once on mount. Falls back to the first language
  // when no choice has been stored, the stored value is no longer available
  // (e.g. content changed), or storage is unavailable (SSR, private mode).
  const [active, setActive] = useState(() => {
    if (typeof window === 'undefined') return languages[0] || ''
    if (!storageKey) return languages[0] || ''
    try {
      const stored = window.localStorage.getItem(storageKey)
      if (stored && languages.includes(stored)) return stored
    } catch {
      // Storage may be disabled (Safari private mode, blocked cookies, etc.)
      // — fall through to the default and stay in-memory.
    }
    return languages[0] || ''
  })
  const chipsRef = useRef([])

  // Persist the active tab whenever it changes.
  useEffect(() => {
    if (typeof window === 'undefined' || !storageKey || !active) return
    try {
      window.localStorage.setItem(storageKey, active)
    } catch {
      // Swallow — persistence is best-effort.
    }
  }, [active, storageKey])

  // If the active language disappears (shouldn't happen, but be safe), fall
  // back to the first available one.
  const safeActive = languages.includes(active) ? active : languages[0]
  const current = examples.find((e) => e.language === safeActive) || examples[0]
  if (!current) return null
  const { example, language } = current

  // WAI-ARIA tablist keyboard pattern: Left/Right arrows move between tabs,
  // Home/End jump to the first/last tab, and focus follows activation.
  const focusChip = (idx) => {
    const node = chipsRef.current[idx]
    if (node) node.focus()
  }
  const handleChipKeyDown = (event, idx) => {
    const last = languages.length - 1
    let nextIdx
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIdx = idx === last ? 0 : idx + 1
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIdx = idx === 0 ? last : idx - 1
        break
      case 'Home':
        nextIdx = 0
        break
      case 'End':
        nextIdx = last
        break
      default:
        return
    }
    event.preventDefault()
    const nextLang = languages[nextIdx]
    if (nextLang) {
      setActive(nextLang)
      focusChip(nextIdx)
    }
  }

  return (
    <div className="language-tabs-section">
      <div className="language-tabs-chips" role="tablist" aria-label="Implementation language">
        {examples.map(({ language: lang }, idx) => (
          <button
            key={lang}
            ref={(el) => {
              chipsRef.current[idx] = el
            }}
            type="button"
            role="tab"
            id={`lang-tab-${lang.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            aria-selected={safeActive === lang}
            aria-controls="lang-tab-panel"
            tabIndex={safeActive === lang ? 0 : -1}
            className={`language-tab-chip${safeActive === lang ? ' language-tab-chip-active' : ''}`}
            onClick={() => setActive(lang)}
            onKeyDown={(event) => handleChipKeyDown(event, idx)}
          >
            {lang}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="lang-tab-panel"
        aria-labelledby={`lang-tab-${(safeActive || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        className="language-tab-panel"
      >
        <ExampleBox
          title={example.title || language}
          code={example.code}
          output={example.output}
          language={example.language}
          type={example.type || 'code'}
        />
      </div>
    </div>
  )
}

function Content({ subject, unit, topic, onNavigate, version, onOnePageView, subjectContent, loading, readingMode = false, toggleReadingMode }) {
  const contentRef = useRef(null)
  const [openAccordions, setOpenAccordions] = useState(new Set())

  useEffect(() => {
    scrollContentPanelToTop(contentRef.current)
  }, [subject, unit, topic])

  const content = subjectContent?.[unit]?.[topic]

  // Combine consecutive "Python Implementation" / "Java Implementation"
  // sections into a single tabbed section so users can switch between
  // language examples without scrolling through two large code blocks.
  const mergedSections = useMemo(
    () => mergeLanguageImplementationSections(content?.sections || []),
    [content]
  )

  const relatedInterviewQuestions = useMemo(() => {
    const results = []
    for (const [interviewSubject, indexes] of Object.entries(interviewRelatedTutorials)) {
      const subjectData = interviewSubjects[interviewSubject]
      if (!subjectData) continue
      for (const [index, tutorials] of Object.entries(indexes)) {
        const matches = tutorials.some(
          (t) => t.subject === subject && t.unit === unit && t.topic === topic
        )
        if (matches) {
          const q = interviewQuestions[interviewSubject]?.questions[index]
          if (q) {
            results.push({
              subject: interviewSubject,
              index: Number(index),
              title: q.question,
              subjectTitle: subjectData.title
            })
          }
        }
      }
    }
    return results.slice(0, 8)
  }, [subject, unit, topic])

  // Reset collapsed accordions when the topic changes.
  useEffect(() => {
    // Defer to a microtask to avoid cascading-render warnings while still
    // running after the topic change has been applied.
    queueMicrotask(() => setOpenAccordions(new Set()))
  }, [subject, unit, topic])
  const structure = getSubjectStructure(subject)
  const subjectTitle = subjectMeta[subject]?.title || APP_NAME
  
  // Build flat list of all topics in order
  const flatTopics = []
  if (structure) {
    Object.entries(structure).forEach(([unitKey, unitData]) => {
      unitData.topics.forEach((t) => {
        flatTopics.push({ unit: unitKey, topic: t.id, title: t.title, unitTitle: unitData.title })
      })
    })
  }
  
  // Find current index
  const currentIndex = flatTopics.findIndex(
    (t) => t.unit === unit && t.topic === topic
  )
  
  const prevTopic = currentIndex > 0 ? flatTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < flatTopics.length - 1 ? flatTopics[currentIndex + 1] : null
  
  if (loading) {
    return (
      <main ref={contentRef} className="content" role="main" aria-label="Course content">
        <div className="content-placeholder">
          <Loader size={40} className="loading-icon" aria-hidden="true" />
          <p>Loading content...</p>
        </div>
      </main>
    )
  }

  if (!content) {
    return (
      <main ref={contentRef} className="content" role="main" aria-label="Course content">
        <div className="content-placeholder">
          <h2>Welcome to {subjectTitle}</h2>
          <p>Select a topic from the sidebar to begin learning.</p>
        </div>
      </main>
    )
  }

  const toggleAccordion = (idx) => {
    setOpenAccordions(prev => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  const isCollapsibleSection = (heading) => {
    if (!heading) return false
    const lower = heading.toLowerCase().trim()
    if (lower.includes('practice question') || lower.includes('practice problem')) return true
    return (
      lower === 'common mistakes' ||
      lower === 'real-world application' ||
      lower === 'quick recap'
    )
  }

  const renderSectionBody = (section) => (
    <>
      {/* W3Schools-style content array */}
      {section.content && section.content.map((item, i) => (
        <div key={i} className="section-text" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      
            {/* W3Schools-style inline code block */}
      {section.code && (
        <ExampleBox
          title={section.heading || 'Example'}
          code={section.code}
          language={section.language}
          type="code"
        />
      )}
      
      {section.text && (
        <p className="section-text" dangerouslySetInnerHTML={{ __html: section.text }} />
      )}
      
      {section.list && (
        <ul className="section-list" role="list">
          {section.list.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
      
      {section.table && (
        <div className="table-wrapper" role="region" aria-label="Data table">
          <table className="data-table">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i} scope="col">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
            {section.example && (
        <ExampleBox
          title={section.example.title}
          code={section.example.code}
          output={section.example.output}
          language={section.example.language}
          type={section.example.type || 'code'}
        />
      )}
      
      {section.note && (
        <div className="note-box" role="note">
          <strong>Note:</strong> <span dangerouslySetInnerHTML={{ __html: section.note }} />
        </div>
      )}
      
      {section.diagram && (
        <MermaidDiagram
          chart={section.diagram.chart}
          caption={section.diagram.caption}
        />
      )}

      {section.type === 'languageTabs' && Array.isArray(section.examples) && section.examples.length > 0 && (
        <LanguageTabsSection
          examples={section.examples}
          storageKey={`tt:langTab:${subject}:${unit}:${topic}`}
        />
      )}
    </>
  )

  const renderSection = (section, idx) => {
    const isAccordion = isCollapsibleSection(section.heading)
    const isOpen = openAccordions.has(idx)

    if (isAccordion) {
      return (
        <div 
          key={idx}
          className="accordion-section"
        >
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(idx)}
            aria-expanded={isOpen}
            aria-controls={`accordion-body-${idx}`}
          >
            <span>{section.heading}</span>
            <ChevronDown size={20} className="accordion-icon" aria-hidden="true" />
          </button>
          <div
            id={`accordion-body-${idx}`}
            className={`accordion-body ${isOpen ? 'open' : ''}`}
            aria-hidden={!isOpen}
          >
            {renderSectionBody(section, idx)}
          </div>
        </div>
      )
    }

    return (
      <section 
        key={idx} 
        className="content-section"
        aria-labelledby={`section-heading-${idx}`}
      >
        {section.heading && (
          <h2 
            className="section-heading" 
            id={`section-heading-${idx}`}
          >
            {section.heading}
          </h2>
        )}
        {renderSectionBody(section, idx)}
      </section>
    )
  }

  return (
    <main ref={contentRef} className="content" role="main" aria-label="Course content">
      <div className="content-header">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb-list">
            <li><span className="breadcrumb-subject">{subjectTitle}</span></li>
            <li aria-hidden="true"><span className="breadcrumb-separator">›</span></li>
            <li><span className="breadcrumb-unit">{flatTopics[currentIndex]?.unitTitle || unit}</span></li>
          </ol>
        </nav>
        
        <h1 id="content-title">{content.title}</h1>
        {content.subtitle && <p className="subtitle" id="content-subtitle">{content.subtitle}</p>}
        
        <div className="download-bar" role="group" aria-label="View and download notes">
          <button 
            className="download-btn" 
            onClick={() => onOnePageView(unit)}
            aria-label="View all topics in this unit on one page"
            title="View unit on one page"
          >
            <Layers size={16} aria-hidden="true" />
            <span>View Unit</span>
          </button>
          <button 
            className="download-btn download-all" 
            onClick={() => onOnePageView('__all__')}
            aria-label="View entire subject on one page"
            title="View full subject"
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>View Full Subject</span>
          </button>
          <button
            className={`download-btn ${readingMode ? 'download-all' : ''}`}
            onClick={toggleReadingMode}
            aria-label={readingMode ? 'Exit reading mode' : 'Enter reading mode'}
            title={readingMode ? 'Exit reading mode' : 'Enter reading mode'}
          >
            {readingMode ? <Minimize2 size={16} aria-hidden="true" /> : <Focus size={16} aria-hidden="true" />}
            <span>{readingMode ? 'Exit Reading' : 'Reading Mode'}</span>
          </button>
        </div>
      </div>
      
      <div className="content-body" aria-labelledby="content-title">
        {readingMode && (
          <button
            type="button"
            className="reading-mode-exit"
            onClick={toggleReadingMode}
            aria-label="Exit reading mode"
            title="Exit reading mode"
          >
            <Minimize2 size={16} aria-hidden="true" />
            <span>Exit Reading</span>
          </button>
        )}
        {mergedSections.map((section, idx) => renderSection(section, idx))}

        {relatedInterviewQuestions.length > 0 && (
          <div className="related-interview-questions">
            <h3>Related Interview Questions</h3>
            <ul>
              {relatedInterviewQuestions.map((q) => (
                <li key={`${q.subject}-${q.index}`}>
                  <Link to={`/interview/${q.subject}`}>
                    <span className="related-iq-subject">{q.subjectTitle}</span>
                    <span className="related-iq-title">{q.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next / Previous Navigation */}
        <nav className="topic-nav" aria-label="Topic navigation">
          {prevTopic ? (
            <button 
              className="nav-btn nav-prev"
              onClick={() => onNavigate(prevTopic.unit, prevTopic.topic)}
              aria-label={`Previous topic: ${prevTopic.title}`}
            >
              <ChevronLeft size={20} aria-hidden="true" />
              <span className="nav-label">Previous</span>
              <span className="nav-topic">{prevTopic.title}</span>
            </button>
          ) : (
            <div className="nav-btn nav-placeholder" aria-hidden="true"></div>
          )}
          
          {nextTopic ? (
            <button 
              className="nav-btn nav-next"
              onClick={() => onNavigate(nextTopic.unit, nextTopic.topic)}
              aria-label={`Next topic: ${nextTopic.title}`}
            >
              <span className="nav-topic">{nextTopic.title}</span>
              <span className="nav-label">Next</span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          ) : (
            <div className="nav-btn nav-placeholder" aria-hidden="true"></div>
          )}
        </nav>
      </div>
      
      <footer className="content-footer">
        <p>{APP_NAME} v{version}</p>
      </footer>
    </main>
  )
}

export default Content
