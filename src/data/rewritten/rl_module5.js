// reinforcement learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js rl_module5.js

export const rlModule5Structure = {
  module5: {
    title: 'Module 5: Deep Reinforcement Learning',
    topics: [
      {
        id: 'dqn-architecture',
        title: 'Deep Q-Networks (DQN)'
      },
      {
        id: 'policy-gradients',
        title: 'Policy Gradient and REINFORCE'
      },
      {
        id: 'actor-critic-ppo',
        title: 'Actor-Critic and PPO'
      },
      {
        id: 'dqn-case-study',
        title: 'Solving CartPole and LunarLander'
      },
      {
        id: 'practical-considerations',
        title: 'Practical Considerations in RL'
      }
    ]
  }
};

export const rlModule5Content = {
  module5: {
    'dqn-architecture': {
      title: 'Deep Q-Networks (DQN)',
      subtitle: 'Approximating Q-functions using deep neural networks',
      sections: [
        {
          heading: 'What is DQN?',
          text: 'In high-dimensional state spaces (like raw game screens or continuous sensor fields), storing values in a table is impossible. <strong>Deep Q-Networks (DQN)</strong>, introduced by Google DeepMind in 2013, resolve this by using a deep neural network $Q_\theta(s, a)$ to approximate the action-value function instead of a lookup table.',
          list: [
            'Input: State vector or raw pixel tensor.',
            'Output: A vector of estimated Q-values, one for each discrete action.',
            'Network parameters theta: Trained using gradient descent to minimize a Bellman loss function.'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>In high-dimensional state spaces (like raw game screens or continuous sensor fields), storing values in a table is impossible. <strong>Deep Q-Networks (DQN)</strong>, introduced by Google DeepMind in 2013, resolve this by using a deep neural network $Q_\theta(s, a)$ to approximate the action-value function instead of a lookup table. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, In high-dimensional state spaces (like raw game screens or continuous sensor fields), storing values in a table is impossible. <strong>Deep Q-Networks (DQN)</strong>, introduced by Google DeepMind in 2013, resolve this by using a deep neural network $Q_\theta(s, a)$ to approximate the action-value function instead of a lookup table. Input: State vector or raw pixel tensor. Output: A vector of estimated Q-values, one for each discrete action. Network parameters theta: Trained using gradient descent to minimize a Bellman loss function.</p>',
            '<p>You use deep q-networks (dqn) when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Deep Q-Networks (DQN)

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Deep Q-Networks (DQN) sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Deep Q-Networks (DQN) with Python',
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
print("Deep Q-Networks (DQN) — random agent return:", total)`,
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
            'Deep Q-Networks (DQN): know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is experience replay essential for training neural networks in RL?
Ans: It breaks correlation between sequential steps by shuffling experiences, satisfying the i.i.d. assumption required for stable gradient descent, and allows data reuse.`,
            `Q2: How does the target network prevent instability?
Ans: It holds the TD target values constant for several hundred steps. If the active network updated the targets at every step, it would create a feedback loop resembling a dog chasing its own tail, preventing convergence.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Deep Q-Networks (DQN)</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Deep Q-Networks (DQN)")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'policy-gradients': {
      title: 'Policy Gradient and REINFORCE',
      subtitle: 'Direct policy optimization via gradient ascent',
      sections: [
        {
          heading: 'What is Policy Gradient and REINFORCE?',
          text: 'Policy Gradient and REINFORCE is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Policy Gradient and REINFORCE provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use policy gradient and reinforce when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Policy Gradient and REINFORCE

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Policy Gradient and REINFORCE sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Policy Gradient and REINFORCE with Python',
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
print("Policy Gradient and REINFORCE — random agent return:", total)`,
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
            'Policy Gradient and REINFORCE: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main drawback of the REINFORCE algorithm?
Ans: It suffers from high variance because returns $G_t$ are calculated using full episodic Monte Carlo rollouts, which depend on many random transition outcomes.`,
            `Q2: How does parameterizing the policy directly help in continuous action spaces?
Ans: It allows outputting parameters of continuous probability distributions (like the mean $\\mu$ and standard deviation $\\sigma$ of a Gaussian distribution), from which continuous action values can be sampled directly.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Policy Gradient and REINFORCE</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Policy Gradient and REINFORCE")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'actor-critic-ppo': {
      title: 'Actor-Critic and PPO',
      subtitle: 'Combining policy optimization with value estimation',
      sections: [
        {
          heading: 'What is Actor-Critic and PPO?',
          text: 'Actor-Critic and PPO is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Actor-Critic and PPO provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use actor-critic and ppo when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Actor-Critic and PPO

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Actor-Critic and PPO sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Actor-Critic and PPO with Python',
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
print("Actor-Critic and PPO — random agent return:", total)`,
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
            'Actor-Critic and PPO: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does Actor-Critic improve on REINFORCE?
Ans: It replaces the high-variance Monte Carlo return $G_t$ with a low-variance bootstrapped TD estimate computed by the Critic network.`,
            `Q2: What is the main purpose of PPO's clipped surrogate objective?
Ans: It prevents the policy parameters from shifting too far from the old policy during a single update step, ensuring stable learning trajectories.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Actor-Critic and PPO</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Actor-Critic and PPO")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'dqn-case-study': {
      title: 'Solving CartPole and LunarLander',
      subtitle: 'Deploying deep Q-learning to master physical control tasks',
      sections: [
        {
          heading: 'What is Solving CartPole and LunarLander?',
          text: 'Solving CartPole and LunarLander is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Solving CartPole and LunarLander provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use solving cartpole and lunarlander when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Solving CartPole and LunarLander

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Solving CartPole and LunarLander sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Solving CartPole and LunarLander with Python',
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
print("Solving CartPole and LunarLander — random agent return:", total)`,
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
            'Solving CartPole and LunarLander: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does LunarLander-v3 take longer to train than CartPole-v1?
Ans: LunarLander has a higher observation dimensionality (8 vs 4), a larger action space (4 vs 2), and highly sparse/delayed rewards. The agent must discover complex sequences of engine burns to stabilize flight before receiving landing rewards.`,
            `Q2: What role do leg contacts play in the LunarLander observation vector?
Ans: They are binary observations indicating if the lander's legs are touching the ground, helping the agent learn that landing on the pad provides the target reward.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Solving CartPole and LunarLander</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Solving CartPole and LunarLander")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'practical-considerations': {
      title: 'Practical Considerations in RL',
      subtitle: 'Critical concepts for designing and tuning real-world RL systems',
      sections: [
        {
          heading: 'What is Practical Considerations in RL?',
          text: 'Practical Considerations in RL is essential for reinforcement learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in reinforcement learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Practical Considerations in RL provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use practical considerations in rl when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Practical Considerations in RL

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Practical Considerations in RL sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Practical Considerations in RL with Python',
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
print("Practical Considerations in RL — random agent return:", total)`,
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
          heading: '4. Sample Efficiency Comparison',
          text: 'Sample efficiency measures how much real environment data is required to learn a high-quality policy. Model-based algorithms are highly efficient because they plan using virtual simulations, whereas model-free policy gradients require massive datasets.',
          table: {
            headers: [
              'Algorithm Family',
              'Sample Efficiency',
              'Compute overhead',
              'Typical training steps'
            ],
            rows: [
              [
                'Model-Based (MPC / PETS)',
                'Extremely High',
                'Very High (Online planning)',
                '10,000 - 100,000 steps'
              ],
              [
                'Off-policy Deep Q-Learning (DQN)',
                'Medium',
                'Medium (Replay buffer gradient steps)',
                '100,000 - 1,000,000 steps'
              ],
              [
                'On-policy Policy Gradient (PPO)',
                'Low',
                'Low (Simple update steps)',
                '1,000,000 - 10,000,000 steps'
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
            'Practical Considerations in RL: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is reward hacking?
Ans: It is when an agent finds a way to exploit an auxiliary shaped reward function to accumulate rewards without solving the actual target task.`,
            `Q2: How does adding an entropy bonus to the policy gradient loss encourage exploration?
Ans: Entropy measures the uncertainty of a probability distribution. Maximizing policy entropy encourages the policy to output a wide distribution of actions rather than concentrating all probability on a single action.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Practical Considerations in RL</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Practical Considerations in RL")
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
