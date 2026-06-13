import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, '..');
const trinitsDir = path.resolve(projectDir, '../../trinits/trinits-web-angular');
const interviewsDir = path.join(trinitsDir, 'src/app/components/interview-questions');
const outputDir = path.join(projectDir, 'src/data');

const INTERVIEW_SOURCES = [
  {
    outputFile: 'interviewQuestionsJava.js',
    exportName: 'javaQuestions',
    tag: 'Java',
    sources: ['java-interview-questions/java-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsSpring.js',
    exportName: 'springQuestions',
    tag: 'Spring Boot',
    sources: [
      'spring-interview-questions/spring-interview-questions.component.html',
      'spring-boot-interview-questions/spring-boot-interview-questions.component.html',
    ],
  },
  {
    outputFile: 'interviewQuestionsJS.js',
    exportName: 'javascriptQuestions',
    tag: 'JavaScript',
    sources: ['javascript-questions/javascript-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsReact.js',
    exportName: 'reactQuestions',
    tag: 'React',
    sources: ['react-interview-questions/react-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsAngular.js',
    exportName: 'angularQuestions',
    tag: 'Angular',
    sources: ['angular-interview-questions/angular-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsReactNative.js',
    exportName: 'reactNativeQuestions',
    tag: 'React Native',
    sources: ['react-native-interview-questions/react-native-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsHTML.js',
    exportName: 'htmlQuestions',
    tag: 'HTML',
    sources: ['html-questions/html-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsCSS.js',
    exportName: 'cssQuestions',
    tag: 'CSS',
    sources: ['css-questions/css-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsSQL.js',
    exportName: 'sqlQuestions',
    tag: 'SQL',
    sources: ['database-interview-questions/database-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsDSA.js',
    exportName: 'dsaQuestions',
    tag: 'DSA',
    sources: ['coding-interview-questions/coding-interview-questions.component.html'],
  },
  {
    outputFile: 'interviewQuestionsDesignPatterns.js',
    exportName: 'designPatternsQuestions',
    tag: 'Design Patterns',
    sources: ['design-pattern-interview-questions/design-pattern-interview-questions.component.html'],
  },
];

function decodeTemplateEscapes(text) {
  return text
    .replace(/&#123;&#123;\s*'{'\s*&#125;&#125;/g, '{')
    .replace(/&#123;&#123;\s*'}'\s*&#125;&#125;/g, '}')
    .replace(/&#64;/g, '@')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanQuestionText(text) {
  return decodeTemplateEscapes(text)
    .replace(/\s+/g, ' ')
    .replace(/:+$/, '')
    .trim();
}

function extractQuestionText($, $li) {
  const directStrong = $li.children('strong').first();
  if (directStrong.length) {
    return cleanQuestionText(directStrong.text());
  }

  const fwBold = $li.find('.fw-bold').first();
  if (fwBold.length) {
    return cleanQuestionText(fwBold.text());
  }

  const strong = $li.find('strong').first();
  if (strong.length) {
    return cleanQuestionText(strong.text());
  }

  return null;
}

function extractAnswerHtml($, $li) {
  const $clone = $li.clone();
  $clone.children('strong').first().remove();
  $clone.find('.fw-bold').first().remove();

  const inner = $clone.find('.ms-2.me-auto').first();
  if (inner.length) {
    inner.find('.fw-bold').first().remove();
    return decodeTemplateEscapes(inner.html() || '').trim();
  }

  return decodeTemplateEscapes(($clone.html() || '').replace(/^(\s*<br\s*\/?>\s*)+/i, '').trim());
}

function inferDifficulty(index, total) {
  if (total <= 1) return 'Beginner';
  const ratio = index / (total - 1);
  if (ratio < 0.4) return 'Beginner';
  if (ratio < 0.75) return 'Intermediate';
  return 'Advanced';
}

function parseInterviewFile(filePath, tag) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });
  const items = $('li.list-group-item').toArray();
  const questions = [];

  items.forEach((element, index) => {
    const $li = $(element);
    const question = extractQuestionText($, $li);
    const answer = extractAnswerHtml($, $li);

    const plainAnswer = answer.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!question || !plainAnswer || plainAnswer.length < 10) {
      return;
    }

    questions.push({
      question,
      answer,
      difficulty: inferDifficulty(index, items.length),
      tags: [tag],
    });
  });

  return questions;
}

function serializeValue(val, indent = 2) {
  const spaces = ' '.repeat(indent);
  if (val === null) return 'null';
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'number') return String(val);
  if (typeof val === 'string') {
    if (val.includes('\n') || val.includes("'")) {
      return `\`${val.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\``;
    }
    return `'${val}'`;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map((v) => serializeValue(v, indent + 2));
    return `[\n${spaces}  ${items.join(`,\n${spaces}  `)}\n${spaces}]`;
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val);
    if (entries.length === 0) return '{}';
    const props = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      return `${key}: ${serializeValue(v, indent + 2)}`;
    });
    return `{\n${spaces}  ${props.join(`,\n${spaces}  `)}\n${spaces}}`;
  }
  return String(val);
}

function writeInterviewFile({ outputFile, exportName, tag, sources }) {
  const questions = [];

  for (const relativePath of sources) {
    const filePath = path.join(interviewsDir, relativePath);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Interview source not found: ${filePath}`);
    }
    questions.push(...parseInterviewFile(filePath, tag));
  }

  const outputPath = path.join(outputDir, outputFile);
  const generatedAt = new Date().toISOString();

  fs.writeFileSync(
    outputPath,
    [
      '// Auto-generated from trinits-web-angular interview question sources',
      `// Generated: ${generatedAt}`,
      '',
      `export const ${exportName} = ${serializeValue({ questions }, 0)};`,
      '',
    ].join('\n'),
    'utf8'
  );

  console.log(`✅ Wrote ${outputFile} (${questions.length} questions)`);
  return questions.length;
}

function main() {
  if (!fs.existsSync(interviewsDir)) {
    throw new Error(`trinits-web-angular interview sources not found at ${interviewsDir}`);
  }

  let total = 0;
  for (const source of INTERVIEW_SOURCES) {
    total += writeInterviewFile(source);
  }

  console.log(`\nImported ${total} interview questions from trinits-web-angular`);
}

main();