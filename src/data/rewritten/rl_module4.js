// reinforcement learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js rl_module4.js

export const rlModule4Structure = {
  module4: {
    title: 'Module 4: Model-Free Methods',
    topics: [
      {
        id: 'td-learning',
        title: 'Temporal Difference Learning'
      },
      {
        id: 'sarsa',
        title: 'SARSA (On-Policy TD Control)'
      },
      {
        id: 'q-learning',
        title: 'Q-Learning (Off-Policy TD Control)'
      },
      {
        id: 'sarsa-vs-q',
        title: 'SARSA vs Q-Learning Comparison'
      },
      {
        id: 'cartpole-qlearning',
        title: 'Solving CartPole with Tabular Q-Learning'
      }
    ]
  }
};

export const rlModule4Content = {
  module4: {
    'td-learning': {
      title: 'Temporal Difference Learning',
      subtitle: 'Model-free prediction by bootstrapping from current estimates',
      sections: [
        {
          heading: 'What is Temporal Difference (TD) Learning?',
          text: '<strong>Temporal Difference (TD) Learning</strong> is a model-free prediction method that combines the key ideas of Monte Carlo (MC) simulation and Dynamic Programming (DP). Like Monte Carlo, TD learns directly from experience observations without requiring a transition model. Like Dynamic Programming, TD updates its value estimates based in part on other learned estimates, a process known as <strong>bootstrapping</strong>.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Temporal Difference (TD) Learning</strong> is a model-free prediction method that combines the key ideas of Monte Carlo (MC) simulation and Dynamic Programming (DP). Like Monte Carlo, TD learns directly from experience observations without requiring a transition model. Like Dynamic Programming, TD updates its value estimates based in part on other learned estimates, a process known as <strong>bootstrapping</strong>. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Temporal Difference (TD) Learning</strong> is a model-free prediction method that combines the key ideas of Monte Carlo (MC) simulation and Dynamic Programming (DP). Like Monte Carlo, TD learns directly from experience observations without requiring a transition model. Like Dynamic Programming, TD updates its value estimates based in part on other learned estimates, a process known as <strong>bootstrapping</strong>.</p>',
            '<p>You use temporal difference learning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Temporal Difference Learning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Temporal Difference Learning sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Temporal Difference Learning with Python',
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
print("Temporal Difference Learning — random agent return:", total)`,
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
          heading: 'Comparison: DP vs. MC vs. TD',
          text: 'TD learning occupies a middle ground, balancing sample variance against model requirements.',
          table: {
            headers: [
              'Aspect',
              'Dynamic Programming (DP)',
              'Monte Carlo (MC)',
              'Temporal Difference (TD)'
            ],
            rows: [
              [
                'Requires Model?',
                'Yes (Transition probabilities P)',
                'No (Sample-based)',
                'No (Sample-based)'
              ],
              [
                'Updates when?',
                'Offline (after complete sweep)',
                'Offline (after complete episode)',
                'Online (after every step)'
              ],
              [
                'Bootstrapping?',
                `Yes (uses V(s') estimates)`,
                'No (uses actual returns G)',
                `Yes (uses V(s') estimates)`
              ],
              [
                'Bias / Variance',
                'High Bias, Zero Variance',
                'Zero Bias, High Variance',
                'Low Bias, Low Variance'
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
            'Temporal Difference Learning: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does "bootstrapping" mean in RL?
Ans: Bootstrapping is updating a state value estimate based on the estimated values of successor states, rather than waiting to observe the actual cumulative reward at the end of the episode.`,
            `Q2: Why does TD(0) typically have lower variance than Monte Carlo?
Ans: Monte Carlo estimates depend on the sum of rewards across an entire episode, compounding random variations over many steps. TD(0) depends only on a single-step transition reward plus the next state's value estimate.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Temporal Difference Learning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Temporal Difference Learning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    sarsa: {
      title: 'SARSA (On-Policy TD Control)',
      subtitle: 'Learning value functions on-policy by tracking actions',
      sections: [
        {
          heading: 'What is SARSA?',
          text: `<strong>SARSA</strong> is an <strong>on-policy</strong> temporal difference control algorithm that learns the action-value function $Q(s, a)$. The name SARSA is an acronym representing the variables used in its update step: State ($S_t$), Action ($A_t$), Reward ($R_{t+1}$), State ($S_{t+1}$), and Action ($A_{t+1}$). 

Being on-policy means SARSA estimates the values of the same behavioral policy it uses to select actions (typically $\\epsilon$-greedy exploration).`
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p><strong>SARSA</strong> is an <strong>on-policy</strong> temporal difference control algorithm that learns the action-value function $Q(s, a)$. The name SARSA is an acronym representing the variables used in its update step: State ($S_t$), Action ($A_t$), Reward ($R_{t+1}$), State ($S_{t+1}$), and Action ($A_{t+1}$). 

Being on-policy means SARSA estimates the values of the same behavioral policy it uses to select actions (typically $\\epsilon$-greedy exploration). Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, <strong>SARSA</strong> is an <strong>on-policy</strong> temporal difference control algorithm that learns the action-value function $Q(s, a)$. The name SARSA is an acronym representing the variables used in its update step: State ($S_t$), Action ($A_t$), Reward ($R_{t+1}$), State ($S_{t+1}$), and Action ($A_{t+1}$). 

Being on-policy means SARSA estimates the values of the same behavioral policy it uses to select actions (typically $\\epsilon$-greedy exploration).</p>`,
            '<p>You use sarsa (on-policy td control) when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — SARSA (On-Policy TD Control)

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: SARSA (On-Policy TD Control) sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'SARSA (On-Policy TD Control) with Python',
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
print("SARSA (On-Policy TD Control) — random agent return:", total)`,
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
            'SARSA (On-Policy TD Control): know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is SARSA classified as an on-policy algorithm?
Ans: It updates its action-value function $Q(S_t, A_t)$ using the target action $A_{t+1}$ selected directly from the exploration policy, meaning it evaluates the actual policy being followed.`,
            `Q2: What happens if epsilon is fixed to a high constant value like 0.5?
Ans: The agent will continue to select random actions 50% of the time, causing high variance and preventing the policy from converging to optimal performance.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>SARSA (On-Policy TD Control)</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — SARSA (On-Policy TD Control)")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'q-learning': {
      title: 'Q-Learning (Off-Policy TD Control)',
      subtitle: 'Learning the optimal policy independently of exploration',
      sections: [
        {
          heading: 'What is Q-Learning?',
          text: '<strong>Q-Learning</strong> (developed by Chris Watkins) is an <strong>off-policy</strong> temporal difference control algorithm. It is off-policy because it learns the action-value function $Q$ of the optimal target policy (which acts greedily), while the agent follows an exploratory behavioral policy (like $\epsilon$-greedy) to collect transitions.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Q-Learning</strong> (developed by Chris Watkins) is an <strong>off-policy</strong> temporal difference control algorithm. It is off-policy because it learns the action-value function $Q$ of the optimal target policy (which acts greedily), while the agent follows an exploratory behavioral policy (like $\epsilon$-greedy) to collect transitions. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Q-Learning</strong> (developed by Chris Watkins) is an <strong>off-policy</strong> temporal difference control algorithm. It is off-policy because it learns the action-value function $Q$ of the optimal target policy (which acts greedily), while the agent follows an exploratory behavioral policy (like $\epsilon$-greedy) to collect transitions.</p>',
            '<p>You use q-learning (off-policy td control) when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Q-Learning (Off-Policy TD Control)

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Q-Learning (Off-Policy TD Control) sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Q-Learning (Off-Policy TD Control) with Python',
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
print("Q-Learning (Off-Policy TD Control) — random agent return:", total)`,
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
            'Q-Learning (Off-Policy TD Control): know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is Q-Learning off-policy?
Ans: It estimates the value of the optimal greedy policy (using the max operator in its target) while executing actions based on an exploratory, stochastic behavioral policy.`,
            `Q2: If an agent explores randomly in state s_next, how does it affect Q-learning updates?
Ans: It does not affect the update target. Q-learning uses $\\max_{a} Q(s_{next}, a)$, making the update independent of the actual exploratory action executed.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Q-Learning (Off-Policy TD Control)</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Q-Learning (Off-Policy TD Control)")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'sarsa-vs-q': {
      title: 'SARSA vs Q-Learning Comparison',
      subtitle: 'Analyzing safety vs. optimality in model-free control',
      sections: [
        {
          heading: 'What is SARSA vs Q-Learning Comparison?',
          text: 'SARSA vs Q-Learning Comparison is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, SARSA vs Q-Learning Comparison provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use sarsa vs q-learning comparison when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — SARSA vs Q-Learning Comparison

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: SARSA vs Q-Learning Comparison sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'SARSA vs Q-Learning Comparison with Python',
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
print("SARSA vs Q-Learning Comparison — random agent return:", total)`,
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
          heading: 'Comparison Summary',
          table: {
            headers: [
              'Feature',
              'SARSA (On-Policy)',
              'Q-Learning (Off-Policy)'
            ],
            rows: [
              [
                'Update Target',
                'R + gamma * Q(s_next, a_next)',
                'R + gamma * max_a Q(s_next, a)'
              ],
              [
                'Exploration Cost',
                'Low online cost (avoids hazards)',
                'High online cost (frequently visits hazards during learning)'
              ],
              [
                'Asymptotic Policy',
                'Optimal for the exploration policy',
                'Optimal for the greedy policy (optimal policy)'
              ],
              [
                'Best for',
                'Online systems where failures are costly',
                'Off-line training in simulators'
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
            'SARSA vs Q-Learning Comparison: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: In Cliff Walking with epsilon-greedy exploration, why does Q-learning fall off the cliff more often than SARSA?
Ans: Q-learning assumes perfect execution. Epsilon-greedy actions occasionally choose a random direction. Since the optimal path is directly adjacent to the cliff, a random move will trigger a fall. SARSA detects this exploration risk and learns a safer, buffered path.`,
            `Q2: Does SARSA converge to the same policy as Q-learning in the limit?
Ans: Yes, if epsilon decays to zero, the exploration policy converges to the greedy policy, making on-policy and off-policy updates identical.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>SARSA vs Q-Learning Comparison</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — SARSA vs Q-Learning Comparison")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'cartpole-qlearning': {
      title: 'Solving CartPole with Tabular Q-Learning',
      subtitle: 'Discretizing continuous observation variables for tabular control',
      sections: [
        {
          heading: 'What is Solving CartPole with Tabular Q-Learning?',
          text: 'Solving CartPole with Tabular Q-Learning is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Solving CartPole with Tabular Q-Learning provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use solving cartpole with tabular q-learning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Solving CartPole with Tabular Q-Learning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Solving CartPole with Tabular Q-Learning sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Solving CartPole with Tabular Q-Learning with Python',
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
print("Solving CartPole with Tabular Q-Learning — random agent return:", total)`,
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
            'Solving CartPole with Tabular Q-Learning: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the drawbacks of discretizing state spaces to solve continuous environments?
Ans: Discretization suffers from the **Curse of Dimensionality**. If we have 10 state dimensions and divide each into 10 bins, we need $10^{10}$ tabular states, which requires massive memory and is sample-inefficient. Deep RL is used instead.`,
            `Q2: How does the discount factor gamma = 0.99 influence CartPole training?
Ans: It causes the agent to value long-term stability highly (a reward at step 100 is discounted by $0.99^{100} \\approx 0.36$), promoting policies that balance the pole far into the future.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Solving CartPole with Tabular Q-Learning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Solving CartPole with Tabular Q-Learning")
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
