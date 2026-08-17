// DSA Module 4 — enhanced interview-ready content (Linked-List style)
// Merged from dsa_m4.js — regenerate: node scripts/merge-dsa-m4.js

export const dsaModule4Structure = {
  module4: {
    title: 'Module 4: DP & Graph Algorithms',
    topics: [
      {
        id: 'recursion-backtracking',
        title: 'Recursion & Backtracking'
      },
      {
        id: 'dp-memoization',
        title: 'Dynamic Programming (Memoization)'
      },
      {
        id: 'dp-tabulation',
        title: 'Dynamic Programming (Tabulation)'
      },
      {
        id: 'advanced-graphs',
        title: 'Dijkstra, TopSort & Union-Find'
      },
      {
        id: 'string-algos',
        title: 'Advanced String Algorithms'
      }
    ]
  }
};

export const dsaModule4Content = {
  module4: {
    'recursion-backtracking': {
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
            headers: [
              'Problem',
              'Time',
              'Space (stack)',
              'Notes'
            ],
            rows: [
              [
                'Subsets',
                'O(n · 2ⁿ)',
                'O(n)',
                '2ⁿ leaves; each path copy costs O(n)'
              ],
              [
                'Permutations',
                'O(n · n!)',
                'O(n)',
                'n! leaves; used[] is O(n)'
              ],
              [
                'Combinations C(n,k)',
                'O(k · C(n,k))',
                'O(k)',
                'Path length capped at k'
              ],
              [
                'Combination Sum',
                'Exponential',
                'O(target/min)',
                'Prune when rem < next coin'
              ],
              [
                'N-Queens',
                '~O(n!)',
                'O(n)',
                'Strong diagonal pruning in practice'
              ],
              [
                'Sudoku',
                'Exponential',
                'O(1) board',
                'Constraint sets make it fast on 9×9'
              ],
              [
                'Naive Fibonacci',
                'O(2ⁿ)',
                'O(n)',
                'Overlapping work — use DP instead'
              ]
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
    },
    'dp-memoization': {
      title: 'Dynamic Programming (Memoization)',
      subtitle: 'Top-down DP — recurse with a cache so each state is solved once',
      sections: [
        {
          heading: 'What is Dynamic Programming?',
          text: 'Dynamic Programming (DP) solves problems by combining answers to overlapping subproblems. Instead of recomputing the same state again and again, you store (memoize) or precompute (tabulate) each state once. DP applies when a problem has <strong>optimal substructure</strong> (an optimal solution is built from optimal sub-solutions) and <strong>overlapping subproblems</strong> (the same smaller problems appear repeatedly).',
          list: [
            '<strong>Optimal substructure:</strong> Best answer for n uses best answers for smaller sizes (e.g. shortest paths, knapsack).',
            '<strong>Overlapping subproblems:</strong> Recursion tree revisits the same arguments — pure recursion is exponential; DP makes it polynomial.',
            '<strong>Two flavors:</strong> Memoization (top-down) and tabulation (bottom-up). Same math; different evaluation order.',
            '<strong>State:</strong> The minimum set of parameters that uniquely identify a subproblem (i, remaining capacity, …).',
            '<strong>Transition:</strong> How to build dp[state] from smaller states — the recurrence relation.'
          ]
        },
        {
          heading: 'What is Memoization?',
          text: 'Memoization is <strong>top-down DP</strong>: write the natural recursive solution, then cache the return value of every unique call. The first time you see state S you compute and store it; every later request for S is an O(1) lookup. The recursion tree collapses into a DAG of unique states.',
          list: [
            '<strong>Cache key:</strong> Usually a tuple of state parameters, or a filled array/map indexed by state.',
            '<strong>Lazy evaluation:</strong> Only states reachable from the root are computed — unlike full tabulation.',
            '<strong>Same asymptotics as bottom-up</strong> when every state is needed; better when many states are unreachable.',
            '<strong>Python:</strong> <code>functools.lru_cache</code> or a dict; <strong>Java:</strong> HashMap or a multi-dimensional array with a sentinel.'
          ]
        },
        {
          heading: 'Components of a Memoized Solution',
          text: 'Name these five pieces in an interview and your solution structure stays clear under pressure.',
          list: [
            '<strong>State definition:</strong> What does f(i, w) mean in plain English? ("max value using items i..n-1 with capacity w")',
            '<strong>Base cases:</strong> When recursion stops (i == n, w == 0, amount == 0).',
            '<strong>Recurrence / transition:</strong> How f(state) is computed from smaller states.',
            '<strong>Memo table:</strong> Map or array storing answers; uninitialized means "not computed yet".',
            '<strong>Original call:</strong> The root query whose answer is the problem result — e.g. f(0, capacity).'
          ]
        },
        {
          heading: 'Recursion Tree Collapse',
          text: 'Naive Fibonacci recomputes fib(n-2) twice, fib(n-3) thrice, and so on. Memoization ensures each fib(k) is computed once.',
          diagram: {
            caption: 'fib(5) without memo — exponential blow-up',
            chart: `flowchart TD
    F5["fib(5)"]
    F5 --> F4a["fib(4)"]
    F5 --> F3a["fib(3)"]
    F4a --> F3b["fib(3)"]
    F4a --> F2a["fib(2)"]
    F3a --> F2b["fib(2)"]
    F3a --> F1a["fib(1)"]
    F3b --> F2c["fib(2)"]
    F3b --> F1b["fib(1)"]
    style F3a fill:#e74c3c,color:#fff
    style F3b fill:#e74c3c,color:#fff`
          }
        },
        {
          diagram: {
            caption: 'fib(5) with memo — each state once (DAG)',
            chart: `flowchart LR
    F5["fib(5)"] --> F4["fib(4)"]
    F5 --> F3["fib(3)"]
    F4 --> F3
    F4 --> F2["fib(2)"]
    F3 --> F2
    F3 --> F1["fib(1)"]
    F2 --> F1
    F2 --> F0["fib(0)"]
    style F5 fill:#3498db,color:#fff
    style F0 fill:#2ecc71,color:#fff
    style F1 fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'How Memoization Works Step by Step',
          text: 'Walk through coin change: fewest coins to make amount. State is the remaining amount; transition tries every coin.',
          list: [
            '<strong>Step 1:</strong> Define <code>dp(rem)</code> = fewest coins to make rem, or +∞ if impossible.',
            '<strong>Step 2:</strong> Base: <code>dp(0) = 0</code>; if rem &lt; 0 return +∞ (invalid).',
            '<strong>Step 3:</strong> Transition: <code>dp(rem) = 1 + min(dp(rem - coin) for coin in coins)</code>.',
            '<strong>Step 4:</strong> Before computing, check memo[rem]; after computing, store it.',
            '<strong>Step 5:</strong> Answer is <code>dp(amount)</code>; map +∞ back to -1 if required by the problem.'
          ],
          diagram: {
            caption: 'coins [1,2,5], amount 5 — states fill on demand',
            chart: `flowchart TD
    A["dp(5)"] --> B["try -1 → dp(4)"]
    A --> C["try -2 → dp(3)"]
    A --> D["try -5 → dp(0)=0"]
    B --> E["..."]
    C --> E
    D --> Ans["1 coin path found"]
    style D fill:#2ecc71,color:#fff
    style Ans fill:#3498db,color:#fff`
          }
        },
        {
          heading: 'Types of Memoization Patterns',
          text: 'Most interview DP is one of a few state shapes. Pick the shape before writing code.'
        },
        {
          heading: '1D Index / Remaining',
          text: 'State is a single index or remaining value: Fibonacci, climbing stairs, coin change (unbounded), house robber (can use index i).',
          list: [
            '<strong>Example:</strong> <code>dp(i)</code> = answer starting at index i.',
            '<strong>Memo size:</strong> O(n) entries.'
          ]
        },
        {
          heading: '2D Index Pair',
          text: 'Two progressing pointers: LCS, edit distance, unique paths on a grid, interleaving string.',
          list: [
            '<strong>Example:</strong> <code>dp(i, j)</code> = answer for s[i:] and t[j:].',
            '<strong>Memo size:</strong> O(n · m) entries.'
          ]
        },
        {
          heading: 'Knapsack-Style (index + capacity)',
          text: 'Include-or-skip decisions with a resource budget: 0/1 knapsack, partition equal subset sum, target sum.',
          list: [
            '<strong>Example:</strong> <code>dp(i, w)</code> = best value using items from i with capacity w.',
            '<strong>Transition:</strong> max(skip = dp(i+1,w), take = val[i] + dp(i+1, w-wt[i]) if wt fits).'
          ]
        },
        {
          heading: 'Advantages of Memoization',
          list: [
            '<strong>Natural recursion:</strong> Write the definition first; caching is a thin layer.',
            '<strong>Only needed states:</strong> Sparse reachable sets avoid filling a huge table.',
            '<strong>Easy base cases:</strong> They look like the math definition, not loop boundary quirks.',
            '<strong>Faster to code in interviews</strong> for tree/graph DP and awkward index orders.',
            '<strong>Same correctness as tabulation</strong> when the recurrence and base cases match.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>Recursion depth:</strong> Deep chains can overflow the stack (prefer tabulation or increase limit carefully).',
            '<strong>Hash overhead:</strong> Dict/HashMap memo has more constant factors than a packed array.',
            '<strong>Harder space optimization:</strong> Rolling arrays are more natural in bottom-up form.',
            '<strong>Hidden complexity:</strong> Easy to forget that each state must be O(1) work after lookups.',
            '<strong>Debugging:</strong> Call order is demand-driven — print traces can look chaotic versus row-by-row tables.'
          ]
        },
        {
          heading: 'Core Operations',
          text: 'Four operations cover most top-down DP interviews.'
        },
        {
          heading: 'Operation 1: Memoize a 1D Recurrence',
          text: '<strong>What it does:</strong> Cache fib / climbStairs / rob style functions.<br/><strong>Best efficiency:</strong> O(n) time, O(n) memo + stack.',
          code: `from functools import lru_cache

@lru_cache(None)
def fib(n):
    if n <= 1: return n
    return fib(n - 1) + fib(n - 2)`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Unbounded Knapsack / Coin Change',
          text: '<strong>What it does:</strong> Fewest coins (or max value) with unlimited supply of each item type.<br/><strong>Best efficiency:</strong> O(amount · |coins|) with memo on remaining amount.'
        },
        {
          heading: 'Operation 3: 0/1 Knapsack',
          text: '<strong>What it does:</strong> Each item at most once; maximize value under capacity.<br/><strong>Best efficiency:</strong> O(n · W) states; each state tries take/skip.'
        },
        {
          heading: 'Operation 4: 2D String DP (top-down)',
          text: '<strong>What it does:</strong> LCS / edit distance via <code>dp(i,j)</code> on suffixes or prefixes.<br/><strong>Best efficiency:</strong> O(n · m) states, O(1) work each.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Fibonacci, Coin Change & 0/1 Knapsack (Top-Down)',
            code: `from functools import lru_cache
from typing import List

@lru_cache(None)
def fib(n: int) -> int:
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

def coin_change(coins: List[int], amount: int) -> int:
    @lru_cache(None)
    def dp(rem: int) -> int:
        if rem == 0:
            return 0
        if rem < 0:
            return float('inf')
        best = float('inf')
        for c in coins:
            best = min(best, 1 + dp(rem - c))
        return best
    ans = dp(amount)
    return -1 if ans == float('inf') else ans

def knapsack_01(weights: List[int], values: List[int], capacity: int) -> int:
    n = len(weights)
    @lru_cache(None)
    def dp(i: int, w: int) -> int:
        if i == n or w == 0:
            return 0
        skip = dp(i + 1, w)
        take = 0
        if weights[i] <= w:
            take = values[i] + dp(i + 1, w - weights[i])
        return max(skip, take)
    return dp(0, capacity)

def rob(nums: List[int]) -> int:
    @lru_cache(None)
    def dp(i: int) -> int:
        if i >= len(nums):
            return 0
        return max(dp(i + 1), nums[i] + dp(i + 2))
    return dp(0)

print(fib(10))
print(coin_change([1, 2, 5], 11))
print(knapsack_01([1, 2, 3], [6, 10, 12], 5))
print(rob([2, 7, 9, 3, 1]))`,
            output: `55
3
22
12`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Memoized Fibonacci, Coin Change & Knapsack',
            code: `import java.util.*;

public class MemoDP {
    static int fib(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }

    static int coinChange(int[] coins, int amount) {
        int[] memo = new int[amount + 1];
        Arrays.fill(memo, -2); // -2 = unset, -1 = impossible
        return dpCoin(coins, amount, memo);
    }
    static int dpCoin(int[] coins, int rem, int[] memo) {
        if (rem == 0) return 0;
        if (rem < 0) return -1;
        if (memo[rem] != -2) return memo[rem];
        int best = Integer.MAX_VALUE;
        for (int c : coins) {
            int sub = dpCoin(coins, rem - c, memo);
            if (sub >= 0) best = Math.min(best, 1 + sub);
        }
        return memo[rem] = (best == Integer.MAX_VALUE) ? -1 : best;
    }

    static int knapsack(int[] wt, int[] val, int W) {
        int n = wt.length;
        Integer[][] memo = new Integer[n][W + 1];
        return ks(0, W, wt, val, memo);
    }
    static int ks(int i, int w, int[] wt, int[] val, Integer[][] memo) {
        if (i == wt.length || w == 0) return 0;
        if (memo[i][w] != null) return memo[i][w];
        int skip = ks(i + 1, w, wt, val, memo);
        int take = 0;
        if (wt[i] <= w) take = val[i] + ks(i + 1, w - wt[i], wt, val, memo);
        return memo[i][w] = Math.max(skip, take);
    }

    public static void main(String[] args) {
        System.out.println(fib(10, new int[11]));
        System.out.println(coinChange(new int[]{1, 2, 5}, 11));
        System.out.println(knapsack(new int[]{1, 2, 3}, new int[]{6, 10, 12}, 5));
    }
}`,
            output: `55
3
22`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Complexity is almost always <strong>#states × work per state</strong>. Work per state is the number of transitions (coins, take/skip, …).',
          table: {
            headers: [
              'Problem',
              'States',
              'Time',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Fibonacci',
                'O(n)',
                'O(n)',
                'O(n)',
                'vs O(2ⁿ) naive'
              ],
              [
                'Climbing Stairs',
                'O(n)',
                'O(n)',
                'O(n)',
                'Same recurrence as fib'
              ],
              [
                'House Robber',
                'O(n)',
                'O(n)',
                'O(n)',
                'take i or skip i'
              ],
              [
                'Coin Change',
                'O(amount)',
                'O(amount · k)',
                'O(amount)',
                'k = number of coins'
              ],
              [
                '0/1 Knapsack',
                'O(n · W)',
                'O(n · W)',
                'O(n · W)',
                'W = capacity'
              ],
              [
                'LCS (top-down)',
                'O(n · m)',
                'O(n · m)',
                'O(n · m)',
                'stack depth O(n+m)'
              ],
              [
                'Edit Distance',
                'O(n · m)',
                'O(n · m)',
                'O(n · m)',
                '3 transitions per cell'
              ]
            ]
          },
          note: 'Interview tip: first define the state in English, then write the recurrence, then add memo. State definition mistakes are the #1 source of wrong DP.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Wrong state:</strong> Forgetting a parameter (e.g. only index, not remaining capacity) merges different subproblems.',
            '<strong>Mutating keys:</strong> Using a list as an lru_cache key fails — use a tuple or string.',
            '<strong>Sentinel confusion:</strong> Mixing "not computed", "impossible", and "zero" in one int array — use a separate boolean or distinct sentinels.',
            '<strong>Not memoizing one branch:</strong> Computing take path with memo but skip path without doubles work.',
            '<strong>Stack overflow:</strong> amount = 10^4 with depth amount — prefer bottom-up for deep linear chains.'
          ],
          code: `# WRONG — list is unhashable for lru_cache
@lru_cache(None)
def dp(path):  # path is a list
    ...

# CORRECT — immutable key
@lru_cache(None)
def dp(i, remaining):
    ...

# WRONG — confuses 0 answer with empty cache
memo = [0] * (n + 1)  # 0 might be a real answer
# CORRECT
memo = [None] * (n + 1)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Route planning:</strong> Shortest paths with overlapping subpaths (related to Dijkstra + DP thinking).',
            '<strong>Resource allocation:</strong> Knapsack-style budgets in cloud packing and ad bidding.',
            '<strong>Compilers / query optimizers:</strong> Memoize cost of sub-plans when choosing join order.',
            '<strong>Bioinformatics:</strong> Sequence alignment is edit-distance DP (often tabulated, same recurrence).',
            '<strong>Games:</strong> Minimax with transposition tables is memoized recursion on game states.',
            '<strong>Parsing:</strong> CYK / chart parsing memoizes constituent spans.'
          ]
        },
        {
          heading: 'Top Interview Questions on Memoization',
          text: 'Eight staples. State the state, base case, and transition before coding.',
          note: 'If the interviewer asks for iterative afterward, convert the same recurrence to a bottom-up table — that is the next topic.'
        },
        {
          heading: 'Practice Question 1: Climbing Stairs (LeetCode 70, Easy)',
          text: '<strong>Problem:</strong> Ways to climb n stairs taking 1 or 2 steps.<br/><strong>Key idea:</strong> dp(i) = dp(i-1) + dp(i-2); fibonacci in disguise.<br/><strong>Complexity:</strong> O(n) time/space with memo.',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
@lru_cache(None)
def climbStairs(n):
    if n <= 2: return n
    return climbStairs(n - 1) + climbStairs(n - 2)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: House Robber (LeetCode 198, Medium)',
          text: '<strong>Problem:</strong> Max money without robbing adjacent houses.<br/><strong>Key idea:</strong> dp(i) = max(dp(i+1), nums[i] + dp(i+2)).<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def rob(nums):
    @lru_cache(None)
    def dp(i):
        if i >= len(nums): return 0
        return max(dp(i + 1), nums[i] + dp(i + 2))
    return dp(0)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Coin Change (LeetCode 322, Medium)',
          text: '<strong>Problem:</strong> Fewest coins to make amount.<br/><strong>Key idea:</strong> dp(rem) = 1 + min over coins; memo remaining amount.<br/><strong>Complexity:</strong> O(amount · k).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def coinChange(coins, amount):
    @lru_cache(None)
    def dp(rem):
        if rem == 0: return 0
        if rem < 0: return float('inf')
        return min(1 + dp(rem - c) for c in coins)
    ans = dp(amount)
    return -1 if ans == float('inf') else ans`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Target Sum (LeetCode 494, Medium)',
          text: '<strong>Problem:</strong> Assign +/- to each number to reach target; count ways.<br/><strong>Key idea:</strong> dp(i, sum_so_far) or transform to subset-sum count.<br/><strong>Complexity:</strong> O(n · sum).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def findTargetSumWays(nums, target):
    @lru_cache(None)
    def dp(i, total):
        if i == len(nums):
            return 1 if total == target else 0
        return dp(i + 1, total + nums[i]) + dp(i + 1, total - nums[i])
    return dp(0, 0)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Unique Paths (LeetCode 62, Medium)',
          text: '<strong>Problem:</strong> Paths from top-left to bottom-right moving only right/down.<br/><strong>Key idea:</strong> dp(r,c) = dp(r+1,c) + dp(r,c+1) with base at destination 1.<br/><strong>Complexity:</strong> O(m · n).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def uniquePaths(m, n):
    @lru_cache(None)
    def dp(r, c):
        if r == m - 1 and c == n - 1: return 1
        if r >= m or c >= n: return 0
        return dp(r + 1, c) + dp(r, c + 1)
    return dp(0, 0)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Longest Common Subsequence (LeetCode 1143, Medium)',
          text: '<strong>Problem:</strong> Length of LCS of two strings.<br/><strong>Key idea:</strong> if equal, 1+dp(i+1,j+1); else max of skip either side.<br/><strong>Complexity:</strong> O(n · m).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def longestCommonSubsequence(text1, text2):
    @lru_cache(None)
    def dp(i, j):
        if i == len(text1) or j == len(text2): return 0
        if text1[i] == text2[j]:
            return 1 + dp(i + 1, j + 1)
        return max(dp(i + 1, j), dp(i, j + 1))
    return dp(0, 0)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: 0/1 Knapsack (Classic)',
          text: '<strong>Problem:</strong> Max value with capacity W, each item once.<br/><strong>Key idea:</strong> dp(i,w) = max(skip, take if weight fits).<br/><strong>Complexity:</strong> O(n · W).',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def knapsack(wt, val, W):
    n = len(wt)
    @lru_cache(None)
    def dp(i, w):
        if i == n or w == 0: return 0
        best = dp(i + 1, w)
        if wt[i] <= w:
            best = max(best, val[i] + dp(i + 1, w - wt[i]))
        return best
    return dp(0, W)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Word Break (LeetCode 139, Medium)',
          text: '<strong>Problem:</strong> Can s be segmented into dictionary words?<br/><strong>Key idea:</strong> dp(i) true if some word matches s[i:i+len] and dp(i+len) true.<br/><strong>Complexity:</strong> O(n² · dict lookup) typical.',
          example: {
            title: 'Python Solution',
            code: `from functools import lru_cache
def wordBreak(s, wordDict):
    words = set(wordDict)
    @lru_cache(None)
    def dp(i):
        if i == len(s): return True
        for j in range(i + 1, len(s) + 1):
            if s[i:j] in words and dp(j):
                return True
        return False
    return dp(0)`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'dp-tabulation': {
      title: 'Dynamic Programming (Tabulation)',
      subtitle: 'Bottom-up DP — fill a table iteratively from base cases to the answer',
      sections: [
        {
          heading: 'What is Tabulation?',
          text: 'Tabulation is <strong>bottom-up dynamic programming</strong>. You allocate a table whose cells are DP states, seed the base cases, then fill remaining cells in an order that respects dependencies — always computing a state only after the states it depends on are ready. No recursion stack; the loops are the control flow.',
          list: [
            '<strong>Bottom-up:</strong> Start from the smallest subproblems and grow toward the original problem.',
            '<strong>Explicit table:</strong> Arrays (1D/2D) make the state space and complexity obvious.',
            '<strong>Dependency order:</strong> Nested loops must traverse states so that transitions only read already-filled cells.',
            '<strong>Space optimization:</strong> Often only the previous row (or a few variables) is needed — rolling arrays.',
            '<strong>Same recurrence as memoization:</strong> Only evaluation order changes.'
          ]
        },
        {
          heading: 'Memoization vs Tabulation',
          text: 'Both solve the same recurrences. Choose based on stack limits, sparsity, and how natural the fill order is.',
          table: {
            headers: [
              'Aspect',
              'Memoization (top-down)',
              'Tabulation (bottom-up)'
            ],
            rows: [
              [
                'Control flow',
                'Recursion + cache',
                'Loops over states'
              ],
              [
                'States computed',
                'Only reachable',
                'Usually all (or pruned loops)'
              ],
              [
                'Stack risk',
                'Yes (depth)',
                'No'
              ],
              [
                'Constants',
                'Hash / call overhead',
                'Tight array loops'
              ],
              [
                'Space tricks',
                'Harder',
                'Rolling arrays natural'
              ],
              [
                'Interview coding',
                'Fast for awkward states',
                'Fast when order is clear'
              ]
            ]
          }
        },
        {
          heading: 'Components of a Tabulated Solution',
          list: [
            '<strong>Table shape:</strong> 1D array, 2D grid, or multi-dim — matches state parameters.',
            '<strong>Base cases:</strong> Cells you can fill without transitions (dp[0]=0, first row/column).',
            '<strong>Fill order:</strong> Increasing i, increasing j, or diagonal — dictated by the recurrence.',
            '<strong>Transition:</strong> The assignment that writes dp[state] from smaller states.',
            '<strong>Answer location:</strong> Usually a corner cell: dp[n], dp[n][m], dp[amount].'
          ]
        },
        {
          heading: 'How Table Filling Works',
          text: 'Example: coin change (fewest coins). <code>dp[x]</code> = fewest coins to make x. Base <code>dp[0]=0</code>; for each amount, try every coin.',
          diagram: {
            caption: 'coins [1,2,5], fill dp[0..11]',
            chart: `flowchart LR
    D0["dp0=0"] --> D1["dp1=1"]
    D1 --> D2["dp2=1"]
    D2 --> D3["dp3=2"]
    D3 --> D4["dp4=2"]
    D4 --> D5["dp5=1"]
    D5 --> D11["... dp11=3"]
    style D0 fill:#2ecc71,color:#fff
    style D5 fill:#f1c40f,color:#000
    style D11 fill:#3498db,color:#fff`
          }
        },
        {
          text: 'For amount 11 with coins 1,2,5 the classic answer is 3 (5+5+1). Each cell looks only at smaller amounts — that is a valid bottom-up order.'
        },
        {
          heading: 'Classic 2D Table: LCS',
          text: 'Longest Common Subsequence of s and t. <code>dp[i][j]</code> = LCS length of first i chars of s and first j of t.',
          diagram: {
            caption: 's = "ace", t = "abcde" — matching letters take diagonal + 1',
            chart: `flowchart TB
    subgraph Table["dp rows = s prefix, cols = t prefix"]
      direction TB
      R0["row0 all 0"]
      R1["a: match a → 1"]
      R2["c: match c → 2"]
      R3["e: match e → 3"]
    end
    R0 --> R1 --> R2 --> R3
    style R3 fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Types of Tabulation Patterns',
          text: 'Recognize the pattern and the table shape follows.'
        },
        {
          heading: '1D Linear DP',
          text: 'Climbing stairs, house robber, decode ways, max sum with no two adjacent. Fill left→right; each index depends on a constant window behind it.',
          list: [
            '<strong>Space opt:</strong> Keep only last two values when the window is 2.',
            '<strong>Template:</strong> <code>for i in range(1, n): dp[i] = f(dp[i-1], dp[i-2], …)</code>'
          ]
        },
        {
          heading: '1D Knapsack / Coin Loops',
          text: 'Loop order encodes 0/1 vs unbounded. For unbounded coin change, loop amounts outer or coins outer carefully; for 0/1 knapsack, iterate capacity <strong>backward</strong> when compressing to 1D so each item is used once.',
          list: [
            '<strong>Unbounded:</strong> for coin in coins: for x = coin..amount: dp[x] = min(dp[x], dp[x-coin]+1)',
            '<strong>0/1 compressed:</strong> for each item: for w = W..wt: dp[w] = max(dp[w], dp[w-wt]+val)'
          ]
        },
        {
          heading: '2D Grid / String DP',
          text: 'Unique paths, LCS, edit distance, longest palindromic subsequence. Fill row by row; cell (i,j) reads (i-1,*), (*,j-1), (i-1,j-1).',
          list: [
            '<strong>Space opt:</strong> Keep previous row only when transition needs only i-1.',
            '<strong>Initialization:</strong> First row/column often represents prefixes against empty string.'
          ]
        },
        {
          heading: 'Interval DP',
          text: 'States are intervals [l,r]: burst balloons, matrix chain multiplication, palindrome partitioning min cuts. Fill by increasing interval length.',
          list: [
            '<strong>Order:</strong> for length in 1..n: for l, r = l+length-1: try split points.',
            '<strong>Harder:</strong> Less common mid-level; appears in advanced interviews.'
          ]
        },
        {
          heading: 'Advantages',
          list: [
            '<strong>No stack overflow:</strong> Safe for large n when recursion depth would be n.',
            '<strong>Predictable performance:</strong> Tight loops, good cache locality on arrays.',
            '<strong>Space optimization path:</strong> Rolling arrays / variables are systematic.',
            '<strong>Clear complexity:</strong> Table size × work per cell is easy to quote.',
            '<strong>Easy to reconstruct solution:</strong> Parent pointers or reverse transitions recover the actual choices.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>Must discover fill order:</strong> Wrong loop order silently uses uninitialized cells.',
            '<strong>Computes unused states:</strong> Dense tables waste work when reachability is sparse.',
            '<strong>Verbose for tree DP:</strong> Top-down often cleaner on trees/graphs.',
            '<strong>Initialization bugs:</strong> Off-by-one on base rows is the classic failure mode.',
            '<strong>Harder to map from the recursive definition</strong> until you practice both styles.'
          ]
        },
        {
          heading: 'Core Operations',
          text: 'Five tabulated workhorses that cover most medium DP interviews.'
        },
        {
          heading: 'Operation 1: Fill 1D from Left to Right',
          text: '<strong>What it does:</strong> Stairs / robber / decode.<br/><strong>Best efficiency:</strong> O(n) time, O(1) space after optimizing.',
          code: `def climb_stairs(n):
    if n <= 2: return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b`,
          language: 'python'
        },
        {
          heading: 'Operation 2: Coin Change Table',
          text: '<strong>What it does:</strong> Fewest coins for every amount 0..amount.<br/><strong>Best efficiency:</strong> O(amount · k). Initialize dp[1..] to +∞, dp[0]=0.'
        },
        {
          heading: 'Operation 3: LCS / Edit Distance Grid',
          text: '<strong>What it does:</strong> Compare two strings cell by cell.<br/><strong>Best efficiency:</strong> O(n · m) time and space (or O(min(n,m)) space with rolling).'
        },
        {
          heading: 'Operation 4: 0/1 Knapsack Table',
          text: '<strong>What it does:</strong> Max value for every capacity with first i items.<br/><strong>Best efficiency:</strong> O(n · W); 1D backward loop for O(W) space.'
        },
        {
          heading: 'Operation 5: Reconstruct the Answer',
          text: `<strong>What it does:</strong> After filling values, walk backward to recover coins chosen, LCS string, or items picked.<br/><strong>Technique:</strong> From the answer cell, reverse the transition that produced the cell's value.`
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Coin Change, LCS, Edit Distance & Climbing Stairs',
            code: `from typing import List

def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

def coin_change(coins: List[int], amount: int) -> int:
    INF = amount + 1
    dp = [0] + [INF] * amount
    for x in range(1, amount + 1):
        for c in coins:
            if c <= x:
                dp[x] = min(dp[x], dp[x - c] + 1)
    return -1 if dp[amount] == INF else dp[amount]

def lcs(s: str, t: str) -> int:
    n, m = len(s), len(t)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s[i - 1] == t[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[n][m]

def edit_distance(s: str, t: str) -> int:
    n, m = len(s), len(t)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(n + 1):
        dp[i][0] = i
    for j in range(m + 1):
        dp[0][j] = j
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s[i - 1] == t[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete
                    dp[i][j - 1],      # insert
                    dp[i - 1][j - 1],  # replace
                )
    return dp[n][m]

def knapsack_01(wt: List[int], val: List[int], W: int) -> int:
    dp = [0] * (W + 1)
    for i in range(len(wt)):
        for w in range(W, wt[i] - 1, -1):  # backward → 0/1
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i])
    return dp[W]

print(climb_stairs(5))
print(coin_change([1, 2, 5], 11))
print(lcs("ace", "abcde"))
print(edit_distance("horse", "ros"))
print(knapsack_01([1, 2, 3], [6, 10, 12], 5))`,
            output: `8
3
3
3
22`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Tabulation — Coin Change, LCS & Edit Distance',
            code: `import java.util.Arrays;

public class TabulationDP {
    static int coinChange(int[] coins, int amount) {
        int INF = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, INF);
        dp[0] = 0;
        for (int x = 1; x <= amount; x++)
            for (int c : coins)
                if (c <= x) dp[x] = Math.min(dp[x], dp[x - c] + 1);
        return dp[amount] >= INF ? -1 : dp[amount];
    }

    static int lcs(String s, String t) {
        int n = s.length(), m = t.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                if (s.charAt(i - 1) == t.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        return dp[n][m];
    }

    static int editDistance(String s, String t) {
        int n = s.length(), m = t.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) dp[i][0] = i;
        for (int j = 0; j <= m; j++) dp[0][j] = j;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                if (s.charAt(i - 1) == t.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = 1 + Math.min(dp[i - 1][j],
                            Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
        return dp[n][m];
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1, 2, 5}, 11));
        System.out.println(lcs("ace", "abcde"));
        System.out.println(editDistance("horse", "ros"));
    }
}`,
            output: `3
3
3`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: [
              'Problem',
              'Time',
              'Space',
              'Optimized space'
            ],
            rows: [
              [
                'Climbing Stairs',
                'O(n)',
                'O(n)',
                'O(1) two variables'
              ],
              [
                'House Robber',
                'O(n)',
                'O(n)',
                'O(1)'
              ],
              [
                'Coin Change',
                'O(amount · k)',
                'O(amount)',
                'O(amount)'
              ],
              [
                '0/1 Knapsack',
                'O(n · W)',
                'O(n · W)',
                'O(W) 1D backward'
              ],
              [
                'LCS',
                'O(n · m)',
                'O(n · m)',
                'O(min(n,m))'
              ],
              [
                'Edit Distance',
                'O(n · m)',
                'O(n · m)',
                'O(min(n,m))'
              ],
              [
                'Unique Paths',
                'O(m · n)',
                'O(m · n)',
                'O(n) one row'
              ]
            ]
          },
          note: 'Interview tip: after giving O(n·m) time, volunteer the rolling-array space optimization — it shows mastery beyond the first correct solution.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Wrong loop order for 0/1 knapsack:</strong> Forward 1D capacity reuses the same item — must go backward.',
            '<strong>Forgetting base rows:</strong> Edit distance needs dp[i][0]=i and dp[0][j]=j.',
            '<strong>INF initialization:</strong> Use amount+1 or a true infinity; Integer.MAX_VALUE + 1 overflows in Java.',
            '<strong>Off-by-one on prefixes:</strong> Tables often use length+1 so empty prefixes sit at index 0.',
            '<strong>Updating in place incorrectly:</strong> When a transition needs the old row, copy or keep prev[].'
          ],
          code: `# WRONG 0/1 knapsack — forward reuses item
for w in range(wt[i], W + 1):
    dp[w] = max(dp[w], dp[w - wt[i]] + val[i])

# CORRECT — backward
for w in range(W, wt[i] - 1, -1):
    dp[w] = max(dp[w], dp[w - wt[i]] + val[i])

# WRONG coin change init
dp = [0] * (amount + 1)  # all zeros look like free solutions
# CORRECT
dp = [0] + [amount + 1] * amount`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Spell-check / DNA alignment:</strong> Edit distance and related alignments run as 2D tables at scale.',
            '<strong>Diff tools:</strong> LCS-style ideas power file diffs and merge conflict views.',
            '<strong>Resource scheduling:</strong> Knapsack-like packing of jobs into machines with capacity.',
            '<strong>NLP:</strong> Viterbi decoding is tabulated DP over time × state grids.',
            '<strong>Finance:</strong> Option pricing lattices and some portfolio knapsack models.',
            '<strong>Game damage tables / RPG crafting:</strong> Precomputed best outcomes under constraints.'
          ]
        },
        {
          heading: 'Top Interview Questions on Tabulation',
          text: 'Eight problems where bottom-up is the expected production-quality answer.',
          note: 'Always state base case, loop order, and where the answer sits in the table.'
        },
        {
          heading: 'Practice Question 1: Climbing Stairs (LeetCode 70, Easy)',
          text: '<strong>Problem:</strong> Ways to climb n steps with 1 or 2 at a time.<br/><strong>Key idea:</strong> dp[i]=dp[i-1]+dp[i-2]; optimize to two variables.<br/><strong>Complexity:</strong> O(n) time, O(1) space.',
          example: {
            title: 'Python Solution',
            code: `def climbStairs(n):
    if n <= 2: return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Coin Change (LeetCode 322, Medium)',
          text: '<strong>Problem:</strong> Fewest coins to make amount.<br/><strong>Key idea:</strong> dp[x]=min over coins of dp[x-c]+1; dp[0]=0.<br/><strong>Complexity:</strong> O(amount · k).',
          example: {
            title: 'Python Solution',
            code: `def coinChange(coins, amount):
    INF = amount + 1
    dp = [0] + [INF] * amount
    for x in range(1, amount + 1):
        for c in coins:
            if c <= x:
                dp[x] = min(dp[x], dp[x - c] + 1)
    return -1 if dp[amount] == INF else dp[amount]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Longest Common Subsequence (LeetCode 1143, Medium)',
          text: '<strong>Problem:</strong> Length of LCS of two strings.<br/><strong>Key idea:</strong> match → diagonal+1; else max(up, left).<br/><strong>Complexity:</strong> O(n · m).',
          example: {
            title: 'Python Solution',
            code: `def longestCommonSubsequence(s, t):
    n, m = len(s), len(t)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s[i-1] == t[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[n][m]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Edit Distance (LeetCode 72, Medium)',
          text: '<strong>Problem:</strong> Min insert/delete/replace to turn word1 into word2.<br/><strong>Key idea:</strong> if equal take diagonal; else 1+min(insert, delete, replace).<br/><strong>Complexity:</strong> O(n · m).',
          example: {
            title: 'Python Solution',
            code: `def minDistance(s, t):
    n, m = len(s), len(t)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(n + 1): dp[i][0] = i
    for j in range(m + 1): dp[0][j] = j
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s[i-1] == t[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[n][m]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Unique Paths (LeetCode 62, Medium)',
          text: '<strong>Problem:</strong> Paths in m×n grid, only right/down.<br/><strong>Key idea:</strong> dp[i][j]=dp[i-1][j]+dp[i][j-1]; first row/col = 1.<br/><strong>Complexity:</strong> O(m · n), space O(n) possible.',
          example: {
            title: 'Python Solution',
            code: `def uniquePaths(m, n):
    dp = [1] * n
    for _ in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j - 1]
    return dp[-1]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: House Robber (LeetCode 198, Medium)',
          text: '<strong>Problem:</strong> Max sum with no two adjacent.<br/><strong>Key idea:</strong> dp[i]=max(dp[i-1], dp[i-2]+nums[i]).<br/><strong>Complexity:</strong> O(n)/O(1).',
          example: {
            title: 'Python Solution',
            code: `def rob(nums):
    prev2 = prev1 = 0
    for x in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + x)
    return prev1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Partition Equal Subset Sum (LeetCode 416, Medium)',
          text: '<strong>Problem:</strong> Can array be split into two subsets with equal sum?<br/><strong>Key idea:</strong> 0/1 knapsack boolean: can we form sum/2?<br/><strong>Complexity:</strong> O(n · sum).',
          example: {
            title: 'Python Solution',
            code: `def canPartition(nums):
    total = sum(nums)
    if total % 2: return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for x in nums:
        for s in range(target, x - 1, -1):
            dp[s] = dp[s] or dp[s - x]
    return dp[target]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Longest Increasing Subsequence (LeetCode 300, Medium)',
          text: '<strong>Problem:</strong> Length of LIS.<br/><strong>Key idea (O(n²) DP):</strong> dp[i]=1+max(dp[j] for j&lt;i if nums[j]&lt;nums[i]). Binary search patience sorting is O(n log n) follow-up.<br/><strong>Complexity:</strong> O(n²) classic DP.',
          example: {
            title: 'Python Solution',
            code: `def lengthOfLIS(nums):
    n = len(nums)
    dp = [1] * n
    for i in range(n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp) if dp else 0`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'advanced-graphs': {
      title: 'Dijkstra, TopSort & Union-Find',
      subtitle: 'Shortest paths, DAG ordering, and connected components — three graph pillars',
      sections: [
        {
          heading: 'What Are Advanced Graph Algorithms?',
          text: 'Beyond BFS/DFS, interviews expect three power tools: <strong>Dijkstra</strong> for weighted shortest paths, <strong>topological sort</strong> for ordering tasks with prerequisites, and <strong>Union-Find (DSU)</strong> for dynamic connectivity. Master when to reach for each and you cover a huge fraction of medium/hard graph questions.',
          list: [
            '<strong>Dijkstra:</strong> Non-negative edge weights → single-source shortest paths.',
            '<strong>Topological sort:</strong> Directed acyclic graphs → linear order respecting edges u→v (u before v).',
            '<strong>Union-Find:</strong> Maintain disjoint sets under Union and Find — cycle detection in undirected graphs, Kruskal MST, accounts merging.',
            '<strong>Prerequisites:</strong> Adjacency lists, BFS vs DFS intuition, min-heaps for Dijkstra.',
            '<strong>Failure modes:</strong> Dijkstra fails on negative edges; TopSort fails if a cycle exists; Union-Find needs path compression + union by rank for speed.'
          ]
        },
        {
          heading: 'Components Shared by Graph Algorithms',
          list: [
            '<strong>Vertices (nodes):</strong> Entities — cities, courses, network hosts, people.',
            '<strong>Edges:</strong> Directed or undirected, unweighted or weighted.',
            '<strong>Adjacency list:</strong> Map node → list of (neighbor, weight) — sparse-graph default.',
            '<strong>State arrays:</strong> dist[], visited[], indegree[], parent[] — algorithm-specific bookkeeping.',
            '<strong>Worklist:</strong> Priority queue (Dijkstra), queue (Kahn TopSort), or recursive stack (DFS TopSort).'
          ]
        },
        {
          heading: `What is Dijkstra's Algorithm?`,
          text: 'Dijkstra finds the shortest path from a source to every other node when <strong>all edge weights are ≥ 0</strong>. It always expands the unsettled node with the smallest tentative distance — a greedy choice that is safe precisely because weights are non-negative.',
          list: [
            '<strong>dist[v]:</strong> Best known distance from source to v; start with 0 at source and ∞ elsewhere.',
            '<strong>Min-heap:</strong> Pops the closest unsettled node in O(log V).',
            '<strong>Relaxation:</strong> For edge u→v with weight w, if dist[u]+w &lt; dist[v], update dist[v] and push (dist[v], v).',
            '<strong>Not BFS:</strong> BFS is shortest only for unit weights; Dijkstra generalizes to positive weights.',
            '<strong>Negative edges:</strong> Use Bellman-Ford instead — Dijkstra can return wrong answers.'
          ]
        },
        {
          heading: 'Dijkstra Walkthrough',
          diagram: {
            caption: 'Source A; edges with weights — settle closest node each time',
            chart: `flowchart LR
    A["A dist0"] -->|2| B["B"]
    A -->|5| C["C"]
    B -->|1| C
    B -->|3| D["D"]
    C -->|1| D
    style A fill:#2ecc71,color:#fff`
          }
        },
        {
          text: '<strong>Trace:</strong> Start dist A=0. Pop A; relax B→2, C→5. Pop B (2); relax C→min(5,2+1)=3, D→5. Pop C (3); relax D→min(5,3+1)=4. Pop D (4). Final: A0 B2 C3 D4.'
        },
        {
          heading: 'Dijkstra Operations',
          text: 'Treat each step as an operation you can implement and test alone.'
        },
        {
          heading: 'Operation: Build Weighted Adjacency List',
          text: 'Store outgoing edges as (neighbor, weight) pairs. Undirected graphs add both directions.',
          code: `from collections import defaultdict
graph = defaultdict(list)
for u, v, w in edges:
    graph[u].append((v, w))
    graph[v].append((u, w))  # if undirected`,
          language: 'python'
        },
        {
          heading: 'Operation: Relax Edges from u',
          text: 'For each neighbor v, improve dist[v] when dist[u] + w is better; push the improved pair onto the heap. Multiple heap entries for the same node are OK — skip stale ones when popping if d &gt; dist[node].'
        },
        {
          heading: 'Operation: Extract Answer',
          text: 'After the loop, dist[t] is the shortest path length to t (or ∞ / -1 if unreachable). Reconstruct path via parent[] if required.'
        },
        {
          heading: 'What is Topological Sort?',
          text: 'A topological order of a directed graph is a linear ordering of vertices such that for every edge u→v, u appears before v. It exists <strong>if and only if</strong> the graph is a DAG (directed acyclic graph). Classic uses: course schedules, build systems, spreadsheet formula evaluation.',
          list: [
            `<strong>Kahn's algorithm:</strong> BFS using indegrees — repeatedly take nodes with indegree 0.`,
            '<strong>DFS algorithm:</strong> Finish times — append node after exploring all descendants, then reverse.',
            '<strong>Cycle detection:</strong> If Kahn processes fewer than V nodes, a cycle exists.',
            '<strong>Not unique:</strong> Many valid orders may exist; any one is usually enough unless the problem asks for lexicographically smallest.'
          ]
        },
        {
          heading: 'Kahn TopSort Walkthrough',
          diagram: {
            caption: 'Edges: 0→1, 0→2, 1→3, 2→3 — order starts with 0',
            chart: `flowchart LR
    N0["0 indeg0"] --> N1["1"]
    N0 --> N2["2"]
    N1 --> N3["3"]
    N2 --> N3
    style N0 fill:#2ecc71,color:#fff
    style N3 fill:#3498db,color:#fff`
          }
        },
        {
          text: 'Queue starts with [0]. Emit 0; decrement indegree of 1 and 2 → both 0 → enqueue. Emit 1 then 2 (order among them flexible); both decrement 3. Emit 3. Order example: 0,1,2,3.'
        },
        {
          heading: 'TopSort Operations',
          list: [
            '<strong>Compute indegrees:</strong> One pass over edges; indegree[v]++ for each u→v.',
            '<strong>Seed queue:</strong> All nodes with indegree 0 (sources).',
            '<strong>Process:</strong> Pop u, append to order; for each neighbor, indegree-- and enqueue if 0.',
            '<strong>Validate:</strong> len(order) == V, else cycle → return empty / error.'
          ]
        },
        {
          heading: 'What is Union-Find (DSU)?',
          text: `Disjoint Set Union maintains a partition of elements into disjoint sets. <strong>Find(x)</strong> returns the representative (root) of x's set. <strong>Union(x,y)</strong> merges the sets containing x and y. With path compression and union by rank/size, both operations are effectively amortized O(α(n)) — inverse Ackermann, practically constant.`,
          list: [
            '<strong>Parent array:</strong> parent[i] points toward the root; root has parent[i]=i.',
            '<strong>Path compression:</strong> On Find, point every node on the path directly to the root.',
            '<strong>Union by rank/size:</strong> Attach the smaller tree under the larger to keep trees shallow.',
            '<strong>Use cases:</strong> Detect undirected cycles, Kruskal MST, number of provinces, accounts merge, redundant connection.'
          ]
        },
        {
          heading: 'Union-Find Visualization',
          diagram: {
            caption: 'Union(1,2), Union(3,4), Union(2,3) → one component',
            chart: `flowchart TB
    subgraph Before["After first two unions"]
      R1["root1"] --> A1["1"]
      R1 --> A2["2"]
      R3["root3"] --> A3["3"]
      R3 --> A4["4"]
    end
    subgraph After["After Union(2,3)"]
      R["root"] --> B1["1"]
      R --> B2["2"]
      R --> B3["3"]
      R --> B4["4"]
    end
    Before ~~~ After
    style R fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Advantages of These Algorithms',
          list: [
            '<strong>Dijkstra:</strong> Optimal for non-negative weighted shortest paths; binary heap O((V+E) log V).',
            '<strong>TopSort:</strong> Linear O(V+E); simultaneously detects cycles in directed graphs.',
            '<strong>Union-Find:</strong> Near O(1) connectivity queries online as edges arrive.',
            '<strong>Composable:</strong> Kruskal = sort edges + Union-Find; course schedule = TopSort; network delay = Dijkstra.'
          ]
        },
        {
          heading: 'Disadvantages & Pitfalls',
          list: [
            '<strong>Dijkstra + negatives:</strong> Incorrect — use Bellman-Ford / SPFA carefully.',
            '<strong>Dense graphs:</strong> Fibonacci heap theory rarely helps; practical binary heap is standard.',
            '<strong>TopSort on cyclic graphs:</strong> Must handle "impossible" explicitly.',
            '<strong>Union-Find without optimizations:</strong> Degenerates to O(n) chains.',
            '<strong>1-index vs 0-index:</strong> Off-by-one on node labels is a common WA source.'
          ]
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Dijkstra, Kahn TopSort & Union-Find',
            code: `import heapq
from collections import defaultdict, deque
from typing import List, Dict, Tuple

def dijkstra(n: int, edges: List[Tuple[int, int, int]], src: int) -> List[float]:
    graph = defaultdict(list)
    for u, v, w in edges:
        graph[u].append((v, w))
    dist = [float('inf')] * n
    dist[src] = 0
    heap = [(0, src)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue
        for v, w in graph[u]:
            nd = d + w
            if nd < dist[v]:
                dist[v] = nd
                heapq.heappush(heap, (nd, v))
    return dist

def topo_sort(n: int, edges: List[Tuple[int, int]]) -> List[int]:
    graph = defaultdict(list)
    indeg = [0] * n
    for u, v in edges:
        graph[u].append(v)
        indeg[v] += 1
    q = deque([i for i in range(n) if indeg[i] == 0])
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else []  # empty ⇒ cycle

class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x: int) -> int:
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # path compression
            x = self.parent[x]
        return x

    def union(self, a: int, b: int) -> bool:
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False  # already connected — cycle if used on undirected edge
        if self.rank[ra] < self.rank[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        if self.rank[ra] == self.rank[rb]:
            self.rank[ra] += 1
        self.components -= 1
        return True

# Demo
print(dijkstra(4, [(0,1,2),(0,2,5),(1,2,1),(1,3,3),(2,3,1)], 0))
print(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))
uf = UnionFind(5)
uf.union(0, 1); uf.union(1, 2); uf.union(3, 4)
print(uf.components, uf.find(0) == uf.find(2))`,
            output: `[0, 2, 3, 4]
[0, 1, 2, 3]
2 True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Dijkstra, Kahn & Union-Find in Java',
            code: `import java.util.*;

public class GraphAlgos {
    static int[] dijkstra(int n, int[][] edges, int src) {
        List<int[]>[] g = new ArrayList[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (int[] e : edges) g[e[0]].add(new int[]{e[1], e[2]});
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE / 4);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, src});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int d = cur[0], u = cur[1];
            if (d > dist[u]) continue;
            for (int[] e : g[u]) {
                int v = e[0], w = e[1];
                if (d + w < dist[v]) {
                    dist[v] = d + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
        return dist;
    }

    static List<Integer> topoSort(int n, int[][] edges) {
        List<Integer>[] g = new ArrayList[n];
        int[] indeg = new int[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (int[] e : edges) { g[e[0]].add(e[1]); indeg[e[1]]++; }
        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);
        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll(); order.add(u);
            for (int v : g[u]) if (--indeg[v] == 0) q.offer(v);
        }
        return order.size() == n ? order : List.of();
    }

    static class UF {
        int[] p, r; int comp;
        UF(int n) { p = new int[n]; r = new int[n]; comp = n;
            for (int i = 0; i < n; i++) p[i] = i; }
        int find(int x) {
            if (p[x] != x) p[x] = find(p[x]);
            return p[x];
        }
        boolean union(int a, int b) {
            int ra = find(a), rb = find(b);
            if (ra == rb) return false;
            if (r[ra] < r[rb]) { int t = ra; ra = rb; rb = t; }
            p[rb] = ra; if (r[ra] == r[rb]) r[ra]++; comp--; return true;
        }
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            dijkstra(4, new int[][]{{0,1,2},{0,2,5},{1,2,1},{1,3,3},{2,3,1}}, 0)));
        System.out.println(topoSort(4, new int[][]{{0,1},{0,2},{1,3},{2,3}}));
        UF uf = new UF(5); uf.union(0,1); uf.union(1,2); uf.union(3,4);
        System.out.println(uf.comp + " " + (uf.find(0) == uf.find(2)));
    }
}`,
            output: `[0, 2, 3, 4]
[0, 1, 2, 3]
2 true`,
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
                'Dijkstra (binary heap)',
                'O((V+E) log V)',
                'O(V+E)',
                'Non-negative weights only'
              ],
              [
                'Dijkstra (array scan)',
                'O(V²)',
                'O(V+E)',
                'Dense graphs / small V'
              ],
              [
                'Bellman-Ford',
                'O(V·E)',
                'O(V)',
                'Handles negatives; detects neg cycles'
              ],
              [
                'Kahn TopSort',
                'O(V+E)',
                'O(V+E)',
                'Empty order ⇒ cycle'
              ],
              [
                'DFS TopSort',
                'O(V+E)',
                'O(V+E)',
                'Post-order then reverse'
              ],
              [
                'Union-Find α',
                '≈ O(1) amort.',
                'O(V)',
                'Path compression + rank'
              ],
              [
                'Kruskal MST',
                'O(E log E)',
                'O(V)',
                'Sort edges + DSU'
              ]
            ]
          },
          note: 'Interview tip: say why Dijkstra is safe (non-negative → first time a node is settled, dist is final). That one sentence separates memorization from understanding.'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Using Dijkstra with negative weights</strong> — silently wrong answers.',
            '<strong>Not skipping stale heap entries</strong> — still correct if you check d &gt; dist[u], but infinite loops if you mark visited too early with decrease-key alternatives.',
            '<strong>Forgetting bidirectional edges</strong> on undirected inputs.',
            '<strong>TopSort: not checking len(order)==n</strong> — miss cycle detection.',
            '<strong>Union-Find: union without find</strong> — must union roots, not raw ids.',
            '<strong>1-based problems with 0-based arrays</strong> — classic off-by-one.'
          ],
          code: `# WRONG — mark visited when pushing (can miss shorter path with binary heap)
visited.add(v); heapq.heappush(heap, (nd, v))

# CORRECT — allow multiple entries; skip when popping if stale
if d > dist[u]:
    continue

# WRONG Union-Find
parent[a] = b  # may not attach roots
# CORRECT
parent[find(a)] = find(b)`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Navigation / maps:</strong> Dijkstra and A* power driving directions (non-negative travel times).',
            '<strong>Network routing:</strong> OSPF-like shortest path ideas; latency-weighted graphs.',
            '<strong>Build systems (Make, Bazel):</strong> Topological order of compilation units.',
            '<strong>Course / curriculum planners:</strong> Prerequisite graphs → TopSort; cycle = impossible plan.',
            '<strong>Social networks / clustering:</strong> Union-Find merges communities as edges arrive.',
            '<strong>Image segmentation / Kruskal:</strong> MST-based clustering uses DSU under the hood.',
            '<strong>Game pathfinding:</strong> Grid graphs with terrain costs → Dijkstra / A*.'
          ]
        },
        {
          heading: 'Top Interview Questions',
          text: 'Eight problems that force you to pick the right tool among Dijkstra, TopSort, and Union-Find.',
          note: 'Pattern: weighted shortest → Dijkstra; prerequisites / order → TopSort; connectivity / cycle undirected / components → Union-Find (or BFS/DFS).'
        },
        {
          heading: 'Practice Question 1: Network Delay Time (LeetCode 743, Medium)',
          text: '<strong>Problem:</strong> Weighted directed graph; time for signal from k to reach all nodes.<br/><strong>Key idea:</strong> Dijkstra from k; answer is max dist if all finite else -1.<br/><strong>Complexity:</strong> O((V+E) log V).',
          example: {
            title: 'Python Solution',
            code: `import heapq
from collections import defaultdict
def networkDelayTime(times, n, k):
    g = defaultdict(list)
    for u, v, w in times: g[u].append((v, w))
    dist = {i: float('inf') for i in range(1, n + 1)}
    dist[k] = 0
    h = [(0, k)]
    while h:
        d, u = heapq.heappop(h)
        if d > dist[u]: continue
        for v, w in g[u]:
            if d + w < dist[v]:
                dist[v] = d + w
                heapq.heappush(h, (dist[v], v))
    ans = max(dist.values())
    return -1 if ans == float('inf') else ans`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Course Schedule (LeetCode 207, Medium)',
          text: '<strong>Problem:</strong> Can you finish all courses given prerequisites?<br/><strong>Key idea:</strong> TopSort / cycle detect on directed graph; Kahn count == n.<br/><strong>Complexity:</strong> O(V+E).',
          example: {
            title: 'Python Solution',
            code: `from collections import deque, defaultdict
def canFinish(numCourses, prerequisites):
    g = defaultdict(list)
    indeg = [0] * numCourses
    for a, b in prerequisites:
        g[b].append(a); indeg[a] += 1
    q = deque([i for i in range(numCourses) if indeg[i] == 0])
    seen = 0
    while q:
        u = q.popleft(); seen += 1
        for v in g[u]:
            indeg[v] -= 1
            if indeg[v] == 0: q.append(v)
    return seen == numCourses`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Course Schedule II (LeetCode 210, Medium)',
          text: '<strong>Problem:</strong> Return a valid course order (any topological order).<br/><strong>Key idea:</strong> Same Kahn as Q2 but record the order list.<br/><strong>Complexity:</strong> O(V+E).',
          example: {
            title: 'Python Solution',
            code: `from collections import deque, defaultdict
def findOrder(n, prerequisites):
    g = defaultdict(list)
    indeg = [0] * n
    for a, b in prerequisites:
        g[b].append(a); indeg[a] += 1
    q = deque([i for i in range(n) if indeg[i] == 0])
    order = []
    while q:
        u = q.popleft(); order.append(u)
        for v in g[u]:
            indeg[v] -= 1
            if indeg[v] == 0: q.append(v)
    return order if len(order) == n else []`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Number of Provinces (LeetCode 547, Medium)',
          text: '<strong>Problem:</strong> Connected components in undirected adjacency matrix.<br/><strong>Key idea:</strong> Union all connected pairs; answer = components count.<br/><strong>Complexity:</strong> O(n² α(n)).',
          example: {
            title: 'Python Solution',
            code: `def findCircleNum(isConnected):
    n = len(isConnected)
    p = list(range(n))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb: p[rb] = ra
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j]:
                union(i, j)
    return len({find(i) for i in range(n)})`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Redundant Connection (LeetCode 684, Medium)',
          text: '<strong>Problem:</strong> Undirected graph with one extra edge forming a cycle; return that edge.<br/><strong>Key idea:</strong> Union edges in order; first edge whose ends share a root is redundant.<br/><strong>Complexity:</strong> O(n α(n)).',
          example: {
            title: 'Python Solution',
            code: `def findRedundantConnection(edges):
    p = list(range(len(edges) + 1))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    for u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv: return [u, v]
        p[rv] = ru
    return []`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Cheapest Flights Within K Stops (LeetCode 787, Medium)',
          text: '<strong>Problem:</strong> Cheapest price from src to dst with at most k stops.<br/><strong>Key idea:</strong> Bellman-Ford style relax for k+1 rounds (or Dijkstra with state (city, stops)). Negative not present but hop limit breaks plain Dijkstra state.<br/><strong>Complexity:</strong> O(k · E) Bellman-style.',
          example: {
            title: 'Python Solution',
            code: `def findCheapestPrice(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):
        nd = dist[:]
        for u, v, w in flights:
            if dist[u] + w < nd[v]:
                nd[v] = dist[u] + w
        dist = nd
    return -1 if dist[dst] == float('inf') else dist[dst]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Min Cost to Connect All Points (LeetCode 1584, Medium)',
          text: '<strong>Problem:</strong> MST on complete graph of points with Manhattan distance.<br/><strong>Key idea:</strong> Kruskal: all pairs as edges, sort, Union-Find until n-1 unions; or Prim.<br/><strong>Complexity:</strong> O(n² log n) Kruskal on dense edges.',
          example: {
            title: 'Python Solution',
            code: `def minCostConnectPoints(points):
    n = len(points)
    edges = []
    for i in range(n):
        for j in range(i + 1, n):
            d = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])
            edges.append((d, i, j))
    edges.sort()
    p = list(range(n))
    def find(x):
        while p[x] != x:
            p[x] = p[p[x]]; x = p[x]
        return x
    cost = used = 0
    for d, u, v in edges:
        ru, rv = find(u), find(v)
        if ru == rv: continue
        p[rv] = ru; cost += d; used += 1
        if used == n - 1: break
    return cost`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Path With Minimum Effort (LeetCode 1631, Medium)',
          text: '<strong>Problem:</strong> Path minimizing the max absolute height difference of consecutive cells.<br/><strong>Key idea:</strong> Dijkstra where "distance" is the max edge effort along the path (not sum).<br/><strong>Complexity:</strong> O(mn log(mn)).',
          example: {
            title: 'Python Solution',
            code: `import heapq
def minimumEffortPath(heights):
    m, n = len(heights), len(heights[0])
    dist = [[float('inf')] * n for _ in range(m)]
    dist[0][0] = 0
    h = [(0, 0, 0)]
    while h:
        d, r, c = heapq.heappop(h)
        if (r, c) == (m - 1, n - 1): return d
        if d > dist[r][c]: continue
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n:
                nd = max(d, abs(heights[nr][nc] - heights[r][c]))
                if nd < dist[nr][nc]:
                    dist[nr][nc] = nd
                    heapq.heappush(h, (nd, nr, nc))
    return 0`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'string-algos': {
      title: 'Advanced String Algorithms',
      subtitle: 'KMP, Rabin-Karp, and pattern matching beyond the naive scan',
      sections: [
        {
          heading: 'What Are Advanced String Algorithms?',
          text: 'Naive substring search checks the pattern at every text position and can take O(n · m) time. Advanced algorithms preprocess the pattern (or use rolling hashes) to skip redundant comparisons and reach <strong>O(n + m)</strong> matching. Interviews focus on <strong>KMP</strong> (prefix table / LPS) and <strong>Rabin-Karp</strong> (rolling hash), with Z-algorithm and tries as strong follow-ups.',
          list: [
            '<strong>Pattern matching:</strong> Find all occurrences of pattern P inside text T.',
            '<strong>KMP:</strong> Automaton-like search using the longest proper prefix that is also a suffix (LPS).',
            '<strong>Rabin-Karp:</strong> Compare rolling hashes in O(1); verify on hash hits to handle collisions.',
            `<strong>Why it matters:</strong> Grep, plagiarism checks, DNA motif search, intrusion detection, editors' find-next.`,
            '<strong>Related tools:</strong> Z-array, Aho-Corasick (multi-pattern), suffix arrays/trees (advanced).'
          ]
        },
        {
          heading: 'Components of Pattern Matching',
          list: [
            '<strong>Text T:</strong> Length n — the haystack.',
            '<strong>Pattern P:</strong> Length m — the needle.',
            '<strong>Window:</strong> Alignment of P against a substring of T of length m.',
            '<strong>Preprocessing:</strong> LPS array (KMP) or pattern hash + power (Rabin-Karp).',
            '<strong>Shift rule:</strong> How far to move the window after a mismatch or full match.'
          ]
        },
        {
          heading: 'Naive Search (Baseline)',
          text: 'For each start i in 0..n-m, compare T[i..i+m) to P character by character. Simple and fine for tiny m, but worst case O(n · m) (e.g. T=aaa…a, P=aa…ab).',
          diagram: {
            caption: 'Naive: after mismatch, shift by only 1',
            chart: `flowchart LR
    T["T: a a a a b"]
    P1["P@0: a a b ✗"]
    P2["P@1: a a b ✗"]
    P3["P@2: a a b"]
    T --> P1 --> P2 --> P3
    style P1 fill:#e74c3c,color:#fff`
          }
        },
        {
          heading: 'What is KMP?',
          text: 'Knuth–Morris–Pratt never re-compares characters it already knows match. After a mismatch at pattern index j, it shifts using <strong>lps[j-1]</strong> — the length of the longest proper prefix of P[0..j-1] that is also a suffix of that segment — so the already-matched prefix lines up with a possible continuation.',
          list: [
            '<strong>LPS / pi array:</strong> lps[i] = longest proper prefix of P[0..i] that is also a suffix of P[0..i].',
            '<strong>Proper:</strong> Not the whole string — so lps values are &lt; i+1.',
            '<strong>Search phase:</strong> Two pointers i (text) and j (pattern); on match both advance; on mismatch j = lps[j-1] (or i++ if j==0).',
            '<strong>Time:</strong> O(n + m) total — each pointer only moves forward overall.',
            '<strong>Space:</strong> O(m) for the LPS array.'
          ]
        },
        {
          heading: 'Building the LPS Array',
          text: 'LPS is itself computed with a two-pointer scan that mirrors the search logic.',
          diagram: {
            caption: 'P = "aabaaab" — sample LPS values',
            chart: `flowchart LR
    I0["0: a → 0"] --> I1["1: a → 1"]
    I1 --> I2["2: b → 0"]
    I2 --> I3["3: a → 1"]
    I3 --> I4["4: a → 2"]
    I4 --> I5["5: a → 2"]
    I5 --> I6["6: b → 3"]
    style I1 fill:#3498db,color:#fff
    style I6 fill:#2ecc71,color:#fff`
          }
        },
        {
          text: '<strong>Algorithm:</strong> len = 0, i = 1. While i &lt; m: if P[i]==P[len], len++, lps[i]=len, i++. Else if len&gt;0, len=lps[len-1]; else lps[i]=0, i++. This is O(m).'
        },
        {
          heading: 'KMP Search Visualization',
          diagram: {
            caption: 'Mismatch uses LPS to shift pattern without moving text back',
            chart: `flowchart TD
    M["Match run j increases"] --> X{"Mismatch at j?"}
    X -->|j>0| S["j = lps[j-1] — slide pattern"]
    X -->|j==0| A["i += 1"]
    S --> M
    A --> M
    M --> F{"j == m?"}
    F -->|yes| H["Record hit at i-m; j = lps[j-1]"]
    style H fill:#2ecc71,color:#fff
    style S fill:#f1c40f,color:#000`
          }
        },
        {
          heading: 'What is Rabin-Karp?',
          text: 'Rabin-Karp compares a <strong>rolling hash</strong> of the current text window to the pattern hash. Sliding the window updates the hash in O(1) by removing the leaving character and adding the entering character (modular arithmetic). On hash equality, verify characters to guard against collisions.',
          list: [
            '<strong>Polynomial hash:</strong> h = (c0·b^{m-1} + c1·b^{m-2} + … + c_{m-1}) mod p.',
            '<strong>Roll:</strong> h = (h - c_old·b^{m-1}) · b + c_new (mod p).',
            '<strong>Average O(n+m)</strong> with a good modulus; worst O(n·m) if many collisions (rare with large prime / double hash).',
            '<strong>Multi-pattern:</strong> Can check a set of pattern hashes (bloom-like) — useful variant.',
            '<strong>Interview tip:</strong> Mention collision handling — never trust hash alone in correctness-critical code.'
          ]
        },
        {
          heading: 'Rolling Hash Diagram',
          diagram: {
            caption: 'Window slides right: drop left char, append right char',
            chart: `flowchart LR
    W1["[a b c] hash H1"] --> W2["[b c d] hash H2"]
    W1 -.->|remove a, add d| W2
    style W2 fill:#3498db,color:#fff`
          }
        },
        {
          heading: 'Types of String Matching Tools',
          text: 'Pick the tool for the job.'
        },
        {
          heading: 'KMP',
          text: 'Best when you need guaranteed linear time and deterministic comparisons. Great for single pattern, streaming text, and explaining automata thinking.'
        },
        {
          heading: 'Rabin-Karp',
          text: 'Elegant for teaching hashes; practical for multi-pattern and plagiarism-style fingerprinting. Watch collisions.'
        },
        {
          heading: 'Z-Algorithm',
          text: 'Z[i] = longest substring starting at i that matches a prefix of the string. Build Z for P + "#" + T to find matches in O(n+m). Same complexity class as KMP; different view.'
        },
        {
          heading: 'Trie / Aho-Corasick',
          text: 'Trie for prefix dictionary ops; Aho-Corasick adds failure links for multi-pattern search in O(n + total hits + patterns size).'
        },
        {
          heading: 'Advantages',
          list: [
            '<strong>Linear time guarantees (KMP/Z):</strong> No quadratic surprise on adversarial strings.',
            '<strong>Streaming friendly:</strong> Process text left to right with O(m) memory.',
            '<strong>Foundation for compilers / search:</strong> Lexers and find-in-file tools use these ideas.',
            '<strong>Hash techniques transfer:</strong> Rolling hashes appear in string DP, palindromes, and duplicate substring problems.'
          ]
        },
        {
          heading: 'Disadvantages',
          list: [
            '<strong>Implementation detail heavy:</strong> LPS off-by-ones are common in interviews under time pressure.',
            '<strong>Rabin-Karp collisions:</strong> Must verify or use double hashing.',
            '<strong>Constant factors:</strong> For short patterns, naive or library find may win in practice.',
            '<strong>Unicode complexity:</strong> Real text may need grapheme-aware handling beyond byte/char indexes.',
            '<strong>Overkill for small n:</strong> Interviewers still want the algorithm; production may use std::string::find.'
          ]
        },
        {
          heading: 'Core Operations',
          text: 'Four operations you should be able to code cold.'
        },
        {
          heading: 'Operation 1: Build LPS',
          text: '<strong>What it does:</strong> Preprocess pattern for KMP.<br/><strong>Best efficiency:</strong> O(m) time, O(m) space.',
          code: `def build_lps(p):
    m, lps, length, i = len(p), [0] * len(p), 0, 1
    while i < m:
        if p[i] == p[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps`,
          language: 'python'
        },
        {
          heading: 'Operation 2: KMP Search',
          text: '<strong>What it does:</strong> Return all start indices of P in T.<br/><strong>Best efficiency:</strong> O(n + m).'
        },
        {
          heading: 'Operation 3: Rolling Hash Update',
          text: '<strong>What it does:</strong> Slide window hash in O(1).<br/><strong>Best efficiency:</strong> O(n) to scan text after O(m) pattern hash.'
        },
        {
          heading: 'Operation 4: Verify on Hash Match',
          text: '<strong>What it does:</strong> Compare characters when hashes equal to eliminate false positives.<br/><strong>Best efficiency:</strong> O(m) only on candidate hits.'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'KMP (full LPS + search) & Rabin-Karp (rolling hash)',
            code: `from typing import List

def build_lps(pattern: str) -> List[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps

def kmp_search(text: str, pattern: str) -> List[int]:
    if not pattern:
        return list(range(len(text) + 1))
    lps = build_lps(pattern)
    i = j = 0
    hits = []
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                hits.append(i - j)
                j = lps[j - 1]
        elif j:
            j = lps[j - 1]
        else:
            i += 1
    return hits

def rabin_karp(text: str, pattern: str, base: int = 256, mod: int = 1_000_000_007) -> List[int]:
    n, m = len(text), len(pattern)
    if m == 0 or m > n:
        return [] if m else list(range(n + 1))
    power = pow(base, m - 1, mod)
    ph = th = 0
    for i in range(m):
        ph = (ph * base + ord(pattern[i])) % mod
        th = (th * base + ord(text[i])) % mod
    hits = []
    for i in range(n - m + 1):
        if ph == th and text[i:i + m] == pattern:
            hits.append(i)
        if i < n - m:
            th = (th - ord(text[i]) * power) % mod
            th = (th * base + ord(text[i + m])) % mod
            th %= mod
    return hits

print(build_lps("aabaaac"))
print(kmp_search("ababcababa", "ababa"))
print(rabin_karp("aaaaa", "aa"))`,
            output: `[0, 1, 0, 1, 2, 2, 0]
[5]
[0, 1, 2, 3]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'KMP & Rabin-Karp in Java',
            code: `import java.util.*;

public class StringAlgos {
    static int[] buildLps(String p) {
        int m = p.length(), len = 0, i = 1;
        int[] lps = new int[m];
        while (i < m) {
            if (p.charAt(i) == p.charAt(len)) lps[i++] = ++len;
            else if (len > 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
        return lps;
    }

    static List<Integer> kmp(String t, String p) {
        List<Integer> hits = new ArrayList<>();
        if (p.isEmpty()) return hits;
        int[] lps = buildLps(p);
        int i = 0, j = 0;
        while (i < t.length()) {
            if (t.charAt(i) == p.charAt(j)) { i++; j++;
                if (j == p.length()) { hits.add(i - j); j = lps[j - 1]; }
            } else if (j > 0) j = lps[j - 1];
            else i++;
        }
        return hits;
    }

    static List<Integer> rabinKarp(String t, String p) {
        List<Integer> hits = new ArrayList<>();
        int n = t.length(), m = p.length();
        if (m == 0 || m > n) return hits;
        long base = 256, mod = 1_000_000_007L, power = 1, ph = 0, th = 0;
        for (int i = 0; i < m - 1; i++) power = (power * base) % mod;
        for (int i = 0; i < m; i++) {
            ph = (ph * base + p.charAt(i)) % mod;
            th = (th * base + t.charAt(i)) % mod;
        }
        for (int i = 0; i <= n - m; i++) {
            if (ph == th && t.regionMatches(i, p, 0, m)) hits.add(i);
            if (i < n - m) {
                th = (th - t.charAt(i) * power % mod + mod) % mod;
                th = (th * base + t.charAt(i + m)) % mod;
            }
        }
        return hits;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(buildLps("aabaaac")));
        System.out.println(kmp("ababcababa", "ababa"));
        System.out.println(rabinKarp("aaaaa", "aa"));
    }
}`,
            output: `[0, 1, 0, 1, 2, 2, 0]
[5]
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
              'Preprocess',
              'Search',
              'Space',
              'Notes'
            ],
            rows: [
              [
                'Naive',
                'O(1)',
                'O(n · m)',
                'O(1)',
                'Fine for tiny m'
              ],
              [
                'KMP',
                'O(m)',
                'O(n)',
                'O(m)',
                'Worst-case linear'
              ],
              [
                'Rabin-Karp',
                'O(m)',
                'O(n) avg',
                'O(1)',
                'O(n·m) if many collisions'
              ],
              [
                'Z-algorithm',
                'O(n+m)',
                'included',
                'O(n+m)',
                'Via concat P+# +T'
              ],
              [
                'Aho-Corasick',
                'O(sum |Pi|)',
                'O(n + hits)',
                'O(sum |Pi|)',
                'Multi-pattern'
              ],
              [
                'Python str.find',
                '—',
                'practical fast',
                '—',
                'C-optimized; still know KMP'
              ]
            ]
          },
          note: 'Interview tip: for KMP, prove linearity by arguing i only increases n times and j decreases along LPS but total decreases are bounded — amortized O(n+m).'
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>LPS off-by-one:</strong> On match at end, set j = lps[j-1] to find overlapping occurrences (e.g. "aaa" in "aaaa").',
            '<strong>Negative mod in rolling hash:</strong> Always ((h % mod) + mod) % mod after subtraction.',
            '<strong>Integer overflow:</strong> Use 64-bit / BigInt or modular multiplies carefully in Java.',
            '<strong>Skipping character verification</strong> in Rabin-Karp — correctness requires it (or double hash).',
            '<strong>Empty pattern edge cases</strong> — define behavior explicitly.'
          ],
          code: `# WRONG modular roll
th = (th - ord(text[i]) * power) * base + ord(text[i+m])

# CORRECT
th = (th - ord(text[i]) * power) % mod
th = (th * base + ord(text[i + m])) % mod
th %= mod  # keep non-negative

# KMP: after full match, do NOT reset j to 0 if overlaps matter
j = lps[j - 1]`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Text editors & IDEs:</strong> Find / replace all uses efficient matching under the hood.',
            '<strong>Intrusion detection:</strong> Multi-pattern signature scan (Aho-Corasick).',
            '<strong>Bioinformatics:</strong> Motif search in DNA/protein sequences — n and m are huge.',
            '<strong>Plagiarism / near-duplicate detection:</strong> Rabin fingerprinting of shingles.',
            '<strong>Network protocols:</strong> Pattern match on packet payloads.',
            '<strong>Compilers:</strong> Lexical analysis related to automata (siblings of KMP thinking).',
            '<strong>Version control diffs:</strong> Hashing blocks of text for similarity.'
          ]
        },
        {
          heading: 'Top Interview Questions on String Algorithms',
          text: 'Eight problems spanning KMP, hashing, and classic string DP that often appear beside these topics.',
          note: 'If the problem is "find pattern", think KMP/RK. If "longest duplicate substring", think binary search + rolling hash. If "edit distance / LCS", think DP tables from the previous topic.'
        },
        {
          heading: 'Practice Question 1: Find the Index of the First Occurrence (LeetCode 28, Easy)',
          text: '<strong>Problem:</strong> Return the first index of needle in haystack (or -1).<br/><strong>Key idea:</strong> KMP search; return first hit.<br/><strong>Complexity:</strong> O(n + m).',
          example: {
            title: 'Python Solution',
            code: `def strStr(haystack, needle):
    hits = kmp_search(haystack, needle)
    return hits[0] if hits else -1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Repeated Substring Pattern (LeetCode 459, Easy)',
          text: '<strong>Problem:</strong> Is s made by repeating a substring?<br/><strong>Key idea:</strong> KMP: if n % (n - lps[-1]) == 0 and lps[-1] > 0. Or check s in (s+s)[1:-1].<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def repeatedSubstringPattern(s):
    n = len(s)
    lps = build_lps(s)
    return lps[-1] > 0 and n % (n - lps[-1]) == 0`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Implement strStr with Rabin-Karp',
          text: '<strong>Problem:</strong> Same as Q1 using rolling hash.<br/><strong>Key idea:</strong> Compare hashes; verify on match.<br/><strong>Complexity:</strong> O(n + m) average.',
          example: {
            title: 'Python Solution',
            code: `def strStrRK(haystack, needle):
    hits = rabin_karp(haystack, needle)
    return hits[0] if hits else -1`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Shortest Palindrome (LeetCode 214, Hard)',
          text: '<strong>Problem:</strong> Add characters in front of s to make it a palindrome; return the shortest.<br/><strong>Key idea:</strong> KMP on s + "#" + reverse(s); lps[-1] is longest palindromic prefix length.<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def shortestPalindrome(s):
    rev = s[::-1]
    lps = build_lps(s + '#' + rev)
    return rev[: len(s) - lps[-1]] + s`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Longest Duplicate Substring (LeetCode 1044, Hard)',
          text: '<strong>Problem:</strong> Longest substring that occurs at least twice.<br/><strong>Key idea:</strong> Binary search length L; Rabin-Karp fingerprint set to test if any duplicate window of length L exists.<br/><strong>Complexity:</strong> O(n log n) average with hashing.',
          example: {
            title: 'Python Solution (sketch)',
            code: `def longestDupSubstring(s):
    n = len(s)
    # binary search on length + rolling hash check
    # return the substring found at the largest feasible L
    ...`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Find All Anagrams in a String (LeetCode 438, Medium)',
          text: `<strong>Problem:</strong> Start indices of p's anagrams in s.<br/><strong>Key idea:</strong> Sliding window counts (not KMP) — fixed window frequency match.<br/><strong>Complexity:</strong> O(n).`,
          example: {
            title: 'Python Solution',
            code: `from collections import Counter
def findAnagrams(s, p):
    need, window = Counter(p), Counter()
    left = 0
    res = []
    for right, ch in enumerate(s):
        window[ch] += 1
        if right - left + 1 > len(p):
            window[s[left]] -= 1
            if window[s[left]] == 0: del window[s[left]]
            left += 1
        if window == need:
            res.append(left)
    return res`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Longest Happy Prefix (LeetCode 1392, Hard)',
          text: '<strong>Problem:</strong> Longest prefix that is also a suffix (proper).<br/><strong>Key idea:</strong> Exactly lps[-1] characters: return s[:lps[-1]].<br/><strong>Complexity:</strong> O(n).',
          example: {
            title: 'Python Solution',
            code: `def longestPrefix(s):
    lps = build_lps(s)
    return s[: lps[-1]]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Repeated String Match (LeetCode 686, Medium)',
          text: '<strong>Problem:</strong> Min times to repeat a so that b is a substring.<br/><strong>Key idea:</strong> Repeat a until length ≥ len(b); check with KMP; try one more repeat for border cases.<br/><strong>Complexity:</strong> O((n+m) · repeats) with KMP.',
          example: {
            title: 'Python Solution',
            code: `def repeatedStringMatch(a, b):
    times = (len(b) + len(a) - 1) // len(a)
    text = a * times
    if kmp_search(text, b): return times
    if kmp_search(text + a, b): return times + 1
    return -1`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
