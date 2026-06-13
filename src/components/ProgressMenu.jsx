import { useState, useRef, useEffect } from 'react'
import { Download, Upload, Trash2, Database } from 'lucide-react'
import { exportProgress, importProgress, clearProgress } from '../utils/progressStorage'

export default function ProgressMenu() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const menuRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  function showMessage(text, isError = false) {
    setMessage({ text, isError })
    setTimeout(() => setMessage(null), 4000)
  }

  function handleExport() {
    exportProgress()
    setOpen(false)
    showMessage('Progress exported.')
  }

  async function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const result = await importProgress(file)
    if (result.success) {
      showMessage(`Imported ${result.importedKeys.length} progress entries. Reloading...`)
      setTimeout(() => window.location.reload(), 1200)
    } else {
      showMessage(result.error, true)
    }
    setOpen(false)
    event.target.value = ''
  }

  function handleImportClick() {
    fileInputRef.current?.click()
  }

  function handleClear() {
    if (window.confirm('Clear all local progress? This cannot be undone.')) {
      clearProgress()
      showMessage('Progress cleared. Reloading...')
      setTimeout(() => window.location.reload(), 800)
    }
    setOpen(false)
  }

  return (
    <div className="progress-menu" ref={menuRef}>
      <button
        type="button"
        className="icon-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Progress options"
        title="Progress options"
      >
        <Database size={20} />
      </button>

      {open && (
        <div className="progress-menu-dropdown">
          <button type="button" onClick={handleExport} className="progress-menu-item">
            <Download size={16} />
            <span>Export progress</span>
          </button>
          <button type="button" onClick={handleImportClick} className="progress-menu-item">
            <Upload size={16} />
            <span>Import progress</span>
          </button>
          <div className="progress-menu-divider" />
          <button type="button" onClick={handleClear} className="progress-menu-item danger">
            <Trash2 size={16} />
            <span>Clear progress</span>
          </button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {message && (
        <div className={`progress-toast ${message.isError ? 'error' : ''}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}
