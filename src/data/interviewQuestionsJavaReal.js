// Auto-generated real Java interview questions
export const javaRealQuestions = {
  "questions": [
    {
      "question": "How does PriorityQueue work internally in Java? Explain the underlying data structure and time complexity of operations.",
      "answer": "<ol>\n      <li>&lt;code&gt;PriorityQueue</code> is implemented as a binary heap (a complete binary tree backed by an array).</li>\n      <li>By default it acts as a min-heap, so the smallest element is at the root and returned by &lt;code&gt;peek()</code>.</li>\n      <li>&lt;code&gt;offer()</code> and &lt;code&gt;poll()</code> run in &lt;code&gt;O(log n)</code>; &lt;code&gt;peek()</code> is &lt;code&gt;O(1)</code>.</li>\n      <li>It is not thread-safe; use &lt;code&gt;PriorityBlockingQueue</code> for concurrent access.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Implemented as a binary heap array.",
        "offer/poll are O(log n), peek is O(1).",
        "Use PriorityBlockingQueue for thread safety."
      ]
    },
    {
      "question": "How is String immutable in Java? Explain the internal mechanism and why String was designed as immutable.",
      "answer": "<ol>\n      <li>The &lt;code&gt;String</code> class is &lt;code&gt;final</code>, so it cannot be subclassed.</li>\n      <li>Its internal character/byte array is &lt;code&gt;private</code> and &lt;code&gt;final</code> (compact strings since Java 9).</li>\n      <li>None of String's methods mutate the data; they return new &lt;code&gt;String</code> instances.</li>\n      <li>This enables the String Pool and safe sharing across threads without synchronization.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "String class is final and cannot be subclassed.",
        "Internal array is private and final.",
        "String methods return new instances, enabling the String Pool."
      ]
    },
    {
      "question": "What is the internal working of HashMap and HashSet? Explain how they store elements and handle collisions.",
      "answer": "<ol>\n      <li>&lt;code&gt;HashMap</code> stores entries in an array of buckets indexed by &lt;code&gt;hash(key) &amp; (capacity - 1)</code>.</li>\n      <li>Collisions are handled by linked lists, which become red-black trees after a threshold.</li>\n      <li>&lt;code&gt;HashSet</code> is backed by a &lt;code&gt;HashMap</code> where the element is the key and a dummy value is used.</li>\n      <li>Uniqueness is enforced by &lt;code&gt;hashCode()</code> and &lt;code&gt;equals()</code>.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "HashMap uses an array of buckets with linked lists/trees.",
        "HashSet is backed by a HashMap.",
        "Uniqueness relies on hashCode and equals."
      ]
    },
    {
      "question": "How does HashSet store unique values? Explain the internal mechanism using HashMap.",
      "answer": "<ol>\n      <li>&lt;code&gt;HashSet</code> uses a private &lt;code&gt;HashMap</code> internally.</li>\n      <li>Each added element becomes a key in the backing map; a constant dummy object &lt;code&gt;PRESENT</code> is the value.</li>\n      <li>Because &lt;code&gt;HashMap</code> keys are unique, adding a duplicate simply overwrites the same key and the set size does not change.</li>\n      <li>Uniqueness depends on the element's &lt;code&gt;hashCode()</code> and &lt;code&gt;equals()</code> implementation.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Backed by a HashMap.",
        "Element is the key, dummy object is the value.",
        "Duplicate keys overwrite, keeping values unique."
      ]
    },
    {
      "question": "What are the advantages of Java 21 new features over previous versions? Compare Java with languages like Scala.",
      "answer": "<ol>\n      <li>Java 21 introduces Virtual Threads, making it practical to run millions of lightweight threads for blocking I/O.</li>\n      <li>It adds sequenced collections, record patterns, pattern matching for switch, and generational ZGC for lower latency.</li>\n      <li>Compared with older versions, it greatly simplifies concurrent code without callbacks or reactive frameworks.</li>\n      <li>Scala still offers more functional features, but Java 21 closes the concurrency gap while keeping a simpler, enterprise-friendly ecosystem.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "Virtual Threads enable massive concurrency.",
        "Record patterns and pattern matching improve expressiveness.",
        "Generational ZGC reduces GC pause times."
      ]
    },
    {
      "question": "Concurrency control in Java - explain synchronized, ReentrantLock, and how it extends to distributed systems.",
      "answer": "<ol>\n      <li>&lt;code&gt;synchronized</code> uses an intrinsic lock per object/class and is released automatically on exit.</li>\n      <li>&lt;code&gt;ReentrantLock</code> is an explicit lock supporting &lt;code&gt;tryLock</code>, fairness, and interruptible lock acquisition.</li>\n      <li>&lt;code&gt;ReadWriteLock</code> allows many concurrent readers or one writer, improving read-heavy workloads.</li>\n      <li>In distributed systems use external locks such as Redis Redlock or ZooKeeper to coordinate across JVMs.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "synchronized provides implicit JVM locks.",
        "ReentrantLock offers explicit flexible locking.",
        "Distributed systems need external lock services."
      ]
    },
    {
      "question": "Code review question: Given a piece of Java code with concurrency bugs, identify and fix the issues.",
      "answer": "<ol>\n      <li>Look for shared mutable state accessed by multiple threads without synchronization.</li>\n      <li>Check for check-then-act races, unsafe publication, and missing &lt;code&gt;volatile</code> for visibility.</li>\n      <li>Verify that standard collections like &lt;code&gt;HashMap</code> are not used concurrently; prefer &lt;code&gt;ConcurrentHashMap</code>.</li>\n      <li>Watch for nested locks and inconsistent lock ordering that can lead to deadlock.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Check shared mutable state and synchronization.",
        "Avoid check-then-act races and unsafe publication.",
        "Use concurrent collections and consistent lock ordering."
      ]
    },
    {
      "question": "Explain the difference between final, finally, and finalize in Java with code examples.",
      "answer": "<ol>\n      <li>&lt;code&gt;final</code> prevents reassignment of variables, method overriding, and class inheritance.</li>\n      <li>&lt;code&gt;finally</code> is a block that always executes after &lt;code&gt;try</code>/&lt;code&gt;catch</code>, ideal for cleanup.</li>\n      <li>&lt;code&gt;finalize()</code> is a deprecated method invoked by GC before destroying an object; prefer &lt;code&gt;try-with-resources</code> or explicit cleanup.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "final prevents modification or override.",
        "finally always runs cleanup.",
        "finalize is deprecated; use try-with-resources."
      ]
    },
    {
      "question": "What is a functional interface and what are the different types of functional interfaces in Java 8?",
      "answer": "<ol>\n      <li>A functional interface has exactly one abstract method and may be annotated with &lt;code&gt;@FunctionalInterface</code>.</li>\n      <li>Common built-in types are &lt;code&gt;Consumer</code>, &lt;code&gt;Supplier</code>, &lt;code&gt;Function</code>, &lt;code&gt;Predicate</code>, &lt;code&gt;Runnable</code>, and &lt;code&gt;Callable</code>.</li>\n      <li>Primitive specializations such as &lt;code&gt;IntPredicate</code> and &lt;code&gt;LongFunction</code> avoid boxing overhead.</li>\n      <li>They enable lambda expressions and method references in Java 8+.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "Exactly one abstract method.",
        "Common types: Consumer, Supplier, Function, Predicate.",
        "Enable lambdas and method references."
      ]
    },
    {
      "question": "What is a stream in Java? Explain intermediate and terminal operations with examples.",
      "answer": "<ol>\n      <li>A Stream pipeline begins with a source, followed by zero or more intermediate operations.</li>\n      <li>Intermediate operations such as &lt;code&gt;filter()</code>, &lt;code&gt;map()</code>, and &lt;code&gt;sorted()</code> return a new Stream and are lazy.</li>\n      <li>Terminal operations such as &lt;code&gt;collect()</code>, &lt;code&gt;forEach()</code>, and &lt;code&gt;reduce()</code> produce a result and trigger execution.</li>\n      <li>Streams are one-use; once consumed they cannot be reused.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "Intermediate operations are lazy and return a Stream.",
        "Terminal operations trigger execution and produce results.",
        "A Stream can be consumed only once."
      ]
    },
    {
      "question": "How can we define a method inside an interface? Which keyword is used (Java 8 onwards)?",
      "answer": "<ol>\n      <li>Java 8 allows <strong>default methods</strong> in interfaces using the &lt;code&gt;default</code> keyword.</li>\n      <li>Default methods provide an implementation so interfaces can evolve without breaking existing implementations.</li>\n      <li>Interfaces can also declare <strong>static methods</strong> that belong to the interface itself.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "default methods provide implementation.",
        "static methods belong to the interface.",
        "Allow interfaces to evolve safely."
      ]
    },
    {
      "question": "What is the Java Memory Model (JMM) and how does volatile work? Explain happens-before relationship.",
      "answer": "<ol>\n      <li>The Java Memory Model defines how threads interact through memory and establishes visibility and ordering rules.</li>\n      <li>&lt;code&gt;volatile</code> guarantees that writes are visible to other threads and prevents certain instruction reorderings.</li>\n      <li>It creates a happens-before relationship: a write to a volatile variable happens-before every subsequent read.</li>\n      <li>Synchronization, thread start/join, and concurrent collections also establish happens-before edges.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "JMM defines visibility and ordering rules.",
        "volatile ensures visibility and prevents reordering.",
        "Happens-before ensures safe publication."
      ]
    },
    {
      "question": "Explain the internal working of ConcurrentHashMap. How does it achieve thread-safety without locking the whole map?",
      "answer": "<ol>\n      <li>&lt;code&gt;ConcurrentHashMap</code> stores data in an array of bins and locks only the relevant bin instead of the whole map.</li>\n      <li>Java 8+ uses synchronized blocks per bucket and CAS operations for many reads and updates.</li>\n      <li>Long collision chains are converted into red-black trees to keep operations efficient.</li>\n      <li>Concurrent reads are generally non-blocking and the map does not allow null keys or values.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Per-bin locking instead of full-map lock.",
        "CAS and synchronized bins in Java 8+.",
        "Collision chains become red-black trees."
      ]
    },
    {
      "question": "How does the Thread Pool work internally and why is it preferred over creating threads manually?",
      "answer": "<ol>\n      <li>A thread pool maintains a pool of reusable worker threads and a task queue.</li>\n      <li>Tasks are submitted via &lt;code&gt;ExecutorService.submit()</code>; idle workers pick them up, avoiding the cost of thread creation.</li>\n      <li>Parameters include core pool size, maximum pool size, keep-alive time, work queue, and rejection policy.</li>\n      <li>Using a pool limits resource usage and gives better throughput than creating a thread per task.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Reuses worker threads.",
        "Tasks queue when all workers are busy.",
        "Better performance and resource control."
      ]
    },
    {
      "question": "Explain the difference between synchronized, ReentrantLock, and ReadWriteLock with use cases.",
      "answer": "<ol>\n      <li>&lt;code&gt;synchronized</code> is an implicit JVM monitor lock; it is simple and automatically released.</li>\n      <li>&lt;code&gt;ReentrantLock</code> is explicit, offering &lt;code&gt;tryLock</code>, timed lock attempts, fairness, and interruptible locking.</li>\n      <li>&lt;code&gt;ReadWriteLock</code> separates read and write locks, allowing multiple concurrent readers but exclusive writers.</li>\n      <li>Always unlock &lt;code&gt;ReentrantLock</code> in a &lt;code&gt;finally</code> block.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "synchronized is implicit and simple.",
        "ReentrantLock is explicit and flexible.",
        "ReadWriteLock optimizes read-heavy access."
      ]
    },
    {
      "question": "What is False Sharing in multithreading? How can it be minimized using @Contended annotation?",
      "answer": "<ol>\n      <li>False sharing occurs when independent variables used by different threads sit on the same CPU cache line.</li>\n      <li>Modifying one variable invalidates the cache line for other cores, causing unnecessary cache coherence traffic.</li>\n      <li>The &lt;code&gt;@Contended</code> annotation pads a field so it occupies its own cache line.</li>\n      <li>It requires &lt;code&gt;-XX:-RestrictContended</code> in user code on JDK 8+.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Independent variables on same cache line cause false sharing.",
        "Cache line invalidation hurts performance.",
        "@Contended adds padding to isolate fields."
      ]
    },
    {
      "question": "How do you debug a high CPU usage issue caused by threads in production? Which tools do you use?",
      "answer": "<ol>\n      <li>Use OS tools like &lt;code&gt;top</code> or &lt;code&gt;htop</code> to identify the Java process and thread consuming CPU.</li>\n      <li>Convert the thread PID to hexadecimal and find it in a thread dump from &lt;code&gt;jstack</code> or &lt;code&gt;jcmd Thread.print</code>.</li>\n      <li>Analyze the stack trace for infinite loops, heavy computation, or lock contention.</li>\n      <li>For deeper analysis use &lt;code&gt;async-profiler</code> or Java Flight Recorder to locate hotspots.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM"
      ],
      "keyPoints": [
        "top/htop identify the hot thread.",
        "jstack/jcmd capture thread dumps.",
        "Map PID to thread dump and profile hotspots."
      ]
    },
    {
      "question": "Design a thread-safe Singleton class in Java. Compare enum approach vs double-checked locking.",
      "answer": "<ol>\n      <li>The enum singleton is the safest: the JVM guarantees a single instance, serialization safety, and reflection safety.</li>\n      <li>Double-checked locking uses a &lt;code&gt;volatile</code> instance and a synchronized block to reduce locking overhead.</li>\n      <li>The &lt;code&gt;volatile</code> keyword prevents instruction reordering that could publish a partially constructed object.</li>\n      <li>Prefer enum singleton unless lazy initialization with arguments is required.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Enum singleton is thread-safe and serialization-safe.",
        "DCL requires volatile instance.",
        "Volatile prevents partial construction visibility."
      ]
    },
    {
      "question": "What is the difference between CountDownLatch and CyclicBarrier? When would you use each?",
      "answer": "<ol>\n      <li>&lt;code&gt;CountDownLatch</code> waits for one or more events to occur and cannot be reset.</li>\n      <li>&lt;code&gt;CyclicBarrier</code> waits for a fixed number of parties to arrive and can be reused after tripping.</li>\n      <li>Use &lt;code&gt;CountDownLatch</code> for one-shot startup dependencies and &lt;code&gt;CyclicBarrier</code> for iterative parallel tasks.</li>\n      <li>&lt;code&gt;CyclicBarrier</code> can run an optional action when the barrier is tripped.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "CountDownLatch is one-shot.",
        "CyclicBarrier is reusable.",
        "CyclicBarrier can run a barrier action."
      ]
    },
    {
      "question": "Why is String immutable in Java? What are the benefits and how does it enable String Pool?",
      "answer": "<ol>\n      <li>Immutability makes &lt;code&gt;String</code> thread-safe without synchronization.</li>\n      <li>It enables the String Pool, so literal strings with the same content can share one object, saving memory.</li>\n      <li>The hash code can be cached, improving performance as a key in hash-based collections.</li>\n      <li>It prevents security issues such as class loading or file paths being modified after creation.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "Thread-safe by default.",
        "Enables String Pool memory reuse.",
        "Hash code can be cached for reliable map keys."
      ]
    },
    {
      "question": "What is the difference between HashMap and ConcurrentHashMap in Java? When to use which?",
      "answer": "<ol>\n      <li>&lt;code&gt;HashMap</code> is not thread-safe and offers the best single-threaded performance.</li>\n      <li>&lt;code&gt;ConcurrentHashMap</code> uses fine-grained locking and is safe for concurrent access.</li>\n      <li>&lt;code&gt;ConcurrentHashMap</code> does not allow null keys or values, while &lt;code&gt;HashMap</code> allows one null key.</li>\n      <li>Use &lt;code&gt;HashMap</code> for single-threaded code and &lt;code&gt;ConcurrentHashMap</code> for shared mutable maps.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "HashMap is fast but not thread-safe.",
        "ConcurrentHashMap is thread-safe with fine-grained locks.",
        "Choose based on concurrency requirements."
      ]
    },
    {
      "question": "In a Spring Boot JPA entity, if we use @GeneratedValue(strategy = GenerationType.AUTO), why are the generated IDs not sequential?",
      "answer": "<ol>\n      <li>&lt;code&gt;GenerationType.AUTO</code> lets the JPA provider choose the strategy based on the database.</li>\n      <li>Sequence or table generators often pre-allocate IDs using &lt;code&gt;allocationSize</code>, leaving gaps.</li>\n      <li>Rollbacks and transaction failures can consume values without persisting rows.</li>\n      <li>Sequential IDs are not guaranteed; use &lt;code&gt;IDENTITY</code> or a single sequence without caching if strict ordering is required.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "AUTO delegates strategy to provider.",
        "allocationSize causes gaps.",
        "Rollbacks consume sequence values."
      ]
    },
    {
      "question": "Explain N+1 query problem in Hibernate/JPA. How would you detect and solve it in production?",
      "answer": "<ol>\n      <li>The N+1 problem happens when loading N parent records triggers N additional queries for lazy associations.</li>\n      <li>Detect it by enabling SQL logging or Hibernate statistics.</li>\n      <li>Solve it with &lt;code&gt;JOIN FETCH</code>, entity graphs (&lt;code&gt;@EntityGraph</code>), or batch fetching.</li>\n      <li>Avoid blindly switching to &lt;code&gt;EAGER</code>; it often fetches unneeded data.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Lazy associations cause extra queries.",
        "Detect via SQL logs/statistics.",
        "Fix with JOIN FETCH or entity graphs."
      ]
    },
    {
      "question": "How would you implement Soft Delete in JPA/Hibernate? What are the different approaches?",
      "answer": "<ol>\n      <li>Add a flag column such as &lt;code&gt;deleted</code> or &lt;code&gt;deleted_at</code> to the entity.</li>\n      <li>Use &lt;code&gt;@SQLDelete(sql = \"UPDATE entity SET deleted = true WHERE id = ?\")</code> to override physical deletes.</li>\n      <li>Use &lt;code&gt;@Where(clause = \"deleted = false\")</code> or &lt;code&gt;@Filter</code> to hide soft-deleted rows.</li>\n      <li>Alternative: implement custom repository methods instead of relying on Hibernate annotations.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Add a deleted flag column.",
        "@SQLDelete overrides delete with update.",
        "@Where/@Filter hide soft-deleted rows."
      ]
    },
    {
      "question": "What are Virtual Threads in Java 21? When would you NOT use virtual threads?",
      "answer": "<ol>\n      <li>Virtual Threads are lightweight threads managed by the JVM rather than the OS, enabling millions of concurrent tasks.</li>\n      <li>Avoid them for CPU-bound workloads because they do not speed up computation.</li>\n      <li>Synchronized blocks or native code can pin the underlying carrier thread, reducing scalability.</li>\n      <li>Heavy use of &lt;code&gt;ThreadLocal</code> can increase memory; prefer scoped values where appropriate.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Java 21",
        "Virtual Threads"
      ],
      "keyPoints": [
        "Not beneficial for CPU-bound work.",
        "Synchronized/native code can pin carrier threads.",
        "Excessive ThreadLocal increases memory."
      ]
    },
    {
      "question": "What is the difference between Heap and Stack memory in Java? What gets cleaned by garbage collection?",
      "answer": "<ol>\n      <li>The <strong>heap</strong> stores objects and class metadata; it is shared across threads and garbage collected.</li>\n      <li>The <strong>stack</strong> stores method frames, local variables, and operand data; each thread has its own stack.</li>\n      <li>Garbage collection removes unreachable objects from the heap.</li>\n      <li>Stack memory is automatically reclaimed when a method returns.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "JVM",
        "Memory Management"
      ],
      "keyPoints": [
        "Heap stores objects and is shared.",
        "Stack stores frames per thread.",
        "GC reclaims unreachable heap objects."
      ]
    },
    {
      "question": "How do you utilize garbage collection in Java and how much control do you have over it?",
      "answer": "<ol>\n      <li>Select a collector with JVM flags, such as &lt;code&gt;-XX:+UseG1GC</code>, &lt;code&gt;-XX:+UseZGC</code>, or &lt;code&gt;-XX:+UseShenandoahGC</code>.</li>\n      <li>Tune heap sizes with &lt;code&gt;-Xms</code> and &lt;code&gt;-Xmx</code>, and set pause goals where supported.</li>\n      <li>Monitor with &lt;code&gt;jstat</code>, VisualVM, Java Mission Control, or GC logs.</li>\n      <li>&lt;code&gt;System.gc()</code> is only a hint; the JVM may ignore it.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "JVM",
        "Memory Management"
      ],
      "keyPoints": [
        "Choose collector via JVM flags.",
        "Tune heap sizes and pause goals.",
        "System.gc is only a request."
      ]
    },
    {
      "question": "Explain the difference between fail-fast and fail-safe iterators. Give examples of each.",
      "answer": "<ol>\n      <li><strong>Fail-fast</strong> iterators throw &lt;code&gt;ConcurrentModificationException</code> if the collection is modified structurally during iteration (e.g., &lt;code&gt;ArrayList</code>, &lt;code&gt;HashMap</code>).</li>\n      <li>They detect changes by checking a modification count.</li>\n      <li><strong>Fail-safe</strong> iterators operate on a copy or snapshot, so they do not throw (e.g., &lt;code&gt;CopyOnWriteArrayList</code>, &lt;code&gt;ConcurrentHashMap</code>).</li>\n      <li>Fail-safe iterators may not reflect concurrent modifications.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Fail-fast throws on structural modification.",
        "Fail-safe iterates over a copy.",
        "Examples: ArrayList vs CopyOnWriteArrayList."
      ]
    },
    {
      "question": "What is double-checked locking in Singleton pattern? Why is volatile necessary in it?",
      "answer": "<ol>\n      <li>Double-checked locking checks the instance twice: once without locking and again inside a synchronized block.</li>\n      <li>The instance must be declared &lt;code&gt;volatile</code> to prevent the JVM from reordering instructions and publishing a partially built object.</li>\n      <li>This reduces synchronization cost after the singleton is initialized.</li>\n      <li>Prefer the enum singleton pattern for the safest implementation.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Check instance twice to reduce locking.",
        "Volatile prevents partial construction.",
        "Enum singleton is the safest alternative."
      ]
    },
    {
      "question": "How does the Producer-Consumer problem work? Solve it using BlockingQueue in Java.",
      "answer": "<ol>\n      <li>Use a &lt;code&gt;BlockingQueue</code> as the shared buffer between producer and consumer threads.</li>\n      <li>The producer calls &lt;code&gt;put()</code>, which blocks if the queue is full.</li>\n      <li>The consumer calls &lt;code&gt;take()</code>, which blocks if the queue is empty.</li>\n      <li>This built-in coordination avoids manual &lt;code&gt;wait</code>/&lt;code&gt;notify</code> and supports backpressure.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "BlockingQueue coordinates producers and consumers.",
        "put blocks when full, take blocks when empty.",
        "Built-in backpressure."
      ]
    },
    {
      "question": "Print even-odd numbers using two threads in Java. One prints odd, other prints even, in sequential order.",
      "answer": "<ol>\n      <li>Use a shared &lt;code&gt;turn</code> variable and two threads, one printing odd numbers and the other even.</li>\n      <li>Each thread waits in a loop until it is its turn, prints, increments, and notifies the other thread.</li>\n      <li>Synchronize on a common monitor and use &lt;code&gt;wait()</code>/&lt;code&gt;notifyAll()</code> to hand off control.</li>\n      <li>Alternatively use &lt;code&gt;ReentrantLock</code> with two &lt;code&gt;Condition</code> objects.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Shared turn variable controls order.",
        "wait/notify or Condition hand off control.",
        "Each thread prints and signals the other."
      ]
    },
    {
      "question": "What is the difference between wait() and sleep() in Java? Does wait() release the lock?",
      "answer": "<ol>\n      <li>&lt;code&gt;wait()</code> is an instance method that releases the lock and waits until another thread calls &lt;code&gt;notify()</code> or &lt;code&gt;notifyAll()</code>.</li>\n      <li>&lt;code&gt;sleep()</code> is a static method that pauses the current thread without releasing any locks.</li>\n      <li>&lt;code&gt;wait()</code> must be called inside a synchronized block; &lt;code&gt;sleep()</code> does not require synchronization.</li>\n      <li>&lt;code&gt;wait()</code> is for inter-thread communication; &lt;code&gt;sleep()</code> is for simple delays.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "wait releases the lock, sleep does not.",
        "wait requires synchronized context.",
        "wait is for signaling, sleep is for delaying."
      ]
    },
    {
      "question": "What is the difference between Runnable and Callable in Java? When would you use each?",
      "answer": "<ol>\n      <li>&lt;code&gt;Runnable</code> has a &lt;code&gt;run()</code> method that returns nothing and cannot throw checked exceptions.</li>\n      <li>&lt;code&gt;Callable</code> has a &lt;code&gt;call()</code> method that returns a result and can throw checked exceptions.</li>\n      <li>&lt;code&gt;Callable</code> is submitted to an &lt;code&gt;ExecutorService</code> and produces a &lt;code&gt;Future</code>.</li>\n      <li>Use &lt;code&gt;Callable</code> when you need a result or exception handling.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Runnable has no return value.",
        "Callable returns a result and checked exception.",
        "Callable produces a Future."
      ]
    },
    {
      "question": "Explain AutoConfiguration in Spring Boot. How does it work internally?",
      "answer": "<ol>\n      <li>Spring Boot auto-configuration scans &lt;code&gt;META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code> for candidate configurations.</li>\n      <li>Each candidate is guarded by &lt;code&gt;@Conditional</code> annotations such as &lt;code&gt;@ConditionalOnClass</code> and &lt;code&gt;@ConditionalOnMissingBean</code>.</li>\n      <li>Matching auto-config beans are registered after user-defined beans.</li>\n      <li>It allows an application to work out of the box while remaining easy to override.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Reads AutoConfiguration.imports.",
        "Conditional annotations control activation.",
        "Registered after user beans for easy override."
      ]
    },
    {
      "question": "What is the difference between @Component, @Service, @Repository, and @Controller annotations in Spring?",
      "answer": "<ol>\n      <li>All four are Spring stereotypes meta-annotated with &lt;code&gt;@Component</code>.</li>\n      <li>&lt;code&gt;@Controller</code> marks web controllers; it is used with &lt;code&gt;@RequestMapping</code>.</li>\n      <li>&lt;code&gt;@Service</code> denotes business logic and &lt;code&gt;@Repository</code> denotes data access with exception translation.</li>\n      <li>&lt;code&gt;@Component</code> is the generic stereotype.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "All are component stereotypes.",
        "@Controller for web, @Service for business, @Repository for DAO.",
        "@Repository enables persistence exception translation."
      ]
    },
    {
      "question": "Explain the Spring bean lifecycle. What happens between instantiation and destruction?",
      "answer": "<ol>\n      <li>Spring instantiates the bean via constructor or factory method and injects dependencies.</li>\n      <li>Awareness callbacks such as &lt;code&gt;BeanNameAware</code> and &lt;code&gt;BeanFactoryAware</code> are invoked.</li>\n      <li>Initialization callbacks such as &lt;code&gt;@PostConstruct</code> or &lt;code&gt;InitializingBean.afterPropertiesSet()</code> run.</li>\n      <li>On context close, destruction callbacks such as &lt;code&gt;@PreDestroy</code> or &lt;code&gt;DisposableBean.destroy()</code> run.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Instantiation and dependency injection.",
        "Awareness and initialization callbacks.",
        "Destruction callbacks on shutdown."
      ]
    },
    {
      "question": "What is the difference between DELETE and TRUNCATE in SQL? When would you use each?",
      "answer": "<ol>\n      <li>&lt;code&gt;DELETE</code> is a DML statement that removes specific rows using a &lt;code&gt;WHERE</code> clause and logs each deletion.</li>\n      <li>&lt;code&gt;TRUNCATE</code> is a DDL statement that removes all rows quickly with minimal logging and resets auto-increment counters.</li>\n      <li>&lt;code&gt;DELETE</code> can be rolled back in a transaction; &lt;code&gt;TRUNCATE</code> behavior depends on the database.</li>\n      <li>&lt;code&gt;DELETE</code> fires triggers; &lt;code&gt;TRUNCATE</code> usually does not.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "SQL",
        "Database"
      ],
      "keyPoints": [
        "DELETE is DML and row-logged.",
        "TRUNCATE is DDL and fast.",
        "TRUNCATE cannot use WHERE."
      ]
    },
    {
      "question": "What are ACID properties in the context of databases? Explain each property.",
      "answer": "<ol>\n      <li><strong>Atomicity:</strong> a transaction completes entirely or not at all.</li>\n      <li><strong>Consistency:</strong> the database moves from one valid state to another.</li>\n      <li><strong>Isolation:</strong> concurrent transactions do not interfere with each other.</li>\n      <li><strong>Durability:</strong> committed changes survive system failures.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "SQL",
        "Database"
      ],
      "keyPoints": [
        "Atomicity: all or nothing.",
        "Consistency: valid state transitions.",
        "Isolation and Durability protect concurrent and committed data."
      ]
    },
    {
      "question": "Design a snake and ladder game in Java. Explain the classes, design patterns, and logic.",
      "answer": "<ol>\n      <li>Model the board as a collection of cells with snakes and ladders stored as maps from start to end positions.</li>\n      <li>Create &lt;code&gt;Player</code>, &lt;code&gt;Dice</code>, &lt;code&gt;Board</code>, and &lt;code&gt;Game</code> classes.</li>\n      <li>The game loop rolls the dice, updates the player position based on snakes/ladders, and checks for a winner.</li>\n      <li>Use the Observer pattern to notify UI components of game events.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "OOP",
        "System Design"
      ],
      "keyPoints": [
        "Board maps snakes/ladders start to end.",
        "Player, Dice, Board, and Game classes.",
        "Game loop moves players and checks winner."
      ]
    },
    {
      "question": "What are Records in Java (Java 16+)? How do they reduce boilerplate code? What are their limitations?",
      "answer": "<ol>\n      <li>Records are compact, immutable data classes declared with &lt;code&gt;record Point(int x, int y) {}</code>.</li>\n      <li>The compiler generates a constructor, accessors, &lt;code&gt;equals()</code>, &lt;code&gt;hashCode()</code>, and &lt;code&gt;toString()</code>.</li>\n      <li>Limitations: records are &lt;code&gt;final</code>, cannot extend another class, and have no mutable fields or setters.</li>\n      <li>Use them for plain data carriers to reduce boilerplate.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "Records reduce boilerplate for data classes.",
        "Immutable with auto-generated methods.",
        "Cannot extend other classes."
      ]
    },
    {
      "question": "What are Sealed Classes in Java 17? What problem do they solve? How do they work with pattern matching?",
      "answer": "<ol>\n      <li>Sealed classes restrict which classes may extend them using a &lt;code&gt;permits</code> clause.</li>\n      <li>Permitted subclasses must be &lt;code&gt;final</code>, &lt;code&gt;sealed</code>, or &lt;code&gt;non-sealed</code>.</li>\n      <li>They work with pattern matching so the compiler can check exhaustive switches.</li>\n      <li>They solve the fragile base class problem by controlling the inheritance hierarchy.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "permits clause controls subclasses.",
        "Subclasses are final, sealed, or non-sealed.",
        "Enables exhaustive pattern matching."
      ]
    },
    {
      "question": "Explain CompletableFuture in Java. How does it compare to using virtual threads for async operations?",
      "answer": "<ol>\n      <li>&lt;code&gt;CompletableFuture</code> provides non-blocking, callback-based async composition using the common ForkJoinPool.</li>\n      <li>Virtual threads let you write async logic with traditional blocking calls and structured concurrency.</li>\n      <li>Use &lt;code&gt;CompletableFuture</code> when you already have an async API or need fine-grained composition.</li>\n      <li>Use virtual threads for high volumes of independent blocking tasks without callback hell.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "CompletableFuture is callback/composition based.",
        "Virtual threads allow blocking-style concurrency.",
        "Choose based on existing code style."
      ]
    },
    {
      "question": "Can we override static methods in Java? Why or why not?",
      "answer": "<ol>\n      <li>No, static methods cannot be overridden; they are resolved at compile time based on the reference type.</li>\n      <li>A subclass can declare a static method with the same signature, which hides the parent method.</li>\n      <li>Overriding applies to instance methods with dynamic dispatch based on the actual object type.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Static methods belong to the class.",
        "Subclasses hide, not override.",
        "Resolved at compile time."
      ]
    },
    {
      "question": "What is the difference between abstract class and interface in Java? When would you use each?",
      "answer": "<ol>\n      <li>An abstract class can contain state, constructors, and both abstract and concrete methods; a class can extend only one.</li>\n      <li>An interface defines a contract; a class can implement many interfaces, and interfaces can have default and static methods.</li>\n      <li>Use an abstract class for shared implementation and an interface for shared behavior across unrelated classes.</li>\n      <li>Java 8+ allows interfaces to provide default method implementations.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Abstract class can have state and single inheritance.",
        "Interface supports multiple inheritance.",
        "Use abstract class for shared code, interface for capabilities."
      ]
    },
    {
      "question": "What is the difference between checked and unchecked exceptions in Java?",
      "answer": "<ol>\n      <li><strong>Checked exceptions</strong> extend &lt;code&gt;Exception</code> and must be caught or declared with &lt;code&gt;throws</code> (e.g., &lt;code&gt;IOException</code>).</li>\n      <li><strong>Unchecked exceptions</strong> extend &lt;code&gt;RuntimeException</code> and do not need explicit handling (e.g., &lt;code&gt;NullPointerException</code>).</li>\n      <li>Use checked exceptions for recoverable conditions and unchecked exceptions for programming errors.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Exception Handling"
      ],
      "keyPoints": [
        "Checked must be handled or declared.",
        "Unchecked extend RuntimeException.",
        "Use checked for recoverable errors."
      ]
    },
    {
      "question": "What is exception chaining in Java? How do you implement it?",
      "answer": "<ol>\n      <li>Exception chaining wraps a low-level exception inside a higher-level one while preserving the original stack trace.</li>\n      <li>Use the constructor that accepts a cause, such as &lt;code&gt;throw new MyException(\"message\", original);</code>.</li>\n      <li>Alternatively call &lt;code&gt;initCause()</code> on the wrapper exception.</li>\n      <li>It hides implementation details without losing diagnostic information.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Exception Handling"
      ],
      "keyPoints": [
        "Wrap lower-level exceptions.",
        "Use cause constructor or initCause.",
        "Preserves original stack trace."
      ]
    },
    {
      "question": "What is the difference between Comparator and Comparable in Java?",
      "answer": "<ol>\n      <li>&lt;code&gt;Comparable</code> provides natural ordering inside the class via &lt;code&gt;compareTo()</code>; a class can implement it once.</li>\n      <li>&lt;code&gt;Comparator</code> defines custom ordering externally via &lt;code&gt;compare()</code>; multiple comparators can be created.</li>\n      <li>&lt;code&gt;Comparable</code> is in &lt;code&gt;java.lang</code>; &lt;code&gt;Comparator</code> is in &lt;code&gt;java.util</code>.</li>\n      <li>Use &lt;code&gt;Comparator</code> for sorting by different fields or orders.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Comparable natural ordering in class.",
        "Comparator external custom ordering.",
        "Multiple comparators possible."
      ]
    },
    {
      "question": "How do you handle transaction propagation in Spring? Explain REQUIRED vs REQUIRES_NEW.",
      "answer": "<ol>\n      <li>&lt;code&gt;Propagation.REQUIRED</code> joins an existing transaction or creates a new one if none exists.</li>\n      <li>&lt;code&gt;Propagation.REQUIRES_NEW</code> suspends the current transaction and starts a fresh, independent one.</li>\n      <li>Use &lt;code&gt;REQUIRES_NEW</code> when a method must commit or roll back independently of the caller.</li>\n      <li>Nesting errors can occur if inner rollback is not handled carefully.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "REQUIRED joins or creates.",
        "REQUIRES_NEW suspends and creates independent transaction.",
        "Use for independent commit/rollback."
      ]
    },
    {
      "question": "What is the difference between BeanFactory and ApplicationContext in Spring?",
      "answer": "<ol>\n      <li>&lt;code&gt;BeanFactory</code> is the core Spring IoC container that provides lazy initialization of beans.</li>\n      <li>&lt;code&gt;ApplicationContext</code> extends &lt;code&gt;BeanFactory</code> and adds enterprise features: AOP, events, message resources, and declarative bean creation.</li>\n      <li>&lt;code&gt;ApplicationContext</code> eagerly instantiates singleton beans by default.</li>\n      <li>Prefer &lt;code&gt;ApplicationContext</code> for most Spring Boot and enterprise applications.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "BeanFactory is basic IoC with lazy init.",
        "ApplicationContext adds AOP, events, messages.",
        "ApplicationContext is preferred."
      ]
    },
    {
      "question": "What is the internal implementation of HashMap? Explain the treeify process and when it happens.",
      "answer": "<ol>\n      <li>&lt;code&gt;HashMap</code> buckets start as linked lists.</li>\n      <li>When a bucket reaches length 8 and the table size is at least 64, the list is converted to a red-black tree.</li>\n      <li>This keeps worst-case operations near &lt;code&gt;O(log n)</code> instead of &lt;code&gt;O(n)</code> under high collisions.</li>\n      <li>Removal can reduce the tree back to a linked list when it becomes small.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Bucket treeify at length 8 and capacity 64.",
        "Uses red-black tree.",
        "Improves worst-case performance."
      ]
    },
    {
      "question": "What are the differences between ArrayList and Vector in Java? Which one is preferred?",
      "answer": "<ol>\n      <li>&lt;code&gt;ArrayList</code> is unsynchronized and generally faster; it grows by about 50% when full.</li>\n      <li>&lt;code&gt;Vector</code> is synchronized and thread-safe but slower; it doubles its capacity when full.</li>\n      <li>&lt;code&gt;Vector</code> is considered legacy; prefer &lt;code&gt;ArrayList</code> in new code.</li>\n      <li>For thread safety, wrap an &lt;code&gt;ArrayList</code> with &lt;code&gt;Collections.synchronizedList</code> or use &lt;code&gt;CopyOnWriteArrayList</code>.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "ArrayList is faster and unsynchronized.",
        "Vector is synchronized legacy.",
        "Prefer ArrayList with synchronized wrappers if needed."
      ]
    },
    {
      "question": "Explain the Factory Design Pattern with a real-world example from Java's JDK library.",
      "answer": "<ol>\n      <li>The Factory pattern delegates object creation to a factory method or class rather than using &lt;code&gt;new</code> directly.</li>\n      <li>It decouples the client from concrete classes and makes it easy to introduce new product types.</li>\n      <li>JDK examples include &lt;code&gt;Calendar.getInstance()</code>, &lt;code&gt;NumberFormat.getInstance()</code>, and &lt;code&gt;DriverManager.getConnection()</code>.</li>\n      <li>It also supports centralized object configuration.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Design Patterns"
      ],
      "keyPoints": [
        "Centralizes object creation.",
        "JDK examples: Calendar, NumberFormat, DriverManager.",
        "Decouples client from concrete classes."
      ]
    },
    {
      "question": "How can you achieve a thread-safe Singleton pattern in Java? Explain double-checked locking vs enum approach.",
      "answer": "<ol>\n      <li>The enum singleton is the safest because the JVM guarantees exactly one instance and protects against serialization and reflection attacks.</li>\n      <li>Double-checked locking uses a &lt;code&gt;volatile</code> instance and a synchronized block to minimize locking after initialization.</li>\n      <li>Bill Pugh singleton uses a static inner class for lazy, thread-safe initialization.</li>\n      <li>Use enum unless lazy initialization with constructor arguments is needed.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Design Patterns"
      ],
      "keyPoints": [
        "Enum singleton is safest.",
        "DCL needs volatile.",
        "Bill Pugh uses static inner class."
      ]
    },
    {
      "question": "Explain the difference between BeanFactory and ApplicationContext in Spring Framework.",
      "answer": "<ol>\n      <li>&lt;code&gt;BeanFactory</code> is the core Spring IoC container with lazy initialization.</li>\n      <li>&lt;code&gt;ApplicationContext</code> extends it and adds AOP, event propagation, message resources, and declarative bean creation.</li>\n      <li>&lt;code&gt;ApplicationContext</code> pre-instantiates singleton beans by default.</li>\n      <li>For Spring Boot applications, &lt;code&gt;ApplicationContext</code> is the standard container.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "BeanFactory is lazy core IoC.",
        "ApplicationContext adds enterprise features.",
        "Spring Boot uses ApplicationContext."
      ]
    },
    {
      "question": "What is the use of @Transactional annotation in Spring? How does proxy-based transaction management work?",
      "answer": "<ol>\n      <li>&lt;code&gt;@Transactional</code> marks a method or class for Spring-managed transaction boundaries.</li>\n      <li>Spring creates an AOP proxy (JDK dynamic or CGLIB) around the bean; the proxy starts the transaction before the method and commits or rolls back after.</li>\n      <li>By default, unchecked exceptions roll back and checked exceptions do not.</li>\n      <li>Self-invocation within the same class bypasses the proxy and ignores the annotation.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "AOP proxy manages transaction boundaries.",
        "Unchecked exceptions trigger rollback by default.",
        "Self-invocation bypasses proxy."
      ]
    },
    {
      "question": "How does Hibernate caching work? Explain first-level cache vs second-level cache.",
      "answer": "<ol>\n      <li>The <strong>first-level cache</strong> is bound to the Hibernate &lt;code&gt;Session</code> and is enabled by default.</li>\n      <li>The <strong>second-level cache</strong> is bound to the &lt;code&gt;SessionFactory</code> and requires a provider such as EhCache or Caffeine.</li>\n      <li>Entities must be annotated with &lt;code&gt;@Cache</code> to use the second-level cache.</li>\n      <li>L1 avoids repeated loads within a session; L2 shares data across sessions.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "L1 cache is per Session and default.",
        "L2 cache is per SessionFactory and optional.",
        "Reduce database hits with both caches."
      ]
    },
    {
      "question": "Explain the difference between save(), persist(), and saveOrUpdate() in Hibernate.",
      "answer": "<ol>\n      <li>&lt;code&gt;save()</code> is Hibernate-specific, immediately returns a generated identifier, and may execute an insert.</li>\n      <li>&lt;code&gt;persist()</code> is JPA-standard, returns void, and guarantees insertion on transaction commit.</li>\n      <li>&lt;code&gt;saveOrUpdate()</code> is Hibernate-specific and determines whether to insert or update based on the unsaved-value check.</li>\n      <li>Prefer &lt;code&gt;persist()</code> for portability.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "save returns id immediately.",
        "persist is JPA and returns void.",
        "saveOrUpdate decides insert or update."
      ]
    },
    {
      "question": "How does Hibernate handle composite keys? Explain @Embeddable and @EmbeddedId annotations.",
      "answer": "<ol>\n      <li>A composite key class is annotated with &lt;code&gt;@Embeddable</code> and contains all key fields.</li>\n      <li>The entity embeds it with &lt;code&gt;@EmbeddedId</code> on a single field.</li>\n      <li>Alternatively, use &lt;code&gt;@IdClass</code> with multiple &lt;code&gt;@Id</code> fields in the entity.</li>\n      <li>The composite key class must implement &lt;code&gt;equals()</code> and &lt;code&gt;hashCode()</code>.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "@Embeddable defines key class.",
        "@EmbeddedId embeds it in entity.",
        "Equals and hashCode are required."
      ]
    },
    {
      "question": "How do you manage transactions in Hibernate? Explain session.beginTransaction(), commit(), and rollback().",
      "answer": "<ol>\n      <li>In Hibernate, call &lt;code&gt;session.beginTransaction()</code> to start a JDBC transaction.</li>\n      <li>Perform persistence operations, then call &lt;code&gt;commit()</code> to flush changes and commit.</li>\n      <li>Call &lt;code&gt;rollback()</code> on exception to revert changes.</li>\n      <li>One transaction typically spans one unit of work or request.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "beginTransaction starts the unit of work.",
        "commit flushes and commits.",
        "rollback reverts on failure."
      ]
    },
    {
      "question": "What is the difference between @JoinColumn and @JoinTable in JPA/Hibernate? When to use each?",
      "answer": "<ol>\n      <li>&lt;code&gt;@JoinColumn</code> adds a foreign key column to the owning side of the relationship table.</li>\n      <li>&lt;code&gt;@JoinTable</code> creates a separate link table, usually for many-to-many or unidirectional one-to-many associations.</li>\n      <li>Use &lt;code&gt;@JoinColumn</code> for simple FK relationships.</li>\n      <li>Use &lt;code&gt;@JoinTable</code> when neither side should hold the foreign key directly.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "@JoinColumn for FK column.",
        "@JoinTable for separate link table.",
        "Common in many-to-many mappings."
      ]
    },
    {
      "question": "How would you handle 10,000+ concurrent API requests in Java using Virtual Threads or thread pools?",
      "answer": "<ol>\n      <li>For blocking I/O, use virtual threads via &lt;code&gt;Executors.newVirtualThreadPerTaskExecutor()</code> to handle one request per task.</li>\n      <li>Add connection/request timeouts and backpressure to protect downstream services.</li>\n      <li>Consider non-blocking frameworks such as Spring WebFlux for extremely high throughput with event loops.</li>\n      <li>Monitor with metrics and distributed tracing to detect bottlenecks.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Java 21",
        "Virtual Threads"
      ],
      "keyPoints": [
        "Virtual threads scale blocking I/O.",
        "Add timeouts and backpressure.",
        "WebFlux is an alternative for event-loop workloads."
      ]
    },
    {
      "question": "In a banking application, two threads withdraw from the same account causing incorrect balance. How do you prevent this race condition?",
      "answer": "<ol>\n      <li>Declare the &lt;code&gt;withdraw</code> method &lt;code&gt;synchronized</code> or use an &lt;code&gt;AtomicLong</code> for the balance.</li>\n      <li>Avoid the check-then-act race by making balance read and update atomic.</li>\n      <li>Encapsulate the balance and never expose it directly.</li>\n      <li>Alternatively use a &lt;code&gt;ReentrantLock</code> for finer control.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Synchronize or use atomic variables.",
        "Avoid check-then-act race.",
        "Encapsulate shared state."
      ]
    },
    {
      "question": "How do you ensure idempotency and thread safety in concurrent microservices?",
      "answer": "<ol>\n      <li>Use idempotency keys stored with unique constraints so duplicate requests are rejected.</li>\n      <li>Keep microservice instances stateless and share nothing; use immutable data where possible.</li>\n      <li>Use optimistic locking with version columns for database updates.</li>\n      <li>Distributed locks can protect critical sections when needed.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Idempotency keys prevent duplicate processing.",
        "Stateless services and immutable data.",
        "Optimistic locking for concurrent updates."
      ]
    },
    {
      "question": "How would you use parallel streams or ForkJoin framework to process 1 million records efficiently?",
      "answer": "<ol>\n      <li>Use &lt;code&gt;parallelStream()</code> only for large, CPU-intensive, stateless datasets.</li>\n      <li>Ensure the source is efficiently splittable, such as arrays or &lt;code&gt;IntStream.range</code>.</li>\n      <li>Avoid shared mutable state and side effects inside lambda operations.</li>\n      <li>The common ForkJoinPool backs parallel streams; benchmark because overhead can hurt small datasets.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Java 8+",
        "Modern Java"
      ],
      "keyPoints": [
        "Use for large CPU-bound stateless tasks.",
        "Source must be splittable.",
        "Avoid shared mutable state."
      ]
    },
    {
      "question": "How does autoboxing of integers work in Java? What is the role of Integer.valueOf() and IntegerCache?",
      "answer": "<ol>\n      <li>Autoboxing automatically converts primitives to wrapper objects; unboxing does the reverse.</li>\n      <li>&lt;code&gt;Integer.valueOf(int)</code> caches values between -128 and 127 by default.</li>\n      <li>Comparing wrapper objects with &lt;code&gt;==</code> may return false outside the cache; use &lt;code&gt;equals()</code>.</li>\n      <li>The cache upper bound can be tuned with &lt;code&gt;-XX:AutoBoxCacheMax</code>.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "Autoboxing uses Integer.valueOf.",
        "Cache range is -128 to 127.",
        "Use equals for value comparison."
      ]
    },
    {
      "question": "What is the diamond problem in Java and how is it solved using interfaces?",
      "answer": "<ol>\n      <li>The diamond problem occurs when a class inherits the same method from two parent classes, causing ambiguity.</li>\n      <li>Java prevents this by disallowing multiple inheritance of classes.</li>\n      <li>Java allows multiple inheritance of interfaces; if two default methods conflict, the implementing class must override them.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Diamond problem causes method ambiguity.",
        "Java forbids multiple class inheritance.",
        "Interfaces allow multiple inheritance with conflict resolution."
      ]
    },
    {
      "question": "What is the difference between Composition and Inheritance? When to prefer one over the other?",
      "answer": "<ol>\n      <li>Composition models a <strong>has-a</strong> relationship by containing instances of other classes.</li>\n      <li>Inheritance models an <strong>is-a</strong> relationship and creates tight coupling to the parent class.</li>\n      <li>Composition is more flexible and testable because behavior can be changed at runtime.</li>\n      <li>Favor composition over inheritance to avoid fragile base classes.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Composition is has-a and flexible.",
        "Inheritance is is-a and tightly coupled.",
        "Prefer composition for reuse."
      ]
    },
    {
      "question": "What is a Deadlock? How do you detect and prevent it in production systems?",
      "answer": "<ol>\n      <li>Deadlock requires mutual exclusion, hold-and-wait, no preemption, and circular wait.</li>\n      <li>Prevent it by acquiring locks in a global order, using &lt;code&gt;tryLock</code> with timeouts, and avoiding nested locks.</li>\n      <li>Detect deadlocks by analyzing thread dumps for cycles in lock ownership.</li>\n      <li>Prefer higher-level concurrency utilities that manage coordination.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Four Coffman conditions.",
        "Lock ordering and tryLock prevent cycles.",
        "Thread dumps detect deadlocks."
      ]
    },
    {
      "question": "Explain Race Conditions with a real example. How can they be prevented using atomic variables?",
      "answer": "<ol>\n      <li>A race condition occurs when the result depends on the unpredictable timing of thread interleaving.</li>\n      <li>Atomic variables such as &lt;code&gt;AtomicInteger</code>, &lt;code&gt;AtomicLong</code>, and &lt;code&gt;LongAdder</code> provide lock-free read-modify-write using CAS.</li>\n      <li>&lt;code&gt;volatile</code> alone is not enough for compound operations such as increment.</li>\n      <li>Use atomic classes or synchronization to make operations thread-safe.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Race condition from interleaving.",
        "Atomic classes use CAS.",
        "Volatile is insufficient for compound operations."
      ]
    },
    {
      "question": "What is the difference between FixedThreadPool, CachedThreadPool, and SingleThreadExecutor?",
      "answer": "<ol>\n      <li>&lt;code&gt;FixedThreadPool</code> has a fixed number of threads and an unbounded queue; good for steady workloads.</li>\n      <li>&lt;code&gt;CachedThreadPool</code> creates threads on demand, reuses idle ones, and removes threads after 60 seconds; suited to many short tasks.</li>\n      <li>&lt;code&gt;SingleThreadExecutor</code> uses one worker thread and guarantees sequential, FIFO execution.</li>\n      <li>Choose based on task duration, arrival rate, and ordering needs.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "FixedThreadPool for controlled concurrency.",
        "CachedThreadPool for many short-lived tasks.",
        "SingleThreadExecutor for ordered sequential tasks."
      ]
    },
    {
      "question": "What is circuit breaker pattern in microservices? Why is it important?",
      "answer": "<ol>\n      <li>The circuit breaker monitors failures and opens the circuit after a threshold, immediately failing requests.</li>\n      <li>After a timeout it enters a half-open state and allows a probe to test the downstream service.</li>\n      <li>If the probe succeeds the circuit closes; otherwise it opens again.</li>\n      <li>Tools include Resilience4j and Netflix Hystrix; it prevents cascade failures.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Open/closed/half-open states.",
        "Fail fast when open.",
        "Prevents cascade failures."
      ]
    },
    {
      "question": "How do microservices handle data consistency? Explain Saga pattern and distributed transactions.",
      "answer": "<ol>\n      <li>Microservices avoid distributed transactions when possible and rely on eventual consistency.</li>\n      <li>The Saga pattern splits a business process into a sequence of local transactions with compensating actions.</li>\n      <li>Choreography uses events; orchestration uses a central coordinator.</li>\n      <li>The Outbox pattern ensures events are published atomically with database changes.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Saga breaks global transaction into local steps.",
        "Compensations undo failed steps.",
        "Outbox pattern ensures reliable event publishing."
      ]
    },
    {
      "question": "How do you monitor microservices effectively? Explain distributed tracing and observability.",
      "answer": "<ol>\n      <li>Collect metrics with Micrometer and Prometheus, logs with centralized logging such as ELK, and traces with Zipkin or Jaeger.</li>\n      <li>Pass a correlation/trace ID across services to follow requests end to end.</li>\n      <li>Add health checks and alerts for latency, errors, and saturation.</li>\n      <li>Use dashboards to correlate metrics, logs, and traces.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot",
        "Hibernate"
      ],
      "keyPoints": [
        "Metrics, logs, and traces are the three pillars.",
        "Trace IDs correlate requests.",
        "Alerts and dashboards for observability."
      ]
    },
    {
      "question": "What is the difference between DOM and SAX parser in Java? When to use each?",
      "answer": "<ol>\n      <li><strong>DOM</strong> parses the entire XML into a tree in memory, allowing random access and modification.</li>\n      <li><strong>SAX</strong> is event-driven and streams the document, using little memory but only forward-only access.</li>\n      <li>Use DOM for small to medium documents that need random access; use SAX for very large documents.</li>\n      <li>StAX offers a pull-parsing middle ground.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "DOM loads full tree in memory.",
        "SAX streams with events.",
        "Choose DOM for small docs, SAX for large."
      ]
    },
    {
      "question": "What is IdentityHashMap in Java? How does it differ from regular HashMap?",
      "answer": "<ol>\n      <li>&lt;code&gt;IdentityHashMap</code> compares keys with &lt;code&gt;==</code> reference equality instead of &lt;code&gt;equals()</code>/&lt;code&gt;hashCode()</code>.</li>\n      <li>It is useful when reference identity is the intended semantics, such as serialization object graph traversal.</li>\n      <li>&lt;code&gt;HashMap</code> uses logical equality via &lt;code&gt;equals()</code> and &lt;code&gt;hashCode()</code>.</li>\n      <li>Do not use &lt;code&gt;IdentityHashMap</code> as a general-purpose map.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Uses == reference equality.",
        "Ignores equals and hashCode.",
        "Use for reference-key semantics."
      ]
    },
    {
      "question": "What is the difference between method overloading and method overriding in Java?",
      "answer": "<ol>\n      <li><strong>Overloading</strong> defines multiple methods with the same name but different parameter lists in the same class; it is compile-time polymorphism.</li>\n      <li><strong>Overriding</strong> redefines a method with the same signature in a subclass; it is runtime polymorphism.</li>\n      <li>Overriding allows covariant return types; overloading does not depend on return type.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Overloading: same name, different params, compile-time.",
        "Overriding: same signature in subclass, runtime.",
        "Covariant return allowed only in overriding."
      ]
    },
    {
      "question": "What is the difference between error and exception in Java? Explain their hierarchy.",
      "answer": "<ol>\n      <li>&lt;code&gt;Throwable</code> is the root class of the error hierarchy.</li>\n      <li>&lt;code&gt;Error</code> represents serious JVM-level problems such as &lt;code&gt;OutOfMemoryError</code> and &lt;code&gt;StackOverflowError</code>; they are generally not caught.</li>\n      <li>&lt;code&gt;Exception</code> represents conditions that applications may want to handle; &lt;code&gt;RuntimeException</code> subclasses are unchecked.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Exception Handling"
      ],
      "keyPoints": [
        "Throwable is root.",
        "Error is JVM-level and usually fatal.",
        "Exception is application-level."
      ]
    },
    {
      "question": "Why does Java not support multiple inheritance with classes? Explain the diamond problem.",
      "answer": "<ol>\n      <li>Multiple class inheritance can cause the diamond problem when two parent classes define the same method.</li>\n      <li>Java avoids ambiguity by allowing a class to extend only one superclass.</li>\n      <li>Interfaces provide a controlled form of multiple inheritance; conflicting default methods must be overridden.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "OOP"
      ],
      "keyPoints": [
        "Diamond problem causes ambiguity.",
        "Java allows single class inheritance.",
        "Interfaces provide multiple inheritance."
      ]
    },
    {
      "question": "How does ClassLoader work in Java? Explain Bootstrap, Extension, and Application class loaders.",
      "answer": "<ol>\n      <li><strong>Bootstrap ClassLoader</strong> loads core JDK classes from &lt;code&gt;rt.jar</code> or modules.</li>\n      <li><strong>Platform/Extension ClassLoader</strong> loads extension or platform libraries.</li>\n      <li><strong>Application ClassLoader</strong> loads classes from the application classpath.</li>\n      <li>The delegation model tries the parent loader first, ensuring core classes are loaded consistently.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Memory Management"
      ],
      "keyPoints": [
        "Bootstrap loads JDK core classes.",
        "Platform/Extension loads extension libs.",
        "Application loads classpath classes."
      ]
    },
    {
      "question": "What are the different types of garbage collectors in Java? (Serial, Parallel, CMS, G1, ZGC, Shenandoah)",
      "answer": "<ol>\n      <li><strong>Serial</strong> is single-threaded and suited to small heaps.</li>\n      <li><strong>Parallel</strong> uses multiple threads for throughput.</li>\n      <li><strong>CMS</strong> reduces pause times by doing much of the work concurrently.</li>\n      <li><strong>G1</strong> divides the heap into regions and targets pause goals; <strong>ZGC</strong> and <strong>Shenandoah</strong> aim for sub-millisecond pauses on large heaps.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Memory Management"
      ],
      "keyPoints": [
        "Serial/Parallel are stop-the-world.",
        "CMS and G1 balance throughput and pause.",
        "ZGC and Shenandoah target ultra-low pause."
      ]
    },
    {
      "question": "What are the different states of a Thread in Java? Explain NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",
      "answer": "<ol>\n      <li><strong>NEW</strong>: created but not started.</li>\n      <li><strong>RUNNABLE</strong>: executing or ready to execute.</li>\n      <li><strong>BLOCKED</strong>: waiting to acquire a monitor lock.</li>\n      <li><strong>WAITING</strong>: waiting indefinitely for another thread (e.g., &lt;code&gt;wait()</code>).</li>\n      <li><strong>TIMED_WAITING</strong>: waiting with a timeout (e.g., &lt;code&gt;sleep()</code>).</li>\n      <li><strong>TERMINATED</strong>: execution completed.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Six states defined by Thread.State.",
        "BLOCKED waits for monitor lock.",
        "WAITING/TIMED_WAITING for join/wait/park."
      ]
    },
    {
      "question": "What is context switching in Java? What happens during a context switch?",
      "answer": "<ol>\n      <li>Context switching is the process of saving the state of one thread and loading the state of another.</li>\n      <li>The CPU saves/restores registers, the program counter, and cache-related metadata.</li>\n      <li>It occurs due to time slicing, I/O waits, lock contention, or higher-priority threads.</li>\n      <li>Excessive switching adds overhead and can degrade performance through cache invalidation.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Save/restore thread state.",
        "Triggered by scheduler and I/O.",
        "Adds overhead and cache pressure."
      ]
    },
    {
      "question": "What is the difference between notify() and notifyAll() in Java? When should you use each?",
      "answer": "<ol>\n      <li>&lt;code&gt;notify()</code> wakes one arbitrary thread waiting on the monitor.</li>\n      <li>&lt;code&gt;notifyAll()</code> wakes every thread waiting on the monitor; they compete for the lock.</li>\n      <li>Use &lt;code&gt;notify()</code> only when all waiting threads are waiting for the same condition and one can proceed.</li>\n      <li>In most cases use &lt;code&gt;notifyAll()</code> to avoid missed signals.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "notify wakes one thread.",
        "notifyAll wakes all waiters.",
        "Prefer notifyAll to prevent missed signals."
      ]
    },
    {
      "question": "What are the advantages and disadvantages of Multithreading in Java?",
      "answer": "<ol>\n      <li>Advantages: better CPU utilization, improved responsiveness, resource sharing, and simpler modeling of concurrent tasks.</li>\n      <li>Disadvantages: synchronization complexity, risk of deadlocks and race conditions, debugging difficulty, and context-switch overhead.</li>\n      <li>Use thread pools and concurrent utilities to reduce risk.</li>\n      <li>Profile and test concurrent code thoroughly.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Better CPU utilization and responsiveness.",
        "Synchronization complexity and deadlock risk.",
        "Context-switch overhead."
      ]
    },
    {
      "question": "Explain the Observer Design Pattern with a real-world example from Java's event handling framework.",
      "answer": "<ol>\n      <li>The Observer pattern defines a one-to-many dependency so that when one object changes state, all dependents are notified.</li>\n      <li>In the JDK, &lt;code&gt;ActionListener</code> and the event model follow this pattern: components fire events and listeners react.</li>\n      <li>The legacy &lt;code&gt;java.util.Observer</code>/&lt;code&gt;Observable</code> classes also implement it but are deprecated.</li>\n      <li>It decouples event sources from event handlers.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Design Patterns"
      ],
      "keyPoints": [
        "One-to-many dependency.",
        "JDK ActionListener is an example.",
        "Decouples source and handlers."
      ]
    },
    {
      "question": "What is the difference between Strategy and State design patterns?",
      "answer": "<ol>\n      <li><strong>Strategy</strong> encapsulates interchangeable algorithms; the client selects the algorithm.</li>\n      <li><strong>State</strong> changes behavior automatically based on the object's internal state.</li>\n      <li>Both delegate behavior to another object, but Strategy focuses on algorithms while State focuses on state transitions.</li>\n      <li>Strategy is usually configured externally; State manages transitions internally.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Design Patterns"
      ],
      "keyPoints": [
        "Strategy selects interchangeable algorithms.",
        "State changes behavior with internal state.",
        "Both use delegation."
      ]
    },
    {
      "question": "How would you implement an LRU Cache in Java? What data structures would you use?",
      "answer": "<ol>\n      <li>An LRU Cache evicts the least recently used item when capacity is exceeded.</li>\n      <li>Use &lt;code&gt;LinkedHashMap</code> with &lt;code&gt;accessOrder = true</code> and override &lt;code&gt;removeEldestEntry()</code>.</li>\n      <li>Alternatively implement a doubly linked list plus a &lt;code&gt;HashMap</code> for O(1) get and put.</li>\n      <li>The linked list maintains usage order; the map provides fast lookup.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Collections",
        "Coding"
      ],
      "keyPoints": [
        "Evicts least recently used.",
        "LinkedHashMap with accessOrder and removeEldestEntry.",
        "Alternative: HashMap + doubly linked list."
      ]
    },
    {
      "question": "Write code to check if a binary tree is a BST or not.",
      "answer": "<ol>\n      <li>Perform an in-order traversal and verify that values are strictly increasing (or non-decreasing depending on duplicate policy).</li>\n      <li>Alternatively recurse with min and max bounds: each node's value must lie between the bounds, and subtrees get tighter bounds.</li>\n      <li>The recursive approach is &lt;code&gt;O(n)</code> and uses &lt;code&gt;O(h)</code> stack space.</li>\n      <li>Handle duplicates based on whether the BST places them in the left or right subtree.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Coding",
        "Algorithms"
      ],
      "keyPoints": [
        "In-order traversal should be sorted.",
        "Recursive min/max validation works in O(n).",
        "Define duplicate placement."
      ]
    },
    {
      "question": "Write a function to remove duplicate characters from a String in Java.",
      "answer": "<ol>\n      <li>Use a &lt;code&gt;LinkedHashSet</code> to preserve insertion order while removing duplicates.</li>\n      <li>Alternatively use a &lt;code&gt;boolean[128]</code> or &lt;code&gt;HashSet</code> and a &lt;code&gt;StringBuilder</code> to build the result.</li>\n      <li>Loop through the string once and append characters that have not been seen.</li>\n      <li>The approach is &lt;code&gt;O(n)</code> time and &lt;code&gt;O(k)</code> space where &lt;code&gt;k</code> is the character set size.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Coding",
        "Algorithms"
      ],
      "keyPoints": [
        "LinkedHashSet preserves order.",
        "Track seen characters with a set.",
        "O(n) time and StringBuilder for result."
      ]
    },
    {
      "question": "What is the difference between PATH and Classpath in Java?",
      "answer": "<ol>\n      <li>&lt;code&gt;PATH</code> is an operating system environment variable used to locate executable programs such as &lt;code&gt;java</code> and &lt;code&gt;javac</code>.</li>\n      <li>&lt;code&gt;Classpath</code> tells the JVM where to find compiled classes, packages, and resource files.</li>\n      <li>Set the classpath with the &lt;code&gt;-cp</code> or &lt;code&gt;-classpath</code> flag, or with the &lt;code&gt;CLASSPATH</code> environment variable.</li>\n      <li>Classpath entries are usually directories or JAR files.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "PATH locates OS executables.",
        "Classpath locates Java classes and JARs.",
        "Set with -cp or CLASSPATH."
      ]
    },
    {
      "question": "What is the difference between StringBuilder and StringBuffer in Java? Which one is preferred?",
      "answer": "<ol>\n      <li>&lt;code&gt;StringBuilder</code> is mutable and not synchronized, making it faster for single-threaded use.</li>\n      <li>&lt;code&gt;StringBuffer</code> is mutable and synchronized, making it thread-safe but slower.</li>\n      <li>Prefer &lt;code&gt;StringBuilder</code> unless the object is shared across threads.</li>\n      <li>Both are preferable to &lt;code&gt;String</code> for repeated modifications.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "StringBuilder is faster and unsynchronized.",
        "StringBuffer is thread-safe and synchronized.",
        "Prefer StringBuilder unless shared."
      ]
    },
    {
      "question": "Explain the Template Method Design Pattern with a file processing example (XML, JSON, CSV).",
      "answer": "<ol>\n      <li>The Template Method pattern defines the skeleton of an algorithm in a base class and lets subclasses override specific steps.</li>\n      <li>For file processing the base class might define &lt;code&gt;open</code>, &lt;code&gt;read</code>, &lt;code&gt;process</code>, and &lt;code&gt;close</code> in a fixed sequence.</li>\n      <li>Concrete subclasses implement &lt;code&gt;processRecord()</code> for XML, JSON, or CSV formats.</li>\n      <li>This follows the Hollywood principle: \"don't call us, we'll call you.\"</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Design Patterns"
      ],
      "keyPoints": [
        "Algorithm skeleton in base class.",
        "Subclasses override specific steps.",
        "Hollywood principle."
      ]
    },
    {
      "question": "Explain G1 GC, ZGC, and Shenandoah. When would you choose each?",
      "answer": "<ol>\n      <li><strong>G1 GC</strong> is the default collector since Java 9. It divides the heap into equal-sized regions and runs mostly concurrently, with short stop-the-world pauses for the evacuation phase. It balances throughput and latency and works well for heaps up to a few hundred GB.</li>\n      <li><strong>ZGC</strong> is a scalable, low-latency collector that aims for sub-millisecond pauses regardless of heap size (multi-GB to multi-TB). It uses colored pointers and load barriers to do most work concurrently. Choose ZGC when you need very predictable low pauses, e.g. trading or interactive services.</li>\n      <li><strong>Shenandoah</strong> is a Red Hat-led concurrent collector that compacts the heap while the application runs, similar goals to ZGC. It uses Brooks pointers and is the default on some Linux distributions. Choose Shenandoah when you want low pauses and run on OpenJDK distributions that ship it.</li>\n      <li>Pick <strong>G1</strong> for general-purpose workloads where pause times under ~100ms are acceptable. Pick <strong>ZGC</strong> or <strong>Shenandoah</strong> when strict pause-time SLAs dominate throughput requirements.</li>\n      <li>Enable with <code>-XX:+UseG1GC</code>, <code>-XX:+UseZGC</code>, or <code>-XX:+UseShenandoahGC</code>.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "GC"
      ],
      "keyPoints": [
        "G1 is the default, balanced throughput/latency collector.",
        "ZGC and Shenandoah aim for sub-millisecond concurrent pauses.",
        "Choose ZGC/Shenandoah for strict latency SLAs, G1 for general use."
      ]
    },
    {
      "question": "What happens internally when a Full GC occurs?",
      "answer": "<ol>\n      <li>A Full GC reclaims memory across the entire heap: young, old, and sometimes metaspace. It is typically a stop-the-world event, so all application threads pause.</li>\n      <li>Common <strong>triggers</strong> are an explicit <code>System.gc()</code> call, allocation failure in the old generation, promotion failure (no space to move objects from young to old), or concurrent mode failure in CMS.</li>\n      <li>The collector traverses live object graphs, marks reachable objects, sweeps unreachable ones, and compacts the old generation to reduce fragmentation. Metaspace is also collected if classloaders become unreachable.</li>\n      <li>Full GC pauses can be hundreds of milliseconds to many seconds, harming tail latency. The JVM may even fall back to single-threaded collection if the heap is large.</li>\n      <li><strong>How to avoid it</strong>: size the heap correctly, tune G1/ZGC regions, fix memory leaks, reduce object allocation rate, avoid <code>System.gc()</code>, and monitor GC logs to detect promotion failures early.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "GC"
      ],
      "keyPoints": [
        "Stop-the-world collection across the whole heap.",
        "Triggered by System.gc, allocation/promotion failure, CMS concurrent mode failure.",
        "Can pause for seconds; tune heap and fix leaks to avoid."
      ]
    },
    {
      "question": "Explain the Java Memory Model (JMM).",
      "answer": "<ol>\n      <li>The JMM defines how threads interact through memory and what guarantees the JVM makes about visibility, ordering, and atomicity of reads and writes.</li>\n      <li>It introduces the <strong>happens-before</strong> relationship: if action A happens-before B, then the result of A is visible to B. Without happens-before, the JVM is free to reorder operations and keep values in CPU caches or registers.</li>\n      <li><strong>Volatile</strong> writes establish a happens-before edge with subsequent reads of the same variable and prevent certain reorderings; <strong>synchronized</strong> blocks release/acquire the monitor, also creating happens-before edges.</li>\n      <li>Other happens-before sources: <code>Thread.start()</code>, <code>Thread.join()</code>, <code>final</code> field semantics (a properly constructed object's final fields are visible after the constructor finishes), and atomic/CAS operations in <code>java.util.concurrent</code>.</li>\n      <li>Memory <strong>barriers</strong> (LoadLoad, StoreStore, LoadStore, StoreLoad) are the CPU-level instructions the JVM inserts to enforce these rules.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency",
        "JMM"
      ],
      "keyPoints": [
        "Happens-before defines visibility and ordering between threads.",
        "volatile and synchronized establish happens-before edges.",
        "Final fields are safely published after construction."
      ]
    },
    {
      "question": "What causes thread starvation and deadlocks?",
      "answer": "<ol>\n      <li><strong>Thread starvation</strong> happens when a thread is ready to run but never gets CPU time. Causes: low thread priority, fairness issues in locks (e.g. <code>ReentrantLock(fair=false)</code>), long-running threads holding the CPU, or threads blocked on I/O while others monopolize cores.</li>\n      <li><strong>Deadlock</strong> occurs with a circular lock dependency: thread A holds lock 1 and waits for lock 2, while thread B holds lock 2 and waits for lock 1. The JVM cannot resolve this; both threads wait forever.</li>\n      <li>Other liveness issues: <strong>livelock</strong> (threads keep responding to each other without progress) and <strong>priority inversion</strong> (a low-priority thread holds a lock that a high-priority thread needs).</li>\n      <li><strong>Detection</strong>: use <code>jstack &lt;pid&gt;</code> or <code>jcmd &lt;pid&gt; Thread.print</code> to capture stack traces; Java Flight Recorder (JFR) can record deadlock events; IDE tools like JConsole/VisualVM highlight deadlocked threads.</li>\n      <li><strong>Prevention</strong>: enforce consistent global lock ordering, use <code>tryLock</code> with timeouts, prefer higher-level concurrency utilities (<code>ConcurrentHashMap</code>, <code>CompletableFuture</code>), and detect cycles with <code>ThreadMXBean.findDeadlockedThreads()</code> in tests.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Starvation: thread never gets CPU time.",
        "Deadlock: circular wait on locks.",
        "Detect with jstack/JFR; prevent with lock ordering and tryLock timeouts."
      ]
    },
    {
      "question": "What is False Sharing and how can it impact performance?",
      "answer": "<ol>\n      <li>CPUs load memory in <strong>cache lines</strong> (typically 64 bytes). If two unrelated variables used by different threads sit on the same cache line, writing one invalidates the other's cache line, causing expensive coherence traffic. This is <strong>false sharing</strong> - the data is not actually shared, but the cache line is.</li>\n      <li>It can silently destroy scalability of multi-threaded code: more cores, more slowdown. Classic example is a counter class with two adjacent <code>long</code> fields that are incremented by different threads.</li>\n      <li>Padding fields (e.g. <code>long p1, p2, p3, p4, p5, p6, p7;</code>) or extending superclasses with unused longs is a manual fix.</li>\n      <li>Java 8+ provides <code>@jdk.internal.vm.annotation.Contended</code> (and <code>@Contended</code> in popular libraries like Disruptor/LMAX). On JDK 8, run with <code>-XX:-RestrictContended</code>; on JDK 9+ the restriction is removed.</li>\n      <li>Use it sparingly because padding wastes memory. Profile first with <code>perf c2c</code> or async-profiler to confirm the problem.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency",
        "JVM"
      ],
      "keyPoints": [
        "Independent variables on the same cache line invalidate each other.",
        "Hurts scalability on multi-core CPUs.",
        "@Contended or manual padding isolates fields to separate cache lines."
      ]
    },
    {
      "question": "How would you profile a production JVM?",
      "answer": "<ol>\n      <li><strong>Java Flight Recorder (JFR)</strong> is the recommended built-in profiler. Enable with <code>-XX:StartFlightRecording=duration=60s,filename=app.jfr</code> or <code>jcmd &lt;pid&gt; JFR.start</code>. It has very low overhead (&lt;1%) and is safe in production.</li>\n      <li>Analyze JFR recordings with <strong>JDK Mission Control (JMC)</strong> for allocations, GC pauses, lock contention, exceptions, and CPU hotspots.</li>\n      <li><strong>async-profiler</strong> produces sampling flame graphs for CPU, allocations, and lock contention. It uses perf/eBPF on Linux and integrates with JFR. Useful for ad-hoc sampling in production.</li>\n      <li>Capture <strong>heap dumps</strong> with <code>jmap -dump:format=b,file=heap.hprof &lt;pid&gt;</code> or <code>jcmd &lt;pid&gt; GC.heap_dump</code>. Analyze in Eclipse MAT for leak suspects and retained sizes.</li>\n      <li>Enable detailed <strong>GC logs</strong> with <code>-Xlog:gc*:file=gc.log:time,uptime,level,tags</code> and feed them into GCViewer or Censum.</li>\n      <li>Prefer <strong>sampling</strong> (low overhead) over instrumentation. Always profile on production-like hardware and traffic.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Performance"
      ],
      "keyPoints": [
        "JFR + JMC is the standard safe-for-production profiler.",
        "async-profiler gives flame graphs for CPU/allocation/locks.",
        "Heap dumps with jmap/jcmd, analyzed in MAT."
      ]
    },
    {
      "question": "How does CompletableFuture work internally?",
      "answer": "<ol>\n      <li><code>CompletableFuture</code> implements <code>Future</code> and <code>CompletionStage</code>. Internally it tracks dependent stages and a thread waiting on the result via a <code>WaitNode</code> stack and a result plus a status (NORMAL, EXCEPTIONAL, CANCELLED, INTERRUPTED).</li>\n      <li>Methods like <code>thenApply</code>, <code>thenCompose</code>, <code>thenAccept</code>, and <code>thenRun</code> return a new <code>CompletableFuture</code> that completes when the source stage completes and the function runs.</li>\n      <li><strong>Non-async</strong> variants (e.g. <code>thenApply</code>) may run the function in the thread that completed the previous stage. <strong>Async</strong> variants (e.g. <code>thenApplyAsync</code>) run it in the supplied executor, or the common <code>ForkJoinPool</code> by default.</li>\n      <li><code>exceptionally</code> recovers from a failed stage, <code>handle</code> runs whether the stage succeeded or failed, and <code>whenComplete</code> observes but does not transform the result.</li>\n      <li><code>allOf</code> and <code>anyOf</code> compose multiple futures; <code>allOf</code> returns a future that completes when all inputs complete, and its result is <code>Void</code> (read each input individually).</li>\n      <li>Be aware: blocking on <code>join()</code>/<code>get()</code> from a common-pool thread can starve the pool. Configure the pool size with <code>-Djava.util.concurrent.ForkJoinPool.common.parallelism=N</code> for I/O-heavy workloads.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Concurrency",
        "Java 8+"
      ],
      "keyPoints": [
        "Implements Future and CompletionStage with stack of waiters.",
        "Async variants use ForkJoinPool.commonPool() by default.",
        "exceptionally/handle/whenComplete control error propagation."
      ]
    },
    {
      "question": "Explain Try-With-Resources with a practical example.",
      "answer": "<ol>\n      <li>Try-with-resources automatically closes any resource that implements <code>java.lang.AutoCloseable</code> when the block exits, whether normally or by exception.</li>\n      <li>Resources are declared in the try header and closed in <strong>reverse order of declaration</strong>, so later resources close first - useful when one resource depends on another.</li>\n      <li>If the try block throws and <code>close()</code> also throws, the try-block exception is the primary one and the close exception is added via <code>addSuppressed()</code> so you don't lose the original cause.</li>\n      <li>Practical example with files and database connections:\n        <pre><code>try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\");\n     Connection con = DriverManager.getConnection(url, user, pwd)) {\n    String line;\n    while ((line = br.readLine()) != null) { process(line); }\n} catch (IOException | SQLException e) { log.error(e); }\n// br and con are both closed automatically, even on exception</code></pre>\n      </li>\n      <li>Prefer it over manual <code>try/finally</code> - it's shorter, safer, and handles suppressed exceptions correctly.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java",
        "Exception Handling"
      ],
      "keyPoints": [
        "AutoCloseable resources closed automatically in reverse order.",
        "Close() exceptions are suppressed if the try block also throws.",
        "Use it for files, sockets, JDBC connections."
      ]
    },
    {
      "question": "How does AutoCloseable work internally?",
      "answer": "<ol>\n      <li><code>AutoCloseable</code> defines a single method: <code>void close() throws Exception</code>. Anything implementing it can be used in try-with-resources.</li>\n      <li>Try-with-resources is desugared by the compiler into a <code>try/finally</code> block: in the finally, each resource is closed in reverse declaration order, with <code>addSuppressed()</code> called on the primary exception if <code>close()</code> also throws.</li>\n      <li><code>Closeable</code> extends <code>AutoCloseable</code> and tightens <code>close()</code> to throw <code>IOException</code> only - it's the historical interface for I/O resources.</li>\n      <li>Implementations should be idempotent (safe to call <code>close()</code> multiple times) and tolerant of being called after the resource is already closed.</li>\n      <li>You can implement your own: e.g. a custom <code>Lock</code> wrapper that releases the lock in <code>close()</code> for use in try-with-resources as a structured scope.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Core Java",
        "Exception Handling"
      ],
      "keyPoints": [
        "Single close() method that throws Exception.",
        "Compiler desugars try-with-resources into try/finally.",
        "Closeable tightens close() to throw IOException only."
      ]
    },
    {
      "question": "What is a Memory Leak in Java and what are the common causes?",
      "answer": "<ol>\n      <li>A Java memory leak is an object that the application no longer needs but is still reachable through GC roots, so the garbage collector cannot reclaim it. The heap grows over time until <code>OutOfMemoryError</code>.</li>\n      <li>Common <strong>causes</strong>:\n        <ul>\n          <li>Static collections that grow forever (e.g. <code>public static Map&lt;K,V&gt; cache = new HashMap&lt;&gt;();</code> with no eviction).</li>\n          <li>Unclosed resources: files, sockets, JDBC connections, streams held in long-lived fields.</li>\n          <li>ThreadLocal misuse: large objects stored in <code>ThreadLocal</code> on pooled threads are never cleaned up.</li>\n          <li>Non-static inner classes (or anonymous classes) that implicitly hold the outer class reference, keeping it alive longer than expected.</li>\n          <li>Listeners and callbacks registered on long-lived objects without de-registration.</li>\n          <li>Caches without eviction (use <code>Caffeine</code> with size/time limits).</li>\n          <li>Custom classloaders in app servers that prevent classes/metaspace from being GC'd.</li>\n        </ul>\n      </li>\n      <li>Use weak/soft references (e.g. <code>WeakHashMap</code>, <code>WeakReference</code>) where appropriate, but be careful - they can be cleared at any time.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "JVM",
        "Memory Management"
      ],
      "keyPoints": [
        "Unreachable-yet-rooted objects that the GC cannot collect.",
        "Common causes: static collections, unclosed resources, ThreadLocal, caches.",
        "Use weak references and bounded caches to mitigate."
      ]
    },
    {
      "question": "How do you identify Memory Leaks in production?",
      "answer": "<ol>\n      <li>Watch the <strong>old generation occupancy</strong> trend in GC logs or JFR. A sawtooth that climbs to a higher baseline after each Full GC, or steady growth without recovery, is a strong signal of a leak.</li>\n      <li>Capture a <strong>heap dump</strong> with <code>jmap -dump:format=b,file=heap.hprof &lt;pid&gt;</code> or <code>jcmd &lt;pid&gt; GC.heap_dump &lt;file&gt;</code>. Do it on OutOfMemoryError with <code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/</code>.</li>\n      <li>Analyze the dump in <strong>Eclipse MAT</strong> (or VisualVM) using the Leak Suspects report and dominator tree to find objects retaining the most memory.</li>\n      <li>Enable <strong>GC logging</strong> with <code>-Xlog:gc*:file=gc.log:time</code> and look for full GCs that don't reduce heap usage.</li>\n      <li>Use <strong>JFR</strong> with allocation profiling enabled (<code>jfr.configure --jdk.OldObjectSample</code>) to see where long-lived objects are being allocated.</li>\n      <li>Compare two heap dumps taken minutes apart using MAT's histogram comparison to identify which classes are growing.</li>\n      <li>Monitor <code>java.lang:type=Memory</code> MBeans in JConsole/VisualVM, and alert when used heap crosses thresholds.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Memory Management",
        "Performance"
      ],
      "keyPoints": [
        "Heap dumps with jmap/jcmd on OOM with -XX:+HeapDumpOnOutOfMemoryError.",
        "Eclipse MAT for Leak Suspects and dominator analysis.",
        "GC logs and JFR allocation profiling to confirm growth."
      ]
    },
    {
      "question": "What tools have you used for Memory Leak analysis?",
      "answer": "<ol>\n      <li><strong>Eclipse MAT (Memory Analyzer Tool)</strong> - the gold standard for heap dump analysis. Leak Suspects, dominator tree, retained sizes, path-to-GC-roots.</li>\n      <li><strong>VisualVM</strong> - free, bundled with the JDK (until JDK 9). Heap dump viewing, sampler, and MBean browser. Good for ad-hoc analysis.</li>\n      <li><strong>JFR + JDK Mission Control (JMC)</strong> - low-overhead production profiling. Use the Old Object Sample event to find long-lived allocations.</li>\n      <li><strong>jmap / jcmd</strong> - capture heap dumps and stats from the command line. <code>jcmd &lt;pid&gt; GC.heap_dump</code> is the modern equivalent of <code>jmap -dump</code>.</li>\n      <li><strong>async-profiler</strong> - allocation profiling flame graphs to see where objects are being allocated hot.</li>\n      <li>Commercial tools: <strong>YourKit</strong> and <strong>JProfiler</strong> - excellent UI, integrated sampling, memory views, and CPU profiling in one tool. Useful when budgets allow.</li>\n      <li><strong>HeapHero</strong> and <strong>JXRay</strong> - online/offline heap dump analyzers, handy for quick reads without installing MAT.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Memory Management",
        "Tools"
      ],
      "keyPoints": [
        "Eclipse MAT for deep heap dump analysis.",
        "JFR/JMC for low-overhead production profiling.",
        "YourKit/JProfiler for commercial all-in-one profilers."
      ]
    },
    {
      "question": "Difference between Heap Dump and Thread Dump.",
      "answer": "<ol>\n      <li>A <strong>heap dump</strong> is a snapshot of the entire JVM heap at a point in time: every live object, its class, fields, references, and shallow/retained sizes. Use it to investigate memory leaks, large allocations, and OOM.</li>\n      <li>A <strong>thread dump</strong> is a snapshot of every thread's state: stack trace, current method, held monitors, blocked-on locks, thread state (RUNNABLE, BLOCKED, WAITING). Use it to investigate deadlocks, hangs, contention, and infinite loops.</li>\n      <li><strong>Format</strong>: heap dumps are binary (HPROF, often large - hundreds of MB to GB). Thread dumps are plain text, one section per thread, easy to grep.</li>\n      <li><strong>Capture</strong>:\n        <ul>\n          <li>Heap: <code>jmap -dump:format=b,file=heap.hprof &lt;pid&gt;</code> or <code>jcmd &lt;pid&gt; GC.heap_dump heap.hprof</code>.</li>\n          <li>Thread: <code>jstack &lt;pid&gt;</code> or <code>jcmd &lt;pid&gt; Thread.print</code> (or <code>kill -3 &lt;pid&gt;</code> to print to the JVM's stdout).</li>\n        </ul>\n      </li>\n      <li>They are <strong>complementary</strong>: for a slow app, capture both. Heap shows what is in memory, thread shows what the app is doing.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "JVM",
        "Performance"
      ],
      "keyPoints": [
        "Heap dump: snapshot of all live objects, used for memory leaks.",
        "Thread dump: snapshot of all thread stacks, used for hangs and deadlocks.",
        "Complementary views; capture both when triaging a slowdown."
      ]
    },
    {
      "question": "Is Spring Singleton Bean Scope thread-safe? Explain with examples.",
      "answer": "<ol>\n      <li>Spring's default scope is <strong>singleton</strong> - one shared instance per Spring IoC container. It is <strong>not</strong> thread-safe by default: the same instance is reused across all threads.</li>\n      <li>If the bean holds mutable state (fields), concurrent requests can race on those fields. Example:\n        <pre><code>@Service\npublic class CounterService {\n    private int count = 0;  // shared, not thread-safe\n    public int increment() { return ++count; }\n}</code></pre>\n      </li>\n      <li>Two threads calling <code>increment()</code> can produce lost updates because <code>++</code> is read-modify-write and not atomic.</li>\n      <li>Safe patterns:\n        <ul>\n          <li>Keep beans <strong>stateless</strong> - methods take parameters and return values, no instance fields.</li>\n          <li>Use <code>AtomicInteger</code>, <code>AtomicLong</code>, or <code>ConcurrentHashMap</code> for shared counters/maps.</li>\n          <li>Use <code>ThreadLocal</code> for per-request state (e.g. security context, transaction-bound objects).</li>\n          <li>Synchronize critical sections with <code>synchronized</code> or <code>ReentrantLock</code>.</li>\n          <li>Switch to <strong>prototype</strong> scope or request/session scope for stateful beans when needed.</li>\n        </ul>\n      </li>\n      <li>Rule of thumb: stateless singletons are inherently thread-safe; if state is required, treat it with the same care as any shared Java object.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Spring Boot"
      ],
      "keyPoints": [
        "Default singleton scope is one shared instance - not thread-safe by default.",
        "Keep beans stateless; use atomic vars, ThreadLocal, or concurrent collections for state.",
        "Use prototype/request scope for genuinely stateful beans."
      ]
    },
    {
      "question": "What is the difference between the final keyword and a final variable?",
      "answer": "<ol>\n      <li><strong>final variable</strong>: a variable whose value cannot be reassigned after initialization (must be definitely assigned exactly once).</li>\n      <li><strong>final method</strong>: a method that cannot be overridden by subclasses.</li>\n      <li><strong>final class</strong>: a class that cannot be extended (e.g., <code>String</code>, <code>Integer</code> wrappers).</li>\n      <li><strong>finally</strong> is a block used with try/catch that always executes, used for cleanup.</li>\n      <li><strong>finalize()</strong> was a method on <code>Object</code> called by the GC before reclamation; deprecated since Java 9.</li>\n      <li>final is for immutability / restriction; finally is for cleanup; finalize was for GC hooks.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Core Java"
      ],
      "keyPoints": [
        "final variable = value cannot be reassigned.",
        "final method = cannot be overridden; final class = cannot be extended.",
        "final != finally (cleanup block) != finalize (deprecated GC hook)."
      ]
    },
    {
      "question": "How do you debug and fix OutOfMemoryError in Java?",
      "answer": "<ol>\n      <li>Identify the OOM type from the message: <code>Java heap space</code>, <code>Metaspace</code>, <code>GC overhead limit exceeded</code>, <code>PermGen space</code> (older JVMs), or <code>unable to create new native thread</code>.</li>\n      <li>Capture a heap dump at the moment of failure: <code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/dump.hprof</code>.</li>\n      <li>Analyze the dump with Eclipse MAT, VisualVM, or JFR to find the largest object retainers and leak suspects.</li>\n      <li>Common leak sources: static collections that grow forever, unclosed resources (Connections, Streams), ThreadLocal entries never removed, listeners not unregistered, caches without eviction.</li>\n      <li>For Metaspace OOM, look for classloader leaks (web app redeploys, dynamic proxies).</li>\n      <li>Fix: remove the leak source. Only as a last resort, increase the heap: <code>-Xmx</code> for heap, <code>-XX:MaxMetaspaceSize</code> for metaspace.</li>\n      <li>Verify the fix with a load test that reproduces the original OOM.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "JVM",
        "Memory Management",
        "Troubleshooting"
      ],
      "keyPoints": [
        "Capture heap dump on OOM with -XX:+HeapDumpOnOutOfMemoryError.",
        "Analyze with MAT / VisualVM / JFR for leak suspects.",
        "Fix the leak before increasing -Xmx."
      ]
    },
    {
      "question": "What is the difference between volatile and synchronized in Java?",
      "answer": "<ol>\n      <li><strong>volatile</strong> guarantees <em>visibility</em>: every read goes to main memory and every write flushes to main memory, so threads see the latest value.</li>\n      <li><strong>synchronized</strong> guarantees both <em>visibility</em> AND <em>atomicity</em>: only one thread executes the block at a time, and all changes are visible on entry/exit.</li>\n      <li>volatile is NOT enough for compound operations like <code>count++</code> (read-modify-write is still racy).</li>\n      <li>synchronized is heavier: it can block, may cause context switches, and supports wait/notify.</li>\n      <li>Use <strong>volatile</strong> for simple flags, one-time publication, or when writes do not depend on the current value.</li>\n      <li>Use <strong>synchronized</strong> (or <code>AtomicInteger</code> / <code>ReentrantLock</code>) when multiple steps must happen atomically.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "volatile = visibility only; synchronized = visibility + atomicity.",
        "volatile does not make count++ atomic.",
        "Prefer AtomicXxx classes or ReentrantLock for compound ops."
      ]
    },
    {
      "question": "How do you avoid performance issues caused by synchronization?",
      "answer": "<ol>\n      <li>Use <code>ConcurrentHashMap</code> instead of <code>Collections.synchronizedMap(HashMap)</code> for fine-grained locking per bucket.</li>\n      <li>Use atomic variables (<code>AtomicInteger</code>, <code>AtomicLong</code>, <code>LongAdder</code>) instead of <code>synchronized</code> counters.</li>\n      <li>Use <code>ReadWriteLock</code> (or <code>StampedLock</code>) for read-heavy workloads so reads do not block each other.</li>\n      <li>Use <code>ConcurrentHashMap</code> stripe-based locking or Guava's <code>Striped</code> for lock striping across many locks.</li>\n      <li>Use <code>CopyOnWriteArrayList</code> for read-mostly lists where iteration outnumbers mutation.</li>\n      <li>Prefer <strong>immutable objects</strong> - they are inherently thread-safe and shareable without locks.</li>\n      <li>Use <code>ThreadLocal</code> for per-thread state to avoid sharing.</li>\n      <li>Keep synchronized blocks as short as possible - lock only the critical section, not the whole method.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency",
        "Performance"
      ],
      "keyPoints": [
        "Prefer ConcurrentHashMap, atomic vars, and immutable objects.",
        "Use ReadWriteLock for read-heavy paths; CopyOnWriteArrayList for read-mostly lists.",
        "Keep synchronized blocks short."
      ]
    },
    {
      "question": "What is ThreadLocal and where is it used in real applications?",
      "answer": "<ol>\n      <li><code>ThreadLocal</code> provides thread-local storage: each thread sees its own independent copy of the variable, so no synchronization is needed.</li>\n      <li>Real-world uses: per-thread <code>SimpleDateFormat</code> (not thread-safe), per-request <code>UserPrincipal</code> / security context, MDC values for logging, JDBC connection-per-thread in some frameworks, request-scoped Spring beans.</li>\n      <li>API: <code>threadLocal.set(value)</code>, <code>threadLocal.get()</code>, <code>threadLocal.remove()</code>.</li>\n      <li>Use <code>withInitial(Supplier)</code> to provide a default value computed lazily per thread.</li>\n      <li><strong>Memory-leak risk:</strong> in pooled threads (e.g., a thread pool in a web server), the value lives as long as the thread, holding references. Always call <code>remove()</code> in a <code>finally</code> block when the request ends.</li>\n      <li>Prefer scoped alternatives (request scope, <code>ScopedValue</code> in Java 21+) when possible to avoid the leak risk.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "Each thread gets its own copy; no synchronization needed.",
        "Common for SimpleDateFormat, security context, request-scoped data.",
        "Always call remove() in finally to avoid leaks in pooled threads."
      ]
    },
    {
      "question": "What are different ways to ensure thread safety in Java?",
      "answer": "<ol>\n      <li><code>synchronized</code> methods or blocks - intrinsic monitor lock.</li>\n      <li><code>volatile</code> variables for visibility of single writes/reads.</li>\n      <li>Atomic variables from <code>java.util.concurrent.atomic</code> - <code>AtomicInteger</code>, <code>AtomicLong</code>, <code>AtomicReference</code>, <code>LongAdder</code>.</li>\n      <li>Concurrent collections - <code>ConcurrentHashMap</code>, <code>ConcurrentLinkedQueue</code>, <code>CopyOnWriteArrayList</code>.</li>\n      <li>Immutable objects (final fields, no setters) - inherently thread-safe.</li>\n      <li><code>ThreadLocal</code> for per-thread state.</li>\n      <li>Explicit locks - <code>ReentrantLock</code>, <code>ReadWriteLock</code>, <code>StampedLock</code>.</li>\n      <li>Parallel streams with stateless lambdas (no shared mutable state).</li>\n      <li>Higher-level coordination: <code>CountDownLatch</code>, <code>CyclicBarrier</code>, <code>Phaser</code>, <code>Semaphore</code>, <code>CompletableFuture</code>.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Multithreading",
        "Concurrency"
      ],
      "keyPoints": [
        "synchronized / volatile / atomic / concurrent collections / immutable / ThreadLocal.",
        "Locks (ReentrantLock, ReadWriteLock) for finer control.",
        "Stateless parallel streams are inherently thread-safe."
      ]
    },
    {
      "question": "What changes did you make when migrating from Java 7 to Java 8?",
      "answer": "<ol>\n      <li><strong>Lambda expressions</strong> - <code>(a, b) -&gt; a + b</code> replaced anonymous inner classes for functional interfaces.</li>\n      <li><strong>Stream API</strong> - <code>filter</code>, <code>map</code>, <code>reduce</code>, <code>collect</code> for collection pipelines; <code>parallelStream()</code> for parallelism.</li>\n      <li><strong>Optional</strong> - <code>Optional&lt;T&gt;</code> to model nullable values and avoid <code>null</code> checks.</li>\n      <li><strong>Default methods</strong> on interfaces - interface methods with a body, enabling API evolution without breaking implementers.</li>\n      <li><strong>Functional interfaces</strong> - <code>Function</code>, <code>Predicate</code>, <code>Supplier</code>, <code>Consumer</code> in <code>java.util.function</code>.</li>\n      <li><strong>Method references</strong> - <code>String::length</code> as a shorthand for lambdas.</li>\n      <li><strong>New Date/Time API</strong> (<code>java.time</code>) - immutable, thread-safe <code>LocalDate</code>, <code>LocalDateTime</code>, <code>ZonedDateTime</code>; replaced <code>java.util.Date</code> and <code>Calendar</code>.</li>\n      <li><strong>Nashorn</strong> JavaScript engine (later removed in Java 15).</li>\n      <li><strong>Type annotations</strong> - annotations can be applied to any use of a type (e.g., <code>List&lt;@NonNull String&gt;</code>).</li>\n      <li><strong>CompletableFuture</strong> and improvements to <code>java.util.concurrent</code>.</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Java 8",
        "Modern Java"
      ],
      "keyPoints": [
        "Lambdas, Streams, Optional, default methods, functional interfaces.",
        "java.time replaces Date/Calendar.",
        "Method references and type annotations complete the upgrade."
      ]
    },
    {
      "question": "What is the load factor in HashMap and what does the default 0.75 mean?",
      "answer": "<ol>\n      <li><strong>Load factor</strong> = the ratio of the number of entries to the current capacity at which the HashMap will resize (double its bucket array).</li>\n      <li>Default load factor is <code>0.75f</code>: resize happens when entries exceed <code>capacity * 0.75</code> (e.g., 12 entries for default capacity 16).</li>\n      <li>0.75 is a balance: lower load factor = fewer collisions and faster lookups but more memory; higher load factor = less memory but more collisions and slower lookups.</li>\n      <li>Trade-offs: too high (e.g., 0.9) -&gt; many collisions, longer chains, O(n) lookups in the worst case. Too low (e.g., 0.5) -&gt; frequent resizing and wasted buckets.</li>\n      <li>Initial capacity can be tuned to avoid resizing: <code>new HashMap&lt;&gt;(expectedSize / 2 * 3)</code> or use Guava's <code>Maps.newHashMapWithExpectedSize</code>.</li>\n      <li>After Java 8, when a bucket has 8+ entries, the linked list is converted to a balanced red-black tree so worst-case lookup becomes O(log n).</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Collections"
      ],
      "keyPoints": [
        "Load factor 0.75 = resize at 75% full, balancing time and space.",
        "Higher load = more collisions; lower = wasted memory.",
        "Java 8+ converts long buckets to red-black trees for O(log n) lookup."
      ]
    },
    {
      "question": "How do you verify a method is called twice in Mockito?",
      "answer": "<ol>\n      <li>Use <code>verify(mock, times(2)).methodCall()</code> to assert the method was invoked exactly twice.</li>\n      <li>Other verification modes: <code>times(1)</code> (default), <code>never()</code>, <code>atLeast(n)</code>, <code>atMost(n)</code>, <code>atLeastOnce()</code>.</li>\n      <li>For argument matching, combine with matchers: <code>verify(mock, times(2)).save(any(User.class))</code>.</li>\n      <li>Capture arguments: <code>ArgumentCaptor</code> to inspect what was passed in.</li>\n      <li>Use <code>InOrder</code> to verify the call order of multiple methods.</li>\n      <li>Use <code>verifyNoMoreInteractions(mock)</code> to assert no other methods were called.</li>\n      <li>Verification is for <em>interaction behavior</em> - did the SUT collaborate correctly? Not for return values (use stubs/asserts for that).</li>\n    </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Java",
        "Testing",
        "Mockito"
      ],
      "keyPoints": [
        "verify(mock, times(2)).method() for exact invocation count.",
        "Other modes: never(), atLeast(), atMost(), atLeastOnce().",
        "Use InOrder / ArgumentCaptor for order and argument inspection."
      ]
    },
    {
      "question": "In which situations do you use PowerMock?",
      "answer": "<ol>\n      <li>PowerMock extends Mockito (or EasyMock) to mock things Mockito cannot: <strong>static methods</strong>, <strong>private methods</strong>, <strong>constructors</strong>, and <strong>final classes / final methods</strong>.</li>\n      <li>Common with legacy code where you cannot refactor the class under test (e.g., a static <code>UUID.randomUUID()</code> call deep inside production code).</li>\n      <li>Also used for mocking <code>System.currentTimeMillis()</code> or environment calls in unit tests.</li>\n      <li>Downsides: tightly coupled to implementation details, slow (uses bytecode manipulation), fragile across JDK upgrades.</li>\n      <li>Limited support in JUnit 5 / modern Mockito - <code>mockito-inline</code> (since 3.4) can mock statics and final classes natively, making PowerMock largely unnecessary.</li>\n      <li>Best practice: prefer <strong>refactoring</strong> the code to be testable (extract a method, inject a clock, replace statics) over using PowerMock.</li>\n    </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Java",
        "Testing",
        "Mockito",
        "PowerMock"
      ],
      "keyPoints": [
        "Use only when Mockito cannot help: statics, private, constructors, finals.",
        "Slow, brittle, not JUnit 5 friendly - prefer mockito-inline or refactoring.",
        "Best practice: refactor for testability over reaching for PowerMock."
      ]
    },
    {
      "question": "What is a Maven build and what does mvn clean install do?",
      "answer": "<ol>\n      <li><strong>Maven</strong> is a build automation and dependency-management tool for Java, based on a Project Object Model (<code>pom.xml</code>).</li>\n      <li>Maven build lifecycle phases (main ones): <code>validate</code> -&gt; <code>compile</code> -&gt; <code>test</code> -&gt; <code>package</code> -&gt; <code>verify</code> -&gt; <code>install</code> -&gt; <code>deploy</code>.</li>\n      <li><strong>clean</strong> - removes the <code>target/</code> directory from the previous build.</li>\n      <li><strong>compile</strong> - compiles <code>src/main/java</code> into <code>target/classes</code>.</li>\n      <li><strong>test-compile</strong> - compiles <code>src/test/java</code>.</li>\n      <li><strong>test</strong> - runs unit tests (Surefire plugin) using the compiled test classes.</li>\n      <li><strong>package</strong> - bundles compiled code into a JAR, WAR, or EAR in <code>target/</code>.</li>\n      <li><strong>install</strong> - copies the built artifact into the local Maven repository (<code>~/.m2/repository</code>) so other local projects can depend on it.</li>\n      <li><strong>deploy</strong> - uploads the artifact to a remote repository (e.g., Nexus, Artifactory) for sharing with other developers.</li>\n      <li>So <code>mvn clean install</code> = clean + (validate -&gt; compile -&gt; test -&gt; package) + install the artifact locally.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Maven",
        "Build Tools"
      ],
      "keyPoints": [
        "clean removes target/; compile/test/package build the artifact.",
        "install copies the artifact into ~/.m2 for local use.",
        "deploy pushes to a shared remote repository."
      ]
    },
    {
      "question": "What is code coverage and line coverage?",
      "answer": "<ol>\n      <li><strong>Code coverage</strong> = the percentage of code executed by the test suite. It is a measure of <em>how much</em> of your code is being exercised, not how well.</li>\n      <li><strong>Line coverage</strong> = the percentage of source lines executed by tests.</li>\n      <li><strong>Branch coverage</strong> = the percentage of decision branches (if/else, switch, ternary) taken by tests.</li>\n      <li><strong>Method / class coverage</strong> = percentage of methods or classes that were called at least once.</li>\n      <li>Common tools: JaCoCo (default in many Maven/Gradle setups), Cobertura, Emma, Clover, Istanbul (JS).</li>\n      <li>High coverage does not mean high quality - 100% line coverage with no assertions is useless. Aim for high branch coverage + meaningful assertions.</li>\n      <li>Improve coverage by writing tests for uncovered branches: error paths, null inputs, edge cases, exception handlers.</li>\n      <li>Typical production targets: 70-80% line coverage with strong branch coverage on critical paths.</li>\n    </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Java",
        "Testing",
        "Code Coverage"
      ],
      "keyPoints": [
        "Coverage = % of code executed; line coverage = % of lines.",
        "Branch coverage is more meaningful than line coverage.",
        "Tools: JaCoCo, Cobertura. High coverage != high quality."
      ]
    }
  ]
};
