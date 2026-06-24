const jsModule5Content = {
  'working-with-apis': {
    title: 'Working with APIs',
    sections: [
      {
        heading: 'What is an API?',
        content: [
          'An <strong>API</strong> (Application Programming Interface) is a set of rules that lets different software programs talk to each other.',
          'Think of a restaurant: you (the client) look at a menu and tell the waiter your order. The waiter takes it to the kitchen (the server), and brings back your food. The waiter is the API — it connects you to the kitchen without you needing to know how the cooking works.',
          'In web development, APIs let your JavaScript code ask a server for data (like weather, user profiles, or product lists) and get a response back.',
          'Most web APIs return data in <strong>JSON</strong> format, which JavaScript can read naturally — no extra parsing tools needed.'
        ]
      },
      {
        heading: 'REST APIs and HTTP Methods',
        content: [
          '<strong>REST</strong> (Representational State Transfer) is the most common style of web API.',
          'A REST API is organized around <strong>endpoints</strong> — URLs that represent different resources. For example, <code>/users</code> might return a list of users, and <code>/users/5</code> might return the user with ID 5.',
          'Each endpoint responds to different <strong>HTTP methods</strong>, which tell the server what action you want:',
          '<ul><li><code>GET</code> — retrieve data (like reading a page)</li><li><code>POST</code> — create new data (like filling out a form)</li><li><code>PUT</code> / <code>PATCH</code> — update existing data (like editing a page)</li><li><code>DELETE</code> — remove data (like throwing away a document)</li></ul>',
          'The server responds with an <strong>HTTP status code</strong> that tells you what happened: <code>200</code> means OK, <code>201</code> means created, <code>404</code> means not found, <code>500</code> means server error.'
        ],
        code: `// Example REST API endpoints
// GET    /api/users          → list all users
// GET    /api/users/5        → get user with ID 5
// POST   /api/users          → create a new user
// PUT    /api/users/5        → update user 5
// DELETE /api/users/5        → delete user 5

// Common HTTP status codes:
// 200 OK            → request succeeded
// 201 Created       → new resource was created
// 400 Bad Request   → you sent invalid data
// 401 Unauthorized  → you need to log in
// 404 Not Found     → resource does not exist
// 500 Server Error  → something broke on the server`
      },
      {
        heading: 'Making GET Requests with Fetch',
        content: [
          'The <code>fetch()</code> function is built into all modern browsers. It sends a request to a URL and returns a Promise.',
          'A <strong>GET</strong> request is the simplest — you just pass the URL. The response comes back as a stream, so you call <code>response.json()</code> to parse it.',
          'Always check <code>response.ok</code> — it is true when the status code is 200-299. If the server returns a 404 or 500, the fetch itself does NOT throw an error; you have to check manually.'
        ],
        code: `// Basic GET request
async function getUser(id) {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
  
  // Always check if the response is OK
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
  }
  
  // Parse the JSON body
  const user = await response.json();
  return user;
}

// Using it
getUser(1)
  .then(user => console.log("Name:", user.name, "| Email:", user.email))
  .catch(err => console.log("Failed:", err.message));

// Output: Name: Leanne Graham | Email: Sincere@april.biz`
      },
      {
        heading: 'Making POST Requests',
        content: [
          'To <strong>send</strong> data to a server, use <code>POST</code>. You need to provide three extra things:',
          '<ul><li><code>method</code> — set to "POST"</li><li><code>headers</code> — tells the server what format you are sending (usually JSON)</li><li><code>body</code> — the data itself, converted to a JSON string with <code>JSON.stringify()</code></li></ul>',
          'The server usually returns the created object, often with a new <code>id</code> assigned by the database.'
        ],
        code: `async function createUser(name, email) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",                    // sending data, not just reading
    headers: {
      "Content-Type": "application/json"  // telling the server we are sending JSON
    },
    body: JSON.stringify({              // convert JS object to JSON string
      name: name,
      email: email
    })
  });
  
  if (!response.ok) {
    throw new Error("Failed to create user: " + response.status);
  }
  
  const createdUser = await response.json();
  return createdUser;
}

createUser("Alice Johnson", "alice@example.com")
  .then(user => console.log("Created:", user))
  .catch(err => console.log("Error:", err.message));`
      },
      {
        heading: 'Handling Errors Gracefully',
        content: [
          'Network requests can fail for many reasons — server down, no internet, wrong URL, or invalid data.',
          'Wrap your fetch calls in <code>try/catch</code> to handle these gracefully.',
          'Check <code>response.ok</code> for HTTP errors (404, 500), and let <code>catch</code> handle network errors (no connection).'
        ],
        code: `async function safeFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      // HTTP error (404, 500, etc.)
      throw new Error(\`HTTP \${response.status}\`);
    }
    
    const data = await response.json();
    return { success: true, data };
    
  } catch (error) {
    // Network error or the error we threw above
    return { success: false, error: error.message };
  }
}

// Usage
safeFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(result => {
    if (result.success) {
      console.log("Got data:", result.data.title);
    } else {
      console.log("Failed:", result.error);
    }
  });`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Fetch 5 posts from <code>https://jsonplaceholder.typicode.com/posts</code> and display each title.',
          'Then create a new post using POST with a title and body.'
        ],
        code: `// Task 1: Fetch and display 5 post titles
async function showPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    
    posts.slice(0, 5).forEach((post, i) => {
      console.log(\`\${i + 1}. \${post.title}\`);
    });
  } catch (err) {
    console.log("Error:", err.message);
  }
}

// Task 2: Create a new post
async function createPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "My New Post",
      body: "Learning APIs is fun!",
      userId: 1
    })
  });
  const post = await res.json();
  console.log("Created post with ID:", post.id);
}

showPosts();
createPost();`
      }
    ]
  },
  'async-patterns': {
    title: 'Asynchronous Patterns',
    sections: [
      {
        heading: 'The Problem: Callback Hell',
        content: [
          'In early JavaScript, asynchronous operations used <strong>callbacks</strong> — functions passed as arguments to run later.',
          'When you needed to do multiple async steps in order, you had to nest callbacks inside callbacks, creating a "pyramid of doom" — code that was hard to read and harder to maintain.',
          'This pattern is called <strong>callback hell</strong> and it still exists in older codebases.'
        ],
        code: `// Callback hell: 3 nested async operations
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getShipping(orders[0].id, function(shipping) {
      console.log("Shipping status:", shipping.status);
      // Imagine 5 more levels...
    });
  });
});

// The shape of this code is like a pyramid >
// Each callback is indented further, making it hard to follow`
      },
      {
        heading: 'Solution 1: Promise Chains',
        content: [
          '<strong>Promises</strong> were introduced to solve callback hell. Instead of nesting, you chain <code>.then()</code> calls.',
          'Each <code>.then()</code> receives the result of the previous one and passes it forward.',
          'A single <code>.catch()</code> at the end handles errors from any step — much cleaner than try/catch in every callback.'
        ],
        code: `// Same logic with promises — flat, readable
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getShipping(orders[0].id))
  .then(shipping => {
    console.log("Shipping status:", shipping.status);
  })
  .catch(error => {
    console.log("Something went wrong:", error.message);
  })
  .finally(() => {
    console.log("Done processing.");
  });

// The code reads top to bottom, not inside-out`
      },
      {
        heading: 'Solution 2: Async/Await',
        content: [
          '<strong>async/await</strong> (ES2017) is the cleanest approach. It lets you write async code that <em>looks</em> synchronous.',
          'Add <code>async</code> before a function, and <code>await</code> before any promise. The engine pauses at each <code>await</code> until the promise resolves.',
          'Error handling uses standard <code>try/catch</code> — no more <code>.catch()</code> chains.'
        ],
        code: `// Same logic with async/await — reads like normal code
async function getShippingStatus(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const shipping = await getShipping(orders[0].id);
    console.log("Shipping status:", shipping.status);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  } finally {
    console.log("Done processing.");
  }
}

getShippingStatus(1);`
      },
      {
        heading: 'Best Practice: Run Independent Operations in Parallel',
        content: [
          'A common mistake is <code>await</code>-ing things sequentially when they could run at the same time.',
          'If two requests are independent (one does not need the other\'s result), use <code>Promise.all()</code> to run them in parallel.',
          'This can dramatically speed up your code — two requests that each take 1 second finish in 1 second, not 2.'
        ],
        code: `// Slow: sequential — waits for each one
async function slow() {
  const user = await fetch("/api/user").then(r => r.json());
  const posts = await fetch("/api/posts").then(r => r.json());
  const comments = await fetch("/api/comments").then(r => r.json());
  // Total time: ~3 seconds
  return { user, posts, comments };
}

// Fast: parallel — all start at once
async function fast() {
  const [userRes, postsRes, commentsRes] = await Promise.all([
    fetch("/api/user"),
    fetch("/api/posts"),
    fetch("/api/comments")
  ]);
  
  const [user, posts, comments] = await Promise.all([
    userRes.json(),
    postsRes.json(),
    commentsRes.json()
  ]);
  // Total time: ~1 second
  return { user, posts, comments };
}`
      },
      {
        heading: 'Best Practice: Avoid Awaiting in Loops',
        content: [
          'Using <code>await</code> inside a <code>for</code> loop processes items one at a time, which is slow.',
          'Instead, map the items to promises and use <code>Promise.all()</code> to run them all at once.',
          'If order matters or the API has rate limits, process in small batches instead.'
        ],
        code: `// Slow: processes one at a time
async function fetchUsersSequential(ids) {
  const users = [];
  for (const id of ids) {
    const user = await fetch(\`/api/users/\${id}\`).then(r => r.json());
    users.push(user);
  }
  return users;
  // 5 IDs × 200ms each = 1000ms
}

// Fast: all at once
async function fetchUsersParallel(ids) {
  const promises = ids.map(id => 
    fetch(\`/api/users/\${id}\`).then(r => r.json())
  );
  return Promise.all(promises);
  // 5 IDs in parallel = ~200ms
}

// Controlled: batches of 3 (for rate-limited APIs)
async function fetchInBatches(ids, batchSize = 3) {
  const results = [];
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(id => fetch(\`/api/users/\${id}\`).then(r => r.json()))
    );
    results.push(...batchResults);
  }
  return results;
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Refactor this callback-based code to use async/await:',
          'Then optimize it to run any independent requests in parallel.'
        ],
        code: `// Callback version — refactor this:
loadConfig(function(config) {
  loadUser(config.userId, function(user) {
    loadProfile(user.id, function(profile) {
      console.log("Loaded:", user.name, profile.bio);
    });
  });
});

// Your async/await version:
// async function loadData() { ... }`
      }
    ]
  },
  'state-management': {
    title: 'State Management Concepts',
    sections: [
      {
        heading: 'What is State?',
        content: [
          '<strong>State</strong> is the data that your application keeps track of while it runs — the current user, a shopping cart, whether a menu is open, or a list of search results.',
          'Every interactive app has state. The question is not whether you have state, but how you <em>organize</em> it.',
          'In a tiny app, state can be a few variables. But as your app grows, state scattered across many components becomes hard to track — bugs appear because one part of the app changes data that another part depends on.',
          '<strong>State management</strong> means organizing this data in a predictable, structured way so changes are traceable and debuggable.'
        ]
      },
      {
        heading: 'Simple State: A Single Object',
        content: [
          'For small apps, a single state object with functions to update it is enough.',
          'The key rule: <strong>never modify state directly</strong>. Always go through a function that logs or validates the change.',
          'This makes debugging easier — you can always see <em>what</em> changed and <em>when</em>.'
        ],
        code: `// Simple state manager
const state = {
  user: null,
  cart: [],
  theme: "light"
};

// "Actions" — functions that change state
function login(user) {
  state.user = user;
  console.log("User logged in:", user.name);
}

function addToCart(item) {
  state.cart.push(item);
  console.log("Cart:", state.cart);
}

function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
}

// Usage
login({ id: 1, name: "Alice" });
addToCart({ id: 101, name: "Laptop", price: 999 });
toggleTheme();
console.log("Current state:", state);`
      },
      {
        heading: 'The Pub/Sub Pattern for State',
        content: [
          'A step up from a plain object is the <strong>pub/sub (publish/subscribe)</strong> pattern.',
          'Components <strong>subscribe</strong> to state changes. When state changes, all subscribers are notified automatically.',
          'This is how most state management libraries work under the hood — Redux, Vuex, Pinia, and others all use some form of pub/sub.'
        ],
        code: `// Tiny state manager with pub/sub
function createStore(initialState) {
  let state = initialState;
  const subscribers = [];  // list of functions to notify
  
  return {
    // Get current state
    getState() {
      return state;
    },
    
    // Update state and notify everyone
    setState(updates) {
      state = { ...state, ...updates };
      subscribers.forEach(fn => fn(state));  // notify all subscribers
    },
    
    // Subscribe to changes — returns an unsubscribe function
    subscribe(callback) {
      subscribers.push(callback);
      return () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
    }
  };
}

// Usage
const store = createStore({ count: 0, user: null });

// Subscribe to changes
const unsubscribe = store.subscribe(state => {
  console.log("State changed:", state);
});

// Update state — subscribers are notified automatically
store.setState({ count: 1 });
store.setState({ count: 2, user: { name: "Alice" } });

// Stop listening
unsubscribe();
store.setState({ count: 3 });  // no log, we unsubscribed`
      },
      {
        heading: 'Redux Concepts (Store, Actions, Reducers)',
        content: [
          '<strong>Redux</strong> is a popular state management library that enforces a strict pattern: <em>one</em> store, changes only through <em>actions</em>, and pure functions called <em>reducers</em> that compute the next state.',
          'The flow is always: <strong>Action → Reducer → New State → UI Updates</strong>',
          'Even if you do not use Redux, understanding this pattern helps you think about state in a structured way.'
        ],
        code: `// Redux in 20 lines
function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];
  
  return {
    getState: () => state,
    dispatch(action) {
      state = reducer(state, action);  // reducer computes new state
      listeners.forEach(fn => fn());
    },
    subscribe(fn) {
      listeners.push(fn);
      return () => listeners.splice(listeners.indexOf(fn), 1);
    }
  };
}

// Reducer — a pure function: (state, action) => newState
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;  // always return current state for unknown actions
  }
}

// Using it
const store = createStore(counterReducer, { count: 0 });

store.subscribe(() => {
  console.log("Count:", store.getState().count);
});

store.dispatch({ type: "INCREMENT" });  // Count: 1
store.dispatch({ type: "INCREMENT" });  // Count: 2
store.dispatch({ type: "DECREMENT" });  // Count: 1
store.dispatch({ type: "RESET" });      // Count: 0`
      },
      {
        heading: 'When Do You Need State Management?',
        content: [
          'Not every app needs Redux. Here are signals that indicate you might:',
          '<ul><li>Multiple components need the same data, and passing props is painful ("prop drilling")</li><li>State updates happen in many places and are hard to track</li><li>You need to undo/redo or time-travel through state changes</li><li>State needs to persist across page refreshes</li></ul>',
          'For smaller apps, Vue\'s reactive data, React\'s <code>useState</code>/<code>useContext</code>, or a simple pub/sub store is enough.',
          'The golden rule: start simple, add complexity only when you feel the pain.'
        ]
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Build a tiny state manager using the pub/sub pattern. It should:',
          '<ol><li>Hold a <code>todos</code> array and a <code>filter</code> string ("all", "active", "done")</li><li>Support <code>addTodo</code>, <code>toggleTodo</code>, and <code>setFilter</code> actions</li><li>Notify subscribers whenever state changes</li></ol>'
        ],
        code: `// Build your mini state manager here:
// const store = createStore({ todos: [], filter: "all" });
// store.subscribe(state => console.log("Update:", state));
// store.dispatch({ type: "ADD_TODO", text: "Learn JS" });
// store.dispatch({ type: "TOGGLE_TODO", id: 0 });`
      }
    ]
  },
  'js-design-patterns': {
    title: 'JavaScript Design Patterns',
    sections: [
      {
        heading: 'What Are Design Patterns?',
        content: [
          '<strong>Design patterns</strong> are proven solutions to common problems in software design.',
          'They are not code you copy-paste — they are templates or blueprints you adapt to your specific situation.',
          'Think of them like recipes: a recipe for a sauce tells you the technique, but you choose the ingredients.',
          'JavaScript has several popular patterns that help you write cleaner, more maintainable code. Here are four of the most useful ones.'
        ]
      },
      {
        heading: 'Module Pattern (Encapsulation)',
        content: [
          'The <strong>module pattern</strong> uses closures to create private variables and functions that cannot be accessed from outside.',
          'Only the methods you explicitly return are public. Everything else is hidden — this is called <strong>encapsulation</strong>.',
          'Before ES6 modules, this was the main way to organize code. It is still useful for grouping related logic without creating a full class.'
        ],
        code: `// Module pattern using an IIFE (Immediately Invoked Function Expression)
const Counter = (function() {
  // Private — cannot be accessed from outside
  let count = 0;
  
  function log(message) {
    console.log("[Counter]", message);
  }
  
  // Public — only these are returned
  return {
    increment() {
      count++;
      log("incremented to " + count);
    },
    decrement() {
      count--;
      log("decremented to " + count);
    },
    getCount() {
      return count;
    }
  };
})();

Counter.increment();   // [Counter] incremented to 1
Counter.increment();   // [Counter] incremented to 2
console.log(Counter.getCount());  // 2
// Counter.count;       // undefined — private!
// Counter.log("hi");   // TypeError — private!`
      },
      {
        heading: 'Factory Pattern',
        content: [
          'The <strong>factory pattern</strong> uses a function to create objects. Instead of using <code>new</code> directly, you call a factory function that decides which object to create.',
          'This is useful when creating the right object depends on input parameters, or when you want to hide the construction logic from the caller.'
        ],
        code: `// Factory pattern — creates different shapes based on type
function createShape(type, options) {
  switch (type) {
    case "circle":
      return {
        type: "circle",
        radius: options.radius || 1,
        area() { return Math.PI * this.radius ** 2; }
      };
    case "rectangle":
      return {
        type: "rectangle",
        width: options.width || 1,
        height: options.height || 1,
        area() { return this.width * this.height; }
      };
    case "triangle":
      return {
        type: "triangle",
        base: options.base || 1,
        height: options.height || 1,
        area() { return 0.5 * this.base * this.height; }
      };
    default:
      throw new Error("Unknown shape: " + type);
  }
}

// Create shapes without knowing the construction details
const c = createShape("circle", { radius: 5 });
const r = createShape("rectangle", { width: 4, height: 6 });
const t = createShape("triangle", { base: 3, height: 8 });

console.log(c.area());  // 78.54
console.log(r.area());  // 24
console.log(t.area());  // 12`
      },
      {
        heading: 'Observer Pattern (Pub/Sub)',
        content: [
          'The <strong>observer pattern</strong> lets one object notify others when its state changes. This is the backbone of event systems.',
          'The <strong>subject</strong> maintains a list of <strong>observers</strong> and notifies them when something happens.',
          'You already use this pattern every day: DOM events (<code>addEventListener</code>) are an implementation of the observer pattern!'
        ],
        code: `// Observer pattern — a simple event emitter
class EventEmitter {
  constructor() {
    this.events = {};  // { eventName: [callback1, callback2, ...] }
  }
  
  // Subscribe to an event
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  
  // Emit an event — notify all subscribers
  emit(eventName, data) {
    const callbacks = this.events[eventName] || [];
    callbacks.forEach(cb => cb(data));
  }
  
  // Unsubscribe
  off(eventName, callback) {
    this.events[eventName] = (this.events[eventName] || [])
      .filter(cb => cb !== callback);
  }
}

// Usage
const emitter = new EventEmitter();

// Subscribe
emitter.on("userLoggedIn", (user) => {
  console.log("Welcome,", user.name);
});
emitter.on("userLoggedIn", (user) => {
  console.log("Send welcome email to", user.email);
});

// Emit — both subscribers run
emitter.emit("userLoggedIn", { name: "Alice", email: "alice@test.com" });
// Welcome, Alice
// Send welcome email to alice@test.com

// DOM events are actually the same pattern:
// button.addEventListener("click", handler) → .on("click", handler)
// button.dispatchEvent(new Event("click")) → .emit("click")`
      },
      {
        heading: 'Singleton Pattern',
        content: [
          'The <strong>singleton pattern</strong> ensures only <em>one</em> instance of a class exists throughout your app.',
          'Use it for things like a database connection, a settings manager, or a logger — anything where having multiple instances would cause problems.',
          'In JavaScript, a simple object literal is technically a singleton (there is only one). For classes, you control it with a static check.'
        ],
        code: `// Singleton using a class
class Database {
  static instance = null;
  
  constructor(config) {
    if (Database.instance) {
      return Database.instance;  // return the existing one
    }
    
    this.config = config;
    this.connected = false;
    Database.instance = this;  // store the first instance
  }
  
  connect() {
    if (this.connected) return;
    console.log("Connecting to", this.config.host);
    this.connected = true;
  }
}

const db1 = new Database({ host: "localhost" });
const db2 = new Database({ host: "other-host" });  // returns db1!

console.log(db1 === db2);  // true — same instance
console.log(db2.config.host);  // localhost — not "other-host"

// Simpler singleton — just an object literal (always one)
const Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  // there is only one Config object, ever
};`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Implement a simple event emitter that supports the following:',
          '<ol><li><code>.on(event, callback)</code> — subscribe</li><li><code>.emit(event, data)</code> — notify all subscribers</li><li><code>.once(event, callback)</code> — subscribe but only fire once, then auto-remove</li></ol>'
        ],
        code: `// Extend the EventEmitter class with a .once() method:
// once(eventName, callback) {
//   const wrapper = (data) => {
//     callback(data);
//     this.off(eventName, wrapper);
//   };
//   this.on(eventName, wrapper);
// }

// Test it:
// const e = new EventEmitter();
// e.once("ping", (d) => console.log("Got:", d));
// e.emit("ping", "hello");  // Got: hello
// e.emit("ping", "world");  // (nothing — already unsubscribed)`
      }
    ]
  },
  'testing-javascript': {
    title: 'Testing JavaScript',
    sections: [
      {
        heading: 'Why Testing Matters',
        content: [
          'Testing is how you verify that your code actually works — not just once, but every time you change something.',
          'Without tests, every change is a gamble: "Did I break something?" With tests, you run them and instantly know.',
          'Think of tests like a seatbelt: they feel unnecessary until something goes wrong. The difference is that with code, things go wrong constantly as you add features, refactor, or fix bugs.',
          'Good tests also serve as <strong>documentation</strong> — they show how your code is supposed to be used and what output to expect.'
        ]
      },
      {
        heading: 'Jest Basics',
        content: [
          '<strong>Jest</strong> is the most popular JavaScript testing framework. It comes with everything built in: test runner, assertions, mocks, and coverage reports.',
          'A test file is just a JavaScript file with <code>.test.js</code> or <code>.spec.js</code> in the name.',
          'Jest provides <code>describe()</code> for grouping, <code>it()</code> or <code>test()</code> for individual tests, and <code>expect()</code> for assertions.'
        ],
        code: `// math.js — the code we want to test
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function factorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, isEven, factorial };`
      },
      {
        heading: 'Writing Your First Test',
        content: [
          'A test has three parts arranged in the "AAA" pattern:',
          '<ol><li><strong>Arrange</strong> — set up the inputs and expected result</li><li><strong>Act</strong> — call the function being tested</li><li><strong>Assert</strong> — verify the result matches your expectation</li></ol>',
          'Jest calls assertions "matchers" — <code>.toBe()</code>, <code>.toEqual()</code>, <code>.toContain()</code>, <code>.toThrow()</code>, etc.'
        ],
        code: `// math.test.js — tests for math.js
const { add, isEven, factorial } = require("./math");

describe("add", () => {
  it("adds two positive numbers", () => {
    // Arrange
    const a = 2;
    const b = 3;
    const expected = 5;
    
    // Act
    const result = add(a, b);
    
    // Assert
    expect(result).toBe(5);
  });
  
  it("handles negative numbers", () => {
    expect(add(-1, -1)).toBe(-2);
  });
  
  it("handles zero", () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });
  
  it("returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
  });
});

describe("factorial", () => {
  it("returns 1 for 0 and 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });
  
  it("calculates correctly for larger numbers", () => {
    expect(factorial(5)).toBe(120);
  });
  
  it("throws for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Negative numbers not allowed");
  });
});`
      },
      {
        heading: 'Common Jest Matchers',
        content: [
          'Jest provides many matchers for different types of checks:',
          '<ul><li><code>.toBe(value)</code> — strict equality (===), use for primitives</li><li><code>.toEqual(object)</code> — deep equality for objects and arrays</li><li><code>.toContain(item)</code> — check if array or string contains a value</li><li><code>.toHaveLength(n)</code> — check array or string length</li><li><code>.toBeTruthy()</code> / <code>.toBeFalsy()</code> — check truthiness</li><li><code>.toBeNull()</code> / <code>.toBeUndefined()</code> — check for null/undefined</li><li><code>.toThrow(error)</code> — check if a function throws</li><li><code>.not</code> prefix — negate any matcher</li></ul>'
        ],
        code: `// Example matchers
test("array matchers", () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(2);          // true
  expect(arr).toHaveLength(3);      // true
  expect(arr).not.toContain(5);     // true
});

test("object matchers", () => {
  const user = { name: "Alice", age: 25 };
  expect(user).toEqual({ name: "Alice", age: 25 });  // deep equality
  expect(user).toHaveProperty("name");               // has key
  expect(user.name).toBe("Alice");                   // specific value
});

test("string matchers", () => {
  const str = "Hello World";
  expect(str).toContain("World");    // true
  expect(str).toHaveLength(11);      // true
  expect(str).toMatch(/^Hello/);    // true (regex)
});

test("negation", () => {
  expect(5).not.toBe(6);
  expect(null).not.toBeUndefined();
});`
      },
      {
        heading: 'Test-Driven Development (TDD)',
        content: [
          '<strong>TDD</strong> is a development approach where you write the <em>test first</em>, watch it fail, then write just enough code to make it pass.',
          'The cycle is called <strong>Red → Green → Refactor</strong>:',
          '<ol><li><strong>Red:</strong> Write a test for a feature that does not exist yet. Run it — it fails.</li><li><strong>Green:</strong> Write the simplest code that makes the test pass.</li><li><strong>Refactor:</strong> Clean up the code while keeping the test green.</li></ol>',
          'This feels slow at first, but it produces better code: you think about the interface before the implementation, and you get 100% test coverage for free.'
        ],
        code: `// Step 1: RED — write the test first
// calculator.test.js
test("add returns the sum of two numbers", () => {
  const { add } = require("./calculator");
  expect(add(2, 3)).toBe(5);
});
// Run: jest → FAIL (module not found)

// Step 2: GREEN — write minimum code to pass
// calculator.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
// Run: jest → PASS

// Step 3: REFACTOR — improve while tests stay green
// (maybe add input validation, JSDoc, etc.)
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add() requires numbers");
  }
  return a + b;
}
// Run: jest → still PASS`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write tests for a <code>capitalize(str)</code> function that should:',
          '<ul><li>Return the first letter uppercase, rest lowercase</li><li>Handle empty strings (return "")</li><li>Handle single characters</li></ul>',
          'Then implement the function using TDD: write the tests first, then the code.'
        ],
        code: `// capitalize.test.js
const { capitalize } = require("./capitalize");

describe("capitalize", () => {
  it("capitalizes first letter, lowercases rest", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("Hello");
    expect(capitalize("hELLO")).toBe("Hello");
  });
  
  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
  
  it("handles single character", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("A")).toBe("A");
  });
});

// Now implement capitalize.js to make all tests pass:
// function capitalize(str) { ... }
// module.exports = { capitalize };`
      }
    ]
  },
  'build-tools-bundlers': {
    title: 'Build Tools and Bundlers',
    sections: [
      {
        heading: 'Why Build Tools?',
        content: [
          'Modern JavaScript development uses many files, libraries, and features that browsers cannot handle directly.',
          '<strong>Build tools</strong> solve this by transforming your source code into optimized files that browsers can serve efficiently.',
          'They do several important jobs:',
          '<ul><li><strong>Bundling:</strong> Combine dozens of files into one or two</li><li><strong>Transpilation:</strong> Convert modern JS to compatible JS for older browsers</li><li><strong>Minification:</strong> Remove spaces, comments, and shorten variable names</li><li><strong>Dev server:</strong> Serve your app locally with hot reload during development</li><li><strong>Asset handling:</strong> Process CSS, images, and fonts</li></ul>',
          'Without build tools, you would have to manually manage dozens of <code>&lt;script&gt;</code> tags, and your users would download more data than needed.'
        ]
      },
      {
        heading: 'npm Scripts',
        content: [
          'Every JavaScript project has a <code>package.json</code> file. Inside it, the <code>scripts</code> section lets you define commands you run often.',
          'These are the simplest form of build automation — no extra tools needed, just Node.js.',
          'You run them with <code>npm run &lt;name&gt;</code> (or just <code>npm &lt;name&gt;</code> for built-in commands like <code>start</code> and <code>test</code>).'
        ],
        code: `// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",                    // start dev server
    "build": "vite build",            // build for production
    "preview": "vite preview",       // preview production build
    "test": "jest",                   // run tests
    "lint": "eslint src/",            // check code quality
    "format": "prettier --write .",   // format code
    "deploy": "npm run build && rsync -avz dist/ server:/var/www/"
  }
}

// In the terminal:
// npm run dev      → starts Vite dev server
// npm run build    → creates production build in dist/
// npm run test     → runs Jest tests
// npm run lint     → checks code with ESLint`
      },
      {
        heading: 'Vite vs Webpack',
        content: [
          'Both Vite and Webpack are bundlers, but they take very different approaches.',
          '<strong>Webpack</strong> is the older, battle-tested tool. It has a huge plugin ecosystem but can be slow and complex to configure.',
          '<strong>Vite</strong> (created in 2020) is the modern alternative. It is dramatically faster because it uses native ES modules in dev mode — no bundling needed until production.',
          'For new projects, Vite is the default choice. Webpack is still common in large existing codebases.'
        ],
        code: `// Vite config (vite.config.js) — minimal
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,            // dev server port
    open: true              // open browser on start
  },
  build: {
    outDir: "dist",        // output directory
    sourcemap: true         // generate source maps
  }
});

// Webpack config (webpack.config.js) — equivalent, more verbose
const path = require("path");

module.exports = {
  entry: "./src/main.js",          // starting point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js"  // cache-busting
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: { port: 3000, open: true }
};`
      },
      {
        heading: 'Transpilation with Babel',
        content: [
          '<strong>Babel</strong> is a tool that converts modern JavaScript (ES6+) into an older version that more browsers can run.',
          'For example, it converts arrow functions to regular functions, <code>let</code>/<code>const</code> to <code>var</code>, and optional chaining to ternary checks.',
          'Vite and Webpack handle Babel integration automatically — you usually do not configure it directly.',
          'The <code>browserslist</code> field in package.json controls which browsers you want to support, which tells the transpiler how far back to go.'
        ],
        code: `// Modern JavaScript (what you write)
const greet = (name = "Guest") => {
  return \`Hello, \${name}!\`;
};

// After transpilation (what older browsers receive)
"use strict";
var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guest";
  return "Hello, " + name + "!";
};

// browserslist in package.json — controls transpilation targets
{
  "browserslist": [
    "> 0.5%",           // browsers with > 0.5% usage
    "last 2 versions",  // last 2 versions of each browser
    "not dead"          // exclude browsers without updates
  ]
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Add a custom npm script to a package.json that:',
          '<ol><li>Runs ESLint to check code quality</li><li>Runs Jest tests</li><li>Builds the project with Vite</li><li>All in one command: <code>npm run ci</code></li></ol>'
        ],
        code: `// Add this to package.json scripts:
"ci": "npm run lint && npm run test && npm run build"

// Now running: npm run ci
// 1. Checks code with ESLint
// 2. Runs all tests with Jest
// 3. Builds production bundle with Vite
// If any step fails, the whole thing stops`
      }
    ]
  },
  'js-best-practices': {
    title: 'JavaScript Best Practices',
    sections: [
      {
        heading: 'Clean Code Principles',
        content: [
          'Writing code that <em>works</em> is the easy part. Writing code that other humans can <em>read and maintain</em> is the real challenge.',
          '<strong>Clean code</strong> is about making your code understandable. You write code once, but it gets read many times — by teammates, by your future self, and by reviewers.',
          'Here are the core principles:',
          '<ul><li><strong>Meaningful names:</strong> <code>getUserById(id)</code> not <code>getData(x)</code></li><li><strong>Small functions:</strong> Each function does ONE thing well</li><li><strong>DRY:</strong> Don\'t Repeat Yourself — extract repeated logic into a function</li><li><strong>Single Responsibility:</strong> A module/class should have one reason to change</li><li><strong>Consistent style:</strong> Pick a style and stick with it — use a formatter</li></ul>'
        ],
        code: `// Bad: unclear names, does too much
function process(d) {
  if (d.t == "user") {
    d.n = d.f + " " + d.l;
    d.a = new Date().getFullYear() - d.y;
    return d;
  }
}

// Good: clear names, single responsibility
function formatUserFullName(user) {
  return \`\${user.firstName} \${user.lastName}\`;
}

function calculateUserAge(user) {
  return new Date().getFullYear() - user.birthYear;
}

// DRY — extract repeated logic
function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

const emails = ["alice@test.com", "bob@test.com", "invalid"];
const validEmails = emails.filter(validateEmail);  // reuse the function`
      },
      {
        heading: 'Using ESLint',
        content: [
          '<strong>ESLint</strong> is a tool that automatically checks your code for common mistakes, style issues, and bad patterns.',
          'It catches things like unused variables, missing semicolons, and accidentally using <code>==</code> instead of <code>===</code>.',
          'You can configure it with rules and even auto-fix many issues with <code>--fix</code>.'
        ],
        code: `// Install ESLint
// npm install --save-dev eslint
// npx eslint --init  → creates .eslintrc.json

// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2022": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "warn",       // warn about unused variables
    "no-console": "warn",           // warn about console.log in production
    "eqeqeq": "error",              // require === instead of ==
    "no-var": "error",              // forbid var, use let/const
    "prefer-const": "error",        // use const when variable is not reassigned
    "indent": ["error", 2]          // enforce 2-space indentation
  }
}

// Run: npx eslint src/
// Auto-fix: npx eslint src/ --fix

// Example issues ESLint catches:
var x = 5;          // Error: no-var
let y = 10;          // Error: prefer-const (y is never reassigned)
console.log(x);      // Warning: no-console
if (x == y) {}       // Error: eqeqeq`
      },
      {
        heading: 'Code Organization',
        content: [
          'As your project grows, <strong>how you organize files</strong> becomes just as important as the code inside them.',
          'The key principle is <strong>separation of concerns</strong>: each file/module should handle one area of your app.',
          'Group related files into folders, and use clear naming conventions.'
        ],
        code: `// Good project structure
src/
├── api/              ← API calls and data fetching
│   ├── users.js      ← user-related API calls
│   ├── posts.js      ← post-related API calls
│   └── index.js      ← re-exports everything
├── components/       ← reusable UI components
│   ├── Button.vue
│   └── Card.vue
├── views/            ← page-level components
│   ├── Home.vue
│   └── Profile.vue
├── utils/            ← helper functions
│   ├── format.js
│   └── validate.js
├── store/            ← state management
│   └── index.js
├── styles/           ← global styles
│   └── main.css
└── main.js           ← entry point

// Naming conventions:
// Files: PascalCase for components (Button.vue)
// Functions: camelCase (getUserData)
// Constants: UPPER_SNAKE (MAX_RETRIES)
// Classes: PascalCase (UserController)`
      },
      {
        heading: 'Performance Tips',
        content: [
          'Writing efficient JavaScript does not mean premature optimization — it means avoiding common pitfalls that slow down your app.',
          'Here are practical tips that make a real difference:',
          '<ul><li><strong>Debounce</strong> input handlers to avoid running on every keystroke</li><li><strong>Throttle</strong> scroll and resize handlers to run at most every 16ms (60fps)</li><li><strong>Avoid memory leaks</strong> by removing event listeners and clearing timers</li><li><strong>Use <code>const</code></strong> by default — it helps the JS engine optimize</li><li><strong>Batch DOM updates</strong> — multiple style changes in one frame</li></ul>'
        ],
        code: `// Debounce: wait until user stops typing
function debounce(fn, delay = 300) {
  let timer;
  return function(...args) {
    clearTimeout(timer);                    // cancel previous timer
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle: run at most once per interval
function throttle(fn, limit = 16) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
searchInput.addEventListener("input", debounce(handleSearch, 400));
window.addEventListener("scroll", throttle(updateScrollPosition, 16));

// Memory leak prevention
function setupComponent() {
  const handler = () => console.log("clicked");
  document.addEventListener("click", handler);
  
  // When component is destroyed, REMOVE the listener
  function destroy() {
    document.removeEventListener("click", handler);
    clearInterval(pollInterval);  // clear timers too!
  }
  
  const pollInterval = setInterval(fetchUpdates, 5000);
  
  return { destroy };
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Refactor this messy code using the best practices you learned:',
          '<ol><li>Give variables meaningful names</li><li>Extract repeated logic into a function</li><li>Use <code>const</code> where appropriate</li><li>Add proper error handling</li></ol>'
        ],
        code: `// Before — messy and hard to read
function d(u) {
  var r = fetch("/api/users/" + u);
  r.then(function(res) {
    if (res.ok) {
      res.json().then(function(data) {
        var n = data.firstName + " " + data.lastName;
        var a = 2026 - data.birthYear;
        console.log(n + " is " + a + " years old");
      });
    }
  });
}

// After — clean and readable
async function fetchAndDisplayUser(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`Failed: \${response.status}\`);
    }
    
    const user = await response.json();
    const fullName = \`\${user.firstName} \${user.lastName}\`;
    const age = new Date().getFullYear() - user.birthYear;
    
    console.log(\`\${fullName} is \${age} years old\`);
  } catch (error) {
    console.error("Could not fetch user:", error.message);
  }
}`
      }
    ]
  }
};

export { jsModule5Content };