// artificial intelligence — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js ai_module4.js

export const aiModule4Structure = {
  module4: {
    title: 'Module 4: Planning, Reasoning, and Decision Making',
    topics: [
      {
        id: 'planning',
        title: 'Planning in AI'
      },
      {
        id: 'probabilistic-reasoning',
        title: 'Probabilistic Reasoning'
      },
      {
        id: 'bayesian-networks',
        title: 'Bayesian Networks'
      },
      {
        id: 'markov-models',
        title: 'Markov Models'
      },
      {
        id: 'decision-theory',
        title: 'Decision Theory'
      },
      {
        id: 'utility-theory',
        title: 'Utility Theory'
      },
      {
        id: 'game-theory-ai',
        title: 'Game Theory in AI'
      },
      {
        id: 'nash-equilibrium',
        title: 'Nash Equilibrium'
      },
      {
        id: 'mechanism-design',
        title: 'Mechanism Design'
      },
      {
        id: 'social-choice',
        title: 'Social Choice Theory'
      }
    ]
  }
};

export const aiModule4Content = {
  module4: {
    planning: {
      title: 'Planning in AI',
      subtitle: 'From goals to action sequences',
      sections: [
        {
          heading: 'What is Planning in AI?',
          text: 'Planning is the process of synthesizing a sequence of actions that transforms an initial state into a goal state. Unlike search, planning operates at the level of <strong>action descriptions</strong> and <strong>state transitions</strong>, allowing the agent to reason about what to do before doing it. Classical planning assumes full observability, determinism, and a finite set of actions.',
          list: [
            '<strong>Classical Planning:</strong> Fully observable, deterministic, static, discrete — the STRIPS framework',
            '<strong>State-space planning:</strong> Search through the space of world states',
            '<strong>Plan-space planning:</strong> Search through the space of partial plans (e.g., partial-order planning)',
            '<strong>Hierarchical Task Networks (HTN):</strong> Decompose high-level tasks into primitive actions',
            '<strong>Temporal Planning:</strong> Handle durations, deadlines, and concurrent actions'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Planning is the process of synthesizing a sequence of actions that transforms an initial state into a goal state. Unlike search, planning operates at the level of <strong>action descriptions</strong> and <strong>state transitions</strong>, allowing the agent to reason about what to do before doing it. Classical planning assumes full observability, determinism, and a finite set of actions. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Planning is the process of synthesizing a sequence of actions that transforms an initial state into a goal state. Unlike search, planning operates at the level of <strong>action descriptions</strong> and <strong>state transitions</strong>, allowing the agent to reason about what to do before doing it. Classical planning assumes full observability, determinism, and a finite set of actions. <strong>Classical Planning:</strong> Fully observable, deterministic, static, discrete — the STRIPS framework <strong>State-space planning:</strong> Search through the space of world states <strong>Plan-space planning:</strong> Search through the space of partial plans (e.g., partial-order planning) <strong>Hierarchical Task Networks (HTN):</strong> Decompose high-level tasks into primitive actions <strong>Temporal Planning:</strong> Handle durations, deadlines, and concurrent actions</p>',
            '<p>You use planning in ai when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Planning in AI

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Planning in AI sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A planning problem in STRIPS is defined by initial state, goal conditions, and action operators with preconditions and effects.',
          example: {
            title: 'STRIPS Action Example (Block World)',
            code: `Action: PickUp(x)
  Precondition: OnTable(x) ∧ Clear(x) ∧ HandEmpty
  Add: Holding(x)
  Delete: OnTable(x), Clear(x), HandEmpty

Action: Stack(x, y)
  Precondition: Holding(x) ∧ Clear(y)
  Add: On(x, y), Clear(x), HandEmpty
  Delete: Holding(x), Clear(y)

State:
  On(A, Table), On(B, Table), On(C, A)
  Clear(B), Clear(C), HandEmpty

Goal:
  On(A, B), On(B, C)`,
            output: 'STRIPS operators specify what must be true before an action and what changes afterward.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Planning in AI with Python',
            code: `from collections import deque

# Planning in AI — BFS on a tiny grid graph
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
          text: 'Planning approaches differ in how they represent and search for solutions.',
          table: {
            headers: [
              'Approach',
              'Representation',
              'Search Space',
              'Strength',
              'Example'
            ],
            rows: [
              [
                'State-space',
                'World states',
                'States → actions → states',
                'Simple, general',
                'Forward/backward search'
              ],
              [
                'Plan-space (POP)',
                'Partial plans',
                'Plans with ordering constraints',
                'Handles subgoal interactions',
                'Partial-order planning'
              ],
              [
                'HTN',
                'Task decompositions',
                'Abstract tasks → primitive actions',
                'Captures expert knowledge',
                'SHOP, SHOP2 planners'
              ],
              [
                'GraphPlan',
                'Planning graph layers',
                'Mutex relations prune space',
                'Polynomial graph, exponential extraction',
                'GraphPlan algorithm'
              ],
              [
                'SATPlan',
                'Propositional logic',
                'Boolean satisfiability',
                'Leverages SAT solvers',
                'Blackbox planner'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing planning with search (fix: planning uses explicit action schemas and can reason at the symbolic level; search treats the problem as a black-box state graph)',
            'Mistake 2: Ignoring negative interactions between subgoals (fix: use partially ordered plans or goal regression to handle subgoal conflicts like the Sussman anomaly)',
            'Mistake 3: Assuming all planning is deterministic (fix: real-world planning must handle uncertainty, partial observability, and exogenous events — see MDPs and POMDPs)',
            'Mistake 4: Believing classical planners scale to real robotics (fix: classical planning is a foundation; practical systems combine it with execution monitoring and replanning)'
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
          text: 'Planning systems coordinate complex sequences of actions in dynamic environments.',
          list: [
            '<strong>Space missions:</strong> NASA uses automated planners (EUROPA) to schedule spacecraft activities and rover operations',
            '<strong>Manufacturing:</strong> Factory floor planners schedule machines, robots, and material flow to optimize throughput',
            '<strong>Logistics:</strong> Delivery companies use route and load planning to minimize fuel and time across fleets',
            '<strong>Robotics:</strong> Manipulation planners compute grasp sequences and motion plans for assembly tasks',
            '<strong>Project management:</strong> AI planners generate resource-constrained schedules for construction and software projects'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Planning synthesizes action sequences to achieve goals from an initial state',
            'STRIPS defines actions by preconditions, add lists, and delete lists',
            'State-space planning searches forward from the initial state or backward from goals',
            'Plan-space planning searches through partial plans with ordering constraints',
            'HTN planning decomposes complex tasks using domain knowledge'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the three components of a STRIPS operator?
Ans: Preconditions (what must be true), add list (what becomes true), and delete list (what becomes false).`,
            `Q2: What is the Sussman anomaly and why does it matter?
Ans: A planning problem where achieving one subgoal undoes another, revealing that independent subgoal achievement does not guarantee a valid plan.`,
            `Q3: How does GraphPlan achieve efficiency?
Ans: It builds a polynomial-size planning graph and uses mutex relations to prune impossible action combinations before searching for a plan.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Planning in AI</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Planning in AI")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'probabilistic-reasoning': {
      title: 'Probabilistic Reasoning',
      subtitle: 'Handling uncertainty with probability',
      sections: [
        {
          heading: 'What is Probabilistic Reasoning?',
          text: 'Probabilistic reasoning is the foundation of AI under uncertainty. When an agent cannot observe everything or when actions have stochastic outcomes, it must reason about <strong>degrees of belief</strong> rather than certainties. Probability theory provides a principled calculus for updating beliefs as evidence arrives, enabling rational decisions in noisy, incomplete, and dynamic worlds.',
          list: [
            '<strong>Prior probability P(X):</strong> Belief before seeing evidence',
            '<strong>Conditional probability P(X|Y):</strong> Belief about X given that Y is true',
            '<strong>Posterior probability P(X|E):</strong> Updated belief after observing evidence E',
            '<strong>Joint probability P(X,Y):</strong> Probability of two propositions together',
            '<strong>Independence and conditional independence:</strong> Simplify complex joint distributions'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Probabilistic reasoning is the foundation of AI under uncertainty. When an agent cannot observe everything or when actions have stochastic outcomes, it must reason about <strong>degrees of belief</strong> rather than certainties. Probability theory provides a principled calculus for updating beliefs as evidence arrives, enabling rational decisions in noisy, incomplete, and dynamic worlds. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Probabilistic reasoning is the foundation of AI under uncertainty. When an agent cannot observe everything or when actions have stochastic outcomes, it must reason about <strong>degrees of belief</strong> rather than certainties. Probability theory provides a principled calculus for updating beliefs as evidence arrives, enabling rational decisions in noisy, incomplete, and dynamic worlds. <strong>Prior probability P(X):</strong> Belief before seeing evidence <strong>Conditional probability P(X|Y):</strong> Belief about X given that Y is true <strong>Posterior probability P(X|E):</strong> Updated belief after observing evidence E <strong>Joint probability P(X,Y):</strong> Probability of two propositions together <strong>Independence and conditional independence:</strong> Simplify complex joint distributions</p>',
            '<p>You use probabilistic reasoning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Probabilistic Reasoning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Probabilistic Reasoning sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Bayes theorem is the engine of probabilistic inference, allowing belief updates from evidence.',
          example: {
            title: 'Bayes Theorem Application',
            code: `Bayes Theorem:
  P(H|E) = P(E|H) × P(H) / P(E)

Medical Diagnosis Example:
  P(Disease) = 0.01        (prior)
  P(Test+|Disease) = 0.95   (sensitivity)
  P(Test+|¬Disease) = 0.05 (false positive)

  P(Disease|Test+) =
    0.95 × 0.01 /
    (0.95×0.01 + 0.05×0.99)
    = 0.0095 / 0.059
    ≈ 0.161 (16.1%)`,
            output: 'Even with a positive test, the disease probability is only 16.1% due to low base rate.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Probabilistic Reasoning with Python',
            code: `from collections import deque

# Probabilistic Reasoning — BFS on a tiny grid graph
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
          text: 'Probabilistic reasoning differs from logical and fuzzy reasoning in how it handles uncertainty.',
          table: {
            headers: [
              'Framework',
              'Uncertainty Model',
              'Update Rule',
              'Output',
              'Best For'
            ],
            rows: [
              [
                'Logical (Classical)',
                'None — true/false/unknown',
                'Resolution, modus ponens',
                'Proof or failure',
                'Certain knowledge domains'
              ],
              [
                'Probabilistic',
                'Numeric probabilities',
                'Bayes theorem',
                'Posterior distribution',
                'Noisy, uncertain data'
              ],
              [
                'Fuzzy Logic',
                'Degree of membership',
                'Fuzzy operators',
                'Fuzzy set',
                'Vague linguistic concepts'
              ],
              [
                'Dempster-Shafer',
                'Belief and plausibility',
                'Dempster combination',
                'Interval [Bel, Pl]',
                'Explicit ignorance modeling'
              ],
              [
                'Possibility Theory',
                'Possibility/necessity',
                'Min/max rules',
                'Possibility distribution',
                'Qualitative uncertainty'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Confusing P(A|B) with P(B|A) — the prosecutor's fallacy (fix: always track what is given; P(E|H) is the likelihood, P(H|E) is the posterior)`,
            'Mistake 2: Ignoring the prior probability — base rate neglect (fix: the prior matters enormously; rare diseases remain unlikely even after positive tests)',
            'Mistake 3: Assuming independence when variables are correlated (fix: always check conditional dependence; independence assumptions must be justified)',
            'Mistake 4: Thinking exact probabilities are always needed (fix: qualitative probabilistic reasoning and bounded resources often suffice in practice)'
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
          text: 'Probabilistic reasoning powers systems that must act under incomplete information.',
          list: [
            '<strong>Medical diagnosis:</strong> Bayesian systems compute disease likelihoods from symptoms, test results, and patient history',
            '<strong>Spam filtering:</strong> Naive Bayes classifiers estimate P(spam|words) from training data with remarkable accuracy',
            '<strong>Speech recognition:</strong> Hidden Markov Models compute the most likely word sequence from acoustic signals',
            '<strong>Autonomous driving:</strong> Probabilistic filters (Kalman, particle) estimate vehicle state from noisy sensor fusion',
            '<strong>Financial risk:</strong> Bayesian networks model correlated risk factors for portfolio stress testing'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Probabilistic reasoning quantifies uncertainty with degrees of belief',
            'Bayes theorem updates prior beliefs with evidence to produce posterior beliefs',
            'Conditional independence simplifies joint probability distributions',
            'Base rate neglect is a common human error; AI systems must incorporate priors correctly',
            'Probabilistic reasoning underpins diagnosis, filtering, recognition, and prediction systems'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between prior and posterior probability?
Ans: Prior is the belief before seeing evidence; posterior is the updated belief after evidence is incorporated via Bayes theorem.`,
            `Q2: Why does a positive test for a rare disease not mean high probability of having the disease?
Ans: Because false positives from the large healthy population can outnumber true positives from the small diseased population.`,
            `Q3: What role does conditional independence play in probabilistic models?
Ans: It dramatically reduces the number of parameters needed to specify a joint distribution, making inference tractable.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Probabilistic Reasoning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Probabilistic Reasoning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bayesian-networks': {
      title: 'Bayesian Networks',
      subtitle: 'Compact representations of joint probability distributions',
      sections: [
        {
          heading: 'What are Bayesian Networks?',
          text: 'A <strong>Bayesian Network (BN)</strong> is a directed acyclic graph (DAG) where nodes represent random variables and edges represent direct probabilistic dependencies. Each node is associated with a <strong>Conditional Probability Table (CPT)</strong> that quantifies the effect of its parents on it. BNs compactly encode joint probability distributions by exploiting conditional independence, reducing exponential parameters to polynomial ones.',
          list: [
            '<strong>Structure (DAG):</strong> Nodes = variables; edges = direct causal or correlational influence',
            '<strong>Conditional Probability Tables (CPTs):</strong> P(node | parents) for each node',
            '<strong>Joint distribution:</strong> Factored as the product of local conditional probabilities',
            '<strong>d-separation:</strong> A graph criterion for determining conditional independence',
            '<strong>Inference:</strong> Exact (variable elimination, junction tree) and approximate (sampling, variational) methods'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Bayesian Network (BN)</strong> is a directed acyclic graph (DAG) where nodes represent random variables and edges represent direct probabilistic dependencies. Each node is associated with a <strong>Conditional Probability Table (CPT)</strong> that quantifies the effect of its parents on it. BNs compactly encode joint probability distributions by exploiting conditional independence, reducing exponential parameters to polynomial ones. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Bayesian Network (BN)</strong> is a directed acyclic graph (DAG) where nodes represent random variables and edges represent direct probabilistic dependencies. Each node is associated with a <strong>Conditional Probability Table (CPT)</strong> that quantifies the effect of its parents on it. BNs compactly encode joint probability distributions by exploiting conditional independence, reducing exponential parameters to polynomial ones. <strong>Structure (DAG):</strong> Nodes = variables; edges = direct causal or correlational influence <strong>Conditional Probability Tables (CPTs):</strong> P(node | parents) for each node <strong>Joint distribution:</strong> Factored as the product of local conditional probabilities <strong>d-separation:</strong> A graph criterion for determining conditional independence <strong>Inference:</strong> Exact (variable elimination, junction tree) and approximate (sampling, variational) methods</p>',
            '<p>You use bayesian networks when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bayesian Networks

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bayesian Networks sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The joint probability distribution represented by a Bayesian network factorizes according to the graph structure.',
          example: {
            title: 'Alarm Network Example',
            code: `Network Structure:
  Burglary → Alarm ← Earthquake
  Alarm → JohnCalls
  Alarm → MaryCalls

Joint Probability:
  P(B,E,A,J,M) =
    P(B) × P(E) × P(A|B,E) ×
    P(J|A) × P(M|A)

Parameters:
  Without BN: 2^5 - 1 = 31
  With BN:
    P(B): 1
    P(E): 1
    P(A|B,E): 4
    P(J|A): 2
    P(M|A): 2
    Total: 10`,
            output: 'The BN reduces parameters from 31 to 10 by exploiting independence structure.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bayesian Networks with Python',
            code: `from collections import deque

# Bayesian Networks — BFS on a tiny grid graph
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
          text: 'Bayesian networks differ from other graphical models in structure and semantics.',
          table: {
            headers: [
              'Model',
              'Graph Type',
              'Edges Mean',
              'Independence',
              'Best For'
            ],
            rows: [
              [
                'Bayesian Network',
                'Directed acyclic',
                'Causal/direct influence',
                'd-separation',
                'Causal reasoning, diagnosis'
              ],
              [
                'Markov Network',
                'Undirected',
                'Symmetric correlation',
                'Graph separation',
                'Spatial, relational data'
              ],
              [
                'Factor Graph',
                'Bipartite',
                'Factor dependencies',
                'Variable elimination',
                'Message passing algorithms'
              ],
              [
                'Neural Network',
                'Directed (often cyclic)',
                'Weighted computation',
                'None explicit',
                'Function approximation'
              ],
              [
                'Decision Network',
                'DAG + utility nodes',
                'Influence + value',
                'd-separation',
                'Decision making under uncertainty'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming edges imply causation (fix: an edge indicates statistical dependence, not necessarily causation; causal interpretation requires additional assumptions)',
            'Mistake 2: Creating cycles in the network (fix: Bayesian networks must be acyclic; cyclic dependencies require temporal models like Dynamic BNs)',
            'Mistake 3: Forgetting to condition on all parents in the CPT (fix: each CPT entry must specify P(node | all parents); missing parents violate the factorization)',
            'Mistake 4: Using exact inference on very large networks (fix: exact inference is NP-hard in general; use approximate methods like Gibbs sampling or loopy belief propagation for large nets)'
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
          text: 'Bayesian networks model complex domains where variables interact in structured ways.',
          list: [
            '<strong>Medical diagnosis:</strong> Pathfinder and similar systems diagnose diseases from symptoms and test results with explainable probabilities',
            `<strong>Troubleshooting:</strong> Microsoft's Office Assistant used BNs to diagnose printer and software problems from observed symptoms`,
            '<strong>Gene regulatory networks:</strong> BNs model interactions between genes from expression data to discover regulatory relationships',
            '<strong>Financial forecasting:</strong> BNs model correlated economic indicators for credit scoring and risk assessment',
            '<strong>Ecological modeling:</strong> BNs predict species distributions and ecosystem responses from environmental variables'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bayesian networks encode joint distributions as directed acyclic graphs with CPTs',
            'The joint probability factorizes as the product of local conditional probabilities',
            'd-separation determines which variables are conditionally independent given evidence',
            'Exact inference uses variable elimination or junction trees; approximate inference uses sampling',
            'Parameter count grows linearly with nodes and parents, not exponentially'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does a Bayesian network achieve compact representation of joint distributions?
Ans: By exploiting conditional independence encoded in the DAG structure, so each node only needs to condition on its parents rather than all other variables.`,
            `Q2: What is d-separation and why is it important?
Ans: d-separation is a graph-theoretic criterion that determines whether two sets of variables are conditionally independent given a third set, enabling efficient inference.`,
            `Q3: Why are Bayesian networks called "Bayesian"?
Ans: Because they use prior distributions (the CPTs) and update beliefs with evidence according to Bayesian probability theory.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bayesian Networks</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bayesian Networks")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'markov-models': {
      title: 'Markov Models',
      subtitle: 'Memoryless stochastic processes for sequences and decisions',
      sections: [
        {
          heading: 'What are Markov Models?',
          text: 'Markov models are a family of stochastic models that assume the <strong>Markov property</strong>: the future depends only on the present state, not on the past. This memoryless assumption simplifies inference and learning enormously, making Markov models tractable for sequences, decisions, and partially observable environments. They are the backbone of speech recognition, bioinformatics, reinforcement learning, and control systems.',
          list: [
            '<strong>Markov Chain:</strong> States and transition probabilities; models sequences without actions',
            '<strong>Hidden Markov Model (HMM):</strong> Observations emitted from hidden states; used for sequence labeling',
            '<strong>Markov Decision Process (MDP):</strong> Adds actions and rewards; foundation of reinforcement learning',
            '<strong>Partially Observable MDP (POMDP):</strong> States are hidden; agent reasons from observations and beliefs',
            '<strong>Dynamic Bayesian Network:</strong> Temporal extension of BNs with Markov structure'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Markov models are a family of stochastic models that assume the <strong>Markov property</strong>: the future depends only on the present state, not on the past. This memoryless assumption simplifies inference and learning enormously, making Markov models tractable for sequences, decisions, and partially observable environments. They are the backbone of speech recognition, bioinformatics, reinforcement learning, and control systems. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Markov models are a family of stochastic models that assume the <strong>Markov property</strong>: the future depends only on the present state, not on the past. This memoryless assumption simplifies inference and learning enormously, making Markov models tractable for sequences, decisions, and partially observable environments. They are the backbone of speech recognition, bioinformatics, reinforcement learning, and control systems. <strong>Markov Chain:</strong> States and transition probabilities; models sequences without actions <strong>Hidden Markov Model (HMM):</strong> Observations emitted from hidden states; used for sequence labeling <strong>Markov Decision Process (MDP):</strong> Adds actions and rewards; foundation of reinforcement learning <strong>Partially Observable MDP (POMDP):</strong> States are hidden; agent reasons from observations and beliefs <strong>Dynamic Bayesian Network:</strong> Temporal extension of BNs with Markov structure</p>',
            '<p>You use markov models when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Markov Models

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Markov Models sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Markov property and the forward algorithm for HMMs are central to Markov model inference.',
          example: {
            title: 'Hidden Markov Model Forward Algorithm',
            code: `Markov Property:
  P(Xt+1 | Xt, Xt-1, ..., X0) = P(Xt+1 | Xt)

Forward Algorithm (HMM):
  αt(i) = P(O1...Ot, Xt = si)

Initialization:
  α1(i) = πi × bi(O1)

Recursion:
  αt+1(j) = bj(Ot+1) × Σi αt(i) × aij

Termination:
  P(O1...OT) = Σi αT(i)

Where:
  π = initial state probabilities
  a = transition matrix
  b = emission probabilities`,
            output: 'The forward algorithm computes observation likelihood in O(N²T) time.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Markov Models with Python',
            code: `from collections import deque

# Markov Models — BFS on a tiny grid graph
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
          text: 'Markov models vary in what is observable and what decisions the agent can make.',
          table: {
            headers: [
              'Model',
              'States',
              'Observations',
              'Actions',
              'Reward',
              'Used For'
            ],
            rows: [
              [
                'Markov Chain',
                'Observable',
                'Same as state',
                'None',
                'None',
                'Sequence modeling, PageRank'
              ],
              [
                'HMM',
                'Hidden',
                'Observable emissions',
                'None',
                'None',
                'Speech, bioinformatics, NLP tagging'
              ],
              [
                'MDP',
                'Observable',
                'Same as state',
                'Yes',
                'Yes',
                'Reinforcement learning, control'
              ],
              [
                'POMDP',
                'Hidden',
                'Observable emissions',
                'Yes',
                'Yes',
                'Robotics, dialogue systems'
              ],
              [
                'Markov Random Field',
                'Observable',
                'Same as state',
                'None',
                'None',
                'Image segmentation, spatial modeling'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming the Markov property holds when history matters (fix: use higher-order Markov models or augment the state with memory of recent observations)',
            'Mistake 2: Confusing HMM state transitions with observations (fix: transitions model state evolution; emissions model observations from states — they are distinct probability distributions)',
            'Mistake 3: Thinking POMDPs are just MDPs with noisy sensors (fix: in POMDPs the agent maintains a belief distribution over states; the belief itself becomes the state space, which is continuous)',
            'Mistake 4: Forgetting that exact POMDP solutions are intractable for large problems (fix: use approximate methods like point-based value iteration or policy gradient methods)'
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
          text: 'Markov models are among the most widely deployed AI models in industry.',
          list: [
            '<strong>Speech recognition:</strong> HMMs model phoneme sequences and acoustic observations; modern systems augment with neural networks',
            '<strong>Natural language processing:</strong> Part-of-speech tagging and named entity recognition use HMMs and CRFs (MRF variants)',
            '<strong>Reinforcement learning:</strong> MDPs formalize the RL problem; Q-learning and policy gradient methods solve MDPs',
            '<strong>Robot navigation:</strong> POMDPs handle localization and navigation when the robot does not know its exact position',
            '<strong>Bioinformatics:</strong> HMMs model protein families (Pfam), gene finding (Genscan), and sequence alignment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Markov models assume the future depends only on the present, not the past',
            'Markov chains model state sequences; HMMs model hidden state sequences from observations',
            'MDPs add actions and rewards for decision-making under uncertainty',
            'POMDPs handle hidden states with observations, requiring belief-state planning',
            'The forward-backward and Viterbi algorithms enable efficient HMM inference'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the Markov property and why is it useful?
Ans: The future is conditionally independent of the past given the present; it reduces complexity from exponential in history to polynomial in states.`,
            `Q2: How does an HMM differ from a Markov chain?
Ans: In an HMM, states are hidden and only emissions are observed; in a Markov chain, states are directly observable.`,
            `Q3: Why are POMDPs harder than MDPs?
Ans: Because the agent does not know its true state; it must maintain a belief distribution over states, and the belief space is continuous even when the underlying state space is finite.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Markov Models</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Markov Models")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'decision-theory': {
      title: 'Decision Theory',
      subtitle: 'Choosing actions under uncertainty',
      sections: [
        {
          heading: 'What is Decision Theory?',
          text: 'Decision theory is the mathematical framework for making choices under uncertainty. It combines <strong>probability theory</strong> (to model uncertainty) with <strong>utility theory</strong> (to model preferences) to prescribe rational actions. An agent using decision theory selects the action that maximizes <strong>expected utility</strong> — the average utility weighted by the probabilities of possible outcomes. This normative framework underpins economics, AI, medicine, and engineering.',
          list: [
            '<strong>Decision problem:</strong> A set of actions, states of nature, outcomes, and a utility function',
            '<strong>Expected Utility (EU):</strong> EU(a) = Σ P(s) × U(outcome(a,s)) — the standard decision criterion',
            '<strong>Maximum Expected Utility (MEU) principle:</strong> Choose the action with highest expected utility',
            '<strong>Decision network (influence diagram):</strong> A graphical representation combining Bayesian networks with decision and utility nodes',
            '<strong>Value of information:</strong> The expected gain in utility from observing a variable before deciding'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Decision theory is the mathematical framework for making choices under uncertainty. It combines <strong>probability theory</strong> (to model uncertainty) with <strong>utility theory</strong> (to model preferences) to prescribe rational actions. An agent using decision theory selects the action that maximizes <strong>expected utility</strong> — the average utility weighted by the probabilities of possible outcomes. This normative framework underpins economics, AI, medicine, and engineering. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Decision theory is the mathematical framework for making choices under uncertainty. It combines <strong>probability theory</strong> (to model uncertainty) with <strong>utility theory</strong> (to model preferences) to prescribe rational actions. An agent using decision theory selects the action that maximizes <strong>expected utility</strong> — the average utility weighted by the probabilities of possible outcomes. This normative framework underpins economics, AI, medicine, and engineering. <strong>Decision problem:</strong> A set of actions, states of nature, outcomes, and a utility function <strong>Expected Utility (EU):</strong> EU(a) = Σ P(s) × U(outcome(a,s)) — the standard decision criterion <strong>Maximum Expected Utility (MEU) principle:</strong> Choose the action with highest expected utility <strong>Decision network (influence diagram):</strong> A graphical representation combining Bayesian networks with decision and utility nodes <strong>Value of information:</strong> The expected gain in utility from observing a variable before deciding</p>',
            '<p>You use decision theory when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Decision Theory

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Decision Theory sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Maximum Expected Utility principle is the foundation of rational decision-making under uncertainty.',
          example: {
            title: 'Expected Utility Calculation',
            code: `Decision: Whether to carry an umbrella

States:
  P(Rain) = 0.3
  P(No Rain) = 0.7

Actions and Utilities:
  U(Carry, Rain) = 70   (dry, but burdened)
  U(Carry, No Rain) = 40 (unnecessary burden)
  U(Don't Carry, Rain) = 0   (soaked)
  U(Don't Carry, No Rain) = 100 (comfortable)

Expected Utility:
  EU(Carry) = 0.3×70 + 0.7×40 = 49
  EU(Don't Carry) = 0.3×0 + 0.7×100 = 70

MEU Decision:
  Choose Don't Carry (EU = 70 > 49)`,
            output: `The MEU action depends on both probabilities and the agent's utility function.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Decision Theory with Python',
            code: `from collections import deque

# Decision Theory — BFS on a tiny grid graph
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
          text: 'Decision-making frameworks differ in how they handle uncertainty and preferences.',
          table: {
            headers: [
              'Framework',
              'Uncertainty',
              'Preferences',
              'Criterion',
              'Use Case'
            ],
            rows: [
              [
                'Decision Theory',
                'Probabilities',
                'Utilities',
                'Maximize EU',
                'Rational individual choice'
              ],
              [
                'Game Theory',
                'Strategic (other agents)',
                'Utilities',
                'Equilibrium strategies',
                'Multi-agent competition'
              ],
              [
                'Robust Optimization',
                'Worst-case sets',
                'Cost functions',
                'Minimize worst-case',
                'Safety-critical systems'
              ],
              [
                'Risk Analysis',
                'Probabilities + scenarios',
                'Multiple objectives',
                'Tradeoff curves',
                'Engineering design'
              ],
              [
                'Behavioral Economics',
                'Biased probabilities',
                'Non-EU preferences',
                'Descriptive models',
                'Understanding human choice'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Maximizing expected monetary value instead of expected utility (fix: money has diminishing marginal utility; a risk-averse agent should use a concave utility function)',
            'Mistake 2: Ignoring the value of information (fix: always consider whether gathering more evidence before acting increases expected utility enough to justify the cost)',
            'Mistake 3: Assuming people actually maximize expected utility (fix: decision theory is normative, not descriptive; humans exhibit systematic biases studied in behavioral economics)',
            'Mistake 4: Confusing risk aversion with loss aversion (fix: risk aversion is curvature of utility function; loss aversion is an asymmetric weighting of losses vs gains)'
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
          text: 'Decision theory provides the formal basis for automated and assisted decision-making.',
          list: [
            '<strong>Medical treatment selection:</strong> Decision trees and influence diagrams compute optimal treatments given patient data and outcome probabilities',
            '<strong>Autonomous vehicles:</strong> Decision networks evaluate action risks (brake, steer, accelerate) under uncertain traffic predictions',
            '<strong>Investment portfolio management:</strong> Expected utility maximization balances risk and return according to investor preferences',
            '<strong>Agricultural planning:</strong> Farmers use decision analysis to choose crops given uncertain weather and market prices',
            '<strong>Engineering design:</strong> Decision under uncertainty guides safety margins and redundancy in aircraft, bridges, and nuclear systems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Decision theory prescribes rational choices by maximizing expected utility',
            'A decision problem consists of actions, states, probabilities, and a utility function',
            'The MEU principle selects the action with highest probability-weighted utility',
            'Decision networks graphically combine probabilistic inference with utility maximization',
            'The value of information quantifies the benefit of observing a variable before acting'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the Maximum Expected Utility principle?
Ans: A rational agent should choose the action that maximizes the expected value of its utility function over possible outcomes.`,
            `Q2: How does a decision network differ from a Bayesian network?
Ans: A decision network adds decision nodes (actions the agent can choose) and utility nodes (values of outcomes) to a Bayesian network.`,
            `Q3: What is the value of perfect information?
Ans: The difference between the expected utility with free observation of a variable and the expected utility without that observation.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Decision Theory</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Decision Theory")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'utility-theory': {
      title: 'Utility Theory',
      subtitle: 'Quantifying preferences and rational choice',
      sections: [
        {
          heading: 'What is Utility Theory?',
          text: 'Utility theory provides a formal framework for representing and reasoning about <strong>preferences</strong>. It assigns a numeric <strong>utility</strong> to each possible outcome, such that preferred outcomes have higher utilities. Under certain axioms (completeness, transitivity, continuity, independence), preferences can be represented by a utility function, and rational choices correspond to maximizing expected utility. This bridges subjective preference with mathematical optimization.',
          list: [
            '<strong>Utility function U(o):</strong> Maps outcomes to real numbers representing preference strength',
            '<strong>Expected utility:</strong> EU = Σ P(oᵢ) × U(oᵢ) — the criterion for rational choice under uncertainty',
            '<strong>Risk attitudes:</strong> Risk-averse (concave U), risk-neutral (linear U), risk-seeking (convex U)',
            '<strong>Multi-attribute utility:</strong> Decomposes utility over multiple dimensions (money, health, time)',
            `<strong>Preference elicitation:</strong> Methods to infer a person's utility function from their choices`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Utility theory provides a formal framework for representing and reasoning about <strong>preferences</strong>. It assigns a numeric <strong>utility</strong> to each possible outcome, such that preferred outcomes have higher utilities. Under certain axioms (completeness, transitivity, continuity, independence), preferences can be represented by a utility function, and rational choices correspond to maximizing expected utility. This bridges subjective preference with mathematical optimization. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, Utility theory provides a formal framework for representing and reasoning about <strong>preferences</strong>. It assigns a numeric <strong>utility</strong> to each possible outcome, such that preferred outcomes have higher utilities. Under certain axioms (completeness, transitivity, continuity, independence), preferences can be represented by a utility function, and rational choices correspond to maximizing expected utility. This bridges subjective preference with mathematical optimization. <strong>Utility function U(o):</strong> Maps outcomes to real numbers representing preference strength <strong>Expected utility:</strong> EU = Σ P(oᵢ) × U(oᵢ) — the criterion for rational choice under uncertainty <strong>Risk attitudes:</strong> Risk-averse (concave U), risk-neutral (linear U), risk-seeking (convex U) <strong>Multi-attribute utility:</strong> Decomposes utility over multiple dimensions (money, health, time) <strong>Preference elicitation:</strong> Methods to infer a person's utility function from their choices</p>`,
            '<p>You use utility theory when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Utility Theory

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Utility Theory sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The von Neumann-Morgenstern expected utility theorem states that if preferences satisfy four axioms, they can be represented by a utility function unique up to positive affine transformation.',
          example: {
            title: 'Risk Attitudes and Utility Curves',
            code: `Utility Functions for Wealth (w):

Risk-Averse (Concave):
  U(w) = √w
  EU of gamble < U of expected value

Risk-Neutral (Linear):
  U(w) = w
  EU of gamble = U of expected value

Risk-Seeking (Convex):
  U(w) = w²
  EU of gamble > U of expected value

Example: Gamble G = {0.5: $0, 0.5: $100}
  Expected value = $50

  Risk-averse: EU = 0.5×√0 + 0.5×√100 = 5
    U(50) = √50 ≈ 7.07 > 5 → prefers $50 for sure

  Risk-neutral: EU = 0.5×0 + 0.5×100 = 50
    U(50) = 50 → indifferent

  Risk-seeking: EU = 0.5×0 + 0.5×10000 = 5000
    U(50) = 2500 < 5000 → prefers gamble`,
            output: 'Risk attitude determines whether an agent accepts or rejects fair gambles.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Utility Theory with Python',
            code: `from collections import deque

# Utility Theory — BFS on a tiny grid graph
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
          text: 'Utility theory concepts are often confused with related ideas in economics and psychology.',
          table: {
            headers: [
              'Concept',
              'Definition',
              'Measurement',
              'Agent Type',
              'Example'
            ],
            rows: [
              [
                'Utility',
                'Preference strength over outcomes',
                'Ordinal or cardinal',
                'Rational agent',
                'U(health) > U(wealth)'
              ],
              [
                'Value',
                'Worth without uncertainty',
                'Direct assessment',
                'Deterministic choice',
                'Value of a meal'
              ],
              [
                'Reward',
                'Feedback signal for learning',
                'Scalar from environment',
                'RL agent',
                '+1 for success'
              ],
              [
                'Q-Value',
                'Expected return from state-action',
                'Learned from experience',
                'RL agent',
                'Q(s,a) = 5.3'
              ],
              [
                'Happiness (Psychology)',
                'Subjective well-being',
                'Self-report',
                'Human',
                'Life satisfaction score'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming utility is proportional to money (fix: utility is typically concave in wealth — the millionth dollar matters less than the first)',
            'Mistake 2: Confusing ordinal and cardinal utility (fix: ordinal ranks preferences; cardinal measures preference strength. Only cardinal utility supports expected utility calculations)',
            'Mistake 3: Thinking utility is objectively measurable (fix: utility is a representation of preferences, not a physical quantity; it is unique only up to positive affine transformation)',
            'Mistake 4: Using a single utility function for all stakeholders (fix: different agents have different utility functions; multi-agent systems require aggregation mechanisms like social choice)'
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
          text: 'Utility theory underpins personalized recommendation, negotiation, and resource allocation systems.',
          list: [
            '<strong>Personalized recommendations:</strong> Systems infer user utility functions from behavior to rank movies, products, and news articles',
            '<strong>Medical decision support:</strong> Quality-Adjusted Life Years (QALYs) combine health outcomes and longevity into a single utility metric',
            '<strong>Autonomous negotiation:</strong> Trading agents use utility functions to evaluate offers and reach mutually beneficial agreements',
            '<strong>Environmental policy:</strong> Cost-benefit analysis attempts to monetize and compare utilities across economic, health, and ecological outcomes',
            '<strong>Game design:</strong> Utility functions model player preferences to balance challenge, reward, and engagement'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Utility theory formalizes preferences as numeric functions over outcomes',
            'Expected utility combines probabilities with utilities for decision-making under uncertainty',
            'Risk aversion corresponds to a concave utility function; risk neutrality to linear; risk seeking to convex',
            'The von Neumann-Morgenstern axioms justify representing preferences by an expected utility function',
            'Utility is subjective and unique only up to positive affine transformation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is a risk-averse agent unwilling to accept a "fair" gamble?
Ans: Because the disutility from losing outweighs the utility from winning due to the concave shape of the utility function.`,
            `Q2: What does it mean that utility is "unique up to positive affine transformation"?
Ans: If U represents preferences, so does a×U + b for any a > 0 and any b; utility ratios and differences are not meaningful, only rankings of expected utilities.`,
            `Q3: How does multi-attribute utility theory simplify complex decisions?
Ans: It decomposes utility over multiple dimensions into additive or multiplicative functions of single-attribute utilities, reducing the elicitation burden.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Utility Theory</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Utility Theory")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'game-theory-ai': {
      title: 'Game Theory in AI',
      subtitle: 'Strategic reasoning with multiple agents',
      sections: [
        {
          heading: 'What is Game Theory in AI?',
          text: `Game theory studies how <strong>multiple rational agents</strong> interact when each agent's outcome depends not only on its own actions but also on the actions of others. Unlike decision theory (single agent against nature), game theory models <strong>strategic interdependence</strong>. AI uses game theory for multi-agent systems, adversarial planning, mechanism design, and understanding human behavior in competitive and cooperative settings.`,
          list: [
            '<strong>Normal-form games:</strong> Simultaneous moves represented by payoff matrices',
            '<strong>Extensive-form games:</strong> Sequential moves represented by game trees',
            `<strong>Zero-sum games:</strong> One agent's gain is another's loss (e.g., chess, poker)`,
            `<strong>Non-zero-sum games:</strong> Mutual gain or loss is possible (e.g., Prisoner's Dilemma)`,
            '<strong>Mixed strategies:</strong> Probabilistic action choices to prevent exploitation'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Game theory studies how <strong>multiple rational agents</strong> interact when each agent's outcome depends not only on its own actions but also on the actions of others. Unlike decision theory (single agent against nature), game theory models <strong>strategic interdependence</strong>. AI uses game theory for multi-agent systems, adversarial planning, mechanism design, and understanding human behavior in competitive and cooperative settings. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, Game theory studies how <strong>multiple rational agents</strong> interact when each agent's outcome depends not only on its own actions but also on the actions of others. Unlike decision theory (single agent against nature), game theory models <strong>strategic interdependence</strong>. AI uses game theory for multi-agent systems, adversarial planning, mechanism design, and understanding human behavior in competitive and cooperative settings. <strong>Normal-form games:</strong> Simultaneous moves represented by payoff matrices <strong>Extensive-form games:</strong> Sequential moves represented by game trees <strong>Zero-sum games:</strong> One agent's gain is another's loss (e.g., chess, poker) <strong>Non-zero-sum games:</strong> Mutual gain or loss is possible (e.g., Prisoner's Dilemma) <strong>Mixed strategies:</strong> Probabilistic action choices to prevent exploitation</p>`,
            '<p>You use game theory in ai when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Game Theory in AI

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Game Theory in AI sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `A game in normal form is defined by players, action sets, and payoff functions. The Prisoner's Dilemma illustrates the tension between individual and collective rationality.`,
          example: {
            title: `Prisoner's Dilemma Payoff Matrix`,
            code: `Players: Alice and Bob
Actions: Cooperate (C) or Defect (D)

Payoff Matrix (Alice, Bob):
               Bob: C      Bob: D
Alice: C     (3, 3)      (0, 5)
Alice: D     (5, 0)      (1, 1)

Analysis:
  For Alice:
    If Bob cooperates: D gives 5 > C gives 3
    If Bob defects:    D gives 1 > C gives 0
  → Alice should always defect (dominant strategy)

  Same for Bob.

Nash Equilibrium: (D, D) → payoff (1, 1)
Pareto Optimal:   (C, C) → payoff (3, 3)

Dilemma: Individual rationality leads
to collectively worse outcome.`,
            output: `The Prisoner's Dilemma shows that Nash equilibrium need not be Pareto optimal.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Game Theory in AI with Python',
            code: `from collections import deque

# Game Theory in AI — BFS on a tiny grid graph
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
          text: 'Game types differ in timing, information, and payoff structure.',
          table: {
            headers: [
              'Game Type',
              'Moves',
              'Information',
              'Payoff Structure',
              'Example'
            ],
            rows: [
              [
                'Normal-form',
                'Simultaneous',
                'Complete or incomplete',
                'Any',
                'Rock-paper-scissors'
              ],
              [
                'Extensive-form',
                'Sequential',
                'Perfect or imperfect',
                'Any',
                'Chess, negotiations'
              ],
              [
                'Zero-sum',
                'Any',
                'Any',
                'Sum of payoffs = 0',
                'Chess, poker (approx)'
              ],
              [
                'Cooperative',
                'Any',
                'Any',
                'Transferable utility',
                'Bargaining, coalition formation'
              ],
              [
                'Repeated',
                'Multiple rounds',
                'Any',
                'Any',
                `Iterated Prisoner's Dilemma`
              ],
              [
                'Stochastic game',
                'Sequential',
                'Any',
                'State-dependent',
                'Multi-agent reinforcement learning'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming all games are zero-sum (fix: most real-world interactions allow mutual gain or mutual loss; zero-sum is a special case)',
            `Mistake 2: Believing rational agents always cooperate (fix: in one-shot Prisoner's Dilemma, defection is the dominant strategy; cooperation requires repeated interaction or enforceable contracts)`,
            'Mistake 3: Confusing Nash equilibrium with optimal social outcomes (fix: Nash equilibrium describes stable strategic choices, not necessarily efficiency or fairness)',
            'Mistake 4: Ignoring mixed strategies (fix: many games have no pure-strategy equilibrium; randomization is essential for stability in games like matching pennies)'
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
          text: 'Game theory shapes multi-agent AI systems and strategic interaction design.',
          list: [
            '<strong>Ad auctions:</strong> Google and Facebook use game-theoretic auction designs (GSP, VCG) to sell ad slots to competing advertisers',
            `<strong>Traffic routing:</strong> Self-driving cars use game-theoretic models to predict and respond to other vehicles' behavior`,
            '<strong>Security games:</strong> AI systems (ARMOR, IRIS) allocate security resources at airports and ports using Stackelberg game models',
            '<strong>Network protocols:</strong> TCP congestion control and wireless channel allocation use game-theoretic equilibrium concepts',
            '<strong>Multi-agent RL:</strong> Stochastic games generalize MDPs to multiple learning agents with interdependent rewards'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Game theory models strategic interactions where agents' payoffs depend on each other's actions`,
            'Normal-form games represent simultaneous moves; extensive-form represents sequential moves',
            'Zero-sum games have opposed interests; non-zero-sum games allow mutual benefit or harm',
            `A dominant strategy is optimal regardless of opponents' choices; not all games have one`,
            `The Prisoner's Dilemma illustrates how individual rationality can lead to collectively suboptimal outcomes`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does game theory differ from decision theory?
Ans: Decision theory models a single agent against an environment with fixed probabilities; game theory models multiple rational agents whose choices affect each other.`,
            `Q2: What is a dominant strategy?
Ans: A strategy that is optimal for a player no matter what strategies the other players choose.`,
            `Q3: Why does the one-shot Prisoner's Dilemma not result in cooperation?
Ans: Because defection is a dominant strategy for both players; each player individually benefits from defecting regardless of the other's choice.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Game Theory in AI</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Game Theory in AI")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'nash-equilibrium': {
      title: 'Nash Equilibrium',
      subtitle: 'Stable strategy profiles in strategic games',
      sections: [
        {
          heading: 'What is Nash Equilibrium?',
          text: 'A <strong>Nash Equilibrium</strong> is a strategy profile (one strategy for each player) such that no player can benefit by unilaterally changing their own strategy, given the strategies of the other players. It is the central solution concept in game theory, representing a <strong>stable state</strong> where everyone is doing the best they can, given what everyone else is doing. Nash proved that every finite game has at least one Nash equilibrium in mixed strategies.',
          list: [
            '<strong>Pure-strategy Nash equilibrium:</strong> Each player plays a single deterministic action',
            '<strong>Mixed-strategy Nash equilibrium:</strong> Players randomize over actions with specific probabilities',
            `<strong>Best response:</strong> A strategy that maximizes a player's payoff given others' strategies`,
            `<strong>Nash equilibrium condition:</strong> Every player's strategy is a best response to the others`,
            '<strong>Existence theorem:</strong> Every finite game has at least one Nash equilibrium (Nash, 1950)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Nash Equilibrium</strong> is a strategy profile (one strategy for each player) such that no player can benefit by unilaterally changing their own strategy, given the strategies of the other players. It is the central solution concept in game theory, representing a <strong>stable state</strong> where everyone is doing the best they can, given what everyone else is doing. Nash proved that every finite game has at least one Nash equilibrium in mixed strategies. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, A <strong>Nash Equilibrium</strong> is a strategy profile (one strategy for each player) such that no player can benefit by unilaterally changing their own strategy, given the strategies of the other players. It is the central solution concept in game theory, representing a <strong>stable state</strong> where everyone is doing the best they can, given what everyone else is doing. Nash proved that every finite game has at least one Nash equilibrium in mixed strategies. <strong>Pure-strategy Nash equilibrium:</strong> Each player plays a single deterministic action <strong>Mixed-strategy Nash equilibrium:</strong> Players randomize over actions with specific probabilities <strong>Best response:</strong> A strategy that maximizes a player's payoff given others' strategies <strong>Nash equilibrium condition:</strong> Every player's strategy is a best response to the others <strong>Existence theorem:</strong> Every finite game has at least one Nash equilibrium (Nash, 1950)</p>`,
            '<p>You use nash equilibrium when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Nash Equilibrium

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Nash Equilibrium sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `In a Nash equilibrium, each player's strategy is a best response to the strategies of all other players.`,
          example: {
            title: 'Computing a Mixed-Strategy Nash Equilibrium',
            code: `Matching Pennies:
  Row player wants to match; Column wants to mismatch.

        Column: H    Column: T
Row: H   (1, -1)   (-1, 1)
Row: T   (-1, 1)    (1, -1)

No pure-strategy equilibrium exists.

Mixed-strategy equilibrium:
  Let Row play H with probability p.
  Column's expected payoff for H:
    EU_C(H) = p(-1) + (1-p)(1) = 1 - 2p
  Column's expected payoff for T:
    EU_C(T) = p(1) + (1-p)(-1) = 2p - 1

  For Column to be indifferent (best response):
    1 - 2p = 2p - 1  →  p = 0.5

  By symmetry, Column plays H with q = 0.5.

Nash Equilibrium: Both players randomize 50/50.`,
            output: 'In mixed equilibria, each player makes the others indifferent between their pure strategies.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Nash Equilibrium with Python',
            code: `from collections import deque

# Nash Equilibrium — BFS on a tiny grid graph
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
          text: 'Nash equilibrium is one of many solution concepts; others refine or generalize it.',
          table: {
            headers: [
              'Solution Concept',
              'Definition',
              'Existence',
              'Refinement',
              'Best For'
            ],
            rows: [
              [
                'Nash Equilibrium',
                'No unilateral profitable deviation',
                'Always (mixed)',
                'None',
                'General games'
              ],
              [
                'Dominant Strategy Equilibrium',
                'Strategy optimal regardless of others',
                'Not always',
                'Stronger than Nash',
                'Simple games'
              ],
              [
                'Pareto Optimality',
                'No one can improve without hurting another',
                'Always exists',
                'Not a strategy concept',
                'Efficiency benchmarking'
              ],
              [
                'Subgame Perfect Equilibrium',
                'Nash in every subgame',
                'Always (finite)',
                'Eliminates non-credible threats',
                'Sequential games'
              ],
              [
                'Correlated Equilibrium',
                'Joint distribution over strategy profiles',
                'Always',
                'Weaker than Nash',
                'Mediated games'
              ],
              [
                'Bayesian Nash Equilibrium',
                'Nash under incomplete information',
                'Always',
                'Harsanyi transformation',
                'Games with private types'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Believing Nash equilibrium is always unique (fix: many games have multiple Nash equilibria; coordination games and Battle of the Sexes are classic examples)',
            `Mistake 2: Thinking Nash equilibrium requires players to know each other's strategies (fix: in equilibrium, strategies are stable; players need not explicitly coordinate, but each must correctly anticipate the others)`,
            `Mistake 3: Assuming Nash equilibrium is socially optimal (fix: the Prisoner's Dilemma shows Nash equilibrium can be Pareto inferior to other outcomes)`,
            'Mistake 4: Concluding that rational players always reach equilibrium (fix: equilibrium is a prediction, not a process; learning, fictitious play, and evolutionary dynamics study how equilibrium might emerge)'
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
          text: 'Nash equilibrium predicts stable outcomes in competitive and cooperative interactions.',
          list: [
            '<strong>Economic competition:</strong> Oligopoly models (Cournot, Bertrand) use Nash equilibrium to predict pricing and output among competing firms',
            '<strong>Traffic flow:</strong> Wardrop equilibrium (a Nash analog) predicts route choices when drivers selfishly minimize travel time',
            '<strong>Resource allocation:</strong> Cloud computing platforms use equilibrium concepts to price and allocate virtual machines among competing users',
            '<strong>Evolutionary biology:</strong> Evolutionarily stable strategies are refinements of Nash equilibrium in biological competition',
            '<strong>Auction design:</strong> Bidding strategies in first-price and second-price auctions are analyzed as Nash equilibria'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Nash equilibrium is a strategy profile where no player benefits from unilateral deviation',
            'Every finite game has at least one Nash equilibrium in mixed strategies',
            `A best response is a strategy that maximizes payoff given others' strategies`,
            'In mixed-strategy equilibrium, each player randomizes to make others indifferent',
            'Nash equilibrium may be unique, multiple, or Pareto suboptimal'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What defines a Nash equilibrium?
Ans: A strategy profile where each player's strategy is a best response to the strategies of all other players — no one can gain by changing alone.`,
            `Q2: Why do we need mixed strategies?
Ans: Because some games (like Matching Pennies) have no pure-strategy Nash equilibrium; mixed strategies guarantee existence.`,
            `Q3: What is the difference between Nash equilibrium and Pareto optimality?
Ans: Nash equilibrium is about stability (no one wants to deviate); Pareto optimality is about efficiency (no one can improve without hurting another). A Nash equilibrium need not be Pareto optimal.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Nash Equilibrium</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Nash Equilibrium")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'mechanism-design': {
      title: 'Mechanism Design',
      subtitle: 'Designing rules to achieve desired outcomes',
      sections: [
        {
          heading: 'What is Mechanism Design?',
          text: 'Mechanism design is the <strong>engineering side</strong> of game theory: instead of analyzing given games, we design the rules of the game (the mechanism) to achieve a desired outcome — even when participants act selfishly. The designer knows the agents have private information and will play strategically, so the mechanism must <strong>incentivize truthfulness</strong> or guide behavior toward socially optimal results. Applications include auctions, voting systems, market design, and resource allocation.',
          list: [
            '<strong>Direct revelation mechanism:</strong> Agents report private information; the mechanism computes the outcome',
            '<strong>Incentive compatibility:</strong> Truthful reporting is a dominant or equilibrium strategy',
            '<strong>Individual rationality:</strong> Participation is voluntary — agents must not lose by joining',
            '<strong>Efficiency:</strong> The mechanism maximizes total welfare or achieves a target allocation',
            '<strong>Revenue maximization:</strong> The designer maximizes payments collected (e.g., auctioneer revenue)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Mechanism design is the <strong>engineering side</strong> of game theory: instead of analyzing given games, we design the rules of the game (the mechanism) to achieve a desired outcome — even when participants act selfishly. The designer knows the agents have private information and will play strategically, so the mechanism must <strong>incentivize truthfulness</strong> or guide behavior toward socially optimal results. Applications include auctions, voting systems, market design, and resource allocation. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Mechanism design is the <strong>engineering side</strong> of game theory: instead of analyzing given games, we design the rules of the game (the mechanism) to achieve a desired outcome — even when participants act selfishly. The designer knows the agents have private information and will play strategically, so the mechanism must <strong>incentivize truthfulness</strong> or guide behavior toward socially optimal results. Applications include auctions, voting systems, market design, and resource allocation. <strong>Direct revelation mechanism:</strong> Agents report private information; the mechanism computes the outcome <strong>Incentive compatibility:</strong> Truthful reporting is a dominant or equilibrium strategy <strong>Individual rationality:</strong> Participation is voluntary — agents must not lose by joining <strong>Efficiency:</strong> The mechanism maximizes total welfare or achieves a target allocation <strong>Revenue maximization:</strong> The designer maximizes payments collected (e.g., auctioneer revenue)</p>',
            '<p>You use mechanism design when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Mechanism Design

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Mechanism Design sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Vickrey-Clarke-Groves (VCG) mechanism is the canonical truthful mechanism for social welfare maximization.',
          example: {
            title: 'VCG Mechanism Example (Public Project)',
            code: `Setting: Decide whether to build a bridge.
  Cost = $90. Three agents report valuations.

True valuations:
  v1 = 40, v2 = 30, v3 = 20

Outcome rule (efficient):
  Build if Σ vi ≥ Cost
  40 + 30 + 20 = 90 ≥ 90 → Build

Payments (Clarke pivot rule):
  Each pays the externality they impose
  on others.

Agent 1's payment:
  Without 1: 30 + 20 = 50 < 90 → Not build
  Social welfare without 1: 50
  Social welfare others get with 1: 90 - 40 = 50
  Externality: 50 - 50 = 0 → Pay 0

Agent 2's payment:
  Without 2: 40 + 20 = 60 < 90 → Not build
  Externality: 60 - (90-30) = 0 → Pay 0

Agent 3's payment:
  Without 3: 40 + 30 = 70 < 90 → Not build
  Externality: 70 - (90-20) = 0 → Pay 0

Result: All truthfully report; bridge built; no payments.`,
            output: 'VCG makes truthful reporting a dominant strategy while achieving efficient outcomes.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Mechanism Design with Python',
            code: `from collections import deque

# Mechanism Design — BFS on a tiny grid graph
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
          text: 'Mechanism design objectives often conflict; no mechanism can satisfy all desirable properties simultaneously.',
          table: {
            headers: [
              'Property',
              'Definition',
              'Tradeoff',
              'Achieved By'
            ],
            rows: [
              [
                'Truthfulness',
                'Dominant strategy to report truth',
                'May conflict with budget balance',
                'VCG, second-price auction'
              ],
              [
                'Efficiency',
                'Maximizes total welfare',
                'May conflict with revenue',
                'VCG, competitive equilibrium'
              ],
              [
                'Budget Balance',
                'Payments sum to zero or cost',
                'May conflict with truthfulness',
                'Impossible with efficiency + truthfulness (Green-Laffont)'
              ],
              [
                'Individual Rationality',
                'Agents benefit from participating',
                'May limit feasible outcomes',
                'VCG satisfies this'
              ],
              [
                'Fairness',
                'Equitable treatment of agents',
                'May conflict with efficiency',
                'Equal division, envy-free mechanisms'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming truthfulness is always achievable (fix: the Gibbard-Satterthwaite theorem shows that with three or more alternatives and unrestricted preferences, no non-dictatorial voting mechanism is strategyproof)',
            'Mistake 2: Confusing first-price and second-price auctions (fix: first-price requires bidders to shade bids below true value; second-price (Vickrey) is truthful — bid your true value)',
            `Mistake 3: Ignoring computational constraints in mechanism design (fix: VCG requires solving an optimization problem for each agent's absence; for complex problems, this may be intractable)`,
            'Mistake 4: Believing mechanism design only applies to auctions (fix: it applies to voting, matching markets, kidney exchanges, spectrum allocation, and any setting with private information)'
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
          text: 'Mechanism design shapes real markets and institutions that billions of people interact with.',
          list: [
            `<strong>Online advertising:</strong> Google's AdWords uses generalized second-price (GSP) auctions, a variant of VCG, to sell billions of ad impressions daily`,
            '<strong>Spectrum auctions:</strong> Governments use combinatorial auction mechanisms to sell radio spectrum to telecom companies efficiently',
            '<strong>Kidney exchanges:</strong> Mechanism design optimizes cycles and chains of paired kidney donations across incompatible donor-patient pairs',
            '<strong>School choice:</strong> Deferred acceptance (Gale-Shapley) mechanisms assign students to schools based on preferences without incentives to misreport',
            '<strong>Ride-sharing pricing:</strong> Dynamic pricing mechanisms balance supply and demand while incentivizing drivers to serve high-demand areas'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Mechanism design creates rules so that selfish agents produce socially desirable outcomes',
            'Truthful mechanisms incentivize agents to reveal private information honestly',
            'VCG is truthful and efficient but may not be budget-balanced',
            'Impossibility results (Gibbard-Satterthwaite, Green-Laffont) show fundamental limits',
            'Applications span auctions, matching markets, voting, and resource allocation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the revelation principle and why is it important?
Ans: Any mechanism can be transformed into an equivalent direct revelation mechanism where truth-telling is optimal; this simplifies mechanism design analysis.`,
            `Q2: Why is the second-price auction truthful while the first-price auction is not?
Ans: In a second-price auction, the winner pays the second-highest bid; bidding your true value is a dominant strategy because overbidding risks overpaying and underbidding risks losing.`,
            `Q3: What does the Gibbard-Satterthwaite theorem imply about voting?
Ans: With three or more candidates and unrestricted preferences, no voting rule is strategyproof unless it is dictatorial — meaning voters sometimes have incentives to misreport preferences.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Mechanism Design</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Mechanism Design")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'social-choice': {
      title: 'Social Choice Theory',
      subtitle: 'Aggregating individual preferences into collective decisions',
      sections: [
        {
          heading: 'What is Social Choice Theory?',
          text: 'Social choice theory studies how to <strong>aggregate individual preferences</strong> into a collective choice or ranking. When a group must choose among alternatives — whether electing a leader, allocating a budget, or ranking search results — whose preferences should count, and how should they be combined? Social choice provides formal frameworks and impossibility theorems that reveal the fundamental challenges and trade-offs of collective decision-making.',
          list: [
            '<strong>Preference aggregation:</strong> Combining rankings or utility functions from multiple agents',
            '<strong>Voting rules:</strong> Plurality, Borda count, instant runoff, approval voting, Condorcet methods',
            `<strong>Arrow's Impossibility Theorem:</strong> No voting system can satisfy all desirable fairness criteria simultaneously`,
            '<strong>Social welfare functions:</strong> Maps individual preferences to a collective preference ordering',
            '<strong>Fairness axioms:</strong> Unrestricted domain, Pareto efficiency, independence of irrelevant alternatives, non-dictatorship'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Social choice theory studies how to <strong>aggregate individual preferences</strong> into a collective choice or ranking. When a group must choose among alternatives — whether electing a leader, allocating a budget, or ranking search results — whose preferences should count, and how should they be combined? Social choice provides formal frameworks and impossibility theorems that reveal the fundamental challenges and trade-offs of collective decision-making. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, Social choice theory studies how to <strong>aggregate individual preferences</strong> into a collective choice or ranking. When a group must choose among alternatives — whether electing a leader, allocating a budget, or ranking search results — whose preferences should count, and how should they be combined? Social choice provides formal frameworks and impossibility theorems that reveal the fundamental challenges and trade-offs of collective decision-making. <strong>Preference aggregation:</strong> Combining rankings or utility functions from multiple agents <strong>Voting rules:</strong> Plurality, Borda count, instant runoff, approval voting, Condorcet methods <strong>Arrow's Impossibility Theorem:</strong> No voting system can satisfy all desirable fairness criteria simultaneously <strong>Social welfare functions:</strong> Maps individual preferences to a collective preference ordering <strong>Fairness axioms:</strong> Unrestricted domain, Pareto efficiency, independence of irrelevant alternatives, non-dictatorship</p>`,
            '<p>You use social choice theory when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Social Choice Theory

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Social Choice Theory sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `Arrow's theorem states that no social welfare function can satisfy all four fairness axioms when there are three or more alternatives.`,
          example: {
            title: 'Condorcet Paradox (Voting Cycle)',
            code: `3 Voters, 3 Alternatives (A, B, C):

Voter 1: A > B > C
Voter 2: B > C > A
Voter 3: C > A > B

Pairwise comparisons:
  A vs B: A wins (Voters 1,3) vs B wins (Voter 2)
    → A preferred by 2/3
  B vs C: B wins (Voters 1,2) vs C wins (Voter 3)
    → B preferred by 2/3
  C vs A: C wins (Voters 2,3) vs A wins (Voter 1)
    → C preferred by 2/3

Result: A > B > C > A (cycle!)

No Condorcet winner exists.
Collective preference is intransitive
even though all individuals are rational.`,
            output: 'The Condorcet paradox shows that majority rule can produce cycles.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Social Choice Theory with Python',
            code: `from collections import deque

# Social Choice Theory — BFS on a tiny grid graph
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
          text: 'Voting rules differ in how they handle spoilers, strategic voting, and expressiveness.',
          table: {
            headers: [
              'Voting Rule',
              'How It Works',
              'Strategic Incentive',
              'Spoiler Effect',
              'Best For'
            ],
            rows: [
              [
                'Plurality',
                'Most first-place votes wins',
                'Strong',
                'Severe',
                'Simple elections'
              ],
              [
                'Borda Count',
                'Rank-based points',
                'Moderate',
                'Moderate',
                'Ranking systems'
              ],
              [
                'Instant Runoff (IRV)',
                'Eliminate last, redistribute',
                'Moderate',
                'Reduced',
                'Political elections'
              ],
              [
                'Approval Voting',
                'Vote for any subset',
                'Low',
                'None',
                'Consensus building'
              ],
              [
                'Condorcet Methods',
                'Pairwise comparisons',
                'Low',
                'None',
                'When majority cycles rare'
              ],
              [
                'Score Voting',
                'Rate each candidate',
                'Moderate',
                'Low',
                'Expressive preferences'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Assuming there is a "perfect" voting system (fix: Arrow's theorem proves impossibility; every system violates at least one fairness axiom)`,
            'Mistake 2: Ignoring strategic voting in mechanism design (fix: voters may misreport preferences if doing so yields a better outcome; Gibbard-Satterthwaite shows this is unavoidable in most settings)',
            'Mistake 3: Confusing majority winner with Condorcet winner (fix: a plurality winner may lose pairwise to another candidate; a Condorcet winner beats every other candidate head-to-head)',
            'Mistake 4: Thinking social choice only applies to political elections (fix: it applies to any aggregation problem: search engine ranking, recommender systems, multi-criteria decision making, and AI value alignment)'
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
          text: 'Social choice mechanisms operate in technology, governance, and markets worldwide.',
          list: [
            '<strong>Search engine ranking:</strong> Aggregating relevance scores from multiple signals uses social welfare functions to produce a single ranking',
            '<strong>Recommender systems:</strong> Group recommenders (e.g., Netflix for families, Spotify for parties) aggregate individual preferences into shared suggestions',
            '<strong>Open-source governance:</strong> Projects use voting and consensus mechanisms to decide feature roadmaps and governance changes',
            '<strong>AI alignment:</strong> Social choice theory helps design methods to align AI systems with pluralistic human values and preferences',
            '<strong>Peer review:</strong> Conference ranking and paper acceptance aggregate reviewer scores through social choice procedures'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Social choice theory aggregates individual preferences into collective decisions',
            'Voting rules include plurality, Borda, instant runoff, approval, and Condorcet methods',
            'The Condorcet paradox shows majority rule can produce intransitive cycles',
            `Arrow's impossibility theorem: no voting system satisfies all fairness axioms`,
            'Every practical voting system involves trade-offs among fairness, strategyproofness, and simplicity'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does Arrow's Impossibility Theorem state?
Ans: No social welfare function can simultaneously satisfy unrestricted domain, Pareto efficiency, independence of irrelevant alternatives, and non-dictatorship when there are three or more alternatives.`,
            `Q2: What is the Condorcet paradox?
Ans: A situation where majority preferences are cyclical (A beats B, B beats C, C beats A) even though every individual has a transitive preference ordering.`,
            `Q3: Why might approval voting be preferable to plurality voting?
Ans: Approval voting allows voters to support multiple candidates, eliminating the spoiler effect and reducing strategic incentives to vote for a less-preferred viable candidate.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Social Choice Theory</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Social Choice Theory")
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
