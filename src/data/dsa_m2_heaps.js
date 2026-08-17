// DSA Module 2: Heaps & Priority Queues (Linked-List-style tutorial)
export const heapsTopic = {
  title: 'Heaps & Priority Queues',
  subtitle: 'Complete binary trees in arrays — O(1) peek extreme, O(log n) push/pop',
  sections: [
    {
      heading: 'What is a Heap?',
      text: 'A heap is a <strong>complete binary tree</strong> that satisfies the heap property: in a <em>min-heap</em>, every parent is ≤ its children; in a <em>max-heap</em>, every parent is ≥ its children. Because the tree is complete, it packs perfectly into an array with parent/child index arithmetic — no node pointers required.',
      list: [
        '<strong>Min-heap:</strong> Root is the minimum; used for "next smallest" / Dijkstra / merge k lists.',
        '<strong>Max-heap:</strong> Root is the maximum; used for "top score" / heap-sort variants.',
        '<strong>Complete shape:</strong> Levels filled left to right — enables array storage.',
        '<strong>Not sorted:</strong> Only the root is guaranteed extreme; inorder is not sorted (unlike BST).',
        '<strong>Priority queue ADT:</strong> Heap is the usual implementation of insert + extract-min/max.'
      ]
    },
    {
      heading: 'Components of a Heap',
      list: [
        '<strong>Array storage:</strong> index 0 or 1 based; children of i at 2i+1 and 2i+2 (0-based).',
        '<strong>Heap size:</strong> Number of live elements (may be less than array capacity).',
        '<strong>Sift up (bubble up):</strong> After insert at end, swap with parent while heap property is violated.',
        '<strong>Sift down (heapify):</strong> After replacing root, push the hole down by swapping with the better child.',
        '<strong>Comparator:</strong> Defines min vs max (or custom priority).'
      ]
    },
    {
      heading: 'Array Index Mapping',
      diagram: {
        caption: '0-based: parent (i-1)//2, left 2i+1, right 2i+2',
        chart: `flowchart TD
    I0["0: root"] --> I1["1"]
    I0 --> I2["2"]
    I1 --> I3["3"]
    I1 --> I4["4"]
    I2 --> I5["5"]
    I2 --> I6["6"]
    style I0 fill:#9b59b6,color:#fff`
      }
    },
    {
      text: 'Array view of that tree: <code>[root, 1, 2, 3, 4, 5, 6]</code>. Completeness means no holes in the array prefix of length size.'
    },
    {
      heading: 'Example Min-Heap',
      diagram: {
        caption: 'Min-heap values — parent ≤ children, root is global min',
        chart: `flowchart TD
    R["1"] --> A["3"]
    R --> B["2"]
    A --> C["7"]
    A --> D["6"]
    B --> E["4"]
    B --> F["5"]
    style R fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'How Push and Pop Work',
      text: 'Push appends then sifts up. Pop replaces root with last element, shrinks size, then sifts down.'
    },
    {
      heading: 'Operation: Push (Insert)',
      text: '<strong>What it does:</strong> Add a value while restoring heap order.<br/><strong>Steps:</strong> append at size; while parent is worse, swap; stop at root.<br/><strong>Complexity:</strong> O(log n).',
      diagram: {
        caption: 'Push 0 into min-heap — bubble up to root',
        chart: `flowchart LR
    A["append 0 at leaf"] --> B["swap with parent"]
    B --> C["swap again"]
    C --> D["0 is new root"]
    style D fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation: Pop / Extract-Min',
      text: '<strong>What it does:</strong> Remove and return the root extreme.<br/><strong>Steps:</strong> save root; move last into root; sift down choosing the smaller (min-heap) child.<br/><strong>Complexity:</strong> O(log n). Peek alone is O(1).'
    },
    {
      heading: 'Operation: Heapify (Build Heap)',
      text: '<strong>What it does:</strong> Turn an arbitrary array into a heap in-place.<br/><strong>Best efficiency:</strong> O(n) by sifting down from the last internal node to the root — faster than n pushes (O(n log n)).'
    },
    {
      heading: 'Operation: Peek',
      text: '<strong>What it does:</strong> Read min/max without removal.<br/><strong>Best efficiency:</strong> O(1) — always index 0 (or 1).'
    },
    {
      heading: 'Heap vs BST vs Sorted Array',
      table: {
        headers: ['Need', 'Best structure'],
        rows: [
          ['Repeated extract-min + insert', 'Binary heap / priority queue'],
          ['Search arbitrary key', 'Hash set/map or BST'],
          ['Sorted iteration of all keys', 'BST or sort array'],
          ['Static min queries only', 'Just track min variable'],
          ['Dijkstra frontier', 'Min-heap of (dist, node)']
        ]
      }
    },
    {
      heading: 'Advantages',
      list: [
        '<strong>O(1) access to extreme</strong> with O(log n) updates — ideal priority queue.',
        '<strong>Array packing:</strong> Excellent cache behavior vs pointer trees.',
        '<strong>O(n) build:</strong> Heapify is linear — enables heap sort and fast initialization.',
        '<strong>Simple invariants:</strong> Easier to implement than balanced BSTs.',
        '<strong>Language support:</strong> <code>heapq</code>, <code>PriorityQueue</code>, <code>PriorityQueue</code> in Java.'
      ]
    },
    {
      heading: 'Disadvantages',
      list: [
        '<strong>No efficient arbitrary search/delete by value</strong> without handle maps (O(n) scan).',
        '<strong>Not sorted structure:</strong> k-th smallest needs more work (or selection algorithms).',
        '<strong>Decrease-key</strong> is awkward in binary heaps without index tracking (Fibonacci heaps are theoretical).',
        '<strong>Only parent-child order</strong> — siblings are unordered.',
        '<strong>Max+min together:</strong> Need two heaps (median maintenance pattern) or a different structure.'
      ]
    },
    {
      heading: 'Python & Java Priority Queues',
      text: 'In practice you rarely hand-code sift unless asked. Know the library APIs cold.',
      list: [
        '<strong>Python heapq:</strong> Min-heap on a list; <code>heappush</code>, <code>heappop</code>, <code>heapify</code>. For max-heap, push negated values (for numbers).',
        '<strong>Java PriorityQueue:</strong> Min-heap by default; pass <code>Comparator.reverseOrder()</code> for max-heap.',
        '<strong>Tuples / pairs:</strong> Order by first element then second — useful for (priority, payload).',
        '<strong>Stability:</strong> Equal priorities are not FIFO unless you add a tie-breaking counter.'
      ]
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Min-heap with heapq + manual sift sketch',
        code: `import heapq
from typing import List

# ── Library min-heap ─────────────────────────────────────────────
h: List[int] = []
for x in [5, 3, 8, 1, 2]:
    heapq.heappush(h, x)
print("peek", h[0])
print("pops", [heapq.heappop(h) for _ in range(len(h))])

# ── Max-heap via negation ────────────────────────────────────────
max_h: List[int] = []
for x in [5, 3, 8, 1]:
    heapq.heappush(max_h, -x)
print("max", -max_h[0])

# ── Build heap O(n) ──────────────────────────────────────────────
arr = [9, 4, 7, 1, -2, 6, 5]
heapq.heapify(arr)
print("heapified", arr)

# ── K largest ────────────────────────────────────────────────────
print("3 largest", heapq.nlargest(3, [3, 1, 4, 1, 5, 9, 2, 6]))

# ── Merge k sorted lists (pattern) ───────────────────────────────
def merge_k(lists: List[List[int]]) -> List[int]:
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    out = []
    while heap:
        val, li, idx = heapq.heappop(heap)
        out.append(val)
        if idx + 1 < len(lists[li]):
            heapq.heappush(heap, (lists[li][idx + 1], li, idx + 1))
    return out

print(merge_k([[1, 4, 7], [2, 5], [3, 6, 9]]))`,
        output: `peek 1
pops [1, 2, 3, 5, 8]
max 8
heapified [-2, 1, 5, 4, 9, 6, 7]
3 largest [9, 6, 5]
[1, 2, 3, 4, 5, 6, 7, 9]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'PriorityQueue min and max heaps',
        code: `import java.util.*;

public class HeapDemo {
    public static void main(String[] args) {
        PriorityQueue<Integer> min = new PriorityQueue<>();
        for (int x : new int[]{5, 3, 8, 1, 2}) min.offer(x);
        System.out.println("peek " + min.peek());
        while (!min.isEmpty()) System.out.print(min.poll() + " ");
        System.out.println();

        PriorityQueue<Integer> max = new PriorityQueue<>(Comparator.reverseOrder());
        for (int x : new int[]{5, 3, 8, 1}) max.offer(x);
        System.out.println("max " + max.peek());

        // Dijkstra-style pair: [dist, node]
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, 1});
        pq.offer(new int[]{2, 3});
        System.out.println(Arrays.toString(pq.poll()));
    }
}`,
        output: `peek 1
1 2 3 5 8 
max 8
[0, 1]`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Peek min/max', 'O(1)', 'O(1)', 'Root of the heap'],
          ['Push', 'O(log n)', 'O(1)', 'Sift up'],
          ['Pop / extract-min', 'O(log n)', 'O(1)', 'Sift down'],
          ['Heapify build', 'O(n)', 'O(1) extra', 'Better than n × push'],
          ['Heap sort', 'O(n log n)', 'O(1) extra', 'Build + n extract'],
          ['Delete arbitrary value', 'O(n)', 'O(1)', 'Scan unless you store indices'],
          ['Merge k sorted (n total)', 'O(n log k)', 'O(k)', 'Heap of size k']
        ]
      },
      note: 'Interview tip: for "top K" say "min-heap of size K" (keep K largest) or "max-heap of size K" (keep K smallest) and quote O(n log K).'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Using sort when a heap suffices</strong> — O(n log n) vs O(n log k) for top-k.',
        '<strong>Forgetting Python is min-heap only</strong> — negate for max-heap numerics; custom objects need careful ordering.',
        '<strong>Mutating heap entries in place</strong> without re-heapify — breaks the invariant.',
        '<strong>Stale Dijkstra heap entries</strong> — allow duplicates; skip when popped dist &gt; best known.',
        '<strong>1-based vs 0-based index bugs</strong> when implementing sift by hand.'
      ],
      code: `# Top-K largest with min-heap of size k
import heapq
def top_k(nums, k):
    h = []
    for x in nums:
        heapq.heappush(h, x)
        if len(h) > k:
            heapq.heappop(h)  # drop current smallest among candidates
    return h  # k largest, unordered`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      list: [
        '<strong>OS schedulers:</strong> Ready queue ordered by priority / vruntime.',
        '<strong>Dijkstra / A*:</strong> Frontier of nodes by best distance / f-score.',
        '<strong>Event-driven simulation:</strong> Next event by timestamp in a min-heap.',
        '<strong>Streaming top-K:</strong> Trending posts, top CPU processes, leaderboards partial.',
        '<strong>Huffman coding:</strong> Repeatedly merge two lowest-frequency nodes.',
        '<strong>Bandwidth / load balancing:</strong> Always assign work to the least-loaded worker (min-heap of loads).'
      ]
    },
    {
      heading: 'Top Interview Questions on Heaps',
      text: 'Eight problems. If you hear "kth", "top k", "merge k", or "running median", think heap.',
      note: 'Median stream = max-heap (lower half) + min-heap (upper half). Keep sizes balanced.'
    },
    {
      heading: 'Practice Question 1: Kth Largest Element in an Array (LeetCode 215, Medium)',
      text: '<strong>Problem:</strong> Find the kth largest element.<br/><strong>Key idea:</strong> Min-heap of size k; root is kth largest. Or QuickSelect average O(n).<br/><strong>Complexity:</strong> O(n log k) heap.',
      example: {
        title: 'Python Solution',
        code: `import heapq
def findKthLargest(nums, k):
    h = []
    for x in nums:
        heapq.heappush(h, x)
        if len(h) > k: heapq.heappop(h)
    return h[0]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Top K Frequent Elements (LeetCode 347, Medium)',
      text: '<strong>Problem:</strong> k most frequent numbers.<br/><strong>Key idea:</strong> Count with hash map; heap by frequency (or bucket sort O(n)).<br/><strong>Complexity:</strong> O(n log k).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter
import heapq
def topKFrequent(nums, k):
    return [x for x, _ in heapq.nlargest(k, Counter(nums).items(), key=lambda t: t[1])]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Merge k Sorted Lists (LeetCode 23, Hard)',
      text: '<strong>Problem:</strong> Merge k sorted linked lists into one sorted list.<br/><strong>Key idea:</strong> Min-heap of current heads (val, list_index, node).<br/><strong>Complexity:</strong> O(N log k) for N total nodes.',
      example: {
        title: 'Python Solution',
        code: `import heapq
def mergeKLists(lists):
    h = []
    for i, node in enumerate(lists):
        if node: heapq.heappush(h, (node.val, i, node))
    dummy = cur = ListNode(0)
    while h:
        val, i, node = heapq.heappop(h)
        cur.next = node; cur = cur.next
        if node.next: heapq.heappush(h, (node.next.val, i, node.next))
    return dummy.next`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Find Median from Data Stream (LeetCode 295, Hard)',
      text: '<strong>Problem:</strong> Support addNum and findMedian in a stream.<br/><strong>Key idea:</strong> Max-heap lower half + min-heap upper half; rebalance sizes.<br/><strong>Complexity:</strong> O(log n) add, O(1) median.',
      example: {
        title: 'Python Solution',
        code: `import heapq
class MedianFinder:
    def __init__(self):
        self.lo, self.hi = [], []  # max-heap (neg), min-heap
    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def findMedian(self):
        if len(self.lo) > len(self.hi): return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Last Stone Weight (LeetCode 1046, Easy)',
      text: '<strong>Problem:</strong> Smash two heaviest stones until ≤1 left.<br/><strong>Key idea:</strong> Max-heap (negated) repeatedly pop two, push difference.<br/><strong>Complexity:</strong> O(n log n).',
      example: {
        title: 'Python Solution',
        code: `import heapq
def lastStoneWeight(stones):
    h = [-s for s in stones]
    heapq.heapify(h)
    while len(h) > 1:
        a, b = -heapq.heappop(h), -heapq.heappop(h)
        if a != b: heapq.heappush(h, -(a - b))
    return -h[0] if h else 0`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: K Closest Points to Origin (LeetCode 973, Medium)',
      text: '<strong>Problem:</strong> k points with smallest distance to (0,0).<br/><strong>Key idea:</strong> Max-heap of size k by distance, or nsmallest.<br/><strong>Complexity:</strong> O(n log k).',
      example: {
        title: 'Python Solution',
        code: `import heapq
def kClosest(points, k):
    return heapq.nsmallest(k, points, key=lambda p: p[0]*p[0] + p[1]*p[1])`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Task Scheduler (LeetCode 621, Medium)',
      text: '<strong>Problem:</strong> Min time to run tasks with cooldown n between same letters.<br/><strong>Key idea:</strong> Always schedule the most frequent remaining task that is ready — max-heap of counts + cooldown queue.<br/><strong>Complexity:</strong> O(time · log 26) ≈ O(time).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter
import heapq
def leastInterval(tasks, n):
    heap = [-c for c in Counter(tasks).values()]
    heapq.heapify(heap)
    time = 0
    while heap:
        slot, tmp = n + 1, []
        while slot and heap:
            c = -heapq.heappop(heap)
            if c > 1: tmp.append(c - 1)
            time += 1; slot -= 1
        for c in tmp: heapq.heappush(heap, -c)
        if heap: time += slot  # idle
    return time`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Ugly Number II (LeetCode 264, Medium)',
      text: '<strong>Problem:</strong> nth ugly number (only prime factors 2,3,5).<br/><strong>Key idea:</strong> Min-heap generate multiples; set dedupes. DP pointers also work.<br/><strong>Complexity:</strong> O(n log n) heap approach.',
      example: {
        title: 'Python Solution',
        code: `import heapq
def nthUglyNumber(n):
    h, seen = [1], {1}
    for _ in range(n):
        x = heapq.heappop(h)
        for f in (2, 3, 5):
            y = x * f
            if y not in seen:
                seen.add(y); heapq.heappush(h, y)
    return x`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
