// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.637Z

export const javascriptQuestions = {
  questions: [
    {
      question: 'JS Programs',
      answer: `<ol>
                <li>
                  <strong>Reverse of string or array:</strong>
                  <br>
                  <code>
                    let data = [1, 2, 5, 4, 6, 7];
                    <br>
                    console.log(data.reverse()); // Output: [7, 6, 4, 5, 2, 1]
                  </code>
                </li>

                <li>
                  <strong>Class with name, age, email and print multiple objects:</strong>
                  <br>
                  <code>
                    class Data {
                    <br>
                    &nbsp;&nbsp;constructor(name, age, email) {
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;this.age = age;
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;this.email = email;
                    <br>
                    &nbsp;&nbsp;}
                    <br>
                    }
                    <br>
                    <br>

                    const arr = [
                    <br>
                    &nbsp;&nbsp;new Data("a", 10, "a@a.com"),
                    <br>
                    &nbsp;&nbsp;new Data("b", 20, "b@b.com"),
                    <br>
                    &nbsp;&nbsp;new Data("c", 30, "c@c.com")
                    <br>
                    ];
                    <br>
                    <br>

                    for (let i = 0; i < arr.length; i++) {
                    <br>
                    &nbsp;&nbsp;const element = arr[i];
                    <br>
                    &nbsp;&nbsp;console.log(element.name + "\\t" + element.age + "\\t" +
                    element.email);
                    <br>
                    }
                  </code>
                </li>

                <li>
                  <strong>Object Destructuring:</strong>
                  <br>
                  <code>
                    const person = {
                    <br>
                    &nbsp;&nbsp;name: "rajesh",
                    <br>
                    &nbsp;&nbsp;address: { city: "san fransco", age: 10 }
                    <br>
                    };
                    <br>
                    <br>

                    const { name } = person;
                    <br>
                    console.log(name); // Output: rajesh
                    <br>
                    const { address: { city } } = person;
                    <br>
                    console.log(city); // Output: san fransco
                  </code>
                </li>

                <li>
                  <strong>Reverse each word in a string inside an object:</strong>
                  <br>
                  <code>
                    const person = {
                    <br>
                    &nbsp;&nbsp;name: "rajesh",
                    <br>
                    &nbsp;&nbsp;address: { city: "san fransco", age: 10 }
                    <br>
                    };
                    <br>
                    <br>

                    const { address: { city } } = person;
                    <br>
                    const reversed = city.split(' ').map(word =>
                    word.split('').reverse().join('')).join(' ');
                    <br>
                    console.log(reversed); // Output: nas ocnsarf
                  </code>
                </li>

                <li>
                  <strong>Find occurrence of each character in a string:</strong>
                  <br>
                  <code>
                    let data = "enginering";
                    <br>
                    let occurrence = {};
                    <br>
                    <br>

                    for (let char of data) {
                    <br>
                    &nbsp;&nbsp;occurrence[char] = (occurrence[char] || 0) + 1;
                    <br>
                    }
                    <br>
                    <br>
                    console.log(occurrence);
                  </code>
                </li>

                <li>
                  <strong>Find missing number in array:</strong>
                  <br>
                  <code>
                    let data = [1, 2, 3, 4, 6, 7, 8, 9];
                    <br>
                    let missingNumber = 0;
                    <br>
                    <br>

                    for (let i = 0; i < data.length; i++) {
                    <br>
                    &nbsp;&nbsp;if (data[i] + 1 !== data[i + 1]) {
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;missingNumber = data[i] + 1;
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;break;
                    <br>
                    &nbsp;&nbsp;}
                    <br>
                    }
                    <br>
                    console.log("Missing number:", missingNumber); // Output: 5
                  </code>
                </li>
              </ol>

              
              <ol>
                <li>
                  <strong>let & const:</strong>
                  Block-scoped variables that replace
                  <br>
                  <code>var</code>
                  .
                  <code>
                    let name = "John";
                    <br>
                    name = "Doe"; // ✅ Allowed const age = 30;
                    <br>
                    age = 40; // ❌ Error: Assignment to constant variable
                  </code>
                </li>

                <li>
                  <strong>Template Literals:</strong>
                  Use backticks (
                  <code>\` \`</code>
                  ) for multi-line strings and variable interpolation.
                  <br>
                  <code>
                    const name = "Alice";
                    <br>
                    const message = \`Hello, \${"\$"}{name}!\`;
                    <br>
                    console.log(message); // Output: Hello, Alice!
                  </code>
                </li>

                <li>
                  <strong>Arrow Functions:</strong>
                  A shorter syntax for functions.
                  <br>
                  <code>
                    const add = (a, b) => a + b;
                    <br>
                    console.log(add(5, 3)); // Output: 8
                  </code>
                </li>

                <li>
                  <strong>Destructuring:</strong>
                  Extract values from arrays or objects easily.
                  <br>
                  <code>
                    const person = { name: "Alice", age: 25 };
                    <br>
                    const {"{"} name, age {"}"} = person;
                    <br>
                    console.log(name, age); // Output: Alice 25
                  </code>
                </li>

                <li>
                  <strong>Spread & Rest Operators:</strong>
                  <ul>
                    <li>
                      <strong>
                        Spread (
                        <code>...</code>
                        ):
                      </strong>
                      Expands arrays or objects.
                    </li>
                    <li>
                      <strong>
                        Rest (
                        <code>...</code>
                        ):
                      </strong>
                      Collects multiple arguments into an array.
                    </li>
                  </ul>
                  <code>
                    // Spread Example
                    <br>
                    const arr1 = [1, 2, 3];
                    <br>
                    const arr2 = [...arr1, 4, 5];
                    <br>
                    console.log(arr2); // Output: [1, 2, 3, 4, 5]
                    <br>
                    <br>

                    // Rest Example
                    <br>
                    const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
                    <br>
                    console.log(sum(1, 2, 3, 4)); // Output: 10
                  </code>
                </li>

                <li>
                  <strong>for...of Loop:</strong>
                  Used for iterating over iterable objects like arrays.
                  <br>
                  <code>
                    const numbers = [10, 20, 30];
                    <br>
                    for (const num of numbers) {
                    <br>
                    console.log(num); // Output: 10 20 30
                    <br>
                    }
                  </code>
                </li>

                <li>
                  <strong>Promises:</strong>
                  Handle asynchronous operations.
                  <br>
                  <code>
                    const fetchData = () => {
                    <br>
                    return new Promise((resolve, reject) => {
                    <br>
                    setTimeout(() => resolve("Data fetched!"), 2000);
                    <br>
                    });
                    <br>
                    };
                    <br>
                    <br>

                    fetchData().then(data => console.log(data)); // Output (after 2 sec): Data
                    fetched!
                  </code>
                </li>

                <li>
                  <strong>Classes:</strong>
                  Introduces object-oriented programming in JavaScript.
                  <br>
                  <code>
                    class Person {
                    <br>
                    constructor(name, age) {
                    <br>
                    this.name = name;
                    <br>
                    this.age = age;
                    <br>
                    }
                    <br>
                    greet() {
                    <br>
                    console.log(\`Hello, my name is \${"\$"}{this.name}\`);
                    <br>
                    }
                    <br>
                    }
                    <br>
                    <br>

                    const john = new Person("John", 30);
                    <br>
                    john.greet(); // Output: Hello, my name is John
                  </code>
                </li>

                <li>
                  <strong>Modules:</strong>
                  Helps in writing modular and reusable JavaScript code.
                  <br>
                  <br>
                  <strong>Export (module.js):</strong>
                  <br>
                  <code>
                    export const name = "Alice";
                    <br>
                    export function greet() {
                    <br>
                    return "Hello!";
                    <br>
                    }
                  </code>
                  <br>
                  <br>
                  <strong>Import (main.js):</strong>
                  <code>
                    import {"{"} name, greet {"}"} from "./module.js";
                    <br>
                    console.log(name); // Output: Alice
                    <br>
                    console.log(greet()); // Output: Hello!
                  </code>
                </li>

                <li>
                  <strong>Default Parameters:</strong>
                  Allows function parameters to have default values.
                  <br>
                  <code>
                    const greet = (name = "Guest") => \`Hello, \${"\$"}{name}!\`;
                    <br>
                    console.log(greet()); // Output: Hello, Guest!
                    <br>
                    console.log(greet("Bob")); // Output: Hello, Bob!
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Rest and spread operator with examples in js?',
      answer: `<ol>
                <li>
                  The
                  <strong>rest operator</strong>
                  (
                  <code>...</code>
                  ) is used to collect multiple elements into an array.
                  <ul>
                    <li>
                      Example: Collecting function arguments.
                      <pre><code class="javascript">
              function sum(...numbers) {
                  return numbers.reduce((acc, curr) => acc + curr, 0);
              }
              console.log(sum(1, 2, 3, 4)); // Output: 10
                      </code></pre>
                    </li>
                    <li>
                      Example: Using rest in destructuring.
                      <pre><code class="javascript">
              const [first, second, ...rest] = [1, 2, 3, 4, 5];
              console.log(first);  // Output: 1
              console.log(second); // Output: 2
              console.log(rest);   // Output: [3, 4, 5]
                      </code></pre>
                    </li>
                  </ul>
                </li>
                <li>
                  The
                  <strong>spread operator</strong>
                  (
                  <code>...</code>
                  ) is used to expand an iterable (like an array or object) into individual
                  elements.
                  <ul>
                    <li>
                      Example: Spreading an array.
                      <pre><code class="javascript">
              const arr1 = [1, 2, 3];
              const arr2 = [...arr1, 4, 5];
              console.log(arr2); // Output: [1, 2, 3, 4, 5]
                      </code></pre>
                    </li>
                    <li>
                      Example: Spreading an object.
                      <pre><code class="javascript">
              const obj1 = { a: 1, b: 2 };
              const obj2 = { ...obj1, c: 3 };
              console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
                      </code></pre>
                    </li>
                    <li>
                      Example: Using spread with function arguments.
                      <pre><code class="javascript">
              function multiply(x, y, z) {
                  return x * y * z;
              }
              const numbers = [2, 3, 4];
              console.log(multiply(...numbers)); // Output: 24
                      </code></pre>
                    </li>
                  </ul>
                </li>
                <li>
                  A combined example of rest and spread operators:
                  <pre><code class="javascript">
              function concatenate(separator, ...strings) {
                  return strings.join(separator);
              }
              const words = ['Hello', 'world', 'from', 'JavaScript'];
              console.log(concatenate(' ', ...words)); // Output: "Hello world from JavaScript"
                  </code></pre>
                </li>
                <li>
                  Summary:
                  <ul>
                    <li>
                      <strong>Rest Operator</strong>
                      : Collects multiple elements into an array.
                    </li>
                    <li>
                      <strong>Spread Operator</strong>
                      : Expands an array or object into individual elements.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is event looping in js?',
      answer: `<ol>
                <li>
                  Event Loop in JavaScript is a mechanism that allows JavaScript to handle
                  asynchronous operations and maintain its single-threaded nature.
                  <ul>
                    <li>
                      JavaScript is single-threaded, meaning it can only execute one task at a time.
                      However, asynchronous operations like timers (
                      <code>setTimeout</code>
                      ), network requests (
                      <code>fetch</code>
                      ), or DOM events are handled using the Event Loop.
                    </li>
                    <li>
                      The Event Loop ensures that asynchronous tasks do not block the main thread
                      and are executed once the Call Stack is empty.
                    </li>
                  </ul>
                </li>
                <li>
                  Key Concepts of the Event Loop:
                  <ul>
                    <li>
                      <strong>Call Stack</strong>
                      : A data structure that keeps track of function calls. Functions are pushed
                      onto the stack when called and popped off when completed.
                    </li>
                    <li>
                      <strong>Web APIs</strong>
                      : Provided by the browser (or Node.js runtime), these allow JavaScript to
                      perform asynchronous operations like timers, DOM events, or network requests
                      without blocking the main thread.
                    </li>
                    <li>
                      <strong>Callback Queue (Task Queue)</strong>
                      : Holds callbacks for asynchronous operations like
                      <code>setTimeout</code>
                      or DOM events, waiting to be executed.
                    </li>
                    <li>
                      <strong>Microtask Queue</strong>
                      : A higher-priority queue for tasks like Promises (
                      <code>then</code>
                      ,
                      <code>catch</code>
                      ) and
                      <code>MutationObserver</code>
                      .
                    </li>
                    <li>
                      <strong>Event Loop</strong>
                      : Continuously checks if the Call Stack is empty. If empty, it processes tasks
                      from the Microtask Queue first, followed by the Callback Queue.
                    </li>
                  </ul>
                </li>
                <li>
                  How the Event Loop Works:
                  <ul>
                    <li>
                      Synchronous code is executed immediately and pushed onto the Call Stack.
                    </li>
                    <li>
                      Asynchronous operations are offloaded to Web APIs. Once completed, their
                      callbacks are placed in the appropriate queue:
                      <ul>
                        <li>
                          Microtask Queue: For Promises and
                          <code>MutationObserver</code>
                          .
                        </li>
                        <li>
                          Callback Queue: For
                          <code>setTimeout</code>
                          ,
                          <code>setInterval</code>
                          , and other asynchronous tasks.
                        </li>
                      </ul>
                    </li>
                    <li>
                      The Event Loop prioritizes the Microtask Queue over the Callback Queue,
                      ensuring all microtasks are processed before moving to regular tasks.
                    </li>
                  </ul>
                </li>
                <li>
                  Example of Event Loop in Action:
                  <pre><code class="javascript">
              console.log("Start");

              setTimeout(() => {
                console.log("Timeout");
              }, 0);

              Promise.resolve().then(() => {
                console.log("Promise");
              });

              console.log("End");
                  </code></pre>
                  <ul>
                    <li>
                      Execution Flow:
                      <ol>
                        <li>Synchronous code: "Start" and "End" are logged to the console.</li>
                        <li>
                          Asynchronous code:
                          <ul>
                            <li>
                              The
                              <code>setTimeout</code>
                              callback is sent to the Callback Queue after 0 milliseconds.
                            </li>
                            <li>
                              The
                              <code>Promise.resolve</code>
                              callback is sent to the Microtask Queue.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Event Loop Processing:
                          <ul>
                            <li>
                              The Event Loop processes the Microtask Queue first, logging "Promise".
                            </li>
                            <li>
                              After all microtasks are processed, the Event Loop moves to the
                              Callback Queue, logging "Timeout".
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Output:
                      <pre>              Start
              End
              Promise
              Timeout
                      </pre>
                    </li>
                  </ul>
                </li>
                <li>
                  Key Points to Remember:
                  <ul>
                    <li>
                      JavaScript is single-threaded, but asynchronous operations are handled using
                      the Event Loop.
                    </li>
                    <li>
                      Microtasks (e.g., Promises) have higher priority than regular tasks (e.g.,
                      <code>setTimeout</code>
                      ).
                    </li>
                    <li>
                      The Event Loop ensures non-blocking behavior by offloading long-running tasks
                      to Web APIs.
                    </li>
                    <li>
                      The browser renders updates to the DOM only after the Call Stack is empty and
                      all microtasks are processed.
                    </li>
                  </ul>
                </li>
                <li>
                  Real-World Analogy:
                  <ul>
                    <li>
                      Imagine you're a chef in a restaurant:
                      <ul>
                        <li>
                          The
                          <strong>Call Stack</strong>
                          is your current task list (you can only cook one dish at a time).
                        </li>
                        <li>
                          The
                          <strong>Web APIs</strong>
                          are your assistants who handle tasks like boiling water or marinating
                          food.
                        </li>
                        <li>
                          The
                          <strong>Callback Queue</strong>
                          is the list of dishes ready to be served.
                        </li>
                        <li>
                          The
                          <strong>Microtask Queue</strong>
                          is a VIP list of urgent orders that need immediate attention.
                        </li>
                        <li>
                          The
                          <strong>Event Loop</strong>
                          is you checking if you’re free to serve the next dish.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Conclusion:
                  <ul>
                    <li>
                      The Event Loop is a fundamental concept in JavaScript that enables
                      non-blocking behavior and efficient handling of asynchronous operations.
                    </li>
                    <li>
                      By understanding the Call Stack, Web APIs, Microtask Queue, Callback Queue,
                      and the Event Loop itself, you can write more efficient and predictable
                      asynchronous code.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is Event Delegation?',
      answer: `<ol>
                <li>
                  <strong>Why Use Event Delegation?</strong>
                  <ul>
                    <li>
                      Reduces memory usage by adding a single event listener instead of multiple.
                    </li>
                    <li>
                      Handles dynamically added elements without needing extra event bindings.
                    </li>
                    <li>Improves performance in large applications.</li>
                  </ul>
                </li>

                <li>
                  <strong>How It Works:</strong>
                  Instead of adding event listeners to multiple child elements, we attach one to a
                  common ancestor and use **event.target** to identify the clicked element.
                  <code>
                    document.getElementById("parent").addEventListener("click", function(event)
                    {
                    <br>
                    if (event.target.tagName === "BUTTON") {
                    <br>
                    console.log("Button clicked:", event.target.textContent);
                    <br>
                    }
                    <br>
                    });
                  </code>
                </li>

                <li>
                  <strong>Example Without Event Delegation:</strong>
                  This approach is inefficient because it binds an event listener to each button.
                  <code>
                    const buttons = document.querySelectorAll("button");
                    <br>
                    buttons.forEach(button => {
                    <br>
                    button.addEventListener("click", () => {
                    <br>
                    console.log("Button clicked!");
                    <br>
                    });
                    <br>
                    });
                  </code>
                </li>

                <li>
                  <strong>Example With Event Delegation:</strong>
                  Using a **single event listener** on the parent.
                  <code>
                    document.getElementById("list").addEventListener("click", function(event) {
                    <br>
                    if (event.target.tagName === "LI") {
                    <br>
                    console.log("Item clicked:", event.target.textContent);
                    <br>
                    }
                    <br>
                    });
                  </code>
                </li>

                <li>
                  <strong>Use Case - Dynamically Added Elements:</strong>
                  Event delegation works even when new elements are added dynamically.
                  <code>
                    document.getElementById("parent").addEventListener("click", function(event)
                    {
                    <br>
                    if (event.target.classList.contains("child")) {
                    <br>
                    console.log("New child clicked:", event.target.textContent);
                    <br>
                    }
                    <br>
                    });
                    <br>
                    <br>

                    // Dynamically adding elements
                    <br>
                    const newButton = document.createElement("button");
                    <br>
                    newButton.textContent = "Click Me";
                    <br>
                    newButton.classList.add("child");
                    <br>
                    document.getElementById("parent").appendChild(newButton);
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is Promises?',
      answer: `<ol>
                <li>Promises are used for handling of asynchronous actions.</li>
                <li>
                  Promises produces a single value over period of time: either a resolved value, or
                  a reason to fail.
                </li>
                <li>
                  Promises are eager so will be executed immediately. If we need lazy, then we
                  should go for Observables.
                </li>
                <li>
                  A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
                </li>
                <li>
                  Once Promise is started, can't be cancelled. But We can stop the observables by
                  calling unsubscribe() method.
                </li>
                <li>
                  Users can attach callbacks to handle the fulfilled value or the reason for
                  rejection.
                </li>
                <code>
                  //Producing results
                  <br>
                  let examplePromise = new Promise((resolve, reject) => '{' }}
                  <br>
                  console.log(resolve);
                  <br>
                  let x = 10;
                  <br>

                  if(x == 10){
                  <br>
                  resolve('Success');
                  <br>
                  }else {
                  <br>
                  reject('Fail');
                  <br>
                  }
                  <br>

                  });
                  <br>

                  //consuming
                  <br>
                  examplePromise.then((value) =>{console.log('first fun ' + value);},
                  <br>
                  (error) =>{console.log('second fun ' + error);});
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is observable?',
      answer: `<ol>
                <li>Observables are used for handling of asynchronous actions.</li>
                <li>
                  Observables produces multiple values over period of time and pushes to the
                  subscribers.
                </li>
                <li>
                  Observable will be executed only by subscribing it using subscribe() method,
                  passing callbacks for notifications of new values, errors, or completion.
                </li>
                <li>
                  Angular’s
                  <b>HttpClient</b>
                  returns observables from HTTP method calls. For instance, http.get(‘/api’) returns
                  an observable.
                </li>
                <li>
                  Using
                  <b>unsubscribe()</b>
                  method, we can unsubscribe the observes. Usually this code will in ngOnDestroy()
                  method.
                </li>
                <li>RxJS libray providers the library for observables</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the difference between Observables vs Promises?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Observables</th>
                    <th scope="col">Promises</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emit multiple values over a period of time.</td>
                    <td>Emit a single value over a period of time.</td>
                  </tr>
                  <tr>
                    <td>
                      Are lazy: they’re not executed until we subscribe to them using the
                      subscribe() method.
                    </td>
                    <td>Eager: execute immediately after creation.</td>
                  </tr>
                  <tr>
                    <td>
                      We can stop the subscriptions by calling the unsubscribe() method, which stops
                      the listener from receiving further values.
                    </td>
                    <td>Are not cancellable.</td>
                  </tr>
                  <tr>
                    <td>
                      Provide the map for forEach, filter, reduce, retry, and retryWhen operators.
                    </td>
                    <td>Don’t provide any operations.</td>
                  </tr>
                  <tr>
                    <td>Deliver errors to the subscribers.</td>
                    <td>Push errors to the child promises.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the differences between == and === operators?',
      answer: `<ol>
                <li>
                  <b>=</b>
                  means for assignment.
                </li>
                <li>
                  <b>==</b>
                  meant for content comparison. It checks only the content and doesn't care about
                  the javascript data.
                  <div>
                    <code>
                      let a = 30;
                      <br>
                      let b = '30';
                      <br>
                      if(a == b){
                      <br>
                      console.log('both are equal values');
                      <br>
                      }
                      <br>
                    </code>
                  </div>
                </li>
                <li>
                  <b>===</b>
                  meant for content comparison and data type check. It checks content and type of
                  the variables. It returns true only value is same and data type also same. Below
                  example returns false since types are not matched.
                  <div>
                    <code>
                      let a = 30;
                      <br>
                      let b = '30';
                      <br>
                      if(a === b){
                      <br>
                      console.log('both are equal values');
                      <br>
                      }
                      <br>
                    </code>
                  </div>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the differences between the let, const and var?',
      answer: `<div>
                var, let and const keywords are used to declare variables.
                <ol>
                  <li><b>var</b></li>
                  <ol>
                    <li>
                      Redeclation is possible only in non strict mode. Last value will be assigned.
                    </li>
                    <li>Initialization is possible before declaration.</li>
                    <li>It will a global scope.</li>
                    <li>If we are not assigning any value then undefined will be there.</li>
                    <li>Reassignment is possible.</li>
                    <li>Variable hoisting will happen => Moving all variables to the top</li>
                  </ol>

                  <li><b>let (es6 2015)</b></li>
                  <ol>
                    <li>Redeclation is not possible.</li>
                    <li>It will a block level scope.</li>
                    <li>Initialization is not possible before declaration.</li>
                    <li>If we are not assigning any value then undefined will be there.</li>
                    <li>Reassignment is possible.</li>
                  </ol>
                  <li><b>const (es6 2015)</b></li>
                  <ol>
                    <li>Redeclation is not possible.</li>
                    <li>It will a block level scope.</li>
                    <li>Initialization is not possible before declaration.</li>
                    <li>if we are not assigning any value then it will be a error.</li>
                    <li>Initial value is mandatory.</li>
                    <li>Reassignment is not possible.</li>
                  </ol>
                </ol>
              </div>

              <table class="table table-striped table-bordered mt-2">
                <thead>
                  <tr>
                    <th scope="col">feature</th>
                    <th scope="col">var</th>
                    <th scope="col">let</th>
                    <th scope="col">const</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Redeclation</th>
                    <td>Possible</td>
                    <td>Not possible</td>
                    <td>Not possible</td>
                  </tr>
                  <tr>
                    <th scope="row">Initialization before declartion</th>
                    <td>Possible</td>
                    <td>Not possible</td>
                    <td>Not possible</td>
                  </tr>
                  <tr>
                    <th scope="row">Scope</th>
                    <td>Global</td>
                    <td>Block</td>
                    <td>Block</td>
                  </tr>
                  <tr>
                    <th scope="row">Default values</th>
                    <td>undefined</td>
                    <td>undefined</td>
                    <td>If we are not assigning any value then it will be a error.</td>
                  </tr>
                  <tr>
                    <th scope="row">Reassignment</th>
                    <td>Possible</td>
                    <td>Possible</td>
                    <td>Not possible</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is session storage?',
      answer: `<ol>
                <li>Using sessionStorage object we can store key/value pairs in the browser.</li>
                <li>
                  Whenever we open a new tab, new session will be created. When close the tab,
                  session will be closed.
                </li>
                <li>Data in sessionStorage is cleared when the browser tab is closed.</li>
                <li>
                  A page session lasts as long as the tab or the browser is open, and survives over
                  page reloads and restores.
                </li>
                <code>
                  // Save data to sessionStorage
                  <br>
                  sessionStorage.setItem('key', 'value');
                  <br>

                  // Get saved data from sessionStorage
                  <br>
                  let data = sessionStorage.getItem('key');
                  <br>

                  // Remove saved data from sessionStorage
                  <br>
                  sessionStorage.removeItem('key');
                  <br>

                  // Remove all saved data from sessionStorage
                  <br>
                  sessionStorage.clear();
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is local storage?',
      answer: `<ol>
                <li>Using localStorage object we can store key/value pairs in the browser.</li>
                <li>
                  localStorage data has no expiration time. So even if we closing the browser also
                  data will be saved.
                </li>
                <code>
                  // Save data to localStorage
                  <br>
                  localStorage.setItem('key', 'value');
                  <br>

                  // Get saved data from localStorage
                  <br>
                  let data = localStorage.getItem('key');
                  <br>

                  // Remove saved data from localStorage
                  <br>
                  localStorage.removeItem('key');
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'When to use session storage and local storage?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Session Storage</th>
                    <th scope="col">Local Storage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The storage capacity of session storage is 5MB</td>
                    <td>The storage capacity of local storage is 5MB/10MB</td>
                  </tr>
                  <tr>
                    <td>Data will be deleted once browser tab is closed.</td>
                    <td>Data will not be deleted even if we close the browser.</td>
                  </tr>
                  <tr>
                    <td>Data will be deleted once browser tab is closed.</td>
                    <td>
                      As it is not session-based, it must be deleted via javascript or manually
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is hoisting in javascript?',
      answer: `<ol>
                <li>A variable can be used before it has been declared.</li>
                <li>
                  Hoisting is the default behavior of moving all the declarations at the top of the
                  scope before code execution.
                </li>
                <li>
                  Basically, it gives us an advantage that no matter where functions and variables
                  are declared, they are moved to the top of their scope regardless of whether their
                  scope is global or local.
                </li>
                <li>
                  JavaScript allocates memory for all variables and functions defined in the program
                  before execution.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is a call back method?',
      answer: `<ol>
                <li>
                  Callback function is a function which is passed as argument to another method.
                </li>
                <li>
                  In the below example, printName is function. We are passing 'printName' function
                  as a argument to the setTimeout method. It will be executed after 3 seconds.
                  <br>
                  <code>
                    function printName(){
                    <br>
                    console.log('Welcome')
                    <br>
                    }
                    <br>

                    setTimeout(printName, 3000);
                    <br>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the difference between Typescript and Javascript?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Typescript</th>
                    <th scope="col">Javascript</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Typescript is a superset of JavaScript. TypeScript is supports an
                      Object-oriented programming language. TypeScript is nothing but JavaScript and
                      some additional features.
                    </td>
                    <td>JavaScript is a scripting language.</td>
                  </tr>
                  <tr>
                    <td>
                      TypeScript code needs to be compiled. TypeScript compiler can compile the .ts
                      files into .js files.
                    </td>
                    <td>No need to compile JavaScript.</td>
                  </tr>
                  <tr>
                    <td>Typescript supports generics, interfaces</td>
                    <td>JavaScript doesn't supports generics, interfaces</td>
                  </tr>
                  <tr>
                    <td>TypeScript gives support for modules. A module is group of classes.</td>
                    <td>JavaScript gives support for modules.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is jQuery?',
      answer: `<ol>
                <li>jQuery is a small, lightweight JavaScript library.</li>
                <li>
                  jQuery is platform-independent. It simplifies AJAX call and DOM manipulation.
                </li>
                <li>jQuery means "write less do more".</li>
                <li>
                  The jQuery library contains the following features:
                  <ul>
                    <li>HTML/DOM manipulation</li>
                    <li>CSS manipulation</li>
                    <li>HTML event methods</li>
                    <li>Effects and animations</li>
                    <li>AJAX</li>
                    <li>Utilities</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are difference between jQuery and Angular?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">jQuery</th>
                    <th scope="col">Angular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>jQuery is a Javascript-based library</td>
                    <td>It is a Typescript-based, front-end development framework</td>
                  </tr>
                  <tr>
                    <td>It is used for DOM manipulation</td>
                    <td>It is used for creating single-page applications.</td>
                  </tr>
                  <tr>
                    <td>It is suitable for small size projects</td>
                    <td>It is suitable for large, complex projects</td>
                  </tr>
                  <tr>
                    <td>It is unidirectional</td>
                    <td>It is bi-directional (supports two-way data binding)</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is interface in typescript?',
      answer: `<ol>
                <li>Interface is a specification.</li>
                <li>It has only properties and abstract methods.</li>
                <li>A method which doesn't have a body called Abstract method.</li>
                <li>Using interfaces, we can achieve multiple inheritence.</li>
                <code>export interface OnInit { name: string; ngOnInit(); }</code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is asyc, await?',
      answer: `<ol>
                <li>
                  <b>async</b>
                  makes a function return a Promise.
                  <code class="d-block">
                    async function myFunction() {
                    <br>
                    return "Hello";
                    <br>
                    }
                    <br>
                  </code>
                </li>
                <li>
                  <b>await</b>
                  makes a function wait for a Promise and returns the final value.
                  <code class="d-block">
                    async function myDisplay() {
                    <br>
                    let myPromise = new Promise(function(resolve, reject) {
                    <br>
                    resolve("I love You !!");
                    <br>
                    });
                    <br>
                    document.getElementById("demo").innerHTML = await myPromise;
                    <br>
                    }
                    <br>
                  </code>
                </li>
                <li>await should be inside the async functions only.</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is spread operator?',
      answer: `<ol>
                <li>... operator is called spred operator.</li>
                <li>
                  Spread operator can be used to iterate over each variable and copy to another
                  array
                  <code class="d-block">
                    let names = ['ss', 'sb'];
                    <br>
                    let clone = [...names]
                  </code>
                </li>
                <li>
                  Spread operator can be used to copy an object also. Here we are copying p object
                  data to new clone object.
                  <code class="d-block">
                    let p = {name: 'SS', age: 30}
                    <br>
                    let clone = {...p}
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is arrow function?',
      answer: `<ol>
                <li>Arrow function is es6 function or single line function.</li>
                <li>
                  Array function reduces the no of lines code. Parenthesis, return state are
                  optional if we have a single line.
                  <code class="d-block">hello = () => "Hello World!";</code>
                </li>
                <li>
                  If we have morethan one line of code, then return statement and {}
                  brackets are mandatory.
                  <code class="d-block">
                    hello = () => {alert('test'); return "Hello World!";}
                  </code>
                </li>
                <li>
                  <p>
                    In regular functions the
                    <b>this</b>
                    keyword represented the object that called the function, which could be the
                    window, the document, a button or whatever.
                  </p>

                  With arrow functions the
                  <b>this</b>
                  keyword always represents the object that defined the arrow function.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'why should we use arrow function instead of general function?',
      answer: `<div>
                <ol>
                  <li>
                    Arrow functions are anonymous functions. They allow us to write smaller function
                    syntax
                  </li>
                  <li>They don't return any value and can declare without the function keyword.</li>
                  <li>Arrow functions cannot be used as the constructors.</li>
                  <li>The context within the arrow functions is lexically or statically defined</li>
                </ol>
              </div>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Difference between undefined and null?',
      answer: `<ol>
                <li>
                  undefined means developer is not assigned any value to the variable. In the below
                  example, a value is "undefined" since user is not assigned any value.
                  <div>
                    <code>let a;</code>
                  </div>
                </li>
                <li>
                  null means developer is assigning a value as a default. In the below example, b
                  value is null
                  <div>
                    <code>let b = null;</code>
                  </div>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'How will declare optional parameters in typescript?',
      answer: `<ol>
                <li>
                  We can declare the optional parameters using the
                  <b>?</b>
                  symbol
                  <code>displayName(name?: string){}</code>
                </li>
                <li>
                  We can declare the optional parameters using by providing the default value also.
                  Here we provided default value so parameter is optional.
                  <code>displayName(name: string = 'SS'){}</code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Difference between splice and slice?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Splice</th>
                    <th scope="col">Slice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Splice is used to add/remove/replace elements from an array</td>
                    <td>
                      Slice is used to get the some part of array elements and returns a new array.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Splice method takes 3 arguments
                      <div>1. Index position</div>
                      <div>2. How many elements should be removed.</div>
                      <div>3. New elements to add/replace</div>
                      <code class="d-block">
                        const fruits = ["Banana", "Orange", "Apple", "Mango"];
                        <br>
                        // At position 2, add 2 elements:
                        <br>
                        fruits.splice(2, 0, "Lemon", "Kiwi");
                        <br>
                      </code>
                    </td>
                    <td>
                      slice method takes 2 arguments
                      <div>1. Start index position</div>
                      <div>2. End index position.</div>
                      <code class="d-block">
                        const fruits = ["Banana", "Orange", "Apple", "Mango"];
                        <br>
                        // Creates new array from 0 to 1st element:
                        <br>
                        const newFruits = fruits.slice(0, 1);
                        <br>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Splice changes to original array itself. It returns removed elemnts</td>
                    <td>
                      Slice doesn't change anything to original array. It returns a new array.
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is reduce method?',
      answer: `<ol>
                <li>The reduce() method executes a reducer function for array element.</li>
                <li>
                  The reduce() method returns a single value: the function's accumulated result.
                </li>
                <li>The reduce() method does not execute the function for empty array elements.</li>
                <code class="d-block">
                  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
                </code>

                Here reduce() is used to get the sum of values.
                <code class="d-block">
                  const numbers = [175, 50, 25];
                  <br>
                  let total = numbers.reduce((total, num) => total + num);
                  <br>
                </code>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is closure?',
      answer: `<ol>
                <li>
                  A closure is a persistent scope which holds on to local variables even after the
                  code execution has moved out of that block. Languages which support closure (such
                  as JavaScript, Swift, and Ruby) will allow you to keep a reference to a scope
                  (including its parent scopes), even after the block in which those variables were
                  declared has finished executing, provided you keep a reference to that block or
                  function somewhere.
                </li>
                <li>
                  The scope object and all its local variables are tied to the function and will
                  persist as long as that function persists.
                </li>
                <li>
                  <code>
                    function makeCounter () {
                    <br>
                    var count = 0;
                    <br>
                    return function () {
                    <br>
                    count += 1;
                    <br>
                    return count;
                    <br>
                    }
                    <br>
                    }
                    <br>

                    var x = makeCounter();
                    <br>
                    x(); returns 1
                    <br>
                    x(); returns 2
                    <br>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'what is context in function, why we require it?',
      answer: `<ol>
                <li>context is sharing values between functions/components.</li>
                <li>
                  if we have to pass parent property/instance to inside function/child function then
                  we have to go with context.
                </li>
                <li>
                  <code>
                    apply => this.callChildFunction.apply(this, [args1, args2])() call =>
                    this.callChildFunction.apply(this, args1, args2)() bind =>
                    this.callChildFunction.bind(this)(args1, args2)
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'how to pass context to function(bind), do we need bind for arrow function',
      answer: `<ol>
                <li>
                  for normal functions, we have to pass context to access inside that function
                </li>
                <li>syntax => const bindedFunction = this.normalFunction.bind(this);</li>
                <li>
                  we don't need to bind for arrow function, by default it will have access to
                  context in parent function/class
                </li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"></a>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the difference betwwen Apply vs Call functions?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Apply</th>
                    <th scope="col">Call</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      The apply() allows for a function/method belonging to one object to be
                      assigned and called for a different object and passing method arguments as an
                      array.
                    </td>
                    <td>
                      The call() allows for a function/method belonging to one object to be assigned
                      and called for a different object and passing method arguments as
                      individually..
                    </td>
                  </tr>
                  <tr>
                    <td>
                      The apply() method calls a function with a given this value, and arguments
                      provided as an array
                    </td>
                    <td>
                      The call() method calls a function with a given this value and arguments
                      provided individually.
                    </td>
                  </tr>
                  <tr>
                    <td>Synatax: apply => this.callChildFunction.apply(this, [args1, args2])()</td>
                    <td>call => this.callChildFunction.apply(this, args1, args2)()</td>
                  </tr>
                </tbody>
              </table>
              NOte: Note: While the syntax of this function is almost identical to that of apply(),
              the fundamental difference is that call() accepts an argument list, while apply()
              accepts a single array of arguments.`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What will happen when a break statement is not available in switch case?',
      answer: `<ol>
                <li>
                  In JAVASCRIPT it will executed till the break/return statement or it will execute
                  until switch closes.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is prototype in javascript?',
      answer: `<ol>
                <li>
                  Prototypes are the mechanism by which JavaScript objects inherit features from one
                  another.
                </li>
                <li>
                  Using prototypes, we can add a new method and properties to the object
                  dynamically. In the below example, using prototype, a property and method added to
                  the Person class.
                  <div>
                    <img src="assets\\javascript-prototype.png" alt="prototype">
                  </div>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is DOM?',
      answer: `<ol>
                <li>
                  DOM stands for Document Object Model. Entire web page will be considered as a DOM.
                </li>
                <li>
                  The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
                </li>
                <li>
                  We can use the below DOM methods
                  <ol>
                    <li>document.getElementById(id):- Find an element by element id</li>
                    <li>document.getElementsByTagName(name): Find elements by tag name</li>
                    <li>document.getElementsByClassName(name):- Find elements by class name</li>
                    <li>
                      document.querySelectorAll("p.intro"):- Find elements based on css selectors
                    </li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is BOM?',
      answer: `<ol>
                <li>
                  BOM stands for Browser Object Model. Browser will have the default objects for
                  handing the browser
                </li>
                <li>
                  We can use the below BOM objects
                  <ol>
                    <li>
                      window:- window object is supported by all browsers. It represents the
                      browser's window
                    </li>
                    <li>location: location object used to get the browser url information.</li>
                    <li>history:- window.history object contains the browsers history.</li>
                    <li>
                      cookies:- Cookies are additional information sent to the server. Cookies are
                      in key and value pairs.
                    </li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What are the methods available in Array?',
      answer: `<table class="table table-bordered">
                <tbody>
                  <tr>
                    <th style="width: 20%">Method</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>concat()</td>
                    <td>Joins two or more arrays, and returns a copy of the joined arrays</td>
                  </tr>
                  <tr>
                    <td><a>every()</a></td>
                    <td>Checks if every element in an array pass a test</td>
                  </tr>
                  <tr>
                    <td><a>fill()</a></td>
                    <td>Fill the elements in an array with a static value</td>
                  </tr>
                  <tr>
                    <td><a>filter()</a></td>
                    <td>Creates a new array with every element in an array that pass a test</td>
                  </tr>
                  <tr>
                    <td><a>find()</a></td>
                    <td>Returns the value of the first element in an array that pass a test</td>
                  </tr>
                  <tr>
                    <td><a>findIndex()</a></td>
                    <td>Returns the index of the first element in an array that pass a test</td>
                  </tr>
                  <tr>
                    <td><a>forEach()</a></td>
                    <td>Calls a function for each array element</td>
                  </tr>
                  <tr>
                    <td><a>includes()</a></td>
                    <td>Check if an array contains the specified element</td>
                  </tr>
                  <tr>
                    <td><a>indexOf()</a></td>
                    <td>Search the array for an element and returns its position</td>
                  </tr>
                  <tr>
                    <td><a>join()</a></td>
                    <td>Joins all elements of an array into a string</td>
                  </tr>
                  <tr>
                    <td><a>lastIndexOf()</a></td>
                    <td>
                      Search the array for an element, starting at the end, and returns its position
                    </td>
                  </tr>
                  <tr>
                    <td><a>map()</a></td>
                    <td>
                      Creates a new array with the result of calling a function for each array
                      element
                    </td>
                  </tr>
                  <tr>
                    <td><a>pop()</a></td>
                    <td>Removes the last element of an array, and returns that element</td>
                  </tr>
                  <tr>
                    <td><a>push()</a></td>
                    <td>Adds new elements to the end of an array, and returns the new length</td>
                  </tr>
                  <tr>
                    <td><a>reduce()</a></td>
                    <td>Reduce the values of an array to a single value (going left-to-right)</td>
                  </tr>
                  <tr>
                    <td><a>reverse()</a></td>
                    <td>Reverses the order of the elements in an array</td>
                  </tr>
                  <tr>
                    <td><a>shift()</a></td>
                    <td>Removes the first element of an array, and returns that element</td>
                  </tr>
                  <tr>
                    <td><a>slice()</a></td>
                    <td>Selects a part of an array, and returns the new array</td>
                  </tr>
                  <tr>
                    <td><a>some()</a></td>
                    <td>Checks if any of the elements in an array pass a test</td>
                  </tr>
                  <tr>
                    <td><a>sort()</a></td>
                    <td>Sorts the elements of an array</td>
                  </tr>
                  <tr>
                    <td><a>splice()</a></td>
                    <td>Adds/Removes elements from an array</td>
                  </tr>
                  <tr>
                    <td><a>toString()</a></td>
                    <td>Converts an array to a string, and returns the result</td>
                  </tr>
                  <tr>
                    <td><a>unshift()</a></td>
                    <td>
                      Adds new elements to the beginning of an array, and returns the new length
                    </td>
                  </tr>
                  <tr>
                    <td><a>valueOf()</a></td>
                    <td>Returns the primitive value of an array</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'reverse of array in js/ts',
      answer: `<code>const array = [1, 2, 3, 4, 5, 6]; array.reverse();</code>
              <div>For custom logic:</div>
              <code>
                array.forEach((a, i) => {
                <br>
                if(i < (array.length / 2)) {
                <br>
                const currentValue = array[i];
                <br>
                const reverseIndex = (array.length - 1) - i;
                <br>
                array[i] = array[reverseIndex];
                <br>
                array[reverseIndex] = currentValue;
                <br>
                }
                <br>

                return a;
                <br>
                })
                <br>
              </code>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'object/array destructor and rest',
      answer: `<ol>
                <li>
                  destructor of array/object purpose is separate some properties from existing
                  object without getting of all.
                </li>
                <li>
                  reason is we sent some combined properties from one component to another there
                  inside for function of that component we need some properties to pass it child
                  component we need some others on that case we have too separate current component
                  properties from sent object using this destructor.
                </li>
                <li>
                  Synatax: const { prop1, prop2, ...rest } = { prop1: 'Prop1', prop2:
                  'Prop2', prop3: 'Prop3', prop4: 'Prop4' };
                  <br>
                  here rest will get remaining properties from above object which are prop3 and
                  prop4
                  <br>
                  const { atZeroIndex, atOneIndex, ...rest } = ['zero' , 1, 2, 'last'];
                  <br>
                  here rest will get index 2 and 3 values.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is Tuple in ts?',
      answer: `<ol>
                <li>Returning multiple values same as a array</li>
                <li>
                  Synatax: type Tuple = [string, number]; => it should return 2 length array with
                  first element as string and second element as number.
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types">
                    For more Reference
                  </a>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'union vs intersection vs extends in ts',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">union</th>
                    <th scope="col">intersection</th>
                    <th scope="col">extends</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>union is using for joining two types</td>
                    <td>
                      intersection is using for extracting common properties/functions of two types
                    </td>
                    <td>
                      extends is using for joining of interface with either interface or type, it is
                      similar to union in types.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Synatax: type ExtendedType = string | number; => type is joined all
                      properties/functions of string with number
                    </td>
                    <td>
                      Synatax: type CommonType = string & number; => type is intersected which
                      returns only .valueOf(), .toString(), .toLocaleString() functions only instead
                      of all from string and number
                    </td>
                    <td>
                      Synatax: interface IString extends String { } => it will gets all
                      Properties/functions from string to IString
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types">
                        For more Reference
                      </a>
                    </td>
                    <td>
                      <a href="https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types">
                        For more Reference
                      </a>
                    </td>
                    <td>
                      <a href="https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types">
                        For more Reference
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'difference between types and interface in ts',
      answer: `whatever we can do in interface same we can achieve in types except extending it
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Type</th>
                    <th>Interface</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Can describe functions</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Can describe constructors</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Can describe tuples</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Interfaces can extend it</td>
                    <td>⚠️</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Classes can extend it</td>
                    <td>🚫</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>
                      Classes can implement it (
                      <code>implements</code>
                      )
                    </td>
                    <td>⚠️</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Can intersect another one of its kind</td>
                    <td>✅</td>
                    <td>⚠️</td>
                  </tr>
                  <tr>
                    <td>Can create a union with another one of its kind</td>
                    <td>✅</td>
                    <td>🚫</td>
                  </tr>
                  <tr>
                    <td>Can be used to create mapped types</td>
                    <td>✅</td>
                    <td>🚫</td>
                  </tr>
                  <tr>
                    <td>Can be mapped over with mapped types</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Expands in error messages and logs</td>
                    <td>✅</td>
                    <td>🚫</td>
                  </tr>
                  <tr>
                    <td>Can be augmented</td>
                    <td>🚫</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Can be recursive</td>
                    <td>⚠️</td>
                    <td>✅</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'What is array reduction?',
      answer: `<ol>
                <li>
                  The array reduce in JavaScript is a predefined method used to reduce an array to a
                  single value by passing a callback function on each element of the array. I
                </li>
                <li>
                  It accepts a function executed on all the items of the specified array in the
                  left-to-right sequence. The returned single value is stored in the accumulator.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'How to create a variable ?',
      answer: `<ol>
                <li>
                  We can create a variable using the
                  <b>let, const and var</b>
                  keywords.
                </li>
                <li>Variable will hold some value.</li>
                <li>
                  <code>let a = 10;</code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'JavaScript Core Concepts',
      answer: `<ul>
              <li>
                <strong>What is promise?</strong>
                <br>
                A Promise is an object representing the eventual completion or failure of an
                asynchronous operation.
              </li>

              <li>
                <strong>Difference between promise.any, race, and all?</strong>
                <br>
                <ul>
                  <li>
                    <code>Promise.all</code>
                    : Resolves when all promises resolve. Fails fast on first rejection.
                  </li>
                  <li>
                    <code>Promise.race</code>
                    : Resolves/rejects with the first settled promise.
                  </li>
                  <li>
                    <code>Promise.any</code>
                    : Resolves with first fulfilled promise, ignores rejections.
                  </li>
                </ul>
              </li>

              <li>
                <strong>What is generator function?</strong>
                <br>
                A special function that can pause execution using
                <code>yield</code>
                and resume later using
                <code>next()</code>
                .
              </li>

              <li>
                <strong>What is currying function?</strong>
                <br>
                Transforming a function with multiple arguments into a sequence of functions each
                taking one argument.
              </li>

              <li>
                <strong>What is prototype mechanism?</strong>
                <br>
                A built-in JavaScript mechanism where objects inherit features from other objects
                via the prototype chain.
              </li>

              <li>
                <strong>What is debouncing?</strong>
                <br>
                Limits the rate at which a function is executed. Useful for events like input,
                resize.
              </li>

              <li>
                <strong>What is throttling?</strong>
                <br>
                Ensures a function is only called once in a specific time interval, no matter how
                many times it's triggered.
              </li>

              <li>
                <strong>Pass-by-value vs Pass-by-reference</strong>
                <br>
                <ul>
                  <li>
                    <strong>Pass-by-value:</strong>
                    For primitive types (Number, String, etc.). A copy is passed.
                  </li>
                  <li>
                    <strong>Pass-by-reference:</strong>
                    For objects/arrays. A reference to the original memory is passed.
                  </li>
                </ul>
              </li>

              <li>
                <strong>What is callback hell?</strong>
                <br>
                Nested callbacks making code unreadable and difficult to maintain, often caused by
                async operations.
              </li>

              <li>
                <strong>What is promise chaining?</strong>
                <br>
                Linking multiple
                <code>then()</code>
                calls to run async operations in sequence.
              </li>

              <li>
                <strong>What is lexical scope?</strong>
                <br>
                Scope defined by the location of variables in source code. Inner functions have
                access to outer function's variables.
              </li>

              <li>
                <strong>What is nullish coalescing operator (??)?</strong>
                <br>
                Returns right-hand operand only if left is
                <code>null</code>
                or
                <code>undefined</code>
                .
              </li>

              <li>
                <strong>What is optional chaining (?.)?</strong>
                <br>
                Allows safe access to nested properties without throwing errors if a property
                doesn't exist.
              </li>

              <li>
                <strong>What is event loop?</strong>
                <br>
                A mechanism that handles asynchronous callbacks using the call stack and message
                queue.
              </li>

              <li>
                <strong>What is closure?</strong>
                <br>
                A function that remembers variables from its lexical scope even when called outside
                of that scope.
              </li>

              <li>
                <strong>What is destructuring?</strong>
                <br>
                Extracting values from arrays or properties from objects into variables.
              </li>

              <li>
                <strong>Difference between rest and spread operator?</strong>
                <br>
                <ul>
                  <li>
                    <strong>Rest (...):</strong>
                    Collects remaining elements into an array (used in function args).
                  </li>
                  <li>
                    <strong>Spread (...):</strong>
                    Expands array or object elements.
                  </li>
                </ul>
              </li>

              <li>
                <strong>ES6 features overview:</strong>
                <br>
                <ul>
                  <li>let, const</li>
                  <li>Arrow functions</li>
                  <li>Template literals</li>
                  <li>Destructuring</li>
                  <li>Spread/Rest operators</li>
                  <li>Promises, Classes, Modules, Generators</li>
                </ul>
              </li>
            </ul>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Intermediate Level Questions',
      answer: `<ol start="6">
              <li>
                <strong>What is closure in JavaScript?</strong>
                <br>
                A closure is a function that remembers its lexical scope even when the function is
                executed outside of that scope. It allows accessing outer function variables from an
                inner function.
              </li>

              <li>
                <strong>Explain the concept of hoisting</strong>
                <br>
                Hoisting is JavaScript's default behavior of moving declarations to the top of the
                current scope. Only variable and function declarations are hoisted—not
                initializations.
              </li>

              <li>
                <strong>What is the event loop in JavaScript?</strong>
                <br>
                The event loop is a mechanism that handles the execution of multiple chunks of code
                asynchronously. It constantly checks the call stack and task queue to manage
                non-blocking operations.
              </li>

              <li>
                <strong>Describe promise and async/await</strong>
                <br>
                A
                <code>Promise</code>
                represents a future value.
                <code>async/await</code>
                simplifies promise handling by allowing asynchronous code to look and behave like
                synchronous code using
                <code>await</code>
                for promises.
              </li>

              <li>
                <strong>How does 'this' keyword work in JavaScript?</strong>
                <br>
                <ul>
                  <li>
                    In global scope,
                    <code>this</code>
                    refers to
                    <code>window</code>
                    .
                  </li>
                  <li>
                    In regular functions,
                    <code>this</code>
                    depends on how the function is called.
                  </li>
                  <li>
                    Arrow functions don't have their own
                    <code>this</code>
                    — it’s inherited from their parent scope.
                  </li>
                </ul>
              </li>

              <li>
                <strong>What are arrow functions?</strong>
                <br>
                Arrow functions are a compact way to write functions and don't have their own
                <code>this</code>
                . Example:
                <br>
                <code>const greet = () => console.log("Hello");</code>
              </li>

              <li>
                <strong>Explain prototype and prototypal inheritance</strong>
                <br>
                In JavaScript, every object has a prototype. Prototypal inheritance means an object
                can inherit properties and methods from another object via the prototype chain.
              </li>

              <li>
                <strong>What is the difference between null and undefined?</strong>
                <br>
                <ul>
                  <li>
                    <strong>null</strong>
                    : An assignment value that represents no value.
                  </li>
                  <li>
                    <strong>undefined</strong>
                    : A variable declared but not yet assigned any value.
                  </li>
                </ul>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Advanced Concept Questions',
      answer: `<ol start="35">
              <li>
                <strong>Explain currying in JavaScript</strong>
                <br>
                Currying is the transformation of a function with multiple arguments into a sequence
                of functions:
                <pre ngnonbindable=""><code>
function add(a) {{ '{' }}
  return function(b) {{ '{' }}
    return a + b;
  {{ '}' }};
{{ '}' }}
const add5 = add(5);
console.log(add5(3)); // 8
      </code></pre>
              </li>

              <li>
                <strong>What are web workers?</strong>
                <br>
                Web workers run JavaScript in background threads, enabling concurrent execution
                without blocking the main thread.
              </li>

              <li>
                <strong>Describe service workers and their use cases</strong>
                <br>
                Service workers act as a proxy between web apps and the network. They enable offline
                support, background sync, and push notifications.
              </li>

              <li>
                <strong>How does JavaScript handle asynchronous operations?</strong>
                <br>
                JavaScript uses an event loop to manage async operations through callbacks,
                promises, and async/await.
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'DOM and Browser Interaction',
      answer: `<ol start="39">
              <li>
                <strong>How do you manipulate the DOM?</strong>
                <br>
                Use methods like
                <code>getElementById</code>
                ,
                <code>querySelector</code>
                ,
                <code>appendChild</code>
                , and
                <code>innerHTML</code>
                .
              </li>

              <li>
                <strong>Explain event bubbling and capturing</strong>
                <br>
                Bubbling: Events propagate from target to root.
                <br>
                Capturing: Events propagate from root to target. Use
                <code>addEventListener(event, handler, true)</code>
                for capturing.
              </li>

              <li>
                <strong>How do you handle cross-origin requests?</strong>
                <br>
                Use CORS (Cross-Origin Resource Sharing) by configuring server headers like
                <code>Access-Control-Allow-Origin</code>
                .
              </li>

              <li>
                <strong>What are web APIs?</strong>
                <br>
                Web APIs are browser-provided interfaces like DOM, Fetch, Geolocation, Storage,
                etc., allowing interaction with the browser or OS.
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Practical Coding Questions',
      answer: `<ol start="19">
              <li>
                <strong>Implement a function to flatten a nested array</strong>
                <br>
                <pre ngnonbindable=""><code>
function flatten(arr) {{ '{' }}
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
{{ '}' }}
// flatten([1, [2, [3]]]) => [1, 2, 3]
      </code></pre>
              </li>

              <li>
                <strong>Check if a string is a palindrome</strong>
                <br>
                <pre ngnonbindable=""><code>
function isPalindrome(str) {{ '{' }}
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
{{ '}' }}
      </code></pre>
              </li>

              <li>
                <strong>Remove duplicate values from an array</strong>
                <br>
                <pre ngnonbindable=""><code>
const removeDuplicates = arr => [...new Set(arr)];
      </code></pre>
              </li>

              <li>
                <strong>Implement a simple promise-based API call</strong>
                <br>
                <pre ngnonbindable=""><code>
function fetchData(url) {{ '{' }}
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.error(err));
{{ '}' }}
      </code></pre>
              </li>

              <li>
                <strong>Write a custom map/filter/reduce implementation</strong>
                <br>
                <pre ngnonbindable=""><code>
Array.prototype.myMap = function(callback) {{ '{' }}
  let result = [];
  for (let i = 0; i < this.length; i++) {{ '{' }}
    result.push(callback(this[i], i, this));
  {{ '}' }}
  return result;
{{ '}' }}
      </code></pre>
              </li>

              <li>
                <strong>Combine two arrays and filter even numbers</strong>
                <br>
                <pre ngnonbindable=""><code>
const mergeAndFilterEven = (a, b) => 
  [...a, ...b].filter(num => num % 2 === 0);
      </code></pre>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Performance and Optimization Questions',
      answer: `<ol start="25">
              <li>
                <strong>How do you optimize JavaScript performance?</strong>
                <br>
                <ul>
                  <li>Minimize DOM manipulation</li>
                  <li>Use throttling/debouncing</li>
                  <li>Use lazy loading</li>
                  <li>Avoid memory leaks</li>
                  <li>Minify and bundle resources</li>
                </ul>
              </li>

              <li>
                <strong>Explain memory leaks in JavaScript</strong>
                <br>
                Memory leaks occur when unused objects are not garbage collected. Common causes:
                <ul>
                  <li>Unremoved event listeners</li>
                  <li>Global variables</li>
                  <li>Detached DOM nodes</li>
                  <li>Closures with large retained scopes</li>
                </ul>
              </li>

              <li>
                <strong>What are best practices to reduce DOM manipulation?</strong>
                <br>
                <ul>
                  <li>Use \`documentFragment\` for batch DOM updates</li>
                  <li>Minimize reflows and repaints</li>
                  <li>Use efficient selectors like \`getElementById\`</li>
                  <li>Debounce UI-related functions</li>
                </ul>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Framework Related Questions',
      answer: `<ol start="28">
              <li>
                <strong>Compare React, Vue, and Angular</strong>
                <br>
                <ul>
                  <li>
                    <strong>React:</strong>
                    Library focused on UI, uses JSX and virtual DOM.
                  </li>
                  <li>
                    <strong>Vue:</strong>
                    Lightweight framework, reactive data binding, single file components.
                  </li>
                  <li>
                    <strong>Angular:</strong>
                    Full-featured framework with dependency injection, TypeScript, two-way binding.
                  </li>
                </ul>
              </li>

              <li>
                <strong>What are the key concepts in React?</strong>
                <br>
                Components, state, props, lifecycle methods, hooks, and virtual DOM.
              </li>

              <li>
                <strong>Explain state management in modern frameworks</strong>
                <br>
                Techniques like Context API, Redux (React), Vuex (Vue), and RxJS with services
                (Angular) are used to manage state across components.
              </li>

              <li>
                <strong>How do you handle component communication?</strong>
                <br>
                <ul>
                  <li>
                    <strong>React:</strong>
                    Props drilling, Context API, Redux
                  </li>
                  <li>
                    <strong>Angular:</strong>
                    @Input, @Output, services, RxJS subjects
                  </li>
                  <li>
                    <strong>Vue:</strong>
                    Props, events, Vuex store
                  </li>
                </ul>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    },
    {
      question: 'Technical Scenario Questions',
      answer: `<ol start="32">
              <li>
                <strong>How would you handle error boundaries?</strong>
                <br>
                In React, use a class component with
                <code>componentDidCatch</code>
                and
                <code>getDerivedStateFromError</code>
                to catch errors and display fallback UI.
              </li>

              <li>
                <strong>Describe your approach to debugging JavaScript code</strong>
                <br>
                Use
                <code>console.log</code>
                , Chrome DevTools, debugger statements, browser network tab, and testing tools like
                Jest or Mocha.
              </li>

              <li>
                <strong>How do you ensure cross-browser compatibility?</strong>
                <br>
                <ul>
                  <li>Use feature detection via Modernizr</li>
                  <li>Apply polyfills and transpilation (e.g., Babel)</li>
                  <li>Test with tools like BrowserStack</li>
                </ul>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'JavaScript'
      ]
    }
  ]
};
