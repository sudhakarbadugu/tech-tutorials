// Real JavaScript interview questions from actual candidate experiences

export const javascriptRealQuestions = {
  "questions": [
    {
      "question": "Implement an infinite scroll with data fetching and pagination in plain JavaScript. Can you optimize it with throttle?",
      "answer": "<p>Use an <code>IntersectionObserver</code> on a sentinel element just below the list to trigger fetches. Maintain a <code>page</code> counter and an <code>isLoading</code> flag to avoid duplicate requests. Wrap the callback in a throttle so rapid scroll events do not fire multiple fetches.</p><pre><code class=\"language-javascript\">let page = 1;\nlet loading = false;\nconst sentinel = document.querySelector('#sentinel');\n\nconst observer = new IntersectionObserver(throttle((entries) =&gt; {\n  if (entries[0].isIntersecting &amp;&amp; !loading) {\n    loading = true;\n    fetch('/items?page=' + page)\n      .then(r =&gt; r.json())\n      .then(data =&gt; {\n        appendItems(data);\n        page++;\n        loading = false;\n      });\n  }\n}, 300));\n\nobserver.observe(sentinel);</code></pre><p>Follow-ups: support virtual scrolling for very long lists, add retry logic, and handle slow networks with a loading skeleton and error state.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM",
        "Performance"
      ],
      "keyPoints": [
        "Use IntersectionObserver instead of scroll listeners for better performance.",
        "Throttle the fetch trigger and guard against concurrent in-flight requests.",
        "Add pagination, retry, and loading/error states for production use."
      ]
    },
    {
      "question": "Memoize I and II - implement a memoize function from scratch that caches function results.",
      "answer": "<p>A memoize wrapper stores results in a cache keyed by serialized arguments. It works with primitive keys; for object keys use a <code>Map</code> or a stable resolver. Support an optional resolver for custom keys.</p><pre><code class=\"language-javascript\">function memoize(fn, resolver) {\n  const cache = new Map();\n  return function (...args) {\n    const key = resolver ? resolver(...args) : JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}</code></pre><p>For the follow-up (Memoize II), the cache key is the function call identity rather than arguments, typically implemented with a <code>WeakMap</code> keyed by the function object itself.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Performance",
        "Functions"
      ],
      "keyPoints": [
        "Cache results by a stable key such as JSON.stringify(args) or a resolver.",
        "Preserve this context with fn.apply(this, args).",
        "Use Map or WeakMap when keys are objects."
      ]
    },
    {
      "question": "Difference between callback and closure in JavaScript?",
      "answer": "<p>A <strong>callback</strong> is a function passed as an argument to another function to be invoked later. A <strong>closure</strong> is a function that remembers variables from its enclosing scope even after that scope has closed.</p><pre><code class=\"language-javascript\">// callback\nfunction fetchData(cb) { cb('data'); }\n\n// closure\nfunction makeCounter() {\n  let count = 0;\n  return () =&gt; ++count;\n}</code></pre><p>Closures are often used to create callbacks that carry state.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Functions",
        "Closures"
      ],
      "keyPoints": [
        "Callbacks are passed as arguments and invoked later.",
        "Closures capture variables from their enclosing lexical scope.",
        "Closures enable stateful callbacks and private variables."
      ]
    },
    {
      "question": "Difference between event bubbling and capturing?",
      "answer": "<p>Events travel through the DOM in two phases. In the <strong>capturing</strong> phase the event moves from the document root down to the target. In the <strong>bubbling</strong> phase it moves back up from the target to the root.</p><pre><code class=\"language-javascript\">element.addEventListener('click', handler, false); // bubble (default)\nelement.addEventListener('click', handler, true);  // capture</code></pre><p>Use <code>event.stopPropagation()</code> to stop further propagation and <code>event.target</code> to identify the actual element that received the event.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "DOM",
        "Events"
      ],
      "keyPoints": [
        "Capturing descends from the document root to the target.",
        "Bubbling ascends from the target back to the root.",
        "addEventListener's third argument selects the phase."
      ]
    },
    {
      "question": "Write a debounce function from scratch and describe where you'd use it in a frontend app.",
      "answer": "<p>Debounce delays invoking a function until after a period of inactivity. It resets the timer on every call, so the function only runs once the bursts stop.</p><pre><code class=\"language-javascript\">function debounce(fn, wait) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() =&gt; fn.apply(this, args), wait);\n  };\n}</code></pre><p>Common uses: search inputs, window resize handlers, form validation, and auto-save.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Performance"
      ],
      "keyPoints": [
        "Reset the timer on every call.",
        "Preserve this and arguments with apply.",
        "Use for rapid-fire events like typing or resizing."
      ]
    },
    {
      "question": "Describe how you would securely handle CORS issues in a frontend application.",
      "answer": "<p>CORS is enforced by the browser, not the server. The frontend cannot bypass it. The correct fix is to configure the server to send the proper <code>Access-Control-Allow-Origin</code> and related headers, or route requests through a same-origin backend proxy.</p><ul><li>Never disable browser security or use wildcards <code>*</code> in production.</li><li>Use credentials only with explicit, trusted origins.</li><li>Prefer environment-driven API base URLs and a backend proxy for third-party APIs.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Browser",
        "Security",
        "CORS"
      ],
      "keyPoints": [
        "CORS is a browser-enforced server-header contract.",
        "Use a same-origin proxy when you cannot change the third-party server.",
        "Restrict allowed origins and credentials in production."
      ]
    },
    {
      "question": "Implement a message list that maintains order even when messages arrive out of sequence.",
      "answer": "<p>Assign each message a monotonic sequence number or reliable timestamp. Store messages in a data structure sorted by that key and render from the sorted collection.</p><pre><code class=\"language-javascript\">const messages = new Map();\nfunction onMessage(msg) {\n  messages.set(msg.seq, msg);\n  render([...messages.values()].sort((a, b) =&gt; a.seq - b.seq));\n}</code></pre><p>Handle duplicate sequence numbers by overwriting with the latest version and acknowledge receipt to the server.</p>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "Data Structures"
      ],
      "keyPoints": [
        "Use sequence numbers or reliable timestamps for ordering.",
        "Sort before rendering instead of appending in arrival order.",
        "Deduplicate and handle gaps with acknowledgements."
      ]
    },
    {
      "question": "Build a draggable rectangle tool that snaps to a grid and detects overlaps with other shapes.",
      "answer": "<p>Track pointer deltas, convert client coordinates to canvas coordinates, and snap to a grid by rounding to the nearest grid multiple. Detect overlap with axis-aligned bounding box (AABB) checks.</p><pre><code class=\"language-javascript\">function snap(value, grid) {\n  return Math.round(value / grid) * grid;\n}\n\nfunction overlaps(a, b) {\n  return a.x &lt; b.x + b.w &amp;&amp; a.x + a.w &gt; b.x &amp;&amp;\n         a.y &lt; b.y + b.h &amp;&amp; a.y + a.h &gt; b.y;\n}</code></pre><p>Use <code>requestAnimationFrame</code> for smooth updates and store shape state immutably.</p>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "DOM",
        "Canvas"
      ],
      "keyPoints": [
        "Track pointer deltas and snap coordinates to the grid.",
        "Use AABB overlap detection between rectangles.",
        "Batch visual updates with requestAnimationFrame."
      ]
    },
    {
      "question": "How would you optimize rendering performance for a canvas with 1000+ vector elements?",
      "answer": "<p>Optimize by minimizing the number of elements drawn each frame. Techniques include viewport culling, spatial indexing, layering static content onto an offscreen canvas, and using a retained-mode renderer only for changing elements.</p><ul><li><strong>Culling:</strong> skip shapes outside the visible viewport.</li><li><strong>Layering:</strong> cache static layers as bitmaps.</li><li><strong>WebGL:</strong> for massive counts, use a GPU-based renderer such as PixiJS.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "Performance",
        "Canvas"
      ],
      "keyPoints": [
        "Cull off-screen elements before drawing.",
        "Cache static layers on an offscreen canvas.",
        "Use spatial indexes or GPU rendering for huge counts."
      ]
    },
    {
      "question": "Implement undo/redo functionality for a collaborative design editor.",
      "answer": "<p>Use a command pattern with immutable state snapshots. Maintain two stacks: <code>undoStack</code> and <code>redoStack</code>. For collaboration, serialize operations and apply operational transformation or CRDTs to merge concurrent edits.</p><pre><code class=\"language-javascript\">function applyCommand(state, command) {\n  return command.execute(state);\n}\n\nfunction undo(state) {\n  const command = undoStack.pop();\n  redoStack.push(command);\n  return command.undo(state);\n}</code></pre><p>Save snapshots at safe points and debounce persistence.</p>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "State Management",
        "Data Structures"
      ],
      "keyPoints": [
        "Command pattern with execute and undo methods.",
        "Maintain separate undo and redo stacks.",
        "Use CRDTs or OT for real-time collaborative edits."
      ]
    },
    {
      "question": "Create a text editor that converts markdown syntax to formatted blocks in real-time.",
      "answer": "<p>Parse the input incrementally with a state machine or a library like markdown-it, and map tokens to editable blocks. Keep a clean separation between the raw markdown model and the rendered view to avoid losing the cursor.</p><ul><li>Use <code>contenteditable</code> blocks or a textarea overlay for editing.</li><li>Update only changed blocks with a diffing strategy.</li><li>Handle edge cases like nested lists, code fences, and inline formatting.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "DOM",
        "Parsing"
      ],
      "keyPoints": [
        "Parse markdown into a token stream or AST.",
        "Separate the markdown model from the rendered view.",
        "Update only changed blocks to preserve cursor state."
      ]
    },
    {
      "question": "Write a polyfill of map function.",
      "answer": "<p>Implement <code>Array.prototype.map</code> by creating a new array, invoking the callback for each element, and preserving holes.</p><pre><code class=\"language-javascript\">Array.prototype.myMap = function(callback, thisArg) {\n  const result = new Array(this.length);\n  for (let i = 0; i &lt; this.length; i++) {\n    if (i in this) {\n      result[i] = callback.call(thisArg, this[i], i, this);\n    }\n  }\n  return result;\n};</code></pre><p>Avoid extending built-ins in production; prefer a standalone utility function.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "ES6",
        "Arrays"
      ],
      "keyPoints": [
        "Return a new array without mutating the original.",
        "Invoke callback with value, index, and array.",
        "Preserve sparse array holes."
      ]
    },
    {
      "question": "Write a polyfill of filter function.",
      "answer": "<p><code>Array.prototype.filter</code> returns a new array with elements that pass the predicate.</p><pre><code class=\"language-javascript\">Array.prototype.myFilter = function(callback, thisArg) {\n  const result = [];\n  for (let i = 0; i &lt; this.length; i++) {\n    if (i in this &amp;&amp; callback.call(thisArg, this[i], i, this)) {\n      result.push(this[i]);\n    }\n  }\n  return result;\n};</code></pre><p>Like map, avoid modifying native prototypes in real codebases.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "ES6",
        "Arrays"
      ],
      "keyPoints": [
        "Predicate receives value, index, and array.",
        "Skip holes in sparse arrays.",
        "Return a new array containing passing elements."
      ]
    },
    {
      "question": "Implement $('button').addClass('change').css('background-color','yellow') in vanilla JavaScript.",
      "answer": "<p>Create a wrapper that stores selected elements and returns <code>this</code> from each mutating method to enable chaining.</p><pre><code class=\"language-javascript\">function $(selector) {\n  const elements = document.querySelectorAll(selector);\n  return {\n    addClass(cls) {\n      elements.forEach(el =&gt; el.classList.add(cls));\n      return this;\n    },\n    css(prop, value) {\n      elements.forEach(el =&gt; el.style[prop] = value);\n      return this;\n    }\n  };\n}</code></pre><p>This mimics a tiny subset of jQuery's fluent API.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM"
      ],
      "keyPoints": [
        "Query elements and store them in the wrapper object.",
        "Return this from methods to allow chaining.",
        "Use classList and style APIs to mutate elements."
      ]
    },
    {
      "question": "Print 100 buttons with numbers and clicking any button alerts the number. Use event bubbling/capturing.",
      "answer": "<p>Use a single listener on the parent container and inspect <code>event.target</code>. This avoids creating 100 handlers and works for dynamically added buttons.</p><pre><code class=\"language-javascript\">const container = document.getElementById('container');\nfor (let i = 1; i &lt;= 100; i++) {\n  const btn = document.createElement('button');\n  btn.textContent = i;\n  btn.dataset.num = i;\n  container.appendChild(btn);\n}\ncontainer.addEventListener('click', (e) =&gt; {\n  if (e.target.tagName === 'BUTTON') {\n    alert(e.target.dataset.num);\n  }\n});</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM",
        "Events"
      ],
      "keyPoints": [
        "Attach one listener to the parent container.",
        "Use event.target or closest to identify the clicked button.",
        "Efficient for dynamic lists."
      ]
    },
    {
      "question": "What is throttling and debounce in JavaScript?",
      "answer": "<p><strong>Throttle</strong> ensures a function executes at most once per interval, while <strong>debounce</strong> delays execution until the event has stopped firing for a specified delay.</p><pre><code class=\"language-javascript\">function throttle(fn, limit) {\n  let inThrottle;\n  return function (...args) {\n    if (!inThrottle) {\n      fn.apply(this, args);\n      inThrottle = true;\n      setTimeout(() =&gt; inThrottle = false, limit);\n    }\n  };\n}</code></pre><p>Use throttle for scroll and resize, debounce for search input.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Performance"
      ],
      "keyPoints": [
        "Throttle limits execution to a fixed rate.",
        "Debounce waits for a pause in events.",
        "Both improve performance of high-frequency handlers."
      ]
    },
    {
      "question": "Calculate Sum of n numbers using closures: sum(1)()(2)()...",
      "answer": "<p>Return a function that accumulates the value. When the returned function is called with no arguments, return the accumulated sum; otherwise return another accumulator.</p><pre><code class=\"language-javascript\">function sum(a) {\n  let total = a || 0;\n  function inner(b) {\n    if (b === undefined) return total;\n    total += b;\n    return inner;\n  }\n  return inner;\n}</code></pre><p>This pattern relies on closures and function chaining.</p>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "Closures"
      ],
      "keyPoints": [
        "Closure accumulates the running total.",
        "Empty call returns the result.",
        "Each numeric call returns the same accumulator."
      ]
    },
    {
      "question": "Implement a function to read a field inside a nested object safely.",
      "answer": "<p>Use optional chaining if available, or a recursive helper that splits the path and checks each level.</p><pre><code class=\"language-javascript\">function get(obj, path, fallback) {\n  return path.split('.').reduce((acc, key) =&gt;\n    acc &amp;&amp; acc[key] !== undefined ? acc[key] : fallback, obj);\n}\n\n// modern\nconst value = obj?.a?.b?.c ?? fallback;</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Objects",
        "Optional Chaining"
      ],
      "keyPoints": [
        "Traverse the path step by step.",
        "Return a fallback when a key is missing.",
        "Optional chaining is the idiomatic modern approach."
      ]
    },
    {
      "question": "Implement a star rating widget.",
      "answer": "<p>Create star elements and toggle an active class or text based on the selected rating.</p><pre><code class=\"language-javascript\">function renderStars(container, max = 5) {\n  for (let i = 1; i &lt;= max; i++) {\n    const star = document.createElement('span');\n    star.textContent = '\u2606';\n    star.dataset.value = i;\n    star.addEventListener('click', () =&gt; setRating(i));\n    container.appendChild(star);\n  }\n}\n\nfunction setRating(value) {\n  stars.forEach((s, i) =&gt; {\n    s.textContent = i &lt; value ? '\u2605' : '\u2606';\n  });\n}</code></pre><p>Make it accessible with aria-labels and keyboard navigation.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM"
      ],
      "keyPoints": [
        "Render interactive star elements.",
        "Update visual state when a star is selected.",
        "Support keyboard and screen-reader accessibility."
      ]
    },
    {
      "question": "Design an accordion component where only one section is open at a time; a checkbox enables multiple sections.",
      "answer": "<p>Use a container with sections. When a section header is clicked, close all others unless the multi-select checkbox is checked, then toggle the clicked section.</p><pre><code class=\"language-javascript\">container.addEventListener('click', (e) =&gt; {\n  const header = e.target.closest('.accordion-header');\n  if (!header) return;\n  const item = header.parentElement;\n  const allowMultiple = checkbox.checked;\n  if (!allowMultiple) {\n    items.forEach(i =&gt; i !== item &amp;&amp; i.classList.remove('open'));\n  }\n  item.classList.toggle('open');\n});</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM"
      ],
      "keyPoints": [
        "Single listener on the container.",
        "Toggle an active class on the clicked section.",
        "Respect multi-select mode when closing others."
      ]
    },
    {
      "question": "Implement a data table from an array of objects using HTML/CSS and JavaScript with searching and sorting.",
      "answer": "<p>Render rows from an array of objects. For searching, filter by object values with a case-insensitive match. For sorting, use <code>Array.prototype.sort</code> with a comparator keyed by the selected column.</p><pre><code class=\"language-javascript\">function sortData(data, key, dir) {\n  return [...data].sort((a, b) =&gt; {\n    if (a[key] &lt; b[key]) return -1 * dir;\n    if (a[key] &gt; b[key]) return 1 * dir;\n    return 0;\n  });\n}</code></pre><p>Keep a copy of the original data so sorting and searching are non-destructive.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM",
        "Arrays"
      ],
      "keyPoints": [
        "Render rows from an array of objects.",
        "Filter with case-insensitive search across values.",
        "Sort immutably by a selected column."
      ]
    },
    {
      "question": "Implement Array.prototype functions like map, reduce, filter, sort.",
      "answer": "<p>Write polyfills that iterate over the array, invoke the callback with <code>value, index, array</code>, and respect the <code>thisArg</code> and holes. For <code>sort</code>, implement a comparison-based algorithm such as quicksort or merge sort and call the comparator.</p><pre><code class=\"language-javascript\">Array.prototype.myReduce = function(callback, initial) {\n  let acc = initial;\n  let start = 0;\n  if (acc === undefined) { acc = this[0]; start = 1; }\n  for (let i = start; i &lt; this.length; i++) {\n    if (i in this) acc = callback(acc, this[i], i, this);\n  }\n  return acc;\n};</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "ES6",
        "Arrays"
      ],
      "keyPoints": [
        "Iterate and invoke the callback.",
        "Handle the initial value case in reduce.",
        "Sort requires a stable comparator."
      ]
    },
    {
      "question": "Implement a function getElementsByStyle(property, value) that returns all DOM elements matching that style.",
      "answer": "<p>Walk the DOM recursively, read computed styles with <code>getComputedStyle</code>, and compare with the requested property/value.</p><pre><code class=\"language-javascript\">function getElementsByStyle(property, value) {\n  const matches = [];\n  function walk(node) {\n    if (node.nodeType !== 1) return;\n    const style = getComputedStyle(node);\n    if (style[property] === value) matches.push(node);\n    Array.from(node.children).forEach(walk);\n  }\n  walk(document.body);\n  return matches;\n}</code></pre><p>Prefer a single <code>querySelectorAll</code> check when matching inline styles or known classes.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM"
      ],
      "keyPoints": [
        "Use getComputedStyle for resolved style values.",
        "Recursively traverse element nodes.",
        "Prefer inline-style or class selectors when possible."
      ]
    },
    {
      "question": "Implement an image carousel in vanilla JavaScript.",
      "answer": "<p>Track the active slide index. Update the container's transform or position when next/previous controls are clicked. Optionally autoplay and pause on hover.</p><pre><code class=\"language-javascript\">function next() {\n  index = (index + 1) % slides.length;\n  update();\n}\nfunction update() {\n  track.style.transform = 'translateX(' + (-index * 100) + '%)';\n}</code></pre><p>Add touch/swipe support and keyboard navigation for accessibility.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM"
      ],
      "keyPoints": [
        "Track the active slide index.",
        "Update transform or position to show the active slide.",
        "Wrap around, autoplay, and support keyboard/touch."
      ]
    },
    {
      "question": "Build a relative-time/date component: given a date, display 'just now', 'n days ago', 'n weeks ago', etc.",
      "answer": "<p>Compute the difference between now and the given date, then bucket it into units like seconds, minutes, hours, days, weeks, months, years.</p><pre><code class=\"language-javascript\">function relativeTime(date) {\n  const diff = Date.now() - new Date(date).getTime();\n  const seconds = Math.floor(diff / 1000);\n  if (seconds &lt; 60) return 'just now';\n  const minutes = Math.floor(seconds / 60);\n  if (minutes &lt; 60) return minutes + 'm ago';\n  const hours = Math.floor(minutes / 60);\n  if (hours &lt; 24) return hours + 'h ago';\n  const days = Math.floor(hours / 24);\n  return days + 'd ago';\n}</code></pre><p>Re-render periodically or use a live region for updates.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Date"
      ],
      "keyPoints": [
        "Calculate elapsed time from the input date.",
        "Bucket into human-readable units.",
        "Update the live region for changing values."
      ]
    },
    {
      "question": "Implement infinite scroll on a list with follow-ups on pagination, different devices, slow networks, error handling.",
      "answer": "<p>Use a sentinel element and <code>IntersectionObserver</code> with cursor-based pagination. Handle device differences with larger touch targets and pull-to-refresh, slow networks with skeletons and timeouts, and errors with retry and messaging.</p><ul><li><strong>Pagination:</strong> cursor-based IDs for stable ordering.</li><li><strong>Devices:</strong> responsive touch targets and momentum scrolling.</li><li><strong>Slow networks:</strong> request timeouts and loading skeletons.</li><li><strong>Errors:</strong> retry button, exponential backoff, and user-facing messages.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM",
        "Performance"
      ],
      "keyPoints": [
        "Cursor pagination avoids duplicate items on insertions.",
        "Show skeletons and handle timeouts on slow networks.",
        "Implement retry and clear error messaging."
      ]
    },
    {
      "question": "Implement auto-suggest dropdown with debounce - HTML/CSS for input plus search results, then add debounced fetching.",
      "answer": "<p>Listen to <code>input</code> events, debounce the fetch, and render results. Handle keyboard navigation and dismiss on outside click.</p><pre><code class=\"language-javascript\">input.addEventListener('input', debounce(async (e) =&gt; {\n  const q = e.target.value.trim();\n  if (!q) return clearResults();\n  const data = await fetch('/search?q=' + encodeURIComponent(q))\n    .then(r =&gt; r.json());\n  renderResults(data);\n}, 300));</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "DOM",
        "Async"
      ],
      "keyPoints": [
        "Debounce input before fetching results.",
        "Support keyboard navigation through suggestions.",
        "Dismiss the dropdown on blur or outside click."
      ]
    },
    {
      "question": "Explain the event loop. What is the difference between microtasks and macrotasks?",
      "answer": "<p>The event loop continuously checks the call stack. When empty, it picks one macrotask (task) from the task queue, executes it, then drains all microtasks (promises, queueMicrotask) before rendering or the next macrotask.</p><pre><code class=\"language-javascript\">console.log('sync');\nsetTimeout(() =&gt; console.log('macro'), 0);\nPromise.resolve().then(() =&gt; console.log('micro'));</code></pre><p>Microtasks can starve rendering if they queue recursively.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Event Loop",
        "Async"
      ],
      "keyPoints": [
        "Call stack, task queue, and microtask queue coordinate execution.",
        "Microtasks run before the next macrotask.",
        "Recursive microtasks can block rendering."
      ]
    },
    {
      "question": "Predict the output order: console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');",
      "answer": "<p>The output is <code>A, D, C, B</code>.</p><ul><li><code>A</code> and <code>D</code> are synchronous and run first.</li><li><code>C</code> is a microtask (promise) and runs after the current synchronous code.</li><li><code>B</code> is a macrotask (<code>setTimeout</code>) and runs after microtasks.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Event Loop",
        "Async"
      ],
      "keyPoints": [
        "Synchronous code executes first.",
        "Microtasks run before macrotasks.",
        "setTimeout with 0 still queues as a macrotask."
      ]
    },
    {
      "question": "What are the new features introduced in ES2024?",
      "answer": "<p>ES2024 highlights include:</p><ul><li><code>Object.groupBy</code> and <code>Map.groupBy</code> for grouping collections.</li><li><code>Array.prototype.toSorted</code>, <code>toReversed</code>, <code>toSpliced</code>, and <code>with</code> for immutable array operations.</li><li><code>Promise.withResolvers</code> for creating a promise with exposed resolve/reject.</li><li>Well-formed <code>Atomics.waitAsync</code> and regex <code>v</code> flag improvements.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "ES2024"
      ],
      "keyPoints": [
        "Immutable array methods: toSorted, toReversed, toSpliced, with.",
        "groupBy for grouping collections by a key.",
        "Promise.withResolvers exposes resolve and reject."
      ]
    },
    {
      "question": "What are async iterators, and how do they differ from regular iterators?",
      "answer": "<p>Regular iterators yield synchronous values via <code>next()</code> returning <code>{ value, done }</code>. Async iterators return a Promise from <code>next()</code>, allowing I/O between values.</p><pre><code class=\"language-javascript\">async function* fetchPages(url) {\n  let page = 1;\n  while (true) {\n    const data = await fetch(url + '?page=' + page).then(r =&gt; r.json());\n    if (data.length === 0) break;\n    yield data;\n    page++;\n  }\n}</code></pre><p>Consume with <code>for await...of</code>.</p>",
      "difficulty": "Advanced",
      "tags": [
        "JavaScript",
        "Async",
        "ES6"
      ],
      "keyPoints": [
        "async next() returns a Promise.",
        "Use for await...of to consume async iterators.",
        "Ideal for streams and paginated data sources."
      ]
    },
    {
      "question": "Explain the difference between localStorage and sessionStorage.",
      "answer": "<p>Both store key-value strings in the browser. <code>localStorage</code> persists until explicitly cleared; <code>sessionStorage</code> is scoped to the tab and cleared when the tab closes.</p><pre><code class=\"language-javascript\">localStorage.setItem('key', 'value');\nsessionStorage.setItem('key', 'value');</code></pre><p>Both are synchronous, limited to roughly 5-10 MB, and accessible only to same-origin pages.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Browser",
        "Web APIs",
        "Storage"
      ],
      "keyPoints": [
        "localStorage persists across sessions.",
        "sessionStorage is scoped to the tab and cleared on close.",
        "Both store strings only and are same-origin."
      ]
    },
    {
      "question": "Can you store passwords in localStorage?",
      "answer": "<p>No. localStorage is accessible to any JavaScript running on the same origin, including XSS payloads. It is also not encrypted and persists on disk.</p><ul><li>Store tokens in <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code> cookies to prevent JavaScript access.</li><li>Use short-lived access tokens and refresh tokens.</li><li>Never store plaintext passwords in the client.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Browser",
        "Security"
      ],
      "keyPoints": [
        "localStorage is vulnerable to XSS.",
        "Use HttpOnly, Secure, SameSite cookies for tokens.",
        "Never store plaintext passwords client-side."
      ]
    },
    {
      "question": "Explain what JWT Tokens are and how they are used.",
      "answer": "<p>A JSON Web Token (JWT) is a compact, signed token containing claims. It has three parts: header, payload, and signature, separated by dots.</p><pre><code class=\"language-javascript\">// typical flow\nconst token = await login(credentials);\nlocalStorage.setItem('token', token); // or a cookie\nfetch('/api/data', {\n  headers: { Authorization: 'Bearer ' + token }\n});</code></pre><p>Verify signatures server-side, keep tokens short-lived, and store them securely.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Browser",
        "Security",
        "Authentication"
      ],
      "keyPoints": [
        "JWT consists of header.payload.signature.",
        "Signed but not encrypted by default.",
        "Verify server-side and use short expiry."
      ]
    },
    {
      "question": "Why does CORS exist? Why the error on client side if CORS is allowed?",
      "answer": "<p>CORS prevents malicious sites from making authenticated requests to other origins on behalf of the user. The browser blocks the frontend from reading the response unless the server sends CORS headers.</p><p>The error appears on the client because the browser enforces the policy, even though the server may have processed the request. The fix is server-side CORS configuration, not a frontend workaround.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Browser",
        "Security",
        "CORS"
      ],
      "keyPoints": [
        "Same-origin policy protects users from cross-site requests.",
        "The browser blocks reading responses without CORS headers.",
        "Fix CORS by configuring the server, not the client."
      ]
    },
    {
      "question": "Explain what happens when you type google.com (IP resolution process).",
      "answer": "<p>The browser performs these steps:</p><ol><li>Check the browser cache, OS cache, and hosts file.</li><li>Send a DNS query to the configured resolver (recursive DNS).</li><li>The resolver contacts root, TLD, and authoritative nameservers to get the IP.</li><li>TCP/TLS handshake to the server IP (HTTP/3 may use QUIC).</li><li>Send HTTP request and render the response.</li></ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Browser",
        "Networking"
      ],
      "keyPoints": [
        "DNS resolution goes through cache, resolver, root, TLD, and authoritative servers.",
        "TCP/TLS handshake happens before HTTP.",
        "HTTP/3 may use QUIC instead of TCP."
      ]
    },
    {
      "question": "What is the critical rendering path?",
      "answer": "<p>The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on screen. It includes building the DOM, CSSOM, render tree, layout, paint, and composite.</p><ul><li>Render-blocking CSS and synchronous JS delay the first paint.</li><li>Optimize by inlining critical CSS, deferring non-critical scripts, and using <code>font-display: swap</code>.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Browser",
        "Performance"
      ],
      "keyPoints": [
        "DOM plus CSSOM form the render tree.",
        "Layout, paint, and composite produce pixels.",
        "Minimize render-blocking resources."
      ]
    },
    {
      "question": "What is prototype inheritance in JavaScript? How does it work?",
      "answer": "<p>Each object has an internal link to another object called its prototype. When a property is accessed, JavaScript walks up the prototype chain until it finds the property or reaches <code>null</code>.</p><pre><code class=\"language-javascript\">function Animal(name) { this.name = name; }\nAnimal.prototype.speak = function() { return this.name + ' makes noise'; };\n\nfunction Dog(name) { Animal.call(this, name); }\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;</code></pre><p>Modern syntax uses <code>class</code> and <code>extends</code>, which are syntactic sugar over prototypes.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "OOP"
      ],
      "keyPoints": [
        "Objects delegate property lookups to prototypes.",
        "The prototype chain ends at null.",
        "Classes are syntactic sugar over prototype inheritance."
      ]
    },
    {
      "question": "What is a closure in JavaScript and how/why would you use one?",
      "answer": "<p>A closure is a function that retains access to variables from its lexical scope even when executed outside that scope. Common uses include data privacy, factory functions, and callbacks.</p><pre><code class=\"language-javascript\">function counter() {\n  let count = 0;\n  return {\n    inc: () =&gt; ++count,\n    dec: () =&gt; --count,\n    get: () =&gt; count\n  };\n}</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Closures"
      ],
      "keyPoints": [
        "A function remembers its lexical scope.",
        "Enables private state and factory functions.",
        "Beware memory leaks from accidental retention."
      ]
    },
    {
      "question": "Implement Promise.all from scratch as a polyfill.",
      "answer": "<p><code>Promise.all</code> waits for all input promises to settle and returns an array of results. If any rejects, the returned promise rejects immediately.</p><pre><code class=\"language-javascript\">Promise.myAll = function(promises) {\n  return new Promise((resolve, reject) =&gt; {\n    if (promises.length === 0) return resolve([]);\n    const results = new Array(promises.length);\n    let completed = 0;\n    promises.forEach((p, i) =&gt; {\n      Promise.resolve(p).then(value =&gt; {\n        results[i] = value;\n        completed++;\n        if (completed === promises.length) resolve(results);\n      }, reject);\n    });\n  });\n};</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Async",
        "Promises"
      ],
      "keyPoints": [
        "Wrap inputs with Promise.resolve.",
        "Collect results in input order.",
        "Reject on the first failure."
      ]
    },
    {
      "question": "Flatten a nested JavaScript object: { person: { name: 'Aditya' } } => { 'person.name': 'Aditya' }",
      "answer": "<p>Recursively traverse the object, building dot-notation keys for each nested value.</p><pre><code class=\"language-javascript\">function flatten(obj, prefix = '', res = {}) {\n  for (const key in obj) {\n    if (!obj.hasOwnProperty(key)) continue;\n    const newKey = prefix ? prefix + '.' + key : key;\n    if (typeof obj[key] === 'object' &amp;&amp; obj[key] !== null &amp;&amp; !Array.isArray(obj[key])) {\n      flatten(obj[key], newKey, res);\n    } else {\n      res[newKey] = obj[key];\n    }\n  }\n  return res;\n}</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Objects",
        "Recursion"
      ],
      "keyPoints": [
        "Build dot-notation keys recursively.",
        "Skip inherited properties.",
        "Handle arrays and null appropriately."
      ]
    },
    {
      "question": "How would you go about refactoring a large, legacy codebase with minimal documentation?",
      "answer": "<p>Approach refactoring incrementally:</p><ol><li><strong>Inventory:</strong> map entry points, dependencies, tests, and risky areas.</li><li><strong>Baseline:</strong> add types (TypeScript), linting, and tests before changing behavior.</li><li><strong>Strangle:</strong> replace modules one at a time behind clean interfaces.</li><li><strong>Verify:</strong> use feature flags, A/B tests, and monitoring to catch regressions.</li></ol>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "Best Practices"
      ],
      "keyPoints": [
        "Add tests and linting before changing behavior.",
        "Refactor incrementally behind clean interfaces.",
        "Monitor for regressions with feature flags and metrics."
      ]
    },
    {
      "question": "What is the difference between == and === in JavaScript?",
      "answer": "<p><code>==</code> performs type coercion before comparison, while <code>===</code> checks both value and type. Prefer <code>===</code> to avoid surprising conversions.</p><pre><code class=\"language-javascript\">0 == '0'   // true\n0 === '0'  // false\nnull == undefined // true\nnull === undefined // false</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Operators"
      ],
      "keyPoints": [
        "== coerces types before comparing.",
        "=== compares value and type without coercion.",
        "Use === by default."
      ]
    },
    {
      "question": "What is the difference between `async` and `defer` in JavaScript script loading?",
      "answer": "<p>Both load scripts asynchronously, but differ in execution timing.</p><ul><li><strong>async:</strong> download in parallel and execute as soon as ready, potentially blocking HTML parsing.</li><li><strong>defer:</strong> download in parallel but execute in order after HTML parsing completes, before DOMContentLoaded.</li></ul><p>Use <code>defer</code> for scripts that depend on the DOM or execution order; <code>async</code> for independent scripts like analytics.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "Browser",
        "Performance"
      ],
      "keyPoints": [
        "async executes as soon as the script is downloaded.",
        "defer executes after HTML parsing in source order.",
        "defer preserves DOM readiness and execution order."
      ]
    },
    {
      "question": "What are the differences between ES6 and ES5 in JavaScript?",
      "answer": "<p>ES6 (2015) introduced major additions over ES5:</p><ul><li><code>let</code>/<code>const</code>, block scoping, and the temporal dead zone.</li><li>Arrow functions, template literals, destructuring, and default parameters.</li><li>Classes, modules, promises, Map/Set, and symbols.</li><li>Generators, proxies, and spread/rest syntax.</li></ul><p>ES6 code usually requires transpilation (Babel) for older browsers.</p>",
      "difficulty": "Beginner",
      "tags": [
        "JavaScript",
        "ES6"
      ],
      "keyPoints": [
        "let and const provide block scoping.",
        "Arrow functions, classes, modules, and promises are major additions.",
        "ES6 often needs transpilation for older browsers."
      ]
    },
    {
      "question": "Write a generator function in JavaScript to print all prime numbers.",
      "answer": "<p>A generator function uses <code>function*</code> and <code>yield</code> to produce a sequence lazily.</p><pre><code class=\"language-javascript\">function* primes() {\n  yield 2;\n  const found = [2];\n  let n = 3;\n  while (true) {\n    if (found.every(p =&gt; n % p !== 0)) {\n      found.push(n);\n      yield n;\n    }\n    n += 2;\n  }\n}\n\nfor (const p of primes()) {\n  if (p &gt; 100) break;\n  console.log(p);\n}</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "JavaScript",
        "ES6",
        "Generators"
      ],
      "keyPoints": [
        "function* and yield produce lazy sequences.",
        "Generators maintain state across calls.",
        "Work naturally with for...of loops."
      ]
    }
  ]
};
