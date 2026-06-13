// Auto-generated real Python interview questions
// Generated: 2026-06-13T19:04:36.747038Z

export const pythonRealQuestions = {
  "questions": [
    {
      "question": "Explain Python multithreading and asynchronous programming concepts. How do they differ and when would you use each?",
      "answer": "<p>Multithreading runs multiple threads in one process and works well for <b>I/O-bound</b> work because threads release the GIL while waiting. <code>asyncio</code> uses a single-threaded event loop and coroutines with <code>await</code> for cooperative multitasking, giving lower overhead for huge numbers of concurrent I/O operations.</p>\n<table>\n<tr><th>Approach</th><th>Best for</th><th>Overhead</th></tr>\n<tr><td>Threading</td><td>Moderate I/O concurrency</td><td>One thread per task</td></tr>\n<tr><td>Asyncio</td><td>Thousands of I/O tasks</td><td>One coroutine object</td></tr>\n<tr><td>Multiprocessing</td><td>CPU-bound work</td><td>Separate process</td></tr>\n</table>\n<pre><code>import threading, asyncio\n\n# Threading\ndef fetch(url): ...\nthreads = [threading.Thread(target=fetch, args=(u,)) for u in urls]\nfor t in threads: t.start()\nfor t in threads: t.join()\n\n# Asyncio\nasync def fetch(url): ...\nresults = await asyncio.gather(*[fetch(u) for u in urls])\n</code></pre>\n<p><b>Rule of thumb:</b> I/O-bound → threads or asyncio; CPU-bound → multiprocessing.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Multithreading",
        "Asyncio",
        "Concurrency"
      ],
      "keyPoints": [
        "Multithreading suits I/O-bound tasks because the GIL is released during waits.",
        "asyncio uses cooperative multitasking with very low per-task overhead.",
        "CPU-bound work should use multiprocessing to bypass the GIL."
      ]
    },
    {
      "question": "Write a program to remove all adjacent duplicates in a string II (stack-based approach).",
      "answer": "<p>Use a stack where each element stores a character and its consecutive count. When the count reaches <code>k</code>, pop the stack.</p>\n<pre><code>def remove_adjacent_duplicates(s: str, k: int) -&gt; str:\n    stack = []  # each item: [char, count]\n    for ch in s:\n        if stack and stack[-1][0] == ch:\n            stack[-1][1] += 1\n            if stack[-1][1] == k:\n                stack.pop()\n        else:\n            stack.append([ch, 1])\n    return \"\".join(ch * cnt for ch, cnt in stack)\n\nprint(remove_adjacent_duplicates(\"deeedbbcccbdaa\", 3))\n# \"aa\"\n</code></pre>\n<p><b>Complexity:</b> O(n) time and O(n) space where n is the string length.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Stack",
        "Strings"
      ],
      "keyPoints": [
        "Store character and its running count on a stack.",
        "Pop the stack when the count equals k.",
        "The algorithm runs in O(n) time and space."
      ]
    },
    {
      "question": "Write a program to print a list of vowels present in a list of lists containing strings.",
      "answer": "<p>Flatten the nested lists and filter characters that are vowels. A set comprehension removes duplicates per word.</p>\n<pre><code>def extract_vowels(nested):\n    vowels = set(\"aeiouAEIOU\")\n    result = []\n    for group in nested:\n        for word in group:\n            found = {ch for ch in word if ch in vowels}\n            result.append(sorted(found))\n    return result\n\ndata = [[\"Hello\", \"World\"], [\"Python\"]]\nprint(extract_vowels(data))\n# [['e', 'o'], ['o'], ['o']]\n</code></pre>\n<p><b>Note:</b> Use a generator expression with <code>itertools.chain</code> for a memory-efficient flatten.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Lists",
        "Comprehensions"
      ],
      "keyPoints": [
        "Flatten nested lists before inspecting each string.",
        "Use a set to collect unique vowels from each word.",
        "itertools.chain is useful for large nested iterables."
      ]
    },
    {
      "question": "Write a program and calculate the time taken by the program to run. Optimize it for performance.",
      "answer": "<p>Use <code>time.perf_counter()</code> for wall-clock measurements, <code>time.process_time()</code> for CPU time, and profiling tools to find bottlenecks.</p>\n<pre><code>import time\n\nstart = time.perf_counter()\n# ... work ...\nresult = sum(range(1_000_000))\nelapsed = time.perf_counter() - start\nprint(f\"Elapsed: {elapsed:.4f}s\")\n\n# Profiling\nimport cProfile, pstats\ncProfile.run(\"sum(range(1_000_000))\", \"stats.prof\")\np = pstats.Stats(\"stats.prof\")\np.sort_stats(\"cumulative\").print_stats(10)\n</code></pre>\n<p><b>Optimization steps:</b> profile first, use better algorithms, leverage built-ins/C extensions (e.g., NumPy, <code>sum</code>), cache repeated work, and avoid premature optimization.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Performance",
        "Profiling"
      ],
      "keyPoints": [
        "Measure with time.perf_counter or time.process_time.",
        "Profile before optimizing with cProfile or line_profiler.",
        "Prefer built-ins, vectorized libraries, and caching for hot paths."
      ]
    },
    {
      "question": "Questions on Python dictionary operations and manipulation.",
      "answer": "<p>Python dictionaries provide O(1) average lookup, insertion, and deletion. Common operations include creation, access, iteration, merging, and comprehension.</p>\n<pre><code>d = {\"a\": 1, \"b\": 2}\n\n# Access and default\nprint(d.get(\"c\", 0))        # 0\n\n# Iteration\nfor k, v in d.items():\n    print(k, v)\n\n# Merge (Python 3.9+)\nd2 = d | {\"c\": 3}\n\n# Comprehension\nsquares = {x: x**2 for x in range(5)}\n\n# Remove\nval = d.pop(\"a\")            # 1\ndel d[\"b\"]\n\n# Setdefault for grouping\nfrom collections import defaultdict\nwords = [\"apple\", \"bat\", \"ant\"]\ngroups = defaultdict(list)\nfor w in words:\n    groups[w[0]].append(w)\n</code></pre>\n<p><b>Gotcha:</b> Iterating while modifying a dict requires creating a snapshot with <code>list(d.items())</code>.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Dicts"
      ],
      "keyPoints": [
        "Dict lookup, insertion, and deletion are O(1) on average.",
        "Use get for safe access and defaultdict for automatic defaults.",
        "Avoid mutating a dict while iterating over it directly."
      ]
    },
    {
      "question": "Explain Python memory management. How does reference counting and garbage collection work?",
      "answer": "<p>Python manages memory with two complementary mechanisms: <b>reference counting</b> and a <b>generational garbage collector</b>.</p>\n<ul>\n<li><b>Reference counting:</b> Every object stores a count of references. When it drops to zero, the object is deallocated immediately.</li>\n<li><b>Generational GC:</b> Detects reference cycles that reference counting cannot break. Objects are grouped into three generations; survivors are promoted to older generations that are scanned less often.</li>\n</ul>\n<pre><code>import sys, gc\n\na = []\nprint(sys.getrefcount(a))  # 2 (variable + getrefcount argument)\n\n# Cycle example\nclass Node:\n    pass\nn1 = Node(); n2 = Node()\nn1.ref = n2; n2.ref = n1\ndel n1, n2\ngc.collect()               # breaks cycle and frees memory\n</code></pre>\n<p><b>Tools:</b> <code>gc</code> module, <code>tracemalloc</code>, <code>objgraph</code>, and <code>pympler</code> for profiling.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Memory Management",
        "Garbage Collection"
      ],
      "keyPoints": [
        "Reference counting frees objects immediately when their count hits zero.",
        "The generational garbage collector breaks reference cycles.",
        "Use tracemalloc, gc, and objgraph to diagnose memory issues."
      ]
    },
    {
      "question": "Explain Python decorators with examples. What are the different types of decorators?",
      "answer": "<p>A decorator is a callable that wraps another function to extend its behavior without permanently modifying it.</p>\n<ul>\n<li><b>Function decorators</b> wrap functions/methods.</li>\n<li><b>Class decorators</b> wrap classes.</li>\n<li><b>Decorators with arguments</b> are decorator factories returning the actual decorator.</li>\n<li><b>Method decorators</b>: <code>@staticmethod</code>, <code>@classmethod</code>, <code>@property</code>.</li>\n</ul>\n<pre><code>import functools, time\n\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        t0 = time.perf_counter()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__}: {time.perf_counter() - t0:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow():\n    time.sleep(0.1)\n</code></pre>\n<p><b>Tip:</b> Always use <code>@functools.wraps</code> to preserve metadata.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Decorators",
        "Functions"
      ],
      "keyPoints": [
        "Decorators wrap callables to add behavior without changing their source.",
        "Common types include function, class, parameterized, and method decorators.",
        "Use functools.wraps to keep the original function's name and docstring."
      ]
    },
    {
      "question": "Explain the difference between readline() and readlines() methods in Python file handling.",
      "answer": "<p>Both read from a file object, but their behavior differs in memory usage and return type.</p>\n<table>\n<tr><th>Method</th><th>Returns</th><th>Memory</th></tr>\n<tr><td><code>readline()</code></td><td>One line as a string</td><td>O(1) per call</td></tr>\n<tr><td><code>readlines()</code></td><td>List of all lines</td><td>O(n) for whole file</td></tr>\n</table>\n<pre><code># Lazy line-by-line\nwith open(\"data.txt\") as f:\n    while line := f.readline():\n        process(line)\n\n# All lines in memory\nwith open(\"data.txt\") as f:\n    lines = f.readlines()\n\n# Most Pythonic iterator\nwith open(\"data.txt\") as f:\n    for line in f:\n        process(line)\n</code></pre>\n<p><b>Best practice:</b> Iterate over the file object directly for large files to stream data.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "File I/O"
      ],
      "keyPoints": [
        "readline returns one line at a time with low memory use.",
        "readlines loads the entire file into a list.",
        "Iterate over the file object directly for memory-efficient streaming."
      ]
    },
    {
      "question": "How would you prevent SQL injection in Python database operations?",
      "answer": "<p>Always use <b>parameterized queries</b> so user input is treated as data, never as SQL code. Never build queries with f-strings or string concatenation.</p>\n<pre><code>import sqlite3\n\nconn = sqlite3.connect(\"app.db\")\ncursor = conn.cursor()\n\n# Safe: parameterized query\ncursor.execute(\"SELECT * FROM users WHERE email = ?\", (email,))\n\n# Unsafe: string formatting\n# cursor.execute(f\"SELECT * FROM users WHERE email = '{email}'\")\n\n# Many DB-API drivers support named placeholders\ncursor.execute(\n    \"INSERT INTO users (name, email) VALUES (:name, :email)\",\n    {\"name\": name, \"email\": email}\n)\n</code></pre>\n<p><b>Extra defenses:</b> input validation, least-privilege DB users, ORMs (SQLAlchemy, Django ORM), and allow-listing.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "SQL",
        "Security"
      ],
      "keyPoints": [
        "Use parameterized queries for all user-supplied values.",
        "Never concatenate user input into SQL strings.",
        "Validate input and use ORMs or allow-lists as extra layers."
      ]
    },
    {
      "question": "Get the nth key from a dictionary without using Python built-in data structures.",
      "answer": "<p>Dictionaries preserve insertion order (Python 3.7+). To find the nth key without built-in helpers like <code>list()</code>, iterate manually.</p>\n<pre><code>def nth_key(d, n):\n    if n &lt; 0:\n        return None\n    i = 0\n    for key in d:\n        if i == n:\n            return key\n        i += 1\n    return None\n\nscores = {\"a\": 10, \"b\": 20, \"c\": 30}\nprint(nth_key(scores, 1))  # \"b\"\n</code></pre>\n<p><b>Complexity:</b> O(n) time and O(1) extra space.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Dicts"
      ],
      "keyPoints": [
        "Dictionaries maintain insertion order in Python 3.7+.",
        "Iterate keys manually to reach the nth one.",
        "The approach uses O(n) time and O(1) extra space."
      ]
    },
    {
      "question": "Write 5 Python coding questions involving dictionary manipulation, string processing, and data structure operations.",
      "answer": "<p>Here are five representative coding problems with concise solutions.</p>\n<pre><code># 1. Count word frequencies\nfrom collections import Counter\nfreq = Counter(text.split())\n\n# 2. Group anagrams\nfrom collections import defaultdict\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for w in words:\n        groups[tuple(sorted(w))].append(w)\n    return list(groups.values())\n\n# 3. First unique character\ndef first_unique(s):\n    counts = Counter(s)\n    return next((ch for ch in s if counts[ch] == 1), None)\n\n# 4. Reverse words in a string\ndef reverse_words(s):\n    return \" \".join(s.split()[::-1])\n\n# 5. Merge two dicts and sum shared keys\nfrom collections import Counter\nmerged = Counter(a) + Counter(b)\n</code></pre>\n<p><b>Skills tested:</b> dict usage, string methods, iteration, and the standard library.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Coding"
      ],
      "keyPoints": [
        "Counter and defaultdict simplify common dict-based problems.",
        "String splitting, sorting, and joining are frequent string tools.",
        "Merging dicts can use Counter arithmetic for numeric values."
      ]
    },
    {
      "question": "Python language-specific questions based on the language you code in (data structures, list/dict operations, etc.).",
      "answer": "<p>Interviewers commonly ask about Python's core data structures and operations.</p>\n<ul>\n<li><b>Lists:</b> ordered, mutable; support indexing, slicing, comprehension.</li>\n<li><b>Tuples:</b> ordered, immutable; hashable if contents are hashable.</li>\n<li><b>Sets:</b> unordered collection of unique items; O(1) membership.</li>\n<li><b>Dictionaries:</b> key-value mappings with O(1) average operations.</li>\n</ul>\n<pre><code># Common operations\nnums = [1, 2, 3]\nnums.append(4)\nnums[1:3]            # [2, 3]\n\npoint = (1, 2)\nx, y = point         # unpacking\n\nunique = set([1, 2, 2, 3])\n\nperson = {\"name\": \"Ada\", \"age\": 30}\nperson.get(\"city\", \"Unknown\")\n</code></pre>\n<p><b>Interview tip:</b> Know mutability, hashability, time complexity, and list/dict comprehension syntax.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Data Types"
      ],
      "keyPoints": [
        "Lists are mutable and ordered; tuples are immutable and hashable.",
        "Sets and dicts provide O(1) average lookup.",
        "Comprehensions and unpacking are idiomatic Python tools."
      ]
    },
    {
      "question": "Write a SQL query using Python's DB-API. Difference between RANK() and DENSE_RANK()?",
      "answer": "<p>Python's DB-API (PEP 249) defines a common interface for database drivers. Use parameterized queries through <code>cursor.execute()</code>.</p>\n<pre><code>import sqlite3\n\nconn = sqlite3.connect(\"hr.db\")\ncur = conn.cursor()\ncur.execute('''\n    SELECT department_id, name, salary,\n           RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk,\n           DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rnk\n    FROM employees\n''')\nfor row in cur.fetchall():\n    print(row)\n</code></pre>\n<table>\n<tr><th>Function</th><th>Behavior on ties</th></tr>\n<tr><td><code>RANK()</code></td><td>Skips next ranks after a tie (1, 1, 3)</td></tr>\n<tr><td><code>DENSE_RANK()</code></td><td>No gaps after a tie (1, 1, 2)</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "SQL",
        "DB-API"
      ],
      "keyPoints": [
        "DB-API provides a standard cursor.execute interface across drivers.",
        "RANK leaves gaps after tied rows.",
        "DENSE_RANK assigns consecutive ranks after ties."
      ]
    },
    {
      "question": "Explain the concept of monkey patching with the help of an example. When would you use it?",
      "answer": "<p>Monkey patching modifies a class or module at runtime without changing its source. It is useful for testing, hotfixes, or extending third-party code, but should be used sparingly.</p>\n<pre><code>import time\n\n# Original behavior\nclass PaymentGateway:\n    def charge(self, amount):\n        return {\"status\": \"success\", \"amount\": amount}\n\n# Monkey patch for tests\nPaymentGateway.charge = lambda self, amount: {\"status\": \"mocked\"}\n\n# Patch a built-in module\noriginal_sleep = time.sleep\ntime.sleep = lambda seconds: print(f\"skipping {seconds}s sleep\")\ntime.sleep(2)\ntime.sleep = original_sleep\n</code></pre>\n<p><b>Risks:</b> fragile, hard to debug, can surprise other code. Prefer dependency injection or decorators in production.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Monkey Patching",
        "Testing"
      ],
      "keyPoints": [
        "Monkey patching changes runtime behavior without source edits.",
        "Common uses include mocking in tests and emergency hotfixes.",
        "Prefer dependency injection or decorators for maintainable code."
      ]
    },
    {
      "question": "Write a function for binary tree traversal. Optimize median-finding for large lists.",
      "answer": "<p>For tree traversal, use recursion or an explicit stack/queue. For median-finding on a stream or large list, use two heaps.</p>\n<pre><code>class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorder(root):\n    return inorder(root.left) + [root.val] + inorder(root.right) if root else []\n\n# Median with two heaps\nimport heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = []  # max heap (negated values)\n        self.large = []  # min heap\n\n    def add_num(self, num):\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) &gt; len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n\n    def find_median(self):\n        if len(self.small) &gt; len(self.large):\n            return -self.small[0]\n        return (-self.small[0] + self.large[0]) / 2\n</code></pre>\n<p><b>Complexity:</b> Traversal O(n); median insertion O(log n), query O(1).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Trees",
        "Heaps"
      ],
      "keyPoints": [
        "Use recursion or an explicit stack for tree traversal.",
        "Maintain two heaps for running median in O(log n) per insert.",
        "For static data, sorting and indexing can be simpler."
      ]
    },
    {
      "question": "Python basics questions covering data types, mutability, and common pitfalls.",
      "answer": "<p>Core basics include mutable vs immutable types, identity vs equality, and mutable default arguments.</p>\n<table>\n<tr><th>Mutable</th><th>Immutable</th></tr>\n<tr><td>list, dict, set, bytearray</td><td>int, float, str, tuple, frozenset</td></tr>\n</table>\n<pre><code># Mutable default argument pitfall\ndef append_bad(item, target=[]):  # same list reused!\n    target.append(item)\n    return target\n\ndef append_good(item, target=None):\n    if target is None:\n        target = []\n    target.append(item)\n    return target\n\n# Identity vs equality\na = [1, 2]; b = [1, 2]\nprint(a == b)  # True\nprint(a is b)  # False\n</code></pre>\n<p><b>Remember:</b> immutable objects are hashable; mutable objects can be keys only if wrapped in immutable containers.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Mutable",
        "Immutable"
      ],
      "keyPoints": [
        "Lists and dicts are mutable; strings and tuples are immutable.",
        "Use None as the default for mutable function arguments.",
        "== compares values; is compares object identity."
      ]
    },
    {
      "question": "Python and SQL coding challenge on CoderPad - basic data structures, algorithms, and CS fundamentals.",
      "answer": "<p>CoderPad interviews often combine Python data-structure manipulation with a SQL query. Be ready to write clean functions and SELECT statements.</p>\n<pre><code># Python: two-sum using a hash map\ndef two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        complement = target - n\n        if complement in seen:\n            return [seen[complement], i]\n        seen[n] = i\n    return []\n\n# SQL: employees earning above department average\n'''\nSELECT e.name, e.salary, e.department_id\nFROM employees e\nJOIN (\n    SELECT department_id, AVG(salary) AS avg_sal\n    FROM employees\n    GROUP BY department_id\n) d ON e.department_id = d.department_id\nWHERE e.salary &gt; d.avg_sal;\n'''\n</code></pre>\n<p><b>Practice areas:</b> arrays/hash maps, strings, JOINs, GROUP BY, window functions.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "SQL",
        "Algorithms"
      ],
      "keyPoints": [
        "Combine Python data structures with SQL queries cleanly.",
        "Hash maps often reduce nested-loop solutions to O(n).",
        "Know JOINs, aggregation, and subqueries for SQL portions."
      ]
    },
    {
      "question": "Given a dataset, write Python code to process and analyze it using pandas operations.",
      "answer": "<p>Use pandas for loading, cleaning, aggregating, and summarizing tabular data.</p>\n<pre><code>import pandas as pd\n\ndf = pd.read_csv(\"sales.csv\")\n\n# Inspect\nprint(df.head(), df.info(), df.describe())\n\n# Filter and group\nhigh_value = df[df[\"amount\"] &gt; 100]\nmonthly = df.groupby(df[\"date\"].dt.to_period(\"M\")).agg({\n    \"amount\": \"sum\",\n    \"quantity\": \"mean\"\n}).reset_index()\n\n# Handle missing values\ndf[\"amount\"] = df[\"amount\"].fillna(df[\"amount\"].median())\ndf[\"category\"] = df[\"category\"].fillna(\"Unknown\")\n\n# Add derived column\ndf[\"discount_rate\"] = df[\"discount\"] / df[\"amount\"]\n</code></pre>\n<p><b>Tip:</b> Vectorized pandas operations are much faster than Python loops.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Pandas"
      ],
      "keyPoints": [
        "Use pandas for loading, filtering, grouping, and aggregating data.",
        "Vectorized operations avoid slow Python loops.",
        "Handle missing values differently for numeric and categorical columns."
      ]
    },
    {
      "question": "Questions around async, Celery, multiprocessing, multithreading, and GIL in Python.",
      "answer": "<p>Each concurrency model solves a different bottleneck.</p>\n<ul>\n<li><b>GIL</b>: only one thread executes Python bytecode at a time, so threads do not parallelize CPU-bound pure-Python work.</li>\n<li><b>Multithreading</b>: good for I/O-bound tasks that wait on network/disk.</li>\n<li><b>Multiprocessing</b>: bypasses the GIL with separate processes for CPU-bound work.</li>\n<li><b>Asyncio</b>: single-threaded cooperative I/O, best for many lightweight connections.</li>\n<li><b>Celery</b>: distributed task queue for background/offload work.</li>\n</ul>\n<pre><code># Celery task example\nfrom celery import Celery\napp = Celery(\"tasks\", broker=\"redis://localhost:6379/0\")\n\n@app.task\ndef send_email(user_id):\n    ...\n\nsend_email.delay(user_id)\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Multithreading",
        "Asyncio",
        "Celery",
        "GIL"
      ],
      "keyPoints": [
        "The GIL prevents parallel CPU execution of pure Python bytecode.",
        "Use threads for I/O, processes for CPU, and asyncio for massive I/O concurrency.",
        "Celery offloads background work to distributed workers."
      ]
    },
    {
      "question": "Write a binary tree program in Python. Explain what are decorators, and the difference between generators and iterators.",
      "answer": "<p>A binary tree can be implemented with a simple node class. Decorators wrap functions. Iterators implement <code>__iter__</code>/<code>__next__</code>; generators are a concise way to create iterators with <code>yield</code>.</p>\n<pre><code>class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n# Decorator\ndef log(func):\n    def wrapper(*args, **kwargs):\n        print(f\"calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n# Generator (lazy iterator)\ndef inorder(node):\n    if node:\n        yield from inorder(node.left)\n        yield node.val\n        yield from inorder(node.right)\n\nroot = TreeNode(2, TreeNode(1), TreeNode(3))\nprint(list(inorder(root)))  # [1, 2, 3]\n</code></pre>\n<p><b>Key distinction:</b> every generator is an iterator, but not every iterator is a generator.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "OOP",
        "Trees",
        "Decorators",
        "Generators"
      ],
      "keyPoints": [
        "A binary tree node class holds a value and left/right children.",
        "Decorators wrap functions to add cross-cutting behavior.",
        "Generators use yield and are a subtype of iterator."
      ]
    },
    {
      "question": "How can you store real-time scores generated during a game session? How will the leaderboard be updated?",
      "answer": "<p>Use a fast in-memory store for hot writes and sorted sets for leaderboards; persist periodically to a database.</p>\n<pre><code># Redis sorted set example\nimport redis\nr = redis.Redis()\n\nr.zincrby(\"leaderboard\", 10, \"player_42\")   # add 10 points\nr.zadd(\"leaderboard\", {\"player_7\": 150})    # set score\n\n# Top 10\ntop = r.zrevrange(\"leaderboard\", 0, 9, withscores=True)\n</code></pre>\n<p><b>Architecture:</b> game clients → API → Redis sorted set (real-time) → scheduled job → PostgreSQL/MySQL (long-term). WebSocket or SSE pushes updates to clients.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Redis",
        "System Design"
      ],
      "keyPoints": [
        "Use Redis sorted sets for O(log n) score updates and rank queries.",
        "Persist scores to a durable database asynchronously.",
        "Push leaderboard updates via WebSocket or SSE."
      ]
    },
    {
      "question": "How would you write a program to move inside a square spiral? Start at the upper left corner and walk its edges clockwise.",
      "answer": "<p>Track a position and a direction that rotates clockwise: right, down, left, up. Reduce the side length after completing two edges.</p>\n<pre><code>def square_spiral(n):\n    x, y = 0, 0\n    dx, dy = 1, 0\n    steps = 1\n    count = 0\n    while count &lt; n:\n        for _ in range(2):\n            for _ in range(steps):\n                if count &gt;= n:\n                    return\n                print((x, y))\n                x += dx\n                y += dy\n                count += 1\n            dx, dy = -dy, dx  # rotate clockwise\n        steps += 1\n\nsquare_spiral(9)\n</code></pre>\n<p><b>Pattern:</b> two edges of length 1, then two of length 2, then two of length 3, etc.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Algorithms"
      ],
      "keyPoints": [
        "Use a direction vector that rotates clockwise.",
        "Increase the step length after every two edges.",
        "Track coordinates and print or yield each position."
      ]
    },
    {
      "question": "How to remove duplicated items in a list? What's the time complexity of your algorithm?",
      "answer": "<p>Preserving order, the fastest general way is to use a dict or set to track seen items. A plain set deduplicates but loses order.</p>\n<pre><code>def dedupe_ordered(items):\n    seen = set()\n    result = []\n    for x in items:\n        if x not in seen:\n            seen.add(x)\n            result.append(x)\n    return result\n\n# Python 3.7+\ndef dedupe_fast(items):\n    return list(dict.fromkeys(items))\n\n# Unordered dedupe\nprint(list(set([1, 2, 2, 3, 1])))\n</code></pre>\n<p><b>Complexity:</b> O(n) average time and O(n) space because hashable item lookups are O(1).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Lists"
      ],
      "keyPoints": [
        "Use a set to track seen items for O(1) lookups.",
        "dict.fromkeys preserves insertion order in Python 3.7+.",
        "Time complexity is O(n) average with O(n) extra space."
      ]
    },
    {
      "question": "What are use of Django Rest Framework? Why don't we just use Django to create REST APIs?",
      "answer": "<p>Django REST Framework (DRF) is a toolkit for building Web APIs on top of Django. It provides serializers, viewsets, authentication, pagination, and browsable API out of the box.</p>\n<table>\n<tr><th>Feature</th><th>Plain Django</th><th>DRF</th></tr>\n<tr><td>Serialization</td><td>Manual JSON</td><td>ModelSerializer</td></tr>\n<tr><td>Authentication</td><td>Manual</td><td>Built-in classes</td></tr>\n<tr><td>Pagination</td><td>Manual</td><td>Built-in</td></tr>\n<tr><td>Browsable API</td><td>No</td><td>Yes</td></tr>\n</table>\n<p><b>When to skip DRF:</b> very simple endpoints where manual <code>JsonResponse</code> is enough.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "DRF",
        "REST API"
      ],
      "keyPoints": [
        "DRF provides serializers, authentication, pagination, and browsable APIs.",
        "Plain Django requires writing JSON serialization manually.",
        "Use DRF for non-trivial APIs; use plain Django only for very simple endpoints."
      ]
    },
    {
      "question": "Explain the difference between deepcopy and shallow copy in Python with examples.",
      "answer": "<p>A shallow copy creates a new container but shares nested objects. A deep copy recursively copies everything, so the original and copy are fully independent.</p>\n<pre><code>import copy\n\noriginal = [[\"a\", \"b\"], [\"c\", \"d\"]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\nshallow[0].append(\"Z\")\nprint(original)  # [[\"a\", \"b\", \"Z\"], [\"c\", \"d\"]]  # mutated!\nprint(deep)      # [[\"a\", \"b\"], [\"c\", \"d\"]]      # untouched\n\n# Slicing is also shallow\nmatrix = [[1, 2], [3, 4]]\nclone = matrix[:]\nclone[0][0] = 99\nprint(matrix)    # [[99, 2], [3, 4]]\n</code></pre>\n<p><b>Use shallow copy</b> for flat structures; <b>use deepcopy</b> when nested objects will be mutated.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Copying",
        "Memory Management"
      ],
      "keyPoints": [
        "Shallow copy shares nested objects with the original.",
        "Deep copy recursively duplicates all nested objects.",
        "Slicing and dict.copy are shallow copies."
      ]
    },
    {
      "question": "What are Python decorators and how do they work? Write a timing decorator example.",
      "answer": "<p>A decorator is a function that takes another function, wraps it, and returns the wrapped function. The <code>@</code> syntax is syntactic sugar for <code>func = decorator(func)</code>.</p>\n<pre><code>import functools\nimport time\n\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f\"{func.__name__} took {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_add(a, b):\n    time.sleep(0.1)\n    return a + b\n\nslow_add(2, 3)\n</code></pre>\n<p><b>Decorator with arguments</b> needs a factory that returns the actual decorator.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Decorators",
        "Functions"
      ],
      "keyPoints": [
        "A decorator wraps a function and returns a new callable.",
        "Use @ syntax as shorthand for assigning the wrapped function.",
        "Always apply functools.wraps to preserve metadata."
      ]
    },
    {
      "question": "Describe how list comprehensions work in Python. When should you use them vs regular loops?",
      "answer": "<p>List comprehensions provide a concise, expression-based way to create lists: <code>[expr for item in iterable if condition]</code>. They are faster than equivalent for-loops because the iteration runs in C.</p>\n<pre><code># List comprehension\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n\n# Equivalent loop\nsquares = []\nfor x in range(10):\n    if x % 2 == 0:\n        squares.append(x**2)\n\n# Dict/set comprehensions\nword_lengths = {w: len(w) for w in words}\nunique = {x for x in items}\n</code></pre>\n<p><b>Prefer a regular loop</b> when the logic is complex, has side effects, or needs nested error handling.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Lists",
        "Comprehensions"
      ],
      "keyPoints": [
        "List comprehensions are concise and faster than manual loops.",
        "They support filtering with an optional if clause.",
        "Use regular loops for complex logic or side effects."
      ]
    },
    {
      "question": "What is the Global Interpreter Lock (GIL) in Python and why does it matter?",
      "answer": "<p>The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. It matters because it prevents true parallel execution of CPU-bound pure-Python code.</p>\n<ul>\n<li><b>Why it exists:</b> simplifies memory management, especially reference counting, and makes C extensions safer.</li>\n<li><b>Impact:</b> threads help I/O-bound work but do not speed up CPU-bound pure Python.</li>\n</ul>\n<pre><code>import multiprocessing as mp\n\n# Bypass GIL for CPU-bound work\nwith mp.Pool(4) as pool:\n    results = pool.map(cpu_intensive, tasks)\n\n# For I/O, asyncio or threading works\n</code></pre>\n<p><b>Workarounds:</b> multiprocessing, C extensions that release the GIL, NumPy, and (experimental) Python 3.13 free-threaded builds.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Multithreading",
        "GIL",
        "Concurrency"
      ],
      "keyPoints": [
        "The GIL allows only one thread to run Python bytecode at a time.",
        "It does not hurt I/O-bound threading but limits CPU-bound parallelism.",
        "Use multiprocessing or C extensions to bypass the GIL."
      ]
    },
    {
      "question": "How would you debug a memory leak in a Python application? Name specific tools.",
      "answer": "<p>Memory leaks usually come from reference cycles, caches that grow unbounded, or objects held longer than expected.</p>\n<ol>\n<li>Confirm growth with <code>tracemalloc</code> to track allocations over time.</li>\n<li>Find cycles with <code>gc.get_objects()</code> and <code>objgraph</code>.</li>\n<li>Profile with <code>pympler</code> or <code>memory_profiler</code>.</li>\n</ol>\n<pre><code>import tracemalloc\ntracemalloc.start()\n# ... run suspected code ...\nsnapshot1 = tracemalloc.take_snapshot()\n# ... run more ...\nsnapshot2 = tracemalloc.take_snapshot()\ntop = snapshot2.compare_to(snapshot1, \"lineno\")\nfor stat in top[:10]:\n    print(stat)\n</code></pre>\n<p><b>Common fixes:</b> use weak references, clear caches, fix cycles, and close resources.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Memory Management",
        "Debugging"
      ],
      "keyPoints": [
        "Use tracemalloc to compare snapshots and find growing allocations.",
        "objgraph and gc help identify reference cycles.",
        "Fix leaks with weak references, cache limits, and explicit cleanup."
      ]
    },
    {
      "question": "Explain the difference between __str__ and __repr__ methods in Python.",
      "answer": "<p><code>__repr__</code> is for developers and should be unambiguous, ideally a valid Python expression. <code>__str__</code> is for users and should be readable.</p>\n<pre><code>class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __repr__(self):\n        return f\"Point({self.x!r}, {self.y!r})\"\n\n    def __str__(self):\n        return f\"({self.x}, {self.y})\"\n\np = Point(3, 4)\nprint(str(p))   # (3, 4)\nprint(repr(p))  # Point(3, 4)\n</code></pre>\n<p><b>Best practice:</b> always implement <code>__repr__</code>; add <code>__str__</code> only when a prettier display is needed.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "OOP",
        "Dunder Methods"
      ],
      "keyPoints": [
        "__repr__ targets developers and should be unambiguous.",
        "__str__ targets users and should be readable.",
        "Implement __repr__ first; __str__ falls back to it if missing."
      ]
    },
    {
      "question": "What are generators in Python and why are they useful? How do they differ from regular functions?",
      "answer": "<p>Generators are iterators defined with a function containing <code>yield</code>. They produce values lazily, pausing between each yield instead of computing everything at once.</p>\n<pre><code>def countdown(n):\n    while n &gt; 0:\n        yield n\n        n -= 1\n\nfor x in countdown(5):\n    print(x)\n\n# Generator expression\nsquares = (x**2 for x in range(10**6))\nprint(sum(squares))  # streams values, no full list\n</code></pre>\n<p><b>Benefits:</b> memory efficiency (one item at a time), ability to model infinite sequences, and cleaner code for streaming pipelines.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Generators",
        "Iterators",
        "Memory Management"
      ],
      "keyPoints": [
        "Generators use yield to produce values lazily.",
        "They consume O(1) memory instead of building full collections.",
        "Generator expressions mirror list comprehensions but are lazy."
      ]
    },
    {
      "question": "What are closures in Python? Provide a practical example.",
      "answer": "<p>A closure is a function that remembers variables from its enclosing scope even after that scope has finished executing.</p>\n<pre><code>def make_multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(5))  # 10\nprint(triple(5))  # 15\n\n# Mutable state with nonlocal\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\n\nc = make_counter()\nprint(c(), c())  # 1, 2\n</code></pre>\n<p><b>Use cases:</b> function factories, callbacks with state, and decorators.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Closures",
        "Functions"
      ],
      "keyPoints": [
        "A closure captures variables from its enclosing scope.",
        "Use nonlocal to modify enclosing mutable state.",
        "Closures are common in decorators and callbacks."
      ]
    },
    {
      "question": "What is monkey patching in Python? Is it ever a good idea?",
      "answer": "<p>Monkey patching changes a module or class at runtime. It is sometimes useful for tests or emergency fixes but is risky in production.</p>\n<pre><code>import time\noriginal = time.sleep\ntime.sleep = lambda s: print(f\"skipped {s}s\")\n# ... tests ...\ntime.sleep = original\n</code></pre>\n<p><b>Risks:</b> hard to trace, fragile to upstream changes, thread-safety issues, and surprising side effects.</p>\n<p><b>Better alternatives:</b> dependency injection, mocking libraries (unittest.mock), decorators, and subclassing.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Monkey Patching",
        "Testing"
      ],
      "keyPoints": [
        "Monkey patching modifies runtime behavior without source changes.",
        "Acceptable for isolated tests but risky in production.",
        "Prefer dependency injection, mocks, or decorators."
      ]
    },
    {
      "question": "What are metaclasses in Python and when would you use them?",
      "answer": "<p>A metaclass is a class whose instances are classes. The default metaclass is <code>type</code>. Metaclasses control class creation before instances are created.</p>\n<pre><code>class PluginMeta(type):\n    registry = {}\n    def __new__(mcs, name, bases, namespace):\n        cls = super().__new__(mcs, name, bases, namespace)\n        if name != \"BasePlugin\":\n            mcs.registry[name] = cls\n        return cls\n\nclass BasePlugin(metaclass=PluginMeta):\n    pass\n\nclass EmailPlugin(BasePlugin):\n    pass\n\nprint(PluginMeta.registry)\n</code></pre>\n<p><b>Use cases:</b> auto-registration, enforcing interfaces, and injecting class-level behavior. Prefer class decorators when simpler.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "OOP",
        "Metaclasses",
        "Advanced Python"
      ],
      "keyPoints": [
        "A metaclass creates classes; type is the default metaclass.",
        "They run during class definition, not instance creation.",
        "Use them for auto-registration or class validation; prefer class decorators if simpler."
      ]
    },
    {
      "question": "Explain Python's Method Resolution Order (MRO). How does C3 linearization work?",
      "answer": "<p>MRO defines the order Python searches for attributes in a class hierarchy. C3 linearization guarantees children precede parents, left-to-right ordering of bases is preserved, and no class appears twice.</p>\n<pre><code>class A:\n    def method(self): print(\"A\")\nclass B(A):\n    def method(self): print(\"B\")\nclass C(A):\n    def method(self): print(\"C\")\nclass D(B, C):\n    pass\n\nprint(D.__mro__)  # D, B, C, A, object\nD().method()      # B\n</code></pre>\n<p><b>Diamond problem:</b> <code>super()</code> follows MRO so each ancestor method is called exactly once.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "OOP",
        "MRO",
        "Inheritance"
      ],
      "keyPoints": [
        "MRO is the linear order used to resolve methods.",
        "C3 keeps children before parents and respects base-class order.",
        "super follows MRO, solving the diamond problem."
      ]
    },
    {
      "question": "What are Python descriptors (__get__, __set__, __delete__)? How do they differ from decorators?",
      "answer": "<p>Descriptors are objects implementing <code>__get__</code>, <code>__set__</code>, or <code>__delete__</code> and control attribute access on classes. <code>property</code>, <code>classmethod</code>, and <code>staticmethod</code> are built-in descriptors.</p>\n<pre><code>class UpperCase:\n    def __set_name__(self, owner, name):\n        self.name = name\n\n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        return obj.__dict__.get(self.name)\n\n    def __set__(self, obj, value):\n        obj.__dict__[self.name] = value.upper()\n\nclass Person:\n    first_name = UpperCase()\n\np = Person()\np.first_name = \"ada\"\nprint(p.first_name)  # ADA\n</code></pre>\n<p><b>Descriptors vs decorators:</b> descriptors manage attribute access; decorators wrap callables.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "OOP",
        "Descriptors",
        "Advanced Python"
      ],
      "keyPoints": [
        "Descriptors define __get__, __set__, and/or __delete__.",
        "property, classmethod, and staticmethod are descriptors.",
        "Descriptors manage attribute access; decorators wrap functions."
      ]
    },
    {
      "question": "What is the purpose of __slots__ in Python? When should you use it?",
      "answer": "<p><code>__slots__</code> declares fixed instance attributes, replacing the per-instance <code>__dict__</code>. It reduces memory use and speeds up attribute access.</p>\n<pre><code>class Point:\n    __slots__ = (\"x\", \"y\")\n\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(1, 2)\n# p.z = 3  # AttributeError\n</code></pre>\n<p><b>When to use:</b> classes with many instances and a fixed set of attributes. <b>Downsides:</b> cannot add new attributes dynamically and multiple inheritance becomes restrictive.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Memory Management",
        "OOP",
        "Performance"
      ],
      "keyPoints": [
        "__slots__ removes per-instance __dict__ to save memory.",
        "It speeds up attribute access on instances.",
        "Only use when attributes are fixed and there are many instances."
      ]
    },
    {
      "question": "What is the difference between @staticmethod and @classmethod? When would you use each?",
      "answer": "<p><code>@staticmethod</code> defines a method that does not receive an implicit class or instance argument. <code>@classmethod</code> receives the class as the first argument, conventionally named <code>cls</code>.</p>\n<pre><code>class User:\n    def __init__(self, name):\n        self.name = name\n\n    @staticmethod\n    def is_valid_name(name):\n        return bool(name) and len(name) &lt;= 50\n\n    @classmethod\n    def from_dict(cls, data):\n        return cls(data[\"name\"])\n\nprint(User.is_valid_name(\"Ada\"))\nu = User.from_dict({\"name\": \"Grace\"})\n</code></pre>\n<p><b>Use staticmethod</b> for utility functions related to the class. <b>Use classmethod</b> for alternative constructors or logic that subclasses may override.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "OOP",
        "Methods"
      ],
      "keyPoints": [
        "staticmethod receives no implicit instance or class argument.",
        "classmethod receives the class as cls.",
        "Use classmethod for alternative constructors and staticmethod for related utilities."
      ]
    },
    {
      "question": "How does Python manage memory? Explain reference counting and garbage collection.",
      "answer": "<p>Python uses reference counting as the primary mechanism and a generational garbage collector for cycles.</p>\n<ul>\n<li><b>Reference counting:</b> each object stores a count; when zero, memory is reclaimed.</li>\n<li><b>Generational GC:</b> objects are grouped by age; young objects are checked frequently, old ones rarely.</li>\n</ul>\n<pre><code>import sys, gc\n\na = []\nprint(sys.getrefcount(a))  # 2\n\n# Reference cycle\nclass Node: pass\nn1 = Node(); n2 = Node()\nn1.ref = n2; n2.ref = n1\ndel n1, n2\ngc.collect()\n</code></pre>\n<p><b>Tools:</b> <code>gc</code>, <code>tracemalloc</code>, <code>objgraph</code>, <code>pympler</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Memory Management",
        "Garbage Collection"
      ],
      "keyPoints": [
        "Reference counting reclaims memory when an object's count hits zero.",
        "The generational GC handles reference cycles.",
        "Use tracemalloc and objgraph to investigate memory issues."
      ]
    },
    {
      "question": "Explain the concept of context managers and the with statement in Python. How would you implement a custom context manager?",
      "answer": "<p>Context managers ensure setup and cleanup around a block of code. They implement <code>__enter__</code> and <code>__exit__</code>, or use <code>contextlib.contextmanager</code>.</p>\n<pre><code>class ManagedFile:\n    def __init__(self, path, mode):\n        self.path = path\n        self.mode = mode\n\n    def __enter__(self):\n        self.file = open(self.path, self.mode)\n        return self.file\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()\n        return False  # do not suppress exceptions\n\nwith ManagedFile(\"out.txt\", \"w\") as f:\n    f.write(\"hello\")\n\n# Function-based\nfrom contextlib import contextmanager\n\n@contextmanager\ndef managed(path):\n    f = open(path, \"w\")\n    try:\n        yield f\n    finally:\n        f.close()\n</code></pre>\n<p><b>Use cases:</b> files, locks, transactions, timers, and temporary resources.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Context Managers"
      ],
      "keyPoints": [
        "Context managers implement __enter__ and __exit__.",
        "contextlib.contextmanager provides a simpler function-based syntax.",
        "Use them for reliable resource cleanup and transactions."
      ]
    },
    {
      "question": "What is the difference between a function and a coroutine in Python? How does async/await work?",
      "answer": "<p>A function runs to completion when called. A coroutine defined with <code>async def</code> returns a coroutine object that must be awaited; it yields control at <code>await</code> points instead of blocking.</p>\n<pre><code>import asyncio\n\nasync def fetch(url):\n    await asyncio.sleep(0.1)  # yield control, non-blocking\n    return f\"data from {url}\"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch(\"a.com\"), fetch(\"b.com\"), fetch(\"c.com\")\n    )\n    print(results)\n\nasyncio.run(main())\n</code></pre>\n<p><b>Key point:</b> coroutines run on a single event loop. Never call a blocking function like <code>time.sleep()</code> inside an async function without an executor.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Multithreading",
        "Asyncio",
        "Coroutines"
      ],
      "keyPoints": [
        "async def returns a coroutine object, not a result.",
        "await yields control back to the event loop without blocking the thread.",
        "Use asyncio.run to drive the event loop from synchronous code."
      ]
    },
    {
      "question": "When should one not use threads in Python (GIL issue)? What are the alternatives?",
      "answer": "<p>Avoid threads for CPU-bound pure-Python work because the GIL serializes bytecode execution. Threads help only when the program spends time waiting.</p>\n<table>\n<tr><th>Scenario</th><th>Alternative</th></tr>\n<tr><td>CPU-bound pure Python</td><td>multiprocessing</td></tr>\n<tr><td>CPU-bound with NumPy/C libs</td><td>threading (releases GIL)</td></tr>\n<tr><td>Many I/O connections</td><td>asyncio</td></tr>\n<tr><td>Background tasks</td><td>Celery, RQ</td></tr>\n</table>\n<pre><code>from multiprocessing import Pool\n\ndef cpu_task(n):\n    return sum(i * i for i in range(n))\n\nwith Pool(4) as pool:\n    print(pool.map(cpu_task, [10**6] * 4))\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Multithreading",
        "GIL",
        "Concurrency"
      ],
      "keyPoints": [
        "Threads do not speed up CPU-bound pure-Python code because of the GIL.",
        "Use multiprocessing for CPU-bound work.",
        "Use asyncio or Celery for high-concurrency I/O or background jobs."
      ]
    },
    {
      "question": "Explain the difference between multithreading and multiprocessing in Python. When would you use each?",
      "answer": "<p>Multithreading shares memory within one process but is limited by the GIL. Multiprocessing uses separate processes, each with its own GIL and memory space.</p>\n<table>\n<tr><th>Aspect</th><th>Multithreading</th><th>Multiprocessing</th></tr>\n<tr><td>Memory</td><td>Shared</td><td>Separate</td></tr>\n<tr><td>GIL</td><td>Shared</td><td>One per process</td></tr>\n<tr><td>Best for</td><td>I/O-bound</td><td>CPU-bound</td></tr>\n<tr><td>Communication</td><td>Shared variables + locks</td><td>Queues, pipes, shared memory</td></tr>\n</table>\n<pre><code>import threading, requests\n\n# I/O-bound: threads\nthreads = [threading.Thread(target=requests.get, args=(u,)) for u in urls]\n\n# CPU-bound: processes\nfrom multiprocessing import Pool\nwith Pool(4) as p:\n    p.map(heavy_computation, tasks)\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Multithreading",
        "Multiprocessing",
        "Concurrency"
      ],
      "keyPoints": [
        "Threads share memory but contend for the GIL.",
        "Processes bypass the GIL but have higher memory and startup cost.",
        "Use threads for I/O and processes for CPU-bound work."
      ]
    },
    {
      "question": "Process a 10GB CSV file efficiently in Python. Compare pandas chunking vs Dask vs Spark approaches.",
      "answer": "<p>For a 10GB CSV, avoid loading the whole file into RAM.</p>\n<table>\n<tr><th>Approach</th><th>When to use</th></tr>\n<tr><td>pandas chunks</td><td>Simple transforms, single machine</td></tr>\n<tr><td>Dask</td><td>Out-of-core or multi-core on one machine/small cluster</td></tr>\n<tr><td>Spark</td><td>Distributed cluster, complex pipelines</td></tr>\n</table>\n<pre><code>import pandas as pd\n\n# Pandas chunking\nchunks = pd.read_csv(\"big.csv\", chunksize=100_000)\nfor chunk in chunks:\n    chunk[\"new_col\"] = chunk[\"a\"] + chunk[\"b\"]\n    chunk.to_csv(\"out.csv\", mode=\"a\", header=False, index=False)\n\n# Dask\nimport dask.dataframe as dd\nddf = dd.read_csv(\"big.csv\")\nresult = ddf.groupby(\"category\").amount.sum().compute()\n</code></pre>\n<p><b>Spark</b> would use <code>spark.read.csv(...)</code> and DataFrame operations across a cluster.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Data Processing",
        "Pandas",
        "Dask",
        "Spark"
      ],
      "keyPoints": [
        "Stream large files with pandas chunks to avoid memory spikes.",
        "Dask scales pandas-like code across cores or small clusters.",
        "Spark is the choice for distributed clusters and complex ETL."
      ]
    },
    {
      "question": "Find the most common words in a text using Python's Counter pattern.",
      "answer": "<p><code>collections.Counter</code> counts hashable items. Combine it with string splitting and normalization to find the most common words.</p>\n<pre><code>from collections import Counter\nimport re\n\ndef top_words(text, n=10):\n    words = re.findall(r\"\b\\w+\b\", text.lower())\n    return Counter(words).most_common(n)\n\ntext = \"the quick brown fox jumps over the lazy dog\"\nprint(top_words(text, 3))\n# [(\"the\", 2), (\"quick\", 1), (\"brown\", 1)]\n</code></pre>\n<p><b>Complexity:</b> O(m) to tokenize plus O(k log n) for the top-n heap, where m is text length.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Data Processing",
        "Counter",
        "Strings"
      ],
      "keyPoints": [
        "Counter simplifies counting hashable elements.",
        "Normalize text with lowercasing and regex tokenization.",
        "most_common returns the top n items efficiently."
      ]
    },
    {
      "question": "Write a Python function to reverse a string without using built-in reverse functions.",
      "answer": "<p>Strings support slicing with a negative step, but a manual two-pointer approach also works.</p>\n<pre><code>def reverse_string(s):\n    chars = list(s)\n    left, right = 0, len(chars) - 1\n    while left &lt; right:\n        chars[left], chars[right] = chars[right], chars[left]\n        left += 1\n        right -= 1\n    return \"\".join(chars)\n\nprint(reverse_string(\"hello\"))  # olleh\n\n# Slicing alternative\nprint(\"hello\"[::-1])  # olleh\n</code></pre>\n<p><b>Complexity:</b> O(n) time and O(n) space for the character list.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Strings",
        "Algorithms"
      ],
      "keyPoints": [
        "Convert the string to a list because strings are immutable.",
        "Swap characters from both ends moving inward.",
        "The two-pointer approach runs in O(n) time."
      ]
    },
    {
      "question": "Write a Python function to check if a given string is a palindrome.",
      "answer": "<p>A palindrome reads the same forward and backward. Compare characters from both ends or use slicing.</p>\n<pre><code>def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left &lt; right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True\n\nprint(is_palindrome(\"racecar\"))  # True\n\n# Concise\nprint(\"racecar\" == \"racecar\"[::-1])  # True\n</code></pre>\n<p><b>For real-world text:</b> normalize by removing non-alphanumeric characters and lowercasing first.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Strings",
        "Algorithms"
      ],
      "keyPoints": [
        "Compare characters from both ends until the pointers meet.",
        "Slicing with [::-1] provides a concise alternative.",
        "Normalize input by lowercasing and removing non-alphanumeric characters."
      ]
    },
    {
      "question": "What is the difference between *args and **kwargs in Python functions?",
      "answer": "<p><code>*args</code> collects extra positional arguments into a tuple. <code>**kwargs</code> collects extra keyword arguments into a dict.</p>\n<pre><code>def demo(a, b, *args, **kwargs):\n    print(\"a, b:\", a, b)\n    print(\"args:\", args)\n    print(\"kwargs:\", kwargs)\n\ndemo(1, 2, 3, 4, x=10, y=20)\n# a, b: 1 2\n# args: (3, 4)\n# kwargs: {\"x\": 10, \"y\": 20}\n\n# Unpacking\nnums = [1, 2, 3]\nprint(sum(*nums))  # requires sum(1, 2, 3)\n</code></pre>\n<p><b>Use them</b> to write flexible wrappers and utility functions.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Functions"
      ],
      "keyPoints": [
        "*args captures extra positional arguments as a tuple.",
        "**kwargs captures extra keyword arguments as a dict.",
        "They make functions flexible and are often used in decorators."
      ]
    },
    {
      "question": "What is the difference between a list and a tuple in Python? When should you use each?",
      "answer": "<p>Lists are mutable and tuples are immutable. This difference affects hashability, performance, and use cases.</p>\n<table>\n<tr><th>Feature</th><th>List</th><th>Tuple</th></tr>\n<tr><td>Mutable</td><td>Yes</td><td>No</td></tr>\n<tr><td>Hashable</td><td>No</td><td>Yes (if contents are)</td></tr>\n<tr><td>Syntax</td><td>[1, 2]</td><td>(1, 2)</td></tr>\n<tr><td>Use case</td><td>Changing collections</td><td>Fixed records, dict keys</td></tr>\n</table>\n<pre><code>items = [1, 2, 3]\nitems.append(4)\n\npoint = (1, 2)\nlocations = {point: \"origin\"}\n</code></pre>\n<p><b>Rule of thumb:</b> use lists for homogeneous, mutable sequences; use tuples for fixed-size records.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Lists",
        "Tuples"
      ],
      "keyPoints": [
        "Lists are mutable; tuples are immutable.",
        "Tuples are hashable when their contents are hashable.",
        "Use tuples for fixed records and dict keys; lists for mutable collections."
      ]
    },
    {
      "question": "What is the difference between Flask and Django? When would you choose one over the other?",
      "answer": "<p>Flask is a lightweight, flexible microframework. Django is a full-featured framework with batteries included.</p>\n<table>\n<tr><th>Aspect</th><th>Flask</th><th>Django</th></tr>\n<tr><td>Size</th><td>Minimal core</td><td>Batteries included</td></tr>\n<tr><td>ORM</td><td>Optional (SQLAlchemy)</td><td>Django ORM built-in</td></tr>\n<tr><td>Admin</td><td>Third-party</td><td>Built-in admin</td></tr>\n<tr><td>Flexibility</td><td>High</td><td>Opinionated</td></tr>\n</table>\n<p><b>Choose Flask</b> for microservices, APIs, or when you want full control. <b>Choose Django</b> for rapid development of data-driven apps with many built-in features.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Django/Flask",
        "Web Frameworks"
      ],
      "keyPoints": [
        "Flask is minimal and flexible; Django is full-featured and opinionated.",
        "Django includes ORM, admin, auth, and migrations out of the box.",
        "Flask is often preferred for microservices and small APIs."
      ]
    },
    {
      "question": "Explain Flask blueprints and how they help organize larger applications.",
      "answer": "<p>Blueprints let you split routes, templates, and static files into reusable modules. They are registered on the main Flask app later.</p>\n<pre><code>from flask import Blueprint, jsonify\n\nusers_bp = Blueprint(\"users\", __name__, url_prefix=\"/users\")\n\n@users_bp.get(\"/\")\ndef list_users():\n    return jsonify([\"alice\", \"bob\"])\n\n# app.py\nfrom flask import Flask\nfrom users import users_bp\n\napp = Flask(__name__)\napp.register_blueprint(users_bp)\n</code></pre>\n<p><b>Benefits:</b> separation of concerns, easier testing, and reusable components.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Blueprints"
      ],
      "keyPoints": [
        "Blueprints group related routes and static assets.",
        "They are registered with app.register_blueprint.",
        "They help scale Flask apps by separating concerns."
      ]
    },
    {
      "question": "How does Flask handle sessions? Explain the session object and secure cookies.",
      "answer": "<p>Flask sessions are client-side. The session dict is serialized, signed with <code>SECRET_KEY</code>, and stored in the browser as a secure cookie.</p>\n<pre><code>from flask import Flask, session\n\napp = Flask(__name__)\napp.secret_key = \"change-me-in-production\"\n\n@app.route(\"/login\")\ndef login():\n    session[\"user_id\"] = 42\n    return \"logged in\"\n\n@app.route(\"/profile\")\ndef profile():\n    user_id = session.get(\"user_id\")\n    return f\"user {user_id}\"\n</code></pre>\n<p><b>Security:</b> keep <code>SECRET_KEY</code> secret, use HTTPS, and set <code>SESSION_COOKIE_SECURE</code> and <code>SESSION_COOKIE_HTTPONLY</code> in production.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Sessions",
        "Security"
      ],
      "keyPoints": [
        "Flask sessions are signed client-side cookies.",
        "The SECRET_KEY signs session data; never expose it.",
        "Use HTTPS and HttpOnly/Secure cookie flags in production."
      ]
    },
    {
      "question": "Explain Django's MVT architecture. How does a request get processed through the framework?",
      "answer": "<p>Django uses Model-View-Template (MVT), similar to MVC. A request flows through middleware, URL routing, views, models, and templates.</p>\n<ol>\n<li>Web server passes the request to Django's WSGI/ASGI handler.</li>\n<li>Middleware processes the request.</li>\n<li>URLconf maps the path to a view.</li>\n<li>The view interacts with models and business logic.</li>\n<li>The view renders a template or returns JSON.</li>\n<li>Middleware processes the response.</li>\n</ol>\n<pre><code># urls.py\npath(\"articles/&lt;int:id&gt;/\", views.article_detail)\n\n# views.py\ndef article_detail(request, id):\n    article = get_object_or_404(Article, pk=id)\n    return render(request, \"article.html\", {\"article\": article})\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Django",
        "MVT"
      ],
      "keyPoints": [
        "MVT stands for Model-View-Template.",
        "Requests pass through middleware, URL routing, views, and templates.",
        "Views handle business logic and return responses or rendered templates."
      ]
    },
    {
      "question": "What are Django serializers and how do they work in Django REST Framework?",
      "answer": "<p>Serializers convert model instances and querysets to JSON (serialization) and validate incoming JSON to create/update models (deserialization).</p>\n<pre><code>from rest_framework import serializers\nfrom .models import Article\n\nclass ArticleSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Article\n        fields = [\"id\", \"title\", \"content\", \"published\"]\n\n# In a view\nserializer = ArticleSerializer(article)\nreturn Response(serializer.data)\n\n# Deserialization\nserializer = ArticleSerializer(data=request.data)\nif serializer.is_valid():\n    serializer.save()\n</code></pre>\n<p><b>Validation:</b> serializers run field-level and object-level validators automatically.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Django",
        "DRF",
        "Serialization"
      ],
      "keyPoints": [
        "Serializers convert model instances to JSON and back.",
        "ModelSerializer automatically generates fields from a model.",
        "They handle validation before saving data."
      ]
    },
    {
      "question": "How would you improve the performance of a Flask application in production?",
      "answer": "<p>Production Flask performance comes from the deployment stack, caching, database efficiency, and async-friendly patterns.</p>\n<ul>\n<li><b>Application server:</b> run with Gunicorn or uWSGI behind Nginx, not the dev server.</li>\n<li><b>Caching:</b> use Redis/Memcached with Flask-Caching.</li>\n<li><b>Database:</b> add indexes, use connection pooling, and avoid N+1 queries.</li>\n<li><b>Static files:</b> serve via CDN or Nginx.</li>\n<li><b>Async:</b> offload heavy work to Celery.</li>\n</ul>\n<pre><code>from flask_caching import Cache\ncache = Cache(config={\"CACHE_TYPE\": \"RedisCache\", \"CACHE_REDIS_URL\": \"redis://localhost:6379\"})\ncache.init_app(app)\n\n@app.route(\"/report\")\n@cache.cached(timeout=300)\ndef report():\n    return expensive_query()\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Performance"
      ],
      "keyPoints": [
        "Use Gunicorn/uWSGI behind Nginx, not Flask's dev server.",
        "Cache hot paths with Redis or Memcached.",
        "Optimize databases and offload heavy tasks to Celery."
      ]
    },
    {
      "question": "Group data by multiple keys using collections.defaultdict and perform aggregation operations.",
      "answer": "<p><code>defaultdict</code> automatically creates default values for missing keys, which simplifies grouping and aggregation.</p>\n<pre><code>from collections import defaultdict\n\nsales = [\n    {\"region\": \"US\", \"product\": \"A\", \"amount\": 100},\n    {\"region\": \"US\", \"product\": \"B\", \"amount\": 200},\n    {\"region\": \"EU\", \"product\": \"A\", \"amount\": 150},\n]\n\naggregated = defaultdict(lambda: {\"count\": 0, \"total\": 0})\nfor row in sales:\n    key = (row[\"region\"], row[\"product\"])\n    aggregated[key][\"count\"] += 1\n    aggregated[key][\"total\"] += row[\"amount\"]\n\nfor key, val in aggregated.items():\n    print(key, val)\n</code></pre>\n<p><b>Alternative:</b> pandas <code>groupby</code> is more concise for large tabular data.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Collections",
        "Aggregation"
      ],
      "keyPoints": [
        "defaultdict creates default values automatically for missing keys.",
        "Use tuple keys to group by multiple dimensions.",
        "pandas groupby is a higher-level alternative for tabular data."
      ]
    },
    {
      "question": "Calculate rolling averages by group using pandas. Write the code for a 30-day rolling window.",
      "answer": "<p>Use <code>groupby</code> followed by <code>rolling</code> with a time or integer window. Sort by date first.</p>\n<pre><code>import pandas as pd\n\ndf = pd.read_csv(\"sales.csv\", parse_dates=[\"date\"])\ndf = df.sort_values(\"date\")\n\ndf[\"rolling_avg\"] = (\n    df.groupby(\"product\")[\"revenue\"]\n      .transform(lambda s: s.rolling(window=30, min_periods=1).mean())\n)\n\n# Time-based window (requires date as index per group)\ndf = df.set_index(\"date\")\nrolling = df.groupby(\"product\")[\"revenue\"].rolling(\"30D\").mean().reset_index()\n</code></pre>\n<p><b>Note:</b> <code>min_periods=1</code> computes averages even before the window is full.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Pandas"
      ],
      "keyPoints": [
        "Sort by date before computing rolling windows.",
        "Use groupby followed by rolling or transform.",
        "Use min_periods to control behavior at the start of each group."
      ]
    },
    {
      "question": "How would you handle missing data strategically in pandas? Show different approaches for numeric vs categorical data.",
      "answer": "<p>Treat missing data differently depending on column type and business context.</p>\n<table>\n<tr><th>Type</th><th>Approach</th><th>Example</th></tr>\n<tr><td>Numeric</td><td>Mean, median, or model imputation</td><td><code>fillna(df[\"x\"].median())</code></td></tr>\n<tr><td>Categorical</td><td>Mode or \"Unknown\" category</td><td><code>fillna(\"Unknown\")</code></td></tr>\n<tr><td>Time series</td><td>Forward/backward fill</td><td><code>fillna(method=\"ffill\")</code></td></tr>\n<tr><td>Drop</td><td>Rows/columns with too many missing values</td><td><code>dropna(thresh=...)</code></td></tr>\n</table>\n<pre><code># Numeric: median imputation\ndf[\"age\"] = df[\"age\"].fillna(df[\"age\"].median())\n\n# Categorical: explicit missing category\ndf[\"city\"] = df[\"city\"].fillna(\"Unknown\")\n\n# Flag missing values as a feature\ndf[\"age_missing\"] = df[\"age\"].isna().astype(int)\n</code></pre>\n<p><b>Tip:</b> document why each strategy was chosen; filling blindly can bias models.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Data Processing",
        "Pandas"
      ],
      "keyPoints": [
        "Impute numeric columns with mean or median.",
        "Fill categorical columns with mode or an explicit Unknown category.",
        "Consider dropping rows or flagging missingness as a feature."
      ]
    },
    {
      "question": "Design a real-time recommendation system using Python. Discuss architecture, data storage, and ML pipeline.",
      "answer": "<p>A real-time recommendation system has ingestion, feature stores, candidate generation, ranking, and serving layers.</p>\n<ul>\n<li><b>Ingestion:</b> Kafka/Kinesis for events; Spark/Flink for stream processing.</li>\n<li><b>Feature store:</b> Feast or Redis for low-latency feature lookups.</li>\n<li><b>Candidate generation:</b> collaborative filtering, embeddings, or approximate nearest neighbors (FAISS, Annoy).</li>\n<li><b>Ranking:</b> a model trained offline and served via MLflow, TorchServe, or a custom FastAPI service.</li>\n<li><b>Serving:</b> FastAPI/Flask endpoint cached with Redis and rate-limited.</li>\n</ul>\n<pre><code># Simplified serving stub\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/recommend/{user_id}\")\ndef recommend(user_id: str):\n    candidates = fetch_candidates(user_id)\n    ranked = ranker.predict(candidates)\n    return {\"items\": ranked[:10]}\n</code></pre>\n<p><b>Monitoring:</b> log predictions, track click-through rate, and retrain periodically.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Data Processing",
        "Machine Learning",
        "System Design"
      ],
      "keyPoints": [
        "Use streaming ingestion and a feature store for real-time features.",
        "Generate candidates with embeddings or collaborative filtering.",
        "Serve ranked recommendations behind a low-latency API with caching."
      ]
    },
    {
      "question": "Design an ETL pipeline for streaming data processing 1M events/minute using Python.",
      "answer": "<p>Handle 1M events/minute with a distributed stream processor and scalable Python workers.</p>\n<ol>\n<li><b>Ingest:</b> Kafka topic partitioned horizontally.</li>\n<li><b>Process:</b> Faust, Spark Structured Streaming, or Kafka Connect + Python consumers.</li>\n<li><b>Transform:</b> validate schema, enrich, window aggregations.</li>\n<li><b>Load:</b> write to data warehouse (Snowflake/BigQuery) or OLAP (ClickHouse/Druid).</li>\n</ol>\n<pre><code># Faust-style example\nimport faust\n\napp = faust.App(\"etl_app\", broker=\"kafka://localhost:9092\")\ntopic = app.topic(\"events\")\n\n@app.agent(topic)\nasync def process(events):\n    async for event in events.group_by(Event.user_id):\n        validated = validate(event)\n        await load_to_warehouse(validated)\n</code></pre>\n<p><b>Key concerns:</b> exactly-once semantics, backpressure, schema evolution, and monitoring.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Data Processing",
        "ETL",
        "Streaming",
        "System Design"
      ],
      "keyPoints": [
        "Partition Kafka topics to scale ingestion horizontally.",
        "Use Faust, Spark Streaming, or Kafka consumers for transformation.",
        "Load into a data warehouse or OLAP store for analytics."
      ]
    },
    {
      "question": "Explain method overriding in Python. How does super() work in inheritance hierarchies?",
      "answer": "<p>Method overriding lets a subclass provide its own implementation of a method defined in a parent. <code>super()</code> calls the parent method according to MRO.</p>\n<pre><code>class Animal:\n    def speak(self):\n        return \"sound\"\n\nclass Dog(Animal):\n    def speak(self):\n        base = super().speak()\n        return f\"{base} -&gt; woof\"\n\nprint(Dog().speak())  # sound -&gt; woof\n</code></pre>\n<p><b>super in multiple inheritance:</b> it follows the MRO, so in diamond hierarchies each class method is invoked exactly once.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "OOP",
        "Inheritance",
        "super"
      ],
      "keyPoints": [
        "Overriding replaces a parent method in a subclass.",
        "super() calls the next class in the MRO.",
        "Use super() in __init__ to safely initialize cooperative multiple inheritance."
      ]
    },
    {
      "question": "What is the difference between class variables and instance variables in Python?",
      "answer": "<p>Class variables are shared across all instances; instance variables are unique to each object.</p>\n<pre><code>class Dog:\n    species = \"Canis familiaris\"  # class variable\n\n    def __init__(self, name):\n        self.name = name            # instance variable\n\na = Dog(\"Fido\")\nb = Dog(\"Buddy\")\nprint(a.species is b.species)  # True\na.species = \"Wolf\"             # creates instance attribute\nprint(b.species)               # Canis familiaris\n</code></pre>\n<p><b>Gotcha:</b> mutable class variables (lists, dicts) are shared; modifying them through one instance affects all others unless shadowed.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "OOP",
        "Variables"
      ],
      "keyPoints": [
        "Class variables are shared among all instances.",
        "Instance variables are unique to each instance.",
        "Avoid mutable class variables unless intended as shared state."
      ]
    },
    {
      "question": "Does Python support multiple inheritance? How does it solve the diamond problem?",
      "answer": "<p>Yes, Python supports multiple inheritance. It solves the diamond problem with C3 linearization MRO and <code>super()</code>.</p>\n<pre><code>class A:\n    def method(self): print(\"A\")\nclass B(A):\n    def method(self): print(\"B\"); super().method()\nclass C(A):\n    def method(self): print(\"C\"); super().method()\nclass D(B, C):\n    def method(self): print(\"D\"); super().method()\n\nD().method()  # D -&gt; B -&gt; C -&gt; A\n</code></pre>\n<p><b>Rule:</b> design cooperative classes that call <code>super().method()</code> so the MRO visits each ancestor once.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "OOP",
        "Inheritance",
        "MRO"
      ],
      "keyPoints": [
        "Python supports multiple inheritance via C3 linearization.",
        "The diamond problem is solved by MRO and super().",
        "Cooperative classes call super() to traverse the hierarchy once."
      ]
    },
    {
      "question": "What is duck typing in Python? How does it relate to polymorphism?",
      "answer": "<p>Duck typing means an object's suitability is determined by the methods and attributes it has, not its type. It enables polymorphism without inheritance.</p>\n<pre><code>class Dog:\n    def speak(self): return \"woof\"\n\nclass Robot:\n    def speak(self): return \"beep\"\n\ndef make_it_talk(obj):\n    return obj.speak()\n\nprint(make_it_talk(Dog()))    # woof\nprint(make_it_talk(Robot()))  # beep\n</code></pre>\n<p><b>Polymorphism:</b> different objects respond to the same interface. Duck typing is Python's dynamic form of polymorphism.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "OOP",
        "Duck Typing",
        "Polymorphism"
      ],
      "keyPoints": [
        "Duck typing checks behavior, not type.",
        "It enables polymorphism without a shared base class.",
        "Use ABCs when explicit contracts are needed."
      ]
    },
    {
      "question": "Explain the difference between composition and inheritance. When should you prefer composition?",
      "answer": "<p>Inheritance models an \"is-a\" relationship and reuses implementation by deriving from a base class. Composition models a \"has-a\" relationship by including objects as attributes.</p>\n<pre><code># Inheritance\nclass Bird:\n    def fly(self): ...\nclass Sparrow(Bird): ...\n\n# Composition\nclass Engine:\n    def start(self): ...\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()\n    def start(self):\n        self.engine.start()\n</code></pre>\n<p><b>Prefer composition</b> when behavior varies independently, when subclasses would force unrelated behaviors, or to avoid fragile base classes.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "OOP",
        "Composition",
        "Inheritance"
      ],
      "keyPoints": [
        "Inheritance is is-a; composition is has-a.",
        "Composition avoids fragile hierarchies and tight coupling.",
        "Favor composition when behavior can vary independently."
      ]
    },
    {
      "question": "What is the difference between __new__ and __init__ in Python? When would you override __new__?",
      "answer": "<p><code>__new__</code> creates and returns the instance. <code>__init__</code> initializes the already-created instance.</p>\n<pre><code>class Singleton:\n    _instance = None\n\n    def __new__(cls, *args, **kwargs):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\na = Singleton()\nb = Singleton()\nprint(a is b)  # True\n</code></pre>\n<p><b>Override __new__</b> for singletons, immutable subclasses (e.g., <code>int</code>), metaclass-like instance control, or caching object creation. Most classes only need <code>__init__</code>.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "OOP",
        "Dunder Methods",
        "Advanced Python"
      ],
      "keyPoints": [
        "__new__ creates the instance; __init__ initializes it.",
        "Override __new__ for singletons or immutable type subclasses.",
        "Most classes only need to implement __init__."
      ]
    },
    {
      "question": "How are dict and set implemented internally in Python? What is the time complexity of retrieving an item?",
      "answer": "<p>CPython implements <code>dict</code> and <code>set</code> as hash tables. Keys are hashed and stored in a sparse table that maps hash indices to entries.</p>\n<ul>\n<li><b>dict:</b> stores key-value pairs with combined hash + equality checks.</li>\n<li><b>set:</b> stores only keys, optimized for membership testing.</li>\n</ul>\n<table>\n<tr><th>Operation</th><th>Average</th><th>Worst</th></tr>\n<tr><td>Lookup</td><td>O(1)</td><td>O(n) with many collisions</td></tr>\n<tr><td>Insertion</td><td>O(1)</td><td>O(n)</td></tr>\n<tr><td>Deletion</td><td>O(1)</td><td>O(n)</td></tr>\n</table>\n<p><b>Key requirement:</b> keys must be hashable and immutable (or at least not mutate while in the container).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Python Internals",
        "Dicts",
        "Sets",
        "Hash Tables"
      ],
      "keyPoints": [
        "Dicts and sets are backed by hash tables.",
        "Average lookup, insertion, and deletion are O(1).",
        "Keys must be hashable and should not change while in the container."
      ]
    },
    {
      "question": "How are function arguments passed in Python - by value or by reference? Explain with examples.",
      "answer": "<p>Python passes arguments by object reference. The function receives a reference to the same object; whether changes affect the caller depends on mutability.</p>\n<pre><code>def append_item(items):\n    items.append(4)  # mutates caller's list\n\ndef reassign(items):\n    items = [9, 8]   # only rebinds local name\n\nlst = [1, 2, 3]\nappend_item(lst)\nprint(lst)        # [1, 2, 3, 4]\n\nreassign(lst)\nprint(lst)        # [1, 2, 3, 4]\n</code></pre>\n<p><b>Rule:</b> mutable objects can be changed in place; rebinding a parameter does not affect the caller.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Functions"
      ],
      "keyPoints": [
        "Python passes arguments by object reference.",
        "Mutable arguments can be modified in place.",
        "Rebinding a parameter only changes the local reference."
      ]
    },
    {
      "question": "How would you identify and resolve memory leaks in a production Python application?",
      "answer": "<p>Identify leaks by comparing memory snapshots and inspecting object references.</p>\n<ol>\n<li>Enable <code>tracemalloc</code> and compare snapshots over time.</li>\n<li>Use <code>gc</code> and <code>objgraph</code> to find cycles and unexpectedly growing object types.</li>\n<li>Profile with <code>memory_profiler</code> or <code>pympler</code>.</li>\n</ol>\n<pre><code>import tracemalloc, gc\n\ntracemalloc.start()\n# run workload\nsnap1 = tracemalloc.take_snapshot()\n# run workload again\nsnap2 = tracemalloc.take_snapshot()\ndiff = snap2.compare_to(snap1, \"lineno\")\nfor stat in diff[:10]:\n    print(stat)\n</code></pre>\n<p><b>Fixes:</b> break reference cycles, use weak references, bound caches, close resources, and avoid global mutable state.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Memory Management",
        "Debugging"
      ],
      "keyPoints": [
        "Compare tracemalloc snapshots to find growing allocations.",
        "Use objgraph and gc to detect reference cycles.",
        "Fix leaks with weak references, cache bounds, and explicit cleanup."
      ]
    },
    {
      "question": "What is functools.lru_cache and how does it work? When would you use it?",
      "answer": "<p><code>functools.lru_cache</code> memoizes function results, returning cached values for repeated arguments. \"LRU\" means least-recently-used entries are evicted when the cache is full.</p>\n<pre><code>from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n &lt; 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(50))\nprint(fib.cache_info())\n</code></pre>\n<p><b>Use when:</b> pure functions with expensive, repeated calls and hashable arguments. <b>Avoid:</b> unbounded caches (<code>maxsize=None</code>), mutable arguments, or functions with side effects.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Caching",
        "functools"
      ],
      "keyPoints": [
        "lru_cache stores results keyed by arguments.",
        "Least-recently-used entries are evicted when maxsize is reached.",
        "Arguments must be hashable; avoid side effects and unbounded caches."
      ]
    },
    {
      "question": "What will be the output of this code? x = [1,2,3]; y = x; x += [4,5]; print(y) - Explain why.",
      "answer": "<p>The output is <code>[1, 2, 3, 4, 5]</code> because <code>+=</code> on a list calls <code>__iadd__</code>, which mutates the list in place. Both <code>x</code> and <code>y</code> reference the same list object.</p>\n<pre><code>x = [1, 2, 3]\ny = x\nx += [4, 5]   # in-place extension, same object\nprint(y)      # [1, 2, 3, 4, 5]\n\n# Contrast with rebinding\nx = [1, 2, 3]\ny = x\nx = x + [4, 5]  # creates new list, y unchanged\nprint(y)        # [1, 2, 3]\n</code></pre>\n<p><b>Lesson:</b> augmented assignment on mutable objects can mutate shared references.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Lists",
        "Operators"
      ],
      "keyPoints": [
        "+= on lists calls __iadd__ and mutates in place.",
        "x and y reference the same list, so both see the change.",
        "x = x + [4, 5] creates a new list instead of mutating."
      ]
    },
    {
      "question": "Explain the difference between a generator expression and a list comprehension. When is each appropriate?",
      "answer": "<p>A list comprehension builds the full list in memory. A generator expression yields items lazily and is consumed once.</p>\n<pre><code># List comprehension: all values in memory\nsquares = [x**2 for x in range(10**6)]\n\n# Generator expression: one value at a time\nsquares_gen = (x**2 for x in range(10**6))\nprint(sum(squares_gen))  # streams without full list\n</code></pre>\n<table>\n<tr><th>Use list comprehension</th><th>Use generator expression</th></tr>\n<tr><td>You need indexing or reuse</td><td>Large or infinite sequences</td></tr>\n<tr><td>Small data</td><td>Only iterating once</td></tr>\n<tr><td>Multiple passes</td><td>Memory is constrained</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Generators",
        "Lists",
        "Comprehensions"
      ],
      "keyPoints": [
        "List comprehensions build the entire list eagerly.",
        "Generator expressions produce values lazily.",
        "Use generators for large sequences or single-pass iteration."
      ]
    },
    {
      "question": "Why does {[1, 2]: 'value'} produce an error in Python? Explain the concept of hashability.",
      "answer": "<p>Dictionary keys must be hashable. Lists are mutable and therefore not hashable, so using a list as a key raises <code>TypeError: unhashable type: 'list'</code>.</p>\n<pre><code># Invalid\n# d = {[1, 2]: \"value\"}  # TypeError\n\n# Valid alternatives\nd1 = {(1, 2): \"value\"}\nd2 = {frozenset([1, 2]): \"value\"}\n</code></pre>\n<p><b>Hashability rules:</b> an object is hashable if it has a stable <code>__hash__</code> and <code>__eq__</code> and its value never changes. Immutable built-ins (str, int, tuple of hashables, frozenset) are hashable.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Dicts",
        "Hashability"
      ],
      "keyPoints": [
        "Dict keys must be hashable.",
        "Lists are mutable and therefore not hashable.",
        "Use tuples or frozensets as hashable alternatives."
      ]
    },
    {
      "question": "What is the difference between a Lock, RLock, Semaphore, and Event in Python threading?",
      "answer": "<p>These synchronization primitives coordinate threads.</p>\n<table>\n<tr><th>Primitive</th><th>Purpose</th></tr>\n<tr><td><code>Lock</code></td><td>Only one thread can hold it at a time.</td></tr>\n<tr><td><code>RLock</code></td><td>Reentrant: same thread can acquire it multiple times.</td></tr>\n<tr><td><code>Semaphore</code></td><td>Allows up to N threads to access a resource.</td></tr>\n<tr><td><code>Event</code></td><td>One thread signals, others wait and proceed.</td></tr>\n</table>\n<pre><code>from threading import Lock, Semaphore\n\nlock = Lock()\nwith lock:\n    # critical section\n    pass\n\npool = Semaphore(3)  # max 3 threads at once\nwith pool:\n    # limited access\n    pass\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Multithreading",
        "Synchronization"
      ],
      "keyPoints": [
        "Lock protects critical sections with exclusive access.",
        "RLock allows re-acquisition by the same thread.",
        "Semaphore limits concurrent access; Event coordinates signaling."
      ]
    },
    {
      "question": "What is a race condition and how would you solve it in Python? Provide a code example.",
      "answer": "<p>A race condition occurs when multiple threads access shared state and at least one modifies it, leading to unpredictable results.</p>\n<pre><code>import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100_000):\n        with lock:\n            counter += 1\n\nthreads = [threading.Thread(target=increment) for _ in range(10)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(counter)  # 1_000_000\n</code></pre>\n<p><b>Solutions:</b> locks, RLocks, semaphores, atomic operations where available, or avoid shared mutable state with queues.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Multithreading",
        "Race Conditions"
      ],
      "keyPoints": [
        "Race conditions happen when threads access shared mutable state unsafely.",
        "Use locks to make increments atomic.",
        "Queues and immutable state can eliminate races entirely."
      ]
    },
    {
      "question": "How do you manage configuration settings across different environments in a Flask application?",
      "answer": "<p>Use environment-specific config classes and load values from environment variables.</p>\n<pre><code>import os\n\nclass Config:\n    SECRET_KEY = os.environ.get(\"SECRET_KEY\")\n    SQLALCHEMY_TRACK_MODIFICATIONS = False\n\nclass DevelopmentConfig(Config):\n    DEBUG = True\n    SQLALCHEMY_DATABASE_URI = \"sqlite:///dev.db\"\n\nclass ProductionConfig(Config):\n    DEBUG = False\n    SQLALCHEMY_DATABASE_URI = os.environ.get(\"DATABASE_URL\")\n\nconfig_map = {\n    \"development\": DevelopmentConfig,\n    \"production\": ProductionConfig,\n}\n\n# app.py\nfrom flask import Flask\napp = Flask(__name__)\nenv = os.environ.get(\"FLASK_ENV\", \"development\")\napp.config.from_object(config_map[env])\n</code></pre>\n<p><b>Best practice:</b> never commit secrets; use <code>.env</code> files with python-dotenv in development.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Configuration"
      ],
      "keyPoints": [
        "Use config classes per environment.",
        "Load secrets and environment-specific values from env vars.",
        "Use python-dotenv in development but not in production."
      ]
    },
    {
      "question": "How do you handle errors and exceptions in a Flask REST API? Explain errorhandler decorator.",
      "answer": "<p>Register global error handlers with <code>@app.errorhandler</code> to return consistent JSON responses.</p>\n<pre><code>from flask import Flask, jsonify\nfrom werkzeug.exceptions import NotFound, BadRequest\n\napp = Flask(__name__)\n\n@app.errorhandler(NotFound)\ndef not_found(e):\n    return jsonify({\"error\": \"Resource not found\"}), 404\n\n@app.errorhandler(BadRequest)\ndef bad_request(e):\n    return jsonify({\"error\": \"Invalid request\"}), 400\n\n@app.errorhandler(Exception)\ndef server_error(e):\n    app.logger.exception(e)\n    return jsonify({\"error\": \"Internal server error\"}), 500\n\n@app.route(\"/users/&lt;int:user_id&gt;\")\ndef get_user(user_id):\n    user = find_user(user_id)\n    if user is None:\n        raise NotFound()\n    return jsonify(user)\n</code></pre>\n<p><b>Tip:</b> log unexpected exceptions; return safe messages to clients.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Error Handling"
      ],
      "keyPoints": [
        "Use @app.errorhandler to define global error responses.",
        "Return consistent JSON error payloads from APIs.",
        "Log unexpected exceptions before returning generic messages."
      ]
    },
    {
      "question": "What are the key differences between Flask and Django in terms of project structure and database migrations?",
      "answer": "<p>Flask is unopinionated and leaves project layout to the developer. Django enforces a conventional structure and includes a built-in migration system.</p>\n<table>\n<tr><th>Aspect</th><th>Flask</th><th>Django</th></tr>\n<tr><td>Project layout</td><td>Flexible</td><td>Convention-based apps</td></tr>\n<tr><td>ORM</td><td>Optional (SQLAlchemy common)</td><td>Django ORM built-in</td></tr>\n<tr><td>Migrations</td><td>Flask-Migrate (Alembic)</td><td><code>makemigrations</code>/<code>migrate</code></td></tr>\n<tr><td>Admin</td><td>Third-party</td><td>Built-in</td></tr>\n</table>\n<pre><code># Django migrations\npython manage.py makemigrations\npython manage.py migrate\n\n# Flask migrations with Flask-Migrate\nflask db migrate -m \"init\"\nflask db upgrade\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "Django"
      ],
      "keyPoints": [
        "Flask projects are flexible; Django enforces app conventions.",
        "Django migrations are built-in; Flask uses Flask-Migrate/Alembic.",
        "Django includes ORM and admin; Flask requires third-party choices."
      ]
    },
    {
      "question": "What are Flask's teardown_request and teardown_appcontext functions used for?",
      "answer": "<p>These decorators register cleanup code that runs after a request or when an application context tears down, even if an exception occurs.</p>\n<pre><code>from flask import Flask, g\n\napp = Flask(__name__)\n\n@app.before_request\ndef open_db():\n    g.db = create_connection()\n\n@app.teardown_request\ndef close_db(exc):\n    db = g.pop(\"db\", None)\n    if db is not None:\n        db.close()\n\n@app.teardown_appcontext\ndef cleanup(exc):\n    print(\"App context teardown\")\n</code></pre>\n<p><b>Use <code>teardown_request</code></b> for per-request resources like DB connections. <b>Use <code>teardown_appcontext</code></b> for resources scoped to the app context.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask"
      ],
      "keyPoints": [
        "teardown_request runs after each request.",
        "teardown_appcontext runs when the app context ends.",
        "Both run even if an exception is raised, so use them for cleanup."
      ]
    },
    {
      "question": "How do you create a REST API using Flask? Explain the role of jsonify and HTTP methods.",
      "answer": "<p>Use Flask routes with HTTP method decorators and return JSON with <code>jsonify</code>.</p>\n<pre><code>from flask import Flask, jsonify, request\n\napp = Flask(__name__)\nusers = {}\n\n@app.get(\"/users\")\ndef list_users():\n    return jsonify(list(users.values()))\n\n@app.post(\"/users\")\ndef create_user():\n    data = request.get_json()\n    user_id = len(users) + 1\n    users[user_id] = {\"id\": user_id, \"name\": data[\"name\"]}\n    return jsonify(users[user_id]), 201\n\n@app.get(\"/users/&lt;int:user_id&gt;\")\ndef get_user(user_id):\n    user = users.get(user_id)\n    if not user:\n        return jsonify({\"error\": \"not found\"}), 404\n    return jsonify(user)\n\n@app.delete(\"/users/&lt;int:user_id&gt;\")\ndef delete_user(user_id):\n    users.pop(user_id, None)\n    return \"\", 204\n</code></pre>\n<p><b>jsonify</b> serializes Python objects to JSON and sets the correct <code>Content-Type</code> header.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Django/Flask",
        "Flask",
        "REST API"
      ],
      "keyPoints": [
        "Use route decorators with HTTP methods like @app.get and @app.post.",
        "jsonify serializes data and sets Content-Type: application/json.",
        "Return appropriate status codes for REST semantics."
      ]
    },
    {
      "question": "Write a Python class Rectangle with methods to calculate area and perimeter.",
      "answer": "<p>Define a class with width and height attributes and methods for area and perimeter.</p>\n<pre><code>class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def area(self):\n        return self.width * self.height\n\n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\n    def __repr__(self):\n        return f\"Rectangle({self.width}, {self.height})\"\n\nrect = Rectangle(5, 3)\nprint(rect.area())       # 15\nprint(rect.perimeter())  # 16\n</code></pre>\n<p><b>Extension:</b> add validation in <code>__init__</code> to reject negative dimensions.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "OOP",
        "Classes"
      ],
      "keyPoints": [
        "Store dimensions as instance attributes.",
        "Implement area and perimeter methods.",
        "Add __repr__ for clear debugging output."
      ]
    },
    {
      "question": "Write a Python function to find the maximum value in a list without using built-in functions.",
      "answer": "<p>Iterate through the list and keep track of the largest value seen.</p>\n<pre><code>def find_max(values):\n    if not values:\n        raise ValueError(\"empty list\")\n    maximum = values[0]\n    for x in values[1:]:\n        if x &gt; maximum:\n            maximum = x\n    return maximum\n\nprint(find_max([3, 1, 4, 1, 5, 9, 2, 6]))  # 9\n</code></pre>\n<p><b>Complexity:</b> O(n) time and O(1) extra space.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Algorithms"
      ],
      "keyPoints": [
        "Initialize the maximum with the first element.",
        "Compare each subsequent element and update when larger.",
        "The algorithm runs in O(n) time."
      ]
    },
    {
      "question": "Describe a scenario where you would use a dictionary in Python. What are the time complexities of common dict operations?",
      "answer": "<p>Dictionaries are ideal for fast lookups by key, such as counting word frequencies or caching user profiles.</p>\n<pre><code># Counting word frequencies\ntext = \"the quick brown fox jumps over the lazy dog\"\nfreq = {}\nfor word in text.split():\n    freq[word] = freq.get(word, 0) + 1\n</code></pre>\n<table>\n<tr><th>Operation</th><th>Average</th><th>Amortized worst</th></tr>\n<tr><td>Get item</td><td>O(1)</td><td>O(n)</td></tr>\n<tr><td>Set item</td><td>O(1)</td><td>O(n)</td></tr>\n<tr><td>Delete item</td><td>O(1)</td><td>O(n)</td></tr>\n<tr><td>Membership (in)</td><td>O(1)</td><td>O(n)</td></tr>\n</table>\n<p><b>Worst case</b> occurs during rare hash-table resizes or extreme collisions.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Dicts"
      ],
      "keyPoints": [
        "Dicts excel at key-based lookups like counting and caching.",
        "Common operations are O(1) on average.",
        "Worst-case O(n) can happen during resizing or many collisions."
      ]
    },
    {
      "question": "Explain how to handle exceptions in Python. What is the difference between except Exception and bare except?",
      "answer": "<p>Use <code>try/except</code> to catch exceptions, <code>else</code> for code that runs only when no exception occurs, and <code>finally</code> for cleanup.</p>\n<pre><code>try:\n    result = int(user_input)\nexcept ValueError:\n    print(\"Invalid number\")\nexcept Exception as e:\n    print(f\"Unexpected: {e}\")\n    raise\nelse:\n    print(f\"Valid: {result}\")\nfinally:\n    print(\"Cleanup\")\n</code></pre>\n<table>\n<tr><th>Clause</th><th>Catches</th></tr>\n<tr><td><code>except Exception:</code></td><td>All subclasses of Exception (skips SystemExit, KeyboardInterrupt)</td></tr>\n<tr><td><code>except:</code></td><td>Everything including BaseException (usually wrong)</td></tr>\n</table>\n<p><b>Best practice:</b> catch specific exceptions first; avoid bare <code>except</code>.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "Python Basics",
        "Exception Handling"
      ],
      "keyPoints": [
        "Catch specific exceptions before broader ones.",
        "except Exception excludes SystemExit and KeyboardInterrupt.",
        "Bare except catches BaseException and should be avoided."
      ]
    },
    {
      "question": "How do you use regular expressions in Python? Provide an example using the re module.",
      "answer": "<p>The <code>re</code> module supports pattern matching, searching, splitting, and substitution.</p>\n<pre><code>import re\n\ntext = \"Contact us at support@example.com or sales@example.org\"\n\n# Find all emails\nemails = re.findall(r\"\b[\\w.-]+@[\\w.-]+\\.\\w+\b\", text)\n\n# Replace\nclean = re.sub(r\"\\d{3}-\\d{2}-\\d{4}\", \"XXX-XX-XXXX\", ssn_text)\n\n# Match at start\nif re.match(r\"https?://\", url):\n    print(\"HTTP URL\")\n\n# Compile for reuse\npattern = re.compile(r\"\b\\w+\b\")\nwords = pattern.findall(text)\n</code></pre>\n<p><b>Tip:</b> compile patterns when reusing them in loops.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Regex"
      ],
      "keyPoints": [
        "Use re.findall, re.search, re.sub, and re.match for common tasks.",
        "Compile patterns with re.compile when used repeatedly.",
        "Raw strings (r\"...\") are recommended for regex literals."
      ]
    },
    {
      "question": "What are Python wheels and why are they important for dependency management?",
      "answer": "<p>A wheel (<code>.whl</code>) is a built-package format for Python. It contains precompiled artifacts so installation does not require running <code>setup.py</code> or building from source.</p>\n<ul>\n<li><b>Faster installs:</b> no compilation step.</li>\n<li><b>Reliable:</b> avoids missing build dependencies on the target machine.</li>\n<li><b>Cacheable:</b> pip caches wheels for reuse.</li>\n</ul>\n<pre><code># Build a wheel\npython setup.py bdist_wheel\n\n# Or with build\npip install build\npython -m build\n\n# Install from wheel\npip install package-1.0-py3-none-any.whl\n</code></pre>\n<p><b>Note:</b> wheels are platform-specific if they include compiled extensions.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Python Basics",
        "Packaging",
        "Dependencies"
      ],
      "keyPoints": [
        "Wheels are prebuilt Python packages with .whl extension.",
        "They install faster and more reliably than source distributions.",
        "pip caches wheels, and they avoid needing compilers on the target."
      ]
    },
    {
      "question": "How do you implement caching in Python? Compare functools.lru_cache vs custom TTL cache.",
      "answer": "<p><code>lru_cache</code> is built-in and easy for memoization but has no expiry. A TTL cache evicts entries after a time-to-live, useful for data that grows stale.</p>\n<pre><code>from functools import lru_cache\nfrom cachetools import TTLCache\n\n@lru_cache(maxsize=128)\ndef expensive(n):\n    ...\n\n# TTL cache\ncache = TTLCache(maxsize=100, ttl=300)\ndef get_data(key):\n    if key not in cache:\n        cache[key] = fetch_from_db(key)\n    return cache[key]\n</code></pre>\n<table>\n<tr><th>Feature</th><th>lru_cache</th><th>TTL cache</th></tr>\n<tr><td>Eviction policy</td><td>Least recently used</td><td>Time-to-live</td></tr>\n<tr><td>Built-in</td><td>Yes</td><td>No (cachetools)</td></tr>\n<tr><td>Thread-safe</td><td>No</td><td>Yes (cachetools)</td></tr>\n<tr><td>Best for</td><td>Pure function memoization</td><td>External data caching</td></tr>\n</table>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Python Basics",
        "Caching"
      ],
      "keyPoints": [
        "lru_cache is built-in and ideal for pure function memoization.",
        "TTL caches expire entries after a set time, useful for stale data.",
        "cachetools provides thread-safe TTLCache for production use."
      ]
    },
    {
      "question": "What are the trade-offs of using multiprocessing vs multithreading in Python in terms of memory and performance?",
      "answer": "<p>The choice depends on whether work is CPU-bound or I/O-bound and on memory constraints.</p>\n<table>\n<tr><th>Factor</th><th>Multithreading</th><th>Multiprocessing</th></tr>\n<tr><td>Memory</td><td>Shared, low overhead</td><td>Separate memory, higher overhead</td></tr>\n<tr><td>Performance (CPU)</td><td>Limited by GIL</td><td>True parallelism</td></tr>\n<tr><td>Performance (I/O)</td><td>Good</td><td>Unnecessary overhead</td></tr>\n<tr><td>Data sharing</td><td>Shared variables + locks</td><td>Queues, pipes, shared memory</td></tr>\n<tr><td>Startup cost</td><td>Low</td><td>High (fork/spawn)</td></tr>\n</table>\n<p><b>Trade-off:</b> processes use more memory and take longer to start but can run CPU work in parallel.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Python",
        "Multithreading",
        "Multiprocessing",
        "Performance"
      ],
      "keyPoints": [
        "Threads share memory and have low startup cost but are GIL-limited.",
        "Processes have separate memory and enable true CPU parallelism.",
        "Processes incur higher memory usage and serialization overhead."
      ]
    }
  ]
}
