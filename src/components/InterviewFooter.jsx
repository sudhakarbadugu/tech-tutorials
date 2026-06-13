import { useMemo } from 'react'
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  History,
  LayoutGrid,
  MessageSquare,
  Target
} from 'lucide-react'
import { interviewSubjects, interviewCategories } from '../data/interviewData'
import { APP_NAME } from '../constants/brand'
import {
  getInterviewStats,
  getPopularInterviewSubjects,
  getRecentInterviewSubject,
  getSameCategorySubjects
} from './interviewUi'
import styles from './Interview.module.css'

function InterviewFooter({
  variant = 'landing',
  currentSubject,
  onBackToHome,
  onSelectSubject,
  onBackToAllInterview,
  onScrollToCategory
}) {
  const stats = useMemo(
    () => getInterviewStats(interviewCategories, interviewSubjects),
    []
  )

  const popularSubjects = useMemo(
    () => getPopularInterviewSubjects(interviewSubjects),
    []
  )

  const recentSubject = useMemo(
    () => getRecentInterviewSubject(interviewSubjects),
    []
  )

  const sameCategory = useMemo(() => {
    if (variant !== 'subject' || !currentSubject) return null
    return getSameCategorySubjects(interviewCategories, interviewSubjects, currentSubject)
  }, [variant, currentSubject])

  const currentMeta = currentSubject ? interviewSubjects[currentSubject] : null
  const currentShortTitle = currentMeta?.title.replace(' Interview Questions', '')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerBrand}>
              <GraduationCap size={22} className={styles.footerBrandIcon} />
              <span>Interview Prep</span>
            </div>
            {variant === 'subject' && currentMeta ? (
              <p className={styles.footerTagline}>
                Practicing <strong>{currentShortTitle}</strong> — {currentMeta.totalQuestions} questions
                with detailed answers, difficulty tags, and topic filters.
              </p>
            ) : (
              <p className={styles.footerTagline}>
                {stats.totalSubjects} subjects, {stats.totalQuestions}+ questions across{' '}
                {stats.categoryCount} categories — curated for technical interview prep.
              </p>
            )}
            <div className={styles.footerStats}>
              <span><MessageSquare size={14} /> {stats.totalQuestions}+ questions</span>
              <span><LayoutGrid size={14} /> {stats.totalSubjects} subjects</span>
              <span><Target size={14} /> {stats.categoryCount} categories</span>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Popular subjects</h4>
            <ul className={styles.footerLinkList}>
              {popularSubjects.map(({ id, title }) => (
                <li key={id}>
                  <button
                    className={styles.footerLink}
                    onClick={() => onSelectSubject(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerCol}>
            {variant === 'subject' && sameCategory?.subjects.length > 0 ? (
              <>
                <h4 className={styles.footerColTitle}>
                  More in {sameCategory.categoryTitle}
                </h4>
                <ul className={styles.footerLinkList}>
                  {sameCategory.subjects.map(({ id, title }) => (
                    <li key={id}>
                      <button
                        className={styles.footerLink}
                        onClick={() => onSelectSubject(id)}
                      >
                        {title}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h4 className={styles.footerColTitle}>Browse by category</h4>
                <ul className={styles.footerLinkList}>
                  {stats.categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        className={styles.footerLink}
                        onClick={() => {
                          if (onScrollToCategory) {
                            onScrollToCategory(cat.id)
                          } else {
                            onBackToAllInterview?.()
                          }
                        }}
                      >
                        {cat.title}
                        <span className={styles.footerLinkMeta}>
                          {cat.subjects.length} subjects
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Navigate</h4>
            <ul className={styles.footerLinkList}>
              {variant === 'subject' && (
                <li>
                  <button className={styles.footerLink} onClick={onBackToAllInterview}>
                    All interview subjects
                  </button>
                </li>
              )}
              <li>
                <button className={styles.footerLink} onClick={onBackToHome}>
                  {APP_NAME} courses
                </button>
              </li>
              {recentSubject && recentSubject.id !== currentSubject && (
                <li>
                  <button
                    className={styles.footerLink}
                    onClick={() => onSelectSubject(recentSubject.id)}
                  >
                    Resume {recentSubject.title}
                    <span className={styles.footerLinkMeta}>
                      {recentSubject.viewed} of {recentSubject.total} viewed
                    </span>
                  </button>
                </li>
              )}
            </ul>

            {recentSubject && variant === 'landing' && (
              <>
                <h4 className={`${styles.footerColTitle} ${styles.footerColTitleSpaced}`}>
                  <History size={14} />
                  Continue practicing
                </h4>
                <ul className={styles.footerLinkList}>
                  <li>
                    <button
                      className={styles.footerLink}
                      onClick={() => onSelectSubject(recentSubject.id)}
                    >
                      {recentSubject.title}
                      <span className={styles.footerLinkMeta}>
                        {recentSubject.viewed} of {recentSubject.total} viewed
                      </span>
                    </button>
                  </li>
                </ul>
              </>
            )}

            <button className={styles.footerLinkAccent} onClick={onBackToHome}>
              <BookOpen size={14} />
              Explore tutorials on {APP_NAME}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} {APP_NAME} · Interview Prep</span>
          <button className={styles.footerBackTop} onClick={scrollToTop}>
            Back to top
            <ChevronRight size={14} style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default InterviewFooter