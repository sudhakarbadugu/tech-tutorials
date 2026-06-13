export const mlalgoModule5Structure = {
  module5: {
    title: 'Module 5: Advanced Algorithms & Systems',
    topics: [
      { id: 'advanced-data-structures', title: 'Advanced Data Structures' },
      { id: 'parallel-algorithms', title: 'Parallel Algorithms' },
      { id: 'distributed-algorithms', title: 'Distributed Algorithms' },
      { id: 'quantum-algorithms', title: 'Quantum Algorithms' },
      { id: 'algorithm-engineering', title: 'Algorithm Engineering' },
    ]
  }
};

export const mlalgoModule5Content = {
  module5: {
    'advanced-data-structures': {
      title: 'Advanced Data Structures',
      subtitle: 'Structures that unlock efficiency beyond basic arrays and lists',
      sections: [
        {
          heading: 'What are Advanced Data Structures?',
          text: '<strong>Advanced data structures</strong> go beyond arrays, linked lists, and hash tables to provide specialized operations with optimal time complexity. They are essential in ML for efficient nearest-neighbor search, range queries, graph traversal, and managing massive datasets that do not fit in simple containers.',
          list: [
            'Segment Trees: range queries and updates in O(log n)',
            'Fenwick Trees (Binary Indexed Trees): prefix sums with O(log n) update and query',
            'Trie (Prefix Tree): string storage and retrieval in O(m) where m = string length',
            'B-Trees and B+ Trees: disk-based storage with balanced logarithmic operations',
            'Disjoint Set Union (Union-Find): near-constant-time connectivity checks',
            'Heaps and Fibonacci Heaps: priority queue operations for greedy algorithms'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A segment tree stores an array in a binary tree where each node represents a range summary, enabling O(log n) range queries and point updates.',
          example: {
            title: 'Example: Range Sum Query with Segment Tree',
            code: `Array: [1, 3, 5, 7, 9, 11]

Segment Tree (sum nodes):
        36(0-5)
       /       \
   9(0-2)    27(3-5)
   /   \      /    \
 4(0-1) 5(2) 16(3-4) 11(5)
 /  \
1    3

Query: sum of range [1, 4] → 3 + 5 + 7 + 9 = 24
Path: visit O(log n) nodes only

Update: change index 2 to 6
  → update leaf 2 and all ancestors
  → O(log n) operations`,
            output: 'Range queries and updates both complete in O(log n) time.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different advanced structures optimize for different access patterns.',
          table: {
            headers: ['Structure', 'Best For', 'Query', 'Update', 'Space'],
            rows: [
              ['Segment Tree', 'Range queries on arrays', 'O(log n)', 'O(log n)', 'O(4n)'],
              ['Fenwick Tree', 'Prefix sums, frequencies', 'O(log n)', 'O(log n)', 'O(n)'],
              ['Trie', 'String prefix matching', 'O(m)', 'O(m)', 'O(total chars)'],
              ['B-Tree', 'Disk-based ordered storage', 'O(log n)', 'O(log n)', 'O(n)'],
              ['Union-Find', 'Connectivity, clustering', 'O(α(n)) ≈ O(1)', 'O(α(n)) ≈ O(1)', 'O(n)'],
              ['KD-Tree', 'Spatial / nearest neighbor search', 'O(log n) avg', 'O(log n) avg', 'O(n)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a segment tree when a Fenwick tree suffices (fix: Fenwick trees use half the memory and have simpler code for prefix-sum problems)',
            'Mistake 2: Ignoring memory overhead of tries (fix: tries use O(total characters) nodes; for large alphabets, consider compressed tries or hash maps)',
            'Mistake 3: Building a KD-tree for high-dimensional data (fix: KD-trees degrade to O(n) in high dimensions; use approximate methods like LSH or ball trees instead)',
            'Mistake 4: Assuming Union-Find is always O(1) without path compression (fix: always implement path compression and union by rank/size for the inverse-Ackermann guarantee)',
            'Mistake 5: Using unbalanced trees for sorted data (fix: self-balancing structures like AVL or red-black trees maintain O(log n) regardless of insertion order)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Advanced data structures power critical components of ML pipelines.',
          list: [
            '<strong>Nearest neighbor search:</strong> KD-trees and ball trees accelerate k-NN from O(n) to O(log n) in low-dimensional spaces (scikit-learn’s BallTree, KDTree)',
            '<strong>Range queries in time series:</strong> Segment trees enable sliding-window aggregation and anomaly detection over streaming data in O(log n) per window',
            '<strong>Auto-complete and NLP:</strong> Tries store vocabulary for O(m) prefix matching, powering search suggestions and tokenization dictionaries',
            '<strong>Graph clustering:</strong> Union-Find (disjoint sets) efficiently merges clusters in hierarchical clustering and connected-component algorithms',
            '<strong>Database indexing:</strong> B+ trees are the backbone of relational database indexes, enabling logarithmic lookups and ordered scans for feature stores'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Advanced data structures optimize specific access patterns beyond what arrays and hash tables offer',
            'Segment trees and Fenwick trees bring range queries and updates down to O(log n)',
            'Tries specialize in string prefix operations at the cost of memory',
            'Union-Find with path compression achieves near-constant time for connectivity problems',
            'KD-trees excel in low-dimensional spatial search but degrade in high dimensions',
            'Choosing the right structure requires matching the problem’s access pattern to the structure’s strengths'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why is a Fenwick tree preferred over a segment tree for prefix-sum problems?
Ans: A Fenwick tree uses O(n) space versus O(4n) for a segment tree, has simpler implementation, and is faster in practice for prefix queries.`,
            `Q2: What causes a KD-tree to degrade from O(log n) to O(n) search time?
Ans: High-dimensional data — the hypervolume expands exponentially, making partition boundaries less discriminative and forcing traversal of most nodes.`,
            `Q3: In Union-Find, what is the amortized complexity with both path compression and union by rank?
Ans: O(α(n)), where α is the inverse Ackermann function — effectively a small constant (< 5) for all practical n.`
          ]
        }
      ]
    },
    'parallel-algorithms': {
      title: 'Parallel Algorithms',
      subtitle: 'Solving problems faster by using multiple processors simultaneously',
      sections: [
        {
          heading: 'What are Parallel Algorithms?',
          text: '<strong>Parallel algorithms</strong> decompose a computational problem into subtasks that execute simultaneously across multiple processing units. In machine learning, parallelism is not optional — it is the reason deep learning on massive datasets is practical. Understanding parallel algorithm design helps you scale training, inference, and data preprocessing from one GPU to hundreds.',
          list: [
            'Data parallelism: split the dataset across workers; each worker processes a subset',
            'Model parallelism: split the model across workers; each worker holds part of the network',
            'Pipeline parallelism: overlap computation and communication across stages',
            'Task parallelism: independent tasks run concurrently (e.g., hyperparameter search)',
            'The goal: reduce wall-clock time, though total compute (energy) usually increases'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Amdahl’s Law states that the speedup of parallel execution is limited by the fraction of the program that must run sequentially.',
          example: {
            title: 'Example: Amdahl’s Law Calculation',
            code: `Amdahl’s Law:
  Speedup(p) = 1 / (s + (1-s)/p)

Where:
  s = fraction of time that is serial (0 ≤ s ≤ 1)
  p = number of processors

Scenario: Training a neural network
  - 10% of time is serial (data loading, synchronization)
  - 90% is parallelizable (matrix ops, backprop)
  - Using 64 GPUs

Speedup(64) = 1 / (0.10 + 0.90/64)
             = 1 / (0.10 + 0.014)
             = 1 / 0.114
             ≈ 8.8×

Maximum possible speedup (p → ∞):
  Speedup_max = 1 / 0.10 = 10×`,
            output: 'Even with infinite processors, 10% serial work caps speedup at 10×.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different parallel strategies suit different hardware and model architectures.',
          table: {
            headers: ['Strategy', 'What is split', 'Best For', 'Communication', 'Example'],
            rows: [
              ['Data Parallelism', 'Training batch across devices', 'Model fits on one GPU, batch is large', 'Gradient sync each step', 'DDP in PyTorch, Horovod'],
              ['Model Parallelism', 'Model layers across devices', 'Model too large for one GPU', 'Activation transfer between layers', 'Megatron-LM, GPipe'],
              ['Pipeline Parallelism', 'Model + batch micro-batches', 'Sequential models with large depth', 'Bubble overhead', 'GPipe, PipeDream'],
              ['Tensor Parallelism', 'Individual layer operations', 'Massive layers (e.g., attention)', 'All-reduce within layer', 'Megatron-LM tensor parallel'],
              ['Expert Parallelism', 'Different experts on different devices', 'Mixture-of-Experts models', 'Routing decisions', 'Switch Transformers, GShard']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Adding GPUs without reducing serial bottlenecks (fix: profile the pipeline — data loading, checkpoint I/O, and logging often dominate; optimize those first)',
            'Mistake 2: Ignoring communication overhead (fix: use gradient compression, overlap communication with computation, and prefer high-bandwidth interconnects like NVLink or InfiniBand)',
            'Mistake 3: Using data parallelism when the model exceeds single-GPU memory (fix: switch to model parallelism, pipeline parallelism, or offload optimizer states to CPU with ZeRO)',
            'Mistake 4: Assuming linear speedup with more workers (fix: Amdahl’s Law and communication overhead mean diminishing returns; measure actual speedup, not theoretical)',
            'Mistake 5: Poor batch splitting that causes load imbalance (fix: ensure micro-batches are equal-sized in pipeline parallelism; use dynamic batching when sequence lengths vary)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Parallel algorithms make modern AI infrastructure possible.',
          list: [
            '<strong>ImageNet training:</strong> ResNet-50 trained on 1,024 GPUs in under 1 hour using data parallelism with ring-allreduce (Goyal et al., 2017)',
            '<strong>Large language models:</strong> GPT-3 and LLaMA use a combination of data, tensor, and pipeline parallelism across thousands of GPUs',
            '<strong>DeepSpeed ZeRO:</strong> Partitions optimizer states, gradients, and parameters across GPUs, enabling training models with trillions of parameters',
            '<strong>AutoML and hyperparameter search:</strong> Population-based training and random search scale by running many trials in parallel across a cluster',
            '<strong>Real-time inference:</strong> Batching multiple requests and using GPU tensor cores achieves throughput improvements of 10–100× over CPU serial execution'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Parallel algorithms execute subtasks simultaneously across multiple processors',
            'Amdahl’s Law: speedup is bounded by the serial fraction — even infinite processors have limits',
            'Data parallelism scales training by splitting batches; model parallelism splits the network itself',
            'Pipeline and tensor parallelism are essential for models too large for any single device',
            'Communication overhead, load imbalance, and serial bottlenecks determine real-world efficiency',
            'Always profile before scaling — adding hardware without fixing bottlenecks wastes resources'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: If 5% of a training pipeline is serial, what is the maximum speedup possible?
Ans: 1 / 0.05 = 20×. Amdahl’s Law limits speedup to the inverse of the serial fraction.`,
            `Q2: When should you use model parallelism instead of data parallelism?
Ans: When the model does not fit in a single GPU’s memory, requiring layers or parameters to be distributed across devices.`,
            `Q3: What is the main communication cost in data-parallel training?
Ans: Gradient synchronization — after each backward pass, gradients from all workers must be aggregated (usually via all-reduce) before the optimizer step.`
          ]
        }
      ]
    },
    'distributed-algorithms': {
      title: 'Distributed Algorithms',
      subtitle: 'Algorithms that coordinate across independent machines in a network',
      sections: [
        {
          heading: 'What are Distributed Algorithms?',
          text: '<strong>Distributed algorithms</strong> run on multiple independent machines (nodes) connected by a network, coordinating to solve a problem that no single machine can handle alone. Unlike parallel algorithms on shared memory, distributed algorithms must tolerate network latency, node failures, and partial knowledge — making them essential for large-scale ML infrastructure, federated learning, and cloud-based training.',
          list: [
            'Each node has local memory and communicates via message passing',
            'No global clock: nodes operate asynchronously',
            'Failure is normal: algorithms must handle crashed or slow nodes',
            'CAP theorem: consistency, availability, and partition tolerance cannot all be guaranteed simultaneously',
            'Coordination primitives: leader election, consensus, distributed locking, and gossip protocols'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The CAP theorem states that a distributed data store can provide at most two of the three guarantees: Consistency, Availability, and Partition tolerance.',
          example: {
            title: 'Example: CAP Tradeoff in ML Parameter Servers',
            code: `Parameter Server Architecture:
  - Workers compute gradients locally
  - Server holds global model parameters
  - Workers push gradients, pull updated weights

Scenario: Network partition between workers and server

Choice 1: Prioritize Availability
  - Workers continue training with stale parameters
  - Risk: model divergence, inconsistent updates
  - Used in: Asynchronous SGD (Hogwild!, Downpour SGD)

Choice 2: Prioritize Consistency
  - Block workers until partition heals
  - Risk: halted training, idle GPUs
  - Used in: Synchronous SGD with all-reduce

Choice 3: Prioritize Partition Tolerance
  - Always assumed in large clusters (faults are inevitable)
  - Compromise: bounded staleness, synchronous with backup workers`,
            output: 'ML systems usually pick AP (availability + partition tolerance) with mechanisms to limit inconsistency.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Synchronous vs asynchronous distributed training represents a fundamental tradeoff.',
          table: {
            headers: ['Property', 'Synchronous (All-Reduce)', 'Asynchronous (Parameter Server)', 'Stale Synchronous'],
            rows: [
              ['Communication', 'Collective all-reduce each step', 'Independent push/pull', 'Collective with backup workers'],
              ['Convergence', 'Stable, deterministic', 'Faster but noisier', 'Balanced'],
              ['Fault Tolerance', 'Straggler blocks all', 'Single node failure tolerated', 'Straggler replaced by backup'],
              ['Best For', 'Small clusters, large batches', 'Massive scale, variable hardware', 'Large clusters needing stability'],
              ['Example', 'Horovod, PyTorch DDP', 'TensorFlow PS, Hogwild!', 'ASP / BSP variants']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating distributed training as just “bigger parallel” (fix: network latency, node failures, and heterogeneous hardware make distributed algorithms fundamentally harder than shared-memory parallelism)',
            'Mistake 2: Using synchronous training at massive scale without handling stragglers (fix: implement backup workers, gradient accumulation, or elastic averaging to prevent one slow node from stalling the entire cluster)',
            'Mistake 3: Ignoring the cost of parameter server bandwidth (fix: partition parameters across multiple servers; use sparse gradients and quantization to reduce communication volume)',
            'Mistake 4: Assuming all nodes are identical (fix: heterogeneous clusters need adaptive load balancing — faster nodes should process more data or larger layers)',
            'Mistake 5: Not checkpointing in a fault-tolerant way (fix: use distributed file systems like S3 or HDFS; write checkpoints from multiple nodes to avoid single points of failure)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Distributed algorithms enable AI at planetary scale.',
          list: [
            '<strong>Federated learning:</strong> Models train across millions of mobile devices without centralizing data; uses secure aggregation and differential privacy protocols',
            '<strong>Google’s TensorFlow Extended (TFX):</strong> Distributed data validation, transformation, and training pipelines coordinate across data centers',
            '<strong>Large-scale recommendation:</strong> YouTube and TikTok train ranking models on thousands of machines with parameter servers handling sparse embedding tables exceeding terabytes',
            '<strong>Distributed hyperparameter tuning:</strong> Google Vizier and Ray Tune launch trials across clusters, using asynchronous scheduling to maximize resource utilization',
            '<strong>Blockchain and decentralized ML:</strong> Consensus algorithms (PBFT, Raft) coordinate model updates in trustless environments'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Distributed algorithms run across networked machines with local memory and no shared clock',
            'The CAP theorem forces a choice between consistency and availability during network partitions',
            'Synchronous training is stable but vulnerable to stragglers; asynchronous training scales better but converges more noisily',
            'Fault tolerance, load balancing, and communication reduction are core design concerns',
            'Parameter servers, all-reduce rings, and gossip protocols are the dominant coordination patterns',
            'Federated learning and massive recommendation systems are leading real-world applications'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: According to the CAP theorem, which two properties does a typical large-scale ML system prioritize?
Ans: Availability and Partition Tolerance (AP), accepting temporary inconsistency and using mechanisms like bounded staleness or backup workers to limit divergence.`,
            `Q2: What is the “straggler problem” in synchronous distributed training?
Ans: One slow node forces all other nodes to wait at each synchronization barrier, wasting compute and increasing wall-clock time.`,
            `Q3: Why is federated learning considered a distributed algorithm challenge rather than just a data privacy issue?
Ans: Because it requires distributed coordination (aggregation, synchronization, fault tolerance) across millions of unreliable, intermittently connected devices with limited bandwidth.`
          ]
        }
      ]
    },
    'quantum-algorithms': {
      title: 'Quantum Algorithms',
      subtitle: 'Leveraging quantum mechanics for computational speedups',
      sections: [
        {
          heading: 'What are Quantum Algorithms?',
          text: '<strong>Quantum algorithms</strong> exploit quantum mechanical phenomena — superposition, entanglement, and interference — to solve certain computational problems exponentially or quadratically faster than classical algorithms. While full-scale fault-tolerant quantum computers do not yet exist, quantum machine learning (QML) is an active research frontier with promising theoretical results for optimization, linear algebra, and sampling.',
          list: [
            'Qubits: quantum bits that can exist in superposition of 0 and 1',
            'Superposition: a quantum system explores many states simultaneously',
            'Entanglement: qubits become correlated in ways that have no classical analog',
            'Interference: amplitudes can reinforce (constructive) or cancel (destructive) like waves',
            'Measurement collapses superposition to a definite classical outcome'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Grover’s algorithm provides a quadratic speedup for unstructured search, finding a target in an unsorted database of N items in O(√N) queries instead of O(N).',
          example: {
            title: 'Example: Grover’s Search for ML Hyperparameter Optimization',
            code: `Classical search:
  - Try hyperparameters one by one
  - Expected trials to find best: N/2 = O(N)

Grover’s quantum search:
  - Prepare superposition over all N hyperparameter configs
  - Apply oracle that marks good configs (e.g., validation loss < threshold)
  - Amplify marked states via Grover diffusion operator
  - Measure to obtain a good config

Queries:
  Classical: O(N)
  Quantum:   O(√N)

For N = 1,000,000 configs:
  Classical: ~500,000 evaluations
  Quantum:   ~1,000 evaluations (theoretical)`,
            output: 'Quadratic speedup reduces search time from months to days for large spaces.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Quantum algorithms offer speedups for specific problems, not universal acceleration.',
          table: {
            headers: ['Algorithm', 'Problem', 'Quantum Speedup', 'Classical', 'Status'],
            rows: [
              ['Grover’s', 'Unstructured search', 'Quadratic: O(√N)', 'O(N)', 'NISQ-era feasible'],
              ['Shor’s', 'Integer factorization', 'Exponential: poly(log N)', 'Exponential', 'Requires fault-tolerant QC'],
              ['HHL', 'Linear systems Ax = b', 'Exponential in matrix dimension', 'Polynomial', 'Requires strong assumptions'],
              ['QAOA', 'Combinatorial optimization', 'Heuristic improvement', 'Exponential', 'Tested on NISQ devices'],
              ['VQE', 'Quantum chemistry / optimization', 'Heuristic, problem-dependent', 'Exponential', 'Active NISQ research'],
              ['Quantum SVM', 'Classification with quantum kernels', 'Potential exponential feature space', 'Polynomial', 'Theoretical promise']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming quantum computers are faster at everything (fix: quantum speedups are problem-specific; many ML tasks like gradient descent have no known quantum advantage)',
            'Mistake 2: Ignoring the cost of quantum state preparation and readout (fix: loading classical data into a quantum state can take O(N) time, potentially negating the quantum speedup)',
            'Mistake 3: Confusing quantum simulation with quantum computing (fix: simulating quantum algorithms classically is exponential in qubit count; true quantum advantage requires physical quantum hardware)',
            'Mistake 4: Expecting Shor’s-level speedups for ML (fix: most QML algorithms offer modest or heuristic improvements; exponential speedups like HHL require restrictive conditions)',
            'Mistake 5: Designing algorithms for ideal quantum hardware (fix: current NISQ devices have limited qubits, high error rates, and short coherence times — algorithms must be noise-resilient)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Quantum machine learning is transitioning from theory to early experiments.',
          list: [
            '<strong>Quantum kernel methods:</strong> Quantum computers map data into exponentially large Hilbert spaces, enabling classifiers that may be hard to simulate classically (IBM, Google experiments)',
            '<strong>Variational quantum circuits (VQC):strong> Hybrid quantum-classical models where a quantum circuit generates features and a classical network optimizes parameters — tested for small molecule properties',
            '<strong>Combinatorial optimization:</strong> QAOA and quantum annealing optimize portfolio selection and supply chain routing on D-Wave and IBM hardware',
            '<strong>Quantum generative models:</strong> Quantum Boltzmann machines and Born machines learn probability distributions that capture quantum correlations',
            '<strong>Cryptography and security:</strong> Shor’s algorithm threatens RSA; lattice-based cryptography and quantum-safe protocols are becoming urgent for secure ML model deployment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Quantum algorithms use superposition, entanglement, and interference to achieve speedups',
            'Grover’s search gives a proven quadratic speedup for unstructured search problems',
            'Shor’s and HHL offer exponential speedups but require fault-tolerant quantum computers not yet available',
            'Current NISQ-era focus: variational algorithms (VQE, QAOA) and quantum kernel methods',
            'Quantum data loading and noise are major practical barriers to realizing theoretical speedups',
            'QML remains research-stage: promising for specific problems but not a universal replacement for classical ML'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What is the query complexity of Grover’s algorithm for searching an unsorted database of size N?
Ans: O(√N), providing a quadratic speedup over classical linear search.`,
            `Q2: Why is Shor’s algorithm not currently usable for breaking encryption?
Ans: It requires thousands of fault-tolerant logical qubits; today’s NISQ devices have hundreds of noisy physical qubits with high error rates.`,
            `Q3: What is the main bottleneck preventing quantum speedups in many ML applications?
Ans: Quantum state preparation — encoding classical data into a quantum state often takes as much time as the classical algorithm itself, negating the advantage.`
          ]
        }
      ]
    },
    'algorithm-engineering': {
      title: 'Algorithm Engineering',
      subtitle: 'Bridging theoretical algorithms to efficient, production-grade implementations',
      sections: [
        {
          heading: 'What is Algorithm Engineering?',
          text: '<strong>Algorithm engineering</strong> is the discipline of transforming theoretically sound algorithms into fast, robust, and maintainable software. It goes beyond Big-O analysis to consider cache efficiency, memory layout, numerical stability, real-world input distributions, and hardware constraints. In ML, algorithm engineering determines whether a research idea becomes a usable product or remains a slow prototype.',
          list: [
            'Cache-aware and cache-oblivious algorithms optimize memory access patterns',
            'Numerical stability ensures correct results with floating-point arithmetic',
            'Profiling identifies actual bottlenecks, which are often not where theory predicts',
            'Approximation algorithms trade exact correctness for orders-of-magnitude speedups',
            'Production concerns: error handling, logging, reproducibility, and scalability'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Roofline analysis models the achievable performance of an algorithm based on operational intensity (flops per byte transferred) and hardware peak bandwidth/compute.',
          example: {
            title: 'Example: Roofline Analysis for Matrix Multiplication',
            code: `Roofline Model:
  Performance = min(Peak_FLOPS, AI × Peak_Bandwidth)

Where:
  AI = Arithmetic Intensity = FLOPs / bytes transferred

Scenario: Multiply two n×n matrices on a GPU
  - FLOPs: 2n³ (n³ multiplies + n³ adds)
  - Data transferred: 3n² × 4 bytes (float32) = 12n² bytes
  - AI = 2n³ / 12n² = n/6 FLOPs/byte

For n = 1,024:
  AI = 170.7 FLOPs/byte
  GPU Peak: 15 TFLOPS
  Memory Bandwidth: 900 GB/s
  Bandwidth limit = 170.7 × 900 = 153.6 GFLOPS

Since 153.6 GFLOPS < 15 TFLOPS:
  → Algorithm is memory-bound, not compute-bound`,
            output: 'Tiling, blocking, and shared-memory caching can raise effective AI and shift from memory-bound to compute-bound.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Theoretical optimality does not guarantee practical performance.',
          table: {
            headers: ['Aspect', 'Theoretical Analysis', 'Algorithm Engineering', 'Why It Matters'],
            rows: [
              ['Time', 'Big-O asymptotic growth', 'Wall-clock with real inputs', 'O(n) with large constant can be slower than O(n log n) with small constant'],
              ['Memory', 'Space complexity count', 'Cache misses, page faults, allocations', 'Pointer-chasing structures destroy cache performance'],
              ['Precision', 'Exact arithmetic assumed', 'Floating-point roundoff, overflow', 'Naive softmax overflows; stable softmax subtracts max first'],
              ['Scalability', 'Ideal machine model', 'NUMA, network topology, stragglers', 'Contention on shared variables kills parallel speedup'],
              ['Robustness', 'Correct for all valid inputs', 'Graceful degradation, error messages', 'Production systems fail on edge cases theory ignores'],
              ['Maintainability', 'Not a concern', 'Code clarity, tests, documentation', 'Unreadable “optimized” code accumulates bugs']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Optimizing before profiling (fix: measure first — use cProfile, PyTorch profiler, or NVIDIA Nsight; 80% of runtime is usually in 20% of the code)',
            'Mistake 2: Ignoring numerical stability in probability computations (fix: use log-space operations for likelihoods, stable softmax (subtract max), and Kahan summation for precision-critical sums)',
            'Mistake 3: Writing cache-oblivious code (fix: prefer contiguous arrays over linked lists, use row-major traversal matching storage order, and block nested loops to fit in cache)',
            'Mistake 4: Using double precision when float32 suffices (fix: ML models rarely need float64; mixed-precision training (FP16/BF16) cuts memory and doubles throughput on modern GPUs)',
            'Mistake 5: Treating algorithm engineering as a one-time optimization (fix: hardware evolves — re-profile and re-tune when moving from CPU to GPU, or from V100 to H100; algorithmic choices change with architecture)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Algorithm engineering separates research prototypes from production systems.',
          list: [
            '<strong>FlashAttention:</strong> Re-engineered transformer attention using tiling and kernel fusion to run 2–4× faster while using O(1) extra memory instead of O(n²)',
            '<strong>Apple ANE and Core ML:</strong> Engineers restructure neural network graphs to maximize utilization of the Apple Neural Engine’s fixed-function units and SRAM',
            '<strong>Search engines:</strong> Google’s index uses custom compressed sparse row formats, cache-friendly posting lists, and SIMD-optimized scoring — theory says O(1) lookup; engineering makes it microseconds',
            '<strong>SciPy and NumPy:</strong> BLAS/LAPACK implementations (OpenBLAS, MKL) are decades of algorithm engineering, optimizing every matrix multiply for cache, vectorization, and parallelization',
            '<strong>Approximate nearest neighbors:</strong> FAISS and ScaNN trade exact distance computation for 10–100× speedups with < 1% recall loss through quantization, graph pruning, and SIMD batching'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Algorithm engineering bridges theory and practice, focusing on real hardware and real inputs',
            'Cache efficiency, memory layout, and numerical stability often matter more than asymptotic complexity',
            'Roofline analysis determines whether an algorithm is compute-bound or memory-bound',
            'Profiling must precede optimization — blind optimization wastes effort',
            'Mixed precision, blocked loops, and contiguous arrays are universal performance wins',
            'The best engineered algorithm is fast, correct, readable, and maintainable'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What does Roofline analysis reveal about an algorithm?
Ans: It determines whether performance is limited by compute capacity (FLOPS) or memory bandwidth, based on arithmetic intensity (FLOPs per byte).`,
            `Q2: Why is a theoretically optimal O(n) algorithm sometimes slower in practice than an O(n log n) algorithm?
Ans: The O(n) algorithm may have large hidden constants, poor cache behavior, or complex control flow that overwhelms its asymptotic advantage on practical input sizes.`,
            `Q3: What is “stable softmax” and why is it numerically necessary?
Ans: Stable softmax subtracts the maximum input value before exponentiation to prevent overflow; without it, large logits produce infinite values and break training.`
          ]
        }
      ]
    }
  }
};
