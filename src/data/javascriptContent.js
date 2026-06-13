export const javascriptStructure = {
  module1: {
    title: 'Module 1: JavaScript Fundamentals',
    topics: [
      { id: 'intro-javascript', title: 'Introduction to JavaScript' },
      { id: 'variables-data-types', title: 'Variables and Data Types' },
      { id: 'operators-expressions', title: 'Operators and Expressions' },
      { id: 'control-flow', title: 'Control Flow (if, switch, loops)' },
      { id: 'functions', title: 'Functions' },
      { id: 'arrays', title: 'Arrays' },
      { id: 'objects', title: 'Objects' }
    ]
  },
  module2: {
    title: 'Module 2: DOM and Web APIs',
    topics: [
      { id: 'dom-basics', title: 'DOM Basics' },
      { id: 'events', title: 'Events and Event Listeners' },
      { id: 'dom-manipulation', title: 'DOM Manipulation' },
      { id: 'forms-validation', title: 'Forms and Validation' },
      { id: 'fetch-api', title: 'Fetch API and AJAX' },
      { id: 'local-storage', title: 'Local Storage and Session Storage' },
      { id: 'timers', title: 'Timers and Intervals' }
    ]
  },
  module3: {
    title: 'Module 3: Modern JavaScript (ES6+)',
    topics: [
      { id: 'arrow-functions', title: 'Arrow Functions' },
      { id: 'template-literals', title: 'Template Literals' },
      { id: 'destructuring', title: 'Destructuring' },
      { id: 'spread-rest', title: 'Spread and Rest Operators' },
      { id: 'classes', title: 'Classes in JavaScript' },
      { id: 'promises-async', title: 'Promises and Async/Await' },
      { id: 'modules-imports', title: 'Modules and Imports' }
    ]
  },
  module4: {
    title: 'Module 4: Advanced JavaScript',
    topics: [
      { id: 'closures', title: 'Closures' },
      { id: 'this-keyword', title: 'The this Keyword' },
      { id: 'prototypes', title: 'Prototypes and Inheritance' },
      { id: 'error-handling', title: 'Error Handling' },
      { id: 'regex', title: 'Regular Expressions' },
      { id: 'json', title: 'Working with JSON' },
      { id: 'debugging', title: 'Debugging Techniques' }
    ]
  }
};


export const javascriptModule1Content = {
  module1: {
    'intro-javascript': {
      title: 'Introduction to JavaScript',
      sections: [
        {
          heading: 'What is JavaScript?',
          content: [
            'JavaScript is a programming language that makes web pages interactive.',
            'It was created by Brendan Eich in 1995 and is now one of the most popular languages in the world.',
            'JavaScript runs in your browser and can also run on servers using Node.js.',
            '<strong>What can JavaScript do?</strong>',
            '<ul><li>Change HTML content and styles</li><li>React to user clicks, typing, and mouse movements</li><li>Validate form data before sending</li><li>Build entire web and mobile applications</li></ul>'
          ]
        },
        {
          heading: 'JavaScript Syntax',
          content: [
            'JavaScript statements end with a semicolon <code>;</code> (though it often works without them).',
            'Blocks of code are wrapped in curly braces <code>{}</code>.',
            'Comments use <code>//</code> for single-line and <code>/* */</code> for multi-line.',
            'Output is shown with <code>console.log()</code> in practice, or <code>alert()</code> for popups.'
          ],
          code: `// This is a single-line comment
/* This is a
   multi-line comment */

console.log("Hello, World!");
alert("This is a popup!");`
        },
        {
          heading: 'JavaScript in HTML',
          content: [
            'You can add JavaScript to HTML in two ways:',
            '<ul><li><strong>Internal</strong> — inside a <code>&lt;script&gt;</code> tag in the HTML file</li><li><strong>External</strong> — in a separate <code>.js</code> file linked with <code>src</code></li></ul>'
          ],
          code: `<!-- Internal JavaScript -->
<script>
  console.log("Hello from internal script!");
</script>

<!-- External JavaScript -->
<script src="myscript.js"></script>`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Open your browser console (F12 → Console tab) and type the following code.',
            'Experiment: change the message and run it again.'
          ],
          code: `console.log("I am learning JavaScript!");

let myName = "Your Name";
console.log("My name is " + myName);`
        }
      ]
    },
    'variables-data-types': {
      title: 'Variables and Data Types',
      sections: [
        {
          heading: 'What are Variables?',
          content: [
            'Variables are containers for storing data values in JavaScript.',
            'Think of them as labeled boxes where you keep things for later use.',
            'You can create variables using <code>let</code>, <code>const</code>, or <code>var</code>.',
            '<strong>Best practice:</strong> Use <code>let</code> for values that change, and <code>const</code> for values that stay the same.'
          ],
          code: `let age = 25;        // can be changed later
const PI = 3.14159;  // cannot be changed
var name = "Alice";   // older way, still works

age = 26;            // OK
// PI = 3.14;        // ERROR! Cannot reassign const`
        },
        {
          heading: 'Data Types',
          content: [
            'JavaScript has several built-in data types:',
            '<ul><li><strong>string</strong> — text inside quotes (e.g., <code>"hello"</code>)</li><li><strong>number</strong> — integers and decimals (e.g., <code>42</code>, <code>3.14</code>)</li><li><strong>boolean</strong> — <code>true</code> or <code>false</code></li><li><strong>undefined</strong> — a variable that has no value yet</li><li><strong>null</strong> — intentionally empty value</li><li><strong>object</strong> — complex data structures (arrays, objects, dates)</li></ul>'
          ],
          table: {
            headers: ['Type', 'Description', 'Example'],
            rows: [
              ['string', 'Text inside quotes', '"hello"'],
              ['number', 'Integer or decimal', '42 or 3.14'],
              ['boolean', 'true or false', 'true'],
              ['undefined', 'Declared but not assigned', 'let x;'],
              ['null', 'Intentionally empty', 'let y = null;'],
              ['object', 'Collections and complex data', '{ name: "A" }']
            ]
          },
          code: `let greeting = "Hello";     // string
let count = 10;              // number
let price = 19.99;           // number
let isActive = true;         // boolean
let result = undefined;      // undefined
let empty = null;            // null

console.log(typeof greeting); // "string"
console.log(typeof count);    // "number"
console.log(typeof isActive); // "boolean"`
        },
        {
          heading: 'Strings and Template Literals',
          content: [
            'Strings can use single quotes <code>\'</code>, double quotes <code>"</code>, or backticks <code>`</code>.',
            'Backticks allow <strong>template literals</strong> — embedding variables directly inside strings using <code>${}</code>.'
          ],
          code: `let name = "Alice";
let age = 25;

// Old way (concatenation)
let message1 = "Hello, " + name + "! You are " + age + " years old.";

// Modern way (template literal)
let message2 = \`Hello, \${name}! You are \${age} years old.\`;

console.log(message1);
console.log(message2);`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Create variables for your name, age, and favorite color.',
            'Print them using both concatenation and template literals.'
          ],
          code: `let myName = "Your Name";
let myAge = 20;
let favoriteColor = "blue";

console.log("My name is " + myName + " and I like " + favoriteColor);
console.log(\`I am \${myAge} years old.\`);`
        }
      ]
    },
    'operators-expressions': {
      title: 'Operators and Expressions',
      sections: [
        {
          heading: 'Arithmetic Operators',
          content: [
            'JavaScript uses standard math operators for calculations:',
            '<ul><li><code>+</code> Addition</li><li><code>-</code> Subtraction</li><li><code>*</code> Multiplication</li><li><code>/</code> Division</li><li><code>%</code> Modulus (remainder)</li><li><code>**</code> Exponentiation (power)</li></ul>'
          ],
          code: `let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder of 10 / 3)
console.log(a ** b); // 1000 (10 to the power of 3)`
        },
        {
          heading: 'Assignment and Increment Operators',
          content: [
            'Assignment operators combine math with assignment for shorter code.',
            'Increment <code>++</code> and decrement <code>--</code> add or subtract 1.'
          ],
          code: `let x = 10;

x += 5;   // same as x = x + 5;   → 15
x -= 3;   // same as x = x - 3;   → 12
x *= 2;   // same as x = x * 2;   → 24
x /= 4;   // same as x = x / 4;   → 6

let count = 0;
count++;  // count is now 1
count--;  // count is now 0`
        },
        {
          heading: 'Comparison Operators',
          content: [
            'Comparison operators return <code>true</code> or <code>false</code>:',
            '<ul><li><code>==</code> equal to (loose, converts types)</li><li><code>===</code> strictly equal (same value AND type)</li><li><code>!=</code> not equal</li><li><code>!==</code> strictly not equal</li><li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> greater/less than</li></ul>',
            '<strong>Tip:</strong> Always use <code>===</code> and <code>!==</code> to avoid unexpected type conversions.'
          ],
          code: `let a = 5;
let b = "5";

console.log(a == b);   // true (type converted)
console.log(a === b);  // false (number !== string)
console.log(a != b);   // false
console.log(a !== b);  // true

console.log(10 > 5);   // true
console.log(3 <= 3);   // true`
        },
        {
          heading: 'Logical Operators',
          content: [
            'Logical operators combine boolean expressions:',
            '<ul><li><code>&&</code> AND — both must be true</li><li><code>||</code> OR — at least one must be true</li><li><code>!</code> NOT — reverses the boolean</li></ul>'
          ],
          code: `let isMember = true;
let hasCoupon = false;

console.log(isMember && hasCoupon); // false (both not true)
console.log(isMember || hasCoupon); // true (one is true)
console.log(!isMember);             // false (reversed)

// Practical example
let age = 20;
let hasID = true;
let canEnter = age >= 18 && hasID;
console.log(canEnter); // true`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Calculate the area of a rectangle (width * height), then check if it is greater than 100.',
            'Experiment with different values.'
          ],
          code: `let width = 15;
let height = 8;
let area = width * height;

console.log("Area:", area);
console.log("Is area > 100?", area > 100);
console.log("Is area between 50 and 150?", area > 50 && area < 150);`
        }
      ]
    },
    'control-flow': {
      title: 'Control Flow (if, switch, loops)',
      sections: [
        {
          heading: 'if, else if, else',
          content: [
            'Use <code>if</code> statements to run code only when a condition is true.',
            '<code>else if</code> checks another condition if the first is false.',
            '<code>else</code> runs when no condition is true.'
          ],
          code: `let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");  // This runs
} else {
  console.log("Good evening!");
}`
        },
        {
          heading: 'switch Statement',
          content: [
            'Use <code>switch</code> when comparing one value against many possible cases.',
            'Always include <code>break</code> to stop after a match — otherwise it falls through to the next case.'
          ],
          code: `let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");  // This runs
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Weekend!");
}`
        },
        {
          heading: 'for Loop',
          content: [
            'A <code>for</code> loop repeats code a known number of times.',
            'It has three parts: <strong>initialization</strong>; <strong>condition</strong>; <strong>increment</strong>.'
          ],
          code: `// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// Sum of first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum); // 55`
        },
        {
          heading: 'while and do...while Loops',
          content: [
            '<code>while</code> loops repeat while a condition remains true.',
            '<code>do...while</code> always runs at least once before checking the condition.'
          ],
          code: `// while loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// do...while loop
let num = 10;
do {
  console.log("Num:", num);  // runs once even though num > 5
  num++;
} while (num <= 5);`
        },
        {
          heading: 'break and continue',
          content: [
            '<code>break</code> immediately exits the loop.',
            '<code>continue</code> skips the rest of the current iteration and moves to the next.'
          ],
          code: `// break example: stop when finding 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5, stopping!");
    break;
  }
  console.log(i);
}

// continue example: skip even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // skip even numbers
  }
  console.log(i);  // prints only odd numbers: 1, 3, 5, 7, 9
}`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Write a loop that prints the multiplication table for 7 (7×1 to 7×10).',
            'Then modify it to skip the 5th iteration using <code>continue</code>.'
          ],
          code: `// Multiplication table for 7
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Skipping 7 x 5...");
    continue;
  }
  console.log(\`7 x \${i} = \${7 * i}\`);
}`
        }
      ]
    },
    'functions': {
      title: 'Functions',
      sections: [
        {
          heading: 'What is a Function?',
          content: [
            'A <strong>function</strong> is a reusable block of code that performs a specific task.',
            'Functions help you avoid repeating code and make programs easier to read and maintain.',
            'Think of a function like a recipe: you write it once, then use it whenever you need it.'
          ],
          code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
let message = greet("Alice");
console.log(message);  // "Hello, Alice!"
console.log(greet("Bob"));  // "Hello, Bob!"`
        },
        {
          heading: 'Function Parameters and Return',
          content: [
            '<strong>Parameters</strong> are inputs a function accepts.',
            '<strong>return</strong> sends a value back to where the function was called.',
            'If there is no <code>return</code>, the function returns <code>undefined</code>.'
          ],
          code: `function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(5, 3));      // 8
console.log(multiply(4, 7)); // 28

// Function without return
function printSum(a, b) {
  console.log(a + b);
}
let result = printSum(2, 3); // prints 5
console.log(result);         // undefined`
        },
        {
          heading: 'Arrow Functions',
          content: [
            '<strong>Arrow functions</strong> are a shorter way to write function expressions.',
            'They use <code>=&gt;</code> (the "fat arrow") and are especially useful for short, one-line functions.'
          ],
          code: `// Traditional function
function square(x) {
  return x * x;
}

// Arrow function (equivalent)
const squareArrow = (x) => {
  return x * x;
};

// Even shorter (one line, implicit return)
const squareShort = x => x * x;

console.log(square(5));       // 25
console.log(squareArrow(5));  // 25
console.log(squareShort(5));  // 25

// Arrow function with multiple parameters
const greet = (first, last) => \`Hello, \${first} \${last}!\`;
console.log(greet("John", "Doe")); // "Hello, John Doe!"`
        },
        {
          heading: 'Default Parameters',
          content: [
            'You can set default values for parameters. If no value is passed, the default is used.'
          ],
          code: `function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet());         // "Hello, Guest!"

function calculateTotal(price, tax = 0.05) {
  return price + (price * tax);
}

console.log(calculateTotal(100));      // 105 (default 5% tax)
console.log(calculateTotal(100, 0.1)); // 110 (10% tax)`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Create a function that calculates the area of a circle given a radius.',
            'Use PI = 3.14159. Then call it with radius 5 and 10.'
          ],
          code: `const PI = 3.14159;

function circleArea(radius) {
  return PI * radius * radius;
}

console.log(circleArea(5));  // 78.53975
console.log(circleArea(10)); // 314.159

// Arrow function version
const circleAreaArrow = r => PI * r * r;
console.log(circleAreaArrow(7)); // 153.93809`
        }
      ]
    },
    'arrays': {
      title: 'Arrays',
      sections: [
        {
          heading: 'What is an Array?',
          content: [
            'An <strong>array</strong> is a list of values stored in a single variable.',
            'Arrays can hold any type of data: numbers, strings, objects, or even other arrays.',
            'Array items are numbered starting from <strong>0</strong> (called the index).'
          ],
          code: `// Creating arrays
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [10, 20, 30, 40, 50];
let mixed = ["hello", 42, true, null];

// Accessing items
console.log(fruits[0]);    // "Apple"
console.log(fruits[2]);    // "Cherry"
console.log(numbers[1]);   // 20

// Changing an item
fruits[1] = "Blueberry";
console.log(fruits);       // ["Apple", "Blueberry", "Cherry"]`
        },
        {
          heading: 'Common Array Methods',
          content: [
            'JavaScript provides many built-in methods to work with arrays:',
            '<ul><li><code>push()</code> — add item to the end</li><li><code>pop()</code> — remove last item</li><li><code>shift()</code> — remove first item</li><li><code>unshift()</code> — add item to the beginning</li><li><code>length</code> — number of items</li></ul>'
          ],
          code: `let colors = ["Red", "Green"];

// Adding items
colors.push("Blue");       // ["Red", "Green", "Blue"]
colors.unshift("Yellow");  // ["Yellow", "Red", "Green", "Blue"]

// Removing items
colors.pop();              // removes "Blue"
colors.shift();            // removes "Yellow"

console.log(colors);       // ["Red", "Green"]
console.log(colors.length); // 2`
        },
        {
          heading: 'Iterating Over Arrays',
          content: [
            'You can loop through arrays using <code>for</code>, <code>for...of</code>, or the <code>forEach()</code> method.'
          ],
          code: `let scores = [85, 92, 78, 95, 88];

// Using for loop
for (let i = 0; i < scores.length; i++) {
  console.log(\`Score \${i + 1}: \${scores[i]}\`);
}

// Using for...of
for (let score of scores) {
  console.log("Score:", score);
}

// Using forEach
scores.forEach((score, index) => {
  console.log(\`\${index}: \${score}\`);
});`
        },
        {
          heading: 'Array Methods: map, filter, find',
          content: [
            '<strong>map</strong> — transforms every item and returns a new array.',
            '<strong>filter</strong> — returns a new array with items that pass a test.',
            '<strong>find</strong> — returns the first item that passes a test.'
          ],
          code: `let numbers = [1, 2, 3, 4, 5];

// map: double every number
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: get only even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4]

// find: get first number greater than 3
let first = numbers.find(n => n > 3);
console.log(first);   // 4`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Create an array of prices. Use <code>map</code> to add 10% tax to each.',
            'Then use <code>filter</code> to get only prices above 50.'
          ],
          code: `let prices = [25, 60, 45, 80, 30];

// Add 10% tax to each
let withTax = prices.map(price => price * 1.1);
console.log("With tax:", withTax);

// Filter prices above 50
let expensive = prices.filter(price => price > 50);
console.log("Above 50:", expensive);

// Find first price above 40
let firstAbove40 = prices.find(price => price > 40);
console.log("First above 40:", firstAbove40);`
        }
      ]
    },
    'objects': {
      title: 'Objects',
      sections: [
        {
          heading: 'What is an Object?',
          content: [
            'An <strong>object</strong> stores data as key-value pairs called <strong>properties</strong>.',
            'Objects are like real-world items: they have properties (characteristics) and methods (actions).',
            'Think of a car: it has color, brand, year (properties) and can drive, honk (methods).'
          ],
          code: `// Creating an object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};

// Accessing properties
console.log(person.firstName);     // "John" (dot notation)
console.log(person["lastName"]);   // "Doe" (bracket notation)

// Adding and modifying properties
person.age = 31;
person.country = "USA";
console.log(person);`
        },
        {
          heading: 'Object Methods',
          content: [
            'Properties that store functions are called <strong>methods</strong>.',
            'Inside a method, <code>this</code> refers to the object itself.'
          ],
          code: `let user = {
  name: "Alice",
  age: 25,
  greet: function() {
    return \`Hello, my name is \${this.name}!\`;
  },
  haveBirthday: function() {
    this.age++;
    return \`I am now \${this.age} years old.\`;
  }
};

console.log(user.greet());        // "Hello, my name is Alice!"
console.log(user.haveBirthday()); // "I am now 26 years old."
console.log(user.age);            // 26`
        },
        {
          heading: 'Object Destructuring',
          content: [
            '<strong>Destructuring</strong> is a shortcut to extract multiple properties into variables.'
          ],
          code: `let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

// Without destructuring
let title1 = book.title;
let author1 = book.author;

// With destructuring
let { title, author, year } = book;
console.log(\`\${title} by \${author} (\${year})\`);

// Destructuring with different names
let { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle); // "The Great Gatsby"`
        },
        {
          heading: 'Array of Objects',
          content: [
            'Arrays often contain objects, especially when dealing with lists of things like users, products, or tasks.'
          ],
          code: `let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];

// Access an object in the array
console.log(students[0].name);   // "Alice"

// Loop through array of objects
for (let student of students) {
  console.log(\`\${student.name}: \${student.grade}\`);
}

// Find student with highest grade
let topStudent = students.reduce((best, current) =>
  current.grade > best.grade ? current : best
);
console.log("Top student:", topStudent.name); // "Bob"`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Create an array of 3 product objects with <code>name</code> and <code>price</code>.',
            'Use <code>map</code> to create a new array with a 20% discount applied to each price.'
          ],
          code: `let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

// Apply 20% discount
let discounted = products.map(product => ({
  name: product.name,
  price: product.price * 0.8
}));

console.log("Original:", products);
console.log("Discounted:", discounted);

// Find total price
let total = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total:", total); // 1100`
        }
      ]
    }
  }
};

const jsModule2Content = {
  'dom-basics': {
    title: 'DOM Basics',
    sections: [
      {
        heading: 'What is the DOM?',
        content: [
          'The <strong>Document Object Model (DOM)</strong> is a programming interface for web documents.',
          'It represents the page as a tree of objects so that programs can change the document structure, style, and content.',
          'When a browser loads a page, it creates a DOM tree from the HTML. Every HTML element becomes a node in this tree.',
          'Think of the DOM like a family tree for your webpage — each element is a member with parents, children, and siblings.'
        ],
        code: `// The DOM is created automatically when the page loads
// You can access it through the 'document' object

console.log(document);           // the entire document
console.log(document.title);     // page title
console.log(document.URL);       // page URL`,
        diagram: {
          caption: 'A simple DOM tree',
          chart: `flowchart TD
    Document --> HTML
    HTML --> HEAD
    HTML --> BODY
    HEAD --> TITLE["&lt;title&gt;My Page&lt;/title&gt;"]
    BODY --> H1["&lt;h1&gt;Hello&lt;/h1&gt;"]
    BODY --> P["&lt;p&gt;Welcome&lt;/p&gt;"]`
        }
      },
      {
        heading: 'Selecting Elements',
        content: [
          'JavaScript provides several ways to find elements in the DOM:',
          '<ul><li><code>getElementById(id)</code> — finds one element by its id</li><li><code>getElementsByClassName(name)</code> — finds elements by class name</li><li><code>getElementsByTagName(name)</code> — finds elements by tag name</li><li><code>querySelector(selector)</code> — finds the first matching element</li><li><code>querySelectorAll(selector)</code> — finds all matching elements</li></ul>'
        ],
        code: `// Select by ID
let header = document.getElementById("main-header");
console.log(header);  // <h1 id="main-header">...</h1>

// Select by class name
let items = document.getElementsByClassName("menu-item");
console.log(items.length);  // 3
console.log(items[0]);      // first element with class "menu-item"

// Select by tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);  // number of <p> tags

// querySelector (CSS style)
let firstButton = document.querySelector("button");
let allButtons = document.querySelectorAll(".btn");
console.log(allButtons.length);  // all elements with class "btn"`
      },
      {
        heading: 'Navigating the DOM Tree',
        content: [
          'Once you have an element, you can move around the tree using parent and child relationships.',
          '<ul><li><code>parentNode</code> — the parent element</li><li><code>childNodes</code> — all child nodes (includes text)</li><li><code>children</code> — only element children</li><li><code>firstElementChild</code> — first child element</li><li><code>lastElementChild</code> — last child element</li><li><code>nextElementSibling</code> — next sibling element</li><li><code>previousElementSibling</code> — previous sibling element</li></ul>'
        ],
        code: `let box = document.getElementById("content-box");

console.log(box.parentNode);           // parent element
console.log(box.children);             // only element children
console.log(box.firstElementChild);    // first child element
console.log(box.lastElementChild);     // last child element
console.log(box.nextElementSibling);   // next sibling element`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a simple HTML page with a div containing three paragraphs.',
          'Use JavaScript to select the div and log its children to the console.'
        ],
        code: `// HTML structure:
// <div id="container">
//   <p>First</p>
//   <p>Second</p>
//   <p>Third</p>
// </div>

let container = document.getElementById("container");
console.log("Number of children:", container.children.length);
console.log("First child:", container.firstElementChild.textContent);`
      }
    ]
  },
  'events': {
    title: 'JavaScript Events',
    sections: [
      {
        heading: 'What are Events?',
        content: [
          'Events are actions that happen in the browser, such as clicking a button, pressing a key, or loading a page.',
          'JavaScript can detect these events and run code in response. This is the foundation of interactive web pages.',
          'Common events include:',
          '<ul><li><code>click</code> — when an element is clicked</li><li><code>mouseover</code> — when the mouse enters an element</li><li><code>mouseout</code> — when the mouse leaves an element</li><li><code>keydown</code> — when a key is pressed</li><li><code>load</code> — when the page finishes loading</li><li><code>submit</code> — when a form is submitted</li><li><code>change</code> — when an input value changes</li></ul>'
        ],
        code: `// The simplest way: inline event handler (not recommended)
// <button onclick="alert('Clicked!')">Click me</button>

// Better way: addEventListener
let btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
  console.log("Button was clicked!");
});`
      },
      {
        heading: 'addEventListener',
        content: [
          '<code>addEventListener</code> is the modern way to handle events. It lets you attach multiple handlers to the same event.',
          'Syntax: <code>element.addEventListener(event, function, useCapture)</code>',
          '<ul><li><strong>event</strong> — the event name (e.g., "click")</li><li><strong>function</strong> — the function to run</li><li><strong>useCapture</strong> — optional, true/false for event capturing</li></ul>'
        ],
        code: `let box = document.getElementById("color-box");

// Click event
box.addEventListener("click", function() {
  console.log("Box clicked!");
  box.style.backgroundColor = "lightblue";
});

// Mouse enter event
box.addEventListener("mouseenter", function() {
  console.log("Mouse entered the box");
});

// Mouse leave event
box.addEventListener("mouseleave", function() {
  console.log("Mouse left the box");
});`
      },
      {
        heading: 'The Event Object',
        content: [
          'When an event fires, the browser passes an <strong>event object</strong> to your handler function.',
          'This object contains useful information about the event.',
          '<ul><li><code>event.target</code> — the element that triggered the event</li><li><code>event.type</code> — the type of event ("click", "keydown", etc.)</li><li><code>event.clientX</code>, <code>event.clientY</code> — mouse position</li><li><code>event.key</code> — the key pressed (for keyboard events)</li><li><code>event.preventDefault()</code> — stops the default action</li><li><code>event.stopPropagation()</code> — stops event bubbling</li></ul>'
        ],
        code: `document.addEventListener("click", function(event) {
  console.log("Clicked element:", event.target);
  console.log("Event type:", event.type);
  console.log("Mouse X:", event.clientX);
  console.log("Mouse Y:", event.clientY);
});

// Keyboard event
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
  console.log("Key code:", event.code);
  
  if (event.key === "Enter") {
    console.log("Enter key was pressed!");
  }
});`
      },
      {
        heading: 'Event Bubbling and Capturing',
        content: [
          'When an event happens on an element, it also happens on its parent elements — this is called <strong>bubbling</strong>.',
          'Clicking a button inside a div also clicks the div (and then the body, and then the document).',
          'Use <code>event.stopPropagation()</code> to prevent bubbling.',
          '<strong>Capturing</strong> is the opposite: the event travels from the document down to the target element.',
          'Most of the time, you work with bubbling (the default).'
        ],
        code: `let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

outer.addEventListener("click", function() {
  console.log("Outer clicked");
});

inner.addEventListener("click", function(event) {
  console.log("Inner clicked");
  // Without stopPropagation, "Outer clicked" would also log
  event.stopPropagation();
});`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a button and a div. Add click handlers to both.',
          'Experiment with and without <code>stopPropagation()</code> to see the difference.'
        ],
        code: `let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Add click handlers
parent.addEventListener("click", function() {
  console.log("Parent handler");
});

child.addEventListener("click", function(event) {
  console.log("Child handler");
  // Try commenting out the next line
  event.stopPropagation();
});

// Expected without stopPropagation:
// "Child handler"
// "Parent handler"

// Expected with stopPropagation:
// "Child handler"`
      }
    ]
  },
  'dom-manipulation': {
    title: 'DOM Manipulation',
    sections: [
      {
        heading: 'Changing Content',
        content: [
          'You can change the content of HTML elements using JavaScript.',
          '<ul><li><code>innerHTML</code> — gets or sets the HTML content inside an element</li><li><code>textContent</code> — gets or sets the text content (no HTML parsing)</li><li><code>innerText</code> — gets or sets visible text (respects CSS)</li></ul>',
          '<strong>Warning:</strong> Using <code>innerHTML</code> with user input can be dangerous (XSS attacks). Use <code>textContent</code> for plain text.'
        ],
        code: `let heading = document.getElementById("title");

// Change text content
heading.textContent = "New Title";
console.log(heading.textContent);  // "New Title"

// Change HTML content
let box = document.getElementById("content");
box.innerHTML = "<strong>Bold text</strong> and <em>italic text</em>";

// Read current content
console.log(box.innerHTML);      // the HTML string
console.log(box.textContent);    // just the text without tags`
      },
      {
        heading: 'Changing Styles',
        content: [
          'You can modify CSS styles directly through the <code>style</code> property.',
          'CSS property names with hyphens become camelCase in JavaScript (e.g., <code>background-color</code> → <code>backgroundColor</code>).'
        ],
        code: `let box = document.getElementById("box");

// Change styles directly
box.style.backgroundColor = "coral";
box.style.color = "white";
box.style.width = "200px";
box.style.height = "100px";
box.style.borderRadius = "10px";
box.style.fontSize = "18px";

// You can also set CSS as a string
box.style.cssText = "background: blue; color: yellow; padding: 20px;";

// Hide or show an element
box.style.display = "none";   // hide
box.style.display = "block";  // show`
      },
      {
        heading: 'Changing Attributes',
        content: [
          'HTML attributes can be read and modified using these methods:',
          '<ul><li><code>getAttribute(name)</code> — gets the value of an attribute</li><li><code>setAttribute(name, value)</code> — sets an attribute</li><li><code>removeAttribute(name)</code> — removes an attribute</li><li><code>hasAttribute(name)</code> — checks if attribute exists</li></ul>'
        ],
        code: `let link = document.getElementById("myLink");

// Get attribute
console.log(link.getAttribute("href"));  // "https://example.com"

// Set attribute
link.setAttribute("href", "https://newsite.com");
link.setAttribute("target", "_blank");

// Check attribute
console.log(link.hasAttribute("target"));  // true

// Remove attribute
link.removeAttribute("target");

// Direct property access for common attributes
let img = document.getElementById("myImage");
img.src = "new-image.png";
img.alt = "New description";`
      },
      {
        heading: 'Creating and Removing Elements',
        content: [
          'JavaScript can create new elements and add them to the page dynamically.',
          '<ul><li><code>document.createElement(tag)</code> — creates a new element</li><li><code>appendChild(node)</code> — adds a child at the end</li><li><code>prepend(node)</code> — adds a child at the beginning</li><li><code>insertBefore(new, reference)</code> — inserts before a reference node</li><li><code>removeChild(node)</code> — removes a child</li><li><code>remove()</code> — removes the element itself</li></ul>'
        ],
        code: `// Create a new paragraph
let newPara = document.createElement("p");
newPara.textContent = "I am a new paragraph!";
newPara.style.color = "green";

// Add it to the page
let container = document.getElementById("container");
container.appendChild(newPara);

// Create and add multiple items
let list = document.getElementById("myList");
for (let i = 1; i <= 3; i++) {
  let item = document.createElement("li");
  item.textContent = "Item " + i;
  list.appendChild(item);
}

// Remove an element
let oldItem = document.getElementById("old");
oldItem.remove();  // removes from the page`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a function that adds a new item to a list when a button is clicked.',
          'Each item should have a delete button that removes it.'
        ],
        code: `let addBtn = document.getElementById("addBtn");
let itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function() {
  // Create list item
  let li = document.createElement("li");
  li.textContent = "New Item";
  
  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function() {
    li.remove();  // remove this list item
  });
  
  li.appendChild(delBtn);
  itemList.appendChild(li);
});`
      }
    ]
  },
  'forms-validation': {
    title: 'Forms and Validation',
    sections: [
      {
        heading: 'Working with Form Elements',
        content: [
          'Forms are essential for user input. JavaScript can read values, validate them, and handle submissions.',
          'You can access form elements by their <code>id</code>, <code>name</code>, or through the form object.',
          'Common form element properties:',
          '<ul><li><code>value</code> — the current input value</li><li><code>checked</code> — true if checkbox/radio is selected</li><li><code>selectedIndex</code> — index of selected option in a dropdown</li><li><code>disabled</code> — disables the element</li></ul>'
        ],
        code: `let username = document.getElementById("username");
let email = document.getElementById("email");
let agreeBox = document.getElementById("agree");

// Read values
console.log(username.value);   // what user typed
console.log(email.value);      // email address
console.log(agreeBox.checked); // true or false

// Set values
username.value = "defaultUser";
agreeBox.checked = true;`
      },
      {
        heading: 'Form Validation Basics',
        content: [
          'Before sending data to a server, check that it is correct.',
          'Validation rules might include:',
          '<ul><li>Required fields are not empty</li><li>Email follows the correct format</li><li>Password meets length requirements</li><li>Numbers are within a valid range</li></ul>'
        ],
        code: `let form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isValid = true;
  
  // Check username
  if (username.trim() === "") {
    console.log("Username is required");
    isValid = false;
  }
  
  // Check email format (simple check)
  if (!email.includes("@")) {
    console.log("Please enter a valid email");
    isValid = false;
  }
  
  // Check password length
  if (password.length < 6) {
    console.log("Password must be at least 6 characters");
    isValid = false;
  }
  
  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
    console.log("Form not submitted — fix errors above");
  }
});`
      },
      {
        heading: 'HTML5 Validation Attributes',
        content: [
          'Modern HTML provides built-in validation without JavaScript:',
          '<ul><li><code>required</code> — field must be filled</li><li><code>type="email"</code> — checks email format</li><li><code>type="number"</code> — only allows numbers</li><li><code>min</code> / <code>max</code> — range for numbers</li><li><code>minlength</code> / <code>maxlength</code> — length limits</li><li><code>pattern</code> — regex for custom validation</li></ul>'
        ],
        code: `<!-- HTML5 validation examples -->
<form>
  <input type="text" required placeholder="Required field">
  
  <input type="email" placeholder="Valid email required">
  
  <input type="number" min="1" max="100" placeholder="1-100">
  
  <input type="password" minlength="6" placeholder="Min 6 chars">
  
  <input type="text" pattern="[A-Za-z]{3}" placeholder="Exactly 3 letters">
  
  <button type="submit">Submit</button>
</form>

// JavaScript can check if the form is valid
let input = document.getElementById("myInput");
console.log(input.checkValidity());  // true or false
console.log(input.validationMessage); // reason if invalid`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a registration form with username, email, and password fields.',
          'Validate that all fields are filled and the password is at least 8 characters.'
        ],
        code: `let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
  let name = document.getElementById("regName").value.trim();
  let email = document.getElementById("regEmail").value.trim();
  let pass = document.getElementById("regPass").value;
  let errors = [];
  
  if (name === "") errors.push("Name is required");
  if (email === "") errors.push("Email is required");
  if (!email.includes("@")) errors.push("Email must contain @");
  if (pass.length < 8) errors.push("Password must be at least 8 characters");
  
  if (errors.length > 0) {
    event.preventDefault();
    console.log("Errors found:");
    errors.forEach(err => console.log("- " + err));
  } else {
    console.log("Form is valid! Submitting...");
  }
});`
      }
    ]
  },
  'fetch-api': {
    title: 'Fetch API',
    sections: [
      {
        heading: 'What is the Fetch API?',
        content: [
          'The <strong>Fetch API</strong> provides a modern way to make network requests (like getting data from a server).',
          'It replaces the older <code>XMLHttpRequest</code> with a simpler, promise-based interface.',
          'Fetch is built into all modern browsers — no library needed.',
          'Think of fetch like ordering at a restaurant: you make a request, wait for the kitchen (server), and receive your meal (data).' 
        ],
        code: `// Basic fetch request
fetch("https://api.example.com/data")
  .then(response => {
    console.log("Status:", response.status);  // 200, 404, 500, etc.
    return response.json();  // parse JSON data
  })
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });`
      },
      {
        heading: 'GET Requests',
        content: [
          '<code>GET</code> is used to retrieve data from a server. It is the default method for fetch.',
          'The fetch function returns a <strong>Promise</strong> that resolves to a Response object.'
        ],
        code: `// GET request to a public API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(users => {
    console.log("Number of users:", users.length);
    console.log("First user name:", users[0].name);
    
    // Loop through users
    users.forEach(user => {
      console.log(user.name + " - " + user.email);
    });
  })
  .catch(err => {
    console.log("Failed to fetch users:", err.message);
  });`
      },
      {
        heading: 'POST Requests',
        content: [
          '<code>POST</code> sends data to a server to create a new resource.',
          'You must specify the method, headers, and body.'
        ],
        code: `let newUser = {
  name: "Alice Johnson",
  email: "alice@example.com",
  username: "alicej"
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => {
    console.log("User created:", data);
    console.log("Assigned ID:", data.id);  // usually returned by server
  })
  .catch(error => {
    console.log("POST failed:", error);
  });`
      },
      {
        heading: 'Async/Await with Fetch',
        content: [
          '<code>async/await</code> makes fetch code look cleaner and easier to read.',
          'An <code>async</code> function always returns a Promise.',
          '<code>await</code> pauses execution until the Promise resolves.'
        ],
        code: `async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    
    let users = await response.json();
    console.log("Users loaded:", users.length);
    
    return users;
  } catch (error) {
    console.log("Error fetching users:", error.message);
    return [];
  }
}

// Call the function
getUsers().then(users => {
  console.log("First user:", users[0]);
});

// Or use await if inside another async function
async function showFirstUser() {
  let users = await getUsers();
  if (users.length > 0) {
    console.log("First user name:", users[0].name);
  }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Fetch data from a public API and display it on the page.',
          'Try https://jsonplaceholder.typicode.com/posts — fetch 5 posts and show their titles.'
        ],
        code: `async function loadPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    
    let container = document.getElementById("posts");
    
    // Show first 5 posts
    posts.slice(0, 5).forEach(post => {
      let div = document.createElement("div");
      div.innerHTML = "<h3>" + post.title + "</h3><p>" + post.body + "</p>";
      container.appendChild(div);
    });
    
    console.log("Loaded 5 posts successfully");
  } catch (err) {
    console.log("Failed to load posts:", err);
  }
}

loadPosts();`
      }
    ]
  },
  'local-storage': {
    title: 'Local Storage',
    sections: [
      {
        heading: 'What is Local Storage?',
        content: [
          '<strong>Local Storage</strong> is a way to store data in the browser that persists even after the page is closed.',
          'Unlike cookies, local storage data is not sent to the server with every request.',
          'It stores only strings, so objects must be converted with <code>JSON.stringify()</code>.',
          '<ul><li><code>localStorage</code> — persists until explicitly deleted</li><li><code>sessionStorage</code> — persists only for the current session (tab)</li></ul>'
        ],
        code: `// Store data
localStorage.setItem("username", "Alice");
localStorage.setItem("theme", "dark");

// Read data
let user = localStorage.getItem("username");
console.log(user);  // "Alice"

// Check if data exists
if (localStorage.getItem("theme")) {
  console.log("Theme is set to:", localStorage.getItem("theme"));
}

// Remove one item
localStorage.removeItem("theme");

// Clear everything
localStorage.clear();`
      },
      {
        heading: 'Storing Objects',
        content: [
          'Local storage only stores strings. To store objects or arrays, convert them to JSON.',
          '<ul><li><code>JSON.stringify(object)</code> — converts to JSON string</li><li><code>JSON.parse(string)</code> — converts back to object</li></ul>'
        ],
        code: `let user = {
  name: "Bob",
  age: 28,
  hobbies: ["coding", "gaming", "reading"]
};

// Save as JSON string
localStorage.setItem("user", JSON.stringify(user));

// Read and parse back
let savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);     // "Bob"
console.log(savedUser.hobbies);  // ["coding", "gaming", "reading"]

// Storing an array
let scores = [85, 92, 78, 96];
localStorage.setItem("scores", JSON.stringify(scores));

let loadedScores = JSON.parse(localStorage.getItem("scores"));
console.log(loadedScores[0]);  // 85`
      },
      {
        heading: 'Checking Storage Limits',
        content: [
          'Local storage typically has a limit of about <strong>5-10 MB</strong> per origin.',
          'If you exceed the limit, a <code>QuotaExceededError</code> will be thrown.',
          'Always wrap storage operations in try-catch for safety.'
        ],
        code: `function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    console.log("Saved successfully");
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      console.log("Storage is full! Remove some items.");
    } else {
      console.log("Storage error:", e.message);
    }
  }
}

// Usage
safeSetItem("settings", JSON.stringify({ theme: "dark", fontSize: 16 }));

// Check how much is used (approximate)
let total = 0;
for (let key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    total += localStorage[key].length;
  }
}
console.log("Approximate storage used:", total, "characters");`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Build a simple note-taking app that saves notes to localStorage.',
          'Notes should persist after refreshing the page.'
        ],
        code: `let noteInput = document.getElementById("noteInput");
let saveBtn = document.getElementById("saveNote");
let notesList = document.getElementById("notesList");

// Load saved notes on page load
function loadNotes() {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

// Save a new note
saveBtn.addEventListener("click", function() {
  let text = noteInput.value.trim();
  if (text === "") return;
  
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));
  
  noteInput.value = "";
  loadNotes();
});

loadNotes();`
      }
    ]
  },
  'timers': {
    title: 'Timers',
    sections: [
      {
        heading: 'What are Timers?',
        content: [
          'JavaScript timers let you run code after a delay or at repeating intervals.',
          'Timers are not part of the JavaScript language itself — they are provided by the browser or Node.js environment.',
          '<ul><li><code>setTimeout</code> — runs code once after a specified delay</li><li><code>setInterval</code> — runs code repeatedly at a specified interval</li><li><code>clearTimeout</code> — cancels a pending timeout</li><li><code>clearInterval</code> — stops a repeating interval</li></ul>'
        ],
        code: `// setTimeout: run once after delay (in milliseconds)
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval: run repeatedly
let count = 0;
let intervalId = setInterval(function() {
  count++;
  console.log("Tick " + count);
  
  if (count >= 5) {
    clearInterval(intervalId);  // stop after 5 ticks
    console.log("Interval stopped");
  }
}, 1000);  // every 1 second`
      },
      {
        heading: 'setTimeout and setInterval Details',
        content: [
          'Both functions return an ID that can be used to cancel them.',
          'The delay is in <strong>milliseconds</strong> (1000 ms = 1 second).',
          'Timer callbacks are placed in a queue and executed when the call stack is clear.'
        ],
        code: `// Store the timeout ID
let timeoutId = setTimeout(function() {
  console.log("This might not run if cleared first");
}, 5000);

// Cancel before it fires
clearTimeout(timeoutId);
console.log("Timeout was cancelled");

// ---

// Repeating timer with clearInterval
let seconds = 0;
let timer = setInterval(function() {
  seconds++;
  console.log("Elapsed:", seconds, "seconds");
}, 1000);

// Stop after 10 seconds
setTimeout(function() {
  clearInterval(timer);
  console.log("Timer stopped at 10 seconds");
}, 10000);`
      },
      {
        heading: 'Countdown Timer Example',
        content: [
          'A countdown timer combines setInterval with DOM updates to show remaining time.',
          'This pattern is used in quizzes, auctions, and session timeouts.'
        ],
        code: `function startCountdown(duration) {
  let remaining = duration;
  let display = document.getElementById("timer");
  
  let countdown = setInterval(function() {
    let minutes = Math.floor(remaining / 60);
    let seconds = remaining % 60;
    
    // Format as MM:SS
    let formatted = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    display.textContent = formatted;
    
    if (remaining <= 0) {
      clearInterval(countdown);
      display.textContent = "Time's up!";
      console.log("Countdown finished");
    }
    
    remaining--;
  }, 1000);
}

// Start a 5-minute countdown
// startCountdown(300);`
      },
      {
        heading: 'Debouncing with setTimeout',
        content: [
          '<strong>Debouncing</strong> limits how often a function runs.',
          'Useful for search boxes, resize handlers, and scroll events.',
          'The idea: wait until the user stops typing (or scrolling) before running the function.'
        ],
        code: `let searchBox = document.getElementById("search");
let debounceTimer;

searchBox.addEventListener("input", function() {
  // Clear the previous timer
  clearTimeout(debounceTimer);
  
  // Set a new timer
  debounceTimer = setTimeout(function() {
    let query = searchBox.value;
    console.log("Searching for:", query);
    // performSearch(query);
  }, 500);  // wait 500ms after last keystroke
});

// Without debouncing, this would fire on every keystroke
// With debouncing, it only fires after user pauses typing`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a stopwatch with Start, Stop, and Reset buttons.',
          'Display elapsed time in seconds and tenths of seconds.'
        ],
        code: `let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("stopwatch");

let startTime = 0;
let elapsed = 0;
let stopwatchInterval;

startBtn.addEventListener("click", function() {
  startTime = Date.now() - elapsed;
  stopwatchInterval = setInterval(function() {
    elapsed = Date.now() - startTime;
    let seconds = Math.floor(elapsed / 1000);
    let tenths = Math.floor((elapsed % 1000) / 100);
    display.textContent = seconds + "." + tenths;
  }, 100);
});

stopBtn.addEventListener("click", function() {
  clearInterval(stopwatchInterval);
});

resetBtn.addEventListener("click", function() {
  clearInterval(stopwatchInterval);
  elapsed = 0;
  display.textContent = "0.0";
});`
      }
    ]
  }
};

const jsModule3Content = {
  'arrow-functions': {
    title: 'Arrow Functions',
    sections: [
      {
        heading: 'What is an Arrow Function?',
        content: [
          'Arrow functions provide a concise way to write function expressions in JavaScript.',
          'They were introduced in ES6 (ECMAScript 2015) and offer a shorter syntax compared to traditional function expressions.',
          '<strong>Key benefits:</strong>',
          '<ul><li>Shorter syntax — especially for simple functions</li><li>No binding of <code>this</code> — inherits <code>this</code> from the parent scope</li><li>Cannot be used as constructors (no <code>new</code>)</li><li>No <code>arguments</code> object</li></ul>'
        ]
      },
      {
        heading: 'Arrow Function Syntax',
        content: [
          'The syntax has three main parts:',
          '<ol><li>Parentheses <code>()</code> — for parameters</li><li>Arrow <code>=></code> — the fat arrow</li><li>Curly braces <code>{}</code> — for the function body (optional for single expressions)</li></ol>',
          '<strong>Basic syntax:</strong>',
          '<code>const myFunction = (param1, param2) => { /* body */ }</code>'
        ],
        code: `// Traditional function
function greet(name) {
    return "Hello, " + name;
}

// Arrow function
const greetArrow = (name) => {
    return "Hello, " + name;
};

// Even shorter — implicit return for single expressions
const greetShort = (name) => "Hello, " + name;

console.log(greetArrow("Alice"));  // Hello, Alice
console.log(greetShort("Bob"));    // Hello, Bob`
      },
      {
        heading: 'Different Arrow Function Forms',
        content: [
          'Arrow functions adapt based on how many parameters you have and what the body looks like:',
          '<ul><li><strong>Multiple parameters:</strong> parentheses required</li><li><strong>Single parameter:</strong> parentheses optional</li><li><strong>No parameters:</strong> empty parentheses required</li><li><strong>Single expression:</strong> can omit braces and <code>return</code></li></ul>'
        ],
        code: `// Multiple parameters — parentheses required
const add = (a, b) => a + b;
console.log(add(3, 4));  // 7

// Single parameter — parentheses optional
const square = x => x * x;
console.log(square(5));  // 25

// No parameters — empty parentheses
const sayHi = () => "Hi there!";
console.log(sayHi());  // Hi there!

// Multiple statements — braces and return required
const greetUser = (name, hour) => {
    const greeting = hour < 12 ? "Good morning" : "Good afternoon";
    return greeting + ", " + name;
};
console.log(greetUser("Alice", 10));  // Good morning, Alice`
      },
      {
        heading: 'Arrow Functions and "this"',
        content: [
          'Unlike regular functions, arrow functions do not have their own <code>this</code>.',
          'They inherit <code>this</code> from the surrounding (lexical) scope.',
          'This makes them ideal for callbacks inside methods where you want to preserve the outer <code>this</code> context.'
        ],
        code: `const user = {
    name: "Alice",
    hobbies: ["reading", "coding", "gaming"],
    
    // Regular function — 'this' works here
    showHobbiesRegular: function() {
        this.hobbies.forEach(function(hobby) {
            // 'this' is undefined or window in strict mode
            console.log(this.name + " likes " + hobby);
        });
    },
    
    // Arrow function — 'this' inherits from user object
    showHobbiesArrow: function() {
        this.hobbies.forEach(hobby => {
            // 'this' refers to user object
            console.log(this.name + " likes " + hobby);
        });
    }
};

user.showHobbiesArrow();
// Alice likes reading
// Alice likes coding
// Alice likes gaming`
      },
      {
        heading: 'When NOT to Use Arrow Functions',
        content: [
          'Arrow functions are not suitable for every situation:',
          '<ul><li>Object methods that need their own <code>this</code></li><li>Event handlers that rely on <code>this</code> pointing to the DOM element</li><li>Constructor functions (cannot use <code>new</code>)</li><li>Functions that need the <code>arguments</code> object</li></ul>'
        ],
        code: `// Bad: arrow function as object method
const counter = {
    count: 0,
    increment: () => {
        // 'this' is NOT counter — it inherits from outer scope!
        this.count++;  // Wrong!
    }
};

// Good: regular function as object method
const counterGood = {
    count: 0,
    increment: function() {
        this.count++;
    }
};

// Bad: arrow function as event handler
button.addEventListener('click', () => {
    // 'this' is NOT the button element!
    this.classList.add('active');  // Wrong!
});

// Good: regular function as event handler
button.addEventListener('click', function() {
    this.classList.add('active');  // 'this' is the button
});`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Convert the following regular functions to arrow functions.',
          'Experiment with implicit return for the shorter ones.'
        ],
        code: `// Convert these to arrow functions:
function multiply(a, b) {
    return a * b;
}

function isEven(num) {
    return num % 2 === 0;
}

function getMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

// Your arrow versions here:
// const multiply = ...
// const isEven = ...
// const getMax = ...`
      }
    ]
  },
  'template-literals': {
    title: 'Template Literals',
    sections: [
      {
        heading: 'What are Template Literals?',
        content: [
          'Template literals (also called template strings) are a way to create strings in JavaScript using backticks (<code>` `</code>) instead of quotes.',
          'Introduced in ES6, they solve common string manipulation problems.',
          '<strong>Key features:</strong>',
          '<ul><li><strong>String interpolation:</strong> embed expressions with <code>${}</code></li><li><strong>Multi-line strings:</strong> no need for <code>\\n</code> or concatenation</li><li><strong>Expression evaluation:</strong> any valid JavaScript expression inside <code>${}</code></li></ul>'
        ]
      },
      {
        heading: 'String Interpolation',
        content: [
          'Before template literals, combining strings and variables required concatenation with <code>+</code>.',
          'With template literals, you embed variables directly using <code>${variable}</code>.',
          'Any JavaScript expression can go inside the curly braces: variables, calculations, function calls.'
        ],
        code: `const name = "Alice";
const age = 25;

// Old way — string concatenation
const oldWay = "Hello, my name is " + name + " and I am " + age + " years old.";

// New way — template literal with interpolation
const newWay = \`Hello, my name is \${name} and I am \${age} years old.\`;

console.log(oldWay);
console.log(newWay);
// Both output: Hello, my name is Alice and I am 25 years old.

// Expressions inside \${}
const a = 10;
const b = 20;
console.log(\`The sum of \${a} and \${b} is \${a + b}\`);
// The sum of 10 and 20 is 30

console.log(\`Next year I'll be \${age + 1}\`);
// Next year I'll be 26`
      },
      {
        heading: 'Multi-line Strings',
        content: [
          'Creating multi-line strings used to be awkward — requiring <code>\\n</code> escape characters or breaking lines with <code>+</code>.',
          'Template literals preserve line breaks and indentation naturally.'
        ],
        code: `// Old way — with escape characters
const oldPoem = "Roses are red,\\n" +
                "Violets are blue,\\n" +
                "Sugar is sweet,\\n" +
                "And so are you.";

// New way — natural line breaks
const newPoem = \`Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.\`;

console.log(newPoem);

// HTML template example
const user = { name: "Bob", role: "Admin" };
const card = \`
    <div class="user-card">
        <h2>\${user.name}</h2>
        <span class="badge">\${user.role}</span>
    </div>
\`;

console.log(card);`
      },
      {
        heading: 'Expression Evaluation',
        content: [
          'The <code>${}</code> syntax is not limited to simple variables.',
          'You can put any valid JavaScript expression inside: arithmetic, ternary operators, function calls, even template literals inside template literals.'
        ],
        code: `const price = 100;
const discount = 0.15;

// Arithmetic expression
const finalPrice = \`Price after discount: $\${price * (1 - discount)}\`;
console.log(finalPrice);  // Price after discount: $85

// Ternary operator
const isMember = true;
const message = \`Welcome! \${isMember ? "You have premium access" : "Please upgrade"}\`;
console.log(message);  // Welcome! You have premium access

// Function call
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const fruit = "apple";
console.log(\`I love \${capitalize(fruit)}s!\`);  // I love Apples!

// Object property access
const product = { name: "Laptop", specs: { ram: "16GB" } };
console.log(\`\${product.name} has \${product.specs.ram} RAM\`);
// Laptop has 16GB RAM`
      },
      {
        heading: 'Tagged Template Literals',
        content: [
          'A more advanced feature: you can prefix a template literal with a function (called a "tag").',
          'The tag function receives the string parts and the values separately, allowing custom processing.',
          'This is used by libraries like styled-components and for localization.'
        ],
        code: `// A simple tag function
function highlight(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += \`[\${values[i]}]\`;
        }
    }
    return result;
}

const name = "Alice";
const score = 95;

const output = highlight\`Player \${name} scored \${score} points\`;
console.log(output);
// Player [Alice] scored [95] points

// Practical example — SQL query builder (simplified)
function sql(strings, ...values) {
    // In real code, you'd sanitize inputs to prevent SQL injection
    return {
        query: strings.join("?"),
        params: values
    };
}

const table = "users";
const id = 42;
const query = sql\`SELECT * FROM \${table} WHERE id = \${id}\`;
console.log(query);
// { query: "SELECT * FROM ? WHERE id = ?", params: ["users", 42] }`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a formatted receipt using template literals.',
          'Include item names, prices, quantity, and calculate totals with expressions.'
        ],
        code: `const items = [
    { name: "Book", price: 12.99, qty: 2 },
    { name: "Pen", price: 1.50, qty: 5 }
];

// Create a receipt using template literals
// Include: item details, subtotal, tax (8%), and total
// Use multi-line formatting

// Your code here:
// const receipt = \`...\`;`
      }
    ]
  },
  'destructuring': {
    title: 'Destructuring',
    sections: [
      {
        heading: 'What is Destructuring?',
        content: [
          'Destructuring is a convenient way to extract values from arrays and objects into distinct variables.',
          'Introduced in ES6, it makes code cleaner and more readable.',
          'You can destructure from:',
          '<ul><li><strong>Arrays</strong> — by position</li><li><strong>Objects</strong> — by property name</li><li><strong>Nested structures</strong> — combine both</li><li><strong>Function parameters</strong> — directly in the signature</li></ul>'
        ]
      },
      {
        heading: 'Array Destructuring',
        content: [
          'Array destructuring assigns variables based on position (index).',
          'Use square brackets <code>[]</code> on the left side of the assignment.',
          'You can skip elements with commas, set default values, and use the rest pattern.'
        ],
        code: `const colors = ["red", "green", "blue", "yellow"];

// Basic destructuring
const [first, second] = colors;
console.log(first);   // red
console.log(second);  // green

// Skip elements with commas
const [, , third] = colors;
console.log(third);   // blue

// Destructuring with rest
const [primary, ...others] = colors;
console.log(primary);  // red
console.log(others);   // ["green", "blue", "yellow"]

// Default values
const [a, b, c, d, e = "black"] = colors;
console.log(e);  // black (default, since colors[4] is undefined)

// Swap variables — no temp variable needed!
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);  // 10 5`
      },
      {
        heading: 'Object Destructuring',
        content: [
          'Object destructuring assigns variables based on property names.',
          'Use curly braces <code>{}</code> on the left side.',
          'The variable name must match the property name, or you can rename it with <code>:</code>.',
          'You can also set default values with <code>=</code>.'
        ],
        code: `const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    country: "USA"
};

// Basic destructuring — names must match keys
const { name, age } = user;
console.log(name);  // Alice
console.log(age);   // 25

// Rename variables
const { name: userName, email: userEmail } = user;
console.log(userName);   // Alice
console.log(userEmail);  // alice@example.com

// Default values
const { role = "user" } = user;
console.log(role);  // user (default, since user.role is undefined)

// Combined: rename + default
const { country: nation = "Unknown" } = user;
console.log(nation);  // USA`
      },
      {
        heading: 'Nested Destructuring',
        content: [
          'You can destructure nested objects and arrays in one go.',
          'Just follow the structure of your data with nested braces or brackets.'
        ],
        code: `const employee = {
    name: "Bob",
    department: {
        name: "Engineering",
        manager: {
            name: "Carol",
            email: "carol@company.com"
        }
    },
    skills: ["JavaScript", "Python", "React"]
};

// Nested object destructuring
const { 
    name: empName, 
    department: { 
        name: deptName, 
        manager: { name: managerName } 
    } 
} = employee;

console.log(empName);      // Bob
console.log(deptName);     // Engineering
console.log(managerName);  // Carol

// Mixed: object + array destructuring
const { 
    name, 
    skills: [primarySkill, secondarySkill] 
} = employee;

console.log(name);           // Bob
console.log(primarySkill);   // JavaScript
console.log(secondarySkill); // Python`
      },
      {
        heading: 'Destructuring in Function Parameters',
        content: [
          'Destructuring works directly in function parameters, making your code more self-documenting.',
          'This is especially useful for configuration objects, React props, and API responses.'
        ],
        code: `// Without destructuring — must access properties manually
function displayUser(user) {
    console.log(user.name + " is " + user.age + " years old");
}

// With destructuring — clean and clear
function displayUserClean({ name, age }) {
    console.log(\`\${name} is \${age} years old\`);
}

displayUserClean({ name: "Alice", age: 25 });
// Alice is 25 years old

// Destructuring with defaults in parameters
function createUser({ name, role = "user", active = true }) {
    return { name, role, active };
}

console.log(createUser({ name: "Bob" }));
// { name: "Bob", role: "user", active: true }

// Renaming in parameters
function getCoordinates({ x: lat, y: lng }) {
    return { lat, lng };
}

console.log(getCoordinates({ x: 40.7, y: -74.0 }));
// { lat: 40.7, lng: -74 }`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Given the data below, extract the information using destructuring:',
          'Get the city name, the first weather condition, and the high temperature.',
          'Rename "temp_high" to "maxTemp" and "temp_low" to "minTemp".'
        ],
        code: `const weatherData = {
    city: "Chennai",
    forecast: {
        today: {
            conditions: ["sunny", "humid"],
            temp_high: 35,
            temp_low: 28
        }
    }
};

// Destructure to get: city, firstCondition, maxTemp, minTemp
// Your code here:`
      }
    ]
  },
  'spread-rest': {
    title: 'Spread and Rest Operators',
    sections: [
      {
        heading: 'What are Spread and Rest?',
        content: [
          'The spread (<code>...</code>) operator looks the same in both cases but behaves differently depending on where you use it:',
          '<ul><li><strong>Spread</strong> — expands an iterable into individual elements</li><li><strong>Rest</strong> — collects multiple elements into an array</li></ul>',
          'Both use three dots <code>...</code> and were introduced in ES6.'
        ]
      },
      {
        heading: 'Spread Operator',
        content: [
          'The spread operator "spreads out" the elements of an array, object, or string.',
          '<strong>Common uses:</strong>',
          '<ul><li>Copying arrays</li><li>Concatenating arrays</li><li>Passing array elements as function arguments</li><li>Copying and merging objects</li></ul>'
        ],
        code: `// Spread with arrays
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "cherry", "date"];
console.log(moreFruits);
// ["apple", "banana", "cherry", "date"]

// Copy an array (shallow copy)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original);  // [1, 2, 3] — unchanged!
console.log(copy);     // [1, 2, 3, 4]

// Concatenate arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4]

// Spread in function calls
const numbers = [5, 3, 8, 1];
console.log(Math.max(...numbers));  // 8
// Same as: Math.max(5, 3, 8, 1)

// Spread with strings
const greeting = "Hello";
const chars = [...greeting];
console.log(chars);  // ["H", "e", "l", "l", "o"]`
      },
      {
        heading: 'Spread with Objects',
        content: [
          'ES2018 extended spread to objects. You can copy, merge, and override object properties.',
          'Properties that appear later overwrite earlier ones with the same name.'
        ],
        code: `const user = { name: "Alice", age: 25 };

// Copy an object
const userCopy = { ...user };
console.log(userCopy);  // { name: "Alice", age: 25 }

// Merge objects
const details = { email: "alice@example.com", country: "USA" };
const fullUser = { ...user, ...details };
console.log(fullUser);
// { name: "Alice", age: 25, email: "alice@example.com", country: "USA" }

// Override properties — later values win
const updatedUser = { ...user, age: 26, role: "admin" };
console.log(updatedUser);
// { name: "Alice", age: 26, role: "admin" }

// Practical: default settings + user overrides
const defaults = { theme: "light", fontSize: 14, notifications: true };
const userSettings = { fontSize: 16 };
const settings = { ...defaults, ...userSettings };
console.log(settings);
// { theme: "light", fontSize: 16, notifications: true }`
      },
      {
        heading: 'Rest Operator',
        content: [
          'The rest operator collects remaining elements into an array.',
          '<strong>Common uses:</strong>',
          '<ul><li>Function parameters — catch all remaining arguments</li><li>Destructuring — collect leftover array elements or object properties</li></ul>',
          'Note: <code>rest</code> must be the last element and can only appear once.'
        ],
        code: `// Rest in function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));     // 6
console.log(sum(10, 20));      // 30
console.log(sum());            // 0

// Rest with regular parameters
function greet(greeting, ...names) {
    return greeting + ", " + names.join(" and ") + "!";
}

console.log(greet("Hello", "Alice", "Bob", "Carol"));
// Hello, Alice and Bob and Carol!

// Rest in array destructuring
const [first, second, ...remaining] = ["a", "b", "c", "d", "e"];
console.log(first);      // a
console.log(second);     // b
console.log(remaining);  // ["c", "d", "e"]

// Rest in object destructuring
const { name, age, ...otherInfo } = {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "Chennai"
};
console.log(name);       // Bob
console.log(age);        // 30
console.log(otherInfo);  // { email: "bob@example.com", city: "Chennai" }`
      },
      {
        heading: 'Spread vs Rest — Side by Side',
        content: [
          'It is the same syntax (<code>...</code>) but opposite behavior:',
          '<ul><li><strong>Spread</strong> — expands something into parts (like unpacking a suitcase)</li><li><strong>Rest</strong> — gathers parts into something (like packing a suitcase)</li></ul>'
        ],
        code: `const arr = [1, 2, 3];

// SPREAD — on the right side of = or in arguments
// Expanding
const expanded = [...arr, 4, 5];
console.log(expanded);  // [1, 2, 3, 4, 5]

// REST — on the left side of = or in parameters
// Collecting
const [first, ...collected] = expanded;
console.log(first);      // 1
console.log(collected);  // [2, 3, 4, 5]

// In a function: rest collects, spread expands
function demo(a, b, ...restItems) {
    const all = [a, b, ...restItems];
    return all;
}
console.log(demo("x", "y", "z", "w"));
// ["x", "y", "z", "w"]`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a function that takes a primary color and any number of secondary colors.',
          'Use rest to collect secondary colors and spread to combine them into a full palette.',
          'Also merge two user objects, with the second one overriding specific fields.'
        ],
        code: `// Task 1: Color palette function
// createPalette("red", "orange", "pink") 
// → { primary: "red", all: ["red", "orange", "pink"] }

// Task 2: Merge these users, with overrides2 taking priority
const user1 = { name: "Alice", age: 25, role: "user" };
const user2 = { age: 26, role: "admin", active: true };

// Your code here:`
      }
    ]
  },
  'classes': {
    title: 'Classes',
    sections: [
      {
        heading: 'What are Classes?',
        content: [
          'Classes in JavaScript are a template for creating objects.',
          'They encapsulate data (properties) and behavior (methods) together.',
          'Introduced in ES6, they provide a cleaner syntax for object-oriented programming, though JavaScript remains prototype-based under the hood.',
          '<strong>Key concepts:</strong>',
          '<ul><li><strong>Constructor:</strong> Special method for creating and initializing objects</li><li><strong>Methods:</strong> Functions that belong to the class</li><li><strong>Instantiation:</strong> Creating an object from a class with <code>new</code></li></ul>'
        ]
      },
      {
        heading: 'Class Syntax',
        content: [
          'A class is defined with the <code>class</code> keyword, followed by a name and curly braces.',
          'The <code>constructor()</code> method is called automatically when you create a new instance.',
          'Methods are defined without the <code>function</code> keyword.'
        ],
        code: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
    
    haveBirthday() {
        this.age++;
        return \`Happy birthday! Now I'm \${this.age}\`;
    }
}

// Creating instances (objects)
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

console.log(alice.greet());        // Hello, I'm Alice
console.log(bob.greet());          // Hello, I'm Bob
console.log(alice.haveBirthday()); // Happy birthday! Now I'm 26

// Each instance has its own data
console.log(alice.age);  // 26
console.log(bob.age);    // 30`
      },
      {
        heading: 'Getters and Setters',
        content: [
          'Getters and setters let you define how properties are accessed and modified.',
          'They look like properties but behave like methods behind the scenes.',
          'Useful for validation, computed properties, and encapsulation.'
        ],
        code: `class Circle {
    constructor(radius) {
        this._radius = radius;  // underscore indicates "private by convention"
    }
    
    // Getter — accessed like a property: circle.radius
    get radius() {
        return this._radius;
    }
    
    // Setter — assigned like a property: circle.radius = 5
    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }
    
    // Computed property
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const c = new Circle(5);
console.log(c.radius);        // 5
console.log(c.area);          // 78.54...
console.log(c.circumference); // 31.41...

c.radius = 10;
console.log(c.area);  // 314.15...

// c.radius = -5;  // Error: Radius must be positive`
      },
      {
        heading: 'Inheritance',
        content: [
          'Inheritance lets one class extend another, reusing code and creating specialized versions.',
          'Use the <code>extends</code> keyword to create a child class.',
          'Use <code>super()</code> to call the parent constructor or methods.'
        ],
        code: `class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return \`\${this.name} makes a sound.\`;
    }
    
    move() {
        return \`\${this.name} moves.\`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return \`\${this.name} barks! Woof!\`;
    }
    
    fetch() {
        return \`\${this.name} fetches the ball.\`;
    }
}

class Cat extends Animal {
    speak() {
        return \`\${this.name} meows.\`;
    }
    
    purr() {
        return \`\${this.name} purrs contentedly.\`;
    }
}

const dog = new Dog("Rex", "German Shepherd");
const cat = new Cat("Whiskers");

console.log(dog.speak());  // Rex barks! Woof!
console.log(cat.speak());  // Whiskers meows.
console.log(dog.move());   // Rex moves. (inherited from Animal)
console.log(dog.fetch());  // Rex fetches the ball.
console.log(cat.purr());   // Whiskers purrs contentedly.`
      },
      {
        heading: 'Static Methods',
        content: [
          'Static methods belong to the class itself, not to instances.',
          'Call them directly on the class: <code>ClassName.method()</code>.',
          'Useful for utility functions, factory methods, or operations that do not need instance data.'
        ],
        code: `class MathUtils {
    // Static method
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static isEven(num) {
        return num % 2 === 0;
    }
    
    // Factory method — creates instances
    static createRandomPoint() {
        return {
            x: Math.random() * 100,
            y: Math.random() * 100
        };
    }
}

// Call on the class, not an instance
console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.multiply(4, 7));  // 28
console.log(MathUtils.isEven(10));      // true

const point = MathUtils.createRandomPoint();
console.log(point);  // { x: 42.3..., y: 87.1... }

// This would NOT work:
// const utils = new MathUtils();
// utils.add(1, 2);  // Error! add is not on the instance`
      },
      {
        heading: 'Private Fields (Modern JavaScript)',
        content: [
          'Modern JavaScript (ES2022+) supports truly private fields with <code>#</code>.',
          'Private fields are only accessible inside the class — not from outside or subclasses.',
          'This is stronger than the underscore convention (<code>_field</code>) which is merely a convention.'
        ],
        code: `class BankAccount {
    #balance = 0;  // Private field — truly private!
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return \`Deposited $\${amount}. New balance: $\${this.#balance}\`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return \`Withdrew $\${amount}. New balance: $\${this.#balance}\`;
        }
        return "Insufficient funds or invalid amount";
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
console.log(account.getBalance());    // 100
console.log(account.deposit(50));     // Deposited $50. New balance: $150
console.log(account.withdraw(30));    // Withdrew $30. New balance: $120

// These will NOT work:
// console.log(account.#balance);  // SyntaxError!
// account.#balance = 1000000;     // SyntaxError!`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Rectangle</code> class with width and height.',
          'Add getters for <code>area</code> and <code>perimeter</code>.',
          'Create a <code>Square</code> class that extends <code>Rectangle</code>.',
          'Add a static method <code>Rectangle.fromDimensions(w, h)</code> as a factory.'
        ],
        code: `// Your Rectangle and Square classes here:

// class Rectangle { ... }
// class Square extends Rectangle { ... }

// Test:
// const rect = new Rectangle(5, 3);
// console.log(rect.area);        // 15
// console.log(rect.perimeter);   // 16

// const square = new Square(4);
// console.log(square.area);      // 16
// console.log(square.perimeter); // 16

// const factoryRect = Rectangle.fromDimensions(10, 20);
// console.log(factoryRect.area); // 200`
      }
    ]
  },
  'promises-async': {
    title: 'Promises and Async/Await',
    sections: [
      {
        heading: 'What are Promises?',
        content: [
          'A Promise is an object representing the eventual completion or failure of an asynchronous operation.',
          'Promises provide a cleaner alternative to callback functions for handling async operations.',
          '<strong>Three states:</strong>',
          '<ul><li><strong>Pending:</strong> initial state — neither fulfilled nor rejected</li><li><strong>Fulfilled:</strong> operation completed successfully</li><li><strong>Rejected:</strong> operation failed</li></ul>'
        ],
        diagram: {
          caption: 'Promise lifecycle',
          chart: `flowchart LR
    A[Pending] -->|resolve| B[Fulfilled]
    A -->|reject| C[Rejected]
    B --> D[.then handler]
    C --> E[.catch handler]
    D --> F[.finally]
    E --> F`
        }
      },
      {
        heading: 'Creating and Using Promises',
        content: [
          'Create a promise with <code>new Promise((resolve, reject) => {...})</code>.',
          'Use <code>.then()</code> for success, <code>.catch()</code> for errors, and <code>.finally()</code> for cleanup.',
          'Promises can be chained — each <code>.then()</code> returns a new promise.'
        ],
        code: `// Creating a promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Alice" });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// Using the promise
fetchUserData(1)
    .then(user => {
        console.log("User:", user);
        return user.name;
    })
    .then(name => {
        console.log("Name:", name);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Done");
    });

// Promise that rejects
fetchUserData(-1)
    .then(user => console.log(user))
    .catch(error => console.error("Caught:", error.message));
// Caught: Invalid user ID`
      },
      {
        heading: 'Promise Utilities',
        content: [
          'JavaScript provides utility methods for working with multiple promises:',
          '<ul><li><code>Promise.all()</code> — wait for all promises (fails fast)</li><li><code>Promise.race()</code> — wait for first promise to settle</li><li><code>Promise.allSettled()</code> — wait for all, never rejects</li><li><code>Promise.any()</code> — wait for first success</li></ul>'
        ],
        code: `const p1 = Promise.resolve(1);
const p2 = new Promise(r => setTimeout(() => r(2), 100));
const p3 = new Promise(r => setTimeout(() => r(3), 50));

// Promise.all — all must succeed
Promise.all([p1, p2, p3])
    .then(values => console.log("All:", values));
// All: [1, 2, 3] (after ~100ms)

// Promise.race — first to settle wins
Promise.race([p2, p3])
    .then(winner => console.log("Race winner:", winner));
// Race winner: 3 (after 50ms)

// Promise.allSettled — see all results
const mixed = [
    Promise.resolve("success"),
    Promise.reject("error"),
    Promise.resolve("another success")
];

Promise.allSettled(mixed)
    .then(results => console.log("Settled:", results));
// Settled: [
//   { status: "fulfilled", value: "success" },
//   { status: "rejected", reason: "error" },
//   { status: "fulfilled", value: "another success" }
// ]`
      },
      {
        heading: 'Async/Await Syntax',
        content: [
          '<code>async</code> and <code>await</code> (ES2017) make promises easier to read and write.',
          '<code>async</code> makes a function return a promise automatically.',
          '<code>await</code> pauses execution until a promise resolves, making async code look synchronous.',
          'Use <code>try/catch</code> for error handling with await.'
        ],
        code: `function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => resolve(42), 500);
    });
}

// Async function
async function run() {
    console.log("Starting...");
    
    await delay(1000);
    console.log("After 1 second");
    
    const num = await getNumber();
    console.log("Got number:", num);  // 42
    
    return "Done!";
}

run().then(result => console.log(result));

// Error handling with try/catch
async function riskyOperation() {
    try {
        const result = await fetchUserData(-1);
        console.log(result);
    } catch (error) {
        console.error("Caught error:", error.message);
        // Caught error: Invalid user ID
    }
}

riskyOperation();`
      },
      {
        heading: 'Sequential vs Parallel with Async/Await',
        content: [
          'Be careful — <code>await</code> in a loop runs sequentially by default.',
          'Use <code>Promise.all()</code> with <code>map()</code> to run promises in parallel.',
          'This is a common performance pitfall.'
        ],
        code: `function fetchItem(id) {
    return new Promise(resolve => 
        setTimeout(() => resolve({ id, name: \`Item \${id}\` }), 100)
    );
}

// Sequential — slow! One at a time.
async function getItemsSequential(ids) {
    const items = [];
    for (const id of ids) {
        const item = await fetchItem(id);  // Waits for each one
        items.push(item);
    }
    return items;
    // Total time: ids.length * 100ms
}

// Parallel — fast! All at once.
async function getItemsParallel(ids) {
    const promises = ids.map(id => fetchItem(id));
    return await Promise.all(promises);
    // Total time: ~100ms
}

async function compare() {
    const ids = [1, 2, 3, 4, 5];
    
    console.time("sequential");
    await getItemsSequential(ids);
    console.timeEnd("sequential");  // ~500ms
    
    console.time("parallel");
    await getItemsParallel(ids);
    console.timeEnd("parallel");    // ~100ms
}

compare();`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a function that simulates downloading files.',
          'Each download takes a random time (1-3 seconds).',
          'Download 3 files in parallel and report when all are done.',
          'Use both promise chains and async/await versions.'
        ],
        code: `// Simulate a file download
function downloadFile(filename) {
    return new Promise(resolve => {
        const time = Math.random() * 2000 + 1000;
        setTimeout(() => {
            resolve(\`\${filename} downloaded (\${time.toFixed(0)}ms)\`);
        }, time);
    });
}

// Task: Download these in parallel:
const files = ["file1.txt", "file2.txt", "file3.txt"];

// Version 1: Using Promise.all
// Your code:

// Version 2: Using async/await
// Your code:`
      }
    ]
  },
  'modules-imports': {
    title: 'Modules and Imports',
    sections: [
      {
        heading: 'What are JavaScript Modules?',
        content: [
          'Modules let you split your code into separate files, each with its own scope.',
          'You decide what to share with <code>export</code> and what to use with <code>import</code>.',
          'Benefits: better organization, reusability, dependency management, and avoiding global namespace pollution.',
          '<strong>Two types of exports:</strong>',
          '<ul><li><strong>Named exports:</strong> export multiple items by name</li><li><strong>Default export:</strong> export one main thing per module</li></ul>'
        ]
      },
      {
        heading: 'Named Exports and Imports',
        content: [
          'Use <code>export</code> before a declaration to make it available to other modules.',
          'Import with curly braces: <code>import { name } from "./file.js"</code>.',
          'You can rename imports with <code>as</code>.'
        ],
        code: `// === math.js ===
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(n) {
        this.result += n;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

// === main.js ===
import { add, multiply, PI, Calculator } from "./math.js";

console.log(add(2, 3));        // 5
console.log(multiply(4, 5));   // 20
console.log(PI);               // 3.14159

const calc = new Calculator();
calc.add(10).add(20);
console.log(calc.getResult()); // 30

// Rename import
import { add as sum } from "./math.js";
console.log(sum(1, 2));  // 3

// Import all as namespace
import * as MathUtils from "./math.js";
console.log(MathUtils.add(1, 2));
console.log(MathUtils.PI);`
      },
      {
        heading: 'Default Exports',
        content: [
          'Each module can have one <code>export default</code>.',
          'Import without curly braces: <code>import name from "./file.js"</code>.',
          'Default exports are commonly used for classes or main functions in a module.'
        ],
        code: `// === User.js ===
export default class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
}

// Can also have named exports alongside default
export function validateEmail(email) {
    return email.includes("@");
}

// === main.js ===
import User, { validateEmail } from "./User.js";

const user = new User("Alice", "alice@example.com");
console.log(user.greet());

console.log(validateEmail("test@email.com"));  // true

// You can name a default import anything you want
import Person from "./User.js";  // Valid!`
      },
      {
        heading: 'Module Patterns and Re-exports',
        content: [
          'You can re-export from another module to create a "barrel" file that centralizes imports.',
          'This is useful for organizing large codebases.'
        ],
        code: `// === utils/index.js (barrel file) ===
export { add, multiply } from "./math.js";
export { formatDate, parseDate } from "./dates.js";
export { default as Logger } from "./logger.js";

// === main.js ===
import { add, formatDate, Logger } from "./utils/index.js";

// Re-exporting with rename
export { PI as MathPI } from "./math.js";

// Re-export everything
export * from "./math.js";

// Combine default and named re-exports
export { default } from "./Component.js";
export * from "./Component.js";`
      },
      {
        heading: 'Dynamic Imports',
        content: [
          '<code>import()</code> lets you load modules on demand, not just at the top level.',
          'Returns a promise, so you can use <code>await</code> with it.',
          'Useful for code splitting — loading heavy modules only when needed.'
        ],
        code: `// Dynamic import — loads only when needed
async function loadChartLibrary() {
    // Only loads when user clicks "Show Chart"
    const { Chart } = await import("./chart-library.js");
    const chart = new Chart("#canvas");
    chart.render(data);
}

// Conditional loading
async function getFormatter(type) {
    if (type === "date") {
        const { formatDate } = await import("./date-utils.js");
        return formatDate;
    } else {
        const { formatNumber } = await import("./number-utils.js");
        return formatNumber;
    }
}

// Dynamic import with default
async function loadPlugin(name) {
    const module = await import(\`./plugins/\${name}.js\`);
    return module.default;
}

// Usage
loadPlugin("analytics").then(Plugin => {
    const plugin = new Plugin();
    plugin.init();
});`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a simple module structure:',
          '<ol><li><code>shapes.js</code> — export <code>Circle</code> and <code>Rectangle</code> classes</li><li><code>utils.js</code> — export a <code>formatArea()</code> function</li><li><code>main.js</code> — import everything and create instances</li></ol>',
          'Also try converting a static import to a dynamic import.'
        ],
        code: `// === shapes.js ===
// Create and export Circle and Rectangle classes
// Circle constructor takes radius
// Rectangle constructor takes width and height
// Both have getArea() method

// === utils.js ===
// Export formatArea(area) that returns "Area: X sq units"

// === main.js ===
// Import Circle, Rectangle from "./shapes.js"
// Import formatArea from "./utils.js"
// Create a circle (radius 5) and rectangle (4x6)
// Print formatted areas

// Bonus: Dynamic import version
// const { Circle } = await import("./shapes.js");`
      }
    ]
  }
};

const jsModule4Content = {
  'closures': {
    title: 'JavaScript Closures',
    sections: [
      {
        heading: 'What is a Closure?',
        content: [
          'A closure is a function that has access to its own scope, the outer function\'s variables, and global variables — even after the outer function has finished executing.',
          'Think of it like a backpack: when a function is created, it packs up all the variables it can see and carries them wherever it goes.',
          '<strong>Key idea:</strong> inner functions remember the environment in which they were created.',
          '<strong>Why closures matter:</strong>',
          '<ul><li>They enable data privacy and encapsulation</li><li>They allow functions to remember state between calls</li><li>They power many JavaScript patterns like callbacks and event handlers</li></ul>'
        ],
        diagram: {
          caption: 'A closure carries outer variables even after the outer function exits',
          chart: `flowchart TD
    A[outerFunction called] --> B[Create outerVar]
    B --> C[Define innerFunction]
    C --> D[Return innerFunction]
    D --> E[outerFunction finishes]
    E --> F[Call myClosure]
    F --> G[innerFunction still accesses outerVar]`
        }
      },
      {
        heading: 'Closure Example',
        content: [
          'In this example, <code>innerFunction</code> can still access <code>outerVar</code> even after <code>outerFunction</code> has finished running.'
        ],
        code: `function outerFunction() {
    let outerVar = "I am from outer";

    function innerFunction() {
        console.log(outerVar);  // still accessible!
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure();  // Output: I am from outer`
      },
      {
        heading: 'Closure with Private Variables',
        content: [
          'Closures let you create private variables that cannot be accessed directly from outside the function.',
          'This is one of the most powerful uses of closures in JavaScript.'
        ],
        code: `function createCounter() {
    let count = 0;  // private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // Output: 1
console.log(counter.increment());  // Output: 2
console.log(counter.getCount());   // Output: 2
// console.log(counter.count);     // undefined — count is private!`
      },
      {
        heading: 'Closure in Loops — A Common Mistake',
        content: [
          'When using <code>var</code> inside a loop with closures, all closures share the same variable reference.',
          'Use <code>let</code> or an IIFE to fix this.'
        ],
        code: `// Problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Output: 3, 3, 3
    }, 100);
}

// Fix with let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Output: 0, 1, 2
    }, 100);
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Create a function <code>makeMultiplier(x)</code> that returns a function. The returned function should multiply its argument by <code>x</code>.',
          '<strong>Expected output:</strong>',
          '<code>const triple = makeMultiplier(3);</code>',
          '<code>triple(5); // 15</code>',
          '',
          '<strong>Exercise 2:</strong> Create a function that generates unique IDs. Each call should return the next number (1, 2, 3...).'
        ]
      }
    ]
  },
  'this-keyword': {
    title: 'JavaScript this Keyword',
    sections: [
      {
        heading: 'What is this?',
        content: [
          'The <code>this</code> keyword refers to the object that is executing the current function.',
          'Its value depends on <strong>how</strong> a function is called, not where it is defined.',
          '<strong>Think of it like pointing:</strong> <code>this</code> points to whoever called the function — like a finger that points to the caller.',
          '<strong>Common contexts for this:</strong>',
          '<ul><li>In a method: <code>this</code> is the object owning the method</li><li>In a regular function: <code>this</code> is the global object (or undefined in strict mode)</li><li>In an arrow function: <code>this</code> is inherited from the surrounding scope</li><li>In an event handler: <code>this</code> is the element that received the event</li></ul>'
        ]
      },
      {
        heading: 'this in Object Methods',
        content: [
          'When a function is called as a method of an object, <code>this</code> refers to that object.'
        ],
        code: `const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());  // Output: John Doe`
      },
      {
        heading: 'this in Regular Functions',
        content: [
          'In a standalone function (not a method), <code>this</code> refers to the global object.',
          'In strict mode, <code>this</code> is <code>undefined</code>.'
        ],
        code: `function showThis() {
    console.log(this);
}

showThis();  // Output: Window (global object)

function strictShowThis() {
    "use strict";
    console.log(this);
}

strictShowThis();  // Output: undefined`
      },
      {
        heading: 'this in Arrow Functions',
        content: [
          'Arrow functions do not have their own <code>this</code>. They inherit it from the surrounding (lexical) scope.',
          'This makes them perfect for callbacks inside methods.'
        ],
        code: `const person = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);  // 'this' is person
        }, 100);
    }
};

person.sayHello();  // Output: Hello, Alice`
      },
      {
        heading: 'Controlling this with call, apply, bind',
        content: [
          'JavaScript provides three methods to explicitly control what <code>this</code> refers to:',
          '<ul><li><strong>call(thisArg, arg1, arg2, ...)</strong> — calls function with given <code>this</code></li><li><strong>apply(thisArg, [arg1, arg2, ...])</strong> — same as call, but arguments as array</li><li><strong>bind(thisArg)</strong> — returns a new function with <code>this</code> permanently bound</li></ul>'
        ],
        code: `const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

greet.call(person1, "Hello");    // Output: Hello, Alice
greet.apply(person2, ["Hi"]);  // Output: Hi, Bob

const greetAlice = greet.bind(person1);
greetAlice("Hey");  // Output: Hey, Alice`
      },
      {
        heading: 'Common Mistakes',
        content: [
          '<ul><li><strong>Mistake 1:</strong> Expecting <code>this</code> inside a callback to refer to the object. Use arrow functions or <code>.bind()</code>.</li><li><strong>Mistake 2:</strong> Using <code>this</code> inside a standalone function and expecting it to refer to an object. It refers to the global object instead.</li><li><strong>Mistake 3:</strong> Forgetting that arrow functions do not bind their own <code>this</code> — great for callbacks, bad for object methods that need their own <code>this</code>.</li></ul>'
        ]
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Create an object <code>car</code> with properties <code>brand</code> and <code>model</code>, and a method <code>getInfo()</code> that returns both using <code>this</code>.',
          '',
          '<strong>Exercise 2:</strong> Fix the below code so the callback correctly uses <code>this.age</code>:',
          '<code>const user = { age: 25, showAge: function() { setTimeout(function() { console.log(this.age); }, 100); } };</code>',
          '<strong>Hint:</strong> Use an arrow function.'
        ]
      }
    ]
  },
  'prototypes': {
    title: 'JavaScript Prototypes',
    sections: [
      {
        heading: 'What is a Prototype?',
        content: [
          'Every JavaScript object has a hidden property called <code>[[Prototype]]</code> that points to another object — its prototype.',
          'When you try to access a property on an object, JavaScript first looks at the object itself. If it is not found, it looks up the prototype chain.',
          '<strong>Analogy:</strong> Think of a prototype like a parent. If a child does not know the answer, they ask their parent.',
          '<strong>Why prototypes matter:</strong>',
          '<ul><li>They enable inheritance in JavaScript</li><li>They allow objects to share methods without duplicating them</li><li>They are the foundation of JavaScript\'s object-oriented nature</li></ul>'
        ]
      },
      {
        heading: 'Prototype Chain',
        content: [
          'The prototype chain is a series of linked objects. When a property is accessed, JavaScript walks up the chain until it finds the property or reaches the end (null).'
        ],
        code: `const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const rabbit = {
    jumps: true
};

// Set rabbit's prototype to animal
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps);  // Output: true (own property)
console.log(rabbit.eats);   // Output: true (inherited from animal)
rabbit.walk();              // Output: Animal walks (inherited method)`
      },
      {
        heading: 'Constructor Functions and prototype',
        content: [
          'Functions have a <code>prototype</code> property. When you use <code>new</code>, the new object\'s <code>[[Prototype]]</code> is set to the constructor\'s <code>prototype</code>.',
          'Methods placed on <code>Constructor.prototype</code> are shared by all instances.'
        ],
        code: `function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Shared method — all instances use the same function
Person.prototype.greet = function() {
    console.log("Hi, I'm " + this.name);
};

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet();  // Output: Hi, I'm Alice
bob.greet();    // Output: Hi, I'm Bob

// Check prototype
console.log(alice.__proto__ === Person.prototype);  // Output: true`
      },
      {
        heading: 'ES6 Class Syntax',
        content: [
          'ES6 introduced the <code>class</code> keyword as syntactic sugar over prototypes.',
          'Under the hood, it still uses prototypes — but the syntax is cleaner and more familiar.'
        ],
        code: `class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " barks.");
    }
}

const dog = new Dog("Rex");
dog.speak();  // Output: Rex barks.

// Under the hood: still prototypal inheritance
console.log(Dog.prototype.__proto__ === Animal.prototype);  // Output: true`
      },
      {
        heading: 'Checking Prototypes',
        content: [
          'JavaScript provides several ways to inspect an object\'s prototype:',
          '<ul><li><code>obj.__proto__</code> — the prototype of the object (legacy but widely supported)</li><li><code>Object.getPrototypeOf(obj)</code> — modern, preferred way</li><li><code>obj instanceof Constructor</code> — checks if Constructor.prototype is in the chain</li><li><code>Constructor.prototype.isPrototypeOf(obj)</code> — direct check</li></ul>'
        ],
        code: `function Car() {}
const myCar = new Car();

console.log(myCar.__proto__ === Car.prototype);                    // true
console.log(Object.getPrototypeOf(myCar) === Car.prototype);       // true
console.log(myCar instanceof Car);                                  // true
console.log(Car.prototype.isPrototypeOf(myCar));                   // true`
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Create a <code>Shape</code> constructor with a <code>color</code> property. Add a <code>describe()</code> method to its prototype that logs the color.',
          '',
          '<strong>Exercise 2:</strong> Create a <code>Circle</code> class that extends <code>Shape</code> and adds a <code>radius</code> property. Override <code>describe()</code> to also include the radius.'
        ]
      }
    ]
  },
  'error-handling': {
    title: 'JavaScript Error Handling',
    sections: [
      {
        heading: 'What is Error Handling?',
        content: [
          'Error handling is the process of anticipating, detecting, and responding to errors in your code.',
          'Without error handling, a single mistake can crash your entire program.',
          '<strong>Think of it like a safety net:</strong> even if a performer falls, the show goes on.',
          '<strong>JavaScript provides:</strong>',
          '<ul><li><code>try</code> — wraps code that might throw an error</li><li><code>catch</code> — handles the error if one occurs</li><li><code>finally</code> — always runs, error or not</li><li><code>throw</code> — creates custom errors</li></ul>'
        ]
      },
      {
        heading: 'try, catch, finally',
        content: [
          'The <code>try...catch</code> statement lets you test a block of code for errors and handle them gracefully.'
        ],
        code: `try {
    let result = someUndefinedVariable + 10;
    console.log(result);
} catch (error) {
    console.log("Something went wrong!");
    console.log("Error name:", error.name);      // ReferenceError
    console.log("Message:", error.message);    // someUndefinedVariable is not defined
} finally {
    console.log("This always runs.");          // cleanup code goes here
}

// Output:
// Something went wrong!
// Error name: ReferenceError
// Message: someUndefinedVariable is not defined
// This always runs.`
      },
      {
        heading: 'Throwing Custom Errors',
        content: [
          'You can throw your own errors to enforce rules and provide meaningful messages.',
          'Use the built-in <code>Error</code> constructor or create custom error classes.'
        ],
        code: `function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // Output: 5
    console.log(divide(10, 0));  // throws Error
} catch (err) {
    console.log("Caught:", err.message);  // Output: Caught: Cannot divide by zero!
}`
      },
      {
        heading: 'Built-in Error Types',
        content: [
          'JavaScript has several built-in error constructors:',
          '<ul><li><strong>Error</strong> — generic error</li><li><strong>ReferenceError</strong> — undefined variable used</li><li><strong>TypeError</strong> — value is not of expected type</li><li><strong>SyntaxError</strong> — invalid syntax</li><li><strong>RangeError</strong> — number out of allowable range</li></ul>'
        ],
        code: `// ReferenceError
console.log(x);  // x is not defined

// TypeError
let num = null;
num.toString();  // Cannot read property 'toString' of null

// RangeError
let arr = new Array(-1);  // Invalid array length`
      },
      {
        heading: 'Creating Custom Error Classes',
        content: [
          'For larger applications, extend the <code>Error</code> class to create domain-specific errors.',
          'This makes debugging and error handling much cleaner.'
        ],
        code: `class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError("age", "Age must be between 0 and 150");
    }
    return true;
}

try {
    validateAge(200);
} catch (err) {
    console.log(err.name);     // ValidationError
    console.log(err.field);    // age
    console.log(err.message);  // Age must be between 0 and 150
}`
      },
      {
        heading: 'Common Mistakes',
        content: [
          '<ul><li><strong>Mistake 1:</strong> Catching errors but not handling them — always do something useful in <code>catch</code>.</li><li><strong>Mistake 2:</strong> Swallowing errors silently — log or rethrow errors, do not ignore them.</li><li><strong>Mistake 3:</strong> Using <code>try...catch</code> for control flow — it is slower than <code>if</code> checks.</li><li><strong>Mistake 4:</strong> Forgetting that <code>catch</code> only catches runtime errors, not syntax errors in the same <code>try</code> block.</li></ul>'
        ]
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Write a function <code>parseJSON(str)</code> that tries to parse a JSON string. If it fails, return <code>null</code> instead of crashing.',
          '',
          '<strong>Exercise 2:</strong> Create a <code>BankAccount</code> class with a <code>withdraw(amount)</code> method. Throw a custom <code>InsufficientFundsError</code> if the amount exceeds the balance.'
        ]
      }
    ]
  },
  'regex': {
    title: 'JavaScript Regular Expressions',
    sections: [
      {
        heading: 'What is a Regular Expression?',
        content: [
          'A Regular Expression (RegEx) is a sequence of characters that defines a search pattern.',
          'It is used to match, find, or replace text inside strings.',
          '<strong>Think of it like a search filter:</strong> instead of searching for an exact word, you describe a pattern.',
          '<strong>Two ways to create a RegEx:</strong>',
          '<ul><li>Literal: <code>/pattern/flags</code></li><li>Constructor: <code>new RegExp("pattern", "flags")</code></li></ul>'
        ]
      },
      {
        heading: 'Basic RegEx Syntax',
        content: [
          'Here are the most commonly used special characters:',
          '<ul><li><code>.</code> — any single character except newline</li><li><code>^</code> — start of string</li><li><code>$</code> — end of string</li><li><code>*</code> — zero or more of the preceding</li><li><code>+</code> — one or more of the preceding</li><li><code>?</code> — zero or one of the preceding</li><li><code>{n}</code> — exactly n occurrences</li><li><code>[]</code> — character class (any character inside)</li><li><code>\d</code> — digit (0-9)</li><li><code>\w</code> — word character (letter, digit, underscore)</li><li><code>\s</code> — whitespace</li></ul>'
        ],
        code: `const text = "Hello 123 World!";

console.log(/\d+/.test(text));       // true — contains digits
console.log(/World/.test(text));     // true — contains "World"
console.log(/^Hello/.test(text));    // true — starts with "Hello"
console.log(/!$/.test(text));        // true — ends with "!"

// Extract digits
const digits = text.match(/\d+/g);
console.log(digits);  // Output: ["123"]`
      },
      {
        heading: 'Common String Methods with RegEx',
        content: [
          'JavaScript strings have built-in methods that work with regular expressions:',
          '<ul><li><strong>test()</strong> — returns true/false if pattern matches</li><li><strong>match()</strong> — returns array of matches</li><li><strong>replace()</strong> — replaces matches with new text</li><li><strong>split()</strong> — splits string by pattern</li><li><strong>search()</strong> — returns index of first match</li></ul>'
        ],
        code: `const str = "The quick brown fox jumps over the lazy dog";

// test
console.log(/fox/.test(str));        // true

// match
console.log(str.match(/o./g));      // ["ox", "ov", "og"]

// replace
console.log(str.replace(/dog/, "cat"));  // The quick brown fox jumps over the lazy cat

// split
console.log(str.split(/\s+/));      // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// search
console.log(str.search(/fox/));      // 16`
      },
      {
        heading: 'Flags',
        content: [
          'Flags modify how the RegEx behaves:',
          '<ul><li><code>g</code> — global (find all matches, not just first)</li><li><code>i</code> — case-insensitive</li><li><code>m</code> — multiline mode (^ and $ match each line)</li><li><code>s</code> — dot matches newlines too</li><li><code>u</code> — unicode support</li></ul>'
        ],
        code: `const text = "Hello hello HELLO";

// Without flag: finds first match only
console.log(text.match(/hello/));      // ["hello"]

// With 'i' flag: case-insensitive
console.log(text.match(/hello/i));     // ["Hello"]

// With 'gi' flags: all matches, case-insensitive
console.log(text.match(/hello/gi));  // ["Hello", "hello", "HELLO"]`,
      },
      {
        heading: 'Practical Examples',
        content: [
          'Regular expressions are essential for validating and parsing text.',
          'Here are some real-world patterns:'
        ],
        code: `// Validate email
const email = "user@example.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email));  // true

// Validate phone number (simple)
const phone = "+1-234-567-8900";
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
console.log(phoneRegex.test(phone));  // true

// Extract URLs
const text = "Visit https://example.com and http://test.org";
const urlRegex = /https?:\/\/[^\s]+/g;
console.log(text.match(urlRegex));  // ["https://example.com", "http://test.org"]

// Replace all whitespace with single space
const messy = "Too   much    space";
console.log(messy.replace(/\s+/g, " "));  // "Too much space"`
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Write a RegEx that validates a strong password: at least 8 characters, contains at least one uppercase letter, one lowercase letter, and one digit.',
          '',
          '<strong>Exercise 2:</strong> Use <code>replace()</code> to censor all 4-digit numbers in a string, replacing them with <code>****</code> (e.g., "My PIN is 1234" → "My PIN is ****").'
        ]
      }
    ]
  },
  'json': {
    title: 'JavaScript JSON',
    sections: [
      {
        heading: 'What is JSON?',
        content: [
          'JSON (JavaScript Object Notation) is a lightweight data format that is easy for humans to read and write, and easy for machines to parse and generate.',
          'It is the most common format for exchanging data between a server and a web application.',
          '<strong>Think of JSON as a universal language</strong> that any programming language can understand.',
          '<strong>JSON supports:</strong>',
          '<ul><li>Strings (in double quotes)</li><li>Numbers</li><li>Objects (key-value pairs)</li><li>Arrays</li><li>Booleans (<code>true</code> / <code>false</code>)</li><li><code>null</code></li></ul>'
        ]
      },
      {
        heading: 'JSON Syntax Rules',
        content: [
          'JSON has strict syntax rules:',
          '<ul><li>Keys must be in <strong>double quotes</strong></li><li>String values must be in <strong>double quotes</strong></li><li>No trailing commas allowed</li><li>No comments allowed</li><li>No undefined values</li><li>Functions cannot be stored in JSON</li></ul>'
        ],
        code: `// Valid JSON
{
    "name": "Alice",
    "age": 25,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}

// Invalid JSON examples
{ name: "Alice" }      // Error: keys must be quoted
{ "name": 'Alice' }    // Error: single quotes not allowed
{ "name": "Alice", }   // Error: trailing comma`
      },
      {
        heading: 'JSON.stringify()',
        content: [
          '<code>JSON.stringify()</code> converts a JavaScript object into a JSON string.',
          'This is useful when you need to send data to a server or store it in localStorage.'
        ],
        code: `const person = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "London",
        country: "UK"
    }
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"Bob","age":30,"hobbies":["reading","gaming"],"address":{"city":"London","country":"UK"}}

// Pretty-print with indentation
const prettyJSON = JSON.stringify(person, null, 2);
console.log(prettyJSON);
/*
{
  "name": "Bob",
  "age": 30,
  "hobbies": [
    "reading",
    "gaming"
  ],
  "address": {
    "city": "London",
    "country": "UK"
  }
}
*/`
      },
      {
        heading: 'JSON.parse()',
        content: [
          '<code>JSON.parse()</code> converts a JSON string back into a JavaScript object.',
          'This is useful when you receive JSON data from a server.'
        ],
        code: `const jsonString = '{"name": "Alice", "age": 25, "isActive": true}';

const user = JSON.parse(jsonString);
console.log(user.name);      // Output: Alice
console.log(user.age);       // Output: 25
console.log(user.isActive);  // Output: true

// Parsing arrays
const arrJson = '[1, 2, 3, "four", true]';
const arr = JSON.parse(arrJson);
console.log(arr);  // Output: [1, 2, 3, "four", true]`
      },
      {
        heading: 'Handling JSON Errors',
        content: [
          'Always wrap <code>JSON.parse()</code> in <code>try...catch</code> when parsing untrusted data.',
          'Invalid JSON will throw a <code>SyntaxError</code>.'
        ],
        code: `const badJSON = '{"name": "Alice", "age": }';  // invalid

try {
    const data = JSON.parse(badJSON);
} catch (err) {
    console.log("Invalid JSON:", err.message);
    // Output: Invalid JSON: Unexpected token } in JSON at position ...
}`
      },
      {
        heading: 'Working with localStorage',
        content: [
          'localStorage stores data as strings, so JSON is perfect for saving objects.',
          'Use <code>JSON.stringify()</code> to save and <code>JSON.parse()</code> to retrieve.'
        ],
        code: `// Save to localStorage
const settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("settings", JSON.stringify(settings));

// Retrieve from localStorage
const saved = localStorage.getItem("settings");
const parsed = JSON.parse(saved);
console.log(parsed.theme);     // Output: dark
console.log(parsed.fontSize);  // Output: 16`
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> Create an array of 3 product objects (each with <code>name</code>, <code>price</code>, <code>inStock</code>). Convert it to JSON and then parse it back.',
          '',
          '<strong>Exercise 2:</strong> Write a function <code>safeParse(json)</code> that tries to parse a JSON string. Return the parsed object on success, or <code>null</code> if it fails.'
        ]
      }
    ]
  },
  'debugging': {
    title: 'JavaScript Debugging',
    sections: [
      {
        heading: 'What is Debugging?',
        content: [
          'Debugging is the process of finding and fixing errors (bugs) in your code.',
          'Every developer spends significant time debugging — it is a core skill, not a side task.',
          '<strong>Think of it like detective work:</strong> you gather clues, form hypotheses, and test them until you find the culprit.',
          '<strong>Common debugging tools:</strong>',
          '<ul><li><code>console.log()</code> — print values to the console</li><li>Browser DevTools — breakpoints, step-through, watch expressions</li><li>Debugger statement — pause execution at a specific line</li><li>Linters — catch syntax errors before runtime</li></ul>'
        ]
      },
      {
        heading: 'Using console.log()',
        content: [
          'The simplest and most common debugging technique is printing values to the console.',
          'Modern consoles offer more than just <code>log()</code>:'
        ],
        code: `const user = { name: "Alice", age: 25 };

console.log("User:", user);           // General output
console.table(user);                  // Table format for objects/arrays
console.dir(user);                    // Inspect object properties

console.warn("This is a warning");    // Yellow warning
console.error("This is an error");    // Red error

console.group("User Details");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.groupEnd();

// Timing
console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");  // Output: loop: 2.345ms`
      },
      {
        heading: 'Using debugger Statement',
        content: [
          'The <code>debugger</code> statement pauses execution when DevTools is open.',
          'This is useful for inspecting variables at a specific point in your code.'
        ],
        code: `function calculateSum(a, b) {
    let result = a + b;
    debugger;  // Execution pauses here if DevTools is open
    return result;
}

calculateSum(5, 3);

// When paused:
// - Hover over variables to see their values
// - Use Step Over (F10) to execute next line
// - Use Step Into (F11) to enter a function call
// - Use Step Out (Shift+F11) to exit current function`
      },
      {
        heading: 'Breakpoints in DevTools',
        content: [
          'Browser DevTools (Chrome, Firefox, Edge) provide powerful debugging features:',
          '<ul><li><strong>Breakpoints</strong> — pause at a specific line</li><li><strong>Conditional breakpoints</strong> — pause only when a condition is met</li><li><strong>Watch expressions</strong> — monitor specific variables</li><li><strong>Call stack</strong> — see how you arrived at the current line</li><li><strong>Scope panel</strong> — inspect local and global variables</li></ul>'
        ],
        code: `/*
To set a breakpoint in Chrome DevTools:
1. Open DevTools (F12 or Ctrl+Shift+I)
2. Go to the Sources tab
3. Find your JavaScript file
4. Click on a line number to add a breakpoint
5. Refresh the page — execution will pause at that line

Pro tip: Right-click a line number to add a conditional breakpoint.
Example condition: i === 5
*/`
      },
      {
        heading: 'Common Bugs and Fixes',
        content: [
          'Here are the most frequent JavaScript bugs and how to spot them:'
        ],
        code: `// Bug 1: Type coercion with ==
console.log(0 == "0");   // true — unexpected!
console.log(0 === "0");  // false — always use ===

// Bug 2: Undefined in arrays
const arr = [1, , 3];
console.log(arr.length);  // 3
console.log(arr[1]);      // undefined (sparse array)

// Bug 3: Floating point precision
console.log(0.1 + 0.2);  // 0.30000000000000004
// Fix: (0.1 + 0.2).toFixed(2) === "0.30"

// Bug 4: this context in callbacks
const obj = {
    name: "Alice",
    greet: function() {
        setTimeout(function() {
            console.log(this.name);  // undefined — 'this' is global
        }, 100);
    }
};
// Fix: use arrow function: () => { console.log(this.name); }`
      },
      {
        heading: 'Try it Yourself',
        content: [
          '<strong>Exercise 1:</strong> The below code has a bug. Find and fix it:',
          '<code>function getTotal(prices) { let total = 0; for (let i = 0; i <= prices.length; i++) { total += prices[i]; } return total; }</code>',
          '<strong>Hint:</strong> Check the loop condition.',
          '',
          '<strong>Exercise 2:</strong> Add <code>debugger</code> and <code>console.log()</code> statements to trace the execution of a recursive factorial function.'
        ]
      }
    ]
  }
};

export const javascriptContent = {
  module1: javascriptModule1Content.module1,
  module2: jsModule2Content,
  module3: jsModule3Content,
  module4: jsModule4Content
};