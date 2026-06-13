export const mlalgoModule1Structure = {
  module1: {
    title: 'Module 1: Introduction and Analysis of ML Algorithms',
    topics: [
      { id: 'intro-mlalgo', title: 'Introduction to ML Algorithms' },
      { id: 'algorithm-analysis', title: 'Algorithm Analysis' },
      { id: 'time-complexity', title: 'Time Complexity' },
      { id: 'space-complexity', title: 'Space Complexity' },
      { id: 'big-o-notation', title: 'Big-O Notation' },
    ]
  }
};

export const mlalgoModule1Content = {
  module1: {
    'intro-mlalgo': {
      title: 'Introduction to ML Algorithms',
      subtitle: 'What algorithms are, why they matter, and how they power machine learning',
      sections: [
        {
          heading: 'What is an Algorithm?',
          text: 'An <strong>algorithm</strong> is a finite sequence of well-defined, step-by-step instructions to solve a problem or perform a computation. In machine learning, algorithms are the engines that learn patterns from data and make predictions on unseen inputs.',
          list: [
            'A recipe: input data goes in, a model comes out',
            'Algorithms differ in how they learn, what they assume, and how they generalize',
            'Choosing the right algorithm is often more impactful than tuning hyperparameters',
            'Every ML algorithm has strengths, weaknesses, and ideal use cases'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core task of most ML algorithms is to minimize an objective function (loss) that measures the gap between predictions and true values.',
          example: {
            title: 'Example: Supervised learning objective',
            code: `General ML Objective:
  f*(x) = argmin_f  L(f(x), y) + λ · R(f)

Where:
  f  = model (algorithm)
  L  = loss function (error metric)
  y  = true labels
  R  = regularization (complexity penalty)
  λ  = regularization strength

Example (Linear Regression):
  Loss = Σᵢ (yᵢ - ŷᵢ)² + λ Σⱼ wⱼ²
  Goal: find weights w that minimize this sum`,
            output: 'All supervised learning algorithms minimize some form of prediction error plus a complexity penalty.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Machine learning algorithms fall into distinct families based on how they learn and what data they need.',
          table: {
            headers: ['Paradigm', 'Data', 'What it learns', 'Example Algorithms'],
            rows: [
              ['Supervised', 'Labeled (X, y)', 'Input → output mapping', 'Linear regression, SVM, neural networks'],
              ['Unsupervised', 'Unlabeled (X)', 'Hidden structure / clusters', 'K-means, PCA, autoencoders'],
              ['Semi-supervised', 'Few labels + unlabeled', 'Use structure in unlabeled data', 'Label spreading, self-training'],
              ['Reinforcement', 'Rewards / penalties', 'Optimal action sequences', 'Q-learning, policy gradient'],
              ['Self-supervised', 'Unlabeled (with labels from data)', 'Pretext task representations', 'Word2Vec, BERT, contrastive learning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a neural network for every problem (fix: start simple — linear models often outperform deep networks on small/tabular data)',
            'Mistake 2: Ignoring the bias-variance tradeoff when selecting an algorithm (fix: match model complexity to dataset size and noise level)',
            'Mistake 3: Assuming more features always help (fix: apply feature selection and dimensionality reduction before complex modeling)',
            'Mistake 4: Not validating algorithm choice across multiple datasets or folds (fix: use cross-validation, not a single train-test split)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ML algorithms are deployed across virtually every industry.',
          list: [
            '<strong>Healthcare:</strong> Random forests classify tumor images; logistic regression predicts patient readmission risk',
            '<strong>Finance:</strong> Gradient boosting detects fraud; ARIMA models forecast stock trends',
            '<strong>E-commerce:</strong> Matrix factorization powers recommendation engines (Amazon, Netflix)',
            '<strong>Autonomous vehicles:</strong> Deep reinforcement learning trains driving policies in simulated environments',
            '<strong>Search engines:</strong> Gradient boosted decision trees rank web pages by relevance'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'An algorithm is a precise set of instructions to solve a computational problem',
            'ML algorithms learn from data rather than being explicitly programmed',
            'Supervised, unsupervised, and reinforcement learning are the three main paradigms',
            'All learning algorithms minimize some objective: prediction error + regularization',
            'Algorithm selection should match data size, feature type, and problem goal'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the primary difference between a traditional algorithm and a machine learning algorithm?\nAns: A traditional algorithm follows fixed rules written by a programmer; an ML algorithm learns patterns from data and adapts its internal parameters.',
            'Q2: Which learning paradigm would you use if you have images but no labels?\nAns: Unsupervised learning (or self-supervised learning) — it finds structure without labeled targets.',
            'Q3: Why is regularization (λ · R(f)) added to the loss function?\nAns: To penalize model complexity and prevent overfitting, ensuring the model generalizes to unseen data.'
          ]
        }
      ]
    },
    'algorithm-analysis': {
      title: 'Algorithm Analysis',
      subtitle: 'How to measure, compare, and reason about algorithm performance',
      sections: [
        {
          heading: 'What is Algorithm Analysis?',
          text: '<strong>Algorithm analysis</strong> is the process of evaluating and comparing algorithms in terms of the resources they consume — primarily time (how fast) and space (how much memory) — as the input size grows. It helps practitioners choose the right tool and avoid hidden scalability traps.',
          list: [
            'Time analysis: how runtime scales with input size n',
            'Space analysis: how memory usage scales with input size n',
            'Correctness analysis: does the algorithm always produce the right result?',
            'Stability and convergence: does the algorithm reliably reach a good solution?'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Algorithm analysis focuses on the number of basic operations as a function of input size n, ignoring constant factors and hardware differences.',
          example: {
            title: 'Example: Counting operations',
            code: `Algorithm: Find maximum in an array of size n

Pseudocode:
  max = A[0]
  for i = 1 to n-1:
    if A[i] > max:
      max = A[i]

Operation count:
  - Assignment: 1 (max = A[0])
  - Loop iterations: n-1
  - Comparisons: n-1
  - Possible assignments: up to n-1

Total: ~2n operations → O(n)`,
            output: 'Basic operation counting reveals how runtime grows with n.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Three types of analysis give different perspectives on algorithm behavior.',
          table: {
            headers: ['Type', 'Definition', 'Use Case', 'Caution'],
            rows: [
              ['Worst-case', 'Maximum operations for any input of size n', 'Guarantee upper bound on runtime', 'Can be pessimistic and unrepresentative'],
              ['Best-case', 'Minimum operations for any input of size n', 'Understand ideal conditions', 'Often misleading in practice'],
              ['Average-case', 'Expected operations over random inputs', 'Most realistic for typical data', 'Requires assumptions about input distribution']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Measuring wall-clock time on a single run (fix: use asymptotic analysis and average over many runs with varied inputs)',
            'Mistake 2: Ignoring hidden constants in O-notation (fix: for small n, an O(n²) algorithm with a tiny constant may beat an O(n log n) one)',
            'Mistake 3: Forgetting that ML algorithms are iterative (fix: multiply operation count by the number of epochs or convergence steps)',
            'Mistake 4: Not accounting for data movement costs (fix: in distributed ML, communication often dominates computation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Algorithm analysis directly impacts production ML systems.',
          list: [
            '<strong>Real-time inference:</strong> O(n) prediction is acceptable for streaming; O(n²) may cause latency violations',
            '<strong>Large-scale training:</strong> Stochastic gradient descent (O(1) per step) makes billion-scale datasets tractable',
            '<strong>Feature selection:</strong> Forward selection is O(d²) — too slow for millions of features; LASSO is O(d) per iteration',
            '<strong>Nearest neighbors:</strong> Brute-force k-NN is O(n) per query; approximate methods (ANN) reduce to O(log n)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Algorithm analysis measures how resource usage scales with input size',
            'Count basic operations to estimate time; count data structures to estimate space',
            'Worst-case, best-case, and average-case analysis each tell a different story',
            'Asymptotic analysis (Big-O) ignores constants and focuses on growth rate',
            'In ML, iteration count and data movement are as important as per-step complexity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do we analyze algorithms asymptotically rather than measuring exact runtime?\nAns: Exact runtime depends on hardware, language, and compiler; asymptotic analysis captures the intrinsic growth rate independent of these factors.',
            'Q2: What is the difference between worst-case and average-case analysis?\nAns: Worst-case considers the input that maximizes operations; average-case considers the expected operations over a distribution of typical inputs.',
            'Q3: A sorting algorithm takes 0.1 ms for 1,000 items and 0.4 ms for 2,000 items. What is its likely time complexity?\nAns: Doubling n quadruples time → O(n²), since 2² = 4.'
          ]
        }
      ]
    },
    'time-complexity': {
      title: 'Time Complexity',
      subtitle: 'Measuring how runtime grows as data grows',
      sections: [
        {
          heading: 'What is Time Complexity?',
          text: '<strong>Time complexity</strong> quantifies the amount of time an algorithm takes to run as a function of the input size n. It is the single most important metric when deciding whether an algorithm will finish in seconds, minutes, or never on your dataset.',
          list: [
            'Expressed as T(n), a function of input size n',
            'Focuses on growth rate, not absolute seconds',
            'Usually expressed in Big-O notation for simplicity',
            'Includes all operations: arithmetic, comparisons, memory access, function calls'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Time complexity is derived by counting the dominant term in the operation count as n grows large.',
          example: {
            title: 'Example: Matrix multiplication',
            code: `Standard matrix multiplication:
  C = A × B, where A, B are n×n matrices

Pseudocode:
  for i = 1 to n:
    for j = 1 to n:
      C[i,j] = 0
      for k = 1 to n:
        C[i,j] += A[i,k] * B[k,j]

Operation count:
  - Outer loops: n × n iterations
  - Inner loop: n multiplications + n additions

Total operations: n³ multiplications + n³ additions
Time complexity: T(n) = O(n³)`,
            output: 'The triple nested loop dominates all other terms.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different algorithm structures produce fundamentally different time complexity classes.',
          table: {
            headers: ['Complexity', 'Name', 'n=10', 'n=1,000', 'Example'],
            rows: [
              ['O(1)', 'Constant', '1', '1', 'Array index lookup'],
              ['O(log n)', 'Logarithmic', '3', '10', 'Binary search'],
              ['O(n)', 'Linear', '10', '1,000', 'Single loop over data'],
              ['O(n log n)', 'Linearithmic', '33', '10,000', 'Efficient sorting (merge sort)'],
              ['O(n²)', 'Quadratic', '100', '1,000,000', 'Nested loops, brute-force pairs'],
              ['O(n³)', 'Cubic', '1,000', '10⁹', 'Matrix multiplication, triple loops'],
              ['O(2ⁿ)', 'Exponential', '1,024', '∞ (practically)', 'Brute-force subset enumeration']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming O(n) is always fast (fix: with n = 10⁹, even O(n) may take minutes; parallelization or sampling may be needed)',
            'Mistake 2: Treating training time and prediction time as the same (fix: k-NN is O(1) to train but O(n) to predict — the reverse of neural networks)',
            'Mistake 3: Forgetting mini-batch scaling (fix: batch gradient descent is O(n) per step; SGD is O(1) per step but needs more steps)',
            'Mistake 4: Not accounting for preprocessing (fix: feature extraction can dominate total pipeline time even if the model is fast)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Time complexity shapes architectural decisions in ML pipelines.',
          list: [
            '<strong>Transformer attention:</strong> Self-attention is O(n²) in sequence length — this is why context windows are limited and sparse attention variants exist',
            '<strong>Gradient boosting:</strong> Each tree is O(n log n) to build; LightGBM uses histogram-based methods to reduce this',
            '<strong>Nearest neighbor search:</strong> Brute force O(n) per query becomes O(log n) with KD-trees or LSH, enabling real-time recommendations',
            '<strong>Graph neural networks:</strong> Message passing is O(E) per layer; dense graphs with E ≈ n² become computationally expensive'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Time complexity T(n) measures how runtime grows with input size',
            'Big-O notation captures the dominant growth term, ignoring constants',
            'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ)',
            'The same algorithm can have different complexities for training vs inference',
            'Always consider preprocessing, data movement, and iteration count alongside per-step complexity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: An algorithm takes 2 seconds for n=1,000 and 8 seconds for n=2,000. What is its time complexity?\nAns: Doubling n quadruples time → O(n²).',
            'Q2: Why is binary search O(log n) instead of O(n)?\nAns: Each comparison eliminates half the remaining search space, so the number of steps is log₂(n), not n.',
            'Q3: A neural network training step processes a mini-batch of size 32. Is the per-step complexity O(32) or O(1)?\nAns: O(1) — the batch size is a constant, not a variable input size. Complexity is defined relative to the problem size (e.g., number of features or training samples).'          ]
        }
      ]
    },
    'space-complexity': {
      title: 'Space Complexity',
      subtitle: 'Measuring how memory usage grows as data grows',
      sections: [
        {
          heading: 'What is Space Complexity?',
          text: '<strong>Space complexity</strong> measures the total amount of memory an algorithm needs to execute as a function of input size n. It includes the input data itself, any auxiliary data structures, and the recursion stack or call frames. In ML, space is often the bottleneck before time — a model may be fast but too large to fit in GPU memory.',
          list: [
            'Auxiliary space: extra memory beyond the input (the focus of analysis)',
            'Total space: input + auxiliary + stack/heap memory',
            'In-place algorithms use O(1) auxiliary space',
            'Memory hierarchy matters: GPU VRAM < CPU RAM < disk — exceeding limits kills performance'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Space complexity is the sum of memory for input storage, auxiliary structures, and recursion stack depth.',
          example: {
            title: 'Example: Recursive factorial',
            code: `Algorithm: factorial(n)
  if n == 0: return 1
  return n * factorial(n-1)

Space breakdown:
  - Input: n (single integer) → O(1)
  - Recursion stack: n call frames
    Each frame stores n, return address
  - Total auxiliary space: O(n)

Iterative version:
  result = 1
  for i = 2 to n:
    result *= i
  return result
  → Auxiliary space: O(1)`,
            output: 'Recursion depth directly translates to stack space.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Time and space often trade off — you can use more memory to save time, or vice versa.',
          table: {
            headers: ['Approach', 'Time', 'Space', 'When to use'],
            rows: [
              ['Memoization (top-down DP)', 'O(n) after first call', 'O(n) table', 'When only partial states are needed'],
              ['Tabulation (bottom-up DP)', 'O(n)', 'O(n) table', 'When all states are needed sequentially'],
              ['Space-optimized DP', 'O(n)', 'O(1) or O(k)', 'When only recent states matter'],
              ['Brute force', 'Often exponential', 'Usually O(1) or O(n)', 'Only for very small inputs'],
              ['Precomputed lookup', 'O(1)', 'Potentially huge', 'When queries are frequent and space is abundant']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Only counting array sizes and ignoring the recursion stack (fix: deep recursion on large inputs can overflow the stack even with small arrays)',
            'Mistake 2: Storing entire datasets in memory when streaming is possible (fix: use generators, mini-batches, and online algorithms for large datasets)',
            'Mistake 3: Ignoring intermediate activation memory in neural networks (fix: during training, storing all activations for backpropagation often exceeds model parameter memory)',
            'Mistake 4: Not accounting for sparse vs dense representations (fix: sparse matrices use O(k) space for k non-zeros vs O(n²) for dense — this changes everything in NLP and graphs)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Space complexity is a hard constraint in production ML.',
          list: [
            '<strong>Edge deployment:</strong> Mobile models must fit in < 100 MB; quantization and pruning reduce space at minimal accuracy cost',
            '<strong>Attention memory:</strong> Transformer training stores all layer activations — for a 1B parameter model, this can be 10–100× the model size',
            '<strong>Graph embeddings:</strong> Storing dense node embeddings for a billion-node graph is impossible; graph sampling and neighbor aggregation reduce memory',
            '<strong>Batch size limits:</strong> GPU OOM errors almost always come from activation memory, not model weights — gradient checkpointing trades compute for memory'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Space complexity S(n) measures total memory needed as input grows',
            'Auxiliary space excludes the input itself; total space includes everything',
            'Recursion depth contributes O(depth) to stack space',
            'Time-space tradeoffs are common: memoization, lookup tables, and caching use more memory to reduce time',
            'In ML, activation memory and sparse representations are critical practical concerns'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: An algorithm creates a copy of its input array for processing. If the input is size n, what is its space complexity?\nAns: O(n) auxiliary space (the copy) + O(n) input space = O(n) total, or O(n) auxiliary if analyzing extra space.',
            'Q2: Why does a recursive merge sort use O(n log n) space instead of O(n)?\nAns: Each recursive call creates subarrays; the total auxiliary space across all levels is O(n), but the recursion stack depth is O(log n), giving O(n) total auxiliary space. (Note: the merge step typically uses O(n) auxiliary total, not O(n log n). Some naive implementations do use O(n log n).)',
            'Q3: How can you reduce the space complexity of training a deep neural network?\nAns: Use gradient checkpointing (recompute activations instead of storing), smaller batch sizes, mixed-precision training, or model parallelism across devices.'
          ]
        }
      ]
    },
    'big-o-notation': {
      title: 'Big-O Notation',
      subtitle: 'The universal language for describing algorithm growth rates',
      sections: [
        {
          heading: 'What is Big-O Notation?',
          text: '<strong>Big-O notation</strong> describes the upper bound of an algorithm\'s growth rate as the input size approaches infinity. It abstracts away hardware, language, and constant factors, allowing practitioners to compare algorithms at a fundamental level. If an algorithm is O(n²), you know it will eventually be outpaced by any O(n log n) algorithm as data grows.',
          list: [
            'Big-O: upper bound (worst-case growth)',
            'Big-Ω (Omega): lower bound (best-case growth)',
            'Big-Θ (Theta): tight bound (growth is exactly this)',
            'In practice, Big-O is the most commonly used'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Formal definition: f(n) is O(g(n)) if there exist constants c > 0 and n₀ > 0 such that f(n) ≤ c · g(n) for all n ≥ n₀.',
          example: {
            title: 'Example: Proving O(n²)',
            code: `Function: f(n) = 3n² + 10n + 50

We claim: f(n) = O(n²)

Proof:
  For n ≥ 10:
    3n² + 10n + 50 ≤ 3n² + n² + n²  (since 10n ≤ n² and 50 ≤ n² for n ≥ 10)
                      = 5n²

Choose c = 5, n₀ = 10:
  f(n) ≤ 5n² for all n ≥ 10

Therefore: f(n) = O(n²)`,
            output: 'The dominant term (3n²) determines the complexity class.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Three asymptotic notations capture different bounds on growth.',
          table: {
            headers: ['Notation', 'Meaning', 'Analogy', 'When to use'],
            rows: [
              ['O (Big-O)', 'Upper bound: f(n) ≤ c·g(n)', '"At most this fast"', 'Describing worst-case scalability'],
              ['Ω (Big-Omega)', 'Lower bound: f(n) ≥ c·g(n)', '"At least this fast"', 'Proving a minimum resource requirement'],
              ['Θ (Big-Theta)', 'Tight bound: c₁·g(n) ≤ f(n) ≤ c₂·g(n)', '"Exactly this fast"', 'When best and worst case are the same order']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Dropping lower-order terms but keeping all coefficients (fix: drop both — 5n² + 3n + 7 is O(n²), not O(5n²))',
            'Mistake 2: Saying O(2n) or O(3n²) (fix: constants are absorbed — write O(n) and O(n²))',
            'Mistake 3: Using Big-O when Big-Θ is known (fix: if best and worst case are both Θ(n log n), say so — it is a stronger statement)',
            'Mistake 4: Comparing algorithms only by Big-O without considering hidden constants (fix: for n < 10,000, an O(n²) algorithm with a tiny constant may outperform an O(n log n) one with a large constant)',
            'Mistake 5: Ignoring the input size range (fix: Big-O only matters as n → ∞; for small n, brute force may be optimal)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Big-O guides architecture decisions at every scale.',
          list: [
            '<strong>Database indexing:</strong> B-trees give O(log n) lookups vs O(n) table scans — the difference between instant and unusable at billion-row scale',
            '<strong>ML training:</strong> Full-batch gradient descent is O(n) per step; SGD is O(1). On ImageNet (n = 1.2M), this is the difference between impossible and standard practice',
            '<strong>Embedding tables:</strong> A hash table lookup is O(1); a linear search is O(n). In recommendation systems with millions of items, this determines serving latency',
            '<strong>Attention mechanisms:</strong> Standard attention is O(n²); sparse or linear attention variants achieve O(n) or O(n log n), enabling longer sequences'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Big-O describes the upper bound of growth as n → ∞',
            'Drop constants and lower-order terms: 3n² + 10n + 5 = O(n²)',
            'Big-Omega is the lower bound; Big-Theta is a tight bound',
            'Big-O compares algorithms independent of hardware or implementation',
            'For small n, hidden constants matter more than asymptotic class',
            'In ML, Big-O shapes batch size, model depth, and serving architecture decisions'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Simplify 4n³ + 100n² + 50n + 1000 to Big-O notation.\nAns: O(n³) — the cubic term dominates as n grows.',
            'Q2: Is binary search O(log n), Ω(log n), or Θ(log n)?\nAns: Θ(log n) — both best and worst cases are logarithmic because the search space is always halved.',
            'Q3: Why might an O(n²) algorithm be preferred over an O(n log n) one in practice?\nAns: If the input size is small, the O(n²) algorithm may have a much smaller hidden constant, making it faster in wall-clock time despite the worse asymptotic class.'
          ]
        }
      ]
    }
  }
};
