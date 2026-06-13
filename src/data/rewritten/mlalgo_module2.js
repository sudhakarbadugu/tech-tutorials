export const mlalgoModule2Structure = {
  module2: {
    title: 'Module 2: Design and Analysis of ML Algorithms',
    topics: [
      { id: 'sorting-algorithms', title: 'Sorting Algorithms' },
      { id: 'searching-algorithms', title: 'Searching Algorithms' },
      { id: 'graph-algorithms', title: 'Graph Algorithms' },
      { id: 'dynamic-programming', title: 'Dynamic Programming' },
      { id: 'greedy-algorithms', title: 'Greedy Algorithms' },
    ]
  }
};

export const mlalgoModule2Content = {
  module2: {
    'sorting-algorithms': {
      title: 'Sorting Algorithms',
      subtitle: 'Organizing data efficiently for search and analysis',
      sections: [
        {
          heading: 'What are Sorting Algorithms?',
          text: 'A <strong>sorting algorithm</strong> rearranges elements of a list into a specific order — typically ascending or descending. Sorting is one of the most fundamental operations in computer science and a prerequisite for many advanced algorithms.',
          list: [
            '<strong>Comparison-based sorts:</strong> Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort',
            '<strong>Non-comparison sorts:</strong> Counting Sort, Radix Sort, Bucket Sort — exploit data structure for linear time',
            '<strong>In-place sorts:</strong> Use O(1) extra space — Insertion Sort, Quick Sort, Heap Sort',
            '<strong>Stable sorts:</strong> Preserve relative order of equal elements — Merge Sort, Insertion Sort, Counting Sort',
            '<strong>Adaptive sorts:</strong> Faster on nearly-sorted data — Insertion Sort, Timsort (used in Python/Java)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The theoretical lower bound for comparison-based sorting is Ω(n log n), proven via decision tree analysis.',
          example: {
            title: 'Example: Sorting 5 elements with Merge Sort',
            code: `Array: [38, 27, 43, 3, 9, 82, 10]

Step 1 — Divide:
  [38, 27, 43, 3] | [9, 82, 10]
  [38,27] [43,3]  | [9,82] [10]
  [38][27][43][3] | [9][82][10]

Step 2 — Conquer (merge pairs):
  [27, 38] [3, 43] | [9, 82] [10]

Step 3 — Merge:
  [3, 27, 38, 43] | [9, 10, 82]

Final merge:
  [3, 9, 10, 27, 38, 43, 82]`,
            output: 'Merge Sort always runs in O(n log n) time, regardless of input order.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Choosing the right sort depends on your constraints: data size, memory, and whether stability matters.',
          table: {
            headers: ['Algorithm', 'Best Time', 'Average Time', 'Worst Time', 'Space', 'Stable'],
            rows: [
              ['Bubble Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes'],
              ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes'],
              ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes'],
              ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'No'],
              ['Heap Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'No'],
              ['Counting Sort', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'O(k)', 'Yes']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Always using Quick Sort because it is "fastest" — it degrades to O(n²) on already-sorted or nearly-sorted input with poor pivot choice (fix: use randomized pivot or median-of-three)',
            'Mistake 2: Using O(n²) sorts on large datasets where O(n log n) is available (fix: for n > 1000, prefer Merge Sort, Heap Sort, or built-in Timsort)',
            'Mistake 3: Ignoring stability when sorting records by multiple keys (fix: use Merge Sort or stable sorts when preserving order of equal keys matters)',
            'Mistake 4: Forgetting that non-comparison sorts (Counting, Radix) require integer keys in a limited range (fix: verify data constraints before using linear-time sorts)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sorting powers nearly every system that processes ordered data.',
          list: [
            '<strong>Databases:</strong> ORDER BY queries use optimized sorting (often external merge sort for large datasets)',
            '<strong>Search engines:</strong> Results ranked by relevance score are sorted before being returned to the user',
            '<strong>Data preprocessing:</strong> Many ML algorithms require sorted data (decision tree splits, percentile calculations)',
            '<strong>File systems:</strong> Directory listings, index structures (B-trees) maintain sorted order for fast lookup',
            '<strong>E-commerce:</strong> Product listings sorted by price, rating, or popularity use hybrid sorting strategies'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Comparison-based sorting has a theoretical lower bound of Ω(n log n)',
            'Merge Sort is stable and predictable but uses O(n) extra space',
            'Quick Sort is usually fastest in practice but needs careful pivot selection',
            'Heap Sort is in-place and guaranteed O(n log n) but not stable',
            'Non-comparison sorts (Counting, Radix) can achieve O(n) for structured data',
            'Stability matters when sorting records by multiple fields'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Which sorting algorithm is stable, comparison-based, and guaranteed O(n log n) in all cases?\nAns: Merge Sort (Heap Sort is also guaranteed O(n log n) but is not stable).',
            'Q2: Why does Quick Sort perform poorly on already-sorted input with the first-element pivot strategy?\nAns: The partition creates highly unbalanced splits (one element vs n-1), leading to O(n²) recursion depth.',
            'Q3: When would you choose Counting Sort over Merge Sort?\nAns: When elements are integers in a small, known range (e.g., exam scores 0-100), Counting Sort runs in O(n + k) with O(k) space.'
          ]
        }
      ]
    },
    'searching-algorithms': {
      title: 'Searching Algorithms',
      subtitle: 'Finding elements and patterns in data structures',
      sections: [
        {
          heading: 'What are Searching Algorithms?',
          text: 'A <strong>searching algorithm</strong> retrieves information stored within a data structure. The efficiency of search depends heavily on whether the data is sorted and what structure holds it.',
          list: [
            '<strong>Linear Search:</strong> Check every element sequentially — O(n) time, works on any structure',
            '<strong>Binary Search:</strong> Divide sorted array in half repeatedly — O(log n) time, requires sorted data',
            '<strong>Interpolation Search:</strong> Estimate position using value distribution — O(log log n) for uniform data',
            '<strong>Hash-based Search:</strong> Direct address lookup via hash function — O(1) average, requires hash table',
            '<strong>Tree Search:</strong> BST search, Trie search, B-Tree search — O(log n) to O(h) depending on tree balance'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Binary search halves the search space each step. After k steps, the remaining space is n / 2ᵏ.',
          example: {
            title: 'Example: Binary Search on a sorted array',
            code: 'Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nTarget: 23\n\nStep 1: low=0, high=9, mid=4 → arr[4]=16\n  23 > 16 → search right half\n\nStep 2: low=5, high=9, mid=7 → arr[7]=56\n  23 < 56 → search left half\n\nStep 3: low=5, high=6, mid=5 → arr[5]=23\n  FOUND at index 5\n\nComparisons: 3 (vs 6 for linear search)',
            output: 'Binary search finds the target in O(log n) = O(log 10) ≈ 3-4 steps.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'The right search method depends on data organization, size, and whether the data is static or dynamic.',
          table: {
            headers: ['Algorithm', 'Requirement', 'Time', 'Space', 'Best For'],
            rows: [
              ['Linear Search', 'None', 'O(n)', 'O(1)', 'Small or unsorted data'],
              ['Binary Search', 'Sorted array', 'O(log n)', 'O(1)', 'Static sorted data'],
              ['Interpolation Search', 'Sorted + uniform', 'O(log log n)*', 'O(1)', 'Uniformly distributed keys'],
              ['Hash Search', 'Hash table built', 'O(1) avg', 'O(n)', 'Frequent lookups, dynamic data'],
              ['BST Search', 'Balanced BST', 'O(log n)', 'O(1)', 'Dynamic ordered data'],
              ['B-Tree Search', 'B-Tree index', 'O(log n)', 'O(1)', 'Disk-based databases']
            ]
          },
          note: '*Interpolation Search is O(n) worst case for non-uniform distributions.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using linear search on large sorted datasets instead of binary search (fix: sort once if queries are frequent, or use binary search directly on sorted data)',
            'Mistake 2: Forgetting that binary search requires the array to be sorted (fix: always verify sortedness or use a self-balancing BST for dynamic data)',
            'Mistake 3: Off-by-one errors in binary search boundaries (fix: use the invariant low ≤ target ≤ high, and test with arrays of size 0, 1, 2, and powers of 2)',
            'Mistake 4: Rebuilding a hash table for every search instead of amortizing build cost (fix: build the hash table once for O(n) preprocessing, then enjoy O(1) queries)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Search is the backbone of information retrieval and database systems.',
          list: [
            '<strong>Databases:</strong> B-Trees and B+ Trees power indexed lookups in PostgreSQL, MySQL, and Oracle',
            '<strong>Compilers:</strong> Symbol tables use hash maps for O(1) variable name resolution',
            '<strong>Web browsers:</strong> DNS resolution uses hierarchical search; autocomplete uses Trie prefix search',
            '<strong>Version control:</strong> Git uses binary search on commit history (git bisect) to find bug-introducing commits',
            '<strong>Machine learning:</strong> K-Nearest Neighbor requires efficient spatial search (KD-Trees, Ball Trees)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Linear Search is universal but slow: O(n)',
            'Binary Search is fast but needs sorted data: O(log n)',
            'Hash Search is fastest on average: O(1), but needs preprocessing and extra space',
            'Tree searches (BST, B-Tree) handle dynamic ordered data efficiently',
            'The search structure you choose should match your data characteristics and query pattern'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: You have a sorted array of 1 million integers. What is the maximum number of comparisons binary search needs?\nAns: ⌈log₂(1,000,000)⌉ = 20 comparisons.',
            'Q2: Why is hash search O(1) average but not guaranteed O(1)?\nAns: Hash collisions can cause multiple keys to map to the same bucket, degrading to O(n) in the worst case.',
            'Q3: When would you prefer a B-Tree over a hash table for search?\nAns: When you need range queries, ordered traversal, or disk-based storage — B-Trees maintain order; hash tables do not.'
          ]
        }
      ]
    },
    'graph-algorithms': {
      title: 'Graph Algorithms',
      subtitle: 'Navigating networks, paths, and relationships',
      sections: [
        {
          heading: 'What are Graph Algorithms?',
          text: 'A <strong>graph</strong> is a collection of vertices (nodes) connected by edges. Graph algorithms solve fundamental problems like finding paths, detecting cycles, finding minimum spanning trees, and determining connectivity.',
          list: [
            '<strong>Graph representations:</strong> Adjacency matrix (dense), adjacency list (sparse), edge list',
            '<strong>Traversal algorithms:</strong> Breadth-First Search (BFS), Depth-First Search (DFS) — explore all reachable nodes',
            '<strong>Shortest path:</strong> Dijkstra (non-negative weights), Bellman-Ford (handles negatives), Floyd-Warshall (all-pairs)',
            '<strong>Minimum Spanning Tree:</strong> Prim\'s and Kruskal\'s — connect all nodes with minimum total edge weight',
            '<strong>Topological sort:</strong> Order nodes such that all edges go forward — used in task scheduling and dependency resolution'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dijkstra\'s algorithm greedily expands the closest unvisited node. It maintains a priority queue of tentative distances.',
          example: {
            title: 'Example: Dijkstra\'s Shortest Path',
            code: 'Graph: A --4--> B --1--> C\n      |         ↑\n      2         3\n      ↓         |\n      D --5----─┘\n\nFrom A to all nodes:\n\nInit: dist[A]=0, dist[others]=∞\n\nStep 1: Visit A\n  Update: dist[B]=4, dist[D]=2\n\nStep 2: Visit D (closest unvisited)\n  Update: dist[C] via D = 2+5 = 7\n\nStep 3: Visit B\n  Update: dist[C] via B = 4+1 = 5\n\nStep 4: Visit C\n\nFinal distances: A=0, B=4, C=5, D=2',
            output: 'Dijkstra guarantees shortest paths for graphs with non-negative edge weights.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Graph algorithms vary in what they optimize, what constraints they handle, and how they traverse the structure.',
          table: {
            headers: ['Algorithm', 'Problem', 'Time', 'Space', 'Constraints'],
            rows: [
              ['BFS', 'Shortest path (unweighted)', 'O(V + E)', 'O(V)', 'Unweighted edges'],
              ['DFS', 'Connectivity, cycles, topo sort', 'O(V + E)', 'O(V)', 'Recursive stack or explicit'],
              ['Dijkstra', 'Shortest path (weighted)', 'O(E + V log V)*', 'O(V)', 'Non-negative weights'],
              ['Bellman-Ford', 'Shortest path (weighted)', 'O(V × E)', 'O(V)', 'Handles negative weights'],
              ['Floyd-Warshall', 'All-pairs shortest path', 'O(V³)', 'O(V²)', 'Small dense graphs'],
              ['Prim\'s', 'Minimum Spanning Tree', 'O(E log V)', 'O(V)', 'Connected weighted graph'],
              ['Kruskal\'s', 'Minimum Spanning Tree', 'O(E log E)', 'O(V)', 'Connected weighted graph']
            ]
          },
          note: '*Using a binary heap priority queue. Fibonacci heap achieves O(E + V log V) amortized.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running Dijkstra on graphs with negative edge weights (fix: use Bellman-Ford instead; Dijkstra\'s greedy assumption breaks with negatives)',
            'Mistake 2: Using adjacency matrix for sparse graphs (fix: use adjacency list when E << V² to save O(V²) space and iteration time)',
            'Mistake 3: Forgetting to mark nodes as visited in BFS/DFS, causing infinite loops in cyclic graphs (fix: maintain a visited set; for DFS on directed graphs, also track the recursion stack for cycle detection)',
            'Mistake 4: Assuming all nodes are reachable from a single source (fix: in disconnected graphs, run BFS/DFS from every unvisited node to discover all components)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Graphs model relationships, and graph algorithms solve problems across every domain.',
          list: [
            '<strong>Navigation/GPS:</strong> Dijkstra and A* find shortest driving routes; road networks are weighted graphs with distance/time as edge weights',
            '<strong>Social networks:</strong> Friend recommendations use BFS to find shortest-path connections; community detection uses graph clustering',
            '<strong>Network routing:</strong> Internet routers use shortest-path algorithms (OSPF, BGP) to determine packet forwarding paths',
            '<strong>Dependency management:</strong> Package managers (npm, pip) use topological sort to install dependencies in valid order',
            '<strong>ML pipelines:</strong> Computation graphs in TensorFlow/PyTorch use topological sort to schedule operations during backpropagation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BFS finds shortest paths in unweighted graphs; DFS explores deeply and detects cycles',
            'Dijkstra is the go-to for weighted shortest paths, but only with non-negative weights',
            'Bellman-Ford handles negative weights and detects negative cycles',
            'Prim\'s and Kruskal\'s find minimum spanning trees for connected weighted graphs',
            'Topological sort orders nodes for dependency resolution and scheduling',
            'Choose adjacency list for sparse graphs, matrix for dense graphs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Dijkstra fail with negative edge weights?\nAns: Dijkstra greedily commits to the shortest known distance; a later negative edge could reveal a shorter path that was already finalized.',
            'Q2: What is the time complexity of BFS on a graph with V vertices and E edges?\nAns: O(V + E) — each vertex and edge is processed at most once.',
            'Q3: When would you use Floyd-Warshall over running Dijkstra from every node?\nAns: For small dense graphs where the O(V³) all-pairs computation is simpler to implement and the graph fits in memory.'
          ]
        }
      ]
    },
    'dynamic-programming': {
      title: 'Dynamic Programming',
      subtitle: 'Solving complex problems by breaking them into overlapping subproblems',
      sections: [
        {
          heading: 'What is Dynamic Programming?',
          text: '<strong>Dynamic Programming (DP)</strong> is a method for solving complex problems by breaking them down into simpler, overlapping subproblems, solving each subproblem only once, and storing their solutions — typically in a table — to avoid redundant computation.',
          list: [
            '<strong>Optimal substructure:</strong> The optimal solution to the problem can be constructed from optimal solutions to its subproblems',
            '<strong>Overlapping subproblems:</strong> The same subproblems are solved multiple times in a naive recursive approach',
            '<strong>Memoization (top-down):</strong> Recursive approach that caches results before returning them',
            '<strong>Tabulation (bottom-up):</strong> Iteratively fill a table from the smallest subproblems upward',
            '<strong>Space optimization:</strong> Often only need the previous row or a few variables instead of the full table'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Fibonacci sequence is the classic DP example. The recurrence F(n) = F(n-1) + F(n-2) has overlapping subproblems that DP eliminates.',
          example: {
            title: 'Example: Fibonacci with DP (bottom-up)',
            code: 'Naive recursive:\n  F(5) = F(4) + F(3)\n       = (F(3)+F(2)) + (F(2)+F(1))\n       → F(2) computed 3 times!\n       Time: O(2ⁿ)\n\nDP (tabulation):\n  dp[0] = 0, dp[1] = 1\n  for i = 2 to n:\n    dp[i] = dp[i-1] + dp[i-2]\n\n  F(5):\n    dp[2]=1, dp[3]=2, dp[4]=3, dp[5]=5\n\nTime: O(n), Space: O(n) → optimizable to O(1)',
            output: 'DP reduces exponential time to linear by storing and reusing subproblem solutions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Memoization and tabulation are the two implementation strategies. Each has trade-offs.',
          table: {
            headers: ['Aspect', 'Memoization (Top-Down)', 'Tabulation (Bottom-Up)'],
            rows: [
              ['Approach', 'Recursive + cache', 'Iterative table filling'],
              ['Solves', 'Only subproblems needed', 'All subproblems up to n'],
              ['Call stack', 'Uses recursion depth', 'No recursion, no stack overflow risk'],
              ['Ease of writing', 'Often more intuitive', 'Requires thinking in reverse order'],
              ['Constant factors', 'Slightly slower (function calls)', 'Faster in practice'],
              ['When preferred', 'Sparse subproblem space', 'All subproblems needed anyway']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using DP when greedy would suffice (fix: verify optimal substructure and overlapping subproblems; if subproblems do not overlap, divide-and-conquer is cleaner)',
            'Mistake 2: Forgetting to initialize base cases in tabulation (fix: always define dp[0], dp[1], or the smallest subproblem values before the main loop)',
            'Mistake 3: Recursion depth overflow in memoization for large n (fix: use tabulation for n > 10⁴, or increase recursion limit with sys.setrecursionlimit in Python)',
            'Mistake 4: Not optimizing space when only previous states are needed (fix: for 1D recurrence, keep only last 2-3 values; for 2D, keep only the previous row)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'DP appears wherever optimal sequences, alignments, or resource allocations must be computed.',
          list: [
            '<strong>Sequence alignment:</strong> DNA/protein alignment in bioinformatics uses Needleman-Wunsch and Smith-Waterman (edit distance variants)',
            '<strong>Knapsack problems:</strong> Resource allocation, cargo loading, and portfolio optimization under budget constraints',
            '<strong>Shortest paths:</strong> Bellman-Ford and Floyd-Warshall are DP algorithms on graphs',
            '<strong>Natural language processing:</strong> Viterbi algorithm for Hidden Markov Models (part-of-speech tagging, speech recognition)',
            '<strong>Compiler optimization:</strong> Register allocation, instruction scheduling, and code generation use DP for optimal allocation',
            '<strong>Finance:</strong> Option pricing (binomial trees) and dynamic asset allocation use backward induction — a form of DP'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'DP requires two properties: optimal substructure and overlapping subproblems',
            'Memoization = top-down recursive with cache; tabulation = bottom-up iterative with table',
            'Tabulation is generally faster and avoids recursion limits; memoization is more intuitive',
            'Space can often be reduced from O(n) or O(n²) to O(1) or O(n) by keeping only needed previous states',
            'Classic DP problems: Fibonacci, knapsack, longest common subsequence, edit distance, coin change'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the two essential properties a problem must have to be solvable by dynamic programming?\nAns: Optimal substructure and overlapping subproblems.',
            'Q2: In the 0/1 Knapsack problem, why can we not use a greedy approach?\nAns: The greedy choice (highest value-to-weight ratio) does not guarantee an optimal total because items are indivisible — a locally optimal choice may prevent a better global combination.',
            'Q3: How do you reduce space for Fibonacci DP from O(n) to O(1)?\nAns: Keep only the last two values: prev2 and prev1. Iterate and update: current = prev1 + prev2, then shift prev2 = prev1, prev1 = current.'
          ]
        }
      ]
    },
    'greedy-algorithms': {
      title: 'Greedy Algorithms',
      subtitle: 'Making locally optimal choices to find globally optimal solutions',
      sections: [
        {
          heading: 'What are Greedy Algorithms?',
          text: 'A <strong>greedy algorithm</strong> makes the locally optimal choice at each step with the hope of finding a global optimum. It never reconsiders past decisions — once a choice is made, it is final.',
          list: [
            '<strong>Greedy choice property:</strong> A global optimum can be reached by choosing the local optimum at each step',
            '<strong>Optimal substructure:</strong> The problem\'s optimal solution contains optimal solutions to subproblems (same as DP)',
            '<strong>No backtracking:</strong> Decisions are irrevocable; the algorithm does not reconsider earlier choices',
            '<strong>Fast and simple:</strong> Usually easier to implement and faster than DP or exhaustive search',
            '<strong>Not always optimal:</strong> Many problems (like 0/1 Knapsack) cannot be solved optimally with a greedy approach'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dijkstra\'s algorithm is a greedy algorithm: at each step, it selects the unvisited node with the smallest tentative distance.',
          example: {
            title: 'Example: Activity Selection (classic greedy)',
            code: 'Activities (start, finish):\n  A: (1, 4), B: (3, 5), C: (0, 6)\n  D: (5, 7), E: (3, 8), F: (5, 9)\n  G: (6, 10), H: (8, 11), I: (8, 12)\n\nStep 1: Sort by finish time\n  A(1,4), B(3,5), D(5,7), H(8,11)\n\nStep 2: Greedily pick compatible activities\n  Pick A (finishes at 4)\n    → Skip B (starts at 3 < 4), skip C\n  Pick D (starts at 5 ≥ 4)\n    → Skip E, F\n  Pick H (starts at 8 ≥ 7)\n    → Skip G (starts 6 < 7), skip I\n\nResult: {A, D, H} — 3 activities, maximum possible.',
            output: 'Sorting by finish time and greedily picking the next compatible activity yields the optimal solution for activity selection.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Greedy and DP both use optimal substructure, but differ in how they make and use choices.',
          table: {
            headers: ['Aspect', 'Greedy', 'Dynamic Programming'],
            rows: [
              ['Decision style', 'Makes one irrevocable choice per step', 'Explores all possibilities, stores results'],
              ['Backtracking', 'None — decisions are final', 'Implicitly considers all via table'],
              ['Speed', 'Usually faster (often O(n log n))', 'Slower (often polynomial but higher degree)'],
              ['Optimality guarantee', 'Only for problems with greedy choice property', 'Guaranteed for all problems with optimal substructure'],
              ['Ease of proof', 'Harder — must prove greedy choice is safe', 'Easier — relies on recurrence relation'],
              ['Examples', 'Dijkstra, Huffman coding, MST (Prim/Kruskal)', 'Knapsack, LCS, edit distance, Floyd-Warshall']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming greedy always gives the optimal solution (fix: always prove or test the greedy choice property; for 0/1 Knapsack, greedy fails — use DP instead)',
            'Mistake 2: Using greedy when the problem requires exploring combinations (fix: if a locally optimal choice can block a better global solution, use DP or backtracking)',
            'Mistake 3: Choosing the wrong greedy criterion (fix: for activity selection, sort by finish time, not start time or duration — finish time is what enables the greedy proof)',
            'Mistake 4: Not handling ties or edge cases in the greedy choice (fix: when multiple candidates have the same greedy score, consider tie-breaking rules and test thoroughly)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Greedy algorithms shine when a simple, fast decision rule happens to be provably optimal.',
          list: [
            '<strong>Data compression:</strong> Huffman coding greedily merges the two least frequent symbols to build an optimal prefix code',
            '<strong>Minimum spanning trees:</strong> Prim\'s and Kruskal\'s are greedy — always add the cheapest edge that does not form a cycle',
            '<strong>Coin change (special cases):</strong> With canonical coin systems (US coins), greedy gives optimal change; in general it does not',
            '<strong>Task scheduling:</strong> Shortest-job-first minimizes average waiting time; earliest-deadline-first is optimal for single-machine scheduling',
            '<strong>Load balancing:</strong> Greedy assignment of tasks to the least-loaded server is simple and often near-optimal'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Greedy algorithms make locally optimal, irrevocable choices at each step',
            'They require the greedy choice property and optimal substructure to be optimal',
            'Greedy is usually faster and simpler than DP, but not universally applicable',
            'Classic greedy successes: Dijkstra, MST, Huffman coding, activity selection',
            'When greedy fails, switch to dynamic programming or backtracking'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the greedy approach fail for the 0/1 Knapsack problem?\nAns: Because items are indivisible; choosing the highest value-to-weight ratio item may prevent fitting a better combination of smaller items.',
            'Q2: What two properties must a problem have for a greedy algorithm to produce an optimal solution?\nAns: Greedy choice property (local optimum leads to global optimum) and optimal substructure.',
            'Q3: In activity selection, why is sorting by finish time better than sorting by start time?\nAns: The activity that finishes earliest leaves the maximum remaining time for subsequent activities — this enables the greedy proof of optimality.'
          ]
        }
      ]
    }
  }
};
