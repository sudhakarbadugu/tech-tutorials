export const javaStructure = {
  module1: {
    title: 'Module 1: Java Fundamentals',
    topics: [
      { id: 'intro-java', title: 'Introduction to Java' },
      { id: 'variables-data-types', title: 'Variables and Data Types' },
      { id: 'operators-expressions', title: 'Operators and Expressions' },
      { id: 'control-flow', title: 'Control Flow (if, switch, loops)' },
      { id: 'methods-functions', title: 'Methods and Functions' },
      { id: 'arrays', title: 'Arrays' },
      { id: 'strings', title: 'String Handling' }
    ]
  },
  module2: {
    title: 'Module 2: Object-Oriented Programming',
    topics: [
      { id: 'classes-objects', title: 'Classes and Objects' },
      { id: 'constructors', title: 'Constructors' },
      { id: 'inheritance', title: 'Inheritance' },
      { id: 'polymorphism', title: 'Polymorphism' },
      { id: 'encapsulation', title: 'Encapsulation' },
      { id: 'abstraction', title: 'Abstraction' },
      { id: 'interfaces', title: 'Interfaces' }
    ]
  },
  module3: {
    title: 'Module 3: Advanced Java',
    topics: [
      { id: 'collections', title: 'Collections Framework' },
      { id: 'exception-handling', title: 'Exception Handling' },
      { id: 'file-io', title: 'File I/O' },
      { id: 'generics', title: 'Generics' },
      { id: 'lambda-expressions', title: 'Lambda Expressions' },
      { id: 'streams', title: 'Streams API' }
    ]
  },
  module4: {
    title: 'Module 4: Java Ecosystem',
    topics: [
      { id: 'jvm-basics', title: 'JVM Basics' },
      { id: 'packages', title: 'Packages and Access Modifiers' },
      { id: 'build-tools', title: 'Build Tools (Maven, Gradle)' },
      { id: 'unit-testing-junit', title: 'Unit Testing with JUnit' },
      { id: 'jdbc', title: 'JDBC and Database Connectivity' },
      { id: 'multithreading', title: 'Multithreading' }
    ]
  }
};


const javaModule1Content = {
  'intro-java': {
    title: 'Introduction to Java',
    sections: [
      {
        heading: 'What is Java?',
        content: [
          'Java is a popular, high-level programming language originally developed by Sun Microsystems in 1995.',
          'It is used for building desktop applications, web servers, Android apps, enterprise software, and more.',
          'Java follows the principle of <strong>"Write Once, Run Anywhere"</strong> — code compiled on one platform can run on any other platform that has a Java Virtual Machine (JVM).',
          '<strong>Key features:</strong>',
          '<ul><li>Object-oriented — everything is organized around objects</li><li>Platform independent — runs on Windows, Mac, Linux, and more</li><li>Strongly typed — variables must have declared types</li><li>Garbage collected — automatic memory management</li><li>Secure and robust — used by banks and large enterprises</li></ul>'
        ]
      },
      {
        heading: 'How Java Works',
        content: [
          'Java code goes through two main steps before running:',
          '<ol><li><strong>Compilation:</strong> Java source code (`.java`) is compiled into bytecode (`.class`) by the Java compiler (`javac`)</li><li><strong>Execution:</strong> The Java Virtual Machine (JVM) reads the bytecode and translates it into machine code for your specific platform</li></ol>',
          'This two-step process is what makes Java platform independent.'
        ]
      },
      {
        heading: 'Your First Java Program',
        content: [
          'Every Java program starts with a <strong>class</strong>.',
          'The <code>main</code> method is the entry point — where the program begins executing.',
          '<code>public static void main(String[] args)</code> looks complex, but it is the standard signature for the main method.',
          '<code>System.out.println()</code> prints text to the console followed by a new line.'
        ],
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("I am learning Java.");
    }
}`
      },
      {
        heading: 'Understanding the Structure',
        content: [
          '<code>public class HelloWorld</code> — defines a class named HelloWorld (must match the filename).',
          '<code>public static void main(String[] args)</code> — the starting point of the program.',
          '<code>System.out.println()</code> — prints output to the console.',
          'Curly braces <code>{}</code> define blocks of code. Every opening brace must have a matching closing brace.',
          'Statements end with a semicolon <code>;</code> — this is required in Java.'
        ]
      },
      {
        heading: 'Comments in Java',
        content: [
          'Comments are notes for humans — Java ignores them.',
          '<code>//</code> creates a single-line comment.',
          '<code>/* */</code> creates a multi-line comment.',
          '<code>/** */</code> creates a documentation comment (used by tools to generate docs).'
        ],
        code: `// This is a single-line comment

/*
 * This is a multi-line comment.
 * It can span many lines.
 */

/**
 * This is a documentation comment.
 * Used to describe classes and methods.
 */
public class CommentsExample {
    public static void main(String[] args) {
        // Print a message
        System.out.println("Hello!"); // inline comment
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a file named <code>HelloWorld.java</code>.',
          'Compile it with: <code>javac HelloWorld.java</code>',
          'Run it with: <code>java HelloWorld</code>',
          'Experiment: change the message and recompile.'
        ],
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        System.out.println("Today is a great day to learn.");
        
        // Try adding more println statements below
        // System.out.println("Your message here");
    }
}`
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
          'In Java, you <strong>must declare</strong> the type of a variable before using it.',
          '<strong>Syntax:</strong> <code>type variableName = value;</code>',
          '<strong>Rules for variable names:</strong>',
          '<ul><li>Must start with a letter, underscore <code>_</code>, or dollar sign <code>$</code></li><li>Cannot start with a number</li><li>Can contain letters, digits, underscores, and dollar signs</li><li>Case-sensitive (<code>age</code> and <code>Age</code> are different)</li><li>Cannot use Java reserved words like <code>class</code>, <code>public</code>, <code>static</code></li></ul>'
        ]
      },
      {
        heading: 'Primitive Data Types',
        content: [
          'Java has 8 primitive data types built into the language:',
          '<ul><li><strong>byte</strong> — whole numbers, -128 to 127 (1 byte)</li><li><strong>short</strong> — whole numbers, -32,768 to 32,767 (2 bytes)</li><li><strong>int</strong> — whole numbers, -2 billion to 2 billion (4 bytes) — most common</li><li><strong>long</strong> — very large whole numbers (8 bytes) — add <code>L</code> suffix</li><li><strong>float</strong> — decimal numbers with ~7 digits precision (4 bytes) — add <code>F</code> suffix</li><li><strong>double</strong> — decimal numbers with ~15 digits precision (8 bytes) — most common for decimals</li><li><strong>char</strong> — a single character in single quotes (2 bytes)</li><li><strong>boolean</strong> — <code>true</code> or <code>false</code> (1 bit)</li></ul>'
        ],
        table: {
          headers: ['Type', 'Size', 'Range / Values', 'Example'],
          rows: [
            ['byte', '1 byte', '-128 to 127', 'byte b = 100;'],
            ['short', '2 bytes', '-32,768 to 32,767', 'short s = 1000;'],
            ['int', '4 bytes', '-2³¹ to 2³¹-1', 'int age = 25;'],
            ['long', '8 bytes', '-2⁶³ to 2⁶³-1', 'long l = 100L;'],
            ['float', '4 bytes', '~7 decimal digits', 'float f = 3.14F;'],
            ['double', '8 bytes', '~15 decimal digits', 'double d = 3.14;'],
            ['char', '2 bytes', 'Single Unicode character', "char c = 'A';"],
            ['boolean', '1 bit', 'true or false', 'boolean ok = true;']
          ]
        },
        code: `public class DataTypes {
    public static void main(String[] args) {
        byte smallNumber = 100;
        short mediumNumber = 1000;
        int age = 25;                 // most common for whole numbers
        long bigNumber = 15000000000L; // note the L suffix
        
        float price = 19.99F;         // note the F suffix
        double pi = 3.14159265359;    // most common for decimals
        
        char grade = 'A';             // single character in single quotes
        boolean isActive = true;      // true or false
        
        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Grade: " + grade);
        System.out.println("Active: " + isActive);
    }
}`
      },
      {
        heading: 'Strings',
        content: [
          'A <strong>String</strong> is a sequence of characters enclosed in double quotes.',
          'String is <strong>not</strong> a primitive type — it is a class (reference type).',
          'But it is so commonly used that it gets special treatment.',
          'You can combine strings with the <code>+</code> operator — this is called concatenation.'
        ],
        code: `public class StringExample {
    public static void main(String[] args) {
        String name = "Alice";
        String greeting = "Hello, " + name + "!";
        
        System.out.println(greeting);  // Hello, Alice!
        
        // Combining strings with numbers
        int age = 30;
        System.out.println(name + " is " + age + " years old.");
    }
}`
      },
      {
        heading: 'Declaring vs Initializing',
        content: [
          'You can declare a variable first, then assign a value later.',
          'A variable must have a value before you use it.',
          'You can also declare multiple variables of the same type in one line.'
        ],
        code: `public class DeclareInitialize {
    public static void main(String[] args) {
        // Declare first, initialize later
        int score;
        score = 100;
        System.out.println("Score: " + score);
        
        // Declare and initialize at once
        double temperature = 98.6;
        
        // Multiple variables of same type
        int x = 10, y = 20, z = 30;
        System.out.println("Sum: " + (x + y + z));  // 60
    }
}`
      },
      {
        heading: 'Type Casting',
        content: [
          '<strong>Widening (Implicit):</strong> converting a smaller type to a larger type — Java does this automatically.',
          '<strong>Narrowing (Explicit):</strong> converting a larger type to a smaller type — you must specify with parentheses.',
          'Narrowing can cause data loss (e.g., converting <code>double</code> to <code>int</code> drops the decimal part).'
        ],
        code: `public class TypeCasting {
    public static void main(String[] args) {
        // Widening — automatic
        int small = 10;
        double large = small;  // int to double
        System.out.println("Widening: " + large);  // 10.0
        
        // Narrowing — manual (explicit)
        double pi = 3.14;
        int rounded = (int) pi;  // cast to int — drops decimal
        System.out.println("Narrowing: " + rounded);  // 3
        
        // Casting for calculations
        int a = 5, b = 2;
        System.out.println("Without cast: " + (a / b));     // 2
        System.out.println("With cast: " + ((double) a / b)); // 2.5
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create variables of different types and print them.',
          'Try implicit and explicit casting.',
          'Calculate the average of three integers and make sure the result is a decimal.'
        ],
        code: `public class Practice {
    public static void main(String[] args) {
        String name = "Bob";
        int birthYear = 1995;
        int currentYear = 2024;
        double height = 1.75;
        boolean isStudent = true;
        
        int age = currentYear - birthYear;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + "m");
        System.out.println("Student: " + isStudent);
        
        // Average of three numbers
        int num1 = 10, num2 = 20, num3 = 30;
        double average = (num1 + num2 + num3) / 3.0;
        System.out.println("Average: " + average);  // 20.0
    }
}`
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
          'Java divides operators into several groups:',
          '<ul><li>Arithmetic operators</li><li>Assignment operators</li><li>Comparison (relational) operators</li><li>Logical operators</li><li>Increment and decrement operators</li></ul>'
        ]
      },
      {
        heading: 'Arithmetic Operators',
        content: [
          'Used for mathematical operations:',
          '<ul><li><code>+</code> Addition</li><li><code>-</code> Subtraction</li><li><code>*</code> Multiplication</li><li><code>/</code> Division (integer division for ints)</li><li><code>%</code> Modulo (remainder)</li></ul>',
          '<strong>Note:</strong> dividing two integers drops the decimal part. To get a decimal result, at least one operand must be a <code>double</code> or <code>float</code>.'
        ],
        code: `public class Arithmetic {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;
        
        System.out.println("Addition: " + (a + b));        // 22
        System.out.println("Subtraction: " + (a - b));     // 12
        System.out.println("Multiplication: " + (a * b));  // 85
        System.out.println("Division: " + (a / b));        // 3 (integer!)
        System.out.println("Modulo: " + (a % b));          // 2
        
        // For decimal division
        System.out.println("True division: " + ((double) a / b));  // 3.4
    }
}`
      },
      {
        heading: 'Assignment Operators',
        content: [
          '<code>=</code> is the basic assignment operator.',
          'Shorthand operators combine an operation with assignment:',
          '<ul><li><code>+=</code> add and assign</li><li><code>-=</code> subtract and assign</li><li><code>*=</code> multiply and assign</li><li><code>/=</code> divide and assign</li><li><code>%=</code> modulo and assign</li></ul>'
        ],
        code: `public class Assignment {
    public static void main(String[] args) {
        int score = 10;
        score += 5;   // score = score + 5;  → 15
        score -= 3;   // score = score - 3;  → 12
        score *= 2;   // score = score * 2;  → 24
        score /= 4;   // score = score / 4;  → 6
        score %= 4;   // score = score % 4;  → 2
        
        System.out.println("Final score: " + score);
    }
}`
      },
      {
        heading: 'Comparison Operators',
        content: [
          'Comparison operators return <code>true</code> or <code>false</code>:',
          '<ul><li><code>==</code> Equal to</li><li><code>!=</code> Not equal to</li><li><code>></code> Greater than</li><li><code><</code> Less than</li><li><code>>=</code> Greater than or equal to</li><li><code><=</code> Less than or equal to</li></ul>',
          'These are essential for making decisions with <code>if</code> statements.'
        ],
        code: `public class Comparison {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        
        System.out.println("x == y: " + (x == y));   // false
        System.out.println("x != y: " + (x != y));   // true
        System.out.println("x < y: " + (x < y));      // true
        System.out.println("x > y: " + (x > y));      // false
        System.out.println("x <= 5: " + (x <= 5));    // true
        System.out.println("y >= 10: " + (y >= 10));  // true
    }
}`
      },
      {
        heading: 'Logical Operators',
        content: [
          'Logical operators combine multiple conditions:',
          '<ul><li><code>&&</code> AND — both conditions must be true</li><li><code>||</code> OR — at least one condition must be true</li><li><code>!</code> NOT — reverses the result</li></ul>',
          'Short-circuit evaluation: <code>&&</code> stops if the first condition is false; <code>||</code> stops if the first condition is true.'
        ],
        code: `public class Logical {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;
        
        // AND — both must be true
        boolean canDrive = (age >= 18) && hasLicense;
        System.out.println("Can drive: " + canDrive);  // true
        
        // OR — at least one must be true
        boolean isWeekend = false;
        boolean isHoliday = true;
        boolean canRelax = isWeekend || isHoliday;
        System.out.println("Can relax: " + canRelax);  // true
        
        // NOT — reverses
        boolean isRaining = true;
        System.out.println("Not raining: " + !isRaining);  // false
        
        // Combined conditions
        int score = 85;
        boolean passed = (score >= 60) && (score <= 100);
        System.out.println("Passed: " + passed);  // true
    }
}`
      },
      {
        heading: 'Increment and Decrement',
        content: [
          '<code>++</code> increases a value by 1.',
          '<code>--</code> decreases a value by 1.',
          '<strong>Prefix (++x):</strong> increment first, then use the value.',
          '<strong>Postfix (x++):</strong> use the value first, then increment.',
          'These are very common in loops.'
        ],
        code: `public class IncrementDecrement {
    public static void main(String[] args) {
        int a = 5;
        
        // Postfix: use value, then increment
        System.out.println("a++: " + (a++));  // prints 5, then a becomes 6
        System.out.println("After a++: " + a); // 6
        
        int b = 5;
        // Prefix: increment first, then use value
        System.out.println("++b: " + (++b));  // b becomes 6, then prints 6
        System.out.println("After ++b: " + b); // 6
        
        int c = 10;
        System.out.println("c--: " + (c--));  // prints 10, then c becomes 9
        System.out.println("After c--: " + c); // 9
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Calculate the area of a rectangle and check if it exceeds 100.',
          'Check if a number is even using the modulo operator.',
          'Combine comparison and logical operators to test if a number is in a range.'
        ],
        code: `public class Practice {
    public static void main(String[] args) {
        // Rectangle area
        int length = 12;
        int width = 8;
        int area = length * width;
        System.out.println("Area: " + area);
        System.out.println("Area > 100: " + (area > 100));
        
        // Check even number
        int num = 14;
        boolean isEven = (num % 2) == 0;
        System.out.println(num + " is even: " + isEven);
        
        // Number in range 10-20
        int value = 15;
        boolean inRange = (value >= 10) && (value <= 20);
        System.out.println(value + " is between 10 and 20: " + inRange);
    }
}`
      }
    ]
  },

  'control-flow': {
    title: 'Control Flow',
    sections: [
      {
        heading: 'What is Control Flow?',
        content: [
          'Control flow refers to the order in which individual statements are executed.',
          'Java provides three main structures for controlling flow:',
          '<ul><li><code>if</code> statements — for decision making</li><li><code>for</code> loops — for iterating a known number of times</li><li><code>while</code> and <code>do-while</code> loops — for repeating while a condition is true</li><li><code>switch</code> — for choosing among many options</li></ul>'
        ],
        diagram: {
          caption: 'Choosing the right Java control structure',
          chart: `flowchart TD
    A[Need to control flow?] --> B{One condition or a few?}
    B -->|Yes| C[Use if-else if-else]
    B -->|Many exact values| D[Use switch]
    A --> E{Need repetition?}
    E -->|Known count| F[Use for loop]
    E -->|Unknown count| G{Check before each iteration?}
    G -->|Yes| H[Use while loop]
    G -->|No| I[Use do-while loop]`
        }
      },
      {
        heading: 'if, else if, else',
        content: [
          'Use <code>if</code> to test a condition.',
          'Use <code>else if</code> to test another condition.',
          'Use <code>else</code> to run code when no condition is true.',
          'Curly braces <code>{}</code> define the block of code for each condition.',
          'If the block is only one line, braces are optional — but using them is recommended.'
        ],
        code: `public class IfElse {
    public static void main(String[] args) {
        int score = 85;
        char grade;
        
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        
        System.out.println("Score: " + score + ", Grade: " + grade);  // Grade: B
    }
}`
      },
      {
        heading: 'Ternary Operator',
        content: [
          'A shorthand for simple <code>if-else</code> statements.',
          '<strong>Syntax:</strong> <code>condition ? valueIfTrue : valueIfFalse;</code>',
          'Great for simple assignments, but do not overuse — complex ternaries are hard to read.'
        ],
        code: `public class Ternary {
    public static void main(String[] args) {
        int age = 20;
        
        // Instead of if-else
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("Status: " + status);  // Adult
        
        // Another example
        int a = 10, b = 20;
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max);  // 20
    }
}`
      },
      {
        heading: 'switch Statement',
        content: [
          'Use <code>switch</code> when you have many conditions based on a single value.',
          '<code>case</code> labels define possible values.',
          '<code>break</code> exits the switch — without it, execution "falls through" to the next case.',
          '<code>default</code> is like <code>else</code> — it runs when no case matches.',
          'In Java 12+, you can use arrow syntax <code>-></code> for cleaner code.'
        ],
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int day = 3;
        String dayName;
        
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        
        System.out.println("Day " + day + " is " + dayName);  // Wednesday
    }
}`
      },
      {
        heading: 'for Loops',
        content: [
          'A <code>for</code> loop repeats a block of code a specific number of times.',
          '<strong>Syntax:</strong> <code>for (initialize; condition; update) { ... }</code>',
          '<strong>Initialize:</strong> runs once before the loop starts (usually declare a counter).',
          '<strong>Condition:</strong> checked before each iteration — if false, the loop stops.',
          '<strong>Update:</strong> runs after each iteration (usually increment the counter).'
        ],
        code: `public class ForLoop {
    public static void main(String[] args) {
        // Count from 1 to 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // Countdown
        System.out.println("--- Countdown ---");
        for (int i = 5; i >= 1; i--) {
            System.out.println(i);
        }
        System.out.println("Blast off!");
        
        // Sum of first 10 numbers
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);  // 55
    }
}`
      },
      {
        heading: 'while and do-while Loops',
        content: [
          '<code>while</code> checks the condition <strong>before</strong> each iteration — the loop may never run.',
          '<code>do-while</code> checks the condition <strong>after</strong> each iteration — the loop always runs at least once.',
          'Be careful to update the condition variable, or you will create an infinite loop.'
        ],
        code: `public class WhileLoops {
    public static void main(String[] args) {
        // while loop
        int count = 1;
        while (count <= 5) {
            System.out.println("While: " + count);
            count++;
        }
        
        // do-while loop
        int num = 1;
        do {
            System.out.println("Do-while: " + num);
            num++;
        } while (num <= 5);
        
        // do-while runs at least once
        int x = 100;
        do {
            System.out.println("This prints once even though x > 5");
        } while (x <= 5);
    }
}`
      },
      {
        heading: 'break and continue',
        content: [
          '<code>break</code> — immediately exits the entire loop.',
          '<code>continue</code> — skips the rest of the current iteration and goes to the next.',
          'These are useful for controlling loop flow without complex nested conditions.'
        ],
        code: `public class BreakContinue {
    public static void main(String[] args) {
        // break — stop the loop
        System.out.println("--- break example ---");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break;  // stop at 5
            }
            System.out.println(i);  // prints 1, 2, 3, 4
        }
        
        // continue — skip iteration
        System.out.println("--- continue example ---");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue;  // skip even numbers
            }
            System.out.println(i);  // prints 1, 3, 5, 7, 9
        }
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Print all even numbers from 0 to 20 using a for loop.',
          'Write a while loop that counts down from 10 to 1.',
          'Use a switch statement to print the season based on a month number (1-12).'
        ],
        code: `public class Practice {
    public static void main(String[] args) {
        // Even numbers 0-20
        for (int i = 0; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();  // newline
        
        // Countdown
        int countdown = 10;
        while (countdown >= 1) {
            System.out.println(countdown);
            countdown--;
        }
        System.out.println("Blast off!");
        
        // Season by month
        int month = 7;
        String season;
        switch (month) {
            case 12: case 1: case 2:
                season = "Winter"; break;
            case 3: case 4: case 5:
                season = "Spring"; break;
            case 6: case 7: case 8:
                season = "Summer"; break;
            case 9: case 10: case 11:
                season = "Fall"; break;
            default:
                season = "Invalid month";
        }
        System.out.println("Month " + month + " is " + season);
    }
}`
      }
    ]
  },

  'methods-functions': {
    title: 'Methods and Functions',
    sections: [
      {
        heading: 'What is a Method?',
        content: [
          'A method is a reusable block of code that runs only when it is called.',
          'Methods help organize code, reduce repetition, and make programs easier to read.',
          'In Java, every method belongs to a class.',
          'You have already seen one method: <code>public static void main(String[] args)</code>.'
        ]
      },
      {
        heading: 'Method Syntax',
        content: [
          '<strong>Syntax:</strong> <code>accessModifier returnType methodName(parameters) { ... }</code>',
          '<ul><li><strong>accessModifier</strong> — <code>public</code>, <code>private</code>, etc. (usually <code>public</code> or <code>private</code>)</li><li><strong>returnType</strong> — the data type the method returns; use <code>void</code> if it returns nothing</li><li><strong>methodName</strong> — follow camelCase naming (e.g., <code>calculateSum</code>)</li><li><strong>parameters</strong> — values you pass into the method (can be empty)</li></ul>'
        ],
        code: `public class MethodExample {
    // A simple method with no parameters and no return value
    public static void sayHello() {
        System.out.println("Hello!");
    }
    
    // A method with parameters
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // A method that returns a value
    public static int add(int a, int b) {
        int sum = a + b;
        return sum;
    }
    
    public static void main(String[] args) {
        sayHello();                    // Hello!
        greet("Alice");                // Hello, Alice!
        
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);  // 5 + 3 = 8
        
        // You can also use the return value directly
        System.out.println("10 + 20 = " + add(10, 20));
    }
}`
      },
      {
        heading: 'static Methods',
        content: [
          'The <code>static</code> keyword means the method belongs to the class, not to any specific object.',
          'You can call a static method without creating an object: <code>ClassName.methodName()</code>.',
          'If a method is not <code>static</code>, you must create an object (instance) before calling it.',
          'For now, we will use <code>static</code> methods so we can call them directly from <code>main</code>.'
        ]
      },
      {
        heading: 'Method Overloading',
        content: [
          '<strong>Method overloading</strong> means having multiple methods with the same name but different parameters.',
          'Java distinguishes them by the number, type, or order of parameters.',
          'This makes your code cleaner — you do not need different names for similar operations.'
        ],
        code: `public class Overloading {
    // Method to add two integers
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded: add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded: add two doubles
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println(add(2, 3));           // 5 (int version)
        System.out.println(add(2, 3, 4));        // 9 (3-int version)
        System.out.println(add(2.5, 3.5));     // 6.0 (double version)
    }
}`
      },
      {
        heading: 'Examples',
        content: [
          'Here are practical methods: calculating area, checking even numbers, and finding the maximum.'
        ],
        code: `public class MethodExamples {
    public static double calculateArea(double length, double width) {
        return length * width;
    }
    
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    public static int findMax(int a, int b, int c) {
        int max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        return max;
    }
    
    public static void main(String[] args) {
        System.out.println("Area: " + calculateArea(5.0, 3.0));     // 15.0
        System.out.println("Is 4 even? " + isEven(4));                 // true
        System.out.println("Is 7 even? " + isEven(7));                 // false
        System.out.println("Max of 10, 25, 15: " + findMax(10, 25, 15)); // 25
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a method called <code>multiply</code> that takes two integers and returns their product.',
          'Write a method <code>getGrade</code> that takes a score (0-100) and returns a letter grade.',
          'Call your methods from <code>main</code> and print the results.'
        ],
        code: `public class Practice {
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static char getGrade(int score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    }
    
    public static void main(String[] args) {
        System.out.println("4 * 5 = " + multiply(4, 5));
        System.out.println("7 * 3 = " + multiply(7, 3));
        
        System.out.println("Score 85: Grade " + getGrade(85));  // B
        System.out.println("Score 72: Grade " + getGrade(72));  // C
        System.out.println("Score 95: Grade " + getGrade(95));  // A
    }
}`
      }
    ]
  },

  'arrays': {
    title: 'Arrays',
    sections: [
      {
        heading: 'What is an Array?',
        content: [
          'An <strong>array</strong> is a container that stores multiple values of the <strong>same type</strong>.',
          'Think of it as a row of boxes — each box holds one value, and every box is the same size.',
          'Arrays have a <strong>fixed size</strong> — once created, you cannot add or remove slots.',
          'Array indexes start at <strong>0</strong> — the first element is at position 0.'
        ]
      },
      {
        heading: 'Creating Arrays',
        content: [
          '<strong>Method 1:</strong> Declare, then allocate memory.',
          '<strong>Method 2:</strong> Declare and initialize with values.',
          'All elements are automatically initialized: <code>0</code> for numbers, <code>false</code> for booleans, <code>\\u0000</code> for chars.'
        ],
        code: `public class ArrayBasics {
    public static void main(String[] args) {
        // Method 1: declare and allocate
        int[] numbers = new int[5];  // array of 5 integers, all set to 0
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        
        System.out.println("First: " + numbers[0]);   // 10
        System.out.println("Length: " + numbers.length); // 5
        
        // Method 2: declare with values
        String[] fruits = {"apple", "banana", "cherry"};
        System.out.println("Second fruit: " + fruits[1]);  // banana
        
        // Default values
        double[] prices = new double[3];
        System.out.println("Default double: " + prices[0]);  // 0.0
    }
}`
      },
      {
        heading: 'Looping Through Arrays',
        content: [
          'Use a <code>for</code> loop with an index to access each element.',
          'Or use the enhanced <code>for</code> loop (for-each) for cleaner code when you do not need the index.',
          'The enhanced for loop: <code>for (type element : array) { ... }</code>'
        ],
        code: `public class ArrayLoops {
    public static void main(String[] args) {
        int[] scores = {85, 92, 78, 90, 88};
        
        // Standard for loop
        System.out.println("Using index:");
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Score " + i + ": " + scores[i]);
        }
        
        // Enhanced for loop (for-each)
        System.out.println("\\nUsing for-each:");
        int sum = 0;
        for (int score : scores) {
            sum += score;
            System.out.println("Score: " + score);
        }
        
        double average = (double) sum / scores.length;
        System.out.println("\\nAverage: " + average);  // 86.6
    }
}`
      },
      {
        heading: 'Common Array Operations',
        content: [
          'Finding the maximum, minimum, and searching for a value.',
          'You can also sort arrays using <code>Arrays.sort()</code> from the <code>java.util</code> package.',
          'To use a class from another package, you must import it.'
        ],
        code: `import java.util.Arrays;

public class ArrayOperations {
    public static void main(String[] args) {
        int[] numbers = {45, 12, 78, 23, 67, 89, 34};
        
        // Find max
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) max = num;
        }
        System.out.println("Maximum: " + max);  // 89
        
        // Find min
        int min = numbers[0];
        for (int num : numbers) {
            if (num < min) min = num;
        }
        System.out.println("Minimum: " + min);  // 12
        
        // Sort the array
        Arrays.sort(numbers);
        System.out.println("Sorted: " + Arrays.toString(numbers));
        // [12, 23, 34, 45, 67, 78, 89]
    }
}`
      },
      {
        heading: 'Multidimensional Arrays',
        content: [
          'A <strong>2D array</strong> is like a table with rows and columns.',
          '<code>int[][] matrix = new int[rows][columns];</code>',
          'You can also initialize with nested curly braces.',
          'A 2D array is actually an array of arrays — each row can have a different length (jagged array).'
        ],
        code: `public class TwoDArray {
    public static void main(String[] args) {
        // Create a 3x3 matrix
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Access elements
        System.out.println("Element at [1][2]: " + matrix[1][2]);  // 6
        
        // Loop through 2D array
        System.out.println("\\nMatrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // Jagged array (rows of different lengths)
        int[][] triangle = {
            {1},
            {2, 3},
            {4, 5, 6}
        };
        System.out.println("\\nTriangle:");
        for (int[] row : triangle) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create an array of 5 doubles and calculate the average.',
          'Find the largest number in an array.',
          'Create a 2x2 matrix and calculate the sum of all elements.'
        ],
        code: `public class Practice {
    public static void main(String[] args) {
        // Average of doubles
        double[] temps = {23.5, 25.0, 22.8, 24.2, 26.1};
        double sum = 0;
        for (double t : temps) {
            sum += t;
        }
        System.out.println("Average temperature: " + (sum / temps.length));
        
        // Find largest
        int[] nums = {34, 12, 89, 45, 67, 23, 91, 5};
        int largest = nums[0];
        for (int n : nums) {
            if (n > largest) largest = n;
        }
        System.out.println("Largest: " + largest);  // 91
        
        // Sum of 2D array
        int[][] grid = {{1, 2}, {3, 4}};
        int total = 0;
        for (int[] row : grid) {
            for (int val : row) {
                total += val;
            }
        }
        System.out.println("Sum of grid: " + total);  // 10
    }
}`
      }
    ]
  },

  'strings': {
    title: 'Strings',
    sections: [
      {
        heading: 'What is a String?',
        content: [
          'A <strong>String</strong> is a sequence of characters enclosed in double quotes.',
          'In Java, String is a <strong>class</strong>, not a primitive type.',
          'Strings are <strong>immutable</strong> — once created, they cannot be changed. Any "modification" creates a new String.',
          'Java stores string literals in a special memory area called the <strong>String Pool</strong> for efficiency.'
        ],
        code: `public class StringIntro {
    public static void main(String[] args) {
        // Creating strings
        String greeting = "Hello, World!";
        String empty = "";
        
        // Using the String class
        String constructed = new String("Hello");  // less common
        
        System.out.println(greeting);
        System.out.println("Length: " + greeting.length());  // 13
    }
}`
      },
      {
        heading: 'String Concatenation',
        content: [
          'Combine strings using the <code>+</code> operator.',
          'When combining a string with a number, Java automatically converts the number to a string.',
          'For building strings in a loop, use <code>StringBuilder</code> instead — it is much faster.'
        ],
        code: `public class StringConcat {
    public static void main(String[] args) {
        String first = "Hello";
        String second = "World";
        
        // Using + operator
        String result = first + ", " + second + "!";
        System.out.println(result);  // Hello, World!
        
        // Combining with numbers
        int age = 25;
        String message = "I am " + age + " years old.";
        System.out.println(message);  // I am 25 years old.
        
        // StringBuilder for efficiency
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ");
        sb.append("Java");
        System.out.println(sb.toString());  // Hello Java
    }
}`
      },
      {
        heading: 'Common String Methods',
        content: [
          'Java provides many useful methods for working with strings:',
          '<ul><li><code>length()</code> — number of characters</li><li><code>charAt(index)</code> — character at a position</li><li><code>substring(start, end)</code> — extract part of a string</li><li><code>toUpperCase()</code> — convert to uppercase</li><li><code>toLowerCase()</code> — convert to lowercase</li><li><code>trim()</code> — remove leading and trailing spaces</li><li><code>replace(old, new)</code> — replace characters</li><li><code>contains(text)</code> — check if string contains text</li><li><code>startsWith(text)</code> — check beginning</li><li><code>endsWith(text)</code> — check ending</li><li><code>indexOf(text)</code> — find position of text</li><li><code>split(delimiter)</code> — break into array</li></ul>'
        ],
        code: `public class StringMethods {
    public static void main(String[] args) {
        String text = "  Hello, Java!  ";
        
        System.out.println("Original: '" + text + "'");
        System.out.println("Length: " + text.length());                    // 17
        System.out.println("Trimmed: '" + text.trim() + "'");              // 'Hello, Java!'
        System.out.println("Uppercase: " + text.toUpperCase().trim());    // HELLO, JAVA!
        System.out.println("Lowercase: " + text.toLowerCase().trim());    // hello, java!
        
        String clean = text.trim();
        System.out.println("Char at 0: " + clean.charAt(0));               // H
        System.out.println("Substring: " + clean.substring(7, 11));        // Java
        System.out.println("Contains 'Java': " + clean.contains("Java"));   // true
        System.out.println("Starts with 'Hello': " + clean.startsWith("Hello")); // true
        System.out.println("Index of 'Java': " + clean.indexOf("Java"));    // 7
        
        // Splitting
        String csv = "apple,banana,cherry";
        String[] fruits = csv.split(",");
        System.out.println("\\nFruits:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
    }
}`
      },
      {
        heading: 'Comparing Strings',
        content: [
          'Use <code>equals()</code> to compare the content of two strings.',
          '<strong>Never use <code>==</code></strong> to compare strings — it compares memory addresses, not content.',
          '<code>equalsIgnoreCase()</code> compares without considering uppercase/lowercase.',
          '<code>compareTo()</code> returns a number: negative if first string comes before, positive if after, 0 if equal.'
        ],
        code: `public class StringCompare {
    public static void main(String[] args) {
        String a = "Hello";
        String b = "Hello";
        String c = new String("Hello");
        
        // Correct way to compare content
        System.out.println("a equals b: " + a.equals(b));      // true
        System.out.println("a equals c: " + a.equals(c));      // true
        
        // Wrong way (usually)
        System.out.println("a == b: " + (a == b));            // true (same pool)
        System.out.println("a == c: " + (a == c));            // false (different objects!)
        
        // Case-insensitive comparison
        String upper = "JAVA";
        String lower = "java";
        System.out.println("Equals ignore case: " + upper.equalsIgnoreCase(lower)); // true
        
        // compareTo
        System.out.println("apple vs banana: " + "apple".compareTo("banana"));  // negative
        System.out.println("banana vs apple: " + "banana".compareTo("apple"));  // positive
    }
}`
      },
      {
        heading: 'String Formatting',
        content: [
          '<code>String.format()</code> creates formatted strings, similar to printf in C.',
          '<strong>Format specifiers:</strong>',
          '<ul><li><code>%s</code> — string</li><li><code>%d</code> — integer</li><li><code>%f</code> — floating point (decimal)</li><li><code>%.2f</code> — float with 2 decimal places</li><li><code>%n</code> — new line</li></ul>',
          'Java 15+ also supports text blocks with <code>"""</code> for multi-line strings.'
        ],
        code: `public class StringFormat {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double height = 1.75;
        
        // String.format
        String info = String.format("Name: %s, Age: %d, Height: %.2f meters", name, age, height);
        System.out.println(info);
        
        // Direct formatting
        System.out.printf("Pi: %.4f%n", Math.PI);  // Pi: 3.1416
        
        // Padding numbers
        System.out.printf("Number: %05d%n", 42);   // Number: 00042
        
        // Text block (Java 15+)
        String html = """
            <html>
                <body>
                    <h1>Hello</h1>
                </body>
            </html>
            """;
        System.out.println(html);
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Ask the user for their name (simulate with a variable), then print it in uppercase and lowercase.',
          'Check if a string starts with the letter "A".',
          'Count how many vowels are in a string.',
          'Reverse a string.'
        ],
        code: `public class Practice {
    public static void main(String[] args) {
        String name = "Alexander";
        
        // Uppercase and lowercase
        System.out.println("Uppercase: " + name.toUpperCase());
        System.out.println("Lowercase: " + name.toLowerCase());
        
        // Starts with A
        System.out.println("Starts with A: " + name.startsWith("A"));
        
        // Count vowels
        String text = "Hello, Java Programming!";
        int vowels = 0;
        String lower = text.toLowerCase();
        for (int i = 0; i < lower.length(); i++) {
            char c = lower.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vowels++;
            }
        }
        System.out.println("Vowels in '" + text + "': " + vowels);
        
        // Reverse a string
        String original = "Programming";
        String reversed = "";
        for (int i = original.length() - 1; i >= 0; i--) {
            reversed += original.charAt(i);
        }
        System.out.println("Reversed: " + reversed);  // gnimmargorP
    }
}`
      }
    ]
  }
};

const javaModule2Content = {
  'classes-objects': {
    title: 'Classes and Objects',
    sections: [
      {
        heading: 'What is a Class?',
        content: [
          'A <strong>class</strong> is a blueprint or template for creating <strong>objects</strong>.',
          'Think of a class like a blueprint for a house — it defines what the house will have (rooms, doors) but it is not a house itself.',
          'An <strong>object</strong> is an actual instance of a class — a real "thing" built from that blueprint.',
          'Classes bundle <strong>data</strong> (attributes/fields) and <strong>behavior</strong> (methods) together into a single unit.'
        ],
        code: `// Define a class
public class Dog {
    // Attributes (fields)
    String name;
    int age;
    String breed;

    // Method (behavior)
    void bark() {
        System.out.println(name + " says: Woof! Woof!");
    }
}

// Create objects (instances) in another file or main method
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();    // Create an object
        myDog.name = "Buddy";     // Set attributes
        myDog.age = 3;
        myDog.breed = "Golden Retriever";

        myDog.bark();             // Call method
        // Output: Buddy says: Woof! Woof!
    }
}`,
        diagram: {
          caption: 'A Java class defines attributes and methods; objects are instances',
          chart: `classDiagram
    class Dog {
      +String name
      +int age
      +String breed
      +bark() void
    }
    Dog --> myDog : instance`
        }
      },
      {
        heading: 'Class vs Object',
        content: [
          '<strong>Class:</strong> The abstract idea — a template.',
          '<strong>Object:</strong> The concrete thing — built from the class.',
          'One class can create <strong>many objects</strong> (instances).',
          'Each object has its own copy of the attributes but shares the same methods.'
        ],
        code: `public class Car {
    String color;
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " is driving at " + speed + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();   // First object
        car1.brand = "Toyota";
        car1.color = "Red";
        car1.speed = 60;

        Car car2 = new Car();   // Second object
        car2.brand = "Honda";
        car2.color = "Blue";
        car2.speed = 80;

        car1.drive();  // Output: Toyota is driving at 60 km/h
        car2.drive();  // Output: Honda is driving at 80 km/h
    }
}`
      },
      {
        heading: 'Anatomy of a Java Class',
        content: [
          '<strong>Fields (Attributes):</strong> Variables that store data about the object.',
          '<strong>Methods:</strong> Functions that define what the object can do.',
          '<strong>Constructor:</strong> A special method that runs when an object is created (we will cover this next).',
          'Java classes are usually defined in their own file with the same name as the class.'
        ],
        code: `public class Student {
    // Fields
    String name;
    int rollNumber;
    double marks;

    // Method to display info
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Alice";
        s1.rollNumber = 101;
        s1.marks = 85.5;

        s1.displayInfo();
        // Output:
        // Name: Alice
        // Roll Number: 101
        // Marks: 85.5
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Book</code> class with <code>title</code>, <code>author</code>, and <code>pages</code> fields.',
          'Add a method <code>displayInfo()</code> that prints all the book details.',
          'Create two book objects in the main method and call their <code>displayInfo()</code> methods.'
        ],
        code: `public class Book {
    String title;
    String author;
    int pages;

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
    }
}

public class Main {
    public static void main(String[] args) {
        Book book1 = new Book();
        book1.title = "Java Basics";
        book1.author = "John Doe";
        book1.pages = 250;

        Book book2 = new Book();
        book2.title = "Advanced Java";
        book2.author = "Jane Smith";
        book2.pages = 400;

        book1.displayInfo();
        book2.displayInfo();
    }
}`
      }
    ]
  },
  'constructors': {
    title: 'Constructors',
    sections: [
      {
        heading: 'What is a Constructor?',
        content: [
          'A <strong>constructor</strong> is a special method that runs automatically when an object is created.',
          'It has <strong>the same name as the class</strong> and <strong>no return type</strong> (not even void).',
          'Constructors are used to <strong>initialize</strong> (set up) an object when it is created.',
          'Think of it like filling out a form when you open a new bank account — the constructor sets up the initial state.'
        ],
        code: `public class Person {
    String name;
    int age;

    // Constructor
    Person(String n, int a) {
        name = n;
        age = a;
    }

    void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);   // Constructor runs here
        p1.introduce();  // Output: Hi, I'm Alice and I'm 25 years old.

        Person p2 = new Person("Bob", 30);
        p2.introduce();  // Output: Hi, I'm Bob and I'm 30 years old.
    }
}`
      },
      {
        heading: 'Default Constructor',
        content: [
          'If you do not write any constructor, Java provides a <strong>default constructor</strong> automatically.',
          'The default constructor has no parameters and gives default values to fields (0, null, false).',
          'Once you create your own constructor, the default constructor <strong>disappears</strong> — you must write it yourself if you still want it.'
        ],
        code: `public class Student {
    String name;
    int rollNumber;

    // Default constructor (no parameters)
    Student() {
        name = "Unknown";
        rollNumber = 0;
    }

    // Parameterized constructor
    Student(String n, int r) {
        name = n;
        rollNumber = r;
    }

    void display() {
        System.out.println(name + " - " + rollNumber);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();           // Uses default constructor
        Student s2 = new Student("Alice", 101); // Uses parameterized constructor

        s1.display();  // Output: Unknown - 0
        s2.display();  // Output: Alice - 101
    }
}`
      },
      {
        heading: 'Constructor Overloading',
        content: [
          'You can have <strong>multiple constructors</strong> in the same class with different parameters.',
          'This is called <strong>constructor overloading</strong>.',
          'Java figures out which constructor to use based on the arguments you pass.'
        ],
        code: `public class Rectangle {
    int width;
    int height;

    // Constructor with no parameters (square)
    Rectangle() {
        width = 10;
        height = 10;
    }

    // Constructor with one parameter (square)
    Rectangle(int side) {
        width = side;
        height = side;
    }

    // Constructor with two parameters (rectangle)
    Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    void display() {
        System.out.println("Width: " + width + ", Height: " + height);
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();      // Default square
        Rectangle r2 = new Rectangle(5);     // Square with side 5
        Rectangle r3 = new Rectangle(4, 6);  // Rectangle

        r1.display();  // Output: Width: 10, Height: 10
        r2.display();  // Output: Width: 5, Height: 5
        r3.display();  // Output: Width: 4, Height: 6
    }
}`
      },
      {
        heading: 'The this Keyword',
        content: [
          '<code>this</code> refers to the <strong>current object</strong>.',
          'It is used when a parameter has the <strong>same name</strong> as a field.',
          'It makes your code clearer and avoids naming confusion.'
        ],
        code: `public class Employee {
    String name;
    double salary;

    // Using 'this' to distinguish fields from parameters
    Employee(String name, double salary) {
        this.name = name;       // this.name refers to the field
        this.salary = salary;   // name refers to the parameter
    }

    void display() {
        System.out.println(name + " earns " + salary);
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Alice", 50000);
        emp.display();  // Output: Alice earns 50000.0
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Circle</code> class with a <code>radius</code> field.',
          'Add a default constructor that sets radius to 1.',
          'Add a parameterized constructor that accepts a radius.',
          'Add a method <code>getArea()</code> that returns the area (π × r²). Use <code>Math.PI</code>.',
          'Create circles using both constructors and print their areas.'
        ],
        code: `public class Circle {
    double radius;

    Circle() {
        radius = 1.0;
    }

    Circle(double r) {
        this.radius = r;
    }

    double getArea() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Circle c1 = new Circle();
        Circle c2 = new Circle(5.0);

        System.out.println("Circle 1 Area: " + c1.getArea());
        // Output: Circle 1 Area: 3.14159...

        System.out.println("Circle 2 Area: " + c2.getArea());
        // Output: Circle 2 Area: 78.5398...
    }
}`
      }
    ]
  },
  'inheritance': {
    title: 'Inheritance',
    sections: [
      {
        heading: 'What is Inheritance?',
        content: [
          '<strong>Inheritance</strong> lets a new class (child/subclass) get all the fields and methods from an existing class (parent/superclass).',
          'Think of it like a family — a child inherits traits from their parents but can also have their own unique traits.',
          'Inheritance promotes <strong>code reuse</strong> — write common code once in the parent, then extend it in the child.',
          'Use the <code>extends</code> keyword to create inheritance in Java.'
        ],
        code: `// Parent class
class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating.");
    }

    void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println(name + " says: Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.name = "Buddy";   // Inherited field

        myDog.eat();    // Inherited method
        myDog.sleep();  // Inherited method
        myDog.bark();   // Own method

        // Output:
        // Buddy is eating.
        // Buddy is sleeping.
        // Buddy says: Woof!
    }
}`,
        diagram: {
          caption: 'Dog inherits fields and methods from Animal',
          chart: `classDiagram
    Animal <|-- Dog
    class Animal {
      +String name
      +eat() void
      +sleep() void
    }
    class Dog {
      +bark() void
    }`
        }
      },
      {
        heading: 'Why Use Inheritance?',
        content: [
          '<strong>Code Reuse:</strong> Write common code once, use it in many classes.',
          '<strong>Organization:</strong> Group related classes together logically.',
          '<strong>Extensibility:</strong> Add new features without changing existing code.',
          '<strong>Polymorphism:</strong> Use child classes wherever the parent class is expected.'
        ],
        code: `class Vehicle {
    String brand;
    int speed;

    void honk() {
        System.out.println("Beep! Beep!");
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Speed: " + speed + " km/h");
    }
}

class Car extends Vehicle {
    int trunkCapacity;

    void openTrunk() {
        System.out.println("Trunk is open.");
    }
}

class Bicycle extends Vehicle {
    int gearCount;

    void ringBell() {
        System.out.println("Ring! Ring!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.brand = "Toyota";
        myCar.speed = 120;
        myCar.trunkCapacity = 500;

        myCar.honk();        // Inherited
        myCar.displayInfo(); // Inherited
        myCar.openTrunk();   // Own method
    }
}`
      },
      {
        heading: 'The super Keyword',
        content: [
          '<code>super</code> is used to access the <strong>parent class</strong> members from the child class.',
          'Common uses:',
          '<ul><li>Call the parent constructor: <code>super()</code></li><li>Call a parent method: <code>super.methodName()</code></li><li>Access a parent field: <code>super.fieldName</code></li></ul>',
          'This is useful when the child wants to extend (not replace) the parent behavior.'
        ],
        code: `class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
}

class Student extends Person {
    int grade;

    Student(String name, int age, int grade) {
        super(name, age);   // Call parent constructor
        this.grade = grade;
    }

    void introduce() {
        super.introduce();  // Call parent's introduce method
        System.out.println("I'm in grade " + grade + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Alice", 15, 10);
        s.introduce();
        // Output:
        // Hi, I'm Alice and I'm 15 years old.
        // I'm in grade 10.
    }
}`
      },
      {
        heading: 'Types of Inheritance in Java',
        content: [
          '<strong>Single Inheritance:</strong> A child class extends one parent class.',
          '<strong>Multilevel Inheritance:</strong> A child class extends another child class (grandparent → parent → child).',
          '<strong>Hierarchical Inheritance:</strong> Multiple children extend the same parent.',
          'Java does NOT support multiple inheritance with classes (a class cannot extend two classes). Use interfaces for that.'
        ],
        code: `class Animal {
    void breathe() {
        System.out.println("Breathing...");
    }
}

class Mammal extends Animal {
    void walk() {
        System.out.println("Walking...");
    }
}

class Dog extends Mammal {
    void bark() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.breathe();   // From Animal
        d.walk();      // From Mammal
        d.bark();      // From Dog
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Shape</code> parent class with a <code>color</code> field and a <code>displayColor()</code> method.',
          'Create a <code>Circle</code> child class with a <code>radius</code> field and an <code>getArea()</code> method.',
          'Create a <code>Rectangle</code> child class with <code>width</code> and <code>height</code> fields and a <code>getArea()</code> method.',
          'Create objects of both child classes and call all their methods.'
        ],
        code: `class Shape {
    String color;

    void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;

    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width;
    double height;

    double getArea() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.color = "Red";
        c.radius = 5;

        Rectangle r = new Rectangle();
        r.color = "Blue";
        r.width = 4;
        r.height = 6;

        c.displayColor();
        System.out.println("Circle Area: " + c.getArea());

        r.displayColor();
        System.out.println("Rectangle Area: " + r.getArea());
    }
}`
      }
    ]
  },
  'polymorphism': {
    title: 'Polymorphism',
    sections: [
      {
        heading: 'What is Polymorphism?',
        content: [
          '<strong>Polymorphism</strong> means "many forms" — the same method can behave differently depending on the object.',
          'Think of a <code>+</code> operator: it adds numbers but concatenates strings. Same symbol, different behavior.',
          'In OOP, polymorphism lets you use a <strong>single interface</strong> to control access to a <strong>general class</strong> of actions.',
          'Java supports two types: <strong>method overloading</strong> (compile-time) and <strong>method overriding</strong> (runtime).'
        ],
        code: `class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound();  // Output: Woof! Woof!
        myCat.makeSound();  // Output: Meow!
    }
}`
      },
      {
        heading: 'Method Overriding (Runtime Polymorphism)',
        content: [
          '<strong>Method overriding</strong> means a child class provides a new implementation for a method that is already defined in the parent class.',
          'Use the <code>@Override</code> annotation to tell Java you are intentionally overriding.',
          'The method in the child must have the <strong>same name, return type, and parameters</strong> as the parent method.',
          'When you call the method on a child object, the child version runs — even if you reference it through a parent variable.'
        ],
        code: `class Shape {
    double getArea() {
        return 0;   // Default implementation
    }
}

class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    @Override
    double getArea() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle(5);
        Shape s2 = new Rectangle(4, 6);

        System.out.println("Circle Area: " + s1.getArea());    // Uses Circle's version
        System.out.println("Rectangle Area: " + s2.getArea()); // Uses Rectangle's version
    }
}`
      },
      {
        heading: 'Method Overloading (Compile-Time Polymorphism)',
        content: [
          '<strong>Method overloading</strong> means having <strong>multiple methods with the same name</strong> but different parameters.',
          'Java decides which method to call based on the <strong>number and type of arguments</strong>.',
          'Return type alone does not create overloading — the parameter list must be different.'
        ],
        code: `class Calculator {
    // Method with 2 int parameters
    int add(int a, int b) {
        return a + b;
    }

    // Method with 3 int parameters
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with double parameters
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(2, 3));        // 5 (2 ints)
        System.out.println(calc.add(2, 3, 4));     // 9 (3 ints)
        System.out.println(calc.add(2.5, 3.5));   // 6.0 (2 doubles)
    }
}`
      },
      {
        heading: 'Using Polymorphism with Arrays',
        content: [
          'You can store objects of different child classes in a <strong>parent class array</strong>.',
          'This lets you loop through different types and call the same method — each object responds in its own way.',
          'This is one of the most powerful uses of polymorphism.'
        ],
        code: `class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
    @Override
    void makeSound() {
        System.out.println("Moo!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal[] animals = new Animal[3];
        animals[0] = new Dog();
        animals[1] = new Cat();
        animals[2] = new Cow();

        for (Animal a : animals) {
            a.makeSound();  // Each calls its own version
        }

        // Output:
        // Woof!
        // Meow!
        // Moo!
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Payment</code> parent class with a <code>processPayment(double amount)</code> method.',
          'Create <code>CreditCardPayment</code>, <code>PayPalPayment</code>, and <code>CashPayment</code> child classes.',
          'Override <code>processPayment</code> in each child to print a different message.',
          'Store all payment objects in an array and loop through them, calling <code>processPayment(100.0)</code> on each.'
        ],
        code: `class Payment {
    void processPayment(double amount) {
        System.out.println("Processing generic payment of " + amount);
    }
}

class CreditCardPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing credit card payment of " + amount);
    }
}

class PayPalPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing PayPal payment of " + amount);
    }
}

class CashPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing cash payment of " + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment[] payments = new Payment[3];
        payments[0] = new CreditCardPayment();
        payments[1] = new PayPalPayment();
        payments[2] = new CashPayment();

        for (Payment p : payments) {
            p.processPayment(100.0);
        }
    }
}`
      }
    ]
  },
  'encapsulation': {
    title: 'Encapsulation',
    sections: [
      {
        heading: 'What is Encapsulation?',
        content: [
          '<strong>Encapsulation</strong> means wrapping data (fields) and the methods that work on that data together in a class.',
          'It also means <strong>hiding</strong> the internal details so the outside world cannot accidentally break things.',
          'Think of a TV remote — you press buttons (methods) but you cannot directly touch the internal circuits (private fields).',
          'Encapsulation protects data integrity and makes code easier to maintain.'
        ],
        code: `public class BankAccount {
    // Private fields — hidden from outside
    private String accountNumber;
    private double balance;

    // Constructor
    public BankAccount(String accNum, double initialBalance) {
        accountNumber = accNum;
        balance = initialBalance;
    }

    // Public method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid amount");
        }
    }

    // Public method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds or invalid amount");
        }
    }

    // Public method to check balance (getter)
    public double getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", 1000);

        account.deposit(500);
        account.withdraw(200);
        System.out.println("Current Balance: " + account.getBalance());

        // Output:
        // Deposited: 500.0
        // Withdrawn: 200.0
        // Current Balance: 1300.0
    }
}`
      },
      {
        heading: 'Access Modifiers in Java',
        content: [
          'Java uses <strong>access modifiers</strong> to control who can access class members:',
          '<ul><li><code>public</code> — Anyone can access from anywhere</li><li><code>private</code> — Only accessible within the same class</li><li><code>protected</code> — Accessible within the same class, package, and subclasses</li><li><code>default</code> (no modifier) — Accessible within the same package only</li></ul>',
          'For encapsulation, fields are usually <code>private</code> and methods are <code>public</code>.'
        ],
        code: `public class Student {
    private String name;       // Private — hidden
    private int age;           // Private — hidden
    public String school;      // Public — accessible anywhere

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String newName) {
        if (newName != null && !newName.isEmpty()) {
            name = newName;
        }
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter with validation
    public void setAge(int newAge) {
        if (newAge >= 0 && newAge <= 150) {
            age = newAge;
        } else {
            System.out.println("Invalid age!");
        }
    }
}`
      },
      {
        heading: 'Getters and Setters',
        content: [
          '<strong>Getters</strong> (accessors) are methods that return the value of a private field.',
          '<strong>Setters</strong> (mutators) are methods that modify the value of a private field.',
          'They provide <strong>controlled access</strong> to private data.',
          'You can add validation, logging, or other logic inside getters and setters.'
        ],
        code: `public class Temperature {
    private double celsius;

    // Getter
    public double getCelsius() {
        return celsius;
    }

    // Setter with validation
    public void setCelsius(double value) {
        if (value >= -273.15) {
            celsius = value;
        } else {
            System.out.println("Temperature cannot be below absolute zero!");
        }
    }

    // Derived getter (no backing field)
    public double getFahrenheit() {
        return celsius * 9 / 5 + 32;
    }
}

public class Main {
    public static void main(String[] args) {
        Temperature temp = new Temperature();
        temp.setCelsius(25);

        System.out.println("Celsius: " + temp.getCelsius());      // 25.0
        System.out.println("Fahrenheit: " + temp.getFahrenheit()); // 77.0

        temp.setCelsius(-300);  // Invalid
        // Output: Temperature cannot be below absolute zero!
    }
}`
      },
      {
        heading: 'Benefits of Encapsulation',
        content: [
          '<strong>Data Hiding:</strong> Internal state is protected from accidental modification.',
          '<strong>Validation:</strong> You can enforce rules before changing data.',
          '<strong>Flexibility:</strong> You can change internal implementation without breaking external code.',
          '<strong>Read-only fields:</strong> Provide a getter but no setter.',
          '<strong>Write-only fields:</strong> Provide a setter but no getter (less common).'
        ],
        code: `public class User {
    private final String id;      // Read-only (final + no setter)
    private String email;         // Read and write
    private String password;      // Write-only (no getter)

    public User(String id) {
        this.id = id;
    }

    public String getId() {
        return id;   // Can read
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;   // Can write
    }

    // No getPassword() — write-only
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create an <code>Employee</code> class with <code>private</code> fields: <code>name</code>, <code>salary</code>, and <code>employeeId</code> (read-only).',
          'Add getters and setters with validation: salary cannot be negative.',
          'Add a method <code>raiseSalary(double percentage)</code> that increases salary by a given percentage.',
          'Create an employee object and test all methods.'
        ],
        code: `public class Employee {
    private String name;
    private double salary;
    private final int employeeId;

    public Employee(int id, String name, double salary) {
        this.employeeId = id;
        this.name = name;
        this.salary = salary;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        if (salary >= 0) {
            this.salary = salary;
        } else {
            System.out.println("Salary cannot be negative!");
        }
    }

    public void raiseSalary(double percentage) {
        if (percentage > 0) {
            salary += salary * percentage / 100;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee(101, "Alice", 50000);
        System.out.println("ID: " + emp.getEmployeeId());
        System.out.println("Name: " + emp.getName());
        System.out.println("Salary: " + emp.getSalary());

        emp.raiseSalary(10);
        System.out.println("After raise: " + emp.getSalary());

        emp.setSalary(-1000);  // Invalid
    }
}`
      }
    ]
  },
  'abstraction': {
    title: 'Abstraction',
    sections: [
      {
        heading: 'What is Abstraction?',
        content: [
          '<strong>Abstraction</strong> means hiding complex implementation details and showing only the essential features.',
          'Think of a car: you turn the key to start — you do not need to understand how the engine works.',
          'In Java, abstraction is achieved through <strong>abstract classes</strong> and <strong>interfaces</strong>.',
          'Abstraction helps reduce complexity and lets you focus on what an object does instead of how it does it.'
        ],
        code: `// Abstract class
abstract class Animal {
    // Regular method
    void sleep() {
        System.out.println("Sleeping...");
    }

    // Abstract method — no body, must be implemented by child classes
    abstract void makeSound();
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal();  // Error! Cannot create abstract class object

        Animal dog = new Dog();
        Animal cat = new Cat();

        dog.makeSound();  // Output: Woof! Woof!
        cat.makeSound();  // Output: Meow!
        dog.sleep();      // Output: Sleeping...
    }
}`
      },
      {
        heading: 'Abstract Classes',
        content: [
          'An <strong>abstract class</strong> is a class that cannot be instantiated (you cannot create objects directly).',
          'It is declared with the <code>abstract</code> keyword.',
          'It can have both <strong>abstract methods</strong> (no body) and <strong>concrete methods</strong> (with body).',
          'Child classes <strong>must implement</strong> all abstract methods, or they must also be declared abstract.'
        ],
        code: `abstract class Shape {
    String color;

    // Concrete method
    void setColor(String c) {
        color = c;
    }

    // Abstract methods
    abstract double getArea();
    abstract double getPerimeter();
}

class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    @Override
    double getArea() {
        return width * height;
    }

    @Override
    double getPerimeter() {
        return 2 * (width + height);
    }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[2];
        shapes[0] = new Circle(5);
        shapes[1] = new Rectangle(4, 6);

        for (Shape s : shapes) {
            System.out.println("Area: " + s.getArea());
            System.out.println("Perimeter: " + s.getPerimeter());
        }
    }
}`
      },
      {
        heading: 'Abstract Class vs Regular Class',
        content: [
          '<strong>Regular Class:</strong> Can be instantiated. All methods must have a body.',
          '<strong>Abstract Class:</strong> Cannot be instantiated. Can have abstract methods (no body).',
          'Use abstract classes when you want to provide some common code but force children to implement specific behavior.',
          'Use regular classes when you want to create fully functional objects directly.'
        ],
        code: `class RegularClass {
    void method1() { }
    void method2() { }
}

abstract class AbstractClass {
    void method1() { }           // Concrete method
    abstract void method2();     // Abstract method
}

// RegularClass obj = new RegularClass();  // Works!
// AbstractClass obj = new AbstractClass(); // Error!`
      },
      {
        heading: 'When to Use Abstraction',
        content: [
          'Use abstraction when:',
          '<ul><li>You have a common base that should not exist on its own</li><li>Different subclasses share a common interface but have different implementations</li><li>You want to enforce certain methods in all subclasses</li><li>You want to hide complex logic behind a simple interface</li></ul>'
        ],
        code: `abstract class DatabaseConnection {
    // Common method for all databases
    void log(String message) {
        System.out.println("[LOG] " + message);
    }

    // Abstract methods that each database must implement
    abstract void connect();
    abstract void disconnect();
    abstract void executeQuery(String query);
}

class MySQLConnection extends DatabaseConnection {
    @Override
    void connect() {
        System.out.println("Connecting to MySQL...");
    }

    @Override
    void disconnect() {
        System.out.println("Disconnecting from MySQL...");
    }

    @Override
    void executeQuery(String query) {
        System.out.println("Executing on MySQL: " + query);
    }
}

class PostgreSQLConnection extends DatabaseConnection {
    @Override
    void connect() {
        System.out.println("Connecting to PostgreSQL...");
    }

    @Override
    void disconnect() {
        System.out.println("Disconnecting from PostgreSQL...");
    }

    @Override
    void executeQuery(String query) {
        System.out.println("Executing on PostgreSQL: " + query);
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create an abstract <code>Appliance</code> class with:',
          '<ul><li>A concrete method <code>turnOn()</code> that prints "Appliance is on"</li><li>An abstract method <code>operate()</code></li></ul>',
          'Create <code>WashingMachine</code> and <code>Refrigerator</code> classes that extend <code>Appliance</code>.',
          'Implement <code>operate()</code> differently in each.',
          'Create objects and call both methods on each.'
        ],
        code: `abstract class Appliance {
    void turnOn() {
        System.out.println("Appliance is on");
    }

    abstract void operate();
}

class WashingMachine extends Appliance {
    @Override
    void operate() {
        System.out.println("Washing clothes...");
    }
}

class Refrigerator extends Appliance {
    @Override
    void operate() {
        System.out.println("Cooling food...");
    }
}

public class Main {
    public static void main(String[] args) {
        Appliance washer = new WashingMachine();
        Appliance fridge = new Refrigerator();

        washer.turnOn();
        washer.operate();

        fridge.turnOn();
        fridge.operate();
    }
}`
      }
    ]
  },
  'interfaces': {
    title: 'Interfaces',
    sections: [
      {
        heading: 'What is an Interface?',
        content: [
          'An <strong>interface</strong> is a contract that defines a set of methods a class must implement.',
          'Think of it like a job description — it lists the skills (methods) required, but does not provide them.',
          'Interfaces contain only <strong>method signatures</strong> (before Java 8) — no method bodies.',
          'A class <strong>implements</strong> an interface using the <code>implements</code> keyword.'
        ],
        code: `// Define an interface
interface Animal {
    void makeSound();    // Method signature only
    void eat();
}

// Implement the interface
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }

    @Override
    public void eat() {
        System.out.println("Dog is eating.");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }

    @Override
    public void eat() {
        System.out.println("Cat is eating.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        Animal cat = new Cat();

        dog.makeSound();  // Woof! Woof!
        dog.eat();        // Dog is eating.
        cat.makeSound();  // Meow!
    }
}`
      },
      {
        heading: 'Interface vs Abstract Class',
        content: [
          '<strong>Interface:</strong>',
          '<ul><li>All methods are abstract (before Java 8, except static/default methods)</li><li>A class can implement <strong>multiple</strong> interfaces</li><li>No instance fields (only constants)</li><li>Represents a "can-do" relationship</li></ul>',
          '<strong>Abstract Class:</strong>',
          '<ul><li>Can have both abstract and concrete methods</li><li>A class can extend only <strong>one</strong> abstract class</li><li>Can have instance fields</li><li>Represents an "is-a" relationship</li></ul>'
        ],
        code: `interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// A duck can both fly and swim!
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying!");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming!");
    }
}

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.fly();
        duck.swim();
    }
}`
      },
      {
        heading: 'Default and Static Methods (Java 8+)',
        content: [
          'Since Java 8, interfaces can have:',
          '<ul><li><strong>Default methods:</strong> Methods with a body, using the <code>default</code> keyword</li><li><strong>Static methods:</strong> Methods that belong to the interface itself</li></ul>',
          'Default methods let you add new methods to interfaces without breaking existing implementations.'
        ],
        code: `interface Vehicle {
    void start();   // Abstract method

    // Default method
    default void honk() {
        System.out.println("Beep! Beep!");
    }

    // Static method
    static void checkEngine() {
        System.out.println("Engine check complete.");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car is starting...");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();    // Implemented in Car
        car.honk();     // Inherited default method

        Vehicle.checkEngine();  // Static method
    }
}`
      },
      {
        heading: 'Real-World Analogy',
        content: [
          'Think of interfaces like USB ports:',
          '<ul><li>USB defines a standard (shape, pins, voltage)</li><li>Any device that implements USB can connect to any USB port</li><li>The port does not care what the device is — phone, mouse, keyboard — as long as it follows the USB standard</li></ul>',
          'Similarly, Java interfaces define a standard. Any class that implements the interface can be used wherever that interface is expected.'
        ],
        code: `interface USBDevice {
    void connect();
    void disconnect();
}

class Mouse implements USBDevice {
    @Override
    public void connect() {
        System.out.println("Mouse connected.");
    }

    @Override
    public void disconnect() {
        System.out.println("Mouse disconnected.");
    }
}

class Keyboard implements USBDevice {
    @Override
    public void connect() {
        System.out.println("Keyboard connected.");
    }

    @Override
    public void disconnect() {
        System.out.println("Keyboard disconnected.");
    }
}

// USB port — accepts any USBDevice
class USBPort {
    void plugIn(USBDevice device) {
        device.connect();
    }
}

public class Main {
    public static void main(String[] args) {
        USBPort port = new USBPort();
        port.plugIn(new Mouse());     // Mouse connected.
        port.plugIn(new Keyboard());  // Keyboard connected.
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>PaymentMethod</code> interface with:',
          '<ul><li><code>void processPayment(double amount)</code></li><li><code>void refund(double amount)</code></li></ul>',
          'Create <code>CreditCard</code>, <code>DebitCard</code>, and <code>UPI</code> classes that implement the interface.',
          'Each class should print different messages for both methods.',
          'Store all payment methods in an array and loop through them, calling both methods on each.'
        ],
        code: `interface PaymentMethod {
    void processPayment(double amount);
    void refund(double amount);
}

class CreditCard implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of " + amount);
    }

    @Override
    public void refund(double amount) {
        System.out.println("Refunding " + amount + " to credit card");
    }
}

class DebitCard implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing debit card payment of " + amount);
    }

    @Override
    public void refund(double amount) {
        System.out.println("Refunding " + amount + " to debit card");
    }
}

class UPI implements PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing UPI payment of " + amount);
    }

    @Override
    public void refund(double amount) {
        System.out.println("Refunding " + amount + " to UPI");
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentMethod[] methods = new PaymentMethod[3];
        methods[0] = new CreditCard();
        methods[1] = new DebitCard();
        methods[2] = new UPI();

        for (PaymentMethod m : methods) {
            m.processPayment(100.0);
            m.refund(50.0);
            System.out.println("---");
        }
    }
}`
      }
    ]
  }
};

const javaModule3Content = {
  'collections': {
    title: 'Java Collections Framework',
    sections: [
      {
        heading: 'What are Collections?',
        content: [
          'The Java Collections Framework is a set of classes and interfaces that help you store and manage groups of objects.',
          'Think of collections like different types of containers — some are like lists (ordered), some are like sets (no duplicates), and some are like maps (key-value pairs).',
          '<strong>Why use collections?</strong>',
          '<ul><li>They grow and shrink automatically</li><li>They provide ready-made methods for sorting, searching, and filtering</li><li>They are more flexible than regular arrays</li></ul>',
          '<strong>Main types:</strong>',
          '<ul><li><code>List</code> — ordered, allows duplicates</li><li><code>Set</code> — no duplicates, no guaranteed order</li><li><code>Map</code> — key-value pairs</li><li><code>Queue</code> — first-in, first-out (FIFO)</li></ul>'
        ]
      },
      {
        heading: 'ArrayList',
        content: [
          '<code>ArrayList</code> is the most commonly used List. It is like an array that can grow in size.',
          'You can add, remove, and access elements by index.',
          'Unlike arrays, you do not need to specify the size when you create it.'
        ],
        code: `import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println(fruits);           // [Apple, Banana, Cherry]
        System.out.println(fruits.get(0));    // Apple

        fruits.remove("Banana");
        System.out.println(fruits);           // [Apple, Cherry]
        System.out.println(fruits.size());    // 2
    }
}`
      },
      {
        heading: 'HashSet',
        content: [
          '<code>HashSet</code> stores unique elements only — no duplicates allowed.',
          'It does not keep elements in any specific order.',
          'Great for when you need to check if something exists quickly.'
        ],
        code: `import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(10);  // duplicate, ignored

        System.out.println(numbers);          // [20, 10] (order may vary)
        System.out.println(numbers.contains(20)); // true
        System.out.println(numbers.contains(30)); // false
    }
}`
      },
      {
        heading: 'HashMap',
        content: [
          '<code>HashMap</code> stores data as key-value pairs.',
          'Each key is unique. You use the key to look up the value.',
          'It is like a dictionary or a phone book.'
        ],
        code: `import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> ages = new HashMap<>();

        ages.put("Alice", 25);
        ages.put("Bob", 30);
        ages.put("Charlie", 22);

        System.out.println(ages.get("Bob"));      // 30
        System.out.println(ages.containsKey("Alice")); // true

        // Loop through all entries
        for (String name : ages.keySet()) {
            System.out.println(name + " is " + ages.get(name) + " years old");
        }
    }
}`
      },
      {
        heading: 'Iterating Over Collections',
        content: [
          'You can loop through collections using a for-each loop.',
          'This works for all Collection types: List, Set, Queue, and Map keys/values.'
        ],
        code: `import java.util.ArrayList;
import java.util.HashMap;

public class IterateExample {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<>();
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        // Loop through a List
        for (String color : colors) {
            System.out.println(color);
        }

        // Loop through a Map
        HashMap<String, String> capitals = new HashMap<>();
        capitals.put("India", "New Delhi");
        capitals.put("USA", "Washington D.C.");

        for (String country : capitals.keySet()) {
            System.out.println(country + ": " + capitals.get(country));
        }
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create an <code>ArrayList</code> of your favorite movies.',
          'Add 3 movies, print the list, then remove one and print again.',
          'Create a <code>HashMap</code> with student names as keys and scores as values. Print each student and their score.'
        ],
        code: `import java.util.ArrayList;
import java.util.HashMap;

public class TryCollections {
    public static void main(String[] args) {
        ArrayList<String> movies = new ArrayList<>();
        movies.add("Inception");
        movies.add("The Matrix");
        movies.add("Interstellar");
        System.out.println(movies);
        movies.remove(1);
        System.out.println(movies);

        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 85);
        scores.put("Bob", 92);
        for (String name : scores.keySet()) {
            System.out.println(name + ": " + scores.get(name));
        }
    }
}`
      }
    ]
  },
  'exception-handling': {
    title: 'Exception Handling',
    sections: [
      {
        heading: 'What is an Exception?',
        content: [
          'An exception is an event that disrupts the normal flow of a program.',
          'It happens when something goes wrong — like dividing by zero, accessing an invalid array index, or trying to open a file that does not exist.',
          'Without handling, exceptions crash your program.',
          '<strong>Common exceptions:</strong>',
          '<ul><li><code>ArithmeticException</code> — math errors like divide by zero</li><li><code>NullPointerException</code> — using a null object</li><li><code>ArrayIndexOutOfBoundsException</code> — invalid index</li><li><code>NumberFormatException</code> — converting bad strings to numbers</li></ul>'
        ]
      },
      {
        heading: 'try and catch',
        content: [
          'Wrap risky code inside a <code>try</code> block.',
          'If an exception occurs, Java jumps to the <code>catch</code> block.',
          'The program keeps running instead of crashing.'
        ],
        code: `public class TryCatchExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        }

        System.out.println("Program continues...");
    }
}`
      },
      {
        heading: 'Multiple catch Blocks',
        content: [
          'You can catch different types of exceptions separately.',
          'This lets you handle each problem in the right way.'
        ],
        code: `public class MultipleCatchExample {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob"};

        try {
            System.out.println(names[5]);  // out of bounds
            int num = Integer.parseInt("abc");  // bad number
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index is out of range!");
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format!");
        }
    }
}`
      },
      {
        heading: 'finally Block',
        content: [
          'The <code>finally</code> block always runs — whether an exception happened or not.',
          'It is useful for cleanup: closing files, releasing resources, etc.'
        ],
        code: `public class FinallyExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[1]);  // works fine
        } catch (Exception e) {
            System.out.println("An error occurred.");
        } finally {
            System.out.println("This always prints.");
        }
    }
}`
      },
      {
        heading: 'throw and throws',
        content: [
          '<code>throw</code> lets you create your own exception manually.',
          '<code>throws</code> in a method signature warns that this method might throw an exception.',
          'This is useful when you want the caller to handle the problem.'
        ],
        code: `public class ThrowExample {
    static void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older");
        }
        System.out.println("Access granted.");
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a program that divides two numbers. Use try-catch to handle divide-by-zero.',
          'Create a method that throws an exception if a password is shorter than 6 characters.'
        ],
        code: `public class TryExceptionHandling {
    static void checkPassword(String password) {
        if (password.length() < 6) {
            throw new IllegalArgumentException("Password too short!");
        }
        System.out.println("Password accepted.");
    }

    public static void main(String[] args) {
        int x = 20;
        int y = 0;

        try {
            System.out.println(x / y);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        }

        try {
            checkPassword("hi");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
      }
    ]
  },
  'file-io': {
    title: 'File Input and Output',
    sections: [
      {
        heading: 'What is File I/O?',
        content: [
          'File I/O (Input/Output) means reading from and writing to files on your computer.',
          'Java provides classes in the <code>java.io</code> and <code>java.nio</code> packages for this.',
          '<strong>Common use cases:</strong>',
          '<ul><li>Saving user data</li><li>Reading configuration files</li><li>Writing logs</li><li>Processing CSV or text files</li></ul>'
        ]
      },
      {
        heading: 'Writing to a File',
        content: [
          'Use <code>FileWriter</code> to write text to a file.',
          'Wrap it in a <code>BufferedWriter</code> for better performance.',
          'Always close the file when done (or use try-with-resources).'
        ],
        code: `import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

public class WriteFileExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("hello.txt"))) {
            writer.write("Hello, World!");
            writer.newLine();
            writer.write("Java file writing is easy.");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }
}`
      },
      {
        heading: 'Reading from a File',
        content: [
          'Use <code>FileReader</code> and <code>BufferedReader</code> to read text line by line.',
          'The <code>readLine()</code> method returns null when the end of the file is reached.'
        ],
        code: `import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("hello.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}`
      },
      {
        heading: 'File and Directory Info',
        content: [
          'The <code>File</code> class helps you check if a file exists, get its size, or list directory contents.',
          'It does not read or write data — it only works with file paths and metadata.'
        ],
        code: `import java.io.File;

public class FileInfoExample {
    public static void main(String[] args) {
        File file = new File("hello.txt");

        System.out.println("Exists: " + file.exists());
        System.out.println("Size: " + file.length() + " bytes");
        System.out.println("Is file: " + file.isFile());
        System.out.println("Is directory: " + file.isDirectory());

        File folder = new File(".");
        String[] files = folder.list();
        System.out.println("Files in current folder:");
        for (String f : files) {
            System.out.println("  " + f);
        }
    }
}`
      },
      {
        heading: 'Try-with-Resources',
        content: [
          'Try-with-resources automatically closes files when the block ends.',
          'You declare the resource inside the try parentheses.',
          'This is the cleanest and safest way to handle files.'
        ],
        code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResources {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("hello.txt"))) {
            System.out.println(br.readLine());
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        // br is automatically closed here
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a program that creates a file named "notes.txt" and writes 3 lines to it.',
          'Then read the file back and print each line with line numbers.'
        ],
        code: `import java.io.*;

public class TryFileIO {
    public static void main(String[] args) {
        // Write
        try (BufferedWriter w = new BufferedWriter(new FileWriter("notes.txt"))) {
            w.write("First note");
            w.newLine();
            w.write("Second note");
            w.newLine();
            w.write("Third note");
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
        }

        // Read with line numbers
        try (BufferedReader r = new BufferedReader(new FileReader("notes.txt"))) {
            String line;
            int num = 1;
            while ((line = r.readLine()) != null) {
                System.out.println(num + ": " + line);
                num++;
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }
    }
}`
      }
    ]
  },
  'generics': {
    title: 'Java Generics',
    sections: [
      {
        heading: 'What are Generics?',
        content: [
          'Generics let you create classes, interfaces, and methods that work with any data type.',
          'Instead of writing separate code for Strings, Integers, etc., you write it once with a type placeholder.',
          'Think of it like a template — you define the shape, and Java fills in the actual type later.',
          '<strong>Benefits:</strong>',
          '<ul><li>Type safety — catch errors at compile time</li><li>No casting needed — get the right type automatically</li><li>Reusable code — one class works with many types</li></ul>'
        ]
      },
      {
        heading: 'Generic Classes',
        content: [
          'A generic class uses a type parameter inside angle brackets <code>&lt;T&gt;</code>.',
          'T is a placeholder — it can stand for any reference type (String, Integer, etc.).'
        ],
        code: `class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

public class GenericClassExample {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello");
        System.out.println(stringBox.get());  // Hello

        Box<Integer> intBox = new Box<>();
        intBox.set(42);
        System.out.println(intBox.get());     // 42
    }
}`
      },
      {
        heading: 'Generic Methods',
        content: [
          'Methods can also be generic. The type parameter goes before the return type.',
          'This is useful when you want a method to accept any type of parameter.'
        ],
        code: `public class GenericMethodExample {
    static <T> void printArray(T[] array) {
        for (T item : array) {
            System.out.println(item);
        }
    }

    public static void main(String[] args) {
        String[] words = {"Apple", "Banana", "Cherry"};
        Integer[] numbers = {1, 2, 3, 4};

        printArray(words);   // works with Strings
        printArray(numbers); // works with Integers
    }
}`
      },
      {
        heading: 'Bounded Type Parameters',
        content: [
          'Sometimes you want to restrict the types that can be used.',
          '<code>&lt;T extends Number&gt;</code> means T must be a Number or its subclass (Integer, Double, etc.).',
          'This lets you safely call Number methods on T.'
        ],
        code: `class NumberBox<T extends Number> {
    private T value;

    public NumberBox(T value) {
        this.value = value;
    }

    public double getDoubleValue() {
        return value.doubleValue();
    }
}

public class BoundedExample {
    public static void main(String[] args) {
        NumberBox<Integer> intBox = new NumberBox<>(10);
        System.out.println(intBox.getDoubleValue());  // 10.0

        NumberBox<Double> doubleBox = new NumberBox<>(3.14);
        System.out.println(doubleBox.getDoubleValue()); // 3.14
    }
}`
      },
      {
        heading: 'Generics with Collections',
        content: [
          'You already use generics when you create an ArrayList, HashMap, or HashSet.',
          'The angle brackets tell Java what type of objects the collection will hold.',
          'This prevents you from adding the wrong type by mistake.'
        ],
        code: `import java.util.ArrayList;

public class GenericsCollectionExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        // names.add(123);  // Error! Cannot add int to a String list

        String first = names.get(0);  // No casting needed
        System.out.println(first);    // Alice

        for (String name : names) {
            System.out.println(name);
        }
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a generic <code>Pair&lt;K, V&gt;</code> class with two fields: key and value.',
          'Create instances with different types and print them.'
        ],
        code: `class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
}

public class TryGenerics {
    public static void main(String[] args) {
        Pair<String, Integer> personAge = new Pair<>("Alice", 25);
        System.out.println(personAge.getKey() + " is " + personAge.getValue());

        Pair<Integer, String> idName = new Pair<>(101, "Bob");
        System.out.println("ID " + idName.getKey() + " belongs to " + idName.getValue());
    }
}`
      }
    ]
  },
  'lambda-expressions': {
    title: 'Lambda Expressions',
    sections: [
      {
        heading: 'What are Lambda Expressions?',
        content: [
          'Lambda expressions are a short way to write anonymous methods (methods without a name).',
          'They were introduced in Java 8 to make code more compact and readable.',
          'Think of them like quick, throw-away functions you can pass around.',
          '<strong>Syntax:</strong>',
          '<code>(parameters) -&gt; { body }</code>',
          '<ul><li><code>(a, b) -&gt; a + b</code> — adds two numbers</li><li><code>x -&gt; x * x</code> — squares a number</li><li><code>() -&gt; System.out.println("Hi")</code> — no parameters</li></ul>'
        ]
      },
      {
        heading: 'Using Lambdas with Collections',
        content: [
          'Lambdas work great with collections. You can sort, filter, and process lists with less code.',
          'The <code>forEach</code> method lets you run code for every item in a list.'
        ],
        code: `import java.util.ArrayList;

public class LambdaCollectionExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        // Using lambda with forEach
        names.forEach(name -> System.out.println(name));

        // Sorting with lambda (by length)
        names.sort((a, b) -> a.length() - b.length());
        System.out.println(names);  // [Bob, Alice, Charlie]
    }
}`
      },
      {
        heading: 'Functional Interfaces',
        content: [
          'A functional interface has exactly one abstract method.',
          'Lambda expressions can only be assigned to functional interfaces.',
          '<strong>Common ones:</strong>',
          '<ul><li><code>Runnable</code> — run() with no args, no return</li><li><code>Comparator&lt;T&gt;</code> — compare(T, T) returns int</li><li><code>Predicate&lt;T&gt;</code> — test(T) returns boolean</li><li><code>Function&lt;T, R&gt;</code> — apply(T) returns R</li><li><code>Consumer&lt;T&gt;</code> — accept(T) returns void</li></ul>'
        ],
        code: `import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;

        System.out.println(isEven.test(4));  // true
        System.out.println(isEven.test(7));  // false
    }
}`
      },
      {
        heading: 'Method References',
        content: [
          'When a lambda only calls an existing method, you can use a method reference instead.',
          'It is even shorter and often cleaner.',
          '<strong>Types:</strong>',
          '<ul><li><code>ClassName::staticMethod</code></li><li><code>objectName::instanceMethod</code></li><li><code>ClassName::instanceMethod</code></li></ul>'
        ],
        code: `import java.util.ArrayList;

public class MethodReferenceExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        // Lambda version
        names.forEach(name -> System.out.println(name));

        // Method reference version
        names.forEach(System.out::println);
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create an ArrayList of integers. Use a lambda to print only even numbers.',
          'Write a lambda that takes a string and returns its uppercase version.'
        ],
        code: `import java.util.ArrayList;
import java.util.function.Function;

public class TryLambdas {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(4);
        numbers.add(7);
        numbers.add(10);

        // Print even numbers
        numbers.forEach(n -> {
            if (n % 2 == 0) System.out.println(n);
        });

        // Uppercase lambda
        Function<String, String> toUpper = s -> s.toUpperCase();
        System.out.println(toUpper.apply("hello"));  // HELLO
    }
}`
      }
    ]
  },
  'streams': {
    title: 'Java Streams API',
    sections: [
      {
        heading: 'What are Streams?',
        content: [
          'Streams are a way to process sequences of elements in a functional style.',
          'They were added in Java 8 and work great with collections.',
          'Think of a stream like a pipeline: data flows in, gets transformed, and results come out.',
          '<strong>Key features:</strong>',
          '<ul><li>Declarative — say <em>what</em> you want, not <em>how</em></li><li>Chain operations — filter, map, sort, collect</li><li>Lazy — only compute when needed</li><li>Can be parallel for better performance</li></ul>'
        ]
      },
      {
        heading: 'Creating Streams',
        content: [
          'You can create a stream from a collection, an array, or generate values on the fly.',
          'Most often, you will call <code>.stream()</code> on a List or Set.'
        ],
        code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

public class CreateStreamExample {
    public static void main(String[] args) {
        // From a collection
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.stream().forEach(System.out::println);

        // From an array
        int[] numbers = {1, 2, 3, 4, 5};
        Arrays.stream(numbers).forEach(n -> System.out.print(n + " "));

        // From values
        Stream.of("One", "Two", "Three").forEach(System.out::println);
    }
}`
      },
      {
        heading: 'Common Stream Operations',
        content: [
          'Streams provide many built-in operations. Here are the most common ones:',
          '<ul><li><code>filter</code> — keep only elements that match a condition</li><li><code>map</code> — transform each element</li><li><code>sorted</code> — sort the elements</li><li><code>collect</code> — turn the stream back into a list or other collection</li><li><code>count</code> — count the elements</li><li><code>reduce</code> — combine all elements into one value</li></ul>'
        ],
        code: `import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StreamOperationsExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(4);
        numbers.add(6);
        numbers.add(3);
        numbers.add(8);

        // Filter: get only even numbers
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        System.out.println(evens);  // [4, 6, 8]

        // Map: square every number
        List<Integer> squares = numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println(squares);  // [1, 16, 36, 9, 64]

        // Sorted: sort numbers
        List<Integer> sorted = numbers.stream()
            .sorted()
            .collect(Collectors.toList());
        System.out.println(sorted);  // [1, 3, 4, 6, 8]

        // Count: how many numbers > 3?
        long count = numbers.stream()
            .filter(n -> n > 3)
            .count();
        System.out.println(count);  // 3
    }
}`
      },
      {
        heading: 'map and filter Together',
        content: [
          'You can chain multiple operations to build powerful pipelines.',
          'Each operation returns a new stream, so you can keep adding steps.'
        ],
        code: `import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StreamChainExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Anna");
        names.add("Charlie");
        names.add("Alex");

        // Find names starting with "A", convert to uppercase, sort
        List<String> result = names.stream()
            .filter(name -> name.startsWith("A"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println(result);  // [ALEX, ALICE, ANNA]
    }
}`
      },
      {
        heading: 'reduce — Combining Values',
        content: [
          '<code>reduce</code> takes all elements and combines them into a single result.',
          'You provide a starting value and a function that merges two values.',
          'It is great for sums, products, or building strings.'
        ],
        code: `import java.util.ArrayList;

public class ReduceExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);

        // Sum all numbers
        int sum = numbers.stream()
            .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);  // 10

        // Product of all numbers
        int product = numbers.stream()
            .reduce(1, (a, b) -> a * b);
        System.out.println("Product: " + product);  // 24
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a list of integers from 1 to 10.',
          'Use streams to: find all numbers greater than 5, square them, and collect into a new list.',
          'Calculate the sum of all even numbers in the list using a stream.'
        ],
        code: `import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class TryStreams {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        // Greater than 5, squared
        List<Integer> result = numbers.stream()
            .filter(n -> n > 5)
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println(result);  // [36, 49, 64, 81, 100]

        // Sum of even numbers
        int evenSum = numbers.stream()
            .filter(n -> n % 2 == 0)
            .reduce(0, Integer::sum);
        System.out.println("Sum of evens: " + evenSum);  // 30
    }
}`
      }
    ]
  }
};

const javaModule4Content = {
  'jvm-basics': {
    title: 'JVM Basics',
    sections: [
      {
        heading: 'What is the JVM?',
        content: [
          'The <strong>JVM (Java Virtual Machine)</strong> is the engine that runs Java programs.',
          'When you write Java code, it is compiled into <strong>bytecode</strong> — a special format that the JVM understands.',
          'The JVM then reads this bytecode and translates it into machine code that your computer can execute.',
          'Think of the JVM like a universal translator: you write Java once, and the JVM runs it on any operating system — Windows, Mac, or Linux.',
          '<strong>Key features:</strong>',
          '<ul><li><strong>Write Once, Run Anywhere</strong> — bytecode runs on any platform with a JVM</li><li><strong>Automatic Memory Management</strong> — the JVM handles memory allocation and cleanup</li><li><strong>Security</strong> — bytecode runs in a controlled environment</li><li><strong>Performance</strong> — the JIT compiler optimizes code at runtime</li></ul>'
        ]
      },
      {
        heading: 'The Java Execution Process',
        content: [
          'Java code goes through three main stages before it runs:',
          '<ol><li><strong>Write</strong> — you write <code>.java</code> source files</li><li><strong>Compile</strong> — the <code>javac</code> compiler turns <code>.java</code> into <code>.class</code> bytecode files</li><li><strong>Run</strong> — the <code>java</code> command launches the JVM to execute the bytecode</li></ol>',
          'This process separates Java from languages like C or C++, which compile directly to machine code for a specific system.'
        ],
        code: `// Hello.java — source file
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, JVM!");
    }
}

// Compile: javac Hello.java
// This creates Hello.class (bytecode)

// Run: java Hello
// The JVM reads Hello.class and executes it`
      },
      {
        heading: 'JVM Architecture Overview',
        content: [
          'The JVM is made up of several key components:',
          '<ul><li><strong>Class Loader</strong> — loads <code>.class</code> files into memory when needed</li><li><strong>Bytecode Verifier</strong> — checks that the bytecode is safe and valid before execution</li><li><strong>Execution Engine</strong> — runs the bytecode, using either an interpreter or a JIT compiler</li><li><strong>Garbage Collector</strong> — automatically frees memory that is no longer in use</li><li><strong>Runtime Data Areas</strong> — memory regions like the heap (objects), stack (method calls), and method area (class info)</li></ul>',
          'You do not need to manage memory manually in Java — the Garbage Collector does it for you.'
        ],
        code: `public class JVMExample {
    public static void main(String[] args) {
        // Objects are created on the heap
        String greeting = new String("Hello, Heap!");
        
        // Local variables live on the stack
        int number = 42;
        
        System.out.println(greeting);
        System.out.println("Number on stack: " + number);
        
        // When 'greeting' is no longer used, the Garbage Collector
        // will eventually clean up the String object automatically
    }
}`
      },
      {
        heading: 'Memory Areas in the JVM',
        content: [
          'The JVM divides memory into different regions:',
          '<table border="1"><tr><th>Area</th><th>Purpose</th></tr><tr><td><strong>Heap</strong></td><td>Stores all objects and arrays. Shared by all threads.</td></tr><tr><td><strong>Stack</strong></td><td>Stores local variables and method call frames. Each thread has its own stack.</td></tr><tr><td><strong>Method Area</strong></td><td>Stores class definitions, static variables, and method code.</td></tr><tr><td><strong>PC Register</strong></td><td>Tracks the current instruction for each thread.</td></tr></table>',
          'Understanding these areas helps you write more efficient Java code and diagnose memory issues.'
        ],
        code: `public class MemoryDemo {
    // Static variable — stored in Method Area
    static int classCounter = 0;
    
    // Instance variable — stored in Heap (when object is created)
    int instanceId;
    
    public MemoryDemo(int id) {
        this.instanceId = id;  // 'id' is on the stack
        classCounter++;
    }
    
    public static void main(String[] args) {
        // 'obj' reference is on the stack
        // The actual MemoryDemo object is on the heap
        MemoryDemo obj = new MemoryDemo(1);
        
        System.out.println("Instance ID: " + obj.instanceId);
        System.out.println("Class counter: " + classCounter);
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a Java file, compile it, and run it.',
          'Experiment: add more variables and see how the program behaves.'
        ],
        code: `public class MyFirstJVMProgram {
    public static void main(String[] args) {
        System.out.println("Running inside the JVM!");
        
        int a = 10;
        int b = 20;
        int sum = a + b;
        
        System.out.println("Sum: " + sum);
    }
}

// Compile: javac MyFirstJVMProgram.java
// Run: java MyFirstJVMProgram`
      }
    ]
  },

  'packages': {
    title: 'Packages',
    sections: [
      {
        heading: 'What is a Package?',
        content: [
          'A <strong>package</strong> in Java is a way to group related classes and interfaces together.',
          'Think of a package like a folder on your computer — it helps you organize files so they are easier to find and manage.',
          'Packages also prevent naming conflicts. Two classes can have the same name if they are in different packages.',
          '<strong>Benefits of packages:</strong>',
          '<ul><li><strong>Organization</strong> — group related classes logically</li><li><strong>Avoid Conflicts</strong> — same class name can exist in different packages</li><li><strong>Access Control</strong> — default access means package-private visibility</li><li><strong>Reusability</strong> — packages can be imported and reused across projects</li></ul>'
        ]
      },
      {
        heading: 'Declaring a Package',
        content: [
          'The <code>package</code> keyword is used at the very top of a Java file to declare which package the class belongs to.',
          'Package names are usually written in lowercase and follow a reverse domain name convention.',
          'For example, if your website is <code>example.com</code>, your package might be <code>com.example.myapp</code>.'
        ],
        code: `// File: com/example/myapp/Utils.java
package com.example.myapp;

public class Utils {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`
      },
      {
        heading: 'Importing Packages',
        content: [
          'To use a class from another package, you need to <strong>import</strong> it.',
          'The <code>import</code> statement comes after the <code>package</code> declaration and before the class definition.',
          'You can import a single class or use a wildcard <code>*</code> to import all classes from a package.'
        ],
        code: `// Import a single class
import java.util.Scanner;

// Import all classes from a package
import java.util.*;

public class ImportDemo {
    public static void main(String[] args) {
        // Using Scanner from java.util package
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.println("Welcome, " + name + "!");
        scanner.close();
    }
}`
      },
      {
        heading: 'The java.lang Package',
        content: [
          'The <code>java.lang</code> package is special — it is <strong>automatically imported</strong> in every Java program.',
          'It contains fundamental classes that Java programs use all the time:',
          '<ul><li><code>String</code> — for text</li><li><code>System</code> — for input/output (e.g., <code>System.out.println</code>)</li><li><code>Math</code> — for mathematical operations</li><li><code>Object</code> — the root class of all Java classes</li><li><code>Integer</code>, <code>Double</code>, <code>Boolean</code> — wrapper classes</li></ul>',
          'You never need to write <code>import java.lang.*;</code> — Java does it for you.'
        ],
        code: `public class LangPackageDemo {
    public static void main(String[] args) {
        // String is from java.lang — no import needed
        String message = "Hello from java.lang!";
        
        // Math is from java.lang
        double result = Math.sqrt(25);
        
        // System is from java.lang
        System.out.println(message);
        System.out.println("Square root of 25: " + result);
        
        // Integer wrapper class is from java.lang
        Integer num = 100;
        System.out.println("Integer value: " + num);
    }
}`
      },
      {
        heading: 'Creating Your Own Package',
        content: [
          'Let us create a simple package with two classes and use them in another program.',
          'The directory structure must match the package name. For package <code>com.myapp.tools</code>, the path should be <code>com/myapp/tools/</code>.'
        ],
        code: `// File: com/myapp/tools/Calculator.java
package com.myapp.tools;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int multiply(int a, int b) {
        return a * b;
    }
}

// File: com/myapp/tools/Printer.java
package com.myapp.tools;

public class Printer {
    public static void printLine(String text) {
        System.out.println("==> " + text);
    }
}

// File: MainApp.java (in the root directory)
import com.myapp.tools.Calculator;
import com.myapp.tools.Printer;

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 3);
        int product = calc.multiply(4, 7);
        
        Printer.printLine("Sum: " + sum);
        Printer.printLine("Product: " + product);
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a package called <code>myPackage</code> with a class named <code>Greeter</code> that has a method <code>sayHello()</code>.',
          'Then create a main class outside the package that imports and uses it.'
        ],
        code: `// myPackage/Greeter.java
package myPackage;

public class Greeter {
    public void sayHello(String name) {
        System.out.println("Hello, " + name + "!");
    }
}

// Main.java (outside the package)
import myPackage.Greeter;

public class Main {
    public static void main(String[] args) {
        Greeter g = new Greeter();
        g.sayHello("Student");
    }
}

// Compile: javac myPackage/Greeter.java Main.java
// Run: java Main`
      }
    ]
  },

  'build-tools': {
    title: 'Build Tools',
    sections: [
      {
        heading: 'What are Build Tools?',
        content: [
          'A <strong>build tool</strong> automates the process of compiling, testing, and packaging your Java code.',
          'As your project grows, manually compiling files with <code>javac</code> becomes impractical.',
          'Build tools handle dependencies (external libraries), run tests, and create deployable files like <code>.jar</code> or <code>.war</code>.',
          '<strong>Popular Java build tools:</strong>',
          '<ul><li><strong>Maven</strong> — uses XML configuration (<code>pom.xml</code>), convention over configuration</li><li><strong>Gradle</strong> — uses Groovy or Kotlin DSL scripts, very flexible and fast</li></ul>'
        ]
      },
      {
        heading: 'Introduction to Maven',
        content: [
          '<strong>Maven</strong> is a widely-used build tool that simplifies Java project management.',
          'Maven uses a <code>pom.xml</code> file (Project Object Model) to define your project structure, dependencies, and build steps.',
          'It follows the principle of <strong>convention over configuration</strong> — it assumes standard folder layouts so you do not have to specify everything manually.',
          '<strong>Standard Maven directory structure:</strong>',
          '<ul><li><code>src/main/java</code> — Java source code</li><li><code>src/main/resources</code> — configuration files</li><li><code>src/test/java</code> — test code</li><li><code>target/</code> — compiled output and packaged files</li></ul>'
        ],
        code: `<!-- pom.xml — Maven project configuration -->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>my-first-app</artifactId>
    <version>1.0.0</version>
    
    <dependencies>
        <!-- Adding an external library -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.12.0</version>
        </dependency>
    </dependencies>
</project>`
      },
      {
        heading: 'Common Maven Commands',
        content: [
          'Maven provides simple commands to perform common tasks:',
          '<table border="1"><tr><th>Command</th><th>What it does</th></tr><tr><td><code>mvn compile</code></td><td>Compiles the source code</td></tr><tr><td><code>mvn test</code></td><td>Runs all tests in the project</td></tr><tr><td><code>mvn package</code></td><td>Compiles and packages into a JAR/WAR file</td></tr><tr><td><code>mvn clean</code></td><td>Deletes the <code>target/</code> directory</td></tr><tr><td><code>mvn install</code></td><td>Packages and installs the JAR to local repository</td></tr></table>',
          'You can chain commands: <code>mvn clean package</code> cleans and then rebuilds everything.'
        ],
        code: `// Example Java class at src/main/java/com/example/App.java
package com.example;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello from Maven!");
        
        // Using Apache Commons Lang (if added as dependency)
        // StringUtils is from the external library
        // String reversed = StringUtils.reverse("Maven");
        // System.out.println(reversed);
    }
}

// Commands to run in terminal:
// mvn compile   → compiles the code
// mvn package   → creates my-first-app-1.0.0.jar in target/
// java -jar target/my-first-app-1.0.0.jar`
      },
      {
        heading: 'Introduction to Gradle',
        content: [
          '<strong>Gradle</strong> is another powerful build tool that uses a script-based approach instead of XML.',
          'Gradle scripts are written in <strong>Groovy</strong> or <strong>Kotlin</strong> and are more concise than Maven XML.',
          'Gradle is known for being fast thanks to <strong>incremental builds</strong> — it only recompiles what changed.',
          'Gradle also uses a standard directory layout similar to Maven.'
        ],
        code: `// build.gradle — Gradle project configuration
plugins {
    id 'java'
    id 'application'
}

// Project information
group = 'com.example'
version = '1.0.0'

// Java version
java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

// Dependencies
repositories {
    mavenCentral()  // where to download libraries from
}

dependencies {
    implementation 'org.apache.commons:commons-lang3:3.12.0'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.9.0'
}

// Main class for running
application {
    mainClass = 'com.example.App'
}

// Enable JUnit Platform for tests
test {
    useJUnitPlatform()
}`
      },
      {
        heading: 'Common Gradle Commands',
        content: [
          'Gradle commands are similar to Maven but use the <code>gradle</code> or <code>./gradlew</code> command:',
          '<table border="1"><tr><th>Command</th><th>What it does</th></tr><tr><td><code>gradle compileJava</code></td><td>Compiles the source code</td></tr><tr><td><code>gradle test</code></td><td>Runs all tests</td></tr><tr><td><code>gradle build</code></td><td>Compiles, tests, and packages the project</td></tr><tr><td><code>gradle clean</code></td><td>Deletes the <code>build/</code> directory</td></tr><tr><td><code>gradle run</code></td><td>Compiles and runs the main application</td></tr></table>',
          'Gradle wrapper (<code>gradlew</code>) lets you run Gradle without installing it globally.'
        ],
        code: `// Example Java class at src/main/java/com/example/App.java
package com.example;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello from Gradle!");
    }
}

// Terminal commands:
// ./gradlew build    → full build
// ./gradlew run      → compile and run the app
// ./gradlew clean    → remove build directory`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a simple Maven or Gradle project with one dependency.',
          'Write a small program that uses the dependency, then compile and run it.'
        ],
        code: `// Create a Maven project with this pom.xml:
// Add JUnit dependency for testing

/*
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.9.0</version>
    <scope>test</scope>
</dependency>
*/

// src/main/java/com/example/Calculator.java
package com.example;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

// src/test/java/com/example/CalculatorTest.java
package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}

// Run: mvn test`
      }
    ]
  },

  'unit-testing-junit': {
    title: 'Unit Testing with JUnit',
    sections: [
      {
        heading: 'What is Unit Testing?',
        content: [
          '<strong>Unit testing</strong> is the practice of testing small, individual parts (units) of your code in isolation.',
          'A unit is typically a single method or function. The goal is to verify that each unit behaves correctly.',
          '<strong>Why unit testing matters:</strong>',
          '<ul><li>Catches bugs early — before they reach production</li><li>Makes code easier to refactor — tests verify nothing broke</li><li>Acts as documentation — tests show how code is meant to work</li><li>Encourages better design — testable code is usually cleaner code</li></ul>',
          '<strong>JUnit</strong> is the most popular testing framework for Java. JUnit 5 is the current version.'
        ]
      },
      {
        heading: 'JUnit 5 Basics',
        content: [
          'JUnit 5 (also called JUnit Jupiter) uses <strong>annotations</strong> to mark test methods and configure behavior.',
          '<strong>Common annotations:</strong>',
          '<ul><li><code>@Test</code> — marks a method as a test case</li><li><code>@BeforeEach</code> — runs before every test method</li><li><code>@AfterEach</code> — runs after every test method</li><li><code>@BeforeAll</code> — runs once before all tests (must be static)</li><li><code>@AfterAll</code> — runs once after all tests (must be static)</li><li><code>@DisplayName</code> — gives a human-readable name to the test</li></ul>'
        ],
        code: `import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class SimpleTest {
    
    private Calculator calc;
    
    @BeforeEach
    public void setUp() {
        // Runs before each test
        calc = new Calculator();
        System.out.println("Setting up...");
    }
    
    @AfterEach
    public void tearDown() {
        // Runs after each test
        System.out.println("Cleaning up...");
    }
    
    @Test
    @DisplayName("Adding two positive numbers")
    public void testAddPositiveNumbers() {
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }
    
    @Test
    public void testAddNegativeNumbers() {
        int result = calc.add(-2, -3);
        assertEquals(-5, result);
    }
}`
      },
      {
        heading: 'Assertions in JUnit',
        content: [
          '<strong>Assertions</strong> check that your code produces the expected result.',
          'If an assertion fails, the test fails and JUnit reports the mismatch.',
          '<strong>Common assertion methods:</strong>',
          '<ul><li><code>assertEquals(expected, actual)</code> — checks two values are equal</li><li><code>assertTrue(condition)</code> — checks condition is true</li><li><code>assertFalse(condition)</code> — checks condition is false</li><li><code>assertNull(object)</code> — checks object is null</li><li><code>assertNotNull(object)</code> — checks object is not null</li><li><code>assertThrows(Exception.class, () -> code)</code> — checks code throws expected exception</li></ul>'
        ],
        code: `import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionDemo {
    
    @Test
    public void testAssertions() {
        // assertEquals
        assertEquals(10, 5 + 5);
        
        // assertTrue / assertFalse
        assertTrue(10 > 5);
        assertFalse(3 > 10);
        
        // assertNull / assertNotNull
        String empty = null;
        String greeting = "Hello";
        assertNull(empty);
        assertNotNull(greeting);
        
        // assertThrows — checks that an exception is thrown
        Exception exception = assertThrows(
            ArithmeticException.class,
            () -> {
                int result = 10 / 0;
            }
        );
        assertEquals("/ by zero", exception.getMessage());
    }
}`
      },
      {
        heading: 'Writing a Testable Class',
        content: [
          'Good tests start with code that is easy to test.',
          'Let us create a simple <code>BankAccount</code> class and write tests for it.',
          'We will test deposit, withdrawal, and balance checking.'
        ],
        code: `// The class we want to test
public class BankAccount {
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

// The test class
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

public class BankAccountTest {
    private BankAccount account;
    
    @BeforeEach
    public void setUp() {
        account = new BankAccount(100.0);
    }
    
    @Test
    public void testDeposit() {
        account.deposit(50.0);
        assertEquals(150.0, account.getBalance(), 0.001);
    }
    
    @Test
    public void testWithdraw() {
        account.withdraw(30.0);
        assertEquals(70.0, account.getBalance(), 0.001);
    }
    
    @Test
    public void testWithdrawTooMuch() {
        account.withdraw(200.0);  // should not be allowed
        assertEquals(100.0, account.getBalance(), 0.001);
    }
}`
      },
      {
        heading: 'Running Tests',
        content: [
          'There are several ways to run JUnit tests:',
          '<ul><li><strong>IDE (IntelliJ, Eclipse, VS Code)</strong> — right-click the test file and select "Run Tests"</li><li><strong>Maven</strong> — run <code>mvn test</code> from the terminal</li><li><strong>Gradle</strong> — run <code>gradle test</code> from the terminal</li></ul>',
          'Test results show green for passed tests and red for failures.',
          'IDEs also display a tree view of all tests with their pass/fail status.'
        ],
        code: `// Running from terminal with Maven:
// $ mvn test
//
// Output:
// [INFO] -------------------------------------------------------
// [INFO]  T E S T S
// [INFO] -------------------------------------------------------
// [INFO] Running BankAccountTest
// [INFO] Tests run: 3, Failures: 0, Errors: 0, Skipped: 0
// [INFO] BUILD SUCCESS

// Running from terminal with Gradle:
// $ ./gradlew test
//
// Output shows test results in build/reports/tests/test/index.html`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a <code>Rectangle</code> class with <code>width</code>, <code>height</code>, and methods for <code>getArea()</code> and <code>getPerimeter()</code>.',
          'Write JUnit tests to verify that the area and perimeter calculations are correct.'
        ],
        code: `// Rectangle.java
public class Rectangle {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    public double getArea() {
        return width * height;
    }
    
    public double getPerimeter() {
        return 2 * (width + height);
    }
}

// RectangleTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class RectangleTest {
    @Test
    public void testArea() {
        Rectangle r = new Rectangle(5, 10);
        assertEquals(50.0, r.getArea(), 0.001);
    }
    
    @Test
    public void testPerimeter() {
        Rectangle r = new Rectangle(5, 10);
        assertEquals(30.0, r.getPerimeter(), 0.001);
    }
}

// Run: mvn test`
      }
    ]
  },

  'jdbc': {
    title: 'JDBC (Java Database Connectivity)',
    sections: [
      {
        heading: 'What is JDBC?',
        content: [
          '<strong>JDBC (Java Database Connectivity)</strong> is Java\'s standard API for connecting to databases.',
          'It provides a set of classes and interfaces that let Java programs interact with relational databases like MySQL, PostgreSQL, Oracle, and SQL Server.',
          'With JDBC, you can:',
          '<ul><li>Connect to a database</li><li>Execute SQL queries</li><li>Insert, update, and delete data</li><li>Retrieve and process results</li></ul>',
          'JDBC uses <strong>drivers</strong> — database-specific libraries that handle the communication between Java and the database.'
        ]
      },
      {
        heading: 'JDBC Setup: Connecting to a Database',
        content: [
          'Before using JDBC, you need:',
          '<ol><li>A database server running (e.g., MySQL, PostgreSQL)</li><li>The JDBC driver JAR file for your database</li><li>The database URL, username, and password</li></ol>',
          'The <code>Connection</code> object represents a session with the database.',
          'You obtain a connection using <code>DriverManager.getConnection()</code>.'
        ],
        code: `import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCDemo {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/mydb";
        String username = "root";
        String password = "password";
        
        try {
            // Establish connection
            Connection conn = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to the database!");
            
            // Always close the connection when done
            conn.close();
        } catch (SQLException e) {
            System.out.println("Connection failed: " + e.getMessage());
        }
    }
}`
      },
      {
        heading: 'Executing SQL Queries',
        content: [
          'Once connected, you use a <code>Statement</code> or <code>PreparedStatement</code> to execute SQL.',
          '<ul><li><code>Statement</code> — for simple, static SQL queries</li><li><code>PreparedStatement</code> — for queries with parameters (safer, prevents SQL injection)</li></ul>',
          'For SELECT queries, use <code>executeQuery()</code> which returns a <code>ResultSet</code>.',
          'For INSERT, UPDATE, DELETE, use <code>executeUpdate()</code> which returns the number of rows affected.'
        ],
        code: `import java.sql.*;

public class QueryDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String pass = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, pass)) {
            
            // Create a statement
            Statement stmt = conn.createStatement();
            
            // Execute a SELECT query
            ResultSet rs = stmt.executeQuery("SELECT id, name, age FROM users");
            
            // Process results
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println(id + ": " + name + " (" + age + ")");
            }
            
            rs.close();
            stmt.close();
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
      },
      {
        heading: 'Using PreparedStatement',
        content: [
          '<code>PreparedStatement</code> is the recommended way to execute SQL with dynamic values.',
          'It protects against <strong>SQL injection</strong> — a security attack where malicious input alters your SQL.',
          'You write the SQL with <code>?</code> placeholders, then set values using <code>setInt()</code>, <code>setString()</code>, etc.'
        ],
        code: `import java.sql.*;

public class PreparedStatementDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String pass = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, pass)) {
            
            // Insert with PreparedStatement
            String insertSQL = "INSERT INTO users (name, age) VALUES (?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(insertSQL);
            
            pstmt.setString(1, "Alice");
            pstmt.setInt(2, 25);
            int rowsInserted = pstmt.executeUpdate();
            System.out.println(rowsInserted + " row(s) inserted.");
            
            // Search with PreparedStatement
            String searchSQL = "SELECT * FROM users WHERE age > ?";
            PreparedStatement searchStmt = conn.prepareStatement(searchSQL);
            searchStmt.setInt(1, 20);
            
            ResultSet rs = searchStmt.executeQuery();
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
            
            pstmt.close();
            searchStmt.close();
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
      },
      {
        heading: 'Try-with-Resources for JDBC',
        content: [
          'Database resources like <code>Connection</code>, <code>Statement</code>, and <code>ResultSet</code> must be closed after use.',
          'Java\'s <strong>try-with-resources</strong> statement automatically closes these objects.',
          'Any object that implements <code>AutoCloseable</code> can be used in try-with-resources.'
        ],
        code: `import java.sql.*;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String pass = "password";
        
        // All resources in parentheses are closed automatically
        try (Connection conn = DriverManager.getConnection(url, user, pass);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM products")) {
            
            while (rs.next()) {
                String productName = rs.getString("name");
                double price = rs.getDouble("price");
                System.out.println(productName + " costs $" + price);
            }
            
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        // conn, stmt, and rs are all closed automatically here!
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Write a program that connects to a database and performs these operations:',
          '<ol><li>Create a table called <code>students</code> with <code>id</code>, <code>name</code>, and <code>grade</code></li><li>Insert at least 3 students</li><li>Query and print all students with grade above 80</li></ol>',
          'Use <code>PreparedStatement</code> for all parameterized queries.'
        ],
        code: `import java.sql.*;

public class StudentDatabase {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String pass = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, pass);
             Statement stmt = conn.createStatement()) {
            
            // Create table
            stmt.executeUpdate(
                "CREATE TABLE IF NOT EXISTS students (" +
                "id INT PRIMARY KEY AUTO_INCREMENT, " +
                "name VARCHAR(50), " +
                "grade INT)"
            );
            System.out.println("Table created.");
            
            // Insert students
            String insert = "INSERT INTO students (name, grade) VALUES (?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(insert)) {
                ps.setString(1, "Alice"); ps.setInt(2, 85); ps.executeUpdate();
                ps.setString(1, "Bob");   ps.setInt(2, 72); ps.executeUpdate();
                ps.setString(1, "Carol"); ps.setInt(2, 91); ps.executeUpdate();
            }
            System.out.println("Students inserted.");
            
            // Query high achievers
            String query = "SELECT * FROM students WHERE grade > ?";
            try (PreparedStatement ps = conn.prepareStatement(query)) {
                ps.setInt(1, 80);
                ResultSet rs = ps.executeQuery();
                System.out.println("High achievers:");
                while (rs.next()) {
                    System.out.println(rs.getString("name") + ": " + rs.getInt("grade"));
                }
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
      }
    ]
  },

  'multithreading': {
    title: 'Multithreading',
    sections: [
      {
        heading: 'What is Multithreading?',
        content: [
          '<strong>Multithreading</strong> allows a program to run multiple tasks at the same time.',
          'In Java, a <strong>thread</strong> is a separate path of execution within a program.',
          'Think of threads like workers in a factory: instead of one worker doing everything, multiple workers handle different tasks simultaneously.',
          '<strong>Why use multithreading?</strong>',
          '<ul><li>Keep the user interface responsive while doing heavy work</li><li>Perform multiple downloads or uploads at once</li><li>Use multiple CPU cores for faster processing</li><li>Handle many client connections in a server</li></ul>',
          'Every Java program starts with at least one thread: the <strong>main thread</strong>.'
        ]
      },
      {
        heading: 'Creating Threads: Extending Thread',
        content: [
          'There are two main ways to create a thread in Java:',
          '<ol><li>Extend the <code>Thread</code> class and override <code>run()</code></li><li>Implement the <code>Runnable</code> interface and pass it to a <code>Thread</code></li></ol>',
          'The <code>run()</code> method contains the code that will execute in the new thread.',
          'Call <code>start()</code> (not <code>run()</code>) to launch the thread — <code>start()</code> tells the JVM to create a new thread and call <code>run()</code> inside it.'
        ],
        code: `// Method 1: Extend Thread class
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("MyThread: " + i);
            try {
                Thread.sleep(500);  // pause for 500 milliseconds
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // starts the new thread
        
        // Main thread continues running
        for (int i = 1; i <= 5; i++) {
            System.out.println("Main: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}`
      },
      {
        heading: 'Creating Threads: Implementing Runnable',
        content: [
          'The <code>Runnable</code> approach is preferred because Java does not support multiple inheritance.',
          'If your class extends <code>Thread</code>, it cannot extend any other class.',
          'With <code>Runnable</code>, your class can still extend another class while being runnable as a thread.',
          'You can also use <strong>lambda expressions</strong> for a concise Runnable definition.'
        ],
        code: `// Method 2: Implement Runnable
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Runnable Thread: " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        // Create thread from Runnable
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
        
        // Using lambda for a quick thread
        Thread t2 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda Thread: " + i);
                try {
                    Thread.sleep(300);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        t2.start();
        
        System.out.println("Main thread continues...");
    }
}`
      },
      {
        heading: 'Thread Synchronization',
        content: [
          'When multiple threads access shared data, problems can occur.',
          'For example, two threads might try to modify the same variable at the same time, leading to inconsistent results.',
          '<strong>Synchronization</strong> ensures that only one thread can access a critical section of code at a time.',
          'Use the <code>synchronized</code> keyword on a method or a block to prevent concurrent access.'
        ],
        code: `class BankAccount {
    private double balance = 0;
    
    // Synchronized method — only one thread can enter at a time
    public synchronized void deposit(double amount) {
        double newBalance = balance + amount;
        // Simulate some processing time
        try { Thread.sleep(10); } catch (InterruptedException e) {}
        balance = newBalance;
    }
    
    public synchronized double getBalance() {
        return balance;
    }
}

public class SynchronizationDemo {
    public static void main(String[] args) throws InterruptedException {
        BankAccount account = new BankAccount();
        
        // Two threads depositing money
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                account.deposit(1);
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                account.deposit(1);
            }
        });
        
        t1.start();
        t2.start();
        t1.join();  // wait for t1 to finish
        t2.join();  // wait for t2 to finish
        
        System.out.println("Final balance: " + account.getBalance());
        // Without synchronized, this might be less than 2000!
    }
}`
      },
      {
        heading: 'Thread States and Lifecycle',
        content: [
          'A thread goes through several states during its life:',
          '<ul><li><strong>NEW</strong> — thread created, not yet started</li><li><strong>RUNNABLE</strong> — thread is ready to run or running</li><li><strong>BLOCKED</strong> — thread waiting to acquire a lock</li><li><strong>WAITING</strong> — thread waiting indefinitely for another thread</li><li><strong>TIMED_WAITING</strong> — thread waiting for a specific time (e.g., <code>sleep()</code>)</li><li><strong>TERMINATED</strong> — thread has finished execution</li></ul>',
          'You can check a thread\'s state with <code>thread.getState()</code>.'
        ],
        code: `public class ThreadLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            try {
                System.out.println("Thread running...");
                Thread.sleep(1000);
                System.out.println("Thread finishing...");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        System.out.println("State after creation: " + t.getState());  // NEW
        
        t.start();
        System.out.println("State after start: " + t.getState());     // RUNNABLE
        
        Thread.sleep(100);  // let the thread enter sleep
        System.out.println("State while sleeping: " + t.getState());  // TIMED_WAITING
        
        t.join();  // wait for thread to complete
        System.out.println("State after completion: " + t.getState()); // TERMINATED
    }
}`
      },
      {
        heading: 'Try it Yourself',
        content: [
          'Create a program that simulates a simple ticket booking system.',
          'Multiple threads (customers) try to book tickets from a shared pool.',
          'Use <code>synchronized</code> to prevent overbooking.'
        ],
        code: `class TicketPool {
    private int ticketsAvailable;
    
    public TicketPool(int tickets) {
        this.ticketsAvailable = tickets;
    }
    
    public synchronized boolean bookTicket(String customer) {
        if (ticketsAvailable > 0) {
            ticketsAvailable--;
            System.out.println(customer + " booked a ticket! Remaining: " + ticketsAvailable);
            return true;
        } else {
            System.out.println(customer + " failed — no tickets left.");
            return false;
        }
    }
    
    public synchronized int getAvailable() {
        return ticketsAvailable;
    }
}

public class TicketBooking {
    public static void main(String[] args) {
        TicketPool pool = new TicketPool(5);
        
        // Create 10 customers trying to book
        for (int i = 1; i <= 10; i++) {
            String customer = "Customer-" + i;
            new Thread(() -> {
                pool.bookTicket(customer);
            }).start();
        }
    }
}`
      }
    ]
  }
};

export const javaContent = {
  module1: javaModule1Content,
  module2: javaModule2Content,
  module3: javaModule3Content,
  module4: javaModule4Content
};