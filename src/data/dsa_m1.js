// DSA Module 1: Core Linear Structures
// Target: Job seekers, AI Engineers, Data Scientists

import { arraysTopic } from './dsa_m1_arrays.js'
import { stringsTopic } from './dsa_m1_strings.js'
import { stacksTopic } from './dsa_m1_stacks.js'
import { queuesTopic } from './dsa_m1_queues.js'
import { hashmapsTopic } from './dsa_m1_hashmaps.js'
import { setsTopic } from './dsa_m1_sets.js'

export const dsaM1 = {
  module1: {

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 1 — Big-O Notation & Complexity Analysis
    // ─────────────────────────────────────────────────────────────────────────
    'intro-dsa': {
      title: 'Big-O Notation & Complexity Analysis',
      subtitle: 'The language every interviewer speaks',
      sections: [
        // A — text + bullets
        {
          heading: 'What is Big-O Notation?',
          text: 'Big-O notation describes the upper bound of an algorithm\'s runtime or space usage as the input size grows toward infinity. It is the universal language interviewers use to evaluate your solutions — knowing it cold is non-negotiable.',
          list: [
            '<strong>O(1) — Constant:</strong> Runtime does not depend on input size. Example: array index access, hash map lookup.',
            '<strong>O(log n) — Logarithmic:</strong> Input is halved at each step. Example: binary search, balanced BST operations.',
            '<strong>O(n) — Linear:</strong> Runtime grows proportionally to input. Example: linear scan, single loop over an array.',
            '<strong>O(n log n) — Linearithmic:</strong> Typical of efficient sorting algorithms. Example: merge sort, heap sort, TimSort.',
            '<strong>O(n²) — Quadratic:</strong> Nested loops over the same data. Example: bubble sort, naive duplicate detection.',
            '<strong>O(2^n) — Exponential:</strong> Runtime doubles with each additional input element. Example: naive recursive Fibonacci, power set generation.'
          ]
        },
        // B — concept explanation
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Big-O captures the <em>growth rate</em> of resource consumption, not the exact count of operations. When we say an algorithm is O(n), we mean that as n doubles, the runtime roughly doubles too. Constants and lower-order terms are dropped because they become irrelevant at scale — O(3n + 50) simplifies to O(n).</p>',
            '<p><strong>Omega (Ω) — Best Case:</strong> Omega describes the best-case scenario for an algorithm. In simple terms, it tells you the fastest an algorithm can run under the most favorable circumstances. Example: finding the first element in an unsorted array is Ω(1) because you might get lucky and find it immediately.</p>',
            '<p><strong>Theta (Θ) — Average Case:</strong> Theta describes the tight bound — the average-case scenario. In simple terms, it tells you what to generally expect in terms of time complexity. When an algorithm is both O(f(n)) and Ω(f(n)), we say it is Θ(f(n)). Example: randomized quicksort averages Θ(n log n) over many runs.</p>',
            '<p><strong>Big O (O) — Worst Case:</strong> Big-O describes the worst-case scenario for an algorithm. In simple terms, it tells you the slowest an algorithm can run in the worst circumstances. This is the guarantee you must always defend in interviews. Example: bubble sort is O(n²) because every element may need to be compared with every other element.</p>',
            '<p><strong>Amortized analysis</strong> averages the cost of an operation over a sequence of operations. Python\'s list append is a perfect example: most appends are O(1), but occasionally the underlying array must be resized (O(n)). Averaged over n appends, however, each append costs O(1) amortized because the resize cost is spread across all prior cheap operations.</p>'
          ],
          note: 'Rule: drop constants and non-dominant terms. O(n + n²) → O(n²). O(500) → O(1).'
        },
        // B2 — Other Concepts: Simplification Rules
        {
          heading: 'Other Concepts: Simplification Rules',
          content: [
            '<p><strong>Drop Non-Dominant Terms:</strong> In expressions like O(n² + n), always focus on the term that dominates for large n. As n grows toward infinity, n² grows much faster than n, so O(n² + n) simplifies to O(n²). Similarly, O(n³ + n² + n) simplifies to O(n³).</p>',
            '<p><strong>Drop Constants:</strong> Constant multipliers are irrelevant in Big-O because we care about growth rate, not exact operation counts. O(2n) simplifies to O(n). O(500) simplifies to O(1). O(3n² + 50n + 100) simplifies to O(n²).</p>'
          ],
          note: 'Why drop? Because Big-O describes behavior as n → ∞. At n = 1,000,000, the difference between 2n and n is trivial compared to the difference between n and n².'
        },
        // C — Mermaid diagram
        {
          heading: 'Visual Diagram',
          diagram: {
            chart: `xychart-beta
    title "Big-O Complexity Growth (Operations vs Input Size n)"
    x-axis "Input Size (n)" [1, 10, 100, 1000, 10000, 100000]
    y-axis "Operations" 0 --> 1000000
    line "O(1) Constant" [1, 1, 1, 1, 1, 1]
    line "O(log n) Logarithmic" [0, 3, 7, 10, 13, 17]
    line "O(n) Linear" [1, 10, 100, 1000, 10000, 100000]
    line "O(n log n) Linearithmic" [0, 30, 664, 9966, 132877, 1660964]
    line "O(n^2) Quadratic" [1, 100, 10000, 1000000, 100000000, 10000000000]`,
            caption: 'Growth rate comparison: O(1) stays flat, O(log n) barely rises, while O(n^2) and O(2^n) explode as input size increases.'
          },
          note: 'Scale reference at n = 1,000,000: O(1) => 1 op | O(log n) => 20 ops | O(n) => 1,000,000 ops | O(n log n) => 20,000,000 ops | O(n^2) => 1,000,000,000,000 | O(2^n) => astronomically large'
        },
        // D — Python code example
        {
          heading: 'Python Implementation',
          example: {
            title: 'Big-O Demo in Python',
            code: `import time
import sys

# O(1) — constant time: index access
def get_first(arr):
    return arr[0]   # O(1) regardless of arr length

# O(n) — list insert at index 0 must shift every existing element
def insert_at_front(arr, val):
    arr.insert(0, val)   # O(n): shifts all n elements right

# Timing comparison: append (O(1) amortized) vs insert(0,...) O(n)
n = 100_000
data = list(range(n))

start = time.perf_counter()
for i in range(1000):
    data.append(i)           # O(1) amortized per call
append_time = time.perf_counter() - start

data2 = list(range(n))
start = time.perf_counter()
for i in range(1000):
    data2.insert(0, i)       # O(n) per call — shifts all elements!
insert_time = time.perf_counter() - start

print(f"1000x append  (O(1) amortized): {append_time:.4f}s")
print(f"1000x insert(0,...) (O(n))    : {insert_time:.4f}s")
print(f"insert is ~{insert_time / append_time:.0f}x slower than append")

# Amortized analysis — observe list memory growing in jumps
lst = []
prev_size = sys.getsizeof(lst)
print("\\nList memory growth (amortized O(1) per append):")
for i in range(9):
    lst.append(i)
    new_size = sys.getsizeof(lst)
    if new_size != prev_size:
        print(f"  len={len(lst)}: size jumped {prev_size} -> {new_size} bytes (resize!)")
        prev_size = new_size`,
            output: `1000x append  (O(1) amortized): 0.0001s
1000x insert(0,...) (O(n))    : 0.3847s
insert is ~3847x slower than append

List memory growth (amortized O(1) per append):
  len=1: size jumped 56 -> 88 bytes (resize!)
  len=5: size jumped 88 -> 120 bytes (resize!)
  len=9: size jumped 120 -> 184 bytes (resize!)`,
            language: 'python',
            type: 'code'
          }
        },
        // E — Java code example
        {
          heading: 'Java Implementation',
          example: {
            title: 'Big-O Demo in Java',
            code: `import java.util.ArrayList;

public class BigODemo {

    // O(1) amortized — ArrayList add() appends to end
    static long timeAppend(int ops) {
        ArrayList<Integer> list = new ArrayList<>();
        long start = System.nanoTime();
        for (int i = 0; i < ops; i++) {
            list.add(i);        // O(1) amortized — doubles capacity when full
        }
        return System.nanoTime() - start;
    }

    // O(n) per call — add(0, x) shifts every element one position right
    static long timeInsertFront(int ops, int prefill) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < prefill; i++) list.add(i);   // pre-fill with n items
        long start = System.nanoTime();
        for (int i = 0; i < ops; i++) {
            list.add(0, i);     // O(n) each — all prefill elements shift right
        }
        return System.nanoTime() - start;
    }

    public static void main(String[] args) {
        int ops     = 10_000;
        int prefill = 100_000;

        long appendNs = timeAppend(ops);
        long insertNs = timeInsertFront(ops, prefill);

        System.out.printf("add() at end  O(1) amortized : %d ms%n", appendNs / 1_000_000);
        System.out.printf("add(0, x)     O(n) per call  : %d ms%n", insertNs / 1_000_000);
        System.out.printf("Insert-front is ~%.0fx slower%n",
                          (double) insertNs / Math.max(appendNs, 1));
    }
}`,
            output: `add() at end  O(1) amortized :  2 ms
add(0, x)     O(n) per call  : 51 ms
Insert-front is ~25x slower`,
            language: 'java',
            type: 'code'
          }
        },
        // F — numbered walkthrough
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1:</strong> Identify the input variable(s) — usually n (array length), m (second array length), k (max value). All Big-O is expressed in terms of these variables.',
            '<strong>Step 2:</strong> Count loops. A single loop over n items → O(n). Two nested loops both iterating over n → O(n²). A loop that halves the problem each step → O(log n).',
            '<strong>Step 3:</strong> Add sequential blocks; multiply nested ones. Two O(n) passes in sequence: O(n + n) = O(n). An O(n) loop inside another O(n) loop: O(n × n) = O(n²).',
            '<strong>Step 4:</strong> Drop constants and lower-order terms. O(3n + 2 log n + 15) simplifies to O(n). O(n² + n) simplifies to O(n²).',
            '<strong>Step 5:</strong> Separately analyze space complexity. Identify all data structures allocated proportionally to input — arrays, hash maps, recursion call stacks all count.',
            '<strong>Step 6:</strong> Check all three cases. Is the Big-O worst case different from the average? For quicksort: O(n log n) average, O(n²) worst. Always defend the worst case.',
            '<strong>Step 7:</strong> Apply amortized analysis when applicable. Dynamic array append is O(1) amortized. Hash map insert is O(1) amortized. Be ready to explain why.'
          ]
        },
        // G — complexity table
        {
          heading: 'Time & Space Complexity',
          text: 'Key complexity classes ordered from fastest to slowest, with representative examples and scalability guidance:',
          table: {
            headers: ['Name', 'Notation', 'Example DS / Op', 'Scales to 10^6?'],
            rows: [
              ['Constant', 'O(1)', 'Array index, HashMap get', 'Yes — always'],
              ['Logarithmic', 'O(log n)', 'Binary search, BST lookup', 'Yes — ~20 ops'],
              ['Linear', 'O(n)', 'Array scan, HashMap build', 'Yes — tight budget'],
              ['Linearithmic', 'O(n log n)', 'Merge sort, Heap sort', 'Yes — ~20M ops'],
              ['Quadratic', 'O(n²)', 'Bubble sort, nested loops', 'No — 10^12 ops'],
              ['Cubic', 'O(n³)', 'Floyd-Warshall (dense graph)', 'No — 10^18 ops'],
              ['Exponential', 'O(2^n)', 'Recursive Fibonacci, power set', 'No — astronomically large'],
              ['Factorial', 'O(n!)', 'Brute-force permutations, TSP', 'No — n=20 already kills']
            ]
          }
        },
        // H — mistakes + fix code
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Confusing O(n + m) with O(n²).</strong> When two separate inputs appear, the complexity is O(n + m), not O(n²) — <em>Fix:</em> Keep separate variables for each input dimension and add them.',
            '<strong>Mistake: Ignoring constants that matter in practice.</strong> O(n) with a 1000x constant multiplier can be slower than O(n log n) for typical input sizes — <em>Fix:</em> After stating Big-O, mention the constant factor if it is large.',
            '<strong>Mistake: Forgetting space complexity.</strong> Recursive DFS uses O(n) call stack space that interviewers expect you to account for — <em>Fix:</em> Always state both time AND space complexity.',
            '<strong>Mistake: Assuming two loops always means O(n²).</strong> Two sequential (non-nested) loops are O(n + n) = O(n), not O(n²) — <em>Fix:</em> Check whether loops are nested or sequential before multiplying.'
          ],
          code: `# WRONG: Assuming sequential loops = O(n^2)
def process(arr):
    for x in arr:        # O(n)
        print(x)
    for x in arr:        # O(n) — sequential, NOT nested
        print(x * 2)
# Total: O(n + n) = O(n), NOT O(n^2)

# CORRECT understanding: nested loops multiply
def find_pairs(arr):
    for i in range(len(arr)):       # O(n)
        for j in range(len(arr)):   # O(n) nested -> multiply
            if arr[i] + arr[j] == 0:
                print(arr[i], arr[j])
# Total: O(n * n) = O(n^2)

# WRONG: Ignoring recursion stack space
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
# Time: O(n) — correct
# Space: O(n) stack frames — must mention BOTH in interviews`,
          language: 'python'
        },
        // I — real world
        {
          heading: 'Real-World Applications',
          text: 'Big-O analysis drives architectural decisions in production systems across every major tech domain:',
          list: [
            '<strong>Database indexing:</strong> B-tree indexes reduce record lookup from O(n) full scan to O(log n) — critical for tables with billions of rows.',
            '<strong>Search engines:</strong> Inverted index lookups are O(1) hash lookups per term, making search viable at web scale despite terabytes of data.',
            '<strong>Machine learning preprocessing:</strong> Choosing O(n log n) merge sort over O(n²) bubble sort for sorting training data saves hours on datasets with millions of records.',
            '<strong>Network routing:</strong> Dijkstra with a min-heap runs in O((V + E) log V) — the difference between real-time routing and a system that times out.',
            '<strong>Auto-complete / recommendations:</strong> Trie lookups are O(k) where k is key length — independent of dictionary size, enabling instant suggestions.',
            '<strong>AI inference optimization:</strong> Transformer attention is O(n²) in sequence length — understanding this complexity is why researchers work on sparse and linear attention variants.'
          ]
        },
        // J — interview tips
        {
          heading: 'Interview Tips',
          list: [
            'Always state the time AND space complexity before you start coding — it shows you think systematically before you type.',
            'Ask the interviewer about input constraints: "Can n be up to 10^9?" — this tells you whether O(n) is acceptable or if you need O(log n).',
            'When you give complexity, briefly justify it: "This is O(n log n) because of the sort, then O(n) for the scan — dominated by O(n log n) overall."',
            'Explicitly mention the space-time trade-off: "I can solve this in O(n²) time O(1) space, or O(n) time O(n) space with a hash map — which would you prefer?"',
            'Amortized complexity comes up with dynamic arrays and hash maps — know how to explain "O(1) amortized" confidently without hesitation.',
            'For recursive solutions, the call stack counts as O(depth) space. Iterative solutions save this overhead — mention it proactively.',
            'If stuck on optimizing, ask yourself: can hashing reduce a lookup from O(n) to O(1)? Can sorting + binary search reduce from O(n) to O(log n)?'
          ]
        },
        // K — practice Q&A
        {
          heading: 'Practice Problems',
          list: [
            'Q1: What is the time complexity of finding the maximum element in an unsorted array of n elements, and why?\nAns: O(n) — you must examine every element at least once because there is no ordering information to exploit. You cannot skip any element, so the lower bound is also O(n).',
            'Q2: An algorithm has two phases: Phase 1 sorts the input in O(n log n); Phase 2 does a single pass in O(n). What is the overall complexity?\nAns: O(n log n). When adding complexities of sequential phases, take the dominant term. O(n log n) + O(n) = O(n log n) because n log n grows faster than n for large n.',
            'Q3 (Hard): A function recurses on halves of the array (like merge sort) and does O(n) work at each recursion level. How many levels exist, and what is the total complexity?\nAns: O(n log n). There are log n recursion levels because halving n takes log n steps to reach 1. Each level does a combined O(n) work across all calls at that level. Total = log n levels × O(n) per level = O(n log n). This is the Master Theorem case: T(n) = 2T(n/2) + O(n).'
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 2 — Arrays
    // ─────────────────────────────────────────────────────────────────────────
    'arrays': arraysTopic,

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 3 — Strings
    // ─────────────────────────────────────────────────────────────────────────
    'strings': stringsTopic,

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 4 — LinkedList
    // ─────────────────────────────────────────────────────────────────────────
    'linked-lists': {
      title: 'LinkedList',
      subtitle: 'A linear collection of nodes connected by pointers',
      sections: [
        // A — What is a Linked List?
        {
          heading: 'What is a Linked List?',
          text: 'A Linked List is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (called a node) contains its own data and a reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not require pre-allocation of memory and can grow or shrink dynamically at runtime.',
          list: [
            '<strong>Dynamic size:</strong> Nodes are allocated as needed; no fixed capacity like arrays.',
            '<strong>No random access:</strong> You cannot access the i-th element directly; you must traverse from the head.',
            '<strong>Pointer-based linking:</strong> Each node stores at least one pointer/reference to maintain order.',
            '<strong>Head pointer:</strong> A special reference that points to the first node; if head is null, the list is empty.',
            '<strong>Terminated by null:</strong> The last node points to null (None), marking the end of the list.'
          ]
        },
        // B — Components of a Linked List
        {
          heading: 'Components of a Linked List',
          text: 'Every linked list is made up of nodes. A node is the fundamental building block. In a singly linked list each node has two parts: data and next. In a doubly linked list a node also has a prev pointer.',
          list: [
            '<strong>Data:</strong> Holds the actual value or payload stored in the node.',
            '<strong>Next:</strong> A reference to the next node in the sequence.',
            '<strong>Prev:</strong> A reference to the previous node (used in doubly linked lists).',
            '<strong>Head:</strong> The starting reference of the list; points to the first node.',
            '<strong>Tail:</strong> The last node in the list; its next reference is null.'
          ]
        },
        // C — Node and its Properties (Mermaid)
        {
          heading: 'Node and Its Properties',
          text: 'A single node bundles data together with the links that hold the list together. Properties vary slightly by type, but the core idea is the same.',
          diagram: {
            caption: 'Structure of a Singly Linked List Node',
            chart: `flowchart LR
    subgraph Node[Node Object]
      direction LR
      D[Data Field<br/>stores value]
      N[Next Pointer<br/>address of next node]
    end
    D -.-> N
    style D fill:#3498db,color:#fff
    style N fill:#2ecc71,color:#fff`
          }
        },
        {
          diagram: {
            caption: 'Structure of a Doubly Linked List Node',
            chart: `flowchart LR
    subgraph DNode[Doubly Linked List Node]
      direction LR
      P[Prev Pointer<br/>address of previous node]
      DD[Data Field<br/>stores value]
      NN[Next Pointer<br/>address of next node]
    end
    P -.-> DD
    DD -.-> NN
    style P fill:#e74c3c,color:#fff
    style DD fill:#3498db,color:#fff
    style NN fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'For a typical singly linked list, the node class looks like this in Python and Java.',
          example: {
            title: 'Singly Linked List Node',
            code: `# Python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val      # data property
        self.next = next    # pointer to next node

# Java
class ListNode {
    int val;            // data property
    ListNode next;      // reference to next node
    ListNode(int val) { this.val = val; }
}`,
            language: 'python',
            type: 'code'
          }
        },
        // D — Example Linked List Visualization
        {
          heading: 'Example Linked List',
          text: 'Below is a visual of a simple singly linked list containing values 10, 20, 30 and 40.',
          diagram: {
            caption: 'Singly Linked List: 10 → 20 → 30 → 40 → None',
            chart: `flowchart LR
    H[Head] --> N1[10]
    N1 --> N2[20]
    N2 --> N3[30]
    N3 --> N4[40]
    N4 --> NULL[None]
    style H fill:#9b59b6,color:#fff
    style NULL fill:#e74c3c,color:#fff`
          }
        },
        // E — Types of Linked Lists
        {
          heading: 'Types of Linked Lists',
          text: 'Linked lists come in several variations. The right choice depends on whether you need backward traversal, circular traversal, or memory efficiency.'
        },
        {
          heading: 'Singly Linked List',
          text: 'Each node points only to the next node. Traversal is one-directional (head to tail). It uses the least memory because each node stores only one pointer.',
          diagram: {
            caption: 'Singly Linked List',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> C[30] --> NULL[None]`
          }
        },
        {
          heading: 'Doubly Linked List',
          text: 'Each node stores both next and prev pointers. This enables O(1) deletion when you already have a reference to the node, and allows backward traversal.',
          diagram: {
            caption: 'Doubly Linked List',
            chart: `flowchart LR
    H[Head] --> A[10]
    A <--> B[20]
    B <--> C[30]
    C --> T[Tail]`
          }
        },
        {
          heading: 'Circular Linked List',
          text: 'The last node points back to the first node instead of null. Useful for round-robin scheduling and cyclic traversal where every node is reachable from every other node.',
          diagram: {
            caption: 'Circular Linked List',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> C[30]
    C --> H`
          }
        },
        {
          heading: 'Circular Doubly Linked List',
          text: 'Combines doubly linked and circular properties: the last node connects to the head and the head connects back to the tail, forming a bidirectional ring.',
          diagram: {
            caption: 'Circular Doubly Linked List',
            chart: `flowchart LR
    subgraph Ring[Circular Doubly Ring]
      direction LR
      A[10] <--> B[20]
      B <--> C[30]
      C <--> A
    end`
          }
        },
        // F — Advantages
        {
          heading: 'Advantages',
          text: 'Linked lists excel when you need frequent insertions and deletions, or when the total number of elements is unknown in advance.',
          list: [
            '<strong>Dynamic size:</strong> Memory is allocated node by node, so the list can grow or shrink without resizing an underlying buffer.',
            '<strong>O(1) insertion at head:</strong> Adding a new first node only requires updating the head pointer.',
            '<strong>O(1) deletion at head:</strong> Removing the first node only requires moving head to head.next.',
            '<strong>Efficient insertions/deletions in the middle:</strong> Once you have a pointer to the relevant node, splicing in or unlinking a node is O(1).',
            '<strong>No memory waste:</strong> Unlike arrays, you do not reserve unused capacity.',
            '<strong>Easy to merge and split:</strong> You can combine two lists or break one list into two by simply rewiring a few pointers.',
            '<strong>Foundation for other structures:</strong> Linked lists are used to implement stacks, queues, adjacency lists in graphs, and LRU caches.'
          ]
        },
        // G — Disadvantages
        {
          heading: 'Disadvantages',
          text: 'Linked lists trade random access and cache performance for flexibility.',
          list: [
            '<strong>O(n) access by index:</strong> To reach the i-th node you must walk from the head, unlike arrays which give O(1) random access.',
            '<strong>Poor cache locality:</strong> Nodes are scattered in memory, so CPU cache prefetching is much less effective than with arrays.',
            '<strong>Extra memory for pointers:</strong> Every node stores at least one pointer, which adds overhead compared to an array of raw values.',
            '<strong>More complex code:</strong> Pointer manipulation is error-prone and requires careful handling of null references and edge cases.',
            '<strong>No binary search:</strong> Because you cannot access the middle in O(1), binary search is not possible on a plain linked list.',
            '<strong>Reverse traversal is expensive:</strong> In a singly linked list you must reverse the list or use recursion to go backward.',
            '<strong>Debugging is harder:</strong> Memory layout is not visual; pointer bugs like cycles or lost references are easy to create and hard to trace.'
          ]
        },
        // H — Linked List Operations
        {
          heading: 'Linked List Operations',
          text: 'The table below summarizes the core operations. Each operation is then explained with its best efficient implementation, code, and a Mermaid visual.'
        },
        {
          heading: 'Operation 1: Traverse / Print',
          text: '<strong>What it does:</strong> Visit every node starting from the head and follow the next pointers until the end.<br/><strong>Best efficiency:</strong> Iterative traversal is O(n) time and O(1) space. Recursion is possible but uses O(n) stack space.',
          diagram: {
            caption: 'Traverse from head to tail',
            chart: `flowchart LR
    H[Head] --> N1[10] --> N2[20] --> N3[30] --> NULL[None]
    style H fill:#9b59b6,color:#fff
    style NULL fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def traverse(head):
    cur = head
    while cur:
        print(cur.val)
        cur = cur.next

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Append (Insert at Tail)',
          text: '<strong>What it does:</strong> Add a new node at the end of the list.<br/><strong>Best efficiency:</strong> Maintain a tail pointer for O(1) append. Without a tail pointer you must traverse to the end, making it O(n).',
          diagram: {
            caption: 'Append with tail pointer',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> T[30] --> NULL1[None]
    NNEW[NEW 40] --> NULL2[None]
    T -.-> NNEW
    style T fill:#f1c40f,color:#000
    style NNEW fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def append(head, tail, val):
    new_node = ListNode(val)
    if not head:
        return new_node, new_node
    tail.next = new_node
    return head, new_node

# With tail pointer: Time O(1), Space O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 3: Prepend (Insert at Head)',
          text: '<strong>What it does:</strong> Add a new node before the current head.<br/><strong>Best efficiency:</strong> Always O(1) time and O(1) space because only the head pointer changes.',
          diagram: {
            caption: 'Prepend a new head',
            chart: `flowchart LR
    NEW[NEW 5] --> A[10] --> B[20] --> C[30] --> NULL[None]
    H[Head] --> NEW
    style NEW fill:#2ecc71,color:#fff
    style H fill:#9b59b6,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def prepend(head, val):
    new_node = ListNode(val)
    new_node.next = head
    return new_node

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 4: Insert at Index',
          text: '<strong>What it does:</strong> Insert a new node at a specific position.<br/><strong>Best efficiency:</strong> Walk to the node before the target index (O(n) traversal) and rewire pointers in O(1). Total time is O(n).',
          diagram: {
            caption: 'Insert at index 2',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> C[30] --> NULL[None]
    B --> NEW[NEW 25]
    NEW --> C
    style NEW fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def insert(head, index, val):
    if index == 0:
        return prepend(head, val)
    new_node = ListNode(val)
    prev = get(head, index - 1)
    if not prev:
        return head
    new_node.next = prev.next
    prev.next = new_node
    return head

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 5: Delete at Index',
          text: '<strong>What it does:</strong> Remove the node at a specific position.<br/><strong>Best efficiency:</strong> Walk to the node before the target (O(n)) and rewire its next pointer to skip the target in O(1).',
          diagram: {
            caption: 'Remove node at index 2',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> C[30] --> NULL[None]
    B --> NULL
    style C fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def delete(head, index):
    if index == 0:
        return head.next if head else None
    prev = get(head, index - 1)
    if not prev or not prev.next:
        return head
    prev.next = prev.next.next
    return head

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 6: Search by Value',
          text: '<strong>What it does:</strong> Find the first node that contains a given value.<br/><strong>Best efficiency:</strong> Linear scan from the head. You cannot do better on an unsorted linked list.',
          diagram: {
            caption: 'Search for value 20',
            chart: `flowchart LR
    H[Head] --> A[10] --> B[20] --> C[30] --> NULL[None]
    style B fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def search(head, target):
    cur = head
    while cur:
        if cur.val == target:
            return True
        cur = cur.next
    return False

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 7: Reverse',
          text: '<strong>What it does:</strong> Flip every next pointer so the head becomes the tail and vice versa.<br/><strong>Best efficiency:</strong> Iterative three-pointer approach (prev, curr, next) in O(n) time and O(1) space.',
          diagram: {
            caption: 'Reverse the list',
            chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      H1[Head] --> A1[10] --> B1[20] --> C1[30] --> N1[None]
    end
    subgraph After[After]
      direction LR
      H2[Head] --> C2[30] --> B2[20] --> A2[10] --> N2[None]
    end
    Before ~~~ After`
          }
        },
        {
          heading: 'How the three-pointer reverse works',
          text: '<p>We walk the list once, keeping three variables: <strong>prev</strong> (the node we just reversed), <strong>curr</strong> (the node we are reversing now), and <strong>nxt</strong> (the node we will reverse next).</p><p><strong>Core idea:</strong> each node currently points forward. We rewire its <code>.next</code> to point <em>backward</em>, to the node we came from (<code>prev</code>). Before we overwrite <code>curr.next</code>, we save the rest of the list in <code>nxt</code> so we do not lose it.</p><ol><li><strong>Start:</strong> <code>prev = None</code>, <code>curr = head</code>. Nothing has been reversed yet, so the first node will point to None (which makes it the new tail).</li><li><strong>Each iteration:</strong><br/>• <code>nxt = curr.next</code> — remember the rest of the list.<br/>• <code>curr.next = prev</code> — flip this node’s pointer backward.<br/>• <code>prev = curr</code> — move prev forward.<br/>• <code>curr = nxt</code> — move curr forward.</li><li><strong>End:</strong> when <code>curr</code> becomes <code>None</code>, every pointer is flipped. <code>prev</code> now points to the last node, which is the new head.</li></ol><p><strong>Trace on [10 → 20 → 30]:</strong><br/>• Iteration 1: 10.next becomes None. List so far: <code>10 → None</code>.<br/>• Iteration 2: 20.next becomes 10. List so far: <code>20 → 10 → None</code>.<br/>• Iteration 3: 30.next becomes 20. List so far: <code>30 → 20 → 10 → None</code>.<br/>Return prev = 30 (the new head).</p>'
        },
        {
          text: 'Code:',
          code: `def reverse(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 8: Get / Set by Index',
          text: '<strong>What it does:</strong> Read or update the value at a specific index.<br/><strong>Best efficiency:</strong> Walk from the head exactly i steps. Both operations are O(n) because there is no random access.',
          diagram: {
            caption: 'Get value at index 2',
            chart: `flowchart LR
    H[Head] --> N0[0:10] --> N1[1:20] --> N2[2:30] --> NULL[None]
    style N2 fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def get(head, index):
    cur = head
    i = 0
    while cur and i < index:
        cur = cur.next
        i += 1
    return cur

def set_value(head, index, val):
    node = get(head, index)
    if node:
        node.val = val
        return True
    return False

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        // I — Complete Linked List Class (single, clean)
        {
          heading: 'Python Implementation',
          example: {
            title: 'Complete LinkedList Class in Python',
            code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, val):
        new = ListNode(val)
        if not self.head:
            self.head = self.tail = new
        else:
            self.tail.next = new
            self.tail = new
        self.length += 1

    def prepend(self, val):
        new = ListNode(val)
        new.next = self.head
        self.head = new
        if not self.tail:
            self.tail = new
        self.length += 1

    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        cur = self.head
        for _ in range(index):
            cur = cur.next
        return cur

    def insert(self, index, val):
        if index < 0 or index > self.length:
            return False
        if index == 0:
            self.prepend(val)
            return True
        prev = self.get(index - 1)
        if not prev:
            return False
        new = ListNode(val)
        new.next = prev.next
        prev.next = new
        if not new.next:
            self.tail = new
        self.length += 1
        return True

    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            removed = self.head
            self.head = self.head.next
            if not self.head:
                self.tail = None
            self.length -= 1
            return removed
        prev = self.get(index - 1)
        removed = prev.next
        prev.next = removed.next
        if not prev.next:
            self.tail = prev
        self.length -= 1
        return removed

    def reverse(self):
        prev, curr = None, self.head
        self.tail = self.head
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        self.head = prev

    def print_list(self):
        cur = self.head
        while cur:
            print(cur.val, end=" -> ")
            cur = cur.next
        print("None")

# Driver
ll = LinkedList()
for v in [10, 20, 30]:
    ll.append(v)
ll.print_list()          # 10 -> 20 -> 30 -> None
ll.insert(1, 15)
ll.print_list()          # 10 -> 15 -> 20 -> 30 -> None
ll.reverse()
ll.print_list()          # 30 -> 20 -> 15 -> 10 -> None`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Complete LinkedList Class in Java',
            code: `public class LinkedList {

    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    private ListNode head;
    private ListNode tail;
    private int length;

    public LinkedList() {
        head = tail = null;
        length = 0;
    }

    public void append(int val) {
        ListNode newNode = new ListNode(val);
        if (head == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        length++;
    }

    public void prepend(int val) {
        ListNode newNode = new ListNode(val);
        newNode.next = head;
        head = newNode;
        if (tail == null) tail = newNode;
        length++;
    }

    public ListNode get(int index) {
        if (index < 0 || index >= length) return null;
        ListNode cur = head;
        for (int i = 0; i < index; i++) cur = cur.next;
        return cur;
    }

    public boolean insert(int index, int val) {
        if (index < 0 || index > length) return false;
        if (index == 0) { prepend(val); return true; }
        ListNode prev = get(index - 1);
        if (prev == null) return false;
        ListNode newNode = new ListNode(val);
        newNode.next = prev.next;
        prev.next = newNode;
        if (newNode.next == null) tail = newNode;
        length++;
        return true;
    }

    public ListNode remove(int index) {
        if (index < 0 || index >= length) return null;
        if (index == 0) {
            ListNode removed = head;
            head = head.next;
            if (head == null) tail = null;
            length--;
            return removed;
        }
        ListNode prev = get(index - 1);
        ListNode removed = prev.next;
        prev.next = removed.next;
        if (prev.next == null) tail = prev;
        length--;
        return removed;
    }

    public void reverse() {
        ListNode prev = null, curr = head;
        tail = head;
        while (curr != null) {
            ListNode nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        head = prev;
    }

    public void printList() {
        ListNode cur = head;
        while (cur != null) {
            System.out.print(cur.val + " -> ");
            cur = cur.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        for (int v : new int[]{10, 20, 30}) ll.append(v);
        ll.printList();
        ll.insert(1, 15);
        ll.printList();
        ll.reverse();
        ll.printList();
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        // J — Complexity Summary
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of linked list operation complexities. Costs assume a singly linked list unless noted otherwise. The single most important rule: <strong>anything that requires reaching a position by index costs O(n)</strong>, because the only way to move through a linked list is to follow one <code>next</code> pointer at a time from the head.',
          table: {
            headers: ['Operation', 'Time', 'Space', 'Notes'],
            rows: [
              ['Traverse / Print', 'O(n)', 'O(1)', 'Visit every node once; the iterative version uses O(1) space, but a recursive traverse costs O(n) stack space.'],
              ['Append (with tail)', 'O(1)', 'O(1)', 'O(1) only because a tail pointer lets you rewire tail.next directly; without a tail pointer you must walk the whole list first, making it O(n).'],
              ['Prepend', 'O(1)', 'O(1)', 'Only the head pointer changes — no traversal needed. This is the linked list\'s biggest advantage over arrays, where inserting at the front shifts every element (O(n)).'],
              ['Insert at index', 'O(n)', 'O(1)', 'The splice itself is O(1) once you hold the node before the target; the O(n) is the price of walking there from the head.'],
              ['Delete at index', 'O(n)', 'O(1)', 'Same split as insert: O(n) to find the node before the target, O(1) to unlink it. Unlike arrays, no shifting of remaining elements is needed.'],
              ['Search by value', 'O(n)', 'O(1)', 'Linear scan is the best possible — nodes are scattered in memory with no random access, so binary search is impossible on a plain linked list.'],
              ['Reverse', 'O(n)', 'O(1)', 'Single pass with three pointers (prev, curr, nxt); only a few variables regardless of list size. A recursive reverse costs O(n) stack space.'],
              ['Get / Set by index', 'O(n)', 'O(1)', 'Arrays map arr[i] to a memory address via offset arithmetic (O(1)); here the i-th node is only reachable by following i pointers from the head.']
            ]
          },
          note: 'Interview tip: when asked for the cost of a linked list operation, always separate "cost to reach the position" (O(n) by pointer walking) from "cost to rewire the pointers" (O(1)). Stating both shows you understand where the time actually goes. Also remember the list itself uses O(n) space with per-node pointer overhead — one extra pointer per node for singly linked, two for doubly linked.'
        },
        // K — Applications
        {
          heading: 'Real-World Applications',
          text: 'Linked lists are hidden inside many systems you use every day. Each example below shows the same pattern: the linked list is chosen because the workload is dominated by <strong>frequent insertions, deletions, or reordering</strong> — exactly the operations a linked list does in O(1) — while random access by index is rarely or never needed.',
          list: [
            '<strong>LRU Cache (e.g. Redis, browser caches, OS page caches):</strong> An LRU cache keeps the most recently used items and evicts the least recently used one when full. It combines a <em>hash map</em> (key → node) with a <em>doubly linked list</em> ordered from most to least recently used. Every read or write moves that node to the front; eviction simply unlinks the tail node. Moving and unlinking nodes is O(1) with a doubly linked list — this exact structure is a classic interview question (LeetCode 146).',
            '<strong>Browser history (Back / Forward buttons):</strong> Each page you visit is a node with <code>prev</code> and <code>next</code> pointers. Clicking Back moves a cursor one node toward the past; clicking Forward moves it toward the present. Visiting a new page after going Back discards the "forward" nodes and appends a new one — natural pointer surgery that an array would handle awkwardly.',
            '<strong>Undo / Redo in text editors:</strong> Every edit (typing, deleting, pasting) is stored as a node in a chain of document states. Undo walks the chain one step back; Redo walks it forward. Because new edits can branch off after an undo, a linked structure lets the editor grow or trim the history cheaply without copying large arrays of snapshots.',
            '<strong>Music / video playlists:</strong> A playlist node holds the current track plus pointers to the next and previous tracks. The "next" and "previous" buttons are just pointer hops (O(1)), and reordering your queue — dragging a song to a new position — is rewiring two or three pointers instead of shifting a big array.',
            '<strong>Operating system memory management:</strong> The OS tracks free blocks of heap memory in a <em>free list</em> — a linked list where each free block points to the next free block. When a program requests memory (e.g. <code>malloc</code>), the allocator walks the list to find a big enough block; when memory is freed, the block is spliced back into the list. Blocks are scattered in memory, so a linked list is the natural way to chain them.',
            '<strong>Process / task scheduling (round-robin):</strong> When an OS or a load balancer gives every task a fixed time slice in turn, a <em>circular</em> linked list is a perfect fit: after the last task runs, its <code>next</code> pointer wraps back to the first, so the scheduler keeps cycling without ever checking "am I at the end?"',
            '<strong>Blockchain:</strong> Each block stores the cryptographic hash of the previous block — essentially a <code>prev</code> pointer. The blocks form a chain back to the very first block (the genesis block). If anyone alters an old block, its hash changes and every later block\'s stored <code>prev</code> hash no longer matches — that is how the chain detects tampering.',
            '<strong>Image viewers and photo galleries:</strong> The "next photo" / "previous photo" navigation in gallery apps is a doubly linked list of images: each photo knows its neighbors, so stepping in either direction is O(1) no matter how large the album is.'
          ],
          note: 'Notice the common thread: none of these systems ever ask "give me the element at index 500". They all navigate from a current position to a neighbor, or insert/remove at a known spot. When that is the access pattern, a linked list beats an array.'
        },
        // L — Interview Practice Questions (each an accordion, default closed)
        {
          heading: 'Top Interview Questions on Linked Lists',
          text: 'The eighteen most frequently asked linked list interview questions are below — each in its own collapsible card with the key idea, a solved answer, and its complexity. Questions 1–13 use a singly linked list; Questions 14–18 are the doubly linked list variants. Master the three recurring patterns — <strong>fast/slow pointers</strong>, <strong>dummy nodes</strong>, and <strong>in-place reversal</strong> — and nearly every linked list problem becomes a variation of these.',
          note: 'Pattern cheat sheet: fast/slow pointers solve "find the middle", "detect a cycle", and "k-th from the end"; a dummy node solves any problem that might modify the head; in-place reversal solves "process the second half in reverse" problems. Interviewers rarely ask brand-new linked list questions — they ask these eighteen in disguise.'
        },
        {
          heading: 'Practice Question 1: Reverse a Linked List (LeetCode 206, Easy)',
          text: '<strong>Problem:</strong> Given the head of a singly linked list, reverse it and return the new head.<br/><strong>Key idea:</strong> Walk once with three pointers. Save <code>curr.next</code> in <code>nxt</code> before flipping <code>curr.next</code> backward to <code>prev</code>, then advance both pointers. When <code>curr</code> falls off the end, <code>prev</code> is the new head. This is exactly Operation 7 from this page.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def reverse_list(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next         # save the rest of the list
        curr.next = prev        # flip the pointer backward
        prev, curr = curr, nxt  # advance both pointers
    return prev                 # prev is the new head`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Linked List Cycle (LeetCode 141, Easy)',
          text: '<strong>Problem:</strong> Return true if the list contains a cycle (some node can be reached again by following next pointers).<br/><strong>Key idea:</strong> Floyd\'s tortoise and hare. Move <code>slow</code> one step and <code>fast</code> two steps. If there is no cycle, <code>fast</code> reaches the end. If there is one, both pointers eventually enter the loop, and <code>fast</code> closes the gap to <code>slow</code> by exactly one node per step — it can never skip past forever, so they must meet. A hash set of visited nodes also works but costs O(n) space.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Middle of the Linked List (LeetCode 876, Easy)',
          text: '<strong>Problem:</strong> Return the middle node of the list. For even lengths, return the second middle node.<br/><strong>Key idea:</strong> The same fast/slow pattern as Question 2. <code>fast</code> moves twice as fast as <code>slow</code>, so when <code>fast</code> reaches the end, <code>slow</code> has covered exactly half the list. No need to count the length first — this finds the middle in a single pass.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Merge Two Sorted Lists (LeetCode 21, Easy)',
          text: '<strong>Problem:</strong> Merge two sorted linked lists into one sorted list and return its head.<br/><strong>Key idea:</strong> Use a <strong>dummy node</strong> as a fake head so you never special-case the first node. Keep a <code>tail</code> pointer at the end of the merged list, repeatedly attach whichever input head is smaller, and advance that input. When one list runs out, attach the remainder of the other — it is already sorted.<br/><strong>Complexity:</strong> Time O(n + m), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next, l1 = l1, l1.next
        else:
            tail.next, l2 = l2, l2.next
        tail = tail.next
    tail.next = l1 or l2    # attach the non-empty remainder
    return dummy.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Remove Nth Node From End of List (LeetCode 19, Medium)',
          text: '<strong>Problem:</strong> Remove the n-th node counting from the end of the list, in one pass.<br/><strong>Key idea:</strong> Two pointers with a fixed gap. Start both at a dummy node, move <code>fast</code> n + 1 steps ahead, then advance both until <code>fast</code> is None. The +1 makes <code>slow</code> stop at the node <em>before</em> the target, so you can unlink it with <code>slow.next = slow.next.next</code>. The dummy node also handles deleting the head cleanly.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    slow = fast = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        slow, fast = slow.next, fast.next
    slow.next = slow.next.next   # unlink the target
    return dummy.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Intersection of Two Linked Lists (LeetCode 160, Easy)',
          text: '<strong>Problem:</strong> Find the node where two singly linked lists merge into one shared tail, or return None if they never intersect.<br/><strong>Key idea:</strong> The pointer-switching trick. Walk pointer <code>a</code> through list A, and when it reaches the end send it to the head of list B; do the mirror for <code>b</code>. Both then travel exactly lenA + lenB steps, so any length difference cancels out — they arrive at the intersection node at the same time, or both reach None together if there is no intersection.<br/><strong>Complexity:</strong> Time O(n + m), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def get_intersection_node(headA, headB):
    a, b = headA, headB
    while a is not b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a    # intersection node, or None`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Palindrome Linked List (LeetCode 234, Easy)',
          text: '<strong>Problem:</strong> Return true if the list reads the same forward and backward.<br/><strong>Key idea:</strong> Combine three patterns you already know: (1) find the middle with fast/slow pointers (Question 3), (2) reverse the second half in place (Question 1), (3) walk both halves comparing values. Any mismatch means it is not a palindrome. This avoids copying values into an array, which would cost O(n) extra space.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def is_palindrome(head):
    slow = fast = head
    while fast and fast.next:    # step 1: find middle
        slow, fast = slow.next, fast.next.next
    second = reverse_list(slow)  # step 2: reverse second half
    first = head
    while second:                # step 3: compare both halves
        if first.val != second.val:
            return False
        first, second = first.next, second.next
    return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Find Kth Node From End (Classic Interview Question)',
          text: '<strong>Problem:</strong> Return the k-th node counting from the end of the list (k = 1 means the last node), or None if k is larger than the list length.<br/><strong>Key idea:</strong> The same two-pointer gap trick as Question 5. Move <code>fast</code> exactly k steps ahead; if it runs off the end during those k steps, k is out of range. Then advance both pointers together — when <code>fast</code> reaches None, <code>slow</code> is exactly k nodes behind it, i.e. the k-th from the end. One pass, no length counting.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def find_kth_from_end(head, k):
    slow = fast = head
    for _ in range(k):
        if not fast:
            return None       # k is larger than the list length
        fast = fast.next
    while fast:
        slow, fast = slow.next, fast.next
    return slow               # k-th node from the end`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 9: Remove Duplicates (Classic Interview Question)',
          text: '<strong>Problem:</strong> Remove all duplicate values from an <em>unsorted</em> linked list, keeping the first occurrence of each value.<br/><strong>Key idea:</strong> Walk once with a <code>prev</code> pointer and a hash set of values seen so far. If the next node\'s value is already in the set, unlink it; otherwise record the value and advance. The set gives O(1) lookup, so the whole pass is linear. (Follow-up: without extra space, compare each node against the rest of the list — O(n²) time, O(1) space. If the list were <em>sorted</em>, duplicates are adjacent and no set is needed at all.)<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def remove_duplicates(head):
    seen = set()
    dummy = ListNode(0, head)
    prev = dummy
    while prev.next:
        if prev.next.val in seen:
            prev.next = prev.next.next   # unlink the duplicate
        else:
            seen.add(prev.next.val)
            prev = prev.next
    return dummy.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 10: Binary to Decimal (LeetCode 1290, Easy)',
          text: '<strong>Problem:</strong> The list stores a binary number with the most significant bit at the head. Convert it to its decimal value.<br/><strong>Key idea:</strong> Horner\'s rule. Walking left to right, each new bit is the least significant bit of the result so far — so double the accumulated value and add the current bit. No powers, no exponentiation, no string conversion.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def binary_to_decimal(head):
    value = 0
    while head:
        value = value * 2 + head.val   # shift left, add current bit
        head = head.next
    return value`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 11: Partition List (LeetCode 86, Medium)',
          text: '<strong>Problem:</strong> Given a value x, rearrange the list so all nodes less than x come before all nodes greater than or equal to x, preserving the original relative order within each group.<br/><strong>Key idea:</strong> Build two new chains with dummy heads — one for nodes <code>&lt; x</code>, one for nodes <code>&gt;= x</code> — appending each node as you scan (which preserves relative order automatically). Then connect the tail of the "before" chain to the head of the "after" chain, and <strong>null-terminate the after chain</strong> — forgetting that last step leaves a stale <code>next</code> pointer and creates a cycle.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def partition(head, x):
    before = ListNode(0)
    after = ListNode(0)
    b_tail, a_tail = before, after
    while head:
        if head.val < x:
            b_tail.next = head
            b_tail = head
        else:
            a_tail.next = head
            a_tail = head
        head = head.next
    a_tail.next = None        # terminate the combined list
    b_tail.next = after.next  # join: before-list then after-list
    return before.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 12: Reverse Between (LeetCode 92, Medium)',
          text: '<strong>Problem:</strong> Reverse only the nodes between positions <code>left</code> and <code>right</code> (1-indexed) in a single pass, leaving the rest of the list untouched.<br/><strong>Key idea:</strong> Walk <code>prev</code> to the node just before the segment. Then repeat <code>right - left</code> times: pull the node after <code>curr</code> out of the segment and re-insert it right after <code>prev</code> (the segment front). Each insertion pushes the reversed prefix one node longer while <code>curr</code> stays anchored as the segment\'s tail. The dummy node keeps the <code>left = 1</code> case identical to every other.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def reverse_between(head, left, right):
    dummy = ListNode(0, head)
    prev = dummy
    for _ in range(left - 1):
        prev = prev.next          # node before the segment
    curr = prev.next              # first node of the segment
    for _ in range(right - left):
        nxt = curr.next
        curr.next = nxt.next      # pull nxt out of the segment
        nxt.next = prev.next      # insert nxt at the front
        prev.next = nxt
    return dummy.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 13: Swap Nodes in Pairs (LeetCode 24, Medium)',
          text: '<strong>Problem:</strong> Swap every two adjacent nodes and return the head — swap the nodes themselves, not just their values.<br/><strong>Key idea:</strong> With a dummy node, keep a <code>prev</code> pointer before each pair. For nodes <code>first</code> and <code>second</code>, do a three-step rewiring: <code>first.next</code> skips to after the pair, <code>second.next</code> points back to <code>first</code>, and <code>prev.next</code> adopts <code>second</code> as the new front. Then advance <code>prev</code> to <code>first</code> (now the second node of the swapped pair) and repeat. An odd leftover node is left in place automatically.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def swap_pairs(head):
    dummy = ListNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        first = prev.next
        second = first.next
        first.next = second.next
        second.next = first
        prev.next = second
        prev = first              # advance to the next pair
    return dummy.next`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 14: Palindrome Checker — Doubly Linked List (Classic Interview Question)',
          text: '<strong>Problem:</strong> Given the head of a doubly linked list, return true if the values read the same forward and backward.<br/><strong>Key idea:</strong> Much simpler than the singly linked version (Question 7) — the <code>prev</code> pointers do the backward walking for you, so no reversal is needed. Walk one pointer to the tail, then move the head pointer forward and the tail pointer backward, comparing values until they meet or cross. The loop condition <code>head is not tail and head.prev is not tail</code> handles both odd and even lengths.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def is_palindrome_dll(head):
    if not head:
        return True
    tail = head
    while tail.next:           # find the tail using next pointers
        tail = tail.next
    while head is not tail and head.prev is not tail:
        if head.val != tail.val:
            return False
        head = head.next
        tail = tail.prev       # walk backward with prev pointers
    return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 15: Reverse — Doubly Linked List (Classic Interview Question)',
          text: '<strong>Problem:</strong> Reverse a doubly linked list in place and return the new head.<br/><strong>Key idea:</strong> Easier than the singly linked reverse: because every node carries both pointers, you do not need <code>prev</code>/<code>nxt</code> helper variables at all. Walk once and <strong>swap each node\'s own <code>prev</code> and <code>next</code></strong>. After the swap, the node you should visit next is reachable through the node\'s (new) <code>prev</code>. The last node you process becomes the new head.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def reverse_dll(head):
    curr = head
    new_head = None
    while curr:
        curr.prev, curr.next = curr.next, curr.prev
        new_head = curr
        curr = curr.prev       # after the swap, prev holds the old next
    return new_head`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 16: Partition List — Doubly Linked List (LeetCode 86 style, Medium)',
          text: '<strong>Problem:</strong> Given a value x, rearrange a doubly linked list so all nodes less than x come before all nodes greater than or equal to x, preserving the original relative order within each group.<br/><strong>Key idea:</strong> Same two-dummy-chain strategy as the singly linked Question 11, but every time you attach a node you must set <strong>both</strong> its <code>prev</code> and <code>next</code> — detach the node fully first, then wire it into its chain. After joining the chains, fix the join point\'s <code>prev</code> and null out the new head\'s <code>prev</code>. Forgetting any one of these leaves a dangling pointer that corrupts backward traversal.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def partition_dll(head, x):
    before = DLNode(0)
    after = DLNode(0)
    b_tail, a_tail = before, after
    curr = head
    while curr:
        nxt = curr.next
        curr.prev = curr.next = None   # fully detach the node
        if curr.val < x:
            b_tail.next = curr
            curr.prev = b_tail
            b_tail = curr
        else:
            a_tail.next = curr
            curr.prev = a_tail
            a_tail = curr
        curr = nxt
    b_tail.next = after.next
    if after.next:
        after.next.prev = b_tail
    new_head = before.next
    if new_head:
        new_head.prev = None
    return new_head`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 17: Reverse Between — Doubly Linked List (LeetCode 92 style, Medium)',
          text: '<strong>Problem:</strong> Reverse only the nodes between positions <code>left</code> and <code>right</code> (1-indexed) of a doubly linked list, leaving the rest untouched.<br/><strong>Key idea:</strong> Break the problem into three clean steps: (1) locate the segment and <strong>detach</strong> it from the list (null its boundary <code>prev</code>/<code>next</code> pointers), (2) reverse the detached segment using the swap-pointers technique from Question 15, (3) reconnect it between <code>before</code> and <code>after</code>, wiring all four boundary pointers (two <code>next</code>, two <code>prev</code>). Detaching first keeps the reversal logic identical to a full-list reverse.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def reverse_between_dll(head, left, right):
    if not head or left == right:
        return head
    dummy = DLNode(0)
    dummy.next = head
    head.prev = dummy
    before = dummy
    for _ in range(left - 1):
        before = before.next
    seg_start = before.next
    seg_end = seg_start
    for _ in range(right - left):
        seg_end = seg_end.next
    after = seg_end.next
    # detach the segment
    seg_start.prev = None
    seg_end.next = None
    if after:
        after.prev = None
    # reverse the segment in place (swap prev/next per node)
    curr = seg_start
    new_start = None
    while curr:
        curr.prev, curr.next = curr.next, curr.prev
        new_start = curr
        curr = curr.prev
    # reconnect: before <-> reversed segment <-> after
    before.next = new_start
    new_start.prev = before
    seg_start.next = after
    if after:
        after.prev = seg_start
    new_head = dummy.next
    new_head.prev = None
    return new_head`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 18: Swap Nodes in Pairs — Doubly Linked List (LeetCode 24 style, Medium)',
          text: '<strong>Problem:</strong> Swap every two adjacent nodes of a doubly linked list — swap the nodes themselves, not their values.<br/><strong>Key idea:</strong> Same skeleton as the singly linked Question 13, but each pair swap now touches <strong>six pointers</strong>: the pair\'s two <code>next</code>, their two <code>prev</code>, the link from the node before the pair, and the <code>prev</code> of the node after the pair. Write it as a fixed six-line rewiring ritual and the pointer soup disappears — <code>nxt.prev = first</code> is the line people most often forget.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def swap_pairs_dll(head):
    dummy = DLNode(0)
    dummy.next = head
    if head:
        head.prev = dummy
    prev = dummy
    while prev.next and prev.next.next:
        first = prev.next
        second = first.next
        nxt = second.next
        second.prev = prev
        second.next = first
        first.prev = second
        first.next = nxt
        if nxt:
            nxt.prev = first     # the most-forgotten pointer
        prev.next = second
        prev = first             # first is now the pair\'s second node
    new_head = dummy.next
    if new_head:
        new_head.prev = None
    return new_head`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 5 — Stacks
    // ─────────────────────────────────────────────────────────────────────────
    'stacks': stacksTopic,

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 6 — Queues
    // ─────────────────────────────────────────────────────────────────────────
    'queues': queuesTopic,

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 7 — Hash Maps
    // ─────────────────────────────────────────────────────────────────────────
    'hashmaps': hashmapsTopic,

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 8 — Sets
    // ─────────────────────────────────────────────────────────────────────────
    'sets': setsTopic,

  }
};
