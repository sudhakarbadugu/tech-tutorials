// DSA Module 4: Recursion & Backtracking (Linked-List-style tutorial)
export const recursionBacktrackingTopic = {
  title: 'Recursion & Backtracking',
  subtitle: 'Explore every branch, prune what fails, undo and try again',
  sections: [
    {
      heading: 'What is Recursion?',
      text: 'Recursion is a problem-solving technique where a function solves a problem by calling itself on a smaller instance of the same problem. Every recursive solution needs two pieces: a <strong>base case</strong> that stops the recursion, and a <strong>recursive case</strong> that reduces the problem and combines sub-results. The call stack holds one frame per active call — that is both the power and the cost of recursion.',
      list: [
        '<strong>Base case:</strong> The smallest input with a direct answer (empty list, n = 0, out of bounds). Without it, recursion never ends.',
        '<strong>Recursive case:</strong> Decompose → call yourself on a smaller input → combine results on the way back.',
        '<strong>Call stack:</strong> Each call pushes a frame (locals + return address). Depth is O(height of the recursion tree).',
        '<strong>Divide and conquer:</strong> Recursion that splits work into independent subproblems (merge sort, binary search).',
        '<strong>Not always optimal:</strong> Naive recursion on overlapping subproblems (Fibonacci) redoes work — DP fixes that.'
      ]
    },
    {
      heading: 'What is Backtracking?',
      text: 'Backtracking is DFS over an <em>implicit decision tree</em>. You build a candidate solution one choice at a time, abandon (prune) branches that cannot succeed, and <strong>undo</strong> the last choice so you can try the next option. Subsets, permutations, N-Queens, combination sum, and sudoku solvers all share the same skeleton.',
      list: [
        '<strong>Choose:</strong> Apply a decision (append element, place a queen, pick a coin).',
        '<strong>Explore:</strong> Recurse into the new state.',
        '<strong>Unchoose:</strong> Undo the decision (pop, remove queen) — the hallmark of backtracking.',
        '<strong>Constraint / prune:</strong> Skip choices that violate rules early so you never explore doomed subtrees.',
        '<strong>State space tree:</strong> Every recursive call is a node; edges are choices; leaves are complete solutions or dead ends.'
      ]
    },
    {
      heading: 'Components of a Backtracking Solution',
      text: 'Every interview-ready backtracking solution is assembled from the same building blocks. Name them out loud and the code almost writes itself.',
      list: [
        '<strong>Path / partial solution:</strong> The choices made so far (a list of numbers, board placements, etc.).',
        '<strong>Choices at this step:</strong> The loop over legal next moves (remaining indices, free columns, unused letters).',
        '<strong>Validity check:</strong> Does this choice break a constraint? If yes, skip (prune).',
        '<strong>Base case / goal test:</strong> Is the path a complete solution? Record a snapshot and return.',
        '<strong>Undo bookkeeping:</strong> Used-flags, sets of attacked diagonals, running sums — all must be restored after the recursive call.'
      ]
    },
    {
      heading: 'The Universal Backtracking Template',
      text: 'Memorize this three-step loop. Nearly every backtracking problem is a variation of it.',
      diagram: {
        caption: 'choose → explore → unchoose',
        chart: `flowchart TD
    S["Start / enter backtrack()"] --> G{"Complete solution?"}
    G -->|yes| R["Record path snapshot"]
    G -->|no| L["For each choice"]
    L --> V{"Valid under constraints?"}
    V -->|no| L
    V -->|yes| C["Choose: apply choice"]
    C --> E["Explore: recurse"]
    E --> U["Unchoose: undo"]
    U --> L
    style R fill:#2ecc71,color:#fff
    style C fill:#3498db,color:#fff
    style U fill:#e67e22,color:#fff`
      }
    },
    {
      example: {
        title: 'Skeleton (Python)',
        code: `def backtrack(path, ...):
    if is_solution(path):
        result.append(path[:])   # snapshot!
        return
    for choice in choices(...):
        if not is_valid(choice, path):
            continue
        path.append(choice)      # choose
        backtrack(path, ...)     # explore
        path.pop()               # unchoose`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Call Stack Visualization',
      text: 'Recursion is not magic — it is a stack of frames. Understanding the stack makes stack-overflow bugs and "why is my path wrong?" bugs obvious.',
      diagram: {
        caption: 'factorial(4) call stack growth and unwind',
        chart: `flowchart TB
    subgraph Grow["Calls going deeper"]
      F4["fact(4) waits for fact(3)"]
      F3["fact(3) waits for fact(2)"]
      F2["fact(2) waits for fact(1)"]
      F1["fact(1) → base case 1"]
      F4 --> F3 --> F2 --> F1
    end
    subgraph Unwind["Returns multiply on the way up"]
      R1["1"] --> R2["2*1=2"] --> R3["3*2=6"] --> R4["4*6=24"]
    end
    Grow ~~~ Unwind
    style F1 fill:#2ecc71,color:#fff
    style R4 fill:#3498db,color:#fff`
      }
    },
    {
      heading: 'Example: Subsets Decision Tree',
      text: 'For input [1, 2, 3], each level decides whether the next index is still available. Using a <em>start index</em> avoids generating the same subset in different orders.',
      diagram: {
        caption: 'Subsets of [1,2,3] — 8 leaves = 2³',
        chart: `flowchart TD
    R["[]"]
    R --> A["[1]"]
    R --> B["[] skip 1"]
    A --> A1["[1,2]"]
    A --> A2["[1]"]
    B --> B1["[2]"]
    B --> B2["[]"]
    A1 --> A11["[1,2,3]"]
    A1 --> A12["[1,2]"]
    A2 --> A21["[1,3]"]
    A2 --> A22["[1]"]
    B1 --> B11["[2,3]"]
    B1 --> B12["[2]"]
    B2 --> B21["[3]"]
    B2 --> B22["[]"]
    style A11 fill:#2ecc71,color:#fff
    style B22 fill:#95a5a6,color:#fff`
      }
    },
    {
      heading: 'Types of Backtracking Problems',
      text: 'Interview problems cluster into a few families. Identify the family first — it tells you which bookkeeping pattern to use.'
    },
    {
      heading: 'Subsets / Power Set',
      text: 'Include-or-skip each element. Use a <strong>start index</strong> so each subset is generated once. Time O(n · 2ⁿ) because there are 2ⁿ subsets and copying a path costs O(n).',
      list: [
        '<strong>Pattern:</strong> <code>backtrack(start, path)</code>; loop <code>i</code> from start to n−1; recurse with <code>i+1</code>.',
        '<strong>Variant:</strong> Subsets II — sort first and skip duplicates when <code>i &gt; start and nums[i] == nums[i-1]</code>.'
      ]
    },
    {
      heading: 'Permutations',
      text: 'Every ordering of the n elements. Use a <strong>used[]</strong> array (or swap-in-place). Time O(n · n!).',
      list: [
        '<strong>Pattern:</strong> loop all indices; skip if used; mark used, append, recurse, unmark, pop.',
        '<strong>Base case:</strong> path length equals n.'
      ]
    },
    {
      heading: 'Combinations & Combination Sum',
      text: 'Choose k elements, or any count that sums to a target. Start index prevents reordered duplicates; reusing the same index allows unlimited coin reuse.',
      list: [
        '<strong>Combination Sum:</strong> recurse with <code>i</code> (reuse) after picking candidates[i].',
        '<strong>Combination Sum II:</strong> recurse with <code>i+1</code> and skip duplicate values at the same depth.',
        '<strong>Prune:</strong> sort candidates and break when the next value exceeds remaining target.'
      ]
    },
    {
      heading: 'Constraint Placement (N-Queens, Sudoku)',
      text: 'Place one item per row/cell and maintain sets of attacked lines or filled digits. Pruning is everything — without it these problems time out.',
      list: [
        '<strong>N-Queens:</strong> track used columns and both diagonal families (row+col, row−col).',
        '<strong>Sudoku:</strong> track used digits in each row, column, and 3×3 box; fill empty cells in order.'
      ]
    },
    {
      heading: 'Advantages',
      text: 'Backtracking is the default tool when you must explore a combinatorial space that is too irregular for a closed formula.',
      list: [
        '<strong>Correct by construction:</strong> You enumerate only valid candidates when constraints are checked early.',
        '<strong>Low extra space:</strong> O(depth) for the path — you do not store the entire state tree.',
        '<strong>Natural fit for puzzles:</strong> Sudoku, N-Queens, word search, path finding on grids.',
        '<strong>Easy to extend:</strong> Add a prune and the same skeleton gets faster; no redesign of a DP table required.',
        '<strong>Interview signal:</strong> Clean choose/explore/unchoose code shows you understand search, not just API trivia.'
      ]
    },
    {
      heading: 'Disadvantages',
      text: 'Exponential blow-up is real. Know when to switch to DP, greedy, or BFS.',
      list: [
        '<strong>Exponential time:</strong> 2ⁿ subsets, n! permutations — pruning helps but asymptotics stay harsh.',
        '<strong>Stack overflow risk:</strong> Deep recursion (n ≈ 10⁴) may exceed the call-stack limit — rewrite iteratively or raise recursion limit carefully.',
        '<strong>Easy to forget undo:</strong> Missing a pop or unmark corrupts later branches — the classic backtracking bug.',
        '<strong>Duplicates:</strong> Without start-index / used / sort-and-skip, you emit the same solution many times.',
        '<strong>Overlapping subproblems:</strong> If the same state is reached many ways, memoize (DP) instead of pure backtracking.'
      ]
    },
    {
      heading: 'Core Operations / Patterns',
      text: 'Treat each pattern as an "operation" you can drop into a problem the way you drop insert/delete into a linked list.'
    },
    {
      heading: 'Operation 1: Generate Subsets',
      text: '<strong>What it does:</strong> Produce every subset of an array.<br/><strong>Best efficiency:</strong> O(n · 2ⁿ) time, O(n) stack. Snapshot with <code>path[:]</code> — never store a reference to the live path list.',
      code: `def subsets(nums):
    result, path = [], []
    def bt(start):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            bt(i + 1)
            path.pop()
    bt(0)
    return result`,
      language: 'python'
    },
    {
      heading: 'Operation 2: Generate Permutations',
      text: '<strong>What it does:</strong> Produce every ordering of the array.<br/><strong>Best efficiency:</strong> O(n · n!) time. Use a used array or swap elements in place.',
      code: `def permutations(nums):
    result, path, used = [], [], [False] * len(nums)
    def bt():
        if len(path) == len(nums):
            result.append(path[:]); return
        for i, x in enumerate(nums):
            if used[i]: continue
            used[i] = True; path.append(x)
            bt()
            path.pop(); used[i] = False
    bt()
    return result`,
      language: 'python'
    },
    {
      heading: 'Operation 3: Combination Sum (reuse allowed)',
      text: '<strong>What it does:</strong> Find all unique combinations of candidates that sum to target; the same number may be chosen unlimited times.<br/><strong>Best efficiency:</strong> exponential in worst case; sort + prune when candidate &gt; remaining.',
      code: `def combination_sum(candidates, target):
    candidates.sort()
    result, path = [], []
    def bt(start, rem):
        if rem == 0:
            result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > rem: break
            path.append(candidates[i])
            bt(i, rem - candidates[i])   # i, not i+1 → reuse
            path.pop()
    bt(0, target)
    return result`,
      language: 'python'
    },
    {
      heading: 'Operation 4: N-Queens Placement',
      text: '<strong>What it does:</strong> Place n queens on an n×n board so no two share a row, column, or diagonal.<br/><strong>Best efficiency:</strong> roughly O(n!) with strong pruning via column/diagonal sets.',
      diagram: {
        caption: 'Queen attacks row, column, and both diagonals',
        chart: `flowchart TB
    Q["Queen at (r,c)"]
    Q --> Row["row r blocked"]
    Q --> Col["col c blocked"]
    Q --> D1["diag r+c blocked"]
    Q --> D2["diag r-c blocked"]
    style Q fill:#e74c3c,color:#fff`
      }
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Subsets, Permutations, Combination Sum & N-Queens',
        code: `from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
    result = []
    def backtrack(start: int, path: List[int]) -> None:
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result

def permutations(nums: List[int]) -> List[List[int]]:
    result, used = [], [False] * len(nums)
    def backtrack(path: List[int]) -> None:
        if len(path) == len(nums):
            result.append(path[:]); return
        for i in range(len(nums)):
            if used[i]: continue
            used[i] = True
            path.append(nums[i])
            backtrack(path)
            path.pop()
            used[i] = False
    backtrack([])
    return result

def combination_sum(candidates: List[int], target: int) -> List[List[int]]:
    result = []
    candidates.sort()
    def backtrack(start: int, path: List[int], remaining: int) -> None:
        if remaining == 0:
            result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break
            path.append(candidates[i])
            backtrack(i, path, remaining - candidates[i])
            path.pop()
    backtrack(0, [], target)
    return result

def solve_n_queens(n: int) -> List[List[str]]:
    result, cols, d1, d2 = [], set(), set(), set()
    board = [['.'] * n for _ in range(n)]
    def backtrack(row: int) -> None:
        if row == n:
            result.append([''.join(r) for r in board]); return
        for col in range(n):
            if col in cols or (row + col) in d1 or (row - col) in d2:
                continue
            cols.add(col); d1.add(row + col); d2.add(row - col)
            board[row][col] = 'Q'
            backtrack(row + 1)
            board[row][col] = '.'
            cols.remove(col); d1.remove(row + col); d2.remove(row - col)
    backtrack(0)
    return result

print(subsets([1, 2, 3]))
print(permutations([1, 2, 3]))
print(combination_sum([2, 3, 5], 8))
print(len(solve_n_queens(4)), "solutions for n=4")`,
        output: `[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[[2, 2, 2, 2], [2, 3, 3], [3, 5]]
2 solutions for n=4`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Subsets, Permutations & Combination Sum in Java',
        code: `import java.util.*;

public class BacktrackingDemo {
    static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSub(nums, 0, new ArrayList<>(), result);
        return result;
    }
    static void backtrackSub(int[] nums, int start, List<Integer> path,
                             List<List<Integer>> result) {
        result.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            backtrackSub(nums, i + 1, path, result);
            path.remove(path.size() - 1);
        }
    }

    static List<List<Integer>> permutations(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        backtrackPerm(nums, used, new ArrayList<>(), result);
        return result;
    }
    static void backtrackPerm(int[] nums, boolean[] used, List<Integer> path,
                              List<List<Integer>> result) {
        if (path.size() == nums.length) {
            result.add(new ArrayList<>(path)); return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true; path.add(nums[i]);
            backtrackPerm(nums, used, path, result);
            path.remove(path.size() - 1); used[i] = false;
        }
    }

    static List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> result = new ArrayList<>();
        backtrackSum(candidates, 0, target, new ArrayList<>(), result);
        return result;
    }
    static void backtrackSum(int[] c, int start, int rem, List<Integer> path,
                             List<List<Integer>> result) {
        if (rem == 0) { result.add(new ArrayList<>(path)); return; }
        for (int i = start; i < c.length; i++) {
            if (c[i] > rem) break;
            path.add(c[i]);
            backtrackSum(c, i, rem - c[i], path, result);
            path.remove(path.size() - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
        System.out.println(permutations(new int[]{1, 2, 3}));
        System.out.println(combinationSum(new int[]{2, 3, 5}, 8));
    }
}`,
        output: `[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[[2, 2, 2, 2], [2, 3, 3], [3, 5]]`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Always separate <strong>time to explore the tree</strong> from <strong>time to copy solutions into the result list</strong>. Interviewers expect both.',
      table: {
        headers: ['Problem', 'Time', 'Space (stack)', 'Notes'],
        rows: [
          ['Subsets', 'O(n · 2ⁿ)', 'O(n)', '2ⁿ leaves; each path copy costs O(n)'],
          ['Permutations', 'O(n · n!)', 'O(n)', 'n! leaves; used[] is O(n)'],
          ['Combinations C(n,k)', 'O(k · C(n,k))', 'O(k)', 'Path length capped at k'],
          ['Combination Sum', 'Exponential', 'O(target/min)', 'Prune when rem < next coin'],
          ['N-Queens', '~O(n!)', 'O(n)', 'Strong diagonal pruning in practice'],
          ['Sudoku', 'Exponential', 'O(1) board', 'Constraint sets make it fast on 9×9'],
          ['Naive Fibonacci', 'O(2ⁿ)', 'O(n)', 'Overlapping work — use DP instead']
        ]
      },
      note: 'Interview tip: if the same state is reached by many paths and you only need one optimal answer (not all paths), switch from backtracking to DP/memoization. Backtracking enumerates; DP reuses.'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Storing the live path:</strong> <code>result.append(path)</code> stores a reference — later pops empty every answer. Always <code>path[:]</code> / <code>new ArrayList&lt;&gt;(path)</code>.',
        '<strong>Forgetting to unchoose:</strong> Missing <code>path.pop()</code> or <code>used[i]=False</code> pollutes sibling branches.',
        '<strong>Wrong start index:</strong> Using 0 instead of start reorders subsets into permutations of the same multiset.',
        '<strong>No pruning:</strong> Combination-sum without "break when coin &gt; remaining" times out on large targets.',
        '<strong>Duplicate combinations:</strong> Sort + skip equal values at the same depth for Combination Sum II / Subsets II.'
      ],
      code: `# WRONG — stores reference to the same list
result.append(path)

# CORRECT — snapshot
result.append(path[:])

# WRONG — reuses elements out of order / duplicates orderings
for i in range(len(nums)):  # should start at 'start' for subsets
    ...
# CORRECT
for i in range(start, len(nums)):
    ...`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      text: 'Backtracking is not only puzzles — it powers configuration search whenever constraints dominate.',
      list: [
        '<strong>Package / dependency solvers:</strong> SAT-like search with prune for version constraints (npm, pip resolvers conceptually).',
        '<strong>Game AI:</strong> Exploring legal moves with alpha-beta pruning is adversarial backtracking.',
        '<strong>Regex engines (NFA):</strong> Matching with backreferences explores alternatives and backtracks on failure.',
        '<strong>Circuit / floorplanning:</strong> Place components under non-overlap and wire-length constraints.',
        '<strong>Test generation:</strong> Enumerate input combinations that hit coverage goals while pruning invalid cases.',
        '<strong>Map coloring & scheduling:</strong> Assign resources under mutual-exclusion constraints.'
      ],
      note: 'Common thread: build a partial assignment, check constraints early, undo and try the next option. That is backtracking whether the domain is queens or cloud VM placements.'
    },
    {
      heading: 'Top Interview Questions on Recursion & Backtracking',
      text: 'Eight high-frequency problems. Identify the family (subset / permutation / combination / placement) before coding.',
      note: 'Cheat sheet: power set → start index; all orderings → used[]; sum to target with reuse → recurse with i; sum without reuse / unique combos → i+1 + skip duplicates; board placement → constraint sets.'
    },
    {
      heading: 'Practice Question 1: Subsets (LeetCode 78, Medium)',
      text: '<strong>Problem:</strong> Return all possible subsets of a distinct-integer array.<br/><strong>Key idea:</strong> Backtrack with start index; append a snapshot at every node (not only leaves).<br/><strong>Complexity:</strong> Time O(n · 2ⁿ), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def subsets(nums):
    res, path = [], []
    def bt(start):
        res.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i]); bt(i + 1); path.pop()
    bt(0)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Permutations (LeetCode 46, Medium)',
      text: '<strong>Problem:</strong> Return all permutations of a distinct-integer array.<br/><strong>Key idea:</strong> used[] marks elements already in the path; base case when path length is n.<br/><strong>Complexity:</strong> Time O(n · n!), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def permute(nums):
    res, path, used = [], [], [False] * len(nums)
    def bt():
        if len(path) == len(nums):
            res.append(path[:]); return
        for i, x in enumerate(nums):
            if used[i]: continue
            used[i] = True; path.append(x); bt()
            path.pop(); used[i] = False
    bt()
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Combination Sum (LeetCode 39, Medium)',
      text: '<strong>Problem:</strong> Combinations of candidates that sum to target; reuse allowed.<br/><strong>Key idea:</strong> Sort for pruning; recurse with same index i after picking so the coin can be reused without reordering duplicates.<br/><strong>Complexity:</strong> Exponential; stack O(target / min candidate).',
      example: {
        title: 'Python Solution',
        code: `def combinationSum(candidates, target):
    candidates.sort()
    res, path = [], []
    def bt(i, rem):
        if rem == 0:
            res.append(path[:]); return
        for j in range(i, len(candidates)):
            if candidates[j] > rem: break
            path.append(candidates[j])
            bt(j, rem - candidates[j])
            path.pop()
    bt(0, target)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Combination Sum II (LeetCode 40, Medium)',
      text: '<strong>Problem:</strong> Each number may be used once; return unique combinations.<br/><strong>Key idea:</strong> Sort; recurse with i+1; skip when <code>j &gt; start and candidates[j] == candidates[j-1]</code>.<br/><strong>Complexity:</strong> Exponential with duplicate pruning.',
      example: {
        title: 'Python Solution',
        code: `def combinationSum2(candidates, target):
    candidates.sort()
    res, path = [], []
    def bt(start, rem):
        if rem == 0:
            res.append(path[:]); return
        for j in range(start, len(candidates)):
            if j > start and candidates[j] == candidates[j - 1]:
                continue
            if candidates[j] > rem: break
            path.append(candidates[j])
            bt(j + 1, rem - candidates[j])
            path.pop()
    bt(0, target)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: N-Queens (LeetCode 51, Hard)',
      text: '<strong>Problem:</strong> Return all distinct solutions to the n-queens puzzle.<br/><strong>Key idea:</strong> Place one queen per row; sets for columns and both diagonals give O(1) conflict checks.<br/><strong>Complexity:</strong> ~O(n!) time, O(n) space.',
      example: {
        title: 'Python Solution',
        code: `def solveNQueens(n):
    res, cols, d1, d2 = [], set(), set(), set()
    board = [['.'] * n for _ in range(n)]
    def bt(r):
        if r == n:
            res.append([''.join(row) for row in board]); return
        for c in range(n):
            if c in cols or r + c in d1 or r - c in d2: continue
            cols.add(c); d1.add(r + c); d2.add(r - c); board[r][c] = 'Q'
            bt(r + 1)
            board[r][c] = '.'; cols.remove(c); d1.remove(r + c); d2.remove(r - c)
    bt(0)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Word Search (LeetCode 79, Medium)',
      text: '<strong>Problem:</strong> Does word exist in a grid by moving to adjacent cells without reusing a cell?<br/><strong>Key idea:</strong> DFS from each cell; mark visited in-place (or set); unmark on return.<br/><strong>Complexity:</strong> O(m · n · 4^L) worst case for word length L.',
      example: {
        title: 'Python Solution',
        code: `def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k):
        if k == len(word): return True
        if i < 0 or j < 0 or i >= m or j >= n or board[i][j] != word[k]:
            return False
        tmp, board[i][j] = board[i][j], '#'
        found = (dfs(i+1, j, k+1) or dfs(i-1, j, k+1) or
                 dfs(i, j+1, k+1) or dfs(i, j-1, k+1))
        board[i][j] = tmp
        return found
    return any(dfs(i, j, 0) for i in range(m) for j in range(n))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Generate Parentheses (LeetCode 22, Medium)',
      text: '<strong>Problem:</strong> Generate all combinations of n pairs of well-formed parentheses.<br/><strong>Key idea:</strong> Track open and close counts; add "(" if open &lt; n; add ")" if close &lt; open.<br/><strong>Complexity:</strong> Catalan-number many solutions; stack O(n).',
      example: {
        title: 'Python Solution',
        code: `def generateParenthesis(n):
    res = []
    def bt(path, open_n, close_n):
        if len(path) == 2 * n:
            res.append(path); return
        if open_n < n:
            bt(path + '(', open_n + 1, close_n)
        if close_n < open_n:
            bt(path + ')', open_n, close_n + 1)
    bt('', 0, 0)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Palindrome Partitioning (LeetCode 131, Medium)',
      text: '<strong>Problem:</strong> Partition a string so every substring in the partition is a palindrome.<br/><strong>Key idea:</strong> From index start, try every end; if s[start:end+1] is palindrome, recurse on end+1.<br/><strong>Complexity:</strong> O(n · 2ⁿ) typical with palindrome checks O(n).',
      example: {
        title: 'Python Solution',
        code: `def partition(s):
    res, path = [], []
    def is_pal(a, b):
        return s[a:b+1] == s[a:b+1][::-1]
    def bt(start):
        if start == len(s):
            res.append(path[:]); return
        for end in range(start, len(s)):
            if is_pal(start, end):
                path.append(s[start:end+1])
                bt(end + 1)
                path.pop()
    bt(0)
    return res`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
