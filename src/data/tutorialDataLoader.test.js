import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getSubjectStructure,
  getTutorialData,
  subjectMeta,
} from './tutorialDataLoader'

const ALL_SUBJECTS = Object.keys(subjectMeta)

const SUBJECTS_WITH_FIVE_MODULES = ALL_SUBJECTS.filter(
  (subject) => !['java', 'css'].includes(subject)
)

const SIX_MODULE_SUBJECTS = ['css']

const LEGACY_FOUR_MODULE_SUBJECTS = ['java']

function expectedModuleKeys(subject) {
  if (subject === 'multimodal') {
    return ['unit1', 'unit2', 'unit3', 'unit4', 'unit5']
  }
  if (LEGACY_FOUR_MODULE_SUBJECTS.includes(subject)) {
    return ['module1', 'module2', 'module3', 'module4']
  }
  if (SIX_MODULE_SUBJECTS.includes(subject)) {
    return ['module1', 'module2', 'module3', 'module4', 'module5', 'module6']
  }
  return ['module1', 'module2', 'module3', 'module4', 'module5']
}

function collectTopics(structure) {
  return Object.entries(structure).flatMap(([unitKey, unit]) =>
    unit.topics.map((topic) => ({ unitKey, id: topic.id, title: topic.title }))
  )
}

function assertValidTopicContent(topicContent, label) {
  expect(topicContent, label).toBeTruthy()
  expect(typeof topicContent.title).toBe('string')
  expect(topicContent.title.length).toBeGreaterThan(0)
  expect(Array.isArray(topicContent.sections)).toBe(true)
  expect(topicContent.sections.length).toBeGreaterThan(0)
}

describe('tutorialDataLoader', () => {
  describe('subjectMeta', () => {
    it('registers all 20 tutorial subjects', () => {
      expect(ALL_SUBJECTS).toHaveLength(20)
      expect(ALL_SUBJECTS).toEqual(
        expect.arrayContaining([
          'ai',
          'cv',
          'dl',
          'dsa',
          'imaging',
          'llm',
          'mlalgo',
          'multimodal',
          'nlp',
          'rl',
          'stats',
          'timeseries',
          'python',
          'java',
          'javascript',
          'html',
          'css',
          'react',
          'angular',
          'react-native',
        ])
      )
    })

    it.each(ALL_SUBJECTS)('%s exposes a title', (subject) => {
      const meta = subjectMeta[subject]
      expect(meta.title).toBeTruthy()
    })
  })

  describe('getSubjectStructure', () => {
    it.each(SUBJECTS_WITH_FIVE_MODULES)(
      '%s has exactly 5 modules or units',
      (subject) => {
        const structure = getSubjectStructure(subject)
        expect(Object.keys(structure)).toHaveLength(5)
        expect(Object.keys(structure)).toEqual(expectedModuleKeys(subject))
      }
    )

    it.each(LEGACY_FOUR_MODULE_SUBJECTS)(
      '%s uses the legacy 4-module layout',
      (subject) => {
        const structure = getSubjectStructure(subject)
        expect(Object.keys(structure)).toHaveLength(4)
        expect(Object.keys(structure)).toEqual(expectedModuleKeys(subject))
      }
    )

    it.each(SIX_MODULE_SUBJECTS)(
      '%s has exactly 6 modules',
      (subject) => {
        const structure = getSubjectStructure(subject)
        expect(Object.keys(structure)).toHaveLength(6)
        expect(Object.keys(structure)).toEqual(expectedModuleKeys(subject))
      }
    )

    it('uses unit keys for multimodal instead of module keys', () => {
      const structure = getSubjectStructure('multimodal')
      expect(Object.keys(structure)).toEqual(['unit1', 'unit2', 'unit3', 'unit4', 'unit5'])
    })

    it.each(ALL_SUBJECTS)('%s modules have titles and at least one topic', (subject) => {
      const structure = getSubjectStructure(subject)

      for (const [unitKey, unit] of Object.entries(structure)) {
        expect(unit.title, `${subject}/${unitKey} title`).toBeTruthy()
        expect(unit.topics.length, `${subject}/${unitKey} topics`).toBeGreaterThan(0)

        for (const topic of unit.topics) {
          expect(topic.id, `${subject}/${unitKey} topic id`).toBeTruthy()
          expect(topic.title, `${subject}/${unitKey}/${topic.id} title`).toBeTruthy()
        }
      }
    })

    it.each(ALL_SUBJECTS)('%s has unique topic ids within each module', (subject) => {
      const structure = getSubjectStructure(subject)

      for (const [unitKey, unit] of Object.entries(structure)) {
        const ids = unit.topics.map((topic) => topic.id)
        expect(new Set(ids).size, `${subject}/${unitKey} duplicate topic ids`).toBe(ids.length)
      }
    })

    it.each(ALL_SUBJECTS)('%s has a non-empty topic catalog', (subject) => {
      const topics = collectTopics(getSubjectStructure(subject))
      expect(topics.length).toBeGreaterThan(0)
    })

    it('returns an empty object for unknown subjects', () => {
      expect(getSubjectStructure('unknown-subject')).toEqual({})
    })
  })

  describe('getTutorialData', () => {
    it('includes metadata for every configured subject', () => {
      const data = getTutorialData()

      expect(Object.keys(data)).toEqual(ALL_SUBJECTS)
      expect(data.multimodal.title).toBe('Multimodal Machine Learning')
      expect(data.python.title).toBe('Python Programming')
      expect(data['react-native'].title).toBe('React Native Development')
    })

    it.each(ALL_SUBJECTS)('%s bundles structure and metadata without eager content', (subject) => {
      const data = getTutorialData()[subject]

      expect(data.structure).toBeTruthy()
      expect(data.content).toBeNull()
      expect(data.title).toBe(subjectMeta[subject].title)
      expect(data.code).toBeUndefined()
      expect(Object.keys(data.structure).length).toBeGreaterThan(0)
    })
  })

  describe('loadSubjectContent', () => {
    beforeEach(() => {
      vi.resetModules()
    })

    it.each(ALL_SUBJECTS)('loads content for every topic in %s', async (subject) => {
      const { loadSubjectContent: loadFresh, getSubjectStructure: getStructure } =
        await import('./tutorialDataLoader.js')
      const structure = getStructure(subject)
      const content = await loadFresh(subject)

      for (const [unitKey, unitData] of Object.entries(structure)) {
        for (const topic of unitData.topics) {
          assertValidTopicContent(
            content?.[unitKey]?.[topic.id],
            `missing ${subject}/${unitKey}/${topic.id}`
          )
        }
      }
    })

    it.each(ALL_SUBJECTS)(
      'aligns lazy-loaded content module keys with structure for %s',
      async (subject) => {
        const { loadSubjectContent: loadFresh, getSubjectStructure: getStructure } =
          await import('./tutorialDataLoader.js')
        const structure = getStructure(subject)
        const content = await loadFresh(subject)

        expect(Object.keys(content).sort()).toEqual(Object.keys(structure).sort())
      }
    )

    it.each(ALL_SUBJECTS)(
      'aligns lazy-loaded content topic keys with structure for %s',
      async (subject) => {
        const { loadSubjectContent: loadFresh, getSubjectStructure: getStructure } =
          await import('./tutorialDataLoader.js')
        const structure = getStructure(subject)
        const content = await loadFresh(subject)

        for (const [unitKey, unitData] of Object.entries(structure)) {
          const topicIds = unitData.topics.map((topic) => topic.id).sort()
          const contentTopicIds = Object.keys(content?.[unitKey] ?? {}).sort()

          expect(contentTopicIds, `${subject}/${unitKey} topic keys`).toEqual(topicIds)
        }
      }
    )

    it('caches loaded content on subsequent calls', async () => {
      const { loadSubjectContent: loadFresh } = await import('./tutorialDataLoader.js')
      const first = await loadFresh('python')
      const second = await loadFresh('python')

      expect(second).toBe(first)
    })

    it('returns empty content for unknown subjects', async () => {
      const { loadSubjectContent: loadFresh } = await import('./tutorialDataLoader.js')
      const content = await loadFresh('not-a-real-subject')

      expect(content).toEqual({})
    })
  })
})