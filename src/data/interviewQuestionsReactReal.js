// Real React interview questions from actual candidate experiences

export const reactRealQuestions = {
  questions: [
    {
      question: 'Find and fix why a React component is rendering twice on every update.',
      answer: `<p>Double renders are commonly caused by <strong>React.StrictMode</strong> in development, which intentionally mounts components twice to detect side effects. This is not a bug and does not happen in production builds.</p><p>Other causes include: state updates in render, event handlers that call setState twice, or an effect that triggers a state change that re-runs the effect. Fix by moving side effects into &lt;code&gt;useEffect</code>, using functional state updates, and ensuring dependencies are correct. In production, verify with the React DevTools Profiler.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Debugging'],
      keyPoints: [
        'React.StrictMode intentionally double-invokes components in development.',
        'Avoid state updates during render and unintended effect loops.',
        'Use the Profiler and dependency arrays to diagnose production renders.'
      ]
    },
    {
      question: 'Build a product filter component that handles 10,000+ items without performance issues.',
      answer: `<p>Design the component with virtualization, memoization, and off-main-thread work.</p><ul><li>Use a virtualized list (e.g., &lt;code&gt;react-window</code> or &lt;code&gt;react-virtualized</code>) so only visible rows are rendered.</li><li>Memoize expensive filtering with &lt;code&gt;useMemo</code> and debounce filter input changes.</li><li>Move heavy sorting/filtering to a Web Worker if needed.</li><li>Use &lt;code&gt;React.memo</code> for row components and stable keys.</li></ul><p>Measure with React DevTools Profiler and avoid deriving state on every keystroke.</p>`,
      difficulty: 'Advanced',
      tags: ['React', 'Performance'],
      keyPoints: [
        'Virtualize long lists to render only visible items.',
        'Memoize filtered/sorted data and debounce user input.',
        'Offload heavy computation to Web Workers when necessary.'
      ]
    },
    {
      question: 'How would you debug a memory leak in a React application with thousands of DOM nodes?',
      answer: `<p>Start by capturing a heap snapshot in Chrome DevTools and look for retained detached DOM trees or component instances that should have been garbage collected.</p><p>Common leaks include uncleared timers or subscriptions in effects, growing global caches, closures capturing large objects, and unremoved event listeners. Use the React DevTools Profiler to identify components that are not unmounting, and ensure every &lt;code&gt;useEffect</code> returns a cleanup function for timers, listeners, and external subscriptions.</p>`,
      difficulty: 'Advanced',
      tags: ['React', 'Memory Leaks', 'Debugging'],
      keyPoints: [
        'Use Chrome heap snapshots to find retained objects.',
        'Clean up timers, listeners, and subscriptions in useEffect.',
        'Avoid closures that hold references to large or stale data.'
      ]
    },
    {
      question: 'Debug why text selection breaks when inserting React components inline with text.',
      answer: `<p>This usually happens when React re-renders and reconciles the DOM, causing nodes to be recreated or reordered. When a component remounts, the browser loses the selection range because the underlying text nodes are replaced.</p><p>Solutions include: using stable keys, avoiding unnecessary re-renders with &lt;code&gt;React.memo</code>, preserving selection state in React state, and restoring the selection range after updates using the Selection API. Contenteditable libraries often manage this explicitly.</p>`,
      difficulty: 'Advanced',
      tags: ['React', 'DOM', 'Debugging'],
      keyPoints: [
        'Reconciliation can recreate text nodes and lose browser selection.',
        'Use stable keys and memoization to minimize DOM churn.',
        'Save and restore selection ranges when content changes.'
      ]
    },
    {
      question: 'Implement React Context from scratch.',
      answer: `<p>Context can be modeled as a publish-subscribe store. A minimal implementation provides a &lt;code&gt;createContext</code> factory that returns a Provider and a Consumer/useContext hook.</p><pre>&lt;code class="language-javascript"&gt;function createContext(defaultValue) {
  const context = {
    _value: defaultValue,
    _listeners: new Set(),
    Provider: function Provider({ value, children }) {
      context._value = value;
      useEffect(() => () => context._listeners.forEach(cb => cb(value)), [value]);
      return children;
    }
  };
  return context;
}

function useContext(ctx) {
  const [value, setValue] = useState(ctx._value);
  useEffect(() => {
    ctx._listeners.add(setValue);
    return () => ctx._listeners.delete(setValue);
  }, [ctx]);
  return value;
}</code></pre><p>Real React Context also handles concurrent updates, context selectors, and propagation rules.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Context'],
      keyPoints: [
        'Context is a publish-subscribe mechanism for sharing state.',
        'A Provider stores value and notifies subscribed consumers.',
        'useContext subscribes a component to context value changes.'
      ]
    },
    {
      question: 'Describe a complex React component you\'ve built that you\'re particularly proud of. What challenges did you face?',
      answer: `<p>This is a behavioral question. A strong answer describes a specific component or feature, the technical and product challenges, and the outcome.</p><p>For example, a configurable data table with sorting, filtering, pagination, and inline editing. Challenges included managing derived state, avoiding prop drilling, and maintaining performance with large datasets. Solutions included lifting state with a reducer, using virtualization, memoizing rows, and writing comprehensive tests. Emphasize collaboration, trade-offs, and measurable impact such as reduced bundle size or faster load times.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Behavioral'],
      keyPoints: [
        'Pick a specific, relevant project with clear complexity.',
        'Explain challenges, trade-offs, and decisions.',
        'Quantify impact when possible.'
      ]
    },
    {
      question: 'How do you approach state management in large React applications? Discuss Redux, Context API, and when to choose each.',
      answer: `<p>For local or medium-shared state, start with &lt;code&gt;useState</code>/&lt;code&gt;useReducer</code> and prop drilling only where shallow. Use <strong>Context API</strong> for static or rarely changing global data such as themes, authenticated user, or locale.</p><p>Use <strong>Redux</strong> or <strong>Zustand</strong> when many components read or write the same state, when you need predictable update patterns, middleware, time-travel debugging, or complex cross-cutting concerns. Redux Toolkit reduces boilerplate and enforces best practices. Avoid Context for high-frequency updates because every consumer re-renders.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'State Management', 'Redux', 'Context'],
      keyPoints: [
        'Use useState/useReducer for local and simple shared state.',
        'Use Context for low-frequency global data like theme or user.',
        'Use Redux/Zustand for complex, frequently updated shared state.'
      ]
    },
    {
      question: 'Explain your approach to optimizing performance in a React application. What metrics do you prioritize?',
      answer: `<p>Performance optimization should be driven by measurement, not guesses. Prioritize user-centric metrics such as First Contentful Paint (FCP), Largest Contentful Paint (LCP), Time to Interactive (TTI), and Interaction to Next Paint (INP).</p><p>Techniques include: code splitting and lazy loading, memoization with &lt;code&gt;React.memo</code>/&lt;code&gt;useMemo</code>/&lt;code&gt;useCallback</code>, virtualizing long lists, avoiding anonymous functions in render, debouncing inputs, moving expensive work off the main thread, and using a production build. Profile first with Lighthouse and React DevTools to find real bottlenecks.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Performance'],
      keyPoints: [
        'Measure Core Web Vitals and React Profiler data first.',
        'Use code splitting, virtualization, and memoization where needed.',
        'Avoid premature optimization; focus on measured bottlenecks.'
      ]
    },
    {
      question: 'Design and implement a product listing page: responsive grid, filtering by category and price, sorting options, shopping cart, accessible.',
      answer: `<p>Break the page into components: &lt;code&gt;ProductGrid</code>, &lt;code&gt;FilterPanel</code>, &lt;code&gt;SortSelect</code>, &lt;code&gt;ProductCard</code>, and &lt;code&gt;CartSummary</code>. Keep filter/sort state in the URL so the view is shareable and back-button friendly.</p><p>Use memoized derived state for filtered/sorted products. Make the grid responsive with CSS Grid or Flexbox. Add ARIA labels, keyboard navigation, focus management, and live regions for cart updates. Use Context or a state library for the cart, and persist it to localStorage if desired.</p>`,
      difficulty: 'Advanced',
      tags: ['React', 'System Design', 'Accessibility'],
      keyPoints: [
        'Compose the page into focused, reusable components.',
        'Sync filter and sort state with the URL.',
        'Memoize derived data and ensure accessibility with ARIA and keyboard support.'
      ]
    },
    {
      question: 'Why are keys used in React? What happens if you use index as key?',
      answer: `<p>Keys help React identify which items have changed, been added, or been removed during reconciliation. They should be stable, unique, and predictable across renders.</p><p>Using array index as a key can cause bugs when items are reordered, inserted, or deleted because React associates state and DOM nodes with the wrong item. This can lead to incorrect form inputs, broken animations, and stale component state. Always prefer a unique ID from your data.</p>`,
      difficulty: 'Beginner',
      tags: ['React', 'Keys'],
      keyPoints: [
        'Keys help React track identity during reconciliation.',
        'Keys should be stable and unique across renders.',
        'Index keys cause issues when list order changes.'
      ]
    },
    {
      question: 'What is a pure component in React?',
      answer: `<p>A pure component is a component whose output depends only on its props and state, and has no side effects. React provides &lt;code&gt;React.PureComponent</code> for class components, which implements &lt;code&gt;shouldComponentUpdate</code> with shallow prop and state comparison.</p><p>For function components, &lt;code&gt;React.memo</code> provides similar behavior by skipping re-renders when props have not changed shallowly. Use it for expensive components that receive stable props.</p>`,
      difficulty: 'Beginner',
      tags: ['React', 'PureComponent'],
      keyPoints: [
        'Pure components render the same output for the same props and state.',
        'React.PureComponent skips updates with shallow comparison.',
        'React.memo is the function-component equivalent.'
      ]
    },
    {
      question: 'What is errorBoundary in React?',
      answer: `<p>An error boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs them, and displays a fallback UI instead of crashing the whole app. Only class components can be error boundaries by defining &lt;code&gt;static getDerivedStateFromError()</code> and/or &lt;code&gt;componentDidCatch()</code>.</p><p>Error boundaries do not catch errors in event handlers, asynchronous code, or server-side rendering. For these, use try/catch blocks.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Error Boundary'],
      keyPoints: [
        'Error boundaries catch rendering errors in child components.',
        'They require class components with getDerivedStateFromError or componentDidCatch.',
        'They do not catch errors in event handlers or async code.'
      ]
    },
    {
      question: 'Why is useMemo used? When would you use useCallback?',
      answer: `<p>&lt;code&gt;useMemo</code> caches the result of an expensive computation so it is only recomputed when dependencies change. Use it for heavy calculations, derived data, or object/arrays passed to memoized child components.</p><p>&lt;code&gt;useCallback</code> caches a function definition. It is useful when a function is passed to a child component wrapped in &lt;code&gt;React.memo</code> or when the function is a dependency of &lt;code&gt;useEffect</code>. Avoid overusing both; measure first because memoization itself has a cost.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Hooks', 'Performance'],
      keyPoints: [
        'useMemo caches computed values.',
        'useCallback caches function references for stable child props.',
        'Only use them after identifying a real performance bottleneck.'
      ]
    },
    {
      question: 'What is Virtual DOM and how does it improve performance?',
      answer: `<p>The Virtual DOM is a lightweight in-memory representation of the actual DOM. When state changes, React builds a new virtual DOM tree, compares it with the previous one (diffing), and calculates the minimum set of real DOM mutations needed.</p><p>This improves performance by batching updates, reducing direct DOM manipulation (which is expensive), and avoiding full page repaints. However, the real benefit is developer experience and predictable updates; direct DOM diffing can still be slower than fine-grained reactivity for some use cases.</p>`,
      difficulty: 'Beginner',
      tags: ['React', 'Virtual DOM'],
      keyPoints: [
        'Virtual DOM is an in-memory representation of the UI.',
        'React diffs trees and applies minimal real DOM updates.',
        'It batches updates and reduces manual DOM manipulation.'
      ]
    },
    {
      question: 'Explain React Lifecycle methods. How do they map to hooks?',
      answer: `<p>Class component lifecycle methods map to hooks as follows:</p><ul><li>&lt;code&gt;constructor</code> / initial state → &lt;code&gt;useState</code></li><li>&lt;code&gt;componentDidMount</code> → &lt;code&gt;useEffect</code> with empty dependency array</li><li>&lt;code&gt;componentDidUpdate</code> → &lt;code&gt;useEffect</code> with dependencies</li><li>&lt;code&gt;componentWillUnmount</code> → cleanup function returned from &lt;code&gt;useEffect</code></li><li>&lt;code&gt;shouldComponentUpdate</code> → &lt;code&gt;React.memo</code> or &lt;code&gt;useMemo</code></li><li>&lt;code&gt;getDerivedStateFromError</code> / &lt;code&gt;componentDidCatch</code> → still require class components</li></ul><p>Hooks let you colocate related logic rather than splitting it across lifecycle methods.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Lifecycle', 'Hooks'],
      keyPoints: [
        'useState replaces constructor state initialization.',
        'useEffect handles mount, update, and unmount logic.',
        'React.memo replaces shouldComponentUpdate for function components.'
      ]
    },
    {
      question: 'Implement a kanban board with Backlog, ToDo, Ongoing, Done stages. Tasks can only move forward until Done.',
      answer: `<p>Model the board as an array of columns, each containing an array of tasks. A task has an id, title, and current stage index.</p><pre>&lt;code class="language-javascript"&gt;const columns = ['Backlog', 'ToDo', 'Ongoing', 'Done'];

function moveForward(task) {
  const nextIndex = columns.indexOf(task.stage) + 1;
  if (nextIndex &lt; columns.length) {
    return { ...task, stage: columns[nextIndex] };
  }
  return task;
}</code></pre><p>Render each column with droppable areas. Enforce the forward-only rule in the move handler by validating the target stage index is greater than the current index. Use CSS drag-and-drop or a library like &lt;code&gt;@dnd-kit</code> for accessibility and touch support.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'System Design'],
      keyPoints: [
        'Represent columns and tasks as arrays of objects.',
        'Validate that a move only increases the stage index.',
        'Use accessible drag-and-drop libraries for better UX.'
      ]
    },
    {
      question: 'Explain the difference between server-side rendering (SSR) and static site generation (SSG).',
      answer: `<p><strong>SSR</strong> renders pages on the server for each request. It is ideal for content that changes frequently or depends on the request context, and it improves initial load performance and SEO. Frameworks such as Next.js use &lt;code&gt;getServerSideProps</code> for SSR.</p><p><strong>SSG</strong> renders pages at build time into static HTML. It is best for content that rarely changes, offering the fastest response time because files can be cached on a CDN. Next.js uses &lt;code&gt;getStaticProps</code> for SSG. Hybrid approaches allow per-page choice.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'SSR', 'SSG'],
      keyPoints: [
        'SSR renders on each request; SSG renders at build time.',
        'SSG is faster and CDN-cacheable; SSR supports dynamic request data.',
        'Modern frameworks allow mixing SSR and SSG per route.'
      ]
    },
    {
      question: 'How do you optimize performance in React?',
      answer: `<p>Start by profiling to identify actual bottlenecks. Common optimizations include:</p><ul><li>Code splitting with &lt;code&gt;React.lazy</code> and dynamic imports.</li><li>Memoization with &lt;code&gt;React.memo</code>, &lt;code&gt;useMemo</code>, and &lt;code&gt;useCallback</code>.</li><li>Virtualizing long lists.</li><li>Debouncing or throttling frequent events.</li><li>Lifting state only as high as needed.</li><li>Avoiding inline object/array/function definitions in render.</li><li>Using production builds and measuring Core Web Vitals.</li></ul>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Performance'],
      keyPoints: [
        'Profile before optimizing.',
        'Use code splitting, virtualization, and memoization.',
        'Measure impact with Core Web Vitals and React Profiler.'
      ]
    },
    {
      question: 'Make a file explorer in React using a JSON file.',
      answer: `<p>Represent the file system as a nested tree where each node has a &lt;code&gt;name</code>, &lt;code&gt;type</code> (&quot;file&quot; or &quot;folder&quot;), and optional &lt;code&gt;children</code>. Recursively render folders with collapsible sections and files as leaf items.</p><p>Use a recursive &lt;code&gt;TreeNode</code> component that renders its own children. Track expanded folder IDs in state, and allow selection with a controlled selected file state. For large trees, consider flattening the data and virtualizing the list, or lazily loading children.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Tree', 'Recursion'],
      keyPoints: [
        'Model the data as a nested tree with type and children.',
        'Use a recursive component to render folders and files.',
        'Manage expanded and selected state with React state.'
      ]
    },
    {
      question: 'Implement nested comment user interface (like Reddit comments).',
      answer: `<p>Store comments as a tree where each comment has an id, text, author, and array of replies. Render recursively with a &lt;code&gt;Comment</code> component that renders its own &lt;code&gt;Replies</code> list.</p><p>State management options include recursive updates using immutable helpers, a flattened normalized state (byId), or a reducer. For deep nesting, consider a depth limit, indentation via CSS, and virtualization. Include add/reply, collapse/expand, and vote interactions as features.</p>`,
      difficulty: 'Intermediate',
      tags: ['React', 'Tree', 'UI'],
      keyPoints: [
        'Model comments as a recursive tree.',
        'Render with a recursive component or flattened list with depth.',
        'Use immutable updates or normalized state for mutations.'
      ]
    }
  ]
}
