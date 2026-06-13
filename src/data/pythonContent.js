export const pythonStructure = {
  module1: {
    title: 'Module 1: Python Fundamentals',
    topics: [
      { id: 'intro-python', title: 'Introduction to Python' },
      { id: 'variables-data-types', title: 'Variables and Data Types' },
      { id: 'operators-expressions', title: 'Operators and Expressions' },
      { id: 'control-flow', title: 'Control Flow (if, for, while)' },
      { id: 'functions-basics', title: 'Functions Basics' },
      { id: 'input-output', title: 'Input and Output' },
      { id: 'string-manipulation', title: 'String Manipulation' }
    ]
  },
  module2: {
    title: 'Module 2: Data Structures and OOP',
    topics: [
      { id: 'lists-tuples', title: 'Lists and Tuples' },
      { id: 'dictionaries-sets', title: 'Dictionaries and Sets' },
      { id: 'list-comprehensions', title: 'List Comprehensions' },
      { id: 'classes-objects', title: 'Classes and Objects' },
      { id: 'inheritance-polymorphism', title: 'Inheritance and Polymorphism' },
      { id: 'encapsulation-abstraction', title: 'Encapsulation and Abstraction' },
      { id: 'magic-methods', title: 'Magic (Dunder) Methods' }
    ]
  },
  module3: {
    title: 'Module 3: File Handling and Modules',
    topics: [
      { id: 'file-reading-writing', title: 'File Reading and Writing' },
      { id: 'csv-json-handling', title: 'CSV and JSON Handling' },
      { id: 'modules-imports', title: 'Modules and Imports' },
      { id: 'packages-organization', title: 'Packages and Code Organization' },
      { id: 'virtual-environments', title: 'Virtual Environments' },
      { id: 'standard-library', title: 'Python Standard Library Overview' }
    ]
  },
  module4: {
    title: 'Module 4: Error Handling and Testing',
    topics: [
      { id: 'exceptions-basics', title: 'Exceptions Basics' },
      { id: 'try-except-finally', title: 'try, except, finally Blocks' },
      { id: 'custom-exceptions', title: 'Custom Exceptions' },
      { id: 'debugging-techniques', title: 'Debugging Techniques' },
      { id: 'unit-testing-unittest', title: 'Unit Testing with unittest' },
      { id: 'unit-testing-pytest', title: 'Unit Testing with pytest' }
    ]
  },
  module5: {
    title: 'Module 5: Advanced Python',
    topics: [
      { id: 'decorators', title: 'Decorators' },
      { id: 'generators-iterators', title: 'Generators and Iterators' },
      { id: 'lambda-map-filter', title: 'Lambda, map, filter, reduce' },
      { id: 'context-managers', title: 'Context Managers (with statement)' },
      { id: 'threading-concurrency', title: 'Threading and Concurrency' },
      { id: 'asyncio-async-await', title: 'Asyncio and async/await' }
    ]
  }
};

export const pythonContent = {
  module1: {
'intro-python': {
    title: 'Introduction to Python',
    sections: [
      {
        heading: 'What is Python?',
        content: [
          'Python is a popular programming language created by Guido van Rossum and released in 1991.',
          'It is used for web development, data science, artificial intelligence, automation, and more.',
          'Python was designed for readability, with a syntax that allows programmers to express concepts in fewer lines of code.',
          '<strong>Key features:</strong>',
          '<ul><li>Easy to learn and use</li><li>Works on Windows, Mac, and Linux</li><li>Has a huge collection of ready-to-use libraries</li><li>Free and open source</li></ul>'
        ]
      },
      {
        heading: 'Python Syntax',
        content: [
          'Python uses indentation (spaces) to define code blocks instead of braces.',
          'Comments start with a <code>#</code> symbol.',
          'Statements do not need semicolons at the end.'
        ],
        code: `# This is a comment
print("Hello, World!")

if 5 > 2:
    print("Five is greater than two!")  # indentation matters`
      },
      {
        heading: 'Python Examples',
        content: [
          'Below are simple examples showing variables, print(), and basic math.'
        ],
        code: `# Variables and printing
name = "Alice"
age = 25
print("Name:", name)
print("Age:", age)

# Simple math
x = 10
y = 3
print("Sum:", x + y)
print("Difference:", x - y)`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Open a terminal or Python IDE and type the following code.',
          'Experiment: change the name, age, or numbers and see what happens.'
        ],
        code: `print("Hello, Python!")

my_name = "Your Name"
print("I am learning Python, and my name is", my_name)`
      }
    ]
  },
  'variables-data-types': {
    title: 'Variables and Data Types',
    sections: [
      {
        heading: 'What are Variables?',
        content: [
          'Variables are containers for storing data values.',
          'In Python, you do not need to declare a variable type — just assign a value.',
          '<strong>Rules for variable names:</strong>',
          '<ul><li>Must start with a letter or underscore</li><li>Cannot start with a number</li><li>Can only contain letters, numbers, and underscores</li><li>Case-sensitive (<code>age</code> and <code>Age</code> are different)</li></ul>'
        ],
        code: `x = 5           # integer
y = "Hello"     # string
z = 3.14        # float
is_ready = True # boolean

print(x)
print(y)`
      },
      {
        heading: 'Data Types',
        content: [
          'Python has several built-in data types:',
          '<ul><li><strong>int</strong> — whole numbers (e.g., 42, -7)</li><li><strong>float</strong> — decimal numbers (e.g., 3.14, -0.5)</li><li><strong>str</strong> — text strings (e.g., "hello", \'world\')</li><li><strong>bool</strong> — True or False</li><li><strong>NoneType</strong> — None (no value)</li></ul>'
        ],
        table: {
          headers: ['Type', 'Description', 'Example'],
          rows: [
            ['int', 'Whole number without decimals', '42'],
            ['float', 'Number with decimals', '3.14'],
            ['str', 'Text inside quotes', '"hello"'],
            ['bool', 'True or False', 'True'],
            ['NoneType', 'Represents no value', 'None']
          ]
        },
        code: `# Check the type of a variable
a = 10
b = 3.5
c = "Python"
d = True

print(type(a))  # <class 'int'>
print(type(b))  # <class 'float'>
print(type(c))  # <class 'str'>
print(type(d))  # <class 'bool'>`
      },
      {
        heading: 'Type Conversion',
        content: [
          'You can convert one data type to another using built-in functions.',
          '<ul><li><code>int()</code> — converts to integer</li><li><code>float()</code> — converts to float</li><li><code>str()</code> — converts to string</li><li><code>bool()</code> — converts to boolean</li></ul>'
        ],
        code: `# Converting types
num_str = "100"
num_int = int(num_str)
print(num_int + 1)  # 101

pi_str = str(3.14)
print("Pi is " + pi_str)  # Pi is 3.14

# Boolean conversion
print(bool(1))    # True
print(bool(0))    # False
print(bool(""))   # False
print(bool("hi")) # True`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create variables of different types and print them.',
          'Try converting between types and observe the results.'
        ],
        code: `my_age = 20
my_height = 1.75
my_name = "Bob"

print(type(my_age))
print(type(my_height))
print(type(my_name))

# Convert age to string and print a sentence
print("I am " + str(my_age) + " years old.")`
      }
    ]
  },
  'operators-expressions': {
    title: 'Operators and Expressions',
    sections: [
      {
        heading: 'What are Operators?',
        content: [
          'Operators are special symbols used to perform operations on variables and values.',
          'Python divides operators into several groups:',
          '<ul><li>Arithmetic operators</li><li>Comparison operators</li><li>Logical operators</li><li>Assignment operators</li></ul>'
        ]
      },
      {
        heading: 'Arithmetic Operators',
        content: [
          'Used for mathematical operations:',
          '<ul><li><code>+</code> Addition</li><li><code>-</code> Subtraction</li><li><code>*</code> Multiplication</li><li><code>/</code> Division (returns float)</li><li><code>//</code> Floor division</li><li><code>%</code> Modulo (remainder)</li><li><code>**</code> Exponentiation</li></ul>'
        ],
        code: `a = 17
b = 5

print(a + b)   # 22
print(a - b)   # 12
print(a * b)   # 85
print(a / b)   # 3.4
print(a // b)  # 3
print(a % b)   # 2
print(a ** b)  # 1419857`
      },
      {
        heading: 'Comparison and Logical Operators',
        content: [
          '<strong>Comparison operators</strong> return True or False:',
          '<ul><li><code>==</code> Equal to</li><li><code>!=</code> Not equal to</li><li><code>></code> Greater than</li><li><code><</code> Less than</li><li><code>>=</code> Greater than or equal to</li><li><code><=</code> Less than or equal to</li></ul>',
          '<strong>Logical operators</strong> combine conditions:',
          '<ul><li><code>and</code> — both True</li><li><code>or</code> — at least one True</li><li><code>not</code> — reverse result</li></ul>'
        ],
        code: `x = 5
y = 10

# Comparison
print(x == y)  # False
print(x < y)   # True

# Logical
print(x > 0 and y > 0)  # True
print(x > 0 or y < 0)   # True
print(not(x > 0))       # False`
      },
      {
        heading: 'Assignment Operators',
        content: [
          'Shorthand operators for updating a variable:',
          '<ul><li><code>+=</code> add and assign</li><li><code>-=</code> subtract and assign</li><li><code>*=</code> multiply and assign</li><li><code>/=</code> divide and assign</li><li><code>%=</code> modulo and assign</li><li><code>**=</code> exponent and assign</li></ul>'
        ],
        code: `score = 10
score += 5   # score is now 15
score -= 3   # score is now 12
score *= 2   # score is now 24
score /= 4   # score is now 6.0

print(score)`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write an expression that calculates the area of a rectangle (length × width).',
          'Use comparison operators to check if a number is between 10 and 20.'
        ],
        code: `length = 7
width = 4
area = length * width
print("Area:", area)

num = 15
print(num > 10 and num < 20)  # True`
      }
    ]
  },
  'control-flow': {
    title: 'Control Flow (if, for, while)',
    sections: [
      {
        heading: 'What is Control Flow?',
        content: [
          'Control flow refers to the order in which individual statements are executed.',
          'Python provides three main structures for controlling flow:',
          '<ul><li><code>if</code> statements — for decision making</li><li><code>for</code> loops — for iterating over sequences</li><li><code>while</code> loops — for repeating while a condition is true</li></ul>'
        ],
        diagram: {
          caption: 'How Python chooses a control flow structure',
          chart: `flowchart TD
    A[Start] --> B{Need to make a decision?}
    B -->|Yes| C[Use if-elif-else]
    B -->|No| D{Need to repeat code?}
    D -->|Yes| E{Know how many times?}
    E -->|Yes| F[Use for loop]
    E -->|No| G[Use while loop]
    D -->|No| H[Continue sequentially]`
        }
      },
      {
        heading: 'if, elif, else',
        content: [
          'Use <code>if</code> to test a condition.',
          'Use <code>elif</code> (else if) to test another condition.',
          'Use <code>else</code> to run code when no condition is true.'
        ],
        code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print("Grade:", grade)  # Grade: B`
      },
      {
        heading: 'for Loops',
        content: [
          'A <code>for</code> loop iterates over a sequence (list, string, range, etc.).',
          '<code>range(n)</code> generates numbers from 0 to n-1.'
        ],
        code: `# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop over a string
for letter in "Hello":
    print(letter)`
      },
      {
        heading: 'while Loops',
        content: [
          'A <code>while</code> loop repeats as long as a condition is True.',
          'Be careful to update the condition so the loop eventually stops.'
        ],
        code: `count = 0
while count < 5:
    print(count)
    count += 1

# break and continue
for num in range(10):
    if num == 3:
        continue  # skip 3
    if num == 7:
        break     # stop at 7
    print(num)    # 0, 1, 2, 4, 5, 6`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Print all even numbers from 0 to 20 using a for loop.',
          'Write a while loop that counts down from 10 to 1.'
        ],
        code: `# Even numbers 0-20
for n in range(0, 21, 2):
    print(n)

# Countdown
count = 10
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`
      }
    ]
  },
  'functions-basics': {
    title: 'Functions Basics',
    sections: [
      {
        heading: 'What is a Function?',
        content: [
          'A function is a reusable block of code that runs only when it is called.',
          'Functions help organize code, reduce repetition, and make programs easier to read.',
          'In Python, you define a function with the <code>def</code> keyword.'
        ],
        code: `def greet(name):
    return "Hello, " + name + "!"

# Calling the function
msg = greet("Alice")
print(msg)  # Hello, Alice!`,
        diagram: {
          caption: 'Function call flow',
          chart: `flowchart LR
    A[Call greet] --> B[Pass argument 'Alice']
    B --> C[Execute function body]
    C --> D[Return 'Hello, Alice!']
    D --> E[Store result in msg]`
        }
      },
      {
        heading: 'Function Syntax',
        content: [
          '<strong>Basic structure:</strong>',
          '<ol><li>Use <code>def</code> to define the function</li><li>Give it a name followed by parentheses</li><li>Add parameters inside the parentheses (optional)</li><li>End with a colon</li><li>Indent the body</li><li>Use <code>return</code> to send back a result (optional)</li></ol>'
        ],
        table: {
          headers: ['Part', 'Purpose', 'Example'],
          rows: [
            ['def', 'Keyword that starts a function definition', 'def greet():'],
            ['name', 'Identifier used to call the function', 'greet'],
            ['parameters', 'Inputs the function accepts', '(name, age)'],
            ['return', 'Value sent back to the caller', 'return name'],
            ['body', 'Indented code that runs when called', 'print("Hi")']
          ]
        },
        code: `def add_numbers(a, b):
    result = a + b
    return result

sum_val = add_numbers(3, 5)
print(sum_val)  # 8`
      },
      {
        heading: 'Default Parameters',
        content: [
          'You can assign default values to parameters.',
          'If no value is passed, the default is used.'
        ],
        code: `def greet(name, greeting="Hello"):
    return greeting + ", " + name + "!"

print(greet("Bob"))            # Hello, Bob!
print(greet("Bob", "Hi"))      # Hi, Bob!`
      },
      {
        heading: 'Examples',
        content: [
          'Here are more practical examples: a function to check if a number is even, and a function with multiple return values.'
        ],
        code: `def is_even(number):
    return number % 2 == 0

print(is_even(4))  # True
print(is_even(7))  # False

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([3, 1, 4, 1, 5])
print(smallest, largest)  # 1 5`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a function called <code>multiply</code> that takes two numbers and returns their product.',
          'Call the function with different numbers and print the results.'
        ],
        code: `def multiply(a, b):
    return a * b

print(multiply(4, 5))
print(multiply(7, 3))`
      }
    ]
  },
  'input-output': {
    title: 'Input and Output',
    sections: [
      {
        heading: 'What is Input and Output?',
        content: [
          '<strong>Output</strong> means sending data from your program to the screen.',
          '<strong>Input</strong> means getting data from the user through the keyboard.',
          'Python provides built-in functions <code>print()</code> and <code>input()</code> for these tasks.'
        ]
      },
      {
        heading: 'print() — Output',
        content: [
          '<code>print()</code> displays text or variables on the screen.',
          'You can print multiple items, change the separator, and prevent a newline.'
        ],
        code: `print("Hello, World!")
print("The answer is", 42)

# Custom separator
print("a", "b", "c", sep="-")  # a-b-c

# Prevent newline
print("Loading", end="")
print("... Done!")

# f-strings (formatted strings)
name = "Alice"
age = 25
print(f"{name} is {age} years old.")`
      },
      {
        heading: 'input() — User Input',
        content: [
          '<code>input()</code> reads a line of text from the keyboard.',
          'It always returns a string. Convert to <code>int</code> or <code>float</code> when needed.'
        ],
        code: `name = input("Enter your name: ")
print("Hello, " + name + "!")

# Converting input to a number
age = int(input("Enter your age: "))
print("Next year you will be", age + 1)

# Float input
height = float(input("Enter your height in meters: "))
print("Your height is", height, "m")`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a program that asks for two numbers and prints their sum.',
          'Use f-strings to make the output look nice.'
        ],
        code: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum_result = num1 + num2

print(f"The sum of {num1} and {num2} is {sum_result}.")`
      }
    ]
  },
  'string-manipulation': {
    title: 'String Manipulation',
    sections: [
      {
        heading: 'What is a String?',
        content: [
          'A string is a sequence of characters enclosed in quotes.',
          'You can use single quotes (<code>\'</code>), double quotes (<code>"</code>), or triple quotes for multiline strings.',
          'Strings are immutable — once created, they cannot be changed.'
        ],
        code: `text = "Hello, Python!"
multiline = '''This is
a multiline
string.'''

print(text)
print(multiline)`
      },
      {
        heading: 'String Indexing and Slicing',
        content: [
          'Access individual characters using their index (position).',
          'Indexes start at 0. Negative indexes count from the end.',
          'Slicing lets you grab a portion of a string: <code>string[start:end]</code>.'
        ],
        code: `text = "Hello, World!"

print(text[0])     # H
print(text[-1])    # !
print(text[0:5])   # Hello
print(text[7:])    # World!
print(text[:5])    # Hello
print(text[::2])   # Hlo ol! (every 2nd character)`
      },
      {
        heading: 'String Methods',
        content: [
          'Python provides many built-in methods to work with strings:',
          '<ul><li><code>upper()</code> — convert to uppercase</li><li><code>lower()</code> — convert to lowercase</li><li><code>strip()</code> — remove extra spaces</li><li><code>replace(old, new)</code> — replace text</li><li><code>split(sep)</code> — split into a list</li><li><code>join(list)</code> — join a list into a string</li></ul>'
        ],
        code: `s = "  Hello, World!  "

print(s.strip())                 # "Hello, World!"
print(s.lower())                 # "  hello, world!  "
print(s.upper())                 # "  HELLO, WORLD!  "
print(s.replace("World", "Python"))  # "  Hello, Python!  "

words = s.strip().split(", ")
print(words)  # ['Hello', 'World!']

print("-".join(["a", "b", "c"]))  # a-b-c`
      },
      {
        heading: 'String Checking',
        content: [
          'These methods return True or False:',
          '<ul><li><code>startswith()</code> — begins with a substring</li><li><code>endswith()</code> — ends with a substring</li><li><code>isdigit()</code> — contains only digits</li><li><code>isalpha()</code> — contains only letters</li><li><code>in</code> — check if a substring exists</li></ul>'
        ],
        code: `word = "hello123"

print(word.startswith("he"))   # True
print(word.endswith("23"))     # True
print(word.isdigit())          # False
print("123".isdigit())         # True
print("lo" in word)            # True`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Ask the user for their name, then print it in uppercase and lowercase.',
          'Check if the name starts with the letter "A".'
        ],
        code: `name = input("Enter your name: ")
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())
print("Starts with A:", name.startswith("A"))`
      }
    ]
  }
  },
  module2: {
'lists-tuples': {
    title: 'Lists and Tuples',
    sections: [
      {
        heading: 'What is a List?',
        content: [
          'A <strong>list</strong> is an ordered collection of items.',
          'Lists are <strong>mutable</strong> — you can change, add, or remove items after creation.',
          'Items can be of any type: numbers, strings, booleans, or even other lists.',
          'Lists use <strong>square brackets</strong> <code>[]</code>.'
        ],
        code: `# Create a list
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40]
mixed = ["hello", 42, True, 3.14]

print(fruits)    # ["apple", "banana", "cherry"]
print(len(fruits))  # 3`
      },
      {
        heading: 'List Syntax',
        content: [
          '<strong>Access items</strong> by index (starts at 0).',
          '<strong>Negative index</strong> counts from the end: <code>-1</code> is the last item.',
          '<strong>Slice</strong> a list with <code>[start:stop]</code>.'
        ],
        code: `fruits = ["apple", "banana", "cherry", "date"]

# Access by index
print(fruits[0])    # apple
print(fruits[-1])   # date

# Slicing
print(fruits[1:3])  # ["banana", "cherry"]
print(fruits[:2])   # ["apple", "banana"]
print(fruits[2:])   # ["cherry", "date"]`
      },
      {
        heading: 'Change, Add, and Remove Items',
        content: [
          '<strong>Change</strong> an item by assigning a new value to its index.',
          '<strong>Add</strong> items with <code>append()</code>, <code>insert()</code>, or <code>extend()</code>.',
          '<strong>Remove</strong> items with <code>remove()</code>, <code>pop()</code>, or <code>del</code>.'
        ],
        code: `fruits = ["apple", "banana", "cherry"]

# Change
fruits[1] = "blueberry"

# Add
fruits.append("date")         # add to end
fruits.insert(1, "apricot")   # insert at index

# Remove
fruits.remove("apple")        # remove by value
last = fruits.pop()           # remove last item

print(fruits)  # ["apricot", "blueberry", "cherry"]`
      },
      {
        heading: 'What is a Tuple?',
        content: [
          'A <strong>tuple</strong> is an ordered collection, just like a list.',
          'Tuples are <strong>immutable</strong> — once created, they cannot be changed.',
          'Tuples use <strong>round brackets</strong> <code>()</code>.',
          'Use tuples for data that should not change, like coordinates or RGB colors.'
        ],
        code: `# Create a tuple
point = (10, 20)
colors = ("red", "green", "blue")
single = (42,)  # note the trailing comma!

print(point[0])   # 10
print(len(colors))  # 3

# Tuples cannot be changed
# point[0] = 5  # This would raise an error`
      },
      {
        heading: 'Tuple Unpacking and Examples',
        content: [
          '<strong>Unpack</strong> a tuple into separate variables.',
          'Tuples are often used to <strong>return multiple values</strong> from a function.',
          'You can convert between lists and tuples with <code>list()</code> and <code>tuple()</code>.'
        ],
        code: `# Unpacking
coordinates = (3, 4)
x, y = coordinates
print(x, y)  # 3 4

# Function returning a tuple
def get_min_max(numbers):
    return min(numbers), max(numbers)

small, big = get_min_max([5, 1, 9, 3])
print(small, big)  # 1 9

# Convert between list and tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
my_list_again = list(my_tuple)`
      }
    ]
  },
  'dictionaries-sets': {
    title: 'Dictionaries and Sets',
    sections: [
      {
        heading: 'What is a Dictionary?',
        content: [
          'A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>.',
          'Each key is unique — like a real dictionary where each word appears once.',
          'Dictionaries use <strong>curly braces</strong> <code>{}</code> with colons separating keys and values.',
          'Python 3.7+: dictionaries keep the insertion order.'
        ],
        code: `# Create a dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])   # Alice
print(len(person))      # 3`
      },
      {
        heading: 'Dictionary Syntax',
        content: [
          '<strong>Access</strong> a value using its key inside <code>[]</code>.',
          '<strong>Add or change</strong> a value by assigning to a key.',
          '<strong>Safe access</strong> with <code>.get()</code> — returns <code>None</code> or a default if the key is missing.'
        ],
        code: `person = {"name": "Alice", "age": 30}

# Access
print(person["name"])           # Alice

# Add or change
person["email"] = "alice@example.com"
person["age"] = 31

# Safe access
print(person.get("phone"))          # None
print(person.get("phone", "N/A"))   # N/A

# Check if key exists
if "name" in person:
    print("Name is set!")`
      },
      {
        heading: 'Loop Through a Dictionary',
        content: [
          'Use <code>.keys()</code> to get all keys.',
          'Use <code>.values()</code> to get all values.',
          'Use <code>.items()</code> to get key-value pairs together.'
        ],
        code: `person = {"name": "Alice", "age": 30, "city": "NYC"}

# Loop through keys
for key in person:
    print(key)

# Loop through key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")

# Loop through values only
for value in person.values():
    print(value)`
      },
      {
        heading: 'What is a Set?',
        content: [
          'A <strong>set</strong> is an unordered collection of <strong>unique</strong> items.',
          'Sets use <strong>curly braces</strong> <code>{}</code> or the <code>set()</code> function.',
          'Duplicates are automatically removed.',
          'Useful for membership testing and removing duplicates from a list.'
        ],
        code: `# Create a set
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 3, 3}  # duplicates removed

print(numbers)  # {1, 2, 3}

# Remove duplicates from a list
my_list = [1, 2, 2, 3, 3, 3]
unique = list(set(my_list))
print(unique)  # [1, 2, 3]`
      },
      {
        heading: 'Set Operations — Examples',
        content: [
          '<strong>Union</strong> <code>|</code> — all items from both sets.',
          '<strong>Intersection</strong> <code>&</code> — items common to both sets.',
          '<strong>Difference</strong> <code>-</code> — items in the first set but not the second.',
          '<strong>Symmetric difference</strong> <code>^</code> — items in either set, but not both.'
        ],
        code: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # {1, 2, 3, 4, 5, 6}   union
print(a & b)   # {3, 4}                intersection
print(a - b)   # {1, 2}                difference
print(a ^ b)   # {1, 2, 5, 6}          symmetric difference

# Add and remove items
a.add(10)
a.remove(1)`
      }
    ]
  },
  'list-comprehensions': {
    title: 'List Comprehensions',
    sections: [
      {
        heading: 'What is a List Comprehension?',
        content: [
          'A <strong>list comprehension</strong> is a concise way to create a new list from an existing iterable.',
          'It replaces simple loops with a single, readable line of code.',
          'Faster and more compact than writing a full <code>for</code> loop.'
        ],
        code: `# Without list comprehension
squares = []
for x in range(6):
    squares.append(x ** 2)
print(squares)  # [0, 1, 4, 9, 16, 25]

# With list comprehension
squares = [x ** 2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]`
      },
      {
        heading: 'Syntax',
        content: [
          'Basic syntax: <code>[expression for item in iterable]</code>.',
          'With a condition: <code>[expression for item in iterable if condition]</code>.',
          'Read it from left to right: "Give me <em>expression</em> for each <em>item</em> in <em>iterable</em> if <em>condition</em> is true."'
        ]
      },
      {
        heading: 'Examples',
        content: [
          'Create a list of squares.',
          'Filter even numbers only.',
          'Convert strings to uppercase.',
          'Create a nested list (matrix).'
        ],
        code: `# Squares of 0 to 9
squares = [x**2 for x in range(10)]

# Even numbers only
evens = [x for x in range(20) if x % 2 == 0]

# Uppercase words
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]

# Nested list — multiplication table
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Practice: create a list of numbers from 1 to 50 that are divisible by both 3 and 5.',
          'Then, create a list of the first 10 powers of 2.',
          'Challenge: flatten a nested list like <code>[[1, 2], [3, 4]]</code> into <code>[1, 2, 3, 4]</code>.'
        ],
        code: `# Divisible by 3 and 5
result = [x for x in range(1, 51) if x % 3 == 0 and x % 5 == 0]
print(result)  # [15, 30, 45]

# Powers of 2
powers = [2 ** n for n in range(10)]
print(powers)  # [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]

# Flatten a nested list
nested = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in nested for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6]`
      },
      {
        heading: 'Dictionary and Set Comprehensions',
        content: [
          'The same pattern works for <strong>dictionaries</strong> and <strong>sets</strong> too.',
          'Use curly braces <code>{}</code> instead of square brackets.'
        ],
        code: `# Dictionary comprehension
word = "hello"
char_counts = {char: word.count(char) for char in word}
print(char_counts)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}

# Set comprehension (unique squares)
squares_set = {x**2 for x in range(20)}
print(len(squares_set))  # 20 — all unique`
      }
    ]
  },
  'classes-objects': {
    title: 'Classes and Objects',
    sections: [
      {
        heading: 'What is a Class?',
        content: [
          'A <strong>class</strong> is a blueprint for creating <strong>objects</strong>.',
          'An <strong>object</strong> is an instance of a class — a real "thing" built from the blueprint.',
          'Classes bundle <strong>data</strong> (attributes) and <strong>behavior</strong> (methods) together.'
        ],
        code: `# Define a class
class Dog:
    # Class attribute (shared by all dogs)
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says woof!"

# Create objects (instances)
buddy = Dog("Buddy", 3)
miles = Dog("Miles", 5)

print(buddy.name)     # Buddy
print(buddy.bark())   # Buddy says woof!`,
        diagram: {
          caption: 'Class as blueprint for objects',
          chart: `classDiagram
    class Dog {
      +string species
      +string name
      +int age
      +bark() string
    }
    Dog --> buddy : instance
    Dog --> miles : instance`
        }
      },
      {
        heading: 'The __init__ Method',
        content: [
          '<code>__init__</code> is the <strong>constructor</strong> — it runs automatically when a new object is created.',
          '<code>self</code> refers to the current object. You must include it as the first parameter of every method.',
          'Use <code>self</code> to create and access instance attributes.'
        ],
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

alice = Person("Alice", 30)
print(alice.introduce())  # Hi, I'm Alice and I'm 30 years old.`
      },
      {
        heading: 'Instance vs Class Attributes',
        content: [
          '<strong>Instance attributes</strong> belong to one specific object (created in <code>__init__</code>).',
          '<strong>Class attributes</strong> are shared by all instances of the class (defined outside methods).'
        ],
        code: `class Circle:
    pi = 3.14159  # class attribute

    def __init__(self, radius):
        self.radius = radius  # instance attribute

    def area(self):
        return Circle.pi * self.radius ** 2

c1 = Circle(5)
c2 = Circle(10)

print(c1.area())  # 78.53975
print(c2.area())  # 314.159

# All circles share the same pi
print(Circle.pi)  # 3.14159`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Book</code> class with <code>title</code>, <code>author</code>, and <code>pages</code>.',
          'Add a method <code>description()</code> that returns a formatted string.',
          'Create two book objects and print their descriptions.'
        ],
        code: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def description(self):
        return f"'{self.title}' by {self.author}, {self.pages} pages."

book1 = Book("Python Basics", "Jane Doe", 250)
book2 = Book("Advanced Python", "John Smith", 400)

print(book1.description())
print(book2.description())`
      }
    ]
  },
  'inheritance-polymorphism': {
    title: 'Inheritance and Polymorphism',
    sections: [
      {
        heading: 'What is Inheritance?',
        content: [
          '<strong>Inheritance</strong> lets a new class (child) get all attributes and methods from an existing class (parent).',
          'It promotes code reuse — define common behavior once in the parent, then extend it in the child.',
          'A child class can add new methods or <strong>override</strong> existing ones.'
        ],
        code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

# Child classes
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

buddy = Dog("Buddy")
whiskers = Cat("Whiskers")

print(buddy.speak())     # Buddy says Woof!
print(whiskers.speak())  # Whiskers says Meow!`
      },
      {
        heading: 'The super() Function',
        content: [
          '<code>super()</code> calls a method from the <strong>parent class</strong>.',
          'Use it when the child needs to extend (not replace) the parent\'s behavior.',
          'Common use case: call <code>super().__init__()</code> to initialize parent attributes.'
        ],
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Employee(Person):
    def __init__(self, name, age, company):
        super().__init__(name, age)  # call parent constructor
        self.company = company

    def info(self):
        return f"{self.name}, {self.age}, works at {self.company}"

emp = Employee("Alice", 30, "TechCorp")
print(emp.info())  # Alice, 30, works at TechCorp`
      },
      {
        heading: 'What is Polymorphism?',
        content: [
          '<strong>Polymorphism</strong> means "many forms" — different classes can be used through the same interface.',
          'Python uses <strong>duck typing</strong>: if an object has the right method, it just works.',
          'You do not need to check the class type before calling a method.'
        ],
        code: `class Bird:
    def fly(self):
        return "Flapping wings"

class Airplane:
    def fly(self):
        return "Engines running"

class Fish:
    def swim(self):
        return "Swimming"

def let_it_fly(thing):
    return thing.fly()

print(let_it_fly(Bird()))      # Flapping wings
print(let_it_fly(Airplane()))  # Engines running
# let_it_fly(Fish()) would raise AttributeError`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Vehicle</code> parent class with <code>brand</code> and <code>speed</code> attributes.',
          'Create <code>Car</code> and <code>Bicycle</code> child classes that override a <code>horn()</code> method.',
          'Store all vehicles in a list and call <code>horn()</code> on each one.'
        ],
        code: `class Vehicle:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def horn(self):
        return "Beep!"

class Car(Vehicle):
    def horn(self):
        return "Honk honk!"

class Bicycle(Vehicle):
    def horn(self):
        return "Ring ring!"

vehicles = [Car("Toyota", 120), Bicycle("Giant", 25)]
for v in vehicles:
    print(f"{v.brand}: {v.horn()}")`
      }
    ]
  },
  'encapsulation-abstraction': {
    title: 'Encapsulation and Abstraction',
    sections: [
      {
        heading: 'What is Encapsulation?',
        content: [
          '<strong>Encapsulation</strong> means bundling data and the methods that work on that data inside a class.',
          'It also means <strong>hiding</strong> internal details so the outside world cannot accidentally break things.',
          'Python uses <strong>naming conventions</strong> to signal privacy instead of strict access control.'
        ],
        code: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # private (double underscore)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
print(account.get_balance())   # 1000
# print(account.__balance)     # Error! Cannot access directly`
      },
      {
        heading: 'Access Levels in Python',
        content: [
          '<strong>Public</strong> — no underscore. Anyone can access: <code>self.name</code>.',
          '<strong>Protected</strong> — single underscore <code>_</code>. A hint to treat it as internal: <code>self._score</code>.',
          '<strong>Private</strong> — double underscore <code>__</code>. Name-mangled to prevent accidental access: <code>self.__balance</code>.'
        ],
        code: `class Student:
    def __init__(self, name):
        self.name = name          # public
        self._grade = "A"         # protected (hint)
        self.__secret_id = 12345  # private

s = Student("Bob")
print(s.name)      # Bob — public
print(s._grade)    # A — technically accessible (don't do this)
# print(s.__secret_id)  # AttributeError!`
      },
      {
        heading: 'What is Abstraction?',
        content: [
          '<strong>Abstraction</strong> hides complex implementation details and shows only the essential features.',
          'Think of a car: you turn the key to start — you do not need to understand the engine.',
          'In Python, abstract classes and methods are created with the <code>abc</code> module.'
        ],
        code: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass  # no implementation here

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

rect = Rectangle(5, 3)
print(rect.area())       # 15
print(rect.perimeter())  # 16

# Shape() alone would raise TypeError — cannot instantiate abstract class`
      },
      {
        heading: '@property for Clean Interfaces',
        content: [
          'The <code>@property</code> decorator turns a method into an <strong>attribute-like</strong> interface.',
          'You can read it like a variable, but it runs code behind the scenes.',
          'Add a <code>@name.setter</code> to control how the value is modified.'
        ],
        code: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Too cold!")
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

temp = Temperature(25)
print(temp.celsius)      # 25 (looks like an attribute)
print(temp.fahrenheit)   # 77.0
temp.celsius = 30        # uses the setter`
      }
    ]
  },
  'magic-methods': {
    title: 'Magic (Dunder) Methods',
    sections: [
      {
        heading: 'What are Magic Methods?',
        content: [
          'Magic methods have <strong>double underscores</strong> on both sides — <code>__name__</code>.',
          '"Dunder" = <strong>D</strong>ouble <strong>UNDER</strong>score.',
          'They define how your objects behave with built-in operations like <code>+</code>, <code>==</code>, <code>len()</code>, or <code>print()</code>.',
          'You do not call them directly — Python calls them for you.'
        ],
        code: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"Book: {self.title}"

    def __repr__(self):
        return f"Book('{self.title}', {self.pages})"

b = Book("Python Guide", 300)
print(b)          # Book: Python Guide  (calls __str__)
print(repr(b))    # Book('Python Guide', 300)  (calls __repr__)`
      },
      {
        heading: 'Common Magic Methods',
        content: [
          '<code>__init__</code> — constructor (run on creation).',
          '<code>__str__</code> — human-readable string (for <code>print()</code>).',
          '<code>__repr__</code> — developer-friendly string (for <code>repr()</code> and the REPL).',
          '<code>__len__</code> — returns length (for <code>len()</code>).',
          '<code>__eq__</code> — checks equality (for <code>==</code>).',
          '<code>__add__</code> — defines <code>+</code> behavior.',
          '<code>__getitem__</code> — enables bracket access like <code>obj[index]</code>.'
        ]
      },
      {
        heading: 'Operator Overloading — Examples',
        content: [
          'Define how your custom objects behave with <code>+</code>, <code>==</code>, and other operators.',
          'This makes your classes feel like native Python types.'
        ],
        code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return int((self.x**2 + self.y**2) ** 0.5)

    def __str__(self):
        return f"({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(1, 1)
print(v1 + v2)        # (3, 4)
print(v1 == Vector(2, 3))  # True
print(len(v1))        # 3 (magnitude ≈ 3.6, cast to int)`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Money</code> class with <code>amount</code> and <code>currency</code>.',
          'Implement <code>__add__</code> to add two Money objects (only if currencies match).',
          'Implement <code>__str__</code> for pretty output like "€50.00".',
          'Implement <code>__eq__</code> to compare amounts.'
        ],
        code: `class Money:
    def __init__(self, amount, currency):
        self.amount = amount
        self.currency = currency

    def __add__(self, other):
        if self.currency != other.currency:
            raise ValueError("Currencies must match!")
        return Money(self.amount + other.amount, self.currency)

    def __eq__(self, other):
        return self.amount == other.amount and self.currency == other.currency

    def __str__(self):
        return f"{self.currency}{self.amount:.2f}"

m1 = Money(50, "$")
m2 = Money(25, "$")
print(m1 + m2)  # $75.00
print(m1 == Money(50, "$"))  # True`
      }
    ]
  }
  },
  module3: {
'file-reading-writing': {
      title: 'File Reading and Writing',
      sections: [
        {
          heading: 'What is File Handling?',
          content: [
            'File handling lets you work with files on your computer — create, read, write, and delete files.',
            'Python has built-in functions to handle files easily.',
            'The <code>open()</code> function is the key to file operations in Python.'
          ]
        },
        {
          heading: 'Syntax',
          content: [
            'Use <code>open(filename, mode)</code> to open a file.',
            'The <code>mode</code> tells Python what you want to do with the file:'
          ],
          code: `file = open("data.txt", "r")  # open for reading
# Do something with the file
file.close()                    # always close the file`
        },
        {
          heading: 'File Modes',
          content: [
            '<code>"r"</code> — Read (default). Opens a file for reading. Error if file does not exist.',
            '<code>"w"</code> — Write. Opens a file for writing. Creates a new file if it does not exist, or overwrites the existing file.',
            '<code>"a"</code> — Append. Opens a file for appending. Creates the file if it does not exist.',
            '<code>"x"</code> — Create. Creates a new file. Error if the file already exists.',
            '<code>"b"</code> — Binary mode. Use with "rb" or "wb" for images, PDFs, etc.',
            '<code>"+"</code> — Read and write mode.'
          ]
        },
        {
          heading: 'Examples',
          content: [
            'Use the <code>with</code> statement — it automatically closes the file, even if an error occurs.'
          ],
          code: `# Write to a file
with open("hello.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is line 2\\n")

# Read the entire file
with open("hello.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("hello.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes extra newline`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Create a file named "notes.txt" and write three lines of text to it.',
            '<strong>Exercise 2:</strong> Read the file back and print each line with its line number.',
            '<strong>Exercise 3:</strong> Open the file in append mode and add one more line.'
          ],
          code: `# Exercise 1 - Write to file
with open("notes.txt", "w") as f:
    f.write("First note\\n")
    f.write("Second note\\n")
    f.write("Third note\\n")

# Exercise 2 - Read with line numbers
with open("notes.txt", "r") as f:
    for i, line in enumerate(f, 1):
        print(f"{i}: {line.strip()}")

# Exercise 3 - Append
with open("notes.txt", "a") as f:
    f.write("Fourth note\\n")`
        }
      ]
    },
    'csv-json-handling': {
      title: 'CSV and JSON Handling',
      sections: [
        {
          heading: 'What is CSV?',
          content: [
            'CSV stands for <strong>Comma-Separated Values</strong>.',
            'It is a simple format for storing data in rows and columns.',
            'Each line is a row, and commas separate the values.',
            'Python has a built-in <code>csv</code> module to read and write CSV files.'
          ]
        },
        {
          heading: 'CSV Examples',
          code: `import csv

# Writing a CSV file
with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["name", "age", "city"])
    writer.writerow(["Alice", 30, "New York"])
    writer.writerow(["Bob", 25, "Los Angeles"])

# Reading a CSV file (as dictionaries)
with open("people.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row['name']} is {row['age']} years old")

# Reading a CSV file (as lists)
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)`
        },
        {
          heading: 'What is JSON?',
          content: [
            'JSON stands for <strong>JavaScript Object Notation</strong>.',
            'It is a lightweight data format that is easy to read and write.',
            'Python dictionaries look very similar to JSON objects.',
            'Python has a built-in <code>json</code> module for converting between Python objects and JSON.'
          ]
        },
        {
          heading: 'JSON Examples',
          code: `import json

# Python dictionary
person = {
    "name": "Alice",
    "age": 30,
    "hobbies": ["reading", "coding", "traveling"],
    "married": False
}

# Convert to JSON string
json_string = json.dumps(person, indent=2)
print(json_string)

# Convert JSON string back to Python
parsed = json.loads(json_string)
print(parsed["name"])  # Alice

# Write JSON to a file
with open("data.json", "w") as file:
    json.dump(person, file, indent=2)

# Read JSON from a file
with open("data.json", "r") as file:
    loaded = json.load(file)
    print(loaded["hobbies"])  # ['reading', 'coding', 'traveling']`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Create a CSV file with student data (name, score, grade).',
            '<strong>Exercise 2:</strong> Read the CSV and print only students who scored above 80.',
            '<strong>Exercise 3:</strong> Save a list of products to a JSON file and read it back.'
          ],
          code: `import csv
import json

# Exercise 1 - Write student CSV
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "score", "grade"])
    writer.writerow(["Alice", 85, "B"])
    writer.writerow(["Bob", 92, "A"])
    writer.writerow(["Charlie", 78, "C"])

# Exercise 2 - Read and filter
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        if int(row["score"]) > 80:
            print(f"{row['name']}: {row['score']}")

# Exercise 3 - JSON products
products = [
    {"id": 1, "name": "Laptop", "price": 999.99},
    {"id": 2, "name": "Mouse", "price": 29.99}
]
with open("products.json", "w") as f:
    json.dump(products, f, indent=2)

with open("products.json", "r") as f:
    loaded = json.load(f)
    for p in loaded:
        print(f"{p['name']} costs \${p['price']}")`
        }
      ]
    },
    'modules-imports': {
      title: 'Modules and Imports',
      sections: [
        {
          heading: 'What is a Module?',
          content: [
            'A <strong>module</strong> is a file containing Python code (functions, classes, variables).',
            'Modules let you organize your code into reusable pieces.',
            'Python has many built-in modules, and you can also create your own.',
            'Use the <code>import</code> keyword to bring a module into your program.'
          ]
        },
        {
          heading: 'Syntax',
          content: [
            'There are several ways to import modules in Python:'
          ],
          code: `# Import the entire module
import math
print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.141592653589793

# Import specific items
from math import sqrt, pow
print(sqrt(25))        # 5.0
print(pow(2, 3))       # 8.0

# Import with an alias (short name)
import numpy as np
import pandas as pd

# Import everything (not recommended for large modules)
from math import *`
        },
        {
          heading: 'Examples',
          content: [
            'Common built-in modules you will use:'
          ],
          code: `import random
import datetime
import math

# random module
print(random.randint(1, 10))        # Random number between 1 and 10
print(random.choice(["apple", "banana", "cherry"]))

# datetime module
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))  # Format: 2024-01-15 14:30

# math module
print(math.floor(3.7))   # 3
print(math.ceil(3.2))    # 4
print(math.factorial(5)) # 120`
        },
        {
          heading: 'Creating Your Own Module',
          content: [
            'Create a new <code>.py</code> file with your functions, then import it in another file.',
            'Make sure both files are in the same folder, or the module is in your Python path.'
          ],
          code: `# Save this as mymath.py
PI = 3.14159

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def circle_area(radius):
    return PI * radius ** 2

# In your main program:
# import mymath
# print(mymath.add(2, 3))        # 5
# print(mymath.circle_area(5))   # 78.53975`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Create a module named <code>helpers.py</code> with a <code>greet(name)</code> function.',
            '<strong>Exercise 2:</strong> Import and use your module in another program.',
            '<strong>Exercise 3:</strong> Use the <code>random</code> module to simulate a dice roll (1-6).'
          ],
          code: `# helpers.py content:
# def greet(name):
#     return f"Hello, {name}!"

# main.py:
# import helpers
# print(helpers.greet("Alice"))

# Exercise 3 - Dice roll
import random
dice = random.randint(1, 6)
print(f"You rolled a {dice}")`
        }
      ]
    },
    'packages-organization': {
      title: 'Packages and Code Organization',
      sections: [
        {
          heading: 'What is a Package?',
          content: [
            'A <strong>package</strong> is a folder that contains multiple modules.',
            'Packages help you organize larger projects into smaller, manageable parts.',
            'A package folder must contain a special file named <code>__init__.py</code> (can be empty).',
            'In Python 3.3+, you can create packages without <code>__init__.py</code> (implicit namespace packages).'
          ]
        },
        {
          heading: 'Package Structure Example',
          content: [
            'Here is how a typical Python project is organized:'
          ],
          code: `myproject/
    main.py
    utils/
        __init__.py
        math_helpers.py
        string_helpers.py
    data/
        __init__.py
        readers.py
        writers.py`
        },
        {
          heading: 'How to Import from a Package',
          code: `# From the example above:

# Import a specific module
from utils.math_helpers import add, multiply

# Import the whole module
import utils.string_helpers

# Import with alias
from data.readers import load_csv as read_csv

# Using the imports
result = add(2, 3)
print(result)  # 5`
        },
        {
          heading: 'The __name__ == "__main__" Idiom',
          content: [
            'This special check lets a Python file be both <strong>imported as a module</strong> and <strong>run as a script</strong>.',
            'When a file is imported, <code>__name__</code> equals the module name.',
            'When a file is run directly, <code>__name__</code> equals <code>"__main__"</code>.'
          ],
          code: `def greet(name):
    return f"Hello, {name}!"

def main():
    print(greet("World"))

# This only runs when the file is executed directly
if __name__ == "__main__":
    main()

# If you import this file, main() will NOT run automatically.`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Create a package named <code>shapes</code> with modules <code>circle.py</code> and <code>square.py</code>.',
            '<strong>Exercise 2:</strong> Each module should have an <code>area()</code> function.',
            '<strong>Exercise 3:</strong> Import and use both functions in a main program.'
          ],
          code: `# shapes/circle.py
# import math
# def area(radius):
#     return math.pi * radius ** 2

# shapes/square.py
# def area(side):
#     return side ** 2

# main.py
# from shapes.circle import area as circle_area
# from shapes.square import area as square_area
# print(circle_area(5))  # 78.54...
# print(square_area(4))  # 16`
        }
      ]
    },
    'virtual-environments': {
      title: 'Virtual Environments',
      sections: [
        {
          heading: 'What is a Virtual Environment?',
          content: [
            'A <strong>virtual environment</strong> is an isolated Python environment for each project.',
            'It lets different projects use different versions of the same package.',
            'Without virtual environments, all packages are installed globally — which can cause conflicts.'
          ]
        },
        {
          heading: 'Creating a Virtual Environment',
          content: [
            'Python 3 includes the <code>venv</code> module for creating virtual environments.',
            'Run these commands in your terminal or command prompt:'
          ],
          code: `# Create a virtual environment named "myenv"
python3 -m venv myenv

# On Windows, use:
# python -m venv myenv`
        },
        {
          heading: 'Activating and Deactivating',
          content: [
            'You must <strong>activate</strong> the environment before installing packages.',
            'Activation changes your shell to use the environment\'s Python and packages.',
            'Use <strong>deactivate</strong> to exit the environment when done.'
          ],
          code: `# Linux / macOS
source myenv/bin/activate

# Windows (Command Prompt)
myenv\\Scripts\\activate

# Windows (PowerShell)
myenv\\Scripts\\Activate.ps1

# Deactivate (all platforms)
deactivate`
        },
        {
          heading: 'Installing and Managing Packages',
          content: [
            'Once activated, use <code>pip</code> to install packages.',
            '<code>pip</code> is Python\'s package installer.',
            'Save all dependencies to a file so others can install them too.'
          ],
          code: `# Install packages inside the active environment
pip install requests numpy pandas

# See installed packages
pip list

# Save dependencies to requirements.txt
pip freeze > requirements.txt

# Install dependencies from a file (on a new machine)
pip install -r requirements.txt`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Create a virtual environment named <code>project_env</code>.',
            '<strong>Exercise 2:</strong> Activate it and install <code>requests</code> and <code>flask</code>.',
            '<strong>Exercise 3:</strong> Create a <code>requirements.txt</code> file and verify its contents.'
          ],
          code: `# Step 1: Create
python3 -m venv project_env

# Step 2: Activate and install
source project_env/bin/activate
pip install requests flask

# Step 3: Save requirements
pip freeze > requirements.txt
cat requirements.txt`
        }
      ]
    },
    'standard-library': {
      title: 'Python Standard Library Overview',
      sections: [
        {
          heading: 'What is the Standard Library?',
          content: [
            'The <strong>Standard Library</strong> is a collection of modules that comes with Python.',
            'You do not need to install anything — just <code>import</code> and use them.',
            'It covers file I/O, system calls, networking, data structures, dates, math, and more.',
            'Learning the standard library makes you a more efficient Python programmer.'
          ]
        },
        {
          heading: 'Essential Modules',
          content: [
            '<code>os</code> — Work with the operating system (files, directories, environment variables).',
            '<code>sys</code> — System-specific parameters and functions (command-line arguments, paths).',
            '<code>datetime</code> — Work with dates and times.',
            '<code>re</code> — Regular expressions for pattern matching in text.',
            '<code>json</code> — Read and write JSON data.',
            '<code>csv</code> — Read and write CSV files.',
            '<code>math</code> — Mathematical functions (sqrt, sin, cos, log, etc.).',
            '<code>random</code> — Generate random numbers and make random choices.',
            '<code>collections</code> — Advanced data structures like Counter, defaultdict, and deque.',
            '<code>itertools</code> — Tools for working with iterators and loops.',
            '<code>functools</code> — Higher-order functions and decorators.',
            '<code>statistics</code> — Calculate mean, median, mode, and standard deviation.'
          ]
        },
        {
          heading: 'Examples',
          code: `import os
import datetime
import random
from collections import Counter

# os - work with files and paths
print(os.getcwd())                      # Current working directory
print(os.path.exists("data.txt"))       # Check if file exists

# datetime - dates and times
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))   # Format as string
birthday = datetime.date(1995, 6, 15)
print(birthday.strftime("%B %d, %Y"))   # June 15, 1995

# random - randomness
print(random.randint(1, 100))           # Random integer
print(random.choice(["red", "green", "blue"]))  # Random choice

# collections.Counter - count items
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = Counter(words)
print(counts.most_common(2))            # [('apple', 3), ('banana', 2)]`
        },
        {
          heading: 'Try it Yourself',
          content: [
            '<strong>Exercise 1:</strong> Use <code>os</code> to list all files in your current directory.',
            '<strong>Exercise 2:</strong> Use <code>datetime</code> to print the date 7 days from now.',
            '<strong>Exercise 3:</strong> Use <code>Counter</code> to count how many times each letter appears in a word.'
          ],
          code: `import os
import datetime
from collections import Counter

# Exercise 1
files = os.listdir(".")
print("Files in current directory:")
for f in files:
    print(f"  {f}")

# Exercise 2
today = datetime.date.today()
future = today + datetime.timedelta(days=7)
print(f"Today: {today}")
print(f"In 7 days: {future}")

# Exercise 3
word = "banana"
letter_counts = Counter(word)
for letter, count in letter_counts.items():
    print(f"{letter}: {count}")`
        }
      ]
    }
  },
  module4: {
'exceptions-basics': {
      title: 'Exceptions Basics',
      sections: [
        {
          heading: 'What is an Exception?',
          content: [
            'An exception is an error that happens during the execution of a program.',
            'When Python cannot run your code, it raises an exception.',
            'Exceptions stop the program unless you handle them.',
            'Python has many built-in exceptions for common error conditions.'
          ]
        },
        {
          heading: 'Common Built-in Exceptions',
          content: [
            '<strong>ZeroDivisionError:</strong> Dividing a number by zero.',
            '<strong>ValueError:</strong> Passing the wrong value type or value.',
            '<strong>TypeError:</strong> Using the wrong data type.',
            '<strong>IndexError:</strong> Using an index that does not exist in a list.',
            '<strong>KeyError:</strong> Using a key that does not exist in a dictionary.',
            '<strong>FileNotFoundError:</strong> Trying to open a file that does not exist.',
            '<strong>NameError:</strong> Using a variable that has not been defined.',
            '<strong>AttributeError:</strong> Using an attribute that does not exist.'
          ],
          code: `# ZeroDivisionError
print(10 / 0)

# ValueError
int("hello")

# TypeError
print("5" + 5)

# IndexError
my_list = [1, 2, 3]
print(my_list[5])

# KeyError
my_dict = {"a": 1}
print(my_dict["z"])

# NameError
print(undefined_variable)`
        },
        {
          heading: 'Exception Hierarchy',
          content: [
            'All exceptions in Python inherit from <code>BaseException</code>.',
            '<code>Exception</code> is the base class for most built-in exceptions.',
            '<code>KeyboardInterrupt</code> and <code>SystemExit</code> inherit from <code>BaseException</code> directly.',
            'When you write custom exceptions, always inherit from <code>Exception</code>.'
          ],
          code: `BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 └── Exception
      ├── ArithmeticError
      │    └── ZeroDivisionError
      ├── LookupError
      │    ├── IndexError
      │    └── KeyError
      ├── TypeError
      ├── ValueError
      └── FileNotFoundError`
        }
      ]
    },
    'try-except-finally': {
      title: 'try, except, finally Blocks',
      sections: [
        {
          heading: 'What is try/except?',
          content: [
            'The <code>try</code> block lets you test a block of code for errors.',
            'The <code>except</code> block lets you handle the error.',
            'If no error occurs, Python skips the <code>except</code> block.',
            'You can have multiple <code>except</code> blocks for different error types.'
          ],
          code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = None

print(result)  # None`
        },
        {
          heading: 'Syntax',
          content: [
            '<code>try:</code> — start the code you want to test.',
            '<code>except ErrorType:</code> — handle a specific error.',
            '<code>except:</code> — handle any error (catches all).',
            '<code>except (Error1, Error2):</code> — handle multiple errors together.',
            '<code>except ErrorType as e:</code> — capture the error message in a variable.'
          ],
          code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number
except ValueError:
    print("That is not a valid number!")
except ZeroDivisionError:
    print("You cannot divide by zero!")
except Exception as e:
    print(f"Something went wrong: {e}")`
        },
        {
          heading: 'else and finally',
          content: [
            'The <code>else</code> block runs only if no exception occurs.',
            'The <code>finally</code> block always runs, regardless of errors.',
            'Use <code>finally</code> for cleanup, like closing files or connections.'
          ],
          code: `try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input!")
else:
    print(f"You entered: {number}")
finally:
    print("This always runs.")`
        },
        {
          heading: 'Examples',
          content: [
            'Example 1: Safe file reading with cleanup.',
            'Example 2: Catching multiple errors in one block.',
            'Example 3: Using the exception message for debugging.'
          ],
          code: `# Example 1: Safe file reading
try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found!")
finally:
    try:
        file.close()
        print("File closed.")
    except NameError:
        pass  # file was never opened

# Example 2: Multiple errors
try:
    value = my_list[index]
except (IndexError, TypeError):
    print("Something is wrong with the index.")

# Example 3: Get the error message
try:
    result = int("abc")
except ValueError as e:
    print(f"Error details: {e}")`
        }
      ]
    },
    'custom-exceptions': {
      title: 'Custom Exceptions',
      sections: [
        {
          heading: 'What is a Custom Exception?',
          content: [
            'A custom exception is an error you create yourself.',
            'Use custom exceptions when built-in exceptions are not descriptive enough.',
            'They make your code easier to understand and debug.',
            'All custom exceptions should inherit from the <code>Exception</code> class.'
          ]
        },
        {
          heading: 'Syntax',
          content: [
            'Step 1: Define a class that inherits from <code>Exception</code>.',
            'Step 2: Add a <code>__init__</code> method with your own message (optional).',
            'Step 3: Use <code>raise</code> to trigger the exception when needed.'
          ],
          code: `class ValidationError(Exception):
    """Raised when input validation fails."""
    pass

class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        message = f"Balance {balance} is too low for {amount}"
        super().__init__(message)

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except InsufficientFundsError as e:
    print(e)`
        },
        {
          heading: 'Examples',
          content: [
            'Example: A custom exception for invalid age input.',
            'Example: A custom exception for a password that is too short.'
          ],
          code: `class InvalidAgeError(Exception):
    def __init__(self, age):
        self.age = age
        super().__init__(f"Age {age} is not valid. Must be between 0 and 120.")

def set_age(age):
    if age < 0 or age > 120:
        raise InvalidAgeError(age)
    return age

try:
    set_age(150)
except InvalidAgeError as e:
    print(e)

# Password validation
class PasswordTooShortError(Exception):
    pass

def check_password(password):
    if len(password) < 8:
        raise PasswordTooShortError("Password must be at least 8 characters.")
    print("Password is valid.")

try:
    check_password("123")
except PasswordTooShortError as e:
    print(e)`
        }
      ]
    },
    'debugging-techniques': {
      title: 'Debugging Techniques',
      sections: [
        {
          heading: 'What is Debugging?',
          content: [
            'Debugging means finding and fixing errors in your code.',
            'The simplest technique is adding <code>print()</code> statements.',
            'Python also has a built-in debugger called <code>pdb</code>.',
            'IDEs like VS Code and PyCharm have visual debuggers with breakpoints.'
          ]
        },
        {
          heading: 'Using print() for Debugging',
          content: [
            'Add <code>print()</code> to show variable values at different points.',
            'Use <code>repr()</code> or the <code>!r</code> format to show exact values.',
            'Remove or comment out debug prints before releasing your code.'
          ],
          code: `def debug_print(value, label="DEBUG"):
    print(f"[{label}] {value!r}")

# Example: finding a bug
def calculate_average(numbers):
    debug_print(numbers, "Input")
    total = sum(numbers)
    debug_print(total, "Total")
    count = len(numbers)
    debug_print(count, "Count")
    return total / count

print(calculate_average([10, 20, 30]))`
        },
        {
          heading: 'Using pdb (Python Debugger)',
          content: [
            '<code>import pdb</code> brings in the built-in debugger.',
            '<code>pdb.set_trace()</code> pauses your code at that line.',
            'Type <code>n</code> to execute the next line.',
            'Type <code>s</code> to step into a function call.',
            'Type <code>c</code> to continue running until the next breakpoint.',
            'Type <code>p variable</code> to print a variable value.',
            'Type <code>q</code> to quit the debugger.'
          ],
          code: `import pdb

def buggy_function():
    x = 10
    y = 0
    pdb.set_trace()  # execution pauses here
    result = x / y
    return result

# Common pdb commands:
# n (next)     — run the next line
# s (step)     — step into a function
# c (continue) — keep running
# p x          — print the value of x
# q (quit)     — exit the debugger`
        },
        {
          heading: 'Using assert Statements',
          content: [
            '<code>assert</code> checks that a condition is True.',
            'If the condition is False, Python raises <code>AssertionError</code>.',
            'Use assertions for internal checks that should never fail.',
            'Assertions are skipped when you run Python with the <code>-O</code> flag.'
          ],
          code: `def divide(a, b):
    assert b != 0, "Divisor cannot be zero"
    assert isinstance(a, (int, float)), "a must be a number"
    assert isinstance(b, (int, float)), "b must be a number"
    return a / b

print(divide(10, 2))  # 5.0
# divide(10, 0)     # raises AssertionError`
        }
      ]
    },
    'unit-testing-unittest': {
      title: 'Unit Testing with unittest',
      sections: [
        {
          heading: 'What is unittest?',
          content: [
            '<code>unittest</code> is Python’s built-in testing framework.',
            'It is inspired by Java’s JUnit testing framework.',
            'Tests are written as methods inside a class that inherits from <code>unittest.TestCase</code>.',
            'Each test method must start with the word <code>test_</code>.'
          ]
        },
        {
          heading: 'Syntax',
          content: [
            'Step 1: <code>import unittest</code>.',
            'Step 2: Create a class that extends <code>unittest.TestCase</code>.',
            'Step 3: Write methods that start with <code>test_</code>.',
            'Step 4: Use assertion methods to check results.',
            'Step 5: Run tests with <code>unittest.main()</code> or <code>python -m unittest</code>.'
          ],
          code: `import unittest

def add(a, b):
    return a + b

def is_even(n):
    return n % 2 == 0

class TestMath(unittest.TestCase):
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)

    def test_add_zero(self):
        self.assertEqual(add(0, 5), 5)

    def test_is_even_true(self):
        self.assertTrue(is_even(4))

    def test_is_even_false(self):
        self.assertFalse(is_even(3))

if __name__ == "__main__":
    unittest.main()`
        },
        {
          heading: 'Common assert Methods',
          content: [
            '<code>assertEqual(a, b)</code> — checks a == b.',
            '<code>assertNotEqual(a, b)</code> — checks a != b.',
            '<code>assertTrue(x)</code> — checks x is True.',
            '<code>assertFalse(x)</code> — checks x is False.',
            '<code>assertIsNone(x)</code> — checks x is None.',
            '<code>assertIsNotNone(x)</code> — checks x is not None.',
            '<code>assertIn(a, b)</code> — checks a is in b.',
            '<code>assertRaises(Exception)</code> — checks an error is raised.',
            '<code>assertAlmostEqual(a, b)</code> — checks floats are close.'
          ],
          code: `import unittest

class TestExamples(unittest.TestCase):
    def test_equal(self):
        self.assertEqual(2 + 2, 4)

    def test_true(self):
        self.assertTrue(5 > 3)

    def test_in_list(self):
        self.assertIn(3, [1, 2, 3])

    def test_none(self):
        self.assertIsNone(None)

    def test_raises(self):
        with self.assertRaises(ZeroDivisionError):
            1 / 0

if __name__ == "__main__":
    unittest.main()`
        }
      ]
    },
    'unit-testing-pytest': {
      title: 'Unit Testing with pytest',
      sections: [
        {
          heading: 'What is pytest?',
          content: [
            '<code>pytest</code> is a popular third-party testing framework.',
            'It is simpler than <code>unittest</code> — no classes needed.',
            'Install it with <code>pip install pytest</code>.',
            'Test functions must start with <code>test_</code>.',
            'File names must start with <code>test_</code> or end with <code>_test.py</code>.'
          ]
        },
        {
          heading: 'Syntax',
          content: [
            'Step 1: Write a function that starts with <code>test_</code>.',
            'Step 2: Use <code>assert</code> to check conditions.',
            'Step 3: Run tests in the terminal with <code>pytest</code>.'
          ],
          code: `# test_math.py
# No need to import anything for basic tests

def add(a, b):
    return a + b

def test_add_positive():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -1) == -2

def test_add_zero():
    assert add(0, 5) == 5

def test_is_even():
    assert 4 % 2 == 0

# Run in terminal:
# pytest test_math.py`
        },
        {
          heading: 'pytest Fixtures',
          content: [
            'Fixtures provide setup data for multiple tests.',
            'Use the <code>@pytest.fixture</code> decorator to create one.',
            'Add the fixture name as an argument to your test function.',
            'Fixtures help you avoid repeating the same setup code.'
          ],
          code: `import pytest

@pytest.fixture
def sample_data():
    return {"name": "Alice", "age": 30}

def test_name(sample_data):
    assert sample_data["name"] == "Alice"

def test_age(sample_data):
    assert sample_data["age"] == 30`
        },
        {
          heading: 'Try it Yourself: Parametrized Tests',
          content: [
            '<code>@pytest.mark.parametrize</code> lets you run the same test with different inputs.',
            'This avoids writing many similar test functions.',
            'Each tuple in the list becomes one test case.'
          ],
          code: `import pytest

@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3),
    (5, 5, 10),
    (-1, 1, 0),
    (100, 200, 300),
])
def test_add_parametrized(a, b, expected):
    assert a + b == expected

# Run with: pytest test_math.py
# You will see 4 tests pass automatically!`
        }
      ]
    }
  },
  module5: {
'decorators': {
    title: 'Decorators',
    sections: [
      {
        heading: 'What is a Decorator?',
        content: [
          'A decorator is a function that wraps another function to add extra behavior.',
          'Think of it like a gift wrapper — it takes a function and "wraps" extra code around it.',
          'Decorators let you modify or extend functions without changing their actual code.',
          'They are commonly used for logging, timing, authentication, and caching.'
        ]
      },
      {
        heading: 'Syntax',
        content: [
          'Use the <code>@decorator_name</code> syntax above the function you want to decorate.',
          'The decorator must accept a function as an argument and return a new function.',
          'You can stack multiple decorators by placing them on separate lines.'
        ],
        code: `# Basic decorator syntax
@my_decorator
def my_function():
    pass

# Multiple decorators (bottom to top)
@decorator_two
@decorator_one
def my_function():
    pass`
      },
      {
        heading: 'Examples',
        content: [
          'Here is a simple decorator that prints messages before and after a function runs.'
        ],
        code: `import functools

def my_decorator(func):
    @functools.wraps(func)
    def wrapper():
        print("Something before the function runs")
        func()
        print("Something after the function runs")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Something before the function runs
# Hello!
# Something after the function runs`
      },
      {
        heading: 'Decorator with Arguments',
        content: [
          'If your decorated function needs arguments, the wrapper should accept <code>*args</code> and <code>**kwargs</code>.',
          'Use <code>@functools.wraps(func)</code> to preserve the original function name and docstring.'
        ],
        code: `import functools

def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Output: Hello, Alice! (printed 3 times)`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>@timer</code> decorator that measures how long a function takes to run.',
          'Hint: Use <code>time.time()</code> to get the current time before and after calling the function.',
          'Try applying it to a function that sleeps for 1 second using <code>time.sleep(1)</code>.'
        ]
      }
    ]
  },
  'generators-iterators': {
    title: 'Generators and Iterators',
    sections: [
      {
        heading: 'What is an Iterator?',
        content: [
          'An iterator is an object that produces values one at a time.',
          'It uses two special methods: <code>__iter__()</code> and <code>__next__()</code>.',
          'Lists, tuples, strings, and dictionaries are all iterable — you can loop over them.'
        ],
        code: `# Using an iterator manually
my_list = [1, 2, 3]
iterator = iter(my_list)

print(next(iterator))  # 1
print(next(iterator))  # 2
print(next(iterator))  # 3
# next(iterator) would raise StopIteration`
      },
      {
        heading: 'What is a Generator?',
        content: [
          'A generator is a special function that uses <code>yield</code> instead of <code>return</code>.',
          'It remembers its state between calls, so it can resume where it left off.',
          'Generators are memory-efficient because they produce values one at a time instead of storing everything in memory.'
        ],
        code: `def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Using the generator
for num in count_up_to(5):
    print(num)
# Output: 1, 2, 3, 4, 5`
      },
      {
        heading: 'Generator Expressions',
        content: [
          'Generator expressions look like list comprehensions but use parentheses <code>()</code> instead of brackets <code>[]</code>.',
          'They are lazy — values are computed only when needed.'
        ],
        code: `# List comprehension (stores all in memory)
squares_list = [x**2 for x in range(1000000)]

# Generator expression (lazy, memory-efficient)
squares_gen = (x**2 for x in range(1000000))

import sys
print(sys.getsizeof(squares_list))  # ~8 MB
print(sys.getsizeof(squares_gen))   # ~112 bytes

print(next(squares_gen))  # 0
print(next(squares_gen))  # 1`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a generator function <code>even_numbers(n)</code> that yields even numbers from 2 up to n.',
          'Use it in a for loop to print all even numbers up to 20.',
          'Compare the memory usage of a list vs a generator for large ranges.'
        ]
      }
    ]
  },
  'lambda-map-filter': {
    title: 'Lambda, map, filter',
    sections: [
      {
        heading: 'What is a Lambda Function?',
        content: [
          'A lambda is a small, anonymous function defined with the <code>lambda</code> keyword.',
          'It can take any number of arguments but only has one expression.',
          'Lambdas are useful for short, throwaway functions you only need once.'
        ],
        code: `# Basic lambda syntax
square = lambda x: x ** 2
print(square(5))  # 25

# Multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Lambda with no arguments
greet = lambda: "Hello!"
print(greet())  # Hello!`
      },
      {
        heading: 'Using Lambda with sorted()',
        content: [
          'Lambdas are often used as the <code>key</code> argument in <code>sorted()</code>.',
          'This lets you sort by a custom rule without writing a full function.'
        ],
        code: `students = [("Alice", 90), ("Bob", 85), ("Charlie", 95)]

# Sort by score (second element)
sorted_by_score = sorted(students, key=lambda x: x[1])
print(sorted_by_score)
# [("Bob", 85), ("Alice", 90), ("Charlie", 95)]

# Sort by name length
sorted_by_name = sorted(students, key=lambda x: len(x[0]))
print(sorted_by_name)
# [("Bob", 85), ("Alice", 90), ("Charlie", 95)]`
      },
      {
        heading: 'map() and filter()',
        content: [
          '<code>map(function, iterable)</code> applies a function to every item and returns the results.',
          '<code>filter(function, iterable)</code> keeps only items where the function returns <code>True</code>.',
          'Both return iterator objects — wrap with <code>list()</code> to see all results.'
        ],
        code: `numbers = [1, 2, 3, 4, 5]

# map: square every number
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# filter: keep only even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)    # [2, 4]

# Equivalent using list comprehensions
squares_lc = [x**2 for x in numbers]
evens_lc = [x for x in numbers if x % 2 == 0]
print(squares_lc, evens_lc)`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Use <code>map()</code> to convert a list of temperatures from Celsius to Fahrenheit.',
          'Formula: <code>F = C * 9/5 + 32</code>.',
          'Use <code>filter()</code> to keep only temperatures above 20°C.',
          'Try rewriting both using list comprehensions.'
        ]
      }
    ]
  },
  'context-managers': {
    title: 'Context Managers (with statement)',
    sections: [
      {
        heading: 'What is a Context Manager?',
        content: [
          'A context manager handles setup and cleanup automatically.',
          'The <code>with</code> statement ensures resources are properly released, even if errors occur.',
          'The most common use is opening files, but you can create your own for any resource.'
        ]
      },
      {
        heading: 'Syntax',
        content: [
          'Use <code>with expression as variable:</code> to enter a context.',
          'The resource is automatically cleaned up when the block ends.'
        ],
        code: `# Basic syntax
with open("file.txt", "r") as file:
    data = file.read()
# File is automatically closed here, even if an error occurs

# Multiple context managers
with open("a.txt") as f1, open("b.txt", "w") as f2:
    f2.write(f1.read())`
      },
      {
        heading: 'Creating Custom Context Managers',
        content: [
          'The easiest way is using the <code>@contextmanager</code> decorator from <code>contextlib</code>.',
          'Code before <code>yield</code> runs on entry; code after <code>yield</code> runs on exit.'
        ],
        code: `from contextlib import contextmanager

@contextmanager
def my_context():
    print("Entering the context")
    yield "hello"
    print("Leaving the context")

with my_context() as value:
    print(f"Inside the context: {value}")

# Output:
# Entering the context
# Inside the context: hello
# Leaving the context`
      },
      {
        heading: 'Class-Based Context Manager',
        content: [
          'For more control, create a class with <code>__enter__</code> and <code>__exit__</code> methods.',
          '<code>__exit__</code> receives exception info if an error occurs.'
        ],
        code: `class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Elapsed time: {elapsed:.4f} seconds")
        return False  # do not suppress exceptions

with Timer():
    total = sum(range(1000000))
    print(f"Sum = {total}")`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a context manager that prints a banner line before and after a block of code runs.',
          'Example output: <code>=== START ===</code>, then the code runs, then <code>=== END ===</code>.',
          'Use <code>@contextmanager</code> for the simplest solution.'
        ]
      }
    ]
  },
  'threading-concurrency': {
    title: 'Threading and Concurrency',
    sections: [
      {
        heading: 'What is Threading?',
        content: [
          'Threading lets your program run multiple tasks at the same time.',
          'Each thread is a separate path of execution within the same program.',
          'Threading is great for I/O-bound tasks like downloading files or reading from a database.',
          'For CPU-bound tasks (heavy calculations), use <code>multiprocessing</code> instead.'
        ]
      },
      {
        heading: 'Creating Threads',
        content: [
          'Use the <code>threading</code> module to create and start threads.',
          'Pass the target function and its arguments to <code>Thread()</code>.'
        ],
        code: `import threading
import time

def worker(name, delay):
    print(f"{name} starting")
    time.sleep(delay)
    print(f"{name} done")

# Create threads
thread1 = threading.Thread(target=worker, args=("Thread-1", 1))
thread2 = threading.Thread(target=worker, args=("Thread-2", 2))

# Start threads
thread1.start()
thread2.start()

# Wait for both to finish
thread1.join()
thread2.join()

print("All threads completed")`
      },
      {
        heading: 'ThreadPoolExecutor (Recommended)',
        content: [
          '<code>ThreadPoolExecutor</code> from <code>concurrent.futures</code> is the modern way to manage threads.',
          'It handles thread creation, reuse, and cleanup automatically.'
        ],
        code: `from concurrent.futures import ThreadPoolExecutor
import urllib.request

def fetch_url(url):
    with urllib.request.urlopen(url) as response:
        return len(response.read())

urls = ["https://example.com"] * 5

with ThreadPoolExecutor(max_workers=5) as executor:
    results = executor.map(fetch_url, urls)
    for i, size in enumerate(results):
        print(f"URL {i}: {size} bytes")`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a program that downloads 3 web pages concurrently using threads.',
          'Use <code>ThreadPoolExecutor</code> with <code>max_workers=3</code>.',
          'Print the length of each page\'s HTML content.',
          'Compare how long it takes with and without threading.'
        ]
      }
    ]
  },
  'asyncio-async-await': {
    title: 'Asyncio and async/await',
    sections: [
      {
        heading: 'What is Asyncio?',
        content: [
          'Asyncio is Python\'s library for writing concurrent code using the <code>async</code>/<code>await</code> syntax.',
          'It is designed for I/O-bound tasks like network requests and file operations.',
          'Unlike threads, asyncio uses a single thread with an event loop — no context switching overhead.',
          '<code>async def</code> creates a coroutine; <code>await</code> pauses it until the result is ready.'
        ]
      },
      {
        heading: 'Syntax',
        content: [
          '<code>async def</code> defines an asynchronous function (coroutine).',
          '<code>await</code> can only be used inside an <code>async def</code> function.',
          'Use <code>asyncio.run()</code> to start the event loop and run your main coroutine.'
        ],
        code: `import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

# Run the coroutine
asyncio.run(say_hello())
# Output: Hello (waits 1 second) World`
      },
      {
        heading: 'Running Multiple Tasks Concurrently',
        content: [
          'Use <code>asyncio.gather()</code> to run multiple coroutines at the same time.',
          'This is much faster than running them one by one when tasks involve waiting.'
        ],
        code: `import asyncio

async def task(name, delay):
    print(f"Task {name} starting")
    await asyncio.sleep(delay)
    print(f"Task {name} done")

async def main():
    # Run sequentially (slower)
    await task("A", 2)
    await task("B", 2)
    # Total: 4 seconds

    # Run concurrently (faster)
    await asyncio.gather(
        task("C", 2),
        task("D", 2),
    )
    # Total: 2 seconds

asyncio.run(main())`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write an async function that simulates fetching data from a server with <code>asyncio.sleep(1)</code>.',
          'Fetch 5 "pages" concurrently using <code>asyncio.gather()</code>.',
          'Time how long the concurrent version takes vs a sequential loop.',
          'Expected result: concurrent should take ~1 second, sequential ~5 seconds.'
        ]
      }
    ]
  }
}
};