// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.495Z

export const javaQuestions = {
  "questions": [
    {
      "question": "Custom User Exception",
      "answer": "- A custom exception is created by extending\n            <code>Exception</code>\n            or\n            <code>RuntimeException</code>\n            .\n            <br>\n            - Helps define application-specific error scenarios clearly.\n            <br>\n            - Can include custom constructors to pass messages or other details.\n            <br>\n            - Promotes code reuse and better exception handling practices.\n            <br>\n            - Can be used in both checked and unchecked exception scenarios.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A custom exception is created by extending Exception or RuntimeException .",
        "- Helps define application-specific error scenarios clearly."
      ]
    },
    {
      "question": "Shallow Copy vs Deep Copy",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>Shallow Copy</th>\n                  <th>Deep Copy</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Object Reference</td>\n                  <td>Copies reference of objects</td>\n                  <td>Creates new instances for all fields</td>\n                </tr>\n                <tr>\n                  <td>Memory Usage</td>\n                  <td>Less memory used</td>\n                  <td>More memory as new objects are created</td>\n                </tr>\n                <tr>\n                  <td>Mutability</td>\n                  <td>Changes reflect in all copies</td>\n                  <td>Changes are isolated</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Faster</td>\n                  <td>Slower</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Shallow Copy Deep Copy Object Reference Copies reference of objects Creates new instances for all fields Memory Usage Less memory used More memory as new objects are created Mutability Changes"
      ]
    },
    {
      "question": "What is String?",
      "answer": "- String is an immutable sequence of characters.\n            <br>\n            - Stored in the String Constant Pool for memory efficiency.\n            <br>\n            - Once created, its value cannot be changed.\n            <br>\n            - Any change creates a new string object.\n            <br>\n            - It is thread-safe due to immutability.\n            <br>\n            - Useful for keys and constants where consistent value is needed.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- String is an immutable sequence of characters.",
        "- Stored in the String Constant Pool for memory efficiency."
      ]
    },
    {
      "question": "Difference between String and StringBuffer",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>String</th>\n                  <th>StringBuffer</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Mutability</td>\n                  <td>Immutable</td>\n                  <td>Mutable</td>\n                </tr>\n                <tr>\n                  <td>Thread Safety</td>\n                  <td>Thread-safe (by nature)</td>\n                  <td>Thread-safe (synchronized methods)</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Slower for concatenation</td>\n                  <td>Faster for frequent changes</td>\n                </tr>\n                <tr>\n                  <td>Use Case</td>\n                  <td>Fixed or rarely changed strings</td>\n                  <td>When string modification is frequent</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature String StringBuffer Mutability Immutable Mutable Thread Safety Thread-safe (by nature) Thread-safe (synchronized methods) Performance Slower for concatenation Faster for frequent changes Use C"
      ]
    },
    {
      "question": "Difference between Thread-safe and Non-thread-safe",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>Thread-safe</th>\n                  <th>Non-thread-safe</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Concurrency</td>\n                  <td>Safe to use across multiple threads</td>\n                  <td>Not safe without external synchronization</td>\n                </tr>\n                <tr>\n                  <td>Example</td>\n                  <td>Vector, Hashtable</td>\n                  <td>ArrayList, HashMap</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Slower due to synchronization</td>\n                  <td>Faster in single-threaded environments</td>\n                </tr>\n                <tr>\n                  <td>Usage</td>\n                  <td>Multithreading scenarios</td>\n                  <td>Simple, non-concurrent tasks</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Thread-safe Non-thread-safe Concurrency Safe to use across multiple threads Not safe without external synchronization Example Vector, Hashtable ArrayList, HashMap Performance Slower due to syn"
      ]
    },
    {
      "question": "What is Garbage Collector?",
      "answer": "- Automatically deallocates memory by destroying unused objects.\n            <br>\n            - Helps prevent memory leaks and out-of-memory errors.\n            <br>\n            - Runs as a background thread in the JVM.\n            <br>\n            - Uses algorithms like mark-and-sweep, generational GC.\n            <br>\n            - Improves overall memory efficiency in Java apps.\n            <br>\n            - Developers can suggest it using\n            <code>System.gc()</code>\n            .\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Automatically deallocates memory by destroying unused objects.",
        "- Helps prevent memory leaks and out-of-memory errors."
      ]
    },
    {
      "question": "Difference between ArrayList and LinkedList",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>ArrayList</th>\n                  <th>LinkedList</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Data Structure</td>\n                  <td>Dynamic array</td>\n                  <td>Doubly linked list</td>\n                </tr>\n                <tr>\n                  <td>Access Time</td>\n                  <td>Fast (index-based)</td>\n                  <td>Slow (traversal needed)</td>\n                </tr>\n                <tr>\n                  <td>Insertion/Deletion</td>\n                  <td>Slow (shifting needed)</td>\n                  <td>Fast (pointer adjustment)</td>\n                </tr>\n                <tr>\n                  <td>Memory Usage</td>\n                  <td>Less memory</td>\n                  <td>More memory (pointers)</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature ArrayList LinkedList Data Structure Dynamic array Doubly linked list Access Time Fast (index-based) Slow (traversal needed) Insertion/Deletion Slow (shifting needed) Fast (pointer adjustment) "
      ]
    },
    {
      "question": "Difference between Set and Map",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>Set</th>\n                  <th>Map</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Structure</td>\n                  <td>Collection of unique elements</td>\n                  <td>Key-value pair structure</td>\n                </tr>\n                <tr>\n                  <td>Duplicates</td>\n                  <td>No duplicate elements</td>\n                  <td>Keys are unique, values can duplicate</td>\n                </tr>\n                <tr>\n                  <td>Access</td>\n                  <td>Only elements</td>\n                  <td>Access by keys</td>\n                </tr>\n                <tr>\n                  <td>Common Implementations</td>\n                  <td>HashSet, LinkedHashSet</td>\n                  <td>HashMap, TreeMap</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Set Map Structure Collection of unique elements Key-value pair structure Duplicates No duplicate elements Keys are unique, values can duplicate Access Only elements Access by keys Common Imple"
      ]
    },
    {
      "question": "Java 8 New Features",
      "answer": "-\n            <strong>Lambda Expressions:</strong>\n            Enables functional programming by passing behavior as data.\n            <br>\n            -\n            <strong>Stream API:</strong>\n            Supports bulk operations on collections using a pipeline approach.\n            <br>\n            -\n            <strong>Functional Interfaces:</strong>\n            Interfaces with a single abstract method (e.g., Runnable, Comparator).\n            <br>\n            -\n            <strong>Optional:</strong>\n            A container object to avoid null references and\n            <code>NullPointerException</code>\n            .\n            <br>\n            -\n            <strong>Default Methods:</strong>\n            Allows interface methods with default implementation.\n            <br>\n            -\n            <strong>Date & Time API:</strong>\n            Modern replacement for\n            <code>java.util.Date</code>\n            with immutability and better handling.",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Lambda Expressions: Enables functional programming by passing behavior as data.",
        "- Stream API: Supports bulk operations on collections using a pipeline approach."
      ]
    },
    {
      "question": "What is Optional API?",
      "answer": "- Introduced in Java 8 to avoid null checks and\n            <code>NullPointerException</code>\n            .\n            <br>\n            - Represents a value that may or may not be present.\n            <br>\n            - Provides methods like\n            <code>isPresent()</code>\n            ,\n            <code>orElse()</code>\n            , and\n            <code>ifPresent()</code>\n            .\n            <br>\n            - Encourages functional-style programming using\n            <code>map()</code>\n            and\n            <code>filter()</code>\n            .\n            <br>\n            - Promotes cleaner and safer code with null handling.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Introduced in Java 8 to avoid null checks and NullPointerException .",
        "- Represents a value that may or may not be present."
      ]
    },
    {
      "question": "Explain the OOPs Concepts",
      "answer": "-\n            <strong>Encapsulation:</strong>\n            Wrapping of data and methods into a single unit (class).\n            <br>\n            -\n            <strong>Abstraction:</strong>\n            Hiding internal implementation details and exposing only functionality.\n            <br>\n            -\n            <strong>Inheritance:</strong>\n            Enables code reuse by inheriting properties from a base class.\n            <br>\n            -\n            <strong>Polymorphism:</strong>\n            Allows multiple forms via method overloading/overriding.\n            <br>\n            - These principles are the foundation of object-oriented programming in Java.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Encapsulation: Wrapping of data and methods into a single unit (class).",
        "- Abstraction: Hiding internal implementation details and exposing only functionality."
      ]
    },
    {
      "question": "What is Thread?",
      "answer": "- A thread is the smallest unit of execution in a process.\n            <br>\n            - Java supports multithreading to run tasks concurrently.\n            <br>\n            - Reduces CPU idle time and improves application responsiveness.\n            <br>\n            - Threads can be created by extending\n            <code>Thread</code>\n            or implementing\n            <code>Runnable</code>\n            .\n            <br>\n            - Managed by JVM thread scheduler.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A thread is the smallest unit of execution in a process.",
        "- Java supports multithreading to run tasks concurrently."
      ]
    },
    {
      "question": "What is Aggregation and Composition?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>Aggregation</th>\n                  <th>Composition</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Relationship</td>\n                  <td>Has-a</td>\n                  <td>Part-of</td>\n                </tr>\n                <tr>\n                  <td>Dependency</td>\n                  <td>Weak association</td>\n                  <td>Strong association</td>\n                </tr>\n                <tr>\n                  <td>Lifecycle</td>\n                  <td>Child can exist independently</td>\n                  <td>Child's lifecycle depends on parent</td>\n                </tr>\n                <tr>\n                  <td>Example</td>\n                  <td>Department has students</td>\n                  <td>House has rooms</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Aggregation Composition Relationship Has-a Part-of Dependency Weak association Strong association Lifecycle Child can exist independently Child's lifecycle depends on parent Example Department"
      ]
    },
    {
      "question": "What is Embedded DB and Embedded Server?",
      "answer": "-\n            <strong>Embedded DB:</strong>\n            A lightweight database (like H2) that runs inside the app process.\n            <br>\n            -\n            <strong>Embedded Server:</strong>\n            A server (e.g., Tomcat) bundled with the app; no need to deploy externally.\n            <br>\n            - Common in Spring Boot applications.\n            <br>\n            - Great for testing or small-scale deployments.\n            <br>\n            - No external configuration required to start the app.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Embedded DB: A lightweight database (like H2) that runs inside the app process.",
        ", Tomcat) bundled with the app; no need to deploy externally."
      ]
    },
    {
      "question": "Difference between Hashtable and HashMap",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>Hashtable</th>\n                  <th>HashMap</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Thread Safety</td>\n                  <td>Thread-safe (synchronized)</td>\n                  <td>Not thread-safe</td>\n                </tr>\n                <tr>\n                  <td>Null Keys/Values</td>\n                  <td>No null keys or values allowed</td>\n                  <td>One null key, multiple null values allowed</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Slower due to locking</td>\n                  <td>Faster in single-threaded contexts</td>\n                </tr>\n                <tr>\n                  <td>Usage</td>\n                  <td>Legacy systems</td>\n                  <td>Modern applications</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Hashtable HashMap Thread Safety Thread-safe (synchronized) Not thread-safe Null Keys/Values No null keys or values allowed One null key, multiple null values allowed Performance Slower due to "
      ]
    },
    {
      "question": "What is ConcurrentHashMap? Why use it?",
      "answer": "- A thread-safe alternative to HashMap introduced in Java 5.\n            <br>\n            - Uses segment-based locking to reduce contention.\n            <br>\n            - Allows concurrent read and write operations.\n            <br>\n            - Prevents\n            <code>ConcurrentModificationException</code>\n            .\n            <br>\n            - Ideal for high-concurrency multi-threaded environments.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A thread-safe alternative to HashMap introduced in Java 5.",
        "- Uses segment-based locking to reduce contention."
      ]
    },
    {
      "question": "Intermediate vs Terminal Operations in Stream",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Aspect</th>\n                  <th>Intermediate</th>\n                  <th>Terminal</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Return Type</td>\n                  <td>Returns a Stream</td>\n                  <td>Returns a non-Stream result</td>\n                </tr>\n                <tr>\n                  <td>Chaining</td>\n                  <td>Supports method chaining</td>\n                  <td>Ends the stream pipeline</td>\n                </tr>\n                <tr>\n                  <td>Examples</td>\n                  <td>\n                    <code>map()</code>\n                    ,\n                    <code>filter()</code>\n                  </td>\n                  <td>\n                    <code>collect()</code>\n                    ,\n                    <code>count()</code>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Execution</td>\n                  <td>Lazy</td>\n                  <td>Eager</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Aspect Intermediate Terminal Return Type Returns a Stream Returns a non-Stream result Chaining Supports method chaining Ends the stream pipeline Examples map() , filter() collect() , count() Execution"
      ]
    },
    {
      "question": "HashMap vs LinkedHashMap",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>HashMap</th>\n                  <th>LinkedHashMap</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Ordering</td>\n                  <td>No order maintained</td>\n                  <td>Maintains insertion order</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Faster (no order overhead)</td>\n                  <td>Slightly slower</td>\n                </tr>\n                <tr>\n                  <td>Use Case</td>\n                  <td>Unordered fast access</td>\n                  <td>Ordered iteration needed</td>\n                </tr>\n                <tr>\n                  <td>Underlying Structure</td>\n                  <td>Hash buckets</td>\n                  <td>Hash + doubly-linked list</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature HashMap LinkedHashMap Ordering No order maintained Maintains insertion order Performance Faster (no order overhead) Slightly slower Use Case Unordered fast access Ordered iteration needed Unde"
      ]
    },
    {
      "question": "HashMap vs ConcurrentHashMap",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>HashMap</th>\n                  <th>ConcurrentHashMap</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Thread Safety</td>\n                  <td>Not thread-safe</td>\n                  <td>Thread-safe</td>\n                </tr>\n                <tr>\n                  <td>Concurrency Mechanism</td>\n                  <td>No locking</td>\n                  <td>Segment-level locking</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Faster in single-threaded</td>\n                  <td>Better for multi-threaded</td>\n                </tr>\n                <tr>\n                  <td>Usage</td>\n                  <td>General purpose</td>\n                  <td>High-concurrency applications</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature HashMap ConcurrentHashMap Thread Safety Not thread-safe Thread-safe Concurrency Mechanism No locking Segment-level locking Performance Faster in single-threaded Better for multi-threaded Usage"
      ]
    },
    {
      "question": "How to store multiple types in ArrayList?",
      "answer": "- Use raw type or declare\n            <code>List&lt;Object&gt;</code>\n            to store different types.\n            <br>\n            - Java supports storing heterogeneous data via Object references.\n            <br>\n            - You lose type safety and need to cast when retrieving elements.\n            <br>\n            - Better alternatives include using wrapper classes or generics.\n            <br>\n            <pre><code>\nList&lt;Object&gt; list = new ArrayList&lt;&gt;();\nlist.add(\"apple\");\nlist.add(123);\nlist.add('c');\nlist.add(new Sample());\n  </code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Use raw type or declare List to store different types.",
        "- Java supports storing heterogeneous data via Object references."
      ]
    },
    {
      "question": "Write without try block?",
      "answer": "- You can declare an exception using\n            <code>throws</code>\n            in the method signature.\n            <br>\n            - Used when the calling method should handle the exception.\n            <br>\n            - Common in IO operations and checked exceptions.\n            <br>\n            - Syntax:\n            <code>public void method() throws IOException</code>\n            .\n            <br>\n            - Helps propagate the exception to higher layers.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- You can declare an exception using throws in the method signature.",
        "- Used when the calling method should handle the exception."
      ]
    },
    {
      "question": "How to create a thread?",
      "answer": "- Extend\n            <code>Thread</code>\n            and override\n            <code>run()</code>\n            method.\n            <br>\n            - Or implement\n            <code>Runnable</code>\n            and pass to a Thread instance.\n            <br>\n            - Start the thread using\n            <code>start()</code>\n            method.\n            <br>\n            - Example:\n            <code>Thread t = new Thread(new MyRunnable()); t.start();</code>\n            <br>\n            - Prefer Runnable for better separation of logic and thread behavior.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Extend Thread and override run() method.",
        "- Or implement Runnable and pass to a Thread instance."
      ]
    },
    {
      "question": "What is synchronized block?",
      "answer": "- A synchronized block ensures only one thread accesses the block at a time.\n            <br>\n            - Prevents race conditions and data inconsistency.\n            <br>\n            - Syntax:\n            <code>synchronized (object) { // code block }</code>\n            <br>\n            - Can synchronize on\n            <code>this</code>\n            or a specific object.\n            <br>\n            - Offers better control than synchronizing entire methods.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A synchronized block ensures only one thread accesses the block at a time.",
        "- Prevents race conditions and data inconsistency."
      ]
    },
    {
      "question": "How to create exception?",
      "answer": "- Extend\n            <code>Exception</code>\n            (checked) or\n            <code>RuntimeException</code>\n            (unchecked).\n            <br>\n            - Define constructors to pass messages or causes.\n            <br>\n            - Helps represent domain-specific issues clearly.\n            <br>\n            - Example:\n            <code>throw new CustomException(\"Invalid input\");</code>\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- Extend Exception (checked) or RuntimeException (unchecked).",
        "- Define constructors to pass messages or causes."
      ]
    },
    {
      "question": "Difference between throws and throw",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Aspect</th>\n                  <th>throw</th>\n                  <th>throws</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Usage</td>\n                  <td>Used to actually throw an exception</td>\n                  <td>Used to declare possible exceptions</td>\n                </tr>\n                <tr>\n                  <td>Location</td>\n                  <td>Inside method body</td>\n                  <td>Method signature</td>\n                </tr>\n                <tr>\n                  <td>Followed By</td>\n                  <td>Instance of Exception</td>\n                  <td>Exception class name(s)</td>\n                </tr>\n                <tr>\n                  <td>Example</td>\n                  <td><code>throw new IOException()</code></td>\n                  <td><code>public void read() throws IOException</code></td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Aspect throw throws Usage Used to actually throw an exception Used to declare possible exceptions Location Inside method body Method signature Followed By Instance of Exception Exception class name(s)"
      ]
    },
    {
      "question": "Which Set collection stores insertion order?",
      "answer": "-\n            <code>LinkedHashSet</code>\n            maintains the order of elements as inserted.\n            <br>\n            - Based on HashTable + linked list implementation.\n            <br>\n            - Useful when both uniqueness and order are important.\n            <br>\n            - Slower than\n            <code>HashSet</code>\n            but predictable iteration.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- LinkedHashSet maintains the order of elements as inserted.",
        "- Based on HashTable + linked list implementation."
      ]
    },
    {
      "question": "Which collection stores duplicate values?",
      "answer": "-\n            <code>List</code>\n            types like\n            <code>ArrayList</code>\n            and\n            <code>LinkedList</code>\n            allow duplicates.\n            <br>\n            - In contrast,\n            <code>Set</code>\n            types do not allow duplicates.\n            <br>\n            - Useful when maintaining all values including repeats is important.\n            <br>\n            - Order can also be preserved depending on the List implementation.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- List types like ArrayList and LinkedList allow duplicates.",
        "- In contrast, Set types do not allow duplicates."
      ]
    },
    {
      "question": "Difference between == and .equals()",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Aspect</th>\n                  <th>==</th>\n                  <th>.equals()</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Type</td>\n                  <td>Operator</td>\n                  <td>Method</td>\n                </tr>\n                <tr>\n                  <td>Comparison</td>\n                  <td>Memory reference</td>\n                  <td>Content/Value</td>\n                </tr>\n                <tr>\n                  <td>Overridable</td>\n                  <td>No</td>\n                  <td>Yes</td>\n                </tr>\n                <tr>\n                  <td>Usage</td>\n                  <td>Check identity</td>\n                  <td>Check logical equality</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Aspect == .equals() Type Operator Method Comparison Memory reference Content/Value Overridable No Yes Usage Check identity Check logical equality"
      ]
    },
    {
      "question": "Which Map allows duplicate keys?",
      "answer": "- None. All Map implementations in Java disallow duplicate keys.\n            <br>\n            - If a key is re-inserted, the value is replaced.\n            <br>\n            - Duplicate values are allowed but keys must be unique.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "All Map implementations in Java disallow duplicate keys.",
        "- If a key is re-inserted, the value is replaced."
      ]
    },
    {
      "question": "What is ExecutorService?",
      "answer": "- An interface for managing thread pools in Java.\n            <br>\n            - Provides methods like\n            <code>submit()</code>\n            ,\n            <code>invokeAll()</code>\n            for task execution.\n            <br>\n            - Helps manage concurrency in a more scalable way than creating threads manually.\n            <br>\n            - Supports graceful shutdown and future-based async results.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- An interface for managing thread pools in Java.",
        "- Provides methods like submit() , invokeAll() for task execution."
      ]
    },
    {
      "question": "What is String Constant Pool?",
      "answer": "- A special memory region in Java heap storing interned string literals.\n            <br>\n            - Helps reduce memory usage and improves performance.\n            <br>\n            - Strings with the same content point to the same memory address.\n            <br>\n            - Created automatically by JVM when using\n            <code>\"text\"</code>\n            or\n            <code>intern()</code>\n            .\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A special memory region in Java heap storing interned string literals.",
        "- Helps reduce memory usage and improves performance."
      ]
    },
    {
      "question": "What is map() and flatMap()?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Function</th>\n                  <th>map()</th>\n                  <th>flatMap()</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Behavior</td>\n                  <td>Applies function and returns a Stream of values</td>\n                  <td>Flattens nested Streams into a single one</td>\n                </tr>\n                <tr>\n                  <td>Use Case</td>\n                  <td>One-to-one mapping</td>\n                  <td>One-to-many mapping</td>\n                </tr>\n                <tr>\n                  <td>Return Type</td>\n                  <td><code>Stream&lt;Stream&lt;T&gt;&gt;</code></td>\n                  <td><code>Stream&lt;T&gt;</code></td>\n                </tr>\n                <tr>\n                  <td>Example</td>\n                  <td><code>list.stream().map()</code></td>\n                  <td><code>list.stream().flatMap()</code></td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Function map() flatMap() Behavior Applies function and returns a Stream of values Flattens nested Streams into a single one Use Case One-to-one mapping One-to-many mapping Return Type Stream > Stream Example list."
      ]
    },
    {
      "question": "What is volatile and transient?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Keyword</th>\n                  <th>volatile</th>\n                  <th>transient</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Purpose</td>\n                  <td>Ensures visibility across threads</td>\n                  <td>Prevents serialization of a field</td>\n                </tr>\n                <tr>\n                  <td>Usage</td>\n                  <td>Multithreading</td>\n                  <td>Serialization</td>\n                </tr>\n                <tr>\n                  <td>Persistence</td>\n                  <td>Part of object state</td>\n                  <td>Skipped during serialization</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Keyword volatile transient Purpose Ensures visibility across threads Prevents serialization of a field Usage Multithreading Serialization Persistence Part of object state Skipped during serialization"
      ]
    },
    {
      "question": "What is Clonable?",
      "answer": "- A marker interface to support object cloning using\n            <code>clone()</code>\n            .\n            <br>\n            - Must override\n            <code>clone()</code>\n            from\n            <code>Object</code>\n            class.\n            <br>\n            - Enables shallow copy by default.\n            <br>\n            - Deep copy needs manual implementation.\n            <br>\n            - Throws\n            <code>CloneNotSupportedException</code>\n            if not implemented.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- A marker interface to support object cloning using clone() .",
        "- Must override clone() from Object class."
      ]
    },
    {
      "question": "What is Marker Interface?",
      "answer": "- An interface with no methods or fields.\n            <br>\n            - Used to signal or tag a class for special treatment.\n            <br>\n            - Examples include\n            <code>Serializable</code>\n            ,\n            <code>Clonable</code>\n            ,\n            <code>Remote</code>\n            .\n            <br>\n            - JVM or frameworks detect marker interfaces using reflection.\n            <br>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "- An interface with no methods or fields.",
        "- Used to signal or tag a class for special treatment."
      ]
    },
    {
      "question": "Difference between Runnable and Clonable",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Aspect</th>\n                  <th>Runnable</th>\n                  <th>Clonable</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Purpose</td>\n                  <td>Enable multithreading</td>\n                  <td>Enable object cloning</td>\n                </tr>\n                <tr>\n                  <td>Methods</td>\n                  <td><code>run()</code></td>\n                  <td>\n                    <code>clone()</code>\n                    (from Object)\n                  </td>\n                </tr>\n                <tr>\n                  <td>Marker Interface</td>\n                  <td>No</td>\n                  <td>Yes</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Aspect Runnable Clonable Purpose Enable multithreading Enable object cloning Methods run() clone() (from Object) Marker Interface No Yes"
      ]
    },
    {
      "question": "toList() vs collect(Collectors.toList())",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Feature</th>\n                  <th>collect(Collectors.toList())</th>\n                  <th>toList()</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Java Version</td>\n                  <td>Java 8+</td>\n                  <td>Java 16+</td>\n                </tr>\n                <tr>\n                  <td>Mutability</td>\n                  <td>Mutable</td>\n                  <td>Immutable</td>\n                </tr>\n                <tr>\n                  <td>Type</td>\n                  <td>ArrayList</td>\n                  <td>Immutable List</td>\n                </tr>\n                <tr>\n                  <td>Modifiability</td>\n                  <td>Can modify</td>\n                  <td>Cannot modify</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature collect(Collectors.toList()) toList() Java Version Java 8+ Java 16+ Mutability Mutable Immutable Type ArrayList Immutable List Modifiability Can modify Cannot modify"
      ]
    },
    {
      "question": "Explain the OOPS main features such as encapsulation, inheritance, and polymorphism?",
      "answer": "<ol>\n                <li>\n                  <strong>Encapsulation:</strong>\n                  Combines data and methods in a single unit (class), hiding internal implementation\n                  using access modifiers like private/protected.\n                </li>\n                <li>\n                  <strong>Inheritance:</strong>\n                  Enables child classes to inherit fields and methods from parent classes, promoting\n                  code reuse and hierarchical relationships.\n                </li>\n                <li>\n                  <strong>Polymorphism:</strong>\n                  Allows the same method to behave differently based on object type. Supports method\n                  overloading and overriding.\n                </li>\n                <li>\n                  <strong>Abstraction:</strong>\n                  Hides internal implementation and shows only functionality through interfaces or\n                  abstract classes.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Encapsulation: Combines data and methods in a single unit (class), hiding internal implementation using access modifiers like private/protected.",
        "Inheritance: Enables child classes to inherit fields and methods from parent classes, promoting code reuse and hierarchical relationships.",
        "Polymorphism: Allows the same method to behave differently based on object type. Supports method overloading and overriding."
      ]
    },
    {
      "question": "Stream vs Collection difference?",
      "answer": "<table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Feature</th>\n                    <th>Collection</th>\n                    <th>Stream</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Storage</td>\n                    <td>Stores elements in memory</td>\n                    <td>Does not store data, only processes data</td>\n                  </tr>\n                  <tr>\n                    <td>Processing</td>\n                    <td>External iteration (using loops)</td>\n                    <td>Internal iteration (pipeline)</td>\n                  </tr>\n                  <tr>\n                    <td>Consumption</td>\n                    <td>Reusable</td>\n                    <td>One-time use</td>\n                  </tr>\n                  <tr>\n                    <td>Parallelism</td>\n                    <td>Manual</td>\n                    <td>Built-in via parallel streams</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Collection Stream Storage Stores elements in memory Does not store data, only processes data Processing External iteration (using loops) Internal iteration (pipeline) Consumption Reusable One-"
      ]
    },
    {
      "question": "Why we need to use stream instead of collection?",
      "answer": "<ol>\n                <li>\n                  Stream API enables functional-style operations for clean and declarative code.\n                </li>\n                <li>Supports lazy evaluation and chaining with intermediate operations.</li>\n                <li>Can be parallelized to improve performance on large datasets.</li>\n                <li>Does not modify the original collection, ensuring data immutability.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Stream API enables functional-style operations for clean and declarative code.",
        "Supports lazy evaluation and chaining with intermediate operations.",
        "Can be parallelized to improve performance on large datasets."
      ]
    },
    {
      "question": "How stream is created internally?",
      "answer": "<ol>\n                <li>\n                  Streams are created using\n                  <code>Collection.stream()</code>\n                  or\n                  <code>Stream.of()</code>\n                  .\n                </li>\n                <li>Under the hood, Spliterator is used for iteration support.</li>\n                <li>Intermediate operations build a pipeline of lazy-evaluated steps.</li>\n                <li>\n                  Pipeline is executed only when a terminal operation (e.g.,\n                  <code>collect()</code>\n                  ) is called.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Streams are created using Collection.stream() or Stream.of() .",
        "Under the hood, Spliterator is used for iteration support.",
        "Intermediate operations build a pipeline of lazy-evaluated steps."
      ]
    },
    {
      "question": "Java 8 features?",
      "answer": "<ol>\n                <li>Lambda Expressions for writing concise function implementations.</li>\n                <li>Stream API for functional operations on collections.</li>\n                <li>\n                  Functional Interfaces with\n                  <code>@FunctionalInterface</code>\n                  annotation.\n                </li>\n                <li>Optional class for avoiding null pointer exceptions.</li>\n                <li>Default & Static methods in interfaces for backward compatibility.</li>\n                <li>\n                  New Date and Time API under\n                  <code>java.time</code>\n                  package (e.g., LocalDate).\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Lambda Expressions for writing concise function implementations.",
        "Stream API for functional operations on collections.",
        "Functional Interfaces with @FunctionalInterface annotation."
      ]
    },
    {
      "question": "Optional class use?",
      "answer": "<ol>\n                <li>\n                  <code>Optional</code>\n                  is a container object used to contain not-null objects.\n                </li>\n                <li>\n                  Avoids\n                  <code>NullPointerException</code>\n                  by safely representing null values.\n                </li>\n                <li>\n                  Provides methods like\n                  <code>isPresent()</code>\n                  ,\n                  <code>orElse()</code>\n                  ,\n                  <code>ifPresent()</code>\n                  .\n                </li>\n                <li>Encourages better null checks and functional-style programming.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Optional is a container object used to contain not-null objects.",
        "Avoids NullPointerException by safely representing null values.",
        "Provides methods like isPresent() , orElse() , ifPresent() ."
      ]
    },
    {
      "question": "Is datetime class mutable in java8?",
      "answer": "<ol>\n                <li>\n                  No, DateTime classes like\n                  <code>LocalDate</code>\n                  ,\n                  <code>LocalTime</code>\n                  ,\n                  <code>LocalDateTime</code>\n                  are immutable.\n                </li>\n                <li>\n                  They return new objects on operations like\n                  <code>plusDays()</code>\n                  , ensuring thread safety.\n                </li>\n                <li>\n                  Prevents unintentional modifications and bugs in multithreaded environments.\n                </li>\n                <li>\n                  Immutable design improves predictability and functional programming compatibility.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "No, DateTime classes like LocalDate , LocalTime , LocalDateTime are immutable.",
        "They return new objects on operations like plusDays() , ensuring thread safety.",
        "Prevents unintentional modifications and bugs in multithreaded environments."
      ]
    },
    {
      "question": "Stream vs parallel stream?",
      "answer": "<table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Feature</th>\n                    <th>Stream</th>\n                    <th>Parallel Stream</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Execution</td>\n                    <td>Sequential (single thread)</td>\n                    <td>Concurrent (multiple threads)</td>\n                  </tr>\n                  <tr>\n                    <td>Performance</td>\n                    <td>Better for small tasks</td>\n                    <td>Better for large data sets</td>\n                  </tr>\n                  <tr>\n                    <td>Thread safety</td>\n                    <td>Not a concern</td>\n                    <td>Requires caution with shared state</td>\n                  </tr>\n                  <tr>\n                    <td>Control</td>\n                    <td>More predictable</td>\n                    <td>Less predictable order</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Feature Stream Parallel Stream Execution Sequential (single thread) Concurrent (multiple threads) Performance Better for small tasks Better for large data sets Thread safety Not a concern Requires cau"
      ]
    },
    {
      "question": "How parallel stream works internally?",
      "answer": "<ol>\n                <li>\n                  Uses the\n                  <code>ForkJoinPool</code>\n                  under the hood (default common pool).\n                </li>\n                <li>Splits data into smaller parts using Spliterator.</li>\n                <li>Processes each subtask in a separate thread concurrently.</li>\n                <li>Combines partial results into the final result after execution.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Uses the ForkJoinPool under the hood (default common pool).",
        "Splits data into smaller parts using Spliterator.",
        "Processes each subtask in a separate thread concurrently."
      ]
    },
    {
      "question": "When to use parallel stream?",
      "answer": "<ol>\n                <li>Use when working with large datasets that are CPU-intensive.</li>\n                <li>Use only for stateless, independent operations.</li>\n                <li>Avoid if task is IO-bound or involves shared mutable state.</li>\n                <li>Helps utilize multi-core CPU for better performance.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Use when working with large datasets that are CPU-intensive.",
        "Use only for stateless, independent operations.",
        "Avoid if task is IO-bound or involves shared mutable state."
      ]
    },
    {
      "question": "What is terminal operation?",
      "answer": "<ol>\n                <li>Terminal operation triggers execution of the stream pipeline.</li>\n                <li>\n                  Examples:\n                  <code>forEach()</code>\n                  ,\n                  <code>collect()</code>\n                  ,\n                  <code>reduce()</code>\n                  .\n                </li>\n                <li>Produces a non-stream result (value, collection, side effect).</li>\n                <li>After terminal operation, the stream is considered consumed.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Terminal operation triggers execution of the stream pipeline.",
        "Examples: forEach() , collect() , reduce() .",
        "Produces a non-stream result (value, collection, side effect)."
      ]
    },
    {
      "question": "Can we use method reference for instance methods?",
      "answer": "<ol>\n                <li>\n                  Yes, instance methods can be referenced using\n                  <code>object::methodName</code>\n                  .\n                </li>\n                <li>Must be compatible with the target functional interface method signature.</li>\n                <li>Improves code readability and reusability.</li>\n                <li>Often used with stream operations and lambda expressions.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Yes, instance methods can be referenced using object::methodName .",
        "Must be compatible with the target functional interface method signature.",
        "Improves code readability and reusability."
      ]
    },
    {
      "question": "What is functional interface?",
      "answer": "<ol>\n                <li>An interface with exactly one abstract method.</li>\n                <li>Supports lambda expressions and method references.</li>\n                <li>May contain default and static methods.</li>\n                <li>\n                  Annotated with\n                  <code>@FunctionalInterface</code>\n                  (optional but recommended).\n                </li>\n                <li>\n                  Examples:\n                  <code>Runnable</code>\n                  ,\n                  <code>Callable</code>\n                  ,\n                  <code>Function</code>\n                  .\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "An interface with exactly one abstract method.",
        "Supports lambda expressions and method references.",
        "May contain default and static methods."
      ]
    },
    {
      "question": "Is functional interface exist before java 8?",
      "answer": "<ol>\n                <li>\n                  Yes, interfaces like\n                  <code>Runnable</code>\n                  and\n                  <code>Comparator</code>\n                  existed before Java 8.\n                </li>\n                <li>\n                  They had one abstract method but weren't formally called \"functional interfaces.\"\n                </li>\n                <li>\n                  Java 8 introduced the\n                  <code>@FunctionalInterface</code>\n                  annotation for better clarity.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Yes, interfaces like Runnable and Comparator existed before Java 8.",
        "They had one abstract method but weren't formally called \"functional interfaces.\"",
        "Java 8 introduced the @FunctionalInterface annotation for better clarity."
      ]
    },
    {
      "question": "Create a functional interface and add implementation?",
      "answer": "<ol>\n                <li>\n                  <pre><code>@FunctionalInterface\ninterface MyFunctionalInterface {\nvoid execute();\n}\n\npublic class Main {\npublic static void main(String[] args) {\n    MyFunctionalInterface impl = () -&gt; System.out.println(\"Implemented!\");\n    impl.execute();\n}\n}</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "@FunctionalInterface interface MyFunctionalInterface { void execute(); } public class Main { public static void main(String[] args) { MyFunctionalInterface impl = () -> System."
      ]
    },
    {
      "question": "Why functional interface because previously anonymous class do the same kind of functionality?",
      "answer": "<ol>\n                <li>\n                  Functional interfaces simplify code by enabling lambda expressions, reducing\n                  verbosity compared to anonymous classes.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Functional interfaces simplify code by enabling lambda expressions, reducing verbosity compared to anonymous classes."
      ]
    },
    {
      "question": "Grouping by in java8?",
      "answer": "<ol>\n                <li>\n                  Example:\n                  <code>Collectors.groupingBy(Person::getAge)</code>\n                  groups a list of people by their age.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Example: Collectors.groupingBy(Person::getAge) groups a list of people by their age."
      ]
    },
    {
      "question": "Count each letter count with java 8?",
      "answer": "<ol>\n                <li>\n                  <pre><code>String input = \"hello\";\nMap&lt;Character, Long&gt; result = input.chars()\n.mapToObj(c -&gt; (char)c)\n.collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "String input = \"hello\"; Map result = input.chars() .mapToObj(c -> (char)c) .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));"
      ]
    },
    {
      "question": "Collect the duplicate elements in the list with java 8?",
      "answer": "<ol>\n                <li>\n                  <pre><code>List&lt;Integer&gt; list = Arrays.asList(1, 2, 2, 3, 3);\nSet&lt;Integer&gt; duplicates = list.stream()\n.filter(i -&gt; Collections.frequency(list, i) &gt; 1)\n.collect(Collectors.toSet());</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List list = Arrays.asList(1, 2, 2, 3, 3); Set duplicates = list.stream() .filter(i -> Collections.frequency(list, i) > 1) .collect(Collectors.toSet());"
      ]
    },
    {
      "question": "Sort the list with java8?",
      "answer": "<ol>\n                <li>\n                  <pre><code>List&lt;String&gt; list = Arrays.asList(\"b\", \"a\", \"c\");\nlist.sort(Comparator.naturalOrder());</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List list = Arrays.asList(\"b\", \"a\", \"c\"); list.sort(Comparator.naturalOrder());"
      ]
    },
    {
      "question": "Get the employee name list from the list of employees?",
      "answer": "<ol>\n                <li>\n                  <pre><code>List&lt;String&gt; names = employees.stream()\n.map(Employee::getName)\n.collect(Collectors.toList());</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List names = employees.stream() .map(Employee::getName) .collect(Collectors.toList());"
      ]
    },
    {
      "question": "Parallel stream example?",
      "answer": "<ol>\n                <li>\n                  <pre><code>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5);\nnumbers.parallelStream().forEach(System.out::println);</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List numbers = Arrays.asList(1, 2, 3, 4, 5); numbers.parallelStream().forEach(System.out::println);"
      ]
    },
    {
      "question": "Why static initializers?",
      "answer": "<ol>\n                <li>\n                  Static initializers are used to initialize static variables or perform setup tasks\n                  when the class is loaded.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Static initializers are used to initialize static variables or perform setup tasks when the class is loaded."
      ]
    },
    {
      "question": "How to create custom exception class?",
      "answer": "<ol>\n                <li>\n                  <pre><code>class CustomException extends Exception {\npublic CustomException(String message) {\n    super(message);\n}\n}</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "class CustomException extends Exception { public CustomException(String message) { super(message); } }"
      ]
    },
    {
      "question": "Exception classes A and B extends A, can we throw checked exception from B and unchecked exception from A (vice versa)?",
      "answer": "<ol>\n                <li>\n                  Yes. Exception type doesn’t depend on class inheritance—checked and unchecked\n                  exceptions behave independently.\n                </li>\n                <li>Any subclass can throw its own exception type.</li>\n                <li>Checked exceptions must be declared or handled, regardless of hierarchy.</li>\n                <li>\n                  Unchecked exceptions (RuntimeException) can be thrown freely without declaration.\n                </li>\n                <li>\n                  Hierarchy only affects catch blocks—B’s exceptions can be caught when catching A.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Yes. Exception type doesn’t depend on class inheritance—checked and unchecked exceptions behave independently.",
        "Any subclass can throw its own exception type.",
        "Checked exceptions must be declared or handled, regardless of hierarchy."
      ]
    },
    {
      "question": "When do we need to invoke finalize method?",
      "answer": "<ol>\n                <li>\n                  <code>finalize()</code>\n                  is called by GC before reclaiming memory of unreachable objects.\n                </li>\n                <li>Its use is discouraged due to unpredictability and poor performance.</li>\n                <li>Instead, use try-with-resources or explicit cleanup methods.</li>\n                <li>Finalizers may cause memory retention and unpredictability in modern JVMs.</li>\n                <li>Deprecated in recent Java versions (after Java&nbsp;8).</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "finalize() is called by GC before reclaiming memory of unreachable objects.",
        "Its use is discouraged due to unpredictability and poor performance.",
        "Instead, use try-with-resources or explicit cleanup methods."
      ]
    },
    {
      "question": "When do we use finally block?",
      "answer": "<ol>\n                <li>To run cleanup code regardless of exceptions.</li>\n                <li>Executes after try or catch blocks.</li>\n                <li>Useful for releasing non-AutoCloseable resources (e.g., streams).</li>\n                <li>Ensures consistency even if return or exception occurs.</li>\n                <li>Can be omitted with try-with-resources for AutoCloseable cases.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "To run cleanup code regardless of exceptions.",
        "Executes after try or catch blocks.",
        "Useful for releasing non-AutoCloseable resources (e.g., streams)."
      ]
    },
    {
      "question": "What is try with resources?",
      "answer": "<ol>\n                <li>Java construct that auto-closes resources at block end.</li>\n                <li>\n                  Resources must implement\n                  <code>AutoCloseable</code>\n                  or\n                  <code>Closeable</code>\n                  .\n                </li>\n                <li>\n                  Auto-generates finally block to call\n                  <code>close()</code>\n                  .\n                </li>\n                <li>Reduces boilerplate and potential resource leaks.</li>\n                <li>Supports multiple resources in one try with comma-separated list.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Java construct that auto-closes resources at block end.",
        "Resources must implement AutoCloseable or Closeable .",
        "Auto-generates finally block to call close() ."
      ]
    },
    {
      "question": "How to make a custom class eligible as a resource to use in try with resources?",
      "answer": "<ol>\n                <li>\n                  Implement\n                  <code>AutoCloseable</code>\n                  or\n                  <code>Closeable</code>\n                  .\n                </li>\n                <li>\n                  Override the\n                  <code>close()</code>\n                  method for cleanup logic.\n                </li>\n                <li>\n                  Ensure no exceptions escape close or declare\n                  <code>throws</code>\n                  .\n                </li>\n                <li>\n                  Use it in try declaration:\n                  <code>try (MyRes r = new MyRes()) {…}</code>\n                  .\n                </li>\n                <li>The close() will be invoked automatically after try block.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Implement AutoCloseable or Closeable .",
        "Override the close() method for cleanup logic.",
        "Ensure no exceptions escape close or declare throws ."
      ]
    },
    {
      "question": "== and equals?",
      "answer": "<ol>\n                <li>\n                  <code>==</code>\n                  compares object references (memory addresses).\n                </li>\n                <li>\n                  <code>equals()</code>\n                  compares logical equality (content), if overridden.\n                </li>\n                <li>\n                  Default\n                  <code>equals()</code>\n                  in Object → same as\n                  <code>==</code>\n                  .\n                </li>\n                <li>\n                  Override equals (and hashCode) in value-based classes (String, custom types).\n                </li>\n                <li>\n                  Use\n                  <code>==</code>\n                  for primitives; use equals for object values.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "== compares object references (memory addresses).",
        "equals() compares logical equality (content), if overridden.",
        "Default equals() in Object → same as == ."
      ]
    },
    {
      "question": "Why wrapper classes in java?",
      "answer": "<ol>\n                <li>\n                  Wrap primitive types as objects (e.g.,\n                  <code>int</code>\n                  →\n                  <code>Integer</code>\n                  ).\n                </li>\n                <li>Needed for use in collections (generics require objects).</li>\n                <li>Provide utility methods: parsing, converting, and comparison.</li>\n                <li>Support autoboxing/unboxing since Java&nbsp;5.</li>\n                <li>Allow null representation and sophistication beyond primitives.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Wrap primitive types as objects (e.g., int → Integer ).",
        "Needed for use in collections (generics require objects).",
        "Provide utility methods: parsing, converting, and comparison."
      ]
    },
    {
      "question": "What is volatile variable?",
      "answer": "<ol>\n                <li>\n                  <code>volatile</code>\n                  ensures that changes to a variable are visible across threads.\n                </li>\n                <li>Reads and writes bypass CPU caches and use main memory.</li>\n                <li>Suitable for flags or simple state markers.</li>\n                <li>Does not guarantee atomicity for compound actions.</li>\n                <li>\n                  Use\n                  <code>synchronized</code>\n                  or\n                  <code>Atomic</code>\n                  types for complex operations.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "volatile ensures that changes to a variable are visible across threads.",
        "Reads and writes bypass CPU caches and use main memory.",
        "Suitable for flags or simple state markers."
      ]
    },
    {
      "question": "What is the algorithm used inside Arrays.sort?",
      "answer": "<ol>\n                <li>For primitive arrays: Dual-Pivot QuickSort (fast average performance).</li>\n                <li>For object arrays: TimSort (combines merge + insertion sort).</li>\n                <li>Optimized for partially ordered data (natural runs detection).</li>\n                <li>Ensures stability for object sorting (equal elements retain order).</li>\n                <li>\n                  Implemented in\n                  <code>java.util.Arrays</code>\n                  since Java&nbsp;7+.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "For primitive arrays: Dual-Pivot QuickSort (fast average performance).",
        "For object arrays: TimSort (combines merge + insertion sort).",
        "Optimized for partially ordered data (natural runs detection)."
      ]
    },
    {
      "question": "List vs set vs map?",
      "answer": "<ol>\n                <li>\n                  <strong>List:</strong>\n                  Ordered collection, allows duplicates, index-based access.\n                </li>\n                <li>\n                  <strong>Set:</strong>\n                  Unordered, unique elements, no duplicates.\n                </li>\n                <li>\n                  <strong>Map:</strong>\n                  Stores key-value pairs, keys unique but values can repeat.\n                </li>\n                <li>Choose List for sequence, Set for uniqueness, Map for key-based lookup.</li>\n                <li>Implementations: ArrayList, HashSet, HashMap, etc.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List: Ordered collection, allows duplicates, index-based access.",
        "Set: Unordered, unique elements, no duplicates.",
        "Map: Stores key-value pairs, keys unique but values can repeat."
      ]
    },
    {
      "question": "Concurrent hashmap vs hash map difference?",
      "answer": "<ol>\n                <li>\n                  <strong>HashMap:</strong>\n                  Not thread‑safe, risk of corruption in concurrent use.\n                </li>\n                <li>\n                  <strong>ConcurrentHashMap:</strong>\n                  Thread‑safe via finer-grained locking.\n                </li>\n                <li>Uses lock striping or segment-level locking per bucket.</li>\n                <li>Allows concurrent reads and writes with high throughput.</li>\n                <li>Null keys/values not allowed in ConcurrentHashMap (allowed in HashMap).</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "HashMap: Not thread‑safe, risk of corruption in concurrent use.",
        "ConcurrentHashMap: Thread‑safe via finer-grained locking.",
        "Uses lock striping or segment-level locking per bucket."
      ]
    },
    {
      "question": "How hashmap internally works?",
      "answer": "<ol>\n                <li>\n                  Uses an array of buckets; each bucket is a linked list or tree (for collisions).\n                </li>\n                <li>\n                  Computes index via\n                  <code>hashCode(key) & (n‑1)</code>\n                  .\n                </li>\n                <li>\n                  On collision, chains entries or converts to a balanced tree (if threshold\n                  exceeded).\n                </li>\n                <li>Resizes when load factor threshold (default 0.75) is exceeded.</li>\n                <li>Provides O(1) average-case insert, lookup, and delete.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Uses an array of buckets; each bucket is a linked list or tree (for collisions).",
        "Computes index via hashCode(key) & (n‑1) .",
        "On collision, chains entries or converts to a balanced tree (if threshold exceeded)."
      ]
    },
    {
      "question": "How index is calculated in hashmap?",
      "answer": "<ol>\n                <li>\n                  Compute\n                  <code>hash = key.hashCode()</code>\n                  , then apply bit-mixing.\n                </li>\n                <li>\n                  Index =\n                  <code>hash & (capacity - 1)</code>\n                  (when capacity is power of two).\n                </li>\n                <li>This ensures uniform distribution across buckets.</li>\n                <li>Reduces collisions and improves performance.</li>\n                <li>Critical for internal optimization and scalability.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Compute hash = key.hashCode() , then apply bit-mixing.",
        "Index = hash & (capacity - 1) (when capacity is power of two).",
        "This ensures uniform distribution across buckets."
      ]
    },
    {
      "question": "How concurrent hashmap works for multithread?",
      "answer": "<ol>\n                <li>Partitions data into segments or buckets with separate locks.</li>\n                <li>Readers access data without locking; writers lock only segment.</li>\n                <li>Reduces contention and improves parallel throughput.</li>\n                <li>Uses lock striping or synchronized bins depending on Java version.</li>\n                <li>Avoids whole-map locking as seen in Hashtable.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Partitions data into segments or buckets with separate locks.",
        "Readers access data without locking; writers lock only segment.",
        "Reduces contention and improves parallel throughput."
      ]
    },
    {
      "question": "Which operation is locked in concurrent hashmap?",
      "answer": "<ol>\n                <li>Write operations are locked at the segment level.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Write operations are locked at the segment level."
      ]
    },
    {
      "question": "What is the mechanism of locking happens in concurrent hashmap?",
      "answer": "<ol>\n                <li>Uses fine-grained locking (lock striping) to minimize contention.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Uses fine-grained locking (lock striping) to minimize contention."
      ]
    },
    {
      "question": "What happens if more than one thread try to insert into hashmap?",
      "answer": "<ol>\n                <li>Without synchronization, data corruption or infinite loops can occur.</li>\n                <li>Buckets or chains may break leading to lost entries.</li>\n                <li>May trigger race conditions during table resize.</li>\n                <li>Use ConcurrentHashMap or synchronized wrapper to avoid issues.</li>\n                <li>HashMap alone is unsafe in multithreaded environments.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Without synchronization, data corruption or infinite loops can occur.",
        "Buckets or chains may break leading to lost entries.",
        "May trigger race conditions during table resize."
      ]
    },
    {
      "question": "Set internal working?",
      "answer": "<ol>\n                <li>HashSet: backed by a HashMap internally; uses hash buckets.</li>\n                <li>LinkedHashSet: maintains insertion order via linked list in each bucket.</li>\n                <li>TreeSet: backed by TreeMap, stores elements in sorted order.</li>\n                <li>Provides O(1) average performance for add, remove, contains (HashSet).</li>\n                <li>Different implementations suit different use-cases.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "HashSet: backed by a HashMap internally; uses hash buckets.",
        "LinkedHashSet: maintains insertion order via linked list in each bucket.",
        "TreeSet: backed by TreeMap, stores elements in sorted order."
      ]
    },
    {
      "question": "Time complexity for hashmap operations?",
      "answer": "<ol>\n                <li>Insert, delete, lookup: O(1) on average.</li>\n                <li>Worst-case (many collisions): O(n), but rare with good hashing.</li>\n                <li>Resizing takes O(n), amortized cost remains O(1).</li>\n                <li>\n                  Using balanced tree (in Java&nbsp;8+) avoids worst-case performance.\n                  <br>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Insert, delete, lookup: O(1) on average.",
        "Worst-case (many collisions): O(n), but rare with good hashing.",
        "Resizing takes O(n), amortized cost remains O(1)."
      ]
    },
    {
      "question": "What is the data structure used for bucket in the hashmap?",
      "answer": "<ol>\n                <li>Buckets are initially linked lists.</li>\n                <li>After threshold, converted to balanced trees (TreeNode) for performance.</li>\n                <li>Keeps insertion, lookup efficient under high load.</li>\n                <li>Combination ensures O(1) average performance and O(log n) worst-case.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Buckets are initially linked lists.",
        "After threshold, converted to balanced trees (TreeNode) for performance.",
        "Keeps insertion, lookup efficient under high load."
      ]
    },
    {
      "question": "What is List, Set, and Map?",
      "answer": "<ol>\n                <li>\n                  <strong>List:</strong>\n                  Ordered, allows duplicates, access by index.\n                </li>\n                <li>\n                  <strong>Set:</strong>\n                  Unordered or ordered depending on implementation, no duplicates.\n                </li>\n                <li>\n                  <strong>Map:</strong>\n                  Key‑value pairs, keys unique, values can duplicate.\n                </li>\n                <li>Choose List for sequences, Set for uniqueness, Map for key-based lookup.</li>\n                <li>Implementations include ArrayList, HashSet, LinkedHashMap, TreeMap, etc.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List: Ordered, allows duplicates, access by index.",
        "Set: Unordered or ordered depending on implementation, no duplicates.",
        "Map: Key‑value pairs, keys unique, values can duplicate."
      ]
    },
    {
      "question": "What are the differences between List and Set?",
      "answer": "<ol>\n                <li>\n                  <strong>List:</strong>\n                  Allows duplicates, maintains insertion order, index access.\n                </li>\n                <li>\n                  <strong>Set:</strong>\n                  No duplicates, no guaranteed order (unless LinkedHashSet/TreeSet).\n                </li>\n                <li>List is good for ordered data with repetition; Set for unique collections.</li>\n                <li>Set implementations have faster membership tests by hash or tree.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "List: Allows duplicates, maintains insertion order, index access.",
        "Set: No duplicates, no guaranteed order (unless LinkedHashSet/TreeSet).",
        "List is good for ordered data with repetition; Set for unique collections."
      ]
    },
    {
      "question": "What are the differences between Hashtable, HashMap, and TreeMap?",
      "answer": "<ol>\n                <li>\n                  <strong>Hashtable:</strong>\n                  Thread-safe (synchronized), no null keys/values, legacy class.\n                </li>\n                <li>\n                  <strong>HashMap:</strong>\n                  Not thread-safe, allows one null key and null values.\n                </li>\n                <li>\n                  <strong>TreeMap:</strong>\n                  Sorted by key, implements NavigableMap, slower due to tree structure.\n                </li>\n                <li>\n                  Choose Hashtable for thread safety, HashMap for general use, TreeMap for sorted\n                  keys.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Hashtable: Thread-safe (synchronized), no null keys/values, legacy class.",
        "HashMap: Not thread-safe, allows one null key and null values.",
        "TreeMap: Sorted by key, implements NavigableMap, slower due to tree structure."
      ]
    },
    {
      "question": "What is serialization and when it will be used?",
      "answer": "<ol>\n                <li>\n                  Process of converting an object into byte stream for storage or transmission.\n                </li>\n                <li>Used in RMI, web sessions, caching, and file/persistence operations.</li>\n                <li>\n                  Classes must implement\n                  <code>Serializable</code>\n                  marker interface.\n                </li>\n                <li>\n                  Use\n                  <code>transient</code>\n                  keyword to skip non-serializable fields.\n                </li>\n                <li>Deserialization recreates the object graph from the byte stream.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Process of converting an object into byte stream for storage or transmission.",
        "Used in RMI, web sessions, caching, and file/persistence operations.",
        "Classes must implement Serializable marker interface."
      ]
    },
    {
      "question": "What are the differences between an interface and an abstract class?",
      "answer": "<table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>Interface</th>\n                    <th>Abstract Class</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Defines behavior but no implementation (until Java 7).</td>\n                    <td>Can define both behavior and implementation.</td>\n                  </tr>\n                  <tr>\n                    <td>Supports multiple inheritance.</td>\n                    <td>Supports only single inheritance.</td>\n                  </tr>\n                  <tr>\n                    <td>Cannot have constructors.</td>\n                    <td>Can have constructors.</td>\n                  </tr>\n                  <tr>\n                    <td>All methods are abstract by default (Java 7 and below).</td>\n                    <td>Can have abstract and non-abstract methods.</td>\n                  </tr>\n                  <tr>\n                    <td>Fields are public, static, and final by default.</td>\n                    <td>Fields can be any access modifier and not necessarily final.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Interface Abstract Class Defines behavior but no implementation (until Java 7).",
        "Can define both behavior and implementation."
      ]
    },
    {
      "question": "What is mutable and immutable? Give some examples",
      "answer": "<ol>\n                <li>\n                  <strong>Mutable:</strong>\n                  Objects whose state can be changed after creation (e.g.,\n                  <code>StringBuilder</code>\n                  ,\n                  <code>ArrayList</code>\n                  ).\n                </li>\n                <li>\n                  <strong>Immutable:</strong>\n                  Objects whose state cannot be changed once created (e.g.,\n                  <code>String</code>\n                  ,\n                  <code>Integer</code>\n                  ).\n                </li>\n                <li>Immutability ensures thread-safety and predictability.</li>\n                <li>Mutables are preferred when frequent modifications are needed.</li>\n                <li>Immutables are useful in concurrent or secure systems.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Mutable: Objects whose state can be changed after creation (e.g., StringBuilder , ArrayList ).",
        "Immutable: Objects whose state cannot be changed once created (e.g., String , Integer ).",
        "Immutability ensures thread-safety and predictability."
      ]
    },
    {
      "question": "What are the differences between String, StringBuilder and StringBuffer?",
      "answer": "<ol>\n                <li>\n                  <strong>String:</strong>\n                  Immutable and thread-safe. Any operation creates a new object.\n                </li>\n                <li>\n                  <strong>StringBuilder:</strong>\n                  Mutable and not thread-safe. Faster for single-threaded tasks.\n                </li>\n                <li>\n                  <strong>StringBuffer:</strong>\n                  Mutable and thread-safe via synchronized methods.\n                </li>\n                <li>Use StringBuilder for performance in non-threaded environments.</li>\n                <li>StringBuffer is legacy but still useful in multi-threaded use cases.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "String: Immutable and thread-safe. Any operation creates a new object.",
        "StringBuilder: Mutable and not thread-safe. Faster for single-threaded tasks.",
        "StringBuffer: Mutable and thread-safe via synchronized methods."
      ]
    },
    {
      "question": "Differences between HashMap and ConcurrentHashMap?",
      "answer": "<ol>\n                <li>\n                  <strong>HashMap:</strong>\n                  Not thread-safe. Concurrent modifications may cause data corruption.\n                </li>\n                <li>\n                  <strong>ConcurrentHashMap:</strong>\n                  Thread-safe. Uses lock striping or bucket-level locking.\n                </li>\n                <li>ConcurrentHashMap disallows null keys and null values.</li>\n                <li>HashMap is faster for single-threaded operations.</li>\n                <li>ConcurrentHashMap is suitable for high-concurrency environments.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "HashMap: Not thread-safe. Concurrent modifications may cause data corruption.",
        "ConcurrentHashMap: Thread-safe. Uses lock striping or bucket-level locking.",
        "ConcurrentHashMap disallows null keys and null values."
      ]
    },
    {
      "question": "What is fail-fast and fail-safe?",
      "answer": "<ol>\n                <li>\n                  <strong>Fail-Fast:</strong>\n                  Throws\n                  <code>ConcurrentModificationException</code>\n                  if modified during iteration (e.g., ArrayList, HashMap).\n                </li>\n                <li>Operates on the actual collection and checks structural changes.</li>\n                <li>\n                  <strong>Fail-Safe:</strong>\n                  Works on a cloned copy and avoids exceptions (e.g., ConcurrentHashMap,\n                  CopyOnWriteArrayList).\n                </li>\n                <li>Fail-safe is slower but safer in multi-threaded use cases.</li>\n                <li>\n                  Fail-fast improves performance but must be used with care in concurrent code.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Fail-Fast: Throws ConcurrentModificationException if modified during iteration (e.g., ArrayList, HashMap).",
        "Operates on the actual collection and checks structural changes.",
        "Fail-Safe: Works on a cloned copy and avoids exceptions (e.g., ConcurrentHashMap, CopyOnWriteArrayList)."
      ]
    },
    {
      "question": "What is User defined Exception?",
      "answer": "<ol>\n                <li>\n                  Custom exceptions created by extending\n                  <code>Exception</code>\n                  (checked) or\n                  <code>RuntimeException</code>\n                  (unchecked).\n                </li>\n                <li>\n                  Allows developers to provide meaningful error messages for business logic errors.\n                </li>\n                <li>\n                  Typically contains constructors and optionally overridden\n                  <code>toString()</code>\n                  or\n                  <code>getMessage()</code>\n                  .\n                </li>\n                <li>\n                  Example:\n                  <code>class MyException extends Exception { ... }</code>\n                </li>\n                <li>Improves clarity and control in exception handling.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Custom exceptions created by extending Exception (checked) or RuntimeException (unchecked).",
        "Allows developers to provide meaningful error messages for business logic errors.",
        "Typically contains constructors and optionally overridden toString() or getMessage() ."
      ]
    },
    {
      "question": "What is Comparator and Comparable? List out differences",
      "answer": "<table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>Comparable</th>\n                    <th>Comparator</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Defines natural ordering via\n                      <code>compareTo()</code>\n                      method.\n                    </td>\n                    <td>\n                      Defines custom ordering via\n                      <code>compare()</code>\n                      method.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Implemented in the class itself.</td>\n                    <td>Implemented in a separate class.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Located in\n                      <code>java.lang</code>\n                      package.\n                    </td>\n                    <td>\n                      Located in\n                      <code>java.util</code>\n                      package.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Only one sorting logic can be implemented.</td>\n                    <td>Multiple sorting logics can be implemented.</td>\n                  </tr>\n                  <tr>\n                    <td>Affects the original class definition.</td>\n                    <td>Does not modify the class.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Comparable Comparator Defines natural ordering via compareTo() method.",
        "Defines custom ordering via compare() method."
      ]
    },
    {
      "question": "What are the java 8 new features?",
      "answer": "<ol>\n                <li>\n                  <strong>Lambda Expressions:</strong>\n                  Enables functional-style code by passing behavior as parameters.\n                </li>\n                <li>\n                  <strong>Stream API:</strong>\n                  Facilitates functional-style operations on collections.\n                </li>\n                <li>\n                  <strong>Functional Interfaces:</strong>\n                  Interfaces with a single abstract method (e.g.,\n                  <code>Runnable</code>\n                  ,\n                  <code>Predicate</code>\n                  ).\n                </li>\n                <li>\n                  <strong>Default and Static Methods in Interfaces:</strong>\n                  Allows method definitions inside interfaces.\n                </li>\n                <li>\n                  <strong>Optional Class:</strong>\n                  A container object used to avoid null references.\n                </li>\n                <li>\n                  <strong>New Date and Time API:</strong>\n                  Immutable and thread-safe classes like\n                  <code>LocalDate</code>\n                  ,\n                  <code>LocalTime</code>\n                  .\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Lambda Expressions: Enables functional-style code by passing behavior as parameters.",
        "Stream API: Facilitates functional-style operations on collections.",
        "Functional Interfaces: Interfaces with a single abstract method (e.g., Runnable , Predicate )."
      ]
    },
    {
      "question": "What is the difference between map and flatMap?",
      "answer": "<table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>map()</th>\n                    <th>flatMap()</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Used for transforming elements.</td>\n                    <td>Used for flattening nested streams.</td>\n                  </tr>\n                  <tr>\n                    <td>Returns a stream of transformed elements.</td>\n                    <td>Returns a flattened stream.</td>\n                  </tr>\n                  <tr>\n                    <td>One-to-one mapping.</td>\n                    <td>One-to-many mapping.</td>\n                  </tr>\n                  <tr>\n                    <td>Useful when transformation doesn’t produce nested structures.</td>\n                    <td>\n                      Useful when transformation produces nested structures (like lists of lists).\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Example:\n                      <code>stream.map(String::toUpperCase)</code>\n                    </td>\n                    <td>\n                      Example:\n                      <code>stream.flatMap(list -&gt; list.stream())</code>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "map() flatMap() Used for transforming elements.",
        "Used for flattening nested streams."
      ]
    },
    {
      "question": "What is the difference between intermediate and terminal operations on stream Apis?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Intermediate Operations</th>\n                    <th>Terminal Operations</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Return a new stream.</td>\n                    <td>Produce a non-stream result like a value or side-effect.</td>\n                  </tr>\n                  <tr>\n                    <td>Can be chained to form a stream pipeline.</td>\n                    <td>Trigger execution of the pipeline and are used at the end.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Support lazy evaluation – operations are not performed until a terminal\n                      operation is invoked.\n                    </td>\n                    <td>Are eagerly evaluated and terminate the stream pipeline.</td>\n                  </tr>\n                  <tr>\n                    <td>Do not produce final output by themselves.</td>\n                    <td>Produce the final result of the stream processing.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Examples:\n                      <code>filter()</code>\n                      ,\n                      <code>map()</code>\n                      ,\n                      <code>sorted()</code>\n                      ,\n                      <code>limit()</code>\n                    </td>\n                    <td>\n                      Examples:\n                      <code>forEach()</code>\n                      ,\n                      <code>collect()</code>\n                      ,\n                      <code>count()</code>\n                      ,\n                      <code>reduce()</code>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Java"
      ],
      "keyPoints": [
        "Intermediate Operations Terminal Operations Return a new stream.",
        "Produce a non-stream result like a value or side-effect."
      ]
    }
  ]
}
