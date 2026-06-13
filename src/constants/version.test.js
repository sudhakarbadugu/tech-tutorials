import { describe, it, expect } from 'vitest'
import pkg from '../../package.json'
import { VERSION } from './version'

describe('version', () => {
  it('matches package.json version', () => {
    expect(VERSION).toBe(pkg.version)
  })

  it('uses semver format', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+$/)
  })
})