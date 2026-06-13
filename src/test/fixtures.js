export const mockPythonContent = {
  module1: {
    'intro-python': {
      title: 'Introduction to Python',
      subtitle: 'Getting started with Python',
      sections: [
        { heading: 'Overview', text: 'Python is a versatile language.' },
        { heading: 'Practice Questions', list: ['Q1: What is Python?'] },
      ],
    },
    'variables-data-types': {
      title: 'Variables and Data Types',
      sections: [{ heading: 'Basics', text: 'Variables store values.' }],
    },
  },
}

export const mockPythonStructure = {
  module1: {
    title: 'Module 1: Python Fundamentals',
    topics: [
      { id: 'intro-python', title: 'Introduction to Python' },
      { id: 'variables-data-types', title: 'Variables and Data Types' },
    ],
  },
}

export const mockSubjects = {
  python: {
    title: 'Python Programming',
    structure: mockPythonStructure,
    content: null,
  },
  java: {
    title: 'Java Programming',
    structure: { module1: { title: 'Module 1', topics: [{ id: 'intro-java', title: 'Intro' }] } },
    content: null,
  },
}