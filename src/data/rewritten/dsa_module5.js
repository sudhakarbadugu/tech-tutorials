// DSA Module 5 — enhanced interview-ready content

export const dsaModule5Structure = {
  module5: {
    title: 'Module 5: Practical DS in Python/Java',
    topics: [
      { id: 'python-stdlib', title: 'Python Standard Library' },
      { id: 'java-collections', title: 'Java Collections Framework' },
      { id: 'interview-patterns', title: 'Top Interview Patterns' },
      { id: 'ds-ml-pipelines', title: 'Data Structures in ML' },
      { id: 'complexity-cheat-sheet', title: 'Final Complexity Review' }
    ]
  }
};

export const dsaModule5Content = {
  module5: {
    'python-stdlib': {
      title: 'Python Standard Library',
      subtitle: 'collections & heapq — your interview superpowers',
      sections: [
        {
          heading: 'Core Concepts: Python Stdlib for DSA',
          text: 'Python\'s `collections` and `heapq` modules provide battle-tested implementations that replace hand-rolled data structures in interviews. Knowing when to reach for `deque`, `Counter`, `defaultdict`, or `heapq` can turn an O(n²) brute force into an O(n) or O(n log k) solution — and signals fluency to interviewers.',
          list: [
            '<strong>deque:</strong> Double-ended queue — O(1) append/pop from both ends. Use for BFS, sliding window max, monotonic queue.',
            '<strong>Counter:</strong> Dict subclass for frequency counting — O(1) lookup/update. Use for anagrams, top-k frequency, character counts.',
            '<strong>defaultdict:</strong> Auto-initializes missing keys — O(1) grouping. Use for adjacency lists, graph building, bucketing.',
            '<strong>heapq:</strong> Min-heap on a list — O(log n) push/pop. Use for top-k, merge k sorted, Dijkstra, scheduling.',
            '<strong>OrderedDict:</strong> Dict with insertion order (Python 3.7+ dicts are ordered anyway) — LRU cache patterns.',
            '<strong>namedtuple / dataclass:</strong> Lightweight structs for graph nodes, intervals, and priority queue entries.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>deque vs list:</strong> Python lists are dynamic arrays — `append`/`pop` at end are O(1) amortized, but `pop(0)` or `insert(0, x)` is O(n) because every element shifts. `collections.deque` uses a doubly-linked block structure — both ends are O(1). For BFS, always use `deque`, never `list.pop(0)`.</p>',
            '<p><strong>Counter arithmetic:</strong> Counters support `+`, `-`, `&` (intersection), `|` (union). `most_common(k)` returns the k highest-frequency items in O(n log k) time — faster than sorting the entire dict when k is small.</p>',
            '<p><strong>defaultdict factory:</strong> `defaultdict(list)` auto-creates `[]` for missing keys — perfect for `graph[u].append(v)`. `defaultdict(int)` starts at 0 — perfect for counting without `if key in dict` checks. `defaultdict(set)` for grouping unique values per key.</p>',
            '<p><strong>heapq is a min-heap:</strong> `heapq[0]` is always the smallest. For a max-heap, negate values: `heapq.heappush(heap, -val)`. `heapq.heapify(arr)` builds a heap in O(n) — use this instead of pushing elements one by one when you have all data upfront.</p>'
          ],
          note: 'Interview mantra: BFS → deque. Frequency → Counter. Grouping/graph → defaultdict. Top-k / scheduling → heapq.'
        },
        {
          heading: 'Visual Diagram — deque vs list & heap operations',
          code: `deque (doubly-linked blocks) — O(1) both ends:

  HEAD ← [block1] ↔ [block2] ↔ [block3] → TAIL
         appendleft O(1)    append O(1)
         popleft  O(1)    pop      O(1)

list (contiguous array) — O(n) front operations:

  [0][1][2][3][4]  pop(0) → shift ALL elements left → O(n)

Min-heap (heapq) — array representation:

         1
       /   \\
      3     2
     / \\   /
    7   5 4

  heap[0] = minimum (1)
  heappush: append + sift-up   O(log n)
  heappop:  swap root/last + sift-down O(log n)
  heapify:  bottom-up build     O(n)`,
          language: 'text'
        },
        {
          heading: 'deque — Interview Patterns',
          example: {
            title: 'BFS, Sliding Window Maximum & Monotonic Deque',
            code: `from collections import deque
from typing import List

# ── 1. BFS shortest path in unweighted graph ──
def bfs_shortest_path(graph: dict, start: int, target: int) -> int:
    if start == target:
        return 0
    queue = deque([(start, 0)])   # NEVER use list.pop(0) — O(n) per pop
    visited = {start}
    while queue:
        node, dist = queue.popleft()
        for neighbor in graph.get(node, []):
            if neighbor == target:
                return dist + 1
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))
    return -1

# ── 2. Sliding Window Maximum (LC 239) — monotonic deque ──
def max_sliding_window(nums: List[int], k: int) -> List[int]:
    dq = deque()   # stores indices; front = max of window
    result = []
    for i, num in enumerate(nums):
        # remove indices outside window
        while dq and dq[0] <= i - k:
            dq.popleft()
        # maintain decreasing order — smaller elements useless
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result

# ── 3. Rotting Oranges (LC 994) — multi-source BFS ──
def oranges_rotting(grid: List[List[int]]) -> int:
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c, 0))
            elif grid[r][c] == 1:
                fresh += 1
    if fresh == 0:
        return 0
    directions = [(0,1),(0,-1),(1,0),(-1,0)]
    while queue:
        r, c, mins = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                if fresh == 0:
                    return mins + 1
                queue.append((nr, nc, mins + 1))
    return -1

# Demo
graph = {0: [1, 2], 1: [3], 2: [3], 3: []}
print(bfs_shortest_path(graph, 0, 3))           # 2
print(max_sliding_window([1,3,-1,-3,5,3,6,7], 3))
print(oranges_rotting([[2,1,1],[1,1,0],[0,1,1]]))  # 4`,
            output: `2
[3, 3, 5, 5, 6, 7]
4`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Counter & defaultdict — Interview Patterns',
          example: {
            title: 'Frequency Analysis, Anagram Grouping & Graph Building',
            code: `from collections import Counter, defaultdict
from typing import List

# ── 1. Valid Anagram (LC 242) ──
def is_anagram(s: str, t: str) -> bool:
    return Counter(s) == Counter(t)

# ── 2. Group Anagrams (LC 49) ──
def group_anagrams(strs: List[str]) -> List[List[str]]:
    groups = defaultdict(list)
    for word in strs:
        key = tuple(sorted(word))   # or tuple(Counter(word).items())
        groups[key].append(word)
    return list(groups.values())

# ── 3. Top K Frequent Elements (LC 347) — Counter + heap ──
import heapq
def top_k_frequent(nums: List[int], k: int) -> List[int]:
    counts = Counter(nums)
    return [num for num, _ in counts.most_common(k)]

# ── 4. Build adjacency list with defaultdict ──
def build_graph(edges: List[List[int]], directed: bool = False) -> dict:
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        if not directed:
            graph[v].append(u)
    return graph

# ── 5. Subarray sum equals K (LC 560) — prefix sum + Counter ──
def subarray_sum(nums: List[int], k: int) -> int:
    prefix_count = Counter({0: 1})
    total = count = 0
    for num in nums:
        total += num
        count += prefix_count[total - k]
        prefix_count[total] += 1
    return count

# Demo
print(is_anagram("anagram", "nagaram"))          # True
print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
print(top_k_frequent([1,1,1,2,2,3], 2))         # [1, 2]
print(dict(build_graph([[0,1],[1,2],[2,3]])))
print(subarray_sum([1,1,1], 2))                 # 2`,
            output: `True
[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
[1, 2]
{0: [1], 1: [0, 2], 2: [1, 3], 3: [2]}
2`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'heapq — Priority Queue Patterns',
          example: {
            title: 'Top K, Merge K Sorted & Dijkstra',
            code: `import heapq
from typing import List, Optional

# ── 1. Kth Largest Element (LC 215) — min-heap of size k ──
def find_kth_largest(nums: List[int], k: int) -> int:
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

# ── 2. Merge K Sorted Lists (LC 23) ──
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    dummy = ListNode(0)
    curr = dummy
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next

# ── 3. Dijkstra shortest path ──
def dijkstra(graph: dict, start: int) -> dict:
    dist = {start: 0}
    heap = [(0, start)]   # (distance, node)
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist.get(u, float('inf')):
            continue
        for v, weight in graph.get(u, []):
            new_dist = d + weight
            if new_dist < dist.get(v, float('inf')):
                dist[v] = new_dist
                heapq.heappush(heap, (new_dist, v))
    return dist

# ── 4. Max-heap trick — negate values ──
def k_smallest(nums: List[int], k: int) -> List[int]:
    max_heap = []
    for num in nums:
        heapq.heappush(max_heap, -num)
        if len(max_heap) > k:
            heapq.heappop(max_heap)
    return sorted([-x for x in max_heap])

# Demo
print(find_kth_largest([3,2,1,5,6,4], 2))        # 5
print(k_smallest([3,1,4,1,5,9,2,6], 3))         # [1, 1, 2]
print(dijkstra({0: [(1,4),(2,1)], 1: [(3,1)], 2: [(1,2),(3,5)], 3: []}, 0))`,
            output: `5
[1, 1, 2]
{0: 0, 2: 1, 1: 3, 3: 6}`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Comparison — Python vs Java Equivalents',
          example: {
            title: 'Side-by-Side Mapping for Interviews',
            code: `/*
Python stdlib          →  Java equivalent
─────────────────────────────────────────────
collections.deque      →  ArrayDeque (O(1) both ends)
collections.Counter    →  HashMap<K,Integer> + getOrDefault
collections.defaultdict→  HashMap + computeIfAbsent
heapq (min-heap)       →  PriorityQueue (min-heap default)
list as stack          →  ArrayDeque or Stack (prefer ArrayDeque)
set()                  →  HashSet
dict (ordered 3.7+)    →  LinkedHashMap (if order matters)
*/

// Java ArrayDeque — BFS (never LinkedList for queue)
import java.util.*;

Deque<Integer> queue = new ArrayDeque<>();
queue.offer(0);          // enqueue
int node = queue.poll(); // dequeue — O(1)

// HashMap frequency count (Counter equivalent)
Map<String, Integer> freq = new HashMap<>();
for (String word : words) {
    freq.put(word, freq.getOrDefault(word, 0) + 1);
}

// PriorityQueue — min-heap (top-k pattern)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5);
int min = minHeap.poll();

// Max-heap: reverse comparator
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Collections.reverseOrder());`,
            output: `Use ArrayDeque not LinkedList for queues in Java interviews.
PriorityQueue is the Java heapq equivalent.`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Identify the pattern:</strong> Need both-end O(1) ops? → deque. Counting? → Counter. Grouping? → defaultdict. K-th / scheduling? → heapq.',
            '<strong>Step 2 — BFS template:</strong> `queue = deque([start])`, `visited = {start}`, while queue: `node = queue.popleft()`, process neighbors, `queue.append(neighbor)`.',
            '<strong>Step 3 — Monotonic deque:</strong> For sliding window max, maintain decreasing indices in deque. Pop from left when out of window; pop from right while smaller than new element.',
            '<strong>Step 4 — Counter prefix sum:</strong> For subarray sum = k, track `prefix_count[total - k]` — how many prior prefixes sum to the complement.',
            '<strong>Step 5 — Top-k with heap:</strong> Maintain heap of size k. For k-th largest, use min-heap — when size > k, pop smallest. Result is heap[0].',
            '<strong>Step 6 — Max-heap in Python:</strong> Negate on push/pop: `heappush(heap, -val)`, `-heappop(heap)`.',
            '<strong>Step 7 — heapify vs heappush:</strong> If you have all elements upfront, `heapq.heapify(arr)` is O(n) vs n × O(log n) for individual pushes.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Structure / Op', 'Time', 'Space', 'Interview use case'],
            rows: [
              ['deque append/pop either end', 'O(1)', 'O(n)', 'BFS, monotonic queue'],
              ['deque[i] random access', 'O(n)', 'O(n)', 'Avoid — use for ends only'],
              ['Counter update/lookup', 'O(1) avg', 'O(k) unique keys', 'Frequency, anagrams'],
              ['Counter.most_common(k)', 'O(n log k)', 'O(k)', 'Top-k frequent'],
              ['defaultdict access', 'O(1) avg', 'O(n)', 'Graph adjacency, grouping'],
              ['heapq push/pop', 'O(log n)', 'O(n)', 'Top-k, Dijkstra, scheduling'],
              ['heapq.heapify', 'O(n)', 'O(1) extra', 'Build heap from array'],
              ['heapq nsmallest(k, arr)', 'O(n log k)', 'O(k)', 'Shortcut for top-k']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>list.pop(0) for BFS:</strong> O(n) per pop → O(n²) total BFS — <em>Fix:</em> use `collections.deque` with `popleft()`.',
            '<strong>Forgetting heapq is min-heap:</strong> Pushing all elements expecting largest — <em>Fix:</em> negate values or use `heapq.nlargest(k, arr)`.',
            '<strong>Tuple comparison in heap:</strong> `(val, node)` breaks when vals tie and node is not comparable — <em>Fix:</em> add unique index: `(val, i, node)`.',
            '<strong>Counter with mutable keys:</strong> Lists are unhashable as Counter keys — <em>Fix:</em> use `tuple(lst)` or `frozenset`.',
            '<strong>defaultdict infinite loop:</strong> Accessing missing key creates it — <em>Fix:</em> use `if key in d` when you don\'t want auto-creation.',
            '<strong>Not using most_common:</strong> Sorting entire Counter when only top-3 needed — <em>Fix:</em> `counts.most_common(3)`.'
          ],
          code: `# WRONG — O(n) per BFS pop
queue = [start]
node = queue.pop(0)

# CORRECT — O(1) per pop
from collections import deque
queue = deque([start])
node = queue.popleft()

# WRONG — max-heap attempt without negation
heapq.heappush(heap, val)  # this is min-heap

# CORRECT — max-heap via negation
heapq.heappush(heap, -val)
largest = -heapq.heappop(heap)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Log analysis:</strong> Counter for IP frequency; heapq for top-N error codes in streaming logs.',
            '<strong>Recommendation systems:</strong> Top-k similar items via heap; defaultdict for user→item grouping.',
            '<strong>Network routing:</strong> Dijkstra with heapq for shortest path in ISP backbone graphs.',
            '<strong>Task schedulers:</strong> Priority queues (heapq) for OS process scheduling and job queues.',
            '<strong>NLP pipelines:</strong> Counter for word frequencies; deque for sliding token windows in streaming text.',
            '<strong>Game servers:</strong> BFS with deque for matchmaking proximity; heap for leaderboard top-k.'
          ]
        },
        {
          heading: 'Interview Tips & Practice Problems',
          list: [
            'Say the module name out loud: "I\'ll use a Counter for frequency" — shows Python fluency.',
            'For BFS on grids, combine `deque` + `set` of visited coordinates — template is identical to graph BFS.',
            'Monotonic deque (LC 239) is a hard sliding-window variant — know it for senior roles.',
            'When interviewer says "optimize to O(n log k)", reach for heapq before sorting the full array.',
            `Q1 (Easy): Count character frequencies in "leetcode". Which char appears most?
Hint: Counter(s); most_common(1).
Ans: Counter({'e':3,'l':1,'t':1,'c':1,'o':1,'d':1}). 'e' appears 3 times.`,
            `Q2 (Medium): Merge 3 sorted arrays [1,4,7], [2,5,8], [3,6,9] using heapq.
Hint: Push (val, array_index, element_index) for each array head; pop min, push next from same array.
Ans: [1,2,3,4,5,6,7,8,9]. Time O(n log k), space O(k).`,
            `Q3 (Hard): Sliding window maximum for nums=[1,3,-1,-3,5,3,6,7], k=3.
Hint: Monotonic deque storing indices in decreasing value order.
Ans: [3,3,5,5,6,7]. Each element pushed/popped at most once → O(n).`
          ]
        }
      ]
    },
    'java-collections': {
      title: 'Java Collections Framework',
      subtitle: 'ArrayList, HashMap, TreeMap & PriorityQueue mastery',
      sections: [
        {
          heading: 'Core Concepts: Java Collections Framework',
          text: 'The Java Collections Framework (JCF) provides a unified hierarchy of interfaces and implementations for storing and manipulating groups of objects. In interviews, the critical decision is picking the right implementation — ArrayList vs LinkedList, HashMap vs TreeMap, HashSet vs TreeSet — based on access patterns and ordering requirements.',
          list: [
            '<strong>List:</strong> Ordered, allows duplicates. ArrayList (array-backed) vs LinkedList (doubly-linked nodes).',
            '<strong>Set:</strong> No duplicates. HashSet (O(1) avg) vs TreeSet (O(log n), sorted).',
            '<strong>Map:</strong> Key-value pairs. HashMap (O(1) avg) vs TreeMap (O(log n), sorted keys).',
            '<strong>Queue/Deque:</strong> ArrayDeque (preferred) for BFS — O(1) both ends. Never use Stack class.',
            '<strong>PriorityQueue:</strong> Min-heap by default — O(log n) insert/extract. Custom Comparator for max-heap.',
            '<strong>Iteration order:</strong> HashMap = undefined; LinkedHashMap = insertion order; TreeMap = sorted key order.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>ArrayList vs LinkedList:</strong> ArrayList stores elements in a contiguous resizable array — random access `get(i)` is O(1), append is O(1) amortized, but insert/delete in the middle is O(n) due to shifting. LinkedList stores nodes with prev/next pointers — insert/delete at a <em>known node reference</em> is O(1), but `get(i)` is O(n) because you must traverse. In 99% of interview scenarios, <strong>ArrayList wins</strong> — cache locality and O(1) indexing outweigh LinkedList\'s theoretical insert advantage.</p>',
            '<p><strong>HashMap vs TreeMap:</strong> HashMap uses a hash table — O(1) average for get/put/remove, but keys are unordered and hash collisions degrade to O(n) worst case. TreeMap uses a Red-Black tree — O(log n) for all operations, but keys are always sorted. Use HashMap for frequency counting and lookups; TreeMap when you need floor/ceiling key, range queries, or sorted iteration.</p>',
            '<p><strong>PriorityQueue:</strong> Internally a binary heap. `offer()` and `poll()` are O(log n); `peek()` is O(1). Default is min-heap. For max-heap: `new PriorityQueue<>(Collections.reverseOrder())` or `Comparator.comparingInt(a -> -a)`. Not thread-safe — mention `PriorityBlockingQueue` for concurrent scenarios.</p>'
          ],
          note: 'Java interview default: ArrayList for lists, HashMap for maps, ArrayDeque for queues, PriorityQueue for heaps. Only reach for LinkedList/TreeMap when you have a specific reason.'
        },
        {
          heading: 'Visual Diagram — ArrayList vs LinkedList Internals',
          code: `ArrayList (resizable array):

  index:  0    1    2    3    4    5   (capacity may be larger)
        [10] [20] [30] [40] [50] [  ]
         ↑ get(2) = O(1) direct index
         insert at index 2 → shift 30,40,50 right → O(n)

LinkedList (doubly-linked nodes):

  HEAD ↔ [10] ↔ [20] ↔ [30] ↔ [40] ↔ TAIL
          get(2) → traverse 2 nodes → O(n)
          insert after known node → O(1) pointer swap

HashMap vs TreeMap:

  HashMap:  key --hash--> bucket --> linked list / tree node
            get/put O(1) avg, unordered

  TreeMap:  Red-Black Tree on keys
            get/put O(log n), keys always sorted
            floorKey(7) → largest key ≤ 7`,
          language: 'text'
        },
        {
          heading: 'ArrayList vs LinkedList — Benchmark Patterns',
          example: {
            title: 'When Each Wins in Interview Code',
            code: `import java.util.*;

public class ListComparison {

    // ArrayList — O(1) random access, O(1) amortized append
    static void arrayListDemo() {
        List<Integer> list = new ArrayList<>();
        list.add(10);           // append end — O(1) amortized
        list.add(0, 5);         // insert front — O(n) shift!
        int val = list.get(2);  // random access — O(1)
        list.remove(list.size() - 1);  // pop end — O(1)
        System.out.println("ArrayList: " + list + ", get(2)=" + val);
    }

    // LinkedList — O(n) access, O(1) insert at Iterator position
    static void linkedListDemo() {
        LinkedList<Integer> list = new LinkedList<>();
        list.addLast(10);
        list.addFirst(5);       // O(1) — has head pointer
        int val = list.get(2);  // O(n) — must traverse!
        list.removeFirst();     // O(1)
        System.out.println("LinkedList: " + list);
    }

    // Interview pattern: two-pointer on ArrayList (NOT LinkedList)
    static List<Integer> removeDuplicatesSorted(List<Integer> nums) {
        if (nums.isEmpty()) return nums;
        int write = 1;
        for (int read = 1; read < nums.size(); read++) {
            if (!nums.get(read).equals(nums.get(read - 1))) {
                nums.set(write++, nums.get(read));
            }
        }
        return nums.subList(0, write);
    }

    // LRU Cache needs LinkedHashMap (ordered HashMap), not LinkedList alone
    // ArrayDeque for BFS — faster than LinkedList as queue
    static int bfsShortestPath(Map<Integer, List<Integer>> graph, int start, int target) {
        Queue<Integer> queue = new ArrayDeque<>();
        Set<Integer> visited = new HashSet<>();
        Map<Integer, Integer> dist = new HashMap<>();
        queue.offer(start);
        visited.add(start);
        dist.put(start, 0);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            if (node == target) return dist.get(node);
            for (int neighbor : graph.getOrDefault(node, List.of())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    dist.put(neighbor, dist.get(node) + 1);
                    queue.offer(neighbor);
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        arrayListDemo();
        linkedListDemo();
        System.out.println(removeDuplicatesSorted(
            new ArrayList<>(List.of(1, 1, 2, 2, 3))));  // [1, 2, 3]
    }
}`,
            output: `ArrayList: [5, 10], get(2)=10
LinkedList: [10]
[1, 2, 3]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'HashMap vs TreeMap — Interview Patterns',
          example: {
            title: 'Frequency Count, Two Sum & Sorted Key Operations',
            code: `import java.util.*;

public class MapComparison {

    // HashMap — O(1) avg: Two Sum (LC 1)
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

    // HashMap — frequency count (Counter equivalent)
    static Map<Character, Integer> charFrequency(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        return freq;
    }

    // TreeMap — sorted keys, floor/ceiling operations
    static void treeMapDemo() {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(3, "three");
        map.put(1, "one");
        map.put(7, "seven");
        System.out.println(map);                    // {1=one, 3=three, 7=seven}
        System.out.println(map.floorKey(5));        // 3 (largest key ≤ 5)
        System.out.println(map.ceilingKey(5));      // 7 (smallest key ≥ 5)
        System.out.println(map.subMap(1, 7));       // {1=one, 3=three}
    }

    // TreeMap — My Calendar I (LC 729) booking conflicts
    static class MyCalendar {
        private final TreeMap<Integer, Integer> bookings = new TreeMap<>();

        public boolean book(int start, int end) {
            Map.Entry<Integer, Integer> floor = bookings.floorEntry(start);
            if (floor != null && floor.getValue() > start) return false;
            Map.Entry<Integer, Integer> ceiling = bookings.ceilingEntry(start);
            if (ceiling != null && ceiling.getKey() < end) return false;
            bookings.put(start, end);
            return true;
        }
    }

    // LinkedHashMap — LRU Cache (insertion-ordered)
    static class LRUCache extends LinkedHashMap<Integer, Integer> {
        private final int capacity;
        LRUCache(int cap) {
            super(cap, 0.75f, true);  // accessOrder=true for LRU
            this.capacity = cap;
        }
        @Override
        protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
            return size() > capacity;
        }
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(charFrequency("leetcode"));
        treeMapDemo();
        MyCalendar cal = new MyCalendar();
        System.out.println(cal.book(10, 20));  // true
        System.out.println(cal.book(15, 25));  // false — overlap
    }
}`,
            output: `[0, 1]
{e=3, l=1, t=1, c=1, o=1, d=1}
{1=one, 3=three, 7=seven}
3
7
{1=one, 3=three}
true
false`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'PriorityQueue — Top K & Scheduling',
          example: {
            title: 'Kth Largest, Merge K Lists & Task Scheduler',
            code: `import java.util.*;

public class PriorityQueueDemo {

    // Kth Largest Element (LC 215) — min-heap of size k
    static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.peek();
    }

    // Top K Frequent Words (LC 692) — custom comparator
    static List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> freq = new HashMap<>();
        for (String w : words) freq.put(w, freq.getOrDefault(w, 0) + 1);

        PriorityQueue<String> heap = new PriorityQueue<>(
            (a, b) -> freq.get(a).equals(freq.get(b))
                ? b.compareTo(a)   // same freq → alphabetical order
                : freq.get(a) - freq.get(b)  // min-heap on freq
        );
        for (String w : freq.keySet()) {
            heap.offer(w);
            if (heap.size() > k) heap.poll();
        }
        List<String> result = new ArrayList<>();
        while (!heap.isEmpty()) result.add(0, heap.poll());
        return result;
    }

    // Task Scheduler (LC 621) — max-heap on task frequencies
    static int leastInterval(char[] tasks, int n) {
        int[] count = new int[26];
        for (char t : tasks) count[t - 'A']++;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int c : count) if (c > 0) maxHeap.offer(c);

        int time = 0;
        while (!maxHeap.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            for (int i = 0; i <= n; i++) {
                if (!maxHeap.isEmpty()) {
                    int cnt = maxHeap.poll() - 1;
                    if (cnt > 0) temp.add(cnt);
                }
                time++;
                if (maxHeap.isEmpty() && temp.isEmpty()) break;
            }
            for (int cnt : temp) maxHeap.offer(cnt);
        }
        return time;
    }

    // Dijkstra with PriorityQueue
    static Map<Integer, Integer> dijkstra(Map<Integer, List<int[]>> graph, int start) {
        Map<Integer, Integer> dist = new HashMap<>();
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.offer(new int[]{start, 0});
        dist.put(start, 0);
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int u = curr[0], d = curr[1];
            if (d > dist.getOrDefault(u, Integer.MAX_VALUE)) continue;
            for (int[] edge : graph.getOrDefault(u, List.of())) {
                int v = edge[0], w = edge[1];
                int newDist = d + w;
                if (newDist < dist.getOrDefault(v, Integer.MAX_VALUE)) {
                    dist.put(v, newDist);
                    pq.offer(new int[]{v, newDist});
                }
            }
        }
        return dist;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2));  // 5
        System.out.println(topKFrequent(
            new String[]{"i","love","leetcode","i","love","coding"}, 2));
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 2));  // 8
    }
}`,
            output: `5
[i, love]
8`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Python Implementation — Java Collections Mirror',
          example: {
            title: 'Equivalent Python Patterns for Cross-Language Interviews',
            code: `# Java HashMap two-sum → Python dict
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        if target - num in seen:
            return [seen[target - num], i]
        seen[num] = i
    return []

# Java TreeMap floor/ceiling → Python sortedcontainers or bisect
from bisect import bisect_left, bisect_right

class SortedKeyMap:
    """TreeMap-like operations using sorted list of keys."""
    def __init__(self):
        self._keys = []
        self._vals = {}

    def put(self, key, val):
        if key not in self._vals:
            idx = bisect_left(self._keys, key)
            self._keys.insert(idx, key)
        self._vals[key] = val

    def floor_key(self, key):
        idx = bisect_right(self._keys, key) - 1
        return self._keys[idx] if idx >= 0 else None

# Java PriorityQueue → Python heapq
import heapq

def kth_largest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

# Java ArrayDeque BFS → Python deque
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = {start}
    while queue:
        node = queue.popleft()
        for nb in graph.get(node, []):
            if nb not in visited:
                visited.add(nb)
                queue.append(nb)

print(two_sum([2, 7, 11, 15], 9))
print(kth_largest([3, 2, 1, 5, 6, 4], 2))`,
            output: `[0, 1]
5`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Pick List:</strong> Need random access or index-based iteration? → ArrayList. Only need queue ops at both ends? → ArrayDeque (not LinkedList).',
            '<strong>Step 2 — Pick Map:</strong> Need fast lookup only? → HashMap. Need sorted keys or floor/ceiling? → TreeMap. Need insertion/access order? → LinkedHashMap.',
            '<strong>Step 3 — Pick Set:</strong> Need uniqueness check only? → HashSet. Need sorted unique elements? → TreeSet.',
            '<strong>Step 4 — Top-k with PQ:</strong> Create min-heap, iterate elements, offer each, poll when size > k. Peek gives k-th largest.',
            '<strong>Step 5 — Custom comparator:</strong> For LC 692 (top k frequent words), tie-break by alphabetical order in the comparator lambda.',
            '<strong>Step 6 — HashMap getOrDefault:</strong> Always use `getOrDefault(key, 0) + 1` for counting — avoids NullPointerException.',
            '<strong>Step 7 — Never use Stack class:</strong> Deprecated; use `ArrayDeque` for stack operations (`push`/`pop`).'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Implementation', 'Access', 'Insert', 'Delete', 'Search', 'Ordering'],
            rows: [
              ['ArrayList', 'O(1)', 'O(1) end / O(n) mid', 'O(1) end / O(n) mid', 'O(n)', 'Insertion order'],
              ['LinkedList', 'O(n)', 'O(1) at node', 'O(1) at node', 'O(n)', 'Insertion order'],
              ['ArrayDeque', 'O(n)', 'O(1) both ends', 'O(1) both ends', 'O(n)', 'Insertion order'],
              ['HashMap', 'N/A', 'O(1) avg', 'O(1) avg', 'O(1) avg', 'Unordered'],
              ['TreeMap', 'N/A', 'O(log n)', 'O(log n)', 'O(log n)', 'Sorted keys'],
              ['HashSet', 'N/A', 'O(1) avg', 'O(1) avg', 'O(1) avg', 'Unordered'],
              ['TreeSet', 'N/A', 'O(log n)', 'O(log n)', 'O(log n)', 'Sorted'],
              ['PriorityQueue', 'peek O(1)', 'O(log n)', 'O(log n)', 'O(n)', 'Heap order']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Using LinkedList as default List:</strong> Slower random access, worse cache performance — <em>Fix:</em> default to ArrayList.',
            '<strong>Using LinkedList as Queue:</strong> ArrayDeque is faster — <em>Fix:</em> `Queue<Integer> q = new ArrayDeque<>()`.',
            '<strong>Modifying HashMap during iteration:</strong> ConcurrentModificationException — <em>Fix:</em> use iterator.remove() or collect keys first.',
            '<strong>Null keys in HashMap:</strong> One null key allowed, but TreeMap rejects null — <em>Fix:</em> know your map\'s null policy.',
            '<strong>PriorityQueue iteration order:</strong> Iterating PQ does NOT give sorted order — <em>Fix:</em> poll repeatedly for sorted extraction.',
            '<strong>Integer[] in HashSet comparison:</strong> Arrays.equals vs Set.contains confusion — <em>Fix:</em> convert to List or use proper hash.'
          ],
          code: `// WRONG — LinkedList as default
List<Integer> list = new LinkedList<>();

// CORRECT — ArrayList for general use
List<Integer> list = new ArrayList<>();

// WRONG — Stack class (legacy)
Stack<Integer> stack = new Stack<>();

// CORRECT — ArrayDeque
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
int top = stack.pop();`,
          language: 'java'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Spring Boot services:</strong> HashMap for in-memory caches; ConcurrentHashMap for thread-safe lookups.',
            '<strong>Database indexing analogy:</strong> HashMap = hash index (O(1)); TreeMap = B-tree index (O(log n), range queries).',
            '<strong>Event scheduling:</strong> PriorityQueue for job schedulers (Quartz, Kubernetes pod priority).',
            '<strong>LRU caches:</strong> LinkedHashMap or HashMap + doubly-linked list (Redis, Caffeine cache).',
            '<strong>Autocomplete:</strong> TreeMap/TreeSet for prefix range queries on sorted keys.',
            '<strong>Android development:</strong> ArrayList for RecyclerView adapters; HashMap for ViewHolder caching.'
          ]
        },
        {
          heading: 'Interview Tips & Practice Problems',
          list: [
            'When asked "which data structure?", state interface + implementation + why: "HashMap for O(1) complement lookup."',
            'Know LinkedHashMap access-order mode for LRU — constructor `(capacity, 0.75f, true)`.',
            'TreeMap\'s `floorEntry`/`ceilingEntry` solve calendar, meeting room, and range module problems.',
            'PriorityQueue with custom Comparator is tested at Amazon/Google for top-k with tie-breaking.',
            `Q1 (Easy): Remove duplicates from [1,1,2,2,3] preserving order. Which collection?
Hint: LinkedHashSet preserves insertion order; or two-pointer on ArrayList if sorted.
Ans: LinkedHashSet → [1,2,3]. Or ArrayList two-pointer if in-place required.`,
            `Q2 (Medium): Find k=2 most frequent words. Which Java structure?
Hint: HashMap for frequency + PriorityQueue size k with custom comparator.
Ans: HashMap<String,Integer> + PriorityQueue. Time O(n log k).`,
            `Q3 (Hard): Design a structure supporting insert, delete, getRandom all O(1).
Hint: HashMap for value→index + ArrayList for index→value (LC 380).
Ans: Insert/Delete Swap-and-pop in ArrayList; HashMap tracks indices.`
          ]
        }
      ]
    },
    'interview-patterns': {
      title: 'Top Interview Patterns',
      subtitle: 'The 7 patterns that solve 80% of medium problems',
      sections: [
        {
          heading: 'Core Concepts: Interview Pattern Recognition',
          text: 'Most coding interview problems reduce to a small set of reusable patterns. Recognizing the pattern within the first 5 minutes saves 20 minutes of brute-force exploration. The seven essential patterns — Sliding Window, Two Pointers, Fast/Slow Pointers, Merge Intervals, Top K (Heap), BFS/DFS on Grids, and DP — cover the majority of array, string, graph, and optimization problems at FAANG-level interviews.',
          list: [
            '<strong>Sliding Window:</strong> Contiguous subarray/substring with a constraint — expand right, shrink left. O(n).',
            '<strong>Two Pointers:</strong> Opposite ends or same direction on sorted arrays / linked lists. O(n).',
            '<strong>Fast/Slow Pointers:</strong> Cycle detection, middle node, palindrome linked list. O(n), O(1) space.',
            '<strong>Merge Intervals:</strong> Overlapping ranges — sort by start, merge or insert. O(n log n).',
            '<strong>Top K (Heap):</strong> K-th largest, k closest, k frequent — min-heap of size k. O(n log k).',
            '<strong>BFS/DFS on Grids:</strong> Islands, shortest path, flood fill — queue or stack + visited. O(m·n).',
            '<strong>DP Patterns:</strong> 1D (Fibonacci-style), 2D (grid path), knapsack, LCS — memo or tabulation.'
          ]
        },
        {
          heading: 'Concept Explanation — Pattern Decision Guide',
          content: [
            '<p><strong>Sliding window triggers:</strong> "longest/shortest substring/subarray", "at most k distinct", "sum equals k (contiguous)", "minimum window containing all characters". The window [left, right] expands by incrementing right; when the constraint is violated, increment left until valid again.</p>',
            '<p><strong>Two pointers triggers:</strong> "sorted array pair sum", "remove duplicates in-place", "container with most water", "3-sum". Opposite pointers move inward based on whether current sum is too small or too large.</p>',
            '<p><strong>Fast/slow triggers:</strong> "linked list cycle", "find middle node", "palindrome linked list", "happy number". Slow moves 1 step, fast moves 2 steps — if they meet, cycle exists.</p>',
            '<p><strong>DP triggers:</strong> "count ways", "minimum/maximum cost", "can you reach?", "longest increasing subsequence". Look for overlapping subproblems and optimal substructure. Start with brute recursion, add memo.</p>'
          ],
          note: 'Pattern recognition flowchart: contiguous subarray? → sliding window. Sorted pairs? → two pointers. Linked list cycle? → fast/slow. Overlapping ranges? → merge intervals. K-th element? → heap. Grid traversal? → BFS/DFS. Optimal substructure? → DP.'
        },
        {
          heading: 'Visual Diagram — Pattern Decision Tree',
          code: `Problem statement
       │
       ├─ Contiguous subarray/substring?
       │     └─ Sliding Window (expand right, shrink left)
       │
       ├─ Sorted array + pair/triplet sum?
       │     └─ Two Pointers (left/right converge)
       │
       ├─ Linked list + cycle/middle?
       │     └─ Fast/Slow Pointers (1x vs 2x speed)
       │
       ├─ Intervals / meetings / calendar?
       │     └─ Merge Intervals (sort by start)
       │
       ├─ K-th largest / top K / closest K?
       │     └─ Heap (min-heap size K)
       │
       ├─ 2D grid + connected cells / shortest path?
       │     └─ BFS (unweighted) or DFS (explore all)
       │
       └─ Count ways / min cost / optimal choice?
             └─ Dynamic Programming (1D / 2D / knapsack)

Sliding Window invariant:
  [left ... right] always satisfies constraint
  right++  → expand
  while invalid: left++  → shrink`,
          language: 'text'
        },
        {
          heading: 'Sliding Window — Template & Implementation',
          example: {
            title: 'Fixed Window, Variable Window & Minimum Window Substring',
            code: `from collections import Counter, defaultdict
from typing import List

# ── Template: variable sliding window ──
def sliding_window_template(s: str) -> int:
    left = result = 0
    state = {}   # window state (counts, sum, etc.)
    for right in range(len(s)):
        # 1. ADD s[right] to window state
        state[s[right]] = state.get(s[right], 0) + 1
        # 2. SHRINK while window is invalid
        while not is_valid(state):
            state[s[left]] -= 1
            if state[s[left]] == 0:
                del state[s[left]]
            left += 1
        # 3. UPDATE result with valid window
        result = max(result, right - left + 1)
    return result

def is_valid(state):
    return True  # problem-specific

# ── LC 3: Longest Substring Without Repeating Characters ──
def length_of_longest_substring(s: str) -> int:
    last_seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

# ── LC 76: Minimum Window Substring ──
def min_window(s: str, t: str) -> str:
    need = Counter(t)
    missing = len(t)
    left = start = end = 0
    for right, char in enumerate(s, 1):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        while missing == 0:
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return s[start:end]

# ── Fixed window size k: max sum subarray of size k ──
def max_sum_subarray_k(nums: List[int], k: int) -> int:
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for right in range(k, len(nums)):
        window_sum += nums[right] - nums[right - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

print(length_of_longest_substring("abcabcbb"))  # 3 ("abc")
print(min_window("ADOBECODEBANC", "ABC"))         # "BANC"
print(max_sum_subarray_k([2,1,5,1,3,2], 3))      # 9`,
            output: `3
BANC
9`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Two Pointers & Fast/Slow Pointers',
          example: {
            title: 'Opposite Ends, Same Direction & Floyd Cycle Detection',
            code: `from typing import List, Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# ── LC 167: Two Sum II (sorted array) ──
def two_sum_sorted(numbers: List[int], target: int) -> List[int]:
    left, right = 0, len(numbers) - 1
    while left < right:
        total = numbers[left] + numbers[right]
        if total == target:
            return [left + 1, right + 1]
        elif total < target:
            left += 1
        else:
            right -= 1
    return []

# ── LC 11: Container With Most Water ──
def max_area(height: List[int]) -> int:
    left, right = 0, len(height) - 1
    best = 0
    while left < right:
        best = max(best, min(height[left], height[right]) * (right - left))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return best

# ── LC 26: Remove Duplicates In-Place (same-direction pointers) ──
def remove_duplicates(nums: List[int]) -> int:
    if not nums:
        return 0
    write = 1
    for read in range(1, len(nums)):
        if nums[read] != nums[read - 1]:
            nums[write] = nums[read]
            write += 1
    return write

# ── LC 141: Linked List Cycle (fast/slow) ──
def has_cycle(head: Optional[ListNode]) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False

# ── LC 142: Find Cycle Start ──
def detect_cycle(head: Optional[ListNode]) -> Optional[ListNode]:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            slow = head
            while slow is not fast:
                slow = slow.next
                fast = fast.next
            return slow
    return None

# ── LC 876: Middle of Linked List ──
def middle_node(head: Optional[ListNode]) -> Optional[ListNode]:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

print(two_sum_sorted([2, 7, 11, 15], 9))
print(max_area([1,8,6,2,5,4,8,3,7]))
print(has_cycle(ListNode(1)))`,
            output: `[1, 2]
49
False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Merge Intervals, Top K & BFS/DFS on Grids',
          example: {
            title: 'Intervals, Heap Top-K, Grid Traversal Templates',
            code: `import heapq
from collections import deque, Counter
from typing import List

# ── LC 56: Merge Intervals ──
def merge_intervals(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = []
    for start, end in intervals:
        if merged and start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged

# ── LC 57: Insert Interval ──
def insert_interval(intervals: List[List[int]], new: List[int]) -> List[List[int]]:
    result = []
    i = 0
    n = len(intervals)
    while i < n and intervals[i][1] < new[0]:
        result.append(intervals[i])
        i += 1
    while i < n and intervals[i][0] <= new[1]:
        new[0] = min(new[0], intervals[i][0])
        new[1] = max(new[1], intervals[i][1])
        i += 1
    result.append(new)
    result.extend(intervals[i:])
    return result

# ── LC 347: Top K Frequent Elements ──
def top_k_frequent(nums: List[int], k: int) -> List[int]:
    counts = Counter(nums)
    heap = []
    for num, freq in counts.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    return [num for freq, num in heap]

# ── LC 973: K Closest Points to Origin ──
def k_closest(points: List[List[int]], k: int) -> List[List[int]]:
    heap = []
    for x, y in points:
        dist = x*x + y*y
        heapq.heappush(heap, (-dist, x, y))   # max-heap via negation
        if len(heap) > k:
            heapq.heappop(heap)
    return [[x, y] for dist, x, y in heap]

# ── LC 200: Number of Islands (DFS on grid) ──
def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'   # mark visited
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

# ── LC 994: Rotting Oranges (BFS on grid) ──
def oranges_rotting(grid: List[List[int]]) -> int:
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c, 0))
            elif grid[r][c] == 1:
                fresh += 1
    if fresh == 0:
        return 0
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while queue:
        r, c, t = queue.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                if fresh == 0:
                    return t + 1
                queue.append((nr, nc, t+1))
    return -1

print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))
print(top_k_frequent([1,1,1,2,2,3], 2))
print(num_islands([["1","1","0"],["1","1","0"],["0","0","1"]]))`,
            output: `[[1, 6], [8, 10], [15, 18]]
[1, 2]
2`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Dynamic Programming Patterns',
          example: {
            title: '1D DP, 2D Grid DP, Knapsack & LCS Templates',
            code: `from typing import List

# ── 1D DP: LC 70 Climbing Stairs ──
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        curr = prev1 + prev2
        prev2, prev1 = prev1, curr
    return prev1

# ── 1D DP: LC 322 Coin Change ──
def coin_change(coins: List[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# ── 1D DP: LC 300 Longest Increasing Subsequence O(n log n) ──
def length_of_lis(nums: List[int]) -> int:
    tails = []
    for num in nums:
        lo, hi = 0, len(tails)
        while lo < hi:
            mid = (lo + hi) // 2
            if tails[mid] < num:
                lo = mid + 1
            else:
                hi = mid
        if lo == len(tails):
            tails.append(num)
        else:
            tails[lo] = num
    return len(tails)

# ── 2D DP: LC 62 Unique Paths ──
def unique_paths(m: int, n: int) -> int:
    dp = [[1] * n for _ in range(m)]
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
    return dp[m-1][n-1]

# ── 2D DP: LC 1143 Longest Common Subsequence ──
def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# ── 0/1 Knapsack ──
def knapsack_01(weights: List[int], values: List[int], capacity: int) -> int:
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for cap in range(capacity, w - 1, -1):
            dp[cap] = max(dp[cap], dp[cap - w] + v)
    return dp[capacity]

print(climb_stairs(5))                          # 8
print(coin_change([1,2,5], 11))                 # 3
print(length_of_lis([10,9,2,5,3,7,101,18]))     # 4
print(unique_paths(3, 7))                       # 28
print(longest_common_subsequence("abcde", "ace")) # 3
print(knapsack_01([1,2,3], [6,10,12], 5))        # 22`,
            output: `8
3
4
28
3
22`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Worked Problem 1 — Sliding Window: Longest Repeating Character Replacement (LC 424)',
          text: 'Given a string s and integer k, you can replace at most k characters. Return the length of the longest substring containing the same letter.',
          note: 'Hint: Sliding window with a frequency map. Window is valid when (window_size - max_frequency) ≤ k. Track max_freq of the dominant character; shrink left when invalid.',
          example: {
            title: 'Solution — O(n) time, O(1) space (26 letters)',
            code: `def character_replacement(s: str, k: int) -> int:
    count = {}
    left = max_freq = result = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        # chars to replace = window size - count of dominant char
        while (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
        result = max(result, right - left + 1)
    return result

# LC 3 variant for reference
def length_of_longest_substring(s: str) -> int:
    seen = {}
    left = ans = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        ans = max(ans, right - left + 1)
    return ans

print(character_replacement("ABAB", 2))    # 4 ("ABAB" → all A or all B)
print(character_replacement("AABABBA", 1)) # 4
print(length_of_longest_substring("abcabcbb"))  # 3`,
            output: `4
4
3`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(n) — each character visited at most twice (left and right pass).',
            '<strong>Space:</strong> O(1) — at most 26 uppercase letter counts.',
            '<strong>Key insight:</strong> max_freq in the window never decreases on expand — safe to skip shrinking max_freq (optimization trick).'
          ]
        },
        {
          heading: 'Worked Problem 2 — Sliding Window: Permutation in String (LC 567)',
          text: 'Given strings s1 and s2, return true if s2 contains a permutation (anagram) of s1 — i.e., a substring of s2 with exactly the same character counts as s1.',
          note: 'Hint: Fixed-size sliding window of len(s1) over s2. Compare frequency arrays (or a "matches" counter) instead of sorting each window.',
          example: {
            title: 'Solution — O(n) time, O(1) space',
            code: `def check_inclusion(s1: str, s2: str) -> bool:
    if len(s1) > len(s2):
        return False
    need = [0] * 26
    window = [0] * 26
    for c in s1:
        need[ord(c) - ord('a')] += 1

    left = matches = 0
    required = sum(1 for x in need if x > 0)

    for right in range(len(s2)):
        idx = ord(s2[right]) - ord('a')
        window[idx] += 1
        if window[idx] == need[idx]:
            matches += 1
        elif window[idx] == need[idx] + 1:
            matches -= 1

        if right - left + 1 > len(s1):
            left_idx = ord(s2[left]) - ord('a')
            window[left_idx] -= 1
            if window[left_idx] == need[left_idx]:
                matches += 1
            elif window[left_idx] == need[left_idx] - 1:
                matches -= 1
            left += 1

        if matches == required:
            return True
    return False

# LC 76: Minimum Window Substring (variable window)
def min_window(s: str, t: str) -> str:
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    missing = len(t)
    left = start = end = 0
    for right, c in enumerate(s, 1):
        if need.get(c, 0) > 0:
            missing -= 1
        need[c] = need.get(c, 0) - 1
        while missing == 0:
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] = need.get(s[left], 0) + 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return s[start:end]

print(check_inclusion("ab", "eidbaooo"))  # True ("ba")
print(check_inclusion("ab", "eidboaoo"))  # False
print(min_window("ADOBECODEBANC", "ABC"))  # "BANC"`,
            output: `True
False
BANC`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(n + m) where n = len(s2), m = len(s1).',
            '<strong>Space:</strong> O(1) — fixed 26-element frequency arrays.',
            '<strong>Key insight:</strong> Track "matches" (how many chars have correct count) instead of comparing full arrays each step.'
          ]
        },
        {
          heading: 'Worked Problem 3 — Sliding Window: Max Consecutive Ones III (LC 1004)',
          text: 'Given a binary array nums and integer k, return the maximum number of consecutive 1\'s if you can flip at most k 0\'s to 1\'s.',
          note: 'Hint: Variable sliding window. Count zeros in window; while zeros > k, shrink from left. Answer is max window size seen.',
          example: {
            title: 'Solution — O(n) time, O(1) space',
            code: `from typing import List

def longest_ones(nums: List[int], k: int) -> int:
    left = zeros = result = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > k:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        result = max(result, right - left + 1)
    return result

# LC 209: Minimum Size Subarray Sum (variable window, sum constraint)
def min_subarray_len(target: int, nums: List[int]) -> int:
    left = total = result = float('inf')
    for right in range(len(nums)):
        total += nums[right]
        while total >= target:
            result = min(result, right - left + 1)
            total -= nums[left]
            left += 1
    return result if result != float('inf') else 0

print(longest_ones([1,1,1,0,0,0,1,1,1,1,0], 2))  # 6
print(longest_ones([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))  # 10
print(min_subarray_len(7, [2,3,1,2,4,3]))  # 2`,
            output: `6
10
2`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(n) — left pointer only advances, never retreats past right.',
            '<strong>Space:</strong> O(1).',
            '<strong>Pattern family:</strong> "at most K violations" → count violations, shrink while violations > K.'
          ]
        },
        {
          heading: 'Worked Problem 4 — DP: House Robber (LC 198)',
          text: 'You are a robber planning to rob houses along a street. Adjacent houses have security systems — you cannot rob two adjacent houses. Given an array of money per house, return the maximum you can rob without alerting police.',
          note: 'Hint: At each house, decide rob (prev2 + nums[i]) or skip (prev1). Classic 1D DP with O(1) space optimization.',
          example: {
            title: 'Solution — O(n) time, O(1) space',
            code: `from typing import List

def rob(nums: List[int]) -> int:
    prev2 = prev1 = 0
    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2, prev1 = prev1, curr
    return prev1

# LC 213: House Robber II (circular street)
def rob_circular(nums: List[int]) -> int:
    if len(nums) == 1:
        return nums[0]
    def rob_linear(arr):
        p2 = p1 = 0
        for x in arr:
            p2, p1 = p1, max(p1, p2 + x)
        return p1
    return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))

print(rob([1, 2, 3, 1]))        # 4 (rob house 0 + house 2)
print(rob([2, 7, 9, 3, 1]))     # 12 (2 + 9 + 1)
print(rob_circular([2, 3, 2]))  # 3`,
            output: `4
12
3`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(n) — single pass.',
            '<strong>Space:</strong> O(1) — only two rolling variables.',
            '<strong>Recurrence:</strong> dp[i] = max(dp[i-1], dp[i-2] + nums[i]).'
          ]
        },
        {
          heading: 'Worked Problem 5 — DP: Word Break (LC 139)',
          text: 'Given a string s and a dictionary of words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. Words may be reused.',
          note: 'Hint: dp[i] = True if s[0:i] can be segmented. For each i, check all j < i where s[j:i] is in the dictionary and dp[j] is True.',
          example: {
            title: 'Solution — O(n² · m) time where m = avg word length for hash lookup',
            code: `def word_break(s: str, word_dict: list) -> bool:
    word_set = set(word_dict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[n]

# LC 322: Coin Change (unbounded knapsack DP)
def coin_change(coins: list, amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(word_break("leetcode", ["leet", "code"]))           # True
print(word_break("applepenapple", ["apple", "pen"]))     # True
print(word_break("catsandog", ["cats","dog","sand","and","cat"]))  # False
print(coin_change([1, 2, 5], 11))  # 3`,
            output: `True
True
False
3`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(n²) for the nested loop; each substring check O(1) with hash set.',
            '<strong>Space:</strong> O(n) for dp array + O(k) for word set.',
            '<strong>Pattern:</strong> "Can you partition string?" → boolean 1D DP over prefixes.'
          ]
        },
        {
          heading: 'Worked Problem 6 — DP: Edit Distance (LC 72)',
          text: 'Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) to convert word1 to word2.',
          note: 'Hint: 2D DP. If chars match, dp[i][j] = dp[i-1][j-1]. Else, dp[i][j] = 1 + min(insert, delete, replace) = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]).',
          example: {
            title: 'Solution — O(m·n) time and space',
            code: `def min_distance(word1: str, word2: str) -> int:
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],      # delete from word1
                    dp[i][j-1],      # insert into word1
                    dp[i-1][j-1]     # replace
                )
    return dp[m][n]

# LC 1143: Longest Common Subsequence (related 2D DP)
def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

print(min_distance("horse", "ros"))     # 3
print(min_distance("intention", "execution"))  # 5
print(longest_common_subsequence("abcde", "ace"))  # 3`,
            output: `3
5
3`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(m · n).',
            '<strong>Space:</strong> O(m · n); can optimize to O(min(m, n)) with rolling array.',
            '<strong>Pattern:</strong> Two-sequence DP — rows = word1 prefix, cols = word2 prefix.'
          ]
        },
        {
          heading: 'Worked Problem 7 — Graphs: Number of Islands (LC 200)',
          text: 'Given an m×n 2D grid of \'1\'s (land) and \'0\'s (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.',
          note: 'Hint: Iterate every cell. When you find unvisited land, run DFS or BFS to mark the entire island, increment count. Mutate grid in-place to avoid extra visited set.',
          example: {
            title: 'Solution — DFS O(m·n) time, O(m·n) stack space worst case',
            code: `from typing import List
from collections import deque

def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

# BFS alternative
def num_islands_bfs(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                queue = deque([(r, c)])
                grid[r][c] = '0'
                while queue:
                    cr, cc = queue.popleft()
                    for dr, dc in dirs:
                        nr, nc = cr+dr, cc+dc
                        if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                            grid[nr][nc] = '0'
                            queue.append((nr, nc))
    return count

grid1 = [["1","1","1","1","0"],
         ["1","1","0","1","0"],
         ["1","1","0","0","0"],
         ["0","0","0","0","0"]]
print(num_islands([row[:] for row in grid1]))  # 1`,
            output: `1`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(m · n) — each cell visited once.',
            '<strong>Space:</strong> O(m · n) worst-case recursion stack for snake-shaped island; BFS uses O(min(m,n)) queue.',
            '<strong>Pattern:</strong> Connected components on implicit graph (grid neighbors).'
          ]
        },
        {
          heading: 'Worked Problem 8 — Graphs: Max Area of Island (LC 695)',
          text: 'Given a binary grid (1 = land, 0 = water), return the maximum area of an island. An island\'s area is the number of land cells.',
          note: 'Hint: Same DFS/BFS as LC 200, but return the size of each component and track the maximum.',
          example: {
            title: 'Solution — O(m·n) time',
            code: `from typing import List

def max_area_of_island(grid: List[List[int]]) -> int:
    rows, cols = len(grid), len(grid[0])
    best = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 1:
            return 0
        grid[r][c] = 0
        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                best = max(best, dfs(r, c))
    return best

# LC 733: Flood Fill (single-component DFS from click)
def flood_fill(image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
    original = image[sr][sc]
    if original == color:
        return image
    rows, cols = len(image), len(image[0])

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or image[r][c] != original:
            return
        image[r][c] = color
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)

    dfs(sr, sc)
    return image

grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]]
print(max_area_of_island([row[:] for row in grid]))  # 6`,
            output: `6`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(m · n).',
            '<strong>Space:</strong> O(m · n) recursion depth worst case.',
            '<strong>Key difference from LC 200:</strong> DFS returns accumulated area; track global max.'
          ]
        },
        {
          heading: 'Worked Problem 9 — Graphs: Pacific Atlantic Water Flow (LC 417)',
          text: 'Given an m×n matrix of heights, find all cells that can flow to both the Pacific (top/left edges) and Atlantic (bottom/right edges). Water flows from a cell to adjacent equal-or-lower height cells.',
          note: 'Hint: Reverse thinking — start DFS/BFS from ocean edges moving INLAND to cells with equal-or-higher height. Intersect the two reachable sets.',
          example: {
            title: 'Solution — Multi-source BFS from both oceans O(m·n)',
            code: `from typing import List
from collections import deque

def pacific_atlantic(heights: List[List[int]]) -> List[List[int]]:
    if not heights:
        return []
    rows, cols = len(heights), len(heights[0])
    pacific = set()
    atlantic = set()
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]

    def bfs(starts, reachable):
        queue = deque(starts)
        reachable.update(starts)
        while queue:
            r, c = queue.popleft()
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if (0 <= nr < rows and 0 <= nc < cols
                        and (nr, nc) not in reachable
                        and heights[nr][nc] >= heights[r][c]):
                    reachable.add((nr, nc))
                    queue.append((nr, nc))

    pacific_starts = [(r, 0) for r in range(rows)] + [(0, c) for c in range(cols)]
    atlantic_starts = [(r, cols-1) for r in range(rows)] + [(rows-1, c) for c in range(cols)]

    bfs(pacific_starts, pacific)
    bfs(atlantic_starts, atlantic)

    return [[r, c] for r, c in pacific & atlantic]

# LC 130: Surrounded Regions (BFS from border)
def solve(board: List[List[str]]) -> None:
    if not board:
        return
    rows, cols = len(board), len(board[0])
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]

    def bfs(r, c):
        queue = deque([(r, c)])
        board[r][c] = 'T'
        while queue:
            cr, cc = queue.popleft()
            for dr, dc in dirs:
                nr, nc = cr+dr, cc+dc
                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] == 'O':
                    board[nr][nc] = 'T'
                    queue.append((nr, nc))

    for r in range(rows):
        for c in range(cols):
            if (r == 0 or r == rows-1 or c == 0 or c == cols-1) and board[r][c] == 'O':
                bfs(r, c)
    for r in range(rows):
        for c in range(cols):
            if board[r][c] == 'O':
                board[r][c] = 'X'
            elif board[r][c] == 'T':
                board[r][c] = 'O'

heights = [[1,2,2,3,5],
           [3,2,3,4,4],
           [2,4,5,3,1],
           [6,7,1,4,5],
           [5,1,1,2,4]]
print(sorted(pacific_atlantic(heights)))`,
            output: `[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]`,
            language: 'python',
            type: 'code'
          },
          list: [
            '<strong>Time:</strong> O(m · n) — each cell visited at most twice (once per ocean).',
            '<strong>Space:</strong> O(m · n) for the two reachable sets + BFS queue.',
            '<strong>Key insight:</strong> Reverse the flow direction — "can ocean reach this cell?" instead of "can this cell reach ocean?"'
          ]
        },
        {
          heading: 'Time & Space Complexity — All Patterns',
          table: {
            headers: ['Pattern', 'Typical Time', 'Typical Space', 'Classic Problems'],
            rows: [
              ['Sliding Window', 'O(n)', 'O(k) or O(1)', 'LC 3, 76, 424, 567, 1004'],
              ['Two Pointers', 'O(n)', 'O(1)', 'LC 11, 15, 26, 167, 283'],
              ['Fast/Slow', 'O(n)', 'O(1)', 'LC 141, 142, 876, 202'],
              ['Merge Intervals', 'O(n log n)', 'O(n)', 'LC 56, 57, 252, 253'],
              ['Top K (Heap)', 'O(n log k)', 'O(k)', 'LC 215, 347, 973, 692'],
              ['BFS on Grid', 'O(m · n)', 'O(m · n)', 'LC 200, 994, 417, 695'],
              ['DFS on Grid', 'O(m · n)', 'O(m · n) stack', 'LC 200, 695, 130, 79'],
              ['1D DP', 'O(n)', 'O(1)–O(n)', 'LC 70, 198, 322, 300'],
              ['2D DP', 'O(m · n)', 'O(m · n)', 'LC 62, 72, 1143, 64']
            ]
          }
        },
        {
          heading: 'Interview Tips & Pattern Recognition Checklist',
          list: [
            'Spend first 3-5 minutes classifying the problem — say the pattern name aloud: "This is a sliding window problem."',
            'Write the template before filling in details — interviewers reward structured thinking over jumping to code.',
            'For sliding window: clarify fixed vs variable size. Fixed = pre-fill first k elements; variable = expand/shrink loop.',
            'For grid problems: ask "4-directional or 8-directional?" and "can I modify input in-place?"',
            'For DP: start with recursive brute force, draw the recursion tree, identify repeated states, then memoize.',
            'Combine patterns: "Minimum Window Substring" = sliding window + hash map frequency. "Course Schedule" = BFS + topological sort.',
            'Always state time/space complexity and mention if you can optimize space (rolling DP array, in-place grid marking).',
            'Practice saying: "I\'ll use a min-heap of size k to track the k largest elements in O(n log k) time."'
          ]
        }
      ]
    },
    'ds-ml-pipelines': {
      title: 'Data Structures in ML',
      subtitle: 'Tensors, graphs, heaps & spatial trees in production ML',
      sections: [
        {
          heading: 'Core Concepts: Data Structures in ML Pipelines',
          text: 'Machine learning systems are not just matrix multiplication — they rely on the same fundamental data structures from DSA, scaled to billions of elements. Understanding how tensors, graphs, heaps, and spatial trees appear in ML pipelines helps you debug performance bottlenecks, design efficient feature pipelines, and ace system-design interviews at AI companies.',
          list: [
            '<strong>Tensors / N-D Arrays:</strong> Multi-dimensional contiguous arrays — the backbone of PyTorch, TensorFlow, NumPy. O(1) element access, O(n) reshape/transpose.',
            '<strong>Graphs (GNN):</strong> Adjacency lists for molecular, social, and knowledge graphs. Message-passing aggregates neighbor features.',
            '<strong>Heaps (A*):</strong> Priority queues for optimal pathfinding in robotics, game AI, and planning agents.',
            '<strong>KD-Trees / Ball Trees:</strong> Spatial partitioning for O(log n) nearest-neighbor queries in KNN, recommendation, and clustering.',
            '<strong>Hash Maps:</strong> Feature stores, embedding lookups (word2vec, entity IDs), and deduplication in data pipelines.',
            '<strong>Queues / Deques:</strong> BFS in graph sampling, streaming batch buffers, and async data loaders.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Tensors as structured memory:</strong> A tensor is a generalization of vectors and matrices to N dimensions. Shape (batch, channels, height, width) in CNNs; (seq_len, embed_dim) in transformers. Contiguous memory layout enables SIMD/GPU parallelism. Reshape is O(1) if contiguous (view); transpose may require O(n) copy. Strided access patterns affect cache performance — row-major vs column-major matters.</p>',
            '<p><strong>Graphs for GNNs:</strong> Graph Neural Networks operate on `edge_index` (COO format) or adjacency lists. Each layer aggregates neighbor node features: `h_v = UPDATE(h_v, AGGREGATE({h_u : u ∈ N(v)}))`. PyTorch Geometric stores sparse graphs efficiently. BFS order affects mini-batch sampling (GraphSAGE neighbor sampling).</p>',
            '<p><strong>Heaps in A* search:</strong> A* uses f(n) = g(n) + h(n) where g = cost so far, h = heuristic estimate. PriorityQueue orders by f(n). Used in path planning for autonomous vehicles, game NPCs, and RL environment navigation. O(log n) per expansion vs O(n) for Dijkstra when heuristic is weak.</p>',
            '<p><strong>KD-Trees for KNN:</strong> Recursively partition space by median along alternating axes. Query: traverse tree, prune branches farther than current best. sklearn\'s `BallTree` handles high dimensions better when KD-tree degrades. Approximate NN (FAISS, HNSW) trades accuracy for speed at billion-vector scale.</p>'
          ],
          note: 'ML interview bridge: "KNN inference is O(n) brute force but O(log n) with KD-tree" shows you connect algorithms to production latency.'
        },
        {
          heading: 'Visual Diagram — ML Data Structure Pipeline',
          code: `ML Training Pipeline — where DS appear:

  Raw Data (CSV, logs, images)
       │
       ▼
  HashMap / Set ─── dedup, feature encoding, vocab lookup
       │
       ▼
  Tensor (N-D array) ─── batching, GPU transfer, matrix ops
       │
       ├─ CNN:  (N, C, H, W) convolutions
       ├─ Transformer: (seq, embed) attention — O(n²) pairwise
       └─ GNN:  node features + edge_index graph

  Inference / Serving:
       │
       ├─ KD-Tree / FAISS ─── KNN, similarity search, RAG retrieval
       ├─ PriorityQueue ─── A* pathfinding in RL agents
       └─ BFS/DFS ─── graph sampling, connected component features

KD-Tree partition (2D):

        split on x
       /          \\
   x < median    x ≥ median
   /     \\       /     \\
 y-split  ...  y-split  ...

Query: find nearest to point P
  → prune subtrees whose bounding box is farther than best-so-far`,
          language: 'text'
        },
        {
          heading: 'Tensors — PyTorch & NumPy Patterns',
          example: {
            title: 'Shape Operations, Batching & Memory Layout',
            code: `import numpy as np

# ── Tensor basics: shape, reshape, broadcasting ──
data = np.arange(12).reshape(3, 4)   # 3×4 matrix
print(data.shape)                     # (3, 4)
print(data.reshape(2, 6))             # O(1) view if contiguous
print(data.T)                         # transpose — may copy O(n)

# ── Batching for ML pipelines ──
batch_size = 32
features = np.random.randn(1000, 128)  # 1000 samples, 128-dim
for i in range(0, len(features), batch_size):
    batch = features[i:i+batch_size]   # O(batch_size) slice — contiguous
    # forward pass on batch...

# ── Broadcasting — avoid explicit loops (GPU-friendly) ──
a = np.array([[1],[2],[3]])    # (3, 1)
b = np.array([10, 20, 30])     # (3,)
print(a + b)                   # (3, 3) without nested loops

# ── Embedding lookup = HashMap-style index into tensor ──
vocab_size, embed_dim = 10000, 256
embeddings = np.random.randn(vocab_size, embed_dim)
token_ids = [42, 7, 99]                    # integer indices
token_embeds = embeddings[token_ids]       # O(k) lookup, k = seq length
print(token_embeds.shape)                    # (3, 256)

# ── PyTorch equivalent (commented for reference) ──
# import torch
# x = torch.randn(32, 3, 224, 224)  # batch of images
# x = x.to('cuda')                     # GPU transfer
# y = model(x)                         # tensor in → tensor out`,
            output: `(3, 4)
[[ 0  1  2  3  4  5]
 [ 6  7  8  9 10 11]]
(3, 256)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Graphs for GNNs — Adjacency & Message Passing',
          example: {
            title: 'Graph Construction, BFS Sampling & Simple GNN Layer',
            code: `from collections import defaultdict, deque
import numpy as np

# ── Build graph from edge list (PyG-style) ──
def build_graph(edges, num_nodes):
    adj = defaultdict(list)
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)   # undirected
    return adj

# ── BFS neighbor sampling (GraphSAGE-style) ──
def sample_neighbors(adj, node, max_neighbors=5):
    neighbors = adj.get(node, [])
    if len(neighbors) <= max_neighbors:
        return neighbors
    # random sample for large-degree nodes
    import random
    return random.sample(neighbors, max_neighbors)

# ── Simple mean-aggregation GNN layer ──
def gnn_layer(node_features, adj, num_nodes):
    """Aggregate neighbor features + self. node_features: (N, F)."""
    feature_dim = node_features.shape[1]
    new_features = np.zeros((num_nodes, feature_dim))
    for node in range(num_nodes):
        neighbors = adj.get(node, [])
        if neighbors:
            neighbor_feats = node_features[neighbors]
            aggregated = neighbor_feats.mean(axis=0)
        else:
            aggregated = np.zeros(feature_dim)
        new_features[node] = 0.5 * node_features[node] + 0.5 * aggregated
    return new_features

# Demo: 4-node social graph
edges = [(0,1), (1,2), (2,3), (0,2)]
adj = build_graph(edges, 4)
features = np.array([[1,0], [0,1], [1,1], [0,0]], dtype=float)
print("Neighbors of 1:", adj[1])
updated = gnn_layer(features, adj, 4)
print("After GNN layer:", updated.shape)  # (4, 2)`,
            output: `Neighbors of 1: [0, 2]
After GNN layer: (4, 2)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Heaps in A* Search & KD-Trees for KNN',
          example: {
            title: 'A* Pathfinding & sklearn Nearest Neighbors',
            code: `import heapq
import numpy as np

# ── A* search on grid with priority queue ──
def astar(grid, start, goal):
    rows, cols = len(grid), len(grid[0])
    def heuristic(a, b):
        return abs(a[0]-b[0]) + abs(a[1]-b[1])  # Manhattan

    open_set = [(0, start)]   # (f_score, position)
    g_score = {start: 0}
    came_from = {}
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]

    while open_set:
        _, current = heapq.heappop(open_set)
        if current == goal:
            # reconstruct path
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            return path[::-1]

        for dr, dc in dirs:
            nr, nc = current[0]+dr, current[1]+dc
            if 0 <= nr < rows and 0 <= cols and grid[nr][nc] == 0:
                neighbor = (nr, nc)
                tentative = g_score[current] + 1
                if tentative < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative
                    f = tentative + heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f, neighbor))
    return []

# ── KD-Tree KNN with sklearn ──
from sklearn.neighbors import KDTree

# Training data: 2D points
X_train = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
tree = KDTree(X_train, leaf_size=2)

query_point = np.array([[4, 5]])
distances, indices = tree.query(query_point, k=2)
print("2 nearest neighbors:", indices[0], "distances:", distances[0])

# Grid A* demo
grid = [[0,0,0,0],
        [1,1,0,1],
        [0,0,0,0],
        [0,1,1,0]]
print("A* path:", astar(grid, (0,0), (3,3)))`,
            output: `2 nearest neighbors: [1 2] distances: [1.41 1.41]
A* path: [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 3), (3, 3)]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation — ML Pipeline Data Structures',
          example: {
            title: 'PriorityQueue A* & HashMap Feature Store Pattern',
            code: `import java.util.*;

public class MLDataStructures {

    // A* with PriorityQueue — same pattern as Python heapq
    static List<int[]> aStar(int[][] grid, int[] start, int[] goal) {
        int rows = grid.length, cols = grid[0].length;
        PriorityQueue<int[]> open = new PriorityQueue<>(Comparator.comparingInt(a -> a[2]));
        Map<String, Integer> gScore = new HashMap<>();
        Map<String, int[]> cameFrom = new HashMap<>();
        String startKey = start[0] + "," + start[1];
        gScore.put(startKey, 0);
        open.offer(new int[]{start[0], start[1], manhattan(start, goal)});

        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        while (!open.isEmpty()) {
            int[] curr = open.poll();
            if (curr[0] == goal[0] && curr[1] == goal[1]) {
                return reconstruct(cameFrom, start, goal);
            }
            String key = curr[0] + "," + curr[1];
            for (int[] d : dirs) {
                int nr = curr[0] + d[0], nc = curr[1] + d[1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 0) {
                    String nKey = nr + "," + nc;
                    int tentative = gScore.get(key) + 1;
                    if (tentative < gScore.getOrDefault(nKey, Integer.MAX_VALUE)) {
                        gScore.put(nKey, tentative);
                        cameFrom.put(nKey, new int[]{curr[0], curr[1]});
                        open.offer(new int[]{nr, nc, tentative + manhattan(new int[]{nr,nc}, goal)});
                    }
                }
            }
        }
        return List.of();
    }

    static int manhattan(int[] a, int[] b) {
        return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
    }

    static List<int[]> reconstruct(Map<String, int[]> cameFrom, int[] start, int[] goal) {
        List<int[]> path = new ArrayList<>();
        int[] curr = goal;
        path.add(curr);
        while (!(curr[0] == start[0] && curr[1] == start[1])) {
            curr = cameFrom.get(curr[0] + "," + curr[1]);
            path.add(0, curr);
        }
        return path;
    }

    // Feature store pattern: entity ID → feature vector
    static class FeatureStore {
        private final Map<String, float[]> store = new HashMap<>();
        void put(String entityId, float[] features) { store.put(entityId, features); }
        float[] get(String entityId) { return store.get(entityId); }
    }

    public static void main(String[] args) {
        int[][] grid = {{0,0,0},{0,1,0},{0,0,0}};
        System.out.println(aStar(grid, new int[]{0,0}, new int[]{2,2}));
    }
}`,
            output: `[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Tensor pipeline:</strong> Load data → encode to indices (HashMap vocab) → embed (tensor lookup) → batch (contiguous slices) → GPU transfer.',
            '<strong>Step 2 — GNN pipeline:</strong> Build adjacency list from edge list → sample neighbors (BFS/random) → aggregate features → update node embeddings.',
            '<strong>Step 3 — A* setup:</strong> PriorityQueue ordered by f=g+h. Push start with f=h(start,goal). Pop min, expand neighbors, update g scores.',
            '<strong>Step 4 — KD-Tree build:</strong> Recursively split on median axis. Query: descend tree, check if other subtree could have closer point.',
            '<strong>Step 5 — KNN at scale:</strong> <100K points → KD-Tree/BallTree. >1M points → FAISS/HNSW approximate NN.',
            '<strong>Step 6 — Latency budget:</strong> Brute KNN O(n) per query. KD-tree O(log n). Know when accuracy vs speed trade-off matters.',
            '<strong>Step 7 — RAG retrieval:</strong> Embed documents (tensor), store in vector index (FAISS), query with heap for top-k similarity.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Structure / Op', 'Build', 'Query', 'Space', 'ML use case'],
            rows: [
              ['Tensor element access', 'O(1)', 'O(1)', 'O(n) elements', 'Forward pass, embedding lookup'],
              ['Tensor reshape (view)', 'O(1)', 'O(1)', 'O(1) extra', 'Batch reshaping'],
              ['Tensor matmul (m×k)(k×n)', 'O(1)', 'O(m·k·n)', 'O(m·n)', 'Attention, linear layers'],
              ['Graph adjacency list', 'O(E)', 'O(deg(v))', 'O(V+E)', 'GNN, social networks'],
              ['BFS neighbor sampling', 'O(V+E)', 'O(k)', 'O(V)', 'GraphSAGE mini-batches'],
              ['A* with heap', 'O(1)', 'O(b^d log b)', 'O(b^d)', 'RL navigation, robotics'],
              ['KD-Tree build', 'O(n log n)', 'O(log n) avg', 'O(n)', 'KNN, anomaly detection'],
              ['Brute-force KNN', 'O(1)', 'O(n)', 'O(n)', 'Small datasets, baseline'],
              ['FAISS HNSW index', 'O(n log n)', 'O(log n) approx', 'O(n·M)', 'Billion-vector search']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Non-contiguous tensor reshape:</strong> PyTorch view() fails on transposed tensors — <em>Fix:</em> call `.contiguous()` first.',
            '<strong>Brute-force KNN at scale:</strong> O(n) per query kills latency at 1M+ vectors — <em>Fix:</em> KD-tree, BallTree, or FAISS.',
            '<strong>Full graph in memory:</strong> Billion-edge graphs don\'t fit RAM — <em>Fix:</em> neighbor sampling, subgraph mini-batches.',
            '<strong>Attention O(n²) memory:</strong> Long sequences explode memory — <em>Fix:</em> flash attention, sparse attention, chunking.',
            '<strong>Wrong heuristic in A*:</strong> Inadmissible heuristic (overestimates) → suboptimal paths — <em>Fix:</em> use admissible heuristic (never overestimate).',
            '<strong>Feature store without versioning:</strong> Stale embeddings served to production — <em>Fix:</em> versioned HashMap keys or timestamped entries.'
          ],
          code: `# WRONG — O(n) KNN for every inference query
distances = [np.linalg.norm(x - query) for x in all_points]

# CORRECT — spatial index for O(log n) queries
from sklearn.neighbors import KDTree
tree = KDTree(all_points)
dist, idx = tree.query(query, k=5)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Recommendation systems:</strong> FAISS/HNSW for user→item similarity; embeddings stored as tensors.',
            '<strong>Drug discovery (GNN):</strong> Molecular graphs with atom/bond features; message passing predicts properties.',
            '<strong>Autonomous vehicles:</strong> A* / D* Lite on occupancy grids for real-time path planning.',
            '<strong>RAG / LLM serving:</strong> Vector database (Pinecone, Weaviate) = KD-tree/HNSW at scale for document retrieval.',
            '<strong>Fraud detection:</strong> KNN on transaction feature vectors — anomalies are far from all neighbors.',
            '<strong>Computer vision:</strong> Tensors (N,C,H,W) through CNN pipeline; batch normalization across batch dimension.'
          ]
        },
        {
          heading: 'Interview Tips & Practice Problems',
          list: [
            'Connect DSA to ML: "Embedding lookup is O(1) hash index into a tensor — same as HashMap get."',
            'Know when KD-tree fails: curse of dimensionality above ~20 dimensions — mention approximate methods.',
            'For GNN questions: explain message passing in 3 steps — aggregate, update, readout.',
            'A* vs Dijkstra: A* with admissible heuristic explores fewer nodes; both use priority queues.',
            `Q1: Why batch tensors in ML training?
Hint: GPU parallelism — contiguous memory, amortized transfer overhead.
Ans: Batching enables SIMD/GPU matrix ops; O(1) per-element cost at scale vs per-sample overhead.`,
            `Q2: KNN with 10M vectors — which data structure?
Hint: Brute O(n) too slow; KD-tree degrades in high dims; FAISS for approximate NN.
Ans: FAISS IVF/HNSW index — O(log n) approximate query, tunable recall/speed trade-off.`,
            `Q3: How does GraphSAGE scale to billion-node graphs?
Hint: Full graph doesn't fit memory; sample fixed-size neighborhoods per mini-batch.
Ans: BFS/random neighbor sampling + mini-batch training. O(sample_size) per node, not O(degree).`
          ]
        }
      ]
    },
    'complexity-cheat-sheet': {
      title: 'Final Complexity Review',
      subtitle: 'The definitive reference for interviews & system design',
      sections: [
        {
          heading: 'Core Concepts: Complexity as a Decision Tool',
          text: 'Big-O is not academic trivia — it is the decision framework for choosing data structures, algorithms, and system architectures. This cheat sheet consolidates everything from Modules 1–5 into actionable tables: when to use what, what complexity to expect, and what breaks at scale.',
          list: [
            '<strong>Time complexity:</strong> Upper bound on operations as input grows — always defend worst case in interviews.',
            '<strong>Space complexity:</strong> Auxiliary memory beyond input — includes recursion stack, hash maps, queues.',
            '<strong>Amortized analysis:</strong> Average cost over a sequence — dynamic array append, hash map insert.',
            '<strong>Trade-offs:</strong> Time vs space (hash map for O(1) lookup costs O(n) memory), simplicity vs optimality.',
            '<strong>Scale limits:</strong> At n=10⁶: O(n) OK, O(n log n) tight, O(n²) fails.',
            '<strong>Pattern → complexity:</strong> Each interview pattern has a predictable complexity class — memorize the mapping.'
          ]
        },
        {
          heading: 'Data Structure Complexity — Complete Reference',
          table: {
            headers: ['Data Structure', 'Access', 'Search', 'Insert', 'Delete', 'Notes'],
            rows: [
              ['Array (static)', 'O(1)', 'O(n)', 'O(n)', 'O(n)', 'Fixed size, cache-friendly'],
              ['Dynamic Array (ArrayList)', 'O(1)', 'O(n)', 'O(1) amortized end', 'O(1) end / O(n) mid', 'Python list, Java ArrayList'],
              ['Linked List', 'O(n)', 'O(n)', 'O(1) at node', 'O(1) at node', 'No random access'],
              ['Stack (ArrayDeque)', 'O(n)', 'O(n)', 'O(1) push', 'O(1) pop', 'LIFO'],
              ['Queue (deque/ArrayDeque)', 'O(n)', 'O(n)', 'O(1) enqueue', 'O(1) dequeue', 'FIFO, BFS'],
              ['Hash Table (HashMap)', 'N/A', 'O(1) avg', 'O(1) avg', 'O(1) avg', 'O(n) worst case collisions'],
              ['TreeMap / BST', 'O(log n)', 'O(log n)', 'O(log n)', 'O(log n)', 'Sorted keys, range queries'],
              ['Binary Heap', 'O(1) peek', 'O(n)', 'O(log n)', 'O(log n)', 'Priority queue, top-k'],
              ['Trie (prefix tree)', 'O(m)', 'O(m)', 'O(m)', 'O(m)', 'm = key length'],
              ['Union-Find', 'O(α(n))', 'O(α(n))', 'O(α(n))', 'O(α(n))', 'α = inverse Ackermann ≈ O(1)'],
              ['Adjacency List', 'O(deg(v))', 'O(V+E)', 'O(1) add edge', 'O(E) remove', 'Graphs, GNNs'],
              ['Adjacency Matrix', 'O(1)', 'O(V²)', 'O(1)', 'O(1)', 'Dense graphs, O(V²) space']
            ]
          }
        },
        {
          heading: 'Sorting Algorithm Complexity — Complete Reference',
          table: {
            headers: ['Algorithm', 'Best', 'Average', 'Worst', 'Space', 'Stable?', 'When to Use'],
            rows: [
              ['Bubble Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes', 'Never in interviews (teaching only)'],
              ['Selection Sort', 'O(n²)', 'O(n²)', 'O(n²)', 'O(1)', 'No', 'Never — always use better option'],
              ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes', 'Small n (<50), nearly sorted data'],
              ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes', 'Guaranteed O(n log n), linked lists, external sort'],
              ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'No', 'In-place, cache-friendly, default in practice'],
              ['Heap Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'No', 'Guaranteed O(n log n), in-place, no extra space'],
              ['Counting Sort', 'O(n+k)', 'O(n+k)', 'O(n+k)', 'O(k)', 'Yes', 'Small integer range k'],
              ['Radix Sort', 'O(n·d)', 'O(n·d)', 'O(n·d)', 'O(n+d)', 'Yes', 'Fixed-width integers/strings, d = digits'],
              ['TimSort (Python/Java)', 'O(n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes', 'Real-world default — adaptive merge sort'],
              ['Bucket Sort', 'O(n+k)', 'O(n+k)', 'O(n²)', 'O(n)', 'Yes', 'Uniformly distributed floats']
            ]
          }
        },
        {
          heading: 'Graph & Algorithm Complexity — Complete Reference',
          table: {
            headers: ['Algorithm', 'Time', 'Space', 'Use Case'],
            rows: [
              ['BFS (unweighted shortest path)', 'O(V+E)', 'O(V)', 'Shortest path, level order, grid flood fill'],
              ['DFS (explore all)', 'O(V+E)', 'O(V) stack', 'Connected components, cycle detect, topological sort'],
              ['Dijkstra (non-negative weights)', 'O((V+E) log V)', 'O(V)', 'Weighted shortest path, network routing'],
              ['Bellman-Ford', 'O(V·E)', 'O(V)', 'Negative edges, detect negative cycles'],
              ['Topological Sort (Kahn/BFS)', 'O(V+E)', 'O(V)', 'Course schedule, build order, DAG tasks'],
              ['Union-Find + Kruskal MST', 'O(E log E)', 'O(V)', 'Minimum spanning tree, connected components'],
              ['Floyd-Warshall (all pairs)', 'O(V³)', 'O(V²)', 'Dense graphs, small V (<400)'],
              ['Binary Search', 'O(log n)', 'O(1)', 'Sorted array lookup, search space halving'],
              ['Sliding Window', 'O(n)', 'O(k)', 'Contiguous subarray/substring problems'],
              ['Two Pointers', 'O(n)', 'O(1)', 'Sorted pairs, in-place removal'],
              ['Top-K with Heap', 'O(n log k)', 'O(k)', 'K-th largest, k closest, k frequent'],
              ['1D DP', 'O(n)', 'O(1)–O(n)', 'Fibonacci, house robber, coin change'],
              ['2D DP', 'O(m·n)', 'O(m·n)', 'Grid paths, LCS, edit distance'],
              ['Backtracking (all solutions)', 'O(b^d)', 'O(d)', 'Subsets, permutations, N-Queens'],
              ['KMP string search', 'O(n+m)', 'O(m)', 'Pattern matching, guaranteed linear'],
              ['KD-Tree KNN query', 'O(log n) avg', 'O(n)', 'Spatial nearest neighbor']
            ]
          }
        },
        {
          heading: 'When-to-Use Guide — Data Structure Selection',
          text: 'Use this decision guide when an interviewer asks "which data structure would you use?" or when designing a solution:',
          list: [
            '<strong>Need fast lookup by key?</strong> → HashMap / HashSet — O(1) average. If sorted keys needed → TreeMap / TreeSet.',
            '<strong>Need fast access by index?</strong> → Array / ArrayList — O(1). Not LinkedList.',
            '<strong>Need FIFO processing?</strong> → deque / ArrayDeque — O(1) enqueue/dequeue. Never list.pop(0).',
            '<strong>Need LIFO processing?</strong> → Stack / ArrayDeque — O(1) push/pop.',
            '<strong>Need min/max repeatedly?</strong> → Heap / PriorityQueue — O(log n) insert, O(1) peek.',
            '<strong>Need sorted order iteration?</strong> → TreeMap / TreeSet — O(log n) ops, sorted traversal.',
            '<strong>Need prefix matching?</strong> → Trie — O(m) per operation, m = key length.',
            '<strong>Need connectivity queries?</strong> → Union-Find — O(α(n)) ≈ O(1) per query.',
            '<strong>Need contiguous subarray optimal?</strong> → Sliding window on array — O(n).',
            '<strong>Need spatial nearest neighbor?</strong> → KD-Tree (<20 dims) or FAISS (>1M vectors).',
            '<strong>Need LRU eviction?</strong> → LinkedHashMap (Java) or OrderedDict + HashMap (Python).',
            '<strong>Need graph representation?</strong> → Adjacency list (sparse, default) or matrix (dense, O(1) edge check).'
          ]
        },
        {
          heading: 'Visual Diagram — Complexity Scale & n Limits',
          code: `What fits in 1 second? (≈ 10^8 operations)

  n         O(1)    O(log n)   O(n)      O(n log n)  O(n²)     O(2^n)
  ─────────────────────────────────────────────────────────────────────
  10        ✓       ✓          ✓         ✓           ✓         ✓
  1,000     ✓       ✓          ✓         ✓           ✗         ✗
  100,000   ✓       ✓          ✓         tight       ✗         ✗
  1,000,000 ✓       ✓          tight     ✗           ✗         ✗
  10^9      ✓       ✓          ✗         ✗           ✗         ✗

Decision tree — "My solution is O(?)":

  Single loop?                    → O(n)
  Two nested loops same data?     → O(n²)
  Halve search space each step?   → O(log n)
  Sort then scan?                  → O(n log n)
  BFS/DFS on graph?               → O(V + E)
  DP table m×n?                   → O(m · n)
  Generate all subsets?           → O(2^n) — exponential

Pattern → Complexity quick map:
  Sliding window    → O(n)
  Two pointers      → O(n)
  Binary search     → O(log n)
  Heap top-k        → O(n log k)
  Merge intervals   → O(n log n) [sort dominates]
  BFS/DFS grid      → O(m · n)
  DP 1D             → O(n)
  DP 2D             → O(m · n)`,
          language: 'text'
        },
        {
          heading: 'Best Practices — Complexity Analysis',
          content: [
            '<p><strong>Always state both time and space.</strong> "O(n) time, O(n) space for the hash map" — interviewers expect both. Omitting space analysis is a red flag.</p>',
            '<p><strong>Drop constants and lower-order terms.</strong> O(3n + 50) → O(n). O(n² + n log n) → O(n²). But mention when constants matter in practice (e.g., hash map vs tree for small n).</p>',
            '<p><strong>Identify the dominant operation.</strong> Sort + scan = O(n log n) because sort dominates. BFS + hash set = O(V+E) because both are linear in graph size.</p>',
            '<p><strong>Count the state space for DP.</strong> Memoization cost = O(number of unique states × cost per transition). Coin change: O(n × amount). Knapsack: O(n × W).</p>',
            '<p><strong>Amortized vs worst case.</strong> HashMap insert is O(1) amortized but O(n) worst case (all collisions). ArrayList append is O(1) amortized but O(n) on resize. Say "amortized" when relevant.</p>'
          ],
          note: 'Rule of thumb: n ≤ 10⁵ → O(n log n) OK. n ≤ 10³ → O(n²) might pass. n ≤ 20 → O(2^n) backtracking OK.'
        },
        {
          heading: 'Python & Java — Operation Complexity Side-by-Side',
          table: {
            headers: ['Operation', 'Python', 'Java', 'Complexity'],
            rows: [
              ['Append to end', 'list.append()', 'ArrayList.add()', 'O(1) amortized'],
              ['Insert at front', 'list.insert(0,x)', 'ArrayList.add(0,x)', 'O(n)'],
              ['Pop from front', 'deque.popleft()', 'ArrayDeque.poll()', 'O(1)'],
              ['Dict/map lookup', 'dict[key]', 'HashMap.get()', 'O(1) avg'],
              ['Dict key iteration (sorted)', 'sorted(d.keys())', 'TreeMap.keySet()', 'O(n log n) / O(log n) each'],
              ['Heap push/pop', 'heapq.heappush/pop', 'PriorityQueue.offer/poll', 'O(log n)'],
              ['Set membership', 'x in set', 'HashSet.contains()', 'O(1) avg'],
              ['Sort', 'sorted() / .sort()', 'Arrays.sort()', 'O(n log n)'],
              ['String concat in loop', '"".join(list)', 'StringBuilder.append()', 'O(n) vs O(n²)'],
              ['Counter frequency', 'Counter(lst)', 'HashMap + getOrDefault', 'O(n) build, O(1) query']
            ]
          }
        },
        {
          heading: 'Space Complexity Guide',
          table: {
            headers: ['Pattern / Algorithm', 'Auxiliary Space', 'What counts'],
            rows: [
              ['Two pointers', 'O(1)', 'Only pointer indices'],
              ['Sliding window', 'O(k)', 'k = charset size or distinct elements'],
              ['Hash map solution', 'O(n)', 'Store up to n keys'],
              ['BFS', 'O(V) or O(W)', 'W = max queue width (level size)'],
              ['DFS recursion', 'O(h) or O(V)', 'h = tree height; graph = O(V) visited'],
              ['Merge sort', 'O(n)', 'Temporary merge array'],
              ['Quick sort', 'O(log n)', 'Recursion stack'],
              ['DP 1D tabulation', 'O(n)', 'DP array'],
              ['DP 2D tabulation', 'O(m·n)', 'DP table; can optimize to O(min(m,n))'],
              ['Backtracking', 'O(d)', 'd = recursion depth / path length'],
              ['Graph adjacency list', 'O(V+E)', 'Store all edges'],
              ['Union-Find', 'O(V)', 'Parent + rank arrays']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Claiming O(1) for hash map without "average":</strong> Worst case O(n) with collisions — <em>Fix:</em> say "O(1) average, O(n) worst case."',
            '<strong>Forgetting recursion stack space:</strong> DFS depth h uses O(h) stack — <em>Fix:</em> mention stack space separately from visited set.',
            '<strong>Sorting hidden in solution:</strong> `sorted(arr)` before scan makes it O(n log n), not O(n) — <em>Fix:</em> identify the dominant sort step.',
            '<strong>Nested loops on different inputs:</strong> O(n·m) is not O(n²) — <em>Fix:</em> use separate variables for each input size.',
            '<strong>Confusing best and worst case:</strong> Quick sort O(n log n) average but O(n²) worst — <em>Fix:</em> always defend worst case unless asked otherwise.',
            '<strong>Ignoring output size:</strong> Returning all subsets is O(2^n) output — <em>Fix:</em> exponential output means exponential time is unavoidable.'
          ],
          code: `# Analyze this — what's the complexity?
def solve(nums):
    nums.sort()                    # O(n log n)
    seen = set()                   # O(n) space
    for num in nums:               # O(n)
        if target - num in seen:   # O(1) avg
            return True
        seen.add(num)
    return False
# Answer: O(n log n) time, O(n) space — sort dominates`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>API rate limiting:</strong> Sliding window counter — O(1) per request with deque of timestamps.',
            '<strong>Database indexing:</strong> B-tree = O(log n) search (TreeMap analogy); hash index = O(1) (HashMap analogy).',
            '<strong>CDN cache eviction:</strong> LRU = LinkedHashMap pattern — O(1) get/put/evict.',
            '<strong>Search autocomplete:</strong> Trie for prefix → O(m) lookup, m = prefix length.',
            '<strong>Social graph:</strong> BFS for degrees of separation — O(V+E) with adjacency list.',
            '<strong>ML inference:</strong> Top-k recommendations with heap — O(n log k) vs O(n log n) full sort.'
          ]
        },
        {
          heading: 'Interview Tips & Final Checklist',
          list: [
            '<strong>Before coding:</strong> State brute force complexity → optimized approach → final time AND space.',
            '<strong>Pattern first:</strong> Name the pattern (sliding window, BFS, DP) — then complexity follows predictably.',
            '<strong>Constraints matter:</strong> "n up to 10⁵" → need O(n log n) or better. "n up to 20" → backtracking OK.',
            '<strong>Trade-off proactively:</strong> "Hash map gives O(n) time but O(n) space; two pointers give O(n) time O(1) space but needs sorted input."',
            '<strong>Draw the table:</strong> For DP, fill 3×3 of the memo table on the whiteboard — proves you understand, not just memorized.',
            '<strong>Know your sort:</strong> Python uses TimSort O(n log n). Java Arrays.sort uses dual-pivot quicksort for primitives, TimSort for objects.',
            '<strong>Module 5 summary:</strong> Python stdlib (deque, Counter, defaultdict, heapq) + Java Collections (ArrayList, HashMap, TreeMap, PQ) + 7 interview patterns + ML structures + this cheat sheet = interview-ready.',
            `Q1: n=500,000, algorithm is O(n²). Will it pass?
Ans: No. n² = 2.5×10¹¹ operations — far beyond 10⁸ budget. Need O(n log n) or O(n).`,
            `Q2: When is O(n) extra space unacceptable?
Ans: When input is streamed (unknown/infinite size) or memory-constrained (embedded). Prefer O(1) two-pointer or in-place algorithms.`,
            `Q3: Sorting 10 integers vs 10 million — same algorithm?
Ans: Same Big-O O(n log n), but insertion sort wins for tiny n (low constant factor, cache-friendly). TimSort adapts — O(n) on nearly sorted data.`
          ]
        }
      ]
    }
  }
};
