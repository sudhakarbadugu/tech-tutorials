// inferential statistics — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js stats_module2.js

export const statsModule2Structure = {
  module2: {
    title: 'Module 2: Probability Foundations',
    topics: [
      {
        id: 'random-variables',
        title: 'Random Variables'
      },
      {
        id: 'probability-distributions',
        title: 'Probability Distributions'
      },
      {
        id: 'conditional-probability',
        title: 'Conditional Probability'
      },
      {
        id: 'bayes-theorem',
        title: 'Bayes Theorem'
      },
      {
        id: 'expectation-variance',
        title: 'Expectation and Variance'
      },
      {
        id: 'joint-distribution',
        title: 'Joint Distributions'
      }
    ]
  }
};

export const statsModule2Content = {
  module2: {
    'random-variables': {
      title: 'Random Variables',
      subtitle: 'Mapping uncertain outcomes to numerical values',
      sections: [
        {
          heading: 'What is a Random Variable?',
          text: 'A <strong>random variable</strong> is a function that assigns a numerical value to each outcome of a random experiment. It turns abstract events into numbers we can analyze, plot, and compute with.',
          list: [
            'Discrete Random Variable: takes countable values (0, 1, 2, ...) — number of heads in 10 coin flips',
            'Continuous Random Variable: takes any value in a range — height, weight, temperature',
            'Probability Mass Function (PMF): gives P(X = x) for discrete variables',
            'Probability Density Function (PDF): describes relative likelihood for continuous variables',
            'Cumulative Distribution Function (CDF): gives P(X ≤ x) for all types'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>random variable</strong> is a function that assigns a numerical value to each outcome of a random experiment. It turns abstract events into numbers we can analyze, plot, and compute with. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>random variable</strong> is a function that assigns a numerical value to each outcome of a random experiment. It turns abstract events into numbers we can analyze, plot, and compute with. Discrete Random Variable: takes countable values (0, 1, 2, ...) — number of heads in 10 coin flips Continuous Random Variable: takes any value in a range — height, weight, temperature Probability Mass Function (PMF): gives P(X = x) for discrete variables Probability Density Function (PDF): describes relative likelihood for continuous variables Cumulative Distribution Function (CDF): gives P(X ≤ x) for all types</p>',
            '<p>You use random variables when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Random Variables

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Random Variables sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The expected value of a random variable is its long-run average over many repetitions.',
          example: {
            title: 'Example: Expected value of a die roll',
            code: `Discrete random variable X = outcome of fair die

Possible values: {1, 2, 3, 4, 5, 6}
Each with probability: 1/6

Expected value:
  E[X] = Σ x · P(X=x)
       = 1(1/6) + 2(1/6) + 3(1/6) +
         4(1/6) + 5(1/6) + 6(1/6)
       = (1+2+3+4+5+6) / 6
       = 21 / 6 = 3.5

Interpretation:
  Over many rolls, the average
  outcome approaches 3.5.`,
            output: 'E[X] = 3.5 — even though 3.5 is not a possible single roll.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Random Variables with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Random Variables
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Discrete and continuous random variables require different mathematical tools.',
          table: {
            headers: [
              'Aspect',
              'Discrete',
              'Continuous'
            ],
            rows: [
              [
                'Values',
                'Countable (finite or infinite)',
                'Any value in an interval'
              ],
              [
                'P(X = x)',
                'Positive and meaningful',
                'Always zero'
              ],
              [
                'Probability function',
                'PMF: P(X = x)',
                'PDF: f(x), used for intervals'
              ],
              [
                'Total probability',
                'Σ P(X=x) = 1',
                '∫ f(x) dx = 1'
              ],
              [
                'Examples',
                'Coin flips, dice rolls, counts',
                'Height, temperature, time'
              ],
              [
                'CDF shape',
                'Step function',
                'Smooth, continuous curve'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating a continuous variable as if P(X = x) is meaningful (fix: always use intervals for continuous variables, e.g., P(170 < Height < 180))',
            'Mistake 2: Confusing the random variable with its expected value (fix: E[X] is a fixed number; X itself is random and varies across trials)',
            'Mistake 3: Assuming all random variables are either normal or uniform (fix: match the distribution to the data-generating process — counts often follow Poisson, binary outcomes follow Bernoulli)'
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
          text: 'Random variables model uncertainty in every quantitative field.',
          list: [
            'Finance: stock returns are modeled as continuous random variables (often normal or log-normal) to estimate risk',
            'Healthcare: number of patients arriving per hour is a discrete Poisson random variable; planning staff requires understanding its distribution',
            'Quality control: number of defective items in a batch is a binomial random variable; acceptance sampling uses its PMF',
            'Insurance: claim amounts are continuous random variables; premiums are set using expected values and tail probabilities'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A random variable maps outcomes to numbers',
            'Discrete: countable values, uses PMF',
            'Continuous: uncountable values, uses PDF over intervals',
            'CDF works for both: P(X ≤ x)',
            'Expected value E[X] is the long-run average',
            'Never ask for P(X = x) on a continuous variable'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Is the height of a randomly selected person discrete or continuous?
Ans: Continuous — height can take any value within a range.`,
            `Q2: What is P(X = 5) for a continuous random variable?
Ans: Zero — probability is only defined over intervals for continuous variables.`,
            `Q3: If X is the number of heads in 3 coin flips, what are the possible values of X?
Ans: {0, 1, 2, 3} — a discrete random variable.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Random Variables</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Random Variables")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'probability-distributions': {
      title: 'Probability Distributions',
      subtitle: 'Mathematical models that describe how data spreads',
      sections: [
        {
          heading: 'What are Probability Distributions?',
          text: 'A <strong>probability distribution</strong> describes the likelihood of all possible values for a random variable. It is the bridge between abstract probability theory and the patterns we observe in real data.',
          list: [
            'Binomial Distribution: number of successes in n independent trials with fixed probability p',
            'Poisson Distribution: number of rare events in a fixed interval or space',
            'Normal (Gaussian) Distribution: symmetric, bell-shaped; arises naturally via the Central Limit Theorem',
            'Uniform Distribution: all outcomes equally likely within a range',
            'Exponential Distribution: time between independent events in a Poisson process'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>probability distribution</strong> describes the likelihood of all possible values for a random variable. It is the bridge between abstract probability theory and the patterns we observe in real data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>probability distribution</strong> describes the likelihood of all possible values for a random variable. It is the bridge between abstract probability theory and the patterns we observe in real data. Binomial Distribution: number of successes in n independent trials with fixed probability p Poisson Distribution: number of rare events in a fixed interval or space Normal (Gaussian) Distribution: symmetric, bell-shaped; arises naturally via the Central Limit Theorem Uniform Distribution: all outcomes equally likely within a range Exponential Distribution: time between independent events in a Poisson process</p>',
            '<p>You use probability distributions when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Probability Distributions

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Probability Distributions sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The normal distribution is the most important because of the 68-95-99.7 rule and the Central Limit Theorem.',
          example: {
            title: 'Example: Normal distribution in IQ scores',
            code: `IQ scores: X ~ N(μ=100, σ=15)

68% of people fall within:
  100 ± 15 → IQ between 85 and 115

95% of people fall within:
  100 ± 30 → IQ between 70 and 130

99.7% of people fall within:
  100 ± 45 → IQ between 55 and 145

Z-score for IQ = 130:
  Z = (130 - 100) / 15 = 2.0

P(X > 130) = P(Z > 2.0)
           ≈ 2.5%`,
            output: 'Only about 2.5% of the population has an IQ above 130.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Probability Distributions with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Probability Distributions
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Discrete and continuous distributions serve different data types and use different functions.',
          table: {
            headers: [
              'Aspect',
              'Discrete',
              'Continuous'
            ],
            rows: [
              [
                'Random variable',
                'Countable outcomes',
                'Any value in a range'
              ],
              [
                'Probability at a point',
                'P(X = x) is valid and positive',
                'P(X = x) = 0'
              ],
              [
                'Function',
                'PMF: probability mass function',
                'PDF: probability density function'
              ],
              [
                'Normalization',
                'Σ P(X=x) = 1 over all x',
                '∫ f(x) dx = 1 over all x'
              ],
              [
                'Examples',
                'Binomial, Poisson, Bernoulli',
                'Normal, Exponential, Uniform'
              ],
              [
                'Visualization',
                'Bar chart or probability histogram',
                'Smooth density curve'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the normal distribution for count data with small n or extreme p (fix: use binomial for binary counts, Poisson for rare events; normal is only an approximation)',
            'Mistake 2: Assuming P(X = x) for a continuous variable (fix: probability for continuous variables is always over an interval, e.g., P(a < X < b))',
            'Mistake 3: Forgetting that binomial requires independence and constant p (fix: if trials are dependent or p changes, binomial is invalid; consider hypergeometric or other models)'
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
          text: 'Distributions model real-world phenomena across industries.',
          list: [
            'Binomial: A/B testing — "out of 1000 users, how many convert?" — powers experiment analysis',
            'Poisson: Call center staffing — average 5 calls per hour; model helps set capacity for 95% service level',
            'Normal: Manufacturing tolerances — part dimensions cluster around target; control charts assume normality',
            'Exponential: Reliability engineering — time until device failure with constant hazard rate; used in warranty planning'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Binomial: n independent trials, two outcomes, fixed p',
            'Poisson: rare events in fixed interval, λ = average rate',
            'Normal: symmetric, bell-shaped, μ and σ fully describe it',
            'Uniform: equal likelihood across a range',
            'Exponential: time between events in a Poisson process',
            'Match the distribution to the data-generating process'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What distribution models the number of heads in 20 fair coin flips?
Ans: Binomial distribution with n=20 and p=0.5.`,
            `Q2: Why is the normal distribution so widely used?
Ans: The Central Limit Theorem ensures that sums and averages of many independent variables approach normality.`,
            `Q3: What is the key parameter of the Poisson distribution?
Ans: λ (lambda), the average number of events in the given interval.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Probability Distributions</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Probability Distributions")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'conditional-probability': {
      title: 'Conditional Probability',
      subtitle: 'Updating likelihood when new information arrives',
      sections: [
        {
          heading: 'What is Conditional Probability?',
          text: '<strong>Conditional probability</strong> is the probability of an event occurring given that another event has already occurred. It is the mathematical formalization of "updating your beliefs with evidence."',
          list: [
            'Definition: P(A|B) = P(A ∩ B) / P(B), where P(B) > 0',
            'Intuition: restrict the sample space to only outcomes where B occurred, then find the fraction where A also occurred',
            `Independence: if P(A|B) = P(A), then A and B are independent — knowing B does not change A's probability`,
            'Law of Total Probability: P(A) = Σ P(A|Bi) · P(Bi) for a partition of the sample space',
            'Chain Rule: P(A ∩ B ∩ C) = P(A) · P(B|A) · P(C|A ∩ B)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Conditional probability</strong> is the probability of an event occurring given that another event has already occurred. It is the mathematical formalization of "updating your beliefs with evidence." Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, <strong>Conditional probability</strong> is the probability of an event occurring given that another event has already occurred. It is the mathematical formalization of "updating your beliefs with evidence." Definition: P(A|B) = P(A ∩ B) / P(B), where P(B) > 0 Intuition: restrict the sample space to only outcomes where B occurred, then find the fraction where A also occurred Independence: if P(A|B) = P(A), then A and B are independent — knowing B does not change A's probability Law of Total Probability: P(A) = Σ P(A|Bi) · P(Bi) for a partition of the sample space Chain Rule: P(A ∩ B ∩ C) = P(A) · P(B|A) · P(C|A ∩ B)</p>`,
            '<p>You use conditional probability when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Conditional Probability

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Conditional Probability sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The conditional probability formula is the foundation of Bayesian updating and medical testing.',
          example: {
            title: 'Example: Medical test diagnostic',
            code: `Given:
  Disease prevalence: P(D) = 0.01
  Test sensitivity: P(T+|D) = 0.95
  Test false positive: P(T+|¬D) = 0.05

Find P(D|T+) — probability of disease given a positive test:

Step 1: Compute P(T+) using total probability
  P(T+) = P(T+|D)·P(D) + P(T+|¬D)·P(¬D)
        = 0.95×0.01 + 0.05×0.99
        = 0.0095 + 0.0495 = 0.059

Step 2: Apply conditional probability
  P(D|T+) = P(T+|D) · P(D) / P(T+)
          = 0.95 × 0.01 / 0.059
          ≈ 0.161 (16.1%)`,
            output: 'Despite a positive test, there is only a 16.1% chance of actually having the disease — because the disease is rare.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Conditional Probability with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Conditional Probability
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Conditional probability, joint probability, and marginal probability are related but distinct concepts.',
          table: {
            headers: [
              'Probability Type',
              'Notation',
              'Meaning',
              'How to Compute'
            ],
            rows: [
              [
                'Marginal',
                'P(A)',
                'Probability of A alone',
                'Sum or integrate over other variables'
              ],
              [
                'Joint',
                'P(A ∩ B)',
                'Probability of A and B together',
                'From data or model directly'
              ],
              [
                'Conditional',
                'P(A|B)',
                'Probability of A given B occurred',
                'P(A ∩ B) / P(B)'
              ],
              [
                'Product (independent)',
                'P(A) · P(B)',
                'If A and B are independent',
                'P(A ∩ B) = P(A) · P(B)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming P(A|B) = P(B|A) (fix: these are almost never equal; use Bayes theorem to convert between them)',
            'Mistake 2: Ignoring the base rate when interpreting test results (fix: always incorporate P(Disease) via Bayes theorem; rare diseases yield surprisingly low posterior probabilities)',
            'Mistake 3: Treating dependent events as independent (fix: check if one event changes the probability of the other; if P(A|B) ≠ P(A), they are dependent)'
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
          text: 'Conditional probability powers decisions under partial information.',
          list: [
            'Medical diagnostics: interpreting test results requires knowing prevalence, sensitivity, and specificity — all conditional probabilities',
            'Spam filters: P(spam|word) updates the likelihood an email is spam based on the presence of certain words',
            'Finance: P(default|credit score) helps lenders assess risk for loan applicants',
            'Search engines: P(relevance|query, user history) ranks results by conditional relevance'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'P(A|B) = P(A ∩ B) / P(B)',
            'Conditional probability restricts the sample space to B',
            'Independence means P(A|B) = P(A)',
            'Law of total probability: P(A) = Σ P(A|Bi) · P(Bi)',
            'Chain rule breaks joint probabilities into conditionals',
            'Never assume P(A|B) = P(B|A)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If P(A) = 0.4 and P(B) = 0.5, can P(A|B) also be 0.4?
Ans: Yes — this would mean A and B are independent.`,
            `Q2: In the medical test example, why is P(Disease|Positive) so low despite high test sensitivity?
Ans: Because the disease is rare (low base rate); false positives from the healthy majority inflate the total positives.`,
            `Q3: What is the chain rule for three events A, B, and C?
Ans: P(A ∩ B ∩ C) = P(A) · P(B|A) · P(C|A ∩ B).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Conditional Probability</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Conditional Probability")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bayes-theorem': {
      title: 'Bayes Theorem',
      subtitle: 'The mathematical engine for updating beliefs with evidence',
      sections: [
        {
          heading: 'What is Bayes Theorem?',
          text: '<strong>Bayes Theorem</strong> provides a way to reverse conditional probabilities. It tells us how to update our belief about a hypothesis when we observe new evidence. It is the foundation of Bayesian statistics, machine learning, and probabilistic reasoning.',
          list: [
            'Prior P(H): your initial belief about the hypothesis before seeing evidence',
            'Likelihood P(E|H): probability of observing the evidence if the hypothesis is true',
            'Evidence P(E): total probability of the evidence across all hypotheses',
            'Posterior P(H|E): updated belief about the hypothesis after seeing evidence',
            'Bayes Theorem: P(H|E) = P(E|H) · P(H) / P(E)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Bayes Theorem</strong> provides a way to reverse conditional probabilities. It tells us how to update our belief about a hypothesis when we observe new evidence. It is the foundation of Bayesian statistics, machine learning, and probabilistic reasoning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Bayes Theorem</strong> provides a way to reverse conditional probabilities. It tells us how to update our belief about a hypothesis when we observe new evidence. It is the foundation of Bayesian statistics, machine learning, and probabilistic reasoning. Prior P(H): your initial belief about the hypothesis before seeing evidence Likelihood P(E|H): probability of observing the evidence if the hypothesis is true Evidence P(E): total probability of the evidence across all hypotheses Posterior P(H|E): updated belief about the hypothesis after seeing evidence Bayes Theorem: P(H|E) = P(E|H) · P(H) / P(E)</p>',
            '<p>You use bayes theorem when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bayes Theorem

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bayes Theorem sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Bayes theorem is simply a rearrangement of the definition of conditional probability, but its power lies in reversing the direction of inference.',
          example: {
            title: 'Example: Spam email filter',
            code: `Given:
  P(Spam) = 0.3          (prior: 30% of emails are spam)
  P("free"|Spam) = 0.8   (likelihood: 80% of spam contains "free")
  P("free") = 0.4         (evidence: 40% of all emails contain "free")

Find P(Spam|"free"):

Bayes theorem:
  P(Spam|"free") = P("free"|Spam) × P(Spam) / P("free")
                 = 0.8 × 0.3 / 0.4
                 = 0.24 / 0.4
                 = 0.6

Result:
  Seeing "free" updates spam probability
  from 30% → 60%.`,
            output: 'The word "free" doubles the estimated probability that an email is spam.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bayes Theorem with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Bayes Theorem
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Frequentist and Bayesian approaches interpret probability differently, leading to different methods.',
          table: {
            headers: [
              'Aspect',
              'Frequentist',
              'Bayesian'
            ],
            rows: [
              [
                'Probability meaning',
                'Long-run frequency',
                'Degree of belief'
              ],
              [
                'Parameters',
                'Fixed, unknown constants',
                'Random variables with distributions'
              ],
              [
                'Data role',
                'Repeatable random sample',
                'Fixed observed evidence'
              ],
              [
                'Inference',
                'Point estimates, confidence intervals',
                'Posterior distributions, credible intervals'
              ],
              [
                'Prior knowledge',
                'Not used',
                'Explicitly incorporated via priors'
              ],
              [
                'Computational cost',
                'Often simpler',
                'Often requires simulation (MCMC)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring the prior and focusing only on the likelihood (fix: the prior matters, especially when evidence is weak or the hypothesis is rare — always include P(H))',
            'Mistake 2: Computing P(E) incorrectly by forgetting alternative hypotheses (fix: P(E) = P(E|H) · P(H) + P(E|¬H) · P(¬H); include all possibilities)',
            'Mistake 3: Treating the posterior as a new certainty rather than an updated belief (fix: Bayes theorem is iterative — new evidence continuously updates the posterior, which becomes the next prior)'
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
          text: 'Bayes theorem is everywhere probabilistic reasoning is needed.',
          list: [
            'Machine learning: Naive Bayes classifiers use Bayes theorem with independence assumptions for text classification and spam detection',
            'Medical diagnosis: combines test results with patient history (prior) to estimate disease probability more accurately than tests alone',
            'Finance: Bayesian updating of asset return distributions as new market data arrives, enabling adaptive portfolio management',
            'Forensics: DNA match probabilities are updated with Bayes theorem to account for population prevalence and multiple comparison issues'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bayes theorem reverses conditional probability: P(H|E) = P(E|H) · P(H) / P(E)',
            'Prior P(H): belief before evidence',
            'Likelihood P(E|H): probability of evidence under the hypothesis',
            'Evidence P(E): total probability of seeing the evidence',
            'Posterior P(H|E): updated belief after evidence',
            `Iterative: today's posterior becomes tomorrow's prior`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If P(H) = 0.2, P(E|H) = 0.9, and P(E|¬H) = 0.3, what is P(H|E)?
Ans: P(E) = 0.9×0.2 + 0.3×0.8 = 0.42; P(H|E) = 0.9×0.2 / 0.42 ≈ 0.429.`,
            `Q2: Why is P(E) called the "normalizing constant"?
Ans: It ensures the posterior probabilities sum to 1 across all hypotheses.`,
            `Q3: In the spam filter example, what happens to P(Spam|"free") if P("free") increases to 0.6 while other values stay the same?
Ans: It decreases to 0.8×0.3/0.6 = 0.4 — more common words provide weaker evidence.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bayes Theorem</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bayes Theorem")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'expectation-variance': {
      title: 'Expectation and Variance',
      subtitle: 'Measuring the center and spread of a random variable',
      sections: [
        {
          heading: 'What are Expectation and Variance?',
          text: '<strong>Expected value (E[X])</strong> is the long-run average of a random variable — the "center of mass" of its distribution. <strong>Variance (Var[X])</strong> measures how far the values typically spread out from that center. Together, they summarize any distribution with just two numbers.',
          list: [
            'Expected Value E[X]: Σ x · P(X=x) for discrete; ∫ x · f(x) dx for continuous',
            'Variance Var[X]: E[(X - E[X])²] = E[X²] - (E[X])²',
            'Standard Deviation σ: √Var[X] — variance in original units',
            'Properties: E[aX + b] = aE[X] + b; Var[aX + b] = a²Var[X]',
            'For independent X and Y: E[X+Y] = E[X]+E[Y]; Var[X+Y] = Var[X]+Var[Y]'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Expected value (E[X])</strong> is the long-run average of a random variable — the "center of mass" of its distribution. <strong>Variance (Var[X])</strong> measures how far the values typically spread out from that center. Together, they summarize any distribution with just two numbers. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Expected value (E[X])</strong> is the long-run average of a random variable — the "center of mass" of its distribution. <strong>Variance (Var[X])</strong> measures how far the values typically spread out from that center. Together, they summarize any distribution with just two numbers. Expected Value E[X]: Σ x · P(X=x) for discrete; ∫ x · f(x) dx for continuous Variance Var[X]: E[(X - E[X])²] = E[X²] - (E[X])² Standard Deviation σ: √Var[X] — variance in original units Properties: E[aX + b] = aE[X] + b; Var[aX + b] = a²Var[X] For independent X and Y: E[X+Y] = E[X]+E[Y]; Var[X+Y] = Var[X]+Var[Y]</p>',
            '<p>You use expectation and variance when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Expectation and Variance

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Expectation and Variance sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The computational formula for variance is often faster than the definition.',
          example: {
            title: 'Example: Computing variance from data',
            code: `Data: [2, 4, 6, 8, 10]

Step 1: Expected value (mean)
  E[X] = (2+4+6+8+10) / 5 = 30/5 = 6

Step 2: E[X²]
  E[X²] = (4+16+36+64+100) / 5
        = 220 / 5 = 44

Step 3: Variance
  Var[X] = E[X²] - (E[X])²
         = 44 - 36 = 8

Step 4: Standard deviation
  σ = √8 ≈ 2.83

Alternative (definition):
  Var[X] = [(2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²]/5
         = [16+4+0+4+16]/5 = 40/5 = 8`,
            output: 'Both methods give Var[X] = 8 and σ ≈ 2.83.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Expectation and Variance with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Expectation and Variance
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Expected value, variance, and standard deviation describe different aspects of a distribution.',
          table: {
            headers: [
              'Measure',
              'Symbol',
              'What It Describes',
              'Units',
              'Best Used'
            ],
            rows: [
              [
                'Expected value',
                'E[X] or μ',
                'Center / long-run average',
                'Same as X',
                'Finding the typical outcome'
              ],
              [
                'Variance',
                'Var[X] or σ²',
                'Average squared deviation',
                'Squared units of X',
                'Mathematical operations, theory'
              ],
              [
                'Standard deviation',
                'σ',
                'Typical distance from mean',
                'Same as X',
                'Interpretation and reporting'
              ],
              [
                'Median',
                'M',
                'Middle value (50th percentile)',
                'Same as X',
                'Skewed data, robust to outliers'
              ],
              [
                'IQR',
                '—',
                'Spread of middle 50%',
                'Same as X',
                'Robust measure of dispersion'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing E[X²] with (E[X])² (fix: E[X²] is the average of squared values; (E[X])² is the square of the average; Var[X] = E[X²] - (E[X])²)',
            'Mistake 2: Adding variances for dependent variables (fix: Var[X+Y] = Var[X] + Var[Y] + 2Cov(X,Y); only equals Var[X] + Var[Y] when X and Y are independent)',
            'Mistake 3: Reporting variance instead of standard deviation to non-technical audiences (fix: variance is in squared units and hard to interpret; always report SD for practical communication)'
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
          text: 'Expectation and variance guide decisions under uncertainty.',
          list: [
            'Finance: expected return E[R] estimates profit; variance measures risk — the mean-variance framework underlies modern portfolio theory',
            'Insurance: premiums are set above E[claim] to cover variance risk; high-variance policies require higher premiums',
            'Project management: expected task duration helps schedule; variance identifies which tasks most threaten deadlines',
            'Quality control: expected part dimension is the target; variance measures manufacturing precision'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'E[X] = long-run average; center of the distribution',
            'Var[X] = E[(X-μ)²] = E[X²] - μ²',
            'σ = √Var[X]; same units as the original data',
            'Linear: E[aX+b] = aE[X]+b; Var[aX+b] = a²Var[X]',
            'Independent sums: E[X+Y] = E[X]+E[Y]; Var[X+Y] = Var[X]+Var[Y]',
            'Report SD (not variance) for practical interpretation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If E[X] = 5 and Var[X] = 4, what are E[2X+3] and Var[2X+3]?
Ans: E[2X+3] = 2(5)+3 = 13; Var[2X+3] = 2²×4 = 16.`,
            `Q2: Why is variance always non-negative?
Ans: Because it is the expected value of squared deviations, and squared terms are never negative.`,
            `Q3: If X and Y are independent with Var[X] = 3 and Var[Y] = 5, what is Var[X+Y]?
Ans: Var[X+Y] = 3 + 5 = 8.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Expectation and Variance</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Expectation and Variance")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'joint-distribution': {
      title: 'Joint Distributions',
      subtitle: 'Describing the behavior of multiple random variables together',
      sections: [
        {
          heading: 'What is a Joint Distribution?',
          text: 'A <strong>joint distribution</strong> describes the probability of combinations of values for two or more random variables simultaneously. It captures not just how each variable behaves individually, but how they relate to one another.',
          list: [
            'Joint PMF (discrete): P(X = x, Y = y) for all pairs (x, y)',
            'Joint PDF (continuous): f(x, y) such that P((X,Y) ∈ A) = ∬ₐ f(x,y) dx dy',
            'Marginal distribution: obtained by summing or integrating out the other variable',
            'Conditional distribution: P(X|Y = y) derived from the joint distribution',
            'Independence: X and Y are independent iff P(X,Y) = P(X) · P(Y) for all values'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>joint distribution</strong> describes the probability of combinations of values for two or more random variables simultaneously. It captures not just how each variable behaves individually, but how they relate to one another. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>joint distribution</strong> describes the probability of combinations of values for two or more random variables simultaneously. It captures not just how each variable behaves individually, but how they relate to one another. Joint PMF (discrete): P(X = x, Y = y) for all pairs (x, y) Joint PDF (continuous): f(x, y) such that P((X,Y) ∈ A) = ∬ₐ f(x,y) dx dy Marginal distribution: obtained by summing or integrating out the other variable Conditional distribution: P(X|Y = y) derived from the joint distribution Independence: X and Y are independent iff P(X,Y) = P(X) · P(Y) for all values</p>',
            '<p>You use joint distributions when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Joint Distributions

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Joint Distributions sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Marginal distributions are obtained by summing or integrating over the other variable. Conditional distributions use the joint and marginals.',
          example: {
            title: 'Example: Joint and marginal from a contingency table',
            code: `Joint PMF P(X,Y):

         Y=0   Y=1   Marginal
X=0     0.20   0.30    0.50
X=1     0.25   0.25    0.50
Marginal 0.45   0.55    1.00

Marginal of X:
  P(X=0) = 0.20 + 0.30 = 0.50
  P(X=1) = 0.25 + 0.25 = 0.50

Conditional P(Y|X=0):
  P(Y=0|X=0) = 0.20/0.50 = 0.40
  P(Y=1|X=0) = 0.30/0.50 = 0.60

Check independence:
  P(X=0,Y=0) = 0.20
  P(X=0)·P(Y=0) = 0.50×0.45 = 0.225
  0.20 ≠ 0.225 → NOT independent`,
            output: 'Joint distributions encode all information about the relationship between variables.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Joint Distributions with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Joint Distributions
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
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
          text: 'Joint, marginal, and conditional distributions are three views of the same underlying relationship.',
          table: {
            headers: [
              'Distribution',
              'Notation',
              'What It Describes',
              'How to Obtain'
            ],
            rows: [
              [
                'Joint',
                'P(X,Y) or f(x,y)',
                'Full relationship between X and Y',
                'From model or data directly'
              ],
              [
                'Marginal X',
                'P(X)',
                'X alone, ignoring Y',
                'Σᵧ P(X,Y) or ∫ f(x,y) dy'
              ],
              [
                'Marginal Y',
                'P(Y)',
                'Y alone, ignoring X',
                'Σₓ P(X,Y) or ∫ f(x,y) dx'
              ],
              [
                'Conditional X|Y',
                'P(X|Y)',
                'X given a specific Y value',
                'P(X,Y) / P(Y)'
              ],
              [
                'Conditional Y|X',
                'P(Y|X)',
                'Y given a specific X value',
                'P(X,Y) / P(X)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming independence without checking P(X,Y) = P(X) · P(Y) (fix: always verify with data or domain knowledge; many real-world variables are dependent)',
            'Mistake 2: Confusing marginal distributions with conditional distributions (fix: marginal is the overall distribution of one variable; conditional is the distribution given a specific value of the other)',
            'Mistake 3: Forgetting that covariance and correlation are derived from joint distributions (fix: Cov(X,Y) = E[XY] - E[X]E[Y]; this requires the joint distribution or joint data)'
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
          text: 'Joint distributions model relationships between variables in complex systems.',
          list: [
            'Finance: joint distribution of stock returns is used in portfolio optimization — correlations determine diversification benefits',
            'Healthcare: joint distribution of blood pressure and cholesterol guides cardiovascular risk models',
            'Machine learning: generative models like Gaussian Mixture Models learn joint distributions P(X, Y) for classification and clustering',
            'Weather: joint distribution of temperature and precipitation helps predict extreme events like floods and heatwaves'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Joint distribution describes P(X,Y) — all possible pairs',
            'Marginal: sum or integrate out the other variable',
            'Conditional: P(X|Y) = P(X,Y) / P(Y)',
            'Independence: P(X,Y) = P(X) · P(Y) for all pairs',
            'Covariance and correlation are moments of the joint distribution',
            'Joint distributions encode all relational information'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If P(X=1,Y=1) = 0.2, P(X=1) = 0.5, and P(Y=1) = 0.4, are X and Y independent?
Ans: No — because P(X=1) · P(Y=1) = 0.20, which equals P(X=1,Y=1). Wait, 0.5×0.4=0.20, so yes they are independent for this pair. Check all pairs to be certain.`,
            `Q2: How do you obtain the marginal distribution of X from the joint PMF?
Ans: Sum over all values of Y: P(X=x) = Σᵧ P(X=x, Y=y).`,
            `Q3: What does it mean if P(X|Y) = P(X) for all Y?
Ans: X and Y are independent — knowing Y provides no information about X.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Joint Distributions</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Joint Distributions")
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
