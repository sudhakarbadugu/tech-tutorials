/**
 * Progress import/export helpers.
 * All progress is stored in localStorage; no server-side accounts are used.
 */

const PROGRESS_VERSION = '1.0'

const PROGRESS_KEYS = [
  'theme',
  'tutorialProgress',
  'recentlyViewed',
  'interviewProgress',
  'interviewBookmarks',
  'interviewSidebarCollapsed',
]

function safeGet(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

export function exportProgress() {
  const data = {
    version: PROGRESS_VERSION,
    exportedAt: new Date().toISOString(),
    data: {},
  }

  for (const key of PROGRESS_KEYS) {
    const value = safeGet(key)
    if (value !== null) {
      data.data[key] = value
    }
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `tech-tutorials-progress-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export async function importProgress(file) {
  const text = await file.text()
  let parsed

  try {
    parsed = JSON.parse(text)
  } catch {
    return { success: false, error: 'Invalid JSON file.' }
  }

  if (!parsed || typeof parsed !== 'object') {
    return { success: false, error: 'Invalid file format.' }
  }

  if (!parsed.data || typeof parsed.data !== 'object') {
    return { success: false, error: 'Missing data object.' }
  }

  const incomingKeys = Object.keys(parsed.data)
  const unknownKeys = incomingKeys.filter((key) => !PROGRESS_KEYS.includes(key))
  if (unknownKeys.length > 0) {
    return {
      success: false,
      error: `Unknown keys found: ${unknownKeys.join(', ')}`,
    }
  }

  for (const key of PROGRESS_KEYS) {
    if (key in parsed.data) {
      safeSet(key, parsed.data[key])
    }
  }

  return { success: true, importedKeys: incomingKeys }
}

export function clearProgress() {
  for (const key of PROGRESS_KEYS) {
    try {
      localStorage.removeItem(key)
    } catch {
      // ignore
    }
  }
}
