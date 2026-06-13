// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.492Z

export const javascriptQuestions = {
  "questions": [
    {
      "question": "JS Programs",
      "answer": "<ol>\n                <li>\n                  <strong>Reverse of string or array:</strong>\n                  <br>\n                  <code>\n                    let data = [1, 2, 5, 4, 6, 7];\n                    \n\n                    console.log(data.reverse()); // Output: [7, 6, 4, 5, 2, 1]\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Class with name, age, email and print multiple objects:</strong>\n                  <br>\n                  <code>\n                    class Data {\n                    \n\n                      constructor(name, age, email) {\n                    \n\n                        this.name = name;\n                    \n\n                        this.age = age;\n                    \n\n                        this.email = email;\n                    \n\n                      }\n                    \n\n                    }\n                    \n\n                    \n\n\n                    const arr = [\n                    \n\n                      new Data(\"a\", 10, \"a@a.com\"),\n                    \n\n                      new Data(\"b\", 20, \"b@b.com\"),\n                    \n\n                      new Data(\"c\", 30, \"c@c.com\")\n                    \n\n                    ];\n                    \n\n                    \n\n\n                    for (let i = 0; i &lt; arr.length; i++) {\n                    \n\n                      const element = arr[i];\n                    \n\n                      console.log(element.name + \"\\t\" + element.age + \"\\t\" +\n                    element.email);\n                    \n\n                    }\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Object Destructuring:</strong>\n                  <br>\n                  <code>\n                    const person = {\n                    \n\n                      name: \"rajesh\",\n                    \n\n                      address: { city: \"san fransco\", age: 10 }\n                    \n\n                    };\n                    \n\n                    \n\n\n                    const { name } = person;\n                    \n\n                    console.log(name); // Output: rajesh\n                    \n\n                    const { address: { city } } = person;\n                    \n\n                    console.log(city); // Output: san fransco\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Reverse each word in a string inside an object:</strong>\n                  <br>\n                  <code>\n                    const person = {\n                    \n\n                      name: \"rajesh\",\n                    \n\n                      address: { city: \"san fransco\", age: 10 }\n                    \n\n                    };\n                    \n\n                    \n\n\n                    const { address: { city } } = person;\n                    \n\n                    const reversed = city.split(' ').map(word =&gt;\n                    word.split('').reverse().join('')).join(' ');\n                    \n\n                    console.log(reversed); // Output: nas ocnsarf\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Find occurrence of each character in a string:</strong>\n                  <br>\n                  <code>\n                    let data = \"enginering\";\n                    \n\n                    let occurrence = {};\n                    \n\n                    \n\n\n                    for (let char of data) {\n                    \n\n                      occurrence[char] = (occurrence[char] || 0) + 1;\n                    \n\n                    }\n                    \n\n                    \n\n                    console.log(occurrence);\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Find missing number in array:</strong>\n                  <br>\n                  <code>\n                    let data = [1, 2, 3, 4, 6, 7, 8, 9];\n                    \n\n                    let missingNumber = 0;\n                    \n\n                    \n\n\n                    for (let i = 0; i &lt; data.length; i++) {\n                    \n\n                      if (data[i] + 1 !== data[i + 1]) {\n                    \n\n                        missingNumber = data[i] + 1;\n                    \n\n                        break;\n                    \n\n                      }\n                    \n\n                    }\n                    \n\n                    console.log(\"Missing number:\", missingNumber); // Output: 5\n                  </code>\n                </li>\n              </ol>\n\n              \n              <ol>\n                <li>\n                  <strong>let & const:</strong>\n                  Block-scoped variables that replace\n                  <br>\n                  <code>var</code>\n                  .\n                  <code>\n                    let name = \"John\";\n                    \n\n                    name = \"Doe\"; // ✅ Allowed const age = 30;\n                    \n\n                    age = 40; // ❌ Error: Assignment to constant variable\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Template Literals:</strong>\n                  Use backticks (\n                  <code>` `</code>\n                  ) for multi-line strings and variable interpolation.\n                  <br>\n                  <code>\n                    const name = \"Alice\";\n                    \n\n                    const message = `Hello, ${\"$\"}{name}!`;\n                    \n\n                    console.log(message); // Output: Hello, Alice!\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Arrow Functions:</strong>\n                  A shorter syntax for functions.\n                  <br>\n                  <code>\n                    const add = (a, b) =&gt; a + b;\n                    \n\n                    console.log(add(5, 3)); // Output: 8\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Destructuring:</strong>\n                  Extract values from arrays or objects easily.\n                  <br>\n                  <code>\n                    const person = { name: \"Alice\", age: 25 };\n                    \n\n                    const {\"{\"} name, age {\"}\"} = person;\n                    \n\n                    console.log(name, age); // Output: Alice 25\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Spread & Rest Operators:</strong>\n                  <ul>\n                    <li>\n                      <strong>\n                        Spread (\n                        <code>...</code>\n                        ):\n                      </strong>\n                      Expands arrays or objects.\n                    </li>\n                    <li>\n                      <strong>\n                        Rest (\n                        <code>...</code>\n                        ):\n                      </strong>\n                      Collects multiple arguments into an array.\n                    </li>\n                  </ul>\n                  <code>\n                    // Spread Example\n                    \n\n                    const arr1 = [1, 2, 3];\n                    \n\n                    const arr2 = [...arr1, 4, 5];\n                    \n\n                    console.log(arr2); // Output: [1, 2, 3, 4, 5]\n                    \n\n                    \n\n\n                    // Rest Example\n                    \n\n                    const sum = (...numbers) =&gt; numbers.reduce((a, b) =&gt; a + b, 0);\n                    \n\n                    console.log(sum(1, 2, 3, 4)); // Output: 10\n                  </code>\n                </li>\n\n                <li>\n                  <strong>for...of Loop:</strong>\n                  Used for iterating over iterable objects like arrays.\n                  <br>\n                  <code>\n                    const numbers = [10, 20, 30];\n                    \n\n                    for (const num of numbers) {\n                    \n\n                    console.log(num); // Output: 10 20 30\n                    \n\n                    }\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Promises:</strong>\n                  Handle asynchronous operations.\n                  <br>\n                  <code>\n                    const fetchData = () =&gt; {\n                    \n\n                    return new Promise((resolve, reject) =&gt; {\n                    \n\n                    setTimeout(() =&gt; resolve(\"Data fetched!\"), 2000);\n                    \n\n                    });\n                    \n\n                    };\n                    \n\n                    \n\n\n                    fetchData().then(data =&gt; console.log(data)); // Output (after 2 sec): Data\n                    fetched!\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Classes:</strong>\n                  Introduces object-oriented programming in JavaScript.\n                  <br>\n                  <code>\n                    class Person {\n                    \n\n                    constructor(name, age) {\n                    \n\n                    this.name = name;\n                    \n\n                    this.age = age;\n                    \n\n                    }\n                    \n\n                    greet() {\n                    \n\n                    console.log(`Hello, my name is ${\"$\"}{this.name}`);\n                    \n\n                    }\n                    \n\n                    }\n                    \n\n                    \n\n\n                    const john = new Person(\"John\", 30);\n                    \n\n                    john.greet(); // Output: Hello, my name is John\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Modules:</strong>\n                  Helps in writing modular and reusable JavaScript code.\n                  <br>\n                  <br>\n                  <strong>Export (module.js):</strong>\n                  <br>\n                  <code>\n                    export const name = \"Alice\";\n                    \n\n                    export function greet() {\n                    \n\n                    return \"Hello!\";\n                    \n\n                    }\n                  </code>\n                  <br>\n                  <br>\n                  <strong>Import (main.js):</strong>\n                  <code>\n                    import {\"{\"} name, greet {\"}\"} from \"./module.js\";\n                    \n\n                    console.log(name); // Output: Alice\n                    \n\n                    console.log(greet()); // Output: Hello!\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Default Parameters:</strong>\n                  Allows function parameters to have default values.\n                  <br>\n                  <code>\n                    const greet = (name = \"Guest\") =&gt; `Hello, ${\"$\"}{name}!`;\n                    \n\n                    console.log(greet()); // Output: Hello, Guest!\n                    \n\n                    console.log(greet(\"Bob\")); // Output: Hello, Bob!\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Reverse of string or array: let data = [1, 2, 5, 4, 6, 7]; console.log(data.reverse()); // Output: [7, 6, 4, 5, 2, 1]",
        "Find occurrence of each character in a string: let data = \"enginering\"; let occurrence = {}; for (let char of data) { occurrence[char] = (occurrence[char] || 0) + 1; } console.log(occurrence);",
        "Find missing number in array: let data = [1, 2, 3, 4, 6, 7, 8, 9]; let missingNumber = 0; for (let i = 0; i"
      ]
    },
    {
      "question": "Rest and spread operator with examples in js?",
      "answer": "<ol>\n                <li>\n                  The\n                  <strong>rest operator</strong>\n                  (\n                  <code>...</code>\n                  ) is used to collect multiple elements into an array.\n                  <ul>\n                    <li>\n                      Example: Collecting function arguments.\n                      <pre><code class=\"javascript\">\n              function sum(...numbers) {\n                  return numbers.reduce((acc, curr) =&gt; acc + curr, 0);\n              }\n              console.log(sum(1, 2, 3, 4)); // Output: 10\n                      </code></pre>\n                    </li>\n                    <li>\n                      Example: Using rest in destructuring.\n                      <pre><code class=\"javascript\">\n              const [first, second, ...rest] = [1, 2, 3, 4, 5];\n              console.log(first);  // Output: 1\n              console.log(second); // Output: 2\n              console.log(rest);   // Output: [3, 4, 5]\n                      </code></pre>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  The\n                  <strong>spread operator</strong>\n                  (\n                  <code>...</code>\n                  ) is used to expand an iterable (like an array or object) into individual\n                  elements.\n                  <ul>\n                    <li>\n                      Example: Spreading an array.\n                      <pre><code class=\"javascript\">\n              const arr1 = [1, 2, 3];\n              const arr2 = [...arr1, 4, 5];\n              console.log(arr2); // Output: [1, 2, 3, 4, 5]\n                      </code></pre>\n                    </li>\n                    <li>\n                      Example: Spreading an object.\n                      <pre><code class=\"javascript\">\n              const obj1 = { a: 1, b: 2 };\n              const obj2 = { ...obj1, c: 3 };\n              console.log(obj2); // Output: { a: 1, b: 2, c: 3 }\n                      </code></pre>\n                    </li>\n                    <li>\n                      Example: Using spread with function arguments.\n                      <pre><code class=\"javascript\">\n              function multiply(x, y, z) {\n                  return x * y * z;\n              }\n              const numbers = [2, 3, 4];\n              console.log(multiply(...numbers)); // Output: 24\n                      </code></pre>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  A combined example of rest and spread operators:\n                  <pre><code class=\"javascript\">\n              function concatenate(separator, ...strings) {\n                  return strings.join(separator);\n              }\n              const words = ['Hello', 'world', 'from', 'JavaScript'];\n              console.log(concatenate(' ', ...words)); // Output: \"Hello world from JavaScript\"\n                  </code></pre>\n                </li>\n                <li>\n                  Summary:\n                  <ul>\n                    <li>\n                      <strong>Rest Operator</strong>\n                      : Collects multiple elements into an array.\n                    </li>\n                    <li>\n                      <strong>Spread Operator</strong>\n                      : Expands an array or object into individual elements.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Example: Using rest in destructuring. const [first, second, ...rest] = [1, 2, 3, 4, 5]; console.log(first); // Output: 1 console.log(second); // Output: 2 console.log(rest); // Output: [3, 4, 5]",
        "Example: Spreading an object. const obj1 = { a: 1, b: 2 }; const obj2 = { ...obj1, c: 3 }; console.log(obj2); // Output: { a: 1, b: 2, c: 3 }",
        "Example: Using spread with function arguments. function multiply(x, y, z) { return x * y * z; } const numbers = [2, 3, 4]; console.log(multiply(...numbers)); // Output: 24"
      ]
    },
    {
      "question": "What is event looping in js?",
      "answer": "<ol>\n                <li>\n                  Event Loop in JavaScript is a mechanism that allows JavaScript to handle\n                  asynchronous operations and maintain its single-threaded nature.\n                  <ul>\n                    <li>\n                      JavaScript is single-threaded, meaning it can only execute one task at a time.\n                      However, asynchronous operations like timers (\n                      <code>setTimeout</code>\n                      ), network requests (\n                      <code>fetch</code>\n                      ), or DOM events are handled using the Event Loop.\n                    </li>\n                    <li>\n                      The Event Loop ensures that asynchronous tasks do not block the main thread\n                      and are executed once the Call Stack is empty.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  Key Concepts of the Event Loop:\n                  <ul>\n                    <li>\n                      <strong>Call Stack</strong>\n                      : A data structure that keeps track of function calls. Functions are pushed\n                      onto the stack when called and popped off when completed.\n                    </li>\n                    <li>\n                      <strong>Web APIs</strong>\n                      : Provided by the browser (or Node.js runtime), these allow JavaScript to\n                      perform asynchronous operations like timers, DOM events, or network requests\n                      without blocking the main thread.\n                    </li>\n                    <li>\n                      <strong>Callback Queue (Task Queue)</strong>\n                      : Holds callbacks for asynchronous operations like\n                      <code>setTimeout</code>\n                      or DOM events, waiting to be executed.\n                    </li>\n                    <li>\n                      <strong>Microtask Queue</strong>\n                      : A higher-priority queue for tasks like Promises (\n                      <code>then</code>\n                      ,\n                      <code>catch</code>\n                      ) and\n                      <code>MutationObserver</code>\n                      .\n                    </li>\n                    <li>\n                      <strong>Event Loop</strong>\n                      : Continuously checks if the Call Stack is empty. If empty, it processes tasks\n                      from the Microtask Queue first, followed by the Callback Queue.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  How the Event Loop Works:\n                  <ul>\n                    <li>\n                      Synchronous code is executed immediately and pushed onto the Call Stack.\n                    </li>\n                    <li>\n                      Asynchronous operations are offloaded to Web APIs. Once completed, their\n                      callbacks are placed in the appropriate queue:\n                      <ul>\n                        <li>\n                          Microtask Queue: For Promises and\n                          <code>MutationObserver</code>\n                          .\n                        </li>\n                        <li>\n                          Callback Queue: For\n                          <code>setTimeout</code>\n                          ,\n                          <code>setInterval</code>\n                          , and other asynchronous tasks.\n                        </li>\n                      </ul>\n                    </li>\n                    <li>\n                      The Event Loop prioritizes the Microtask Queue over the Callback Queue,\n                      ensuring all microtasks are processed before moving to regular tasks.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  Example of Event Loop in Action:\n                  <pre><code class=\"javascript\">\n              console.log(\"Start\");\n\n              setTimeout(() =&gt; {\n                console.log(\"Timeout\");\n              }, 0);\n\n              Promise.resolve().then(() =&gt; {\n                console.log(\"Promise\");\n              });\n\n              console.log(\"End\");\n                  </code></pre>\n                  <ul>\n                    <li>\n                      Execution Flow:\n                      <ol>\n                        <li>Synchronous code: \"Start\" and \"End\" are logged to the console.</li>\n                        <li>\n                          Asynchronous code:\n                          <ul>\n                            <li>\n                              The\n                              <code>setTimeout</code>\n                              callback is sent to the Callback Queue after 0 milliseconds.\n                            </li>\n                            <li>\n                              The\n                              <code>Promise.resolve</code>\n                              callback is sent to the Microtask Queue.\n                            </li>\n                          </ul>\n                        </li>\n                        <li>\n                          Event Loop Processing:\n                          <ul>\n                            <li>\n                              The Event Loop processes the Microtask Queue first, logging \"Promise\".\n                            </li>\n                            <li>\n                              After all microtasks are processed, the Event Loop moves to the\n                              Callback Queue, logging \"Timeout\".\n                            </li>\n                          </ul>\n                        </li>\n                      </ol>\n                    </li>\n                    <li>\n                      Output:\n                      <pre>              Start\n              End\n              Promise\n              Timeout\n                      </pre>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  Key Points to Remember:\n                  <ul>\n                    <li>\n                      JavaScript is single-threaded, but asynchronous operations are handled using\n                      the Event Loop.\n                    </li>\n                    <li>\n                      Microtasks (e.g., Promises) have higher priority than regular tasks (e.g.,\n                      <code>setTimeout</code>\n                      ).\n                    </li>\n                    <li>\n                      The Event Loop ensures non-blocking behavior by offloading long-running tasks\n                      to Web APIs.\n                    </li>\n                    <li>\n                      The browser renders updates to the DOM only after the Call Stack is empty and\n                      all microtasks are processed.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  Real-World Analogy:\n                  <ul>\n                    <li>\n                      Imagine you're a chef in a restaurant:\n                      <ul>\n                        <li>\n                          The\n                          <strong>Call Stack</strong>\n                          is your current task list (you can only cook one dish at a time).\n                        </li>\n                        <li>\n                          The\n                          <strong>Web APIs</strong>\n                          are your assistants who handle tasks like boiling water or marinating\n                          food.\n                        </li>\n                        <li>\n                          The\n                          <strong>Callback Queue</strong>\n                          is the list of dishes ready to be served.\n                        </li>\n                        <li>\n                          The\n                          <strong>Microtask Queue</strong>\n                          is a VIP list of urgent orders that need immediate attention.\n                        </li>\n                        <li>\n                          The\n                          <strong>Event Loop</strong>\n                          is you checking if you’re free to serve the next dish.\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  Conclusion:\n                  <ul>\n                    <li>\n                      The Event Loop is a fundamental concept in JavaScript that enables\n                      non-blocking behavior and efficient handling of asynchronous operations.\n                    </li>\n                    <li>\n                      By understanding the Call Stack, Web APIs, Microtask Queue, Callback Queue,\n                      and the Event Loop itself, you can write more efficient and predictable\n                      asynchronous code.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "The Event Loop ensures that asynchronous tasks do not block the main thread and are executed once the Call Stack is empty.",
        "Key Concepts of the Event Loop: Call Stack : A data structure that keeps track of function calls. Functions are pushed onto the stack when called and popped off when completed.",
        "Web APIs : Provided by the browser (or Node.js runtime), these allow JavaScript to perform asynchronous operations like timers, DOM events, or network requests without blocking the main thread."
      ]
    },
    {
      "question": "What is Event Delegation?",
      "answer": "<ol>\n                <li>\n                  <strong>Why Use Event Delegation?</strong>\n                  <ul>\n                    <li>\n                      Reduces memory usage by adding a single event listener instead of multiple.\n                    </li>\n                    <li>\n                      Handles dynamically added elements without needing extra event bindings.\n                    </li>\n                    <li>Improves performance in large applications.</li>\n                  </ul>\n                </li>\n\n                <li>\n                  <strong>How It Works:</strong>\n                  Instead of adding event listeners to multiple child elements, we attach one to a\n                  common ancestor and use **event.target** to identify the clicked element.\n                  <code>\n                    document.getElementById(\"parent\").addEventListener(\"click\", function(event)\n                    {\n                    \n\n                    if (event.target.tagName === \"BUTTON\") {\n                    \n\n                    console.log(\"Button clicked:\", event.target.textContent);\n                    \n\n                    }\n                    \n\n                    });\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Example Without Event Delegation:</strong>\n                  This approach is inefficient because it binds an event listener to each button.\n                  <code>\n                    const buttons = document.querySelectorAll(\"button\");\n                    \n\n                    buttons.forEach(button =&gt; {\n                    \n\n                    button.addEventListener(\"click\", () =&gt; {\n                    \n\n                    console.log(\"Button clicked!\");\n                    \n\n                    });\n                    \n\n                    });\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Example With Event Delegation:</strong>\n                  Using a **single event listener** on the parent.\n                  <code>\n                    document.getElementById(\"list\").addEventListener(\"click\", function(event) {\n                    \n\n                    if (event.target.tagName === \"LI\") {\n                    \n\n                    console.log(\"Item clicked:\", event.target.textContent);\n                    \n\n                    }\n                    \n\n                    });\n                  </code>\n                </li>\n\n                <li>\n                  <strong>Use Case - Dynamically Added Elements:</strong>\n                  Event delegation works even when new elements are added dynamically.\n                  <code>\n                    document.getElementById(\"parent\").addEventListener(\"click\", function(event)\n                    {\n                    \n\n                    if (event.target.classList.contains(\"child\")) {\n                    \n\n                    console.log(\"New child clicked:\", event.target.textContent);\n                    \n\n                    }\n                    \n\n                    });\n                    \n\n                    \n\n\n                    // Dynamically adding elements\n                    \n\n                    const newButton = document.createElement(\"button\");\n                    \n\n                    newButton.textContent = \"Click Me\";\n                    \n\n                    newButton.classList.add(\"child\");\n                    \n\n                    document.getElementById(\"parent\").appendChild(newButton);\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Why Use Event Delegation? Reduces memory usage by adding a single event listener instead of multiple.",
        "Handles dynamically added elements without needing extra event bindings.",
        "Improves performance in large applications."
      ]
    },
    {
      "question": "What is Promises?",
      "answer": "<ol>\n                <li>Promises are used for handling of asynchronous actions.</li>\n                <li>\n                  Promises produces a single value over period of time: either a resolved value, or\n                  a reason to fail.\n                </li>\n                <li>\n                  Promises are eager so will be executed immediately. If we need lazy, then we\n                  should go for Observables.\n                </li>\n                <li>\n                  A promise may be in one of 3 possible states: fulfilled, rejected, or pending.\n                </li>\n                <li>\n                  Once Promise is started, can't be cancelled. But We can stop the observables by\n                  calling unsubscribe() method.\n                </li>\n                <li>\n                  Users can attach callbacks to handle the fulfilled value or the reason for\n                  rejection.\n                </li>\n                <code>\n                  //Producing results\n                  \n\n                  let examplePromise = new Promise((resolve, reject) =&gt; '{' }}\n                  \n\n                  console.log(resolve);\n                  \n\n                  let x = 10;\n                  \n\n\n                  if(x == 10){\n                  \n\n                  resolve('Success');\n                  \n\n                  }else {\n                  \n\n                  reject('Fail');\n                  \n\n                  }\n                  \n\n\n                  });\n                  \n\n\n                  //consuming\n                  \n\n                  examplePromise.then((value) =&gt;{console.log('first fun ' + value);},\n                  \n\n                  (error) =&gt;{console.log('second fun ' + error);});\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Promises are used for handling of asynchronous actions.",
        "Promises produces a single value over period of time: either a resolved value, or a reason to fail.",
        "Promises are eager so will be executed immediately. If we need lazy, then we should go for Observables."
      ]
    },
    {
      "question": "What is observable?",
      "answer": "<ol>\n                <li>Observables are used for handling of asynchronous actions.</li>\n                <li>\n                  Observables produces multiple values over period of time and pushes to the\n                  subscribers.\n                </li>\n                <li>\n                  Observable will be executed only by subscribing it using subscribe() method,\n                  passing callbacks for notifications of new values, errors, or completion.\n                </li>\n                <li>\n                  Angular’s\n                  <b>HttpClient</b>\n                  returns observables from HTTP method calls. For instance, http.get(‘/api’) returns\n                  an observable.\n                </li>\n                <li>\n                  Using\n                  <b>unsubscribe()</b>\n                  method, we can unsubscribe the observes. Usually this code will in ngOnDestroy()\n                  method.\n                </li>\n                <li>RxJS libray providers the library for observables</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Observables are used for handling of asynchronous actions.",
        "Observables produces multiple values over period of time and pushes to the subscribers.",
        "Observable will be executed only by subscribing it using subscribe() method, passing callbacks for notifications of new values, errors, or completion."
      ]
    },
    {
      "question": "What are the difference between Observables vs Promises?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Observables</th>\n                    <th scope=\"col\">Promises</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Emit multiple values over a period of time.</td>\n                    <td>Emit a single value over a period of time.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Are lazy: they’re not executed until we subscribe to them using the\n                      subscribe() method.\n                    </td>\n                    <td>Eager: execute immediately after creation.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      We can stop the subscriptions by calling the unsubscribe() method, which stops\n                      the listener from receiving further values.\n                    </td>\n                    <td>Are not cancellable.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Provide the map for forEach, filter, reduce, retry, and retryWhen operators.\n                    </td>\n                    <td>Don’t provide any operations.</td>\n                  </tr>\n                  <tr>\n                    <td>Deliver errors to the subscribers.</td>\n                    <td>Push errors to the child promises.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Observables Promises Emit multiple values over a period of time.",
        "Emit a single value over a period of time."
      ]
    },
    {
      "question": "What are the differences between == and === operators?",
      "answer": "<ol>\n                <li>\n                  <b>=</b>\n                  means for assignment.\n                </li>\n                <li>\n                  <b>==</b>\n                  meant for content comparison. It checks only the content and doesn't care about\n                  the javascript data.\n                  <div>\n                    <code>\n                      let a = 30;\n                      \n\n                      let b = '30';\n                      \n\n                      if(a == b){\n                      \n\n                      console.log('both are equal values');\n                      \n\n                      }\n                      \n\n                    </code>\n                  </div>\n                </li>\n                <li>\n                  <b>===</b>\n                  meant for content comparison and data type check. It checks content and type of\n                  the variables. It returns true only value is same and data type also same. Below\n                  example returns false since types are not matched.\n                  <div>\n                    <code>\n                      let a = 30;\n                      \n\n                      let b = '30';\n                      \n\n                      if(a === b){\n                      \n\n                      console.log('both are equal values');\n                      \n\n                      }\n                      \n\n                    </code>\n                  </div>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "== meant for content comparison. It checks only the content and doesn't care about the javascript data. let a = 30; let b = '30'; if(a == b){ console.log('both are equal values'); }"
      ]
    },
    {
      "question": "What are the differences between the let, const and var?",
      "answer": "<div>\n                var, let and const keywords are used to declare variables.\n                <ol>\n                  <li><b>var</b></li>\n                  <ol>\n                    <li>\n                      Redeclation is possible only in non strict mode. Last value will be assigned.\n                    </li>\n                    <li>Initialization is possible before declaration.</li>\n                    <li>It will a global scope.</li>\n                    <li>If we are not assigning any value then undefined will be there.</li>\n                    <li>Reassignment is possible.</li>\n                    <li>Variable hoisting will happen => Moving all variables to the top</li>\n                  </ol>\n\n                  <li><b>let (es6 2015)</b></li>\n                  <ol>\n                    <li>Redeclation is not possible.</li>\n                    <li>It will a block level scope.</li>\n                    <li>Initialization is not possible before declaration.</li>\n                    <li>If we are not assigning any value then undefined will be there.</li>\n                    <li>Reassignment is possible.</li>\n                  </ol>\n                  <li><b>const (es6 2015)</b></li>\n                  <ol>\n                    <li>Redeclation is not possible.</li>\n                    <li>It will a block level scope.</li>\n                    <li>Initialization is not possible before declaration.</li>\n                    <li>if we are not assigning any value then it will be a error.</li>\n                    <li>Initial value is mandatory.</li>\n                    <li>Reassignment is not possible.</li>\n                  </ol>\n                </ol>\n              </div>\n\n              <table class=\"table table-striped table-bordered mt-2\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">feature</th>\n                    <th scope=\"col\">var</th>\n                    <th scope=\"col\">let</th>\n                    <th scope=\"col\">const</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Redeclation</th>\n                    <td>Possible</td>\n                    <td>Not possible</td>\n                    <td>Not possible</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Initialization before declartion</th>\n                    <td>Possible</td>\n                    <td>Not possible</td>\n                    <td>Not possible</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Scope</th>\n                    <td>Global</td>\n                    <td>Block</td>\n                    <td>Block</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Default values</th>\n                    <td>undefined</td>\n                    <td>undefined</td>\n                    <td>If we are not assigning any value then it will be a error.</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Reassignment</th>\n                    <td>Possible</td>\n                    <td>Possible</td>\n                    <td>Not possible</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Redeclation is possible only in non strict mode. Last value will be assigned.",
        "Initialization is possible before declaration.",
        "If we are not assigning any value then undefined will be there."
      ]
    },
    {
      "question": "What is session storage?",
      "answer": "<ol>\n                <li>Using sessionStorage object we can store key/value pairs in the browser.</li>\n                <li>\n                  Whenever we open a new tab, new session will be created. When close the tab,\n                  session will be closed.\n                </li>\n                <li>Data in sessionStorage is cleared when the browser tab is closed.</li>\n                <li>\n                  A page session lasts as long as the tab or the browser is open, and survives over\n                  page reloads and restores.\n                </li>\n                <code>\n                  // Save data to sessionStorage\n                  \n\n                  sessionStorage.setItem('key', 'value');\n                  \n\n\n                  // Get saved data from sessionStorage\n                  \n\n                  let data = sessionStorage.getItem('key');\n                  \n\n\n                  // Remove saved data from sessionStorage\n                  \n\n                  sessionStorage.removeItem('key');\n                  \n\n\n                  // Remove all saved data from sessionStorage\n                  \n\n                  sessionStorage.clear();\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Using sessionStorage object we can store key/value pairs in the browser.",
        "Whenever we open a new tab, new session will be created. When close the tab, session will be closed.",
        "Data in sessionStorage is cleared when the browser tab is closed."
      ]
    },
    {
      "question": "What is local storage?",
      "answer": "<ol>\n                <li>Using localStorage object we can store key/value pairs in the browser.</li>\n                <li>\n                  localStorage data has no expiration time. So even if we closing the browser also\n                  data will be saved.\n                </li>\n                <code>\n                  // Save data to localStorage\n                  \n\n                  localStorage.setItem('key', 'value');\n                  \n\n\n                  // Get saved data from localStorage\n                  \n\n                  let data = localStorage.getItem('key');\n                  \n\n\n                  // Remove saved data from localStorage\n                  \n\n                  localStorage.removeItem('key');\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Using localStorage object we can store key/value pairs in the browser.",
        "localStorage data has no expiration time. So even if we closing the browser also data will be saved."
      ]
    },
    {
      "question": "When to use session storage and local storage?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Session Storage</th>\n                    <th scope=\"col\">Local Storage</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>The storage capacity of session storage is 5MB</td>\n                    <td>The storage capacity of local storage is 5MB/10MB</td>\n                  </tr>\n                  <tr>\n                    <td>Data will be deleted once browser tab is closed.</td>\n                    <td>Data will not be deleted even if we close the browser.</td>\n                  </tr>\n                  <tr>\n                    <td>Data will be deleted once browser tab is closed.</td>\n                    <td>\n                      As it is not session-based, it must be deleted via javascript or manually\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Session Storage Local Storage The storage capacity of session storage is 5MB The storage capacity of local storage is 5MB/10MB Data will be deleted once browser tab is closed.",
        "Data will not be deleted even if we close the browser."
      ]
    },
    {
      "question": "What is hoisting in javascript?",
      "answer": "<ol>\n                <li>A variable can be used before it has been declared.</li>\n                <li>\n                  Hoisting is the default behavior of moving all the declarations at the top of the\n                  scope before code execution.\n                </li>\n                <li>\n                  Basically, it gives us an advantage that no matter where functions and variables\n                  are declared, they are moved to the top of their scope regardless of whether their\n                  scope is global or local.\n                </li>\n                <li>\n                  JavaScript allocates memory for all variables and functions defined in the program\n                  before execution.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "A variable can be used before it has been declared.",
        "Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.",
        "Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."
      ]
    },
    {
      "question": "What is a call back method?",
      "answer": "<ol>\n                <li>\n                  Callback function is a function which is passed as argument to another method.\n                </li>\n                <li>\n                  In the below example, printName is function. We are passing 'printName' function\n                  as a argument to the setTimeout method. It will be executed after 3 seconds.\n                  <br>\n                  <code>\n                    function printName(){\n                    \n\n                    console.log('Welcome')\n                    \n\n                    }\n                    \n\n\n                    setTimeout(printName, 3000);\n                    \n\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Callback function is a function which is passed as argument to another method."
      ]
    },
    {
      "question": "What are the difference between Typescript and Javascript?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Typescript</th>\n                    <th scope=\"col\">Javascript</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Typescript is a superset of JavaScript. TypeScript is supports an\n                      Object-oriented programming language. TypeScript is nothing but JavaScript and\n                      some additional features.\n                    </td>\n                    <td>JavaScript is a scripting language.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      TypeScript code needs to be compiled. TypeScript compiler can compile the .ts\n                      files into .js files.\n                    </td>\n                    <td>No need to compile JavaScript.</td>\n                  </tr>\n                  <tr>\n                    <td>Typescript supports generics, interfaces</td>\n                    <td>JavaScript doesn't supports generics, interfaces</td>\n                  </tr>\n                  <tr>\n                    <td>TypeScript gives support for modules. A module is group of classes.</td>\n                    <td>JavaScript gives support for modules.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Typescript Javascript Typescript is a superset of JavaScript.",
        "TypeScript is supports an Object-oriented programming language."
      ]
    },
    {
      "question": "What is jQuery?",
      "answer": "<ol>\n                <li>jQuery is a small, lightweight JavaScript library.</li>\n                <li>\n                  jQuery is platform-independent. It simplifies AJAX call and DOM manipulation.\n                </li>\n                <li>jQuery means \"write less do more\".</li>\n                <li>\n                  The jQuery library contains the following features:\n                  <ul>\n                    <li>HTML/DOM manipulation</li>\n                    <li>CSS manipulation</li>\n                    <li>HTML event methods</li>\n                    <li>Effects and animations</li>\n                    <li>AJAX</li>\n                    <li>Utilities</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "jQuery is a small, lightweight JavaScript library.",
        "jQuery is platform-independent. It simplifies AJAX call and DOM manipulation.",
        "jQuery means \"write less do more\"."
      ]
    },
    {
      "question": "What are difference between jQuery and Angular?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">jQuery</th>\n                    <th scope=\"col\">Angular</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>jQuery is a Javascript-based library</td>\n                    <td>It is a Typescript-based, front-end development framework</td>\n                  </tr>\n                  <tr>\n                    <td>It is used for DOM manipulation</td>\n                    <td>It is used for creating single-page applications.</td>\n                  </tr>\n                  <tr>\n                    <td>It is suitable for small size projects</td>\n                    <td>It is suitable for large, complex projects</td>\n                  </tr>\n                  <tr>\n                    <td>It is unidirectional</td>\n                    <td>It is bi-directional (supports two-way data binding)</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "jQuery Angular jQuery is a Javascript-based library It is a Typescript-based, front-end development framework It is used for DOM manipulation It is used for creating single-page applications."
      ]
    },
    {
      "question": "What is interface in typescript?",
      "answer": "<ol>\n                <li>Interface is a specification.</li>\n                <li>It has only properties and abstract methods.</li>\n                <li>A method which doesn't have a body called Abstract method.</li>\n                <li>Using interfaces, we can achieve multiple inheritence.</li>\n                <code>export interface OnInit { name: string; ngOnInit(); }</code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Interface is a specification.",
        "It has only properties and abstract methods.",
        "A method which doesn't have a body called Abstract method."
      ]
    },
    {
      "question": "What is asyc, await?",
      "answer": "<ol>\n                <li>\n                  <b>async</b>\n                  makes a function return a Promise.\n                  <code class=\"d-block\">\n                    async function myFunction() {\n                    \n\n                    return \"Hello\";\n                    \n\n                    }\n                    \n\n                  </code>\n                </li>\n                <li>\n                  <b>await</b>\n                  makes a function wait for a Promise and returns the final value.\n                  <code class=\"d-block\">\n                    async function myDisplay() {\n                    \n\n                    let myPromise = new Promise(function(resolve, reject) {\n                    \n\n                    resolve(\"I love You !!\");\n                    \n\n                    });\n                    \n\n                    document.getElementById(\"demo\").innerHTML = await myPromise;\n                    \n\n                    }\n                    \n\n                  </code>\n                </li>\n                <li>await should be inside the async functions only.</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "async makes a function return a Promise. async function myFunction() { return \"Hello\"; }",
        "await should be inside the async functions only."
      ]
    },
    {
      "question": "What is spread operator?",
      "answer": "<ol>\n                <li>... operator is called spred operator.</li>\n                <li>\n                  Spread operator can be used to iterate over each variable and copy to another\n                  array\n                  <code class=\"d-block\">\n                    let names = ['ss', 'sb'];\n                    \n\n                    let clone = [...names]\n                  </code>\n                </li>\n                <li>\n                  Spread operator can be used to copy an object also. Here we are copying p object\n                  data to new clone object.\n                  <code class=\"d-block\">\n                    let p = {name: 'SS', age: 30}\n                    \n\n                    let clone = {...p}\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "... operator is called spred operator.",
        "Spread operator can be used to iterate over each variable and copy to another array let names = ['ss', 'sb']; let clone = [...names]",
        "Spread operator can be used to copy an object also. Here we are copying p object data to new clone object. let p = {name: 'SS', age: 30} let clone = {...p}"
      ]
    },
    {
      "question": "What is arrow function?",
      "answer": "<ol>\n                <li>Arrow function is es6 function or single line function.</li>\n                <li>\n                  Array function reduces the no of lines code. Parenthesis, return state are\n                  optional if we have a single line.\n                  <code class=\"d-block\">hello = () =&gt; \"Hello World!\";</code>\n                </li>\n                <li>\n                  If we have morethan one line of code, then return statement and {}\n                  brackets are mandatory.\n                  <code class=\"d-block\">\n                    hello = () =&gt; {alert('test'); return \"Hello World!\";}\n                  </code>\n                </li>\n                <li>\n                  <p>\n                    In regular functions the\n                    <b>this</b>\n                    keyword represented the object that called the function, which could be the\n                    window, the document, a button or whatever.\n                  </p>\n\n                  With arrow functions the\n                  <b>this</b>\n                  keyword always represents the object that defined the arrow function.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Arrow function is es6 function or single line function.",
        "Array function reduces the no of lines code. Parenthesis, return state are optional if we have a single line. hello = () => \"Hello World!\";",
        "If we have morethan one line of code, then return statement and {} brackets are mandatory. hello = () => {alert('test'); return \"Hello World!\";}"
      ]
    },
    {
      "question": "why should we use arrow function instead of general function?",
      "answer": "<div>\n                <ol>\n                  <li>\n                    Arrow functions are anonymous functions. They allow us to write smaller function\n                    syntax\n                  </li>\n                  <li>They don't return any value and can declare without the function keyword.</li>\n                  <li>Arrow functions cannot be used as the constructors.</li>\n                  <li>The context within the arrow functions is lexically or statically defined</li>\n                </ol>\n              </div>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Arrow functions are anonymous functions. They allow us to write smaller function syntax",
        "They don't return any value and can declare without the function keyword.",
        "Arrow functions cannot be used as the constructors."
      ]
    },
    {
      "question": "Difference between undefined and null?",
      "answer": "<ol>\n                <li>\n                  undefined means developer is not assigned any value to the variable. In the below\n                  example, a value is \"undefined\" since user is not assigned any value.\n                  <div>\n                    <code>let a;</code>\n                  </div>\n                </li>\n                <li>\n                  null means developer is assigning a value as a default. In the below example, b\n                  value is null\n                  <div>\n                    <code>let b = null;</code>\n                  </div>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "undefined means developer is not assigned any value to the variable. In the below example, a value is \"undefined\" since user is not assigned any value. let a;",
        "null means developer is assigning a value as a default. In the below example, b value is null let b = null;"
      ]
    },
    {
      "question": "How will declare optional parameters in typescript?",
      "answer": "<ol>\n                <li>\n                  We can declare the optional parameters using the\n                  <b>?</b>\n                  symbol\n                  <code>displayName(name?: string){}</code>\n                </li>\n                <li>\n                  We can declare the optional parameters using by providing the default value also.\n                  Here we provided default value so parameter is optional.\n                  <code>displayName(name: string = 'SS'){}</code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "We can declare the optional parameters using the ? symbol displayName(name?: string){}",
        "We can declare the optional parameters using by providing the default value also. Here we provided default value so parameter is optional. displayName(name: string = 'SS'){}"
      ]
    },
    {
      "question": "Difference between splice and slice?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Splice</th>\n                    <th scope=\"col\">Slice</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Splice is used to add/remove/replace elements from an array</td>\n                    <td>\n                      Slice is used to get the some part of array elements and returns a new array.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Splice method takes 3 arguments\n                      <div>1. Index position</div>\n                      <div>2. How many elements should be removed.</div>\n                      <div>3. New elements to add/replace</div>\n                      <code class=\"d-block\">\n                        const fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\n                        \n\n                        // At position 2, add 2 elements:\n                        \n\n                        fruits.splice(2, 0, \"Lemon\", \"Kiwi\");\n                        \n\n                      </code>\n                    </td>\n                    <td>\n                      slice method takes 2 arguments\n                      <div>1. Start index position</div>\n                      <div>2. End index position.</div>\n                      <code class=\"d-block\">\n                        const fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\n                        \n\n                        // Creates new array from 0 to 1st element:\n                        \n\n                        const newFruits = fruits.slice(0, 1);\n                        \n\n                      </code>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Splice changes to original array itself. It returns removed elemnts</td>\n                    <td>\n                      Slice doesn't change anything to original array. It returns a new array.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Splice Slice Splice is used to add/remove/replace elements from an array Slice is used to get the some part of array elements and returns a new array.",
        "How many elements should be removed."
      ]
    },
    {
      "question": "What is reduce method?",
      "answer": "<ol>\n                <li>The reduce() method executes a reducer function for array element.</li>\n                <li>\n                  The reduce() method returns a single value: the function's accumulated result.\n                </li>\n                <li>The reduce() method does not execute the function for empty array elements.</li>\n                <code class=\"d-block\">\n                  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)\n                </code>\n\n                Here reduce() is used to get the sum of values.\n                <code class=\"d-block\">\n                  const numbers = [175, 50, 25];\n                  \n\n                  let total = numbers.reduce((total, num) =&gt; total + num);\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "The reduce() method executes a reducer function for array element.",
        "The reduce() method returns a single value: the function's accumulated result.",
        "The reduce() method does not execute the function for empty array elements."
      ]
    },
    {
      "question": "What is closure?",
      "answer": "<ol>\n                <li>\n                  A closure is a persistent scope which holds on to local variables even after the\n                  code execution has moved out of that block. Languages which support closure (such\n                  as JavaScript, Swift, and Ruby) will allow you to keep a reference to a scope\n                  (including its parent scopes), even after the block in which those variables were\n                  declared has finished executing, provided you keep a reference to that block or\n                  function somewhere.\n                </li>\n                <li>\n                  The scope object and all its local variables are tied to the function and will\n                  persist as long as that function persists.\n                </li>\n                <li>\n                  <code>\n                    function makeCounter () {\n                    \n\n                    var count = 0;\n                    \n\n                    return function () {\n                    \n\n                    count += 1;\n                    \n\n                    return count;\n                    \n\n                    }\n                    \n\n                    }\n                    \n\n\n                    var x = makeCounter();\n                    \n\n                    x(); returns 1\n                    \n\n                    x(); returns 2\n                    \n\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "The scope object and all its local variables are tied to the function and will persist as long as that function persists.",
        "function makeCounter () { var count = 0; return function () { count += 1; return count; } } var x = makeCounter(); x(); returns 1 x(); returns 2"
      ]
    },
    {
      "question": "what is context in function, why we require it?",
      "answer": "<ol>\n                <li>context is sharing values between functions/components.</li>\n                <li>\n                  if we have to pass parent property/instance to inside function/child function then\n                  we have to go with context.\n                </li>\n                <li>\n                  <code>\n                    apply =&gt; this.callChildFunction.apply(this, [args1, args2])() call =&gt;\n                    this.callChildFunction.apply(this, args1, args2)() bind =&gt;\n                    this.callChildFunction.bind(this)(args1, args2)\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "context is sharing values between functions/components.",
        "if we have to pass parent property/instance to inside function/child function then we have to go with context.",
        "apply => this.callChildFunction.apply(this, [args1, args2])() call => this.callChildFunction.apply(this, args1, args2)() bind => this.callChildFunction.bind(this)(args1, args2)"
      ]
    },
    {
      "question": "how to pass context to function(bind), do we need bind for arrow function",
      "answer": "<ol>\n                <li>\n                  for normal functions, we have to pass context to access inside that function\n                </li>\n                <li>syntax => const bindedFunction = this.normalFunction.bind(this);</li>\n                <li>\n                  we don't need to bind for arrow function, by default it will have access to\n                  context in parent function/class\n                </li>\n                <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind\"></a>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "for normal functions, we have to pass context to access inside that function",
        "syntax => const bindedFunction = this.normalFunction.bind(this);",
        "we don't need to bind for arrow function, by default it will have access to context in parent function/class"
      ]
    },
    {
      "question": "What are the difference betwwen Apply vs Call functions?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Apply</th>\n                    <th scope=\"col\">Call</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      The apply() allows for a function/method belonging to one object to be\n                      assigned and called for a different object and passing method arguments as an\n                      array.\n                    </td>\n                    <td>\n                      The call() allows for a function/method belonging to one object to be assigned\n                      and called for a different object and passing method arguments as\n                      individually..\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      The apply() method calls a function with a given this value, and arguments\n                      provided as an array\n                    </td>\n                    <td>\n                      The call() method calls a function with a given this value and arguments\n                      provided individually.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Synatax: apply => this.callChildFunction.apply(this, [args1, args2])()</td>\n                    <td>call => this.callChildFunction.apply(this, args1, args2)()</td>\n                  </tr>\n                </tbody>\n              </table>\n              NOte: Note: While the syntax of this function is almost identical to that of apply(),\n              the fundamental difference is that call() accepts an argument list, while apply()\n              accepts a single array of arguments.",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Apply Call The apply() allows for a function/method belonging to one object to be assigned and called for a different object and passing method arguments as an array.",
        "The call() allows for a function/method belonging to one object to be assigned and called for a different object and passing method arguments as individually.."
      ]
    },
    {
      "question": "What will happen when a break statement is not available in switch case?",
      "answer": "<ol>\n                <li>\n                  In JAVASCRIPT it will executed till the break/return statement or it will execute\n                  until switch closes.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "In JAVASCRIPT it will executed till the break/return statement or it will execute until switch closes."
      ]
    },
    {
      "question": "What is prototype in javascript?",
      "answer": "<ol>\n                <li>\n                  Prototypes are the mechanism by which JavaScript objects inherit features from one\n                  another.\n                </li>\n                <li>\n                  Using prototypes, we can add a new method and properties to the object\n                  dynamically. In the below example, using prototype, a property and method added to\n                  the Person class.\n                  <div>\n                    <img src=\"assets\\javascript-prototype.png\" alt=\"prototype\">\n                  </div>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
        "Using prototypes, we can add a new method and properties to the object dynamically. In the below example, using prototype, a property and method added to the Person class."
      ]
    },
    {
      "question": "What is DOM?",
      "answer": "<ol>\n                <li>\n                  DOM stands for Document Object Model. Entire web page will be considered as a DOM.\n                </li>\n                <li>\n                  The HTML DOM is a standard for how to get, change, add, or delete HTML elements.\n                </li>\n                <li>\n                  We can use the below DOM methods\n                  <ol>\n                    <li>document.getElementById(id):- Find an element by element id</li>\n                    <li>document.getElementsByTagName(name): Find elements by tag name</li>\n                    <li>document.getElementsByClassName(name):- Find elements by class name</li>\n                    <li>\n                      document.querySelectorAll(\"p.intro\"):- Find elements based on css selectors\n                    </li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "DOM stands for Document Object Model. Entire web page will be considered as a DOM.",
        "The HTML DOM is a standard for how to get, change, add, or delete HTML elements.",
        "We can use the below DOM methods document.getElementById(id):- Find an element by element id"
      ]
    },
    {
      "question": "What is BOM?",
      "answer": "<ol>\n                <li>\n                  BOM stands for Browser Object Model. Browser will have the default objects for\n                  handing the browser\n                </li>\n                <li>\n                  We can use the below BOM objects\n                  <ol>\n                    <li>\n                      window:- window object is supported by all browsers. It represents the\n                      browser's window\n                    </li>\n                    <li>location: location object used to get the browser url information.</li>\n                    <li>history:- window.history object contains the browsers history.</li>\n                    <li>\n                      cookies:- Cookies are additional information sent to the server. Cookies are\n                      in key and value pairs.\n                    </li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "BOM stands for Browser Object Model. Browser will have the default objects for handing the browser",
        "We can use the below BOM objects window:- window object is supported by all browsers. It represents the browser's window",
        "location: location object used to get the browser url information."
      ]
    },
    {
      "question": "What are the methods available in Array?",
      "answer": "<table class=\"table table-bordered\">\n                <tbody>\n                  <tr>\n                    <th style=\"width: 20%\">Method</th>\n                    <th>Description</th>\n                  </tr>\n                  <tr>\n                    <td>concat()</td>\n                    <td>Joins two or more arrays, and returns a copy of the joined arrays</td>\n                  </tr>\n                  <tr>\n                    <td><a>every()</a></td>\n                    <td>Checks if every element in an array pass a test</td>\n                  </tr>\n                  <tr>\n                    <td><a>fill()</a></td>\n                    <td>Fill the elements in an array with a static value</td>\n                  </tr>\n                  <tr>\n                    <td><a>filter()</a></td>\n                    <td>Creates a new array with every element in an array that pass a test</td>\n                  </tr>\n                  <tr>\n                    <td><a>find()</a></td>\n                    <td>Returns the value of the first element in an array that pass a test</td>\n                  </tr>\n                  <tr>\n                    <td><a>findIndex()</a></td>\n                    <td>Returns the index of the first element in an array that pass a test</td>\n                  </tr>\n                  <tr>\n                    <td><a>forEach()</a></td>\n                    <td>Calls a function for each array element</td>\n                  </tr>\n                  <tr>\n                    <td><a>includes()</a></td>\n                    <td>Check if an array contains the specified element</td>\n                  </tr>\n                  <tr>\n                    <td><a>indexOf()</a></td>\n                    <td>Search the array for an element and returns its position</td>\n                  </tr>\n                  <tr>\n                    <td><a>join()</a></td>\n                    <td>Joins all elements of an array into a string</td>\n                  </tr>\n                  <tr>\n                    <td><a>lastIndexOf()</a></td>\n                    <td>\n                      Search the array for an element, starting at the end, and returns its position\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a>map()</a></td>\n                    <td>\n                      Creates a new array with the result of calling a function for each array\n                      element\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a>pop()</a></td>\n                    <td>Removes the last element of an array, and returns that element</td>\n                  </tr>\n                  <tr>\n                    <td><a>push()</a></td>\n                    <td>Adds new elements to the end of an array, and returns the new length</td>\n                  </tr>\n                  <tr>\n                    <td><a>reduce()</a></td>\n                    <td>Reduce the values of an array to a single value (going left-to-right)</td>\n                  </tr>\n                  <tr>\n                    <td><a>reverse()</a></td>\n                    <td>Reverses the order of the elements in an array</td>\n                  </tr>\n                  <tr>\n                    <td><a>shift()</a></td>\n                    <td>Removes the first element of an array, and returns that element</td>\n                  </tr>\n                  <tr>\n                    <td><a>slice()</a></td>\n                    <td>Selects a part of an array, and returns the new array</td>\n                  </tr>\n                  <tr>\n                    <td><a>some()</a></td>\n                    <td>Checks if any of the elements in an array pass a test</td>\n                  </tr>\n                  <tr>\n                    <td><a>sort()</a></td>\n                    <td>Sorts the elements of an array</td>\n                  </tr>\n                  <tr>\n                    <td><a>splice()</a></td>\n                    <td>Adds/Removes elements from an array</td>\n                  </tr>\n                  <tr>\n                    <td><a>toString()</a></td>\n                    <td>Converts an array to a string, and returns the result</td>\n                  </tr>\n                  <tr>\n                    <td><a>unshift()</a></td>\n                    <td>\n                      Adds new elements to the beginning of an array, and returns the new length\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a>valueOf()</a></td>\n                    <td>Returns the primitive value of an array</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Method Description concat() Joins two or more arrays, and returns a copy of the joined arrays every() Checks if every element in an array pass a test fill() Fill the elements in an array with a static"
      ]
    },
    {
      "question": "reverse of array in js/ts",
      "answer": "<code>const array = [1, 2, 3, 4, 5, 6]; array.reverse();</code>\n              <div>For custom logic:</div>\n              <code>\n                array.forEach((a, i) =&gt; {\n                \n\n                if(i &lt; (array.length / 2)) {\n                \n\n                const currentValue = array[i];\n                \n\n                const reverseIndex = (array.length - 1) - i;\n                \n\n                array[i] = array[reverseIndex];\n                \n\n                array[reverseIndex] = currentValue;\n                \n\n                }\n                \n\n\n                return a;\n                \n\n                })\n                \n\n              </code>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "const array = [1, 2, 3, 4, 5, 6]; array.",
        "reverse(); For custom logic: array."
      ]
    },
    {
      "question": "object/array destructor and rest",
      "answer": "<ol>\n                <li>\n                  destructor of array/object purpose is separate some properties from existing\n                  object without getting of all.\n                </li>\n                <li>\n                  reason is we sent some combined properties from one component to another there\n                  inside for function of that component we need some properties to pass it child\n                  component we need some others on that case we have too separate current component\n                  properties from sent object using this destructor.\n                </li>\n                <li>\n                  Synatax: const { prop1, prop2, ...rest } = { prop1: 'Prop1', prop2:\n                  'Prop2', prop3: 'Prop3', prop4: 'Prop4' };\n                  <br>\n                  here rest will get remaining properties from above object which are prop3 and\n                  prop4\n                  <br>\n                  const { atZeroIndex, atOneIndex, ...rest } = ['zero' , 1, 2, 'last'];\n                  <br>\n                  here rest will get index 2 and 3 values.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "destructor of array/object purpose is separate some properties from existing object without getting of all."
      ]
    },
    {
      "question": "What is Tuple in ts?",
      "answer": "<ol>\n                <li>Returning multiple values same as a array</li>\n                <li>\n                  Synatax: type Tuple = [string, number]; => it should return 2 length array with\n                  first element as string and second element as number.\n                </li>\n                <li>\n                  <a href=\"https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types\">\n                    For more Reference\n                  </a>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Returning multiple values same as a array",
        "Synatax: type Tuple = [string, number]; => it should return 2 length array with first element as string and second element as number."
      ]
    },
    {
      "question": "union vs intersection vs extends in ts",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">union</th>\n                    <th scope=\"col\">intersection</th>\n                    <th scope=\"col\">extends</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>union is using for joining two types</td>\n                    <td>\n                      intersection is using for extracting common properties/functions of two types\n                    </td>\n                    <td>\n                      extends is using for joining of interface with either interface or type, it is\n                      similar to union in types.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Synatax: type ExtendedType = string | number; => type is joined all\n                      properties/functions of string with number\n                    </td>\n                    <td>\n                      Synatax: type CommonType = string & number; => type is intersected which\n                      returns only .valueOf(), .toString(), .toLocaleString() functions only instead\n                      of all from string and number\n                    </td>\n                    <td>\n                      Synatax: interface IString extends String { } => it will gets all\n                      Properties/functions from string to IString\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <a href=\"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types\">\n                        For more Reference\n                      </a>\n                    </td>\n                    <td>\n                      <a href=\"https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types\">\n                        For more Reference\n                      </a>\n                    </td>\n                    <td>\n                      <a href=\"https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types\">\n                        For more Reference\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Synatax: type ExtendedType = string | number; => type is joined all properties/functions of string with number Synatax: type CommonType = string & number; => type is intersected which returns only ."
      ]
    },
    {
      "question": "difference between types and interface in ts",
      "answer": "whatever we can do in interface same we can achieve in types except extending it\n              <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Aspect</th>\n                    <th>Type</th>\n                    <th>Interface</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Can describe functions</td>\n                    <td>✅</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Can describe constructors</td>\n                    <td>✅</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Can describe tuples</td>\n                    <td>✅</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Interfaces can extend it</td>\n                    <td>⚠️</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Classes can extend it</td>\n                    <td>🚫</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Classes can implement it (\n                      <code>implements</code>\n                      )\n                    </td>\n                    <td>⚠️</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Can intersect another one of its kind</td>\n                    <td>✅</td>\n                    <td>⚠️</td>\n                  </tr>\n                  <tr>\n                    <td>Can create a union with another one of its kind</td>\n                    <td>✅</td>\n                    <td>🚫</td>\n                  </tr>\n                  <tr>\n                    <td>Can be used to create mapped types</td>\n                    <td>✅</td>\n                    <td>🚫</td>\n                  </tr>\n                  <tr>\n                    <td>Can be mapped over with mapped types</td>\n                    <td>✅</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Expands in error messages and logs</td>\n                    <td>✅</td>\n                    <td>🚫</td>\n                  </tr>\n                  <tr>\n                    <td>Can be augmented</td>\n                    <td>🚫</td>\n                    <td>✅</td>\n                  </tr>\n                  <tr>\n                    <td>Can be recursive</td>\n                    <td>⚠️</td>\n                    <td>✅</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "whatever we can do in interface same we can achieve in types except extending it Aspect Type Interface Can describe functions ✅ ✅ Can describe constructors ✅ ✅ Can describe tuples ✅ ✅ Interfaces can e"
      ]
    },
    {
      "question": "What is array reduction?",
      "answer": "<ol>\n                <li>\n                  The array reduce in JavaScript is a predefined method used to reduce an array to a\n                  single value by passing a callback function on each element of the array. I\n                </li>\n                <li>\n                  It accepts a function executed on all the items of the specified array in the\n                  left-to-right sequence. The returned single value is stored in the accumulator.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. I",
        "It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator."
      ]
    },
    {
      "question": "How to create a variable ?",
      "answer": "<ol>\n                <li>\n                  We can create a variable using the\n                  <b>let, const and var</b>\n                  keywords.\n                </li>\n                <li>Variable will hold some value.</li>\n                <li>\n                  <code>let a = 10;</code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "We can create a variable using the let, const and var keywords.",
        "Variable will hold some value."
      ]
    },
    {
      "question": "JavaScript Core Concepts",
      "answer": "<ul>\n              <li>\n                <strong>What is promise?</strong>\n                <br>\n                A Promise is an object representing the eventual completion or failure of an\n                asynchronous operation.\n              </li>\n\n              <li>\n                <strong>Difference between promise.any, race, and all?</strong>\n                <br>\n                <ul>\n                  <li>\n                    <code>Promise.all</code>\n                    : Resolves when all promises resolve. Fails fast on first rejection.\n                  </li>\n                  <li>\n                    <code>Promise.race</code>\n                    : Resolves/rejects with the first settled promise.\n                  </li>\n                  <li>\n                    <code>Promise.any</code>\n                    : Resolves with first fulfilled promise, ignores rejections.\n                  </li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>What is generator function?</strong>\n                <br>\n                A special function that can pause execution using\n                <code>yield</code>\n                and resume later using\n                <code>next()</code>\n                .\n              </li>\n\n              <li>\n                <strong>What is currying function?</strong>\n                <br>\n                Transforming a function with multiple arguments into a sequence of functions each\n                taking one argument.\n              </li>\n\n              <li>\n                <strong>What is prototype mechanism?</strong>\n                <br>\n                A built-in JavaScript mechanism where objects inherit features from other objects\n                via the prototype chain.\n              </li>\n\n              <li>\n                <strong>What is debouncing?</strong>\n                <br>\n                Limits the rate at which a function is executed. Useful for events like input,\n                resize.\n              </li>\n\n              <li>\n                <strong>What is throttling?</strong>\n                <br>\n                Ensures a function is only called once in a specific time interval, no matter how\n                many times it's triggered.\n              </li>\n\n              <li>\n                <strong>Pass-by-value vs Pass-by-reference</strong>\n                <br>\n                <ul>\n                  <li>\n                    <strong>Pass-by-value:</strong>\n                    For primitive types (Number, String, etc.). A copy is passed.\n                  </li>\n                  <li>\n                    <strong>Pass-by-reference:</strong>\n                    For objects/arrays. A reference to the original memory is passed.\n                  </li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>What is callback hell?</strong>\n                <br>\n                Nested callbacks making code unreadable and difficult to maintain, often caused by\n                async operations.\n              </li>\n\n              <li>\n                <strong>What is promise chaining?</strong>\n                <br>\n                Linking multiple\n                <code>then()</code>\n                calls to run async operations in sequence.\n              </li>\n\n              <li>\n                <strong>What is lexical scope?</strong>\n                <br>\n                Scope defined by the location of variables in source code. Inner functions have\n                access to outer function's variables.\n              </li>\n\n              <li>\n                <strong>What is nullish coalescing operator (??)?</strong>\n                <br>\n                Returns right-hand operand only if left is\n                <code>null</code>\n                or\n                <code>undefined</code>\n                .\n              </li>\n\n              <li>\n                <strong>What is optional chaining (?.)?</strong>\n                <br>\n                Allows safe access to nested properties without throwing errors if a property\n                doesn't exist.\n              </li>\n\n              <li>\n                <strong>What is event loop?</strong>\n                <br>\n                A mechanism that handles asynchronous callbacks using the call stack and message\n                queue.\n              </li>\n\n              <li>\n                <strong>What is closure?</strong>\n                <br>\n                A function that remembers variables from its lexical scope even when called outside\n                of that scope.\n              </li>\n\n              <li>\n                <strong>What is destructuring?</strong>\n                <br>\n                Extracting values from arrays or properties from objects into variables.\n              </li>\n\n              <li>\n                <strong>Difference between rest and spread operator?</strong>\n                <br>\n                <ul>\n                  <li>\n                    <strong>Rest (...):</strong>\n                    Collects remaining elements into an array (used in function args).\n                  </li>\n                  <li>\n                    <strong>Spread (...):</strong>\n                    Expands array or object elements.\n                  </li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>ES6 features overview:</strong>\n                <br>\n                <ul>\n                  <li>let, const</li>\n                  <li>Arrow functions</li>\n                  <li>Template literals</li>\n                  <li>Destructuring</li>\n                  <li>Spread/Rest operators</li>\n                  <li>Promises, Classes, Modules, Generators</li>\n                </ul>\n              </li>\n            </ul>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "What is promise? A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
        "Difference between promise.any, race, and all? Promise.all : Resolves when all promises resolve. Fails fast on first rejection.",
        "Promise.race : Resolves/rejects with the first settled promise."
      ]
    },
    {
      "question": "Intermediate Level Questions",
      "answer": "<ol start=\"6\">\n              <li>\n                <strong>What is closure in JavaScript?</strong>\n                <br>\n                A closure is a function that remembers its lexical scope even when the function is\n                executed outside of that scope. It allows accessing outer function variables from an\n                inner function.\n              </li>\n\n              <li>\n                <strong>Explain the concept of hoisting</strong>\n                <br>\n                Hoisting is JavaScript's default behavior of moving declarations to the top of the\n                current scope. Only variable and function declarations are hoisted—not\n                initializations.\n              </li>\n\n              <li>\n                <strong>What is the event loop in JavaScript?</strong>\n                <br>\n                The event loop is a mechanism that handles the execution of multiple chunks of code\n                asynchronously. It constantly checks the call stack and task queue to manage\n                non-blocking operations.\n              </li>\n\n              <li>\n                <strong>Describe promise and async/await</strong>\n                <br>\n                A\n                <code>Promise</code>\n                represents a future value.\n                <code>async/await</code>\n                simplifies promise handling by allowing asynchronous code to look and behave like\n                synchronous code using\n                <code>await</code>\n                for promises.\n              </li>\n\n              <li>\n                <strong>How does 'this' keyword work in JavaScript?</strong>\n                <br>\n                <ul>\n                  <li>\n                    In global scope,\n                    <code>this</code>\n                    refers to\n                    <code>window</code>\n                    .\n                  </li>\n                  <li>\n                    In regular functions,\n                    <code>this</code>\n                    depends on how the function is called.\n                  </li>\n                  <li>\n                    Arrow functions don't have their own\n                    <code>this</code>\n                    — it’s inherited from their parent scope.\n                  </li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>What are arrow functions?</strong>\n                <br>\n                Arrow functions are a compact way to write functions and don't have their own\n                <code>this</code>\n                . Example:\n                <br>\n                <code>const greet = () =&gt; console.log(\"Hello\");</code>\n              </li>\n\n              <li>\n                <strong>Explain prototype and prototypal inheritance</strong>\n                <br>\n                In JavaScript, every object has a prototype. Prototypal inheritance means an object\n                can inherit properties and methods from another object via the prototype chain.\n              </li>\n\n              <li>\n                <strong>What is the difference between null and undefined?</strong>\n                <br>\n                <ul>\n                  <li>\n                    <strong>null</strong>\n                    : An assignment value that represents no value.\n                  </li>\n                  <li>\n                    <strong>undefined</strong>\n                    : A variable declared but not yet assigned any value.\n                  </li>\n                </ul>\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "What is closure in JavaScript? A closure is a function that remembers its lexical scope even when the function is executed outside of that scope. It allows accessing outer function variables from an inner function.",
        "Explain the concept of hoisting Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Only variable and function declarations are hoisted—not initializations.",
        "Describe promise and async/await A Promise represents a future value. async/await simplifies promise handling by allowing asynchronous code to look and behave like synchronous code using await for promises."
      ]
    },
    {
      "question": "Advanced Concept Questions",
      "answer": "<ol start=\"35\">\n              <li>\n                <strong>Explain currying in JavaScript</strong>\n                <br>\n                Currying is the transformation of a function with multiple arguments into a sequence\n                of functions:\n                <pre ngnonbindable=\"\"><code>\nfunction add(a) {{ '{' }}\n  return function(b) {{ '{' }}\n    return a + b;\n  {{ '}' }};\n{{ '}' }}\nconst add5 = add(5);\nconsole.log(add5(3)); // 8\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>What are web workers?</strong>\n                <br>\n                Web workers run JavaScript in background threads, enabling concurrent execution\n                without blocking the main thread.\n              </li>\n\n              <li>\n                <strong>Describe service workers and their use cases</strong>\n                <br>\n                Service workers act as a proxy between web apps and the network. They enable offline\n                support, background sync, and push notifications.\n              </li>\n\n              <li>\n                <strong>How does JavaScript handle asynchronous operations?</strong>\n                <br>\n                JavaScript uses an event loop to manage async operations through callbacks,\n                promises, and async/await.\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "What are web workers? Web workers run JavaScript in background threads, enabling concurrent execution without blocking the main thread.",
        "Describe service workers and their use cases Service workers act as a proxy between web apps and the network. They enable offline support, background sync, and push notifications.",
        "How does JavaScript handle asynchronous operations? JavaScript uses an event loop to manage async operations through callbacks, promises, and async/await."
      ]
    },
    {
      "question": "DOM and Browser Interaction",
      "answer": "<ol start=\"39\">\n              <li>\n                <strong>How do you manipulate the DOM?</strong>\n                <br>\n                Use methods like\n                <code>getElementById</code>\n                ,\n                <code>querySelector</code>\n                ,\n                <code>appendChild</code>\n                , and\n                <code>innerHTML</code>\n                .\n              </li>\n\n              <li>\n                <strong>Explain event bubbling and capturing</strong>\n                <br>\n                Bubbling: Events propagate from target to root.\n                <br>\n                Capturing: Events propagate from root to target. Use\n                <code>addEventListener(event, handler, true)</code>\n                for capturing.\n              </li>\n\n              <li>\n                <strong>How do you handle cross-origin requests?</strong>\n                <br>\n                Use CORS (Cross-Origin Resource Sharing) by configuring server headers like\n                <code>Access-Control-Allow-Origin</code>\n                .\n              </li>\n\n              <li>\n                <strong>What are web APIs?</strong>\n                <br>\n                Web APIs are browser-provided interfaces like DOM, Fetch, Geolocation, Storage,\n                etc., allowing interaction with the browser or OS.\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "How do you manipulate the DOM? Use methods like getElementById , querySelector , appendChild , and innerHTML .",
        "Explain event bubbling and capturing Bubbling: Events propagate from target to root. Capturing: Events propagate from root to target. Use addEventListener(event, handler, true) for capturing.",
        "How do you handle cross-origin requests? Use CORS (Cross-Origin Resource Sharing) by configuring server headers like Access-Control-Allow-Origin ."
      ]
    },
    {
      "question": "Practical Coding Questions",
      "answer": "<ol start=\"19\">\n              <li>\n                <strong>Implement a function to flatten a nested array</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nfunction flatten(arr) {{ '{' }}\n  return arr.reduce((acc, val) =&gt; \n    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);\n{{ '}' }}\n// flatten([1, [2, [3]]]) =&gt; [1, 2, 3]\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>Check if a string is a palindrome</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nfunction isPalindrome(str) {{ '{' }}\n  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return str === str.split('').reverse().join('');\n{{ '}' }}\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>Remove duplicate values from an array</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nconst removeDuplicates = arr =&gt; [...new Set(arr)];\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>Implement a simple promise-based API call</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nfunction fetchData(url) {{ '{' }}\n  return fetch(url)\n    .then(res =&gt; res.json())\n    .catch(err =&gt; console.error(err));\n{{ '}' }}\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>Write a custom map/filter/reduce implementation</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nArray.prototype.myMap = function(callback) {{ '{' }}\n  let result = [];\n  for (let i = 0; i &lt; this.length; i++) {{ '{' }}\n    result.push(callback(this[i], i, this));\n  {{ '}' }}\n  return result;\n{{ '}' }}\n      </code></pre>\n              </li>\n\n              <li>\n                <strong>Combine two arrays and filter even numbers</strong>\n                <br>\n                <pre ngnonbindable=\"\"><code>\nconst mergeAndFilterEven = (a, b) =&gt; \n  [...a, ...b].filter(num =&gt; num % 2 === 0);\n      </code></pre>\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Check if a string is a palindrome function isPalindrome(str) {{ '{' }} str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return str === str.split('').reverse().join(''); {{ '}' }}",
        "Remove duplicate values from an array const removeDuplicates = arr => [...new Set(arr)];",
        "Implement a simple promise-based API call function fetchData(url) {{ '{' }} return fetch(url) .then(res => res.json()) .catch(err => console.error(err)); {{ '}' }}"
      ]
    },
    {
      "question": "Performance and Optimization Questions",
      "answer": "<ol start=\"25\">\n              <li>\n                <strong>How do you optimize JavaScript performance?</strong>\n                <br>\n                <ul>\n                  <li>Minimize DOM manipulation</li>\n                  <li>Use throttling/debouncing</li>\n                  <li>Use lazy loading</li>\n                  <li>Avoid memory leaks</li>\n                  <li>Minify and bundle resources</li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>Explain memory leaks in JavaScript</strong>\n                <br>\n                Memory leaks occur when unused objects are not garbage collected. Common causes:\n                <ul>\n                  <li>Unremoved event listeners</li>\n                  <li>Global variables</li>\n                  <li>Detached DOM nodes</li>\n                  <li>Closures with large retained scopes</li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>What are best practices to reduce DOM manipulation?</strong>\n                <br>\n                <ul>\n                  <li>Use `documentFragment` for batch DOM updates</li>\n                  <li>Minimize reflows and repaints</li>\n                  <li>Use efficient selectors like `getElementById`</li>\n                  <li>Debounce UI-related functions</li>\n                </ul>\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "How do you optimize JavaScript performance? Minimize DOM manipulation",
        "Use throttling/debouncing",
        "Minify and bundle resources"
      ]
    },
    {
      "question": "Framework Related Questions",
      "answer": "<ol start=\"28\">\n              <li>\n                <strong>Compare React, Vue, and Angular</strong>\n                <br>\n                <ul>\n                  <li>\n                    <strong>React:</strong>\n                    Library focused on UI, uses JSX and virtual DOM.\n                  </li>\n                  <li>\n                    <strong>Vue:</strong>\n                    Lightweight framework, reactive data binding, single file components.\n                  </li>\n                  <li>\n                    <strong>Angular:</strong>\n                    Full-featured framework with dependency injection, TypeScript, two-way binding.\n                  </li>\n                </ul>\n              </li>\n\n              <li>\n                <strong>What are the key concepts in React?</strong>\n                <br>\n                Components, state, props, lifecycle methods, hooks, and virtual DOM.\n              </li>\n\n              <li>\n                <strong>Explain state management in modern frameworks</strong>\n                <br>\n                Techniques like Context API, Redux (React), Vuex (Vue), and RxJS with services\n                (Angular) are used to manage state across components.\n              </li>\n\n              <li>\n                <strong>How do you handle component communication?</strong>\n                <br>\n                <ul>\n                  <li>\n                    <strong>React:</strong>\n                    Props drilling, Context API, Redux\n                  </li>\n                  <li>\n                    <strong>Angular:</strong>\n                    @Input, @Output, services, RxJS subjects\n                  </li>\n                  <li>\n                    <strong>Vue:</strong>\n                    Props, events, Vuex store\n                  </li>\n                </ul>\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "Compare React, Vue, and Angular React: Library focused on UI, uses JSX and virtual DOM.",
        "Vue: Lightweight framework, reactive data binding, single file components.",
        "Angular: Full-featured framework with dependency injection, TypeScript, two-way binding."
      ]
    },
    {
      "question": "Technical Scenario Questions",
      "answer": "<ol start=\"32\">\n              <li>\n                <strong>How would you handle error boundaries?</strong>\n                <br>\n                In React, use a class component with\n                <code>componentDidCatch</code>\n                and\n                <code>getDerivedStateFromError</code>\n                to catch errors and display fallback UI.\n              </li>\n\n              <li>\n                <strong>Describe your approach to debugging JavaScript code</strong>\n                <br>\n                Use\n                <code>console.log</code>\n                , Chrome DevTools, debugger statements, browser network tab, and testing tools like\n                Jest or Mocha.\n              </li>\n\n              <li>\n                <strong>How do you ensure cross-browser compatibility?</strong>\n                <br>\n                <ul>\n                  <li>Use feature detection via Modernizr</li>\n                  <li>Apply polyfills and transpilation (e.g., Babel)</li>\n                  <li>Test with tools like BrowserStack</li>\n                </ul>\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript"
      ],
      "keyPoints": [
        "How would you handle error boundaries? In React, use a class component with componentDidCatch and getDerivedStateFromError to catch errors and display fallback UI.",
        "Describe your approach to debugging JavaScript code Use console.log , Chrome DevTools, debugger statements, browser network tab, and testing tools like Jest or Mocha.",
        "How do you ensure cross-browser compatibility? Use feature detection via Modernizr"
      ]
    }
  ]
}
