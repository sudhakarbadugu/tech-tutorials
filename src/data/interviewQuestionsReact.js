// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.643Z

export const reactQuestions = {
  questions: [
    {
      question: 'What is React?',
      answer: `<ul>
              <li>
                React is a declarative, efficient, and flexible JavaScript library for building user
                interfaces, especially single-page applications.
              </li>
              <li>
                It allows developers to create large web applications that can update and render
                efficiently in response to data changes.
              </li>
              <li>
                React uses a component-based architecture, enabling code reuse and modular
                development.
              </li>
              <li>It leverages a virtual DOM to optimize UI rendering and improve performance.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are the key features of React?',
      answer: `<ul>
              <li>
                Component-based architecture: UI is built using reusable, self-contained components.
              </li>
              <li>
                Virtual DOM: React uses a virtual DOM to efficiently update and render only the
                changed parts of the UI.
              </li>
              <li>
                Unidirectional data flow: Data flows in a single direction, making state management
                predictable.
              </li>
              <li>
                JSX: JavaScript XML syntax allows mixing HTML with JavaScript logic for easier UI
                development.
              </li>
              <li>Support for hooks and functional programming patterns.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is JSX?',
      answer: `<ul>
              <li>
                JSX stands for JavaScript XML, a syntax extension for JavaScript used in React to
                describe UI structure.
              </li>
              <li>
                It allows developers to write HTML-like code within JavaScript, making component
                structure more readable.
              </li>
              <li>
                JSX is compiled to React.createElement calls, which create virtual DOM elements.
              </li>
              <li>
                It supports embedding JavaScript expressions inside curly braces
                <code>{...}</code>
                .
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain the difference between class and functional components?',
      answer: `<ul>
              <li>
                Class components are ES6 classes that extend
                <code>React.Component</code>
                and can use lifecycle methods and state.
              </li>
              <li>
                Functional components are plain JavaScript functions that return JSX; they use hooks
                (like
                <code>useState</code>
                ,
                <code>useEffect</code>
                ) for state and side effects.
              </li>
              <li>
                Functional components are generally simpler, easier to test, and preferred in modern
                React development.
              </li>
              <li>
                Class components are less common in new code since the introduction of hooks in
                React 16.8.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are props in React?',
      answer: `<ul>
              <li>
                Props (short for properties) are read-only inputs passed from parent to child
                components.
              </li>
              <li>
                They enable component reusability and dynamic rendering by allowing data to flow
                down the component tree.
              </li>
              <li>
                Props are immutable within the receiving component and should not be modified
                directly.
              </li>
              <li>They can be of any data type: string, number, object, function, etc.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is state in React?',
      answer: `<ul>
              <li>
                State is a built-in object that stores dynamic data and determines a component's
                behavior and rendering.
              </li>
              <li>
                State is local to the component and can be updated using
                <code>setState</code>
                (class) or
                <code>useState</code>
                (function).
              </li>
              <li>When state changes, React re-renders the component to reflect the new data.</li>
              <li>
                State should be kept as minimal as possible and only include data that affects
                rendering.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Difference between state and props?',
      answer: `<ul>
              <li>
                State is managed within the component and can be changed; props are passed from
                parent and are read-only.
              </li>
              <li>
                State is used for data that changes over time or in response to user actions; props
                are for passing data and event handlers down the tree.
              </li>
              <li>
                State changes trigger re-renders; props changes also trigger re-renders in child
                components.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain React component lifecycle methods?',
      answer: `<ul>
              <li>
                Lifecycle methods are special methods in class components that run at specific
                points in a component's life (mounting, updating, unmounting).
              </li>
              <li>
                Examples include
                <code>componentDidMount</code>
                ,
                <code>componentDidUpdate</code>
                , and
                <code>componentWillUnmount</code>
                .
              </li>
              <li>They are used for tasks like data fetching, subscriptions, and cleanup.</li>
              <li>
                Functional components use hooks (like
                <code>useEffect</code>
                ) to achieve similar behavior.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are lifecycle methods in class components?',
      answer: `<ul>
              <li>
                <code>constructor</code>
                : Initializes state and binds methods.
              </li>
              <li>
                <code>render</code>
                : Returns JSX to render UI.
              </li>
              <li>
                <code>componentDidMount</code>
                : Runs after the component is mounted to the DOM.
              </li>
              <li>
                <code>shouldComponentUpdate</code>
                : Determines if a re-render is needed.
              </li>
              <li>
                <code>componentDidUpdate</code>
                : Runs after updates are flushed to the DOM.
              </li>
              <li>
                <code>componentWillUnmount</code>
                : Cleanup before the component is removed.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are Hooks in functional components?',
      answer: `<ul>
              <li>
                Hooks are special functions that let you use state and other React features in
                functional components.
              </li>
              <li>
                Common hooks include
                <code>useState</code>
                (state),
                <code>useEffect</code>
                (side effects),
                <code>useContext</code>
                (context),
                <code>useRef</code>
                (refs),
                <code>useMemo</code>
                , and
                <code>useCallback</code>
                .
              </li>
              <li>Hooks enable code reuse and cleaner, more modular components.</li>
              <li>They must be called at the top level of a function component or custom hook.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain useEffect Hook?',
      answer: `<ul>
              <li>
                <code>useEffect</code>
                lets you perform side effects in function components (e.g., data fetching,
                subscriptions, DOM updates).
              </li>
              <li>
                It runs after every render by default, but you can control when it runs by
                specifying dependencies.
              </li>
              <li>
                Returning a function from
                <code>useEffect</code>
                allows you to clean up resources (like unsubscribing from events).
              </li>
              <li>It can replace multiple lifecycle methods from class components.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Difference between componentDidMount and useEffect()?',
      answer: `<ul>
              <li>
                <code>componentDidMount</code>
                is a class component lifecycle method that runs once after the component mounts.
              </li>
              <li>
                <code>useEffect</code>
                with an empty dependency array (
                <code>[]</code>
                ) mimics
                <code>componentDidMount</code>
                in function components.
              </li>
              <li>
                <code>useEffect</code>
                can also run on updates or unmount, depending on dependencies and cleanup function.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is shouldComponentUpdate?',
      answer: `<ul>
              <li>
                A lifecycle method in class components that determines whether a component should
                re-render after state or props change.
              </li>
              <li>
                Returns
                <code>true</code>
                (default) to allow re-render, or
                <code>false</code>
                to prevent it.
              </li>
              <li>Used for performance optimization to avoid unnecessary renders.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is Redux?',
      answer: `<ul>
              <li>
                Redux is a predictable state container for JavaScript apps, often used with React
                for global state management.
              </li>
              <li>
                It uses a single immutable store, actions to describe changes, and reducers to
                handle state updates.
              </li>
              <li>
                Redux enables time-travel debugging, middleware integration, and centralized state
                management.
              </li>
              <li>It encourages unidirectional data flow and strict separation of concerns.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain React Context API?',
      answer: `<ul>
              <li>
                The Context API is a built-in React feature for sharing data across the component
                tree without passing props manually at every level.
              </li>
              <li>It is useful for global data like themes, authentication, or user settings.</li>
              <li>
                Context is created with
                <code>React.createContext</code>
                and accessed with
                <code>useContext</code>
                or
                <code>Context.Consumer</code>
                .
              </li>
              <li>Overuse can lead to unnecessary re-renders; use for truly global data.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Difference between Redux and Context API?',
      answer: `<ul>
              <li>
                Redux is a third-party library with a single store, middleware, and dev tools;
                Context API is built into React and simpler to use.
              </li>
              <li>
                Redux is better for large-scale apps with complex state logic; Context is ideal for
                small to medium apps or simple global data.
              </li>
              <li>
                Redux offers more control over state updates and debugging; Context is more
                lightweight but can cause performance issues if overused.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you manage state in React?',
      answer: `<ul>
              <li>
                Use
                <code>useState</code>
                for local component state.
              </li>
              <li>
                Use
                <code>useReducer</code>
                for complex state logic or when state depends on previous values.
              </li>
              <li>Use Context API or Redux for global state shared across components.</li>
              <li>
                Other libraries like MobX, Recoil, or Zustand can also be used for state management.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Controlled vs uncontrolled components?',
      answer: `<ul>
              <li>
                Controlled components have their form data managed by React state; input value is
                set via state and updated with
                <code>onChange</code>
                handlers.
              </li>
              <li>
                Uncontrolled components store their own state in the DOM; React accesses values
                using refs.
              </li>
              <li>
                Controlled components are preferred for validation and dynamic forms; uncontrolled
                are simpler for basic use cases.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is React.memo?',
      answer: `<ul>
              <li>
                <code>React.memo</code>
                is a higher-order component that memoizes functional components, preventing
                unnecessary re-renders if props haven't changed.
              </li>
              <li>
                It is useful for optimizing performance in components that render frequently with
                the same props.
              </li>
              <li>Works only for function components and shallowly compares props by default.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain useMemo and useCallback?',
      answer: `<ul>
              <li>
                <code>useMemo</code>
                memoizes the result of a function, recomputing only when dependencies change; used
                for expensive calculations.
              </li>
              <li>
                <code>useCallback</code>
                memoizes a function reference, preventing unnecessary re-creations on re-render;
                useful for passing stable callbacks to child components.
              </li>
              <li>Both hooks help optimize performance by avoiding unnecessary work.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'How to optimize React performance?',
      answer: `<ul>
              <li>
                Use memoization techniques (
                <code>React.memo</code>
                ,
                <code>useMemo</code>
                ,
                <code>useCallback</code>
                ).
              </li>
              <li>
                Split code with lazy loading (
                <code>React.lazy</code>
                ,
                <code>Suspense</code>
                ).
              </li>
              <li>
                Virtualize long lists with libraries like
                <code>react-window</code>
                or
                <code>react-virtualized</code>
                .
              </li>
              <li>Avoid unnecessary state and prop changes; keep state local where possible.</li>
              <li>Use production builds for deployment.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is code splitting?',
      answer: `<ul>
              <li>
                Code splitting is a technique to break up large JavaScript bundles into smaller
                chunks loaded on demand.
              </li>
              <li>
                It improves initial load time and performance by loading only the code needed for
                the current view.
              </li>
              <li>
                React supports code splitting with
                <code>React.lazy</code>
                and
                <code>Suspense</code>
                , as well as dynamic
                <code>import()</code>
                statements.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain lazy loading in React?',
      answer: `<ul>
              <li>
                Lazy loading is the practice of loading components or resources only when they are
                needed.
              </li>
              <li>
                In React,
                <code>React.lazy</code>
                and
                <code>Suspense</code>
                are used to load components dynamically.
              </li>
              <li>
                Improves performance by reducing the initial bundle size and speeding up page loads.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are Higher-Order Components (HOC)?',
      answer: `<ul>
              <li>
                HOCs are functions that take a component and return a new component with enhanced
                behavior or additional props.
              </li>
              <li>
                They are used for code reuse, logic abstraction, and cross-cutting concerns (e.g.,
                authentication, logging).
              </li>
              <li>
                Common examples include
                <code>withRouter</code>
                ,
                <code>connect</code>
                (Redux), and custom HOCs.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain render props pattern?',
      answer: `<ul>
              <li>
                Render props is a pattern where a component receives a function as a prop and calls
                it to determine what to render.
              </li>
              <li>
                It enables sharing code and logic between components without HOCs or inheritance.
              </li>
              <li>Commonly used for reusable logic, such as data fetching or mouse tracking.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is prop drilling?',
      answer: `<ul>
              <li>
                Prop drilling is the process of passing data through multiple nested components via
                props, even if intermediate components don't use the data.
              </li>
              <li>
                It can make code harder to maintain and understand, especially in large component
                trees.
              </li>
              <li>
                Context API or state management libraries can help avoid excessive prop drilling.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you handle forms in React?',
      answer: `<ul>
              <li>
                Use controlled components, where form input values are managed by React state.
              </li>
              <li>
                Handle input changes with
                <code>onChange</code>
                handlers and update state accordingly.
              </li>
              <li>
                Use validation libraries (e.g., Formik, Yup, React Hook Form) for complex forms and
                validation.
              </li>
              <li>
                Uncontrolled components can be used for simple forms, using refs to access values.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are React Fragments?',
      answer: `<ul>
              <li>
                Fragments let you group multiple elements without adding extra nodes to the DOM.
              </li>
              <li>
                Use
                <code><>...</></code>
                or
                <code><React.Fragment>...</React.Fragment></code>
                in JSX.
              </li>
              <li>Improves performance and keeps the DOM tree clean.</li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is React Router?',
      answer: `<ul>
              <li>
                React Router is a popular library for handling routing and navigation in React
                applications.
              </li>
              <li>It enables dynamic rendering of components based on the URL path.</li>
              <li>
                Supports nested routes, route parameters, redirects, and programmatic navigation.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you implement routing in React?',
      answer: `<ul>
              <li>
                Wrap your app with
                <code><BrowserRouter></code>
                to enable routing.
              </li>
              <li>
                Define routes using
                <code><Routes></code>
                and
                <code><Route></code>
                components.
              </li>
              <li>
                Use
                <code>Link</code>
                or
                <code>NavLink</code>
                for navigation without page reloads.
              </li>
              <li>
                Use
                <code>useNavigate</code>
                or
                <code>history</code>
                for programmatic navigation.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain different types of routing?',
      answer: `<ul>
              <li>
                <strong>BrowserRouter:</strong>
                Uses HTML5 history API for clean URLs.
              </li>
              <li>
                <strong>HashRouter:</strong>
                Uses hash portion of the URL (e.g.,
                <code>#/home</code>
                ), useful for static sites.
              </li>
              <li>
                <strong>MemoryRouter:</strong>
                Keeps the history of your "URL" in memory (no address bar), useful for testing or
                non-browser environments.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'Compare Redux, MobX, and Recoil?',
      answer: `<ul>
              <li>
                <strong>Redux:</strong>
                Centralized, strict, predictable state management with middleware and dev tools.
              </li>
              <li>
                <strong>MobX:</strong>
                Uses observables and reactions for more flexible, less boilerplate state management.
              </li>
              <li>
                <strong>Recoil:</strong>
                React-specific, atomic state management with fine-grained updates and easy
                integration with hooks.
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is Zustand?',
      answer: `<ul>
              <li>Zustand is a lightweight state management library for React using hooks.</li>
              <li>
                It provides a simple API, minimal boilerplate, and supports both local and global
                state.
              </li>
              <li>State is stored outside the component tree, reducing unnecessary re-renders.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain Redux Toolkit?',
      answer: `<ul>
              <li>Redux Toolkit is the official, recommended way to write Redux logic.</li>
              <li>
                It simplifies store setup, reducer logic, and async actions with built-in utilities
                like
                <code>createSlice</code>
                and
                <code>createAsyncThunk</code>
                .
              </li>
              <li>Reduces boilerplate and encourages best practices for Redux development.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Custom hooks implementation?',
      answer: `<ul>
              <li>
                Custom hooks are functions that start with
                <code>use</code>
                and encapsulate reusable logic using React hooks.
              </li>
              <li>
                They allow you to share stateful logic between components without HOCs or render
                props.
              </li>
              <li>
                Custom hooks can use other hooks and return any value (state, functions, objects).
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain useState in detail?',
      answer: `<ul>
              <li>
                <code>useState</code>
                is a hook for adding local state to functional components.
              </li>
              <li>It returns a state variable and a setter function to update the value.</li>
              <li>Updating state with the setter triggers a re-render of the component.</li>
              <li>
                Initial state can be a value or a function returning a value (for lazy
                initialization).
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Rules of Hooks?',
      answer: `<ul>
              <li>Only call hooks at the top level of your function component or custom hook.</li>
              <li>
                Only call hooks from React function components or custom hooks, not from regular
                functions or class components.
              </li>
              <li>Hooks must be called in the same order on every render.</li>
              <li>Do not call hooks inside loops, conditions, or nested functions.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'useReducer vs useState?',
      answer: `<ul>
              <li>
                <code>useState</code>
                is best for simple, independent state variables.
              </li>
              <li>
                <code>useReducer</code>
                is preferred for complex state logic, multiple sub-values, or when the next state
                depends on the previous state.
              </li>
              <li>
                <code>useReducer</code>
                is similar to Redux reducer pattern and is useful for managing forms or complex data
                structures.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you create custom Hooks?',
      answer: `<ul>
              <li>
                Write a function that starts with
                <code>use</code>
                and uses built-in hooks inside.
              </li>
              <li>Return state, functions, or any value needed by the consuming component.</li>
              <li>Custom hooks help extract and reuse logic across multiple components.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain error boundaries',
      answer: `<ul>
              <li>
                Error boundaries are special React components that catch JavaScript errors in their
                child component tree during rendering, lifecycle methods, or constructors.
              </li>
              <li>
                They prevent the entire application from crashing and display a fallback UI instead.
              </li>
              <li>
                Implemented using
                <code>componentDidCatch</code>
                and
                <code>getDerivedStateFromError</code>
                in class components.
              </li>
              <li>
                Functional components can use third-party libraries like
                <code>react-error-boundary</code>
                for similar behavior.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you handle side effects?',
      answer: `<ul>
              <li>
                Side effects such as fetching data, setting up subscriptions, or manually
                interacting with the DOM are handled using the
                <code>useEffect</code>
                hook.
              </li>
              <li>
                You can specify dependencies to control when the effect runs, and return a cleanup
                function to avoid memory leaks.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Implement a simple counter using React hooks',
      answer: `Example:
            <pre ngnonbindable=""><code>
const [count, setCount] = useState(0);

<button onClick={{ '{{' }} () => setCount(count + 1) {{ '}}' }}>Increment</button>
<p>Count: {{ '{{' }}count{{ '}}' }}</p>
  </code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are React best practices?',
      answer: `<ul>
              <li>Keep components small and reusable.</li>
              <li>Use hooks properly and follow the rules of hooks.</li>
              <li>
                Separate concerns: UI, logic, and state management should be in different components
                or files.
              </li>
              <li>Validate props using PropTypes or TypeScript.</li>
              <li>Maintain clean and organized directory structures.</li>
              <li>Use memoization to prevent unnecessary re-renders.</li>
              <li>Avoid direct DOM manipulation; use React refs or state.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you structure a React project?',
      answer: `Example structure:
            <pre ngnonbindable=""><code>
src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── App.js
└── index.js
  </code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain component composition',
      answer: `<ul>
              <li>
                Component composition is a pattern of building UI using smaller, reusable
                components.
              </li>
              <li>
                It uses props and
                <code>children</code>
                to combine components, rather than relying on inheritance.
              </li>
              <li>Promotes reusability and separation of concerns.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you handle authentication in React?',
      answer: `<ul>
              <li>Authentication is typically handled using JWT tokens and protected routes.</li>
              <li>
                Use
                <code>Context API</code>
                or
                <code>Redux</code>
                for storing user state.
              </li>
              <li>
                Wrap routes in
                <code>PrivateRoute</code>
                components to protect them.
              </li>
              <li>Use libraries like Firebase or Auth0 for easier integration.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you test React components?',
      answer: `<ul>
              <li>
                Use Jest for unit testing and React Testing Library (RTL) for testing UI based on
                user behavior.
              </li>
              <li>
                Test rendering, events, API calls, and conditional rendering using RTL queries like
                <code>getByText</code>
                or
                <code>getByRole</code>
                .
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is Jest?',
      answer: `<ul>
              <li>Jest is a JavaScript testing framework maintained by Meta.</li>
              <li>It supports assertions, mocking, snapshot testing, and test coverage.</li>
              <li>It is commonly used in React projects for unit and integration testing.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain React Testing Library',
      answer: `<ul>
              <li>
                React Testing Library allows you to test components from the user’s perspective.
              </li>
              <li>
                It encourages better practices by avoiding testing implementation details and
                focusing on behavior.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you do unit and integration testing?',
      answer: `<ul>
              <li>Unit tests check individual components or functions.</li>
              <li>Integration tests check how multiple components or modules work together.</li>
              <li>Use Jest for unit tests and RTL to simulate and test interactions.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you use TypeScript with React?',
      answer: `<ul>
              <li>
                Use
                <code>.tsx</code>
                files for React components,
                <code>.ts</code>
                for other TypeScript files.
              </li>
              <li>
                Define props and state using
                <code>interface</code>
                or
                <code>type</code>
                .
              </li>
              <li>
                Install types with
                <code>@types/react</code>
                for type definitions.
              </li>
              <li>TypeScript enhances type safety and developer experience in React projects.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain prop types',
      answer: `<ul>
              <li>PropTypes allow you to validate props passed to a component.</li>
              <li>
                Example:
                <pre ngnonbindable=""><code>
MyComponent.propTypes = {{
  name: PropTypes.string isRequired
}};
                </code></pre>
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Difference between interface and type in TypeScript',
      answer: `<ul>
              <li>
                <code>interface</code>
                is best for declaring object shapes and can be extended.
              </li>
              <li>
                <code>type</code>
                is more flexible, supporting primitives, unions, intersections, and aliases.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Server-side rendering in React',
      answer: `<ul>
              <li>
                Server-side rendering (SSR) pre-renders the HTML on the server before sending it to
                the client.
              </li>
              <li>This improves SEO and performance for initial page loads.</li>
              <li>Tools like Next.js make SSR seamless and easy to implement.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is Next.js?',
      answer: `<ul>
              <li>Next.js is a React framework for building production-ready applications.</li>
              <li>
                It supports SSR, static generation, dynamic routing, TypeScript, and API routes out
                of the box.
              </li>
              <li>Next.js simplifies routing and data fetching for React applications.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain React Suspense',
      answer: `<ul>
              <li>
                Suspense lets you show fallback content like loaders while components are being
                lazily loaded.
              </li>
              <li>
                It is used with
                <code>React.lazy</code>
                or for data fetching with React 18.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Concurrent mode in React',
      answer: `<ul>
              <li>
                Concurrent Mode is an experimental feature that allows React to pause rendering and
                prioritize updates.
              </li>
              <li>It improves responsiveness but is not fully stable yet.</li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is React Native?',
      answer: `<ul>
              <li>React Native is a framework for building native mobile apps using React.</li>
              <li>
                It uses native components instead of HTML and CSS, enabling real native performance
                with a JavaScript codebase.
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'Difference between React and React Native',
      answer: `<ul>
              <li>React is for web development using HTML and CSS.</li>
              <li>
                React Native is for building cross-platform mobile apps using native components like
                <code>View</code>
                and
                <code>Text</code>
                .
              </li>
            </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you build cross-platform applications?',
      answer: `<ul>
              <li>
                Use React Native for mobile, React (Electron) for desktop, and share business logic
                in a mono-repo or shared library.
              </li>
              <li>Maintain consistent UI/UX using shared design tokens or component libraries.</li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Implement a todo list application',
      answer: `<ul>
              <li>
                Use
                <code>useState</code>
                to manage todos.
              </li>
              <li>
                Add new items to the array, display using
                <code>map</code>
                , and provide buttons to delete or toggle completion status.
              </li>
              <li>
                Optionally use
                <code>localStorage</code>
                or an API for persistence.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Create a shopping cart using React',
      answer: `<ul>
              <li>
                Use
                <code>useReducer</code>
                or Redux for state management.
              </li>
              <li>Handle actions like add, remove, and update quantity.</li>
              <li>Calculate total price, and persist state across sessions.</li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Build a real-time chat application',
      answer: `<ul>
              <li>Use WebSockets or services like Firebase.</li>
              <li>Maintain chat messages in state.</li>
              <li>Listen for incoming messages and update the UI accordingly.</li>
              <li>Add typing indicators and handle reconnections.</li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'How would you optimize a slow React application?',
      answer: `<ul>
              <li>
                Use
                <code>React.memo</code>
                ,
                <code>useMemo</code>
                ,
                <code>useCallback</code>
                , and avoid unnecessary props/state changes.
              </li>
              <li>
                Split code with lazy loading, and reduce deep prop drilling with Context or Redux.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Explain memoization techniques',
      answer: `<ul>
              <li>Memoization avoids unnecessary calculations.</li>
              <li>
                Use
                <code>useMemo</code>
                for values and
                <code>useCallback</code>
                for functions that depend on stable inputs to avoid re-creation across renders.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you prevent unnecessary re-renders?',
      answer: `<ul>
              <li>
                Use
                <code>React.memo</code>
                , avoid inline functions and objects, use
                <code>useCallback</code>
                and
                <code>useMemo</code>
                , and ensure child components don’t re-render unless their props change.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'How do you prevent XSS in React?',
      answer: `<ul>
              <li>
                Never render untrusted HTML with
                <code>dangerouslySetInnerHTML</code>
                .
              </li>
              <li>React escapes content by default.</li>
              <li>Sanitize user input using libraries like DOMPurify.</li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Handle security in React applications',
      answer: `<ul>
              <li>
                Always validate user input, secure API endpoints, use HTTPS, sanitize content,
                manage tokens securely, and use tools like Helmet for setting security headers.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Best practices for secure React development',
      answer: `<ul>
              <li>
                Use environment variables for secrets, escape dynamic values, enable CSP headers,
                update dependencies regularly, and avoid exposing sensitive information in the
                client bundle.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Implement a search functionality',
      answer: `<ul>
              <li>
                Store search input in
                <code>useState</code>
                , filter the dataset using
                <code>Array.filter</code>
                , and optionally debounce using
                <code>useEffect</code>
                +
                <code>setTimeout</code>
                for performance.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Create a dynamic form',
      answer: `<ul>
              <li>Store form schema in a config or JSON file.</li>
              <li>
                Render fields dynamically using
                <code>map</code>
                .
              </li>
              <li>
                Use
                <code>useState</code>
                to store field values and validate on change or submit.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'Build a pagination component',
      answer: `<ul>
              <li>
                Store current page in state, display sliced data based on page size, and render
                navigation buttons.
              </li>
              <li>
                Use libraries like
                <code>react-paginate</code>
                for advanced features.
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is react and what are the advantages of the react?',
      answer: `<ol>
                <li>React is a JavaScript library for building user interfaces.</li>
                <li>React is used to build single-page applications.</li>
                <li>
                  React is Component-Based library. Implement once and reuse the component entire
                  library.
                </li>
                <li>
                  React works based on the virtual DOM. React maintains the state in virtual DOM and
                  compares with the previous Virtual DOM state. It will apply the differences to the
                  real DOM.
                </li>
                <li>React allows us to create reusable UI components.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is reconciliation in react?',
      answer: `<ol>
                <li>
                  A virtual DOM is a lightweight JavaScript object which originally is just a copy
                  of the real DOM. It is a node tree that lists the elements, their attributes and
                  content as Objects and their properties.
                </li>
                <li>
                  React works based on the virtual DOM. React maintains the state in virtual DOM and
                  compares with the previous Virtual DOM state. It will apply the differences to the
                  real DOM. This process is called reconciliation.
                </li>
                <li>
                  The mechanism to diff one tree with another to determine which parts need to be
                  changed and then update the original DOM with it is called Reconciliation .
                </li>
                <li>
                  ReactJS uses a new reconciliation engine called
                  <b>Fiber</b>
                  since version 16.0
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are SyntheticEvent in React native?',
      answer: `<ol>
                <li>
                  React has its own event handling system which is very similar to handling events
                  on DOM elements. The react event handling system is known as Synthetic Events. The
                  synthetic event is a cross-browser wrapper of the browser's native event
                </li>
                <li>
                  React synthetic events are very similar to native events, however, with synthetic
                  events, the same API interface is implemented across multiple browsers.
                </li>
                <li>
                  Handling events with react have some syntactic differences from handling events on
                  DOM. These are:
                  <br>
                  1. React events are named as camelCase instead of lowercase.
                  <br>
                  <div>
                    <code><button onclick="showMessage()"> Hello React </button</code>
                  </div>
                  2. With JSX, a function is passed as the event handler instead of a string. For
                  example:
                  <br>
                  <div>
                    <code>
                      <button onClick={showMessage}> Hello React </button>
                    </code>
                  </div>
                  3. In react, we cannot return false to prevent the default behavior. We must call
                  preventDefault event explicitly to prevent the default behavior. For example:
                  <div>
                    <code>
                      <a href="" onClick={(e) => {e.preventDefault()}}>
                      Hello React </a>
                    </code>
                  </div>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are react keys?',
      answer: `<ol>
                <li>
                  A “key” is a special string attribute you need to include when creating lists of
                  elements in React.
                </li>
                <li>
                  Keys are used in React to identify which items in the list are changed, updated,
                  or deleted.
                </li>
                <div>
                  <code>
                    const numbers = [ 1, 2, 3, 4, 5 ];
                    <br>
                    const updatedNums = numbers.map((number)=>{
                    <br>
                    return <li key={index}>{number} </li>;
                    <br>
                    });
                  </code>
                </div>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is bubbling/event bubbling in react?',
      answer: `<ol>
                <li>
                  What is bubbling in programming? Event bubbling is a type of DOM event propagation
                  where the event first triggers on the child element, and then propagated to the
                  parent of the target
                </li>
                <li>
                  Event will be propagated till it reaches the outermost DOM element or document
                  object
                </li>
                <li>
                  For an example an anchor inside button. If we handles the click action on button,
                  but use clicks on the anchor tag, first event raised at anchor tag(child level)
                  and propagates to parent button.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What is Axios interceptor?',
      answer: `<ol>
                <li>
                  Interceptors will be executed for each request before sending to the server.
                </li>
                <li>
                  Using interceptor, we can modify the server request like adding new headers.
                </li>
                <li>
                  The Interceptor can be useful for adding custom headers(
                  <b>X-Client-Key</b>
                  , or authentication JWT token) to the outgoing request, logging the incoming
                  response
                </li>
                <li>
                  Axios Interceptors is to add the Authorization Header/any token to every request.
                  In our project, we add auth-token header to each request.
                </li>
                <code>
                  import axios from 'axios' // Add a request interceptor
                  <br>
                  axios.interceptors.request.use(
                  <br>
                  config => {
                  <br>
                  const token = localStorageService.getAccessToken()
                  <br>
                  if (token) {
                  <br>
                  config.headers['Authorization'] = 'Bearer ' + token
                  <br>
                  } // config.headers['Content-Type'] = 'application/json';
                  <br>
                  return config
                  <br>
                  },
                  <br>
                  error => {
                  <br>
                  Promise.reject(error)
                  <br>
                  }
                  <br>
                  )
                </code>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    },
    {
      question: 'What are the difference between real DOM and virtual DOM?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Real DOM</th>
                    <th scope="col">Virtual DOM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DOM manipulation is slow and costly.</td>
                    <td>DOM manipulation is fast and efficient.</td>
                  </tr>
                  <tr>
                    <td>Updates the entire tree even if one element changes.</td>
                    <td>Updates only the changed node using diffing algorithm.</td>
                  </tr>
                  <tr>
                    <td>Directly updates the HTML in the browser.</td>
                    <td>Creates a virtual representation in memory, then syncs with real DOM.</td>
                  </tr>
                  <tr>
                    <td>Creates a new DOM if the element updates.</td>
                    <td>Updates only the necessary parts of the DOM.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'React'
      ]
    }
  ]
};
