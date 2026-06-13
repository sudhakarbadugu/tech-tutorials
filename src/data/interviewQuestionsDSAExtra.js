// Additional DSA interview questions covering advanced data structures and algorithms

export const dsaExtraQuestions = {
  questions: [
    {
      question: "How do you implement a Trie (prefix tree) for autocomplete word search?",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      A Trie is a tree where each node represents a character. Words share common prefixes, making prefix search efficient.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Diagram:</h6>
    <pre><code class="language-text">         root
        /  |  \\
       h   t   a
      /    |    \\
     e     h     p
    / \\    |     \\
   l   r   e      p
  /        |       \\
 l         (the)   l
(end)              (apple)</code></pre>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Insert</td><td>O(m)</td><td>O(m)</td></tr>
        <tr><td>Search</td><td>O(m)</td><td>O(1)</td></tr>
        <tr><td>Prefix</td><td>O(m)</td><td>O(1)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">import java.util.*;

class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord;
}

public class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return node.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return true;
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "Trie", "Tree", "String"],
      keyPoints: [
        "A Trie stores characters as nodes and shares common prefixes between words.",
        "Insertion, search, and prefix lookup all run in O(m) time where m is word length.",
        "Useful for autocomplete, spell-checking, and IP routing."
      ]
    },
    {
      question: "Explain and implement a Segment Tree for range sum queries.",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      A segment tree is a binary tree where each node stores the sum of a segment. It supports point updates and range sum queries in O(log n).
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Diagram:</h6>
    <pre><code class="language-text">Array: [1, 3, 5, 7, 9, 11]

        [0..5]=36
       /          \\
  [0..2]=9      [3..5]=27
  /      \\       /       \\
[0..1]=4 [2]=5 [3..4]=16 [5]=11
 /    \\          /    \\
[0]=1 [1]=3    [3]=7 [4]=9</code></pre>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Build</td><td>O(n)</td><td>O(n)</td></tr>
        <tr><td>Range Query</td><td>O(log n)</td><td>O(log n)</td></tr>
        <tr><td>Point Update</td><td>O(log n)</td><td>O(log n)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">public class SegmentTree {
    private int[] tree;
    private int n;

    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }

    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }

    public int query(int left, int right) {
        return query(0, 0, n - 1, left, right);
    }

    private int query(int node, int start, int end, int left, int right) {
        if (right &lt; start || end &lt; left) {
            return 0;
        }
        if (left &lt;= start &amp;&amp; end &lt;= right) {
            return tree[node];
        }
        int mid = (start + end) / 2;
        int leftSum = query(2 * node + 1, start, mid, left, right);
        int rightSum = query(2 * node + 2, mid + 1, end, left, right);
        return leftSum + rightSum;
    }

    public void update(int index, int value) {
        update(0, 0, n - 1, index, value);
    }

    private void update(int node, int start, int end, int index, int value) {
        if (start == end) {
            tree[node] = value;
        } else {
            int mid = (start + end) / 2;
            if (index &lt;= mid) {
                update(2 * node + 1, start, mid, index, value);
            } else {
                update(2 * node + 2, mid + 1, end, index, value);
            }
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "Segment Tree", "Tree", "Range Query"],
      keyPoints: [
        "Segment trees store aggregated values (sum, min, max) over array intervals.",
        "Build is O(n); range queries and point updates are O(log n).",
        "Widely used for range query problems and competitive programming."
      ]
    },
    {
      question: "How does a Min-Heap work and how do you implement a Priority Queue in Java?",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      A min-heap is a complete binary tree where each parent is smaller than its children. Java's PriorityQueue is backed by a heap.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Diagram:</h6>
    <pre><code class="language-text">Min-Heap: [1, 5, 3, 7, 9]

        1
       / \\
      3   5
     / \\
    7   9</code></pre>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Insert</td><td>O(log n)</td><td>O(1)</td></tr>
        <tr><td>Extract Min</td><td>O(log n)</td><td>O(1)</td></tr>
        <tr><td>Peek</td><td>O(1)</td><td>O(1)</td></tr>
        <tr><td>Heapify</td><td>O(n)</td><td>O(1)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">import java.util.*;

public class PriorityQueueDemo {
    public static void main(String[] args) {
        PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();
        minHeap.offer(5);
        minHeap.offer(1);
        minHeap.offer(3);

        System.out.println(minHeap.poll()); // 1
        System.out.println(minHeap.poll()); // 3
        System.out.println(minHeap.poll()); // 5

        // Max-heap using custom comparator
        PriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;(Collections.reverseOrder());
        maxHeap.offer(5);
        maxHeap.offer(1);
        maxHeap.offer(3);
        System.out.println(maxHeap.poll()); // 5
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Intermediate",
      tags: ["DSA", "Heap", "Priority Queue"],
      keyPoints: [
        "A min-heap keeps the smallest element at the root for O(1) access.",
        "Insertion and extraction cost O(log n) due to heapify-up/heapify-down.",
        "Java PriorityQueue defaults to min-heap; use Collections.reverseOrder() for max-heap."
      ]
    },
    {
      question: "Explain Dijkstra's algorithm for finding the shortest path and implement it.",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      Dijkstra's algorithm greedily expands the nearest unvisited node using a priority queue. It works for graphs with non-negative edge weights.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Case</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Binary Heap</td><td>O((V + E) log V)</td><td>O(V)</td></tr>
        <tr><td>Dense Graph</td><td>O(V^2)</td><td>O(V)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">import java.util.*;

class Edge {
    int to, weight;
    Edge(int to, int weight) {
        this.to = to;
        this.weight = weight;
    }
}

public class Dijkstra {
    public static int[] shortestPath(List&lt;List&lt;Edge&gt;&gt; graph, int source) {
        int n = graph.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        PriorityQueue&lt;int[]&gt; pq = new PriorityQueue&lt;&gt;(Comparator.comparingInt(a -&gt; a[1]));
        pq.offer(new int[]{source, 0});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int u = curr[0];
            int d = curr[1];

            if (d &gt; dist[u]) continue;

            for (Edge edge : graph.get(u)) {
                int v = edge.to;
                int w = edge.weight;
                if (dist[u] + w &lt; dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{v, dist[v]});
                }
            }
        }
        return dist;
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "Graph", "Dijkstra", "Shortest Path"],
      keyPoints: [
        "Dijkstra uses a greedy approach with a priority queue to find shortest paths.",
        "Only works correctly when all edge weights are non-negative.",
        "Time complexity is O((V + E) log V) with a binary heap."
      ]
    },
    {
      question: "Compare DFS and BFS. When should you use each?",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      DFS explores as far as possible along each branch before backtracking. BFS explores all neighbors level by level.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Comparison:</h6>
    <table class="table table-sm">
      <thead><tr><th>Aspect</th><th>DFS</th><th>BFS</th></tr></thead>
      <tbody>
        <tr><td>Data Structure</td><td>Stack (recursion)</td><td>Queue</td></tr>
        <tr><td>Memory</td><td>O(h) height</td><td>O(w) width</td></tr>
        <tr><td>Shortest Path</td><td>No guarantee</td><td>Yes in unweighted graphs</td></tr>
        <tr><td>Use Cases</td><td>Cycle detection, topological sort</td><td>Shortest path, level-order traversal</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">import java.util.*;

public class GraphTraversal {
    // DFS
    public void dfs(List&lt;List&lt;Integer&gt;&gt; graph, int start, boolean[] visited) {
        visited[start] = true;
        System.out.print(start + " ");
        for (int neighbor : graph.get(start)) {
            if (!visited[neighbor]) {
                dfs(graph, neighbor, visited);
            }
        }
    }

    // BFS
    public void bfs(List&lt;List&lt;Integer&gt;&gt; graph, int start) {
        boolean[] visited = new boolean[graph.size()];
        Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();
        visited[start] = true;
        queue.offer(start);

        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for (int neighbor : graph.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Intermediate",
      tags: ["DSA", "Graph", "DFS", "BFS"],
      keyPoints: [
        "DFS is better for deep exploration, cycle detection, and backtracking problems.",
        "BFS finds the shortest path in unweighted graphs and processes nodes level by level.",
        "Choose DFS when memory is limited and the tree is wide; choose BFS for shortest path."
      ]
    },
    {
      question: "Solve the 0/1 Knapsack problem using dynamic programming.",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      Build a DP table where dp[i][w] is the maximum value using the first i items with capacity w. For each item, decide whether to include it or not.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Recurrence:</h6>
    <pre><code class="language-text">dp[i][w] = max(dp[i-1][w], value[i-1] + dp[i-1][w-weight[i-1]])</code></pre>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Approach</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>2D DP</td><td>O(n * W)</td><td>O(n * W)</td></tr>
        <tr><td>1D DP</td><td>O(n * W)</td><td>O(W)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">public class Knapsack {
    public static int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[] dp = new int[capacity + 1];

        for (int i = 0; i &lt; n; i++) {
            for (int w = capacity; w &gt;= weights[i]; w--) {
                dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
            }
        }
        return dp[capacity];
    }

    public static void main(String[] args) {
        int[] weights = {1, 3, 4, 5};
        int[] values = {1, 4, 5, 7};
        int capacity = 7;
        System.out.println(knapsack(weights, values, capacity)); // 9
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "Dynamic Programming", "Knapsack"],
      keyPoints: [
        "The 0/1 Knapsack DP table tracks maximum value for every capacity up to W.",
        "Iterate capacities in reverse when using 1D array to avoid reusing the same item.",
        "Time complexity is O(n * W) and space can be optimized to O(W)."
      ]
    },
    {
      question: "Design and implement an LRU (Least Recently Used) Cache.",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      Combine a HashMap for O(1) key lookup and a doubly linked list for O(1) eviction of the least recently used item.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Get</td><td>O(1)</td><td>O(capacity)</td></tr>
        <tr><td>Put</td><td>O(1)</td><td>O(capacity)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">import java.util.*;

class LRUCache {
    private final int capacity;
    private final Map&lt;Integer, Node&gt; map;
    private final Node head, tail;

    private static class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap&lt;&gt;();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        moveToHead(node);
        return node.value;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            map.get(key).value = value;
            moveToHead(map.get(key));
        } else {
            Node node = new Node(key, value);
            map.put(key, node);
            addToHead(node);
            if (map.size() &gt; capacity) {
                Node lru = tail.prev;
                removeNode(lru);
                map.remove(lru.key);
            }
        }
    }

    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "Cache", "HashMap", "Linked List", "Design"],
      keyPoints: [
        "LRU Cache uses a HashMap for O(1) access and a doubly linked list for O(1) eviction order updates.",
        "get and put operations must move accessed nodes to the front (most recently used).",
        "When capacity is exceeded, remove the node just before the tail (least recently used)."
      ]
    },
    {
      question: "Explain the Rabin-Karp string matching algorithm and implement it.",
      answer: `<div class="card mt-2">
  <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
    <p class="card-text">
      Rabin-Karp uses a rolling hash to compare the pattern hash with substrings of the text. If hashes match, verify characters to handle collisions.
    </p>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Complexity:</h6>
    <table class="table table-sm">
      <thead><tr><th>Case</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        <tr><td>Average</td><td>O(n + m)</td><td>O(1)</td></tr>
        <tr><td>Worst</td><td>O(n * m)</td><td>O(1)</td></tr>
      </tbody>
    </table>
    <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
    <pre><code class="language-java">public class RabinKarp {
    private static final int BASE = 256;
    private static final int PRIME = 101;

    public static void search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int patternHash = 0;
        int textHash = 0;
        int h = 1;

        for (int i = 0; i &lt; m - 1; i++) {
            h = (h * BASE) % PRIME;
        }

        for (int i = 0; i &lt; m; i++) {
            patternHash = (BASE * patternHash + pattern.charAt(i)) % PRIME;
            textHash = (BASE * textHash + text.charAt(i)) % PRIME;
        }

        for (int i = 0; i &lt;= n - m; i++) {
            if (patternHash == textHash) {
                int j = 0;
                while (j &lt; m &amp;&amp; text.charAt(i + j) == pattern.charAt(j)) {
                    j++;
                }
                if (j == m) {
                    System.out.println("Pattern found at index " + i);
                }
            }

            if (i &lt; n - m) {
                textHash = (BASE * (textHash - text.charAt(i) * h)
                            + text.charAt(i + m)) % PRIME;
                if (textHash &lt; 0) {
                    textHash += PRIME;
                }
            }
        }
    }
}</code></pre>
  </div>
</div>`,
      difficulty: "Advanced",
      tags: ["DSA", "String", "Hashing", "Rabin-Karp"],
      keyPoints: [
        "Rabin-Karp uses rolling hashes to find pattern occurrences in O(n + m) average time.",
        "Hash collisions require a character-by-character verification step.",
        "Commonly used for plagiarism detection and searching multiple patterns."
      ]
    }
  ]
}
