// DSA Module 1: Core Linear Structures
// Target: Job seekers, AI Engineers, Data Scientists

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
            '<p>There are three cases to reason about: <strong>Best case</strong> (Omega, Ω) is the minimum work needed — rarely what interviewers care about. <strong>Average case</strong> (Theta, Θ) reflects typical real-world performance. <strong>Worst case</strong> (Big-O, O) is the guarantee — what you must always be able to defend in interviews.</p>',
            '<p><strong>Amortized analysis</strong> averages the cost of an operation over a sequence of operations. Python\'s list append is a perfect example: most appends are O(1), but occasionally the underlying array must be resized (O(n)). Averaged over n appends, however, each append costs O(1) amortized because the resize cost is spread across all prior cheap operations.</p>'
          ],
          note: 'Rule: drop constants and non-dominant terms. O(n + n²) → O(n²). O(500) → O(1).'
        },
        // C — ASCII diagram
        {
          heading: 'Visual Diagram',
          code: `Complexity Growth Chart (input n on x-axis, operations on y-axis)

  Operations
  |
  |                                              O(2^n)
  |                                         ***
  |                                     ****
  |                                 ****
  |                    O(n^2)   ****
  |                          ***
  |              O(n log n) /
  |                    ----/
  |           O(n)  --/
  |              --/
  |     O(log n)/__________________________________
  |  O(1) _________________________________________
  +-------------------------------------------------> n
     1   10   100  1K   10K  100K  1M

Scale reference at n = 1,000,000:
  O(1)       =>              1 op  [Always fast]
  O(log n)   =>             20 ops [Binary search]
  O(n)       =>      1,000,000 ops [Single loop]
  O(n log n) =>     20,000,000 ops [Merge sort]
  O(n^2)     => 1,000,000,000,000  [Too slow!]
  O(2^n)     => astronomically large [Impossible]`,
          language: 'text'
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
    // TOPIC 2 — Arrays & Strings
    // ─────────────────────────────────────────────────────────────────────────
    'arrays-strings': {
      title: 'Arrays & Strings',
      subtitle: 'The backbone of every coding interview',
      sections: [
        // A
        {
          heading: 'Core Concepts: Arrays & Strings',
          text: 'Arrays and strings are the most frequently tested data structures in coding interviews. Mastering their internals and the classic patterns built on top of them covers roughly 40% of all interview problems.',
          list: [
            '<strong>Static Array:</strong> Fixed-size contiguous block of memory. Random access is O(1) because the address of element i is: base_address + i × element_size.',
            '<strong>Dynamic Array (Python list / Java ArrayList):</strong> Backed by a static array that is resized (typically doubled) when full. Append is O(1) amortized; insert at arbitrary index is O(n) due to shifting.',
            '<strong>String Immutability:</strong> In Python and Java, strings are immutable — every concatenation creates a new object. Concatenating n strings in a loop is O(n²). Use list.join() in Python or StringBuilder in Java.',
            '<strong>Sliding Window:</strong> Maintain a window [left, right] over the array, expanding right and shrinking left based on a constraint. Converts many O(n²) brute-force substring/subarray problems to O(n).',
            '<strong>Two Pointers:</strong> Use left and right pointers moving toward each other (sorted pair-sum) or both moving right at different speeds (fast/slow). Avoids nested loops.',
            '<strong>Two-Sum Pattern:</strong> Store complements in a hash map as you scan. Converts O(n²) brute-force pair search to O(n) time with O(n) space.'
          ]
        },
        // B
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Python lists are <em>dynamic arrays</em> under the hood. They store a contiguous block of pointers (8 bytes each on 64-bit systems) to the actual Python objects. When you do <code>lst[i]</code>, Python computes the pointer address in O(1). When you do <code>lst.insert(0, x)</code>, every existing pointer must shift one position right — O(n) work proportional to the list length.</p>',
            '<p>String immutability matters more than most beginners realize. The pattern <code>s = s + c</code> inside a loop allocates a brand-new string of length len(s)+1 every iteration. For n iterations, total characters allocated is 1 + 2 + ... + n = O(n²). The fix is collecting characters in a list and calling <code>"".join(chars)</code> at the end — one O(n) allocation instead of O(n²).</p>',
            '<p>The <strong>sliding window</strong> technique works by maintaining invariants about the window contents. Expand the right pointer to include new elements; when the window violates a constraint (has a duplicate, sum exceeds target), shrink from the left. Because each element enters and leaves the window at most once, total work across all pointer movements is O(n) — even though there are two nested-looking loops.</p>'
          ],
          note: 'Key rule: for subarray or substring problems with a constraint, reach for sliding window. For pair-sum problems, use two pointers on a sorted array or a hash map on an unsorted array.'
        },
        // C
        {
          heading: 'Visual Diagram',
          code: `Static Array — contiguous memory layout:
  Index: [  0  ][  1  ][  2  ][  3  ][  4  ]
  Value: [ 10  ][ 20  ][ 30  ][ 40  ][ 50  ]
  Addr:  [1000 ][1008 ][1016 ][1024 ][1032 ]   (8 bytes each)
  Access arr[3]: base(1000) + 3*8 = 1024 -> O(1)

Dynamic Array (Python list) — amortized resize:
  Capacity: 4   Used: 4   Append E triggers resize:
  [ A ][ B ][ C ][ D ]   <- full!
  Allocate new buffer of capacity 8, copy all, append E:
  [ A ][ B ][ C ][ D ][ E ][   ][   ][   ]

Sliding Window — max sum subarray of size k=3:
  arr = [2, 1, 5, 1, 3, 2],  k = 3

  Window 1: [2, 1, 5]   sum = 8
             L-----R
  Window 2:  [1, 5, 1]  sum = 7   subtract arr[0]=2, add arr[3]=1
              L-----R
  Window 3:     [5, 1, 3]  sum = 9  <- maximum
                 L-----R
  Window 4:        [1, 3, 2]  sum = 6
                    L-----R
  Answer: 9`,
          language: 'text'
        },
        // D
        {
          heading: 'Python Implementation',
          example: {
            title: 'Arrays & Strings in Python',
            code: `from typing import List, Dict

# ── Two Sum: O(n) time, O(n) space ──────────────────────────────
def two_sum(nums: List[int], target: int) -> List[int]:
    """Return indices of the two numbers that add up to target."""
    seen: Dict[int, int] = {}   # maps value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# ── Kadane's Algorithm: max subarray sum — O(n) time, O(1) space ─
def max_subarray(nums: List[int]) -> int:
    """Largest sum of any contiguous subarray."""
    max_sum = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)   # extend or restart
        max_sum = max(max_sum, current)
    return max_sum

# ── Sliding Window: longest substring without repeating chars ─────
def length_of_longest_substring(s: str) -> int:
    """O(n) time, O(min(n, alphabet_size)) space."""
    char_index: Dict[str, int] = {}
    left = max_len = 0
    for right, ch in enumerate(s):
        if ch in char_index and char_index[ch] >= left:
            left = char_index[ch] + 1   # shrink window past duplicate
        char_index[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len

# ── String building: O(n) join vs O(n^2) concatenation ───────────
def build_string_wrong(n: int) -> str:
    s = ""
    for i in range(n):
        s += str(i)      # creates a new string each iteration — O(n^2) total
    return s

def build_string_right(n: int) -> str:
    parts = []
    for i in range(n):
        parts.append(str(i))    # O(1) amortized per append
    return "".join(parts)       # single O(n) allocation

# ── Demo ──────────────────────────────────────────────────────────
print(two_sum([2, 7, 11, 15], 9))
print(two_sum([3, 2, 4], 6))
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(length_of_longest_substring("abcabcbb"))
print(length_of_longest_substring("pwwkew"))`,
            output: `[0, 1]
[1, 2]
6
3
3`,
            language: 'python',
            type: 'code'
          }
        },
        // E
        {
          heading: 'Java Implementation',
          example: {
            title: 'Arrays & Strings in Java',
            code: `import java.util.*;

public class ArraysStrings {

    // ── Two Sum: O(n) time, O(n) space ───────────────────────────
    public static int[] twoSum(int[] nums, int target) {
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

    // ── Kadane's Algorithm: O(n) time, O(1) space ─────────────────
    public static int maxSubarray(int[] nums) {
        int maxSum = nums[0], current = nums[0];
        for (int i = 1; i < nums.length; i++) {
            current = Math.max(nums[i], current + nums[i]);
            maxSum  = Math.max(maxSum, current);
        }
        return maxSum;
    }

    // ── String Reversal using char array — O(n) time, O(n) space ─
    public static String reverseString(String s) {
        char[] chars = s.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            char tmp    = chars[left];
            chars[left] = chars[right];
            chars[right] = tmp;
            left++;
            right--;
        }
        return new String(chars);
    }

    // ── StringBuilder: O(n) vs string + in loop: O(n^2) ──────────
    public static String buildStringRight(int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(i);   // O(1) amortized — avoid String + in loop
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));
        System.out.println(maxSubarray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4}));
        System.out.println(reverseString("hello"));
    }
}`,
            output: `[0, 1]
[1, 2]
6
olleh`,
            language: 'java',
            type: 'code'
          }
        },
        // F
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 (Two Sum):</strong> Initialize an empty hash map. The key insight: for each element x, the value we need to pair with it is target - x. Check if that complement already exists in the map.',
            '<strong>Step 2 (Two Sum):</strong> If the complement is not in the map, store { x: current_index } and continue. If it is found, return [seen[complement], i]. One pass, O(n) time, O(n) space.',
            '<strong>Step 3 (Kadane\'s):</strong> At each position, decide: is it better to extend the existing subarray (current + num) or start a fresh one from the current element (just num)? Take the max of the two options.',
            '<strong>Step 4 (Kadane\'s):</strong> Maintain a global max updated at every step. When the loop finishes, global max holds the answer. Handle all-negative arrays by initializing both current and max_sum to nums[0].',
            '<strong>Step 5 (Sliding Window):</strong> Maintain a dictionary of last-seen character indices and two pointers: left and right. Advance right to expand; when a duplicate is found inside [left, right], advance left past the previous occurrence.',
            '<strong>Step 6 (Sliding Window):</strong> Update the answer (right - left + 1) after each right move. The window invariant: at every step, [left, right] contains no duplicate characters.',
            '<strong>Step 7 (String Building):</strong> Collect parts in a list (Python) or StringBuilder (Java), then join/toString at the end. Never use + concatenation inside a loop for strings — it is O(n²) and a common interview pitfall.'
          ]
        },
        // G
        {
          heading: 'Time & Space Complexity',
          text: 'Array and string operation complexities — n is the array or string length:',
          table: {
            headers: ['Operation', 'Time', 'Space', 'Notes'],
            rows: [
              ['Access by index', 'O(1)', 'O(1)', 'Direct memory address computation'],
              ['Search (unsorted)', 'O(n)', 'O(1)', 'Must check every element'],
              ['Search (sorted, binary)', 'O(log n)', 'O(1)', 'Halve search space each step'],
              ['Insert at end (dynamic array)', 'O(1) amortized', 'O(1)', 'Occasional O(n) resize'],
              ['Insert at index i', 'O(n)', 'O(1)', 'Shifts n - i elements rightward'],
              ['Delete at index i', 'O(n)', 'O(1)', 'Shifts n - i - 1 elements left'],
              ['Two Sum (hash map)', 'O(n)', 'O(n)', 'Single pass + map storage'],
              ['Sliding Window', 'O(n)', 'O(k)', 'k = window or alphabet size'],
              ['String concat in loop', 'O(n²)', 'O(n²)', 'Each + allocates a new string'],
              ['"".join() / StringBuilder', 'O(n)', 'O(n)', 'Single allocation at the end']
            ]
          }
        },
        // H
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Modifying a list while iterating over it.</strong> Removing elements mid-loop skips items and produces incorrect results — <em>Fix:</em> Iterate over a copy, use a list comprehension, or build a new list instead.',
            '<strong>Mistake: Off-by-one errors in sliding window.</strong> Using < vs <= in window boundary checks produces windows that are one element too small or large — <em>Fix:</em> Remember window size = right - left + 1; test with 1-element and 2-element inputs.',
            '<strong>Mistake: String concatenation in a loop.</strong> s = s + c inside a loop is O(n²) total in both Python and Java — <em>Fix:</em> Use "".join(parts) in Python or StringBuilder.append() in Java.',
            '<strong>Mistake: Not handling empty array or single-element edge cases.</strong> Kadane\'s and two-pointer solutions often crash on empty input — <em>Fix:</em> Add a guard clause at the top of every function.'
          ],
          code: `# WRONG: Modifying list while iterating over it
nums = [1, 2, 3, 4, 5]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)   # skips elements — [2,4] leaves 4 unremoved!
print(nums)   # [1, 3, 5] seems right but breaks on edge cases

# CORRECT: List comprehension creates a new list safely
nums = [1, 2, 3, 4, 5]
nums = [n for n in nums if n % 2 != 0]
print(nums)   # [1, 3, 5] — always correct

# WRONG: String concatenation in loop — O(n^2) total allocations
def build_wrong(chars):
    s = ""
    for c in chars:
        s += c       # new string allocated every iteration
    return s

# CORRECT: collect then join — O(n) single allocation
def build_right(chars):
    return "".join(chars)`,
          language: 'python'
        },
        // I
        {
          heading: 'Real-World Applications',
          text: 'Array and string algorithms are the foundation of nearly every software system — from OS kernels to large language models:',
          list: [
            '<strong>Search autocomplete:</strong> Sliding window over a character stream detects repeated or rare substrings for query suggestion ranking.',
            '<strong>Log analysis:</strong> Two-pointer scan finds overlapping time intervals in server logs to detect cascading failures across microservices.',
            '<strong>DNA sequence analysis:</strong> Sliding window finds longest repeated subsequences and gene motifs in genomic data — critical for bioinformatics pipelines.',
            '<strong>Spam detection (NLP):</strong> Token frequency arrays built with Two-Sum-style hash maps identify duplicate or near-duplicate email content in O(n).',
            '<strong>Video streaming:</strong> Dynamic arrays back the frame buffer; O(1) amortized append keeps encoding latency predictable at high frame rates.',
            '<strong>LLM tokenization:</strong> Byte-Pair Encoding (BPE) iterates over character arrays with sliding window merge operations to build vocabulary — used in GPT, LLaMA, and BERT tokenizers.'
          ]
        },
        // J
        {
          heading: 'Interview Tips',
          list: [
            'Before coding, ask: "Is the array sorted?" — a sorted array enables binary search (O(log n)) and two-pointer (O(n)) solutions that are far more impressive than brute force.',
            'For any problem asking "does pair X exist?" or "find element X", reach for a hash map first — it turns O(n) search into O(1) lookup.',
            'For substring or subarray problems with a constraint (length, sum, unique chars), draw the sliding window on the board before coding — it clarifies left/right pointer semantics.',
            'Always mention string immutability and use StringBuilder or join() — it signals deep language knowledge to interviewers.',
            'For character frequency problems, a fixed-size int array of 26 (for lowercase a-z) can replace a hash map with zero collision overhead.',
            'Two pointers on a sorted array — one at each end, moving inward — solves: two-sum sorted, three-sum, container with most water, and valid palindrome.'
          ]
        },
        // K
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Given an array of integers, find the maximum sum of any contiguous subarray. What algorithm applies and what is its complexity?\nAns: Kadane\'s algorithm — O(n) time, O(1) space. Track current_sum = max(num, current_sum + num) and global_max at each step. Key insight: if current subarray sum goes negative, it is always better to start fresh from the current element.',
            'Q2: Given two strings s and t, determine if t is an anagram of s in O(n) time and O(1) space.\nAns: Build a frequency array of size 26. Increment for each character in s; decrement for each character in t. If all 26 counts are zero at the end, t is an anagram. O(n) time; O(1) space because the array size is fixed at 26 regardless of input length.',
            'Q3 (Hard): Find the length of the longest substring containing at most k distinct characters.\nAns: Sliding window with a hash map counting character frequencies in the current window. Expand right always; when the map has more than k distinct keys, advance left and decrement counts (delete key when count hits 0). Track the maximum window size seen. O(n) time, O(k) space.'
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 3 — Linked Lists
    // ─────────────────────────────────────────────────────────────────────────
    'linked-lists': {
      title: 'Linked Lists (Singly & Doubly)',
      subtitle: 'Pointer mastery for interview success',
      sections: [
        // A
        {
          heading: 'Linked List Fundamentals',
          text: 'A linked list is a dynamic data structure where elements (nodes) are stored at arbitrary memory locations and connected by pointers. Unlike arrays, there is no random access — traversal always begins from the head.',
          list: [
            '<strong>Node structure:</strong> Each node holds a value (data) and one or more pointers. Singly linked: one next pointer. Doubly linked: next and prev pointers.',
            '<strong>Singly Linked List:</strong> Each node points only to the next node. Traversal is one-directional (head to tail). Less memory — one pointer overhead per node.',
            '<strong>Doubly Linked List:</strong> Each node has both next and prev pointers, enabling O(1) deletion when you hold a reference to the node and backward traversal. Used by Python\'s deque, Java\'s LinkedList, and LRU Cache.',
            '<strong>Advantages over arrays:</strong> O(1) insertion and deletion at the head (no shifting). Dynamic size without pre-allocation. Efficient list merging.',
            '<strong>Disadvantages over arrays:</strong> O(n) access to the element at index i. Poor cache performance due to non-contiguous memory. Extra memory for pointer storage.',
            '<strong>Classic patterns:</strong> Reverse the list, detect a cycle with Floyd\'s algorithm, find the middle with fast/slow pointers, merge two sorted lists, remove the nth node from the end.'
          ]
        },
        // B
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>dummy node technique</strong> simplifies edge cases where the head itself might be removed or replaced. Prepend a dummy node with value -1 before the real head. Your operations always start from dummy.next, so you never need to special-case "what if the head changes?" Return dummy.next as the result. This pattern is used in merge sorted lists, remove duplicates, and partition list problems.</p>',
            '<p><strong>Floyd\'s Cycle Detection</strong> (the tortoise and hare algorithm) uses two pointers: slow moves one step at a time, fast moves two. If there is a cycle, fast will eventually lap slow and they will meet inside the cycle. If fast reaches None/null, there is no cycle. To find the cycle entry point, reset one pointer to head after the meeting point is found, then advance both one step at a time — they meet exactly at the cycle entry.</p>',
            '<p>The <strong>fast/slow pointer trick for finding the middle</strong> works because when fast (2 steps per iteration) reaches the end, slow (1 step) is at the midpoint. For odd-length lists, slow lands exactly on the middle node. For even-length lists, slow lands on the first of the two middle nodes. This is O(n) time and O(1) space — crucial for merge sort on linked lists.</p>'
          ],
          note: 'Key rule: before every pointer move, verify that the current node and its next pointer are not None/null. Null pointer dereference is the #1 linked list interview bug.'
        },
        // C
        {
          heading: 'Visual Diagram',
          code: `Singly Linked List:
  Head
   |
  [1 | *]-->[2 | *]-->[3 | *]-->[4 | *]-->[None]
  val  next

Doubly Linked List:
  Head                                        Tail
   |                                           |
  [None|1|*]<==>[*|2|*]<==>[*|3|*]<==>[*|4|None]
       prev val next

Floyd's Cycle Detection:
  [1]->[2]->[3]->[4]->[5]
                  ^         |
                  |         v
                 [8]<------[6]->[7]
                            ^
                       cycle entry (node 3)

  slow moves 1 step, fast moves 2 steps:
  slow: 1->2->3->4->5->6->7->8->3...
  fast: 1->3->5->7->3->5->7->3...
  They meet at some node inside the cycle.
  Reset slow to head, advance both 1 step:
  slow: 1->2->3   fast: meetPoint->...->3
  They converge at node 3 = cycle entry.

Find Middle (fast/slow pointers):
  [1]->[2]->[3]->[4]->[5]->None

  slow:  1  ->  2  ->  3       <- stops at middle
  fast:  1  ->  3  ->  5->None <- reaches end
  Middle = node(3)`,
          language: 'text'
        },
        // D
        {
          heading: 'Python Implementation',
          example: {
            title: 'Linked List in Python',
            code: `from typing import Optional, List

class ListNode:
    def __init__(self, val: int = 0, nxt: "Optional[ListNode]" = None):
        self.val  = val
        self.next = nxt

    def __repr__(self):
        nodes, cur = [], self
        while cur:
            nodes.append(str(cur.val))
            cur = cur.next
        return " -> ".join(nodes)

# ── Build a linked list from a Python list ───────────────────────
def build(values: List[int]) -> Optional[ListNode]:
    dummy = ListNode(-1)
    cur = dummy
    for v in values:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

# ── Reverse: O(n) time, O(1) space ───────────────────────────────
def reverse_list(head: Optional[ListNode]) -> Optional[ListNode]:
    prev, curr = None, head
    while curr:
        nxt       = curr.next   # save next before overwriting
        curr.next = prev        # reverse the pointer
        prev      = curr        # advance prev
        curr      = nxt         # advance curr
    return prev                 # prev is the new head

# ── Detect cycle: Floyd's — O(n) time, O(1) space ────────────────
def has_cycle(head: Optional[ListNode]) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:        # identity check, not equality
            return True
    return False

# ── Find middle: fast/slow — O(n) time, O(1) space ───────────────
def find_middle(head: Optional[ListNode]) -> Optional[ListNode]:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# ── Demo ──────────────────────────────────────────────────────────
ll = build([1, 2, 3, 4, 5])
print("Original:", ll)
print("Reversed:", reverse_list(ll))

ll2 = build([1, 2, 3, 4, 5])
print("Middle  :", find_middle(ll2).val)

# Inject a cycle: node 5 -> node at index 2 (value 3)
ll3 = build([1, 2, 3, 4, 5])
cur, nodes = ll3, []
while cur:
    nodes.append(cur)
    cur = cur.next
nodes[-1].next = nodes[2]   # 5 -> 3 creates a cycle
print("Has cycle:", has_cycle(ll3))
print("Has cycle:", has_cycle(build([1, 2, 3])))`,
            output: `Original: 1 -> 2 -> 3 -> 4 -> 5
Reversed: 5 -> 4 -> 3 -> 2 -> 1
Middle  : 3
Has cycle: True
Has cycle: False`,
            language: 'python',
            type: 'code'
          }
        },
        // E
        {
          heading: 'Java Implementation',
          example: {
            title: 'Linked List in Java',
            code: `public class LinkedListDemo {

    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    // ── Build list from int array ─────────────────────────────────
    static ListNode build(int[] values) {
        ListNode dummy = new ListNode(-1);
        ListNode cur   = dummy;
        for (int v : values) {
            cur.next = new ListNode(v);
            cur = cur.next;
        }
        return dummy.next;
    }

    static String toString(ListNode head) {
        StringBuilder sb = new StringBuilder();
        while (head != null) {
            sb.append(head.val);
            if (head.next != null) sb.append(" -> ");
            head = head.next;
        }
        return sb.toString();
    }

    // ── Reverse: O(n) time, O(1) space ───────────────────────────
    static ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode nxt = curr.next;
            curr.next    = prev;
            prev         = curr;
            curr         = nxt;
        }
        return prev;
    }

    // ── Detect cycle: Floyd's — O(n) time, O(1) space ─────────────
    static boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;   // reference equality
        }
        return false;
    }

    // ── Find middle: fast/slow — O(n) time, O(1) space ───────────
    static ListNode findMiddle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static void main(String[] args) {
        ListNode ll = build(new int[]{1, 2, 3, 4, 5});
        System.out.println("Original: " + toString(ll));
        System.out.println("Reversed: " + toString(reverseList(ll)));

        ListNode ll2 = build(new int[]{1, 2, 3, 4, 5});
        System.out.println("Middle  : " + findMiddle(ll2).val);

        ListNode ll3 = build(new int[]{1, 2, 3, 4, 5});
        ListNode[] nodes = new ListNode[5];
        ListNode cur = ll3;
        for (int i = 0; i < 5; i++) { nodes[i] = cur; cur = cur.next; }
        nodes[4].next = nodes[2];   // 5 -> 3: inject cycle
        System.out.println("Has cycle: " + hasCycle(ll3));
        System.out.println("Has cycle: " + hasCycle(build(new int[]{1, 2, 3})));
    }
}`,
            output: `Original: 1 -> 2 -> 3 -> 4 -> 5
Reversed: 5 -> 4 -> 3 -> 2 -> 1
Middle  : 3
Has cycle: true
Has cycle: false`,
            language: 'java',
            type: 'code'
          }
        },
        // F
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 (Reverse):</strong> Initialize prev = None and curr = head. We will rewire one pointer per iteration, moving left to right through the list.',
            '<strong>Step 2 (Reverse):</strong> Each iteration: save curr.next as nxt (critical — otherwise you lose the rest of the list), set curr.next = prev (reverse the link), advance prev = curr, advance curr = nxt.',
            '<strong>Step 3 (Reverse):</strong> When curr becomes None, prev points to the old tail which is now the new head. Return prev.',
            '<strong>Step 4 (Cycle Detection):</strong> Start both slow and fast at head. Each iteration: slow moves one step, fast moves two. If fast or fast.next is None, the list is finite — no cycle.',
            '<strong>Step 5 (Cycle Detection):</strong> If slow == fast (same object reference), they have met inside the cycle — return True. For the cycle entry point: reset one pointer to head, advance both one step at a time; they meet at the entry node.',
            '<strong>Step 6 (Find Middle):</strong> Start slow and fast at head. Each iteration: slow moves one step, fast moves two. When fast is None or fast.next is None, slow is positioned at the middle.',
            '<strong>Step 7 (Dummy Node):</strong> For problems where the head might be removed or changed (remove head, merge lists), prepend dummy = ListNode(-1); dummy.next = head. Operate on dummy.next; always return dummy.next as the final result.'
          ]
        },
        // G
        {
          heading: 'Time & Space Complexity',
          text: 'Linked list operation complexities — n is the number of nodes; array costs shown for comparison:',
          table: {
            headers: ['Operation', 'Singly LL', 'Doubly LL', 'Array', 'Notes'],
            rows: [
              ['Access by index', 'O(n)', 'O(n)', 'O(1)', 'LL has no random access'],
              ['Search by value', 'O(n)', 'O(n)', 'O(n)', 'Must traverse from head'],
              ['Insert at head', 'O(1)', 'O(1)', 'O(n)', 'Array must shift all elements'],
              ['Insert at tail', 'O(n) / O(1)*', 'O(1)**', 'O(1) amort', '*O(1) if tail pointer maintained'],
              ['Insert at index i', 'O(n)', 'O(n)', 'O(n)', 'Traversal to position i'],
              ['Delete at head', 'O(1)', 'O(1)', 'O(n)', 'Move head pointer forward'],
              ['Delete given node ref', 'O(n)', 'O(1)', 'O(n)', 'Doubly LL: use prev.next directly'],
              ['Reverse entire list', 'O(n)', 'O(n)', 'O(n)', 'Must visit every node'],
              ['Memory per element', 'val + 1 ptr', 'val + 2 ptrs', 'val only', 'LL has pointer overhead']
            ]
          }
        },
        // H
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Losing the head reference.</strong> Assigning head = head.next before saving it loses the original head and corrupts the result — <em>Fix:</em> Always store the result in a separate variable (prev or dummy.next); never overwrite head mid-operation.',
            '<strong>Mistake: Not checking None/null before dereferencing next.</strong> Accessing node.next when node is None causes AttributeError (Python) or NullPointerException (Java) — <em>Fix:</em> Always check while cur and cur.next: before accessing cur.next.next.',
            '<strong>Mistake: Using == instead of is for cycle detection in Python.</strong> slow == fast compares values; slow is fast checks object identity (same node in memory). Two different nodes can have the same value — <em>Fix:</em> Use is for pointer comparison.',
            '<strong>Mistake: Off-by-one when removing the nth node from end.</strong> Moving fast n steps (instead of n+1) ahead does not leave room for slow to stop at the node before the target — <em>Fix:</em> Advance fast exactly n+1 steps so slow stops at the predecessor, enabling slow.next = slow.next.next.'
          ],
          code: `# WRONG: Losing head reference during reversal
def reverse_wrong(head):
    while head and head.next:
        head = head.next   # original head is lost!
    return head   # returns tail, not a reversed list

# CORRECT: Three-pointer technique
def reverse_correct(head):
    prev, curr = None, head
    while curr:
        nxt       = curr.next   # 1. save next
        curr.next = prev        # 2. reverse pointer
        prev, curr = curr, nxt  # 3. advance both
    return prev   # prev is the new head

# WRONG: Not checking fast.next before accessing fast.next.next
def has_cycle_wrong(head):
    slow, fast = head, head
    while fast:                    # missing fast.next check!
        slow = slow.next
        fast = fast.next.next      # crashes if fast.next is None
    return False

# CORRECT: Check both fast and fast.next
def has_cycle_correct(head):
    slow, fast = head, head
    while fast and fast.next:      # guard both
        slow = slow.next
        fast = fast.next.next
        if slow is fast:           # identity, not equality
            return True
    return False`,
          language: 'python'
        },
        // I
        {
          heading: 'Real-World Applications',
          text: 'Linked lists and pointer-based structures underpin many critical systems you interact with every day:',
          list: [
            '<strong>LRU Cache:</strong> Python\'s functools.lru_cache and Java\'s LinkedHashMap use a doubly linked list combined with a hash map for O(1) get and O(1) put — the most common system design interview topic.',
            '<strong>Browser history:</strong> Back and forward navigation is a doubly linked list — each visited page is a node, and prev/next pointers enable O(1) navigation.',
            '<strong>Undo/Redo in text editors:</strong> Each edit action is a node in a doubly linked list. Undo traverses backward (prev); redo traverses forward (next); a new action truncates everything after the current node.',
            '<strong>OS memory management:</strong> Free memory blocks are tracked as a linked list (free list). malloc traverses it to find a block of sufficient size; free reinserts the released block.',
            '<strong>Music and video playlists:</strong> Doubly linked list enables O(1) previous/next track navigation without knowing the index.',
            '<strong>Blockchain:</strong> Each block contains a cryptographic hash of the previous block — forming an immutable singly linked chain where tampering with any block invalidates all subsequent hashes.'
          ]
        },
        // J
        {
          heading: 'Interview Tips',
          list: [
            'Draw the linked list on the whiteboard before writing any code — visualizing pointer states at each step prevents errors and demonstrates methodical thinking.',
            'Always use a dummy node when the head might change (remove head node, merge two lists) — it eliminates an entire category of edge-case bugs.',
            'The fast/slow pointer pattern solves three families of problems: detect cycle, find cycle entry, and find middle. Recognizing these patterns saves you from reinventing solutions under pressure.',
            'When reversing a linked list in an interview, narrate each step aloud: "I save nxt, reverse curr.next to point to prev, then advance both pointers." This shows your reasoning.',
            'For "remove nth node from end", use two pointers separated by n+1 steps — advance leader to the end, then slow is at the predecessor and you can do slow.next = slow.next.next.',
            'If the problem requires O(1) space, recursion is off limits (O(n) stack frames). Think iterative with explicit pointer manipulation.',
            'For merge sorted lists, always use a dummy head. Compare list heads, attach the smaller node, advance that pointer — repeat until one list is exhausted, then append the remaining tail.'
          ]
        },
        // K
        {
          heading: 'Practice Problems',
          list: [
            'Q1: How do you merge two sorted linked lists into one sorted linked list in O(n + m) time and O(1) space?\nAns: Use a dummy node. Compare heads of both lists and attach the smaller node to the result. Advance that list\'s pointer. When one list is exhausted, attach the remaining tail of the other. Return dummy.next. No extra memory is used because you reuse the existing nodes.',
            'Q2: How do you find the entry point of a cycle in a linked list after detecting it with Floyd\'s algorithm?\nAns: Phase 1 — run Floyd\'s until slow and fast meet (meeting point is inside the cycle). Phase 2 — reset slow to head, keep fast at the meeting point, advance both one step at a time. They meet exactly at the cycle entry node. Mathematical proof: the distance from head to entry equals the distance from the meeting point to entry modulo cycle length.',
            'Q3 (Hard): Given a linked list, reverse every k nodes in-place. What is the time and space complexity?\nAns: O(n) time, O(1) space. For each group of k nodes: apply the three-pointer reverse technique, track the tail of the reversed group, connect it to the head of the next group. Repeat until fewer than k nodes remain (leave them in their original order per the standard variant). Each node is visited a constant number of times.'
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 4 — Stacks & Queues
    // ─────────────────────────────────────────────────────────────────────────
    'stacks-queues': {
      title: 'Stacks & Queues',
      subtitle: 'LIFO and FIFO — the engines of traversal',
      sections: [
        // A
        {
          heading: 'Stacks & Queues Fundamentals',
          text: 'Stacks (LIFO) and queues (FIFO) are restricted-access linear structures. Their constraints are precisely what make them powerful — they enforce a specific traversal order that models DFS, BFS, expression evaluation, undo systems, and scheduling.',
          list: [
            '<strong>Stack (LIFO — Last In, First Out):</strong> Like a stack of plates — add and remove only from the top. Operations: push (add), pop (remove top), peek (read top without removing). Used in DFS, undo/redo, expression parsing, and the call stack itself.',
            '<strong>Queue (FIFO — First In, First Out):</strong> Like a ticket line — the first arrival is the first served. Operations: enqueue (add to back), dequeue (remove from front), peek (read front). Used in BFS, task scheduling, and producer-consumer systems.',
            '<strong>Deque (Double-Ended Queue):</strong> Supports O(1) push and pop at both ends. Python\'s collections.deque and Java\'s ArrayDeque implement this. Use deque when you need both stack and queue behavior, or for sliding window maximum.',
            '<strong>Monotonic Stack:</strong> A stack that maintains elements in strictly increasing or decreasing order. When a new element would violate the invariant, pop until it is restored. Solves "next greater element", "largest rectangle in histogram", and related problems in O(n).',
            '<strong>BFS uses a Queue:</strong> Level-by-level traversal — enqueue the start node, then for each node dequeued enqueue its unvisited neighbors. Guarantees shortest path in unweighted graphs.',
            '<strong>DFS uses a Stack:</strong> Depth-first traversal — push the start node, then for each node popped push its unvisited neighbors. Recursive DFS uses the call stack implicitly.'
          ]
        },
        // B
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>monotonic stack</strong> pattern is one of the most powerful interview techniques. The invariant: elements on the stack are always in increasing (or decreasing) order of value. When you push a new element that is larger than the current top (for a decreasing stack), pop all smaller elements — and at the moment of each pop, you know the new element is that popped element\'s "next greater element". This converts an O(n²) brute-force search to O(n) because each element is pushed and popped at most once.</p>',
            '<p>In Python, <strong>never use a plain list as a queue</strong>. <code>list.pop(0)</code> is O(n) because Python must shift all remaining elements leftward. Instead, always use <code>collections.deque</code> — its <code>popleft()</code> is O(1) because a deque is implemented as a doubly-linked list of fixed-size blocks. For a stack, a plain Python list is perfectly fine because <code>list.append()</code> and <code>list.pop()</code> from the end are both O(1).</p>',
            '<p>In Java, prefer <strong>ArrayDeque over the legacy Stack class and over LinkedList</strong>. The legacy <code>java.util.Stack</code> extends Vector and is synchronized — unnecessary overhead for single-threaded code. <code>ArrayDeque</code> is faster, not synchronized, and implements the full Deque interface — use <code>push</code>/<code>pop</code> for stack semantics and <code>offer</code>/<code>poll</code> for queue semantics.</p>'
          ],
          note: 'Key rule: if your solution needs to remember elements in reverse order (undo, backtrack, nested structure), that is a stack. If it must process elements in arrival order (shortest path, level traversal), that is a queue.'
        },
        // C
        {
          heading: 'Visual Diagram',
          code: `Stack — LIFO (all operations at the top):
  push(1) -> push(2) -> push(3) -> pop() -> peek()

  push(1):  [ 1 ]                    TOP = 1
  push(2):  [ 1 | 2 ]                TOP = 2
  push(3):  [ 1 | 2 | 3 ]            TOP = 3
  pop():    [ 1 | 2 ]    returns 3   TOP = 2
  peek():   [ 1 | 2 ]    returns 2 (no removal)
             BOTTOM ---> TOP

Queue — FIFO (enqueue at back, dequeue from front):
  enqueue(A) -> enqueue(B) -> enqueue(C) -> dequeue() -> peek()

  enqueue(A): FRONT [ A ] BACK
  enqueue(B): FRONT [ A  B ] BACK
  enqueue(C): FRONT [ A  B  C ] BACK
  dequeue():  FRONT [ B  C ] BACK     returns A
  peek():     FRONT [ B  C ] BACK     returns B (no removal)

Monotonic Decreasing Stack — Next Greater Element for [2, 1, 5, 3, 6]:
  (stack stores indices; NGE[i] = next element greater than arr[i])

  i=0, val=2: stack empty  -> push 0          stack=[0]
  i=1, val=1: 1 < arr[0]=2 -> push 1          stack=[0,1]
  i=2, val=5: 5 > arr[1]=1 -> pop 1, NGE[1]=5
              5 > arr[0]=2 -> pop 0, NGE[0]=5
              push 2                           stack=[2]
  i=3, val=3: 3 < arr[2]=5 -> push 3          stack=[2,3]
  i=4, val=6: 6 > arr[3]=3 -> pop 3, NGE[3]=6
              6 > arr[2]=5 -> pop 2, NGE[2]=6
              push 4                           stack=[4]
  End: index 4 remains -> NGE[4] = -1 (default)

  Result NGE = [5, 5, 6, 6, -1]`,
          language: 'text'
        },
        // D
        {
          heading: 'Python Implementation',
          example: {
            title: 'Stacks & Queues in Python',
            code: `from collections import deque
from typing import List

# ── Stack using Python list — O(1) push/pop at end ────────────────
class Stack:
    def __init__(self):
        self._data = []

    def push(self, val):    self._data.append(val)
    def pop(self):          return self._data.pop()
    def peek(self):         return self._data[-1]
    def is_empty(self):     return len(self._data) == 0
    def __len__(self):      return len(self._data)

# ── Queue using deque — O(1) enqueue and dequeue ──────────────────
class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, val): self._data.append(val)
    def dequeue(self):      return self._data.popleft()   # O(1)!
    def peek(self):         return self._data[0]
    def is_empty(self):     return len(self._data) == 0

# ── Monotonic Stack: Next Greater Element — O(n) ──────────────────
def next_greater_element(nums: List[int]) -> List[int]:
    n = len(nums)
    result = [-1] * n               # default: no greater element
    stack  = []                     # stores indices, not values

    for i in range(n):
        # Pop all indices whose values are smaller than nums[i]
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]   # nums[i] is the NGE for that index
        stack.append(i)
    return result   # remaining indices in stack have no NGE -> -1

# ── Valid Parentheses — classic stack problem — O(n) ─────────────
def is_valid(s: str) -> bool:
    stack   = []
    mapping = {")": "(", "}": "{", "]": "["}
    for ch in s:
        if ch in mapping:
            top = stack.pop() if stack else "#"
            if mapping[ch] != top:
                return False
        else:
            stack.append(ch)
    return not stack   # valid only if all openers were matched

# ── Demo ──────────────────────────────────────────────────────────
st = Stack()
for v in [1, 2, 3]:
    st.push(v)
print("peek:", st.peek(), "| pop:", st.pop(), "| size:", len(st))

q = Queue()
for v in ["A", "B", "C"]:
    q.enqueue(v)
print("dequeue:", q.dequeue(), "| peek:", q.peek())

print("NGE:", next_greater_element([2, 1, 5, 3, 6]))
print("Valid '()[]{}':", is_valid("()[]{}"))
print("Valid '([)]' :", is_valid("([)]"))`,
            output: `peek: 3 | pop: 3 | size: 2
dequeue: A | peek: B
NGE: [5, 5, 6, 6, -1]
Valid '()[]{}': True
Valid '([)]' : False`,
            language: 'python',
            type: 'code'
          }
        },
        // E
        {
          heading: 'Java Implementation',
          example: {
            title: 'Stacks & Queues in Java',
            code: `import java.util.*;

public class StacksQueues {

    // ── Next Greater Element — O(n) monotonic stack ───────────────
    static int[] nextGreaterElement(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        Deque<Integer> stack = new ArrayDeque<>();   // stores indices

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
                int idx    = stack.pop();
                result[idx] = nums[i];
            }
            stack.push(i);
        }
        return result;
    }

    // ── Valid Parentheses — O(n) ──────────────────────────────────
    static boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (ch == ')' && top != '(') return false;
                if (ch == ']' && top != '[') return false;
                if (ch == '}' && top != '{') return false;
            }
        }
        return stack.isEmpty();
    }

    // ── BFS with Queue: shortest path in unweighted graph — O(V+E) ─
    static int bfsShortestPath(int[][] adj, int src, int dst) {
        if (src == dst) return 0;
        boolean[] visited = new boolean[adj.length];
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(src);
        visited[src] = true;
        int level = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            level++;
            for (int i = 0; i < size; i++) {
                int node = queue.poll();
                for (int neighbor : adj[node]) {
                    if (neighbor == dst) return level;
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.offer(neighbor);
                    }
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(nextGreaterElement(new int[]{2,1,5,3,6})));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("([)]"));

        // Graph: 0->[1,2], 1->[3], 2->[3], 3->[4]
        int[][] adj = {{1, 2}, {3}, {3}, {4}, {}};
        System.out.println("Shortest path 0->4: " + bfsShortestPath(adj, 0, 4));
    }
}`,
            output: `[5, 5, 6, 6, -1]
true
false
Shortest path 0->4: 2`,
            language: 'java',
            type: 'code'
          }
        },
        // F
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 (Monotonic Stack Setup):</strong> Initialize result = [-1] * n (default for "no greater element") and an empty stack that stores indices, not values — storing indices lets you compute both the answer position and the answer value.',
            '<strong>Step 2 (Process each element):</strong> For index i, check nums[i] against the value at the stack\'s top index. If nums[i] is greater, the current element is the "next greater" answer for the top index.',
            '<strong>Step 3 (Pop loop):</strong> Keep popping from the stack while it is non-empty and nums[i] > nums[stack[-1]]. For each popped index idx, record result[idx] = nums[i].',
            '<strong>Step 4 (Push):</strong> After all pops, push index i. This maintains the decreasing-value invariant. Elements remaining at the end have no next greater element and keep their default of -1.',
            '<strong>Step 5 (Valid Parentheses):</strong> Push opening brackets onto the stack. When a closing bracket is seen, pop the top and verify it is the matching opener. Empty stack on close = invalid.',
            '<strong>Step 6 (BFS — Level Order):</strong> Enqueue the start node and mark it visited. Snapshot the queue size; process exactly that many nodes at the current level. Enqueue their unvisited neighbors; increment the level counter.',
            '<strong>Step 7 (BFS — Termination):</strong> Return the level counter the moment the destination is dequeued or found among a node\'s neighbors. If the queue empties without finding the destination, return -1 (unreachable).'
          ]
        },
        // G
        {
          heading: 'Time & Space Complexity',
          text: 'Stack, Queue, and Deque operation complexities across Python and Java implementations:',
          table: {
            headers: ['Operation', 'Stack (list)', 'Queue (deque)', 'Deque', 'Notes'],
            rows: [
              ['Push / Enqueue', 'O(1) amortized', 'O(1)', 'O(1)', 'Append to one end'],
              ['Pop (top) / Dequeue (front)', 'O(1)', 'O(1) popleft', 'O(1)', 'deque O(1) at both ends'],
              ['Peek', 'O(1)', 'O(1)', 'O(1)', 'Read without removal'],
              ['list.pop(0) as queue', 'O(n)', '—', '—', 'AVOID: shifts all elements'],
              ['Search', 'O(n)', 'O(n)', 'O(n)', 'No random access'],
              ['Monotonic stack full pass', 'O(n)', '—', '—', 'Each element pushed/popped once'],
              ['Python class', 'list', 'collections.deque', 'collections.deque', ''],
              ['Java class', 'ArrayDeque (preferred)', 'LinkedList or ArrayDeque', 'ArrayDeque', 'Avoid legacy Stack']
            ]
          }
        },
        // H
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Using Python list as a queue with pop(0).</strong> list.pop(0) is O(n) because Python shifts all remaining elements — <em>Fix:</em> Always import and use collections.deque; call popleft() for O(1) front removal.',
            '<strong>Mistake: Using Java\'s legacy Stack class.</strong> java.util.Stack extends Vector (synchronized overhead) and is considered obsolete — <em>Fix:</em> Use ArrayDeque as a stack with push() and pop(), or Deque<Integer> stack = new ArrayDeque<>().',
            '<strong>Mistake: Not checking isEmpty() before pop() or peek().</strong> Popping from an empty stack raises IndexError in Python or NoSuchElementException in Java — <em>Fix:</em> Guard every pop/peek with an emptiness check, or use conditional expressions.',
            '<strong>Mistake: Forgetting to initialize result with -1 in monotonic stack.</strong> Indices remaining in the stack after the loop have no next greater element. If result is not pre-filled with -1, you must handle them manually after the loop — <em>Fix:</em> Always pre-fill result = [-1] * n before the loop.'
          ],
          code: `# WRONG: Using list as queue — O(n) per dequeue
from collections import deque

bad_queue = []
bad_queue.append("A")
bad_queue.append("B")
front = bad_queue.pop(0)    # O(n): shifts all elements left!

# CORRECT: deque — O(1) at both ends
good_queue = deque()
good_queue.append("A")
good_queue.append("B")
front = good_queue.popleft()  # O(1)
print(front)   # "A"

# WRONG: Popping from empty stack without a guard
stack = []
val = stack.pop()   # IndexError: pop from empty list

# CORRECT: Check before popping
stack = []
val = stack.pop() if stack else None
print(val)   # None (safe)

# WRONG: Not pre-filling result — must handle remaining stack manually
def nge_messy(nums):
    stack, result = [], [None] * len(nums)
    for i, num in enumerate(nums):
        while stack and num > nums[stack[-1]]:
            result[stack.pop()] = num
        stack.append(i)
    for idx in stack:
        result[idx] = -1    # manual cleanup — easy to forget!
    return result

# CORRECT: Pre-fill with -1 and skip the cleanup
def nge_clean(nums):
    result = [-1] * len(nums)   # default answer already set
    stack  = []
    for i, num in enumerate(nums):
        while stack and num > nums[stack[-1]]:
            result[stack.pop()] = num
        stack.append(i)
    return result`,
          language: 'python'
        },
        // I
        {
          heading: 'Real-World Applications',
          text: 'Stacks and queues are invisible workhorses in every layer of the software stack — from your browser to distributed systems:',
          list: [
            '<strong>Function call stack:</strong> Every function call pushes a stack frame; return pops it. Stack overflow errors occur when recursion is too deep — the OS-level call stack is exhausted.',
            '<strong>Browser navigation:</strong> Browser back and forward buttons are implemented with two stacks. Each page visit pushes onto the back stack; clicking Back pops it and pushes onto the forward stack.',
            '<strong>Expression evaluation and parsing:</strong> Compilers and calculators use stacks to evaluate infix/postfix expressions and match nested structures (HTML tag matching, JSON parsing, code bracket validation).',
            '<strong>BFS in AI pathfinding:</strong> Dijkstra and BFS use a queue (or priority queue for weighted graphs) to guarantee shortest-path exploration level by level — fundamental to GPS routing and game AI.',
            '<strong>Task scheduling and message queues:</strong> Kafka, RabbitMQ, Celery, and AWS SQS are all FIFO queues at their core — ensuring tasks are processed in the order they arrive without data loss.',
            '<strong>Undo/Redo in IDEs and design tools:</strong> Undo stack holds past states; redo stack holds future states. Each edit pushes onto undo and clears redo. Figma, VS Code, and Photoshop all use this pattern.'
          ]
        },
        // J
        {
          heading: 'Interview Tips',
          list: [
            'When you see "next greater/smaller element", "largest rectangle in histogram", or "trapping rain water", immediately think monotonic stack — it reduces O(n²) brute force to O(n).',
            'When you see "level-order traversal", "shortest path in unweighted graph", or "minimum steps to reach X", immediately think BFS with a queue.',
            'When you see "DFS", "backtracking", "all paths", or "recursive", you are implicitly using a stack — either the call stack (recursive) or an explicit stack (iterative).',
            'Always use collections.deque in Python for any queue. If asked why, explain: list.pop(0) is O(n) while deque.popleft() is O(1).',
            'In Java, always say "I will use ArrayDeque as my stack or queue" — it signals modern idiomatic Java knowledge and avoids the legacy Stack class.',
            'The monotonic stack O(n) insight: even though there is a while loop inside the for loop, each element is pushed exactly once and popped at most once — so the total number of operations across all iterations is 2n, not n².'
          ]
        },
        // K
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Given a string of parentheses containing (, ), [, ], {, }, determine if it is valid. Every opener must have a matching closer in the correct order. What data structure and complexity?\nAns: Stack. Push each opening bracket. When a closing bracket is seen, pop the stack and verify the match. Return true if the stack is empty at the end. O(n) time, O(n) space in the worst case (all openers).',
            'Q2: Given an array, find the next greater element for each position. How does a monotonic stack achieve O(n) when brute force is O(n²)?\nAns: Each element is pushed exactly once and popped at most once across the entire loop — giving a total of at most 2n operations. The while loop inside the for loop does NOT make it O(n²) because the total pop count across all iterations is bounded by n. This is an amortized O(1) argument.',
            'Q3 (Hard): Design a queue that supports enqueue, dequeue, and getMin in O(1) amortized time.\nAns: Use two stacks (main and auxiliary). Enqueue pushes to main. Dequeue pops from auxiliary; if auxiliary is empty, pour all of main into auxiliary (this reverses the order, giving FIFO). For getMin, maintain a parallel "min stack" alongside each stack that tracks the running minimum at each depth level. Each element is moved at most twice, giving O(1) amortized dequeue.'
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // TOPIC 5 — Hash Maps & Sets
    // ─────────────────────────────────────────────────────────────────────────
    'hashmaps-sets': {
      title: 'Hash Maps & Sets',
      subtitle: 'O(1) lookup — the interviewer\'s favorite trick',
      sections: [
        // A
        {
          heading: 'Hash Maps & Sets Fundamentals',
          text: 'Hash maps and sets provide O(1) average-time lookup, insertion, and deletion. They are the single most effective tool for optimizing interview solutions — when you see an O(n²) brute-force loop, a hash map almost always reduces it to O(n).',
          list: [
            '<strong>Hash Function:</strong> Maps a key of any type to an integer bucket index. A good hash function distributes keys uniformly to minimize collisions. Python uses the built-in hash(); Java uses the hashCode() method on each object.',
            '<strong>Collision Resolution:</strong> Two keys that hash to the same bucket collide. Python dicts use open addressing (probe for an empty slot); Java HashMaps use separate chaining (linked list or tree at each bucket since Java 8).',
            '<strong>Python dict:</strong> Maintains insertion order (Python 3.7+). O(1) average for get, set, and delete. O(n) worst case on adversarial hash collisions. The go-to for key-value mapping.',
            '<strong>Python Counter:</strong> dict subclass for frequency counting. Counter(iterable) builds the frequency map in O(n). Supports arithmetic: c1 + c2, c1 - c2, and most_common(k) for top-k elements.',
            '<strong>Python defaultdict:</strong> dict subclass that returns a factory-defined default instead of raising KeyError on missing keys. defaultdict(list) auto-creates empty lists; defaultdict(int) auto-creates 0. Eliminates repetitive key-existence checks.',
            '<strong>Java HashMap vs TreeMap vs LinkedHashMap:</strong> HashMap gives O(1) average with no key ordering. TreeMap (Red-Black tree) gives O(log n) but maintains sorted key order for range queries. LinkedHashMap preserves insertion order — the foundation of Java LRU Cache implementations.'
          ]
        },
        // B
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>frequency counting pattern</strong> is the foundation of most string and array interview problems. Build a Counter or dict of element frequencies in one O(n) pass, then answer queries in O(1). This powers anagram detection, top-k elements, ransom note, first unique character, and many more. Recognize it whenever the problem involves counting occurrences or comparing element distributions.</p>',
            '<p><strong>Anagram detection</strong> exploits the fact that two strings are anagrams if and only if they share identical character frequency distributions. Instead of sorting both strings in O(n log n), build and compare frequency counters in O(n). A generalization: group anagrams by using the sorted string (or a frequency tuple) as the hash map key — all anagrams share the same canonical key and are collected into the same group in O(n × k) where k is average word length.</p>',
            '<p>The <strong>Two-Sum pattern with a hash map</strong> is the canonical space-for-time trade-off. Brute force checks every pair: O(n²) time, O(1) space. The hash map approach stores complements as you scan: O(n) time, O(n) space. This exact pattern — one extra hash map pass eliminates a nested loop — recurs in subarray sum equals k, four-sum, and dozens of other problems. Recognizing it is one of the highest-leverage interview skills you can develop.</p>'
          ],
          note: 'Key rule: when you see O(n²) from a nested loop searching for a matching element, ask "can I store what I am looking for in a hash map during the outer loop?" The answer is almost always yes.'
        },
        // C
        {
          heading: 'Visual Diagram',
          code: `Hash Function -> Bucket Array -> Chained Entries:

  key = "apple"
      |
  hash("apple") % 8 = 3
      |
      v
  Bucket Array (size 8):
  [0]: empty
  [1]: empty
  [2]: ("banana", 2) -> null
  [3]: ("apple", 5) -> ("cherry", 1) -> null   <- collision, chained
  [4]: empty
  [5]: ("date", 3) -> null
  [6]: empty
  [7]: ("elderberry", 7) -> null

Python defaultdict(list) — grouping anagrams:
  words = ["eat", "tea", "tan", "ate", "nat", "bat"]

  word -> sorted key -> groups map:
  "eat" -> "aet"  =>  {"aet": ["eat"]}
  "tea" -> "aet"  =>  {"aet": ["eat", "tea"]}
  "tan" -> "ant"  =>  {"aet": [...], "ant": ["tan"]}
  "ate" -> "aet"  =>  {"aet": ["eat", "tea", "ate"], ...}
  "nat" -> "ant"  =>  {"aet": [...], "ant": ["tan", "nat"]}
  "bat" -> "abt"  =>  {"aet": [...], "ant": [...], "abt": ["bat"]}

  Result: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

Counter arithmetic:
  c1 = Counter("aab")   -> {a:2, b:1}
  c2 = Counter("ab")    -> {a:1, b:1}
  c1 - c2               -> {a:1}       (subtract, keep positives)
  c1 + c2               -> {a:3, b:2}
  c1.most_common(1)     -> [("a", 2)]`,
          language: 'text'
        },
        // D
        {
          heading: 'Python Implementation',
          example: {
            title: 'Hash Maps & Sets in Python',
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
        key = "".join(sorted(word))   # all anagrams share this key
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
    prefix_counts[0] = 1   # empty prefix has sum 0

    for num in nums:
        prefix_sum += num
        # How many previous prefixes equal prefix_sum - k?
        count += prefix_counts[prefix_sum - k]
        prefix_counts[prefix_sum] += 1
    return count

# ── LRU Cache using OrderedDict — O(1) get and put ────────────────
class LRUCache:
    def __init__(self, capacity: int):
        self.cap   = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)   # mark as recently used
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)   # evict least recently used

# ── Demo ──────────────────────────────────────────────────────────
word_frequency("the quick brown fox the fox")
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
print(two_sum([2, 7, 11, 15], 9))
print("Subarrays with sum 2:", subarray_sum([1, 1, 1], 2))

lru = LRUCache(2)
lru.put(1, 10)
lru.put(2, 20)
print(lru.get(1))       # returns 10, marks key 1 as recently used
lru.put(3, 30)          # evicts key 2 (least recently used)
print(lru.get(2))       # returns -1 (evicted)`,
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
        // E
        {
          heading: 'Java Implementation',
          example: {
            title: 'Hash Maps & Sets in Java',
            code: `import java.util.*;

public class HashMapsDemo {

    // ── Word frequency — O(n) ────────────────────────────────────
    static Map<String, Integer> wordFrequency(String text) {
        Map<String, Integer> freq = new HashMap<>();
        for (String word : text.toLowerCase().split("\\s+")) {
            freq.merge(word, 1, Integer::sum);
            // Equivalent to: freq.put(w, freq.getOrDefault(w, 0) + 1)
        }
        return freq;
    }

    // ── Group Anagrams — O(n * k log k) ──────────────────────────
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

    // ── Two Sum — O(n) ───────────────────────────────────────────
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

    // ── Subarray sum equals k — O(n) prefix sum ───────────────────
    static int subarraySum(int[] nums, int k) {
        int count = 0, prefixSum = 0;
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);   // base case: empty prefix
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
        // F
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 (Frequency Counter):</strong> Initialize an empty dict or Counter. Iterate through the input once. For each element, increment its count by 1. defaultdict(int) handles the missing-key case automatically with a default of 0.',
            '<strong>Step 2 (Group Anagrams — canonical key):</strong> For each word, compute a form that all anagrams share. Sorting characters is the simplest: "eat", "tea", and "ate" all sort to "aet". Use this as the hash map key.',
            '<strong>Step 3 (Group Anagrams — build groups):</strong> Append the original word to groups[sorted_key]. In Java, computeIfAbsent(key, k -> new ArrayList<>()) elegantly handles both the "key missing" and "key exists" cases in one line.',
            '<strong>Step 4 (Prefix Sum Map — subarray sum):</strong> Maintain a running prefix_sum. At each index, check if (prefix_sum - k) has been seen before — if yes, there are that many subarrays ending at the current index with sum exactly k.',
            '<strong>Step 5 (Prefix Sum Map — base case):</strong> Initialize prefixCounts[0] = 1. This handles subarrays that start at index 0: if prefix_sum == k at index i, then prefix_sum - k == 0 is in the map with count 1.',
            '<strong>Step 6 (LRU Cache — get):</strong> If the key is not in the cache, return -1. Otherwise, move the entry to the end of the OrderedDict (marking it most recently used) and return its value.',
            '<strong>Step 7 (LRU Cache — put):</strong> If the key exists, move it to the end. Set cache[key] = value. If the cache exceeds capacity, remove the first entry (popitem(last=False) in Python, or the eldest in LinkedHashMap in Java) — this is the least recently used entry.'
          ]
        },
        // G
        {
          heading: 'Time & Space Complexity',
          text: 'Comparison of Python and Java map types for choosing the right tool in interviews:',
          table: {
            headers: ['Map Type', 'Key Order', 'Get / Put / Delete avg', 'Worst Case', 'Best Use Case'],
            rows: [
              ['Python dict', 'Insertion order (3.7+)', 'O(1)', 'O(n) hash collision', 'General key-value mapping'],
              ['Python Counter', 'Insertion order', 'O(1)', 'O(n)', 'Frequency counting, most_common()'],
              ['Python defaultdict', 'Insertion order', 'O(1)', 'O(n)', 'Grouping, adjacency lists'],
              ['Python set', 'No order', 'O(1)', 'O(n)', 'Membership test, deduplication'],
              ['Java HashMap', 'No order', 'O(1)', 'O(log n) Java 8+ tree bins', 'General key-value mapping'],
              ['Java TreeMap', 'Sorted by key', 'O(log n)', 'O(log n)', 'Range queries, sorted iteration'],
              ['Java LinkedHashMap', 'Insertion or access order', 'O(1)', 'O(n)', 'LRU Cache, ordered output'],
              ['Java HashSet', 'No order', 'O(1)', 'O(log n) Java 8+', 'Membership test, deduplication']
            ]
          }
        },
        // H
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mistake: Using a mutable object (list or array) as a dict or HashMap key.</strong> Mutable objects are unhashable in Python (TypeError) and use identity-based hashing in Java — two logically equal lists will not match as keys — <em>Fix:</em> Convert lists to tuples in Python or sort and join to a String in Java before using as a key.',
            '<strong>Mistake: Forgetting that Java HashMap allows one null key.</strong> map.get(null) is valid and can return an unexpected value if null was stored earlier — <em>Fix:</em> Be explicit in your intent; avoid null keys in application logic and use getOrDefault to handle absence.',
            '<strong>Mistake: Not using getOrDefault or defaultdict.</strong> Writing if key not in d: d[key] = 0; d[key] += 1 is verbose and error-prone in interviews under time pressure — <em>Fix:</em> Use defaultdict(int) in Python or map.getOrDefault(key, 0) / map.merge(key, 1, Integer::sum) in Java.',
            '<strong>Mistake: Assuming hash map is always O(1).</strong> Under adversarial inputs all keys can collide, degrading to O(n) per operation — <em>Fix:</em> Mention this caveat in interviews when discussing worst-case complexity; Java 8+ mitigates this with tree bins after 8 collisions per bucket.'
          ],
          code: `# WRONG: Using a list as a dict key — unhashable type
def group_by_freq_wrong(words):
    groups = {}
    for word in words:
        key = sorted(word)       # returns a list — not hashable!
        groups[key].append(word) # TypeError: unhashable type 'list'

# CORRECT: Convert to tuple (hashable) or join to string
def group_by_freq_correct(words):
    groups = {}
    for word in words:
        key = tuple(sorted(word))    # tuple is hashable
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())

# WRONG: Manual existence check — verbose and forgettable
freq = {}
for ch in "hello":
    if ch not in freq:
        freq[ch] = 0
    freq[ch] += 1

# CORRECT: defaultdict(int) auto-initializes missing keys to 0
from collections import defaultdict
freq = defaultdict(int)
for ch in "hello":
    freq[ch] += 1   # no KeyError, no boilerplate check
print(dict(freq))   # {'h': 1, 'e': 1, 'l': 2, 'o': 1}`,
          language: 'python'
        },
        // I
        {
          heading: 'Real-World Applications',
          text: 'Hash maps are the foundational data structure of modern software — from database engines to neural network training pipelines:',
          list: [
            '<strong>Database hash indexes:</strong> Hash indexes in PostgreSQL and MySQL map column values to row pointers for O(1) equality lookups — the engine behind WHERE id = 42 on indexed columns.',
            '<strong>Distributed caching (Redis / Memcached):</strong> Both are essentially distributed hash maps with expiration policies. Every cache get and set is a hash lookup. Redis adds sorted sets (ZSet = hash map + skip list) for leaderboards.',
            '<strong>Language runtime internals:</strong> Python\'s attribute lookup (object.__dict__), Java\'s class constant pool, and JavaScript\'s object property access are all hash map operations under the hood.',
            '<strong>NLP tokenization (BPE):</strong> Byte-Pair Encoding stores merge rules in a hash map for O(1) lookup during encoding. Hugging Face tokenizers process millions of tokens per second using this approach.',
            '<strong>Approximate nearest neighbor search:</strong> Locality-Sensitive Hashing (LSH) uses specially designed hash functions to bucket similar vectors — enabling approximate nearest-neighbor search in O(1) per query instead of O(n) exhaustive scan.',
            '<strong>Deduplication in data pipelines:</strong> Apache Spark and Flink use hash-based groupBy and distinct operations to deduplicate terabytes of streaming data — hash partitioning assigns records to workers by key hash for parallel processing.'
          ]
        },
        // J
        {
          heading: 'Interview Tips',
          list: [
            'The single most powerful interview heuristic: "I see a nested loop — can I replace the inner O(n) search with an O(1) hash map lookup?" This alone solves Two Sum, Subarray Sum Equals K, Longest Consecutive Sequence, and dozens more.',
            'Use Counter for any problem involving character or element frequencies — it is faster to write and clearer to read than a manual dict, and most_common() saves even more time.',
            'For grouping problems (anagrams, equal frequency groups), find a canonical key that all members share. Sorted string, frequency tuple, and prime product are common canonical forms.',
            'Always explicitly state the space trade-off: "I am using O(n) extra space for the hash map to achieve O(n) time instead of O(n²) time with O(1) space." Interviewers reward explicit trade-off reasoning.',
            'For Java, know computeIfAbsent() — it is far cleaner than the three-line get/null-check/put pattern for building grouped structures, and it signals modern Java fluency.',
            'Hash collisions are a valid worst-case concern. Acknowledge that O(1) is average case and O(n) is worst case. Java 8+ mitigates this with tree bins (O(log n) worst case) after 8 collisions per bucket.',
            'Sets are simplified hash maps that store only keys. Reach for a set when you only need membership testing — "have I seen this element before?" — rather than key-value storage.'
          ]
        },
        // K
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Given an array of integers, find the length of the longest consecutive sequence in O(n) time without sorting.\nAns: Add all numbers to a hash set. For each number n where n-1 is NOT in the set (n is a sequence start), count n+1, n+2, ... until the next number is not in the set. Track the running maximum. Each number is visited at most twice total, so the overall time is O(n).',
            'Q2: Determine if two strings are anagrams of each other without sorting them. What is the time and space complexity?\nAns: Build a frequency counter for string s (increment counts) then process string t (decrement counts). If any count goes negative during t, or if any count is non-zero at the end, they are not anagrams. O(n) time; O(1) space because the counter holds at most 26 entries (fixed alphabet) — it does not grow with n.',
            'Q3 (Hard): Given an integer array and a target k, count the number of contiguous subarrays whose sum equals k. Achieve O(n) time.\nAns: Use prefix sums with a hash map. Maintain a running prefix_sum. At each index, the number of subarrays ending here with sum k equals the number of times (prefix_sum - k) has appeared previously — look it up in the map. Store prefix sum frequencies in a map initialized with {0: 1} (base case for subarrays starting at index 0). O(n) time, O(n) space.'
          ]
        }
      ]
    }
  }
};
