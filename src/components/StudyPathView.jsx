import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Circle,
  Eye,
  Map,
  Play
} from 'lucide-react'
import { interviewQuestions, interviewSubjects } from '../data/interviewData'
import { studyPaths, getStudyPath } from '../data/interviewStudyPaths'
import { difficultyConfig } from './interviewUi'
import {
  ensureDayQuestions,
  getPathCompletionPercent,
  markDayComplete,
  readPathProgress
} from './interviewPrepUtils'
import PrepAnswer from './PrepAnswer'
import styles from './Interview.module.css'

export default function StudyPathView({ theme }) {
  const navigate = useNavigate()
  const { pathId } = useParams()
  const path = pathId ? getStudyPath(pathId) : null

  const [activeDay, setActiveDay] = useState(null)
  const [dayQuestions, setDayQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [progress, setProgress] = useState(() => (path ? readPathProgress(path.id) : null))

  const questions = useMemo(
    () => (path ? interviewQuestions[path.subject]?.questions || [] : []),
    [path]
  )
  const subjectMeta = path ? interviewSubjects[path.subject] : null

  const refreshProgress = useCallback(() => {
    if (path) setProgress(readPathProgress(path.id))
  }, [path])

  const completion = path && progress ? getPathCompletionPercent(path, progress) : 0

  const completedSet = useMemo(() => new Set(progress?.completedDays || []), [progress])
  const nextDay = useMemo(
    () => path?.days.find(d => !completedSet.has(d.day))?.day,
    [path, completedSet]
  )

  const startDay = useCallback((dayNumber) => {
    if (!path) return
    const prog = readPathProgress(path.id)
    const picked = ensureDayQuestions(path, dayNumber, questions, prog)
    setProgress(readPathProgress(path.id))
    setDayQuestions(picked)
    setActiveDay(dayNumber)
    setCurrent(0)
    setShowAnswer(false)
  }, [path, questions])

  const finishDay = () => {
    if (!path || !activeDay) return
    markDayComplete(path.id, activeDay)
    refreshProgress()
    setActiveDay(null)
    setDayQuestions([])
  }

  const currentEntry = dayQuestions[current]
  const diff = currentEntry
    ? difficultyConfig[currentEntry.q.difficulty] || difficultyConfig.Beginner
    : null

  const dayConfig = path?.days.find(d => d.day === activeDay)

  // Path list when no pathId or invalid
  if (!pathId) {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <button type="button" className={styles.backBtn} onClick={() => navigate('/interview')}>
            <ArrowLeft size={16} />
            Back to interview
          </button>
          <div className={styles.prepHero}>
            <div className={styles.prepHeroIcon}>
              <Map size={28} />
            </div>
            <h1>Study Paths</h1>
            <p>Structured, difficulty-curved plans to prepare over one or two weeks.</p>
          </div>
          <div className={styles.pathGrid}>
            {studyPaths.map(p => {
              const prog = readPathProgress(p.id)
              const pct = getPathCompletionPercent(p, prog)
              const sub = interviewSubjects[p.subject]
              return (
                <button
                  key={p.id}
                  type="button"
                  className={styles.pathCard}
                  style={{ '--path-gradient': p.gradient }}
                  onClick={() => navigate(`/interview/path/${p.id}`)}
                >
                  <div className={styles.pathCardTop}>
                    <span className={styles.pathCardIcon}>{p.icon}</span>
                    <span className={styles.pathCardDays}>{p.durationDays} days</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className={styles.pathCardMeta}>
                    <span>{sub?.totalQuestions || 0} questions pool</span>
                    {pct > 0 && <span>{pct}% complete</span>}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  if (!path) {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <button type="button" className={styles.backBtn} onClick={() => navigate('/interview/paths')}>
            <ArrowLeft size={16} />
            All paths
          </button>
          <div className={styles.emptyState}>
            <Map size={48} style={{ opacity: 0.35 }} />
            <h2>Path not found</h2>
            <button type="button" className={styles.prepPrimaryBtn} onClick={() => navigate('/interview/paths')}>
              Browse study paths
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (activeDay && currentEntry && dayConfig) {
    const isLast = current >= dayQuestions.length - 1

    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <div className={styles.mockTopBar}>
            <button type="button" className={styles.backBtn} onClick={() => setActiveDay(null)}>
              <ArrowLeft size={16} />
              Day {activeDay}
            </button>
            <div className={styles.mockProgress}>
              {current + 1} of {dayQuestions.length}
            </div>
            <span className={styles.pathDayBadge}>{dayConfig.title}</span>
          </div>

          <div className={styles.mockCard}>
            <div className={styles.questionMeta}>
              <span
                className={styles.qDifficulty}
                style={{ color: diff.color, background: diff.bg }}
              >
                {currentEntry.q.difficulty}
              </span>
              <span className={styles.qTag}>Day {activeDay}</span>
            </div>
            <h2 className={styles.mockQuestion}>{currentEntry.q.question}</h2>

            {!showAnswer ? (
              <button type="button" className={styles.prepPrimaryBtn} onClick={() => setShowAnswer(true)}>
                <Eye size={16} />
                Reveal answer
              </button>
            ) : (
              <div className={styles.mockAnswer}>
                <PrepAnswer html={currentEntry.q.answer} useLanguageTabs={path.subject === 'coding'} />
              </div>
            )}

            <div className={styles.revisionNav}>
              <button
                type="button"
                className={styles.actionBtn}
                onClick={() => {
                  setShowAnswer(false)
                  setCurrent(c => Math.max(0, c - 1))
                }}
                disabled={current === 0}
              >
                Previous
              </button>
              {!isLast ? (
                <button
                  type="button"
                  className={styles.prepPrimaryBtn}
                  onClick={() => {
                    setShowAnswer(false)
                    setCurrent(c => c + 1)
                  }}
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button type="button" className={styles.prepPrimaryBtn} onClick={finishDay}>
                  <CheckCircle2 size={16} />
                  Complete day {activeDay}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.prepPage} ${theme}`}>
      <div className={styles.prepInner}>
        <button type="button" className={styles.backBtn} onClick={() => navigate('/interview/paths')}>
          <ArrowLeft size={16} />
          All paths
        </button>

        <div className={styles.pathOverview} style={{ '--path-gradient': path.gradient }}>
          <div className={styles.pathOverviewIcon}>{path.icon}</div>
          <div>
            <h1>{path.title}</h1>
            <p>{path.description}</p>
            <div className={styles.pathOverviewMeta}>
              <span><Calendar size={14} /> {path.durationDays} days</span>
              <span><BookOpen size={14} /> {subjectMeta?.title?.replace(' Interview Questions', '')}</span>
              <span>{completion}% complete</span>
            </div>
            <div className={styles.subjectBarProgress} style={{ maxWidth: 280, marginTop: '0.75rem' }}>
              <div className={styles.subjectBarProgressFill} style={{ width: `${completion}%` }} />
            </div>
          </div>
        </div>

        <div className={styles.pathDayGrid}>
          {path.days.map(day => {
            const done = completedSet.has(day.day)
            const cfg = difficultyConfig[day.difficulty] || difficultyConfig.Mixed
            const isNext = !done && day.day === nextDay

            return (
              <button
                key={day.day}
                type="button"
                className={[
                  styles.pathDayCard,
                  done ? styles.pathDayDone : '',
                  isNext ? styles.pathDayNext : ''
                ].filter(Boolean).join(' ')}
                onClick={() => startDay(day.day)}
              >
                <div className={styles.pathDayHeader}>
                  <span className={styles.pathDayNum}>Day {day.day}</span>
                  {done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </div>
                <h4>{day.title}</h4>
                <div className={styles.pathDayFooter}>
                  <span
                    className={styles.qDifficulty}
                    style={{ color: cfg.color, background: cfg.bg }}
                  >
                    {day.difficulty}
                  </span>
                  <span>{day.count} questions</span>
                </div>
                {isNext && (
                  <span className={styles.pathDayCta}>
                    <Play size={12} /> Start today
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}