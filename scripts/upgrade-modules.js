/**
 * Upgrades rewritten module files to W3Schools 12-section format.
 * Skips already-complete modules (cv_*, timeseries.js).
 *
 * Usage:
 *   node scripts/upgrade-modules.js                    # all incomplete
 *   node scripts/upgrade-modules.js stats_module1.js   # single file
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { buildEnhancedTopic, writeModuleFile, serializeValue } from './lib/enhanced-topic.js';
import { topicOverrides } from './configs/topic-overrides.js';
import * as generatedStructures from '../src/data/generatedStructures.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rewrittenDir = path.join(__dirname, '../src/data/rewritten');

const REQUIRED = [
  'concept explanation',
  'visual',
  'python',
  'try it yourself',
];

function isComplete(topic) {
  const headings = (topic.sections || []).map((s) => s.heading.toLowerCase());
  return REQUIRED.every((r) => headings.some((h) => h.includes(r)));
}

function moduleIsComplete(content, unitKey) {
  const topics = content[unitKey];
  if (!topics) return false;
  return Object.values(topics).every(isComplete);
}

function subjectTag(filename) {
  if (filename.startsWith('stats')) return 'inferential statistics';
  if (filename.startsWith('ai')) return 'artificial intelligence';
  if (filename.startsWith('mlalgo')) return 'machine learning';
  if (filename.startsWith('dl')) return 'deep learning';
  if (filename.startsWith('nlp')) return 'natural language processing';
  if (filename.startsWith('cv')) return 'computer vision';
  if (filename.startsWith('rl')) return 'reinforcement learning';
  if (filename.startsWith('llm')) return 'large language models';
  if (filename.startsWith('multimodal')) return 'multimodal machine learning';
  if (filename.startsWith('imaging')) return 'medical and satellite imaging';
  return 'data science';
}

function resolveStructureFromGenerated(filename) {
  const m = filename.match(/^([a-z]+)_(module|unit)(\d+)\.js$/);
  if (!m) return null;
  const [, subject, kind, num] = m;
  const unitKey = `${kind}${num}`;
  const structName = `${subject}Structure`;
  const full = generatedStructures[structName];
  if (!full?.[unitKey]) return null;
  return { unitKey, structure: { [unitKey]: full[unitKey] } };
}

async function upgradeFile(filename) {
  const filePath = path.join(rewrittenDir, filename);
  const mod = await import(pathToFileURL(filePath).href + '?t=' + Date.now());

  let structureExport = null;
  let contentExport = null;
  let structure = null;
  let content = null;

  for (const [name, val] of Object.entries(mod)) {
    if (name.endsWith('Structure')) {
      structureExport = name;
      structure = val;
    }
    if (name.endsWith('Content')) {
      contentExport = name;
      content = val;
    }
  }

  if (!content) {
    console.log(`⏭️  ${filename} — no content export`);
    return false;
  }

  if (!structure) {
    const resolved = resolveStructureFromGenerated(filename);
    if (!resolved) {
      console.log(`⏭️  ${filename} — no structure (content-only, no generated match)`);
      return false;
    }
    structure = resolved.structure;
    const base = filename.replace('.js', '');
    const parts = base.split('_');
    const subjectPart = parts[0];
    const modPart = parts[1];
    structureExport = `${subjectPart}${modPart.charAt(0).toUpperCase() + modPart.slice(1)}Structure`;
    if (!mod[structureExport]) {
      // content-only files keep content export only; structure lives in generatedStructures
      structureExport = null;
    }
  }

  const unitKey = Object.keys(structure)[0];
  if (moduleIsComplete(content, unitKey)) {
    console.log(`✅ ${filename} — already complete`);
    return false;
  }

  const subject = subjectTag(filename);
  const upgraded = {};

  for (const [topicId, topic] of Object.entries(content[unitKey])) {
    if (isComplete(topic)) {
      upgraded[topicId] = topic;
      continue;
    }
    const key = `${filename}/${topicId}`;
    const cfg = { subject, ...(topicOverrides[key] || {}) };
    upgraded[topicId] = buildEnhancedTopic(topic, cfg);
  }

  const header = `// ${subject} — enhanced W3Schools-style (auto-upgraded + overrides)\n// Regenerate: node scripts/upgrade-modules.js ${filename}\n\n`;
  let body;
  if (structureExport && mod[structureExport]) {
    body = writeModuleFile(filePath, structureExport, contentExport, structure, { [unitKey]: upgraded }, header);
  } else {
    body = `${header}export const ${contentExport} = ${serializeValue({ [unitKey]: upgraded }, 0)};\n`;
  }
  fs.writeFileSync(filePath, body, 'utf8');
  console.log(`🔧 ${filename} — upgraded ${Object.keys(upgraded).length} topics`);
  return true;
}

async function main() {
  const arg = process.argv[2];
  let files;

  if (arg) {
    files = [arg.endsWith('.js') ? arg : `${arg}.js`];
  } else {
    files = fs
      .readdirSync(rewrittenDir)
      .filter((f) => f.endsWith('.js'))
      .filter((f) => !f.startsWith('cv_'))
      .filter((f) => f !== 'timeseries.js')
      .sort();
  }

  let count = 0;
  for (const f of files) {
    if (await upgradeFile(f)) count++;
  }
  console.log(`\nDone. Upgraded ${count} file(s). Run: node scripts/build-data.js`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});