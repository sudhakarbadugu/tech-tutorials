// reinforcement learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js rl_module2.js

export const rlModule2Structure = {
  module2: {
    title: 'Module 2: Markov Decision Processes',
    topics: [
      {
        id: 'mdp-formalism',
        title: 'Formalizing Markov Decision Processes'
      },
      {
        id: 'bellman-derivation',
        title: 'Bellman Equation and Full Derivation'
      },
      {
        id: 'value-iteration',
        title: 'Value Iteration with Step-by-Step Trace'
      },
      {
        id: 'policy-iteration',
        title: 'Policy Iteration Algorithm'
      },
      {
        id: 'solving-frozenlake',
        title: 'FrozenLake Solution and Policy Visualization'
      }
    ]
  }
};

export const rlModule2Content = {
  module2: {
    'mdp-formalism': {
      title: 'Formalizing Markov Decision Processes',
      subtitle: 'The mathematical framework for modeling reinforcement learning problems',
      sections: [
        {
          heading: 'What is an MDP?',
          text: 'A <strong>Markov Decision Process (MDP)</strong> is a formal mathematical framework used to model sequential decision-making in environments where outcomes are partly random and partly under the control of the agent. An MDP is defined by a 5-tuple: $(S, A, P, R, \gamma)$.',
          list: [
            'S: The state space, which is the set of all valid states in the environment.',
            'A: The action space, representing all decisions available to the agent.',
            `P: The transition probability function $P(s' | s, a) = \\mathbb{P}(S_{t+1} = s' | S_t = s, A_t = a)$, defining the probability of transitioning to state s' after taking action a in state s.`,
            `R: The reward function $R(s, a, s') = \\mathbb{E}[R_{t+1} | S_t = s, A_t = a, S_{t+1} = s']$, giving the expected reward obtained during the transition.`,
            'gamma: The discount factor $\gamma \in [0, 1)$, weighting the importance of future rewards.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Markov Decision Process (MDP)</strong> is a formal mathematical framework used to model sequential decision-making in environments where outcomes are partly random and partly under the control of the agent. An MDP is defined by a 5-tuple: $(S, A, P, R, \gamma)$. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, A <strong>Markov Decision Process (MDP)</strong> is a formal mathematical framework used to model sequential decision-making in environments where outcomes are partly random and partly under the control of the agent. An MDP is defined by a 5-tuple: $(S, A, P, R, \\gamma)$. S: The state space, which is the set of all valid states in the environment. A: The action space, representing all decisions available to the agent. P: The transition probability function $P(s' | s, a) = \\mathbb{P}(S_{t+1} = s' | S_t = s, A_t = a)$, defining the probability of transitioning to state s' after taking action a in state s. R: The reward function $R(s, a, s') = \\mathbb{E}[R_{t+1} | S_t = s, A_t = a, S_{t+1} = s']$, giving the expected reward obtained during the transition. gamma: The discount factor $\\gamma \\in [0, 1)$, weighting the importance of future rewards.</p>`,
            '<p>You use formalizing markov decision processes when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Formalizing Markov Decision Processes

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Formalizing Markov Decision Processes sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Formalizing Markov Decision Processes with Python',
            code: `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("Formalizing Markov Decision Processes — random agent return:", total)`,
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
          text: 'Pick the right variant for your data type and sample size.',
          table: {
            headers: [
              'Aspect',
              'Option A',
              'Option B',
              'When to use each'
            ],
            rows: [
              [
                'Data',
                'Numerical',
                'Categorical',
                'Numerical → t/ANOVA; categorical → chi-square'
              ],
              [
                'Sample size',
                'Large n',
                'Small n',
                'Large → z/normal; small → t or exact tests'
              ],
              [
                'Goal',
                'Estimate',
                'Test',
                'Estimation → CI; decision → hypothesis test'
              ],
              [
                'Assumptions',
                'Parametric',
                'Non-parametric',
                'Parametric when assumptions hold; else rank-based'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
            'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
            'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
            'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).'
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
          text: '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
          list: [
            'Industry: Streaming / product experimentation',
            'Dataset: Millions of user sessions per variant',
            'Method: Hypothesis tests + CUPED variance reduction',
            'Results: Detect ~0.1% metric lifts reliably',
            'Impact: Data-driven feature launches at global scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Formalizing Markov Decision Processes: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If an environment does not satisfy the Markov property, how can it be modeled?
Ans: It can be modeled as a Partially Observable Markov Decision Process (POMDP), where observations provide partial clues about hidden state variables, or by constructing a history state (window of recent observations).`,
            `Q2: Write the definition of the action-value function Q^pi(s, a) in terms of V^pi(s').
Ans: $Q^\\pi(s, a) = \\sum_{s'} P(s' | s, a) [ R(s, a, s') + \\gamma V^\\pi(s') ]$.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Formalizing Markov Decision Processes</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Formalizing Markov Decision Processes")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bellman-derivation': {
      title: 'Bellman Equation and Full Derivation',
      subtitle: 'Deriving the recursive relationships of value functions',
      sections: [
        {
          heading: 'What is Bellman Equation and Full Derivation?',
          text: 'Bellman Equation and Full Derivation is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Bellman Equation and Full Derivation provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use bellman equation and full derivation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bellman Equation and Full Derivation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bellman Equation and Full Derivation sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Bellman Equation and Full Derivation with Python',
            code: `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("Bellman Equation and Full Derivation — random agent return:", total)`,
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
          text: 'Pick the right variant for your data type and sample size.',
          table: {
            headers: [
              'Aspect',
              'Option A',
              'Option B',
              'When to use each'
            ],
            rows: [
              [
                'Data',
                'Numerical',
                'Categorical',
                'Numerical → t/ANOVA; categorical → chi-square'
              ],
              [
                'Sample size',
                'Large n',
                'Small n',
                'Large → z/normal; small → t or exact tests'
              ],
              [
                'Goal',
                'Estimate',
                'Test',
                'Estimation → CI; decision → hypothesis test'
              ],
              [
                'Assumptions',
                'Parametric',
                'Non-parametric',
                'Parametric when assumptions hold; else rank-based'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
            'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
            'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
            'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).'
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
          text: '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
          list: [
            'Industry: Streaming / product experimentation',
            'Dataset: Millions of user sessions per variant',
            'Method: Hypothesis tests + CUPED variance reduction',
            'Results: Detect ~0.1% metric lifts reliably',
            'Impact: Data-driven feature launches at global scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bellman Equation and Full Derivation: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why can we not solve the Bellman Optimality Equation analytically for large state spaces?
Ans: The max operator makes the system of equations non-linear. Direct matrix inversion is only possible for the linear Expectation equations of a fixed policy, whereas finding the optimal policy requires iterative methods.`,
            `Q2: Express V^*(s) in terms of Q^*(s, a).
Ans: $V^*(s) = \\max_{a \\in A} Q^*(s, a)$.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bellman Equation and Full Derivation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bellman Equation and Full Derivation")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'value-iteration': {
      title: 'Value Iteration with Step-by-Step Trace',
      subtitle: 'Solving the Bellman Optimality Equation using dynamic programming',
      sections: [
        {
          heading: 'What is Value Iteration with Step-by-Step Trace?',
          text: 'Value Iteration with Step-by-Step Trace is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Value Iteration with Step-by-Step Trace provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use value iteration with step-by-step trace when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Value Iteration with Step-by-Step Trace

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Value Iteration with Step-by-Step Trace sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Value Iteration with Step-by-Step Trace with Python',
            code: `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("Value Iteration with Step-by-Step Trace — random agent return:", total)`,
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
          text: 'Pick the right variant for your data type and sample size.',
          table: {
            headers: [
              'Aspect',
              'Option A',
              'Option B',
              'When to use each'
            ],
            rows: [
              [
                'Data',
                'Numerical',
                'Categorical',
                'Numerical → t/ANOVA; categorical → chi-square'
              ],
              [
                'Sample size',
                'Large n',
                'Small n',
                'Large → z/normal; small → t or exact tests'
              ],
              [
                'Goal',
                'Estimate',
                'Test',
                'Estimation → CI; decision → hypothesis test'
              ],
              [
                'Assumptions',
                'Parametric',
                'Non-parametric',
                'Parametric when assumptions hold; else rank-based'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not updating values synchronously or incorrectly mixing old/new values during a single sweep. (Fix: In standard Value Iteration, keep a copy of the old value function to compute updates, or explicitly perform in-place updates, which is called asynchronous value iteration and actually converges faster.)',
            'Mistake 2: Setting theta too high, causing the algorithm to terminate before the policy stabilizes.'
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
          text: '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
          list: [
            'Industry: Streaming / product experimentation',
            'Dataset: Millions of user sessions per variant',
            'Method: Hypothesis tests + CUPED variance reduction',
            'Results: Detect ~0.1% metric lifts reliably',
            'Impact: Data-driven feature launches at global scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Value Iteration with Step-by-Step Trace: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does value iteration differ from policy evaluation?
Ans: Policy evaluation computes V^pi for a fixed policy pi using the Bellman expectation equation. Value iteration computes V* using the Bellman optimality equation (incorporating the max operator).`,
            `Q2: If gamma = 0.5, and the immediate reward is 10 with next state value V(s') = 8, what is the value update target?
Ans: $10 + 0.5 \\times 8 = 14$.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Value Iteration with Step-by-Step Trace</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Value Iteration with Step-by-Step Trace")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'policy-iteration': {
      title: 'Policy Iteration Algorithm',
      subtitle: 'Alternating between policy evaluation and policy improvement',
      sections: [
        {
          heading: 'What is Policy Iteration Algorithm?',
          text: 'Policy Iteration Algorithm is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Policy Iteration Algorithm provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use policy iteration algorithm when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Policy Iteration Algorithm

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Policy Iteration Algorithm sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Mathematical Convergence Proof Concept',
          text: `The convergence of Policy Iteration is guaranteed by the <strong>Policy Improvement Theorem</strong>. It states that if we create a greedy policy $\\pi'$ based on $V^\\pi$, then the value of $\\pi'$ is guaranteed to be greater than or equal to $V^\\pi$ at all states:
$$V^{\\pi'}(s) \\ge V^\\pi(s) \\quad \\forall s \\in S$$

If equality holds, the policy is optimal.`
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Policy Iteration Algorithm with Python',
            code: `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("Policy Iteration Algorithm — random agent return:", total)`,
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
          heading: 'Comparison: Policy Iteration vs. Value Iteration',
          text: 'While both algorithms solve MDPs, they possess distinct trade-offs in computational profile.',
          table: {
            headers: [
              'Dimension',
              'Policy Iteration',
              'Value Iteration'
            ],
            rows: [
              [
                'Core operations',
                'Alternates full evaluation and greedy choice',
                'Single value update sweep combining both'
              ],
              [
                'Convergence rate',
                'Fewer iterations (typically < 10)',
                'More iterations (asymptotically infinite)'
              ],
              [
                'Cost per iteration',
                'High (solving systems of equations or inner loops)',
                'Low (one scan over states and actions)'
              ],
              [
                'Ideal environments',
                'Small state spaces where evaluation is cheap',
                'Larger state spaces where policy evaluation is slow'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
            'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
            'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
            'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).'
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
          text: '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
          list: [
            'Industry: Streaming / product experimentation',
            'Dataset: Millions of user sessions per variant',
            'Method: Hypothesis tests + CUPED variance reduction',
            'Results: Detect ~0.1% metric lifts reliably',
            'Impact: Data-driven feature launches at global scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Policy Iteration Algorithm: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: When does policy iteration terminate?
Ans: It terminates when the policy becomes stable (i.e., the policy improvement phase does not make any changes to the action selected in any state).`,
            `Q2: Why does policy evaluation often use iterative updates rather than direct matrix inversion?
Ans: Direct matrix inversion has $O(|S|^3)$ complexity, which is computationally expensive for large state spaces. Iterative evaluation via Bellman updates is much faster ($O(k|S|^2)$).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Policy Iteration Algorithm</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Policy Iteration Algorithm")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'solving-frozenlake': {
      title: 'FrozenLake Solution and Policy Visualization',
      subtitle: 'Solving FrozenLake-v1 using tabular value iteration in Python',
      sections: [
        {
          heading: 'What is FrozenLake Solution and Policy Visualization?',
          text: 'FrozenLake Solution and Policy Visualization is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, FrozenLake Solution and Policy Visualization provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use frozenlake solution and policy visualization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — FrozenLake Solution and Policy Visualization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: FrozenLake Solution and Policy Visualization sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'FrozenLake Solution and Policy Visualization with Python',
            code: `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("FrozenLake Solution and Policy Visualization — random agent return:", total)`,
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
          text: 'Pick the right variant for your data type and sample size.',
          table: {
            headers: [
              'Aspect',
              'Option A',
              'Option B',
              'When to use each'
            ],
            rows: [
              [
                'Data',
                'Numerical',
                'Categorical',
                'Numerical → t/ANOVA; categorical → chi-square'
              ],
              [
                'Sample size',
                'Large n',
                'Small n',
                'Large → z/normal; small → t or exact tests'
              ],
              [
                'Goal',
                'Estimate',
                'Test',
                'Estimation → CI; decision → hypothesis test'
              ],
              [
                'Assumptions',
                'Parametric',
                'Non-parametric',
                'Parametric when assumptions hold; else rank-based'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
            'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
            'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
            'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).'
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
          text: '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
          list: [
            'Industry: Streaming / product experimentation',
            'Dataset: Millions of user sessions per variant',
            'Method: Hypothesis tests + CUPED variance reduction',
            'Results: Detect ~0.1% metric lifts reliably',
            'Impact: Data-driven feature launches at global scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'FrozenLake Solution and Policy Visualization: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: In FrozenLake, why does the optimal policy sometimes choose to walk into a boundary wall?
Ans: Due to slipping dynamics (is_slippery=True), moving towards a wall acts as a "safety buffer". If the agent slips, it remains in the same cell rather than slipping into a nearby hole.`,
            `Q2: What is the transition model mapping key in FrozenLake?
Ans: \`env.P[state][action]\` maps to a list of transitions: \`(probability, next_state, reward, done)\`.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>FrozenLake Solution and Policy Visualization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — FrozenLake Solution and Policy Visualization")
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
