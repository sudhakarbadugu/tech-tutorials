// reinforcement learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js rl_module1.js

export const rlModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Reinforcement Learning',
    topics: [
      {
        id: 'intro-rl',
        title: 'Introduction to RL & Agent-Environment Loop'
      },
      {
        id: 'state-action-spaces',
        title: 'Reward, State, and Action Spaces'
      },
      {
        id: 'gymnasium-walkthrough',
        title: 'OpenAI Gymnasium API Walkthrough'
      },
      {
        id: 'random-vs-heuristic',
        title: 'Building Random and Heuristic Agents'
      },
      {
        id: 'performance-comparison',
        title: 'Performance Comparison and Visualization'
      }
    ]
  }
};

export const rlModule1Content = {
  module1: {
    'intro-rl': {
      title: 'Introduction to RL & Agent-Environment Loop',
      subtitle: 'Learning sequential decision making through interaction',
      sections: [
        {
          heading: 'What is Reinforcement Learning?',
          text: 'Reinforcement Learning (RL) is a paradigm of Machine Learning where an <strong>agent</strong> learns to make sequential decisions in an <strong>environment</strong> to maximize cumulative feedback called <strong>reward</strong>. Unlike supervised learning, which relies on a static dataset of inputs and corresponding ground-truth targets, the agent must discover which actions yield the highest reward by trial and error.',
          list: [
            'No supervisor: The agent is only given a reward signal, which might be sparse or delayed.',
            'Sequential feedback: Decision-making is chronological, where current actions affect future inputs.',
            'Trial-and-error: The agent must actively explore the environment to discover optimal actions.',
            'Feedback delay: Rewards may not be immediate (e.g., in chess, a reward is only given at the end of the game).'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Reinforcement Learning (RL) is a paradigm of Machine Learning where an <strong>agent</strong> learns to make sequential decisions in an <strong>environment</strong> to maximize cumulative feedback called <strong>reward</strong>. Unlike supervised learning, which relies on a static dataset of inputs and corresponding ground-truth targets, the agent must discover which actions yield the highest reward by trial and error. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Reinforcement Learning (RL) is a paradigm of Machine Learning where an <strong>agent</strong> learns to make sequential decisions in an <strong>environment</strong> to maximize cumulative feedback called <strong>reward</strong>. Unlike supervised learning, which relies on a static dataset of inputs and corresponding ground-truth targets, the agent must discover which actions yield the highest reward by trial and error. No supervisor: The agent is only given a reward signal, which might be sparse or delayed. Sequential feedback: Decision-making is chronological, where current actions affect future inputs. Trial-and-error: The agent must actively explore the environment to discover optimal actions. Feedback delay: Rewards may not be immediate (e.g., in chess, a reward is only given at the end of the game).</p>',
            '<p>You use introduction to rl & agent-environment loop when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to RL & Agent-Environment Loop

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to RL & Agent-Environment Loop sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Mathematical Concepts',
          text: `The trajectory of an agent is represented as a sequence of states, actions, and rewards:
$$\\tau = (S_0, A_0, R_1, S_1, A_1, R_2, \\dots)$$

The agent's goal is to maximize the expected <strong>Return</strong> $G_t$, which is the discounted sum of future rewards:
$$G_t = R_{t+1} + \\gamma R_{t+2} + \\gamma^2 R_{t+3} + \\dots = \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1}$$
where $\\gamma \\in [0, 1]$ is the discount factor.`,
          list: [
            'Discount Factor (gamma = 0): The agent is short-sighted and maximizes only the immediate reward R_{t+1}.',
            'Discount Factor (gamma -> 1): The agent is far-sighted, weighting future rewards heavily.'
          ]
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Introduction to RL & Agent-Environment Loop with Python',
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
print("Introduction to RL & Agent-Environment Loop — random agent return:", total)`,
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
            'Mistake 1: Treating RL like Supervised Learning. (Fix: Remember that there are no correct labels. The agent must explore to find out what works.)',
            'Mistake 2: Forgetting the Discount Factor. (Fix: If the horizon is infinite and gamma = 1, the return can diverge to infinity, making optimization mathematically impossible.)'
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
            'Introduction to RL & Agent-Environment Loop: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does RL differ from supervised learning?
Ans: Supervised learning learns from a fixed, labeled dataset. RL learns from scalar reward feedback generated dynamically through interaction with an environment.`,
            `Q2: What is the purpose of the discount factor gamma?
Ans: It discounts future rewards, modeling the time-value of rewards, ensuring mathematical convergence in infinite horizons, and controling the agent's planning horizon.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to RL & Agent-Environment Loop</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to RL & Agent-Environment Loop")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'state-action-spaces': {
      title: 'Reward, State, and Action Spaces',
      subtitle: 'Formalizing the interfaces of an RL environment',
      sections: [
        {
          heading: 'What is Reward, State, and Action Spaces?',
          text: 'Reward, State, and Action Spaces is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Reward, State, and Action Spaces provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use reward, state, and action spaces when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Reward, State, and Action Spaces

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Reward, State, and Action Spaces sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Reward, State, and Action Spaces with Python',
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
print("Reward, State, and Action Spaces — random agent return:", total)`,
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
            'Mistake 1: Designing overly complex shaped rewards that lead to unintended behaviors. (Fix: Keep reward shaping aligned with the ultimate objective. For example, a robot rewarded for speed might learn to run in circles instead of walking to the goal.)',
            'Mistake 2: Assuming full observability. (Fix: In real-world applications, states are almost always partially observable observations. Treat them as POMDPs.)'
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
            'Reward, State, and Action Spaces: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between a state and an observation?
Ans: A state is a complete description of the environment. An observation is a partial or noisy view of the state that the agent receives.`,
            `Q2: Why is reward shaping used?
Ans: To transform sparse rewards (e.g. win/lose) into dense rewards, providing immediate feedback that guides exploration.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Reward, State, and Action Spaces</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Reward, State, and Action Spaces")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'gymnasium-walkthrough': {
      title: 'OpenAI Gymnasium API Walkthrough',
      subtitle: 'The industry-standard interface for reinforcement learning environments',
      sections: [
        {
          heading: 'What is OpenAI Gymnasium API Walkthrough?',
          text: 'OpenAI Gymnasium API Walkthrough is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, OpenAI Gymnasium API Walkthrough provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use openai gymnasium api walkthrough when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — OpenAI Gymnasium API Walkthrough

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: OpenAI Gymnasium API Walkthrough sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'OpenAI Gymnasium API Walkthrough with Python',
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
print("OpenAI Gymnasium API Walkthrough — random agent return:", total)`,
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
            'OpenAI Gymnasium API Walkthrough: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the 5 values returned by env.step()?
Ans: observation (object), reward (float), terminated (boolean), truncated (boolean), and info (dictionary).`,
            `Q2: How do you choose an action randomly from a Gymnasium action space?
Ans: Use \`env.action_space.sample()\`.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>OpenAI Gymnasium API Walkthrough</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — OpenAI Gymnasium API Walkthrough")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'random-vs-heuristic': {
      title: 'Building Random and Heuristic Agents',
      subtitle: 'Implementing and comparing baselines in python',
      sections: [
        {
          heading: 'What is Building Random and Heuristic Agents?',
          text: 'Building Random and Heuristic Agents is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Building Random and Heuristic Agents provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use building random and heuristic agents when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Building Random and Heuristic Agents

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Building Random and Heuristic Agents sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Building Random and Heuristic Agents with Python',
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
print("Building Random and Heuristic Agents — random agent return:", total)`,
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
            'Building Random and Heuristic Agents: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What observation variables are used by our CartPole heuristic agent?
Ans: It uses the pole angle (observation[2]) and pole angular velocity (observation[3]) to decide the direction of push.`,
            `Q2: Why are baseline agents useful in RL?
Ans: They establish a benchmark score to verify if reinforcement learning algorithms are successfully learning policies that outperform simple random or rule-based decisions.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Building Random and Heuristic Agents</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Building Random and Heuristic Agents")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'performance-comparison': {
      title: 'Performance Comparison and Visualization',
      subtitle: 'Evaluating and plotting agent rewards over time',
      sections: [
        {
          heading: 'What is Performance Comparison and Visualization?',
          text: 'Performance Comparison and Visualization is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Performance Comparison and Visualization provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use performance comparison and visualization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Performance Comparison and Visualization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Performance Comparison and Visualization sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Performance Comparison and Visualization with Python',
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
print("Performance Comparison and Visualization — random agent return:", total)`,
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
            'Performance Comparison and Visualization: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is running a single evaluation episode misleading?
Ans: Due to environment stochasticity (e.g. random initial states or noisy transitions), an agent might perform unusually well or poorly in one trial. Multiple runs are required to compute statistical averages.`,
            `Q2: If an agent gets a mean score of 500 in CartPole-v1, what does that indicate?
Ans: It indicates the agent is achieving the maximum possible score for the environment, as CartPole-v1 truncates episodes at 500 steps.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Performance Comparison and Visualization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Performance Comparison and Visualization")
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
