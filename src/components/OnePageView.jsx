import { useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import html2pdf from 'html2pdf.js'
import { Download, ArrowLeft, Printer, Loader } from 'lucide-react'
import { getSubjectStructure, subjectMeta } from '../data/tutorialDataLoader'
import { APP_NAME } from '../constants/brand'
import '../styles/OnePageView.css'

function OnePageView({ subject, unit, onClose, theme, subjectContent }) {
  const pdfRef = useRef(null)
  const previewRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const meta = subjectMeta[subject]
  const subjectTitle = meta?.title || APP_NAME
  const structure = getSubjectStructure(subject)
  const content = subjectContent

  const isFullSubject = unit === '__all__'

  const getTopicsToRender = () => {
    const result = []
    if (isFullSubject) {
      Object.entries(structure).forEach(([unitKey, unitData]) => {
        unitData.topics.forEach((t) => {
          const tc = content?.[unitKey]?.[t.id]
          if (tc) {
            result.push({ unitKey, unitTitle: unitData.title, topicId: t.id, topicTitle: t.title, data: tc })
          }
        })
      })
    } else {
      const unitData = structure?.[unit]
      if (unitData) {
        unitData.topics.forEach((t) => {
          const tc = content?.[unit]?.[t.id]
          if (tc) {
            result.push({ unitKey: unit, unitTitle: unitData.title, topicId: t.id, topicTitle: t.title, data: tc })
          }
        })
      }
    }
    return result
  }

  const topics = getTopicsToRender()

  const downloadPDF = useCallback(async () => {
    if (!previewRef.current || isGenerating) return
    setIsGenerating(true)

    const filename = isFullSubject
      ? `${subject}_${subjectTitle.replace(/\s+/g, '_')}_Complete.pdf`
      : `${subject}_${topics[0]?.unitTitle?.replace(/\s+/g, '_').replace(/[:\/]/g, '') || unit}.pdf`

    const element = previewRef.current

    // Temporarily adjust for PDF capture
    const originalMaxWidth = element.style.maxWidth
    const originalMargin = element.style.margin
    const originalBoxShadow = element.style.boxShadow
    element.style.maxWidth = '794px'
    element.style.margin = '0'
    element.style.boxShadow = 'none'

    const opt = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 794,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollY: 0,
        scrollX: 0
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true
      },
      pagebreak: {
        mode: ['css', 'legacy'],
        before: '.pdf-topic',
        avoid: ['pre', 'code', '.pdf-table', '.pdf-example', '.pdf-note']
      }
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } catch (err) {
      console.error('PDF generation failed:', err)
      alert('PDF generation failed. Please try using Print > Save as PDF instead.')
    } finally {
      element.style.maxWidth = originalMaxWidth
      element.style.margin = originalMargin
      element.style.boxShadow = originalBoxShadow
      setIsGenerating(false)
    }
  }, [isGenerating, isFullSubject, subject, subjectTitle, topics, unit])

  const printPage = () => {
    const originalTitle = document.title
    document.title = isFullSubject ? `${subjectTitle} - Complete Notes` : `${topics[0]?.unitTitle || unit} - Notes`
    window.print()
    document.title = originalTitle
  }

  // PDF content rendered via portal into document.body (outside fixed overlay)
  const pdfPortalContent = (
    <div
      ref={pdfRef}
      className="pdf-export-target"
      aria-hidden="true"
    >
      <div className="pdf-export-inner">
        <div className="pdf-export-cover">
          <h1>{isFullSubject ? subjectTitle : topics[0]?.unitTitle}</h1>
          <p className="pdf-export-subtitle">
            {isFullSubject ? 'Complete Subject Notes' : `${subjectTitle}`}
          </p>

          <p className="pdf-export-meta">Generated on {new Date().toLocaleDateString()}</p>
        </div>

        <div className="pdf-export-toc">
          <h2>Table of Contents</h2>
          <ul>
            {topics.map((t, i) => (
              <li key={i}>
                <span className="pdf-export-toc-num">{i + 1}.</span> {t.data.title}
                {isFullSubject && <span className="pdf-export-toc-unit"> — {t.unitTitle}</span>}
              </li>
            ))}
          </ul>
        </div>

        {topics.map((t) => (
          <div key={t.topicId} className="pdf-export-topic">
            {isFullSubject && (
              <div className="pdf-export-unit-label">{t.unitTitle}</div>
            )}
            <h2>{t.data.title}</h2>
            {t.data.subtitle && <p className="pdf-export-topic-sub">{t.data.subtitle}</p>}

            {t.data.sections.map((section, sidx) => (
              <div key={sidx} className="pdf-export-section">
                {section.heading && <h3>{section.heading}</h3>}
                {section.text && <p dangerouslySetInnerHTML={{ __html: section.text }} />}
                {section.list && (
                  <ul>
                    {section.list.map((item, li) => (
                      <li key={li} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {section.table && (
                  <table className="pdf-export-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((h, hi) => (
                          <th key={hi}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {section.example && (
                  <div className="pdf-export-example">
                    <h4>{section.example.title}</h4>
                    {section.example.code && (
                      <pre><code>{section.example.code}</code></pre>
                    )}
                    {section.example.output && (
                      <p className="pdf-export-output"><strong>Output:</strong> {section.example.output}</p>
                    )}
                  </div>
                )}
                {section.note && (
                  <div className="pdf-export-note">
                    <strong>Note:</strong> <span dangerouslySetInnerHTML={{ __html: section.note }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <div className={`one-page-overlay ${theme === 'dark' ? 'dark-theme' : ''}`} role="dialog" aria-modal="true" aria-label="One page view">
        <div className="one-page-toolbar">
          <button className="toolbar-btn" onClick={onClose} aria-label="Back to tutorial">
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Back</span>
          </button>
          <div className="toolbar-title">
            {isFullSubject ? subjectTitle : topics[0]?.unitTitle || unit}
          </div>
          <div className="toolbar-actions">
            <button className="toolbar-btn" onClick={printPage} aria-label="Print page">
              <Printer size={18} aria-hidden="true" />
              <span className="sr-only">Print</span>
            </button>
            <button
              className="toolbar-btn toolbar-btn-primary"
              onClick={downloadPDF}
              aria-label="Download as PDF"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <Loader size={18} className="spin" aria-hidden="true" />
              ) : (
                <Download size={18} aria-hidden="true" />
              )}
              <span>{isGenerating ? 'Generating...' : 'Download PDF'}</span>
            </button>
          </div>
        </div>

        <div className="one-page-scroll">
          <div className="one-page-preview" ref={previewRef}>
            <div className="pdf-cover">
              <h1 className="pdf-cover-title">{isFullSubject ? subjectTitle : topics[0]?.unitTitle}</h1>
              <p className="pdf-cover-subtitle">
                {isFullSubject ? 'Complete Subject Notes' : `${subjectTitle}`}
              </p>

              <p className="pdf-cover-meta">Generated on {new Date().toLocaleDateString()}</p>
            </div>

            <div className="pdf-toc">
              <h2>Table of Contents</h2>
              <ul>
                {topics.map((t, i) => (
                  <li key={i}>
                    <span className="toc-number">{i + 1}.</span>
                    <span className="toc-title">{t.data.title}</span>
                    {isFullSubject && <span className="toc-unit">{t.unitTitle}</span>}
                  </li>
                ))}
              </ul>
            </div>

            {topics.map((t) => (
              <div key={t.topicId} className="pdf-topic">
                {isFullSubject && (
                  <div className="pdf-unit-header">{t.unitTitle}</div>
                )}
                <h2 className="pdf-topic-title">{t.data.title}</h2>
                {t.data.subtitle && <p className="pdf-topic-subtitle">{t.data.subtitle}</p>}

                {t.data.sections.map((section, sidx) => (
                  <div key={sidx} className="pdf-section">
                    {section.heading && <h3>{section.heading}</h3>}
                    {section.text && <p dangerouslySetInnerHTML={{ __html: section.text }} />}
                    {section.list && (
                      <ul>
                        {section.list.map((item, li) => (
                          <li key={li} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    )}
                    {section.table && (
                      <table className="pdf-table">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, hi) => (
                              <th key={hi}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {section.example && (
                      <div className="pdf-example">
                        <h4>{section.example.title}</h4>
                        {section.example.code && (
                          <pre><code>{section.example.code}</code></pre>
                        )}
                        {section.example.output && (
                          <p className="pdf-example-output"><strong>Output:</strong> {section.example.output}</p>
                        )}
                      </div>
                    )}
                    {section.note && (
                      <div className="pdf-note">
                        <strong>Note:</strong> <span dangerouslySetInnerHTML={{ __html: section.note }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render hidden PDF target outside the fixed overlay via portal */}
      {createPortal(pdfPortalContent, document.body)}
    </>
  )
}

export default OnePageView
