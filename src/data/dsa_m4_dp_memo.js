// DSA Module 4: Dynamic Programming — Memoization (Linked-List-style tutorial)
export const dpMemoizationTopic = {
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
        headers: ['Problem', 'States', 'Time', 'Space', 'Notes'],
        rows: [
          ['Fibonacci', 'O(n)', 'O(n)', 'O(n)', 'vs O(2ⁿ) naive'],
          ['Climbing Stairs', 'O(n)', 'O(n)', 'O(n)', 'Same recurrence as fib'],
          ['House Robber', 'O(n)', 'O(n)', 'O(n)', 'take i or skip i'],
          ['Coin Change', 'O(amount)', 'O(amount · k)', 'O(amount)', 'k = number of coins'],
          ['0/1 Knapsack', 'O(n · W)', 'O(n · W)', 'O(n · W)', 'W = capacity'],
          ['LCS (top-down)', 'O(n · m)', 'O(n · m)', 'O(n · m)', 'stack depth O(n+m)'],
          ['Edit Distance', 'O(n · m)', 'O(n · m)', 'O(n · m)', '3 transitions per cell']
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
};
