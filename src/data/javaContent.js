export const javaStructure = {
  module1: {
    title: 'Module 1: Java Fundamentals',
    topics: [
      { id: 'intro-java', title: 'Introduction to Java' },
      { id: 'variables-data-types', title: 'Variables and Data Types' },
      { id: 'literals', title: 'Literals' },
      { id: 'identifiers-reserved-words', title: 'Identifiers & Reserved Words' },
      { id: 'declaration-access-control', title: 'Declaration & Access Control' },
      { id: 'operators-expressions', title: 'Operators and Expressions' },
      { id: 'control-flow', title: 'Control Flow (if, switch, loops)' },
      { id: 'methods-functions', title: 'Methods and Functions' },
      { id: 'arrays', title: 'Arrays' },
      { id: 'strings', title: 'String Handling' },
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
      { id: 'interfaces', title: 'Interfaces' },
      { id: 'inner-classes', title: 'Inner Classes' },
      { id: 'oop-concepts', title: 'OOPS Concepts (SCJP Deep Dive)' },
      { id: 'packages', title: 'Packages and Access Modifiers' },
      { id: 'object-class', title: 'Object Class' },
    ]
  },
  module3: {
    title: 'Module 3: Strings, Exceptions & java.lang',
    topics: [
      { id: 'stringbuffer-stringbuilder', title: 'StringBuffer & StringBuilder' },
      { id: 'wrapper-classes', title: 'Wrapper Classes' },
      { id: 'math-class', title: 'Math Class' },
      { id: 'exception-handling', title: 'Exception Handling' },
      { id: 'assertions', title: 'Assertions' },
      { id: 'java-coding-standards', title: 'Java Coding Standards' },
      { id: 'file-io', title: 'File I/O' },
      { id: 'serialization', title: 'Serialization' },
      { id: 'internationalization', title: 'Internationalization (i18n)' },
    ]
  },
  module4: {
    title: 'Module 4: Collections, Functional Programming & Concurrency',
    topics: [
      { id: 'collections-deep-dive', title: 'Collections Deep Dive' },
      { id: 'generics', title: 'Generics' },
      { id: 'lambda-expressions', title: 'Lambda Expressions' },
      { id: 'streams', title: 'Streams API' },
      { id: 'multithreading', title: 'Multithreading' },
    ]
  },
  module5: {
    title: 'Module 5: Java New Features',
    topics: [
      { id: 'java-1-5-features', title: 'Java 1.5 New Features' },
      { id: 'var-arg-methods', title: 'Var-Arg Methods' },
      { id: 'command-line-args', title: 'Command-Line Arguments & main' },
      { id: 'java-1-7-new-features', title: 'Java 1.7 New Features' },
      { id: 'java-1-8-new-features', title: 'Java 1.8 New Features' },
      { id: 'java-9-new-features', title: 'Java 9 New Features' },
      { id: 'java-10-new-features', title: 'Java 10 New Features' },
      { id: 'java-11-new-features', title: 'Java 11 New Features (LTS)' },
      { id: 'java-17-new-features', title: 'Java 17 New Features (LTS)' },
      { id: 'java-21-new-features', title: 'Java 21 New Features (LTS)' },
    ]
  },
  module6: {
    title: 'Module 6: Enterprise & Beyond',
    topics: [
      { id: 'jvm-basics', title: 'JVM Basics' },
      { id: 'garbage-collection', title: 'Garbage Collection' },
      { id: 'build-tools', title: 'Build Tools (Maven, Gradle)' },
      { id: 'unit-testing-junit', title: 'Unit Testing with JUnit' },
      { id: 'jdbc', title: 'JDBC and Database Connectivity' },
    ]
  },
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
            `Java follows the principle of <strong>"Write Once, Run Anywhere"</strong> — code compiled on one platform can run on any other platform that has a Java Virtual Machine (JVM).`,
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
            headers: [
              'Type',
              'Size',
              'Range / Values',
              'Example'
            ],
            rows: [
              [
                'byte',
                '1 byte',
                '-128 to 127',
                'byte b = 100;'
              ],
              [
                'short',
                '2 bytes',
                '-32,768 to 32,767',
                'short s = 1000;'
              ],
              [
                'int',
                '4 bytes',
                '-2³¹ to 2³¹-1',
                'int age = 25;'
              ],
              [
                'long',
                '8 bytes',
                '-2⁶³ to 2⁶³-1',
                'long l = 100L;'
              ],
              [
                'float',
                '4 bytes',
                '~7 decimal digits',
                'float f = 3.14F;'
              ],
              [
                'double',
                '8 bytes',
                '~15 decimal digits',
                'double d = 3.14;'
              ],
              [
                'char',
                '2 bytes',
                'Single Unicode character',
                "char c = 'A';"
              ],
              [
                'boolean',
                '1 bit',
                'true or false',
                'boolean ok = true;'
              ]
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
        },
        {
          heading: 'Strongly Typed Language',
          content: [
            'In Java, every variable has a type, every expression has a type, and all types are strictly defined.',
            'All assignments are checked by the compiler for type compatibility. This makes Java a <strong>strongly typed language</strong>.',
            'You cannot assign a value of one type to a variable of an incompatible type without explicit casting.',
            '<strong>Example type compatibility errors:</strong>',
            '<code>byte b = 130;  // CE: possible loss of precision</code>',
            '<code>byte b = true; // CE: incompatible types: boolean required: byte</code>'
          ]
        },
        {
          heading: 'Signed vs Unsigned',
          content: [
            'Except for <code>boolean</code> and <code>char</code>, <strong>all remaining datatypes are signed</strong>.',
            'Signed means a variable can represent both positive (+) and negative (−) numbers.',
            "Negative numbers are represented internally using <strong>2's complement</strong> form.",
            '<code>char</code> is the only unsigned integral type in Java (range 0 to 65535, no negative values).',
            '<code>boolean</code> is neither signed nor unsigned — it only accepts <code>true</code> or <code>false</code>.'
          ]
        },
        {
          heading: 'Detailed Data Type Reference',
          content: [
            '<strong>byte</strong> — Size 1 byte (8 bits), Range -128 to 127. Best suitable when handling data from files or the network (streams of raw bytes).',
            '<strong>short</strong> — Size 2 bytes, Range -2^15 to 2^15-1 (-32,768 to 32,767). Best suitable for 16-bit processors but these are completely outdated today.',
            "<strong>int</strong> — Size 4 bytes, Range -2^31 to 2^31-1 (-2,147,483,648 to 2,147,483,647). The most commonly used datatype. Size is fixed irrespective of platform — this is why Java is considered <strong>Robust</strong> (programs don't break when moved between platforms).",
            '<strong>long</strong> — Size 8 bytes, Range -2^63 to 2^63-1. Use when int is not enough. Example: the distance traveled by light in 1000 days requires a long — int is not sufficient.',
            '<strong>float</strong> — Size 4 bytes, Range -3.4e38 to 3.4e38. Single precision (about 6–7 decimal digits of accuracy). Add <code>f</code> or <code>F</code> suffix.',
            '<strong>double</strong> — Size 8 bytes, Range -1.7e308 to 1.7e308. Double precision (about 14–15 decimal digits). Most commonly used for real numbers.',
            '<strong>boolean</strong> — Size: not applicable (JVM-dependent). Only allowed values are <code>true</code> and <code>false</code>.',
            '<strong>char</strong> — Size 2 bytes, Range 0 to 65535. Java uses Unicode (supports all worldwide alphabets), which is why char is 2 bytes (not 1 like in C).'
          ]
        },
        {
          heading: 'Why Java is NOT a Pure OOP Language',
          content: [
            'Several OOP features are <strong>not</strong> supported by Java:',
            '<ul><li>No <strong>multiple inheritance</strong> (a class can extend only one parent)</li><li>No <strong>operator overloading</strong> (you cannot redefine + for custom types, except for String concatenation)</li><li>Java contains <strong>non-object primitive datatypes</strong> (everything is not an object)</li></ul>',
            'Because of these limitations, Java is considered an <strong>object-oriented</strong> language but <strong>not a pure OOP</strong> language.'
          ]
        },
        {
          heading: 'Default Values for Data Types',
          content: [
            'When a variable is declared but not initialized, the JVM provides a default value. This applies to instance and static variables, not local variables.',
            "<ul><li>All numeric types: <code>0</code> (or <code>0.0</code> for float/double)</li><li><code>char</code>: <code>'\\u0000'</code> (blank space, Unicode 0)</li><li><code>boolean</code>: <code>false</code></li><li>Object references: <code>null</code></li></ul>"
          ],
          table: {
            headers: [
              'Datatype',
              'Size',
              'Range',
              'Default Value',
              'Wrapper Class'
            ],
            rows: [
              [
                'byte',
                '1 byte',
                '-128 to 127',
                '0',
                'Byte'
              ],
              [
                'short',
                '2 bytes',
                '-32,768 to 32,767',
                '0',
                'Short'
              ],
              [
                'int',
                '4 bytes',
                '-2^31 to 2^31-1',
                '0',
                'Integer'
              ],
              [
                'long',
                '8 bytes',
                '-2^63 to 2^63-1',
                '0',
                'Long'
              ],
              [
                'float',
                '4 bytes',
                '-3.4e38 to 3.4e38',
                '0.0',
                'Float'
              ],
              [
                'double',
                '8 bytes',
                '-1.7e308 to 1.7e308',
                '0.0',
                'Double'
              ],
              [
                'boolean',
                'NA',
                'true or false',
                'false',
                'Boolean'
              ],
              [
                'char',
                '2 bytes',
                '0 to 65535',
                "'\\u0000' (blank)",
                'Character'
              ]
            ]
          }
        },
        {
          heading: 'Type Compatibility Errors — Common Pitfalls',
          content: [
            '<strong>Which of the following are valid boolean declarations?</strong>',
            '<ul><li><code>boolean b1 = true;</code> ✅ valid</li><li><code>boolean b2 = 0;</code> ❌ <em>CE: Incompatible types found: int required: boolean</em></li><li><code>boolean b3 = TRUE;</code> ❌ capital TRUE is not valid (Java is case-sensitive)</li></ul>',
            '<strong>if statement with int condition:</strong>',
            '<code>int x = 0; if (x) { ... }</code> ❌ <em>CE: Incompatible types found: int required: boolean</em> — unlike C/C++, integers cannot be used as conditions in Java.',
            '<strong>byte range violations:</strong>',
            '<code>byte b = 130;</code> ❌ <em>CE: possible loss of precision</em> (130 is out of byte range -128 to 127)',
            '<code>short s = 65535;</code> ❌ <em>CE: possible loss of precision</em> (out of short range -32,768 to 32,767)'
          ]
        },
        {
          heading: 'SCJP: Types of Variables (Based on Value Type)',
          content: [
            'Based on the type of <strong>value</strong> a variable represents, Java has two categories:',
            '<strong>1. Primitive variables</strong> — store primitive values directly in memory',
            '<code>int a = 10;</code> → the value <code>10</code> is stored in the variable <code>a</code>',
            '<strong>2. Reference variables</strong> — store a reference (memory address) to an object',
            `<code>String s = new String("raju");</code> → <code>s</code> holds a reference to the String object in the heap`
          ],
          code: `public class VariableTypesDemo {
    int a = 10;             // primitive variable
    String s = "Hello";     // reference variable
    int[] arr = {1, 2, 3};  // reference variable (arrays are objects)
}`
        },
        {
          heading: 'SCJP: Types of Variables (Based on Declaration Position)',
          content: [
            'Based on the <strong>purpose and position of declaration</strong>, Java has three types:',
            '<ul><li><strong>Instance variables</strong> — value varies per object</li><li><strong>Static variables</strong> — shared single copy across all objects</li><li><strong>Local variables</strong> — declared inside a method, constructor, or block</li></ul>'
          ]
        },
        {
          heading: 'Instance Variables',
          content: [
            'If the value of a variable is <strong>varied from object to object</strong>, it is an instance variable.',
            'A <strong>separate copy</strong> of instance variables is created for every object.',
            "<strong>Lifecycle:</strong> created at object creation, destroyed at object destruction — scope is the same as the object's scope.",
            '<strong>Declaration:</strong> inside the class but outside any method, constructor, or block.',
            '<strong>Initialization:</strong> not required — the JVM always provides default values (0, false, null, etc.).',
            'Also known as <strong>attributes</strong>.'
          ],
          code: `class Student {
    int id;           // instance variable
    String name;      // instance variable
    
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();
        s1.id = 101;
        s1.name = "Alice";
        s2.id = 102;
        s2.name = "Bob";
        
        // Each object has its own copy
        System.out.println(s1.id + " " + s1.name);  // 101 Alice
        System.out.println(s2.id + " " + s2.name);  // 102 Bob
    }
}`
        },
        {
          heading: 'Static Variables',
          content: [
            'If the value of a variable is <strong>fixed for all objects</strong>, it should be a static variable.',
            'A <strong>single copy</strong> is created at the class level and <strong>shared by all objects</strong> of that class.',
            '<strong>Declaration:</strong> inside the class but outside any method, constructor, or block, with the <code>static</code> keyword.',
            '<strong>Lifecycle:</strong> created at class loading, destroyed at class unloading.',
            '<strong>Access:</strong> use the class name (recommended) or an object reference.',
            '<strong>Initialization:</strong> not required — the JVM always provides default values.'
          ],
          code: `class Test {
    int i;                    // instance variable
    static int j = 10;        // static variable
    
    public static void main(String[] args) {
        Test t1 = new Test();
        t1.i = 888;
        t1.j = 999;           // modifying static via t1
        
        Test t2 = new Test();
        // t2.i is default 0, t2.j is now 999 (shared!)
        System.out.println(t2.i + " ---- " + t2.j);
        // Output: 0 ---- 999
        
        // Recommended: access static via class name
        System.out.println("Test.j = " + Test.j);  // 999
    }
}`
        },
        {
          heading: 'Local Variables',
          content: [
            'Variables declared <strong>within a method, constructor, or block</strong> are local variables.',
            'Also known as <strong>temporary</strong> or <strong>automatic</strong> variables.',
            '<strong>Lifecycle:</strong> created when the method/block starts executing, destroyed when it completes.',
            '<strong>Initialization:</strong> <strong>required</strong> — the JVM does NOT provide default values. Using an uninitialized local variable is a compile-time error.',
            '<strong>Only applicable modifier:</strong> <code>final</code>. Using any other modifier (public, static, private, etc.) is a compile-time error.'
          ],
          code: `public class LocalVariableDemo {
    public static void main(String[] args) {
        int i;                  // declared but not initialized
        // System.out.println(i);  // CE: variable i might not have been initialized
        
        int x = 10;             // OK - initialized before use
        System.out.println(x);
        
        if (args.length > 0) {
            int y = 20;         // local to this block
            System.out.println(y);
        }
        // System.out.println(y);  // CE - y is out of scope here
        
        // for loop variable is also local
        for (int k = 0; k < 3; k++) {
            System.out.println(k);
        }
    }
}`
        },
        {
          heading: 'Local Variable Initialization — Conditional Cases',
          content: [
            'The compiler checks all possible paths to determine if a local variable is definitely assigned:',
            '<strong>Case 1: Only one branch initializes → CE</strong>',
            '<code>int i; if (args.length > 0) { i = 10; } System.out.println(i);</code> ❌ <em>CE: variable i might not have been initialized</em>',
            '<strong>Case 2: All branches initialize → OK</strong>',
            '<code>int i; if (args.length > 0) { i = 10; } else { i = 20; } System.out.println(i);</code> ✅ valid',
            'It is generally <strong>not good practice</strong> to perform initialization of local variables in logical blocks because they may not execute at runtime.'
          ]
        },
        {
          heading: 'Uninitialized Arrays — Null vs Default Values',
          content: [
            'For <strong>instance</strong> and <strong>static</strong> array variables, the JVM provides default values:',
            '<strong>Instance level: array reference declared, not allocated</strong>',
            '<code>int[] a;</code> in a class → <code>System.out.println(objRef.a);</code> prints <code>null</code>, but <code>objRef.a[0];</code> throws <code>NullPointerException</code>',
            '<strong>Instance level: array reference declared AND allocated</strong>',
            '<code>int[] a = new int[6];</code> in a class → <code>objRef.a</code> prints something like <code>[I@123</code>, and <code>objRef.a[0]</code> prints <code>0</code>',
            'This is different from local array variables — for locals, you must always initialize before use.'
          ],
          code: `class Test {
    int[] a;                     // instance array reference - default null
    
    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.a);        // null
        // System.out.println(t.a[0]);   // NullPointerException at runtime
        
        t.a = new int[6];
        System.out.println(t.a);        // [I@123abc
        System.out.println(t.a[0]);     // 0
    }
}`
        },
        {
          heading: 'Quick Comparison Table',
          content: [
            ''
          ],
          table: {
            headers: [
              'Aspect',
              'Instance Variable',
              'Static Variable',
              'Local Variable'
            ],
            rows: [
              [
                'Keyword',
                'none',
                'static',
                'none'
              ],
              [
                'Location',
                'class (outside methods)',
                'class (outside methods)',
                'inside method/constructor/block'
              ],
              [
                'Copies per object',
                'one per object',
                'one per class (shared)',
                'one per method call'
              ],
              [
                'Default value',
                'yes (JVM provides)',
                'yes (JVM provides)',
                'NO (must initialize)'
              ],
              [
                'Modifiers allowed',
                'all',
                'all (except for some)',
                'only final'
              ],
              [
                'Lifetime',
                'object lifetime',
                'class lifetime',
                'method/block lifetime'
              ],
              [
                'Also called',
                'attribute / field',
                'class variable',
                'temporary / automatic'
              ],
              [
                'Access',
                'object reference',
                'class name (preferred) or object',
                'just the name in scope'
              ]
            ]
          }
        }
      ]
    },
  'literals': {
      title: 'Literals',
      sections: [
        {
          heading: 'What is a Literal?',
          content: [
            'A <strong>literal</strong> is a constant value that can be assigned to a variable.',
            'For example, in <code>int x = 10;</code>, the value <code>10</code> is a literal.',
            'Java supports several categories of literals: integral, floating-point, boolean, character, and string.',
            'Every literal has a type, and Java is strict about which literal types can be assigned to which variable types.'
          ]
        },
        {
          heading: 'Integral Literals',
          content: [
            'Integral literals represent whole numbers. There are <strong>three ways</strong> to specify them:',
            '<strong>1. Decimal literals</strong> — allowed digits 0 to 9',
            '<code>int x = 10;</code>',
            '<strong>2. Octal literals</strong> — allowed digits 0 to 7, must be prefixed with <code>0</code> (zero)',
            '<code>int x = 010;</code> — this is 8 in decimal, not 10!',
            '<strong>3. Hexadecimal literals</strong> — allowed digits 0 to 9 and A–F (uppercase or lowercase), prefixed with <code>0x</code> or <code>0X</code>',
            '<code>int x = 0x10;</code> — this is 16 in decimal',
            '<strong>Except decimal, octal, and hexadecimal, there is no other way to represent integral constants.</strong>',
            'By default, every integral literal is of type <code>int</code>. You can make it a <code>long</code> by suffixing with <code>l</code> or <code>L</code>.'
          ],
          code: `public class IntegralLiterals {
    public static void main(String[] args) {
        int x = 10;      // decimal
        int y = 010;     // octal (leading 0) = 8 in decimal
        int z = 0x10;    // hexadecimal (0x prefix) = 16 in decimal
        int a = 0X10;    // same as above (uppercase X is also valid)
        int b = 0xFace;  // hex digits can be uppercase or lowercase
        
        long big = 10L;  // long literal (L suffix)
        long big2 = 10l; // long literal (lowercase l also works but is hard to read)
        
        // int i = 10L; // CE: possible loss of precision (long literal cannot be assigned to int)
        
        System.out.println(x + "..." + y + "..." + z);  // 10...8...16
        System.out.println(big);
    }
}`
        },
        {
          heading: 'byte and short Literals',
          content: [
            'There is no direct way to specify a literal as <code>byte</code> or <code>short</code> type.',
            'However, if an integral literal value is within the range of <code>byte</code> (or <code>short</code>), the JVM automatically treats it as that type when assigned.',
            '<code>byte b = 10;</code> — works because 10 is within byte range',
            '<code>byte b = 130;</code> — compile error (out of range)',
            '<code>short s = 32767;</code> — works because 32767 is within short range',
            '<code>short s = 65535;</code> — compile error (out of range)'
          ]
        },
        {
          heading: 'Floating-Point Literals',
          content: [
            'Floating-point literals represent real numbers (with decimal points).',
            'By default, every floating-point literal is of type <code>double</code>.',
            'You can explicitly mark a literal as <code>float</code> by suffixing with <code>f</code> or <code>F</code>.',
            'You can explicitly mark a literal as <code>double</code> by suffixing with <code>d</code> or <code>D</code> (optional, since double is the default).',
            'You can use <strong>scientific notation</strong> for very large or small numbers (e.g., <code>10e23</code> means 10 × 10^23).',
            '<strong>Important:</strong> floating-point literals can only be specified in <strong>decimal form</strong>. You cannot use octal or hexadecimal for floating-point values.'
          ],
          code: `public class FloatLiterals {
    public static void main(String[] args) {
        // Valid declarations
        float f = 10.5f;       // float (F suffix required)
        float f2 = 10.5F;      // same (uppercase F also works)
        double d = 10.5;       // double (default)
        double d2 = 10.5d;     // double (D suffix optional)
        double d3 = 10.5D;     // double (uppercase D also works)
        double d4 = 10.5f;     // float literal can be assigned to double (widening)
        
        // Scientific notation
        double sci = 10e23;    // 10 × 10^23
        double sci2 = 1.2e36;  // valid
        
        // Invalid: out of range or wrong type
        // float bad = 10.5;  // CE: possible loss of precision (double literal → float)
        // int bad2 = 10e23;  // CE: possible loss of precision (double literal → int)
        
        // Invalid: octal/hex for float
        // double bad3 = 0x123.456;  // CE: malformed floating-point literal
        
        System.out.println("f: " + f);
        System.out.println("d: " + d);
        System.out.println("sci: " + sci);
    }
}`
        },
        {
          heading: 'Boolean Literals',
          content: [
            'The only allowed values for the <code>boolean</code> data type are <code>true</code> and <code>false</code>.',
            'There is no other representation — unlike C/C++, integers (0 or 1) cannot be used as boolean values.',
            '<code>boolean b = true;</code> ✅ valid',
            '<code>boolean b = false;</code> ✅ valid',
            '<code>boolean b = TRUE;</code> ❌ invalid (uppercase — Java is case-sensitive)',
            '<code>boolean b = 0;</code> ❌ invalid (<em>CE: incompatible types found: int required: boolean</em>)',
            '<code>boolean b = 1;</code> ❌ invalid (same reason)'
          ]
        },
        {
          heading: 'Character Literals',
          content: [
            "A character literal represents a single character and is enclosed in <strong>single quotes</strong> (<code>' '</code>).",
            "<code>char ch = 'a';</code> ✅ valid",
            "<code>char ch = 'ab';</code> ❌ invalid — <em>CE: unclosed character literal</em> (more than one character)",
            '<code>char ch = a;</code> ❌ invalid — <em>cannot find symbol</em> (a without quotes is treated as an identifier)',
            'Character literals can also be specified in <strong>three other ways</strong>:',
            "<ul><li><strong>Integral value:</strong> <code>char ch = 97;</code> prints <code>a</code> (the ASCII/Unicode value of 'a')</li><li><strong>Unicode representation:</strong> <code>char ch = '\\u0061';</code> also prints <code>a</code></li><li><strong>Escape characters:</strong> special sequences like <code>\\n</code> (newline), <code>\\t</code> (tab)</li></ul>"
          ]
        },
        {
          heading: 'Character Literals — Integral Form',
          content: [
            'You can assign an integer to a char if the value is in the valid char range (0 to 65535).',
            '<code>char ch = 97;</code> → prints <code>a</code>',
            '<code>char ch = 65535;</code> ✅ valid (max char value)',
            '<code>char ch = 65536;</code> ❌ <em>CE: possible loss of precision found: int required: char</em> (one above max range)'
          ],
          code: `public class CharLiterals {
    public static void main(String[] args) {
        char ch1 = 'a';          // direct character
        char ch2 = 97;           // ASCII value of 'a'
        char ch3 = '\\u0061';    // Unicode representation of 'a'
        
        System.out.println(ch1); // a
        System.out.println(ch2); // a
        System.out.println(ch3); // a
        
        // Valid hex unicode
        char ch4 = '\\ubeef';
        char ch5 = '\\uface';
        
        // Invalid: more than 4 hex digits
        // char ch6 = '\\uanuska';  // CE: illegal line start in unicode escape
        
        // Max char value
        char max = 65535;        // valid
        // char tooBig = 65536;   // CE: possible loss of precision
    }
}`
        },
        {
          heading: 'Escape Characters',
          content: [
            `Escape characters are special sequences prefixed with a backslash (<code>\\</code>) that represent characters that cannot be typed directly.`,
            '<strong>Common Java escape characters:</strong>',
            `<ul><li><code>\\n</code> — newline (line feed)</li><li><code>\\t</code> — horizontal tab</li><li><code>\\r</code> — carriage return</li><li><code>\\b</code> — backspace</li><li><code>\\f</code> — form feed</li><li><code>\\'</code> — single quote</li><li><code>\\"</code> — double quote</li><li><code>\\\\</code> — backslash</li></ul>`,
            'Every escape character is a valid char literal.',
            "<code>char ch = '\\n';</code> ✅ valid — represents the newline character",
            "<code>char ch = '\\d';</code> ❌ invalid — <code>\\d</code> is not a defined escape sequence"
          ]
        },
        {
          heading: 'String Literals',
          content: [
            `A string literal is a sequence of characters enclosed in <strong>double quotes</strong> (<code>" "</code>).`,
            `<code>String s = "Durga";</code> ✅ valid`,
            `<code>String s = "software";</code> ✅ valid`,
            `<code>String s = "a";</code> ✅ valid (single character in double quotes is a String, not a char)`,
            "<code>String s = 'software';</code> ❌ invalid — <em>CE: unclosed character literal</em> (single quotes are for char, not String)",
            `String literals can contain escape characters: <code>"Hello\\nWorld"</code> — the \\n is a newline.`,
            `Strings are covered in detail in the <a href="#/java/strings">String Handling</a> topic.`
          ]
        },
        {
          heading: 'Quick Reference — Literal Types',
          content: [
            `<ul><li><strong>Decimal integral:</strong> <code>int x = 10;</code> (0-9)</li><li><strong>Octal integral:</strong> <code>int x = 010;</code> (0-7, leading 0)</li><li><strong>Hex integral:</strong> <code>int x = 0x10;</code> (0-9, A-F, leading 0x or 0X)</li><li><strong>long literal:</strong> <code>long l = 10L;</code> (suffix l or L)</li><li><strong>float literal:</strong> <code>float f = 10.5f;</code> (suffix f or F)</li><li><strong>double literal:</strong> <code>double d = 10.5;</code> (or 10.5d, 10.5D)</li><li><strong>Scientific notation:</strong> <code>double d = 1.2e23;</code></li><li><strong>boolean literal:</strong> <code>boolean b = true;</code> (only true/false)</li><li><strong>char literal:</strong> <code>char c = 'a';</code> (single quotes)</li><li><strong>char by value:</strong> <code>char c = 97;</code> (0 to 65535)</li><li><strong>char by unicode:</strong> <code>char c = '\\u0061';</code></li><li><strong>String literal:</strong> <code>String s = "hello";</code> (double quotes)</li></ul>`
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Write a program that prints the same value (e.g., 100) using decimal, octal, and hexadecimal literal forms — what does each print?',
            'Try assigning <code>char ch = 65;</code> and printing it — what character do you get?',
            'Experiment with <code>double d = 1.5e3;</code> — what value does it hold?',
            'Try <code>boolean b = 1;</code> — what error do you get?'
          ],
          code: `public class LiteralPractice {
    public static void main(String[] args) {
        // Same value in different literal forms
        int decimal = 100;
        int octal = 0100;
        int hex = 0x100;
        
        System.out.println("Decimal 100: " + decimal);  // 100
        System.out.println("Octal 0100: " + octal);    // 64 (8*8)
        System.out.println("Hex 0x100: " + hex);        // 256 (16*16)
        
        // char by value
        char letterA = 65;  // ASCII code for 'A'
        System.out.println("char 65: " + letterA);
        
        // Scientific notation
        double big = 1.5e3;
        System.out.println("1.5e3: " + big);  // 1500.0
        
        // char escape characters
        char newline = '\\n';
        char tab = '\\t';
        System.out.println("Escape chars work: yes");
    }
}`
        }
      ]
    },
  'identifiers-reserved-words': {
      title: 'Identifiers & Reserved Words',
      sections: [
        {
          heading: 'What is an Identifier?',
          content: [
            'An <strong>identifier</strong> is a name in a Java program — it can be a class name, method name, variable name, or label name.',
            'Anything you name in Java is an identifier.',
            'Java has strict rules about what characters are allowed in identifiers. Following these rules is mandatory, not a style choice.'
          ]
        },
        {
          heading: 'Rules for Valid Identifiers',
          content: [
            'A Java identifier is a sequence of characters, where each character may be:',
            '<ul><li>A letter from <code>a-z</code> or <code>A-Z</code></li><li>A digit from <code>0-9</code></li><li>A currency symbol <code>$</code></li><li>A connecting punctuation <code>_</code> (underscore)</li></ul>',
            '<strong>Key rules:</strong>',
            '<ul><li>The identifier should <strong>not start with a digit</strong> — <code>123total</code> is invalid.</li><li>If you use any other symbol (e.g. <code>#</code>, <code>@</code>, <code>!</code>), you get a compile-time error: <code>IllegalCharacter</code>.</li><li>There is no length limit for Java identifiers, but it is not recommended to use more than 15 characters.</li><li>Java identifiers are <strong>case sensitive</strong> — <code>total</code> and <code>Total</code> are different names.</li></ul>',
            'You can use a reserved word as part of an identifier in some cases, but you cannot use a reserved word as the whole identifier.',
            '<code>String</code> is not a keyword — it is a class name — so you <strong>can</strong> use it as a variable name. (Trick question favorite!)'
          ],
          code: `class FundaDemo {
    public static void main(String[] args) {
        int String = 10;            // legal — String is a class name, not a keyword
        System.out.println(String); // prints 10
    }
}`
        },
        {
          heading: 'Valid vs Invalid Identifiers — Quick Check',
          content: [
            'Quick checklist for the most commonly asked questions:',
            '<ul><li><code>total#</code> — <strong>Invalid</strong> (contains <code>#</code>)</li><li><code>all@hands</code> — <strong>Invalid</strong> (contains <code>@</code>)</li><li><code>123total</code> — <strong>Invalid</strong> (starts with digit)</li><li><code>break</code> — <strong>Invalid</strong> (reserved keyword)</li><li><code>String</code> — <strong>Valid</strong> (it is a class name)</li><li><code>total_number</code> — <strong>Valid</strong></li><li><code>$_$</code> — <strong>Valid</strong> (letters, digits, <code>$</code>, <code>_</code>)</li><li><code>$ca$h</code> — <strong>Valid</strong></li></ul>'
          ]
        },
        {
          heading: 'Reserved Words (53 Total)',
          content: [
            'Java has <strong>53 reserved words</strong> — these names are reserved by the language and cannot be used as identifiers.',
            'They are split into two groups: <strong>50 keywords</strong> and <strong>3 reserved literals</strong>.',
            '<strong>Important rule:</strong> all reserved words in Java contain <strong>only lower case alphabet symbols</strong>.'
          ]
        },
        {
          heading: 'Keywords (50)',
          content: [
            'Java has 50 keywords. 48 are currently used and 2 are reserved for future use (unused).'
          ],
          table: {
            headers: [
              'Category',
              'Keywords',
              'Notes'
            ],
            rows: [
              [
                'Data types (8)',
                'byte, short, int, long, float, double, boolean, char',
                'Primitive type keywords'
              ],
              [
                'Flow control (11)',
                'if, else, switch, case, default, while, do, for, break, continue, return',
                'Control program flow'
              ],
              [
                'Exception handling (6)',
                'try, catch, finally, throw, throws, assert',
                'assert added in 1.4'
              ],
              [
                'Modifiers (11)',
                'public, private, protected, final, abstract, static, native, synchronized, volatile, transient, strictfp',
                'strictfp added in 1.2'
              ],
              [
                'Class-related (6)',
                'class, interface, package, extends, implements, import',
                'Define structure'
              ],
              [
                'Object-related (4)',
                'new, instanceof, super, this',
                'Object behavior'
              ],
              [
                'Void return (1)',
                'void',
                'Marks methods that return nothing'
              ],
              [
                'Unused (2)',
                'goto, const',
                'Reserved but not used — goto considered harmful, const replaced by final'
              ],
              [
                'Enum (1, since 1.5)',
                'enum',
                'For user-defined data types'
              ]
            ]
          }
        },
        {
          heading: 'Reserved Literals (3)',
          content: [
            'These three are not keywords but are reserved words — you cannot use them as identifiers:',
            '<ul><li><code>true</code> — allowed value for boolean data type</li><li><code>false</code> — allowed value for boolean data type</li><li><code>null</code> — default value for object reference</li></ul>'
          ]
        },
        {
          heading: 'Reserved Words vs Literals vs Keywords — Common Interview Questions',
          content: [
            'Which of the following are valid Java reserved words?',
            '<ol><li><code>int, float, signed, double</code> — only <code>int</code>, <code>float</code>, <code>double</code>. <code>signed</code> is not (Java does not have a <code>signed</code> keyword — all numeric types except char and boolean are signed by default).</li><li><code>abstract, final, volatile, virtual</code> — <code>virtual</code> is not a Java keyword (C++ keyword).</li><li><code>new, delete</code> — only <code>new</code>. <code>delete</code> is not a Java keyword (Java uses garbage collection, no manual delete).</li><li><code>goto, constant, static</code> — <code>goto</code> is reserved (unused), <code>static</code> is a keyword. <code>constant</code> is not reserved.</li><li><code>byte, short, int, long</code> — all four are valid keywords.</li></ol>',
            '<strong>Final valid Java reserved words (53):</strong>',
            '<code>abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return, short, static, strictfp, super, switch, synchronized, this, throw, throws, transient, true, false, null, try, void, volatile, while</code>'
          ]
        },
        {
          heading: 'Note About `const` and `goto`',
          content: [
            '<code>const</code> and <code>goto</code> are reserved but unused. In Java:',
            '<ul><li><code>goto</code> — usage is considered harmful; Java intentionally omits it. You cannot use <code>goto</code> in code.</li><li><code>const</code> — use <code>final</code> instead to declare constants.</li></ul>',
            '<code>enum</code> was introduced in Java 1.5 to let you define user-defined data types (covered in the Java 1.5 Features topic).'
          ]
        }
      ]
    },
  'declaration-access-control': {
      title: 'Declaration & Access Control',
      sections: [
        {
          heading: 'Java Source File Structure',
          content: [
            'A Java source file can contain <strong>any number of classes</strong>, but at most <strong>one class</strong> can be declared as <code>public</code>.',
            'If there is a public class, the <strong>filename must match the public class name</strong>, otherwise it is a compile-time error.',
            'If there is no public class, any filename is allowed.',
            '<strong>It is recommended to have only one class per source file.</strong>',
            'The structure of a Java source file is:',
            '<ul><li><strong>package</strong> statement (at most one, must be the first non-comment statement)</li><li><strong>import</strong> statements (any number)</li><li><strong>class/interface/enum</strong> declarations (any number, but at most one public)</li></ul>'
          ],
          code: `// File must be named B.java (matches public class)
class A { }
public class B {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
class C { }`
        },
        {
          heading: 'Import Statements',
          content: [
            'The <code>import</code> statement is a <strong>compile-time shortcut</strong> that lets you use short class names instead of fully qualified names.',
            'Without imports: <code>java.util.ArrayList l = new java.util.ArrayList();</code> (verbose)',
            'With imports: <code>import java.util.ArrayList;</code> then <code>ArrayList l = new ArrayList();</code>',
            '<strong>Two types of imports:</strong>',
            '<ul><li><strong>Implicit (wildcard) import:</strong> <code>import java.util.*;</code> — imports all classes in the package. Not recommended in production code (reduces readability).</li><li><strong>Explicit (single-class) import:</strong> <code>import java.util.ArrayList;</code> — recommended (improves readability).</li></ul>',
            '<strong>Important:</strong> importing a package does NOT import sub-packages. To use <code>java.util.regex.Pattern</code>, you need <code>import java.util.regex.*;</code> explicitly.'
          ],
          code: `// Valid imports
import java.util.*;               // wildcard - imports all classes in util
import java.util.ArrayList;       // explicit - imports only ArrayList
import java.util.regex.*;         // needed for Pattern, Matcher, etc.

// INVALID imports
// import java.util;              // CE - cannot import a package directly
// import java.util.ArrayList.*;   // CE - cannot wildcard a single class
// import static java.util.*;      // not a class import`
        },
        {
          heading: 'Import Resolution Order',
          content: [
            'When the compiler sees a class name reference, it searches in this order:',
            '<ol><li><strong>Explicit class imports</strong> (highest priority)</li><li><strong>Classes in the current working directory</strong> (default package)</li><li><strong>Implicit class imports</strong> (wildcard)</li></ol>',
            '<strong>Ambiguity case:</strong> if the same class is available in two wildcard imports, the compiler reports an ambiguity error.',
            '<code>import java.util.*; import java.sql.*; Date d = new Date();</code> ❌ <em>CE: reference to Date is ambiguous</em> (java.util.Date and java.sql.Date both exist)',
            'To fix, use an explicit import: <code>import java.util.Date;</code>'
          ]
        },
        {
          heading: 'Static Imports (Java 1.5+)',
          content: [
            'Static imports let you use static members (methods and fields) of a class <strong>without the class name prefix</strong>.',
            'Two forms: <code>import static java.lang.Math.sqrt;</code> or <code>import static java.lang.Math.*;</code>',
            'Note: <code>java.lang.*</code> is NOT implicitly imported. You must explicitly use <code>import java.lang.*;</code> if needed.',
            '<strong>When to use:</strong> sparingly, only when there is a specific need.',
            '<strong>Static import resolution order:</strong> current class static member → explicit static import → implicit static import',
            '<strong>Ambiguity case:</strong> <code>import static java.lang.Integer.*; import static java.lang.Byte.*; System.out.println(MAX_VALUE);</code> ❌ <em>CE: reference to MAX_VALUE is ambiguous</em>'
          ],
          code: `// Without static import
System.out.println(Math.sqrt(4));
System.out.println(Math.max(10, 20));

// With static import
import static java.lang.Math.sqrt;
import static java.lang.Math.max;
import static java.lang.System.out;

out.println(sqrt(4));      // 2.0
out.println(max(10, 20));  // 20`
        },
        {
          heading: 'Package Statement',
          content: [
            'A <strong>package</strong> in Java is an encapsulation mechanism to group related classes and interfaces into a single module.',
            'The main purpose of packages is to <strong>resolve naming conflicts</strong> and to organize code.',
            'The universally accepted naming convention is to use the <strong>internet domain name in reverse</strong> (e.g., <code>com.ibm</code>, <code>com.icicibank</code>, <code>com.airtelindia</code>).',
            '<strong>Rules:</strong>',
            '<ul><li>At most <strong>one package statement</strong> per source file (more than one is CE)</li><li>Package statement must be the <strong>first non-comment statement</strong></li><li>If no package is specified, the <strong>current working directory</strong> acts as the default package</li></ul>',
            "<strong>Compiling with packages:</strong> <code>javac -d . Test.java</code> — the <code>-d .</code> option places the .class file in the corresponding package directory. If the package structure doesn't exist, it is created automatically."
          ]
        },
        {
          heading: 'Class Modifiers (Top-Level Classes)',
          content: [
            'When you declare a class, you provide information to the JVM about how the class can be used. The <strong>only applicable modifiers for top-level classes</strong> are:',
            '<ul><li><code>public</code> — accessible from anywhere</li><li><code>&lt;default&gt;</code> (no modifier) — accessible only within the current package (package-level access)</li><li><code>final</code> — cannot be subclassed (no inheritance)</li><li><code>abstract</code> — cannot be instantiated, may contain abstract methods</li><li><code>strictfp</code> — all floating-point calculations follow IEEE 754 standard</li></ul>',
            'Using any other modifier (like <code>private</code>, <code>protected</code>, <code>static</code>) on a top-level class is a <strong>compile-time error</strong>.',
            '<strong>For inner classes</strong>, the additional modifiers <code>private</code>, <code>protected</code>, and <code>static</code> are also allowed.'
          ]
        },
        {
          heading: 'Access Modifiers — Visibility Summary',
          content: [
            'Java has four access levels, ranked from most restrictive to most permissive:',
            '<strong>private < default < protected < public</strong>',
            '<strong>The most restricted modifier is private. The most open is public.</strong>'
          ],
          table: {
            headers: [
              'Visibility',
              'public',
              'protected',
              'default',
              'private'
            ],
            rows: [
              [
                'Within the same class',
                '✅',
                '✅',
                '✅',
                '✅'
              ],
              [
                'Same package, outside class',
                '✅',
                '✅',
                '✅',
                '❌'
              ],
              [
                'Outside package, from child class',
                '✅',
                '✅',
                '❌',
                '❌'
              ],
              [
                'Outside package, from non-child class',
                '✅',
                '❌',
                '❌',
                '❌'
              ]
            ]
          },
          content_2: [
            '<strong>Recommended:</strong> <code>private</code> for data members, <code>public</code> for methods.',
            '<strong>protected = default + kids</strong> — accessible from any class in the same package AND from child classes in any package (but only through child class reference, not parent reference from outside).'
          ]
        },
        {
          heading: 'final Modifier',
          content: [
            '<code>final</code> can be applied to <strong>classes, methods, and variables</strong>:',
            '<ul><li><strong>final class</strong> — cannot be extended (no inheritance). <code>final class P {} class C extends P {}</code> ❌ CE</li><li><strong>final method</strong> — cannot be overridden in child classes</li><li><strong>final variable</strong> — cannot be reassigned (constant)</li></ul>',
            '<strong>Final + Abstract is an illegal combination</strong> (they are opposites).',
            '<code>public abstract final void m1() {}</code> ❌ <em>CE: illegal combination of modifiers: abstract, final</em>',
            '<strong>Final classes cannot contain abstract methods</strong>, but <strong>abstract classes can contain final methods</strong>.'
          ],
          code: `final class Constants {
    public static final double PI = 3.14159;
    public static final int MAX_SIZE = 100;
    
    public final void display() {  // cannot be overridden
        System.out.println("Final method");
    }
}`
        },
        {
          heading: 'abstract Modifier',
          content: [
            '<code>abstract</code> applies only to <strong>classes and methods</strong>, not to variables.',
            "If you don't know the implementation, you can declare a method as <code>abstract</code>. Abstract methods have <strong>only a declaration, not a body</strong> (must end with <code>;</code>).",
            '<strong>Rules:</strong>',
            '<ul><li>A class with at least one abstract method <strong>must</strong> be declared abstract</li><li>An abstract class <strong>can contain zero abstract methods</strong> (e.g., <code>HttpServlet</code>)</li><li>Abstract classes <strong>cannot be instantiated</strong></li><li>The first concrete subclass <strong>must</strong> implement all abstract methods, or be declared abstract itself</li></ul>',
            '<strong>Illegal combinations with abstract</strong> (6 total): <code>final</code>, <code>synchronized</code>, <code>native</code>, <code>static</code>, <code>strictfp</code>, <code>private</code>',
            '<strong>Common CE examples:</strong>',
            "<ul><li><code>class Test { public abstract void m1() {} }</code> ❌ <em>CE: abstract methods can't have a body</em></li><li><code>class Test { public abstract void m1(); }</code> ❌ <em>CE: Test is not abstract and doesn't override abstract method m1()</em></li><li><code>abstract class Test { public static void main(String[] a) { Test t = new Test(); } }</code> ❌ <em>CE: Test is abstract; cannot be instantiated</em></li></ul>"
          ],
          code: `abstract class Vehicle {
    public abstract int getNoOfWheels();
    
    public void start() {  // concrete method in abstract class is OK
        System.out.println("Starting vehicle");
    }
}

class Bus extends Vehicle {
    @Override
    public int getNoOfWheels() {
        return 6;  // Bus has 6 wheels
    }
}

class Bike extends Vehicle {
    @Override
    public int getNoOfWheels() {
        return 2;
    }
}`
        },
        {
          heading: 'strictfp Modifier',
          content: [
            '<code>strictfp</code> applies to <strong>classes and methods</strong>, not to variables.',
            'It ensures all floating-point calculations follow the <strong>IEEE 754 standard</strong>, giving platform-independent results.',
            '<strong>Rules:</strong>',
            '<ul><li>If a method is declared <code>strictfp</code>, all FP calculations in that method follow IEEE 754</li><li>If a class is declared <code>strictfp</code>, all its concrete methods follow IEEE 754</li><li><code>strictfp</code> and <code>abstract</code> is <strong>legal for classes but illegal for methods</strong></li></ul>'
          ]
        },
        {
          heading: 'Member Modifiers — Final Variables',
          content: [
            '<strong>Final Instance Variables:</strong> JVM does NOT provide default values — you must initialize before the constructor completes. Valid places to initialize:',
            '<ol><li>At the time of declaration: <code>final int i = 0;</code></li><li>Inside an instance initialization block: <code>{ i = 0; }</code></li><li>Inside the constructor: <code>Test() { i = 0; }</code></li></ol>',
            'Initializing in a regular method is a CE.',
            '<strong>Final Static Variables:</strong> same rule — must be initialized. Valid places:',
            '<ol><li>At the time of declaration: <code>final static int i = 0;</code></li><li>Inside a static block: <code>static { i = 0; }</code></li></ol>',
            'Initializing in <code>main</code> or any other method is a CE.',
            '<strong>Final Local Variables:</strong> must be initialized before use. If never used, initialization is optional (even with <code>final</code>).',
            '<strong>Formal parameters</strong> declared as <code>final</code> cannot be reassigned inside the method.'
          ],
          code: `class Test {
    final int x = 10;                    // OK: at declaration
    
    final int y;
    { y = 20; }                          // OK: instance initializer
    
    final int z;
    Test() { z = 30; }                   // OK: in constructor
    
    // final int w;
    // void setW() { w = 40; }           // CE: cannot assign in method
}`
        },
        {
          heading: 'Interface Methods and Variables',
          content: [
            '<strong>Interface methods</strong> are by default <code>public</code> and <code>abstract</code>. These declarations are equivalent:',
            '<code>void m1();</code> = <code>public void m1();</code> = <code>public abstract void m1();</code>',
            'These modifiers are <strong>NOT allowed</strong> on interface methods: <code>private</code>, <code>protected</code>, <code>static</code>, <code>final</code>, <code>native</code>, <code>strictfp</code>, <code>synchronized</code>.',
            '<strong>Interface variables</strong> are by default <code>public static final</code> (constants). These are equivalent:',
            '<code>int i = 10;</code> = <code>public int i = 10;</code> = <code>public static int i = 10;</code> = <code>public static final int i = 10;</code>',
            'Not allowed: <code>private</code>, <code>protected</code>, <code>volatile</code>, <code>transient</code>.',
            'Interface variables <strong>must be initialized at the time of declaration</strong>.',
            'Interface variables are inherited by implementing classes and can be accessed but <strong>cannot be reassigned</strong> (because they are final).'
          ],
          code: `interface Constants {
    int MAX = 100;          // public static final
    void show();             // public abstract
}

class MyClass implements Constants {
    public void show() {
        System.out.println("MAX = " + MAX);  // accessible
        // MAX = 200;  // CE: cannot assign to final variable
    }
}`
        },
        {
          heading: 'extends vs implements',
          content: [
            '<strong>extends</strong> is used for inheritance (class-to-class or interface-to-interface).',
            '<strong>implements</strong> is used for class-to-interface relationship.',
            'Rules:',
            '<ul><li>A <strong>class can extend only one class</strong> at a time (no multiple inheritance for classes)</li><li>A <strong>class can implement any number of interfaces</strong></li><li>An <strong>interface can extend any number of interfaces</strong></li><li>An <strong>interface CANNOT implement another interface</strong></li><li>A <strong>class CANNOT extend an interface</strong></li></ul>',
            'When implementing an interface method, the method <strong>must be declared public</strong>. Reducing visibility is a CE.'
          ],
          code: `interface A { void m1(); }
interface B { void m2(); }
interface C extends A, B { void m3(); }  // interface extending 2 interfaces

class Parent { }
class Child extends Parent implements A, B {  // extends 1 class, implements 2 interfaces
    public void m1() { }
    public void m2() { }
}`
        },
        {
          heading: 'Naming Conflicts in Interfaces',
          content: [
            '<strong>Case 1: Same signature in both interfaces</strong> — one implementation is enough.',
            '<strong>Case 2: Same name, different arguments</strong> — must implement both (overloaded methods).',
            '<strong>Case 3: Same signature, different return types</strong> — CANNOT implement both interfaces simultaneously (return type is part of method signature for overriding).',
            '<strong>Variable conflicts:</strong> if two interfaces have a variable with the same name, access it using the interface name: <code>Left.i</code> or <code>Right.i</code>. Direct reference to <code>i</code> is ambiguous.'
          ],
          code: `interface Left { int x = 10; }
interface Right { int x = 100; }

class Test implements Left, Right {
    public static void main(String[] args) {
        // System.out.println(x);  // CE: reference to x is ambiguous
        System.out.println(Left.x);   // 10
        System.out.println(Right.x);  // 100
    }
}`
        },
        {
          heading: 'Marker Interfaces',
          content: [
            'A <strong>marker interface</strong> (or tag interface) has no methods or fields. It marks a class to provide some special ability to its objects.',
            'Common examples: <code>Serializable</code>, <code>Cloneable</code>, <code>Remote</code>.',
            'By implementing a marker interface, your objects gain a specific capability recognized by the JVM or framework.'
          ],
          code: `import java.io.Serializable;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    int id;
    String name;
    
    Employee(int id, String name) {
        this.id = id;
        this.name = name;
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
        },
        {
          heading: 'SCJP Deep Dive: Increment & Decrement — Rules',
          content: [
            'Increment (<code>++</code>) and decrement (<code>--</code>) operators have four variants: pre-increment (<code>++x</code>), post-increment (<code>x++</code>), pre-decrement (<code>--x</code>), and post-decrement (<code>x--</code>).',
            '<strong>Pre-increment (++x):</strong> increments first, then returns the value.',
            '<code>x = 1; y = ++x;</code> → y = 2, x = 2',
            '<strong>Post-increment (x++):</strong> returns the value first, then increments.',
            '<code>x = 1; y = x++;</code> → y = 1, x = 2',
            '<strong>Key Rules:</strong>',
            "<ul><li>You <strong>cannot</strong> apply ++/-- to a <strong>constant</strong>: <code>int y = ++4;</code> ❌ CE: <em>unexpected type found: value required: variable</em></li><li>You <strong>cannot nest</strong> increment/decrement: <code>int y = ++(++x);</code> ❌ CE</li><li>You <strong>cannot apply</strong> to <strong>final variables</strong>: <code>final int x = 4; x++;</code> ❌ CE: <em>can't assign a value to final variable x</em></li><li>You <strong>can</strong> apply to <strong>floating-point</strong> variables: <code>double d = 10.5; d++;</code> ✅</li></ul>",
            '<strong>Difference between b++ and b = b+1:</strong> <code>b++</code> performs an increment on the variable in-place, while <code>b = b+1</code> creates a new value. <code>b++</code> works on all numeric types including byte, while <code>b = b+1</code> requires a cast when b is byte or short.'
          ],
          code: `public class IncrementRules {
    public static void main(String[] args) {
        int x = 4;
        int y = ++x;        // pre-increment: y=5, x=5
        System.out.println("y = " + y + ", x = " + x);
        
        int a = 4;
        int b = a++;        // post-increment: b=4, a=5
        System.out.println("b = " + b + ", a = " + a);
        
        // Works on floating-point
        double d = 10.5;
        d++;
        System.out.println("d after ++: " + d);  // 11.5
        
        // Invalid - constant
        // int z = ++5;    // CE: unexpected type
        
        // Invalid - nesting
        // int n = ++(++x); // CE: unexpected type
        
        // Invalid - final
        final int f = 4;
        // f++;             // CE: can't assign a value to final variable
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Arithmetic Operators (8 Total)',
          content: [
            'Java has <strong>8 arithmetic operators</strong>:',
            '<ul><li><code>+</code> Addition</li><li><code>-</code> Subtraction</li><li><code>*</code> Multiplication</li><li><code>/</code> Division</li><li><code>%</code> Modulo (remainder)</li><li><code>++</code> Increment (unary)</li><li><code>--</code> Decrement (unary)</li><li><code>-</code> Unary minus (negation)</li></ul>',
            '<strong>Binary numeric promotion rules:</strong>',
            '<ul><li>If mixed floating-point and integer types, floating-point arithmetic is used and a floating-point value is returned</li><li>If mixed integer types, the wider type is returned (e.g., int + long → long)</li><li>If double and float are mixed, double is returned</li></ul>',
            '<strong>Special cases with division by zero:</strong>',
            '<ul><li><code>4.0 / 0.0</code> → prints <code>Infinity</code></li><li><code>-4.0 / 0.0</code> → prints <code>-Infinity</code></li><li><code>0.0 / 0.0</code> → prints <code>NaN</code></li><li>Integer division by zero → <code>ArithmeticException</code></li></ul>',
            '<strong>Integer overflow wraps around:</strong>',
            '<code>int tooBig = Integer.MAX_VALUE + 1;</code> → becomes <code>Integer.MIN_VALUE</code> (-2147483648)',
            '<code>int tooSmall = Integer.MIN_VALUE - 1;</code> → becomes <code>Integer.MAX_VALUE</code> (2147483647)',
            '<strong>Modulo special cases:</strong>',
            '<ul><li>FP arithmetic: if y = 0.0 or infinity, result is NaN</li><li>Integer arithmetic: <code>ArithmeticException</code> if y = 0</li></ul>'
          ],
          code: `public class ArithmeticAdvanced {
    public static void main(String[] args) {
        // Special floating-point cases
        System.out.println(4.0 / 0.0);     // Infinity
        System.out.println(-4.0 / 0.0);    // -Infinity
        System.out.println(0.0 / 0.0);     // NaN
        
        // Integer overflow wraps
        int tooBig = Integer.MAX_VALUE + 1;   // becomes Integer.MIN_VALUE
        int tooSmall = Integer.MIN_VALUE - 1; // becomes Integer.MAX_VALUE
        System.out.println("tooBig = " + tooBig);
        System.out.println("tooSmall = " + tooSmall);
        
        // Mixed type promotion
        double d1 = 12 / 8;       // 1.0 (integer division first, then promoted)
        double d2 = 12.0F / 8;    // 1.5 (float division)
        System.out.println("d1 = " + d1 + ", d2 = " + d2);
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: String Concatenation Operator (+)',
          content: [
            'The binary <code>+</code> operator is <strong>overloaded</strong> in Java — its behavior depends on the operand types.',
            'When <strong>at least one operand is a String</strong>, the other operand is implicitly converted to its string representation, and string concatenation is performed.',
            `<code>String message = 100 + " Messages";</code> → <code>"100 Messages"</code>`,
            '<strong>This is the ONLY case of operator overloading in Java.</strong> You cannot overload operators for your own classes.',
            'The <code>+=</code> operator also performs string concatenation when the left operand is a String.',
            '<strong>Order of evaluation matters in mixed expressions:</strong>',
            `<code>System.out.println(10 + 20 + "Hello");</code> → <code>"30Hello"</code> (left-to-right: 10+20=30, then 30+"Hello")`,
            `<code>System.out.println("Hello" + 10 + 20);</code> → <code>"Hello1020"</code> (left-to-right: "Hello"+10="Hello10", then +20)`
          ],
          code: `public class StringConcat {
    public static void main(String[] args) {
        // Concatenation when either operand is String
        String s1 = "Hello" + "World";      // "HelloWorld"
        String s2 = "Value: " + 100;        // "Value: 100"
        String s3 = 100 + " Messages";      // "100 Messages"
        
        // Left-to-right evaluation
        System.out.println(10 + 20 + "Hello");  // 30Hello
        System.out.println("Hello" + 10 + 20);  // Hello1020
        System.out.println("Hello" + (10 + 20)); // Hello30 (parentheses)
        
        // += also concatenates
        String s = "Start";
        s += 123;       // s = "Start123"
        s += true;      // s = "Start123true"
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Bitwise Operators (7 Total)',
          content: [
            'Java provides <strong>7 bitwise operators</strong> for manipulating individual bits:',
            '<ul><li><code>&</code> Bitwise AND</li><li><code>|</code> Bitwise inclusive OR</li><li><code>^</code> Bitwise exclusive OR (XOR)</li><li><code>~</code> Bitwise complement (NOT)</li><li><code><<</code> Signed left shift</li><li><code>>></code> Signed right shift (preserves sign)</li><li><code>>>></code> Unsigned right shift (fills with 0)</li></ul>',
            'Operands must be of numeric data type (<code>char</code>, <code>short</code>, <code>int</code>, or <code>long</code>).',
            'There is <strong>NO unsigned left shift</strong> operator in Java.',
            '<strong>Operations on byte/short may give unexpected results</strong> because operands are promoted to <code>int</code> during intermediate operations. For example, <code>(byte)0xFF >>> 1</code> gives <code>0xFF</code> (not <code>0x7F</code>) because the byte is first sign-extended to <code>int</code> (becomes <code>0xFFFFFFFF</code>) before shifting.',
            '<strong>Bitwise truth table:</strong>',
            '<ul><li><code>&</code>: 1&1=1, otherwise 0</li><li><code>|</code>: 0|0=0, otherwise 1</li><li><code>^</code>: same bits=0, different bits=1</li><li><code>~</code>: flips every bit (1→0, 0→1)</li></ul>'
          ],
          code: `public class BitwiseDemo {
    public static void main(String[] args) {
        int x = 0xFAEF;  // 1111 1010 1110 1111
        int y = 0xF8E9;  // 1111 1000 1110 1001
        
        System.out.println("x & y:  " + (x & y));   // AND
        System.out.println("x | y:  " + (x | y));   // OR
        System.out.println("x ^ y:  " + (x ^ y));   // XOR
        System.out.println("~x:     " + (~x));      // complement
        
        // Shifts
        System.out.println("x << 4: " + (x << 4));   // signed left shift
        System.out.println("x >> 4: " + (x >> 4));   // signed right shift
        System.out.println("x >>> 4:" + (x >>> 4));  // unsigned right shift
        
        // byte/short pitfall
        byte b = (byte) 0xFF;     // 0xFF as signed byte = -1
        int result = b >>> 1;     // promotes to 0xFFFFFFFF, then shifts → 0x7FFFFFFF
        System.out.println("b >>> 1 = " + result);
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Short-Circuit vs Boolean Operators',
          content: [
            'Java has two pairs of logical operators that look similar but behave differently:',
            '<strong>Short-circuit (&&, ||):</strong>',
            '<ul><li><code>&&</code>: if the first operand is false, the second is <strong>NOT evaluated</strong></li><li><code>||</code>: if the first operand is true, the second is <strong>NOT evaluated</strong></li></ul>',
            '<strong>Non-short-circuit (&, |, ^):</strong>',
            '<ul><li><code>&</code> Boolean AND: both operands are <strong>always evaluated</strong></li><li><code>|</code> Boolean OR: both operands are <strong>always evaluated</strong></li><li><code>^</code> Boolean XOR: both operands are always evaluated</li></ul>',
            '<strong>Why it matters:</strong> short-circuit evaluation can prevent runtime errors. For example, <code>str != null && str.length() > 0</code> avoids a <code>NullPointerException</code>.',
            '<strong>Truth table:</strong>',
            '<ul><li><code>x & y</code> = true only if both are true</li><li><code>x | y</code> = true if at least one is true</li><li><code>x ^ y</code> = true if exactly one is true</li><li><code>!x</code> = inverts the boolean</li></ul>'
          ],
          code: `public class ShortCircuit {
    public static void main(String[] args) {
        int a = 5, b = 10;
        
        // Short-circuit: second part not evaluated if first is false
        if (a > 10 && b++ > 5) {  // a>10 is false, b++ never runs
            System.out.println("Inside");
        }
        System.out.println("b = " + b);  // b is still 10
        
        // Non-short-circuit: both parts always evaluated
        if (a > 10 & b++ > 5) {  // a>10 is false, but b++ still runs
            System.out.println("Inside");
        }
        System.out.println("b after &: " + b);  // b is now 11
        
        // Safety with short-circuit
        String str = null;
        if (str != null && str.length() > 0) {  // safe: second part not evaluated
            System.out.println("Non-empty");
        }
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: instanceof Operator',
          content: [
            'The <code>instanceof</code> operator checks whether an object is an instance of a specific class or implements an interface.',
            '<strong>Syntax:</strong> <code>objectReference instanceof ClassOrInterface</code>',
            '<strong>Returns:</strong> <code>true</code> if the object is an instance of the type (or a subclass/sub-interface), <code>false</code> otherwise.',
            '<code>if (x instanceof String) { ... }</code> ✅ — checks if x is a String',
            '<code>if (x instanceof Runnable) { ... }</code> ✅ — checks if x implements Runnable',
            '<strong>After Java 16 (Pattern Matching):</strong>',
            '<code>if (x instanceof String s) { System.out.println(s.length()); }</code> — declares and casts in one step.'
          ],
          code: `class Animal {}
class Dog extends Animal {}
interface Pet {}
class Cat extends Animal implements Pet {}

public class InstanceOfDemo {
    public static void main(String[] args) {
        Animal a = new Dog();
        
        System.out.println(a instanceof Animal);  // true
        System.out.println(a instanceof Dog);     // true
        System.out.println(a instanceof Pet);     // false (Dog doesn't implement Pet)
        
        Animal b = new Cat();
        System.out.println(b instanceof Pet);     // true (Cat implements Pet)
        
        Object obj = "Hello";
        if (obj instanceof String) {
            String s = (String) obj;
            System.out.println(s.length());  // 5
        }
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Ternary (Conditional) Operator',
          content: [
            'The <code>? :</code> operator is the <strong>only ternary operator</strong> (takes 3 operands) in Java.',
            '<strong>Syntax:</strong> <code>booleanExpression ? valueIfTrue : valueIfFalse</code>',
            'It is the expression equivalent of the <code>if-else</code> statement.',
            'The conditional operator <strong>associates from right to left</strong>: <code>a ? b ? c ? d : e : f : g</code> evaluates as <code>a ? (b ? (c ? d : e) : f) : g</code>',
            'Both <code>valueIfTrue</code> and <code>valueIfFalse</code> must be assignment-compatible (same type or one can be promoted to the other).'
          ],
          code: `public class TernaryDemo {
    public static void main(String[] args) {
        int x = 10, y = 12;
        int z = x > y ? x : y;  // z = 12
        System.out.println("z = " + z);
        
        // Nested ternary (right-to-left associativity)
        boolean t1 = false ? false : true ? false : true ? false : true;
        // Evaluates as: false ? false : (true ? false : (true ? false : true))
        //             = false ? false : (true ? false : true)
        //             = false ? false : false
        //             = false
        System.out.println("t1 = " + t1);
        
        // Type promotion
        int a = 5;
        double b = 3.14;
        double result = (a > 3) ? a : b;  // int promoted to double
        System.out.println("result = " + result);
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: new Operator',
          content: [
            'The <code>new</code> operator is used to <strong>create instances of classes (objects)</strong>.',
            '<strong>Syntax:</strong> <code>new ClassName(arguments)</code>',
            'It calls the appropriate constructor based on the arguments provided.',
            'The <code>new</code> operator returns a reference to the newly created object.',
            'For arrays: <code>new int[10]</code> creates an int array of size 10.',
            'For inner classes: <code>outer.new InnerClass()</code> requires an instance of the outer class.'
          ],
          code: `public class NewOperator {
    public static void main(String[] args) {
        // Creating objects
        String s = new String("Hello");
        Integer i = new Integer(42);
        
        // Array creation
        int[] arr = new int[5];
        int[][] matrix = new int[3][2];
        int[][] jagged = new int[3][];  // 2D with only first dim
        
        // Anonymous array (SCJP detail)
        int total = sum(new int[]{1, 2, 3, 4, 5});
    }
    
    static int sum(int[] nums) {
        int t = 0;
        for (int n : nums) t += n;
        return t;
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: [] Array Element Access',
          content: [
            'The <code>[]</code> operator is used to <strong>access elements of an array</strong>.',
            'The index inside the brackets must be an <strong>int-compatible value</strong> (byte, short, char, int are promoted to int).',
            '<code>long</code>, <code>float</code>, <code>double</code>, and <code>boolean</code> are <strong>NOT allowed</strong> as array indices — compile-time error.',
            'Accessing an out-of-range index throws <code>ArrayIndexOutOfBoundsException</code> at runtime.',
            'In Java, arrays are objects (unlike C/C++), but the bracket operator works similarly.'
          ],
          code: `public class ArrayAccess {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        
        // Valid indices
        System.out.println(arr[0]);      // 10
        System.out.println(arr[2 + 1]);  // 40 (expression evaluated)
        
        // char promoted to int
        char c = 2;
        System.out.println(arr[c]);      // 30
        
        // Invalid: long as index
        long l = 2L;
        // System.out.println(arr[l]);   // CE: possible lossy conversion
        
        // Runtime error: out of range
        // System.out.println(arr[10]);  // ArrayIndexOutOfBoundsException
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Operators Precedence',
          content: [
            'Operators with <strong>higher precedence</strong> are applied first. If two operators have the same precedence, they are applied left-to-right (except assignment, which is right-to-left).',
            'You can use parentheses <code>()</code> to override the default precedence.',
            '<strong>Precedence table (high to low):</strong>',
            '<ul><li><strong>Postfix:</strong> <code>[] . () expr++ expr--</code></li><li><strong>Unary:</strong> <code>++expr --expr +expr -expr ! ~</code></li><li><strong>Creation/Cast:</strong> <code>new (type)expr</code></li><li><strong>Multiplicative:</strong> <code>* / %</code></li><li><strong>Additive:</strong> <code>+ -</code></li><li><strong>Shift:</strong> <code><< >> >>></code></li><li><strong>Relational:</strong> <code>< <= > >= instanceof</code></li><li><strong>Equality:</strong> <code>== !=</code></li><li><strong>Bitwise AND:</strong> <code>&</code></li><li><strong>Bitwise XOR:</strong> <code>^</code></li><li><strong>Bitwise OR:</strong> <code>|</code></li><li><strong>Logical AND:</strong> <code>&&</code></li><li><strong>Logical OR:</strong> <code>||</code></li><li><strong>Ternary:</strong> <code>?:</code></li><li><strong>Assignment:</strong> <code>= += -= *= /= %= &= |= ^= <<= >>= >>>=</code></li></ul>',
            '<strong>Example:</strong> In <code>4 + 5 * 3</code>, multiplication is applied first: <code>5 * 3 = 15</code>, then <code>4 + 15 = 19</code>.'
          ],
          code: `public class Precedence {
    public static void main(String[] args) {
        int a = 4 + 5 * 3;            // 4 + 15 = 19
        int b = (4 + 5) * 3;          // 9 * 3 = 27 (parentheses)
        int c = 10 - 2 + 3;           // 8 + 3 = 11 (left-to-right for same precedence)
        int d = 20 / 4 * 2;           // 5 * 2 = 10
        
        // Ternary has lower precedence than most operators
        int x = 10, y = 5;
        boolean result = x > y && y > 0;  // (x > y) && (y > 0) = true && true = true
        System.out.println("a=" + a + ", b=" + b + ", c=" + c + ", d=" + d);
        System.out.println("result=" + result);
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Evaluation Order of Operands',
          content: [
            'Java guarantees that operands are evaluated from <strong>left to right</strong> before the operator is applied.',
            'This is especially important for short-circuit operators and method calls with side effects.',
            '<strong>Example — method calls with side effects:</strong>',
            '<code>int a = 5; int b = (a++) + (a++) + a;</code> → <code>b = 5 + 6 + 7 = 18</code>, <code>a = 7</code>',
            '<strong>Rule:</strong> each operand is fully evaluated to a value before the operator combines them. The order is left-to-right.'
          ],
          code: `public class EvaluationOrder {
    public static void main(String[] args) {
        int a = 5;
        int b = (a++) + (a++) + a;  // 5 + 6 + 7 = 18
        System.out.println("a = " + a + ", b = " + b);
        
        // Short-circuit affects evaluation order
        int x = 5;
        if (x++ > 5 && ++x > 10) {  // x=5, x++=5 then x=6; first is false, ++x not evaluated
            // not entered
        }
        System.out.println("x = " + x);  // 6 (only post-increment ran)
        
        // Function call side effects
        int i = 0;
        int result = i++ + i++ + i++;  // 0 + 1 + 2 = 3
        System.out.println("i = " + i + ", result = " + result);
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
            `<code>break</code> exits the switch — without it, execution "falls through" to the next case.`,
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
        },
        {
          heading: 'Selection Statements: if-else',
          content: [
            'In an <code>if-else</code> statement, the <code>else</code> part and curly braces are <strong>optional</strong>.',
            'Without curly braces, only <strong>1 statement</strong> is allowed under the <code>if</code>. That statement <strong>cannot be a declarative statement</strong> — otherwise it is a CE.',
            '<code>if(true) int i = 10;</code> ❌ CE — declarative statement not allowed.',
            '<code>if(true) { int i = 10; }</code> ✅ OK.'
          ]
        },
        {
          heading: 'Switch Statement — Valid Argument Types',
          content: [
            'Curly braces around the switch body are <strong>mandatory</strong>.',
            'The following are the <strong>valid argument types</strong> for a <code>switch</code> statement: <code>byte</code>, <code>short</code>, <code>char</code>, <code>int</code>, and (since Java 7) <code>String</code>. <strong>Wrapper types</strong> like <code>Byte</code>, <code>Short</code>, <code>Character</code>, <code>Integer</code> are also valid via auto-unboxing.',
            '<strong>Not allowed</strong> as switch arguments: <code>long</code>, <code>float</code>, <code>double</code>, <code>boolean</code>.'
          ]
        },
        {
          heading: 'Switch Statement — case and default Rules',
          content: [
            'Inside a switch, both <code>case</code> and <code>default</code> are <strong>optional</strong>. Empty switch is valid: <code>switch(i) {}</code> ✅',
            `Every statement inside switch must belong to some <code>case</code> or <code>default</code>. <strong>Independent statements are not allowed</strong>: <code>switch(i) { System.out.println("Hello"); }</code> ❌ <em>CE: case or default expected</em>.`,
            '<strong>Case label rules:</strong>',
            '<ul><li>Case labels must be <strong>compile-time constants</strong>. Using a non-final variable as a case label is a CE.</li><li>Case labels must be in the <strong>range of the switch argument type</strong> (e.g., for <code>byte</code>, must be -128 to 127).</li><li>Case labels can be constant expressions like <code>30+40</code>.</li><li><strong>Duplicate case labels are not allowed</strong>.</li></ul>',
            '<strong>Default case</strong> can be placed anywhere in the switch. Convention is to place it at the end. If matched case has no <code>break</code>, execution falls through to subsequent cases (and default) until a break or end of switch.'
          ],
          code: `int x = 2;
switch (x) {
    case 0: System.out.println("0");
    case 1: System.out.println("1"); break;
    case 2: System.out.println("2");
    default: System.out.println("default");
}
// Output: 2, default   (no break before default)

switch (x) {
    default: System.out.println("default");
    case 0: System.out.println("0"); break;
    case 1: System.out.println("1");
    case 2: System.out.println("2");
}
// x=0 -> "0"
// x=1 -> "1", "2"
// x=2 -> "2"
// x=3 -> "default"`
        },
        {
          heading: 'Iterative Statements: while loop',
          content: [
            '<strong>Unreachable statement after while</strong> — if the compiler can determine the loop never exits, any code after the loop is a CE:',
            `<ul><li><code>while(true) { } System.out.println("Hello");</code> ❌ CE — unreachable</li><li><code>while(false) { } System.out.println("Hello");</code> ❌ CE — unreachable</li><li><code>while(10 &lt; 20) { } System.out.println("Hello");</code> ❌ CE — constant expression, unreachable</li></ul>`,
            'If variables are involved, the compiler cannot determine reachability, so no error:',
            `<code>int a=10,b=20; while(a&lt;b) { } System.out.println("Hello");</code> ✅ — infinite loop, but no CE.`,
            `If the variables are <code>final</code>, the compiler treats them as constants again: <code>final int a=10,b=20; while(a&lt;b) { } System.out.println("Hello");</code> ❌ CE.`
          ]
        },
        {
          heading: 'Iterative Statements: do-while loop',
          content: [
            'Use <code>do-while</code> when the loop body must execute at least once.',
            'The <strong>semicolon after <code>while</code> is mandatory</strong> in Java (unlike C++).',
            'Curly braces are optional. Without braces, only 1 statement is allowed between <code>do</code> and <code>while</code>, and it must not be declarative.',
            '<strong>Unreachable rules for do-while</strong> (opposite of while):',
            `<ul><li><code>do { } while(true); System.out.println("Hello");</code> ❌ CE — unreachable</li><li><code>do { } while(false); System.out.println("Hello");</code> ✅ — runs once, "Hello" prints</li></ul>`,
            'Same final-variable rule: <code>final int a=10,b=20; do { } while(a&lt;b);</code> ❌ CE.'
          ],
          code: `// Semicolon after do is allowed (empty statement)
int a = 10, b = 20;
do;
while (a > b);

// do-while with unreachable code
do {
    System.out.println("Hi");
} while (false);
System.out.println("Hello");
// Output: Hi, Hello   (loop runs once)`
        },
        {
          heading: 'Iterative Statements: for loop',
          content: [
            'Syntax: <code>for(initialization; condition; increment/decrement) { }</code>',
            '<strong>Initialization section:</strong> Only variables of the <strong>same type</strong> can be declared. <code>for(int i=10, j=20)</code> ✅. <code>for(int i=0, long j=0)</code> ❌ CE. Any valid Java statement (including <code>sop</code>) is allowed.',
            '<strong>Condition section:</strong> Must evaluate to a <code>boolean</code>. It is <strong>optional</strong> — default is <code>true</code>. <code>for(int i=0; ; i++) { }</code> — infinite loop, no CE.',
            '<strong>Increment/decrement section:</strong> Any valid Java statement is allowed (including <code>sop</code>).',
            '<strong>All 3 parts of the for loop are independent and optional.</strong> <code>for(;;);</code> is a valid infinite loop.',
            `Unreachable-code rules apply: <code>for(int i=0; true; i++) { } System.out.println("Hi");</code> ❌ CE. <code>for(int i=0; false; i++) { }</code> ❌ CE.`
          ],
          code: `// All 3 parts are independent and optional
for (System.out.println("Hi"); ; System.out.println("Hello")) {
    System.out.println("xyz");
    break;  // avoid true infinite
}
// Output: Hi, xyz, Hello

// Mixed type in init -> CE
// for (int i = 0, long j = 0; ; ) { }    // CE: different types

// sop in init and increment
int i;
for (System.out.println("init"); i < 3; System.out.println("inc")) {
    i++;
}`
        },
        {
          heading: 'Iterative Statements: for-each loop (Java 1.5+)',
          content: [
            'The <strong>for-each</strong> (enhanced for) loop is the most convenient loop for accessing elements of <strong>arrays and collections</strong>. It was introduced in Java 1.5.',
            'Syntax: <code>for (type var : arrayOrCollection) { ... }</code>',
            '<strong>Limitation:</strong> it works <strong>only for arrays and collections</strong>. It is not a general-purpose loop and does not give access to the index.',
            'For multidimensional arrays, you can nest for-each loops.'
          ],
          code: `// 1D array
int[] a = {10, 20, 30};
for (int x : a) {
    System.out.println(x);
}

// 2D array
String[][] s = { {"A", "B"}, {"C", "D", "E"} };
for (String[] row : s) {
    for (String y : row) {
        System.out.println(y);
    }
}`
        },
        {
          heading: 'Transfer Statements: break',
          content: [
            'The <code>break</code> statement can be used in <strong>three places only</strong>:',
            '<ol><li>Inside a loop to come out of the loop</li><li>Inside a <code>switch</code> to come out of the switch</li><li>Inside a <strong>labeled block</strong> (rare; to break out of a labeled block)</li></ol>',
            'Using <code>break</code> <strong>anywhere else</strong> is a CE:',
            '<code>int x = 0; if (x != 5) break;</code> ❌ <em>CE: break outside switch or loop</em>'
          ]
        },
        {
          heading: 'Transfer Statements: continue',
          content: [
            'The <code>continue</code> statement can be used <strong>only inside loops</strong> to skip the current iteration and move to the next one.',
            `Using <code>continue</code> outside a loop is a CE: <em>"continue outside of loop"</em>.`,
            '<code>continue</code> is <strong>not allowed inside a <code>switch</code></strong> by itself — it is only valid when the switch is inside a loop.'
          ],
          code: `// Print only odd numbers from 0 to 9
for (int i = 0; i < 10; i++) {
    if ((i % 2) == 0) {
        continue;   // skip even numbers
    }
    System.out.print(i);
}
// Output: 13579`
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
            `All elements are automatically initialized: <code>0</code> for numbers, <code>false</code> for booleans, <code>\\u0000</code> for chars.`
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
        },
        {
          heading: 'SCJP Deep Dive: Array Declaration',
          content: [
            'There are multiple valid ways to declare an array:',
            '<ul><li><code>int[] a;</code> — <strong>recommended</strong> (type clearly separated from name)</li><li><code>int a[];</code> — legal but not recommended</li></ul>',
            'At the time of <strong>declaration only</strong>, you are <strong>not allowed to specify the size</strong>:',
            '<code>int[] a;</code> ✅ valid',
            '<code>int[6] a;</code> ❌ <em>CE: illegal start of type</em> — size is only allowed at construction with <code>new</code>',
            'Arrays are internally implemented as <strong>objects</strong> in Java, so the <code>new</code> keyword is used to construct them.'
          ]
        },
        {
          heading: 'SCJP Deep Dive: Array Construction Rules',
          content: [
            'When constructing an array with <code>new</code>, you must specify the size. Violation gives a compile-time error.',
            '<ul><li><code>int[] a = new int[10];</code> ✅ valid</li><li><code>int[] a = new int[];</code> ❌ CE (size required)</li><li><code>int[] a = new int[0];</code> ✅ valid (zero-length array is legal — no CE or RE)</li><li><code>int[] a = new int[-10];</code> ❌ <em>RE: NegativeArraySizeException</em> at runtime</li></ul>',
            '<strong>Allowed data types for the size:</strong> <code>byte</code>, <code>short</code>, <code>char</code>, <code>int</code> only.',
            '<ul><li><code>int[] a = new int[10l];</code> ❌ <em>CE: possible loss of precision found: long required: int</em> (long not allowed)</li><li><code>int[] a = new int[10.5];</code> ❌ CE (double not allowed)</li><li><code>int[] a = new int[true];</code> ❌ <em>CE: Incompatible types found: boolean required: int</em></li></ul>',
            '<strong>Maximum allowed array size:</strong> 2,147,483,648 (just over 2^31).',
            'Printing an array reference gives output like <code>[I@10b62c9</code> — <code>[I</code> means one-dimensional int array, followed by the hash code.'
          ],
          code: `public class ArrayConstruction {
    public static void main(String[] args) {
        // Valid constructions
        int[] a = new int[10];
        int[] zero = new int[0];      // legal zero-length array
        // int[] neg = new int[-10];  // RE: NegativeArraySizeException

        // Default values after construction
        System.out.println(a[0]);     // 0 (default for int)
        System.out.println(a);        // [I@10b62c9 (class name + hashcode)

        // Multi-dim: 2D implemented as array of arrays
        int[][] matrix = new int[3][2];  // 3 rows, 2 cols
        System.out.println(matrix[0][0]); // 0
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Default Values & ArrayIndexOutOfBounds',
          content: [
            'Once you create an array, all elements are initialized to <strong>default values</strong>:',
            `<ul><li>Numeric types: <code>0</code></li><li><code>boolean</code>: <code>false</code></li><li><code>char</code>: <code>\\u0000</code> (blank)</li><li>Object references: <code>null</code></li></ul>`,
            'Accessing an index outside the valid range (0 to length-1) throws <code>ArrayIndexOutOfBoundsException</code> at <strong>runtime</strong> (no compile-time error).',
            '<ul><li><code>a[10] = 100;</code> ❌ RE if 10 is out of range</li><li><code>a[-10] = 100;</code> ❌ RE if -10 is out of range</li><li><code>a[10.5] = 100;</code> ❌ <em>CE: PossibleLossOfPrecision found: double required: int</em> (only int-compatible index allowed)</li></ul>',
            'You can use <code>byte</code>, <code>short</code>, or <code>char</code> as the index (they are promoted to <code>int</code>).',
            'You <strong>cannot</strong> use <code>float</code>, <code>double</code>, <code>long</code>, or <code>boolean</code> as an index — these give a compile-time error.'
          ]
        },
        {
          heading: 'SCJP Deep Dive: Declaration + Construction + Initialization in One Line',
          content: [
            'You can declare, construct, and initialize an array in a single line using the <strong>shortcut syntax</strong>:',
            '<code>int[] a = {10, 20, 30};</code>',
            `<code>String[] s = {"Chiru", "Allu", "Ram", "Akil"};</code>`,
            '<strong>Rule:</strong> the shortcut syntax only works when <strong>all three actions are done in the same statement</strong>. You cannot split them across lines:',
            '<code>int[] a; a = {10, 20, 30, 40};</code> ❌ <em>CE: illegal start of expression</em>',
            'Multidimensional shortcut example: <code>int[][] a = {{10, 20}, {30, 40, 50}};</code>'
          ],
          code: `public class ArrayInit {
    public static void main(String[] args) {
        // Valid: all three in one line
        int[] a = {10, 20, 30};
        String[] names = {"Alice", "Bob", "Charlie"};

        // Multidimensional shortcut
        int[][] matrix = {{1, 2}, {3, 4, 5}};

        // Invalid: shortcut on second line
        int[] b;
        // b = {10, 20, 30};  // CE: illegal start of expression
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: length vs length()',
          content: [
            'This is one of the most commonly confused concepts.',
            '<strong>length</strong> (no parentheses):',
            '<ul><li>It is a <strong>final variable</strong> applicable for <strong>array objects</strong></li><li>It represents the <strong>size of the array</strong></li><li><code>int[] a = new int[5]; System.out.println(a.length);</code> prints 5</li><li><code>System.out.println(a.length());</code> ❌ CE (cannot call method on length)</li></ul>',
            '<strong>length()</strong> (with parentheses):',
            `<ul><li>It is a <strong>final method</strong> applicable only for <strong>String objects</strong></li><li>It represents the <strong>number of characters</strong> in the String</li><li><code>String s = "raju"; System.out.println(s.length());</code> prints 4</li><li><code>System.out.println(s.length);</code> ❌ CE (length is a method, not a field)</li></ul>`,
            '<strong>For multidimensional arrays:</strong> <code>length</code> always represents the <strong>base size</strong> (number of rows in a 2D array), not the total number of elements. There is <strong>no variable</strong> that gives the total count of elements in a multidimensional array.'
          ],
          code: `public class LengthDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        String str = "hello";
        int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};

        // Array length (final variable)
        System.out.println("arr.length: " + arr.length);      // 5

        // String length() (final method)
        System.out.println("str.length(): " + str.length());  // 5

        // 2D array length = base size (rows), not total elements
        System.out.println("matrix.length: " + matrix.length);        // 3 (rows)
        System.out.println("matrix[0].length: " + matrix[0].length);  // 2 (cols in row 0)
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Anonymous Arrays',
          content: [
            'Sometimes you need an array without giving it a name — for one-time use, such as passing to a method.',
            'These are called <strong>anonymous arrays</strong>.',
            '<code>new int[]{10, 20, 30}</code> — creates an array literal with no name assigned.',
            'You cannot specify a size with anonymous arrays — the size is inferred from the values.'
          ],
          code: `public class AnonymousArrays {
    public static void main(String[] args) {
        // Pass anonymous array to method
        System.out.println("Sum: " + sum(new int[]{10, 20, 30, 40}));
    }

    public static int sum(int[] a) {
        int total = 0;
        for (int i = 0; i < a.length; i++) {
            total += a[i];
        }
        return total;
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Array Element Assignments',
          content: [
            'In <strong>primitive type arrays</strong>, any value that can be implicitly promoted to the declared type is allowed:',
            "<ul><li>For <code>int[]</code>: <code>byte</code>, <code>short</code>, <code>char</code>, <code>int</code> are all valid</li><li><code>a[0] = 10;</code> ✅ (int)</li><li><code>a[1] = 'a';</code> ✅ (char → int)</li><li><code>a[2] = b;</code> ✅ (byte → int)</li><li><code>a[3] = 10.5;</code> ❌ <em>CE: possible loss of precision found: double required: int</em></li></ul>",
            'In <strong>object type arrays</strong>, you can assign either the declared type or any of its <strong>child class</strong> objects:',
            '<code>Number[] n = new Number[6];</code>',
            '<code>n[0] = new Integer(10);</code> ✅ (Integer is a child of Number)',
            '<code>n[1] = new Long(10L);</code> ✅ (Long is a child of Number)',
            `<code>n[2] = new String("raju");</code> ❌ <em>CE: Incompatible types found: String required: Number</em>`,
            'For <strong>interface type arrays</strong>, you can assign any implementation class:',
            '<code>Runnable[] r = new Runnable[10];</code>',
            '<code>r[0] = new Thread();</code> ✅ (Thread implements Runnable)'
          ]
        },
        {
          heading: 'SCJP Deep Dive: Array Variable Assignments',
          content: [
            'When you assign one array to another, the <strong>compiler checks only the type, not the size</strong>.',
            '<code>int[] a = {10, 20, 30, 40};</code>',
            '<code>int[] b = {60, 70};</code>',
            '<code>a = b;</code> ✅ valid (sizes can differ)',
            '<code>b = a;</code> ✅ valid',
            'A <strong>char</strong> element can be promoted to <strong>int</strong>, but a <strong>char[] cannot be promoted to int[]</strong> (array types are not compatible):',
            '<code>int[] c = new int[6]; int[] d = c;</code> ✅ valid',
            "<code>char[] ch = {'a', 'b', 'c'}; int[] c = ch;</code> ❌ <em>CE: Incompatible types found: char[] required: int[]</em>",
            'Quick check — which of these are valid?',
            '<ul><li><code>int → double</code> ✅ element-wise promotion</li><li><code>float → long</code> ✅ element-wise promotion</li><li><code>int[] → float[]</code> ❌ array types are not compatible</li><li><code>char[] → int[]</code> ❌ array types are not compatible</li><li><code>boolean → int</code> ❌ no promotion (boolean is not numeric)</li><li><code>int → Boolean</code> ❌ no promotion (Boolean is wrapper for boolean, not int)</li></ul>',
            'For multidimensional arrays, row assignment is checked by type, not size:',
            '<code>int[][] a = new int[3][]; a[0] = new int[4];</code> ✅ valid',
            '<code>a[1] = new int[4][5];</code> ❌ <em>CE: Incompatible types found: int[][] required: int[]</em>',
            '<code>a[2] = 10;</code> ❌ <em>CE: Incompatible types found: int required: int[]</em>'
          ],
          code: `public class ArrayAssignment {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40};
        int[] b = {60, 70};

        // Sizes can differ - only types checked
        a = b;  // valid
        b = a;  // valid

        // For multi-dim, row assignment is checked by type
        int[][] matrix = new int[3][];
        matrix[0] = new int[4];             // ✅ int[] assigned to int[] slot
        // matrix[1] = new int[4][5];       // ❌ CE: int[][] required: int[]
        // matrix[2] = 10;                  // ❌ CE: int required: int[]
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
            `Strings are <strong>immutable</strong> — once created, they cannot be changed. Any "modification" creates a new String.`,
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
            `Java 15+ also supports text blocks with <code>"""</code> for multi-line strings.`
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
            `Check if a string starts with the letter "A".`,
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
        },
        {
          heading: 'String Immutability',
          content: [
            'Once a <code>String</code> object is created, you <strong>cannot perform any changes</strong> on it. If you try, a <strong>new</strong> <code>String</code> object is created. This is the <strong>immutability of String</strong>.',
            `<code>s1.concat("Lesto")</code> does <strong>not</strong> modify <code>s1</code>; it returns a new String. The reference <code>s1</code> is still pointing to the original "raju".`
          ],
          code: `String s1 = new String("raju");
s1.concat("Lesto");
System.out.println(s1);   // raju (unchanged - immutability)

// To capture the change, reassign:
s1 = s1.concat("Lesto");
System.out.println(s1);   // rajuLesto`
        },
        {
          heading: 'String Constant Pool (SCP)',
          content: [
            'The <strong>String Constant Pool (SCP)</strong> is a special memory area in the heap that stores string literals.',
            `<code>String s = new String("raju")</code> — 2 objects: one on the <strong>heap</strong>, one in the <strong>SCP</strong>. <code>s</code> refers to the heap object.`,
            `<code>String s = "raju"</code> — 1 object in the SCP. If the object is already available in the SCP, the new reference points to the existing object.`,
            '<strong>Key rules:</strong>',
            '<ul><li>No duplicate objects exist in the SCP — the same content refers to the same object.</li><li>Duplicate objects <strong>can</strong> exist in the heap.</li><li>SCP objects are not eligible for garbage collection (even without references); they are destroyed only at JVM shutdown.</li></ul>',
            '<strong>Importance of SCP:</strong> if a string is repeatedly used, only one object is created in SCP and shared by many references — this improves performance and memory utilization.',
            '<strong>Why Strings are immutable:</strong> SCP is the only reason. If SCP objects were mutable, a change via one reference would affect all other references pointing to the same object.'
          ],
          code: `String s1 = new String("You cannot change me");
String s2 = new String("You cannot change me");
System.out.println(s1 == s2);    // false (different heap objects)

String s3 = "You cannot change me";
System.out.println(s1 == s3);    // false (s1=heap, s3=SCP)

String s4 = "You cannot change me";
System.out.println(s3 == s4);    // true (both point to same SCP object)

String s5 = "You cannot" + " change me";   // compile-time constant
System.out.println(s4 == s5);    // true

String s6 = "You cannot";
String s7 = s6 + " change me";   // runtime concatenation
System.out.println(s4 == s7);    // false (new heap object)

final String s8 = "You cannot";           // final, treated as constant at compile-time
String s9 = s8 + " change me";
System.out.println(s4 == s9);    // true`
        },
        {
          heading: 'String interning — intern() method',
          content: [
            'If you have a heap object reference, you can find its equivalent SCP object using <code>intern()</code>.',
            'If the equivalent SCP object is not already available, <code>intern()</code> creates a new object in the SCP.'
          ],
          code: `String s1 = new String("raju");
String s2 = s1.intern();
String s3 = "raju";
System.out.println(s2 == s3);   // true (both refer to the SCP object)

// Case 2: intern creates a new SCP object if missing
String s1b = new String("raju");
String s2b = s1b.concat("lesto");
String s3b = s2b.intern();
String s4 = "rajulesto";
System.out.println(s3b == s4);  // true (intern() created/found the SCP object)`
        },
        {
          heading: 'String Constructors',
          content: [
            'The <code>String</code> class provides these constructors:'
          ],
          code: `// 1) Empty String
String s1 = new String();
System.out.println("[" + s1 + "]");  // []

// 2) From String literal
String s2 = new String("raju");
System.out.println(s2);  // raju

// 3) From StringBuffer
StringBuffer sb = new StringBuffer("Lesto");
String s3 = new String(sb);
System.out.println(s3);  // Lesto

// 4) From char array
char[] ch = {'a', 'b', 'c', 'd'};
String s4 = new String(ch);
System.out.println(s4);  // abcd

// 5) From byte array
byte[] b = {100, 101, 102, 103, 104};
String s5 = new String(b);
System.out.println(s5);  // defgh`
        },
        {
          heading: 'Important Methods of the String Class',
          content: [
            'The most commonly used <code>String</code> methods:'
          ],
          code: `// 1) charAt(int index)
String s = "raju";
System.out.println(s.charAt(2));        // j
System.out.println(s.charAt(10));       // RE: StringIndexOutOfBoundsException

// 2) concat(String) and overloaded + / +=
s = s.concat("Lesto");
s = s + "Lesto";
s += "Lesto";

// 3a) equals(Object)
System.out.println("lesto".equals("LESTO"));   // false (case-sensitive)
System.out.println("lesto".equals("lesto"));   // true

// 3b) equalsIgnoreCase(String) - useful for usernames, not passwords
System.out.println("lesto".equalsIgnoreCase("LESTO"));  // true

// 4) length() (note: method, not property)
String s2 = "lesto";
System.out.println(s2.length);   // CE: length is a method, not field
System.out.println(s2.length()); // 5
// For arrays, use 'length' (variable). For Strings, use 'length()' (method).

// 5) replace(char old, char new)
System.out.println("ababa".replace('a', 'b'));  // bbbbb

// 6a) substring(int begin)
System.out.println("abcdefgh".substring(3));    // defgh
// 6b) substring(int begin, int end) - returns chars from begin to end-1
System.out.println("abcdefgh".substring(3, 6));  // def

// 7) toLowerCase() and toUpperCase()
String s3 = "RoyalChallange";
System.out.println(s3.toLowerCase());  // royalchallange
System.out.println(s3.toUpperCase());  // ROYALCHALLANGE

// 8) trim() - removes blank spaces ONLY at the beginning and end (not middle)
System.out.println(" raju 12 ".trim());  // raju 12

// 9) indexOf(char) and lastIndexOf(char)
String s4 = "golden drop";
System.out.println(s4.indexOf('o'));      // 1 (first occurrence)
System.out.println(s4.lastIndexOf('o'));  // 8 (last occurrence)`
        },
        {
          heading: 'String vs StringBuffer — equals() Behavior',
          content: [
            '<code>String.equals()</code> is overridden for <strong>content comparison</strong> — two Strings with the same content are equal.',
            '<code>StringBuffer.equals()</code> is <strong>NOT overridden</strong> — it still uses <code>Object.equals()</code> which compares references. Two StringBuffer objects with the same content are <strong>not equal</strong> unless they are the same object.'
          ],
          code: `// String: equals() checks content
String s1 = new String("lesto");
String s2 = new String("lesto");
System.out.println(s1 == s2);         // false (different objects)
System.out.println(s1.equals(s2));    // true (overridden for content)

// StringBuffer: equals() checks reference
StringBuffer sb1 = new StringBuffer("lesto");
StringBuffer sb2 = new StringBuffer("lesto");
System.out.println(sb1 == sb2);       // false
System.out.println(sb1.equals(sb2));  // false (uses Object.equals())`
        },
        {
          heading: 'toUpperCase()/toLowerCase() and SCP',
          content: [
            'Because <code>toUpperCase()</code> and <code>toLowerCase()</code> are <strong>runtime operations</strong>, any new String object created by them is placed on the <strong>heap</strong> (never the SCP).',
            'If the content is unchanged by the operation, no new object is created (existing reference is returned).'
          ],
          code: `String s1 = "golden drop";
String s2 = s1.toUpperCase();   // runtime op -> new heap object
String s3 = s1.toLowerCase();   // no change -> returns same object s1
System.out.println(s1 == s2);   // false (different heap object)
System.out.println(s1 == s3);   // true (no new object, returns s1)`
        }
      ]
    },
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
            `An <strong>object</strong> is an actual instance of a class — a real "thing" built from that blueprint.`,
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
            `<strong>Polymorphism</strong> means "many forms" — the same method can behave differently depending on the object.`,
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
            `<ul><li>A concrete method <code>turnOn()</code> that prints "Appliance is on"</li><li>An abstract method <code>operate()</code></li></ul>`,
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
            `<ul><li>All methods are abstract (before Java 8, except static/default methods)</li><li>A class can implement <strong>multiple</strong> interfaces</li><li>No instance fields (only constants)</li><li>Represents a "can-do" relationship</li></ul>`,
            '<strong>Abstract Class:</strong>',
            `<ul><li>Can have both abstract and concrete methods</li><li>A class can extend only <strong>one</strong> abstract class</li><li>Can have instance fields</li><li>Represents an "is-a" relationship</li></ul>`
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
        },
        {
          heading: 'SCJP Deep Dive: Interface as a Contract',
          content: [
            "From the <strong>client's point of view</strong>, an interface defines the <strong>set of services</strong> they are getting. From the <strong>service provider's point of view</strong>, an interface defines the <strong>set of services</strong> they are offering.",
            'Hence an interface acts as a <strong>contract</strong> between client and service provider.',
            '<strong>Main advantages of interfaces:</strong>',
            '<ul><li><strong>Security:</strong> The third party cannot know the internal implementation details</li><li><strong>Enhancement:</strong> Without affecting end users, we can modify the internal implementation</li><li><strong>Improves Maintainability</strong></li><li><strong>Cross-system communication:</strong> A Java application can communicate with .NET through interfaces</li></ul>',
            'An interface is <strong>never allowed to contain any implementation details</strong>. Hence all the methods declared inside interfaces must be abstract, and the interface is considered as a <strong>100% pure abstract class</strong> (until Java 8 added default and static methods).'
          ]
        },
        {
          heading: 'SCJP Deep Dive: Declaring an Interface — Allowed Modifiers',
          content: [
            'The <strong>only allowed modifiers for interfaces</strong> are:',
            '<ul><li><code>public</code></li><li><code>abstract</code> (implicit; interface is abstract by default)</li><li><code>strictfp</code></li><li><code>&lt;default&gt;</code> (no modifier)</li></ul>',
            'Any other modifier on an interface declaration is a compile-time error.',
            `When a class <code>implements</code> an interface, it must provide implementation for <strong>all</strong> the interface methods. Otherwise, the class must be declared <code>abstract</code> — violation results in a CE like <em>"Test is not abstract and does not override abstract methods"</em>.`
          ],
          code: `interface Sample {
    public void m1();
    public void m2();
}

// CE: Test is not abstract and does not override abstract methods
// class Test implements Sample {}

// OK: Test is declared abstract; child class must implement methods
abstract class Test implements Sample { }

class SubTest extends Test {
    public void m1() { System.out.println("m1"); }
    public void m2() { System.out.println("m2"); }
}`
        },
        {
          heading: 'SCJP Deep Dive: Interface Methods — Default Modifiers',
          content: [
            'Every interface method is by default <code>public</code> and <code>abstract</code> whether you declare it or not. These three declarations are <strong>equivalent</strong>:',
            '<code>void m1();</code> = <code>public void m1();</code> = <code>public abstract void m1();</code>',
            'Since interface methods are already public and abstract, you <strong>cannot</strong> use the following modifiers on them:',
            '<ul><li><code>private</code> — CE</li><li><code>protected</code> — CE</li><li><code>static</code> — CE (in older Java; allowed in Java 8+ with body)</li><li><code>final</code> — CE (cannot be final AND abstract)</li><li><code>native</code> — CE</li><li><code>strictfp</code> — CE (legal only with Java 8+ static methods)</li><li><code>synchronized</code> — CE</li></ul>',
            '<strong>Valid method declarations inside an interface:</strong>',
            '<ul><li><code>void m1();</code> ✅</li><li><code>public void m1();</code> ✅</li><li><code>public abstract void m1();</code> ✅</li></ul>',
            '<strong>Invalid declarations:</strong>',
            '<ul><li><code>private void m1();</code> ❌</li><li><code>void m1() {}</code> ❌ (no body allowed in pre-Java 8; legal for <code>default</code> or <code>static</code> in Java 8+)</li><li><code>final void m1();</code> ❌</li><li><code>static synchronized void m1();</code> ❌</li><li><code>native void m1();</code> ❌</li></ul>'
          ]
        },
        {
          heading: 'SCJP Deep Dive: Interface Variables — Default Modifiers',
          content: [
            'Every interface variable is by default <code>public static final</code> whether you declare it or not. These four declarations are <strong>equivalent</strong>:',
            '<code>int i = 10;</code> = <code>public int i = 10;</code> = <code>public static int i = 10;</code> = <code>public static final int i = 10;</code>',
            'Not allowed on interface variables: <code>private</code>, <code>protected</code>, <code>volatile</code>, <code>transient</code>.',
            '<strong>Interface variables must be initialized at the time of declaration.</strong> <code>int i;</code> inside an interface is a CE.',
            'Interface variables are <strong>inherited</strong> by implementing classes and can be accessed (e.g., <code>InterfaceName.i</code> or just <code>i</code> in the implementation), but <strong>cannot be reassigned</strong> because they are final.',
            '<strong>Note:</strong> <code>int i = 20;</code> inside a method of the implementing class is fine — that is a <strong>local variable</strong>, not the interface variable.'
          ],
          code: `interface Constants {
    int MAX = 100;          // implicitly: public static final
    // int MIN;             // CE: variable MIN might not have been initialized
}

class Use implements Constants {
    public static void main(String[] args) {
        System.out.println(MAX);      // 100
        System.out.println(Constants.MAX);  // 100
        // MAX = 200;                  // CE: cannot assign a value to final variable MAX

        int MAX = 50;                  // OK: this is a local variable that shadows the constant
        System.out.println(MAX);       // 50
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Implementing Interface Methods',
          content: [
            'When you implement an interface method, you <strong>must declare it as <code>public</code></strong>. Reducing visibility is a CE.',
            '<code>void m1() {}</code> in the implementing class ❌ <em>CE: attempting to assign weaker access privileges; was public</em>',
            '<code>public void m1() {}</code> ✅ — no error',
            'You can also add attributes like <code>@Override</code> to ensure compile-time verification of correct implementation.'
          ],
          code: `interface Sample {
    void m1();
}

// CE: m1() in Test cannot implement m1() in Sample
// attempting to assign weaker access privileges; was public
// class Test implements Sample {
//     void m1() { System.out.println("hi"); }
// }

// CORRECT version:
class Test implements Sample {
    @Override
    public void m1() { System.out.println("hi"); }
}`
        },
        {
          heading: 'SCJP Deep Dive: Naming Conflicts in Interfaces',
          content: [
            '<strong>Case 1: Same signature, same return type</strong> in both interfaces — only one implementation is enough in the implementing class.',
            '<strong>Case 2: Same method name but different arguments</strong> — the implementing class must provide both methods; they act as <strong>overloaded</strong> methods.',
            '<strong>Case 3: Same signature but different return types</strong> — <strong>CANNOT implement both interfaces simultaneously</strong>. Return type is part of the override contract; a class cannot have two methods with the same signature and different return types.',
            '<strong>Variable conflicts:</strong> if two interfaces declare a variable with the same name, accessing the unqualified name causes a CE for ambiguity. You must qualify with the interface name (<code>Left.i</code> or <code>Right.i</code>).'
          ],
          code: `interface Left { int x = 10; }
interface Right { int x = 100; }

class Ambiguous implements Left, Right {
    public static void main(String[] args) {
        // System.out.println(x);    // CE: reference to x is ambiguous
        System.out.println(Left.x);   // 10
        System.out.println(Right.x);  // 100
    }
}`
        },
        {
          heading: 'SCJP Deep Dive: Marker (Tag) Interfaces',
          content: [
            'A <strong>marker interface</strong> (or tag interface) is an interface with <strong>no methods and no fields</strong>. It marks a class to provide some special ability to its objects.',
            'Common examples in the Java standard library:',
            '<ul><li><code>java.io.Serializable</code> — marks a class whose objects can be serialized</li><li><code>java.lang.Cloneable</code> — marks a class whose objects can be cloned via <code>Object.clone()</code></li><li><code>java.rmi.Remote</code> — marks an interface whose methods can be called from a remote JVM</li></ul>',
            'By implementing a marker interface, your objects <strong>gain a specific capability</strong> recognized by the JVM or framework. If a class is not marked <code>Serializable</code>, attempting to serialize it throws <code>java.io.NotSerializableException</code> at runtime.'
          ],
          code: `import java.io.Serializable;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int id;
    Employee(String n, int i) { name = n; id = i; }
}

class NonSerializable {
    String data;
}

// Usage:
// ObjectOutputStream out = new ObjectOutputStream(...);
// out.writeObject(new Employee("Alice", 1));  // OK
// out.writeObject(new NonSerializable());     // throws NotSerializableException`
        },
        {
          heading: 'SCJP Deep Dive: extends vs implements — Valid Combinations',
          content: [
            'The following are the <strong>only valid</strong> class/interface relationship statements in Java:',
            '<ul><li>A class can <strong>extend only one class</strong> at a time (no multiple class inheritance)</li><li>A class can <strong>implement any number of interfaces</strong></li><li>An interface can <strong>extend any number of interfaces</strong> simultaneously</li></ul>',
            '<strong>Invalid combinations:</strong>',
            '<ul><li>A class cannot extend more than one class ❌</li><li>A class cannot extend an interface ❌ (must use <code>implements</code>)</li><li>An interface cannot extend a class ❌ (interfaces can only extend other interfaces)</li><li>An interface cannot implement another interface ❌</li></ul>'
          ],
          code: `interface A { void mA(); }
interface B { void mB(); }
interface C extends A, B { void mC(); }   // interface extending multiple interfaces

class Parent { void p() {} }

class Child extends Parent implements A, B {   // extends 1 class + implements 2 interfaces
    public void mA() {}
    public void mB() {}
}`
        }
      ]
    },
  'inner-classes': {
      title: 'Inner Classes',
      sections: [
        {
          heading: 'What is an Inner Class?',
          content: [
            'An <strong>inner class</strong> is a class defined inside another class.',
            'Inner classes can access the members of the outer class, including private members.',
            'Inner classes are mainly used to group classes logically and to write cleaner code.',
            'Java supports four types of inner classes:',
            '<ul><li><strong>Normal/Regular inner classes</strong> — defined directly inside a class</li><li><strong>Method-local inner classes</strong> — defined inside a method</li><li><strong>Anonymous inner classes</strong> — defined without a name, often for one-time use</li><li><strong>Static nested classes</strong> — like a regular inner class but marked static</li></ul>'
          ]
        },
        {
          heading: 'Normal (Regular) Inner Class',
          content: [
            'A class defined directly inside another class.',
            'An object of the inner class must be associated with an object of the outer class.',
            'The inner class can access all members of the outer class (including private).',
            'To create an instance of the inner class, you need an instance of the outer class first.'
          ],
          code: `class Outer {
    int x = 10;
    
    class Inner {
        int y = 20;
        void display() {
            System.out.println("Outer x: " + x); // can access outer member
            System.out.println("Inner y: " + y);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner(); // create inner via outer
        inner.display();
    }
}`
        },
        {
          heading: 'Method-Local Inner Class',
          content: [
            'An inner class defined inside a method.',
            'Its scope is limited to that method — you cannot access it from outside.',
            'It can access local variables of the method only if they are <code>final</code> or <strong>effectively final</strong>.'
          ],
          code: `class Outer {
    void myMethod() {
        class LocalInner {
            void display() {
                System.out.println("Inside method-local inner class");
            }
        }
        LocalInner li = new LocalInner();
        li.display();
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.myMethod();
    }
}`
        },
        {
          heading: 'Anonymous Inner Class',
          content: [
            'A class without a name, created at the same time it is instantiated.',
            'Commonly used for implementing interfaces or extending classes on the fly.',
            'You define the class body inline, where you create the object.',
            'Very common with event listeners in GUI programming.'
          ],
          code: `interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        // Anonymous class implementing Greeting interface
        Greeting greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Hello from anonymous class!");
            }
        };
        greeting.sayHello();
        
        // Another example: extending a class anonymously
        Thread t = new Thread() {
            @Override
            public void run() {
                System.out.println("Running in anonymous thread");
            }
        };
        t.start();
    }
}`
        },
        {
          heading: 'Static Nested Class',
          content: [
            'A static class defined inside another class.',
            'It behaves like a top-level class but is logically grouped inside the outer class.',
            'It <strong>cannot</strong> access non-static members of the outer class directly.',
            'You create instances using the outer class name directly (no outer object needed).'
          ],
          code: `class Outer {
    static int staticVar = 10;
    int instanceVar = 20;
    
    static class StaticInner {
        void display() {
            System.out.println("Static var: " + staticVar); // OK
            // System.out.println(instanceVar); // Error! Cannot access non-static
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer.StaticInner inner = new Outer.StaticInner();
        inner.display();
    }
}`
        },
        {
          heading: 'Quick Comparison',
          content: [
            '<ul><li><strong>Regular inner class:</strong> needs outer object, can access all members, has a name</li><li><strong>Method-local:</strong> scoped to a method, can access final/effectively final locals</li><li><strong>Anonymous:</strong> no name, defined inline, very concise</li><li><strong>Static nested:</strong> behaves like top-level, no access to outer instance members, uses <code>Outer.Inner</code> syntax</li></ul>',
            '<strong>When to use:</strong> use regular inner for clean encapsulation, anonymous for one-time listeners/callbacks, static nested for utility classes that logically belong inside another class.'
          ]
        }
      ]
    },
  'oop-concepts': {
      title: 'OOPS Concepts (SCJP Deep Dive)',
      sections: [
        {
          heading: 'Data Hiding',
          content: [
            '<strong>Data hiding</strong> means the data should not go out directly — outside persons are not allowed to access the data directly.',
            'The <strong>main advantage</strong> is <strong>security</strong>.',
            'We achieve data hiding by using the <code>private</code> modifier on data members.',
            'It is <strong>highly recommended</strong> to declare data members with <code>private</code>.'
          ],
          code: `class DataDemo {
    private double amount;   // hidden from outside
    private String password; // hidden from outside

    public void setAmount(double amount) {
        if (amount > 0) this.amount = amount;  // controlled access
    }
    public double getAmount() {
        return amount;
    }
}`
        },
        {
          heading: 'Abstraction',
          content: [
            '<strong>Abstraction</strong> means <strong>hiding implementation details</strong>.',
            'Advantages: <strong>security</strong> (internal implementation is not highlighted), <strong>easy enhancement</strong> (change internal implementation without affecting the outside person), and <strong>improved maintainability</strong>.',
            'When to use which construct for abstraction:',
            "<ul><li><strong>Interface</strong> — when you don't know the implementation at all, only the specification</li><li><strong>Abstract class</strong> — when you have partial implementation</li><li><strong>Concrete class</strong> — when you know the complete implementation and are ready to provide the service</li></ul>"
          ],
          code: `// Interface: pure specification (100% abstract)
interface Shape {
    double area();
    double perimeter();
}

// Abstract class: partial implementation
abstract class Animal {
    public void eat() { System.out.println("Animal is eating"); }  // concrete
    public abstract void makeSound();  // abstract
}

// Concrete class: full implementation
class Circle implements Shape {
    private double radius;
    Circle(double r) { radius = r; }
    public double area() { return Math.PI * radius * radius; }
    public double perimeter() { return 2 * Math.PI * radius; }
}`
        },
        {
          heading: 'Encapsulation',
          content: [
            '<strong>Encapsulation = Data Hiding + Abstraction</strong>.',
            'If a class follows both data hiding (private fields) and abstraction (controlled access through methods), it is an <strong>encapsulated class</strong>.',
            'Hiding data behind methods (setters/getters) is the central concept of encapsulation.',
            'Advantages: <strong>security</strong>, <strong>enhancement</strong>, <strong>maintainability</strong>.'
          ],
          code: `class Account {
    private int balance;   // data hiding

    public void setBalance(int balance) {  // abstraction
        // validate user and permissions
        if (balance >= 0) this.balance = balance;
    }
    public int getBalance() {
        // validate user and permissions
        return balance;
    }
}`
        },
        {
          heading: 'Tightly Encapsulated Class',
          content: [
            'A class is said to be <strong>tightly encapsulated</strong> iff <strong>all</strong> its data members are declared as <code>private</code>.',
            '<strong>Rule:</strong> if the parent class is not tightly encapsulated, then <strong>no</strong> child class is tightly encapsulated either.',
            'Adding <code>private</code> data members in the child class does NOT make the child class tightly encapsulated if the parent has non-private members.'
          ],
          code: `// Tightly encapsulated - all data members private
class Student {
    private String name;
    private int rollNo;
    public void setName(String n) { this.name = n; }
    public String getName() { return name; }
}

// NOT tightly encapsulated - non-private member in parent
class X {
    int i = 10;          // default (not private)
}
class Y extends X {
    private int j = 20;
}
// Y is NOT tightly encapsulated because X is not.`
        },
        {
          heading: 'IS-A Relationship (Inheritance)',
          content: [
            'IS-A relationship is also known as <strong>inheritance</strong>. It is implemented using the <code>extends</code> keyword.',
            'The <strong>main advantage</strong> is <strong>code reusability</strong>.',
            '<strong>Key rule:</strong> a parent class reference can be used to hold a child class object, but you <strong>cannot</strong> call child-specific methods using that reference.',
            'A child class reference <strong>cannot</strong> be used to hold a parent object (CE).',
            'A class can extend only <strong>one</strong> class at a time, but an interface can extend any number of interfaces.'
          ],
          code: `class P {
    public void m1() { System.out.println("P.m1"); }
    public void m2() { System.out.println("P.m2"); }
}
class C extends P {
    public void m3() { System.out.println("C.m3"); }
}

public class Test {
    public static void main(String[] args) {
        P p1 = new P();
        p1.m1(); p1.m2();
        // p1.m3();   // CE: cannot find symbol m3

        C c1 = new C();
        c1.m1(); c1.m2(); c1.m3();

        P p2 = new C();   // OK: parent ref holding child object
        p2.m1(); p2.m2();
        // p2.m3();   // CE: child-specific method not accessible

        // C c2 = new P();  // CE: parent cannot be assigned to child
    }
}`
        },
        {
          heading: 'HAS-A Relationship (Composition/Aggregation)',
          content: [
            'HAS-A relationship is also known as <strong>Composition</strong> or <strong>Aggregation</strong>.',
            'There is <strong>no specific keyword</strong> for it; in most cases it is implemented using the <code>new</code> keyword.',
            'The <strong>main advantage</strong> is <strong>code reusability</strong>.',
            '<strong>Drawback:</strong> HAS-A relationship <strong>increases dependency</strong> between components and creates <strong>maintainability problems</strong>.'
          ],
          code: `class Engine {
    public void start() { System.out.println("Engine started"); }
    public void stop()  { System.out.println("Engine stopped"); }
}

class Car {
    // Car HAS-A Engine (composition)
    private Engine e = new Engine();

    public void drive() {
        e.start();
        System.out.println("Car is driving");
        e.stop();
    }
}

public class Test {
    public static void main(String[] args) {
        Car c = new Car();
        c.drive();
    }
}`
        },
        {
          heading: 'Method Signature',
          content: [
            'In Java, a <strong>method signature</strong> consists of the <strong>method name and the argument list (including order)</strong>.',
            'The <strong>return type is NOT part of the method signature</strong> in Java.',
            'The <strong>compiler uses the method signature to resolve method calls</strong>.',
            'Two methods with the <strong>same signature</strong> are <strong>not allowed</strong> in any Java class — violation is a CE.'
          ],
          code: `class Test {
    public void m1(int i)    { }   // signature: m1(int)
    public int  m1(int i)    { }   // CE: m1(int) is already defined in Test
    public void m2()         { }   // signature: m2()
}

// Method name m1 + arg list (int) = signature m1(int)
// Return type 'int' vs 'void' does NOT make a new signature.`
        },
        {
          heading: 'Overloading',
          content: [
            'Two methods are said to be <strong>overloaded</strong> iff they have the <strong>same name but different argument lists</strong> (at least in order).',
            'Lack of overloading increases program complexity (as in C, where different names like <code>abs</code>, <code>fabs</code>, <code>labs</code> are needed for different types).',
            'In Java, the same method name is allowed for different argument types: <code>abs(int)</code>, <code>abs(float)</code>, <code>abs(long)</code>.',
            '<strong>Overloading method resolution</strong> is the responsibility of the <strong>compiler</strong>, based on the <strong>reference type</strong> and the <strong>method arguments</strong>. Hence overloading is considered <strong>compile-time polymorphism</strong> (static polymorphism / early binding).'
          ],
          code: `class Test {
    public void m1()        { System.out.println("no-args"); }
    public void m1(int i)   { System.out.println("int-args"); }
    public void m1(float f) { System.out.println("float-args"); }

    public static void main(String[] args) {
        Test t = new Test();
        t.m1();         // no-args
        t.m1(10);       // int-args
        t.m1('a');      // int-args (char promoted to int)
        t.m1(10l);      // long-args -> matches int? No -> matches long via promotion? No overload -> CE
        t.m1(10f);      // float-args
        t.m1(10.5);     // CE: no method m1(double) and no promotion path
    }
}`
        },
        {
          heading: 'Automatic Promotion in Overloading',
          content: [
            'If there is no method matching the exact argument type, the compiler <strong>promotes</strong> the argument to the next level and checks again. It continues this until a match is found or all possibilities are exhausted.',
            'Promotion order: <code>byte → short → int → long → float → double</code>. <code>char</code> also promotes to <code>int</code>.',
            'If no match is found after all possible promotions, the compiler raises a CE.',
            `<strong>More specific type wins:</strong> if multiple overloads match, the more specific one is chosen (e.g., <code>String</code> over <code>Object</code> when passing <code>"hello"</code>).`,
            'If two overloads are equally specific (e.g., <code>m1(String)</code> and <code>m1(StringBuffer)</code> with <code>null</code>), it is an <strong>ambiguity error</strong>.',
            '<strong>Var-arg methods get lowest priority:</strong> if a non-var-arg method matches, the var-arg method is not chosen.'
          ],
          code: `class Test {
    public void m1(String s)        { System.out.println("String version"); }
    public void m1(StringBuffer sb) { System.out.println("StringBuffer version"); }

    public static void main(String[] args) {
        Test t = new Test();
        t.m1("raju");   // String version
        // t.m1(null);  // CE: reference to m1 is ambiguous
    }
}

// Single method to accept any primitive
class Math {
    public static double sqrt(double d) { return Math.sqrt(d); }
    // char, byte, short, int, long, float are all promoted to double.
}

// Var-arg vs exact match
class Test2 {
    public void m1(int i)         { System.out.println("int-arg"); }
    public void m1(int... i)      { System.out.println("var-arg"); }

    public static void main(String[] args) {
        Test2 t = new Test2();
        t.m1();         // var-arg
        t.m1(10, 20);   // var-arg
        t.m1(10);       // int-arg (exact match wins)
    }
}`
        },
        {
          heading: 'Overriding',
          content: [
            "Whatever the parent class has is by default available to the child through inheritance. If the child is not satisfied with the parent's implementation, the child is allowed to <strong>overwrite</strong> that method to provide its own implementation. This is <strong>overriding</strong>.",
            'Overriding method resolution is the responsibility of the <strong>JVM</strong> based on the <strong>runtime object</strong>. Hence overriding is considered <strong>runtime polymorphism</strong> (dynamic polymorphism / late binding). The process is also called <strong>dynamic method dispatch</strong>.'
          ],
          code: `class P {
    public void property() { System.out.println("Land, gold, cash"); }
    public void marry()    { System.out.println("Subbalakshmi"); }
}
class C extends P {
    @Override
    public void marry()    { System.out.println("Priyanka"); }
}

public class Test {
    public static void main(String[] args) {
        P p1 = new P();
        p1.mary();            // Subbalakshmi

        C c1 = new C();
        c1.mary();            // Priyanka

        P p2 = new C();
        p2.mary();            // Priyanka  (JVM uses runtime object)
    }
}`
        },
        {
          heading: 'Rules for Overriding',
          content: [
            '1. <strong>Method names and arguments (including order) must be the same</strong> — i.e., signatures must match.',
            '2. <strong>Return types must be the same</strong> until Java 1.4. From Java 1.5 onwards, <strong>co-variant return types</strong> are allowed: the child return type can be the <strong>same</strong> as parent OR a <strong>subtype</strong> of the parent return type. Co-variant returns work for <strong>objects only</strong> — not for primitives.',
            '3. <code>final</code> methods <strong>cannot be overridden</strong>. <code>private</code> methods are not visible in the child class, so they do not participate in overriding (a same-signature method in the child is a new method, not an override).',
            '4. <code>native</code> methods can be overridden as non-native, <code>abstract</code> methods can be overridden, <code>synchronized</code> methods can be overridden, and a non-abstract method can be overridden as abstract.',
            '5. While overriding, you <strong>cannot decrease access privileges</strong>, but you <strong>can increase</strong> them. <code>public > protected > default > private</code>.',
            '6. While overriding, you <strong>cannot increase the size of checked exceptions</strong> in the throws clause, but you can decrease. <strong>No restrictions on unchecked exceptions</strong>.'
          ],
          code: `// Co-variant return types (Java 1.5+)
class P {
    public Object m1() { return null; }      // parent returns Object
}
class C extends P {
    @Override
    public String m1() { return "hello"; }   // child can return String (subtype)
}

// Not co-variant: String -> Object is the wrong direction
class P2 { public String m1() { return ""; } }
class C2 extends P2 {
    // public Object m1() { return null; }    // CE: not a co-variant return
}

// Decreasing access is illegal
class P3 { public void m() {} }
class C3 extends P3 {
    // void m() {}  // CE: attempting to assign weaker access privileges
    protected void m() {} // OK: increasing access
}

// Throws clause
class P4 { public void m() throws IOException {} }
class C4 extends P4 {
    @Override
    public void m() throws FileNotFoundException {} // OK (subclass of IOException)
    // public void m() throws Exception {}             // CE: cannot widen checked exception
    @Override
    public void m() throws ArithmeticException {}    // OK: unchecked, no restriction
}`
        },
        {
          heading: 'Method Hiding (static methods)',
          content: [
            'A <code>static</code> method <strong>cannot</strong> be overridden as a non-static method, and a non-static method <strong>cannot</strong> be overridden as a static method.',
            'If both parent and child class methods are <code>static</code>, it <strong>looks like overriding</strong> but it is <strong>NOT overriding</strong> — this concept is called <strong>method hiding</strong>.',
            '<strong>All rules of method hiding are exactly similar to overriding</strong>, except that both methods are declared <code>static</code>.',
            '<strong>Method resolution</strong> is taken care of by the <strong>compiler</strong> based on the <strong>reference type</strong> (not the runtime object). Hence method hiding is <strong>static polymorphism</strong> / <strong>compile-time polymorphism</strong> / <strong>early binding</strong>.',
            '<strong>Variables are not overridden</strong> — variable resolution is also based on reference type (compile-time).'
          ],
          code: `class P {
    public static void m1() { System.out.println("parent"); }
    int i = 888;
}
class C extends P {
    public static void m1() { System.out.println("child"); }
    int i = 999;
}

public class Test {
    public static void main(String[] args) {
        P p = new C();
        p.m1();   // parent (compiler uses reference type P)
        System.out.println(p.i);  // 888 (variables are not overridden)

        C c = new C();
        c.m1();   // child
        System.out.println(c.i);  // 999
    }
}`
        },
        {
          heading: 'Overloading vs Overriding — Comparison',
          content: [
            'Use the table below to compare the two key polymorphism mechanisms:'
          ],
          table: {
            headers: [
              'Property',
              'Overloading',
              'Overriding'
            ],
            rows: [
              [
                'Method names',
                'Same',
                'Same'
              ],
              [
                'Arguments',
                'Different (at least in order)',
                'Same (including order)'
              ],
              [
                'Signature',
                'Different',
                'Same'
              ],
              [
                'Return type',
                'No restriction',
                'Must be same until 1.4; co-variant from 1.5+'
              ],
              [
                'throws clause',
                'No restriction',
                'Cannot increase checked exception size'
              ],
              [
                'Access modifier',
                'No restriction',
                'Cannot decrease'
              ],
              [
                'private/final/static',
                'Can be overloaded',
                'Cannot be overridden'
              ],
              [
                'Method resolution',
                'Compiler (reference type + args)',
                'JVM (runtime object)'
              ],
              [
                'Other names',
                'Compile-time / static polymorphism / early binding',
                'Runtime / dynamic polymorphism / late binding'
              ]
            ]
          }
        },
        {
          heading: 'Static Control Flow',
          content: [
            'The static control flow happens <strong>once</strong> at the time of class loading. The order is:',
            '<ol><li><strong>Identification of static members</strong> from top to bottom. All static variables get default values (0/0.0/false/null) — this is the <strong>RIWO (Read Indirect Write Only)</strong> state.</li><li><strong>Execution of static variable assignments and static blocks</strong> from top to bottom. Variables move from RIWO to R&W (Read & Write).</li><li><strong>Execution of <code>main</code> method</strong>.</li></ol>',
            `In the RIWO state, you <strong>cannot read the variable directly</strong> — violation is a CE: <em>"Illegal forward reference"</em>.`,
            '<strong>In inheritance:</strong> identification and execution of static members happen from <strong>parent to child</strong>. If you run <code>java Child</code>, both parent and child class static initializations run. If you run <code>java Parent</code>, only the parent runs.',
            '<strong>Static blocks</strong> run at the time of class loading. They are used to load native libraries (<code>System.loadLibrary</code>) and to register database drivers. You can print to the console from a static block <strong>without a <code>main</code> method</strong> if you call <code>System.exit(0)</code>.'
          ],
          code: `class StaticDemo {
    static int i = m1();   // step 2: assigned first

    public static int m1() {
        System.out.println("Hello... I am able to print");
        System.exit(0);    // avoids needing main
        return 1;
    }
}
// Output: Hello... I am able to print
// (no main, exits after static init)`
        },
        {
          heading: 'Instance Control Flow',
          content: [
            'Instance control flow runs <strong>for every object creation</strong> (unlike static, which runs once). Order:',
            '<ol><li><strong>Identification of instance members</strong> from top to bottom (default values, RIWO state).</li><li><strong>Execution of instance variable assignments and instance blocks</strong> from top to bottom (R&W state).</li><li><strong>Execution of the constructor</strong>.</li></ol>',
            '<strong>In inheritance</strong> when you create a child object:',
            '<ol><li>Identify instance members <strong>parent to child</strong>.</li><li>Execute instance variable assignments and instance blocks in the <strong>parent class only</strong>.</li><li>Execute the <strong>parent constructor</strong>.</li><li>Execute instance variable assignments and instance blocks in the <strong>child class</strong>.</li><li>Execute the <strong>child constructor</strong>.</li></ol>',
            '<strong>Object creation is the most costly operation</strong> — avoid creating unnecessary objects because it hurts performance.'
          ]
        },
        {
          heading: 'Coupling',
          content: [
            'The <strong>degree of dependency between components</strong> is called <strong>coupling</strong>.',
            'Tightly coupled components cannot be modified independently — a change in one forces changes in others. <strong>Tight coupling is NOT recommended</strong>.',
            'We should always maintain <strong>loose coupling</strong>.',
            'Advantages of loose coupling: <strong>improved maintainability</strong>, <strong>easy enhancement</strong>, and <strong>better reusability</strong>.',
            'In Java, loose coupling is achieved through <strong>interfaces</strong> and <strong>dependency injection</strong>.'
          ],
          code: `// Tightly coupled — A directly depends on B's static method
class A {
    static int i = B.m2();   // A depends on B
}
class B {
    static int m2() { return C.j; }   // B depends on C
}
class C {
    static int j = D.l;   // C depends on D
}
// Changing D requires changes in C, B, and A.

// Loosely coupled — use interfaces
interface Service { void execute(); }
class Client {
    private Service service;   // depends on interface, not implementation
    public Client(Service s) { this.service = s; }
    public void doWork() { service.execute(); }
}`
        },
        {
          heading: 'Cohesion',
          content: [
            'Every component should have a <strong>well-defined single purpose</strong>. Components that follow this principle are said to have <strong>high cohesion</strong>.',
            '<strong>Low cohesion</strong> example: a single servlet handling login, validation, and inbox display. Any small change disturbs the entire component and reduces reusability.',
            '<strong>High cohesion</strong> example: separate components for each task — <code>login.jsp</code>, <code>ValidateServlet</code>, <code>InboxServlet</code>. Each can be modified independently.',
            'Advantages of high cohesion: <strong>improved maintainability</strong>, <strong>easy enhancement</strong>, <strong>promotes reusability</strong>.'
          ]
        },
        {
          heading: 'TypeCasting — Compile-Time and Runtime Checks',
          content: [
            'General syntax: <code>A b = (c) d;</code>',
            'For a valid typecast, <strong>three checks</strong> are performed:',
            `<ol><li><strong>Compile-time check 1:</strong> there must be some relationship between the type of <code>d</code> and the cast type <code>c</code>. Otherwise CE: <em>"inconvertible types"</em>.</li><li><strong>Compile-time check 2:</strong> <code>c</code> must be the same as or a derived type of <code>A</code>. Otherwise CE: <em>"incompatible types"</em>.</li><li><strong>Runtime check:</strong> the actual object type of <code>d</code> must be the same as or a derived type of <code>c</code>. Otherwise <code>ClassCastException</code> at runtime.</li></ol>`
          ],
          code: `// Pass compile-time checks 1 & 2; fails runtime check
Object o = new String("raju");
StringBuffer sb = (StringBuffer) o;   // RE: ClassCastException

// Passes all checks
Object o2 = new String("raju");
String s = (String) o2;                // OK

// CE: incompatible types
String s2 = "raju";
StringBuffer sb2 = (Object) s2;        // CE: Object is not a StringBuffer

// Multi-step downcasting
Object   ob1 = new Derived2();
Base     ob2 = (Base) ob1;
Derived2 ob3 = (Derived2) ob2;
Base     ob4 = (Derived2) ob3;
Derived2 ob5 = (Derived1) ob4;         // RE ClassCastException at runtime`
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
  'object-class': {
      title: 'Object Class',
      sections: [
        {
          heading: 'What is the Object Class?',
          content: [
            'The <code>Object</code> class is the <strong>root of all Java classes</strong>.',
            'Every class in Java directly or indirectly extends <code>Object</code>.',
            'If a class does not explicitly extend another class, it automatically extends <code>Object</code>.',
            'The <code>Object</code> class defines methods that are available to every Java object.'
          ]
        },
        {
          heading: 'Key Methods of Object Class',
          content: [
            'The <code>Object</code> class provides these important methods:',
            '<ul><li><code>toString()</code> — returns a string representation of the object (default: class name + @ + hashcode)</li><li><code>equals(Object obj)</code> — compares two objects for reference equality (default uses ==)</li><li><code>hashCode()</code> — returns an integer hash code for the object</li><li><code>getClass()</code> — returns the runtime class of the object</li><li><code>clone()</code> — creates and returns a copy of the object (class must implement Cloneable)</li><li><code>finalize()</code> — called by GC before destroying the object (deprecated since Java 9)</li><li><code>wait()</code>, <code>notify()</code>, <code>notifyAll()</code> — thread coordination methods</li></ul>'
          ],
          code: `class Student {
    int id;
    String name;
    
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    // Override toString for meaningful output
    @Override
    public String toString() {
        return "Student[id=" + id + ", name=" + name + "]";
    }
    
    // Override equals for content comparison
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id;
    }
    
    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}

public class ObjectDemo {
    public static void main(String[] args) {
        Student s1 = new Student(1, "Alice");
        Student s2 = new Student(1, "Bob");
        
        System.out.println(s1);  // Uses toString()
        System.out.println("s1.equals(s2): " + s1.equals(s2)); // true (same id)
        System.out.println("s1.hashCode(): " + s1.hashCode());
        System.out.println("Class: " + s1.getClass().getName());
    }
}`
        },
        {
          heading: 'Contract: equals() and hashCode()',
          content: [
            'If you override <code>equals()</code>, you should also override <code>hashCode()</code>.',
            '<strong>Contract:</strong>',
            "<ul><li>If two objects are equal (equals returns true), they must have the same hashCode</li><li>If two objects have the same hashCode, they may or may not be equal</li><li>The hashCode must remain consistent across multiple calls (if object state doesn't change)</li></ul>",
            'This contract is critical for hash-based collections like <code>HashMap</code> and <code>HashSet</code>.'
          ]
        },
        {
          heading: '== operator vs .equals() — Comparison',
          content: [
            'The comparison between the <code>==</code> operator and the <code>equals()</code> method:'
          ],
          table: {
            headers: [
              'Property',
              '== operator',
              '.equals() method'
            ],
            rows: [
              [
                'Type',
                'Operator, applicable for both primitives and Object references',
                'Method, applicable only for Object references'
              ],
              [
                'Comparison',
                'For Object refs, r1 == r2 is true iff both point to the same object on the heap (reference comparison)',
                'Default implementation in Object class is meant for reference comparison'
              ],
              [
                'Overridable?',
                'Cannot be overridden',
                'Can be overridden for content comparison'
              ],
              [
                'Incompatible types',
                'r1 == r2 results in CE',
                'r1.equals(r2) is always false (no exception)'
              ],
              [
                'Comparison with null',
                'r == null returns false',
                'r.equals(null) returns false'
              ]
            ]
          },
          content_2: [
            '<strong>Relationship:</strong>',
            '<ul><li>If <code>r1 == r2</code> is true, then <code>r1.equals(r2)</code> is always true.</li><li>If <code>r1.equals(r2)</code> is true, then <code>r1 == r2</code> is <strong>NOT necessarily</strong> true (after overriding equals for content comparison).</li></ul>'
          ]
        },
        {
          heading: 'Overriding equals() — 3 Important Cases',
          content: [
            'When overriding <code>equals()</code>, you must consider these three cases:',
            `<ol><li><strong>Case 1: The meaning of equality</strong> — define what "equal" means for your class (e.g., same name and rollno).</li><li><strong>Case 2: Heterogeneous objects</strong> — if the argument is not of the expected class, return false. Handle <code>ClassCastException</code> internally.</li><li><strong>Case 3: null argument</strong> — if the argument is <code>null</code>, return false. Handle <code>NullPointerException</code> internally.</li></ol>`,
            '<strong>Default <code>Object.equals()</code>:</strong> returns <code>true</code> only when both references point to the same object on the heap. For <strong>content comparison</strong>, override <code>equals()</code>.'
          ],
          code: `class Student {
    String name;
    int rollno;
    Student(String name, int rollno) {
        this.name = name;
        this.rollno = rollno;
    }

    @Override
    public boolean equals(Object obj) {
        try {
            String name1 = this.name;
            int rollno1 = this.rollno;
            Student s2 = (Student) obj;
            String name2 = s2.name;
            int rollno2 = s2.rollno;
            return (name1.equals(name2) && rollno1 == rollno2);
        } catch (ClassCastException c) {
            return false;   // Case 2: heterogeneous object
        } catch (NullPointerException e) {
            return false;   // Case 3: null argument
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student("raju", 101);
        Student s2 = new Student("giri", 102);
        Student s3 = new Student("giri", 102);
        System.out.println(s1.equals(s2));   // false
        System.out.println(s2.equals(s3));   // true
        System.out.println(s1.equals(null)); // false
    }
}`
        },
        {
          heading: 'clone() and the Cloneable Marker Interface',
          content: [
            '<strong>Cloning</strong> is the process of creating an exactly duplicate object.',
            'The <code>Object</code> class provides <code>protected native Object clone() throws CloneNotSupportedException</code>.',
            'Not every object has the capability to produce a cloned object. A class is said to be <strong>cloneable</strong> iff the corresponding class implements the <code>java.lang.Cloneable</code> interface.',
            '<code>Cloneable</code> is a <strong>marker interface</strong> — it does not contain any methods. If you try to <code>clone()</code> an object whose class does not implement <code>Cloneable</code>, <code>CloneNotSupportedException</code> is thrown.',
            'By default, Java performs <strong>shallow cloning</strong> (all fields are copied bit-by-bit, including references to mutable objects).',
            '<strong>Protected clone access rule:</strong> protected members can be accessed from outside the package in child classes, but you must invoke them <strong>using the child class reference</strong>, not a parent reference.'
          ],
          code: `class Test implements Cloneable {
    int i = 10;
    int j = 20;
    public static void main(String[] args) throws CloneNotSupportedException {
        Test t1 = new Test();
        Test t2 = (Test) t1.clone();   // shallow clone
        t1.i = 100;
        t1.j = 200;
        System.out.println(t2.i + "----" + t2.j);  // 10----20
    }
}

// Reference type matters for protected clone
class Test2 implements Cloneable {
    public static void main(String[] args) throws CloneNotSupportedException {
        // Case 1: Object o = new Object();
        //         Object o2 = o.clone();   // CE: cannot access protected clone() of Object
        // Case 2: Object o = new Test2();
        //         Object o2 = o.clone();   // CE: parent ref cannot access protected
        // Case 3: Test2 t = new Test2();
        //         Object o = t.clone();    // OK: child class ref
    }
}`
        },
        {
          heading: 'hashCode() and Its Relation to equals()',
          content: [
            'The <code>hashCode()</code> method returns a random number that can be used by the JVM while saving/adding objects into <code>HashSet</code>, <code>Hashtable</code>, or <code>HashMap</code>.',
            'The default <code>Object.hashCode()</code> is based on the <strong>address</strong> of the object, but it can be overridden to generate a custom hash code.',
            '<strong>Contract between equals() and hashCode():</strong>',
            '<ol><li>If two objects are equal by <code>equals()</code>, then their hashCodes <strong>must be equal</strong>. (If r1.equals(r2) is true, then r1.hashCode() == r2.hashCode() is also true.)</li><li>If two objects are <strong>not equal</strong> by <code>equals()</code>, their hashCodes may or may not be the same.</li><li>If the hashCodes of two objects are equal, then the objects may or may not be equal by <code>equals()</code>.</li><li>If the hashCodes of two objects are not equal, then the objects are <strong>always not equal</strong> by <code>equals()</code>.</li></ol>',
            '<strong>Recommendation:</strong> whenever you override <code>equals()</code>, override <code>hashCode()</code> as well to satisfy the contract.'
          ],
          code: `class hashCodeDemo {
    int i;
    hashCodeDemo(int i) { this.i = i; }
    @Override
    public int hashCode() { return i; }
    @Override
    public String toString() { return i + ""; }

    public static void main(String[] args) {
        hashCodeDemo h1 = new hashCodeDemo(100);
        hashCodeDemo h2 = new hashCodeDemo(110);
        System.out.println(h1);  // 100
        System.out.println(h2);  // 110
    }
}`
        }
      ]
    },
};

const javaModule3Content = {
  'stringbuffer-stringbuilder': {
      title: 'StringBuffer & StringBuilder',
      sections: [
        {
          heading: 'StringBuffer vs StringBuilder',
          content: [
            'Both <code>StringBuffer</code> and <code>StringBuilder</code> are mutable string classes — unlike <code>String</code>, they can be modified after creation.',
            '<strong>StringBuffer</strong>: Thread-safe (all methods are synchronized) but slower.',
            '<strong>StringBuilder</strong>: Not thread-safe but faster. Added in Java 1.5.',
            "Use <code>StringBuilder</code> when you don't need thread safety — it is the preferred choice for single-threaded code.",
            'Use <code>StringBuffer</code> only when multiple threads modify the same string.'
          ],
          code: `public class StringBufferBuilderDemo {
    public static void main(String[] args) {
        // StringBuilder - preferred for single-threaded use
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ").append("World");
        System.out.println(sb.toString());  // Hello World
        
        // StringBuffer - thread-safe
        StringBuffer sbf = new StringBuffer("Java");
        sbf.insert(0, "I love ");
        sbf.append(" Programming");
        System.out.println(sbf.toString()); // I love Java Programming
        
        // Method chaining
        StringBuilder result = new StringBuilder()
            .append("A")
            .append("B")
            .append("C")
            .reverse();
        System.out.println(result);  // CBA
    }
}`
        },
        {
          heading: 'Constructors',
          content: [
            'Both classes offer the same constructors:',
            '<ul><li><code>new StringBuffer()</code> — empty, default capacity 16</li><li><code>new StringBuffer(int capacity)</code> — empty with specified capacity</li><li><code>new StringBuffer(String s)</code> — initialized with string content + 16 extra capacity</li></ul>',
            'When capacity is exceeded, a new internal array is created with double the previous capacity plus 2.'
          ]
        },
        {
          heading: 'Important Methods',
          content: [
            '<ul><li><code>append(x)</code> — adds at the end (overloaded for all types)</li><li><code>insert(int index, x)</code> — inserts at given index</li><li><code>delete(int start, int end)</code> — removes characters in range</li><li><code>deleteCharAt(int index)</code> — removes character at index</li><li><code>reverse()</code> — reverses the sequence</li><li><code>replace(int start, int end, String str)</code> — replaces substring</li><li><code>capacity()</code> — returns current capacity</li><li><code>ensureCapacity(int min)</code> — ensures at least min capacity</li><li><code>trimToSize()</code> — reduces capacity to match length</li></ul>'
          ]
        },
        {
          heading: 'String vs StringBuffer vs StringBuilder',
          content: [
            '<ul><li><strong>String:</strong> immutable, thread-safe (implicitly), slow for modifications, stored in String Pool</li><li><strong>StringBuffer:</strong> mutable, thread-safe (synchronized), slower, heap memory</li><li><strong>StringBuilder:</strong> mutable, NOT thread-safe, fastest, heap memory</li></ul>',
            '<strong>When to use:</strong>',
            '<ul><li>Use <code>String</code> for text that never changes</li><li>Use <code>StringBuilder</code> for single-threaded string manipulation</li><li>Use <code>StringBuffer</code> for multi-threaded string manipulation</li></ul>'
          ]
        },
        {
          heading: 'StringBuffer Constructors and Default Capacity',
          content: [
            'The default <strong>initial capacity</strong> of a <code>StringBuffer</code> is <code>16</code>.',
            'When the maximum capacity is reached, a new <code>StringBuffer</code> object is created with new capacity = <code>(currentCapacity + 1) * 2</code>.',
            'Three valid constructors: <code>StringBuffer()</code>, <code>StringBuffer(int capacity)</code>, and <code>StringBuffer(String s)</code>.'
          ],
          code: `// Default capacity = 16
StringBuffer sb1 = new StringBuffer();
System.out.println(sb1.capacity());  // 16

// Adding 17 chars -> capacity = (16+1)*2 = 34
sb1.append("abcdefghijklmnop");
sb1.append("q");
System.out.println(sb1.capacity());  // 34

// Custom initial capacity
StringBuffer sb2 = new StringBuffer(40);
System.out.println(sb2.capacity());  // 40

// From String -> capacity = s.length() + 16
StringBuffer sb3 = new StringBuffer("Lesto");
System.out.println(sb3.capacity());  // 16 + 5 = 21`
        },
        {
          heading: 'Important Methods of StringBuffer',
          content: [
            'The key methods of <code>StringBuffer</code> are:'
          ],
          code: `// 1) length() and capacity()
StringBuffer sb = new StringBuffer("Lesto");
System.out.println(sb.length());     // 5
System.out.println(sb.capacity());   // 21

// 2) charAt(int index) and setCharAt(int index, char ch)
System.out.println(sb.charAt(3));    // t
// sb.setCharAt(3, 'a');
// System.out.println(sb);           // Lesa

// 3) append(String) - many overloads: int, float, byte, boolean, char[], byte[], etc.
sb.append("XYZ");
System.out.println(sb);  // LestoXYZ

// 4) insert(int index, String)
sb.insert(2, "raju");
System.out.println(sb);  // LeraJuestoXYZ (inserted at index 2)

// 5) delete(int start, int end) - removes chars from start to end-1
StringBuffer sb2 = new StringBuffer("abcdefgh");
sb2.delete(2, 6);
System.out.println(sb2);  // abgh

// 6) deleteCharAt(int index)
StringBuffer sb3 = new StringBuffer("abcdefgh");
sb3.deleteCharAt(2);
System.out.println(sb3);  // abdefgh

// 7) reverse()
StringBuffer sb4 = new StringBuffer("raju");
System.out.println(sb4.reverse());  // ujar

// 8) setLength(int requiredLength) - truncates or pads with null chars
StringBuffer sb5 = new StringBuffer("aishwaryaabhishak");
sb5.setLength(8);
System.out.println(sb5);  // aishwarya

// Note: All StringBuffer methods are synchronized, which can affect performance.
// Use StringBuilder for non-thread-safe but faster operations.`
        },
        {
          heading: 'Chaining of Methods',
          content: [
            'For most methods in <code>String</code> and <code>StringBuffer</code>, the return types are the same (String or StringBuffer). After applying a method, you can call another method on the result, forming a method chain.',
            'All chained method calls execute from <strong>left to right</strong>.'
          ],
          code: `StringBuffer sb = new StringBuffer("raju");
sb.append("software").reverse().insert(2, "abc").delete(2, 5).append("xyz");
System.out.println(sb);

// Execution order:
// 1) append("software")   -> "rajusoftware"
// 2) reverse()             -> "erawftosujar"
// 3) insert(2, "abc")      -> "erabcawftosujar"  (insert "abc" at index 2)
// 4) delete(2, 5)          -> "eraawftosujar"    (remove chars from index 2 to 4)
// 5) append("xyz")         -> "eraawftosujarxyz"`
        },
        {
          heading: 'StringBuilder vs StringBuffer',
          content: [
            '<code>StringBuilder</code> is exactly similar to <code>StringBuffer</code> (including constructors and methods) except for:'
          ],
          table: {
            headers: [
              'Property',
              'StringBuilder',
              'StringBuffer'
            ],
            rows: [
              [
                'Synchronization',
                'No method is synchronized',
                'All methods are synchronized'
              ],
              [
                'Thread safety',
                'Not thread safe',
                'Thread safe'
              ],
              [
                'Performance',
                'High (faster)',
                'Low (slower due to synchronization overhead)'
              ],
              [
                'Available since',
                'Java 1.5',
                'Java 1.0'
              ]
            ]
          },
          content_2: [
            '<strong>Decision rule:</strong>',
            '<ul><li>If the content is <strong>not changing frequently</strong>, use <code>String</code>.</li><li>If the content <strong>changes frequently</strong> and <strong>thread safety is required</strong>, use <code>StringBuffer</code>.</li><li>If the content <strong>changes frequently</strong> and <strong>thread safety is not required</strong>, use <code>StringBuilder</code>.</li></ul>'
          ]
        }
      ]
    },
  'wrapper-classes': {
      title: 'Wrapper Classes',
      sections: [
        {
          heading: 'What are Wrapper Classes?',
          content: [
            'Java provides a <strong>wrapper class</strong> for every primitive data type.',
            'Wrapper classes allow primitives to be treated as objects — essential for collections, which only store objects.',
            '<ul><li><code>byte</code> → <code>Byte</code></li><li><code>short</code> → <code>Short</code></li><li><code>int</code> → <code>Integer</code></li><li><code>long</code> → <code>Long</code></li><li><code>float</code> → <code>Float</code></li><li><code>double</code> → <code>Double</code></li><li><code>char</code> → <code>Character</code></li><li><code>boolean</code> → <code>Boolean</code></li></ul>'
          ]
        },
        {
          heading: 'Autoboxing and Unboxing',
          content: [
            '<strong>Autoboxing</strong>: Java automatically converts a primitive to its wrapper class.',
            '<strong>Unboxing</strong>: Java automatically converts a wrapper to its primitive.',
            'This was introduced in Java 1.5 — before that, you had to manually wrap and unwrap.'
          ],
          code: `import java.util.ArrayList;
import java.util.List;

public class WrapperDemo {
    public static void main(String[] args) {
        // Autoboxing: int -> Integer
        Integer num = 10;  // equivalent to Integer.valueOf(10)
        
        // Unboxing: Integer -> int
        int primitive = num;  // equivalent to num.intValue()
        
        // Collections require objects
        List<Integer> numbers = new ArrayList<>();
        numbers.add(100);  // autoboxing: int 100 -> Integer
        numbers.add(200);
        
        int first = numbers.get(0);  // unboxing: Integer -> int
        System.out.println("First: " + first);
        
        // Parsing strings
        int parsed = Integer.parseInt("123");
        double d = Double.parseDouble("3.14");
        System.out.println("Parsed: " + parsed + ", " + d);
    }
}`
        },
        {
          heading: 'Useful Wrapper Methods',
          content: [
            `<ul><li><code>Integer.valueOf(int)</code> — returns cached Integer (-128 to 127)</li><li><code>Integer.parseInt(String)</code> — converts string to int</li><li><code>Integer.toBinaryString(int)</code> — binary representation</li><li><code>Integer.toHexString(int)</code> — hex representation</li><li><code>Integer.MAX_VALUE</code>, <code>Integer.MIN_VALUE</code> — constants</li><li><code>Character.isDigit(char)</code>, <code>Character.isLetter(char)</code> — character checks</li><li><code>Character.toUpperCase(char)</code>, <code>Character.toLowerCase(char)</code></li><li><code>Boolean.parseBoolean(String)</code> — converts "true"/"false" string</li></ul>`
          ]
        },
        {
          heading: 'Wrapper Class Constructors',
          content: [
            '<strong>Main objectives of wrapper classes:</strong>',
            '<ol><li>Wrap primitives into <strong>object form</strong> so primitives can be handled like objects (e.g., in collections).</li><li>Define <strong>utility functions</strong> for primitives (converting primitive to string, parsing, etc.).</li></ol>',
            'Every wrapper class (except <code>Character</code>) contains two constructors: one that takes the corresponding primitive, and one that takes a String. The <code>Character</code> class has <strong>only one</strong> constructor that takes a <code>char</code>.',
            'If a String cannot be converted to a number, a runtime <code>NumberFormatException</code> is thrown.',
            '<strong>Special notes:</strong>',
            `<ul><li><code>Float</code> has 3 constructors: <code>float</code>, <code>String</code>, and <code>double</code> argument.</li><li><code>Character</code> does <strong>not</strong> have a constructor that takes a String.</li><li><code>Boolean(String)</code>: case is <strong>not important</strong>. If the content is "true" (any case), the wrapper holds true; otherwise (any other content, including null), it holds false.</li></ul>`,
            '<code>new Boolean(FALSE)</code> ❌ <em>CE: cannot find symbol</em> — <code>FALSE</code> is not a Java keyword; it must be <code>false</code>.'
          ],
          table: {
            headers: [
              'Wrapper Class',
              'Constructor Arguments'
            ],
            rows: [
              [
                'Byte',
                'byte (or) String'
              ],
              [
                'Short',
                'short (or) String'
              ],
              [
                'Integer',
                'int (or) String'
              ],
              [
                'Long',
                'long (or) String'
              ],
              [
                'Float',
                'float (or) String (or) double'
              ],
              [
                'Double',
                'double (or) String'
              ],
              [
                'Character',
                'char (only)'
              ],
              [
                'Boolean',
                'boolean (or) String'
              ]
            ]
          },
          code: `Integer I1 = new Integer(10);     // OK: int argument
Integer I2 = new Integer("10");    // OK: String argument
// Integer I3 = new Integer("ten"); // RE: NumberFormatException

Float f1 = new Float(10.5f);
Float f2 = new Float("10.5f");
Float f3 = new Float(10.5);        // double -> float (widening)

Character ch1 = new Character('a');     // OK
// Character ch2 = new Character("a"); // CE: no String constructor

Boolean b1 = new Boolean(true);          // OK
// Boolean b2 = new Boolean(FALSE);      // CE: cannot find symbol FALSE
Boolean b3 = new Boolean("false");       // OK -> false
Boolean b4 = new Boolean("TrUE");        // OK -> true (case-insensitive)
Boolean b5 = new Boolean("raju");        // OK -> false (not "true")
Boolean b6 = new Boolean("yes");         // OK -> false

Boolean b1q = new Boolean("yes");
Boolean b2q = new Boolean("No");
System.out.println(b1q.equals(b2q));    // true (both wrappers hold false)`
        },
        {
          heading: 'valueOf() Methods — 3 Versions',
          content: [
            `All wrapper classes (except <code>Character</code>) have static <code>valueOf(String)</code> to convert a String to the corresponding wrapper object. <code>Character.valueOf("10")</code> ❌ <em>CE</em>.`,
            '<strong>Version 2 — with radix:</strong> integral wrappers (<code>Byte</code>, <code>Short</code>, <code>Integer</code>, <code>Long</code>) have <code>valueOf(String s, int radix)</code>. The allowed radix range is <strong>1 to 36</strong> (10 digits + 26 letters).',
            '<strong>Version 3 — from primitive:</strong> every wrapper class (including <code>Character</code>) has <code>valueOf(primitive p)</code> to convert a primitive to a wrapper object.',
            '<strong>Version 1 & 2:</strong> String to wrapper object. <strong>Version 3:</strong> primitive to wrapper object.'
          ],
          code: `// Version 1: String to wrapper
Integer I1 = Integer.valueOf("10");
Float F1 = Float.valueOf("10.5");
Boolean B1 = Boolean.valueOf("raju");   // false
// Character ch = Character.valueOf("10");   // CE: no String version for Character

// Version 2: String to wrapper with radix (integral wrappers only)
Integer I2 = Integer.valueOf("101011", 2);   // 43 in binary = 43 in decimal
System.out.println(I2);   // 43

// Version 3: primitive to wrapper
Integer I3 = Integer.valueOf(10);
Character ch2 = Character.valueOf('a');
Boolean B2 = Boolean.valueOf(true);`
        },
        {
          heading: 'xxxValue() Methods — Wrapper to Primitive',
          content: [
            'Every wrapper class (except <code>Character</code> and <code>Boolean</code>) contains <code>xxxValue()</code> methods to convert the wrapper object back to a primitive: <code>intValue()</code>, <code>byteValue()</code>, <code>shortValue()</code>, <code>longValue()</code>, <code>floatValue()</code>, <code>doubleValue()</code>.',
            '<code>Character</code> has <code>charValue()</code>; <code>Boolean</code> has <code>booleanValue()</code>.',
            '<strong>Total of 38 xxxValue() methods</strong> are possible: (6 × 6) + 1 + 1 = 38, covering the 6 numeric wrappers × 6 primitive types + Character + Boolean.'
          ],
          code: `Integer I = Integer.valueOf(130);
System.out.println(I.byteValue());    // -126 (overflow, byte range is -128 to 127)
System.out.println(I.shortValue());   // 130
System.out.println(I.intValue());     // 130
System.out.println(I.longValue());    // 130
System.out.println(I.floatValue());   // 130.0
System.out.println(I.doubleValue());  // 130.0

Character ch = new Character('a');
char c = ch.charValue();
System.out.println(c);   // a

Boolean B = Boolean.valueOf("Tea Break");
boolean b = B.booleanValue();
System.out.println(b);   // false`
        },
        {
          heading: 'parseXxx() Methods — String to Primitive',
          content: [
            'Every wrapper class (except <code>Character</code>) has a static <code>parseXxx(String)</code> method to convert a String directly to the corresponding primitive (without creating a wrapper object).',
            '<strong>Version 2 — with radix:</strong> integral wrappers (<code>Byte</code>, <code>Short</code>, <code>Integer</code>, <code>Long</code>) have <code>parseXxx(String s, int radix)</code>.'
          ],
          code: `// Version 1: String to primitive
int i = Integer.parseInt("10");
boolean b = Boolean.parseBoolean("true");
double d = Double.parseDouble("3.14");

// Version 2: with radix
int bin = Integer.parseInt("101011", 2);
System.out.println(bin);   // 43`
        },
        {
          heading: 'toString() Methods — 4 Versions',
          content: [
            'All wrapper classes have an instance <code>toString()</code> method to convert a wrapper object to a String. This <strong>overrides</strong> <code>Object.toString()</code>.',
            '<strong>Version 2:</strong> static <code>toString(primitive p)</code> converts a primitive directly to a String.',
            '<strong>Version 3:</strong> <code>Integer</code> and <code>Long</code> have <code>toString(int/long, int radix)</code> to return a String in the specified radix.',
            '<strong>Version 4:</strong> <code>Integer</code> and <code>Long</code> have <code>toBinaryString()</code>, <code>toOctalString()</code>, and <code>toHexString()</code> static methods.'
          ],
          code: `// Version 1: wrapper object to String (instance)
Integer I1 = new Integer(10);
String s1 = I1.toString();
System.out.println(s1);   // "10"

// Version 2: primitive to String (static)
String s2 = Integer.toString(10);
String s3 = Boolean.toString(true);
System.out.println(s2);   // "10"
System.out.println(s3);   // "true"

// Version 3: primitive to String with radix
String s4 = Integer.toString(43, 2);
System.out.println(s4);   // "101011" (binary)
String s5 = Integer.toString(43, 8);
System.out.println(s5);   // "53" (octal)

// Version 4: radix-specific helpers
String s6 = Integer.toBinaryString(43);
System.out.println(s6);   // "101011"
String s7 = Integer.toOctalString(43);
System.out.println(s7);   // "53"
String s8 = Integer.toHexString(43);
System.out.println(s8);   // "2b" (note: 43 in hex is 2b, not 262!)`
        }
      ]
    },
  'math-class': {
      title: 'Math Class',
      sections: [
        {
          heading: 'What is the Math Class?',
          content: [
            'The <code>java.lang.Math</code> class provides static methods for common mathematical operations.',
            'You cannot create an instance of <code>Math</code> — its constructor is private.',
            'All methods are static, so you call them directly on the class: <code>Math.methodName()</code>.'
          ]
        },
        {
          heading: 'Common Math Methods',
          content: [
            '<ul><li><code>Math.abs(x)</code> — absolute value</li><li><code>Math.max(a, b)</code> — larger of two values</li><li><code>Math.min(a, b)</code> — smaller of two values</li><li><code>Math.sqrt(x)</code> — square root</li><li><code>Math.cbrt(x)</code> — cube root</li><li><code>Math.pow(a, b)</code> — a raised to power b</li><li><code>Math.ceil(x)</code> — smallest integer >= x</li><li><code>Math.floor(x)</code> — largest integer <= x</li><li><code>Math.round(x)</code> — round to nearest integer</li><li><code>Math.random()</code> — random double between 0.0 (inclusive) and 1.0 (exclusive)</li><li><code>Math.PI</code> — constant π (3.14159...)</li><li><code>Math.E</code> — constant e (2.71828...)</li></ul>'
          ],
          code: `public class MathDemo {
    public static void main(String[] args) {
        System.out.println("abs(-10): " + Math.abs(-10));        // 10
        System.out.println("max(5, 10): " + Math.max(5, 10));    // 10
        System.out.println("min(5, 10): " + Math.min(5, 10));    // 5
        System.out.println("sqrt(16): " + Math.sqrt(16));        // 4.0
        System.out.println("pow(2, 3): " + Math.pow(2, 3));      // 8.0
        System.out.println("ceil(4.2): " + Math.ceil(4.2));      // 5.0
        System.out.println("floor(4.8): " + Math.floor(4.8));    // 4.0
        System.out.println("round(4.5): " + Math.round(4.5));    // 5
        System.out.println("random: " + Math.random());          // e.g., 0.7342
        System.out.println("PI: " + Math.PI);                    // 3.14159...
        
        // Generate random int between 1 and 100
        int randomInt = (int)(Math.random() * 100) + 1;
        System.out.println("Random 1-100: " + randomInt);
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
        },
        {
          heading: 'Introduction to Exception Handling',
          content: [
            'An <strong>exception</strong> is an unexpected, unwanted event that disturbs the normal flow of the program.',
            'Real-time examples: <code>SleepingException</code>, <code>TirePuncturedException</code>.',
            'If we do not handle an exception, the program may terminate <strong>abnormally</strong> without releasing allocated resources — this is <strong>not graceful termination</strong>. As a good programming practice, we should always handle exceptions for graceful termination.',
            '<strong>Exception handling</strong> does NOT repair an exception. It provides an <strong>alternative way</strong> to continue the program normally. Example: if a program needs to read from a remote file but the file is unavailable, we provide a local file as a fallback so the rest of the program continues.'
          ]
        },
        {
          heading: 'Runtime Stack Mechanism',
          content: [
            'For <strong>every thread</strong>, the JVM creates a <strong>runtime stack</strong>.',
            'All method calls performed by the thread are stored in the corresponding runtime stack. If a method terminates normally, its entry is removed from the stack.',
            'After all method calls complete, the stack is empty. Just before the thread terminates, the JVM destroys its stack.'
          ],
          code: `class ExceptionDemo {
    public static void main(String[] args) {
        doStuff();
    }
    public static void doStuff() {
        doMoreStuff();
    }
    public static void doMoreStuff() {
        System.out.println("Hi this is Exception...Thread");
    }
}
// Stack (top to bottom): doMoreStuff() -> doStuff() -> main()
// After main finishes, stack is destroyed.`
        },
        {
          heading: 'Default Exception Handling',
          content: [
            'When an exception is raised, the method in which it is raised is responsible for preparing an <strong>exception object</strong> with:',
            '<ul><li>Name of Exception</li><li>Description</li><li>Location of Exception (stack trace)</li></ul>',
            'The method hands the object to the JVM. The JVM checks for an exception handler in that method. If none, the JVM <strong>terminates the method abnormally</strong> and removes its stack entry.',
            'The JVM then checks the caller method, then its caller, and so on up to <code>main</code>. If <code>main</code> also has no handler, the JVM hands responsibility to the <strong>default exception handler</strong>, which prints the error in the format: <code>Name of Exception : Description</code> followed by the <code>stackTrace</code>.'
          ]
        },
        {
          heading: 'Exception Hierarchy',
          content: [
            '<code>Throwable</code> is the <strong>parent of the entire Java exception hierarchy</strong>. It has two child classes: <code>Exception</code> and <code>Error</code>.',
            '<strong>Exception</strong>: these are <strong>recoverable</strong>. Most cases are due to program code.',
            '<strong>Error</strong>: these are <strong>non-recoverable</strong>. Most cases are due to lack of system resources, not program code.'
          ]
        },
        {
          heading: 'Checked vs Unchecked Exceptions',
          content: [
            '<strong>Checked exceptions</strong>: the compiler checks these for smooth execution of the program. Examples: <code>IOException</code>, <code>ServletException</code>, <code>InterruptedException</code>.',
            '<strong>Unchecked exceptions</strong>: the compiler does NOT check these. Includes <code>RuntimeException</code> and its child classes, plus <code>Error</code> and its child classes.',
            '<strong>Whether checked or unchecked, exceptions always occur at runtime only.</strong>',
            '<strong>Fully checked</strong> exception: a checked exception whose ALL child classes are also checked. Example: <code>IOException</code>.',
            '<strong>Partially checked</strong> exception: a checked exception with some unchecked child classes. Examples: <code>Exception</code>, <code>Throwable</code>.'
          ],
          code: `// Hierarchy:
// Throwable
//   ├── Exception
//   │     ├── RuntimeException (unchecked)
//   │     │     ├── ArithmeticException
//   │     │     ├── NullPointerException
//   │     │     ├── ClassCastException
//   │     │     ├── IndexOutOfBoundsException
//   │     │     │     ├── ArrayIndexOutOfBoundsException
//   │     │     │     └── StringIndexOutOfBoundsException
//   │     │     └── IllegalArgumentException
//   │     │           └── NumberFormatException
//   │     ├── IOException (checked)
//   │     │     ├── FileNotFoundException
//   │     │     └── EOFException
//   │     └── InterruptedException (checked)
//   └── Error (unchecked)
//         ├── VirtualMachineError
//         │     ├── StackOverflowError
//         │     └── OutOfMemoryError
//         ├── AssertionError
//         └── LinkageError`
        },
        {
          heading: 'Control Flow in try-catch',
          content: [
            'Consider: <code>try { s1; s2; s3; } catch (X e) { s4; } s5;</code>',
            '<strong>Case 1: No exception</strong> — <code>s1, s2, s3, s5</code> execute with normal termination.',
            '<strong>Case 2: Exception at s2 and catch matches</strong> — <code>s1, s4, s5</code> execute with normal termination.',
            '<strong>Case 3: Exception at s2 and catch does NOT match</strong> — <code>s1</code> executes, then abnormal termination.',
            '<strong>Case 4: Exception at s4 or s5</strong> — always abnormal termination.'
          ]
        },
        {
          heading: 'Methods to Display Exception Information',
          content: [
            'The <code>Throwable</code> class contains three methods to display error information:',
            '<ul><li><code>printStackTrace()</code> — displays: <em>Name of Exception : Description</em> followed by the stack trace. <strong>This is what the default exception handler uses.</strong></li><li><code>toString()</code> — displays: <em>Name of Exception : Description</em></li><li><code>getMessage()</code> — displays only the <em>Description</em></li></ul>'
          ],
          code: `try {
    System.out.println(10 / 0);
} catch (ArithmeticException e) {
    e.printStackTrace();           // Name + Description + stack trace
    System.out.println(e);         // Name + Description
    System.out.println(e.getMessage());  // Description only
}`
        },
        {
          heading: 'try with Multiple catch Blocks',
          content: [
            'Since exception handling varies by exception type, a separate <code>catch</code> block is needed for each exception. Hence <strong>try with multiple catch blocks</strong> is allowed.',
            `<strong>Order of catch blocks is important</strong>: it must be from <strong>child to parent</strong>, otherwise the compiler reports <em>"Exception XXX has already been caught"</em>.`,
            'A parent catch block before a child catch block makes the child block <strong>unreachable</strong>.',
            '<strong>Unreachable catch rule:</strong> if there is no chance of raising an exception of a particular type inside the try block, then maintaining a catch block for a <strong>fully checked</strong> exception is a CE. (This rule does not apply to unchecked or partially checked exceptions.)'
          ],
          code: `// VALID: child to parent
try {
    riskyCode();
} catch (ArithmeticException e) {
    // handle AE
} catch (NullPointerException e) {
    // handle NPE
} catch (IOException e) {
    // handle IOE
} catch (Exception e) {
    // generic handler
}

// INVALID: parent first makes child unreachable
try { }
catch (Exception e) { }
catch (ArithmeticException e) { }  // CE: ArithmeticException has already been caught

// CE: IOException is never thrown in try body (fully checked)
try {
    System.out.println("Hi");
} catch (IOException e) { }         // CE`
        },
        {
          heading: 'The finally Block',
          content: [
            'Cleanup code should NOT be placed in <code>try</code> (no guarantee all statements execute) or in <code>catch</code> (only runs if the matching exception is caught).',
            'We need a block that runs <strong>always</strong> — regardless of whether an exception is raised or handled. That block is the <strong>finally block</strong>.',
            'The <strong>main objective of finally is to maintain cleanup code</strong> (e.g., closing a database connection).',
            '<strong>The finally block will NOT execute only if the system itself exits</strong> (e.g., calling <code>System.exit()</code>).'
          ],
          code: `// Case 1: no exception
// Output: try, finally   (Normal termination)
try { System.out.println("try"); }
catch (ArithmeticException e) { System.out.println("catch"); }
finally { System.out.println("finally"); }

// Case 2: caught exception
// Output: catch, finally   (Normal termination)
try { System.out.println(10 / 0); }
catch (ArithmeticException e) { System.out.println("catch"); }
finally { System.out.println("finally"); }

// Case 3: uncaught exception
// Output: finally   (Abnormal termination)
try { System.out.println(10 / 0); }
catch (NullPointerException e) { System.out.println("catch"); }
finally { System.out.println("finally"); }

// System.exit() skips finally
try {
    System.out.println("Hi");
    System.exit(0);
} finally {
    System.out.println("finally");   // does NOT print
}`
        },
        {
          heading: 'final vs finally vs finalize',
          content: [
            '<strong>final</strong>: a keyword/modifier applicable to classes, methods, and variables. Final classes cannot be extended, final methods cannot be overridden, final variables cannot be reassigned (they are constants).',
            '<strong>finally</strong>: a block associated with try-catch. The main objective is to maintain cleanup code that should always execute.',
            '<strong>finalize</strong>: a method called by the Garbage Collector just before destroying an object. The main objective is to maintain cleanup code.',
            '<strong>Note:</strong> <code>finally</code> is always <strong>recommended</strong> over <code>finalize</code> for cleanup, because the exact behavior of the Garbage Collector is JVM-dependent and not guaranteed.'
          ]
        },
        {
          heading: 'Possible Combinations of try-catch-finally',
          content: [
            'The only valid combinations of try, catch, and finally blocks are:',
            '<ul><li><code>try-catch-finally</code> ✅</li><li><code>try-catch</code> (multiple) ✅</li><li><code>try-finally</code> (no catch; exception propagates) ✅</li></ul>',
            '<strong>Invalid combinations (CE):</strong>',
            '<ul><li><code>catch</code> without <code>try</code> ❌</li><li><code>finally</code> without <code>try</code> ❌</li><li><code>try</code> without <code>catch</code> or <code>finally</code> ❌</li><li>Statement between <code>try</code> and <code>catch</code> ❌</li><li>Statement between <code>try</code>/<code>catch</code> and <code>finally</code> ❌</li><li>Multiple <code>finally</code> blocks for the same <code>try</code> ❌</li></ul>'
          ]
        },
        {
          heading: 'Control Flow in try-catch-finally (Various Cases)',
          content: [
            'For: <code>try { s1; s2; s3; } catch (X e) { s4; } finally { s5; } s6;</code>',
            '<strong>Case 1: No exception</strong> — <code>s1, s2, s3, s5, s6</code> (normal termination).',
            '<strong>Case 2: Exception at s2, catch matches</strong> — <code>s1, s4, s5, s6</code> (normal termination).',
            '<strong>Case 3: Exception at s2, catch does NOT match</strong> — <code>s1, s5, s6</code> (abnormal termination).',
            '<strong>Case 4: Exception at s4 (inside catch) or at s5/s6</strong> — abnormal termination (finally still runs if reached).',
            '<strong>Case 5: Exception at s4</strong> — <code>s1, s5</code> (abnormal termination).'
          ]
        },
        {
          heading: 'The throw Keyword',
          content: [
            'By using <code>throw</code>, we can hand over an exception object to the JVM programmatically.',
            `<code>System.out.println(10/0);</code> automatically throws <code>ArithmeticException</code>; <code>throw new ArithmeticException("/ by zero!");</code> does the same explicitly.`,
            '<strong>Syntax:</strong> <code>throw e;</code> — where <code>e</code> is a Throwable object.',
            '<strong>Rules:</strong>',
            '<ol><li>To hand over an exception object to the JVM</li><li><code>e</code> must be of type <code>Throwable</code>, otherwise CE</li><li>If <code>e</code> does not point to any object (i.e., <code>null</code>), then we get <code>NullPointerException</code></li><li>After <code>throw</code>, we cannot place any statement <strong>directly</strong>, otherwise CE. (Indirectly, e.g., inside <code>if/else</code>, is OK because the compiler cannot prove the throw is unconditional.)</li></ol>'
          ],
          code: `// CE: unreachable statement
class Test {
    public static void main(String[] args) {
        throw new ArithmeticException();
        System.out.println("After throw");   // CE: unreachable
    }
}

// VALID: throw is conditional
class Test {
    public static void main(String[] args) {
        if (false) {
            throw new ArithmeticException();
        } else {
            System.out.println("After throw statement...!");  // OK
        }
    }
}

// CE: Test is not Throwable
class Test {
    public static void main(String[] args) {
        throw new Test();   // CE: incompatible types
    }
}`
        },
        {
          heading: 'The throws Keyword',
          content: [
            `If our code may raise a <strong>checked exception</strong>, we must either handle it with try-catch or delegate the responsibility to the caller using the <code>throws</code> keyword. Violation results in a CE: <em>"UnreportedException: XXXException must be caught or declared to be thrown"</em>.`,
            '<strong>Main objective of throws:</strong> to delegate the responsibility of exception handling to the caller.',
            'Rules:',
            '<ul><li><code>throws</code> can be used only for <code>Throwable</code> types, otherwise CE</li><li>We can use <code>throws</code> keyword only for checked exceptions — using it for unchecked is allowed but useless</li><li>If a parent class constructor throws a checked exception, the child class constructor must throw the same checked exception or its parent, otherwise CE</li></ul>'
          ],
          code: `// CE: unreported exception
class Test {
    public static void main(String[] args) {
        Thread.sleep(1000);   // CE: must catch or declare InterruptedException
    }
}

// OK: delegated to caller
class Test {
    public static void main(String[] args) throws InterruptedException {
        Thread.sleep(1000);
    }
}

// Chained throws
class Test {
    public static void main(String[] args) throws InterruptedException {
        doStuff();
    }
    public static void doStuff() throws InterruptedException {
        doMoreStuff();
    }
    public static void doMoreStuff() throws InterruptedException {
        Thread.sleep(500);
    }
}`
        },
        {
          heading: 'Customized (User-Defined) Exceptions',
          content: [
            'Sometimes we need to create our own exception classes based on program requirements. These are called <strong>customized exceptions</strong>.',
            'Examples: <code>TooYoungException</code>, <code>TooOldException</code>, <code>InSufficientFundsException</code>.',
            '<strong>Recommended:</strong> define customized exceptions as <strong>unchecked</strong> — i.e., extend <code>RuntimeException</code> directly or indirectly.',
            'Always pass a meaningful <code>String</code> message to the <code>super</code> constructor for the exception description.'
          ],
          code: `class TooYoungException extends RuntimeException {
    TooYoungException(String s) { super(s); }
}

class TooOldException extends RuntimeException {
    TooOldException(String s) { super(s); }
}

class CustomExceptionDemo {
    public static void main(String[] args) {
        int age = Integer.parseInt(args[0]);
        if (age > 60) {
            throw new TooOldException("Younger age is already over");
        } else if (age < 18) {
            throw new TooYoungException("Please wait some more time");
        }
        System.out.println("Thanks for registering");
    }
}`
        },
        {
          heading: 'Top 10 Common Exceptions and Errors',
          content: [
            'All exceptions fall into two categories: <strong>JVM Exceptions</strong> (raised automatically by the JVM) and <strong>Programmatic Exceptions</strong> (raised by programmer or API code).',
            '<strong>1. NullPointerException</strong> — child of RuntimeException, unchecked. Thrown automatically when performing any operation on <code>null</code>. <code>String s = null; s.length();</code> throws NPE.',
            '<strong>2. StackOverflowError</strong> — child of Error, unchecked. Raised on <strong>recursive method invocation</strong> without a base case.',
            '<strong>3. ArrayIndexOutOfBoundsException</strong> — child of RuntimeException, unchecked. Thrown when accessing an array element with an out-of-range int index.',
            '<strong>4. ClassCastException</strong> — child of RuntimeException, unchecked. Thrown when trying to cast a parent class object to a child type.',
            '<strong>5. ArithmeticException</strong> — child of RuntimeException, unchecked. Thrown on integer division by zero.',
            `<strong>6. NumberFormatException</strong> — child of IllegalArgumentException, unchecked. Thrown when converting a bad string to a number: <code>Integer.parseInt("abc")</code>.`,
            '<strong>7. IllegalArgumentException</strong> — child of RuntimeException, unchecked. Thrown when an invalid argument is passed to a method.',
            '<strong>8. AssertionError</strong> — child of Error, unchecked. Thrown when an <code>assert</code> statement fails (used with <code>-ea</code> flag).',
            '<strong>9. OutOfMemoryError</strong> — child of Error, unchecked. Raised when the JVM runs out of heap memory.',
            '<strong>10. IOException / FileNotFoundException</strong> — checked exceptions, raised on I/O failures (file not found, network failure, etc.).'
          ],
          code: `// 1. NPE
String s = null;
System.out.println(s.length());   // NullPointerException

// 2. StackOverflowError
class Test {
    public static void m1() { m1(); }
    public static void main(String[] a) { m1(); }
}

// 3. AIOOBE
int[] a = {10, 20, 30};
System.out.println(a[20]);   // ArrayIndexOutOfBoundsException

// 4. ClassCastException
Object o = new Object();
String s2 = (String) o;       // ClassCastException at runtime

// 6. NumberFormatException
int n = Integer.parseInt("abc");   // NumberFormatException`
        }
      ]
    },
  'assertions': {
      title: 'Assertions',
      sections: [
        {
          heading: 'What is an Assertion?',
          content: [
            'An <strong>assertion</strong> is a statement that lets you test your assumptions about the program during development.',
            'It was introduced in Java 1.4 as a debugging aid.',
            'Use assertions to check internal invariants — things that should <strong>never</strong> be false if the code is correct.',
            'Assertions should <strong>not</strong> be used to validate user input or to handle expected runtime errors — use exceptions for those.'
          ]
        },
        {
          heading: 'Assertion Syntax',
          content: [
            '<strong>Two forms:</strong>',
            '<ul><li><code>assert condition;</code> — throws AssertionError if condition is false</li><li><code>assert condition : message;</code> — throws AssertionError with a custom message</li></ul>',
            'By default, assertions are <strong>disabled</strong> at runtime. You must enable them with the <code>-ea</code> (enable assertions) JVM flag.',
            'If assertions are disabled, the assertion statement is skipped entirely — zero overhead.'
          ],
          code: `public class AssertionDemo {
    public static void main(String[] args) {
        int age = 15;
        
        // This assertion checks that age is positive
        assert age > 0 : "Age must be positive, got: " + age;
        
        // This will throw AssertionError if grade is out of range
        int grade = 105;
        assert grade >= 0 && grade <= 100 : "Invalid grade: " + grade;
        
        System.out.println("Assertions passed (if enabled)");
    }
}`
        },
        {
          heading: 'When to Use Assertions',
          content: [
            '<ul><li><strong>Internal invariants:</strong> checking something that should always be true during normal execution</li><li><strong>Control-flow invariants:</strong> verifying that a certain code path is never reached (e.g., default case in a switch that should handle all values)</li><li><strong>Post-conditions:</strong> checking the state after a method completes</li></ul>',
            '<strong>Do NOT use assertions for:</strong>',
            '<ul><li>Validating user input — use exceptions or return codes</li><li>Checking conditions in public API methods — throw IllegalArgumentException instead</li><li>Controlling program flow — assertions may be disabled</li></ul>'
          ]
        },
        {
          heading: 'Enabling and Disabling Assertions',
          content: [
            'Assertions are disabled by default.',
            'To enable them, run your program with the <code>-ea</code> flag:',
            '<code>java -ea AssertionDemo</code>',
            'To disable: <code>java -da AssertionDemo</code> (default)',
            'You can also enable/disable per-class or per-package:',
            '<ul><li><code>java -ea:com.example.MyClass MyApp</code></li><li><code>java -ea:com.example... MyApp</code></li></ul>'
          ]
        }
      ]
    },
  'java-coding-standards': {
      title: 'Java Coding Standards',
      sections: [
        {
          heading: 'Java Naming Conventions',
          content: [
            'Following consistent naming conventions makes code more readable and maintainable.',
            '<ul><li><strong>Class/Interface names:</strong> PascalCase — <code>StudentRecord</code>, <code>PaymentGateway</code></li><li><strong>Method/variable names:</strong> camelCase — <code>calculateTotal()</code>, <code>studentName</code></li><li><strong>Constants:</strong> UPPER_SNAKE_CASE — <code>MAX_SIZE</code>, <code>PI_VALUE</code></li><li><strong>Package names:</strong> all lowercase, reverse domain — <code>com.company.project</code></li></ul>',
            'Names should be descriptive — avoid single-letter names except in small loops.'
          ]
        },
        {
          heading: 'Source File Structure',
          content: [
            'A Java source file should follow this order:',
            '<ol><li>Package declaration (if any)</li><li>Import statements</li><li>Class/interface declarations</li><li>Inside a class: fields → constructors → methods</li></ol>',
            'Only one public class per file, and the filename must match the public class name.'
          ],
          code: `package com.example.utils;

import java.util.List;
import java.util.ArrayList;

public class DataProcessor {
    // Constants
    public static final int MAX_ITEMS = 100;
    
    // Fields
    private List<String> items;
    private boolean isActive;
    
    // Constructors
    public DataProcessor() {
        this.items = new ArrayList<>();
        this.isActive = true;
    }
    
    // Public methods
    public void addItem(String item) {
        if (items.size() < MAX_ITEMS) {
            items.add(item);
        }
    }
    
    // Private helper methods
    private boolean isValid(String item) {
        return item != null && !item.isEmpty();
    }
}`
        },
        {
          heading: 'Best Practices',
          content: [
            '<ul><li>Keep methods short and focused — one responsibility per method</li><li>Use meaningful variable names — <code>customerAge</code> instead of <code>ca</code></li><li>Avoid magic numbers — use named constants</li><li>Always use braces for if/else, even for single-line blocks</li><li>Document public APIs with Javadoc comments</li><li>Use <code>final</code> for variables that do not change</li><li>Prefer interfaces over concrete types in declarations</li><li>Handle exceptions properly — do not swallow them</li><li>Close resources (files, connections) in finally or use try-with-resources</li></ul>'
          ]
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
            `Write a program that creates a file named "notes.txt" and writes 3 lines to it.`,
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
        },
        {
          heading: 'The File Class — Names vs Actual Files',
          content: [
            'A <code>java.io.File</code> object represents just the <strong>name</strong> of a file or directory — it does <strong>not</strong> represent the contents of the file. Whether the physical file exists or not, creating a <code>File</code> object will not create the physical file.',
            'If the file does not exist, the <code>File</code> object simply represents the name; if it does exist, the object represents the physical file.'
          ],
          code: `import java.io.*;
class FileDemo {
    public static void main(String[] args) throws IOException {
        File f = new File("cba.txt");
        System.out.println(f.exists());   // false (first run)
        f.createNewFile();
        System.out.println(f.exists());   // true
    }
}

// File objects can also represent directories
class FileDirDemo {
    public static void main(String[] args) {
        File f = new File("bbc");
        System.out.println(f.exists());
        f.mkdir();
        System.out.println(f.exists());
    }
}`
        },
        {
          heading: 'File Class Constructors',
          content: [
            'The <code>File</code> class has three constructors:'
          ],
          code: `// 1) From a name string
File f1 = new File("abc.txt");

// 2) From subdirectory and name
File f2 = new File("raju123", "file1.txt");

// 3) From a parent File and name
File parent = new File("raju123");
File f3 = new File(parent, "file1.txt");`
        },
        {
          heading: 'Important File Class Methods',
          content: [
            'The most commonly used <code>File</code> methods:'
          ],
          code: `import java.io.*;
class FileMethods {
    public static void main(String[] args) throws IOException {
        // 1) exists() — whether physical file/directory exists
        File f = new File("xyz.txt");
        System.out.println(f.exists());   // false
        f.createNewFile();
        System.out.println(f.exists());   // true

        // 2) createNewFile() — returns true if a new file was created
        //                      false if the file already exists
        System.out.println(f.createNewFile());   // false (already exists)

        // 3) mkdir() — create a directory
        File dir = new File("mydir");
        System.out.println(dir.mkdir());

        // 4) isFile() / isDirectory()
        System.out.println(f.isFile());           // true
        System.out.println(dir.isDirectory());   // true

        // 5) list() — returns String[] of names in a directory
        //             returns null if File represents a file
        File jdk = new File("jdk");
        if (jdk.isDirectory()) {
            String[] names = jdk.list();
            for (String s : names) {
                System.out.println(s);
            }
        }

        // 6) delete() — deletes the file or directory
        System.out.println(f.delete());

        // 7) length() — size in bytes
        System.out.println(f.length());

        // 8) renameTo(File dest) — rename
        // 9) getName(), getPath(), getAbsolutePath(), getParent()
        // 10) canRead(), canWrite(), canExecute() — permission checks
    }
}`
        },
        {
          heading: 'FileWriter — Writing Character Data',
          content: [
            '<code>FileWriter</code> is used for writing <strong>character data</strong> to a file.',
            'Constructors: <code>new FileWriter(String name)</code>, <code>new FileWriter(File f)</code>, <code>new FileWriter(String name, boolean append)</code>, <code>new FileWriter(File f, boolean append)</code>.',
            'If the file already contains data, it will be <strong>overwritten</strong> unless the append-mode constructor is used.',
            'If the underlying physical file does not exist, these constructors will <strong>create</strong> the required file automatically.',
            '<strong>Methods:</strong> <code>write(int ch)</code>, <code>write(String s)</code>, <code>write(char[] ch)</code>, <code>flush()</code> (guarantees the last character is written to the file), <code>close()</code>.'
          ],
          code: `import java.io.*;
class FileWriterDemo {
    public static void main(String[] args) throws Exception {
        File f = new File("pongal.txt");
        System.out.println(f.exists());   // false (initially)
        FileWriter fw = new FileWriter(f, true);  // append mode
        System.out.println(f.exists());   // true (created)

        fw.write(97);                      // writes 'a'
        fw.write("run
software
");       // writes "run", newline, "software", newline
        char[] ch = {'a', 'b', 'c'};
        fw.write(ch);                      // writes abc
        fw.flush();
        fw.close();
    }
}`
        },
        {
          heading: 'FileReader — Reading Character Data',
          content: [
            '<code>FileReader</code> is used for reading <strong>character data</strong> from a file.',
            'Constructors: <code>new FileReader(String name)</code>, <code>new FileReader(File f)</code>.',
            '<strong>Methods:</strong> <code>int read()</code> (returns the next character, or <code>-1</code> if end of file), <code>int read(char[] ch)</code>, <code>close()</code>.',
            '<strong>Drawback</strong>: with <code>FileWriter</code>, the programmer must insert line separators manually. With <code>FileReader</code>, data can be read only character-by-character, increasing I/O operations and hurting performance.',
            'To overcome these problems, use <code>BufferedReader</code> and <code>BufferedWriter</code>.'
          ],
          code: `import java.io.*;
class FileReaderDemo {
    public static void main(String[] args) throws Exception {
        File f = new File("pongal.txt");
        FileReader fr = new FileReader(f);
        System.out.println(fr.read());         // first character (int)

        char[] ch = new char[(int) f.length()];
        fr.read(ch);
        for (char c : ch) System.out.print(c);

        fr.close();
    }
}`
        },
        {
          heading: 'BufferedWriter — Buffered Writing',
          content: [
            '<code>BufferedWriter</code> never communicates directly with the file. It must communicate through a <code>Writer</code> object only.',
            'Constructors: <code>new BufferedWriter(Writer w)</code>, <code>new BufferedWriter(Writer w, int size)</code>.',
            `<strong>Valid declarations:</strong> <code>new BufferedWriter(new FileWriter("abc.txt"))</code> and <code>new BufferedWriter(new BufferedWriter(new FileWriter("abc.txt")))</code>.`,
            `<strong>Invalid declarations:</strong> passing a String or a <code>File</code> object directly — <code>new BufferedWriter("abc.txt")</code> and <code>new BufferedWriter(new File("abc.txt"))</code> are <em>compile-time errors</em>.`,
            '<strong>Methods:</strong> <code>write(int ch)</code>, <code>write(String s)</code>, <code>write(char[] ch)</code>, <code>newLine()</code>, <code>flush()</code>, <code>close()</code>.',
            '<strong>Key feature</strong>: <code>newLine()</code> is available in <code>BufferedWriter</code> but <strong>not</strong> in <code>FileWriter</code>. This is the main reason to prefer <code>BufferedWriter</code>.',
            'When you close <code>BufferedWriter</code>, the underlying <code>FileWriter</code> object is also closed automatically.'
          ],
          code: `import java.io.*;
class BufferedWriterDemo {
    public static void main(String[] args) throws Exception {
        File f = new File("pongal.txt");
        FileWriter fw = new FileWriter(f);
        BufferedWriter bw = new BufferedWriter(fw);

        bw.write(97);
        bw.newLine();
        char[] ch = {'a', 'b', 'c', 'd'};
        bw.write(ch);
        bw.newLine();
        bw.write("raju");
        bw.newLine();
        bw.write("software");
        bw.flush();
        bw.close();   // also closes fw
    }
}`
        },
        {
          heading: 'BufferedReader — Buffered Reading',
          content: [
            '<code>BufferedReader</code> must communicate through a <code>Reader</code> object only — it never communicates directly with the file.',
            'Constructors: <code>new BufferedReader(Reader r)</code>, <code>new BufferedReader(Reader r, int bufferSize)</code>.',
            '<strong>Methods:</strong> <code>read()</code>, <code>read(char[] ch)</code>, <code>readLine()</code> (returns the next line, or <code>null</code> at end of file), <code>close()</code>.',
            'When you close <code>BufferedReader</code>, the underlying <code>FileReader</code> object is also closed automatically.'
          ],
          code: `import java.io.*;
class BufferedReaderDemo {
    public static void main(String[] args) throws Exception {
        FileReader fr = new FileReader("pongal.txt");
        BufferedReader br = new BufferedReader(fr);
        String s = br.readLine();
        while (s != null) {
            System.out.println(s);
            s = br.readLine();
        }
        br.close();
    }
}`
        },
        {
          heading: 'PrintWriter — The Most Enhanced Writer',
          content: [
            '<code>PrintWriter</code> is the most enhanced writer for character data — it supports direct file paths and auto-flushing on <code>println</code>.',
            'Constructors: <code>new PrintWriter(String fname)</code>, <code>new PrintWriter(File f)</code>, <code>new PrintWriter(Writer w)</code>.',
            '<strong>Methods:</strong> <code>write(int ch)</code>, <code>write(char[] ch)</code>, <code>write(String s)</code>, <code>print(...)</code> (int, double, char, boolean, char[]), <code>println(...)</code>, <code>flush()</code>, <code>close()</code>.'
          ],
          code: `import java.io.*;
class PrintWriterDemo {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("pongal.txt");
        PrintWriter out = new PrintWriter(fw);
        out.write(97);        // 'a'
        out.println(100);     // 100
        out.println(true);    // true
        out.println('c');     // c
        out.println("FDGH");  // FDGH
        out.flush();
        out.close();
    }
}`
        }
      ]
    },
  'serialization': {
      title: 'Serialization',
      sections: [
        {
          heading: 'What is Serialization?',
          content: [
            'Serialization is the process of saving an object to a file — or more generally, converting an object into a byte stream.',
            'The reverse process — reading the byte stream back into an object — is called deserialization.',
            'Serialization is used for:',
            '<ul><li>Saving object state to disk (persistence)</li><li>Sending objects over a network (RMI, sockets)</li><li>Storing objects in databases as binary data (BLOBs)</li><li>Deep copying objects</li></ul>'
          ]
        },
        {
          heading: 'How to Make a Class Serializable',
          content: [
            'A class must implement the <code>java.io.Serializable</code> interface to be serializable.',
            'This interface has no methods — it is a marker interface.',
            'If a class contains non-serializable members, mark them with <code>transient</code> to skip them during serialization.'
          ],
          code: `import java.io.*;

class Employee implements Serializable {
    int id;
    String name;
    transient String password; // won't be saved
    
    Employee(int id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}

public class SerializationDemo {
    public static void main(String[] args) throws Exception {
        Employee emp = new Employee(1, "Alice", "secret123");
        
        // Serialize
        ObjectOutputStream oos = new ObjectOutputStream(
            new FileOutputStream("emp.ser"));
        oos.writeObject(emp);
        oos.close();
        System.out.println("Serialized successfully");
        
        // Deserialize
        ObjectInputStream ois = new ObjectInputStream(
            new FileInputStream("emp.ser"));
        Employee restored = (Employee) ois.readObject();
        ois.close();
        
        System.out.println("ID: " + restored.id);
        System.out.println("Name: " + restored.name);
        System.out.println("Password: " + restored.password); // null (transient)
    }
}`
        },
        {
          heading: 'Serial Version UID',
          content: [
            'When serializing, Java stores a version ID in the stream.',
            'If the class changes after serialization, deserialization may fail with <code>InvalidClassException</code>.',
            'To avoid this, explicitly declare <code>serialVersionUID</code> in your class.',
            '<code>private static final long serialVersionUID = 1L;</code>'
          ]
        },
        {
          heading: 'Serialization of Object Graphs',
          content: [
            'If an object contains references to other objects, Java serializes the entire object graph (all referenced objects) automatically.',
            'All objects in the graph must also implement <code>Serializable</code>, or you will get <code>NotSerializableException</code>.'
          ]
        },
        {
          heading: 'Strict Definition and Classes Used',
          content: [
            '<strong>Serialization</strong> is the process of converting an object from a <strong>Java-supported format</strong> to a <strong>network- or file-supported format</strong>. <strong>Deserialization</strong> is the reverse process — converting from a file/network format back to a Java-supported format.',
            'Implemented using <code>FileOutputStream</code> + <code>ObjectOutputStream</code> (for serialization) and <code>FileInputStream</code> + <code>ObjectInputStream</code> (for deserialization).'
          ],
          code: `class Dog implements Serializable {
    int i = 10;
    int j = 20;
}

class SerializeDemo {
    public static void main(String[] args) throws Exception {
        Dog d = new Dog();
        FileOutputStream fos = new FileOutputStream("abc.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(d);

        FileInputStream fis = new FileInputStream("abc.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Dog d1 = (Dog) ois.readObject();
        System.out.println(d1.i + "---" + d1.j);   // 10---20
    }
}`
        },
        {
          heading: 'transient Keyword — Excluding Fields from Serialization',
          content: [
            'If you do not want to serialize the value of a particular variable (e.g., to meet security constraints), declare it as <code>transient</code>. The JVM ignores transient variables and saves <strong>default values</strong> instead of original values.',
            '<strong>static</strong> variables are not part of object state and do <strong>not</strong> participate in serialization. Hence declaring <code>static</code> as <code>transient</code> has no impact, and similarly for <code>final</code> fields.'
          ],
          table: {
            headers: [
              'Declaration',
              'Output after deserialization (i, j)'
            ],
            rows: [
              [
                'int i = 10; int j = 20;',
                '10, 20'
              ],
              [
                'static int i = 10; static transient int j = 20;',
                '10, 20 (static not serialized)'
              ],
              [
                'transient int i = 10; static transient int j = 20;',
                '0, 20'
              ],
              [
                'transient static int i = 10; transient int j = 20;',
                '10, 0'
              ],
              [
                'transient int i = 10; transient final int j = 20;',
                '0, 20'
              ]
            ]
          }
        },
        {
          heading: 'Object Graphs in Serialization',
          content: [
            'When saving an object to a file, all objects <strong>reachable from</strong> that object are saved by default. This group of objects is called the <strong>Object Graph</strong>.',
            'If <strong>any</strong> object in the graph is non-serializable, a runtime <code>NotSerializableException</code> is thrown.'
          ],
          code: `import java.io.*;
class Dog implements Serializable {
    Cat c = new Cat();
}
class Cat implements Serializable {
    Rat r = new Rat();
}
class Rat implements Serializable {
    int j = 20;
}

class SerializeDemo {
    public static void main(String[] args) throws Exception {
        Dog d = new Dog();
        FileOutputStream fos = new FileOutputStream("abc.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(d);

        FileInputStream fis = new FileInputStream("abc.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Dog d1 = (Dog) ois.readObject();
        System.out.println(d1.c.r.j);   // 20
    }
}
// If any of Dog/Cat/Rat is not Serializable -> java.io.NotSerializableException`
        },
        {
          heading: 'Customized Serialization — writeObject and readObject',
          content: [
            'During default serialization, information can be <strong>lost</strong> because of transient variables. To recover this information, customize the serialization process.',
            'Two special <code>private</code> methods are recognized by the JVM and called automatically at the time of serialization / deserialization:',
            '<ul><li><code>private void writeObject(ObjectOutputStream os) throws IOException</code> — invoked automatically by the JVM at serialization time.</li><li><code>private void readObject(ObjectInputStream is) throws IOException, ClassNotFoundException</code> — invoked automatically at deserialization time.</li></ul>',
            "<strong>Key pattern</strong>: in <code>writeObject</code>, capture the transient field's data into a primitive and write it. In <code>readObject</code>, read the primitive, call <code>defaultReadObject()</code> first, then reconstruct the transient object."
          ],
          code: `import java.io.*;
class Dog implements Serializable {
    transient Cat c = new Cat();

    private void writeObject(ObjectOutputStream os) throws IOException {
        int x = c.j;       // capture the lost information
        os.writeInt(x);
    }

    private void readObject(ObjectInputStream is) throws IOException, ClassNotFoundException {
        is.defaultReadObject();
        int k = is.readInt();
        c = new Cat();
        c.j = k;           // restore the lost information
    }
}
class Cat {
    int j = 20;
}

class SerializeDemo {
    public static void main(String[] args) throws Exception {
        Dog d = new Dog();
        System.out.println("Before Serialization: " + d.c.j);   // 20
        FileOutputStream fos = new FileOutputStream("abc.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(d);

        FileInputStream fis = new FileInputStream("abc.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Dog d1 = (Dog) ois.readObject();
        System.out.println(d1.c.j);   // 20 (recovered)
    }
}`
        },
        {
          heading: 'Inheritance in Serialization',
          content: [
            '<strong>Case 1: Parent is Serializable</strong> — by default, all child classes are also Serializable. Serializable nature is inherited from parent to child.',
            '<strong>Case 2: Child is Serializable, Parent is NOT</strong> — you are still allowed to serialize child objects. During serialization, the JVM <strong>ignores the inherited variables</strong> from non-serializable parents. During deserialization, the JVM checks whether any parent is non-serializable; if so, it creates an object for <strong>every</strong> non-serializable parent (using its no-argument constructor) and shares its instance variables with the current child object.',
            '<strong>Rule</strong>: every non-serializable parent class <strong>must</strong> contain a no-argument constructor — otherwise <code>InvalidClassException</code> is thrown at runtime.'
          ],
          code: `// Case 1: Serializable parent, child inherits
import java.io.*;
class Animal implements Serializable {
    int i = 10;
}
class Dog extends Animal {
    int j = 20;
}
class SerializeDemo {
    public static void main(String[] args) throws Exception {
        Dog d = new Dog();
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("abc.ser"));
        oos.writeObject(d);
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("abc.ser"));
        Dog d1 = (Dog) ois.readObject();
        System.out.println(d1.i + "-----" + d1.j);   // 10-----20
    }
}

// Case 2: Non-serializable parent, serializable child
class Animal2 {
    int i = 10;
    Animal2() { System.out.println("Animal Constructor"); }   // required no-arg
}
class Dog2 extends Animal2 implements Serializable {
    int j = 20;
    Dog2() { System.out.println("Dog Constructor"); }
}
class SerializeDemo2 {
    public static void main(String[] args) throws Exception {
        Dog2 d = new Dog2();
        d.i = 888;
        d.j = 999;
        System.out.println(d.i + "-----" + d.j);   // 888-----999

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("abc.ser"));
        oos.writeObject(d);

        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("abc.ser"));
        Dog2 d1 = (Dog2) ois.readObject();
        // 'i' was inherited from non-serializable parent - JVM creates Animal2
        // and shares the default value of i=10 (not 888). 'j' is preserved.
        System.out.println(d1.i + "-----" + d1.j);   // 10-----999
    }
}`
        }
      ]
    },
  'internationalization': {
      title: 'Internationalization (i18n)',
      sections: [
        {
          heading: 'What is Internationalization?',
          content: [
            'Internationalization (i18n) is the process of designing applications to support multiple languages and regions.',
            'Java provides built-in support through the <code>java.util</code> and <code>java.text</code> packages.',
            'Key classes:',
            '<ul><li><code>Locale</code> — represents a specific geographic, political, or cultural region</li><li><code>NumberFormat</code> — formats numbers for different locales</li><li><code>DateFormat</code> — formats dates for different locales</li><li><code>ResourceBundle</code> — loads locale-specific strings/resources</li></ul>'
          ]
        },
        {
          heading: 'Locale',
          content: [
            'A <code>Locale</code> object represents a region.',
            'You create one using language code and optional country code:',
            `<code>Locale.US</code>, <code>Locale.UK</code>, <code>Locale.JAPAN</code>, <code>new Locale("en", "IN")</code>`
          ],
          code: `import java.util.Locale;
import java.text.NumberFormat;
import java.text.DateFormat;
import java.util.Date;

public class I18nDemo {
    public static void main(String[] args) {
        // Available locales
        Locale us = Locale.US;
        Locale india = new Locale("en", "IN");
        Locale japan = Locale.JAPAN;
        
        System.out.println("US: " + us.getDisplayName());
        System.out.println("India: " + india.getDisplayName());
        System.out.println("Japan: " + japan.getDisplayName());
        
        // Number formatting
        double amount = 1234567.89;
        NumberFormat usFormat = NumberFormat.getCurrencyInstance(us);
        NumberFormat indiaFormat = NumberFormat.getCurrencyInstance(india);
        
        System.out.println("US: " + usFormat.format(amount));      // $1,234,567.89
        System.out.println("India: " + indiaFormat.format(amount)); // ₹1,234,567.89
        
        // Date formatting
        Date now = new Date();
        DateFormat usDate = DateFormat.getDateInstance(DateFormat.FULL, us);
        DateFormat jpDate = DateFormat.getDateInstance(DateFormat.FULL, japan);
        
        System.out.println("US Date: " + usDate.format(now));
        System.out.println("Japan Date: " + jpDate.format(now));
    }
}`
        },
        {
          heading: 'ResourceBundle for Text',
          content: [
            'Store localized strings in <code>.properties</code> files:',
            '<code>Messages_en.properties</code> — English text',
            '<code>Messages_fr.properties</code> — French text',
            "Load the right bundle based on the user's locale."
          ],
          code: `import java.util.ResourceBundle;
import java.util.Locale;

public class ResourceBundleDemo {
    public static void main(String[] args) {
        // Load French resources
        Locale french = new Locale("fr", "FR");
        ResourceBundle bundle = ResourceBundle.getBundle("Messages", french);
        
        System.out.println(bundle.getString("greeting"));  // Bonjour
        System.out.println(bundle.getString("farewell"));  // Au revoir
    }
}`
        },
        {
          heading: 'i18n Classes Used in the SCJP Syllabus',
          content: [
            'Internationalization is the process of developing an application so that it can be used in any environment — supporting various languages and countries <strong>without making any changes in the application</strong>. This is achieved by using the following three classes:',
            '<ul><li><code>Locale</code> — to represent a particular region</li><li><code>NumberFormat</code> — for formatting numbers</li><li><code>DateFormat</code> — for formatting dates</li></ul>'
          ]
        },
        {
          heading: 'Locale Class — Full API',
          content: [
            'A <code>Locale</code> object represents a particular region with respect to country (or) language. It is a <code>final</code> class available in <code>java.util</code> and implements <code>Serializable</code> and <code>Cloneable</code>.',
            '<strong>Constructors:</strong>',
            '<ul><li><code>Locale l = new Locale(String language);</code></li><li><code>Locale l = new Locale(String language, String country);</code></li></ul>',
            'Standard locale objects are defined as constants, e.g. <code>Locale.UK</code>, <code>Locale.ITALY</code>, <code>Locale.US</code>, <code>Locale.CHINA</code>.'
          ],
          code: `import java.util.*;
class LocaleDemo1 {
    public static void main(String[] args) {
        Locale l = Locale.getDefault();
        System.out.println(l.getCountry() + "..." + l.getLanguage());
        System.out.println(l.getDisplayCountry() + "..." + l.getDisplayLanguage());

        Locale l2 = new Locale("pa", "IN");
        Locale.setDefault(l2);

        String[] s3 = Locale.getISOLanguages();
        for (String s4 : s3) System.out.println(s4);

        String[] s5 = Locale.getISOCountries();
        for (String s6 : s5) System.out.println(s6);

        Locale[] l3 = Locale.getAvailableLocales();
        for (Locale l4 : l3) {
            System.out.println(l4);
            System.out.println(l4.getDisplayCountry() + "....." + l4.getDisplayLanguage());
        }
    }
}`
        },
        {
          heading: 'Locale — Important Methods',
          content: [
            'Common <code>Locale</code> class methods:'
          ],
          code: `import java.util.*;
class LocaleMethods {
    public static void main(String[] args) {
        Locale l = new Locale("pa", "IN");
        // 1) Default locale
        Locale def = Locale.getDefault();
        System.out.println(def.getCountry() + " " + def.getLanguage());

        // 2) Set default
        Locale.setDefault(l);

        // 3) Get country / display country
        System.out.println(l.getCountry());           // IN
        System.out.println(l.getDisplayCountry());    // India

        // 4) Get language / display language
        System.out.println(l.getLanguage());          // pa
        System.out.println(l.getDisplayLanguage());   // Punjabi

        // 5) ISO countries / languages
        String[] countries = Locale.getISOCountries();
        for (String c : countries) System.out.println(c);
        String[] langs = Locale.getISOLanguages();
        for (String s : langs) System.out.println(s);

        // 6) Available locales
        for (Locale avail : Locale.getAvailableLocales()) {
            System.out.println(avail);
        }
    }
}`
        },
        {
          heading: 'NumberFormat — Formatting Numbers by Locale',
          content: [
            '<code>NumberFormat</code> can be used for formatting numbers according to a particular locale. It is available in <code>java.text</code> package.',
            '<strong>Factory methods:</strong>',
            '<ul><li><code>getInstance()</code> / <code>getNumberInstance()</code></li><li><code>getCurrencyInstance()</code></li><li><code>getPercentInstance()</code></li><li>Same methods overloaded with <code>Locale l</code> for a specific locale, e.g. <code>getCurrencyInstance(Locale l)</code></li></ul>',
            '<strong>Conversion methods:</strong> <code>String format(long l)</code>, <code>String format(double d)</code> (Java number → locale-specific form), and <code>Number parse(String s)</code> throws <code>ParseException</code> (locale-specific form → Java number).',
            '<strong>Min/Max digits methods:</strong> <code>setMaximumIntegerDigits(int n)</code>, <code>setMinimumIntegerDigits(int n)</code>, <code>setMaximumFractionDigits(int n)</code>, <code>setMinimumFractionDigits(int n)</code>.'
          ],
          code: `import java.text.*;
import java.util.*;
class NumberFormatDemo {
    public static void main(String[] args) {
        double d1 = 123456.789;

        Locale india = new Locale("pa", "IN");
        NumberFormat nf = NumberFormat.getCurrencyInstance(india);
        System.out.println("India Notation: " + nf.format(d1));

        NumberFormat nf1 = NumberFormat.getCurrencyInstance(Locale.ITALY);
        System.out.println("Italy Notation: " + nf1.format(d1));

        NumberFormat nf2 = NumberFormat.getCurrencyInstance(Locale.CHINA);
        System.out.println("China Notation: " + nf2.format(d1));

        NumberFormat nf3 = NumberFormat.getCurrencyInstance(Locale.US);
        System.out.println("US Notation: " + nf3.format(d1));
    }
}

// Min/Max digit cases
class DigitsDemo {
    public static void main(String[] args) {
        NumberFormat nf = NumberFormat.getInstance();
        // Case 1
        nf.setMaximumIntegerDigits(4);
        System.out.println(nf.format(123456.789));   // 3,456.789

        // Case 2
        nf.setMinimumIntegerDigits(4);
        System.out.println(nf.format(12.456));       // 0012.456

        // Case 3
        nf.setMaximumFractionDigits(2);
        System.out.println(nf.format(123456.789));   // 123,456.79

        // Case 4
        nf.setMinimumFractionDigits(3);
        System.out.println(nf.format(123.4));        // 123.400
    }
}`
        },
        {
          heading: 'DateFormat — Formatting Dates by Locale',
          content: [
            '<code>DateFormat</code> can be used for formatting dates according to a particular locale. It is available in <code>java.text</code> and is an <strong>abstract class</strong> — you cannot create an object using the constructor: <code>new DateFormat()</code> is a compile-time error.',
            '<strong>Factory methods (default locale):</strong>',
            '<ul><li><code>public static DateFormat getDateInstance();</code></li><li><code>public static DateFormat getDateInstance(int style);</code></li></ul>',
            '<strong>Styles:</strong> <code>FULL = 0</code>, <code>LONG = 1</code>, <code>MEDIUM = 2</code>, <code>SHORT = 3</code>.',
            '<strong>For a specific locale:</strong> <code>public static DateFormat getDateInstance(int style, Locale l)</code>.',
            '<strong>Conversion methods:</strong> <code>String format(Date d)</code> (Java Date → locale form) and <code>Date parse(String s) throws ParseException</code> (locale form → Java Date).',
            '<strong>Date + Time methods:</strong> <code>getDateTimeInstance()</code>, <code>getDateTimeInstance(int dateStyle, int timeStyle)</code>, <code>getDateTimeInstance(int dateStyle, int timeStyle, Locale l)</code>.'
          ],
          code: `import java.text.*;
import java.util.*;
class DateFormatDemo {
    public static void main(String[] args) {
        // Default locale — all 4 styles
        System.out.println("Full form is    --" + DateFormat.getDateInstance(0).format(new Date()));
        System.out.println("Long form is    --" + DateFormat.getDateInstance(1).format(new Date()));
        System.out.println("Medium form is  --" + DateFormat.getDateInstance(2).format(new Date()));
        System.out.println("Short form is   --" + DateFormat.getDateInstance(3).format(new Date()));
    }
}

// Specific locales for FULL date style
class DateFormatLocaleDemo {
    public static void main(String[] args) {
        DateFormat UK    = DateFormat.getDateInstance(0, Locale.UK);
        DateFormat US    = DateFormat.getDateInstance(0, Locale.US);
        DateFormat ITALY = DateFormat.getDateInstance(0, Locale.ITALY);

        System.out.println("UK Style is    --" + UK.format(new Date()));
        System.out.println("US Style is    --" + US.format(new Date()));
        System.out.println("ITALY Style is --" + ITALY.format(new Date()));
    }
}

// Both date and time
class DateTimeFormatDemo {
    public static void main(String[] args) {
        DateFormat ITALY = DateFormat.getDateTimeInstance(0, 0, Locale.ITALY);
        System.out.println("ITALY Style is --" + ITALY.format(new Date()));
    }
}`
        }
      ]
    },
};

const javaModule4Content = {
    'collections-deep-dive': {
      title: 'Collections Deep Dive',
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
          heading: 'Limitations of Object Arrays',
          content: [
            'An <strong>array</strong> is an indexed collection of a <strong>fixed number of homogeneous data elements</strong>.',
            '<strong>Main limitations of object arrays:</strong>',
            '<ol><li>Arrays are <strong>fixed in size</strong> — once created, size cannot be increased or decreased.</li><li>Arrays can hold <strong>only homogeneous</strong> data elements (with type-specific arrays). Object arrays allow heterogeneous data but you still need casting.</li><li>For arrays there is <strong>no underlying data structure</strong> — no default support for sorting, searching, or duplicate prevention.</li></ol>',
            'To resolve these problems, the <code>Collection</code> concept was introduced. Collections are <strong>growable</strong>, can hold <strong>heterogeneous</strong> data, and every collection class is built on a data structure with ready-made methods for sorting, searching, etc.'
          ]
        },
        {
          heading: 'Collections vs Arrays',
          content: [
            'A side-by-side comparison:'
          ],
          table: {
            headers: [
              'Property',
              'Collections',
              'Arrays'
            ],
            rows: [
              [
                'Size',
                'Not fixed in size (growable)',
                'Fixed in size'
              ],
              [
                'Memory',
                'Better (growable)',
                'Not as good (over-allocated or wasted)'
              ],
              [
                'Performance',
                'Worst (overhead for structure maintenance)',
                'Recommended for performance'
              ],
              [
                'Data elements',
                'Can hold heterogeneous data',
                'Arrays can hold only homogeneous (typed) or Object[]'
              ],
              [
                'Data structure',
                'Every class is built on a data structure',
                'No underlying data structure'
              ],
              [
                'Primitives vs Objects',
                'Can hold <strong>only Objects</strong> (not primitives)',
                'Can hold both Objects and primitives'
              ]
            ]
          }
        },
        {
          heading: 'The 7 Key Interfaces of the Collection Framework',
          content: [
            'The Collection Framework is the group of classes and interfaces that can be used to represent a <strong>collection of objects as a single entity</strong>. (In C++ this is the STL or <em>container</em>.)',
            'The 7 key interfaces are:',
            '<ol><li><code>Collection</code> — root interface for the entire framework (java.util). Represents a group of objects as a single entity. No concrete class implements <code>Collection</code> directly.</li><li><code>List</code> — child of <code>Collection</code>. Preserves <strong>insertion order</strong> and <strong>allows duplicates</strong>. Implemented by <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>, <code>Stack</code>.</li><li><code>Set</code> — child of <code>Collection</code>. <strong>Duplicates not allowed</strong>; insertion order <strong>not preserved</strong>. Implemented by <code>HashSet</code> and <code>LinkedHashSet</code>.</li><li><code>SortedSet</code> — child of <code>Set</code>. Elements inserted in some <strong>sorting order</strong>. Implemented by <code>TreeSet</code>.</li><li><code>Queue</code> (1.5+) — child of <code>Collection</code>. Represents a group of objects <strong>prior to processing</strong>. Implemented by <code>PriorityQueue</code> and indirectly by <code>LinkedList</code>.</li><li><code>Map</code> — <strong>not</strong> a child of <code>Collection</code>. Represents a group of objects as <strong>key-value pairs</strong>. Both key and value are objects.</li><li><code>SortedMap</code> — child of <code>Map</code>. Entries arranged in <strong>sorting order of keys</strong>. Implemented by <code>TreeMap</code>.</li></ol>',
            '<strong>Legacy classes</strong> in the framework (re-engineered in 1.2 to fit in): <code>Vector</code>, <code>Stack</code>, <code>Hashtable</code>, <code>Properties</code>, <code>Dictionary</code> (abstract), <code>Enumeration</code> (interface).'
          ]
        },
        {
          heading: 'Collection vs Collections',
          content: [
            '<code>Collection</code> is an <strong>interface</strong> in <code>java.util</code> for representing a group of objects as a single entity.',
            '<code>Collections</code> is a <strong>utility class</strong> in <code>java.util</code> that defines several utility methods for collection-implemented class objects (sorting, searching, synchronized wrappers, etc.).',
            '<strong>Common utility methods on Collections:</strong>',
            '<ul><li><code>Collections.synchronizedList(List)</code> — returns a synchronized (thread-safe) view of the given list. Used to make <code>ArrayList</code> thread-safe.</li><li><code>Collections.synchronizedSet(Set)</code></li><li><code>Collections.synchronizedMap(Map)</code></li><li><code>Collections.sort(List)</code>, <code>Collections.min</code>, <code>Collections.max</code>, <code>Collections.shuffle</code>, etc.</li></ul>'
          ]
        },
        {
          heading: 'Collection Interface Methods',
          content: [
            'The <code>Collection</code> interface defines the most common general methods applicable to any collection object:',
            '<ul><li><code>boolean add(Object obj)</code> — adds an object to the collection</li><li><code>boolean addAll(Collection c)</code> — adds all elements of <code>c</code></li><li><code>boolean remove(Object obj)</code></li><li><code>boolean removeAll(Collection c)</code> — removes a particular group of objects</li><li><code>boolean retainAll(Collection c)</code> — removes all elements <strong>except</strong> those present in <code>c</code></li><li><code>void clear()</code> — removes all objects</li><li><code>boolean contains(Object obj)</code> — checks whether the object is present</li><li><code>boolean containsAll(Collection c)</code></li><li><code>boolean isEmpty()</code></li><li><code>int size()</code></li><li><code>Object[] toArray()</code> — converts collection to an array</li><li><code>Iterator iterator()</code> — to retrieve objects one by one</li></ul>'
          ]
        },
        {
          heading: 'ArrayList — The Most Common List',
          content: [
            '<strong>Underlying data structure:</strong> resizable (growable) array.',
            '<strong>Properties:</strong> duplicates allowed, insertion order preserved, heterogeneous objects allowed, <code>null</code> insertion is possible.',
            'Three constructors:',
            '<ul><li><code>new ArrayList()</code> — default initial capacity 10. When full, new capacity = <code>(current * 3/2) + 1</code></li><li><code>new ArrayList(int initialCapacity)</code> — custom initial capacity</li><li><code>new ArrayList(Collection c)</code> — for inter-conversion between collection objects</li></ul>',
            'Implements <code>Serializable</code>, <code>Cloneable</code>, and <code>RandomAccess</code>. Random access means any element can be accessed with the same speed, so <code>ArrayList</code> is the <strong>best choice for retrieval</strong> operations.',
            '<strong>Worst choice</strong> for frequent insertion or deletion in the middle (requires shifting elements).'
          ],
          code: `import java.util.*;
class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList a = new ArrayList();
        a.add("A");
        a.add(new Integer(10));
        a.add("A");
        a.add(null);
        System.out.println(a);           // [A, 10, A, null]
        a.remove(2);
        System.out.println(a);           // [A, 10, null]
        a.add(2, "M");
        a.add("N");
        System.out.println(a);           // [A, 10, M, null, N]
    }
}`
        },
        {
          heading: 'LinkedList — Best for Insertion/Deletion in the Middle',
          content: [
            '<strong>Underlying data structure:</strong> doubly-linked list.',
            '<strong>Properties:</strong> duplicates allowed, insertion order preserved, heterogeneous objects allowed, <code>null</code> insertion is possible.',
            'Implements <code>List</code>, <code>Queue</code>, <code>Serializable</code>, <code>Cloneable</code>. Does <strong>not</strong> implement <code>RandomAccess</code>.',
            '<strong>Best choice</strong> for frequent insertion or deletion in the middle (no shift operations required). <strong>Worst choice</strong> for retrieval operations.',
            '<strong>Specific methods</strong> (used for implementing stacks and queues): <code>addFirst</code>, <code>addLast</code>, <code>removeFirst</code>, <code>removeLast</code>, <code>getFirst</code>, <code>getLast</code>.',
            'Constructors: <code>new LinkedList()</code> and <code>new LinkedList(Collection c)</code>.'
          ],
          code: `import java.util.*;
class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList l = new LinkedList();
        l.add("raju");
        l.add(new Integer(10));
        l.add(null);
        l.add("raju");
        l.set(0, "chinna");
        l.add(0, "Kiran");
        l.addFirst("AAAA");
        l.addLast("ZZZZ");
        System.out.println(l);   // [AAAA, Kiran, chinna, 10, null, raju, ZZZZ]
    }
}`
        },
        {
          heading: 'Inter-Conversion Between Collection Objects',
          content: [
            'Collection objects can be converted from one type to another by passing the source collection to the constructor of the target type. This is useful when you need different performance characteristics for different operations.'
          ],
          code: `import java.util.*;
class InterConvert {
    public static void main(String[] args) {
        ArrayList l1 = new ArrayList();
        l1.add(10); l1.add(20); l1.add(30);
        System.out.println("l1--->" + l1);   // [10, 20, 30]

        LinkedList l2 = new LinkedList(l1);
        l2.add(1, 5);
        l2.add(3, 5);
        l2.add(5, 15);
        System.out.println("l2--->" + l2);   // [10, 5, 20, 5, 30, 15]

        ArrayList l3 = new ArrayList(l2);
        System.out.println("l3--->" + l3);   // [10, 5, 20, 5, 30, 15]
    }
}`
        },
        {
          heading: 'Vector and Stack (Legacy Classes)',
          content: [
            '<strong>Vector</strong> is a legacy class (1.0) re-engineered in 1.2 to fit the collection framework. Underlying data structure is a <strong>resizable array</strong>.',
            '<strong>Properties:</strong> insertion order preserved, duplicates allowed, <code>null</code> allowed, heterogeneous allowed, best for retrieval, worst for middle insertion/deletion. Implements <code>Serializable</code>, <code>Cloneable</code>, <code>RandomAccess</code>.',
            '<strong>Vector vs ArrayList:</strong>',
            '<ul><li>All <code>Vector</code> methods are <code>synchronized</code> (thread-safe) but slower. <code>ArrayList</code> methods are not synchronized (faster).</li><li><code>Vector</code> is 1.0 (legacy); <code>ArrayList</code> is 1.2.</li></ul>',
            '<strong>Vector constructors and capacity rule:</strong> default initial capacity 10, new capacity = <code>2 * currentCapacity</code>.',
            '<strong>Stack</strong> is the child class of <code>Vector</code>. Methods: <code>push(Object)</code>, <code>pop()</code> (removes and returns top), <code>peek()</code> (returns top without removal), <code>search(Object)</code> (returns offset from top, or <code>-1</code> if not found), <code>empty()</code> (returns true if empty).'
          ],
          code: `import java.util.*;
class VectorDemo {
    public static void main(String[] args) {
        Vector v = new Vector();
        System.out.println(v.capacity());   // 10
        for (int i = 0; i < 10; i++) v.addElement(i);
        System.out.println(v.capacity());   // 10
        v.addElement("Aa");
        System.out.println(v.capacity());   // 20 (doubled)
        System.out.println(v);
    }
}

class StackDemo {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push("A"); s.push("B"); s.push("C");
        System.out.println(s);              // [A, B, C]
        System.out.println(s.search("A"));  // 3 (offset from top)
        System.out.println(s.search("Z"));  // -1
    }
}`
        },
        {
          heading: 'Cursors: Enumeration, Iterator, ListIterator',
          content: [
            'A <strong>cursor</strong> is used to retrieve objects one by one from a collection. There are <strong>3 cursors</strong> in the collection framework: <code>Enumeration</code>, <code>Iterator</code>, and <code>ListIterator</code>.'
          ],
          table: {
            headers: [
              'Property',
              'Enumeration',
              'Iterator',
              'ListIterator'
            ],
            rows: [
              [
                'Legacy?',
                'Yes (1.0)',
                'No (1.2)',
                'No (1.2, child of Iterator)'
              ],
              [
                'Applicable for',
                'Only legacy classes (Vector, Stack, Hashtable)',
                'Any collection (universal cursor)',
                'Only list-implemented classes (ArrayList, LinkedList, Vector, Stack)'
              ],
              [
                'How to get',
                'elements() method',
                'iterator() method',
                'listIterator() method'
              ],
              [
                'Operations',
                'Read only',
                'Read + remove',
                'Read + remove + replace + add'
              ],
              [
                'Movement',
                'Single direction (forward)',
                'Single direction (forward)',
                'Bidirectional (forward + backward)'
              ],
              [
                'Methods',
                'hasMoreElements(), nextElement()',
                'hasNext(), next(), remove()',
                'hasNext(), hasPrevious(), next(), previous(), nextIndex(), previousIndex(), remove(), set(Object), add(Object)'
              ]
            ]
          }
        },
        {
          heading: 'Enumeration and Iterator — Examples',
          content: [
            '<strong>Enumeration limitations:</strong>',
            '<ol><li>Applicable only for legacy classes; not a universal cursor.</li><li>Read-only — cannot modify or remove elements.</li></ol>',
            '<strong>Iterator advantages:</strong> universal cursor (1.2+), can perform <code>remove</code> in addition to read. <strong>Single-direction only</strong> — cannot replace or add new objects.',
            '<strong>ListIterator</strong> advantages: <strong>bidirectional</strong> cursor (1.2+, child of <code>Iterator</code>). Can move forward and backward. Can also perform <code>replace</code> and <code>add</code> operations in addition to read and remove.',
            '<code>ListIterator.nextIndex()</code> returns the size of the list if there is no next element. <code>previousIndex()</code> returns <code>-1</code> if there is no previous element.',
            'The most powerful cursor is <code>ListIterator</code>, but its main limitation is that it applies only to list-implemented classes.'
          ],
          code: `import java.util.*;

// Enumeration: only read, only legacy
class EnumerationDemo {
    public static void main(String[] args) {
        Vector v = new Vector();
        for (int i = 0; i <= 10; i++) v.addElement(i);
        System.out.println(v);
        Enumeration e = v.elements();
        while (e.hasMoreElements()) {
            Integer i = (Integer) e.nextElement();
            if ((i % 2) == 0) System.out.println(i);
        }
    }
}

// Iterator: read + remove, universal
class IteratorDemo {
    public static void main(String[] args) {
        ArrayList al = new ArrayList();
        for (int i = 0; i <= 10; i++) al.add(i);
        System.out.println(al);
        Iterator itr = al.iterator();
        while (itr.hasNext()) {
            Integer i = (Integer) itr.next();
            if ((i % 2) == 0) System.out.println(i);
            else itr.remove();
        }
        System.out.println(al);   // only even numbers remain
    }
}

// ListIterator: bidirectional + add
class ListIteratorDemo {
    public static void main(String[] args) {
        LinkedList l = new LinkedList();
        l.add("balakrishna"); l.add("chiru"); l.add("venky"); l.add("nag");
        ListIterator ltr = l.listIterator();
        while (ltr.hasNext()) {
            String s = (String) ltr.next();
            if (s.equals("nag")) ltr.add("chaitanya");
        }
        System.out.println(l);  // [balakrishna, chiru, venky, nag, chaitanya]
    }
}`
        },
        {
          heading: 'Set Interface and HashSet',
          content: [
            "<code>Set</code> is a child of <code>Collection</code>. Represents a group of <strong>individual objects where duplicates are not allowed</strong> and <strong>insertion order is not preserved</strong>. The interface defines <strong>no new methods</strong> beyond <code>Collection</code>'s.",
            '<strong>HashSet</strong> properties:',
            '<ul><li>Underlying data structure: <strong>Hashtable</strong>.</li><li>Insertion order not preserved; based on hash code of the object.</li><li><strong>Duplicates not allowed</strong> — adding a duplicate returns <code>false</code> (no compile-time or runtime error).</li><li><code>null</code> insertion is possible (only one).</li><li>Heterogeneous objects allowed.</li><li><strong>Best choice for search operations.</strong></li></ul>',
            'Constructors: <code>new HashSet()</code> (default initial capacity 16, default fill ratio 0.75), <code>new HashSet(int initialCapacity)</code>, <code>new HashSet(int initialCapacity, float fillRatio)</code>, <code>new HashSet(Collection c)</code>.'
          ],
          code: `import java.util.*;
class HashSetDemo {
    public static void main(String[] args) {
        HashSet h = new HashSet();
        h.add("B"); h.add("C"); h.add("D"); h.add("Z"); h.add(null);
        h.add(new Integer(10));
        System.out.println(h.add("Z"));   // false (duplicate)
        System.out.println(h);            // [null, B, C, D, Z, 10] (order not preserved)
    }
}`
        },
        {
          heading: 'LinkedHashSet — Insertion Order Preserved',
          content: [
            '<code>LinkedHashSet</code> is the <strong>child class of <code>HashSet</code></strong>. It is exactly similar to <code>HashSet</code> except:',
            '<ul><li>Underlying data structures: <strong>Hashtable + LinkedList</strong></li><li><strong>Insertion order is preserved</strong></li><li>Introduced in <strong>1.4</strong> (HashSet was 1.2)</li></ul>',
            'For <strong>caching applications</strong>, the best data structure is <code>LinkedHashSet</code> (or <code>LinkedHashMap</code>) where duplicate objects are not allowed but insertion order must be preserved.'
          ]
        },
        {
          heading: 'SortedSet and TreeSet',
          content: [
            '<code>SortedSet</code> is the <strong>child of <code>Set</code></strong>. Duplicates are not allowed. Insertion order is not preserved, but elements are inserted according to some <strong>sorting order</strong> (default natural order or customized).',
            '<strong>Specific methods:</strong>',
            '<ul><li><code>Object first()</code> — returns the first element</li><li><code>Object last()</code> — returns the last element</li><li><code>SortedSet headSet(Object obj)</code> — returns SortedSet of elements <strong>less than</strong> <code>obj</code></li><li><code>SortedSet tailSet(Object obj)</code> — returns SortedSet of elements <strong>greater than or equal to</strong> <code>obj</code></li><li><code>SortedSet subSet(Object obj1, Object obj2)</code> — returns SortedSet of elements <code>&gt;= obj1</code> but <code>&lt; obj2</code></li><li><code>Comparator comparator()</code> — returns the comparator object describing the underlying sorting technique. Returns <code>null</code> for default (ascending natural) order.</li></ul>',
            '<strong>TreeSet</strong> properties:',
            '<ul><li>Underlying data structure: <strong>Balanced Tree</strong></li><li>Duplicates not allowed (adding duplicate returns <code>false</code>)</li><li>Insertion order not preserved; elements sorted by natural or custom order</li><li><strong>Heterogeneous objects are NOT allowed</strong> — violation throws <code>ClassCastException</code> at runtime</li></ul>',
            '<strong>Constructors:</strong> <code>new TreeSet()</code> (natural sorting), <code>new TreeSet(Comparator c)</code> (custom sorting), <code>new TreeSet(Collection c)</code>, <code>new TreeSet(SortedSet s)</code>.'
          ],
          code: `import java.util.*;
class TreeSetDemo {
    public static void main(String[] args) {
        TreeSet t = new TreeSet();
        t.add("A"); t.add("B"); t.add("Z"); t.add("L");
        // t.add(new Integer(10));   // RE: ClassCastException
        // t.add(null);              // RE: NullPointerException
        t.add("A");   // returns false (duplicate)
        System.out.println(t);  // [A, B, L, Z]
    }
}

// StringBuffer does not implement Comparable -> ClassCastException
class TreeSetStringBuffer {
    public static void main(String[] args) {
        TreeSet t = new TreeSet();
        t.add(new StringBuffer("A"));
        t.add(new StringBuffer("B"));
        t.add(new StringBuffer("T"));
        t.add(new StringBuffer("Z"));
        System.out.println(t);  // RE: ClassCastException
    }
}`
        },
        {
          heading: 'Comparable Interface — Natural Sorting',
          content: [
            '<code>Comparable</code> is in <code>java.lang</code> and contains a single method: <code>public int compareTo(Object obj)</code>.',
            'For <code>obj1.compareTo(obj2)</code>:',
            '<ul><li>Returns <strong>negative</strong> if <code>obj1</code> has to come <strong>before</strong> <code>obj2</code></li><li>Returns <strong>positive</strong> if <code>obj1</code> has to come <strong>after</strong> <code>obj2</code></li><li>Returns <strong>zero</strong> if <code>obj1</code> and <code>obj2</code> are equal (duplicates)</li></ul>',
            'An object is said to be <strong>comparable</strong> iff the corresponding class implements <code>Comparable</code>. All wrapper classes and <code>String</code> already implement <code>Comparable</code>, but <code>StringBuffer</code> does <strong>not</strong> — hence <code>TreeSet</code> with <code>StringBuffer</code> throws <code>ClassCastException</code>.',
            'While inserting into a <code>TreeSet</code> with natural sorting, the JVM internally calls <code>compareTo()</code>.',
            `<code>"A".compareTo(null)</code> throws <code>NullPointerException</code>. <code>"A".compareTo(new Integer(10))</code> throws <code>ClassCastException</code>.`
          ],
          code: `System.out.println("A".compareTo("Z"));   // negative
System.out.println("K".compareTo("A"));   // positive
System.out.println("K".compareTo("K"));   // 0
System.out.println("a".compareTo("A"));   // positive (lowercase > uppercase)`
        },
        {
          heading: 'Comparator Interface — Customized Sorting',
          content: [
            'For custom sorting, use the <code>Comparator</code> interface in <code>java.util</code>. It defines two methods: <code>compare(Object, Object)</code> and <code>equals(Object)</code>. Implementing <code>equals</code> is optional (it is inherited from <code>Object</code>).',
            '<strong>Sorting with custom Comparator (descending order of Integers):</strong>'
          ],
          code: `import java.util.*;
class TreeSetDemo {
    public static void main(String[] args) {
        TreeSet t = new TreeSet(new MyComparator());
        t.add(10); t.add(5); t.add(15); t.add(20); t.add(0);
        System.out.println(t);   // [20, 15, 10, 5, 0]
    }
}
class MyComparator implements Comparator {
    public int compare(Object obj1, Object obj2) {
        Integer I1 = (Integer) obj1;
        Integer I2 = (Integer) obj2;
        if (I1 < I2)       return +1;
        else if (I1 > I2)  return -1;
        else               return 0;
    }
}`
        },
        {
          heading: 'Comparator Return Values and Behavior',
          content: [
            'Different return values from <code>compare</code> produce different sort orders:'
          ],
          code: `// Case 1: compare returns various expressions
public int compare(Object obj1, Object obj2) {
    Integer I1 = (Integer) obj1;
    Integer I2 = (Integer) obj2;
    return I1.compareTo(I2);    // [0, 5, 10, 15, 20] (natural ascending)
    // return I2.compareTo(I1);  // [20, 15, 10, 5, 0] (descending)
    // return -I1.compareTo(I2); // [20, 15, 10, 5, 0]
    // return -I2.compareTo(I1); // [0, 5, 10, 15, 20]
    // return I2 - I1;           // [20, 15, 10, 5, 0]
    // return I1 - I2;           // [0, 5, 10, 15, 20]
}

// Case 2: constant return values
public int compare(Object obj1, Object obj2) {
    // return -1;  // [0, 20, 15, 5, 10] (reverse of insertion order)
    // return  1;  // [10, 5, 15, 20, 0] (insertion order)
    return  0;  // [10] - all other elements are considered duplicates
}

// Reverse alphabetical order of Strings
class MyComparator implements Comparator {
    public int compare(Object obj1, Object obj2) {
        String s1 = (String) obj1;
        String s2 = (String) obj2;
        return s2.compareTo(s1);
    }
}`
        },
        {
          heading: 'Map Interface',
          content: [
            'The <code>Map</code> interface is <strong>not</strong> a child of <code>Collection</code>. It represents a group of objects as <strong>key-value pairs</strong> (both key and value are objects). Real-world examples: <code>StudentName &rarr; StudentRollNo</code>, <code>phoneNumber &rarr; contactDetails</code>, <code>word &rarr; meaning</code>, <code>IP Address &rarr; Domain-name</code>.',
            '<strong>Sub-interfaces:</strong>',
            '<ul><li><code>Map.Entry</code> — describes a single key-value pair (key is unique)</li><li><code>SortedMap</code> — entries arranged in sorting order of keys</li><li><code>NavigableMap</code> (1.6+) — provides navigation methods like lower, floor, ceiling, higher</li></ul>',
            '<strong>Implementing classes:</strong> <code>HashMap</code>, <code>LinkedHashMap</code>, <code>WeakHashMap</code>, <code>IdentityHashMap</code>, <code>Hashtable</code>, <code>Properties</code>, <code>TreeMap</code>.'
          ]
        },
        {
          heading: 'Map Interface Methods',
          content: [
            '<strong>Adding key-value pairs:</strong>',
            '<ul><li><code>put(key, val)</code> — returns the previous value associated with the key (or <code>null</code>)</li><li><code>putAll(map2)</code> — adds all entries from another map</li></ul>',
            '<strong>Removing key-value pairs:</strong>',
            '<ul><li><code>remove(key)</code> — returns previous value (or <code>null</code>)</li><li><code>clear()</code> — removes all elements</li></ul>',
            '<strong>Querying:</strong>',
            '<ul><li><code>get(key)</code> — returns value corresponding to key, or <code>null</code>. Use <code>containsKey</code> to disambiguate if <code>null</code> is a valid value.</li><li><code>containsKey(key)</code>, <code>containsValue(val)</code></li><li><code>isEmpty()</code>, <code>size()</code></li></ul>',
            '<strong>Views (for iteration):</strong>',
            '<ul><li><code>Set keySet()</code> — Set view of all keys</li><li><code>Collection values()</code> — Collection view of all values</li><li><code>Set entrySet()</code> — Set of <code>Map.Entry</code> objects (key-value pairs)</li></ul>',
            'Both key and value can be <code>null</code>, but you should not add a Map to itself as a key or value.'
          ]
        },
        {
          heading: 'Map.Entry Interface',
          content: [
            'Each key-value pair in a map is saved as a <code>java.util.Map.Entry</code> object. A set of entries is obtained via <code>map.entrySet()</code>, and iterating over the map is done by iterating over this set.',
            '<strong>Methods:</strong>',
            '<ul><li><code>getKey()</code> — returns the key</li><li><code>getValue()</code> — returns the value</li><li><code>setValue(val)</code> — optional operation; sets a new value and returns the original. Modifies the underlying map.</li></ul>'
          ]
        },
        {
          heading: 'HashMap vs LinkedHashMap vs TreeMap vs Hashtable',
          content: [
            '<strong>HashMap</strong> (1.2) — implemented with a hash table. <strong>Access time O(1)</strong>. Entries are <strong>unsorted</strong>. Values can be <code>null</code>; only one <code>null</code> key is allowed.',
            '<strong>LinkedHashMap</strong> (1.4) — hash table + linked list. <strong>Access time O(1)</strong>. Entries are sorted in <strong>insertion order</strong> (or order of last access, useful for LRU caching). Slower than HashMap for add/remove, faster for iteration.',
            '<strong>TreeMap</strong> (1.2) — implemented as a balanced binary tree. <strong>Access time O(log N)</strong>. Entries sorted by <strong>key</strong> (natural order or custom comparator).',
            '<strong>Hashtable</strong> (1.0, legacy) — same as HashMap but: (1) does <strong>not</strong> allow <code>null</code> for key or value; (2) all key methods are <code>synchronized</code> (slower).',
            '<strong>WeakHashMap</strong> — map of weak keys. If no other references hold a particular key, it can be garbage collected. Designed to solve specific problems.',
            '<strong>IdentityHashMap</strong> (1.4) — uses <code>==</code> instead of <code>equals()</code> to compare keys. Only for special problems, not general use.',
            '<strong>HashMap constructors:</strong>',
            '<ul><li><code>new HashMap()</code> — default initial capacity 16, load factor 0.75</li><li><code>new HashMap(int initialCapacity)</code></li><li><code>new HashMap(int initialCapacity, float loadFactor)</code></li><li><code>new HashMap(Map mp)</code> — for inter-conversion</li></ul>',
            '<strong>TreeMap constructors:</strong>',
            '<ul><li><code>new TreeMap()</code> — keys sorted by natural order</li><li><code>new TreeMap(Comparator comp)</code> — custom sort</li><li><code>new TreeMap(Map mp)</code> — from a Map (natural ordering)</li><li><code>new TreeMap(SortedMap smp)</code> — from a SortedMap (key ordering preserved)</li></ul>'
          ]
        },
        {
          heading: 'SortedMap Interface Methods',
          content: [
            '<code>SortedMap</code> is used by <code>TreeMap</code> and adds methods reflecting that a TreeMap is sorted:',
            '<ul><li><code>comparator()</code> — returns the Comparator used to compare keys; <code>null</code> for natural ordering.</li><li><code>firstKey()</code> — key of the first (in sorted order) element</li><li><code>lastKey()</code> — key of the last (in sorted order) element</li><li><code>headMap(toKey)</code> — returns SortedMap of all elements with key <strong>less than</strong> <code>toKey</code></li><li><code>tailMap(fromKey)</code> — returns SortedMap of all elements with key <strong>greater than or equal to</strong> <code>fromKey</code></li><li><code>subMap(fromKey, toKey)</code> — returns SortedMap of all elements <code>&gt;= fromKey</code> and <code>&lt; toKey</code></li></ul>'
          ]
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
        },
        {
          heading: 'Why Generics? Type Safety and No Casting',
          content: [
            '<strong>Array objects are type-safe by default</strong>: if you declare a <code>String[]</code>, you can insert only <code>String</code> objects — any other type is a <em>compile-time error</em>.',
            '<strong>Collection objects are NOT type-safe by default (pre-1.5)</strong>: an <code>ArrayList</code> accepts any object. By mistake, you can insert an <code>Integer</code> into a list of intended <code>String</code>s and the compiler will not complain.',
            'While retrieving, you must perform <em>typecasting</em>. Forgetting the cast is a <em>compile-time error</em>.',
            'Generics (introduced in 1.5) solve both problems — type safety and the need for typecasting — at compile time.'
          ],
          code: `// Arrays: type-safe, no casting
String[] s = new String[100];
s[0] = "raju";
// s[1] = 10;   // CE

// Collections (pre-generics): NOT type-safe, casting required
ArrayList l = new ArrayList();
l.add("raju");
l.add(new Integer(10));   // No CE - problem!

String name = (String) l.get(0);   // casting required
// String bad = l.get(0);           // CE: cannot convert Object to String

// With generics: type-safe, no casting
ArrayList<String> l2 = new ArrayList<String>();
l2.add("raju");
// l2.add(new Integer(10));   // CE: cannot find symbol add(Integer)
String name2 = l2.get(0);   // no casting required`
        },
        {
          heading: 'Polymorphism and Type Parameters',
          content: [
            '<strong>Polymorphism is NOT applicable for the parameter type</strong> — the type argument on both sides must be exactly the same.',
            'The <strong>type parameter must be an object type</strong> (any class or interface). Generics cannot be applied to primitive data types — use the wrapper class instead.',
            '<code>List&lt;Object&gt; l = new ArrayList&lt;String&gt;();</code> ❌ <em>CE: incompatible types, found ArrayList&lt;String&gt;, required List&lt;Object&gt;</em>'
          ],
          code: `// Valid declarations
ArrayList<Integer> l1 = new ArrayList<Integer>();      // OK
ArrayList<Runnable> l2 = new ArrayList<Runnable>();    // OK

// Invalid declarations
ArrayList<Number> l3 = new ArrayList<Integer>();       // CE: not polymorphic on parameter
// ArrayList<long> l4 = new ArrayList<Long>();          // CE: primitive type parameter
ArrayList<Object> l5 = new ArrayList<StringBuffer>();  // CE: not polymorphic

// Use Integer instead of int
ArrayList<Integer> l6 = new ArrayList<Integer>();      // OK
// ArrayList<int> l7 = new ArrayList<int>();            // CE: unexpected type, found int, required Integer`
        },
        {
          heading: 'Generic Class Internals — Pre-1.5 vs 1.5+',
          content: [
            'In Java 1.4, the <code>ArrayList</code> class was defined as:',
            '<code>class ArrayList { void add(Object o); Object get(int index); }</code>',
            'This allowed adding any object and required typecasting on retrieval.',
            'In Java 1.5+, the generic <code>ArrayList</code> is defined as:',
            '<code>class ArrayList&lt;T&gt; { void add(T t); T get(int index); }</code>',
            'Based on the runtime requirement, the corresponding version of <code>ArrayList</code> is loaded. For <code>new ArrayList&lt;String&gt;()</code>, the loaded class is logically:',
            '<code>class ArrayList&lt;String&gt; { void add(String s); String get(int index); }</code>',
            'This provides type safety and removes the need for typecasting.'
          ]
        },
        {
          heading: 'Bounded Types',
          content: [
            'We can bound the type parameter to a particular range using the <code>extends</code> keyword. <strong>In generics, only <code>extends</code> is used (no <code>implements</code> keyword)</strong> — even for interface bounds.',
            '<strong>Class bound:</strong> if <code>X</code> is a class, any child class of <code>X</code> is allowed as the type parameter.',
            '<strong>Interface bound:</strong> if <code>X</code> is an interface, any implementation class of <code>X</code> is allowed as the type parameter.'
          ],
          code: `// No bound - any type allowed
class Gen<T> {}
Gen<String> g1 = new Gen<String>();     // OK
Gen<Integer> g2 = new Gen<Integer>();   // OK

// Bound by class Number
class Gen<T extends Number> {}
Gen<Integer> g1 = new Gen<Integer>();   // OK (Integer extends Number)
Gen<Double> g2 = new Gen<Double>();     // OK
// Gen<String> g3 = new Gen<String>();  // CE: String not within bound

// Bound by interface Runnable
class Gen<T extends Runnable> {}
Gen<Thread> t1 = new Gen<Thread>();     // OK (Thread implements Runnable)
// Gen<String> t2 = new Gen<String>();  // CE: String does not implement Runnable

// Bounded type example using Number methods
class Gen<T extends Number> {
    T ob;
    Gen(T ob) { this.ob = ob; }
    void show() {
        System.out.println("The int value is: " + ob.intValue());
    }
}
class GenDemo {
    public static void main(String[] args) {
        Gen<Integer> t1 = new Gen<Integer>(new Integer(10));
        t1.show();   // The int value is: 10
        Gen<Double> t2 = new Gen<Double>(10.5);
        t2.show();   // The int value is: 10
        // Gen<String> t3 = new Gen<String>("raju");  // CE: not within bound
        // t3.show();
    }
}`
        },
        {
          heading: 'Generic Methods and Wildcard Patterns',
          content: [
            'Wildcard <code>?</code> patterns are used in method declarations:',
            '<ul><li><code>m1(ArrayList&lt;String&gt;)</code> — accepts only <code>ArrayList</code> of <code>String</code>.</li><li><code>m1(ArrayList&lt;? extends X&gt;)</code> — accepts <code>ArrayList</code> of <code>X</code> or its <strong>child classes</strong> (or implementation classes of <code>X</code> if <code>X</code> is an interface).</li><li><code>m1(ArrayList&lt;? super X&gt;)</code> — accepts <code>ArrayList</code> of <code>X</code> or its <strong>super classes</strong> (or super classes of implementation classes of <code>X</code> if <code>X</code> is an interface).</li><li><code>m1(ArrayList&lt;?&gt;)</code> — accepts <code>ArrayList</code> of <strong>any type</strong>.</li></ul>',
            '<strong>Important rule</strong>: in a method that uses <code>?</code>, you <strong>cannot insert any element except <code>null</code></strong>, because the exact type of the list is unknown.',
            '<strong>Unicode <code>?</code></strong> can be used in the <strong>declaration part</strong> (left side) but <strong>not in the construction part</strong> (right side).'
          ],
          code: `import java.util.*;
class Test {
    public static void main(String[] args) {
        ArrayList<String> l1 = new ArrayList<String>();
        l1.add("A"); l1.add("B"); l1.add("C"); l1.add("D");
        m1(l1);

        ArrayList<Integer> l2 = new ArrayList<Integer>();
        l2.add(10); l2.add(20); l2.add(30); l2.add(40);
        m1(l2);
    }

    public static void m1(ArrayList<?> l) {
        // l.add("D");   // CE: cannot expect what type of value will come
        l.remove(1);
        l.add(null);    // only null is allowed
        System.out.println(l);
    }
}
// Output:
// [A, C, D, null]
// [10, 30, 40, null]`
        },
        {
          heading: 'Valid and Invalid Wildcard Declarations',
          content: [
            'A quick reference for valid and invalid wildcard declarations:'
          ],
          code: `// VALID
ArrayList<String> l1 = new ArrayList<String>();                       // OK
ArrayList<? extends Object> l2 = new ArrayList<String>();             // OK (String extends Object)
ArrayList<? extends String> l3 = new ArrayList<String>();             // OK
ArrayList<? super Runnable> l4 = new ArrayList<Object>();             // OK (Object is super of Runnable)
ArrayList<? super Runnable> l5 = new ArrayList<Thread>();             // OK (Thread implements Runnable, super classes include Object)
ArrayList<?> l6 = new ArrayList<Integer>();                           // OK (unbounded wildcard)

// INVALID
// ArrayList<Object> l7 = new ArrayList<String>();                     // CE: not polymorphic on parameter
// ArrayList<?> l8 = new ArrayList<? extends Number>();                // CE: wildcard not allowed in construction part
// ArrayList<?> l9 = new ArrayList<? super Number>();                  // CE
// ArrayList<?> l10 = new ArrayList<?>();                              // CE: wildcard not allowed in construction part`
        },
        {
          heading: 'Communication with Legacy Non-Generic Code',
          content: [
            'To maintain compatibility with old non-generic code, generics were relaxed in some places.',
            'Generics is a <strong>compile-time concept only</strong> — at runtime there is no generic concept (type erasure). Hence a non-generic method can still add objects to a generic collection, and the compiler will not complain.'
          ],
          code: `import java.util.*;
class Test {
    public static void main(String[] args) {
        ArrayList<String> l = new ArrayList<String>();
        l.add("A"); l.add("B"); l.add("C");
        // l.add(10);   // CE if added here
        m1(l);
        System.out.println(l);   // [A, B, C, 10, raju]
    }
    // Non-generic method - can add any type
    public static void m1(ArrayList l) {
        l.add(new Integer(10));
        l.add(new StringBuffer("raju"));
    }
}

// Erasure at runtime
class TestErasure {
    public static void main(String[] args) {
        // Same runtime type regardless of generic parameter
        ArrayList l1 = new ArrayList<String>();
        l1.add("A");
        l1.add(new Integer(10));
        l1.add(new StringBuffer("raju"));

        ArrayList<String> l2 = new ArrayList();
        l2.add("A");
        // l2.add(10);    // CE: typesafety at compile time
        l2.add("B");
        l2.add(null);
        // l2.add(20);    // CE
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
            `<ul><li><code>(a, b) -&gt; a + b</code> — adds two numbers</li><li><code>x -&gt; x * x</code> — squares a number</li><li><code>() -&gt; System.out.println("Hi")</code> — no parameters</li></ul>`
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
            "You can check a thread's state with <code>thread.getState()</code>."
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
        },
        {
          heading: 'Multitasking: Process-based vs Thread-based',
          content: [
            '<strong>Multitasking</strong> means executing several tasks simultaneously. There are 2 types:',
            '<ul><li><strong>Process-based multitasking:</strong> each task is a separate independent process (e.g., writing Java in editor while running MP3 player and downloading a file). Best suited at the OS level.</li><li><strong>Thread-based multitasking:</strong> each task is a separate independent part of the same program. Best suited at the programmatic level. Java provides built-in support via <code>Thread</code>, <code>ThreadGroup</code>, <code>Runnable</code>.</li></ul>',
            'The <strong>main objective</strong> of multitasking (process or thread) is to <strong>reduce response time</strong> and <strong>improve performance</strong>.',
            '<strong>Main application areas of multithreading:</strong> video games, multimedia graphics, animation, and any program needing concurrent operations.'
          ]
        },
        {
          heading: 'Two Ways to Define a Thread',
          content: [
            'Java provides <strong>two ways</strong> to define, instantiate, and start a thread:',
            '<ol><li><strong>By extending the <code>Thread</code> class</strong></li><li><strong>By implementing the <code>Runnable</code> interface</strong> (recommended)</li></ol>',
            '<strong>Why Runnable is recommended:</strong> if you extend <code>Thread</code>, you cannot extend any other class — you miss the OOP benefit of inheritance (reusability). Implementing <code>Runnable</code> leaves your class free to extend another class.'
          ]
        },
        {
          heading: 'Approach 1: Defining a Thread by Extending Thread Class',
          content: [
            'Override the <code>run()</code> method in your subclass. <code>run()</code> is the entry point for the new thread — the code inside <code>run()</code> is what executes in that thread.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child Thread");
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        t.start();    // creates a NEW thread that calls run()
        for (int i = 0; i < 10; i++) {
            System.out.println("Main Thread");
        }
    }
}
// The output interleaves "Child Thread" and "Main Thread" lines in some order.`
        },
        {
          heading: 'Thread Scheduler and the difference between start() and run()',
          content: [
            'When multiple threads are waiting, the <strong>Thread Scheduler</strong> decides which thread runs first. It is part of the JVM and its behavior is <strong>vendor-dependent</strong> — so the exact output cannot be predicted.',
            '<strong>Difference between <code>t.start()</code> and <code>t.run()</code>:</strong>',
            `<ul><li><code>t.start()</code> — a <strong>NEW thread</strong> is created, and that new thread is responsible for executing <code>run()</code>.</li><li><code>t.run()</code> — <strong>NO new thread</strong> is created; <code>run()</code> is executed like a normal method by the <code>main</code> thread. Output: all "Child Thread" lines first, then all "Main Thread" lines.</li></ul>`,
            '<strong>Importance of <code>start()</code>:</strong> <code>start()</code> internally (a) registers the thread with the Thread Scheduler, and (b) invokes <code>run()</code>. Without calling <code>start()</code>, <strong>no new thread will be started</strong>.',
            '<strong>Case 1: Not overriding <code>run()</code></strong> — the empty <code>Thread.run()</code> is executed; the program produces no output.',
            '<strong>Case 2: Overriding <code>start()</code></strong> — if you override <code>start()</code>, it is executed like a normal method (no new thread). Inside, you can call <code>super.start()</code> to actually start a new thread.'
          ],
          code: `// Case A: Overriding start() — no new thread
class MyThread extends Thread {
    @Override
    public void start() {
        System.out.println("start() method");
    }
    @Override
    public void run() {
        System.out.println("run method");
    }
}
// Output: "start() method" (run is never called)

// Case B: Calling super.start() inside overridden start() — new thread
class MyThread2 extends Thread {
    @Override
    public void start() {
        super.start();   // actually start a new thread
        System.out.println("start() method");
    }
    @Override
    public void run() {
        System.out.println("run method");
    }
}`
        },
        {
          heading: 'Life Cycle of a Thread',
          content: [
            'A thread passes through these states:',
            '<ol><li><strong>New / Born:</strong> <code>new MyThread()</code> creates a thread object. The thread is not yet alive.</li><li><strong>Ready / Runnable:</strong> after <code>start()</code>, the thread is registered with the Thread Scheduler and waits for CPU allocation.</li><li><strong>Running:</strong> the Scheduler allocates CPU to the thread, and <code>run()</code> starts executing.</li><li><strong>Dead:</strong> <code>run()</code> completes normally; the thread is terminated and cannot be restarted.</li></ol>',
            '<strong>Once a thread is started, it cannot be restarted</strong> — calling <code>start()</code> again throws <code>IllegalThreadStateException</code> at runtime.',
            '<strong>Note:</strong> you cannot explicitly stop a running thread. The old <code>stop()</code>, <code>suspend()</code>, and <code>resume()</code> methods (deprecated since 1.2) should not be used.'
          ],
          code: `MyThread t = new MyThread();
t.start();
t.start();   // RE: IllegalThreadStateException`
        },
        {
          heading: 'Approach 2: Defining a Thread by Implementing Runnable',
          content: [
            'The <code>Runnable</code> interface is in <code>java.lang</code> and contains only one method: <code>public void run();</code>.',
            'Create an instance of your <code>Runnable</code>, pass it to the <code>Thread</code> constructor, then call <code>start()</code> on the <code>Thread</code>.'
          ],
          code: `class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i <= 10; i++) {
            System.out.println("Child Thread");
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        MyRunnable r = new MyRunnable();
        Thread t = new Thread(r);
        t.start();
        for (int i = 0; i <= 10; i++) {
            System.out.println("Main Thread");
        }
    }
}`
        },
        {
          heading: 'Which Calls Start a New Thread?',
          content: [
            'Given: <code>MyRunnable r = new MyRunnable(); Thread t1 = new Thread(); Thread t2 = new Thread(r);</code>',
            '<ul><li><code>t1.start()</code> — a new thread is created and runs the <strong>empty</strong> <code>Thread.run()</code> (because <code>t1</code> has no <code>Runnable</code>).</li><li><code>t1.run()</code> — <strong>no new thread</strong>; runs as a normal method on the calling thread.</li><li><code>t2.start()</code> — a new thread is created and runs <code>MyRunnable.run()</code>.</li><li><code>t2.run()</code> — <strong>no new thread</strong>; runs as a normal method.</li><li><code>r.run()</code> — <strong>no new thread</strong>; runs as a normal method.</li><li><code>r.start()</code> — <strong>CE</strong>: <code>MyRunnable</code> does not contain a <code>start</code> method.</li></ul>'
          ]
        },
        {
          heading: 'Hybrid Mechanism (Not Recommended)',
          content: [
            'A class that extends <code>Thread</code> can still be passed to another <code>Thread</code> constructor. This is allowed but pointless and not recommended.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Child Thread");
    }
}

public class HybridThreadDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        Thread t = new Thread(t1);   // passing Thread as Runnable
        t.start();
        System.out.println("Main Thread");
    }
}`
        },
        {
          heading: 'Thread Class Constructors',
          content: [
            'The <code>Thread</code> class provides 8 constructors:',
            '<ol><li><code>Thread()</code></li><li><code>Thread(Runnable r)</code></li><li><code>Thread(String name)</code></li><li><code>Thread(Runnable r, String name)</code></li><li><code>Thread(ThreadGroup g, String name)</code></li><li><code>Thread(ThreadGroup g, Runnable r)</code></li><li><code>Thread(ThreadGroup g, Runnable r, String name)</code></li><li><code>Thread(ThreadGroup g, Runnable r, String name, long stackSize)</code></li></ol>'
          ]
        },
        {
          heading: 'Setting and Getting the Name of a Thread',
          content: [
            'Use <code>setName(String)</code> to set the name and <code>getName()</code> to retrieve it. The current thread is obtained via <code>Thread.currentThread()</code>.'
          ],
          code: `public class Test {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());   // "main"
        Thread.currentThread().setName("New Thread");
        System.out.println(Thread.currentThread().getName());   // "New Thread"
    }
}`
        },
        {
          heading: 'Thread Priorities',
          content: [
            'Every thread has a priority. Valid priorities range from <strong>1 to 10</strong>:',
            '<ul><li><code>Thread.MIN_PRIORITY</code> = 1</li><li><code>Thread.NORM_PRIORITY</code> = 5</li><li><code>Thread.MAX_PRIORITY</code> = 10</li></ul>',
            'The Scheduler uses priorities to decide which thread to run. A higher-priority thread gets a chance first. When two threads have the same priority, the Scheduler decides — behavior is <strong>vendor-dependent</strong>.',
            'The <strong>default priority of the main thread is 5</strong>. For all other threads, the priority is <strong>inherited from the parent thread</strong>.',
            'Methods: <code>public final void setPriority(int priority)</code> — must be 1-10, else <code>IllegalArgumentException</code>. <code>public final int getPriority()</code>.',
            '<strong>Note:</strong> some operating systems may not support thread priorities.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child Thread");
        }
    }
}

public class ThreadPriorityDemo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        System.out.println(t.getPriority());   // 5 (inherited from main)
        t.setPriority(10);
        t.start();
        for (int i = 0; i < 10; i++) {
            System.out.println("Main Thread");
        }
    }
}`
        },
        {
          heading: 'Preventing Thread Execution: yield()',
          content: [
            'Methods that can prevent a thread from execution: <code>yield()</code>, <code>join()</code>, <code>sleep()</code>.',
            '<strong>yield():</strong> the calling thread <strong>temporarily pauses</strong> its execution to give a chance to threads of the <strong>same priority</strong>. If no thread of the same priority is waiting, the same thread continues immediately. <code>public static native void yield();</code>',
            'Yielding causes the thread to move from Running back to Ready/Runnable.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child Thread");
            Thread.yield();   // hint to scheduler: give others a chance
        }
    }
}`
        },
        {
          heading: 'Preventing Thread Execution: join()',
          content: [
            'If a thread wants to wait for the completion of another thread, use <code>join()</code>. Example: if <code>t1</code> executes <code>t2.join()</code>, then <code>t1</code> enters the waiting state until <code>t2</code> completes (or the timeout expires, or <code>t1</code> is interrupted).',
            'Three forms: <code>join()</code>, <code>join(long ms)</code>, <code>join(long ms, int ns)</code> — all throw <code>InterruptedException</code>.',
            'After <code>join()</code>, the waiting thread moves to Ready/Runnable.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child Thread");
            try { Thread.sleep(1000); } catch (InterruptedException e) { }
        }
    }
}

public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        t.start();
        t.join();     // main waits for t to complete
        for (int i = 0; i < 10; i++) {
            System.out.println("Main Thread");
        }
    }
}`
        },
        {
          heading: 'Preventing Thread Execution: sleep()',
          content: [
            'If a thread needs to pause for a fixed amount of time, use <code>sleep()</code>. Two forms: <code>sleep(long ms)</code> and <code>sleep(long ms, int ns)</code> — both throw <code>InterruptedException</code>.',
            'The thread goes to the Sleeping state. When the time expires (or the thread is interrupted), it returns to Ready/Runnable.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                System.out.println("This is Lazy Method");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}`
        },
        {
          heading: 'Interrupting a Thread',
          content: [
            'A sleeping or waiting thread can be interrupted by calling <code>interrupt()</code> on it. The call may not have an immediate effect — if the target thread is not currently sleeping or waiting, the interrupt waits until the target enters one of those states. Then <code>InterruptedException</code> is thrown.'
          ],
          code: `class MyThread extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                System.out.println("This is Lazy Method");
            }
            Thread.sleep(3000);   // sleep OUTSIDE the loop
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

public class InterruptDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        t.start();
        t.interrupt();
        System.out.println("Main Thread");
    }
}`
        },
        {
          heading: 'yield() vs join() vs sleep() — Comparison',
          content: [
            'Comparison of the three thread-prevention methods:'
          ],
          table: {
            headers: [
              'Property',
              'yield()',
              'join()',
              'sleep()'
            ],
            rows: [
              [
                'Overloaded?',
                'No',
                'Yes',
                'Yes'
              ],
              [
                'Static?',
                'Yes',
                'No',
                'Yes'
              ],
              [
                'Final?',
                'No',
                'Yes',
                'No'
              ],
              [
                'Throws InterruptedException?',
                'No',
                'Yes',
                'Yes'
              ],
              [
                'Native?',
                'Yes',
                'No',
                'sleep(long) yes; sleep(long, int) no'
              ],
              [
                'Releases lock?',
                'No',
                'No',
                'No'
              ]
            ]
          }
        },
        {
          heading: 'Synchronization',
          content: [
            '<code>synchronized</code> is a keyword applicable to <strong>methods and blocks</strong> only (not to variables or classes).',
            'When a method is <code>synchronized</code>, at a time <strong>only one thread</strong> is allowed to execute that method on the <strong>given object</strong>.',
            '<strong>Advantages:</strong> overcomes data inconsistency. <strong>Limitations:</strong> may create performance problems. Use only when required.',
            "<strong>Object-level lock:</strong> every Java object has a unique lock. To execute any <code>synchronized</code> method on an object, a thread must first acquire that object's lock. While one thread holds the lock on an object, other threads cannot execute <strong>any</strong> <code>synchronized</code> method on the same object — but they <strong>can</strong> execute non-synchronized methods.",
            'A thread can hold more than one lock at a time.',
            '<strong>Class-level lock:</strong> for static synchronized methods, a thread must acquire the <strong>class-level lock</strong>. While a thread holds the class-level lock, other threads cannot execute any static synchronized method of the same class, but they <strong>can</strong> execute non-static synchronized methods, non-synchronized static methods, etc.',
            '<strong>Note:</strong> synchronized methods on <strong>different objects</strong> do NOT block each other — they have different object-level locks.'
          ],
          code: `class Display {
    public synchronized void wish(String name) {
        for (int i = 0; i < 10; i++) {
            System.out.print("Hai.......!");
            try { Thread.sleep(2000); } catch (InterruptedException e) { }
            System.out.println(name);
        }
    }
}

class MyThread extends Thread {
    Display d;
    String name;
    MyThread(Display d, String name) { this.d = d; this.name = name; }
    @Override
    public void run() { d.wish(name); }
}

public class SynchronizedDemo {
    public static void main(String[] args) {
        Display d = new Display();
        MyThread t1 = new MyThread(d, "YS");
        MyThread t2 = new MyThread(d, "Babu");
        t1.start();
        t2.start();
        // Output: regular (interleaved per wish() call), not irregular
    }
}`
        },
        {
          heading: 'Synchronized Blocks',
          content: [
            'Declaring an entire method <code>synchronized</code> is not always efficient. If only a few lines of code cause the problem, wrap <strong>just those lines</strong> in a synchronized block to improve performance.',
            'Syntax: <code>synchronized(b) { /* critical section */ }</code>, where <code>b</code> is an object reference.',
            'To get the lock for the <strong>current object</strong>: <code>synchronized(this) { ... }</code>',
            'To get the <strong>class-level lock</strong>: <code>synchronized(Display.class) { ... }</code>',
            `<strong>Important:</strong> the argument must be an <strong>object reference</strong>. Using a primitive (like <code>int</code>) is a CE: <em>"unexpected type: int, required: reference"</em>.`
          ],
          code: `class Display {
    public void print(String name) {
        // non-critical code runs without the lock
        System.out.print("Hai.......!");
        synchronized(this) {    // acquire object-level lock
            try { Thread.sleep(2000); } catch (InterruptedException e) { }
            System.out.println(name);
        }
    }
}

// CE: synchronized on a primitive
int i = 10;
synchronized(i) { }   // CE: unexpected type`
        },
        {
          heading: 'Inter-Thread Communication: wait(), notify(), notifyAll()',
          content: [
            'Two threads can communicate via <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code>.',
            'These methods are in <strong>Object class</strong> (not Thread) because a thread calls them on the shared object it is synchronizing on.',
            '<strong>Rules:</strong>',
            '<ul><li>These methods must be called <strong>only from synchronized area</strong> (synchronized method or block), otherwise <code>IllegalMonitorStateException</code> is thrown at runtime.</li><li>When a thread calls <code>wait()</code>, it <strong>immediately releases the lock</strong> on the object and enters the waiting state.</li><li>After giving a notification, the thread <strong>releases the lock</strong> (but may not be immediately).</li></ul>',
            'Methods: <code>public final void wait() throws InterruptedException</code>, <code>wait(long ms)</code>, <code>wait(long ms, int ns)</code>, <code>public final void notify()</code>, <code>public final void notifyAll()</code>.',
            '<strong>Lock-release comparison:</strong> <code>yield()</code>, <code>join()</code>, and <code>sleep()</code> do <strong>NOT</strong> release the lock. <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> <strong>DO</strong> release the lock.'
          ],
          code: `class ThreadB extends Thread {
    int total = 0;
    @Override
    public void run() {
        synchronized (this) {
            System.out.println("Child Starting calculation");
            for (int i = 1; i <= 100; i++) {
                total = total + i;
            }
            System.out.println("Child giving notification");
            this.notify();
        }
    }
}

public class ThreadA {
    public static void main(String[] args) throws InterruptedException {
        ThreadB b = new ThreadB();
        b.start();
        synchronized (b) {
            System.out.println("Main Method calling wait method");
            b.wait();   // releases the lock on b
            System.out.println("Main Got Notification");
            System.out.println(b.total);   // 5050
        }
    }
}`
        },
        {
          heading: 'Deadlock',
          content: [
            '<strong>Deadlock</strong> occurs when two threads are waiting for each other forever — each holds a lock the other needs.',
            "Java has <strong>no deadlock resolution mechanism</strong> — only prevention techniques (one example is the Banker's algorithm).",
            'The classic deadlock example uses two classes each with a synchronized method that calls a synchronized method on the other class.'
          ],
          code: `class A {
    synchronized void foo(B b) {
        System.out.println("Thread 1 entered foo() method");
        try { Thread.sleep(600); } catch (InterruptedException e) { }
        System.out.println("Thread 1 is trying to call b.last()");
        b.last();
    }
    synchronized void last() {
        System.out.println("Inside A, This is last() method");
    }
}

class B {
    synchronized void bar(A a) {
        System.out.println("Thread 2 entered bar() method");
        try { Thread.sleep(600); } catch (InterruptedException e) { }
        System.out.println("Thread 2 is trying to call a.last()");
        a.last();
    }
    synchronized void last() {
        System.out.println("Inside B, This is last() method");
    }
}

public class DeadLock implements Runnable {
    A a = new A();
    B b = new B();
    DeadLock() {
        Thread t = new Thread(this);
        t.start();
        b.bar(a);   // main thread holds b's lock, tries to call a.last()
    }
    @Override
    public void run() {
        a.foo(b);   // new thread holds a's lock, tries to call b.last()
    }
    public static void main(String[] args) {
        new DeadLock();
    }
}`
        },
        {
          heading: 'Daemon Threads',
          content: [
            '<strong>Daemon threads</strong> are threads that run in the background to provide support for user-defined threads (examples: finalizer thread, main thread itself). They usually have low priority but it can be increased.',
            'Methods: <code>public boolean isDaemon()</code> and <code>public void setDaemon(boolean b)</code>.',
            'The <strong>daemon nature is inherited from the parent</strong>: if the parent is a daemon, the child is a daemon; otherwise, the child is not.',
            "<strong>After starting a thread, you cannot change its daemon nature</strong> — violation is a runtime <code>IllegalThreadStateException</code>. The main thread's daemon nature cannot be changed because it is already started before <code>main()</code> executes.",
            'All daemon threads are <strong>terminated automatically</strong> when the last non-daemon thread terminates. Hence daemon threads are best for background support work that should not block program exit.'
          ],
          code: `public class Test {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().isDaemon());   // false
        MyThread t = new MyThread();
        System.out.println(t.isDaemon());   // false (inherits from main)
        t.setDaemon(true);
        System.out.println(t.isDaemon());   // true
        t.start();
        // t.setDaemon(false);   // RE: IllegalThreadStateException
    }
}

class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child Thread");
            try { Thread.sleep(1000); } catch (InterruptedException e) { }
        }
    }
}`
        }
      ]
    },
};

const javaModule5Content = {
  'java-1-5-features': {
      title: 'Java 1.5 New Features',
      sections: [
        {
          heading: 'Overview of Java 1.5 (Tiger) Features',
          content: [
            `Java 1.5, also known as "Tiger," introduced major enhancements:`,
            '<ul><li><strong>Enums</strong> — user-defined data types with a fixed set of constants</li><li><strong>For-Each loop</strong> — enhanced for loop for arrays and collections</li><li><strong>Var-Arg methods</strong> — methods that accept variable number of arguments</li><li><strong>Autoboxing and Unboxing</strong> — automatic conversion between primitives and wrappers</li><li><strong>Static Imports</strong> — import static members of a class directly</li><li><strong>Generics</strong> — type-safe collections (covered separately)</li><li><strong>Annotations</strong> — metadata for code (@Override, @Deprecated, etc.)</li><li><strong>Concurrency utilities</strong> — java.util.concurrent package</li></ul>'
          ]
        },
        {
          heading: 'Enum Type',
          content: [
            'An <code>enum</code> defines a fixed set of named constants.',
            'Enums are classes implicitly extending <code>java.lang.Enum</code>.',
            'They can have constructors, methods, and fields.',
            'Use enums when a variable can only take one of a small set of predefined values.'
          ],
          code: `enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, 
    THURSDAY, FRIDAY, SATURDAY
}

enum Status {
    ACTIVE("active"), INACTIVE("inactive"), PENDING("pending");
    
    private final String value;
    
    Status(String value) {
        this.value = value;
    }
    
    public String getValue() {
        return value;
    }
}

public class EnumDemo {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println("Today: " + today);
        System.out.println("Ordinal: " + today.ordinal());  // position in enum
        System.out.println("Name: " + today.name());
        
        // Enum with methods
        Status s = Status.ACTIVE;
        System.out.println("Status value: " + s.getValue());
        
        // Iterate all values
        for (Day d : Day.values()) {
            System.out.println(d);
        }
    }
}`
        },
        {
          heading: 'For-Each Loop (Enhanced for)',
          content: [
            'The enhanced for loop provides a cleaner way to iterate arrays and collections.',
            '<strong>Syntax:</strong> <code>for (Type variable : collection) { ... }</code>',
            'You cannot modify the collection during iteration (ConcurrentModificationException).'
          ],
          code: `public class ForEachDemo {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        // For-each over array
        for (int num : numbers) {
            System.out.println(num);
        }
        
        // For-each over string array
        String[] names = {"Alice", "Bob", "Charlie"};
        for (String name : names) {
            System.out.println("Hello, " + name);
        }
        
        // For-each over enum
        for (Day d : Day.values()) {
            System.out.println(d.name().toLowerCase());
        }
    }
}`
        },
        {
          heading: 'Static Imports',
          content: [
            'Static imports allow you to import static members (methods, variables) of a class directly.',
            'This avoids repeatedly typing the class name.',
            '<strong>Two forms:</strong>',
            '<ul><li><code>import static package.ClassName.member;</code> — import specific member</li><li><code>import static package.ClassName.*;</code> — import all static members</li></ul>'
          ],
          code: `import static java.lang.Math.*;
import static java.lang.System.out;

public class StaticImportDemo {
    public static void main(String[] args) {
        // No need for Math. prefix
        out.println("PI: " + PI);
        out.println("sqrt(16): " + sqrt(16));
        out.println("max(5, 10): " + max(5, 10));
        out.println("random: " + random());
    }
}`
        },
        {
          heading: 'Enum — Deep Dive',
          content: [
            'An <strong>enum</strong> is a group of named constants. It can be used for defining user-defined data types.',
            "Enums were introduced in Java 1.5. Compared with old languages' enums, Java enums are <strong>more powerful</strong> because in Java enums you are allowed to have instance members, constructors, etc.",
            '<strong>Every constant inside an enum is implicitly <code>public static final</code> by default.</strong> You can access enum constants by using the enum name.',
            `You can declare an enum either <strong>outside the class</strong> or <strong>within the class</strong>, but <strong>not inside a method</strong>. A violation leads to a compile-time error: <em>"enum types must not be local"</em>.`,
            '<strong>Allowed modifiers for an enum declared outside a class:</strong> <code>public</code>, default, and <code>strictfp</code>.',
            '<strong>Allowed modifiers for an enum declared inside a class:</strong> <code>public</code>, <code>private</code>, default, <code>strictfp</code>, and <code>static</code>.',
            '<strong>Enum vs Inheritance:</strong> Every enum in Java must be the direct child of <code>java.lang.Enum</code>. Since every enum already extends <code>java.lang.Enum</code>, there is no chance of extending any other enum. Hence <code>abstract</code> and <code>final</code> modifiers are not applicable for an enum.'
          ]
        },
        {
          heading: 'Enum Internals — java.lang.Enum',
          content: [
            '<code>java.lang.Enum</code> is an abstract class. It is a direct child of <code>Object</code>. It implements <code>Comparable</code> and <code>Serializable</code> interfaces. All required functionality for Java enums is defined in this class.',
            'In Java, an enum is internally implemented as a class. We are allowed to declare a <code>main()</code> method in an enum and run it directly from the command prompt.'
          ],
          code: `enum Month {
    JAN, FEB, MAR;
    public static void main(String[] args) {
        System.out.println("Hai This is enum class method");
    }
}
// E:\\> javac Month.java
// E:\\> java Month
// Output: Hai This is enum class method`
        },
        {
          heading: 'values() and ordinal() Methods',
          content: [
            'Every enum implicitly contains a <code>values()</code> method to list all its constants.',
            'The position of an enum constant is described with <code>ordinalValue()</code> — you can find the ordinal of an enum constant by calling <code>ordinal()</code>. <strong>Ordinal values are 0-based.</strong>'
          ],
          code: `enum Months { JAN, FEB, MAR, APR; }

class Test {
    public static void main(String[] args) {
        Months[] m = Months.values();
        for (Months m1 : m) {
            System.out.println(m1 + "....." + m1.ordinal());
        }
    }
}
// Output:
// JAN.....0
// FEB.....1
// MAR.....2
// APR.....3`
        },
        {
          heading: 'Enum with Constructors and Members',
          content: [
            'A Java enum can contain constructors, instance members, and static members — in addition to constants. An enum can contain constructors, and they will execute at the time of enum class loading. The programmer is <strong>not</strong> responsible for calling these constructors explicitly.',
            '<strong>Rules:</strong>',
            '<ul><li>You cannot take abstract methods inside an enum.</li><li>If the enum contains anything other than constants, the list of constants should end with a <strong>semicolon</strong>.</li><li>The list of constants must be the <strong>first line</strong> in the enum if the enum contains other members.</li></ul>',
            'Between enum constants, you can apply <strong>equality operators</strong> (<code>==</code> and <code>!=</code>) but <strong>not relational operators</strong>.'
          ],
          code: `enum Beer {
    kf(100), ko(120), rc(150), fo;
    int price;

    Beer(int price) {
        this.price = price;
        System.out.println("constructor");
    }
    Beer() {
        this.price = 130;
        System.out.println("No Argument constructor");
    }
    public int getPrice() { return price; }
}

class Test {
    public static void main(String[] args) {
        Beer[] b = Beer.values();
        for (Beer b1 : b) {
            System.out.println(b1 + "......" + b1.getPrice());
        }
        // Equality is allowed:
        System.out.println(Color.RED == Color.GREEN);   // false
        // System.out.println(Color.RED > Color.GREEN); // CE: relational not allowed
    }
}`
        },
        {
          heading: 'Enum with switch Statement',
          content: [
            'You can pass an enum type as an argument to a switch statement. From 1.5 onwards, the following are valid arguments: <code>byte, short, int, char</code> + their <code>Byte, Short, Integer, Character</code> wrappers + <code>enum</code>.',
            'If you pass enum constants as the switch argument, all case labels should be valid enum constants — otherwise a compile-time error occurs.'
          ],
          code: `enum Beer { kf, ko, fo; }

class Test {
    public static void main(String[] args) {
        Beer b1 = Beer.fo;
        switch (b1) {
            case kf: System.out.println("kf is not found"); break;
            case ko: System.out.println("ko is childrens brand"); break;
            case fo: System.out.println("Buy one get one free"); break;
            default: System.out.println("The Other Brands are not good");
        }
    }
}
// Output: Buy one get one free`
        },
        {
          heading: 'Enum Constant-Specific Class Bodies',
          content: [
            "Each enum constant can override the enum's method by providing its own class body. The body becomes a <strong>constant-specific class</strong> with its own implementation."
          ],
          code: `enum Color {
    RED, GREEN, BLUE {
        public void m1() {
            System.out.println("Too Good");
        }
    };
    public void m1() {
        System.out.println("Too Danger");
    }
}

class Test {
    public static void main(String[] args) {
        Color.RED.m1();     // Too Danger
        Color.BLUE.m1();    // Too Good
        Color.GREEN.m1();   // Too Danger
    }
}
// If semicolon is missing after BLUE and the instance block starts immediately,
// BLUE executes the instance block (its own m1).`
        },
        {
          heading: 'Accessing an Enum from a Different Package',
          content: [
            'When accessing an enum from outside its package, you need to import it normally. With <code>static import</code>, you can access its constants directly. Without proper import, the compiler cannot resolve the enum.'
          ],
          code: `// File: pack1/color.java
package pack1;
public enum color { RED, GREEN, BLUE; }

// File: Test.java (in a different package)
import pack1.color;            // valid (no static needed)
import static pack1.color.*;   // also valid (static import for constants)
// import pack1.color.*;       // invalid (regular import with wildcard on an enum is not allowed)
import static pack1.color;     // invalid (no .* and not a static member)

class Test {
    public static void main(String[] args) {
        color c = color.RED;
        System.out.println(c);
    }
}`
        },
        {
          heading: 'AutoBoxing and AutoUnBoxing — Deep Dive',
          content: [
            'Until 1.4 version, you were not allowed to pass primitives where wrapper objects were required, nor wrapper objects where primitives were required. From 1.5 onwards, you can pass primitives in place of objects and wrapper objects in place of primitives. The required conversion is taken care of by the compiler <strong>automatically</strong>. This is <strong>AutoBoxing</strong> and <strong>AutoUnBoxing</strong>.',
            '<strong>AutoBoxing</strong>: Automatic conversion from primitive to wrapper object by the compiler. Example: <code>Integer I = 10;</code> — the compiler converts the int to an Integer object.',
            '<strong>AutoUnBoxing</strong>: Automatic conversion from wrapper object to primitive by the compiler. Example: <code>int i = new Integer(10);</code> — the compiler converts the Integer object to an int primitive.',
            'Because of AutoBoxing and AutoUnBoxing, the importance of wrapper classes is a bit lower from 1.5 onwards.'
          ],
          code: `// Pre-1.4: required manual conversion
ArrayList l = new ArrayList();
l.add(10);   // CE in 1.4 — required Integer object
Integer I = new Integer(10);
l.add(I);    // OK

Boolean B = new Boolean("true");
if (B) { }   // CE: required boolean primitive
boolean b = B.booleanValue();
if (b) { }   // OK

// 1.5+ — automatic conversion
ArrayList l2 = new ArrayList();
l2.add(10);     // AutoBoxing
Integer I2 = 10; // AutoBoxing
if (B) { }       // AutoUnBoxing
int i = I2;      // AutoUnBoxing`
        },
        {
          heading: 'AutoBoxing and NullPointerException',
          content: [
            'When the compiler converts a wrapper to a primitive (unboxing), and the wrapper reference is <code>null</code>, a <code>NullPointerException</code> is thrown at runtime. Be careful when a wrapper is declared but not assigned.'
          ],
          code: `class Test {
    public static Integer I;   // null by default
    public static void main(String[] args) {
        int i = I;             // NPE at runtime (unboxing null)
        System.out.println(i);
    }
}

// Pre-1.5 vs 1.5+ with static field
class Test2 {
    public static Integer I = 0;   // initialized
    public static void main(String[] args) {
        int i = I;                  // OK
        System.out.println(i);
    }
}`
        },
        {
          heading: 'Wrapper Object Immutability and Reuse',
          content: [
            `Wrapper objects are <strong>immutable</strong> — once a wrapper object is constructed, you cannot change its content. Any "change" creates a new object.`,
            'By autoboxing, when the compiler needs to create an object, it does not create it immediately. It first checks whether any object with the same content has already been created by autoboxing. If so, the existing object is reused.',
            'This rule is applicable only within the following ranges:'
          ],
          table: {
            headers: [
              'Wrapper Type',
              'Cache Range / Behavior'
            ],
            rows: [
              [
                'Byte',
                'Always (entire range)'
              ],
              [
                'Short',
                '-128 to 127'
              ],
              [
                'Integer',
                '-128 to 127'
              ],
              [
                'Long',
                '-128 to 127'
              ],
              [
                'Character',
                '0 to 127'
              ],
              [
                'Boolean',
                'Always (true / false)'
              ],
              [
                'Float, Double',
                'Never (always new object)'
              ]
            ]
          },
          code: `// Case 1: separate constructor calls
Integer I1 = new Integer(10);
Integer I2 = new Integer(10);
System.out.println(I1 == I2);   // false (new objects)

// Case 2: constructor + autoboxing
Integer I1 = new Integer(10);
Integer I2 = 10;
System.out.println(I1 == I2);   // false (one is normal, one is autoboxed)

// Case 3: both autoboxed - within cache range
Integer I1 = 10;
Integer I2 = 10;
System.out.println(I1 == I2);   // true (cache hit)

// Case 4: both autoboxed - within cache range
Integer I1 = 100;
Integer I2 = 100;
System.out.println(I1 == I2);   // true (cache hit)

// Case 5: both autoboxed - outside cache range
Integer I1 = 1000;
Integer I2 = 1000;
System.out.println(I1 == I2);   // false (different objects)

// Out-of-range primitives — always new object
Long l1 = 126L; Long l2 = 126L; System.out.println(l1 == l2);   // true (in range)
Float f1 = 10.5f; Float f2 = 10.5f; System.out.println(f1 == f2); // false (always new)`
        },
        {
          heading: 'Overloading — Widening vs AutoBoxing vs Var-Args',
          content: [
            'When overloaded methods match, the compiler follows a strict priority order:',
            '<ol><li><strong>Widening</strong> (primitive widening) — highest priority</li><li><strong>AutoBoxing</strong> (primitive to wrapper)</li><li><strong>Var-Args</strong> — lowest priority</li></ol>',
            'If the chain widening → autoboxing is required, the compiler <strong>does not</strong> perform it. For example, <code>Long l = 10;</code> is invalid because <code>int</code> cannot widen to <code>long</code> and then autobox to <code>Long</code> in a single step.',
            'However, <code>Object o = 10;</code> is valid because the chain is: <code>int</code> → autobox to <code>Integer</code> → widen to <code>Object</code> (Integer is a child of Object).'
          ],
          code: `// Widening vs AutoBoxing — widening wins
class Test1 {
    public void m1(Integer I) { System.out.println("Integer"); }
    public void m1(long l)    { System.out.println("long"); }
    public static void main(String[] args) {
        Test1 t = new Test1();
        int i = 10;
        t.m1(i);   // Output: long
    }
}

// AutoBoxing vs Var-args — autoboxing wins
class Test2 {
    public void m1(Integer I) { System.out.println("Integer"); }
    public void m1(int... i)  { System.out.println("int"); }
    public static void main(String[] args) {
        Test2 t = new Test2();
        int i = 10;
        t.m1(i);   // Output: Integer
    }
}

// Widening vs Var-args — widening wins
class Test3 {
    public void m1(long l)    { System.out.println("long"); }
    public void m1(int... i)  { System.out.println("int"); }
    public static void main(String[] args) {
        Test3 t = new Test3();
        int i = 10;
        t.m1(i);   // Output: long
    }
}

// Widening followed by autoboxing — CE
class Test4 {
    public void m1(Long l) { System.out.println("Long"); }
    public static void main(String[] args) {
        Test4 t = new Test4();
        int i = 10;
        t.m1(i);   // CE: int -> long -> Long is not allowed
    }
}

// Autoboxing followed by widening — OK
class Test5 {
    public void m1(Object o) { System.out.println("Object"); }
    public static void main(String[] args) {
        Test5 t = new Test5();
        int i = 10;
        t.m1(i);   // Output: Object (Integer is a child of Object)
    }
}`
        },
        {
          heading: 'Static Imports — Resolution Order and Caveats',
          content: [
            'According to Sun, static imports <em>improve</em> readability. But most Java experts say static imports <em>increase</em> confusion. Hence it is <strong>not recommended</strong> unless there is a specific requirement.',
            'The main objective of static imports is to import static members of a particular class, so that you can access them directly without using the class name.',
            'The compiler resolves static members in the following priority order:',
            '<ol><li><strong>Current class</strong> static member (highest priority)</li><li><strong>Explicit static import</strong></li><li><strong>Implicit static import</strong> (lowest priority)</li></ol>',
            'If two static imports define the same member, the reference becomes <strong>ambiguous</strong> and a compile-time error is raised.'
          ],
          code: `// Without static import
class Test1 {
    public static void main(String[] args) {
        System.out.println(Math.sqrt(4));
        System.out.println(Math.random());
        System.out.println(Math.max(10, 20));
    }
}

// With static import
import static java.lang.Math.sqrt;
import static java.lang.Math.*;
class Test2 {
    public static void main(String[] args) {
        System.out.println(sqrt(4));
        System.out.println(random());
        System.out.println(max(10, 20));
    }
}

// Ambiguity example
import static java.lang.Integer.*;
import static java.lang.Byte.*;
class Test3 {
    public static void main(String[] args) {
        System.out.println(MAX_VALUE);   // CE: ambiguous
    }
}

// Priority example
import static java.lang.Integer.MAX_VALUE;   // 2) explicit
import static java.lang.Byte.*;              // 3) implicit
class Test4 {
    static int MAX_VALUE = 999;              // 1) current class
    public static void main(String[] args) {
        System.out.println(MAX_VALUE);   // 999
    }
}

// Valid vs invalid imports
// import java.lang.Math.*;        // valid (regular wildcard)
// import static java.lang.Math.*; // valid (static wildcard)
// import java.lang.Math;          // valid (regular single)
// import static java.lang.Math;   // invalid (no member specified)`
        }
      ]
    },
  'var-arg-methods': {
      title: 'Var-Arg Methods',
      sections: [
        {
          heading: 'Variable Arguments (Var-Args)',
          content: [
            'Var-args allow a method to accept a <strong>variable number of arguments</strong> of the same type.',
            'Introduced in Java 1.5.',
            'Internally, var-args are treated as an array of the specified type.',
            'A method can have only <strong>one var-arg parameter</strong>, and it must be the <strong>last parameter</strong>.'
          ],
          code: `public class VarArgsDemo {
    // Method with var-args
    static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Var-arg must be last parameter
    static void greet(String greeting, String... names) {
        for (String name : names) {
            System.out.println(greeting + ", " + name + "!");
        }
    }
    
    public static void main(String[] args) {
        System.out.println("sum(1,2): " + sum(1, 2));        // 3
        System.out.println("sum(1,2,3,4,5): " + sum(1, 2, 3, 4, 5)); // 15
        System.out.println("sum(): " + sum());              // 0 (empty array)
        
        greet("Hello", "Alice", "Bob", "Charlie");
    }
}`
        },
        {
          heading: 'Var-Args vs Overloading',
          content: [
            'Var-args and method overloading can interact in tricky ways.',
            'When matching a method call, Java prefers:',
            '<ol><li>Exact match (no widening, no var-args)</li><li>Widening (e.g., int → long)</li><li>Autoboxing (e.g., int → Integer)</li><li>Var-args (last resort)</li></ol>'
          ]
        },
        {
          heading: 'Var-Arg Methods — Deep Dive',
          content: [
            'From 1.5 version onwards, you are allowed to declare a method with a variable number of arguments — such methods are called <strong>var-arg methods</strong>.',
            'A var-arg method is declared as <code>m1(int... i)</code>. This method is applicable for any number of int arguments, <strong>including zero</strong> arguments.',
            'Var-arg methods are <strong>internally implemented using single-dimensional arrays</strong>. Hence you can differentiate arguments by using index.'
          ],
          code: `class Test {
    public static void m1(int... i) {
        System.out.println("var-arg method");
    }
    public static void main(String[] args) {
        m1();           // var-arg method
        m1(10);         // var-arg method
        m1(10, 20);     // var-arg method
        m1(10, 20, 30); // var-arg method
    }
}

// Summing variable number of arguments
class Test2 {
    public static void main(String[] args) {
        sum(10, 20);
        sum(10, 20, 30, 40);
        sum(10);
        sum();
    }
    public static void sum(int... a) {
        int total = 0;
        for (int i = 0; i < a.length; i++) {
            total = total + a[i];
        }
        System.out.println("The sum is: " + total);
    }
}`
        },
        {
          heading: 'Mixing Var-Args with General Parameters — Rules',
          content: [
            'You can mix general parameters with a var-arg parameter. The <strong>var-arg parameter must be the last parameter</strong>, otherwise a compile-time error.',
            'You <strong>cannot</strong> take more than one var-arg parameter in a single var-arg method — otherwise a compile-time error.',
            'Valid vs invalid declarations:'
          ],
          table: {
            headers: [
              'Declaration',
              'Valid?'
            ],
            rows: [
              [
                'm1(int... a)',
                'Valid'
              ],
              [
                'm1(int. ..a)',
                'Invalid — malformed function'
              ],
              [
                'm1(char ch, int... a)',
                'Valid — var-arg last'
              ],
              [
                'm1(int... a, char ch)',
                'Invalid — var-arg not last'
              ],
              [
                'm1(int...a, boolean... b)',
                'Invalid — more than one var-arg'
              ],
              [
                'm1(int... a, double... d)',
                'Invalid — more than one var-arg'
              ]
            ]
          }
        },
        {
          heading: 'Var-Arg Method Has Least Priority',
          content: [
            'When overloaded methods match a call, the <strong>var-arg method gets the least priority</strong>. If a non-var-arg method matches, that one is chosen. The var-arg method is chosen only if no other method matches.'
          ],
          code: `class Test {
    public static void m1(int i) {
        System.out.println("General method");
    }
    public static void m1(int... i) {
        System.out.println("var-arg method");
    }
    public static void main(String[] args) {
        m1();        // var-arg method (no exact match)
        m1(10, 20);  // var-arg method (only var-arg matches)
        m1(10);      // General method (exact match wins)
    }
}`
        }
      ]
    },
  'command-line-args': {
      title: 'Command-Line Arguments & main',
      sections: [
        {
          heading: 'Command-Line Arguments',
          content: [
            'Command-line arguments are values passed to a Java program when you run it.',
            'They are received in the <code>main</code> method as a <code>String[] args</code> array.',
            'Each argument is separated by a space. Arguments with spaces should be quoted.',
            'All arguments are strings — convert them to other types if needed.'
          ],
          code: `public class CommandLineDemo {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);
        
        for (int i = 0; i < args.length; i++) {
            System.out.println("Arg " + i + ": " + args[i]);
        }
        
        // Convert to numbers
        if (args.length >= 2) {
            int a = Integer.parseInt(args[0]);
            int b = Integer.parseInt(args[1]);
            System.out.println("Sum: " + (a + b));
        }
    }
}

// Run: java CommandLineDemo 10 20
// Output:
// Number of arguments: 2
// Arg 0: 10
// Arg 1: 20
// Sum: 30`
        },
        {
          heading: 'The main() Method',
          content: [
            'The <code>main</code> method is the entry point of every Java application.',
            'Its signature must be exactly: <code>public static void main(String[] args)</code>',
            'Why this specific signature?',
            '<ul><li><code>public</code> — JVM must be able to call it from outside the class</li><li><code>static</code> — JVM can call it without creating an object first</li><li><code>void</code> — the method does not return any value</li><li><code>main</code> — the name the JVM looks for</li><li><code>String[] args</code> — to receive command-line arguments</li></ul>',
            'You can also use <code>String... args</code> (var-args) instead of <code>String[] args</code>.'
          ]
        },
        {
          heading: 'Valid main() Method Signatures',
          content: [
            'The JVM accepts these variations:',
            '<ul><li><code>public static void main(String[] args)</code></li><li><code>public static void main(String args[])</code> — array syntax variant</li><li><code>public static void main(String... args)</code> — var-args</li><li><code>public static void main(String[] someName)</code> — any parameter name</li></ul>',
            'Invalid main methods:',
            '<ul><li>Missing <code>public</code> or <code>static</code> or <code>void</code></li><li>Wrong return type (e.g., int)</li><li>Different parameter type (e.g., int[] args)</li></ul>'
          ]
        }
      ]
    },
  'java-1-7-new-features': {
      title: 'Java 1.7 New Features',
      sections: [
        {
          heading: 'Overview of Java 1.7 (Dolphin) Features',
          content: [
            `Java 1.7, codenamed "Dolphin," was released in July 2011. Major language and library enhancements:`,
            '<ul><li><strong>try-with-resources</strong> — automatic resource management</li><li><strong>Diamond operator</strong> — type inference for generics</li><li><strong>Strings in switch</strong> — use String values in switch statements</li><li><strong>Multi-catch exceptions</strong> — catch multiple exception types in one block</li><li><strong>Binary literals</strong> — binary number representation with <code>0b</code> prefix</li><li><strong>Numeric literals with underscores</strong> — improve readability of large numbers</li><li><strong>NIO.2</strong> — new file I/O API (<code>java.nio.file</code>)</li></ul>'
          ]
        },
        {
          heading: 'try-with-resources',
          content: [
            'Automatically closes resources (anything implementing <code>java.lang.AutoCloseable</code>) at the end of a block.',
            'Eliminates boilerplate <code>finally</code> blocks for closing streams, connections, etc.',
            'Resources are declared in parentheses after <code>try</code>, separated by <code>;</code>.',
            'Resources are closed in reverse order of creation.'
          ],
          code: `// Before Java 1.7 — manual close in finally
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("data.txt"));
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (br != null) {
        try { br.close(); } catch (IOException e) { }
    }
}

// Java 1.7 — try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
}

// Multiple resources
try (
    FileInputStream in = new FileInputStream("input.txt");
    FileOutputStream out = new FileOutputStream("output.txt")
) {
    int data;
    while ((data = in.read()) != -1) {
        out.write(data);
    }
} catch (IOException e) {
    e.printStackTrace();
}`
        },
        {
          heading: 'Diamond Operator',
          content: [
            'Type inference for generics — let the compiler infer the type parameters.',
            'Use empty angle brackets <code>&lt;&gt;</code> on the right side of a generic instantiation.',
            'Available only for non-anonymous class types and only when the inferred type is denotable.'
          ],
          code: `// Before Java 1.7 — verbose
Map<String, List<String>> map = new HashMap<String, List<String>>();

// Java 1.7 — diamond operator
Map<String, List<String>> map = new HashMap<>();

// Works with nested generics
List<Map<String, Integer>> list = new ArrayList<>();`
        },
        {
          heading: 'Strings in switch',
          content: [
            'Switch statements can now use String values (previously only int, char, enum).',
            'The switch expression is compared using <code>String.equals()</code>.',
            'A <code>case</code> label must be a constant String expression (literal or final variable).'
          ],
          code: `String day = "MONDAY";

switch (day) {
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "FRIDAY":
        System.out.println("Weekday");
        break;
    case "SATURDAY":
    case "SUNDAY":
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Unknown");
}`
        },
        {
          heading: 'Multi-catch Exceptions',
          content: [
            'Catch multiple exception types in a single catch block using <code>|</code>.',
            'The exception variable is effectively final — you cannot reassign it.',
            'Useful when different exceptions require the same handling logic.'
          ],
          code: `try {
    // Some risky code
} catch (IOException | SQLException | ClassNotFoundException e) {
    // e is effectively final
    System.out.println("Error: " + e.getMessage());
    e.printStackTrace();
    // Cannot do: e = new IOException();  // compile error
}

// Before 1.7 — duplicate code
} catch (IOException e) { handle(e); }
catch (SQLException e) { handle(e); }`
        },
        {
          heading: 'Binary Literals and Underscores in Numbers',
          content: [
            'Binary literals use the <code>0b</code> or <code>0B</code> prefix.',
            'Underscores <code>_</code> can be placed between digits in any numeric literal for readability.',
            'Underscores cannot start/end a literal or be placed adjacent to a decimal point, type suffix, or in radix specifier.'
          ],
          code: `// Binary literals
int binary = 0b1010;           // 10 in decimal
long bigBinary = 0b1000_0001_1000_0000L;  // 33152

// Underscores for readability
int million = 1_000_000;
long creditCard = 1234_5678_9012_3456L;
double pi = 3.14_15_92_65_35;
int hex = 0xFF_EC_DE_5E;

// Invalid placements
// int bad1 = _1000;     // cannot start
// int bad2 = 1000_;     // cannot end
// int bad3 = 0x_FF;     // cannot be after prefix
// double bad4 = 3._14;  // cannot be before decimal point`
        },
        {
          heading: 'NIO.2 (java.nio.file)',
          content: [
            'The new file I/O API (<code>java.nio.file</code>) provides:',
            '<ul><li><code>Path</code> interface — replaces <code>java.io.File</code></li><li><code>Files</code> class — utility methods (read, write, copy, move, delete)</li><li><code>Paths</code> class — factory methods for creating Path instances</li><li>Better exception handling with <code>NoSuchFileException</code>, <code>AccessDeniedException</code>, etc.</li><li>Walking file trees with <code>Files.walk()</code></li></ul>',
            'Use <code>Path</code> instead of <code>File</code> for new code — <code>File</code> still works but Path is more feature-rich.'
          ],
          code: `import java.nio.file.*;
import java.nio.file.attribute.*;

Path path = Paths.get("data", "config.txt");

// Read all lines
List<String> lines = Files.readAllLines(path);

// Write lines
Files.write(path, Arrays.asList("line1", "line2"), StandardOpenOption.CREATE);

// Copy and move
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
Files.move(source, target);

// Check existence and properties
boolean exists = Files.exists(path);
boolean isDir = Files.isDirectory(path);
long size = Files.size(path);

// Walk a directory tree
Stream<Path> walk = Files.walk(Paths.get("."));`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises to practice Java 1.7 features:',
            '<ol><li>Write a method that reads a file using try-with-resources, even if an exception occurs mid-read.</li><li>Refactor an old piece of code that uses <code>java.io.File</code> to use <code>Path</code> and <code>Files</code>.</li><li>Create a multi-catch block for three different custom exceptions.</li><li>Use a binary literal to set bit flags and underscores to make them readable.</li><li>Use a String in a switch statement to map a status code to a message.</li></ol>'
          ]
        }
      ]
    },
  'java-1-8-new-features': {
      title: 'Java 1.8 New Features',
      sections: [
        {
          heading: 'Overview of Java 1.8 Features',
          content: [
            'Java 1.8, released in March 2014, was the biggest change to the language since generics.',
            'Major features:',
            '<ul><li><strong>Lambda expressions</strong> — treat functionality as a method argument</li><li><strong>Functional interfaces</strong> — interfaces with a single abstract method</li><li><strong>Stream API</strong> — functional-style operations on collections</li><li><strong>Default methods</strong> — methods with implementation in interfaces</li><li><strong>Static methods in interfaces</strong> — utility methods at interface level</li><li><strong>Method references</strong> — shorthand for lambdas calling existing methods</li><li><strong>Optional</strong> — better handling of null values</li><li><strong>New Date/Time API</strong> (<code>java.time</code>) — modern, immutable date handling</li></ul>',
            'Note: Lambda and Streams are covered in depth in M4 (Collections, FP & Concurrency). This page covers the rest.'
          ]
        },
        {
          heading: 'Functional Interfaces',
          content: [
            'A functional interface is an interface with exactly one abstract method (SAM — Single Abstract Method).',
            'The <code>@FunctionalInterface</code> annotation is optional but recommended — it makes the compiler enforce the SAM rule.',
            'Java 1.8 added <code>java.util.function</code> package with built-in functional interfaces.',
            'Common built-in functional interfaces:'
          ],
          code: `// Common built-in functional interfaces
Predicate<T>      // T -> boolean  (test)
Function<T, R>    // T -> R         (apply)
Consumer<T>       // T -> void      (accept)
Supplier<T>       // () -> T        (get)
BiFunction<T, U, R>   // T, U -> R
BiPredicate<T, U>     // T, U -> boolean
BiConsumer<T, U>      // T, U -> void
UnaryOperator<T>      // T -> T
BinaryOperator<T>     // T, T -> T

// Example — custom functional interface
@FunctionalInterface
interface StringTransformer {
    String transform(String s);
}

StringTransformer upper = s -> s.toUpperCase();
StringTransformer shout = s -> s + "!";

System.out.println(upper.transform("hello"));  // HELLO
System.out.println(shout.transform("hello"));   // hello!`
        },
        {
          heading: 'Default Methods in Interfaces',
          content: [
            'Interfaces can now have methods with a default implementation using the <code>default</code> keyword.',
            `Solves the "interface evolution" problem — adding methods to an interface used to break all implementers.`,
            'Implementing classes can override the default method or inherit it as-is.',
            'If a class implements two interfaces that both define a default method with the same signature, the class must override it.'
          ],
          code: `interface Vehicle {
    void start();
    
    // Default method
    default void honk() {
        System.out.println("Beep beep!");
    }
    
    // Static method in interface
    static Vehicle createElectric() {
        return new ElectricCar();
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
    // honk() is inherited
}

Car car = new Car();
car.start();   // Car started
car.honk();    // Beep beep!

// Diamond problem resolution — must override
interface A { default void hello() { System.out.println("A"); } }
interface B { default void hello() { System.out.println("B"); } }

class C implements A, B {
    @Override
    public void hello() {
        A.super.hello();  // or B.super.hello()
        System.out.println("C");
    }
}`
        },
        {
          heading: 'Method References',
          content: [
            'A shorthand for a lambda expression that calls an existing method.',
            'Four kinds of method references:'
          ],
          code: `// 1. Reference to a static method
//   ClassName::staticMethod
Function<String, Integer> parser = Integer::parseInt;
int n = parser.apply("42");

// 2. Reference to an instance method of a particular object
//   instance::method
String prefix = "Hello, ";
Function<String, String> greeter = prefix::concat;
String msg = greeter.apply("World");

// 3. Reference to an instance method of an arbitrary object of a given type
//   ClassName::instanceMethod
Function<String, String> upper = String::toUpperCase;
String result = upper.apply("hello");

// 4. Reference to a constructor
//   ClassName::new
Supplier<ArrayList<String>> listFactory = ArrayList::new;
ArrayList<String> list = listFactory.get();`
        },
        {
          heading: 'Optional Class',
          content: [
            'A container object that may or may not contain a non-null value.',
            'Helps design APIs that make it clear whether a value may be absent.',
            'Should be used as a return type, not as a field type in most cases.',
            'Common methods:'
          ],
          code: `import java.util.Optional;

Optional<String> empty = Optional.empty();
Optional<String> present = Optional.of("hello");
Optional<String> nullable = Optional.ofNullable(getValue());

// Checking presence
boolean has = present.isPresent();
boolean empty_ = present.isEmpty();  // Java 11+

// Getting the value
String value = present.get();           // throws if empty
String val = present.orElse("default");
String val2 = present.orElseGet(() -> "computed default");
String val3 = present.orElseThrow();    // throws NoSuchElementException

// Transforming
Optional<Integer> length = present.map(String::length);
Optional<String> upper = present.filter(s -> s.length() > 3)
                                .map(String::toUpperCase);

// Chaining
Optional<User> user = findUser(id);
String city = user.flatMap(User::getAddress)
                  .flatMap(Address::getCity)
                  .orElse("Unknown");

// Bad usage — do not use Optional.get() without checking
// Bad:  findUser(id).get()
// Good: findUser(id).orElseThrow(IllegalStateException::new)`
        },
        {
          heading: 'New Date/Time API (java.time)',
          content: [
            'Replaces the old <code>java.util.Date</code> and <code>java.util.Calendar</code> classes.',
            'All classes in <code>java.time</code> are immutable and thread-safe.',
            'Designed after the Joda-Time library, led by Stephen Colebourne (JSR-310).',
            'Key classes:'
          ],
          code: `import java.time.*;
import java.time.format.*;
import java.time.temporal.*;

// Current date/time
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
ZonedDateTime zoned = ZonedDateTime.now();
Instant instant = Instant.now();   // UTC milliseconds since epoch

// Creating specific dates
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 15);
LocalDate parsed = LocalDate.parse("2024-03-15");

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
String formatted = today.format(formatter);

// Calculations
LocalDate nextWeek = today.plusWeeks(1);
LocalDate prevMonth = today.minusMonths(1);
long daysBetween = ChronoUnit.DAYS.between(birthday, today);

// Comparing
boolean isAfter = today.isAfter(LocalDate.of(2020, 1, 1));
boolean isLeap = today.isLeapYear();

// Durations and Periods
Duration duration = Duration.between(time1, time2);
Period period = Period.between(date1, date2);

// Time zones
ZoneId tokyo = ZoneId.of("Asia/Tokyo");
ZonedDateTime tokyoTime = ZonedDateTime.now(tokyo);`
        },
        {
          heading: 'Other Java 1.8 Enhancements',
          content: [
            '<ul>',
            '<li><strong>Type annotations</strong> — use annotations on any type use (not just declarations), e.g. <code>List<@NonNull String></code></li>',
            '<li><strong>Repeating annotations</strong> — apply the same annotation multiple times to a declaration with <code>@Repeatable</code></li>',
            '<li><strong>Method parameter reflection</strong> — get parameter names at runtime via <code>-parameters</code> compiler flag</li>',
            '<li><strong>Base64 encoding/decoding</strong> — <code>java.util.Base64</code> class</li>',
            '<li><strong>Parallel array sorting</strong> — <code>Arrays.parallelSort()</code></li>',
            '<li><strong>CompletableFuture</strong> — improved Future API for asynchronous programming (covered in concurrency)</li>',
            '<li><strong>StampedLock</strong> — new lock implementation with optimistic reads</li>',
            '<li><strong>Concurrency improvements</strong> — <code>ConcurrentHashMap</code> enhancements, <code>fork/join</code> improvements</li>',
            '</ul>'
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 1.8 features:',
            '<ol>',
            '<li>Create a <code>@FunctionalInterface</code> for a custom operation and use it as a lambda.</li>',
            '<li>Write a default method in an interface and override it in a class that implements the interface.</li>',
            '<li>Use method references in 4 different ways (static, instance, arbitrary object, constructor).</li>',
            '<li>Refactor a method that returns <code>null</code> to return <code>Optional</code> and update all callers.</li>',
            '<li>Calculate your age in years, months, and days using <code>Period.between()</code>.</li>',
            '<li>Format the current date in 3 different formats using <code>DateTimeFormatter</code>.</li>',
            '</ol>'
          ]
        }
      ]
    },
  'java-9-new-features': {
      title: 'Java 9 New Features',
      sections: [
        {
          heading: 'Overview of Java 9 Features',
          content: [
            'Java 9, released in September 2017, was a major modular release. Key features:',
            '<ul><li><strong>Module System (Project Jigsaw / JPMS)</strong> — formal modularization of the JDK and applications</li><li><strong>Private methods in interfaces</strong> — helper methods that are not part of the public API</li><li><strong>Factory methods for collections</strong> — <code>List.of()</code>, <code>Set.of()</code>, <code>Map.of()</code></li><li><strong>Stream API improvements</strong> — <code>takeWhile</code>, <code>dropWhile</code>, <code>ofNullable</code>, <code>iterate</code> with predicate</li><li><strong>Optional improvements</strong> — <code>stream()</code>, <code>ifPresentOrElse()</code>, <code>or()</code></li><li><strong>JShell (REPL)</strong> — interactive Java shell</li><li><strong>Improved try-with-resources</strong> — can use effectively-final variables</li><li><strong>Reactive Streams (Flow API)</strong> — <code>java.util.concurrent.Flow</code></li><li><strong>Multi-release JAR files</strong> — JARs that contain class files for multiple Java versions</li></ul>'
          ]
        },
        {
          heading: 'Module System (JPMS / Project Jigsaw)',
          content: [
            'Introduces a formal module system to organize large applications and the JDK itself.',
            'A <strong>module</strong> is a named, self-describing collection of code and data.',
            'Defined in <code>module-info.java</code> at the root of the module.',
            'Keywords: <code>module</code>, <code>requires</code>, <code>exports</code>, <code>opens</code>, <code>provides</code>, <code>uses</code>.',
            'Benefits: strong encapsulation, reliable configuration, smaller runtime footprint.'
          ],
          code: `// module-info.java
module com.example.myapp {
    requires java.base;          // implicit but explicit for clarity
    requires java.sql;
    requires com.example.utils;  // another module
    
    exports com.example.myapp.api;
    exports com.example.myapp.dto;
    
    // Open for reflection (e.g., Spring, Hibernate)
    opens com.example.myapp.entities;
    
    // Service provider pattern
    provides com.example.myapp.spi.Plugin
        with com.example.myapp.plugins.DefaultPlugin;
    
    uses com.example.utils.Logger;
}

// Running modular application
// javac --module-source-path src -d out module-info.java src/com/example/myapp/*.java
// java --module-path out -m com.example.myapp/com.example.myapp.Main`
        },
        {
          heading: 'Factory Methods for Collections',
          content: [
            'Create immutable collections concisely using static factory methods.',
            'List, Set, Map have <code>of()</code> methods for up to 10 elements.',
            'Beyond 10, use <code>of(...).toArray()</code> with your own values or use <code>ofEntries()</code> for maps.',
            'The returned collections are immutable — modifying them throws <code>UnsupportedOperationException</code>.',
            'They do not allow null elements.'
          ],
          code: `// List
List<String> list = List.of("a", "b", "c");
List<Integer> empty = List.of();

// Set
Set<Integer> set = Set.of(1, 2, 3);

// Map
Map<String, Integer> map = Map.of(
    "apple", 1,
    "banana", 2,
    "cherry", 3
);

// For > 10 entries, use ofEntries
Map.Entry<String, Integer> e1 = Map.entry("a", 1);
Map.Entry<String, Integer> e2 = Map.entry("b", 2);
Map<String, Integer> bigMap = Map.ofEntries(e1, e2);

// Immutable — this throws
// list.add("d");  // UnsupportedOperationException
// list.contains(null);  // NullPointerException`
        },
        {
          heading: 'Stream API Improvements',
          content: [
            'New methods added for more expressive stream pipelines:',
            '<ul><li><code>takeWhile(Predicate)</code> — take elements while predicate is true (like break)</li><li><code>dropWhile(Predicate)</code> — drop elements while predicate is true (then take the rest)</li><li><code>ofNullable(T)</code> — create a stream of 0 or 1 elements</li><li><code>iterate(T, Predicate&lt;T&gt;, UnaryOperator&lt;T&gt;)</code> — finite iteration with a stop condition</li><li><code>Optional.stream()</code> — convert to stream (0 or 1 elements)</li></ul>'
          ],
          code: `// takeWhile — take while condition holds
Stream.of(1, 2, 3, 4, 5, 1, 2)
      .takeWhile(n -> n < 4)     // 1, 2, 3
      .forEach(System.out::println);

// dropWhile — drop while condition holds, then take rest
Stream.of(1, 2, 3, 4, 5, 1, 2)
      .dropWhile(n -> n < 4)    // 4, 5, 1, 2
      .forEach(System.out::println);

// ofNullable — handle null gracefully
String value = maybeNull();
Stream<String> stream = Stream.ofNullable(value);

// iterate with stop condition
Stream.iterate(1, n -> n < 100, n -> n * 2)
      .forEach(System.out::println);  // 1, 2, 4, 8, 16, 32, 64

// Optional.stream
Optional<String> opt = Optional.of("hello");
opt.stream().forEach(System.out::println);  // hello

Optional.empty().stream().count();  // 0`
        },
        {
          heading: 'Private Methods in Interfaces',
          content: [
            'Interfaces can now have <code>private</code> methods to share code between default methods.',
            'Private methods are not visible to implementing classes.',
            'Helps avoid code duplication in interfaces with multiple default methods.'
          ],
          code: `interface Logger {
    default void logInfo(String msg) {
        log("INFO", msg);
    }
    
    default void logError(String msg) {
        log("ERROR", msg);
    }
    
    default void logDebug(String msg) {
        if (isDebugEnabled()) {
            log("DEBUG", msg);
        }
    }
    
    // Private helper — not part of the API
    private void log(String level, String msg) {
        System.out.println(LocalDateTime.now() + " [" + level + "] " + msg);
    }
    
    private boolean isDebugEnabled() {
        return false;  // placeholder
    }
}`
        },
        {
          heading: 'JShell (REPL)',
          content: [
            'An interactive Read-Eval-Print-Loop (REPL) tool for Java.',
            'Launched with <code>jshell</code> command in the terminal.',
            'Allows you to try code snippets without writing a full class/main method.',
            'Great for learning, prototyping, and quick experimentation.',
            'Supports tab completion, automatic variable declaration, history, and saved scripts.'
          ],
          code: `$ jshell
|  Welcome to JShell -- Version 17
|  For an introduction type: /help intro

jshell> int x = 10
x ==> 10

jshell> System.out.println("x = " + x)
x = 10

jshell> List<String> list = List.of("a", "b", "c")
list ==> [a, b, c]

jshell> list.stream().map(String::toUpperCase).forEach(System.out::println)
A
B
C

jshell> /exit
|  Goodbye`
        },
        {
          heading: 'Reactive Streams (Flow API)',
          content: [
            'Java 9 standardized reactive stream concepts with <code>java.util.concurrent.Flow</code>.',
            'Contains four nested interfaces: <code>Publisher</code>, <code>Subscriber</code>, <code>Subscription</code>, <code>Processor</code>.',
            'Backed by the Reactive Streams initiative (also used by RxJava, Reactor, Akka Streams).',
            'Used heavily in modern reactive frameworks like Spring WebFlux and Project Reactor.'
          ],
          code: `import java.util.concurrent.Flow.*;
import java.util.concurrent.SubmissionPublisher;

// Simple publisher-subscriber example
SubmissionPublisher<Integer> publisher = new SubmissionPublisher<>();

// Subscriber
Subscriber<Integer> subscriber = new Subscriber<>() {
    private Subscription subscription;
    @Override
    public void onSubscribe(Subscription s) {
        this.subscription = s;
        s.request(1);  // request 1 item
    }
    @Override
    public void onNext(Integer item) {
        System.out.println("Received: " + item);
        subscription.request(1);  // request next
    }
    @Override
    public void onError(Throwable t) { t.printStackTrace(); }
    @Override
    public void onComplete() { System.out.println("Done"); }
};

publisher.subscribe(subscriber);
publisher.submit(1);
publisher.submit(2);
publisher.submit(3);
publisher.close();`
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 9:',
            '<ol><li>Create an immutable <code>List</code>, <code>Set</code>, and <code>Map</code> using factory methods, then try to modify them and observe the exception.</li><li>Use <code>takeWhile</code> and <code>dropWhile</code> on a sorted stream of numbers.</li><li>Create an interface with two default methods that share a private helper method.</li><li>Launch <code>jshell</code> and try out a few statements and expressions.</li><li>Refactor a class to declare a <code>module-info.java</code> with the proper <code>exports</code> and <code>requires</code>.</li></ol>'
          ]
        }
      ]
    },
  'java-10-new-features': {
      title: 'Java 10 New Features',
      sections: [
        {
          heading: 'Overview of Java 10 Features',
          content: [
            'Java 10 was a short-term release in March 2018 (six-month release cadence started).',
            'Main features:',
            `<ul><li><strong>Local variable type inference (<code>var</code>)</strong> — the biggest language change</li><li><strong>Unmodifiable collections</strong> — <code>List.copyOf()</code>, <code>Set.copyOf()</code>, <code>Map.copyOf()</code></li><li><strong>Optional.orElseThrow()</strong> — parameterless method that throws <code>NoSuchElementException</code> if empty</li><li><strong>Garbage collector improvements</strong> — G1 parallel full GC, experimental ZGC</li><li><strong>Application class-data sharing</strong> — improved startup with CDS archives</li><li><strong>Container awareness</strong> — JVM detects container limits (CPU, memory) automatically</li><li><strong>Root certificates</strong> — bundled cacerts in the JDK (no more "trust anchor not found")</li></ul>`
          ]
        },
        {
          heading: 'Local Variable Type Inference (var)',
          content: [
            'The <code>var</code> keyword lets the compiler infer the type of a local variable from its initializer.',
            'Available only for local variables (including loop variables, try-with-resources).',
            'NOT available for: fields, method parameters, method return types, catch parameters (catch was added in Java 1.7, so it works there).',
            'The variable still has a static type — <code>var</code> is not dynamic typing; it is just shorter syntax.',
            'Use it when the type is obvious from the right-hand side, not just to save typing.'
          ],
          code: `// Before Java 10
String name = "Sudhakar";
List<String> items = new ArrayList<>();
Map<String, Integer> counts = new HashMap<>();

// Java 10 with var
var name = "Sudhakar";         // inferred as String
var items = new ArrayList<String>();  // inferred as ArrayList<String>
var counts = new HashMap<String, Integer>();

// Use in for loops
for (var entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Use in try-with-resources
try (var reader = new BufferedReader(new FileReader("file.txt"))) {
    return reader.readLine();
}

// NOT allowed:
// var x;              // no initializer
// var null = null;    // cannot infer
// var lambda = () -> System.out.println();  // target type needed
// public var getName() { ... }  // method return type not allowed
// class Foo { var x; }  // field not allowed

// Good usage — type is obvious
var list = new ArrayList<User>();
var stream = users.stream();

// Bad usage — type is unclear
var result = process(input);  // What type? Hard to read.
var temp = 3.14;              // Could be double or float — explicit is better`
        },
        {
          heading: 'Unmodifiable Collection Copies',
          content: [
            '<code>List.copyOf</code>, <code>Set.copyOf</code>, and <code>Map.copyOf</code> return unmodifiable copies.',
            'Similar to <code>Collections.unmodifiableList()</code> but work with any Iterable or Map.',
            'Null elements are not allowed in the copy.',
            'The returned collection is a separate copy — modifications to the source do not affect the copy.'
          ],
          code: `List<String> mutable = new ArrayList<>();
mutable.add("a");
mutable.add("b");

List<String> immutable = List.copyOf(mutable);
immutable.add("c");  // UnsupportedOperationException

// The original is unaffected
mutable.add("d");
// immutable still contains only "a", "b"

// Useful when returning from methods
public List<String> getNames() {
    return List.copyOf(internalNames);
}`
        },
        {
          heading: 'Optional.orElseThrow() (No-Arg)',
          content: [
            'Before Java 10, you had to write <code>Optional.get()</code> or <code>orElseThrow(NoSuchElementException::new)</code>.',
            'Java 10 adds a parameterless <code>orElseThrow()</code> that throws <code>NoSuchElementException</code>.',
            'Now equivalent to <code>get()</code> but with a more descriptive name (and no longer deprecated for this use).',
            'Prefer it over <code>get()</code> for clarity.'
          ],
          code: `Optional<String> opt = findValue("key");

// Before Java 10
String value = opt.orElseThrow(NoSuchElementException::new);
// or (less preferred)
String value = opt.get();

// Java 10+
String value = opt.orElseThrow();
String value = opt.orElseThrow(() -> new CustomException("not found"));`
        },
        {
          heading: 'Garbage Collector and Performance Improvements',
          content: [
            'Java 10 brought several under-the-hood performance improvements:',
            '<ul><li><strong>G1 parallel full GC</strong> — full G1 collections now use multiple threads by default, reducing pause times</li><li><strong>Experimental ZGC</strong> — a new low-latency concurrent garbage collector (production-ready in Java 15+)</li><li><strong>Application class-data sharing (AppCDS)</strong> — improve startup time and memory footprint by archiving loaded classes</li><li><strong>Container awareness</strong> — JVMs now default to using container-defined CPU and memory limits instead of host system values</li></ul>',
            'These are mostly JVM tuning / deployment changes; your code usually does not need to change.'
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 10:',
            '<ol><li>Refactor a method with verbose type declarations to use <code>var</code>. Then refactor a different method where var makes it harder to read, and use explicit types instead.</li><li>Take a mutable <code>List</code>, make a copy with <code>List.copyOf()</code>, and verify the copy cannot be modified.</li><li>Use <code>orElseThrow()</code> in place of <code>get()</code> on an Optional.</li><li>Enable G1 parallel full GC and check the GC log output.</li></ol>'
          ]
        }
      ]
    },
  'java-11-new-features': {
      title: 'Java 11 New Features (LTS)',
      sections: [
        {
          heading: 'Overview of Java 11 (LTS) Features',
          content: [
            'Java 11 (September 2018) was the first LTS release after the new six-month cadence.',
            'Main features:',
            '<ul><li><strong><code>var</code> in lambda parameters</strong> — implicit type for lambda parameters</li><li><strong>HTTP Client API (standard)</strong> — <code>java.net.http.HttpClient</code></li><li><strong>String new methods</strong> — <code>isBlank</code>, <code>strip</code>, <code>lines</code>, <code>repeat</code></li><li><strong>Files readString / writeString</strong> — quick read/write of small files</li><li><strong>Optional enhancements</strong> — <code>isEmpty()</code></li><li><strong>Collection factory methods for > 10 elements</strong> — <code>List.of(...20 args)</code> overloads</li><li><strong>Running single-file source-code</strong> — <code>java HelloWorld.java</code> without compiling first</li><li><strong>Nest-based access control</strong> — bridge between nested classes and reflection</li><li><strong>Removed Java EE and CORBA modules</strong> — <code>java.xml.ws</code>, <code>java.xml.bind</code>, <code>java.activation</code></li></ul>'
          ]
        },
        {
          heading: 'var in Lambda Parameters',
          content: [
            'Java 10 introduced <code>var</code> for local variables. Java 11 extends it to lambda parameters.',
            'Useful when applying annotations to lambda parameters.',
            'The inferred type is treated like an explicitly declared type.'
          ],
          code: `// Without annotations — same as before
Predicate<String> p1 = s -> s.isEmpty();

// With var (only useful when annotating)
Predicate<String> p2 = (@NonNull var s) -> s.isEmpty();

// Mixing var and non-var is allowed but both must be explicit
BiFunction<String, String, String> f = (var a, var b) -> a + b;`
        },
        {
          heading: 'Standard HTTP Client API',
          content: [
            'The incubator HTTP Client from Java 9 became standard in Java 11.',
            'Supports HTTP/1.1 and HTTP/2, synchronous and asynchronous requests.',
            'Replaces the older <code>HttpURLConnection</code> for most use cases.',
            'Fluent builder API: <code>HttpClient.newBuilder()</code>, <code>HttpRequest.newBuilder()</code>.'
          ],
          code: `import java.net.URI;
import java.net.http.*;
import java.time.Duration;

HttpClient client = HttpClient.newBuilder()
    .version(HttpClient.Version.HTTP_2)
    .connectTimeout(Duration.ofSeconds(10))
    .build();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Content-Type", "application/json")
    .timeout(Duration.ofSeconds(30))
    .GET()
    .build();

// Synchronous
HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.statusCode());
System.out.println(response.body());

// Asynchronous
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();

// POST with body
HttpRequest post = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString("{\\"name\\":\\"Sudhakar\\"}"))
    .build();`
        },
        {
          heading: 'String New Methods',
          content: [
            'Several new methods were added to <code>String</code> in Java 11:',
            '<ul><li><code>isBlank()</code> — true if the string is empty or contains only whitespace</li><li><code>strip()</code> / <code>stripLeading()</code> / <code>stripTrailing()</code> — Unicode-aware whitespace trimming (better than <code>trim()</code>)</li><li><code>lines()</code> — split by line terminators into a <code>Stream&lt;String&gt;</code></li><li><code>repeat(int)</code> — concatenate the string to itself N times</li></ul>'
          ],
          code: `// isBlank
"   ".isBlank();         // true
"hello".isBlank();       // false

// strip — better than trim (handles Unicode whitespace)
" hello ".strip();     // "hello"
" hello ".trim();      // " hello "  (trim misses this)

// lines
"line1
line2
line3".lines()
    .forEach(System.out::println);

// repeat
"=".repeat(10);  // "=========="
"ab".repeat(3);  // "ababab"

// combine
"  hello  ".strip().repeat(2).toUpperCase();  // "HELLOHELLO"`
        },
        {
          heading: 'Files readString and writeString',
          content: [
            'Quick utility methods for reading and writing small files as Strings or byte arrays.',
            'Internally uses <code>Files.readAllBytes</code> / <code>write</code>.',
            'Should only be used for files that fit comfortably in memory.'
          ],
          code: `// Read as String
String content = Files.readString(Path.of("data.txt"));
String content2 = Files.readString(Path.of("data.txt"), StandardCharsets.UTF_8);

// Write String
Files.writeString(Path.of("output.txt"), "Hello, World!");

// Append
Files.writeString(
    Path.of("log.txt"),
    "New entry
",
    StandardOpenOption.CREATE,
    StandardOpenOption.APPEND
);

// Read as bytes
byte[] bytes = Files.readAllBytes(Path.of("image.png"));`
        },
        {
          heading: 'Running Single-File Source-Code',
          content: [
            'Java 11 can run a single .java file directly with the <code>java</code> command — no explicit compile step.',
            'Limited to single-file programs — useful for scripts, examples, and quick experiments.',
            'The <code>source-file</code> launcher (used by <code>java Hello.java</code>) compiles the file in memory and runs the first class whose name matches the filename (or the class with the <code>public static void main(String[])</code> method).'
          ],
          code: `// Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, " + args[0] + "!");
    }
}

// Before Java 11
$ javac Hello.java
$ java Hello World
// Output: Hello, World!

// Java 11 — single-file source execution
$ java Hello.java World
// Output: Hello, World!

// Works for shebang scripts too
#!/usr/bin/java --source 11
public class Greet {
    public static void main(String[] args) {
        System.out.println("Hello from a script!");
    }
}`
        },
        {
          heading: 'Removed and Deprecated APIs',
          content: [
            'Java 11 removed several APIs that were deprecated since Java 1.5–1.9:',
            '<ul><li>Java EE modules: <code>java.xml.ws</code> (JAX-WS), <code>java.xml.bind</code> (JAXB), <code>java.activation</code> (JAF), <code>java.xml.ws.annotation</code></li><li>CORBA modules: <code>java.corba</code>, <code>org.omg.*</code></li><li>JavaFX was removed from the JDK (now a separate project)</li></ul>',
            'If you depend on these, add external dependencies (e.g., <code>jakarta.xml.bind:jakarta.xml.bind-api</code>).'
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 11:',
            '<ol><li>Use the standard <code>HttpClient</code> to fetch a public API and print the response body.</li><li>Use <code>String.repeat</code>, <code>String.strip</code>, and <code>String.isBlank</code> on sample inputs.</li><li>Use <code>Files.readString</code> and <code>Files.writeString</code> to copy a file.</li><li>Create a small <code>Hello.java</code> and run it with <code>java Hello.java</code> (no compile step).</li><li>Use <code>var</code> in a lambda parameter to apply a custom annotation.</li></ol>'
          ]
        }
      ]
    },
  'java-17-new-features': {
      title: 'Java 17 New Features (LTS)',
      sections: [
        {
          heading: 'Overview of Java 17 (LTS) Features',
          content: [
            'Java 17 (September 2021) is the current widely-used LTS release. Many of its features were previewed in earlier versions and became standard in 17.',
            'Main features:',
            '<ul><li><strong>Sealed classes and interfaces</strong> — restrict which classes can extend/implement</li><li><strong>Pattern matching for instanceof</strong> — combine check and cast</li><li><strong>Records</strong> — concise immutable data carriers</li><li><strong>Switch expressions</strong> — switch as an expression that returns a value (standard in 14, refined in 17)</li><li><strong>Text blocks</strong> — multi-line string literals (standard in 15)</li><li><strong>Helpful NullPointerExceptions</strong> — precise NPE messages showing which variable was null</li><li><strong>Pattern matching for switch (preview)</strong> — switch can match on patterns</li><li><strong>Strong encapsulation of JDK internals</strong> — by default, internal APIs are not accessible</li><li><strong>Removed Nashorn JavaScript engine</strong></li></ul>'
          ]
        },
        {
          heading: 'Sealed Classes and Interfaces',
          content: [
            'A sealed class or interface restricts which other classes or interfaces can extend or implement it.',
            'Defined using the <code>sealed</code> modifier; permitted subclasses declared with the <code>permits</code> clause.',
            'Permitted subclasses must be in the same module (or same package if not in a module).',
            'Each permitted subclass must be <code>final</code>, <code>sealed</code>, or <code>non-sealed</code>.',
            'Enables exhaustive pattern matching and clearer domain modeling.'
          ],
          code: `// Sealed interface — only these three shapes are allowed
public sealed interface Shape
    permits Circle, Rectangle, Triangle {
    double area();
}

public final class Circle implements Shape {
    private final double radius;
    public Circle(double r) { this.radius = r; }
    @Override
    public double area() { return Math.PI * radius * radius; }
}

public final class Rectangle implements Shape {
    private final double width, height;
    public Rectangle(double w, double h) { this.width = w; this.height = h; }
    @Override
    public double area() { return width * height; }
}

public non-sealed class Triangle implements Shape {
    private final double base, height;
    public Triangle(double b, double h) { this.base = b; this.height = h; }
    @Override
    public double area() { return 0.5 * base * height; }
}

// Sealed class
public sealed class Vehicle
    permits Car, Truck, Motorcycle {
    // common fields/methods
}

public final class Car extends Vehicle { }
public final class Truck extends Vehicle { }
public non-sealed class Motorcycle extends Vehicle { }  // can be extended further`
        },
        {
          heading: 'Pattern Matching for instanceof',
          content: [
            'A long-standing annoyance was the need to cast after an instanceof check.',
            'The pattern variable binds the cast result directly in the condition, in scope for the true branch.',
            'No explicit cast needed; the variable is already the correct type.',
            'Standard since Java 16.'
          ],
          code: `// Before Java 16
if (obj instanceof String) {
    String s = (String) obj;       // manual cast
    System.out.println(s.length());
}

// Java 16+
if (obj instanceof String s) {     // bind and check in one
    System.out.println(s.length());
}

// Can combine with other conditions
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Negation
if (!(obj instanceof String s)) {
    return;
}
// s is in scope here
System.out.println(s.toLowerCase());`
        },
        {
          heading: 'Records',
          content: [
            'A record is a concise way to declare an immutable data carrier class.',
            'Auto-generates a constructor, accessor methods, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.',
            'Accessors are named after the components (no <code>get</code> prefix): <code>person.name()</code>, not <code>person.getName()</code>.',
            'Components are <code>final</code> by default; the whole record is implicitly final.',
            'You can add static fields, static methods, and instance methods. You can also override canonical methods if needed.'
          ],
          code: `// Verbose class — 50+ lines
public final class Person {
    private final String name;
    private final int age;
    public Person(String name, int age) { this.name = name; this.age = age; }
    public String getName() { return name; }
    public int getAge() { return age; }
    // equals, hashCode, toString...
}

// Record — one line
public record Person(String name, int age) { }

Person p = new Person("Sudhakar", 30);
p.name();    // "Sudhakar"
p.age();     // 30
p.toString();  // Person[name=Sudhakar, age=30]

// Records can have additional members
public record Point(int x, int y) {
    public double distanceFromOrigin() {
        return Math.sqrt(x * x + y * y);
    }
    
    // Compact constructor for validation
    public Point {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be non-negative");
        }
    }
}

// Records implement interfaces
public record User(String username, String email) implements Comparable<User> {
    @Override
    public int compareTo(User other) {
        return this.username.compareTo(other.username);
    }
}

// Records are great for DTOs, value objects, and tuple-like data`
        },
        {
          heading: 'Switch Expressions',
          content: [
            'Switch can now be used as an expression that returns a value (standard in 14, refined with pattern matching in 17).',
            'Arrow-form <code>case X -&gt; ...</code> avoids fall-through and does not need <code>break</code>.',
            `Multiple labels can be combined: <code>case MONDAY, TUESDAY -&gt; "Weekday";</code>`,
            'Exhaustiveness is checked for enums and sealed types — no <code>default</code> needed when all cases are covered.'
          ],
          code: `// Traditional switch statement
String label;
switch (day) {
    case MONDAY: case TUESDAY: case WEDNESDAY: case THURSDAY: case FRIDAY:
        label = "Weekday";
        break;
    case SATURDAY: case SUNDAY:
        label = "Weekend";
        break;
    default:
        label = "Unknown";
        break;
}

// Java 14+ switch expression (arrow form)
String label = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY -> "Weekend";
};

// Use as expression directly
int days = switch (month) {
    case JANUARY, MARCH, MAY, JULY, AUGUST, OCTOBER, DECEMBER -> 31;
    case APRIL, JUNE, SEPTEMBER, NOVEMBER -> 30;
    case FEBRUARY -> 28;  // ignoring leap years for simplicity
};

// Yield a value from a block
String result = switch (value) {
    case 1 -> "one";
    case 2 -> "two";
    default -> {
        if (value > 0) yield "many";
        else yield "negative";
    }
};`
        },
        {
          heading: 'Text Blocks',
          content: [
            'Multi-line string literals using triple-quote delimiters.',
            'Standard since Java 15.',
            'Indentation and line breaks are preserved; incidental whitespace is automatically stripped.',
            'Useful for HTML, JSON, SQL, and other multi-line content.'
          ],
          code: `// Without text blocks
String json = "{
" +
              "  "name": "Sudhakar",
" +
              "  "age": 30,
" +
              "  "city": "Hyderabad"
" +
              "}";

// With text blocks
String json = """
        {
          "name": "Sudhakar",
          "age": 30,
          "city": "Hyderabad"
        }
        """;

// SQL example
String query = """
        SELECT id, name, email
        FROM users
        WHERE active = true
        ORDER BY name
        """;

// HTML example
String html = """
        <html>
            <body>
                <h1>Hello, %s!</h1>
            </body>
        </html>
        """.formatted(name);

// String formatting still works
String greeting = """
        Hello,
        %s!
        Welcome to %s.
        """.formatted(name, appName);`
        },
        {
          heading: 'Helpful NullPointerExceptions',
          content: [
            `Before Java 14, an NPE just said "NullPointerException" with no clue which variable was null.`,
            'Java 14+ (and standard in 17) NPEs now pinpoint the exact variable that was null.',
            'Works for both field accesses and chained method calls.',
            'Can be disabled with <code>-XX:-ShowCodeDetailsInExceptionMessages</code> JVM flag.'
          ],
          code: `// Before — unhelpful
User user = null;
System.out.println(user.getName());
// Exception in thread "main" java.lang.NullPointerException

// After — helpful
User user = null;
System.out.println(user.getName());
// Exception in thread "main" java.lang.NullPointerException:
//   Cannot invoke "User.getName()" because "user" is null

// Chained
Address a = user.getAddress();
System.out.println(a.getCity().toUpperCase());
// Exception: Cannot invoke "String.toUpperCase()" because the return
// value of "Address.getCity()" is null`
        },
        {
          heading: 'Other Java 17 Features',
          content: [
            'Other notable features and changes in Java 17:',
            '<ul>',
            '<li><strong>Pattern matching for switch (preview)</strong> — switch can match on type patterns, like <code>case String s -&gt; ...</code></li>',
            '<li><strong>Strong encapsulation of JDK internals by default</strong> — <code>sun.misc.Unsafe</code> and similar internal APIs require <code>--add-opens</code> flags</li>',
            '<li><strong>Removed Nashorn JavaScript engine</strong> — the embedded JS engine was removed (use GraalVM instead if needed)</li>',
            '<li><strong>New macOS rendering pipeline (preview)</strong> — replaced the old Java2D pipeline on macOS</li>',
            '<li><strong>Deprecate the Applet API for removal</strong> — applets are finally being phased out</li>',
            '<li><strong>Foreign Function & Memory API (incubator)</strong> — improved JNI replacement for native code</li>',
            '</ul>'
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 17:',
            '<ol>',
            '<li>Define a sealed interface <code>Payment</code> with permitted implementations <code>CreditCard</code>, <code>UPI</code>, and <code>NetBanking</code>.</li>',
            '<li>Create a record <code>Employee(String name, int id, double salary)</code> and add a custom <code>annualSalary()</code> method.</li>',
            '<li>Use pattern matching for instanceof to handle a List of mixed types.</li>',
            `<li>Write a switch expression that converts an enum Day to "Weekday" / "Weekend".</li>`,
            '<li>Convert a multi-line JSON literal to a text block.</li>',
            '<li>Trigger an NPE in a chained expression and read the helpful message.</li>',
            '</ol>'
          ]
        }
      ]
    },
  'java-21-new-features': {
      title: 'Java 21 New Features (LTS)',
      sections: [
        {
          heading: 'Overview of Java 21 (LTS) Features',
          content: [
            'Java 21 (September 2023) is the most recent LTS release. It includes features that have been in preview/incubator for several releases.',
            'Main features:',
            '<ul><li><strong>Virtual threads (Project Loom)</strong> — lightweight threads for high-throughput concurrent apps</li><li><strong>Pattern matching for switch (standard)</strong> — finalize the switch pattern feature</li><li><strong>Record patterns (standard)</strong> — destructure records in instanceof and switch</li><li><strong>Sequenced collections</strong> — first/last element methods on List, Set, Map</li><li><strong>String templates (preview)</strong> — embedded expressions in strings</li><li><strong>Unnamed patterns and variables (preview)</strong> — <code>_</code> for unused variables and patterns</li><li><strong>Scoped values (incubator)</strong> — immutable thread-local-like values</li><li><strong>Structured concurrency (incubator)</strong> — treat groups of tasks as a single unit</li><li><strong>Generational ZGC</strong> — improves ZGC performance for typical workloads</li></ul>'
          ]
        },
        {
          heading: 'Virtual Threads (Project Loom)',
          content: [
            'Lightweight threads that dramatically reduce the cost of writing concurrent code.',
            'Each virtual thread is a separate unit of execution, but they share the underlying OS thread pool.',
            'Millions of virtual threads can run on a single OS thread — perfect for I/O-bound workloads (HTTP servers, DB calls).',
            'Use <code>Thread.startVirtualThread(Runnable)</code> or <code>Executors.newVirtualThreadPerTaskExecutor()</code>.',
            'Use <code>Executors.newFixedThreadPool</code> if you have a CPU-bound task — virtual threads are for blocking I/O.'
          ],
          code: `// Old way — platform threads, expensive
ExecutorService executor = Executors.newFixedThreadPool(200);
// Each thread uses ~1 MB of stack space

// Java 21 — virtual threads
ExecutorService vExecutor = Executors.newVirtualThreadPerTaskExecutor();

// Submit a million virtual threads — works fine
List<Future<String>> futures = new ArrayList<>();
for (int i = 0; i < 1_000_000; i++) {
    futures.add(vExecutor.submit(() -> {
        // Do blocking I/O — this is where virtual threads shine
        return httpClient.fetch("https://api.example.com/data");
    }));
}

// Direct creation
Thread.startVirtualThread(() -> {
    System.out.println("Running on a virtual thread");
});

// Builder
Thread.ofVirtual()
    .name("my-virtual-thread")
    .start(() -> doWork());

// Use with try-with-resources for auto-shutdown
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> handleRequest());
    executor.submit(() -> handleAnother());
}  // Waits for all tasks to complete`
        },
        {
          heading: 'Pattern Matching for switch (Standard)',
          content: [
            'Switch can now match on type patterns — a much cleaner way to handle polymorphic data.',
            'Especially powerful with sealed types — the compiler verifies exhaustiveness.',
            'When all cases are covered (no <code>default</code>), the switch is exhaustive.',
            'Use a <code>when</code> clause (guarded pattern) for additional conditions.'
          ],
          code: `// Sealed type with permits
sealed interface Shape permits Circle, Rectangle, Triangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double width, double height) implements Shape {}
record Triangle(double base, double height) implements Shape {}

// Pattern matching switch
double area(Shape s) {
    return switch (s) {
        case Circle c        -> Math.PI * c.radius() * c.radius();
        case Rectangle r     -> r.width() * r.height();
        case Triangle t      -> 0.5 * t.base() * t.height();
    };  // No default needed — exhaustive for sealed type
}

// Null case
String describe(Object obj) {
    return switch (obj) {
        case null             -> "null";
        case Integer i        -> "Integer: " + i;
        case String s         -> "String: " + s;
        case int[] arr        -> "Array of ints, length " + arr.length;
        default               -> "Something else";
    };
}

// Guarded pattern
String size(Category cat) {
    return switch (cat) {
        case Category c when c.size() < 10  -> "small";
        case Category c when c.size() < 100 -> "medium";
        case Category c                     -> "large";
    };
}`
        },
        {
          heading: 'Record Patterns',
          content: [
            'Destructure records inline — extract components without calling accessors.',
            'Can be nested — match on records that contain other records.',
            'Works with both <code>instanceof</code> and switch pattern matching.'
          ],
          code: `record Point(int x, int y) {}
record Line(Point start, Point end) {}
record Shape(Line outline, String color) {}

// Without record patterns
if (obj instanceof Line line) {
    Point s = line.start();
    Point e = line.end();
    if (s.x() == 0 && e.x() == 0) {
        System.out.println("Vertical line");
    }
}

// With record patterns — destructure in one step
if (obj instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {
    System.out.println("Line from (" + x1 + "," + y1 + ") to (" + x2 + "," + y2 + ")");
}

// Nested record patterns
if (obj instanceof Shape(Line(Point s, Point e), String color)) {
    System.out.println("Colored " + color + " shape");
}

// In switch
String describe(Object obj) {
    return switch (obj) {
        case Point(int x, int y) when x == 0 && y == 0 -> "origin";
        case Point(int x, int y)                       -> "point at (" + x + "," + y + ")";
        case Line(Point s, Point e)                    -> "line from " + s + " to " + e;
        default                                        -> "other";
    };
}`
        },
        {
          heading: 'Sequenced Collections',
          content: [
            'A new family of collection interfaces that define an encounter order with first/last elements.',
            'New interfaces: <code>SequencedCollection</code>, <code>SequencedSet</code>, <code>SequencedMap</code>.',
            'Default methods: <code>addFirst</code>, <code>addLast</code>, <code>getFirst</code>, <code>getLast</code>, <code>removeFirst</code>, <code>removeLast</code>, <code>reversed</code>.',
            'Reversed view returns a live view — modifications to the reverse view reflect in the original.'
          ],
          code: `// List implements SequencedCollection
List<String> list = new ArrayList<>(List.of("a", "b", "c"));

list.getFirst();   // "a"
list.getLast();    // "c"
list.addFirst("z");
list.addLast("d");
list.removeFirst();  // removes "z"
list.removeLast();   // removes "d"

List<String> reversed = list.reversed();
reversed.forEach(System.out::println);  // c, b, a

// LinkedHashSet implements SequencedSet
Set<Integer> seqSet = new LinkedHashSet<>(List.of(3, 1, 4, 1, 5));
seqSet.getFirst();  // 3 (insertion order)
seqSet.getLast();   // 5

// LinkedHashMap implements SequencedMap
SequencedMap<String, Integer> map = new LinkedHashMap<>();
map.put("one", 1);
map.put("two", 2);
map.put("three", 3);
map.firstEntry();   // one=1
map.lastEntry();    // three=3
map.reversed().forEach((k, v) -> System.out.println(k + "=" + v));`
        },
        {
          heading: 'String Templates (Preview)',
          content: [
            'A new way to embed expressions inside string literals.',
            'Uses template processors — built-in <code>STR</code>, <code>FMT</code>, and <code>RAW</code>, plus custom processors.',
            'Solves the long-standing ugliness of string concatenation, <code>String.format</code>, and <code>StringBuilder</code>.',
            'Currently in preview — requires <code>--enable-preview</code> and possibly <code>--source 21</code>.',
            'NOTE: This feature was withdrawn from Java 21 before release. It will likely return in a future version with refinements. Check the current status before relying on it.'
          ],
          code: `// Note: String templates were withdrawn from the final Java 21 release.
// The syntax shown here reflects the pre-withdrawal preview.

// Basic — STR template
String name = "Sudhakar";
int age = 30;
String greeting = STR."Hello, {name}! You are {age} years old.";
// Result: "Hello, Sudhakar! You are 30 years old."

// Arithmetic in templates
int x = 10, y = 20;
String sum = STR."{x} + {y} = {x + y}";

// FMT — formatted (like String.format)
String formatted = FMT."%.2f{Math.PI}";   // "3.14"

// Multi-line
String multi = STR."""
        Name: {name}
        Age:  {age}
        """;

// Custom processor
interface JsonProcessor {
    String STR."""{"name": "{name}", "age": {age}}""";
}`
        },
        {
          heading: 'Unnamed Patterns and Variables (Preview)',
          content: [
            'The underscore <code>_</code> can now be used for unused parameters, pattern variables, and exception variables.',
            `Replaces the previous meaning of <code>_</code> as a "do not care" identifier (which was just a normal variable name).`,
            'Enables cleaner code where you do not need the value but the syntax requires a name.'
          ],
          code: `// Catch with unused exception
try {
    Files.readString(Path.of("file.txt"));
} catch (IOException _) {       // ignore the exception
    System.out.println("File not found");
}

// Unused lambda parameter
list.forEach(_ -> System.out.println("called"));

// Unused pattern variable
if (obj instanceof Point _) {   // we just want to know it's a Point
    System.out.println("Got a point");
}

// Unused record component
if (obj instanceof Line(Point _, Point end)) {
    System.out.println("End at " + end);
}

// Unused loop variable
for (var _ : items) {
    count++;
}`
        },
        {
          heading: 'Structured Concurrency and Scoped Values (Incubator)',
          content: [
            '<strong>Structured concurrency</strong> (incubator) — treat a group of related tasks as a single unit of work. If any task fails, others are cancelled.',
            'Uses <code>StructuredTaskScope</code> to spawn subtasks and wait for them collectively.',
            'Replaces ad-hoc thread management with a structured approach (similar to goroutines, Kotlin coroutines, etc.).',
            '<strong>Scoped values</strong> (incubator) — immutable values scoped to a thread or virtual thread, used like ThreadLocal but with better semantics for virtual threads.',
            'Both are incubator APIs in Java 21 — may change before being standardized.'
          ],
          code: `// Structured concurrency example
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<User> userTask = scope.fork(() -> fetchUser(id));
    Subtask<List<Order>> ordersTask = scope.fork(() -> fetchOrders(id));
    
    scope.join();           // wait for both
    scope.throwIfFailed();  // propagate any failure
    
    User user = userTask.get();
    List<Order> orders = ordersTask.get();
    return new Profile(user, orders);
}  // All subtasks are joined or cancelled here

// Scoped value
static final ScopedValue<UserContext> CURRENT_USER = ScopedValue.newInstance();

ScopedValue.where(CURRENT_USER, new UserContext("sudhakar"))
    .run(() -> {
        UserContext ctx = CURRENT_USER.get();
        System.out.println("User: " + ctx.name());
    });`
        },
        {
          heading: 'Other Java 21 Features',
          content: [
            'Other notable features:',
            '<ul>',
            '<li><strong>Generational ZGC</strong> — improves ZGC performance by separating young and old generations</li>',
            '<li><strong>JEP 451: Prepare to Disallow the Dynamic Loading of Agents</strong> — future versions will disallow dynamic agent loading by default</li>',
            '<li><strong>Key Encapsulation Mechanism API</strong> — quantum-resistant key exchange</li>',
            '<li><strong>Foreign Function & Memory API (preview)</strong> — third preview, improving JNI replacement</li>',
            '<li><strong>Pattern matching for switch (final)</strong> — see dedicated section above</li>',
            '<li><strong>Removed RMI Activation</strong> — the RMI activation mechanism has been removed</li>',
            '</ul>'
          ]
        },
        {
          heading: 'Try it Yourself',
          content: [
            'Exercises for Java 21:',
            '<ol>',
            '<li>Spawn 100,000 virtual threads and verify they all complete successfully.</li>',
            '<li>Define a sealed interface <code>Vehicle</code> with permitted records and exhaustively match on it with pattern switch.</li>',
            '<li>Destructure a nested record pattern in an instanceof check.</li>',
            '<li>Use <code>getFirst()</code> and <code>reversed()</code> on a <code>LinkedHashSet</code>.</li>',
            '<li>Use <code>_</code> as an unused pattern variable in a switch.</li>',
            '<li>Enable preview features and try the (withdrawn) string template syntax in a test file.</li>',
            '</ol>'
          ]
        }
      ]
    },

};

const javaModule6Content = {
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
            `<table border="1"><tr><th>Area</th><th>Purpose</th></tr><tr><td><strong>Heap</strong></td><td>Stores all objects and arrays. Shared by all threads.</td></tr><tr><td><strong>Stack</strong></td><td>Stores local variables and method call frames. Each thread has its own stack.</td></tr><tr><td><strong>Method Area</strong></td><td>Stores class definitions, static variables, and method code.</td></tr><tr><td><strong>PC Register</strong></td><td>Tracks the current instruction for each thread.</td></tr></table>`,
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
          "heading": "JRE, JDK, and JVM — What’s the Difference?",
          "content": [
            "Three acronyms get confused constantly: <strong>JVM</strong>, <strong>JRE</strong>, and <strong>JDK</strong>. Each one is a distinct thing, and they sit in a clear hierarchy.",
            "<strong>JVM (Java Virtual Machine)</strong> is the <em>runtime engine</em> — the program that loads <code>.class</code> files, verifies bytecode, and executes it. It is what actually <em>runs</em> your Java program. The JVM alone is just an abstract specification; the concrete implementation is the HotSpot JVM (OpenJDK), Eclipse OpenJ9, GraalVM, etc.",
            "<strong>JRE (Java Runtime Environment)</strong> is the <em>runtime bundle</em> a user needs to run a Java application. It contains the JVM plus the standard library (<code>rt.jar</code> / <code>java.base</code> module with <code>java.lang</code>, <code>java.util</code>, <code>java.io</code>, <code>java.net</code>, etc.) and supporting files (timezone data, character converters, fonts). If you only want to <em>run</em> a Java app, you need the JRE.",
            "<strong>JDK (Java Development Kit)</strong> is the <em>developer bundle</em>. It contains the JRE <em>plus</em> everything you need to <em>write and compile</em> Java: the <code>javac</code> compiler, the <code>jdb</code> debugger, <code>javadoc</code>, <code>jar</code>, <code>jlink</code>, <code>jpackage</code>, and the source code of the standard library (<code>src.zip</code>). If you are a Java developer, you need the JDK.",
            "The relationship is strictly hierarchical: <strong>JDK ⊃ JRE ⊃ JVM</strong>. The JDK includes the JRE; the JRE includes the JVM. The JVM is the smallest piece and sits at the bottom.",
            "<table border=\"1\"><tr><th>Component</th><th>What it contains</th><th>Who needs it</th></tr><tr><td><strong>JVM</strong></td><td>The execution engine (class loader, bytecode verifier, interpreter, JIT, GC, runtime data areas)</td><td>Everyone running Java code</td></tr><tr><td><strong>JRE</strong></td><td>JVM + standard library (<code>java.base</code>, <code>java.sql</code>, etc.) + supporting files</td><td>End users running Java apps</td></tr><tr><td><strong>JDK</strong></td><td>JRE + <code>javac</code>, <code>jdb</code>, <code>javadoc</code>, <code>jar</code>, <code>jlink</code>, <code>jpackage</code>, src.zip</td><td>Java developers</td></tr></table>",
            "<strong>Why this matters in practice</strong><ul><li><strong>Servers and CI pipelines</strong> — production servers that only <em>run</em> a Java app can install just the JRE (smaller image, fewer CVEs). Modern container images like <code>eclipse-temurin:17-jre</code> are based on this distinction.</li><li><strong>Developer machines</strong> — you install the JDK, which gives you everything.</li><li><strong>Cross-compilation</strong> — you can use a JDK 17 to compile code targeting Java 11 bytecode (<code>javac --release 11</code>), and that compiled code will run on a Java 11+ JRE.</li><li><strong>JRE was removed in Java 11</strong> for end users — there is no public standalone JRE download anymore. You either install the JDK, or you use <code>jlink</code> to build a custom minimal runtime that contains only the modules your app needs.</li><li><strong>jlink</strong> — a JDK tool that produces a stripped-down, custom JRE containing just the JVM and the modules your application actually uses. This is how modern Java apps ship lean Docker images.</li></ul>",
            "<strong>How to check what you have installed</strong>",
            "<code>java -version</code> shows the installed JRE/JVM version. <code>javac -version</code> shows the installed JDK compiler version. If <code>javac</code> works, you have a JDK; if not, you have only a JRE."
          ],
          "code": "# Check what is installed on your system\n\n# Linux / macOS\njava -version        # JRE/JVM version (also works on Windows)\njavac -version       # JDK compiler version\n\n# Windows (Command Prompt)\njava -version\njavac -version\n\n# What you will see:\n#   java -version\n#   openjdk version \"17.0.10\" 2024-01-16\n#   OpenJDK Runtime Environment (build 17.0.10+7)\n#   OpenJDK 64-Bit Server VM (build 17.0.10+7, mixed mode, sharing)\n#\n#   javac -version\n#   javac 17.0.10\n#\n# If javac is not found, you only have a JRE installed.\n\n# Inside a Docker container, prefer the JRE image for production:\n# FROM eclipse-temurin:17-jre     # ~180MB\n# vs\n# FROM eclipse-temurin:17-jdk     # ~400MB\n\n# Build a custom minimal runtime with jlink (JDK 9+):\n# This produces a stripped-down JRE containing only the modules\n# your app needs — can be as small as 30-50MB.\njlink \\\n  --module-path \"$JAVA_HOME/jmods\" \\\n  --add-modules java.base,java.sql,java.naming,java.logging \\\n  --output custom-runtime \\\n  --strip-debug \\\n  --no-man-pages \\\n  --compress=2"
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
  'garbage-collection': {
      title: 'Garbage Collection',
      sections: [
        {
          heading: 'What is Garbage Collection?',
          content: [
            'In Java, you do not manually destroy objects.',
            'The <strong>Garbage Collector (GC)</strong> is a JVM component that automatically reclaims memory from objects that are no longer reachable (no references pointing to them).',
            "This eliminates memory leaks caused by forgetting to free memory — one of Java's key selling points."
          ]
        },
        {
          heading: 'How Garbage Collection Works',
          content: [
            'The GC uses a root-tracing algorithm:',
            `<ol><li>It starts from "root" references (local variables, static fields, active threads).</li><li>It traces all objects reachable from roots — these are <strong>live</strong>.</li><li>Any object <strong>not reachable</strong> from any root is eligible for garbage collection.</li><li>The GC reclaims memory from unreachable objects.</li></ol>`,
            'You cannot force garbage collection, but you can <strong>suggest</strong> it:',
            '<code>System.gc();</code> — requests GC (JVM may or may not honor it).',
            '<strong>Key terms:</strong>',
            '<ul><li><strong>Eligible for GC:</strong> object has no references to it</li><li><strong>finalize():</strong> called by GC before destroying an object (deprecated since Java 9, avoid using it)</li><li><strong>Island of isolation:</strong> group of objects referencing each other but not reachable from roots — still eligible for GC</li></ul>'
          ],
          code: `public class GCDemo {
    public static void main(String[] args) {
        // Create objects
        GCDemo obj1 = new GCDemo();
        GCDemo obj2 = new GCDemo();
        
        // Make obj1 unreachable
        obj1 = null;
        // Now the first object is eligible for GC
        
        // Request GC (JVM may ignore this)
        System.gc();
        
        System.out.println("End of main");
    }
    
    @Override
    protected void finalize() {
        // Called by GC before destruction
        System.out.println("Object is being garbage collected");
    }
}`
        },
        {
          heading: 'Object Reachability',
          content: [
            '<strong>Ways an object becomes eligible for GC:</strong>',
            '<ul><li>The reference is set to <code>null</code>: <code>obj = null;</code></li><li>The reference is reassigned: <code>obj = new Object();</code> (old object lost)</li><li>The reference goes out of scope (local variable in a method)</li><li>Island of isolation: objects only reference each other, no external references</li></ul>'
          ]
        },
        {
          heading: 'Introduction to Garbage Collection',
          content: [
            'In C++, the programmer is responsible for <strong>both creation and destruction</strong> of objects, but most programmers focus on creation and ignore destruction. This can cause memory shortages and program failures. In Java, the programmer is only responsible for creating objects — the JVM runs an <strong>assistant in the background</strong> that handles object destruction. This assistant is the <strong>Garbage Collector</strong>.',
            'GC makes memory failures due to leaks extremely rare in well-behaved programs.'
          ]
        },
        {
          heading: 'How to Make an Object Eligible for GC',
          content: [
            'Even though the programmer is not responsible for destruction, it is good practice to make an object eligible for GC when it is no longer required.'
          ],
          code: `// 1) Nullifying the reference variable
Student s1 = new Student();
Student s2 = new Student();
// At this point, no object is eligible for GC
s1 = null;
// Now ONE object is eligible for GC
s2 = null;
// Now BOTH objects are eligible for GC

// 2) Reassigning the reference variable
Student s1 = new Student();
Student s2 = new Student();
s1 = s2;   // the first object is now eligible for GC

// 3) Objects created inside a method
// These are by default eligible for GC once the method completes.
public static void m1() {
    Student s1 = new Student();
    Student s2 = new Student();
}   // both objects eligible for GC after m1() returns

// 4) Island of Isolation
// Group of objects referencing each other but not reachable from any live reference.
class Test {
    Test i;
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
        Test t3 = new Test();
        t1.i = t2;
        t2.i = t3;
        t3.i = t1;
        // None eligible yet — all reachable
        t1 = null;
        // Still none eligible
        t2 = null;
        // Still none eligible
        t3 = null;
        // Now ALL three are eligible — the island of isolation is collectable
    }
}`
        },
        {
          heading: 'Methods to Request JVM to Run GC',
          content: [
            'You can <strong>request</strong> the JVM to run the GC, but there is <strong>no guarantee</strong> it will honor the request. There are two ways:'
          ],
          code: `// 1) Using System class — static method
System.gc();

// 2) Using Runtime class — instance method
Runtime r = Runtime.getRuntime();
r.gc();
r.freeMemory();    // free memory in the heap
r.totalMemory();   // total heap size

// Note: gc() in System is static, but gc() in Runtime is an instance method.
// Hence Runtime.gc() is invalid (gc is not static in Runtime).

import java.util.*;
class RuntimeDemo {
    public static void main(String[] args) {
        Runtime r = Runtime.getRuntime();
        System.out.println(r.totalMemory());   // e.g., 2031616
        System.out.println(r.freeMemory());    // e.g., 1870416
        for (int i = 0; i <= 10000; i++) {
            Date d = new Date();
            d = null;
        }
        System.out.println(r.freeMemory());    // less (memory used)
        r.gc();
        System.out.println(r.freeMemory());    // more (memory reclaimed)
    }
}`
        },
        {
          heading: 'finalize() Method — Cleanup Before Destruction',
          content: [
            'Just before destroying any object, the Garbage Collector always calls <code>finalize()</code> to perform clean-up activities.',
            '<code>finalize()</code> is declared in <code>java.lang.Object</code> as <code>protected void finalize() throws Throwable</code>.'
          ],
          code: `// Case 1: GC calls finalize() on the object that is eligible.
class Test {
    public static void main(String[] args) {
        String s = new String("raju");
        s = null;
        System.gc();
        System.out.println("end of main method");
    }
    public void finalize() {
        System.out.println("finalize method called");
    }
}
// Output: "end of main method"
// String object is eligible — so String class' finalize() runs (not Test's).
// If you replace String with Test, then Test's finalize() will run instead.

// Case 2: Calling finalize() explicitly — it executes like a normal method,
//         and the object is NOT destroyed.
// If an uncaught exception occurs while GC is calling finalize(), JVM ignores it.
// If the exception occurs during an explicit call, the program terminates abnormally.
class Test2 {
    public static void main(String[] args) {
        Test2 s = new Test2();
        s = null;
        System.gc();
        System.out.println("End of main method");
    }
    public void finalize() {
        System.out.println("finalize method");
        System.out.println(10 / 0);   // uncaught exception
    }
}
// Output: "finalize method" then "End of main method" (exception is ignored by GC)`
        },
        {
          heading: 'Three Important Cases of finalize()',
          content: [
            "<strong>Case 1:</strong> GC calls <code>finalize()</code> only on the object that is eligible. The corresponding class's <code>finalize</code> method is executed.",
            '<strong>Case 2:</strong> You can call <code>finalize()</code> explicitly. In that case it executes like a normal method, and the object is <strong>not</strong> destroyed. While GC is executing <code>finalize()</code>, any uncaught exception is <strong>ignored by the JVM</strong>. If you call <code>finalize()</code> explicitly and an exception is uncaught, the program terminates abnormally.',
            '<strong>Case 3:</strong>',
            '<ol><li>GC calls <code>finalize()</code> only <strong>once</strong> on any object — it will not call it more than once.</li><li>While executing <code>finalize()</code>, if the object regains a reference, the GC will <strong>not</strong> destroy the object after <code>finalize()</code> completes.</li><li>If the same object is eligible for GC a second time without <code>finalize()</code> executing again, the GC will destroy it without calling <code>finalize()</code>.</li></ol>'
          ],
          code: `class FinalizeDemo {
    static FinalizeDemo s;
    public static void main(String[] args) throws Exception {
        FinalizeDemo f = new FinalizeDemo();
        System.out.println(f.hashCode());
        f = null;
        System.gc();
        Thread.sleep(5000);
        System.out.println(s.hashCode());   // regains reference inside finalize
        s = null;
        System.gc();
        Thread.sleep(5000);
        System.out.println("End of main method");
    }
    public void finalize() {
        System.out.println("finalize method called");
        s = this;   // object regains a reference — will NOT be destroyed this time
    }
}`
        },
        {
          heading: 'GC Behavior is Vendor-Dependent',
          content: [
            'The behavior of the GC is <strong>vendor-dependent</strong>. There is no guarantee for any of the following:',
            '<ul><li>Whether the GC follows the <em>mark and sweep</em> algorithm or not.</li><li>What exact algorithm the GC follows.</li><li>In which order the GC destroys objects.</li><li>Whether the GC destroys all eligible objects.</li><li>At what exact time the GC will run.</li></ul>',
            'Because of this, programs should <strong>not</strong> rely on GC timing or order. Use <code>System.gc()</code> only as a hint.'
          ]
        },
        {
          heading: 'GC Summary Diagram — Common Eligibility Scenarios',
          content: [
            'Reference for the most common patterns of object eligibility:'
          ],
          table: {
            headers: [
              'Scenario',
              'Action',
              'Eligible Objects'
            ],
            rows: [
              [
                'Nullifying reference',
                's1 = null; s2 = null;',
                'Both objects'
              ],
              [
                'Reassigning reference',
                's1 = s2;',
                'First object (lost)'
              ],
              [
                'Objects inside method',
                'm1() returns',
                'All objects created in m1'
              ],
              [
                'Method returns object',
                'Student s = m1();',
                'Internal object not returned'
              ],
              [
                'Island of Isolation',
                't1=t2=t3=null after cycle',
                'All three objects'
              ]
            ]
          }
        }
      ]
    },
  'build-tools': {
    "title": "Build Tools (Maven & Gradle)",
    "sections": [
      {
        "heading": "What are Build Tools?",
        "content": [
          "A <strong>build tool</strong> automates compiling, testing, packaging, and distributing your Java code.",
          "As projects grow, manually running <code>javac</code>, then tests, then assembling JARs becomes impractical.",
          "Modern build tools handle this declaratively:",
          "<ul>",
          "<li><strong>Compilation</strong> — incremental Java compilation</li>",
          "<li><strong>Dependency management</strong> — download, version, and resolve external libraries transitively</li>",
          "<li><strong>Test execution</strong> — run unit, integration, and end-to-end tests</li>",
          "<li><strong>Packaging</strong> — produce JARs, WARs, fat JARs, native images</li>",
          "<li><strong>Distribution</strong> — upload artifacts to repositories (Maven Central, Nexus, Artifactory)</li>",
          "<li><strong>Reproducibility</strong> — anyone can build the project identically</li>",
          "</ul>",
          "<strong>Popular Java build tools:</strong>",
          "<ul>",
          "<li><strong>Maven</strong> — XML configuration (pom.xml), convention over configuration. Enterprise standard.</li>",
          "<li><strong>Gradle</strong> — Groovy/Kotlin DSL, flexible and fast. Default for Android, popular for Spring Boot.</li>",
          "<li><strong>Ant</strong> — older, XML-based, imperative. Legacy projects.</li>",
          "</ul>",
          "We go deep on <strong>Maven</strong>, then compare with <strong>Gradle</strong>."
        ]
      },
      {
        "heading": "Introduction to Maven",
        "content": [
          "<strong>Maven</strong> simplifies Java project management through an opinionated model.",
          "Maven uses a <code>pom.xml</code> — the <strong>Project Object Model</strong> — to declaratively define structure, dependencies, plugins, and build steps.",
          "It follows <strong>convention over configuration</strong> — Maven assumes standard folders so you do not specify everything manually.",
          "<strong>Standard Maven directory structure:</strong>",
          "<ul>",
          "<li><code>src/main/java</code> — Java source code</li>",
          "<li><code>src/main/resources</code> — configuration files</li>",
          "<li><code>src/test/java</code> — test source code</li>",
          "<li><code>target/</code> — generated output (compiled classes, JARs). Safe to delete.</li>",
          "</ul>",
          "The minimum pom.xml needs is the three <em>coordinates</em>: <strong>groupId</strong>, <strong>artifactId</strong>, <strong>version</strong>."
        ],
        "code": "<!-- pom.xml — minimal Maven project -->\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n                             http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>my-first-app</artifactId>\n    <version>1.0.0</version>\n\n    <properties>\n        <maven.compiler.source>17</maven.compiler.source>\n        <maven.compiler.target>17</maven.compiler.target>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.commons</groupId>\n            <artifactId>commons-lang3</artifactId>\n            <version>3.14.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter</artifactId>\n            <version>5.10.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>"
      },
      {
        "heading": "Common Maven Commands",
        "content": [
          "Maven commands map to <strong>phases</strong> in the build lifecycle:",
          "<table border=\"1\"><tr><th>Command</th><th>What it does</th></tr>",
          "<tr><td><code>mvn compile</code></td><td>Compiles main source to target/classes</td></tr>",
          "<tr><td><code>mvn test</code></td><td>Runs all unit tests</td></tr>",
          "<tr><td><code>mvn package</code></td><td>Compiles, tests, packages into JAR/WAR</td></tr>",
          "<tr><td><code>mvn install</code></td><td>Packages + installs to local repo (~/.m2/repository)</td></tr>",
          "<tr><td><code>mvn clean</code></td><td>Deletes target/ directory</td></tr>",
          "<tr><td><code>mvn clean package</code></td><td>Clean rebuild — most common combo</td></tr>",
          "<tr><td><code>mvn -pl module-a -am package</code></td><td>Build module-a and its dependencies</td></tr>",
          "<tr><td><code>mvn -DskipTests package</code></td><td>Build but skip tests (use sparingly!)</td></tr>",
          "</table>"
        ],
        "code": "// Example: src/main/java/com/example/App.java\npackage com.example;\n\nimport org.apache.commons.lang3.StringUtils;\n\npublic class App {\n    public static void main(String[] args) {\n        String greeting = StringUtils.reverse(\"Hello Maven!\");\n        System.out.println(greeting);\n    }\n}\n\n// Terminal workflow:\n// mvn compile      → compiles code\n// mvn test         → runs tests\n// mvn package      → creates JAR in target/\n// java -jar target/my-first-app-1.0.0.jar"
      },
      {
        "heading": "The Maven Build Lifecycle",
        "content": [
          "A <strong>lifecycle</strong> is an ordered sequence of <strong>phases</strong>. Running a phase executes all prior phases too.",
          "Maven has <strong>three lifecycles</strong>: default (main build), clean, and site.",
          "The <strong>default lifecycle</strong> has 23 phases. Key ones:",
          "<ul>",
          "<li><code>validate</code> — check project is correct</li>",
          "<li><code>compile</code> — compile main source</li>",
          "<li><code>test-compile</code> — compile tests</li>",
          "<li><code>test</code> — run unit tests (via maven-surefire-plugin)</li>",
          "<li><code>package</code> — bundle into JAR/WAR</li>",
          "<li><code>integration-test</code> — run integration tests (via maven-failsafe-plugin)</li>",
          "<li><code>verify</code> — verify package is valid</li>",
          "<li><code>install</code> — install to local repo</li>",
          "<li><code>deploy</code> — upload to remote repo</li>",
          "</ul>",
          "A <strong>goal</strong> is a specific task by a plugin. Each phase binds to zero or more goals. Running <code>mvn package</code> executes all goals bound to package and all prior phases."
        ],
        "code": "<!-- How a phase binds to a plugin goal: -->\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-jar-plugin</artifactId>\n            <version>3.4.1</version>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals><goal>jar</goal></goals>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n\n# Run a specific goal directly:\n# mvn compiler:compile    → runs ONLY compile goal\n# mvn jar:jar             → runs ONLY jar goal\n\n# See what plugins are bound:\n# mvn help:effective-pom\n# mvn dependency:tree"
      },
      {
        "heading": "POM in Depth",
        "content": [
          "The pom.xml is the heart of Maven. Beyond basic GAV coordinates:",
          "<strong>Super POM and Effective POM</strong>",
          "<ul>",
          "<li>Every pom.xml inherits from a <strong>Super POM</strong> — defaults bundled in Maven.</li>",
          "<li>The <strong>effective POM</strong> merges your POM, parent(s), and Super POM. Use <code>mvn help:effective-pom</code> to inspect it.</li>",
          "</ul>",
          "<strong>Inheritance vs Aggregation</strong>",
          "<ul>",
          "<li><strong>Inheritance</strong> — child inherits config from parent via &lt;parent&gt; block.</li>",
          "<li><strong>Aggregation</strong> — parent lists child modules via &lt;modules&gt; for multi-module builds.</li>",
          "</ul>",
          "<strong>Common POM elements</strong>",
          "<ul>",
          "<li><code>&lt;properties&gt;</code> — named constants referenced as ${prop.name}</li>",
          "<li><code>&lt;dependencyManagement&gt;</code> — pin versions for all children</li>",
          "<li><code>&lt;pluginManagement&gt;</code> — same for plugins</li>",
          "<li><code>&lt;build&gt;</code> — build defaults (finalName, plugins)</li>",
          "</ul>"
        ],
        "code": "<!-- Child POM inheriting from parent -->\n<project>\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>com.example.parent</groupId>\n        <artifactId>my-parent-pom</artifactId>\n        <version>1.5.0</version>\n    </parent>\n    <artifactId>my-service</artifactId>\n    <!-- groupId and version inherited from parent -->\n    <dependencies>\n        <dependency>\n            <groupId>com.fasterxml.jackson.core</groupId>\n            <artifactId>jackson-databind</artifactId>\n            <!-- version from parent dependencyManagement -->\n        </dependency>\n    </dependencies>\n</project>"
      },
      {
        "heading": "Maven Dependency Management",
        "content": [
          "<strong>The 6 dependency scopes</strong>",
          "<ul>",
          "<li><strong>compile</strong> (default) — compile, test, runtime classpaths, and in packaged artifact.</li>",
          "<li><strong>provided</strong> — compile and test only; runtime container provides it (e.g., servlet API). NOT in JAR.</li>",
          "<li><strong>runtime</strong> — runtime only (e.g., JDBC driver implementation).</li>",
          "<li><strong>test</strong> — test classpath only (JUnit, Mockito).</li>",
          "<li><strong>system</strong> — like provided but with explicit JAR path. Avoid.</li>",
          "<li><strong>import</strong> — only in dependencyManagement to import a BOM.</li>",
          "</ul>",
          "<strong>Transitive dependencies</strong>",
          "When you depend on library A, you get A's dependencies too. Maven resolves the entire tree.",
          "<strong>Version conflict resolution</strong>",
          "When two deps want different versions of the same library, <strong>\"nearest wins\"</strong>. Use <code>&lt;dependencyManagement&gt;</code> to override.",
          "<strong>Exclusions</strong>",
          "Use <code>&lt;exclusions&gt;</code> to block unwanted transitive deps."
        ],
        "code": "<!-- Dependency with exclusions -->\n<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-core</artifactId>\n    <version>6.1.5</version>\n    <exclusions>\n        <exclusion>\n            <groupId>commons-logging</groupId>\n            <artifactId>commons-logging</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n# Inspect dependency tree:\n# mvn dependency:tree\n# mvn dependency:tree -Dincludes=commons-logging\n\n# Detect unused deps:\n# mvn dependency:analyze"
      },
      {
        "heading": "Maven Repositories",
        "content": [
          "Maven stores artifacts in <strong>repositories</strong>:",
          "<ul>",
          "<li><strong>Local</strong> — ~/.m2/repository, cache on your machine.</li>",
          "<li><strong>Remote</strong> — servers like Maven Central (repo.maven.apache.org).</li>",
          "</ul>",
          "Maven searches local first, then remotes. Downloaded artifacts are cached locally.",
          "<strong>Mirrors</strong>",
          "A <strong>mirror</strong> in settings.xml redirects all requests to a different URL. Corporate shops use mirrors to route through internal Nexus/Artifactory.",
          "<strong>Repository types</strong>",
          "<ul>",
          "<li><strong>Release</strong> — immutable versions (1.4.2).</li>",
          "<li><strong>Snapshot</strong> — mutable versions (1.5.0-SNAPSHOT). Re-checked periodically.</li>",
          "</ul>"
        ],
        "code": "<!-- ~/.m2/settings.xml — repo config -->\n<settings>\n    <mirrors>\n        <mirror>\n            <id>company-nexus</id>\n            <url>https://nexus.company.internal/maven-central/</url>\n            <mirrorOf>central</mirrorOf>\n        </mirror>\n    </mirrors>\n    <servers>\n        <server>\n            <id>company-releases</id>\n            <username>${env.NEXUS_USER}</username>\n            <password>${env.NEXUS_PASSWORD}</password>\n        </server>\n    </servers>\n</settings>\n\n# Download all deps for offline:\n# mvn dependency:go-offline"
      },
      {
        "heading": "Maven Plugins",
        "content": [
          "<strong>Plugins are where Maven does its work.</strong> Every action is a <strong>goal</strong> of some plugin.",
          "<strong>Plugins you use constantly</strong>",
          "<ul>",
          "<li><strong>maven-compiler-plugin</strong> — compiles Java. Use &lt;release&gt;17&lt;/release&gt;.</li>",
          "<li><strong>maven-surefire-plugin</strong> — runs unit tests (*Test.java).</li>",
          "<li><strong>maven-failsafe-plugin</strong> — runs integration tests (*IT.java).</li>",
          "<li><strong>maven-jar-plugin</strong> — produces JAR.</li>",
          "<li><strong>maven-shade-plugin</strong> — produces fat JAR for java -jar.</li>",
          "<li><strong>maven-enforcer-plugin</strong> — fails build on rule violations (Java version, etc.).</li>",
          "</ul>"
        ],
        "code": "<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.13.0</version>\n            <configuration>\n                <release>17</release>\n            </configuration>\n        </plugin>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-plugin</artifactId>\n            <version>3.2.5</version>\n        </plugin>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <version>3.5.3</version>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals><goal>shade</goal></goals>\n                    <configuration>\n                        <transformers>\n                            <transformer implementation=\"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer\">\n                                <mainClass>com.example.App</mainClass>\n                            </transformer>\n                        </transformers>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>"
      },
      {
        "heading": "Maven Profiles",
        "content": [
          "<strong>Profiles</strong> customize builds for different environments (dev, test, prod).",
          "<strong>Activation methods</strong>",
          "<ul>",
          "<li><strong>Command line</strong>: mvn package -Pprod</li>",
          "<li><strong>Default active</strong>: &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;</li>",
          "<li><strong>By environment</strong>: JDK version, OS, system property, file presence</li>",
          "</ul>",
          "<strong>Common uses</strong>",
          "<ul>",
          "<li>Different database URLs in dev vs prod</li>",
          "<li>Extra source folders in dev</li>",
          "<li>Disabling optimizations in dev, enabling in prod</li>",
          "</ul>"
        ],
        "code": "<profiles>\n    <profile>\n        <id>dev</id>\n        <activation><activeByDefault>true</activeByDefault></activation>\n        <properties>\n            <env>dev</env>\n            <db.url>jdbc:h2:mem:devdb</db.url>\n        </properties>\n    </profile>\n    <profile>\n        <id>prod</id>\n        <properties>\n            <env>prod</env>\n            <db.url>jdbc:postgresql://prod-db:5432/app</db.url>\n        </properties>\n    </profile>\n</profiles>\n\n# Activate:\n# mvn package -Pprod\n# mvn help:active-profiles"
      },
      {
        "heading": "Multi-Module Projects",
        "content": [
          "Real applications are <strong>multi-module builds</strong>: a parent aggregating child modules.",
          "<strong>Why multi-module?</strong>",
          "<ul>",
          "<li>Logical separation (billing-api, billing-core, billing-web)</li>",
          "<li>Share dependencyManagement and plugin config</li>",
          "<li>Incremental builds — Maven reactor builds only changed modules</li>",
          "</ul>",
          "<strong>The Reactor</strong>",
          "Maven's reactor determines build order across modules. Running <code>mvn install</code> at root builds everything correctly.",
          "<strong>Layout</strong>",
          "Modules are sibling directories of the parent."
        ],
        "code": "# Directory layout:\nmy-app/\n  ├── pom.xml              (parent, packaging=pom)\n  ├── common/\n  ├── core/\n  ├── api/\n  └── it/\n\n# my-app/pom.xml — parent\n<project>\n    <groupId>com.example.myapp</groupId>\n    <artifactId>my-app-parent</artifactId>\n    <version>1.0.0</version>\n    <packaging>pom</packaging>\n    <modules>\n        <module>common</module>\n        <module>core</module>\n        <module>api</module>\n    </modules>\n</project>\n\n# Useful commands:\n# mvn install              (build all)\n# mvn -pl api -am install  (build api + deps)\n# mvn -T 1C install        (parallel, 1 thread/core)"
      },
      {
        "heading": "Maven Wrapper (mvnw)",
        "content": [
          "The <strong>Maven Wrapper</strong> (mvnw) downloads and runs a specific Maven version pinned in your repo.",
          "<strong>Why it matters</strong>",
          "<ul>",
          "<li>Reproducibility — everyone uses same Maven version</li>",
          "<li>Zero install — new devs run ./mvnw, no Maven install needed</li>",
          "<li>CI consistency — dev and CI use same Maven</li>",
          "</ul>",
          "Generated by <code>mvn wrapper:wrapper -Dmaven=3.9.6</code>. Commit mvnw, mvnw.cmd, and .mvn/wrapper/."
        ],
        "code": "# Install wrapper:\n# mvn wrapper:wrapper -Dmaven=3.9.6\n\n# Creates:\n# .mvn/wrapper/maven-wrapper.properties\n# .mvn/wrapper/maven-wrapper.jar\n# mvnw (Unix), mvnw.cmd (Windows)\n\n# Usage:\n# ./mvnw clean install\n# ./mvnw test\n\n# Commit these:\n# git add .mvn mvnw mvnw.cmd"
      },
      {
        "heading": "Build Performance",
        "content": [
          "<strong>1. Parallel builds</strong>",
          "<code>mvn -T 1C install</code> — one thread per CPU core.",
          "<strong>2. Incremental compilation</strong>",
          "maven-compiler-plugin only recompiles changed files (default). Do not disable.",
          "<strong>3. Skip unneeded work</strong>",
          "<ul>",
          "<li>mvn -DskipTests package — skip tests</li>",
          "<li>mvn -Dmaven.javadoc.skip=true — skip Javadoc</li>",
          "<li>mvn -pl module -am install — build one module</li>",
          "</ul>",
          "<strong>4. Offline mode</strong>",
          "<code>mvn -o install</code> — use local repo only.",
          "<strong>5. Local repo on SSD</strong>",
          "Put ~/.m2 on fast storage."
        ],
        "code": "# Performance cheatsheet:\n# mvn -T 1C clean install    (parallel)\n# mvn -DskipTests package    (skip tests)\n# mvn -pl :api -am package   (one module)\n# mvn -o install             (offline)\n# mvn dependency:go-offline  (prep for offline)"
      },
      {
        "heading": "Introduction to Gradle",
        "content": [
          "<strong>Gradle</strong> uses Groovy or Kotlin DSL scripts. Default for Android, popular for Spring Boot.",
          "Gradle's philosophy: convention over configuration with flexibility.",
          "A Gradle project has build.gradle (Groovy) or build.gradle.kts (Kotlin), and settings.gradle for modules."
        ],
        "code": "// settings.gradle\nrootProject.name = 'my-gradle-app'\n\n// build.gradle\nplugins {\n    id 'java'\n    id 'application'\n}\njava {\n    sourceCompatibility = JavaVersion.VERSION_17\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n    implementation 'org.apache.commons:commons-lang3:3.14.0'\n    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.2'\n}\napplication {\n    mainClass = 'com.example.App'\n}\ntest {\n    useJUnitPlatform()\n}"
      },
      {
        "heading": "Common Gradle Commands",
        "content": [
          "<table border=\"1\"><tr><th>Command</th><th>What it does</th></tr>",
          "<tr><td><code>./gradlew build</code></td><td>Full build: compile, test, package</td></tr>",
          "<tr><td><code>./gradlew test</code></td><td>Run tests</td></tr>",
          "<tr><td><code>./gradlew compileJava</code></td><td>Compile main source</td></tr>",
          "<tr><td><code>./gradlew run</code></td><td>Run main class</td></tr>",
          "<tr><td><code>./gradlew clean</code></td><td>Delete build/</td></tr>",
          "<tr><td><code>./gradlew tasks</code></td><td>List all tasks</td></tr>",
          "<tr><td><code>./gradlew dependencies</code></td><td>Show dependency tree</td></tr>",
          "</table>",
          "Use <code>./gradlew</code> (wrapper) instead of global gradle."
        ],
        "code": "// Terminal workflow:\n// ./gradlew compileJava\n// ./gradlew test\n// ./gradlew build\n// ./gradlew run\n// ./gradlew clean"
      },
      {
        "heading": "Maven vs Gradle — When to Choose",
        "content": [
          "<table border=\"1\"><tr><th>Dimension</th><th>Maven</th><th>Gradle</th></tr>",
          "<tr><td>Config language</td><td>XML (declarative)</td><td>Groovy/Kotlin (programmable)</td></tr>",
          "<tr><td>Learning curve</td><td>Steeper initial, then easy</td><td>Lower initial, then steep</td></tr>",
          "<tr><td>Incremental builds</td><td>Decent</td><td>Excellent</td></tr>",
          "<tr><td>Flexibility</td><td>Convention-bound</td><td>Highly flexible</td></tr>",
          "<tr><td>Ecosystem</td><td>Stable, conservative</td><td>Vast, rapid evolution</td></tr>",
          "<tr><td>Common use</td><td>Enterprise Java, Spring Boot</td><td>Android, Kotlin, new Spring</td></tr>",
          "</table>",
          "<strong>Pick Maven if</strong> you value stability and declarative config.",
          "<strong>Pick Gradle if</strong> you want faster incremental builds or are doing Android/Kotlin."
        ]
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Run <code>mvn help:describe -Dcmd=compile -Ddetail</code> — see which goals bind to which phases.</li>",
          "<li>Add spring-core 5.x and 6.x to dependencyManagement. Run <code>mvn dependency:tree</code> to see which wins.</li>",
          "<li>Create a <code>prod</code> profile that overrides database URL. Run <code>mvn -Pprod help:active-profiles</code>.</li>",
          "<li>Add maven-shade-plugin to build a fat JAR. Verify <code>java -jar target/*-shaded.jar</code> runs.</li>",
          "<li>Create a 3-module project (common, core, api). Run <code>mvn install</code> and watch reactor order.</li>",
          "<li>Run <code>mvn wrapper:wrapper -Dmaven=3.9.6</code>. Commit mvnw files.</li>",
          "<li>Time <code>mvn clean package</code> vs <code>mvn -T 1C clean package</code> on a multi-module project.</li>",
          "</ol>"
        ]
      }
    ]
  },

};


const javaModule7Content = {
  'java-jdbc-intro': {
      title: "JDBC Introduction & Architecture",
      sections: [
        {
          heading: "What is JDBC?",
          content: [
            '<strong>JDBC (Java Database Connectivity)</strong> is Java\'s standard API for connecting to relational databases.',
            "Defined under JSR-54, the API provides a set of classes and interfaces in <code>java.sql</code> and <code>javax.sql</code> packages.",
            "JDBC is a vendor-neutral abstraction — the same Java code works against MySQL, PostgreSQL, Oracle, SQL Server, or any other RDBMS that provides a JDBC driver.",
            "With JDBC, applications can:",
            "<ul><li>Establish a connection to a database</li><li>Execute SQL statements (DDL, DML, queries)</li><li>Retrieve and process result sets</li><li>Manage transactions and connection pooling</li><li>Inspect database metadata (tables, schemas, supported features)</li></ul>"
          ]
        },
        {
          heading: "JDBC Architecture",
          content: [
            "JDBC has a layered architecture with four key components:",
            "<ul><li><strong>Application</strong> — your Java code that calls the JDBC API</li><li><strong>JDBC API</strong> — <code>java.sql</code> / <code>javax.sql</code> interfaces (Connection, Statement, ResultSet, DataSource)</li><li><strong>JDBC Driver Manager / DataSource</strong> — chooses the right driver for the JDBC URL</li><li><strong>JDBC Driver</strong> — vendor-specific implementation that translates JDBC calls into database-native protocol</li></ul>",
            "Different drivers handle the database communication differently. The JDBC API stays the same — only the driver changes."
          ]
        },
        {
          heading: "JDBC Driver Types",
          content: [
            "There are four driver types, classified by how they communicate with the database:",
            "<ul>",
            "<li><strong>Type 1 — JDBC-ODBC Bridge</strong>: Translates JDBC to ODBC, then ODBC talks to the DB. Requires ODBC driver installed. Removed from JDK 8+.</li>",
            "<li><strong>Type 2 — Native-API Driver</strong>: Converts JDBC calls to database-specific native calls (e.g., Oracle OCI). Requires native library on the client.</li>",
            "<li><strong>Type 3 — Network Protocol Driver</strong>: Sends JDBC calls to a middleware server, which then talks to the DB. No native code on the client.</li>",
            "<li><strong>Type 4 — Thin Driver (Pure Java)</strong>: Converts JDBC calls directly to the database-specific network protocol. Pure Java, portable, no native code. Most modern drivers are Type 4.</li>",
            "</ul>",
            "In practice, you should always choose a <strong>Type 4 driver</strong> for new projects."
          ]
        },
        {
          heading: "JDBC URL Format",
          content: [
            "Every database has a JDBC URL that the driver uses to connect.",
            "The format is vendor-specific but follows the pattern <code>jdbc:&lt;subprotocol&gt;:&lt;subname&gt;</code>.",
            "Common JDBC URLs:"
          ],
          code: `// MySQL
"jdbc:mysql://hostname:3306/databaseName"

// MySQL with parameters
"jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC"

// PostgreSQL
"jdbc:postgresql://localhost:5432/mydb"

// Oracle (thin)
"jdbc:oracle:thin:@hostname:1521:sid"

// SQL Server
"jdbc:sqlserver://localhost:1433;databaseName=mydb"

// H2 (in-memory)
"jdbc:h2:mem:testdb"

// SQLite
"jdbc:sqlite:./mydb.db"`
        },
        {
          heading: "Core JDBC Classes and Interfaces",
          content: [
            "The most important types in <code>java.sql</code>:",
            "<ul>",
            "<li><code>DriverManager</code> — service for selecting a driver and creating connections (older approach)</li>",
            "<li><code>DataSource</code> — modern, JNDI-friendly alternative to <code>DriverManager</code></li>",
            "<li><code>Connection</code> — represents a session with a specific database</li>",
            "<li><code>Statement</code> — executes static SQL statements</li>",
            "<li><code>PreparedStatement</code> — precompiled SQL with bind parameters (recommended)</li>",
            "<li><code>CallableStatement</code> — invokes stored procedures</li>",
            "<li><code>ResultSet</code> — represents the result of a SELECT query</li>",
            "<li><code>ResultSetMetaData</code> — information about the columns in a ResultSet</li>",
            "<li><code>DatabaseMetaData</code> — information about the database itself</li>",
            "<li><code>SQLException</code> — checked exception for all database errors</li>",
            "</ul>"
          ]
        },
        {
          heading: "The Connection Lifecycle",
          content: [
            "A typical JDBC interaction follows this lifecycle:",
            "<ol>",
            "<li><strong>Load the driver</strong> (now automatic via SPI in modern drivers — JDBC 4.0+)</li>",
            "<li><strong>Open a connection</strong> with <code>DriverManager.getConnection()</code> or from a <code>DataSource</code></li>",
            "<li><strong>Create a statement</strong> (<code>Connection.createStatement()</code> or <code>prepareStatement()</code>)</li>",
            "<li><strong>Execute the statement</strong> — <code>executeQuery()</code> for SELECT, <code>executeUpdate()</code> for INSERT/UPDATE/DELETE, <code>execute()</code> for both</li>",
            "<li><strong>Process the ResultSet</strong> (for SELECT) or check the affected-row count (for DML)</li>",
            "<li><strong>Close the resources</strong> in reverse order: ResultSet → Statement → Connection. Use try-with-resources to do this automatically.</li>",
            "</ol>",
            "Failing to close connections leaks database resources and can quickly exhaust the connection pool."
          ]
        },
        {
          heading: "When to Use Raw JDBC vs ORM",
          content: [
            "JDBC is the foundation — JPA, Hibernate, MyBatis, and Spring Data all sit on top of it.",
            "Use raw JDBC when:",
            "<ul><li>You need full control over the SQL and execution plan</li><li>Performance is critical (no ORM overhead)</li><li>You are building a small utility or batch job</li><li>You are doing bulk operations that are awkward in ORM (mass updates, COPY)</li><li>You need stored-procedure calls with complex cursor/REF cursor handling</li></ul>",
            "Use an ORM (Hibernate/JPA) when:",
            "<ul><li>You have many CRUD-style operations on object graphs</li><li>You want database portability across vendors</li><li>You want automatic schema migrations and lazy loading</li><li>Application complexity is high and writing SQL for every operation is tedious</li></ul>",
            "Many real-world applications mix both — JDBC for hot paths and reporting, JPA for the bulk of CRUD."
          ]
        },
        {
          heading: "Try it Yourself",
          content: [
            "Setup tasks:",
            "<ol>",
            "<li>Install a database (e.g., PostgreSQL or MySQL — or use H2 for an in-memory zero-install option).</li>",
            '<li>Add the JDBC driver for your database to your project\'s classpath (via Maven/Gradle or JAR).</li>',
            "<li>Write a small program that opens a connection and prints the database version using <code>DatabaseMetaData.getDatabaseProductVersion()</code>.</li>",
            "<li>Identify the driver type (Type 1-4) for your database of choice and explain why.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-connections': {
      title: "Establishing Connections",
      sections: [
        {
          heading: "DriverManager vs DataSource",
          content: [
            "JDBC offers two primary ways to obtain a <code>Connection</code>:",
            "<ul>",
            "<li><strong>DriverManager</strong> — the original, pre-JDBC 4 approach. You call <code>DriverManager.getConnection(url, user, password)</code> and it picks a driver that recognizes the URL.</li>",
            "<li><strong>DataSource</strong> — the modern, recommended approach (since JDBC 2.0, formalized in JDBC 4). A DataSource is an object you look up (often via JNDI) that encapsulates connection details and supports connection pooling.</li>",
            "</ul>",
            "DataSource is preferred because it decouples the application from connection details, supports pooling transparently, and is the standard for container-managed environments (Tomcat, WildFly, Spring)."
          ]
        },
        {
          heading: "Using DriverManager.getConnection()",
          content: [
            "The simplest way to connect — pass the URL, username, and password.",
            "The driver is loaded automatically via the ServiceLoader mechanism (JDBC 4.0+) if the driver JAR is on the classpath.",
            `For older drivers or to be explicit, you can load the driver class manually: <code>Class.forName("com.mysql.cj.jdbc.Driver")</code>.`,
            "Connections are physical, expensive resources — must be closed when done."
          ],
          code: `import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DriverManagerExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "secret";
        
        // Try-with-resources auto-closes the connection
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connected to: " + conn.getMetaData().getDatabaseProductName());
            System.out.println("Driver: " + conn.getMetaData().getDriverName());
            System.out.println("Version: " + conn.getMetaData().getDatabaseProductVersion());
        } catch (SQLException e) {
            System.err.println("Connection failed: " + e.getMessage());
        }
        // Connection auto-closed here
    }
}`
        },
        {
          heading: "Using Properties with getConnection()",
          content: [
            "You can also pass a <code>Properties</code> object for more control over connection properties.",
            "Useful for setting vendor-specific flags (SSL, timezone, character encoding, etc.) without baking them into the URL."
          ],
          code: `import java.sql.*;
import java.util.Properties;

public class PropertiesExample {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/mydb";
        Properties props = new Properties();
        props.setProperty("user", "app_user");
        props.setProperty("password", "secret");
        props.setProperty("ssl", "true");
        props.setProperty("ApplicationName", "MyApp");
        props.setProperty("options", "-c statement_timeout=30000");  // 30s query timeout
        
        try (Connection conn = DriverManager.getConnection(url, props)) {
            System.out.println("Connected with custom properties");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
        },
        {
          heading: "Connection Properties (MySQL Example)",
          content: [
            "Vendor-specific connection properties are typically appended to the URL as query parameters.",
            "Examples for MySQL Connector/J:"
          ],
          code: `// Modern MySQL Connector/J 8.x URL with common properties
"jdbc:mysql://localhost:3306/mydb"
    + "?useSSL=false"
    + "&serverTimezone=UTC"
    + "&allowPublicKeyRetrieval=true"
    + "&useUnicode=true"
    + "&characterEncoding=UTF-8"
    + "&connectTimeout=10000"
    + "&socketTimeout=60000"

// PostgreSQL URL
"jdbc:postgresql://localhost:5432/mydb?ApplicationName=MyApp&sslmode=require"`
        },
        {
          heading: "Using DataSource (Preferred)",
          content: [
            "<code>DataSource</code> is an interface in <code>javax.sql</code> — implementations are provided by JDBC drivers and pooling libraries.",
            "Benefits over DriverManager:",
            "<ul><li>Connection details externalized (no URL/password in code)</li><li>Transparent pooling (with <code>ConnectionPoolDataSource</code>)</li><li>JNDI lookup for container-managed environments</li><li>Better testability — easy to mock</li></ul>",
            "A simple implementation: the MySQL driver provides <code>MysqlDataSource</code>."
          ],
          code: `import com.mysql.cj.jdbc.MysqlDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class DataSourceExample {
    public static void main(String[] args) {
        // Build a DataSource programmatically
        MysqlDataSource ds = new MysqlDataSource();
        ds.setUrl("jdbc:mysql://localhost:3306/mydb");
        ds.setUser("root");
        ds.setPassword("secret");
        ds.setUseSSL(false);
        ds.setServerTimezone("UTC");
        
        try (Connection conn = ds.getConnection()) {
            System.out.println("Got connection from DataSource");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
        },
        {
          heading: "JNDI Lookup (Container-Managed)",
          content: [
            "In Tomcat, WildFly, or any Java EE / Jakarta EE server, you typically declare a DataSource in the container configuration and look it up by name.",
            "This means your application code has no database credentials — they live in server config (and can differ between dev, staging, prod)."
          ],
          code: `// In your application code
import javax.sql.DataSource;
import javax.naming.InitialContext;

DataSource ds = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/mydb");
try (Connection conn = ds.getConnection()) {
    // ...
}

// In Tomcat's context.xml or server.xml:
// <Resource name="jdbc/mydb"
//           auth="Container"
//           type="javax.sql.DataSource"
//           maxTotal="100"
//           maxIdle="30"
//           maxWaitMillis="10000"
//           username="app_user"
//           password="secret"
//           driverClassName="com.mysql.cj.jdbc.Driver"
//           url="jdbc:mysql://localhost:3306/mydb" />

// In web.xml (or via @Resource annotation):
// <resource-ref>
//     <res-ref-name>jdbc/mydb</res-ref-name>
//     <res-type>javax.sql.DataSource</res-type>
//     <res-auth>Container</res-auth>
// </resource-ref>`
        },
        {
          heading: "Connection Validation and Health Checks",
          content: [
            "Before using a connection, especially one obtained from a pool, you may want to validate it is still alive.",
            "JDBC provides <code>Connection.isValid(int timeoutSeconds)</code> — the driver sends a lightweight ping to the DB.",
            "Connection pools use this to test idle connections before handing them out, and to drop stale ones."
          ],
          code: `import java.sql.Connection;

public boolean isConnectionHealthy(Connection conn) {
    try {
        if (conn == null || conn.isClosed()) {
            return false;
        }
        // Driver-specific check, timeout in seconds
        return conn.isValid(2);
    } catch (SQLException e) {
        return false;
    }
}

// Typical use in a connection pool wrapper:
public Connection getConnection() throws SQLException {
    Connection conn = dataSource.getConnection();
    if (!isConnectionHealthy(conn)) {
        conn.close();
        conn = dataSource.getConnection();  // try again
    }
    return conn;
}`
        },
        {
          heading: "Connection Information and Metadata",
          content: [
            "A <code>Connection</code> object exposes useful information via its metadata:"
          ],
          code: `try (Connection conn = ds.getConnection()) {
    DatabaseMetaData meta = conn.getMetaData();
    
    System.out.println("DB Product:   " + meta.getDatabaseProductName());
    System.out.println("DB Version:   " + meta.getDatabaseProductVersion());
    System.out.println("Driver Name:  " + meta.getDriverName());
    System.out.println("Driver Ver:   " + meta.getDriverVersion());
    System.out.println("JDBC Version: " + meta.getJDBCMajorVersion() + "." + meta.getJDBCMinorVersion());
    System.out.println("URL:          " + meta.getURL());
    System.out.println("User:         " + meta.getUserName());
    
    System.out.println("Auto-commit:  " + conn.getAutoCommit());
    System.out.println("Read-only:    " + conn.isReadOnly());
    System.out.println("Catalog:      " + conn.getCatalog());
    System.out.println("Schema:       " + conn.getSchema());
    System.out.println("Txn Level:    " + conn.getTransactionIsolation());
    
    // List all tables
    try (ResultSet tables = meta.getTables(null, "public", "%", new String[]{"TABLE"})) {
        while (tables.next()) {
            System.out.println("Table: " + tables.getString("TABLE_NAME"));
        }
    }
}`
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Connect to a database using <code>DriverManager</code> in a try-with-resources block and print <code>DatabaseMetaData</code>.</li>",
            "<li>Refactor the same code to use a <code>MysqlDataSource</code> or <code>HikariDataSource</code>.</li>",
            '<li>Configure a <code>DataSource</code> in Tomcat\'s <code>context.xml</code> and look it up with <code>InitialContext</code>.</li>',
            "<li>Use <code>conn.isValid(5)</code> to verify a connection is alive.</li>",
            "<li>List all tables in the database schema using <code>DatabaseMetaData.getTables()</code>.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-statements': {
      title: "Statements, PreparedStatements & Batching",
      sections: [
        {
          heading: "The Three Statement Types",
          content: [
            "JDBC provides three interfaces for executing SQL, each with different use cases:",
            "<ul>",
            "<li><strong><code>Statement</code></strong> — for static SQL with no parameters. Simplest, but vulnerable to SQL injection.</li>",
            "<li><strong><code>PreparedStatement</code></strong> — for SQL with bind parameters. Pre-compiled, cached, secure, faster for repeated execution. Use this in 95% of cases.</li>",
            "<li><strong><code>CallableStatement</code></strong> — for calling stored procedures and functions. Supports IN, OUT, and INOUT parameters.</li>",
            "</ul>"
          ]
        },
        {
          heading: "Statement — Static SQL",
          content: [
            "Use <code>Connection.createStatement()</code> to create a Statement.",
            "Three execution methods:",
            "<ul>",
            "<li><code>executeQuery(String sql)</code> — returns a <code>ResultSet</code> for SELECT statements</li>",
            "<li><code>executeUpdate(String sql)</code> — returns rows affected, for INSERT/UPDATE/DELETE (and DDL)</li>",
            "<li><code>execute(String sql)</code> — returns <code>true</code> if the first result is a ResultSet, <code>false</code> if it is an update count. Use for unknown/mixed SQL.</li>",
            "</ul>",
            "Statement is rarely appropriate — any user input concatenated into SQL is a SQL injection vulnerability."
          ],
          code: `import java.sql.*;

public class StatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        try (Connection conn = DriverManager.getConnection(url, "root", "secret");
             Statement stmt = conn.createStatement()) {
            
            // executeUpdate for DML
            int rows = stmt.executeUpdate("UPDATE users SET active = true WHERE last_login < NOW()");
            System.out.println("Activated " + rows + " users");
            
            // executeQuery for SELECT
            try (ResultSet rs = stmt.executeQuery("SELECT id, name FROM users LIMIT 10")) {
                while (rs.next()) {
                    System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
                }
            }
            
            // execute() for unknown SQL
            boolean isResultSet = stmt.execute("SELECT 1");
            if (isResultSet) {
                try (ResultSet rs = stmt.getResultSet()) {
                    // process
                }
            } else {
                int count = stmt.getUpdateCount();
                // process count
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
        },
        {
          heading: "PreparedStatement — Parameterized SQL",
          content: [
            "<code>PreparedStatement</code> is the recommended way to execute SQL with parameters.",
            "You write the SQL with <code>?</code> placeholders, then bind values with <code>setXxx</code> methods.",
            "Benefits:",
            "<ul>",
            "<li><strong>Security</strong> — bind values are escaped by the driver; SQL injection is impossible.</li>",
            "<li><strong>Performance</strong> — the database caches the parsed/compiled SQL plan. Repeated execution with different parameters skips the parse step.</li>",
            "<li><strong>Readability</strong> — parameter binding is clearer than string concatenation.</li>",
            "<li><strong>Type safety</strong> — the driver handles type conversions (e.g., Date → timestamp).</li>",
            "</ul>"
          ],
          code: `import java.sql.*;

public class PreparedStatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        
        try (Connection conn = DriverManager.getConnection(url, "root", "secret")) {
            
            // INSERT with named positional parameters
            String insertSQL = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(insertSQL)) {
                ps.setString(1, "Alice");
                ps.setString(2, "alice@example.com");
                ps.setInt(3, 28);
                int rows = ps.executeUpdate();
                System.out.println("Inserted: " + rows);
            }
            
            // SELECT with parameters
            String selectSQL = "SELECT id, name FROM users WHERE age > ? AND active = ?";
            try (PreparedStatement ps = conn.prepareStatement(selectSQL)) {
                ps.setInt(1, 18);
                ps.setBoolean(2, true);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
                    }
                }
            }
            
            // Reusing the PreparedStatement with different parameters
            String updateSQL = "UPDATE users SET active = ? WHERE id = ?";
            try (PreparedStatement ps = conn.prepareStatement(updateSQL)) {
                ps.setBoolean(1, true);
                ps.setInt(2, 5);
                ps.executeUpdate();
                
                ps.setBoolean(1, false);
                ps.setInt(2, 7);
                ps.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
        },
        {
          heading: "SQL Injection — Why PreparedStatement Matters",
          content: [
            "SQL injection is a top-10 web vulnerability. It happens when user input is concatenated into SQL strings.",
            `Example attack — user types <code>" OR 1=1 --</code> as their "name":`
          ],
          code: `// VULNERABLE CODE — DO NOT USE
String name = request.getParameter("name");  // user input
String sql = "SELECT * FROM users WHERE name = '" + name + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(sql);

// If name = " ' OR '1'='1 ", the SQL becomes:
// SELECT * FROM users WHERE name = '' OR '1'='1'
// Returns ALL users — auth bypass!

// If name = " '; DROP TABLE users; -- ", the SQL becomes:
// SELECT * FROM users WHERE name = ''; DROP TABLE users; --'
// Deletes the entire users table!

// SAFE CODE — USE THIS
String sql = "SELECT * FROM users WHERE name = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, name);  // Driver escapes, no SQL injection possible
ResultSet rs = ps.executeQuery();`
        },
        {
          heading: "setXxx Methods for Parameter Binding",
          content: [
            "JDBC provides type-specific setters:"
          ],
          code: `PreparedStatement ps = conn.prepareStatement(
    "INSERT INTO orders (id, customer, total, shipped_at, metadata, status) " +
    "VALUES (?, ?, ?, ?, ?, ?)"
);

// Common setXxx methods
ps.setLong(1, 12345L);
ps.setString(2, "Sudhakar");
ps.setBigDecimal(3, new BigDecimal("99.95"));
ps.setTimestamp(4, Timestamp.from(Instant.now()));
ps.setBytes(5, new byte[]{1, 2, 3});
ps.setObject(6, OrderStatus.PENDING);   // driver maps Java type to SQL type

// Null handling — use setNull() with a type code, or setObject(index, null, Types.TYPE)
ps.setString(2, null);  // works, but type might be ambiguous
ps.setNull(2, Types.VARCHAR);  // explicit type

// setObject is the most flexible — handles LocalDate, LocalDateTime, UUID, etc.
ps.setObject(4, LocalDateTime.now());
ps.setObject(5, UUID.randomUUID());
ps.setObject(6, true);  // → BOOLEAN

// Retrieving generated keys (auto-increment IDs)
String sql = "INSERT INTO users (name) VALUES (?)";
try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
    ps.setString(1, "Bob");
    ps.executeUpdate();
    try (ResultSet keys = ps.getGeneratedKeys()) {
        if (keys.next()) {
            long id = keys.getLong(1);
            System.out.println("New user ID: " + id);
        }
    }
}`
        },
        {
          heading: "Batch Updates",
          content: [
            "For bulk inserts/updates, batching dramatically reduces round-trips.",
            "Add N statements with <code>addBatch()</code>, then execute them all with <code>executeBatch()</code>.",
            "Most drivers send the batch as a single multi-row INSERT/UPDATE, which is much faster than N separate round-trips."
          ],
          code: `import java.sql.*;
import java.util.Arrays;
import java.util.List;

public class BatchUpdateExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        try (Connection conn = DriverManager.getConnection(url, "root", "secret")) {
            
            // Optionally wrap in a transaction for atomicity + speed
            conn.setAutoCommit(false);
            
            String sql = "INSERT INTO products (name, price, sku) VALUES (?, ?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                List<Product> products = Arrays.asList(
                    new Product("Widget", 9.99, "WID-001"),
                    new Product("Gadget", 19.99, "GAD-001"),
                    new Product("Gizmo", 29.99, "GIZ-001"),
                    new Product("Thingamajig", 39.99, "THG-001")
                );
                
                for (Product p : products) {
                    ps.setString(1, p.name());
                    ps.setDouble(2, p.price());
                    ps.setString(3, p.sku());
                    ps.addBatch();
                }
                
                int[] results = ps.executeBatch();
                System.out.println("Inserted " + results.length + " products");
                
                // Check individual results — some drivers return Statement.SUCCESS_NO_INFO
                for (int i = 0; i < results.length; i++) {
                    if (results[i] == Statement.SUCCESS_NO_INFO) {
                        System.out.println("Row " + i + ": success (count unknown)");
                    } else if (results[i] >= 0) {
                        System.out.println("Row " + i + ": " + results[i] + " affected");
                    } else if (results[i] == Statement.EXECUTE_FAILED) {
                        System.out.println("Row " + i + ": FAILED");
                    }
                }
            }
            
            conn.commit();  // Commit all at once
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    record Product(String name, double price, String sku) {}
}`
        },
        {
          heading: "CallableStatement — Stored Procedures",
          content: [
            "<code>CallableStatement</code> invokes stored procedures and functions.",
            "Use the JDBC escape syntax <code>{call proc_name(?, ?)}</code> or database-specific syntax like <code>{? = call func_name(?)}</code> for functions.",
            "Parameters can be IN (input), OUT (output), or INOUT (both).",
            "OUT and INOUT parameters must be registered with <code>registerOutParameter()</code> before execution."
          ],
          code: `import java.sql.*;

public class CallableStatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        try (Connection conn = DriverManager.getConnection(url, "root", "secret")) {
            
            // Call a stored procedure that takes an IN param and returns an OUT param
            // CREATE PROCEDURE get_user_count(IN active BOOLEAN, OUT total INT)
            try (CallableStatement cs = conn.prepareCall("{call get_user_count(?, ?)}")) {
                cs.setBoolean(1, true);
                cs.registerOutParameter(2, Types.INTEGER);
                cs.execute();
                int count = cs.getInt(2);
                System.out.println("Active users: " + count);
            }
            
            // Call a stored function: CREATE FUNCTION get_full_name(fname VARCHAR, lname VARCHAR) RETURNS VARCHAR
            try (CallableStatement cs = conn.prepareCall("{? = call get_full_name(?, ?)}")) {
                cs.registerOutParameter(1, Types.VARCHAR);
                cs.setString(2, "Sudhakar");
                cs.setString(3, "Badugu");
                cs.execute();
                String fullName = cs.getString(1);
                System.out.println("Full name: " + fullName);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
        },
        {
          heading: "Statement Caching and Reuse",
          content: [
            "JDBC drivers and the database cache prepared statements automatically.",
            "Reusing a <code>PreparedStatement</code> across many executions (with different parameter values) is the most efficient pattern.",
            'Many connection pools also cache PreparedStatements at the pool level (e.g., HikariCP\'s <code>cachePrepStmts=true</code> and <code>prepStmtCacheSize=250</code>).',
            "Always close PreparedStatements when done — they hold database resources (cursors, locks)."
          ]
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Write a method that takes a <code>List&lt;User&gt;</code> and inserts all of them using a single batch.</li>",
            "<li>Refactor a method that uses <code>Statement</code> with string concatenation to use <code>PreparedStatement</code> with bind parameters.</li>",
            "<li>Use <code>RETURN_GENERATED_KEYS</code> to retrieve the auto-increment ID after an insert.</li>",
            "<li>Call a stored procedure (or function) in your database of choice using <code>CallableStatement</code>.</li>",
            "<li>Try to <strong>deliberately</strong> inject SQL into a Statement-based query to see the vulnerability — then fix it with PreparedStatement.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-resultset': {
      title: "ResultSet & Data Retrieval",
      sections: [
        {
          heading: "What is a ResultSet?",
          content: [
            "A <code>ResultSet</code> is a Java object that represents the result of executing a SELECT query.",
            "It maintains a cursor pointing to the current row of data. Initially the cursor is positioned <strong>before the first row</strong>.",
            "You call <code>next()</code> to move the cursor forward — it returns <code>true</code> if there is a row, <code>false</code> when there are no more rows.",
            "You call <code>getXxx(columnIndexOrLabel)</code> to read column values from the current row."
          ]
        },
        {
          heading: "Basic ResultSet Navigation",
          content: [
            "The default ResultSet type is <code>TYPE_FORWARD_ONLY</code> and concurrency is <code>CONCUR_READ_ONLY</code>.",
            "In this mode, you can only move forward with <code>next()</code>, and you cannot update values through the ResultSet."
          ],
          code: `try (Connection conn = ds.getConnection();
     PreparedStatement ps = conn.prepareStatement("SELECT id, name, email, age FROM users");
     ResultSet rs = ps.executeQuery()) {
    
    // Process each row
    while (rs.next()) {
        int id = rs.getInt("id");
        String name = rs.getString("name");
        String email = rs.getString("email");
        int age = rs.getInt("age");
        System.out.println(id + " | " + name + " | " + email + " | " + age);
    }
    // After the loop, rs.next() returned false — no more rows
}

// getXxx by index is slightly faster than by label
// Note: column index is 1-based, not 0-based!
int id = rs.getInt(1);  // first column
String name = rs.getString(2);  // second column`
        },
        {
          heading: "getXxx Methods for All SQL Types",
          content: [
            "JDBC provides a <code>getXxx</code> method for every common SQL type:"
          ],
          code: `// Common getXxx methods (use the one matching the column type)
int i = rs.getInt("count");
long l = rs.getLong("big_number");
double d = rs.getDouble("price");
float f = rs.getFloat("ratio");
boolean b = rs.getBoolean("is_active");
String s = rs.getString("name");
byte[] bytes = rs.getBytes("file_data");
java.sql.Date date = rs.getDate("birth_date");
java.sql.Time time = rs.getTime("start_time");
java.sql.Timestamp ts = rs.getTimestamp("created_at");
java.math.BigDecimal bd = rs.getBigDecimal("amount");

// getObject — returns the most natural Java type for the column
Object value = rs.getObject("some_column");

// For modern Java types, use getObject with a target class (Java 8+)
String name = rs.getObject("name", String.class);
LocalDate birthDate = rs.getObject("birth_date", LocalDate.class);
LocalDateTime createdAt = rs.getObject("created_at", LocalDateTime.class);
UUID id = rs.getObject("id", UUID.class);

// Handle SQL NULL — getXxx returns Java primitive default (0, false) for primitives,
// or null for object types
String nullable = rs.getString("optional_column");
if (rs.wasNull()) {
    // The actual value was SQL NULL
    System.out.println("Value was NULL");
}`
        },
        {
          heading: "Scrollable and Updatable ResultSets",
          content: [
            "You can create a ResultSet that supports arbitrary navigation and even in-place updates.",
            "To do so, specify the type and concurrency when creating the statement:"
          ],
          code: `// Scrollable (forward + backward) but read-only
PreparedStatement ps = conn.prepareStatement(
    "SELECT id, name FROM users",
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_READ_ONLY
);

ResultSet rs = ps.executeQuery();

// Move the cursor
rs.next();                  // forward
rs.previous();              // backward
rs.first();                 // first row
rs.last();                  // last row
rs.beforeFirst();           // before first row
rs.afterLast();             // after last row
rs.absolute(5);             // 5th row
rs.relative(-2);            // 2 rows back from current

// Inspect cursor state
int currentRow = rs.getRow();  // 1-based, 0 if not on a row
boolean isFirst = rs.isFirst();
boolean isLast = rs.isLast();
boolean isBeforeFirst = rs.isBeforeFirst();
boolean isAfterLast = rs.isAfterLast();

// Updatable ResultSet
PreparedStatement upStmt = conn.prepareStatement(
    "SELECT id, name, status FROM users",
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);
ResultSet urs = upStmt.executeQuery();

while (urs.next()) {
    if (urs.getString("name").startsWith("A")) {
        urs.updateString("status", "VIP");
        urs.updateRow();  // write changes to the DB
    }
}`
        },
        {
          heading: "ResultSetMetaData — Inspecting Columns",
          content: [
            "<code>ResultSetMetaData</code> tells you about the columns in a ResultSet — useful for building generic table UIs, dynamic export, and ORM code.",
            "Available via <code>ResultSet.getMetaData()</code>."
          ],
          code: `try (ResultSet rs = ps.executeQuery()) {
    ResultSetMetaData meta = rs.getMetaData();
    int columnCount = meta.getColumnCount();
    System.out.println("Columns: " + columnCount);
    
    for (int i = 1; i <= columnCount; i++) {
        System.out.println("Column " + i + ":");
        System.out.println("  Label:     " + meta.getColumnLabel(i));
        System.out.println("  Name:      " + meta.getColumnName(i));
        System.out.println("  Type:      " + meta.getColumnTypeName(i) + 
                           " (" + meta.getColumnClassName(i) + ")");
        System.out.println("  Size:      " + meta.getColumnDisplaySize(i));
        System.out.println("  Nullable:  " + meta.isNullable(i));
        System.out.println("  Auto Inc:  " + meta.isAutoIncrement(i));
        System.out.println("  Table:     " + meta.getTableName(i));
    }
    
    // Print all rows with column headers
    while (rs.next()) {
        for (int i = 1; i <= columnCount; i++) {
            System.out.print(rs.getString(i) + "	");
        }
        System.out.println();
    }
}`
        },
        {
          heading: "DatabaseMetaData — Inspecting the Database",
          content: [
            "<code>DatabaseMetaData</code> provides information about the database as a whole — server version, supported features, schemas, tables, etc.",
            "Get it from <code>Connection.getMetaData()</code>.",
            "Used by tools like DBeaver, Liquibase, and Hibernate to introspect schemas at runtime."
          ],
          code: `DatabaseMetaData meta = conn.getMetaData();

System.out.println("DB: " + meta.getDatabaseProductName() + " " + meta.getDatabaseProductVersion());
System.out.println("Driver: " + meta.getDriverName() + " " + meta.getDriverVersion());
System.out.println("Max connections: " + meta.getMaxConnections());
System.out.println("Supports transactions: " + meta.supportsTransactions());
System.out.println("Supports batch updates: " + meta.supportsBatchUpdates());
System.out.println("Supports stored procedures: " + meta.supportsStoredProcedures());
System.out.println("Read-only: " + meta.isReadOnly());

// List schemas
try (ResultSet schemas = meta.getSchemas()) {
    while (schemas.next()) {
        System.out.println("Schema: " + schemas.getString("TABLE_SCHEM"));
    }
}

// List tables in a schema
try (ResultSet tables = meta.getTables("mydb", "public", "%", new String[]{"TABLE"})) {
    while (tables.next()) {
        System.out.println("Table: " + tables.getString("TABLE_NAME") + 
                           " (" + tables.getString("TABLE_TYPE") + ")");
    }
}

// List columns of a specific table
try (ResultSet cols = meta.getColumns("mydb", "public", "users", "%")) {
    while (cols.next()) {
        System.out.println(cols.getString("COLUMN_NAME") + " : " + 
                           cols.getString("TYPE_NAME") + 
                           (cols.getInt("NULLABLE") == DatabaseMetaData.columnNullable ? " NULL" : " NOT NULL"));
    }
}`
        },
        {
          heading: "Mapping ResultSet Rows to Java Objects",
          content: [
            "In real applications, you usually map each row to a domain object (DTO/entity).",
            "There are several common patterns:"
          ],
          code: `record User(long id, String name, String email, int age) {}

// Pattern 1: Inline mapping in the consumer
try (ResultSet rs = ps.executeQuery()) {
    List<User> users = new ArrayList<>();
    while (rs.next()) {
        users.add(new User(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email"),
            rs.getInt("age")
        ));
    }
    return users;
}

// Pattern 2: RowMapper function (used by JdbcTemplate-style helpers)
@FunctionalInterface
interface RowMapper<T> {
    T map(ResultSet rs, int rowNum) throws SQLException;
}

RowMapper<User> userMapper = (rs, rowNum) -> new User(
    rs.getLong("id"),
    rs.getString("name"),
    rs.getString("email"),
    rs.getInt("age")
);

List<User> users = new ArrayList<>();
try (ResultSet rs = ps.executeQuery()) {
    int rowNum = 0;
    while (rs.next()) {
        users.add(userMapper.map(rs, rowNum++));
    }
}

// Pattern 3: Reflection-based mapping (used by MyBatis, Spring JDBC)
// BeanPropertyRowMapper<User> mapper = new BeanPropertyRowMapper<>(User.class);
// List<User> users = jdbcTemplate.query("SELECT * FROM users", mapper);
`
        },
        {
          heading: "Handling Large ResultSets and Streaming",
          content: [
            "For very large results, you do not want to load everything into memory.",
            "Options:",
            "<ul>",
            "<li>Use <code>Statement.setFetchSize(int)</code> — hints the driver to stream rows in batches rather than buffering all</li>",
            "<li>Use <code>Statement.setMaxRows(int)</code> — limit the number of rows the database will return</li>",
            "<li>Use database cursors / keyset pagination</li>",
            "<li>Process rows in a stream as they arrive</li>",
            "</ul>",
            "Note: <code>fetchSize</code> behavior varies by driver. MySQL needs <code>useCursorFetch=true</code> + <code>fetchSize</code>; PostgreSQL respects fetchSize as-is."
          ],
          code: `try (PreparedStatement ps = conn.prepareStatement("SELECT * FROM huge_table")) {
    ps.setFetchSize(1000);  // hint: stream 1000 rows at a time
    ps.setMaxRows(1_000_000);  // safety: never return more than this
    
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            // process one row at a time
        }
    }
}`
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Create a scrollable, read-only ResultSet and navigate to the 5th, last, and 2nd-from-last rows.</li>",
            "<li>Print all column names and types of a <code>SELECT * FROM your_table</code> query using <code>ResultSetMetaData</code>.</li>",
            "<li>List all tables in the <code>public</code> schema using <code>DatabaseMetaData.getTables()</code>.</li>",
            "<li>Map a <code>SELECT</code> result set into a list of records using a <code>RowMapper</code>.</li>",
            "<li>Use <code>setFetchSize(100)</code> and time a query against a large table to feel the streaming difference.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-transactions': {
      title: "Transactions & Isolation Levels",
      sections: [
        {
          heading: "What is a Transaction?",
          content: [
            "A <strong>transaction</strong> is a unit of work that is either fully completed or has no effect at all — never partially applied.",
            "Transactions are governed by the <strong>ACID</strong> properties:",
            "<ul>",
            "<li><strong>Atomicity</strong> — all operations succeed, or none do</li>",
            "<li><strong>Consistency</strong> — the database moves from one valid state to another</li>",
            "<li><strong>Isolation</strong> — concurrent transactions do not interfere with each other</li>",
            "<li><strong>Durability</strong> — committed changes survive crashes</li>",
            "</ul>",
            "In JDBC, transactions are managed by the <code>Connection</code> object."
          ]
        },
        {
          heading: "Auto-Commit Mode",
          content: [
            "By default, every SQL statement is committed immediately in its own transaction.",
            "This is set by <code>Connection.setAutoCommit(true)</code>, which is the default.",
            "To execute multiple statements as one transaction, disable auto-commit, execute the statements, then call <code>commit()</code> or <code>rollback()</code>."
          ],
          code: `try (Connection conn = ds.getConnection()) {
    conn.setAutoCommit(false);  // begin a transaction
    
    try {
        // ... execute multiple statements ...
        
        conn.commit();  // success — make all changes permanent
    } catch (SQLException e) {
        conn.rollback();  // failure — undo all changes
        throw e;
    } finally {
        conn.setAutoCommit(true);  // restore default for connection pool
    }
}

// Typical "service-layer" pattern
public void transferCredits(int fromId, int toId, int amount) throws SQLException {
    try (Connection conn = ds.getConnection()) {
        conn.setAutoCommit(false);
        try {
            debit(conn, fromId, amount);
            credit(conn, toId, amount);
            conn.commit();
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        }
    }
}`
        },
        {
          heading: "The Read Phenomena",
          content: [
            "When two transactions run concurrently, several anomalies can occur:",
            "<ul>",
            "<li><strong>Dirty read</strong> — Tx A reads data written by Tx B that has not been committed. If B rolls back, A has read data that never existed.</li>",
            "<li><strong>Non-repeatable read</strong> — Tx A reads the same row twice and sees different values because Tx B modified and committed between the two reads.</li>",
            "<li><strong>Phantom read</strong> — Tx A runs the same query twice and gets a different set of rows because Tx B inserted and committed matching rows in between.</li>",
            "</ul>",
            "JDBC isolation levels control which anomalies are allowed."
          ]
        },
        {
          heading: "JDBC Isolation Levels",
          content: [
            "Set the isolation level with <code>Connection.setTransactionIsolation(int)</code>.",
            "Constants in <code>Connection</code>:"
          ],
          code: `// In order from weakest to strongest
conn.setTransactionIsolation(Connection.TRANSACTION_READ_UNCOMMITTED);  // allows dirty reads
conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);     // default in PostgreSQL, Oracle
conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);   // default in MySQL InnoDB
conn.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);       // strictest, prevents all anomalies

// Get the current level
int level = conn.getTransactionIsolation();

// Check what the database supports
DatabaseMetaData meta = conn.getMetaData();
System.out.println("Supports READ_UNCOMMITTED: " + meta.supportsTransactionIsolationLevel(Connection.TRANSACTION_READ_UNCOMMITTED));
System.out.println("Supports REPEATABLE_READ: " + meta.supportsTransactionIsolationLevel(Connection.TRANSACTION_REPEATABLE_READ));
System.out.println("Default: " + meta.getDefaultTransactionIsolation());`
        },
        {
          heading: "What Each Isolation Level Prevents",
          content: [
            "Reference table for the standard SQL isolation levels (note: behavior varies slightly by database):"
          ],
          code: `// Phenomenon:    DIRTY    NON-REPEATABLE   PHANTOM
// READ_UNCOMMITTED:  yes        yes          yes
// READ_COMMITTED:     no         yes          yes
// REPEATABLE_READ:    no         no           yes  (MySQL: also prevents phantoms with InnoDB + next-key locks)
// SERIALIZABLE:       no         no           no

// In summary:
// - READ_UNCOMMITTED: Almost no isolation. Use only for approximate counts (rare).
// - READ_COMMITTED:   Good default for most OLTP apps. Most databases default to this.
// - REPEATABLE_READ:  Stronger; reports/snapshots within a single transaction are stable.
// - SERIALIZABLE:     Strictest; expect lower concurrency and more lock contention.`
        },
        {
          heading: "Savepoints — Partial Rollback",
          content: [
            "A <strong>savepoint</strong> marks a point within a transaction that you can roll back to without rolling back the entire transaction.",
            "Useful when you want to try an operation, and if it fails, undo only that part."
          ],
          code: `try (Connection conn = ds.getConnection()) {
    conn.setAutoCommit(false);
    
    // Statement 1 — always commit
    try (PreparedStatement ps = conn.prepareStatement("INSERT INTO orders ...")) {
        ps.executeUpdate();
    }
    
    // Savepoint before the risky part
    Savepoint sp = conn.setSavepoint("before_risky_op");
    try {
        // Statement 2 — might fail
        try (PreparedStatement ps = conn.prepareStatement("INSERT INTO risky_table ...")) {
            ps.executeUpdate();
        }
    } catch (SQLException e) {
        // Undo only statement 2, keep statement 1
        conn.rollback(sp);
    }
    
    // Release the savepoint (optional but frees resources)
    conn.releaseSavepoint(sp);
    
    // Statement 3 — always commit
    try (PreparedStatement ps = conn.prepareStatement("UPDATE inventory ...")) {
        ps.executeUpdate();
    }
    
    conn.commit();
}`
        },
        {
          heading: "Optimistic vs Pessimistic Locking",
          content: [
            "Beyond isolation levels, you can use explicit locking for fine-grained control:",
            "<ul>",
            "<li><strong>Pessimistic locking</strong> — acquire a database lock before reading, preventing others from modifying. Use when conflicts are likely. <code>SELECT ... FOR UPDATE</code> in SQL.</li>",
            "<li><strong>Optimistic locking</strong> — do not lock, but check a version number on update. If the version changed since you read, retry or fail. Use when conflicts are rare.</li>",
            "</ul>"
          ],
          code: `// Pessimistic: SELECT FOR UPDATE
try (PreparedStatement ps = conn.prepareStatement(
        "SELECT balance FROM accounts WHERE id = ? FOR UPDATE")) {
    ps.setInt(1, accountId);
    try (ResultSet rs = ps.executeQuery()) {
        // Row is now locked — no other transaction can modify it
        // until this transaction commits or rolls back
        if (rs.next()) {
            int balance = rs.getInt("balance");
            // ... check balance, make changes ...
        }
    }
}

// Optimistic: version column
// Schema: id BIGINT, name VARCHAR, version INT
try (PreparedStatement ps = conn.prepareStatement(
        "UPDATE products SET name = ?, version = version + 1 " +
        "WHERE id = ? AND version = ?")) {
    ps.setString(1, newName);
    ps.setLong(2, productId);
    ps.setInt(3, expectedVersion);  // read earlier
    
    int updated = ps.executeUpdate();
    if (updated == 0) {
        throw new OptimisticLockException(
            "Product " + productId + " was modified by another transaction");
    }
    // Otherwise, our update succeeded
}`
        },
        {
          heading: "Deadlocks",
          content: [
            "A <strong>deadlock</strong> occurs when two transactions each hold a lock the other needs, causing both to wait forever.",
            "Most databases detect deadlocks and roll back one of the transactions, throwing a <code>SQLException</code> with a specific SQLState (e.g., <code>40001</code> for serialization failure, vendor-specific codes for deadlocks).",
            "To handle: catch the exception, retry the transaction."
          ],
          code: `// Detecting deadlock: SQLState codes
catch (SQLException e) {
    String sqlState = e.getSQLState();
    if ("40001".equals(sqlState) ||                  // serialization failure
        "40P01".equals(sqlState) ||                  // PostgreSQL deadlock
        "1213".equals(sqlState)) {                    // MySQL deadlock
        // Retry the transaction
        return retryTransaction();
    }
    throw e;
}

// General retry pattern
public <T> T executeWithRetry(int maxRetries, Supplier<T> action) {
    int attempt = 0;
    while (true) {
        try {
            return action.get();
        } catch (SQLException e) {
            if (isTransient(e) && attempt < maxRetries) {
                attempt++;
                try { Thread.sleep(100L * attempt); } catch (InterruptedException ie) { 
                    Thread.currentThread().interrupt(); 
                    throw new RuntimeException(ie);
                }
            } else {
                throw new RuntimeException("Transaction failed after " + attempt + " retries", e);
            }
        }
    }
}`
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Write a <code>transfer(fromId, toId, amount)</code> method that uses a transaction — debit one account, credit another, rollback if either fails.</li>",
            "<li>Test different isolation levels: open two connections, run a long transaction in one, and observe what the other can see.</li>",
            "<li>Use a savepoint to make statement 3 conditional on statement 2 succeeding, without losing statement 1.</li>",
            "<li>Implement optimistic locking with a <code>version</code> column and demonstrate it catching concurrent updates.</li>",
            "<li>Deliberately cause a deadlock (e.g., two threads that lock table A then B vs. table B then A) and verify the database detects and aborts one.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-dao-pattern': {
      title: "DAO Pattern & Best Practices",
      sections: [
        {
          heading: "Why the DAO Pattern?",
          content: [
            "The <strong>Data Access Object (DAO)</strong> pattern abstracts data persistence behind a clean interface.",
            "Business code (services, controllers) calls DAO methods like <code>findById</code> or <code>save</code> without knowing whether the data comes from JDBC, JPA, a web service, or a file.",
            "Benefits:",
            "<ul>",
            "<li><strong>Separation of concerns</strong> — business logic does not know SQL</li>",
            "<li><strong>Testability</strong> — easy to mock the DAO interface</li>",
            "<li><strong>Flexibility</strong> — swap JDBC for JPA without changing business code</li>",
            "<li><strong>Centralized SQL</strong> — all data access in one place</li>",
            "</ul>"
          ]
        },
        {
          heading: "A Simple DAO Interface",
          content: [
            "Start with an interface that defines the persistence operations for one entity."
          ],
          code: `// DAO interface — defines the contract
public interface UserDao {
    Optional<User> findById(long id);
    List<User> findAll();
    List<User> findByName(String namePattern);
    User save(User user);    // returns persisted entity (with generated ID)
    boolean update(User user);
    boolean deleteById(long id);
    long count();
}

// Entity — the domain object
public record User(
    Long id,
    String name,
    String email,
    int age,
    boolean active
) {}`
        },
        {
          heading: "DAO Implementation with JDBC",
          content: [
            "Implement the interface using JDBC.",
            "Centralize the mapping logic in a <code>RowMapper</code> — used by every read method."
          ],
          code: `import java.sql.*;
import java.util.*;
import javax.sql.DataSource;

public class JdbcUserDao implements UserDao {
    
    private final DataSource dataSource;
    
    public JdbcUserDao(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    // RowMapper — converts a ResultSet row into a User
    private static final RowMapper<User> USER_MAPPER = (rs, rowNum) -> new User(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("email"),
        rs.getInt("age"),
        rs.getBoolean("active")
    );
    
    @FunctionalInterface
    interface RowMapper<T> {
        T map(ResultSet rs, int rowNum) throws SQLException;
    }
    
    @FunctionalInterface
    interface SqlAction<T> {
        T execute(Connection conn) throws SQLException;
    }
    
    // Helper to run a query and map results
    private <T> List<T> query(String sql, RowMapper<T> mapper, Object... params) throws SQLException {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            bindParams(ps, params);
            try (ResultSet rs = ps.executeQuery()) {
                List<T> list = new ArrayList<>();
                int rowNum = 0;
                while (rs.next()) {
                    list.add(mapper.map(rs, rowNum++));
                }
                return list;
            }
        }
    }
    
    private Optional<User> queryOne(String sql, RowMapper<User> mapper, Object... params) throws SQLException {
        List<User> list = query(sql, mapper, params);
        return list.isEmpty() ? Optional.empty() : Optional.of(list.get(0));
    }
    
    private int update(String sql, Object... params) throws SQLException {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            bindParams(ps, params);
            return ps.executeUpdate();
        }
    }
    
    private void bindParams(PreparedStatement ps, Object... params) throws SQLException {
        for (int i = 0; i < params.length; i++) {
            ps.setObject(i + 1, params[i]);
        }
    }
    
    @Override
    public Optional<User> findById(long id) throws SQLException {
        return queryOne("SELECT * FROM users WHERE id = ?", USER_MAPPER, id);
    }
    
    @Override
    public List<User> findAll() throws SQLException {
        return query("SELECT * FROM users ORDER BY id", USER_MAPPER);
    }
    
    @Override
    public List<User> findByName(String namePattern) throws SQLException {
        return query("SELECT * FROM users WHERE name ILIKE ?", USER_MAPPER, namePattern);
    }
    
    @Override
    public User save(User user) throws SQLException {
        String sql = "INSERT INTO users (name, email, age, active) VALUES (?, ?, ?, ?)";
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, user.name());
            ps.setString(2, user.email());
            ps.setInt(3, user.age());
            ps.setBoolean(4, user.active());
            ps.executeUpdate();
            try (ResultSet keys = ps.getGeneratedKeys()) {
                if (keys.next()) {
                    return new User(keys.getLong(1), user.name(), user.email(), user.age(), user.active());
                }
            }
            throw new SQLException("Insert succeeded but no generated key returned");
        }
    }
    
    @Override
    public boolean update(User user) throws SQLException {
        return update("UPDATE users SET name = ?, email = ?, age = ?, active = ? WHERE id = ?",
                     user.name(), user.email(), user.age(), user.active(), user.id()) > 0;
    }
    
    @Override
    public boolean deleteById(long id) throws SQLException {
        return update("DELETE FROM users WHERE id = ?", id) > 0;
    }
    
    @Override
    public long count() throws SQLException {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT COUNT(*) FROM users");
             ResultSet rs = ps.executeQuery()) {
            return rs.next() ? rs.getLong(1) : 0;
        }
    }
}`
        },
        {
          heading: "Custom DAO Exception",
          content: [
            "Raw <code>SQLException</code> is a checked exception that leaks JDBC specifics into business code.",
            "Best practice: wrap it in a custom unchecked exception so the service layer does not need to know about SQL."
          ],
          code: `// Custom unchecked exception
public class DaoException extends RuntimeException {
    public DaoException(String message, SQLException cause) {
        super(message, cause);
    }
}

// Wrap SQLException at the DAO boundary
public class JdbcUserDao implements UserDao {
    private <T> T withConn(SqlAction<T> action) {
        try (Connection conn = dataSource.getConnection()) {
            return action.execute(conn);
        } catch (SQLException e) {
            throw new DaoException("Database error in " + action.getClass().getSimpleName(), e);
        }
    }
    
    @Override
    public Optional<User> findById(long id) {
        return withConn(conn -> {
            try (PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?")) {
                ps.setLong(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    return rs.next() ? Optional.of(USER_MAPPER.map(rs, 0)) : Optional.empty();
                }
            }
        });
    }
    // ...
}

// Now service code can catch DaoException, not SQLException:
try {
    User user = userDao.findById(123).orElseThrow();
} catch (DaoException e) {
    log.error("Failed to load user", e);
    throw new ServiceException("User lookup failed", e);
}`
        },
        {
          heading: "Generic DAO Base Class",
          content: [
            "Most DAOs share the same CRUD pattern. Extract the common logic into a generic base class."
          ],
          code: `import java.sql.*;
import java.util.*;
import java.util.function.Function;
import javax.sql.DataSource;

// Base CRUD DAO for any entity with a Long primary key
public abstract class AbstractJdbcDao<T, ID> {
    
    protected final DataSource dataSource;
    
    protected AbstractJdbcDao(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    // Subclasses provide these
    protected abstract String tableName();
    protected abstract String idColumn();
    protected abstract String[] columns();
    protected abstract String insertSql();
    protected abstract String updateSql();
    protected abstract void bindInsertParams(PreparedStatement ps, T entity) throws SQLException;
    protected abstract void bindUpdateParams(PreparedStatement ps, T entity) throws SQLException;
    protected abstract T mapRow(ResultSet rs, int rowNum) throws SQLException;
    protected abstract ID extractId(T entity);
    
    // Generic CRUD operations
    public Optional<T> findById(ID id) {
        String sql = "SELECT * FROM " + tableName() + " WHERE " + idColumn() + " = ?";
        return queryOne(sql, this::mapRow, id);
    }
    
    public List<T> findAll() {
        return query("SELECT * FROM " + tableName(), this::mapRow);
    }
    
    public T save(T entity) {
        // INSERT and return entity with generated ID
        // ...
    }
    
    public boolean deleteById(ID id) {
        return update("DELETE FROM " + tableName() + " WHERE " + idColumn() + " = ?", id) > 0;
    }
    
    // Reusable helpers
    protected <R> List<R> query(String sql, RowMapper<R> mapper, Object... params) {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            for (int i = 0; i < params.length; i++) ps.setObject(i + 1, params[i]);
            try (ResultSet rs = ps.executeQuery()) {
                List<R> list = new ArrayList<>();
                int rowNum = 0;
                while (rs.next()) list.add(mapper.map(rs, rowNum++));
                return list;
            }
        } catch (SQLException e) {
            throw new DaoException("Query failed: " + sql, e);
        }
    }
    
    protected Optional<T> queryOne(String sql, RowMapper<T> mapper, Object... params) {
        List<T> list = query(sql, mapper, params);
        return list.isEmpty() ? Optional.empty() : Optional.of(list.get(0));
    }
    
    protected int update(String sql, Object... params) {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            for (int i = 0; i < params.length; i++) ps.setObject(i + 1, params[i]);
            return ps.executeUpdate();
        } catch (SQLException e) {
            throw new DaoException("Update failed: " + sql, e);
        }
    }
    
    protected interface RowMapper<R> {
        R map(ResultSet rs, int rowNum) throws SQLException;
    }
}

// Then a UserDao is just the user-specific bits:
public class JdbcUserDao extends AbstractJdbcDao<User, Long> implements UserDao {
    public JdbcUserDao(DataSource ds) { super(ds); }
    
    @Override protected String tableName() { return "users"; }
    @Override protected String idColumn() { return "id"; }
    @Override protected String[] columns() { return new String[]{"name", "email", "age", "active"}; }
    @Override protected String insertSql() { return "INSERT INTO users (name, email, age, active) VALUES (?, ?, ?, ?)"; }
    @Override protected String updateSql() { return "UPDATE users SET name=?, email=?, age=?, active=? WHERE id=?"; }
    @Override protected void bindInsertParams(PreparedStatement ps, User u) throws SQLException { /* ... */ }
    @Override protected void bindUpdateParams(PreparedStatement ps, User u) throws SQLException { /* ... */ }
    @Override protected User mapRow(ResultSet rs, int rowNum) throws SQLException { /* ... */ }
    @Override protected Long extractId(User u) { return u.id(); }
}`
        },
        {
          heading: "Transactional Methods Across DAOs",
          content: [
            "Sometimes a business operation spans multiple DAOs (e.g., create a user, log an audit event, update a counter).",
            "A transaction service coordinates them in one transaction."
          ],
          code: `public class UserService {
    private final UserDao userDao;
    private final AuditDao auditDao;
    private final DataSource dataSource;
    
    public UserService(UserDao userDao, AuditDao auditDao, DataSource dataSource) {
        this.userDao = userDao;
        this.auditDao = auditDao;
        this.dataSource = dataSource;
    }
    
    public User registerUser(String name, String email) {
        try (Connection conn = dataSource.getConnection()) {
            conn.setAutoCommit(false);
            try {
                User newUser = new User(null, name, email, 0, true);
                User saved = userDao.save(conn, newUser);   // pass the connection
                auditDao.log(conn, "USER_REGISTERED", saved.id());
                conn.commit();
                return saved;
            } catch (SQLException e) {
                conn.rollback();
                throw new DaoException("Registration failed", e);
            }
        } catch (SQLException e) {
            throw new DaoException("Could not obtain connection", e);
        }
    }
}

// DAO methods that take a Connection (overloaded variants) allow
// the service layer to control the transaction boundary.
public interface UserDao {
    User save(Connection conn, User user) throws SQLException;
}`
        },
        {
          heading: "Other Best Practices",
          content: [
            "Additional JDBC best practices:",
            "<ul>",
            "<li><strong>Always use try-with-resources</strong> for Connection, Statement, ResultSet.</li>",
            "<li><strong>Never concatenate user input into SQL</strong> — always use bind parameters.</li>",
            "<li><strong>Log SQL exceptions with the SQL state and error code</strong> for diagnosability.</li>",
            "<li><strong>Validate input at the DAO boundary</strong> — do not let invalid data reach the database.</li>",
            '<li><strong>Index frequently-queried columns</strong> at the database level (not the DAO\'s job).</li>',
            "<li><strong>Use a connection pool in production</strong> — never create a connection per request.</li>",
            "<li><strong>Set query timeouts</strong> with <code>Statement.setQueryTimeout(seconds)</code> to avoid runaway queries.</li>",
            "<li><strong>Use batch updates for bulk operations</strong> — orders of magnitude faster.</li>",
            '<li><strong>Profile slow queries</strong> with the database\'s EXPLAIN tool.</li>',
            "<li><strong>Use database transactions</strong> for any multi-statement operation that must be atomic.</li>",
            "</ul>"
          ]
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Build a <code>UserDao</code> interface and JDBC implementation with <code>findById</code>, <code>findAll</code>, <code>save</code>, <code>update</code>, <code>deleteById</code>.</li>",
            "<li>Extract the common CRUD logic into an <code>AbstractJdbcDao</code> generic base class.</li>",
            "<li>Wrap <code>SQLException</code> in a custom <code>DaoException</code> at the DAO boundary.</li>",
            "<li>Write a <code>UserService</code> that performs a user-registration operation spanning <code>UserDao</code> + <code>AuditDao</code> in one transaction.</li>",
            "<li>Write a unit test for <code>UserService</code> using a mocked DAO interface — prove you can swap JDBC for an in-memory implementation.</li>",
            "</ol>"
          ]
        }
      ]
    },
  'java-jdbc-connection-pooling': {
      title: "Connection Pooling & Performance",
      sections: [
        {
          heading: "Why Pool Connections?",
          content: [
            "Opening a database connection is <strong>expensive</strong> — TCP handshake, TLS negotiation, authentication, and on the database side, allocating a session and loading session state.",
            "Typical connection cost: 50-200ms; a typical simple query: 1-10ms.",
            "If you open a new connection for every request, your app spends most of its time on overhead, not on real work.",
            "A <strong>connection pool</strong> keeps a set of connections open and lends them out on demand, dramatically reducing latency."
          ]
        },
        {
          heading: "Connection Pool Concepts",
          content: [
            "Key terms:",
            "<ul>",
            "<li><strong>Initial size</strong> — number of connections opened at pool startup</li>",
            "<li><strong>Min idle</strong> — minimum connections kept open (even if unused)</li>",
            "<li><strong>Max size</strong> — maximum connections the pool will ever open</li>",
            "<li><strong>Max wait time</strong> — how long a caller will block waiting for a connection when the pool is full</li>",
            "<li><strong>Max lifetime</strong> — recycle connections after this long (helps with stale state, server-side timeouts)</li>",
            "<li><strong>Idle timeout</strong> — close idle connections after this long</li>",
            "<li><strong>Validation</strong> — periodically test idle connections with <code>isValid()</code> or a custom query</li>",
            "<li><strong>Connection acquisition / leak detection</strong> — track how long each connection has been held</li>",
            "</ul>"
          ]
        },
        {
          heading: "HikariCP — The Industry Standard",
          content: [
            "HikariCP is the fastest, most reliable JDBC connection pool — used in Spring Boot by default, and the de-facto choice for high-performance Java apps.",
            "Add the dependency: <code>com.zaxxer:HikariCP</code> (or <code>com.zaxxer:HikariCP:5.x</code> for recent versions).",
            "You configure a <code>HikariDataSource</code> and use it just like a regular <code>DataSource</code>."
          ],
          code: `<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.1.0</version>
</dependency>`
        },
        {
          heading: "HikariCP Configuration",
          content: [
            "HikariCP has a simple, fluent configuration via <code>HikariConfig</code> or a properties file.",
            "Recommended pool sizes depend on workload — a common rule is (number of CPU cores * 2) + effective_spindle_count."
          ],
          code: `import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;

public class DataSourceFactory {
    public static DataSource createHikariDataSource() {
        HikariConfig config = new HikariConfig();
        
        // Connection details
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("app_user");
        config.setPassword("secret");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
        
        // Pool sizing
        config.setMaximumPoolSize(20);
        config.setMinimumIdle(5);
        
        // Timeouts
        config.setConnectionTimeout(10_000);  // 10s
        config.setIdleTimeout(300_000);       // 5 min
        config.setMaxLifetime(1_800_000);     // 30 min
        config.setKeepaliveTime(60_000);      // test every 60s
        
        // Pool name (for logging)
        config.setPoolName("MyAppPool");
        
        // Performance
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        config.addDataSourceProperty("useServerPrepStmts", "true");
        
        // Health check
        config.setConnectionTestQuery("SELECT 1");
        // Or rely on JDBC4 isValid() — better
        
        // Leak detection — log warnings if connection held too long
        config.setLeakDetectionThreshold(60_000);
        
        return new HikariDataSource(config);
    }
}`
        },
        {
          heading: "HikariCP Configuration File",
          content: [
            "Alternatively, configure HikariCP via a properties file:"
          ],
          code: `# hikari.properties
jdbcUrl=jdbc:mysql://localhost:3306/mydb
username=app_user
password=secret
driverClassName=com.mysql.cj.jdbc.Driver

maximumPoolSize=20
minimumIdle=5
connectionTimeout=10000
idleTimeout=300000
maxLifetime=1800000
keepaliveTime=60000

poolName=MyAppPool

# Statement caching
dataSource.cachePrepStmts=true
dataSource.prepStmtCacheSize=250
dataSource.prepStmtCacheSqlLimit=2048
dataSource.useServerPrepStmts=true

# Leak detection
leakDetectionThreshold=60000

# Health check (or rely on JDBC4 isValid)
connectionTestQuery=SELECT 1\`

// Load it:
HikariConfig config = new HikariConfig("hikari.properties");
HikariDataSource ds = new HikariDataSource(config);`
        },
        {
          heading: "Using a Pooled DataSource",
          content: [
            "Once you have a <code>HikariDataSource</code> (or any pooled DataSource), you use it the same as an unpooled one — <code>getConnection()</code>, do work, close.",
            "The pool handles the lifecycle behind the scenes."
          ],
          code: `// Singleton — typically created once at app startup
public class Database {
    private static final DataSource dataSource = DataSourceFactory.createHikariDataSource();
    
    public static DataSource getDataSource() {
        return dataSource;
    }
    
    // Shutdown hook — close pool when app stops
    public static void close() {
        if (dataSource instanceof HikariDataSource) {
            ((HikariDataSource) dataSource).close();
        }
    }
}

// In a DAO or service:
try (Connection conn = Database.getDataSource().getConnection()) {
    // ...
}  // close() returns the connection to the pool instead of actually closing it

// DAO code is identical whether pooled or not
public class JdbcUserDao implements UserDao {
    private final DataSource dataSource;
    public JdbcUserDao(DataSource ds) { this.dataSource = ds; }
    // ... methods work the same ...
}`
        },
        {
          heading: "Pool Metrics and Monitoring",
          content: [
            "HikariCP exposes a MBean that reports pool statistics.",
            "You can also use Dropwizard Metrics, Micrometer, or JMX to monitor them.",
            "Key metrics:",
            "<ul>",
            "<li><code>activeConnections</code> — currently in-use connections</li>",
            "<li><code>idleConnections</code> — open but unused</li>",
            "<li><code>totalConnections</code> — open total</li>",
            "<li><code>threadsAwaitingConnection</code> — callers waiting for a connection (if > 0, your pool is too small)</li>",
            "<li><code>connectionAcquireNanos</code> — time to acquire a connection (should be sub-millisecond)</li>",
            "</ul>"
          ],
          code: `// Get pool stats via the MBean
HikariDataSource ds = (HikariDataSource) Database.getDataSource();
HikariPoolMXBean pool = ds.getHikariPoolMXBean();

System.out.println("Active:   " + pool.getActiveConnections());
System.out.println("Idle:     " + pool.getIdleConnections());
System.out.println("Total:    " + pool.getTotalConnections());
System.out.println("Waiting:  " + pool.getThreadsAwaitingConnection());

// Expose via JMX (HikariCP does this automatically)
// You can scrape with Prometheus JMX exporter, JConsole, etc.

// Or programmatically:
pool.getActiveConnections();  // current check

// For continuous monitoring, use HikariCP's built-in logger
// or wire up a MetricsTrackerFactory (Dropwizard / Micrometer)`
        },
        {
          heading: "Tuning Pool Size",
          content: [
            "Common mistakes: pool too small (caller blocks) or too large (database overloaded).",
            "PostgreSQL formula (assuming all connections do CPU + I/O work):",
            "<code>connections = ((core_count * 2) + effective_spindle_count)</code>",
            "For HikariCP, typical defaults work well:",
            "<ul>",
            "<li>Web app with 4 cores: <code>maximumPoolSize=10-20</code></li>",
            "<li>Heavy reporting app: may need <code>30-50</code></li>",
            "<li>Serverless / one-request-at-a-time apps: <code>5-10</code> is enough</li>",
            "</ul>",
            "Watch the <code>threadsAwaitingConnection</code> metric. If consistently > 0, increase pool size."
          ]
        },
        {
          heading: "Alternatives to HikariCP",
          content: [
            "Other connection pools you may encounter:",
            "<ul>",
            "<li><strong>Vibur DBCP</strong> — modern, supports statement caching, async connection acquisition</li>",
            '<li><strong>Tomcat JDBC Pool</strong> — Tomcat\'s pool, also used in non-Tomcat apps</li>',
            "<li><strong>Apache Commons DBCP</strong> — older, less performant, but still common in legacy code</li>",
            "<li><strong>c3p0</strong> — older, but found in many Hibernate tutorials. Avoid for new projects.</li>",
            "<li><strong>Oracle Universal Connection Pool (UCP)</strong> — Oracle-specific, used with Oracle DB features</li>",
            "</ul>",
            "In 2024+, HikariCP is the default choice for nearly all new Java applications."
          ]
        },
        {
          heading: "Connection Pool Anti-Patterns",
          content: [
            "Things to avoid:",
            "<ul>",
            "<li><strong>Setting a huge pool size</strong> — most apps need 10-20 connections, not 200. The database also has connection limits.</li>",
            "<li><strong>Holding connections during slow operations</strong> — long HTTP calls, file uploads, blocking I/O. Do them outside the connection scope.</li>",
            "<li><strong>Forgetting to close</strong> — always use try-with-resources, or set <code>leakDetectionThreshold</code>.</li>",
            "<li><strong>Creating a pool per request</strong> — pools are expensive to create. One per app, singleton-style.</li>",
            '<li><strong>Disabling prepared-statement caching</strong> — HikariCP\'s <code>cachePrepStmts</code> gives huge performance wins.</li>',
            "<li><strong>No validation</strong> — stale connections in the pool cause random failures. Use <code>isValid</code> or a test query.</li>",
            "</ul>"
          ]
        },
        {
          heading: "Try it Yourself",
          content: [
            "Exercises:",
            "<ol>",
            "<li>Set up a <code>HikariDataSource</code> programmatically and use it from a DAO.</li>",
            "<li>Add <code>leakDetectionThreshold=10000</code> and write a method that intentionally forgets to close a connection — observe the warning log.</li>",
            "<li>Run a load test (e.g., JMeter, wrk) against a small endpoint that hits the DB, and observe the pool stats as load increases.</li>",
            "<li>Tune <code>maximumPoolSize</code> and compare average response time at different values.</li>",
            "<li>Expose HikariCP metrics to JMX or Prometheus and graph <code>activeConnections</code> over time.</li>",
            "<li>Compare HikariCP performance to a no-pool implementation by toggling the pool on and off in a stress test.</li>",
            "</ol>"
          ]
        }
      ]
    }
};



const javaModule8Content = {
  "unit-testing-fundamentals": {
    "title": "Unit Testing Fundamentals",
    "sections": [
      {
        "heading": "What is Unit Testing?",
        "content": [
          "A <strong>unit test</strong> verifies the behavior of the smallest testable unit of code — typically a single method or class — in isolation from the rest of the system.",
          "Unit tests are the foundation of any automated testing strategy. They are the fastest tests to run, the cheapest to write, and the most targeted in their feedback.",
          "The goal is to verify that each unit does what it is supposed to do, and to detect regressions when the code is changed later."
        ]
      },
      {
        "heading": "The Test Pyramid",
        "content": [
          "Mike Cohn's <strong>Test Pyramid</strong> is a useful model for thinking about how to balance your test suite:",
          "<ul><li><strong>Unit tests (base)</strong> — many, fast, isolated, test individual classes/methods</li><li><strong>Integration tests (middle)</strong> — fewer, test interactions between modules or with external systems (DB, web services)</li><li><strong>End-to-end / UI tests (top)</strong> — few, slow, expensive, test the entire system from the user's perspective</li></ul>",
          "A healthy test suite has a wide base of unit tests, fewer integration tests, and only a handful of end-to-end tests."
        ]
      },
      {
        "heading": "FIRST Principles",
        "content": [
          "A good unit test follows the <strong>FIRST</strong> principles:",
          "<ul>",
          "<li><strong>Fast</strong> — tests should run in milliseconds. Slow tests discourage frequent running.</li>",
          "<li><strong>Independent</strong> — tests should not depend on each other or on shared mutable state. Order should not matter.</li>",
          "<li><strong>Repeatable</strong> — running the same test in any environment should produce the same result. No reliance on time, randomness, or external state.</li>",
          "<li><strong>Self-validating</strong> — tests should automatically detect pass/fail with assertions. No manual inspection of output.</li>",
          "<li><strong>Timely</strong> — write tests close to when the production code is written (ideally first, as in TDD).</li>",
          "</ul>"
        ]
      },
      {
        "heading": "Arrange-Act-Assert (AAA) Pattern",
        "content": [
          "The most widely used structure for a single test is the <strong>Arrange-Act-Assert</strong> pattern (or Given-When-Then in BDD):",
          "<ul>",
          "<li><strong>Arrange</strong> — set up the objects, mocks, and preconditions the test needs</li>",
          "<li><strong>Act</strong> — invoke the method or behavior being tested</li>",
          "<li><strong>Assert</strong> — verify the expected outcome</li>",
          "</ul>",
          "Keep each section short and clear. A test with no clear AAA structure is hard to read and maintain."
        ],
        "code": "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculatorTest {\n\n    @Test\n    void add_twoPositiveNumbers_returnsSum() {\n        // Arrange\n        Calculator calc = new Calculator();\n\n        // Act\n        int result = calc.add(2, 3);\n\n        // Assert\n        assertEquals(5, result);\n    }\n}"
      },
      {
        "heading": "Test Naming Conventions",
        "content": [
          "Good test names document what the system does. Recommended patterns:",
          "<ul>",
          "<li><code>methodName_stateUnderTest_expectedBehavior</code> — e.g., <code>withdraw_insufficientFunds_throwsException</code></li>",
          "<li><code>givenX_whenY_thenZ</code> — BDD style</li>",
          "<li><code>should_doSomething_whenCondition</code> — common in TypeScript/JS</li>",
          "</ul>",
          "In JUnit 5, use the <code>@DisplayName</code> annotation to add a human-readable description that the test report will show."
        ],
        "code": "@Test\n@DisplayName(\"withdraw throws InsufficientFundsException when balance is below requested amount\")\nvoid withdraw_throwsException_whenInsufficientFunds() {\n    // ...\n}\n\n@Test\n@DisplayName(\"🐛 Should handle edge case of empty input\")\nvoid should_handleEmptyInput() {\n    // ...\n}"
      },
      {
        "heading": "Test Organization and Structure",
        "content": [
          "Common organizational patterns:",
          "<ul>",
          "<li><strong>Mirror the production package structure</strong> — <code>com.example.service.UserService</code> → <code>com.example.service.UserServiceTest</code></li>",
          "<li><strong>One test class per production class</strong> — keeps tests close to the code they test</li>",
          "<li><strong>Group related tests</strong> with JUnit 5's <code>@Nested</code> inner classes</li>",
          "<li><strong>Use descriptive test method names</strong> rather than comments</li>",
          "<li><strong>Place tests in <code>src/test/java</code></code> (Maven) or <code>src/test</code> (Gradle) so the build system can find them</li>",
          "</ul>"
        ]
      },
      {
        "heading": "Common Test Smells",
        "content": [
          "Watch out for these test smells:",
          "<ul>",
          "<li><strong>Long tests</strong> — if a test has dozens of lines, it probably tests too many things</li>",
          "<li><strong>Multiple unrelated assertions</strong> — split into separate tests so failures are precise</li>",
          "<li><strong>Test interdependence</strong> — tests that depend on other tests' side effects (use <code>@BeforeEach</code> to reset state)</li>",
          "<li><strong>Testing implementation details</strong> — test behavior, not private methods or internal state</li>",
          "<li><strong>Excessive mocking</strong> — if you mock everything, the test is decoupled from reality</li>",
          "<li><strong>Flaky tests</strong> — tests that pass sometimes and fail sometimes (often time-based or order-dependent)</li>",
          "<li><strong>Commented-out tests</strong> — delete them; version control remembers</li>",
          "</ul>"
        ]
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Write a <code>StringCalculator</code> class with an <code>add(String numbers)</code> method, then write 5 unit tests for it (empty string, single number, two numbers, etc.).</li>",
          "<li>Identify test smells in a sample test class: long methods, multiple asserts, shared state, etc.</li>",
          "<li>Refactor a poorly-named test (<code>test1</code>) into a descriptive AAA-structured test with <code>@DisplayName</code>.</li>",
          "<li>Verify your tests are independent: run them in a random order (JUnit 5 supports this) and confirm they all pass.</li>",
          "<li>Write a test that is NOT self-validating (requires manual inspection) and refactor it to be self-validating.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "junit5-basics": {
    "title": "JUnit 5 (Jupiter) Basics",
    "sections": [
      {
        "heading": "What is JUnit 5?",
        "content": [
          "<strong>JUnit 5</strong> (also known as <strong>Jupiter</strong>) is the current generation of the JUnit testing framework for Java. It was released in 2017 and is the de-facto standard for unit testing in Java.",
          "JUnit 5 is a complete rewrite of JUnit 4 with a modern, modular architecture, a new extension model, and powerful new features like nested tests, parameterized tests, and dynamic tests."
        ]
      },
      {
        "heading": "JUnit 5 Architecture",
        "content": [
          "JUnit 5 is split into three sub-projects:",
          "<ul>",
          "<li><strong>JUnit Platform</strong> — the foundation; provides the test engine API, console launcher, IDE integration, and build tool integration (Maven Surefire, Gradle)</li>",
          "<li><strong>JUnit Jupiter</strong> — the new programming and extension model; this is what you write tests with</li>",
          "<li><strong>JUnit Vintage</strong> — a compatibility layer for running old JUnit 3 and JUnit 4 tests on the JUnit 5 platform</li>",
          "</ul>",
          "You typically depend on <code>junit-jupiter</code> (which aggregates Jupiter API + engine) and let your IDE/build tool pick up the platform."
        ]
      },
      {
        "heading": "Setting Up JUnit 5",
        "content": [
          "Add the JUnit Jupiter dependency to your build file. The version is the same for all artifacts in a given release."
        ],
        "code": "<!-- Maven: pom.xml -->\n<dependency>\n    <groupId>org.junit.jupiter</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <version>5.10.2</version>\n    <scope>test</scope>\n</dependency>\n\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>3.2.5</version>\n</plugin>\n\n<!-- Gradle: build.gradle -->\ndependencies {\n    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.2'\n    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'\n}\n\ntasks.named('test') {\n    useJUnitPlatform()\n}"
      },
      {
        "heading": "The @Test Annotation",
        "content": [
          "Mark a method with <code>@Test</code> to make it a test. The method should be <code>void</code>, package-private (no access modifier in JUnit 5 — no need for <code>public</code>), and should not return a value.",
          "Test methods can throw <code>Exception</code> directly — no need to catch checked exceptions inside the test."
        ],
        "code": "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculatorTest {\n\n    @Test\n    void add_returnsSumOfTwoNumbers() {\n        Calculator calc = new Calculator();\n        assertEquals(5, calc.add(2, 3));\n    }\n\n    @Test\n    void divide_byZero_throwsArithmeticException() {\n        Calculator calc = new Calculator();\n        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));\n    }\n}"
      },
      {
        "heading": "Core Assertions",
        "content": [
          "JUnit 5 provides a rich set of assertion methods in <code>org.junit.jupiter.api.Assertions</code>:"
        ],
        "code": "import static org.junit.jupiter.api.Assertions.*;\n\n@Test\nvoid assertionsDemo() {\n    // Equality\n    assertEquals(5, calc.add(2, 3));\n    assertEquals(5, calc.add(2, 3), \"Optional message shown on failure\");\n    assertEquals(5.0, calc.add(2.0, 3.0), 0.001, \"Delta for double comparison\");\n\n    // Boolean\n    assertTrue(result > 0);\n    assertFalse(result < 0);\n\n    // Nullability\n    assertNull(maybeNull);\n    assertNotNull(definitelyNotNull);\n\n    // References\n    assertSame(obj1, obj2);    // same object (==)\n    assertNotSame(obj1, obj2);\n\n    // Arrays\n    assertArrayEquals(new int[]{1, 2, 3}, result);\n\n    // Exceptions\n    assertThrows(IllegalArgumentException.class, () -> parseInt(\"not a number\"));\n    assertDoesNotThrow(() -> parseInt(\"42\"));\n\n    // Grouped assertions — all run, even if some fail\n    User u = userService.findById(1L);\n    assertAll(\"user\",\n        () -> assertEquals(\"Sudhakar\", u.getName()),\n        () -> assertEquals(30, u.getAge()),\n        () -> assertEquals(\"hyd@example.com\", u.getEmail())\n    );\n}"
      },
      {
        "heading": "Lifecycle Annotations",
        "content": [
          "JUnit 5 provides annotations to run setup/teardown code around tests:"
        ],
        "code": "import org.junit.jupiter.api.*;\n\nclass DatabaseTest {\n    private Database db;\n\n    @BeforeAll\n    static void initDatabase() {\n        // Runs ONCE before all tests in this class\n        // Must be static (or use @TestInstance(Lifecycle.PER_CLASS))\n        System.out.println(\"Connecting to test database\");\n    }\n\n    @BeforeEach\n    void setUp() {\n        // Runs BEFORE EACH test method\n        // Use for fresh per-test state\n        db = new Database();\n        db.connect();\n    }\n\n    @Test\n    void queryReturnsResults() {\n        // use db\n    }\n\n    @AfterEach\n    void tearDown() {\n        // Runs AFTER EACH test method\n        // Clean up resources\n        db.disconnect();\n    }\n\n    @AfterAll\n    static void cleanupDatabase() {\n        // Runs ONCE after all tests\n        System.out.println(\"Dropping test database\");\n    }\n}"
      },
      {
        "heading": "Running Tests",
        "content": [
          "Tests can be run from the command line, IDE, or build tool:"
        ],
        "code": "// Maven — runs all tests in src/test/java\n$ mvn test\n\n// Maven — run a specific test class\n$ mvn test -Dtest=CalculatorTest\n\n// Maven — run a specific test method\n$ mvn test -Dtest=CalculatorTest#add_returnsSumOfTwoNumbers\n\n// Gradle\n$ gradle test\n$ gradle test --tests CalculatorTest\n$ gradle test --tests CalculatorTest.add_returnsSumOfTwoNumbers\n\n// JUnit Platform Console Launcher (run JUnit tests from a JAR)\n$ java -jar junit-platform-console-launcher.jar --class-path target/test-classes --scan-class-path\n\n// IDE: Right-click class/method → Run As → JUnit Test\n// IntelliJ: Ctrl+Shift+F10 (Windows/Linux) or Cmd+Shift+R (macOS)\n// Eclipse: Alt+Shift+X, T"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Set up a new Maven/Gradle project with JUnit 5 and write a \"Hello World\" test that always passes.</li>",
          "<li>Write tests for a <code>StringUtils</code> class with methods like <code>isEmpty</code>, <code>reverse</code>, and <code>truncate</code>.</li>",
          "<li>Use <code>assertAll</code> to group related assertions about a complex object (e.g., a User record).</li>",
          "<li>Use <code>@BeforeEach</code> to set up test fixtures and <code>@AfterEach</code> to clean up.</li>",
          "<li>Use <code>assertThrows</code> to verify an exception is thrown under the right condition.</li>",
          "<li>Run a specific test method from the command line and observe the output.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "junit5-advanced": {
    "title": "JUnit 5 Advanced Features",
    "sections": [
      {
        "heading": "@Nested — Grouping Related Tests",
        "content": [
          "<code>@Nested</code> lets you group related tests into inner classes. The nested class must be non-static and can have its own <code>@BeforeEach</code> / <code>@AfterEach</code> methods.",
          "The test report shows the nesting hierarchy, which makes complex test classes much easier to read."
        ],
        "code": "import org.junit.jupiter.api.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass StackTest {\n    private Stack<Integer> stack;\n\n    @BeforeEach\n    void setUp() {\n        stack = new Stack<>();\n    }\n\n    @Nested\n    class WhenEmpty {\n        @Test\n        void isEmpty_returnsTrue() {\n            assertTrue(stack.isEmpty());\n        }\n\n        @Test\n        void pop_throwsException() {\n            assertThrows(EmptyStackException.class, stack::pop);\n        }\n    }\n\n    @Nested\n    class AfterPushing {\n        @BeforeEach\n        void pushOne() {\n            stack.push(42);\n        }\n\n        @Test\n        void isEmpty_returnsFalse() {\n            assertFalse(stack.isEmpty());\n        }\n\n        @Test\n        void pop_returnsThePushedValue() {\n            assertEquals(42, stack.pop());\n        }\n    }\n}"
      },
      {
        "heading": "@DisplayName — Readable Test Names",
        "content": [
          "<code>@DisplayName</code> lets you specify a human-readable name for a test class or method. The name is shown in the test report and IDE test runner.",
          "It supports spaces, punctuation, and even emoji."
        ],
        "code": "@DisplayName(\"Calculator operations\")\nclass CalculatorTest {\n\n    @Test\n    @DisplayName(\"Addition of two positive integers\")\n    void add() {\n        // ...\n    }\n\n    @Test\n    @DisplayName(\"🐛 Division by zero throws ArithmeticException\")\n    void divideByZero() {\n        // ...\n    }\n\n    @Test\n    @DisplayName(\"⚠ Edge case: very large numbers\")\n    void largeNumbers() {\n        // ...\n    }\n}"
      },
      {
        "heading": "@Disabled, @EnabledOnOs, @EnabledIf",
        "content": [
          "JUnit 5 supports conditional test execution — skip tests on certain conditions instead of failing them."
        ],
        "code": "import org.junit.jupiter.api.*;\nimport org.junit.jupiter.api.condition.*;\n\n@Disabled(\"Under construction — see ticket #123\")\nclass FeatureNotYetImplementedTest {\n    // All tests in this class are skipped\n}\n\nclass ConditionalTests {\n\n    @Test\n    @DisabledOnOs(OS.WINDOWS)\n    void onlyRunOnUnix() {\n        // Skipped on Windows\n    }\n\n    @Test\n    @EnabledOnOs({OS.LINUX, OS.MAC})\n    void onlyRunOnLinuxOrMac() {\n        // Skipped on Windows\n    }\n\n    @Test\n    @EnabledIfEnvironmentVariable(named = \"CI\", matches = \"true\")\n    void onlyRunInCI() {\n        // Only runs when CI=true env var is set\n    }\n\n    @Test\n    @EnabledIfSystemProperty(named = \"os.arch\", matches = \"amd64\")\n    void onlyRunOnAmd64() {\n        // ...\n    }\n\n    @Test\n    @DisabledIf(\"someStaticMethod\")\n    void skipIfCondition() {\n        // Skipped if someStaticMethod() returns true\n    }\n}"
      },
      {
        "heading": "@Tag — Categorizing Tests",
        "content": [
          "<code>@Tag</code> lets you label tests with categories. You can then run only certain tags from the command line or build configuration.",
          "Common uses: <code>\"fast\"</code> vs <code>\"slow\"</code>, <code>\"unit\"</code> vs <code>\"integration\"</code>, <code>\"smoke\"</code> for quick sanity checks."
        ],
        "code": "import org.junit.jupiter.api.Tag;\n\n@Tag(\"unit\")\nclass FastUnitTests {\n    @Test\n    @Tag(\"smoke\")\n    void basicSanity() { /* ... */ }\n\n    @Test\n    void normalTest() { /* ... */ }\n}\n\n@Tag(\"integration\")\nclass SlowIntegrationTests {\n    @Test\n    void connectsToDatabase() { /* ... */ }\n}\n\n// Maven — run only \"unit\" tests by default\n<plugin>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <configuration>\n        <groups>unit</groups>\n        <excludedGroups>integration</excludedGroups>\n    </configuration>\n</plugin>\n\n// Run only smoke tests\n// mvn test -Dgroups=smoke"
      },
      {
        "heading": "@Order and Test Instance Lifecycle",
        "content": [
          "By default, JUnit 5 runs tests in a deterministic but unspecified order. You can control the order with <code>@TestMethodOrder</code> and <code>@Order</code>.",
          "Test instance lifecycle: by default, JUnit creates a new instance of the test class for each test method (<code>PER_METHOD</code>). Switch to <code>PER_CLASS</code> to share instance state across tests."
        ],
        "code": "import org.junit.jupiter.api.*;\n\n@TestMethodOrder(MethodOrderer.OrderAnnotation.class)\nclass OrderedTests {\n    @Test\n    @Order(1)\n    void first() { /* runs first */ }\n\n    @Test\n    @Order(2)\n    void second() { /* runs second */ }\n}\n\n@TestMethodOrder(MethodOrderer.DisplayName.class)  // alphabetical by display name\n@TestMethodOrder(MethodOrderer.Random.class)       // random\nclass OtherOrderings { /* ... */ }\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass SharedInstanceTest {\n    private final List<String> events = new ArrayList<>();\n\n    @Test\n    void test1() { events.add(\"test1\"); }\n\n    @Test\n    void test2() {\n        // events contains \"test1\" from previous test\n        assertEquals(List.of(\"test1\"), events);\n    }\n\n    @BeforeAll\n    void setUpAll() { /* can be non-static now */ }\n}"
      },
      {
        "heading": "Assumptions — Conditional Test Execution",
        "content": [
          "Assumptions let you skip a test at runtime if a precondition is not met, without marking the test as failed.",
          "Use them when a test only makes sense under certain conditions (a specific environment, a particular file present, etc.)."
        ],
        "code": "import static org.junit.jupiter.api.Assumptions.*;\n\n@Test\nvoid testOnlyOnCiServer() {\n    assumeTrue(System.getenv(\"CI\") != null, \"Skipping: not on CI\");\n    // This code only runs if CI env var is set\n    // Otherwise, the test is marked as \"skipped\" (aborted), not failed\n}\n\n@Test\nvoid conditionalLogic() {\n    assumingThat(System.getProperty(\"os.name\").startsWith(\"Mac\"),\n        () -> {\n            // Mac-specific assertions\n        });\n\n    // These assertions run regardless\n    assertEquals(2, 1 + 1);\n}"
      },
      {
        "heading": "Timeouts",
        "content": [
          "JUnit 5 has multiple ways to assert that code runs within a time limit:"
        ],
        "code": "import org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.Timeout;\nimport java.time.Duration;\nimport java.util.concurrent.TimeUnit;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass TimeoutTests {\n\n    // 1. Annotation — fail if test takes longer than 500ms\n    @Test\n    @Timeout(value = 500, unit = TimeUnit.MILLISECONDS)\n    void fastOperation() {\n        // ...\n    }\n\n    // 2. Using Duration\n    @Test\n    @Timeout(value = 2, unit = TimeUnit.SECONDS)\n    void mediumOperation() {\n        // ...\n    }\n\n    // 3. assertTimeout — runs the operation, fails if it exceeds the timeout\n    //    Returns the operation's result\n    @Test\n    void assertionWithTimeout() {\n        String result = assertTimeout(Duration.ofSeconds(1), () -> {\n            return slowService.compute();\n        });\n        assertEquals(\"expected\", result);\n    }\n\n    // 4. assertTimeoutPreemptively — interrupts the thread if timeout exceeded\n    //    Use carefully: can leave resources in an inconsistent state\n    @Test\n    void preemptiveTimeout() {\n        assertTimeoutPreemptively(Duration.ofMillis(100), () -> {\n            // Long operation that will be interrupted\n        });\n    }\n}"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Refactor a flat test class with many similar tests into a <code>@Nested</code> hierarchy organized by state (empty vs. populated, valid vs. invalid input).</li>",
          "<li>Add <code>@DisplayName</code> with emoji to a few tests and run them in your IDE to see the report.</li>",
          "<li>Tag your tests with <code>@Tag(\"fast\")</code> and <code>@Tag(\"slow\")</code>, then run only the fast tests via Maven Surefire configuration.</li>",
          "<li>Use <code>@DisabledOnOs(OS.WINDOWS)</code> on a test that has platform-specific behavior, and verify it skips on Windows.</li>",
          "<li>Add a <code>@Timeout</code> to a test that calls a slow external system, and verify the timeout works.</li>",
          "<li>Use <code>assertAll</code> to group assertions about a complex object so all failures show up in the report at once.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "assertj-hamcrest": {
    "title": "Assertions with AssertJ and Hamcrest",
    "sections": [
      {
        "heading": "Why Fluent Assertions?",
        "content": [
          "JUnit's built-in assertions (e.g., <code>assertEquals(expected, actual)</code>) work but can be hard to read for complex conditions. They also have a confusing argument order (expected, actual) that is easy to get backwards.",
          "<strong>Fluent assertion libraries</strong> like AssertJ and Hamcrest let you chain calls in a natural, readable way: <code>assertThat(result).isNotNull().isEqualTo(expected).extracting(...)</code>."
        ]
      },
      {
        "heading": "AssertJ Setup",
        "content": [
          "AssertJ is a separate library that you add to your project. It provides a fluent, type-safe assertion API."
        ],
        "code": "<!-- Maven -->\n<dependency>\n    <groupId>org.assertj</groupId>\n    <artifactId>assertj-core</artifactId>\n    <version>3.25.3</version>\n    <scope>test</scope>\n</dependency>\n\n<!-- Gradle -->\ntestImplementation 'org.assertj:assertj-core:3.25.3'"
      },
      {
        "heading": "AssertJ Basic Assertions",
        "content": [
          "The <code>assertThat(...)</code> entry point returns a type-specific assertion object whose methods can be chained."
        ],
        "code": "import static org.assertj.core.api.Assertions.*;\n\nclass AssertJDemo {\n\n    @Test\n    void basicAssertions() {\n        String name = \"Sudhakar\";\n\n        // String assertions\n        assertThat(name)\n            .isNotNull()\n            .isNotEmpty()\n            .startsWith(\"Su\")\n            .endsWith(\"kar\")\n            .hasSize(8)\n            .contains(\"dha\")\n            .matches(\"[A-Z][a-z]+\");\n\n        // Number assertions\n        assertThat(42)\n            .isPositive()\n            .isGreaterThan(40)\n            .isBetween(0, 100)\n            .isCloseTo(42.0, within(0.001));\n\n        // Boolean\n        assertThat(true).isTrue();\n        assertThat(list).isNotEmpty().hasSize(3);\n    }\n}"
      },
      {
        "heading": "AssertJ Collection Assertions",
        "content": [
          "AssertJ has powerful collection assertions:"
        ],
        "code": "import static org.assertj.core.api.Assertions.*;\nimport java.util.List;\n\n@Test\nvoid collectionAssertions() {\n    List<String> names = List.of(\"Alice\", \"Bob\", \"Carol\");\n\n    // Size and content\n    assertThat(names)\n        .hasSize(3)\n        .contains(\"Alice\", \"Carol\")\n        .containsExactly(\"Alice\", \"Bob\", \"Carol\")\n        .containsExactlyInAnyOrder(\"Bob\", \"Alice\", \"Carol\")\n        .doesNotContain(\"Dave\")\n        .startsWith(\"Alice\")\n        .endsWith(\"Carol\");\n\n    // Single element\n    assertThat(names)\n        .first().isEqualTo(\"Alice\")\n        .last().isEqualTo(\"Carol\")\n        .element(1).isEqualTo(\"Bob\");\n\n    // Filtering and extraction\n    assertThat(names)\n        .filteredOn(s -> s.startsWith(\"A\"))\n        .hasSize(1)\n        .containsExactly(\"Alice\");\n\n    assertThat(names)\n        .extracting(String::length)\n        .containsExactly(5, 3, 5);\n}"
      },
      {
        "heading": "Soft Assertions",
        "content": [
          "Soft assertions collect all failures instead of stopping at the first one. Useful for assertions about a single complex object."
        ],
        "code": "import org.assertj.core.api.SoftAssertions;\n\n@Test\nvoid softAssertions() {\n    User user = userService.findById(1L);\n\n    // All assertions run; all failures are reported together\n    SoftAssertions soft = new SoftAssertions();\n    soft.assertThat(user.getName()).isEqualTo(\"Sudhakar\");\n    soft.assertThat(user.getAge()).isGreaterThanOrEqualTo(18);\n    soft.assertThat(user.getEmail()).contains(\"@\");\n    soft.assertThat(user.isActive()).isTrue();\n    soft.assertAll();  // throws if any failed\n}\n\n// Or use auto-close for inline style\n@Test\nvoid autoCloseSoftAssertions() {\n    try (SoftAssertions soft = new SoftAssertions()) {\n        soft.assertThat(user.getName()).isEqualTo(\"Sudhakar\");\n        soft.assertThat(user.getAge()).isGreaterThanOrEqualTo(18);\n        // No need for explicit assertAll() — auto-closes and reports\n    }\n}"
      },
      {
        "heading": "Exception Assertions with AssertJ",
        "content": [
          "AssertJ has a dedicated BDD-style API for testing exceptions:"
        ],
        "code": "import static org.assertj.core.api.Assertions.*;\n\n@Test\nvoid exceptionAssertions() {\n    // Verify exception type\n    assertThatThrownBy(() -> parser.parse(\"not a number\"))\n        .isInstanceOf(IllegalArgumentException.class)\n        .hasMessageContaining(\"not a number\")\n        .hasMessageStartingWith(\"Could not parse\")\n        .hasCauseInstanceOf(NumberFormatException.class);\n\n    // Test that no exception is thrown\n    assertThatCode(() -> calculator.add(1, 2))\n        .doesNotThrowAnyException();\n\n    // Verify exception is thrown\n    assertThatExceptionOfType(IllegalStateException.class)\n        .isThrownBy(() -> service.start())\n        .withMessage(\"Service is already running\")\n        .withNoCause();\n}"
      },
      {
        "heading": "Hamcrest Matchers",
        "content": [
          "<strong>Hamcrest</strong> is an older matcher library that was popular before AssertJ. JUnit 5 itself uses Hamcrest internally for some assertions. You can still use it, but AssertJ is generally preferred for new projects."
        ],
        "code": "import static org.hamcrest.MatcherAssert.*;\nimport static org.hamcrest.Matchers.*;\n\nclass HamcrestDemo {\n    @Test\n    void hamcrestExample() {\n        String name = \"Sudhakar\";\n        List<String> names = List.of(\"Alice\", \"Bob\", \"Carol\");\n\n        // Basic matchers\n        assertThat(name, is(\"Sudhakar\"));\n        assertThat(name, not(\"Alice\"));\n        assertThat(name, containsString(\"dha\"));\n        assertThat(name, startsWith(\"Su\"));\n\n        // Collections\n        assertThat(names, hasSize(3));\n        assertThat(names, hasItem(\"Alice\"));\n        assertThat(names, contains(\"Alice\", \"Bob\", \"Carol\"));\n        assertThat(names, containsInAnyOrder(\"Bob\", \"Alice\", \"Carol\"));\n        assertThat(names, everyItem(matchesPattern(\"[A-Z][a-z]+\")));\n\n        // Combined\n        assertThat(name, allOf(startsWith(\"Su\"), endsWith(\"kar\")));\n        assertThat(name, anyOf(is(\"Bob\"), is(\"Sudhakar\")));\n    }\n}"
      },
      {
        "heading": "AssertJ vs Hamcrest — When to Use Each",
        "content": [
          "Comparison:",
          "<ul>",
          "<li><strong>AssertJ</strong> — modern, fluent, type-safe, better error messages, easy to extend with custom assertions. <strong>Recommended for new projects.</strong></li>",
          "<li><strong>Hamcrest</strong> — older, composable matchers, more functional style. Good if you already use it or work with code that does.</li>",
          "<li><strong>JUnit 5 assertions</strong> — built-in, no extra dependency, basic but sufficient for many tests.</li>",
          "</ul>",
          "You can use all three in the same project — they are not mutually exclusive. Many teams use JUnit for lifecycle and AssertJ for assertions."
        ]
      },
      {
        "heading": "Custom Assertions in AssertJ",
        "content": [
          "AssertJ makes it easy to create custom assertion classes for your domain objects. This gives you a fluent, type-safe API for your own types."
        ],
        "code": "import org.assertj.core.api.AbstractAssert;\n\npublic class UserAssert extends AbstractAssert<UserAssert, User> {\n\n    public UserAssert(User user) {\n        super(user, UserAssert.class);\n    }\n\n    public static UserAssert assertThat(User actual) {\n        return new UserAssert(actual);\n    }\n\n    public UserAssert hasName(String expected) {\n        isNotNull();\n        if (!actual.getName().equals(expected)) {\n            failWithMessage(\"Expected name to be <%s> but was <%s>\", expected, actual.getName());\n        }\n        return this;\n    }\n\n    public UserAssert isAdult() {\n        isNotNull();\n        if (actual.getAge() < 18) {\n            failWithMessage(\"Expected user to be adult but age was <%d>\", actual.getAge());\n        }\n        return this;\n    }\n\n    public UserAssert hasEmail(String expected) {\n        isNotNull();\n        if (!actual.getEmail().equals(expected)) {\n            failWithMessage(\"Expected email <%s> but was <%s>\", expected, actual.getEmail());\n        }\n        return this;\n    }\n}\n\n// Usage in a test\n@Test\nvoid customAssertionExample() {\n    User user = userService.findById(1L);\n\n    UserAssert.assertThat(user)\n        .hasName(\"Sudhakar\")\n        .isAdult()\n        .hasEmail(\"sudhakar@example.com\");\n}"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Add AssertJ to a project and convert a few JUnit assertions to AssertJ fluent style.</li>",
          "<li>Use AssertJ's collection assertions (<code>containsExactly</code>, <code>extracting</code>, <code>filteredOn</code>) on a list of domain objects.</li>",
          "<li>Use <code>SoftAssertions</code> to verify multiple properties of a single object in one test.</li>",
          "<li>Use <code>assertThatThrownBy</code> to verify an exception's message, cause, and type.</li>",
          "<li>Create a custom AssertJ assertion for a domain class (e.g., <code>OrderAssert</code>, <code>ProductAssert</code>).</li>",
          "<li>Compare the error messages of a JUnit assertion vs an AssertJ assertion when the test fails.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "parameterized-tests": {
    "title": "Parameterized Tests",
    "sections": [
      {
        "heading": "What Are Parameterized Tests?",
        "content": [
          "A <strong>parameterized test</strong> runs the same test logic with different inputs. This is useful for:",
          "<ul>",
          "<li>Testing boundary conditions (empty, one, many, max, min)</li>",
          "<li>Verifying behavior across a range of valid inputs</li>",
          "<li>Reducing test code duplication</li>",
          "</ul>",
          "In JUnit 5, parameterized tests are part of the <code>junit-jupiter-params</code> artifact (included in the umbrella <code>junit-jupiter</code> dependency)."
        ]
      },
      {
        "heading": "@ParameterizedTest with @ValueSource",
        "content": [
          "The simplest way to provide parameters is <code>@ValueSource</code>. It takes an array of literals."
        ],
        "code": "import org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.ValueSource;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass ValueSourceExample {\n\n    @ParameterizedTest\n    @ValueSource(strings = {\"racecar\", \"level\", \"radar\", \"madam\"})\n    void palindrome(String candidate) {\n        assertTrue(isPalindrome(candidate));\n    }\n\n    @ParameterizedTest\n    @ValueSource(ints = {1, 3, 5, 7, 9, 11, 99})\n    void oddNumbers(int n) {\n        assertTrue(n % 2 == 1, n + \" should be odd\");\n    }\n\n    @ParameterizedTest\n    @ValueSource(doubles = {0.0, 1.0, 2.5, 99.99})\n    void positiveDoubles(double d) {\n        assertTrue(d >= 0);\n    }\n\n    // Available: ints, longs, doubles, floats, shorts, bytes,\n    //           strings, classes, chars\n}"
      },
      {
        "heading": "@MethodSource — Dynamic Test Data",
        "content": [
          "For more complex test data, use <code>@MethodSource</code> to provide parameters from a static method.",
          "The method must return a <code>Stream</code>, <code>Iterable</code>, or array of <code>Arguments</code> or any type."
        ],
        "code": "import org.junit.jupiter.params.provider.Arguments;\nimport org.junit.jupiter.params.provider.MethodSource;\nimport java.util.stream.Stream;\nimport static org.junit.jupiter.params.provider.Arguments.of;\n\nclass MethodSourceExample {\n\n    // Stream of single values\n    static Stream<String> validNames() {\n        return Stream.of(\"Alice\", \"Bob\", \"Carol\", \"Dave\");\n    }\n\n    @ParameterizedTest\n    @MethodSource(\"validNames\")\n    void testValidNames(String name) {\n        assertNotNull(UserService.validateName(name));\n    }\n\n    // Stream of Arguments (multiple parameters)\n    static Stream<Arguments> additionCases() {\n        return Stream.of(\n            of(2, 3, 5),\n            of(0, 0, 0),\n            of(-1, 1, 0),\n            of(100, 200, 300),\n            of(Integer.MAX_VALUE, 1, Integer.MIN_VALUE)  // overflow test\n        );\n    }\n\n    @ParameterizedTest\n    @MethodSource(\"additionCases\")\n    void additionWorks(int a, int b, int expected) {\n        assertEquals(expected, new Calculator().add(a, b));\n    }\n\n    // Default method name is the test method name + \"Stream\"\n    static Stream<Arguments> palindromeTestStream() { /* ... */ }\n\n    @ParameterizedTest\n    @MethodSource  // No name — uses default\n    void palindromeTest(String s, boolean expected) { /* ... */ }\n}"
      },
      {
        "heading": "@CsvSource and @CsvFileSource",
        "content": [
          "For data in tabular form, <code>@CsvSource</code> lets you embed CSV directly in the annotation. <code>@CsvFileSource</code> reads from a CSV file in your test resources."
        ],
        "code": "@ParameterizedTest\n@CsvSource({\n    \"apple,          1.50\",\n    \"banana,         0.50\",\n    \"cherry,         3.00\",\n    \"'ice cream',    5.00\"        // quote strings with commas\n})\nvoid productPrice(String name, double price) {\n    Product p = catalog.findByName(name);\n    assertEquals(price, p.getPrice(), 0.001);\n}\n\n// With headers\n@ParameterizedTest\n@CsvSource({\n    \"username, password, expected\",\n    \"alice,     secret,   true\",\n    \"bob,       wrong,    false\",\n    \"'',        secret,   false\",\n    \"alice,     '',       false\"\n})\nvoid loginTest(String username, String password, boolean expected) {\n    assertEquals(expected, authService.login(username, password).isSuccess());\n}\n\n// From a CSV file\n@ParameterizedTest\n@CsvFileSource(resources = \"/test-data/orders.csv\", numLinesToSkip = 1)\nvoid orderProcessing(int orderId, String customer, double amount) {\n    Order order = orderService.process(orderId);\n    assertEquals(customer, order.getCustomer());\n    assertEquals(amount, order.getAmount(), 0.01);\n}"
      },
      {
        "heading": "@EnumSource — Iterate Over Enum Values",
        "content": [
          "Iterate over all values of an enum, or a subset:"
        ],
        "code": "import org.junit.jupiter.params.provider.EnumSource;\nimport org.junit.jupiter.params.provider.EnumSource.Mode;\n\nenum Status { ACTIVE, INACTIVE, PENDING, DELETED }\n\nclass EnumSourceExample {\n\n    @ParameterizedTest\n    @EnumSource(Status.class)\n    void allStatusesAreHandled(Status status) {\n        // Runs 4 times — once for each enum value\n        assertDoesNotThrow(() -> userService.handleStatus(status));\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = Status.class, names = {\"ACTIVE\", \"INACTIVE\"})\n    void onlyActiveAndInactive(Status status) {\n        // Runs 2 times\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = Status.class, mode = EnumSource.Mode.EXCLUDE, names = {\"DELETED\"})\n    void allExceptDeleted(Status status) {\n        // Runs 3 times\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = Status.class, mode = EnumSource.Mode.MATCH_ALL,\n                names = \"^(ACTIVE|PENDING)$\")  // regex\n    void matchedByRegex(Status status) {\n        // Runs 2 times\n    }\n}"
      },
      {
        "heading": "@NullSource, @EmptySource, @NullAndEmptySource",
        "content": [
          "Specialized sources for null and empty values — common edge cases for input validation:"
        ],
        "code": "import org.junit.jupiter.params.provider.*;\n\nclass NullAndEmptySourceExample {\n\n    @ParameterizedTest\n    @NullSource\n    @ValueSource(strings = {\"\", \"  \", \"\t\", \"\n\"})\n    void invalidInputs_throwException(String input) {\n        assertThrows(IllegalArgumentException.class,\n                     () -> validator.validate(input));\n    }\n\n    @ParameterizedTest\n    @NullAndEmptySource\n    @ValueSource(ints = {-1, 0})\n    void invalidNumbers_throwException(int n) {\n        assertThrows(IllegalArgumentException.class,\n                     () -> calculator.factorial(n));\n    }\n}"
      },
      {
        "heading": "Custom Argument Providers",
        "content": [
          "For complete control, implement the <code>ArgumentsProvider</code> interface:"
        ],
        "code": "import org.junit.jupiter.api.extension.ExtensionContext;\nimport org.junit.jupiter.params.provider.Arguments;\nimport org.junit.jupiter.params.provider.ArgumentsProvider;\nimport java.util.stream.Stream;\n\npublic class ValidUserProvider implements ArgumentsProvider {\n    @Override\n    public Stream<? extends Arguments> provideArguments(ExtensionContext context) {\n        return Stream.of(\n            Arguments.of(new User(\"alice\", \"alice@example.com\", 25)),\n            Arguments.of(new User(\"bob\", \"bob@example.com\", 30)),\n            Arguments.of(new User(\"carol\", \"carol@example.com\", 17))  // minor\n        );\n    }\n}\n\n// Use it\n@ParameterizedTest\n@ArgumentsSource(ValidUserProvider.class)\nvoid testValidUsers(User user) {\n    assertNotNull(userService.save(user));\n}\n\n// Combine multiple sources\n@ParameterizedTest\n@MethodSource(\"getUserAges\")\nvoid ageBasedTests(int age, boolean isAdult) {\n    User user = new User(\"Test\", \"test@example.com\", age);\n    assertEquals(isAdult, user.isAdult());\n}\n\nstatic Stream<Arguments> getUserAges() {\n    return Stream.of(\n        Arguments.of(0, false),\n        Arguments.of(17, false),\n        Arguments.of(18, true),\n        Arguments.of(99, true)\n    );\n}"
      },
      {
        "heading": "Custom Test Names",
        "content": [
          "By default, parameterized tests are named <code>[1] foo</code>, <code>[2] foo</code>, etc. You can customize the name with placeholders."
        ],
        "code": "@ParameterizedTest(name = \"[{index}] {0} + {1} = {2}\")\n@MethodSource(\"additionCases\")\nvoid additionWithCustomName(int a, int b, int expected) {\n    assertEquals(expected, a + b);\n}\n// Names: \"[1] 2 + 3 = 5\", \"[2] 0 + 0 = 0\", etc.\n\n@ParameterizedTest(name = \"{0} should be valid email\")\n@ValueSource(strings = {\"a@b.c\", \"user@domain.com\", \"x.y.z@example.org\"})\nvoid validEmails(String email) {\n    assertTrue(EmailValidator.isValid(email));\n}\n\n@ParameterizedTest(name = \"[{index}] age {0} → {1}\")\n@CsvSource({\n    \"0,   infant\",\n    \"5,   child\",\n    \"13,  teenager\",\n    \"20,  adult\",\n    \"70,  senior\"\n})\nvoid ageCategories(int age, String expectedCategory) {\n    assertEquals(expectedCategory, classifier.categorize(age));\n}"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Write a <code>palindrome</code> test using <code>@ValueSource(strings = {...})</code> with at least 5 test cases.</li>",
          "<li>Use <code>@CsvSource</code> to test an email validator with 5 different email addresses and expected results.</li>",
          "<li>Use <code>@MethodSource</code> to test an addition function with edge cases (large numbers, negatives, zero, overflow).</li>",
          "<li>Use <code>@EnumSource</code> to test that a method handles every value of an enum without throwing.</li>",
          "<li>Use <code>@NullAndEmptySource</code> + <code>@ValueSource</code> to test that a string parser handles invalid inputs.</li>",
          "<li>Create a custom <code>ArgumentsProvider</code> that reads test data from a JSON file.</li>",
          "<li>Customize the test names with the <code>name</code> attribute and verify they appear in the test report.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "mockito": {
    "title": "Mockito - Mocking and Stubbing",
    "sections": [
      {
        "heading": "What is Mocking?",
        "content": [
          "A <strong>mock</strong> is a test double that replaces a real object with a controlled substitute. You can:",
          "<ul>",
          "<li><strong>Stub</strong> methods to return specific values or throw exceptions</li>",
          "<li><strong>Verify</strong> that methods were called with specific arguments</li>",
          "<li><strong>Isolate</strong> the code under test from its dependencies</li>",
          "<li><strong>Speed up</strong> tests by avoiding slow real operations (DB, HTTP)</li>",
          "<li><strong>Make tests deterministic</strong> by controlling time, randomness, and external state</li>",
          "</ul>",
          "<strong>Mockito</strong> is the most popular mocking framework for Java."
        ]
      },
      {
        "heading": "Setting Up Mockito",
        "content": [
          "Add Mockito to your project. Mockito 5.x supports Java 11+ and integrates with JUnit 5."
        ],
        "code": "<!-- Maven -->\n<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <version>5.11.0</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-junit-jupiter</artifactId>\n    <version>5.11.0</version>\n    <scope>test</scope>\n</dependency>\n\n<!-- Gradle -->\ntestImplementation 'org.mockito:mockito-core:5.11.0'\ntestImplementation 'org.mockito:mockito-junit-jupiter:5.11.0'"
      },
      {
        "heading": "Creating Mocks",
        "content": [
          "Use the <code>@ExtendWith(MockitoExtension.class)</code> annotation to enable Mockito's JUnit 5 integration. Then use <code>@Mock</code> on fields to create mocks automatically."
        ],
        "code": "import org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport java.util.List;\n\n@ExtendWith(MockitoExtension.class)\nclass MockExample {\n\n    @Mock\n    List<String> mockedList;\n\n    @Test\n    void usingMock() {\n        // Stub behavior\n        when(mockedList.get(0)).thenReturn(\"first\");\n        when(mockedList.size()).thenReturn(42);\n\n        // Use the mock\n        assertEquals(\"first\", mockedList.get(0));\n        assertEquals(42, mockedList.size());\n        assertNull(mockedList.get(99));  // not stubbed → null\n    }\n\n    // Programmatic creation (without @Mock)\n    @Test\n    void programmaticMock() {\n        List<String> mock = mock(List.class);\n        when(mock.size()).thenReturn(10);\n        assertEquals(10, mock.size());\n    }\n}"
      },
      {
        "heading": "Stubbing Methods",
        "content": [
          "Stubbing controls what a mock returns when its methods are called. Mockito provides a fluent DSL for this."
        ],
        "code": "import static org.mockito.Mockito.*;\n\n@Test\nvoid stubbingExamples() {\n    List<String> mock = mock(List.class);\n\n    // Return value\n    when(mock.get(0)).thenReturn(\"first\");\n    when(mock.get(1)).thenReturn(\"second\");\n\n    // Multiple return values — returned in order on subsequent calls\n    when(mock.size()).thenReturn(1).thenReturn(2).thenReturn(3);\n    assertEquals(1, mock.size());\n    assertEquals(2, mock.size());\n    assertEquals(3, mock.size());\n    assertEquals(3, mock.size());  // last value is repeated\n\n    // Throw exception\n    when(mock.get(99)).thenThrow(new IndexOutOfBoundsException());\n    assertThrows(IndexOutOfBoundsException.class, () -> mock.get(99));\n\n    // Throw based on input\n    when(mock.get(anyInt())).thenAnswer(invocation -> {\n        int idx = invocation.getArgument(0);\n        return \"value-\" + idx;\n    });\n    assertEquals(\"value-5\", mock.get(5));\n\n    // void methods — use doThrow / doNothing / doReturn\n    doNothing().when(mock).clear();  // mock.clear() does nothing\n    doThrow(new RuntimeException()).when(mock).add(\"bad\");\n\n    // BDD style\n    given(mock.size()).willReturn(10);\n    willThrow(new RuntimeException()).given(mock).clear();\n}"
      },
      {
        "heading": "Verifying Interactions",
        "content": [
          "Verification confirms that certain methods were called on the mock with specific arguments."
        ],
        "code": "@Test\nvoid verificationExamples() {\n    List<String> mock = mock(List.class);\n\n    mock.add(\"one\");\n    mock.add(\"two\");\n    mock.clear();\n\n    // Verify a method was called\n    verify(mock).add(\"one\");\n    verify(mock).add(\"two\");\n    verify(mock).clear();\n\n    // Verify call count\n    verify(mock, times(2)).add(anyString());\n    verify(mock, atLeastOnce()).clear();\n    verify(mock, atMost(3)).add(anyString());\n    verify(mock, never()).remove(anyString());\n\n    // Verify no more interactions\n    verifyNoMoreInteractions(mock);\n\n    // Verify no interactions at all\n    List<String> otherMock = mock(List.class);\n    verifyNoInteractions(otherMock);\n\n    // Argument matchers\n    verify(mock).add(eq(\"one\"));           // exact match\n    verify(mock).add(anyString());         // any string\n    verify(mock).add(argThat(s -> s.startsWith(\"o\")));  // custom matcher\n}"
      },
      {
        "heading": "@InjectMocks — Automatic Dependency Injection",
        "content": [
          "<code>@InjectMocks</code> creates an instance of the class and injects all <code>@Mock</code> fields into it (via constructor, setter, or field injection).",
          "This is the most common pattern for unit-testing a service that depends on a repository or other collaborator."
        ],
        "code": "import org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport org.junit.jupiter.api.extension.ExtendWith;\n\n@ExtendWith(MockitoExtension.class)\nclass UserServiceTest {\n\n    @Mock\n    UserRepository userRepository;  // mock\n\n    @Mock\n    EmailService emailService;      // mock\n\n    @InjectMocks\n    UserService userService;        // gets the mocks injected\n\n    @Test\n    void registerUser_savesAndSendsEmail() {\n        // Arrange\n        when(userRepository.save(any(User.class))).thenAnswer(inv -> {\n            User u = inv.getArgument(0);\n            u.setId(1L);\n            return u;\n        });\n\n        // Act\n        User result = userService.register(\"alice\", \"alice@example.com\");\n\n        // Assert\n        assertEquals(1L, result.getId());\n        verify(userRepository).save(any(User.class));\n        verify(emailService).sendWelcomeEmail(\"alice@example.com\");\n    }\n}\n\n// Service under test\nclass UserService {\n    private final UserRepository userRepository;\n    private final EmailService emailService;\n\n    // Constructor injection\n    public UserService(UserRepository userRepository, EmailService emailService) {\n        this.userRepository = userRepository;\n        this.emailService = emailService;\n    }\n\n    public User register(String username, String email) {\n        User user = new User(username, email);\n        userRepository.save(user);\n        emailService.sendWelcomeEmail(email);\n        return user;\n    }\n}"
      },
      {
        "heading": "@Spy — Partial Mocks",
        "content": [
          "A <strong>spy</strong> wraps a real object. By default, all methods use the real implementation. You can stub specific methods to override behavior.",
          "Use sparingly — overusing spies usually indicates a design issue."
        ],
        "code": "@ExtendWith(MockitoExtension.class)\nclass SpyExample {\n\n    @Spy\n    List<String> spyList = new ArrayList<>();\n\n    @Test\n    void spyBehavior() {\n        // Real method is called\n        spyList.add(\"one\");\n        spyList.add(\"two\");\n        assertEquals(2, spyList.size());  // real size method\n\n        // Stub a specific method\n        doReturn(100).when(spyList).size();\n        assertEquals(100, spyList.size());  // stubbed\n        assertEquals(2, spyList.size());    // wait — that fails!\n\n        // After stubbing, size() always returns 100\n        // Real add still works\n        spyList.add(\"three\");\n        assertEquals(100, spyList.size());\n    }\n}"
      },
      {
        "heading": "Argument Matchers",
        "content": [
          "Argument matchers let you verify or stub calls with flexible matching. The most common are <code>any()</code>, <code>eq()</code>, and <code>argThat()</code>.",
          "Important: when using matchers, all arguments must be matchers (or all must be raw values)."
        ],
        "code": "@Test\nvoid argumentMatchers() {\n    Map<String, Integer> mock = mock(Map.class);\n\n    when(mock.get(anyString())).thenReturn(0);\n    when(mock.get(eq(\"known\"))).thenReturn(42);\n    when(mock.get(argThat(s -> s.length() > 5))).thenReturn(99);\n\n    assertEquals(0, mock.get(\"anything\"));\n    assertEquals(42, mock.get(\"known\"));\n    assertEquals(99, mock.get(\"longkey\"));\n\n    // Capture arguments for later inspection\n    ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);\n    mock.put(\"captured\", 100);\n    verify(mock).put(captor.capture(), eq(100));\n    assertEquals(\"captured\", captor.getValue());\n\n    // Capture multiple values\n    mock.put(\"a\", 1);\n    mock.put(\"b\", 2);\n    verify(mock, times(2)).put(captor.capture(), anyInt());\n    assertEquals(List.of(\"a\", \"b\"), captor.getAllValues());\n}"
      },
      {
        "heading": "Strict Stubbing and Best Practices",
        "content": [
          "Mockito 5 enables strict stubbing by default — unused stubs throw <code>UnnecessaryStubbingException</code> to alert you to dead test code.",
          "Other best practices:"
        ],
        "code": "// Best practices\n@Test\nvoid bestPractices() {\n    // 1. Don't mock value objects — use the real ones\n    // BAD:  when(mockMoney.getAmount()).thenReturn(100);\n    // GOOD: Use new Money(100, \"USD\")\n\n    // 2. Don't mock types you don't own (or system types)\n    // Use them directly or wrap them\n\n    // 3. One mock per test (mostly) — keeps tests focused\n    // 4. Use ArgumentCaptor when you need to inspect call args\n    // 5. Use @InjectMocks over manual instantiation\n    // 6. Reset mocks when reusing them\n    // 7. Verify behavior, not implementation details\n\n    // Use lenient stubs when needed (e.g., for parameter to all tests)\n    lenient().when(mock.get(any())).thenReturn(\"value\");\n}\n\n// Disable strict stubbing per-test if you need it\n@MockitoSettings(strictness = Strictness.LENIENT)\nclass LenientTest {\n    // ...\n}"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Mock a <code>UserRepository</code> interface and test a <code>UserService.register</code> method that uses it.</li>",
          "<li>Use <code>@InjectMocks</code> to wire multiple dependencies into a service and test a method that uses all of them.</li>",
          "<li>Stub a method to return different values on successive calls using <code>thenReturn(a).thenReturn(b)</code>.</li>",
          "<li>Verify that a method was called exactly <code>times(3)</code> using <code>verify(mock, times(3))</code>.</li>",
          "<li>Use <code>ArgumentCaptor</code> to capture the argument passed to a mocked method and assert on it.</li>",
          "<li>Use <code>argThat()</code> to match arguments based on a custom predicate.</li>",
          "<li>Use <code>@Spy</code> to partially mock a real list and verify a custom method is called while keeping real list behavior.</li>",
          "<li>Write a test that fails with <code>UnnecessaryStubbingException</code> by adding an unused stub, then fix it.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "tdd": {
    "title": "Test-Driven Development (TDD)",
    "sections": [
      {
        "heading": "What is TDD?",
        "content": [
          "<strong>Test-Driven Development (TDD)</strong> is a software development practice where you write automated tests <em>before</em> writing the production code. The workflow is:",
          "<ol>",
          "<li><strong>Red</strong> — write a failing test for the next small piece of behavior</li>",
          "<li><strong>Green</strong> — write the simplest production code that makes the test pass</li>",
          "<li><strong>Refactor</strong> — clean up both the test and the production code while keeping tests green</li>",
          "</ol>",
          "The cycle is short — typically 1-10 minutes per cycle. The result is a comprehensive test suite that grew organically alongside the production code."
        ]
      },
      {
        "heading": "The Red-Green-Refactor Cycle",
        "content": [
          "The cycle in detail:",
          "<ul>",
          "<li><strong>Red</strong> — write a test that describes the next behavior. It will fail because the code does not exist or does not do that yet. The failure should be for the <em>expected reason</em> (the assertion fails), not for a typo or compile error.</li>",
          "<li><strong>Green</strong> — write the <em>simplest</em> code that makes the test pass. Even hard-coded values are OK at this stage — you can refine in the refactor phase. The goal is to get to a green test as fast as possible.</li>",
          "<li><strong>Refactor</strong> — now improve the design. Eliminate duplication, extract methods, rename for clarity, simplify. Tests should stay green throughout. If they fail, undo and try again.</li>",
          "</ul>",
          "Repeat. After many cycles, you have a working feature and a comprehensive test suite."
        ]
      },
      {
        "heading": "A TDD Example: FizzBuzz",
        "content": [
          "Let's build FizzBuzz using TDD. The rules: print numbers 1 to 100, but for multiples of 3 print \"Fizz\", for multiples of 5 print \"Buzz\", and for multiples of both print \"FizzBuzz\"."
        ],
        "code": "// STEP 1: Red — write the first failing test\nclass FizzBuzzTest {\n    @Test\n    void returns1For1() {\n        assertEquals(\"1\", new FizzBuzz().compute(1));\n    }\n}\n\n// Test fails: FizzBuzz class does not exist\n\n// STEP 2: Green — write the simplest code that passes\nclass FizzBuzz {\n    public String compute(int n) {\n        return \"1\";  // Hard-coded to pass this test only\n    }\n}\n\n// STEP 3: Red — next test\n@Test\nvoid returns2For2() {\n    assertEquals(\"2\", new FizzBuzz().compute(2));\n}\n\n// STEP 4: Green — generalize\nclass FizzBuzz {\n    public String compute(int n) {\n        return String.valueOf(n);\n    }\n}\n\n// STEP 5: Red — test for Fizz\n@Test\nvoid returnsFizzFor3() {\n    assertEquals(\"Fizz\", new FizzBuzz().compute(3));\n}\n\n// STEP 6: Green — add the Fizz logic\nclass FizzBuzz {\n    public String compute(int n) {\n        if (n % 3 == 0) return \"Fizz\";\n        return String.valueOf(n);\n    }\n}\n\n// STEP 7: Continue with Buzz and FizzBuzz\n@Test\nvoid returnsBuzzFor5() { assertEquals(\"Buzz\", new FizzBuzz().compute(5)); }\n@Test\nvoid returnsFizzBuzzFor15() { assertEquals(\"FizzBuzz\", new FizzBuzz().compute(15)); }\n\n// Final\nclass FizzBuzz {\n    public String compute(int n) {\n        if (n % 15 == 0) return \"FizzBuzz\";\n        if (n % 3 == 0) return \"Fizz\";\n        if (n % 5 == 0) return \"Buzz\";\n        return String.valueOf(n);\n    }\n}"
      },
      {
        "heading": "TDD Patterns and Techniques",
        "content": [
          "Common TDD patterns:",
          "<ul>",
          "<li><strong>Fake it till you make it</strong> — return a hard-coded value to pass the first test, then generalize when the next test forces it.</li>",
          "<li><strong>Triangulation</strong> — when you are not sure of the implementation, write multiple tests that \"force\" the code to be more general.</li>",
          "<li><strong>Obvious implementation</strong> — if the implementation is obvious, just write it directly (skip the fake-it step). The test confirms it works.</li>",
          "<li><strong>One to many</strong> — write a test for a single element, then change it to test multiple elements (e.g., one item → a list of items).</li>",
          "<li><strong>Break first</strong> — before writing the production code, deliberately break the test to verify it actually catches the bug.</li>",
          "</ul>"
        ]
      },
      {
        "heading": "How TDD Changes Design",
        "content": [
          "One of the biggest benefits of TDD is that it changes the design of your code:",
          "<ul>",
          "<li><strong>Testability becomes a first-class concern</strong> — code is easier to test when it has clear boundaries, single responsibilities, and dependency injection.</li>",
          "<li><strong>No untested code</strong> — every line of production code exists because a test demanded it.</li>",
          "<li><strong>Small, focused units</strong> — long methods and god classes are hard to test, so TDD pushes you toward smaller units.</li>",
          "<li><strong>Loose coupling</strong> — to test a unit in isolation, you need to be able to inject its dependencies. This naturally leads to DI and clean boundaries.</li>",
          "<li><strong>Better naming</strong> — when you write the test first, you have to think about how the API will be used, which leads to better names and cleaner interfaces.</li>",
          "</ul>"
        ]
      },
      {
        "heading": "TDD for Legacy Code",
        "content": [
          "For new code, TDD is straightforward. For legacy code, the workflow is different:",
          "<ul>",
          "<li><strong>Characterization tests</strong> — write tests that document the <em>current</em> behavior, not the desired behavior. They pin down the existing semantics so you can refactor safely.</li>",
          "<li><strong>Seam identification</strong> — find \"seams\" where you can break dependencies (subclass-and-override, parameterize constructor, etc.). Michael Feathers' book \"Working Effectively with Legacy Code\" is the classic reference.</li>",
          "<li><strong>Sprout / wrap method</strong> — add new functionality in a new method (sprout) or wrap a call to a legacy method (wrap) so you can write tests for the new code without touching the legacy.</li>",
          "<li><strong>Strangler fig</strong> — gradually replace legacy code piece by piece, each time with TDD, until the legacy code is fully replaced.</li>",
          "</ul>"
        ]
      },
      {
        "heading": "TDD vs BDD vs ATDD",
        "content": [
          "Comparison of related practices:",
          "<ul>",
          "<li><strong>TDD</strong> — write unit tests first. Focused on implementation. Tests are technical and may use class/method names.</li>",
          "<li><strong>BDD (Behavior-Driven Development)</strong> — write scenarios in a domain language (Given-When-Then). Often uses tools like Cucumber or JBehave. Tests are readable by non-developers.</li>",
          "<li><strong>ATDD (Acceptance Test-Driven Development)</strong> — write acceptance tests first (from the user's perspective). The team collaborates to define the tests, then implements.</li>",
          "<li><strong>Example Mapping</strong> — a discovery practice often used before ATDD/BDD. Capture rules with examples on cards before writing tests.</li>",
          "</ul>",
          "All three use the same red-green-refactor cycle — they differ in <em>what</em> is tested and <em>how</em> the tests are written."
        ]
      },
      {
        "heading": "Common TDD Objections and Responses",
        "content": [
          "Frequent concerns about TDD:",
          "<ul>",
          "<li><strong>\"It slows me down.\"</strong> — Short-term: yes, the first feature takes longer. Long-term: faster because you spend less time debugging and fixing regressions. The breakeven point is usually 2-4 weeks in.</li>",
          "<li><strong>\"I have to test trivial code.\"</strong> — Yes, TDD forces you to test getters/setters and simple methods. The cost is tiny because each test is small. The benefit is that you never have to wonder if it works.</li>",
          "<li><strong>\"My code is too hard to test.\"</strong> — That usually means the design is too coupled. Use TDD to drive toward a more testable design.</li>",
          "<li><strong>\"The tests become outdated.\"</strong> — Tests are part of the code. When the design changes, you change the tests as you change the code. If tests are not being updated, the team is not really doing TDD.</li>",
          "<li><strong>\"We have a UI / framework / external dependency that is hard to test.\"</strong> — Separate the testable business logic from the hard-to-test UI. Test the business logic with TDD; test the UI separately with end-to-end tools.</li>",
          "</ul>"
        ]
      },
      {
        "heading": "TDD in Real Teams",
        "content": [
          "Where TDD shines:",
          "<ul>",
          "<li>Domain logic, business rules, algorithms</li>",
          "<li>Bug fixes (write a test that reproduces the bug, then fix)</li>",
          "<li>Refactoring (the test suite is your safety net)</li>",
          "<li>APIs and libraries</li>",
          "<li>Any code that can be unit tested in isolation</li>",
          "</ul>",
          "Where TDD is harder:",
          "<ul>",
          "<li>UI work (the view layer is hard to unit test — use a different testing strategy)</li>",
          "<li>Highly exploratory or throwaway code (spikes, prototypes)</li>",
          "<li>Code tightly coupled to a framework</li>",
          "<li>Performance-critical inner loops (use benchmarks instead)</li>",
          "</ul>",
          "Many teams use TDD as a default for the testable 80% of their code, and use other techniques for the rest."
        ]
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Use TDD to build a <code>StringCalculator</code> with an <code>add(String numbers)</code> method (see kata description by Roy Osherove).</li>",
          "<li>Use TDD to build a <code>BankAccount</code> class with deposit, withdraw, and balance tracking (including overdraft rules).</li>",
          "<li>Use TDD to build a <code>WordWrap</code> function (kata by Robert Martin) — given a column width, wrap text at word boundaries.</li>",
          "<li>Practice the \"fake it\" approach: implement FizzBuzz using only the simplest possible code at each step.</li>",
          "<li>Take a feature in your codebase and apply TDD: write the test first, then the code, then refactor.</li>",
          "<li>Apply characterization tests to a legacy method: write tests that pin down its current behavior (right or wrong), then refactor with confidence.</li>",
          "<li>Track your TDD cycle times for a day — how long are your red-green-refactor loops? Aim for under 10 minutes.</li>",
          "</ol>"
        ]
      }
    ]
  },
  "test-coverage-quality": {
    "title": "Code Coverage and Test Quality",
    "sections": [
      {
        "heading": "What is Code Coverage?",
        "content": [
          "<strong>Code coverage</strong> measures which lines, branches, or paths of your production code are executed by your tests.",
          "It is a useful signal but NOT a measure of test quality — 100% coverage can still hide buggy tests."
        ]
      },
      {
        "heading": "Types of Coverage",
        "content": [
          "Common coverage metrics:",
          "<ul>",
          "<li><strong>Line coverage</strong> — percentage of lines executed at least once. The most basic and most commonly reported metric.</li>",
          "<li><strong>Branch coverage</strong> — percentage of branches (if/else, switch, ternary) where both paths were taken. Stronger than line coverage.</li>",
          "<li><strong>Method coverage</strong> — percentage of methods called at least once.</li>",
          "<li><strong>Class coverage</strong> — percentage of classes with at least one method called.</li>",
          "<li><strong>Path coverage</strong> — percentage of unique execution paths through a method. Very expensive to measure, rarely used.</li>",
          "<li><strong>Condition coverage</strong> — percentage of boolean sub-expressions that were both true and false.</li>",
          "<li><strong>Cyclomatic complexity</strong> — number of independent paths through a method. High complexity = harder to cover completely.</li>",
          "</ul>"
        ]
      },
      {
        "heading": "JaCoCo — Java Code Coverage",
        "content": [
          "<strong>JaCoCo</strong> is the de-facto code coverage library for Java. It works with Maven, Gradle, Ant, and standalone, and integrates with most CI tools and IDEs."
        ],
        "code": "<!-- Maven: pom.xml -->\n<plugin>\n    <groupId>org.jacoco</groupId>\n    <artifactId>jacoco-maven-plugin</artifactId>\n    <version>0.8.11</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>prepare-agent</goal>\n            </goals>\n        </execution>\n        <execution>\n            <id>report</id>\n            <phase>test</phase>\n            <goals>\n                <goal>report</goal>\n            </goals>\n        </execution>\n        <!-- Optional: fail the build if coverage is too low -->\n        <execution>\n            <id>check-coverage</id>\n            <phase>verify</phase>\n            <goals>\n                <goal>check</goal>\n            </goals>\n            <configuration>\n                <rules>\n                    <rule>\n                        <element>BUNDLE</element>\n                        <limits>\n                            <limit>\n                                <counter>LINE</counter>\n                                <value>COVEREDRATIO</value>\n                                <minimum>0.80</minimum>\n                            </limit>\n                            <limit>\n                                <counter>BRANCH</counter>\n                                <value>COVEREDRATIO</value>\n                                <minimum>0.70</minimum>\n                            </limit>\n                        </limits>\n                    </rule>\n                </rules>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n\n// Run: mvn test    (generates target/site/jacoco/index.html)\n// Run: mvn verify  (also enforces coverage limits)\n\n// Gradle: build.gradle\nplugins {\n    id 'jacoco'\n}\n\njacoco {\n    toolVersion = '0.8.11'\n}\n\njacocoTestReport {\n    reports {\n        html.required = true\n        xml.required = true\n    }\n}"
      },
      {
        "heading": "Reading JaCoCo Reports",
        "content": [
          "JaCoCo produces an HTML report at <code>target/site/jacoco/index.html</code>. Open it in a browser to see:",
          "<ul>",
          "<li>Package-level summary (color-coded by coverage percentage)</li>",
          "<li>Class-level coverage</li>",
          "<li>Method-level coverage</li>",
          "<li>Line-by-line coverage with missed lines highlighted in red</li>",
          "<li>Branch coverage showing which branches were not taken</li>",
          "</ul>",
          "In IDEs like IntelliJ, the coverage view is integrated: run with coverage, then see coverage overlays directly in the editor (green = covered, red = missed)."
        ]
      },
      {
        "heading": "Coverage Targets — What is \"Good Enough\"?",
        "content": [
          "There is no universal \"right\" coverage number, but common guidelines:",
          "<ul>",
          "<li><strong>50-60%</strong> — bare minimum, lots of untested code</li>",
          "<li><strong>70-80%</strong> — healthy for most projects</li>",
          "<li><strong>80-90%</strong> — strong coverage, well-tested codebase</li>",
          "<li><strong>90%+</strong> — excellent, but watch for diminishing returns</li>",
          "<li><strong>100%</strong> — often counter-productive (you spend time testing trivial getters)</li>",
          "</ul>",
          "More important than the number:",
          "<ul>",
          "<li>Critical paths (payments, security, data integrity) should have very high coverage</li>",
          "<li>Stable utility code can have lower coverage</li>",
          "<li>Generated code (DTOs, builders) is often excluded from coverage targets</li>",
          "<li>New code should generally have higher coverage than legacy code</li>",
          "</ul>"
        ]
      },
      {
        "heading": "Mutation Testing with PIT",
        "content": [
          "<strong>Mutation testing</strong> measures test <em>quality</em>, not just coverage. It works by:",
          "<ol>",
          "<li>Make small changes (\"mutations\") to the production code (e.g., flip a <code>&gt;</code> to <code>&lt;</code>, change a constant, remove a method call)</li>",
          "<li>Run the tests against each mutation</li>",
          "<li>If the tests still pass, the mutation \"survived\" — meaning the tests do not check that behavior</li>",
          "<li>If the tests fail, the mutation was \"killed\" — meaning the tests do check that behavior</li>",
          "</ol>",
          "A test suite with 100% line coverage but weak assertions may kill only 40% of mutations. A well-written test suite typically kills 70-90%."
        ],
        "code": "<!-- Maven: pom.xml -->\n<plugin>\n    <groupId>org.pitest</groupId>\n    <artifactId>pitest-maven</artifactId>\n    <version>1.16.0</version>\n    <configuration>\n        <targetClasses>\n            <param>com.example.service.*</param>\n        </targetClasses>\n        <targetTests>\n            <param>com.example.service.*Test</param>\n        </targetTests>\n        <mutationThreshold>75</mutationThreshold>  <!-- fail if < 75% mutations killed -->\n    </configuration>\n</plugin>\n\n// Run: mvn pitest:mutationCoverage\n// Report: target/pit-reports/index.html"
      },
      {
        "heading": "Test Smells to Watch For",
        "content": [
          "Common test smells and how to refactor:",
          "<ul>",
          "<li><strong>Long tests</strong> — split into multiple smaller tests, each with a single AAA</li>",
          "<li><strong>Magic numbers</strong> — extract into named constants</li>",
          "<li><strong>Duplicated setup</strong> — extract into <code>@BeforeEach</code></li>",
          "<li><strong>Testing implementation details</strong> — test the public API, not private methods</li>",
          "<li><strong>Excessive mocking</strong> — if you mock everything, consider whether you are testing a real behavior</li>",
          "<li><strong>Sleep in tests</strong> — replace with deterministic waiting (CountDownLatch, Awaitility)</li>",
          "<li><strong>Order-dependent tests</strong> — reset state in <code>@BeforeEach</code>, don't rely on test order</li>",
          "<li><strong>Flaky tests</strong> — investigate root cause (time, network, shared state) instead of retrying</li>",
          "<li><strong>No assertions</strong> — every test should have at least one assertion</li>",
          "</ul>"
        ]
      },
      {
        "heading": "Integration Testing vs Unit Testing",
        "content": [
          "A balanced test strategy includes both:",
          "<ul>",
          "<li><strong>Unit tests (many, fast)</strong> — test individual classes in isolation. Catch bugs early. Cheap to maintain. Run in milliseconds.</li>",
          "<li><strong>Integration tests (few, slow)</strong> — test how components work together, often with real databases, real HTTP, etc. Catch wiring/contract bugs. Slower and more fragile.</li>",
          "<li><strong>Contract tests</strong> — verify that a service and its consumers agree on the API contract (e.g., using Pact, Spring Cloud Contract)</li>",
          "<li><strong>End-to-end tests (very few, very slow)</strong> — test the full system from the user's perspective</li>",
          "</ul>",
          "A good rule of thumb: 70% unit, 20% integration, 10% end-to-end."
        ]
      },
      {
        "heading": "Testcontainers for Integration Tests",
        "content": [
          "<strong>Testcontainers</strong> is a library that lets you spin up real services (PostgreSQL, MySQL, Kafka, Redis, etc.) in Docker containers for integration tests.",
          "It is the modern best practice for integration tests — far better than embedded databases or in-memory mocks."
        ],
        "code": "// Add: testcontainers-junit-jupiter, testcontainers-postgresql\n\nimport org.testcontainers.containers.PostgreSQLContainer;\nimport org.testcontainers.junit.jupiter.Container;\nimport org.testcontainers.junit.jupiter.Testcontainers;\n\n@Testcontainers\nclass UserRepositoryIT {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @Test\n    void savesAndRetrievesUser() {\n        // Real PostgreSQL is running in Docker\n        // Use the real JDBC URL from the container\n        String jdbcUrl = postgres.getJdbcUrl();\n        // ... connect, save, retrieve, assert ...\n    }\n}"
      },
      {
        "heading": "Try it Yourself",
        "content": [
          "Exercises:",
          "<ol>",
          "<li>Set up JaCoCo in a project, run tests, and open the HTML coverage report.</li>",
          "<li>Find the methods with the lowest coverage and add tests to bring them up.</li>",
          "<li>Set a coverage threshold in JaCoCo (<code>verify</code> goal) and watch the build fail when you skip a test.</li>",
          "<li>Run mutation testing with PIT and look at the \"surviving mutants\" — those are real gaps in your tests.</li>",
          "<li>Find a test smell in your codebase (long test, magic numbers, order dependence) and refactor it.</li>",
          "<li>Write an integration test using Testcontainers with a real PostgreSQL or MySQL container.</li>",
          "<li>Calculate the test pyramid ratio for your project — what percentage of tests are unit, integration, and e2e?</li>",
          "</ol>"
        ]
      }
    ]
  }
};
export const javaContent = {
  module7: javaModule7Content,
  module8: javaModule8Content,
  module1: javaModule1Content,
  module2: javaModule2Content,
  module3: javaModule3Content,
  module4: javaModule4Content,
  module5: javaModule5Content,
  module6: javaModule6Content,
};
