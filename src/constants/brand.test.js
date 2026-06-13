import { describe, it, expect } from 'vitest'
import { APP_NAME, APP_SLUG } from './brand'

describe('brand constants', () => {
  it('exposes the public app name', () => {
    expect(APP_NAME).toBe('Tech Tutorials')
  })

  it('exposes a kebab-case slug for tooling and deploy paths', () => {
    expect(APP_SLUG).toBe('tech-tutorials')
  })
})