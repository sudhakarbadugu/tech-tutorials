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
    }
  ]
};
