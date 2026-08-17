// DSA Module 2 — enhanced interview-ready content (Linked-List style)
// Merged from dsa_m2.js — regenerate: node scripts/merge-dsa-m2.js

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
      subtitle: 'Hierarchical nodes with at most two children — the foundation of tree interviews',
      sections: [
        {
          heading: 'What is a Binary Tree?',
          text: 'A binary tree is a hierarchical data structure where each node has at most two children, conventionally called <strong>left</strong> and <strong>right</strong>. Unlike arrays and linked lists (linear), trees organize data by parent–child relationships. Binary trees power expression parsers, heap structures, BSTs, and a huge fraction of medium interview problems.',
          list: [
            '<strong>Root:</strong> The top node; every other node is reachable by following left/right links from the root.',
            '<strong>Parent / child:</strong> An edge from parent to left or right child; a node has at most one parent.',
            '<strong>Leaf:</strong> A node with no children (both left and right are null).',
            '<strong>Subtree:</strong> Any node plus all of its descendants forms a binary tree by itself.',
            '<strong>Height / depth:</strong> Depth is distance from the root; height is longest path down to a leaf (definitions vary by ±1 — state yours).'
          ]
        },
        {
          heading: 'Components of a Binary Tree Node',
          text: 'Every node is a small object: a value plus two optional child pointers. That is the entire structure — everything else (traversals, balance, search) is algorithm layered on top.',
          list: [
            '<strong>val / data:</strong> The payload stored at this node.',
            '<strong>left:</strong> Reference to the left child (or null).',
            '<strong>right:</strong> Reference to the right child (or null).',
            '<strong>Optional parent:</strong> Some implementations store parent for upward walks; LeetCode nodes usually do not.',
            '<strong>Null as empty tree:</strong> A null root is a valid empty binary tree — always handle it first.'
          ]
        },
        {
          heading: 'Node Structure',
          diagram: {
            caption: 'Binary tree node: value + left + right',
            chart: `flowchart LR
    subgraph Node[TreeNode]
      direction LR
      V[val]
      L[left]
      R[right]
    end
    L -.-> LC[left child or null]
    R -.-> RC[right child or null]
    style V fill:#3498db,color:#fff
    style L fill:#2ecc71,color:#fff
    style R fill:#e67e22,color:#fff`
          }
        },
        {
          example: {
            title: 'TreeNode definition',
            code: `# Python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Example Binary Tree',
          text: 'A small tree used throughout this page for traversal traces.',
          diagram: {
            caption: 'Root 4 — left subtree 2(1,3), right subtree 6(5,7)',
            chart: `flowchart TD
    R["4"] --> A["2"]
    R --> B["6"]
    A --> C["1"]
    A --> D["3"]
    B --> E["5"]
    B --> F["7"]
    style R fill:#9b59b6,color:#fff`
          }
        },
        {
          heading: 'Types of Binary Trees',
          text: 'Interview language is precise. Know these shapes so you can name constraints quickly.'
        },
        {
          heading: 'Full / Proper Binary Tree',
          text: 'Every node has either 0 or 2 children — no node has exactly one child.',
          list: [
            'Useful for some algebraic identities; not required by most problems.'
          ]
        },
        {
          heading: 'Complete Binary Tree',
          text: 'All levels are full except possibly the last, which is filled left to right. Heaps use this shape so they can sit in an array.',
          diagram: {
            caption: 'Complete: last level left-justified',
            chart: `flowchart TD
    A["1"] --> B["2"]
    A --> C["3"]
    B --> D["4"]
    B --> E["5"]
    C --> F["6"]
    style F fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Perfect Binary Tree',
          text: 'All internal nodes have two children and all leaves are at the same depth. A perfect tree of height h has 2^{h+1}−1 nodes (if height counts edges).'
        },
        {
          heading: 'Balanced Binary Tree',
          text: 'Height difference between left and right subtrees of every node is at most 1 (AVL-style). Balance keeps height O(log n) so operations stay fast. LeetCode 110 asks you to verify this.'
        },
        {
          heading: 'Skewed Binary Tree',
          text: 'Degenerate case that behaves like a linked list — every node has only a left (or only a right) child. Height is O(n); recursions can stack-overflow.'
        },
        {
          heading: 'Advantages',
          list: [
            '<strong>Hierarchical modeling:</strong> File systems, org charts, DOM, expression ASTs.',
            '<strong>Divide-and-conquer naturally:</strong> Solve left, solve right, merge at parent.',
            '<strong>Foundation for BSTs, heaps, segment trees:</strong> Special constraints add O(log n) power.',
            '<strong>Flexible shape:</strong> Insert structure without shifting like arrays.',
            '<strong>Rich traversal toolkit:</strong> DFS orders + BFS levels cover most interview patterns.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>No O(1) index access:</strong> You navigate by pointers, not random offsets.',
            '<strong>Pointer overhead:</strong> Two references per node cost memory vs a packed array.',
            '<strong>Unbalanced trees degrade:</strong> Height can become O(n) without rebalancing.',
            '<strong>Harder debugging:</strong> Cycles or wrong child links are easy to introduce in custom code.',
            '<strong>Recursion depth:</strong> Naive recursive traversals fail on skewed trees of size 10^5.'
          ]
        },
        {
          heading: 'Binary Tree Operations / Traversals',
          text: 'Traversals are the "operations" of a plain binary tree. Master recursive and iterative forms.'
        },
        {
          heading: 'Operation 1: Inorder (Left → Root → Right)',
          text: '<strong>What it does:</strong> Visit left subtree, then node, then right.<br/><strong>Why it matters:</strong> On a BST, inorder yields sorted values. Time O(n), space O(h).',
          diagram: {
            caption: 'Inorder on sample tree → 1,2,3,4,5,6,7',
            chart: `flowchart LR
    A["1"] --> B["2"] --> C["3"] --> D["4"] --> E["5"] --> F["6"] --> G["7"]
    style D fill:#9b59b6,color:#fff`
          }
        },
        {
          heading: 'Operation 2: Preorder (Root → Left → Right)',
          text: '<strong>What it does:</strong> Process the node before children.<br/><strong>Why it matters:</strong> Serialization, copying a tree, prefix expression evaluation.'
        },
        {
          heading: 'Operation 3: Postorder (Left → Right → Root)',
          text: '<strong>What it does:</strong> Process children before the node.<br/><strong>Why it matters:</strong> Delete tree, compute folder sizes, postfix evaluation — parent needs child results first.'
        },
        {
          heading: 'Operation 4: Level Order (BFS)',
          text: '<strong>What it does:</strong> Visit nodes level by level left to right using a queue.<br/><strong>Why it matters:</strong> Level-order problems, min depth, right side view, zigzag level order. Time O(n), space O(w) where w is max width.',
          diagram: {
            caption: 'Level order: queue expands neighbors by level',
            chart: `flowchart TD
    L0["Level 0: 4"] --> L1["Level 1: 2, 6"]
    L1 --> L2["Level 2: 1, 3, 5, 7"]
    style L0 fill:#9b59b6,color:#fff`
          }
        },
        {
          heading: 'Operation 5: Height / Depth',
          text: '<strong>What it does:</strong> height(node) = 1 + max(height(left), height(right)); empty tree height often defined as -1 or 0.<br/><strong>Best efficiency:</strong> O(n) single DFS.'
        },
        {
          heading: 'Operation 6: Invert / Mirror',
          text: '<strong>What it does:</strong> Swap left and right at every node (LeetCode 226).<br/><strong>Best efficiency:</strong> O(n) DFS or BFS.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Traversals — recursive, iterative inorder, level order',
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

def height(root: Optional[TreeNode]) -> int:
    if not root:
        return -1
    return 1 + max(height(root.left), height(root.right))

root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(6, TreeNode(5), TreeNode(7)))
print("Inorder:", inorder(root))
print("Preorder:", preorder(root))
print("Postorder:", postorder(root))
print("Iter inorder:", inorder_iter(root))
print("Level order:", level_order(root))
print("Height:", height(root))`,
            output: `Inorder: [1, 2, 3, 4, 5, 6, 7]
Preorder: [4, 2, 1, 3, 6, 5, 7]
Postorder: [1, 3, 2, 5, 7, 6, 4]
Iter inorder: [1, 2, 3, 4, 5, 6, 7]
Level order: [[4], [2, 6], [1, 3, 5, 7]]
Height: 2`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Binary tree traversals in Java',
            code: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class BinaryTreeDemo {
    static void inorder(TreeNode r, List<Integer> out) {
        if (r == null) return;
        inorder(r.left, out);
        out.add(r.val);
        inorder(r.right, out);
    }

    static List<Integer> inorderIter(TreeNode root) {
        List<Integer> out = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()) {
            while (cur != null) { stack.push(cur); cur = cur.left; }
            cur = stack.pop();
            out.add(cur.val);
            cur = cur.right;
        }
        return out;
    }

    static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
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
        root.left = new TreeNode(2); root.right = new TreeNode(6);
        root.left.left = new TreeNode(1); root.left.right = new TreeNode(3);
        root.right.left = new TreeNode(5); root.right.right = new TreeNode(7);
        List<Integer> in = new ArrayList<>();
        inorder(root, in);
        System.out.println(in);
        System.out.println(inorderIter(root));
        System.out.println(levelOrder(root));
    }
}`,
            output: `[1, 2, 3, 4, 5, 6, 7]
[1, 2, 3, 4, 5, 6, 7]
[[4], [2, 6], [1, 3, 5, 7]]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Traverse all nodes (any DFS/BFS)',
                'O(n)',
                'O(h) or O(w)',
                'h = height, w = max width'
              ],
              [
                'Inorder iterative',
                'O(n)',
                'O(h)',
                'Explicit stack replaces recursion'
              ],
              [
                'Level order',
                'O(n)',
                'O(w)',
                'Queue holds one level'
              ],
              [
                'Height / max depth',
                'O(n)',
                'O(h)',
                'Single DFS'
              ],
              [
                'Invert tree',
                'O(n)',
                'O(h)',
                'Swap at every node'
              ],
              [
                'Search unsorted binary tree',
                'O(n)',
                'O(h)',
                'No BST property — must scan'
              ]
            ]
          },
          note: 'Interview tip: always state space as O(h) not O(n) for DFS when the tree is balanced — then add "worst O(n) if skewed". That precision scores points.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Forgetting the null base case</strong> — every recursive function starts with <code>if not root: return …</code>.',
            '<strong>Confusing height definitions</strong> — empty tree as -1 vs 0 changes balanced checks; pick one and stay consistent.',
            '<strong>Modifying the tree while iterating incorrectly</strong> — invert is fine if you recurse after swap or swap after; be deliberate.',
            '<strong>Using list concatenation in Python recursion</strong> — <code>inorder(left)+[val]+inorder(right)</code> is clear but O(n²) copies on skewed trees; prefer append helper for large n.',
            '<strong>Queue size bug in level order</strong> — must capture <code>len(q)</code> before the inner loop, not use a changing size.'
          ],
          code: `# WRONG level order — processes whole queue without levels
while q:
    node = q.popleft()
    ...

# CORRECT — freeze level width
for _ in range(len(q)):
    node = q.popleft()
    ...`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>DOM / UI trees:</strong> Browser layout and React component trees are hierarchical graphs with binary/n-ary nodes.',
            '<strong>Expression / AST parsers:</strong> Compilers represent code as trees; preorder/postorder evaluate or emit code.',
            '<strong>File systems:</strong> Directories form trees; postorder deletes folders after contents.',
            '<strong>Decision trees in ML:</strong> Each internal node is a feature split; leaves are predictions.',
            '<strong>Game AI minimax trees:</strong> Positions branch into child moves.',
            '<strong>Heaps & BSTs:</strong> Specialize binary trees with ordering or shape constraints.'
          ]
        },
        {
          heading: 'Top Interview Questions on Binary Trees',
          text: 'Eight high-frequency problems. Most are DFS with a clear combine step, or BFS by levels.',
          note: 'Pattern cheat sheet: "same structure" → recurse both sides; "per level" → BFS with size; "path/sum from root" → DFS carrying state; "lowest common ancestor" → postorder return info upward.'
        },
        {
          heading: 'Practice Question 1: Maximum Depth (LeetCode 104, Easy)',
          text: '<strong>Problem:</strong> Return the maximum depth of a binary tree.<br/><strong>Key idea:</strong> 1 + max(depth left, depth right); null → 0.<br/><strong>Complexity:</strong> O(n) time, O(h) space.',
          example: {
            title: 'Python Solution',
            code: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Invert Binary Tree (LeetCode 226, Easy)',
          text: '<strong>Problem:</strong> Mirror a binary tree by swapping left and right children everywhere.<br/><strong>Key idea:</strong> Swap then recurse (or recurse then swap).<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = invertTree(root.right), invertTree(root.left)
    return root`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Same Tree (LeetCode 100, Easy)',
          text: '<strong>Problem:</strong> Are two binary trees structurally identical with the same values?<br/><strong>Key idea:</strong> Both null → true; one null → false; values equal and left/right same.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def isSameTree(p, q):
    if not p and not q: return True
    if not p or not q or p.val != q.val: return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Symmetric Tree (LeetCode 101, Easy)',
          text: '<strong>Problem:</strong> Is the tree a mirror of itself?<br/><strong>Key idea:</strong> Compare left subtree with right subtree mirrored (outer with outer, inner with inner).<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def isSymmetric(root):
    def mir(a, b):
        if not a and not b: return True
        if not a or not b or a.val != b.val: return False
        return mir(a.left, b.right) and mir(a.right, b.left)
    return mir(root, root)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Binary Tree Level Order Traversal (LeetCode 102, Medium)',
          text: '<strong>Problem:</strong> Return node values level by level.<br/><strong>Key idea:</strong> BFS; for each level process exactly len(queue) nodes.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `from collections import deque
def levelOrder(root):
    if not root: return []
    q, res = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):
            n = q.popleft(); level.append(n.val)
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
        res.append(level)
    return res`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Path Sum (LeetCode 112, Easy)',
          text: '<strong>Problem:</strong> Is there a root-to-leaf path summing to targetSum?<br/><strong>Key idea:</strong> DFS subtract node value; at leaf check remaining == val.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def hasPathSum(root, targetSum):
    if not root: return False
    if not root.left and not root.right:
        return root.val == targetSum
    rem = targetSum - root.val
    return hasPathSum(root.left, rem) or hasPathSum(root.right, rem)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Lowest Common Ancestor of Binary Tree (LeetCode 236, Medium)',
          text: '<strong>Problem:</strong> Find LCA of two nodes in a general binary tree (not BST).<br/><strong>Key idea:</strong> Postorder: if left and right each find one target, root is LCA; else propagate non-null side.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q:
        return root
    L = lowestCommonAncestor(root.left, p, q)
    R = lowestCommonAncestor(root.right, p, q)
    if L and R: return root
    return L or R`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Diameter of Binary Tree (LeetCode 543, Easy)',
          text: '<strong>Problem:</strong> Length of the longest path between any two nodes (edges count).<br/><strong>Key idea:</strong> At each node, path through node = left_height + right_height; track global max while DFS returns height.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def diameterOfBinaryTree(root):
    best = 0
    def height(node):
        nonlocal best
        if not node: return 0
        L, R = height(node.left), height(node.right)
        best = max(best, L + R)
        return 1 + max(L, R)
    height(root)
    return best`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    bst: {
      title: 'Binary Search Trees (BST)',
      subtitle: 'Ordered binary trees — left < node < right for O(log n) search when balanced',
      sections: [
        {
          heading: 'What is a Binary Search Tree?',
          text: 'A Binary Search Tree (BST) is a binary tree with an ordering invariant: for every node, <strong>all values in the left subtree are less than the node</strong>, and <strong>all values in the right subtree are greater</strong> (or ≥, depending on duplicate policy). That invariant turns search, insert, and delete into guided walks down a single path — O(h) time, which is O(log n) when the tree is balanced and O(n) when it degenerates into a line.',
          list: [
            '<strong>BST invariant:</strong> left subtree keys &lt; node.key &lt; right subtree keys (strict version).',
            '<strong>Inorder traversal is sorted:</strong> Walking left→root→right emits keys in ascending order — the defining property interviewers use.',
            '<strong>Not a heap:</strong> Heaps order parent vs children only; BSTs order entire left/right subtrees.',
            '<strong>Balance matters:</strong> AVL / Red-Black / Treaps keep h = O(log n); plain BSTs do not self-balance.',
            '<strong>Duplicate policy:</strong> Decide up front: ban duplicates, count frequency in node, or put equals on one side consistently.'
          ]
        },
        {
          heading: 'Components of a BST',
          list: [
            '<strong>TreeNode:</strong> Same shape as a binary tree — val, left, right.',
            '<strong>Root:</strong> Entry point for every search/insert/delete.',
            '<strong>Search path:</strong> At each node, compare target with val and go left or right — never both.',
            '<strong>Successor / predecessor:</strong> Next larger / next smaller key in sorted order — critical for delete.',
            '<strong>Subtree bounds:</strong> When validating a BST, each node has an allowed (low, high) range from ancestors.'
          ]
        },
        {
          heading: 'Example BST',
          diagram: {
            caption: 'Insert order 8,3,10,1,6,14,4,7,13',
            chart: `flowchart TD
    R["8"] --> A["3"]
    R --> B["10"]
    A --> C["1"]
    A --> D["6"]
    B --> E["14"]
    D --> F["4"]
    D --> G["7"]
    E --> H["13"]
    style R fill:#9b59b6,color:#fff`
          }
        },
        {
          text: 'Inorder of this tree: 1,3,4,6,7,8,10,13,14 — sorted. Search for 7: 8→3→6→7 (three comparisons).'
        },
        {
          heading: 'How Search Works',
          diagram: {
            caption: 'Search 7: compare and branch',
            chart: `flowchart LR
    S["start 8"] -->|7 < 8| A["3"]
    A -->|7 > 3| B["6"]
    B -->|7 > 6| C["7 found"]
    style C fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'BST vs Binary Tree vs Heap',
          table: {
            headers: [
              'Structure',
              'Ordering',
              'Typical ops',
              'Array-friendly?'
            ],
            rows: [
              [
                'Binary tree',
                'None',
                'Traverse, LCA, paths',
                'No'
              ],
              [
                'BST',
                'Left < node < right',
                'Search / insert / delete O(h)',
                'No'
              ],
              [
                'Heap',
                'Parent ≤/≥ children',
                'Peek min/max O(1), push/pop O(log n)',
                'Yes (complete tree)'
              ],
              [
                'Balanced BST (AVL/RBT)',
                'BST + height bounds',
                'All O(log n) guaranteed',
                'No'
              ]
            ]
          }
        },
        {
          heading: 'Advantages',
          list: [
            '<strong>Ordered dictionary:</strong> Search, insert, delete, successor in O(h).',
            '<strong>Range queries:</strong> Walk the tree and collect keys in [L, R] efficiently.',
            '<strong>Dynamic set:</strong> Grows without full rebuild (unlike sorting an array each time).',
            '<strong>Inorder = sorted:</strong> Free sorted iteration without a separate sort step.',
            '<strong>Simple recursive code:</strong> Interview implementations fit in ~20 lines per operation.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>Unbalanced inserts:</strong> Sorted input builds a linked list — O(n) ops.',
            '<strong>Delete is fiddly:</strong> Three cases (leaf, one child, two children) trip people up.',
            '<strong>No O(1) min extract like a heap</strong> without extra parent pointers / threading (min is leftmost — O(h)).',
            '<strong>Poor cache locality</strong> vs contiguous sorted arrays for pure static search (binary search).',
            '<strong>Concurrency:</strong> Fine-grained locking is hard; often use concurrent skip lists or external stores.'
          ]
        },
        {
          heading: 'Core Operations',
          text: 'Search, insert, delete, min/max, and validate cover almost every BST interview.'
        },
        {
          heading: 'Operation 1: Search',
          text: '<strong>What it does:</strong> Return the node with key k, or null.<br/><strong>Best efficiency:</strong> O(h). Iterative version avoids stack frames.',
          code: `def search(root, k):
    cur = root
    while cur:
        if k == cur.val: return cur
        cur = cur.left if k < cur.val else cur.right
    return None`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Insert',
          text: '<strong>What it does:</strong> Place a new key as a leaf in the unique correct position (for distinct keys).<br/><strong>Best efficiency:</strong> O(h). Walk until null child, attach new node.'
        },
        {
          heading: 'Operation 3: Delete',
          text: '<strong>What it does:</strong> Remove a key while preserving the BST invariant.<br/><strong>Cases:</strong> (1) leaf — unlink; (2) one child — replace with child; (3) two children — replace value with inorder successor (min of right subtree), then delete that successor node.',
          diagram: {
            caption: 'Delete node with two children → use inorder successor',
            chart: `flowchart TD
    N["node to delete"] --> L["left subtree"]
    N --> R["right subtree"]
    R --> S["successor = min(right)"]
    S --> Fix["copy successor.val into node; delete successor"]
    style S fill:#f1c40f,color:#000
    style Fix fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 4: Min / Max',
          text: '<strong>What it does:</strong> Min = walk left until null; max = walk right.<br/><strong>Best efficiency:</strong> O(h).'
        },
        {
          heading: 'Operation 5: Validate BST',
          text: '<strong>What it does:</strong> Check the invariant for every node.<br/><strong>Best approach:</strong> Pass allowed (low, high) bounds down the recursion — not only "left.val < root.val < right.val" (that misses deep violations).',
          code: `def isValidBST(root, lo=float('-inf'), hi=float('inf')):
    if not root: return True
    if not (lo < root.val < hi): return False
    return isValidBST(root.left, lo, root.val) and isValidBST(root.right, root.val, hi)`,
          language: 'python'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'BST search, insert, delete, validate',
            code: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def search(root: Optional[TreeNode], k: int) -> Optional[TreeNode]:
    cur = root
    while cur:
        if k == cur.val:
            return cur
        cur = cur.left if k < cur.val else cur.right
    return None

def insert(root: Optional[TreeNode], val: int) -> TreeNode:
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    elif val > root.val:
        root.right = insert(root.right, val)
    return root

def find_min(node: TreeNode) -> TreeNode:
    while node.left:
        node = node.left
    return node

def delete(root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if not root:
        return None
    if key < root.val:
        root.left = delete(root.left, key)
    elif key > root.val:
        root.right = delete(root.right, key)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.left
        succ = find_min(root.right)
        root.val = succ.val
        root.right = delete(root.right, succ.val)
    return root

def is_valid_bst(root, lo=float('-inf'), hi=float('inf')) -> bool:
    if not root:
        return True
    if not (lo < root.val < hi):
        return False
    return is_valid_bst(root.left, lo, root.val) and is_valid_bst(root.right, root.val, hi)

def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []

root = None
for v in [8, 3, 10, 1, 6, 14, 4, 7, 13]:
    root = insert(root, v)
print("Inorder:", inorder(root))
print("Search 7:", search(root, 7).val)
root = delete(root, 3)
print("After delete 3:", inorder(root))
print("Valid?", is_valid_bst(root))`,
            output: `Inorder: [1, 3, 4, 6, 7, 8, 10, 13, 14]
Search 7: 7
After delete 3: [1, 4, 6, 7, 8, 10, 13, 14]
Valid? True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'BST operations in Java',
            code: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class BSTDemo {
    static TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else if (val > root.val) root.right = insert(root.right, val);
        return root;
    }

    static TreeNode search(TreeNode root, int k) {
        while (root != null && root.val != k)
            root = k < root.val ? root.left : root.right;
        return root;
    }

    static TreeNode min(TreeNode n) {
        while (n.left != null) n = n.left;
        return n;
    }

    static TreeNode delete(TreeNode root, int key) {
        if (root == null) return null;
        if (key < root.val) root.left = delete(root.left, key);
        else if (key > root.val) root.right = delete(root.right, key);
        else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            TreeNode s = min(root.right);
            root.val = s.val;
            root.right = delete(root.right, s.val);
        }
        return root;
    }

    static boolean valid(TreeNode r, long lo, long hi) {
        if (r == null) return true;
        if (r.val <= lo || r.val >= hi) return false;
        return valid(r.left, lo, r.val) && valid(r.right, r.val, hi);
    }

    public static void main(String[] args) {
        TreeNode root = null;
        for (int v : new int[]{8,3,10,1,6,14,4,7,13}) root = insert(root, v);
        System.out.println(search(root, 7).val);
        root = delete(root, 3);
        System.out.println(valid(root, Long.MIN_VALUE, Long.MAX_VALUE));
    }
}`,
            output: `7
true`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: [
              'Operation',
              'Average (balanced)',
              'Worst (skewed)',
              'Space'
            ],
            rows: [
              [
                'Search',
                'O(log n)',
                'O(n)',
                'O(1) iterative / O(h) recursive'
              ],
              [
                'Insert',
                'O(log n)',
                'O(n)',
                'O(h)'
              ],
              [
                'Delete',
                'O(log n)',
                'O(n)',
                'O(h)'
              ],
              [
                'Min / Max',
                'O(log n)',
                'O(n)',
                'O(1)'
              ],
              [
                'Inorder traversal',
                'O(n)',
                'O(n)',
                'O(h)'
              ],
              [
                'Validate BST',
                'O(n)',
                'O(n)',
                'O(h)'
              ],
              [
                'Build from sorted array (balanced)',
                'O(n)',
                '—',
                'O(log n) mid recursion'
              ]
            ]
          },
          note: 'Interview tip: always mention "O(h), and h is O(log n) if balanced else O(n)". If they ask how to guarantee log n, name AVL or Red-Black at a high level.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Validating only local parent-child</strong> — a right child of left subtree can still be &gt; root. Use bounds.',
            '<strong>Integer overflow on bounds</strong> — use long min/max in Java for valid BST.',
            '<strong>Delete without handling successor carefully</strong> — must delete successor from right subtree, not just copy value.',
            '<strong>Inserting sorted data</strong> without shuffling or balancing → O(n) tree.',
            '<strong>Assuming inorder successor is root.right</strong> — it is the minimum of the right subtree, which may be deep left.'
          ],
          code: `# WRONG validation
def bad(root):
    if not root: return True
    if root.left and root.left.val >= root.val: return False
    if root.right and root.right.val <= root.val: return False
    return bad(root.left) and bad(root.right)  # misses deep violations

# CORRECT — bounds
def good(root, lo=float('-inf'), hi=float('inf')):
    if not root: return True
    if not (lo < root.val < hi): return False
    return good(root.left, lo, root.val) and good(root.right, root.val, hi)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Database indexes (historical / teaching model):</strong> B-trees are multiway cousins of BSTs used in real DB engines.',
            '<strong>Language maps/sets:</strong> TreeMap / TreeSet in Java are Red-Black BSTs — sorted iteration + O(log n) ops.',
            '<strong>Policy routing / IP lookups (conceptual):</strong> Trie/BST hybrids for longest-prefix style problems.',
            '<strong>3D games / graphics:</strong> BSP trees partition space with BST-like decisions.',
            '<strong>Autocompletion precursors:</strong> Ordered trees for range of keys with a common property.',
            '<strong>Event simulation:</strong> Ordered sets of timestamps for "next event" queries.'
          ]
        },
        {
          heading: 'Top Interview Questions on BSTs',
          text: 'Eight staples. If the problem gives a BST, use the ordering — do not treat it as a plain binary tree unless required.',
          note: 'Cheat sheet: search path → go left/right; sorted order → inorder; validate → bounds; kth small → inorder count; LCA in BST → split on value range.'
        },
        {
          heading: 'Practice Question 1: Search in a BST (LeetCode 700, Easy)',
          text: '<strong>Problem:</strong> Find the node with a given value in a BST.<br/><strong>Key idea:</strong> Standard BST walk.<br/><strong>Complexity:</strong> O(h).',
          example: {
            title: 'Python Solution',
            code: `def searchBST(root, val):
    while root and root.val != val:
        root = root.left if val < root.val else root.right
    return root`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Insert into a BST (LeetCode 701, Medium)',
          text: '<strong>Problem:</strong> Insert a value as a new leaf; return root.<br/><strong>Key idea:</strong> Walk to null link; attach node.<br/><strong>Complexity:</strong> O(h).',
          example: {
            title: 'Python Solution',
            code: `def insertIntoBST(root, val):
    if not root: return TreeNode(val)
    if val < root.val: root.left = insertIntoBST(root.left, val)
    else: root.right = insertIntoBST(root.right, val)
    return root`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Validate Binary Search Tree (LeetCode 98, Medium)',
          text: '<strong>Problem:</strong> Check if a binary tree is a valid BST.<br/><strong>Key idea:</strong> Bounds (low, high) on every node.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def isValidBST(root):
    def ok(node, lo, hi):
        if not node: return True
        if not (lo < node.val < hi): return False
        return ok(node.left, lo, node.val) and ok(node.right, node.val, hi)
    return ok(root, float('-inf'), float('inf'))`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Kth Smallest Element in a BST (LeetCode 230, Medium)',
          text: '<strong>Problem:</strong> Return the kth smallest value (1-indexed).<br/><strong>Key idea:</strong> Inorder traversal is sorted; stop at kth visit. Follow-up: augment nodes with subtree sizes for O(h).<br/><strong>Complexity:</strong> O(h + k).',
          example: {
            title: 'Python Solution',
            code: `def kthSmallest(root, k):
    stack = []
    cur = root
    while True:
        while cur:
            stack.append(cur); cur = cur.left
        cur = stack.pop()
        k -= 1
        if k == 0: return cur.val
        cur = cur.right`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Lowest Common Ancestor of a BST (LeetCode 235, Medium)',
          text: '<strong>Problem:</strong> LCA of two nodes in a BST.<br/><strong>Key idea:</strong> If both &lt; root go left; both &gt; root go right; else root splits them → LCA.<br/><strong>Complexity:</strong> O(h).',
          example: {
            title: 'Python Solution',
            code: `def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Delete Node in a BST (LeetCode 450, Medium)',
          text: '<strong>Problem:</strong> Delete a key and return the new root.<br/><strong>Key idea:</strong> Three cases; two-child case uses inorder successor.<br/><strong>Complexity:</strong> O(h).',
          example: {
            title: 'Python Solution',
            code: `def deleteNode(root, key):
    if not root: return None
    if key < root.val: root.left = deleteNode(root.left, key)
    elif key > root.val: root.right = deleteNode(root.right, key)
    else:
        if not root.left: return root.right
        if not root.right: return root.left
        succ = root.right
        while succ.left: succ = succ.left
        root.val = succ.val
        root.right = deleteNode(root.right, succ.val)
    return root`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Convert Sorted Array to BST (LeetCode 108, Easy)',
          text: '<strong>Problem:</strong> Build a height-balanced BST from a sorted array.<br/><strong>Key idea:</strong> Mid element is root; recurse on left/right halves.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def sortedArrayToBST(nums):
    def build(lo, hi):
        if lo > hi: return None
        mid = (lo + hi) // 2
        node = TreeNode(nums[mid])
        node.left = build(lo, mid - 1)
        node.right = build(mid + 1, hi)
        return node
    return build(0, len(nums) - 1)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Inorder Successor in BST (Classic)',
          text: '<strong>Problem:</strong> Find the next larger node after p (may not have right child).<br/><strong>Key idea:</strong> If p.right exists, min(p.right); else walk from root tracking last node &gt; p on the path.<br/><strong>Complexity:</strong> O(h).',
          example: {
            title: 'Python Solution',
            code: `def inorderSuccessor(root, p):
    if p.right:
        cur = p.right
        while cur.left: cur = cur.left
        return cur
    succ = None
    cur = root
    while cur:
        if p.val < cur.val:
            succ = cur
            cur = cur.left
        else:
            cur = cur.right
    return succ`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    heaps: {
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
            headers: [
              'Need',
              'Best structure'
            ],
            rows: [
              [
                'Repeated extract-min + insert',
                'Binary heap / priority queue'
              ],
              [
                'Search arbitrary key',
                'Hash set/map or BST'
              ],
              [
                'Sorted iteration of all keys',
                'BST or sort array'
              ],
              [
                'Static min queries only',
                'Just track min variable'
              ],
              [
                'Dijkstra frontier',
                'Min-heap of (dist, node)'
              ]
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
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Peek min/max',
                'O(1)',
                'O(1)',
                'Root of the heap'
              ],
              [
                'Push',
                'O(log n)',
                'O(1)',
                'Sift up'
              ],
              [
                'Pop / extract-min',
                'O(log n)',
                'O(1)',
                'Sift down'
              ],
              [
                'Heapify build',
                'O(n)',
                'O(1) extra',
                'Better than n × push'
              ],
              [
                'Heap sort',
                'O(n log n)',
                'O(1) extra',
                'Build + n extract'
              ],
              [
                'Delete arbitrary value',
                'O(n)',
                'O(1)',
                'Scan unless you store indices'
              ],
              [
                'Merge k sorted (n total)',
                'O(n log k)',
                'O(k)',
                'Heap of size k'
              ]
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
    },
    tries: {
      title: 'Tries (Prefix Trees)',
      subtitle: 'Character-by-character trees — O(L) prefix search for dictionaries and autocomplete',
      sections: [
        {
          heading: 'What is a Trie?',
          text: 'A trie (prefix tree) is a tree where each edge is labeled with a character, and each path from the root represents a string prefix. Words that share a prefix share a path — making tries ideal for autocomplete, spell-check dictionaries, IP routing (binary tries), and "search word in board" with a dictionary.',
          list: [
            '<strong>Root:</strong> Empty prefix; every insertion/search starts here.',
            '<strong>Edge / child map:</strong> From a node, character → next node (array of 26 for a–z, or a hashmap).',
            '<strong>End marker:</strong> A boolean (or count) on a node saying "a complete word ends here".',
            '<strong>Prefix sharing:</strong> "app", "apple", "apply" share a-p-p before branching.',
            '<strong>Time:</strong> Insert/search/startsWith are O(L) in word length L — independent of how many words are stored (for fixed alphabet).'
          ]
        },
        {
          heading: 'Components of a Trie Node',
          list: [
            '<strong>children:</strong> Map or fixed array to at most alphabet-size children.',
            '<strong>is_end / isWord:</strong> True if some inserted word ends at this node.',
            '<strong>Optional count:</strong> How many words pass through / end here — useful for delete and frequency.',
            '<strong>Optional parent / char:</strong> Helpful if you need to delete and prune dead branches.',
            '<strong>No "val" for the whole word:</strong> The word is the path labels, not a field on the leaf alone.'
          ]
        },
        {
          heading: 'Node Structure',
          diagram: {
            caption: 'TrieNode: children map + end flag',
            chart: `flowchart LR
    subgraph N[TrieNode]
      C["children: char → node"]
      E["is_end: bool"]
    end
    C --> A["'a'"]
    C --> B["'b'"]
    style E fill:#e67e22,color:#fff`
          }
        },
        {
          example: {
            title: 'TrieNode skeleton',
            code: `class TrieNode:
    def __init__(self):
        self.children = {}   # char -> TrieNode
        self.is_end = False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Example Trie',
          text: 'Insert "app", "apple", "bat". Shared prefixes collapse.',
          diagram: {
            caption: 'Paths spell the words; * marks is_end',
            chart: `flowchart TD
    R["root"] --> A["a"]
    R --> B["b"]
    A --> P1["p"]
    P1 --> P2["p * app"]
    P2 --> L["l"]
    L --> E["e * apple"]
    B --> A2["a"]
    A2 --> T["t * bat"]
    style P2 fill:#2ecc71,color:#fff
    style E fill:#2ecc71,color:#fff
    style T fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'How Insert and Search Work',
          text: 'Insert walks character by character, creating missing nodes, then sets is_end. Search walks the same path; fails if a link is missing; success requires is_end at the final node. startsWith is search without the is_end check.'
        },
        {
          heading: 'Operation 1: Insert',
          text: '<strong>What it does:</strong> Add a word to the dictionary.<br/><strong>Best efficiency:</strong> O(L) time, O(L) new nodes worst case if no shared prefix.',
          diagram: {
            caption: 'Insert "ace" creates a→c→e path',
            chart: `flowchart LR
    R["root"] --> A["a"] --> C["c"] --> E["e is_end"]
    style E fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Operation 2: Search Word',
          text: '<strong>What it does:</strong> Return true only if the exact word was inserted.<br/><strong>Best efficiency:</strong> O(L). Path exists AND final is_end is true.'
        },
        {
          heading: 'Operation 3: StartsWith (Prefix)',
          text: '<strong>What it does:</strong> Return true if any word has this prefix.<br/><strong>Best efficiency:</strong> O(L). Path exists; is_end irrelevant.'
        },
        {
          heading: 'Operation 4: Delete (optional)',
          text: '<strong>What it does:</strong> Remove a word; prune nodes that are no longer on any word path.<br/><strong>Careful:</strong> Do not remove nodes that are prefixes of other words (is_end or children remain).'
        },
        {
          heading: 'Trie vs HashSet vs BST',
          table: {
            headers: [
              'Structure',
              'Exact word lookup',
              'Prefix queries',
              'Ordered scan'
            ],
            rows: [
              [
                'HashSet',
                'O(L) hash',
                'Poor (scan all)',
                'No'
              ],
              [
                'BST / TreeMap of strings',
                'O(L log n)',
                'Possible with range',
                'Yes'
              ],
              [
                'Trie',
                'O(L)',
                'O(L) natural',
                'DFS lex order'
              ],
              [
                'Sorted list + binary search',
                'O(L log n)',
                'Binary search prefix',
                'Yes'
              ]
            ]
          }
        },
        {
          heading: 'Advantages',
          list: [
            '<strong>Prefix operations shine:</strong> Autocomplete, longest prefix match, typing suggestions.',
            '<strong>Predictable O(L) time</strong> independent of dictionary size (alphabet fixed).',
            '<strong>Shared storage</strong> for common prefixes — can beat storing full copies of each word.',
            '<strong>Lexicographic DFS</strong> can list words in sorted order by exploring children a→z.',
            '<strong>Board / Boggle search:</strong> Prune DFS early when path leaves the trie.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>Memory hungry:</strong> Many small nodes and child arrays/maps; worse than a compact hash set for exact-only lookups.',
            '<strong>Poor cache locality</strong> vs contiguous string arrays.',
            '<strong>Alphabet size matters:</strong> Array[256] per node wastes space for sparse alphabets.',
            '<strong>Unicode:</strong> Character-based tries need careful codepoint / grapheme policy.',
            '<strong>Not ideal for edit distance search</strong> alone — need BK-trees or n-grams for fuzzy match.'
          ]
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Trie insert, search, startsWith, prefix collect',
            code: `from typing import List, Optional

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def _walk(self, prefix: str) -> Optional[TrieNode]:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def search(self, word: str) -> bool:
        node = self._walk(word)
        return bool(node and node.is_end)

    def startsWith(self, prefix: str) -> bool:
        return self._walk(prefix) is not None

    def words_with_prefix(self, prefix: str) -> List[str]:
        node = self._walk(prefix)
        if not node:
            return []
        out = []
        def dfs(n, path):
            if n.is_end:
                out.append(path)
            for ch in sorted(n.children):
                dfs(n.children[ch], path + ch)
        dfs(node, prefix)
        return out

t = Trie()
for w in ["app", "apple", "apply", "bat", "batch"]:
    t.insert(w)
print(t.search("app"), t.search("ap"))
print(t.startsWith("ap"), t.startsWith("z"))
print(t.words_with_prefix("app"))`,
            output: `True False
True False
['app', 'apple', 'apply']`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Trie with HashMap children',
            code: `import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEnd;
}

public class Trie {
    private final TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node = node.children.computeIfAbsent(c, k -> new TrieNode());
        }
        node.isEnd = true;
    }

    private TrieNode walk(String s) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            node = node.children.get(c);
            if (node == null) return null;
        }
        return node;
    }

    public boolean search(String word) {
        TrieNode n = walk(word);
        return n != null && n.isEnd;
    }

    public boolean startsWith(String prefix) {
        return walk(prefix) != null;
    }

    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("apple");
        System.out.println(t.search("apple"));
        System.out.println(t.search("app"));
        System.out.println(t.startsWith("app"));
    }
}`,
            output: `true
false
true`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: [
              'Operation',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Insert word length L',
                'O(L)',
                'O(L) new nodes worst',
                'Shared prefixes reuse nodes'
              ],
              [
                'Search / startsWith',
                'O(L)',
                'O(1)',
                'Independent of #words n'
              ],
              [
                'List words with prefix',
                'O(L + output)',
                'O(H)',
                'DFS under prefix node'
              ],
              [
                'Build from n words',
                'O(total chars)',
                'O(total nodes)',
                'Often ≪ store-all-strings'
              ],
              [
                'HashSet exact lookup',
                'O(L)',
                'O(total chars)',
                'No prefix without scan'
              ]
            ]
          },
          note: 'Interview tip: say "time is O(length of the word), not O(n dictionary size)" — that is the main win over scanning a list.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Search without checking is_end</strong> — "app" prefix of "apple" is not a word unless inserted.',
            '<strong>Using list as children without map</strong> for large alphabets — prefer map or array[26] for a–z only.',
            '<strong>Deleting and breaking other words</strong> — clear is_end first; prune only childless non-end nodes.',
            '<strong>Mutating shared nodes incorrectly</strong> when tries are reused across queries.',
            '<strong>Case / locale:</strong> Normalize to lowercase if the problem is case-insensitive.'
          ],
          code: `# WRONG — treats any path as a word
def search_bad(self, word):
    return self._walk(word) is not None

# CORRECT
def search(self, word):
    node = self._walk(word)
    return node is not None and node.is_end`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Autocomplete / search-as-you-type:</strong> Browser URL bar, IDE symbol search, mobile keyboards.',
            '<strong>Spell checkers:</strong> Dictionary membership + prefix-based suggestions.',
            '<strong>IP routing (binary trie):</strong> Longest prefix match on address bits.',
            '<strong>T9 / predictive text:</strong> Paths constrained by key sequences.',
            '<strong>Word games (Boggle, Scrabble AI):</strong> Prune board DFS when prefix dies in the trie.',
            '<strong>Antivirus / IDS signatures:</strong> Multi-pattern matching often uses Aho–Corasick (trie + failure links).'
          ]
        },
        {
          heading: 'Top Interview Questions on Tries',
          text: 'Eight problems. Implement the trie once; reuse the mental model for word search and design problems.',
          note: `Design Add-and-Search Word ('.' wildcards) extends search with DFS on children. Word Search II = board DFS + trie pruning.`
        },
        {
          heading: 'Practice Question 1: Implement Trie (LeetCode 208, Medium)',
          text: '<strong>Problem:</strong> Implement insert, search, startsWith.<br/><strong>Key idea:</strong> Standard trie node with map/array children.<br/><strong>Complexity:</strong> O(L) per op.',
          example: {
            title: 'Python Solution',
            code: `class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, word):
        n = self.root
        for c in word:
            n = n.setdefault(c, {})
        n['#'] = True  # end marker
    def search(self, word):
        n = self.root
        for c in word:
            if c not in n: return False
            n = n[c]
        return '#' in n
    def startsWith(self, prefix):
        n = self.root
        for c in prefix:
            if c not in n: return False
            n = n[c]
        return True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Design Add and Search Words (LeetCode 211, Medium)',
          text: `<strong>Problem:</strong> search supports '.' wildcard matching any letter.<br/><strong>Key idea:</strong> DFS: on '.' try all children; on letter follow one edge.<br/><strong>Complexity:</strong> O(26^L) worst; fine for interview constraints.`,
          example: {
            title: 'Python Solution',
            code: `class WordDictionary:
    def __init__(self):
        self.root = {}
    def addWord(self, word):
        n = self.root
        for c in word:
            n = n.setdefault(c, {})
        n['#'] = True
    def search(self, word):
        def dfs(j, node):
            if j == len(word): return '#' in node
            c = word[j]
            if c == '.':
                return any(dfs(j+1, node[ch]) for ch in node if ch != '#')
            if c not in node: return False
            return dfs(j+1, node[c])
        return dfs(0, self.root)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Word Search II (LeetCode 212, Hard)',
          text: '<strong>Problem:</strong> Find all dictionary words on a board via adjacent cells.<br/><strong>Key idea:</strong> Build trie of words; DFS board while walking trie; prune when no child; mark visited.<br/><strong>Complexity:</strong> O(board cells · 4 · L) with heavy pruning.',
          example: {
            title: 'Python Solution (sketch)',
            code: `def findWords(board, words):
    trie = {}
    for w in words:
        n = trie
        for c in w: n = n.setdefault(c, {})
        n['$'] = w  # store word at end
    res, m, n = [], len(board), len(board[0])
    def dfs(i, j, node):
        ch = board[i][j]
        if ch not in node: return
        nxt = node[ch]
        if '$' in nxt:
            res.append(nxt.pop('$'))
        board[i][j] = '#'
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
            ni, nj = i+di, j+dj
            if 0<=ni<m and 0<=nj<n and board[ni][nj] != '#':
                dfs(ni, nj, nxt)
        board[i][j] = ch
    for i in range(m):
        for j in range(n):
            dfs(i, j, trie)
    return res`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Replace Words (LeetCode 648, Medium)',
          text: '<strong>Problem:</strong> Replace sentence words by their shortest dictionary root prefix.<br/><strong>Key idea:</strong> Trie of roots; for each word walk until is_end or mismatch.<br/><strong>Complexity:</strong> O(total chars).',
          example: {
            title: 'Python Solution',
            code: `def replaceWords(dictionary, sentence):
    root = {}
    for w in dictionary:
        n = root
        for c in w: n = n.setdefault(c, {})
        n['#'] = True
    def replace(word):
        n, pref = root, []
        for c in word:
            if c not in n or '#' in n: break
            n = n[c]; pref.append(c)
            if '#' in n: return ''.join(pref)
        return word
    return ' '.join(replace(w) for w in sentence.split())`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Longest Word in Dictionary (LeetCode 720, Medium)',
          text: '<strong>Problem:</strong> Longest word built by adding one char at a time from other words; tie → lex smallest.<br/><strong>Key idea:</strong> Trie + BFS/DFS only through is_end nodes, or sort + set of buildable words.<br/><strong>Complexity:</strong> O(total chars).',
          example: {
            title: 'Python Solution',
            code: `def longestWord(words):
    words = set(words)
    best = ''
    for w in sorted(words):
        if all(w[:k] in words for k in range(1, len(w))) and (
            len(w) > len(best) or (len(w) == len(best) and w < best)
        ):
            # stricter: every prefix must be a word — check k=1..len-1
            if all(w[:k] in words for k in range(1, len(w))):
                best = w
    # cleaner:
    best = ''
    for w in sorted(words, key=lambda x: (-len(x), x)):
        if all(w[:i] in words for i in range(1, len(w))):
            return w
    return best`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Map Sum Pairs (LeetCode 677, Medium)',
          text: '<strong>Problem:</strong> insert key→val; sum of values with keys starting with prefix.<br/><strong>Key idea:</strong> Trie storing subtree sum or val on end; update path sums on insert.<br/><strong>Complexity:</strong> O(L) insert/sum.',
          example: {
            title: 'Python Solution',
            code: `class MapSum:
    def __init__(self):
        self.root = {}
        self.vals = {}
    def insert(self, key, val):
        delta = val - self.vals.get(key, 0)
        self.vals[key] = val
        n = self.root
        for c in key:
            n = n.setdefault(c, {'sum': 0, 'ch': {}})
            # simplified structure: use dual dict pattern carefully
        # Practical: store sum on nodes
        n = self.root
        for c in key:
            if c not in n:
                n[c] = {'_s': 0}
            n = n[c]
            n['_s'] = n.get('_s', 0) + delta
        n['_v'] = val
    def sum(self, prefix):
        n = self.root
        for c in prefix:
            if c not in n: return 0
            n = n[c]
        return n.get('_s', 0)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Implement Magic Dictionary (LeetCode 676, Medium)',
          text: '<strong>Problem:</strong> search true if can change exactly one character to match a dict word.<br/><strong>Key idea:</strong> Group by length; for each candidate count mismatches == 1. Or trie DFS with remaining edits.<br/><strong>Complexity:</strong> O(n · L) per search naive.',
          example: {
            title: 'Python Solution',
            code: `from collections import defaultdict
class MagicDictionary:
    def __init__(self):
        self.by_len = defaultdict(list)
    def buildDict(self, dictionary):
        for w in dictionary:
            self.by_len[len(w)].append(w)
    def search(self, searchWord):
        for w in self.by_len[len(searchWord)]:
            diff = sum(a != b for a, b in zip(w, searchWord))
            if diff == 1: return True
        return False`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Maximum XOR of Two Numbers in an Array (LeetCode 421, Medium)',
          text: '<strong>Problem:</strong> Max XOR of any two numbers.<br/><strong>Key idea:</strong> Binary trie of bits (MSB→LSB); for each num greedily take opposite bit when possible.<br/><strong>Complexity:</strong> O(n · 32).',
          example: {
            title: 'Python Solution',
            code: `def findMaximumXOR(nums):
    root = {}
    for x in nums:
        n = root
        for i in range(31, -1, -1):
            b = (x >> i) & 1
            n = n.setdefault(b, {})
    ans = 0
    for x in nums:
        n, cur = root, 0
        for i in range(31, -1, -1):
            b = (x >> i) & 1
            want = 1 - b
            if want in n:
                cur |= 1 << i
                n = n[want]
            else:
                n = n[b]
        ans = max(ans, cur)
    return ans`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'graphs-bfs-dfs': {
      title: 'Graphs BFS/DFS Basics',
      subtitle: 'Nodes and edges — traverse with a queue (BFS) or a stack/recursion (DFS)',
      sections: [
        {
          heading: 'What is a Graph?',
          text: 'A graph is a set of <strong>vertices (nodes)</strong> connected by <strong>edges</strong>. Edges may be directed or undirected, weighted or unweighted. Graphs model social networks, maps, dependency systems, and state spaces. BFS and DFS are the two fundamental ways to visit every reachable node systematically.',
          list: [
            '<strong>Vertex / node:</strong> An entity — city, user, course, grid cell.',
            '<strong>Edge:</strong> A connection u–v (undirected) or u→v (directed).',
            '<strong>Adjacent / neighbor:</strong> Nodes sharing an edge with u.',
            '<strong>Path / cycle:</strong> Sequence of edges; cycle returns to a start vertex.',
            '<strong>Connected component:</strong> Maximal set of mutually reachable nodes (undirected).'
          ]
        },
        {
          heading: 'Components of a Graph Representation',
          list: [
            '<strong>Adjacency list:</strong> Map node → list of neighbors. Default for sparse graphs (E ≪ V²). Space O(V+E).',
            '<strong>Adjacency matrix:</strong> V×V boolean/weight grid. O(1) edge query; space O(V²). Good when dense.',
            '<strong>Edge list:</strong> List of (u,v,w) triples — simple input format; convert to lists for BFS/DFS.',
            '<strong>Visited set/array:</strong> Marks nodes already expanded so you do not loop forever on cycles.',
            '<strong>Parent / dist arrays:</strong> Optional bookkeeping to reconstruct paths and levels.'
          ]
        },
        {
          heading: 'Adjacency List Visualization',
          diagram: {
            caption: 'Undirected graph as adjacency lists',
            chart: `flowchart LR
    subgraph G[Graph]
      A["0"] --- B["1"]
      A --- C["2"]
      B --- C
      B --- D["3"]
    end
    style A fill:#9b59b6,color:#fff`
          }
        },
        {
          text: 'Lists: 0:[1,2], 1:[0,2,3], 2:[0,1], 3:[1]. Building from edge list is one loop of appends both ways for undirected graphs.'
        },
        {
          heading: 'What is BFS?',
          text: '<strong>Breadth-First Search</strong> expands nodes in order of distance from the source — level by level — using a <strong>queue</strong>. On unweighted graphs, the first time you reach a node is via a shortest path (fewest edges).',
          list: [
            '<strong>Queue:</strong> FIFO worklist of nodes to expand.',
            '<strong>Visited when enqueue (typical):</strong> Prevents multiple queue copies of the same node.',
            '<strong>dist[v]:</strong> Edges from source; set when first discovered.',
            '<strong>Use cases:</strong> Shortest path unweighted, level order, multi-source flood fill, bipartite check.',
            '<strong>Time / space:</strong> O(V+E) time, O(V) queue + visited.'
          ]
        },
        {
          heading: 'BFS Walkthrough',
          diagram: {
            caption: 'BFS from 0 — layers by distance',
            chart: `flowchart TD
    L0["dist0: 0"] --> L1["dist1: 1, 2"]
    L1 --> L2["dist2: 3"]
    style L0 fill:#2ecc71,color:#fff
    style L2 fill:#3498db,color:#fff`
          }
        },
        {
          heading: 'What is DFS?',
          text: '<strong>Depth-First Search</strong> explores as far as possible along one branch before backtracking — implemented with <strong>recursion</strong> (call stack) or an explicit <strong>stack</strong>. DFS is ideal for path existence, cycle detection, topological ideas, connected components, and grid backtracking.',
          list: [
            '<strong>Go deep first:</strong> Visit a neighbor fully before the next sibling.',
            '<strong>Colors / states:</strong> Unvisited / visiting / done — detect back edges (cycles) in directed graphs.',
            '<strong>Not shortest path</strong> on unweighted graphs (use BFS for that).',
            '<strong>Use cases:</strong> Components, cycle detect, maze path, island count, tree DP setups.',
            '<strong>Time / space:</strong> O(V+E) time, O(V) stack worst case.'
          ]
        },
        {
          heading: 'DFS Walkthrough',
          diagram: {
            caption: 'DFS recursion dives then backtracks',
            chart: `flowchart TD
    A["visit 0"] --> B["visit 1"]
    B --> C["visit 3"]
    C --> D["backtrack to 1"]
    D --> E["visit 2"]
    style A fill:#9b59b6,color:#fff
    style C fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'BFS vs DFS',
          table: {
            headers: [
              'Aspect',
              'BFS',
              'DFS'
            ],
            rows: [
              [
                'Data structure',
                'Queue',
                'Stack / recursion'
              ],
              [
                'Order',
                'By distance layers',
                'By deep paths'
              ],
              [
                'Shortest path (unweighted)',
                'Yes',
                'No (not guaranteed)'
              ],
              [
                'Memory',
                'O(width)',
                'O(depth)'
              ],
              [
                'Cycle detection',
                'With parent careful',
                'Color states classic'
              ],
              [
                'Typical interview',
                'Levels, multi-source',
                'Islands, paths, components'
              ]
            ]
          }
        },
        {
          heading: 'Types of Graphs You Will See',
          list: [
            '<strong>Undirected unweighted:</strong> Social undirected friends, grid 4-direction moves.',
            '<strong>Directed:</strong> Prerequisites, URL links, one-way streets.',
            '<strong>Weighted:</strong> Needs Dijkstra / Bellman (Module 4) — BFS only if all weights equal.',
            '<strong>Implicit graphs:</strong> Nodes are states (puzzle configs); edges are moves — still BFS/DFS.',
            '<strong>Grid graphs:</strong> Cells are nodes; neighbors are up/down/left/right (and diagonals sometimes).'
          ]
        },
        {
          heading: 'Advantages of BFS/DFS',
          list: [
            '<strong>Linear time O(V+E)</strong> — optimal for "visit everything reachable".',
            '<strong>Simple templates</strong> you can write under interview pressure.',
            '<strong>BFS gives shortest paths</strong> when edges are unit cost.',
            '<strong>DFS gives natural recursive structure</strong> for path construction and backtracking.',
            '<strong>Foundation for advanced algorithms:</strong> TopSort, bridges, SCCs, Dijkstra variants.'
          ]
        },
        {
          heading: 'Disadvantages & Limits',
          list: [
            '<strong>BFS memory:</strong> Wide graphs (social nets) hold huge frontiers.',
            '<strong>DFS stack overflow:</strong> Deep recursion on large V — use iterative stack or raise limit carefully.',
            '<strong>Weighted edges:</strong> Plain BFS is wrong — use Dijkstra.',
            '<strong>Visited mistakes:</strong> Forgetting visited → infinite loops on cycles.',
            '<strong>Directed vs undirected cycle rules differ</strong> — back edge definitions change.'
          ]
        },
        {
          heading: 'Core Operations',
          text: 'Build the graph, then run BFS or DFS with a clear visited policy.'
        },
        {
          heading: 'Operation 1: Build Adjacency List',
          text: '<strong>What it does:</strong> Convert edge list to neighbor lists.<br/><strong>Undirected:</strong> add both directions. <strong>Directed:</strong> add one.',
          code: `from collections import defaultdict
def build_graph(n, edges, directed=False):
    g = defaultdict(list)
    for u, v in edges:
        g[u].append(v)
        if not directed:
            g[v].append(u)
    return g`,
          language: 'python'
        },
        {
          heading: 'Operation 2: BFS from Source',
          text: '<strong>What it does:</strong> Visit reachable nodes level by level; optionally compute dist[].<br/><strong>Best efficiency:</strong> O(V+E).'
        },
        {
          heading: 'Operation 3: DFS from Source',
          text: '<strong>What it does:</strong> Recurse into unvisited neighbors; mark visited on entry.<br/><strong>Best efficiency:</strong> O(V+E).'
        },
        {
          heading: 'Operation 4: Connected Components',
          text: '<strong>What it does:</strong> For each unvisited node, run BFS/DFS and count one component.<br/><strong>Best efficiency:</strong> O(V+E) total.'
        },
        {
          heading: 'Operation 5: Grid Flood Fill / Islands',
          text: '<strong>What it does:</strong> Treat cells as nodes; DFS/BFS marks a whole land mass.<br/><strong>Best efficiency:</strong> O(rows · cols).'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'BFS, DFS, components, grid islands',
            code: `from collections import defaultdict, deque
from typing import List, Dict, Set

def build_undirected(n: int, edges: List[List[int]]) -> Dict[int, List[int]]:
    g = defaultdict(list)
    for u, v in edges:
        g[u].append(v)
        g[v].append(u)
    return g

def bfs(graph, src: int) -> List[int]:
    q, seen, order = deque([src]), {src}, []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            if v not in seen:
                seen.add(v)
                q.append(v)
    return order

def bfs_dist(graph, src: int) -> Dict[int, int]:
    q, dist = deque([src]), {src: 0}
    while q:
        u = q.popleft()
        for v in graph[u]:
            if v not in dist:
                dist[v] = dist[u] + 1
                q.append(v)
    return dist

def dfs(graph, src: int) -> List[int]:
    seen, order = set(), []
    def go(u):
        seen.add(u)
        order.append(u)
        for v in graph[u]:
            if v not in seen:
                go(v)
    go(src)
    return order

def count_components(n: int, edges: List[List[int]]) -> int:
    g = build_undirected(n, edges)
    seen = set()
    def go(u):
        seen.add(u)
        for v in g[u]:
            if v not in seen:
                go(v)
    comps = 0
    for i in range(n):
        if i not in seen:
            comps += 1
            go(i)
    return comps

def num_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    m, n = len(grid), len(grid[0])
    def dfs_cell(i, j):
        if i < 0 or j < 0 or i >= m or j >= n or grid[i][j] != '1':
            return
        grid[i][j] = '0'
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
            dfs_cell(i + di, j + dj)
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                dfs_cell(i, j)
    return count

g = build_undirected(4, [[0,1],[0,2],[1,2],[1,3]])
print("BFS", bfs(g, 0))
print("DFS", dfs(g, 0))
print("dist", bfs_dist(g, 0))
print("components", count_components(5, [[0,1],[1,2],[3,4]]))
print("islands", num_islands([
    ["1","1","0","0"],
    ["1","0","0","1"],
    ["0","0","1","1"],
]))`,
            output: `BFS [0, 1, 2, 3]
DFS [0, 1, 2, 3]
dist {0: 0, 1: 1, 2: 1, 3: 2}
components 2
islands 2`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'BFS and DFS in Java',
            code: `import java.util.*;

public class GraphBFSDFS {
    static List<List<Integer>> build(int n, int[][] edges) {
        List<List<Integer>> g = new ArrayList<>();
        for (int i = 0; i < n; i++) g.add(new ArrayList<>());
        for (int[] e : edges) {
            g.get(e[0]).add(e[1]);
            g.get(e[1]).add(e[0]);
        }
        return g;
    }

    static List<Integer> bfs(List<List<Integer>> g, int src) {
        boolean[] seen = new boolean[g.size()];
        Queue<Integer> q = new ArrayDeque<>();
        List<Integer> order = new ArrayList<>();
        seen[src] = true; q.offer(src);
        while (!q.isEmpty()) {
            int u = q.poll(); order.add(u);
            for (int v : g.get(u)) if (!seen[v]) {
                seen[v] = true; q.offer(v);
            }
        }
        return order;
    }

    static void dfs(List<List<Integer>> g, int u, boolean[] seen, List<Integer> order) {
        seen[u] = true; order.add(u);
        for (int v : g.get(u)) if (!seen[v]) dfs(g, v, seen, order);
    }

    public static void main(String[] args) {
        var g = build(4, new int[][]{{0,1},{0,2},{1,2},{1,3}});
        System.out.println(bfs(g, 0));
        List<Integer> order = new ArrayList<>();
        dfs(g, 0, new boolean[4], order);
        System.out.println(order);
    }
}`,
            output: `[0, 1, 2, 3]
[0, 1, 2, 3]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: [
              'Algorithm',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'BFS',
                'O(V+E)',
                'O(V)',
                'Queue + visited'
              ],
              [
                'DFS recursive',
                'O(V+E)',
                'O(V)',
                'Call stack depth O(V) worst'
              ],
              [
                'DFS iterative',
                'O(V+E)',
                'O(V)',
                'Explicit stack'
              ],
              [
                'All components',
                'O(V+E)',
                'O(V)',
                'Sum of BFS/DFS runs'
              ],
              [
                'Grid DFS/BFS',
                'O(R·C)',
                'O(R·C)',
                'Each cell once'
              ],
              [
                'Adj matrix BFS',
                'O(V²)',
                'O(V)',
                'Neighbor scan is O(V) each'
              ]
            ]
          },
          note: 'Interview tip: state representation first ("I model this as a graph where nodes are … and edges mean …") then pick BFS if shortest unweighted, DFS if explore/components/backtrack.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Not marking visited</strong> → infinite loops on cycles.',
            '<strong>Marking visited too late in BFS</strong> → many duplicate queue entries (usually still correct but slow). Prefer mark on enqueue.',
            '<strong>Using BFS for weighted shortest paths</strong> → wrong; use Dijkstra.',
            '<strong>Forgetting reverse edges</strong> on undirected inputs.',
            '<strong>Grid bounds / mutating input</strong> — sinking islands in-place is fine if allowed; otherwise use visited matrix.',
            '<strong>1-index vs 0-index nodes</strong> in problem statements.'
          ],
          code: `# BFS mark on enqueue (good)
if v not in seen:
    seen.add(v)
    q.append(v)

# Directed cycle detection needs 3 colors, not just boolean:
# 0=unseen, 1=visiting (on stack), 2=done
# back edge to state 1 ⇒ cycle`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Social networks:</strong> Friend recommendations and degrees of separation (BFS layers).',
            '<strong>Web crawling:</strong> Queue of URLs (BFS-like politeness variants).',
            '<strong>GPS unweighted hops:</strong> Fewest transfers on a subway graph (BFS).',
            '<strong>Garbage collection:</strong> Mark-and-sweep is graph reachability (DFS/BFS from roots).',
            '<strong>Image processing:</strong> Flood fill connected pixels (DFS/BFS on grid).',
            '<strong>Dependency checks:</strong> Detect import cycles (DFS colors on directed graph).',
            '<strong>Puzzle solving:</strong> Sliding puzzle / word ladder — BFS on implicit state graph.'
          ]
        },
        {
          heading: 'Top Interview Questions on BFS/DFS',
          text: 'Eight classics. Name the graph, then the traversal.',
          note: 'Grid islands → DFS/BFS flood. Word ladder → BFS on word graph. Course cycle → DFS colors or Kahn. Clone graph → BFS/DFS + map.'
        },
        {
          heading: 'Practice Question 1: Number of Islands (LeetCode 200, Medium)',
          text: `<strong>Problem:</strong> Count connected groups of '1's in a grid (4-direction).<br/><strong>Key idea:</strong> For each unvisited land, DFS/BFS sinks the whole island; increment count.<br/><strong>Complexity:</strong> O(R·C).`,
          example: {
            title: 'Python Solution',
            code: `def numIslands(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i<0 or j<0 or i>=m or j>=n or grid[i][j] != '1': return
        grid[i][j] = '0'
        dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
    ans = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                ans += 1; dfs(i, j)
    return ans`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Clone Graph (LeetCode 133, Medium)',
          text: '<strong>Problem:</strong> Deep copy a connected undirected graph.<br/><strong>Key idea:</strong> Map original→clone; BFS/DFS create nodes then wire neighbors.<br/><strong>Complexity:</strong> O(V+E).',
          example: {
            title: 'Python Solution',
            code: `def cloneGraph(node):
    if not node: return None
    mp = {node: Node(node.val)}
    q = deque([node])
    while q:
        cur = q.popleft()
        for nei in cur.neighbors:
            if nei not in mp:
                mp[nei] = Node(nei.val); q.append(nei)
            mp[cur].neighbors.append(mp[nei])
    return mp[node]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Course Schedule (LeetCode 207, Medium)',
          text: '<strong>Problem:</strong> Can you finish courses given prerequisites (directed edges)?<br/><strong>Key idea:</strong> Detect cycle — DFS colors or Kahn indegree BFS.<br/><strong>Complexity:</strong> O(V+E).',
          example: {
            title: 'Python Solution',
            code: `def canFinish(numCourses, prerequisites):
    g = [[] for _ in range(numCourses)]
    for a, b in prerequisites: g[b].append(a)
    state = [0] * numCourses  # 0=todo,1=doing,2=done
    def dfs(u):
        if state[u] == 1: return False
        if state[u] == 2: return True
        state[u] = 1
        for v in g[u]:
            if not dfs(v): return False
        state[u] = 2
        return True
    return all(dfs(i) for i in range(numCourses))`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Word Ladder (LeetCode 127, Hard)',
          text: '<strong>Problem:</strong> Fewest words from beginWord to endWord changing one letter at a time, each intermediate in wordList.<br/><strong>Key idea:</strong> BFS on implicit graph of words; neighbors = one-letter variants in the set.<br/><strong>Complexity:</strong> O(N · L · 26) typical.',
          example: {
            title: 'Python Solution',
            code: `from collections import deque
def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words: return 0
    q = deque([(beginWord, 1)])
    while q:
        w, d = q.popleft()
        if w == endWord: return d
        for i in range(len(w)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nw = w[:i] + c + w[i+1:]
                if nw in words:
                    words.remove(nw)
                    q.append((nw, d + 1))
    return 0`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Pacific Atlantic Water Flow (LeetCode 417, Medium)',
          text: '<strong>Problem:</strong> Cells that can flow to both oceans (water flows to ≤ height neighbors).<br/><strong>Key idea:</strong> Multi-source DFS/BFS inland from Pacific shores and Atlantic shores; intersection.<br/><strong>Complexity:</strong> O(R·C).',
          example: {
            title: 'Python Solution',
            code: `def pacificAtlantic(heights):
    m, n = len(heights), len(heights[0])
    def flood(starts):
        seen = set(starts)
        q = deque(starts)
        while q:
            i, j = q.popleft()
            for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
                if 0<=ni<m and 0<=nj<n and (ni,nj) not in seen \\
                   and heights[ni][nj] >= heights[i][j]:
                    seen.add((ni,nj)); q.append((ni,nj))
        return seen
    pac = [(0, j) for j in range(n)] + [(i, 0) for i in range(m)]
    atl = [(m-1, j) for j in range(n)] + [(i, n-1) for i in range(m)]
    return [list(x) for x in flood(pac) & flood(atl)]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Rotting Oranges (LeetCode 994, Medium)',
          text: '<strong>Problem:</strong> Minutes until all oranges rot; 4-direction spread each minute.<br/><strong>Key idea:</strong> Multi-source BFS from all rotten cells; count fresh; track time by levels.<br/><strong>Complexity:</strong> O(R·C).',
          example: {
            title: 'Python Solution',
            code: `from collections import deque
def orangesRotting(grid):
    m, n = len(grid), len(grid[0])
    q, fresh = deque(), 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 2: q.append((i, j))
            elif grid[i][j] == 1: fresh += 1
    mins = 0
    while q and fresh:
        for _ in range(len(q)):
            i, j = q.popleft()
            for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
                if 0<=ni<m and 0<=nj<n and grid[ni][nj] == 1:
                    grid[ni][nj] = 2; fresh -= 1; q.append((ni,nj))
        mins += 1
    return mins if fresh == 0 else -1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Graph Valid Tree (LeetCode 261, Medium)',
          text: '<strong>Problem:</strong> n nodes and n-1 edges form a tree?<br/><strong>Key idea:</strong> Tree ⇔ connected + no cycle ⇔ exactly n-1 edges and one component (Union-Find or DFS).<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def validTree(n, edges):
    if len(edges) != n - 1: return False
    g = [[] for _ in range(n)]
    for u, v in edges:
        g[u].append(v); g[v].append(u)
    seen = set()
    def dfs(u, parent):
        seen.add(u)
        for v in g[u]:
            if v == parent: continue
            if v in seen or not dfs(v, u): return False
        return True
    return dfs(0, -1) and len(seen) == n`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: 01 Matrix (LeetCode 542, Medium)',
          text: '<strong>Problem:</strong> For each cell, distance to nearest 0.<br/><strong>Key idea:</strong> Multi-source BFS from all zeros; first touch is shortest on unweighted grid.<br/><strong>Complexity:</strong> O(R·C).',
          example: {
            title: 'Python Solution',
            code: `from collections import deque
def updateMatrix(mat):
    m, n = len(mat), len(mat[0])
    dist = [[0]*n for _ in range(m)]
    q = deque()
    for i in range(m):
        for j in range(n):
            if mat[i][j] == 0: q.append((i, j))
            else: dist[i][j] = -1  # unseen
    while q:
        i, j = q.popleft()
        for ni, nj in ((i+1,j),(i-1,j),(i,j+1),(i,j-1)):
            if 0<=ni<m and 0<=nj<n and dist[ni][nj] == -1:
                dist[ni][nj] = dist[i][j] + 1
                q.append((ni, nj))
    return dist`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
