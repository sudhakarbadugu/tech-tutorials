// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.481Z

export const codingQuestions = {
  "questions": [
    {
      "question": "Sort an array with optimal time complexity?",
      "answer": "<p>Most efficient general-purpose sorting algorithms run in <strong>O(n log n)</strong> time. Merge Sort, Heap Sort, and TimSort (Java's <code>Arrays.sort()</code> for objects) are all O(n log n) with different trade-offs.</p>\n\n<strong>Comparison Table:</strong>\n<table>\n  <tr><th>Algorithm</th><th>Time</th><th>Space</th><th>Stable</th><th>Use Case</th></tr>\n  <tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td><td>Linked lists, external sort</td></tr>\n  <tr><td>Quick Sort</td><td>O(n log n) avg</td><td>O(log n)</td><td>No</td><td>In-place, cache-friendly</td></tr>\n  <tr><td>Heap Sort</td><td>O(n log n)</td><td>O(1)</td><td>No</td><td>Memory-constrained</td></tr>\n  <tr><td>TimSort</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td><td>Java/Python built-in</td></tr>\n</table>\n\n<strong>Java Implementation — Merge Sort:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">void mergeSort(int[] arr, int left, int right) {\n    if (left &lt; right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nvoid merge(int[] arr, int left, int mid, int right) {\n    int n1 = mid - left + 1, n2 = right - mid;\n    int[] L = new int[n1], R = new int[n2];\n    System.arraycopy(arr, left, L, 0, n1);\n    System.arraycopy(arr, mid + 1, R, 0, n2);\n    int i = 0, j = 0, k = left;\n    while (i &lt; n1 && j &lt; n2) {\n        if (L[i] &lt;= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i &lt; n1) arr[k++] = L[i++];\n    while (j &lt; n2) arr[k++] = R[j++];\n}</code></pre>\n\n<strong>Python — One-liner with TimSort:</strong>\n<pre><code>nums.sort()  # O(n log n), in-place, stable (Timsort)</code></pre>\n\n<strong>Quick Sort (In-Place):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">void quickSort(int[] arr, int low, int high) {\n    if (low &lt; high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint partition(int[] arr, int low, int high) {\n    int pivot = arr[high], i = low - 1;\n    for (int j = low; j &lt; high; j++) {\n        if (arr[j] &lt; pivot) swap(arr, ++i, j);\n    }\n    swap(arr, i + 1, high);\n    return i + 1;\n}</code></pre>\n\n<strong>Interview Tip:</strong> If the data is integers in a small range, Counting Sort or Radix Sort can achieve <strong>O(n)</strong> time.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Arrays",
        "Sorting",
        "Algorithms"
      ],
      "keyPoints": [
        "Most efficient general-purpose sorting algorithms run in O(n log n) time.",
        "Merge Sort, Heap Sort, and TimSort (Java's Arrays."
      ]
    },
    {
      "question": "Count duplicate elements in an array?",
      "answer": "<p>The optimal approach uses a <strong>HashMap</strong> to count occurrences in a single pass: <strong>O(n) time, O(n) space</strong>.</p>\n\n<strong>Java — HashMap Approach:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.*;\n\npublic class DuplicateCount {\n    public static Map&lt;Integer, Integer&gt; countDuplicates(int[] nums) {\n        Map&lt;Integer, Integer&gt; counts = new HashMap&lt;&gt;();\n        for (int num : nums) {\n            counts.put(num, counts.getOrDefault(num, 0) + 1);\n        }\n        return counts;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 3, 3, 4};\n        Map&lt;Integer, Integer&gt; result = countDuplicates(nums);\n        result.forEach((k, v) -&gt; System.out.println(k + \" → \" + v + \" times\"));\n    }\n}</code></pre>\n\n<strong>Python — Using collections.Counter:</strong>\n<pre><code>from collections import Counter\n\ndef count_duplicates(nums):\n    return dict(Counter(nums))\n\n# Alternative: filter only duplicates\ndef find_duplicates(nums):\n    counts = Counter(nums)\n    return {k: v for k, v in counts.items() if v &gt; 1}</code></pre>\n\n<strong>Variations:</strong>\n<ul>\n  <li><strong>Only return elements that appear more than once:</strong> Filter the map for values > 1.</li>\n  <li><strong>Sorted order:</strong> Use a <code>TreeMap</code> in Java or sort in Python.</li>\n  <li><strong>Space O(1) for 1..n range:</strong> Use the array index as a hash (negative marking trick), but this mutates the input.</li>\n</ul>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>HashMap / Counter</td><td>O(n)</td><td>O(n)</td></tr>\n  <tr><td>Nested loops (brute force)</td><td>O(n²)</td><td>O(1)</td></tr>\n  <tr><td>Sort + scan</td><td>O(n log n)</td><td>O(1) or O(n)</td></tr>\n</table>\n\n<strong>Gotcha:</strong> Using <code>getOrDefault()</code> (Java 8+) is cleaner than manual <code>containsKey()</code> checks.</p>",
      "difficulty": "Beginner",
      "tags": [
        "HashMap",
        "Arrays",
        "Frequency Count"
      ],
      "keyPoints": [
        "Only return elements that appear more than once: Filter the map for values > 1.",
        "Sorted order: Use a TreeMap in Java or sort in Python.",
        "Space O(1) for 1..n range: Use the array index as a hash (negative marking trick), but this mutates the input."
      ]
    },
    {
      "question": "Remove duplicates from an array while preserving order?",
      "answer": "<p>To remove duplicates and keep the first occurrence order, use a <strong>LinkedHashSet</strong> (Java) or <code>dict.fromkeys()</code> (Python 3.7+).</p>\n\n<strong>Java — LinkedHashSet:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.*;\n\npublic class RemoveDuplicates {\n    public static int[] removeDuplicates(int[] nums) {\n        Set&lt;Integer&gt; seen = new LinkedHashSet&lt;&gt;();\n        for (int num : nums) seen.add(num);\n        return seen.stream().mapToInt(Integer::intValue).toArray();\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 3, 3, 1, 4};\n        System.out.println(Arrays.toString(removeDuplicates(nums)));\n        // Output: [1, 2, 3, 4]\n    }\n}</code></pre>\n\n<strong>Python — Ordered preserve:</strong>\n<pre><code>def remove_duplicates(nums):\n    return list(dict.fromkeys(nums))  # O(n), preserves order\n\n# Alternative using set (loses order)\ndef remove_duplicates_fast(nums):\n    return list(set(nums))</code></pre>\n\n<strong>Two-Pointer In-Place (sorted input):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int removeDuplicatesInPlace(int[] nums) {\n    if (nums.length == 0) return 0;\n    int i = 0;\n    for (int j = 1; j &lt; nums.length; j++) {\n        if (nums[j] != nums[i]) {\n            nums[++i] = nums[j];\n        }\n    }\n    return i + 1;  // new length\n}</code></pre>\n\n<strong>Key Differences:</strong>\n<table>\n  <tr><th>Scenario</th><th>Best Approach</th></tr>\n  <tr><td>Preserve order, any input</td><td>LinkedHashSet / dict.fromkeys</td></tr>\n  <tr><td>Sorted array, in-place</td><td>Two-pointer (LeetCode 26)</td></tr>\n  <tr><td>Unsorted, don't care about order</td><td>HashSet</td></tr>\n</table>\n\n<strong>LeetCode:</strong> This is essentially <strong>LeetCode 26. Remove Duplicates from Sorted Array</strong>.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Arrays",
        "Set",
        "Two Pointers"
      ],
      "keyPoints": [
        "To remove duplicates and keep the first occurrence order, use a LinkedHashSet (Java) or dict.",
        "*; public class RemoveDuplicates { public static int[] removeDuplicates(int[] nums) { Set seen = new LinkedHashSet<>(); for (int num : nums) seen."
      ]
    },
    {
      "question": "Group anagrams from an array of strings?",
      "answer": "<p>Anagrams are words with the same character frequencies. The standard solution groups words by their <strong>sorted character sequence</strong> as a key in a HashMap: <strong>O(N × K log K)</strong> where N = number of words, K = max length.</p>\n\n<strong>Java — HashMap with Sorted Key:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.*;\n\npublic class GroupAnagrams {\n    public static List&lt;List&lt;String&gt;&gt; groupAnagrams(String[] words) {\n        Map&lt;String, List&lt;String&gt;&gt; map = new HashMap&lt;&gt;();\n        for (String word : words) {\n            char[] chars = word.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            map.computeIfAbsent(key, k -&gt; new ArrayList&lt;&gt;()).add(word);\n        }\n        return new ArrayList&lt;&gt;(map.values());\n    }\n\n    public static void main(String[] args) {\n        String[] words = {\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"};\n        groupAnagrams(words).forEach(System.out::println);\n        // [eat, tea, ate]\n        // [tan, nat]\n        // [bat]\n    }\n}</code></pre>\n\n<strong>Optimized — Character Count Key (O(N × K)):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">String getKey(String s) {\n    int[] count = new int[26];\n    for (char c : s.toCharArray()) count[c - 'a']++;\n    return Arrays.toString(count);  // e.g., \"[1,0,0,0,1,...]\"\n}</code></pre>\n\n<strong>Python:</strong>\n<pre><code>from collections import defaultdict\n\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for word in words:\n        key = ''.join(sorted(word))\n        groups[key].append(word)\n    return list(groups.values())</code></pre>\n\n<strong>LeetCode:</strong> <strong>49. Group Anagrams</strong> — Medium. The optimized character-count version is preferred for interviews since it's O(N × K) instead of O(N × K log K).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "HashMap",
        "Strings",
        "Sorting"
      ],
      "keyPoints": [
        "Anagrams are words with the same character frequencies.",
        "The standard solution groups words by their sorted character sequence as a key in a HashMap: O(N × K log K) where N = number of words, K = max length."
      ]
    },
    {
      "question": "Reverse nodes in pairs in a linked list?",
      "answer": "<p>This is the classic <strong>\"Swap Nodes in Pairs\"</strong> problem (LeetCode 24). We reverse every two adjacent nodes and connect the groups.</p>\n\n<strong>Java — Iterative Solution:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int val) { this.val = val; }\n}\n\npublic class SwapPairs {\n    public ListNode swapPairs(ListNode head) {\n        ListNode dummy = new ListNode(0);\n        dummy.next = head;\n        ListNode prev = dummy;\n\n        while (prev.next != null && prev.next.next != null) {\n            ListNode first = prev.next;\n            ListNode second = first.next;\n\n            // Swap\n            first.next = second.next;\n            second.next = first;\n            prev.next = second;\n\n            // Move prev forward by 2\n            prev = first;\n        }\n        return dummy.next;\n    }\n}</code></pre>\n\n<strong>Recursive (elegant but O(n) stack space):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public ListNode swapPairsRecursive(ListNode head) {\n    if (head == null || head.next == null) return head;\n    ListNode second = head.next;\n    head.next = swapPairsRecursive(second.next);\n    second.next = head;\n    return second;\n}</code></pre>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>Iterative</td><td>O(n)</td><td>O(1)</td></tr>\n  <tr><td>Recursive</td><td>O(n)</td><td>O(n) — call stack</td></tr>\n</table>\n\n<strong>Edge Cases:</strong>\n<ul>\n  <li>Empty list or single node → return as-is</li>\n  <li>Odd number of nodes → last node stays in place</li>\n</ul>\n\n<strong>Follow-up:</strong> Generalize to \"Reverse Nodes in k-Group\" (LeetCode 25 — Hard).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Linked List",
        "Two Pointers",
        "Recursion"
      ],
      "keyPoints": [
        "Empty list or single node → return as-is",
        "Odd number of nodes → last node stays in place"
      ]
    },
    {
      "question": "Find the second maximum element in an array?",
      "answer": "<p>Find the second largest in a <strong>single pass</strong>: <strong>O(n) time, O(1) space</strong>. Handle edge cases like all equal elements or arrays with fewer than 2 distinct values.</p>\n\n<strong>Java — Single Pass:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public static int findSecondMax(int[] nums) {\n    if (nums == null || nums.length &lt; 2) {\n        throw new IllegalArgumentException(\"Array needs at least 2 elements\");\n    }\n\n    int max = Integer.MIN_VALUE;\n    int secondMax = Integer.MIN_VALUE;\n\n    for (int num : nums) {\n        if (num &gt; max) {\n            secondMax = max;\n            max = num;\n        } else if (num &gt; secondMax && num != max) {\n            secondMax = num;\n        }\n    }\n\n    if (secondMax == Integer.MIN_VALUE) {\n        throw new IllegalArgumentException(\"No second distinct maximum found\");\n    }\n    return secondMax;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre><code>def second_max(nums):\n    if len(nums) &lt; 2:\n        raise ValueError(\"Need at least 2 elements\")\n    first = second = float('-inf')\n    for num in nums:\n        if num &gt; first:\n            second, first = first, num\n        elif first &gt; num &gt; second:\n            second = num\n    if second == float('-inf'):\n        raise ValueError(\"No second distinct maximum\")\n    return second</code></pre>\n\n<strong>Alternative (less efficient but clean):</strong>\n<pre><code>def second_max_sort(nums):\n    unique = list(set(nums))\n    if len(unique) &lt; 2:\n        raise ValueError(\"Need at least 2 distinct values\")\n    unique.sort()\n    return unique[-2]  # O(n log n)</code></pre>\n\n<strong>Edge Cases:</strong>\n<ul>\n  <li><code>[5, 5, 5]</code> → No second max (all equal)</li>\n  <li><code>[1, 2]</code> → Return 1</li>\n  <li><code>[-5, -2, -10]</code> → Return -5 (works with negatives)</li>\n</ul>\n\n<strong>Gotcha:</strong> Initializing with <code>Integer.MIN_VALUE</code> fails if the array contains that exact value. For production code, use <code>OptionalInt</code> or a null sentinel approach.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Arrays",
        "Single Pass",
        "Edge Cases"
      ],
      "keyPoints": [
        "[5, 5, 5] → No second max (all equal)",
        "[-5, -2, -10] → Return -5 (works with negatives)"
      ]
    },
    {
      "question": "What data structures are used for database indexing?",
      "answer": "<p>Databases use different index structures depending on the query patterns and data characteristics.</p>\n\n<strong>Primary Index Structures:</strong>\n<table>\n  <tr><th>Data Structure</th><th>Best For</th><th>Time Complexity</th><th>Examples</th></tr>\n  <tr><td><strong>B-Tree / B+ Tree</strong></td><td>Range queries, ordered scans</td><td>O(log n) search/insert/delete</td><td>MySQL InnoDB, PostgreSQL</td></tr>\n  <tr><td><strong>Hash Table</strong></td><td>Exact-match lookups</td><td>O(1) average</td><td>MySQL MEMORY engine, Redis</td></tr>\n  <tr><td><strong>Bitmap Index</strong></td><td>Low cardinality columns</td><td>Fast boolean operations</td><td>Oracle, data warehouses</td></tr>\n  <tr><td><strong>GiST / GIN</strong></td><td>Full-text, JSON, arrays</td><td>Variable</td><td>PostgreSQL</td></tr>\n  <tr><td><strong>LSM Tree</strong></td><td>High write throughput</td><td>O(log n) amortized</td><td>Cassandra, RocksDB</td></tr>\n</table>\n\n<strong>Why B+ Trees for Relational DBs?</strong>\n<ul>\n  <li>Balanced tree — all leaf nodes at same depth → predictable performance</li>\n  <li>Leaf nodes linked → fast range scans (<code>BETWEEN</code>, <code>ORDER BY</code>)</li>\n  <li>Nodes sized to disk block (4KB/8KB) → minimal I/O</li>\n  <li>Non-leaf nodes store only keys → high fanout, shallow tree</li>\n</ul>\n\n<strong>B+ Tree Structure:</strong>\n<pre>\n       [10 | 30 | 50]\n      /     |        [5,10] [20,30] [40,50,60]  ← Leaf nodes (contain actual data pointers)\n    ↓        ↓         ↓\n   (linked for fast range scans)\n</pre>\n\n<strong>When Hash Indexes Fail:</strong>\n<ul>\n  <li>Cannot support range queries (<code>WHERE age &gt; 25</code>)</li>\n  <li>Cannot support <code>ORDER BY</code></li>\n  <li>Hash collisions degrade performance</li>\n</ul>\n\n<strong>Interview Tip:</strong> MySQL InnoDB uses clustered B+ Tree indexes where leaf nodes contain the actual row data. Secondary indexes store primary key references, requiring a second lookup (\"index merge\" or \"key lookup\").</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Database",
        "B-Tree",
        "Hash Table",
        "Indexing"
      ],
      "keyPoints": [
        "Balanced tree — all leaf nodes at same depth → predictable performance",
        "Leaf nodes linked → fast range scans ( BETWEEN , ORDER BY )",
        "Nodes sized to disk block (4KB/8KB) → minimal I/O"
      ]
    },
    {
      "question": "Find the longest substring without repeating characters?",
      "answer": "<p>Use the <strong>sliding window</strong> technique with a HashMap to track character indices: <strong>O(n) time, O(min(n, m)) space</strong> where m is the charset size.</p>\n\n<strong>Java — Sliding Window:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int lengthOfLongestSubstring(String s) {\n    Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();\n    int maxLen = 0, left = 0;\n\n    for (int right = 0; right &lt; s.length(); right++) {\n        char c = s.charAt(right);\n        if (map.containsKey(c) && map.get(c) &gt;= left) {\n            left = map.get(c) + 1;  // Jump past the duplicate\n        }\n        map.put(c, right);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre><code>def length_of_longest_substring(s: str) -&gt; int:\n    char_index = {}\n    left = max_len = 0\n    for right, char in enumerate(s):\n        if char in char_index and char_index[char] &gt;= left:\n            left = char_index[char] + 1\n        char_index[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len</code></pre>\n\n<strong>ASCII Optimization (fixed 128-char array):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int lengthOfLongestSubstringFast(String s) {\n    int[] index = new int[128];  // ASCII\n    int maxLen = 0, left = 0;\n    for (int right = 0; right &lt; s.length(); right++) {\n        char c = s.charAt(right);\n        left = Math.max(left, index[c]);\n        maxLen = Math.max(maxLen, right - left + 1);\n        index[c] = right + 1;  // Store next valid start position\n    }\n    return maxLen;\n}</code></pre>\n\n<strong>Walkthrough for \"abcabcbb\":</strong>\n<table>\n  <tr><th>right</th><th>char</th><th>left</th><th>window</th><th>maxLen</th></tr>\n  <tr><td>0</td><td>a</td><td>0</td><td>\"a\"</td><td>1</td></tr>\n  <tr><td>1</td><td>b</td><td>0</td><td>\"ab\"</td><td>2</td></tr>\n  <tr><td>2</td><td>c</td><td>0</td><td>\"abc\"</td><td>3</td></tr>\n  <tr><td>3</td><td>a</td><td>1</td><td>\"bca\"</td><td>3</td></tr>\n  <tr><td>6</td><td>b</td><td>5</td><td>\"cb\"</td><td>3</td></tr>\n</table>\n\n<strong>LeetCode:</strong> <strong>3. Longest Substring Without Repeating Characters</strong> — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Sliding Window",
        "HashMap",
        "Strings"
      ],
      "keyPoints": [
        "Use the sliding window technique with a HashMap to track character indices: O(n) time, O(min(n, m)) space where m is the charset size.",
        "Java — Sliding Window: public int lengthOfLongestSubstring(String s) { Map map = new HashMap<>(); int maxLen = 0, left = 0; for (int right = 0; right = left) { left = map."
      ]
    },
    {
      "question": "Check if a linked list has a cycle?",
      "answer": "<p>Use <strong>Floyd's Cycle-Finding Algorithm</strong> (Tortoise and Hare): two pointers, slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle. <strong>O(n) time, O(1) space</strong>.</p>\n\n<strong>Java — Floyd's Algorithm:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public boolean hasCycle(ListNode head) {\n    if (head == null) return false;\n    ListNode slow = head, fast = head;\n\n    while (fast != null && fast.next != null) {\n        slow = slow.next;        // 1 step\n        fast = fast.next.next;   // 2 steps\n        if (slow == fast) return true;  // Cycle detected\n    }\n    return false;  // Fast reached end\n}</code></pre>\n\n<strong>Find the start of the cycle (if present):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) break;  // Meeting point inside cycle\n    }\n    if (fast == null || fast.next == null) return null;\n\n    // Reset slow to head, keep fast at meeting point\n    // Both now move 1 step — they meet at cycle start\n    slow = head;\n    while (slow != fast) {\n        slow = slow.next;\n        fast = fast.next;\n    }\n    return slow;  // Cycle start node\n}</code></pre>\n\n<strong>Why does the second phase work?</strong>\n<ul>\n  <li>Let distance from head to cycle start = F</li>\n  <li>Let distance from cycle start to meeting point = M</li>\n  <li>Let cycle length = C</li>\n  <li>When slow and fast meet: slow traveled F + M, fast traveled F + M + kC</li>\n  <li>Since fast is 2× speed: 2(F + M) = F + M + kC → F + M = kC → F = kC - M</li>\n  <li>So head-to-start distance equals meeting-point-to-start (mod C)</li>\n</ul>\n\n<strong>LeetCode:</strong> <strong>141. Linked List Cycle</strong> (Easy) and <strong>142. Linked List Cycle II</strong> (Medium).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Linked List",
        "Two Pointers",
        "Cycle Detection"
      ],
      "keyPoints": [
        "Let distance from head to cycle start = F",
        "Let distance from cycle start to meeting point = M",
        "When slow and fast meet: slow traveled F + M, fast traveled F + M + kC"
      ]
    },
    {
      "question": "Implement a LRU (Least Recently Used) Cache?",
      "answer": "<p>LRU Cache must support <code>get</code> and <code>put</code> in <strong>O(1)</strong> time. This requires a <strong>HashMap + Doubly Linked List</strong> combination.</p>\n\n<strong>Java — HashMap + DoublyLinkedList:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.HashMap;\nimport java.util.Map;\n\nclass LRUCache {\n    private final int capacity;\n    private final Map&lt;Integer, Node&gt; map;\n    private final Node head, tail;  // Dummy nodes\n\n    class Node {\n        int key, val;\n        Node prev, next;\n        Node(int k, int v) { key = k; val = v; }\n    }\n\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        this.map = new HashMap&lt;&gt;();\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head.next = tail;\n        tail.prev = head;\n    }\n\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node node = map.get(key);\n        remove(node);\n        insertToFront(node);  // Mark as recently used\n        return node.val;\n    }\n\n    public void put(int key, int value) {\n        if (map.containsKey(key)) remove(map.get(key));\n        if (map.size() == capacity) {\n            map.remove(tail.prev.key);  // Evict LRU\n            remove(tail.prev);\n        }\n        Node node = new Node(key, value);\n        map.put(key, node);\n        insertToFront(node);\n    }\n\n    private void remove(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n\n    private void insertToFront(Node node) {\n        node.next = head.next;\n        node.prev = head;\n        head.next.prev = node;\n        head.next = node;\n    }\n}</code></pre>\n\n<strong>Python — Using OrderedDict:</strong>\n<pre><code>from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n\n    def get(self, key: int) -&gt; int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)  # Mark as recently used\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -&gt; None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) &gt; self.capacity:\n            self.cache.popitem(last=False)  # Remove LRU</code></pre>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Operation</th><th>Time</th><th>Space</th></tr>\n  <tr><td>get</td><td>O(1)</td><td>O(capacity)</td></tr>\n  <tr><td>put</td><td>O(1)</td><td>O(capacity)</td></tr>\n</table>\n\n<strong>LeetCode:</strong> <strong>146. LRU Cache</strong> — Medium. A very common system design + coding interview question.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "HashMap",
        "Linked List",
        "Design",
        "Cache"
      ],
      "keyPoints": [
        "LRU Cache must support get and put in O(1) time.",
        "This requires a HashMap + Doubly Linked List combination."
      ]
    },
    {
      "question": "Find the missing number in an array containing 0..n with one missing?",
      "answer": "<p>Given an array of size n containing numbers from <code>0</code> to <code>n</code> with exactly one missing, find the missing number. Multiple approaches exist with different trade-offs.</p>\n\n<strong>Approach 1: Mathematical (Sum Formula) — O(n) time, O(1) space</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int missingNumber(int[] nums) {\n    int n = nums.length;\n    int expectedSum = n * (n + 1) / 2;  // Sum of 0..n\n    int actualSum = 0;\n    for (int num : nums) actualSum += num;\n    return expectedSum - actualSum;\n}</code></pre>\n\n<strong>Approach 2: XOR — O(n) time, O(1) space, no overflow risk</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int missingNumberXOR(int[] nums) {\n    int xor = 0;\n    int n = nums.length;\n    for (int i = 0; i &lt;= n; i++) xor ^= i;\n    for (int num : nums) xor ^= num;\n    return xor;  // Only the missing number remains\n}</code></pre>\n\n<strong>Why XOR works:</strong> <code>a ^ a = 0</code> and <code>a ^ 0 = a</code>. XORing all numbers from 0..n and then XORing all array elements cancels out everything except the missing number.\n\n<strong>Python:</strong>\n<pre><code>def missing_number(nums):\n    n = len(nums)\n    return n * (n + 1) // 2 - sum(nums)\n\n# XOR version (handles large n without overflow)\ndef missing_number_xor(nums):\n    missing = len(nums)\n    for i, num in enumerate(nums):\n        missing ^= i ^ num\n    return missing</code></pre>\n\n<strong>Comparison:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th><th>Pros</th><th>Cons</th></tr>\n  <tr><td>Sum Formula</td><td>O(n)</td><td>O(1)</td><td>Simple</td><td>Integer overflow for large n</td></tr>\n  <tr><td>XOR</td><td>O(n)</td><td>O(1)</td><td>No overflow</td><td>Less intuitive</td></tr>\n  <tr><td>HashSet</td><td>O(n)</td><td>O(n)</td><td>Easy</td><td>Extra space</td></tr>\n  <tr><td>Sort + scan</td><td>O(n log n)</td><td>O(1)</td><td>Naive</td><td>Slower</td></tr>\n</table>\n\n<strong>LeetCode:</strong> <strong>268. Missing Number</strong> — Easy.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Arrays",
        "Math",
        "Bit Manipulation",
        "XOR"
      ],
      "keyPoints": [
        "Given an array of size n containing numbers from 0 to n with exactly one missing, find the missing number.",
        "Multiple approaches exist with different trade-offs."
      ]
    },
    {
      "question": "Reverse a binary tree (mirror/invert)?",
      "answer": "<p>Invert a binary tree by swapping every node's left and right children recursively or iteratively.</p>\n\n<strong>Recursive (DFS) — O(n) time, O(h) space:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">class TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int x) { val = x; }\n}\n\npublic TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode temp = root.left;\n    root.left = invertTree(root.right);\n    root.right = invertTree(temp);\n    return root;\n}</code></pre>\n\n<strong>Iterative (BFS with Queue):</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.LinkedList;\nimport java.util.Queue;\n\npublic TreeNode invertTreeBFS(TreeNode root) {\n    if (root == null) return null;\n    Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();\n    queue.offer(root);\n\n    while (!queue.isEmpty()) {\n        TreeNode node = queue.poll();\n        TreeNode temp = node.left;\n        node.left = node.right;\n        node.right = temp;\n\n        if (node.left != null) queue.offer(node.left);\n        if (node.right != null) queue.offer(node.right);\n    }\n    return root;\n}</code></pre>\n\n<strong>Before & After:</strong>\n<pre>\n     4              4\n    /      →      /    2   7          7   2\n  /  /         /  /  1  3 6  9      9  6 3  1\n</pre>\n\n<strong>LeetCode:</strong> <strong>226. Invert Binary Tree</strong> — Easy. Famous as the question that Max Howell (Homebrew creator) failed at Google.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Binary Tree",
        "DFS",
        "BFS",
        "Recursion"
      ],
      "keyPoints": [
        "Invert a binary tree by swapping every node's left and right children recursively or iteratively.",
        "Recursive (DFS) — O(n) time, O(h) space: class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } } public TreeNode invertTree(TreeNode root) { if (root == null) return null; TreeNode temp = root."
      ]
    },
    {
      "question": "Merge two sorted arrays in-place?",
      "answer": "<p>Merge two sorted arrays where the first array has enough buffer space at the end. Fill from the back to avoid overwriting.</p>\n\n<strong>Java — Fill from the End:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public void merge(int[] nums1, int m, int[] nums2, int n) {\n    int i = m - 1;        // Last element of actual data in nums1\n    int j = n - 1;        // Last element of nums2\n    int k = m + n - 1;    // End of nums1 (total capacity)\n\n    while (j &gt;= 0) {\n        if (i &gt;= 0 && nums1[i] &gt; nums2[j]) {\n            nums1[k--] = nums1[i--];\n        } else {\n            nums1[k--] = nums2[j--];\n        }\n    }\n}</code></pre>\n\n<strong>Walkthrough:</strong> nums1 = [1,2,3,0,0,0], m=3; nums2 = [2,5,6], n=3\n<table>\n  <tr><th>Step</th><th>i</th><th>j</th><th>k</th><th>Action</th><th>nums1</th></tr>\n  <tr><td>1</td><td>2</td><td>2</td><td>5</td><td>3 vs 6 → take 6</td><td>[1,2,3,0,0,6]</td></tr>\n  <tr><td>2</td><td>2</td><td>1</td><td>4</td><td>3 vs 5 → take 5</td><td>[1,2,3,0,5,6]</td></tr>\n  <tr><td>3</td><td>2</td><td>0</td><td>3</td><td>3 vs 2 → take 3</td><td>[1,2,3,3,5,6]</td></tr>\n  <tr><td>4</td><td>1</td><td>0</td><td>2</td><td>2 vs 2 → take 2</td><td>[1,2,2,3,5,6]</td></tr>\n  <tr><td>5</td><td>1</td><td>-1</td><td>1</td><td>j < 0, done</td><td>[1,2,2,3,5,6]</td></tr>\n</table>\n\n<strong>Complexity:</strong> O(m + n) time, O(1) extra space.\n\n<strong>LeetCode:</strong> <strong>88. Merge Sorted Array</strong> — Easy.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Arrays",
        "Two Pointers",
        "In-Place"
      ],
      "keyPoints": [
        "Merge two sorted arrays where the first array has enough buffer space at the end.",
        "Fill from the back to avoid overwriting."
      ]
    },
    {
      "question": "Valid parentheses (balanced brackets)?",
      "answer": "<p>Use a <strong>stack</strong> to check if brackets are properly balanced and nested. <strong>O(n) time, O(n) space</strong>.</p>\n\n<strong>Java — Stack Approach:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.*;\n\npublic boolean isValid(String s) {\n    Stack&lt;Character&gt; stack = new Stack&lt;&gt;();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '{' || c == '[') {\n            stack.push(c);\n        } else {\n            if (stack.isEmpty()) return false;\n            char top = stack.pop();\n            if ((c == ')' && top != '(') ||\n                (c == '}' && top != '{') ||\n                (c == ']' && top != '[')) {\n                return false;\n            }\n        }\n    }\n    return stack.isEmpty();\n}</code></pre>\n\n<strong>Optimized — Early Termination:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public boolean isValidOptimized(String s) {\n    Deque&lt;Character&gt; stack = new ArrayDeque&lt;&gt;();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}</code></pre>\n\n<strong>Python:</strong>\n<pre><code>def is_valid(s: str) -&gt; bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack</code></pre>\n\n<strong>Edge Cases:</strong>\n<ul>\n  <li><code>\"((\"</code> → False (unclosed)</li>\n  <li><code>\")(\"</code> → False (wrong order)</li>\n  <li><code>\"()[]{}\"</code> → True</li>\n  <li><code>\"([)]\"</code> → False (crossed)</li>\n</ul>\n\n<strong>LeetCode:</strong> <strong>20. Valid Parentheses</strong> — Easy.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Stack",
        "Strings"
      ],
      "keyPoints": [
        "\")(\" → False (wrong order)"
      ]
    }
  ]
}
