// artificial intelligence — Module 2 hand-authored (LinkedList-reference depth)
// Module 2: Search, Games, and Multi-Agent Systems

export const aiModule2Structure = {
  module2: {
    title: 'Module 2: Search, Games, and Multi-Agent Systems',
    topics: [
      { id: 'constraint-satisfaction', title: 'Constraint Satisfaction Problems' },
      { id: 'adversarial-search', title: 'Adversarial Search' },
      { id: 'minimax', title: 'Minimax Algorithm' },
      { id: 'alpha-beta', title: 'Alpha-Beta Pruning' },
      { id: 'expectimax', title: 'Expectimax Search' },
      { id: 'game-theory', title: 'Game Theory' },
      { id: 'monte-carlo-tree-search', title: 'Monte Carlo Tree Search' },
      { id: 'alpha-go-ai', title: 'AlphaGo and AlphaZero' },
      { id: 'multi-agent-systems', title: 'Multi-Agent Systems' },
      { id: 'game-playing', title: 'Game Playing AI' }
    ]
  }
};

export const aiModule2Content = {
  module2: {
    'constraint-satisfaction': {
      title: 'Constraint Satisfaction Problems',
      subtitle: 'Solving problems defined by variables, domains, and constraints',
      sections: [
        // A — What is a CSP?
        {
          heading: 'What is a Constraint Satisfaction Problem?',
          text: 'A <strong>Constraint Satisfaction Problem (CSP)</strong> is a way of phrasing a search problem as a set of <em>variables</em>, each with a <em>domain</em> of possible values, plus a set of <em>constraints</em> that say which combinations of values are allowed. The goal is to assign a value to every variable so that every constraint is satisfied. The power of the CSP formulation is that it separates the <em>what</em> (variables and constraints) from the <em>how</em> (the search algorithm), so one generic solver — backtracking plus constraint propagation — can be reused across map coloring, Sudoku, scheduling, and configuration problems.',
          list: [
            '<strong>Variables:</strong> The entities to be assigned values (e.g. regions on a map, cells of a Sudoku grid, tasks in a schedule).',
            '<strong>Domains:</strong> The set of possible values for each variable (e.g. {Red, Green, Blue} for map coloring, {1..9} for Sudoku).',
            '<strong>Constraints:</strong> Rules that limit which combinations of values variables can take together (e.g. "adjacent regions must differ", "each row must contain each digit once").',
            '<strong>Assignment:</strong> A mapping from variables to values; an assignment is <em>consistent</em> if it violates no constraint and <em>complete</em> if every variable has a value.',
            '<strong>Solution:</strong> A complete, consistent assignment — exactly what we are looking for.',
            '<strong>Unary / binary / global constraints:</strong> Unary constraints restrict one variable, binary constraints relate two, and global constraints (like "all-different") span many variables at once.'
          ]
        },
        // B — Components / formal model
        {
          heading: 'Formal Model of a CSP',
          text: 'A CSP is the triple ⟨X, D, C⟩. Understanding this triple is the foundation for everything that follows — every solver, heuristic, and propagation technique operates on these three pieces.',
          list: [
            '<strong>X = {X₁, X₂, …, Xₙ}:</strong> the set of variables.',
            '<strong>D = {D₁, D₂, …, Dₙ}:</strong> the set of domains, where Dᵢ is the set of values variable Xᵢ may take.',
            '<strong>C = {C₁, C₂, …, Cₘ}:</strong> the set of constraints. Each constraint Cⱼ = ⟨scope, rel⟩ specifies a tuple of variables (its scope) and a relation listing the allowable combinations of their values.',
            '<strong>State space size:</strong> The product of domain sizes, |D₁| × |D₂| × … × |Dₙ|. For 81 Sudoku cells with domain 1..9 this is 9⁸¹ — far too large to enumerate, which is why search plus propagation is essential.'
          ]
        },
        // C — Mermaid concept map
        {
          heading: 'Visual Diagram — CSP Anatomy',
          text: 'The diagram shows the three components of a CSP and how a solver iterates over them: it picks a variable, tries a value from that variable domain, checks the value against the relevant constraints, and either continues or backtracks.',
          diagram: {
            caption: 'Anatomy of a Constraint Satisfaction Problem: variables, domains, constraints, and the solver loop',
            chart: `flowchart LR
    subgraph X[Variables X]
      direction TB
      X1[X1: WA]
      X2[X2: NT]
      X3[X3: SA]
      X4[X4: Q]
    end
    subgraph D[Domains D]
      direction TB
      D1[D1: Red, Green, Blue]
      D2[D2: Red, Green, Blue]
      D3[D3: Red, Green, Blue]
    end
    subgraph C[Constraints C]
      direction TB
      C1[WA != NT]
      C2[NT != SA]
      C3[SA != Q]
    end
    X1 -.assign.-> D1
    X2 -.assign.-> D2
    X3 -.assign.-> D3
    X1 -.checked by.-> C1
    X2 -.checked by.-> C1
    X2 -.checked by.-> C2
    X3 -.checked by.-> C2
    X3 -.checked by.-> C3
    style X fill:#3498db,color:#fff
    style D fill:#2ecc71,color:#fff
    style C fill:#e74c3c,color:#fff`
          }
        },
        // D — Example: map coloring
        {
          heading: 'Example — Map Coloring of Australia',
          text: 'The classic Russell & Norvig example: color the seven regions of Australia so that no two adjacent regions share a color. The variables are the regions; the domain of each is {Red, Green, Blue}; the constraints are that every pair of neighboring regions must differ. With three colors and this particular graph, a valid coloring exists.',
          diagram: {
            caption: 'Australia map coloring CSP: 7 regions, 3 colors, adjacency constraints',
            chart: `flowchart LR
    WA --> NT
    NT --> SA
    SA --> Q
    Q --> NSW
    NSW --> V
    SA --> NSW
    SA --> V
    NT --> Q
    WA --> SA
    style WA fill:#e74c3c,color:#fff
    style NT fill:#2ecc71,color:#fff
    style SA fill:#3498db,color:#fff
    style Q fill:#e74c3c,color:#fff
    style NSW fill:#2ecc71,color:#fff
    style V fill:#3498db,color:#fff`
          }
        },
        // E — Types of constraints
        {
          heading: 'Types of Constraints',
          text: 'Constraints come in several shapes. Recognizing the shape matters because each shape admits different, more efficient propagation algorithms.'
        },
        {
          heading: 'Unary Constraint',
          text: 'Restricts a single variable independently of the others. Example: in Sudoku, a cell pre-filled with a 7 has the unary constraint "this cell = 7". Unary constraints are handled by simply removing disallowed values from that variable domain before search starts.',
          diagram: {
            caption: 'Unary constraint: restricts one variable only',
            chart: `flowchart LR
    X1[Cell 0,0] --> D1[Domain 1..9]
    UC[Unary: must be 7] -.prunes.-> D1
    D1 --> D1p[Domain: 7]
    style UC fill:#e74c3c,color:#fff
    style D1p fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'Binary Constraint',
          text: 'Relates two variables. The Australia map coloring constraints are all binary (each says "region A ≠ region B"). A CSP with only binary constraints can be drawn as a <em>constraint graph</em> where nodes are variables and edges are constraints, which lets us use graph techniques like arc consistency.',
          diagram: {
            caption: 'Binary constraint graph for map coloring',
            chart: `flowchart LR
    WA --- NT
    NT --- SA
    SA --- Q
    SA --- NSW
    SA --- V
    NSW --- V
    NT --- Q
    Q --- NSW
    WA --- SA
    style WA fill:#9b59b6,color:#fff
    style SA fill:#9b59b6,color:#fff`
          }
        },
        {
          heading: 'Global Constraint',
          text: 'A single constraint over many variables with structure that specialized algorithms can exploit. The most important is <strong>AllDifferent</strong> — "all of these variables must take distinct values" — used everywhere in Sudoku (every row, column, and box is an AllDifferent). Specialized propagation for AllDifferent (Hall sets, Regin algorithm) is far stronger than treating it as a pile of binary inequalities.',
          diagram: {
            caption: 'AllDifferent global constraint over a Sudoku row of 9 cells',
            chart: `flowchart LR
    AD[AllDifferent] --> R1[Row cells]
    subgraph R1[Row: 9 cells]
      direction LR
      C1[c1] --- C2[c2] --- C3[c3] --- C4[c4] --- C5[c5] --- C6[c6] --- C7[c7] --- C8[c8] --- C9[c9]
    end
    style AD fill:#e74c3c,color:#fff
    style R1 fill:#3498db,color:#fff`
          }
        },
        // F — Backtracking search
        {
          heading: 'Backtracking Search',
          text: 'Backtracking is depth-first search over the assignment space. Pick an unassigned variable, try a value, recurse; if recursion fails, undo (backtrack) and try the next value. The key insight is that naive backtracking alone is exponential, so we bolt on heuristics and propagation to make it practical.',
          diagram: {
            caption: 'Backtracking search tree for a small CSP',
            chart: `flowchart TD
    R[Empty assignment] --> A1[X1 = Red]
    R --> A2[X1 = Green]
    R --> A3[X1 = Blue]
    A1 --> B1[X2 = Green ✓]
    A1 --> B2[X2 = Red ✗ backtrack]
    B1 --> C1[X3 = Blue ✓ solution]
    style C1 fill:#2ecc71,color:#fff
    style B2 fill:#e74c3c,color:#fff`
          }
        },
        {
          heading: 'Variable and Value Ordering Heuristics',
          text: 'The order in which we choose variables and values dramatically affects how much of the tree we explore. The two classic heuristics are the single biggest practical win in CSP solving.',
          list: [
            '<strong>Minimum Remaining Values (MRV):</strong> Always pick the unassigned variable with the fewest legal values left. A variable about to run out of options is the most likely to cause a failure — fail fast so we prune the tree early.',
            '<strong>Degree heuristic:</strong> Tie-breaker for MRV: pick the variable involved in the most constraints on other unassigned variables, because assigning it shrinks the remaining problem the most.',
            '<strong>Least-Constraining-Value (LCV):</strong> Once a variable is chosen, try the value that rules out the fewest options for its neighbors first. We want to find <em>a</em> solution, so leave the most room for the rest of the search.',
            '<strong>Forward checking:</strong> After each assignment, remove now-impossible values from the domains of neighboring variables. If any neighbor domain becomes empty, backtrack immediately — no point going deeper.'
          ],
          note: 'MRV + LCV + forward checking is the standard combination. They convert backtracking from "tries 9^81 things" into "tries a few thousand things" on Sudoku.'
        },
        {
          heading: 'Python Implementation — Backtracking with MRV + LCV',
          text: 'A clean, self-contained backtracking solver that uses MRV to pick variables, LCV to order values, and forward checking to prune neighbors. It works on any CSP described as a dictionary of domains plus a binary constraint function.',
          example: {
            title: 'Generic Backtracking CSP Solver',
            code: `def backtrack(assignment, domains, neighbors, constraint):
    # MRV: choose the unassigned variable with fewest legal values left
    unassigned = [v for v in domains if v not in assignment]
    if not unassigned:
        return dict(assignment)                 # complete -> solution
    var = min(unassigned, key=lambda v: len(domains[v]))

    # LCV: order values by how few options they leave neighbors
    def conflicts(value):
        return sum(value in domains[n] for n in neighbors[var])
    for value in sorted(domains[var], key=conflicts):
        if all(constraint(var, value, n, assignment[n]) for n in neighbors[var] if n in assignment):
            assignment[var] = value
            saved = {n: domains[n] for n in neighbors[var]}   # forward checking
            for n in neighbors[var]:
                if n not in assignment and value in domains[n]:
                    domains[n] = domains[n] - {value}
                    if not domains[n]:                          # empty -> dead end
                        del assignment[var]
                        for k in saved: domains[k] = saved[k]
                        break
            else:
                result = backtrack(assignment, domains, neighbors, constraint)
                if result is not None:
                    return result
            del assignment[var]
            for k in saved: domains[k] = saved[k]
    return None

# constraint for map coloring: adjacent regions must differ
def different(a, va, b, vb):
    return va != vb`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation — Backtracking with MRV',
          text: 'The same solver in Java. The CSP is described by a list of variables, a Map from variable to its domain (a Set), and a Map from variable to the set of its neighbors.',
          example: {
            title: 'Generic Backtracking CSP Solver in Java',
            code: `import java.util.*;

public class CSP {
    List<String> variables;
    Map<String, Set<Integer>> domains;
    Map<String, Set<String>> neighbors;

    public CSP(List<String> variables, Map<String, Set<Integer>> domains,
               Map<String, Set<String>> neighbors) {
        this.variables = variables;
        this.domains = domains;
        this.neighbors = neighbors;
    }

    public Map<String, Integer> solve() {
        return backtrack(new HashMap<>(), copyDomains(domains));
    }

    private Map<String, Integer> backtrack(Map<String, Integer> assignment,
                                            Map<String, Set<Integer>> domains) {
        String var = selectUnassignedMRV(assignment, domains);
        if (var == null) return new HashMap<>(assignment);          // complete
        for (int value : new TreeSet<>(domains.get(var))) {        // try each value
            if (consistent(var, value, assignment)) {
                assignment.put(var, value);
                // forward checking snapshot
                Map<String, Set<Integer>> saved = new HashMap<>();
                boolean dead = false;
                for (String n : neighbors.get(var)) {
                    if (!assignment.containsKey(n) && domains.get(n).contains(value)) {
                        saved.put(n, new HashSet<>(domains.get(n)));
                        domains.get(n).remove(value);
                        if (domains.get(n).isEmpty()) { dead = true; break; }
                    }
                }
                if (!dead) {
                    Map<String, Integer> result = backtrack(assignment, domains);
                    if (result != null) return result;
                }
                assignment.remove(var);
                for (Map.Entry<String, Set<Integer>> e : saved.entrySet())
                    domains.get(e.getKey()).addAll(e.getValue());
            }
        }
        return null;
    }

    private String selectUnassignedMRV(Map<String, Integer> a,
                                       Map<String, Set<Integer>> d) {
        String best = null; int bestLen = Integer.MAX_VALUE;
        for (String v : variables) if (!a.containsKey(v) && d.get(v).size() < bestLen) {
            best = v; bestLen = d.get(v).size();
        }
        return best;
    }

    private boolean consistent(String var, int value, Map<String, Integer> a) {
        for (String n : neighbors.get(var))
            if (a.containsKey(n) && a.get(n) == value) return false;
        return true;
    }

    private Map<String, Set<Integer>> copyDomains(Map<String, Set<Integer>> d) {
        Map<String, Set<Integer>> c = new HashMap<>();
        for (var e : d.entrySet()) c.put(e.getKey(), new HashSet<>(e.getValue()));
        return c;
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        // G — Constraint propagation: AC-3
        {
          heading: 'Constraint Propagation — Arc Consistency (AC-3)',
          text: 'Instead of only checking constraints when we assign a value, we proactively <em>prune</em> the domains of all variables until every remaining value has at least one supporting value in every neighbor. This shrinks the search space before any branching happens. The standard algorithm is AC-3: maintain a queue of arcs (directed constraint pairs); pop an arc and make it consistent; if a domain shrinks, re-add the arcs that depend on it; stop when the queue is empty.',
          diagram: {
            caption: 'AC-3: pop arc (Xi, Xj), prune Xi values with no support in Xj, re-queue affected arcs',
            chart: `flowchart LR
    Q[Queue of arcs] --> A[Pop arc Xi,Xj]
    A --> M[Make Xi consistent with Xj]
    M --> S{Xi domain shrunk?}
    S -->|Yes| Q2[Re-add arcs Xk,Xi for all k != j] --> Q
    S -->|No| C{Queue empty?}
    C -->|No| A
    C -->|Yes| D[Domains are arc-consistent]
    style S fill:#f1c40f,color:#000
    style D fill:#2ecc71,color:#fff`
          }
        },
        {
          heading: 'AC-3 in Python',
          example: {
            title: 'AC-3 Arc Consistency',
            code: `from collections import deque

def ac3(domains, neighbors, constraint):
    # queue of every directed arc (Xi, Xj)
    queue = deque((xi, xj) for xi in domains for xj in neighbors[xi])
    while queue:
        xi, xj = queue.popleft()
        if revise(domains, xi, xj, constraint):
            if not domains[xi]:            # a domain emptied -> unsolvable
                return False
            for xk in neighbors[xi]:
                if xk != xj:
                    queue.append((xk, xi))   # neighbors of Xi may need re-check
    return True

def revise(domains, xi, xj, constraint):
    revised = False
    for value in list(domains[xi]):
        # value has no support in Xj -> remove it
        if not any(constraint(xi, value, xj, other) for other in domains[xj]):
            domains[xi].remove(value)
            revised = True
    return revised`,
            language: 'python',
            type: 'code'
          }
        },
        // H — Complexity summary
        {
          heading: 'Time & Space Complexity',
          text: 'Complexity depends on the size of the search space and how aggressively propagation prunes it. The table assumes n variables, d values each, and a binary constraint graph with e edges.',
          table: {
            headers: ['Algorithm', 'Time', 'Space', 'Notes'],
            rows: [
              ['Naive enumeration', 'O(dⁿ)', 'O(n)', 'Try every combination; only feasible for tiny n.'],
              ['Plain backtracking', 'O(dⁿ) worst', 'O(n) stack', 'Same worst case but prunes on every constraint violation; much better in practice.'],
              ['Backtracking + MRV + LCV', 'O(dⁿ) worst', 'O(n) stack', 'Order heuristics do not change the worst case but typically cut the explored tree by orders of magnitude.'],
              ['Forward checking', 'O(dⁿ) worst', 'O(nd)', 'Each call prunes neighbor domains; pays O(d) storage per variable to remember domains.'],
              ['AC-3 (one pass)', 'O(e·d³)', 'O(e)', 'Polynomial preprocessing; does not solve the CSP alone but drastically shrinks domains before search.'],
              ['AC-3 + backtracking (MAC)', 'O(dⁿ) worst', 'O(nd)', 'The dominant practical CSP solver; arc consistency is re-established after every assignment.']
            ]
          },
          note: 'Interview tip: a CSP is never just "exponential" — always state the worst case (O(dⁿ)) AND what propagation does in practice. AC-3 is polynomial but does not by itself make the problem polynomial.'
        },
        // I — Real-world applications
        {
          heading: 'Real-World Applications',
          text: 'CSPs are everywhere — any problem where you have discrete choices and rules that forbid some combinations is naturally a CSP. The same generic backtracking + propagation solver handles all of them.',
          list: [
            '<strong>Map coloring:</strong> Assign colors to regions so neighbors differ. Used as a teaching example because the constraint graph is small and visual; the four-color theorem guarantees 4 colors always suffice for planar maps.',
            '<strong>Sudoku:</strong> 81 variables (cells) with domain 1..9; constraints are AllDifferent on each row, column, and 3×3 box. A well-tuned backtracking + AC-3 solver solves any Sudoku in milliseconds.',
            '<strong>Job-shop scheduling:</strong> Variables are task start times; constraints forbid two tasks using the same machine at the same time. CSP solvers underlie factory planning software.',
            '<strong>University timetabling:</strong> Assign professors, rooms, and time slots so no professor, room, or student group is double-booked — one of the largest real-world CSP applications.',
            '<strong>Airline crew scheduling:</strong> Assign crews to flights respecting rest rules, union constraints, and home-base requirements; formulated as a CSP and solved with constraint programming (e.g. IBM CP Optimizer).',
            '<strong>Hardware configuration:</strong> Select PC components meeting power, physical space, and socket-compatibility constraints — classic CSP in product configurators.',
            '<strong>N-Queens:</strong> Place n queens on an n×n chessboard so none attack each other. A benchmark for CSP solvers; the min-conflicts local search solves instances with n in the millions in seconds.'
          ],
          note: 'The unifying pattern: discrete choices + "no two of these may conflict" rules. Spot that pattern and you can model the problem as a CSP and reuse off-the-shelf solvers.'
        },
        // J — Local search alternative
        {
          heading: 'Local Search — Min-Conflicts Heuristic',
          text: 'When the CSP is very large (e.g. n-queens with n in the millions), backtracking is hopeless because the search space is astronomical. Instead, <em>local search</em> starts with a complete (likely inconsistent) assignment and repeatedly repairs the variable that is in the most conflicts. Min-conflicts is remarkably effective on large, dense CSPs where many solutions exist.',
          diagram: {
            caption: 'Min-conflicts local search: repeatedly pick a conflicted variable and reassign it to its least-conflicting value',
            chart: `flowchart LR
    S[Random complete assignment] --> E[Evaluate conflicts]
    E --> P{Any conflicts?}
    P -->|Yes| V[Pick a conflicted variable]
    V --> M[Reassign to min-conflict value]
    M --> E
    P -->|No| G[Solution found]
    style G fill:#2ecc71,color:#fff
    style M fill:#f1c40f,color:#000`
          }
        },
        {
          heading: 'Min-Conflicts in Python',
          example: {
            title: 'Min-Conflicts for N-Queens',
            code: `import random

def min_conflicts(n, max_steps=100000):
    # one queen per column; rows[i] is the row of the queen in column i
    rows = random.sample(range(n), n)
    def conflicts(row, col, skip):
        return sum(rows[c] == row or abs(rows[c] - row) == abs(c - col)
                   for c in range(n) if c != skip)
    for _ in range(max_steps):
        # columns whose queen is currently in conflict
        bad = [c for c in range(n)
               if conflicts(rows[c], c, c) > 0]
        if not bad:
            return rows                              # solved
        col = random.choice(bad)
        rows[col] = min(range(n),
                        key=lambda r: conflicts(r, col, col))   # least-conflict row
    return None

print(min_conflicts(1000))   # solves n=1000 in a fraction of a second`,
            language: 'python',
            type: 'code'
          }
        },
        // K — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Picking variables in declaration order instead of using MRV — the variable with the fewest legal values should go first to fail early and prune the tree.',
            'Trying values in declaration order instead of using LCV — choose the value that constrains neighbors least so a solution is found faster.',
            'Skipping constraint propagation and relying on plain backtracking — without AC-3 or forward checking the search explores exponentially more dead branches.',
            'Confusing "arc consistent" with "solved" — arc consistency only removes values that cannot appear in ANY solution; it does not by itself find one. You still need to search.',
            'Modeling a global AllDifferent as n² binary inequalities — this misses the propagation power of the specialized AllDifferent algorithm and slows the solver dramatically.',
            'Using local search on a CSP that has very few solutions — min-conflicts needs many solutions to climb toward; on tightly constrained CSPs it stalls and backtracking + propagation is better.'
          ]
        },
        // L — Interview practice questions
        {
          heading: 'Top Interview Questions on CSPs',
          text: 'The questions below cover the patterns that come up most often: the formal model, the heuristics, propagation, and the trade-offs between backtracking and local search.'
        },
        {
          heading: 'Practice Question 1: Three Components of a CSP (Classic)',
          text: '<strong>Problem:</strong> Name and briefly describe the three components of a CSP.<br/><strong>Key idea:</strong> Variables (what to assign), domains (what values are allowed), constraints (which combinations are valid). Stating these crisply shows you understand the formal model that every solver relies on.',
          example: {
            title: 'Answer',
            code: `A CSP is the triple <X, D, C>:
  X = {X1..Xn}      variables to be assigned
  D = {D1..Dn}      domain Di of legal values for Xi
  C = {C1..Cm}      constraints over subsets of X
A solution is a complete, consistent assignment.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Why MRV Works (Classic)',
          text: '<strong>Problem:</strong> Why does picking the variable with the Minimum Remaining Values (MRV) speed up backtracking?<br/><strong>Key idea:</strong> The variable closest to running out of legal values is most likely to fail. Choosing it first means we discover failures high in the tree where they prune the most subtrees — the "most constrained variable" / "fail-first" principle.',
          example: {
            title: 'Answer',
            code: `MRV picks the unassigned variable with the
smallest current domain. If a variable has only one
legal value left, we MUST assign it now; if it has
zero, we backtrack immediately without exploring
its (nonexistent) subtree. Failing early prunes the
most of the exponential search space.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: AC-3 Complexity (Classic)',
          text: '<strong>Problem:</strong> What is the time complexity of AC-3 and why?<br/><strong>Key idea:</strong> Each arc is enqueued whenever a neighbor domain shrinks. Each arc visit costs O(d²) (check each pair of values). An arc can be re-enqueued at most O(d) times (once per value removed from a neighbor). With e arcs total, this gives O(e·d³).',
          example: {
            title: 'Answer',
            code: `Time:  O(e * d^3)
  e arcs in the constraint graph
  d^2 work per arc-consistency check
  each arc re-enqueued at most d times
Space: O(e) for the arc queue
AC-3 is polynomial but does NOT solve the CSP alone —
it shrinks domains; backtracking still does the search.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Forward Checking vs AC-3 (Classic)',
          text: '<strong>Problem:</strong> Compare forward checking and AC-3. When is each preferred?<br/><strong>Key idea:</strong> Forward checking is cheaper and shallower: when you assign a value, it only prunes the immediate neighbors. AC-3 propagates to a fixpoint across the whole constraint graph and prunes much more, but each call is more expensive. Use forward checking when the graph is sparse and propagation overhead dominates; use full AC-3 (the MAC algorithm) when constraints are tight and pruning matters most.',
          example: {
            title: 'Answer',
            code: `Forward checking:
  - Triggered by an assignment
  - Prunes only the assigned variable's neighbors
  - Cheap per call; misses propagation chains

AC-3 (full arc consistency):
  - Run to fixpoint over all arcs
  - Prunes transitively across the graph
  - More expensive per call; prunes far more

MAC = backtracking + AC-3 after every assignment.
MAC is the strongest practical CSP solver.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Map Coloring on a Triangle (Coding)',
          text: '<strong>Problem:</strong> Three regions form a triangle (each adjacent to the other two). With 2 colors, is the CSP solvable? With 3 colors? Write a backtracking solver and verify.<br/><strong>Key idea:</strong> A triangle needs 3 colors (a cycle of odd length is not 2-colorable). The solver should return None for 2 colors and a valid assignment for 3.',
          example: {
            title: 'Python Solution',
            code: `regions = ['A', 'B', 'C']
neighbors = {'A': {'B','C'}, 'B': {'A','C'}, 'C': {'A','B'}}

def solve(colors):
    domains = {r: set(colors) for r in regions}
    return backtrack({}, domains, neighbors, lambda a,va,b,vb: va != vb)

print(solve(['Red','Blue']))       # None - odd cycle
print(solve(['Red','Green','Blue'])) # e.g. {'A':'Red','B':'Green','C':'Blue'}`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Sudoku as a CSP (Modeling)',
          text: '<strong>Problem:</strong> Model Sudoku as a CSP. How many variables, what domains, what constraints?<br/><strong>Key idea:</strong> 81 variables (one per cell), domain 1..9 (or a singleton for pre-filled cells), 27 AllDifferent constraints (9 rows + 9 columns + 9 boxes). The skill being tested is recognizing that the right constraint is the global AllDifferent, not 36 per-row binary inequalities.',
          example: {
            title: 'Answer',
            code: `Variables: 81 cells C[i][j], i,j in 0..8
Domains: {1..9}, restricted to a singleton for givens
Constraints (27 AllDifferent):
  - 9 row constraints   (each row holds each digit once)
  - 9 column constraints
  - 9 box constraints    (each 3x3 box holds each digit once)
Solver: MAC = backtracking + AC-3 / AllDifferent propagation
Complexity: worst case 9^81, but propagation makes it
practically instant on any valid puzzle.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 7: Cryptarithmetic (SEND + MORE = MONEY)',
          text: '<strong>Problem:</strong> Assign distinct digits 0..9 to the 8 letters S,E,N,D,M,O,R,Y so that SEND + MORE = MONEY and no leading digit is zero. Model as a CSP.<br/><strong>Key idea:</strong> Variables are the 8 letters, domain {0..9}, constraints are AllDifferent plus the arithmetic equation (with carries as auxiliary variables). Backtracking with MRV solves it instantly because M is forced to 1 by the carry almost immediately.',
          example: {
            title: 'Python Solution',
            code: `from itertools import permutations
# brute force for clarity; a real solver uses backtracking + MRV
for S,E,N,D,M,O,R,Y in permutations(range(10), 8):
    if S and M:                                   # no leading zeros
        send = 1000*S + 100*E + 10*N + D
        more = 1000*M + 100*O + 10*R + E
        money = 10000*M + 1000*O + 100*N + 10*E + Y
        if send + more == money:
            print(send, more, money)               # 9567 1085 10652`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 8: Min-Conflicts for N-Queens (Coding)',
          text: '<strong>Problem:</strong> Use the min-conflicts heuristic to solve n-queens for n = 1000.<br/><strong>Key idea:</strong> Min-conflicts local search solves huge n-queens because the density of solutions is enormous; backtracking cannot. Repeatedly pick a conflicted queen and move it to the row with the fewest conflicts.',
          example: {
            title: 'Python Solution',
            code: `import random
def n_queens(n, steps=200000):
    q = list(range(n))                      # q[c] = row of queen in column c
    def conf(r, c, skip):
        return sum(q[k]==r or abs(q[k]-r)==abs(k-c) for k in range(n) if k!=skip)
    for _ in range(steps):
        bad = [c for c in range(n) if conf(q[c], c, c) > 0]
        if not bad: return q
        c = random.choice(bad)
        q[c] = min(range(n), key=lambda r: conf(r, c, c))
    return None
print(n_queens(1000) is not None)   # True in well under a second`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'A CSP is ⟨X, D, C⟩ — variables, domains, constraints. Modeling a problem as a CSP unlocks generic solvers.',
            'Backtracking is depth-first search over assignments; MRV + LCV heuristics choose which variable and value to try first to fail fast.',
            'Forward checking prunes neighbor domains after each assignment; AC-3 propagates arc consistency to a fixpoint and prunes much more.',
            'MAC (backtracking + AC-3 after every assignment) is the standard practical CSP solver.',
            'Min-conflicts local search solves very large, loosely constrained CSPs (e.g. million-queens) where backtracking is hopeless.',
            'AllDifferent is the most important global constraint — modeling it as a single global, not as many binaries, is essential for fast solving.'
          ]
        }
      ]
    },
    'adversarial-search': {
      title: 'Adversarial Search',
      subtitle: 'Search in competitive multi-agent environments',
      sections: [
        // A — What is adversarial search
        {
          heading: 'What is Adversarial Search?',
          text: '<strong>Adversarial search</strong> is search in environments where more than one agent acts and their goals conflict — typically one agent (MAX) tries to maximize a utility while the other (MIN) tries to minimize it. The defining feature is that every move you make is answered by a move from an opponent who is trying to make you lose. Most adversarial search research is about games, but the same machinery applies to military planning, security, and auction bidding.',
          list: [
            '<strong>Two-player games:</strong> One player (MAX) tries to maximize the outcome, the other (MIN) tries to minimize it.',
            '<strong>Game tree:</strong> A tree where nodes are game states and edges are the legal moves of whichever player acts at that state.',
            '<strong>Zero-sum property:</strong> One player gain is exactly the other player loss — utilities sum to zero (or a constant).',
            '<strong>Perfect information:</strong> Both players see the entire game state (chess, checkers, Go), versus imperfect information where some state is hidden (poker, bridge).',
            '<strong>Deterministic vs stochastic:</strong> Deterministic games have no chance; stochastic games include dice rolls or card draws.'
          ]
        },
        // B — Formal game model
        {
          heading: 'Formal Model of a Game',
          text: 'A game is the tuple ⟨S₀, Players, Actions, Result, Terminal, Utility⟩. This is the formal backbone every algorithm in this module (minimax, alpha-beta, expectimax) operates on.',
          list: [
            '<strong>S₀ — initial state:</strong> the board position at the start of the game.',
            '<strong>Players — player(s):</strong> the function that says whose turn it is in state s (often just MAX and MIN alternating).',
            '<strong>Actions(s):</strong> the set of legal moves available in state s.',
            '<strong>Result(s, a):</strong> the state reached by applying action a in state s (the transition model).',
            '<strong>Terminal(s):</strong> true if s is a terminal state (game over).',
            '<strong>Utility(s, p):</strong> the numerical payoff for player p at terminal state s; in zero-sum games, Utility(s, MIN) = −Utility(s, MAX).'
          ]
        },
        // C — Game tree diagram
        {
          heading: 'Visual Diagram — Game Tree',
          text: 'A game tree alternates MAX layers (where MAX chooses the move) and MIN layers (where MIN chooses). Utilities sit at the leaves. The algorithms in this module propagate those leaf utilities back up to decide the move at the root.',
          diagram: {
            caption: 'A 2-ply game tree: MAX at the root, MIN in the middle, utilities at the leaves',
            chart: `flowchart TD
    R[MAX: root] --> A[MIN]
    R --> B[MIN]
    R --> C[MIN]
    A --> A1[3]
    A --> A2[12]
    A --> A3[8]
    B --> B1[2]
    B --> B2[4]
    B --> B3[6]
    C --> C1[14]
    C --> C2[5]
    C --> C3[2]
    style R fill:#3498db,color:#fff
    style A fill:#e74c3c,color:#fff
    style B fill:#e74c3c,color:#fff
    style C fill:#e74c3c,color:#fff`
          }
        },
        // D — Classification of games
        {
          heading: 'Classification of Games',
          text: 'Recognizing the type of game determines the correct algorithm. The four axes below are the questions you must answer before choosing an algorithm.',
          table: {
            headers: ['Dimension', 'Type A', 'Type B', 'Algorithm Impact'],
            rows: [
              ['Information', 'Perfect', 'Imperfect', 'Minimax vs expectimax / belief states'],
              ['Determinism', 'Deterministic', 'Stochastic', 'Minimax vs expectimax'],
              ['Payoff', 'Zero-sum', 'General-sum', 'Minimax vs Nash equilibrium concepts'],
              ['Players', 'Two-player', 'Multi-player', 'Minimax vs multi-agent utilities (max^n)'],
              ['Time', 'Turn-based', 'Real-time', 'Full search vs anytime algorithms']
            ]
          }
        },
        // E — Tic-tac-toe example
        {
          heading: 'Example — Tic-Tac-Toe Game Tree',
          text: 'Tic-tac-toe is the canonical teaching example because its full game tree is small enough to enumerate (≈ 5,478 legal positions). MAX plays X and tries to maximize +1 (win); MIN plays O and tries to minimize toward −1. With optimal play from both sides the value is 0 (draw).',
          diagram: {
            caption: 'A small tic-tac-toe subtree: X (MAX) to move, three candidate moves, leaf utilities',
            chart: `flowchart TD
    R["X to move<br/>_ _ _<br/>_ _ _<br/>_ _ _"] --> M1["X center<br/>win path +1"]
    R --> M2["X corner<br/>draw 0"]
    R --> M3["X edge<br/>O counters -1"]
    style R fill:#3498db,color:#fff
    style M1 fill:#2ecc71,color:#fff
    style M2 fill:#f1c40f,color:#000
    style M3 fill:#e74c3c,color:#fff`
          }
        },
        // F — Optimal vs heuristic search
        {
          heading: 'Optimal Play vs Heuristic Play',
          text: 'A game is <em>solved</em> when we know its minimax value from the start state. For small games this is feasible by enumerating the full tree; for large games we must cut the search short and estimate leaf values with an evaluation function.',
          list: [
            '<strong>Solved games:</strong> Tic-tac-toe (draw), Connect Four (first-player win), Checkers (draw with perfect play — solved by Chinook in 2007).',
            '<strong>Weakly solved:</strong> the game value is known from the start but not every possible line has been examined.',
            '<strong>Unsolved but played strongly:</strong> Chess and Go are not solved (game tree is 10^40+), but engines play far beyond human level using depth-limited search + evaluation / neural networks.',
            '<strong>Evaluation function:</strong> a heuristic that estimates the utility of a non-terminal state from features (material count in chess, territory in Go, a value network in AlphaZero).'
          ],
          note: 'When you cannot search to terminal states, the quality of your evaluation function is the single biggest factor in playing strength. AlphaZero replaced handcrafted evaluation with a learned value network.'
        },
        // G — Python implementation: a tiny game tree
        {
          heading: 'Python Implementation — Game Interface',
          text: 'A minimal, generic game interface. Concrete games implement these five methods; the search algorithms (minimax, alpha-beta) work against this interface and never need to know the game rules.',
          example: {
            title: 'Generic Game Interface and a Tic-Tac-Toe Stub',
            code: `class Game:
    def initial_state(self): ...
    def player(self, s): ...           # whose turn in s
    def actions(self, s): ...           # legal moves
    def result(self, s, a): ...        # state after a
    def is_terminal(self, s): ...
    def utility(self, s, p): ...        # payoff for p at terminal s

class TicTacToe(Game):
    def initial_state(self): return ('.' * 9, 'X')     # board, to_move
    def player(self, s): return s[1]
    def actions(self, s):
        return [i for i, c in enumerate(s[0]) if c == '.']
    def result(self, s, a):
        board = list(s[0]); board[a] = s[1]
        return (''.join(board), 'O' if s[1] == 'X' else 'X')
    def is_terminal(self, s):
        return '.' not in s[0] or self._winner(s) is not None
    def utility(self, s, p):
        w = self._winner(s)
        return 0 if w is None else (1 if w == p else -1)
    def _winner(self, s):
        lines = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]
        for a,b,c in lines:
            if s[0][a] == s[0][b] == s[0][c] != '.':
                return s[0][a]
        return None`,
            language: 'python',
            type: 'code'
          }
        },
        // H — Real-world applications
        {
          heading: 'Real-World Applications',
          text: 'Adversarial search principles extend far beyond board games. Anywhere one party acts against another, the same formalism — game states, alternating moves, utilities — applies.',
          list: [
            '<strong>Chess engines:</strong> Stockfish and Komodo use alpha-beta pruning with handcrafted evaluation functions to search tens of millions of positions per second.',
            '<strong>Go AI:</strong> AlphaGo and AlphaZero combine Monte Carlo Tree Search with deep neural networks (policy and value nets) to evaluate positions in a game with 10^170 positions.',
            '<strong>Poker bots:</strong> Libratus and Pluribus handle imperfect information through counterfactual regret minimization rather than minimax, because the opponent cannot be modeled as seeing the full state.',
            '<strong>Military strategy:</strong> Wargaming and adversarial scenario planning use minimax-like reasoning to evaluate the worst-case outcome of each move.',
            '<strong>Cybersecurity:</strong> Attack-defense trees treat hackers and defenders as adversarial agents; Stackelberg games model a defender who commits to a policy first.',
            '<strong>Auctions and markets:</strong> Bidding against competitors is a game; mechanism design uses game theory to design auction rules that elicit truthful bidding (Vickrey auctions).',
            '<strong>Robust decision-making:</strong> "What is the worst my competitor could do in response?" is a minimax question in disguise, applicable to pricing, capacity planning, and negotiation.'
          ]
        },
        // I — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Applying minimax to imperfect-information games like poker — minimax assumes both players see the full state; hidden information requires belief-state reasoning or counterfactual regret minimization.',
            'Assuming the opponent always plays optimally — when facing a suboptimal opponent, opponent modeling or bounded rationality can exploit weaknesses better than pure minimax.',
            'Searching the full game tree for complex games — chess has 10^40+ positions; always use depth-limited search with an evaluation function and iterative deepening.',
            'Ignoring computational time limits in real-time games — use anytime algorithms (iterative deepening, MCTS) that always have a best-so-far move ready.',
            'Confusing zero-sum with general-sum — minimax is optimal for zero-sum; general-sum games require Nash equilibrium concepts or other game-theoretic solutions.',
            'Forgetting the horizon effect — a move looks great at your cutoff depth but leads to disaster one move beyond it; use quiescence search to resolve unstable positions before evaluating.'
          ]
        },
        // J — Practice questions
        {
          heading: 'Top Interview Questions on Adversarial Search',
          text: 'These questions test whether you can both state the formal model and explain when each algorithm applies.'
        },
        {
          heading: 'Practice Question 1: Formal Game Definition (Classic)',
          text: '<strong>Problem:</strong> Define a game formally.<br/><strong>Key idea:</strong> The six-component tuple ⟨S₀, Players, Actions, Result, Terminal, Utility⟩. Naming all six and explaining each crisply shows you understand the framework every algorithm operates on.',
          example: {
            title: 'Answer',
            code: `Game = (S0, Players, Actions, Result, Terminal, Utility)
  S0       initial state
  Players  player(s) -> whose turn in s
  Actions  legal moves in s
  Result   state after applying action a
  Terminal true if s ends the game
  Utility  payoff for player p at terminal s
In zero-sum games Utility(s, MIN) = -Utility(s, MAX).`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Zero-Sum vs General-Sum (Classic)',
          text: '<strong>Problem:</strong> Why is the zero-sum property important for minimax?<br/><strong>Key idea:</strong> Zero-sum means MAX gain is exactly MIN loss, so the two players have strictly opposed utilities — minimizing the opponent payoff is identical to maximizing your own. This lets minimax use a single utility value propagated up the tree. In general-sum games, players may have unrelated payoffs and the right solution concept is Nash equilibrium, not minimax.',
          example: {
            title: 'Answer',
            code: `Zero-sum:  U_MIN(s) = -U_MAX(s)
  -> MAX maximizing U_MAX is the same as MAX
     minimizing U_MIN; one value suffices.
  -> minimax is optimal.

General-sum: payoffs are independent.
  -> need a payoff matrix per player.
  -> Nash equilibrium, not minimax.
  -> prisoner's dilemma: both defect though
     mutual cooperation pays more.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Perfect vs Imperfect Information (Classic)',
          text: '<strong>Problem:</strong> Why does minimax fail for poker?<br/><strong>Key idea:</strong> Minimax assumes both players see the full state. In poker, each player sees only their own cards, so the "state" each player reasons about is a probability distribution (belief state) over the hidden cards. The right algorithms are belief-state minimax, expectimax over chance + belief, or counterfactual regret minimization for game-theoretic equilibria.',
          example: {
            title: 'Answer',
            code: `Poker is imperfect-information:
  - each player sees only their own cards
  - the "state" for decision-making is a BELIEF:
    a distribution over the hidden information
  - minimax over the visible state ignores that
    the opponent's actions reveal information
Algorithms: belief-state search, CFR (Libratus,
Pluribus), or expectimax over chance + belief.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Evaluation Function Quality (Classic)',
          text: '<strong>Problem:</strong> Why does the evaluation function matter more than search depth in chess engines?<br/><strong>Key idea:</strong> At a fixed search depth, a better evaluation of leaf positions directly translates into better moves; doubling depth only gains roughly 200 Elo. The classic lesson is that chess engines improved more from better evaluation (material + mobility + king safety) than from raw depth, until neural-network evaluation (Leela, AlphaZero) shifted the balance again.',
          example: {
            title: 'Answer',
            code: `At fixed depth, evaluation quality is the
upper bound on move quality — a wrong leaf value
means a wrong decision regardless of depth.
Approximate gains in classical chess engines:
  +1 ply search depth    -> ~ +80 Elo
  better evaluation      -> up to +200 Elo
  neural net eval (LCZero) -> superhuman with
                              shallower search.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Solved vs Strongly Played (Conceptual)',
          text: '<strong>Problem:</strong> Distinguish "solved" from "strongly played" using concrete examples.<br/><strong>Key idea:</strong> Solved means the game value from the start is known (tic-tac-toe = draw, Connect Four = first-player win, checkers = draw). Strongly played means engines exceed human level but the game value is not known (chess, Go).',
          example: {
            title: 'Answer',
            code: `Solved (game value known from start):
  - tic-tac-toe     -> draw
  - connect four    -> first player wins
  - checkers        -> draw (Chinook, 2007)
  - 5x5 Go (no komi)-> first player wins

Strongly played (engine >> human, value unknown):
  - chess (Stockfish)  - 19x19 Go (AlphaZero)
  - StarCraft (AlphaStar)
  - poker heads-up (Libratus)`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Adversarial search handles environments where agents have conflicting goals; the canonical setting is two-player zero-sum games.',
            'A game is the tuple ⟨S₀, Players, Actions, Result, Terminal, Utility⟩ — naming these six is the foundation of every algorithm in this module.',
            'Game type determines the algorithm: perfect-information deterministic → minimax/alpha-beta; stochastic → expectimax; imperfect info → belief states or CFR.',
            'For games too large to solve, depth-limited search with an evaluation function is the practical approach; evaluation quality often matters more than depth.',
            'Solved games (tic-tac-toe, checkers, Connect Four) have known game values; chess and Go are only strongly played, not solved.'
          ]
        }
      ]
    },
    minimax: {
      title: 'Minimax Algorithm',
      subtitle: 'Optimal decision making in two-player zero-sum games',
      sections: [
        // A — What is minimax
        {
          heading: 'What is the Minimax Algorithm?',
          text: '<strong>Minimax</strong> is a recursive algorithm that computes the optimal move in a two-player zero-sum game, assuming the opponent also plays optimally. MAX (us) maximizes the utility at every MAX node; MIN (the opponent) minimizes it at every MIN node. The minimax value of a state is the best utility MAX can guarantee against an optimal opponent — that "guarantee" word is what makes minimax a worst-case (not expected) algorithm.',
          list: [
            '<strong>Game tree traversal:</strong> Explore all possible moves and counter-moves down to terminal states.',
            '<strong>Utility propagation:</strong> Terminal utilities bubble back up the tree; MAX nodes take the maximum of children, MIN nodes take the minimum.',
            '<strong>Optimality:</strong> Against an optimal opponent, minimax returns the best achievable utility. Against a suboptimal opponent it can be even better, but it never assumes the opponent will make a mistake.',
            '<strong>Worst-case reasoning:</strong> Minimax assumes the opponent will choose the move that is worst for us, so it picks the move whose worst-case outcome is best.',
            '<strong>Limitation:</strong> Requires searching the full game tree, which is infeasible for complex games like chess or Go (depth-limited minimax + evaluation solves this).'
          ]
        },
        // B — Minimax value definition
        {
          heading: 'The Minimax Value',
          text: 'The minimax value of a node is defined recursively. It is the utility of the state if the state is terminal; otherwise it is the max (if MAX to move) or min (if MIN to move) of the children minimax values. This definition is the entire algorithm in one line.',
          list: [
            '<strong>Terminal:</strong> Minimax(s) = Utility(s).',
            '<strong>MAX node:</strong> Minimax(s) = max<sub>a ∈ Actions(s)</sub> Minimax(Result(s, a)).',
            '<strong>MIN node:</strong> Minimax(s) = min<sub>a ∈ Actions(s)</sub> Minimax(Result(s, a)).',
            '<strong>Decision at the root:</strong> MAX picks the action that achieves the root minimax value (the move that "backs up" the highest value).'
          ]
        },
        // C — Game tree with labeled values
        {
          heading: 'Visual Diagram — Minimax on a Game Tree',
          text: 'Below is a 3-ply tree. Utilities are at the leaves. At each MIN level we take the minimum of children; at each MAX level we take the maximum. The root value is the minimax value, and the move that produces it is the optimal move.',
          diagram: {
            caption: 'Minimax: leaf utilities propagate up — MIN takes min, MAX takes max',
            chart: `flowchart TD
    R["MAX<br/>value = 3"] --> A["MIN<br/>min(3,12,8)=3"]
    R --> B["MIN<br/>min(2,4,6)=2"]
    R --> C["MIN<br/>min(14,5,2)=2"]
    A --> A1[3]
    A --> A2[12]
    A --> A3[8]
    B --> B1[2]
    B --> B2[4]
    B --> B3[6]
    C --> C1[14]
    C --> C2[5]
    C --> C3[2]
    style R fill:#3498db,color:#fff
    style A fill:#e74c3c,color:#fff
    style B fill:#e74c3c,color:#fff
    style C fill:#e74c3c,color:#fff
    style A1 fill:#2ecc71,color:#fff`
          }
        },
        // D — Step-by-step trace
        {
          heading: 'How Minimax Propagates — Step by Step',
          text: '<p>Minimax is a single depth-first post-order traversal of the game tree. Walk down to a leaf, read its utility, and as you return upward combine children with max at MAX nodes and min at MIN nodes. By the time the recursion unwinds to the root you have the optimal value and the optimal move.</p><p><strong>Trace on the tree above (leftmost leaves first):</strong></p><ol><li>Recurse to leaves under the leftmost MIN node: 3, 12, 8. MIN takes their min = <strong>3</strong>.</li><li>Recurse to the middle MIN node leaves: 2, 4, 6. MIN takes their min = <strong>2</strong>.</li><li>Recurse to the rightmost MIN node leaves: 14, 5, 2. MIN takes their min = <strong>2</strong>.</li><li>Back at the root MAX, take the max of the three MIN values: max(3, 2, 2) = <strong>3</strong>.</li><li>The move that produced 3 (the leftmost child) is the optimal move.</li></ol><p><strong>What this means intuitively:</strong> no matter how the opponent plays, MAX can guarantee at least 3 by choosing the leftmost move — that is the worst-case guarantee. Any other move could be punished down to 2.</p>'
        },
        // E — Pseudocode
        {
          heading: 'Minimax Recursion',
          text: 'The recursive structure mirrors the value definition exactly. The top-level wrapper iterates over the root children to find which move achieves the root value.',
          example: {
            title: 'Minimax Pseudocode',
            code: `Minimax(node, isMaximizing):
  if Terminal(node):
    return Utility(node)

  if isMaximizing:                       # MAX node
    value = -infinity
    for child in children(node):
      value = max(value, Minimax(child, False))
    return value

  else:                                  # MIN node
    value = +infinity
    for child in children(node):
      value = min(value, Minimax(child, True))
    return value

# Top-level: pick the move whose child has the best value
def best_move(state):
  return argmax(a in Actions(state),
                Minimax(Result(state, a), is_max=False))`,
            language: 'text',
            type: 'code'
          }
        },
        // F — Python implementation
        {
          heading: 'Python Implementation — Minimax on Tic-Tac-Toe',
          text: 'A working minimax that plays tic-tac-toe optimally. Because the full tic-tac-toe tree is small, no depth limit is needed — the algorithm searches to terminal and always forces at least a draw, and wins against any mistake.',
          example: {
            title: 'Minimax Tic-Tac-Toe Player',
            code: `def minimax(state, game, is_max):
    if game.is_terminal(state):
        return game.utility(state, 'X')        # MAX is X
    if is_max:
        best = -float('inf')
        for a in game.actions(state):
            best = max(best, minimax(game.result(state, a), game, False))
        return best
    else:
        best = float('inf')
        for a in game.actions(state):
            best = min(best, minimax(game.result(state, a), game, True))
        return best

def best_move(state, game):
    return max(game.actions(state),
               key=lambda a: minimax(game.result(state, a), game, False))

# X (MAX) never loses with this; play alternates X/O
game = TicTacToe()
s = game.initial_state()
while not game.is_terminal(s):
    if game.player(s) == 'X':
        a = best_move(s, game)
    else:
        a = int(input('Your move (0-8): '))
    s = game.result(s, a)
    print(s[0][:3], s[0][3:6], s[0][6:], sep='\\n')`,
            language: 'python',
            type: 'code'
          }
        },
        // G — Java implementation
        {
          heading: 'Java Implementation — Minimax',
          text: 'The same recursion in Java, written against the generic Game interface. Integer.MIN_VALUE / MAX_VALUE stand in for ±∞.',
          example: {
            title: 'Minimax in Java',
            code: `public class Minimax {
    public static int minimax(Game g, Game.State s, boolean isMax) {
        if (g.isTerminal(s)) return g.utility(s, g.maxPlayer());
        if (isMax) {
            int best = Integer.MIN_VALUE;
            for (Game.Action a : g.actions(s))
                best = Math.max(best, minimax(g, g.result(s, a), false));
            return best;
        } else {
            int best = Integer.MAX_VALUE;
            for (Game.Action a : g.actions(s))
                best = Math.min(best, minimax(g, g.result(s, a), true));
            return best;
        }
    }

    public static Game.Action bestMove(Game g, Game.State s) {
        Game.Action best = null;
        int bestVal = Integer.MIN_VALUE;
        for (Game.Action a : g.actions(s)) {
            int v = minimax(g, g.result(s, a), false);
            if (v > bestVal) { bestVal = v; best = a; }
        }
        return best;
    }
}`,
            language: 'java',
            type: 'code'
          }
        },
        // H — Complexity
        {
          heading: 'Time & Space Complexity',
          text: 'Let b be the branching factor (number of legal moves per state) and m the maximum depth of the game tree. Minimax enumerates the entire tree.',
          table: {
            headers: ['Aspect', 'Minimax', 'Notes'],
            rows: [
              ['Time', 'O(b^m)', 'Visits every leaf; chess has b≈35, m≈100 → 10^150+ leaves.'],
              ['Space', 'O(bm)', 'Depth-first recursion keeps one path of children at a time.'],
              ['Optimality', 'Optimal vs optimal opponent', 'Guaranteed against perfect play; can only do better against weaker opponents.'],
              ['Practical use', 'Only small games', 'Feasible for tic-tac-toe, small endgames; depth-limited minimax + evaluation for large games.']
            ]
          },
          note: 'Interview tip: always state O(b^m) for time and O(bm) for space (the recursion stack), and immediately mention that this is why pure minimax is unusable for chess — it motivates the next two topics: alpha-beta pruning (depth limit) and evaluation functions.'
        },
        // I — Depth-limited minimax
        {
          heading: 'Depth-Limited Minimax & Evaluation Functions',
          text: 'For any game too large to solve, we cut off search at a fixed depth d and apply a heuristic <em>evaluation function</em> Eval(s) that estimates the utility of non-terminal state s. The recursion is identical except the base case also fires when depth hits 0.',
          diagram: {
            caption: 'Depth-limited minimax: cut off at depth d, evaluate leaves heuristically',
            chart: `flowchart TD
    R[MAX] --> M[MIN]
    M --> C1[leaf @ d=0<br/>Eval = +5]
    M --> C2[leaf @ d=0<br/>Eval = -2]
    style R fill:#3498db,color:#fff
    style M fill:#e74c3c,color:#fff
    style C1 fill:#2ecc71,color:#fff
    style C2 fill:#e74c3c,color:#fff`
          }
        },
        {
          heading: 'Evaluation Functions',
          text: 'A good evaluation function is the single most important factor in playing strength for depth-limited search. It is a weighted sum of features extracted from the state.',
          list: [
            '<strong>Material:</strong> In chess, +1 per pawn, +3 per knight/bishop, +5 per rook, +9 per queen — the single most predictive feature.',
            '<strong>Mobility:</strong> Number of legal moves available; more moves usually means a better position.',
            '<strong>King safety / pawn structure:</strong> Castled king, no doubled pawns, etc.',
            '<strong>Position-specific heuristics:</strong> Center control in chess, territory + influence in Go.',
            '<strong>Learned evaluation:</strong> AlphaZero and Stockfish-NNUE replace handcrafted features with a neural network that outputs a value for any board position.',
            '<strong>Horizon effect:</strong> A position looks great at the cutoff depth but is lost one move beyond it; quiescence search extends search through unstable positions to mitigate this.'
          ]
        },
        {
          heading: 'Python — Depth-Limited Minimax with Eval',
          example: {
            title: 'Depth-Limited Minimax',
            code: `def minimax(state, game, depth, is_max, eval_fn):
    if game.is_terminal(state):
        return game.utility(state, game.max_player())
    if depth == 0:                          # cutoff -> evaluate heuristically
        return eval_fn(state)
    if is_max:
        return max(minimax(game.result(state, a), game, depth-1, False, eval_fn)
                   for a in game.actions(state))
    else:
        return min(minimax(game.result(state, a), game, depth-1, True, eval_fn)
                   for a in game.actions(state))

def best_move(state, game, depth, eval_fn):
    return max(game.actions(state),
               key=lambda a: minimax(game.result(state, a),
                                     game, depth-1, False, eval_fn))`,
            language: 'python',
            type: 'code'
          }
        },
        // J — Negamax simplification
        {
          heading: 'Negamax — A Code Simplification',
          text: 'In strictly zero-sum games, the opponent best outcome is exactly the negative of our best outcome. Negamax exploits this so every node is treated as a "maximize" node — the value returned to a parent is just negated. Same result, cleaner code, but only valid for zero-sum games.',
          example: {
            title: 'Negamax Pseudocode',
            code: `Negamax(node, depth):
  if Terminal(node) or depth == 0:
    return Eval(node) * color(node)      # color: +1 for MAX, -1 for MIN
  best = -infinity
  for child in children(node):
    # negate because the opponent optimizes their value = -our value
    best = max(best, -Negamax(child, depth-1))
  return best

# Negamax reduces minimax to a single max operation per node,
# but ONLY works for zero-sum games where Utility(MIN) = -Utility(MAX).`,
            language: 'text',
            type: 'code'
          }
        },
        // K — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Forgetting to flip isMaximizing between recursive levels — every call must invert the player; this is the single most common bug.',
            'Returning the move instead of the value during recursion — the recursive function returns a utility score; only the top-level wrapper picks the move that achieves that score.',
            'Using minimax without depth limits on large games — set a maximum depth and replace terminal utility with an evaluation function for cutoff states.',
            'Ignoring the horizon effect — a position looks good at the cutoff but is lost one move beyond; use quiescence search to extend unstable positions.',
            'Confusing minimax with expectimax — minimax assumes an adversarial MIN; expectimax is needed when there is chance (dice, cards) instead of an opponent.',
            'Applying negamax to general-sum games — negamax is only valid for zero-sum games where Utility(MIN) = −Utility(MAX).'
          ]
        },
        // L — Real-world applications
        {
          heading: 'Real-World Case Studies',
          text: 'Minimax and its variants power classic game-playing AI, from solved board games to the engines that beat world champions.',
          list: [
            '<strong>Tic-tac-toe solver:</strong> The full game tree is small enough for complete minimax, guaranteeing optimal play (always a draw with optimal opponents).',
            '<strong>Chess engines:</strong> Depth-limited minimax with alpha-beta pruning and handcrafted / neural evaluation functions drives Stockfish and Komodo.',
            '<strong>Checkers (Chinook):</strong> Solved in 2007 using minimax combined with endgame databases — proven that perfect play draws.',
            '<strong>Connect Four:</strong> Solved with minimax showing the first player can force a win.',
            '<strong>General game playing (GGP):</strong> Minimax serves as the backbone for agents competing in arbitrary games described by Game Description Language (GDL).',
            '<strong>Military wargaming:</strong> Adversarial scenario planning uses minimax-like reasoning — "what is the worst the adversary can do to this plan?"'
          ]
        },
        // M — Practice questions
        {
          heading: 'Top Interview Questions on Minimax',
          text: 'The recurring patterns: state the recursion, state the complexity, explain depth-limiting and evaluation, and recognize when minimax is the wrong tool (stochastic / imperfect info).'
        },
        {
          heading: 'Practice Question 1: Fundamental Assumption (Classic)',
          text: '<strong>Problem:</strong> What is the fundamental assumption of the minimax algorithm?<br/><strong>Key idea:</strong> Both players play optimally — MAX maximizes utility and MIN minimizes it. Minimax computes the best worst-case guarantee; it never relies on the opponent making a mistake.',
          example: {
            title: 'Answer',
            code: `Both players play optimally.
MAX picks the move whose worst-case outcome
(after MIN's best reply) is as good as possible.
Result: the best utility MAX can GUARANTEE
against an optimal adversary.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Why Minimax Is Impractical for Chess (Classic)',
          text: '<strong>Problem:</strong> Why is pure minimax impractical for chess?<br/><strong>Key idea:</strong> The branching factor (~35) and depth (~100 moves) make the tree ≈ 35^100 ≈ 10^150 leaves — far beyond any computer. Use depth-limited minimax with an evaluation function (and alpha-beta to roughly halve the effective depth).',
          example: {
            title: 'Answer',
            code: `Chess branching factor b ~ 35
Typical game depth m ~ 100 plies
Leaves ~ 35^100 ~ 10^150  (vs ~ 10^80 atoms)

Fix:
  - depth-limited minimax (cut at d=5..20)
  - evaluation function at the cutoff
  - alpha-beta pruning to double searchable depth
  - iterative deepening for time management`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Horizon Effect (Classic)',
          text: '<strong>Problem:</strong> What is the horizon effect and how do you mitigate it?<br/><strong>Key idea:</strong> A move looks great at the cutoff depth but leads to disaster one move beyond. Quiescence search extends search through "noisy" (unstable) positions until a quiet position is reached before evaluating.',
          example: {
            title: 'Answer',
            code: `Horizon effect: a bad consequence sits just
beyond the search depth, so the position looks
artificially good at the cutoff.

Quiescence search: at the cutoff, do NOT evaluate
if the position is "noisy" (captures, checks in
progress). Extend search of forcing moves until
a quiet position is reached, then evaluate.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Negamax Validity (Classic)',
          text: '<strong>Problem:</strong> When can negamax be used instead of minimax?<br/><strong>Key idea:</strong> Only in strictly zero-sum games where one player gain equals the other loss, which lets us use signed scores and treat every node as a max node with negation.',
          example: {
            title: 'Answer',
            code: `Negamax requires:  U_MIN(s) = -U_MAX(s)
  (strictly zero-sum, two-player)

Then for any node:
  value(s) = max over children of (-value(child))

Why: the opponent's best move for them is the
worst move for us, so we negate their best value
to get our value for that branch.

Invalid for: general-sum, stochastic (expectimax),
multi-player (max^n) games.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Minimax Trace (Coding)',
          text: '<strong>Problem:</strong> Given leaf utilities [3, 12, 8, 2, 4, 6, 14, 5, 2] arranged as 3 groups of 3 under a MIN layer under a MAX root, compute the root minimax value and the optimal move.<br/><strong>Key idea:</strong> MIN takes the min of each group → [3, 2, 2]; MAX takes max → 3; the optimal move is the leftmost.',
          example: {
            title: 'Python Trace',
            code: `leaves = [[3,12,8], [2,4,6], [14,5,2]]   # groups under each MIN
min_layer = [min(group) for group in leaves]   # [3, 2, 2]
root_value = max(min_layer)                    # 3
best_group = min_layer.index(root_value)       # 0 (leftmost)
print(root_value, best_group)                 # 3 0`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Tic-Tac-Toe Optimal Play (Coding)',
          text: '<strong>Problem:</strong> Prove by implementation that minimax never loses at tic-tac-toe when playing X.<br/><strong>Key idea:</strong> Implement minimax from the TicTacToe interface above and play against a random O; assert the outcome is never a loss for X across many random games.',
          example: {
            title: 'Python Verification',
            code: `import random
def random_play(state, game):
    return random.choice(game.actions(state))

loses = 0
for _ in range(2000):
    s = game.initial_state()
    while not game.is_terminal(s):
        a = best_move(s, game) if game.player(s) == 'X' else random_play(s, game)
        s = game.result(s, a)
    if game.utility(s, 'X') == -1:
        loses += 1
print('X losses vs random O:', loses)   # 0`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Minimax computes the optimal move assuming the opponent also plays optimally; MAX maximizes utility, MIN minimizes it.',
            'The recursion is: terminal → Utility; MAX → max of children; MIN → min of children. The root picks the move achieving the root value.',
            'Time O(b^m), space O(bm) — pure minimax is only feasible for small games; depth-limited minimax + evaluation is the practical approach.',
            'Depth-limited minimax cuts off at depth d and evaluates non-terminal leaves heuristically; evaluation quality is the biggest factor in playing strength.',
            'Negamax is a code simplification valid only for zero-sum games; expectimax is required for stochastic games (chance replaces MIN).',
            'The horizon effect is mitigated by quiescence search, which extends search through unstable (forcing) positions before evaluating.'
          ]
        }
      ]
    },
    'alpha-beta': {
      title: 'Alpha-Beta Pruning',
      subtitle: 'Optimizing minimax by eliminating irrelevant branches',
      sections: [
        // A — What is alpha-beta
        {
          heading: 'What is Alpha-Beta Pruning?',
          text: '<strong>Alpha-beta pruning</strong> is an optimization of minimax that eliminates branches of the game tree that cannot possibly influence the final decision. It explores the tree in the same order as minimax but maintains two bounds — α (the best MAX can force so far) and β (the best MIN can force so far) — and stops examining a subtree the moment those bounds prove it cannot change the result. The result is <em>identical</em> to minimax; only the work is less.',
          list: [
            '<strong>Alpha (α):</strong> The best value that MAX can guarantee at the current node or above; initialized to −∞ and only raised at MAX nodes.',
            '<strong>Beta (β):</strong> The best value that MIN can guarantee at the current node or above; initialized to +∞ and only lowered at MIN nodes.',
            '<strong>Pruning condition:</strong> If α ≥ β at any point, the remaining children of this node are skipped — the parent already has a better alternative, so this branch cannot change the decision.',
            '<strong>Exact, not approximate:</strong> Alpha-beta returns the identical value as minimax; it simply skips work that is provably irrelevant.',
            '<strong>Move ordering matters:</strong> Examining the best moves first makes α and β converge fast and maximizes pruning. With perfect ordering alpha-beta explores O(b^(m/2)) nodes instead of O(b^m) — effectively doubling searchable depth.'
          ]
        },
        // B — Why pruning is safe
        {
          heading: 'Why Pruning Is Safe',
          text: '<p>The core intuition: <strong>a MIN node will never let its parent MAX choose a value higher than β</strong>, and <strong>a MAX node will never let its parent MIN choose a value lower than α</strong>. Once we know a node cannot improve the parent decision, evaluating its remaining children is wasted work.</p><p><strong>β-cutoff at a MAX node:</strong> We are at a MAX node. Its parent is a MIN node that already has a guaranteed value β. As we examine MAX children and α rises, the moment α ≥ β the MIN parent would never choose this branch (it has a better one), so we stop — MAX can do no better than something MIN will reject anyway.</p><p><strong>α-cutoff at a MIN node:</strong> Mirror image. We are at a MIN node whose MAX parent already guarantees α. As β falls and hits α, MIN can do no better than something MAX will reject; stop.</p>'
        },
        // C — Pruning diagram
        {
          heading: 'Visual Diagram — Alpha-Beta Pruning',
          text: 'On the same tree from the minimax topic, alpha-beta prunes the leaves marked ✗. After the leftmost MIN node returns 3, the root α becomes 3. When the middle MIN node sees the value 2, β drops to 2, and since α (3) ≥ β (2) we cut off the rest of that subtree — MIN will never allow MAX to get more than 2 here, which is worse than 3, so exploring more is pointless.',
          diagram: {
            caption: 'Alpha-beta on a 3-ply tree: pruned leaves marked ✗ (α=3 from leftmost branch cuts the middle branch)',
            chart: `flowchart TD
    R["MAX<br/>α=-∞, β=+∞<br/>value=3"] --> A["MIN<br/>returns 3"]
    R --> B["MIN<br/>β=2 → cut<br/>α=3 ≥ β=2"]
    R --> C["MIN<br/>returns 2"]
    A --> A1[3]
    A --> A2[12 ✗ pruned]
    A --> A3[8 ✗ pruned]
    B --> B1[2]
    B --> B2[4 ✗ pruned]
    B --> B3[6 ✗ pruned]
    C --> C1[14 ✗ pruned]
    C --> C2[5 ✗ pruned]
    C --> C3[2]
    style R fill:#3498db,color:#fff
    style A fill:#e74c3c,color:#fff
    style B fill:#e74c3c,color:#fff
    style C fill:#e74c3c,color:#fff`
          }
        },
        // D — Step-by-step trace
        {
          heading: 'Step-by-Step Trace',
          text: '<p>Alpha-beta is best understood by walking through one. Use the tree above.</p><ol><li><strong>Root (MAX):</strong> α=−∞, β=+∞. Descend into the leftmost MIN child.</li><li><strong>Leftmost MIN node:</strong> α=−∞, β=+∞. Examine first leaf → value 3. β becomes min(+∞, 3) = 3. Examine next leaf → 12. α (still −∞) < β (3), so no cutoff, but β stays 3 (12 > 3). Examine 8 — still β = 3. Return 3.</li><li><strong>Back at root:</strong> α = max(−∞, 3) = 3. Descend into middle MIN child with α=3, β=+∞.</li><li><strong>Middle MIN node:</strong> Examine first leaf → 2. β = min(+∞, 2) = 2. Now α (3) ≥ β (2) → <strong>β-cutoff</strong>. Skip the remaining two leaves (4 and 6). Return 2.</li><li><strong>Back at root:</strong> α = max(3, 2) = 3 (no change). Descend into rightmost MIN child with α=3, β=+∞.</li><li><strong>Rightmost MIN node:</strong> Examine 14 → β=14; α (3) < β (14), continue. Examine 5 → β=5; still α < β. Examine 2 → β=2. Now α (3) ≥ β (2) → cutoff (after examining all three this time). Return 2.</li><li><strong>Root value:</strong> max(3, 2, 2) = 3. Optimal move: leftmost child — identical to plain minimax, but we examined only 4 of 9 leaves.</li></ol>'
        },
        // E — Pseudocode
        {
          heading: 'Alpha-Beta Recursion',
          text: 'The recursion carries α and β down the tree. MAX raises α; MIN lowers β; cutoff when they cross. α and β are passed unchanged down to children, then updated on the way back up.',
          example: {
            title: 'Alpha-Beta Pseudocode',
            code: `AlphaBeta(node, depth, alpha, beta, isMaximizing):
  if depth == 0 or Terminal(node):
    return Utility(node)              # or Eval(node) if depth-limited

  if isMaximizing:
    value = -infinity
    for child in children(node):
      value = max(value, AlphaBeta(child, depth-1, alpha, beta, False))
      alpha = max(alpha, value)        # raise alpha
      if alpha >= beta:               # beta cutoff
        break
    return value

  else:
    value = +infinity
    for child in children(node):
      value = min(value, AlphaBeta(child, depth-1, alpha, beta, True))
      beta = min(beta, value)          # lower beta
      if beta <= alpha:               # alpha cutoff
        break
    return value

Call: AlphaBeta(root, maxDepth, -inf, +inf, True)`,
            language: 'text',
            type: 'code'
          }
        },
        // F — Python implementation
        {
          heading: 'Python Implementation — Alpha-Beta on Tic-Tac-Toe',
          text: 'Drop-in replacement for the minimax player from the previous topic. Same result, but on larger games it explores far fewer nodes — try counting the calls.',
          example: {
            title: 'Alpha-Beta Tic-Tac-Toe Player',
            code: `def alphabeta(state, game, alpha, beta, is_max):
    if game.is_terminal(state):
        return game.utility(state, 'X')
    if is_max:
        best = -float('inf')
        for a in game.actions(state):
            best = max(best, alphabeta(game.result(state, a), game, alpha, beta, False))
            alpha = max(alpha, best)
            if alpha >= beta:        # beta cutoff
                break
        return best
    else:
        best = float('inf')
        for a in game.actions(state):
            best = min(best, alphabeta(game.result(state, a), game, alpha, beta, True))
            beta = min(beta, best)
            if beta <= alpha:       # alpha cutoff
                break
        return best

def best_move(state, game):
    alpha, beta = -float('inf'), float('inf')
    best_a, best_v = None, -float('inf')
    for a in game.actions(state):
        v = alphabeta(game.result(state, a), game, alpha, beta, False)
        if v > best_v:
            best_v, best_a = v, a
        alpha = max(alpha, best_v)
    return best_a`,
            language: 'python',
            type: 'code'
          }
        },
        // G — Move ordering
        {
          heading: 'Move Ordering — The Practical Key',
          text: 'The order in which children are examined is the single biggest practical factor in alpha-beta performance. Examining strong moves first drives α or β toward the final value quickly, which makes cutoffs happen earlier in the remaining siblings. With perfect ordering, alpha-beta explores only O(b^(m/2)) nodes; with random ordering, about O(b^(3m/4)); with worst-case ordering, no pruning at all and we are back to O(b^m).',
          list: [
            '<strong>Static move ordering:</strong> Sort moves by a static heuristic (e.g. captures first in chess, central moves in Go). Cheap and effective.',
            '<strong>Killer move heuristic:</strong> Remember moves that caused cutoffs at the same depth in sibling nodes; try them first elsewhere.',
            '<strong>History heuristic:</strong> A global table of how often each move caused cutoffs; prefer high-scoring moves.',
            '<strong>Transposition tables:</strong> Cache the value of previously searched positions (same position can be reached by different move orders); a hit skips the whole subtree.',
            '<strong>Iterative deepening:</strong> Search at depth 1, 2, 3, …; use the move ordering from depth d to order depth d+1. The best move at depth d is almost always examined first at depth d+1.',
            '<strong>Principal variation (PV):</strong> The path of best moves found so far; examine PV moves first when re-searching at higher depth.'
          ],
          note: 'The effective branching factor of well-ordered alpha-beta is √b instead of b — this is why chess engines can search 30+ plies deep instead of the 5-6 that plain minimax would manage.'
        },
        // H — Complexity comparison
        {
          heading: 'Time & Space Complexity',
          text: 'Branching factor b, depth m. The pruning is in the constant: the recursion structure and space are the same as minimax, but the number of leaves examined drops sharply with good ordering.',
          table: {
            headers: ['Aspect', 'Plain Minimax', 'Alpha-Beta (worst order)', 'Alpha-Beta (best order)'],
            rows: [
              ['Time', 'O(b^m)', 'O(b^m) — no pruning', 'O(b^(m/2)) — maximal pruning'],
              ['Effective branching', 'b', 'b', '√b'],
              ['Space', 'O(bm)', 'O(bm)', 'O(bm)'],
              ['Result optimality', 'Optimal', 'Optimal (same)', 'Optimal (same)'],
              ['Searchable depth (chess, b≈35)', '~5-6 plies', '~5-6 plies', '~10-12 plies']
            ]
          },
          note: 'Interview tip: alpha-beta is exact, not approximate — it returns the identical value as minimax. The win is in nodes visited, not in the result. Perfect move ordering doubles searchable depth; that is the headline number to remember.'
        },
        // I — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Thinking alpha-beta is an approximation — it is exact; it returns the identical value as minimax, just faster by skipping provably irrelevant branches.',
            'Passing α and β incorrectly between MAX and MIN nodes — they are passed unchanged down the tree and only updated on the way back up; never reset them inside the recursion.',
            'Not investing in move ordering — without ordering, alpha-beta degenerates to plain minimax; with good ordering it roughly doubles searchable depth. This is where most engine performance comes from.',
            'Forgetting that worst-case ordering yields no pruning — even with random ordering, average performance is still significantly better than minimax, but you should always add at least static move ordering.',
            'Confusing the cutoff directions — at a MAX node you raise α and cut on α ≥ β (β-cutoff, because the MIN parent would reject); at a MIN node you lower β and cut on β ≤ α (α-cutoff).',
            'Resetting α/β between siblings — siblings inherit the parent α/β; only the local node updates them. Resetting wipes out the bounds that make pruning possible.'
          ]
        },
        // J — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'Alpha-beta pruning is the workhorse of competitive game engines. Almost every classical board-game engine in history has used it.',
          list: [
            '<strong>Chess engines:</strong> Stockfish, Komodo, and (classically) Deep Blue use alpha-beta with sophisticated evaluation and move ordering to search billions of positions per second.',
            '<strong>Checkers (Chinook):</strong> Used alpha-beta with endgame databases to solve checkers in 2007, proving perfect play draws.',
            '<strong>Connect Four:</strong> Solved with alpha-beta to show the first player can force a win.',
            '<strong>Real-time strategy combat:</strong> Simplified combat models in StarCraft bots use alpha-beta for tactical micro-decisions.',
            '<strong>Puzzle solvers:</strong> Sliding puzzles and Sokoban solvers use alpha-beta with heuristics to find optimal solutions.',
            '<strong>Automated theorem proving:</strong> Alpha-beta-like cutoffs prune proof search trees in logic engines, where a "move" is a deduction step and the "opponent" is the search for a counter-example.'
          ]
        },
        // K — Practice questions
        {
          heading: 'Top Interview Questions on Alpha-Beta Pruning',
          text: 'These questions test whether you understand WHY pruning is safe (the bounds argument) and how ordering affects performance — the two things interviewers care about most.'
        },
        {
          heading: 'Practice Question 1: Does Pruning Change the Result? (Classic)',
          text: '<strong>Problem:</strong> Does alpha-beta pruning change the result of minimax?<br/><strong>Key idea:</strong> No. Alpha-beta returns the identical value; it only skips branches that are provably irrelevant given the current α and β. The guarantee rests on the monotonicity of max/min and the fact that once α ≥ β the parent cannot choose this branch.',
          example: {
            title: 'Answer',
            code: `No. Alpha-beta is EXACT, not approximate.
It returns the identical minimax value and the
identical best move. It only avoids examining
subtrees that cannot affect the decision given
the current alpha and beta bounds.

Proof sketch: once alpha >= beta at a node, the
parent has a guaranteed better alternative, so
this node's remaining children cannot change the
parent's choice. Skipping them is safe.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Best-Case Complexity (Classic)',
          text: '<strong>Problem:</strong> What is the best-case time complexity of alpha-beta, and what does it mean in practice?<br/><strong>Key idea:</strong> O(b^(m/2)) with perfect move ordering — effectively halving the exponent, which doubles the searchable depth.',
          example: {
            title: 'Answer',
            code: `Best case (perfect move ordering):  O(b^(m/2))
Worst case (pathological order):   O(b^m)  (no pruning)
Average (random order):            ~O(b^(3m/4))

Practical meaning: effective branching factor
becomes sqrt(b) instead of b.
Chess b~35:  plain minimax reaches ~5-6 plies,
            well-ordered alpha-beta reaches ~10-12.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Worst-Case Ordering (Classic)',
          text: '<strong>Problem:</strong> What happens if children are examined in the worst possible order?<br/><strong>Key idea:</strong> No cutoffs occur until the very last child of every node, so alpha-beta degenerates to plain minimax and explores b^m nodes. The bounds never converge fast enough to prune.',
          example: {
            title: 'Answer',
            code: `Worst order: examine the best move LAST at
every node. Alpha never rises / beta never falls
in time, so the cutoff condition alpha>=beta
never fires until the last child (where it is
irrelevant).

Result: alpha-beta explores the full b^m leaves
-- identical work to plain minimax, with the
alpha/beta bookkeeping overhead added.

Even RANDOM ordering is much better than this
because cutoffs happen on average.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Why Move Ordering Is Critical (Classic)',
          text: '<strong>Problem:</strong> Why is move ordering critical for alpha-beta performance?<br/><strong>Key idea:</strong> Finding the best move early creates the largest α-β gap, which makes cutoffs happen on the most siblings. The same tree with bad ordering explores exponentially more nodes.',
          example: {
            title: 'Answer',
            code: `Cutoff fires when alpha >= beta. The EARLIER
the best child is examined, the sooner alpha (or
beta) reaches its final value, and the more
remaining siblings are pruned.

Best-first ordering -> O(b^(m/2)) nodes.
Last-first ordering-> O(b^m) nodes.
Difference is a factor of b^(m/2) -- astronomically
large for deep games.

Techniques: killer moves, history heuristic,
transposition tables, iterative deepening,
static capture-promoting ordering.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Trace a Pruning (Coding)',
          text: '<strong>Problem:</strong> Given leaves [[3,12,8],[2,4,6],[14,5,2]] under MIN under MAX, count how many leaves alpha-beta examines with left-to-right ordering and what value it returns.<br/><strong>Key idea:</strong> After the first MIN returns 3, root α=3. The second MIN examines 2 (β=2 ≤ α=3 → cutoff) — only 1 leaf in that group. The third MIN must examine all 3 (none cut early): 14,5,2. Total: 3 + 1 + 3 = 7 leaves (vs 9 for minimax).',
          example: {
            title: 'Python Trace',
            code: `leaves = [[3,12,8],[2,4,6],[14,5,2]]
visited = 0
alpha = -float('inf')
min_values = []
for group in leaves:
    beta = float('inf')
    for v in group:
        visited += 1
        beta = min(beta, v)
        if beta <= alpha:        # cutoff
            break
    min_values.append(beta)
    alpha = max(alpha, beta)
print('value:', max(min_values), 'leaves visited:', visited)
# value: 3  leaves visited: 7`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Implement With Move Ordering (Coding)',
          text: '<strong>Problem:</strong> Add a simple move-ordering heuristic to the alpha-beta tic-tac-toe player and measure the reduction in nodes visited.<br/><strong>Key idea:</strong> Try moves that complete a line (win/block) first. Count recursive calls with and without ordering; the ordered version should visit roughly half the nodes.',
          example: {
            title: 'Python Solution (sketch)',
            code: `calls = 0
def ab(state, game, alpha, beta, is_max, ordered=False):
    global calls
    calls += 1
    if game.is_terminal(state):
        return game.utility(state, 'X')
    actions = game.actions(state)
    if ordered:
        actions = sorted(actions, key=lambda a: -priority(state, a, game))
    if is_max:
        best = -float('inf')
        for a in actions:
            best = max(best, ab(game.result(state, a), game, alpha, beta, False, ordered))
            alpha = max(alpha, best)
            if alpha >= beta: break
        return best
    else:
        best = float('inf')
        for a in actions:
            best = min(best, ab(game.result(state, a), game, alpha, beta, True, ordered))
            beta = min(beta, best)
            if beta <= alpha: break
        return best
# priority: prefer winning moves, then blocking, then center`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Alpha-beta pruning eliminates branches that cannot affect the minimax decision; the result is identical to minimax, only faster.',
            'α tracks the best score MAX can force; β tracks the best score MIN can force. Cutoff when α ≥ β.',
            'At a MAX node, raise α and cut on α ≥ β (β-cutoff); at a MIN node, lower β and cut on β ≤ α (α-cutoff).',
            'Best-case time O(b^(m/2)) with perfect move ordering — effectively doubling searchable depth; worst-case O(b^m) (no pruning).',
            'Move ordering is the practical key: killer moves, history heuristic, transposition tables, and iterative deepening all aim to examine strong moves first.',
            'Alpha-beta is exact, not approximate; the cutoff proof rests on the parent already having a guaranteed better alternative.'
          ]
        }
      ]
    },
    expectimax: {
      title: 'Expectimax Search',
      subtitle: 'Handling chance and uncertainty in game trees',
      sections: [
        // A — What is expectimax
        {
          heading: 'What is Expectimax Search?',
          text: '<strong>Expectimax</strong> extends minimax to games that include stochastic elements (chance). Instead of assuming an adversarial MIN player, <em>chance nodes</em> represent random outcomes such as dice rolls, card draws, or noisy sensors. At a chance node we do not take a min — we take the <strong>expected value</strong>, the probability-weighted average over the possible outcomes. Expectimax assumes a known probability distribution over the random outcomes, not an adversarial choice.',
          list: [
            '<strong>MAX nodes:</strong> Choose the action that maximizes expected utility (same as minimax).',
            '<strong>CHANCE nodes:</strong> Compute the weighted average of child values based on outcome probabilities.',
            '<strong>Expected utility:</strong> The value at a chance node is the expectation over possible random outcomes.',
            '<strong>No MIN player:</strong> Chance replaces adversarial MIN; the environment is not out to get you, it just rolls dice.',
            '<strong>Applications:</strong> Backgammon, Monopoly, Risk — any game with dice, shuffling, or environmental randomness.'
          ]
        },
        // B — Expectimax vs minimax
        {
          heading: 'Expectimax vs Minimax',
          text: 'The structural difference is one node type. Minimax alternates MAX and MIN layers; expectimax alternates MAX and CHANCE layers (or inserts a CHANCE layer after every MAX in expectiminimax, which has both). This single change has big consequences for pruning.',
          table: {
            headers: ['Aspect', 'Minimax', 'Expectimax'],
            rows: [
              ['Uncertainty source', 'Adversarial MIN player', 'Chance (random outcomes)'],
              ['Non-MAX node computes', 'min of children', 'probability-weighted average'],
              ['Pruning', 'Alpha-beta (exact cutoffs)', 'Only limited pruning (bounds, not single values)'],
              ['Risk attitude', 'Worst-case (pessimistic)', 'Average-case (risk-neutral)'],
              ['Typical games', 'Chess, checkers, Go', 'Backgammon, Monopoly, Pac-Man with random ghosts']
            ]
          },
          note: 'Because chance nodes average many values, you cannot prune a single child the way alpha-beta does — a single low or high outcome still affects the average. Pruning in expectimax requires careful interval bounds (star1/star2, expectimax-bounds) and is much weaker than alpha-beta.'
        },
        // C — Diagram
        {
          heading: 'Visual Diagram — Expectimax Tree',
          text: 'A 3-ply expectimax tree: MAX at the root, then a CHANCE layer with outcome probabilities, then leaves with utilities. The chance node value is the expected value Σ pᵢ · vᵢ.',
          diagram: {
            caption: 'Expectimax: chance node computes expected value; MAX maximizes over children',
            chart: `flowchart TD
    R["MAX<br/>max of children"] --> A["CHANCE<br/>0.5·3 + 0.5·12 = 7.5"]
    R --> B["CHANCE<br/>0.5·2 + 0.5·4 = 3"]
    R --> C["CHANCE<br/>0.5·14 + 0.5·2 = 8"]
    A --> A1["p=0.5<br/>v=3"]
    A --> A2["p=0.5<br/>v=12"]
    B --> B1["p=0.5<br/>v=2"]
    B --> B2["p=0.5<br/>v=4"]
    C --> C1["p=0.5<br/>v=14"]
    C --> C2["p=0.5<br/>v=2"]
    style R fill:#3498db,color:#fff
    style A fill:#f1c40f,color:#000
    style B fill:#f1c40f,color:#000
    style C fill:#f1c40f,color:#000`
          }
        },
        // D — Step-by-step
        {
          heading: 'Step-by-Step Trace',
          text: '<p>Expectimax is a single depth-first traversal, like minimax, but chance nodes aggregate instead of min.</p><ol><li><strong>Leftmost chance node:</strong> outcomes 3 (p=0.5) and 12 (p=0.5). Expected value = 0.5·3 + 0.5·12 = 7.5.</li><li><strong>Middle chance node:</strong> outcomes 2 (p=0.5) and 4 (p=0.5). Expected value = 0.5·2 + 0.5·4 = 3.</li><li><strong>Rightmost chance node:</strong> outcomes 14 (p=0.5) and 2 (p=0.5). Expected value = 0.5·14 + 0.5·2 = 8.</li><li><strong>Root MAX:</strong> max(7.5, 3, 8) = 8. Optimal move is the rightmost child, which maximizes expected utility.</li></ol><p><strong>Why not the leftmost move?</strong> Even though the leftmost chance node has a 12-leaf (the highest single utility), its expected value (7.5) is lower than the rightmost chance node (8). Expectimax is risk-neutral: it cares about the average, not the best case.</p>'
        },
        // E — Pseudocode
        {
          heading: 'Expectimax Recursion',
          text: 'MAX nodes take the max of children; chance nodes take the expected value. There is no MIN layer and no α/β in the basic form.',
          example: {
            title: 'Expectimax Pseudocode',
            code: `Expectimax(node, depth):
  if depth == 0 or Terminal(node):
    return Utility(node)

  if node.type == MAX:
    return max(Expectimax(child, depth-1) for child in children(node))

  if node.type == CHANCE:
    return sum(p(child) * Expectimax(child, depth-1)
               for child in children(node))

# Example: roll a die (6 equally likely outcomes), then opponent moves
# chance node value = (1/6) * V(1) + (1/6) * V(2) + ... + (1/6) * V(6)
# Note: NO MIN layer -- chance replaces adversarial MIN.`,
            language: 'text',
            type: 'code'
          }
        },
        // F — Python implementation
        {
          heading: 'Python Implementation — Expectimax Pac-Man',
          text: 'A toy example: an agent in a 1D corridor chooses Left or Right; each choice is followed by a random environment event (food appears L or R with 50/50). Expectimax picks the direction with higher expected utility.',
          example: {
            title: 'Expectimax for a Stochastic 1D Game',
            code: `def expectimax(state, depth, is_max):
    if depth == 0 or terminal(state):
        return utility(state)
    if is_max:
        return max(expectimax(result(state, a), depth-1, False)
                   for a in actions(state))
    else:                                  # CHANCE node
        outcomes = chance_outcomes(state)   # list of (prob, child_state)
        return sum(p * expectimax(s, depth-1, True) for p, s in outcomes)

# Example: each MAX action is followed by a 50/50 chance event
def chance_outcomes(state):
    return [(0.5, ('L', state)), (0.5, ('R', state))]

# Agent chooses the action with highest EXPECTED utility
def best_move(state, depth):
    return max(actions(state),
               key=lambda a: expectimax(result(state, a), depth-1, False))`,
            language: 'python',
            type: 'code'
          }
        },
        // G — Expectiminimax (chance + adversary)
        {
          heading: 'Expectiminimax — Combining Chance and Adversary',
          text: 'Many real games have BOTH an opponent AND chance (Backgammon: roll dice, then opponent moves; Risk: roll dice to attack, opponent decides to defend). Expectiminimax has three node types: MAX, MIN, and CHANCE. Each turn alternates MAX/MIN with a CHANCE node for the random event. Complexity is higher (chance multiplies the branching factor) and pruning is much weaker.',
          diagram: {
            caption: 'Expectiminimax: MAX, CHANCE, MIN layers in a Backgammon-like tree',
            chart: `flowchart TD
    R[MAX] --> C[CHANCE<br/>dice roll]
    C --> M1[MIN<br/>opponent move]
    C --> M2[MIN]
    M1 --> L1[leaves]
    M2 --> L2[leaves]
    style R fill:#3498db,color:#fff
    style C fill:#f1c40f,color:#000
    style M1 fill:#e74c3c,color:#fff
    style M2 fill:#e74c3c,color:#fff`
          }
        },
        {
          heading: 'Expectiminimax Pseudocode',
          example: {
            title: 'Expectiminimax',
            code: `Expectiminimax(node, depth):
  if Terminal(node) or depth == 0:
    return Utility(node)

  if node.type == MAX:
    return max(Expectiminimax(child, depth-1) for child in children)

  if node.type == MIN:
    return min(Expectiminimax(child, depth-1) for child in children)

  if node.type == CHANCE:
    return sum(p(child) * Expectiminimax(child, depth-1)
               for child in children)`,
            language: 'text',
            type: 'code'
          }
        },
        // H — Pruning in expectimax
        {
          heading: 'Pruning in Expectimax (Star1 / Star2)',
          text: 'Plain alpha-beta does NOT work on chance nodes — a single extreme child still affects the average. Specialized pruning algorithms (star1, star2, *-minimax) bound the chance node value between the worst and best possible outcome and prune only when those bounds rule out the parent decision. The pruning is much weaker than alpha-beta but can still halve the work in some trees.',
          list: [
            '<strong>Star1:</strong> Bounds the maximum and minimum possible value of a chance node from the bounds of its unexplored children; cuts when the bounded range cannot change the parent.',
            '<strong>Star2:</strong> Improves on star1 by probing the first few children to tighten the bounds before pruning the rest.',
            '<strong>Chance-node pruning is fragile:</strong> It depends heavily on knowing the probability distribution and works best when one outcome dominates.'
          ],
          note: 'In practice, expectimax games with very large branching factors (like Backgammon with 21 dice-roll outcomes) are often handled by Monte Carlo sampling instead of exact expectimax — sample N random roll outcomes, average their values, and use that as the chance node estimate.'
        },
        // I — Complexity
        {
          heading: 'Time & Space Complexity',
          text: 'Let b be the branching factor for MAX/MIN nodes, and c the number of outcomes at a chance node. Each chance node multiplies the tree by c.',
          table: {
            headers: ['Algorithm', 'Time', 'Space', 'Notes'],
            rows: [
              ['Expectimax (pure)', 'O(b^m · c^(m/2))', 'O((b+c)m)', 'If MAX and CHANCE alternate; c multiplies the effective branching factor.'],
              ['Expectiminimax', 'O(b^m · c^m)', 'O((b+c)m)', 'Both adversary and chance; even more expensive.'],
              ['Star1/Star2 pruning', 'Worst same, often ~half', 'O((b+c)m)', 'Limited pruning; far weaker than alpha-beta.'],
              ['Monte Carlo sampling', 'O(N · b^m)', 'O(bm)', 'Sample N outcomes per chance node; trades accuracy for speed.']
            ]
          },
          note: 'The chance-node branching factor c is the killer — a die roll has c=6, but a card draw can have c=52. Monte Carlo sampling is the standard fix: replace exact expectation with a sampled estimate.'
        },
        // J — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Using standard minimax for stochastic games — replace MIN nodes with weighted expectation nodes when outcomes are random rather than adversarial.',
            'Assuming uniform probability for all chance outcomes — use the true probability distribution (biased dice, card deck composition, sensor noise model).',
            'Ignoring the branching explosion at chance nodes — use Monte Carlo sampling or cutoffs to approximate expectations without expanding all outcomes.',
            'Confusing expectimax with expectiminimax — expectiminimax is for games with both adversarial MIN and chance nodes; pure expectimax is for non-adversarial stochastic environments.',
            'Trying to apply plain alpha-beta to chance nodes — it does not work; use star1/star2 or sampled estimates.',
            'Treating expectimax as a worst-case guarantee — it is an AVERAGE-case guarantee; a bad roll can still lose, and expectimax accepts that risk because it optimizes the long-run expectation.'
          ]
        },
        // K — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'Expectimax principles apply wherever decisions must account for randomness — not just games with dice but any planning under uncertainty.',
          list: [
            '<strong>Backgammon AI:</strong> Early programs like BKG and TD-Gammon used expectimax (or expectiminimax) to evaluate positions after dice rolls; TD-Gammon reached world-class play with a learned evaluation function.',
            '<strong>Board games with dice:</strong> Monopoly, Risk, and Settlers of Catan bots use expectimax for move evaluation.',
            '<strong>Robot planning under uncertainty:</strong> Navigation with noisy sensors/actuators uses expectimax-like rollouts in belief space; POMDP solvers generalize this.',
            '<strong>Medical decision-making:</strong> Treatment plans under uncertain patient responses are evaluated using expected-utility trees (the medical analog of expectimax).',
            '<strong>Financial modeling:</strong> Decision trees with probabilistic market outcomes use expected-value maximization, structurally identical to expectimax.',
            '<strong>Pac-Man with random ghosts:</strong> A classic teaching example where the ghosts move randomly; expectimax plays well, minimax over-pessimizes.'
          ]
        },
        // L — Practice questions
        {
          heading: 'Top Interview Questions on Expectimax',
          text: 'These questions test the node-type distinction, the risk attitude, and the pruning limitations — the three things interviewers focus on.'
        },
        {
          heading: 'Practice Question 1: New Node Type (Classic)',
          text: '<strong>Problem:</strong> What type of node does expectimax add that minimax does not have?<br/><strong>Key idea:</strong> A chance node that computes the expected value (probability-weighted sum) over random outcomes. It replaces the MIN layer.',
          example: {
            title: 'Answer',
            code: `Expectimax adds a CHANCE node:
  value = sum over outcomes of p_i * value(child_i)
It replaces minimax's MIN layer.
MAX node behavior is unchanged: max of children.
There is NO adversarial MIN player in pure
expectimax -- the environment is neutral.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Chance Node Value (Classic)',
          text: '<strong>Problem:</strong> How is the value of a chance node calculated?<br/><strong>Key idea:</strong> As the probability-weighted sum (expectation) of its children values.',
          example: {
            title: 'Answer',
            code: `V(chance) = sum_i  p_i * V(child_i)

where the p_i are the probabilities of each
random outcome and sum to 1.

Example (fair die):
  V = (1/6)*V(1) + (1/6)*V(2) + ... + (1/6)*V(6)`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Expectimax for Poker? (Classic)',
          text: '<strong>Problem:</strong> Is expectimax appropriate for poker? Why or why not?<br/><strong>Key idea:</strong> No — poker has hidden information (imperfect information), not just visible randomness. The opponent sees only their own cards, so the "chance" is over the hidden cards AND the opponent is adversarial. Use belief-state reasoning or counterfactual regret minimization.',
          example: {
            title: 'Answer',
            code: `Poker is imperfect-information:
  - opponent's cards are hidden
  - you reason over a BELIEF (distribution over
    hidden cards), not a single visible chance
  - opponent is still adversarial (they bluff)

Pure expectimax assumes visible randomness and
a non-adversarial environment -- wrong model.

Use: belief-state expectiminimax, or better,
counterfactual regret minimization (CFR) which
finds a Nash equilibrium in imperfect-info games.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Pruning Limitations (Classic)',
          text: '<strong>Problem:</strong> What is the main computational challenge of expectimax compared to minimax, and why does plain alpha-beta not apply?<br/><strong>Key idea:</strong> Chance nodes multiply the branching factor (a die adds 6 children at every chance layer), making the tree much wider. Plain alpha-beta cannot prune at chance nodes because every child contributes to the average, so a single extreme child still changes the value.',
          example: {
            title: 'Answer',
            code: `Challenge 1: branching factor
  chance node with c outcomes multiplies the
  tree by c at every chance layer
  -> O(b^m * c^m) for expectiminimax

Challenge 2: no clean alpha-beta
  V(chance) = average; pruning a single child
  changes the average, so alpha-beta's exact
  cutoff rule does not apply.
  Use star1/star2 (bounded pruning) or sample
  the chance node with Monte Carlo rollouts.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Expectimax Trace (Coding)',
          text: '<strong>Problem:</strong> Given chance outcomes [[(0.5,3),(0.5,12)], [(0.5,2),(0.5,4)], [(0.5,14),(0.5,2)]], compute the expectimax value at the root and the optimal move.<br/><strong>Key idea:</strong> Each chance node value is the expected value; the root takes the max.',
          example: {
            title: 'Python Trace',
            code: `chance_nodes = [
    [(0.5, 3),  (0.5, 12)],
    [(0.5, 2),  (0.5, 4)],
    [(0.5, 14), (0.5, 2)],
]
expected = [sum(p*v for p,v in node) for node in chance_nodes]
# [7.5, 3.0, 8.0]
root_value = max(expected)
best_move = expected.index(root_value)
print(root_value, best_move)   # 8.0 2`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Risk-Neutral vs Worst-Case (Conceptual)',
          text: '<strong>Problem:</strong> Compare expectimax and minimax in terms of risk attitude. Give an example where they pick different moves.<br/><strong>Key idea:</strong> Minimax is worst-case (pessimistic); expectimax is average-case (risk-neutral). If move A leads to +100 with prob 0.99 and −1000 with prob 0.01 (expectation −0.1), and move B is +1 for sure, expectimax picks B (1 > −0.1) while minimax picks B too (−1000 < 1) — they agree. But if A is +10 with prob 0.5 and 0 with prob 0.5 (expectation 5) and B is 4 for sure, expectimax picks A while a maximin strategy picks B (B guarantees 4 > 0).',
          example: {
            title: 'Answer',
            code: `Minimax:   worst-case (pessimistic) -- pick the
           move whose worst outcome is best.
Expectimax: average-case (risk-neutral) -- pick the
           move whose expected outcome is best.

Example where they DISAGREE:
  Move A: +10 with p=0.5,  0 with p=0.5  (EV=5, worst=0)
  Move B: +4 with p=1                     (EV=4, worst=4)
  Expectimax picks A (5 > 4).
  Minimax   picks B (4 > 0).

Expectimax accepts some bad outcomes for a higher
average; minimax guarantees the worst case.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Expectimax extends minimax to handle stochastic (random) outcomes; chance nodes compute the expected value (probability-weighted sum).',
            'Chance replaces adversarial MIN — the environment is neutral, not out to get you.',
            'Expectimax is risk-neutral (average-case); minimax is worst-case. They can disagree on which move is best.',
            'Plain alpha-beta does NOT apply to chance nodes — every child affects the average. Use star1/star2 or Monte Carlo sampling.',
            'Expectiminimax combines MAX, MIN, and CHANCE for games with both adversaries and dice (Backgammon, Risk).',
            'For imperfect-information games (poker), expectimax is the wrong tool — use belief-state reasoning or counterfactual regret minimization.'
          ]
        }
      ]
    },
    'game-theory': {
      title: 'Game Theory',
      subtitle: 'The mathematics of strategic interaction',
      sections: [
        // A — What is game theory
        {
          heading: 'What is Game Theory?',
          text: '<strong>Game theory</strong> is the mathematical study of strategic interactions among rational decision-makers. It provides formal tools to analyze how agents should behave when their outcomes depend on the actions of others. Where minimax assumes a single opposing player and a zero-sum utility, game theory handles arbitrary numbers of players, hidden information, cooperation, and arbitrary payoff structures. The single most important concept is the <em>Nash equilibrium</em> — a strategy profile where no player can improve by unilaterally changing their strategy.',
          list: [
            '<strong>Players:</strong> The rational agents participating in the game (one, two, or many).',
            '<strong>Strategies:</strong> The complete plans of action available to each player, including mixed (randomized) strategies.',
            '<strong>Payoffs:</strong> The utility each player receives for every possible combination of strategies — written in a payoff matrix for simultaneous games.',
            '<strong>Nash equilibrium:</strong> A set of strategies where no player can benefit by unilaterally changing their own strategy.',
            '<strong>Dominant strategy:</strong> A strategy that is optimal regardless of what the opponent does — if both players have one, the resulting equilibrium is easy to find.',
            '<strong>Pareto efficiency:</strong> An outcome is Pareto-efficient if no player can be made better off without making another worse off; Nash equilibria need NOT be Pareto-efficient (the Prisoner Dilemma is the famous example).'
          ]
        },
        // B — Normal form games
        {
          heading: 'Normal-Form (Strategic-Form) Games',
          text: 'A normal-form game is described by a payoff matrix: rows are player A strategies, columns are player B strategies, and each cell holds the payoffs (u_A, u_B). This format suits simultaneous-move games. Sequential games use the extensive form (a game tree) instead.',
          list: [
            '<strong>Pure strategy:</strong> A specific deterministic choice (e.g. "always cooperate").',
            '<strong>Mixed strategy:</strong> A probability distribution over pure strategies (e.g. "cooperate with 70% probability, defect with 30%").',
            '<strong>Best response:</strong> The best strategy for a player given the strategies chosen by the others.',
            '<strong>Dominant strategy:</strong> A strategy that is a best response to EVERY possible opponent strategy.'
          ]
        },
        // C — Prisoner's dilemma
        {
          heading: 'The Prisoner Dilemma',
          text: 'Two suspects are interrogated separately. If both stay silent (cooperate), they each get 1 year. If one confesses (defects) and the other stays silent, the defector goes free and the other gets 3 years. If both confess, both get 2 years. The dominant strategy for each is to defect, so the unique Nash equilibrium is (Defect, Defect) — but mutual cooperation would leave both better off. This is the canonical example of an inefficient Nash equilibrium.',
          diagram: {
            caption: 'Prisoner Dilemma payoff matrix (years in prison, lower is better)',
            chart: `flowchart LR
    subgraph P[Prisoner Dilemma]
      direction TB
      B[Player B]
      subgraph BC[B columns]
        direction LR
        Bcoop[Cooperate]
        Bdef[Defect]
      end
      A[Player A]
      subgraph AC[A rows]
        direction TB
        Acoop[Cooperate]
        Adef[Defect]
      end
    end
    Acoop --> R1["(-1,-1)   (-3, 0)"]
    Adef --> R2["(0,-3)    (-2,-2)"]
    style Adef fill:#e74c3c,color:#fff
    style Bdef fill:#e74c3c,color:#fff
    style R2 fill:#f1c40f,color:#000`
          }
        },
        {
          heading: 'Why (Defect, Defect) Is the Equilibrium',
          text: '<p>For player A: if B cooperates, A defects to go from -1 to 0 (better). If B defects, A defects to go from -3 to -2 (better). So defect dominates — A defects regardless of B. By symmetry B also defects. The result is (Defect, Defect) = (-2, -2), which is <em>worse</em> for both than (-1, -1) mutual cooperation. This is the central tragedy: rational self-interest leads to a collectively worse outcome.</p><p><strong>Pareto efficiency:</strong> (-1, -1) is Pareto-efficient (neither can improve without hurting the other). (-2, -2) is NOT Pareto-efficient — both could move to (-1, -1) — yet it is the Nash equilibrium. Nash equilibrium and Pareto efficiency are different concepts and need not coincide.</p>'
        },
        // D — Nash equilibrium
        {
          heading: 'Nash Equilibrium',
          text: 'A strategy profile (s₁*, …, sₙ*) is a Nash equilibrium if for every player i, sᵢ* is a best response to the strategies of the others. Equivalently: no player has an incentive to deviate unilaterally. Nash proved (1950) that every finite game has at least one equilibrium when mixed strategies are allowed.',
          list: [
            '<strong>Pure Nash:</strong> An equilibrium using only pure strategies (like Defect, Defect). Not all games have one.',
            '<strong>Mixed Nash:</strong> An equilibrium using randomized strategies. Every finite game has at least one.',
            '<strong>Multiple equilibria:</strong> A game can have many Nash equilibria (coordination games); which one is played is a separate question.',
            '<strong>Refinements:</strong> Subgame-perfect equilibrium (for sequential games), Bayesian Nash (for incomplete information), trembling-hand perfect (for stability under small mistakes).'
          ]
        },
        // E — Mixed strategies
        {
          heading: 'Mixed Strategies — Matching Pennies',
          text: 'In Matching Pennies, two players each show a coin. A wins if both match, B wins if they differ. There is no pure Nash equilibrium — whatever A plays, B wants to do the opposite. The only Nash equilibrium is for both to randomize 50/50. Predictable play is exploitable, so the only stable solution is to be unpredictable.',
          diagram: {
            caption: 'Matching Pennies: no pure equilibrium, only the mixed (50/50, 50/50) is stable',
            chart: `flowchart LR
    subgraph MP[Matching Pennies]
      direction TB
      Acoop[A: Heads 50% / Tails 50%]
      Bcoop[B: Heads 50% / Tails 50%]
    end
    Acoop --> O["No pure Nash<br/>Mixed Nash = (0.5,0.5) for both"]
    style O fill:#f1c40f,color:#000`
          }
        },
        {
          heading: 'Computing a Mixed Nash Equilibrium',
          text: 'For a 2×2 zero-sum game, the mixed Nash equilibrium is found by solving for the probability that makes the opponent indifferent between their two strategies. This is the minimax theorem (von Neumann, 1928): every two-player zero-sum game has a value when mixed strategies are allowed.',
          example: {
            title: 'Mixed Strategy in a 2x2 Zero-Sum Game',
            code: `import numpy as np
from scipy.optimize import linprog

# Zero-sum payoff matrix for player A (rows = A's strategies)
A = np.array([[3, -2],
              [-1, 1]])

# Solve A's mixed strategy: maximize the game value v
# subject to sum(p)=1, p>=0, and A.T @ p >= v for every B column.
# Linprog form: minimize -v  ->  maximize v
n = A.shape[0]
c = np.zeros(n + 1); c[-1] = -1           # minimize -v
A_ub = np.hstack([-A.T, np.ones((n, 1))])  # -A.T p + v <= 0
b_ub = np.zeros(n)
A_eq = np.append(np.ones(n), 0).reshape(1, -1)  # sum(p) = 1
b_eq = [1]
bounds = [(0, None)] * n + [(None, None)]
res = linprog(c, A_ub=A_ub, b_ub=b_ub, A_eq=A_eq, b_eq=b_eq, bounds=bounds)
print('A mixed strategy:', np.round(res.x[:-1], 3), 'value:', round(res.x[-1], 3))`,
            language: 'python',
            type: 'code'
          }
        },
        // F — Types of games
        {
          heading: 'Classifying Games',
          text: 'Game theory classifies interactions by structure and information. Recognizing the class determines the solution concept.',
          table: {
            headers: ['Dimension', 'Type A', 'Type B', 'Classic Example'],
            rows: [
              ['Timing', 'Simultaneous', 'Sequential', 'Rock-paper-scissors vs Chess'],
              ['Cooperation', 'Cooperative', 'Non-cooperative', 'Team sports vs Auctions'],
              ['Payoff structure', 'Zero-sum', 'Non-zero-sum', 'Poker vs Prisoner Dilemma'],
              ['Information', 'Complete', 'Incomplete', 'Chess vs Poker'],
              ['Repetition', 'One-shot', 'Repeated', 'Single auction vs Oligopoly pricing'],
              ['Number of players', 'Two-player', 'Multi-player', 'Chess vs Auctions']
            ]
          }
        },
        // G — Repeated games
        {
          heading: 'Repeated Games and Cooperation',
          text: 'In a one-shot Prisoner Dilemma, mutual defection is rational. But if the game is repeated indefinitely (or with unknown end), cooperation can be sustained through reputation and punishment. The folk theorem says that in infinitely repeated games, any individually rational payoff can be sustained as an equilibrium if players are patient enough. Tit-for-tat (cooperate first, then mirror the opponent last move) is a famously strong strategy.',
          list: [
            '<strong>Tit-for-tat:</strong> Cooperate on the first round, then do whatever the opponent did last round. Simple, forgiving, and provably strong in repeated Prisoner Dilemma tournaments (Axelrod).',
            '<strong>Trigger strategies:</strong> Cooperate until the opponent defects, then defect forever — a harsh punishment that sustains cooperation when the future matters enough.',
            '<strong>Discount factor:</strong> How much players value future payoffs relative to present ones; high discount factors make cooperation sustainable.',
            '<strong>Folk theorem:</strong> In infinitely repeated games with patient players, almost any payoff can be an equilibrium — so equilibrium loses predictive power.'
          ]
        },
        // H — Mechanism design
        {
          heading: 'Mechanism Design — Reverse Game Theory',
          text: 'Mechanism design flips the question: given a desired outcome, what rules (mechanism) make rational self-interested agents achieve it? The Vickrey (second-price) auction is the classic example — bidding your true value is a dominant strategy, so the auction elicits truthful information and allocates the good to whoever values it most.',
          list: [
            '<strong>Vickrey auction (second-price sealed-bid):</strong> Highest bidder wins but pays the second-highest bid; truthful bidding is dominant.',
            '<strong>VCG mechanism:</strong> Generalizes Vickrey to multiple goods and public projects; agents pay their externality.',
            '<strong>Revenue equivalence theorem:</strong> Many auction formats (English, Dutch, first-price, second-price) yield the same expected revenue under standard assumptions.',
            '<strong>Implementation theory:</strong> Which social choice rules can be implemented as the equilibrium of some mechanism.'
          ]
        },
        // I — Python implementation
        {
          heading: 'Python Implementation — Finding Nash Equilibria',
          text: 'For small 2×2 games, a brute-force check of every strategy profile suffices. For larger games, use support enumeration or solvers like Nashpy.',
          example: {
            title: 'Nash Equilibrium of a 2x2 Game',
            code: `import nashpy as nash
import numpy as np

# Prisoner's Dilemma: payoffs for (A, B) as two matrices
A_pay = np.array([[-1, -3],
                  [ 0, -2]])   # A's payoff (rows = A's strategy)
B_pay = np.array([[-1,  0],
                  [-3, -2]])   # B's payoff (columns = B's strategy)

game = nash.Game(A_pay, B_pay)
equilibria = list(game.support_enumeration())
for eq in equilibria:
    print(eq)
# ((1, 0), (1, 0)) means A plays row 0 with prob 1, B plays col 0 with prob 1
# That is (Cooperate, Cooperate)? Check: row 0 = Cooperate? Depends on encoding.
# For the canonical PD encoding (Defect dominates), the unique Nash is (Defect, Defect).`,
            language: 'python',
            type: 'code'
          }
        },
        // J — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Assuming the Nash equilibrium is always the best social outcome — Nash describes stability, not optimality; the Prisoner Dilemma shows equilibria can be Pareto-inefficient.',
            'Ignoring mixed strategies — in games like Matching Pennies, the only Nash equilibrium is a randomized mixed strategy, not a pure one.',
            'Applying one-shot game logic to repeated games — repeated interactions enable cooperation through tit-for-tat, reputation, and trigger strategies.',
            'Assuming all players are perfectly rational — behavioral game theory incorporates bounded rationality, altruism, and risk aversion for more realistic predictions.',
            'Confusing zero-sum and non-zero-sum — minimax is optimal for zero-sum; non-zero-sum games need Nash equilibrium concepts.',
            'Forgetting that a game can have multiple Nash equilibria — coordination games (e.g. driving on the left vs right) have several, and which one is selected is a separate question.'
          ]
        },
        // K — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'Game theory illuminates strategic behavior across economics, politics, and computer science.',
          list: [
            '<strong>Auction design:</strong> eBay, Google AdWords, and FCC spectrum auctions use game-theoretic mechanisms (Vickrey, VCG) to elicit truthful bids.',
            '<strong>Network protocols:</strong> TCP congestion control models routers as players in a shared-resource game; selfish routing leads to Braess paradox.',
            '<strong>Oligopoly pricing:</strong> Airlines and telecom firms set prices considering competitors reactions, modeled as repeated games.',
            '<strong>Cybersecurity:</strong> Attack-defense interactions are modeled as Stackelberg games where the defender commits to a strategy first.',
            '<strong>Traffic routing:</strong> Braess paradox: adding a road can make traffic WORSE for everyone because selfish routing changes the equilibrium.',
            '<strong>Spectrum and kidney exchange:</strong> Matching theory (a branch of game theory) underlies medical school matches and kidney paired donation programs.'
          ]
        },
        // L — Practice questions
        {
          heading: 'Top Interview Questions on Game Theory',
          text: 'These questions test the foundational concepts: Nash equilibrium, dominant strategies, mixed strategies, and the relationship to the algorithms in this module.'
        },
        {
          heading: 'Practice Question 1: Define Nash Equilibrium (Classic)',
          text: '<strong>Problem:</strong> Define Nash equilibrium in your own words.<br/><strong>Key idea:</strong> A strategy profile where no player can improve their payoff by changing their strategy alone, given the strategies of all other players.',
          example: {
            title: 'Answer',
            code: `Nash equilibrium: a strategy profile (s1*,...,sn*)
such that for every player i:
  Ui(si*, s_-i*) >= Ui(si', s_-i*)
  for all alternative strategies si'.

No unilateral incentive to deviate. Note:
 - does NOT require it to be the best for society
 - may be mixed (randomized)
 - a game can have many, or none in pure strategies.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Dominant Strategy (Classic)',
          text: '<strong>Problem:</strong> What is a dominant strategy?<br/><strong>Key idea:</strong> A strategy that is optimal for a player no matter what the other players do. If both players have one, the resulting profile is a Nash equilibrium (and easy to find).',
          example: {
            title: 'Answer',
            code: `A strategy s_i* DOMINATES if for every opponent
strategy profile s_-i:
  Ui(si*, s_-i) >= Ui(si', s_-i)  for all si'.

If every player has a dominant strategy, the
profile of dominant strategies is a Nash
equilibrium. Example: Defect in the Prisoner's
Dilemma -- dominant for both players.

Note: dominant strategies need NOT exist.
Matching pennies has none.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Prisoner Dilemma Equilibrium (Classic)',
          text: '<strong>Problem:</strong> Why does the Prisoner Dilemma have a Nash equilibrium that is worse for both than mutual cooperation?<br/><strong>Key idea:</strong> Defection is a dominant strategy; each player rationally defects to avoid the worst individual outcome, leading to mutual defection even though mutual cooperation pays more. This illustrates the gap between individual rationality and collective optimality.',
          example: {
            title: 'Answer',
            code: `PD payoffs (years in prison, lower=better):
            B coop      B defect
A coop    (-1,-1)     (-3, 0)
A defect  (0,-3)      (-2,-2)

Defect dominates: whatever B does, defecting is
better for A (0>-1 if B coop; -2>-3 if B defect).
By symmetry B also defects.

Equilibrium (Defect, Defect) = (-2,-2) is Pareto-
dominated by (Coop,Coop)=(-1,-1), but cooperation
is not stable -- each has incentive to defect.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Mixed Strategies (Classic)',
          text: '<strong>Problem:</strong> In what type of game is a mixed strategy necessary to find a Nash equilibrium?<br/><strong>Key idea:</strong> In zero-sum games with no dominant strategies, such as Matching Pennies or Rock-Paper-Scissors, where any predictable play is exploitable.',
          example: {
            title: 'Answer',
            code: `Mixed strategies are required when NO pure
Nash equilibrium exists.

Examples:
 - Matching Pennies: opponent always wants to differ
   -> only (50/50, 50/50) is stable
 - Rock-Paper-Scissors: only (1/3,1/3,1/3) is stable
 - Penalty kicks in soccer: mixed (left/center/right)

In these games a deterministic strategy is
exploitable, so being unpredictable is necessary.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Solve a Mixed Equilibrium (Coding)',
          text: '<strong>Problem:</strong> For Rock-Paper-Scissors (zero-sum, payoff 1 for win, -1 for loss, 0 for tie), find the mixed Nash equilibrium.<br/><strong>Key idea:</strong> By symmetry each player plays each option with probability 1/3; the game value is 0. Verify by linear programming or by observing that any other mix is exploitable.',
          example: {
            title: 'Python Solution',
            code: `import numpy as np
from scipy.optimize import linprog

A = np.array([[ 0, -1,  1],
              [ 1,  0, -1],
              [-1,  1,  0]], dtype=float)   # A's payoff (rows = A's strategy)

n = A.shape[0]
# maximize v s.t. A.T p >= v, sum(p)=1, p>=0  ->  minimize -v
c = np.append(np.zeros(n), -1)
A_ub = np.hstack([-A.T, np.ones((n, 1))])   # -A.T p + v <= 0
b_ub = np.zeros(n)
A_eq = np.append(np.ones(n), 0).reshape(1, -1)
b_eq = [1]
bounds = [(0, None)] * n + [(None, None)]
res = linprog(c, A_ub=A_ub, b_ub=b_ub, A_eq=A_eq, b_eq=b_eq, bounds=bounds)
print('mixed strategy:', np.round(res.x[:n], 3), 'value:', round(res.x[-1], 3))
# mixed strategy: [0.333 0.333 0.333]  value: 0.0`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Repeated Games vs One-Shot (Conceptual)',
          text: '<strong>Problem:</strong> Why can cooperation be sustained in a repeated Prisoner Dilemma but not in a one-shot one?<br/><strong>Key idea:</strong> In a one-shot game there is no future consequence, so defection is dominant. In a repeated game, defection today triggers punishment (e.g. tit-for-tat or grim trigger) in future rounds; if the future is valuable enough (high discount factor), cooperation becomes the equilibrium.',
          example: {
            title: 'Answer',
            code: `One-shot PD: no future -> defect dominates.
Repeated PD: a defection today is punished by
the opponent defecting in future rounds.

If discount factor d (value of future payoff) is
high enough, the present gain from defecting is
outweighed by the lost future cooperation:

  Cooperation is sustainable if
    d > T - R / T - P     (for tit-for-tat)

Tit-for-tat: cooperate first, then mirror the
opponent. Simple, nice, provocable, forgiving --
won Axelrod's tournament.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Game theory analyzes strategic interactions using players, strategies, and payoff matrices.',
            'Nash equilibrium is a stable strategy profile where no player benefits from unilateral deviation; every finite game has at least one (possibly mixed).',
            'Dominant strategies are optimal regardless of opponents actions, but they do not always exist; when they do, the profile is a Nash equilibrium.',
            'Games differ along dimensions: simultaneous vs sequential, cooperative vs non-cooperative, zero-sum vs general-sum, complete vs incomplete information.',
            'Repeated games, mixed strategies, and mechanism design extend basic game theory to richer real-world settings.',
            'Nash equilibrium describes stability, not optimality — the Prisoner Dilemma shows equilibria can be Pareto-inefficient.'
          ]
        }
      ]
    },
    'monte-carlo-tree-search': {
      title: 'Monte Carlo Tree Search',
      subtitle: 'Building search trees from randomized playouts',
      sections: [
        // A — What is MCTS
        {
          heading: 'What is Monte Carlo Tree Search?',
          text: '<strong>Monte Carlo Tree Search (MCTS)</strong> is a best-first search algorithm that uses random sampling (Monte Carlo rollouts) to evaluate states. Instead of relying on a handcrafted evaluation function (which is hard for games like Go where positional judgement is subtle), MCTS builds a search tree by playing out random games from each candidate state and statistically estimating state values. The more rollouts it runs, the better its estimates become — MCTS is <em>anytime</em>, meaning you can stop at any time and use the best move found so far.',
          list: [
            '<strong>No evaluation function needed:</strong> MCTS learns values from random playouts, which is why it succeeded in Go where handcrafted evaluation failed for decades.',
            '<strong>Anytime:</strong> Stop after any number of iterations and use the most-visited root child as the move — more iterations = stronger play.',
            '<strong>Best-first:</strong> MCTS grows the tree toward the most promising regions using the UCB1 formula, balancing exploration and exploitation.',
            '<strong>Asymmetric:</strong> The tree is grown deeper along promising lines and shallower along bad ones — the tree shape adapts to the game.',
            '<strong>Embarrassingly parallel:</strong> Independent rollouts can run on separate cores or machines, making MCTS well-suited to massive parallelism.'
          ]
        },
        // B — The four phases
        {
          heading: 'The Four Phases of MCTS',
          text: 'Each iteration of MCTS runs through four phases, then repeats. The result is a tree whose root-child visit counts indicate the best move.',
          list: [
            '<strong>Selection:</strong> Traverse the tree from the root using the UCB1 formula to pick which child to descend at each node, balancing exploitation (high average reward) and exploration (rarely visited nodes). Stop at a node that is not fully expanded.',
            '<strong>Expansion:</strong> Add one or more child nodes from the selected leaf (if it is not terminal).',
            '<strong>Simulation (rollout):</strong> Play a random (or lightly heuristic) game from the new node to a terminal state. The outcome is a win/loss/draw.',
            '<strong>Backpropagation:</strong> Update the win and visit counts of every node along the path from the new node back to the root.'
          ]
        },
        // C — MCTS diagram
        {
          heading: 'Visual Diagram — The Four Phases of MCTS',
          text: 'The diagram shows one MCTS iteration: select down the tree by UCB1, expand one child, simulate a random rollout to a terminal, then backpropagate the result up the path.',
          diagram: {
            caption: 'One MCTS iteration: selection (UCB1) → expansion → simulation → backpropagation',
            chart: `flowchart LR
    subgraph Sel[1. Selection]
      direction TB
      R1[root] --> A[UCB1] --> B[UCB1] --> L[leaf]
    end
    subgraph Exp[2. Expansion]
      direction TB
      L --> N[new child]
    end
    subgraph Sim[3. Simulation]
      direction LR
      N --> R["random rollout<br/>... ... terminal<br/>result: win"]
    end
    subgraph Bk[4. Backpropagation]
      direction TB
      R2[root] --> A2[+1] --> B2[+1] --> L2[+1] --> N2[+1]
    end
    Sel --> Exp --> Sim --> Bk
    style L fill:#f1c40f,color:#000
    style N fill:#2ecc71,color:#fff
    style R fill:#3498db,color:#fff`
          }
        },
        // D — UCB1 formula
        {
          heading: 'UCB1 — Selection Formula',
          text: 'At each node during selection, MCTS picks the child maximizing the UCB1 (Upper Confidence Bound) value. UCB1 balances <em>exploitation</em> (the child average reward) with <em>exploration</em> (a bonus for rarely visited children). The exploration constant C controls the trade-off and is tuned empirically.',
          example: {
            title: 'UCB1 Selection',
            code: `UCB1(child) = Q(child)/N(child) + C * sqrt(2 * ln(N(parent)) / N(child))

Where:
  Q(child)   = total reward from rollouts through this child
  N(child)   = number of times this child has been visited
  N(parent)  = visit count of the parent
  C          = exploration constant (typically sqrt(2), tuned per game)

Intuition:
  Q/N       = exploitation: average reward so far
  C*sqrt(.) = exploration bonus: large when child rarely visited

Selection continues until a node with N=0 (unvisited) is found
-> that node is then expanded and simulated.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Why UCB1 Balances Exploration and Exploitation',
          text: '<p>UCB1 is a bandit algorithm. The first term (Q/N) favors children that have won often — exploitation. The second term (C·sqrt(ln N(parent)/N(child))) is large when a child has been visited rarely relative to its siblings — exploration. As a child is visited more, its exploration bonus shrinks, so attention shifts to less-visited children. The constant C scales how much we value exploration; too low and MCTS gets stuck in early good-looking moves, too high and it wastes rollouts on bad moves.</p><p><strong>Mathematical guarantee:</strong> The Hoeffding bound underlying UCB1 guarantees that, given enough rollouts, the empirical average reward converges to the true value, so MCTS eventually identifies the optimal move.</p>'
        },
        // E — Python implementation
        {
          heading: 'Python Implementation — MCTS for Tic-Tac-Toe',
          text: 'A complete, self-contained MCTS that plays tic-tac-toe. Each Node tracks visits N and wins Q; selection uses UCB1; rollout is random; backpropagation updates every ancestor.',
          example: {
            title: 'MCTS Player (Python)',
            code: `import math, random

class Node:
    def __init__(self, state, parent=None, action=None):
        self.state, self.parent, self.action = state, parent, action
        self.children = {}
        self.N = 0                # visits
        self.Q = 0                # total reward from this parent's perspective
        self.untried = None       # lazily computed

    def ucb1(self, child, c=1.4):
        if child.N == 0: return float('inf')
        return child.Q/child.N + c * math.sqrt(2*math.log(self.N) / child.N)

def mcts(root_state, game, iterations=2000):
    root = Node(root_state)
    for _ in range(iterations):
        node, state = root, root_state
        # 1. Selection
        while node.untried == [] and node.children:
            node = max(node.children.values(), key=lambda c: node.ucb1(c))
            state = game.result(state, node.action)
        # 2. Expansion
        if node.untried is None:
            node.untried = list(game.actions(state))
        if node.untried:
            a = node.untried.pop()
            state = game.result(state, a)
            child = Node(state, node, a)
            node.children[a] = child
            node = child
        # 3. Simulation (random rollout)
        s = state
        while not game.is_terminal(s):
            a = random.choice(game.actions(s))
            s = game.result(s, a)
        reward = game.utility(s, game.player(root_state))  # +1 win, -1 loss, 0 draw
        # 4. Backpropagation (flip reward each level: opponent's perspective)
        while node is not None:
            node.N += 1
            node.Q += reward if game.player(node.state) == game.player(root_state) else -reward
            node = node.parent
    # Pick most-visited root child
    return max(root.children, key=lambda a: root.children[a].N)`,
            language: 'python',
            type: 'code'
          }
        },
        // F — Rollout policy
        {
          heading: 'Rollout Policy — Pure Random vs Heuristic',
          text: 'The simulation phase uses a <em>rollout policy</em> — the rule for choosing moves in the random game. Pure random is the simplest and works for teaching, but adding light domain knowledge (e.g. "if a winning move exists, take it") dramatically speeds convergence. AlphaGo replaced the random rollout with a fast policy network.',
          list: [
            '<strong>Pure random:</strong> Each move chosen uniformly at random. Simple, no domain knowledge, but noisy rollouts.',
            '<strong>Heuristic rollout:</strong> Apply a cheap heuristic — take an immediate win, block an immediate loss, otherwise random. Much stronger with the same iteration count.',
            '<strong>Learned rollout:</strong> A fast neural network (the rollout policy in AlphaGo) picks moves. Far more accurate but slower per rollout.',
            '<strong>Tree policy vs rollout policy:</strong> The tree policy (UCB1) guides the in-tree selection; the rollout policy guides the random game outside the tree. They are separate.'
          ]
        },
        // G — MCTS vs minimax
        {
          heading: 'MCTS vs Minimax / Alpha-Beta',
          text: 'MCTS and alpha-beta are the two dominant search paradigms. They differ in philosophy and in the games they suit best.',
          table: {
            headers: ['Aspect', 'Alpha-Beta / Minimax', 'MCTS'],
            rows: [
              ['Evaluation', 'Handcrafted evaluation function', 'Statistical rollouts'],
              ['Branching factor', 'Needs low branching (chess b≈35)', 'Handles high branching well (Go b≈250)'],
              ['Domain knowledge', 'Heavily dependent on eval', 'Can be purely random (UCT)'],
              ['Anytime property', 'No — must finish depth', 'Yes — can stop and return best move'],
              ['Parallelization', 'Difficult (shared state)', 'Embarrassingly parallel rollouts'],
              ['Best for', 'Chess, deterministic low-branching games', 'Go, large-branching games, POMDPs'],
              ['Convergence', 'Deterministic value at given depth', 'Statistical; improves with more iterations']
            ]
          }
        },
        // H — Complexity and convergence
        {
          heading: 'Complexity and Convergence',
          text: 'MCTS quality scales with the number of rollouts, not with depth per se. Each rollout is O(L) where L is the average game length; the per-iteration cost is O(L) for rollout plus O(depth) for selection. More iterations = better estimates; the convergence rate is O(1/sqrt(N)) — to halve the error, quadruple the rollouts.',
          table: {
            headers: ['Aspect', 'Cost', 'Notes'],
            rows: [
              ['Per iteration', 'O(L + d)', 'L = rollout length, d = tree depth at selection.'],
              ['Total (N iterations)', 'O(N · (L + d))', 'Scales linearly in compute.'],
              ['Convergence', 'O(1/√N)', 'Halving error needs 4x rollouts; quality improves slowly but steadily.'],
              ['Space', 'O(N · d)', 'Tree stores one node per simulated position; can be large.'],
              ['Parallel speedup', 'Near-linear', 'Rollouts are independent; root-level locking is the only contention.']
            ]
          },
          note: 'Interview tip: MCTS trades a fixed evaluation function for a statistical one. The win is that no expert knowledge is needed, but the cost is that quality depends on compute budget — MCTS plays weakly with few rollouts and strongly with many.'
        },
        // I — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Using a purely random rollout policy in complex games — add light domain knowledge (take wins, block losses) to improve simulation quality and convergence speed.',
            'Setting the exploration constant C too high or too low — tune C empirically; too high over-explores, too low gets stuck in local optima.',
            'Running too few iterations for reliable estimates — MCTS quality scales with sqrt(N); allocate enough compute or the move choice is noisy.',
            'Not using transposition tables in games with repeated states — merge identical positions to avoid redundant search and improve statistic quality.',
            'Forgetting MCTS is anytime — design your loop to use a time budget and return the most-visited root child when time runs out, not the highest-scoring one (visit count is the reliable signal).',
            'Confusing the tree policy with the rollout policy — UCB1 guides in-tree selection; the rollout policy guides the random game outside the tree. They are independent choices.'
          ]
        },
        // J — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'MCTS revolutionized AI for games with enormous branching factors and is now used far beyond games.',
          list: [
            '<strong>AlphaGo:</strong> Combined MCTS with deep neural networks (policy and value nets) to defeat the world Go champion in 2016 — the breakthrough that made MCTS famous.',
            '<strong>General game playing:</strong> MCTS agents perform well in arbitrary games without domain-specific heuristics, because they learn values from rollouts.',
            '<strong>Real-time strategy games:</strong> MCTS handles large action spaces in StarCraft for tactical micro-management and in RTS research.',
            '<strong>Planning under uncertainty:</strong> POMCP (Partially Observable Monte Carlo Planning) uses MCTS for robotics and health-care planning with hidden state.',
            '<strong>Combinatorial optimization:</strong> MCTS searches massive configuration spaces for protein folding, scheduling, and vehicle routing.',
            '<strong>Classic board games online:</strong> Hex, Havannah, and Arimaa engines use MCTS because handcrafted evaluation is hard for these games.'
          ]
        },
        // K — Practice questions
        {
          heading: 'Top Interview Questions on MCTS',
          text: 'These questions test the four phases, the UCB1 formula, the trade-offs vs minimax, and the convergence behavior.'
        },
        {
          heading: 'Practice Question 1: Four Phases (Classic)',
          text: '<strong>Problem:</strong> Name the four phases of MCTS.<br/><strong>Key idea:</strong> Selection, Expansion, Simulation (rollout), Backpropagation. State what each does in one sentence.',
          example: {
            title: 'Answer',
            code: `1. Selection: traverse the tree from root by UCB1
   until a not-fully-expanded node.
2. Expansion: add one or more children to that node.
3. Simulation: play a random/heuristic game from the
   new node to a terminal state -> outcome.
4. Backpropagation: update visit count N and reward Q
   for every node on the path back to the root.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: UCB1 Balances (Classic)',
          text: '<strong>Problem:</strong> What does the UCB1 formula balance and how?<br/><strong>Key idea:</strong> Exploitation (average reward Q/N) vs exploration (bonus for rarely visited children, shrinking as visits grow).',
          example: {
            title: 'Answer',
            code: `UCB1 = Q/N + C * sqrt(2*ln(N_parent) / N)

  Q/N                 = EXPLOITATION
                        favor children with high average reward
  C*sqrt(ln(Np)/N)    = EXPLORATION
                        large when N is small (rarely visited)
                        shrinks as the child is visited more

The two terms together ensure every promising branch
is explored while favoring moves with high estimated
value. C tunes the balance.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Anytime Property (Classic)',
          text: '<strong>Problem:</strong> Why is MCTS considered an anytime algorithm?<br/><strong>Key idea:</strong> It can be stopped at any iteration and still return the current best move based on accumulated statistics. The most-visited root child is the move; more iterations just refine the statistics.',
          example: {
            title: 'Answer',
            code: `Anytime: returns a valid move after ANY number of
iterations. The move is the MOST-VISITED root child
(not the highest-reward one -- visit count is the
reliable signal because MCTS visits promising moves
more often).

Implication: easy to give MCTS a time budget.
Stockfish-style engines use iterative deepening;
MCTS just stops when time runs out.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: MCTS vs Alpha-Beta (Classic)',
          text: '<strong>Problem:</strong> In what type of games does MCTS outperform classical minimax with alpha-beta pruning?<br/><strong>Key idea:</strong> Games with very high branching factors and no reliable handcrafted evaluation function, like Go (b≈250, where positional judgement is subtle).',
          example: {
            title: 'Answer',
            code: `MCTS wins when:
  - branching factor is huge (Go b~250 vs chess b~35)
  - no good handcrafted evaluation function exists
  - the game is too deep for full-tree search
  - anytime behavior is needed (time budget)

Alpha-beta wins when:
  - branching factor is moderate
  - a strong evaluation function is available
  - deterministic, perfect-information
  - you can reach terminal or quiet positions

Hybrid: AlphaZero uses MCTS + neural nets to get
the best of both for Go, chess, and shogi.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Convergence Rate (Conceptual)',
          text: '<strong>Problem:</strong> How does MCTS move quality scale with the number of rollouts N?<br/><strong>Key idea:</strong> The error in the value estimate shrinks as O(1/√N) (Hoeffding bound) — to halve the error, you need 4x the rollouts.',
          example: {
            title: 'Answer',
            code: `Each rollout adds one sample to the value
estimate. By the Hoeffding inequality, the error
of the empirical mean shrinks as O(1/sqrt(N)).

Practical rule: to halve the mistake rate, run
4x more rollouts. This is why AlphaGo used
massive parallelism -- quality needs LOTS of
rollouts, but they parallelize almost perfectly.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Implement UCB1 Selection (Coding)',
          text: '<strong>Problem:</strong> Implement the UCB1 selection step for a node with a dictionary of children.<br/><strong>Key idea:</strong> Pick the child maximizing Q/N + C·sqrt(2·ln(N_parent)/N_child); unvisited children get +∞.',
          example: {
            title: 'Python Solution',
            code: `import math
def select_child(node, c=1.4):
    log_n = math.log(node.N) if node.N > 0 else 0
    def ucb(child):
        if child.N == 0:
            return float('inf')         # always explore unvisited first
        return child.Q / child.N + c * math.sqrt(2 * log_n / child.N)
    return max(node.children.values(), key=ucb)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'MCTS builds a search tree using four phases: selection, expansion, simulation, and backpropagation.',
            'UCB1 balances exploration of new moves against exploitation of moves with high average reward.',
            'MCTS does not require a handcrafted evaluation function — it learns values from random playouts.',
            'MCTS is anytime — it returns the most-visited root child at any point; more iterations = stronger play.',
            'MCTS excels in games with high branching factors (Go) where minimax + evaluation is infeasible.',
            'Rollout policy quality (pure random vs heuristic vs learned) is the biggest practical lever after iteration count.'
          ]
        }
      ]
    },
    'alpha-go-ai': {
      title: 'AlphaGo and AlphaZero',
      subtitle: 'Mastering complex games through deep learning and search',
      sections: [
        // A — What are AlphaGo and AlphaZero
        {
          heading: 'What are AlphaGo and AlphaZero?',
          text: '<strong>AlphaGo</strong> (DeepMind, 2016) was the first AI to defeat a world champion Go player, Lee Sedol, 4-1 — a milestone experts had predicted was a decade away. It combined deep convolutional neural networks (a policy network and a value network) with Monte Carlo Tree Search. <strong>AlphaZero</strong> (2017) surpassed AlphaGo by learning entirely through self-play <em>without any human game data</em>, and generalized the same algorithm to also master chess and shogi from scratch. <strong>MuZero</strong> (2019) went further: it learned to plan in environments where the rules themselves are unknown, by learning a latent dynamics model.',
          list: [
            '<strong>Policy network:</strong> A deep CNN that predicts the probability distribution over expert moves from a board position; guides MCTS to focus on promising branches.',
            '<strong>Value network:</strong> A deep CNN that estimates the probability of winning from a board position; replaces random rollouts with a learned position assessment.',
            '<strong>MCTS integration:</strong> The tree search uses policy priors for exploration and the value network for leaf evaluation, instead of pure random rollouts.',
            '<strong>Self-play learning:</strong> AlphaZero plays millions of games against itself, with the MCTS-improved policy as the target, continuously improving both networks.',
            '<strong>Tabula rasa:</strong> AlphaZero and MuZero start from random play with no human knowledge and reach superhuman level purely from self-play reinforcement learning.'
          ]
        },
        // B — Why Go was hard
        {
          heading: 'Why Go Was Hard for AI',
          text: 'Chess was conquered in 1997 (Deep Blue), but Go resisted for nearly 20 more years. The reason is the combination of an enormous branching factor and the difficulty of writing a good evaluation function.',
          list: [
            '<strong>Branching factor ≈ 250:</strong> vs chess ≈ 35. Alpha-beta effectively doubles searchable depth, but √250 ≈ 16 is still too large for deep search.',
            '<strong>Search depth ≈ 200+ moves:</strong> a typical Go game lasts 200-300 plies, so b^m is astronomical (≈ 10^170 positions).',
            '<strong>No good evaluation function:</strong> material count (the cornerstone of chess eval) is meaningless in Go; positional judgement is subtle and intuitive, hard to encode by hand.',
            '<strong>Long-range influence:</strong> a single stone can affect the board many moves later, so shallow heuristics miss the big picture.',
            '<strong>MCTS broke the barrier:</strong> by replacing handcrafted evaluation with statistical rollouts, MCTS made Go tractable; neural networks then made the rollouts and evaluation accurate.'
          ]
        },
        // C — AlphaGo architecture diagram
        {
          heading: 'Visual Diagram — AlphaGo Architecture',
          text: 'AlphaGo combines four learned components: a rollout policy (fast), a policy network (slow, accurate), a value network, and MCTS that integrates them. At inference time, MCTS uses the policy network as a prior over moves and the value network to evaluate leaves.',
          diagram: {
            caption: 'AlphaGo: MCTS guided by policy and value neural networks',
            chart: `flowchart LR
    B[Board position] --> SL[Supervised policy net<br/>trained on expert moves]
    B --> RL[RL policy net<br/>self-play refined]
    B --> V[Value net<br/>win probability]
    SL --> RL
    RL --> MCTS[MCTS]
    V --> MCTS
    R[Rollout policy<br/>fast] --> MCTS
    MCTS --> MV[Move]
    style SL fill:#3498db,color:#fff
    style RL fill:#9b59b6,color:#fff
    style V fill:#2ecc71,color:#fff
    style MCTS fill:#f1c40f,color:#000
    style R fill:#e74c3c,color:#fff`
          }
        },
        // D — Training pipeline
        {
          heading: 'AlphaGo Training Pipeline',
          text: 'AlphaGo was trained in three stages: supervised learning on human expert moves, reinforcement-learning refinement through self-play, and a value network trained to predict game outcomes. AlphaZero collapsed this into a single self-play RL loop.',
          list: [
            '<strong>Stage 1 — Supervised policy network:</strong> Train a CNN on 30 million positions from the KGS Go server to predict expert moves. Reaches 57% accuracy (very strong).',
            '<strong>Stage 2 — Reinforcement-learning policy network:</strong> Initialize from the SL net; play millions of self-play games, updating the network to win more against earlier versions. Improves beyond human data.',
            '<strong>Stage 3 — Value network:</strong> Train a separate CNN to predict the winner of a position, using positions sampled from self-play games. Replaces the random rollouts at MCTS leaves.',
            '<strong>Rollout policy:</strong> A fast, simple predictor used in MCTS rollouts; less accurate than the policy net but ~1000x faster, so many more rollouts fit in the time budget.'
          ]
        },
        // E — AlphaZero simplification
        {
          heading: 'AlphaZero — A Single Self-Play Loop',
          text: 'AlphaZero unified the pipeline: one network with policy and value heads, trained entirely by self-play reinforcement learning with MCTS as the policy-improvement operator. No human data, no separate training stages.',
          list: [
            '<strong>One network, two heads:</strong> A shared residual CNN body with a policy head (move probabilities) and a value head (win probability).',
            '<strong>Self-play:</strong> The agent plays against itself; MCTS guided by the current network chooses moves; the resulting games are training data.',
            '<strong>Loss = (z − v)² − πᵀ log p + c‖θ‖²:</strong> Squared value error plus policy cross-entropy plus weight regularization — trained jointly.',
            '<strong>Move selection after search:</strong> π(a|s) ∝ N(s,a)^(1/τ) — the visit counts become the improved target policy.',
            '<strong>Generalization:</strong> The same algorithm mastered Go, chess, and shogi, demonstrating that a general self-play + search + deep-learning recipe works across games.'
          ]
        },
        {
          heading: 'AlphaZero MCTS — Neural Priors',
          text: 'AlphaZero MCTS replaces UCB1 with a formula that incorporates the policy network prior P(a|s), favoring moves the policy net considers likely AND moves the value head thinks are good.',
          example: {
            title: 'AlphaZero Node Selection (PUCT)',
            code: `U(s, a) = Q(s, a) + c_puct * P(a|s) * sqrt(N(s)) / (1 + N(s, a))

Where:
  P(a|s)   = policy network probability of move a
  Q(s, a)  = average action value from previous visits
  N(s, a)  = visit count of action a
  N(s)     = sum of visit counts for all actions from s
  c_puct   = exploration constant scaling prior influence

Move selection after search:
  pi(a|s) proportional to N(s, a)^(1/tau)
  (tau temperature: 1 = proportional to visits,
                   0 = greedy most-visited)

Training loss:
  L = (z - v)^2 - pi^T log p + c * ||theta||^2
  (value MSE + policy cross-entropy + L2 reg)`,
            language: 'text',
            type: 'code'
          }
        },
        // F — Evolution table
        {
          heading: 'The AlphaGo Family Evolution',
          text: 'The AlphaGo family evolved through five major versions, each removing more human knowledge and generalizing further.',
          table: {
            headers: ['System', 'Training Data', 'Search', 'Key Innovation'],
            rows: [
              ['AlphaGo Fan', 'Human games + self-play', 'MCTS + policy + value nets', 'First to beat European champion (2015)'],
              ['AlphaGo Lee', 'Human + self-play', 'MCTS + deeper nets', 'Beat Lee Sedol 4-1 (2016)'],
              ['AlphaGo Zero', 'Self-play only', 'MCTS + single residual net', 'No human data; 100-0 vs AlphaGo Lee (2017)'],
              ['AlphaZero', 'Self-play only', 'MCTS + general net', 'Same algorithm for Go, chess, shogi (2017)'],
              ['MuZero', 'Self-play only', 'MCTS + learned dynamics model', 'No game rules given; learns dynamics (2019)']
            ]
          }
        },
        // G — MuZero
        {
          heading: 'MuZero — Learning Without Rules',
          text: 'MuZero learns a latent dynamics model that predicts the next latent state and reward from the current latent state and an action — it never sees the actual game state during planning. This lets it plan in environments where the forward model (the rules) is unknown, such as Atari games where you cannot "look ahead" without actually playing.',
          list: [
            '<strong>Representation function:</strong> Encodes the raw observation into a latent state.',
            '<strong>Dynamics function:</strong> Predicts the next latent state and reward from a latent state and an action.',
            '<strong>Prediction function:</strong> Outputs policy and value from a latent state.',
            '<strong>Search in latent space:</strong> MCTS plans over the learned latent dynamics, not the real game — much cheaper than rolling out the real environment.'
          ]
        },
        // H — Complexity / compute
        {
          heading: 'Compute & Complexity',
          text: 'AlphaGo/AlphaZero are compute-intensive: training used thousands of TPUs and weeks of compute. Inference is also heavy — each MCTS leaf requires a network forward pass.',
          table: {
            headers: ['Aspect', 'AlphaGo Lee', 'AlphaZero', 'Notes'],
            rows: [
              ['Training compute', 'Thousands of TPUs, weeks', 'Similar', 'Self-play generates the training data on the fly.'],
              ['Inference per move', '~0.1-1 second', '~0.1-1 second', 'Each MCTS iteration runs policy + value nets on one leaf.'],
              ['MCTS simulations/move', '~10,000-100,000', '~800-80,000', 'More simulations = stronger play; limited by time.'],
              ['Network size', '13-layer CNN (policy), 13-layer CNN (value)', '19-39 layer residual CNN', 'Deeper nets improved positional evaluation.'],
              ['Self-play games', '~30M positions (SL), then self-play', '~4.9M self-play games (chess)', 'Data is generated, not collected from humans.']
            ]
          },
          note: 'Interview tip: AlphaGo/AlphaZero are not "just deep learning" — the MCTS at inference is critical. Without search, the policy network alone is only amateur level; with search it is superhuman. Search and learning are complementary.'
        },
        // I — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Thinking AlphaGo is pure deep learning without search — the policy and value networks GUIDE MCTS, but the tree search at inference time is critical for strong play; without it the nets alone are weak.',
            'Believing AlphaZero needs human knowledge to learn — AlphaZero learns tabula rasa through self-play reinforcement learning, surpassing centuries of human strategy.',
            'Assuming AlphaZero works for any game without tuning — while general, hyperparameters (exploration constant, network size, MCTS simulations) must be adapted per domain.',
            'Confusing the training and inference pipelines — training involves millions of self-play games; inference uses the fixed trained networks with MCTS on the current position.',
            'Forgetting the value network replaced rollouts — AlphaGo uses the value net for leaf evaluation; pure MCTS uses random rollouts; AlphaGo effectively combines learned evaluation with statistical search.',
            'Equating AlphaZero and MuZero — AlphaZero needs the game rules to plan (a forward model); MuZero learns a latent dynamics model and plans without rules.'
          ]
        },
        // J — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'The AlphaGo architecture has inspired breakthroughs far beyond board games.',
          list: [
            '<strong>Protein folding (AlphaFold):</strong> Predicts 3D protein structures with near-experimental accuracy, advancing drug discovery and biology — a Biology Nobel Prize in 2024.',
            '<strong>Material science:</strong> AI discovers new stable crystal structures and materials with desired properties using similar search + learning architectures.',
            '<strong>Mathematics:</strong> AlphaGeometry and FunSearch assist mathematicians in discovering new theorems in geometry and combinatorics.',
            '<strong>Combinatorial optimization:</strong> AlphaZero-style planning solves routing, scheduling, and chip floorplanning (Google used it for TPU layout).',
            '<strong>Robotics and control:</strong> Model-based planning with learned dynamics models (MuZero-style) improves robot manipulation and autonomous navigation.',
            '<strong>Matrix multiplication:</strong> AlphaTensor (AlphaZero-based) discovered new fast matrix multiplication algorithms that beat known human ones.'
          ]
        },
        // K — Practice questions
        {
          heading: 'Top Interview Questions on AlphaGo/AlphaZero',
          text: 'These questions test the architecture, the role of search, the training paradigm, and the family evolution.'
        },
        {
          heading: 'Practice Question 1: Two Main Networks (Classic)',
          text: '<strong>Problem:</strong> What are the two main neural networks in AlphaGo and what do they do?<br/><strong>Key idea:</strong> The policy network predicts the probability distribution over moves (guiding MCTS exploration); the value network estimates the win probability of a position (replacing random rollouts at leaves).',
          example: {
            title: 'Answer',
            code: `Policy network  P(a | s):
  - input: board position s
  - output: probability distribution over legal moves
  - role: prior for MCTS exploration -- focus on
    promising branches
  - trained: supervised on expert moves, then RL

Value network  V(s):
  - input: board position s
  - output: win probability in [-1, +1]
  - role: evaluate MCTS leaves instead of random rollouts
  - trained: regression on game outcomes from self-play`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: AlphaGo Zero Training Data (Classic)',
          text: '<strong>Problem:</strong> How did AlphaGo Zero differ from the original AlphaGo in terms of training data?<br/><strong>Key idea:</strong> AlphaGo Zero used NO human game data — it learned entirely from self-play reinforcement learning, starting from random play.',
          example: {
            title: 'Answer',
            code: `AlphaGo (2016):
  Stage 1: SL on 30M human expert positions
  Stage 2: RL refinement via self-play
  Stage 3: value net from self-play outcomes

AlphaGo Zero (2017):
  - NO human data at all
  - one residual network with policy+value heads
  - trained by self-play RL with MCTS as the
    policy-improvement operator
  - result: 100-0 vs AlphaGo Lee -- superhuman from
    scratch in 3 days`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Why MCTS at Inference (Classic)',
          text: '<strong>Problem:</strong> Why is MCTS still used at inference time even after the networks are trained?<br/><strong>Key idea:</strong> MCTS aggregates network predictions through local search, correcting errors and finding tactical sequences the static networks might miss. The policy net alone is only amateur level; with MCTS it is superhuman.',
          example: {
            title: 'Answer',
            code: `The networks are trained to PREDICT; MCTS
SEARCHES. Search:
  - averages many network evaluations along a tree
  - corrects single-position errors by lookahead
  - finds tactical sequences (ladders, captures) the
    static nets can miss
  - converts the policy prior into a sharper, search-
    improved move distribution

Empirically: policy net alone ~ amateur level.
With MCTS (800-80000 simulations): superhuman.
Search + learning >> learning alone.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: MuZero Key Capability (Classic)',
          text: '<strong>Problem:</strong> What is MuZero key capability that AlphaZero lacks?<br/><strong>Key idea:</strong> MuZero can plan in environments where the rules or transition dynamics are unknown, by learning a latent dynamics model from experience.',
          example: {
            title: 'Answer',
            code: `AlphaZero needs the game's forward model (rules)
to simulate ahead during MCTS. You must be able to
ask "what state results from action a?".

MuZero LEARNS a latent dynamics model:
  - representation: observation -> latent state
  - dynamics: latent + action -> next latent + reward
  - prediction: latent -> policy, value

MCTS plans in LATENT space, so MuZero can play
Atari games (no available forward model) and
board games (rules known) with the same algorithm.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: AlphaZero Loss (Coding/Conceptual)',
          text: '<strong>Problem:</strong> Write the AlphaZero training loss and explain each term.<br/><strong>Key idea:</strong> L = (z − v)² − πᵀ log p + c‖θ‖² — value MSE plus policy cross-entropy plus L2 regularization, trained jointly on self-play games where z is the game outcome and π is the MCTS visit-count distribution.',
          example: {
            title: 'Answer',
            code: `L = (z - v)^2  -  pi^T log p  +  c * ||theta||^2
      ^^^^^^^^    ^^^^^^^^^^^      ^^^^^^^^^^^^^^
      value MSE   policy CE          L2 regularization

  z   = actual game outcome (+1 win, -1 loss, 0 draw)
  v   = value net prediction
  pi  = MCTS improved policy (visit-count distribution)
  p   = policy net prediction
  c   = regularization weight

Both heads trained jointly; the same forward pass
produces both p and v, sharing the network body.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Branching Factor Argument (Conceptual)',
          text: '<strong>Problem:</strong> Explain why alpha-beta (which worked for chess) failed for Go, and why MCTS + neural nets succeeded.<br/><strong>Key idea:</strong> Go branching factor ≈250 makes alpha-beta effective depth ≈ √250 ≈ 16 — too shallow. Worse, no handcrafted evaluation function exists for Go. MCTS replaced evaluation with statistical rollouts; neural nets made those rollouts and evaluations accurate enough to plan deep.',
          example: {
            title: 'Answer',
            code: `Chess: b~35, depth ~100 -> alpha-beta reaches ~10-12
       plies; strong material eval exists -> superhuman.

Go:   b~250, depth ~200 -> alpha-beta reaches ~sqrt(250)~16
       plies effective -- too shallow given 200+ move games.
       No good handcrafted eval -> alpha-beta is stuck.

MCTS: replaces eval with rollouts -> no eval needed.
Neural nets: make rollouts and leaf eval accurate
   -> MCTS can plan deeply with good leaf values.
AlphaGo = MCTS (search) + nets (learned eval).`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'AlphaGo combined a policy network, a value network, and MCTS to master Go — a game with 10^170 positions.',
            'Policy networks suggest promising moves; value networks evaluate positions without full rollouts.',
            'AlphaZero eliminated human game data entirely, learning superhuman strategy from self-play alone, and generalized to chess and shogi.',
            'MuZero extended the approach to environments where the rules are unknown, by learning a latent dynamics model from experience.',
            'MCTS at inference is essential — the networks predict, MCTS searches; together they are far stronger than either alone.',
            'The AlphaGo architecture has been adapted to scientific discovery (AlphaFold), optimization (chip floorplanning), and mathematics (AlphaTensor).'
          ]
        }
      ]
    },
    'multi-agent-systems': {
      title: 'Multi-Agent Systems',
      subtitle: 'Coordinating multiple intelligent agents',
      sections: [
        // A — What are MAS
        {
          heading: 'What are Multi-Agent Systems?',
          text: 'A <strong>Multi-Agent System (MAS)</strong> consists of multiple autonomous agents interacting in a shared environment. Each agent pursues its own goals while being affected by the actions of others. MAS research studies coordination, communication, competition, and emergent collective behavior. It generalizes single-agent AI to settings where the "environment" includes other intelligent actors — which changes the problem fundamentally, because the environment now adapts to your actions.',
          list: [
            '<strong>Autonomy:</strong> Each agent makes independent decisions based on its own perceptions and goals.',
            '<strong>Local interactions:</strong> Agents typically observe and react to only nearby or relevant peers — no global controller.',
            '<strong>Coordination mechanisms:</strong> Communication protocols, negotiation, auction-based task allocation, and consensus algorithms.',
            '<strong>Emergence:</strong> Complex global behavior arising from simple local rules — swarm intelligence, flocking, market dynamics.',
            '<strong>Distributed:</strong> No single point of failure; computation and decision-making are spread across agents.'
          ]
        },
        // B — MAS vs single-agent
        {
          heading: 'Why Multi-Agent Is Different from Single-Agent',
          text: 'In single-agent AI, the environment is fixed (or stochastic but not strategic). In MAS, the environment contains other agents who observe your actions and adapt — so the optimal policy depends on what others do, which depends on what you do. This circularity is exactly what game theory models.',
          table: {
            headers: ['Aspect', 'Single-Agent', 'Centralized Multi-Agent', 'Decentralized Multi-Agent'],
            rows: [
              ['Control', 'One decision maker', 'Central controller knows all', 'Each agent decides locally'],
              ['Information', 'Full state known', 'Full state aggregated', 'Partial, local observations'],
              ['Computation', 'One brain', 'Central bottleneck', 'Parallel, distributed'],
              ['Robustness', 'Single point of failure', 'Central point of failure', 'Fault-tolerant'],
              ['Scalability', 'Limited', 'Limited by central node', 'Highly scalable'],
              ['Coordination', 'None needed', 'Command and control', 'Emergent or negotiated']
            ]
          }
        },
        // C — Taxonomy diagram
        {
          heading: 'Visual Diagram — MAS Taxonomy',
          text: 'Multi-agent systems range from fully cooperative (all agents share a reward) to fully competitive (zero-sum games), with mixed motives in between. The right architecture depends on where on this spectrum the system sits.',
          diagram: {
            caption: 'MAS spectrum: cooperative → mixed-motive → competitive',
            chart: `flowchart LR
    COOP[Cooperative<br/>shared reward] --> MIX[Mixed-motive<br/>selfish but interdependent] --> COMP[Competitive<br/>zero-sum]
    COOP -.robots, swarms.-> E1[team reward]
    MIX -.markets, auctions.-> E2[individual payoffs]
    COMP -.games, security.-> E3[adversary]
    style COOP fill:#2ecc71,color:#fff
    style MIX fill:#f1c40f,color:#000
    style COMP fill:#e74c3c,color:#fff`
          }
        },
        // D — Cooperative MAS
        {
          heading: 'Cooperative Multi-Agent Systems',
          text: 'In cooperative MAS, all agents share a single team reward. The challenge is coordination: who does what, when? The two canonical approaches are centralized training with decentralized execution (CTDE) and explicit communication.',
          list: [
            '<strong>Task allocation:</strong> Assign subtasks to agents so total cost or time is minimized. Auction-based allocation is the dominant practical method.',
            '<strong>Consensus:</strong> Agents exchange local estimates and converge to a shared global value (e.g. average temperature, formation position).',
            '<strong>Formation control:</strong> Agents maintain relative positions — flocking, platooning, drone swarms.',
            '<strong>CTDE (Centralized Training, Decentralized Execution):</strong> Train with full state information (centralized critic), execute with only local observations. The dominant paradigm in multi-agent reinforcement learning (MARL).',
            '<strong>Communication learning:</strong> Agents learn what to send, when, and to whom — bandwidth is finite, so messages must be informative.'
          ]
        },
        {
          heading: 'Auction-Based Task Allocation',
          text: 'A simple, robust coordination mechanism: the central planner announces a task; each agent bids its cost to do it; the lowest bidder wins and executes. This is decentralized (bids are local) and incentive-compatible if the auction is truthful (second-price style).',
          example: {
            title: 'Auction-Based Allocation',
            code: `def auction_allocate(tasks, agents):
    allocation = {}
    for task in tasks:
        bids = {agent: agent.cost(task) for agent in agents}
        winner = min(bids, key=bids.get)        # lowest-cost bid wins
        allocation[task] = winner
        agents.remove(winner)                  # each agent does one task
    return allocation

# Each agent only needs to know its OWN cost for the task;
# the auctioneer just collects bids and assigns.
# Scales to thousands of agents (e.g. warehouse robots).`,
            language: 'python',
            type: 'code'
          }
        },
        // E — Multi-agent reinforcement learning
        {
          heading: 'Multi-Agent Reinforcement Learning (MARL)',
          text: 'MARL generalizes single-agent RL to many agents. The complication is non-stationarity: each agent is learning, so the environment (which includes other learners) keeps changing, breaking the Markov assumption that single-agent RL relies on. Two practical solutions are independent Q-learning (treat others as part of the environment — simple but non-stationary) and centralized critic methods (use a shared critic that sees all agents actions during training, then agents act on local policies at execution).',
          list: [
            '<strong>Independent Q-Learning (IQL):</strong> Each agent learns its own Q-function, treating other agents as part of the environment. Simple, scales well, but the environment is non-stationary.',
            '<strong>VDN / QMIX:</strong> Decompose the joint team value into per-agent values with a monotonicity constraint — credit assignment to individual agents.',
            '<strong>MADDPG / MAPPO:</strong> Centralized critic that sees all agents states and actions; decentralized actors that use local observations. CTDE paradigm.',
            '<strong>Credit assignment:</strong> Was a good team outcome due to me or my teammates? COMA, QMIX, and counterfactual baselines address this.',
            '<strong>Self-play:</strong> AlphaStar and OpenAI Five trained agents by self-play — agents learn by playing copies of themselves, generating an adaptive curriculum.'
          ]
        },
        {
          heading: 'Centralized Training, Decentralized Execution (CTDE)',
          text: 'CTDE is the dominant MARL paradigm. The critic (value function) is trained with full observability of all agents (states + actions), but each agent policy (actor) only uses its own local observation at execution time. This sidesteps non-stationarity during training and produces deployable decentralized policies.',
          diagram: {
            caption: 'CTDE: centralized critic sees all agents; decentralized actors use local observations',
            chart: `flowchart TB
    subgraph T[Training]
      A1[Actor 1] --> C[Critic<br/>sees all states + actions]
      A2[Actor 2] --> C
      A3[Actor 3] --> C
      C --> G[gradient to actors]
      G --> A1
      G --> A2
      G --> A3
    end
    subgraph E[Execution]
      A1e[Actor 1<br/>local obs] --> ENV
      A2e[Actor 2<br/>local obs] --> ENV
      A3e[Actor 3<br/>local obs] --> ENV
    end
    style C fill:#3498db,color:#fff
    style ENV fill:#2ecc71,color:#fff`
          }
        },
        // F — Competitive and mixed MAS
        {
          heading: 'Competitive and Mixed-Motive MAS',
          text: 'When agents have conflicting goals, MAS overlaps with game theory. Competitive MAS uses adversarial search (minimax, MCTS) or game-theoretic equilibria (Nash, correlated equilibrium). Mixed-motive settings (some shared, some conflicting interests) are the hardest — they require negotiation, mechanism design, and sometimes explicit communication of intentions.',
          list: [
            '<strong>Zero-sum (pure competition):</strong> Use minimax / alpha-beta / MCTS as in adversarial search.',
            '<strong>General-sum:</strong> Nash equilibrium concepts; correlated equilibria if a mediator is allowed.',
            '<strong>Negotiation:</strong> Agents exchange offers; reach Pareto-improving deals (e.g. resource trading).',
            '<strong>Mechanism design:</strong> Design rules so selfish agents achieve a desired global outcome (VCG auctions, matching markets).',
            '<strong>Opponent modeling:</strong> Predict what the other agents will do — essential when they are not perfectly rational.'
          ]
        },
        // G — Emergence and swarms
        {
          heading: 'Emergence and Swarm Intelligence',
          text: 'A striking property of MAS is <em>emergence</em>: simple local rules produce complex global behavior. Bird flocks, fish schools, and ant colonies have no central controller, yet exhibit coordinated motion and foraging. The Boids model (Reynolds, 1987) reproduces flocking with just three local rules.',
          list: [
            '<strong>Separation:</strong> Avoid crowding neighbors (steer away from nearby agents).',
            '<strong>Alignment:</strong> Steer toward the average heading of neighbors.',
            '<strong>Cohesion:</strong> Steer toward the average position of neighbors (stay together).',
            '<strong>Result:</strong> Realistic flocking emerges from these three local rules — no global plan, no leader. The same pattern underlies drone swarm control and crowd simulation in films.'
          ]
        },
        {
          heading: 'Boids Flocking Implementation',
          example: {
            title: 'Boids in Python (sketch)',
            code: `import numpy as np
def boids(positions, velocities, radius=5.0):
    # positions, velocities: (N, 2) arrays
    for i in range(len(positions)):
        diff = positions - positions[i]                # (N, 2)
        dist = np.linalg.norm(diff, axis=1)
        neighbors = (dist > 0) & (dist < radius)
        if not np.any(neighbors): continue
        # Separation: steer away from very close neighbors
        sep = -diff[dist < radius/2].mean(axis=0)
        # Alignment: match neighbors' average velocity
        ali = velocities[neighbors].mean(axis=0) - velocities[i]
        # Cohesion: move toward neighbors' average position
        coh = positions[neighbors].mean(axis=0) - positions[i]
        velocities[i] += 0.05 * (sep + ali + coh)        # weighted blend
    positions += velocities
    return positions, velocities`,
            language: 'python',
            type: 'code'
          }
        },
        // H — Communication
        {
          heading: 'Communication in MAS',
          text: 'Communication lets agents share partial observations, intentions, and commitments. It is essential for cooperation but expensive (bandwidth, latency, energy). Key questions: what to send, when, to whom, and how to handle unreliable channels.',
          list: [
            '<strong>Broadcast vs targeted:</strong> Broadcasting is simple but wastes bandwidth; targeted messaging scales better.',
            '<strong>Content:</strong> Raw observations, processed beliefs, or intentions/commitments. Higher-level messages save bandwidth.',
            '<strong>Reliability:</strong> Real channels drop, reorder, or delay messages; consensus protocols must tolerate this (Byzantine fault tolerance).',
            '<strong>Learned communication:</strong> End-to-end trained agents learn a communication protocol from scratch (e.g. CommNet, TarMAC).',
            '<strong>Blackboard / shared memory:</strong> A shared data structure all agents can read/write — simple coordination without pairwise messaging.'
          ]
        },
        // I — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Treating a multi-agent problem as a single-agent one — explicitly model other agents as strategic entities whose actions affect rewards and state transitions.',
            'Assuming perfect communication and coordination — design robust protocols that handle message loss, latency, and Byzantine failures.',
            'Ignoring emergent behaviors — use simulation and formal verification to detect harmful emergent dynamics like deadlock or resource starvation.',
            'Designing agents with purely selfish utility functions — add social welfare terms or mechanism design incentives to align local and global objectives.',
            'Using independent Q-learning in highly coupled tasks — the non-stationarity can prevent convergence; prefer CTDE methods (MADDPG, MAPPO, QMIX).',
            'Forgetting credit assignment in cooperative teams — a high team reward does not tell you which agent contributed; use COMA, QMIX, or counterfactual baselines.'
          ]
        },
        // J — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'Multi-agent systems are essential for distributed, large-scale intelligent infrastructure.',
          list: [
            '<strong>Autonomous vehicle coordination:</strong> Self-driving cars negotiate intersections and merge lanes as cooperative agents; V2V communication lets them share intentions.',
            '<strong>Swarm robotics:</strong> Drone swarms perform search-and-rescue, agriculture monitoring, and construction through local coordination rules (Boids-style).',
            '<strong>Smart grid energy management:</strong> Distributed agents balance supply and demand, trading energy locally to reduce grid load.',
            '<strong>Sensor networks:</strong> Environmental monitoring agents coordinate coverage and data routing without a central controller.',
            '<strong>E-commerce and logistics:</strong> Warehouse robots (Kiva/Amazon) and delivery fleets use auction-based task allocation and collision avoidance.',
            '<strong>Game AI and NPCs:</strong> Multi-agent behaviors make video game worlds feel alive — factions, economies, and combat AI all use MAS techniques.'
          ]
        },
        // K — Practice questions
        {
          heading: 'Top Interview Questions on Multi-Agent Systems',
          text: 'These questions test the single-vs-multi distinction, CTDE, emergence, and the game-theory overlap.'
        },
        {
          heading: 'Practice Question 1: Defining Feature vs Single-Agent (Classic)',
          text: '<strong>Problem:</strong> What is the defining feature of a multi-agent system compared to a single-agent system?<br/><strong>Key idea:</strong> Multiple autonomous agents interact in a shared environment, and each agent outcome depends on the actions of others. The environment is strategic, not fixed.',
          example: {
            title: 'Answer',
            code: `Single-agent: environment is fixed (or stochastic
  but not strategic) -> optimal policy depends only
  on the agent's own state and action.

Multi-agent: the environment contains OTHER agents
  who observe and adapt to your actions. The optimal
  policy depends on what others do, which depends on
  what you do -- the circularity game theory models.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Emergent Behavior (Classic)',
          text: '<strong>Problem:</strong> What is emergent behavior in MAS?<br/><strong>Key idea:</strong> Complex global patterns or behaviors that arise from simple local interactions among agents, without central control. Flocking (Boids) is the canonical example.',
          example: {
            title: 'Answer',
            code: `Emergence: global behavior that is NOT explicitly
programmed, but arises from local rules.

Boids (Reynolds, 1987): three local rules produce
realistic flocking with no leader:
  1. Separation -- avoid crowding
  2. Alignment  -- match neighbor heading
  3. Cohesion   -- stay near neighbors

Other examples: ant colony foraging, market prices,
traffic jams, crowd dynamics. Emergence is a hallmark
of MAS -- simple rules, complex global behavior.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: Decentralized Robustness (Classic)',
          text: '<strong>Problem:</strong> Why is a decentralized MAS more robust than a centralized one?<br/><strong>Key idea:</strong> There is no single point of failure; individual agent failures do not collapse the entire system, and the system degrades gracefully.',
          example: {
            title: 'Answer',
            code: `Centralized: one controller -> if it fails, the
whole system fails. Single point of failure.
Limited scalability (the controller is a bottleneck).

Decentralized: each agent decides locally.
  - no single point of failure
  - graceful degradation (lose N-1 agents, the rest
    keep working)
  - scales naturally (more agents = more parallelism)
  - harder to design (must handle coordination)`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Mechanism Design Challenge (Classic)',
          text: '<strong>Problem:</strong> What is the core challenge of mechanism design in MAS?<br/><strong>Key idea:</strong> Designing rules and incentives so that rational, self-interested agents naturally behave in ways that maximize collective social welfare. The Vickrey auction is the canonical success — truthful bidding is dominant.',
          example: {
            title: 'Answer',
            code: `Mechanism design = reverse game theory.

Given a desired social outcome, design rules
(auction, matching, voting) such that each agent's
selfish best response produces the social optimum.

Challenge: agents are strategic -- they will lie,
collude, or withhold info if it helps them. The
mechanism must make TRUTHFUL behavior optimal.

Vickrey (2nd-price) auction: bidding your true value
is a dominant strategy -> efficient allocation.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: CTDE (Conceptual)',
          text: '<strong>Problem:</strong> What problem does Centralized Training, Decentralized Execution (CTDE) solve in MARL?<br/><strong>Key idea:</strong> Non-stationarity. Each agent learning makes the environment (which includes other learners) non-stationary, breaking single-agent RL. CTDE uses a centralized critic (sees all agents) during training to stabilize learning, while each agent policy uses only local observations at execution.',
          example: {
            title: 'Answer',
            code: `MARL problem: each agent learns -> the environment
(a sum of other agents) is non-stationary -> single-
agent RL convergence guarantees break.

CTDE:
  Training  -> centralized CRITIC sees all agents'
                states and actions -> stable targets
                despite other agents changing.
  Execution -> decentralized ACTORS use only local
                observations -> deployable in the real
                world where you can't see everything.

Methods: MADDPG, MAPPO, QMIX, COMA.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Auction Allocation (Coding)',
          text: '<strong>Problem:</strong> Implement a greedy auction-based task allocation: N tasks, M agents; each agent bids its cost; lowest bid wins the task.<br/><strong>Key idea:</strong> Repeatedly assign the cheapest unassigned task to the cheapest available agent. Demonstrates decentralized bidding + centralized assignment.',
          example: {
            title: 'Python Solution',
            code: `import numpy as np
def auction(tasks, agents, cost_matrix):
    # cost_matrix[i][j] = agent i's cost for task j
    alloc = [-1] * len(tasks)        # task -> agent
    free_agents = list(range(len(agents)))
    for t in range(len(tasks)):
        if not free_agents: break
        # lowest-cost bid among free agents for task t
        best_a = min(free_agents, key=lambda a: cost_matrix[a][t])
        alloc[t] = best_a
        free_agents.remove(best_a)
    return alloc

# cost_matrix: agents x tasks
alloc = auction(range(5), range(3), np.random.randint(1, 10, (3, 5)))
print(alloc)   # e.g. [2, 1, 0, -1, -1] (last 2 tasks unassigned)`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multi-agent systems involve multiple autonomous agents interacting in a shared environment; each agent utility depends on the joint action profile.',
            'Coordination can be centralized, decentralized, emergent, or negotiated via communication protocols.',
            'Emergent behavior is a hallmark of MAS — simple local rules (Boids) produce complex global patterns like flocking.',
            'MARL uses CTDE (centralized critic, decentralized actors) to handle non-stationarity from other learning agents.',
            'Auction-based task allocation is the dominant practical coordination method for large-scale systems (warehouse robots, fleets).',
            'Designing MAS requires balancing autonomy, communication cost, robustness, and social welfare; mechanism design aligns selfish behavior with global goals.'
          ]
        }
      ]
    },
    'game-playing': {
      title: 'Game Playing AI',
      subtitle: 'Building superhuman agents for games',
      sections: [
        // A — What is Game Playing AI
        {
          heading: 'What is Game Playing AI?',
          text: '<strong>Game Playing AI</strong> refers to artificial intelligence systems designed to play games at expert or superhuman levels. Games have historically been the benchmark for AI progress because they have well-defined rules, clear win/loss signals, and controllable complexity. From checkers (1950s) to chess (1997) to Go (2016) to StarCraft (2019) and Dota 2 (2018), each milestone forced a new technique — alpha-beta search, evaluation functions, MCTS, deep reinforcement learning, and multi-agent self-play.',
          list: [
            '<strong>Perfect-information games:</strong> All players see the full game state (chess, Go, checkers) — dominated by search and evaluation.',
            '<strong>Imperfect-information games:</strong> Hidden state exists (poker, bridge, StarCraft) — requires belief modeling and game-theoretic equilibrium reasoning.',
            '<strong>Real-time games:</strong> Decisions must be made under time pressure (RTS, FPS, MOBA) — requires anytime algorithms and reactive control.',
            '<strong>General game playing (GGP):</strong> AI must learn to play arbitrary games from rules alone, without domain-specific tuning.',
            '<strong>Two-player zero-sum:</strong> The simplest setting — minimax/alpha-beta apply. Multi-player, general-sum, or imperfect info need different tools.'
          ]
        },
        // B — Why games matter
        {
          heading: 'Why Games Matter for AI',
          text: 'Games are AI\'s "fruit fly" — a controlled, measurable environment that drove most of the field\'s big ideas. Each landmark game milestone introduced a technique that then transferred to real-world problems.',
          list: [
            '<strong>Checkers (Samuel, 1950s):</strong> First self-learning program; introduced reinforcement learning, feature weights learned from self-play.',
            '<strong>Chess (Deep Blue, 1997):</strong> Beat Kasparov using handcrafted evaluation + alpha-beta + opening/endgame databases + massive hardware.',
            '<strong>Checkers solved (Chinook, 2007):</strong> Proved the game is a draw with perfect play using endgame databases + alpha-beta — the first non-trivial game solved.',
            '<strong>Jeopardy! (Watson, 2011):</strong> Natural language + reasoning under time pressure.',
            '<strong>Go (AlphaGo, 2016):</strong> MCTS + deep neural networks beat Lee Sedol — a result experts thought was a decade away.',
            '<strong>StarCraft / Dota 2 (AlphaStar, OpenAI Five, 2018-19):</strong> Real-time, partial observability, multi-agent — required deep RL + self-play at scale.',
            '<strong>Transfers:</strong> AlphaFold (protein folding), AlphaTensor (matrix multiplication), chip floorplanning — all descendants of game-AI architectures.'
          ]
        },
        // C — Pipeline diagram
        {
          heading: 'Visual Diagram — Game Playing AI Pipeline',
          text: 'A general game-playing pipeline combines perception, decision, action, and learning in a feedback loop. The decision stage is where the algorithms from this module (minimax, alpha-beta, MCTS) live.',
          diagram: {
            caption: 'Game Playing AI pipeline: perceive → decide → act → learn',
            chart: `flowchart LR
    P[Perceive<br/>extract features] --> D[Decide<br/>search + evaluate]
    D --> A[Act<br/>execute move]
    A --> ENV[Game environment]
    ENV --> P
    A --> L[Learn<br/>update policy/value]
    L --> D
    style D fill:#3498db,color:#fff
    style L fill:#2ecc71,color:#fff
    style ENV fill:#f1c40f,color:#000`
          }
        },
        // D — Algorithm selection by game type
        {
          heading: 'Choosing the Right Algorithm by Game Type',
          text: 'Different game genres demand fundamentally different AI architectures. Recognizing the game type determines the algorithm.',
          table: {
            headers: ['Game Type', 'Key Challenge', 'Primary Algorithm', 'Landmark AI'],
            rows: [
              ['Chess', 'Deep tactics, vast search space', 'Alpha-beta + evaluation function', 'Deep Blue, Stockfish'],
              ['Go', 'Enormous branching, subtle strategy', 'MCTS + deep neural nets', 'AlphaGo, AlphaZero'],
              ['Poker', 'Hidden info, bluffing, risk', 'Counterfactual regret minimization', 'Libratus, Pluribus'],
              ['Checkers', 'Solved by exhaustive search', 'Alpha-beta + endgame databases', 'Chinook'],
              ['Connect Four', 'Solved (first player wins)', 'Alpha-beta + bitboards', 'Allis, 1988'],
              ['StarCraft', 'Real-time, partial observability, long horizon', 'Hierarchical RL + self-play', 'AlphaStar'],
              ['Dota 2', 'Team coordination, continuous action space', 'Self-play RL + LSTM', 'OpenAI Five'],
              ['General GGP', 'No domain knowledge', 'MCTS + feature learning', 'CADIA Player']
            ]
          }
        },
        // E — Perfect information
        {
          heading: 'Perfect-Information Games',
          text: 'In perfect-information games, every player sees the full state. The challenge is purely combinatorial: the search space is enormous. The dominant techniques are alpha-beta (chess), MCTS (Go), and learned evaluation (AlphaZero).',
          list: [
            '<strong>Chess (b≈35, m≈100):</strong> Deep Blue (1997) used alpha-beta + handcrafted eval + opening books + endgame databases; Stockfish adds NNUE (neural net eval that runs on CPU) and reaches 3500+ Elo.',
            '<strong>Go (b≈250, m≈200):</strong> AlphaGo (2016) used MCTS + policy/value nets; AlphaZero (2017) learned from self-play with no human data.',
            '<strong>Checkers:</strong> Solved by Chinook (2007) using alpha-beta + endgame databases — perfect play draws.',
            '<strong>Connect Four:</strong> Solved (1988) — first player can force a win with perfect play.',
            '<strong>Othello / Hex / Arimaa:</strong> MCTS-based engines dominate; handcrafted evaluation is hard for these.'
          ]
        },
        // F — Imperfect information
        {
          heading: 'Imperfect-Information Games',
          text: 'In imperfect-information games, part of the state is hidden from each player (opponent\'s cards in poker, fog of war in StarCraft). Minimax does not apply because the state is not fully known. The right tools are belief-state reasoning, game-theoretic equilibrium computation, and counterfactual regret minimization (CFR).',
          list: [
            '<strong>Poker:</strong> Libratus (2017) beat top heads-up no-limit Texas hold\'em professionals using CFR + nested solving. Pluribus (2019) beat six-player no-limit hold\'em — a far harder, multi-agent setting.',
            '<strong>CFR (counterfactual regret minimization):</strong> Iteratively reduces regret for each decision; converges to a Nash equilibrium in two-player zero-sum imperfect-info games.',
            '<strong>Belief states:</strong> Each player reasons over a probability distribution (belief) over the hidden information, updating it from observed actions.',
            '<strong>Bluffing and mixed strategies:</strong> Optimal poker strategy must bluff with the right frequency to be unexploitable; this is a mixed Nash equilibrium.',
            '<strong>Bridge, Skat, Hanabi:</strong> Cooperative imperfect-info games where partners must reason about each other\'s hidden hands — surprisingly hard.'
          ]
        },
        {
          heading: 'Counterfactual Regret Minimization (CFR)',
          text: 'CFR is the algorithm that solved poker. It iterates over the game tree, computing for each decision the regret of not having taken each alternative; over many iterations, the average strategy converges to a Nash equilibrium in two-player zero-sum games.',
          example: {
            title: 'CFR Intuition (sketch)',
            code: `# CFR iteratively minimizes regret at each info set.
# An info set = the player's view of the game (their cards +
# the public actions); distinct game states that look
# identical to the player are grouped together.

for iteration in range(N):
    for each info set I (traversing the game tree):
        for each action a:
            regret[I][a] += counterfactual_value(I, a)
        strategy[I] = regret_match(regret[I])   # play proportional to regret
    accumulate average_strategy[I]

# Converges to Nash equilibrium in 2-player zero-sum
# imperfect-info games. Libratus used CFR+ + nested solving.`,
            language: 'text',
            type: 'code'
          }
        },
        // G — Real-time games
        {
          heading: 'Real-Time Games',
          text: 'Real-time games (RTS, FPS, MOBA) combine partial observability, long horizons, continuous action spaces, and time pressure. They require deep RL with self-play, hierarchical policies, and anytime algorithms.',
          list: [
            '<strong>StarCraft II (AlphaStar, 2019):</strong> Beat top professionals using a Transformer-based policy trained by league self-play (a population of diverse agents to prevent strategy collapse).',
            '<strong>Dota 2 (OpenAI Five, 2018):</strong> Beat human world champions at 5v5 using PPO + LSTM + self-play, with 128k CPUs and 256 GPUs.',
            '<strong>Self-play curricula:</strong> Agents improve by playing copies of themselves; a population prevents overfitting to one strategy (fictitious self-play, league training).',
            '<strong>Hierarchical policies:</strong> Macro (strategy) and micro (unit control) at different levels, because the action space is too large to learn flat.',
            '<strong>Anytime + reactive:</strong> Must commit to an action every frame; uses small per-frame reasoning plus a long-horizon planner running in the background.'
          ]
        },
        // H — General game playing
        {
          heading: 'General Game Playing (GGP)',
          text: 'In GGP, the AI is given the rules of an arbitrary game in a formal language (Game Description Language, GDL) and must play well with no domain-specific tuning. This tests true generality — the same engine must handle tic-tac-toe today and a novel puzzle tomorrow.',
          list: [
            '<strong>GDL:</strong> A logic-based language describing states, legal moves, terminal conditions, and goals.',
            '<strong>MCTS dominates GGP:</strong> Because no handcrafted evaluation is available, MCTS with random or lightly-learned rollouts is the standard approach.',
            '<strong>Feature learning:</strong> Modern GGP agents learn a value function from search experience to improve rollouts (CadiaPlayer, SANNA).',
            '<strong>Transfer:</strong> Can knowledge from one game speed up learning another? An open research question.'
          ]
        },
        // I — Evaluation functions deep dive
        {
          heading: 'Evaluation Functions — The Heart of Classical Engines',
          text: 'For depth-limited search, the evaluation function estimates the utility of a non-terminal position. A good eval is a weighted sum of features that correlate with winning.',
          list: [
            '<strong>Chess:</strong> Material (+1 pawn, +3 knight, +5 rook, +9 queen), piece-square tables (central pawns are better), king safety, pawn structure, mobility.',
            '<strong>Go (pre-AlphaGo):</strong> No good handcrafted eval existed — the reason MCTS was needed.',
            '<strong>NNUE (Stockfish):</strong> A neural network that runs on CPU and evaluates a position in ~10 ns; combines the accuracy of neural nets with the speed of handcrafted eval.',
            '<strong>Value networks (AlphaZero):</strong> A deep residual CNN that outputs win probability; replaces handcrafted eval entirely, trained by self-play.',
            '<strong>Quiescence search:</strong> At the cutoff, do not evaluate unstable positions (involving captures/checks); extend search until a quiet position is reached.'
          ]
        },
        {
          heading: 'Stockfish NNUE Evaluation',
          text: 'NNUE efficiently updates a neural network evaluation incrementally as moves are made — only the changed parts of the board are re-evaluated, making it fast enough to run on CPU at every node.',
          example: {
            title: 'NNUE Concept',
            code: `# NNUE = neural network that updates incrementally.

A normal neural net evaluation:
  v = forward(board)        # O(N) for the whole board

NNUE:
  - the first layer is a sparse, large-input layer
    with one input neuron per (piece, square) pair
  - when a piece moves, only the inputs that changed
    are recomputed; the rest of the layer-1 output is
    reused
  - subsequent dense layers are cheap

Result: a 4-layer net runs in ~10ns on CPU, giving
near-GPU neural-net quality at CPU speed. Stockfish
gained hundreds of Elo from NNUE.`,
            language: 'text',
            type: 'code'
          }
        },
        // J — Complexity & compute
        {
          heading: 'Complexity & Compute Across Game Types',
          text: 'The scale of game trees and the compute required vary enormously across game types — from solved small games to games that need data-center-scale training.',
          table: {
            headers: ['Game', 'State-space size', 'Solved?', 'Engine', 'Compute'],
            rows: [
              ['Tic-tac-toe', '~10^3', 'Solved (draw)', 'Minimax', 'Trivial'],
              ['Connect Four', '~10^14', 'Solved (P1 wins)', 'Alpha-beta + bitboards', 'Laptop'],
              ['Checkers', '~10^20', 'Solved (draw)', 'Chinook', 'Years of compute'],
              ['Chess', '~10^47', 'Not solved', 'Stockfish (NNUE + alpha-beta)', 'Strong on laptop'],
              ['Go', '~10^170', 'Not solved', 'AlphaZero', 'Thousands of TPUs'],
              ['Heads-up NL Hold\'em', '~10^165', 'Solved (Libratus)', 'CFR + nested solving', 'Supercomputer'],
              ['StarCraft II', '~10^16859', 'Not solved', 'AlphaStar', 'TPU pods, weeks']
            ]
          },
          note: 'Interview tip: state-space size alone does not determine hardness — Go (10^170) is harder than chess (10^47) partly because the branching factor is 7x larger and no good eval exists. Imperfect-info games need CFR, not minimax, regardless of size.'
        },
        // K — Common mistakes
        {
          heading: 'Common Mistakes',
          list: [
            'Using the same algorithm for every game type — match the algorithm to the game structure: minimax for perfect-info deterministic, CFR for imperfect info, MCTS for large branching, RL for real-time.',
            'Neglecting the evaluation function in favor of deeper search — a good evaluation function is often more valuable than raw depth; invest in feature design or neural network training.',
            'Ignoring computational and memory limits — use iterative deepening, transposition tables, and efficient bitboard representations to maximize performance within hardware constraints.',
            'Overfitting to a specific opponent — train against diverse opponents or use population-based / league training to develop robust strategies that generalize.',
            'Applying minimax to poker or other imperfect-info games — the state is not fully known; use belief-state reasoning or CFR.',
            'Forgetting time budgets in real-time games — use anytime algorithms (iterative deepening, MCTS) that always have a best-so-far move ready.'
          ]
        },
        // L — Real-world case studies
        {
          heading: 'Real-World Case Studies',
          text: 'Advances in game AI transfer directly to practical decision-making systems — games are the testbed, but the techniques power real applications.',
          list: [
            '<strong>Strategic planning:</strong> Military and business wargaming use game-tree search to evaluate competitive scenarios.',
            '<strong>Education:</strong> Adaptive tutoring systems frame learning as a game, using AI to personalize challenge and feedback.',
            '<strong>RL research:</strong> Games serve as controlled testbeds for RL algorithms before deployment in robotics or finance.',
            '<strong>Testing and verification:</strong> AI game players stress-test software by exploring state spaces humans might miss.',
            '<strong>Entertainment:</strong> NPCs in modern video games use behavior trees, planning, and learning to create believable, challenging opponents.',
            '<strong>Scientific discovery:</strong> AlphaFold (protein folding), AlphaTensor (matrix multiplication), and chip floorplanning are all descendants of game-AI architectures.'
          ]
        },
        // M — Practice questions
        {
          heading: 'Top Interview Questions on Game Playing AI',
          text: 'These questions test whether you can match the algorithm to the game type and explain the landmark systems.'
        },
        {
          heading: 'Practice Question 1: Go Harder than Chess (Classic)',
          text: '<strong>Problem:</strong> What is the primary challenge that makes Go harder for AI than chess?<br/><strong>Key idea:</strong> The vastly larger branching factor (≈250 vs ≈35) and the difficulty of crafting a reliable position evaluation function — chess eval is dominated by material count, which is meaningless in Go.',
          example: {
            title: 'Answer',
            code: `Chess:  b~35, m~100  -> alpha-beta ~10-12 plies
                        strong handcrafted eval (material, etc.)
                        -> superhuman with classical engines.

Go:    b~250, m~200  -> alpha-beta ~16 plies effective (sqrt(b))
                        NO good handcrafted eval exists
                        -> classical engines stalled at amateur level.
                        MCTS + neural nets (AlphaGo) broke the
                        barrier by replacing eval with rollouts+value net.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 2: Poker Harder than Chess (Classic)',
          text: '<strong>Problem:</strong> Why is poker harder for AI than chess?<br/><strong>Key idea:</strong> Poker is an imperfect-information game with hidden cards, requiring belief modeling, bluffing, and game-theoretic equilibrium reasoning rather than pure search. Minimax assumes the full state is known — it does not apply.',
          example: {
            title: 'Answer',
            code: `Chess: perfect info, deterministic, zero-sum
  -> minimax / alpha-beta / MCTS apply directly.

Poker: imperfect info (hidden cards), stochastic,
  zero-sum.
  -> state is NOT fully known to any player.
  -> minimax over visible state ignores information
    revealed by opponent actions.
  -> must reason over BELIEFS (distributions over
    hidden cards) and find game-theoretic equilibria.

Algorithm: counterfactual regret minimization (CFR)
           -> Libratus, Pluribus.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 3: General Game Playing (Classic)',
          text: '<strong>Problem:</strong> What is general game playing (GGP) and why is it important?<br/><strong>Key idea:</strong> GGP requires AI to play arbitrary games given only the rules (in GDL), testing true generality rather than domain-specific engineering. MCTS dominates because no handcrafted evaluation is available.',
          example: {
            title: 'Answer',
            code: `GGP: the agent receives the rules of an ARBITRARY
game in Game Description Language (GDL) at runtime
and must play well, with no game-specific tuning.

Why important: tests generality, not engineering.
A chess engine that can't play checkers is narrow;
a GGP engine must adapt to any game.

Dominant algorithm: MCTS with learned rollout/value
functions, because no handcrafted eval exists for
an arbitrary game.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 4: Game-Playing Pipeline (Classic)',
          text: '<strong>Problem:</strong> Name three components of a typical game-playing AI pipeline.<br/><strong>Key idea:</strong> Perception (state representation), decision (search + evaluation), and learning (policy/value improvement from experience).',
          example: {
            title: 'Answer',
            code: `1. PERCEPTION: extract features from game state
   (board, units, cards, screen pixels) ->
   a representation the decision module can use.

2. DECISION: search (MCTS, alpha-beta, brute force)
   + evaluate (handcrafted heuristic OR neural net)
   -> select best move under a compute budget.

3. LEARNING: improve policy/value from outcomes
   (reinforcement learning, self-play, imitation).
   The learned model feeds back into decision.

Loop: perceive -> decide -> act -> learn -> ...`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 5: Algorithm Matching (Conceptual)',
          text: '<strong>Problem:</strong> Match each game to its best-suited algorithm class: chess, Go, poker, StarCraft.<br/><strong>Key idea:</strong> Chess → alpha-beta + evaluation; Go → MCTS + deep nets; poker → CFR / belief-state search; StarCraft → deep RL + self-play (hierarchical).',
          example: {
            title: 'Answer',
            code: `Chess     -> alpha-beta + evaluation function
            (Deep Blue, Stockfish NNUE)

Go       -> MCTS + policy/value neural nets
            (AlphaGo, AlphaZero)

Poker    -> counterfactual regret minimization (CFR)
            + belief-state search (Libratus, Pluribus)

StarCraft -> hierarchical deep RL + league self-play
            (AlphaStar); real-time, partial observability

Rule: match the algorithm to the game's structure
(perfect vs imperfect info, branching factor, time).`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Practice Question 6: Self-Play Curriculum (Conceptual)',
          text: '<strong>Problem:</strong> Why do AlphaStar and OpenAI Five use self-play with a population (league training) instead of a single self-play opponent?<br/><strong>Key idea:</strong> A single opponent causes strategy collapse — the agent overfits to beating one strategy and becomes exploitable. A diverse population keeps the meta-game rich, preventing collapse and producing robust strategies that generalize.',
          example: {
            title: 'Answer',
            code: `Naive self-play: agent vs a single copy of itself.
  Risk: strategy collapse -- agent overfits to beating
  its current self; small perturbations can beat it.

League self-play (AlphaStar): maintain a POPULATION
  - main agents (current best)
  - league exploiters (try to exploit the main agents)
  - past league agents (frozen snapshots)
  Opponents are sampled from the league each game.

Result: robust strategies that generalize against
unseen opponents, not just the current self.`,
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Quick Recap',
          list: [
            'Game Playing AI spans board games, video games, and general game playing benchmarks; each landmark milestone introduced a new technique.',
            'Perfect-information games rely on deep search + evaluation (chess: alpha-beta; Go: MCTS + neural nets); imperfect-information games require belief modeling and CFR (poker).',
            'Real-time games demand anytime algorithms and deep RL + self-play (StarCraft: AlphaStar; Dota 2: OpenAI Five).',
            'Landmark systems: Deep Blue (chess), AlphaGo/AlphaZero (Go), Libratus/Pluribus (poker), AlphaStar (StarCraft), OpenAI Five (Dota 2).',
            'Match the algorithm to the game structure: minimax/alpha-beta for perfect info deterministic, CFR for imperfect info, MCTS for large branching, RL for real-time.',
            'Lessons from game AI transfer to planning, robotics, finance, and strategic decision support — AlphaFold and AlphaTensor are direct descendants.'
          ]
        }
      ]
    }
  }
};