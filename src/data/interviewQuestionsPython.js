export const pythonQuestions = {
  "questions": [
    {
      "question": "What are the differences between lists, tuples, sets, and dictionaries in Python? When would you use each?",
      "answer": "<table><tr><th>Feature</th><th>lists</th><th>tuples, sets</th><th>dictionaries</th></tr>\n<tr><td>Description</td><td>lists specific</td><td>tuples, sets specific</td><td>dictionaries specific</td></tr>\n</table>",
      "difficulty": "Beginner",
      "tags": [
        "Python Basics",
        "Data Types",
        "Lists",
        "Dicts",
        "Tuples",
        "Sets"
      ]
    },
    {
      "question": "Explain list slicing in Python with step values. What does <code>my_list[::-1]</code> do?",
      "answer": "<p>Python slicing uses the syntax <code>[start:stop:step]</code>. All three parameters are optional.</p>\\n<ul>\\n<li><code>start</code> — index where slice begins (default: 0)</li>\\n<li><code>stop</code> — index where slice ends, exclusive (default: len)</li>\\n<li><code>step</code> — increment between elements (default: 1)</li>\\n</ul>\\n<p><code>my_list[::-1]</code> reverses the list because it starts from the end, goes to the beginning, with a step of <code>-1</code>.</p>\\n<pre><code>nums = [0, 1, 2, 3, 4, 5]\\n\\nnums[2:5]       # [2, 3, 4]        — index 2 to 4\\nnums[:3]        # [0, 1, 2]        — first 3 elements\\nnums[3:]        # [3, 4, 5]        — from index 3 onward\\nnums[::2]       # [0, 2, 4]        — every second element\\nnums[::-1]      # [5, 4, 3, 2, 1, 0] — reversed\\n\\n# Negative indices count from the end\\nnums[-1]        # 5  — last element\\nnums[-3:]       # [3, 4, 5] — last 3 elements\\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Python Basics",
        "Lists",
        "Slicing"
      ]
    },
    {
      "question": "What are dictionary comprehensions? Show how to create a dictionary mapping numbers to their squares for even numbers from 1 to 10.",
      "answer": "<p>Dictionary comprehensions provide a concise way to create dictionaries using an expression and an optional condition.</p>\\n<p>Syntax: <code>{key_expr: value_expr for item in iterable if condition}</code></p>\\n<pre><code># Square mapping for even numbers only\\nsquares = {x: x**2 for x in range(1, 11) if x % 2 == 0}\\n# Result: {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}\\n\\n# Alternative: swap keys and values of an existing dict\\noriginal = {'a': 1, 'b': 2}\\nreversed_dict = {v: k for k, v in original.items()}\\n# Result: {1: 'a', 2: 'b'}\\n\\n# Filtering: only include values > 1\\nfiltered = {k: v for k, v in original.items() if v > 1}\\n# Result: {'b': 2}\\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Dict Comprehensions",
        "Python Basics",
        "Dicts"
      ]
    },
    {
      "question": "Explain the difference between <code>is</code> and <code>==</code> in Python. When should each be used?",
      "answer": "<table><tr><th>Feature</th><th><code>is</code></th><th><code>==</code></th></tr>\n<tr><td>Purpose</td><td><code>is</code> usage</td><td><code>==</code> usage</td></tr>\n<tr><td>Behavior</td><td><code>is</code> behavior</td><td><code>==</code> behavior</td></tr>\n</table>",
      "difficulty": "Beginner",
      "tags": [
        "Python Basics",
        "Operators",
        "Memory"
      ]
    },
    {
      "question": "What are Python's mutable vs immutable data types? Why does this matter when passing arguments to functions?",
      "answer": "<table><tr><th>Feature</th><th>what are python's mutable</th><th>immutable data types</th></tr>\n<tr><td>Purpose</td><td>what are python's mutable usage</td><td>immutable data types usage</td></tr>\n<tr><td>Behavior</td><td>what are python's mutable behavior</td><td>immutable data types behavior</td></tr>\n</table>",
      "difficulty": "Beginner",
      "tags": [
        "Python Basics",
        "Mutable",
        "Immutable",
        "Functions"
      ]
    },
    {
      "question": "Explain Python's <code>*args</code> and <code>**kwargs</code> with examples of how they work in function definitions.",
      "answer": "<p>They allow functions to accept variable numbers of positional and keyword arguments.</p>\\n<ul>\\n<li><code>*args</code> collects extra positional arguments into a <b>tuple</b>.</li>\\n<li><code>**kwargs</code> collects extra keyword arguments into a <b>dict</b>.</li>\\n</ul>\\n<pre><code>def demo(a, b, *args, **kwargs):\\n    print(f\\\"a={a}, b={b}\\\")\\n    print(f\\\"args tuple: {args}\\\")\\n    print(f\\\"kwargs dict: {kwargs}\\\")\\n\\ndemo(1, 2, 3, 4, x=10, y=20)\\n# Output:\\n# a=1, b=2\\n# args tuple: (3, 4)\\n# kwargs dict: {'x': 10, 'y': 20}\\n\\n# Unpacking when calling a function\\ndef add(x, y, z):\\n    return x + y + z\\n\\nnums = [1, 2, 3]\\nadd(*nums)          # equivalent to add(1, 2, 3)\\n\\nparams = {'x': 1, 'y': 2, 'z': 3}\\nadd(**params)       # equivalent to add(x=1, y=2, z=3)\\n\\n# Combining both for flexible wrappers\\ndef wrapper(*args, **kwargs):\\n    print(\\\"Before\\\")\\n    result = inner(*args, **kwargs)\\n    print(\\\"After\\\")\\n    return result\\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Python Basics",
        "Functions",
        "Args",
        "Kwargs"
      ]
    },
    {
      "question": "What is a Python decorator? Write a decorator that logs function calls with their arguments and return values.",
      "answer": "<p>A decorator is a function that takes another function as input, extends its behavior, and returns a modified function. Decorators use the <code>@</code> syntax.</p>\\n<pre><code>import functools\\nimport time\\n\\ndef log_calls(func):\\n    @functools.wraps(func)  # Preserves original function metadata\\n    def wrapper(*args, **kwargs):\\n        args_repr = [repr(a) for a in args]\\n        kwargs_repr = [f\\\"{k}={v!r}\\\" for k, v in kwargs.items()]\\n        signature = \\\", \\\".join(args_repr + kwargs_repr)\\n        \\n        print(f\\\"[CALL] {func.__name__}({signature})\\\")\\n        start = time.time()\\n        result = func(*args, **kwargs)\\n        elapsed = time.time() - start\\n        \\n        print(f\\\"[RETURN] {func.__name__} → {result!r} ({elapsed:.4f}s)\\\")\\n        return result\\n    return wrapper\\n\\n@log_calls\\ndef greet(name, greeting=\\\"Hello\\\"):\\n    return f\\\"{greeting}, {name}!\\\"\\n\\ngreet(\\\"Alice\\\", greeting=\\\"Hi\\\")\\n# Output:\\n# [CALL] greet('Alice', greeting='Hi')\\n# [RETURN] greet → 'Hi, Alice!' (0.0001s)\\n\\n# Decorators with arguments (require a factory)\\ndef repeat(times):\\n    def decorator(func):\\n        @functools.wraps(func)\\n        def wrapper(*args, **kwargs):\\n            for _ in range(times):\\n                result = func(*args, **kwargs)\\n            return result\\n        return wrapper\\n    return decorator\\n\\n@repeat(times=3)\\ndef say_hello():\\n    print(\\\"Hello!\\\")\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Decorators",
        "Functions",
        "Python"
      ]
    },
    {
      "question": "What is the difference between a generator function and a regular function? How do generators save memory?",
      "answer": "<table><tr><th>Feature</th><th>generator function</th><th>regular function</th></tr>\n<tr><td>Purpose</td><td>generator function usage</td><td>regular function usage</td></tr>\n<tr><td>Behavior</td><td>generator function behavior</td><td>regular function behavior</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Generators",
        "Memory Management",
        "Python"
      ]
    },
    {
      "question": "Explain Python's method resolution order (MRO) in multiple inheritance. What is the C3 linearization algorithm?",
      "answer": "<p>MRO defines the order in which Python looks for methods in a class hierarchy, especially in multiple inheritance scenarios. Python uses the <b>C3 linearization</b> algorithm to ensure:</p>\\n<ul>\\n<li>Children precede their parents</li>\\n<li>Left-to-right ordering of parent classes is preserved</li>\\n<li>A class appears only once in the chain</li>\\n</ul>\\n<pre><code>class A:\\n    def method(self):\\n        print(\\\"A\\\")\\n\\nclass B(A):\\n    def method(self):\\n        print(\\\"B\\\")\\n\\nclass C(A):\\n    def method(self):\\n        print(\\\"C\\\")\\n\\nclass D(B, C):\\n    pass\\n\\nd = D()\\nd.method()          # \\\"B\\\" — B is checked before C (left-to-right)\\n\\n# View MRO\\nprint(D.__mro__)\\n# (&lt;class 'D'>, &lt;class 'B'>, &lt;class 'C'>, &lt;class 'A'>, &lt;class 'object'>)\\n\\n# Use super() to follow MRO\\nclass E(B, C):\\n    def method(self):\\n        print(\\\"E start\\\")\\n        super().method()  # Calls B.method (next in MRO)\\n        print(\\\"E end\\\")\\n\\n# Diamond problem resolution\\nclass Base:\\n    def greet(self):\\n        print(\\\"Hello from Base\\\")\\n\\nclass Left(Base):\\n    def greet(self):\\n        print(\\\"Hello from Left\\\")\\n        super().greet()\\n\\nclass Right(Base):\\n    def greet(self):\\n        print(\\\"Hello from Right\\\")\\n        super().greet()\\n\\nclass Bottom(Left, Right):\\n    def greet(self):\\n        print(\\\"Hello from Bottom\\\")\\n        super().greet()\\n\\nb = Bottom()\\nb.greet()\\n# Output: Bottom → Left → Right → Base (each called once!)\\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "OOP",
        "Inheritance",
        "MRO",
        "Python"
      ]
    },
    {
      "question": "What is polymorphism in Python? Demonstrate duck typing with a practical example.",
      "answer": "<p>Polymorphism allows objects of different classes to be treated uniformly through a common interface. Python uses <b>duck typing</b> — \\\"if it walks like a duck and quacks like a duck, it is a duck.\\\"</p>\\n<p>No explicit interface inheritance is required; Python checks behavior at runtime.</p>\\n<pre><code>class Dog:\\n    def speak(self):\\n        return \\\"Woof!\\\"\\n    def move(self):\\n        return \\\"Running on 4 legs\\\"\\n\\nclass Cat:\\n    def speak(self):\\n        return \\\"Meow!\\\"\\n    def move(self):\\n        return \\\"Sneaking silently\\\"\\n\\nclass Duck:\\n    def speak(self):\\n        return \\\"Quack!\\\"\\n    def move(self):\\n        return \\\"Waddling\\\"\\n\\n# Polymorphic function — works with any object that has speak()\\ndef animal_concert(animals):\\n    for animal in animals:\\n        print(f\\\"{animal.__class__.__name__} says: {animal.speak()}\\\")\\n\\nzoo = [Dog(), Cat(), Duck()]\\nanimal_concert(zoo)\\n\\n# Duck typing with file-like objects\\ndef read_data(source):\\n    # Works with files, StringIO, network streams — anything with .read()\\n    return source.read()\\n\\nfrom io import StringIO\\nfile_obj = StringIO(\\\"Hello, World!\\\")\\nprint(read_data(file_obj))  # \\\"Hello, World!\\\"\\n\\n# More practical: custom context with len()\\nclass BookCollection:\\n    def __init__(self, books):\\n        self.books = books\\n    def __len__(self):\\n        return len(self.books)\\n\\ncollection = BookCollection([\\\"Book1\\\", \\\"Book2\\\"])\\nprint(len(collection))  # 2 — len() calls __len__()\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "OOP",
        "Polymorphism",
        "Duck Typing",
        "Python"
      ]
    },
    {
      "question": "Explain encapsulation in Python. How do public, protected, and private attributes work?",
      "answer": "<p>Encapsulation bundles data and methods that operate on that data, restricting direct access to some components. Python uses naming conventions rather than strict access control.</p>\\n<ul>\\n<li><b>Public</b>: <code>name</code> — accessible from anywhere</li>\\n<li><b>Protected</b>: <code>_name</code> — convention: \\\"internal use, subclass OK\\\"</li>\\n<li><b>Private</b>: <code>__name</code> — name mangled to <code>_ClassName__name</code>, harder to access externally</li>\\n</ul>\\n<pre><code>class BankAccount:\\n    def __init__(self, owner, balance):\\n        self.owner = owner          # Public\\n        self._account_type = \\\"savings\\\"  # Protected (convention)\\n        self.__balance = balance    # Private (name mangled)\\n    \\n    # Getter (property)\\n    @property\\n    def balance(self):\\n        return self.__balance\\n    \\n    # Setter with validation\\n    @balance.setter\\n    def balance(self, value):\\n        if value < 0:\\n            raise ValueError(\\\"Balance cannot be negative\\\")\\n        self.__balance = value\\n    \\n    def deposit(self, amount):\\n        if amount > 0:\\n            self.__balance += amount\\n        return self.__balance\\n\\naccount = BankAccount(\\\"Alice\\\", 1000)\\n\\n# Access levels\\nprint(account.owner)           # \\\"Alice\\\" — public, direct access\\nprint(account._account_type)   # \\\"savings\\\" — protected, accessible but discouraged\\n# print(account.__balance)     # AttributeError!\\n\\n# Private is accessible via mangled name (not recommended)\\nprint(account._BankAccount__balance)  # 1000 — name mangling\\n\\n# Preferred: use property\\nprint(account.balance)         # 1000 — calls getter\\naccount.balance = 2000         # calls setter\\n# account.balance = -100       # ValueError!\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "OOP",
        "Encapsulation",
        "Properties",
        "Python"
      ]
    },
    {
      "question": "What are Python properties (<code>@property</code>)? How do they differ from getter/setter methods in Java?",
      "answer": "<p>Properties let you define methods that are accessed like attributes, providing a clean interface for computed values and controlled access.</p>\\n<p>Unlike Java's explicit <code>getX()</code>/<code>setX()</code> methods, Python properties use the <code>@property</code> decorator and are accessed as <code>obj.attr</code> rather than <code>obj.getAttr()</code>.</p>\\n<pre><code>class Temperature:\\n    def __init__(self, celsius):\\n        self._celsius = celsius\\n    \\n    @property\\n    def celsius(self):\\n        \\\"\\\"\\\"Get temperature in Celsius.\\\"\\\"\\\"\\n        return self._celsius\\n    \\n    @celsius.setter\\n    def celsius(self, value):\\n        if value < -273.15:\\n            raise ValueError(\\\"Below absolute zero!\\\")\\n        self._celsius = value\\n    \\n    @property\\n    def fahrenheit(self):\\n        \\\"\\\"\\\"Get temperature in Fahrenheit (computed, read-only).\\\"\\\"\\\"\\n        return self._celsius * 9/5 + 32\\n    \\n    @fahrenheit.setter\\n    def fahrenheit(self, value):\\n        \\\"\\\"\\\"Set temperature via Fahrenheit.\\\"\\\"\\\"\\n        self._celsius = (value - 32) * 5/9\\n\\ntemp = Temperature(25)\\nprint(temp.celsius)      # 25 — like an attribute, but calls getter\\nprint(temp.fahrenheit)   # 77.0 — computed property\\n\\ntemp.celsius = 30        # calls setter\\nprint(temp.fahrenheit)   # 86.0\\n\\ntemp.fahrenheit = 100    # calls fahrenheit setter\\nprint(temp.celsius)      # 37.78...\\n\\n# Deleter (rare but possible)\\nclass Demo:\\n    def __init__(self):\\n        self._value = 42\\n    \\n    @property\\n    def value(self):\\n        return self._value\\n    \\n    @value.deleter\\n    def value(self):\\n        print(\\\"Deleting value\\\")\\n        del self._value\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "OOP",
        "Properties",
        "Decorators",
        "Python"
      ]
    },
    {
      "question": "What are metaclasses in Python? When would you use one?",
      "answer": "<p>A metaclass is a class whose instances are classes. The default metaclass is <code>type</code>. Metaclasses control class creation, allowing you to modify class behavior before instantiation.</p>\\n<p>Use cases: enforcing coding standards, automatic registration, API design, singletons.</p>\\n<pre><code># Custom metaclass: auto-register all subclasses\\nclass PluginMeta(type):\\n    registry = {}\\n    \\n    def __new__(mcs, name, bases, namespace):\\n        cls = super().__new__(mcs, name, bases, namespace)\\n        if name != 'BasePlugin':  # Don't register the base class\\n            mcs.registry[name] = cls\\n        return cls\\n\\nclass BasePlugin(metaclass=PluginMeta):\\n    def execute(self):\\n        raise NotImplementedError\\n\\nclass EmailPlugin(BasePlugin):\\n    def execute(self):\\n        return \\\"Sending email\\\"\\n\\nclass SMSPlugin(BasePlugin):\\n    def execute(self):\\n        return \\\"Sending SMS\\\"\\n\\n# All subclasses are auto-registered\\nprint(PluginMeta.registry)\\n# {'EmailPlugin': &lt;class '__main__.EmailPlugin'>, 'SMSPlugin': ...}\\n\\n# Metaclass with validation\\nclass ValidateMeta(type):\\n    def __new__(mcs, name, bases, namespace):\\n        if 'required_method' not in namespace:\\n            raise TypeError(f\\\"{name} must implement required_method()\\\")\\n        return super().__new__(mcs, name, bases, namespace)\\n\\nclass ValidClass(metaclass=ValidateMeta):\\n    def required_method(self):\\n        pass\\n\\n# class InvalidClass(metaclass=ValidateMeta):\\n#     pass  # TypeError!\\n\\n# Using type() directly to create classes dynamically\\nMyClass = type('MyClass', (), {'x': 10})\\nobj = MyClass()\\nprint(obj.x)  # 10\\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "OOP",
        "Metaclasses",
        "Advanced Python"
      ]
    },
    {
      "question": "Explain Python's exception hierarchy. How do you create custom exceptions and when should you use exception chaining?",
      "answer": "<p>All built-in exceptions inherit from <code>BaseException</code>. User-defined exceptions should inherit from <code>Exception</code> (not <code>BaseException</code>).</p>\\n<p>Exception chaining (via <code>raise ... from ...</code>) preserves context when translating exceptions.</p>\\n<pre><code># Custom exception hierarchy\\nclass BusinessError(Exception):\\n    \\\"\\\"\\\"Base for business logic errors.\\\"\\\"\\\"\\n    pass\\n\\nclass ValidationError(BusinessError):\\n    \\\"\\\"\\\"Invalid input data.\\\"\\\"\\\"\\n    def __init__(self, field, message):\\n        self.field = field\\n        super().__init__(f\\\"Validation failed for '{field}': {message}\\\")\\n\\nclass InsufficientFundsError(BusinessError):\\n    \\\"\\\"\\\"Account balance too low.\\\"\\\"\\\"\\n    def __init__(self, balance, amount):\\n        self.balance = balance\\n        self.amount = amount\\n        super().__init__(f\\\"Balance {balance} insufficient for {amount}\\\")\\n\\n# Exception chaining: translate low-level to high-level\\ndef parse_config(path):\\n    try:\\n        with open(path) as f:\\n            import json\\n            return json.load(f)\\n    except FileNotFoundError as e:\\n        raise ConfigError(f\\\"Config missing: {path}\\\") from e\\n    except json.JSONDecodeError as e:\\n        raise ConfigError(f\\\"Invalid JSON in {path}\\\") from e\\n\\nclass ConfigError(Exception):\\n    pass\\n\\n# try/except/else/finally pattern\\ndef process_data(data):\\n    try:\\n        result = risky_operation(data)\\n    except ValueError as e:\\n        logger.error(f\\\"Bad data: {e}\\\")\\n        return None\\n    except Exception as e:\\n        logger.exception(\\\"Unexpected error\\\")\\n        raise  # Re-raise preserving traceback\\n    else:\\n        # Runs only if no exception occurred\\n        cache_result(result)\\n        return result\\n    finally:\\n        # Always runs (cleanup)\\n        close_resources()\\n\\n# Context: exception hierarchy\\n# BaseException\\n# ├── SystemExit\\n# ├── KeyboardInterrupt\\n# ├── GeneratorExit\\n# └── Exception\\n#     ├── ArithmeticError\\n#     ├── LookupError\\n#     ├── TypeError\\n#     ├── ValueError\\n#     └── ... (many more)\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Exception Handling",
        "OOP",
        "Python"
      ]
    },
    {
      "question": "How do context managers work in Python? Write a custom context manager for database transactions.",
      "answer": "<p>Context managers ensure setup and teardown code runs reliably using the <code>with</code> statement. They implement <code>__enter__</code> and <code>__exit__</code> methods.</p>\\n<p>The <code>contextlib</code> module provides shortcuts for simple cases.</p>\\n<pre><code>import contextlib\\n\\n# Class-based context manager\\nclass DatabaseTransaction:\\n    def __init__(self, connection):\\n        self.connection = connection\\n        self.cursor = None\\n    \\n    def __enter__(self):\\n        self.cursor = self.connection.cursor()\\n        self.connection.begin()\\n        return self.cursor\\n    \\n    def __exit__(self, exc_type, exc_val, exc_tb):\\n        if exc_type is None:\\n            self.connection.commit()\\n            print(\\\"Transaction committed\\\")\\n        else:\\n            self.connection.rollback()\\n            print(f\\\"Transaction rolled back: {exc_val}\\\")\\n        self.cursor.close()\\n        return False  # Don't suppress exceptions\\n\\n# Usage\\n# with DatabaseTransaction(conn) as cursor:\\n#     cursor.execute(\\\"INSERT ...\\\")\\n\\n# Decorator-based with contextlib\\n@contextlib.contextmanager\\ndef managed_resource(name):\\n    print(f\\\"Acquiring {name}\\\")\\n    resource = {\\\"name\\\": name, \\\"active\\\": True}\\n    try:\\n        yield resource\\n    finally:\\n        resource[\\\"active\\\"] = False\\n        print(f\\\"Releasing {name}\\\")\\n\\nwith managed_resource(\\\"FileHandle\\\") as r:\\n    print(f\\\"Using {r['name']}\\\")\\n# Output: Acquiring... Using... Releasing...\\n\\n# Practical: timing context manager\\nimport time\\n\\n@contextlib.contextmanager\\ndef timer(label):\\n    start = time.time()\\n    try:\\n        yield\\n    finally:\\n        elapsed = time.time() - start\\n        print(f\\\"{label}: {elapsed:.4f}s\\\")\\n\\nwith timer(\\\"Heavy computation\\\"):\\n    sum(range(1000000))\\n\\n# Nested context managers\\nfrom contextlib import ExitStack\\n\\nwith ExitStack() as stack:\\n    files = [stack.enter_context(open(f)) for f in ['a.txt', 'b.txt']]\\n    # All files closed automatically\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Context Managers",
        "File I/O",
        "Python"
      ]
    },
    {
      "question": "What is the difference between multithreading and multiprocessing in Python? When should you use each?",
      "answer": "<table><tr><th>Feature</th><th>multithreading</th><th>multiprocessing</th></tr>\n<tr><td>Purpose</td><td>multithreading usage</td><td>multiprocessing usage</td></tr>\n<tr><td>Behavior</td><td>multithreading behavior</td><td>multiprocessing behavior</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Multithreading",
        "Multiprocessing",
        "GIL",
        "Concurrency",
        "Python"
      ]
    },
    {
      "question": "What is Python's Global Interpreter Lock (GIL)? Why does it exist and how can you work around it?",
      "answer": "<p>The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. Only one thread holds the GIL at a time.</p>\\n<p><b>Why it exists:</b></p>\\n<ul>\\n<li>Simplifies memory management (reference counting)</li>\\n<li>Avoids race conditions in C extension code</li>\\n<li>Makes single-threaded programs faster</li>\\n</ul>\\n<p><b>Workarounds:</b></p>\\n<pre><code># 1. Multiprocessing — separate processes, separate GIL\\nfrom multiprocessing import Pool\\n\\ndef cpu_intensive(n):\\n    return sum(i * i for i in range(n))\\n\\nif __name__ == \\\"__main__\\\":\\n    with Pool(4) as p:\\n        results = p.map(cpu_intensive, [1000000] * 4)\\n\\n# 2. C extensions that release the GIL (NumPy, image processing)\\nimport numpy as np\\narr = np.random.rand(1000000)\\nresult = np.fft.fft(arr)  # Releases GIL during computation\\n\\n# 3. asyncio for I/O-bound concurrency\\nimport asyncio\\n\\nasync def fetch_all(urls):\\n    tasks = [asyncio.create_task(fetch_one(u)) for u in urls]\\n    return await asyncio.gather(*tasks)\\n\\n# 4. Alternative interpreters: Jython, IronPython (no GIL)\\n# 5. Cython with nogil blocks\\n# cython code:\\n# with nogil:\\n#     for i in range(n):\\n#         compute(i)\\n\\n# Checking if GIL affects you\\nimport threading\\n\\ndef count(n):\\n    while n > 0: n -= 1\\n\\n# If this takes ~2x time with threads vs sequential,\\n# the GIL is the bottleneck\\nt1 = threading.Thread(target=count, args=(50_000_000,))\\nt2 = threading.Thread(target=count, args=(50_000_000,))\\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "GIL",
        "Memory Management",
        "Concurrency",
        "Advanced Python"
      ]
    },
    {
      "question": "Explain Python's memory management: reference counting, garbage collection, and the <code>gc</code> module.",
      "answer": "<p>Python uses two mechanisms for memory management.</p>\\n<p><b>1. Reference Counting:</b> Every object has a count of references pointing to it. When the count hits zero, memory is freed immediately.</p>\\n<p><b>2. Generational Garbage Collection:</b> Detects and breaks reference cycles (objects referring to each other) that reference counting cannot handle.</p>\\n<pre><code>import sys\\nimport gc\\n\\n# Reference counting\\na = []\\nprint(sys.getrefcount(a))  # 2 (a + getrefcount argument)\\n\\nb = a\\nprint(sys.getrefcount(a))  # 3 (a + b + getrefcount)\\n\\ndel b\\nprint(sys.getrefcount(a))  # 2 again\\n\\n# Reference cycle (gc handles this)\\nclass Node:\\n    def __init__(self):\\n        self.ref = None\\n    def __del__(self):\\n        print(\\\"Node deleted\\\")\\n\\nn1 = Node()\\nn2 = Node()\\nn1.ref = n2\\nn2.ref = n1\\n\\ndel n1, n2  # Reference count never hits 0!\\ngc.collect()  # Forces garbage collection, breaks cycle\\n\\n# Inspect garbage collection\\ngc.get_threshold()   # (700, 10, 10) — thresholds for gen 0, 1, 2\\ngc.get_count()       # Current collection counts\\n\\n# Disable/enable GC (rarely needed)\\ngc.disable()\\n# ... do performance-critical work ...\\ngc.enable()\\n\\n# Weak references: don't increase refcount\\nimport weakref\\nobj = Node()\\nweak = weakref.ref(obj)\\nprint(weak())  # Node object (or None if collected)\\ndel obj\\nprint(weak())  # None\\n\\n# Generations explained:\\n# Gen 0: newest objects, checked frequently\\n# Gen 1: survived one collection\\n# Gen 2: long-lived objects, checked rarely\\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Memory Management",
        "Garbage Collection",
        "Reference Counting",
        "Advanced Python"
      ]
    },
    {
      "question": "What are Python closures? How do they capture variables from enclosing scopes?",
      "answer": "<p>A closure is a function that remembers the environment in which it was created, even when called outside that scope. It captures variables from enclosing (non-local) scopes.</p>\\n<pre><code>def make_multiplier(factor):\\n    \\\"\\\"\\\"Returns a closure that multiplies by factor.\\\"\\\"\\\"\\n    def multiply(x):\\n        return x * factor  # 'factor' captured from enclosing scope\\n    return multiply\\n\\ndouble = make_multiplier(2)\\ntriple = make_multiplier(3)\\n\\nprint(double(5))   # 10 — remembers factor=2\\nprint(triple(5))  # 15 — remembers factor=3\\n\\n# Closure with mutable state\\n def make_counter():\\n    count = 0\\n    def counter():\\n        nonlocal count  # Required to modify enclosing variable\\n        count += 1\\n        return count\\n    return counter\\n\\nc1 = make_counter()\\nc2 = make_counter()\\nprint(c1())  # 1\\nprint(c1())  # 2 — c1's count persists\\nprint(c2())  # 1 — c2 has separate count\\n\\n# Late binding gotcha in closures\\nfuncs = []\\nfor i in range(3):\\n    funcs.append(lambda: i)\\nprint([f() for f in funcs])  # [2, 2, 2] — all reference same i!\\n\\n# Fix: capture current value\\nfuncs_fixed = []\\nfor i in range(3):\\n    funcs_fixed.append(lambda x=i: x)\\nprint([f() for f in funcs_fixed])  # [0, 1, 2]\\n\\n# Practical: function factory with configuration\\ndef create_logger(prefix):\\n    def log(message):\\n        print(f\\\"[{prefix}] {message}\\\")\\n    return log\\n\\ninfo_log = create_logger(\\\"INFO\\\")\\nerror_log = create_logger(\\\"ERROR\\\")\\ninfo_log(\\\"Started\\\")   # [INFO] Started\\nerror_log(\\\"Failed\\\")   # [ERROR] Failed\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Closures",
        "Functions",
        "Scopes",
        "Python"
      ]
    },
    {
      "question": "Explain Python's <code>with</code> statement for file I/O. Why is it safer than manual <code>open()</code>/<code>close()</code>?",
      "answer": "<p>The <code>with</code> statement guarantees resource cleanup via context managers, even if exceptions occur. Manual file handling risks leaking file descriptors if an exception is thrown before <code>close()</code>.</p>\\n<pre><code># Unsafe: manual handling\\ndef read_file_manual(path):\\n    f = open(path, 'r')\\n    data = f.read()      # If this raises, f is never closed!\\n    f.close()\\n    return data\\n\\n# Safe: with statement\\ndef read_file_safe(path):\\n    with open(path, 'r') as f:\\n        data = f.read()\\n    # f.close() called automatically, even on exception\\n    return data\\n\\n# Multiple context managers\\nwith open('input.txt') as src, open('output.txt', 'w') as dst:\\n    dst.write(src.read().upper())\\n\\n# Reading patterns\\nwith open('data.txt', 'r') as f:\\n    # Read all lines into list\\n    lines = f.readlines()\\n    \\n    # Or iterate lazily (memory efficient)\\n    for line in f:\\n        process(line)\\n    \\n    # Or read in chunks\\n    while chunk := f.read(4096):\\n        process(chunk)\\n\\n# Writing with buffering\\nwith open('output.txt', 'w', buffering=8192) as f:\\n    for item in large_dataset:\\n        f.write(f\\\"{item}\\\\n\\\")\\n    # f.flush() happens on close\\n\\n# Binary mode\\nwith open('image.png', 'rb') as f:\\n    header = f.read(16)  # First 16 bytes\\n\\n# Encoding handling\\nwith open('unicode.txt', 'r', encoding='utf-8', errors='replace') as f:\\n    text = f.read()\\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "File I/O",
        "Context Managers",
        "Python"
      ]
    },
    {
      "question": "What are Python's <code>__str__</code> and <code>__repr__</code> dunder methods? What's the difference?",
      "answer": "<p>Both define string representations of objects, but serve different audiences.</p>\\n<ul>\\n<li><code>__repr__</code>: Unambiguous, for developers. Should ideally be a valid Python expression that recreates the object. Falls back to <code>__str__</code> if missing.</li>\\n<li><code>__str__</code>: Readable, for end users. Falls back to <code>__repr__</code> if missing.</li>\\n</ul>\\n<pre><code>class Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __repr__(self):\\n        # Exact, unambiguous representation\\n        return f\\\"Point({self.x!r}, {self.y!r})\\\"\\n    \\n    def __str__(self):\\n        # Human-readable format\\n        return f\\\"({self.x}, {self.y})\\\"\\n\\np = Point(3, 4)\\nprint(str(p))    # (3, 4) — user-friendly\\nprint(repr(p))   # Point(3, 4) — developer-friendly\\n\\n# In containers, __repr__ is used\\npoints = [Point(1, 2), Point(3, 4)]\\nprint(points)  # [Point(1, 2), Point(3, 4)]\\n\\n# If __str__ is missing, __repr__ is used for both\\nclass Minimal:\\n    def __repr__(self):\\n        return \\\"Minimal()\\\"\\n\\nm = Minimal()\\nprint(str(m))   # Minimal() — falls back to __repr__\\n\\n# Best practice: always implement __repr__\\n# Implement __str__ when you want a prettier display\\nclass DateRange:\\n    def __init__(self, start, end):\\n        self.start = start\\n        self.end = end\\n    \\n    def __repr__(self):\\n        return f\\\"DateRange({self.start!r}, {self.end!r})\\\"\\n    \\n    def __str__(self):\\n        return f\\\"{self.start} → {self.end}\\\"\\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "OOP",
        "Dunder Methods",
        "Python"
      ]
    },
    {
      "question": "What are Python's <code>__iter__</code> and <code>__next__</code> methods? Build a custom iterator that generates Fibonacci numbers.",
      "answer": "<p>Objects implementing <code>__iter__</code> and <code>__next__</code> are iterators. <code>__iter__</code> returns the iterator object itself; <code>__next__</code> returns the next value or raises <code>StopIteration</code>.</p>\\n<pre><code>class FibonacciIterator:\\n    \\\"\\\"\\\"Iterator generating Fibonacci sequence up to max_n terms.\\\"\\\"\\\"\\n    \\n    def __init__(self, max_n):\\n        self.max_n = max_n\\n        self.count = 0\\n        self.a = 0\\n        self.b = 1\\n    \\n    def __iter__(self):\\n        return self  # The object is its own iterator\\n    \\n    def __next__(self):\\n        if self.count >= self.max_n:\\n            raise StopIteration\\n        \\n        value = self.a\\n        self.a, self.b = self.b, self.a + self.b\\n        self.count += 1\\n        return value\\n\\n# Usage\\nfib = FibonacciIterator(10)\\nprint(list(fib))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\\n\\n# Generator version (much simpler)\\ndef fibonacci_gen(max_n):\\n    a, b = 0, 1\\n    for _ in range(max_n):\\n        yield a\\n        a, b = b, a + b\\n\\n# Iterable object (separate from iterator)\\nclass RangeWrapper:\\n    def __init__(self, start, end):\\n        self.start = start\\n        self.end = end\\n    \\n    def __iter__(self):\\n        # Returns a NEW iterator each time\\n        return iter(range(self.start, self.end))\\n\\nrw = RangeWrapper(1, 4)\\nlist(rw)  # [1, 2, 3]\\nlist(rw)  # [1, 2, 3] — still works!\\n\\n# Iterator protocol in for loops\\nfor num in FibonacciIterator(5):\\n    print(num)\\n\\n# itertools for advanced iteration\\nimport itertools\\nfor pair in itertools.pairwise(FibonacciIterator(5)):\\n    print(pair)  # (0, 1), (1, 1), (1, 2), (2, 3)\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Iterators",
        "Generators",
        "OOP",
        "Python"
      ]
    },
    {
      "question": "What is monkey patching in Python? When is it appropriate and what are the risks?",
      "answer": "<p>Monkey patching modifies or extends code at runtime without changing the original source. Common targets are methods, functions, or module attributes.</p>\\n<pre><code>import time\\n\\n# Example 1: Patch a method for testing\\nclass PaymentGateway:\\n    def charge(self, amount):\\n        # Real API call\\n        return {\\\"status\\\": \\\"success\\\", \\\"amount\\\": amount}\\n\\n# Test patch: prevent real charges\\ndef mock_charge(self, amount):\\n    return {\\\"status\\\": \\\"success\\\", \\\"amount\\\": amount, \\\"mock\\\": True}\\n\\nPaymentGateway.charge = mock_charge\\n\\n# Example 2: Patch built-in for debugging\\noriginal_sleep = time.sleep\\n\\ndef instrumented_sleep(seconds):\\n    print(f\\\"[DEBUG] Sleeping for {seconds}s\\\")\\n    return original_sleep(seconds)\\n\\ntime.sleep = instrumented_sleep\\n\\n# Example 3: Add method to existing class\\nclass User:\\n    def __init__(self, name):\\n        self.name = name\\n\\n# Extend without subclassing\\ndef greet(self):\\n    return f\\\"Hello, {self.name}!\\\"\\n\\nUser.greet = greet\\nuser = User(\\\"Alice\\\")\\nprint(user.greet())  # Hello, Alice!\\n\\n# Risks and best practices:\\n# 1. Fragile: breaks if original code changes\\n# 2. Surprising: other code may not expect modified behavior\\n# 3. Thread safety: patches may not be atomic\\n# 4. Debugging difficulty: tracebacks show wrong line numbers\\n\\n# Safer alternative: dependency injection\\nclass PaymentService:\\n    def __init__(self, gateway=None):\\n        self.gateway = gateway or PaymentGateway()\\n    \\n    def process(self, amount):\\n        return self.gateway.charge(amount)\\n\\n# In tests: inject mock\\nservice = PaymentService(mock_gateway)\\n\\n# Another pattern: decorators preserve original\\nfrom functools import wraps\\n\\ndef logged(func):\\n    @wraps(func)\\n    def wrapper(*args, **kwargs):\\n        print(f\\\"Calling {func.__name__}\\\")\\n        return func(*args, **kwargs)\\n    return wrapper\\n\\n# Apply without modifying source\\nUser.greet = logged(User.greet)\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Monkey Patching",
        "Advanced Python",
        "Testing"
      ]
    },
    {
      "question": "Explain Python's <code>asyncio</code> library. How does it differ from threading, and when should you use it?",
      "answer": "<p><code>asyncio</code> provides single-threaded concurrent I/O using an event loop and coroutines. Unlike threads (preemptive multitasking), asyncio uses cooperative multitasking — coroutines yield control at <code>await</code> points.</p>\\n<pre><code>import asyncio\\nimport aiohttp\\n\\n# Basic coroutine\\nasync def say_hello():\\n    print(\\\"Hello\\\")\\n    await asyncio.sleep(1)  # Non-blocking sleep\\n    print(\\\"World\\\")\\n\\n# Running: asyncio.run() for scripts\\nasyncio.run(say_hello())\\n\\n# Concurrent execution with gather\\nasync def fetch_url(session, url):\\n    async with session.get(url) as response:\\n        return await response.text()\\n\\nasync def main():\\n    urls = [\\\"https://example.com\\\"] * 5\\n    async with aiohttp.ClientSession() as session:\\n        tasks = [fetch_url(session, u) for u in urls]\\n        results = await asyncio.gather(*tasks)\\n        return results\\n\\n# asyncio vs threading comparison:\\n# asyncio:  Single thread, event loop, cooperative, lower overhead\\n# threading: Multiple threads, preemptive, GIL-limited for CPU\\n\\n# When to use what:\\n# asyncio:   High-concurrency I/O (10,000+ connections)\\n# threading: Moderate I/O, blocking libraries, simpler code\\n# multiprocessing: CPU-bound work\\n\\n# Real-world pattern: producer-consumer with asyncio\\nasync def producer(queue, n):\\n    for i in range(n):\\n        await queue.put(i)\\n        await asyncio.sleep(0.1)\\n    await queue.put(None)  # Sentinel\\n\\nasync def consumer(queue):\\n    while True:\\n        item = await queue.get()\\n        if item is None:\\n            break\\n        print(f\\\"Consumed: {item}\\\")\\n\\nasync def run_pipeline():\\n    queue = asyncio.Queue(maxsize=5)\\n    await asyncio.gather(\\n        producer(queue, 10),\\n        consumer(queue)\\n    )\\n\\n# Timeout handling\\ntry:\\n    result = await asyncio.wait_for(slow_operation(), timeout=5.0)\\nexcept asyncio.TimeoutError:\\n    print(\\\"Operation timed out\\\")\\n\\n# Background task\\nasync def background_task():\\n    while True:\\n        await asyncio.sleep(60)\\n        print(\\\"Periodic cleanup\\\")\\n\\n# Start and forget (with cancellation on exit)\\ntask = asyncio.create_task(background_task())\\n# ... later ...\\ntask.cancel()\\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Asyncio",
        "Concurrency",
        "Advanced Python"
      ]
    },
    {
      "question": "What are Python's special methods for sequence emulation (<code>__len__</code>, <code>__getitem__</code>, <code>__setitem__</code>)? Implement a custom list with bounds checking.",
      "answer": "<p>These dunder methods let your class behave like a built-in sequence (list, tuple). Python calls them when you use <code>len()</code>, indexing (<code>[]</code>), slicing, or iteration.</p>\\n<pre><code>class BoundedList:\\n    \\\"\\\"\\\"A list with index bounds checking and negative index support.\\\"\\\"\\\"\\n    \\n    def __init__(self, max_size=100):\\n        self._items = []\\n        self._max_size = max_size\\n    \\n    def __len__(self):\\n        return len(self._items)\\n    \\n    def __getitem__(self, index):\\n        if isinstance(index, slice):\\n            return self._items[index]\\n        \\n        # Handle negative indices\\n        if index < 0:\\n            index = len(self._items) + index\\n        \\n        if not (0 <= index < len(self._items)):\\n            raise IndexError(f\\\"Index {index} out of range [0, {len(self._items)})\\\")\\n        \\n        return self._items[index]\\n    \\n    def __setitem__(self, index, value):\\n        if isinstance(index, slice):\\n            self._items[index] = value\\n            return\\n        \\n        if index < 0:\\n            index = len(self._items) + index\\n        \\n        if not (0 <= index < len(self._items)):\\n            raise IndexError(f\\\"Index {index} out of range\\\")\\n        \\n        self._items[index] = value\\n    \\n    def __delitem__(self, index):\\n        del self._items[index]\\n    \\n    def append(self, item):\\n        if len(self._items) >= self._max_size:\\n            raise OverflowError(f\\\"Max size {self._max_size} reached\\\")\\n        self._items.append(item)\\n    \\n    def __iter__(self):\\n        return iter(self._items)\\n    \\n    def __repr__(self):\\n        return f\\\"BoundedList({self._items!r}, max_size={self._max_size})\\\"\\n    \\n    def __contains__(self, item):\\n        return item in self._items\\n\\n# Usage\\nbl = BoundedList(max_size=5)\\nbl.append(10)\\nbl.append(20)\\nbl.append(30)\\n\\nprint(len(bl))       # 3\\nprint(bl[0])         # 10\\nprint(bl[-1])        # 30 — negative indexing works!\\nprint(bl[1:3])       # [20, 30] — slicing works!\\n\\nbl[1] = 25           # __setitem__\\nprint(25 in bl)      # True — __contains__\\n\\n# bl.append(1) through bl.append(5) would raise OverflowError\\nfor item in bl:      # __iter__\\n    print(item)\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "OOP",
        "Dunder Methods",
        "Sequences",
        "Python"
      ]
    },
    {
      "question": "What is the difference between deep copy and shallow copy in Python? Demonstrate with nested structures.",
      "answer": "<table><tr><th>Feature</th><th>deep copy</th><th>shallow copy</th></tr>\n<tr><td>Purpose</td><td>deep copy usage</td><td>shallow copy usage</td></tr>\n<tr><td>Behavior</td><td>deep copy behavior</td><td>shallow copy behavior</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Memory Management",
        "Copying",
        "Python"
      ]
    },
    {
      "question": "Explain Python's <code>functools.lru_cache</code>. When should you use it and what are its limitations?",
      "answer": "<p><code>lru_cache</code> is a decorator that memoizes function results, storing up to <code>maxsize</code> recent calls. \\\"LRU\\\" means Least Recently Used entries are discarded when the cache is full.</p>\\n<pre><code>from functools import lru_cache\\nimport time\\n\\n# Fibonacci with caching\\n@lru_cache(maxsize=128)\\ndef fibonacci(n):\\n    if n < 2:\\n        return n\\n    return fibonacci(n - 1) + fibonacci(n - 2)\\n\\n# Without cache: O(2^n) time\\n# With cache: O(n) time, O(n) space\\n\\nstart = time.time()\\nprint(fibonacci(100))   # 354224848179261915075\\nprint(f\\\"Time: {time.time() - start:.4f}s\\\")\\n\\n# Cache info\\nprint(fibonacci.cache_info())\\n# CacheInfo(hits=98, misses=101, maxsize=128, currsize=101)\\n\\n# Clear cache\\nfibonacci.cache_clear()\\n\\n# Limitations and gotchas:\\n# 1. Arguments must be hashable\\n@lru_cache\\ndef process_list(items):  # TypeError! lists are unhashable\\n    return sum(items)\\n\\n# Fix: convert to tuple\\n@lru_cache\\ndef process_tuple(items):\\n    return sum(items)\\n\\nprocess_tuple(tuple([1, 2, 3]))  # Works!\\n\\n# 2. Memory growth — unbounded if maxsize=None\\n@lru_cache(maxsize=None)  # Use only when domain is small\\ndef small_domain_func(x):\\n    return x * 2\\n\\n# 3. No cache eviction policy control (only LRU)\\n\\n# 4. Thread safety: cache operations are not atomic\\n# Use locks for concurrent access\\n\\n# 5. Doesn't work well with methods (self is unhashable)\\nclass Calculator:\\n    def compute(self, n):\\n        return n ** 2\\n\\n# Fix: cache at module level or use __slots__\\ndef cached_compute(n):\\n    return n ** 2\\n\\n# For methods, cache the underlying function\\nclass Calculator:\\n    def compute(self, n):\\n        return _compute_impl(n)\\n\\n@lru_cache(maxsize=256)\\ndef _compute_impl(n):\\n    return n ** 2\\n\\n# TTL alternative: cachetools.TTLCache (from pypi)\\nfrom cachetools import TTLCache\\ncache = TTLCache(maxsize=100, ttl=300)  # 5 minute expiry\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Caching",
        "Performance",
        "functools",
        "Python"
      ]
    },
    {
      "question": "What are Python's <code>__enter__</code> and <code>__exit__</code> protocols? How do context managers handle exceptions?",
      "answer": "<p>Context managers implement the context management protocol, enabling the <code>with</code> statement. They control resource setup and teardown reliably.</p>\\n<pre><code>class Transaction:\\n    \\\"\\\"\\\"Database transaction context manager with exception handling.\\\"\\\"\\\"\\n    \\n    def __init__(self, connection):\\n        self.connection = connection\\n        self.cursor = None\\n    \\n    def __enter__(self):\\n        self.cursor = self.connection.cursor()\\n        self.connection.begin()\\n        return self.cursor\\n    \\n    def __exit__(self, exc_type, exc_val, exc_tb):\\n        \\\"\\\"\\\"\\n        exc_type: Exception class (None if no exception)\\n        exc_val:  Exception instance\\n        exc_tb:   Traceback\\n        \\n        Return True to suppress exception, False to propagate.\\n        \\\"\\\"\\\"\\n        if exc_type is None:\\n            # No exception — commit\\n            self.connection.commit()\\n            print(\\\"Committed successfully\\\")\\n        else:\\n            # Exception occurred — rollback\\n            self.connection.rollback()\\n            print(f\\\"Rolled back due to: {exc_val}\\\")\\n        \\n        self.cursor.close()\\n        return False  # Propagate any exception\\n\\n# Exception suppression example\\nclass SuppressSpecific:\\n    def __init__(self, *exceptions):\\n        self.exceptions = exceptions\\n    \\n    def __enter__(self):\\n        return self\\n    \\n    def __exit__(self, exc_type, exc_val, exc_tb):\\n        if exc_type and issubclass(exc_type, self.exceptions):\\n            print(f\\\"Suppressed: {exc_val}\\\")\\n            return True  # Swallow the exception!\\n        return False\\n\\n# Usage\\nwith SuppressSpecific(ValueError, KeyError):\\n    raise ValueError(\\\"This is suppressed\\\")\\nprint(\\\"Continued after suppression!\\\")\\n\\n# Re-raising with modified context\\nclass RichError:\\n    def __enter__(self):\\n        return self\\n    \\n    def __exit__(self, exc_type, exc_val, exc_tb):\\n        if exc_type is not None:\\n            raise RuntimeError(\\\"Wrapped\\\") from exc_val\\n        return False\\n\\n# Contextlib for simple cases\\nfrom contextlib import contextmanager\\n\\n@contextmanager\\ndef managed(tag):\\n    print(f\\\"Enter: {tag}\\\")\\n    try:\\n        yield tag\\n    except Exception as e:\\n        print(f\\\"Exception in {tag}: {e}\\\")\\n        raise\\n    finally:\\n        print(f\\\"Exit: {tag}\\\")\\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Context Managers",
        "Exception Handling",
        "OOP",
        "Python"
      ]
    }
  ]
};
