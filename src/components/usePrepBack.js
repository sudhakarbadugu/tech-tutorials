import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { interviewSubjects } from '../data/interviewData'
import { tutorialData } from '../data/tutorialDataLoader'

export default function usePrepBack(fallbackPath, fallbackLabel) {
  const location = useLocation()

  return useMemo(() => {
    const from = location.state?.from
    const fromParts = typeof from === 'string' ? from.split('/').filter(Boolean) : []

    if (from && from !== '/') {
      const subjectId = fromParts[1]
      let label = 'Back'

      if (fromParts[0] === 'interview') {
        const meta = interviewSubjects[subjectId]
        label = meta
          ? `Back to ${meta.title.replace(' Interview Questions', '')}`
          : 'Back to interview prep'
      } else if (fromParts[0] === 'tutorials') {
        const meta = tutorialData[subjectId]
        label = meta ? `Back to ${meta.title}` : 'Back to course'
      }

      return { path: from, label }
    }

    return { path: fallbackPath, label: fallbackLabel }
  }, [location.state?.from, fallbackPath, fallbackLabel])
}
