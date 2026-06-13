export const mlalgoModule4Structure = {
  module4: {
    title: 'Module 4: Advanced Algorithmic Techniques',
    topics: [
      { id: 'advanced-graph-algorithms', title: 'Advanced Graph Algorithms' },
      { id: 'network-flow', title: 'Network Flow' },
      { id: 'linear-programming', title: 'Linear Programming' },
      { id: 'approximation-algorithms', title: 'Approximation Algorithms' },
      { id: 'randomized-algorithms', title: 'Randomized Algorithms' },
    ]
  }
};

export const mlalgoModule4Content = {
  module4: {
    'advanced-graph-algorithms': {
      title: 'Advanced Graph Algorithms',
      subtitle: 'Shortest paths, spanning trees, and graph traversal beyond the basics',
      sections: [
        {
          heading: 'What Are Advanced Graph Algorithms?',
          text: '<strong>Advanced graph algorithms</strong> extend basic traversal (BFS/DFS) to solve complex optimization problems on weighted and directed graphs. They are essential for network routing, scheduling, resource allocation, and many NP-hard problem approximations.',
          list: [
            'Shortest path algorithms find minimum-cost routes in weighted graphs',
            'Minimum spanning trees connect all nodes at lowest total edge cost',
            'Strongly connected components reveal tightly knit subgraphs',
            'Topological sorting orders nodes respecting directed dependencies',
            'These algorithms form the backbone of GPS navigation, network design, and compiler optimization'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dijkstra\'s algorithm greedily selects the minimum-distance node and relaxes all outgoing edges, guaranteeing shortest paths in graphs with non-negative weights.',
          example: {
            title: 'Dijkstra Relaxation Step',
            code: `Dijkstra(G, source):
  dist[source] = 0
  dist[v] = ∞ for all other v
  S = empty set (visited nodes)
  
  while S ≠ V:
    u = vertex in V\S with min dist[u]
    S = S ∪ {u}
    
    for each neighbor v of u:
      if dist[v] > dist[u] + weight(u,v):
        dist[v] = dist[u] + weight(u,v)
        prev[v] = u

Relaxation:
  dist[v] = min(dist[v], dist[u] + w(u,v))`,
            output: 'After processing all nodes, dist[v] holds the shortest path cost from source to every node v.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different shortest-path and spanning-tree algorithms suit different graph properties and constraints.',
          table: {
            headers: ['Algorithm', 'Problem', 'Time Complexity', 'Constraints', 'Key Feature'],
            rows: [
              ['Dijkstra', 'Single-source shortest path', 'O((V+E) log V) with heap', 'Non-negative weights only', 'Greedy edge relaxation'],
              ['Bellman-Ford', 'Single-source shortest path', 'O(VE)', 'Handles negative weights', 'Detects negative cycles'],
              ['Floyd-Warshall', 'All-pairs shortest path', 'O(V³)', 'Small dense graphs', 'Dynamic programming'],
              ['Prim\'s', 'Minimum spanning tree', 'O(E log V)', 'Undirected weighted graph', 'Grow tree from a node'],
              ['Kruskal\'s', 'Minimum spanning tree', 'O(E log E)', 'Undirected weighted graph', 'Sort edges, union-find'],
              ['Kosaraju / Tarjan', 'Strongly connected components', 'O(V+E)', 'Directed graph', 'Two-pass DFS / single DFS']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Dijkstra on graphs with negative weights (fix: switch to Bellman-Ford; Dijkstra\'s greedy assumption breaks with negative edges)',
            'Mistake 2: Running Floyd-Warshall on sparse graphs with millions of nodes (fix: use Dijkstra from each source for sparse graphs; O(VE log V) beats O(V³))',
            'Mistake 3: Forgetting to initialize distances to infinity (fix: always set dist[v] = ∞ before relaxation; zero-initialization silently corrupts results)',
            'Mistake 4: Using an unweighted BFS approach for weighted graphs (fix: BFS gives shortest hop count, not shortest total weight; use Dijkstra for weighted edges)',
            'Mistake 5: Not handling disconnected components in spanning tree algorithms (fix: check if all nodes are reachable; a spanning tree requires a connected graph)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Advanced graph algorithms power systems we rely on every day.',
          list: [
            '<strong>GPS Navigation:</strong> Dijkstra and A* compute fastest routes on road networks with millions of intersections and real-time traffic weights',
            '<strong>Network Routing:</strong> OSPF and BGP protocols use shortest-path algorithms to route packets through the internet backbone',
            '<strong>Compiler Optimization:</strong> Topological sort orders instructions respecting data dependencies; cycle detection prevents deadlock in resource allocation',
            '<strong>Social Networks:</strong> Strongly connected components identify tightly knit communities; shortest paths measure degrees of separation',
            '<strong>Supply Chain:</strong> Minimum spanning trees design cost-optimal distribution networks connecting warehouses and retail outlets'
          ]
        },
        {
          heading: 'Pro Tip',
          note: 'For large-scale road networks, <strong>Contraction Hierarchies</strong> and <strong>Hub Labels</strong> pre-process the graph to answer shortest-path queries in microseconds — orders of magnitude faster than running Dijkstra from scratch.'
        }
      ]
    },
    'network-flow': {
      title: 'Network Flow',
      subtitle: 'Modeling capacity-constrained networks and finding optimal flows',
      sections: [
        {
          heading: 'What is Network Flow?',
          text: '<strong>Network flow</strong> models problems where a commodity (data, traffic, fluid) moves through a network of pipes or channels with capacity limits. The goal is to maximize total flow from a source to a sink, or to find the minimum cost of achieving a required flow.',
          list: [
            'A flow network is a directed graph where each edge has a capacity and carries a flow',
            'Flow conservation: total flow into a node equals total flow out (except source and sink)',
            'The max-flow min-cut theorem states that the maximum flow equals the capacity of the minimum cut',
            'Applications span logistics, computer networks, image segmentation, and matching problems'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Ford-Fulkerson method repeatedly finds augmenting paths in the residual graph and increases flow along them until no path remains.',
          example: {
            title: 'Max-Flow Algorithm (Edmonds-Karp)',
            code: `Initialize:
  flow[e] = 0 for all edges
  residual_capacity[e] = capacity[e]

while augmenting path p exists from s to t in residual graph:
  bottleneck = min(residual_capacity[e] for e in p)
  
  for each edge e in p:
    if e is forward edge:
      flow[e] += bottleneck
      residual_capacity[e] -= bottleneck
    else (backward edge):
      flow[e] -= bottleneck
      residual_capacity[e] += bottleneck

return total_flow

Residual graph:
  Forward edge: capacity - flow (remaining capacity)
  Backward edge: flow (amount that can be undone)`,
            output: 'Total flow equals the sum of bottleneck values across all augmenting paths found.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Flow algorithms differ in how they find augmenting paths and their time complexity guarantees.',
          table: {
            headers: ['Algorithm', 'Path Selection', 'Time Complexity', 'Best For', 'Notes'],
            rows: [
              ['Ford-Fulkerson', 'Any augmenting path', 'O(E · max_flow)', 'Small integer capacities', 'Depends on path choice; can be slow'],
              ['Edmonds-Karp', 'Shortest augmenting path (BFS)', 'O(VE²)', 'General use', 'Polynomial; widely implemented'],
              ['Dinic\'s', 'Blocking flow (level graph + DFS)', 'O(V²E)', 'Dense networks', 'Faster in practice for many cases'],
              ['Push-Relabel', 'Local excess pushing + height relabeling', 'O(V²√E)', 'Very large networks', 'Often fastest in practice'],
              ['Min-Cost Max-Flow', 'Shortest path by cost (SPFA / Dijkstra)', 'O(flow · VE)', 'Cost optimization', 'Finds cheapest way to push flow']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting backward edges in the residual graph (fix: always add reverse edges with initial capacity 0; they allow flow to be rerouted during augmentation)',
            'Mistake 2: Using Ford-Fulkerson with DFS on graphs with large capacities (fix: use Edmonds-Karp or Dinic\'s; naive DFS can require O(max_flow) iterations)',
            'Mistake 3: Not verifying flow conservation at intermediate nodes (fix: ensure Σ_in flow = Σ_out flow for all nodes except source and sink; debug by checking node balances)',
            'Mistake 4: Confusing max-flow with min-cost max-flow (fix: max-flow ignores edge costs; min-cost max-flow finds the cheapest way to achieve maximum flow — use the right variant for your problem)',
            'Mistake 5: Applying max-flow to undirected graphs without converting (fix: replace each undirected edge with two directed edges of the same capacity, or use specialized algorithms for undirected flow)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Network flow is one of the most broadly applicable algorithmic frameworks.',
          list: [
            '<strong>Internet Traffic Engineering:</strong> Max-flow models bandwidth allocation across routers; minimum cuts identify network bottlenecks',
            '<strong>Image Segmentation:</strong> Graph cuts (min-cut / max-flow) separate foreground from background in medical imaging and computer vision',
            '<strong>Airline Scheduling:</strong> Crew and aircraft assignment problems reduce to network flow with additional constraints (circulation with demands)',
            '<strong>Bipartite Matching:</strong> Maximum bipartite matching is a special case of max-flow; used for job-to-worker assignment, dating algorithms, and ad placement',
            '<strong>Project Selection:</strong> Selecting profitable projects with prerequisite dependencies reduces to a max-flow / min-cut formulation'
          ]
        },
        {
          heading: 'Pro Tip',
          note: 'The <strong>max-flow min-cut theorem</strong> is dual: the value of the maximum flow equals the capacity of the minimum s-t cut. Use this to verify your implementation — compute both and check equality.'
        }
      ]
    },
    'linear-programming': {
      title: 'Linear Programming',
      subtitle: 'Optimizing linear objective functions subject to linear constraints',
      sections: [
        {
          heading: 'What is Linear Programming?',
          text: '<strong>Linear Programming (LP)</strong> is a mathematical optimization technique where the goal is to maximize or minimize a linear objective function, subject to a set of linear equality and inequality constraints. It is the workhorse of operations research and appears inside many ML algorithms.',
          list: [
            'The objective function and all constraints must be linear in the decision variables',
            'The feasible region is a convex polytope defined by the constraint intersections',
            'The optimal solution always lies at a vertex (corner point) of the feasible region',
            'LPs are solvable in polynomial time; integer variants (ILP) are NP-hard in general'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The standard form of a linear program expresses the problem as maximizing a linear function subject to linear inequality constraints and non-negativity.',
          example: {
            title: 'Standard Form LP',
            code: `Maximize:
  z = c₁x₁ + c₂x₂ + ... + cₙxₙ

Subject to:
  a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁
  a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂
  ...
  aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ ≤ bₘ

And:
  x₁, x₂, ..., xₙ ≥ 0

Matrix form:
  Maximize: cᵀx
  Subject to: Ax ≤ b, x ≥ 0`,
            output: 'Any LP can be converted to standard form by adding slack variables and handling unrestricted variables.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'LP variants differ in whether variables must be integers and what types of constraints are allowed.',
          table: {
            headers: ['Variant', 'Variable Type', 'Constraint Type', 'Complexity', 'Solvers'],
            rows: [
              ['Linear Program (LP)', 'Continuous (real)', 'Linear equalities/inequalities', 'Polynomial (P)', 'Simplex, interior-point'],
              ['Integer LP (ILP)', 'Integer', 'Linear equalities/inequalities', 'NP-hard', 'Branch-and-bound, cutting planes'],
              ['Mixed ILP (MILP)', 'Some integer, some continuous', 'Linear equalities/inequalities', 'NP-hard', 'CPLEX, Gurobi, SCIP'],
              ['Quadratic Program (QP)', 'Continuous', 'Linear constraints, quadratic objective', 'Polynomial (convex)', 'Interior-point, active-set'],
              ['Semidefinite Program (SDP)', 'Matrix variables', 'Linear + positive semidefinite', 'Polynomial', 'Specialized solvers'],
              ['Nonlinear Program', 'Continuous', 'Nonlinear constraints/objective', 'Generally hard', 'Gradient-based, heuristics']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming LP solvers always return integer solutions (fix: LP solutions are real-valued; round carefully or switch to ILP if integrality is required)',
            'Mistake 2: Using Simplex for very large sparse LPs without considering interior-point methods (fix: interior-point methods often scale better for large problems; benchmark both)',
            'Mistake 3: Formulating constraints that are actually nonlinear (e.g., products of variables) (fix: check each term is linear; if not, consider NLP solvers or linearization tricks)',
            'Mistake 4: Ignoring numerical stability in LP formulations (fix: scale constraints so coefficients are of similar magnitude; ill-conditioned matrices cause solver failures)',
            'Mistake 5: Not verifying that the feasible region is bounded (fix: unbounded LPs have no finite optimum; add realistic upper bounds or check for unbounded rays)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Linear programming underpins optimization in virtually every industry.',
          list: [
            '<strong>Supply Chain Optimization:</strong> LP determines optimal production quantities across factories, minimizing cost while meeting demand and capacity constraints',
            '<strong>Portfolio Optimization:</strong> Markowitz mean-variance optimization uses quadratic programming (QP) to allocate assets; LP handles linearized risk constraints',
            '<strong>Machine Learning:</strong> Support Vector Machines (SVMs) solve a QP; L1-regularized regression can be cast as an LP; LP relaxation approximates combinatorial problems',
            '<strong>Resource Allocation:</strong> Airlines use LP to schedule crews and aircraft; hospitals use it to allocate operating rooms and staff',
            '<strong>Energy Grids:</strong> Power generation dispatch minimizes fuel cost subject to demand, transmission capacity, and environmental constraints — a classic LP'
          ]
        },
        {
          heading: 'Pro Tip',
          note: 'The <strong>Simplex algorithm</strong> moves along edges of the feasible polytope from vertex to vertex. While its worst-case is exponential, it performs remarkably well in practice. Modern <strong>interior-point methods</strong> (Karmarkar\'s algorithm family) guarantee polynomial time and excel on very large problems.'
        }
      ]
    },
    'approximation-algorithms': {
      title: 'Approximation Algorithms',
      subtitle: 'Finding near-optimal solutions when exact solutions are computationally infeasible',
      sections: [
        {
          heading: 'What Are Approximation Algorithms?',
          text: '<strong>Approximation algorithms</strong> are polynomial-time algorithms designed for NP-hard optimization problems. They guarantee solutions within a provable factor of the optimal value, trading exact optimality for computational tractability.',
          list: [
            'Many real-world problems (TSP, vertex cover, set cover, knapsack) are NP-hard',
            'Exact algorithms would take exponential time for large inputs',
            'Approximation algorithms run in polynomial time with guaranteed quality bounds',
            'The approximation ratio α means the solution is at most α times the optimal (for minimization) or at least 1/α times the optimal (for maximization)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The approximation ratio formally bounds how far the algorithm\'s solution can deviate from the true optimum.',
          example: {
            title: 'Approximation Ratio Definition',
            code: `For a minimization problem:
  Approximation ratio α ≥ 1
  
  ALG(I) ≤ α · OPT(I)   for all instances I
  
  Where:
    ALG(I) = cost of algorithm's solution
    OPT(I) = cost of optimal solution

Example: 2-approximation for Vertex Cover
  Greedy: pick both endpoints of any uncovered edge
  
  Guarantee: |ALG| ≤ 2 · |OPT|
  
  Proof sketch:
    Matching edges are vertex-disjoint
    OPT must cover every matching edge
    → |OPT| ≥ size of maximum matching
    ALG picks 2 vertices per matching edge
    → |ALG| = 2 × |matching| ≤ 2 × |OPT|`,
            output: 'A 2-approximation guarantees the greedy vertex cover is at most twice the size of the minimum vertex cover.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Approximation algorithms differ in their guarantees, techniques, and the problems they address.',
          table: {
            headers: ['Problem', 'Best Known Ratio', 'Technique', 'Tight?'],
            rows: [
              ['Vertex Cover', '2 (and 2 - Θ(1/√log|V|))', 'LP rounding / greedy matching', 'Assuming UGC, hard to beat 2 - ε'],
              ['Set Cover', 'H(n) = ln(n) + O(1)', 'Greedy (max uncovered elements)', 'Tight unless P=NP'],
              ['Metric TSP', '3/2 (Christofides)', 'MST + minimum-weight matching', '3/2 is tight for this approach'],
              ['Max-Cut', '0.878 (Goemans-Williamson)', 'SDP rounding', 'Best possible assuming UGC'],
              ['Knapsack', '1 + ε (FPTAS)', 'Dynamic programming / scaling', 'Arbitrarily close to optimal'],
              ['Max-SAT', '3/4', 'LP + randomized rounding', 'Can be improved with SDP for some variants']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing approximation ratio with probability of success (fix: approximation ratio is deterministic; randomized algorithms have both approximation ratio and success probability — understand which guarantee applies)',
            'Mistake 2: Using a greedy algorithm without proving its approximation bound (fix: always verify the approximation ratio; some greedy algorithms have unbounded approximation ratios on certain problem variants)',
            'Mistake 3: Applying approximation algorithms when exact solutions are feasible (fix: for small instances, use exact methods like branch-and-bound or dynamic programming; reserve approximations for large or online settings)',
            'Mistake 4: Ignoring the difference between minimization and maximization ratios (fix: for maximization, the ratio is OPT/ALG ≤ α; the reciprocal relationship matters when comparing papers)',
            'Mistake 5: Assuming all NP-hard problems admit good approximations (fix: some problems like general TSP and clique are inapproximable within any constant factor unless P=NP — know the hardness-of-approximation landscape)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Approximation algorithms enable practical solutions to otherwise intractable problems.',
          list: [
            '<strong>Network Design:</strong> Metric TSP approximation (Christofides) plans delivery routes for logistics companies with near-optimal efficiency',
            '<strong>Facility Location:</strong> k-center and k-median approximations place warehouses and hospitals to minimize average or maximum travel distance',
            '<strong>Ad Placement:</strong> Set cover approximations select ad campaigns that reach all target demographics at minimum cost',
            '<strong>Wireless Networks:</strong> Independent set and dominating set approximations optimize sensor placement and transmission scheduling',
            '<strong>Cloud Resource Allocation:</strong> Bin packing and scheduling approximations place virtual machines on physical servers with bounded resource waste'
          ]
        },
        {
          heading: 'Pro Tip',
          note: 'A <strong>Polynomial-Time Approximation Scheme (PTAS)</strong> achieves ratio 1+ε in time polynomial in n for any fixed ε. An <strong>FPTAS</strong> is polynomial in both n and 1/ε. Knapsack has an FPTAS — you can get arbitrarily close to optimal with modest runtime increase.'
        }
      ]
    },
    'randomized-algorithms': {
      title: 'Randomized Algorithms',
      subtitle: 'Using randomness to achieve simplicity, speed, and provable performance bounds',
      sections: [
        {
          heading: 'What Are Randomized Algorithms?',
          text: '<strong>Randomized algorithms</strong> use random numbers as part of their logic to make decisions during execution. They trade determinism for simplicity, speed, or the ability to handle adversarial inputs. Two main categories exist: Las Vegas algorithms (always correct, random runtime) and Monte Carlo algorithms (fixed runtime, probabilistic correctness).',
          list: [
            'Las Vegas: always returns the correct answer; running time is a random variable',
            'Monte Carlo: has a fixed runtime; may return an incorrect answer with small probability',
            'Randomness breaks symmetry, avoids worst-case inputs, and simplifies complex algorithms',
            'Used in quicksort, hashing, primality testing, streaming algorithms, and randomized rounding'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The expected value and high-probability bounds are the primary analytical tools for randomized algorithms.',
          example: {
            title: 'Randomized Quicksort Analysis',
            code: `Randomized Quicksort:
  1. Pick pivot uniformly at random from subarray
  2. Partition around pivot
  3. Recurse on left and right subarrays

Expected comparisons:
  E[T(n)] = 2n ln(n) + O(n)
          ≈ 1.39 n log₂(n)

Chernoff bound (high probability):
  P(T(n) > c · E[T(n)]) ≤ e^(-Θ(c))
  
  For c = 4:
  P(T(n) > 4 · E[T(n)]) is extremely small

Key insight:
  Random pivot selection makes the
  probability of worst-case O(n²) behavior
  exponentially small, independent of input.`,
            output: 'Randomized quicksort runs in O(n log n) expected time with overwhelmingly high probability, regardless of input distribution.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Randomized algorithms differ in their guarantee types, typical use cases, and analytical frameworks.',
          table: {
            headers: ['Type', 'Correctness', 'Runtime', 'Example', 'When to Use'],
            rows: [
              ['Las Vegas', 'Always correct', 'Random (bounded expected)', 'Randomized quicksort, randomized select', 'When correctness is essential'],
              ['Monte Carlo', 'Probabilistically correct', 'Deterministic (fixed)', 'Miller-Rabin primality test, Freivalds\' matrix check', 'When speed is essential, errors tolerable'],
              ['Monte Carlo (1-sided)', 'No false positives OR no false negatives', 'Deterministic', 'Primality test (no false negatives)', 'When one error direction is acceptable'],
              ['Monte Carlo (2-sided)', 'Small error probability both ways', 'Deterministic', 'Freivalds\' matrix multiplication verification', 'When both errors are equally acceptable'],
              ['Randomized rounding', 'Approximation guarantee in expectation', 'Deterministic output', 'Set cover, max-cut LP relaxations', 'Derandomizing LP solutions']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a weak pseudorandom generator that destroys algorithmic guarantees (fix: use cryptographically secure RNGs or at least high-quality Mersenne Twister; poor randomness can reintroduce worst-case behavior)',
            'Mistake 2: Running a Monte Carlo algorithm once and treating the result as certain (fix: repeat independent trials and take majority vote; error probability drops exponentially with repetitions)',
            'Mistake 3: Confusing expected runtime with worst-case runtime (fix: report both; expected O(n log n) does not guarantee O(n log n) on every single run)',
            'Mistake 4: Not analyzing the variance or tail bounds (fix: use Markov, Chebyshev, or Chernoff bounds to show concentration; expected value alone is insufficient for probabilistic guarantees)',
            'Mistake 5: Implementing randomized algorithms without considering reproducibility (fix: seed the RNG for deterministic debugging and testing; use different seeds in production for true randomness)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Randomized algorithms are indispensable in modern computing.',
          list: [
            '<strong>Hashing:</strong> Universal hash families guarantee low collision probability; Bloom filters use random hash functions for space-efficient set membership testing',
            '<strong>Streaming & Big Data:</strong> Count-Min Sketch and HyperLogLog use randomization to estimate frequencies and cardinalities in sublinear space',
            '<strong>Cryptography:</strong> Miller-Rabin primality test randomly checks witnesses to determine if a large number is prime — essential for RSA key generation',
            '<strong>Machine Learning:</strong> Stochastic gradient descent uses random mini-batches; random forests and dropout rely on randomization for regularization',
            '<strong>Load Balancing:</strong> Power of two choices — assigning a task to the less loaded of two randomly chosen servers — dramatically reduces maximum load versus random assignment'
          ]
        },
        {
          heading: 'Pro Tip',
          note: '<strong>Probability amplification</strong> is a powerful technique: if a Monte Carlo algorithm has error probability p, running it k times independently and taking the majority answer reduces error to approximately e^(-2k(1/2 - p)²) by Chernoff bounds. For p = 0.1 and k = 100, the error probability is astronomically small.'
        }
      ]
    }
  }
};
