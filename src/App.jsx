import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import LandingPage from './components/LandingPage'
import InterviewLandingPage from './components/InterviewLandingPage'
import InterviewContent from './components/InterviewContent'
import InterviewPrepPage from './components/InterviewPrepPage'
import ScrollToTop from './components/ScrollToTop'

const OnePageView = lazy(() => import('./components/OnePageView'))
import { tutorialData, loadSubjectContent, markTopicViewed } from './data/tutorialDataLoader'
import { interviewSubjects, interviewCategories } from './data/interviewData'
import { addTutorialContentToIndex, buildStaticSearchIndex } from './data/searchIndex'
import { APP_NAME } from './constants/brand'
import { VERSION } from './constants/version'
import GlobalSearch from './components/GlobalSearch'
import './styles/App.css'

buildStaticSearchIndex()

const tutorialCategories = [
  {
    key: 'aiml',
    title: 'AI & Machine Learning',
    subjects: ['ai', 'cv', 'dl', 'llm', 'mlalgo', 'multimodal', 'nlp', 'rl']
  },
  {
    key: 'programming',
    title: 'Programming & Web',
    subjects: ['python', 'java', 'javascript', 'html', 'css', 'react', 'angular', 'react-native']
  },
  {
    key: 'data',
    title: 'Data & Statistics',
    subjects: ['stats', 'timeseries', 'imaging']
  }
]

function TutorialView() {
  const { subject: subjectParam, unit: unitParam, topic: topicParam } = useParams()
  const navigate = useNavigate()
  const subject = subjectParam || 'multimodal'
  const currentData = tutorialData[subject]

  const firstUnit = Object.keys(currentData?.structure || {})[0]
  const firstTopic = currentData?.structure[firstUnit]?.topics[0]?.id

  const activeUnit = unitParam || firstUnit
  const activeTopic = topicParam || firstTopic

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [onePageView, setOnePageView] = useState(null)
  const [subjectContent, setSubjectContent] = useState(null)
  const [contentLoading, setContentLoading] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [readingMode, setReadingMode] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function loadContent() {
      setContentLoading(true)
      const content = await loadSubjectContent(subject)
      if (!cancelled) {
        setSubjectContent(content)
        addTutorialContentToIndex(subject, content)
        setContentLoading(false)
      }
    }
    loadContent()
    return () => { cancelled = true }
  }, [subject])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = `${currentData?.title || APP_NAME} - ${APP_NAME}`
  }, [currentData])

  useEffect(() => {
    if (activeUnit && activeTopic) {
      markTopicViewed(subject, activeUnit, activeTopic)
      const unitMeta = currentData?.structure[activeUnit]
      const topicMeta = unitMeta?.topics.find(t => t.id === activeTopic)
      if (unitMeta && topicMeta) {
        const entry = {
          subject,
          subjectTitle: currentData.title,
          unit: activeUnit,
          unitTitle: unitMeta.title,
          topic: activeTopic,
          topicTitle: topicMeta.title,
          timestamp: Date.now()
        }
        try {
          const existing = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
          const filtered = existing.filter(e => e.subject !== subject)
          const updated = [entry, ...filtered].slice(0, 5)
          localStorage.setItem('recentlyViewed', JSON.stringify(updated))
        } catch {
          localStorage.setItem('recentlyViewed', JSON.stringify([entry]))
        }
      }
    }
  }, [subject, activeUnit, activeTopic, currentData])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleReadingMode = () => {
    setReadingMode(prev => !prev)
  }

  const handleTopicSelect = (unit, topic) => {
    navigate(`/tutorials/${subject}/${unit}/${topic}`)
  }

  const handleSubjectChange = (newSubject) => {
    const firstUnit = Object.keys(tutorialData[newSubject].structure)[0]
    const firstTopic = tutorialData[newSubject].structure[firstUnit].topics[0].id
    navigate(`/tutorials/${newSubject}/${firstUnit}/${firstTopic}`)
  }

  const handleBackToLanding = () => {
    navigate('/')
  }

  const openOnePageView = (unit) => {
    setOnePageView({ subject, unit })
  }

  const closeOnePageView = () => {
    setOnePageView(null)
  }

  // Redirect if invalid subject
  if (!currentData) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={`app ${theme}${readingMode ? ' reading-mode' : ''}`}>
      <a href="#content-title" className="skip-link">Skip to main content</a>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        version={VERSION}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        subjects={tutorialData}
        activeSubject={subject}
        onSubjectChange={handleSubjectChange}
        onBackToLanding={handleBackToLanding}
        showBackButton={true}
        mode="tutorials"
        categories={tutorialCategories}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <div className="main-container">
        <Sidebar
          subject={subject}
          structure={currentData.structure}
          activeUnit={activeUnit}
          activeTopic={activeTopic}
          onSelect={handleTopicSelect}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <Content
          subject={subject}
          unit={activeUnit}
          topic={activeTopic}
          onNavigate={handleTopicSelect}
          version={VERSION}
          onOnePageView={openOnePageView}
          subjectContent={subjectContent}
          loading={contentLoading}
          readingMode={readingMode}
          toggleReadingMode={toggleReadingMode}
        />
      </div>
      {onePageView && (
        <Suspense fallback={null}>
          <OnePageView
            subject={onePageView.subject}
            unit={onePageView.unit}
            onClose={closeOnePageView}
            theme={theme}
            subjectContent={subjectContent}
          />
        </Suspense>
      )}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollToTop />
    </div>
  )
}

function InterviewView() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [searchOpen, setSearchOpen] = useState(false)
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = subject ? `${interviewSubjects[subject]?.title || 'Interview'} - ${APP_NAME}` : `Interview Prep - ${APP_NAME}`
  }, [subject])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleInterviewSubjectChange = (newSubject) => {
    navigate(`/interview/${newSubject}`)
  }

  const activeInterviewSubject = subject || ''

  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        version={VERSION}
        sidebarOpen={false}
        setSidebarOpen={() => {}}
        subjects={interviewSubjects}
        activeSubject={activeInterviewSubject}
        onSubjectChange={handleInterviewSubjectChange}
        onBackToLanding={() => navigate('/')}
        showBackButton={true}
        showMenuButton={false}
        mode="interview"
        categories={interviewCategories}
        onOpenSearch={() => setSearchOpen(true)}
      />
      {subject ? (
        <InterviewContent
          key={subject}
          subject={subject}
          onBack={() => navigate('/interview')}
          onBackToHome={() => navigate('/')}
          onSelectSubject={(s) => navigate(`/interview/${s}`)}
          onMockInterview={() => navigate(`/interview/mock?subject=${subject}`)}
          onRevisionDeck={() => navigate('/interview/revision')}
          onStudyPaths={() => navigate('/interview/paths')}
          theme={theme}
        />
      ) : (
        <InterviewLandingPage
          onSelectSubject={(s) => navigate(`/interview/${s}`)}
          onBack={() => navigate('/')}
          onMockInterview={() => navigate('/interview/mock')}
          onRevisionDeck={() => navigate('/interview/revision')}
          onStudyPaths={() => navigate('/interview/paths')}
          theme={theme}
        />
      )}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollToTop />
    </div>
  )
}

function HomeView() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = APP_NAME
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleSubjectSelect = (subject) => {
    const firstUnit = Object.keys(tutorialData[subject].structure)[0]
    const firstTopic = tutorialData[subject].structure[firstUnit].topics[0].id
    navigate(`/tutorials/${subject}/${firstUnit}/${firstTopic}`)
  }

  const handleInterviewClick = () => {
    navigate('/interview')
  }

  const handleInterviewSubjectSelect = (subject) => {
    navigate(`/interview/${subject}`)
  }

  const handleResumeTopic = (subject, unit, topic) => {
    navigate(`/tutorials/${subject}/${unit}/${topic}`)
  }

  return (
    <div className={`app ${theme}`}>
      <LandingPage
        subjects={tutorialData}
        onSelectSubject={handleSubjectSelect}
        onInterviewClick={handleInterviewClick}
        onSelectInterviewSubject={handleInterviewSubjectSelect}
        onResumeTopic={handleResumeTopic}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/tutorials/:subject/:unit?/:topic?" element={<TutorialView />} />
      <Route path="/interview/mock" element={<InterviewPrepPage mode="mock" />} />
      <Route path="/interview/revision" element={<InterviewPrepPage mode="revision" />} />
      <Route path="/interview/paths" element={<InterviewPrepPage mode="paths" />} />
      <Route path="/interview/path/:pathId" element={<InterviewPrepPage mode="path" />} />
      <Route path="/interview/:subject?" element={<InterviewView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
