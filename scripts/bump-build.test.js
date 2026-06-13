import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { readFileSync, writeFileSync, copyFileSync, unlinkSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execFileSync } from 'child_process'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = join(rootDir, 'package.json')
const backupPath = join(rootDir, 'package.json.bump-test-backup')
const scriptPath = join(rootDir, 'scripts', 'bump-build.js')

describe('bump-build', () => {
  beforeEach(() => {
    copyFileSync(pkgPath, backupPath)
  })

  afterEach(() => {
    if (existsSync(backupPath)) {
      writeFileSync(pkgPath, readFileSync(backupPath))
      unlinkSync(backupPath)
    }
  })

  it('increments the patch version in package.json', () => {
    const before = JSON.parse(readFileSync(pkgPath, 'utf8'))
    execFileSync(process.execPath, [scriptPath], { cwd: rootDir })
    const after = JSON.parse(readFileSync(pkgPath, 'utf8'))

    const [major, minor, patch] = before.version.split('.').map(Number)
    expect(after.version).toBe(`${major}.${minor}.${patch + 1}`)
  })
})