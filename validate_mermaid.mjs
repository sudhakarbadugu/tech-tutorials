// Validate every mermaid diagram in the tutorial data files
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><body></body>');
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
global.DOMPurify = { sanitize: (x) => x, addHook: () => {} };

const mermaid = (await import('mermaid')).default;
mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });

const files = [
  'systemDesignContent.js',
  'systemDesignModule0.js',
  'systemDesignModule13.js',
  'systemDesignModule14.js',
  'systemDesignModule15.js',
  'systemDesignModule16.js',
  'systemDesignModule17_19.js',
  'capstones.js',
  'enhancements_m1_m3.js',
  'enhancements_m4_m6.js',
  'enhancements_m7_m9.js',
  'enhancements_m10_m12.js',
  'deepDive_m1_m3.js',
  'deepDive_m4_m6.js',
  'deepDive_m7_m9.js',
  'deepDive_m0_m14.js',
];

let total = 0;
const errors = [];

function extractDiagrams(obj, path, out) {
  if (obj == null) return;
  if (typeof obj === 'string') {
    // Heuristic: mermaid charts start with graph/flowchart/sequenceDiagram/etc.
    if (/^\s*(graph|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie|journey|gitGraph|mindmap|timeline|C4Context|sankey|xychart|block-beta)/m.test(obj)) {
      out.push({ path, chart: obj });
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => extractDiagrams(item, `${path}[${i}]`, out));
    return;
  }
  if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'diagram') {
        if (typeof v === 'string') out.push({ path: `${path}.diagram`, chart: v });
        else if (v && typeof v === 'object' && typeof v.chart === 'string') out.push({ path: `${path}.diagram.chart`, chart: v.chart });
      } else {
        extractDiagrams(v, path ? `${path}.${k}` : k, out);
      }
    }
  }
}

for (const f of files) {
  const mod = await import(`/root/Projects/tech-tutorials/src/data/${f}`);
  for (const [exportName, exportVal] of Object.entries(mod)) {
    const diagrams = [];
    extractDiagrams(exportVal, `${f}:${exportName}`, diagrams);
    for (const d of diagrams) {
      total++;
      try {
        await mermaid.parse(d.chart);
      } catch (e) {
        const msg = String(e.message || e).split('\n')[0].slice(0, 200);
        errors.push({ file: f, path: d.path, error: msg, snippet: d.chart.split('\n').slice(0, 4).join(' | ').slice(0, 180) });
      }
    }
  }
}

console.log(`Validated ${total} diagrams across ${files.length} files`);
console.log(`Errors: ${errors.length}`);
for (const e of errors) {
  console.log(`\n❌ ${e.path}`);
  console.log(`   Error: ${e.error}`);
  console.log(`   Chart: ${e.snippet}`);
}
process.exit(errors.length ? 1 : 0);
