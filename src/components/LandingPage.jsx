import { useState, useEffect, useMemo, useRef } from 'react'
import { APP_NAME } from '../constants/brand'
import {
  BookOpen,
  Brain,
  Eye,
  Layers,
  Image,
  MessageSquare,
  Cpu,
  BarChart3,
  Code2,
  Globe,
  GitBranch,
  Clock,
  Search,
  ArrowRight,
  Sparkles,
  GraduationCap,
  TrendingUp,
  Zap,
  ChevronRight,
  Moon,
  Sun,
  LayoutGrid,
  List,
  X,
  RotateCcw,
  History,
  Compass,
  Target,
  FileCode,
  Palette,
  Atom,
  Component,
  Smartphone,
  Database,
  Server,
  Cloud
} from 'lucide-react'
import { interviewSubjects, interviewCategories } from '../data/interviewData'
import { getSubjectProgress } from '../data/tutorialDataLoader'
import {
  categoryGradients,
  categoryColors,
  categoryBgColors,
  difficultyConfig,
  getSubjectProgress as getInterviewSubjectProgress
} from './interviewUi'
import styles from './LandingPage.module.css'

const subjectIcons = {
  ai: Brain,
  cv: Eye,
  dl: Layers,
  imaging: Image,
  llm: MessageSquare,
  mlalgo: Cpu,
  multimodal: GitBranch,
  python: Code2,
  java: Code2,
  javascript: Code2,
  html: FileCode,
  css: Palette,
  react: Atom,
  angular: Component,
  'react-native': Smartphone,
  nlp: Globe,
  rl: TrendingUp,
  stats: BarChart3,
  timeseries: Clock
}

const subjectColors = {
  ai: { bg: '#e8d5f7', accent: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' },
  cv: { bg: '#fce7f3', accent: '#db2777', gradient: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)' },
  dl: { bg: '#dbeafe', accent: '#2563eb', gradient: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)' },
  imaging: { bg: '#d1fae5', accent: '#059669', gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)' },
  llm: { bg: '#fef3c7', accent: '#d97706', gradient: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)' },
  mlalgo: { bg: '#ede9fe', accent: '#6d28d9', gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)' },
  multimodal: { bg: '#cffafe', accent: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)' },
  python: { bg: '#ffedd5', accent: '#ea580c', gradient: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)' },
  java: { bg: '#dbeafe', accent: '#1e40af', gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)' },
  javascript: { bg: '#fef3c7', accent: '#d97706', gradient: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)' },
  html: { bg: '#ffedd5', accent: '#c2410c', gradient: 'linear-gradient(135deg, #c2410c 0%, #fb923c 100%)' },
  css: { bg: '#dbeafe', accent: '#1d4ed8', gradient: 'linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)' },
  react: { bg: '#cffafe', accent: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)' },
  angular: { bg: '#fee2e2', accent: '#dc2626', gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)' },
  'react-native': { bg: '#e0f2fe', accent: '#0284c7', gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)' },
  nlp: { bg: '#fce7f3', accent: '#be185d', gradient: 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)' },
  rl: { bg: '#fee2e2', accent: '#dc2626', gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)' },
  stats: { bg: '#e0e7ff', accent: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)' },
  timeseries: { bg: '#dcfce7', accent: '#16a34a', gradient: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)' }
}

const categories = {
  all: { title: 'All Courses', icon: LayoutGrid },
  aiml: { title: 'AI & Machine Learning', icon: Brain, subjects: ['ai', 'cv', 'dl', 'llm', 'mlalgo', 'multimodal', 'nlp', 'rl'] },
  programming: { title: 'Programming & Web', icon: Code2, subjects: ['python', 'java', 'javascript', 'html', 'css', 'react', 'angular', 'react-native'] },
  data: { title: 'Data & Statistics', icon: BarChart3, subjects: ['stats', 'timeseries', 'imaging'] }
}

const interviewCategoryIcons = {
  all: LayoutGrid,
  backend: Server,
  web: Globe,
  frameworks: Component,
  database: Database,
  devops: Cloud,
  fundamentals: Cpu
}

const FALLBACK_RECOMMENDED = ['multimodal', 'python', 'javascript']

const FOOTER_COURSES = ['multimodal', 'ai', 'python', 'react', 'java', 'javascript']
const FOOTER_INTERVIEW = ['react', 'java', 'javascript', 'dsa', 'spring-boot', 'sql']

function LandingPage({
  subjects,
  onSelectSubject,
  onInterviewClick,
  onSelectInterviewSubject,
  onResumeTopic,
  theme,
  toggleTheme
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [interviewSearchQuery, setInterviewSearchQuery] = useState('')
  const [interviewCategory, setInterviewCategory] = useState('all')
  const [interviewViewMode, setInterviewViewMode] = useState('grid')
  const [recentlyViewed] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
      return Array.isArray(stored) ? stored : []
    } catch {
      return []
    }
  })
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const coursesRef = useRef(null)
  const interviewRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const sections = [
      { id: 'courses', ref: coursesRef.current },
      { id: 'interview', ref: interviewRef.current }
    ].filter(s => s.ref)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.dataset.section || '')
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(({ ref }) => observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  const subjectEntries = Object.entries(subjects)

  const filteredSubjects = useMemo(() => {
    let result = subjectEntries

    if (activeCategory !== 'all') {
      const allowed = new Set(categories[activeCategory].subjects)
      result = result.filter(([key]) => allowed.has(key))
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(([key, subject]) =>
        subject.title.toLowerCase().includes(q) ||
        key.toLowerCase().includes(q)
      )
    }

    return result
  }, [subjectEntries, activeCategory, searchQuery])

  const filteredInterviewSubjects = useMemo(() => {
    let result = Object.entries(interviewSubjects).filter(([, s]) => s.totalQuestions > 0)

    if (interviewCategory !== 'all') {
      const allowed = new Set(interviewCategories[interviewCategory].subjects)
      result = result.filter(([key]) => allowed.has(key))
    }

    if (interviewSearchQuery.trim()) {
      const q = interviewSearchQuery.toLowerCase()
      result = result.filter(([key, subject]) =>
        subject.title.toLowerCase().includes(q) ||
        (subject.description || '').toLowerCase().includes(q) ||
        (subject.topics || []).some(t => t.toLowerCase().includes(q)) ||
        key.toLowerCase().includes(q)
      )
    }

    return result
  }, [interviewCategory, interviewSearchQuery])

  const getInterviewCategory = (subjectId) => {
    return Object.entries(interviewCategories).find(([, cat]) => cat.subjects.includes(subjectId))?.[0] || 'all'
  }

  const clearInterviewFilters = () => {
    setInterviewSearchQuery('')
    setInterviewCategory('all')
  }

  const totalTopics = subjectEntries.reduce((acc, [, subject]) => {
    return acc + Object.values(subject.structure).reduce((sum, unit) => sum + unit.topics.length, 0)
  }, 0)

  const totalModules = subjectEntries.reduce((acc, [, subject]) => {
    return acc + Object.keys(subject.structure).length
  }, 0)

  const totalInterviewQuestions = Object.values(interviewSubjects).reduce((sum, s) => sum + (s.totalQuestions || 0), 0)

  const recommended = useMemo(() => {
    const viewedSubjects = new Set(recentlyViewed.map(r => r.subject))
    return FALLBACK_RECOMMENDED
      .filter(key => subjects[key] && !viewedSubjects.has(key))
      .slice(0, 3)
      .map(key => [key, subjects[key]])
  }, [recentlyViewed, subjects])

  const hasHistory = recentlyViewed.length > 0

  const footerCourses = useMemo(() => {
    return FOOTER_COURSES
      .filter(key => subjects[key])
      .map(key => ({ key, title: subjects[key].title }))
  }, [subjects])

  const footerInterview = useMemo(() => {
    return FOOTER_INTERVIEW
      .filter(id => interviewSubjects[id]?.totalQuestions > 0)
      .map(id => ({
        id,
        title: interviewSubjects[id].title.replace(' Interview Questions', '')
      }))
  }, [])

  const footerCategories = useMemo(() => {
    return Object.entries(categories)
      .filter(([key]) => key !== 'all')
      .map(([key, cat]) => ({ key, title: cat.title }))
  }, [])

  const scrollTo = (ref, sectionId) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Move focus to the section for screen-reader users
    if (ref.current) {
      ref.current.focus({ preventScroll: true })
      setActiveSection(sectionId)
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    setActiveCategory('all')
  }

  const jumpToCategory = (categoryKey) => {
    setActiveCategory(categoryKey)
    setSearchQuery('')
    scrollTo(coursesRef, 'courses')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubjectClick = (key) => {
    onSelectSubject(key)
  }

  const renderCourseCard = ([key, subject], index, compact = false) => {
    const Icon = subjectIcons[key] || BookOpen
    const colors = subjectColors[key] || { bg: '#f3f4f6', accent: '#6b7280', gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)' }
    const moduleCount = Object.keys(subject.structure).length
    const topicCount = Object.values(subject.structure).reduce((sum, unit) => sum + unit.topics.length, 0)
    const { percent: progressPercent } = getSubjectProgress(key, subjects)
    const isHovered = hoveredCard === key
    const categoryKey = Object.entries(categories).find(([, cat]) => cat.subjects?.includes(key))?.[0] || 'all'
    const categoryLabel = categories[categoryKey]?.title || 'Course'

    return (
      <div
        key={key}
        className={`${styles['course-card']} ${viewMode === 'list' ? styles.list : ''} ${compact ? styles.compact : ''}`}
        style={{
          animationDelay: `${index * 0.05}s`,
          '--card-accent': colors.accent,
          '--card-bg': colors.bg
        }}
        onMouseEnter={() => setHoveredCard(key)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => handleSubjectClick(key)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSubjectClick(key) }}
      >
        <div className={styles['course-card-glow']} style={{ opacity: isHovered ? 1 : 0 }}></div>
        <div className={styles['course-card-inner']}>
          <div className={styles['course-card-header']}>
            <div className={styles['course-icon-wrapper']} style={{ background: colors.gradient }}>
              <Icon size={compact ? 20 : 24} className={styles['course-icon']} />
            </div>
          </div>

          <div className={styles['course-category-chip']} style={{ color: colors.accent, background: colors.bg }}>
            {categoryLabel}
          </div>

          <h3 className={styles['course-title']}>{subject.title}</h3>

          <div className={styles['course-meta']}>
            <div className={styles['course-meta-item']}>
              <BookOpen size={14} />
              <span>{moduleCount} Modules</span>
            </div>
            <div className={styles['course-meta-item']}>
              <Zap size={14} />
              <span>{topicCount} Topics</span>
            </div>
          </div>

          {!compact && (
            <div className={styles['course-progress-bar']}>
              <div className={styles['course-progress-fill']} style={{ width: `${progressPercent}%`, background: colors.gradient }}></div>
            </div>
          )}

          <div className={styles['course-footer']}>
            <span className={styles['course-action']} style={{ color: colors.accent }}>
              Start Learning <ArrowRight size={14} />
            </span>
            <ChevronRight size={18} className={styles['course-chevron']} style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              color: colors.accent
            }} />
          </div>
        </div>
      </div>
    )
  }

  const renderInterviewCard = ([key, subject], index) => {
    const categoryId = getInterviewCategory(key)
    const gradient = categoryGradients[categoryId] || categoryGradients.web
    const accent = categoryColors[categoryId] || categoryColors.web
    const bg = categoryBgColors[categoryId] || categoryBgColors.web
    const { viewed } = getInterviewSubjectProgress(key)
    const progress = subject.totalQuestions ? Math.round((viewed / subject.totalQuestions) * 100) : 0
    const difficulty = subject.topics?.length > 3
      ? 'Mixed'
      : (subject.totalQuestions > 25 ? 'Intermediate' : 'Beginner')
    const diffCfg = difficultyConfig[difficulty] || difficultyConfig.Beginner
    const isHovered = hoveredCard === `interview-${key}`
    const displayTitle = subject.title.replace(' Interview Questions', '')
    const displayTopics = (subject.topics || []).slice(0, 3)
    const remainingTopics = Math.max(0, (subject.topics || []).length - 3)

    const handleCardClick = () => {
      if (onSelectInterviewSubject) {
        onSelectInterviewSubject(key)
      } else {
        onInterviewClick?.()
      }
    }

    return (
      <div
        key={`interview-${key}`}
        className={`${styles['interview-card']} ${interviewViewMode === 'list' ? styles.list : ''}`}
        style={{
          animationDelay: `${index * 0.05}s`,
          '--card-accent': accent,
          '--card-bg': bg
        }}
        onMouseEnter={() => setHoveredCard(`interview-${key}`)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick() }}
      >
        <div className={styles['interview-card-glow']} style={{ opacity: isHovered ? 1 : 0 }}></div>
        <div className={styles['interview-card-inner']}>
          <div className={styles['interview-card-header']}>
            <div className={styles['interview-icon-wrapper']} style={{ background: gradient }}>
              <span className={styles['interview-icon']}>{subject.icon}</span>
            </div>
            <span
              className={styles['interview-difficulty-badge']}
              style={{ color: diffCfg.color, background: diffCfg.bg, borderColor: diffCfg.border }}
            >
              {diffCfg.label}
            </span>
          </div>

          <h3 className={styles['interview-title']}>{displayTitle}</h3>
          <p className={styles['interview-description']}>{subject.description}</p>

          <div className={styles['interview-meta']}>
            <div className={styles['interview-meta-item']}>
              <MessageSquare size={14} />
              <span>{subject.totalQuestions} Questions</span>
            </div>
            <div className={styles['interview-meta-item']}>
              <Zap size={14} />
              <span>{(subject.topics || []).length} Topics</span>
            </div>
          </div>

          {displayTopics.length > 0 && (
            <div className={styles['interview-topic-tags']}>
              {displayTopics.map(t => (
                <span key={t} className={styles['interview-topic-tag']}>{t}</span>
              ))}
              {remainingTopics > 0 && (
                <span className={styles['interview-topic-tag']}>+{remainingTopics}</span>
              )}
            </div>
          )}

          <div className={styles['interview-progress-bar']}>
            <div className={styles['interview-progress-fill']} style={{ width: `${progress}%`, background: gradient }}></div>
          </div>

          <div className={styles['interview-footer']}>
            <span className={styles['interview-action']} style={{ color: accent }}>
              Practice Now <ArrowRight size={14} />
            </span>
            <ChevronRight size={18} className={styles['interview-chevron']} style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              color: accent
            }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles['landing-page']} ${theme}`}>
      {/* Navbar */}
      <nav className={`${styles['landing-navbar']} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles['landing-navbar-inner']}>
          <button
            type="button"
            className={styles['landing-navbar-brand']}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
            aria-label="Back to top"
          >
            <BookOpen size={24} className={styles['landing-navbar-logo']} aria-hidden="true" />
            <span>{APP_NAME}</span>
          </button>

          <div className={styles['landing-navbar-links']} role="tablist" aria-label="Page sections">
            <button
              role="tab"
              aria-selected={activeSection === 'courses'}
              aria-current={activeSection === 'courses' ? 'true' : undefined}
              onClick={() => scrollTo(coursesRef, 'courses')}
            >
              Courses
            </button>
            <button
              onClick={onInterviewClick}
            >
              Interview Prep
            </button>
          </div>

          <div className={styles['landing-navbar-actions']}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className={styles['landing-navbar-cta']} onClick={onInterviewClick}>
              Practice Interviews
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles['landing-hero']}>
        <div className={styles['landing-hero-bg']}>
          <div className={`${styles['landing-hero-blob']} ${styles['blob-1']}`}></div>
          <div className={`${styles['landing-hero-blob']} ${styles['blob-2']}`}></div>
          <div className={`${styles['landing-hero-blob']} ${styles['blob-3']}`}></div>
        </div>
        <div className={styles['landing-hero-content']}>
          <div className={styles['landing-hero-badge']}>
            <Sparkles size={14} />
            <span>Premium Learning Platform</span>
          </div>
          <h1 className={styles['landing-hero-title']}>
            Master <span className="gradient-text">AI & Machine Learning</span>
          </h1>
          <p className={styles['landing-hero-subtitle']}>
            Comprehensive tutorials and interview prep covering the full spectrum of artificial intelligence,
            programming, and data science — built for students, researchers, and professionals.
          </p>

          <div className={styles['landing-hero-actions']}>
            <button className={`${styles['hero-btn']} ${styles['hero-btn-primary']}`} onClick={() => scrollTo(coursesRef, 'courses')}>
              Explore Courses
              <ArrowRight size={18} />
            </button>
            <button className={`${styles['hero-btn']} ${styles['hero-btn-secondary']}`} onClick={onInterviewClick}>
              <Target size={18} />
              Practice Interviews
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles['landing-stats-bar']}>
        <div className={styles['landing-stats-bar-inner']}>
          <div className={styles['landing-stat']}>
            <div className={styles['landing-stat-icon']}><BookOpen size={20} /></div>
            <div>
              <div className={styles['landing-stat-number']}>{subjectEntries.length}</div>
              <div className={styles['landing-stat-label']}>Courses</div>
            </div>
          </div>
          <div className={styles['landing-stat-divider']}></div>
          <div className={styles['landing-stat']}>
            <div className={styles['landing-stat-icon']}><LayoutGrid size={20} /></div>
            <div>
              <div className={styles['landing-stat-number']}>{totalModules}+</div>
              <div className={styles['landing-stat-label']}>Modules</div>
            </div>
          </div>
          <div className={styles['landing-stat-divider']}></div>
          <div className={styles['landing-stat']}>
            <div className={styles['landing-stat-icon']}><Zap size={20} /></div>
            <div>
              <div className={styles['landing-stat-number']}>{totalTopics}+</div>
              <div className={styles['landing-stat-label']}>Topics</div>
            </div>
          </div>
          <div className={styles['landing-stat-divider']}></div>
          <div className={styles['landing-stat']}>
            <div className={styles['landing-stat-icon']}><MessageSquare size={20} /></div>
            <div>
              <div className={styles['landing-stat-number']}>{totalInterviewQuestions}+</div>
              <div className={styles['landing-stat-label']}>Interview Qs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Learning / Recommended */}
      {(hasHistory || recommended.length > 0) && (
        <section className={styles['continue-learning-section']}>
          <div className={styles['continue-learning-inner']}>
            <div className={styles['section-header-row']}>
              <div className={styles['section-header-left']}>
                <div className={styles['landing-section-badge']}>
                  {hasHistory ? <History size={16} /> : <Compass size={16} />}
                  <span>{hasHistory ? 'Continue Learning' : 'Recommended for You'}</span>
                </div>
                <h2 className={styles['landing-section-title']}>
                  {hasHistory ? 'Pick up where you left off' : 'Start with these popular courses'}
                </h2>
              </div>
            </div>

            {hasHistory ? (
              <div className={styles['continue-grid']}>
                {recentlyViewed.slice(0, 3).map((entry, index) => {
                  const colors = subjectColors[entry.subject] || { bg: '#f3f4f6', accent: '#6b7280', gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)' }
                  return (
                    <button
                      key={`${entry.subject}-${entry.timestamp}`}
                      className={styles['continue-card']}
                      style={{ animationDelay: `${index * 0.05}s`, '--card-accent': colors.accent }}
                      onClick={() => handleSubjectClick(entry.subject)}
                    >
                      <div className={styles['continue-card-accent']} style={{ background: colors.gradient }}></div>
                      <div className={styles['continue-card-body']}>
                        <h4>{entry.subjectTitle}</h4>
                        <p className={styles['continue-topic']}>{entry.topicTitle}</p>
                        <p className={styles['continue-unit']}>{entry.unitTitle}</p>
                        <span className={styles['continue-action']} style={{ color: colors.accent }}>
                          Resume <ArrowRight size={14} />
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className={`${styles['courses-grid']} ${styles.compact}`}>
                {recommended.map((entry, index) => renderCourseCard(entry, index, true))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Courses Section */}
      <section
        className={styles['landing-courses']}
        ref={coursesRef}
        data-section="courses"
        role="region"
        aria-label="Available courses"
        tabIndex={-1}
      >
        <div className={styles['landing-section-header']}>
          <div className={styles['landing-section-badge']}>
            <GraduationCap size={16} />
            <span>Available Courses</span>
          </div>
          <h2 className={styles['landing-section-title']}>
            {searchQuery ? `Search Results (${filteredSubjects.length})` : 'All Courses'}
          </h2>
        </div>

        {/* Controls */}
        <div className={styles['landing-controls']}>
          <div className={styles['landing-search']}>
            <Search size={20} className={styles['landing-search-icon']} />
            <input
              type="text"
              placeholder="Search courses by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles['landing-search-input']}
            />
            {searchQuery && (
              <button className={styles['landing-search-clear']} onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles['landing-categories']}>
            {Object.entries(categories).map(([key, cat]) => {
              const CatIcon = cat.icon
              return (
                <button
                  key={key}
                  className={`${styles['category-tab']} ${activeCategory === key ? styles.active : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <CatIcon size={16} />
                  <span>{cat.title}</span>
                </button>
              )
            })}
          </div>

          <div className={styles['landing-toolbar']}>
            <span className={styles['landing-results-count']}>{filteredSubjects.length} course{filteredSubjects.length !== 1 ? 's' : ''}</span>
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
                title="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
                title="List view"
              >
                <List size={16} />
              </button>
            </div>
            {(searchQuery || activeCategory !== 'all') && (
              <button className={styles['clear-filters-btn']} onClick={clearSearch}>
                <RotateCcw size={14} />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className={`${styles['courses-grid']} ${viewMode === 'list' ? styles['list-view'] : ''}`}>
          {filteredSubjects.map((entry, index) => renderCourseCard(entry, index))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className={styles['landing-empty']}>
            <Search size={48} className={styles['landing-empty-icon']} />
            <h3>No courses found</h3>
            <p>Try a different search term or category</p>
            <button className={styles['clear-search-btn']} onClick={clearSearch}>
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Interview Preparation Section */}
      <section
        className={styles['landing-interviews']}
        ref={interviewRef}
        data-section="interview"
        role="region"
        aria-label="Interview preparation"
        tabIndex={-1}
      >
        <div className={styles['landing-section-header']}>
          <div className={styles['landing-section-badge']}>
            <Target size={16} />
            <span>Interview Preparation</span>
          </div>
          <h2 className={styles['landing-section-title']}>
            {interviewSearchQuery ? `Search Results (${filteredInterviewSubjects.length})` : 'All Interview Subjects'}
          </h2>
        </div>

        {/* Controls */}
        <div className={styles['landing-controls']}>
          <div className={styles['landing-search']}>
            <Search size={20} className={styles['landing-search-icon']} />
            <input
              type="text"
              placeholder="Search interview subjects..."
              value={interviewSearchQuery}
              onChange={(e) => setInterviewSearchQuery(e.target.value)}
              className={styles['landing-search-input']}
            />
            {interviewSearchQuery && (
              <button className={styles['landing-search-clear']} onClick={() => setInterviewSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles['landing-categories']}>
            {Object.entries(interviewCategories).map(([key, cat]) => {
              const CatIcon = interviewCategoryIcons[key] || LayoutGrid
              return (
                <button
                  key={key}
                  className={`${styles['category-tab']} ${interviewCategory === key ? styles.active : ''}`}
                  onClick={() => setInterviewCategory(key)}
                >
                  <CatIcon size={16} />
                  <span>{cat.title}</span>
                </button>
              )
            })}
            <button
              className={`${styles['category-tab']} ${interviewCategory === 'all' ? styles.active : ''}`}
              onClick={() => setInterviewCategory('all')}
            >
              <LayoutGrid size={16} />
              <span>All Subjects</span>
            </button>
          </div>

          <div className={styles['landing-toolbar']}>
            <span className={styles['landing-results-count']}>
              {filteredInterviewSubjects.length} subject{filteredInterviewSubjects.length !== 1 ? 's' : ''}
            </span>
            <div className="view-toggle">
              <button
                className={interviewViewMode === 'grid' ? 'active' : ''}
                onClick={() => setInterviewViewMode('grid')}
                title="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                className={interviewViewMode === 'list' ? 'active' : ''}
                onClick={() => setInterviewViewMode('list')}
                title="List view"
              >
                <List size={16} />
              </button>
            </div>
            {(interviewSearchQuery || interviewCategory !== 'all') && (
              <button className={styles['clear-filters-btn']} onClick={clearInterviewFilters}>
                <RotateCcw size={14} />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className={`${styles['interview-grid']} ${interviewViewMode === 'list' ? styles['list-view'] : ''}`}>
          {filteredInterviewSubjects.map((entry, index) => renderInterviewCard(entry, index))}
        </div>

        {filteredInterviewSubjects.length === 0 && (
          <div className={styles['landing-empty']}>
            <Search size={48} className={styles['landing-empty-icon']} />
            <h3>No interview subjects found</h3>
            <p>Try a different search term or category</p>
            <button className={styles['clear-search-btn']} onClick={clearInterviewFilters}>
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className={styles['landing-footer']}>
        <div className={styles['landing-footer-inner']}>
          <div className={styles['footer-grid']}>
            <div className={styles['footer-brand-col']}>
              <div className={styles['landing-footer-brand']}>
                <BookOpen size={22} className={styles['landing-footer-logo']} />
                <span>{APP_NAME}</span>
              </div>
              <p className={styles['footer-tagline']}>
                {subjectEntries.length} courses, {totalModules} modules, {totalTopics} topics,
                and {totalInterviewQuestions}+ interview questions — all free to browse.
              </p>
              <div className={styles['footer-stats']}>
                <span><BookOpen size={14} /> {subjectEntries.length} courses</span>
                <span><LayoutGrid size={14} /> {totalModules} modules</span>
                <span><MessageSquare size={14} /> {totalInterviewQuestions}+ Q&amp;A</span>
              </div>
            </div>

            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Popular courses</h4>
              <ul className={styles['footer-link-list']}>
                {footerCourses.map(({ key, title }) => (
                  <li key={key}>
                    <button className={styles['footer-link']} onClick={() => handleSubjectClick(key)}>
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Interview topics</h4>
              <ul className={styles['footer-link-list']}>
                {footerInterview.map(({ id, title }) => (
                  <li key={id}>
                    <button
                      className={styles['footer-link']}
                      onClick={() => onSelectInterviewSubject?.(id) ?? onInterviewClick()}
                    >
                      {title}
                    </button>
                  </li>
                ))}
                <li>
                  <button className={styles['footer-link-accent']} onClick={onInterviewClick}>
                    Browse all subjects
                    <ArrowRight size={14} />
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Browse by area</h4>
              <ul className={styles['footer-link-list']}>
                {footerCategories.map(({ key, title }) => (
                  <li key={key}>
                    <button className={styles['footer-link']} onClick={() => jumpToCategory(key)}>
                      {title}
                    </button>
                  </li>
                ))}
              </ul>

              {hasHistory && (
                <>
                  <h4 className={`${styles['footer-col-title']} ${styles['footer-col-title-spaced']}`}>
                    <History size={14} />
                    Continue learning
                  </h4>
                  <ul className={styles['footer-link-list']}>
                    {recentlyViewed.slice(0, 3).map(entry => (
                      <li key={`${entry.subject}-${entry.topic}-${entry.timestamp}`}>
                        <button
                          className={styles['footer-link']}
                          onClick={() => {
                            if (onResumeTopic) {
                              onResumeTopic(entry.subject, entry.unit, entry.topic)
                            } else {
                              handleSubjectClick(entry.subject)
                            }
                          }}
                          title={entry.topicTitle}
                        >
                          {entry.subjectTitle}
                          <span className={styles['footer-link-meta']}>{entry.topicTitle}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className={styles['landing-footer-bottom']}>
            <span>© {new Date().getFullYear()} {APP_NAME}</span>
            <button className={styles['footer-back-top']} onClick={scrollToTop}>
              Back to top
              <ChevronRight size={14} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
