// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.499Z

export const reactQuestions = {
  "questions": [
    {
      "question": "What is React?",
      "answer": "<ul>\n              <li>\n                React is a declarative, efficient, and flexible JavaScript library for building user\n                interfaces, especially single-page applications.\n              </li>\n              <li>\n                It allows developers to create large web applications that can update and render\n                efficiently in response to data changes.\n              </li>\n              <li>\n                React uses a component-based architecture, enabling code reuse and modular\n                development.\n              </li>\n              <li>It leverages a virtual DOM to optimize UI rendering and improve performance.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces, especially single-page applications.",
        "It allows developers to create large web applications that can update and render efficiently in response to data changes.",
        "React uses a component-based architecture, enabling code reuse and modular development."
      ]
    },
    {
      "question": "What are the key features of React?",
      "answer": "<ul>\n              <li>\n                Component-based architecture: UI is built using reusable, self-contained components.\n              </li>\n              <li>\n                Virtual DOM: React uses a virtual DOM to efficiently update and render only the\n                changed parts of the UI.\n              </li>\n              <li>\n                Unidirectional data flow: Data flows in a single direction, making state management\n                predictable.\n              </li>\n              <li>\n                JSX: JavaScript XML syntax allows mixing HTML with JavaScript logic for easier UI\n                development.\n              </li>\n              <li>Support for hooks and functional programming patterns.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Component-based architecture: UI is built using reusable, self-contained components.",
        "Virtual DOM: React uses a virtual DOM to efficiently update and render only the changed parts of the UI.",
        "Unidirectional data flow: Data flows in a single direction, making state management predictable."
      ]
    },
    {
      "question": "What is JSX?",
      "answer": "<ul>\n              <li>\n                JSX stands for JavaScript XML, a syntax extension for JavaScript used in React to\n                describe UI structure.\n              </li>\n              <li>\n                It allows developers to write HTML-like code within JavaScript, making component\n                structure more readable.\n              </li>\n              <li>\n                JSX is compiled to React.createElement calls, which create virtual DOM elements.\n              </li>\n              <li>\n                It supports embedding JavaScript expressions inside curly braces\n                <code>{...}</code>\n                .\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "JSX stands for JavaScript XML, a syntax extension for JavaScript used in React to describe UI structure.",
        "It allows developers to write HTML-like code within JavaScript, making component structure more readable.",
        "JSX is compiled to React.createElement calls, which create virtual DOM elements."
      ]
    },
    {
      "question": "Explain the difference between class and functional components?",
      "answer": "<ul>\n              <li>\n                Class components are ES6 classes that extend\n                <code>React.Component</code>\n                and can use lifecycle methods and state.\n              </li>\n              <li>\n                Functional components are plain JavaScript functions that return JSX; they use hooks\n                (like\n                <code>useState</code>\n                ,\n                <code>useEffect</code>\n                ) for state and side effects.\n              </li>\n              <li>\n                Functional components are generally simpler, easier to test, and preferred in modern\n                React development.\n              </li>\n              <li>\n                Class components are less common in new code since the introduction of hooks in\n                React 16.8.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Class components are ES6 classes that extend React.Component and can use lifecycle methods and state.",
        "Functional components are plain JavaScript functions that return JSX; they use hooks (like useState , useEffect ) for state and side effects.",
        "Functional components are generally simpler, easier to test, and preferred in modern React development."
      ]
    },
    {
      "question": "What are props in React?",
      "answer": "<ul>\n              <li>\n                Props (short for properties) are read-only inputs passed from parent to child\n                components.\n              </li>\n              <li>\n                They enable component reusability and dynamic rendering by allowing data to flow\n                down the component tree.\n              </li>\n              <li>\n                Props are immutable within the receiving component and should not be modified\n                directly.\n              </li>\n              <li>They can be of any data type: string, number, object, function, etc.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Props (short for properties) are read-only inputs passed from parent to child components.",
        "They enable component reusability and dynamic rendering by allowing data to flow down the component tree.",
        "Props are immutable within the receiving component and should not be modified directly."
      ]
    },
    {
      "question": "What is state in React?",
      "answer": "<ul>\n              <li>\n                State is a built-in object that stores dynamic data and determines a component's\n                behavior and rendering.\n              </li>\n              <li>\n                State is local to the component and can be updated using\n                <code>setState</code>\n                (class) or\n                <code>useState</code>\n                (function).\n              </li>\n              <li>When state changes, React re-renders the component to reflect the new data.</li>\n              <li>\n                State should be kept as minimal as possible and only include data that affects\n                rendering.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "State is a built-in object that stores dynamic data and determines a component's behavior and rendering.",
        "State is local to the component and can be updated using setState (class) or useState (function).",
        "When state changes, React re-renders the component to reflect the new data."
      ]
    },
    {
      "question": "Difference between state and props?",
      "answer": "<ul>\n              <li>\n                State is managed within the component and can be changed; props are passed from\n                parent and are read-only.\n              </li>\n              <li>\n                State is used for data that changes over time or in response to user actions; props\n                are for passing data and event handlers down the tree.\n              </li>\n              <li>\n                State changes trigger re-renders; props changes also trigger re-renders in child\n                components.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "State is managed within the component and can be changed; props are passed from parent and are read-only.",
        "State is used for data that changes over time or in response to user actions; props are for passing data and event handlers down the tree.",
        "State changes trigger re-renders; props changes also trigger re-renders in child components."
      ]
    },
    {
      "question": "Explain React component lifecycle methods?",
      "answer": "<ul>\n              <li>\n                Lifecycle methods are special methods in class components that run at specific\n                points in a component's life (mounting, updating, unmounting).\n              </li>\n              <li>\n                Examples include\n                <code>componentDidMount</code>\n                ,\n                <code>componentDidUpdate</code>\n                , and\n                <code>componentWillUnmount</code>\n                .\n              </li>\n              <li>They are used for tasks like data fetching, subscriptions, and cleanup.</li>\n              <li>\n                Functional components use hooks (like\n                <code>useEffect</code>\n                ) to achieve similar behavior.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Lifecycle methods are special methods in class components that run at specific points in a component's life (mounting, updating, unmounting).",
        "Examples include componentDidMount , componentDidUpdate , and componentWillUnmount .",
        "They are used for tasks like data fetching, subscriptions, and cleanup."
      ]
    },
    {
      "question": "What are lifecycle methods in class components?",
      "answer": "<ul>\n              <li>\n                <code>constructor</code>\n                : Initializes state and binds methods.\n              </li>\n              <li>\n                <code>render</code>\n                : Returns JSX to render UI.\n              </li>\n              <li>\n                <code>componentDidMount</code>\n                : Runs after the component is mounted to the DOM.\n              </li>\n              <li>\n                <code>shouldComponentUpdate</code>\n                : Determines if a re-render is needed.\n              </li>\n              <li>\n                <code>componentDidUpdate</code>\n                : Runs after updates are flushed to the DOM.\n              </li>\n              <li>\n                <code>componentWillUnmount</code>\n                : Cleanup before the component is removed.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "constructor : Initializes state and binds methods.",
        "render : Returns JSX to render UI.",
        "componentDidMount : Runs after the component is mounted to the DOM."
      ]
    },
    {
      "question": "What are Hooks in functional components?",
      "answer": "<ul>\n              <li>\n                Hooks are special functions that let you use state and other React features in\n                functional components.\n              </li>\n              <li>\n                Common hooks include\n                <code>useState</code>\n                (state),\n                <code>useEffect</code>\n                (side effects),\n                <code>useContext</code>\n                (context),\n                <code>useRef</code>\n                (refs),\n                <code>useMemo</code>\n                , and\n                <code>useCallback</code>\n                .\n              </li>\n              <li>Hooks enable code reuse and cleaner, more modular components.</li>\n              <li>They must be called at the top level of a function component or custom hook.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Hooks are special functions that let you use state and other React features in functional components.",
        "Common hooks include useState (state), useEffect (side effects), useContext (context), useRef (refs), useMemo , and useCallback .",
        "Hooks enable code reuse and cleaner, more modular components."
      ]
    },
    {
      "question": "Explain useEffect Hook?",
      "answer": "<ul>\n              <li>\n                <code>useEffect</code>\n                lets you perform side effects in function components (e.g., data fetching,\n                subscriptions, DOM updates).\n              </li>\n              <li>\n                It runs after every render by default, but you can control when it runs by\n                specifying dependencies.\n              </li>\n              <li>\n                Returning a function from\n                <code>useEffect</code>\n                allows you to clean up resources (like unsubscribing from events).\n              </li>\n              <li>It can replace multiple lifecycle methods from class components.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "useEffect lets you perform side effects in function components (e.g., data fetching, subscriptions, DOM updates).",
        "It runs after every render by default, but you can control when it runs by specifying dependencies.",
        "Returning a function from useEffect allows you to clean up resources (like unsubscribing from events)."
      ]
    },
    {
      "question": "Difference between componentDidMount and useEffect()?",
      "answer": "<ul>\n              <li>\n                <code>componentDidMount</code>\n                is a class component lifecycle method that runs once after the component mounts.\n              </li>\n              <li>\n                <code>useEffect</code>\n                with an empty dependency array (\n                <code>[]</code>\n                ) mimics\n                <code>componentDidMount</code>\n                in function components.\n              </li>\n              <li>\n                <code>useEffect</code>\n                can also run on updates or unmount, depending on dependencies and cleanup function.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "componentDidMount is a class component lifecycle method that runs once after the component mounts.",
        "useEffect with an empty dependency array ( [] ) mimics componentDidMount in function components.",
        "useEffect can also run on updates or unmount, depending on dependencies and cleanup function."
      ]
    },
    {
      "question": "What is shouldComponentUpdate?",
      "answer": "<ul>\n              <li>\n                A lifecycle method in class components that determines whether a component should\n                re-render after state or props change.\n              </li>\n              <li>\n                Returns\n                <code>true</code>\n                (default) to allow re-render, or\n                <code>false</code>\n                to prevent it.\n              </li>\n              <li>Used for performance optimization to avoid unnecessary renders.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "A lifecycle method in class components that determines whether a component should re-render after state or props change.",
        "Returns true (default) to allow re-render, or false to prevent it.",
        "Used for performance optimization to avoid unnecessary renders."
      ]
    },
    {
      "question": "What is Redux?",
      "answer": "<ul>\n              <li>\n                Redux is a predictable state container for JavaScript apps, often used with React\n                for global state management.\n              </li>\n              <li>\n                It uses a single immutable store, actions to describe changes, and reducers to\n                handle state updates.\n              </li>\n              <li>\n                Redux enables time-travel debugging, middleware integration, and centralized state\n                management.\n              </li>\n              <li>It encourages unidirectional data flow and strict separation of concerns.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Redux is a predictable state container for JavaScript apps, often used with React for global state management.",
        "It uses a single immutable store, actions to describe changes, and reducers to handle state updates.",
        "Redux enables time-travel debugging, middleware integration, and centralized state management."
      ]
    },
    {
      "question": "Explain React Context API?",
      "answer": "<ul>\n              <li>\n                The Context API is a built-in React feature for sharing data across the component\n                tree without passing props manually at every level.\n              </li>\n              <li>It is useful for global data like themes, authentication, or user settings.</li>\n              <li>\n                Context is created with\n                <code>React.createContext</code>\n                and accessed with\n                <code>useContext</code>\n                or\n                <code>Context.Consumer</code>\n                .\n              </li>\n              <li>Overuse can lead to unnecessary re-renders; use for truly global data.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "The Context API is a built-in React feature for sharing data across the component tree without passing props manually at every level.",
        "It is useful for global data like themes, authentication, or user settings.",
        "Context is created with React.createContext and accessed with useContext or Context.Consumer ."
      ]
    },
    {
      "question": "Difference between Redux and Context API?",
      "answer": "<ul>\n              <li>\n                Redux is a third-party library with a single store, middleware, and dev tools;\n                Context API is built into React and simpler to use.\n              </li>\n              <li>\n                Redux is better for large-scale apps with complex state logic; Context is ideal for\n                small to medium apps or simple global data.\n              </li>\n              <li>\n                Redux offers more control over state updates and debugging; Context is more\n                lightweight but can cause performance issues if overused.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Redux is a third-party library with a single store, middleware, and dev tools; Context API is built into React and simpler to use.",
        "Redux is better for large-scale apps with complex state logic; Context is ideal for small to medium apps or simple global data.",
        "Redux offers more control over state updates and debugging; Context is more lightweight but can cause performance issues if overused."
      ]
    },
    {
      "question": "How do you manage state in React?",
      "answer": "<ul>\n              <li>\n                Use\n                <code>useState</code>\n                for local component state.\n              </li>\n              <li>\n                Use\n                <code>useReducer</code>\n                for complex state logic or when state depends on previous values.\n              </li>\n              <li>Use Context API or Redux for global state shared across components.</li>\n              <li>\n                Other libraries like MobX, Recoil, or Zustand can also be used for state management.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use useState for local component state.",
        "Use useReducer for complex state logic or when state depends on previous values.",
        "Use Context API or Redux for global state shared across components."
      ]
    },
    {
      "question": "Controlled vs uncontrolled components?",
      "answer": "<ul>\n              <li>\n                Controlled components have their form data managed by React state; input value is\n                set via state and updated with\n                <code>onChange</code>\n                handlers.\n              </li>\n              <li>\n                Uncontrolled components store their own state in the DOM; React accesses values\n                using refs.\n              </li>\n              <li>\n                Controlled components are preferred for validation and dynamic forms; uncontrolled\n                are simpler for basic use cases.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Controlled components have their form data managed by React state; input value is set via state and updated with onChange handlers.",
        "Uncontrolled components store their own state in the DOM; React accesses values using refs.",
        "Controlled components are preferred for validation and dynamic forms; uncontrolled are simpler for basic use cases."
      ]
    },
    {
      "question": "What is React.memo?",
      "answer": "<ul>\n              <li>\n                <code>React.memo</code>\n                is a higher-order component that memoizes functional components, preventing\n                unnecessary re-renders if props haven't changed.\n              </li>\n              <li>\n                It is useful for optimizing performance in components that render frequently with\n                the same props.\n              </li>\n              <li>Works only for function components and shallowly compares props by default.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React.memo is a higher-order component that memoizes functional components, preventing unnecessary re-renders if props haven't changed.",
        "It is useful for optimizing performance in components that render frequently with the same props.",
        "Works only for function components and shallowly compares props by default."
      ]
    },
    {
      "question": "Explain useMemo and useCallback?",
      "answer": "<ul>\n              <li>\n                <code>useMemo</code>\n                memoizes the result of a function, recomputing only when dependencies change; used\n                for expensive calculations.\n              </li>\n              <li>\n                <code>useCallback</code>\n                memoizes a function reference, preventing unnecessary re-creations on re-render;\n                useful for passing stable callbacks to child components.\n              </li>\n              <li>Both hooks help optimize performance by avoiding unnecessary work.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "useMemo memoizes the result of a function, recomputing only when dependencies change; used for expensive calculations.",
        "useCallback memoizes a function reference, preventing unnecessary re-creations on re-render; useful for passing stable callbacks to child components.",
        "Both hooks help optimize performance by avoiding unnecessary work."
      ]
    },
    {
      "question": "How to optimize React performance?",
      "answer": "<ul>\n              <li>\n                Use memoization techniques (\n                <code>React.memo</code>\n                ,\n                <code>useMemo</code>\n                ,\n                <code>useCallback</code>\n                ).\n              </li>\n              <li>\n                Split code with lazy loading (\n                <code>React.lazy</code>\n                ,\n                <code>Suspense</code>\n                ).\n              </li>\n              <li>\n                Virtualize long lists with libraries like\n                <code>react-window</code>\n                or\n                <code>react-virtualized</code>\n                .\n              </li>\n              <li>Avoid unnecessary state and prop changes; keep state local where possible.</li>\n              <li>Use production builds for deployment.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use memoization techniques ( React.memo , useMemo , useCallback ).",
        "Split code with lazy loading ( React.lazy , Suspense ).",
        "Virtualize long lists with libraries like react-window or react-virtualized ."
      ]
    },
    {
      "question": "What is code splitting?",
      "answer": "<ul>\n              <li>\n                Code splitting is a technique to break up large JavaScript bundles into smaller\n                chunks loaded on demand.\n              </li>\n              <li>\n                It improves initial load time and performance by loading only the code needed for\n                the current view.\n              </li>\n              <li>\n                React supports code splitting with\n                <code>React.lazy</code>\n                and\n                <code>Suspense</code>\n                , as well as dynamic\n                <code>import()</code>\n                statements.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Code splitting is a technique to break up large JavaScript bundles into smaller chunks loaded on demand.",
        "It improves initial load time and performance by loading only the code needed for the current view.",
        "React supports code splitting with React.lazy and Suspense , as well as dynamic import() statements."
      ]
    },
    {
      "question": "Explain lazy loading in React?",
      "answer": "<ul>\n              <li>\n                Lazy loading is the practice of loading components or resources only when they are\n                needed.\n              </li>\n              <li>\n                In React,\n                <code>React.lazy</code>\n                and\n                <code>Suspense</code>\n                are used to load components dynamically.\n              </li>\n              <li>\n                Improves performance by reducing the initial bundle size and speeding up page loads.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Lazy loading is the practice of loading components or resources only when they are needed.",
        "In React, React.lazy and Suspense are used to load components dynamically.",
        "Improves performance by reducing the initial bundle size and speeding up page loads."
      ]
    },
    {
      "question": "What are Higher-Order Components (HOC)?",
      "answer": "<ul>\n              <li>\n                HOCs are functions that take a component and return a new component with enhanced\n                behavior or additional props.\n              </li>\n              <li>\n                They are used for code reuse, logic abstraction, and cross-cutting concerns (e.g.,\n                authentication, logging).\n              </li>\n              <li>\n                Common examples include\n                <code>withRouter</code>\n                ,\n                <code>connect</code>\n                (Redux), and custom HOCs.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "HOCs are functions that take a component and return a new component with enhanced behavior or additional props.",
        "They are used for code reuse, logic abstraction, and cross-cutting concerns (e.g., authentication, logging).",
        "Common examples include withRouter , connect (Redux), and custom HOCs."
      ]
    },
    {
      "question": "Explain render props pattern?",
      "answer": "<ul>\n              <li>\n                Render props is a pattern where a component receives a function as a prop and calls\n                it to determine what to render.\n              </li>\n              <li>\n                It enables sharing code and logic between components without HOCs or inheritance.\n              </li>\n              <li>Commonly used for reusable logic, such as data fetching or mouse tracking.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Render props is a pattern where a component receives a function as a prop and calls it to determine what to render.",
        "It enables sharing code and logic between components without HOCs or inheritance.",
        "Commonly used for reusable logic, such as data fetching or mouse tracking."
      ]
    },
    {
      "question": "What is prop drilling?",
      "answer": "<ul>\n              <li>\n                Prop drilling is the process of passing data through multiple nested components via\n                props, even if intermediate components don't use the data.\n              </li>\n              <li>\n                It can make code harder to maintain and understand, especially in large component\n                trees.\n              </li>\n              <li>\n                Context API or state management libraries can help avoid excessive prop drilling.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Prop drilling is the process of passing data through multiple nested components via props, even if intermediate components don't use the data.",
        "It can make code harder to maintain and understand, especially in large component trees.",
        "Context API or state management libraries can help avoid excessive prop drilling."
      ]
    },
    {
      "question": "How do you handle forms in React?",
      "answer": "<ul>\n              <li>\n                Use controlled components, where form input values are managed by React state.\n              </li>\n              <li>\n                Handle input changes with\n                <code>onChange</code>\n                handlers and update state accordingly.\n              </li>\n              <li>\n                Use validation libraries (e.g., Formik, Yup, React Hook Form) for complex forms and\n                validation.\n              </li>\n              <li>\n                Uncontrolled components can be used for simple forms, using refs to access values.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use controlled components, where form input values are managed by React state.",
        "Handle input changes with onChange handlers and update state accordingly.",
        "Use validation libraries (e.g., Formik, Yup, React Hook Form) for complex forms and validation."
      ]
    },
    {
      "question": "What are React Fragments?",
      "answer": "<ul>\n              <li>\n                Fragments let you group multiple elements without adding extra nodes to the DOM.\n              </li>\n              <li>\n                Use\n                <code>&lt;&gt;...&lt;/&gt;</code>\n                or\n                <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code>\n                in JSX.\n              </li>\n              <li>Improves performance and keeps the DOM tree clean.</li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Fragments let you group multiple elements without adding extra nodes to the DOM.",
        "Improves performance and keeps the DOM tree clean."
      ]
    },
    {
      "question": "What is React Router?",
      "answer": "<ul>\n              <li>\n                React Router is a popular library for handling routing and navigation in React\n                applications.\n              </li>\n              <li>It enables dynamic rendering of components based on the URL path.</li>\n              <li>\n                Supports nested routes, route parameters, redirects, and programmatic navigation.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React Router is a popular library for handling routing and navigation in React applications.",
        "It enables dynamic rendering of components based on the URL path.",
        "Supports nested routes, route parameters, redirects, and programmatic navigation."
      ]
    },
    {
      "question": "How do you implement routing in React?",
      "answer": "<ul>\n              <li>\n                Wrap your app with\n                <code>&lt;BrowserRouter&gt;</code>\n                to enable routing.\n              </li>\n              <li>\n                Define routes using\n                <code>&lt;Routes&gt;</code>\n                and\n                <code>&lt;Route&gt;</code>\n                components.\n              </li>\n              <li>\n                Use\n                <code>Link</code>\n                or\n                <code>NavLink</code>\n                for navigation without page reloads.\n              </li>\n              <li>\n                Use\n                <code>useNavigate</code>\n                or\n                <code>history</code>\n                for programmatic navigation.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Wrap your app with to enable routing.",
        "Define routes using and components.",
        "Use Link or NavLink for navigation without page reloads."
      ]
    },
    {
      "question": "Explain different types of routing?",
      "answer": "<ul>\n              <li>\n                <strong>BrowserRouter:</strong>\n                Uses HTML5 history API for clean URLs.\n              </li>\n              <li>\n                <strong>HashRouter:</strong>\n                Uses hash portion of the URL (e.g.,\n                <code>#/home</code>\n                ), useful for static sites.\n              </li>\n              <li>\n                <strong>MemoryRouter:</strong>\n                Keeps the history of your \"URL\" in memory (no address bar), useful for testing or\n                non-browser environments.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "BrowserRouter: Uses HTML5 history API for clean URLs.",
        "HashRouter: Uses hash portion of the URL (e.g., #/home ), useful for static sites.",
        "MemoryRouter: Keeps the history of your \"URL\" in memory (no address bar), useful for testing or non-browser environments."
      ]
    },
    {
      "question": "Compare Redux, MobX, and Recoil?",
      "answer": "<ul>\n              <li>\n                <strong>Redux:</strong>\n                Centralized, strict, predictable state management with middleware and dev tools.\n              </li>\n              <li>\n                <strong>MobX:</strong>\n                Uses observables and reactions for more flexible, less boilerplate state management.\n              </li>\n              <li>\n                <strong>Recoil:</strong>\n                React-specific, atomic state management with fine-grained updates and easy\n                integration with hooks.\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Redux: Centralized, strict, predictable state management with middleware and dev tools.",
        "MobX: Uses observables and reactions for more flexible, less boilerplate state management.",
        "Recoil: React-specific, atomic state management with fine-grained updates and easy integration with hooks."
      ]
    },
    {
      "question": "What is Zustand?",
      "answer": "<ul>\n              <li>Zustand is a lightweight state management library for React using hooks.</li>\n              <li>\n                It provides a simple API, minimal boilerplate, and supports both local and global\n                state.\n              </li>\n              <li>State is stored outside the component tree, reducing unnecessary re-renders.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Zustand is a lightweight state management library for React using hooks.",
        "It provides a simple API, minimal boilerplate, and supports both local and global state.",
        "State is stored outside the component tree, reducing unnecessary re-renders."
      ]
    },
    {
      "question": "Explain Redux Toolkit?",
      "answer": "<ul>\n              <li>Redux Toolkit is the official, recommended way to write Redux logic.</li>\n              <li>\n                It simplifies store setup, reducer logic, and async actions with built-in utilities\n                like\n                <code>createSlice</code>\n                and\n                <code>createAsyncThunk</code>\n                .\n              </li>\n              <li>Reduces boilerplate and encourages best practices for Redux development.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Redux Toolkit is the official, recommended way to write Redux logic.",
        "It simplifies store setup, reducer logic, and async actions with built-in utilities like createSlice and createAsyncThunk .",
        "Reduces boilerplate and encourages best practices for Redux development."
      ]
    },
    {
      "question": "Custom hooks implementation?",
      "answer": "<ul>\n              <li>\n                Custom hooks are functions that start with\n                <code>use</code>\n                and encapsulate reusable logic using React hooks.\n              </li>\n              <li>\n                They allow you to share stateful logic between components without HOCs or render\n                props.\n              </li>\n              <li>\n                Custom hooks can use other hooks and return any value (state, functions, objects).\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Custom hooks are functions that start with use and encapsulate reusable logic using React hooks.",
        "They allow you to share stateful logic between components without HOCs or render props.",
        "Custom hooks can use other hooks and return any value (state, functions, objects)."
      ]
    },
    {
      "question": "Explain useState in detail?",
      "answer": "<ul>\n              <li>\n                <code>useState</code>\n                is a hook for adding local state to functional components.\n              </li>\n              <li>It returns a state variable and a setter function to update the value.</li>\n              <li>Updating state with the setter triggers a re-render of the component.</li>\n              <li>\n                Initial state can be a value or a function returning a value (for lazy\n                initialization).\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "useState is a hook for adding local state to functional components.",
        "It returns a state variable and a setter function to update the value.",
        "Updating state with the setter triggers a re-render of the component."
      ]
    },
    {
      "question": "Rules of Hooks?",
      "answer": "<ul>\n              <li>Only call hooks at the top level of your function component or custom hook.</li>\n              <li>\n                Only call hooks from React function components or custom hooks, not from regular\n                functions or class components.\n              </li>\n              <li>Hooks must be called in the same order on every render.</li>\n              <li>Do not call hooks inside loops, conditions, or nested functions.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Only call hooks at the top level of your function component or custom hook.",
        "Only call hooks from React function components or custom hooks, not from regular functions or class components.",
        "Hooks must be called in the same order on every render."
      ]
    },
    {
      "question": "useReducer vs useState?",
      "answer": "<ul>\n              <li>\n                <code>useState</code>\n                is best for simple, independent state variables.\n              </li>\n              <li>\n                <code>useReducer</code>\n                is preferred for complex state logic, multiple sub-values, or when the next state\n                depends on the previous state.\n              </li>\n              <li>\n                <code>useReducer</code>\n                is similar to Redux reducer pattern and is useful for managing forms or complex data\n                structures.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "useState is best for simple, independent state variables.",
        "useReducer is preferred for complex state logic, multiple sub-values, or when the next state depends on the previous state.",
        "useReducer is similar to Redux reducer pattern and is useful for managing forms or complex data structures."
      ]
    },
    {
      "question": "How do you create custom Hooks?",
      "answer": "<ul>\n              <li>\n                Write a function that starts with\n                <code>use</code>\n                and uses built-in hooks inside.\n              </li>\n              <li>Return state, functions, or any value needed by the consuming component.</li>\n              <li>Custom hooks help extract and reuse logic across multiple components.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Write a function that starts with use and uses built-in hooks inside.",
        "Return state, functions, or any value needed by the consuming component.",
        "Custom hooks help extract and reuse logic across multiple components."
      ]
    },
    {
      "question": "Explain error boundaries",
      "answer": "<ul>\n              <li>\n                Error boundaries are special React components that catch JavaScript errors in their\n                child component tree during rendering, lifecycle methods, or constructors.\n              </li>\n              <li>\n                They prevent the entire application from crashing and display a fallback UI instead.\n              </li>\n              <li>\n                Implemented using\n                <code>componentDidCatch</code>\n                and\n                <code>getDerivedStateFromError</code>\n                in class components.\n              </li>\n              <li>\n                Functional components can use third-party libraries like\n                <code>react-error-boundary</code>\n                for similar behavior.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Error boundaries are special React components that catch JavaScript errors in their child component tree during rendering, lifecycle methods, or constructors.",
        "They prevent the entire application from crashing and display a fallback UI instead.",
        "Implemented using componentDidCatch and getDerivedStateFromError in class components."
      ]
    },
    {
      "question": "How do you handle side effects?",
      "answer": "<ul>\n              <li>\n                Side effects such as fetching data, setting up subscriptions, or manually\n                interacting with the DOM are handled using the\n                <code>useEffect</code>\n                hook.\n              </li>\n              <li>\n                You can specify dependencies to control when the effect runs, and return a cleanup\n                function to avoid memory leaks.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Side effects such as fetching data, setting up subscriptions, or manually interacting with the DOM are handled using the useEffect hook.",
        "You can specify dependencies to control when the effect runs, and return a cleanup function to avoid memory leaks."
      ]
    },
    {
      "question": "Implement a simple counter using React hooks",
      "answer": "Example:\n            <pre ngnonbindable=\"\"><code>\nconst [count, setCount] = useState(0);\n\n&lt;button onClick={{ '{{' }} () =&gt; setCount(count + 1) {{ '}}' }}&gt;Increment&lt;/button&gt;\n&lt;p&gt;Count: {{ '{{' }}count{{ '}}' }}&lt;/p&gt;\n  </code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Example: const [count, setCount] = useState(0); setCount(count + 1) {{ '}}' }}>Increment Count: {{ '{{' }}count{{ '}}' }}"
      ]
    },
    {
      "question": "What are React best practices?",
      "answer": "<ul>\n              <li>Keep components small and reusable.</li>\n              <li>Use hooks properly and follow the rules of hooks.</li>\n              <li>\n                Separate concerns: UI, logic, and state management should be in different components\n                or files.\n              </li>\n              <li>Validate props using PropTypes or TypeScript.</li>\n              <li>Maintain clean and organized directory structures.</li>\n              <li>Use memoization to prevent unnecessary re-renders.</li>\n              <li>Avoid direct DOM manipulation; use React refs or state.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Keep components small and reusable.",
        "Use hooks properly and follow the rules of hooks.",
        "Separate concerns: UI, logic, and state management should be in different components or files."
      ]
    },
    {
      "question": "How do you structure a React project?",
      "answer": "Example structure:\n            <pre ngnonbindable=\"\"><code>\nsrc/\n├── components/\n├── pages/\n├── hooks/\n├── services/\n├── utils/\n├── App.js\n└── index.js\n  </code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Example structure: src/ ├── components/ ├── pages/ ├── hooks/ ├── services/ ├── utils/ ├── App."
      ]
    },
    {
      "question": "Explain component composition",
      "answer": "<ul>\n              <li>\n                Component composition is a pattern of building UI using smaller, reusable\n                components.\n              </li>\n              <li>\n                It uses props and\n                <code>children</code>\n                to combine components, rather than relying on inheritance.\n              </li>\n              <li>Promotes reusability and separation of concerns.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Component composition is a pattern of building UI using smaller, reusable components.",
        "It uses props and children to combine components, rather than relying on inheritance.",
        "Promotes reusability and separation of concerns."
      ]
    },
    {
      "question": "How do you handle authentication in React?",
      "answer": "<ul>\n              <li>Authentication is typically handled using JWT tokens and protected routes.</li>\n              <li>\n                Use\n                <code>Context API</code>\n                or\n                <code>Redux</code>\n                for storing user state.\n              </li>\n              <li>\n                Wrap routes in\n                <code>PrivateRoute</code>\n                components to protect them.\n              </li>\n              <li>Use libraries like Firebase or Auth0 for easier integration.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Authentication is typically handled using JWT tokens and protected routes.",
        "Use Context API or Redux for storing user state.",
        "Wrap routes in PrivateRoute components to protect them."
      ]
    },
    {
      "question": "How do you test React components?",
      "answer": "<ul>\n              <li>\n                Use Jest for unit testing and React Testing Library (RTL) for testing UI based on\n                user behavior.\n              </li>\n              <li>\n                Test rendering, events, API calls, and conditional rendering using RTL queries like\n                <code>getByText</code>\n                or\n                <code>getByRole</code>\n                .\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use Jest for unit testing and React Testing Library (RTL) for testing UI based on user behavior.",
        "Test rendering, events, API calls, and conditional rendering using RTL queries like getByText or getByRole ."
      ]
    },
    {
      "question": "What is Jest?",
      "answer": "<ul>\n              <li>Jest is a JavaScript testing framework maintained by Meta.</li>\n              <li>It supports assertions, mocking, snapshot testing, and test coverage.</li>\n              <li>It is commonly used in React projects for unit and integration testing.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Jest is a JavaScript testing framework maintained by Meta.",
        "It supports assertions, mocking, snapshot testing, and test coverage.",
        "It is commonly used in React projects for unit and integration testing."
      ]
    },
    {
      "question": "Explain React Testing Library",
      "answer": "<ul>\n              <li>\n                React Testing Library allows you to test components from the user’s perspective.\n              </li>\n              <li>\n                It encourages better practices by avoiding testing implementation details and\n                focusing on behavior.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React Testing Library allows you to test components from the user’s perspective.",
        "It encourages better practices by avoiding testing implementation details and focusing on behavior."
      ]
    },
    {
      "question": "How do you do unit and integration testing?",
      "answer": "<ul>\n              <li>Unit tests check individual components or functions.</li>\n              <li>Integration tests check how multiple components or modules work together.</li>\n              <li>Use Jest for unit tests and RTL to simulate and test interactions.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Unit tests check individual components or functions.",
        "Integration tests check how multiple components or modules work together.",
        "Use Jest for unit tests and RTL to simulate and test interactions."
      ]
    },
    {
      "question": "How do you use TypeScript with React?",
      "answer": "<ul>\n              <li>\n                Use\n                <code>.tsx</code>\n                files for React components,\n                <code>.ts</code>\n                for other TypeScript files.\n              </li>\n              <li>\n                Define props and state using\n                <code>interface</code>\n                or\n                <code>type</code>\n                .\n              </li>\n              <li>\n                Install types with\n                <code>@types/react</code>\n                for type definitions.\n              </li>\n              <li>TypeScript enhances type safety and developer experience in React projects.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use .tsx files for React components, .ts for other TypeScript files.",
        "Define props and state using interface or type .",
        "Install types with @types/react for type definitions."
      ]
    },
    {
      "question": "Explain prop types",
      "answer": "<ul>\n              <li>PropTypes allow you to validate props passed to a component.</li>\n              <li>\n                Example:\n                <pre ngnonbindable=\"\"><code>\nMyComponent.propTypes = {{\n  name: PropTypes.string isRequired\n}};\n                </code></pre>\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "PropTypes allow you to validate props passed to a component.",
        "Example: MyComponent.propTypes = {{ name: PropTypes.string isRequired }};"
      ]
    },
    {
      "question": "Difference between interface and type in TypeScript",
      "answer": "<ul>\n              <li>\n                <code>interface</code>\n                is best for declaring object shapes and can be extended.\n              </li>\n              <li>\n                <code>type</code>\n                is more flexible, supporting primitives, unions, intersections, and aliases.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "interface is best for declaring object shapes and can be extended.",
        "type is more flexible, supporting primitives, unions, intersections, and aliases."
      ]
    },
    {
      "question": "Server-side rendering in React",
      "answer": "<ul>\n              <li>\n                Server-side rendering (SSR) pre-renders the HTML on the server before sending it to\n                the client.\n              </li>\n              <li>This improves SEO and performance for initial page loads.</li>\n              <li>Tools like Next.js make SSR seamless and easy to implement.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Server-side rendering (SSR) pre-renders the HTML on the server before sending it to the client.",
        "This improves SEO and performance for initial page loads.",
        "Tools like Next.js make SSR seamless and easy to implement."
      ]
    },
    {
      "question": "What is Next.js?",
      "answer": "<ul>\n              <li>Next.js is a React framework for building production-ready applications.</li>\n              <li>\n                It supports SSR, static generation, dynamic routing, TypeScript, and API routes out\n                of the box.\n              </li>\n              <li>Next.js simplifies routing and data fetching for React applications.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Next.js is a React framework for building production-ready applications.",
        "It supports SSR, static generation, dynamic routing, TypeScript, and API routes out of the box.",
        "Next.js simplifies routing and data fetching for React applications."
      ]
    },
    {
      "question": "Explain React Suspense",
      "answer": "<ul>\n              <li>\n                Suspense lets you show fallback content like loaders while components are being\n                lazily loaded.\n              </li>\n              <li>\n                It is used with\n                <code>React.lazy</code>\n                or for data fetching with React 18.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Suspense lets you show fallback content like loaders while components are being lazily loaded.",
        "It is used with React.lazy or for data fetching with React 18."
      ]
    },
    {
      "question": "Concurrent mode in React",
      "answer": "<ul>\n              <li>\n                Concurrent Mode is an experimental feature that allows React to pause rendering and\n                prioritize updates.\n              </li>\n              <li>It improves responsiveness but is not fully stable yet.</li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Concurrent Mode is an experimental feature that allows React to pause rendering and prioritize updates.",
        "It improves responsiveness but is not fully stable yet."
      ]
    },
    {
      "question": "What is React Native?",
      "answer": "<ul>\n              <li>React Native is a framework for building native mobile apps using React.</li>\n              <li>\n                It uses native components instead of HTML and CSS, enabling real native performance\n                with a JavaScript codebase.\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React Native is a framework for building native mobile apps using React.",
        "It uses native components instead of HTML and CSS, enabling real native performance with a JavaScript codebase."
      ]
    },
    {
      "question": "Difference between React and React Native",
      "answer": "<ul>\n              <li>React is for web development using HTML and CSS.</li>\n              <li>\n                React Native is for building cross-platform mobile apps using native components like\n                <code>View</code>\n                and\n                <code>Text</code>\n                .\n              </li>\n            </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React is for web development using HTML and CSS.",
        "React Native is for building cross-platform mobile apps using native components like View and Text ."
      ]
    },
    {
      "question": "How do you build cross-platform applications?",
      "answer": "<ul>\n              <li>\n                Use React Native for mobile, React (Electron) for desktop, and share business logic\n                in a mono-repo or shared library.\n              </li>\n              <li>Maintain consistent UI/UX using shared design tokens or component libraries.</li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use React Native for mobile, React (Electron) for desktop, and share business logic in a mono-repo or shared library.",
        "Maintain consistent UI/UX using shared design tokens or component libraries."
      ]
    },
    {
      "question": "Implement a todo list application",
      "answer": "<ul>\n              <li>\n                Use\n                <code>useState</code>\n                to manage todos.\n              </li>\n              <li>\n                Add new items to the array, display using\n                <code>map</code>\n                , and provide buttons to delete or toggle completion status.\n              </li>\n              <li>\n                Optionally use\n                <code>localStorage</code>\n                or an API for persistence.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use useState to manage todos.",
        "Add new items to the array, display using map , and provide buttons to delete or toggle completion status.",
        "Optionally use localStorage or an API for persistence."
      ]
    },
    {
      "question": "Create a shopping cart using React",
      "answer": "<ul>\n              <li>\n                Use\n                <code>useReducer</code>\n                or Redux for state management.\n              </li>\n              <li>Handle actions like add, remove, and update quantity.</li>\n              <li>Calculate total price, and persist state across sessions.</li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use useReducer or Redux for state management.",
        "Handle actions like add, remove, and update quantity.",
        "Calculate total price, and persist state across sessions."
      ]
    },
    {
      "question": "Build a real-time chat application",
      "answer": "<ul>\n              <li>Use WebSockets or services like Firebase.</li>\n              <li>Maintain chat messages in state.</li>\n              <li>Listen for incoming messages and update the UI accordingly.</li>\n              <li>Add typing indicators and handle reconnections.</li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use WebSockets or services like Firebase.",
        "Maintain chat messages in state.",
        "Listen for incoming messages and update the UI accordingly."
      ]
    },
    {
      "question": "How would you optimize a slow React application?",
      "answer": "<ul>\n              <li>\n                Use\n                <code>React.memo</code>\n                ,\n                <code>useMemo</code>\n                ,\n                <code>useCallback</code>\n                , and avoid unnecessary props/state changes.\n              </li>\n              <li>\n                Split code with lazy loading, and reduce deep prop drilling with Context or Redux.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use React.memo , useMemo , useCallback , and avoid unnecessary props/state changes.",
        "Split code with lazy loading, and reduce deep prop drilling with Context or Redux."
      ]
    },
    {
      "question": "Explain memoization techniques",
      "answer": "<ul>\n              <li>Memoization avoids unnecessary calculations.</li>\n              <li>\n                Use\n                <code>useMemo</code>\n                for values and\n                <code>useCallback</code>\n                for functions that depend on stable inputs to avoid re-creation across renders.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Memoization avoids unnecessary calculations.",
        "Use useMemo for values and useCallback for functions that depend on stable inputs to avoid re-creation across renders."
      ]
    },
    {
      "question": "How do you prevent unnecessary re-renders?",
      "answer": "<ul>\n              <li>\n                Use\n                <code>React.memo</code>\n                , avoid inline functions and objects, use\n                <code>useCallback</code>\n                and\n                <code>useMemo</code>\n                , and ensure child components don’t re-render unless their props change.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use React.memo , avoid inline functions and objects, use useCallback and useMemo , and ensure child components don’t re-render unless their props change."
      ]
    },
    {
      "question": "How do you prevent XSS in React?",
      "answer": "<ul>\n              <li>\n                Never render untrusted HTML with\n                <code>dangerouslySetInnerHTML</code>\n                .\n              </li>\n              <li>React escapes content by default.</li>\n              <li>Sanitize user input using libraries like DOMPurify.</li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Never render untrusted HTML with dangerouslySetInnerHTML .",
        "React escapes content by default.",
        "Sanitize user input using libraries like DOMPurify."
      ]
    },
    {
      "question": "Handle security in React applications",
      "answer": "<ul>\n              <li>\n                Always validate user input, secure API endpoints, use HTTPS, sanitize content,\n                manage tokens securely, and use tools like Helmet for setting security headers.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Always validate user input, secure API endpoints, use HTTPS, sanitize content, manage tokens securely, and use tools like Helmet for setting security headers."
      ]
    },
    {
      "question": "Best practices for secure React development",
      "answer": "<ul>\n              <li>\n                Use environment variables for secrets, escape dynamic values, enable CSP headers,\n                update dependencies regularly, and avoid exposing sensitive information in the\n                client bundle.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Use environment variables for secrets, escape dynamic values, enable CSP headers, update dependencies regularly, and avoid exposing sensitive information in the client bundle."
      ]
    },
    {
      "question": "Implement a search functionality",
      "answer": "<ul>\n              <li>\n                Store search input in\n                <code>useState</code>\n                , filter the dataset using\n                <code>Array.filter</code>\n                , and optionally debounce using\n                <code>useEffect</code>\n                +\n                <code>setTimeout</code>\n                for performance.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Store search input in useState , filter the dataset using Array.filter , and optionally debounce using useEffect + setTimeout for performance."
      ]
    },
    {
      "question": "Create a dynamic form",
      "answer": "<ul>\n              <li>Store form schema in a config or JSON file.</li>\n              <li>\n                Render fields dynamically using\n                <code>map</code>\n                .\n              </li>\n              <li>\n                Use\n                <code>useState</code>\n                to store field values and validate on change or submit.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Store form schema in a config or JSON file.",
        "Render fields dynamically using map .",
        "Use useState to store field values and validate on change or submit."
      ]
    },
    {
      "question": "Build a pagination component",
      "answer": "<ul>\n              <li>\n                Store current page in state, display sliced data based on page size, and render\n                navigation buttons.\n              </li>\n              <li>\n                Use libraries like\n                <code>react-paginate</code>\n                for advanced features.\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Store current page in state, display sliced data based on page size, and render navigation buttons.",
        "Use libraries like react-paginate for advanced features."
      ]
    },
    {
      "question": "What is react and what are the advantages of the react?",
      "answer": "<ol>\n                <li>React is a JavaScript library for building user interfaces.</li>\n                <li>React is used to build single-page applications.</li>\n                <li>\n                  React is Component-Based library. Implement once and reuse the component entire\n                  library.\n                </li>\n                <li>\n                  React works based on the virtual DOM. React maintains the state in virtual DOM and\n                  compares with the previous Virtual DOM state. It will apply the differences to the\n                  real DOM.\n                </li>\n                <li>React allows us to create reusable UI components.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React is a JavaScript library for building user interfaces.",
        "React is used to build single-page applications.",
        "React is Component-Based library. Implement once and reuse the component entire library."
      ]
    },
    {
      "question": "What is reconciliation in react?",
      "answer": "<ol>\n                <li>\n                  A virtual DOM is a lightweight JavaScript object which originally is just a copy\n                  of the real DOM. It is a node tree that lists the elements, their attributes and\n                  content as Objects and their properties.\n                </li>\n                <li>\n                  React works based on the virtual DOM. React maintains the state in virtual DOM and\n                  compares with the previous Virtual DOM state. It will apply the differences to the\n                  real DOM. This process is called reconciliation.\n                </li>\n                <li>\n                  The mechanism to diff one tree with another to determine which parts need to be\n                  changed and then update the original DOM with it is called Reconciliation .\n                </li>\n                <li>\n                  ReactJS uses a new reconciliation engine called\n                  <b>Fiber</b>\n                  since version 16.0\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties.",
        "React works based on the virtual DOM. React maintains the state in virtual DOM and compares with the previous Virtual DOM state. It will apply the differences to the real DOM. This process is called reconciliation.",
        "The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation ."
      ]
    },
    {
      "question": "What are SyntheticEvent in React native?",
      "answer": "<ol>\n                <li>\n                  React has its own event handling system which is very similar to handling events\n                  on DOM elements. The react event handling system is known as Synthetic Events. The\n                  synthetic event is a cross-browser wrapper of the browser's native event\n                </li>\n                <li>\n                  React synthetic events are very similar to native events, however, with synthetic\n                  events, the same API interface is implemented across multiple browsers.\n                </li>\n                <li>\n                  Handling events with react have some syntactic differences from handling events on\n                  DOM. These are:\n                  <br>\n                  1. React events are named as camelCase instead of lowercase.\n                  <br>\n                  <div>\n                    <code>&lt;button onclick=\"showMessage()\"&gt; Hello React &lt;/button&gt;</code>\n                  </div>\n                  2. With JSX, a function is passed as the event handler instead of a string. For\n                  example:\n                  <br>\n                  <div>\n                    <code>\n                      &lt;button onClick={showMessage}&gt; Hello React &lt;/button&gt;\n                    </code>\n                  </div>\n                  3. In react, we cannot return false to prevent the default behavior. We must call\n                  preventDefault event explicitly to prevent the default behavior. For example:\n                  <div>\n                    <code>\n                      &lt;a href=\"\" onClick={(e) =&gt; {e.preventDefault()}}&gt;\n                      Hello React &lt;/a&gt;\n                    </code>\n                  </div>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "React synthetic events are very similar to native events, however, with synthetic events, the same API interface is implemented across multiple browsers."
      ]
    },
    {
      "question": "What are react keys?",
      "answer": "<ol>\n                <li>\n                  A “key” is a special string attribute you need to include when creating lists of\n                  elements in React.\n                </li>\n                <li>\n                  Keys are used in React to identify which items in the list are changed, updated,\n                  or deleted.\n                </li>\n                <div>\n                  <code>\n                    const numbers = [ 1, 2, 3, 4, 5 ];\n                    \n\n                    const updatedNums = numbers.map((number)=&gt;{\n                    \n\n                    return &lt;li key={index}&gt;{number} &lt;/li&gt;;\n                    \n\n                    });\n                  </code>\n                </div>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "A “key” is a special string attribute you need to include when creating lists of elements in React.",
        "Keys are used in React to identify which items in the list are changed, updated, or deleted."
      ]
    },
    {
      "question": "What is bubbling/event bubbling in react?",
      "answer": "<ol>\n                <li>\n                  What is bubbling in programming? Event bubbling is a type of DOM event propagation\n                  where the event first triggers on the child element, and then propagated to the\n                  parent of the target\n                </li>\n                <li>\n                  Event will be propagated till it reaches the outermost DOM element or document\n                  object\n                </li>\n                <li>\n                  For an example an anchor inside button. If we handles the click action on button,\n                  but use clicks on the anchor tag, first event raised at anchor tag(child level)\n                  and propagates to parent button.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "What is bubbling in programming? Event bubbling is a type of DOM event propagation where the event first triggers on the child element, and then propagated to the parent of the target",
        "Event will be propagated till it reaches the outermost DOM element or document object",
        "For an example an anchor inside button. If we handles the click action on button, but use clicks on the anchor tag, first event raised at anchor tag(child level) and propagates to parent button."
      ]
    },
    {
      "question": "What is Axios interceptor?",
      "answer": "<ol>\n                <li>\n                  Interceptors will be executed for each request before sending to the server.\n                </li>\n                <li>\n                  Using interceptor, we can modify the server request like adding new headers.\n                </li>\n                <li>\n                  The Interceptor can be useful for adding custom headers(\n                  <b>X-Client-Key</b>\n                  , or authentication JWT token) to the outgoing request, logging the incoming\n                  response\n                </li>\n                <li>\n                  Axios Interceptors is to add the Authorization Header/any token to every request.\n                  In our project, we add auth-token header to each request.\n                </li>\n                <code>\n                  import axios from 'axios' // Add a request interceptor\n                  \n\n                  axios.interceptors.request.use(\n                  \n\n                  config =&gt; {\n                  \n\n                  const token = localStorageService.getAccessToken()\n                  \n\n                  if (token) {\n                  \n\n                  config.headers['Authorization'] = 'Bearer ' + token\n                  \n\n                  } // config.headers['Content-Type'] = 'application/json';\n                  \n\n                  return config\n                  \n\n                  },\n                  \n\n                  error =&gt; {\n                  \n\n                  Promise.reject(error)\n                  \n\n                  }\n                  \n\n                  )\n                </code>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Interceptors will be executed for each request before sending to the server.",
        "Using interceptor, we can modify the server request like adding new headers.",
        "The Interceptor can be useful for adding custom headers( X-Client-Key , or authentication JWT token) to the outgoing request, logging the incoming response"
      ]
    },
    {
      "question": "What are the difference between real DOM and virtual DOM?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Real DOM</th>\n                    <th scope=\"col\">Virtual DOM</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>DOM manipulation is slow and costly.</td>\n                    <td>DOM manipulation is fast and efficient.</td>\n                  </tr>\n                  <tr>\n                    <td>Updates the entire tree even if one element changes.</td>\n                    <td>Updates only the changed node using diffing algorithm.</td>\n                  </tr>\n                  <tr>\n                    <td>Directly updates the HTML in the browser.</td>\n                    <td>Creates a virtual representation in memory, then syncs with real DOM.</td>\n                  </tr>\n                  <tr>\n                    <td>Creates a new DOM if the element updates.</td>\n                    <td>Updates only the necessary parts of the DOM.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "React"
      ],
      "keyPoints": [
        "Real DOM Virtual DOM DOM manipulation is slow and costly.",
        "DOM manipulation is fast and efficient."
      ]
    }
  ]
}
