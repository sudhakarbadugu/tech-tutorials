import { describe, it, expect } from 'vitest'
import { getSubjectStructure, subjectMeta } from './tutorialDataLoader'

const AI_ML_SUBJECTS = [
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
]

const FIVE_MODULE_AI_SUBJECTS = AI_ML_SUBJECTS

describe('structure and content alignment', () => {
  it.each(FIVE_MODULE_AI_SUBJECTS)('%s structure has 5 modules or units', (subject) => {
    const structure = getSubjectStructure(subject)
    const keys = Object.keys(structure)

    expect(keys).toHaveLength(5)

    if (subject === 'multimodal') {
      expect(keys).toEqual(['unit1', 'unit2', 'unit3', 'unit4', 'unit5'])
    } else {
      expect(keys).toEqual(['module1', 'module2', 'module3', 'module4', 'module5'])
    }
  })

  it('keeps multimodal sidebar keys aligned with bundled content keys', async () => {
    const structure = getSubjectStructure('multimodal')
    const { multimodalContent } = await import('./tutorialData.js')

    expect(Object.keys(structure)).toEqual(Object.keys(multimodalContent))

    const firstUnit = Object.keys(structure)[0]
    const firstTopic = structure[firstUnit].topics[0].id

    expect(firstUnit).toBe('unit1')
    expect(firstTopic).toBe('intro-multimodal')
    expect(multimodalContent.unit1['intro-multimodal']).toBeTruthy()
  })

  it('maps every generated-structure topic to tutorialData content', async () => {
    const tutorialDataModule = await import('./tutorialData.js')

    for (const subject of AI_ML_SUBJECTS) {
      const structure = getSubjectStructure(subject)
      const content = tutorialDataModule[`${subject}Content`]
      const missing = []

      for (const [unitKey, unitData] of Object.entries(structure)) {
        for (const topic of unitData.topics) {
          if (!content?.[unitKey]?.[topic.id]) {
            missing.push(`${subject}/${unitKey}/${topic.id}`)
          }
        }
      }

      expect(missing, `missing content for ${missing.length} topics`).toEqual([])
    }
  })

  it('keeps generated AI/ML structures registered in subjectMeta', () => {
    for (const subject of AI_ML_SUBJECTS) {
      expect(subjectMeta[subject]).toBeTruthy()
      expect(getSubjectStructure(subject)).toBeTruthy()
    }
  })
})