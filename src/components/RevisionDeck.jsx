import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Eye,
  ExternalLink,
  Layers,
  Shuffle
} from 'lucide-react'
import { interviewQuestions, interviewSubjects } from '../data/interviewData'
import { difficultyConfig } from './interviewUi'
import { getBookmarkedQuestions, shuffleArray } from './interviewPrepUtils'
import PrepAnswer from './PrepAnswer'
import usePrepBack from './usePrepBack'
import styles from './Interview.module.css'

export default function RevisionDeck({ theme }) {
  const navigate = useNavigate()
  const [filterSubject, setFilterSubject] = useState('all')
  const { path: backPath, label: backLabel } = usePrepBack('/interview', 'Back to interview')
  const [mode, setMode] = useState('list')
  const [current, setCurrent] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [shuffled, setShuffled] = useState(false)

  const allBookmarks = useMemo(
    () => getBookmarkedQuestions(interviewQuestions, interviewSubjects),
    []
  )

  const subjects = useMemo(() => {
    const map = new Map()
    allBookmarks.forEach(item => {
      if (!map.has(item.subjectId)) {
        map.set(item.subjectId, { id: item.subjectId, title: item.subjectTitle, icon: item.subjectIcon })
      }
    })
    return Array.from(map.values())
  }, [allBookmarks])

  const filtered = useMemo(() => {
    if (filterSubject === 'all') return allBookmarks
    return allBookmarks.filter(b => b.subjectId === filterSubject)
  }, [allBookmarks, filterSubject])

  const deck = useMemo(() => {
    return shuffled ? shuffleArray(filtered) : filtered
  }, [filtered, shuffled])

  const currentItem = deck[current]
  const diff = currentItem
    ? difficultyConfig[currentItem.question.difficulty] || difficultyConfig.Beginner
    : null

  const goNext = () => {
    setShowAnswer(false)
    setCurrent(c => Math.min(c + 1, deck.length - 1))
  }

  const goPrev = () => {
    setShowAnswer(false)
    setCurrent(c => Math.max(c - 1, 0))
  }

  const startStudy = () => {
    setMode('study')
    setCurrent(0)
    setShowAnswer(false)
  }

  if (allBookmarks.length === 0) {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <button type="button" className={styles.backBtn} onClick={() => navigate('/interview')}>
            <ArrowLeft size={16} />
            Back to interview
          </button>
          <div className={styles.emptyState}>
            <Bookmark size={48} style={{ opacity: 0.35, color: 'var(--accent-color)' }} />
            <h2>No bookmarks yet</h2>
            <p>Bookmark questions while studying to build your personal revision deck.</p>
            <button type="button" className={styles.prepPrimaryBtn} onClick={() => navigate('/interview/react')}>
              Browse questions
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'study' && currentItem) {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <div className={styles.mockTopBar}>
            <button type="button" className={styles.backBtn} onClick={() => setMode('list')}>
              <ArrowLeft size={16} />
              Deck
            </button>
            <div className={styles.mockProgress}>
              {current + 1} of {deck.length}
            </div>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={() => {
                setShuffled(s => !s)
                setCurrent(0)
                setShowAnswer(false)
              }}
            >
              <Shuffle size={14} />
              {shuffled ? 'Ordered' : 'Shuffle'}
            </button>
          </div>

          <div className={styles.mockCard}>
            <div className={styles.revisionSubject}>
              <span>{currentItem.subjectIcon}</span>
              {currentItem.subjectTitle}
            </div>
            <div className={styles.questionMeta}>
              <span
                className={styles.qDifficulty}
                style={{ color: diff.color, background: diff.bg }}
              >
                {currentItem.question.difficulty}
              </span>
            </div>
            <h2 className={styles.mockQuestion}>{currentItem.question.question}</h2>

            {!showAnswer ? (
              <button type="button" className={styles.prepPrimaryBtn} onClick={() => setShowAnswer(true)}>
                <Eye size={16} />
                Show answer
              </button>
            ) : (
              <div className={styles.mockAnswer}>
                <PrepAnswer
                  html={currentItem.question.answer}
                  useLanguageTabs={currentItem.subjectId === 'coding'}
                />
              </div>
            )}

            <div className={styles.revisionNav}>
              <button type="button" className={styles.actionBtn} onClick={goPrev} disabled={current === 0}>
                <ChevronLeft size={16} />
                Previous
              </button>
              <button
                type="button"
                className={styles.actionBtn}
                onClick={() => navigate(`/interview/${currentItem.subjectId}#question-${currentItem.index}`)}
              >
                <ExternalLink size={14} />
                Open in subject
              </button>
              <button
                type="button"
                className={styles.actionBtn}
                onClick={goNext}
                disabled={current >= deck.length - 1}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.prepPage} ${theme}`}>
      <div className={styles.prepInner}>
        <button type="button" className={styles.backBtn} onClick={() => navigate(backPath)}>
          <ArrowLeft size={16} />
          {backLabel}
        </button>

        <div className={styles.prepHero}>
          <div className={styles.prepHeroIcon}>
            <Bookmark size={28} />
          </div>
          <h1>Revision Deck</h1>
          <p>{allBookmarks.length} bookmarked questions across {subjects.length} subjects.</p>
        </div>

        <div className={styles.prepToolbar}>
          <div className={styles.prepPills}>
            <button
              type="button"
              className={`${styles.toolbarPill} ${filterSubject === 'all' ? styles.toolbarPillActive : ''}`}
              onClick={() => setFilterSubject('all')}
            >
              All ({allBookmarks.length})
            </button>
            {subjects.map(s => (
              <button
                key={s.id}
                type="button"
                className={`${styles.toolbarPill} ${filterSubject === s.id ? styles.toolbarPillActive : ''}`}
                onClick={() => setFilterSubject(s.id)}
              >
                {s.icon} {s.title}
              </button>
            ))}
          </div>
          <button type="button" className={styles.prepPrimaryBtn} onClick={startStudy} disabled={filtered.length === 0}>
            <Layers size={16} />
            Study deck ({filtered.length})
          </button>
        </div>

        <div className={styles.revisionList}>
          {filtered.map(item => {
            const cfg = difficultyConfig[item.question.difficulty] || difficultyConfig.Beginner
            return (
              <button
                key={`${item.subjectId}-${item.index}`}
                type="button"
                className={styles.revisionListItem}
                onClick={() => {
                  const idx = deck.findIndex(d => d.subjectId === item.subjectId && d.index === item.index)
                  setCurrent(idx >= 0 ? idx : 0)
                  setShowAnswer(false)
                  setMode('study')
                }}
              >
                <span className={styles.revisionListIcon}>{item.subjectIcon}</span>
                <div className={styles.revisionListBody}>
                  <span className={styles.revisionListSubject}>{item.subjectTitle}</span>
                  <span className={styles.revisionListQuestion}>{item.question.question}</span>
                </div>
                <span
                  className={styles.qDifficulty}
                  style={{ color: cfg.color, background: cfg.bg }}
                >
                  {item.question.difficulty}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}