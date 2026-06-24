// reinforcement learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js rl_module3.js

export const rlModule3Structure = {
  module3: {
    title: 'Module 3: Model-Based Methods',
    topics: [
      {
        id: 'model-based-intro',
        title: 'Introduction to Model-Based RL'
      },
      {
        id: 'dyna-q',
        title: 'The Dyna-Q Architecture'
      },
      {
        id: 'mcts',
        title: 'Monte Carlo Tree Search (MCTS)'
      },
      {
        id: 'trajectory-opt-mpc',
        title: 'Trajectory Optimization and MPC'
      },
      {
        id: 'model-based-challenges',
        title: 'Model Bias and Sim-to-Real Challenges'
      }
    ]
  }
};

export const rlModule3Content = {
  module3: {
    'model-based-intro': {
      title: 'Introduction to Model-Based RL',
      subtitle: 'Exploiting learned or known models of environment transitions and rewards',
      sections: [
        {
          heading: 'What is Model-Based Reinforcement Learning?',
          text: `In reinforcement learning, a <strong>model</strong> refers to the agent's representation of the environment's transition dynamics $T(s, a, s') = \\mathbb{P}(S_{t+1}=s' | S_t=s, A_t=a)$ and reward function $R(s, a) = \\mathbb{E}[R_{t+1} | S_t=s, A_t=a]$. 

We divide RL algorithms into two categories based on how they utilize models:`,
          list: [
            'Model-Free RL: The agent interacts directly with the environment, updating policies/values from actual experienced trajectories (e.g. Q-learning, Policy Gradients). It does not learn or use a model.',
            'Model-Based RL: The agent learns a transition and reward model from experiences, or uses a pre-existing physics model, and uses it to plan future actions without executing them in the real environment.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>In reinforcement learning, a <strong>model</strong> refers to the agent's representation of the environment's transition dynamics $T(s, a, s') = \\mathbb{P}(S_{t+1}=s' | S_t=s, A_t=a)$ and reward function $R(s, a) = \\mathbb{E}[R_{t+1} | S_t=s, A_t=a]$. 

We divide RL algorithms into two categories based on how they utilize models: Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, In reinforcement learning, a <strong>model</strong> refers to the agent's representation of the environment's transition dynamics $T(s, a, s') = \\mathbb{P}(S_{t+1}=s' | S_t=s, A_t=a)$ and reward function $R(s, a) = \\mathbb{E}[R_{t+1} | S_t=s, A_t=a]$. 

We divide RL algorithms into two categories based on how they utilize models: Model-Free RL: The agent interacts directly with the environment, updating policies/values from actual experienced trajectories (e.g. Q-learning, Policy Gradients). It does not learn or use a model. Model-Based RL: The agent learns a transition and reward model from experiences, or uses a pre-existing physics model, and uses it to plan future actions without executing them in the real environment.</p>`,
            '<p>You use introduction to model-based rl when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Model-Based RL

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Model-Based RL sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Introduction to Model-Based RL with Python',
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
print("Introduction to Model-Based RL — random agent return:", total)`,
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
            'Introduction to Model-Based RL: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is model-based RL highly suited for robotics compared to model-free RL?
Ans: Robot physical wear-and-tear and data acquisition are expensive. Model-based RL is highly sample efficient, training the policy mostly in simulation inside a learned model, minimizing real-world trials.`,
            `Q2: What is the main bottleneck of model-based RL?
Ans: The model accuracy. If the learned model is inaccurate, the agent will learn optimal policies for the model that fail completely in the real environment (model bias).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Model-Based RL</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Model-Based RL")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'dyna-q': {
      title: 'The Dyna-Q Architecture',
      subtitle: 'Integrating acting, learning, and planning',
      sections: [
        {
          heading: 'What is The Dyna-Q Architecture?',
          text: 'The Dyna-Q Architecture is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The Dyna-Q Architecture provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use the dyna-q architecture when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — The Dyna-Q Architecture

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: The Dyna-Q Architecture sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'The Dyna-Q Architecture with Python',
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
print("The Dyna-Q Architecture — random agent return:", total)`,
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
            'The Dyna-Q Architecture: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does Dyna-Q use the model during planning?
Ans: It queries the model to fetch simulated next states and rewards for previously visited state-action pairs, executing Q-learning updates offline without interacting with the real environment.`,
            `Q2: What is the purpose of the exploration bonus in Dyna-Q+?
Ans: To encourage the agent to plan exploration over actions that haven't been visited for a long time, enabling adaptability in non-stationary environments.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>The Dyna-Q Architecture</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — The Dyna-Q Architecture")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    mcts: {
      title: 'Monte Carlo Tree Search (MCTS)',
      subtitle: 'Heuristic search algorithm for decision trees, powering modern board game AI',
      sections: [
        {
          heading: 'What is MCTS?',
          text: '<strong>Monte Carlo Tree Search (MCTS)</strong> is an online planning algorithm that evaluates actions by building a search tree of reachable states and runs simulated rollouts (Monte Carlo trials) to estimate state values. It is highly successful in games with large branch factors (like Go and Chess) where minimax search fails.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Monte Carlo Tree Search (MCTS)</strong> is an online planning algorithm that evaluates actions by building a search tree of reachable states and runs simulated rollouts (Monte Carlo trials) to estimate state values. It is highly successful in games with large branch factors (like Go and Chess) where minimax search fails. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Monte Carlo Tree Search (MCTS)</strong> is an online planning algorithm that evaluates actions by building a search tree of reachable states and runs simulated rollouts (Monte Carlo trials) to estimate state values. It is highly successful in games with large branch factors (like Go and Chess) where minimax search fails.</p>',
            '<p>You use monte carlo tree search (mcts) when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Monte Carlo Tree Search (MCTS)

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Monte Carlo Tree Search (MCTS) sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Monte Carlo Tree Search (MCTS) with Python',
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
print("Monte Carlo Tree Search (MCTS) — random agent return:", total)`,
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
            'Monte Carlo Tree Search (MCTS): know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Explain the purpose of the backpropagation step in MCTS.
Ans: It propagates the final reward from a simulated rollout upward through the tree paths, updating the average value estimates of all parent nodes that led to that outcome.`,
            `Q2: How does MCTS avoid searching the entire game tree?
Ans: It uses UCT to selectively expand nodes that are highly promising (exploitation) or highly uncertain (exploration), focusing computational resources on important paths.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Monte Carlo Tree Search (MCTS)</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Monte Carlo Tree Search (MCTS)")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'trajectory-opt-mpc': {
      title: 'Trajectory Optimization and MPC',
      subtitle: 'Online planning in continuous state-action spaces',
      sections: [
        {
          heading: 'What is Trajectory Optimization and MPC?',
          text: 'Trajectory Optimization and MPC is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Trajectory Optimization and MPC provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use trajectory optimization and mpc when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Trajectory Optimization and MPC

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Trajectory Optimization and MPC sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Trajectory Optimization and MPC with Python',
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
print("Trajectory Optimization and MPC — random agent return:", total)`,
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
            'Trajectory Optimization and MPC: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does MPC only execute the first action of the planned trajectory sequence?
Ans: Doing so incorporates real-world feedback. Re-planning at each step corrects for model errors and environment perturbations that would otherwise cause the agent to drift away from the target path.`,
            `Q2: What role does the transition model play in CEM planning?
Ans: It acts as a simulator, allowing the optimizer to evaluate the fitness (total reward) of candidate action sequences offline without trying them in the real environment.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Trajectory Optimization and MPC</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Trajectory Optimization and MPC")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'model-based-challenges': {
      title: 'Model Bias and Sim-to-Real Challenges',
      subtitle: 'Overcoming model inaccuracies and compounding errors',
      sections: [
        {
          heading: 'What is Model Bias and Sim-to-Real Challenges?',
          text: 'Model Bias and Sim-to-Real Challenges is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Model Bias and Sim-to-Real Challenges provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use model bias and sim-to-real challenges when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Model Bias and Sim-to-Real Challenges

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Model Bias and Sim-to-Real Challenges sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Model Bias and Sim-to-Real Challenges with Python',
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
print("Model Bias and Sim-to-Real Challenges — random agent return:", total)`,
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
            'Model Bias and Sim-to-Real Challenges: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the compounding error problem in model-based RL?
Ans: It is the exponential accumulation of small model prediction errors over multi-step planning horizons, causing predicted future states to look completely unrealistic.`,
            `Q2: How does an ensemble of models prevent model exploitation?
Ans: If the agent attempts to exploit a state-action region where predictions are highly uncertain, different models in the ensemble will predict wildly different outcomes, resulting in a low average expected return.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Model Bias and Sim-to-Real Challenges</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Model Bias and Sim-to-Real Challenges")
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
