import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, BookOpen, MessageSquare, FileQuestion } from 'lucide-react'
import { getGroupedSearchResults, SEARCH_TYPES } from '../data/searchIndex'

const TYPE_LABELS = {
  [SEARCH_TYPES.TUTORIAL_TOPIC]: 'Tutorials',
  [SEARCH_TYPES.TUTORIAL_CONTENT]: 'Tutorial Content',
  [SEARCH_TYPES.INTERVIEW_SUBJECT]: 'Interview Subjects',
  [SEARCH_TYPES.INTERVIEW_QUESTION]: 'Interview Questions',
}

const TYPE_ICONS = {
  [SEARCH_TYPES.TUTORIAL_TOPIC]: BookOpen,
  [SEARCH_TYPES.TUTORIAL_CONTENT]: BookOpen,
  [SEARCH_TYPES.INTERVIEW_SUBJECT]: MessageSquare,
  [SEARCH_TYPES.INTERVIEW_QUESTION]: FileQuestion,
}

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

export default function GlobalSearch({ isOpen, onClose }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const modalRef = useRef(null)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const debouncedQuery = useDebounce(query, 150)

  const flatResults = useMemo(() => {
    if (!debouncedQuery.trim()) return []
    const groups = getGroupedSearchResults(debouncedQuery, { limit: 30 })
    const results = []
    for (const type of Object.values(SEARCH_TYPES)) {
      if (groups[type]) {
        results.push(...groups[type].slice(0, 8))
      }
    }
    return results
  }, [debouncedQuery])

  const handleSelect = useCallback((item) => {
    onClose()
    setQuery('')
    setSelectedIndex(0)
    navigate(item.url)

    if (item.meta?.subject && item.meta?.questionIndex !== undefined) {
      // Give the interview page time to mount, then scroll to the question
      setTimeout(() => {
        const el = document.getElementById(`question-${item.meta.questionIndex}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [navigate, onClose])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(event) {
      if (!isOpen) return

      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (flatResults.length === 0) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % flatResults.length)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + flatResults.length) % flatResults.length)
      } else if (event.key === 'Enter') {
        event.preventDefault()
        const selected = flatResults[selectedIndex] ?? flatResults[0]
        if (selected) {
          handleSelect(selected)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, flatResults, selectedIndex, onClose, handleSelect])

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="global-search-overlay" role="dialog" aria-modal="true" aria-label="Global search">
      <div className="global-search-modal" ref={modalRef}>
        <div className="global-search-header">
          <Search size={20} className="global-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="global-search-input"
            placeholder="Search tutorials, topics, and interview questions..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            aria-label="Search"
          />
          <button
            type="button"
            className="global-search-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        <div className="global-search-results">
          {!query.trim() && (
            <div className="global-search-empty">
              Type to search across tutorials and interviews.
              <div className="global-search-hint">Press ↑ ↓ to navigate, ↵ to select, Esc to close.</div>
            </div>
          )}

          {query.trim() && flatResults.length === 0 && (
            <div className="global-search-empty">
              No results found for "{query}".
            </div>
          )}

          {flatResults.length > 0 && (
            <ul className="global-search-list" role="listbox">
              {flatResults.map((item, index) => {
                const Icon = TYPE_ICONS[item.type] || FileQuestion
                const isSelected = index === selectedIndex
                return (
                  <li
                    key={`${item.type}-${item.url}-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    className={`global-search-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <Icon size={16} className="global-search-item-icon" />
                    <div className="global-search-item-body">
                      <div className="global-search-item-title">{item.title}</div>
                      <div className="global-search-item-meta">{TYPE_LABELS[item.type]}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
