// Curated difficulty-progressive study paths for interview prep

export const studyPaths = [
  {
    id: 'react-2-week',
    title: '2-Week React Prep',
    subject: 'react',
    icon: '⚛️',
    durationDays: 14,
    description:
      'Build React interview confidence week by week — fundamentals, hooks, state, performance, then advanced patterns.',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)',
    days: [
      { day: 1, title: 'React basics & JSX', difficulty: 'Beginner', count: 5 },
      { day: 2, title: 'Components & props', difficulty: 'Beginner', count: 5 },
      { day: 3, title: 'State & events', difficulty: 'Beginner', count: 5 },
      { day: 4, title: 'Lists, keys & forms', difficulty: 'Beginner', count: 5 },
      { day: 5, title: 'Beginner review', difficulty: 'Beginner', count: 5 },
      { day: 6, title: 'Hooks introduction', difficulty: 'Intermediate', count: 5 },
      { day: 7, title: 'useEffect & lifecycle', difficulty: 'Intermediate', count: 5 },
      { day: 8, title: 'Context & custom hooks', difficulty: 'Intermediate', count: 5 },
      { day: 9, title: 'Performance basics', difficulty: 'Intermediate', count: 5 },
      { day: 10, title: 'Intermediate review', difficulty: 'Intermediate', count: 5 },
      { day: 11, title: 'Advanced patterns', difficulty: 'Advanced', count: 4 },
      { day: 12, title: 'Architecture & testing', difficulty: 'Advanced', count: 4 },
      { day: 13, title: 'Advanced deep dive', difficulty: 'Advanced', count: 4 },
      { day: 14, title: 'Final mixed review', difficulty: 'Mixed', count: 6 }
    ]
  },
  {
    id: 'java-2-week',
    title: '2-Week Java Prep',
    subject: 'java',
    icon: '☕',
    durationDays: 14,
    description:
      'Core Java through collections, concurrency, and JVM — structured for steady daily practice.',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    days: [
      { day: 1, title: 'OOP fundamentals', difficulty: 'Beginner', count: 5 },
      { day: 2, title: 'Classes & inheritance', difficulty: 'Beginner', count: 5 },
      { day: 3, title: 'Strings & wrappers', difficulty: 'Beginner', count: 5 },
      { day: 4, title: 'Exceptions & basics', difficulty: 'Beginner', count: 5 },
      { day: 5, title: 'Beginner review', difficulty: 'Beginner', count: 5 },
      { day: 6, title: 'Collections framework', difficulty: 'Intermediate', count: 5 },
      { day: 7, title: 'Generics & streams', difficulty: 'Intermediate', count: 5 },
      { day: 8, title: 'Java 8+ features', difficulty: 'Intermediate', count: 5 },
      { day: 9, title: 'Multithreading intro', difficulty: 'Intermediate', count: 5 },
      { day: 10, title: 'Intermediate review', difficulty: 'Intermediate', count: 5 },
      { day: 11, title: 'JVM & memory', difficulty: 'Advanced', count: 4 },
      { day: 12, title: 'Concurrency advanced', difficulty: 'Advanced', count: 4 },
      { day: 13, title: 'Design & patterns', difficulty: 'Advanced', count: 4 },
      { day: 14, title: 'Final mixed review', difficulty: 'Mixed', count: 6 }
    ]
  },
  {
    id: 'javascript-1-week',
    title: '1-Week JavaScript Prep',
    subject: 'javascript',
    icon: '🟨',
    durationDays: 7,
    description:
      'A fast-paced week covering JS fundamentals, closures, async, and modern ES features.',
    gradient: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
    days: [
      { day: 1, title: 'Types & operators', difficulty: 'Beginner', count: 6 },
      { day: 2, title: 'Functions & scope', difficulty: 'Beginner', count: 6 },
      { day: 3, title: 'Objects & arrays', difficulty: 'Beginner', count: 6 },
      { day: 4, title: 'Closures & prototypes', difficulty: 'Intermediate', count: 7 },
      { day: 5, title: 'Async & promises', difficulty: 'Intermediate', count: 7 },
      { day: 6, title: 'ES6+ features', difficulty: 'Intermediate', count: 7 },
      { day: 7, title: 'Final mixed review', difficulty: 'Mixed', count: 6 }
    ]
  },
  {
    id: 'spring-2-week',
    title: '2-Week Spring Boot Prep',
    subject: 'spring-boot',
    icon: '🍃',
    durationDays: 14,
    description:
      'Spring Core to Boot auto-configuration, REST APIs, data access, and production topics.',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)',
    days: [
      { day: 1, title: 'Spring fundamentals', difficulty: 'Beginner', count: 5 },
      { day: 2, title: 'Dependency injection', difficulty: 'Beginner', count: 5 },
      { day: 3, title: 'Spring Boot basics', difficulty: 'Beginner', count: 5 },
      { day: 4, title: 'Configuration', difficulty: 'Beginner', count: 5 },
      { day: 5, title: 'Beginner review', difficulty: 'Beginner', count: 5 },
      { day: 6, title: 'REST controllers', difficulty: 'Intermediate', count: 5 },
      { day: 7, title: 'Spring Data JPA', difficulty: 'Intermediate', count: 5 },
      { day: 8, title: 'Exception handling', difficulty: 'Intermediate', count: 5 },
      { day: 9, title: 'Testing & profiles', difficulty: 'Intermediate', count: 5 },
      { day: 10, title: 'Intermediate review', difficulty: 'Intermediate', count: 5 },
      { day: 11, title: 'Security basics', difficulty: 'Advanced', count: 4 },
      { day: 12, title: 'Microservices', difficulty: 'Advanced', count: 4 },
      { day: 13, title: 'Production topics', difficulty: 'Advanced', count: 4 },
      { day: 14, title: 'Final mixed review', difficulty: 'Mixed', count: 6 }
    ]
  }
]

export function getStudyPath(pathId) {
  return studyPaths.find(p => p.id === pathId) ?? null
}