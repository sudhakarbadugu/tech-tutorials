export const codingQuestions = {
  questions: [
    {
      question: 'Sort an array with optimal time complexity?',
      answer: `<p>Most efficient general-purpose sorting algorithms run in <strong>O(n log n)</strong> time. Merge Sort, Heap Sort, and TimSort (Java's <code>Arrays.sort()</code> for objects) are all O(n log n) with different trade-offs.</p>

<strong>Comparison Table:</strong>
<table>
  <tr><th>Algorithm</th><th>Time</th><th>Space</th><th>Stable</th><th>Use Case</th></tr>
  <tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td><td>Linked lists, external sort</td></tr>
  <tr><td>Quick Sort</td><td>O(n log n) avg</td><td>O(log n)</td><td>No</td><td>In-place, cache-friendly</td></tr>
  <tr><td>Heap Sort</td><td>O(n log n)</td><td>O(1)</td><td>No</td><td>Memory-constrained</td></tr>
  <tr><td>TimSort</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td><td>Java/Python built-in</td></tr>
</table>

<strong>Java Implementation — Merge Sort:</strong>
<pre ngnonbindable=""><code class="language-java">void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1, n2 = right - mid;
    int[] L = new int[n1], R = new int[n2];
    System.arraycopy(arr, left, L, 0, n1);
    System.arraycopy(arr, mid + 1, R, 0, n2);
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}</code></pre>

<strong>Python — One-liner with TimSort:</strong>
<pre><code>nums.sort()  # O(n log n), in-place, stable (Timsort)</code></pre>

<strong>Quick Sort (In-Place):</strong>
<pre ngnonbindable=""><code class="language-java">void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int[] arr, int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) swap(arr, ++i, j);
    }
    swap(arr, i + 1, high);
    return i + 1;
}</code></pre>

<strong>Interview Tip:</strong> If the data is integers in a small range, Counting Sort or Radix Sort can achieve <strong>O(n)</strong> time.</p>`,
      difficulty: 'Beginner',
      tags: ['Arrays', 'Sorting', 'Algorithms']
    },
    {
      question: 'Count duplicate elements in an array?',
      answer: `<p>The optimal approach uses a <strong>HashMap</strong> to count occurrences in a single pass: <strong>O(n) time, O(n) space</strong>.</p>

<strong>Java — HashMap Approach:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.*;

public class DuplicateCount {
    public static Map<Integer, Integer> countDuplicates(int[] nums) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : nums) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }
        return counts;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 3, 4};
        Map<Integer, Integer> result = countDuplicates(nums);
        result.forEach((k, v) -> System.out.println(k + " → " + v + " times"));
    }
}</code></pre>

<strong>Python — Using collections.Counter:</strong>
<pre><code>from collections import Counter

def count_duplicates(nums):
    return dict(Counter(nums))

# Alternative: filter only duplicates
def find_duplicates(nums):
    counts = Counter(nums)
    return {k: v for k, v in counts.items() if v > 1}</code></pre>

<strong>Variations:</strong>
<ul>
  <li><strong>Only return elements that appear more than once:</strong> Filter the map for values > 1.</li>
  <li><strong>Sorted order:</strong> Use a <code>TreeMap</code> in Java or sort in Python.</li>
  <li><strong>Space O(1) for 1..n range:</strong> Use the array index as a hash (negative marking trick), but this mutates the input.</li>
</ul>

<strong>Complexity:</strong>
<table>
  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>
  <tr><td>HashMap / Counter</td><td>O(n)</td><td>O(n)</td></tr>
  <tr><td>Nested loops (brute force)</td><td>O(n²)</td><td>O(1)</td></tr>
  <tr><td>Sort + scan</td><td>O(n log n)</td><td>O(1) or O(n)</td></tr>
</table>

<strong>Gotcha:</strong> Using <code>getOrDefault()</code> (Java 8+) is cleaner than manual <code>containsKey()</code> checks.</p>`,
      difficulty: 'Beginner',
      tags: ['HashMap', 'Arrays', 'Frequency Count']
    },
    {
      question: 'Remove duplicates from an array while preserving order?',
      answer: `<p>To remove duplicates and keep the first occurrence order, use a <strong>LinkedHashSet</strong> (Java) or <code>dict.fromkeys()</code> (Python 3.7+).</p>

<strong>Java — LinkedHashSet:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.*;

public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] nums) {
        Set<Integer> seen = new LinkedHashSet<>();
        for (int num : nums) seen.add(num);
        return seen.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 3, 1, 4};
        System.out.println(Arrays.toString(removeDuplicates(nums)));
        // Output: [1, 2, 3, 4]
    }
}</code></pre>

<strong>Python — Ordered preserve:</strong>
<pre><code>def remove_duplicates(nums):
    return list(dict.fromkeys(nums))  # O(n), preserves order

# Alternative using set (loses order)
def remove_duplicates_fast(nums):
    return list(set(nums))</code></pre>

<strong>Two-Pointer In-Place (sorted input):</strong>
<pre ngnonbindable=""><code class="language-java">public int removeDuplicatesInPlace(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1;  // new length
}</code></pre>

<strong>Key Differences:</strong>
<table>
  <tr><th>Scenario</th><th>Best Approach</th></tr>
  <tr><td>Preserve order, any input</td><td>LinkedHashSet / dict.fromkeys</td></tr>
  <tr><td>Sorted array, in-place</td><td>Two-pointer (LeetCode 26)</td></tr>
  <tr><td>Unsorted, don't care about order</td><td>HashSet</td></tr>
</table>

<strong>LeetCode:</strong> This is essentially <strong>LeetCode 26. Remove Duplicates from Sorted Array</strong>.</p>`,
      difficulty: 'Beginner',
      tags: ['Arrays', 'Set', 'Two Pointers']
    },
    {
      question: 'Group anagrams from an array of strings?',
      answer: `<p>Anagrams are words with the same character frequencies. The standard solution groups words by their <strong>sorted character sequence</strong> as a key in a HashMap: <strong>O(N × K log K)</strong> where N = number of words, K = max length.</p>

<strong>Java — HashMap with Sorted Key:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.*;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        groupAnagrams(words).forEach(System.out::println);
        // [eat, tea, ate]
        // [tan, nat]
        // [bat]
    }
}</code></pre>

<strong>Optimized — Character Count Key (O(N × K)):</strong>
<pre ngnonbindable=""><code class="language-java">String getKey(String s) {
    int[] count = new int[26];
    for (char c : s.toCharArray()) count[c - 'a']++;
    return Arrays.toString(count);  // e.g., "[1,0,0,0,1,...]"
}</code></pre>

<strong>Python:</strong>
<pre><code>from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())</code></pre>

<strong>LeetCode:</strong> <strong>49. Group Anagrams</strong> — Medium. The optimized character-count version is preferred for interviews since it's O(N × K) instead of O(N × K log K).</p>`,
      difficulty: 'Intermediate',
      tags: ['HashMap', 'Strings', 'Sorting']
    },
    {
      question: 'Reverse nodes in pairs in a linked list?',
      answer: `<p>This is the classic <strong>"Swap Nodes in Pairs"</strong> problem (LeetCode 24). We reverse every two adjacent nodes and connect the groups.</p>

<strong>Java — Iterative Solution:</strong>
<pre ngnonbindable=""><code class="language-java">class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class SwapPairs {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;

        while (prev.next != null && prev.next.next != null) {
            ListNode first = prev.next;
            ListNode second = first.next;

            // Swap
            first.next = second.next;
            second.next = first;
            prev.next = second;

            // Move prev forward by 2
            prev = first;
        }
        return dummy.next;
    }
}</code></pre>

<strong>Recursive (elegant but O(n) stack space):</strong>
<pre ngnonbindable=""><code class="language-java">public ListNode swapPairsRecursive(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode second = head.next;
    head.next = swapPairsRecursive(second.next);
    second.next = head;
    return second;
}</code></pre>

<strong>Complexity:</strong>
<table>
  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>
  <tr><td>Iterative</td><td>O(n)</td><td>O(1)</td></tr>
  <tr><td>Recursive</td><td>O(n)</td><td>O(n) — call stack</td></tr>
</table>

<strong>Edge Cases:</strong>
<ul>
  <li>Empty list or single node → return as-is</li>
  <li>Odd number of nodes → last node stays in place</li>
</ul>

<strong>Follow-up:</strong> Generalize to "Reverse Nodes in k-Group" (LeetCode 25 — Hard).</p>`,
      difficulty: 'Intermediate',
      tags: ['Linked List', 'Two Pointers', 'Recursion']
    },
    {
      question: 'Find the second maximum element in an array?',
      answer: `<p>Find the second largest in a <strong>single pass</strong>: <strong>O(n) time, O(1) space</strong>. Handle edge cases like all equal elements or arrays with fewer than 2 distinct values.</p>

<strong>Java — Single Pass:</strong>
<pre ngnonbindable=""><code class="language-java">public static int findSecondMax(int[] nums) {
    if (nums == null || nums.length < 2) {
        throw new IllegalArgumentException("Array needs at least 2 elements");
    }

    int max = Integer.MIN_VALUE;
    int secondMax = Integer.MIN_VALUE;

    for (int num : nums) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num != max) {
            secondMax = num;
        }
    }

    if (secondMax == Integer.MIN_VALUE) {
        throw new IllegalArgumentException("No second distinct maximum found");
    }
    return secondMax;
}</code></pre>

<strong>Python:</strong>
<pre><code>def second_max(nums):
    if len(nums) < 2:
        raise ValueError("Need at least 2 elements")
    first = second = float('-inf')
    for num in nums:
        if num > first:
            second, first = first, num
        elif first > num > second:
            second = num
    if second == float('-inf'):
        raise ValueError("No second distinct maximum")
    return second</code></pre>

<strong>Alternative (less efficient but clean):</strong>
<pre><code>def second_max_sort(nums):
    unique = list(set(nums))
    if len(unique) < 2:
        raise ValueError("Need at least 2 distinct values")
    unique.sort()
    return unique[-2]  # O(n log n)</code></pre>

<strong>Edge Cases:</strong>
<ul>
  <li><code>[5, 5, 5]</code> → No second max (all equal)</li>
  <li><code>[1, 2]</code> → Return 1</li>
  <li><code>[-5, -2, -10]</code> → Return -5 (works with negatives)</li>
</ul>

<strong>Gotcha:</strong> Initializing with <code>Integer.MIN_VALUE</code> fails if the array contains that exact value. For production code, use <code>OptionalInt</code> or a null sentinel approach.</p>`,
      difficulty: 'Beginner',
      tags: ['Arrays', 'Single Pass', 'Edge Cases']
    },
    {
      question: 'What data structures are used for database indexing?',
      answer: `<p>Databases use different index structures depending on the query patterns and data characteristics.</p>

<strong>Primary Index Structures:</strong>
<table>
  <tr><th>Data Structure</th><th>Best For</th><th>Time Complexity</th><th>Examples</th></tr>
  <tr><td><strong>B-Tree / B+ Tree</strong></td><td>Range queries, ordered scans</td><td>O(log n) search/insert/delete</td><td>MySQL InnoDB, PostgreSQL</td></tr>
  <tr><td><strong>Hash Table</strong></td><td>Exact-match lookups</td><td>O(1) average</td><td>MySQL MEMORY engine, Redis</td></tr>
  <tr><td><strong>Bitmap Index</strong></td><td>Low cardinality columns</td><td>Fast boolean operations</td><td>Oracle, data warehouses</td></tr>
  <tr><td><strong>GiST / GIN</strong></td><td>Full-text, JSON, arrays</td><td>Variable</td><td>PostgreSQL</td></tr>
  <tr><td><strong>LSM Tree</strong></td><td>High write throughput</td><td>O(log n) amortized</td><td>Cassandra, RocksDB</td></tr>
</table>

<strong>Why B+ Trees for Relational DBs?</strong>
<ul>
  <li>Balanced tree — all leaf nodes at same depth → predictable performance</li>
  <li>Leaf nodes linked → fast range scans (<code>BETWEEN</code>, <code>ORDER BY</code>)</li>
  <li>Nodes sized to disk block (4KB/8KB) → minimal I/O</li>
  <li>Non-leaf nodes store only keys → high fanout, shallow tree</li>
</ul>

<strong>B+ Tree Structure:</strong>
<pre>
       [10 | 30 | 50]
      /     |     \
   [5,10] [20,30] [40,50,60]  ← Leaf nodes (contain actual data pointers)
    ↓        ↓         ↓
   (linked for fast range scans)
</pre>

<strong>When Hash Indexes Fail:</strong>
<ul>
  <li>Cannot support range queries (<code>WHERE age > 25</code>)</li>
  <li>Cannot support <code>ORDER BY</code></li>
  <li>Hash collisions degrade performance</li>
</ul>

<strong>Interview Tip:</strong> MySQL InnoDB uses clustered B+ Tree indexes where leaf nodes contain the actual row data. Secondary indexes store primary key references, requiring a second lookup ("index merge" or "key lookup").</p>`,
      difficulty: 'Intermediate',
      tags: ['Database', 'B-Tree', 'Hash Table', 'Indexing']
    },
    {
      question: 'Find the longest substring without repeating characters?',
      answer: `<p>Use the <strong>sliding window</strong> technique with a HashMap to track character indices: <strong>O(n) time, O(min(n, m)) space</strong> where m is the charset size.</p>

<strong>Java — Sliding Window:</strong>
<pre ngnonbindable=""><code class="language-java">public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLen = 0, left = 0;

    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (map.containsKey(c) && map.get(c) >= left) {
            left = map.get(c) + 1;  // Jump past the duplicate
        }
        map.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}</code></pre>

<strong>Python:</strong>
<pre><code>def length_of_longest_substring(s: str) -> int:
    char_index = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        char_index[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len</code></pre>

<strong>ASCII Optimization (fixed 128-char array):</strong>
<pre ngnonbindable=""><code class="language-java">public int lengthOfLongestSubstringFast(String s) {
    int[] index = new int[128];  // ASCII
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        left = Math.max(left, index[c]);
        maxLen = Math.max(maxLen, right - left + 1);
        index[c] = right + 1;  // Store next valid start position
    }
    return maxLen;
}</code></pre>

<strong>Walkthrough for "abcabcbb":</strong>
<table>
  <tr><th>right</th><th>char</th><th>left</th><th>window</th><th>maxLen</th></tr>
  <tr><td>0</td><td>a</td><td>0</td><td>"a"</td><td>1</td></tr>
  <tr><td>1</td><td>b</td><td>0</td><td>"ab"</td><td>2</td></tr>
  <tr><td>2</td><td>c</td><td>0</td><td>"abc"</td><td>3</td></tr>
  <tr><td>3</td><td>a</td><td>1</td><td>"bca"</td><td>3</td></tr>
  <tr><td>6</td><td>b</td><td>5</td><td>"cb"</td><td>3</td></tr>
</table>

<strong>LeetCode:</strong> <strong>3. Longest Substring Without Repeating Characters</strong> — Medium.</p>`,
      difficulty: 'Intermediate',
      tags: ['Sliding Window', 'HashMap', 'Strings']
    },
    {
      question: 'Check if a linked list has a cycle?',
      answer: `<p>Use <strong>Floyd's Cycle-Finding Algorithm</strong> (Tortoise and Hare): two pointers, slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle. <strong>O(n) time, O(1) space</strong>.</p>

<strong>Java — Floyd's Algorithm:</strong>
<pre ngnonbindable=""><code class="language-java">public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head, fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;        // 1 step
        fast = fast.next.next;   // 2 steps
        if (slow == fast) return true;  // Cycle detected
    }
    return false;  // Fast reached end
}</code></pre>

<strong>Find the start of the cycle (if present):</strong>
<pre ngnonbindable=""><code class="language-java">public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;  // Meeting point inside cycle
    }
    if (fast == null || fast.next == null) return null;

    // Reset slow to head, keep fast at meeting point
    // Both now move 1 step — they meet at cycle start
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;  // Cycle start node
}</code></pre>

<strong>Why does the second phase work?</strong>
<ul>
  <li>Let distance from head to cycle start = F</li>
  <li>Let distance from cycle start to meeting point = M</li>
  <li>Let cycle length = C</li>
  <li>When slow and fast meet: slow traveled F + M, fast traveled F + M + kC</li>
  <li>Since fast is 2× speed: 2(F + M) = F + M + kC → F + M = kC → F = kC - M</li>
  <li>So head-to-start distance equals meeting-point-to-start (mod C)</li>
</ul>

<strong>LeetCode:</strong> <strong>141. Linked List Cycle</strong> (Easy) and <strong>142. Linked List Cycle II</strong> (Medium).</p>`,
      difficulty: 'Intermediate',
      tags: ['Linked List', 'Two Pointers', 'Cycle Detection']
    },
    {
      question: 'Implement a LRU (Least Recently Used) Cache?',
      answer: `<p>LRU Cache must support <code>get</code> and <code>put</code> in <strong>O(1)</strong> time. This requires a <strong>HashMap + Doubly Linked List</strong> combination.</p>

<strong>Java — HashMap + DoublyLinkedList:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.HashMap;
import java.util.Map;

class LRUCache {
    private final int capacity;
    private final Map<Integer, Node> map;
    private final Node head, tail;  // Dummy nodes

    class Node {
        int key, val;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        insertToFront(node);  // Mark as recently used
        return node.val;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        if (map.size() == capacity) {
            map.remove(tail.prev.key);  // Evict LRU
            remove(tail.prev);
        }
        Node node = new Node(key, value);
        map.put(key, node);
        insertToFront(node);
    }

    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void insertToFront(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }
}</code></pre>

<strong>Python — Using OrderedDict:</strong>
<pre><code>from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)  # Mark as recently used
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove LRU</code></pre>

<strong>Complexity:</strong>
<table>
  <tr><th>Operation</th><th>Time</th><th>Space</th></tr>
  <tr><td>get</td><td>O(1)</td><td>O(capacity)</td></tr>
  <tr><td>put</td><td>O(1)</td><td>O(capacity)</td></tr>
</table>

<strong>LeetCode:</strong> <strong>146. LRU Cache</strong> — Medium. A very common system design + coding interview question.</p>`,
      difficulty: 'Intermediate',
      tags: ['HashMap', 'Linked List', 'Design', 'Cache']
    },
    {
      question: 'Find the missing number in an array containing 0..n with one missing?',
      answer: `<p>Given an array of size n containing numbers from <code>0</code> to <code>n</code> with exactly one missing, find the missing number. Multiple approaches exist with different trade-offs.</p>

<strong>Approach 1: Mathematical (Sum Formula) — O(n) time, O(1) space</strong>
<pre ngnonbindable=""><code class="language-java">public int missingNumber(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;  // Sum of 0..n
    int actualSum = 0;
    for (int num : nums) actualSum += num;
    return expectedSum - actualSum;
}</code></pre>

<strong>Approach 2: XOR — O(n) time, O(1) space, no overflow risk</strong>
<pre ngnonbindable=""><code class="language-java">public int missingNumberXOR(int[] nums) {
    int xor = 0;
    int n = nums.length;
    for (int i = 0; i <= n; i++) xor ^= i;
    for (int num : nums) xor ^= num;
    return xor;  // Only the missing number remains
}</code></pre>

<strong>Why XOR works:</strong> <code>a ^ a = 0</code> and <code>a ^ 0 = a</code>. XORing all numbers from 0..n and then XORing all array elements cancels out everything except the missing number.

<strong>Python:</strong>
<pre><code>def missing_number(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)

# XOR version (handles large n without overflow)
def missing_number_xor(nums):
    missing = len(nums)
    for i, num in enumerate(nums):
        missing ^= i ^ num
    return missing</code></pre>

<strong>Comparison:</strong>
<table>
  <tr><th>Approach</th><th>Time</th><th>Space</th><th>Pros</th><th>Cons</th></tr>
  <tr><td>Sum Formula</td><td>O(n)</td><td>O(1)</td><td>Simple</td><td>Integer overflow for large n</td></tr>
  <tr><td>XOR</td><td>O(n)</td><td>O(1)</td><td>No overflow</td><td>Less intuitive</td></tr>
  <tr><td>HashSet</td><td>O(n)</td><td>O(n)</td><td>Easy</td><td>Extra space</td></tr>
  <tr><td>Sort + scan</td><td>O(n log n)</td><td>O(1)</td><td>Naive</td><td>Slower</td></tr>
</table>

<strong>LeetCode:</strong> <strong>268. Missing Number</strong> — Easy.</p>`,
      difficulty: 'Beginner',
      tags: ['Arrays', 'Math', 'Bit Manipulation', 'XOR']
    },
    {
      question: 'Reverse a binary tree (mirror/invert)?',
      answer: `<p>Invert a binary tree by swapping every node's left and right children recursively or iteratively.</p>

<strong>Recursive (DFS) — O(n) time, O(h) space:</strong>
<pre ngnonbindable=""><code class="language-java">class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public TreeNode invertTree(TreeNode root) {
    if (root == null) return null;
    TreeNode temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
}</code></pre>

<strong>Iterative (BFS with Queue):</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.LinkedList;
import java.util.Queue;

public TreeNode invertTreeBFS(TreeNode root) {
    if (root == null) return null;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
    return root;
}</code></pre>

<strong>Before & After:</strong>
<pre>
     4              4
    / \     →      / \
   2   7          7   2
  / \ / \        / \ / \
 1  3 6  9      9  6 3  1
</pre>

<strong>LeetCode:</strong> <strong>226. Invert Binary Tree</strong> — Easy. Famous as the question that Max Howell (Homebrew creator) failed at Google.</p>`,
      difficulty: 'Beginner',
      tags: ['Binary Tree', 'DFS', 'BFS', 'Recursion']
    },
    {
      question: 'Merge two sorted arrays in-place?',
      answer: `<p>Merge two sorted arrays where the first array has enough buffer space at the end. Fill from the back to avoid overwriting.</p>

<strong>Java — Fill from the End:</strong>
<pre ngnonbindable=""><code class="language-java">public void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1;        // Last element of actual data in nums1
    int j = n - 1;        // Last element of nums2
    int k = m + n - 1;    // End of nums1 (total capacity)

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}</code></pre>

<strong>Walkthrough:</strong> nums1 = [1,2,3,0,0,0], m=3; nums2 = [2,5,6], n=3
<table>
  <tr><th>Step</th><th>i</th><th>j</th><th>k</th><th>Action</th><th>nums1</th></tr>
  <tr><td>1</td><td>2</td><td>2</td><td>5</td><td>3 vs 6 → take 6</td><td>[1,2,3,0,0,6]</td></tr>
  <tr><td>2</td><td>2</td><td>1</td><td>4</td><td>3 vs 5 → take 5</td><td>[1,2,3,0,5,6]</td></tr>
  <tr><td>3</td><td>2</td><td>0</td><td>3</td><td>3 vs 2 → take 3</td><td>[1,2,3,3,5,6]</td></tr>
  <tr><td>4</td><td>1</td><td>0</td><td>2</td><td>2 vs 2 → take 2</td><td>[1,2,2,3,5,6]</td></tr>
  <tr><td>5</td><td>1</td><td>-1</td><td>1</td><td>j < 0, done</td><td>[1,2,2,3,5,6]</td></tr>
</table>

<strong>Complexity:</strong> O(m + n) time, O(1) extra space.

<strong>LeetCode:</strong> <strong>88. Merge Sorted Array</strong> — Easy.</p>`,
      difficulty: 'Beginner',
      tags: ['Arrays', 'Two Pointers', 'In-Place']
    },
    {
      question: 'Valid parentheses (balanced brackets)?',
      answer: `<p>Use a <strong>stack</strong> to check if brackets are properly balanced and nested. <strong>O(n) time, O(n) space</strong>.</p>

<strong>Java — Stack Approach:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.*;

public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}</code></pre>

<strong>Optimized — Early Termination:</strong>
<pre ngnonbindable=""><code class="language-java">public boolean isValidOptimized(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}</code></pre>

<strong>Python:</strong>
<pre><code>def is_valid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack</code></pre>

<strong>Edge Cases:</strong>
<ul>
  <li><code>"(("</code> → False (unclosed)</li>
  <li><code>")("</code> → False (wrong order)</li>
  <li><code>"()[]{}"</code> → True</li>
  <li><code>"([)]"</code> → False (crossed)</li>
</ul>

<strong>LeetCode:</strong> <strong>20. Valid Parentheses</strong> — Easy.</p>`,
      difficulty: 'Beginner',
      tags: ['Stack', 'Strings']
    }
  ]
};
