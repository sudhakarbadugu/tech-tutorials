import { useState } from 'react'
import ExampleBox from './ExampleBox'
import MermaidDiagram from './MermaidDiagram'
import { ChevronLeft, ChevronRight, BookOpen, Layers, ChevronDown, Loader } from 'lucide-react'
import { getSubjectStructure, subjectMeta } from '../data/tutorialDataLoader'
import { APP_NAME } from '../constants/brand'

function Content({ subject, unit, topic, onNavigate, version, onOnePageView, subjectContent, loading }) {
  const [openAccordions, setOpenAccordions] = useState(new Set())
  const content = subjectContent?.[unit]?.[topic]
  const structure = getSubjectStructure(subject)
  const subjectTitle = subjectMeta[subject]?.title || APP_NAME
  
  // Build flat list of all topics in order
  const flatTopics = []
  if (structure) {
    Object.entries(structure).forEach(([unitKey, unitData]) => {
      unitData.topics.forEach((t) => {
        flatTopics.push({ unit: unitKey, topic: t.id, title: t.title, unitTitle: unitData.title })
      })
    })
  }
  
  // Find current index
  const currentIndex = flatTopics.findIndex(
    (t) => t.unit === unit && t.topic === topic
  )
  
  const prevTopic = currentIndex > 0 ? flatTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < flatTopics.length - 1 ? flatTopics[currentIndex + 1] : null
  
  if (loading) {
    return (
      <main className="content" role="main" aria-label="Course content">
        <div className="content-placeholder">
          <Loader size={40} className="loading-icon" aria-hidden="true" />
          <p>Loading content...</p>
        </div>
      </main>
    )
  }

  if (!content) {
    return (
      <main className="content" role="main" aria-label="Course content">
        <div className="content-placeholder">
          <h2>Welcome to {subjectTitle}</h2>
          <p>Select a topic from the sidebar to begin learning.</p>
        </div>
      </main>
    )
  }

  const toggleAccordion = (idx) => {
    setOpenAccordions(prev => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  const isPracticeQuestions = (heading) => {
    if (!heading) return false
    const lower = heading.toLowerCase()
    return lower.includes('practice question') || lower.includes('practice problem')
  }

  const renderSectionBody = (section) => (
    <>
      {/* W3Schools-style content array */}
      {section.content && section.content.map((item, i) => (
        <div key={i} className="section-text" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      
      {/* W3Schools-style inline code block */}
      {section.code && (
        <ExampleBox 
          title={section.heading || 'Example'}
          code={section.code}
          type="code"
        />
      )}
      
      {section.text && (
        <p className="section-text" dangerouslySetInnerHTML={{ __html: section.text }} />
      )}
      
      {section.list && (
        <ul className="section-list" role="list">
          {section.list.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
      
      {section.table && (
        <div className="table-wrapper" role="region" aria-label="Data table">
          <table className="data-table">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i} scope="col">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {section.example && (
        <ExampleBox 
          title={section.example.title} 
          code={section.example.code}
          output={section.example.output}
          type={section.example.type || 'code'}
        />
      )}
      
      {section.note && (
        <div className="note-box" role="note">
          <strong>Note:</strong> <span dangerouslySetInnerHTML={{ __html: section.note }} />
        </div>
      )}
      
      {section.diagram && (
        <MermaidDiagram
          chart={section.diagram.chart}
          caption={section.diagram.caption}
        />
      )}
    </>
  )

  const renderSection = (section, idx) => {
    const isAccordion = isPracticeQuestions(section.heading)
    const isOpen = openAccordions.has(idx)

    if (isAccordion) {
      return (
        <div 
          key={idx}
          className="accordion-section"
        >
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(idx)}
            aria-expanded={isOpen}
            aria-controls={`accordion-body-${idx}`}
          >
            <span>{section.heading}</span>
            <ChevronDown size={20} className="accordion-icon" aria-hidden="true" />
          </button>
          <div
            id={`accordion-body-${idx}`}
            className={`accordion-body ${isOpen ? 'open' : ''}`}
            aria-hidden={!isOpen}
          >
            {renderSectionBody(section, idx)}
          </div>
        </div>
      )
    }

    return (
      <section 
        key={idx} 
        className="content-section"
        aria-labelledby={`section-heading-${idx}`}
      >
        {section.heading && (
          <h2 
            className="section-heading" 
            id={`section-heading-${idx}`}
          >
            {section.heading}
          </h2>
        )}
        {renderSectionBody(section, idx)}
      </section>
    )
  }

  return (
    <main className="content" role="main" aria-label="Course content">
      <div className="content-header">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb-list">
            <li><span className="breadcrumb-subject">{subjectTitle}</span></li>
            <li aria-hidden="true"><span className="breadcrumb-separator">›</span></li>
            <li><span className="breadcrumb-unit">{flatTopics[currentIndex]?.unitTitle || unit}</span></li>
          </ol>
        </nav>
        
        <h1 id="content-title">{content.title}</h1>
        {content.subtitle && <p className="subtitle" id="content-subtitle">{content.subtitle}</p>}
        
        <div className="download-bar" role="group" aria-label="View and download notes">
          <button 
            className="download-btn" 
            onClick={() => onOnePageView(unit)}
            aria-label="View all topics in this unit on one page"
            title="View unit on one page"
          >
            <Layers size={16} aria-hidden="true" />
            <span>View Unit</span>
          </button>
          <button 
            className="download-btn download-all" 
            onClick={() => onOnePageView('__all__')}
            aria-label="View entire subject on one page"
            title="View full subject"
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>View Full Subject</span>
          </button>
        </div>
      </div>
      
      <div className="content-body" aria-labelledby="content-title">
        {content.sections.map((section, idx) => renderSection(section, idx))}
        
        {/* Next / Previous Navigation */}
        <nav className="topic-nav" aria-label="Topic navigation">
          {prevTopic ? (
            <button 
              className="nav-btn nav-prev"
              onClick={() => onNavigate(prevTopic.unit, prevTopic.topic)}
              aria-label={`Previous topic: ${prevTopic.title}`}
            >
              <ChevronLeft size={20} aria-hidden="true" />
              <span className="nav-label">Previous</span>
              <span className="nav-topic">{prevTopic.title}</span>
            </button>
          ) : (
            <div className="nav-btn nav-placeholder" aria-hidden="true"></div>
          )}
          
          {nextTopic ? (
            <button 
              className="nav-btn nav-next"
              onClick={() => onNavigate(nextTopic.unit, nextTopic.topic)}
              aria-label={`Next topic: ${nextTopic.title}`}
            >
              <span className="nav-topic">{nextTopic.title}</span>
              <span className="nav-label">Next</span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          ) : (
            <div className="nav-btn nav-placeholder" aria-hidden="true"></div>
          )}
        </nav>
      </div>
      
      <footer className="content-footer">
        <p>{APP_NAME} v{version}</p>
      </footer>
    </main>
  )
}

export default Content
