import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = join(rootDir, 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))

const [major, minor, patch] = pkg.version.split('.').map((part) => Number(part) || 0)
const nextVersion = `${major}.${minor}.${patch + 1}`

pkg.version = nextVersion
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)

console.log(`Build version bumped to ${nextVersion}`)