// artificial intelligence — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js ai_module1.js

export const aiModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Artificial Intelligence',
    topics: [
      {
        id: 'intro-ai',
        title: 'Introduction to AI'
      },
      {
        id: 'history-ai',
        title: 'History of AI'
      },
      {
        id: 'search-algorithms',
        title: 'Search Algorithms'
      },
      {
        id: 'uninformed-search',
        title: 'Uninformed Search'
      },
      {
        id: 'informed-search',
        title: 'Informed Search'
      }
    ]
  }
};

export const aiModule1Content = {
  module1: {
    'intro-ai': {
      title: 'Introduction to Artificial Intelligence',
      subtitle: 'Building machines that think, learn, and act',
      sections: [
        {
          heading: 'What is Artificial Intelligence?',
          text: 'Artificial Intelligence (AI) is the field of computer science dedicated to creating systems capable of performing tasks that normally require human intelligence. These include reasoning, learning, problem-solving, perception, language understanding, and decision-making. AI spans from simple rule-based systems to deep neural networks with billions of parameters.',
          list: [
            '<strong>Machine Learning:</strong> Systems that learn patterns from data instead of following explicit rules',
            '<strong>Natural Language Processing:</strong> Understanding and generating human language',
            '<strong>Computer Vision:</strong> Interpreting images, video, and visual scenes',
            '<strong>Robotics:</strong> Physical agents that sense and act in the real world',
            '<strong>Knowledge Representation:</strong> Encoding facts, logic, and reasoning for inference'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Artificial Intelligence (AI) is the field of computer science dedicated to creating systems capable of performing tasks that normally require human intelligence. These include reasoning, learning, problem-solving, perception, language understanding, and decision-making. AI spans from simple rule-based systems to deep neural networks with billions of parameters. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Artificial Intelligence (AI) is the field of computer science dedicated to creating systems capable of performing tasks that normally require human intelligence. These include reasoning, learning, problem-solving, perception, language understanding, and decision-making. AI spans from simple rule-based systems to deep neural networks with billions of parameters. <strong>Machine Learning:</strong> Systems that learn patterns from data instead of following explicit rules <strong>Natural Language Processing:</strong> Understanding and generating human language <strong>Computer Vision:</strong> Interpreting images, video, and visual scenes <strong>Robotics:</strong> Physical agents that sense and act in the real world <strong>Knowledge Representation:</strong> Encoding facts, logic, and reasoning for inference</p>',
            '<p>You use introduction to artificial intelligence when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Artificial Intelligence

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Artificial Intelligence sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The rational agent framework defines AI as the pursuit of optimal action given what the agent knows.',
          example: {
            title: 'Rational Agent Principle',
            code: `For each possible percept sequence,
a rational agent should select an action
that is expected to maximize its
performance measure.

Agent = Architecture + Program
  Architecture = Computing device
  Program = Mapping from percepts to actions`,
            output: 'Rationality depends on performance measure, prior knowledge, actions, and percepts.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Introduction to Artificial Intelligence with Python',
            code: `from collections import deque

# Introduction to Artificial Intelligence — BFS on a tiny grid graph
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
          text: 'AI is often confused with related fields. Understanding the boundaries is essential.',
          table: {
            headers: [
              'Field',
              'Focus',
              'Key Method',
              'Example'
            ],
            rows: [
              [
                'Artificial Intelligence',
                'Building intelligent agents',
                'Search, logic, learning',
                'Chess-playing bot'
              ],
              [
                'Machine Learning',
                'Learning from data',
                'Statistical pattern recognition',
                'Spam classifier'
              ],
              [
                'Deep Learning',
                'Neural networks with many layers',
                'Gradient descent on large nets',
                'Image recognition'
              ],
              [
                'Data Science',
                'Extracting insights from data',
                'Statistics + visualization',
                'Sales forecast'
              ],
              [
                'Robotics',
                'Physical embodiment + control',
                'Sensors, actuators, planning',
                'Autonomous drone'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking AI means human-like consciousness (fix: AI is about competent behavior, not sentience)',
            'Mistake 2: Assuming AI is only neural networks (fix: AI includes logic, search, planning, and symbolic reasoning)',
            'Mistake 3: Believing AI is always data-hungry (fix: Classical AI solves problems with rules and search, no data needed)',
            'Mistake 4: Expecting AI to be objective (fix: AI systems inherit biases from data, design, and objectives)'
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
          text: 'AI is already embedded in everyday systems you interact with.',
          list: [
            '<strong>Virtual Assistants:</strong> Siri, Alexa, Google Assistant use NLP and speech recognition to understand commands',
            '<strong>Recommendation Engines:</strong> Netflix, Spotify, Amazon use ML to predict what you will enjoy',
            '<strong>Autonomous Vehicles:</strong> Self-driving cars fuse computer vision, sensor fusion, and planning algorithms',
            '<strong>Medical Diagnosis:</strong> AI systems detect tumors in scans and predict disease risk from patient data',
            '<strong>Fraud Detection:</strong> Banks use anomaly detection to flag suspicious transactions in real time'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI creates agents that perceive, reason, and act to achieve goals',
            'A rational agent maximizes expected performance given its knowledge',
            'AI subfields include ML, NLP, vision, robotics, and knowledge representation',
            'AI ≠ ML ≠ Deep Learning — they are nested, not equivalent',
            'Classical AI (search, logic) remains essential alongside modern learning'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the defining property of a rational agent?
Ans: It selects actions expected to maximize its performance measure given the percept sequence.`,
            `Q2: Why is machine learning considered a subfield of AI?
Ans: Because learning from data is one way to create intelligent behavior, but not the only way.`,
            `Q3: Can an AI system be intelligent without machine learning?
Ans: Yes — early chess programs and expert systems used search and rules, not learning.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Artificial Intelligence</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Artificial Intelligence")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'history-ai': {
      title: 'History of Artificial Intelligence',
      subtitle: 'From symbolic dreams to deep learning revolutions',
      sections: [
        {
          heading: 'What is the History of AI?',
          text: 'The history of AI is a cycle of optimism, breakthroughs, winters of disillusionment, and resurgence. Understanding this timeline helps explain why certain techniques dominate today and why others fell out of favor — only to return decades later.',
          list: [
            '1950s–1960s: Birth of AI — symbolic reasoning, logic, and early optimism',
            '1970s–1980s: First AI Winter — funding cuts, limitations of early systems',
            '1980s–1990s: Expert systems boom and bust — rule-based knowledge engineering',
            '1990s–2000s: Statistical turn — machine learning, probabilistic methods rise',
            '2010s–present: Deep learning revolution — neural networks, big data, massive compute'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The history of AI is a cycle of optimism, breakthroughs, winters of disillusionment, and resurgence. Understanding this timeline helps explain why certain techniques dominate today and why others fell out of favor — only to return decades later. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The history of AI is a cycle of optimism, breakthroughs, winters of disillusionment, and resurgence. Understanding this timeline helps explain why certain techniques dominate today and why others fell out of favor — only to return decades later. 1950s–1960s: Birth of AI — symbolic reasoning, logic, and early optimism 1970s–1980s: First AI Winter — funding cuts, limitations of early systems 1980s–1990s: Expert systems boom and bust — rule-based knowledge engineering 1990s–2000s: Statistical turn — machine learning, probabilistic methods rise 2010s–present: Deep learning revolution — neural networks, big data, massive compute</p>',
            '<p>You use history of artificial intelligence when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — History of Artificial Intelligence

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: History of Artificial Intelligence sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Core identity for this topic.',
          example: {
            title: 'Worked formula',
            code: 'See Python example below.',
            output: 'Apply the formula before trusting software output.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'History of Artificial Intelligence with Python',
            code: `from collections import deque

# History of Artificial Intelligence — BFS on a tiny grid graph
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
          text: 'The three major paradigms of AI evolved very differently.',
          table: {
            headers: [
              'Era',
              'Approach',
              'Strength',
              'Weakness',
              'Key System'
            ],
            rows: [
              [
                'Symbolic AI (1950–1980)',
                'Logic, rules, search',
                'Explainable, precise',
                'Brittle, no learning',
                'Expert systems'
              ],
              [
                'Statistical ML (1990–2010)',
                'Probabilistic models, SVMs, random forests',
                'Generalizes from data',
                'Feature engineering burden',
                'Spam filters, search engines'
              ],
              [
                'Deep Learning (2010–present)',
                'Neural networks, end-to-end learning',
                'Learns features automatically',
                'Data-hungry, black-box',
                'GPT, AlphaGo, Stable Diffusion'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking AI winters prove AI is impossible (fix: winters were about overpromising and funding, not fundamental limits)',
            'Mistake 2: Assuming modern AI is entirely new (fix: transformers, backprop, and convolution were invented decades ago)',
            'Mistake 3: Ignoring symbolic AI entirely (fix: hybrid systems combining neural and symbolic methods are an active frontier)',
            'Mistake 4: Believing compute is the only driver (fix: algorithmic innovations — attention, residual connections, batch norm — matter as much as hardware)'
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
          text: 'Historical AI techniques still power critical systems alongside modern methods.',
          list: [
            '<strong>Rule-based systems:</strong> Tax preparation software, insurance claim validation, medical decision trees — still use symbolic logic',
            '<strong>Search algorithms:</strong> GPS navigation, game AI, logistics planning — descendants of 1960s search research',
            '<strong>Probabilistic methods:</strong> Spam filtering, speech recognition, fraud detection — rooted in 1990s statistical ML',
            '<strong>Deep learning:</strong> Computer vision, NLP, generative AI — the current dominant paradigm'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI was born in the 1950s with symbolic reasoning and optimism',
            'AI winters (1970s, 1980s) followed overpromising and limited hardware',
            'Statistical ML rose in the 1990s with probabilistic and kernel methods',
            'Deep learning revived neural networks after 2006, exploding after 2012',
            'Modern AI is a blend of old ideas (backprop, attention) with new scale (data, compute)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What triggered the first AI winter in the 1970s?
Ans: Overpromising, limited computing power, and the realization that early systems could not scale to real-world complexity.`,
            `Q2: Why did expert systems fail to sustain AI progress?
Ans: They required manual knowledge engineering, were brittle outside narrow domains, and expensive to maintain.`,
            `Q3: What factors enabled the deep learning revolution around 2012?
Ans: Massive datasets (ImageNet), GPU compute, algorithmic advances (ReLU, dropout, better initialization), and the AlexNet breakthrough.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>History of Artificial Intelligence</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — History of Artificial Intelligence")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'search-algorithms': {
      title: 'Search Algorithms',
      subtitle: 'Finding solutions in large spaces of possibilities',
      sections: [
        {
          heading: 'What are Search Algorithms?',
          text: 'Search algorithms are fundamental to AI. When an agent faces a problem with many possible states and actions, search provides a systematic way to explore the space and find a path from an initial state to a goal. Search is the backbone of planning, game playing, theorem proving, and optimization.',
          list: [
            '<strong>State space:</strong> The set of all possible configurations of the problem',
            '<strong>Actions:</strong> Transitions that move from one state to another',
            '<strong>Goal test:</strong> A condition that determines whether a state is a solution',
            '<strong>Path cost:</strong> A numeric measure of the quality of a solution path',
            '<strong>Search tree:</strong> The tree of possible action sequences explored by the algorithm'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Search algorithms are fundamental to AI. When an agent faces a problem with many possible states and actions, search provides a systematic way to explore the space and find a path from an initial state to a goal. Search is the backbone of planning, game playing, theorem proving, and optimization. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Search algorithms are fundamental to AI. When an agent faces a problem with many possible states and actions, search provides a systematic way to explore the space and find a path from an initial state to a goal. Search is the backbone of planning, game playing, theorem proving, and optimization. <strong>State space:</strong> The set of all possible configurations of the problem <strong>Actions:</strong> Transitions that move from one state to another <strong>Goal test:</strong> A condition that determines whether a state is a solution <strong>Path cost:</strong> A numeric measure of the quality of a solution path <strong>Search tree:</strong> The tree of possible action sequences explored by the algorithm</p>',
            '<p>You use search algorithms when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Search Algorithms

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Search Algorithms sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Every search problem can be formally defined by five components.',
          example: {
            title: 'Problem Formulation (8-Puzzle)',
            code: `States:     Tile positions on 3×3 grid
Initial:    [1,2,3][4,5,6][7,0,8]
Actions:    Move blank (Up, Down, Left, Right)
Transition: Result(state, action)
Goal Test:  state == [1,2,3][4,5,6][7,8,0]
Path Cost:  1 per move

State Space Size: 9!/2 = 181,440 reachable states`,
            output: 'Formal formulation converts a puzzle into a well-defined search problem.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Search Algorithms with Python',
            code: `from collections import deque

# Search Algorithms — BFS on a tiny grid graph
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
          text: 'Search algorithms differ in how they explore the state space.',
          table: {
            headers: [
              'Dimension',
              'Uninformed',
              'Informed (Heuristic)',
              'Local'
            ],
            rows: [
              [
                'Information needed',
                'None beyond problem definition',
                'Heuristic estimate h(n)',
                'Current state value only'
              ],
              [
                'Strategy',
                'Systematic exploration',
                'Guide search toward goal',
                'Improve current state iteratively'
              ],
              [
                'Completeness',
                'Often guaranteed',
                'Depends on heuristic',
                'Not guaranteed'
              ],
              [
                'Optimality',
                'Depends on algorithm',
                'Guaranteed if h admissible',
                'Not guaranteed'
              ],
              [
                'Examples',
                'BFS, DFS, UCS, IDS',
                'A*, Greedy Best-First',
                'Hill Climbing, Simulated Annealing'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing state space and search tree (fix: state space is the problem; search tree is the exploration of it — the tree can be infinite even if the state space is finite)',
            'Mistake 2: Assuming BFS is always better than DFS (fix: BFS finds shortest paths but uses exponential memory; DFS uses linear memory but may not find optimal)',
            'Mistake 3: Forgetting that repeated states cause infinite loops (fix: always maintain an explored set or use a closed list)',
            'Mistake 4: Believing every problem needs machine learning (fix: many problems — routing, scheduling, games — are solved faster and more reliably with search)'
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
          text: 'Search algorithms power systems that must find optimal or feasible paths through combinatorial spaces.',
          list: [
            '<strong>GPS Navigation:</strong> A* search on road networks to find shortest routes in real time',
            '<strong>Game Playing:</strong> Minimax + alpha-beta search for chess, Go, and video game AI',
            '<strong>Robotics Path Planning:</strong> Search in configuration space to find collision-free trajectories',
            '<strong>Scheduling:</strong> Constraint satisfaction search for airline crew and factory job scheduling',
            '<strong>Compiler Optimization:</strong> Search over program transformations to find efficient code sequences'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Search systematically explores state spaces to find goal states',
            'A problem is defined by states, actions, transition model, goal test, and path cost',
            'Uninformed search uses no domain knowledge; informed search uses heuristics',
            'Local search iteratively improves a single state without systematic exploration',
            'Search remains one of the most powerful and widely used AI techniques'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the five components of a well-defined search problem?
Ans: Initial state, actions, transition model, goal test, and path cost function.`,
            `Q2: Why is the search tree potentially infinite even when the state space is finite?
Ans: Because cycles and redundant paths allow revisiting the same state through different sequences of actions.`,
            `Q3: When would you prefer uninformed search over informed search?
Ans: When no good heuristic is available, or when the heuristic is too expensive to compute relative to the search itself.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Search Algorithms</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Search Algorithms")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'uninformed-search': {
      title: 'Uninformed Search',
      subtitle: 'Blind but systematic exploration of state spaces',
      sections: [
        {
          heading: 'What is Uninformed Search?',
          text: 'Uninformed (blind) search algorithms have no information about how close a state is to the goal. They explore the state space systematically using only the problem definition. Despite their simplicity, they are complete and often optimal — making them essential building blocks.',
          list: [
            '<strong>Breadth-First Search (BFS):</strong> Expands shallowest nodes first; complete and optimal for uniform cost',
            '<strong>Depth-First Search (DFS):</strong> Expands deepest nodes first; linear space but incomplete on infinite trees',
            '<strong>Uniform Cost Search (UCS):</strong> Expands lowest path-cost node first; optimal for any positive costs',
            '<strong>Iterative Deepening (IDDFS):</strong> Repeated depth-limited DFS with increasing limits; combines BFS completeness with DFS space efficiency',
            '<strong>Depth-Limited Search:</strong> DFS with a fixed depth cutoff; prevents infinite loops but may miss deep solutions'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Uninformed (blind) search algorithms have no information about how close a state is to the goal. They explore the state space systematically using only the problem definition. Despite their simplicity, they are complete and often optimal — making them essential building blocks. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Uninformed (blind) search algorithms have no information about how close a state is to the goal. They explore the state space systematically using only the problem definition. Despite their simplicity, they are complete and often optimal — making them essential building blocks. <strong>Breadth-First Search (BFS):</strong> Expands shallowest nodes first; complete and optimal for uniform cost <strong>Depth-First Search (DFS):</strong> Expands deepest nodes first; linear space but incomplete on infinite trees <strong>Uniform Cost Search (UCS):</strong> Expands lowest path-cost node first; optimal for any positive costs <strong>Iterative Deepening (IDDFS):</strong> Repeated depth-limited DFS with increasing limits; combines BFS completeness with DFS space efficiency <strong>Depth-Limited Search:</strong> DFS with a fixed depth cutoff; prevents infinite loops but may miss deep solutions</p>',
            '<p>You use uninformed search when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Uninformed Search

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Uninformed Search sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The properties of uninformed search algorithms are characterized by four metrics.',
          example: {
            title: 'Algorithm Properties',
            code: `BFS:
  Complete: Yes (if finite branching)
  Optimal: Yes (uniform step cost)
  Time: O(b^d)
  Space: O(b^d)

DFS:
  Complete: No (infinite paths / cycles)
  Optimal: No
  Time: O(b^m)
  Space: O(b·m)

UCS:
  Complete: Yes (if step cost ≥ ε > 0)
  Optimal: Yes
  Time: O(b^(C*/ε))
  Space: O(b^(C*/ε))

IDDFS:
  Complete: Yes
  Optimal: Yes (uniform cost)
  Time: O(b^d)
  Space: O(b·d)

b = branching factor, d = shallowest solution depth,
m = max depth, C* = optimal path cost`,
            output: 'IDDFS is the uninformed algorithm of choice when space matters.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Uninformed Search with Python',
            code: `from collections import deque

# Uninformed Search — BFS on a tiny grid graph
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
          text: 'Choosing the right uninformed algorithm depends on problem structure and resource constraints.',
          table: {
            headers: [
              'Algorithm',
              'Frontier',
              'Complete',
              'Optimal',
              'Time',
              'Space',
              'Best When'
            ],
            rows: [
              [
                'BFS',
                'FIFO queue',
                'Yes',
                'Yes (uniform)',
                'O(b^d)',
                'O(b^d)',
                'Shallow solutions, small state space'
              ],
              [
                'DFS',
                'LIFO stack',
                'No',
                'No',
                'O(b^m)',
                'O(bm)',
                'Deep solutions, memory constrained'
              ],
              [
                'UCS',
                'Priority queue',
                'Yes',
                'Yes',
                'O(b^(C*/ε))',
                'O(b^(C*/ε))',
                'Variable step costs'
              ],
              [
                'IDDFS',
                'DFS with limit',
                'Yes',
                'Yes',
                'O(b^d)',
                'O(bd)',
                'Large spaces, unknown depth'
              ],
              [
                'DLS',
                'DFS with cutoff',
                'No',
                'No',
                'O(b^l)',
                'O(bl)',
                'Known depth bound'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BFS on very large state spaces (fix: BFS memory explodes exponentially — use IDDFS or iterative deepening if space is limited)',
            'Mistake 2: Using DFS without cycle checking (fix: DFS can loop forever on cyclic graphs; always track visited states or use a closed list)',
            'Mistake 3: Confusing UCS with Dijkstra (fix: UCS is essentially Dijkstra on an implicit graph where edges are generated on demand)',
            'Mistake 4: Thinking uninformed search is never useful (fix: when heuristics are unavailable or misleading, uninformed methods are safer and often sufficient)'
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
          text: 'Uninformed search is used when no reliable heuristic exists or when correctness matters more than speed.',
          list: [
            '<strong>Web Crawling:</strong> BFS explores web pages level by level to build site maps',
            '<strong>Maze Solving:</strong> BFS guarantees the shortest path in unweighted grid mazes',
            '<strong>Topological Sort:</strong> DFS is the natural choice for detecting cycles and ordering tasks',
            '<strong>Model Checking:</strong> BFS/IDDFS verify properties of hardware and software systems exhaustively',
            '<strong>Game Solving:</strong> Retrograde analysis uses BFS backward from winning positions to classify all states'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Uninformed search uses no domain knowledge beyond the problem definition',
            'BFS is complete and optimal for uniform costs but uses exponential memory',
            'DFS uses linear memory but is incomplete and non-optimal',
            'UCS generalizes BFS to handle variable step costs optimally',
            'IDDFS combines the completeness of BFS with the space efficiency of DFS'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is BFS optimal only when all step costs are equal?
Ans: Because with equal costs, the first solution found at depth d is guaranteed to have the lowest path cost.`,
            `Q2: What is the main advantage of iterative deepening over BFS?
Ans: IDDFS has the same time complexity as BFS but uses only linear space, like DFS.`,
            `Q3: When would you choose UCS over BFS?
Ans: When actions have different costs — UCS finds the lowest-cost path, while BFS finds the fewest-action path.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Uninformed Search</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Uninformed Search")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'informed-search': {
      title: 'Informed Search',
      subtitle: 'Using domain knowledge to guide search efficiently',
      sections: [
        {
          heading: 'What is Informed Search?',
          text: 'Informed search algorithms use problem-specific knowledge — a <strong>heuristic function h(n)</strong> — to estimate the cost from a given state to the goal. This guidance can dramatically reduce the number of nodes explored, making search feasible for enormous state spaces that uninformed methods cannot handle.',
          list: [
            '<strong>Heuristic function h(n):</strong> Estimated cost from state n to the nearest goal',
            '<strong>Greedy Best-First Search:</strong> Expands the node with lowest h(n) — fast but not optimal',
            '<strong>A* Search:</strong> Uses f(n) = g(n) + h(n) — optimal if h is admissible',
            '<strong>Iterative Deepening A* (IDA*):</strong> Combines A* optimality with linear space',
            '<strong>Memory-bounded A* (SMA*):</strong> A* that drops nodes when memory is full'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Informed search algorithms use problem-specific knowledge — a <strong>heuristic function h(n)</strong> — to estimate the cost from a given state to the goal. This guidance can dramatically reduce the number of nodes explored, making search feasible for enormous state spaces that uninformed methods cannot handle. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Informed search algorithms use problem-specific knowledge — a <strong>heuristic function h(n)</strong> — to estimate the cost from a given state to the goal. This guidance can dramatically reduce the number of nodes explored, making search feasible for enormous state spaces that uninformed methods cannot handle. <strong>Heuristic function h(n):</strong> Estimated cost from state n to the nearest goal <strong>Greedy Best-First Search:</strong> Expands the node with lowest h(n) — fast but not optimal <strong>A* Search:</strong> Uses f(n) = g(n) + h(n) — optimal if h is admissible <strong>Iterative Deepening A* (IDA*):</strong> Combines A* optimality with linear space <strong>Memory-bounded A* (SMA*):</strong> A* that drops nodes when memory is full</p>',
            '<p>You use informed search when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Informed Search

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Informed Search sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A* evaluates nodes using f(n) = g(n) + h(n), where g(n) is the path cost from start to n.',
          example: {
            title: 'A* on the 8-Puzzle',
            code: `Heuristic: Manhattan Distance
h(n) = Σ |current_row - goal_row|
         + |current_col - goal_col|

State:
  [1, 2, 3]
  [4, 0, 6]
  [7, 5, 8]

Goal:
  [1, 2, 3]
  [4, 5, 6]
  [7, 8, 0]

Tile 5: at (2,1), goal (1,1)
  |2-1| + |1-1| = 1
Tile 8: at (2,2), goal (2,1)
  |2-2| + |2-1| = 1
Tile 0: at (1,1), goal (2,2)
  |1-2| + |1-2| = 2

h(n) = 1 + 1 + 2 = 4`,
            output: 'Manhattan distance is admissible: it never overestimates true cost.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Informed Search with Python',
            code: `from collections import deque

# Informed Search — BFS on a tiny grid graph
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
          text: 'The choice between informed algorithms depends on memory, heuristic quality, and optimality requirements.',
          table: {
            headers: [
              'Algorithm',
              'Evaluation',
              'Optimal',
              'Complete',
              'Space',
              'Best Heuristic'
            ],
            rows: [
              [
                'Greedy Best-First',
                'f(n) = h(n)',
                'No',
                'No',
                'O(b^m)',
                'Any h(n)'
              ],
              [
                'A*',
                'f(n) = g(n) + h(n)',
                'Yes (if admissible)',
                'Yes',
                'O(b^d)',
                'Admissible, consistent'
              ],
              [
                'IDA*',
                'f(n) = g(n) + h(n)',
                'Yes',
                'Yes',
                'O(bd)',
                'Admissible'
              ],
              [
                'SMA*',
                'f(n) = g(n) + h(n)',
                'Yes (if enough mem)',
                'Yes',
                'Bounded',
                'Admissible'
              ],
              [
                'RBFS',
                'f(n) = g(n) + h(n)',
                'Yes',
                'Yes',
                'O(bd)',
                'Admissible'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using an inadmissible heuristic with A* and expecting optimality (fix: ensure h(n) never overestimates true cost; if inadmissible, A* becomes approximate)',
            `Mistake 2: Confusing admissibility with consistency (fix: admissibility: h(n) ≤ h*(n); consistency: h(n) ≤ c(n,a,n') + h(n'). Consistency implies admissibility, but not vice versa)`,
            'Mistake 3: Thinking a better heuristic always means faster search (fix: very accurate heuristics may be expensive to compute; the total time = search time + heuristic time)',
            'Mistake 4: Forgetting that A* memory grows exponentially (fix: for very large problems, switch to IDA* or use memory-bounded variants)'
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
          text: 'Informed search is the engine behind many high-performance AI systems.',
          list: [
            '<strong>GPS Navigation:</strong> A* on road graphs with Euclidean distance heuristic finds shortest routes in milliseconds',
            '<strong>Robot Motion Planning:</strong> A* and variants (D*, ARA*) plan paths in high-dimensional configuration spaces',
            '<strong>Game Pathfinding:</strong> Real-time strategy games use A* for unit movement across terrain with obstacles',
            `<strong>Puzzle Solvers:</strong> Rubik's Cube solvers use pattern database heuristics with IDA* to find optimal solutions`,
            '<strong>Protein Folding:</strong> Search heuristics guide exploration of molecular conformation spaces'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Informed search uses a heuristic h(n) to estimate remaining cost to goal',
            'Greedy Best-First expands the node that looks closest to the goal — fast but not optimal',
            'A* combines path cost g(n) and heuristic h(n); optimal if h is admissible',
            'Manhattan distance and misplaced tiles are common admissible heuristics for grid puzzles',
            'IDA* and SMA* provide memory-efficient alternatives to standard A*'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does it mean for a heuristic to be admissible?
Ans: An admissible heuristic never overestimates the true cost to reach the goal from any node.`,
            `Q2: Why is A* with an admissible heuristic guaranteed to be optimal?
Ans: Because f(n) = g(n) + h(n) is a lower bound on the true cost of any solution through n; A* will not miss a better solution in another branch.`,
            `Q3: What is the trade-off of using IDA* instead of A*?
Ans: IDA* uses linear space but may re-explore many nodes across iterations, making it slower in practice despite the same asymptotic time complexity.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Informed Search</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Informed Search")
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
