import { useMemo } from 'react'
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Code,
  Compass,
  ExternalLink,
  FlaskConical,
  Globe,
  GraduationCap,
  Heart,
  History,
  LayoutGrid,
  MessageSquare,
  Star,
  Target,
  Zap
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

const REPO_URL = 'https://github.com/sudhakarbadugu/tech-tutorials'
const ISSUES_URL = `${REPO_URL}/issues`
const SUGGEST_URL = `${REPO_URL}/issues/new`

function InterviewFooter({
  variant = 'landing',
  currentSubject,
  onBackToHome,
  onSelectSubject,
  onBackToAllInterview,
  onScrollToCategory,
  onMockInterview,
  onRevisionDeck,
  onStudyPaths
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

  const interviewGroups = useMemo(() => {
    return Object.entries(interviewCategories)
      .map(([key, cat]) => {
        const items = (cat.subjects || [])
          .filter(id => interviewSubjects[id]?.totalQuestions > 0)
          .map(id => ({
            id,
            title: interviewSubjects[id].title.replace(' Interview Questions', ''),
            count: interviewSubjects[id].totalQuestions
          }))
        return { key, title: cat.title, items }
      })
      .filter(group => group.items.length > 0)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectSubject = (id) => {
    onSelectSubject?.(id)
  }

  const handleMockInterview = () => onMockInterview?.()
  const handleRevisionDeck = () => onRevisionDeck?.()
  const handleStudyPaths = () => onStudyPaths?.()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerCtaStrip}>
        <div className={styles.footerCtaInner}>
          <div className={styles.footerCtaText}>
            <div className={styles.footerCtaIcon}>
              <BookOpen size={18} />
            </div>
            <div>
              <strong>Ready to build deeper skills?</strong>
              <span>Explore structured courses on AI, ML, programming, and data science.</span>
            </div>
          </div>
          <div className={styles.footerCtaActions}>
            <button
              className={styles.footerCtaBtnSecondary}
              onClick={onBackToHome}
            >
              Explore courses
              <ArrowRight size={14} />
            </button>
            <a
              className={styles.footerCtaBtn}
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star size={16} />
              Star on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <button
              type="button"
              className={styles.footerBrand}
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <GraduationCap size={22} className={styles.footerBrandIcon} />
              <span>Interview Prep</span>
            </button>
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
            <div className={styles.footerTech}>
              <span className={styles.footerTechLabel}>Top picks</span>
              <span className={styles.footerTechPill}>Java</span>
              <span className={styles.footerTechPill}>React</span>
              <span className={styles.footerTechPill}>System Design</span>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>
              <Target size={14} />
              Interview subjects
            </h4>
            <div className={styles.footerSubgroups}>
              {interviewGroups.slice(0, 4).map(group => (
                <div key={group.key} className={styles.footerSubgroup}>
                  <h5 className={styles.footerSubgroupTitle}>{group.title}</h5>
                  <ul className={styles.footerLinkList}>
                    {group.items.slice(0, 5).map(item => (
                      <li key={item.id}>
                        <button
                          className={styles.footerLink}
                          onClick={() => handleSelectSubject(item.id)}
                        >
                          {item.title}
                          <span className={styles.footerLinkMeta}>
                            {item.count} Q&amp;A
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerCol}>
            {variant === 'subject' && sameCategory?.subjects.length > 0 ? (
              <>
                <h4 className={styles.footerColTitle}>
                  More in {sameCategory.categoryTitle}
                </h4>
                <ul className={styles.footerLinkList}>
                  {sameCategory.subjects.map(({ id, title }) => {
                    const count = interviewSubjects[id]?.totalQuestions || 0
                    return (
                      <li key={id}>
                        <button
                          className={styles.footerLink}
                          onClick={() => handleSelectSubject(id)}
                        >
                          {title}
                          <span className={styles.footerLinkMeta}>
                            {count} Q&amp;A
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <>
                <h4 className={styles.footerColTitle}>Popular subjects</h4>
                <ul className={styles.footerLinkList}>
                  {popularSubjects.map(({ id, title }) => {
                    const count = interviewSubjects[id]?.totalQuestions || 0
                    return (
                      <li key={id}>
                        <button
                          className={styles.footerLink}
                          onClick={() => handleSelectSubject(id)}
                        >
                          {title}
                          <span className={styles.footerLinkMeta}>
                            {count} Q&amp;A
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </>
            )}

            <h4 className={`${styles.footerColTitle} ${styles.footerColTitleSpaced}`}>
              <LayoutGrid size={14} />
              Browse by category
            </h4>
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
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>
              <Zap size={14} />
              Practice &amp; tools
            </h4>
            <ul className={styles.footerLinkList}>
              <li>
                <button
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  onClick={handleMockInterview}
                >
                  <FlaskConical size={14} className={styles.footerLinkIcon} />
                  <span>Mock Interview</span>
                </button>
              </li>
              <li>
                <button
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  onClick={handleRevisionDeck}
                >
                  <BookOpen size={14} className={styles.footerLinkIcon} />
                  <span>Revision Deck</span>
                </button>
              </li>
              <li>
                <button
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  onClick={handleStudyPaths}
                >
                  <Compass size={14} className={styles.footerLinkIcon} />
                  <span>Study Paths</span>
                </button>
              </li>
              {variant === 'subject' && (
                <li>
                  <button
                    className={`${styles.footerLink} ${styles.footerLinkInline}`}
                    onClick={onBackToAllInterview}
                  >
                    <LayoutGrid size={14} className={styles.footerLinkIcon} />
                    <span>All interview subjects</span>
                  </button>
                </li>
              )}
            </ul>

            {recentSubject && recentSubject.id !== currentSubject && (
              <>
                <h4 className={`${styles.footerColTitle} ${styles.footerColTitleSpaced}`}>
                  <History size={14} />
                  Continue practicing
                </h4>
                <ul className={styles.footerLinkList}>
                  <li>
                    <button
                      className={styles.footerLink}
                      onClick={() => handleSelectSubject(recentSubject.id)}
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

            <h4 className={`${styles.footerColTitle} ${styles.footerColTitleSpaced}`}>
              <Globe size={14} />
              Connect
            </h4>
            <ul className={styles.footerLinkList}>
              <li>
                <a
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={14} className={styles.footerLinkIcon} />
                  <span>GitHub repository</span>
                  <ExternalLink size={11} className={styles.footerLinkExternal} />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  href={ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={14} className={styles.footerLinkIcon} />
                  <span>Report an issue</span>
                  <ExternalLink size={11} className={styles.footerLinkExternal} />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.footerLink} ${styles.footerLinkInline}`}
                  href={SUGGEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star size={14} className={styles.footerLinkIcon} />
                  <span>Suggest a topic</span>
                  <ExternalLink size={11} className={styles.footerLinkExternal} />
                </a>
              </li>
            </ul>

            <div className={styles.footerCredits}>
              <span className={styles.footerCreditsText}>
                Made with <Heart size={12} className={styles.footerCreditsHeart} /> for learners
              </span>
              <span className={styles.footerCreditsVersion}>v2.18.0</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerBottomText}>
            © {new Date().getFullYear()} {APP_NAME} · Interview Prep · Released under the MIT License
          </span>
          <div className={styles.footerBottomActions}>
            <a
              className={styles.footerBottomLink}
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={14} />
              Source
            </a>
            <a
              className={styles.footerBottomLink}
              href={ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
            <button className={styles.footerBackTop} onClick={scrollToTop}>
              Back to top
              <ChevronRight size={14} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default InterviewFooter
