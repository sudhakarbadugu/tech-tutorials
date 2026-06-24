// DSA Module 4 — enhanced interview-ready content

export const dsaModule4Structure = {
  module4: {
    title: 'Module 4: DP & Graph Algorithms',
    topics: [
      { id: 'recursion-backtracking', title: 'Recursion & Backtracking' },
      { id: 'dp-memoization', title: 'Dynamic Programming (Memoization)' },
      { id: 'dp-tabulation', title: 'Dynamic Programming (Tabulation)' },
      { id: 'advanced-graphs', title: 'Dijkstra, TopSort & Union-Find' },
      { id: 'string-algos', title: 'Advanced String Algorithms' }
    ]
  }
};

export const dsaModule4Content = {
  module4: {
    'recursion-backtracking': {
      title: 'Recursion & Backtracking',
      subtitle: 'Explore every branch, prune what fails',
      sections: [
        {
          heading: 'Core Concepts: Recursion & Backtracking',
          text: 'Recursion solves a problem by reducing it to smaller instances of itself. Backtracking extends recursion by building candidates incrementally and undoing (backtracking) choices that violate constraints. Together they power subset generation, permutations, constraint puzzles, and combinatorial search — staples of medium-to-hard interview problems.',
          list: [
            '<strong>Base case:</strong> The smallest subproblem with a direct answer — without it, recursion never terminates.',
            '<strong>Recursive case:</strong> Decompose the problem, call yourself on a smaller input, combine results.',
            '<strong>Choice:</strong> At each step, decide what to include (pick element, place queen, add coin).',
            '<strong>Constraint:</strong> Prune branches that cannot lead to a valid solution (N-Queens diagonal conflict).',
            '<strong>Undo (backtrack):</strong> Remove the last choice and try the next option — the hallmark of backtracking.',
            '<strong>State space tree:</strong> Every recursive call is a node; edges are choices; leaves are complete or pruned solutions.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Think of backtracking as <em>DFS over an implicit decision tree</em>. You descend by making a choice, explore that branch fully, then return and try the next sibling. The key insight: you only need <strong>O(depth)</strong> extra space for the current path — not to store the entire tree.</p>',
            '<p>The universal template has four phases: <strong>(1)</strong> check if current path is a complete solution → record it; <strong>(2)</strong> iterate over available choices; <strong>(3)</strong> apply choice (push to path); <strong>(4)</strong> recurse, then undo (pop from path). Subsets use a <em>start index</em> to avoid duplicates; permutations use a <em>used array</em>; combination sum allows <em>reusing elements</em> by passing the same start index after picking.</p>',
            '<p>Time complexity is often exponential: subsets produce 2^n results, permutations produce n! results. Space is O(n) for the recursion stack plus O(output) for storing results. Interviewers care that you can <strong>prune early</strong> — e.g., stop combination-sum recursion when the running total exceeds the target.</p>'
          ],
          note: 'Template mantra: choose → explore → unchoose. Every backtracking solution follows this three-step loop inside a for-loop over choices.'
        },
        {
          heading: 'Visual Diagram — Backtracking Decision Tree',
          code: `Subsets of [1, 2, 3] — each level = include/skip decision

                        []
               /                    \\
           [1]                      []
        /       \\                 /     \\
    [1,2]      [1]            [2]        []
    /   \\      / \\           / \\       / \\
 [1,2,3][1,2][1,3][1]     [2,3][2]  [3]  []

8 subsets total = 2^3. Backtracking visits each leaf once.

Combination Sum — candidates [2,3,5], target 8:

  start=0, path=[], rem=8
    pick 2 → path=[2], rem=6, start=0 (reuse allowed)
      pick 2 → path=[2,2], rem=4
        pick 2 → path=[2,2,2], rem=2
          pick 2 → path=[2,2,2,2] rem=0 ✓ SOLUTION
        pick 3 → rem=1, prune (no valid coins)
      pick 3 → path=[2,3], rem=3
        pick 3 → path=[2,3,3] rem=0 ✓ SOLUTION
    pick 3 → path=[3], rem=5
      pick 5 → path=[3,5] rem=0 ✓ SOLUTION`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Subsets, Permutations, Combination Sum & N-Queens',
            code: `from typing import List

# ── 1. Subsets (power set) — O(n * 2^n) time, O(n) stack ──
def subsets(nums: List[int]) -> List[List[int]]:
    result = []
    def backtrack(start: int, path: List[int]) -> None:
        result.append(path[:])          # snapshot current path
        for i in range(start, len(nums)):
            path.append(nums[i])        # choose
            backtrack(i + 1, path)      # explore (no reuse)
            path.pop()                  # unchoose
    backtrack(0, [])
    return result

# ── 2. Permutations — O(n * n!) time ──
def permutations(nums: List[int]) -> List[List[int]]:
    result = []
    used = [False] * len(nums)
    def backtrack(path: List[int]) -> None:
        if len(path) == len(nums):
            result.append(path[:])
            return
        for i in range(len(nums)):
            if used[i]:
                continue
            used[i] = True
            path.append(nums[i])
            backtrack(path)
            path.pop()
            used[i] = False
    backtrack([])
    return result

# ── 3. Combination Sum — reuse allowed, no duplicate combos ──
def combination_sum(candidates: List[int], target: int) -> List[List[int]]:
    result = []
    candidates.sort()   # enables pruning when sum exceeds target
    def backtrack(start: int, path: List[int], remaining: int) -> None:
        if remaining == 0:
            result.append(path[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                break   # sorted — all further values too large
            path.append(candidates[i])
            backtrack(i, path, remaining - candidates[i])  # i, not i+1
            path.pop()
    backtrack(0, [], target)
    return result

# ── 4. N-Queens sketch — place queens row by row ──
def solve_n_queens(n: int) -> List[List[str]]:
    result = []
    cols = set()
    diag1 = set()   # row + col
    diag2 = set()   # row - col
    board = [['.'] * n for _ in range(n)]

    def backtrack(row: int) -> None:
        if row == n:
            result.append([''.join(r) for r in board])
            return
        for col in range(n):
            if col in cols or (row + col) in diag1 or (row - col) in diag2:
                continue
            cols.add(col)
            diag1.add(row + col)
            diag2.add(row - col)
            board[row][col] = 'Q'
            backtrack(row + 1)
            board[row][col] = '.'
            cols.remove(col)
            diag1.remove(row + col)
            diag2.remove(row - col)

    backtrack(0)
    return result

# Demo
print(subsets([1, 2, 3]))
print(permutations([1, 2, 3]))
print(combination_sum([2, 3, 5], 8))
print(solve_n_queens(4))`,
            output: `[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[[2, 2, 2, 2], [2, 3, 3], [3, 5]]
[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]`,
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

    // Subsets
    static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }

    static void backtrackSubsets(int[] nums, int start, List<Integer> path,
                                 List<List<Integer>> result) {
        result.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            backtrackSubsets(nums, i + 1, path, result);
            path.remove(path.size() - 1);
        }
    }

    // Permutations
    static List<List<Integer>> permutations(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        backtrackPerms(nums, used, new ArrayList<>(), result);
        return result;
    }

    static void backtrackPerms(int[] nums, boolean[] used, List<Integer> path,
                               List<List<Integer>> result) {
        if (path.size() == nums.length) {
            result.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.add(nums[i]);
            backtrackPerms(nums, used, path, result);
            path.remove(path.size() - 1);
            used[i] = false;
        }
    }

    // Combination Sum
    static List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> result = new ArrayList<>();
        backtrackCombo(candidates, 0, target, new ArrayList<>(), result);
        return result;
    }

    static void backtrackCombo(int[] cands, int start, int rem, List<Integer> path,
                               List<List<Integer>> result) {
        if (rem == 0) { result.add(new ArrayList<>(path)); return; }
        for (int i = start; i < cands.length; i++) {
            if (cands[i] > rem) break;
            path.add(cands[i]);
            backtrackCombo(cands, i, rem - cands[i], path, result);
            path.remove(path.size() - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
        System.out.println(permutations(new int[]{1, 2, 3}));
        System.out.println(combinationSum(new int[]{2, 3, 5}, 8));
    }
}`,
            output: `[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[[2, 2, 2, 2], [2, 3, 3], [3, 5]]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Subsets:</strong> At each index, snapshot the path (valid subset), then try including each element from `start` onward. Increment `start` on recurse to avoid duplicate subsets like [1,2] and [2,1].',
            '<strong>Step 2 — Permutations:</strong> When path length equals n, record it. Otherwise try every unused element — track usage with a boolean array, not a start index.',
            '<strong>Step 3 — Combination Sum:</strong> Sort candidates first. Pass `i` (not `i+1`) to allow reuse. Prune when `candidates[i] > remaining` since array is sorted.',
            '<strong>Step 4 — N-Queens:</strong> Place one queen per row. For each column, check three sets: occupied columns, positive diagonals (row+col), negative diagonals (row-col). Undo all three on backtrack.',
            '<strong>Step 5 — Pruning:</strong> Always ask: can this branch ever succeed? If not, `continue` or `break` early — this is what separates TLE from AC.',
            '<strong>Step 6 — Copying:</strong> Use `path[:]` or `new ArrayList<>(path)` when saving results — the path list is mutated in place.',
            '<strong>Step 7 — Complexity defense:</strong> State output size dominates (2^n, n!) — you cannot do better than generating all solutions when asked to return all of them.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Backtracking problems are inherently exponential when returning all solutions:',
          table: {
            headers: ['Problem', 'Time', 'Space (auxiliary)', 'Output size'],
            rows: [
              ['Subsets', 'O(n · 2^n)', 'O(n) stack', '2^n subsets'],
              ['Permutations', 'O(n · n!)', 'O(n) stack + used[]', 'n! permutations'],
              ['Combination Sum', 'O(2^target/min)', 'O(target/min) stack', 'Exponential'],
              ['N-Queens', 'O(n!)', 'O(n) sets + board', 'Multiple valid boards'],
              ['General backtracking', 'O(b^d)', 'O(d) recursion depth', 'Varies by branching factor b, depth d']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Forgetting to copy the path:</strong> `result.append(path)` stores a reference that gets mutated — <em>Fix:</em> `result.append(path[:])`.',
            '<strong>Wrong start index in subsets:</strong> Using `i` instead of `i+1` creates duplicate subsets — <em>Fix:</em> pass `i + 1` for no-reuse problems.',
            '<strong>Not sorting for combination sum:</strong> Without sorting you cannot break early when sum exceeds target — <em>Fix:</em> sort candidates first.',
            '<strong>Checking constraints after placing:</strong> In N-Queens, validate before placing, not after — <em>Fix:</em> `continue` on conflict before modifying state.',
            '<strong>Missing base case:</strong> Infinite recursion if you never return — <em>Fix:</em> always define the smallest input that needs no further recursion.'
          ],
          code: `# WRONG — stores mutable reference
result.append(path)

# CORRECT — snapshot
result.append(path[:])

# WRONG — combination sum passes i+1 (no reuse)
backtrack(i + 1, path, remaining - candidates[i])

# CORRECT — reuse allowed
backtrack(i, path, remaining - candidates[i])`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Combinatorial search appears wherever you must enumerate or find configurations under constraints:',
          list: [
            '<strong>Sudoku / puzzle solvers:</strong> Try a digit, recurse, backtrack on conflict — same N-Queens pattern.',
            '<strong>Resource allocation:</strong> Select tasks/subsets meeting budget caps (knapsack-style subset sum).',
            '<strong>Test case generation:</strong> QA tools enumerate input combinations to maximize coverage.',
            '<strong>Compiler register allocation:</strong> Backtracking over assignment choices under hardware constraints.',
            '<strong>Route planning with constraints:</strong> Visit cities in valid orders (permutation with pruning).',
            '<strong>Feature selection in ML:</strong> Subset search over features — often pruned with heuristics when 2^n is too large.'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Write the backtracking template first (choose → explore → unchoose), then fill in problem-specific details.',
            'Clarify: distinct elements? reuse allowed? return all solutions or count only? sorted output required?',
            'For "return all X" problems, exponential time is expected — defend it by citing output size.',
            'Use sets for O(1) conflict checks in N-Queens instead of scanning the board each time.',
            'Sort input when it enables pruning (combination sum, combination sum II with duplicates).',
            'If asked to optimize, consider DP or bitmask tricks — but only when the problem asks for count/optimal, not all solutions.',
            'Draw a small decision tree on the whiteboard — interviewers love seeing you trace one path to a leaf and backtrack.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            `Q1 (Easy): Generate all subsets of [1, 2]. Walk through the recursion tree.
Hint: Snapshot at every node before the for-loop.
Ans: [], [1], [2], [1,2]. Tree: root [] → branch pick 1 → [1] → pick 2 → [1,2], backtrack → [1] → done, backtrack → pick 2 from root → [2].`,
            `Q2 (Medium): Combination Sum — candidates [2,3,6,7], target 7. List all combinations.
Hint: Sort first; pass index i (not i+1) to allow reuse; prune when candidate > remaining.
Ans: [[2,2,3], [7]]. Path [2,2,3]: pick 2 (rem 5) → pick 2 (rem 3) → pick 3 (rem 0). Path [7]: single pick.`,
            `Q3 (Hard): N-Queens n=4 — how many distinct solutions?
Hint: One queen per row; track col and both diagonal sets; backtrack row by row.
Ans: 2 solutions (shown in Python output above). Time O(n!), space O(n) for constraint sets.`
          ]
        }
      ]
    },
    'dp-memoization': {
      title: 'Dynamic Programming (Memoization)',
      subtitle: 'Top-down DP — recurse with a cache',
      sections: [
        {
          heading: 'Core Concepts: Memoization',
          text: 'Memoization (top-down dynamic programming) wraps recursion with a cache. Before computing a subproblem, check the cache; after computing, store the result. It converts exponential brute-force recursion into polynomial time when subproblems overlap — the defining trait of DP.',
          list: [
            '<strong>Overlapping subproblems:</strong> The same state is reached via different paths (Fibonacci: fib(5) calls fib(3) twice without memo).',
            '<strong>Optimal substructure:</strong> Optimal solution composed of optimal solutions to subproblems (knapsack, coin change).',
            '<strong>State:</strong> Parameters that uniquely identify a subproblem (index, remaining capacity, remaining sum).',
            '<strong>Memo table:</strong> Dict, array, or @lru_cache mapping state → result.',
            '<strong>Top-down vs bottom-up:</strong> Memoization is lazy — only visits needed states; tabulation fills entire table.',
            '<strong>Never use mutable default args:</strong> `memo={}` is shared across calls — use `memo=None` and initialize inside.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The memoization recipe: <strong>(1)</strong> define recursive function with explicit state parameters; <strong>(2)</strong> check cache at top — return if hit; <strong>(3)</strong> compute recursively; <strong>(4)</strong> store in cache before returning. The recursion tree collapses from exponential nodes to O(unique states) nodes.</p>',
            '<p>For <strong>coin change</strong>, state is `(index, amount)`. Try taking 0, 1, 2… coins of `coins[index]` or skip to next coin. For <strong>0/1 knapsack</strong>, state is `(index, capacity)` — either include item (capacity -= weight) or exclude (index + 1). Each state is computed once → O(n · W) for knapsack, O(n · amount) for coin change.</p>',
            '<p>Fibonacci is the pedagogical example: without memo, O(2^n); with memo, O(n) time and O(n) space. Use `functools.lru_cache` in Python for quick prototyping, but write explicit dict memo in interviews to show understanding.</p>'
          ],
          note: 'Interview signal: say "overlapping subproblems" and "optimal substructure" — these are the two DP prerequisites every interviewer listens for.'
        },
        {
          heading: 'Visual Diagram — Memoization Call Tree Collapse',
          code: `Fibonacci(5) WITHOUT memo — exponential revisits:

                    fib(5)
                   /      \\
              fib(4)        fib(3)  ← fib(3) computed twice
             /     \\        /    \\
        fib(3)  fib(2)  fib(2) fib(1)  ← fib(2) computed 3 times!
        ...

WITH memo — each fib(k) computed once:

  fib(5) → fib(4) → fib(3) → fib(2) → fib(1) → fib(0)
  Cache fills: {0:0, 1:1, 2:1, 3:2, 4:3, 5:5}
  Total calls: 6 (linear)

0/1 Knapsack memo table sketch — weights [1,2,3], values [6,10,12], cap=5:

         cap→  0   1   2   3   4   5
  item 0     [ 0   6   6  12  12  18 ]  include w=1,v=6
  item 1     [ 0   6  10  16  16  22 ]
  item 2     [ 0   6  10  16  18  22 ]  max value = 22`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Fibonacci, Coin Change & 0/1 Knapsack (Top-Down)',
            code: `from typing import List, Optional
from functools import lru_cache

# ── 1. Fibonacci — memo=None pattern (NO mutable default arg) ──
def fib(n: int, memo: Optional[dict] = None) -> int:
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

# Alternative: @lru_cache(maxsize=None)
@lru_cache(maxsize=None)
def fib_lru(n: int) -> int:
    if n <= 1:
        return n
    return fib_lru(n - 1) + fib_lru(n - 2)

# ── 2. Coin Change — min coins to make amount ──
def coin_change(coins: List[int], amount: int) -> int:
    memo = {}

    def dp(i: int, rem: int) -> int:
        if rem == 0:
            return 0
        if rem < 0 or i == len(coins):
            return float('inf')
        key = (i, rem)
        if key in memo:
            return memo[key]
        # skip coin i, or take one and stay at i (unbounded)
        skip = dp(i + 1, rem)
        take = 1 + dp(i, rem - coins[i])
        memo[key] = min(skip, take)
        return memo[key]

    ans = dp(0, amount)
    return ans if ans != float('inf') else -1

# ── 3. 0/1 Knapsack — max value, each item once ──
def knapsack_01(weights: List[int], values: List[int], capacity: int) -> int:
    memo = {}

    def dp(i: int, cap: int) -> int:
        if i == len(weights) or cap == 0:
            return 0
        key = (i, cap)
        if key in memo:
            return memo[key]
        # exclude item i
        exclude = dp(i + 1, cap)
        # include item i (if fits)
        include = 0
        if weights[i] <= cap:
            include = values[i] + dp(i + 1, cap - weights[i])
        memo[key] = max(exclude, include)
        return memo[key]

    return dp(0, capacity)

# Demo
print(fib(10))                              # 55
print(coin_change([1, 2, 5], 11))           # 3 (5+5+1)
print(knapsack_01([1, 2, 3], [6, 10, 12], 5))  # 22`,
            output: `55
3
22`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Memoized Fibonacci, Coin Change & Knapsack',
            code: `import java.util.*;

public class MemoizationDemo {

    // Fibonacci with int[] memo (-1 = uncomputed)
    static int fib(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != -1) return memo[n];
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n];
    }

    // Coin change — min coins
    static int coinChange(int[] coins, int amount) {
        Integer[][] memo = new Integer[coins.length][amount + 1];
        int ans = dpCoin(coins, 0, amount, memo);
        return ans >= Integer.MAX_VALUE / 2 ? -1 : ans;
    }

    static int dpCoin(int[] coins, int i, int rem, Integer[][] memo) {
        if (rem == 0) return 0;
        if (rem < 0 || i == coins.length) return Integer.MAX_VALUE / 2;
        if (memo[i][rem] != null) return memo[i][rem];
        int skip = dpCoin(coins, i + 1, rem, memo);
        int take = 1 + dpCoin(coins, i, rem - coins[i], memo);
        memo[i][rem] = Math.min(skip, take);
        return memo[i][rem];
    }

    // 0/1 Knapsack
    static int knapsack01(int[] w, int[] v, int cap) {
        Integer[][] memo = new Integer[w.length][cap + 1];
        return dpKnap(w, v, 0, cap, memo);
    }

    static int dpKnap(int[] w, int[] v, int i, int cap, Integer[][] memo) {
        if (i == w.length || cap == 0) return 0;
        if (memo[i][cap] != null) return memo[i][cap];
        int exclude = dpKnap(w, v, i + 1, cap, memo);
        int include = 0;
        if (w[i] <= cap)
            include = v[i] + dpKnap(w, v, i + 1, cap - w[i], memo);
        memo[i][cap] = Math.max(exclude, include);
        return memo[i][cap];
    }

    public static void main(String[] args) {
        int[] memo = new int[11];
        Arrays.fill(memo, -1);
        System.out.println(fib(10, memo));         // 55
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // 3
        System.out.println(knapsack01(
            new int[]{1,2,3}, new int[]{6,10,12}, 5));       // 22
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
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Identify state:</strong> List parameters that change between subproblems. Coin change: `(coin_index, remaining_amount)`. Knapsack: `(item_index, remaining_capacity)`.',
            '<strong>Step 2 — Base cases:</strong> Coin change: `rem == 0 → 0` (done), `rem < 0 or i == n → INF` (invalid). Knapsack: `i == n or cap == 0 → 0`.',
            '<strong>Step 3 — Cache check:</strong> First lines after base cases: if state in memo, return cached value.',
            '<strong>Step 4 — Transitions:</strong> Coin change: min(skip, 1+take). Knapsack: max(exclude, include).',
            '<strong>Step 5 — Store & return:</strong> Save result in memo before returning — order matters for correctness.',
            '<strong>Step 6 — Fib memo init:</strong> `if memo is None: memo = {}` — never `memo={}` as default parameter.',
            '<strong>Step 7 — Trace coin change( coins=[1,2,5], amount=3):</strong> dp(0,3) → min(dp(1,3), 1+dp(0,2)) → … → 2 coins (2+1).'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Memoization complexity = O(number of unique states × work per state):',
          table: {
            headers: ['Problem', 'States', 'Time', 'Space'],
            rows: [
              ['Fibonacci', 'n', 'O(n)', 'O(n) memo + O(n) stack'],
              ['Coin Change', 'n × amount', 'O(n · amount)', 'O(n · amount)'],
              ['0/1 Knapsack', 'n × W', 'O(n · W)', 'O(n · W)'],
              ['Unbounded knapsack', 'n × W', 'O(n · W)', 'O(n · W)'],
              ['General top-down DP', 'State space S', 'O(S · transition cost)', 'O(S) + O(depth) stack']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Mutable default argument:</strong> `def fib(n, memo={})` shares dict across calls — <em>Fix:</em> `memo=None` then `memo = {}` inside.',
            '<strong>Forgetting to cache before return:</strong> Storing only on some branches — <em>Fix:</em> always `memo[key] = result` before every return from computation.',
            '<strong>Wrong state definition:</strong> Missing a parameter that changes (e.g., forgetting index in knapsack) — <em>Fix:</em> list all varying parameters.',
            '<strong>0/1 vs unbounded confusion:</strong> Passing `i` vs `i+1` after taking — <em>Fix:</em> 0/1 uses `i+1` (item consumed); unbounded uses `i` (reuse allowed).',
            '<strong>Integer overflow in Java:</strong> Using `Integer.MAX_VALUE` in min() without sentinel — <em>Fix:</em> use `MAX_VALUE/2` for invalid states.'
          ],
          code: `# WRONG — shared mutable default
def fib(n, memo={}):
    ...

# CORRECT
def fib(n, memo=None):
    if memo is None:
        memo = {}
    ...`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Financial optimization:</strong> Portfolio knapsack — maximize return under risk/capital constraints.',
            '<strong>Currency systems:</strong> Minimum coins for change-making in POS systems.',
            '<strong>Bioinformatics:</strong> Sequence alignment (edit distance) uses DP memo over string positions.',
            '<strong>Game AI:</strong> Memoized game states (chess endgame tables) avoid recomputing positions.',
            '<strong>Compiler optimization:</strong> DP on expression trees for optimal code generation.',
            '<strong>Resource scheduling:</strong> Memo over (time, resources) for project planning.'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Start with brute-force recursion, identify overlapping subproblems, then add memo — shows structured thinking.',
            'State your state: "dp(i, w) = max value using items i..n-1 with capacity w" — precision impresses interviewers.',
            'Distinguish 0/1 knapsack (i+1 after take) from unbounded (i after take) — a very common trap.',
            'For coin change, clarify: min coins, number of ways, or feasibility? Each has a different recurrence.',
            'Mention you can convert top-down to bottom-up (tabulation) for better space control.',
            'Draw the memo table and fill 2-3 cells by hand — demonstrates mastery beyond memorization.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            `Q1 (Easy): Compute fib(6) with memo. How many unique subproblems?
Hint: Each fib(k) for k=0..6 is computed once.
Ans: fib(6)=8. Seven unique states (fib(0) through fib(6)). Without memo, 25 total calls.`,
            `Q2 (Medium): Coin change — coins [1,3,4], amount 6. Minimum coins?
Hint: dp(i, rem) = min(skip, 1+take). Trace dp(0,6).
Ans: 2 coins (3+3). dp(0,6): take 3 → dp(0,3) → take 3 → dp(0,0)=0. Total 2.`,
            `Q3 (Hard): 0/1 Knapsack — weights [2,3,4,5], values [3,4,5,6], capacity 8. Max value?
Hint: At each item, max(exclude, value[i] + dp(i+1, cap-weight[i])).
Ans: 10 (items 2+3 with w=3,v=4 and w=5,v=6). Fill memo row for item index 2, cap 8 → 10.`
          ]
        }
      ]
    },
    'dp-tabulation': {
      title: 'Dynamic Programming (Tabulation)',
      subtitle: 'Bottom-up DP — fill the table iteratively',
      sections: [
        {
          heading: 'Core Concepts: Tabulation',
          text: 'Tabulation builds the DP table bottom-up: solve the smallest subproblems first, store results in an array/table, and iterate toward the target. No recursion overhead, no stack overflow risk, and often allows space optimization by keeping only the previous row.',
          list: [
            '<strong>Bottom-up:</strong> Start from base cases (dp[0], empty strings) and fill toward the answer.',
            '<strong>Iteration order matters:</strong> Fill cells only after their dependencies are computed.',
            '<strong>2D tables:</strong> Common for two-sequence problems (LCS, edit distance) — rows/cols are string indices.',
            '<strong>Space optimization:</strong> Knapsack needs only previous row → reduce O(n·W) space to O(W).',
            '<strong>Climbing stairs:</strong> Simple 1D DP where dp[i] = dp[i-1] + dp[i-2] — Fibonacci in disguise.',
            '<strong>When to prefer tabulation:</strong> You need all subproblem answers, want to avoid recursion limits, or can optimize space.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Tabulation converts the recursive recurrence into nested loops. For <strong>coin change</strong>: `dp[a] = min(dp[a], 1 + dp[a - coin])` for each coin and each amount. For <strong>LCS</strong>: if chars match, `dp[i][j] = 1 + dp[i-1][j-1]`; else `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.</p>',
            '<p><strong>Edit distance</strong> (Levenshtein): `dp[i][j]` = min edits to transform first i chars of s1 to first j chars of s2. Base: `dp[i][0]=i`, `dp[0][j]=j`. Recurrence: if s1[i-1]==s2[j-1], copy diagonal; else 1 + min(insert, delete, replace).</p>',
            '<p>The visual walkthrough below shows how tables fill row-by-row. Each cell depends only on already-filled neighbors — this dependency structure is what makes bottom-up correct.</p>'
          ],
          note: 'Space trick: for 0/1 knapsack tabulation, iterate capacity backwards when using 1D array to prevent reusing the same item twice.'
        },
        {
          heading: 'Visual Walkthrough — DP Table Filling',
          code: `Coin Change (bottom-up) — coins [1,2,5], amount 5:

  dp[0] = 0  (0 coins for amount 0)
  coin 1: dp = [0, 1, 2, 3, 4, 5]
  coin 2: dp = [0, 1, 1,  2,  2,  3]  ← dp[2]=min(2,1+dp[0])=1
  coin 5: dp = [0, 1, 1,  2,  2,  1]  ← dp[5]=min(5,1+dp[0])=1
  Answer: 1 coin

LCS("ABCD", "AED") — table fill order row by row:

        ""  A  E  D
    ""   0  0  0  0
    A    0  1  1  1   ← match A,A → 1+dp[0][0]=1
    B    0  1  1  1
    C    0  1  1  1
    D    0  1  1  2   ← match D,D → 1+dp[2][2]=2

  LCS length = 2 ("AD")

Edit Distance("cat", "cut") — 3×3 fill:

        ""  c  u  t
    ""   0  1  2  3
    c    1  0  1  2   ← c==c → dp[1][1]=0
    a    2  1  1  2
    t    3  2  2  1   ← t==t → dp[3][3]=1+dp[2][2]=1

  Answer: 1 edit (a → u)

Climbing Stairs(n=5):

  dp[0]=1, dp[1]=1
  dp[2]=dp[1]+dp[0]=2
  dp[3]=2+1=3
  dp[4]=3+2=5
  dp[5]=5+3=8 ways`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Coin Change, LCS, Edit Distance & Climbing Stairs',
            code: `from typing import List

# ── 1. Coin Change (bottom-up) — min coins ──
def coin_change_bu(coins: List[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for a in range(coin, amount + 1):
            dp[a] = min(dp[a], 1 + dp[a - coin])
    return dp[amount] if dp[amount] != float('inf') else -1

# ── 2. Longest Common Subsequence ──
def lcs(s1: str, s2: str) -> int:
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

# ── 3. Edit Distance (Levenshtein) ──
def edit_distance(s1: str, s2: str) -> int:
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete
                    dp[i][j - 1],      # insert
                    dp[i - 1][j - 1]   # replace
                )
    return dp[m][n]

# ── 4. Climbing Stairs — distinct ways to reach step n ──
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

# Demo
print(coin_change_bu([1, 2, 5], 11))       # 3
print(lcs("ABCD", "AED"))                   # 2
print(edit_distance("cat", "cut"))            # 1
print(climb_stairs(5))                      # 8`,
            output: `3
2
1
8`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Tabulation — Coin Change, LCS & Edit Distance',
            code: `import java.util.*;

public class TabulationDemo {

    static int coinChangeBU(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int coin : coins)
            for (int a = coin; a <= amount; a++)
                dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
        return dp[amount] > amount ? -1 : dp[amount];
    }

    static int lcs(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++)
            for (int j = 1; j <= n; j++)
                if (s1.charAt(i - 1) == s2.charAt(j - 1))
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        return dp[m][n];
    }

    static int editDistance(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++)
            for (int j = 1; j <= n; j++)
                if (s1.charAt(i - 1) == s2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = 1 + Math.min(dp[i-1][j],
                                 Math.min(dp[i][j-1], dp[i-1][j-1]));
        return dp[m][n];
    }

    static int climbStairs(int n) {
        if (n <= 2) return n;
        int[] dp = new int[n + 1];
        dp[1] = 1; dp[2] = 2;
        for (int i = 3; i <= n; i++)
            dp[i] = dp[i - 1] + dp[i - 2];
        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(coinChangeBU(new int[]{1,2,5}, 11)); // 3
        System.out.println(lcs("ABCD", "AED"));                  // 2
        System.out.println(editDistance("cat", "cut"));            // 1
        System.out.println(climbStairs(5));                      // 8
    }
}`,
            output: `3
2
1
8`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1 — Define table dimensions:</strong> Coin change: 1D array size `amount+1`. LCS/edit: 2D `(m+1) × (n+1)` with extra row/col for empty string.',
            '<strong>Step 2 — Initialize base cases:</strong> `dp[0]=0` for coin change; `dp[i][0]` and `dp[0][j]` for string DP.',
            '<strong>Step 3 — Determine loop order:</strong> Coin change: outer loop coins, inner loop amounts ascending. Knapsack 1D: inner loop capacity descending.',
            '<strong>Step 4 — Apply recurrence:</strong> LCS match → diagonal + 1; mismatch → max(top, left). Edit distance mismatch → 1 + min(top, left, diagonal).',
            '<strong>Step 5 — Read answer:</strong> Bottom-right cell for 2D; `dp[amount]` for coin change; `dp[n]` for climbing stairs.',
            '<strong>Step 6 — Reconstruct solution (bonus):</strong> Backtrack from dp[m][n] following which direction was chosen to print actual LCS string.',
            '<strong>Step 7 — Space optimize:</strong> LCS can use two rows; climbing stairs needs only two variables.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Problem', 'Time', 'Space', 'Space-Optimized'],
            rows: [
              ['Coin Change BU', 'O(n · amount)', 'O(amount)', 'O(amount)'],
              ['LCS', 'O(m · n)', 'O(m · n)', 'O(min(m,n)) two rows'],
              ['Edit Distance', 'O(m · n)', 'O(m · n)', 'O(min(m,n))'],
              ['Climbing Stairs', 'O(n)', 'O(n)', 'O(1) two vars'],
              ['0/1 Knapsack BU', 'O(n · W)', 'O(n · W)', 'O(W) 1D array']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Wrong loop order in 0/1 knapsack 1D:</strong> Forward inner loop allows reuse — <em>Fix:</em> iterate capacity backwards for 0/1.',
            '<strong>Off-by-one in string DP:</strong> Compare `s1[i-1]` with `s2[j-1]` when dp is 1-indexed — <em>Fix:</em> draw the table with "" row/col.',
            '<strong>Initializing dp with 0 for coin change:</strong> Unreachable amounts look like 0 coins — <em>Fix:</em> init with INF, set dp[0]=0.',
            '<strong>Forgetting base row/column:</strong> LCS without dp[i][0]=0 gives wrong answers — <em>Fix:</em> empty string has LCS 0.',
            '<strong>Not handling empty input:</strong> edit_distance("", "") should be 0 — <em>Fix:</em> base cases handle this via dp[0][j]=j.'
          ],
          code: `# 0/1 Knapsack — 1D space-optimized (iterate BACKWARDS)
for i in range(n):
    for w in range(W, weights[i] - 1, -1):
        dp[w] = max(dp[w], values[i] + dp[w - weights[i]])`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Spell checkers:</strong> Edit distance ranks suggestions ("teh" → "the").',
            '<strong>Diff tools (git diff):</strong> LCS-based longest common lines between file versions.',
            '<strong>DNA sequence alignment:</strong> LCS/edit distance variants measure genetic similarity.',
            '<strong>Robotics path counting:</strong> Climbing stairs models grid paths with restricted moves.',
            '<strong>Vending machine / ATM:</strong> Coin change minimizes coins/tokens dispensed.',
            '<strong>Natural language processing:</strong> Word alignment in machine translation uses edit distance.'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'When you hear "minimum/maximum" + "subsequence/subarray" + two strings → think 2D DP table.',
            'Draw the 3×3 edit distance table for small strings — interviewers often ask you to fill it by hand.',
            'Coin change: outer coin loop, inner amount loop — reversing causes wrong answers for bounded coin counts.',
            'Climbing stairs is Fibonacci — mention you can optimize from O(n) space to O(1).',
            'After writing tabulation, offer to reconstruct the actual solution (LCS string, coin list) by backtracking.',
            'Compare top-down vs bottom-up: "Memoization is easier to write; tabulation avoids stack overflow and enables space optimization."'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            `Q1 (Medium): LCS of "abcde" and "ace". What is the table's bottom-right value?
Hint: Fill row by row; on match take diagonal+1, else max(top,left).
Ans: 3 ("ace"). dp[5][3]=3. Matches at (a,a), (c,c), (e,e).`,
            `Q2 (Medium): Edit distance between "kitten" and "sitting".
Hint: Standard 3-operation recurrence; cat→cut style trace helps.
Ans: 3 edits (k→s, e→i, insert g). Classic interview problem — dp[6][7]=3.`,
            `Q3 (Hard): Coin change BU — coins [2,5,10], amount 27. Min coins?
Hint: Fill dp[0..27]; for each coin update dp[a] = min(dp[a], 1+dp[a-coin]).
Ans: 4 coins (10+10+5+2). dp[27]=4 after processing all coins.`
          ]
        }
      ]
    },
    'advanced-graphs': {
      title: 'Dijkstra, TopSort & Union-Find',
      subtitle: 'Shortest paths, DAG ordering & connected components',
      sections: [
        {
          heading: 'Core Concepts: Advanced Graph Algorithms',
          text: 'Module 4 graph algorithms go beyond basic BFS/DFS: Dijkstra finds shortest paths in weighted graphs, Kahn\'s algorithm topologically sorts DAGs, and Union-Find tracks connected components with near-constant operations. These three appear constantly in medium-to-hard interviews and system design.',
          list: [
            '<strong>Dijkstra:</strong> Greedy shortest path from a source; requires non-negative edge weights; uses min-heap for O((V+E) log V).',
            '<strong>Topological Sort (Kahn\'s):</strong> BFS by in-degree — process nodes with in-degree 0, reduce neighbors\' in-degrees.',
            '<strong>Union-Find (DSU):</strong> Track disjoint sets with `find` (with path compression) and `union` (by rank) — nearly O(1) amortized.',
            '<strong>Min-heap role:</strong> Always extract the unvisited node with smallest known distance in Dijkstra.',
            '<strong>DAG prerequisite:</strong> Topological sort fails on cycles — detect via incomplete ordering.',
            '<strong>Applications:</strong> Course scheduling (toposort), network routing (Dijkstra), Kruskal MST (Union-Find).'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Dijkstra</strong> maintains `dist[v]` = best known distance from source. Each iteration pops the min-dist unvisited node `u`, relaxes all edges `(u, v, w)`: if `dist[u] + w < dist[v]`, update `dist[v]` and push `(dist[v], v)` onto the heap. Non-negative weights ensure once a node is popped, its distance is final.</p>',
            '<p><strong>Kahn\'s algorithm</strong> computes in-degrees, enqueues all zero-in-degree nodes, processes them in order, decrements neighbor in-degrees, enqueues newly zero nodes. If processed count < V, a cycle exists. This is BFS on the "dependency graph" — course A must precede course B.</p>',
            '<p><strong>Union-Find</strong> stores `parent[i]` and `rank[i]`. `find(x)` walks to root with path compression (point every node directly to root). `union(x, y)` attaches smaller-rank root under larger-rank root (union by rank). Together they yield α(n) amortized time — effectively constant.</p>'
          ],
          note: 'Dijkstra does NOT work with negative edges — use Bellman-Ford. Topological sort requires a DAG — use DFS coloring or Kahn\'s incomplete result to detect cycles.'
        },
        {
          heading: 'Visual Walkthrough — Graph Algorithms',
          code: `Dijkstra from node 0 — graph: 0→1(4), 0→2(1), 2→1(2), 1→3(1), 2→3(5)

  Initial dist: {0:0, 1:∞, 2:∞, 3:∞}
  Heap: [(0,0)]

  Pop (0,0) → relax 0→1: dist[1]=4; 0→2: dist[2]=1
  Heap: [(1,2), (4,1)]

  Pop (1,2) → relax 2→1: dist[1]=min(4,1+2)=3; 2→3: dist[3]=6
  Heap: [(3,1), (4,1), (6,3)]

  Pop (3,1) → relax 1→3: dist[3]=min(6,3+1)=4
  Heap: [(4,1), (4,3), (6,3)]

  Final dist: {0:0, 2:1, 1:3, 3:4}

Kahn's Topological Sort — courses: 0→1, 0→2, 1→3, 2→3

  In-degrees: {0:0, 1:1, 2:1, 3:2}
  Queue: [0]

  Process 0 → reduce 1,2: in-deg={1:0,2:0,3:2} → queue [1,2]
  Process 1 → reduce 3: in-deg={3:1} → queue [2]
  Process 2 → reduce 3: in-deg={3:0} → queue [3]
  Process 3 → done

  Order: [0, 1, 2, 3] (or [0,2,1,3] — valid too)

Union-Find — union(0,1), union(2,3), union(1,2):

  After union(0,1): parent=[1,1,2,3], rank=[0,1,0,0]
  After union(2,3): parent=[1,1,3,3], rank=[0,1,0,1]
  After union(1,2): parent=[1,1,3,1] (rank 1 > 0) → all in set {0,1,2,3}
  find(0) with path compression → parent[0]=1`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Dijkstra, Kahn TopSort & Union-Find',
            code: `import heapq
from collections import defaultdict, deque
from typing import List, Dict, Tuple

# ── 1. Dijkstra with min-heap ──
def dijkstra(graph: Dict[int, List[Tuple[int, int]]], src: int) -> Dict[int, int]:
    dist = {src: 0}
    heap = [(0, src)]   # (distance, node)
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist.get(u, float('inf')):
            continue   # stale entry
        for v, w in graph.get(u, []):
            nd = d + w
            if nd < dist.get(v, float('inf')):
                dist[v] = nd
                heapq.heappush(heap, (nd, v))
    return dist

# ── 2. Topological Sort — Kahn's BFS ──
def topological_sort_kahn(n: int, edges: List[Tuple[int, int]]) -> List[int]:
    adj = defaultdict(list)
    indeg = [0] * n
    for u, v in edges:
        adj[u].append(v)
        indeg[v] += 1
    queue = deque(i for i in range(n) if indeg[i] == 0)
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return order if len(order) == n else []  # empty if cycle

# ── 3. Union-Find with path compression + union by rank ──
class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x: int, y: int) -> bool:
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        self.components -= 1
        return True

    def connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)

# Demo
graph = {0: [(1, 4), (2, 1)], 1: [(3, 1)], 2: [(1, 2), (3, 5)]}
print(dijkstra(graph, 0))                    # {0:0, 2:1, 1:3, 3:4}
print(topological_sort_kahn(4, [(0,1),(0,2),(1,3),(2,3)]))  # [0,1,2,3]
uf = UnionFind(4)
uf.union(0, 1); uf.union(2, 3); uf.union(1, 2)
print(uf.connected(0, 3))  # True`,
            output: `{0: 0, 2: 1, 1: 3, 3: 4}
[0, 1, 2, 3]
True`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Dijkstra, Kahn & Union-Find in Java',
            code: `import java.util.*;

public class AdvancedGraphs {

    // Dijkstra with PriorityQueue (min-heap)
    static int[] dijkstra(List<List<int[]>> graph, int src) {
        int n = graph.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[]{0, src});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int d = cur[0], u = cur[1];
            if (d > dist[u]) continue;
            for (int[] edge : graph.get(u)) {
                int v = edge[0], w = edge[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
        return dist;
    }

    // Kahn's topological sort
    static List<Integer> topoSort(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        int[] indeg = new int[n];
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) { adj.get(e[0]).add(e[1]); indeg[e[1]]++; }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);
        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll();
            order.add(u);
            for (int v : adj.get(u))
                if (--indeg[v] == 0) q.offer(v);
        }
        return order.size() == n ? order : Collections.emptyList();
    }

    // Union-Find
    static class UnionFind {
        int[] parent, rank;
        UnionFind(int n) {
            parent = new int[n]; rank = new int[n];
            for (int i = 0; i < n; i++) parent[i] = i;
        }
        int find(int x) {
            if (parent[x] != x) parent[x] = find(parent[x]);
            return parent[x];
        }
        boolean union(int x, int y) {
            int rx = find(x), ry = find(y);
            if (rx == ry) return false;
            if (rank[rx] < rank[ry]) { int t = rx; rx = ry; ry = t; }
            parent[ry] = rx;
            if (rank[rx] == rank[ry]) rank[rx]++;
            return true;
        }
    }

    public static void main(String[] args) {
        List<List<int[]>> g = new ArrayList<>();
        for (int i = 0; i < 4; i++) g.add(new ArrayList<>());
        g.get(0).add(new int[]{1, 4}); g.get(0).add(new int[]{2, 1});
        g.get(1).add(new int[]{3, 1}); g.get(2).add(new int[]{1, 2});
        g.get(2).add(new int[]{3, 5});
        System.out.println(Arrays.toString(dijkstra(g, 0)));
        System.out.println(topoSort(4, new int[][]{{0,1},{0,2},{1,3},{2,3}}));
        UnionFind uf = new UnionFind(4);
        uf.union(0,1); uf.union(2,3); uf.union(1,2);
        System.out.println(uf.find(0) == uf.find(3));
    }
}`,
            output: `[0, 1, 3, 4]
[0, 1, 2, 3]
true`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Dijkstra Step 1:</strong> Init `dist[src]=0`, all others ∞. Push `(0, src)` on min-heap.',
            '<strong>Dijkstra Step 2:</strong> Pop smallest dist node `u`. Skip if stale (`d > dist[u]`).',
            '<strong>Dijkstra Step 3:</strong> For each neighbor `(v, w)`, if `dist[u]+w < dist[v]`, update and push `(dist[v], v)`.',
            '<strong>Kahn Step 1:</strong> Build adjacency list and in-degree array from edges.',
            '<strong>Kahn Step 2:</strong> Enqueue all nodes with in-degree 0.',
            '<strong>Kahn Step 3:</strong> Dequeue, append to order, decrement neighbor in-degrees, enqueue new zeros.',
            '<strong>Union-Find:</strong> `find` with path compression flattens tree; `union` by rank keeps trees shallow — together → α(n) per op.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Algorithm', 'Time', 'Space', 'Notes'],
            rows: [
              ['Dijkstra (binary heap)', 'O((V + E) log V)', 'O(V + E)', 'Non-negative weights only'],
              ['Dijkstra (Fibonacci heap)', 'O(E + V log V)', 'O(V + E)', 'Theoretical; rarely used in practice'],
              ['Kahn TopSort', 'O(V + E)', 'O(V + E)', 'Detects cycles via incomplete order'],
              ['DFS TopSort', 'O(V + E)', 'O(V + E)', 'Alternative; use 3-color cycle detect'],
              ['Union-Find', 'O(α(n)) per op', 'O(n)', 'α = inverse Ackermann ≈ constant'],
              ['Bellman-Ford', 'O(V · E)', 'O(V)', 'Handles negative edges']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Dijkstra on negative edges:</strong> Produces wrong answers — <em>Fix:</em> use Bellman-Ford or SPFA.',
            '<strong>Not skipping stale heap entries:</strong> Without `if d > dist[u]: continue`, you reprocess nodes — <em>Fix:</em> lazy deletion check.',
            '<strong>TopSort on cyclic graph:</strong> Returns incomplete order silently — <em>Fix:</em> check `len(order) == n`.',
            '<strong>Union-Find without path compression:</strong> Degrades to O(n) per find — <em>Fix:</em> always compress in find().',
            '<strong>Confusing BFS with Dijkstra:</strong> BFS works for unweighted graphs only — <em>Fix:</em> use heap when edges have weights.'
          ],
          code: `# Dijkstra — MUST skip stale heap entries
d, u = heapq.heappop(heap)
if d > dist.get(u, float('inf')):
    continue`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>GPS / Maps routing:</strong> Dijkstra (or A*) on road networks with non-negative distances.',
            '<strong>Build systems (Make, Bazel):</strong> Topological sort determines task execution order.',
            '<strong>Course prerequisites:</strong> TopSort detects if graduation is possible (cycle = deadlock).',
            '<strong>Network connectivity:</strong> Union-Find for dynamic connectivity queries (social networks).',
            '<strong>Kruskal MST:</strong> Union-Find detects cycles when adding edges greedily by weight.',
            '<strong>Dependency resolution (npm, pip):</strong> TopSort with version constraints on package DAG.'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'State upfront: "Non-negative weights? DAG or general directed graph?" — shows you know algorithm prerequisites.',
            'For "shortest path in weighted graph" → Dijkstra. Unweighted → BFS. Negative edges → Bellman-Ford.',
            'Course schedule / alien dictionary → topological sort. Always mention cycle detection.',
            'Number of connected components / is connected → Union-Find or DFS.',
            'Write Dijkstra with a `(dist, node)` heap and stale-entry skip — interviewers check this detail.',
            'For Union-Find, always mention both optimizations: path compression AND union by rank.',
            'Draw the graph and trace Dijkstra\'s first 3 heap pops — visual fluency wins trust.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            `Q1 (Medium): Dijkstra from A in graph A→B(3), A→C(1), C→B(1), B→D(2). dist[D]?
Hint: Process C before B because dist[C]=1 < dist[B]=3; relax C→B gives dist[B]=2.
Ans: dist[D]=4 (path A→C→B→D = 1+1+2).`,
            `Q2 (Medium): 5 courses, prerequisites [[1,0],[2,0],[3,1],[3,2]]. Valid topo order?
Hint: Kahn's — in-deg 0 starts with course 0; then 1,2 become available; then 3.
Ans: [0,1,2,3] or [0,2,1,3]. Course 4 has no prereqs — can appear anywhere if it exists.`,
            `Q3 (Hard): Union-Find on 6 nodes: union(0,1), union(1,2), union(3,4). connected(0,4)?
Hint: Two separate components {0,1,2} and {3,4}; node 5 alone.
Ans: False. find(0)=find(2) but find(0)≠find(4). components count = 3.`
          ]
        }
      ]
    },
    'string-algos': {
      title: 'Advanced String Algorithms',
      subtitle: 'KMP & Rabin-Karp pattern matching',
      sections: [
        {
          heading: 'Core Concepts: Advanced String Matching',
          text: 'Naive pattern matching is O(n·m). KMP and Rabin-Karp reduce this to O(n + m) by avoiding redundant comparisons. KMP uses a precomputed LPS (Longest Proper Prefix which is also Suffix) array to skip ahead on mismatch. Rabin-Karp uses rolling hash to compare pattern fingerprint against every text window in O(1) amortized.',
          list: [
            '<strong>Naive matching:</strong> Try every text position, compare char-by-char — O(n·m) worst case.',
            '<strong>KMP LPS array:</strong> lps[i] = length of longest proper prefix of pattern[0..i] that is also a suffix.',
            '<strong>KMP scan:</strong> On mismatch at text[i], shift pattern by i - lps[j-1] instead of restarting.',
            '<strong>Rolling hash:</strong> Update hash in O(1) when sliding window: subtract outgoing char, add incoming char.',
            '<strong>Hash collision:</strong> Rabin-Karp verifies char-by-char on hash match — rare but necessary.',
            '<strong>When to use which:</strong> KMP for single pattern guaranteed O(n+m); Rabin-Karp for multiple patterns or average-case speed.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>KMP LPS construction:</strong> Use two pointers `len` (length of previous longest prefix suffix) and `i` scanning the pattern. If `pattern[i] == pattern[len]`, extend: `lps[i+1] = len+1`. On mismatch, shrink `len` via `lps[len]` until match or len=0. The LPS array tells us how much of the pattern we can reuse after a mismatch.</p>',
            '<p><strong>KMP search:</strong> Walk text with pointer `i`, pattern with `j`. On match, increment both. On mismatch with j>0, set `j = lps[j-1]` (never move i backwards). On mismatch with j=0, increment i. When j==m, pattern found at `i-j`.</p>',
            '<p><strong>Rabin-Karp rolling hash:</strong> Compute `hash(pattern)` and `hash(text[0..m-1])`. Slide window: `new_hash = (old_hash - text[i-m]*base^(m-1)) * base + text[i]`, all mod a large prime. On hash match, verify characters to avoid false positives from collisions.</p>'
          ],
          note: 'KMP never backtracks in the text — pointer i only moves forward. This is the key insight that guarantees O(n + m).'
        },
        {
          heading: 'Visual Walkthrough — KMP LPS & Search',
          code: `Pattern "ABABC" — build LPS:

  i=1: B≠A → lps[1]=0
  i=2: A==A → lps[2]=1
  i=3: B==B → lps[3]=2
  i=4: C≠A → len=lps[1]=0 → lps[4]=0

  LPS: [0, 0, 1, 2, 0]

Text "ABABDABABC" — search for "ABABC":

  Match ABAB at i=4, mismatch D vs C at j=4
  j = lps[3] = 2  (reuse "AB" prefix, don't restart text pointer)
  Continue matching → full match at index 5

Rabin-Karp rolling hash — text "ABCD", pattern "BC", base=31, mod=10^9+7:

  hash("BC") = (B*31 + C) mod M
  hash("AB") = window at i=0
  Slide to i=1: hash("BC") = (hash("AB") - A*31)*31 + C
  hash("BC") matches → verify chars → match at index 1`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'KMP (full LPS + search) & Rabin-Karp (rolling hash)',
            code: `from typing import List

# ── KMP: build LPS array ──
def build_lps(pattern: str) -> List[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0   # length of previous longest prefix suffix
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length > 0:
            length = lps[length - 1]   # fall back
        else:
            lps[i] = 0
            i += 1
    return lps

# ── KMP: search all occurrences ──
def kmp_search(text: str, pattern: str) -> List[int]:
    if not pattern:
        return []
    n, m = len(text), len(pattern)
    lps = build_lps(pattern)
    result = []
    i = j = 0
    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == m:
                result.append(i - m)
                j = lps[j - 1]   # continue searching
        elif j > 0:
            j = lps[j - 1]
        else:
            i += 1
    return result

# ── Rabin-Karp with rolling hash ──
def rabin_karp(text: str, pattern: str, base: int = 31,
               mod: int = 10**9 + 7) -> List[int]:
    n, m = len(text), len(pattern)
    if m == 0 or m > n:
        return []
    h = pow(base, m - 1, mod)
    p_hash = t_hash = 0
    for k in range(m):
        p_hash = (p_hash * base + ord(pattern[k])) % mod
        t_hash = (t_hash * base + ord(text[k])) % mod
    result = []
    for i in range(n - m + 1):
        if p_hash == t_hash:
            if text[i:i + m] == pattern:   # verify — collision guard
                result.append(i)
        if i < n - m:
            t_hash = (t_hash - ord(text[i]) * h) % mod
            t_hash = (t_hash * base + ord(text[i + m])) % mod
            t_hash = (t_hash + mod) % mod   # ensure positive
    return result

# Demo
pat = "ABABC"
print(build_lps(pat))                    # [0, 0, 1, 2, 0]
print(kmp_search("ABABDABABC", pat))      # [5]
print(rabin_karp("ABABDABABC", pat))       # [5]`,
            output: `[0, 0, 1, 2, 0]
[5]
[5]`,
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

    static int[] buildLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0, i = 1;
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
        return lps;
    }

    static List<Integer> kmpSearch(String text, String pattern) {
        List<Integer> result = new ArrayList<>();
        int n = text.length(), m = pattern.length();
        if (m == 0) return result;
        int[] lps = buildLPS(pattern);
        int i = 0, j = 0;
        while (i < n) {
            if (text.charAt(i) == pattern.charAt(j)) {
                i++; j++;
                if (j == m) {
                    result.add(i - m);
                    j = lps[j - 1];
                }
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        return result;
    }

    static List<Integer> rabinKarp(String text, String pattern) {
        int base = 31, mod = 1_000_000_007;
        int n = text.length(), m = pattern.length();
        List<Integer> result = new ArrayList<>();
        if (m == 0 || m > n) return result;
        long h = 1;
        for (int k = 0; k < m - 1; k++) h = (h * base) % mod;
        long pHash = 0, tHash = 0;
        for (int k = 0; k < m; k++) {
            pHash = (pHash * base + pattern.charAt(k)) % mod;
            tHash = (tHash * base + text.charAt(k)) % mod;
        }
        for (int i = 0; i <= n - m; i++) {
            if (pHash == tHash && text.substring(i, i + m).equals(pattern))
                result.add(i);
            if (i < n - m) {
                tHash = (tHash - text.charAt(i) * h % mod + mod) % mod;
                tHash = (tHash * base + text.charAt(i + m)) % mod;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String pat = "ABABC";
        System.out.println(Arrays.toString(buildLPS(pat)));
        System.out.println(kmpSearch("ABABDABABC", pat));
        System.out.println(rabinKarp("ABABDABABC", pat));
    }
}`,
            output: `[0, 0, 1, 2, 0]
[5]
[5]`,
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>LPS Step 1:</strong> Initialize `lps[0]=0`, `len=0`, `i=1`.',
            '<strong>LPS Step 2:</strong> If `pattern[i]==pattern[len]`, increment len, set `lps[i]=len`, i++.',
            '<strong>LPS Step 3:</strong> On mismatch: if len>0, `len=lps[len-1]`; else `lps[i]=0`, i++.',
            '<strong>KMP Search:</strong> On match, advance both pointers. On mismatch, only retreat j via LPS — i never goes backward.',
            '<strong>Rabin-Karp Step 1:</strong> Compute pattern hash and first window hash.',
            '<strong>Rabin-Karp Step 2:</strong> Slide window — subtract leading char × base^(m-1), multiply by base, add trailing char, mod prime.',
            '<strong>Rabin-Karp Step 3:</strong> On hash equality, verify substring char-by-char.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          table: {
            headers: ['Algorithm', 'Preprocess', 'Search', 'Space', 'Notes'],
            rows: [
              ['Naive', 'O(1)', 'O(n · m)', 'O(1)', 'Simple but slow on repetitive text'],
              ['KMP', 'O(m)', 'O(n)', 'O(m) LPS', 'Guaranteed linear, no backtracking'],
              ['Rabin-Karp', 'O(m)', 'O(n) avg', 'O(1)', 'O(n·m) worst case if all hashes collide'],
              ['Boyer-Moore', 'O(m + σ)', 'O(n) avg', 'O(m + σ)', 'Sublinear on large alphabets'],
              ['Z-Algorithm', 'O(m)', 'O(n + m)', 'O(m)', 'Alternative to KMP via Z-array']
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            '<strong>Off-by-one in LPS:</strong> Confusing 0-indexed lps[i] with 1-indexed definitions — <em>Fix:</em> lps[i] = length of proper prefix of pattern[0..i] that is also suffix.',
            '<strong>Moving text pointer back in KMP:</strong> Breaks O(n) guarantee — <em>Fix:</em> only j changes on mismatch via lps[j-1].',
            '<strong>Skipping hash verification in Rabin-Karp:</strong> False positives on collision — <em>Fix:</em> always verify `text[i:i+m] == pattern`.',
            '<strong>Negative hash modulo:</strong> `(a - b) % mod` can be negative in Python/Java — <em>Fix:</em> add mod before final mod.',
            '<strong>Wrong hash base:</strong> Base too small increases collisions — <em>Fix:</em> use base > alphabet size (31 for lowercase, 256 for ASCII).'
          ],
          code: `# Rabin-Karp — keep hash positive after subtraction
t_hash = (t_hash - ord(text[i]) * h) % mod
t_hash = (t_hash * base + ord(text[i + m])) % mod
t_hash = (t_hash + mod) % mod`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          list: [
            '<strong>Plagiarism detection:</strong> Rabin-Karp fingerprints document chunks for similarity search.',
            '<strong>DNA motif finding:</strong> KMP locates gene sequences in long genomes in linear time.',
            '<strong>Text editors (Ctrl+F):</strong> Boyer-Moore and KMP variants power find-in-file features.',
            '<strong>Intrusion detection:</strong> Pattern matching on network packet payloads.',
            '<strong>Search engines:</strong> Multi-pattern Rabin-Karp (Aho-Corasick extension) for keyword filtering.',
            '<strong>Data deduplication:</strong> Rolling hashes identify duplicate file blocks (rsync, backup systems).'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'If asked "find pattern in string" with O(n+m) requirement → KMP. Mention LPS construction first.',
            'Rabin-Karp shines for "find all occurrences of multiple patterns" — mention Aho-Corasick as follow-up.',
            'Walk through LPS for "ABABAC" on the whiteboard — interviewers love this concrete example.',
            'Always state: KMP is guaranteed O(n+m); Rabin-Karp is expected O(n+m) but worst-case O(nm) without verification.',
            'For repeated pattern in string (LeetCode 28), KMP is the optimal answer — naive is O(nm).',
            'Know when NOT to use these: very short patterns or single search → naive or built-in `str.find()` is fine.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            `Q1 (Medium): Build LPS for pattern "AABAACAAB". What is lps[8]?
Hint: Track len pointer; on mismatch fall back via lps[len-1].
Ans: lps = [0,1,0,1,2,0,1,2,3]. lps[8]=3 (prefix "AAB" matches suffix "AAB").`,
            `Q2 (Medium): KMP — find "ABA" in "ABABABA". All occurrence indices?
Hint: On full match, record i-m and set j=lps[j-1] to find overlapping matches.
Ans: [0, 2, 4]. Overlapping matches are KMP's strength over naive restart.`,
            `Q3 (Hard): Rabin-Karp — why verify after hash match? Give a collision example.
Hint: Different strings can have equal hash mod M (birthday paradox).
Ans: "abc" and "bca" may collide mod small prime; verification prevents false match. Always O(m) verify on hash hit.`
          ]
        }
      ]
    }
  }
};