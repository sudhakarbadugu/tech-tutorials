// DSA Module 4: Dynamic Programming — Tabulation (Linked-List-style tutorial)
export const dpTabulationTopic = {
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
        headers: ['Aspect', 'Memoization (top-down)', 'Tabulation (bottom-up)'],
        rows: [
          ['Control flow', 'Recursion + cache', 'Loops over states'],
          ['States computed', 'Only reachable', 'Usually all (or pruned loops)'],
          ['Stack risk', 'Yes (depth)', 'No'],
          ['Constants', 'Hash / call overhead', 'Tight array loops'],
          ['Space tricks', 'Harder', 'Rolling arrays natural'],
          ['Interview coding', 'Fast for awkward states', 'Fast when order is clear']
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
      text: '<strong>What it does:</strong> After filling values, walk backward to recover coins chosen, LCS string, or items picked.<br/><strong>Technique:</strong> From the answer cell, reverse the transition that produced the cell\'s value.'
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
        headers: ['Problem', 'Time', 'Space', 'Optimized space'],
        rows: [
          ['Climbing Stairs', 'O(n)', 'O(n)', 'O(1) two variables'],
          ['House Robber', 'O(n)', 'O(n)', 'O(1)'],
          ['Coin Change', 'O(amount · k)', 'O(amount)', 'O(amount)'],
          ['0/1 Knapsack', 'O(n · W)', 'O(n · W)', 'O(W) 1D backward'],
          ['LCS', 'O(n · m)', 'O(n · m)', 'O(min(n,m))'],
          ['Edit Distance', 'O(n · m)', 'O(n · m)', 'O(min(n,m))'],
          ['Unique Paths', 'O(m · n)', 'O(m · n)', 'O(n) one row']
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
};
