/**
 * Language resolution and detection helpers for code blocks.
 * Kept in a non-component file so React Fast Refresh works correctly.
 */

export const SUPPORTED_LANGS = [
  'javascript', 'typescript', 'jsx', 'tsx',
  'python', 'java', 'kotlin', 'go', 'rust', 'c', 'cpp', 'csharp',
  'html', 'css', 'scss',
  'json', 'yaml', 'xml', 'markdown',
  'sql', 'graphql',
  'bash', 'shell', 'powershell',
  'plaintext',
]

const LANG_ALIASES = {
  js: 'javascript',
  mjs: 'javascript',
  ts: 'typescript',
  py: 'python',
  py3: 'python',
  rb: 'ruby',
  sh: 'bash',
  zsh: 'bash',
  shell: 'bash',
  yml: 'yaml',
  md: 'markdown',
  'c++': 'cpp',
  psql: 'sql',
  postgres: 'sql',
  mysql: 'sql',
  text: 'plaintext',
  txt: 'plaintext',
}

export function detectLanguage(code) {
  if (!code) return 'plaintext'
  const sample = code.slice(0, 800)
  if (/<[a-z][\s\S]*>/i.test(sample) && /<\/[a-z]+>/i.test(sample) && !/console\.|function|=>/.test(sample)) {
    return 'html'
  }
  if (/(^|\n)\s*(import|export)\s+.*from\s+['"]/.test(sample) || /=>/.test(sample) || /\bconst\s+[a-zA-Z_$]/.test(sample)) {
    return 'javascript'
  }
  if (/(^|\n)\s*def\s+[a-zA-Z_]+\s*\(/.test(sample) || (/^\s*import\s+[a-zA-Z_]+/m.test(sample) && !/from\s+['"]/.test(sample))) {
    return 'python'
  }
  if (/\bpublic\s+class\s+[A-Z]\w*/.test(sample) || /\bSystem\.out\.print/.test(sample)) {
    return 'java'
  }
  if (/\bSELECT\b.*\bFROM\b/i.test(sample) || /\bCREATE\s+TABLE\b/i.test(sample)) {
    return 'sql'
  }
  if (/^#!\s*\/bin\/(ba)?sh/m.test(sample) || /\$\s+[a-zA-Z_]+=/.test(sample)) {
    return 'bash'
  }
  if (/^\s*\{[\s\S]*"[\w-]+"\s*:/m.test(sample)) {
    return 'json'
  }
  if (/(^|\n)\s*\.[a-z-]+\s*\{/.test(sample) || (/:\s*(?!\/\/)/.test(sample) && /[;{}]/.test(sample))) {
    return 'css'
  }
  return 'plaintext'
}

export function resolveLanguage(hint, code) {
  if (!hint) return detectLanguage(code)
  const lower = String(hint).toLowerCase().trim()
  return LANG_ALIASES[lower] || (SUPPORTED_LANGS.includes(lower) ? lower : 'plaintext')
}
