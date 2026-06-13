// Real coding interview questions (second half)
// Generated: 2026-06-13T19:05:56.916Z

export const codingRealQuestionsB = {
  "questions": [
  {
    "question": "Graph BFS question around finding friends on social media (shortest path).",
    "answer": "<p>Model users as nodes and friendships as undirected edges, then run BFS from the source user to find the shortest path to the target.</p>\n<pre><code class=\"language-java\">public int shortestFriendPath(Map&lt;Integer, List&lt;Integer&gt;&gt; graph, int start, int target) {\n    if (start == target) return 0;\n    Set&lt;Integer&gt; visited = new HashSet&lt;&gt;();\n    Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();\n    q.offer(start);\n    visited.add(start);\n    int distance = 0;\n    while (!q.isEmpty()) {\n        int size = q.size();\n        distance++;\n        for (int i = 0; i &lt; size; i++) {\n            int u = q.poll();\n            for (int v : graph.getOrDefault(u, Collections.emptyList())) {\n                if (v == target) return distance;\n                if (visited.add(v)) q.offer(v);\n            }\n        }\n    }\n    return -1;\n}</code></pre>\n<p>BFS guarantees the shortest path in an unweighted graph. For large social graphs, bidirectional BFS reduces the explored search space.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Graphs",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Model the social network as an undirected graph.",
      "Use BFS from the source user, tracking visited nodes to avoid cycles.",
      "Return the level at which the target user is first reached."
    ]
  },
  {
    "question": "Climbing Stairs: Count the number of ways to reach the nth stair (can climb 1 or 2 steps at a time).",
    "answer": "<p>This is Fibonacci: each step can be reached from the previous step or the one before it.</p>\n<pre><code class=\"language-java\">public int climbStairs(int n) {\n    if (n &lt;= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i &lt;= n; i++) {\n        int c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Ways(n) = ways(n-1) + ways(n-2).",
      "Use two variables to keep previous results and avoid recursion overhead.",
      "Iterative solution runs in O(n) time and O(1) space."
    ]
  },
  {
    "question": "Coin Change: Given coins of different denominations and an amount, find the minimum number of coins needed.",
    "answer": "<p>Dynamic programming: dp[i] is the minimum coins needed for amount i.</p>\n<pre><code class=\"language-java\">public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int i = coin; i &lt;= amount; i++) {\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] &gt; amount ? -1 : dp[amount];\n}</code></pre>\n<p>Time O(amount x coins), space O(amount).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "dp[i] stores the minimum coins to make amount i.",
      "Initialize dp[0] = 0 and other entries to a large value.",
      "Iterate coins and update dp for each reachable amount."
    ]
  },
  {
    "question": "Longest Increasing Subsequence: Find the length of the longest strictly increasing subsequence.",
    "answer": "<p>Patience sorting with binary search gives O(n log n) time.</p>\n<pre><code class=\"language-java\">public int lengthOfLIS(int[] nums) {\n    List&lt;Integer&gt; tails = new ArrayList&lt;&gt;();\n    for (int num : nums) {\n        int idx = Collections.binarySearch(tails, num);\n        if (idx &lt; 0) idx = -(idx + 1);\n        if (idx == tails.size()) tails.add(num);\n        else tails.set(idx, num);\n    }\n    return tails.size();\n}</code></pre>\n<p><code>tails[i]</code> is the smallest ending value of an increasing subsequence of length i+1.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Maintain a tails array of the smallest possible tail values.",
      "Use binary search to find the position of each number.",
      "The length of tails equals the LIS length."
    ]
  },
  {
    "question": "Longest Common Subsequence: Given two strings, find the length of their longest common subsequence.",
    "answer": "<p>Use a 2D DP table where dp[i][j] is the LCS length of text1[0..i) and text2[0..j).</p>\n<pre><code class=\"language-java\">public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i &lt;= m; i++) {\n        for (int j = 1; j &lt;= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1))\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            else\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    return dp[m][n];\n}</code></pre>\n<p>Time O(m x n), space O(m x n); space can be reduced to O(min(m,n)).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Build a DP table where matching characters extend the LCS.",
      "Mismatch takes the maximum from the cell above or left.",
      "The bottom-right cell holds the final LCS length."
    ]
  },
  {
    "question": "Word Break: Given a string and a dictionary, determine if the string can be segmented into dictionary words.",
    "answer": "<p>DP boolean array where dp[i] means s[0..i) can be segmented.</p>\n<pre><code class=\"language-java\">public boolean wordBreak(String s, List&lt;String&gt; wordDict) {\n    Set&lt;String&gt; dict = new HashSet&lt;&gt;(wordDict);\n    boolean[] dp = new boolean[s.length() + 1];\n    dp[0] = true;\n    for (int i = 1; i &lt;= s.length(); i++) {\n        for (int j = 0; j &lt; i; j++) {\n            if (dp[j] && dict.contains(s.substring(j, i))) {\n                dp[i] = true;\n                break;\n            }\n        }\n    }\n    return dp[s.length()];\n}</code></pre>\n<p>Time O(n) for small dictionary lookups, or O(n) with optimized approach.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "dp[i] is true if the prefix of length i can be segmented.",
      "Check every possible split point j before i.",
      "Convert the dictionary to a HashSet for O(1) lookups."
    ]
  },
  {
    "question": "0/1 Knapsack Problem: Given weights and values of items, find the maximum value that can be put in a knapsack of given capacity.",
    "answer": "<p>Classic 0/1 knapsack with a 1D DP array updated in reverse capacity order.</p>\n<pre><code class=\"language-java\">public int knapsack(int[] weights, int[] values, int capacity) {\n    int[] dp = new int[capacity + 1];\n    for (int i = 0; i &lt; weights.length; i++) {\n        for (int w = capacity; w &gt;= weights[i]; w--) {\n            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n        }\n    }\n    return dp[capacity];\n}</code></pre>\n<p>Time O(n x capacity), space O(capacity).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "dp[w] stores the maximum value achievable with capacity w.",
      "Iterate capacities in reverse to avoid reusing the same item.",
      "For each item, decide whether including it increases total value."
    ]
  },
  {
    "question": "DP problem about finding optimal VM allocation of a physical machine.",
    "answer": "<p>Model physical machines as bins and VMs as items with CPU/RAM demands; use DP or greedy bin packing with backtracking for small instances.</p>\n<pre><code class=\"language-java\">public int minMachines(int[][] vms, int[] capacity) {\n    Arrays.sort(vms, (a, b) -&gt; Integer.compare(b[0] * b[1], a[0] * a[1]));\n    List&lt;int[]&gt; bins = new ArrayList&lt;&gt;();\n    for (int[] vm : vms) {\n        boolean placed = false;\n        for (int[] bin : bins) {\n            if (bin[0] &gt;= vm[0] && bin[1] &gt;= vm[1]) {\n                bin[0] -= vm[0]; bin[1] -= vm[1];\n                placed = true; break;\n            }\n        }\n        if (!placed) bins.add(new int[]{capacity[0] - vm[0], capacity[1] - vm[1]});\n    }\n    return bins.size();\n}</code></pre>\n<p>For exact optimality on large inputs, formulate as an integer linear program or use branch-and-bound.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Treat VM allocation as a multi-dimensional bin packing problem.",
      "Sort VMs by resource demand and place each in the best-fit machine.",
      "Use integer programming or heuristics depending on scale and optimality needs."
    ]
  },
  {
    "question": "Edit Distance: Given two strings, find the minimum number of operations (insert, delete, replace) to convert one to the other.",
    "answer": "<p>DP table where dp[i][j] is the edit distance between word1[0..i) and word2[0..j).</p>\n<pre><code class=\"language-java\">public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i &lt;= m; i++) dp[i][0] = i;\n    for (int j = 0; j &lt;= n; j++) dp[0][j] = j;\n    for (int i = 1; i &lt;= m; i++) {\n        for (int j = 1; j &lt;= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1))\n                dp[i][j] = dp[i - 1][j - 1];\n            else\n                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],\n                               Math.min(dp[i - 1][j], dp[i][j - 1]));\n        }\n    }\n    return dp[m][n];\n}</code></pre>\n<p>Time O(m x n), space O(m x n).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "dp[i][j] represents the minimum operations to transform prefixes.",
      "Matching characters cost no operation; mismatch costs one plus the best of insert, delete, or replace.",
      "Initialize first row and column to represent deletions and insertions."
    ]
  },
  {
    "question": "A variation of Word Break II: Return all possible sentence formations from a string using a dictionary.",
    "answer": "<p>Use DFS with memoization to explore all valid segmentations.</p>\n<pre><code class=\"language-java\">public List&lt;String&gt; wordBreak(String s, List&lt;String&gt; wordDict) {\n    Set&lt;String&gt; dict = new HashSet&lt;&gt;(wordDict);\n    Map&lt;String, List&lt;String&gt;&gt; memo = new HashMap&lt;&gt;();\n    return dfs(s, dict, memo);\n}\n\nList&lt;String&gt; dfs(String s, Set&lt;String&gt; dict, Map&lt;String, List&lt;String&gt;&gt; memo) {\n    if (memo.containsKey(s)) return memo.get(s);\n    List&lt;String&gt; res = new ArrayList&lt;&gt;();\n    if (s.isEmpty()) { res.add(\"\"); return res; }\n    for (String word : dict) {\n        if (s.startsWith(word)) {\n            List&lt;String&gt; rest = dfs(s.substring(word.length()), dict, memo);\n            for (String r : rest) {\n                res.add(word + (r.isEmpty() ? \"\" : \" \") + r);\n            }\n        }\n    }\n    memo.put(s, res);\n    return res;\n}</code></pre>\n<p>Memoization avoids recomputing the same suffixes.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Use DFS to enumerate all valid dictionary splits.",
      "Memoize results for each suffix to avoid redundant work.",
      "Build sentences by prefixing each word to results from the remaining string."
    ]
  },
  {
    "question": "Maximum Product Subarray: Find the contiguous subarray with the largest product.",
    "answer": "<p>Track both max and min ending at each position because a negative number can become the max.</p>\n<pre><code class=\"language-java\">public int maxProduct(int[] nums) {\n    int maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];\n    for (int i = 1; i &lt; nums.length; i++) {\n        int temp = maxSoFar;\n        maxSoFar = Math.max(nums[i], Math.max(maxSoFar * nums[i], minSoFar * nums[i]));\n        minSoFar = Math.min(nums[i], Math.min(temp * nums[i], minSoFar * nums[i]));\n        result = Math.max(result, maxSoFar);\n    }\n    return result;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Track both maximum and minimum products ending at each index.",
      "A negative number flips max and min.",
      "Update the global result after each iteration."
    ]
  },
  {
    "question": "Unique Paths in a Grid with Obstacles: Count the number of unique paths from top-left to bottom-right.",
    "answer": "<p>DP where dp[i][j] is the number of ways to reach cell (i, j).</p>\n<pre><code class=\"language-java\">public int uniquePathsWithObstacles(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    int[] dp = new int[n];\n    dp[0] = grid[0][0] == 0 ? 1 : 0;\n    for (int i = 0; i &lt; m; i++) {\n        for (int j = 0; j &lt; n; j++) {\n            if (grid[i][j] == 1) { dp[j] = 0; continue; }\n            if (j &gt; 0) dp[j] += dp[j - 1];\n        }\n    }\n    return dp[n - 1];\n}</code></pre>\n<p>Time O(m x n), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "dp[j] accumulates paths from above and from the left.",
      "Obstacles reset the path count to zero.",
      "Use a 1D array to reduce space."
    ]
  },
  {
    "question": "Jump Game: Given an array where each element represents max jump length, determine if you can reach the last index.",
    "answer": "<p>Greedily track the farthest reachable index.</p>\n<pre><code class=\"language-java\">public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i &lt;= maxReach && i &lt; nums.length; i++) {\n        maxReach = Math.max(maxReach, i + nums[i]);\n        if (maxReach &gt;= nums.length - 1) return true;\n    }\n    return false;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "Track the farthest index reachable at each step.",
      "If the current index exceeds maxReach, the end is unreachable.",
      "Return true as soon as the last index is within reach."
    ]
  },
  {
    "question": "Print the longest common substring using DP (first recursive then DP solution).",
    "answer": "<p>DP table where dp[i][j] is the length of the common substring ending at s1[i-1] and s2[j-1].</p>\n<pre><code class=\"language-java\">public String longestCommonSubstring(String s1, String s2) {\n    int m = s1.length(), n = s2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    int maxLen = 0, end = 0;\n    for (int i = 1; i &lt;= m; i++) {\n        for (int j = 1; j &lt;= n; j++) {\n            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n                if (dp[i][j] &gt; maxLen) { maxLen = dp[i][j]; end = i; }\n            }\n        }\n    }\n    return s1.substring(end - maxLen, end);\n}</code></pre>\n<p>Time O(m x n), space O(m x n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "DP"
    ],
    "keyPoints": [
      "A common substring ends at matching characters in both strings.",
      "dp[i][j] extends dp[i-1][j-1] when characters match.",
      "Track the maximum length and ending index to reconstruct the substring."
    ]
  },
  {
    "question": "Group Anagrams: Given an array of strings, group the anagrams together.",
    "answer": "<p>Use a sorted string or character count as the key for a hash map.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;String&gt;&gt; groupAnagrams(String[] strs) {\n    Map&lt;String, List&lt;String&gt;&gt; map = new HashMap&lt;&gt;();\n    for (String s : strs) {\n        char[] arr = s.toCharArray();\n        Arrays.sort(arr);\n        String key = new String(arr);\n        map.computeIfAbsent(key, k -&gt; new ArrayList&lt;&gt;()).add(s);\n    }\n    return new ArrayList&lt;&gt;(map.values());\n}</code></pre>\n<p>Time O(N x K log K) where K is max string length.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Anagrams produce the same sorted character sequence.",
      "Use the sorted string as a hash map key.",
      "Collect all strings sharing the same key into a group."
    ]
  },
  {
    "question": "Top K Frequent Elements: Given an array, return the k most frequent elements.",
    "answer": "<p>Count frequencies, then use a min-heap of size k or bucket sort.</p>\n<pre><code class=\"language-java\">public int[] topKFrequent(int[] nums, int k) {\n    Map&lt;Integer, Integer&gt; freq = new HashMap&lt;&gt;();\n    for (int n : nums) freq.merge(n, 1, Integer::sum);\n    PriorityQueue&lt;Map.Entry&lt;Integer, Integer&gt;&gt; pq =\n        new PriorityQueue&lt;&gt;(Comparator.comparingInt(Map.Entry::getValue));\n    for (Map.Entry&lt;Integer, Integer&gt; e : freq.entrySet()) {\n        pq.offer(e);\n        if (pq.size() &gt; k) pq.poll();\n    }\n    int[] res = new int[k]; int i = 0;\n    while (!pq.isEmpty()) res[i++] = pq.poll().getKey();\n    return res;\n}</code></pre>\n<p>Time O(n log k), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Count the frequency of each element using a hash map.",
      "Maintain a min-heap of size k to keep the top frequent elements.",
      "Bucket sort can achieve O(n) time when k is much smaller than n."
    ]
  },
  {
    "question": "LRU Cache: Design and implement a data structure for Least Recently Used (LRU) cache.",
    "answer": "<p>Combine a hash map with a doubly linked list for O(1) get and put.</p>\n<pre><code class=\"language-java\">class LRUCache {\n    class Node { int key, val; Node prev, next; }\n    Map&lt;Integer, Node&gt; map = new HashMap&lt;&gt;();\n    int capacity;\n    Node head = new Node(), tail = new Node();\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node n = map.get(key); moveToHead(n); return n.val;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) { map.get(key).val = value; get(key); return; }\n        Node n = new Node(); n.key = key; n.val = value;\n        map.put(key, n); addToHead(n);\n        if (map.size() &gt; capacity) {\n            Node lru = tail.prev; remove(lru); map.remove(lru.key);\n        }\n    }\n    void addToHead(Node n) { /* splice after head */ }\n    void remove(Node n) { /* unlink */ }\n    void moveToHead(Node n) { remove(n); addToHead(n); }\n}</code></pre>\n<p>Time O(1) per operation.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Use a hash map for O(1) key lookup.",
      "Use a doubly linked list to maintain access order.",
      "Evict the tail node when capacity is exceeded."
    ]
  },
  {
    "question": "Two Sum using Hash Map: Find two numbers in an array that add up to a target.",
    "answer": "<p>Single pass with a hash map storing complements.</p>\n<pre><code class=\"language-java\">public int[] twoSum(int[] nums, int target) {\n    Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();\n    for (int i = 0; i &lt; nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Store each value and its index in a hash map.",
      "Check if the complement of the current value already exists.",
      "Returns indices in a single pass through the array."
    ]
  },
  {
    "question": "Valid Parentheses: Given a string of brackets, determine if the input string is valid.",
    "answer": "<p>Use a stack to match opening and closing brackets.</p>\n<pre><code class=\"language-java\">public boolean isValid(String s) {\n    Stack&lt;Character&gt; stack = new Stack&lt;&gt;();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "Stack",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Push the expected closing bracket for each opener.",
      "Return false on mismatched or unexpected closers.",
      "The string is valid only if the stack is empty at the end."
    ]
  },
  {
    "question": "Next Greater Element: Find the next greater element for every element in an array.",
    "answer": "<p>Monotonic stack iterating from right to left (or left to right for next greater to the right).</p>\n<pre><code class=\"language-java\">public int[] nextGreaterElement(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    Arrays.fill(res, -1);\n    Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();\n    for (int i = 0; i &lt; n; i++) {\n        while (!stack.isEmpty() && nums[stack.peek()] &lt; nums[i]) {\n            res[stack.pop()] = nums[i];\n        }\n        stack.push(i);\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Stack",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Maintain a decreasing stack of indices.",
      "Pop indices whose next greater element has been found.",
      "Default to -1 for elements with no greater successor."
    ]
  },
  {
    "question": "Sliding Window Maximum: Given an array and window size k, find the maximum element in each window.",
    "answer": "<p>Use a deque to store indices of useful elements in decreasing order.</p>\n<pre><code class=\"language-java\">public int[] maxSlidingWindow(int[] nums, int k) {\n    int n = nums.length;\n    int[] res = new int[n - k + 1];\n    Deque&lt;Integer&gt; dq = new ArrayDeque&lt;&gt;();\n    for (int i = 0; i &lt; n; i++) {\n        while (!dq.isEmpty() && dq.peekFirst() &lt;= i - k) dq.pollFirst();\n        while (!dq.isEmpty() && nums[dq.peekLast()] &lt;= nums[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i &gt;= k - 1) res[i - k + 1] = nums[dq.peekFirst()];\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(k).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Sliding Window",
      "Algorithms"
    ],
    "keyPoints": [
      "Use a deque to keep indices of elements in decreasing value order.",
      "Remove indices that fall outside the current window.",
      "The front of the deque is the maximum for the current window."
    ]
  },
  {
    "question": "Permutation in String: Given two strings s1 and s2, return true if s2 contains a permutation of s1.",
    "answer": "<p>Sliding window with character frequency counts.</p>\n<pre><code class=\"language-java\">public boolean checkInclusion(String s1, String s2) {\n    if (s1.length() &gt; s2.length()) return false;\n    int[] count = new int[26];\n    for (char c : s1.toCharArray()) count[c - 'a']++;\n    int left = 0;\n    for (int right = 0; right &lt; s2.length(); right++) {\n        count[s2.charAt(right) - 'a']--;\n        while (count[s2.charAt(right) - 'a'] &lt; 0) {\n            count[s2.charAt(left) - 'a']++;\n            left++;\n        }\n        if (right - left + 1 == s1.length()) return true;\n    }\n    return false;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Sliding Window",
      "Algorithms"
    ],
    "keyPoints": [
      "Track character counts of s1.",
      "Slide a window over s2 and adjust counts.",
      "A valid permutation exists when all counts are zero in a window of length |s1|."
    ]
  },
  {
    "question": "Trapping Rain Water: Given an elevation map, compute how much water it can trap after raining.",
    "answer": "<p>Two-pointer approach tracking left and right max heights.</p>\n<pre><code class=\"language-java\">public int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0, water = 0;\n    while (left &lt; right) {\n        if (height[left] &lt; height[right]) {\n            leftMax = Math.max(leftMax, height[left]);\n            water += leftMax - height[left];\n            left++;\n        } else {\n            rightMax = Math.max(rightMax, height[right]);\n            water += rightMax - height[right];\n            right--;\n        }\n    }\n    return water;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "Water trapped at an index depends on the minimum of max heights on both sides.",
      "Use two pointers and process the side with the smaller max.",
      "Accumulate water level without extra arrays."
    ]
  },
  {
    "question": "Find Unique Triplets whose sum equals a target value within O(N^2) time.",
    "answer": "<p>Sort the array and use two pointers for each fixed first element.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;Integer&gt;&gt; threeSumTarget(int[] nums, int target) {\n    List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();\n    Arrays.sort(nums);\n    for (int i = 0; i &lt; nums.length - 2; i++) {\n        if (i &gt; 0 && nums[i] == nums[i - 1]) continue;\n        int l = i + 1, r = nums.length - 1;\n        while (l &lt; r) {\n            int sum = nums[i] + nums[l] + nums[r];\n            if (sum == target) {\n                res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                while (l &lt; r && nums[l] == nums[l + 1]) l++;\n                while (l &lt; r && nums[r] == nums[r - 1]) r--;\n                l++; r--;\n            } else if (sum &lt; target) l++;\n            else r--;\n        }\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(1) excluding output.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "Sort the array to enable the two-pointer technique.",
      "Fix one number and search for the remaining pair in O(n).",
      "Skip duplicates to ensure unique triplets."
    ]
  },
  {
    "question": "Online Stock Span: Design an algorithm that collects daily price quotes and returns the span of stock's price.",
    "answer": "<p>Use a monotonic stack storing price-span pairs.</p>\n<pre><code class=\"language-java\">class StockSpanner {\n    Stack&lt;int[]&gt; stack = new Stack&lt;&gt;();\n    public int next(int price) {\n        int span = 1;\n        while (!stack.isEmpty() && stack.peek()[0] &lt;= price) {\n            span += stack.pop()[1];\n        }\n        stack.push(new int[]{price, span});\n        return span;\n    }\n}</code></pre>\n<p>Amortized time O(1) per call.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Stack",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Maintain a decreasing stack of price-span pairs.",
      "Pop smaller or equal prices and accumulate their spans.",
      "Amortized O(1) time per next() call."
    ]
  },
  {
    "question": "Merge K Sorted Iterators: Design an iterator that merges k sorted iterators into one sorted sequence.",
    "answer": "<p>Use a min-heap ordered by the next value of each iterator.</p>\n<pre><code class=\"language-java\">class MergingIterator implements Iterator&lt;Integer&gt; {\n    PriorityQueue&lt;Iterator&lt;Integer&gt;&gt; pq =\n        new PriorityQueue&lt;&gt;(Comparator.comparingInt(Iterator::next));\n    public MergingIterator(List&lt;Iterator&lt;Integer&gt;&gt; iterators) {\n        for (Iterator&lt;Integer&gt; it : iterators) {\n            if (it.hasNext()) pq.offer(it);\n        }\n    }\n    public boolean hasNext() { return !pq.isEmpty(); }\n    public Integer next() {\n        Iterator&lt;Integer&gt; it = pq.poll();\n        Integer val = it.next();\n        if (it.hasNext()) pq.offer(it);\n        return val;\n    }\n}</code></pre>\n<p>Time O(log k) per next(), space O(k).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Heap",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Use a min-heap keyed by each iterator's next element.",
      "Poll the smallest iterator, return its value, and re-add it if it has more elements.",
      "Initial population and lazy advancement keep heap size at most k."
    ]
  },
  {
    "question": "Battleships on a Board: Given a 2D board, count the number of battleships in it.",
    "answer": "<p>Count the top-left cell of each ship by checking no 'X' above or to the left.</p>\n<pre><code class=\"language-java\">public int countBattleships(char[][] board) {\n    int count = 0;\n    for (int i = 0; i &lt; board.length; i++) {\n        for (int j = 0; j &lt; board[0].length; j++) {\n            if (board[i][j] == 'X'\n                && (i == 0 || board[i - 1][j] != 'X')\n                && (j == 0 || board[i][j - 1] != 'X')) {\n                count++;\n            }\n        }\n    }\n    return count;\n}</code></pre>\n<p>Time O(m x n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "A battleship's top-left cell has no 'X' above or to the left.",
      "Count only those anchor cells.",
      "Avoid modifying the board or using extra visited memory."
    ]
  },
  {
    "question": "Find if there exists a transitive link between two pages given page navigation logs.",
    "answer": "<p>Build a directed graph from navigation logs and run BFS/DFS from the source page.</p>\n<pre><code class=\"language-java\">public boolean hasTransitiveLink(List&lt;int[]&gt; logs, int src, int dst) {\n    Map&lt;Integer, List&lt;Integer&gt;&gt; graph = new HashMap&lt;&gt;();\n    for (int[] log : logs) {\n        graph.computeIfAbsent(log[0], k -&gt; new ArrayList&lt;&gt;()).add(log[1]);\n    }\n    Set&lt;Integer&gt; visited = new HashSet&lt;&gt;();\n    Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();\n    q.offer(src);\n    while (!q.isEmpty()) {\n        int u = q.poll();\n        if (u == dst) return true;\n        for (int v : graph.getOrDefault(u, Collections.emptyList())) {\n            if (visited.add(v)) q.offer(v);\n        }\n    }\n    return false;\n}</code></pre>\n<p>Time O(V + E), space O(V + E).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Graphs",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Construct a directed graph from source to destination page navigations.",
      "Run BFS or DFS from the source page.",
      "Return true if the destination page is reachable."
    ]
  },
  {
    "question": "Build tic-tac-toe game with OOP design.",
    "answer": "<p>Design classes for Board, Player, and Game with move validation and win detection.</p>\n<pre><code class=\"language-java\">class TicTacToe {\n    int[] rows, cols;\n    int diag, antiDiag, n;\n    public TicTacToe(int n) {\n        this.n = n; rows = new int[n]; cols = new int[n];\n    }\n    public int move(int row, int col, int player) {\n        int val = player == 1 ? 1 : -1;\n        rows[row] += val; cols[col] += val;\n        if (row == col) diag += val;\n        if (row + col == n - 1) antiDiag += val;\n        if (Math.abs(rows[row]) == n || Math.abs(cols[col]) == n\n            || Math.abs(diag) == n || Math.abs(antiDiag) == n)\n            return player;\n        return 0;\n    }\n}</code></pre>\n<p>Move is O(1); win detection uses counters for rows, columns, and diagonals.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Object-Oriented Design"
    ],
    "keyPoints": [
      "Track cumulative scores for rows, columns, and both diagonals.",
      "A player wins when any line's absolute value equals board size n.",
      "Validate moves and alternate turns in a separate Game class."
    ]
  },
  {
    "question": "Given an employee hierarchy tree, find managers through the hierarchy using disjoint sets and union-find.",
    "answer": "<p>Use union-find to group employees by their chain of command, then find the representative manager for each employee.</p>\n<pre><code class=\"language-java\">class UnionFind {\n    int[] parent;\n    public UnionFind(int n) {\n        parent = new int[n];\n        for (int i = 0; i &lt; n; i++) parent[i] = i;\n    }\n    int find(int x) {\n        if (parent[x] != x) parent[x] = find(parent[x]);\n        return parent[x];\n    }\n    void union(int x, int y) { parent[find(x)] = find(y); }\n}\n\npublic int findTopManager(int[] managers, int emp) {\n    UnionFind uf = new UnionFind(managers.length);\n    for (int i = 0; i &lt; managers.length; i++) {\n        if (managers[i] != -1) uf.union(i, managers[i]);\n    }\n    return uf.find(emp);\n}</code></pre>\n<p>Path compression keeps find nearly O(1) per query.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Trees",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Union each employee with their direct manager.",
      "Use path compression in find for efficiency.",
      "The representative of an employee's set is the top-level manager."
    ]
  },
  {
    "question": "Variation of validate stack sequences - determine if given push and pop sequences are valid.",
    "answer": "<p>Simulate the stack by pushing elements from the pushed sequence and popping when they match the popped sequence.</p>\n<pre><code class=\"language-java\">public boolean validateStackSequences(int[] pushed, int[] popped) {\n    Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();\n    int j = 0;\n    for (int x : pushed) {\n        stack.push(x);\n        while (!stack.isEmpty() && stack.peek() == popped[j]) {\n            stack.pop(); j++;\n        }\n    }\n    return stack.isEmpty();\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Stack",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Push elements in the order given by pushed array.",
      "Pop whenever the top matches the next element in popped array.",
      "The sequence is valid if the stack is empty after processing all elements."
    ]
  },
  {
    "question": "Matrix rotation - rotate a given matrix by 90 degrees clockwise.",
    "answer": "<p>Transpose the matrix, then reverse each row.</p>\n<pre><code class=\"language-java\">public void rotate(int[][] matrix) {\n    int n = matrix.length;\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = i; j &lt; n; j++) {\n            int tmp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = tmp;\n        }\n    }\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = 0; j &lt; n / 2; j++) {\n            int tmp = matrix[i][j];\n            matrix[i][j] = matrix[i][n - 1 - j];\n            matrix[i][n - 1 - j] = tmp;\n        }\n    }\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "Transpose the matrix by swapping elements across the diagonal.",
      "Reverse each row to complete the 90-degree clockwise rotation.",
      "The rotation is done in-place with O(1) extra space."
    ]
  },
  {
    "question": "String manipulation problem with sliding window and rolling hash approach.",
    "answer": "<p>Use a rolling hash to compare substrings in constant time while sliding a window.</p>\n<pre><code class=\"language-java\">public boolean hasSubstring(String s, String t) {\n    int base = 31, mod = 1_000_000_007;\n    long hT = 0, hS = 0, power = 1;\n    for (int i = 0; i &lt; t.length(); i++) {\n        hT = (hT * base + t.charAt(i)) % mod;\n        if (i &gt; 0) power = (power * base) % mod;\n    }\n    for (int i = 0; i &lt; s.length(); i++) {\n        hS = (hS * base + s.charAt(i)) % mod;\n        if (i &gt;= t.length()) {\n            hS = (hS - s.charAt(i - t.length()) * power % mod + mod) % mod;\n        }\n        if (i &gt;= t.length() - 1 && hS == hT) return true;\n    }\n    return false;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Strings",
      "Algorithms"
    ],
    "keyPoints": [
      "Compute a hash for the pattern and for each window of the text.",
      "Update the window hash in O(1) using the rolling hash formula.",
      "Handle hash collisions by comparing actual strings on hash match."
    ]
  },
  {
    "question": "Merging intervals - merge all overlapping intervals in a collection of intervals.",
    "answer": "<p>Sort by start time and merge overlapping or adjacent intervals.</p>\n<pre><code class=\"language-java\">public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -&gt; Integer.compare(a[0], b[0]));\n    List&lt;int[]&gt; merged = new ArrayList&lt;&gt;();\n    for (int[] interval : intervals) {\n        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] &lt; interval[0]) {\n            merged.add(interval);\n        } else {\n            merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);\n        }\n    }\n    return merged.toArray(new int[merged.size()][]);\n}</code></pre>\n<p>Time O(n log n), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "Sort intervals by their start coordinate.",
      "Merge when the current interval overlaps the last merged one.",
      "Update the end to the maximum of the overlapping intervals."
    ]
  },
  {
    "question": "Write a SQL query to find the second most-purchased product in each category.",
    "answer": "<p>Use <code>DENSE_RANK()</code> partitioned by category ordered by total purchases descending.</p>\n<pre><code class=\"language-sql\">WITH Ranked AS (\n  SELECT category, product_id,\n    DENSE_RANK() OVER (PARTITION BY category ORDER BY SUM(quantity) DESC) AS rnk\n  FROM Purchases\n  GROUP BY category, product_id\n)\nSELECT category, product_id\nFROM Ranked\nWHERE rnk = 2;</code></pre>\n<p>Handle ties with <code>DENSE_RANK</code>; use <code>ROW_NUMBER</code> for exactly one product per category.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Aggregate purchases per category and product.",
      "Rank products within each category by total quantity.",
      "Filter for rank 2 to get the second most-purchased product."
    ]
  },
  {
    "question": "Given a String array with city names, return a collection with city name and count of repeated characters, sorted order.",
    "answer": "<p>For each city, count total repeated characters using a frequency map, then sort the result.</p>\n<pre><code class=\"language-java\">public List&lt;String&gt; cityRepeatedChars(String[] cities) {\n    List&lt;String&gt; res = new ArrayList&lt;&gt;();\n    for (String city : cities) {\n        Map&lt;Character, Integer&gt; freq = new HashMap&lt;&gt;();\n        int repeats = 0;\n        for (char c : city.toCharArray()) {\n            freq.merge(c, 1, Integer::sum);\n        }\n        for (int v : freq.values()) if (v &gt; 1) repeats += v;\n        res.add(city + \":\" + repeats);\n    }\n    res.sort(Comparator.comparingInt(s -&gt; Integer.parseInt(s.split(\":\")[1])));\n    return res;\n}</code></pre>\n<p>Time O(N x L log L) where L is max city length.</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "Strings",
      "Algorithms"
    ],
    "keyPoints": [
      "Count character frequencies for each city name.",
      "Sum occurrences of characters that appear more than once.",
      "Sort the resulting collection by the repeated-character count."
    ]
  },
  {
    "question": "Write a SQL query using CTE to find employees who earn more than the average salary of their department.",
    "answer": "<p>Compute the department average in a CTE, then join back to Employee.</p>\n<pre><code class=\"language-sql\">WITH DeptAvg AS (\n  SELECT department_id, AVG(salary) AS avg_salary\n  FROM Employee\n  GROUP BY department_id\n)\nSELECT e.name, e.salary, e.department_id\nFROM Employee e\nJOIN DeptAvg d ON e.department_id = d.department_id\nWHERE e.salary &gt; d.avg_salary;</code></pre>\n<p>A correlated subquery or window function <code>AVG() OVER (PARTITION BY department_id)</code> also works.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Calculate each department's average salary in a CTE.",
      "Join the CTE to the Employee table on department_id.",
      "Filter employees whose salary exceeds their department average."
    ]
  },
  {
    "question": "Write a SQL query to find the mode (most frequent value) in a column.",
    "answer": "<p>Group by the column, order by frequency descending, and limit to the top value.</p>\n<pre><code class=\"language-sql\">SELECT value, COUNT(*) AS freq\nFROM observations\nGROUP BY value\nORDER BY freq DESC\nLIMIT 1;</code></pre>\n<p>For multiple modes, use <code>DENSE_RANK()</code> and filter <code>rnk = 1</code>.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Group rows by the target column and count occurrences.",
      "Order by frequency descending.",
      "Use LIMIT 1 or rank to retrieve the most frequent value(s)."
    ]
  },
  {
    "question": "Write a SQL query to pivot data - transform rows into columns.",
    "answer": "<p>Use conditional aggregation with <code>CASE</code> or a pivot operator depending on the dialect.</p>\n<pre><code class=\"language-sql\">SELECT\n  entity_id,\n  MAX(CASE WHEN metric = 'revenue' THEN value END) AS revenue,\n  MAX(CASE WHEN metric = 'cost' THEN value END) AS cost,\n  MAX(CASE WHEN metric = 'profit' THEN value END) AS profit\nFROM metrics\nGROUP BY entity_id;</code></pre>\n<p>Each <code>CASE</code> extracts one metric into its own column.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Use conditional aggregation to map row values into columns.",
      "Group by the entity that should become each output row.",
      "Use PIVOT syntax if your database supports it."
    ]
  },
  {
    "question": "Implement a function to memoize any passed-in function.",
    "answer": "<p>Cache function results keyed by arguments and return cached values on subsequent calls.</p>\n<pre><code class=\"language-javascript\">function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}</code></pre>\n<p>Make sure arguments are JSON-serializable if using JSON.stringify as the cache key.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Store computed results in a cache keyed by input arguments.",
      "Return cached result immediately if the same inputs occur again.",
      "Ensure cache keys uniquely represent argument combinations."
    ]
  },
  {
    "question": "Build a debouncer or throttler function.",
    "answer": "<p>A debouncer delays execution until the function stops being called for a specified wait time.</p>\n<pre><code class=\"language-javascript\">function debounce(fn, wait) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() =&gt; fn.apply(this, args), wait);\n  };\n}\n\nfunction throttle(fn, limit) {\n  let last = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - last &gt;= limit) {\n      last = now;\n      fn.apply(this, args);\n    }\n  };\n}</code></pre>\n<p>Debounce is useful for search input; throttle is useful for scroll handlers.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Hash Maps",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Debounce resets a timer on every call and executes after the wait period.",
      "Throttle ensures the function runs at most once per limit interval.",
      "Both preserve the correct this context and forward arguments."
    ]
  },
  {
    "question": "Find the Kth Largest Element in an Array using a min-heap.",
    "answer": "<p>Maintain a min-heap of size k; after processing all elements, the root is the kth largest.</p>\n<pre><code class=\"language-java\">public int findKthLargest(int[] nums, int k) {\n    PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();\n    for (int num : nums) {\n        pq.offer(num);\n        if (pq.size() &gt; k) pq.poll();\n    }\n    return pq.peek();\n}</code></pre>\n<p>Time O(n log k), space O(k). Quickselect can achieve O(n) average.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Heap",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Use a min-heap to keep the k largest elements seen so far.",
      "Remove the smallest whenever the heap exceeds size k.",
      "The heap root is the kth largest after one pass."
    ]
  },
  {
    "question": "Reorganize String: Rearrange characters so no two adjacent are the same.",
    "answer": "<p>Use a max-heap by character frequency and interleave the most frequent characters.</p>\n<pre><code class=\"language-java\">public String reorganizeString(String s) {\n    int[] freq = new int[26];\n    for (char c : s.toCharArray()) freq[c - 'a']++;\n    PriorityQueue&lt;int[]&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; b[1] - a[1]);\n    for (int i = 0; i &lt; 26; i++) if (freq[i] &gt; 0) pq.offer(new int[]{i, freq[i]});\n    StringBuilder sb = new StringBuilder();\n    int[] prev = new int[]{-1, 0};\n    while (!pq.isEmpty()) {\n        int[] cur = pq.poll();\n        sb.append((char)(cur[0] + 'a'));\n        if (prev[1] &gt; 0) pq.offer(prev);\n        cur[1]--;\n        prev = cur;\n    }\n    return sb.length() == s.length() ? sb.toString() : \"\";\n}</code></pre>\n<p>Time O(n log k) where k is the alphabet size.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Heap",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Always pick the most frequent character that is not the same as the previous one.",
      "Use a max-heap ordered by remaining frequency.",
      "Return empty string if any character count exceeds (n+1)/2."
    ]
  },
  {
    "question": "Find Median from Data Stream: Design a data structure that supports adding integers and finding the median.",
    "answer": "<p>Use two heaps: a max-heap for the lower half and a min-heap for the upper half.</p>\n<pre><code class=\"language-java\">class MedianFinder {\n    PriorityQueue&lt;Integer&gt; lo = new PriorityQueue&lt;&gt;(Collections.reverseOrder());\n    PriorityQueue&lt;Integer&gt; hi = new PriorityQueue&lt;&gt;();\n    public void addNum(int num) {\n        lo.offer(num);\n        hi.offer(lo.poll());\n        if (hi.size() &gt; lo.size()) lo.offer(hi.poll());\n    }\n    public double findMedian() {\n        if (lo.size() &gt; hi.size()) return lo.peek();\n        return (lo.peek() + hi.peek()) / 2.0;\n    }\n}</code></pre>\n<p>Time O(log n) per add, O(1) for median.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Heap",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Maintain a max-heap for the lower half and a min-heap for the upper half.",
      "Balance the heaps so their sizes differ by at most one.",
      "The median is the top of the larger heap or the average of both tops."
    ]
  },
  {
    "question": "Implement fuzzy search functionality.",
    "answer": "<p>Fuzzy search can use Levenshtein distance, n-gram matching, or prefix trees with edit distance.</p>\n<pre><code class=\"language-java\">public boolean fuzzyMatch(String s, String p, int maxDist) {\n    int[][] dp = new int[s.length() + 1][p.length() + 1];\n    for (int i = 0; i &lt;= s.length(); i++) dp[i][0] = i;\n    for (int j = 0; j &lt;= p.length(); j++) dp[0][j] = j;\n    for (int i = 1; i &lt;= s.length(); i++) {\n        for (int j = 1; j &lt;= p.length(); j++) {\n            if (s.charAt(i - 1) == p.charAt(j - 1))\n                dp[i][j] = dp[i - 1][j - 1];\n            else\n                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],\n                               Math.min(dp[i - 1][j], dp[i][j - 1]));\n        }\n    }\n    return dp[s.length()][p.length()] &lt;= maxDist;\n}</code></pre>\n<p>For production, consider trigram indexes or dedicated search libraries.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Strings",
      "Algorithms"
    ],
    "keyPoints": [
      "Choose a distance metric such as Levenshtein or Hamming distance.",
      "Use DP to compute edit distance between the query and candidate strings.",
      "For scale, use inverted n-gram indexes or specialized search engines."
    ]
  },
  {
    "question": "Write a SQL query to calculate rolling average sales for each product over the past 6 months using window functions.",
    "answer": "<p>Use <code>AVG() OVER</code> with a frame covering the current row and the 5 preceding months.</p>\n<pre><code class=\"language-sql\">SELECT\n  product_id,\n  month,\n  sales,\n  AVG(sales) OVER (\n    PARTITION BY product_id\n    ORDER BY month\n    ROWS BETWEEN 5 PRECEDING AND CURRENT ROW\n  ) AS rolling_avg_6mo\nFROM monthly_sales;</code></pre>\n<p>Ensure data is aggregated to one row per product per month first.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Partition by product and order by month.",
      "Use a frame of the current row and 5 preceding rows.",
      "Pre-aggregate sales to a monthly granularity before applying the window."
    ]
  },
  {
    "question": "Write a SQL query to find users who made purchases on 3 consecutive days.",
    "answer": "<p>Use <code>LEAD()</code> to look at the next two purchase dates per user and check for consecutive days.</p>\n<pre><code class=\"language-sql\">WITH Ordered AS (\n  SELECT\n    user_id,\n    purchase_date,\n    LEAD(purchase_date, 1) OVER (PARTITION BY user_id ORDER BY purchase_date) AS next1,\n    LEAD(purchase_date, 2) OVER (PARTITION BY user_id ORDER BY purchase_date) AS next2\n  FROM purchases\n)\nSELECT DISTINCT user_id\nFROM Ordered\nWHERE next1 = DATE_ADD(purchase_date, INTERVAL 1 DAY)\n  AND next2 = DATE_ADD(purchase_date, INTERVAL 2 DAY);</code></pre>\n<p>Dialect-specific date functions may replace <code>DATE_ADD</code>.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Use LEAD to fetch the next two purchase dates per user.",
      "Compare each lead date to purchase_date + 1 and + 2 days.",
      "Use DISTINCT because the same user may have multiple qualifying streaks."
    ]
  },
  {
    "question": "Design a database schema for an event tracking/logging system that handles large volumes of immutable events.",
    "answer": "<p>Use an append-only events table with time-series partitioning and separate materialized aggregations.</p>\n<pre><code class=\"language-sql\">CREATE TABLE events (\n  event_id BIGINT PRIMARY KEY,\n  event_type VARCHAR(64),\n  user_id BIGINT,\n  payload JSON,\n  created_at TIMESTAMP,\n  shard_key INT\n) PARTITION BY RANGE (created_at);\n\nCREATE INDEX idx_events_type_time ON events(event_type, created_at);</code></pre>\n<p>Store hot data on fast storage, cold data in object storage, and pre-aggregate metrics for dashboards.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Design tables as append-only to preserve immutability.",
      "Partition by time to enable efficient retention and pruning.",
      "Use separate aggregations or stream processors for analytics queries."
    ]
  },
  {
    "question": "Write a SQL query to find the percentage of orders that were shipped on time vs delayed.",
    "answer": "<p>Use conditional aggregation to count on-time and delayed orders, then compute percentages.</p>\n<pre><code class=\"language-sql\">SELECT\n  100.0 * SUM(CASE WHEN shipped_date &lt;= promised_date THEN 1 ELSE 0 END) / COUNT(*) AS on_time_pct,\n  100.0 * SUM(CASE WHEN shipped_date &gt; promised_date THEN 1 ELSE 0 END) / COUNT(*) AS delayed_pct\nFROM orders\nWHERE shipped_date IS NOT NULL;</code></pre>\n<p>Exclude unshipped orders or bucket them separately.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Compare shipped_date to promised_date for each order.",
      "Use conditional aggregation to count on-time and delayed orders.",
      "Compute percentages over the shipped subset."
    ]
  },
  {
    "question": "Write a SQL query to find pairs of users who are friends of friends but not directly connected.",
    "answer": "<p>Self-join friendships to find two-hop connections and exclude direct friendships.</p>\n<pre><code class=\"language-sql\">WITH FoF AS (\n  SELECT DISTINCT a.user_id AS u1, b.friend_id AS u2\n  FROM friendships a\n  JOIN friendships b ON a.friend_id = b.user_id\n  WHERE a.user_id &lt;&gt; b.friend_id\n)\nSELECT u1, u2\nFROM FoF f\nWHERE NOT EXISTS (\n  SELECT 1 FROM friendships d\n  WHERE (d.user_id = f.u1 AND d.friend_id = f.u2)\n     OR (d.user_id = f.u2 AND d.friend_id = f.u1)\n);</code></pre>\n<p>Enforce u1 &lt; u2 to avoid duplicate pairs.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Join friendships to itself to find friends-of-friends.",
      "Exclude pairs that are already direct friends.",
      "Use DISTINCT and ordering to avoid duplicate reversed pairs."
    ]
  },
  {
    "question": "Write a SQL query using NTILE() to divide customers into quintiles based on their total spend.",
    "answer": "<p>Aggregate total spend per customer, then use <code>NTILE(5)</code> to assign quintiles.</p>\n<pre><code class=\"language-sql\">WITH Spend AS (\n  SELECT customer_id, SUM(amount) AS total_spend\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT customer_id, total_spend,\n  NTILE(5) OVER (ORDER BY total_spend DESC) AS quintile\nFROM Spend;</code></pre>\n<p>Quintile 1 contains the highest spenders when ordered descending.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Aggregate total spend per customer first.",
      "Use NTILE(5) to split ordered customers into five equal groups.",
      "Order by total_spend DESC so quintile 1 is the top spenders."
    ]
  },
  {
    "question": "Given a 2D board and a word, find if the word exists in the grid (Word Search).",
    "answer": "<p>Use backtracking DFS from each cell, marking cells as visited during exploration.</p>\n<pre><code class=\"language-java\">public boolean exist(char[][] board, String word) {\n    for (int i = 0; i &lt; board.length; i++)\n        for (int j = 0; j &lt; board[0].length; j++)\n            if (dfs(board, word, i, j, 0)) return true;\n    return false;\n}\nboolean dfs(char[][] b, String w, int i, int j, int k) {\n    if (k == w.length()) return true;\n    if (i &lt; 0 || j &lt; 0 || i &gt;= b.length || j &gt;= b[0].length || b[i][j] != w.charAt(k)) return false;\n    char tmp = b[i][j]; b[i][j] = '#';\n    boolean found = dfs(b, w, i + 1, j, k + 1) || dfs(b, w, i - 1, j, k + 1)\n                 || dfs(b, w, i, j + 1, k + 1) || dfs(b, w, i, j - 1, k + 1);\n    b[i][j] = tmp;\n    return found;\n}</code></pre>\n<p>Time O(m x n x 4^L) where L is word length.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Backtracking",
      "Algorithms"
    ],
    "keyPoints": [
      "Start DFS from every cell that matches the first character.",
      "Temporarily mark visited cells to prevent reuse.",
      "Explore all four directions and backtrack on failure."
    ]
  },
  {
    "question": "N-Queens: Place n queens on an n x n chessboard such that no two queens attack each other.",
    "answer": "<p>Backtrack row by row, tracking occupied columns and diagonals.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;String&gt;&gt; solveNQueens(int n) {\n    List&lt;List&lt;String&gt;&gt; res = new ArrayList&lt;&gt;();\n    char[][] board = new char[n][n];\n    for (char[] row : board) Arrays.fill(row, '.');\n    backtrack(res, board, 0, new HashSet&lt;&gt;(), new HashSet&lt;&gt;(), new HashSet&lt;&gt;());\n    return res;\n}\nvoid backtrack(List&lt;List&lt;String&gt;&gt; res, char[][] board, int row,\n               Set&lt;Integer&gt; cols, Set&lt;Integer&gt; diags, Set&lt;Integer&gt; antiDiags) {\n    if (row == board.length) { res.add(construct(board)); return; }\n    for (int col = 0; col &lt; board.length; col++) {\n        int d = row - col, ad = row + col;\n        if (cols.contains(col) || diags.contains(d) || antiDiags.contains(ad)) continue;\n        board[row][col] = 'Q';\n        cols.add(col); diags.add(d); antiDiags.add(ad);\n        backtrack(res, board, row + 1, cols, diags, antiDiags);\n        board[row][col] = '.';\n        cols.remove(col); diags.remove(d); antiDiags.remove(ad);\n    }\n}</code></pre>\n<p>Time O(n!), space O(n).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Backtracking",
      "Algorithms"
    ],
    "keyPoints": [
      "Place one queen per row to reduce the search space.",
      "Track columns and both diagonals to detect attacks.",
      "Backtrack by removing the queen and continuing to the next column."
    ]
  },
  {
    "question": "Subsets: Given an array of integers, return all possible subsets (power set).",
    "answer": "<p>Backtrack to build each subset, choosing whether to include each element.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;Integer&gt;&gt; subsets(int[] nums) {\n    List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();\n    backtrack(res, new ArrayList&lt;&gt;(), nums, 0);\n    return res;\n}\nvoid backtrack(List&lt;List&lt;Integer&gt;&gt; res, List&lt;Integer&gt; cur, int[] nums, int start) {\n    res.add(new ArrayList&lt;&gt;(cur));\n    for (int i = start; i &lt; nums.length; i++) {\n        cur.add(nums[i]);\n        backtrack(res, cur, nums, i + 1);\n        cur.remove(cur.size() - 1);\n    }\n}</code></pre>\n<p>Time O(2^n), space O(n) recursion depth.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Backtracking",
      "Algorithms"
    ],
    "keyPoints": [
      "At each step, decide to include or skip the current element.",
      "Add a copy of the current subset to the result before recursing.",
      "Backtrack by removing the last added element."
    ]
  },
  {
    "question": "Gas Station: Given gas stations on a circular route, find the starting station to complete the circuit.",
    "answer": "<p>If total gas is at least total cost, a solution exists. Track tank and reset start when tank goes negative.</p>\n<pre><code class=\"language-java\">public int canCompleteCircuit(int[] gas, int[] cost) {\n    int total = 0, tank = 0, start = 0;\n    for (int i = 0; i &lt; gas.length; i++) {\n        total += gas[i] - cost[i];\n        tank += gas[i] - cost[i];\n        if (tank &lt; 0) {\n            start = i + 1;\n            tank = 0;\n        }\n    }\n    return total &gt;= 0 ? start : -1;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "A valid start exists only if total gas is at least total cost.",
      "Reset the candidate start whenever the running tank becomes negative.",
      "The greedy reset works because any station before the failure cannot be a valid start."
    ]
  },
  {
    "question": "Write a SQL query to find employees who have been with the company for more than 5 years but have never received a promotion.",
    "answer": "<p>Filter by hire date and check that no promotion record exists for the employee.</p>\n<pre><code class=\"language-sql\">SELECT e.employee_id, e.name\nFROM employees e\nWHERE e.hire_date &lt;= CURRENT_DATE - INTERVAL '5 years'\n  AND NOT EXISTS (\n    SELECT 1 FROM promotions p\n    WHERE p.employee_id = e.employee_id\n  );</code></pre>\n<p>Adjust the date interval syntax for your SQL dialect.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Filter employees with a hire date at least 5 years ago.",
      "Use NOT EXISTS to find employees without any promotion record.",
      "Ensure promotion records are stored in a separate table or status field."
    ]
  },
  {
    "question": "Write a SQL query to find the first and last order date for each customer.",
    "answer": "<p>Use aggregate functions <code>MIN()</code> and <code>MAX()</code> grouped by customer.</p>\n<pre><code class=\"language-sql\">SELECT\n  customer_id,\n  MIN(order_date) AS first_order_date,\n  MAX(order_date) AS last_order_date\nFROM orders\nGROUP BY customer_id;</code></pre>\n<p>Add a <code>COUNT(*)</code> to also report total orders per customer.</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Group orders by customer_id.",
      "Use MIN(order_date) for the first order and MAX(order_date) for the last.",
      "Add COUNT(*) to include the total number of orders if needed."
    ]
  },
  {
    "question": "Find the longest consecutive sequence in an unsorted array in O(n) time.",
    "answer": "<p>Use a hash set to find sequence starts and then count consecutive numbers.</p>\n<pre><code class=\"language-java\">public int longestConsecutive(int[] nums) {\n    Set&lt;Integer&gt; set = new HashSet&lt;&gt;();\n    for (int n : nums) set.add(n);\n    int max = 0;\n    for (int n : set) {\n        if (!set.contains(n - 1)) {\n            int cur = n, len = 1;\n            while (set.contains(cur + 1)) { cur++; len++; }\n            max = Math.max(max, len);\n        }\n    }\n    return max;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Arrays",
      "Algorithms"
    ],
    "keyPoints": [
      "Store all numbers in a hash set for O(1) lookups.",
      "Only start counting from numbers that have no predecessor.",
      "Each number is visited at most twice across all sequences."
    ]
  },
  {
    "question": "Minimum number of arrows to burst balloons: Given points on a 2D plane, find minimum arrows to burst all balloons.",
    "answer": "<p>Sort balloons by end coordinate and shoot an arrow at the first end, skipping all balloons that overlap.</p>\n<pre><code class=\"language-java\">public int findMinArrowShots(int[][] points) {\n    if (points.length == 0) return 0;\n    Arrays.sort(points, (a, b) -&gt; Integer.compare(a[1], b[1]));\n    int arrows = 1, end = points[0][1];\n    for (int i = 1; i &lt; points.length; i++) {\n        if (points[i][0] &gt; end) {\n            arrows++;\n            end = points[i][1];\n        }\n    }\n    return arrows;\n}</code></pre>\n<p>Time O(n log n), space O(1).</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Greedy",
      "Algorithms"
    ],
    "keyPoints": [
      "Sort balloons by their right endpoint.",
      "Each arrow is positioned at the current balloon's end.",
      "Launch a new arrow when the next balloon starts after the current end."
    ]
  },
  {
    "question": "Implement an autocomplete/typeahead system using Trie data structure.",
    "answer": "<p>Build a trie where each node stores children and a list of top suggestions, or traverse to the prefix node and collect words.</p>\n<pre><code class=\"language-java\">class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isWord;\n}\n\npublic List&lt;String&gt; autocomplete(TrieNode root, String prefix) {\n    List&lt;String&gt; res = new ArrayList&lt;&gt;();\n    TrieNode node = root;\n    for (char c : prefix.toCharArray()) {\n        node = node.children[c - 'a'];\n        if (node == null) return res;\n    }\n    dfs(node, new StringBuilder(prefix), res);\n    return res;\n}\n\nvoid dfs(TrieNode node, StringBuilder sb, List&lt;String&gt; res) {\n    if (res.size() &gt;= 10) return;\n    if (node.isWord) res.add(sb.toString());\n    for (int i = 0; i &lt; 26; i++) {\n        if (node.children[i] != null) {\n            sb.append((char)(i + 'a'));\n            dfs(node.children[i], sb, res);\n            sb.deleteCharAt(sb.length() - 1);\n        }\n    }\n}</code></pre>\n<p>For scale, pre-compute top-k suggestions at each prefix node.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "Trees",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Navigate to the node representing the typed prefix.",
      "DFS from that node to collect complete words.",
      "Pre-store top suggestions or limit DFS for fast response times."
    ]
  },
  {
    "question": "Write a SQL query to detect duplicate transactions (same merchant, card, amount) within 10 minutes using window functions.",
    "answer": "<p>Use <code>LEAD()</code> or <code>LAG()</code> to compare each transaction with the next one by the same grouping.</p>\n<pre><code class=\"language-sql\">WITH Ordered AS (\n  SELECT\n    *,\n    LAG(transaction_time) OVER (\n      PARTITION BY merchant_id, card_id, amount\n      ORDER BY transaction_time\n    ) AS prev_time\n  FROM transactions\n)\nSELECT * FROM Ordered\nWHERE prev_time IS NOT NULL\n  AND transaction_time - prev_time &lt;= INTERVAL '10 minutes';</code></pre>\n<p>Adjust the interval arithmetic for your database dialect.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Partition by merchant, card, and amount to compare similar transactions.",
      "Use LAG to look at the previous transaction time.",
      "Filter rows where the time gap is 10 minutes or less."
    ]
  },
  {
    "question": "Design a database for a fitness tracking application where users can track workouts, log exercises and view progress over time.",
    "answer": "<p>Normalize around Users, Workouts, Exercises, and Sets, with optional summary tables for progress charts.</p>\n<pre><code class=\"language-sql\">CREATE TABLE users (user_id BIGINT PRIMARY KEY, name VARCHAR(255));\nCREATE TABLE workouts (\n  workout_id BIGINT PRIMARY KEY,\n  user_id BIGINT REFERENCES users(user_id),\n  workout_date TIMESTAMP,\n  notes TEXT\n);\nCREATE TABLE exercises (exercise_id BIGINT PRIMARY KEY, name VARCHAR(255));\nCREATE TABLE workout_sets (\n  set_id BIGINT PRIMARY KEY,\n  workout_id BIGINT REFERENCES workouts(workout_id),\n  exercise_id BIGINT REFERENCES exercises(exercise_id),\n  reps INT, weight DECIMAL, duration INT\n);</code></pre>\n<p>Index by user_id and workout_date for progress queries.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Separate users, workouts, exercises, and individual sets.",
      "Foreign keys link sets to workouts and exercises.",
      "Add indexes on user_id and date for progress-over-time queries."
    ]
  },
  {
    "question": "Write a SQL query to find the daily active user (DAU) count for the past 30 days.",
    "answer": "<p>Count distinct active users per day, filtering to the last 30 days.</p>\n<pre><code class=\"language-sql\">SELECT\n  DATE(activity_time) AS day,\n  COUNT(DISTINCT user_id) AS dau\nFROM user_activity\nWHERE activity_time &gt;= CURRENT_DATE - INTERVAL '30 days'\nGROUP BY DATE(activity_time)\nORDER BY day;</code></pre>\n<p>Pre-aggregated daily tables can speed up dashboard queries.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Filter activity records to the past 30 days.",
      "Group by date and count distinct user_ids.",
      "Use COUNT DISTINCT for accurate DAU per day."
    ]
  },
  {
    "question": "Counting Bits: Given an integer n, return an array where each element i has the number of 1's in its binary representation.",
    "answer": "<p>Use DP: number of 1s in i equals number of 1s in i without the lowest set bit plus one.</p>\n<pre><code class=\"language-java\">public int[] countBits(int n) {\n    int[] res = new int[n + 1];\n    for (int i = 1; i &lt;= n; i++) {\n        res[i] = res[i & (i - 1)] + 1;\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(1) excluding output.</p>",
    "difficulty": "Beginner",
    "tags": [
      "Coding",
      "DSA",
      "Bit Manipulation",
      "Algorithms"
    ],
    "keyPoints": [
      "i & (i - 1) clears the lowest set bit of i.",
      "The bit count of i is one more than the bit count of i & (i - 1).",
      "Build the result iteratively for O(n) total time."
    ]
  },
  {
    "question": "Write a SQL query to find the retention rate of users from day 1 to day 7 (cohort analysis).",
    "answer": "<p>Define cohorts by first activity date, then count users active again on day 7.</p>\n<pre><code class=\"language-sql\">WITH FirstActivity AS (\n  SELECT user_id, MIN(DATE(activity_time)) AS cohort_date\n  FROM user_activity\n  GROUP BY user_id\n), Day7Activity AS (\n  SELECT DISTINCT a.user_id\n  FROM user_activity a\n  JOIN FirstActivity f ON a.user_id = f.user_id\n  WHERE DATE(a.activity_time) = f.cohort_date + INTERVAL '7 days'\n)\nSELECT\n  f.cohort_date,\n  COUNT(DISTINCT f.user_id) AS cohort_size,\n  COUNT(DISTINCT d.user_id) AS retained_day7,\n  100.0 * COUNT(DISTINCT d.user_id) / COUNT(DISTINCT f.user_id) AS retention_rate\nFROM FirstActivity f\nLEFT JOIN Day7Activity d ON f.user_id = d.user_id\nGROUP BY f.cohort_date;</code></pre>\n<p>Adjust date arithmetic for your SQL dialect.</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Determine each user's cohort date from their first activity.",
      "Identify users active exactly 7 days after their cohort date.",
      "Divide retained users by cohort size to get retention rate."
    ]
  },
  {
    "question": "Find the longest valid (well-formed) parentheses substring.",
    "answer": "<p>Use a stack to track indices, starting with -1 to handle base cases.</p>\n<pre><code class=\"language-java\">public int longestValidParentheses(String s) {\n    Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();\n    stack.push(-1);\n    int max = 0;\n    for (int i = 0; i &lt; s.length(); i++) {\n        if (s.charAt(i) == '(') {\n            stack.push(i);\n        } else {\n            stack.pop();\n            if (stack.isEmpty()) stack.push(i);\n            else max = Math.max(max, i - stack.peek());\n        }\n    }\n    return max;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
    "difficulty": "Advanced",
    "tags": [
      "Coding",
      "DSA",
      "Stack",
      "Algorithms",
      "Data Structures"
    ],
    "keyPoints": [
      "Push indices of '(' onto the stack.",
      "Use the base index -1 to compute lengths correctly.",
      "Update the maximum length after every closing parenthesis."
    ]
  },
  {
    "question": "Write a SQL query to find the difference between two dates in business days only (excluding weekends).",
    "answer": "<p>Count full weeks and add remaining weekdays, or use a calendar/numbers table.</p>\n<pre><code class=\"language-sql\">SELECT\n  start_date,\n  end_date,\n  (end_date - start_date) -\n  2 * ((end_date - start_date + EXTRACT(DOW FROM start_date)) / 7)\n  AS business_days\nFROM dates;</code></pre>\n<p>Production systems often use a date dimension table that marks holidays and weekends.</p>",
    "difficulty": "Intermediate",
    "tags": [
      "Coding",
      "DSA",
      "SQL"
    ],
    "keyPoints": [
      "Subtract total days and remove weekend days.",
      "Account for the start day of week when counting weekends.",
      "Use a calendar table to also exclude holidays."
    ]
  }
]
};
