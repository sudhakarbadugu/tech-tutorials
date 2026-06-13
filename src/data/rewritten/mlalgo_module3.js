export const mlalgoModule3Structure = {
  module3: {
    title: 'Module 3: Algorithm Design Paradigms',
    topics: [
      { id: 'divide-and-conquer', title: 'Divide and Conquer' },
      { id: 'greedy-algorithms', title: 'Greedy Algorithms' },
      { id: 'dynamic-programming', title: 'Dynamic Programming' },
      { id: 'graph-algorithms', title: 'Graph Algorithms' },
      { id: 'string-algorithms', title: 'String Algorithms' },
    ]
  }
};

export const mlalgoModule3Content = {
  module3: {
    'divide-and-conquer': {
      title: 'Divide and Conquer',
      subtitle: 'Break problems into smaller pieces, solve them recursively, and combine the results',
      sections: [
        {
          heading: 'What is Divide and Conquer?',
          text: '<strong>Divide and Conquer</strong> is an algorithmic paradigm that solves a problem by breaking it into smaller sub-problems of the same type, solving each sub-problem independently, and combining their solutions to form the final answer. It is the foundation of efficient sorting, searching, and many ML preprocessing algorithms.',
          list: [
            '<strong>Divide:</strong> Break the problem into smaller, independent sub-problems',
            '<strong>Conquer:</strong> Solve each sub-problem recursively (or directly if small enough)',
            '<strong>Combine:</strong> Merge the sub-problem solutions into the overall solution',
            'Works best when sub-problems are independent and of similar size'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The time complexity of divide-and-conquer algorithms is governed by the recurrence relation known as the <strong>Master Theorem</strong>.',
          example: {
            title: 'Master Theorem',
            code: `Recurrence form:
  T(n) = a · T(n/b) + O(n^d)

Where:
  a = number of sub-problems
  b = factor by which problem size shrinks
  d = exponent of combine cost

Cases:
  If a < b^d:  T(n) = O(n^d)
  If a = b^d:  T(n) = O(n^d · log n)
  If a > b^d:  T(n) = O(n^(log_b a))`,
            output: 'The Master Theorem gives complexity without solving the recurrence explicitly.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Divide and Conquer is often compared with other algorithmic paradigms.',
          table: {
            headers: ['Paradigm', 'Sub-problems', 'Overlap', 'Approach', 'Example'],
            rows: [
              ['Divide and Conquer', 'Independent', 'No overlap', 'Top-down recursion', 'Merge sort, Quick sort'],
              ['Dynamic Programming', 'Overlapping', 'Sub-problems reused', 'Bottom-up or memoization', 'Fibonacci, knapsack'],
              ['Greedy', 'Single choice', 'No sub-problems', 'Local optimal choice', 'Huffman coding, Dijkstra'],
              ['Brute Force', 'All possibilities', 'N/A', 'Exhaustive enumeration', 'Naive string search']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using divide and conquer when sub-problems overlap (fix: use dynamic programming with memoization instead)',
            'Mistake 2: Ignoring the combine step cost (fix: the combine step must be efficient, ideally O(n) or O(n log n))',
            'Mistake 3: Recursing too deep for small inputs (fix: switch to iterative or direct solution below a threshold)',
            'Mistake 4: Assuming all divide-and-conquer algorithms are O(n log n) (fix: apply the Master Theorem carefully — matrix multiplication via Strassen is O(n^2.81))'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Divide and Conquer powers many machine learning and systems algorithms.',
          list: [
            '<strong>Merge Sort / Quick Sort:</strong> Standard sorting for dataset preparation; quick sort is the default in most standard libraries',
            '<strong>Fast Fourier Transform (FFT):</strong> Divides DFT into smaller DFTs — O(n log n) instead of O(n²) — critical for signal processing and spectrogram generation',
            '<strong>Strassen Matrix Multiplication:</strong> Reduces complexity from O(n³) to O(n^2.81); used in large-scale linear algebra for ML',
            '<strong>Closest Pair of Points:</strong> O(n log n) algorithm for finding nearest neighbors in 2D space — foundational for geometric ML',
            '<strong>K-D Tree Construction:</strong> Divide-and-conquer spatial partitioning enables fast nearest-neighbor search in high dimensions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Divide and Conquer breaks a problem into independent sub-problems of the same type',
            'The Master Theorem determines complexity from the recurrence T(n) = aT(n/b) + O(n^d)',
            'Merge sort and quick sort are classic O(n log n) divide-and-conquer sorting algorithms',
            'FFT uses divide and conquer to achieve O(n log n) for the Discrete Fourier Transform',
            'Use divide and conquer only when sub-problems do not overlap and combining is efficient'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the three steps of divide and conquer?\nAns: Divide the problem into sub-problems, conquer each sub-problem recursively, and combine the results.',
            'Q2: What is the time complexity of merge sort using the Master Theorem?\nAns: T(n) = 2T(n/2) + O(n), so a = b^d → O(n log n).',
            'Q3: Why does quick sort degrade to O(n²) in the worst case?\nAns: When the pivot consistently partitions into highly unbalanced sub-arrays (e.g., already sorted input with first-element pivot).'
          ]
        }
      ]
    },
    'greedy-algorithms': {
      title: 'Greedy Algorithms',
      subtitle: 'Make the locally optimal choice at each step and hope it leads to a global optimum',
      sections: [
        {
          heading: 'What is a Greedy Algorithm?',
          text: 'A <strong>greedy algorithm</strong> builds a solution piece by piece, always choosing the next piece that offers the most immediate benefit. It never reconsiders past choices. Greedy algorithms are simple, fast, and often produce optimal or near-optimal solutions for problems with the <strong>greedy-choice property</strong> and <strong>optimal substructure</strong>.',
          list: [
            '<strong>Greedy-choice property:</strong> A locally optimal choice leads to a globally optimal solution',
            '<strong>Optimal substructure:</strong> An optimal solution contains optimal solutions to sub-problems',
            'Fast and easy to implement — often the first approach to try',
            'Does not backtrack or reconsider decisions once made'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Greedy algorithms select the next element based on a <strong>cost or benefit heuristic</strong> that is locally optimal.',
          example: {
            title: 'Activity Selection Problem',
            code: `Problem: Select maximum non-overlapping activities

Greedy Rule: Always pick the activity with
  the EARLIEST FINISH TIME that does not
  conflict with already selected activities.

Example activities (start, finish):
  (1, 4), (3, 5), (0, 6), (5, 7), (3, 8)

Step 1: Pick (1, 4) — earliest finish = 4
Step 2: Skip (3, 5) — overlaps with (1, 4)
Step 3: Skip (0, 6) — overlaps
Step 4: Pick (5, 7) — starts at 5 ≥ 4
Step 5: Skip (3, 8) — overlaps

Result: {(1, 4), (5, 7)} — 2 activities`,
            output: 'The earliest-finish greedy rule guarantees the maximum number of compatible activities.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Greedy algorithms differ from dynamic programming and brute force in fundamental ways.',
          table: {
            headers: ['Approach', 'Decision Style', 'Backtracking', 'Optimality', 'Speed'],
            rows: [
              ['Greedy', 'One local choice per step', 'Never', 'Optimal only for specific problems', 'Fast — usually O(n log n) or O(n)'],
              ['Dynamic Programming', 'Considers all sub-problem choices', 'Implicit via memoization', 'Optimal when substructure holds', 'Slower — polynomial but higher constant'],
              ['Brute Force', 'Tries all possibilities', 'Always', 'Always optimal', 'Exponential — impractical for large n'],
              ['Backtracking', 'Builds and abandons partial solutions', 'Yes — undoes bad choices', 'Optimal', 'Exponential in worst case']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying greedy to problems where local choices do not lead to global optima (fix: verify the greedy-choice property mathematically before using)',
            'Mistake 2: Assuming greedy always gives the best solution (fix: for the 0/1 knapsack problem, greedy fails — use dynamic programming instead)',
            'Mistake 3: Choosing the wrong greedy criterion (fix: in activity selection, earliest finish works; earliest start or shortest duration do not)',
            'Mistake 4: Not considering tie-breaking rules (fix: when multiple candidates have equal local cost, the choice can affect the final result)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Greedy algorithms are widely used in machine learning and systems.',
          list: [
            '<strong>Huffman Coding:</strong> Greedy construction of a prefix-free binary tree for lossless data compression — used in ZIP and JPEG',
            '<strong>Dijkstra Shortest Path:</strong> Greedy selection of the minimum-distance vertex — O((V+E) log V) with a priority queue',
            '<strong>Kruskal Minimum Spanning Tree:</strong> Greedily adds the cheapest edge that does not form a cycle — used in network design',
            '<strong>Feature Selection (Greedy Forward):</strong> Iteratively adds the feature that most improves model performance — common in high-dimensional ML',
            '<strong>Gradient Boosting:</strong> At each iteration, greedily adds the weak learner that most reduces the residual loss'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Greedy algorithms make the locally optimal choice at each step without backtracking',
            'They work only when the problem has the greedy-choice property and optimal substructure',
            'Activity selection, Huffman coding, Dijkstra, and Kruskal are classic greedy algorithms',
            'Greedy is fast but not always optimal — 0/1 knapsack requires dynamic programming',
            'In ML, greedy feature selection and gradient boosting use greedy strategies'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What two properties must a problem have for a greedy algorithm to be optimal?\nAns: The greedy-choice property and optimal substructure.',
            'Q2: Why does the greedy approach fail for the 0/1 knapsack problem?\nAns: Because choosing the highest value-to-weight ratio first can block a better overall combination of items.',
            'Q3: What is the time complexity of Dijkstra algorithm with a binary heap?\nAns: O((V + E) log V), where V is vertices and E is edges.'
          ]
        }
      ]
    },
    'dynamic-programming': {
      title: 'Dynamic Programming',
      subtitle: 'Solve complex problems by breaking them into overlapping sub-problems and storing their solutions',
      sections: [
        {
          heading: 'What is Dynamic Programming?',
          text: '<strong>Dynamic Programming (DP)</strong> is a method for solving complex problems by breaking them down into simpler, overlapping sub-problems, solving each sub-problem only once, and storing the result for future reuse. It is the algorithmic backbone of many optimization problems in machine learning, bioinformatics, and operations research.',
          list: [
            '<strong>Optimal substructure:</strong> The optimal solution can be constructed from optimal solutions to sub-problems',
            '<strong>Overlapping sub-problems:</strong> The same sub-problems are solved multiple times in a naive recursive approach',
            '<strong>Memoization:</strong> Top-down approach — cache results of recursive calls',
            '<strong>Tabulation:</strong> Bottom-up approach — fill a table iteratively from base cases'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Fibonacci sequence illustrates the power of DP. Naive recursion is exponential; DP reduces it to linear time.',
          example: {
            title: 'Fibonacci — Recursive vs DP',
            code: `Naive Recursion:
  fib(n) = fib(n-1) + fib(n-2)
  T(n) = O(2^n) — exponential!

Memoization (Top-Down):
  memo = {}
  fib(n):
    if n in memo: return memo[n]
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
  T(n) = O(n), Space = O(n)

Tabulation (Bottom-Up):
  dp[0] = 0, dp[1] = 1
  for i = 2 to n:
    dp[i] = dp[i-1] + dp[i-2]
  T(n) = O(n), Space = O(n) → can reduce to O(1)`,
            output: 'DP reduces time from exponential to linear by avoiding redundant computation.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Memoization and tabulation are the two implementation styles of DP.',
          table: {
            headers: ['Aspect', 'Memoization', 'Tabulation'],
            rows: [
              ['Approach', 'Top-down (recursive)', 'Bottom-up (iterative)'],
              ['State computation', 'On demand — only needed states', 'All states, in order'],
              ['Ease of implementation', 'Often closer to the recursive formula', 'Requires ordering states correctly'],
              ['Stack overflow risk', 'Yes — recursion depth', 'No — iterative'],
              ['Overhead', 'Function call overhead', 'Loop overhead, but faster in practice'],
              ['When to use', 'When not all states are needed', 'When most states are needed']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using naive recursion instead of DP for problems with overlapping sub-problems (fix: add a memo table or switch to tabulation)',
            'Mistake 2: Incorrect state definition — not capturing all dimensions needed (fix: if the recurrence needs both index and remaining capacity, the DP table must be 2D)',
            'Mistake 3: Off-by-one errors in tabulation base cases (fix: carefully initialize dp[0], dp[1], etc., and verify small examples by hand)',
            'Mistake 4: Not optimizing space when possible (fix: many DP problems only need the previous row — reduce space from O(n²) to O(n) or O(1))'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Dynamic programming is essential across machine learning and adjacent fields.',
          list: [
            '<strong>0/1 Knapsack:</strong> Select items with maximum value without exceeding weight capacity — foundational for resource allocation',
            '<strong>Longest Common Subsequence (LCS):</strong> Measures similarity between sequences — used in diff tools, DNA alignment, and version control',
            '<strong>Edit Distance (Levenshtein):</strong> Minimum operations to transform one string into another — used in spell checking and OCR correction',
            '<strong>Viterbi Algorithm:</strong> DP for finding the most likely sequence of hidden states in HMMs — core to speech recognition and NLP tagging',
            '<strong>Sequence Alignment:</strong> Needleman-Wunsch and Smith-Waterman algorithms use DP for protein and DNA sequence matching in bioinformatics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Dynamic programming solves problems by breaking them into overlapping sub-problems',
            'Two conditions required: optimal substructure and overlapping sub-problems',
            'Memoization is top-down (recursive with cache); tabulation is bottom-up (iterative table filling)',
            'DP reduces exponential-time recursive solutions to polynomial time',
            'Space can often be optimized by keeping only the most recent state rows'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between divide-and-conquer and dynamic programming?\nAns: Divide-and-conquer handles independent sub-problems; DP handles overlapping sub-problems by storing and reusing results.',
            'Q2: What are the two implementation approaches for DP?\nAns: Memoization (top-down recursive with caching) and tabulation (bottom-up iterative table filling).',
            'Q3: What is the time and space complexity of the 0/1 knapsack DP solution?\nAns: Time = O(n · W), Space = O(n · W), where n is items and W is capacity; space can be optimized to O(W).'
          ]
        }
      ]
    },
    'graph-algorithms': {
      title: 'Graph Algorithms',
      subtitle: 'Navigate relationships, find paths, and discover structure in connected data',
      sections: [
        {
          heading: 'What are Graph Algorithms?',
          text: 'A <strong>graph</strong> is a collection of nodes (vertices) connected by edges. <strong>Graph algorithms</strong> are procedures for finding paths, discovering connectivity, detecting cycles, and analyzing the structure of these networks. Graphs model relationships in social networks, molecules, road maps, neural networks, and knowledge bases.',
          list: [
            '<strong>Vertices (V):</strong> Nodes representing entities (users, cities, neurons)',
            '<strong>Edges (E):</strong> Connections representing relationships (friendship, road, synapse)',
            '<strong>Weighted graphs:</strong> Edges have numerical values (distance, cost, similarity)',
            '<strong>Directed graphs:</strong> Edges have direction (follows, dependency, hyperlink)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Graph traversal and search are foundational. BFS explores level by level; DFS dives deep first.',
          example: {
            title: 'BFS vs DFS Traversal',
            code: `BFS (Breadth-First Search):
  Uses a QUEUE
  Explores all neighbors at current depth
  before moving to the next depth level
  → Finds shortest path in unweighted graphs

  Time: O(V + E)
  Space: O(V)

DFS (Depth-First Search):
  Uses a STACK (or recursion)
  Explores as far as possible along each
  branch before backtracking
  → Detects cycles and finds connected components

  Time: O(V + E)
  Space: O(V) (recursive stack)`,
            output: 'BFS is optimal for shortest path in unweighted graphs; DFS is simpler and uses less memory per layer.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different graph algorithms solve different problems.',
          table: {
            headers: ['Algorithm', 'Problem', 'Approach', 'Time Complexity', 'Space Complexity'],
            rows: [
              ['BFS', 'Shortest path (unweighted)', 'Queue, level-by-level', 'O(V + E)', 'O(V)'],
              ['DFS', 'Connectivity, cycles, topological sort', 'Stack / recursion', 'O(V + E)', 'O(V)'],
              ['Dijkstra', 'Shortest path (weighted, non-negative)', 'Greedy + priority queue', 'O((V+E) log V)', 'O(V)'],
              ['Bellman-Ford', 'Shortest path (with negative weights)', 'Dynamic programming', 'O(V · E)', 'O(V)'],
              ['Floyd-Warshall', 'All-pairs shortest path', 'DP on intermediate nodes', 'O(V³)', 'O(V²)'],
              ['Kruskal / Prim', 'Minimum spanning tree', 'Greedy edge/vertex selection', 'O(E log V)', 'O(V + E)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Dijkstra on graphs with negative edge weights (fix: use Bellman-Ford instead; Dijkstra assumes non-negative weights)',
            'Mistake 2: Confusing directed and undirected graph representations (fix: in adjacency lists, undirected edges must be stored in both directions)',
            'Mistake 3: Running BFS for shortest path on weighted graphs (fix: BFS only works for unweighted graphs; use Dijkstra for weighted)',
            'Mistake 4: Not handling disconnected components (fix: wrap traversal in a loop over all vertices to ensure every component is visited)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Graph algorithms are fundamental to modern machine learning and systems.',
          list: [
            '<strong>PageRank (Google):</strong> Treats the web as a directed graph and ranks pages by importance based on link structure',
            '<strong>Social Network Analysis:</strong> Community detection, influence maximization, and friend recommendation using graph traversal',
            '<strong>Shortest Path (Navigation):</strong> GPS systems use Dijkstra or A* on road network graphs to find optimal routes',
            '<strong>Knowledge Graphs:</strong> Graph traversal powers question answering and reasoning in systems like Google Knowledge Graph and Wikidata',
            '<strong>Neural Network Computation Graphs:</strong> Backpropagation is essentially a reverse traversal of the computation graph using DFS-like topological order'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Graphs model entities (vertices) and their relationships (edges)',
            'BFS finds shortest paths in unweighted graphs; DFS finds cycles and connected components',
            'Dijkstra works for non-negative weighted shortest paths; Bellman-Ford handles negative weights',
            'Floyd-Warshall computes all-pairs shortest paths in O(V³)',
            'Kruskal and Prim find minimum spanning trees using greedy edge selection'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Dijkstra algorithm fail with negative edge weights?\nAns: Because once a vertex is marked as visited, Dijkstra assumes the shortest path to it is finalized — negative edges could provide a shorter path later.',
            'Q2: What is the time complexity of BFS and DFS on an adjacency list representation?\nAns: O(V + E) for both.',
            'Q3: In what scenario is Floyd-Warshall preferred over running Dijkstra from every vertex?\nAns: When the graph is dense and edge weights can be negative; Floyd-Warshall handles negatives and is simpler to implement for all-pairs.'
          ]
        }
      ]
    },
    'string-algorithms': {
      title: 'String Algorithms',
      subtitle: 'Process, match, and transform sequences efficiently for text and biological data',
      sections: [
        {
          heading: 'What are String Algorithms?',
          text: '<strong>String algorithms</strong> are techniques for processing, searching, matching, and transforming sequences of characters. They are essential in natural language processing, bioinformatics (DNA/protein sequences), compression, cryptography, and text-based machine learning.',
          list: [
            '<strong>Pattern matching:</strong> Find a substring within a larger string (text search, plagiarism detection)',
            '<strong>Edit distance:</strong> Measure how different two strings are (spell checking, OCR correction)',
            '<strong>Suffix structures:</strong> Preprocess strings for fast substring queries (genome assembly, text indexing)',
            '<strong>String hashing:</strong> Map strings to numeric values for fast comparison and deduplication'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>KMP (Knuth-Morris-Pratt)</strong> algorithm avoids re-checking characters by using a prefix function that encodes how much of the pattern can be skipped upon a mismatch.',
          example: {
            title: 'KMP Prefix Function',
            code: `Pattern: "ABABC"

Prefix function lps[i] = length of longest
proper prefix of pattern[0..i] that is also
a suffix of pattern[0..i].

  i:    0  1  2  3  4
  pat:  A  B  A  B  C
  lps:  0  0  1  2  0

Meaning:
  At i=3 ("ABAB"), lps=2 because "AB" is both
  prefix and suffix.
  On mismatch at pattern[4], we skip ahead
  by 2 instead of restarting completely.

KMP Search: O(n + m)
  n = text length, m = pattern length`,
            output: 'KMP achieves linear-time pattern matching by preprocessing the pattern in O(m).',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'String algorithms differ in preprocessing cost, query speed, and use cases.',
          table: {
            headers: ['Algorithm', 'Problem', 'Preprocessing', 'Query / Match', 'Best For'],
            rows: [
              ['Naive Search', 'Find pattern in text', 'None', 'O(n · m)', 'Very short patterns'],
              ['KMP', 'Single pattern search', 'O(m)', 'O(n)', 'Single long pattern in long text'],
              ['Rabin-Karp', 'Multiple pattern search', 'O(m)', 'O(n) avg', 'Multiple patterns, plagiarism'],
              ['Boyer-Moore', 'Single pattern search', 'O(m + Σ)', 'O(n/m) best', 'Very large alphabets'],
              ['Trie', 'Prefix search', 'O(total chars)', 'O(L) per query', 'Dictionary, autocomplete'],
              ['Suffix Array / Tree', 'Any substring query', 'O(n log n) or O(n)', 'O(m)', 'Genomics, text indexing']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using naive search for long patterns or large texts (fix: use KMP, Rabin-Karp, or suffix arrays for linear or sublinear performance)',
            'Mistake 2: Confusing edit distance with longest common subsequence (fix: edit distance counts insert/delete/substitute; LCS finds the longest shared subsequence without gaps)',
            'Mistake 3: Not preprocessing when doing many queries on the same text (fix: build a suffix array, suffix tree, or Trie once to answer queries in O(m))',
            'Mistake 4: Ignoring alphabet size in algorithm selection (fix: Boyer-Moore excels on large alphabets like English text; KMP is alphabet-agnostic)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'String algorithms are embedded in machine learning pipelines and everyday software.',
          list: [
            '<strong>Search Engines:</strong> Inverted indices and suffix arrays enable fast full-text search across billions of documents',
            '<strong>Plagiarism Detection:</strong> Rabin-Karp rolling hash compares document fingerprints to detect copied passages',
            '<strong>DNA Sequencing:</strong> Suffix arrays and BWT (Burrows-Wheeler Transform) power genome alignment tools like BWA and Bowtie',
            '<strong>Spell Checkers:</strong> Edit distance finds the closest dictionary word to a misspelled input — used in every mobile keyboard',
            '<strong>Tokenization (NLP):</strong> Trie-based prefix matching splits text into tokens efficiently in modern LLM tokenizers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'String algorithms efficiently process, search, match, and transform character sequences',
            'KMP achieves O(n + m) pattern matching by preprocessing the pattern with a prefix function',
            'Edit distance (Levenshtein) measures string similarity using dynamic programming',
            'Suffix arrays and trees preprocess text for fast substring queries in bioinformatics and search',
            'Trie structures support fast prefix-based lookup for autocomplete and dictionary tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the time complexity of KMP pattern matching?\nAns: O(n + m), where n is the text length and m is the pattern length.',
            'Q2: What is the difference between LCS and edit distance?\nAns: LCS finds the longest shared subsequence; edit distance measures the minimum number of operations to transform one string into another.',
            'Q3: Why are suffix arrays useful in genomics?\nAns: They preprocess the genome once (O(n log n)) so that any substring query can be answered in O(m), enabling fast alignment of millions of reads.'
          ]
        }
      ]
    }
  }
};
