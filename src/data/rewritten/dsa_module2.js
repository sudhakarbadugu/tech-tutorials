// DSA Module 2 — enhanced interview-ready content
// Regenerate: node scripts/generate-dsa-modules-2-3.js

export const dsaModule2Structure = {
  module2: {
    title: 'Module 2: Trees & Heaps',
    topics: [
      {
        id: 'binary-trees',
        title: 'Binary Trees'
      },
      {
        id: 'bst',
        title: 'Binary Search Trees (BST)'
      },
      {
        id: 'heaps',
        title: 'Heaps & Priority Queues'
      },
      {
        id: 'tries',
        title: 'Tries (Prefix Trees)'
      },
      {
        id: 'graphs-bfs-dfs',
        title: 'Graphs BFS/DFS Basics'
      }
    ]
  }
};

export const dsaModule2Content = {
  module2: {
    'binary-trees': {
      title: 'Binary Trees',
      subtitle: 'Traversals, BFS layers, and recursive thinking',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Binary trees are hierarchical structures where each node has at most two children. Interview problems revolve around traversal order, depth/height, and subtree properties.',
          list: [
            '<strong>Inorder (L,R,R):</strong> Left, Root, Right — BST yields sorted order',
            '<strong>Preorder (R,L,R):</strong> Root first — serialization, copy tree',
            '<strong>Postorder (L,R,R):</strong> Root last — delete nodes safely',
            '<strong>Level-order BFS:</strong> Queue processes one layer at a time',
            '<strong>Iterative inorder:</strong> Explicit stack avoids recursion depth limits'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Every tree problem is either <strong>DFS</strong> (go deep: height, path sum, validate BST) or <strong>BFS</strong> (go wide: min depth, level sums, right-side view). DFS uses O(h) stack space; skewed trees have h=n.</p>',
            '<p>Draw the tree before coding. Traversal order bugs are almost always fixed by tracing one small example on paper.</p>'
          ],
          note: 'State both time O(n) and space O(h) or O(w) — interviewers expect both.'
        },
        {
          heading: 'Visual Diagram',
          code: `Tree:        4
            /   \\
           2     6
          / \\   / \\
         1   3 5   7

Inorder:  1 2 3 4 5 6 7
Preorder: 4 2 1 3 6 5 7
Level:    [[4],[2,6],[1,3,5,7]]`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'All Traversals + Level Order',
            code: `from collections import deque
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
print("Level order:", level_order(root))`,
            output: `Inorder: [1,2,3,4,5,6,7]
Level order: [[4],[2,6],[1,3,5,7]]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Tree Traversals in Java',
            code: `import java.util.*;

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
}`,
            output: `[1,2,3,4,5,6,7]
[[4],[2,6],[1,3,5,7]]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1:</strong> Choose traversal — sorted → inorder; by level → BFS queue.',
            '<strong>Step 2:</strong> DFS base case: if root is null, return.',
            '<strong>Step 3:</strong> Iterative inorder: push left chain, pop, visit, go right.',
            '<strong>Step 4:</strong> BFS: snapshot queue size each level.',
            '<strong>Step 5:</strong> Complexity O(n) time; space O(h) DFS or O(w) BFS.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'n = nodes, h = height, w = max width:',
          table: {
            headers: [
              'Traversal',
              'Time',
              'Space',
              'Use case'
            ],
            rows: [
              [
                'Inorder DFS',
                'O(n)',
                'O(h)',
                'BST sorted order'
              ],
              [
                'Level BFS',
                'O(n)',
                'O(w)',
                'Shortest path in trees'
              ],
              [
                'Iterative inorder',
                'O(n)',
                'O(h)',
                'Deep trees, no stack overflow'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>No null check</strong> → infinite recursion.',
            '<strong>Recursion on skewed tree</strong> (n=10^5) → stack overflow; use iterative.',
            '<strong>Wrong traversal order</strong> — draw tree first.'
          ],
          code: `def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Trees model decision boundaries, DOM hierarchies, and parse trees.',
          list: [
            '<strong>ML:</strong> Decision tree inference is preorder traversal',
            '<strong>DOM:</strong> BFS finds elements by depth',
            '<strong>Compilers:</strong> AST evaluation often postorder'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'kth smallest in BST → inorder with counter.',
            'Max depth → 1 + max(left, right).',
            'Invert tree → swap children recursively.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Level-order traversal. Hint: BFS, process len(q) per level. Ans: O(n), O(w).',
            'Q2: Max depth. Hint: DFS. Ans: O(n) time, O(h) space.',
            'Q3 (Hard): Validate BST. Hint: pass (min,max) range. Ans: O(n) single DFS.'
          ]
        }
      ]
    },
    bst: {
      title: 'Binary Search Trees (BST)',
      subtitle: 'Ordered trees — O(log n) when balanced, O(n) when skewed',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'BSTs enforce left < node < right. Search, insert, and delete are O(h) where h is height — O(log n) balanced, O(n) skewed.',
          list: [
            '<strong>Search:</strong> Go left if smaller, right if larger',
            '<strong>Insert:</strong> Find leaf position preserving order',
            '<strong>Delete:</strong> 0/1 child easy; 2 children → replace with inorder successor',
            '<strong>Validate:</strong> Each node must fall in (min, max) range',
            '<strong>Balance:</strong> AVL/Red-Black trees keep h=log n'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Never say BST is always O(log n). A sorted input creates a linked-list skew with O(n) operations. Interviewers want you to mention this and optionally discuss self-balancing trees.</p>',
            '<p>Delete with two children: copy inorder successor (leftmost of right subtree) into node, then delete successor from right subtree.</p>'
          ],
          note: 'Average O(log n), worst O(n) — always qualify with tree balance.'
        },
        {
          heading: 'Visual Diagram',
          code: `BST insert 3,1,4,2:
    3
   /
  1
   \\
    2
   /
  4  (invalid if attached wrong — must preserve order)

Search 2: 3→1→2`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'BST Search, Insert, Delete, Validate',
            code: `class TreeNode:
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
print("After delete 3 valid:", is_valid_bst(root))`,
            output: `Search 4: 4
Valid BST: True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'BST Operations in Java',
            code: `class TreeNode {
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
}`,
            output: `4
null`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Search:</strong> Iterative while loop — O(h).',
            '<strong>Insert:</strong> Recurse to null leaf.',
            '<strong>Delete 2 children:</strong> Swap with successor, delete successor.',
            '<strong>Validate:</strong> Range (lo, hi) tightens each level.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'h = height:',
          table: {
            headers: [
              'Op',
              'Balanced',
              'Skewed',
              'Space'
            ],
            rows: [
              [
                'Search',
                'O(log n)',
                'O(n)',
                'O(1) iterative'
              ],
              [
                'Insert',
                'O(log n)',
                'O(n)',
                'O(h) recursive stack'
              ],
              [
                'Delete',
                'O(log n)',
                'O(n)',
                'O(h)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Saying O(log n) without worst case.',
            'Delete two-child case without successor logic.',
            'Validate BST using only left/right child comparison (fails on deep violations).'
          ],
          code: `# WRONG validate — only checks immediate children
def bad(root):
    if not root: return True
    if root.left and root.left.val >= root.val: return False
    # misses nodes deeper in right subtree that are < root`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Ordered maps, databases, and sorted sets use tree or B-tree variants.',
          list: [
            '<strong>Java TreeMap:</strong> Red-Black BST',
            '<strong>Database indexes:</strong> B+ trees (multi-way BST)'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Inorder traversal of BST is sorted — use for kth smallest.',
            'Successor = leftmost of right subtree.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Insert into BST. Ans: recursive O(h).',
            'Q2: Delete node with two children. Hint: inorder successor.',
            'Q3 (Hard): Kth smallest. Hint: inorder count. Ans: O(h+k).'
          ]
        }
      ]
    },
    heaps: {
      title: 'Heaps & Priority Queues',
      subtitle: 'O(log n) insert/extract, O(1) peek min/max',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'A heap is a complete binary tree with heap property. Python heapq is min-heap; Java PriorityQueue default is min-heap.',
          list: [
            '<strong>Min-heap:</strong> Parent ≤ children — root is minimum',
            '<strong>heapify:</strong> O(n) build heap from array',
            '<strong>heappush/heappop:</strong> O(log n) each',
            '<strong>Top-K pattern:</strong> Size-k min-heap tracks k largest',
            '<strong>Merge K lists:</strong> Heap of list heads'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Top-K largest: maintain min-heap of size k. If new element > heap min, replace. Final heap holds k largest in O(n log k) time.</p>',
            `<p>Dijkstra and Prim's MST rely on priority queues — heap-backed queues give O((V+E) log V).</p>`
          ],
          note: 'Negate values in Python heapq for max-heap behavior.'
        },
        {
          heading: 'Visual Diagram',
          code: `Min-heap array [1,3,2,7,5]:
        1
       / \\
      3   2
     / \\
    7   5

heap[0]=min; parent(i)=(i-1)//2; children 2i+1, 2i+2`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'heapq, Top-K, Merge K Sorted',
            code: `import heapq
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
print("Merge:", merge_k_sorted([[1,4,5],[1,3,4],[2,6]]))`,
            output: `Pops: [1,1,3]
Top 3: [9,6,5]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'PriorityQueue & Top-K',
            code: `import java.util.*;

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
}`,
            output: `1
[5,6,9]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Top-K:</strong> Min-heap size k, replace when larger arrives.',
            '<strong>Merge K:</strong> Push (value, list_id, index) for each head.',
            '<strong>Pop smallest,</strong> push next from same list.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'n elements, k = heap size:',
          table: {
            headers: [
              'Operation',
              'Time',
              'Notes'
            ],
            rows: [
              [
                'push/pop',
                'O(log n)',
                'Bubble up/down'
              ],
              [
                'peek',
                'O(1)',
                'Root'
              ],
              [
                'heapify',
                'O(n)',
                'Build from array'
              ],
              [
                'Top-K',
                'O(n log k)',
                'Better than sort O(n log n) when k small'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Using max-heap for top-K largest (use min-heap size k).',
            'Forgetting heapq is min-only in Python.'
          ],
          code: `import heapq
# Top K largest — min-heap of size k
heap = []
for x in nums:
    heapq.heappush(heap, x)
    if len(heap) > k:
        heapq.heappop(heap)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Schedulers, Dijkstra, event simulation, streaming top-K.',
          list: [
            '<strong>OS schedulers:</strong> Priority by process priority',
            '<strong>Dijkstra:</strong> Extract-min vertex'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Kth largest = size-k min-heap or quickselect.',
            'Merge K sorted lists = classic heap problem.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Kth largest element. Hint: min-heap size k. Ans: O(n log k).',
            'Q2: Merge k sorted lists. Hint: heap of heads. Ans: O(N log k).',
            'Q3 (Hard): Find median stream. Hint: two heaps. Ans: O(log n) per insert.'
          ]
        }
      ]
    },
    tries: {
      title: 'Tries (Prefix Trees)',
      subtitle: 'O(m) prefix search where m = key length',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Tries store strings character-by-character along paths. Prefix queries (autocomplete, spell check) are O(m) independent of dictionary size N.',
          list: [
            '<strong>Node:</strong> children map + end-of-word flag',
            '<strong>insert:</strong> Walk/create path per character',
            '<strong>search:</strong> Exact match requires end flag',
            '<strong>startsWith:</strong> Path exists — no end flag needed',
            '<strong>Space:</strong> O(total chars) — can be heavy for sparse alphabets'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Each string shares prefixes via shared nodes — "app", "apple", "apt" share the "ap" path. This beats hash maps for prefix queries.</p>'
          ],
          note: 'Use array[26] for lowercase English; HashMap for Unicode/general.'
        },
        {
          heading: 'Visual Diagram',
          code: `Trie after insert: app, apple, apt

(root) --a-- ( ) --p-- ( ) --p* --l--e*
                  \\
                   t*

* = end of word. startsWith("ap") → True`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Full Trie: insert, search, startsWith',
            code: `class TrieNode:
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
print(t.search("app"), t.search("ap"), t.starts_with("ap"))`,
            output: 'True False True',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Trie in Java',
            code: `class TrieNode {
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
}`,
            output: `true
true`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Insert:</strong> For each char, create child if missing; mark end.',
            '<strong>Search:</strong> Walk chars; return node.end at end.',
            '<strong>Prefix:</strong> Walk chars; return true if path exists.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'm = word/prefix length:',
          table: {
            headers: [
              'Op',
              'Time',
              'Space'
            ],
            rows: [
              [
                'insert',
                'O(m)',
                'O(m) new nodes worst case'
              ],
              [
                'search',
                'O(m)',
                'O(1)'
              ],
              [
                'startsWith',
                'O(m)',
                'O(1)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Forgetting end flag — search returns true for prefixes.',
            'Not handling empty string edge case.'
          ],
          code: `class Trie:
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children: return False
            node = node.children[ch]
        return node.end  # must check end, not just path exists`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Autocomplete, IP routing (prefix trees), spell checkers.',
          list: [
            '<strong>Google Search:</strong> Trie-like prefix indexes',
            '<strong>Router tables:</strong> Longest prefix match'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Word Search II on board → Trie of words + DFS.',
            `Design Add and Search Words → trie + '.' wildcard DFS.`
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Implement Autocomplete. Hint: DFS from prefix node. Ans: O(m + results).',
            'Q2: Longest word in dictionary built from prefixes. Hint: trie + DFS.',
            'Q3 (Hard): Word Search II. Hint: trie + backtracking on grid.'
          ]
        }
      ]
    },
    'graphs-bfs-dfs': {
      title: 'Graphs BFS/DFS Basics',
      subtitle: 'Traverse networks — shortest path (BFS) vs explore all (DFS)',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Graphs are nodes + edges. Adjacency list is the standard interview representation. BFS finds shortest path in unweighted graphs; DFS explores components and cycles.',
          list: [
            '<strong>Adjacency list:</strong> Map node → neighbors — O(V+E) space',
            '<strong>BFS:</strong> Queue, layer by layer — shortest unweighted path',
            '<strong>DFS:</strong> Stack/recursion — exhaust branch before backtrack',
            '<strong>visited set:</strong> Prevents infinite loops on cycles',
            '<strong>Directed vs undirected:</strong> Add reverse edges if undirected'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>BFS parent pointers reconstruct shortest path. DFS detects cycles with recursion stack (directed) or visited (undirected).</p>',
            '<p>Grid problems are implicit graphs: each cell is a node; 4-directional neighbors are edges.</p>'
          ],
          note: 'BFS = shortest path unweighted. Dijkstra for weighted — see Module 4.'
        },
        {
          heading: 'Visual Diagram',
          code: `Graph: 0—1—3
        |   |
        2---4

BFS from 0: 0,1,2,3,4 (shortest 0→3: [0,1,3])
DFS from 0: 0,1,3,2,4 (depends on neighbor order)`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'BFS Shortest Path + DFS Recursive/Iterative',
            code: `from collections import deque, defaultdict
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
print("DFS iter:", dfs_iterative(graph, 0))`,
            output: `BFS path 0->5: [0,1,3,5]
DFS rec: [0,1,3,2,4,5]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'BFS & DFS in Java',
            code: `import java.util.*;

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
}`,
            output: `[0,1,2,3]
[0,1,3,2]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>BFS:</strong> Queue, mark parent on first visit, reconstruct path.',
            '<strong>DFS recursive:</strong> Base visited, recurse neighbors.',
            '<strong>DFS iterative:</strong> Stack + reversed neighbor order for same order as recursive.',
            '<strong>Grid:</strong> Directions [(0,1),(0,-1),(1,0),(-1,0)].'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'V vertices, E edges:',
          table: {
            headers: [
              'Algo',
              'Time',
              'Space',
              'Best for'
            ],
            rows: [
              [
                'BFS',
                'O(V+E)',
                'O(V)',
                'Shortest unweighted path'
              ],
              [
                'DFS',
                'O(V+E)',
                'O(V)',
                'Connectivity, cycles, topo sort'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'BFS without visited → infinite loop on cycles.',
            'Using DFS for shortest path in unweighted graph (wrong — use BFS).',
            'Forgetting to mark visited when enqueuing (duplicate work).'
          ],
          code: `from collections import deque
def bfs(graph, start):
    seen = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nei in graph[node]:
            if nei not in seen:
                seen.add(nei)  # mark WHEN enqueuing
                q.append(nei)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Social networks, maps, dependency resolution, game AI.',
          list: [
            '<strong>LinkedIn:</strong> BFS for degrees of separation',
            '<strong>Maze solving:</strong> BFS shortest exit'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Number of islands → DFS/BFS on grid.',
            'Clone graph → BFS + hash map old→new node.',
            'Course schedule cycle → DFS three-color.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Shortest path in unweighted graph. Hint: BFS + parent. Ans: O(V+E).',
            'Q2: Number of connected components. Hint: DFS from each unvisited. Ans: O(V+E).',
            'Q3 (Hard): Word ladder (begin→end, one char change). Hint: BFS on implicit graph. Ans: O(N·L²) where L=word length.'
          ]
        }
      ]
    }
  }
};
