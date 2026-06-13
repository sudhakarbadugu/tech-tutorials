// Interview Questions Data
// Organized by subject with questions, answers, difficulty, and tags

import { javaQuestions } from './interviewQuestionsJava.js'
import { springQuestions } from './interviewQuestionsSpring.js'
import { pythonQuestions } from './interviewQuestionsPython.js'
import { javascriptQuestions } from './interviewQuestionsJS.js'
import { reactQuestions } from './interviewQuestionsReact.js'
import { angularQuestions } from './interviewQuestionsAngular.js'
import { sqlQuestions } from './interviewQuestionsSQL.js'
import { dsaQuestions } from './interviewQuestionsDSA.js'
import { dsaExtraQuestions } from './interviewQuestionsDSAExtra.js'
import { designPatternsQuestions } from './interviewQuestionsDesignPatterns.js'
import { htmlQuestions } from './interviewQuestionsHTML.js'
import { cssQuestions } from './interviewQuestionsCSS.js'
import { typescriptQuestions } from './interviewQuestionsTypeScript.js'
import { reactNativeQuestions } from './interviewQuestionsReactNative.js'
import { nosqlQuestions } from './interviewQuestionsNoSQL.js'
import { dockerQuestions } from './interviewQuestionsDocker.js'
import { awsQuestions } from './interviewQuestionsAWS.js'
import { gitQuestions } from './interviewQuestionsGit.js'
import { systemDesignQuestions } from './interviewQuestionsSystemDesign.js'
import { systemDesignExtraQuestions } from './interviewQuestionsSystemDesignExtra.js'
import { codingQuestions } from './interviewQuestionsCoding.js'
import { codingExtraQuestions } from './interviewQuestionsCodingExtra.js'
import { microservicesQuestions } from './interviewQuestionsMicroservices.js'

export const interviewCategories = {
  backend: {
    title: 'Backend Technologies',
    subjects: ['java', 'spring-boot', 'python', 'microservices', 'design-patterns']
  },
  web: {
    title: 'Web Technologies',
    subjects: ['javascript', 'html', 'css', 'typescript']
  },
  frameworks: {
    title: 'Frontend Frameworks',
    subjects: ['react', 'angular', 'react-native']
  },
  database: {
    title: 'Database & Storage',
    subjects: ['sql', 'nosql']
  },
  devops: {
    title: 'DevOps & Cloud',
    subjects: ['docker', 'aws', 'git']
  },
  fundamentals: {
    title: 'CS Fundamentals',
    subjects: ['dsa', 'system-design', 'coding']
  }
}

const interviewSubjectMeta = {
  java: {
    title: 'Java Interview Questions',
    icon: '☕',
    description: 'Core Java, OOP, Collections, Multithreading, JVM, and advanced topics.',
    topics: ['Core Java', 'Multithreading', 'Java 8+', 'JVM', 'Collections', 'Design Patterns']
  },
  'spring-boot': {
    title: 'Spring Boot Interview Questions',
    icon: '🍃',
    description: 'Spring Core, Spring Boot, Spring MVC, Spring Data, Security, and microservices.',
    topics: ['Spring Core', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'REST API Design']
  },
  python: {
    title: 'Python Interview Questions',
    icon: '🐍',
    description: 'Python basics, OOP, decorators, generators, data structures, and advanced concepts.',
    topics: ['Python Basics', 'OOP', 'Decorators', 'Generators', 'Memory Management']
  },
  microservices: {
    title: 'Microservices Interview Questions',
    icon: '🔗',
    description: 'Service architecture, Spring Boot, Python (FastAPI), service discovery, resilience, Docker, and event-driven patterns.',
    topics: ['Service Discovery', 'API Gateway', 'Circuit Breaker', 'Docker', 'Spring Cloud', 'FastAPI', 'Saga', 'Kafka']
  },
  'design-patterns': {
    title: 'Design Patterns Interview Questions',
    icon: '🏗️',
    description: 'Creational, structural, and behavioral patterns with real-world examples.',
    topics: ['Singleton', 'Factory', 'Observer', 'Strategy', 'Decorator', 'MVC', 'SOLID']
  },
  javascript: {
    title: 'JavaScript Interview Questions',
    icon: '⚡',
    description: 'ES6+, closures, prototypes, async programming, event loop, and DOM.',
    topics: ['JS Basics', 'ES6+', 'Async', 'Prototypes', 'DOM']
  },
  html: {
    title: 'HTML Interview Questions',
    icon: '📄',
    description: 'Semantic HTML, forms, accessibility, SEO, and modern HTML5 features.',
    topics: ['Semantic HTML', 'Forms', 'Accessibility', 'SEO', 'HTML5 APIs']
  },
  css: {
    title: 'CSS Interview Questions',
    icon: '🎨',
    description: 'Flexbox, Grid, animations, responsive design, preprocessors, and performance.',
    topics: ['Flexbox', 'Grid', 'Animations', 'Responsive', 'Preprocessors']
  },
  typescript: {
    title: 'TypeScript Interview Questions',
    icon: '📘',
    description: 'Types, generics, interfaces, decorators, type guards, and advanced patterns.',
    topics: ['Types', 'Generics', 'Interfaces', 'Decorators', 'Advanced Types']
  },
  react: {
    title: 'React Interview Questions',
    icon: '⚛️',
    description: 'Components, hooks, state management, performance, and advanced patterns.',
    topics: ['React Basics', 'Hooks', 'Advanced Patterns', 'Performance', 'Testing']
  },
  angular: {
    title: 'Angular Interview Questions',
    icon: '🅰️',
    description: 'Components, services, RxJS, dependency injection, and performance optimization.',
    topics: ['Angular Basics', 'RxJS', 'Routing', 'Forms', 'Performance', 'Security']
  },
  'react-native': {
    title: 'React Native Interview Questions',
    icon: '📱',
    description: 'Navigation, native modules, performance, platform differences, and deployment.',
    topics: ['Components', 'Navigation', 'Native Modules', 'Performance', 'Deployment']
  },
  sql: {
    title: 'SQL Interview Questions',
    icon: '🗃️',
    description: 'Queries, JOINs, indexes, transactions, isolation levels, window functions, CTEs, and optimization.',
    topics: ['JOINs', 'Indexes', 'Transactions', 'Isolation Levels', 'Window Functions', 'CTEs', 'EXPLAIN', 'Pagination', 'UPSERT', 'SQL Injection']
  },
  nosql: {
    title: 'NoSQL Interview Questions',
    icon: '📊',
    description: 'Document stores, key-value, column-family, graph databases, and CAP theorem.',
    topics: ['MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'CAP Theorem']
  },
  docker: {
    title: 'Docker Interview Questions',
    icon: '🐳',
    description: 'Containers, images, Dockerfile, Compose, networking, and orchestration basics.',
    topics: ['Containers', 'Images', 'Dockerfile', 'Compose', 'Networking']
  },
  aws: {
    title: 'AWS Interview Questions',
    icon: '☁️',
    description: 'EC2, S3, Lambda, RDS, VPC, IAM, CloudWatch, and architecture patterns.',
    topics: ['EC2', 'S3', 'Lambda', 'RDS', 'VPC', 'IAM']
  },
  git: {
    title: 'Git Interview Questions',
    icon: '🔀',
    description: 'Branching, merging, rebasing, workflows, and conflict resolution.',
    topics: ['Basics', 'Branching', 'Merging', 'Rebase', 'Workflows']
  },
  dsa: {
    title: 'Data Structures & Algorithms',
    icon: '📐',
    description: 'Arrays, trees, graphs, sorting, dynamic programming, and complexity analysis.',
    topics: ['Arrays', 'Trees', 'Graphs', 'DP', 'Sorting']
  },
  'system-design': {
    title: 'System Design Interview Questions',
    icon: '🏛️',
    description: 'Scalability, distributed systems, caching, load balancing, and databases.',
    topics: ['Scalability', 'Caching', 'Load Balancing', 'Databases', 'Microservices']
  },
  coding: {
    title: 'Coding Interview Problems',
    icon: '💻',
    description: 'Arrays, strings, linked lists, sorting, hashing, and common LeetCode-style problems with solutions.',
    topics: ['Arrays', 'Strings', 'Linked Lists', 'Sorting', 'Hashing', 'Sliding Window', 'Stack']
  }
}

export const interviewQuestions = {
  java: { questions: javaQuestions.questions },
  'spring-boot': { questions: springQuestions.questions },
  python: { questions: pythonQuestions.questions },
  javascript: { questions: javascriptQuestions.questions },
  react: { questions: reactQuestions.questions },
  angular: { questions: angularQuestions.questions },
  sql: { questions: sqlQuestions.questions },
  dsa: {
    questions: [
      ...dsaQuestions.questions,
      ...dsaExtraQuestions.questions,
    ],
  },
  'design-patterns': { questions: designPatternsQuestions.questions },
  'system-design': {
    questions: [
      ...systemDesignQuestions.questions,
      ...systemDesignExtraQuestions.questions,
    ],
  },
  coding: {
    questions: [
      ...codingQuestions.questions,
      ...codingExtraQuestions.questions,
    ],
  },
  html: { questions: htmlQuestions.questions },
  css: { questions: cssQuestions.questions },
  typescript: { questions: typescriptQuestions.questions },
  'react-native': { questions: reactNativeQuestions.questions },
  nosql: { questions: nosqlQuestions.questions },
  docker: { questions: dockerQuestions.questions },
  aws: { questions: awsQuestions.questions },
  git: { questions: gitQuestions.questions },
  microservices: { questions: microservicesQuestions.questions }
}

export const interviewSubjects = Object.fromEntries(
  Object.entries(interviewSubjectMeta).map(([subject, meta]) => [
    subject,
    {
      ...meta,
      totalQuestions: interviewQuestions[subject]?.questions?.length ?? 0,
    },
  ])
)