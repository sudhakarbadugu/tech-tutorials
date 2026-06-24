// artificial intelligence — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js ai_module2.js

export const aiModule2Structure = {
  module2: {
    title: 'Module 2: Search, Games, and Multi-Agent Systems',
    topics: [
      {
        id: 'constraint-satisfaction',
        title: 'Constraint Satisfaction Problems'
      },
      {
        id: 'adversarial-search',
        title: 'Adversarial Search'
      },
      {
        id: 'minimax',
        title: 'Minimax Algorithm'
      },
      {
        id: 'alpha-beta',
        title: 'Alpha-Beta Pruning'
      },
      {
        id: 'expectimax',
        title: 'Expectimax Search'
      },
      {
        id: 'game-theory',
        title: 'Game Theory'
      },
      {
        id: 'monte-carlo-tree-search',
        title: 'Monte Carlo Tree Search'
      },
      {
        id: 'alpha-go-ai',
        title: 'AlphaGo and AlphaZero'
      },
      {
        id: 'multi-agent-systems',
        title: 'Multi-Agent Systems'
      },
      {
        id: 'game-playing',
        title: 'Game Playing AI'
      }
    ]
  }
};

export const aiModule2Content = {
  module2: {
    'constraint-satisfaction': {
      title: 'Constraint Satisfaction Problems',
      subtitle: 'Solving problems defined by variables, domains, and constraints',
      sections: [
        {
          heading: 'What is a Constraint Satisfaction Problem?',
          text: 'A <strong>Constraint Satisfaction Problem (CSP)</strong> is defined by a set of variables, a domain of possible values for each variable, and a set of constraints that specify allowable combinations of values. The goal is to find an assignment that satisfies all constraints.',
          list: [
            '<strong>Variables:</strong> The entities to be assigned values (e.g., regions on a map, tasks in a schedule)',
            '<strong>Domains:</strong> The set of possible values for each variable (e.g., {Red, Green, Blue})',
            '<strong>Constraints:</strong> Rules limiting the combinations of values variables can take together',
            '<strong>Solution:</strong> A complete, consistent assignment where every variable has a value and all constraints are satisfied'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Constraint Satisfaction Problem (CSP)</strong> is defined by a set of variables, a domain of possible values for each variable, and a set of constraints that specify allowable combinations of values. The goal is to find an assignment that satisfies all constraints. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Constraint Satisfaction Problem (CSP)</strong> is defined by a set of variables, a domain of possible values for each variable, and a set of constraints that specify allowable combinations of values. The goal is to find an assignment that satisfies all constraints. <strong>Variables:</strong> The entities to be assigned values (e.g., regions on a map, tasks in a schedule) <strong>Domains:</strong> The set of possible values for each variable (e.g., {Red, Green, Blue}) <strong>Constraints:</strong> Rules limiting the combinations of values variables can take together <strong>Solution:</strong> A complete, consistent assignment where every variable has a value and all constraints are satisfied</p>',
            '<p>You use constraint satisfaction problems when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Constraint Satisfaction Problems

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Constraint Satisfaction Problems sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Backtracking search with constraint propagation is the foundational algorithm for solving CSPs.',
          example: {
            title: 'Backtracking Search with AC-3',
            code: `Backtracking-Search(assignment, csp):
  if assignment is complete: return assignment
  var = Select-Unassigned-Variable(csp, assignment)
  for each value in Order-Domain-Values(var, assignment, csp):
    if value is consistent with assignment:
      add {var = value} to assignment
      inferences = Inference(csp, var, value)
      if inferences != failure:
        add inferences to assignment
        result = Backtracking-Search(assignment, csp)
        if result != failure: return result
      remove inferences and {var = value} from assignment
  return failure

AC-3 (Arc Consistency):
  Remove values from domains that can never
  satisfy constraints with neighbors.`,
            output: 'Backtracking with arc consistency dramatically reduces the search space before exploring assignments.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Constraint Satisfaction Problems with Python',
            code: `from collections import deque

# Constraint Satisfaction Problems — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Different CSP solving strategies trade completeness for efficiency.',
          table: {
            headers: [
              'Method',
              'Approach',
              'Complete',
              'Best For'
            ],
            rows: [
              [
                'Backtracking',
                'Systematic depth-first search',
                'Yes',
                'Small to medium CSPs'
              ],
              [
                'Constraint Propagation (AC-3)',
                'Prune inconsistent values',
                'Yes (as preprocessor)',
                'Tight constraints'
              ],
              [
                'Local Search (Min-Conflicts)',
                'Iterative repair of violations',
                'No',
                'Large CSPs (n-queens n > 1000)'
              ],
              [
                'Forward Checking',
                'Check constraints after each assignment',
                'Yes',
                'Balanced pruning and speed'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Choosing variables randomly instead of using the Minimum Remaining Values (MRV) heuristic (fix: always select the variable with the fewest legal values to reduce branching)',
            'Mistake 2: Ignoring constraint propagation entirely (fix: run AC-3 or forward checking after every assignment to prune dead branches early)',
            'Mistake 3: Not ordering domain values by least-constraining-value first (fix: prefer values that rule out the fewest choices for neighboring variables)',
            'Mistake 4: Assuming local search is always better than backtracking (fix: use local search only when solutions are dense and the problem is very large)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'CSPs model a wide range of real-world scheduling and configuration problems.',
          list: [
            '<strong>Map Coloring:</strong> Assign colors to regions such that no adjacent regions share the same color',
            '<strong>Sudoku Solvers:</strong> Each cell is a variable with domain 1-9, constrained by row, column, and box uniqueness',
            '<strong>Timetable Scheduling:</strong> Assign professors, rooms, and timeslots satisfying no-conflict constraints',
            '<strong>Hardware Configuration:</strong> Select components that meet power, space, and compatibility requirements',
            '<strong>Airline Crew Scheduling:</strong> Assign crews to flights while respecting rest periods and union rules'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CSP = (Variables, Domains, Constraints) — a powerful problem formulation framework',
            'Backtracking search systematically explores assignments with heuristics like MRV and least-constraining-value',
            'Constraint propagation (AC-3, forward checking) prunes inconsistent values to reduce search space',
            'Local search (min-conflicts) is efficient for very large CSPs but not guaranteed to be complete',
            'CSPs are ubiquitous in scheduling, configuration, and resource allocation problems'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the three components of a CSP?
Ans: Variables, domains, and constraints.`,
            `Q2: Why is the MRV heuristic effective in backtracking search?
Ans: It selects the variable with the fewest legal remaining values, minimizing branching factor.`,
            `Q3: What is the purpose of arc consistency (AC-3)?
Ans: To remove values from variable domains that cannot possibly participate in a valid solution.`,
            `Q4: When is local search preferred over backtracking for CSPs?
Ans: When the problem is very large and solutions are densely distributed in the search space.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Constraint Satisfaction Problems</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Constraint Satisfaction Problems")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'adversarial-search': {
      title: 'Adversarial Search',
      subtitle: 'Search in competitive multi-agent environments',
      sections: [
        {
          heading: 'What is Adversarial Search?',
          text: '<strong>Adversarial search</strong> is the study of search problems where agents have conflicting goals. The defining feature is that one agent is trying to maximize a utility while another is trying to minimize it. Most adversarial search research focuses on games.',
          list: [
            '<strong>Two-player games:</strong> One player (MAX) tries to maximize the outcome, the other (MIN) tries to minimize it',
            '<strong>Game tree:</strong> A tree where nodes are game states and edges are legal moves by alternating players',
            '<strong>Zero-sum property:</strong> One player gain is exactly equal to the other player loss',
            '<strong>Perfect information:</strong> Both players can see the entire game state (chess), vs imperfect information (poker)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Adversarial search</strong> is the study of search problems where agents have conflicting goals. The defining feature is that one agent is trying to maximize a utility while another is trying to minimize it. Most adversarial search research focuses on games. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Adversarial search</strong> is the study of search problems where agents have conflicting goals. The defining feature is that one agent is trying to maximize a utility while another is trying to minimize it. Most adversarial search research focuses on games. <strong>Two-player games:</strong> One player (MAX) tries to maximize the outcome, the other (MIN) tries to minimize it <strong>Game tree:</strong> A tree where nodes are game states and edges are legal moves by alternating players <strong>Zero-sum property:</strong> One player gain is exactly equal to the other player loss <strong>Perfect information:</strong> Both players can see the entire game state (chess), vs imperfect information (poker)</p>',
            '<p>You use adversarial search when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Adversarial Search

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Adversarial Search sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A game can be formally defined by its initial state, players, actions, transition model, terminal test, and utility function.',
          example: {
            title: 'Game Definition Formalism',
            code: `Game = (S₀, Players, Actions, Result, Terminal, Utility)

S₀ = initial state
Players = {MAX, MIN}
Actions(s) = legal moves in state s
Result(s, a) = state after action a in state s
Terminal(s) = true if s is terminal
Utility(s, p) = payoff for player p in terminal state s

Example: Tic-Tac-Toe
  S₀ = empty 3×3 board
  Actions = place X or O in empty cell
  Terminal = 3 in a row or full board
  Utility(MAX wins) = +1, MIN wins = -1, draw = 0`,
            output: 'Formalizing games enables systematic algorithmic analysis.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Adversarial Search with Python',
            code: `from collections import deque

# Adversarial Search — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Not all competitive scenarios are the same. Recognizing the game type determines the correct algorithm.',
          table: {
            headers: [
              'Dimension',
              'Type A',
              'Type B',
              'Algorithm Impact'
            ],
            rows: [
              [
                'Information',
                'Perfect',
                'Imperfect',
                'Minimax vs expectimax / belief states'
              ],
              [
                'Determinism',
                'Deterministic',
                'Stochastic',
                'Minimax vs expectimax'
              ],
              [
                'Payoff',
                'Zero-sum',
                'General-sum',
                'Minimax vs Nash equilibrium concepts'
              ],
              [
                'Players',
                'Two-player',
                'Multi-player',
                'Minimax vs multi-agent utilities'
              ],
              [
                'Time',
                'Turn-based',
                'Real-time',
                'Full search vs anytime algorithms'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying minimax to imperfect-information games like poker (fix: use counterfactual regret minimization or belief-state search for hidden information)',
            'Mistake 2: Assuming the opponent always plays optimally (fix: use bounded rationality models or opponent modeling when facing suboptimal players)',
            'Mistake 3: Searching the full game tree for complex games (fix: use depth-limited search with an evaluation function to approximate utility at non-terminal states)',
            'Mistake 4: Ignoring computational time limits in real-time games (fix: use iterative deepening or anytime algorithms that return the best move found so far)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Adversarial search principles extend far beyond board games.',
          list: [
            '<strong>Chess Engines:</strong> Stockfish and Komodo use alpha-beta pruning with sophisticated evaluation functions',
            '<strong>Go AI:</strong> AlphaGo uses Monte Carlo Tree Search combined with neural networks for evaluation',
            '<strong>Poker Bots:</strong> Libratus and Pluribus handle imperfect information through counterfactual regret minimization',
            '<strong>Military Strategy:</strong> Wargaming and adversarial scenario planning use minimax-like reasoning',
            '<strong>Security:</strong> Attack-defense modeling in cybersecurity treats hackers and defenders as adversarial agents'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Adversarial search handles competitive environments where agents have opposing goals',
            'Games are formally defined by states, actions, transitions, terminal tests, and utilities',
            'Perfect-information deterministic games use minimax; stochastic games need expectimax',
            'Imperfect-information games require belief-state reasoning or specialized algorithms like CFR',
            'Computational limits in complex games require depth-limited search and evaluation functions'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What distinguishes adversarial search from standard search?
Ans: Adversarial search involves agents with conflicting goals, where one tries to maximize utility while another tries to minimize it.`,
            `Q2: What is a zero-sum game?
Ans: A game where one player gain is exactly equal to the other player loss, so total utility sums to zero.`,
            `Q3: Why does minimax fail for imperfect-information games like poker?
Ans: Minimax assumes both players see the full state; hidden information requires belief-state reasoning or counterfactual regret minimization.`,
            `Q4: What is the purpose of an evaluation function in depth-limited game search?
Ans: To estimate the utility of a non-terminal state when the full tree cannot be searched to completion.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Adversarial Search</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Adversarial Search")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    minimax: {
      title: 'Minimax Algorithm',
      subtitle: 'Optimal decision making in two-player zero-sum games',
      sections: [
        {
          heading: 'What is the Minimax Algorithm?',
          text: '<strong>Minimax</strong> is a recursive algorithm for choosing an optimal move in a two-player zero-sum game, assuming the opponent also plays optimally. MAX tries to maximize the utility; MIN tries to minimize it.',
          list: [
            '<strong>Game tree traversal:</strong> Explore all possible moves and counter-moves down to terminal states',
            '<strong>Utility propagation:</strong> Terminal utilities are propagated back up the tree; MAX nodes take the max of children, MIN nodes take the min',
            '<strong>Optimality:</strong> Minimax returns the best achievable utility against an optimal opponent',
            '<strong>Limitation:</strong> Requires searching the full game tree, which is infeasible for complex games like chess or Go'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Minimax</strong> is a recursive algorithm for choosing an optimal move in a two-player zero-sum game, assuming the opponent also plays optimally. MAX tries to maximize the utility; MIN tries to minimize it. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Minimax</strong> is a recursive algorithm for choosing an optimal move in a two-player zero-sum game, assuming the opponent also plays optimally. MAX tries to maximize the utility; MIN tries to minimize it. <strong>Game tree traversal:</strong> Explore all possible moves and counter-moves down to terminal states <strong>Utility propagation:</strong> Terminal utilities are propagated back up the tree; MAX nodes take the max of children, MIN nodes take the min <strong>Optimality:</strong> Minimax returns the best achievable utility against an optimal opponent <strong>Limitation:</strong> Requires searching the full game tree, which is infeasible for complex games like chess or Go</p>',
            '<p>You use minimax algorithm when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Minimax Algorithm

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Minimax Algorithm sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The minimax value of a node is the utility of the state if it is terminal, otherwise the max or min of child values.',
          example: {
            title: 'Minimax Recursion',
            code: `Minimax(node, depth, isMaximizing):
  if depth == 0 or Terminal(node):
    return Utility(node)

  if isMaximizing:
    value = -∞
    for each child of node:
      value = max(value, Minimax(child, depth-1, False))
    return value
  else:
    value = +∞
    for each child of node:
      value = min(value, Minimax(child, depth-1, True))
    return value

Call: Minimax(root, maxDepth, True)`,
            output: 'Minimax explores the game tree depth-first, propagating utilities upward.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Minimax Algorithm with Python',
            code: `from collections import deque

# Minimax Algorithm — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Variants and related concepts that are often confused with standard minimax.',
          table: {
            headers: [
              'Concept',
              'Key Difference',
              'Use Case'
            ],
            rows: [
              [
                'Minimax',
                'Optimal play assumed for both sides',
                'Perfect-information zero-sum games'
              ],
              [
                'Negamax',
                'Simplifies code by using signed scores',
                'Two-player zero-sum games only'
              ],
              [
                'Depth-Limited Minimax',
                'Stops early and uses evaluation function',
                'Chess, Go (computationally bounded)'
              ],
              [
                'Expectimax',
                'Adds chance nodes for stochastic outcomes',
                'Games with dice or random events'
              ],
              [
                'Expectiminimax',
                'Combines MIN and chance nodes',
                'Stochastic games with adversaries'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not alternating between max and min at successive levels (fix: always flip the isMaximizing flag after each recursive call)',
            'Mistake 2: Returning the move instead of the value during recursion (fix: the recursive function returns a utility score; the top-level wrapper selects the move with the best score)',
            'Mistake 3: Using minimax without depth limits on large games (fix: set a maximum depth and replace terminal utility with an evaluation function for cutoff states)',
            'Mistake 4: Ignoring the horizon effect (fix: use quiescence search to resolve unstable positions before evaluating at the cutoff depth)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Minimax and its variants power classic game-playing AI.',
          list: [
            '<strong>Tic-Tac-Toe Solver:</strong> The full game tree is small enough for complete minimax, guaranteeing optimal play (always a draw)',
            '<strong>Chess Engines:</strong> Depth-limited minimax with alpha-beta pruning and evaluation functions drives Stockfish and Komodo',
            '<strong>Checkers:</strong> Chinook used minimax to solve checkers, proving the game is a draw with perfect play',
            '<strong>Connect Four:</strong> Solved using minimax with perfect play showing the first player can force a win',
            '<strong>General Game Playing:</strong> Minimax serves as the backbone for agents competing in arbitrary games described by game description language (GDL)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Minimax computes the optimal strategy assuming the opponent also plays optimally',
            'MAX nodes select the maximum child utility; MIN nodes select the minimum child utility',
            'The algorithm requires a complete game tree traversal, making it expensive for deep games',
            'Depth-limited minimax with an evaluation function is the practical approach for complex games',
            'Negamax is a code simplification valid only for zero-sum games'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the fundamental assumption of the minimax algorithm?
Ans: Both players play optimally — MAX maximizes utility and MIN minimizes it.`,
            `Q2: Why is pure minimax impractical for chess?
Ans: The branching factor (~35) and depth (~100 moves) make the tree far too large to explore completely.`,
            `Q3: What is the horizon effect in depth-limited search?
Ans: A seemingly good move may lead to disaster just beyond the search depth; quiescence search helps mitigate this.`,
            `Q4: When can negamax be used instead of minimax?
Ans: Only in strictly zero-sum games where one player gain equals the other player loss, allowing symmetric score signs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Minimax Algorithm</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Minimax Algorithm")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'alpha-beta': {
      title: 'Alpha-Beta Pruning',
      subtitle: 'Optimizing minimax by eliminating irrelevant branches',
      sections: [
        {
          heading: 'What is Alpha-Beta Pruning?',
          text: '<strong>Alpha-beta pruning</strong> is an optimization of the minimax algorithm that eliminates branches in the game tree that cannot possibly influence the final decision. It reduces the effective branching factor without sacrificing optimality.',
          list: [
            '<strong>Alpha (α):</strong> The best value that MAX can guarantee at the current node or above; initialized to -∞',
            '<strong>Beta (β):</strong> The best value that MIN can guarantee at the current node or above; initialized to +∞',
            '<strong>Pruning condition:</strong> If α ≥ β, the remaining children can be skipped because the parent already has a better alternative',
            '<strong>Optimality:</strong> With perfect move ordering, alpha-beta explores O(b^(m/2)) nodes instead of O(b^m)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Alpha-beta pruning</strong> is an optimization of the minimax algorithm that eliminates branches in the game tree that cannot possibly influence the final decision. It reduces the effective branching factor without sacrificing optimality. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Alpha-beta pruning</strong> is an optimization of the minimax algorithm that eliminates branches in the game tree that cannot possibly influence the final decision. It reduces the effective branching factor without sacrificing optimality. <strong>Alpha (α):</strong> The best value that MAX can guarantee at the current node or above; initialized to -∞ <strong>Beta (β):</strong> The best value that MIN can guarantee at the current node or above; initialized to +∞ <strong>Pruning condition:</strong> If α ≥ β, the remaining children can be skipped because the parent already has a better alternative <strong>Optimality:</strong> With perfect move ordering, alpha-beta explores O(b^(m/2)) nodes instead of O(b^m)</p>',
            '<p>You use alpha-beta pruning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Alpha-Beta Pruning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Alpha-Beta Pruning sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The alpha-beta algorithm tracks two bounds and prunes when they cross.',
          example: {
            title: 'Alpha-Beta Recursion',
            code: `AlphaBeta(node, depth, α, β, isMaximizing):
  if depth == 0 or Terminal(node):
    return Utility(node)

  if isMaximizing:
    value = -∞
    for each child of node:
      value = max(value, AlphaBeta(child, depth-1, α, β, False))
      α = max(α, value)
      if α >= β: break  // β cutoff
    return value
  else:
    value = +∞
    for each child of node:
      value = min(value, AlphaBeta(child, depth-1, α, β, True))
      β = min(β, value)
      if β <= α: break  // α cutoff
    return value

Call: AlphaBeta(root, maxDepth, -∞, +∞, True)`,
            output: 'Alpha-beta returns the same value as minimax but explores fewer nodes.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Alpha-Beta Pruning with Python',
            code: `from collections import deque

# Alpha-Beta Pruning — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Alpha-beta is minimax with pruning, but several nuances affect performance.',
          table: {
            headers: [
              'Aspect',
              'Minimax',
              'Alpha-Beta'
            ],
            rows: [
              [
                'Nodes explored',
                'All nodes (b^m)',
                'Subset, depends on ordering'
              ],
              [
                'Result optimality',
                'Optimal',
                'Optimal (same as minimax)'
              ],
              [
                'Move ordering effect',
                'None',
                'Critical — best moves first maximize pruning'
              ],
              [
                'Time complexity (worst)',
                'O(b^m)',
                'O(b^m)'
              ],
              [
                'Time complexity (best)',
                'O(b^m)',
                'O(b^(m/2))'
              ],
              [
                'Space complexity',
                'O(bm)',
                'O(bm)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking alpha-beta is an approximation (fix: it is exact — it returns the identical value as minimax; it simply skips branches that cannot change the result)',
            'Mistake 2: Passing alpha and beta incorrectly between MAX and MIN nodes (fix: alpha and beta are passed unchanged down the tree; only updated on return)',
            'Mistake 3: Not investing in move ordering (fix: use killer moves, transposition tables, and heuristic ordering to visit strong moves first, doubling search depth)',
            'Mistake 4: Forgetting that worst-case ordering yields no pruning (fix: even with random ordering, average performance is still significantly better than minimax)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Alpha-beta pruning is the workhorse of competitive game engines.',
          list: [
            '<strong>Chess Engines:</strong> Stockfish, Komodo, and Leela Chess Zero use alpha-beta (or its variants) to search billions of positions efficiently',
            '<strong>Checkers:</strong> Chinook and later solvers used alpha-beta to explore the 5×10^20 search space',
            '<strong>Game Trees in RTS:</strong> Simplified combat models in StarCraft bots use alpha-beta for tactical decisions',
            '<strong>Puzzle Solvers:</strong> Sliding puzzles and Sokoban solvers use alpha-beta with heuristics to find optimal solutions',
            '<strong>Automated Theorem Proving:</strong> Alpha-beta-like cutoffs prune proof search trees in logic engines'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Alpha-beta pruning eliminates branches that cannot affect the minimax decision',
            'Alpha tracks the best score MAX can force; beta tracks the best score MIN can force',
            'If α ≥ β, the remaining siblings are pruned because the parent already has a better alternative',
            'Optimal move ordering can double the searchable depth compared to plain minimax',
            'Alpha-beta is exact — it produces the same result as minimax, just faster'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Does alpha-beta pruning change the result of minimax?
Ans: No — it returns the exact same value, only faster, by skipping irrelevant branches.`,
            `Q2: What is the best-case time complexity of alpha-beta with perfect move ordering?
Ans: O(b^(m/2)), effectively doubling the searchable depth.`,
            `Q3: What happens if children are examined in worst-case order?
Ans: No pruning occurs, and alpha-beta degenerates to standard minimax exploring b^m nodes.`,
            `Q4: Why is move ordering critical for alpha-beta performance?
Ans: Finding the best move early creates the largest α-β gap, enabling the most aggressive pruning of later siblings.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Alpha-Beta Pruning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Alpha-Beta Pruning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    expectimax: {
      title: 'Expectimax Search',
      subtitle: 'Handling chance and uncertainty in game trees',
      sections: [
        {
          heading: 'What is Expectimax?',
          text: '<strong>Expectimax</strong> extends the minimax algorithm to games that include stochastic elements (chance). Instead of assuming an adversarial MIN player, chance nodes represent random outcomes such as dice rolls or card draws.',
          list: [
            '<strong>MAX nodes:</strong> Choose the action that maximizes expected utility (same as minimax)',
            '<strong>CHANCE nodes:</strong> Compute the weighted average of child values based on outcome probabilities',
            '<strong>Expected utility:</strong> The value at a chance node is the expectation over possible random outcomes',
            '<strong>Applications:</strong> Backgammon, Monopoly, and any game involving dice, shuffling, or environmental randomness'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Expectimax</strong> extends the minimax algorithm to games that include stochastic elements (chance). Instead of assuming an adversarial MIN player, chance nodes represent random outcomes such as dice rolls or card draws. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Expectimax</strong> extends the minimax algorithm to games that include stochastic elements (chance). Instead of assuming an adversarial MIN player, chance nodes represent random outcomes such as dice rolls or card draws. <strong>MAX nodes:</strong> Choose the action that maximizes expected utility (same as minimax) <strong>CHANCE nodes:</strong> Compute the weighted average of child values based on outcome probabilities <strong>Expected utility:</strong> The value at a chance node is the expectation over possible random outcomes <strong>Applications:</strong> Backgammon, Monopoly, and any game involving dice, shuffling, or environmental randomness</p>',
            '<p>You use expectimax search when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Expectimax Search

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Expectimax Search sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Expectimax replaces the MIN layer with an expectation over probabilities.',
          example: {
            title: 'Expectimax Recursion',
            code: `Expectimax(node, depth):
  if depth == 0 or Terminal(node):
    return Utility(node)

  if node.type == MAX:
    return max(Expectimax(child, depth-1) for child in children)

  if node.type == CHANCE:
    return sum(P(child) * Expectimax(child, depth-1) for child in children)

Example (dice roll):
  Roll a die, then opponent moves.
  Chance node value = (1/6)*V(1) + (1/6)*V(2)
                    + ... + (1/6)*V(6)

Note: No MIN layer — chance replaces adversarial MIN.`,
            output: 'Expectimax evaluates the expected utility under optimal play and random chance.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Expectimax Search with Python',
            code: `from collections import deque

# Expectimax Search — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Stochastic games require different algorithms depending on the source of uncertainty.',
          table: {
            headers: [
              'Game Type',
              'Uncertainty Source',
              'Correct Algorithm'
            ],
            rows: [
              [
                'Chess',
                'None (deterministic)',
                'Minimax + alpha-beta'
              ],
              [
                'Backgammon',
                'Dice (chance)',
                'Expectimax or Monte Carlo sampling'
              ],
              [
                'Poker',
                'Hidden cards (imperfect info)',
                'Counterfactual regret minimization'
              ],
              [
                'Risk',
                'Dice + hidden info',
                'Hybrid: expectimax + belief states'
              ],
              [
                'Robot navigation',
                'Noisy sensors/actuators',
                'Partially Observable MDP (POMDP)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using standard minimax for stochastic games (fix: replace MIN nodes with weighted expectation nodes when outcomes are random rather than adversarial)',
            'Mistake 2: Assuming uniform probability for all chance outcomes (fix: use the true probability distribution of the game mechanics, e.g., biased dice or card deck composition)',
            'Mistake 3: Ignoring the branching explosion at chance nodes (fix: use Monte Carlo sampling or cutoffs to approximate expectations without expanding all outcomes)',
            'Mistake 4: Confusing expectimax with expectiminimax (fix: expectiminimax is for games with both adversarial MIN and chance nodes; pure expectimax is for non-adversarial stochastic environments)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Expectimax principles apply wherever decisions must account for randomness.',
          list: [
            '<strong>Backgammon AI:</strong> Early programs like BKG used expectimax to evaluate positions after dice rolls',
            '<strong>Board Games with Dice:</strong> Monopoly, Risk, and Settlers of Catan bots use expectimax for move evaluation',
            '<strong>Robot Planning:</strong> Navigation under uncertain action outcomes uses expectimax-like rollouts in belief space',
            '<strong>Financial Modeling:</strong> Decision trees with probabilistic market outcomes use expected-value maximization analogous to expectimax',
            '<strong>Medical Decision Making:</strong> Treatment plans under uncertain patient responses are evaluated using expected utility trees'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Expectimax extends minimax to handle stochastic (random) outcomes in the game tree',
            'Chance nodes compute the expected value: the probability-weighted sum of child utilities',
            'Expectimax is not for imperfect-information games with hidden states; it is for games with visible randomness like dice',
            'The branching factor at chance nodes can be large; Monte Carlo sampling or pruning approximations are often necessary',
            'Expectiminimax handles the combination of adversarial MIN players and chance nodes'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What type of node does expectimax add that minimax does not have?
Ans: A chance node that computes the expected value over probabilistic outcomes.`,
            `Q2: In expectimax, how is the value of a chance node calculated?
Ans: As the sum of each child utility multiplied by its probability of occurrence.`,
            `Q3: Is expectimax appropriate for poker? Why or why not?
Ans: No — poker has hidden information (imperfect information), not just visible randomness; it requires belief-state reasoning or CFR.`,
            `Q4: What is the main computational challenge of expectimax compared to minimax?
Ans: Chance nodes multiply the branching factor, making the tree much wider and harder to search exhaustively.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Expectimax Search</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Expectimax Search")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'game-theory': {
      title: 'Game Theory',
      subtitle: 'The mathematics of strategic interaction',
      sections: [
        {
          heading: 'What is Game Theory?',
          text: '<strong>Game theory</strong> is the mathematical study of strategic interactions among rational decision-makers. It provides formal tools to analyze how agents should behave when their outcomes depend on the actions of others.',
          list: [
            '<strong>Players:</strong> The rational agents participating in the game',
            '<strong>Strategies:</strong> The complete plans of action available to each player',
            '<strong>Payoffs:</strong> The utility each player receives for every possible combination of strategies',
            '<strong>Nash equilibrium:</strong> A set of strategies where no player can benefit by unilaterally changing their own strategy'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Game theory</strong> is the mathematical study of strategic interactions among rational decision-makers. It provides formal tools to analyze how agents should behave when their outcomes depend on the actions of others. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Game theory</strong> is the mathematical study of strategic interactions among rational decision-makers. It provides formal tools to analyze how agents should behave when their outcomes depend on the actions of others. <strong>Players:</strong> The rational agents participating in the game <strong>Strategies:</strong> The complete plans of action available to each player <strong>Payoffs:</strong> The utility each player receives for every possible combination of strategies <strong>Nash equilibrium:</strong> A set of strategies where no player can benefit by unilaterally changing their own strategy</p>',
            '<p>You use game theory when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Game Theory

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Game Theory sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A Nash equilibrium occurs when every player strategy is a best response to the strategies of the others.',
          example: {
            title: 'Prisoner Dilemma Payoff Matrix',
            code: `                    Player B
                 Cooperate  Defect
Player A Cooperate   (-1,-1)  (-3, 0)
         Defect      ( 0,-3)  (-2,-2)

Nash Equilibrium: (Defect, Defect)
  → Both get -2 (worse than mutual cooperation at -1)

Why? Given B defects, A prefers defect (0 > -3).
Given B cooperates, A still prefers defect (-1 < 0).
Defect is a dominant strategy for both.

Dominant strategy: optimal regardless of opponent.`,
            output: 'Rational self-interest can lead to collectively worse outcomes.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Game Theory with Python',
            code: `from collections import deque

# Game Theory — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Game theory classifies interactions by structure and information.',
          table: {
            headers: [
              'Dimension',
              'Type A',
              'Type B',
              'Classic Example'
            ],
            rows: [
              [
                'Timing',
                'Simultaneous',
                'Sequential',
                'Rock-paper-scissors vs Chess'
              ],
              [
                'Cooperation',
                'Cooperative',
                'Non-cooperative',
                'Team sports vs Auctions'
              ],
              [
                'Payoff structure',
                'Zero-sum',
                'Non-zero-sum',
                'Poker vs Prisoner Dilemma'
              ],
              [
                'Information',
                'Complete',
                'Incomplete',
                'Chess vs Poker'
              ],
              [
                'Repetition',
                'One-shot',
                'Repeated',
                'Single auction vs Oligopoly pricing'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming Nash equilibrium is always the best social outcome (fix: Nash equilibrium describes stability, not optimality; the Prisoner Dilemma shows equilibria can be Pareto inefficient)',
            'Mistake 2: Ignoring mixed strategies (fix: in games like Matching Pennies, the only Nash equilibrium is a randomized mixed strategy, not a pure one)',
            'Mistake 3: Applying one-shot game logic to repeated games (fix: repeated interactions enable cooperation through tit-for-tat, reputation, and trigger strategies)',
            'Mistake 4: Assuming all players are perfectly rational (fix: behavioral game theory incorporates bounded rationality, altruism, and risk aversion for more realistic predictions)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Game theory illuminates strategic behavior across economics, politics, and computer science.',
          list: [
            '<strong>Auction Design:</strong> eBay, Google Ads, and spectrum auctions use game-theoretic mechanisms to elicit truthful bids (Vickrey auction)',
            '<strong>Network Protocols:</strong> TCP congestion control and peer-to-peer networks model agents as rational players in a shared resource game',
            '<strong>Oligopoly Pricing:</strong> Airlines and telecom firms set prices considering competitors reactions, modeled as repeated games',
            '<strong>Cybersecurity:</strong> Attack-defense interactions are modeled as Stackelberg games where the defender commits to a strategy first',
            '<strong>Traffic Routing:</strong> Braess paradox and congestion games show how selfish routing can degrade overall network performance'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Game theory analyzes strategic interactions using players, strategies, and payoff matrices',
            'Nash equilibrium is a stable strategy profile where no player benefits from unilateral deviation',
            'Dominant strategies are optimal regardless of opponents actions, but they do not always exist',
            'Games differ along dimensions: simultaneous vs sequential, cooperative vs non-cooperative, zero-sum vs general-sum',
            'Repeated games, mixed strategies, and mechanism design extend basic game theory to richer real-world settings'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Define Nash equilibrium in your own words.
Ans: A strategy profile where no player can improve their payoff by changing their strategy alone, given the strategies of all other players.`,
            `Q2: What is a dominant strategy?
Ans: A strategy that is optimal for a player no matter what the other players do.`,
            `Q3: Why does the Prisoner Dilemma have a Nash equilibrium that is worse for both players than mutual cooperation?
Ans: Because defection is a dominant strategy; each player rationally defects to avoid the worst individual outcome, leading to mutual defection.`,
            `Q4: In what type of game is a mixed strategy necessary to find a Nash equilibrium?
Ans: In zero-sum games with no dominant strategies, such as Matching Pennies or Rock-Paper-Scissors, where predictability is exploitable.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Game Theory</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Game Theory")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'monte-carlo-tree-search': {
      title: 'Monte Carlo Tree Search',
      subtitle: 'Building search trees from randomized playouts',
      sections: [
        {
          heading: 'What is Monte Carlo Tree Search?',
          text: '<strong>Monte Carlo Tree Search (MCTS)</strong> is a best-first search algorithm that uses random sampling (Monte Carlo rollouts) to evaluate states. Instead of relying on a handcrafted evaluation function, MCTS builds a search tree by playing out random games and statistically estimating state values.',
          list: [
            '<strong>Selection:</strong> Traverse the tree from the root using the UCB1 formula to balance exploration and exploitation',
            '<strong>Expansion:</strong> Add one or more child nodes from the selected leaf if it is not terminal',
            '<strong>Simulation:</strong> Play a random or heuristic game (rollout) from the new node to a terminal state',
            '<strong>Backpropagation:</strong> Update the win/visit counts of all nodes along the path from the new node back to the root'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Monte Carlo Tree Search (MCTS)</strong> is a best-first search algorithm that uses random sampling (Monte Carlo rollouts) to evaluate states. Instead of relying on a handcrafted evaluation function, MCTS builds a search tree by playing out random games and statistically estimating state values. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Monte Carlo Tree Search (MCTS)</strong> is a best-first search algorithm that uses random sampling (Monte Carlo rollouts) to evaluate states. Instead of relying on a handcrafted evaluation function, MCTS builds a search tree by playing out random games and statistically estimating state values. <strong>Selection:</strong> Traverse the tree from the root using the UCB1 formula to balance exploration and exploitation <strong>Expansion:</strong> Add one or more child nodes from the selected leaf if it is not terminal <strong>Simulation:</strong> Play a random or heuristic game (rollout) from the new node to a terminal state <strong>Backpropagation:</strong> Update the win/visit counts of all nodes along the path from the new node back to the root</p>',
            '<p>You use monte carlo tree search when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Monte Carlo Tree Search

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Monte Carlo Tree Search sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The UCB1 formula determines which child to select during tree traversal.',
          example: {
            title: 'UCB1 Selection Formula',
            code: `UCB1(vᵢ) = Q(vᵢ)/N(vᵢ) + C * sqrt(2 * ln(N(parent)) / N(vᵢ))

Where:
  Q(vᵢ) = total reward from simulations through node i
  N(vᵢ) = number of times node i has been visited
  N(parent) = visit count of the parent node
  C = exploration constant (tune for domain)

Intuition:
  Q/N = exploitation (average reward)
  C * sqrt(...) = exploration bonus for rarely visited nodes

Selection continues until a node with N=0 is found.`,
            output: 'UCB1 guarantees that every promising branch is explored while favoring moves with high estimated value.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Monte Carlo Tree Search with Python',
            code: `from collections import deque

# Monte Carlo Tree Search — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'MCTS differs from classical adversarial search in philosophy and implementation.',
          table: {
            headers: [
              'Aspect',
              'Alpha-Beta / Minimax',
              'MCTS'
            ],
            rows: [
              [
                'Evaluation',
                'Handcrafted evaluation function',
                'Statistical rollouts'
              ],
              [
                'Branching',
                'Needs low branching factor',
                'Handles high branching well'
              ],
              [
                'Domain knowledge',
                'Heavily dependent',
                'Can be purely random (UCT)'
              ],
              [
                'Anytime property',
                'No — must finish depth',
                'Yes — can stop and return best move'
              ],
              [
                'Parallelization',
                'Difficult',
                'Embarrassingly parallel'
              ],
              [
                'Best for',
                'Chess, deterministic games',
                'Go, large branching games'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a purely random rollout policy in complex games (fix: add light domain knowledge to the rollout policy to improve simulation quality and convergence speed)',
            'Mistake 2: Setting the exploration constant C too high or too low (fix: tune C empirically; too high over-explores, too low gets stuck in local optima)',
            'Mistake 3: Running too few iterations for reliable estimates (fix: allocate enough compute; MCTS quality scales with the square root of iterations)',
            'Mistake 4: Not using transposition tables in games with repeated states (fix: merge identical states to avoid redundant search and improve statistic quality)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'MCTS revolutionized AI for games with enormous branching factors.',
          list: [
            '<strong>AlphaGo:</strong> Combined MCTS with deep neural networks (policy and value nets) to defeat the world Go champion',
            '<strong>General Game Playing:</strong> MCTS agents perform well in arbitrary games without domain-specific heuristics',
            '<strong>Real-Time Strategy Games:</strong> MCTS handles large action spaces in games like StarCraft for tactical micro-management',
            '<strong>Planning Under Uncertainty:</strong> MCTS variants (POMCP) solve partially observable planning problems in robotics and health care',
            '<strong>Combinatorial Optimization:</strong> MCTS searches massive configuration spaces for protein folding and scheduling problems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MCTS builds a search tree using four phases: selection, expansion, simulation, and backpropagation',
            'UCB1 balances exploration of new moves against exploitation of moves with high average reward',
            'MCTS does not require a handcrafted evaluation function; it learns from random playouts',
            'The algorithm is anytime — it can return the best move found so far at any point',
            'MCTS excels in games with high branching factors where minimax is infeasible'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Name the four phases of MCTS.
Ans: Selection, expansion, simulation (rollout), and backpropagation.`,
            `Q2: What does the UCB1 formula balance?
Ans: It balances exploitation of high-reward nodes against exploration of under-sampled nodes.`,
            `Q3: Why is MCTS considered an anytime algorithm?
Ans: Because it can be stopped at any iteration and still return the current best move based on accumulated statistics.`,
            `Q4: In what type of games does MCTS outperform classical minimax with alpha-beta pruning?
Ans: Games with very high branching factors and no reliable handcrafted evaluation function, such as Go.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Monte Carlo Tree Search</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Monte Carlo Tree Search")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'alpha-go-ai': {
      title: 'AlphaGo and AlphaZero',
      subtitle: 'Mastering complex games through deep learning and search',
      sections: [
        {
          heading: 'What are AlphaGo and AlphaZero?',
          text: '<strong>AlphaGo</strong> (DeepMind, 2016) was the first AI to defeat a world champion Go player. It combined deep neural networks with Monte Carlo Tree Search. <strong>AlphaZero</strong> (2017) surpassed AlphaGo by learning entirely through self-play without human game data.',
          list: [
            '<strong>Policy network:</strong> A deep CNN trained to predict expert moves, guiding MCTS to focus on promising branches',
            '<strong>Value network:</strong> A deep CNN trained to evaluate board positions, replacing random rollouts with learned position assessment',
            '<strong>MCTS integration:</strong> Tree search uses policy priors for exploration and value network for leaf evaluation',
            '<strong>Self-play learning:</strong> AlphaZero plays millions of games against itself, continuously improving both networks'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>AlphaGo</strong> (DeepMind, 2016) was the first AI to defeat a world champion Go player. It combined deep neural networks with Monte Carlo Tree Search. <strong>AlphaZero</strong> (2017) surpassed AlphaGo by learning entirely through self-play without human game data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>AlphaGo</strong> (DeepMind, 2016) was the first AI to defeat a world champion Go player. It combined deep neural networks with Monte Carlo Tree Search. <strong>AlphaZero</strong> (2017) surpassed AlphaGo by learning entirely through self-play without human game data. <strong>Policy network:</strong> A deep CNN trained to predict expert moves, guiding MCTS to focus on promising branches <strong>Value network:</strong> A deep CNN trained to evaluate board positions, replacing random rollouts with learned position assessment <strong>MCTS integration:</strong> Tree search uses policy priors for exploration and value network for leaf evaluation <strong>Self-play learning:</strong> AlphaZero plays millions of games against itself, continuously improving both networks</p>',
            '<p>You use alphago and alphazero when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — AlphaGo and AlphaZero

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: AlphaGo and AlphaZero sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'AlphaGo/AlphaZero combine neural network predictions with MCTS visit counts to select moves.',
          example: {
            title: 'MCTS with Neural Network Priors',
            code: `AlphaZero MCTS node selection:
  U(s,a) = Q(s,a) + cₚᵤₙₜ * P(a|s) * sqrt(N(s)) / (1 + N(s,a))

Where:
  P(a|s) = policy network probability of move a
  Q(s,a) = average action value from previous visits
  N(s,a) = visit count of action a
  N(s) = sum of visit counts for all actions from s
  cₚᵤₙₜ = exploration constant scaling prior influence

Move selection after search:
  π(a|s) ∝ N(s,a)^(1/τ)

Training:
  Loss = (z - v)² - πᵀ log p + c||θ||²
  (value error + policy cross-entropy + regularization)`,
            output: 'Neural networks compress Go knowledge; MCTS refines decisions at test time.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'AlphaGo and AlphaZero with Python',
            code: `from collections import deque

# AlphaGo and AlphaZero — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'The AlphaGo family evolved through three major versions with different learning paradigms.',
          table: {
            headers: [
              'System',
              'Training Data',
              'Search',
              'Key Innovation'
            ],
            rows: [
              [
                'AlphaGo Fan',
                'Human games + self-play',
                'MCTS + policy + value nets',
                'First to beat European champion'
              ],
              [
                'AlphaGo Lee',
                'Human + self-play',
                'MCTS + deeper nets',
                'Beat Lee Sedol 4-1'
              ],
              [
                'AlphaGo Zero',
                'Self-play only',
                'MCTS + single residual net',
                'No human data; 100-0 vs AlphaGo Lee'
              ],
              [
                'AlphaZero',
                'Self-play only',
                'MCTS + general net',
                'General algorithm for Go, Chess, Shogi'
              ],
              [
                'MuZero',
                'Self-play only',
                'MCTS + learned model',
                'No game rules given; learns dynamics model'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking AlphaGo is pure deep learning without search (fix: the policy and value networks guide MCTS, but the tree search at inference time is critical for strong play)',
            'Mistake 2: Believing AlphaZero needs human knowledge to learn (fix: AlphaZero learns tabula rasa through self-play reinforcement learning, surpassing centuries of human strategy)',
            'Mistake 3: Assuming AlphaZero works for any game without tuning (fix: while general, hyperparameters like exploration constant and network size must be adapted per domain)',
            'Mistake 4: Confusing the training and inference pipelines (fix: training involves millions of self-play games; inference uses the fixed trained networks with MCTS on the current position)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'The AlphaGo architecture has inspired breakthroughs far beyond board games.',
          list: [
            '<strong>Protein Folding (AlphaFold):</strong> Predicts 3D protein structures with near-experimental accuracy, advancing drug discovery and biology',
            '<strong>Material Science:</strong> AI discovers new stable crystal structures and materials with desired properties',
            '<strong>Mathematics:</strong> AI assists mathematicians in discovering new theorems and conjectures in knot theory and representation theory',
            '<strong>Combinatorial Optimization:</strong> AlphaZero-style planning solves routing, scheduling, and chip design optimization problems',
            '<strong>Robotics and Control:</strong> Model-based planning with learned dynamics models (MuZero-style) improves robot manipulation and autonomous navigation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AlphaGo combined deep neural networks with MCTS to master Go, a game with 10^170 possible positions',
            'Policy networks suggest promising moves; value networks evaluate positions without full rollouts',
            'AlphaZero eliminated human game data entirely, learning superhuman strategy from self-play alone',
            'MuZero extended the approach to environments where the rules are unknown, learning a dynamics model from experience',
            'The AlphaGo architecture has been adapted to scientific discovery, optimization, and robotics'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the two main neural networks in AlphaGo and what do they do?
Ans: The policy network predicts which moves an expert would play, and the value network estimates the probability of winning from a given board position.`,
            `Q2: How did AlphaGo Zero differ from the original AlphaGo in terms of training data?
Ans: AlphaGo Zero used no human game data; it learned entirely from self-play reinforcement learning.`,
            `Q3: Why is MCTS still used at inference time even after the networks are trained?
Ans: MCTS aggregates network predictions through local search, correcting errors and finding tactical sequences the static networks might miss.`,
            `Q4: What is MuZero key capability that AlphaZero lacks?
Ans: MuZero can plan in environments where the rules or transition dynamics are unknown, by learning a model of the environment from experience.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>AlphaGo and AlphaZero</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — AlphaGo and AlphaZero")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multi-agent-systems': {
      title: 'Multi-Agent Systems',
      subtitle: 'Coordinating multiple intelligent agents',
      sections: [
        {
          heading: 'What are Multi-Agent Systems?',
          text: 'A <strong>Multi-Agent System (MAS)</strong> consists of multiple autonomous agents interacting in a shared environment. Each agent pursues its own goals while being affected by the actions of others. MAS research studies coordination, communication, competition, and emergent collective behavior.',
          list: [
            '<strong>Autonomy:</strong> Each agent makes independent decisions based on its own perceptions and goals',
            '<strong>Local interactions:</strong> Agents typically observe and react to only nearby or relevant peers',
            '<strong>Coordination mechanisms:</strong> Communication protocols, negotiation, auction-based task allocation, and consensus algorithms',
            '<strong>Emergence:</strong> Complex global behavior arising from simple local rules (swarm intelligence, flocking, market dynamics)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Multi-Agent System (MAS)</strong> consists of multiple autonomous agents interacting in a shared environment. Each agent pursues its own goals while being affected by the actions of others. MAS research studies coordination, communication, competition, and emergent collective behavior. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Multi-Agent System (MAS)</strong> consists of multiple autonomous agents interacting in a shared environment. Each agent pursues its own goals while being affected by the actions of others. MAS research studies coordination, communication, competition, and emergent collective behavior. <strong>Autonomy:</strong> Each agent makes independent decisions based on its own perceptions and goals <strong>Local interactions:</strong> Agents typically observe and react to only nearby or relevant peers <strong>Coordination mechanisms:</strong> Communication protocols, negotiation, auction-based task allocation, and consensus algorithms <strong>Emergence:</strong> Complex global behavior arising from simple local rules (swarm intelligence, flocking, market dynamics)</p>',
            '<p>You use multi-agent systems when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multi-Agent Systems

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multi-Agent Systems sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'In a multi-agent setting, an agent utility often depends on the joint action profile of all agents.',
          example: {
            title: 'Multi-Agent Utility Framework',
            code: `Agent i selects action aᵢ from its action set Aᵢ.
The joint action is a = (a₁, a₂, ..., aₙ).
Utility for agent i: Uᵢ(a) = Uᵢ(aᵢ, a₋ᵢ)

Where a₋ᵢ denotes actions of all other agents.

Nash Equilibrium in MAS:
  a* is a Nash equilibrium if for all i:
  Uᵢ(a*ᵢ, a*₋ᵢ) ≥ Uᵢ(a'ᵢ, a*₋ᵢ) for all a'ᵢ ∈ Aᵢ

Social Welfare:
  SW(a) = Σᵢ Uᵢ(a)
  Optimal joint action maximizes SW.`,
            output: 'Agents must reason about joint actions and other-agent incentives.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Multi-Agent Systems with Python',
            code: `from collections import deque

# Multi-Agent Systems — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Multi-agent systems differ from single-agent and centralized systems in fundamental ways.',
          table: {
            headers: [
              'Aspect',
              'Single-Agent',
              'Centralized Multi-Agent',
              'Decentralized Multi-Agent'
            ],
            rows: [
              [
                'Control',
                'One decision maker',
                'Central controller knows all',
                'Each agent decides locally'
              ],
              [
                'Information',
                'Full state known',
                'Full state aggregated',
                'Partial, local observations'
              ],
              [
                'Computation',
                'One brain',
                'Central bottleneck',
                'Parallel, distributed'
              ],
              [
                'Robustness',
                'Single point of failure',
                'Central point of failure',
                'Fault-tolerant'
              ],
              [
                'Scalability',
                'Limited',
                'Limited by central node',
                'Highly scalable'
              ],
              [
                'Coordination',
                'None needed',
                'Command and control',
                'Emergent or negotiated'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating a multi-agent problem as a single-agent problem (fix: explicitly model other agents as strategic entities whose actions affect rewards and state transitions)',
            'Mistake 2: Assuming perfect communication and coordination (fix: design robust protocols that handle message loss, latency, and Byzantine failures)',
            'Mistake 3: Ignoring emergent behaviors (fix: use simulation and formal verification to detect harmful emergent dynamics like deadlock or resource starvation)',
            'Mistake 4: Designing agents with purely selfish utility functions (fix: add social welfare terms or mechanism design incentives to align local and global objectives)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Multi-agent systems are essential for distributed, large-scale intelligent infrastructure.',
          list: [
            '<strong>Autonomous Vehicle Coordination:</strong> Self-driving cars negotiate intersections and merge lanes as cooperative agents',
            '<strong>Swarm Robotics:</strong> Drone swarms perform search-and-rescue, agriculture monitoring, and construction through local coordination rules',
            '<strong>Smart Grid Energy Management:</strong> Distributed agents balance supply and demand, trading energy locally to reduce grid load',
            '<strong>Sensor Networks:</strong> Environmental monitoring agents coordinate coverage and data routing without a central controller',
            '<strong>E-commerce and Logistics:</strong> Warehouse robots and delivery fleets use auction-based task allocation and collision avoidance protocols'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multi-agent systems involve multiple autonomous agents interacting in a shared environment',
            'Each agent utility depends on its own action and the actions of other agents (joint action profile)',
            'Coordination can be centralized, decentralized, emergent, or negotiated via communication protocols',
            'Emergent behavior is a hallmark of MAS — simple local rules can produce complex global patterns',
            'Designing MAS requires balancing autonomy, communication cost, robustness, and social welfare'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the defining feature of a multi-agent system compared to a single-agent system?
Ans: Multiple autonomous agents interact in a shared environment, and each agent outcome depends on the actions of others.`,
            `Q2: What is emergent behavior in MAS?
Ans: Complex global patterns or behaviors that arise from simple local interactions among agents, without central control.`,
            `Q3: Why is a decentralized MAS more robust than a centralized one?
Ans: Because there is no single point of failure; individual agent failures do not collapse the entire system.`,
            `Q4: What is the core challenge of mechanism design in MAS?
Ans: Designing rules and incentives so that rational, self-interested agents naturally behave in ways that maximize collective social welfare.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multi-Agent Systems</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multi-Agent Systems")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'game-playing': {
      title: 'Game Playing AI',
      subtitle: 'Building superhuman agents for games',
      sections: [
        {
          heading: 'What is Game Playing AI?',
          text: '<strong>Game Playing AI</strong> refers to artificial intelligence systems designed to play games at expert or superhuman levels. This subfield of AI has historically driven major advances in search, learning, and reasoning, from chess to StarCraft.',
          list: [
            '<strong>Perfect information games:</strong> All players see the full game state (chess, Go, checkers) — dominated by search and evaluation',
            '<strong>Imperfect information games:</strong> Hidden state exists (poker, bridge, StarCraft) — requires belief modeling and bluffing',
            '<strong>Real-time games:</strong> Decisions must be made under time pressure (RTS, FPS, MOBA) — requires anytime algorithms and reactive control',
            '<strong>General game playing:</strong> AI must learn to play arbitrary games from rules alone without domain-specific tuning'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Game Playing AI</strong> refers to artificial intelligence systems designed to play games at expert or superhuman levels. This subfield of AI has historically driven major advances in search, learning, and reasoning, from chess to StarCraft. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Game Playing AI</strong> refers to artificial intelligence systems designed to play games at expert or superhuman levels. This subfield of AI has historically driven major advances in search, learning, and reasoning, from chess to StarCraft. <strong>Perfect information games:</strong> All players see the full game state (chess, Go, checkers) — dominated by search and evaluation <strong>Imperfect information games:</strong> Hidden state exists (poker, bridge, StarCraft) — requires belief modeling and bluffing <strong>Real-time games:</strong> Decisions must be made under time pressure (RTS, FPS, MOBA) — requires anytime algorithms and reactive control <strong>General game playing:</strong> AI must learn to play arbitrary games from rules alone without domain-specific tuning</p>',
            '<p>You use game playing ai when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Game Playing AI

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Game Playing AI sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A general game-playing pipeline combines search, evaluation, and learning in a feedback loop.',
          example: {
            title: 'Game Playing AI Pipeline',
            code: `Perceive → Decide → Act → Learn

Perceive:
  Extract features from game state
  (board, units, cards, screen pixels)

Decide:
  Search (MCTS, alpha-beta, brute force)
  Evaluate ( handcrafted heuristic / neural network )
  Select best move under computational budget

Act:
  Execute move in game environment

Learn:
  Update policy/value networks from outcomes
  (reinforcement learning, self-play, imitation)

Loop until terminal.`,
            output: 'Strong game AI balances search depth, evaluation accuracy, and learning efficiency.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Game Playing AI with Python',
            code: `from collections import deque

# Game Playing AI — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Different game genres demand fundamentally different AI architectures.',
          table: {
            headers: [
              'Game Type',
              'Key Challenge',
              'Primary Algorithm',
              'Landmark AI'
            ],
            rows: [
              [
                'Chess',
                'Deep tactics, vast search space',
                'Alpha-beta + evaluation function',
                'Deep Blue, Stockfish'
              ],
              [
                'Go',
                'Enormous branching, subtle strategy',
                'MCTS + deep neural nets',
                'AlphaGo, AlphaZero'
              ],
              [
                'Poker',
                'Hidden info, bluffing, risk',
                'Counterfactual regret minimization',
                'Libratus, Pluribus'
              ],
              [
                'StarCraft',
                'Real-time, partial observability, long horizon',
                'Hierarchical RL + planning',
                'AlphaStar'
              ],
              [
                'Dota 2',
                'Team coordination, continuous action space',
                'Self-play RL + LSTM',
                'OpenAI Five'
              ],
              [
                'General GGP',
                'No domain knowledge',
                'General MCTS + feature learning',
                'CADIA Player'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the same algorithm for every game type (fix: match the algorithm to the game structure — minimax for perfect info deterministic, CFR for imperfect info, MCTS for large branching)',
            'Mistake 2: Neglecting the evaluation function in favor of deeper search (fix: a good evaluation function is often more valuable than raw depth; invest in feature design or neural network training)',
            'Mistake 3: Ignoring computational and memory limits (fix: use iterative deepening, transposition tables, and efficient bitboard representations to maximize performance within hardware constraints)',
            'Mistake 4: Overfitting to a specific opponent (fix: train against diverse opponents or use population-based training to develop robust strategies that generalize)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Advances in game AI transfer directly to practical decision-making systems.',
          list: [
            '<strong>Strategic Planning:</strong> Military and business wargaming use game-tree search to evaluate competitive scenarios',
            '<strong>Education:</strong> Adaptive tutoring systems frame learning as a game, using AI to personalize challenge and feedback',
            '<strong>Reinforcement Learning Research:</strong> Games serve as controlled testbeds for RL algorithms before deployment in robotics or finance',
            '<strong>Testing and Verification:</strong> AI game players stress-test software by exploring state spaces humans might miss',
            '<strong>Entertainment:</strong> NPCs in modern video games use behavior trees, planning, and learning to create believable, challenging opponents'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Game Playing AI spans board games, video games, and general game playing benchmarks',
            'Perfect-information games rely on deep search + evaluation; imperfect-information games require belief modeling and equilibrium concepts',
            'Real-time games demand anytime algorithms that trade off deliberation time against decision quality',
            'Landmark systems include Deep Blue (chess), AlphaGo (Go), Libratus (poker), and AlphaStar (StarCraft)',
            'Lessons from game AI transfer to planning, robotics, finance, and strategic decision support'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the primary challenge that makes Go harder for AI than chess?
Ans: The vastly larger branching factor (≈250 vs ≈35) and the difficulty of crafting a reliable position evaluation function.`,
            `Q2: Why is poker harder for AI than chess?
Ans: Poker is an imperfect-information game with hidden cards, requiring belief modeling, bluffing, and game-theoretic equilibrium rather than pure search.`,
            `Q3: What is general game playing (GGP) and why is it important?
Ans: GGP requires AI to play arbitrary games given only the rules, testing true generality rather than domain-specific engineering.`,
            `Q4: Name three components of a typical game-playing AI pipeline.
Ans: Perception (state representation), decision (search + evaluation), and learning (policy/value improvement from experience).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Game Playing AI</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Game Playing AI")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
