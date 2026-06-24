// inferential statistics — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js stats_module4.js

export const statsModule4Structure = {
  module4: {
    title: 'Module 4: Regression Analysis',
    topics: [
      {
        id: 'regression',
        title: 'Introduction to Regression'
      },
      {
        id: 'correlation',
        title: 'Correlation Analysis'
      },
      {
        id: 'linear-regression',
        title: 'Linear Regression'
      },
      {
        id: 'logistic-regression',
        title: 'Logistic Regression'
      },
      {
        id: 'multiple-regression',
        title: 'Multiple Regression'
      }
    ]
  }
};

export const statsModule4Content = {
  module4: {
    regression: {
      title: 'Introduction to Regression',
      subtitle: 'Modeling relationships between variables',
      sections: [
        {
          heading: 'What is Regression?',
          text: '<strong>Regression analysis</strong> is a statistical method used to model the relationship between a dependent variable (response) and one or more independent variables (predictors). It is one of the most powerful and widely used tools in statistics, data science, and machine learning.',
          list: [
            '<strong>Prediction:</strong> Estimate future values of the dependent variable based on known predictors',
            '<strong>Explanation:</strong> Understand how changes in independent variables affect the outcome',
            '<strong>Control:</strong> Identify which factors significantly influence a process or outcome',
            '<strong>Forecasting:</strong> Project trends in business, economics, and science'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Regression analysis</strong> is a statistical method used to model the relationship between a dependent variable (response) and one or more independent variables (predictors). It is one of the most powerful and widely used tools in statistics, data science, and machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Regression analysis</strong> is a statistical method used to model the relationship between a dependent variable (response) and one or more independent variables (predictors). It is one of the most powerful and widely used tools in statistics, data science, and machine learning. <strong>Prediction:</strong> Estimate future values of the dependent variable based on known predictors <strong>Explanation:</strong> Understand how changes in independent variables affect the outcome <strong>Control:</strong> Identify which factors significantly influence a process or outcome <strong>Forecasting:</strong> Project trends in business, economics, and science</p>',
            '<p>You use introduction to regression when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Regression

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Regression sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Introduction to Regression with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Introduction to Regression
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
          text: '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
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
            'Introduction to Regression: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Regression</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Regression")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    correlation: {
      title: 'Correlation Analysis',
      subtitle: 'Measuring the strength and direction of linear relationships',
      sections: [
        {
          heading: 'What is Correlation?',
          text: '<strong>Correlation</strong> measures the degree to which two variables move together. It quantifies both the <strong>strength</strong> (how closely they follow a pattern) and <strong>direction</strong> (positive or negative) of a linear relationship.',
          list: [
            '<strong>Positive correlation:</strong> As X increases, Y tends to increase (e.g., height and weight)',
            '<strong>Negative correlation:</strong> As X increases, Y tends to decrease (e.g., car speed and travel time)',
            '<strong>No correlation:</strong> No discernible linear pattern between variables'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Correlation</strong> measures the degree to which two variables move together. It quantifies both the <strong>strength</strong> (how closely they follow a pattern) and <strong>direction</strong> (positive or negative) of a linear relationship. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Correlation</strong> measures the degree to which two variables move together. It quantifies both the <strong>strength</strong> (how closely they follow a pattern) and <strong>direction</strong> (positive or negative) of a linear relationship. <strong>Positive correlation:</strong> As X increases, Y tends to increase (e.g., height and weight) <strong>Negative correlation:</strong> As X increases, Y tends to decrease (e.g., car speed and travel time) <strong>No correlation:</strong> No discernible linear pattern between variables</p>',
            '<p>You use correlation analysis when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Correlation Analysis

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Correlation Analysis sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Correlation Analysis with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Correlation Analysis
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
          text: '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
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
            'Correlation Analysis: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Correlation Analysis</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Correlation Analysis")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'linear-regression': {
      title: 'Linear Regression',
      subtitle: 'Fitting a straight line to data for prediction and inference',
      sections: [
        {
          heading: 'What is Linear Regression?',
          text: 'Linear Regression is essential for inferential statistics.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in inferential statistics. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Linear Regression provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use linear regression when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Linear Regression

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Linear Regression sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Linear Regression with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Linear Regression
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
          text: '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
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
            'Linear Regression: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Linear Regression</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Linear Regression")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'logistic-regression': {
      title: 'Logistic Regression',
      subtitle: 'Predicting binary outcomes with probability',
      sections: [
        {
          heading: 'What is Logistic Regression?',
          text: 'Logistic Regression is essential for inferential statistics.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in inferential statistics. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Logistic Regression provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use logistic regression when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Logistic Regression

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Logistic Regression sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Logistic Regression with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Logistic Regression
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
          text: '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
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
            'Logistic Regression: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Logistic Regression</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Logistic Regression")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multiple-regression': {
      title: 'Multiple Regression',
      subtitle: 'Modeling with multiple predictors for richer inference',
      sections: [
        {
          heading: 'What is Multiple Regression?',
          text: '<strong>Multiple linear regression</strong> extends simple regression by including two or more independent variables. It allows us to: (1) model more complex relationships, (2) control for confounding variables, and (3) estimate the unique effect of each predictor.',
          example: {
            title: 'Multiple Regression Equation',
            code: `ŷ = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ

Example — Predicting House Price:
  Price = β₀ + β₁(Size) + β₂(Bedrooms)
            + β₃(Age) + β₄(Location)

Fitted coefficients:
  Price = 50 + 0.18(Size) + 12(Bedrooms)
          - 2.5(Age) + 25(Location)

Interpretation (holding others constant):
  - Each sq ft adds $180
  - Each bedroom adds $12,000
  - Each year of age reduces $2,500
  - Premium location adds $25,000`,
            output: 'Multiple regression isolates the effect of each variable while controlling for all others.',
            type: 'code'
          }
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Multiple linear regression</strong> extends simple regression by including two or more independent variables. It allows us to: (1) model more complex relationships, (2) control for confounding variables, and (3) estimate the unique effect of each predictor. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Multiple linear regression</strong> extends simple regression by including two or more independent variables. It allows us to: (1) model more complex relationships, (2) control for confounding variables, and (3) estimate the unique effect of each predictor.</p>',
            '<p>You use multiple regression when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multiple Regression

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multiple Regression sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Multiple Regression with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Multiple Regression
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
          text: '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
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
            'Multiple Regression: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multiple Regression</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multiple Regression")
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
