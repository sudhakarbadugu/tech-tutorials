import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  ChevronRight,
  Layers,
  LayoutGrid,
  MessageSquare,
  Printer,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X
} from 'lucide-react'
import { interviewQuestions, interviewSubjects, interviewCategories } from '../data/interviewData'
import { difficultyConfig, PROGRESS_KEY, BOOKMARKS_KEY } from './interviewUi'
import InterviewFooter from './InterviewFooter'
import styles from './Interview.module.css'

const SIDEBAR_COLLAPSED_KEY = 'interviewSidebarCollapsed'

function readSidebarCollapsed() {
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true'
  } catch {
    return false
  }
}

function readStoredProgress(subject) {
  try {
    const viewed = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}')
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
    return {
      viewed: viewed[subject] || [],
      bookmarks: bookmarks[subject] || []
    }
  } catch {
    return { viewed: [], bookmarks: [] }
  }
}

function flattenDetails(html) {
  if (!html) return html
  // Replace collapsible <details>/<summary> blocks with always-visible styled divs
  // so answers can be read continuously without extra clicks.
  return html
    .replace(/<details[^>]*>/gi, '<div class="answer-detail">')
    .replace(/<\/details>/gi, '</div>')
    .replace(/<summary>/gi, '<div class="answer-summary">')
    .replace(/<\/summary>/gi, '</div>')
}

function useInterviewStorage(subject) {
  const [progress, setProgress] = useState(() => readStoredProgress(subject))

  const markViewed = (index) => {
    setProgress(prev => {
      if (prev.viewed.includes(index)) return prev
      const next = { ...prev, viewed: [...prev.viewed, index] }
      try {
        const all = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}')
        all[subject] = next.viewed
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(all))
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  const toggleBookmark = (index) => {
    setProgress(prev => {
      const bookmarks = new Set(prev.bookmarks)
      if (bookmarks.has(index)) bookmarks.delete(index)
      else bookmarks.add(index)
      const next = { ...prev, bookmarks: Array.from(bookmarks) }
      try {
        const all = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '{}')
        all[subject] = next.bookmarks
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(all))
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  return { progress, markViewed, toggleBookmark }
}

function InterviewQuestion({
  q,
  globalIndex,
  isBookmarked,
  isViewed,
  diff,
  markViewed,
  toggleBookmark,
  setTopicFilter
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markViewed(globalIndex)
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [globalIndex, markViewed])

  return (
    <article
      ref={ref}
      id={`question-${globalIndex}`}
      className={[
        styles.questionCard,
        isViewed ? styles.questionCardViewed : ''
      ].filter(Boolean).join(' ')}
      style={{
        '--q-accent': diff.color,
        '--q-bg': diff.bg,
        '--q-border': diff.border
      }}
    >
      <div className={styles.questionHeader}>
        <div className={styles.questionNum}>{globalIndex + 1}</div>
        <div className={styles.questionTitle}>
          <h3 className={styles.questionText}>{q.question}</h3>
          <div className={styles.questionMeta}>
            <span
              className={styles.qDifficulty}
              style={{ color: diff.color, background: diff.bg }}
            >
              {q.difficulty}
            </span>
            {q.tags?.slice(0, 2).map(tag => (
              <span key={tag} className={styles.qTag}>{tag}</span>
            ))}
            {isViewed && <span className={styles.viewedTag}>Viewed</span>}
          </div>
        </div>
        <div className={styles.questionActions}>
          <button
            type="button"
            className={`${styles.bookmarkBtn} ${isBookmarked ? styles.bookmarkBtnActive : ''}`}
            onClick={() => toggleBookmark(globalIndex)}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

            <div className={styles.questionBody}>
        <div
          className={styles.answerContent}
          dangerouslySetInnerHTML={{ __html: flattenDetails(q.answer) }}
        />
        {q.tags && q.tags.length > 0 && (
          <div className={styles.questionTags}>
            {q.tags.map(tag => (
              <button
                key={tag}
                type="button"
                className={styles.tagBtn}
                onClick={() => setTopicFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function InterviewContent({ subject, onBack, onBackToHome, theme, onSelectSubject }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [topicFilter, setTopicFilter] = useState('all')
  const [groupByTopic, setGroupByTopic] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(readSidebarCollapsed)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const subjectData = interviewQuestions[subject]
  const meta = interviewSubjects[subject]
  const { progress, markViewed, toggleBookmark } = useInterviewStorage(subject)

  const allQuestions = useMemo(() => subjectData?.questions || [], [subjectData])

  const topics = useMemo(() => {
    const set = new Set()
    allQuestions.forEach(q => q.tags?.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [allQuestions])

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      const matchesSearch = !searchQuery ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesDifficulty = difficultyFilter === 'all' || q.difficulty === difficultyFilter
      const matchesTopic = topicFilter === 'all' || q.tags?.includes(topicFilter)
      return matchesSearch && matchesDifficulty && matchesTopic
    })
  }, [allQuestions, searchQuery, difficultyFilter, topicFilter])

  const groupedQuestions = useMemo(() => {
    if (!groupByTopic) return { 'All Questions': filteredQuestions }
    const groups = {}
    filteredQuestions.forEach(q => {
      const key = q.tags?.[0] || 'General'
      if (!groups[key]) groups[key] = []
      groups[key].push(q)
    })
    return groups
  }, [filteredQuestions, groupByTopic])

  const jumpToQuestion = (globalIndex) => {
    document.getElementById(`question-${globalIndex}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const clearFilters = () => {
    setSearchQuery('')
    setDifficultyFilter('all')
    setTopicFilter('all')
  }

  const currentIndex = allQuestions.findIndex((_, i) => !progress.viewed.includes(i))
  const nextUnviewed = currentIndex >= 0 ? currentIndex : 0
  const progressPercent = allQuestions.length
    ? Math.round((progress.viewed.length / allQuestions.length) * 100)
    : 0

  const activeFilters = searchQuery || difficultyFilter !== 'all' || topicFilter !== 'all'
  const panelFiltersActive = difficultyFilter !== 'all' || topicFilter !== 'all'

  const toggleSidebarCollapsed = () => {
    setSidebarCollapsed(prev => {
      const next = !prev
      try {
        localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(next))
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  const handleSubjectSelect = (id) => {
    onSelectSubject(id)
    setMobileSidebarOpen(false)
  }

  const showSidebarLabels = !sidebarCollapsed || mobileSidebarOpen

  const renderSubjectSidebar = () => (
    <>
      {mobileSidebarOpen && (
        <div
          className={`${styles.overlay} ${styles.overlayVisible}`}
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
      <aside
        className={[
          styles.subjectSidebar,
          sidebarCollapsed ? styles.subjectSidebarCollapsed : '',
          mobileSidebarOpen ? styles.subjectSidebarOpen : ''
        ].filter(Boolean).join(' ')}
      >
        <div className={styles.sidebarHeader}>
          {showSidebarLabels && (
            <h3>
              <BookOpen size={16} />
              Subjects
            </h3>
          )}
          <button
            type="button"
            className={styles.sidebarToggle}
            onClick={toggleSidebarCollapsed}
            title={sidebarCollapsed ? 'Expand subjects' : 'Collapse subjects'}
            aria-label={sidebarCollapsed ? 'Expand subjects sidebar' : 'Collapse subjects sidebar'}
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          <button
            type="button"
            className={styles.sidebarClose}
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close subjects sidebar"
          >
            <X size={18} />
          </button>
        </div>
        <div className={styles.sidebarScroll}>
          {Object.entries(interviewCategories).map(([catId, cat]) => {
            const visible = cat.subjects.filter(id => interviewSubjects[id]?.totalQuestions > 0)
            if (visible.length === 0) return null
            return (
              <div key={catId} className={styles.sidebarGroup}>
                {showSidebarLabels && (
                  <div className={styles.sidebarGroupTitle}>{cat.title}</div>
                )}
                {visible.map(id => {
                  const sub = interviewSubjects[id]
                  const isActive = id === subject
                  const shortName = sub.title.replace(' Interview Questions', '')
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`${styles.sidebarSubject} ${isActive ? styles.sidebarSubjectActive : ''}`}
                      onClick={() => handleSubjectSelect(id)}
                      title={shortName}
                    >
                      <span className={styles.sidebarSubjectIcon}>{sub.icon}</span>
                      {showSidebarLabels && (
                        <>
                          <span className={styles.sidebarSubjectName}>{shortName}</span>
                          <span className={styles.sidebarSubjectCount}>{sub.totalQuestions}</span>
                        </>
                      )}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </aside>
    </>
  )

  if (!subjectData || !meta) {
    return (
      <div className={`${styles.contentPage} ${theme}`}>
        <div className={styles.content}>
          {renderSubjectSidebar()}
          <div className={styles.contentMain}>
          <div className={styles.questionsInner}>
            <button className={styles.backBtn} onClick={onBack}>
              <ArrowLeft size={16} />
              Back to subjects
            </button>
            <div className={styles.emptyState}>
              <MessageSquare size={48} style={{ opacity: 0.4, color: 'var(--accent-color)' }} />
              <h2>Questions coming soon!</h2>
              <p>We're building questions for this subject. Check back shortly.</p>
            </div>
          </div>
          </div>
        </div>
        <InterviewFooter
          variant="subject"
          currentSubject={subject}
          onBackToHome={onBackToHome ?? onBack}
          onSelectSubject={onSelectSubject}
          onBackToAllInterview={onBack}
        />
      </div>
    )
  }

  const shortTitle = meta.title.replace(' Interview Questions', '')

  return (
    <div className={`${styles.contentPage} ${theme}`}>
    <div className={styles.content}>
      {renderSubjectSidebar()}
      <div className={styles.contentMain}>
        <div className={styles.questionsPanel}>
          <div className={styles.subjectBar}>
            <button className={styles.backBtn} onClick={onBack}>
              <ArrowLeft size={16} />
              <span>All</span>
            </button>
            <div className={styles.subjectBarIcon}>{meta.icon}</div>
            <div className={styles.subjectBarInfo}>
              <h1>{shortTitle}</h1>
              <div className={styles.subjectBarMeta}>
                <span>{allQuestions.length} questions</span>
                <span>·</span>
                <span>{progress.viewed.length} viewed</span>
                <div className={styles.subjectBarProgress}>
                  <div
                    className={styles.subjectBarProgressFill}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span>{progressPercent}%</span>
              </div>
            </div>
            <button
              type="button"
              className={styles.printBtn}
              onClick={() => window.print()}
              title="Print questions"
              aria-label="Print questions"
            >
              <Printer size={16} />
              <span className={styles.printBtnLabel}>Print</span>
            </button>
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open subjects sidebar"
            >
              <LayoutGrid size={16} />
              <span>Subjects</span>
            </button>
          </div>

          <div className={styles.questionsInner}>
            <div className={styles.stickyToolbar}>
              <div className={styles.toolbarHeader}>
                <div className={styles.toolbarSearch}>
                  <Search size={16} className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder="Search questions, answers, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className={styles.searchClear}
                      onClick={() => setSearchQuery('')}
                      style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  className={`${styles.filtersToggle} ${filtersOpen ? styles.filtersToggleOpen : ''}`}
                  onClick={() => setFiltersOpen(prev => !prev)}
                  aria-expanded={filtersOpen}
                  aria-controls="interview-filters-panel"
                >
                  <SlidersHorizontal size={15} />
                  <span>Filters</span>
                  {panelFiltersActive && <span className={styles.filtersBadge} aria-hidden />}
                  {filtersOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>

              {filtersOpen && (
                <div id="interview-filters-panel" className={styles.filtersPanel}>
                  <div className={styles.toolbarFilters}>
                    <span className={styles.toolbarLabel}>Level</span>
                    <div className={styles.toolbarPills}>
                      {['all', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                        <button
                          key={level}
                          className={`${styles.toolbarPill} ${difficultyFilter === level ? styles.toolbarPillActive : ''}`}
                          onClick={() => setDifficultyFilter(level)}
                        >
                          {level === 'all' ? 'All' : level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {topics.length > 0 && (
                    <div className={styles.toolbarFilters}>
                      <span className={styles.toolbarLabel}>Topic</span>
                      <div className={styles.toolbarPills}>
                        <button
                          className={`${styles.toolbarPill} ${topicFilter === 'all' ? styles.toolbarPillActive : ''}`}
                          onClick={() => setTopicFilter('all')}
                        >
                          All
                        </button>
                        {topics.map(topic => (
                          <button
                            key={topic}
                            className={`${styles.toolbarPill} ${topicFilter === topic ? styles.toolbarPillActive : ''}`}
                            onClick={() => setTopicFilter(topicFilter === topic ? 'all' : topic)}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={styles.toolbarActions}>
                    <button
                      type="button"
                      className={`${styles.actionBtn} ${groupByTopic ? styles.actionBtnActive : ''}`}
                      onClick={() => setGroupByTopic(!groupByTopic)}
                    >
                      <Layers size={13} />
                      Group by topic
                    </button>
                    {activeFilters && (
                      <button type="button" className={styles.actionBtn} onClick={clearFilters}>
                        <RotateCcw size={13} />
                        Clear filters
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!activeFilters && progress.viewed.length < allQuestions.length && (
              <div className={styles.quickJump}>
                <span>
                  <BookOpen size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
                  Pick up where you left off
                </span>
                <button
                  className={styles.quickJumpBtn}
                  onClick={() => jumpToQuestion(nextUnviewed)}
                >
                  Question {nextUnviewed + 1}
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

            <div className={styles.resultsHeader}>
              <h2>{groupByTopic ? 'By topic' : 'Questions'}</h2>
              <span className={styles.resultsCount}>
                {filteredQuestions.length} of {allQuestions.length}
              </span>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className={styles.emptyState}>
                <Search size={48} style={{ opacity: 0.35, color: 'var(--text-muted)' }} />
                <h3>No questions match</h3>
                <p>Try changing your search or filters.</p>
                <button className={styles.clearBtn} onClick={clearFilters}>Clear filters</button>
              </div>
            ) : (
              <div className={styles.questionsList}>
                {Object.entries(groupedQuestions).map(([group, questions]) => (
                  <div key={group} className={styles.questionGroup}>
                    {groupByTopic && <div className={styles.groupTitle}>{group}</div>}
                    {questions.map((q) => {
                      const globalIndex = allQuestions.indexOf(q)
                      const isBookmarked = progress.bookmarks.includes(globalIndex)
                      const diff = difficultyConfig[q.difficulty] || difficultyConfig.Beginner
                      const isViewed = progress.viewed.includes(globalIndex)

                      return (
                        <InterviewQuestion
                          key={globalIndex}
                          q={q}
                          globalIndex={globalIndex}
                          isBookmarked={isBookmarked}
                          isViewed={isViewed}
                          diff={diff}
                          markViewed={markViewed}
                          toggleBookmark={toggleBookmark}
                          setTopicFilter={setTopicFilter}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>

      <InterviewFooter
        variant="subject"
        currentSubject={subject}
        onBackToHome={onBackToHome ?? onBack}
        onSelectSubject={onSelectSubject}
        onBackToAllInterview={onBack}
      />
    </div>
  )
}

export default InterviewContent