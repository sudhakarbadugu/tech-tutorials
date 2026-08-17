// DSA Module 2: Binary Trees (Linked-List-style tutorial)
export const binaryTreesTopic = {
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
      list: ['Useful for some algebraic identities; not required by most problems.']
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
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Traverse all nodes (any DFS/BFS)', 'O(n)', 'O(h) or O(w)', 'h = height, w = max width'],
          ['Inorder iterative', 'O(n)', 'O(h)', 'Explicit stack replaces recursion'],
          ['Level order', 'O(n)', 'O(w)', 'Queue holds one level'],
          ['Height / max depth', 'O(n)', 'O(h)', 'Single DFS'],
          ['Invert tree', 'O(n)', 'O(h)', 'Swap at every node'],
          ['Search unsorted binary tree', 'O(n)', 'O(h)', 'No BST property — must scan']
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
};
