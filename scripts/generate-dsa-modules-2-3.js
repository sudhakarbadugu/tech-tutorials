/**
 * Generates enhanced dsa_module2.js and dsa_module3.js
 * Run: node scripts/generate-dsa-modules-2-3.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { serializeValue } from "./lib/enhanced-topic.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/data/rewritten");

function topic(cfg) {
  const sections = [
    {
      heading: cfg.h1 || "Core Concepts",
      text: cfg.intro,
      list: cfg.concepts,
    },
    {
      heading: "Concept Explanation",
      content: cfg.explain,
      note: cfg.note,
    },
    {
      heading: "Visual Diagram",
      code: cfg.visual,
      language: "text",
    },
    {
      heading: "Python Implementation",
      example: {
        title: cfg.pyTitle,
        code: cfg.pyCode,
        output: cfg.pyOut,
        language: "python",
        type: "code",
      },
    },
    {
      heading: "Java Implementation",
      example: {
        title: cfg.javaTitle,
        code: cfg.javaCode,
        output: cfg.javaOut,
        language: "java",
        type: "code",
      },
    },
    { heading: "Step-by-Step Walkthrough", list: cfg.steps },
    {
      heading: "Time & Space Complexity",
      text: cfg.cxText,
      table: cfg.table,
    },
    {
      heading: "Common Mistakes & Pitfalls",
      list: cfg.mistakes,
      code: cfg.mistakesCode,
      language: "python",
    },
    {
      heading: "Real-World Applications",
      text: cfg.appsText,
      list: cfg.apps,
    },
    { heading: "Interview Tips", list: cfg.tips },
    { heading: "Practice Problems", list: cfg.practice },
  ];
  return { title: cfg.title, subtitle: cfg.subtitle, sections };
}

function writeModule(name, structureExport, contentExport, structure, content, header) {
  const body =
    header +
    `export const ${structureExport} = ${serializeValue(structure, 0)};\n\n` +
    `export const ${contentExport} = ${serializeValue(content, 0)};\n`;
  const p = path.join(outDir, name);
  fs.writeFileSync(p, body, "utf8");
  console.log(`✅ ${name} (${(body.length / 1024).toFixed(1)} KB, ${body.split("\n").length} lines)`);
}

// ─── MODULE 2 ───────────────────────────────────────────────────────────────

const structure2 = {
  module2: {
    title: "Module 2: Trees & Heaps",
    topics: [
      { id: "binary-trees", title: "Binary Trees" },
      { id: "bst", title: "Binary Search Trees (BST)" },
      { id: "heaps", title: "Heaps & Priority Queues" },
      { id: "tries", title: "Tries (Prefix Trees)" },
      { id: "graphs-bfs-dfs", title: "Graphs BFS/DFS Basics" },
    ],
  },
};

const PY_TRAVERSALS = `from collections import deque
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    return inorder(root.left) + [root.val] + inorder(root.right)

def preorder(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    return [root.val] + preorder(root.left) + preorder(root.right)

def postorder(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    return postorder(root.left) + postorder(root.right) + [root.val]

def inorder_iter(root: Optional[TreeNode]) -> List[int]:
    stack, cur, out = [], root, []
    while cur or stack:
        while cur:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        out.append(cur.val)
        cur = cur.right
    return out

def level_order(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []
    q, res = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        res.append(level)
    return res

root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(6, TreeNode(5), TreeNode(7)))
print("Inorder:", inorder(root))
print("Preorder:", preorder(root))
print("Postorder:", postorder(root))
print("Iter inorder:", inorder_iter(root))
print("Level order:", level_order(root))`;

const JAVA_TRAVERSALS = `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class TreeDemo {
    static void inorder(TreeNode r, List<Integer> out) {
        if (r == null) return;
        inorder(r.left, out);
        out.add(r.val);
        inorder(r.right, out);
    }

    static List<Integer> preorder(TreeNode r) {
        if (r == null) return new ArrayList<>();
        List<Integer> out = new ArrayList<>();
        out.add(r.val);
        out.addAll(preorder(r.left));
        out.addAll(preorder(r.right));
        return out;
    }

    static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int sz = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < sz; i++) {
                TreeNode n = q.poll();
                level.add(n.val);
                if (n.left != null) q.offer(n.left);
                if (n.right != null) q.offer(n.right);
            }
            res.add(level);
        }
        return res;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);
        List<Integer> in = new ArrayList<>();
        inorder(root, in);
        System.out.println(in);
        System.out.println(preorder(root));
        System.out.println(levelOrder(root));
    }
}`;

const PY_BST = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def search_bst(root, val):
    while root and root.val != val:
        root = root.left if val < root.val else root.right
    return root

def insert_bst(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    return root

def delete_bst(root, key):
    if not root:
        return None
    if key < root.val:
        root.left = delete_bst(root.left, key)
    elif key > root.val:
        root.right = delete_bst(root.right, key)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.left
        succ = root.right
        while succ.left:
            succ = succ.left
        root.val = succ.val
        root.right = delete_bst(root.right, succ.val)
    return root

def is_valid_bst(root, lo=float('-inf'), hi=float('inf')):
    if not root:
        return True
    if not (lo < root.val < hi):
        return False
    return is_valid_bst(root.left, lo, root.val) and is_valid_bst(root.right, root.val, hi)

root = None
for v in [5, 3, 7, 1, 4, 6, 8]:
    root = insert_bst(root, v)
print("Search 4:", search_bst(root, 4).val)
print("Valid BST:", is_valid_bst(root))
root = delete_bst(root, 3)
print("After delete 3 valid:", is_valid_bst(root))`;

const JAVA_BST = `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int v){val=v;}
}

public class BSTDemo {
    static TreeNode insert(TreeNode r, int val) {
        if (r == null) return new TreeNode(val);
        if (val < r.val) r.left = insert(r.left, val);
        else r.right = insert(r.right, val);
        return r;
    }

    static TreeNode search(TreeNode r, int val) {
        while (r != null && r.val != val)
            r = val < r.val ? r.left : r.right;
        return r;
    }

    static TreeNode delete(TreeNode r, int key) {
        if (r == null) return null;
        if (key < r.val) r.left = delete(r.left, key);
        else if (key > r.val) r.right = delete(r.right, key);
        else {
            if (r.left == null) return r.right;
            if (r.right == null) return r.left;
            TreeNode s = r.right;
            while (s.left != null) s = s.left;
            r.val = s.val;
            r.right = delete(r.right, s.val);
        }
        return r;
    }

    public static void main(String[] args) {
        TreeNode root = null;
        for (int v : new int[]{5,3,7,1,4}) root = insert(root, v);
        System.out.println(search(root, 4).val);
        root = delete(root, 3);
        System.out.println(search(root, 3));
    }
}`;

const PY_HEAP = `import heapq
from typing import List

def top_k_largest(nums: List[int], k: int) -> List[int]:
    heap = nums[:k]
    heapq.heapify(heap)
    for x in nums[k:]:
        if x > heap[0]:
            heapq.heapreplace(heap, x)
    return sorted(heap, reverse=True)

def merge_k_sorted(lists: List[List[int]]) -> List[int]:
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

h = []
for x in [3, 1, 4, 1, 5]:
    heapq.heappush(h, x)
print("Pops:", [heapq.heappop(h) for _ in range(3)])
print("Top 3:", top_k_largest([3,1,4,1,5,9,2,6], 3))
print("Merge:", merge_k_sorted([[1,4,5],[1,3,4],[2,6]]))`;

const JAVA_HEAP = `import java.util.*;

public class HeapDemo {
    static int[] topKLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int x : nums) {
            minHeap.offer(x);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.stream().mapToInt(i -> i).sorted().toArray();
    }

    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int x : new int[]{3,1,4,1,5}) pq.offer(x);
        System.out.println(pq.poll());
        System.out.println(Arrays.toString(topKLargest(new int[]{3,1,4,1,5,9,2,6}, 3)));
    }
}`;

const PY_TRIE = `class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.end = True

    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.end

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True

t = Trie()
for w in ["apple", "app", "apt", "bat"]:
    t.insert(w)
print(t.search("app"), t.search("ap"), t.starts_with("ap"))`;

const JAVA_TRIE = `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean end;
}

class Trie {
    TrieNode root = new TrieNode();

    void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int i = c - 'a';
            if (node.children[i] == null) node.children[i] = new TrieNode();
            node = node.children[i];
        }
        node.end = true;
    }

    boolean search(String word) {
        TrieNode node = walk(word);
        return node != null && node.end;
    }

    boolean startsWith(String prefix) {
        return walk(prefix) != null;
    }

    TrieNode walk(String s) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            int i = c - 'a';
            if (node.children[i] == null) return null;
            node = node.children[i];
        }
        return node;
    }

    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("apple"); t.insert("app");
        System.out.println(t.search("app"));
        System.out.println(t.startsWith("ap"));
    }
}`;

const PY_GRAPH = `from collections import deque, defaultdict
from typing import Dict, List

def bfs_shortest_path(graph: Dict[int, List[int]], start: int, goal: int) -> List[int]:
    if start == goal:
        return [start]
    q = deque([start])
    parent = {start: None}
    while q:
        node = q.popleft()
        for nei in graph[node]:
            if nei not in parent:
                parent[nei] = node
                if nei == goal:
                    path = []
                    cur = goal
                    while cur is not None:
                        path.append(cur)
                        cur = parent[cur]
                    return path[::-1]
                q.append(nei)
    return []

def dfs_recursive(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    order = [node]
    for nei in graph[node]:
        if nei not in visited:
            order.extend(dfs_recursive(graph, nei, visited))
    return order

def dfs_iterative(graph, start):
    stack, visited, order = [start], set(), []
    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        order.append(node)
        for nei in reversed(graph[node]):
            if nei not in visited:
                stack.append(nei)
    return order

graph = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2,5], 4:[2], 5:[3]}
print("BFS path 0->5:", bfs_shortest_path(graph, 0, 5))
print("DFS rec:", dfs_recursive(graph, 0))
print("DFS iter:", dfs_iterative(graph, 0))`;

const JAVA_GRAPH = `import java.util.*;

public class GraphDemo {
    static List<Integer> bfs(Map<Integer, List<Integer>> g, int start) {
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> seen = new HashSet<>();
        List<Integer> order = new ArrayList<>();
        q.offer(start); seen.add(start);
        while (!q.isEmpty()) {
            int node = q.poll();
            order.add(node);
            for (int nei : g.getOrDefault(node, List.of())) {
                if (seen.add(nei)) q.offer(nei);
            }
        }
        return order;
    }

    static void dfs(Map<Integer, List<Integer>> g, int node, Set<Integer> seen, List<Integer> order) {
        seen.add(node);
        order.add(node);
        for (int nei : g.getOrDefault(node, List.of())) {
            if (!seen.contains(nei)) dfs(g, nei, seen, order);
        }
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> g = Map.of(
            0, List.of(1,2), 1, List.of(0,3), 2, List.of(0,3), 3, List.of(1,2)
        );
        System.out.println(bfs(g, 0));
        List<Integer> order = new ArrayList<>();
        dfs(g, 0, new HashSet<>(), order);
        System.out.println(order);
    }
}`;

const content2 = {
  module2: {
    "binary-trees": topic({
      title: "Binary Trees",
      subtitle: "Traversals, BFS layers, and recursive thinking",
      intro:
        "Binary trees are hierarchical structures where each node has at most two children. Interview problems revolve around traversal order, depth/height, and subtree properties.",
      concepts: [
        "<strong>Inorder (L,R,R):</strong> Left, Root, Right — BST yields sorted order",
        "<strong>Preorder (R,L,R):</strong> Root first — serialization, copy tree",
        "<strong>Postorder (L,R,R):</strong> Root last — delete nodes safely",
        "<strong>Level-order BFS:</strong> Queue processes one layer at a time",
        "<strong>Iterative inorder:</strong> Explicit stack avoids recursion depth limits",
      ],
      explain: [
        "<p>Every tree problem is either <strong>DFS</strong> (go deep: height, path sum, validate BST) or <strong>BFS</strong> (go wide: min depth, level sums, right-side view). DFS uses O(h) stack space; skewed trees have h=n.</p>",
        "<p>Draw the tree before coding. Traversal order bugs are almost always fixed by tracing one small example on paper.</p>",
      ],
      note: "State both time O(n) and space O(h) or O(w) — interviewers expect both.",
      visual: `Tree:        4
            /   \\
           2     6
          / \\   / \\
         1   3 5   7

Inorder:  1 2 3 4 5 6 7
Preorder: 4 2 1 3 6 5 7
Level:    [[4],[2,6],[1,3,5,7]]`,
      pyTitle: "All Traversals + Level Order",
      pyCode: PY_TRAVERSALS,
      pyOut: "Inorder: [1,2,3,4,5,6,7]\nLevel order: [[4],[2,6],[1,3,5,7]]",
      javaTitle: "Tree Traversals in Java",
      javaCode: JAVA_TRAVERSALS,
      javaOut: "[1,2,3,4,5,6,7]\n[[4],[2,6],[1,3,5,7]]",
      steps: [
        "<strong>Step 1:</strong> Choose traversal — sorted → inorder; by level → BFS queue.",
        "<strong>Step 2:</strong> DFS base case: if root is null, return.",
        "<strong>Step 3:</strong> Iterative inorder: push left chain, pop, visit, go right.",
        "<strong>Step 4:</strong> BFS: snapshot queue size each level.",
        "<strong>Step 5:</strong> Complexity O(n) time; space O(h) DFS or O(w) BFS.",
      ],
      cxText: "n = nodes, h = height, w = max width:",
      table: {
        headers: ["Traversal", "Time", "Space", "Use case"],
        rows: [
          ["Inorder DFS", "O(n)", "O(h)", "BST sorted order"],
          ["Level BFS", "O(n)", "O(w)", "Shortest path in trees"],
          ["Iterative inorder", "O(n)", "O(h)", "Deep trees, no stack overflow"],
        ],
      },
      mistakes: [
        "<strong>No null check</strong> → infinite recursion.",
        "<strong>Recursion on skewed tree</strong> (n=10^5) → stack overflow; use iterative.",
        "<strong>Wrong traversal order</strong> — draw tree first.",
      ],
      mistakesCode: `def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)`,
      appsText: "Trees model decision boundaries, DOM hierarchies, and parse trees.",
      apps: [
        "<strong>ML:</strong> Decision tree inference is preorder traversal",
        "<strong>DOM:</strong> BFS finds elements by depth",
        "<strong>Compilers:</strong> AST evaluation often postorder",
      ],
      tips: [
        "kth smallest in BST → inorder with counter.",
        "Max depth → 1 + max(left, right).",
        "Invert tree → swap children recursively.",
      ],
      practice: [
        "Q1: Level-order traversal. Hint: BFS, process len(q) per level. Ans: O(n), O(w).",
        "Q2: Max depth. Hint: DFS. Ans: O(n) time, O(h) space.",
        "Q3 (Hard): Validate BST. Hint: pass (min,max) range. Ans: O(n) single DFS.",
      ],
    }),
    bst: topic({
      title: "Binary Search Trees (BST)",
      subtitle: "Ordered trees — O(log n) when balanced, O(n) when skewed",
      intro:
        "BSTs enforce left < node < right. Search, insert, and delete are O(h) where h is height — O(log n) balanced, O(n) skewed.",
      concepts: [
        "<strong>Search:</strong> Go left if smaller, right if larger",
        "<strong>Insert:</strong> Find leaf position preserving order",
        "<strong>Delete:</strong> 0/1 child easy; 2 children → replace with inorder successor",
        "<strong>Validate:</strong> Each node must fall in (min, max) range",
        "<strong>Balance:</strong> AVL/Red-Black trees keep h=log n",
      ],
      explain: [
        "<p>Never say BST is always O(log n). A sorted input creates a linked-list skew with O(n) operations. Interviewers want you to mention this and optionally discuss self-balancing trees.</p>",
        "<p>Delete with two children: copy inorder successor (leftmost of right subtree) into node, then delete successor from right subtree.</p>",
      ],
      note: "Average O(log n), worst O(n) — always qualify with tree balance.",
      visual: `BST insert 3,1,4,2:
    3
   /
  1
   \\
    2
   /
  4  (invalid if attached wrong — must preserve order)

Search 2: 3→1→2`,
      pyTitle: "BST Search, Insert, Delete, Validate",
      pyCode: PY_BST,
      pyOut: "Search 4: 4\nValid BST: True",
      javaTitle: "BST Operations in Java",
      javaCode: JAVA_BST,
      javaOut: "4\nnull",
      steps: [
        "<strong>Search:</strong> Iterative while loop — O(h).",
        "<strong>Insert:</strong> Recurse to null leaf.",
        "<strong>Delete 2 children:</strong> Swap with successor, delete successor.",
        "<strong>Validate:</strong> Range (lo, hi) tightens each level.",
      ],
      cxText: "h = height:",
      table: {
        headers: ["Op", "Balanced", "Skewed", "Space"],
        rows: [
          ["Search", "O(log n)", "O(n)", "O(1) iterative"],
          ["Insert", "O(log n)", "O(n)", "O(h) recursive stack"],
          ["Delete", "O(log n)", "O(n)", "O(h)"],
        ],
      },
      mistakes: [
        "Saying O(log n) without worst case.",
        "Delete two-child case without successor logic.",
        "Validate BST using only left/right child comparison (fails on deep violations).",
      ],
      mistakesCode: `# WRONG validate — only checks immediate children
def bad(root):
    if not root: return True
    if root.left and root.left.val >= root.val: return False
    # misses nodes deeper in right subtree that are < root`,
      appsText: "Ordered maps, databases, and sorted sets use tree or B-tree variants.",
      apps: [
        "<strong>Java TreeMap:</strong> Red-Black BST",
        "<strong>Database indexes:</strong> B+ trees (multi-way BST)",
      ],
      tips: [
        "Inorder traversal of BST is sorted — use for kth smallest.",
        "Successor = leftmost of right subtree.",
      ],
      practice: [
        "Q1: Insert into BST. Ans: recursive O(h).",
        "Q2: Delete node with two children. Hint: inorder successor.",
        "Q3 (Hard): Kth smallest. Hint: inorder count. Ans: O(h+k).",
      ],
    }),
    heaps: topic({
      title: "Heaps & Priority Queues",
      subtitle: "O(log n) insert/extract, O(1) peek min/max",
      intro:
        "A heap is a complete binary tree with heap property. Python heapq is min-heap; Java PriorityQueue default is min-heap.",
      concepts: [
        "<strong>Min-heap:</strong> Parent ≤ children — root is minimum",
        "<strong>heapify:</strong> O(n) build heap from array",
        "<strong>heappush/heappop:</strong> O(log n) each",
        "<strong>Top-K pattern:</strong> Size-k min-heap tracks k largest",
        "<strong>Merge K lists:</strong> Heap of list heads",
      ],
      explain: [
        "<p>Top-K largest: maintain min-heap of size k. If new element > heap min, replace. Final heap holds k largest in O(n log k) time.</p>",
        "<p>Dijkstra and Prim's MST rely on priority queues — heap-backed queues give O((V+E) log V).</p>",
      ],
      note: "Negate values in Python heapq for max-heap behavior.",
      visual: `Min-heap array [1,3,2,7,5]:
        1
       / \\
      3   2
     / \\
    7   5

heap[0]=min; parent(i)=(i-1)//2; children 2i+1, 2i+2`,
      pyTitle: "heapq, Top-K, Merge K Sorted",
      pyCode: PY_HEAP,
      pyOut: "Pops: [1,1,3]\nTop 3: [9,6,5]",
      javaTitle: "PriorityQueue & Top-K",
      javaCode: JAVA_HEAP,
      javaOut: "1\n[5,6,9]",
      steps: [
        "<strong>Top-K:</strong> Min-heap size k, replace when larger arrives.",
        "<strong>Merge K:</strong> Push (value, list_id, index) for each head.",
        "<strong>Pop smallest,</strong> push next from same list.",
      ],
      cxText: "n elements, k = heap size:",
      table: {
        headers: ["Operation", "Time", "Notes"],
        rows: [
          ["push/pop", "O(log n)", "Bubble up/down"],
          ["peek", "O(1)", "Root"],
          ["heapify", "O(n)", "Build from array"],
          ["Top-K", "O(n log k)", "Better than sort O(n log n) when k small"],
        ],
      },
      mistakes: [
        "Using max-heap for top-K largest (use min-heap size k).",
        "Forgetting heapq is min-only in Python.",
      ],
      mistakesCode: `import heapq
# Top K largest — min-heap of size k
heap = []
for x in nums:
    heapq.heappush(heap, x)
    if len(heap) > k:
        heapq.heappop(heap)`,
      appsText: "Schedulers, Dijkstra, event simulation, streaming top-K.",
      apps: [
        "<strong>OS schedulers:</strong> Priority by process priority",
        "<strong>Dijkstra:</strong> Extract-min vertex",
      ],
      tips: [
        "Kth largest = size-k min-heap or quickselect.",
        "Merge K sorted lists = classic heap problem.",
      ],
      practice: [
        "Q1: Kth largest element. Hint: min-heap size k. Ans: O(n log k).",
        "Q2: Merge k sorted lists. Hint: heap of heads. Ans: O(N log k).",
        "Q3 (Hard): Find median stream. Hint: two heaps. Ans: O(log n) per insert.",
      ],
    }),
    tries: topic({
      title: "Tries (Prefix Trees)",
      subtitle: "O(m) prefix search where m = key length",
      intro:
        "Tries store strings character-by-character along paths. Prefix queries (autocomplete, spell check) are O(m) independent of dictionary size N.",
      concepts: [
        "<strong>Node:</strong> children map + end-of-word flag",
        "<strong>insert:</strong> Walk/create path per character",
        "<strong>search:</strong> Exact match requires end flag",
        "<strong>startsWith:</strong> Path exists — no end flag needed",
        "<strong>Space:</strong> O(total chars) — can be heavy for sparse alphabets",
      ],
      explain: [
        "<p>Each string shares prefixes via shared nodes — \"app\", \"apple\", \"apt\" share the \"ap\" path. This beats hash maps for prefix queries.</p>",
      ],
      note: "Use array[26] for lowercase English; HashMap for Unicode/general.",
      visual: `Trie after insert: app, apple, apt

(root) --a-- ( ) --p-- ( ) --p* --l--e*
                  \\
                   t*

* = end of word. startsWith("ap") → True`,
      pyTitle: "Full Trie: insert, search, startsWith",
      pyCode: PY_TRIE,
      pyOut: "True False True",
      javaTitle: "Trie in Java",
      javaCode: JAVA_TRIE,
      javaOut: "true\ntrue",
      steps: [
        "<strong>Insert:</strong> For each char, create child if missing; mark end.",
        "<strong>Search:</strong> Walk chars; return node.end at end.",
        "<strong>Prefix:</strong> Walk chars; return true if path exists.",
      ],
      cxText: "m = word/prefix length:",
      table: {
        headers: ["Op", "Time", "Space"],
        rows: [
          ["insert", "O(m)", "O(m) new nodes worst case"],
          ["search", "O(m)", "O(1)"],
          ["startsWith", "O(m)", "O(1)"],
        ],
      },
      mistakes: [
        "Forgetting end flag — search returns true for prefixes.",
        "Not handling empty string edge case.",
      ],
      mistakesCode: `class Trie:
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children: return False
            node = node.children[ch]
        return node.end  # must check end, not just path exists`,
      appsText: "Autocomplete, IP routing (prefix trees), spell checkers.",
      apps: [
        "<strong>Google Search:</strong> Trie-like prefix indexes",
        "<strong>Router tables:</strong> Longest prefix match",
      ],
      tips: [
        "Word Search II on board → Trie of words + DFS.",
        "Design Add and Search Words → trie + '.' wildcard DFS.",
      ],
      practice: [
        "Q1: Implement Autocomplete. Hint: DFS from prefix node. Ans: O(m + results).",
        "Q2: Longest word in dictionary built from prefixes. Hint: trie + DFS.",
        "Q3 (Hard): Word Search II. Hint: trie + backtracking on grid.",
      ],
    }),
    "graphs-bfs-dfs": topic({
      title: "Graphs BFS/DFS Basics",
      subtitle: "Traverse networks — shortest path (BFS) vs explore all (DFS)",
      intro:
        "Graphs are nodes + edges. Adjacency list is the standard interview representation. BFS finds shortest path in unweighted graphs; DFS explores components and cycles.",
      concepts: [
        "<strong>Adjacency list:</strong> Map node → neighbors — O(V+E) space",
        "<strong>BFS:</strong> Queue, layer by layer — shortest unweighted path",
        "<strong>DFS:</strong> Stack/recursion — exhaust branch before backtrack",
        "<strong>visited set:</strong> Prevents infinite loops on cycles",
        "<strong>Directed vs undirected:</strong> Add reverse edges if undirected",
      ],
      explain: [
        "<p>BFS parent pointers reconstruct shortest path. DFS detects cycles with recursion stack (directed) or visited (undirected).</p>",
        "<p>Grid problems are implicit graphs: each cell is a node; 4-directional neighbors are edges.</p>",
      ],
      note: "BFS = shortest path unweighted. Dijkstra for weighted — see Module 4.",
      visual: `Graph: 0—1—3
        |   |
        2---4

BFS from 0: 0,1,2,3,4 (shortest 0→3: [0,1,3])
DFS from 0: 0,1,3,2,4 (depends on neighbor order)`,
      pyTitle: "BFS Shortest Path + DFS Recursive/Iterative",
      pyCode: PY_GRAPH,
      pyOut: "BFS path 0->5: [0,1,3,5]\nDFS rec: [0,1,3,2,4,5]",
      javaTitle: "BFS & DFS in Java",
      javaCode: JAVA_GRAPH,
      javaOut: "[0,1,2,3]\n[0,1,3,2]",
      steps: [
        "<strong>BFS:</strong> Queue, mark parent on first visit, reconstruct path.",
        "<strong>DFS recursive:</strong> Base visited, recurse neighbors.",
        "<strong>DFS iterative:</strong> Stack + reversed neighbor order for same order as recursive.",
        "<strong>Grid:</strong> Directions [(0,1),(0,-1),(1,0),(-1,0)].",
      ],
      cxText: "V vertices, E edges:",
      table: {
        headers: ["Algo", "Time", "Space", "Best for"],
        rows: [
          ["BFS", "O(V+E)", "O(V)", "Shortest unweighted path"],
          ["DFS", "O(V+E)", "O(V)", "Connectivity, cycles, topo sort"],
        ],
      },
      mistakes: [
        "BFS without visited → infinite loop on cycles.",
        "Using DFS for shortest path in unweighted graph (wrong — use BFS).",
        "Forgetting to mark visited when enqueuing (duplicate work).",
      ],
      mistakesCode: `from collections import deque
def bfs(graph, start):
    seen = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nei in graph[node]:
            if nei not in seen:
                seen.add(nei)  # mark WHEN enqueuing
                q.append(nei)`,
      appsText: "Social networks, maps, dependency resolution, game AI.",
      apps: [
        "<strong>LinkedIn:</strong> BFS for degrees of separation",
        "<strong>Maze solving:</strong> BFS shortest exit",
      ],
      tips: [
        "Number of islands → DFS/BFS on grid.",
        "Clone graph → BFS + hash map old→new node.",
        "Course schedule cycle → DFS three-color.",
      ],
      practice: [
        "Q1: Shortest path in unweighted graph. Hint: BFS + parent. Ans: O(V+E).",
        "Q2: Number of connected components. Hint: DFS from each unvisited. Ans: O(V+E).",
        "Q3 (Hard): Word ladder (begin→end, one char change). Hint: BFS on implicit graph. Ans: O(N·L²) where L=word length.",
      ],
    }),
  },
};

writeModule(
  "dsa_module2.js",
  "dsaModule2Structure",
  "dsaModule2Content",
  structure2,
  content2,
  "// DSA Module 2 — enhanced interview-ready content\n// Regenerate: node scripts/generate-dsa-modules-2-3.js\n\n",
);

// ─── MODULE 3 ───────────────────────────────────────────────────────────────

const structure3 = {
  module3: {
    title: "Module 3: Sorting, Searching & Patterns",
    topics: [
      { id: "sorting", title: "Sorting Algorithms" },
      { id: "binary-search", title: "Binary Search" },
      { id: "two-pointers", title: "Two Pointers & Sliding Window" },
      { id: "divide-conquer", title: "Divide & Conquer" },
      { id: "greedy", title: "Greedy Algorithms" },
    ],
  },
};

const PY_SORT = `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

def heap_sort(arr):
    import heapq
    h = arr[:]
    heapq.heapify(h)
    return [heapq.heappop(h) for _ in range(len(h))]

data = [3, 1, 4, 1, 5, 9, 2, 6]
print("Merge:", merge_sort(data))
print("Quick:", quick_sort(data))
print("Heap:", heap_sort(data))`;

const JAVA_SORT = `import java.util.*;

public class SortDemo {
    static void merge(int[] a, int l, int m, int r) {
        int[] tmp = new int[r - l + 1];
        int i = l, j = m + 1, k = 0;
        while (i <= m && j <= r) tmp[k++] = a[i] <= a[j] ? a[i++] : a[j++];
        while (i <= m) tmp[k++] = a[i++];
        while (j <= r) tmp[k++] = a[j++];
        for (k = 0; k < tmp.length; k++) a[l + k] = tmp[k];
    }

    static void mergeSort(int[] a, int l, int r) {
        if (l >= r) return;
        int m = l + (r - l) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }

    public static void main(String[] args) {
        int[] a = {3,1,4,1,5,9,2,6};
        mergeSort(a, 0, a.length - 1);
        System.out.println(Arrays.toString(a));
    }
}`;

const PY_BS = `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo

def search_rotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1

arr = [1, 2, 4, 4, 5, 7]
print(binary_search(arr, 5))
print(lower_bound(arr, 4))
print(search_rotated([4,5,6,7,0,1,2], 0))`;

const PY_TWO_PTR = `def two_sum_sorted(nums, target):
    l, r = 0, len(nums) - 1
    while l < r:
        s = nums[l] + nums[r]
        if s == target:
            return [l + 1, r + 1]
        elif s < target:
            l += 1
        else:
            r -= 1
    return []

def max_sum_subarray_k(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best

def longest_unique_substring(s):
    last = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)
    return best

print(two_sum_sorted([2,7,11,15], 9))
print(max_sum_subarray_k([2,1,5,1,3,2], 3))
print(longest_unique_substring("abcabcbb"))`;

const PY_GREEDY = `def activity_selection(start, end):
    order = sorted(range(len(start)), key=lambda i: end[i])
    count, last_end = 0, float('-inf')
    for i in order:
        if start[i] >= last_end:
            count += 1
            last_end = end[i]
    return count

def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for s, e in intervals:
        if not merged or s > merged[-1][1]:
            merged.append([s, e])
        else:
            merged[-1][1] = max(merged[-1][1], e)
    return merged

def coin_change_greedy(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for c in coins:
        if amount == 0:
            break
        take = amount // c
        count += take
        amount -= take * c
    return count if amount == 0 else -1

print(activity_selection([1,2,3,0],[4,5,6,7]))
print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))
print(coin_change_greedy([1,5,10,25], 63))`;

const content3 = {
  module3: {
    sorting: topic({
      title: "Sorting Algorithms",
      subtitle: "Merge, Quick, Heap — know when each wins",
      intro:
        "Sorting is foundational. Interviews expect you to implement merge sort and quicksort, know complexities, and recognize when O(n log n) is unavoidable.",
      concepts: [
        "<strong>Merge sort:</strong> Stable O(n log n), O(n) extra space",
        "<strong>Quick sort:</strong> O(n log n) average, O(n²) worst, in-place",
        "<strong>Heap sort:</strong> O(n log n), O(1) extra space, not stable",
        "<strong>Counting/Radix:</strong> O(n) when keys bounded",
        "<strong>Python Timsort:</strong> O(n log n) hybrid, stable",
      ],
      explain: [
        "<p>Comparison sorts lower bound is O(n log n). Merge sort guarantees it; quicksort is faster in practice due to cache locality but can degrade.</p>",
      ],
      note: "Stable sort preserves relative order of equal elements — important for multi-key sorts.",
      visual: `Merge sort on [38,27,43,3]:
Split: [38,27] [43,3]
Split: [38][27] [43][3]
Merge: [27,38] [3,43]
Merge: [3,27,38,43]`,
      pyTitle: "Merge, Quick, Heap Sort",
      pyCode: PY_SORT,
      pyOut: "Merge: [1,1,2,3,4,5,6,9]\nQuick: [1,1,2,3,4,5,6,9]",
      javaTitle: "Merge Sort in Java",
      javaCode: JAVA_SORT,
      javaOut: "[1, 1, 2, 3, 4, 5, 6, 9]",
      steps: [
        "<strong>Merge sort:</strong> Divide in half, sort halves, merge two sorted arrays.",
        "<strong>Quick sort:</strong> Pick pivot, partition smaller/larger, recurse.",
        "<strong>Heap sort:</strong> heapify, repeatedly extract min/max.",
      ],
      cxText: "n elements:",
      table: {
        headers: ["Algorithm", "Best", "Average", "Worst", "Space", "Stable"],
        rows: [
          ["Merge", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
          ["Quick", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
          ["Heap", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No"],
          ["Bubble", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
        ],
      },
      mistakes: [
        "Using O(n²) sort on large n in interviews.",
        "Quicksort worst case on sorted input without random pivot.",
      ],
      mistakesCode: `# Use random pivot for quicksort partition
import random
pivot_idx = random.randint(lo, hi)
nums[pivot_idx], nums[hi] = nums[hi], nums[pivot_idx]`,
      appsText: "Databases, search ranking, deduplication pipelines.",
      apps: ["<strong>SQL ORDER BY:</strong> Often merge-based", "<strong>Big data:</strong> External merge sort"],
      tips: ["Kth largest → quickselect O(n) average.", "Nearly sorted → insertion sort O(n)."],
      practice: [
        "Q1: Sort array. Implement merge sort. Ans: O(n log n).",
        "Q2: Kth largest. Hint: quickselect. Ans: O(n) avg.",
        "Q3 (Hard): Count inversions. Hint: merge sort count during merge. Ans: O(n log n).",
      ],
    }),
    "binary-search": topic({
      title: "Binary Search",
      subtitle: "O(log n) on sorted data — and beyond",
      intro:
        "Binary search halves the search space each step. Works on sorted arrays and on monotonic answer spaces (binary search on answer).",
      concepts: [
        "<strong>Loop invariant:</strong> target in [lo, hi] if exists",
        "<strong>lower_bound:</strong> First index where arr[i] >= target",
        "<strong>upper_bound:</strong> First index where arr[i] > target",
        "<strong>Rotated array:</strong> One half always sorted",
        "<strong>Search on answer:</strong> Minimize/maximize with feasibility check",
      ],
      explain: [
        "<p>Classic mistake: using mid = (lo+hi)/2 overflow in Java — use lo + (hi-lo)/2. Another: infinite loop when lo=mid with lo=mid+1 update — use lo < hi for lower_bound.</p>",
      ],
      note: "Binary search on answer: if feasible(x) is monotonic, binary search the answer space.",
      visual: `arr = [1,3,5,7,9,11], target = 7
lo=0 hi=5 mid=2 (5<7) lo=3
lo=3 hi=5 mid=4 (9>7) hi=3
lo=3 hi=3 mid=3 arr[3]=7 FOUND`,
      pyTitle: "Binary Search, lower_bound, Rotated Array",
      pyCode: PY_BS,
      pyOut: "4\n2\n4",
      javaTitle: "Binary Search in Java",
      javaCode: `public class BSearch {
    static int search(int[] a, int t) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == t) return mid;
            if (a[mid] < t) lo = mid + 1; else hi = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(search(new int[]{1,3,5,7}, 5));
    }
}`,
      javaOut: "2",
      steps: [
        "<strong>Step 1:</strong> lo=0, hi=n-1 (or n for lower_bound).",
        "<strong>Step 2:</strong> mid = lo + (hi-lo)//2.",
        "<strong>Step 3:</strong> Compare, shrink left or right half.",
        "<strong>Step 4:</strong> Rotated: identify sorted half, check if target in range.",
      ],
      cxText: "n elements:",
      table: {
        headers: ["Variant", "Time", "Space"],
        rows: [
          ["Standard", "O(log n)", "O(1)"],
          ["lower_bound", "O(log n)", "O(1)"],
          ["Search on answer", "O(log R · f(n))", "O(1)"],
        ],
      },
      mistakes: ["Off-by-one with lo<=hi vs lo<hi.", "Mid overflow in Java/C++.", "Applying to unsorted array."],
      mistakesCode: `mid = lo + (hi - lo) // 2  # safe mid`,
      appsText: "Database indexes, pagination, version control bisect.",
      apps: ["<strong>Git bisect:</strong> Find breaking commit O(log n commits)"],
      tips: ["Find first/last occurrence → lower_bound + check neighbors.", "Minimize maximum → binary search on answer."],
      practice: [
        "Q1: Search in rotated sorted array. Hint: sorted half check. Ans: O(log n).",
        "Q2: Find peak element. Hint: compare mid with mid+1. Ans: O(log n).",
        "Q3 (Hard): Median of two sorted arrays. Hint: binary search partition. Ans: O(log(min(m,n))).",
      ],
    }),
    "two-pointers": topic({
      title: "Two Pointers & Sliding Window",
      subtitle: "Turn O(n²) brute force into O(n)",
      intro:
        "Two pointers move across arrays/strings; sliding window maintains a valid contiguous segment. Together they solve a huge fraction of array interview problems.",
      concepts: [
        "<strong>Opposite ends:</strong> Sorted pair-sum, palindrome, container water",
        "<strong>Same direction:</strong> Remove duplicates, fast/slow cycle detection",
        "<strong>Fixed window k:</strong> Max sum subarray of size k",
        "<strong>Variable window:</strong> Longest substring with constraint",
        "<strong>Invariant:</strong> Window always satisfies (or violates) a condition",
      ],
      explain: [
        "<p>Sliding window: each element enters and leaves at most once → O(n). Expand right until invalid, shrink left until valid again.</p>",
      ],
      note: "If array sorted → try opposite-end two pointers before hash map.",
      visual: `Longest unique substring "abcabcbb":
a|bcabcbb  → best=1
ab|cabcbb  → best=2
abc|abcbb  → dup 'a', shrink left past index 0
  bc|abcbb → best=3`,
      pyTitle: "Two Sum II, Fixed K Window, Longest Unique Substring",
      pyCode: PY_TWO_PTR,
      pyOut: "[1,2]\n9\n3",
      javaTitle: "Sliding Window in Java",
      javaCode: `public class Window {
    static int maxSumK(int[] a, int k) {
        int sum = 0;
        for (int i = 0; i < k; i++) sum += a[i];
        int best = sum;
        for (int i = k; i < a.length; i++) {
            sum += a[i] - a[i - k];
            best = Math.max(best, sum);
        }
        return best;
    }
    public static void main(String[] args) {
        System.out.println(maxSumK(new int[]{2,1,5,1,3,2}, 3));
    }
}`,
      javaOut: "9",
      steps: [
        "<strong>Two Sum sorted:</strong> If sum too small, l++; too big, r--.",
        "<strong>Fixed k:</strong> Add right, subtract falling off left.",
        "<strong>Variable:</strong> Track last index map; shrink on duplicate inside window.",
      ],
      cxText: "n = array/string length:",
      table: {
        headers: ["Pattern", "Time", "Space"],
        rows: [
          ["Two pointers", "O(n)", "O(1)"],
          ["Sliding window", "O(n)", "O(k) or O(alphabet)"],
        ],
      },
      mistakes: ["Shrinking window before expanding.", "Wrong window size formula (right-left+1)."],
      mistakesCode: `best = max(best, right - left + 1)  # inclusive window size`,
      appsText: "Stream processing, genomic sequence analysis, rate limiting.",
      apps: ["<strong>Rate limiter:</strong> Sliding window counter"],
      tips: ["At most K distinct → shrink when map size > k.", "Minimum window substring → shrink while valid."],
      practice: [
        "Q1: Max sum subarray size k. Hint: fixed window. Ans: O(n).",
        "Q2: Longest substring without repeating. Hint: variable window + last index. Ans: O(n).",
        "Q3 (Hard): Minimum window substring containing all chars of t. Hint: expand until valid, shrink while valid. Ans: O(n).",
      ],
    }),
    "divide-conquer": topic({
      title: "Divide & Conquer",
      subtitle: "Split, solve subproblems, combine",
      intro:
        "Divide & conquer breaks problems into independent subproblems. Classic examples: merge sort, quicksort, binary search, closest pair of points.",
      concepts: [
        "<strong>Divide:</strong> Split input into smaller pieces",
        "<strong>Conquer:</strong> Solve subproblems recursively",
        "<strong>Combine:</strong> Merge partial results — often O(n)",
        "<strong>Master Theorem:</strong> T(n)=aT(n/b)+O(n^d) → solve recurrence",
        "<strong>Base case:</strong> Small n solved directly",
      ],
      explain: [
        "<p>Merge sort: T(n)=2T(n/2)+O(n) → O(n log n). Binary search: T(n)=T(n/2)+O(1) → O(log n).</p>",
      ],
      note: "If combine step is O(n) and you split in half, often O(n log n) total.",
      visual: `Max subarray (Kadane is O(n); D&C version):
[-2,1,-3,4,-1,2,1,-5,4]
Left max=1, Right max=2, Cross max=6 → global 6`,
      pyTitle: "Merge Sort as Divide & Conquer",
      pyCode: PY_SORT.split("\n\n")[0] + "\n\nprint(merge_sort([38,27,43,3,9]))",
      pyOut: "[3, 9, 27, 38, 43]",
      javaTitle: "Merge Sort D&C",
      javaCode: JAVA_SORT,
      javaOut: "[1, 1, 2, 3, 4, 5, 6, 9]",
      steps: [
        "<strong>Step 1:</strong> Define base case (n<=1).",
        "<strong>Step 2:</strong> Split array in half.",
        "<strong>Step 3:</strong> Recursively sort each half.",
        "<strong>Step 4:</strong> Merge two sorted halves in O(n).",
      ],
      cxText: "Recurrence determines complexity:",
      table: {
        headers: ["Problem", "Recurrence", "Result"],
        rows: [
          ["Merge sort", "2T(n/2)+O(n)", "O(n log n)"],
          ["Binary search", "T(n/2)+O(1)", "O(log n)"],
          ["Strassen", "7T(n/2)+O(n²)", "O(n^2.81)"],
        ],
      },
      mistakes: ["Forgetting combine step cost.", "Subproblems not independent (use DP instead)."],
      mistakesCode: `# Merge step is O(n) — don't drop it from complexity analysis`,
      appsText: "FFT, map reduce, parallel sorting.",
      apps: ["<strong>MapReduce:</strong> Divide data across workers"],
      tips: ["Draw recursion tree: levels × work per level."],
      practice: [
        "Q1: Implement merge sort. Ans: O(n log n).",
        "Q2: Count inversions. Hint: merge sort merge step. Ans: O(n log n).",
        "Q3 (Hard): Pow(x,n) fast exponentiation. Hint: T(n/2). Ans: O(log n).",
      ],
    }),
    greedy: topic({
      title: "Greedy Algorithms",
      subtitle: "Local optimal choices — when they work globally",
      intro:
        "Greedy picks the best local option at each step. Works for matroids and problems with greedy choice property; fails otherwise (need DP).",
      concepts: [
        "<strong>Activity selection:</strong> Sort by end time, pick non-overlapping",
        "<strong>Merge intervals:</strong> Sort by start, merge overlaps",
        "<strong>Huffman coding:</strong> Build tree by merging least frequent",
        "<strong>Coin change (canonical):</strong> Greedy works for US coins, not all systems",
        "<strong>Proof:</strong> Exchange argument or staying ahead",
      ],
      explain: [
        "<p>Greedy fails for coin systems like coins=[1,3,4] amount=6: greedy gives 4+1+1=3 coins, optimal is 3+3=2 coins. Always verify or mention when greedy fails.</p>",
      ],
      note: "Prove greedy works or cite classic result — interviewers ask 'why greedy?'",
      visual: `Activity selection (sort by end):
[1,4] [3,5] [0,6] [5,7] [8,9] [5,9]
Pick [1,4], skip [3,5],[0,6], pick [5,7], pick [8,9] → 3 activities`,
      pyTitle: "Activity Selection, Merge Intervals, Coin Greedy",
      pyCode: PY_GREEDY,
      pyOut: "2\n[[1,6],[8,10],[15,18]]\n5",
      javaTitle: "Merge Intervals Java",
      javaCode: `import java.util.*;
public class Greedy {
    static int[][] merge(int[][] in) {
        Arrays.sort(in, (a,b) -> a[0]-b[0]);
        List<int[]> out = new ArrayList<>();
        for (int[] iv : in) {
            if (out.isEmpty() || iv[0] > out.get(out.size()-1)[1])
                out.add(iv);
            else
                out.get(out.size()-1)[1] = Math.max(out.get(out.size()-1)[1], iv[1]);
        }
        return out.toArray(new int[0][]);
    }
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10}})));
    }
}`,
      javaOut: "[[1, 6], [8, 10]]",
      steps: [
        "<strong>Activity selection:</strong> Sort by finish time; greedy pick if start >= last end.",
        "<strong>Merge intervals:</strong> Sort by start; extend last if overlap.",
        "<strong>Prove:</strong> Show greedy choice never blocks better solution.",
      ],
      cxText: "Typical greedy sorts first O(n log n):",
      table: {
        headers: ["Problem", "Greedy?", "Complexity"],
        rows: [
          ["Activity selection", "Yes", "O(n log n)"],
          ["Fractional knapsack", "Yes", "O(n log n)"],
          ["0/1 knapsack", "No — use DP", "O(nW)"],
          ["Coin change general", "No", "DP O(n·amount)"],
        ],
      },
      mistakes: ["Applying greedy to 0/1 knapsack.", "Not sorting before greedy interval problems."],
      mistakesCode: `# Coin [1,3,4] amount 6: greedy fails — use DP`,
      appsText: "Huffman compression, task scheduling, network routing.",
      apps: ["<strong>ZIP/Huffman:</strong> Optimal prefix codes"],
      tips: ["Interval problems → sort by start or end first.", "If greedy fails small case → DP."],
      practice: [
        "Q1: Non-overlapping intervals (max count). Hint: sort by end. Ans: O(n log n).",
        "Q2: Jump game can reach end? Hint: track farthest reach. Ans: O(n).",
        "Q3 (Hard): Minimum arrows to burst balloons. Hint: sort by end, greedy. Ans: O(n log n).",
      ],
    }),
  },
};

writeModule(
  "dsa_module3.js",
  "dsaModule3Structure",
  "dsaModule3Content",
  structure3,
  content3,
  "// DSA Module 3 — enhanced interview-ready content\n// Regenerate: node scripts/generate-dsa-modules-2-3.js\n\n",
);

console.log("Done generating modules 2 and 3.");