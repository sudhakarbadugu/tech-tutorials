// DSA Module 1 — enhanced interview-ready content
// Merged from dsa_m1.js — regenerate: node scripts/merge-dsa-m1.js

export const dsaModule1Structure = {
  module1: {
    title: 'Module 1: Core Linear Structures',
    topics: [
      {
        id: 'big-o',
        title: 'Big-O Notation & Complexity Analysis'
      },
      {
        id: 'arrays',
        title: 'Arrays'
      },
      {
        id: 'strings',
        title: 'Strings'
      },
      {
        id: 'linked-lists',
        title: 'Linked Lists (Singly & Doubly)'
      },
      {
        id: 'stacks',
        title: 'Stacks'
      },
      {
        id: 'queues',
        title: 'Queues'
      },
      {
        id: 'hashmaps',
        title: 'Hash Maps'
      },
      {
        id: 'sets',
        title: 'Sets'
      }
    ]
  }
};

export const dsaModule1Content = {
  module1: {
    'big-o': {
      title: 'Big-O Notation & Complexity Analysis',
      subtitle: 'The language every interviewer speaks',
      sections: [
        {
          heading: 'What is Big-O Notation?',
          text: `Big-O notation describes the upper bound of an algorithm's runtime or space usage as the input size grows toward infinity. It is the universal language interviewers use to evaluate your solutions — knowing it cold is non-negotiable.`,
          list: [
            '<strong>O(1) — Constant:</strong> Runtime does not depend on input size. Example: array index access, hash map lookup.',
            '<strong>O(log n) — Logarithmic:</strong> Input is halved at each step. Example: binary search, balanced BST operations.',
            '<strong>O(n) — Linear:</strong> Runtime grows proportionally to input. Example: linear scan, single loop over an array.',
            '<strong>O(n log n) — Linearithmic:</strong> Typical of efficient sorting algorithms. Example: merge sort, heap sort, TimSort.',
            '<strong>O(n²) — Quadratic:</strong> Nested loops over the same data. Example: bubble sort, naive duplicate detection.',
            '<strong>O(2^n) — Exponential:</strong> Runtime doubles with each additional input element. Example: naive recursive Fibonacci, power set generation.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Big-O captures the <em>growth rate</em> of resource consumption, not the exact count of operations. When we say an algorithm is O(n), we mean that as n doubles, the runtime roughly doubles too. Constants and lower-order terms are dropped because they become irrelevant at scale — O(3n + 50) simplifies to O(n).</p>',
            '<p><strong>Omega (Ω) — Best Case:</strong> Omega describes the best-case scenario for an algorithm. In simple terms, it tells you the fastest an algorithm can run under the most favorable circumstances. Example: finding the first element in an unsorted array is Ω(1) because you might get lucky and find it immediately.</p>',
            '<p><strong>Theta (Θ) — Average Case:</strong> Theta describes the tight bound — the average-case scenario. In simple terms, it tells you what to generally expect in terms of time complexity. When an algorithm is both O(f(n)) and Ω(f(n)), we say it is Θ(f(n)). Example: randomized quicksort averages Θ(n log n) over many runs.</p>',
            '<p><strong>Big O (O) — Worst Case:</strong> Big-O describes the worst-case scenario for an algorithm. In simple terms, it tells you the slowest an algorithm can run in the worst circumstances. This is the guarantee you must always defend in interviews. Example: bubble sort is O(n²) because every element may need to be compared with every other element.</p>',
            `<p><strong>Amortized analysis</strong> averages the cost of an operation over a sequence of operations. Python's list append is a perfect example: most appends are O(1), but occasionally the underlying array must be resized (O(n)). Averaged over n appends, however, each append costs O(1) amortized because the resize cost is spread across all prior cheap operations.</p>`
          ],
          note: 'Rule: drop constants and non-dominant terms. O(n + n²) → O(n²). O(500) → O(1).'
        },
        {
          heading: 'Other Concepts: Simplification Rules',
          content: [
            '<p><strong>Drop Non-Dominant Terms:</strong> In expressions like O(n² + n), always focus on the term that dominates for large n. As n grows toward infinity, n² grows much faster than n, so O(n² + n) simplifies to O(n²). Similarly, O(n³ + n² + n) simplifies to O(n³).</p>',
            '<p><strong>Drop Constants:</strong> Constant multipliers are irrelevant in Big-O because we care about growth rate, not exact operation counts. O(2n) simplifies to O(n). O(500) simplifies to O(1). O(3n² + 50n + 100) simplifies to O(n²).</p>'
          ],
          note: 'Why drop? Because Big-O describes behavior as n → ∞. At n = 1,000,000, the difference between 2n and n is trivial compared to the difference between n and n².'
        },
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
        {
          heading: 'Time & Space Complexity',
          text: 'Key complexity classes ordered from fastest to slowest, with representative examples and scalability guidance:',
          table: {
            headers: [
              'Name',
              'Notation',
              'Example DS / Op',
              'Scales to 10^6?'
            ],
            rows: [
              [
                'Constant',
                'O(1)',
                'Array index, HashMap get',
                'Yes — always'
              ],
              [
                'Logarithmic',
                'O(log n)',
                'Binary search, BST lookup',
                'Yes — ~20 ops'
              ],
              [
                'Linear',
                'O(n)',
                'Array scan, HashMap build',
                'Yes — tight budget'
              ],
              [
                'Linearithmic',
                'O(n log n)',
                'Merge sort, Heap sort',
                'Yes — ~20M ops'
              ],
              [
                'Quadratic',
                'O(n²)',
                'Bubble sort, nested loops',
                'No — 10^12 ops'
              ],
              [
                'Cubic',
                'O(n³)',
                'Floyd-Warshall (dense graph)',
                'No — 10^18 ops'
              ],
              [
                'Exponential',
                'O(2^n)',
                'Recursive Fibonacci, power set',
                'No — astronomically large'
              ],
              [
                'Factorial',
                'O(n!)',
                'Brute-force permutations, TSP',
                'No — n=20 already kills'
              ]
            ]
          }
        },
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
        {
          heading: 'Practice Problems',
          list: [
            `Q1: What is the time complexity of finding the maximum element in an unsorted array of n elements, and why?
Ans: O(n) — you must examine every element at least once because there is no ordering information to exploit. You cannot skip any element, so the lower bound is also O(n).`,
            `Q2: An algorithm has two phases: Phase 1 sorts the input in O(n log n); Phase 2 does a single pass in O(n). What is the overall complexity?
Ans: O(n log n). When adding complexities of sequential phases, take the dominant term. O(n log n) + O(n) = O(n log n) because n log n grows faster than n for large n.`,
            `Q3 (Hard): A function recurses on halves of the array (like merge sort) and does O(n) work at each recursion level. How many levels exist, and what is the total complexity?
Ans: O(n log n). There are log n recursion levels because halving n takes log n steps to reach 1. Each level does a combined O(n) work across all calls at that level. Total = log n levels × O(n) per level = O(n log n). This is the Master Theorem case: T(n) = 2T(n/2) + O(n).`
          ]
        }
      ]
    },
    arrays: {
      title: 'Arrays',
      subtitle: 'Contiguous memory — the fastest way to read data',
      sections: [
        {
          heading: 'What is an Array?',
          text: 'An array is a linear data structure that stores elements of the same type in a single contiguous block of memory. Because every element sits right next to its neighbor, the position of any element can be computed directly from its index — this is what makes arrays the fastest data structure for reading data. Arrays are the foundation that almost every other structure (strings, hash tables, heaps, matrices) is built on top of.',
          list: [
            '<strong>Contiguous memory:</strong> All elements occupy one unbroken block of addresses — element i+1 is stored immediately after element i.',
            '<strong>Index addressing:</strong> Every element is reachable by a zero-based integer index. The address of element i is computed, not searched for.',
            '<strong>Fixed vs growable:</strong> A <em>static</em> array (C, Java <code>int[]</code>) has a fixed capacity decided at creation. A <em>dynamic</em> array (Python list, Java ArrayList, C++ vector) hides a static array inside and grows it automatically when full.',
            '<strong>Cache-friendliness:</strong> When the CPU loads one element, it pulls the neighboring elements into cache for free. Sequential iteration over an array is therefore dramatically faster in practice than chasing pointers scattered across memory.',
            '<strong>Homogeneous elements:</strong> In low-level languages every element is the same size, which is what makes index math exact. Python lists store same-sized pointers to objects, keeping the same property.'
          ]
        },
        {
          heading: 'Array Anatomy: Contiguous Memory',
          text: 'Imagine an array of five 8-byte integers stored starting at memory address 1000. Because the elements are contiguous and equal-sized, the address of any element is pure arithmetic: <strong>address(i) = base_address + i × element_size</strong>. There is no searching, no pointer chasing — one multiply and one add.',
          diagram: {
            caption: 'arr = [10, 20, 30, 40, 50], base address 1000, 8 bytes per element',
            chart: `flowchart LR
    A["idx 0: 10<br/>addr 1000"] --> B["idx 1: 20<br/>addr 1008"] --> C["idx 2: 30<br/>addr 1016"] --> D["idx 3: 40<br/>addr 1024"] --> E["idx 4: 50<br/>addr 1032"]
    style C fill:#f1c40f,color:#000`
          }
        },
        {
          text: '<strong>Why access is O(1):</strong> to read <code>arr[3]</code>, the CPU computes 1000 + 3 × 8 = 1024 and reads that single address. The work is identical whether the array has five elements or five million — the index never requires looking at any other element. This is <em>random access</em>, and no linked structure can match it.'
        },
        {
          heading: 'Static vs Dynamic Arrays',
          text: 'A <strong>static array</strong> allocates its full capacity up front and can never grow — you must know (or bound) the size in advance. A <strong>dynamic array</strong> starts with a modest capacity and replaces its backing buffer with a bigger one (usually double the size) whenever it runs out of room, copying the existing elements over. You get growable storage while keeping O(1) index access.',
          diagram: {
            caption: 'Static array: capacity 4 is fixed forever — element 5 has nowhere to go',
            chart: `flowchart LR
    A["0: 10"] --> B["1: 20"] --> C["2: 30"] --> D["3: 40"]
    X["5th element?"] -.->|no room| D
    style X fill:#e74c3c,color:#fff`
          }
        },
        {
          diagram: {
            caption: 'Dynamic array: full capacity 4 → allocate new capacity 8, copy, then append',
            chart: `flowchart LR
    subgraph Full["Before: capacity 4, size 4, full"]
      direction LR
      F1["0: 10"] --> F2["1: 20"] --> F3["2: 30"] --> F4["3: 40"]
    end
    subgraph Grown["After: capacity 8, size 5"]
      direction LR
      G1["0: 10"] --> G2["1: 20"] --> G3["2: 30"] --> G4["3: 40"] --> G5["4: 50"] --> G6["5: empty"] --> G7["6: empty"] --> G8["7: empty"]
    end
    Full ~~~ Grown
    style G5 fill:#2ecc71,color:#fff`
          }
        },
        {
          text: '<strong>Why append is amortized O(1):</strong> a resize costs O(n) because every element is copied. But doubling means resizes happen at sizes 4, 8, 16, 32, ... — after n appends, the total copy work is roughly 1 + 2 + 4 + ... + n ≈ 2n, which averages out to a constant cost per append. Most appends are a single write; the rare expensive resize is "paid for" by all the cheap appends before it.'
        },
        {
          heading: 'Advantages',
          text: 'Arrays are the default choice when the workload is dominated by reading, indexing, and iterating.',
          list: [
            '<strong>O(1) access by index:</strong> Offset arithmetic maps any index straight to a memory address — the single biggest advantage over linked structures.',
            '<strong>Cache locality:</strong> Contiguous storage means the CPU prefetcher loads upcoming elements before you ask for them. Iterating an array is often 10–100× faster in practice than iterating a linked list of the same size.',
            '<strong>Memory density:</strong> An array stores pure data — no per-node pointers, no per-node allocation headers. A linked list of 64-bit integers uses 2–3× the memory for the same values.',
            '<strong>Simple, fast iteration:</strong> A plain <code>for</code> loop over indices is the tightest loop a CPU can run — sequential addresses, predictable branching, vectorization-friendly.',
            '<strong>Binary search when sorted:</strong> Random access means you can jump to the middle in O(1), so a sorted array supports O(log n) lookup — impossible on a linked list.'
          ]
        },
        {
          heading: 'Disadvantages',
          text: 'Arrays pay for fast reads with expensive structural changes.',
          list: [
            '<strong>O(n) insert or delete in the middle:</strong> Every element after the affected position must shift one slot to keep the block contiguous — on average half the array moves.',
            '<strong>Fixed size for static arrays:</strong> Capacity is decided at creation; too small and you are stuck, too big and memory sits unused.',
            '<strong>Resize cost for dynamic arrays:</strong> Growth is O(n) when it happens (amortized away, but a real latency spike — bad for hard real-time systems), and the old buffer must be copied and freed.',
            '<strong>Wasted capacity:</strong> A dynamic array typically holds 25–50% empty slots so it has room to grow; a just-resized array of n elements may reserve 2n slots.',
            '<strong>Contiguous memory requirement:</strong> A one-billion-element array needs one unbroken multi-gigabyte block. On a fragmented heap, allocation can fail even when plenty of total memory is free.'
          ]
        },
        {
          heading: 'Array Operations',
          text: 'The eight core operations below are each explained with their best efficient implementation, a Mermaid visual of the memory layout, and runnable Python code.'
        },
        {
          heading: 'Operation 1: Traverse / Print',
          text: '<strong>What it does:</strong> Visit every element from index 0 to n − 1 in order.<br/><strong>Best efficiency:</strong> A simple index loop is O(n) time and O(1) space — and because the elements are contiguous, the CPU prefetcher makes it extremely fast in practice.',
          diagram: {
            caption: 'Visit indices 0 → 4 in sequence',
            chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"] --> E["4:50"]
    style A fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def traverse(arr):
    for i in range(len(arr)):
        print(i, "->", arr[i])

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Access by Index',
          text: '<strong>What it does:</strong> Read the element at a given index.<br/><strong>Best efficiency:</strong> Always O(1) — the address is computed as base + index × element_size, so no other element is ever touched. This is the operation arrays are built for.',
          diagram: {
            caption: 'Access arr[2]: address = 1000 + 2 × 8 = 1016',
            chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"] --> E["4:50"]
    style C fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def access(arr, index):
    if index < 0 or index >= len(arr):
        raise IndexError("index out of range")
    return arr[index]          # base + index * element_size

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 3: Append',
          text: '<strong>What it does:</strong> Add a new element after the current last one.<br/><strong>Best efficiency:</strong> O(1) amortized on a dynamic array — usually a single write into a spare slot; when the backing store is full it is doubled and copied first (O(n) that one time).',
          diagram: {
            caption: 'Append 40 into the spare slot at index 3',
            chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> N["3:40 new"]
    style N fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def append(arr, val):
    arr.append(val)   # writes into spare capacity, or doubles first if full

# Time: O(1) amortized, Space: O(1)
# The one-in-a-while resize is O(n), but doubling makes it rare.`,
          language: 'python'
        },
        {
          heading: 'Operation 4: Insert at Index',
          text: '<strong>What it does:</strong> Place a new element at a specific index, keeping the existing order.<br/><strong>Best efficiency:</strong> O(n) — reaching the slot is O(1), but every element from that index onward must shift one position right to open a gap. Worst case is inserting at index 0, which moves all n elements.',
          diagram: {
            caption: 'Insert 15 at index 1: 20 and 30 shift right first',
            chart: `flowchart LR
    A["0:10"] --> N["1:15 new"] --> B["2:20"] --> C["3:30"]
    style N fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def insert(arr, index, val):
    arr.append(None)                       # grow by one slot
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]                # shift right, from the back
    arr[index] = val

# Time: O(n) due to shifting, Space: O(1) extra`,
          language: 'python'
        },
        {
          heading: 'Operation 5: Delete at Index',
          text: '<strong>What it does:</strong> Remove the element at a given index and close the gap.<br/><strong>Best efficiency:</strong> O(n) — after removing the element, every element to its right must shift one position left so the block stays contiguous. Deleting the last element is O(1); deleting the first moves all n − 1 elements.',
          diagram: {
            caption: 'Delete index 1: 30 and 40 shift left over the gap',
            chart: `flowchart LR
    A["0:10"] --> B["1:20 del"] --> C["2:30"] --> D["3:40"]
    style B fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def delete(arr, index):
    removed = arr[index]
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]                # shift left to fill the gap
    arr.pop()                              # drop the duplicated last slot
    return removed

# Time: O(n) due to shifting, Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 6: Search by Value',
          text: '<strong>What it does:</strong> Find the index of the first element equal to a target value.<br/><strong>Best efficiency:</strong> O(n) linear scan on an unsorted array — nothing beats looking at every element. If the array is <em>sorted</em>, random access enables binary search in O(log n), which no linked structure can do.',
          diagram: {
            caption: 'Linear scan for 30: check 10, 20, then hit index 2',
            chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"]
    style C fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def search(arr, target):
    for i, x in enumerate(arr):
        if x == target:
            return i
    return -1

# Unsorted: Time O(n), Space O(1)

def binary_search(arr, target):   # requires a sorted array
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

# Sorted: Time O(log n), Space O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 7: Reverse',
          text: '<strong>What it does:</strong> Flip the array in place so the last element becomes the first and vice versa.<br/><strong>Best efficiency:</strong> Two pointers swapping from both ends inward — O(n) time (exactly n/2 swaps) and O(1) space, no second array needed.',
          diagram: {
            caption: 'Two-pointer in-place reversal',
            chart: `flowchart LR
    subgraph Before["Before"]
      direction LR
      B1["0:10"] --> B2["1:20"] --> B3["2:30"] --> B4["3:40"] --> B5["4:50"]
    end
    subgraph After["After"]
      direction LR
      A1["0:50"] --> A2["1:40"] --> A3["2:30"] --> A4["3:20"] --> A5["4:10"]
    end
    Before ~~~ After`
          }
        },
        {
          heading: 'How two-pointer reversal works',
          text: '<p>Keep two indices: <strong>lo</strong> starting at 0 and <strong>hi</strong> starting at n − 1. Swap the elements they point at, then move <code>lo</code> one step right and <code>hi</code> one step left. Stop when they meet or cross — at that point every pair has been swapped exactly once.</p><ol><li><strong>Start:</strong> <code>lo = 0</code>, <code>hi = n - 1</code>. The outermost pair is swapped first, placing the final answer at both ends immediately.</li><li><strong>Each iteration:</strong> <code>arr[lo], arr[hi] = arr[hi], arr[lo]</code>, then <code>lo += 1</code> and <code>hi -= 1</code>. The swapped region grows inward from both ends.</li><li><strong>End:</strong> when <code>lo &gt;= hi</code>, the middle element (if n is odd) is already in its correct place, so nothing more to do.</li></ol><p><strong>Trace on [10, 20, 30, 40, 50]:</strong><br/>• Iteration 1: swap indices 0 and 4 → <code>[50, 20, 30, 40, 10]</code>.<br/>• Iteration 2: swap indices 1 and 3 → <code>[50, 40, 30, 20, 10]</code>.<br/>• <code>lo = 2</code>, <code>hi = 2</code> — pointers meet, stop. Element 30 was already home.</p>'
        },
        {
          text: 'Code:',
          code: `def reverse(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        arr[lo], arr[hi] = arr[hi], arr[lo]   # swap the outer pair
        lo += 1
        hi -= 1

# Time: O(n) — n/2 swaps, Space: O(1) — in place`,
          language: 'python'
        },
        {
          heading: 'Operation 8: Update by Index',
          text: '<strong>What it does:</strong> Overwrite the value stored at a given index.<br/><strong>Best efficiency:</strong> O(1) — just like access, the address is computed directly and the write lands in a single step. No shifting, no traversal, no reallocation.',
          diagram: {
            caption: 'Update arr[2] from 30 to 99 in one write',
            chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:99"] --> D["3:40"]
    style C fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def update(arr, index, val):
    if index < 0 or index >= len(arr):
        raise IndexError("index out of range")
    arr[index] = val

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Complete DynamicArray Class',
          text: `Now build a dynamic array from scratch to see exactly what Python's <code>list</code> and Java's <code>ArrayList</code> hide from you. The key discipline: the backing store is a <em>fixed-capacity</em> block (in Python we simulate it with a list of <code>None</code> values of a fixed length and never call <code>list.append</code> on it). When it fills up, the class allocates a new block of double the capacity, copies every element over by hand, and only then continues. Tracking <code>size</code> (how many slots are used) separately from <code>capacity</code> (how many slots exist) is the whole trick.`
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Complete DynamicArray Class in Python',
            code: `class DynamicArray:
    def __init__(self, capacity=4):
        self._data = [None] * capacity   # fixed-size backing store
        self._size = 0                   # slots actually in use

    def __len__(self):
        return self._size

    def capacity(self):
        return len(self._data)

    def _check_index(self, index, allow_end=False):
        upper = self._size if allow_end else self._size - 1
        if index < 0 or index > upper:
            raise IndexError("index out of range")

    def get(self, index):
        self._check_index(index)
        return self._data[index]          # O(1)

    def set(self, index, val):
        self._check_index(index)
        self._data[index] = val           # O(1)

    def _resize(self, new_capacity):
        new_data = [None] * new_capacity  # brand-new bigger block
        for i in range(self._size):       # manual copy: O(n)
            new_data[i] = self._data[i]
        self._data = new_data

    def append(self, val):
        if self._size == len(self._data):           # full?
            self._resize(max(1, 2 * len(self._data)))
        self._data[self._size] = val
        self._size += 1

    def insert(self, index, val):
        self._check_index(index, allow_end=True)
        if self._size == len(self._data):
            self._resize(max(1, 2 * len(self._data)))
        for i in range(self._size, index, -1):      # shift right
            self._data[i] = self._data[i - 1]
        self._data[index] = val
        self._size += 1

    def remove(self, index):
        self._check_index(index)
        removed = self._data[index]
        for i in range(index, self._size - 1):      # shift left
            self._data[i] = self._data[i + 1]
        self._size -= 1
        self._data[self._size] = None               # clear stale slot
        return removed

    def __str__(self):
        vals = ", ".join(str(self._data[i]) for i in range(self._size))
        return "[" + vals + "]  (size=" + str(self._size) +                ", capacity=" + str(self.capacity()) + ")"

# Driver
da = DynamicArray(4)
for v in [10, 20, 30, 40]:
    da.append(v)
print(da)          # [10, 20, 30, 40]  (size=4, capacity=4)
da.append(50)      # full -> resize 4 to 8, copy, then write
print(da)          # [10, 20, 30, 40, 50]  (size=5, capacity=8)
da.insert(1, 15)
print(da)          # [10, 15, 20, 30, 40, 50]  (size=6, capacity=8)
print(da.remove(0))   # 10
print(da)          # [15, 20, 30, 40, 50]  (size=5, capacity=8)
da.set(2, 99)
print(da.get(2))   # 99
print(da)          # [15, 20, 99, 40, 50]  (size=5, capacity=8)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Complete DynamicArray Class in Java',
            code: `import java.util.Arrays;

public class DynamicArray {
    private int[] data;   // fixed-size backing store
    private int size;     // slots actually in use

    public DynamicArray(int capacity) {
        data = new int[capacity];
        size = 0;
    }

    public int length()   { return size; }
    public int capacity() { return data.length; }

    private void checkIndex(int index, boolean allowEnd) {
        int upper = allowEnd ? size : size - 1;
        if (index < 0 || index > upper) {
            throw new IndexOutOfBoundsException("index out of range: " + index);
        }
    }

    public int get(int index) {
        checkIndex(index, false);
        return data[index];              // O(1)
    }

    public void set(int index, int val) {
        checkIndex(index, false);
        data[index] = val;               // O(1)
    }

    private void resize(int newCapacity) {
        data = Arrays.copyOf(data, newCapacity);   // allocate + copy: O(n)
    }

    public void append(int val) {
        if (size == data.length) resize(Math.max(1, 2 * data.length));
        data[size] = val;
        size++;
    }

    public void insert(int index, int val) {
        checkIndex(index, true);
        if (size == data.length) resize(Math.max(1, 2 * data.length));
        for (int i = size; i > index; i--) {       // shift right
            data[i] = data[i - 1];
        }
        data[index] = val;
        size++;
    }

    public int remove(int index) {
        checkIndex(index, false);
        int removed = data[index];
        for (int i = index; i < size - 1; i++) {   // shift left
            data[i] = data[i + 1];
        }
        size--;
        return removed;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < size; i++) {
            if (i > 0) sb.append(", ");
            sb.append(data[i]);
        }
        sb.append("]  (size=").append(size);
        sb.append(", capacity=").append(data.length).append(")");
        return sb.toString();
    }

    public static void main(String[] args) {
        DynamicArray da = new DynamicArray(4);
        for (int v : new int[]{10, 20, 30, 40}) da.append(v);
        System.out.println(da);   // [10, 20, 30, 40]  (size=4, capacity=4)
        da.append(50);            // full -> resize 4 to 8, copy, then write
        System.out.println(da);   // [10, 20, 30, 40, 50]  (size=5, capacity=8)
        da.insert(1, 15);
        System.out.println(da);   // [10, 15, 20, 30, 40, 50]  (size=6, capacity=8)
        System.out.println(da.remove(0));   // 10
        System.out.println(da);   // [15, 20, 30, 40, 50]  (size=5, capacity=8)
        da.set(2, 99);
        System.out.println(da.get(2));      // 99
        System.out.println(da);   // [15, 20, 99, 40, 50]  (size=5, capacity=8)
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of array operation complexities. Costs assume a dynamic array; for a static array, treat append/insert as impossible when full. The single most important rule: <strong>reaching a position by index is always O(1)</strong> thanks to offset arithmetic — the only operations that cost O(n) are the ones that must move other elements to keep the block contiguous.',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Traverse / Print',
                'O(n)',
                'O(1)',
                'Visit every element once with a plain index loop. Because the elements are contiguous, CPU cache prefetching makes this the fastest possible linear scan.'
              ],
              [
                'Access by index',
                'O(1)',
                'O(1)',
                'The address is computed directly as base + index × element_size — one multiply, one add, one memory read. No other element is ever touched, no matter how large the array grows.'
              ],
              [
                'Append',
                'O(1) amortized',
                'O(1)',
                'Usually a single write into spare capacity. When the backing store is full, it is doubled and every element copied — O(n) for that one append — but doubling makes resizes so rare that the average cost stays O(1).'
              ],
              [
                'Insert at index',
                'O(n)',
                'O(1)',
                'Reaching the slot is O(1), but every element from that index onward must shift one position right to open a gap — n moves in the worst case (insert at index 0), n/2 on average.'
              ],
              [
                'Delete at index',
                'O(n)',
                'O(1)',
                'Same shifting story in reverse: every element to the right of the gap moves one position left. Deleting the last element is O(1); deleting the first is the O(n) worst case.'
              ],
              [
                'Search by value',
                'O(n)',
                'O(1)',
                'On an unsorted array, a linear scan is the best possible — you cannot rule out an element you have not looked at. On a sorted array, random access enables binary search in O(log n).'
              ],
              [
                'Reverse',
                'O(n)',
                'O(1)',
                'Two pointers swap from both ends inward — exactly n/2 swaps, done in place with no second array.'
              ],
              [
                'Update by index',
                'O(1)',
                'O(1)',
                'A single computed-address write via offset arithmetic, just like access. No shifting, no reallocation.'
              ]
            ]
          },
          note: 'Interview tip: separate the "cost to reach the position" from the "cost to modify the structure". For an array, reaching index i is O(1) (offset math) but inserting or deleting there is O(n) (shifting). For a linked list it is exactly flipped: reaching position i is O(n) (pointer walking) but inserting or deleting there is O(1) (rewiring). And when interviewers ask why arrays outperform linked lists in practice even when the big-O matches, the hidden answer is cache locality — contiguous memory lets the CPU prefetch, scattered nodes do not.'
        },
        {
          heading: 'Real-World Applications',
          text: 'Arrays sit underneath almost every system that moves large amounts of data. Each example below shows the same pattern: the array is chosen because the workload is dominated by <strong>index-based reads and sequential iteration</strong> — exactly what contiguous memory does best — while insertions and deletions in the middle are rare or nonexistent.',
          list: [
            '<strong>Image pixel buffers:</strong> A photo is stored as one giant array of pixel values (row after row, three or four bytes per pixel for RGB). Every filter — blur, sharpen, brightness — iterates the buffer sequentially or jumps to pixel (x, y) via y × width + x offset math. Contiguity makes the iteration cache-friendly and lets GPUs process thousands of pixels in parallel.',
            '<strong>Database record pages:</strong> Databases like PostgreSQL store table rows inside fixed-size disk pages (typically 8 KB), with an array of row offsets at the end of each page. Finding the i-th row on a page is O(1) offset arithmetic, and reading a page pulls a contiguous block from disk in one I/O — far faster than chasing row pointers.',
            `<strong>Hash table backing arrays:</strong> Python dicts, Java HashMaps, and every other hash table store their entries in a flat array of buckets. The hash of a key is reduced modulo the array length to get a bucket index, giving expected O(1) lookup — and it all rests on the array's O(1) index access. The array is also resized (usually doubled) when the load factor gets too high, exactly like a dynamic array.`,
            '<strong>Ring buffers in audio/video streaming:</strong> Media players smooth out jitter with a circular buffer: a fixed-size array where a write index drops incoming frames and a read index consumes them, both wrapping around with modulo arithmetic. The fixed array never reallocates mid-playback, and wraparound means no shifting ever happens — both ends are O(1).',
            '<strong>Spreadsheets:</strong> A spreadsheet row or column is essentially an array of cells, and formulas like <code>SUM(A1:A1000)</code> are sequential scans over a contiguous range. Referencing cell B47 is direct index math, which is why recalculating a huge sheet stays fast as long as formulas avoid volatile lookups.',
            '<strong>NumPy arrays and tensor storage:</strong> NumPy ndarrays (and the tensors under PyTorch/TensorFlow) store numbers in a flat C-contiguous buffer plus shape and stride metadata. Slicing, reshaping, and transposing often just change the metadata — no data is copied — and matrix operations iterate the buffer in cache-friendly order, which is why NumPy beats pure-Python lists by 10–100×.',
            '<strong>Stack and queue implementations:</strong> A stack is trivially an array with append and pop at the end — both O(1) amortized. An efficient queue is an array ring buffer with head and tail indices. Operating systems, browsers (the JavaScript call stack), and language runtimes all use array-backed versions because the per-operation cost is a single index bump with no allocation.',
            '<strong>Lookup tables in systems code:</strong> Character classifiers, font glyph metrics, CRC checksum tables, and CPU branch predictors all precompute answers into flat arrays so that "compute the answer" becomes "read table[x]" — replacing logic with a single O(1) memory read.'
          ],
          note: 'The common thread: every one of these workloads is index-heavy and iteration-heavy — read element i, scan a contiguous range, jump straight to a computed position — while structural mutation (insert/delete in the middle) is rare. When that is the access pattern, nothing beats an array.'
        },
        {
          heading: 'Top Interview Questions on Arrays',
          text: `The eight most frequently asked array interview questions are below — each in its own collapsible card with the key idea, a solved answer, and its complexity. Arrays anchor roughly 40% of all coding interviews, and nearly every problem is a variation of five recurring patterns: <strong>hash maps for complements</strong>, <strong>two pointers</strong>, <strong>sliding window</strong>, <strong>prefix products/sums</strong>, and <strong>Kadane's running best</strong>. Master these eight and the rest are disguises.`,
          note: `Pattern cheat sheet: pair-sum on an unsorted array → hash map of complements; pair-sum on a sorted array or in-place reversal → two pointers from both ends; contiguous subarray with a constraint → sliding window; "except self" or range queries → prefix products/sums; maximum-sum contiguous subarray → Kadane's. In-place rearrangement with O(1) space almost always means a slow write pointer or a reversal trick.`
        },
        {
          heading: 'Practice Question 1: Two Sum (LeetCode 1, Easy)',
          text: `<strong>Problem:</strong> Given an array of integers and a target, return the indices of the two numbers that add up to the target.<br/><strong>Key idea:</strong> The brute force checks every pair in O(n²). Instead, walk once and store each value's index in a hash map. For the current element <code>x</code>, the partner you need is <code>target - x</code> — if that complement is already in the map, you are done. Each lookup is O(1), so the whole scan is linear at the cost of O(n) extra space.<br/><strong>Complexity:</strong> Time O(n), Space O(n).`,
          example: {
            title: 'Python Solution',
            code: `def two_sum(nums, target):
    seen = {}                        # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:       # complement already seen?
            return [seen[target - x], i]
        seen[x] = i
    return []                        # no pair found`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Best Time to Buy and Sell Stock (LeetCode 121, Easy)',
          text: '<strong>Problem:</strong> Given daily prices, choose one day to buy and a later day to sell to maximize profit; return 0 if no profit is possible.<br/><strong>Key idea:</strong> One pass, two running values. Track <code>min_price</code>, the cheapest day seen so far — that is the best day you could have bought. At each day, the best sell ending today is <code>price - min_price</code>; keep the maximum of that. Because the buy day must precede the sell day, only updating <code>min_price</code> from days already passed enforces the ordering for free.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def max_profit(prices):
    min_price = float("inf")   # cheapest buy day so far
    best = 0                   # best profit so far
    for p in prices:
        min_price = min(min_price, p)
        best = max(best, p - min_price)
    return best`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Maximum Subarray (LeetCode 53, Medium)',
          text: `<strong>Problem:</strong> Find the contiguous subarray with the largest sum and return that sum (the array contains negative numbers).<br/><strong>Key idea:</strong> Kadane's algorithm. Keep <code>curr</code>, the best sum of a subarray <em>ending at the current element</em>. At each element you either extend the previous run (<code>curr + x</code>) or start fresh at <code>x</code> — whichever is bigger. If the running sum has gone negative, it can only drag down anything that follows, so restarting is always right. Track the maximum <code>curr</code> ever seen as the answer.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
          example: {
            title: 'Python Solution',
            code: `def max_subarray(nums):
    best = curr = nums[0]
    for x in nums[1:]:
        curr = max(x, curr + x)   # extend the run or start fresh
        best = max(best, curr)
    return best`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Product of Array Except Self (LeetCode 238, Medium)',
          text: '<strong>Problem:</strong> Return an array where <code>out[i]</code> is the product of every element except <code>nums[i]</code> — without using division, in O(n).<br/><strong>Key idea:</strong> Every answer is the product of everything to its left times everything to its right. First pass left to right: store the running prefix product into <code>out[i]</code>. Second pass right to left: multiply <code>out[i]</code> by a running suffix product. Division would break on zeros; two passes never divide at all, and the suffix tracker lives in a single variable so the extra space stays O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(1) extra (output array does not count).',
          example: {
            title: 'Python Solution',
            code: `def product_except_self(nums):
    n = len(nums)
    out = [1] * n
    left = 1
    for i in range(n):            # out[i] = product of nums[0..i-1]
        out[i] = left
        left *= nums[i]
    right = 1
    for i in range(n - 1, -1, -1):  # multiply by product of nums[i+1..n-1]
        out[i] *= right
        right *= nums[i]
    return out`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Contains Duplicate (LeetCode 217, Easy)',
          text: '<strong>Problem:</strong> Return true if any value appears at least twice in the array.<br/><strong>Key idea:</strong> Sorting would work in O(n log n) (duplicates become adjacent), but a hash set does it in one pass. Add each element to the set as you scan; the moment an element is already there, you have found a duplicate and can exit early — the best case is O(1). The set never holds more than n entries, so space is O(n) worst case.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True           # early exit on first duplicate
        seen.add(x)
    return False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Move Zeroes (LeetCode 283, Easy)',
          text: '<strong>Problem:</strong> Move all zeros to the end of the array, in place, preserving the relative order of the non-zero elements.<br/><strong>Key idea:</strong> A slow write pointer. Scan with a read pointer; every time you see a non-zero value, write it at <code>write</code> and advance <code>write</code>. This compacts all non-zeros to the front in their original order (a stable partition). Then fill everything from <code>write</code> to the end with zeros. One pass plus one fill, all in place — no second array.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def move_zeroes(nums):
    write = 0
    for x in nums:                # compact non-zeros to the front
        if x != 0:
            nums[write] = x
            write += 1
    for i in range(write, len(nums)):
        nums[i] = 0               # fill the tail with zeros`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Rotate Array (LeetCode 189, Medium)',
          text: '<strong>Problem:</strong> Rotate the array to the right by k steps, in place with O(1) extra space.<br/><strong>Key idea:</strong> Triple reversal. Rotating right by k moves the last k elements to the front. Reverse the whole array — the last k elements are now at the front but in the wrong internal order, and so is the rest. Reverse the first k elements and then the remaining n − k separately, and both groups snap into place. Remember <code>k %= n</code> first, since rotating by n does nothing. Each reversal is Operation 7 from this page.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def rotate(nums, k):
    n = len(nums)
    if n == 0:
        return
    k %= n                         # rotating by n changes nothing

    def rev(lo, hi):
        while lo < hi:
            nums[lo], nums[hi] = nums[hi], nums[lo]
            lo += 1
            hi -= 1

    rev(0, n - 1)                  # 1: whole array
    rev(0, k - 1)                  # 2: first k elements
    rev(k, n - 1)                  # 3: remaining n - k`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Merge Sorted Array (LeetCode 88, Easy)',
          text: '<strong>Problem:</strong> <code>nums1</code> has length m + n: its first m elements are sorted, the last n are placeholder zeros with enough room. Merge the sorted array <code>nums2</code> (length n) into <code>nums1</code> as one sorted array, in place.<br/><strong>Key idea:</strong> Fill from the back. Merging front-to-back would overwrite elements of <code>nums1</code> you have not read yet — but the spare capacity is at the <em>end</em>, so compare the largest remaining elements of both arrays and place the winner at the write pointer starting at index m + n − 1, walking all three pointers left. When <code>nums2</code> runs out you are done (the rest of <code>nums1</code> is already in place); if <code>nums1</code> runs out first, the loop keeps copying the rest of <code>nums2</code>.<br/><strong>Complexity:</strong> Time O(m + n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def merge(nums1, m, nums2, n):
    i, j, w = m - 1, n - 1, m + n - 1   # read nums1, read nums2, write
    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[w] = nums1[i]
            i -= 1
        else:
            nums1[w] = nums2[j]
            j -= 1
        w -= 1`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    strings: {
      title: 'Strings',
      subtitle: 'Immutable character sequences — patterns over pointers',
      sections: [
        {
          heading: 'What is a String?',
          text: 'A string is a sequence of characters stored as an ordered, indexable collection. Conceptually it behaves like an array of characters: the first character is at index 0, the last at index length - 1, and any character can be read directly by its position. What makes strings special in Python and Java is that they are immutable — once created, the characters of a string object can never be changed in place.',
          list: [
            '<strong>Sequence of characters:</strong> A string is an ordered collection where position matters — "abc" and "cab" contain the same characters but are different strings.',
            `<strong>Immutable in Python and Java:</strong> There is no operation that modifies a string in place. Writing <code>s[0] = 'x'</code> raises an error in Python and is impossible in Java. Every "modification" — concatenation, replacement, case change — builds and returns a brand-new string object.`,
            '<strong>What immutability means practically:</strong> Reading is cheap and safe (you can share a string without anyone mutating it), but editing is expensive because each edit copies. This single fact drives almost every string algorithm pattern: you build a new result rather than mutating the input.',
            '<strong>Strings as character arrays for indexing:</strong> Like arrays, strings support O(1) index access — <code>s[i]</code> jumps straight to the i-th character via offset arithmetic. Python also supports negative indices (<code>s[-1]</code> is the last character) and rich slicing (<code>s[1:4]</code>, <code>s[::-1]</code>).',
            '<strong>Unicode / encoding note:</strong> A Java <code>String</code> is a sequence of UTF-16 code units, so characters outside the Basic Multilingual Plane (like many emoji) occupy two <code>char</code> slots and <code>s.length()</code> counts code units, not visible characters. A Python 3 <code>str</code> is a sequence of Unicode code points, so <code>len(s)</code> counts characters as you would expect. For ASCII interview inputs the two behave identically.'
          ]
        },
        {
          heading: 'String Anatomy',
          text: 'Under the hood, a string is a contiguous block of characters with an integer index over each slot. Reading <code>s[i]</code> is O(1) because the runtime computes the address (or slot offset) of index i directly — exactly like array access. But because the string is immutable, any operation that "changes" the string must allocate a new block of characters and copy the relevant content into it. Replacing one character in a string of length n costs O(n): a brand-new string is created with that one slot different.',
          diagram: {
            caption: 'The string "hello" as an indexed character sequence',
            chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C0 fill:#3498db,color:#fff
    style C4 fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Immutability & Performance',
          content: [
            '<p>The most common string performance bug is the concatenation loop trap. Writing <code>s = s + c</code> inside a loop allocates a brand-new string of length len(s) + 1 on every iteration. After n iterations the total characters allocated are 1 + 2 + ... + n = O(n²) — a loop that looks linear is actually quadratic.</p>',
            '<p>The fix is to collect the pieces and join them once. In Python, append each piece to a list and finish with <code>"".join(parts)</code> — a single allocation of the final size. In Java, use a <code>StringBuilder</code>, which is a <em>mutable</em> character buffer: <code>append()</code> is O(1) amortized, and one final <code>toString()</code> produces the immutable result.</p>',
            '<p>Concatenation with <code>+</code> is perfectly fine when the number of pieces is small and fixed — building a log line from three values, or joining a first and last name. The trap only bites when the number of concatenations grows with the input size, because then the repeated copying grows quadratically.</p>'
          ],
          note: 'Rule of thumb: concatenating a fixed number of strings — use +. Concatenating inside a loop whose trip count depends on n — use join (Python) or StringBuilder (Java).'
        },
        {
          text: 'Code:',
          code: `# WRONG: a new string is allocated on every iteration.
# Total characters copied = 1 + 2 + ... + n  ->  O(n^2)
def build_slow(chars):
    result = ""
    for ch in chars:
        result = result + ch   # copies everything so far, plus ch
    return result

# RIGHT: collect pieces in a list, join exactly once.
# One allocation of the final length  ->  O(n) total
def build_fast(chars):
    parts = []
    for ch in chars:
        parts.append(ch)       # list append is O(1) amortized
    return "".join(parts)      # single final copy`,
          language: 'python'
        },
        {
          heading: 'Advantages',
          text: 'Strings are the workhorse of everyday programming, and their design trades mutability for safety and convenience.',
          list: [
            '<strong>O(1) index access:</strong> Reading the character at any position is constant time, just like array access — no traversal needed.',
            '<strong>Rich built-in operations:</strong> Search, split, replace, trim, case conversion, and formatting are built into the standard library of every mainstream language, so most text tasks are one call away.',
            '<strong>Expressive slicing (Python):</strong> <code>s[1:4]</code>, <code>s[:3]</code>, <code>s[::-1]</code>, and negative indices make substring extraction and reversal one-liners instead of hand-written loops.',
            '<strong>Hashable because immutable:</strong> Immutable strings can be used as dictionary keys and set members in Python, and as keys in a Java <code>HashMap</code>. Their hash code is computed once and safely cached — this is what makes counting patterns and anagram grouping so easy.',
            '<strong>Thread-safe by immutability:</strong> A string can be shared freely across threads with no locks or defensive copies, because no thread can ever change what another thread sees.',
            `<strong>Safe to pass around:</strong> Functions can receive a string and never accidentally corrupt the caller's data — aliasing is harmless when nothing can be mutated.`
          ]
        },
        {
          heading: 'Disadvantages',
          text: 'The same immutability that makes strings safe makes editing them expensive, and several common operations hide surprising costs.',
          list: [
            '<strong>Every edit allocates:</strong> Replacing, inserting, or deleting even one character creates a whole new string — an O(n) copy for what feels like an O(1) change.',
            '<strong>The concat loop trap:</strong> Building a string with <code>s = s + c</code> in a loop costs O(n²) total time and allocations; forgetting join/StringBuilder is a classic performance bug.',
            '<strong>Substring operations hide O(n) copies:</strong> Slicing or taking a substring copies the characters into a new string — extracting many substrings in a loop can quietly become quadratic.',
            '<strong>Comparison is O(n), not O(1):</strong> Checking <code>a == b</code> compares characters one by one; the cost is proportional to the shorter string. Comparing long strings repeatedly adds up fast.',
            '<strong>Memory cost of many small strings:</strong> Every string object carries overhead (length, cached hash, object header), so millions of short strings — tokens, keys, log fields — consume far more memory than the raw characters suggest.',
            '<strong>No in-place algorithms:</strong> Techniques like in-place reversal are impossible on the string itself; you must copy into a mutable structure (a Python list or Java char[]) first, then build a new string back.'
          ]
        },
        {
          heading: 'String Operations',
          text: 'The eight core operations below cover nearly everything interviews ask you to do with strings. Each one shows the most efficient implementation, a Mermaid visual, and code.'
        },
        {
          heading: 'Operation 1: Traverse / Print',
          text: '<strong>What it does:</strong> Visit every character of the string from left to right, usually with its index.<br/><strong>Best efficiency:</strong> A single loop is O(n) time and O(1) extra space — every character must be read at least once, so this is optimal.',
          diagram: {
            caption: 'Traversing "hello" left to right',
            chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C0 fill:#2ecc71,color:#fff
    style C4 fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def traverse(s):
    for i, ch in enumerate(s):
        print(i, ch)

# Time: O(n), Space: O(1) extra`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Access Character by Index',
          text: '<strong>What it does:</strong> Read the character at a given position, e.g. <code>s[2]</code>.<br/><strong>Best efficiency:</strong> O(1) — the runtime jumps directly to the slot via offset arithmetic, exactly like array indexing. Always bounds-check first.',
          diagram: {
            caption: 'Accessing the character at index 2',
            chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C2 fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def char_at(s, i):
    if i < 0 or i >= len(s):
        return None          # out of bounds
    return s[i]              # direct O(1) slot access

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 3: Concatenate (join)',
          text: '<strong>What it does:</strong> Combine several strings into one, e.g. joining "he" and "llo" into "hello".<br/><strong>Best efficiency:</strong> <code>"".join(parts)</code> allocates the result once — O(total length). Never concatenate with + inside a loop over n pieces (O(n²)).',
          diagram: {
            caption: 'Joining "he" and "llo" into "hello"',
            chart: `flowchart LR
    A0[0:h] --> A1[1:e]
    A1 -. join .-> B0[2:l]
    B0[2:l] --> B1[3:l] --> B2[4:o]
    style B0 fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def concat(parts):
    return "".join(parts)   # one allocation of the final length

# join over k parts of total length n: Time O(n), Space O(n)
# n separate "+" operations in a loop:   Time O(n^2)`,
          language: 'python'
        },
        {
          heading: 'Operation 4: Slice / Substring',
          text: '<strong>What it does:</strong> Extract a contiguous piece of the string, e.g. <code>s[1:4]</code> gives "ell" from "hello".<br/><strong>Best efficiency:</strong> O(k) time and space for a slice of length k — the characters must be copied into a new immutable string. There is no O(1) "view" of a substring in Python or Java.',
          diagram: {
            caption: 'Slicing s[1:4] out of "hello"',
            chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C1 fill:#f1c40f,color:#000
    style C2 fill:#f1c40f,color:#000
    style C3 fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def substring(s, start, end):
    return s[start:end]      # copies characters start..end-1

# s[::-1] is also a slice -> a reversed copy
# Slice of length k: Time O(k), Space O(k)`,
          language: 'python'
        },
        {
          heading: 'Operation 5: Search Substring (find / contains)',
          text: '<strong>What it does:</strong> Locate a pattern inside a larger string — <code>s.find("ll")</code> returns the index of the first match, or -1.<br/><strong>Best efficiency:</strong> The naive check-every-position approach is O(n·m); classic algorithms like KMP or Rabin-Karp bring it down to roughly O(n + m). Built-in <code>find</code>/<code>contains</code> use optimized variants, so prefer them over hand-rolled loops.',
          diagram: {
            caption: 'Finding "ll" inside "hello"',
            chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C2 fill:#f1c40f,color:#000
    style C3 fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def find_substring(s, pattern):
    return s.find(pattern)   # first match index, or -1

def contains(s, pattern):
    return pattern in s      # boolean version

# Built-in find: ~O(n + m) in practice
# Naive position-by-position scan: O(n * m) worst case`,
          language: 'python'
        },
        {
          heading: 'Operation 6: Split & Join',
          text: '<strong>What it does:</strong> <code>split</code> breaks a string into a list of pieces around a separator; <code>join</code> is its inverse, stitching a list of pieces back into one string.<br/><strong>Best efficiency:</strong> Both are O(n) — each character is examined (split) or copied (join) exactly once.',
          diagram: {
            caption: 'Splitting "a-b-c" on the dashes',
            chart: `flowchart LR
    C0[0:a] --> S1[1:dash] --> C1[2:b] --> S2[3:dash] --> C2[4:c]
    style S1 fill:#e74c3c,color:#fff
    style S2 fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def split_csv(line):
    return line.split(",")        # list of fields

def join_words(words):
    return " ".join(words)        # one string, space-separated

# Both: Time O(n), Space O(n) for the produced pieces`,
          language: 'python'
        },
        {
          heading: 'Operation 7: Reverse a String',
          text: '<strong>What it does:</strong> Produce a new string with the characters in the opposite order — "hello" becomes "olleh".<br/><strong>Best efficiency:</strong> O(n) time and O(n) space. True in-place reversal is impossible on an immutable string, so the result is always a new allocation.',
          diagram: {
            caption: 'Reversing "hello" into "olleh"',
            chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      B0[0:h] --> B1[1:e] --> B2[2:l] --> B3[3:l] --> B4[4:o]
    end
    subgraph After[After]
      direction LR
      A0[0:o] --> A1[1:l] --> A2[2:l] --> A3[3:e] --> A4[4:h]
    end
    Before ~~~ After`
          }
        },
        {
          heading: 'How string reversal works',
          text: '<p>Because strings are immutable, you never "flip" a string in place — you build a new reversed string. Python gives you two idiomatic ways to do it.</p><p><strong>Way 1 — slicing:</strong> <code>s[::-1]</code> means "the whole string, step -1", so Python walks from the last character back to the first and copies them into a new string. One line, O(n).</p><p><strong>Way 2 — two pointers on a mutable list:</strong> convert the string to a list of characters (which <em>is</em> mutable), place one pointer at each end, swap the pair, and move both pointers inward until they meet. Then <code>"".join(chars)</code> builds the result. This is the version interviewers want to see, because it generalizes to arrays and linked problems.</p><p><strong>Trace on "hello":</strong> swap h and o → "oellh"; swap e and l → "olleh"; the pointers meet at the middle l and stop. Result: "olleh" — one new string, n/2 swaps.</p>'
        },
        {
          text: 'Code:',
          code: `def reverse_slice(s):
    return s[::-1]                # idiomatic Python one-liner

def reverse_two_pointer(s):
    chars = list(s)               # mutable copy
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return "".join(chars)         # build the new immutable string

# Both: Time O(n), Space O(n) for the new string`,
          language: 'python'
        },
        {
          heading: 'Operation 8: Compare & Case',
          text: '<strong>What it does:</strong> Check two strings for equality or order (<code>a == b</code>, <code>a &lt; b</code>), and normalize case for case-insensitive logic.<br/><strong>Best efficiency:</strong> Comparison is O(k) where k is the length of the shorter string — characters are checked one by one until a difference is found. Case folding is O(n) because it builds a new string.',
          diagram: {
            caption: 'Comparing "cat" with "car" — first difference at index 2',
            chart: `flowchart LR
    C0[0:c] --> C1[1:a] --> C2[2:t]
    D0[0:c] --> D1[1:a] --> D2[2:r]
    style C2 fill:#f1c40f,color:#000
    style D2 fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def equals_ignore_case(a, b):
    return a.casefold() == b.casefold()   # Unicode-aware case fold

def is_before(a, b):
    return a < b          # lexicographic (dictionary) order

# Comparison: Time O(k) for shorter length k, Space O(1)
# casefold(): Time O(n), Space O(n) — it builds a new string`,
          language: 'python'
        },
        {
          heading: 'Complete String Algorithms',
          text: 'Here is a complete, tested collection of the six core string algorithms from this page, with a driver demo at the bottom. Switch between the Python and Java tabs — both versions implement the identical algorithms and print the identical results.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Complete String Algorithms in Python',
            code: `def reverse_string(s):
    return s[::-1]


def is_palindrome(s):
    """True if s reads the same forwards and backwards,
    ignoring non-alphanumeric characters and case."""
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True


def is_anagram(a, b):
    """True if a and b contain the same character counts."""
    if len(a) != len(b):
        return False
    counts = {}
    for ch in a:
        counts[ch] = counts.get(ch, 0) + 1
    for ch in b:
        counts[ch] = counts.get(ch, 0) - 1
        if counts[ch] < 0:
            return False
    return True


def longest_unique_substring(s):
    """Length of the longest substring with no repeating character.
    Sliding window: last_seen maps each char to its most recent index."""
    last_seen = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1     # shrink window past the duplicate
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best


def longest_common_prefix(strs):
    """Longest prefix shared by every string. Vertical scanning:
    compare column by column across all strings."""
    if not strs:
        return ""
    for i, ch in enumerate(strs[0]):
        for word in strs[1:]:
            if i == len(word) or word[i] != ch:
                return strs[0][:i]
    return strs[0]


def group_anagrams(words):
    """Group words that are anagrams of each other.
    The sorted characters of a word are the hash-map key for its group."""
    groups = {}
    for word in words:
        key = "".join(sorted(word))
        groups.setdefault(key, []).append(word)
    return list(groups.values())


# Driver demo
print(reverse_string("hello"))
# olleh
print(is_palindrome("A man, a plan, a canal: Panama"))
# True
print(is_anagram("listen", "silent"))
# True
print(longest_unique_substring("abcabcbb"))
# 3
print(longest_common_prefix(["flower", "flow", "flight"]))
# fl
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Complete String Algorithms in Java',
            code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class StringAlgorithms {

    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static boolean isAnagram(String a, String b) {
        if (a.length() != b.length()) return false;
        int[] counts = new int[26];
        for (char c : a.toCharArray()) counts[c - 'a']++;
        for (char c : b.toCharArray()) {
            counts[c - 'a']--;
            if (counts[c - 'a'] < 0) return false;
        }
        return true;
    }

    public static int longestUniqueSubstring(String s) {
        Map<Character, Integer> lastSeen = new HashMap<>();
        int left = 0, best = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) {
                left = lastSeen.get(c) + 1;   // shrink window past the duplicate
            }
            lastSeen.put(c, right);
            best = Math.max(best, right - left + 1);
        }
        return best;
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }

    public static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new LinkedHashMap<>();   // insertion order, like a Python dict
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);   // sorted chars = group key
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }

    public static void main(String[] args) {
        System.out.println(reverseString("hello"));
        // olleh
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        // true
        System.out.println(isAnagram("listen", "silent"));
        // true
        System.out.println(longestUniqueSubstring("abcabcbb"));
        // 3
        System.out.println(longestCommonPrefix(new String[]{"flower", "flow", "flight"}));
        // fl
        System.out.println(groupAnagrams(new String[]{"eat", "tea", "tan", "ate", "nat", "bat"}));
        // [[eat, tea, ate], [tan, nat], [bat]]
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of string operation complexities. The single most important rule: <strong>strings are immutable, so every operation that produces a different string pays for a new allocation and a copy</strong> — reading is cheap, editing is not.',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Access by index',
                'O(1)',
                'O(1)',
                'Direct offset arithmetic into the character array, exactly like array indexing — the one "free" operation strings share with arrays.'
              ],
              [
                'Traverse / Print',
                'O(n)',
                'O(1)',
                'Every character must be visited once, so linear time is optimal; the loop itself needs only a counter. Printing writes O(n) of output but uses no extra working space.'
              ],
              [
                'Concatenate',
                'O(n) per op',
                'O(n)',
                'Each + allocates a new string and copies both operands. Doing it in a loop over n pieces is O(n^2) total; collecting pieces and calling join once (or StringBuilder in Java) is O(n) total.'
              ],
              [
                'Slice / Substring',
                'O(k)',
                'O(k)',
                'Python slicing and Java substring both copy the k extracted characters into a new string — there is no zero-copy "view", so extracting many substrings in a loop can quietly become O(n^2).'
              ],
              [
                'Search substring',
                'O(n·m) naive',
                'O(1)',
                'Checking the pattern at every position is O(n·m) worst case; KMP or Rabin-Karp bring it to about O(n + m). Built-in find/contains use optimized variants — prefer them over hand-rolled scans.'
              ],
              [
                'Split / Join',
                'O(n)',
                'O(n)',
                'Split scans each character once and emits the pieces; join copies each piece once into the final string. Both are linear in the total input size.'
              ],
              [
                'Reverse',
                'O(n)',
                'O(n)',
                'Immutability forbids in-place reversal: every approach (slicing, two-pointer swap on a char list, StringBuilder.reverse) ends by allocating a new string of length n.'
              ],
              [
                'Compare',
                'O(n)',
                'O(1)',
                'Equality and ordering compare characters pairwise until a mismatch — worst case O(n) when strings are equal. Never assume string == is constant time.'
              ]
            ]
          },
          note: 'Interview tip: because strings are immutable, almost every string answer builds a NEW string — always state the O(n) output space explicitly and interviewers will trust the rest of your analysis. Two patterns cover most string questions: sliding window for substring-constraint problems ("longest substring without..."), and a hash map of character counts for anagram problems. When you hear "compare words up to rearrangement", reach for counts or a sorted key, not nested loops.'
        },
        {
          heading: 'Real-World Applications',
          text: 'Strings are the most-used data type in real software — most of what computers move around is text. Each example below shows where the string model fits, and where systems deliberately step around its limits (usually the O(n) copy cost of immutability).',
          list: [
            '<strong>Text editors and IDEs:</strong> The document you type into is conceptually one giant string — but editors do not store it as one, because inserting a character at the top of a 100,000-line file would copy everything below it (the O(n) immutability cost on every keystroke). Instead they use gap buffers (Emacs) or ropes (VS Code) — tree structures of small string chunks — so edits touch only the chunk under the cursor while the screen still renders one seamless string.',
            '<strong>URLs and web routing:</strong> Every request that reaches a web server arrives as a string like "/users/42/orders?page=2". The router splits it on "/", matches path segments against patterns, and parses the query string into key-value pairs — classic split-and-search string work. Frameworks from Django to Express are essentially fast string matchers layered on top of this.',
            '<strong>Compilers and interpreters:</strong> The first phase of every compiler, the lexer, reads your source code as one long string and scans it character by character, grouping runs of characters into tokens (keywords, identifiers, numbers). Lexers are a direct application of index access and substring extraction, and their speed depends on doing it in a single linear pass.',
            '<strong>DNA sequence analysis:</strong> A genome is stored as a string over the alphabet {A, C, G, T} — the human genome is about 3 billion characters. Bioinformatics is string algorithms at scale: substring search finds genes, longest-common-substring variants measure similarity between sequences, and read-mapping aligns millions of short strings against the reference genome.',
            '<strong>Search engines:</strong> When Google indexes a page, it first tokenizes the text — splitting the document string into words, normalizing case, stripping punctuation. Each token becomes a key in the inverted index (word → list of documents), which works precisely because immutable strings are hashable and make reliable hash-map keys. Your query is matched against those same string keys.',
            '<strong>Network protocols:</strong> HTTP is a text protocol — every request and response header is lines of strings like "Content-Type: application/json". Servers split each line on ":", trim whitespace, and compare header names case-insensitively. Parsing happens on every request, so protocol libraries lean heavily on fast substring search and comparison.',
            '<strong>Internationalization and localization:</strong> Apps store every user-facing message as a string keyed by locale, so the same screen renders "Hello" or "Bonjour" by swapping one string table. This is also where the Unicode model matters: case folding, sorting, and even length differ across languages, and bugs here (Turkish dotted-i, emoji counting) come directly from how strings encode characters.'
          ],
          note: 'The common thread: strings are the universal format for data in motion and data meant for humans — URLs, source code, genomes, HTTP, logs. Systems that only read text use plain strings directly; systems that must edit large text at interactive speed (editors) replace the one-giant-string model with chunk structures precisely to escape the O(n) copy cost of immutability.'
        },
        {
          heading: 'Top Interview Questions on Strings',
          text: 'The eight most frequently asked string interview questions are below — each in its own collapsible card with the key idea, a solved answer, and its complexity. Four recurring patterns solve nearly all of them: <strong>two pointers from both ends</strong> (reverse, palindrome), <strong>sliding window</strong> (substring constraints), <strong>character-count hash maps</strong> (anagrams), and <strong>expand-around-center</strong> (palindromic substrings).',
          note: 'Pattern cheat sheet: comparing a string with its reverse or checking symmetry — two pointers from both ends. Any "longest/shortest substring where..." — sliding window with a last-seen map. "Same letters rearranged" — count characters or sort into a hash-map key. "Longest palindromic..." — expand around each of the 2n - 1 centers (n odd-length, n - 1 even-length). Nested brackets — a stack of expected closers.'
        },
        {
          heading: 'Practice Question 1: Reverse String (LeetCode 344, Easy)',
          text: '<strong>Problem:</strong> Reverse a character array in place — modify the input array directly, with O(1) extra memory.<br/><strong>Key idea:</strong> Two pointers from both ends. Place <code>left</code> at index 0 and <code>right</code> at the last index, swap the two characters, then move both pointers one step inward. When the pointers meet or cross, every pair has been swapped exactly once — n/2 swaps total. Because the input here is a mutable array (unlike an immutable string), no extra copy is needed.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]   # swap the outer pair
        left += 1
        right -= 1                              # pointers move inward`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Valid Palindrome (LeetCode 125, Easy)',
          text: '<strong>Problem:</strong> Return true if a string reads the same forward and backward, considering only alphanumeric characters and ignoring case. "A man, a plan, a canal: Panama" is a palindrome.<br/><strong>Key idea:</strong> Two pointers from both ends, with skipping. Before comparing, advance each pointer past any non-alphanumeric character (spaces, punctuation). Then compare the two letters case-folded; a mismatch ends it immediately. Each pointer moves only inward, so the whole check is one pass with no cleaned-up copy of the string.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1            # skip non-alphanumeric from the left
        while left < right and not s[right].isalnum():
            right -= 1           # skip non-alphanumeric from the right
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Valid Anagram (LeetCode 242, Easy)',
          text: '<strong>Problem:</strong> Return true if string t is an anagram of string s — the same letters with the same multiplicities, rearranged. "anagram" and "nagaram" are anagrams.<br/><strong>Key idea:</strong> Anagrams have identical character counts. With lowercase a-z input, a fixed array of 26 counters is enough: increment for each character of s, decrement for each character of t, and fail the moment any count goes negative (which also catches length mismatches mid-stream). For general Unicode input, swap the fixed array for a hash map keyed by character. Sorting both strings also works but costs O(n log n).<br/><strong>Complexity:</strong> Time O(n), Space O(1) — the 26-slot array is constant.',
          example: {
            title: 'Python Solution',
            code: `def is_anagram(s, t):
    if len(s) != len(t):
        return False
    counts = [0] * 26                    # one slot per lowercase letter
    for ch in s:
        counts[ord(ch) - ord('a')] += 1
    for ch in t:
        counts[ord(ch) - ord('a')] -= 1
        if counts[ord(ch) - ord('a')] < 0:
            return False                 # t has more of this char than s
    return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Longest Substring Without Repeating Characters (LeetCode 3, Medium)',
          text: '<strong>Problem:</strong> Given a string, return the length of the longest substring in which no character appears twice. For "abcabcbb" the answer is 3 ("abc").<br/><strong>Key idea:</strong> Sliding window with a last-seen map. Expand <code>right</code> one character at a time, recording the most recent index of every character. When the incoming character was already seen <em>inside the current window</em> (its last index is >= <code>left</code>), jump <code>left</code> to one past that old occurrence — the duplicate is now excluded. Each character enters and leaves the window at most once, so the two pointers together do O(n) work; the map makes the duplicate check O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(min(n, alphabet)).',
          example: {
            title: 'Python Solution',
            code: `def length_of_longest_substring(s):
    last_seen = {}          # char -> most recent index
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1     # shrink window past the duplicate
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Longest Common Prefix (LeetCode 14, Easy)',
          text: '<strong>Problem:</strong> Find the longest prefix shared by every string in an array. For ["flower", "flow", "flight"] the answer is "fl"; if there is none, return "".<br/><strong>Key idea:</strong> Vertical scanning. Take the first string as the candidate and compare it column by column against every other string. The first column where any string differs — or where any string runs out of characters — is exactly where the common prefix ends, so slice the candidate there. The running time is bounded by the total characters actually compared, and ties like ["flow", "flow"] naturally return the whole word.<br/><strong>Complexity:</strong> Time O(S) where S is the sum of all characters (worst case all strings are identical), Space O(1) extra.',
          example: {
            title: 'Python Solution',
            code: `def longest_common_prefix(strs):
    if not strs:
        return ""
    for i, ch in enumerate(strs[0]):
        for word in strs[1:]:
            if i == len(word) or word[i] != ch:
                return strs[0][:i]       # column i breaks the prefix
    return strs[0]                       # every column matched`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Group Anagrams (LeetCode 49, Medium)',
          text: `<strong>Problem:</strong> Group an array of strings so that words that are anagrams of each other land in the same group. ["eat", "tea", "tan", "ate", "nat", "bat"] groups into ["eat","tea","ate"], ["tan","nat"], ["bat"].<br/><strong>Key idea:</strong> Anagrams are identical when sorted: "eat", "tea", and "ate" all sort to "aet". Use that sorted string as a hash-map key and append every word to its key's bucket — one pass through the input, one sort per word. This works because immutable strings are hashable and can serve as map keys directly. A faster key (a 26-count tuple) avoids the per-word sort when n is large.<br/><strong>Complexity:</strong> Time O(n · k log k) for n words of max length k (the per-word sort), Space O(n · k) for the groups.`,
          example: {
            title: 'Python Solution',
            code: `def group_anagrams(strs):
    groups = {}
    for word in strs:
        key = "".join(sorted(word))      # anagrams share the same sorted key
        groups.setdefault(key, []).append(word)
    return list(groups.values())`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Longest Palindromic Substring (LeetCode 5, Medium)',
          text: '<strong>Problem:</strong> Return the longest substring of s that is a palindrome. For "babad" the answer is "bab" (or "aba"); for "cbbd" it is "bb".<br/><strong>Key idea:</strong> Expand around center. Every palindrome is mirrored around a center, and a string of length n has 2n - 1 possible centers: n single characters (odd-length palindromes like "racecar") and n - 1 gaps between characters (even-length ones like "abba"). From each center, walk outward while the two mirrored characters match; the last matching pair bounds the longest palindrome at that center. Track the best window across all centers — 2n - 1 expansions of at most n steps each.<br/><strong>Complexity:</strong> Time O(n²), Space O(1).',
          example: {
            title: 'Python Solution',
            code: `def longest_palindrome(s):
    if len(s) < 2:
        return s
    start = end = 0

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1       # bounds of the palindrome found

    for i in range(len(s)):
        for lo, hi in (expand(i, i), expand(i, i + 1)):  # odd and even center
            if hi - lo > end - start:
                start, end = lo, hi
    return s[start:end + 1]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Valid Parentheses (LeetCode 20, Easy)',
          text: '<strong>Problem:</strong> Given a string of brackets ()[]{}, return true if every opening bracket is closed by the same type in the correct order. "()[]{}" is valid; "(]" and "([)]" are not.<br/><strong>Key idea:</strong> A stack of expected closers — the most recently opened bracket must be closed first, which is exactly LIFO order. Push every opening bracket; on each closing bracket, pop and require the matching type — a mismatch or an empty stack means invalid. At the end the stack must be empty, or some opener was never closed. This is why it fails on "([)]": the "]" arrives while "(" is still waiting for its ")".<br/><strong>Complexity:</strong> Time O(n), Space O(n) worst case (all openers).',
          example: {
            title: 'Python Solution',
            code: `def is_valid(s):
    closers = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)             # remember the opener
        else:
            if not stack or stack.pop() != closers[ch]:
                return False             # wrong closer, or closer with no opener
    return not stack                     # every opener must be closed`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'linked-lists': {
      title: 'LinkedList',
      subtitle: 'A linear collection of nodes connected by pointers',
      sections: [
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
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of linked list operation complexities. Costs assume a singly linked list unless noted otherwise. The single most important rule: <strong>anything that requires reaching a position by index costs O(n)</strong>, because the only way to move through a linked list is to follow one <code>next</code> pointer at a time from the head.',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Traverse / Print',
                'O(n)',
                'O(1)',
                'Visit every node once; the iterative version uses O(1) space, but a recursive traverse costs O(n) stack space.'
              ],
              [
                'Append (with tail)',
                'O(1)',
                'O(1)',
                'O(1) only because a tail pointer lets you rewire tail.next directly; without a tail pointer you must walk the whole list first, making it O(n).'
              ],
              [
                'Prepend',
                'O(1)',
                'O(1)',
                `Only the head pointer changes — no traversal needed. This is the linked list's biggest advantage over arrays, where inserting at the front shifts every element (O(n)).`
              ],
              [
                'Insert at index',
                'O(n)',
                'O(1)',
                'The splice itself is O(1) once you hold the node before the target; the O(n) is the price of walking there from the head.'
              ],
              [
                'Delete at index',
                'O(n)',
                'O(1)',
                'Same split as insert: O(n) to find the node before the target, O(1) to unlink it. Unlike arrays, no shifting of remaining elements is needed.'
              ],
              [
                'Search by value',
                'O(n)',
                'O(1)',
                'Linear scan is the best possible — nodes are scattered in memory with no random access, so binary search is impossible on a plain linked list.'
              ],
              [
                'Reverse',
                'O(n)',
                'O(1)',
                'Single pass with three pointers (prev, curr, nxt); only a few variables regardless of list size. A recursive reverse costs O(n) stack space.'
              ],
              [
                'Get / Set by index',
                'O(n)',
                'O(1)',
                'Arrays map arr[i] to a memory address via offset arithmetic (O(1)); here the i-th node is only reachable by following i pointers from the head.'
              ]
            ]
          },
          note: 'Interview tip: when asked for the cost of a linked list operation, always separate "cost to reach the position" (O(n) by pointer walking) from "cost to rewire the pointers" (O(1)). Stating both shows you understand where the time actually goes. Also remember the list itself uses O(n) space with per-node pointer overhead — one extra pointer per node for singly linked, two for doubly linked.'
        },
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
            `<strong>Blockchain:</strong> Each block stores the cryptographic hash of the previous block — essentially a <code>prev</code> pointer. The blocks form a chain back to the very first block (the genesis block). If anyone alters an old block, its hash changes and every later block's stored <code>prev</code> hash no longer matches — that is how the chain detects tampering.`,
            '<strong>Image viewers and photo galleries:</strong> The "next photo" / "previous photo" navigation in gallery apps is a doubly linked list of images: each photo knows its neighbors, so stepping in either direction is O(1) no matter how large the album is.'
          ],
          note: 'Notice the common thread: none of these systems ever ask "give me the element at index 500". They all navigate from a current position to a neighbor, or insert/remove at a known spot. When that is the access pattern, a linked list beats an array.'
        },
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
          text: `<strong>Problem:</strong> Return true if the list contains a cycle (some node can be reached again by following next pointers).<br/><strong>Key idea:</strong> Floyd's tortoise and hare. Move <code>slow</code> one step and <code>fast</code> two steps. If there is no cycle, <code>fast</code> reaches the end. If there is one, both pointers eventually enter the loop, and <code>fast</code> closes the gap to <code>slow</code> by exactly one node per step — it can never skip past forever, so they must meet. A hash set of visited nodes also works but costs O(n) space.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
          text: `<strong>Problem:</strong> Remove all duplicate values from an <em>unsorted</em> linked list, keeping the first occurrence of each value.<br/><strong>Key idea:</strong> Walk once with a <code>prev</code> pointer and a hash set of values seen so far. If the next node's value is already in the set, unlink it; otherwise record the value and advance. The set gives O(1) lookup, so the whole pass is linear. (Follow-up: without extra space, compare each node against the rest of the list — O(n²) time, O(1) space. If the list were <em>sorted</em>, duplicates are adjacent and no set is needed at all.)<br/><strong>Complexity:</strong> Time O(n), Space O(n).`,
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
          text: `<strong>Problem:</strong> The list stores a binary number with the most significant bit at the head. Convert it to its decimal value.<br/><strong>Key idea:</strong> Horner's rule. Walking left to right, each new bit is the least significant bit of the result so far — so double the accumulated value and add the current bit. No powers, no exponentiation, no string conversion.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
          text: `<strong>Problem:</strong> Reverse only the nodes between positions <code>left</code> and <code>right</code> (1-indexed) in a single pass, leaving the rest of the list untouched.<br/><strong>Key idea:</strong> Walk <code>prev</code> to the node just before the segment. Then repeat <code>right - left</code> times: pull the node after <code>curr</code> out of the segment and re-insert it right after <code>prev</code> (the segment front). Each insertion pushes the reversed prefix one node longer while <code>curr</code> stays anchored as the segment's tail. The dummy node keeps the <code>left = 1</code> case identical to every other.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
          text: `<strong>Problem:</strong> Reverse a doubly linked list in place and return the new head.<br/><strong>Key idea:</strong> Easier than the singly linked reverse: because every node carries both pointers, you do not need <code>prev</code>/<code>nxt</code> helper variables at all. Walk once and <strong>swap each node's own <code>prev</code> and <code>next</code></strong>. After the swap, the node you should visit next is reachable through the node's (new) <code>prev</code>. The last node you process becomes the new head.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
          text: `<strong>Problem:</strong> Given a value x, rearrange a doubly linked list so all nodes less than x come before all nodes greater than or equal to x, preserving the original relative order within each group.<br/><strong>Key idea:</strong> Same two-dummy-chain strategy as the singly linked Question 11, but every time you attach a node you must set <strong>both</strong> its <code>prev</code> and <code>next</code> — detach the node fully first, then wire it into its chain. After joining the chains, fix the join point's <code>prev</code> and null out the new head's <code>prev</code>. Forgetting any one of these leaves a dangling pointer that corrupts backward traversal.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
          text: `<strong>Problem:</strong> Swap every two adjacent nodes of a doubly linked list — swap the nodes themselves, not their values.<br/><strong>Key idea:</strong> Same skeleton as the singly linked Question 13, but each pair swap now touches <strong>six pointers</strong>: the pair's two <code>next</code>, their two <code>prev</code>, the link from the node before the pair, and the <code>prev</code> of the node after the pair. Write it as a fixed six-line rewiring ritual and the pointer soup disappears — <code>nxt.prev = first</code> is the line people most often forget.<br/><strong>Complexity:</strong> Time O(n), Space O(1).`,
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
        prev = first             # first is now the pair's second node
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
    stacks: {
      title: 'Stacks',
      subtitle: 'Last In, First Out — the engine of undo, recursion, and backtracking',
      sections: [
        {
          heading: 'What is a Stack?',
          text: 'A stack is a linear data structure that follows the LIFO principle — Last In, First Out. The last element you add is the first one you can remove. Think of a stack of plates in a cafeteria: you place new plates on top, and you take plates off the top. You never pull a plate from the middle or the bottom. That single restriction is the entire idea — and it is exactly what makes stacks so useful, because it guarantees that the most recently stored item is always the easiest to reach.',
          list: [
            '<strong>LIFO order:</strong> Elements come out in the exact reverse of the order they went in. Push 1, 2, 3 and you pop 3, 2, 1.',
            '<strong>One access point:</strong> All inserts and removals happen at a single end called the <em>top</em>. There is no random access to the middle or the bottom.',
            '<strong>Three core operations:</strong> <code>push</code> (add to the top), <code>pop</code> (remove from the top), and <code>peek</code> (read the top without removing it). All three are O(1).',
            '<strong>The call stack:</strong> Every running program uses a stack to track function calls — each call pushes a frame, each return pops one. Recursion is powered entirely by this structure.',
            '<strong>Undo systems:</strong> Text editors, browsers, and IDEs push every action onto a stack so that Undo simply pops the most recent one.',
            '<strong>Temporary memory you unwind:</strong> Whenever a problem asks you to remember things and revisit them in reverse order — nested brackets, backtracking choices, reversed output — that is a stack.'
          ]
        },
        {
          heading: 'Stack Anatomy',
          text: 'A stack has exactly two landmarks: the <strong>bottom</strong> (the first element ever pushed, buried under everything else) and the <strong>top</strong> (the most recently pushed element). Only the top is reachable. Every push, pop, and peek touches the top and nothing else — which is precisely why all three are O(1): no traversal, no shifting, no searching. The structure grows and shrinks from one end only, like a spring-loaded plate dispenser.',
          diagram: {
            caption: 'A stack after push(10), push(20), push(30) — only the top is accessible',
            chart: `flowchart LR
    B[Bottom: 10] --> M[20] --> T[Top: 30]
    TOP[top pointer] -.-> T
    style T fill:#f1c40f,color:#000
    style TOP fill:#9b59b6,color:#fff`
          }
        },
        {
          heading: 'Implementation Choices',
          text: 'A stack is an abstract idea — you can build it on top of two very different concrete structures. The choice barely matters for correctness (both give O(1) push and pop) but matters for memory layout, cache behavior, and which language idiom you should reach for.',
          list: [
            '<strong>Array-backed (dynamic array):</strong> Store elements contiguously and treat the <em>end</em> of the array as the top. Push is append, pop removes the last slot. This is the idiomatic choice almost everywhere: in Python a plain <code>list</code> with <code>append()</code> / <code>pop()</code> <em>is</em> a stack (both O(1) amortized); in Java use <code>ArrayDeque</code>, which is array-backed, unsynchronized, and fast.',
            '<strong>Linked-list-backed:</strong> Each node points to the node beneath it, and a head reference serves as the top. Push and pop are pure O(1) pointer rewiring with no amortized growth cost, and the stack never needs resizing. The price is one extra pointer per element and poor cache locality — nodes are scattered across the heap.',
            '<strong>Python guidance:</strong> use a plain list. Do <em>not</em> reach for <code>collections.deque</code> for a pure stack — deque is for when you also need O(1) pops from the front (queues), because <code>list.pop(0)</code> is O(n).',
            '<strong>Java guidance:</strong> prefer <code>ArrayDeque</code> over the legacy <code>java.util.Stack</code>. The legacy Stack extends Vector and synchronizes every method — pointless overhead in single-threaded code — and it exposes non-stack methods like index access that break the abstraction.'
          ]
        },
        {
          heading: 'Array-Backed Stack',
          text: 'The top is simply the last occupied slot of the array. Growth occasionally triggers a resize-and-copy, which is why push is O(1) <em>amortized</em> rather than strictly O(1).',
          diagram: {
            caption: 'Array-backed stack: the end of the array is the top',
            chart: `flowchart LR
    A0[index 0: 10] --> A1[index 1: 20] --> A2[Top: index 2: 30]
    style A2 fill:#f1c40f,color:#000`
          }
        },
        {
          heading: 'Linked-List-Backed Stack',
          text: 'The head node is the top; each node points down to the one beneath it. Push creates a new head, pop advances the head — both strictly O(1).',
          diagram: {
            caption: 'Linked-list-backed stack: the head is the top',
            chart: `flowchart LR
    T[Top: 30] --> M[20] --> B[Bottom: 10] --> NULL[None]
    style T fill:#f1c40f,color:#000
    style NULL fill:#e74c3c,color:#fff`
          }
        },
        {
          heading: 'Advantages',
          text: `The stack's restriction is its strength: by giving up random access you buy constant-time operations and a mental model simple enough to trust under interview pressure.`,
          list: [
            '<strong>O(1) push, pop, and peek:</strong> Every core operation touches only the top, so all three run in constant time — no traversal, no shifting, ever.',
            '<strong>Simple mental model:</strong> One access point means almost nothing can go wrong. Stack code is short, easy to verify, and hard to get wrong.',
            `<strong>Natural fit for reversal:</strong> LIFO automatically flips order — reversing a string, a number's digits, or a list is just push everything, then pop everything.`,
            '<strong>Natural fit for nesting:</strong> Brackets, HTML tags, and function calls are validated by matching each closer against the most recent unmatched opener — exactly what a stack hands you.',
            '<strong>Natural fit for backtracking:</strong> Push each choice as you make it; pop to undo the most recent choice and try the next branch. DFS and undo systems are built on this.',
            '<strong>Minimal memory overhead:</strong> An array-backed stack stores just the values plus one size counter — no per-element pointers like a linked structure.'
          ]
        },
        {
          heading: 'Disadvantages',
          text: 'The same restriction that makes a stack fast also makes it useless for a whole class of problems.',
          list: [
            '<strong>No random access:</strong> You cannot read the element in the middle or at the bottom without first popping everything above it.',
            '<strong>O(n) search:</strong> Finding a value means scanning (or popping) up to every element — there is no shortcut, and binary search is impossible.',
            `<strong>One-ended only:</strong> If you ever need to remove from both ends, a stack is the wrong tool — that is a deque's job.`,
            '<strong>Fixed capacity risk:</strong> A stack built on a fixed-size array (common in C or embedded code) overflows when full unless you add resize logic.',
            `<strong>Recursion depth limits:</strong> Because recursion uses the call stack, deeply recursive algorithms can hit a stack overflow — Python's default recursion limit is about 1,000 frames, and the JVM has a fixed thread stack size.`,
            '<strong>Not persistent:</strong> Pop destroys information. If you need history <em>and</em> the current state, you need two stacks or an auxiliary structure.'
          ]
        },
        {
          heading: 'Stack Operations',
          text: 'Every stack operation is explained below with its best efficient implementation, Python code, and a Mermaid visual. In the diagrams the stack is drawn horizontally — bottom on the left, top on the right.'
        },
        {
          heading: 'Operation 1: Push',
          text: '<strong>What it does:</strong> Add a new element onto the top of the stack, burying the previous top one level deeper.<br/><strong>Best efficiency:</strong> O(1) for a linked-list-backed stack; O(1) amortized for an array-backed stack (occasionally the backing array resizes, copying all n elements).',
          diagram: {
            caption: 'Push 40 onto a stack that holds 10, 20, 30',
            chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    NEW[40] -.push.-> T
    style NEW fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def push(stack, val):
    stack.append(val)   # the end of the list is the top

# Time: O(1) amortized, Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Pop',
          text: '<strong>What it does:</strong> Remove and return the element at the top — the most recently pushed item. The element beneath it becomes the new top.<br/><strong>Best efficiency:</strong> O(1). One caution: popping an empty stack is an error in most languages, so check <code>is_empty</code> first (or let the exception be your guard).',
          diagram: {
            caption: 'Pop returns 30 and exposes 20 as the new top',
            chart: `flowchart LR
    B[10] --> M[Top: 20]
    M -.pop returns 30.-> X[30]
    style M fill:#f1c40f,color:#000
    style X fill:#e74c3c,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def pop(stack):
    if not stack:
        raise IndexError("pop from empty stack")
    return stack.pop()

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 3: Peek / Top',
          text: '<strong>What it does:</strong> Read the top element without removing it. Use it when the decision you are about to make depends on what is currently on top — for example, checking whether the top bracket matches a closing bracket before you pop.<br/><strong>Best efficiency:</strong> O(1) — just look at the last slot or the head node.',
          diagram: {
            caption: 'Peek reads 30 but the stack is unchanged',
            chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    T -.peek returns 30.-> EYE[read only]
    style T fill:#f1c40f,color:#000
    style EYE fill:#3498db,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def peek(stack):
    if not stack:
        return None        # or raise, depending on your API
    return stack[-1]

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 4: Check Empty',
          text: '<strong>What it does:</strong> Report whether the stack holds any elements. This is the guard clause of nearly every stack algorithm — you check it before every pop and peek, and a non-empty stack at the end of bracket matching means an unmatched opener.<br/><strong>Best efficiency:</strong> O(1) — compare the size to zero or check whether the backing list is empty.',
          diagram: {
            caption: 'is_empty on a full stack vs an empty stack',
            chart: `flowchart LR
    S[Stack: 10, 20, 30] --> R[is_empty: False]
    E[Stack: empty] --> R2[is_empty: True]
    style R fill:#e74c3c,color:#fff
    style R2 fill:#2ecc71,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def is_empty(stack):
    return len(stack) == 0

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 5: Size',
          text: `<strong>What it does:</strong> Return how many elements are currently in the stack. Array-backed stacks get this free from the backing array's length; linked-list-backed stacks keep a running counter so they do not have to walk the chain.<br/><strong>Best efficiency:</strong> O(1) with a maintained counter or array length.`,
          diagram: {
            caption: 'Size of a three-element stack',
            chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    T -.size.-> N[returns 3]
    style T fill:#f1c40f,color:#000
    style N fill:#9b59b6,color:#fff`
          }
        },
        {
          text: 'Code:',
          code: `def size(stack):
    return len(stack)

# Time: O(1), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 6: Search',
          text: '<strong>What it does:</strong> Find whether a value exists in the stack and, if so, how far it is from the top.<br/><strong>Best efficiency:</strong> O(n) — there is no random access, so you scan from the top downward. If your algorithm searches often, a stack is the wrong structure; add a hash set or use a different design.',
          diagram: {
            caption: 'Search for 20: found 1 step below the top',
            chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    style M fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def search(stack, target):
    for i in range(len(stack) - 1, -1, -1):   # top to bottom
        if stack[i] == target:
            return len(stack) - 1 - i         # distance from the top
    return -1

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 7: Traverse / Print',
          text: '<strong>What it does:</strong> Visit every element, conventionally from the top down to the bottom — the order in which elements would be popped.<br/><strong>Best efficiency:</strong> O(n) time, O(1) extra space for a simple read-only walk. Printing a stack is mainly a debugging aid; real algorithms rarely traverse a stack they intend to keep.',
          diagram: {
            caption: 'Traverse from the top down: 30, then 20, then 10',
            chart: `flowchart LR
    T[Top: 30] --> M[20] --> B[Bottom: 10]
    style T fill:#f1c40f,color:#000`
          }
        },
        {
          text: 'Code:',
          code: `def traverse(stack):
    for val in reversed(stack):   # top to bottom
        print(val)

# Time: O(n), Space: O(1)`,
          language: 'python'
        },
        {
          heading: 'Operation 8: Reverse Using a Stack',
          text: '<strong>What it does:</strong> Reverse a sequence by pushing every element onto a stack, then popping them all back out.<br/><strong>Best efficiency:</strong> O(n) time and O(n) extra space for the stack. It is rarely the fastest way to reverse an array in place, but it is the canonical demonstration of LIFO and the engine behind iterative tree/graph traversals that must revisit nodes in reverse order.',
          diagram: {
            caption: 'Pushing 10, 20, 30 then popping flips the order',
            chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      B[10] --> M[20] --> T[Top: 30]
    end
    subgraph After[After]
      direction LR
      A1[30] --> A2[20] --> A3[10]
    end
    Before ~~~ After
    style T fill:#f1c40f,color:#000
    style A1 fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'How stack reversal works',
          text: 'Push every element onto the stack in order — 10 goes in first, then 20, then 30, so 30 sits on top. Now pop them all back out: 30 comes out first, then 20, then 10. The last element pushed is the first element retrieved, so the output is the exact reverse of the input. <strong>Trace on [10, 20, 30]:</strong> push 10 → push 20 → push 30 (stack top to bottom: 30, 20, 10) → pop gives 30, pop gives 20, pop gives 10. One pass in, one pass out — order flipped for free.'
        },
        {
          text: 'Code:',
          code: `def reverse_with_stack(items):
    stack = []
    for x in items:
        stack.append(x)      # push everything
    out = []
    while stack:
        out.append(stack.pop())   # pop flips the order
    return out

# Time: O(n), Space: O(n)`,
          language: 'python'
        },
        {
          heading: 'Complete Stack Class',
          text: 'Below is a production-quality stack in both languages: push, pop, peek, is_empty / isEmpty, and size — plus a bonus <code>min()</code> method that tracks a parallel min-stack so the current minimum is retrievable in O(1). The min-stack holds the running minimum at every level: push a value whenever it is less than or equal to the current minimum, and pop it whenever the popped value equals the current minimum. (LeetCode 155 asks for exactly this class.)'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Complete Stack Class in Python',
            code: `class Stack:
    """Array-backed stack: a plain Python list is the idiomatic stack
    because list.append() and list.pop() from the end are O(1) amortized."""
    def __init__(self):
        self._data = []
        self._min = []          # parallel stack of running minimums

    def push(self, val):
        self._data.append(val)
        if not self._min or val <= self._min[-1]:
            self._min.append(val)        # new running minimum

    def pop(self):
        if not self._data:
            raise IndexError("pop from empty stack")
        val = self._data.pop()
        if val == self._min[-1]:
            self._min.pop()              # that minimum is leaving
        return val

    def peek(self):
        if not self._data:
            raise IndexError("peek from empty stack")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)

    def min(self):
        if not self._min:
            raise IndexError("min from empty stack")
        return self._min[-1]             # O(1) minimum

# Driver
s = Stack()
for v in [5, 3, 7, 3, 8]:
    s.push(v)
print("size:", s.size())        # 5
print("peek:", s.peek())        # 8
print("min:", s.min())          # 3
print("pop:", s.pop())          # 8
print("min:", s.min())          # 3
print("pop:", s.pop())          # 3
print("min:", s.min())          # 3  (the first 3 is still there)
print("pop:", s.pop())          # 7
print("min:", s.min())          # 3
print("pop:", s.pop())          # 3
print("min:", s.min())          # 5
print("is_empty:", s.is_empty())  # False
s.pop()
print("is_empty:", s.is_empty())  # True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Complete Stack Class in Java',
            code: `import java.util.ArrayDeque;
import java.util.Deque;

public class Stack {
    // ArrayDeque is used instead of the legacy java.util.Stack:
    // legacy Stack extends Vector and synchronizes every method,
    // which is needless overhead in single-threaded code.
    private final Deque<Integer> data = new ArrayDeque<>();
    private final Deque<Integer> minStack = new ArrayDeque<>();  // running minimums

    public void push(int val) {
        data.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);           // new running minimum
        }
    }

    public int pop() {
        int val = data.pop();             // throws NoSuchElementException if empty
        if (val == minStack.peek()) {
            minStack.pop();               // that minimum is leaving
        }
        return val;
    }

    public int peek() {
        return data.peek();               // null-safe alternative: check isEmpty first
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    public int size() {
        return data.size();
    }

    public int min() {
        return minStack.peek();           // O(1) minimum
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        for (int v : new int[]{5, 3, 7, 3, 8}) s.push(v);
        System.out.println("size: " + s.size());        // 5
        System.out.println("peek: " + s.peek());        // 8
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 8
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 3
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 7
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 3
        System.out.println("min: " + s.min());          // 5
        System.out.println("isEmpty: " + s.isEmpty());  // false
        s.pop();
        System.out.println("isEmpty: " + s.isEmpty());  // true
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of stack operation complexities, assuming an array-backed stack (Python list / Java ArrayDeque) unless noted otherwise. The single most important rule: <strong>anything at the top is O(1), anything deeper is O(n)</strong> — because the top is the only door into the structure.',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Push',
                'O(1) amortized',
                'O(1)',
                'Append at the top. Amortized because the backing array occasionally doubles and copies; a linked-list-backed stack is strictly O(1) but pays one pointer per element.'
              ],
              [
                'Pop',
                'O(1)',
                'O(1)',
                'Remove the top element — no shifting, because removal happens at the end of the array, never the front. Guard against popping an empty stack.'
              ],
              [
                'Peek / Top',
                'O(1)',
                'O(1)',
                'Read the last slot or head node without removing it. The cheapest operation the structure offers.'
              ],
              [
                'Check Empty / Size',
                'O(1)',
                'O(1)',
                'Array length or a maintained counter — never requires walking the elements.'
              ],
              [
                'Search',
                'O(n)',
                'O(1)',
                'No random access, so you must scan from the top (or pop everything). Frequent searching means you chose the wrong structure — pair the stack with a hash set.'
              ],
              [
                'Traverse / Print',
                'O(n)',
                'O(1)',
                'A read-only walk from top to bottom visits each element once.'
              ],
              [
                'Reverse via stack',
                'O(n)',
                'O(n)',
                'One pass to push everything, one pass to pop it back; the O(n) space is the second structure holding the elements mid-flip.'
              ],
              [
                'Monotonic stack pass',
                'O(n)',
                'O(n)',
                'A full next-greater-element style sweep looks like O(n²) but is O(n): each element is pushed once and popped at most once, so total work across the whole pass is 2n.'
              ]
            ]
          },
          note: `Interview tip: when an interviewer challenges the O(n) claim for a monotonic stack ("isn't that while loop O(n) inside an O(n) loop?"), the winning argument is amortized analysis — <strong>each element is pushed exactly once and popped at most once</strong>, so the total number of pushes and pops across the entire pass is at most 2n. Also learn the recognition cue: if a problem says "most recent", "nearest previous", "nested", or "in reverse order", it is a stack problem — LIFO means reversal, nesting, and most-recent-first.`
        },
        {
          heading: 'Real-World Applications',
          text: 'Stacks sit underneath more of your daily tooling than any other data structure. Every example below shares the same signature: the system must remember a sequence of things and revisit them in the <strong>exact reverse order</strong> — most recent first.',
          list: [
            '<strong>Function call stack (and stack overflow):</strong> Every time your program calls a function, the runtime pushes a <em>stack frame</em> holding the return address, parameters, and local variables; every <code>return</code> pops the top frame and resumes the caller. This is why recursion works at all — each recursive call is just another frame on the pile. It is also why unbounded recursion crashes with a <em>stack overflow</em>: the pile grows past its fixed memory budget.',
            '<strong>Undo / Redo in editors:</strong> Every keystroke, deletion, or paste is pushed onto an <em>undo stack</em>. Ctrl+Z pops the most recent action and reverses it — you always undo your <em>latest</em> change first, never an old one, so LIFO is the only sensible order. Redo uses a second stack: undone actions are pushed there and replayed on Ctrl+Y.',
            '<strong>Expression parsing and bracket matching in compilers:</strong> When a compiler reads <code>{ a * (b + c) }</code> it pushes every opening bracket and operator, and pops when it meets a closer — a closer matches if and only if the stack top is its partner. Mismatched nesting (<code>(]</code>) is detected the moment a pop reveals the wrong opener. The same mechanism converts infix expressions to postfix and evaluates them.',
            '<strong>Browser back button:</strong> Browsers model history with <em>two</em> stacks. Every page you visit is pushed onto the <em>back stack</em>. Clicking Back pops the current page, pushes it onto the <em>forward stack</em>, and shows the new top. Clicking Forward does the mirror image. Visiting a fresh page after going back clears the forward stack — which is why the Forward button greys out.',
            '<strong>DFS and backtracking (maze solving, puzzle solvers):</strong> Depth-first search pushes each newly discovered node and explores the most recent one first — diving deep before backing up. Maze solvers and Sudoku solvers use the same pattern: push every choice, and when you hit a dead end, pop back to the most recent fork and try the next option. Recursive DFS is the same algorithm using the call stack implicitly.',
            '<strong>Runtime memory management:</strong> Beyond function calls, the <em>stack region</em> of process memory allocates and frees local variables automatically in LIFO order — when a function returns, its entire frame is reclaimed by moving one pointer. This is why stack allocation is dramatically cheaper than heap allocation, and why local variables cannot outlive their function.',
            `<strong>Calculators and RPN evaluation:</strong> Reverse Polish Notation (<code>3 4 + 5 *</code>) is evaluated with a single stack: push numbers, and on an operator pop the top two operands, apply it, and push the result. No parentheses or precedence rules are needed — the stack encodes the order of operations. HP's classic calculators and the JVM's bytecode interpreter both work exactly this way.`
          ],
          note: `Notice the common thread: every one of these systems accesses data most-recent-first and treats the stack as temporary memory it later unwinds. Calls return in reverse order of being made, edits are undone newest-first, brackets close in reverse of opening, and backtracking retreats to the latest decision. Whenever a problem smells like "remember this for later, and I'll need the most recent one first", reach for a stack.`
        },
        {
          heading: 'Top Interview Questions on Stacks',
          text: 'The eight most frequently asked stack interview questions are below — each in its own collapsible card with the key idea, a solved Python answer, and its complexity. Master the three recurring patterns — the <strong>monotonic stack</strong> (Questions 4, 5, 8), <strong>two-stack designs</strong> (Question 2, and the browser-history model), and a <strong>stack of pairs / parallel stacks</strong> for tracking extra state (Questions 2 and 8) — and nearly every stack problem becomes a variation of these.',
          note: 'Pattern cheat sheet: a monotonic stack solves anything phrased "next greater/smaller element" or "nearest larger/smaller to the left/right" in O(n); a second parallel stack solves "track an aggregate (min/max) of everything currently in the stack" in O(1) per query; and a plain stack as a running result solves "collapse or cancel adjacent things" (duplicates, backspaces, brackets). If the brute force compares every element with everything after it, suspect a monotonic stack.'
        },
        {
          heading: 'Practice Question 1: Valid Parentheses (LeetCode 20, Easy)',
          text: '<strong>Problem:</strong> Given a string containing only <code>()[]{}</code>, return true if every opening bracket is closed by the same type in the correct order.<br/><strong>Key idea:</strong> Push the <em>expected closing bracket</em> for every opener you see. When you meet a closing bracket, it must equal the top of the stack — the most recent unmatched opener is always the one that must close next, which is exactly LIFO. Two failure modes: a closer with an empty stack (nothing to match), and a non-empty stack at the end (unclosed openers).<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def is_valid(s):
    stack = []                       # stack of expected closers
    pairs = {"(": ")", "[": "]", "{": "}"}
    for ch in s:
        if ch in pairs:
            stack.append(pairs[ch])  # remember what must close this
        else:
            if not stack or stack.pop() != ch:
                return False         # wrong closer, or nothing open
    return not stack                 # valid only if nothing left open`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Min Stack (LeetCode 155, Medium)',
          text: '<strong>Problem:</strong> Design a stack supporting push, pop, top, and retrieving the minimum element — all in O(1) time.<br/><strong>Key idea:</strong> A single variable cannot survive pops (if the min is popped, you have lost the previous min), so keep a <strong>parallel min-stack</strong> whose top always holds the minimum of everything below it. Push a value onto it whenever the new value is less than or equal to the current min; pop from it whenever the popped value equals the current min. The duplicate-push on equality matters: two 3s in the main stack need two 3s in the min-stack, or popping one 3 would wrongly discard the minimum.<br/><strong>Complexity:</strong> Time O(1) per operation, Space O(n).',
          example: {
            title: 'Python Solution',
            code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.mins = []               # parallel stack of running minimums

    def push(self, val):
        self.stack.append(val)
        if not self.mins or val <= self.mins[-1]:
            self.mins.append(val)    # <= keeps duplicate minimums

    def pop(self):
        val = self.stack.pop()
        if val == self.mins[-1]:
            self.mins.pop()

    def top(self):
        return self.stack[-1]

    def get_min(self):
        return self.mins[-1]         # O(1) minimum`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Evaluate Reverse Polish Notation (LeetCode 150, Medium)',
          text: '<strong>Problem:</strong> Evaluate an arithmetic expression in Reverse Polish Notation, e.g. <code>["2", "1", "+", "3", "*"]</code> = (2 + 1) * 3 = 9. Division truncates toward zero.<br/><strong>Key idea:</strong> One operand stack. Push every number; when a token is an operator, pop the top two operands — the <em>right</em> operand comes off first, so pop into <code>b</code> then <code>a</code> and compute <code>a op b</code> — then push the result. Operators always apply to the two most recent values, which is LIFO by definition. For division use <code>int(a / b)</code> rather than <code>//</code> so that negative results truncate toward zero instead of flooring.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def eval_rpn(tokens):
    stack = []
    ops = {"+", "-", "*", "/"}
    for tok in tokens:
        if tok in ops:
            b = stack.pop()          # right operand is on top
            a = stack.pop()
            if tok == "+":
                stack.append(a + b)
            elif tok == "-":
                stack.append(a - b)
            elif tok == "*":
                stack.append(a * b)
            else:
                stack.append(int(a / b))   # truncate toward zero
        else:
            stack.append(int(tok))
    return stack[0]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Daily Temperatures (LeetCode 739, Medium)',
          text: `<strong>Problem:</strong> Given an array of daily temperatures, return for each day how many days you must wait until a warmer day, or 0 if none comes.<br/><strong>Key idea:</strong> Keep a <strong>monotonic decreasing stack of indices</strong> — temperatures on the stack are in decreasing order, each still waiting for its warmer day. When today's temperature is warmer than the one at the stack top, today <em>is</em> that day's answer: pop it and record the index difference. Store indices rather than values, because the answer is a distance, not a temperature. The while-loop looks quadratic but is not: every index is pushed once and popped at most once.<br/><strong>Complexity:</strong> Time O(n), Space O(n).`,
          example: {
            title: 'Python Solution',
            code: `def daily_temperatures(temps):
    n = len(temps)
    answer = [0] * n
    stack = []                       # indices, temps decreasing top-down
    for i in range(n):
        while stack and temps[i] > temps[stack[-1]]:
            prev = stack.pop()       # day i is prev's warmer day
            answer[prev] = i - prev
        stack.append(i)
    return answer`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Next Greater Element I (LeetCode 496, Easy)',
          text: `<strong>Problem:</strong> Given two arrays <code>nums1</code> and <code>nums2</code> where every element of <code>nums1</code> also appears in <code>nums2</code>, find for each element of <code>nums1</code> the next greater element to its right in <code>nums2</code>, or -1.<br/><strong>Key idea:</strong> Run one monotonic decreasing stack sweep over <code>nums2</code> and record every answer in a <strong>hash map</strong> as you go: whenever a new value pops a smaller value off the stack, the new value is that popped value's next greater element — store <code>next_greater[popped] = new</code>. Then answer every query of <code>nums1</code> with an O(1) map lookup. One sweep computes all answers at once instead of searching rightward for each query.<br/><strong>Complexity:</strong> Time O(n + m), Space O(n).`,
          example: {
            title: 'Python Solution',
            code: `def next_greater_element(nums1, nums2):
    next_greater = {}
    stack = []                       # decreasing values
    for num in nums2:
        while stack and num > stack[-1]:
            next_greater[stack.pop()] = num
        stack.append(num)
    return [next_greater.get(x, -1) for x in nums1]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Remove All Adjacent Duplicates In String (LeetCode 1047, Easy)',
          text: '<strong>Problem:</strong> Repeatedly remove pairs of adjacent equal letters until none remain, e.g. <code>"abbaca"</code> → <code>"ca"</code>.<br/><strong>Key idea:</strong> Use the stack <em>as the running result</em>. For each character, if it equals the stack top, pop — the pair cancels — otherwise push it. This works because a removal can create a new adjacency with the character just before the pair (<code>"abbaca"</code>: removing <code>bb</code> makes the two <code>a</code>s adjacent), and the stack top is always exactly that previous surviving character. A single pass with no re-scanning.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def remove_duplicates(s):
    stack = []                       # the surviving characters
    for ch in s:
        if stack and stack[-1] == ch:
            stack.pop()              # pair cancels out
        else:
            stack.append(ch)
    return "".join(stack)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Backspace String Compare (LeetCode 844, Easy)',
          text: '<strong>Problem:</strong> Given two strings where <code>#</code> means a backspace, return true if they are equal after being typed into a text editor, e.g. <code>"ab#c"</code> and <code>"ad#c"</code> both become <code>"ac"</code>.<br/><strong>Key idea:</strong> Simulate the typing with a stack: push ordinary characters, pop on <code>#</code>. A backspace always erases the most recent surviving character — pure LIFO — so the final stack contents are the typed text. Build both and compare. (Follow-up worth mentioning: two pointers walking from the right, skipping backspaced characters, solves it in O(1) space — but the stack version is the one to say first.)<br/><strong>Complexity:</strong> Time O(n + m), Space O(n + m).',
          example: {
            title: 'Python Solution',
            code: `def backspace_compare(s, t):
    def build(text):
        stack = []
        for ch in text:
            if ch == "#":
                if stack:
                    stack.pop()      # erase the last typed char
            else:
                stack.append(ch)
        return "".join(stack)
    return build(s) == build(t)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Largest Rectangle in Histogram (LeetCode 84, Hard)',
          text: '<strong>Problem:</strong> Given bar heights, return the area of the largest rectangle that fits inside the histogram, e.g. <code>[2,1,5,6,2,3]</code> → 10 (the 5-and-6 bars, two wide).<br/><strong>Key idea:</strong> Every bar can extend left and right until the first shorter bar on each side — and "nearest smaller element" is a monotonic stack problem. Keep a <strong>monotonic increasing stack of indices</strong>; when the current bar is shorter than the stack top, popping that top computes its rectangle: the popped index is the height, and the width is the gap between the current index and the new stack top (the nearest smaller bars on either side). Append a sentinel 0 height at the end so every remaining bar is forced to pop and get evaluated. Amortized O(n) by the same push-once-pop-once argument.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def largest_rectangle_area(heights):
    stack = []                       # indices, heights increasing top-down
    max_area = 0
    for i, h in enumerate(heights + [0]):   # sentinel 0 flushes the stack
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1     # between nearest smaller bars
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    queues: {
      title: 'Queues',
      subtitle: 'First In, First Out — fair scheduling for tasks, messages, and traversals',
      sections: [
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
        {
          heading: 'Implementation Choices',
          text: 'A queue is an abstract idea — FIFO order — that can be built on several concrete structures. The choice matters enormously: the wrong backing structure turns an O(1) operation into O(n). Here are the four options, from worst to most instructive.',
          list: [
            '<strong>Naive array list (the trap):</strong> In Python, using a plain <code>list</code> with <code>append()</code> for enqueue and <code>pop(0)</code> for dequeue looks natural but is a classic mistake. <code>list.pop(0)</code> is <strong>O(n)</strong> because Python must shift every remaining element one slot to the left. A loop that dequeues n items this way costs O(n²) total. Never do this in an interview.',
            `<strong>collections.deque / Java ArrayDeque (the right default):</strong> Python's <code>collections.deque</code> is implemented as a doubly-linked list of fixed-size blocks, so <code>popleft()</code> and <code>append()</code> are both O(1). In Java, use <code>ArrayDeque</code> (a resizable circular array) — never the legacy synchronized <code>Stack</code>/<code>Vector</code> classes, and prefer it over <code>LinkedList</code> for speed. This is what you reach for in real code and interviews.`,
            '<strong>Circular buffer (fixed capacity):</strong> A plain array where the front and back indices wrap around to index 0 when they pass the last slot, computed with modulo: <code>index = (index + 1) % capacity</code>. Freed slots at the front are reused by new arrivals — no shifting, no wasted space, O(1) everything. This is how ring buffers in operating systems, audio streaming, and LeetCode 622 work.',
            `<strong>Linked-list-backed:</strong> Keep <code>head</code> and <code>tail</code> pointers; enqueue appends at the tail, dequeue unlinks the head. Both O(1), and the queue grows one node at a time with no capacity planning. Java's <code>LinkedList</code> implements the Queue interface exactly this way.`
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
        {
          heading: 'Queue Operations',
          text: 'The sections below walk through each core operation with its best efficient implementation, a Mermaid visual, and code. Complexity depends entirely on the backing structure — everything here assumes a deque or circular buffer, where both ends are O(1).'
        },
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
        {
          heading: 'Operation 7: Traverse / Print',
          text: `<strong>What it does:</strong> Visit every element from front to back, typically to display the queue's contents.<br/><strong>Best efficiency:</strong> O(n) time, O(1) extra space (excluding the output). Iterating a deque visits elements in FIFO order without disturbing them.`,
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
          text: 'The whole trick is one line of arithmetic: <code>index = (index + 1) % capacity</code>. When an index reaches the end of the array, the modulo folds it back to 0 — so the <em>back</em> pointer, after writing at index 4 of a capacity-5 buffer, wraps to index 0 and reuses the slot that a dequeue freed. No element ever shifts.<br/><strong>Trace (capacity 5):</strong> enqueue A, B, C → slots 0, 1, 2 filled, back = 3. dequeue A → slot 0 freed, front = 1. enqueue D, E → slots 3, 4 filled, back wraps to 0. enqueue F → written at slot 0, back = 1. The buffer now holds <code>[F, B, C, D, E]</code> physically, but reading from front gives B, C, D, E, F — perfect FIFO order with zero shifting.'
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
        {
          heading: 'Time & Space Complexity',
          text: 'Queue complexity is entirely a story about the <strong>backing implementation</strong>. The FIFO contract is always the same; what changes is whether removing from the front costs O(1) or O(n). The table below assumes the correct choices (deque, circular buffer, linked list) and calls out the traps.',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Enqueue',
                'O(1)',
                'O(1)',
                'Append to the back of a deque, or write at the back index of a circular buffer — no traversal, no shifting.'
              ],
              [
                'Dequeue',
                'O(1)',
                'O(1)',
                'deque.popleft() or advancing the front index with modulo — the front element is always directly reachable.'
              ],
              [
                'Peek / Front',
                'O(1)',
                'O(1)',
                'Read queue[0] or the front slot without removing; guard against the empty queue first.'
              ],
              [
                'Is empty / Size',
                'O(1)',
                'O(1)',
                'len() on a deque is constant; a circular buffer or linked queue keeps a running counter.'
              ],
              [
                'Dequeue via list.pop(0)',
                'O(n)',
                'O(1)',
                'THE trap: Python shifts every remaining element one slot left. n dequeues this way cost O(n²) total — use collections.deque instead.'
              ],
              [
                'Deque popleft',
                'O(1)',
                'O(1)',
                'collections.deque is a doubly-linked list of fixed-size blocks, so both ends unlink in constant time; Java ArrayDeque is a resizable ring.'
              ],
              [
                'Circular buffer ops',
                'O(1)',
                'O(1)',
                'index = (index + 1) % capacity wraps pointers around the ring — freed slots are reused with zero shifting.'
              ],
              [
                'Search',
                'O(n)',
                'O(1)',
                'Linear scan from front to back is the only option; queues have no random access and no value ordering.'
              ],
              [
                'Traverse / Print',
                'O(n)',
                'O(1)',
                'Visit every element once in FIFO order; extra space excludes the output itself.'
              ],
              [
                'Resize (growable buffer)',
                'O(n) amortized',
                'O(n)',
                'Doubling copies all n elements front-to-back, but happens rarely enough that the amortized enqueue cost stays O(1).'
              ],
              [
                'Monotonic deque full pass',
                'O(n)',
                'O(k)',
                'Each element enters and leaves the deque at most once, so the while loop inside the for loop totals 2n operations, not n².'
              ]
            ]
          },
          note: `Interview tip: a queue means FIFO — process in arrival order — which is why it powers BFS, scheduling, and buffering. When asked for a queue operation's cost, always name your implementation first, because the complexity depends on it (deque/circular buffer O(1) vs naive list O(n)). And for sliding-window problems, memorize the key argument: each element enters and leaves the deque at most once, so a monotonic deque pass is amortized O(n) overall — the inner while loop does NOT make it O(n²).`
        },
        {
          heading: 'Real-World Applications',
          text: 'Queues are the invisible plumbing of every system that receives work faster than it can be processed, or that must guarantee fair, arrival-ordered service. Each example below shows the same pattern: <strong>order matters</strong>, and the queue is what enforces it while decoupling the side that produces work from the side that consumes it.',
          list: [
            `<strong>OS task / process scheduling:</strong> When multiple processes are ready to run, the operating system's scheduler places them in a ready queue and grants the CPU in arrival order (round-robin scheduling dequeues a process, runs it for a time slice, and re-enqueues it at the back). FIFO guarantees no process starves while newer arrivals keep getting scheduled — fairness is the entire point.`,
            '<strong>Printer spooler:</strong> When ten people click Print at once, the documents do not fight over the printer — each job is enqueued on a print spooler and printed strictly in submission order. The first document submitted is the first printed, and users can keep working because the queue absorbs the burst between the fast producers (clicking Print) and the slow consumer (the physical printer).',
            '<strong>Message brokers (Kafka consumer groups, RabbitMQ, AWS SQS):</strong> Producers publish events (orders placed, payments received, emails to send) into a queue; consumer workers dequeue and process them in order. The queue decouples the two sides — if consumers crash or slow down, messages simply accumulate safely instead of being lost, and you can add more consumers to drain the backlog faster.',
            '<strong>BFS in graphs and level-order tree traversal:</strong> Breadth-first search enqueues the start node, then repeatedly dequeues a node and enqueues its unvisited neighbors. Because nodes leave the queue in the order they were discovered, BFS explores level by level — which is precisely why it finds shortest paths in unweighted graphs and prints tree levels in order. GPS routing, social-network "degrees of separation", and web crawlers all run on this loop.',
            '<strong>Call-center and customer support routing:</strong> "Your call is important to us; you are number 4 in the queue" is a literal FIFO queue. Calls arrive faster than agents can answer, so they wait in arrival order, and the next free agent dequeues the longest-waiting caller. Skipping the order would be unfair — and customers would notice immediately.',
            `<strong>Producer-consumer pipelines in web servers:</strong> A web server's acceptor thread enqueues incoming connections while a pool of worker threads dequeues and handles each request. The queue smooths traffic spikes: a burst of 1,000 requests does not require 1,000 threads, it just lengthens the queue. Thread pools, task queues like Celery, and I/O event loops are all this pattern.`,
            '<strong>Rate limiting (sliding-window request log):</strong> To enforce "at most 100 requests per minute", an API gateway keeps a deque of recent request timestamps per client. On each new request it evicts timestamps older than 60 seconds from the front, then checks the size — if the window is full, the request is rejected. The deque is perfect here because old entries leave from the front exactly as new ones arrive at the back, both in O(1).'
          ],
          note: 'The common thread: order matters, service is first-come-first-served, and the queue decouples producers from consumers — each side runs at its own speed while the queue absorbs the difference. Whenever you see "in arrival order", "waiting line", "buffer", or "backlog", a queue is almost always the right structure.'
        },
        {
          heading: 'Top Interview Questions on Queues',
          text: 'The eight most frequently asked queue interview questions are below — each in its own collapsible card with the key idea, a solved Python answer, and its complexity. Four patterns cover nearly everything: <strong>two stacks simulating a queue</strong> (amortized O(1) via the pour trick), the <strong>circular buffer</strong> (modulo indices plus a size counter), the <strong>monotonic deque</strong> for sliding-window maximum/minimum, and the <strong>queue + hash map</strong> combo for "first unique" problems where stale candidates are lazily evicted from the front.',
          note: 'Pattern cheat sheet: "implement X using Y" means two structures with a pour-on-demand (Q1, Q2). "Fixed capacity, no shifting" means a circular buffer with (index + 1) % k and a count (Q3). "Last N events / average / window" means a deque that evicts expired entries from the front (Q4, Q5). "First unique" means counts plus lazy eviction of invalid candidates (Q6). "Sliding window max/min" means a monotonic deque of indices — each element enters and leaves at most once, giving amortized O(n) (Q8).'
        },
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
          text: `<strong>Problem:</strong> Implement a counter whose ping(t) returns how many requests were made in the last 3000 milliseconds, inclusive of t. Calls arrive with strictly increasing timestamps.<br/><strong>Key idea:</strong> Keep a deque of timestamps. On each ping, append t, then evict from the front every timestamp older than <code>t - 3000</code> — those can never be inside any future window either, since timestamps only increase. The deque's length is exactly the answer. This is the sliding-window-eviction pattern in its purest form.<br/><strong>Complexity:</strong> O(1) amortized per ping (each timestamp is added once and evicted at most once); Space O(w), where w is the window size.`,
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
          text: `<strong>Problem:</strong> Return the index of the first non-repeating character in a string, or -1 if none exists.<br/><strong>Key idea:</strong> Combine a count array with a queue of candidate indices. Scan the string once: increment each character's count and enqueue its index. After each step, lazily evict from the front any candidate whose count has risen above 1 — the front of the queue is then always the earliest index that is still unique. (A two-pass variant — count everything first, then rescan for the first count of 1 — is equally valid and simpler, but the queue version scales to streaming input.)<br/><strong>Complexity:</strong> Time O(n); Space O(1) extra — the count array and queue hold at most 26 distinct letters.`,
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
          text: `<strong>Problem:</strong> Given an array and a window size k, return the maximum of every window as it slides one step to the right.<br/><strong>Key idea:</strong> Maintain a <strong>monotonic decreasing deque of indices</strong>: the front always holds the index of the current window's maximum. For each new element, pop from the back every index whose value is smaller — those can never be a maximum again while the new element is in any window. Then evict the front if it has slid out of the window, and once the first full window forms, record the front's value. The amortized argument is the one to quote: each element enters and leaves the deque at most once, so the nested while loop totals O(n), not O(n·k).<br/><strong>Complexity:</strong> Time O(n); Space O(k).`,
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
    },
    hashmaps: {
      title: 'Hash Maps',
      subtitle: `O(1) key-value lookup — the interviewer's favorite space-for-time trade-off`,
      sections: [
        {
          heading: 'What is a Hash Map?',
          text: 'A hash map (also called a hash table or dictionary) is a data structure that stores <strong>key–value pairs</strong> and supports insert, lookup, and delete in expected O(1) time. It turns a key of almost any type into an integer bucket index via a hash function, then stores the value at that bucket. When an interviewer asks "can you do better than O(n) for finding a matching element?", the answer is almost always a hash map.',
          list: [
            '<strong>Key–value storage:</strong> Every entry maps a unique key to an associated value (e.g. word → frequency, userId → profile).',
            '<strong>Hash function:</strong> Converts a key into an integer that is reduced modulo the bucket-array length to pick a slot.',
            '<strong>Expected O(1) operations:</strong> get, put, and delete average constant time when the hash spreads keys evenly.',
            '<strong>Unordered (usually):</strong> Classic hash maps do not keep keys sorted. Python <code>dict</code> (3.7+) and Java <code>LinkedHashMap</code> preserve insertion order; Java <code>TreeMap</code> keeps keys sorted at O(log n).',
            '<strong>Foundation of modern software:</strong> Caches, databases, language runtimes, and nearly every "count / group / lookup" interview problem rests on hash maps.'
          ]
        },
        {
          heading: 'Components of a Hash Map',
          text: 'Under the hood a hash map is simple: an array of buckets, a hash function, and a strategy for handling collisions when two keys land in the same bucket.',
          list: [
            '<strong>Bucket array:</strong> A fixed-length array (that grows when full) where each slot holds zero or more entries.',
            '<strong>Hash function:</strong> Maps a key to an integer. Good hashes spread keys uniformly so no bucket gets overloaded.',
            '<strong>Load factor:</strong> Ratio of stored entries to bucket capacity (often ~0.75). When exceeded, the table resizes (usually doubles) and rehashes.',
            '<strong>Entry / node:</strong> The unit stored in a bucket — at minimum (key, value), and for chaining also a next pointer.',
            '<strong>Collision strategy:</strong> Separate chaining (linked list or tree per bucket) or open addressing (probe for another empty slot).'
          ]
        },
        {
          heading: 'How Hashing Works',
          text: 'Inserting a key–value pair is three steps: (1) compute <code>hash(key)</code>, (2) reduce it to a bucket index with modulo the array length, (3) place the entry in that bucket — either at the head of a chain or in the first empty probe slot.',
          diagram: {
            caption: 'key → hash → bucket index → store entry',
            chart: `flowchart LR
    K["key = 'apple'"] --> H["hash('apple')"]
    H --> M["hash % 8 = 3"]
    M --> B["Bucket 3"]
    B --> E["('apple', 5)"]
    style K fill:#3498db,color:#fff
    style E fill:#2ecc71,color:#fff`
          }
        },
        {
          diagram: {
            caption: 'Bucket array after several inserts (chaining on collision)',
            chart: `flowchart TB
    subgraph Buckets["Bucket Array size 8"]
      direction TB
      B0["0: empty"]
      B1["1: empty"]
      B2["2: banana → 2"]
      B3["3: apple → 5  →  cherry → 1"]
      B4["4: empty"]
      B5["5: date → 3"]
      B6["6: empty"]
      B7["7: elderberry → 7"]
    end
    style B3 fill:#f1c40f,color:#000`
          }
        },
        {
          text: '<strong>Why lookup is O(1) average:</strong> computing the hash and modulo is constant work, and with a good hash and reasonable load factor each bucket holds a small constant number of entries. You only pay linear cost when many keys collide into the same bucket — the rare worst case you should still mention in interviews.'
        },
        {
          heading: 'Collision Resolution',
          text: 'Two different keys can hash to the same bucket. How you resolve that collision is the main design difference between Python dicts and Java HashMaps.',
          list: [
            '<strong>Separate chaining (Java HashMap):</strong> Each bucket holds a linked list of entries. Since Java 8, a bucket that grows past 8 entries converts to a balanced tree (O(log n) worst case per bucket instead of O(n)).',
            '<strong>Open addressing (Python dict):</strong> On collision, probe other slots in the array (Python uses a form of open addressing with pseudo-random probing) until an empty slot is found. All data lives in the flat array — no per-bucket lists.',
            '<strong>Why it matters:</strong> Chaining handles high load factors gracefully; open addressing is more cache-friendly but needs a lower load factor and careful tombstones on delete.',
            '<strong>Interview answer:</strong> "Average O(1) assumes a uniform hash and bounded chain/probe length. Adversarial collisions can degrade to O(n); Java 8+ tree bins reduce that to O(log n)."'
          ]
        },
        {
          diagram: {
            caption: 'Separate chaining vs open addressing',
            chart: `flowchart LR
    subgraph Chain["Chaining"]
      direction TB
      C0["bucket 3"] --> C1["apple"] --> C2["cherry"]
    end
    subgraph Open["Open Addressing"]
      direction TB
      O0["slot 3: apple"]
      O1["slot 4: cherry (probed)"]
      O2["slot 5: empty"]
    end
    Chain ~~~ Open`
          }
        },
        {
          heading: 'Hash Map Variants',
          text: 'Pick the right map type for ordering and performance needs. Interviews often ask you to name the difference between these.'
        },
        {
          heading: 'Python dict, Counter, defaultdict, OrderedDict',
          text: `Python's built-in <code>dict</code> is a high-performance hash map that preserves insertion order (guaranteed since 3.7). Three important subclasses sit on top of it:`,
          list: [
            '<strong>dict:</strong> General key–value map. <code>d[k]</code>, <code>d.get(k, default)</code>, <code>del d[k]</code>, <code>k in d</code> are all O(1) average.',
            '<strong>Counter:</strong> Frequency map. <code>Counter(iterable)</code> builds counts in O(n); supports <code>+</code>, <code>-</code>, and <code>most_common(k)</code>.',
            '<strong>defaultdict:</strong> Auto-creates missing keys via a factory — <code>defaultdict(list)</code> for grouping, <code>defaultdict(int)</code> for counting — eliminates repetitive existence checks.',
            '<strong>OrderedDict:</strong> Explicit order control with <code>move_to_end</code> / <code>popitem(last=False)</code> — the classic building block for an LRU cache in pure Python.'
          ]
        },
        {
          heading: 'Java HashMap, TreeMap, LinkedHashMap',
          list: [
            '<strong>HashMap:</strong> O(1) average get/put/delete, no key order. Default choice for interviews.',
            '<strong>TreeMap:</strong> Red-Black tree backing — O(log n) operations, keys always sorted, supports range queries (<code>subMap</code>, <code>floorKey</code>).',
            '<strong>LinkedHashMap:</strong> Hash map + doubly linked list that preserves insertion order (or access order for LRU). O(1) operations with predictable iteration order.',
            '<strong>Hashtable:</strong> Legacy synchronized map — prefer <code>ConcurrentHashMap</code> for thread safety instead.'
          ]
        },
        {
          heading: 'Advantages',
          text: 'Hash maps dominate when the workload is "look up by key" rather than "walk by index" or "iterate in sorted order".',
          list: [
            '<strong>Expected O(1) lookup / insert / delete:</strong> The single biggest reason they win interviews and production systems.',
            '<strong>Flexible keys:</strong> Strings, integers, tuples (Python), and any object with a correct hashCode/equals (Java) can be keys.',
            '<strong>Eliminates nested loops:</strong> Replacing an O(n) inner search with a map lookup turns O(n²) into O(n) — the classic space-for-time trade-off.',
            '<strong>Natural grouping and counting:</strong> Frequency maps, adjacency lists, inverted indexes, and memoization tables are all hash maps.',
            '<strong>Rich standard-library support:</strong> Every major language ships a battle-tested implementation — you rarely need to write one from scratch.'
          ]
        },
        {
          heading: 'Disadvantages',
          text: 'Constant-time average case comes with memory and ordering costs you must understand.',
          list: [
            '<strong>No sorted order by default:</strong> Range queries and "next larger key" need a tree map (O(log n)), not a plain hash map.',
            '<strong>Extra memory:</strong> Bucket arrays, load-factor slack, and per-entry overhead use more RAM than a packed array of the same values.',
            '<strong>Worst-case O(n) (or O(log n)):</strong> Pathological collisions can degrade performance; always state "average O(1)" in interviews.',
            '<strong>Keys must be hashable / immutable:</strong> Mutable lists cannot be dict keys in Python; mutable keys in Java break equality contracts if mutated after insert.',
            '<strong>Cache misses vs arrays:</strong> Entries are not as contiguous as a plain array, so a pure sequential scan of values is often slower than scanning an array.',
            '<strong>Resize spikes:</strong> Rehashing on growth is O(n) for that operation — amortized away, but a real latency hiccup under tight SLAs.'
          ]
        },
        {
          heading: 'Hash Map Operations',
          text: 'The eight core operations below cover nearly everything interviews ask you to do with hash maps. Each one shows the idea, a Mermaid visual where useful, and the complexity.'
        },
        {
          heading: 'Operation 1: Put / Insert',
          text: '<strong>What it does:</strong> Store a value under a key (overwrite if the key already exists).<br/><strong>Best efficiency:</strong> O(1) average — hash the key, land in a bucket, write or update the entry. Occasional resize is amortized.',
          diagram: {
            caption: 'put("apple", 5) lands in bucket hash % n',
            chart: `flowchart LR
    P["put('apple', 5)"] --> H["hash"] --> B["bucket"] --> W["write entry"]
    style W fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 2: Get / Lookup',
          text: '<strong>What it does:</strong> Return the value for a key, or a missing indicator (None / null / default).<br/><strong>Best efficiency:</strong> O(1) average. Prefer <code>get(key, default)</code> or <code>getOrDefault</code> over raw indexing when absence is normal.',
          diagram: {
            caption: 'get("apple") → hash → bucket → value 5',
            chart: `flowchart LR
    G["get('apple')"] --> H["hash"] --> B["bucket 3"] --> V["5"]
    style V fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 3: Delete',
          text: '<strong>What it does:</strong> Remove a key and its value.<br/><strong>Best efficiency:</strong> O(1) average. Open-addressing tables mark a tombstone so probe chains stay correct; chaining simply unlinks the node.'
        },
        {
          heading: 'Operation 4: Contains Key',
          text: '<strong>What it does:</strong> Return true if the key is present.<br/><strong>Best efficiency:</strong> O(1) average — same path as get, but you only need existence, not the value. In Python: <code>key in d</code>. In Java: <code>map.containsKey(key)</code>.'
        },
        {
          heading: 'Operation 5: Frequency Count',
          text: '<strong>What it does:</strong> Build a map of element → how many times it appears.<br/><strong>Best efficiency:</strong> One O(n) pass. Use <code>Counter</code> / <code>defaultdict(int)</code> in Python or <code>merge(key, 1, Integer::sum)</code> in Java.',
          code: `# Python
from collections import Counter, defaultdict
freq = Counter("hello")           # {'h':1,'e':1,'l':2,'o':1}
freq2 = defaultdict(int)
for ch in "hello":
    freq2[ch] += 1

# Java
Map<Character, Integer> freq = new HashMap<>();
for (char c : "hello".toCharArray())
    freq.merge(c, 1, Integer::sum);`,
          language: 'python'
        },
        {
          heading: 'Operation 6: Group by Canonical Key',
          text: '<strong>What it does:</strong> Collect items that share an equivalence class (anagrams, same frequency signature, same category) into lists keyed by a canonical form.<br/><strong>Best efficiency:</strong> O(n × cost of key). Sorted string or count-tuple are classic keys for anagrams.',
          code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))   # "eat","tea","ate" → "aet"
        groups[key].append(word)
    return list(groups.values())`,
          language: 'python'
        },
        {
          heading: 'Operation 7: Complement Lookup (Two-Sum Pattern)',
          text: '<strong>What it does:</strong> While scanning, store each value and ask "have I already seen the partner I need?" in O(1).<br/><strong>Best efficiency:</strong> O(n) time, O(n) space — replaces the O(n²) nested loop.',
          diagram: {
            caption: 'Two Sum: for x, look up target − x in the map',
            chart: `flowchart LR
    X["current x"] --> C["complement = target - x"]
    C --> M{"complement in map?"}
    M -->|yes| R["return pair"]
    M -->|no| S["store x → index"]
    style R fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 8: Prefix-Sum Map',
          text: '<strong>What it does:</strong> Count (or find) subarrays whose sum equals k by storing how many times each running prefix sum has appeared.<br/><strong>Best efficiency:</strong> O(n). At index i, if <code>prefix - k</code> was seen c times, there are c subarrays ending at i with sum k. Initialize <code>{0: 1}</code> for subarrays that start at index 0.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Hash Maps in Python',
            code: `from collections import Counter, defaultdict, OrderedDict
from typing import List

# ── Word frequency with Counter — O(n) ───────────────────────────
def word_frequency(text: str):
    freq = Counter(text.lower().split())
    print("Top 3:", freq.most_common(3))
    return freq

# ── Group Anagrams with defaultdict — O(n * k log k) ─────────────
def group_anagrams(words: List[str]) -> List[List[str]]:
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))
        groups[key].append(word)
    return list(groups.values())

# ── Two Sum — O(n) time, O(n) space ──────────────────────────────
def two_sum(nums: List[int], target: int) -> List[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# ── Subarray sum equals k — O(n), prefix sum + hash map ──────────
def subarray_sum(nums: List[int], k: int) -> int:
    count = 0
    prefix_sum = 0
    prefix_counts = defaultdict(int)
    prefix_counts[0] = 1

    for num in nums:
        prefix_sum += num
        count += prefix_counts[prefix_sum - k]
        prefix_counts[prefix_sum] += 1
    return count

# ── LRU Cache using OrderedDict — O(1) get and put ────────────────
class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

# ── Demo ──────────────────────────────────────────────────────────
word_frequency("the quick brown fox the fox")
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
print(two_sum([2, 7, 11, 15], 9))
print("Subarrays with sum 2:", subarray_sum([1, 1, 1], 2))

lru = LRUCache(2)
lru.put(1, 10)
lru.put(2, 20)
print(lru.get(1))
lru.put(3, 30)
print(lru.get(2))`,
            output: `Top 3: [('the', 2), ('fox', 2), ('quick', 1)]
[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
[0, 1]
Subarrays with sum 2: 2
10
-1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Hash Maps in Java',
            code: `import java.util.*;

public class HashMapDemo {

    static Map<String, Integer> wordFrequency(String text) {
        Map<String, Integer> freq = new HashMap<>();
        for (String word : text.toLowerCase().split("\\\\s+")) {
            freq.merge(word, 1, Integer::sum);
        }
        return freq;
    }

    static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }

    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    static int subarraySum(int[] nums, int k) {
        int count = 0, prefixSum = 0;
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);
        for (int num : nums) {
            prefixSum += num;
            count += prefixCounts.getOrDefault(prefixSum - k, 0);
            prefixCounts.merge(prefixSum, 1, Integer::sum);
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(wordFrequency("the quick brown fox the fox"));
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println("Subarrays with sum 2: " + subarraySum(new int[]{1,1,1}, 2));
    }
}`,
            output: `{the=2, quick=1, brown=1, fox=2}
[[eat, tea, ate], [tan, nat], [bat]]
[0, 1]
Subarrays with sum 2: 2`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of hash map operation complexities. The single most important rule: <strong>state average O(1) and acknowledge the collision worst case</strong> — interviewers dock points for claiming "always O(1)".',
          table: {
            headers: [
              'Operation',
              'Time (avg)',
              'Time (worst)',
              'Notes'
            ],
            rows: [
              [
                'Put / Insert',
                'O(1)',
                'O(n) / O(log n)*',
                'Hash + write. Resize is O(n) amortized away. *Java 8+ tree bins: O(log n) worst.'
              ],
              [
                'Get / Lookup',
                'O(1)',
                'O(n) / O(log n)*',
                'Hash + walk chain or probe sequence until key or empty.'
              ],
              [
                'Delete',
                'O(1)',
                'O(n) / O(log n)*',
                'Same path as get, then unlink or tombstone.'
              ],
              [
                'Contains key',
                'O(1)',
                'O(n) / O(log n)*',
                'Identical cost to get without returning the value.'
              ],
              [
                'Iterate all entries',
                'O(n)',
                'O(n)',
                'Visit every stored entry; order depends on map type.'
              ],
              [
                'Build frequency map',
                'O(n)',
                'O(n²) rare',
                'One pass; n inserts each O(1) average.'
              ],
              [
                'Two-Sum style scan',
                'O(n)',
                'O(n²) rare',
                'One pass with O(1) complement lookups; O(n) extra space.'
              ],
              [
                'TreeMap get/put',
                'O(log n)',
                'O(log n)',
                'Sorted keys; use only when order/range queries matter.'
              ]
            ]
          },
          note: 'Interview tip: always name the space trade-off out loud — "I use O(n) extra space for the map to buy O(n) time instead of O(n²)." Also know when NOT to use a hash map: sorted iteration, range queries, or hard real-time with no resize spikes favor tree maps or plain arrays.'
        },
        {
          heading: 'Choosing the Right Map Type',
          text: 'Quick reference for interviews and production choices:',
          table: {
            headers: [
              'Map Type',
              'Key Order',
              'Get / Put avg',
              'Best Use Case'
            ],
            rows: [
              [
                'Python dict',
                'Insertion (3.7+)',
                'O(1)',
                'General key–value mapping'
              ],
              [
                'Python Counter',
                'Insertion',
                'O(1)',
                'Frequency counting, most_common(k)'
              ],
              [
                'Python defaultdict',
                'Insertion',
                'O(1)',
                'Grouping, adjacency lists, counting'
              ],
              [
                'Python OrderedDict',
                'Explicit order',
                'O(1)',
                'LRU cache (move_to_end)'
              ],
              [
                'Java HashMap',
                'None',
                'O(1)',
                'General key–value mapping'
              ],
              [
                'Java TreeMap',
                'Sorted by key',
                'O(log n)',
                'Range queries, sorted iteration'
              ],
              [
                'Java LinkedHashMap',
                'Insert or access',
                'O(1)',
                'LRU cache, ordered output'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Using a mutable object as a key.</strong> Lists are unhashable in Python (TypeError); in Java, mutating a key after put breaks the bucket contract — <em>Fix:</em> use tuples / strings / immutable records.',
            '<strong>Mistake: Manual existence checks under time pressure.</strong> Writing three lines for "increment or create" wastes time and invites bugs — <em>Fix:</em> <code>defaultdict(int)</code> or <code>merge</code> / <code>getOrDefault</code>.',
            '<strong>Mistake: Claiming "always O(1)".</strong> Adversarial hashes can collide — <em>Fix:</em> say "average O(1), worst O(n) / O(log n) with tree bins".',
            '<strong>Mistake: Forgetting the prefix-sum base case.</strong> Subarray-sum-equals-k needs <code>{0: 1}</code> or you miss subarrays that start at index 0.',
            '<strong>Mistake: Sorting when counting would do.</strong> Anagram checks do not need O(n log n) sorts if a frequency map (or 26-slot array) works in O(n).'
          ],
          code: `# WRONG: list as dict key
key = sorted(word)          # list — TypeError
groups[key].append(word)

# CORRECT
key = "".join(sorted(word)) # or tuple(sorted(word))
groups[key].append(word)

# WRONG: verbose count
if ch not in freq:
    freq[ch] = 0
freq[ch] += 1

# CORRECT
from collections import defaultdict
freq = defaultdict(int)
freq[ch] += 1`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Hash maps sit under almost every system that needs "find this thing by name/id instantly".',
          list: [
            '<strong>Database hash indexes:</strong> Equality lookups like <code>WHERE id = 42</code> map column values to row pointers in O(1) average — the engine behind primary-key fetches.',
            '<strong>Distributed caches (Redis / Memcached):</strong> Essentially networked hash maps with TTLs and eviction. Every cache hit is a hash lookup.',
            `<strong>Language runtimes:</strong> Python's <code>object.__dict__</code>, Java class metadata, and JavaScript object properties are hash maps under the hood.`,
            '<strong>LRU / LFU caches:</strong> Hash map for O(1) access plus a linked list or heap for eviction order — the same design as LeetCode 146.',
            '<strong>NLP tokenizers:</strong> Vocabulary tables map token strings to integer ids; BPE merge rules are hash-map lookups during encoding.',
            '<strong>Routing tables and DNS caches:</strong> Hostnames and routes resolve through hash-based tables for low-latency lookups at scale.',
            '<strong>Deduplication pipelines:</strong> Spark / Flink <code>distinct</code> and <code>groupBy</code> hash-partition records so identical keys land on the same worker.'
          ],
          note: 'Common thread: the access pattern is "I know the key; give me the value now" — not "give me everything between key A and key B" (that is a tree) and not "give me index i" (that is an array).'
        },
        {
          heading: 'Top Interview Questions on Hash Maps',
          text: 'The eight most frequently asked hash-map interview questions are below — each with the key idea, a solved answer, and its complexity. Four recurring patterns solve nearly all of them: <strong>complement lookup</strong> (Two Sum), <strong>frequency counting</strong> (anagrams, top-k), <strong>prefix-sum maps</strong> (subarray sum), and <strong>map + ordered structure</strong> (LRU).',
          note: 'Pattern cheat sheet: nested loop searching for a partner → hash the complement; count occurrences → Counter / freq map; contiguous subarray constraint on sums → prefix map; cache with eviction → HashMap + LinkedHashMap / OrderedDict. Always state the O(n) space trade-off for the O(n) time win.'
        },
        {
          heading: 'Practice Question 1: Two Sum (LeetCode 1, Easy)',
          text: `<strong>Problem:</strong> Given an array of integers and a target, return the indices of the two numbers that add up to the target.<br/><strong>Key idea:</strong> Walk once; store each value's index. For current <code>x</code>, if <code>target - x</code> is already in the map, return both indices.<br/><strong>Complexity:</strong> Time O(n), Space O(n).`,
          example: {
            title: 'Python Solution',
            code: `def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i
    return []`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Group Anagrams (LeetCode 49, Medium)',
          text: `<strong>Problem:</strong> Group an array of strings so anagrams land in the same group.<br/><strong>Key idea:</strong> Use the sorted string (or a 26-count tuple) as a hash-map key; append each word to its key's list.<br/><strong>Complexity:</strong> Time O(n · k log k) with sorted keys, Space O(n · k).`,
          example: {
            title: 'Python Solution',
            code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        groups["".join(sorted(word))].append(word)
    return list(groups.values())`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Subarray Sum Equals K (LeetCode 560, Medium)',
          text: '<strong>Problem:</strong> Count contiguous subarrays whose sum equals k.<br/><strong>Key idea:</strong> Prefix sums + map of prefix frequencies. At each index, add <code>count[prefix - k]</code>; then record the current prefix. Seed with <code>{0: 1}</code>.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `from collections import defaultdict

def subarray_sum(nums, k):
    count = prefix = 0
    seen = defaultdict(int)
    seen[0] = 1
    for x in nums:
        prefix += x
        count += seen[prefix - k]
        seen[prefix] += 1
    return count`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: First Unique Character (LeetCode 387, Easy)',
          text: '<strong>Problem:</strong> Return the index of the first non-repeating character in a string, or -1.<br/><strong>Key idea:</strong> Frequency map in one pass, then a second pass returns the first character whose count is 1.<br/><strong>Complexity:</strong> Time O(n), Space O(1) for a fixed alphabet (or O(k) distinct characters).',
          example: {
            title: 'Python Solution',
            code: `from collections import Counter

def first_uniq_char(s):
    freq = Counter(s)
    for i, ch in enumerate(s):
        if freq[ch] == 1:
            return i
    return -1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Top K Frequent Elements (LeetCode 347, Medium)',
          text: '<strong>Problem:</strong> Return the k most frequent elements in an array.<br/><strong>Key idea:</strong> Count with a hash map, then either sort by frequency or push into a min-heap of size k / bucket-sort by frequency for O(n).<br/><strong>Complexity:</strong> Time O(n log k) with a heap, or O(n) with buckets; Space O(n).',
          example: {
            title: 'Python Solution',
            code: `from collections import Counter

def top_k_frequent(nums, k):
    return [x for x, _ in Counter(nums).most_common(k)]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Two Sum II / design note — Copy List with Random Pointer (LeetCode 138, Medium)',
          text: '<strong>Problem:</strong> Deep-copy a linked list where each node has a random pointer.<br/><strong>Key idea:</strong> First pass: map original node → new node. Second pass: wire <code>next</code> and <code>random</code> using the map. Hash map turns pointer rewiring into O(1) lookups.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def copy_random_list(head):
    if not head:
        return None
    mp = {}
    cur = head
    while cur:
        mp[cur] = Node(cur.val)
        cur = cur.next
    cur = head
    while cur:
        mp[cur].next = mp.get(cur.next)
        mp[cur].random = mp.get(cur.random)
        cur = cur.next
    return mp[head]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: LRU Cache (LeetCode 146, Medium)',
          text: '<strong>Problem:</strong> Design a cache with O(1) get and put and a fixed capacity that evicts the least recently used key.<br/><strong>Key idea:</strong> Hash map for key → value (or node) plus an ordered structure (OrderedDict / LinkedHashMap / doubly linked list) for recency. On get/put, move the key to "most recent"; on overflow, drop the least recent.<br/><strong>Complexity:</strong> Time O(1) per operation, Space O(capacity).',
          example: {
            title: 'Python Solution',
            code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap, self.cache = capacity, OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Isomorphic Strings (LeetCode 205, Easy)',
          text: '<strong>Problem:</strong> Return true if characters in s can be replaced to get t with a consistent one-to-one mapping.<br/><strong>Key idea:</strong> Two maps (or one map + a set of used values): s→t and t→s must both stay consistent. A single direction is not enough ("ab" / "aa" is a classic trap).<br/><strong>Complexity:</strong> Time O(n), Space O(k) for the alphabet.',
          example: {
            title: 'Python Solution',
            code: `def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s2t, t2s = {}, {}
    for a, b in zip(s, t):
        if a in s2t and s2t[a] != b:
            return False
        if b in t2s and t2s[b] != a:
            return False
        s2t[a], t2s[b] = b, a
    return True`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    sets: {
      title: 'Sets',
      subtitle: 'Unique membership in O(1) — dedupe, intersect, and "have I seen this?"',
      sections: [
        {
          heading: 'What is a Set?',
          text: 'A set is a collection of <strong>unique elements</strong> with no duplicates. The core operations — add, remove, and membership test ("is x in the set?") — run in expected O(1) time for hash-based sets. Think of a set as a hash map that stores only keys and ignores values: you care about presence, not about mapping to a payload.',
          list: [
            '<strong>Uniqueness:</strong> Adding an element that is already present is a no-op (or returns false) — the set never holds two equal members.',
            '<strong>Membership test:</strong> <code>x in s</code> / <code>set.contains(x)</code> is the operation sets are built for — O(1) average on a hash set.',
            '<strong>No index access:</strong> Sets are not sequences. You cannot ask for "the 3rd element" reliably on a hash set (order is undefined unless you use a linked or sorted variant).',
            '<strong>Mathematical operations:</strong> Union, intersection, difference, and subset checks are first-class and often one-liners in Python.',
            '<strong>Interview superpower:</strong> "Have I seen this before?" and "longest run of consecutive numbers" both become linear with a set.'
          ]
        },
        {
          heading: 'Components of a Set',
          text: 'A hash set is essentially a hash map with the values stripped away. Understanding that relationship makes set internals and complexities obvious.',
          list: [
            '<strong>Backing hash table:</strong> Elements are hashed into buckets exactly like map keys.',
            '<strong>Equality contract:</strong> Two elements that compare equal must share the same hash; otherwise membership breaks.',
            '<strong>No value field:</strong> Only the element (the "key") is stored — presence is the only information.',
            '<strong>Load factor & resize:</strong> Same growth rules as hash maps: when too full, rehash into a larger bucket array.',
            '<strong>Optional ordering layer:</strong> Tree sets keep elements sorted; linked hash sets preserve insertion order.'
          ]
        },
        {
          heading: 'How Sets Work',
          text: 'Inserting an element hashes it to a bucket and stores it only if that bucket does not already contain an equal element. Membership is the same hash path without inserting.',
          diagram: {
            caption: 'add(20) → hash → bucket → store if absent',
            chart: `flowchart LR
    A["add(20)"] --> H["hash(20)"]
    H --> M["hash % n"]
    M --> B["bucket"]
    B --> E{"already present?"}
    E -->|no| S["store 20"]
    E -->|yes| N["no-op"]
    style S fill:#2ecc71,color:#fff
    style N fill:#95a5a6,color:#fff`
          }
        },
        {
          diagram: {
            caption: 'Set after inserts: {10, 20, 30, 40} — unique values only',
            chart: `flowchart LR
    S["Set"] --> A["10"]
    S --> B["20"]
    S --> C["30"]
    S --> D["40"]
    X["add(20) again"] -.->|ignored| B
    style X fill:#e74c3c,color:#fff`
          }
        },
        {
          text: '<strong>Set vs Hash Map:</strong> If you only need "is this key present?", use a set — it communicates intent and avoids dummy values. If you need "key → something", use a map. Frequency counting is a map problem; deduplication and visited tracking are set problems.'
        },
        {
          heading: 'Set Variants',
          text: 'Choose the set type based on whether you need hash speed, sorted order, or insertion order.'
        },
        {
          heading: 'Python set and frozenset',
          list: [
            '<strong>set:</strong> Mutable hash set. <code>add</code>, <code>remove</code>/<code>discard</code>, <code>in</code>, and set algebra (<code>|</code>, <code>&</code>, <code>-</code>, <code>^</code>).',
            '<strong>frozenset:</strong> Immutable set — hashable, so it can be a dict key or a member of another set. Useful for caching sets of features or graph cliques.',
            '<strong>Creation:</strong> <code>{1, 2, 3}</code> or <code>set(iterable)</code>. Empty set must be <code>set()</code> — <code>{}</code> is an empty dict.',
            '<strong>Comprehensions:</strong> <code>{x * x for x in nums if x > 0}</code> builds a set of unique transformed values in one expression.'
          ]
        },
        {
          heading: 'Java HashSet, TreeSet, LinkedHashSet',
          list: [
            '<strong>HashSet:</strong> O(1) average add/contains/remove, no order. Default interview choice.',
            '<strong>TreeSet:</strong> Red-Black tree — O(log n) operations, elements always sorted, supports <code>ceiling</code>/<code>floor</code> and range views.',
            '<strong>LinkedHashSet:</strong> Hash set + linked list preserving insertion order. O(1) operations with predictable iteration.',
            '<strong>EnumSet:</strong> Specialized bit-vector set for enum types — extremely fast and compact when the universe is a fixed enum.'
          ]
        },
        {
          heading: 'Advantages',
          text: 'Sets shine whenever uniqueness or membership is the primary concern.',
          list: [
            '<strong>O(1) average membership:</strong> Faster than scanning a list (O(n)) or binary-searching a sorted array (O(log n)) for "is it present?"',
            '<strong>Automatic deduplication:</strong> <code>list(set(arr))</code> (order not preserved) or a LinkedHashSet pass removes duplicates cleanly.',
            '<strong>Clean set algebra:</strong> Intersection, union, and difference express complex filters without nested loops.',
            '<strong>Visited tracking:</strong> Graph BFS/DFS, cycle detection in value sequences, and "seen before" scans all use a set.',
            '<strong>Clearer intent than a map:</strong> A set of visited nodes documents that you only care about presence, not associated data.'
          ]
        },
        {
          heading: 'Disadvantages',
          text: 'Sets trade ordered access and indexability for speed of membership.',
          list: [
            '<strong>No random access by index:</strong> You cannot grab the i-th element from a hash set in O(1).',
            '<strong>Unordered by default:</strong> Iteration order is arbitrary unless you use LinkedHashSet / ordered variants (and even then it is not sorted by value).',
            '<strong>Elements must be hashable:</strong> Mutable lists cannot go in a Python set; Java elements need correct equals/hashCode.',
            '<strong>Memory overhead:</strong> Like hash maps, bucket slack and per-element headers cost more RAM than a packed array.',
            '<strong>Worst-case degradation:</strong> Same collision story as hash maps — average O(1), not guaranteed O(1).',
            '<strong>Not for frequency:</strong> A set only knows present/absent. Counting occurrences requires a map (Counter / HashMap).'
          ]
        },
        {
          heading: 'Set Operations',
          text: 'The core operations below cover membership, mutation, and set algebra — the three families of problems sets solve in interviews.'
        },
        {
          heading: 'Operation 1: Add',
          text: '<strong>What it does:</strong> Insert an element if it is not already present.<br/><strong>Best efficiency:</strong> O(1) average. Python <code>s.add(x)</code>; Java <code>set.add(x)</code> returns whether the set changed.',
          diagram: {
            caption: 'Adding a new element vs a duplicate',
            chart: `flowchart LR
    S1["{10, 20}"] -->|add 30| S2["{10, 20, 30}"]
    S2 -->|add 20| S3["{10, 20, 30}"]
    style S2 fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 2: Remove',
          text: '<strong>What it does:</strong> Delete an element if present.<br/><strong>Best efficiency:</strong> O(1) average. Python: <code>remove</code> raises if missing, <code>discard</code> is silent; Java <code>remove</code> returns a boolean.'
        },
        {
          heading: 'Operation 3: Contains / Membership',
          text: '<strong>What it does:</strong> Test whether an element is in the set.<br/><strong>Best efficiency:</strong> O(1) average — the operation that makes sets beat lists for lookups. Prefer a set over <code>x in list</code> whenever the list is large or the test is inside a loop.'
        },
        {
          heading: 'Operation 4: Union',
          text: '<strong>What it does:</strong> Elements that appear in either set A or set B (or both).<br/><strong>Best efficiency:</strong> O(|A| + |B|). Python: <code>a | b</code> or <code>a.union(b)</code>.',
          diagram: {
            caption: 'A ∪ B',
            chart: `flowchart LR
    A["A: 1, 2, 3"] --> U["Union: 1, 2, 3, 4"]
    B["B: 3, 4"] --> U
    style U fill:#3498db,color:#fff`
          }
        },
        {
          heading: 'Operation 5: Intersection',
          text: '<strong>What it does:</strong> Elements that appear in both A and B.<br/><strong>Best efficiency:</strong> O(min(|A|, |B|)) typical — iterate the smaller set and test membership in the larger. Python: <code>a & b</code>.',
          diagram: {
            caption: 'A ∩ B',
            chart: `flowchart LR
    A["A: 1, 2, 3"] --> I["Intersection: 3"]
    B["B: 3, 4"] --> I
    style I fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 6: Difference',
          text: '<strong>What it does:</strong> Elements in A but not in B.<br/><strong>Best efficiency:</strong> O(|A|). Python: <code>a - b</code>. Common for "items we still need to process" or "words in document A not in stopword list B".'
        },
        {
          heading: 'Operation 7: Symmetric Difference',
          text: '<strong>What it does:</strong> Elements in A or B but not both — <code>(A ∪ B) − (A ∩ B)</code>.<br/><strong>Best efficiency:</strong> O(|A| + |B|). Python: <code>a ^ b</code>. Useful for change detection between two snapshots.'
        },
        {
          heading: 'Operation 8: Subset / Superset',
          text: '<strong>What it does:</strong> Test whether every element of A is in B (<code>a <= b</code>) or vice versa.<br/><strong>Best efficiency:</strong> O(|A|) membership checks. Interview use: validating that required characters / permissions / flags are all present.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Sets in Python',
            code: `from typing import List

# ── Deduplicate while preserving first-seen order ────────────────
def unique_preserve_order(items: List[int]) -> List[int]:
    seen = set()
    out = []
    for x in items:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out

# ── Contains duplicate — O(n) ────────────────────────────────────
def contains_duplicate(nums: List[int]) -> bool:
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False
    # one-liner: return len(nums) != len(set(nums))

# ── Longest consecutive sequence — O(n) ──────────────────────────
def longest_consecutive(nums: List[int]) -> int:
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:          # n starts a sequence
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best

# ── Set algebra ──────────────────────────────────────────────────
a, b = {1, 2, 3, 4}, {3, 4, 5}
print("union", a | b)             # {1, 2, 3, 4, 5}
print("intersect", a & b)         # {3, 4}
print("diff", a - b)              # {1, 2}
print("symdiff", a ^ b)           # {1, 2, 5}
print("subset", {3, 4} <= a)      # True

# ── Intersection of two arrays ───────────────────────────────────
def intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    return list(set(nums1) & set(nums2))

# ── Demo ─────────────────────────────────────────────────────────
print(unique_preserve_order([1, 2, 2, 3, 1, 4]))
print(contains_duplicate([1, 2, 3, 1]))
print(longest_consecutive([100, 4, 200, 1, 3, 2]))
print(intersection([1, 2, 2, 1], [2, 2]))`,
            output: `union {1, 2, 3, 4, 5}
intersect {3, 4}
diff {1, 2}
symdiff {1, 2, 5}
subset True
[1, 2, 3, 4]
True
4
[2]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Sets in Java',
            code: `import java.util.*;

public class SetDemo {

    static List<Integer> uniquePreserveOrder(int[] nums) {
        Set<Integer> seen = new LinkedHashSet<>();
        for (int x : nums) seen.add(x);
        return new ArrayList<>(seen);
    }

    static boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int x : nums) {
            if (!seen.add(x)) return true;  // add returns false if present
        }
        return false;
    }

    static int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums) set.add(n);
        int best = 0;
        for (int n : set) {
            if (!set.contains(n - 1)) {
                int length = 1;
                while (set.contains(n + length)) length++;
                best = Math.max(best, length);
            }
        }
        return best;
    }

    static int[] intersection(int[] a, int[] b) {
        Set<Integer> setA = new HashSet<>();
        for (int x : a) setA.add(x);
        Set<Integer> out = new HashSet<>();
        for (int x : b) if (setA.contains(x)) out.add(x);
        return out.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        System.out.println(uniquePreserveOrder(new int[]{1, 2, 2, 3, 1, 4}));
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 1}));
        System.out.println(longestConsecutive(new int[]{100, 4, 200, 1, 3, 2}));
        System.out.println(Arrays.toString(intersection(new int[]{1, 2, 2, 1}, new int[]{2, 2})));

        Set<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> s2 = new HashSet<>(Arrays.asList(3, 4, 5));
        Set<Integer> union = new HashSet<>(s1); union.addAll(s2);
        Set<Integer> inter = new HashSet<>(s1); inter.retainAll(s2);
        Set<Integer> diff = new HashSet<>(s1); diff.removeAll(s2);
        System.out.println(union + " " + inter + " " + diff);
    }
}`,
            output: `[1, 2, 3, 4]
true
4
[2]
[1, 2, 3, 4, 5] [3, 4] [1, 2]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Summary of set operation complexities for hash-based sets (Python <code>set</code>, Java <code>HashSet</code>). Tree sets replace average O(1) with O(log n) and gain sorted order.',
          table: {
            headers: [
              'Operation',
              'Time (avg)',
              'Time (worst)',
              'Notes'
            ],
            rows: [
              [
                'Add',
                'O(1)',
                'O(n)',
                'No-op if element already present; resize amortized.'
              ],
              [
                'Remove',
                'O(1)',
                'O(n)',
                'Hash + unlink / tombstone.'
              ],
              [
                'Contains',
                'O(1)',
                'O(n)',
                'The operation sets exist for — prefer over list scan.'
              ],
              [
                'Iterate all',
                'O(n)',
                'O(n)',
                'Order undefined on HashSet; insertion order on LinkedHashSet.'
              ],
              [
                'Union A ∪ B',
                'O(|A|+|B|)',
                '—',
                'Build from both; each insert O(1) avg.'
              ],
              [
                'Intersection A ∩ B',
                'O(min(|A|,|B|))',
                '—',
                'Scan smaller, test membership in larger.'
              ],
              [
                'Difference A − B',
                'O(|A|)',
                '—',
                'Keep elements of A not in B.'
              ],
              [
                'TreeSet add/contains',
                'O(log n)',
                'O(log n)',
                'Sorted; use for ordered iteration / ceiling / floor.'
              ]
            ]
          },
          note: 'Interview tip: when you only need membership, reach for a set — not a map with dummy true values. When you need counts, reach for a map. And for longest consecutive sequence, the trick is "only expand from sequence starts (n-1 not in set)" so each number is visited a constant number of times → true O(n).'
        },
        {
          heading: 'Choosing the Right Set Type',
          table: {
            headers: [
              'Set Type',
              'Order',
              'Add / Contains avg',
              'Best Use Case'
            ],
            rows: [
              [
                'Python set',
                'None',
                'O(1)',
                'Membership, dedupe, set algebra'
              ],
              [
                'Python frozenset',
                'None (immutable)',
                'O(1)',
                'Hashable set — dict key or set-of-sets'
              ],
              [
                'Java HashSet',
                'None',
                'O(1)',
                'General membership / dedupe'
              ],
              [
                'Java LinkedHashSet',
                'Insertion',
                'O(1)',
                'Dedupe while keeping first-seen order'
              ],
              [
                'Java TreeSet',
                'Sorted',
                'O(log n)',
                'Ordered unique elements, range queries'
              ],
              [
                'Java EnumSet',
                'Enum ordinal',
                'O(1)',
                'Fixed enum universe — bit-set speed'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Using <code>{}</code> for an empty set in Python.</strong> That creates an empty dict — <em>Fix:</em> always write <code>set()</code> for an empty set.',
            '<strong>Mistake: Expecting stable order from HashSet / set.</strong> Iteration order is arbitrary — <em>Fix:</em> use LinkedHashSet or sort the result when order matters.',
            '<strong>Mistake: Putting unhashable / mutable elements in a set.</strong> Lists and other mutables fail in Python; broken equals/hashCode fails in Java — <em>Fix:</em> use tuples, strings, or immutable records.',
            '<strong>Mistake: Using a set when you need frequencies.</strong> Sets collapse duplicates to one — <em>Fix:</em> use Counter / HashMap for counts.',
            '<strong>Mistake: O(n²) consecutive-sequence solution.</strong> Sorting is O(n log n); the set start-only expansion is O(n) — know both and pick O(n) when asked.',
            '<strong>Mistake: <code>remove</code> on a missing element in Python.</strong> Raises KeyError — <em>Fix:</em> use <code>discard</code> when absence is normal.'
          ],
          code: `# WRONG
s = {}           # this is a dict!
s.add(1)         # AttributeError

# CORRECT
s = set()
s.add(1)

# WRONG: list in a set
s.add([1, 2])    # TypeError: unhashable type: 'list'

# CORRECT
s.add((1, 2))    # tuple is hashable

# Membership: list vs set inside a loop
# WRONG — O(n) per test → O(n²) overall
if x in my_list: ...
# CORRECT — O(1) per test → O(n) overall
if x in my_set: ...`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Sets appear anywhere systems must enforce uniqueness or answer membership quickly.',
          list: [
            '<strong>Visited sets in graph algorithms:</strong> BFS, DFS, and Dijkstra mark nodes as visited with a set so each node is processed once — without it, cycles loop forever.',
            '<strong>Deduplicating logs and events:</strong> Streaming pipelines keep a set (or bloom filter approximation) of seen event IDs to drop retries and double-publishes.',
            '<strong>Access-control allow/deny lists:</strong> User ids, IP addresses, or feature flags in a set give O(1) authorization checks on every request.',
            '<strong>Spell-checkers and dictionaries:</strong> A set (or trie) of valid words answers "is this a real word?" instantly; edit-distance suggestions start from that membership test.',
            '<strong>Database UNIQUE constraints:</strong> Under the hood, uniqueness indexes behave like sets of column values — insert fails when the value is already present.',
            '<strong>Stopword filtering in NLP:</strong> Token streams drop words that appear in a stopword set (<code>the</code>, <code>a</code>, <code>is</code>) before indexing.',
            `<strong>Change detection:</strong> Symmetric difference of yesterday's and today's ID sets yields exactly the added and removed records.`
          ],
          note: 'Common thread: the question is always "is this element already known?" — not "what value is attached to this key?" (map) and not "what is at index i?" (array).'
        },
        {
          heading: 'Top Interview Questions on Sets',
          text: 'The eight most frequently asked set interview questions are below. Recurring patterns: <strong>seen-before scan</strong> (duplicates), <strong>set algebra</strong> (intersection / difference), <strong>sequence expansion from starts</strong> (longest consecutive), and <strong>visited tracking</strong> (happy number, graphs).',
          note: 'Pattern cheat sheet: "any duplicate?" → set while scanning; "common elements of two arrays" → set intersection; "longest run of consecutive ints" → set + expand only from starts; "cycle in a value sequence" → set of seen values (or Floyd). Prefer sets over maps when you do not need associated data.'
        },
        {
          heading: 'Practice Question 1: Contains Duplicate (LeetCode 217, Easy)',
          text: '<strong>Problem:</strong> Return true if any value appears at least twice.<br/><strong>Key idea:</strong> Add each element to a set; if add fails (already present), return true. Early exit makes best case O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Intersection of Two Arrays (LeetCode 349, Easy)',
          text: '<strong>Problem:</strong> Return the unique elements common to both arrays.<br/><strong>Key idea:</strong> Put one array in a set; scan the other and collect hits into a result set (auto-dedupes).<br/><strong>Complexity:</strong> Time O(n + m), Space O(n + m).',
          example: {
            title: 'Python Solution',
            code: `def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Longest Consecutive Sequence (LeetCode 128, Medium)',
          text: '<strong>Problem:</strong> Find the length of the longest consecutive elements sequence in O(n) time (no sorting).<br/><strong>Key idea:</strong> Put all numbers in a set. Only start counting at sequence heads (<code>n - 1 not in set</code>), then expand forward. Each number is visited at most twice.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
          example: {
            title: 'Python Solution',
            code: `def longest_consecutive(nums):
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Happy Number (LeetCode 202, Easy)',
          text: '<strong>Problem:</strong> Starting from n, repeatedly replace the number with the sum of the squares of its digits. Return true if you reach 1 (happy), false if you loop forever.<br/><strong>Key idea:</strong> A set of seen numbers detects cycles. If a sum repeats, you are in a loop and not happy. (Floyd cycle detection also works without a set.)<br/><strong>Complexity:</strong> Time O(log n) per step × constant cycle length, Space O(cycle length) for the set.',
          example: {
            title: 'Python Solution',
            code: `def is_happy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return n == 1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Valid Sudoku (LeetCode 36, Medium)',
          text: `<strong>Problem:</strong> Determine if a 9×9 Sudoku board is valid (no duplicate digits in any row, column, or 3×3 box). Empty cells are '.'.<br/><strong>Key idea:</strong> Three families of sets (or one set of tagged strings like <code>"r0-5"</code>, <code>"c3-5"</code>, <code>"b0-5"</code>). On each filled cell, if any tag is already present, the board is invalid.<br/><strong>Complexity:</strong> Time O(1) for a fixed 9×9 board (O(n²) generally), Space O(1) / O(n²).`,
          example: {
            title: 'Python Solution',
            code: `def is_valid_sudoku(board):
    seen = set()
    for i in range(9):
        for j in range(9):
            v = board[i][j]
            if v == '.':
                continue
            tags = (f"r{i}-{v}", f"c{j}-{v}", f"b{i//3}{j//3}-{v}")
            if any(t in seen for t in tags):
                return False
            seen.update(tags)
    return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Single Number (LeetCode 136, Easy)',
          text: '<strong>Problem:</strong> Every element appears twice except one; find that single one.<br/><strong>Key idea (set):</strong> Add on first sight, remove on second; the only remaining element is the answer. (XOR of all elements is the classic O(1)-space solution — mention both.)<br/><strong>Complexity:</strong> Time O(n), Space O(n) for the set (O(1) with XOR).',
          example: {
            title: 'Python Solution',
            code: `def single_number(nums):
    seen = set()
    for x in nums:
        if x in seen:
            seen.remove(x)
        else:
            seen.add(x)
    return seen.pop()
    # XOR alternative: reduce(lambda a, b: a ^ b, nums)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Jewels and Stones (LeetCode 771, Easy)',
          text: '<strong>Problem:</strong> Jewels is a string of jewel types; stones is what you have. How many of your stones are jewels?<br/><strong>Key idea:</strong> Put jewel characters in a set; count stones that appear in it. Turning jewels into a set makes each stone check O(1).<br/><strong>Complexity:</strong> Time O(|J| + |S|), Space O(|J|).',
          example: {
            title: 'Python Solution',
            code: `def num_jewels_in_stones(jewels, stones):
    jset = set(jewels)
    return sum(s in jset for s in stones)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Find All Numbers Disappeared (LeetCode 448, Easy)',
          text: '<strong>Problem:</strong> Array of n integers where each is in [1, n]; some appear twice and others are missing. Return all missing numbers.<br/><strong>Key idea (set):</strong> Put all array values in a set; collect every k in 1..n that is not present. (In-place negation of indices is the O(1)-space follow-up.)<br/><strong>Complexity:</strong> Time O(n), Space O(n) for the set.',
          example: {
            title: 'Python Solution',
            code: `def find_disappeared_numbers(nums):
    present = set(nums)
    return [k for k in range(1, len(nums) + 1) if k not in present]`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
