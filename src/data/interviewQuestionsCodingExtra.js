// Extra coding interview problems (advanced / frequently asked)

export const codingExtraQuestions = {
  "questions": [
    {
      "question": "Find all unique triplets in an array that sum to zero (3Sum)?",
      "answer": "<p>The classic <strong>3Sum</strong> problem asks for all unique triplets <code>[a, b, c]</code> such that <code>a + b + c = 0</code>. The optimal approach sorts the array and uses a <strong>two-pointer</strong> scan for each pivot element.</p>\n\n<strong>Algorithm:</strong>\n<ol>\n  <li>Sort the array: <strong>O(n log n)</strong></li>\n  <li>Fix one element <code>i</code>, then use two pointers <code>left = i + 1</code> and <code>right = n - 1</code></li>\n  <li>Skip duplicate values for <code>i</code>, <code>left</code>, and <code>right</code> to avoid duplicate triplets</li>\n</ol>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>Two Pointers</td><td>O(n²)</td><td>O(1) excluding output</td></tr>\n  <tr><td>HashSet (brute-style)</td><td>O(n²)</td><td>O(n)</td></tr>\n</table>\n\n<strong>Java:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {\n    List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();\n    Arrays.sort(nums);\n    int n = nums.length;\n\n    for (int i = 0; i &lt; n - 2; i++) {\n        if (i &gt; 0 && nums[i] == nums[i - 1]) continue;\n        int left = i + 1, right = n - 1;\n\n        while (left &lt; right) {\n            int sum = nums[i] + nums[left] + nums[right];\n            if (sum == 0) {\n                result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n                while (left &lt; right && nums[left] == nums[left + 1]) left++;\n                while (left &lt; right && nums[right] == nums[right - 1]) right--;\n                left++;\n                right--;\n            } else if (sum &lt; 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    return result;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">def three_sum(nums: list[int]) -&gt; list[list[int]]:\n    nums.sort()\n    result = []\n    n = len(nums)\n\n    for i in range(n - 2):\n        if i &gt; 0 and nums[i] == nums[i - 1]:\n            continue\n        left, right = i + 1, n - 1\n        while left &lt; right:\n            total = nums[i] + nums[left] + nums[right]\n            if total == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                while left &lt; right and nums[left] == nums[left + 1]:\n                    left += 1\n                while left &lt; right and nums[right] == nums[right - 1]:\n                    right -= 1\n                left += 1\n                right -= 1\n            elif total &lt; 0:\n                left += 1\n            else:\n                right -= 1\n    return result</code></pre>\n\n<strong>LeetCode:</strong> 15. 3Sum — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Arrays",
        "Two Pointers",
        "Sorting"
      ],
      "keyPoints": [
        "Sort the array first, then fix one element and use two pointers for the remaining pair.",
        "Skip duplicate values for the pivot and both pointers to ensure unique triplets.",
        "Time complexity is O(n²) and space is O(1) excluding the output list."
      ]
    },
    {
      "question": "Find the maximum value in every sliding window of size k?",
      "answer": "<p>The <strong>sliding window maximum</strong> problem requires the maximum of each contiguous subarray of size <code>k</code>. A monotonic <strong>deque</strong> gives an <strong>O(n)</strong> solution by storing indices in decreasing value order.</p>\n\n<strong>Deque Invariant:</strong>\n<ul>\n  <li>Front of deque always holds the index of the current maximum</li>\n  <li>Remove indices that fall outside the current window</li>\n  <li>Remove from the back any indices whose values are less than or equal to the new value</li>\n</ul>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>Monotonic Deque</td><td>O(n)</td><td>O(k)</td></tr>\n  <tr><td>Max-Heap</td><td>O(n log k)</td><td>O(k)</td></tr>\n  <tr><td>Nested Loops</td><td>O(n × k)</td><td>O(1)</td></tr>\n</table>\n\n<strong>Java:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int[] maxSlidingWindow(int[] nums, int k) {\n    if (nums == null || nums.length == 0) return new int[0];\n    int n = nums.length;\n    int[] result = new int[n - k + 1];\n    Deque&lt;Integer&gt; deque = new ArrayDeque&lt;&gt;();\n\n    for (int i = 0; i &lt; n; i++) {\n        // Remove indices out of the current window\n        if (!deque.isEmpty() && deque.peekFirst() &lt; i - k + 1) {\n            deque.pollFirst();\n        }\n\n        // Maintain decreasing order of values\n        while (!deque.isEmpty() && nums[deque.peekLast()] &lt;= nums[i]) {\n            deque.pollLast();\n        }\n\n        deque.offerLast(i);\n\n        // Start recording results once window is full\n        if (i &gt;= k - 1) {\n            result[i - k + 1] = nums[deque.peekFirst()];\n        }\n    }\n    return result;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">from collections import deque\n\ndef max_sliding_window(nums: list[int], k: int) -&gt; list[int]:\n    if not nums:\n        return []\n    result = []\n    dq = deque()  # stores indices in decreasing value order\n\n    for i, val in enumerate(nums):\n        if dq and dq[0] &lt; i - k + 1:\n            dq.popleft()\n\n        while dq and nums[dq[-1]] &lt;= val:\n            dq.pop()\n\n        dq.append(i)\n\n        if i &gt;= k - 1:\n            result.append(nums[dq[0]])\n\n    return result</code></pre>\n\n<strong>LeetCode:</strong> 239. Sliding Window Maximum — Hard.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Arrays",
        "Sliding Window",
        "Deque",
        "Monotonic Queue"
      ],
      "keyPoints": [
        "Use a monotonic deque to keep indices in decreasing value order.",
        "Evict indices that fall outside the current window and smaller values before adding a new one.",
        "Achieves O(n) time and O(k) space, much faster than a heap or nested loops."
      ]
    },
    {
      "question": "Find the minimum number of meeting rooms required (Meeting Rooms II)?",
      "answer": "<p>Given a list of meeting intervals, find the maximum number of rooms needed at any time. The classic solution sorts start and end times separately and uses a <strong>two-pointer sweep</strong>.</p>\n\n<strong>Algorithm:</strong>\n<ol>\n  <li>Sort all start times and all end times</li>\n  <li>Move through the day: every start increments the active count, every end decrements it</li>\n  <li>Track the maximum active meetings</li>\n</ol>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>Two-Pointer Sweep</td><td>O(n log n)</td><td>O(n)</td></tr>\n  <tr><td>Min-Heap of End Times</td><td>O(n log n)</td><td>O(n)</td></tr>\n</table>\n\n<strong>Java — Two-Pointer Sweep:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int minMeetingRooms(int[][] intervals) {\n    if (intervals == null || intervals.length == 0) return 0;\n    int n = intervals.length;\n    int[] starts = new int[n];\n    int[] ends = new int[n];\n\n    for (int i = 0; i &lt; n; i++) {\n        starts[i] = intervals[i][0];\n        ends[i] = intervals[i][1];\n    }\n\n    Arrays.sort(starts);\n    Arrays.sort(ends);\n\n    int rooms = 0, active = 0;\n    int s = 0, e = 0;\n\n    while (s &lt; n) {\n        if (starts[s] &gt;= ends[e]) {\n            active--;\n            e++;\n        }\n        active++;\n        s++;\n        rooms = Math.max(rooms, active);\n    }\n    return rooms;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">def min_meeting_rooms(intervals: list[list[int]]) -&gt; int:\n    if not intervals:\n        return 0\n    starts = sorted(s for s, _ in intervals)\n    ends = sorted(e for _, e in intervals)\n\n    rooms = active = e = 0\n    for s in range(len(starts)):\n        if starts[s] &gt;= ends[e]:\n            active -= 1\n            e += 1\n        active += 1\n        rooms = max(rooms, active)\n    return rooms</code></pre>\n\n<strong>LeetCode:</strong> 253. Meeting Rooms II — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Intervals",
        "Sorting",
        "Two Pointers",
        "Greedy"
      ],
      "keyPoints": [
        "Sort start times and end times separately, then sweep through both arrays.",
        "Increment active meetings on every start and decrement when a meeting ends.",
        "The peak active count equals the minimum number of rooms required."
      ]
    },
    {
      "question": "Determine if all courses can be finished (Course Schedule / Topological Sort)?",
      "answer": "<p>The Course Schedule problem is equivalent to detecting a <strong>cycle in a directed graph</strong>. If the graph has a cycle, some courses have circular prerequisites and cannot be completed. A <strong>Kahn's algorithm</strong> BFS topological sort detects this.</p>\n\n<strong>Algorithm (Kahn's BFS):</strong>\n<ol>\n  <li>Build an adjacency list and an in-degree array</li>\n  <li>Enqueue all nodes with in-degree 0</li>\n  <li>Process nodes, reduce in-degrees of neighbors, and enqueue any neighbor that reaches in-degree 0</li>\n  <li>If all nodes are processed, the graph is a DAG</li>\n</ol>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>Kahn's BFS</td><td>O(V + E)</td><td>O(V + E)</td></tr>\n  <tr><td>DFS with Recursion Stack</td><td>O(V + E)</td><td>O(V + E)</td></tr>\n</table>\n\n<strong>Java — Kahn's Algorithm:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public boolean canFinish(int numCourses, int[][] prerequisites) {\n    List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();\n    int[] inDegree = new int[numCourses];\n\n    for (int i = 0; i &lt; numCourses; i++) graph.add(new ArrayList&lt;&gt;());\n    for (int[] pre : prerequisites) {\n        graph.get(pre[1]).add(pre[0]);\n        inDegree[pre[0]]++;\n    }\n\n    Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();\n    for (int i = 0; i &lt; numCourses; i++) {\n        if (inDegree[i] == 0) queue.offer(i);\n    }\n\n    int processed = 0;\n    while (!queue.isEmpty()) {\n        int course = queue.poll();\n        processed++;\n        for (int next : graph.get(course)) {\n            if (--inDegree[next] == 0) queue.offer(next);\n        }\n    }\n\n    return processed == numCourses;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">from collections import deque\n\ndef can_finish(num_courses: int, prerequisites: list[list[int]]) -&gt; bool:\n    graph = [[] for _ in range(num_courses)]\n    in_degree = [0] * num_courses\n\n    for course, prereq in prerequisites:\n        graph[prereq].append(course)\n        in_degree[course] += 1\n\n    queue = deque(i for i, d in enumerate(in_degree) if d == 0)\n    processed = 0\n\n    while queue:\n        course = queue.popleft()\n        processed += 1\n        for nxt in graph[course]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0:\n                queue.append(nxt)\n\n    return processed == num_courses</code></pre>\n\n<strong>LeetCode:</strong> 207. Course Schedule — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Graph",
        "Topological Sort",
        "BFS",
        "Cycle Detection"
      ],
      "keyPoints": [
        "Model prerequisites as a directed graph and detect cycles or compute a topological order.",
        "Kahn's algorithm uses in-degrees and a queue to process nodes with no remaining prerequisites.",
        "If processed node count equals total courses, all courses can be finished."
      ]
    },
    {
      "question": "Find the number of provinces (connected components) using Union-Find?",
      "answer": "<p>A province is a group of directly or indirectly connected cities. The <strong>Union-Find</strong> (Disjoint Set Union) data structure efficiently merges connected cities and counts components.</p>\n\n<strong>Union-Find Operations:</strong>\n<table>\n  <tr><th>Operation</th><th>Time (with path compression + union by rank)</th></tr>\n  <tr><td>Find</td><td>O(α(n)) ≈ amortized O(1)</td></tr>\n  <tr><td>Union</td><td>O(α(n)) ≈ amortized O(1)</td></tr>\n</table>\n\n<strong>Java:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">class UnionFind {\n    int[] parent, rank;\n\n    UnionFind(int n) {\n        parent = new int[n];\n        rank = new int[n];\n        for (int i = 0; i &lt; n; i++) parent[i] = i;\n    }\n\n    int find(int x) {\n        if (parent[x] != x) parent[x] = find(parent[x]);\n        return parent[x];\n    }\n\n    void union(int x, int y) {\n        int px = find(x), py = find(y);\n        if (px == py) return;\n        if (rank[px] &lt; rank[py]) {\n            parent[px] = py;\n        } else if (rank[px] &gt; rank[py]) {\n            parent[py] = px;\n        } else {\n            parent[py] = px;\n            rank[px]++;\n        }\n    }\n}\n\npublic int findCircleNum(int[][] isConnected) {\n    int n = isConnected.length;\n    UnionFind uf = new UnionFind(n);\n\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = i + 1; j &lt; n; j++) {\n            if (isConnected[i][j] == 1) uf.union(i, j);\n        }\n    }\n\n    int provinces = 0;\n    for (int i = 0; i &lt; n; i++) {\n        if (uf.find(i) == i) provinces++;\n    }\n    return provinces;\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">class UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n\n    def find(self, x: int) -&gt; int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n\n    def union(self, x: int, y: int) -&gt; None:\n        px, py = self.find(x), self.find(y)\n        if px == py:\n            return\n        if self.rank[px] &lt; self.rank[py]:\n            self.parent[px] = py\n        elif self.rank[px] &gt; self.rank[py]:\n            self.parent[py] = px\n        else:\n            self.parent[py] = px\n            self.rank[px] += 1\n\ndef find_circle_num(is_connected: list[list[int]]) -&gt; int:\n    n = len(is_connected)\n    uf = UnionFind(n)\n    for i in range(n):\n        for j in range(i + 1, n):\n            if is_connected[i][j] == 1:\n                uf.union(i, j)\n    return sum(uf.find(i) == i for i in range(n))</code></pre>\n\n<strong>LeetCode:</strong> 547. Number of Provinces — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Graph",
        "Union-Find",
        "Connected Components"
      ],
      "keyPoints": [
        "Union-Find merges connected cities and lets you count remaining root components.",
        "Path compression and union by rank make each operation nearly O(1) amortized.",
        "Only the upper triangle of the adjacency matrix needs to be scanned."
      ]
    },
    {
      "question": "Clone a connected undirected graph?",
      "answer": "<p>Clone an undirected graph where each node has a value and a list of neighbors. Use a <strong>HashMap</strong> to map original nodes to their copies and either BFS or DFS to traverse the graph.</p>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>DFS with HashMap</td><td>O(V + E)</td><td>O(V)</td></tr>\n  <tr><td>BFS with HashMap</td><td>O(V + E)</td><td>O(V)</td></tr>\n</table>\n\n<strong>Java — DFS:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">class Node {\n    int val;\n    List&lt;Node&gt; neighbors;\n    Node(int val) { this.val = val; this.neighbors = new ArrayList&lt;&gt;(); }\n}\n\npublic Node cloneGraph(Node node) {\n    if (node == null) return null;\n    Map&lt;Node, Node&gt; map = new HashMap&lt;&gt;();\n    return dfs(node, map);\n}\n\nprivate Node dfs(Node node, Map&lt;Node, Node&gt; map) {\n    if (map.containsKey(node)) return map.get(node);\n    Node copy = new Node(node.val);\n    map.put(node, copy);\n    for (Node neighbor : node.neighbors) {\n        copy.neighbors.add(dfs(neighbor, map));\n    }\n    return copy;\n}</code></pre>\n\n<strong>Python — BFS:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">from collections import deque\n\nclass Node:\n    def __init__(self, val=0, neighbors=None):\n        self.val = val\n        self.neighbors = neighbors if neighbors is not None else []\n\ndef clone_graph(node: 'Node') -&gt; 'Node':\n    if not node:\n        return None\n    copies = {node: Node(node.val)}\n    queue = deque([node])\n\n    while queue:\n        curr = queue.popleft()\n        for neighbor in curr.neighbors:\n            if neighbor not in copies:\n                copies[neighbor] = Node(neighbor.val)\n                queue.append(neighbor)\n            copies[curr].neighbors.append(copies[neighbor])\n\n    return copies[node]</code></pre>\n\n<strong>LeetCode:</strong> 133. Clone Graph — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Graph",
        "DFS",
        "BFS",
        "HashMap"
      ],
      "keyPoints": [
        "Use a HashMap to associate every original node with its new copy.",
        "Create the copy node before recursing or enqueuing to avoid infinite cycles.",
        "Both DFS and BFS run in O(V + E) time and O(V) space."
      ]
    },
    {
      "question": "Determine if a string can be segmented into dictionary words (Word Break)?",
      "answer": "<p><strong>Word Break</strong> asks whether a string can be split into a sequence of one or more dictionary words. The standard solution uses <strong>dynamic programming</strong> with a boolean array <code>dp[i]</code> meaning <code>s[0..i)</code> can be segmented.</p>\n\n<strong>Algorithm:</strong>\n<ol>\n  <li><code>dp[0] = true</code> (empty string is segmentable)</li>\n  <li>For each end index <code>i</code>, check every possible start <code>j</code> where <code>dp[j]</code> is true and <code>s[j..i)</code> is in the dictionary</li>\n  <li><code>dp[s.length()]</code> is the answer</li>\n</ol>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>DP (nested loop)</td><td>O(n² × m)*</td><td>O(n)</td></tr>\n  <tr><td>DP + Trie</td><td>O(n × L)</td><td>O(n + total chars)</td></tr>\n</table>\n<p>*m = max word length; substring check in a HashSet is O(m).</p>\n\n<strong>Java:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public boolean wordBreak(String s, List&lt;String&gt; wordDict) {\n    Set&lt;String&gt; dict = new HashSet&lt;&gt;(wordDict);\n    boolean[] dp = new boolean[s.length() + 1];\n    dp[0] = true;\n\n    int maxLen = 0;\n    for (String w : wordDict) maxLen = Math.max(maxLen, w.length());\n\n    for (int i = 1; i &lt;= s.length(); i++) {\n        for (int j = Math.max(0, i - maxLen); j &lt; i; j++) {\n            if (dp[j] && dict.contains(s.substring(j, i))) {\n                dp[i] = true;\n                break;\n            }\n        }\n    }\n    return dp[s.length()];\n}</code></pre>\n\n<strong>Python:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">def word_break(s: str, word_dict: list[str]) -&gt; bool:\n    words = set(word_dict)\n    max_len = max((len(w) for w in word_dict), default=0)\n    dp = [False] * (len(s) + 1)\n    dp[0] = True\n\n    for i in range(1, len(s) + 1):\n        for j in range(max(0, i - max_len), i):\n            if dp[j] and s[j:i] in words:\n                dp[i] = True\n                break\n    return dp[len(s)]</code></pre>\n\n<strong>LeetCode:</strong> 139. Word Break — Medium.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Dynamic Programming",
        "Strings",
        "HashSet"
      ],
      "keyPoints": [
        "dp[i] represents whether the prefix s[0:i] can be segmented using dictionary words.",
        "Optimize by limiting the inner loop to the maximum dictionary word length.",
        "Time complexity is O(n × max_word_length) and space is O(n)."
      ]
    },
    {
      "question": "Compute the minimum edit distance between two strings?",
      "answer": "<p><strong>Edit Distance</strong> (Levenshtein distance) is the minimum number of insert, delete, or replace operations to transform one string into another. The solution is a classic 2D dynamic programming table.</p>\n\n<strong>Recurrence:</strong>\n<ul>\n  <li>If chars match: <code>dp[i][j] = dp[i-1][j-1]</code></li>\n  <li>If chars differ: <code>dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])</code> (delete, insert, replace)</li>\n</ul>\n\n<strong>Complexity:</strong>\n<table>\n  <tr><th>Approach</th><th>Time</th><th>Space</th></tr>\n  <tr><td>2D DP</td><td>O(m × n)</td><td>O(m × n)</td></tr>\n  <tr><td>1D DP (rolling array)</td><td>O(m × n)</td><td>O(min(m, n))</td></tr>\n</table>\n\n<strong>Java — 2D DP:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n\n    for (int i = 0; i &lt;= m; i++) dp[i][0] = i;\n    for (int j = 0; j &lt;= n; j++) dp[0][j] = j;\n\n    for (int i = 1; i &lt;= m; i++) {\n        for (int j = 1; j &lt;= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else {\n                dp[i][j] = 1 + Math.min(\n                    dp[i - 1][j],      // delete\n                    Math.min(\n                        dp[i][j - 1],  // insert\n                        dp[i - 1][j - 1] // replace\n                    )\n                );\n            }\n        }\n    }\n    return dp[m][n];\n}</code></pre>\n\n<strong>Python — 1D DP:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-python\">def min_distance(word1: str, word2: str) -&gt; int:\n    if len(word1) &lt; len(word2):\n        word1, word2 = word2, word1\n    m, n = len(word1), len(word2)\n    prev = list(range(n + 1))\n\n    for i in range(1, m + 1):\n        curr = [i] + [0] * n\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]:\n                curr[j] = prev[j - 1]\n            else:\n                curr[j] = 1 + min(prev[j], curr[j - 1], prev[j - 1])\n        prev = curr\n    return prev[n]</code></pre>\n\n<strong>LeetCode:</strong> 72. Edit Distance — Medium.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Dynamic Programming",
        "Strings"
      ],
      "keyPoints": [
        "Build a DP table where dp[i][j] is the edit distance between the first i and j characters.",
        "Matching characters carry the diagonal value; mismatches cost 1 plus the best of delete, insert, or replace.",
        "Space can be optimized to O(min(m, n)) using a rolling 1D array."
      ]
    }
  ]
}
