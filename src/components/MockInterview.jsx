import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Eye,
  Play,
  RotateCcw,
  SkipForward,
  Target,
  Trophy
} from 'lucide-react'
import { interviewQuestions, interviewSubjects } from '../data/interviewData'
import { difficultyConfig } from './interviewUi'
import { formatTimer, pickRandomQuestions } from './interviewPrepUtils'
import PrepAnswer from './PrepAnswer'
import usePrepBack from './usePrepBack'
import styles from './Interview.module.css'

const QUESTION_COUNTS = [5, 10, 15, 20]
const MINUTES_PER_QUESTION = [1, 2, 3, 5]

const AVAILABLE_SUBJECTS = Object.entries(interviewSubjects)
  .filter(([, meta]) => meta.totalQuestions > 0)
  .map(([id, meta]) => ({
    id,
    title: meta.title.replace(' Interview Questions', ''),
    icon: meta.icon,
    count: meta.totalQuestions
  }))
  .sort((a, b) => a.title.localeCompare(b.title))

export default function MockInterview({ theme }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const presetSubject = searchParams.get('subject') || ''
  const { path: backPath, label: backLabel } = usePrepBack('/interview', 'Back to interview')

  const [phase, setPhase] = useState('setup')
  const [subjectId, setSubjectId] = useState(
    AVAILABLE_SUBJECTS.some(s => s.id === presetSubject) ? presetSubject : 'react'
  )
  const [questionCount, setQuestionCount] = useState(10)
  const [minutesPerQ, setMinutesPerQ] = useState(2)
  const [session, setSession] = useState([])
  const [current, setCurrent] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [revealedCount, setRevealedCount] = useState(0)

  const subjectMeta = interviewSubjects[subjectId]
  const questions = useMemo(
    () => interviewQuestions[subjectId]?.questions || [],
    [subjectId]
  )

  const startSession = useCallback(() => {
    const picked = pickRandomQuestions(questions, questionCount)
    if (picked.length === 0) return
    setSession(picked)
    setCurrent(0)
    setShowAnswer(false)
    setRevealedCount(0)
    setSecondsLeft(minutesPerQ * 60)
    setPhase('session')
  }, [questions, questionCount, minutesPerQ])

  const secondsLeftRef = useRef(secondsLeft)
  useEffect(() => {
    secondsLeftRef.current = secondsLeft
  }, [secondsLeft])

  useEffect(() => {
    if (phase !== 'session' || showAnswer) return undefined

    const timer = setInterval(() => {
      const next = secondsLeftRef.current - 1
      if (next <= 0) {
        setSecondsLeft(0)
        setShowAnswer(true)
        setRevealedCount(c => c + 1)
      } else {
        setSecondsLeft(next)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [phase, showAnswer])

  const currentEntry = session[current]
  const diff = currentEntry
    ? difficultyConfig[currentEntry.q.difficulty] || difficultyConfig.Beginner
    : null

  const goNext = () => {
    if (current < session.length - 1) {
      setCurrent(c => c + 1)
      setShowAnswer(false)
      setSecondsLeft(minutesPerQ * 60)
    } else {
      setPhase('complete')
    }
  }

  const revealAndCount = () => {
    if (!showAnswer) setRevealedCount(c => c + 1)
    setShowAnswer(true)
  }

  const timerPercent = useMemo(() => {
    const total = minutesPerQ * 60
    return total ? (secondsLeft / total) * 100 : 0
  }, [secondsLeft, minutesPerQ])

  if (phase === 'setup') {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <button type="button" className={styles.backBtn} onClick={() => navigate(backPath)}>
            <ArrowLeft size={16} />
            {backLabel}
          </button>

          <div className={styles.prepHero}>
            <div className={styles.prepHeroIcon}>
              <Target size={28} />
            </div>
            <h1>Mock Interview</h1>
            <p>Practice with timed questions — think through your answer, then reveal and move on.</p>
          </div>

          <div className={styles.prepForm}>
            <label className={styles.prepField}>
              <span>Subject</span>
              <select
                value={subjectId}
                onChange={e => setSubjectId(e.target.value)}
              >
                {AVAILABLE_SUBJECTS.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.icon} {s.title} ({s.count})
                  </option>
                ))}
              </select>
            </label>

            <div className={styles.prepField}>
              <span>Number of questions</span>
              <div className={styles.prepPills}>
                {QUESTION_COUNTS.map(n => (
                  <button
                    key={n}
                    type="button"
                    className={`${styles.toolbarPill} ${questionCount === n ? styles.toolbarPillActive : ''}`}
                    onClick={() => setQuestionCount(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.prepField}>
              <span>Minutes per question</span>
              <div className={styles.prepPills}>
                {MINUTES_PER_QUESTION.map(n => (
                  <button
                    key={n}
                    type="button"
                    className={`${styles.toolbarPill} ${minutesPerQ === n ? styles.toolbarPillActive : ''}`}
                    onClick={() => setMinutesPerQ(n)}
                  >
                    {n} min
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.prepPrimaryBtn}
              onClick={startSession}
              disabled={questions.length === 0}
            >
              <Play size={18} />
              Start mock session
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'complete') {
    return (
      <div className={`${styles.prepPage} ${theme}`}>
        <div className={styles.prepInner}>
          <div className={styles.prepComplete}>
            <div className={styles.prepCompleteIcon}>
              <Trophy size={36} />
            </div>
            <h1>Session complete</h1>
            <p>
              You finished {session.length} {subjectMeta?.title?.replace(' Interview Questions', '') || 'interview'} questions.
            </p>
            <div className={styles.prepStatsRow}>
              <div className={styles.prepStat}>
                <span className={styles.prepStatValue}>{session.length}</span>
                <span className={styles.prepStatLabel}>Questions</span>
              </div>
              <div className={styles.prepStat}>
                <span className={styles.prepStatValue}>{revealedCount}</span>
                <span className={styles.prepStatLabel}>Answers revealed</span>
              </div>
              <div className={styles.prepStat}>
                <span className={styles.prepStatValue}>{minutesPerQ * session.length}</span>
                <span className={styles.prepStatLabel}>Max minutes</span>
              </div>
            </div>
            <div className={styles.prepActionsRow}>
              <button type="button" className={styles.prepPrimaryBtn} onClick={startSession}>
                <RotateCcw size={16} />
                Try again
              </button>
              <button type="button" className={styles.actionBtn} onClick={() => navigate(`/interview/${subjectId}`)}>
                Browse all questions
              </button>
              <button type="button" className={styles.actionBtn} onClick={() => navigate(backPath)}>
                {backLabel}
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
        <div className={styles.mockTopBar}>
          <button type="button" className={styles.backBtn} onClick={() => setPhase('setup')}>
            <ArrowLeft size={16} />
            Exit
          </button>
          <div className={styles.mockProgress}>
            Question {current + 1} of {session.length}
          </div>
          <div className={styles.mockTimer} data-low={secondsLeft <= 30 && !showAnswer}>
            <Clock size={16} />
            {formatTimer(secondsLeft)}
          </div>
        </div>

        <div
          className={styles.mockTimerBar}
          style={{ width: `${timerPercent}%` }}
          data-low={secondsLeft <= 30 && !showAnswer}
        />

        {currentEntry && (
          <div className={styles.mockCard}>
            <div className={styles.questionMeta}>
              <span
                className={styles.qDifficulty}
                style={{ color: diff.color, background: diff.bg }}
              >
                {currentEntry.q.difficulty}
              </span>
              {currentEntry.q.tags?.slice(0, 2).map(tag => (
                <span key={tag} className={styles.qTag}>{tag}</span>
              ))}
            </div>
            <h2 className={styles.mockQuestion}>{currentEntry.q.question}</h2>

            {!showAnswer ? (
              <div className={styles.mockThink}>
                <p>Take a moment to answer out loud or in your head before revealing.</p>
                <div className={styles.prepActionsRow}>
                  <button type="button" className={styles.prepPrimaryBtn} onClick={revealAndCount}>
                    <Eye size={16} />
                    Reveal answer
                  </button>
                  <button type="button" className={styles.actionBtn} onClick={goNext}>
                    <SkipForward size={16} />
                    Skip
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.mockAnswer}>
                <PrepAnswer html={currentEntry.q.answer} useLanguageTabs={subjectId === 'coding'} />
                <div className={styles.prepActionsRow}>
                  <button type="button" className={styles.prepPrimaryBtn} onClick={goNext}>
                    {current < session.length - 1 ? (
                      <>
                        Next question
                        <ChevronRight size={16} />
                      </>
                    ) : (
                      <>
                        Finish session
                        <Trophy size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}