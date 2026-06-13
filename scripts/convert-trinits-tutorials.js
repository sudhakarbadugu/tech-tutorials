import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, '..');
const trinitsDir = path.resolve(projectDir, '../../trinits/trinits-web-angular');
const outputDir = path.join(projectDir, 'src/data');

const HTML_COMPONENT = path.join(trinitsDir, 'src/app/components/html-course/html-course.component.html');
const CSS_COMPONENT = path.join(trinitsDir, 'src/app/components/css-course/css-course.component.html');
const REACT_COMPONENT = path.join(trinitsDir, 'src/app/components/react/react-course/react-course.component.html');
const ANGULAR_COMPONENT = path.join(trinitsDir, 'src/app/components/angular-course/angular-course.component.html');
const REACT_NATIVE_COMPONENT = path.join(
  trinitsDir,
  'src/app/components/react-native-course/react-native-course.component.html'
);
const HTML_NOTES = path.join(trinitsDir, 'src/assets/html-notes.txt');
const REACT_NOTES = path.join(trinitsDir, 'src/assets/react-notes.txt');
const ANGULAR_NOTES = path.join(trinitsDir, 'src/assets/angular-notes.txt');
const REACT_NATIVE_NOTES = path.join(trinitsDir, 'src/assets/react-native-notes.txt');

const HTML_ALIASES = {
  tables: 'tables-detailed',
  marquee: 'marquee-tag',
};

const CSS_ALIASES = {
  'css-media-queries': 'css-responsive',
};

const HTML_MODULES = [
  {
    key: 'module1',
    title: 'Module 1: HTML Fundamentals',
    topics: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'editors', title: 'HTML Editors' },
      { id: 'tag-doctype', title: 'Tag & DOCTYPE' },
      { id: 'html-structure', title: 'HTML Structure' },
      { id: 'elements', title: 'HTML Elements' },
      { id: 'attributes', title: 'HTML Attributes' },
      { id: 'html-attributes-detailed', title: 'HTML Attributes (Detailed)' },
      { id: 'meta-tag', title: 'Meta Tag' },
    ],
  },
  {
    key: 'module2',
    title: 'Module 2: Content & Styling',
    topics: [
      { id: 'headings-paragraphs-block', title: 'Headings, Paragraphs & Block Elements' },
      { id: 'comments', title: 'Comments' },
      { id: 'styles', title: 'Styles (Basic)' },
      { id: 'styles-inline-internal-external', title: 'Styles: Inline, Internal & External' },
      { id: 'text-formatting', title: 'Text Formatting' },
      { id: 'quotations', title: 'Quotation & Citation' },
      { id: 'colors', title: 'Colors' },
    ],
  },
  {
    key: 'module3',
    title: 'Module 3: Links & Media',
    topics: [
      { id: 'css', title: 'CSS in HTML' },
      { id: 'links', title: 'Links (Basic)' },
      { id: 'links-detailed', title: 'Links (Detailed)' },
      { id: 'images', title: 'Images' },
      { id: 'favicon', title: 'Favicon' },
      { id: 'marquee', title: 'Marquee' },
      { id: 'containers', title: 'Containers (div, span)' },
    ],
  },
  {
    key: 'module4',
    title: 'Module 4: Tables & HTML5',
    topics: [
      { id: 'tables', title: 'Tables' },
      { id: 'css-simple-selectors', title: 'CSS Simple Selectors' },
      { id: 'html5-features', title: 'HTML5 Features' },
    ],
  },
  {
    key: 'module5',
    title: 'Module 5: Forms',
    topics: [
      { id: 'forms', title: 'Forms' },
      { id: 'form-elements', title: 'Form Elements' },
    ],
  },
];

const CSS_MODULES = [
  {
    key: 'module1',
    title: 'Module 1: CSS Fundamentals',
    topics: [
      { id: 'css-intro', title: 'Introduction' },
      { id: 'css-syntax', title: 'CSS Syntax' },
      { id: 'css-selectors', title: 'Selectors' },
      { id: 'css-insert', title: 'CSS Insertion Methods' },
      { id: 'css-cascade', title: 'Cascade & Specificity' },
      { id: 'css-comments', title: 'CSS Comments' },
    ],
  },
  {
    key: 'module2',
    title: 'Module 2: Properties & Typography',
    topics: [
      { id: 'css-properties', title: 'Properties & Values' },
      { id: 'css-colors', title: 'Colors' },
      { id: 'css-background', title: 'Background' },
      { id: 'css-fonts', title: 'Fonts & Text' },
    ],
  },
  {
    key: 'module3',
    title: 'Module 3: Box Model & Layout',
    topics: [
      { id: 'css-box-model', title: 'Box Model' },
      { id: 'css-margin-padding', title: 'Margin & Padding' },
      { id: 'css-border', title: 'Border' },
      { id: 'css-display', title: 'Display & Position' },
    ],
  },
  {
    key: 'module4',
    title: 'Module 4: Modern Layout & Responsive Design',
    topics: [
      { id: 'css-flexbox', title: 'Flexbox' },
      { id: 'css-grid', title: 'Grid' },
      { id: 'css-responsive', title: 'Responsive Design & Media Queries' },
      { id: 'css-animation', title: 'Animation & Transition' },
    ],
  },
  {
    key: 'module5',
    title: 'Module 5: Bootstrap',
    topics: [{ id: 'css-bootstrap', title: 'Bootstrap' }],
  },
];

const REACT_MODULES = [
  {
    key: 'module1',
    title: 'Module 1: Setup & Introduction',
    topics: [
      { id: 'react-official-websites', title: 'React Official Websites' },
      { id: 'node-installation', title: 'Node Installation' },
      { id: 'check-node-version', title: 'Check Node Version' },
      { id: 'create-react-app', title: 'Create React App' },
      { id: 'project-structure', title: 'Project Structure' },
      { id: 'scripts', title: 'Scripts' },
      { id: 'react-intro', title: 'Introduction to React' },
    ],
  },
  {
    key: 'module2',
    title: 'Module 2: React Fundamentals',
    topics: [
      { id: 'spa', title: 'SPA' },
      { id: 'how-react-works', title: 'How React Works' },
      { id: 'reconciliation', title: 'Reconciliation' },
      { id: 'versions', title: 'Versions' },
      { id: 'reactdom-render', title: 'ReactDOM Render' },
      { id: 'react-flow', title: 'React Flow' },
      { id: 'component', title: 'Components' },
    ],
  },
  {
    key: 'module3',
    title: 'Module 3: JSX, Styling & Events',
    topics: [
      { id: 'jsx', title: 'JSX' },
      { id: 'css-import', title: 'CSS Import' },
      { id: 'event-handling', title: 'Event Handling' },
      { id: 'property-binding', title: 'Property Binding' },
      { id: 'parent-to-child', title: 'Parent to Child' },
      { id: 'child-to-parent', title: 'Child to Parent' },
      { id: 'containment', title: 'Containment' },
    ],
  },
  {
    key: 'module4',
    title: 'Module 4: Performance & Navigation',
    topics: [
      { id: 'react-memo', title: 'React.memo' },
      { id: 'use-memo', title: 'useMemo' },
      { id: 'custom-hooks', title: 'Custom Hooks' },
      { id: 'higher-order-component', title: 'Higher Order Component' },
      { id: 'routing', title: 'Routing' },
      { id: 'useLocation', title: 'useLocation' },
      { id: 'conditional-statements', title: 'Conditional Statements' },
      { id: 'iterating-array', title: 'Iterating Array' },
    ],
  },
  {
    key: 'module5',
    title: 'Module 5: Forms, State & Production',
    topics: [
      { id: 'forms-in-react', title: 'Forms in React' },
      { id: 'uncontrolled-forms', title: 'Uncontrolled Forms' },
      { id: 'redux-storejs-middleware-routing', title: 'Redux/Store/Middleware/Routing' },
      { id: 'lazy-loading', title: 'Lazy Loading' },
      { id: 'third-party-libraries', title: 'Third Party Libraries' },
      { id: 'moment-library', title: 'Moment Library' },
      { id: 'lifecycle-of-components', title: 'Lifecycle of Components' },
      { id: 'build', title: 'Build' },
      { id: 'deployment', title: 'Deployment' },
      { id: 'cicd-pipeline', title: 'CI/CD Pipeline' },
    ],
  },
];

const ANGULAR_MODULES = [
  {
    key: 'module1',
    title: 'Module 1: Introduction & Setup',
    topics: [
      { id: 'angular-intro', title: 'Introduction' },
      { id: 'angular-setup', title: 'Setup' },
      { id: 'commands-used', title: 'Commands Used' },
      { id: 'what-is-npm', title: 'What is npm?' },
      { id: 'new-port', title: 'Run on New Port' },
    ],
  },
  {
    key: 'module2',
    title: 'Module 2: Angular Building Blocks',
    topics: [
      { id: 'cli-commands', title: 'CLI Commands' },
      { id: 'main-angular-parts', title: 'Main Angular Parts' },
      { id: 'ngmodule-component', title: 'NgModule & Component' },
      { id: 'angular-course-additional-info', title: 'Additional Info' },
      { id: 'ngif-ngtemplate-input-binding', title: 'ngIf, ngTemplate, Input Binding' },
    ],
  },
  {
    key: 'module3',
    title: 'Module 3: Binding & Forms',
    topics: [
      { id: 'interpolation-and-binding', title: 'Interpolation & Binding' },
      { id: 'angular-forms', title: 'Angular Forms' },
      { id: 'reactive-forms', title: 'Reactive Forms' },
      { id: 'formgroup', title: 'FormGroup' },
      { id: 'angular-validations', title: 'Validations' },
    ],
  },
  {
    key: 'module4',
    title: 'Module 4: Guards, Bootstrap & State',
    topics: [
      { id: 'custom-validators', title: 'Custom Validators' },
      { id: 'canactivate-guard', title: 'CanActivate Guard' },
      { id: 'install-bootstrap', title: 'Install Bootstrap' },
      { id: 'npm-and-bootstrap', title: 'npm & Bootstrap' },
      { id: 'angular-lifecycle-state-management', title: 'Lifecycle & State Management' },
    ],
  },
  {
    key: 'module5',
    title: 'Module 5: HTTP, Routing & PrimeNG',
    topics: [
      { id: 'angular-http-methods', title: 'HTTP Methods' },
      { id: 'angular-routing-programmatically', title: 'Routing Programmatically' },
      { id: 'primeng-dialog', title: 'PrimeNG Dialog' },
      { id: 'primeng-table', title: 'PrimeNG Table' },
    ],
  },
];

const ANGULAR_HEADING_TOPICS = {
  'angular-validations': 'Form Validations',
  'custom-validators': 'Custom Validators',
  'canactivate-guard': 'CanActivate',
  'install-bootstrap': 'Installing Bootstrap',
  'angular-lifecycle-state-management': 'Angular Lifecycle Methods',
  'angular-routing-programmatically': 'Angular Routing',
};

const REACT_NATIVE_MODULES = [
  {
    key: 'module1',
    title: 'Module 1: Getting Started',
    topics: [
      { id: 'environment-setup', title: 'Environment Setup' },
      { id: 'hello-world', title: 'Hello World' },
      { id: 'core-components', title: 'Core Components' },
      { id: 'native-components', title: 'Native Components' },
      { id: 'jsx', title: 'JSX' },
      { id: 'props', title: 'Props' },
      { id: 'state', title: 'State' },
    ],
  },
  {
    key: 'module2',
    title: 'Module 2: Input & Lists',
    topics: [
      { id: 'handling-text-input', title: 'Handling Text Input' },
      { id: 'scrollview', title: 'ScrollView' },
      { id: 'listview-flatlist', title: 'ListView / FlatList' },
      { id: 'sectionlist', title: 'SectionList' },
      { id: 'flexbox', title: 'Flexbox' },
      { id: 'styling', title: 'Styling' },
      { id: 'images', title: 'Images' },
    ],
  },
  {
    key: 'module3',
    title: 'Module 3: Interaction & Navigation',
    topics: [
      { id: 'buttons', title: 'Buttons' },
      { id: 'touchables', title: 'Touchables' },
      { id: 'navigation', title: 'Navigation' },
      { id: 'platform-specific-code', title: 'Platform Specific Code' },
      { id: 'async-storage', title: 'AsyncStorage' },
      { id: 'secure-storage', title: 'Secure Storage' },
      { id: 'animations', title: 'Animations' },
    ],
  },
  {
    key: 'module4',
    title: 'Module 4: State Management & Advanced',
    topics: [
      { id: 'hooks', title: 'React Hooks' },
      { id: 'networking', title: 'Networking & APIs' },
      { id: 'performance', title: 'Performance Optimization' },
      { id: 'redux', title: 'Redux' },
      { id: 'context-api', title: 'Context API' },
      { id: 'deep-linking', title: 'Deep Linking' },
      { id: 'authentication', title: 'Authentication' },
    ],
  },
  {
    key: 'module5',
    title: 'Module 5: Production & Career',
    topics: [
      { id: 'security', title: 'Security Best Practices' },
      { id: 'dev-menu', title: 'Dev Menu & Debugging' },
      { id: 'native-modules', title: 'Native Modules' },
      { id: 'interview-questions', title: 'Interview Questions' },
      { id: 'project-examples', title: 'Project Examples' },
      { id: 'best-practices', title: 'Best Practices & Tips' },
    ],
  },
];

const REACT_NATIVE_ALIASES = {
  hooks: 'state',
  networking: 'authentication',
  security: 'secure-storage',
  'best-practices': 'typescript-testing',
};

const REACT_NATIVE_HEADING_TOPICS = {
  'native-components': 'Native Components',
  performance: 'Performance Optimization',
};

const HEADING_SELECTOR = 'h2, h3, h4, h5, h6';

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

function cleanInlineHtml($, el) {
  const clone = $(el).clone();
  clone.find('pre').remove();
  clone.find('br').replaceWith(' ');
  let html = clone.html() || '';
  html = decodeTemplateEscapes(html);
  html = html.replace(/\s+/g, ' ').trim();
  return html;
}

function extractListItems($, listEl) {
  const items = [];
  $(listEl)
    .find('> li')
    .each((_, li) => {
      const text = cleanInlineHtml($, li);
      if (text) items.push(text);
    });
  return items;
}

function extractCodeBlocks($, root) {
  const blocks = [];
  $(root)
    .find('pre')
    .each((_, pre) => {
      const code = decodeTemplateEscapes($(pre).text()).trim();
      if (code) blocks.push(code);
    });
  return blocks;
}

function parseSectionToTopic($, sectionEl, fallbackTitle) {
  const $section = $(sectionEl);
  const topicTitle = decodeTemplateEscapes($section.find('> h2').first().text().trim()) || fallbackTitle;
  const sections = [];

  const headings = $section.find('h2, h3').toArray();
  if (headings.length === 0) {
    const body = buildSectionFromNode($, $section, topicTitle);
    if (body) sections.push(body);
    return { title: topicTitle, sections };
  }

  headings.forEach((heading, index) => {
    const headingText = decodeTemplateEscapes($(heading).text().trim());
    const level = heading.tagName.toLowerCase();
    const nodes = [];
    let node = heading.nextSibling;
    const stopAt = headings[index + 1] || null;

    while (node) {
      if (stopAt && node === stopAt) break;
      nodes.push(node);
      node = node.nextSibling;
    }

    const wrapper = $('<div></div>');
    nodes.forEach((n) => wrapper.append($(n).clone()));
    const section = buildSectionFromNode($, wrapper, headingText || topicTitle);
    if (section) {
      if (level === 'h2' && index === 0 && headings.length === 1) {
        section.heading = headingText || topicTitle;
      }
      sections.push(section);
    }
  });

  if (sections.length === 0) {
    const body = buildSectionFromNode($, $section, topicTitle);
    if (body) sections.push(body);
  }

  return { title: topicTitle, sections };
}

function buildSectionFromNode($, node, heading) {
  const $node = $(node);
  const content = [];
  const list = [];
  const codeBlocks = extractCodeBlocks($, $node);

  $node.children('p, div').each((_, child) => {
    const $child = $(child);
    if ($child.find('pre').length) return;
    if ($child.find('ul, ol').length) {
      $child.find('ul, ol').each((_, listEl) => {
        list.push(...extractListItems($, listEl));
      });
      return;
    }
    const text = cleanInlineHtml($, child);
    if (text) content.push(text);
  });

  $node.children('ul, ol').each((_, listEl) => {
    list.push(...extractListItems($, listEl));
  });

  if (!heading && content.length === 0 && list.length === 0 && codeBlocks.length === 0) {
    return null;
  }

  const section = {};
  if (heading) section.heading = heading;
  if (content.length) section.content = content;
  if (list.length) section.list = list;
  if (codeBlocks.length === 1) section.code = codeBlocks[0];
  else if (codeBlocks.length > 1) {
    section.example = {
      title: 'Example',
      code: codeBlocks[0],
      output: codeBlocks.slice(1).join('\n\n'),
      type: 'code',
    };
  }

  if (!section.content && !section.list && !section.code && !section.example) {
    const fallback = cleanInlineHtml($, $node);
    if (fallback) section.content = [fallback];
  }

  return section;
}

function findNotesStart(notesText, startMarker) {
  const directIdx = notesText.indexOf(startMarker);
  if (directIdx !== -1) return directIdx;

  const escaped = startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const dashedMatch = notesText.match(new RegExp(`${escaped}\\s*\\n-+`, 'i'));
  return dashedMatch ? dashedMatch.index : -1;
}

function parseNotesTopic(notesText, startMarker, endMarkers) {
  const startIdx = findNotesStart(notesText, startMarker);
  if (startIdx === -1) return null;

  let endIdx = notesText.length;
  for (const marker of endMarkers) {
    const idx = notesText.indexOf(marker, startIdx + startMarker.length);
    if (idx !== -1) endIdx = Math.min(endIdx, idx);
  }

  const chunk = notesText.slice(startIdx, endIdx).trim();
  const lines = chunk.split('\n').map((line) => line.trimEnd());
  const title = startMarker.replace(/:-+$/, '').trim();
  const content = [];
  const list = [];
  const codeLines = [];
  let inCode = false;

  for (const line of lines.slice(1)) {
    if (line.startsWith('--------------------------------')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }
    if (!line.trim()) continue;
    if (line.startsWith('- ')) {
      list.push(line.slice(2).trim());
    } else if (/^\d+\.\s/.test(line)) {
      list.push(line.replace(/^\d+\.\s*/, '').trim());
    } else {
      content.push(line);
    }
  }

  const sections = [{ heading: title, content, ...(list.length ? { list } : {}) }];
  if (codeLines.length) {
    sections.push({ heading: 'Example', code: codeLines.join('\n').trim() });
  }

  return { title, sections: sections.filter((s) => s.content?.length || s.list?.length || s.code) };
}

function headingLevel(tagName) {
  return Number.parseInt(tagName.slice(1), 10);
}

function findSectionContainingHeading($, headingMatch) {
  let result = null;
  $('section').each((_, el) => {
    if (result) return;
    const hasHeading = $(el)
      .find(HEADING_SELECTOR)
      .toArray()
      .some((heading) =>
        decodeTemplateEscapes($(heading).text()).toLowerCase().includes(headingMatch.toLowerCase())
      );
    if (hasHeading) result = el;
  });
  return result;
}

function parseSectionByHeading($, sectionEl, headingMatch, fallbackTitle) {
  const headings = $(sectionEl).find(HEADING_SELECTOR).toArray();
  const index = headings.findIndex((heading) =>
    decodeTemplateEscapes($(heading).text()).toLowerCase().includes(headingMatch.toLowerCase())
  );

  if (index === -1) {
    return parseSectionToTopic($, sectionEl, fallbackTitle);
  }

  const heading = headings[index];
  const headingText = decodeTemplateEscapes($(heading).text().trim());
  const currentLevel = headingLevel(heading.tagName);
  const nodes = [];
  let node = heading.nextSibling;
  const stopAt =
    headings.slice(index + 1).find((nextHeading) => headingLevel(nextHeading.tagName) <= currentLevel) ||
    null;

  while (node) {
    if (stopAt && node === stopAt) break;
    nodes.push(node);
    node = node.nextSibling;
  }

  const wrapper = $('<div></div>');
  nodes.forEach((n) => wrapper.append($(n).clone()));
  const section = buildSectionFromNode($, wrapper, headingText);
  return {
    title: fallbackTitle || headingText,
    sections: section ? [section] : [],
  };
}

function loadComponentSections(filePath, aliases = {}) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });
  const sections = {};

  $('section[id]').each((_, el) => {
    const id = $(el).attr('id');
    sections[id] = el;
  });

  const resolve = (topicId) => {
    const sectionId = aliases[topicId] || topicId;
    return sections[sectionId] || null;
  };

  return { $, sections, resolve };
}

function buildSubject(
  modules,
  componentPath,
  aliases,
  notesFallbacks = {},
  headingTopics = {}
) {
  const { $, resolve } = loadComponentSections(componentPath, aliases);
  const structure = {};
  const content = {};

  for (const mod of modules) {
    structure[mod.key] = {
      title: mod.title,
      topics: mod.topics.map(({ id, title }) => ({ id, title })),
    };
    content[mod.key] = {};

    for (const topic of mod.topics) {
      const headingMatch = headingTopics[topic.id];
      const sectionEl = resolve(topic.id);

      if (sectionEl) {
        content[mod.key][topic.id] = headingMatch
          ? parseSectionByHeading($, sectionEl, headingMatch, topic.title)
          : parseSectionToTopic($, sectionEl, topic.title);
        continue;
      }

      if (headingMatch) {
        const headingSection = findSectionContainingHeading($, headingMatch);
        if (headingSection) {
          content[mod.key][topic.id] = parseSectionByHeading(
            $,
            headingSection,
            headingMatch,
            topic.title
          );
          continue;
        }
      }

      const notesTopic = notesFallbacks[topic.id];
      if (notesTopic) {
        content[mod.key][topic.id] = notesTopic;
        continue;
      }

      throw new Error(`Missing topic content for "${topic.id}" in ${path.basename(componentPath)}`);
    }
  }

  return { structure, content };
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

function writeSubjectFiles(subject, structure, content) {
  const structureName = `${subject}Structure`;
  const contentName = `${subject}Content`;
  const generatedAt = new Date().toISOString();
  const topicCount = Object.values(structure).reduce((sum, mod) => sum + mod.topics.length, 0);

  const structurePath = path.join(outputDir, `${subject}Structure.js`);
  const contentPath = path.join(outputDir, `${subject}Content.js`);

  fs.writeFileSync(
    structurePath,
    [
      '// Auto-generated from trinits-web-angular tutorial sources',
      `// Generated: ${generatedAt}`,
      '',
      `export const ${structureName} = ${serializeValue(structure, 0)};`,
      '',
    ].join('\n'),
    'utf8'
  );

  fs.writeFileSync(
    contentPath,
    [
      '// Auto-generated from trinits-web-angular tutorial sources',
      `// Generated: ${generatedAt}`,
      '',
      `export const ${contentName} = ${serializeValue(content, 0)};`,
      '',
    ].join('\n'),
    'utf8'
  );

  console.log(`✅ Wrote ${subject} (${Object.keys(structure).length} modules, ${topicCount} topics)`);
}

function main() {
  const requiredSources = [
    HTML_COMPONENT,
    CSS_COMPONENT,
    REACT_COMPONENT,
    ANGULAR_COMPONENT,
    REACT_NATIVE_COMPONENT,
  ];
  if (requiredSources.some((sourcePath) => !fs.existsSync(sourcePath))) {
    throw new Error(`trinits-web-angular sources not found at ${trinitsDir}`);
  }

  const htmlNotes = fs.readFileSync(HTML_NOTES, 'utf8');
  const htmlNotesFallbacks = {
    images: parseNotesTopic(htmlNotes, 'Images:-', ['Favicon:-', 'Class 4:-']),
    favicon: parseNotesTopic(htmlNotes, 'Favicon:-', ['Steps for generating the favicon:-', 'Class 4:-']),
    'css-simple-selectors': parseNotesTopic(htmlNotes, '- In CSS simple selectors are mainly 3 types:', ['Class 5:-', 'Class 6:-']),
  };

  if (htmlNotesFallbacks.images) htmlNotesFallbacks.images.title = 'Images';
  if (htmlNotesFallbacks.favicon) htmlNotesFallbacks.favicon.title = 'Favicon';
  if (htmlNotesFallbacks['css-simple-selectors']) {
    htmlNotesFallbacks['css-simple-selectors'].title = 'CSS Simple Selectors';
  }

  const reactNotes = fs.readFileSync(REACT_NOTES, 'utf8');
  const reactNotesFallbacks = {
    routing: parseNotesTopic(reactNotes, 'Routing:-', ['useLocation:-', 'Conditional statements:-']),
    useLocation: parseNotesTopic(reactNotes, 'useLocation:-', ['Conditional statements:-', 'Loader:-']),
    'conditional-statements': parseNotesTopic(reactNotes, 'Conditional statements:-', ['Loader:-', 'Iterating array in React']),
    'iterating-array': parseNotesTopic(reactNotes, 'Iterating array in React', ['Forms:-']),
    'forms-in-react': parseNotesTopic(reactNotes, 'Forms:-', ['Uncontrolled way:-']),
    'uncontrolled-forms': parseNotesTopic(reactNotes, 'Uncontrolled way:-', ['useRef:-', 'State management:-']),
    'redux-storejs-middleware-routing': parseNotesTopic(reactNotes, 'State management:-', ['Lazy loading:-']),
    'lazy-loading': parseNotesTopic(reactNotes, 'Lazy loading:-', ['Third party libraries:-']),
    'third-party-libraries': parseNotesTopic(reactNotes, 'Third party libraries:-', ['Moment library:-']),
    'moment-library': parseNotesTopic(reactNotes, 'Moment library:-', ['Lifecycle of Components']),
    'lifecycle-of-components': parseNotesTopic(reactNotes, 'Lifecycle of Components', ['Error boundaries in react:-']),
  };

  for (const [topicId, title] of Object.entries({
    routing: 'Routing',
    useLocation: 'useLocation',
    'conditional-statements': 'Conditional Statements',
    'iterating-array': 'Iterating Array',
    'forms-in-react': 'Forms in React',
    'uncontrolled-forms': 'Uncontrolled Forms',
    'redux-storejs-middleware-routing': 'Redux/Store/Middleware/Routing',
    'lazy-loading': 'Lazy Loading',
    'third-party-libraries': 'Third Party Libraries',
    'moment-library': 'Moment Library',
    'lifecycle-of-components': 'Lifecycle of Components',
  })) {
    if (reactNotesFallbacks[topicId]) {
      reactNotesFallbacks[topicId].title = title;
    }
  }

  const angularNotes = fs.readFileSync(ANGULAR_NOTES, 'utf8');
  const angularNotesFallbacks = {
    'primeng-dialog': parseNotesTopic(angularNotes, 'Class 11:-', ['Class 12:-']),
    'primeng-table': parseNotesTopic(angularNotes, 'Class 12:-', ['Class 13:-']),
  };

  if (angularNotesFallbacks['primeng-dialog']) {
    angularNotesFallbacks['primeng-dialog'].title = 'PrimeNG Dialog';
  }
  if (angularNotesFallbacks['primeng-table']) {
    angularNotesFallbacks['primeng-table'].title = 'PrimeNG Table';
  }

  const html = buildSubject(HTML_MODULES, HTML_COMPONENT, HTML_ALIASES, htmlNotesFallbacks);
  const css = buildSubject(CSS_MODULES, CSS_COMPONENT, CSS_ALIASES);
  const react = buildSubject(REACT_MODULES, REACT_COMPONENT, {}, reactNotesFallbacks);
  const angular = buildSubject(
    ANGULAR_MODULES,
    ANGULAR_COMPONENT,
    {},
    angularNotesFallbacks,
    ANGULAR_HEADING_TOPICS
  );

  const reactNativeNotes = fs.readFileSync(REACT_NATIVE_NOTES, 'utf8');
  const reactNativeNotesFallbacks = {
    navigation: parseNotesTopic(reactNativeNotes, 'Navigation:-', ['Third party libraries:-']),
  };
  if (reactNativeNotesFallbacks.navigation) {
    reactNativeNotesFallbacks.navigation.title = 'Navigation';
  }

  const reactNative = buildSubject(
    REACT_NATIVE_MODULES,
    REACT_NATIVE_COMPONENT,
    REACT_NATIVE_ALIASES,
    reactNativeNotesFallbacks,
    REACT_NATIVE_HEADING_TOPICS
  );

  writeSubjectFiles('html', html.structure, html.content);
  writeSubjectFiles('css', css.structure, css.content);
  writeSubjectFiles('react', react.structure, react.content);
  writeSubjectFiles('angular', angular.structure, angular.content);
  writeSubjectFiles('reactNative', reactNative.structure, reactNative.content);
}

main();