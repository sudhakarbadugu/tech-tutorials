// Auto-generated from trinits-web-angular tutorial sources
// Generated: 2026-06-13T02:26:18.128Z

export const reactContent = {
  module1: {
    'react-official-websites': {
      title: 'React Official Websites',
      sections: [
        {
          heading: 'React official websites',
          list: [
            '<a href="https://reactjs.org/" target="_blank">https://reactjs.org/</a>',
            '<a href="https://beta.reactjs.org/" target="_blank">https://beta.reactjs.org/</a>'
          ]
        }
      ]
    },
    'node-installation': {
      title: 'Node Installation',
      sections: [
        {
          heading: '1. Install node js',
          content: [
            'Node is required to run Angular/React/Vue.js. Download the latest node.js from the below link:'
          ]
        }
      ]
    },
    'check-node-version': {
      title: 'Check Node Version',
      sections: [
        {
          heading: '2. Check the node version',
          content: [
            'Using the below commands we can check the node and npm versions:'
          ],
          code: `node -v
npm -v`
        }
      ]
    },
    'create-react-app': {
      title: 'Create React App',
      sections: [
        {
          heading: '3. Create a new project',
          content: [
            'Start the project using the below command. <strong>Note:</strong> Make sure that you are running the below command from project folder.',
            'All commands together:',
            'Then open <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> to see your app.',
            'Here: <strong>localhost</strong> is our machine address 3000 => port number.',
            'You can start a new TypeScript app using templates. To use the provided TypeScript template, append <code>--template typescript</code> to the creation command.'
          ],
          example: {
            title: 'Example',
            code: `npx create-react-app projectName
npx create-react-app payroll
npx create-react-app my-app --template typescript`,
            output: `npm start

npx create-react-app my-app
cd my-app
npm start

npx create-react-app my-app --template typescript`,
            type: 'code'
          }
        }
      ]
    },
    'project-structure': {
      title: 'Project Structure',
      sections: [
        {
          heading: 'Project files',
          content: [
            'Whenever we are creating the react project, below files will be generated.'
          ],
          list: [
            '<strong>node_modules</strong> - This folder contains all libraries required for the project. - This folder is auto generated. - Run the <code>npm install</code> command to generate the node_modules folder.',
            '<strong>index.html</strong> - React will load the index.html file first. - It will contain the root div tag.',
            '<strong>manifest.json</strong> - The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file. The purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access and a richer experience.',
            '<strong>robots.txt</strong> - Robots.txt file is a text file created by the designer/developer to prevent the search engines and bots to crawl up their sites. It contains the list of allowed and disallowed sites and whenever a bot wants to access the website, it checks the robots.txt file and accesses only those sites that are allowed. It doesn’t show up the disallowed sites in search results.',
            '<strong>src</strong> - All source code will be placed inside the src folder.',
            '<strong>.gitignore</strong> - Ignore the list of files from git.',
            '<strong>package.json</strong> - It will have list of library information used in the project.'
          ],
          code: `my-app => project name
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js`
        }
      ]
    },
    scripts: {
      title: 'Scripts',
      sections: [
        {
          heading: 'Scripts',
          code: `npm start
  - To start the project.

npm test
  - To test the unit test cases.

npm run build
  - Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.`
        }
      ]
    },
    'react-intro': {
      title: 'Introduction to React',
      sections: [
        {
          heading: 'React',
          list: [
            'React is a JavaScript library for building user interfaces/web pages.',
            'React is used to build single-page applications.',
            'React is Component-Based library. We can implement component once and reuse the that in entire project.',
            'React works based on the virtual DOM. React maintains the state in virtual DOM and compares with the previous Virtual DOM state. It will apply the differences to the real DOM. => Reconciliation',
            'React allows us to create reusable UI components.',
            'DOM: Document Object Model.'
          ]
        }
      ]
    }
  },
  module2: {
    spa: {
      title: 'SPA',
      sections: [
        {
          heading: 'What is SPA?',
          content: [
            'SPA means Single page application (SPA)',
            'SPA is a single page where a lot of information stays the same and only data will be updated into particular place. For example, when we load our site, the sidebar and header remain same and only body changes based on navigation. If it is normal html, then whole page will be reloaded. - It will improve performance and user experience.'
          ]
        }
      ]
    },
    'how-react-works': {
      title: 'How React Works',
      sections: [
        {
          heading: 'How does React Work?',
          list: [
            'React creates a VIRTUAL DOM in memory.',
            `Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.`,
            'React only changes what needs to be changed!'
          ]
        }
      ]
    },
    reconciliation: {
      title: 'Reconciliation',
      sections: [
        {
          heading: 'What is reconciliation in react?',
          content: [
            'A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties.',
            'React works based on the virtual DOM. React maintains the state in virtual DOM and compares with the previous Virtual DOM state. It will apply the differences to the real DOM. This process is called reconciliation.',
            'The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation.',
            'ReactJS uses a new reconciliation engine called Fiber since version 16.0'
          ]
        }
      ]
    },
    versions: {
      title: 'Versions',
      sections: [
        {
          heading: 'Versions',
          list: [
            'Current version of React.JS is V18.0.0 (April 2022).',
            'Initial Release to the Public (V0.3.0) was in July 2013.',
            `React.JS was first used in 2011 for Facebook's News feed feature.`
          ]
        }
      ]
    },
    'reactdom-render': {
      title: 'ReactDOM Render',
      sections: [
        {
          heading: 'ReactDOM.render()',
          content: [
            'React renders HTML to the web page by using a function called <code>ReactDOM.render()</code> .',
            'The <code>ReactDOM.render()</code> function takes two arguments, HTML code and an HTML element.',
            'The purpose of the function is to display the specified HTML code inside the specified HTML element.'
          ],
          code: `ReactDOM.render(<p>Hello</p>, document.getElementById('root'));`
        }
      ]
    },
    'react-flow': {
      title: 'React Flow',
      sections: [
        {
          heading: 'React flow',
          content: [
            'React will load the <code>index.html</code> first. As part of the <code>index.html</code> file, we have the below tag:'
          ],
          list: [
            '<code>Index.js</code> will be executed after that.',
            'As part of the <code>index.js</code> , <code>ReactDOM</code> renders the components.',
            'React and ReactDOM classes are imported from the react libraries.',
            '<code>render</code> method used to render the output.',
            'As part of the render method, it loads the App component. So App component will be displayed initially.',
            'component types <ul> <li>function based</li> <li>class based</li> </ul>',
            'adding bootstrap by link approach.',
            'adding bootstrap by npm approach.',
            'import styles in js',
            'jsx'
          ],
          example: {
            title: 'Example',
            code: '<div id="root"></div>',
            output: `const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
            type: 'code'
          }
        }
      ]
    },
    component: {
      title: 'Components',
      sections: [
        {
          heading: 'Component',
          content: [
            '<strong>Note:</strong> In older React code bases, you may find Class components primarily used. Function components are introduced from React 16.8 (2019).',
            '<strong>Class based components:</strong>'
          ],
          list: [
            'A component is a function/class which will display something to the user.',
            'We can write component once and reuse the entire project.',
            'It helps to avoid the duplicate code.',
            'A component may have css and js files.',
            'Component name must be Written using camel case and starts with the capital as shown below.',
            'Components come in two types, Class components and Function components.',
            '1. function based components',
            '2. class based components',
            'When the state object changes, the component re-renders.',
            'Refer to the state object anywhere in the component by using the <code>this.state.propertyname</code> syntax:'
          ],
          example: {
            title: 'Example',
            code: `function App() {
  return (
    <div>
      Hello world
    </div>
  )
}

export default App;`,
            output: `// ---------class based------------------
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {color: "red"};
  }

  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }

  render() {
    return <div>
      Hello world {this.state.color} {this.props.model}
    </div>
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

}`,
            type: 'code'
          }
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
            'With JSX you can write expressions inside curly braces <code>{ }</code> .',
            'The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:',
            'You may use quotes to specify string literals as attributes:',
            'You may also use curly braces to embed a JavaScript expression in an attribute:',
            '<strong>Note:</strong> Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute.'
          ],
          list: [
            'JSX is a shorthand for JavaScript XML. This makes the HTML file really easy to understand.',
            'This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax.',
            'This file makes applications robust and boosts its performance.',
            'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel.',
            'Component uses the JSX syntax.',
            'JSX means syntax extension to JavaScript.',
            'JSX produces React “elements”.',
            'JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.',
            'JSX converts HTML tags into react elements.',
            `As part of the JSX syntax, we can't use 2 tags at high level. If we want to use then we have use those code inside the empty <code><></></code>`,
            'In React, a fragment is a way to group multiple elements together without adding an extra node to the DOM. A fragment is represented by the <code><React.Fragment></code> component or the shorthand syntax <code><></></code> .',
            'Create the dynamic content',
            'print any variable. <code>{age}</code> <code>{p.age}</code>',
            'Call any function. <code>{test()}</code>',
            'The <code>class</code> attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the <code>class</code> keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.',
            'We can print any value in the JSX using the <code>{}</code> curly braces.',
            'We can put any valid JavaScript expression inside the curly braces in JSX. <code>{ 2 + 2 }</code> <code>{person.firstName}</code>',
            'In JSX expression code, we can call any method. <code>{ formatName(user) }</code>'
          ],
          example: {
            title: 'Example',
            code: `// Fragment Example
function App() {
  return (
    <>
      <div>
        Hello world
      </div>
    </>
  )
}`,
            output: `const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

<a href="https://www.reactjs.org"> link </a>;

<img src={user.avatarUrl}></img>;

const name = "Trinits Technologies";
const person = {
  name: "SS",
  age: 30
};

<div>{name}</div>
<div>{person}</div>  ==> This line will give compilation issues, we should not directly print the object like this.
<div>{person.name}</div>
<div>{person.age}</div>`,
            type: 'code'
          }
        }
      ]
    },
    'css-import': {
      title: 'CSS Import',
      sections: [
        {
          heading: 'How to import CSS to the component?',
          content: [
            '<strong>Solution 1:</strong>',
            '<strong>Solution 2:</strong>',
            'React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.'
          ],
          list: [
            'Using the import statement we can use CSS. But if we import CSS as shown below, then these styles are applicable to the entire project. These styles may overlap with other component styles.',
            'To apply the CSS to a single component, we have to create the style file with the <code>*.module.css</code> extension.',
            `Eg: Instead of 'AppHeader.css', we have to create 'AppHeader.module.css' file.`,
            'We have to apply the CSS using the object way like <code>{classes.header}</code> .',
            `<strong>Note:</strong> Don't write the code like <code>className="{classes.header}"</code> or <code>className="classes.header"</code>`,
            'CSS module can be used with Pure CSS or with Sass. The naming convention for CSS module is a specific name followed by dot and module (e.g., <code>test.module.css</code> or <code>test.module.scss</code> ).',
            'Add the below CDN links to the <code>index.html</code> file.',
            'Install Bootstrap to the project using the npm command:',
            'Import bootstrap files in App component.'
          ],
          example: {
            title: 'Example',
            code: `import './App.css'`,
            output: `import classes from './AppHeader.module.css'

function AppHeader() {
  return (
    <>
      <div className={classes.header}>
        Hello world
      </div>
    </>
  )
}

<input className={\`base-input-class \${classes.header}\`}>
<li className={[activeClass, data.class, "main-class"].join(' ')} />
<div className={style.style1+ ' ' + style.style2} />

style={
  backgroundColor: 'red',
  color: 'green',
  fontSize: '14px'
}

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

npm install bootstrap
npm i bootstrap
npm install --save bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';`,
            type: 'code'
          }
        }
      ]
    },
    'event-handling': {
      title: 'Event Handling',
      sections: [
        {
          heading: 'Event handling',
          content: [
            'Event bubbling is a type of DOM event propagation where the event first triggers on the child element, and then propagates to the parent of the target. The event will be propagated until it reaches the outermost DOM element or document object. For example, an anchor inside a button: if we handle the click action on the button, but the user clicks on the anchor tag, first the event is raised at the anchor tag (child level) and propagates to the parent button.'
          ],
          list: [
            'In React, event handling is similar to HTML events.',
            'Mainly 2 parts: <ol> <li> Event name in camel case. Eg: <code>onClick</code> event. </li> <li> Assign the function to the event. Write function name in the curly braces. - Instead of writing a new function, we can use ES6 arrow function also. </li> </ol>',
            'React has its own event handling system which is very similar to handling events on DOM elements. The React event handling system is known as <strong>Synthetic Events</strong> .',
            `The synthetic event is a cross-browser wrapper of the browser's native event.`,
            'React synthetic events are very similar to native events, but the same API interface is implemented across multiple browsers.',
            'Handling events with React has some syntactic differences from handling events on DOM. These are:',
            'To pass an argument to an event handler, use an arrow function.'
          ],
          example: {
            title: 'Example',
            code: `function onClickHandler(){
  console.log('Event handled');
}

<button onClick={onClickHandler}>Test</button>
<button onClick={() => {onClickHandler()}>Alert me</button>`,
            output: '<button onClick={() => shoot("Goal!")}>Take the shot!</button>',
            type: 'code'
          }
        }
      ]
    },
    'property-binding': {
      title: 'Property Binding',
      sections: [
        {
          heading: 'Property binding',
          content: [
            'Form validations also.'
          ],
          list: [
            'Binding variable to HTML element is called property binding.',
            'React supports only 1 way binding (unidirectional binding).',
            'In React there is no direct way of providing 2 way binding.',
            'To achieve 2 way binding, we have to combine property binding, event handling, and useState mechanism.'
          ],
          example: {
            title: 'Example',
            code: '<input value={username} />',
            output: `// 1. Create a Tuple using useState hook
const [username, setUsername] = useState('');

// 2. Write a function to update the username field value to state.
function onClickHandler(event) {
  setUsername(event.target.value);
}

// 3. In the input container use event and property binding.
<input onChange={onClickHandler} value={username}/>`,
            type: 'code'
          }
        }
      ]
    },
    'parent-to-child': {
      title: 'Parent to Child',
      sections: [
        {
          heading: 'Parent to child data',
          content: [
            'To pass props from a parent component to a child component, you simply include the props as attributes when you render the child component.'
          ],
          list: [
            'In React, we can pass data to child using the <code>props</code> property.',
            'From parent tag, we can pass all the values in the tag directly, so these values will be bound to the <code>props</code> object.',
            'In the child tag, we can get the data from <code>props</code> argument.',
            'Props are arguments passed into React components.',
            'Props are passed to components via HTML attributes.',
            'Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable.',
            'They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component.',
            'This helps in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.',
            'In React, props are designed to be read-only, which means that a child component cannot change the value of a prop that is passed down from its parent. This is by design to maintain a one-way data flow between components and make the application more predictable and easier to reason about.',
            '<strong>Note:</strong> React Props are read-only! You will get an error if you try to change their value.',
            `Props can contain any type of data, such as strings, numbers, arrays, objects, or even functions. They are typically used to configure or customize a child component's behavior, appearance, or content based on the data passed down from the parent component.`,
            `When the parent's state or props change, React will automatically re-render the parent and all of its children components that depend on the changed data.`,
            'When a component is re-rendered, React compares the new props with the previous props to determine if the component needs to update its content. If the new props are different from the previous props, React will re-render the component and update its content with the new data. If the new props are the same as the previous props, React will skip the re-rendering process to optimize performance.'
          ],
          code: `const student = {};

// Parent component
function StudentInfo() {
  return <div>
    <StudentForm studentData={student}/>
  </div>;
}

// Child component
function StudentForm(props) {
  return <div>
    {JSON.stringify(props.studentData)}
  </div>
}

// Or we can extract the data from props object as shown below using destructuring.
// Child component
function StudentForm({studentData}) {
  return <div>
    {JSON.stringify(studentData)}
  </div>
}`
        }
      ]
    },
    'child-to-parent': {
      title: 'Child to Parent',
      sections: [
        {
          heading: 'Child to parent data',
          list: [
            'Passing data from child to parent also uses the <code>props</code> .',
            'In child component props, we can add a new property for handling the buttons. Eg: <code>addStudent</code> to the props.',
            'In the parent component, write a function <code>addStudentHandler</code> and pass this function to child.'
          ],
          code: `const student = {};
function addStudentHandler() {
  // Write the student to the array.
}

// Parent component
function StudentInfo() {
  return <div>
    <StudentForm studentData={student} addStudent={addStudentHandler}/>
  </div>;
}

// Child component
function StudentForm(props) {
  return <div>
    <button onClick={props.addStudent}>Add</button>
  </div>
}

// Or we can extract the data from props object as shown below
// Child component
function StudentForm({studentData, addStudent}) {
  return <div>
    {JSON.stringify(studentData)}
    <button onClick={addStudent}>Add</button>
  </div>
}`
        }
      ]
    },
    containment: {
      title: 'Containment',
      sections: [
        {
          heading: 'Containment',
          content: [
            'In React, containment is a technique where a component can receive other components as children and render them inside its own output. This allows for composing components and creating complex UI structures from smaller, reusable building blocks.',
            'To enable containment in a React component, you can use the special <code>children</code> prop that is automatically passed to every component. This prop represents the content that is passed between the opening and closing tags of a component, like this:',
            'When the <code>App</code> component is rendered, it will render the <code>ParentComponent</code> with the <code>title</code> prop set to "My Parent Component", and the <code>ChildComponent</code> passed as a child component. The <code>ChildComponent</code> will be rendered inside the <code>ParentComponent</code> , in the place where the <code>children</code> prop is used.',
            'Using containment, you can create flexible, reusable components that can be used in different contexts, and can render different content depending on their children.'
          ],
          list: [
            'Printing all child HTML to parent using the containment process.'
          ],
          code: `function ParentComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

function ChildComponent(props) {
  return <p>{props.text}</p>;
}

function App() {
  return (
    <ParentComponent title="My Parent Component">
      <ChildComponent text="This is my child component" />
    </ParentComponent>
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
          heading: 'React.memo',
          content: [
            `Here's an example of using <code>React.memo</code> to memoize a functional component:`,
            'In this example, <code>MyComponent</code> is wrapped in <code>React.memo</code> , which will compare the <code>someProp</code> prop of the new render with the previous render, and only re-render if it has changed.'
          ],
          list: [
            '<code>React.memo</code> is used to memoize function components and optimize re-renders.',
            '<code>React.memo</code> is a higher-order component that can wrap a functional component and memoize its result based on the equality of the props. If the props are the same as the previous render, the component will not re-render.'
          ],
          code: `import React from 'react';

function MyComponent(props) {
  return <div>{props.someProp}</div>;
}

export default React.memo(MyComponent);`
        }
      ]
    },
    'use-memo': {
      title: 'useMemo',
      sections: [
        {
          heading: 'useMemo',
          content: [
            `Here's an example:`,
            'In this example, the <code>useMemo</code> hook memoizes the result of the <code>computeResult</code> function, and re-computes it only when the <code>props.data</code> dependency changes. This can improve performance by avoiding unnecessary recomputations of the result.',
            'Another way to achieve the same result is by using the <code>useMemo</code> hook to memoize the result of a function that returns a JSX element:',
            'In this example, <code>useMemo</code> is used to memoize the result of the function that returns a JSX element based on the <code>someProp</code> prop. If <code>someProp</code> has not changed, the memoized element is returned, otherwise the function is re-evaluated.'
          ],
          list: [
            '<code>useMemo</code> is a hook that allows you to optimize expensive computations by memoizing their results.',
            'It takes two arguments: a function that performs the computation, and an array of dependencies. The hook will recompute the value only when one of the dependencies has changed.'
          ],
          example: {
            title: 'Example',
            code: `import React, { useMemo } from 'react';

function MyComponent(props) {
  const result = useMemo(() => {
    // Perform an expensive computation
    return computeResult(props.data);
  }, [props.data]);

  return <div>{result}</div>;
}`,
            output: `import React, { useMemo } from 'react';

function MyComponent(props) {
  const memoizedElement = useMemo(() => {
    return <div>{props.someProp}</div>;
  }, [props.someProp]);

  return memoizedElement;
}

export default MyComponent;`,
            type: 'code'
          }
        }
      ]
    },
    'custom-hooks': {
      title: 'Custom Hooks',
      sections: [
        {
          heading: 'Custom Hooks',
          content: [
            'Usage example:'
          ],
          list: [
            'Hooks are reusable functions.',
            'Writing your own hooks are called <strong>custom hooks</strong> .',
            'If any component logic is common in multiple places, then we can write a custom hook.',
            'Custom hooks start with <code>use</code> . Example: <code>useApi</code> .',
            'Custom hooks follow a naming convention of <code>use</code> followed by a descriptive name, such as <code>useLocalStorage</code> or <code>useFetch</code> . They use built-in React hooks and/or other custom hooks to encapsulate reusable logic, and can return any values that are needed by the components that use them.'
          ],
          example: {
            title: 'Example',
            code: `import React, { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
}`,
            output: `import { useFetchData } from './useFetchData';

function MyComponent() {
  const data = useFetchData('https://api.example.com/data');
  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}`,
            type: 'code'
          }
        }
      ]
    },
    'higher-order-component': {
      title: 'Higher Order Component',
      sections: [
        {
          heading: 'Higher Order Component (HOC)',
          content: [
            '<strong>Usage Example:</strong>',
            'In this example, <code>withDataAndLoader</code> is a higher order component that fetches data and displays a loading message until the data is loaded. It then renders the wrapped component with the fetched data as a prop.'
          ],
          list: [
            'A <strong>Higher Order Component (HOC)</strong> is a design pattern in React that allows you to reuse component logic across multiple components.',
            'HOCs are functions that take a component as an argument and return a new component with enhanced functionality.',
            'The enhanced component can then be used in place of the original component.',
            'HOCs can be used to add functionality to a component, such as passing down props, adding state, or handling errors.',
            'They are a way to reuse logic across multiple components, without having to repeat code.'
          ],
          example: {
            title: 'Example',
            code: `import React, { useState, useEffect } from 'react';

function withDataAndLoader(Component) {
  return function WithLoader(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(props.url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      }

      fetchData();
    }, [props.url]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} />;
  };
}

export default withDataAndLoader;`,
            output: `import React from 'react';
import withDataAndLoader from './withDataAndLoader';

function MyComponent({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default withDataAndLoader(MyComponent);`,
            type: 'code'
          }
        }
      ]
    },
    routing: {
      title: 'Routing',
      sections: [
        {
          heading: 'Routing',
          content: [
            '--------',
            '	npm install --save react-router-dom@5',
            '-----------------------------',
            `import { BrowserRouter } from 'react-router-dom';`,
            '<BrowserRouter>',
            '      <App />',
            '</BrowserRouter>',
            '-------------------------------',
            '-',
            `<Link to='/login'>Login</Link>`,
            '<Route path="/users/:userId" component={User} />',
            'In the component, if we have fetch the dynamic id,we can get it from props.',
            'const userId = props.match.params.userId;',
            'In the above example, the third route has a parameter :userId in its path. This means that the path will match any URL that has /users/ followed by a dynamic value. The value will be available in the match.params object of the User component.',
            'You can then use this parameter to fetch the corresponding user data and render it in the component.',
            'How to define the component if path is not matching?',
            'In React Router Dom, if you want to define a path for components that do not match any of the other defined routes, you can use the <Route> component with no specified path prop and with the component prop set to the component you want to render.',
            `It's worth noting that when using the * path, it's important to place it as the last route in the Switch component, as it will match any path that comes after it, even if it would match a more specific route earlier in the list.`,
            `Here's an example:`,
            'In the above example, the Switch component is used to render only the first matching route. The first two routes have specific paths defined, while the third route does not. This means that if the user enters a URL that does not match any of the defined paths, the NotFound component will be rendered.',
            'For more information, please follow the below link',
            'https://reactrouter.com/en/main',
            'https://reactrouter.com/en/main/start/tutorial',
            'useHistory()',
            `useHistory is a hook provided by React Router Dom that allows you to access and manipulate the browser's history stack. You can use this hook to navigate between pages in your application, either by pushing new entries onto the stack or replacing the current entry with a new one.`,
            `Here's an example of how to use useHistory to navigate to a new page:`,
            `In the above example, useHistory is called to get access to the history object. The push() method of this object is then called when the button is clicked, which adds a new entry to the browser's history stack and navigates the user to the /new-page URL.`,
            'You can also use the replace() method of the history object to replace the current entry in the stack with a new one, instead of adding a new entry. Additionally, you can use the goBack() and goForward() methods to navigate to the previous or next entry in the stack, respectively.',
            `Note that it's important to only use push() or replace() to navigate within your application, rather than directly manipulating the window.location object. This ensures that the React Router Dom library is properly notified of any changes to the URL, which allows it to properly update the component tree and render the correct components for the new URL.`
          ],
          list: [
            'Routing is an important aspect of building a single-page application (SPA) in React. It allows you to navigate between different pages or views within the application, without triggering a full page refresh.',
            'If we want navigate from page to another page, we have to use the routing technique.',
            `React app is SPA application so using anchor tags(<a>) will reload the entire application hence data will be lost. State can't maintain the data on reload the page.`,
            'In React, for routing we can the routing libraries like react-router-dom.',
            'Follow the below steps to add the routing the app.',
            'Install the routing library using below command.',
            'Import BrowserRouter in the index.js file.',
            'Create the routing the App.js',
            'Create the route for each component',
            'Switch component will make sure that, at a time only one router is active.',
            'Add the links using the Link tag from react dom.',
            'For the dynamic routes, In the route configuration, we have declare as shown below.',
            'useHistory hook is used for navigation purpose.',
            'This hook is available from react-router-dom package.'
          ]
        },
        {
          heading: 'Example',
          code: `<Switch>
	  <Route path="/" exact>
		<Home />
	  </Route>

	  <Route path="/student" exact>
		<StudentInfo />
	  </Route>

	  <Route path="/organization" exact>
		<OrganizationInfo />
	  </Route>

	  <Route path="/employee" exact>
		<EmployeeInfo />
	  </Route>

	  <Route path="/login" exact>
		<Login />
	  </Route>

	  <Route path="/users/:userId" component={User} />

	</Switch>
function User(props) {
  const userId = props.match.params.userId;

  // Use the userId to fetch user data and render it

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');


  return (
    <div>
      <h1>User {userId}</h1>
      // render user details
    </div>
  );
}
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
		//<Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}
import { useHistory } from 'react-router-dom';

function MyComponent() {
  const history = useHistory();

  function handleClick() {
    history.push('/new-page');
    //history.replace('');
  }

  return (
    <div>
      <button onClick={handleClick}>Go to new page</button>
    </div>
  );
}`
        }
      ]
    },
    useLocation: {
      title: 'useLocation',
      sections: [
        {
          heading: 'useLocation',
          content: [
            '-----------',
            'To retrieve query parameter values in React Router Dom, you can use the useLocation hook provided by the library. The useLocation hook returns an object with information about the current URL, including the query parameters.',
            `Here's an example of how to use useLocation to retrieve the value of a query parameter:`,
            `import { useLocation } from 'react-router-dom';`,
            'function MyComponent() {',
            '  const location = useLocation();',
            '  const queryParams = new URLSearchParams(location.search);',
            `  const myParam = queryParams.get('myParam');`,
            '  return (',
            '    <div>',
            '      <p>Query parameter value: {myParam}</p>',
            '    </div>',
            '  );',
            '}',
            'In the above example, useLocation is called to get information about the current URL. The search property of the location object contains the query parameters as a string, which can be converted into a URLSearchParams object. You can then use the get() method of this object to retrieve the value of a specific query parameter.',
            'In this case, we retrieve the value of a query parameter called myParam and render it in the component. Note that the get() method returns null if the query parameter does not exist, so you may want to include some additional logic to handle this case.'
          ]
        }
      ]
    },
    'conditional-statements': {
      title: 'Conditional Statements',
      sections: [
        {
          heading: 'Conditional statements',
          content: [
            '-----------------------',
            'Conditional statements are a fundamental part of programming in React. They allow you to conditionally render UI elements based on the state of your application.',
            `In React, conditional statements can be written using JavaScript's conditional (ternary) operator, if-else statements, or switch statements.`,
            'Using Ternary operator',
            'The ternary operator is a concise way to write if-else statements. It takes three operands: a condition, a statement to execute if the condition is true, and a statement to execute if the condition is false.',
            `Here's an example of using the ternary operator to conditionally render a component based on a boolean value:`,
            'Using if-else statements',
            `If-else statements can be used to write more complex conditional logic in your React components. Here's an example of using an if-else statement to conditionally render a component based on multiple conditions:`,
            'Using && operator for only for the if conditions.',
            'In the below example it shows the username only if user is logged in.'
          ]
        },
        {
          heading: 'Example',
          code: `function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
	  {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }

    </div>
  );
}
function App() {
  const isLoggedIn = true;
  const isAdmin = true;
  if (isLoggedIn && isAdmin) {
    return <p>Welcome back, admin!</p>;
  } else if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
    </div>
  );
}`
        }
      ]
    },
    'iterating-array': {
      title: 'Iterating Array',
      sections: [
        {
          heading: 'Iterating array in React',
          content: [
            '---------------------',
            'In React, lists can be created using an array of data and the map() method. The map() method is called on the array and takes a function as an argument. This function is called for each element of the array and returns a new array of React elements.',
            'Keys:-',
            'In React, when we use the map() method to iterate over an array and create a list of elements, we should include a key prop on each element. The key prop is used by React to identify each element and track its changes in the virtual DOM. The key prop should be unique and constant for each element in the list.',
            'When we render a list of elements without providing a key prop, React will use the index of the element in the array as the key by default. However, using the index as the key can cause issues if the order of the list changes or if elements are added or removed. This can lead to unnecessary re-renders and slow down the performance of the application.',
            'By providing a unique and constant key prop for each element, React can efficiently update the DOM when the list changes without re-rendering all of the elements.',
            'What are react keys?',
            'A “key” is a special string attribute you need to include when creating lists of elements in React.',
            'Keys are used in React to identify which items in the list are changed, updated, or deleted.',
            'const numbers = [ 1, 2, 3, 4, 5 ];',
            'const updatedNums = numbers.map((number)=>{',
            'return <li key={index}>{number} </li>;',
            '});',
            'Example of iterating the posts using the fetch API.',
            'https://github.com/academind/react-complete-guide-code/tree/zz-reactjs-summary/extra-files'
          ],
          list: [
            'Keys help React identify which items have changed, are added, or are removed.'
          ]
        },
        {
          heading: 'Example',
          code: `const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const userList = users.map((user, index) => {
    return (
      <li key={user.id}>
        {user.name} ({user.email})
      </li>
    );
  });

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList}
      </ul>
    </div>
  );
}

export default UserList;
-------------------------

In this example, we are using the useState and useEffect hooks to manage state and fetch the data respectively. We initialize the users state to an empty array and use the useEffect hook to fetch the data from the JSONPlaceholder API when the component mounts.

Once we have the data, we use the map() method to iterate over it and create an array of <li> elements, which we store in the userList variable.

Finally, we render the list of elements within a <ul> element, along with a heading to indicate what the list is for.

Note that we have wrapped the returned JSX in a <div> element. This is because a React component must have a single root element, and in this case we are returning two elements (<h1> and <ul>).`
        }
      ]
    }
  },
  module5: {
    'forms-in-react': {
      title: 'Forms in React',
      sections: [
        {
          heading: 'Forms',
          content: [
            '------',
            'Controlled way:-',
            '------------------',
            'In React, a controlled component is a form element whose value is controlled by React state. This means that every time the user types something into a form input, the state is updated with the new value and the component is re-rendered with the new value.',
            'Using controlled components in React ensures that the form data is always in sync with the state, and allows us to add validation and other custom logic to the form.',
            `	const [firstName, setFirstName] = useState('');`,
            '	<input value={firstName} onChange={onFirstNameHandler}/>',
            'It imports useState from the React library and uses it to declare three state variables: username, password, and errors.',
            'There are three functions: handleUsername, handlePassword, and handleSubmitForm which are used to handle the events of changing the input fields of the form and submitting the form.',
            'The handleUsername function is called when the onChange event is triggered on the username input field. It sets the value of the username state variable to the value of the input field.',
            'The handlePassword function is called when the onChange event is triggered on the password input field. It sets the value of the password state variable to the value of the input field.',
            'The handleSubmitForm function is called when the onSubmit event is triggered on the form. It prevents the default behavior of the form, and then calls the validate function to validate the form data.',
            'The validate function checks whether the username and password fields are filled in or not, and sets the errors object accordingly. If there are no errors, it checks whether the entered username and password are correct or not. If they are correct, an alert message is shown indicating a successful login.',
            'The return statement contains the JSX code that defines the login form. It has two input fields for username and password, and a button to submit the form. It also has a link to the registration page.',
            'Conditional rendering is used to display error messages if there are any errors in the username and password fields.'
          ],
          list: [
            'Forms can be handled by 2 ways.',
            'Controlled way',
            'Uncontrolled way',
            'using useState() hook and onChange() events , we can implement controlled way.',
            'Create one useState hook for each input control.',
            'Assign the variable value to the input using "value" property.',
            'Handle the onChange event for the input and assign the latest value to input using the setter method.',
            'firstName always will have latest value since it binds with the HTML change event.'
          ]
        },
        {
          heading: 'Example',
          code: `import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({});

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmitForm(event){
    event.preventDefault();

    let errors = validate();
    let errorProps = Object.keys(errors);

    if(!errorProps.length){
      if(username == 'admin' && password == 'admin'){
        alert("success");
      }
    }

  }

  function validate(){
    let errorsObj = {};

    if(!username || !username.trim()){
      errorsObj.username = "Username is required";
    }else if(username.trim().length < 5){
      errorsObj.username = "Username is min 5 characters required.";
    }

    if(!password | !password.trim()){
      errorsObj.password =  "Password is required";
    }


    setErrors(errorsObj)
    return errorsObj;
  }

  return (
    <div>
      <div className="w-50 p-2 shadow m-auto mt-4">
        <form className="" onSubmit={handleSubmitForm}>
          <div className="mt-2">
            Username:
            <input className="form-control" value={username}  onChange={handleUsername}/>
          </div>
          {
            errors.username &&  <div>
            <small className="text-danger">{errors.username}</small>
          </div>
          }

          <div className="mt-2">
            Password:
            <input className="form-control" value={password} onChange={handlePassword}/>
          </div>
          {
            errors.password &&  <div>
            <small className="text-danger">{errors.password}</small>
          </div>
          }


          <div className="mt-2">
            <button className="btn btn-primary">Login</button>

            <Link to="/registration">Registration</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;`
        }
      ]
    },
    'uncontrolled-forms': {
      title: 'Uncontrolled Forms',
      sections: [
        {
          heading: 'Uncontrolled way',
          content: [
            '------------------',
            'In React, an uncontrolled component is a form element whose value is not controlled by React but rather by the DOM. This means that the state of the component is managed by the DOM itself rather than React.',
            'Uncontrolled components are generally easier to implement and require less code, but they can be more error-prone as they rely on the DOM to maintain state.',
            'Example for Uncontrolled way. useRef() hook will be used to handle the form elements.',
            '	const firstNameRef = useRef();',
            '	<input ref={firstNameRef} />',
            '	const firstName = firstNameRef.current.value;',
            'In this example, we are using the useRef hook to get a reference to the username and password input fields. When the form is submitted, we get the values of these input fields directly from the DOM using the value property and create a form data object. The form data object is then logged to the console.',
            'Note that we are not using any state variables to manage the state of the form fields. Instead, the DOM is responsible for maintaining the state of these fields.'
          ],
          list: [
            'using useRef() hook, we can implement uncontrolled way.',
            'Create one useRef hook for each input control.',
            'Assign the reference variable to the input using "ref" property.',
            'To get the value from the reference object, we can get from the current property as shown below.'
          ]
        },
        {
          heading: 'Example',
          code: `import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const usernameCtl = useRef("");
  const passwordCtl = useRef("");

  const [errors, setErrors] = useState({});

  function handleSubmitForm(event) {
    event.preventDefault();

    let username = usernameCtl.current.value;
    let password = passwordCtl.current.value;

    let errors = validate();
    let errorProps = Object.keys(errors);

    if (!errorProps.length) {
      if (username == "admin" && password == "admin") {
        alert("success");
      }
    }
  }

  function validate() {
    let errorsObj = {};
    let username = usernameCtl.current.value;
    let password = passwordCtl.current.value;

    if (!username || !username.trim()) {
      errorsObj.username = "Username is required";
    } else if (username.trim().length < 5) {
      errorsObj.username = "Username is min 5 characters required.";
    }

    if (!password | !password.trim()) {
      errorsObj.password = "Password is required";
    }

    setErrors(errorsObj);
    return errorsObj;
  }

  return (
    <div>
      <div className="w-50 p-2 shadow m-auto mt-4">
        <form className="" onSubmit={handleSubmitForm}>
          <div className="mt-2">
            Username:
            <input className="form-control" ref={usernameCtl} />
          </div>
          {errors.username && (
            <div>
              <small className="text-danger">{errors.username}</small>
            </div>
          )}

          <div className="mt-2">
            Password:
            <input className="form-control" ref={passwordCtl} />
          </div>
          {errors.password && (
            <div>
              <small className="text-danger">{errors.password}</small>
            </div>
          )}

          <div className="mt-2">
            <button className="btn btn-primary">Login</button>

            <Link to="/registration">Registration</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;`
        }
      ]
    },
    'redux-storejs-middleware-routing': {
      title: 'Redux/Store/Middleware/Routing',
      sections: [
        {
          heading: 'State management',
          content: [
            '----------------',
            '	1. Component state',
            '		- It is applicable only for the particular component.',
            '		- Using the useState hook we can maintain the component data.',
            '	2. Global state.',
            '		- Storing the data at application level is called global state.',
            '		- global state maintenance allows the avoiding of property drilling.',
            '------------------------------',
            'State management is an important concept in React, as it allows you to keep track of the current state of your application and make changes to that state over time. There are several approaches to state management in React, each with its own benefits and trade-offs.',
            `One popular approach is to use React's built-in useState hook. This allows you to define state variables within your functional components and update them using the setState method. Here's an example:`,
            `import React, { useState } from 'react';`,
            'function Counter() {',
            '  const [count, setCount] = useState(0);',
            '  function increment() {',
            '    setCount(count + 1);',
            '  }',
            '  function decrement() {',
            '    setCount(count - 1);',
            '  }',
            '  return (',
            '    <div>',
            '      <p>Count: {count}</p>',
            '      <button onClick={increment}>Increment</button>',
            '      <button onClick={decrement}>Decrement</button>',
            '    </div>',
            '  );',
            '}',
            'In this example, we define a state variable called count using the useState hook. We initialize it to 0 and provide two functions, increment and decrement, that update the count variable using the setCount method. We then render the current value of count along with two buttons that call the increment and decrement functions when clicked.',
            'Another approach to state management in React is to use a third-party library such as Redux or MobX. These libraries provide more advanced features for managing complex state, such as middleware, asynchronous actions, and time-travel debugging. However, they can also add additional complexity and boilerplate code to your application.',
            `Ultimately, the approach you choose for state management in React will depend on the specific needs of your application. For simple cases, using React's built-in useState hook may be sufficient, while for more complex cases, a third-party library may be necessary.`,
            '	export default const UserContextProvider = (props) => {',
            '		const [user, setUser] = useState("");',
            '		function updateLoginStatus(username) {',
            '			setUser(username);',
            '		}',
            '		return (<UserContext.Provider value={{username: user, updateLoginStatus: updateLoginStatus}}>',
            '					{props.children}',
            '				</UserContext.Provider>)',
            '	}',
            'Global state management in React refers to the management of application-wide state that can be accessed and modified by any component in the application, regardless of its location in the component tree.',
            'There are several popular libraries for global state management in React, including Redux, MobX, and Context API. In this answer, we will focus on the Context API, which is built into React and provides a simple way to manage global state.',
            `The Context API allows you to create a context object that can be used to share state between components. Here's an example:`,
            'import { createContext, useState } from "react";',
            'export const UserContext = createContext({',
            '    username: "",',
            '    login: (username) => {},',
            '});',
            'export const UserContextProvider = (props) => {',
            '    const [username, setUsername] = useState("");',
            '    function login(username) {',
            '        setUsername(username);',
            '    }',
            '    return (',
            '        <UserContext.Provider value={{username,login}}>',
            '            {props.children}',
            '        </UserContext.Provider>',
            '    )',
            '}',
            'In this example, we create a context object called CountContext using the React.createContext method. We define a state variable called count and two functions, increment and decrement, that update the count variable. We then wrap the Counter component in a CountContext.Provider component that passes the count, increment, and decrement values as the context value.',
            'In the DisplayCount component, we use the useContext hook to access the context value and render the current value of count.',
            'By using the Context API, we can share state between the Counter and DisplayCount components without passing props through the component tree. Any component that needs access to the count, increment, and decrement values can simply use the useContext hook to retrieve them from the context.',
            'const initialState = { value: 0 }',
            'function counterReducer(state = initialState, action) {',
            '  // Check to see if the reducer cares about this action',
            `  if (action.type === 'counter/increment') {`,
            '    // If so, make a copy of `state`',
            '    return {',
            '      ...state,',
            '      // and update the copy with the new value',
            '      value: state.value + 1',
            '    }',
            '  }',
            '  // otherwise return the existing state unchanged',
            '  return state',
            '}',
            `import { configureStore } from '@reduxjs/toolkit'`,
            'const store = configureStore({ reducer: counterReducer })',
            'console.log(store.getState())',
            '// {value: 0}',
            'const selectCounterValue = state => state.value',
            'const currentValue = selectCounterValue(store.getState())',
            'console.log(currentValue)',
            'import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";',
            `export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {`,
            `  const response = await fetch('https://trinitstechnologies.com/demo/api/v1/user')`,
            '  const data = await response.json();',
            '  return data',
            '})',
            'const initialState = {',
            `  username: '',`,
            '  isAuthenticated: false,',
            '  users: []',
            '};',
            'export const userSlice = createSlice({',
            '  name: "counter",',
            '  initialState,',
            '  reducers: {',
            '    userData: (state, action) => {',
            '      state.username =  action.payload;',
            '    },',
            '    authenticated: (state, action) => {',
            '      state.isAuthenticated = action.payload;',
            '    },',
            '  },',
            '  extraReducers(builder) {',
            '    builder.addCase(fetchUsers.fulfilled, (state, action) => {',
            '      console.log(action.payload);',
            '      state.users = state.users.concat(action.payload)',
            '      // return action.payload;',
            '    })',
            '  }',
            '});',
            '// Action creators are generated for each case reducer function',
            'export const { userData, authenticated } = userSlice.actions;',
            'export default userSlice.reducer;',
            `import { configureStore } from '@reduxjs/toolkit'`,
            `import counterReducer from '../features/counter/counterSlice'`,
            'export default configureStore({',
            '  reducer: {',
            '    counter: counterReducer',
            '  }',
            '})',
            '-----Store.js-------------------------',
            'import { configureStore } from "@reduxjs/toolkit";',
            'import userReducer from "./User.slice";',
            'const Store = configureStore({',
            '    reducer: {',
            '        user: userReducer,',
            '    }',
            '})',
            'export default Store;',
            '------------------------------',
            'Both Redux Thunk and Redux Saga are middleware libraries for Redux, which is a popular state management library for JavaScript applications. They are used to handle asynchronous actions, such as fetching data from a server, and to manage complex workflows in Redux.',
            'The main difference between Redux Thunk and Redux Saga is in the way they handle asynchronous actions.',
            'Redux Thunk:-',
            '------------',
            'It is a simpler and more lightweight library that allows you to write asynchronous logic in a simple and familiar way, using plain JavaScript functions that return other functions.',
            'It is easier to learn and understand, and is a good fit for small to medium-sized applications that do not have very complex workflows.',
            'It is best suited for handling simple asynchronous tasks such as making API requests and dispatching actions.',
            'Redux Saga:-',
            '------------',
            'It is a more advanced library that uses ES6 Generators to create a more powerful and flexible approach to handling asynchronous actions.',
            'It is better suited for larger and more complex applications, with more complex workflows and more advanced requirements.',
            'It provides more advanced features like cancelling or retrying failed requests, and provides more control over the flow of actions and side effects.',
            'In summary, Redux Thunk is a simpler and more lightweight solution for handling asynchronous actions in Redux, while Redux Saga is a more advanced and flexible solution for managing complex workflows with advanced requirements.',
            'Handle invalid routes:-',
            '----------------------',
            '-------------------------------',
            '<Route path="**">',
            '  <PageNotFound />',
            '</Route>',
            '-------------------------------',
            'How to protect the routes in the React app?',
            'visible to the user.'
          ],
          list: [
            'Storing the application data is called state management.',
            'In react we can manage state mainly by 2 ways.',
            'Component state management:-',
            `For invalid routes, Add a separate route with path '**'`,
            'This route should be the last route path in the routes files.',
            'Whenever no routes matches to the given url, then PageNotFound will be displayed.',
            'If the user is not authenticated or not authorized for particular routes, then those routes should not be',
            'Add the routes using JSX syntax only if the user is successfully logged in.'
          ]
        },
        {
          heading: 'Example',
          code: `Props drilling:-
-----------------------
In React, props drilling refers to the process of passing data down the component tree by passing props through multiple levels of components. This can become an issue in larger applications, where components may be nested deeply in the component tree, as it can make it difficult to manage and maintain the flow of data.

Props drilling can be avoided in a few ways:

Context API: Context API allows data to be passed down the component tree without having to pass props through each level of components. The data can be accessed by any component that is a child of the Provider component.

Redux: Redux is a state management library that can be used to manage data in larger applications. It provides a centralized store where all the data is stored and can be accessed by any component.

2. Global state management:-
--------------------------
Global state management in React refers to the management of application-wide state that can be accessed and modified by any component in the application, regardless of its location in the component tree.

Global state can be stored mainly using 2 ways:
1. React Context
2. Redux state

1. React Context:-
-----------------
- React context is used to maintain the global state.
- React context avoids the property drilling.
- The Context API allows you to create a context object that can be used to share state between components. Here's an example:

Steps:-
--------
1. Create the react context.
	export const UserContext = createContext({
		username: '',
		updateLoginStatus: (username) => {}
	})

- Context takes the Object as an argument. We can write the required global state variables in this object.
- For example, we want maintain the logged in user name so add username in the object.

2. Create the ContextProvider object.
- Write the methods and variables are required in the state.

3. Go to index.js and use the Context provider.
	<UserContextProvider>
		<App />
	</UserContextProvider>

4. Go to any component, get the latest value from the React context using the useContext hook.
	function Header() {
	  const userObj = useContext(UserContext);

	  return (
		<>
		  <h2>{userObj.username}</h2>
		</>
		);
	}

5. If we want update the any state, then call the methods which are available in the context provider.
	function ExpenseChild() {
	  const userObj = useContext(UserContext);

	  return (
		<>
		  <button onClick={() => userObj.updateLoginStatus('Test')}>Login</button>
		</>
		);
	}



Redux:-
------
- Redux is a pattern and library for managing and updating application state, using events called "actions".

- Redux is used to maintain the global state.
- Redux avoids the property drilling.
- For Redux, we can install the redux toolkit.

Redux Toolkit:-
-------------
Redux Toolkit is a popular library for building and managing state in React applications that use Redux. It provides a set of utilities and conventions that make it easier to write Redux code by reducing the amount of boilerplate code you need to write.

One of the key features of Redux Toolkit is its createSlice function, which is a tool for defining Redux reducers. A reducer is a pure function that takes the current state and an action, and returns the new state. With createSlice, you can define a reducer in a simpler, more intuitive way than with the standard Redux createReducer function.

Redux using redux toolkit.
1. Install redux toolkit
npm install @reduxjs/toolkit react-redux

https://redux-toolkit.js.org/introduction/getting-started
https://react-redux.js.org/tutorials/quick-start

Redux has mainly 4 parts.
1. Actions
2. Reducer
3. Store
4. View

Actions:-
-------
An action is a plain JavaScript object that has a type field.
- Action is like an event that describes something that happened in the application.
- The type value should be unique. The type field should be a string that gives this action a descriptive name, like "todos/todoAdded".

----------------------
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
----------------------

Reducer:-
--------
- A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState

Reducers must always follow some specific rules:
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"
Store:-
------
- All application data will be stored in the Store object.
- The store is created by passing in a reducer, and has a method called getState that returns the current state value



Dispatch:-
--------
- dispatch method should be used to update the store dynamically.
- dispatch method takes the action as an argument.

------------------------
store.dispatch({ type: 'counter/increment' })
-------------------------

Selectors:-
-----------
- Using selectors, we can get the value from store state value.
- Selectors are functions that know how to extract specific pieces of information from a store state value.


Steps:-
https://redux.js.org/tutorials/essentials/part-2-app-structure

1. Create a Redux Slices file.
A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.

2. Configure the Store.
The Redux store is created using the configureStore function from Redux Toolkit. configureStore requires that we pass in a reducer argument.

3. Providing the Store
----------------------
We always have to call ReactDOM.render(<App />) to tell React to start rendering our root <App> component. In order for our hooks like useSelector to work right, we need to use a component called <Provider> to pass down the Redux store behind the scenes so they can access it.

-------------------------------
import { Provider } from 'react-redux'
import Store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
  </Provider>,
    </BrowserRouter>
  </React.StrictMode>
);
-------------------------------

4. To update the data to the store, we have to dispatch the action.
- We can dispatch the action to update the data to the store.
---------------------------
import { authenticated } from '../../store/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const username = useSelector((state) => state.user.username);
const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
const dispatch = useDispatch();
dispatch(authenticated(username));
---------------------------


5. To get the latest data from the store, we have to use 'useSelector'
- We can useSelector hook used to get data from store object.
---------------------------
import { useSelector } from 'react-redux'

const username = useSelector((state) => state.user.username);
const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
---------------------------


--------userSlice.js-----------------------------------------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../Hooks/Api";
import { USERS_URL } from "../utils/Endpoints";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = API.get(USERS_URL);
  const data = await response.data;
  return data;
});

const initialState = {
  username: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const classNames = isAuthenticated ? "main-content" : "main-content w-100";

  let protectedContent;
  if (isAuthenticated) {
    protectedContent = (
      <>
        <Route path="/companies">
          <Companies />
        </Route>

        <Route path="/employees">
          <Employees />
        </Route>

        <Route path="/report">
          <Reports />
        </Route>

        <Route path="/settings">
          <Settings />
        </Route>
      </>
    );
  }

  {protectedContent}`
        }
      ]
    },
    'lazy-loading': {
      title: 'Lazy Loading',
      sections: [
        {
          heading: 'Lazy loading',
          content: [
            '-------------'
          ],
          list: [
            'Lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.',
            'Each module can be loaded only when it is required.',
            'React 16.6+, react added React Suspense which performs lazy loading.'
          ]
        },
        {
          heading: 'Example',
          code: `import React, { Suspense } from "react";
const Customer = React.lazy(() => import("./Customer.js"));
const Admin = React.lazy(() => import("./Admin.js"));

//Instead of regular import statements, we will use the above approach for lazy loading

export default (props) => {
	if (props.user === "admin") {
		return (
			// fallback component is rendered until our main component is loaded
			<Suspense fallback={<div>Loading</div>}>
				<Admin />
			</Suspense>
		);
	} else if (props.user === "customer") {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Customer />
			</Suspense>
		);
	} else {
		return <div> Invalid User </div>;
	}
};`
        }
      ]
    },
    'third-party-libraries': {
      title: 'Third Party Libraries',
      sections: [
        {
          heading: 'Third party libraries',
          content: [
            'React tooltip:-',
            '---------------',
            'npm install react-tooltip',
            'React icons:-',
            '-------------',
            'npm install react-icons --save',
            'Toast library:-',
            '--------------',
            'https://www.npmjs.com/package/react-toastify',
            `import { ToastContainer, toast } from 'react-toastify';`,
            `import 'react-toastify/dist/ReactToastify.css';`,
            '<ToastContainer />',
            'toast.success("Successfully logged in");',
            'toast.error(',
            '        "Error while login process. Check your username and password",',
            '        {',
            '          position: "bottom-left",',
            '          autoClose: 5000,',
            '          hideProgressBar: false,',
            '          closeOnClick: true,',
            '          pauseOnHover: true,',
            '          draggable: true,',
            '          progress: undefined,',
            '          theme: "light",',
            '        }',
            '      );',
            'Node-sass library:-',
            '-----------------',
            'Node-sass is a popular library for Node.js that provides binding for Sass, a CSS preprocessor. It allows developers to write CSS code in a more structured and organized way, with features such as variables, mixins, and nested rules.',
            'When using node-sass with React, developers can import .scss files directly into their React components and use Sass syntax in their styles. This can help make the code more modular and easier to maintain.',
            'To use node-sass with React, you will first need to install it as a dependency using npm:',
            'npm install node-sass',
            `Import this file to the component you are working or index.js. You don't need import the node-sass to the component.`,
            '------colors.scss------------------------',
            '$primary-color: #007bff;',
            '$secondary-color: #6c757d;',
            '@mixin button-styles {',
            '  background-color: $primary-color;',
            '  color: white;',
            '  padding: 10px;',
            '  border: none;',
            '  border-radius: 5px;',
            '  cursor: pointer;',
            '  &:hover {',
            '    background-color: $secondary-color;',
            '  }',
            '}',
            '------------------------------',
            '-----------header.scss-----------------------------------',
            `@import './colors.scss';`,
            '.my-component {',
            '  h1 {',
            '    color: $primary-color;',
            '  }',
            '  button {',
            '    @include button-styles;',
            '  }',
            '}',
            'header {',
            '  background-color: #61dbfb;',
            '  padding: 25;',
            '  padding: 10px;',
            '  margin: 0;',
            '}'
          ],
          list: [
            'Tooltips help users for displaying the help text.',
            'Install the library to the project.',
            `import ReactTooltip from 'react-tooltip';`,
            'Add data-tip = "your placeholder" to your element',
            'Include react-tooltip component',
            'To display the any icons, we can use react-icons library.',
            'Install the library to the project.',
            'Import the icon and use that as a tag.',
            'To show the toast messages, we can use the react-toast library.',
            'Add these to the app.js',
            'Go to the any class where you want to notify, call the below method.',
            'After installing node-sass you can start using Sass in React. Create a styles folder and inside this folder create test.scss.'
          ]
        },
        {
          heading: 'Example',
          code: `import ReactTooltip from 'react-tooltip';

<h1 id="app-title" style={{ backgroundColor: "#999" }}>
          Hello Tooltip Example
</h1>
<ReactTooltip
        anchorId="app-title"
        place="top"
        content="Hello world! I'm a Tooltip"
      />
import { FaBeer } from 'react-icons/fa';
<h3> Lets go for a <FaBeer />? </h3>
SASS:-
------
- Syntactically Awesome Stylesheet
- Sass is a CSS pre-processor.
- Sass reduces repetition of CSS and therefore saves time.
- Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

Sass files has the ".scss" file extension.

variables:-
---------
- To reuse the properties
- global indicates that a variable is global, which means that it is accessible on all levels.

\$variablename: value;
\$myFontSize: 18px;
\$primary_1: #a2b9bc;
\$primary_2: #b2ad7f;
\$primary_3: #878f99;

#container {
  width: \$myWidth;
}

h1 {
  \$myColor: green !global; //global variable
  color: \$myColor;   //local variable
}

Nested Rules:-
-------------
- Sass lets you nest CSS selectors in the same way as HTML.
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

Sass Importing Files:-
-----------------
@import filename;


Mixins:-
-------
@mixin directive lets you create CSS code that is to be reused throughout the website.

The @include directive is used to include a mixin.

@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}

selector {
  @include mixin-name;
}

@extend:-
--------
- The @extend directive lets you share a set of CSS properties from one selector to another.
- .button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}`
        }
      ]
    },
    'moment-library': {
      title: 'Moment Library',
      sections: [
        {
          heading: 'Moment library',
          content: [
            '---------------',
            'Moment is a popular JavaScript library for parsing, validating, manipulating, and formatting dates and times. It provides a simple and intuitive API that allows developers to work with dates and times in a variety of formats and timezones.',
            'react-moment is a lightweight wrapper around Moment that allows you to use Moment as a React component. This can make it easier to work with dates and times in your React project, especially if you need to display them in a specific format or update them dynamically.',
            'When using Moment in a React project, you can install it as a dependency using npm or yarn:',
            'npm install --save moment react-moment'
          ]
        },
        {
          heading: 'Example',
          code: `import React from 'react';
import moment from 'moment';

function MyComponent() {
  const date = moment('2022-03-27T12:00:00Z');
  const formattedDate = date.format('MMM DD, YYYY');

  return (
    <div>
      <p>The date is: {formattedDate}</p>
    </div>
  );
}

In this example, we are creating a Moment object from a string representing a date and time in ISO 8601 format (2022-03-27T12:00:00Z). We then format the date using the format method and display it in our component.

Moment provides a wide range of formatting options, as well as methods for manipulating and comparing dates and times. It also supports working with timezones and localization. By using Moment in your React project, you can make working with dates and times much easier and more efficient.


import React from 'react';
import Moment from 'react-moment';

function MyComponent() {
  return (
    <div>
      <p>The date is: <Moment format="DD/MM/YYYY">2022-03-27T12:00:00Z</Moment></p>
      <p>DOB is: <Moment format="DD/MM/YYYY">{empModel.doj}</Moment></p>
    </div>
  );
}`
        }
      ]
    },
    'lifecycle-of-components': {
      title: 'Lifecycle of Components',
      sections: [
        {
          heading: 'Lifecycle of Components',
          content: [
            'Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.',
            'Below phases are available:',
            '------------',
            '	- Whenever object is created, constructor will be executed.',
            '	- This is the first method called during the creation of a component instance.',
            '	- It is best places to do the initalization, setup the state variables.',
            '	- This method is called before the initial render of a component, and any time new props are passed to the component.',
            `	- It is used to update the component's state based on the props that were passed.`,
            '	- This method is required for all React components. It is used to generate the HTML markup for the component based on its current props and state.',
            '	- This method is called after the initial render of a component. It is used to perform any tasks that require access to the DOM, such as setting up event listeners or fetching data from a server.',
            '-----------',
            '	- Also at updates this method is called. This is the first method that is called when a component gets updated.',
            `	- This method is called when new props are received by the component. It is used to update the component's state based on the new props.`,
            '	- Returns a Boolean value that specifies whether React should continue with the rendering or not.',
            '	- if it returns false then component will not be updated. Default value is true.',
            '	-  This method is called before a component is updated. It is used to determine whether the component should re-render or not, based on changes to its props or state.',
            '	- It is called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.',
            '	- This method provides the previous state and property value.',
            '	- If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.',
            '	- This method is called after the component is updated in the DOM.',
            `	- It is used to perform any tasks that require access to the DOM or the component's state or props, such as updating a chart or triggering an animation.`,
            '-----------',
            '	- The componentWillUnmount method is called when the component is about to be removed from the DOM.',
            '	-  It is used to clean up any resources that the component has acquired, such as event listeners or timers.',
            '--------------------',
            '	- This method is called when a child component throws an error. It is used to update the state of the parent component based on the error.',
            '	- This method is called after a child component throws an error. It is used to log the error or display an error message to the user.'
          ],
          list: [
            'Mounting phase',
            'Updating phase',
            'Unmounting phase',
            'Error handling phase',
            'Mounting:-',
            'Mounting means putting elements into the DOM.',
            'constructor(props)',
            'static getDerivedStateFromProps(props, state)',
            'render()',
            'componentDidMount()',
            'Updating phase:-',
            `A component is updated whenever there is a change in the component's state or props.`,
            'static getDerivedStateFromProps(nextProps, prevState)',
            'shouldComponentUpdate(nextProps, nextState)',
            'render()',
            'getSnapshotBeforeUpdate()',
            'componentDidUpdate(prevProps, prevState)',
            'Unmounting:-',
            'When a component is removed from the DOM, or unmounting as React likes to call componentWillUnmount().',
            'componentWillUnmount()',
            'Error handling phase:-',
            'static getDerivedStateFromError(error):-',
            'componentDidCatch(error, info):-'
          ]
        },
        {
          heading: 'Example',
          code: `import { Component } from "react";

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Trinits",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props.age);
    return {
      ...state,
      age: props.age,
    };
  }

  render() {
    console.log("render");
    return (
      <div>
        Test component {this.state.name} {this.state.age} {this.state.salary}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      console.log("componentDidMount 1");
      this.setState({
        salary: 5000,
      });
    }, 5000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
	//return nextState.count !== this.state.count;
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(
      "getSnapshotBeforeUpdate " + state.salary + "" + this.state.salary
    );

    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.salary);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}`
        }
      ]
    },
    build: {
      title: 'Build',
      sections: [
        {
          heading: 'Build',
          content: [
            `In React, the build process is the process of converting the application's source code into a format that can be executed by a web browser. This process involves several steps, including compiling the application's JavaScript code, bundling the code into a single file, optimizing the file for performance, and creating any necessary static assets (such as CSS files and images).`,
            `To build a React application, you can use the <code>npm run build</code> command. This command will run the build script defined in the application's <code>package.json</code> file, which typically uses a tool such as Webpack or Babel to compile and bundle the application's code.`,
            `During the build process, the application's code is transformed and optimized for production use. This includes removing any debug code, minifying and compressing the JavaScript, and concatenating and optimizing CSS files.`,
            'Once the build process is complete, the resulting files can be deployed to a web server and served to users. The optimized code and assets produced by the build process help to ensure that the application loads quickly and performs well, providing a better user experience.',
            `<strong> It's important to note that the build process should be run before deploying the application to a production environment. </strong> This ensures that the application's code is optimized and ready for production use.`,
            'In the <code>package.json</code> , add the <code>homepage</code> property to specify the root URL for your deployed app:',
            'For more details, see the <a href="https://create-react-app.dev/docs/deployment/" target="_blank"> Create React App deployment documentation </a> .',
            'If you are deploying to a static file server (such as GitHub Pages), use <code>HashRouter</code> instead of <code>BrowserRouter</code> to avoid routing issues:'
          ],
          list: [
            'Once the project is completed, we have to deliver the project to the customers. For that, we have to build our project.',
            'Run the below command to build the application:',
            'This command will generate the <strong>build</strong> folder. You can deploy this build folder to your server.',
            '<a href="https://github.com/brillout/awesome-react-components#table" target="_blank"> Awesome React Components </a>',
            '<a href="https://technostacks.com/blog/react-component-libraries/" target="_blank"> React Component Libraries </a>'
          ],
          example: {
            title: 'Example',
            code: 'npm run build',
            output: `"homepage": "https://trinitstechnologies.com/demo/payroll",

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);`,
            type: 'code'
          }
        }
      ]
    },
    deployment: {
      title: 'Deployment',
      sections: [
        {
          heading: 'Deployment',
          content: [
            'Deploying the build to the server from where customers can access the project as a URL.',
            '<strong>Deployment</strong> refers to the process of making a software application or system available for use. It involves taking the application or system that has been developed, and making it available on a server or other platform so that it can be accessed by users.',
            'Deployment involves a series of steps, such as preparing the application for deployment, configuring the deployment environment, and installing the application onto the deployment platform. Once the application is deployed, it can be accessed by users and used to perform the functions for which it was designed.',
            'Deployment is an important aspect of software development, as it enables developers to share their work with others and make it available for use. It also allows for updates and improvements to be made to the application over time, ensuring that it remains relevant and effective in meeting the needs of its users.'
          ],
          list: [
            '<strong>Deploy to a static hosting service:</strong> There are many static hosting services available, such as <a href="https://www.netlify.com/" target="_blank">Netlify</a> , <a href="https://vercel.com/" target="_blank">Vercel</a> , and <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> . To deploy your React project to a static hosting service, you need to build your application using the <code>npm run build</code> command, which will create a production-ready build of your app. Once the build is complete, you can simply upload the generated files to the hosting service.',
            '<strong>Deploy to a cloud hosting service:</strong> You can also deploy your React project to a cloud hosting service, such as AWS or Google Cloud Platform. These services require a bit more setup and configuration than static hosting services, but they can offer more flexibility and scalability. You will need to create an instance, set up a web server, and configure the server to serve your React app.',
            '<strong>Manual deployment:</strong> Manual deployment refers to the process of deploying a software application or system by manually carrying out each step of the deployment process. This typically involves a series of manual tasks, such as configuring the deployment environment, installing the necessary software components, and uploading the application files to the deployment platform. Manual deployment can be time-consuming and prone to errors, as each step must be carried out carefully and in the correct order. However, it can be useful for smaller applications or when deploying to a simple infrastructure that does not require complex automation or orchestration.',
            '<strong>Automatic deployment:</strong> Automatic deployment, also known as automated deployment, refers to the process of deploying a software application or system using automated tools and scripts. This approach aims to reduce manual intervention and streamline the deployment process, making it faster, more efficient, and less prone to errors. Automated deployment typically involves the use of continuous integration and continuous delivery (CI/CD) pipelines. These pipelines automate the building, testing, and deployment of the application, allowing changes to be pushed from development to production quickly and reliably. There are many benefits to using automated deployment. It allows for more frequent and predictable releases, reduces the risk of human error, and enables faster time-to-market for new features and improvements. It also facilitates collaboration between development and operations teams, as it encourages regular communication and coordination between the two groups.'
          ]
        }
      ]
    },
    'cicd-pipeline': {
      title: 'CI/CD Pipeline',
      sections: [
        {
          heading: 'CI/CD Pipeline',
          content: [
            '<strong>Continuous Integration and Continuous Development (CI/CD)</strong>',
            'A CI/CD (Continuous Integration/Continuous Delivery) pipeline is a series of automated steps that are used to build, test, and deploy a software application or system. The pipeline is designed to automate the process of delivering code changes from development to production, in a reliable and efficient way.'
          ],
          list: [
            '<strong>Source code management:</strong> Managing the source code for the application, typically using a version control system like Git.',
            '<strong>Continuous integration:</strong> Building the application and running automated tests to ensure that it meets quality standards. Developers can make code changes and commit them to the source code repository, and the pipeline will automatically trigger a build and test cycle.',
            '<strong>Continuous delivery:</strong> Deploying the application to a staging environment for further testing and validation. This stage can include additional automated testing, such as load testing and security testing, to ensure that the application is ready for production.',
            '<strong>Continuous deployment:</strong> Deploying the application to the production environment, typically using automated tools and scripts. This stage can include additional steps to ensure that the deployment is safe and reliable, such as rolling updates and automated rollback in case of errors.',
            'Jenkins is an open-source automation server that helps to automate the building, testing, and deployment of software applications. It is widely used in software development to enable CI/CD pipelines.',
            'Jenkins allows developers to define a series of automated steps that are used to build, test, and deploy their applications. These steps can be triggered automatically by events such as code changes or can be scheduled to run at specific intervals.',
            '<strong>Integration with version control systems:</strong> Jenkins can integrate with popular version control systems such as Git, SVN, and Mercurial to automatically trigger builds and tests when code changes are made.',
            '<strong>Build step example:</strong> <div class="bg-dark text-light p-2 rounded mb-2" style="font-family: monospace"> </div>',
            'After the build is done in Jenkins, copy the build to the server automatically.'
          ],
          code: 'npm run build'
        }
      ]
    }
  }
};
