// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.615Z

export const javaQuestions = {
  questions: [
    {
      question: 'Custom User Exception',
      answer: `- A custom exception is created by extending
            <code>Exception</code>
            or
            <code>RuntimeException</code>
            .
            <br>
            - Helps define application-specific error scenarios clearly.
            <br>
            - Can include custom constructors to pass messages or other details.
            <br>
            - Promotes code reuse and better exception handling practices.
            <br>
            - Can be used in both checked and unchecked exception scenarios.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Shallow Copy vs Deep Copy',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Shallow Copy</th>
                  <th>Deep Copy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Object Reference</td>
                  <td>Copies reference of objects</td>
                  <td>Creates new instances for all fields</td>
                </tr>
                <tr>
                  <td>Memory Usage</td>
                  <td>Less memory used</td>
                  <td>More memory as new objects are created</td>
                </tr>
                <tr>
                  <td>Mutability</td>
                  <td>Changes reflect in all copies</td>
                  <td>Changes are isolated</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Faster</td>
                  <td>Slower</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is String?',
      answer: `- String is an immutable sequence of characters.
            <br>
            - Stored in the String Constant Pool for memory efficiency.
            <br>
            - Once created, its value cannot be changed.
            <br>
            - Any change creates a new string object.
            <br>
            - It is thread-safe due to immutability.
            <br>
            - Useful for keys and constants where consistent value is needed.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between String and StringBuffer',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>String</th>
                  <th>StringBuffer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mutability</td>
                  <td>Immutable</td>
                  <td>Mutable</td>
                </tr>
                <tr>
                  <td>Thread Safety</td>
                  <td>Thread-safe (by nature)</td>
                  <td>Thread-safe (synchronized methods)</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Slower for concatenation</td>
                  <td>Faster for frequent changes</td>
                </tr>
                <tr>
                  <td>Use Case</td>
                  <td>Fixed or rarely changed strings</td>
                  <td>When string modification is frequent</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between Thread-safe and Non-thread-safe',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Thread-safe</th>
                  <th>Non-thread-safe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Concurrency</td>
                  <td>Safe to use across multiple threads</td>
                  <td>Not safe without external synchronization</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Vector, Hashtable</td>
                  <td>ArrayList, HashMap</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Slower due to synchronization</td>
                  <td>Faster in single-threaded environments</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>Multithreading scenarios</td>
                  <td>Simple, non-concurrent tasks</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Garbage Collector?',
      answer: `- Automatically deallocates memory by destroying unused objects.
            <br>
            - Helps prevent memory leaks and out-of-memory errors.
            <br>
            - Runs as a background thread in the JVM.
            <br>
            - Uses algorithms like mark-and-sweep, generational GC.
            <br>
            - Improves overall memory efficiency in Java apps.
            <br>
            - Developers can suggest it using
            <code>System.gc()</code>
            .
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between ArrayList and LinkedList',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ArrayList</th>
                  <th>LinkedList</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Structure</td>
                  <td>Dynamic array</td>
                  <td>Doubly linked list</td>
                </tr>
                <tr>
                  <td>Access Time</td>
                  <td>Fast (index-based)</td>
                  <td>Slow (traversal needed)</td>
                </tr>
                <tr>
                  <td>Insertion/Deletion</td>
                  <td>Slow (shifting needed)</td>
                  <td>Fast (pointer adjustment)</td>
                </tr>
                <tr>
                  <td>Memory Usage</td>
                  <td>Less memory</td>
                  <td>More memory (pointers)</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between Set and Map',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Set</th>
                  <th>Map</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Structure</td>
                  <td>Collection of unique elements</td>
                  <td>Key-value pair structure</td>
                </tr>
                <tr>
                  <td>Duplicates</td>
                  <td>No duplicate elements</td>
                  <td>Keys are unique, values can duplicate</td>
                </tr>
                <tr>
                  <td>Access</td>
                  <td>Only elements</td>
                  <td>Access by keys</td>
                </tr>
                <tr>
                  <td>Common Implementations</td>
                  <td>HashSet, LinkedHashSet</td>
                  <td>HashMap, TreeMap</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Java 8 New Features',
      answer: `-
            <strong>Lambda Expressions:</strong>
            Enables functional programming by passing behavior as data.
            <br>
            -
            <strong>Stream API:</strong>
            Supports bulk operations on collections using a pipeline approach.
            <br>
            -
            <strong>Functional Interfaces:</strong>
            Interfaces with a single abstract method (e.g., Runnable, Comparator).
            <br>
            -
            <strong>Optional:</strong>
            A container object to avoid null references and
            <code>NullPointerException</code>
            .
            <br>
            -
            <strong>Default Methods:</strong>
            Allows interface methods with default implementation.
            <br>
            -
            <strong>Date & Time API:</strong>
            Modern replacement for
            <code>java.util.Date</code>
            with immutability and better handling.`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Optional API?',
      answer: `- Introduced in Java 8 to avoid null checks and
            <code>NullPointerException</code>
            .
            <br>
            - Represents a value that may or may not be present.
            <br>
            - Provides methods like
            <code>isPresent()</code>
            ,
            <code>orElse()</code>
            , and
            <code>ifPresent()</code>
            .
            <br>
            - Encourages functional-style programming using
            <code>map()</code>
            and
            <code>filter()</code>
            .
            <br>
            - Promotes cleaner and safer code with null handling.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Explain the OOPs Concepts',
      answer: `-
            <strong>Encapsulation:</strong>
            Wrapping of data and methods into a single unit (class).
            <br>
            -
            <strong>Abstraction:</strong>
            Hiding internal implementation details and exposing only functionality.
            <br>
            -
            <strong>Inheritance:</strong>
            Enables code reuse by inheriting properties from a base class.
            <br>
            -
            <strong>Polymorphism:</strong>
            Allows multiple forms via method overloading/overriding.
            <br>
            - These principles are the foundation of object-oriented programming in Java.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Thread?',
      answer: `- A thread is the smallest unit of execution in a process.
            <br>
            - Java supports multithreading to run tasks concurrently.
            <br>
            - Reduces CPU idle time and improves application responsiveness.
            <br>
            - Threads can be created by extending
            <code>Thread</code>
            or implementing
            <code>Runnable</code>
            .
            <br>
            - Managed by JVM thread scheduler.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Aggregation and Composition?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Aggregation</th>
                  <th>Composition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Relationship</td>
                  <td>Has-a</td>
                  <td>Part-of</td>
                </tr>
                <tr>
                  <td>Dependency</td>
                  <td>Weak association</td>
                  <td>Strong association</td>
                </tr>
                <tr>
                  <td>Lifecycle</td>
                  <td>Child can exist independently</td>
                  <td>Child's lifecycle depends on parent</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Department has students</td>
                  <td>House has rooms</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Embedded DB and Embedded Server?',
      answer: `-
            <strong>Embedded DB:</strong>
            A lightweight database (like H2) that runs inside the app process.
            <br>
            -
            <strong>Embedded Server:</strong>
            A server (e.g., Tomcat) bundled with the app; no need to deploy externally.
            <br>
            - Common in Spring Boot applications.
            <br>
            - Great for testing or small-scale deployments.
            <br>
            - No external configuration required to start the app.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between Hashtable and HashMap',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Hashtable</th>
                  <th>HashMap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thread Safety</td>
                  <td>Thread-safe (synchronized)</td>
                  <td>Not thread-safe</td>
                </tr>
                <tr>
                  <td>Null Keys/Values</td>
                  <td>No null keys or values allowed</td>
                  <td>One null key, multiple null values allowed</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Slower due to locking</td>
                  <td>Faster in single-threaded contexts</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>Legacy systems</td>
                  <td>Modern applications</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is ConcurrentHashMap? Why use it?',
      answer: `- A thread-safe alternative to HashMap introduced in Java 5.
            <br>
            - Uses segment-based locking to reduce contention.
            <br>
            - Allows concurrent read and write operations.
            <br>
            - Prevents
            <code>ConcurrentModificationException</code>
            .
            <br>
            - Ideal for high-concurrency multi-threaded environments.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Intermediate vs Terminal Operations in Stream',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Intermediate</th>
                  <th>Terminal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Return Type</td>
                  <td>Returns a Stream</td>
                  <td>Returns a non-Stream result</td>
                </tr>
                <tr>
                  <td>Chaining</td>
                  <td>Supports method chaining</td>
                  <td>Ends the stream pipeline</td>
                </tr>
                <tr>
                  <td>Examples</td>
                  <td>
                    <code>map()</code>
                    ,
                    <code>filter()</code>
                  </td>
                  <td>
                    <code>collect()</code>
                    ,
                    <code>count()</code>
                  </td>
                </tr>
                <tr>
                  <td>Execution</td>
                  <td>Lazy</td>
                  <td>Eager</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'HashMap vs LinkedHashMap',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>HashMap</th>
                  <th>LinkedHashMap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ordering</td>
                  <td>No order maintained</td>
                  <td>Maintains insertion order</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Faster (no order overhead)</td>
                  <td>Slightly slower</td>
                </tr>
                <tr>
                  <td>Use Case</td>
                  <td>Unordered fast access</td>
                  <td>Ordered iteration needed</td>
                </tr>
                <tr>
                  <td>Underlying Structure</td>
                  <td>Hash buckets</td>
                  <td>Hash + doubly-linked list</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'HashMap vs ConcurrentHashMap',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>HashMap</th>
                  <th>ConcurrentHashMap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thread Safety</td>
                  <td>Not thread-safe</td>
                  <td>Thread-safe</td>
                </tr>
                <tr>
                  <td>Concurrency Mechanism</td>
                  <td>No locking</td>
                  <td>Segment-level locking</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Faster in single-threaded</td>
                  <td>Better for multi-threaded</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>General purpose</td>
                  <td>High-concurrency applications</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How to store multiple types in ArrayList?',
      answer: `- Use raw type or declare
            <code>List<Object></code>
            to store different types.
            <br>
            - Java supports storing heterogeneous data via Object references.
            <br>
            - You lose type safety and need to cast when retrieving elements.
            <br>
            - Better alternatives include using wrapper classes or generics.
            <br>
            <pre><code>
List<Object> list = new ArrayList<>();
list.add("apple");
list.add(123);
list.add('c');
list.add(new Sample());
  </code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Write without try block?',
      answer: `- You can declare an exception using
            <code>throws</code>
            in the method signature.
            <br>
            - Used when the calling method should handle the exception.
            <br>
            - Common in IO operations and checked exceptions.
            <br>
            - Syntax:
            <code>public void method() throws IOException</code>
            .
            <br>
            - Helps propagate the exception to higher layers.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How to create a thread?',
      answer: `- Extend
            <code>Thread</code>
            and override
            <code>run()</code>
            method.
            <br>
            - Or implement
            <code>Runnable</code>
            and pass to a Thread instance.
            <br>
            - Start the thread using
            <code>start()</code>
            method.
            <br>
            - Example:
            <code>Thread t = new Thread(new MyRunnable()); t.start();</code>
            <br>
            - Prefer Runnable for better separation of logic and thread behavior.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is synchronized block?',
      answer: `- A synchronized block ensures only one thread accesses the block at a time.
            <br>
            - Prevents race conditions and data inconsistency.
            <br>
            - Syntax:
            <code>synchronized (object) { // code block }</code>
            <br>
            - Can synchronize on
            <code>this</code>
            or a specific object.
            <br>
            - Offers better control than synchronizing entire methods.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How to create exception?',
      answer: `- Extend
            <code>Exception</code>
            (checked) or
            <code>RuntimeException</code>
            (unchecked).
            <br>
            - Define constructors to pass messages or causes.
            <br>
            - Helps represent domain-specific issues clearly.
            <br>
            - Example:
            <code>throw new CustomException("Invalid input");</code>
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between throws and throw',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>throw</th>
                  <th>throws</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Usage</td>
                  <td>Used to actually throw an exception</td>
                  <td>Used to declare possible exceptions</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Inside method body</td>
                  <td>Method signature</td>
                </tr>
                <tr>
                  <td>Followed By</td>
                  <td>Instance of Exception</td>
                  <td>Exception class name(s)</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td><code>throw new IOException()</code></td>
                  <td><code>public void read() throws IOException</code></td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Which Set collection stores insertion order?',
      answer: `-
            <code>LinkedHashSet</code>
            maintains the order of elements as inserted.
            <br>
            - Based on HashTable + linked list implementation.
            <br>
            - Useful when both uniqueness and order are important.
            <br>
            - Slower than
            <code>HashSet</code>
            but predictable iteration.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Which collection stores duplicate values?',
      answer: `-
            <code>List</code>
            types like
            <code>ArrayList</code>
            and
            <code>LinkedList</code>
            allow duplicates.
            <br>
            - In contrast,
            <code>Set</code>
            types do not allow duplicates.
            <br>
            - Useful when maintaining all values including repeats is important.
            <br>
            - Order can also be preserved depending on the List implementation.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between == and .equals()',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>==</th>
                  <th>.equals()</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>Operator</td>
                  <td>Method</td>
                </tr>
                <tr>
                  <td>Comparison</td>
                  <td>Memory reference</td>
                  <td>Content/Value</td>
                </tr>
                <tr>
                  <td>Overridable</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>Check identity</td>
                  <td>Check logical equality</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Which Map allows duplicate keys?',
      answer: `- None. All Map implementations in Java disallow duplicate keys.
            <br>
            - If a key is re-inserted, the value is replaced.
            <br>
            - Duplicate values are allowed but keys must be unique.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is ExecutorService?',
      answer: `- An interface for managing thread pools in Java.
            <br>
            - Provides methods like
            <code>submit()</code>
            ,
            <code>invokeAll()</code>
            for task execution.
            <br>
            - Helps manage concurrency in a more scalable way than creating threads manually.
            <br>
            - Supports graceful shutdown and future-based async results.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is String Constant Pool?',
      answer: `- A special memory region in Java heap storing interned string literals.
            <br>
            - Helps reduce memory usage and improves performance.
            <br>
            - Strings with the same content point to the same memory address.
            <br>
            - Created automatically by JVM when using
            <code>"text"</code>
            or
            <code>intern()</code>
            .
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is map() and flatMap()?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Function</th>
                  <th>map()</th>
                  <th>flatMap()</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Behavior</td>
                  <td>Applies function and returns a Stream of values</td>
                  <td>Flattens nested Streams into a single one</td>
                </tr>
                <tr>
                  <td>Use Case</td>
                  <td>One-to-one mapping</td>
                  <td>One-to-many mapping</td>
                </tr>
                <tr>
                  <td>Return Type</td>
                  <td><code>Stream<Stream<T>></code></td>
                  <td><code>Stream<T></code></td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td><code>list.stream().map()</code></td>
                  <td><code>list.stream().flatMap()</code></td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is volatile and transient?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>volatile</th>
                  <th>transient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purpose</td>
                  <td>Ensures visibility across threads</td>
                  <td>Prevents serialization of a field</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>Multithreading</td>
                  <td>Serialization</td>
                </tr>
                <tr>
                  <td>Persistence</td>
                  <td>Part of object state</td>
                  <td>Skipped during serialization</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Clonable?',
      answer: `- A marker interface to support object cloning using
            <code>clone()</code>
            .
            <br>
            - Must override
            <code>clone()</code>
            from
            <code>Object</code>
            class.
            <br>
            - Enables shallow copy by default.
            <br>
            - Deep copy needs manual implementation.
            <br>
            - Throws
            <code>CloneNotSupportedException</code>
            if not implemented.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Marker Interface?',
      answer: `- An interface with no methods or fields.
            <br>
            - Used to signal or tag a class for special treatment.
            <br>
            - Examples include
            <code>Serializable</code>
            ,
            <code>Clonable</code>
            ,
            <code>Remote</code>
            .
            <br>
            - JVM or frameworks detect marker interfaces using reflection.
            <br>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Difference between Runnable and Clonable',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Runnable</th>
                  <th>Clonable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purpose</td>
                  <td>Enable multithreading</td>
                  <td>Enable object cloning</td>
                </tr>
                <tr>
                  <td>Methods</td>
                  <td><code>run()</code></td>
                  <td>
                    <code>clone()</code>
                    (from Object)
                  </td>
                </tr>
                <tr>
                  <td>Marker Interface</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'toList() vs collect(Collectors.toList())',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>collect(Collectors.toList())</th>
                  <th>toList()</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Java Version</td>
                  <td>Java 8+</td>
                  <td>Java 16+</td>
                </tr>
                <tr>
                  <td>Mutability</td>
                  <td>Mutable</td>
                  <td>Immutable</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>ArrayList</td>
                  <td>Immutable List</td>
                </tr>
                <tr>
                  <td>Modifiability</td>
                  <td>Can modify</td>
                  <td>Cannot modify</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Explain the OOPS main features such as encapsulation, inheritance, and polymorphism?',
      answer: `<ol>
                <li>
                  <strong>Encapsulation:</strong>
                  Combines data and methods in a single unit (class), hiding internal implementation
                  using access modifiers like private/protected.
                </li>
                <li>
                  <strong>Inheritance:</strong>
                  Enables child classes to inherit fields and methods from parent classes, promoting
                  code reuse and hierarchical relationships.
                </li>
                <li>
                  <strong>Polymorphism:</strong>
                  Allows the same method to behave differently based on object type. Supports method
                  overloading and overriding.
                </li>
                <li>
                  <strong>Abstraction:</strong>
                  Hides internal implementation and shows only functionality through interfaces or
                  abstract classes.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Stream vs Collection difference?',
      answer: `<table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Collection</th>
                    <th>Stream</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Storage</td>
                    <td>Stores elements in memory</td>
                    <td>Does not store data, only processes data</td>
                  </tr>
                  <tr>
                    <td>Processing</td>
                    <td>External iteration (using loops)</td>
                    <td>Internal iteration (pipeline)</td>
                  </tr>
                  <tr>
                    <td>Consumption</td>
                    <td>Reusable</td>
                    <td>One-time use</td>
                  </tr>
                  <tr>
                    <td>Parallelism</td>
                    <td>Manual</td>
                    <td>Built-in via parallel streams</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Why we need to use stream instead of collection?',
      answer: `<ol>
                <li>
                  Stream API enables functional-style operations for clean and declarative code.
                </li>
                <li>Supports lazy evaluation and chaining with intermediate operations.</li>
                <li>Can be parallelized to improve performance on large datasets.</li>
                <li>Does not modify the original collection, ensuring data immutability.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How stream is created internally?',
      answer: `<ol>
                <li>
                  Streams are created using
                  <code>Collection.stream()</code>
                  or
                  <code>Stream.of()</code>
                  .
                </li>
                <li>Under the hood, Spliterator is used for iteration support.</li>
                <li>Intermediate operations build a pipeline of lazy-evaluated steps.</li>
                <li>
                  Pipeline is executed only when a terminal operation (e.g.,
                  <code>collect()</code>
                  ) is called.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Java 8 features?',
      answer: `<ol>
                <li>Lambda Expressions for writing concise function implementations.</li>
                <li>Stream API for functional operations on collections.</li>
                <li>
                  Functional Interfaces with
                  <code>@FunctionalInterface</code>
                  annotation.
                </li>
                <li>Optional class for avoiding null pointer exceptions.</li>
                <li>Default & Static methods in interfaces for backward compatibility.</li>
                <li>
                  New Date and Time API under
                  <code>java.time</code>
                  package (e.g., LocalDate).
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Optional class use?',
      answer: `<ol>
                <li>
                  <code>Optional</code>
                  is a container object used to contain not-null objects.
                </li>
                <li>
                  Avoids
                  <code>NullPointerException</code>
                  by safely representing null values.
                </li>
                <li>
                  Provides methods like
                  <code>isPresent()</code>
                  ,
                  <code>orElse()</code>
                  ,
                  <code>ifPresent()</code>
                  .
                </li>
                <li>Encourages better null checks and functional-style programming.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Is datetime class mutable in java8?',
      answer: `<ol>
                <li>
                  No, DateTime classes like
                  <code>LocalDate</code>
                  ,
                  <code>LocalTime</code>
                  ,
                  <code>LocalDateTime</code>
                  are immutable.
                </li>
                <li>
                  They return new objects on operations like
                  <code>plusDays()</code>
                  , ensuring thread safety.
                </li>
                <li>
                  Prevents unintentional modifications and bugs in multithreaded environments.
                </li>
                <li>
                  Immutable design improves predictability and functional programming compatibility.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Stream vs parallel stream?',
      answer: `<table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Stream</th>
                    <th>Parallel Stream</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Execution</td>
                    <td>Sequential (single thread)</td>
                    <td>Concurrent (multiple threads)</td>
                  </tr>
                  <tr>
                    <td>Performance</td>
                    <td>Better for small tasks</td>
                    <td>Better for large data sets</td>
                  </tr>
                  <tr>
                    <td>Thread safety</td>
                    <td>Not a concern</td>
                    <td>Requires caution with shared state</td>
                  </tr>
                  <tr>
                    <td>Control</td>
                    <td>More predictable</td>
                    <td>Less predictable order</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How parallel stream works internally?',
      answer: `<ol>
                <li>
                  Uses the
                  <code>ForkJoinPool</code>
                  under the hood (default common pool).
                </li>
                <li>Splits data into smaller parts using Spliterator.</li>
                <li>Processes each subtask in a separate thread concurrently.</li>
                <li>Combines partial results into the final result after execution.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'When to use parallel stream?',
      answer: `<ol>
                <li>Use when working with large datasets that are CPU-intensive.</li>
                <li>Use only for stateless, independent operations.</li>
                <li>Avoid if task is IO-bound or involves shared mutable state.</li>
                <li>Helps utilize multi-core CPU for better performance.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is terminal operation?',
      answer: `<ol>
                <li>Terminal operation triggers execution of the stream pipeline.</li>
                <li>
                  Examples:
                  <code>forEach()</code>
                  ,
                  <code>collect()</code>
                  ,
                  <code>reduce()</code>
                  .
                </li>
                <li>Produces a non-stream result (value, collection, side effect).</li>
                <li>After terminal operation, the stream is considered consumed.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Can we use method reference for instance methods?',
      answer: `<ol>
                <li>
                  Yes, instance methods can be referenced using
                  <code>object::methodName</code>
                  .
                </li>
                <li>Must be compatible with the target functional interface method signature.</li>
                <li>Improves code readability and reusability.</li>
                <li>Often used with stream operations and lambda expressions.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is functional interface?',
      answer: `<ol>
                <li>An interface with exactly one abstract method.</li>
                <li>Supports lambda expressions and method references.</li>
                <li>May contain default and static methods.</li>
                <li>
                  Annotated with
                  <code>@FunctionalInterface</code>
                  (optional but recommended).
                </li>
                <li>
                  Examples:
                  <code>Runnable</code>
                  ,
                  <code>Callable</code>
                  ,
                  <code>Function</code>
                  .
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Is functional interface exist before java 8?',
      answer: `<ol>
                <li>
                  Yes, interfaces like
                  <code>Runnable</code>
                  and
                  <code>Comparator</code>
                  existed before Java 8.
                </li>
                <li>
                  They had one abstract method but weren't formally called "functional interfaces."
                </li>
                <li>
                  Java 8 introduced the
                  <code>@FunctionalInterface</code>
                  annotation for better clarity.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Create a functional interface and add implementation?',
      answer: `<ol>
                <li>
                  <pre><code>@FunctionalInterface
interface MyFunctionalInterface {
void execute();
}

public class Main {
public static void main(String[] args) {
    MyFunctionalInterface impl = () -> System.out.println("Implemented!");
    impl.execute();
}
}</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Why functional interface because previously anonymous class do the same kind of functionality?',
      answer: `<ol>
                <li>
                  Functional interfaces simplify code by enabling lambda expressions, reducing
                  verbosity compared to anonymous classes.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Grouping by in java8?',
      answer: `<ol>
                <li>
                  Example:
                  <code>Collectors.groupingBy(Person::getAge)</code>
                  groups a list of people by their age.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Count each letter count with java 8?',
      answer: `<ol>
                <li>
                  <pre><code>String input = "hello";
Map<Character, Long> result = input.chars()
.mapToObj(c -> (char)c)
.collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Collect the duplicate elements in the list with java 8?',
      answer: `<ol>
                <li>
                  <pre><code>List<Integer> list = Arrays.asList(1, 2, 2, 3, 3);
Set<Integer> duplicates = list.stream()
.filter(i -> Collections.frequency(list, i) > 1)
.collect(Collectors.toSet());</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Sort the list with java8?',
      answer: `<ol>
                <li>
                  <pre><code>List<String> list = Arrays.asList("b", "a", "c");
list.sort(Comparator.naturalOrder());</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Get the employee name list from the list of employees?',
      answer: `<ol>
                <li>
                  <pre><code>List<String> names = employees.stream()
.map(Employee::getName)
.collect(Collectors.toList());</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Parallel stream example?',
      answer: `<ol>
                <li>
                  <pre><code>List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.parallelStream().forEach(System.out::println);</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Why static initializers?',
      answer: `<ol>
                <li>
                  Static initializers are used to initialize static variables or perform setup tasks
                  when the class is loaded.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How to create custom exception class?',
      answer: `<ol>
                <li>
                  <pre><code>class CustomException extends Exception {
public CustomException(String message) {
    super(message);
}
}</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Exception classes A and B extends A, can we throw checked exception from B and unchecked exception from A (vice versa)?',
      answer: `<ol>
                <li>
                  Yes. Exception type doesn’t depend on class inheritance—checked and unchecked
                  exceptions behave independently.
                </li>
                <li>Any subclass can throw its own exception type.</li>
                <li>Checked exceptions must be declared or handled, regardless of hierarchy.</li>
                <li>
                  Unchecked exceptions (RuntimeException) can be thrown freely without declaration.
                </li>
                <li>
                  Hierarchy only affects catch blocks—B’s exceptions can be caught when catching A.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'When do we need to invoke finalize method?',
      answer: `<ol>
                <li>
                  <code>finalize()</code>
                  is called by GC before reclaiming memory of unreachable objects.
                </li>
                <li>Its use is discouraged due to unpredictability and poor performance.</li>
                <li>Instead, use try-with-resources or explicit cleanup methods.</li>
                <li>Finalizers may cause memory retention and unpredictability in modern JVMs.</li>
                <li>Deprecated in recent Java versions (after Java&nbsp;8).</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'When do we use finally block?',
      answer: `<ol>
                <li>To run cleanup code regardless of exceptions.</li>
                <li>Executes after try or catch blocks.</li>
                <li>Useful for releasing non-AutoCloseable resources (e.g., streams).</li>
                <li>Ensures consistency even if return or exception occurs.</li>
                <li>Can be omitted with try-with-resources for AutoCloseable cases.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is try with resources?',
      answer: `<ol>
                <li>Java construct that auto-closes resources at block end.</li>
                <li>
                  Resources must implement
                  <code>AutoCloseable</code>
                  or
                  <code>Closeable</code>
                  .
                </li>
                <li>
                  Auto-generates finally block to call
                  <code>close()</code>
                  .
                </li>
                <li>Reduces boilerplate and potential resource leaks.</li>
                <li>Supports multiple resources in one try with comma-separated list.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How to make a custom class eligible as a resource to use in try with resources?',
      answer: `<ol>
                <li>
                  Implement
                  <code>AutoCloseable</code>
                  or
                  <code>Closeable</code>
                  .
                </li>
                <li>
                  Override the
                  <code>close()</code>
                  method for cleanup logic.
                </li>
                <li>
                  Ensure no exceptions escape close or declare
                  <code>throws</code>
                  .
                </li>
                <li>
                  Use it in try declaration:
                  <code>try (MyRes r = new MyRes()) {…}</code>
                  .
                </li>
                <li>The close() will be invoked automatically after try block.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: '== and equals?',
      answer: `<ol>
                <li>
                  <code>==</code>
                  compares object references (memory addresses).
                </li>
                <li>
                  <code>equals()</code>
                  compares logical equality (content), if overridden.
                </li>
                <li>
                  Default
                  <code>equals()</code>
                  in Object → same as
                  <code>==</code>
                  .
                </li>
                <li>
                  Override equals (and hashCode) in value-based classes (String, custom types).
                </li>
                <li>
                  Use
                  <code>==</code>
                  for primitives; use equals for object values.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Why wrapper classes in java?',
      answer: `<ol>
                <li>
                  Wrap primitive types as objects (e.g.,
                  <code>int</code>
                  →
                  <code>Integer</code>
                  ).
                </li>
                <li>Needed for use in collections (generics require objects).</li>
                <li>Provide utility methods: parsing, converting, and comparison.</li>
                <li>Support autoboxing/unboxing since Java&nbsp;5.</li>
                <li>Allow null representation and sophistication beyond primitives.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is volatile variable?',
      answer: `<ol>
                <li>
                  <code>volatile</code>
                  ensures that changes to a variable are visible across threads.
                </li>
                <li>Reads and writes bypass CPU caches and use main memory.</li>
                <li>Suitable for flags or simple state markers.</li>
                <li>Does not guarantee atomicity for compound actions.</li>
                <li>
                  Use
                  <code>synchronized</code>
                  or
                  <code>Atomic</code>
                  types for complex operations.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is the algorithm used inside Arrays.sort?',
      answer: `<ol>
                <li>For primitive arrays: Dual-Pivot QuickSort (fast average performance).</li>
                <li>For object arrays: TimSort (combines merge + insertion sort).</li>
                <li>Optimized for partially ordered data (natural runs detection).</li>
                <li>Ensures stability for object sorting (equal elements retain order).</li>
                <li>
                  Implemented in
                  <code>java.util.Arrays</code>
                  since Java&nbsp;7+.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'List vs set vs map?',
      answer: `<ol>
                <li>
                  <strong>List:</strong>
                  Ordered collection, allows duplicates, index-based access.
                </li>
                <li>
                  <strong>Set:</strong>
                  Unordered, unique elements, no duplicates.
                </li>
                <li>
                  <strong>Map:</strong>
                  Stores key-value pairs, keys unique but values can repeat.
                </li>
                <li>Choose List for sequence, Set for uniqueness, Map for key-based lookup.</li>
                <li>Implementations: ArrayList, HashSet, HashMap, etc.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Concurrent hashmap vs hash map difference?',
      answer: `<ol>
                <li>
                  <strong>HashMap:</strong>
                  Not thread‑safe, risk of corruption in concurrent use.
                </li>
                <li>
                  <strong>ConcurrentHashMap:</strong>
                  Thread‑safe via finer-grained locking.
                </li>
                <li>Uses lock striping or segment-level locking per bucket.</li>
                <li>Allows concurrent reads and writes with high throughput.</li>
                <li>Null keys/values not allowed in ConcurrentHashMap (allowed in HashMap).</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How hashmap internally works?',
      answer: `<ol>
                <li>
                  Uses an array of buckets; each bucket is a linked list or tree (for collisions).
                </li>
                <li>
                  Computes index via
                  <code>hashCode(key) & (n‑1)</code>
                  .
                </li>
                <li>
                  On collision, chains entries or converts to a balanced tree (if threshold
                  exceeded).
                </li>
                <li>Resizes when load factor threshold (default 0.75) is exceeded.</li>
                <li>Provides O(1) average-case insert, lookup, and delete.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How index is calculated in hashmap?',
      answer: `<ol>
                <li>
                  Compute
                  <code>hash = key.hashCode()</code>
                  , then apply bit-mixing.
                </li>
                <li>
                  Index =
                  <code>hash & (capacity&nbsp;-&nbsp;1)</code>
                  (when capacity is power of two).
                </li>
                <li>This ensures uniform distribution across buckets.</li>
                <li>Reduces collisions and improves performance.</li>
                <li>Critical for internal optimization and scalability.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'How concurrent hashmap works for multithread?',
      answer: `<ol>
                <li>Partitions data into segments or buckets with separate locks.</li>
                <li>Readers access data without locking; writers lock only segment.</li>
                <li>Reduces contention and improves parallel throughput.</li>
                <li>Uses lock striping or synchronized bins depending on Java version.</li>
                <li>Avoids whole-map locking as seen in Hashtable.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Which operation is locked in concurrent hashmap?',
      answer: `<ol>
                <li>Write operations are locked at the segment level.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is the mechanism of locking happens in concurrent hashmap?',
      answer: `<ol>
                <li>Uses fine-grained locking (lock striping) to minimize contention.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What happens if more than one thread try to insert into hashmap?',
      answer: `<ol>
                <li>Without synchronization, data corruption or infinite loops can occur.</li>
                <li>Buckets or chains may break leading to lost entries.</li>
                <li>May trigger race conditions during table resize.</li>
                <li>Use ConcurrentHashMap or synchronized wrapper to avoid issues.</li>
                <li>HashMap alone is unsafe in multithreaded environments.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Set internal working?',
      answer: `<ol>
                <li>HashSet: backed by a HashMap internally; uses hash buckets.</li>
                <li>LinkedHashSet: maintains insertion order via linked list in each bucket.</li>
                <li>TreeSet: backed by TreeMap, stores elements in sorted order.</li>
                <li>Provides O(1) average performance for add, remove, contains (HashSet).</li>
                <li>Different implementations suit different use-cases.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Time complexity for hashmap operations?',
      answer: `<ol>
                <li>Insert, delete, lookup: O(1) on average.</li>
                <li>Worst-case (many collisions): O(n), but rare with good hashing.</li>
                <li>Resizing takes O(n), amortized cost remains O(1).</li>
                <li>
                  Using balanced tree (in Java&nbsp;8+) avoids worst-case performance.
                  <br>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is the data structure used for bucket in the hashmap?',
      answer: `<ol>
                <li>Buckets are initially linked lists.</li>
                <li>After threshold, converted to balanced trees (TreeNode) for performance.</li>
                <li>Keeps insertion, lookup efficient under high load.</li>
                <li>Combination ensures O(1) average performance and O(log n) worst-case.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is aggregation and composition?',
      answer: `<ol>
                <li>
                  <strong>Aggregation:</strong>
                  Weak “has-a” relationship. Child can live independently (e.g., Department &
                  Student).
                </li>
                <li>
                  <strong>Composition:</strong>
                  Strong “has-a” relationship. Child’s lifecycle bound to parent (e.g., House &
                  Room).
                </li>
                <li>Composition implies ownership; aggregation implies association.</li>
                <li>Composition uses containment; aggregation uses references.</li>
                <li>Aggregation allows reuse; composition creates tight coupling.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is List, Set, and Map?',
      answer: `<ol>
                <li>
                  <strong>List:</strong>
                  Ordered, allows duplicates, access by index.
                </li>
                <li>
                  <strong>Set:</strong>
                  Unordered or ordered depending on implementation, no duplicates.
                </li>
                <li>
                  <strong>Map:</strong>
                  Key‑value pairs, keys unique, values can duplicate.
                </li>
                <li>Choose List for sequences, Set for uniqueness, Map for key-based lookup.</li>
                <li>Implementations include ArrayList, HashSet, LinkedHashMap, TreeMap, etc.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What are the differences between List and Set?',
      answer: `<ol>
                <li>
                  <strong>List:</strong>
                  Allows duplicates, maintains insertion order, index access.
                </li>
                <li>
                  <strong>Set:</strong>
                  No duplicates, no guaranteed order (unless LinkedHashSet/TreeSet).
                </li>
                <li>List is good for ordered data with repetition; Set for unique collections.</li>
                <li>Set implementations have faster membership tests by hash or tree.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What are the differences between Hashtable, HashMap, and TreeMap?',
      answer: `<ol>
                <li>
                  <strong>Hashtable:</strong>
                  Thread-safe (synchronized), no null keys/values, legacy class.
                </li>
                <li>
                  <strong>HashMap:</strong>
                  Not thread-safe, allows one null key and null values.
                </li>
                <li>
                  <strong>TreeMap:</strong>
                  Sorted by key, implements NavigableMap, slower due to tree structure.
                </li>
                <li>
                  Choose Hashtable for thread safety, HashMap for general use, TreeMap for sorted
                  keys.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is serialization and when it will be used?',
      answer: `<ol>
                <li>
                  Process of converting an object into byte stream for storage or transmission.
                </li>
                <li>Used in RMI, web sessions, caching, and file/persistence operations.</li>
                <li>
                  Classes must implement
                  <code>Serializable</code>
                  marker interface.
                </li>
                <li>
                  Use
                  <code>transient</code>
                  keyword to skip non-serializable fields.
                </li>
                <li>Deserialization recreates the object graph from the byte stream.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What are the differences between an interface and an abstract class?',
      answer: `<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Interface</th>
                    <th>Abstract Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Defines behavior but no implementation (until Java 7).</td>
                    <td>Can define both behavior and implementation.</td>
                  </tr>
                  <tr>
                    <td>Supports multiple inheritance.</td>
                    <td>Supports only single inheritance.</td>
                  </tr>
                  <tr>
                    <td>Cannot have constructors.</td>
                    <td>Can have constructors.</td>
                  </tr>
                  <tr>
                    <td>All methods are abstract by default (Java 7 and below).</td>
                    <td>Can have abstract and non-abstract methods.</td>
                  </tr>
                  <tr>
                    <td>Fields are public, static, and final by default.</td>
                    <td>Fields can be any access modifier and not necessarily final.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is mutable and immutable? Give some examples',
      answer: `<ol>
                <li>
                  <strong>Mutable:</strong>
                  Objects whose state can be changed after creation (e.g.,
                  <code>StringBuilder</code>
                  ,
                  <code>ArrayList</code>
                  ).
                </li>
                <li>
                  <strong>Immutable:</strong>
                  Objects whose state cannot be changed once created (e.g.,
                  <code>String</code>
                  ,
                  <code>Integer</code>
                  ).
                </li>
                <li>Immutability ensures thread-safety and predictability.</li>
                <li>Mutables are preferred when frequent modifications are needed.</li>
                <li>Immutables are useful in concurrent or secure systems.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What are the differences between String, StringBuilder and StringBuffer?',
      answer: `<ol>
                <li>
                  <strong>String:</strong>
                  Immutable and thread-safe. Any operation creates a new object.
                </li>
                <li>
                  <strong>StringBuilder:</strong>
                  Mutable and not thread-safe. Faster for single-threaded tasks.
                </li>
                <li>
                  <strong>StringBuffer:</strong>
                  Mutable and thread-safe via synchronized methods.
                </li>
                <li>Use StringBuilder for performance in non-threaded environments.</li>
                <li>StringBuffer is legacy but still useful in multi-threaded use cases.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'Differences between HashMap and ConcurrentHashMap?',
      answer: `<ol>
                <li>
                  <strong>HashMap:</strong>
                  Not thread-safe. Concurrent modifications may cause data corruption.
                </li>
                <li>
                  <strong>ConcurrentHashMap:</strong>
                  Thread-safe. Uses lock striping or bucket-level locking.
                </li>
                <li>ConcurrentHashMap disallows null keys and null values.</li>
                <li>HashMap is faster for single-threaded operations.</li>
                <li>ConcurrentHashMap is suitable for high-concurrency environments.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is fail-fast and fail-safe?',
      answer: `<ol>
                <li>
                  <strong>Fail-Fast:</strong>
                  Throws
                  <code>ConcurrentModificationException</code>
                  if modified during iteration (e.g., ArrayList, HashMap).
                </li>
                <li>Operates on the actual collection and checks structural changes.</li>
                <li>
                  <strong>Fail-Safe:</strong>
                  Works on a cloned copy and avoids exceptions (e.g., ConcurrentHashMap,
                  CopyOnWriteArrayList).
                </li>
                <li>Fail-safe is slower but safer in multi-threaded use cases.</li>
                <li>
                  Fail-fast improves performance but must be used with care in concurrent code.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is User defined Exception?',
      answer: `<ol>
                <li>
                  Custom exceptions created by extending
                  <code>Exception</code>
                  (checked) or
                  <code>RuntimeException</code>
                  (unchecked).
                </li>
                <li>
                  Allows developers to provide meaningful error messages for business logic errors.
                </li>
                <li>
                  Typically contains constructors and optionally overridden
                  <code>toString()</code>
                  or
                  <code>getMessage()</code>
                  .
                </li>
                <li>
                  Example:
                  <code>class MyException extends Exception { ... }</code>
                </li>
                <li>Improves clarity and control in exception handling.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is Comparator and Comparable? List out differences',
      answer: `<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Comparable</th>
                    <th>Comparator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Defines natural ordering via
                      <code>compareTo()</code>
                      method.
                    </td>
                    <td>
                      Defines custom ordering via
                      <code>compare()</code>
                      method.
                    </td>
                  </tr>
                  <tr>
                    <td>Implemented in the class itself.</td>
                    <td>Implemented in a separate class.</td>
                  </tr>
                  <tr>
                    <td>
                      Located in
                      <code>java.lang</code>
                      package.
                    </td>
                    <td>
                      Located in
                      <code>java.util</code>
                      package.
                    </td>
                  </tr>
                  <tr>
                    <td>Only one sorting logic can be implemented.</td>
                    <td>Multiple sorting logics can be implemented.</td>
                  </tr>
                  <tr>
                    <td>Affects the original class definition.</td>
                    <td>Does not modify the class.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What are the java 8 new features?',
      answer: `<ol>
                <li>
                  <strong>Lambda Expressions:</strong>
                  Enables functional-style code by passing behavior as parameters.
                </li>
                <li>
                  <strong>Stream API:</strong>
                  Facilitates functional-style operations on collections.
                </li>
                <li>
                  <strong>Functional Interfaces:</strong>
                  Interfaces with a single abstract method (e.g.,
                  <code>Runnable</code>
                  ,
                  <code>Predicate</code>
                  ).
                </li>
                <li>
                  <strong>Default and Static Methods in Interfaces:</strong>
                  Allows method definitions inside interfaces.
                </li>
                <li>
                  <strong>Optional Class:</strong>
                  A container object used to avoid null references.
                </li>
                <li>
                  <strong>New Date and Time API:</strong>
                  Immutable and thread-safe classes like
                  <code>LocalDate</code>
                  ,
                  <code>LocalTime</code>
                  .
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is the difference between map and flatMap?',
      answer: `<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>map()</th>
                    <th>flatMap()</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Used for transforming elements.</td>
                    <td>Used for flattening nested streams.</td>
                  </tr>
                  <tr>
                    <td>Returns a stream of transformed elements.</td>
                    <td>Returns a flattened stream.</td>
                  </tr>
                  <tr>
                    <td>One-to-one mapping.</td>
                    <td>One-to-many mapping.</td>
                  </tr>
                  <tr>
                    <td>Useful when transformation doesn’t produce nested structures.</td>
                    <td>
                      Useful when transformation produces nested structures (like lists of lists).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Example:
                      <code>stream.map(String::toUpperCase)</code>
                    </td>
                    <td>
                      Example:
                      <code>stream.flatMap(list -> list.stream())</code>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    },
    {
      question: 'What is the difference between intermediate and terminal operations on stream Apis?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Intermediate Operations</th>
                    <th>Terminal Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Return a new stream.</td>
                    <td>Produce a non-stream result like a value or side-effect.</td>
                  </tr>
                  <tr>
                    <td>Can be chained to form a stream pipeline.</td>
                    <td>Trigger execution of the pipeline and are used at the end.</td>
                  </tr>
                  <tr>
                    <td>
                      Support lazy evaluation – operations are not performed until a terminal
                      operation is invoked.
                    </td>
                    <td>Are eagerly evaluated and terminate the stream pipeline.</td>
                  </tr>
                  <tr>
                    <td>Do not produce final output by themselves.</td>
                    <td>Produce the final result of the stream processing.</td>
                  </tr>
                  <tr>
                    <td>
                      Examples:
                      <code>filter()</code>
                      ,
                      <code>map()</code>
                      ,
                      <code>sorted()</code>
                      ,
                      <code>limit()</code>
                    </td>
                    <td>
                      Examples:
                      <code>forEach()</code>
                      ,
                      <code>collect()</code>
                      ,
                      <code>count()</code>
                      ,
                      <code>reduce()</code>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Java'
      ]
    }
  ]
};
