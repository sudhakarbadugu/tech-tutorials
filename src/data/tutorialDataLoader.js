// Lazy loading data for tutorial subjects
// Structures are bundled (lightweight), content is loaded on-demand

import {
  aiStructure,
  cvStructure,
  dlStructure,
  dsaStructure,
  imagingStructure,
  llmStructure,
  mlalgoStructure,
  multimodalStructure,
  nlpStructure,
  rlStructure,
  statsStructure,
  timeseriesStructure,
} from "./generatedStructures.js";

import { htmlStructure } from "./htmlStructure.js";
import { cssStructure } from "./cssStructure.js";
import { reactStructure } from "./reactStructure.js";
import { angularStructure } from "./angularStructure.js";
import { reactNativeStructure } from "./reactNativeStructure.js";

// Hand-maintained structures for programming subjects

export const pythonStructure = {
  module1: {
    title: "Module 1: Python Fundamentals",
    topics: [
      { id: "intro-python", title: "Introduction to Python" },
      { id: "variables-data-types", title: "Variables and Data Types" },
      { id: "operators-expressions", title: "Operators and Expressions" },
      { id: "control-flow", title: "Control Flow (if, for, while)" },
      { id: "functions-basics", title: "Functions Basics" },
      { id: "input-output", title: "Input and Output" },
      { id: "string-manipulation", title: "String Manipulation" },
    ],
  },
  module2: {
    title: "Module 2: Data Structures and OOP",
    topics: [
      { id: "lists-tuples", title: "Lists and Tuples" },
      { id: "dictionaries-sets", title: "Dictionaries and Sets" },
      { id: "list-comprehensions", title: "List Comprehensions" },
      { id: "classes-objects", title: "Classes and Objects" },
      { id: "inheritance-polymorphism", title: "Inheritance and Polymorphism" },
      {
        id: "encapsulation-abstraction",
        title: "Encapsulation and Abstraction",
      },
      { id: "magic-methods", title: "Magic (Dunder) Methods" },
    ],
  },
  module3: {
    title: "Module 3: File Handling and Modules",
    topics: [
      { id: "file-reading-writing", title: "File Reading and Writing" },
      { id: "csv-json-handling", title: "CSV and JSON Handling" },
      { id: "modules-imports", title: "Modules and Imports" },
      { id: "packages-organization", title: "Packages and Code Organization" },
      { id: "virtual-environments", title: "Virtual Environments" },
      { id: "standard-library", title: "Python Standard Library Overview" },
    ],
  },
  module4: {
    title: "Module 4: Error Handling and Testing",
    topics: [
      { id: "exceptions-basics", title: "Exceptions Basics" },
      { id: "try-except-finally", title: "try, except, finally Blocks" },
      { id: "custom-exceptions", title: "Custom Exceptions" },
      { id: "debugging-techniques", title: "Debugging Techniques" },
      { id: "unit-testing-unittest", title: "Unit Testing with unittest" },
      { id: "unit-testing-pytest", title: "Unit Testing with pytest" },
    ],
  },
  module5: {
    title: "Module 5: Advanced Python",
    topics: [
      { id: "decorators", title: "Decorators" },
      { id: "generators-iterators", title: "Generators and Iterators" },
      { id: "lambda-map-filter", title: "Lambda, map, filter, reduce" },
      { id: "context-managers", title: "Context Managers (with statement)" },
      { id: "threading-concurrency", title: "Threading and Concurrency" },
      { id: "asyncio-async-await", title: "Asyncio and async/await" },
    ],
  },
};

export const javaStructure = {
  module1: {
    title: "Module 1: Java Fundamentals",
    topics: [
      { id: "intro-java", title: "Introduction to Java" },
      { id: "variables-data-types", title: "Variables and Data Types" },
      { id: "literals", title: "Literals" },
      { id: "identifiers-reserved-words", title: "Identifiers & Reserved Words" },
      { id: "declaration-access-control", title: "Declaration & Access Control" },
      { id: "operators-expressions", title: "Operators and Expressions" },
      { id: "control-flow", title: "Control Flow (if, switch, loops)" },
      { id: "methods-functions", title: "Methods and Functions" },
      { id: "arrays", title: "Arrays" },
      { id: "strings", title: "String Handling" },
    ],
  },
  module2: {
    title: "Module 2: Object-Oriented Programming",
    topics: [
      { id: "classes-objects", title: "Classes and Objects" },
      { id: "constructors", title: "Constructors" },
      { id: "inheritance", title: "Inheritance" },
      { id: "polymorphism", title: "Polymorphism" },
      { id: "encapsulation", title: "Encapsulation" },
      { id: "abstraction", title: "Abstraction" },
      { id: "interfaces", title: "Interfaces" },
      { id: "inner-classes", title: "Inner Classes" },
      { id: "oop-concepts", title: "OOPS Concepts (SCJP Deep Dive)" },
      { id: "packages", title: "Packages and Access Modifiers" },
      { id: "object-class", title: "Object Class" },
    ],
  },
  module3: {
    title: "Module 3: Strings, Exceptions & java.lang",
    topics: [
      { id: "stringbuffer-stringbuilder", title: "StringBuffer & StringBuilder" },
      { id: "wrapper-classes", title: "Wrapper Classes" },
      { id: "math-class", title: "Math Class" },
      { id: "exception-handling", title: "Exception Handling" },
      { id: "assertions", title: "Assertions" },
      { id: "java-coding-standards", title: "Java Coding Standards" },
      { id: "file-io", title: "File I/O" },
      { id: "serialization", title: "Serialization" },
      { id: "internationalization", title: "Internationalization (i18n)" },
    ],
  },
  module4: {
    title: "Module 4: Collections, Functional Programming & Concurrency",
    topics: [
      { id: "collections-deep-dive", title: "Collections Deep Dive" },
      { id: "generics", title: "Generics" },
      { id: "lambda-expressions", title: "Lambda Expressions" },
      { id: "streams", title: "Streams API" },
      { id: "multithreading", title: "Multithreading" },
    ],
  },
  module5: {
    title: "Module 5: Java 1.5+ New Features",
    topics: [
      { id: "java-1-5-features", title: "Java 1.5 New Features" },
      { id: "var-arg-methods", title: "Var-Arg Methods" },
      { id: "command-line-args", title: "Command-Line Arguments & main" },
    ],
  },
  module6: {
    title: "Module 6: Enterprise & Beyond",
    topics: [
      { id: "jvm-basics", title: "JVM Basics" },
      { id: "garbage-collection", title: "Garbage Collection" },
      { id: "build-tools", title: "Build Tools (Maven, Gradle)" },
      { id: "unit-testing-junit", title: "Unit Testing with JUnit" },
      { id: "jdbc", title: "JDBC and Database Connectivity" },
    ],
  },
};

export const javascriptStructure = {
  module1: {
    title: "Module 1: JavaScript Fundamentals",
    topics: [
      { id: "intro-javascript", title: "Introduction to JavaScript" },
      { id: "variables-data-types", title: "Variables and Data Types" },
      { id: "operators-expressions", title: "Operators and Expressions" },
      { id: "control-flow", title: "Control Flow (if, switch, loops)" },
      { id: "functions", title: "Functions" },
      { id: "arrays", title: "Arrays" },
      { id: "objects", title: "Objects" },
    ],
  },
  module2: {
    title: "Module 2: DOM and Web APIs",
    topics: [
      { id: "dom-basics", title: "DOM Basics" },
      { id: "events", title: "Events and Event Listeners" },
      { id: "dom-manipulation", title: "DOM Manipulation" },
      { id: "forms-validation", title: "Forms and Validation" },
      { id: "fetch-api", title: "Fetch API and AJAX" },
      { id: "local-storage", title: "Local Storage and Session Storage" },
      { id: "timers", title: "Timers and Intervals" },
    ],
  },
  module3: {
    title: "Module 3: Modern JavaScript (ES6+)",
    topics: [
      { id: "arrow-functions", title: "Arrow Functions" },
      { id: "template-literals", title: "Template Literals" },
      { id: "destructuring", title: "Destructuring" },
      { id: "spread-rest", title: "Spread and Rest Operators" },
      { id: "classes", title: "Classes in JavaScript" },
      { id: "promises-async", title: "Promises and Async/Await" },
      { id: "modules-imports", title: "Modules and Imports" },
    ],
  },
  module4: {
    title: "Module 4: Advanced JavaScript",
    topics: [
      { id: "closures", title: "Closures" },
      { id: "this-keyword", title: "The this Keyword" },
      { id: "prototypes", title: "Prototypes and Inheritance" },
      { id: "error-handling", title: "Error Handling" },
      { id: "regex", title: "Regular Expressions" },
      { id: "json", title: "Working with JSON" },
      { id: "debugging", title: "Debugging Techniques" },
    ],
  },
  module5: {
    title: "Module 5: JavaScript in the Real World",
    topics: [
      {
        id: "working-with-apis",
        title: "Working with APIs (REST, endpoints, methods)",
      },
      {
        id: "async-patterns",
        title: "Asynchronous Patterns (callbacks, promises, async/await)",
      },
      { id: "state-management", title: "State Management Concepts" },
      { id: "js-design-patterns", title: "JavaScript Design Patterns" },
      {
        id: "testing-javascript",
        title: "Testing JavaScript (Jest, unit tests, TDD)",
      },
      {
        id: "build-tools-bundlers",
        title: "Build Tools and Bundlers (Webpack, Vite, npm)",
      },
      {
        id: "js-best-practices",
        title: "JavaScript Best Practices (clean code, ESLint)",
      },
    ],
  },
};

// Subject metadata (lightweight, always loaded)
export const subjectMeta = {
  ai: { title: "Fundamentals of Artificial Intelligence" },
  cv: { title: "Computer Vision Techniques" },
  dl: { title: "Deep Learning Approaches" },
  dsa: { title: "Data Structures & Algorithms" },
  imaging: { title: "Applied ML in Imaging Systems" },
  llm: { title: "Large Language Models" },
  mlalgo: { title: "Machine Learning Algorithms" },
  multimodal: { title: "Multimodal Machine Learning" },
  python: { title: "Python Programming" },
  java: { title: "Java Programming" },
  javascript: { title: "JavaScript Programming" },
  html: { title: "HTML Programming" },
  css: { title: "CSS Styling" },
  react: { title: "React Development" },
  angular: { title: "Angular Development" },
  "react-native": { title: "React Native Development" },
  nlp: { title: "Natural Language Processing" },
  rl: { title: "Reinforcement Learning Algorithms" },
  stats: { title: "Inferential Statistics" },
  timeseries: { title: "Time Series Analysis" },
};

// Cache for loaded content
const contentCache = {};

// Dynamic content loader - only loads when needed
export async function loadSubjectContent(subject) {
  if (contentCache[subject]) {
    return contentCache[subject];
  }

  let content;
  try {
    switch (subject) {
      case "python":
        content = (await import("./pythonContent.js")).pythonContent;
        break;
      case "java":
        content = (await import("./javaContent.js")).javaContent;
        break;
      case "javascript":
        content = (await import("./javascriptContent.js")).javascriptContent;
        break;
      case "html":
        content = (await import("./htmlContent.js")).htmlContent;
        break;
      case "css":
        content = (await import("./cssContent.js")).cssContent;
        break;
      case "react":
        content = (await import("./reactContent.js")).reactContent;
        break;
      case "angular":
        content = (await import("./angularContent.js")).angularContent;
        break;
      case "react-native":
        content = (await import("./reactNativeContent.js")).reactNativeContent;
        break;
      case "ai":
        content = (await import("./tutorialData.js")).aiContent;
        break;
      case "cv":
        content = (await import("./tutorialData.js")).cvContent;
        break;
      case "dl":
        content = (await import("./tutorialData.js")).dlContent;
        break;
      case "dsa":
        content = (await import("./tutorialData.js")).dsaContent;
        break;
      case "imaging":
        content = (await import("./tutorialData.js")).imagingContent;
        break;
      case "llm":
        content = (await import("./tutorialData.js")).llmContent;
        break;
      case "mlalgo":
        content = (await import("./tutorialData.js")).mlalgoContent;
        break;
      case "multimodal":
        content = (await import("./tutorialData.js")).multimodalContent;
        break;
      case "nlp":
        content = (await import("./tutorialData.js")).nlpContent;
        break;
      case "rl":
        content = (await import("./tutorialData.js")).rlContent;
        break;
      case "stats":
        content = (await import("./tutorialData.js")).statsContent;
        break;
      case "timeseries":
        content = (await import("./tutorialData.js")).timeseriesContent;
        break;
      default:
        content = {};
    }
  } catch (e) {
    console.error(`Failed to load content for ${subject}:`, e);
    content = {};
  }

  contentCache[subject] = content;
  return content;
}

// Get structure for a subject (synchronous, always available)
export function getSubjectStructure(subject) {
  switch (subject) {
    case "ai":
      return aiStructure;
    case "cv":
      return cvStructure;
    case "dl":
      return dlStructure;
    case "dsa":
      return dsaStructure;
    case "imaging":
      return imagingStructure;
    case "llm":
      return llmStructure;
    case "mlalgo":
      return mlalgoStructure;
    case "multimodal":
      return multimodalStructure;
    case "python":
      return pythonStructure;
    case "java":
      return javaStructure;
    case "javascript":
      return javascriptStructure;
    case "html":
      return htmlStructure;
    case "css":
      return cssStructure;
    case "react":
      return reactStructure;
    case "angular":
      return angularStructure;
    case "react-native":
      return reactNativeStructure;
    case "nlp":
      return nlpStructure;
    case "rl":
      return rlStructure;
    case "stats":
      return statsStructure;
    case "timeseries":
      return timeseriesStructure;
    default:
      return {};
  }
}

// Get full lightweight tutorial data (structures only, no content)
export function getTutorialData() {
  const data = {};
  for (const [key, meta] of Object.entries(subjectMeta)) {
    data[key] = {
      structure: getSubjectStructure(key),
      title: meta.title,
      content: null, // Content loaded on demand
    };
  }
  return data;
}

// Backward-compatible tutorialData (structures only)
export const tutorialData = getTutorialData();

// Backward-compatible exports
export const tutorialStructure = multimodalStructure;
export const tutorialContent = null;

// ===== Progress tracking helpers =====
const PROGRESS_KEY = "tutorialProgress";

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
  } catch {
    return {};
  }
}

export function markTopicViewed(subject, unit, topic) {
  try {
    const progress = getProgress();
    const viewed = new Set(progress[subject] || []);
    viewed.add(`${unit}/${topic}`);
    const updated = { ...progress, [subject]: Array.from(viewed) };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getProgress();
  }
}

export function getSubjectProgress(subject, subjects = tutorialData) {
  const subjectData = subjects[subject];
  if (!subjectData) return { viewed: 0, total: 0, percent: 0 };
  const total = Object.values(subjectData.structure).reduce(
    (sum, unit) => sum + unit.topics.length,
    0,
  );
  const progress = getProgress();
  const viewed = (progress[subject] || []).length;
  return {
    viewed,
    total,
    percent: total > 0 ? Math.round((viewed / total) * 100) : 0,
  };
}
