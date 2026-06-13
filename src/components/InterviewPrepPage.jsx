import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import MockInterview from './MockInterview'
import RevisionDeck from './RevisionDeck'
import StudyPathView from './StudyPathView'
import { interviewSubjects, interviewCategories } from '../data/interviewData'
import { APP_NAME } from '../constants/brand'

export default function InterviewPrepPage({ mode, theme: themeProp, toggleTheme: toggleThemeProp }) {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => themeProp || localStorage.getItem('theme') || 'light')

  const toggleTheme = toggleThemeProp || (() => setTheme(prev => (prev === 'light' ? 'dark' : 'light')))

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const titles = {
      mock: 'Mock Interview',
      revision: 'Revision Deck',
      paths: 'Study Paths',
      path: 'Study Path'
    }
    document.title = `${titles[mode] || 'Interview Prep'} - ${APP_NAME}`
  }, [mode])

  let content
  if (mode === 'mock') content = <MockInterview theme={theme} />
  else if (mode === 'revision') content = <RevisionDeck theme={theme} />
  else content = <StudyPathView theme={theme} />

  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        version="2.18.0"
        sidebarOpen={false}
        setSidebarOpen={() => {}}
        subjects={interviewSubjects}
        activeSubject=""
        onSubjectChange={(s) => navigate(`/interview/${s}`)}
        onBackToLanding={() => navigate('/')}
        showBackButton
        showMenuButton={false}
        mode="interview"
        categories={interviewCategories}
      />
      {content}
      <ScrollToTop />
    </div>
  )
}