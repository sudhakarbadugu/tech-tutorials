import {
  Moon,
  Sun,
  Menu,
  BookOpen,
  ChevronDown,
  Home,
  Brain,
  Code2,
  BarChart3,
  LayoutGrid,
  Server,
  Globe,
  Component,
  Database,
  Cloud,
  Cpu,
  Target,
  MessageSquare,
  ChevronRight
} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { APP_NAME } from '../constants/brand'

const categoryIcons = {
  aiml: Brain,
  programming: Code2,
  data: BarChart3,
  backend: Server,
  web: Globe,
  frameworks: Component,
  database: Database,
  devops: Cloud,
  fundamentals: Cpu
}

const categoryGradients = {
  aiml: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
  programming: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
  data: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
  backend: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)',
  web: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
  frameworks: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
  database: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
  devops: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
  fundamentals: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)'
}

const categoryColors = {
  aiml: '#7c3aed',
  programming: '#2563eb',
  data: '#059669',
  backend: '#16a34a',
  web: '#2563eb',
  frameworks: '#0d9488',
  database: '#d97706',
  devops: '#4f46e5',
  fundamentals: '#7c3aed'
}

function Header({
  theme,
  toggleTheme,
  version,
  sidebarOpen,
  setSidebarOpen,
  subjects,
  activeSubject,
  onSubjectChange,
  onBackToLanding,
  showBackButton,
  showMenuButton = true,
  mode = 'tutorials',
  categories = []
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on Escape for accessibility
  useEffect(() => {
    if (!dropdownOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [dropdownOpen])

  const isInterview = mode === 'interview'
  const activeData = subjects[activeSubject]
  const formatTitle = (title) => {
    if (!title) return ''
    return isInterview ? title.replace(' Interview Questions', ' Questions') : title
  }
  const toggleLabel = activeData ? formatTitle(activeData.title) : (isInterview ? 'Interview Prep' : 'Select Course')
  const toggleIcon = isInterview ? <Target size={16} /> : <BookOpen size={16} />
  const backTitle = isInterview ? 'Back to home' : 'Back to courses'

  const categoryList = Array.isArray(categories)
    ? categories
    : Object.entries(categories || {}).map(([key, cat]) => ({ key, ...cat }))

  const groupedSubjects = (() => {
    const entries = Object.entries(subjects || {})
    if (!categoryList || categoryList.length === 0) {
      return [{ key: 'all', title: isInterview ? 'All Subjects' : 'All Courses', subjects: entries }]
    }

    const grouped = []
    const used = new Set()

    categoryList.forEach((cat) => {
      const catSubjects = (cat.subjects || [])
        .filter((key) => subjects[key])
        .map((key) => [key, subjects[key]])
      catSubjects.forEach(([key]) => used.add(key))
      if (catSubjects.length > 0) {
        grouped.push({ ...cat, subjects: catSubjects })
      }
    })

    const remaining = entries.filter(([key]) => !used.has(key))
    if (remaining.length > 0) {
      grouped.push({ key: 'other', title: 'Other', subjects: remaining })
    }

    return grouped
  })()

  const handleSubjectSelect = (key) => {
    onSubjectChange(key)
    setDropdownOpen(false)
  }

  return (
    <header className="header">
      <div className="header-left">
        {showMenuButton && (
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
        )}

        {showBackButton && onBackToLanding && (
          <button
            className="menu-btn"
            onClick={onBackToLanding}
            title={backTitle}
            aria-label="Home"
            style={{ marginRight: '4px' }}
          >
            <Home size={20} aria-hidden="true" />
          </button>
        )}

        {onBackToLanding ? (
          <button
            type="button"
            className="logo logo-btn"
            onClick={onBackToLanding}
            title={backTitle}
            aria-label={APP_NAME}
          >
            <BookOpen size={24} className="logo-icon" aria-hidden="true" />
            <span className="logo-text">{APP_NAME}</span>
          </button>
        ) : (
          <div className="logo">
            <BookOpen size={24} className="logo-icon" />
            <span className="logo-text">{APP_NAME}</span>
          </div>
        )}

        <div className={`subject-dropdown ${isInterview ? 'interview-mode' : ''}`} ref={dropdownRef}>
          <button
            className="subject-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            aria-label={isInterview ? 'Select interview subject' : 'Select subject'}
          >
            <span className="subject-toggle-icon">{toggleIcon}</span>
            <span className="subject-toggle-label">{toggleLabel}</span>
            <ChevronDown size={16} aria-hidden="true" className={dropdownOpen ? 'open' : ''} />
          </button>
          {dropdownOpen && (
            <div
              className="subject-menu"
              role="listbox"
              aria-label={isInterview ? 'Available interview subjects' : 'Available subjects'}
            >
              <div className="subject-menu-grid">
                {groupedSubjects.map((group) => {
                  const CatIcon = categoryIcons[group.key] || LayoutGrid
                  const gradient = categoryGradients[group.key] || 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)'
                  const accent = categoryColors[group.key] || '#6b7280'
                  return (
                    <div key={group.key || group.title} className="subject-menu-category">
                      <div className="subject-menu-category-title" style={{ color: accent }}>
                        <span className="subject-menu-category-dot" style={{ background: gradient }}></span>
                        <CatIcon size={14} />
                        <span>{group.title}</span>
                      </div>
                      <div className="subject-menu-options">
                        {group.subjects.map(([key, subject]) => (
                          <button
                            key={key}
                            className={`subject-option ${activeSubject === key ? 'active' : ''}`}
                            onClick={() => handleSubjectSelect(key)}
                            role="option"
                            aria-selected={activeSubject === key}
                          >
                            {subject.icon && <span className="subject-option-icon">{subject.icon}</span>}
                            <span className="subject-name">{formatTitle(subject.title)}</span>
                            {activeSubject === key && <ChevronRight size={14} className="subject-option-check" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        <span className="version-badge">v{version}</span>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  )
}

export default Header
