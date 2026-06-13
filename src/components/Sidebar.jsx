import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { APP_NAME } from '../constants/brand'
import { subjectMeta, getSubjectProgress } from '../data/tutorialDataLoader'

function Sidebar({ subject, structure, activeUnit, activeTopic, onSelect, isOpen, setIsOpen }) {
  const [expandedUnits, setExpandedUnits] = useState(() => {
    const initial = {}
    Object.keys(structure).forEach(u => initial[u] = true)
    return initial
  })

  // Auto-close sidebar on mobile when topic is selected
  const handleTopicSelect = (unit, topic) => {
    onSelect(unit, topic)
    if (window.innerWidth <= 768 && setIsOpen) {
      setIsOpen(false)
    }
  }

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (!isOpen || !setIsOpen) return
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 768) {
        const sidebarEl = document.querySelector('.sidebar')
        const menuBtn = document.querySelector('.menu-btn')
        if (sidebarEl && !sidebarEl.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
          setIsOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, setIsOpen])

  const toggleUnit = (unit) => {
    setExpandedUnits(prev => ({ ...prev, [unit]: !prev[unit] }))
  }

  if (!isOpen) return null

  const { viewed, total, percent } = getSubjectProgress(subject, { [subject]: { structure } })

  return (
    <aside key={subject} className={`sidebar ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Course topics sidebar">
      <div className="sidebar-header">
        <h3 id="sidebar-heading">{subjectMeta[subject]?.title || APP_NAME}</h3>
        <div className="sidebar-progress" aria-label={`Progress: ${viewed} of ${total} topics viewed`}>
          <div className="sidebar-progress-track">
            <div className="sidebar-progress-fill" style={{ width: `${percent}%` }}></div>
          </div>
          <span className="sidebar-progress-text">{percent}% ({viewed}/{total})</span>
        </div>
      </div>
      <nav className="sidebar-nav" aria-labelledby="sidebar-heading">
        {Object.entries(structure).map(([unitKey, unit]) => (
          <div key={unitKey} className="unit-section">
            <button 
              className="unit-toggle"
              onClick={() => toggleUnit(unitKey)}
              aria-expanded={expandedUnits[unitKey]}
              aria-controls={`unit-panel-${unitKey}`}
            >
              {expandedUnits[unitKey] ? <ChevronDown size={16} aria-hidden="true" /> : <ChevronRight size={16} aria-hidden="true" />}
              <span className="unit-title">{unit.title}</span>
            </button>
            
            {expandedUnits[unitKey] && (
              <ul 
                className="topic-list" 
                id={`unit-panel-${unitKey}`}
                role="list"
              >
                {unit.topics.map((topic) => (
                  <li key={topic.id} role="listitem">
                    <button
                      className={`topic-btn ${activeUnit === unitKey && activeTopic === topic.id ? 'active' : ''}`}
                      onClick={() => handleTopicSelect(unitKey, topic.id)}
                      aria-current={activeUnit === unitKey && activeTopic === topic.id ? 'page' : undefined}
                    >
                      {topic.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
