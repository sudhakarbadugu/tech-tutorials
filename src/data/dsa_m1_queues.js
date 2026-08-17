// DSA Module 1: Queues topic (split from stacks-queues)
export const queuesTopic = {
  title: 'Queues',
  subtitle: 'First In, First Out — fair scheduling for tasks, messages, and traversals',
  sections: [
    // A — What is a Queue?
    {
      heading: 'What is a Queue?',
      text: 'A Queue is a linear data structure that follows the FIFO principle — First In, First Out. The first element added is the first element removed, exactly like a line of people waiting for tickets: whoever arrives first is served first, and newcomers join at the back of the line. This constraint sounds limiting, but it is precisely what makes queues powerful — they guarantee fairness and arrival-order processing, which is exactly what schedulers, message systems, and graph traversals need.',
      list: [
        '<strong>FIFO (First In, First Out):</strong> Like a ticket line at a cinema — the person who joined the line first gets their ticket first. Nobody cuts in; nobody is skipped.',
        '<strong>Front and Back:</strong> The queue has two distinct ends. Elements are added at the <em>back</em> (also called rear or tail) and removed from the <em>front</em> (also called head). Operations never touch the middle.',
        '<strong>Core operations:</strong> <code>enqueue</code> (add to back), <code>dequeue</code> (remove from front), <code>peek</code> (read the front without removing), <code>is_empty</code>, and <code>size</code>.',
        '<strong>Restricted access:</strong> You cannot index into a queue or remove from the middle. The structure deliberately hides everything except the two ends.',
        '<strong>Where queues appear:</strong> BFS (breadth-first search) explores a graph level by level using a queue; operating systems queue processes waiting for the CPU; web servers buffer incoming requests; message brokers like Kafka and RabbitMQ queue tasks between producers and consumers.'
      ]
    },
    // B — Queue Anatomy
    {
      heading: 'Queue Anatomy',
      text: 'A queue maintains two pointers: <strong>front</strong>, which tracks the oldest element (next to leave), and <strong>back</strong>, which tracks where the next element will be inserted. The key insight is that the two operations happen at <em>opposite ends</em> — enqueue touches only the back, dequeue touches only the front. Because neither operation ever needs to walk through the middle of the structure, both run in O(1) with the right implementation (a deque, a circular buffer, or a linked list with head and tail pointers).',
      diagram: {
        caption: 'A queue: dequeue exits at the front, enqueue enters at the back',
        chart: `flowchart LR
    OUT[Dequeue exits] -.-> F
    F[Front: 10] --> M[20] --> B[Back: 30]
    IN[Enqueue enters] -.-> B
    style F fill:#f1c40f,color:#000
    style B fill:#3498db,color:#fff`
      }
    },
    // C — Implementation Choices
    {
      heading: 'Implementation Choices',
      text: 'A queue is an abstract idea — FIFO order — that can be built on several concrete structures. The choice matters enormously: the wrong backing structure turns an O(1) operation into O(n). Here are the four options, from worst to most instructive.',
      list: [
        '<strong>Naive array list (the trap):</strong> In Python, using a plain <code>list</code> with <code>append()</code> for enqueue and <code>pop(0)</code> for dequeue looks natural but is a classic mistake. <code>list.pop(0)</code> is <strong>O(n)</strong> because Python must shift every remaining element one slot to the left. A loop that dequeues n items this way costs O(n²) total. Never do this in an interview.',
        '<strong>collections.deque / Java ArrayDeque (the right default):</strong> Python\'s <code>collections.deque</code> is implemented as a doubly-linked list of fixed-size blocks, so <code>popleft()</code> and <code>append()</code> are both O(1). In Java, use <code>ArrayDeque</code> (a resizable circular array) — never the legacy synchronized <code>Stack</code>/<code>Vector</code> classes, and prefer it over <code>LinkedList</code> for speed. This is what you reach for in real code and interviews.',
        '<strong>Circular buffer (fixed capacity):</strong> A plain array where the front and back indices wrap around to index 0 when they pass the last slot, computed with modulo: <code>index = (index + 1) % capacity</code>. Freed slots at the front are reused by new arrivals — no shifting, no wasted space, O(1) everything. This is how ring buffers in operating systems, audio streaming, and LeetCode 622 work.',
        '<strong>Linked-list-backed:</strong> Keep <code>head</code> and <code>tail</code> pointers; enqueue appends at the tail, dequeue unlinks the head. Both O(1), and the queue grows one node at a time with no capacity planning. Java\'s <code>LinkedList</code> implements the Queue interface exactly this way.'
      ],
      diagram: {
        caption: 'Circular buffer: when the back pointer passes index 4 it wraps to index 0',
        chart: `flowchart LR
    subgraph Ring[Circular Buffer capacity 5]
      direction LR
      I0[0: A] --> I1[1: B] --> I2[2: C] --> I3[3: D] --> I4[4: E]
      I4 -. wrap to index 0 .-> I0
    end
    style I0 fill:#f1c40f,color:#000
    style I4 fill:#2ecc71,color:#fff`
      }
    },
    // D — Advantages
    {
      heading: 'Advantages',
      text: 'Queues shine whenever work must be handled in the order it arrived.',
      list: [
        '<strong>O(1) enqueue and dequeue:</strong> With a deque, circular buffer, or linked list backing, both core operations are constant time — no shifting, no traversal.',
        '<strong>Fairness and ordering guarantee:</strong> FIFO means every element is processed in arrival order — no starvation, no reordering surprises. This is exactly what schedulers and task systems promise.',
        '<strong>Natural fit for buffering and producer-consumer systems:</strong> Producers add work at one end while consumers drain it from the other, decoupled — each side runs at its own speed with the queue absorbing bursts.',
        '<strong>Enables BFS and level-order traversal:</strong> A queue is the engine of breadth-first search — dequeue a node, enqueue its unvisited neighbors — which guarantees shortest paths in unweighted graphs.',
        '<strong>Simple mental model:</strong> Two ends, two operations, one rule. Easy to reason about, easy to explain in an interview, hard to misuse.',
        '<strong>Foundation for powerful patterns:</strong> Monotonic deques solve sliding-window maximum in O(n); two stacks can simulate a queue; a queue plus a hash map solves "first unique" problems.'
      ]
    },
    // E — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'Queues trade flexibility for order. When you need anything other than FIFO access, a queue is the wrong tool.',
      list: [
        '<strong>No random access:</strong> You cannot jump to the i-th element — only the front and back are reachable in O(1).',
        '<strong>O(n) search:</strong> Finding an element requires a linear scan from front to back; queues are not meant to be queried.',
        '<strong>Wrong-implementation traps:</strong> Using a Python list with <code>pop(0)</code> makes every dequeue O(n) due to element shifting — silently turning an O(n) algorithm into O(n²).',
        '<strong>Fixed capacity for circular buffers:</strong> A plain ring buffer fills up and must either reject new elements or pay an O(n) resize to grow.',
        '<strong>Not suitable when you need priority:</strong> FIFO ignores urgency. If the most important item must leave first regardless of arrival time, you need a heap (priority queue), not a queue.',
        '<strong>Single direction of flow:</strong> A plain queue cannot undo, backtrack, or revisit — that is stack territory.'
      ]
    },
    // F — Queue Operations intro
    {
      heading: 'Queue Operations',
      text: 'The sections below walk through each core operation with its best efficient implementation, a Mermaid visual, and code. Complexity depends entirely on the backing structure — everything here assumes a deque or circular buffer, where both ends are O(1).'
    },
    // Operation 1 — Enqueue
    {
      heading: 'Operation 1: Enqueue',
      text: '<strong>What it does:</strong> Add a new element at the back of the queue.<br/><strong>Best efficiency:</strong> O(1) time and O(1) space with a deque (<code>append</code>), a circular buffer (write at the back index, advance it modulo capacity), or a linked list with a tail pointer.',
      diagram: {
        caption: 'Enqueue D at the back of the queue',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> B[Back: C]
    N[NEW: D]
    B -.-> N
    style N fill:#2ecc71,color:#fff
    style F fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque()

def enqueue(queue, value):
    queue.append(value)      # add to the back — O(1)

enqueue(queue, 'A')
enqueue(queue, 'B')
enqueue(queue, 'C')
print(queue)   # deque(['A', 'B', 'C'])

# Time: O(1), Space: O(1) per operation`,
      language: 'python'
    },
    // Operation 2 — Dequeue
    {
      heading: 'Operation 2: Dequeue',
      text: '<strong>What it does:</strong> Remove and return the element at the front of the queue — the one that has waited the longest.<br/><strong>Best efficiency:</strong> O(1) time with <code>deque.popleft()</code> or a circular buffer. The trap is <code>list.pop(0)</code>, which is O(n) because every remaining element shifts one slot left.',
      diagram: {
        caption: 'Dequeue removes A from the front; B becomes the new front',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> B[Back: C]
    F -.-> OUT[Removed: A]
    style F fill:#e74c3c,color:#fff
    style M fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque(['A', 'B', 'C'])

def dequeue(queue):
    if not queue:
        return None            # guard: empty queue
    return queue.popleft()     # remove from the front — O(1)

print(dequeue(queue))   # 'A'
print(queue)            # deque(['B', 'C'])

# Time: O(1) with deque, Space: O(1)
# WARNING: list.pop(0) is O(n) — it shifts every element left`,
      language: 'python'
    },
    // Operation 3 — Peek / Front
    {
      heading: 'Operation 3: Peek / Front',
      text: '<strong>What it does:</strong> Read the front element without removing it — look at who is next in line.<br/><strong>Best efficiency:</strong> O(1) time and O(1) space: index <code>queue[0]</code> on a deque, or read the front slot of a circular buffer. Always guard against an empty queue first.',
      diagram: {
        caption: 'Peek reads A but the queue is unchanged',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> B[Back: C]
    style F fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque(['A', 'B', 'C'])

def peek(queue):
    return queue[0] if queue else None   # read front, no removal

print(peek(queue))   # 'A'
print(queue)         # deque(['A', 'B', 'C']) — unchanged

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    // Operation 4 — Check Empty
    {
      heading: 'Operation 4: Check Empty',
      text: '<strong>What it does:</strong> Report whether the queue has any elements at all.<br/><strong>Best efficiency:</strong> O(1) time — compare the length to zero, or check whether the element counter is zero. Every dequeue and peek should be guarded by this check to avoid an IndexError or exception.',
      diagram: {
        caption: 'An empty queue: front and back have caught up with each other',
        chart: `flowchart LR
    E[Empty Queue] --> N[front equals back<br/>count is zero]
    style N fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque()

def is_empty(queue):
    return len(queue) == 0

print(is_empty(queue))   # True
queue.append('A')
print(is_empty(queue))   # False

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    // Operation 5 — Size
    {
      heading: 'Operation 5: Size',
      text: '<strong>What it does:</strong> Return the number of elements currently in the queue.<br/><strong>Best efficiency:</strong> O(1) time — <code>len()</code> on a deque is constant, and a circular buffer or linked-list queue maintains a running counter that increments on enqueue and decrements on dequeue.',
      diagram: {
        caption: 'Three elements between front and back: size is 3',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> B[Back: C]
    S[Size: 3] -.-> M
    style S fill:#3498db,color:#fff
    style F fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque(['A', 'B', 'C'])

def size(queue):
    return len(queue)        # O(1) — length is tracked, not counted

print(size(queue))   # 3
queue.popleft()
print(size(queue))   # 2

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    // Operation 6 — Search
    {
      heading: 'Operation 6: Search',
      text: '<strong>What it does:</strong> Find whether (and where) a value exists in the queue.<br/><strong>Best efficiency:</strong> O(n) time, O(1) space — a linear scan from front to back is the only option. Queues have no random access and no ordering by value, so binary search is impossible. If you search often, a queue is the wrong structure.',
      diagram: {
        caption: 'Search for C: scan from the front until it is found',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> N[C] --> B[Back: D]
    style N fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque(['A', 'B', 'C', 'D'])

def search(queue, target):
    position = 0
    for value in queue:          # front-to-back linear scan
        if value == target:
            return position      # distance from the front
        position += 1
    return -1

print(search(queue, 'C'))   # 2
print(search(queue, 'Z'))   # -1

# Time: O(n), Space: O(1) — no random access, linear scan only`,
      language: 'python'
    },
    // Operation 7 — Traverse / Print
    {
      heading: 'Operation 7: Traverse / Print',
      text: '<strong>What it does:</strong> Visit every element from front to back, typically to display the queue\'s contents.<br/><strong>Best efficiency:</strong> O(n) time, O(1) extra space (excluding the output). Iterating a deque visits elements in FIFO order without disturbing them.',
      diagram: {
        caption: 'Traverse from front to back without removing anything',
        chart: `flowchart LR
    F[Front: A] --> M[B] --> B[Back: C]
    style F fill:#f1c40f,color:#000
    style B fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `from collections import deque

queue = deque(['A', 'B', 'C'])

def traverse(queue):
    line = ' <- '.join(str(v) for v in queue)
    print('FRONT <- ' + line + ' <- BACK')

traverse(queue)   # FRONT <- A <- B <- C <- BACK

# Time: O(n), Space: O(1) extra (excluding output)`,
      language: 'python'
    },
    // Operation 8 — Circular Wrap-Around
    {
      heading: 'Operation 8: Circular Wrap-Around',
      text: '<strong>What it does:</strong> Reuse freed slots at the start of a fixed array by wrapping the front and back indices back to index 0 when they pass the last slot.<br/><strong>Best efficiency:</strong> O(1) time and O(1) space for both enqueue and dequeue — the modulo trick replaces shifting entirely, which is why ring buffers power OS schedulers and audio pipelines.',
      diagram: {
        caption: 'Enqueue F after the buffer filled: the back pointer wraps from index 4 to index 0',
        chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      B0[0: empty] --> B1[1: B] --> B2[2: C] --> B3[3: D] --> B4[4: E]
    end
    subgraph After[After]
      direction LR
      A0[0: F] --> A1[1: B] --> A2[2: C] --> A3[3: D] --> A4[4: E]
    end
    Before ~~~ After
    style A0 fill:#2ecc71,color:#fff
    style B0 fill:#e74c3c,color:#fff`
      }
    },
    {
      heading: 'How the circular buffer works',
      text: 'The whole trick is one line of arithmetic: <code>index = (index + 1) % capacity</code>. When an index reaches the end of the array, the modulo folds it back to 0 — so the <em>back</em> pointer, after writing at index 4 of a capacity-5 buffer, wraps to index 0 and reuses the slot that a dequeue freed. No element ever shifts.<br/><strong>Trace (capacity 5):</strong> enqueue A, B, C → slots 0, 1, 2 filled, back = 3. dequeue A → slot 0 freed, front = 1. enqueue D, E → slots 3, 4 filled, back wraps to 0. enqueue F → written at slot 0, back = 1. The buffer now holds <code>[F, B, C, D, E]</code> physically, but reading from front gives B, C, D, E, F — perfect FIFO order with zero shifting.',
    },
    {
      text: 'Code:',
      code: `class MiniCircularQueue:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.capacity = capacity
        self.front = 0
        self.back = 0
        self.count = 0

    def enqueue(self, value):
        if self.count == self.capacity:
            return False                          # full
        self.data[self.back] = value
        self.back = (self.back + 1) % self.capacity
        self.count += 1
        return True

    def dequeue(self):
        if self.count == 0:
            return None                           # empty
        value = self.data[self.front]
        self.data[self.front] = None
        self.front = (self.front + 1) % self.capacity
        self.count -= 1
        return value

q = MiniCircularQueue(5)
for v in ['A', 'B', 'C']:
    q.enqueue(v)
print(q.dequeue())          # 'A' — slot 0 freed
for v in ['D', 'E', 'F']:
    q.enqueue(v)            # back wraps from index 4 to index 0
print(q.data)               # ['F', 'B', 'C', 'D', 'E']
print(q.dequeue())          # 'B'
print(q.dequeue())          # 'C'

# Time: O(1) per operation, Space: O(capacity) total`,
      language: 'python'
    },
    // G — Complete Queue Class (tabs)
    {
      heading: 'Complete Queue Class',
      text: 'Below is a complete queue built from scratch on a <strong>circular buffer</strong> — the same technique a dynamic array uses, applied to a ring. The class keeps a fixed-size backing array with <code>front</code> and element-count bookkeeping, wraps indices with modulo, and <strong>doubles its capacity when full</strong> (copying elements front-to-back so FIFO order is preserved). It supports enqueue, dequeue, peek, is_empty, and size — all O(1), with an occasional O(n) resize that amortizes away. The driver demo deliberately forces the back pointer to wrap around. Note that in production Python you would simply use <code>collections.deque</code> — the point here is showing the modulo mechanics that deque hides from you.'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Queue Class in Python',
        code: `class Queue:
    def __init__(self, capacity=8):
        self._data = [None] * capacity   # fixed-size backing store
        self._capacity = capacity
        self._front = 0                  # index of the oldest element
        self._count = 0                  # how many elements are stored

    def enqueue(self, value):
        if self._count == self._capacity:
            self._resize()                           # grow by doubling
        back = (self._front + self._count) % self._capacity
        self._data[back] = value
        self._count += 1

    def _resize(self):
        new_capacity = self._capacity * 2
        new_data = [None] * new_capacity
        for i in range(self._count):                 # copy front-to-back
            new_data[i] = self._data[(self._front + i) % self._capacity]
        self._data = new_data
        self._capacity = new_capacity
        self._front = 0

    def dequeue(self):
        if self.is_empty():
            return None
        value = self._data[self._front]
        self._data[self._front] = None
        self._front = (self._front + 1) % self._capacity
        self._count -= 1
        return value

    def peek(self):
        if self.is_empty():
            return None
        return self._data[self._front]

    def is_empty(self):
        return self._count == 0

    def size(self):
        return self._count

    def __len__(self):
        return self._count

# Driver — watch the back pointer wrap around the ring
q = Queue(capacity=4)
for v in [10, 20, 30]:
    q.enqueue(v)
print(q.dequeue())            # 10 — frees slot 0
for v in [40, 50, 60]:        # 50 wraps to slot 0; 60 triggers resize 4 -> 8
    q.enqueue(v)
print(q.size())               # 5
print(q.peek())               # 20
while not q.is_empty():
    print(q.dequeue(), end=' ')   # 20 30 40 50 60
print()`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Queue Class in Java',
        code: `public class Queue {

    private int[] data;
    private int capacity;
    private int front;
    private int count;

    public Queue() {
        this(8);
    }

    public Queue(int capacity) {
        this.capacity = capacity;
        this.data = new int[capacity];
        this.front = 0;
        this.count = 0;
    }

    public void enqueue(int value) {
        if (count == capacity) resize();           // grow by doubling
        int back = (front + count) % capacity;
        data[back] = value;
        count++;
    }

    private void resize() {
        int newCapacity = capacity * 2;
        int[] newData = new int[newCapacity];
        for (int i = 0; i < count; i++) {          // copy front-to-back
            newData[i] = data[(front + i) % capacity];
        }
        data = newData;
        capacity = newCapacity;
        front = 0;
    }

    public int dequeue() {
        if (isEmpty()) throw new IllegalStateException("Queue is empty");
        int value = data[front];
        front = (front + 1) % capacity;
        count--;
        return value;
    }

    public int peek() {
        if (isEmpty()) throw new IllegalStateException("Queue is empty");
        return data[front];
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public int size() {
        return count;
    }

    public static void main(String[] args) {
        Queue q = new Queue(4);
        q.enqueue(10); q.enqueue(20); q.enqueue(30);
        System.out.println(q.dequeue());            // 10 — frees slot 0
        q.enqueue(40); q.enqueue(50); q.enqueue(60); // 50 wraps to slot 0; 60 triggers resize 4 -> 8
        System.out.println(q.size());               // 5
        System.out.println(q.peek());               // 20
        while (!q.isEmpty()) {
            System.out.print(q.dequeue() + " ");    // 20 30 40 50 60
        }
        System.out.println();
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    // H — Complexity
    {
      heading: 'Time & Space Complexity',
      text: 'Queue complexity is entirely a story about the <strong>backing implementation</strong>. The FIFO contract is always the same; what changes is whether removing from the front costs O(1) or O(n). The table below assumes the correct choices (deque, circular buffer, linked list) and calls out the traps.',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Enqueue', 'O(1)', 'O(1)', 'Append to the back of a deque, or write at the back index of a circular buffer — no traversal, no shifting.'],
          ['Dequeue', 'O(1)', 'O(1)', 'deque.popleft() or advancing the front index with modulo — the front element is always directly reachable.'],
          ['Peek / Front', 'O(1)', 'O(1)', 'Read queue[0] or the front slot without removing; guard against the empty queue first.'],
          ['Is empty / Size', 'O(1)', 'O(1)', 'len() on a deque is constant; a circular buffer or linked queue keeps a running counter.'],
          ['Dequeue via list.pop(0)', 'O(n)', 'O(1)', 'THE trap: Python shifts every remaining element one slot left. n dequeues this way cost O(n²) total — use collections.deque instead.'],
          ['Deque popleft', 'O(1)', 'O(1)', 'collections.deque is a doubly-linked list of fixed-size blocks, so both ends unlink in constant time; Java ArrayDeque is a resizable ring.'],
          ['Circular buffer ops', 'O(1)', 'O(1)', 'index = (index + 1) % capacity wraps pointers around the ring — freed slots are reused with zero shifting.'],
          ['Search', 'O(n)', 'O(1)', 'Linear scan from front to back is the only option; queues have no random access and no value ordering.'],
          ['Traverse / Print', 'O(n)', 'O(1)', 'Visit every element once in FIFO order; extra space excludes the output itself.'],
          ['Resize (growable buffer)', 'O(n) amortized', 'O(n)', 'Doubling copies all n elements front-to-back, but happens rarely enough that the amortized enqueue cost stays O(1).'],
          ['Monotonic deque full pass', 'O(n)', 'O(k)', 'Each element enters and leaves the deque at most once, so the while loop inside the for loop totals 2n operations, not n².']
        ]
      },
      note: 'Interview tip: a queue means FIFO — process in arrival order — which is why it powers BFS, scheduling, and buffering. When asked for a queue operation\'s cost, always name your implementation first, because the complexity depends on it (deque/circular buffer O(1) vs naive list O(n)). And for sliding-window problems, memorize the key argument: each element enters and leaves the deque at most once, so a monotonic deque pass is amortized O(n) overall — the inner while loop does NOT make it O(n²).'
    },
    // I — Real-World Applications
    {
      heading: 'Real-World Applications',
      text: 'Queues are the invisible plumbing of every system that receives work faster than it can be processed, or that must guarantee fair, arrival-ordered service. Each example below shows the same pattern: <strong>order matters</strong>, and the queue is what enforces it while decoupling the side that produces work from the side that consumes it.',
      list: [
        '<strong>OS task / process scheduling:</strong> When multiple processes are ready to run, the operating system\'s scheduler places them in a ready queue and grants the CPU in arrival order (round-robin scheduling dequeues a process, runs it for a time slice, and re-enqueues it at the back). FIFO guarantees no process starves while newer arrivals keep getting scheduled — fairness is the entire point.',
        '<strong>Printer spooler:</strong> When ten people click Print at once, the documents do not fight over the printer — each job is enqueued on a print spooler and printed strictly in submission order. The first document submitted is the first printed, and users can keep working because the queue absorbs the burst between the fast producers (clicking Print) and the slow consumer (the physical printer).',
        '<strong>Message brokers (Kafka consumer groups, RabbitMQ, AWS SQS):</strong> Producers publish events (orders placed, payments received, emails to send) into a queue; consumer workers dequeue and process them in order. The queue decouples the two sides — if consumers crash or slow down, messages simply accumulate safely instead of being lost, and you can add more consumers to drain the backlog faster.',
        '<strong>BFS in graphs and level-order tree traversal:</strong> Breadth-first search enqueues the start node, then repeatedly dequeues a node and enqueues its unvisited neighbors. Because nodes leave the queue in the order they were discovered, BFS explores level by level — which is precisely why it finds shortest paths in unweighted graphs and prints tree levels in order. GPS routing, social-network "degrees of separation", and web crawlers all run on this loop.',
        '<strong>Call-center and customer support routing:</strong> "Your call is important to us; you are number 4 in the queue" is a literal FIFO queue. Calls arrive faster than agents can answer, so they wait in arrival order, and the next free agent dequeues the longest-waiting caller. Skipping the order would be unfair — and customers would notice immediately.',
        '<strong>Producer-consumer pipelines in web servers:</strong> A web server\'s acceptor thread enqueues incoming connections while a pool of worker threads dequeues and handles each request. The queue smooths traffic spikes: a burst of 1,000 requests does not require 1,000 threads, it just lengthens the queue. Thread pools, task queues like Celery, and I/O event loops are all this pattern.',
        '<strong>Rate limiting (sliding-window request log):</strong> To enforce "at most 100 requests per minute", an API gateway keeps a deque of recent request timestamps per client. On each new request it evicts timestamps older than 60 seconds from the front, then checks the size — if the window is full, the request is rejected. The deque is perfect here because old entries leave from the front exactly as new ones arrive at the back, both in O(1).'
      ],
      note: 'The common thread: order matters, service is first-come-first-served, and the queue decouples producers from consumers — each side runs at its own speed while the queue absorbs the difference. Whenever you see "in arrival order", "waiting line", "buffer", or "backlog", a queue is almost always the right structure.'
    },
    // J — Interview Questions intro
    {
      heading: 'Top Interview Questions on Queues',
      text: 'The eight most frequently asked queue interview questions are below — each in its own collapsible card with the key idea, a solved Python answer, and its complexity. Four patterns cover nearly everything: <strong>two stacks simulating a queue</strong> (amortized O(1) via the pour trick), the <strong>circular buffer</strong> (modulo indices plus a size counter), the <strong>monotonic deque</strong> for sliding-window maximum/minimum, and the <strong>queue + hash map</strong> combo for "first unique" problems where stale candidates are lazily evicted from the front.',
      note: 'Pattern cheat sheet: "implement X using Y" means two structures with a pour-on-demand (Q1, Q2). "Fixed capacity, no shifting" means a circular buffer with (index + 1) % k and a count (Q3). "Last N events / average / window" means a deque that evicts expired entries from the front (Q4, Q5). "First unique" means counts plus lazy eviction of invalid candidates (Q6). "Sliding window max/min" means a monotonic deque of indices — each element enters and leaves at most once, giving amortized O(n) (Q8).'
    },
    // K — Practice Questions (accordions)
    {
      heading: 'Practice Question 1: Implement Queue using Stacks (LeetCode 232, Easy)',
      text: '<strong>Problem:</strong> Implement a FIFO queue using only two LIFO stacks, supporting push, pop, peek, and empty.<br/><strong>Key idea:</strong> Keep an <code>in</code> stack for arrivals and an <code>out</code> stack for departures. Enqueue just pushes onto <code>in</code>. On dequeue or peek, if <code>out</code> is empty, <strong>pour</strong> everything from <code>in</code> into <code>out</code> — the pour reverses the order, so the oldest element ends up on top of <code>out</code>, giving FIFO. Each element crosses between the stacks exactly once, so the expensive pour is rare and amortizes away.<br/><strong>Complexity:</strong> Push O(1); pop and peek O(1) amortized (O(n) worst on a pour); Space O(n).',
      example: {
        title: 'Python Solution',
        code: `class MyQueue:
    def __init__(self):
        self._in = []     # elements arrive here (newest on top)
        self._out = []    # elements leave here (oldest on top)

    def push(self, x):
        self._in.append(x)

    def pop(self):
        self._move()
        return self._out.pop()

    def peek(self):
        self._move()
        return self._out[-1]

    def empty(self):
        return not self._in and not self._out

    def _move(self):
        # Pour only when out is empty — the pour reverses order (FIFO)
        if not self._out:
            while self._in:
                self._out.append(self._in.pop())`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Implement Stack using Queues (LeetCode 225, Easy)',
      text: '<strong>Problem:</strong> Implement a LIFO stack using only FIFO queue(s), supporting push, pop, top, and empty.<br/><strong>Key idea:</strong> One queue is enough. On every push, enqueue the new element and then <strong>rotate</strong> the queue: dequeue and re-enqueue the n - 1 older elements so they all move behind the newcomer. After the rotation the newest element sits at the front, so pop and top simply read the front of the queue — LIFO order restored. The cost is pushed onto push itself, which is O(n); the classic follow-up is doing it with two queues instead.<br/><strong>Complexity:</strong> Push O(n); pop, top, empty O(1); Space O(n).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque

class MyStack:
    def __init__(self):
        self._queue = deque()

    def push(self, x):
        self._queue.append(x)
        # Rotate: move every older element behind the new one
        for _ in range(len(self._queue) - 1):
            self._queue.append(self._queue.popleft())

    def pop(self):
        return self._queue.popleft()   # newest element is at the front

    def top(self):
        return self._queue[0]

    def empty(self):
        return len(self._queue) == 0`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Design Circular Queue (LeetCode 622, Medium)',
      text: '<strong>Problem:</strong> Design a fixed-capacity circular queue supporting enQueue, deQueue, Front, Rear, isEmpty, and isFull.<br/><strong>Key idea:</strong> Use a fixed array plus a <code>front</code> index and a <code>count</code> — never derive emptiness from comparing front and back alone, because a full ring and an empty ring can look identical. The back position is computed on demand as <code>(front + count) % k</code>; every index advance is modulo <code>k</code> so pointers wrap around and reuse freed slots. The size counter makes isEmpty (<code>count == 0</code>) and isFull (<code>count == k</code>) trivial and unambiguous.<br/><strong>Complexity:</strong> All operations O(1) time; Space O(k).',
      example: {
        title: 'Python Solution',
        code: `class MyCircularQueue:
    def __init__(self, k):
        self._data = [0] * k
        self._k = k
        self._front = 0
        self._count = 0

    def enQueue(self, value):
        if self.isFull():
            return False
        back = (self._front + self._count) % self._k
        self._data[back] = value
        self._count += 1
        return True

    def deQueue(self):
        if self.isEmpty():
            return False
        self._front = (self._front + 1) % self._k
        self._count -= 1
        return True

    def Front(self):
        return -1 if self.isEmpty() else self._data[self._front]

    def Rear(self):
        if self.isEmpty():
            return -1
        return self._data[(self._front + self._count - 1) % self._k]

    def isEmpty(self):
        return self._count == 0

    def isFull(self):
        return self._count == self._k`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Number of Recent Calls (LeetCode 933, Easy)',
      text: '<strong>Problem:</strong> Implement a counter whose ping(t) returns how many requests were made in the last 3000 milliseconds, inclusive of t. Calls arrive with strictly increasing timestamps.<br/><strong>Key idea:</strong> Keep a deque of timestamps. On each ping, append t, then evict from the front every timestamp older than <code>t - 3000</code> — those can never be inside any future window either, since timestamps only increase. The deque\'s length is exactly the answer. This is the sliding-window-eviction pattern in its purest form.<br/><strong>Complexity:</strong> O(1) amortized per ping (each timestamp is added once and evicted at most once); Space O(w), where w is the window size.',
      example: {
        title: 'Python Solution',
        code: `from collections import deque

class RecentCounter:
    def __init__(self):
        self._times = deque()

    def ping(self, t):
        self._times.append(t)
        # Timestamps older than the window will never count again
        while self._times[0] < t - 3000:
            self._times.popleft()
        return len(self._times)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Moving Average from Data Stream (LeetCode 346, Easy)',
      text: '<strong>Problem:</strong> Given a stream of integers and a window size, compute the moving average of the last <code>size</code> values after each new value arrives.<br/><strong>Key idea:</strong> Keep a deque holding exactly the current window plus a <strong>running sum</strong>. On each new value, append it and add it to the sum; if the window exceeds the size, popleft the oldest value and subtract it. The average is the sum divided by the current window length — no rescanning the window on every call. The running sum is what makes each step O(1) instead of O(size).<br/><strong>Complexity:</strong> O(1) per call; Space O(size).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque

class MovingAverage:
    def __init__(self, size):
        self._size = size
        self._window = deque()
        self._sum = 0.0

    def next(self, val):
        self._window.append(val)
        self._sum += val
        if len(self._window) > self._size:
            self._sum -= self._window.popleft()   # drop the oldest
        return self._sum / len(self._window)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: First Unique Character in a String (LeetCode 387, Easy)',
      text: '<strong>Problem:</strong> Return the index of the first non-repeating character in a string, or -1 if none exists.<br/><strong>Key idea:</strong> Combine a count array with a queue of candidate indices. Scan the string once: increment each character\'s count and enqueue its index. After each step, lazily evict from the front any candidate whose count has risen above 1 — the front of the queue is then always the earliest index that is still unique. (A two-pass variant — count everything first, then rescan for the first count of 1 — is equally valid and simpler, but the queue version scales to streaming input.)<br/><strong>Complexity:</strong> Time O(n); Space O(1) extra — the count array and queue hold at most 26 distinct letters.',
      example: {
        title: 'Python Solution',
        code: `from collections import deque

def first_uniq_char(s):
    count = [0] * 26
    queue = deque()                       # indices that might be the answer
    for i, ch in enumerate(s):
        count[ord(ch) - ord('a')] += 1
        queue.append(i)
        # Evict front candidates that are no longer unique
        while queue and count[ord(s[queue[0]]) - ord('a')] > 1:
            queue.popleft()
    return queue[0] if queue else -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Time Needed to Buy Tickets (LeetCode 2073, Easy)',
      text: '<strong>Problem:</strong> People stand in a line; person i needs tickets[i] tickets. Each second the person at the front buys one ticket and, if they still need more, rejoins the back of the line. Return the total seconds until person k finishes.<br/><strong>Key idea:</strong> Skip the simulation with direct math. Person k finishes after target = tickets[k] full "passes" through the line. Everyone at or before position k contributes min(tickets[i], target) seconds — they never outlast person k. Everyone behind k contributes at most min(tickets[i], target - 1), because the line stops the moment person k buys their last ticket, one pass earlier. Queue simulation also works but is O(sum of tickets); the formula is O(n).<br/><strong>Complexity:</strong> Time O(n); Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def time_to_buy(tickets, k):
    target = tickets[k]
    seconds = 0
    for i, t in enumerate(tickets):
        if i <= k:
            seconds += min(t, target)         # up to and including k
        else:
            seconds += min(t, target - 1)     # behind k: one fewer pass
    return seconds`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Sliding Window Maximum (LeetCode 239, Hard)',
      text: '<strong>Problem:</strong> Given an array and a window size k, return the maximum of every window as it slides one step to the right.<br/><strong>Key idea:</strong> Maintain a <strong>monotonic decreasing deque of indices</strong>: the front always holds the index of the current window\'s maximum. For each new element, pop from the back every index whose value is smaller — those can never be a maximum again while the new element is in any window. Then evict the front if it has slid out of the window, and once the first full window forms, record the front\'s value. The amortized argument is the one to quote: each element enters and leaves the deque at most once, so the nested while loop totals O(n), not O(n·k).<br/><strong>Complexity:</strong> Time O(n); Space O(k).',
      example: {
        title: 'Python Solution',
        code: `from collections import deque

def max_sliding_window(nums, k):
    result = []
    dq = deque()     # indices of decreasing values; max is at the front

    for i, num in enumerate(nums):
        # Maintain decreasing order: num beats every smaller tail value
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        # Evict the front if it has slid out of the window
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:                     # first full window ends at i = k - 1
            result.append(nums[dq[0]])
    return result`,
        language: 'python',
        type: 'code'
      }
    }
  ]
}
