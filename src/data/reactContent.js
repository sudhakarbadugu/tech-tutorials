// React tutorial content - beginner-friendly, w3schools-style explanations.
// Each topic has a title and an array of sections. Sections support:
//   - content: array of HTML strings (paragraphs of explanation)
//   - list: array of HTML strings (reference / property bullets)
//   - code: string of example code shown in an ExampleBox
//   - example: { title, code, output, type } for the ExampleBox component
//   - heading: string shown above the section body
//
// Inside content / list items we can use inline HTML such as <code>...</code>.

export const reactContent = {
  module1: {
    'react-official-websites': {
      title: 'React Official Websites',
      sections: [
        {
          heading: 'Where to learn React',
          content: [
            'The official React website is the best place to read the documentation, look up an API, and follow along with the interactive examples. Bookmark it — you will visit it often.',
            'There is also a "beta" site where the React team publishes drafts of the new docs. It has more examples and is a great place to learn the modern way (with Hooks and function components) from the very beginning.'
          ],
          list: [
            '<a href="https://reactjs.org/" target="_blank">https://reactjs.org/</a> — the official, stable documentation.',
            '<a href="https://beta.reactjs.org/" target="_blank">https://beta.reactjs.org/</a> — the newer docs with interactive examples.'
          ]
        }
      ]
    },
    'node-installation': {
      title: 'Node Installation',
      sections: [
        {
          heading: 'Why do we need Node.js?',
          content: [
            'React itself is "just" a JavaScript library, but to <em>create</em>, <em>build</em>, and <em>run</em> a React project we need a few tools (a bundler, a dev server, a package manager). All of those tools are written in JavaScript and run on <strong>Node.js</strong>.',
            'So before you write your first component, install Node.js. Node.js is a program that lets your computer run JavaScript outside of the browser. Installing it also installs <strong>npm</strong>, the Node Package Manager, which you will use to download libraries like React itself.',
            'Download the <strong>LTS</strong> (Long Term Support) version from the official site and run the installer. The installer sets up both <code>node</code> and <code>npm</code> for you.'
          ],
          list: [
            'Download from <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a> — pick the LTS version.',
            '<strong>Node.js</strong> runs JavaScript outside the browser.',
            '<strong>npm</strong> (installed with Node) downloads and manages JavaScript libraries.',
            'Use the same major version across your team to avoid "works on my machine" issues.'
          ]
        }
      ]
    },
    'check-node-version': {
      title: 'Check Node Version',
      sections: [
        {
          heading: 'Verify the installation',
          content: [
            'After installing Node.js, open a terminal (Command Prompt, PowerShell, Terminal, or the VS Code integrated terminal) and check that both <code>node</code> and <code>npm</code> are available. If you see version numbers, the installation worked.',
            'The exact numbers do not matter much — what matters is that the commands run. React tooling generally needs Node 16 or newer, so if your version is much older, upgrade before you continue.'
          ],
          code: `node -v
npm -v`,
          example: {
            title: 'Example output',
            code: `node -v
npm -v`,
            output: 'v20.11.0<br>10.2.4',
            type: 'code'
          }
        }
      ]
    },
    'create-react-app': {
      title: 'Create React App',
      sections: [
        {
          heading: 'Create your first React project',
          content: [
            'There are several ways to start a React project. The modern, recommended way is to use <strong>Vite</strong>, which is fast and simple. The older <strong>Create React App</strong> command also still works. Both create a ready-to-run project folder with everything configured for you.',
            'Run the command from the folder where you want the project to live. The command will create a subfolder with the name you give it (for example, <code>payroll</code>), install all the libraries inside it, and set up the start scripts.',
            'After the project is created, move into the new folder with <code>cd</code> and start the development server with <code>npm run dev</code> (Vite) or <code>npm start</code> (Create React App). Then open the printed URL — usually <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> or <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> — in your browser to see your app running.',
            'To start a TypeScript project instead of JavaScript, add <code>--template typescript</code> to the command. TypeScript adds type checking, which catches many mistakes before you ever run the app.'
          ],
          list: [
            '<strong>Vite (recommended):</strong> <code>npx create-vite my-app --template react</code>',
            '<strong>Create React App:</strong> <code>npx create-react-app my-app</code>',
            '<strong>With TypeScript:</strong> add <code>--template typescript</code> (CRA) or <code>--template react-ts</code> (Vite).',
            'Run the dev server with <code>npm run dev</code> (Vite) or <code>npm start</code> (CRA).'
          ],
          example: {
            title: 'Try it Yourself',
            code: `# Vite (modern, fast)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

# Create React App (older, still works)
npx create-react-app my-app
cd my-app
npm start

# With TypeScript
npx create-react-app my-app --template typescript`,
            output: 'VITE v5.0.0  ready in 320 ms<br><br>  ➜  Local:   http://localhost:5173/<br>  ➜  Network: use --host to expose',
            type: 'code'
          }
        }
      ]
    },
    'project-structure': {
      title: 'Project Structure',
      sections: [
        {
          heading: 'What is inside a new React project?',
          content: [
            'When you create a new React project, the tooling generates a fixed set of files and folders for you. You do not need to memorize all of them — but knowing the role of each one makes the rest of the tutorial much easier to follow.',
            'Most of your time will be spent inside the <code>src</code> folder. That is where your components, styles, and tests live. The <code>public</code> folder holds static files that are copied to the build as-is, and the configuration files at the root describe the project to the tools and to other developers.'
          ],
          list: [
            '<strong>node_modules/</strong> — all downloaded libraries. Auto-generated by <code>npm install</code>. Never edit by hand and never commit to git.',
            '<strong>public/</strong> — static files served as-is: <code>index.html</code>, icons, <code>manifest.json</code>, <code>robots.txt</code>.',
            '<strong>src/</strong> — your source code: components, styles, hooks, tests. This is where you work.',
            '<strong>src/index.js</strong> — the entry point. It finds the <code>&lt;div id="root"&gt;</code> in <code>index.html</code> and renders your <code>&lt;App /&gt;</code> component into it.',
            '<strong>src/App.js</strong> — the root component. A great place to start experimenting.',
            '<strong>package.json</strong> — lists your dependencies and the scripts you can run (<code>dev</code>, <code>build</code>, <code>test</code>).',
            '<strong>.gitignore</strong> — tells git which files to skip (for example, <code>node_modules</code>).',
            '<strong>index.html</strong> — the single HTML file the browser loads. React fills the <code>&lt;div id="root"&gt;</code> inside it.'
          ],
          code: `my-app/
├── index.html          # the single HTML page the browser loads
├── package.json        # dependencies and scripts
├── .gitignore
├── node_modules/       # downloaded libraries (do not edit)
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json   # info for "install to home screen"
│   └── robots.txt      # tells search bots what to crawl
└── src/
    ├── main.jsx        # entry point — renders <App /> into #root
    ├── App.jsx         # the root component
    ├── App.css
    ├── index.css       # global styles
    └── assets/         # images and other static assets`
        }
      ]
    },
    scripts: {
      title: 'Scripts',
      sections: [
        {
          heading: 'npm scripts',
          content: [
            'The <code>package.json</code> file defines short commands (called <strong>scripts</strong>) that run common tasks. You run them with <code>npm run &lt;name&gt;</code> — or, for a few special names like <code>start</code> and <code>test</code>, you can drop the <code>run</code>.',
            'The three you will use the most are <code>dev</code> (or <code>start</code>) to run the local development server, <code>build</code> to produce the optimized production files, and <code>test</code> to run the test suite.',
            'The dev server watches your files and reloads the browser automatically every time you save — this is called <strong>Hot Module Replacement</strong> and it is what makes developing in React so fast.'
          ],
          list: [
            '<code>npm run dev</code> (or <code>npm start</code>) — start the development server with live reload.',
            '<code>npm run build</code> — create an optimized production build in the <code>dist/</code> (Vite) or <code>build/</code> (CRA) folder.',
            '<code>npm test</code> — run the unit tests.',
            '<code>npm run preview</code> (Vite) — serve the production build locally to test it before deploying.'
          ],
          code: `npm run dev      # start the dev server
npm run build    # build for production
npm test         # run unit tests`
        }
      ]
    },
    'react-intro': {
      title: 'Introduction to React',
      sections: [
        {
          heading: 'What is React?',
          content: [
            'React is a JavaScript <strong>library</strong> for building user interfaces. It was created at Facebook (now Meta) and is now open source. React is used to build single-page applications (SPAs) — sites where the page never fully reloads, and only the parts that change are updated.',
            'The core idea of React is the <strong>component</strong>. A component is a small, reusable piece of UI — a button, a form, a navigation bar. You build your app by combining components together, like Lego bricks. Write a component once, reuse it on every page that needs it.',
            'React does not talk to the browser DOM directly. Instead it keeps a lightweight copy of the DOM in memory called the <strong>Virtual DOM</strong>. When something changes, React compares the new virtual DOM with the old one, figures out the smallest set of changes, and applies only those to the real DOM. This process is called <strong>reconciliation</strong> and it is the main reason React feels fast.',
            'Because React is "just" a library (not a full framework), it focuses on the UI. For routing, state management, or data fetching you add other libraries as you need them.'
          ],
          list: [
            '<strong>React</strong> is a JavaScript library for building user interfaces.',
            '<strong>Components</strong> are reusable UI building blocks — write once, use everywhere.',
            '<strong>Virtual DOM</strong> is an in-memory copy of the real DOM that React diffs and patches efficiently.',
            '<strong>Reconciliation</strong> is the process of comparing the old and new virtual DOM and updating only what changed.',
            '<strong>DOM</strong> stands for Document Object Model — the browser\'s tree representation of an HTML page.'
          ],
          example: {
            title: 'Try it Yourself',
            code: `function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`,
            output: '<h1>Hello, React!</h1>',
            type: 'code'
          }
        }
      ]
    }
  },

  module2: {
    spa: {
      title: 'SPA',
      sections: [
        {
          heading: 'What is a Single Page Application?',
          content: [
            'A <strong>Single Page Application (SPA)</strong> is a website that loads a single HTML page and then updates that page dynamically as the user clicks around, instead of loading a brand-new HTML page from the server for every click.',
            'Think about how a traditional website works: every link you click sends a request to the server, the server sends back a full new HTML page, and the browser throws away the old page and renders the new one. The header, footer, and sidebar get re-downloaded and re-painted on every navigation.',
            'In an SPA, the header, footer, and sidebar are loaded once. Only the content in the middle changes. Because the browser does less work and the server sends less data, navigation feels instant. That is why sites like Gmail, Facebook, and Netflix feel like apps rather than websites.',
            'React is a natural fit for SPAs. A client-side router (like <code>react-router-dom</code>) decides which component to show based on the URL, and React updates only the part of the page that changed.'
          ],
          list: [
            '<strong>SPA</strong> = Single Page Application. One HTML page, dynamic content updates.',
            'No full page reloads — only the changed parts of the UI are re-rendered.',
            'Faster navigation and a smoother, app-like user experience.',
            'Routing is handled in the browser with libraries like <code>react-router-dom</code>.'
          ]
        }
      ]
    },
    'how-react-works': {
      title: 'How React Works',
      sections: [
        {
          heading: 'The Virtual DOM in plain English',
          content: [
            'Changing the real DOM directly is slow. Every time you add, remove, or update a node, the browser has to recalculate layout and repaint. React avoids this by keeping a lightweight JavaScript copy of the DOM in memory — the <strong>Virtual DOM</strong>.',
            'Here is the workflow, step by step:',
            '1. You write components that return JSX (a description of what the UI should look like).<br>2. When your data changes (for example, a user types in a box), React builds a <em>new</em> virtual DOM tree.<br>3. React compares this new tree with the previous one — this comparison is called <strong>diffing</strong>.<br>4. React figures out the minimum set of changes and applies only those to the real DOM — this is called <strong>patching</strong>.',
            'The key insight is that React <em>only changes what needs to be changed</em>. If a single character in a paragraph changed, only that paragraph gets updated — the rest of the page is left alone.'
          ],
          list: [
            'React keeps a <strong>Virtual DOM</strong> in memory — a JS description of the UI.',
            'On every state change React builds a new virtual tree.',
            'React <strong>diffs</strong> the new tree against the old one.',
            'Only the differences are applied to the real DOM (<strong>patching</strong>).',
            'This is what makes React fast even on large UIs.'
          ]
        }
      ]
    },
    reconciliation: {
      title: 'Reconciliation',
      sections: [
        {
          heading: 'What is reconciliation?',
          content: [
            '<strong>Reconciliation</strong> is the name React gives to the process of comparing two virtual DOM trees and figuring out what changed. It is the algorithm behind the diffing step described above.',
            'A virtual DOM node is just a plain JavaScript object that describes an element: its tag, its attributes, and its children. A whole UI is a tree of these objects. Comparing two trees to find differences is, in the general case, expensive — so React uses a set of <strong>heuristics</strong> to make it fast:',
            '<strong>1. Different element types produce different trees.</strong> If the top-level element changes from <code>&lt;div&gt;</code> to <code>&lt;span&gt;</code>, React tears down the old subtree and builds a new one. It does not try to match children across different types.<br><strong>2. Keys identify list items.</strong> When you render a list, you give each item a <code>key</code> prop. React uses the keys to match items between renders, so it can reuse DOM nodes instead of recreating them.<br><strong>3. Component identity is stable.</strong> A component at the same position in the tree keeps its state across renders, even if its props change.',
            'Since React 16, the reconciliation engine is called <strong>Fiber</strong>. Fiber can split rendering work into chunks and prioritize updates, which is what enables features like <code>Suspense</code> and concurrent rendering.'
          ],
          list: [
            '<strong>Reconciliation</strong> = diffing the new virtual DOM against the old one and updating the real DOM with the changes.',
            'Different element types tear down the old subtree and build a new one.',
            'Use unique, stable <code>key</code> props on list items so React can match them across renders.',
            'React 16+ uses the <strong>Fiber</strong> reconciler, which supports interruptible rendering.'
          ]
        }
      ]
    },
    versions: {
      title: 'Versions',
      sections: [
        {
          heading: 'A short history of React',
          content: [
            'React has been around since 2013 and has evolved steadily. The big milestones every beginner should know about are: the initial public release in 2013, the introduction of <strong>Hooks</strong> in React 16.8 (2019) which made function components powerful, and React 18 (2022) which added concurrent rendering and automatic batching.',
            'You do not need to memorize version numbers. What matters is that modern React code is written with <strong>function components</strong> and <strong>Hooks</strong> (<code>useState</code>, <code>useEffect</code>, etc.). Class components still work and you will see them in older code, but new code should use Hooks.'
          ],
          list: [
            '<strong>2013</strong> — React 0.3.0, the first public release.',
            '<strong>2018</strong> — React 16.8 introduced <strong>Hooks</strong> (<code>useState</code>, <code>useEffect</code>, ...).',
            '<strong>2022</strong> — React 18 added concurrent rendering, automatic batching, and <code>createRoot</code>.',
            'Facebook first used React internally for the News Feed in 2011.'
          ]
        }
      ]
    },
    'reactdom-render': {
      title: 'ReactDOM Render',
      sections: [
        {
          heading: 'How a component reaches the screen',
          content: [
            'A React component is just a description of UI — a function that returns JSX. To actually put that UI on the page, React needs a function that turns the JSX into real DOM nodes and attaches them somewhere. That function is <code>createRoot</code> (or, in older code, <code>ReactDOM.render</code>).',
            'The flow has two steps:',
            '1. Find (or create) a DOM element to render into. This is usually the empty <code>&lt;div id="root"&gt;&lt;/div&gt;</code> in <code>index.html</code>.<br>2. Tell React which component to render into that element. React takes your component tree, builds the real DOM, and inserts it into the root div.',
            'In React 18 and later, use <code>createRoot</code> from <code>react-dom/client</code>. The older <code>ReactDOM.render</code> still works but is deprecated and will warn in the console.'
          ],
          list: [
            'Step 1: the browser loads <code>index.html</code>, which contains <code>&lt;div id="root"&gt;&lt;/div&gt;</code>.',
            'Step 2: <code>index.js</code> runs, calls <code>createRoot</code>, and renders <code>&lt;App /&gt;</code> into that div.',
            'Use <code>createRoot</code> (React 18+) — not the deprecated <code>ReactDOM.render</code>.',
            '<code>&lt;React.StrictMode&gt;</code> is optional and helps catch bugs in development.'
          ],
          code: `// index.js (React 18+)
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
          example: {
            title: 'Try it Yourself',
            code: `import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);`,
            output: '<h1>Hello, world!</h1>',
            type: 'code'
          }
        }
      ]
    },
    'react-flow': {
      title: 'React Flow',
      sections: [
        {
          heading: 'From index.html to the screen',
          content: [
            'When a user opens a React app, the following happens in order:',
            '1. The browser requests <code>index.html</code> and displays an empty page with a single <code>&lt;div id="root"&gt;&lt;/div&gt;</code>.<br>2. The browser downloads the JavaScript bundle (which includes React, your components, and all the libraries).<br>3. Your entry file (<code>index.js</code> or <code>main.jsx</code>) runs. It calls <code>createRoot</code> on the <code>#root</code> div and renders the <code>&lt;App /&gt;</code> component.<br>4. <code>&lt;App /&gt;</code> returns JSX, which React turns into real DOM nodes inside <code>#root</code>.<br>5. From here on, whenever state changes, React re-renders only the affected components and patches the DOM.',
            'The two ways components can be written are <strong>function components</strong> (modern, with Hooks) and <strong>class components</strong> (legacy). The flow above is the same for both — only the syntax of the component itself differs.'
          ],
          list: [
            '<code>index.html</code> loads first — it contains <code>&lt;div id="root"&gt;&lt;/div&gt;</code>.',
            'The JS bundle is downloaded and <code>index.js</code> runs.',
            '<code>createRoot</code> renders <code>&lt;App /&gt;</code> into <code>#root</code>.',
            'React turns the JSX into real DOM nodes and inserts them into the page.',
            'Components come in two flavors: <strong>function</strong> (modern) and <strong>class</strong> (legacy).'
          ],
          code: `<!-- index.html -->
<div id="root"></div>

// index.js
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root'))
  .render(<App />);`
        }
      ]
    },
    component: {
      title: 'Components',
      sections: [
        {
          heading: 'What is a component?',
          content: [
            'A <strong>component</strong> is a reusable, self-contained piece of UI. Conceptually it is a JavaScript function that returns JSX describing what should be on the screen. You write a component once and use it as many times as you want, just like an HTML tag.',
            'Components let you break a big UI into small, focused pieces. A page might be made of a <code>&lt;Header /&gt;</code>, a <code>&lt;Sidebar /&gt;</code>, and a <code>&lt;ProductList /&gt;</code>, each written and tested on its own. This makes code easier to read, reuse, and maintain.',
            'There are two kinds of components:',
            '<strong>Function components</strong> — a plain JavaScript function that returns JSX. This is the modern style and what you should use for new code.<br><strong>Class components</strong> — an ES6 class that extends <code>React.Component</code> and implements a <code>render()</code> method. You will see these in older code; they support the same features via lifecycle methods.',
            'Component names <strong>must start with a capital letter</strong>. <code>function App()</code> is a component; <code>function app()</code> is just a regular function and JSX like <code>&lt;app /&gt;</code> would be treated as an HTML tag.'
          ],
          list: [
            'A component is a JS function (or class) that returns JSX.',
            'Component names <strong>start with a capital letter</strong>: <code>App</code>, not <code>app</code>.',
            'Two kinds: <strong>function</strong> (modern, with Hooks) and <strong>class</strong> (legacy).',
            'Reuse components like HTML tags: <code>&lt;Header /&gt;</code>, <code>&lt;Button /&gt;</code>.',
            'Each component can have its own CSS file (often a CSS Module like <code>Header.module.css</code>).'
          ],
          example: {
            title: 'Try it Yourself — function component',
            code: `function App() {
  return <div>Hello world</div>;
}

export default App;`,
            output: '<div>Hello world</div>',
            type: 'code'
          }
        },
        {
          heading: 'Class component (legacy)',
          content: [
            'You will still find class components in older code bases, so it helps to recognize them. A class component extends <code>React.Component</code>, holds state in <code>this.state</code>, and updates it with <code>this.setState()</code>. The <code>render()</code> method returns the JSX.',
            'For new code, prefer function components with Hooks — they are shorter, easier to test, and the direction React itself is moving.'
          ],
          code: `class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  render() {
    return <div>Hello world {this.state.color}</div>;
  }
}`
        }
      ]
    }
  },

  module3: {
    jsx: {
      title: 'JSX',
      sections: [
        {
          heading: 'What is JSX?',
          content: [
            '<strong>JSX</strong> stands for JavaScript XML. It is a syntax extension that lets you write HTML-like markup directly inside JavaScript. Without JSX you would have to call <code>React.createElement()</code> for every element — JSX is just a friendlier way to write the same thing.',
            'Browsers cannot read JSX directly. A tool called <strong>Babel</strong> (built into Vite, Create React App, and most setups) compiles JSX into regular JavaScript before it reaches the browser.',
            'The most important rules of JSX:',
            '<strong>1. One parent element.</strong> A component must return a single root element. If you need to return multiple elements, wrap them in a Fragment <code>&lt;&gt; ... &lt;/&gt;</code> or <code>&lt;React.Fragment&gt;</code>.<br><strong>2. Use curly braces for JavaScript.</strong> Any expression inside <code>{ }</code> is evaluated and its result is rendered. <code>{2 + 2}</code> shows <code>4</code>; <code>{user.name}</code> shows the user\'s name.<br><strong>3. <code>class</code> becomes <code>className</code>.</strong> Because <code>class</code> is a reserved word in JavaScript, JSX uses <code>className</code> for the HTML class attribute.<br><strong>4. All tags must close.</strong> Even self-closing tags: <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>.',
            'You can put any valid JavaScript expression inside the curly braces — a variable, a function call, an arithmetic expression, even a ternary. You cannot put a <em>statement</em> (like <code>if</code> or <code>for</code>) directly inside <code>{ }</code>; use the ternary operator or move the logic outside the JSX.'
          ],
          list: [
            'JSX = JavaScript XML. Lets you write HTML-like markup inside JavaScript.',
            'Browsers cannot read JSX — Babel compiles it to <code>React.createElement()</code> calls.',
            'A component returns <strong>one parent element</strong> (use a Fragment <code>&lt;&gt;&lt;/&gt;</code> if you need several).',
            'Use <code>{ }</code> to embed any JavaScript expression: <code>{name}</code>, <code>{2 + 2}</code>, <code>{format(user)}</code>.',
            'Use <code>className</code> instead of <code>class</code> for the HTML class attribute.',
            'Every tag must be closed: <code>&lt;img /&gt;</code>, <code>&lt;br /&gt;</code>, <code>&lt;input /&gt;</code>.'
          ],
          code: `// A Fragment lets you return multiple elements without an extra DOM node.
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}`,
          example: {
            title: 'Try it Yourself — expressions in JSX',
            code: `const user = { firstName: 'Ada', lastName: 'Lovelace' };

function Greeting() {
  return (
    <h1>
      Hello, {user.firstName} {user.lastName}!  /* {user} alone would crash */
    </h1>
  );
}`,
            output: '<h1>Hello, Ada Lovelace!</h1>',
            type: 'code'
          }
        },
        {
          heading: 'Attributes in JSX',
          content: [
            'You pass attributes to JSX elements just like in HTML, with two differences: use <code>className</code> instead of <code>class</code>, and you can embed JavaScript expressions in attribute values by wrapping them in curly braces.',
            'For string attributes you can use quotes: <code>href="https://react.dev"</code>. For dynamic values use curly braces: <code>src={user.avatarUrl}</code>. Never put quotes <em>around</em> curly braces — <code>className="{classes.header}"</code> is wrong.'
          ],
          list: [
            'String attribute: <code>&lt;a href="https://react.dev"&gt;...&lt;/a&gt;</code>',
            'Dynamic attribute: <code>&lt;img src={user.avatarUrl} /&gt;</code>',
            'Use <code>className</code>, not <code>class</code>, for CSS classes.',
            'Do not wrap curly braces in quotes: <code>className={classes.header}</code> (correct), not <code>className="{classes.header}"</code>.'
          ]
        }
      ]
    },
    'css-import': {
      title: 'CSS Import',
      sections: [
        {
          heading: 'How to style a React component',
          content: [
            'There are three common ways to add CSS to a React app:',
            '<strong>1. Global CSS.</strong> Import a regular <code>.css</code> file at the top of your component (or in <code>index.js</code>). The styles apply to the whole app. This is simple but can cause conflicts when the app grows, because every selector is global.',
            '<strong>2. CSS Modules.</strong> Name the file <code>Component.module.css</code> and import it as an object. The class names you write become <em>locally scoped</em> — React generates unique class names so they cannot clash with other components. This is the recommended approach for component-level styles.',
            '<strong>3. A CSS framework like Bootstrap.</strong> Install it with <code>npm install bootstrap</code> and import the stylesheet once in <code>index.js</code>. Then use Bootstrap classes (like <code>btn btn-primary</code>) in your JSX.',
            'A small but common mistake: when using CSS Modules, write <code>className={classes.header}</code> — not <code>className="{classes.header}"</code> (quotes break it) and not <code>className="classes.header"</code> (a literal string).'
          ],
          list: [
            '<strong>Global CSS:</strong> <code>import \'./App.css\'</code> — applies to the whole app.',
            '<strong>CSS Modules:</strong> <code>import classes from \'./App.module.css\'</code> — scoped to one component. Use as <code>className={classes.header}</code>.',
            '<strong>Bootstrap:</strong> <code>npm install bootstrap</code>, then <code>import \'bootstrap/dist/css/bootstrap.min.css\'</code> in <code>index.js</code>.',
            'Never wrap a CSS Module expression in quotes — <code>className={classes.header}</code> only.'
          ],
          code: `// 1. Global CSS — applies to the whole app
import './App.css';

// 2. CSS Module — scoped to this component only
import classes from './Header.module.css';

function Header() {
  return <div className={classes.header}>Hello world</div>;
}

// 3. Bootstrap — install once, import once in index.js
//   npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';`,
          example: {
            title: 'Try it Yourself — CSS Module',
            code: `/* Header.module.css */
.header {
  background-color: #61dbfb;
  padding: 10px;
}

// Header.jsx
import classes from './Header.module.css';

function Header() {
  return <div className={classes.header}>Hello world</div>;
}`,
            output: '<div style="background-color:#61dbfb;padding:10px">Hello world</div>',
            type: 'code'
          }
        }
      ]
    },
    'event-handling': {
      title: 'Event Handling',
      sections: [
        {
          heading: 'Handling events in React',
          content: [
            'React events are written very much like HTML events, with two differences you will pick up in five minutes:',
            '<strong>1. Events are camelCase.</strong> In HTML you write <code>onclick</code>; in React you write <code>onClick</code>. Same for <code>onChange</code>, <code>onSubmit</code>, <code>onMouseOver</code>, and so on.<br><strong>2. You pass a function, not a string.</strong> In HTML you write <code>onclick="showMessage()"</code> (a string). In React you pass the actual function: <code>onClick={showMessage}</code>. You can also define the handler inline with an arrow function: <code>onClick={() => shoot("Goal!")}</code>.',
            'React wraps every native browser event in a <strong>Synthetic Event</strong> — a cross-browser object with the same API no matter which browser the user is on. You call <code>event.preventDefault()</code> to stop a form from submitting, <code>event.stopPropagation()</code> to stop the event bubbling up the tree, and <code>event.target.value</code> to read what the user typed.',
            '<strong>Event bubbling</strong> is the DOM behavior where an event first fires on the target element, then on its parent, and so on up to <code>document</code>. If you click a link inside a button, the link\'s click fires first, then the button\'s. Use <code>event.stopPropagation()</code> when you want to handle an event on a child without also triggering the parent\'s handler.'
          ],
          list: [
            'React events are <strong>camelCase</strong>: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>.',
            'Pass a <strong>function</strong>, not a string: <code>onClick={handleClick}</code>.',
            'To pass arguments, wrap in an arrow function: <code>onClick={() => shoot("Goal!")}</code>.',
            'React events are <strong>Synthetic Events</strong> — a cross-browser wrapper around the native event.',
            'Use <code>event.target.value</code> to read the value of an input.',
            'Use <code>event.preventDefault()</code> to stop default behavior (e.g. a form submitting).'
          ],
          code: `function onClickHandler() {
  console.log('Clicked!');
}

<button onClick={onClickHandler}>Test</button>

// Passing an argument with an inline arrow function:
<button onClick={() => alert("Hello!")}>Say hi</button>`,
          example: {
            title: 'Try it Yourself',
            code: `function Football() {
  const shoot = (msg) => alert(msg);
  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}`,
            output: '<button>Take the shot!</button>',
            type: 'code'
          }
        }
      ]
    },
    'property-binding': {
      title: 'Property Binding',
      sections: [
        {
          heading: 'Binding data to HTML elements',
          content: [
            '<strong>Property binding</strong> means connecting a JavaScript value to an HTML element so the element always shows the current value. In React this is done with curly braces: <code>&lt;input value={username} /&gt;</code>.',
            'React is <strong>one-way</strong>: data flows from state down into the UI, never the other way around. To make an input editable, you combine three things:',
            '1. <strong>State</strong> with <code>useState</code> to hold the value.<br>2. The <strong>value</strong> attribute bound to that state: <code>value={username}</code>.<br>3. An <strong>onChange</strong> handler that updates the state on every keystroke: <code>onChange={(e) => setUsername(e.target.value)}</code>.',
            'Together these three form what is sometimes called <em>two-way binding</em> in other frameworks. In React it is really two one-way bindings working together — the value goes from state to the input, and the change goes from the input back to the state.'
          ],
          list: [
            'React supports <strong>one-way data flow</strong> (state → UI).',
            'Bind a value with curly braces: <code>&lt;input value={username} /&gt;</code>.',
            'To make it editable, add an <code>onChange</code> handler that updates the state.',
            'Together, value + onChange form "two-way binding" in React.'
          ],
          code: `import { useState } from 'react';

function NameInput() {
  const [username, setUsername] = useState('');

  return (
    <input
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  );
}`,
          example: {
            title: 'Try it Yourself',
            code: `const [username, setUsername] = useState('');

<input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>`,
            output: '<input placeholder="Type here..." />',
            type: 'code'
          }
        }
      ]
    },
    'parent-to-child': {
      title: 'Parent to Child',
      sections: [
        {
          heading: 'Passing data with props',
          content: [
            'Components are reusable, but they are only useful if you can customize them. In React you customize a component by passing <strong>props</strong> — short for "properties". Props are like HTML attributes: you write them on the component tag, and they show up inside the component as an object.',
            'For example, a parent can pass data to a child like this: <code>&lt;StudentForm studentData={student} /&gt;</code>. Inside <code>StudentForm</code>, the data arrives in the <code>props</code> argument: <code>function StudentForm(props) { return &lt;div&gt;{props.studentData}&lt;/div&gt;; }</code>. You can also destructure it: <code>function StudentForm({ studentData }) { ... }</code>.',
            'The most important rule about props: <strong>they are read-only</strong>. A child must never modify its props. If a child needs to change a value, it asks the parent to do it (see the next topic, "Child to Parent"). This keeps data flowing in one direction, which makes your app predictable and easy to debug.',
            'When the parent\'s state changes, React automatically re-renders the parent and any children that received the changed data as props. If the new props are the same as the old ones (and the component is wrapped in <code>React.memo</code>), React can skip the re-render to save time.'
          ],
          list: [
            '<strong>Props</strong> are how a parent sends data to a child component.',
            'Pass them like HTML attributes: <code>&lt;Child data={value} /&gt;</code>.',
            'Inside the child they arrive as the <code>props</code> argument: <code>function Child(props) { ... }</code>.',
            'Destructure for readability: <code>function Child({ data }) { ... }</code>.',
            '<strong>Props are read-only.</strong> Never modify them inside the child.',
            'When props change, React re-renders the child automatically.'
          ],
          code: `// Parent
function StudentInfo() {
  const student = { name: 'Ada', age: 30 };
  return <StudentForm studentData={student} />;
}

// Child — using the props object
function StudentForm(props) {
  return <div>{JSON.stringify(props.studentData)}</div>;
}

// Child — using destructuring (preferred)
function StudentForm({ studentData }) {
  return <div>{studentData.name}</div>;
}`
        }
      ]
    },
    'child-to-parent': {
      title: 'Child to Parent',
      sections: [
        {
          heading: 'Sending data back up',
          content: [
            'Because props are read-only, a child cannot directly send data back to its parent. Instead, the parent passes a <strong>function</strong> down as a prop, and the child calls that function when something happens. The parent receives the call and updates its own state. This pattern is sometimes called "lifting state up."',
            'It works like this:',
            '1. The parent defines a handler function, e.g. <code>function addStudentHandler() { ... }</code>.<br>2. The parent passes the function to the child as a prop: <code>&lt;StudentForm addStudent={addStudentHandler} /&gt;</code>.<br>3. The child calls the function when the user clicks the button: <code>&lt;button onClick={addStudent}&gt;Add&lt;/button&gt;</code>.',
            'If the child needs to send data along, it can pass arguments when it calls the function: <code>onClick={() => addStudent(newStudent)}</code>. The parent then receives that data in its handler.'
          ],
          list: [
            'Children cannot modify props — instead they <strong>call a function</strong> passed down from the parent.',
            'Step 1: parent defines a handler function.',
            'Step 2: parent passes the function to the child as a prop.',
            'Step 3: child calls the function (optionally passing data back as arguments).',
            'This pattern is called "lifting state up" and keeps data flowing in one direction.'
          ],
          code: `// Parent
function StudentInfo() {
  function addStudentHandler(newStudent) {
    console.log('Adding', newStudent);
  }
  return <StudentForm onAdd={addStudentHandler} />;
}

// Child
function StudentForm({ onAdd }) {
  return <button onClick={() => onAdd({ name: 'Ada' })}>Add</button>;
}`
        }
      ]
    },
    containment: {
      title: 'Containment',
      sections: [
        {
          heading: 'The children prop',
          content: [
            'Sometimes you want a component to act as a <strong>container</strong> that wraps other components, without knowing in advance what those components will be. A modal dialog, a card, or a layout section are all good examples.',
            'React makes this easy with a special prop called <code>children</code>. Anything you put <em>between</em> the opening and closing tags of a component is automatically passed in as <code>props.children</code>. The container component can then render <code>{props.children}</code> wherever it wants.',
            'This is called <strong>containment</strong> because the container "contains" whatever children you put inside it. It lets you build flexible, reusable components — one <code>&lt;Card&gt;</code> can hold a chart, a form, or just text, depending on what you nest inside.'
          ],
          list: [
            '<code>props.children</code> is automatically set to whatever you nest between a component\'s tags.',
            'Use it to build flexible containers: <code>&lt;Card&gt;...anything...&lt;/Card&gt;</code>.',
            'The container does not need to know what its children are — it just renders them.',
            'This pattern is called <strong>containment</strong>.'
          ],
          code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="body">{children}</div>
    </div>
  );
}

// Usage — Card does not know what is inside
function App() {
  return (
    <Card title="Welcome">
      <p>This is my child content.</p>
    </Card>
  );
}`
        }
      ]
    }
  },

  module4: {
    'react-memo': {
      title: 'React.memo',
      sections: [
        {
          heading: 'Skip unnecessary re-renders',
          content: [
            'By default, a React component re-renders whenever its parent re-renders — even if its own props have not changed. For most components this is fine, but for expensive components it can waste time.',
            '<code>React.memo</code> is a higher-order component that <strong>memoizes</strong> a function component. It remembers the last render, and on the next render it compares the new props with the old ones. If the props are the same, it skips re-rendering and reuses the previous output.',
            'Wrap your component like this: <code>export default React.memo(MyComponent);</code>. By default the comparison is a shallow equality check of each prop. If you need a deeper comparison, pass a second argument — a custom <code>areEqual</code> function — but most of the time the default is what you want.',
            'A word of warning: <code>React.memo</code> only helps when props actually stay the same. If you pass a new object, array, or function every render (for example an inline <code>onClick={() => ...}</code>), the props will look different every time and memo will not help. Pair it with <code>useMemo</code> and <code>useCallback</code> for objects, arrays, and functions you pass down.'
          ],
          list: [
            '<code>React.memo</code> memoizes a function component.',
            'If the new props are shallowly equal to the previous props, it skips re-rendering.',
            'Wrap a component: <code>export default React.memo(MyComponent);</code>.',
            'Only helps when props stay the same — pair with <code>useMemo</code>/<code>useCallback</code> for objects and functions you pass down.'
          ],
          code: `import React from 'react';

function MyComponent({ someProp }) {
  return <div>{someProp}</div>;
}

export default React.memo(MyComponent);`
        }
      ]
    },
    'use-memo': {
      title: 'useMemo',
      sections: [
        {
          heading: 'Memoize expensive calculations',
          content: [
            'Sometimes a component does an expensive calculation — sorting a big list, parsing a large object, computing a chart layout. If you run that calculation on every render, your app can feel slow even when nothing relevant changed.',
            '<code>useMemo</code> is a Hook that <strong>remembers the result of a calculation</strong> and only re-runs it when its dependencies change. You give it a function and a list of dependencies; React calls the function, stores the result, and on the next render only calls it again if any dependency changed.',
            'Think of it as "compute once, reuse until the inputs change." The dependency array is the key: list every value from outside the function that the calculation depends on. Miss one and the memoized value will be stale; list one that changes every render and the memo is useless.',
            'Do not memoize everything — there is a small cost to storing and comparing values. Use <code>useMemo</code> for genuinely expensive calculations or when you need to keep the same object reference to pass to a memoized child.'
          ],
          list: [
            '<code>useMemo</code> memoizes the <strong>result</strong> of a calculation.',
            'Two arguments: a function and a dependency array.',
            'Re-runs the function only when a dependency changes.',
            'Use it for expensive calculations or to keep a stable object reference for memoized children.'
          ],
          code: `import { useMemo } from 'react';

function MyComponent({ data }) {
  const sorted = useMemo(() => {
    // Only runs when "data" changes
    return [...data].sort((a, b) => a - b);
  }, [data]);

  return <ul>{sorted.map(n => <li key={n}>{n}</li>)}</ul>;
}`
        }
      ]
    },
    'custom-hooks': {
      title: 'Custom Hooks',
      sections: [
        {
          heading: 'Reuse stateful logic',
          content: [
            'A <strong>custom Hook</strong> is a JavaScript function, named starting with <code>use</code>, that contains reusable component logic. If you find yourself writing the same <code>useState</code> + <code>useEffect</code> combination in several components, you can extract it into a custom Hook and reuse it.',
            'Custom Hooks let you share <em>stateful logic</em> — not state itself. Each component that calls the Hook gets its own independent state. For example, a <code>useFetch</code> Hook can be used by ten different components, each fetching a different URL, each with its own loading and error flags.',
            'The naming convention is important: the name must start with <code>use</code> (e.g. <code>useFetch</code>, <code>useLocalStorage</code>, <code>useWindowSize</code>). This is not just a convention — React\'s linter rules rely on it to enforce the rules of Hooks.',
            'Inside a custom Hook you can call any built-in Hooks (<code>useState</code>, <code>useEffect</code>, <code>useMemo</code>, ...) or even other custom Hooks. A Hook can return anything: a value, an array (like <code>useState</code>), or an object.'
          ],
          list: [
            'A custom Hook is a function whose name starts with <code>use</code>.',
            'It encapsulates reusable <strong>stateful logic</strong> (each caller gets its own state).',
            'Inside it, you can call other Hooks (<code>useState</code>, <code>useEffect</code>, ...).',
            'A custom Hook can return a value, an array, or an object — whatever is convenient.',
            'Common examples: <code>useFetch</code>, <code>useLocalStorage</code>, <code>useWindowSize</code>.'
          ],
          code: `// useFetchData.js
import { useState, useEffect } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, [url]);

  return { data, loading };
}

// Usage
import { useFetchData } from './useFetchData';

function MyComponent() {
  const { data, loading } = useFetchData('https://api.example.com/users');
  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`
        }
      ]
    },
    'higher-order-component': {
      title: 'Higher Order Component',
      sections: [
        {
          heading: 'What is a Higher Order Component?',
          content: [
            'A <strong>Higher Order Component (HOC)</strong> is a function that takes a component and returns a new, enhanced component. It is a pattern for reusing component logic — the React equivalent of a decorator.',
            'The signature is <code>function withSomething(Component) { return function Enhanced(...) { ... }; }</code>. You use it like <code>export default withDataLoader(MyComponent)</code>. The HOC can add props, manage state, handle errors, or wrap the rendered output in extra markup.',
            'HOCs were very common before Hooks existed. Today, most logic that used to live in HOCs is better expressed as a custom Hook, which is simpler to read and test. You will still see HOCs in older codebases and in libraries like <code>react-redux</code> (the <code>connect</code> function is an HOC), so it helps to recognize the pattern.',
            'A few rules: do not use an HOC inside another component (call it once at module level), and always forward props you do not consume — <code>&lt;Component {...props} /&gt;</code> — so the wrapped component still receives them.'
          ],
          list: [
            'An <strong>HOC</strong> is a function that takes a component and returns a new component.',
            'Signature: <code>withSomething(Component) → EnhancedComponent</code>.',
            'Use it to add shared logic: data loading, auth checks, error boundaries.',
            'Modern React prefers custom Hooks for new code; HOCs are still common in older code and libraries.',
            'Always forward unused props: <code>&lt;WrappedComponent {...props} /&gt;</code>.'
          ],
          code: `function withDataLoader(Component) {
  return function WithLoader(props) {
    const [data, setData] = useState(null);
    useEffect(() => { fetch(props.url).then(r => r.json()).then(setData); }, [props.url]);
    if (!data) return <div>Loading...</div>;
    return <Component {...props} data={data} />;
  };
}

export default withDataLoader(MyComponent);`
        }
      ]
    },
    routing: {
      title: 'Routing',
      sections: [
        {
          heading: 'Why routing?',
          content: [
            'A React app is a Single Page Application — there is only one HTML page. But users still expect URLs to work: clicking <code>/about</code> should show the About page, and the back button should work. <strong>Client-side routing</strong> makes that happen without reloading the page.',
            'The most popular library for this is <strong>React Router</strong> (<code>react-router-dom</code>). It listens for URL changes and decides which component to render, all in the browser. No full page reload, no lost state.',
            'The basic setup is three steps:',
            '1. <strong>Install:</strong> <code>npm install react-router-dom</code>.<br>2. <strong>Wrap your app</strong> in a <code>&lt;BrowserRouter&gt;</code> so the router can listen to the URL. Usually done in <code>index.js</code>.<br>3. <strong>Define routes</strong> with <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> inside <code>&lt;App /&gt;</code>, and add navigation links with <code>&lt;Link to="/about"&gt;</code>.',
            'For dynamic URLs (like <code>/users/42</code>), use a parameter in the path: <code>&lt;Route path="/users/:userId" element={&lt;User /&gt;} /&gt;</code>. Inside the component, read the parameter with <code>useParams()</code>: <code>const { userId } = useParams()</code>.',
            'For navigation from code (for example, after a successful login), use the <code>useNavigate</code> hook: <code>const navigate = useNavigate(); navigate("/dashboard");</code>. In older versions this was called <code>useHistory</code>.',
            'To handle "page not found", add a catch-all route as the <em>last</em> route: <code>&lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;</code>. Placing it last is important — the router matches routes in order, and <code>*</code> matches anything.'
          ],
          list: [
            '<strong>Routing</strong> lets you navigate between views in an SPA without a page reload.',
            'Install <code>react-router-dom</code>, wrap the app in <code>&lt;BrowserRouter&gt;</code>.',
            'Define routes with <code>&lt;Routes&gt;</code> and <code>&lt;Route path="..." element={...} /&gt;</code>.',
            'Navigate with <code>&lt;Link to="/about"&gt;About&lt;/Link&gt;</code> or <code>useNavigate()</code>.',
            'Read URL params with <code>useParams()</code>; query params with <code>useLocation()</code> + <code>URLSearchParams</code>.',
            'Add <code>&lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;</code> last to handle unknown URLs.'
          ],
          code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const { userId } = useParams();
  return <h1>User {userId}</h1>;
}`
        }
      ]
    },
    useLocation: {
      title: 'useLocation',
      sections: [
        {
          heading: 'Reading the current URL',
          content: [
            'The <code>useLocation</code> hook from <code>react-router-dom</code> returns an object describing the current URL. It is useful when you need more than just a route parameter — for example, reading query string values.',
            'The returned object has four properties:',
            '<strong>pathname</strong> — the part after the domain, e.g. <code>/users</code>.<br><strong>search</strong> — the query string, including the <code>?</code>, e.g. <code>?name=ada&amp;age=30</code>.<br><strong>hash</strong> — the <code>#</code> fragment, if any.<br><strong>state</strong> — any data passed programmatically via <code>navigate("/page", { state: {...} })</code>.',
            'To read query parameters, wrap <code>location.search</code> in a <code>URLSearchParams</code> object and call <code>get()</code>: <code>const name = new URLSearchParams(location.search).get("name")</code>. This returns <code>null</code> if the parameter is missing, so check for that before using it.'
          ],
          list: [
            '<code>useLocation()</code> returns the current location object.',
            '<code>location.pathname</code> — the path, e.g. <code>/users</code>.',
            '<code>location.search</code> — the query string, e.g. <code>?name=ada</code>.',
            '<code>location.hash</code> — the <code>#</code> fragment.',
            '<code>location.state</code> — data passed via <code>navigate(..., { state })</code>.',
            'Read query params: <code>new URLSearchParams(location.search).get("name")</code>.'
          ],
          code: `import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name'); // null if missing

  return <p>Query parameter name = {name}</p>;
}`
        }
      ]
    },
    'conditional-statements': {
      title: 'Conditional Statements',
      sections: [
        {
          heading: 'Conditional rendering in React',
          content: [
            'React has no special "if" syntax for the template. Instead, you use plain JavaScript to decide what to render. There are three common patterns:',
            '<strong>1. The ternary operator</strong> — best for either/or choices. <code>{isLoggedIn ? &lt;Logout /&gt; : &lt;Login /&gt;}</code>. One line, easy to read, the most common approach.',
            '<strong>2. The <code>&amp;&amp;</code> operator</strong> — best for "show this only if." <code>{isLoggedIn &amp;&amp; &lt;Welcome /&gt;}</code>. Renders nothing when the condition is false. Watch out: if the left side is <code>0</code>, React will render the <code>0</code>! Use <code>{!!isLoggedIn &amp;&amp; ...}</code> or compare against a boolean to be safe.',
            '<strong>3. <code>if</code> statements</code> outside the JSX</strong> — best for complex logic. You cannot put an <code>if</code> inside the curly braces of JSX, but you can put one before the <code>return</code>: <code>if (isAdmin) return &lt;Admin /&gt;; return &lt;User /&gt;;</code>.',
            'All three are just JavaScript. Pick the one that reads cleanest for the situation.'
          ],
          list: [
            '<strong>Ternary</strong> (either/or): <code>{cond ? &lt;A /&gt; : &lt;B /&gt;}</code>.',
            '<strong>&amp;&amp;</strong> (show only if): <code>{cond &amp;&amp; &lt;A /&gt;}</code> — beware of <code>0</code> rendering.',
            '<strong>if/else</strong> before the <code>return</code> for complex logic.',
            'You cannot put an <code>if</code> statement <em>inside</em> JSX curly braces — use a ternary or move the logic out.'
          ],
          code: `// 1. Ternary — either/or
function App() {
  const isLoggedIn = true;
  return isLoggedIn ? <Logout /> : <Login />;
}

// 2. && — show only if
function App() {
  const isLoggedIn = true;
  return <div>{isLoggedIn && <p>Welcome back!</p>}</div>;
}

// 3. if/else — for complex logic
function App({ role }) {
  if (role === 'admin') return <Admin />;
  if (role === 'editor') return <Editor />;
  return <Reader />;
}`
        }
      ]
    },
    'iterating-array': {
      title: 'Iterating Array',
      sections: [
        {
          heading: 'Rendering lists with map()',
          content: [
            'To render a list of items in React, you turn an array of data into an array of elements using the JavaScript <code>map()</code> method. Each element of the array becomes a JSX element, and React renders them all.',
            'Whenever you render a list, React asks you to give each element a <strong>key</strong> prop. The key is a unique, stable identifier for that item — usually the item\'s id from your database. React uses keys to match elements between renders, so it can reuse DOM nodes instead of recreating them.',
            'Why does this matter? If your list order changes (items added, removed, reordered) and you used the array index as the key, React can match the wrong items and produce subtle bugs — the wrong item gets the wrong state, animations glitch, inputs keep the wrong value. Use a stable id whenever you have one.',
            'Keys only need to be unique <em>among siblings</em> — the same key can appear in different lists. They do not need to be globally unique, and they are not passed to the component as a prop.'
          ],
          list: [
            'Use <code>array.map(item =&gt; &lt;Element /&gt;)</code> to render lists.',
            'Give each element a unique, stable <code>key</code> prop (usually <code>item.id</code>).',
            'Avoid using the array index as the key when the list can reorder.',
            'Keys only need to be unique <em>among siblings</em>, not globally.',
            'Keys are not accessible as <code>props.key</code> inside the component.'
          ],
          code: `const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  return (
    <ul>
      {numbers.map(n => (
        <li key={n.toString()}>{n}</li>
      ))}
    </ul>
  );
}`,
          example: {
            title: 'Try it Yourself — fetching and rendering a list',
            code: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}`,
            output: '<h1>Users</h1><ul><li>Leanne (leanne@example.com)</li><li>Ervin (ervin@example.com)</li>...</ul>',
            type: 'code'
          }
        }
      ]
    }
  },

  module5: {
    'forms-in-react': {
      title: 'Forms in React',
      sections: [
        {
          heading: 'Controlled components',
          content: [
            'A form input in React is usually a <strong>controlled component</strong>: its value is driven by React state, and every keystroke updates that state. This makes the component the "single source of truth" for the input — the value on screen always matches the value in state.',
            'The pattern is three lines:',
            "1. Declare state: <code>const [firstName, setFirstName] = useState('');</code><br>2. Bind the value: <code>&lt;input value={firstName} onChange={e =&gt; setFirstName(e.target.value)} /&gt;</code><br>3. Use <code>firstName</code> anywhere — to validate, submit, display.",
            'Because the state is the source of truth, you can validate on every keystroke, disable the submit button until the input is valid, or format the value as the user types. The trade-off is that every keystroke triggers a re-render, which is fine for normal forms.',
            'For a full form, repeat the pattern for each field. To keep validation simple, store errors in a separate state object and display them conditionally.'
          ],
          list: [
            '<strong>Controlled component</strong> = the input value is driven by React state.',
            'Pattern: <code>useState</code> for the value + <code>value={...}</code> + <code>onChange</code> updates state.',
            'State is the single source of truth — the on-screen value always matches state.',
            'Lets you validate, format, or disable the submit button as the user types.',
            'One <code>useState</code> per field is the simplest approach.'
          ],
          code: `import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!username.trim()) errs.username = 'Username is required';
    else if (username.trim().length < 5) errs.username = 'Min 5 characters';
    if (!password.trim()) errs.password = 'Password is required';
    setErrors(errs);
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(validate()).length === 0) {
      alert('Submitted for ' + username);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>}
      <input value={password} onChange={e => setPassword(e.target.value)} />
      {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
      <button type="submit">Login</button>
    </form>
  );
}`
        }
      ]
    },
    'uncontrolled-forms': {
      title: 'Uncontrolled Forms',
      sections: [
        {
          heading: 'When state is not the source of truth',
          content: [
            'An <strong>uncontrolled component</strong> is the opposite of a controlled one: the input manages its own state in the DOM, and React does not track every keystroke. You read the value from the DOM only when you need it — usually on submit.',
            'This is useful for simple forms where you do not need to validate or transform the value on every keystroke, or for integrating with non-React code. The trade-off is that React is no longer the source of truth, so you cannot easily do live validation or conditional UI based on the input.',
            'The tool for this is the <code>useRef</code> hook. A ref is an object whose <code>.current</code> property holds a mutable value that does <em>not</em> trigger a re-render when it changes. You attach it to an input with <code>ref={myRef}</code>, and read the value with <code>myRef.current.value</code>.',
            'As a rule of thumb: use controlled components for everything you build yourself; reach for uncontrolled only when integrating with legacy code, file inputs (which cannot be controlled), or very simple one-shot forms.'
          ],
          list: [
            '<strong>Uncontrolled</strong> = the DOM (not React state) holds the input value.',
            'Use <code>useRef</code> to access the DOM node: <code>const ref = useRef()</code>.',
            'Attach it with <code>ref={ref}</code>, read the value with <code>ref.current.value</code>.',
            'No re-render on every keystroke — good for simple forms and file inputs.',
            'Cannot do live validation or conditional UI based on the value.'
          ],
          code: `import { useRef } from 'react';

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === 'admin' && password === 'admin') {
      alert('Success');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={usernameRef} />
      <input ref={passwordRef} type="password" />
      <button type="submit">Login</button>
    </form>
  );
}`
        }
      ]
    },
    'redux-storejs-middleware-routing': {
      title: 'Redux/Store/Middleware/Routing',
      sections: [
        {
          heading: 'State management: local vs. global',
          content: [
            'In React, <strong>state</strong> is the data a component remembers between renders. There are two levels:',
            '<strong>1. Component (local) state</strong> — data only one component needs, stored with <code>useState</code>. A toggle, a search box, a form field are good examples.<br><strong>2. Global state</strong> — data many components across the app need, like the logged-in user, a shopping cart, or a theme. Storing this at the app level avoids <em>props drilling</em> — passing props through many layers of components that do not care about them.',
            'For simple global state, the built-in <strong>Context API</strong> is usually enough. For complex apps with lots of interacting state, <strong>Redux</strong> (and its modern form, <strong>Redux Toolkit</strong>) is the most popular choice.'
          ],
          list: [
            '<strong>Component state</strong> — local data, stored with <code>useState</code>.',
            '<strong>Global state</strong> — app-wide data, accessed by any component.',
            '<strong>Props drilling</strong> — passing props through many levels; global state avoids this.',
            'Built-in option: <strong>Context API</strong>. Popular library: <strong>Redux Toolkit</strong>.'
          ]
        },
        {
          heading: 'Context API — the built-in option',
          content: [
            'The Context API lets a parent component share state with any descendant, no matter how deep, without passing props manually at every level. The idea is simple:',
            '1. <strong>Create a context</strong>: <code>const UserContext = createContext();</code><br>2. <strong>Provide it</strong>: wrap your app in <code>&lt;UserContext.Provider value={{ user, login }}&gt;</code>. Any descendant can read this value.<br>3. <strong>Consume it</strong>: in any child, call <code>const { user, login } = useContext(UserContext);</code>.',
            'Context is great for things that rarely change (theme, locale, the current user). It re-renders every consumer when the value changes, so for fast-changing data it can become a bottleneck — that is where Redux or other libraries shine.'
          ],
          list: [
            '<code>createContext()</code> creates a context object.',
            'Wrap your app in <code>&lt;MyContext.Provider value={...}&gt;</code>.',
            'Read it with <code>useContext(MyContext)</code> in any descendant.',
            'Good for slow-changing global data: theme, locale, current user.',
            'Every consumer re-renders when the value changes — not ideal for fast-changing data.'
          ],
          code: `import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{ user, login: setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function Header() {
  const { user } = useContext(UserContext);
  return <h1>Hello, {user || 'guest'}</h1>;
}

// index.js
<UserProvider>
  <App />
</UserProvider>`
        },
        {
          heading: 'Redux Toolkit — for complex global state',
          content: [
            'Redux is a predictable state container. All app state lives in a single <strong>store</strong>, and the only way to change it is to dispatch an <strong>action</strong>. A <strong>reducer</strong> is a pure function that takes the current state and an action and returns the new state. This makes state changes easy to trace, test, and undo.',
            'Redux has four parts:',
            '<strong>Action</strong> — a plain object with a <code>type</code> and optional <code>payload</code>. Describes what happened.<br><strong>Reducer</strong> — a pure function: <code>(state, action) =&gt; newState</code>. Must not mutate state.<br><strong>Store</strong> — holds the state. Created with <code>configureStore({ reducer })</code>.<br><strong>Dispatch / Selectors</strong> — <code>dispatch(action)</code> updates the store; <code>useSelector(state =&gt; state.user)</code> reads from it.',
            'Modern Redux uses <strong>Redux Toolkit</strong> (the official, recommended way). Its <code>createSlice</code> function generates actions and reducers from a single definition, with built-in support for async via <code>createAsyncThunk</code>. Install it with <code>npm install @reduxjs/toolkit react-redux</code>.',
            'For async work (API calls) you add <strong>middleware</strong>. The two common choices are <strong>Redux Thunk</strong> (simple, built into Toolkit — good for most apps) and <strong>Redux Saga</strong> (uses ES6 generators — more powerful, for complex workflows like retries and cancellation).'
          ],
          list: [
            'All app state lives in a single <strong>store</strong>.',
            'State changes only through dispatched <strong>actions</strong>.',
            'A <strong>reducer</strong> is a pure function: <code>(state, action) =&gt; newState</code>.',
            '<strong>Redux Toolkit</strong> (<code>createSlice</code>) is the modern, recommended way to write Redux.',
            'Async: <strong>Redux Thunk</strong> (simple, built-in) or <strong>Redux Saga</strong> (advanced, generators).',
            'Install: <code>npm install @reduxjs/toolkit react-redux</code>.'
          ],
          code: `// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const r = await fetch('https://api.example.com/users');
  return r.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { username: '', isAuthenticated: false, users: [] },
  reducers: {
    login: (state, action) => { state.username = action.payload; },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
export const store = configureStore({ reducer: { user: userReducer } });

// index.js
import { Provider } from 'react-redux';
<Provider store={store}><App /></Provider>;

// In a component
import { useSelector, useDispatch } from 'react-redux';
const { username } = useSelector(state => state.user);
const dispatch = useDispatch();
dispatch(login('ada'));`
        },
        {
          heading: 'Protected routes',
          content: [
            'A common need is to show certain routes only to logged-in users. The pattern is to check the auth state and render the protected routes conditionally. If the user is not authenticated, render a login page or a redirect instead.',
            'In the simplest form, you wrap the protected routes in an <code>if (isAuthenticated)</code> block. For larger apps, extract that into a <code>&lt;ProtectedRoute&gt;</code> component that checks auth and either renders its children or redirects to <code>/login</code>.'
          ],
          list: [
            'Render protected routes only when the user is authenticated.',
            'Simplest form: <code>{isAuthenticated &amp;&amp; &lt;Route ...&gt;}</code>.',
            'Larger apps: extract a <code>&lt;ProtectedRoute&gt;</code> wrapper component.',
            'Combine with Redux/Context to read the auth state in one place.'
          ]
        }
      ]
    },
    'lazy-loading': {
      title: 'Lazy Loading',
      sections: [
        {
          heading: 'Split your bundle',
          content: [
            'By default, every <code>import</code> in your app ends up in one big JavaScript file. For a large app this file can be hundreds of kilobytes, which means a slow first load — especially on mobile.',
            '<strong>Lazy loading</strong> (also called <strong>code splitting</strong>) solves this by loading a component only when it is first needed. A settings page that 90% of users never visit does not need to be in the initial download.',
            'React makes this easy with two pieces:',
            "<code>React.lazy</code> wraps a dynamic <code>import()</code> so the component is loaded on demand. Use it like: <code>const Settings = React.lazy(() =&gt; import('./Settings'));</code>.<br><code>&lt;Suspense&gt;</code> wraps the lazy component and shows a fallback (a spinner, a skeleton) while the code is being downloaded.",
            'Pair lazy loading with route-based splitting — load each page only when the user navigates to it — for the biggest wins.'
          ],
          list: [
            '<strong>Lazy loading</strong> = load code only when it is first needed (code splitting).',
            "<code>React.lazy(() =&gt; import('./Page'))</code> creates a lazy component.",
            'Wrap it in <code>&lt;Suspense fallback={...}&gt;</code> to show something while loading.',
            'Best used per-route: each page is a separate chunk, loaded on navigation.',
            'Smaller initial bundle = faster first load, especially on mobile.'
          ],
          code: `import React, { Suspense, lazy } from 'react';

const Admin = lazy(() => import('./Admin'));
const Customer = lazy(() => import('./Customer'));

function App({ role }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {role === 'admin' ? <Admin /> : <Customer />}
    </Suspense>
  );
}`
        }
      ]
    },
    'third-party-libraries': {
      title: 'Third Party Libraries',
      sections: [
        {
          heading: 'Common libraries you will reach for',
          content: [
            'React itself is small. Most real apps add a few libraries for common needs. Here are some of the most popular:',
            '<strong>react-tooltip</strong> — adds tooltips (hover help text) to elements. Install with <code>npm install react-tooltip</code>, add <code>data-tip="Help text"</code> to an element, and render the <code>&lt;ReactTooltip /&gt;</code> component.',
            "<strong>react-icons</strong> — thousands of icons as React components, from Font Awesome, Material, and more. <code>npm install react-icons</code>, then <code>import { FaBeer } from 'react-icons/fa'</code> and use <code>&lt;FaBeer /&gt;</code>.",
            "<strong>react-toastify</strong> — toast notifications (the little \"Saved!\" popups). Install it, add <code>&lt;ToastContainer /&gt;</code> once in your app, and call <code>toast.success('Saved')</code> anywhere.",
            '<strong>Sass / node-sass</strong> — a CSS preprocessor that adds variables, nesting, and mixins. Install <code>sass</code>, then import <code>.scss</code> files the same way you import <code>.css</code>.',
            'When picking a library, prefer ones that are actively maintained (recent commits, recent npm publish) and have a reasonable bundle size. The npm site shows weekly downloads and the bundle size on <a href="https://bundlephobia.com/" target="_blank">bundlephobia</a>.'
          ],
          list: [
            '<strong>react-tooltip</strong> — hover tooltips. <code>npm install react-tooltip</code>.',
            '<strong>react-icons</strong> — icon set as components. <code>npm install react-icons</code>.',
            '<strong>react-toastify</strong> — toast notifications. <code>npm install react-toastify</code>.',
            '<strong>sass</strong> — SCSS support (variables, nesting, mixins). <code>npm install sass</code>.',
            'Check maintenance status and bundle size before adding any library.'
          ],
          code: `// Tooltips
import ReactTooltip from 'react-tooltip';
<h1 data-tip="I am a tooltip">Hover me</h1>
<ReactTooltip />

// Icons
import { FaBeer } from 'react-icons/fa';
<h3>Let's grab a <FaBeer /></h3>

// Toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<ToastContainer />
toast.success('Saved!');`
        },
        {
          heading: 'A quick Sass primer',
          content: [
            'Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor. You write <code>.scss</code> files with extra features, and Sass compiles them to plain CSS. The features that matter most for beginners:',
            '<strong>Variables</strong> — store values once and reuse them: <code>$primary-color: #007bff;</code>, then use <code>color: $primary-color;</code> anywhere.<br><strong>Nesting</strong> — nest selectors to match HTML structure: <code>nav { ul { ... } }</code> compiles to <code>nav ul { ... }</code>.<br><strong>Mixins</strong> — reusable blocks of CSS: <code>@mixin button { ... }</code>, then <code>@include button;</code> anywhere.<br><strong>@import</strong> — split styles into multiple files and import them, just like in JavaScript.<br><strong>@extend</strong> — share a set of styles between selectors: <code>.report-btn { @extend .btn-basic; }</code>.',
            'In a React project, install <code>sass</code> and import <code>.scss</code> files the same way as <code>.css</code> — Vite and CRA handle the compilation automatically.'
          ],
          list: [
            '<strong>Sass</strong> = CSS preprocessor with variables, nesting, mixins, and more.',
            'Files use the <code>.scss</code> extension.',
            'Install with <code>npm install sass</code>; import <code>.scss</code> like <code>.css</code>.',
            'Variables: <code>$primary: #007bff;</code> → <code>color: $primary;</code>.',
            'Nesting: <code>nav { ul { margin: 0; } }</code> → <code>nav ul { margin: 0; }</code>.',
            'Mixins: <code>@mixin ...</code> + <code>@include ...</code> for reusable blocks.'
          ],
          code: `/* colors.scss */
$primary: #007bff;
$secondary: #6c757d;

@mixin button-styles {
  background-color: $primary;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:hover { background-color: $secondary; }
}

/* header.scss */
@import './colors.scss';

.header {
  h1 { color: $primary; }
  button { @include button-styles; }
}`
        }
      ]
    },
    'moment-library': {
      title: 'Moment Library',
      sections: [
        {
          heading: 'Working with dates',
          content: [
            "JavaScript's built-in <code>Date</code> object is awkward to use — formatting, parsing, and timezones are all painful. <strong>Moment.js</strong> was the most popular library for fixing this. It gives you a fluent API: <code>moment('2022-03-27').format('MMM DD, YYYY')</code> returns <code>Mar 27, 2022</code>.",
            '<strong>react-moment</strong> is a thin wrapper that lets you use Moment as a React component: <code>&lt;Moment format="DD/MM/YYYY"&gt;{date}&lt;/Moment&gt;</code>. This is handy when you need to format a date inside JSX.',
            'A note for new projects: Moment.js is now in <em>maintenance mode</em> (the team recommends not using it for new code). Modern alternatives are <strong>date-fns</strong> (modular, tree-shakeable) and the built-in <code>Intl.DateTimeFormat</code> API. The concepts are the same — parse, format, manipulate — only the API differs. You will still see Moment in many existing codebases, which is why it is covered here.'
          ],
          list: [
            '<strong>Moment.js</strong> — popular library for parsing, formatting, and manipulating dates.',
            'Install: <code>npm install moment react-moment</code>.',
            "Format: <code>moment(date).format('MMM DD, YYYY')</code>.",
            '<strong>react-moment</strong> — wrap dates in <code>&lt;Moment format="..."&gt;{date}&lt;/Moment&gt;</code>.',
            'For new projects prefer <strong>date-fns</strong> or the built-in <code>Intl</code> API — Moment is in maintenance mode.'
          ],
          code: `import moment from 'moment';

const date = moment('2022-03-27T12:00:00Z');
const formatted = date.format('MMM DD, YYYY'); // "Mar 27, 2022"

// As a React component
import Moment from 'react-moment';

function MyComponent({ doj }) {
  return (
    <p>Date of joining: <Moment format="DD/MM/YYYY">{doj}</Moment></p>
  );
}`
        }
      ]
    },
    'lifecycle-of-components': {
      title: 'Lifecycle of Components',
      sections: [
        {
          heading: 'The three phases of a component',
          content: [
            'Every React component goes through a <strong>lifecycle</strong> — a sequence of phases from when it is first added to the page to when it is removed. Class components expose these phases as methods you can override; function components use the <code>useEffect</code> hook instead, which covers the same ground with less boilerplate.',
            'The three phases are:',
            '<strong>1. Mounting</strong> — the component is being added to the DOM for the first time. This is where you set up initial state and start any side effects (timers, subscriptions, API calls).<br><strong>2. Updating</strong> — the component re-renders because its state or props changed. This is where you can react to changes (update a chart, log an analytics event).<br><strong>3. Unmounting</strong> — the component is about to be removed from the DOM. This is where you clean up — clear timers, remove listeners, cancel network requests — to avoid memory leaks.',
            'There is also an <strong>error handling</strong> phase that runs when a child component throws during rendering. Class components use <code>componentDidCatch</code> for this; function components use a special Error Boundary pattern (a class component, since there is no Hook equivalent yet).'
          ],
          list: [
            '<strong>Mounting</strong> — component is added to the DOM (set up state, start side effects).',
            '<strong>Updating</strong> — component re-renders due to state/prop changes.',
            '<strong>Unmounting</strong> — component is removed (clean up timers, listeners, requests).',
            '<strong>Error handling</strong> — a child threw; used for error boundaries.',
            'Class components use lifecycle methods; function components use <code>useEffect</code>.'
          ]
        },
        {
          heading: 'Class component lifecycle methods',
          content: [
            'In a class component, each phase has specific methods that React calls in order. Here is the sequence for each phase:',
            '<strong>Mounting:</strong> <code>constructor</code> → <code>static getDerivedStateFromProps</code> → <code>render</code> → <code>componentDidMount</code>.<br><strong>Updating:</strong> <code>static getDerivedStateFromProps</code> → <code>shouldComponentUpdate</code> → <code>render</code> → <code>getSnapshotBeforeUpdate</code> → <code>componentDidUpdate</code>.<br><strong>Unmounting:</strong> <code>componentWillUnmount</code>.',
            'The ones you will use most are <code>componentDidMount</code> (fetch data, set up listeners), <code>componentDidUpdate</code> (react to changes), and <code>componentWillUnmount</code> (clean up). <code>shouldComponentUpdate</code> returns <code>true</code> by default; return <code>false</code> to skip a re-render.',
            'For new code, prefer function components with <code>useEffect</code> — it combines all of these into one hook with a cleanup function. The class lifecycle methods are included here because you will see them in existing code.'
          ],
          list: [
            'Mounting: constructor → getDerivedStateFromProps → render → componentDidMount.',
            'Updating: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate.',
            'Unmounting: componentWillUnmount.',
            'Most-used: <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>.',
            '<code>shouldComponentUpdate</code> returns <code>true</code> by default; return <code>false</code> to skip rendering.',
            'Modern code uses <code>useEffect</code> with a cleanup function instead.'
          ],
          code: `import { Component } from 'react';

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Trinits' };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount — fetch data, set up listeners');
    setTimeout(() => this.setState({ salary: 5000 }), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true; // return false to skip re-render
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount — clean up here');
  }

  render() {
    return <div>{this.state.name} {this.state.salary}</div>;
  }
}`
        },
        {
          heading: 'The function component equivalent — useEffect',
          content: [
            'The <code>useEffect</code> hook replaces most of the class lifecycle. Its basic shape is <code>useEffect(() =&gt; { ... return cleanup; }, [deps])</code>. The function runs after render; the optional returned function is the cleanup, run before the next effect and on unmount; the dependency array controls when the effect re-runs.',
            'With an empty array <code>[]</code>, the effect runs once on mount and the cleanup runs once on unmount — equivalent to <code>componentDidMount</code> + <code>componentWillUnmount</code>. With values in the array, the effect runs on mount and again whenever any of those values change — equivalent to <code>componentDidUpdate</code>. With no array, it runs after every render.',
            'This is the modern way to handle side effects and the one you should use for new code.'
          ],
          list: [
            '<code>useEffect(fn, [])</code> — run once on mount (like componentDidMount).',
            '<code>useEffect(fn, [deps])</code> — run on mount and when a dep changes (like componentDidUpdate).',
            '<code>useEffect(fn)</code> — run after every render (rarely what you want).',
            'Return a cleanup function to run it on unmount (like componentWillUnmount).',
            'Always list every value from outside the effect in the dependency array.'
          ],
          code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // runs on mount and whenever userId changes
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(setUser);

    // cleanup runs before the next effect and on unmount
    return () => console.log('cleaning up for', userId);
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}`
        }
      ]
    },
    build: {
      title: 'Build',
      sections: [
        {
          heading: 'Building your app for production',
          content: [
            'During development you run <code>npm run dev</code> (or <code>npm start</code>) to get a dev server with live reload. That server is great for you, but it is <em>not</em> what you ship to users — it is slow, includes lots of debug code, and serves files one at a time.',
            'For production you run <code>npm run build</code>. This command does several things:',
            '1. <strong>Compiles</strong> your JSX and modern JavaScript into a format every browser understands (via Babel/SWC).<br>2. <strong>Bundles</strong> all your modules and their dependencies into a few files (via Vite/esbuild or Webpack).<br>3. <strong>Optimizes</strong> — minifies the code, removes dead code, splits the bundle into chunks for lazy loading.<br>4. <strong>Outputs</strong> the result into a folder (usually <code>dist/</code> for Vite or <code>build/</code> for CRA).',
            'The files in that output folder are what you deploy to a web server. They are small, fast, and have no debug code — ready for real users.',
            'One gotcha: if your app is served from a sub-path (for example, <code>https://example.com/payroll/</code>), set the <code>homepage</code> field in <code>package.json</code> (CRA) or the <code>base</code> option in <code>vite.config.js</code> so the build knows its root path. And if you deploy to GitHub Pages or another static host that does not support clean URLs, use <code>HashRouter</code> instead of <code>BrowserRouter</code> to avoid 404s on refresh.'
          ],
          list: [
            '<code>npm run build</code> creates an optimized production build.',
            'It compiles JSX, bundles modules, minifies, and code-splits.',
            'Output goes to <code>dist/</code> (Vite) or <code>build/</code> (CRA).',
            'Deploy the contents of that folder to a web server.',
            'For sub-path hosting, set <code>homepage</code> (CRA) or <code>base</code> (Vite).',
            'On hosts without clean URL support, use <code>HashRouter</code>.'
          ],
          code: `npm run build

# package.json (Create React App)
"homepage": "https://example.com/demo/payroll"

# vite.config.js (Vite)
export default { base: '/demo/payroll/' }

# For static hosts without clean URLs
<HashRouter>
  <App />
</HashRouter>`
        }
      ]
    },
    deployment: {
      title: 'Deployment',
      sections: [
        {
          heading: 'From your laptop to your users',
          content: [
            '<strong>Deployment</strong> is the process of taking your finished app and making it available on a server where users can reach it. After you run <code>npm run build</code>, the contents of the output folder are static files (HTML, JS, CSS, images). You just need to put them somewhere that serves them over HTTP.',
            'There are three common ways to deploy a React app:',
            '<strong>1. Static hosting services</strong> — the easiest. Services like <a href="https://www.netlify.com/" target="_blank">Netlify</a>, <a href="https://vercel.com/" target="_blank">Vercel</a>, and <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> host static sites for free. You point them at your Git repository; every push triggers a build and a deploy. No server configuration required.',
            '<strong>2. Cloud hosting</strong> — more control, more setup. AWS (S3 + CloudFront), Google Cloud Storage, or Azure can serve your build folder. You configure the bucket, upload the files, and set up a CDN. Good for apps that need scaling, custom domains, or backend integration.',
            '<strong>3. Manual deployment</strong> — you copy the build folder to your own server (via FTP, SSH, or a script). Simple for small apps or internal tools, but you do all the work yourself and it is easy to make mistakes.',
            'Whatever method you pick, the goal is the same: the static files from your build end up on a server that serves them to anyone who visits your URL.'
          ],
          list: [
            '<strong>Static hosting</strong> (Netlify, Vercel, GitHub Pages) — easiest, often free, auto-deploys from Git.',
            '<strong>Cloud hosting</strong> (AWS S3 + CloudFront, GCP Storage) — more control, more setup, scales well.',
            '<strong>Manual deployment</strong> — copy the build folder to your own server. Simple, but more manual work.',
            'In every case you deploy the static files from your <code>build</code>/<code>dist</code> folder.',
            'Pair static hosting with a CDN for faster global load times.'
          ]
        }
      ]
    },
    'cicd-pipeline': {
      title: 'CI/CD Pipeline',
      sections: [
        {
          heading: 'Automate the path from code to production',
          content: [
            'A <strong>CI/CD pipeline</strong> is an automated sequence of steps that takes your code from a commit all the way to production — without anyone running commands by hand. CI stands for <strong>Continuous Integration</strong> (build and test on every commit); CD stands for <strong>Continuous Delivery/Deployment</strong> (automatically release what passes).',
            'A typical pipeline has four stages:',
            '<strong>1. Source</strong> — the pipeline watches your Git repository. Every push triggers a run.<br><strong>2. Build</strong> — install dependencies, run <code>npm run build</code>, produce the output files.<br><strong>3. Test</strong> — run the unit tests, lint, and (optionally) end-to-end tests. If anything fails, the pipeline stops.<br><strong>4. Deploy</strong> — copy the build to the server (staging first, then production after approval).',
            '<strong>Jenkins</strong> is a popular open-source automation server for building such pipelines. It integrates with Git (and SVN, Mercurial), runs the build and tests on every commit, and can copy the build to your server when it passes. GitHub Actions, GitLab CI, and CircleCI are cloud-based alternatives that do the same thing with less infrastructure to manage.',
            'The benefits are big: more frequent and predictable releases, fewer human errors, faster time-to-market, and a clear audit trail of what was deployed when.'
          ],
          list: [
            '<strong>CI/CD</strong> = Continuous Integration / Continuous Delivery (or Deployment).',
            'Four stages: source → build → test → deploy.',
            '<strong>Jenkins</strong> — popular open-source automation server; integrates with Git.',
            'Cloud alternatives: GitHub Actions, GitLab CI, CircleCI.',
            'Every push triggers a build; failing tests stop the pipeline.',
            'Benefits: fewer manual errors, faster releases, an audit trail.'
          ],
          code: `# A typical pipeline script (Jenkins / GitHub Actions, simplified)

# 1. Source — triggered by a push to main
# 2. Build
npm install
npm run build

# 3. Test
npm test
npm run lint

# 4. Deploy (only on the main branch)
# Copy dist/ to the production server
scp -r dist/* user@server:/var/www/myapp/`
        }
      ]
    }
  }
};