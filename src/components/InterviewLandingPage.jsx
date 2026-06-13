import { useMemo, useState } from 'react'
import {
  MessageSquare,
  Search,
  Sparkles,
  BookOpen,
  X,
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  RotateCcw,
  LayoutGrid,
  Layers,
  Play,
  TrendingUp,
  Bookmark,
  Map
} from 'lucide-react'
import { interviewSubjects, interviewCategories, interviewQuestions } from '../data/interviewData'
import { getBookmarkedQuestions } from './interviewPrepUtils'
import { studyPaths } from '../data/interviewStudyPaths'
import {
  categoryGradients,
  categoryColors,
  categoryBgColors,
  difficultyConfig,
  getSubjectProgress
} from './interviewUi'
import InterviewFooter from './InterviewFooter'
import styles from './Interview.module.css'

function InterviewLandingPage({
  onSelectSubject,
  theme,
  onBack,
  onMockInterview,
  onRevisionDeck,
  onStudyPaths
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDifficulty, setActiveDifficulty] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('default')

  const recentSubject = useMemo(() => {
    try {
      const all = Object.entries(
        JSON.parse(localStorage.getItem('interviewProgress') || '{}')
      )
        .filter(([, viewed]) => viewed.length > 0)
        .sort((a, b) => b[1].length - a[1].length)

      if (all.length > 0) {
        const [id, viewed] = all[0]
        const sub = interviewSubjects[id]
        if (sub) {
          return {
            id,
            title: sub.title.replace(' Interview Questions', ''),
            icon: sub.icon,
            total: sub.totalQuestions,
            viewed: viewed.length
          }
        }
      }
    } catch {
      // ignore storage errors
    }
    return null
  }, [])

  const categories = useMemo(() => {
    return Object.entries(interviewCategories)
      .map(([key, cat]) => ({
        id: key,
        title: cat.title,
        color: categoryColors[key] || '#2563eb',
        gradient: categoryGradients[key] || categoryGradients.web,
        bg: categoryBgColors[key] || categoryBgColors.web,
        subjects: cat.subjects
          .filter(id => interviewSubjects[id] && interviewSubjects[id].totalQuestions > 0)
          .map(id => {
            const sub = interviewSubjects[id]
            const { viewed } = getSubjectProgress(id)
            return {
              id,
              title: sub.title.replace(' Interview Questions', ''),
              icon: sub.icon,
              count: sub.totalQuestions,
              difficulty: sub.topics?.length > 3
                ? 'Mixed'
                : (sub.totalQuestions > 25 ? 'Intermediate' : 'Beginner'),
              topics: sub.topics || [],
              progress: sub.totalQuestions ? Math.round((viewed / sub.totalQuestions) * 100) : 0
            }
          })
      }))
      .filter(cat => cat.subjects.length > 0)
  }, [])

  const allSubjects = useMemo(() => {
    return categories.flatMap(cat =>
      cat.subjects.map(s => ({
        ...s,
        categoryId: cat.id,
        categoryTitle: cat.title,
        categoryColor: cat.color
      }))
    )
  }, [categories])

  const totalQuestions = allSubjects.reduce((sum, s) => sum + s.count, 0)
  const totalSubjects = allSubjects.length

  const filteredSubjects = useMemo(() => {
    let filtered = allSubjects

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.topics.some(t => t.toLowerCase().includes(q)) ||
        s.categoryTitle.toLowerCase().includes(q)
      )
    }

    if (activeDifficulty && activeDifficulty !== 'all') {
      filtered = filtered.filter(s => s.difficulty === activeDifficulty)
    }

    if (activeCategory && activeCategory !== 'all') {
      filtered = filtered.filter(s => s.categoryId === activeCategory)
    }

    if (sortBy === 'questions') {
      filtered = [...filtered].sort((a, b) => b.count - a.count)
    } else if (sortBy === 'difficulty') {
      const order = { Beginner: 1, Intermediate: 2, Advanced: 3, Mixed: 4 }
      filtered = [...filtered].sort((a, b) => order[a.difficulty] - order[b.difficulty])
    } else if (sortBy === 'progress') {
      filtered = [...filtered].sort((a, b) => b.progress - a.progress)
    }

    return filtered
  }, [allSubjects, searchQuery, activeDifficulty, activeCategory, sortBy])

  const groupedByCategory = useMemo(() => {
    if (searchQuery || activeCategory !== 'all' || activeDifficulty) return null
    return categories
      .map(cat => ({
        ...cat,
        subjects: cat.subjects.filter(s =>
          filteredSubjects.some(f => f.id === s.id)
        )
      }))
      .filter(cat => cat.subjects.length > 0)
  }, [categories, filteredSubjects, searchQuery, activeCategory, activeDifficulty])

  const trendingSubjects = useMemo(() => {
    const trending = ['react', 'java', 'dsa', 'javascript', 'system-design', 'spring-boot']
    return allSubjects.filter(s => trending.includes(s.id)).slice(0, 6)
  }, [allSubjects])

  const clearFilters = () => {
    setSearchQuery('')
    setActiveDifficulty(null)
    setActiveCategory('all')
  }

  const hasActiveFilters = searchQuery || activeDifficulty || activeCategory !== 'all'

  const bookmarkCount = useMemo(
    () => getBookmarkedQuestions(interviewQuestions, interviewSubjects).length,
    []
  )

  const scrollToCategory = (catId) => {
    setActiveCategory('all')
    const el = document.getElementById(`category-${catId}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderSubjectCard = (subject) => {
    const config = difficultyConfig[subject.difficulty] || difficultyConfig.Mixed
    return (
      <button
        key={subject.id}
        className={styles.subjectCard}
        onClick={() => onSelectSubject(subject.id)}
        style={{ '--card-accent': subject.categoryColor || config.color }}
      >
        <div className={styles.subjectCardTop}>
          <div className={styles.subjectIcon}>{subject.icon}</div>
          <span
            className={styles.difficultyBadge}
            style={{ color: config.color, background: config.bg }}
          >
            {subject.difficulty}
          </span>
        </div>
        <h4 className={styles.subjectTitle}>{subject.title}</h4>
        <div className={styles.topicPills}>
          {subject.topics.slice(0, 3).map(t => (
            <span key={t} className={styles.topicPill}>{t}</span>
          ))}
          {subject.topics.length > 3 && (
            <span className={styles.topicPill}>+{subject.topics.length - 3}</span>
          )}
        </div>
        <div className={styles.subjectCardBottom}>
          <span>
            <MessageSquare size={12} style={{ marginRight: 4, verticalAlign: -2 }} />
            {subject.count} questions
          </span>
          {subject.progress > 0 && (
            <div className={styles.progressMini}>
              <div className={styles.progressMiniBar}>
                <div
                  className={styles.progressMiniFill}
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
              <span>{subject.progress}%</span>
            </div>
          )}
          <ChevronRight size={16} />
        </div>
      </button>
    )
  }

  const renderListItem = (subject) => {
    const config = difficultyConfig[subject.difficulty] || difficultyConfig.Mixed
    return (
      <button
        key={subject.id}
        className={styles.listItem}
        onClick={() => onSelectSubject(subject.id)}
        style={{ '--list-accent': subject.categoryColor }}
      >
        <div className={styles.subjectIcon}>{subject.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 className={styles.subjectTitle}>{subject.title}</h4>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
            {subject.categoryTitle} · {subject.count} questions
            {subject.progress > 0 && ` · ${subject.progress}% done`}
          </div>
        </div>
        <span
          className={styles.difficultyBadge}
          style={{ color: config.color, background: config.bg }}
        >
          {subject.difficulty}
        </span>
        <ChevronRight size={18} />
      </button>
    )
  }

  return (
    <div className={`${styles.landing} ${theme}`}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={`${styles.heroBlob} ${styles.heroBlob1}`} />
          <div className={`${styles.heroBlob} ${styles.heroBlob2}`} />
          <div className={`${styles.heroBlob} ${styles.heroBlob3}`} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Interview Preparation</span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroGradient}>Master Your</span>
            <br />
            Technical Interviews
          </h1>
          <p className={styles.heroSubtitle}>
            Browse by category, jump between subjects, and practice with detailed answers
            and code examples — all in one place.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <MessageSquare size={20} />
              <div>
                <span className={styles.heroStatValue}>{totalQuestions}+</span>
                <span className={styles.heroStatLabel}>Questions</span>
              </div>
            </div>
            <div className={styles.heroStat}>
              <BookOpen size={20} />
              <div>
                <span className={styles.heroStatValue}>{totalSubjects}</span>
                <span className={styles.heroStatLabel}>Subjects</span>
              </div>
            </div>
            <div className={styles.heroStat}>
              <Target size={20} />
              <div>
                <span className={styles.heroStatValue}>{categories.length}</span>
                <span className={styles.heroStatLabel}>Categories</span>
              </div>
            </div>
          </div>

          <div className={styles.quickPicks}>
            {trendingSubjects.slice(0, 5).map(s => (
              <button
                key={s.id}
                className={styles.quickPick}
                onClick={() => onSelectSubject(s.id)}
              >
                <span>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.controlsBar}>
        <div className={styles.controlsInner}>
          <div className={styles.searchRow}>
            <div className={styles.searchBox}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search subjects or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className={styles.searchClear} onClick={() => setSearchQuery('')}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className={styles.categoryTabs}>
            <button
              className={`${styles.categoryTab} ${activeCategory === 'all' ? styles.categoryTabActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
              <span className={styles.navCount}>{totalSubjects}</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
                onClick={() => {
                  if (hasActiveFilters && activeCategory !== cat.id) {
                    setActiveCategory(cat.id)
                  } else {
                    scrollToCategory(cat.id)
                  }
                }}
                style={activeCategory === cat.id ? {
                  '--tab-bg': cat.bg,
                  '--tab-color': cat.color
                } : {}}
              >
                <span className={styles.categoryDot} style={{ background: cat.gradient }} />
                {cat.title}
                <span className={styles.navCount}>{cat.subjects.length}</span>
              </button>
            ))}
          </div>

          <div className={styles.toolbar}>
            <div className={styles.filterChips}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginRight: 4 }}>Level:</span>
              <button
                className={`${styles.filterChip} ${activeDifficulty === null ? styles.filterChipActive : ''}`}
                onClick={() => setActiveDifficulty(null)}
              >
                All
              </button>
              {Object.entries(difficultyConfig).map(([key, config]) => (
                <button
                  key={key}
                  className={`${styles.filterChip} ${activeDifficulty === key ? styles.filterChipActive : ''}`}
                  onClick={() => setActiveDifficulty(activeDifficulty === key ? null : key)}
                  style={activeDifficulty === key ? { '--chip-bg': config.bg, '--chip-color': config.color } : {}}
                >
                  {config.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BarChart3 size={14} style={{ color: 'var(--text-muted)' }} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '0.35rem 0.6rem',
                    borderRadius: 8,
                    border: '1.5px solid var(--border-color)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.78rem'
                  }}
                >
                  <option value="default">Default</option>
                  <option value="questions">Most Questions</option>
                  <option value="difficulty">Difficulty</option>
                  <option value="progress">Your Progress</option>
                </select>
              </div>
              <div className={styles.viewToggle}>
                <button
                  className={viewMode === 'grid' ? styles.viewToggleActive : ''}
                  onClick={() => setViewMode('grid')}
                  title="Grid view"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  className={viewMode === 'list' ? styles.viewToggleActive : ''}
                  onClick={() => setViewMode('list')}
                  title="List view"
                >
                  <Layers size={16} />
                </button>
              </div>
              {hasActiveFilters && (
                <button className={styles.actionBtn} onClick={clearFilters}>
                  <RotateCcw size={14} />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarTitle}>
              <BookOpen size={14} />
              Jump to category
            </div>
            <button
              className={`${styles.navLink} ${activeCategory === 'all' && !hasActiveFilters ? styles.navLinkActive : ''}`}
              onClick={() => { setActiveCategory('all'); clearFilters() }}
            >
              <span className={styles.categoryDot} style={{ background: '#64748b' }} />
              All Subjects
              <span className={styles.navCount}>{totalSubjects}</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.navLink} ${activeCategory === cat.id ? styles.navLinkActive : ''}`}
                onClick={() => scrollToCategory(cat.id)}
              >
                <span className={styles.categoryDot} style={{ background: cat.gradient }} />
                {cat.title}
                <span className={styles.navCount}>{cat.subjects.length}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className={styles.main}>
          {!hasActiveFilters && (
            <section className={styles.prepToolsSection}>
              <div className={styles.sectionHeader}>
                <Zap size={18} style={{ color: 'var(--accent-color)' }} />
                <h2>Interview prep tools</h2>
              </div>
              <div className={styles.prepToolsGrid}>
                <button type="button" className={styles.prepToolCard} onClick={onMockInterview}>
                  <div className={styles.prepToolIcon} data-variant="mock">
                    <Target size={22} />
                  </div>
                  <div>
                    <h3>Mock Interview</h3>
                    <p>Random questions with a per-question timer. Think, reveal, and move on.</p>
                  </div>
                  <ChevronRight size={18} />
                </button>
                <button type="button" className={styles.prepToolCard} onClick={onRevisionDeck}>
                  <div className={styles.prepToolIcon} data-variant="revision">
                    <Bookmark size={22} />
                  </div>
                  <div>
                    <h3>Revision Deck</h3>
                    <p>
                      Review bookmarked questions
                      {bookmarkCount > 0 ? ` (${bookmarkCount})` : ''} in flashcard-style study mode.
                    </p>
                  </div>
                  <ChevronRight size={18} />
                </button>
                <button type="button" className={styles.prepToolCard} onClick={onStudyPaths}>
                  <div className={styles.prepToolIcon} data-variant="paths">
                    <Map size={22} />
                  </div>
                  <div>
                    <h3>Study Paths</h3>
                    <p>{studyPaths.length} curated plans — e.g. 2-week React prep with daily difficulty curves.</p>
                  </div>
                  <ChevronRight size={18} />
                </button>
              </div>
            </section>
          )}

          {!hasActiveFilters && recentSubject && (
            <div className={styles.continueCard}>
              <div className={styles.continueIcon}>
                <Play size={18} />
              </div>
              <div className={styles.continueInfo}>
                <h4>Continue where you left off</h4>
                <p>
                  {recentSubject.title} — {recentSubject.viewed} of {recentSubject.total} viewed
                </p>
              </div>
              <button className={styles.continueBtn} onClick={() => onSelectSubject(recentSubject.id)}>
                Resume
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {!hasActiveFilters && (
            <section style={{ marginBottom: '2rem' }}>
              <div className={styles.sectionHeader}>
                <TrendingUp size={18} style={{ color: 'var(--accent-color)' }} />
                <h2>Popular subjects</h2>
                <span className={styles.sectionCount}>{trendingSubjects.length}</span>
              </div>
              <div className={styles.featuredGrid}>
                {trendingSubjects.map(subject => {
                  const config = difficultyConfig[subject.difficulty] || difficultyConfig.Mixed
                  return (
                    <button
                      key={subject.id}
                      className={styles.featuredCard}
                      onClick={() => onSelectSubject(subject.id)}
                      style={{ '--card-accent': config.color }}
                    >
                      <div className={styles.featuredIcon}>{subject.icon}</div>
                      <div className={styles.featuredInfo}>
                        <h3>{subject.title}</h3>
                        <div className={styles.featuredMeta}>
                          <span>{subject.count} questions</span>
                          <span
                            className={styles.difficultyBadge}
                            style={{ color: config.color, background: config.bg }}
                          >
                            {subject.difficulty}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={18} />
                    </button>
                  )
                })}
              </div>
            </section>
          )}

          <section>
            <div className={styles.sectionHeader}>
              <Zap size={18} style={{ color: 'var(--accent-color)' }} />
              <h2>{hasActiveFilters ? 'Search Results' : 'Browse by Category'}</h2>
              <span className={styles.sectionCount}>{filteredSubjects.length} subjects</span>
            </div>

            {filteredSubjects.length === 0 ? (
              <div className={styles.emptyState}>
                <Search size={48} style={{ opacity: 0.35, color: 'var(--text-muted)' }} />
                <h3>No subjects found</h3>
                <p>Try adjusting your search or filters</p>
                <button className={styles.clearBtn} onClick={clearFilters}>Clear all filters</button>
              </div>
            ) : groupedByCategory && viewMode === 'grid' ? (
              groupedByCategory.map(cat => (
                <div key={cat.id} id={`category-${cat.id}`} className={styles.categorySection}>
                  <div className={styles.categoryHeader}>
                    <div
                      className={styles.categoryIcon}
                      style={{ background: cat.gradient }}
                    >
                      <BookOpen size={18} />
                    </div>
                    <h3>{cat.title}</h3>
                    <span className={styles.sectionCount}>{cat.subjects.length}</span>
                  </div>
                  <div className={styles.subjectGrid}>
                    {cat.subjects.map(renderSubjectCard)}
                  </div>
                </div>
              ))
            ) : viewMode === 'grid' ? (
              <div className={styles.subjectGrid}>
                {filteredSubjects.map(renderSubjectCard)}
              </div>
            ) : (
              <div className={styles.listView}>
                {filteredSubjects.map(renderListItem)}
              </div>
            )}
          </section>
        </main>
      </div>

      <InterviewFooter
        variant="landing"
        onBackToHome={onBack}
        onSelectSubject={onSelectSubject}
        onScrollToCategory={scrollToCategory}
      />
    </div>
  )
}

export default InterviewLandingPage