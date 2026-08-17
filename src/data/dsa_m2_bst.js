// DSA Module 2: Binary Search Trees (Linked-List-style tutorial)
export const bstTopic = {
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
        headers: ['Structure', 'Ordering', 'Typical ops', 'Array-friendly?'],
        rows: [
          ['Binary tree', 'None', 'Traverse, LCA, paths', 'No'],
          ['BST', 'Left < node < right', 'Search / insert / delete O(h)', 'No'],
          ['Heap', 'Parent ≤/≥ children', 'Peek min/max O(1), push/pop O(log n)', 'Yes (complete tree)'],
          ['Balanced BST (AVL/RBT)', 'BST + height bounds', 'All O(log n) guaranteed', 'No']
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
        headers: ['Operation', 'Average (balanced)', 'Worst (skewed)', 'Space'],
        rows: [
          ['Search', 'O(log n)', 'O(n)', 'O(1) iterative / O(h) recursive'],
          ['Insert', 'O(log n)', 'O(n)', 'O(h)'],
          ['Delete', 'O(log n)', 'O(n)', 'O(h)'],
          ['Min / Max', 'O(log n)', 'O(n)', 'O(1)'],
          ['Inorder traversal', 'O(n)', 'O(n)', 'O(h)'],
          ['Validate BST', 'O(n)', 'O(n)', 'O(h)'],
          ['Build from sorted array (balanced)', 'O(n)', '—', 'O(log n) mid recursion']
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
};
