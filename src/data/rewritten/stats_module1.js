// inferential statistics — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js stats_module1.js

export const statsModule1Structure = {
  module1: {
    title: 'Module 1: Introduction to Statistics',
    topics: [
      {
        id: 'intro',
        title: 'Introduction to Statistics'
      },
      {
        id: 'data-types',
        title: 'Types of Data'
      },
      {
        id: 'descriptive-stats',
        title: 'Descriptive Statistics'
      },
      {
        id: 'probability-basics',
        title: 'Probability Basics'
      },
      {
        id: 'distributions',
        title: 'Probability Distributions'
      },
      {
        id: 'sampling',
        title: 'Sampling Methods'
      },
      {
        id: 'central-limit',
        title: 'Central Limit Theorem'
      },
      {
        id: 'confidence-intervals',
        title: 'Confidence Intervals'
      },
      {
        id: 'hypothesis-intro',
        title: 'Introduction to Hypothesis Testing'
      }
    ]
  }
};

export const statsModule1Content = {
  module1: {
    intro: {
      title: 'Introduction to Statistics',
      subtitle: 'The foundation of data science and informed decision-making',
      sections: [
        {
          heading: 'What is Statistics?',
          text: 'Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It transforms raw numbers into actionable insights and underpins every field that relies on evidence.',
          list: [
            'Descriptive Statistics: summarize and describe data patterns',
            'Inferential Statistics: draw conclusions about populations from samples',
            'Probability: quantify uncertainty and predict outcomes',
            'Experimental Design: structure data collection for valid conclusions',
            'Statistical Modeling: build equations that represent real-world relationships'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It transforms raw numbers into actionable insights and underpins every field that relies on evidence. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It transforms raw numbers into actionable insights and underpins every field that relies on evidence. Descriptive Statistics: summarize and describe data patterns Inferential Statistics: draw conclusions about populations from samples Probability: quantify uncertainty and predict outcomes Experimental Design: structure data collection for valid conclusions Statistical Modeling: build equations that represent real-world relationships</p>',
            '<p>You use introduction to statistics when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Moore, McCabe & Craig (2017), <em>Introduction to the Practice of Statistics</em>; Gelman et al. (2013), <em>Bayesian Data Analysis</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Statistics

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Statistics sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The fundamental division of statistics guides how you approach any dataset.',
          example: {
            title: 'Example: Classifying a retail analysis',
            code: `Dataset: 10,000 customer transactions

Descriptive analysis:
  - Average spend = $120
  - Most frequent category = Electronics
  - Spread (SD) = $45

Inferential analysis:
  - Sample of 200 customers
  - 95% CI for average spend: ($115, $125)
  - Hypothesis test: Are male and female
    spending patterns different?
    p-value = 0.03 → Significant`,
            output: 'Descriptive tells you what happened; inferential guesses what it means for the broader population.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Descriptive vs inferential on seaborn tips',
            code: `import seaborn as sns
import numpy as np
from scipy import stats

tips = sns.load_dataset("tips")
# Descriptive: what happened in this sample
print("Mean bill:", round(tips["total_bill"].mean(), 2))
print("Median bill:", round(tips["total_bill"].median(), 2))

# Inferential: estimate population mean with 95% CI
n = len(tips)
m, s = tips["total_bill"].mean(), tips["total_bill"].std(ddof=1)
se = s / np.sqrt(n)
ci = stats.t.interval(0.95, df=n-1, loc=m, scale=se)
print(f"95% CI for population mean bill: ({ci[0]:.2f}, {ci[1]:.2f})")`,
            output: 'Mean bill: 19.79; Median: 17.80; 95% CI: (18.66, 20.92) — inferential quantifies uncertainty about the population.',
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
          text: 'Population vs sample is the most critical distinction in statistics.',
          table: {
            headers: [
              'Aspect',
              'Population',
              'Sample'
            ],
            rows: [
              [
                'Definition',
                'All members of a group',
                'A subset of the population'
              ],
              [
                'Parameters',
                'Fixed but often unknown',
                'Estimated from data'
              ],
              [
                'Notation',
                'μ (mean), σ (SD), N (size)',
                'x̄ (mean), s (SD), n (size)'
              ],
              [
                'When to use',
                'Census or complete data',
                'When full data is impractical'
              ],
              [
                'Accuracy',
                'Exact (if measured fully)',
                'Contains sampling error'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating sample statistics as exact population values (fix: always report confidence intervals or margins of error)',
            'Mistake 2: Ignoring how data was collected (fix: check for bias, randomness, and representativeness before analysis)',
            'Mistake 3: Confusing correlation with causation (fix: use controlled experiments or causal inference methods to claim cause)'
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
          text: '<strong>Spotify — listener analytics.</strong> Spotify analysts use descriptive stats (daily streams, skip rates) for dashboards and inferential stats (confidence intervals on genre lift) to decide playlist experiments. A 1% lift in completion rate across 500M users is tested with hypothesis tests before global rollout.',
          list: [
            'Healthcare: clinical trials use statistics to prove drug effectiveness and safety',
            'Finance: risk models estimate default probabilities and portfolio losses',
            'Tech: A/B testing uses hypothesis testing to pick the better product design',
            'Government: census sampling and economic indicators guide policy decisions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Statistics = collecting, analyzing, and interpreting data',
            'Two branches: descriptive (summarize) and inferential (predict)',
            'Population = all members; sample = subset used for inference',
            'Always question how data was collected before trusting conclusions',
            'Statistics turns uncertainty into measurable confidence'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between descriptive and inferential statistics?
Ans: Descriptive summarizes observed data; inferential generalizes from a sample to a population.`,
            `Q2: Why do we use samples instead of populations?
Ans: Populations are often too large, expensive, or impossible to measure completely.`,
            `Q3: What notation represents the population mean vs the sample mean?
Ans: Population mean = μ; sample mean = x̄.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Statistics</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
tips = sns.load_dataset("tips")
print("n =", len(tips))
print("Sample mean:", tips["total_bill"].mean())
print("Population? We only have this restaurant sample — inferential stats generalize with caution.`,
            output: 'n = 244; Sample mean: 19.79 — this describes the sample only until you justify representativeness.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'data-types': {
      title: 'Types of Data',
      subtitle: 'Classifying data correctly is the first step to choosing the right analysis',
      sections: [
        {
          heading: 'What are Data Types?',
          text: 'Data comes in different forms, and each form demands different statistical tools. Choosing the wrong method for your data type leads to meaningless results.',
          list: [
            'Numerical (Continuous): can take any value within a range — height, temperature, time',
            'Numerical (Discrete): countable whole numbers — number of students, defective items',
            'Categorical (Nominal): labels without natural order — gender, color, blood type',
            'Categorical (Ordinal): ordered categories — ratings, education levels, pain scales',
            'Binary: exactly two categories — yes/no, pass/fail, 0/1'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Data comes in different forms, and each form demands different statistical tools. Choosing the wrong method for your data type leads to meaningless results. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Data comes in different forms, and each form demands different statistical tools. Choosing the wrong method for your data type leads to meaningless results. Numerical (Continuous): can take any value within a range — height, temperature, time Numerical (Discrete): countable whole numbers — number of students, defective items Categorical (Nominal): labels without natural order — gender, color, blood type Categorical (Ordinal): ordered categories — ratings, education levels, pain scales Binary: exactly two categories — yes/no, pass/fail, 0/1</p>',
            '<p>You use types of data when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Measurement levels (Stevens)

  Nominal     Ordinal      Interval       Ratio
  (labels)    (ordered)    (no true 0)    (true 0)
  gender      Likert       °C temp        height, income
  |           |            |              |
  mode        median       mean, SD       ratios OK`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The measurement level determines which operations and statistics are valid.',
          example: {
            title: 'Example: Valid operations per data type',
            code: `Nominal (colors: red, blue, green):
  Valid: count, mode
  Invalid: mean, median, ranking

Ordinal (ratings: Poor < Fair < Good):
  Valid: median, percentiles, ranking
  Invalid: mean (distance unknown)

Interval (temperature °C):
  Valid: mean, SD, addition/subtraction
  Invalid: ratio (20°C is not "twice" 10°C)

Ratio (height, weight, income):
  Valid: all operations including ratios
  "Twice as tall" is meaningful`,
            output: 'Higher measurement levels allow more powerful analyses.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Classify columns in the penguins dataset',
            code: `import seaborn as sns
import pandas as pd

penguins = sns.load_dataset("penguins").dropna()
for col in penguins.columns:
    dtype = penguins[col].dtype
    nunique = penguins[col].nunique()
    kind = "numerical" if pd.api.types.is_numeric_dtype(penguins[col]) else "categorical"
    print(f"{col:12} {kind:12} dtype={dtype} nunique={nunique}")`,
            output: 'species/island/sex → categorical; bill_length_mm/body_mass_g → numerical — drives test selection.',
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
          text: 'The numerical vs categorical distinction is fundamental to choosing tests.',
          table: {
            headers: [
              'Aspect',
              'Numerical',
              'Categorical'
            ],
            rows: [
              [
                'Values',
                'Numbers (continuous or discrete)',
                'Labels or categories'
              ],
              [
                'Operations',
                'Arithmetic (add, subtract, average)',
                'Counting and grouping'
              ],
              [
                'Visualization',
                'Histograms, box plots, scatter plots',
                'Bar charts, pie charts'
              ],
              [
                'Central tendency',
                'Mean, median',
                'Mode, proportions'
              ],
              [
                'Example tests',
                't-test, ANOVA, correlation',
                'Chi-square, proportions test'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Computing the mean of ordinal data like Likert scales (fix: report median and interquartile range instead)',
            'Mistake 2: Treating categorical IDs as numbers (fix: zip codes and phone numbers are labels, not quantities)',
            'Mistake 3: Using histograms for categorical variables (fix: use bar charts; histograms are for numerical data)'
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
          text: 'Data type decisions appear in every domain.',
          list: [
            'Healthcare: blood pressure (continuous) vs blood type (nominal) need completely different summaries',
            'E-commerce: product ratings (ordinal) should not be averaged naively across all products',
            'HR: years of experience (discrete) vs salary bands (ordinal) determine the right regression approach'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Numerical = quantities (continuous or discrete)',
            'Categorical = labels (nominal or ordinal)',
            'Measurement level limits which statistics are valid',
            'Never average ordinal or categorical values blindly',
            'Match your visualization and test to your data type'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Is temperature in Celsius ratio or interval data?
Ans: Interval — 0°C is not an absence of temperature, so ratios are not meaningful.`,
            `Q2: What is the best measure of central tendency for ordinal data?
Ans: Median (or mode); the mean is not appropriate because distances between categories are unknown.`,
            `Q3: Give an example of discrete numerical data.
Ans: Number of cars in a parking lot, students in a class, or goals scored in a match.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Types of Data</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Types of Data")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'descriptive-stats': {
      title: 'Descriptive Statistics',
      subtitle: 'Summarizing data with numbers that tell a story',
      sections: [
        {
          heading: 'What are Descriptive Statistics?',
          text: 'Descriptive statistics condense a dataset into a few meaningful numbers. They answer: What is typical? How spread out is the data? What does the distribution look like?',
          list: [
            'Measures of Central Tendency: mean, median, mode — what is the center?',
            'Measures of Dispersion: range, variance, standard deviation, IQR — how spread out?',
            'Measures of Shape: skewness, kurtosis — is it symmetric? Heavy-tailed?',
            'Percentiles and Quartiles: where does a value stand relative to others?'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Descriptive statistics condense a dataset into a few meaningful numbers. They answer: What is typical? How spread out is the data? What does the distribution look like? Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Descriptive statistics condense a dataset into a few meaningful numbers. They answer: What is typical? How spread out is the data? What does the distribution look like? Measures of Central Tendency: mean, median, mode — what is the center? Measures of Dispersion: range, variance, standard deviation, IQR — how spread out? Measures of Shape: skewness, kurtosis — is it symmetric? Heavy-tailed? Percentiles and Quartiles: where does a value stand relative to others?</p>',
            '<p>You use descriptive statistics when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Descriptive Statistics

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Descriptive Statistics sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each measure of center behaves differently with skewed data and outliers.',
          example: {
            title: 'Example: Mean vs Median with an outlier',
            code: `Income data (in thousands):
  [30, 35, 40, 42, 45, 48, 50, 500]

Mean:
  x̄ = (30+35+40+42+45+48+50+500) / 8
    = 790 / 8 = 98.75

Median:
  Sorted: [30, 35, 40, 42, 45, 48, 50, 500]
  Median = (42 + 45) / 2 = 43.5

Mode:
  All unique → no mode`,
            output: 'The outlier (500) inflates the mean to 98.75, but the median stays at 43.5 — a more representative center.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Mean vs median on skewed bill data',
            code: `import seaborn as sns
import numpy as np

tips = sns.load_dataset("tips")
bills = tips["total_bill"]
print("Mean:", round(bills.mean(), 2))
print("Median:", round(bills.median(), 2))
print("Std:", round(bills.std(), 2))
print("IQR:", round(bills.quantile(0.75) - bills.quantile(0.25), 2))
# Inject outlier to show mean sensitivity
bills_out = bills.copy()
bills_out.iloc[0] = 500
print("Mean with outlier:", round(bills_out.mean(), 2))
print("Median with outlier:", round(bills_out.median(), 2))`,
            output: 'Mean jumps with one $500 outlier; median stays stable — use median for skewed spend data.',
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
          text: 'Mean, median, and mode respond differently to data shape.',
          table: {
            headers: [
              'Aspect',
              'Mean',
              'Median',
              'Mode'
            ],
            rows: [
              [
                'Calculation',
                'Sum divided by count',
                'Middle value',
                'Most frequent value'
              ],
              [
                'Sensitive to outliers',
                'Yes',
                'No',
                'No'
              ],
              [
                'Best for',
                'Symmetric distributions',
                'Skewed distributions',
                'Categorical data'
              ],
              [
                'Can be non-unique',
                'Always one value',
                'Always one value',
                'Can be multiple'
              ],
              [
                'Uses all data',
                'Yes',
                'No (only middle)',
                'No (only frequency)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using mean for skewed income or housing price data (fix: report median alongside mean, or use median as primary)',
            'Mistake 2: Ignoring standard deviation when comparing means (fix: a mean of 50 with SD=5 is very different from mean=50 with SD=50)',
            'Mistake 3: Reporting only the mean without any spread measure (fix: always pair central tendency with a dispersion measure)'
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
          text: 'Descriptive statistics power dashboards and reports.',
          list: [
            'Business KPIs: average revenue per user (ARPU) and its standard deviation reveal consistency',
            'Education: median test scores are fairer than mean scores when some students score extremely low',
            'Healthcare: IQR of patient wait times helps set realistic service level targets'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Mean = average; best for symmetric data without outliers',
            'Median = middle value; robust to outliers and skew',
            'Mode = most frequent; useful for categorical data',
            'Standard deviation = typical distance from the mean',
            'IQR = spread of the middle 50%; robust measure',
            'Always pair center with spread for a complete summary'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: When is the median preferred over the mean?
Ans: When data is skewed or contains extreme outliers.`,
            `Q2: What does standard deviation measure?
Ans: The average distance of data points from the mean.`,
            `Q3: If a dataset is right-skewed, where does the mean lie relative to the median?
Ans: The mean is pulled toward the tail and is greater than the median.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Descriptive Statistics</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Descriptive Statistics")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'probability-basics': {
      title: 'Probability Basics',
      subtitle: 'Quantifying uncertainty with mathematical rigor',
      sections: [
        {
          heading: 'What is Probability?',
          text: 'Probability measures the likelihood of an event occurring. It provides the mathematical foundation for statistical inference, machine learning, and decision-making under uncertainty.',
          list: [
            'Classical Probability: favorable outcomes divided by all possible outcomes (coin flip, dice roll)',
            'Empirical Probability: relative frequency observed in data (30 rainy days out of 365)',
            'Subjective Probability: personal belief based on experience (team has 70% chance to win)',
            'Axiomatic Probability: formal mathematical system (Kolmogorov axioms)',
            'Range: always between 0 (impossible) and 1 (certain)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Probability measures the likelihood of an event occurring. It provides the mathematical foundation for statistical inference, machine learning, and decision-making under uncertainty. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Probability measures the likelihood of an event occurring. It provides the mathematical foundation for statistical inference, machine learning, and decision-making under uncertainty. Classical Probability: favorable outcomes divided by all possible outcomes (coin flip, dice roll) Empirical Probability: relative frequency observed in data (30 rainy days out of 365) Subjective Probability: personal belief based on experience (team has 70% chance to win) Axiomatic Probability: formal mathematical system (Kolmogorov axioms) Range: always between 0 (impossible) and 1 (certain)</p>',
            '<p>You use probability basics when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Probability Basics

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Probability Basics sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core rules of probability govern how to combine event likelihoods.',
          example: {
            title: 'Example: Medical screening test',
            code: `Given:
  P(Disease) = 0.01
  P(Test+|Disease) = 0.95
  P(Test+|No Disease) = 0.05

Find P(Disease|Test+):

Step 1: Total probability of positive test
  P(Test+) = 0.95×0.01 + 0.05×0.99
          = 0.0095 + 0.0495 = 0.059

Step 2: Bayes theorem
  P(D|Test+) = 0.95×0.01 / 0.059
             ≈ 0.161 (16.1%)`,
            output: 'Even with a positive test, there is only a 16.1% chance of actually having the disease — because the disease is rare.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bayes theorem — medical screening simulation',
            code: `import numpy as np

np.random.seed(42)
N = 100_000
prev = 0.01          # disease prevalence
sens = 0.95          # P(test+|disease)
fpr  = 0.05          # P(test+|no disease)

diseased = np.random.rand(N) < prev
test_pos = np.where(diseased, np.random.rand(N) < sens, np.random.rand(N) < fpr)

# Bayes: P(D|+) = P(+|D)P(D) / P(+)
tp = ((diseased) & test_pos).sum()
fp = ((~diseased) & test_pos).sum()
ppv = tp / (tp + fp)
print(f"Positive predictive value ≈ {ppv:.3f} ({ppv*100:.1f}%)")`,
            output: 'PPV ≈ 0.16 — only ~16% of positives truly have the disease when prevalence is 1%.',
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
          text: 'Independence vs mutual exclusivity is often confused.',
          table: {
            headers: [
              'Aspect',
              'Independent Events',
              'Mutually Exclusive Events'
            ],
            rows: [
              [
                'Definition',
                'One does not affect the other',
                'Cannot happen at the same time'
              ],
              [
                'P(A ∩ B)',
                'P(A) × P(B)',
                '0'
              ],
              [
                'Example',
                'Two separate coin flips',
                'Heads and tails on one flip'
              ],
              [
                'P(A|B)',
                'P(A)',
                '0'
              ],
              [
                'Can both occur',
                'Yes',
                'No'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming conditional probability is symmetric (fix: P(A|B) ≠ P(B|A); use Bayes theorem to convert between them)',
            'Mistake 2: Treating dependent events as independent (fix: check if one event changes the probability of the other; use P(A ∩ B) = P(A) × P(B|A))',
            'Mistake 3: Confusing high test sensitivity with high positive predictive value (fix: always account for base rate using Bayes theorem)'
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
          text: 'Probability drives decisions across industries.',
          list: [
            'Insurance: premium pricing is based on probability of claims from historical data',
            'Medicine: diagnostic tests are evaluated using sensitivity, specificity, and predictive values',
            'Finance: Value at Risk (VaR) estimates the probability of portfolio losses exceeding a threshold'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Probability ranges from 0 (impossible) to 1 (certain)',
            'Addition rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
            'Multiplication rule: P(A ∩ B) = P(A) × P(B|A)',
            'Independence means P(A|B) = P(A); mutual exclusivity means P(A ∩ B) = 0',
            'Bayes theorem converts between P(A|B) and P(B|A)',
            'Base rate matters: rare diseases yield surprisingly low positive predictive values'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If two events are independent, what is P(A ∩ B)?
Ans: P(A) × P(B).`,
            `Q2: What is the probability of getting at least one head in two coin flips?
Ans: 1 - P(both tails) = 1 - 0.25 = 0.75 or 75%.`,
            `Q3: Why is P(Disease|Positive Test) often lower than expected?
Ans: Because the disease prevalence (base rate) is usually low; false positives from the healthy majority inflate the total positives.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Probability Basics</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Probability Basics")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    distributions: {
      title: 'Probability Distributions',
      subtitle: 'Mathematical models that describe how data is spread',
      sections: [
        {
          heading: 'What are Probability Distributions?',
          text: 'A probability distribution describes the likelihood of all possible outcomes for a random variable. It is the bridge between probability theory and real-world data patterns.',
          list: [
            'Discrete Distributions: outcomes are countable — binomial, Poisson, geometric',
            'Continuous Distributions: outcomes take any value in a range — normal, uniform, exponential',
            'PMF (Probability Mass Function): gives P(X = x) for discrete variables',
            'PDF (Probability Density Function): gives relative likelihood for continuous variables',
            'CDF (Cumulative Distribution Function): gives P(X ≤ x) for all variables'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A probability distribution describes the likelihood of all possible outcomes for a random variable. It is the bridge between probability theory and real-world data patterns. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A probability distribution describes the likelihood of all possible outcomes for a random variable. It is the bridge between probability theory and real-world data patterns. Discrete Distributions: outcomes are countable — binomial, Poisson, geometric Continuous Distributions: outcomes take any value in a range — normal, uniform, exponential PMF (Probability Mass Function): gives P(X = x) for discrete variables PDF (Probability Density Function): gives relative likelihood for continuous variables CDF (Cumulative Distribution Function): gives P(X ≤ x) for all variables</p>',
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
          text: 'The normal distribution is the most important due to the Central Limit Theorem.',
          example: {
            title: 'Example: Normal distribution and the 68-95-99.7 rule',
            code: `IQ scores: X ~ N(μ=100, σ=15)

68% of people:
  100 ± 15 → IQ between 85 and 115

95% of people:
  100 ± 30 → IQ between 70 and 130

99.7% of people:
  100 ± 45 → IQ between 55 and 145

Z-score for IQ=130:
  Z = (130 - 100) / 15 = 2.0
  P(X > 130) ≈ 2.5%`,
            output: 'The 68-95-99.7 rule lets you estimate probabilities without a calculator.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Normal, binomial, and Poisson with scipy',
            code: `import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 200)
plt.plot(x, stats.norm.pdf(x), label="N(0,1)")
# Binomial PMF
k = np.arange(0, 11)
plt.stem(k, stats.binom.pmf(k, n=10, p=0.3), linefmt="C1-", markerfmt="C1o", basefmt=" ", label="Binom(10,0.3)")
plt.title("Normal PDF vs Binomial PMF")
plt.legend(); plt.show()
print("P(X<=3) binomial:", round(stats.binom.cdf(3, 10, 0.3), 4))`,
            output: 'P(X<=3) binomial: 0.8497 — scipy handles both discrete and continuous distributions.',
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
          text: 'Discrete and continuous distributions require different tools.',
          table: {
            headers: [
              'Aspect',
              'Discrete',
              'Continuous'
            ],
            rows: [
              [
                'Random variable',
                'Countable values',
                'Any value in a range'
              ],
              [
                'Probability at a point',
                'P(X = x) is meaningful',
                'P(X = x) = 0 (use intervals)'
              ],
              [
                'Function type',
                'PMF: probability mass',
                'PDF: probability density'
              ],
              [
                'Sum/Integral',
                'Σ PMF(x) = 1',
                '∫ PDF(x) dx = 1'
              ],
              [
                'Examples',
                'Binomial, Poisson, Bernoulli',
                'Normal, Uniform, Exponential'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Asking for P(X = x) on a continuous variable (fix: use P(a < X < b); probability at any single point is zero)',
            'Mistake 2: Using normal distribution for highly skewed or bounded data (fix: check skewness; consider log-normal or beta distributions)',
            'Mistake 3: Applying binomial conditions where trials are not independent (fix: verify fixed n, two outcomes, constant p, and independence)'
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
          text: 'Distributions model real phenomena.',
          list: [
            'Binomial: A/B test conversions — how many users click out of 1000?',
            'Poisson: call center arrivals — average 5 calls per hour; what is P(>8 calls)?',
            'Normal: manufacturing tolerances — part dimensions cluster around the target',
            'Exponential: device reliability — time until failure with constant hazard rate'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'PMF for discrete; PDF for continuous; CDF works for both',
            'Normal distribution: symmetric, bell-shaped, defined by μ and σ',
            '68-95-99.7 rule: quick probability estimates for normal data',
            'Binomial: n independent trials with two outcomes each',
            'Poisson: rare events in fixed intervals or large populations',
            'Always check if your data matches the distribution assumptions'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the probability of exactly 3 successes in 10 Bernoulli trials with p=0.2?
Ans: C(10,3) × 0.2³ × 0.8⁷ ≈ 120 × 0.008 × 0.2097 ≈ 0.201.`,
            `Q2: Why is P(X = 5) = 0 for a continuous random variable?
Ans: Because there are infinitely many points; probability is defined only over intervals.`,
            `Q3: What percentage of data falls within 2 standard deviations of the mean in a normal distribution?
Ans: Approximately 95%.`,
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
    sampling: {
      title: 'Sampling Methods',
      subtitle: 'Selecting representative subsets from a population',
      sections: [
        {
          heading: 'What is Sampling?',
          text: 'Sampling is the process of selecting a subset from a population to estimate population characteristics. A good sample is representative — it mirrors the population in key attributes.',
          list: [
            'Simple Random Sampling: every member has an equal chance; most unbiased',
            'Stratified Sampling: divide into homogeneous groups (strata), sample from each',
            'Systematic Sampling: select every k-th member from an ordered list',
            'Cluster Sampling: divide into clusters, randomly select entire clusters',
            'Convenience Sampling: select readily available subjects; prone to bias'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Sampling is the process of selecting a subset from a population to estimate population characteristics. A good sample is representative — it mirrors the population in key attributes. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Sampling is the process of selecting a subset from a population to estimate population characteristics. A good sample is representative — it mirrors the population in key attributes. Simple Random Sampling: every member has an equal chance; most unbiased Stratified Sampling: divide into homogeneous groups (strata), sample from each Systematic Sampling: select every k-th member from an ordered list Cluster Sampling: divide into clusters, randomly select entire clusters Convenience Sampling: select readily available subjects; prone to bias</p>',
            '<p>You use sampling methods when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Sampling Methods

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Sampling Methods sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Sample size determines the precision of your estimates.',
          example: {
            title: 'Example: Standard error of the mean',
            code: `Population: μ = 500, σ = 100

Sample size n = 25:
  SE = σ / √n = 100 / 5 = 20
  Margin of error (95%): 1.96 × 20 ≈ 39

Sample size n = 100:
  SE = σ / √n = 100 / 10 = 10
  Margin of error (95%): 1.96 × 10 ≈ 20

Quadrupling sample size
halves the margin of error.`,
            output: 'Larger samples give tighter estimates, but with diminishing returns.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Compare sampling strategies with numpy',
            code: `import numpy as np
import pandas as pd

np.random.seed(0)
pop = np.random.normal(100, 15, 10_000)
# Simple random sample
srs = np.random.choice(pop, 50, replace=False)
# Systematic sample
step = len(pop) // 50
sys = pop[::step][:50]
print("SRS mean:", round(srs.mean(), 2), "SE:", round(srs.std()/np.sqrt(50), 2))
print("Systematic mean:", round(sys.mean(), 2))`,
            output: 'Both means near 100; SE ≈ 2.1 — larger n halves SE via σ/√n.',
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
          text: 'Random sampling vs non-random sampling determines whether you can generalize.',
          table: {
            headers: [
              'Aspect',
              'Probability Sampling',
              'Non-Probability Sampling'
            ],
            rows: [
              [
                'Selection',
                'Random, known probabilities',
                'Convenience, judgment, quota'
              ],
              [
                'Bias',
                'Minimized',
                'Often present, hard to measure'
              ],
              [
                'Generalization',
                'Valid to population',
                'Risky or invalid'
              ],
              [
                'Cost/Effort',
                'Higher',
                'Lower'
              ],
              [
                'When to use',
                'Research, surveys, experiments',
                'Exploratory, pilot studies'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using convenience samples and treating results as population-level (fix: only generalize from probability samples; report limitations otherwise)',
            'Mistake 2: Ignoring non-response bias (fix: track who did not respond; compare early vs late responders as a proxy)',
            'Mistake 3: Sampling too small for the subgroup you want to analyze (fix: plan sample size for the smallest subgroup of interest, not just the total)'
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
          text: 'Sampling is everywhere in practice.',
          list: [
            'Election polls: stratified sampling by age, region, and income improves prediction accuracy',
            'Quality control: systematic sampling of every 50th item from a production line',
            'Clinical trials: stratified randomization ensures balanced treatment groups by disease severity',
            'Market research: cluster sampling reduces costs when the population is geographically spread'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Simple random = every member equally likely; gold standard',
            'Stratified = sample from each subgroup; improves precision',
            'Systematic = every k-th item; simple but risks periodic patterns',
            'Cluster = sample groups, not individuals; cheaper but less precise',
            'Standard error = σ/√n; larger n → smaller error',
            'Non-probability samples cannot be reliably generalized'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main advantage of stratified sampling over simple random sampling?
Ans: It ensures representation from all subgroups, often improving precision.`,
            `Q2: If you quadruple sample size, what happens to the standard error?
Ans: It is halved, because SE is proportional to 1/√n.`,
            `Q3: Why is convenience sampling problematic for inference?
Ans: It introduces selection bias; the sample is unlikely to represent the population.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Sampling Methods</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Sampling Methods")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'central-limit': {
      title: 'Central Limit Theorem',
      subtitle: 'Why sample means become normal — the backbone of inference',
      sections: [
        {
          heading: 'What is the Central Limit Theorem?',
          text: 'The Central Limit Theorem (CLT) states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution.',
          list: [
            'Applies to sample means, sums, and proportions',
            'Population can be skewed, uniform, bimodal, or anything else',
            'The magic number is typically n ≥ 30 for means',
            'For proportions, np ≥ 10 and n(1-p) ≥ 10 is the rule',
            'CLT is why we can use normal-based confidence intervals and tests'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The Central Limit Theorem (CLT) states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The Central Limit Theorem (CLT) states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution. Applies to sample means, sums, and proportions Population can be skewed, uniform, bimodal, or anything else The magic number is typically n ≥ 30 for means For proportions, np ≥ 10 and n(1-p) ≥ 10 is the rule CLT is why we can use normal-based confidence intervals and tests</p>',
            '<p>You use central limit theorem when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Central Limit Theorem

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Central Limit Theorem sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The sampling distribution has its own mean and standard deviation.',
          example: {
            title: 'Example: Uniform population → normal sampling distribution',
            code: `Population: Uniform on [0, 10]
  μ = 5, σ = 10/√12 ≈ 2.89

Take samples of n = 30:
  Mean of sample means = μ = 5
  Standard error = σ/√n = 2.89/√30 ≈ 0.53

Result:
  Even though the population is uniform,
  the distribution of x̄ across 1000 samples
  is approximately N(5, 0.53²).

95% of sample means fall within:
  5 ± 1.96 × 0.53 → (3.96, 6.04)`,
            output: 'The CLT guarantees normality of sample means, enabling z-tests and confidence intervals.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'CLT demo — uniform population, normal sample means',
            code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

np.random.seed(42)
pop = np.random.uniform(0, 10, 100_000)  # skewed population
means = [np.random.choice(pop, 30).mean() for _ in range(2000)]
plt.hist(means, bins=40, density=True, alpha=0.7, label="x̄ distribution")
x = np.linspace(min(means), max(means), 100)
plt.plot(x, stats.norm.pdf(x, np.mean(means), np.std(means)), "r-", lw=2)
plt.title("CLT: sample means ~ normal even from uniform pop")
plt.legend(); plt.show()
print("Mean of means:", round(np.mean(means), 3), "SE:", round(np.std(means), 3))`,
            output: 'Mean of means ≈ 5.0; histogram matches normal curve — CLT in action.',
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
          text: 'Population distribution vs sampling distribution are two different things.',
          table: {
            headers: [
              'Aspect',
              'Population Distribution',
              'Sampling Distribution of x̄'
            ],
            rows: [
              [
                'What it describes',
                'Values of individual data points',
                'Values of sample means'
              ],
              [
                'Shape',
                'Can be any shape',
                'Approximately normal for large n'
              ],
              [
                'Mean',
                'μ',
                'μ (same as population)'
              ],
              [
                'Spread',
                'σ',
                'σ/√n (standard error)'
              ],
              [
                'Depends on n',
                'No',
                'Yes — larger n = tighter spread'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying CLT to individual data points instead of sample statistics (fix: CLT applies to means, sums, and proportions — not to raw observations)',
            'Mistake 2: Using n < 30 with heavily skewed data and assuming normality (fix: for small samples, use t-distribution or non-parametric methods if skewness is extreme)',
            'Mistake 3: Forgetting that CLT requires independent observations (fix: time series and clustered data violate independence; use adjusted methods)'
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
          text: 'The CLT justifies most statistical inference in practice.',
          list: [
            'Quality control: average batch weights are normally distributed, enabling control charts',
            'Polling: sample proportions of voter preference are approximately normal, allowing margin-of-error calculations',
            'Finance: portfolio returns are sums of individual asset returns; CLT justifies normal models for risk',
            'A/B testing: conversion rate differences rely on CLT to compute p-values and confidence intervals'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CLT: sample means become normal as n increases, regardless of population shape',
            'Mean of sample means = population mean μ',
            'Standard error = σ/√n',
            'Rule of thumb: n ≥ 30 for means; np ≥ 10 and n(1-p) ≥ 10 for proportions',
            'CLT applies to sample statistics, not individual observations',
            'Independence of observations is required for CLT to hold'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Does the CLT require the population to be normally distributed?
Ans: No — the CLT works for any population shape given a large enough sample size.`,
            `Q2: If population SD = 20 and n = 64, what is the standard error?
Ans: SE = 20/√64 = 20/8 = 2.5.`,
            `Q3: Why is the CLT important for confidence intervals?
Ans: It guarantees that sample means are approximately normal, so we can use z/t tables to construct intervals.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Central Limit Theorem</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Central Limit Theorem")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'confidence-intervals': {
      title: 'Confidence Intervals',
      subtitle: 'Quantifying uncertainty around sample estimates',
      sections: [
        {
          heading: 'What is a Confidence Interval?',
          text: 'A confidence interval (CI) is a range of values, derived from sample data, that is likely to contain the true population parameter. It replaces a single point estimate with a range that reflects sampling uncertainty.',
          list: [
            '95% CI means: if we repeated the sampling 100 times, ~95 intervals would contain the true parameter',
            'Wider intervals = more confidence but less precision',
            'Narrower intervals = more precision but lower confidence',
            'Centered on the sample statistic (mean, proportion, etc.)',
            'Width depends on sample size, variability, and confidence level'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A confidence interval (CI) is a range of values, derived from sample data, that is likely to contain the true population parameter. It replaces a single point estimate with a range that reflects sampling uncertainty. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A confidence interval (CI) is a range of values, derived from sample data, that is likely to contain the true population parameter. It replaces a single point estimate with a range that reflects sampling uncertainty. 95% CI means: if we repeated the sampling 100 times, ~95 intervals would contain the true parameter Wider intervals = more confidence but less precision Narrower intervals = more precision but lower confidence Centered on the sample statistic (mean, proportion, etc.) Width depends on sample size, variability, and confidence level</p>',
            '<p>You use confidence intervals when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Confidence Intervals

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Confidence Intervals sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The general form is estimate ± margin of error.',
          example: {
            title: 'Example: 95% confidence interval for a mean',
            code: `Sample: n = 36, x̄ = 52, s = 12

Standard error:
  SE = s / √n = 12 / 6 = 2

95% CI (using z = 1.96):
  CI = 52 ± 1.96 × 2
     = 52 ± 3.92
     = (48.08, 55.92)

Interpretation:
  We are 95% confident the
  true population mean lies
  between 48.08 and 55.92.`,
            output: 'The interval widens with higher confidence or more variability, and narrows with larger samples.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: '95% CI for mean bill — t interval',
            code: `import seaborn as sns
import numpy as np
from scipy import stats

tips = sns.load_dataset("tips")
x = tips["total_bill"]
n, m, s = len(x), x.mean(), x.std(ddof=1)
ci = stats.t.interval(0.95, df=n-1, loc=m, scale=s/np.sqrt(n))
print(f"n={n}, x̄={m:.2f}, 95% CI=({ci[0]:.2f}, {ci[1]:.2f})")`,
            output: 'n=244, x̄=19.79, 95% CI=(18.66, 20.92) — plausible range for population mean.',
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
          text: 'Z-interval vs t-interval depends on what you know about the population.',
          table: {
            headers: [
              'Aspect',
              'Z-Interval',
              'T-Interval'
            ],
            rows: [
              [
                'When to use',
                'σ known, or large n',
                'σ unknown, small n'
              ],
              [
                'Distribution',
                'Standard normal',
                `Student's t-distribution`
              ],
              [
                'Critical value',
                'z (e.g., 1.96 for 95%)',
                't with df = n-1'
              ],
              [
                'Assumption',
                'Population normal or n large',
                'Population approximately normal'
              ],
              [
                'Typical use',
                'Proportions, large samples',
                'Means with small samples'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Saying "there is a 95% probability the true mean is in this interval" (fix: the interval either contains it or not; 95% refers to the method, not this specific interval)',
            'Mistake 2: Using z when n is small and σ is unknown (fix: use t-distribution; it accounts for extra uncertainty from estimating σ)',
            'Mistake 3: Making CIs too narrow by increasing confidence (fix: higher confidence requires wider intervals; 99% CI is wider than 95%)'
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
          text: 'Confidence intervals appear in every field that reports estimates.',
          list: [
            'Polling: "Candidate A leads 48% ± 3%" is a confidence interval for a proportion',
            'Medicine: drug efficacy reported as "reduced symptoms by 15% (95% CI: 10% to 20%)"',
            'Finance: expected return estimates include confidence bands to show risk',
            'Manufacturing: tolerance intervals (a variant) ensure parts meet specifications'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CI = estimate ± (critical value) × (standard error)',
            'Higher confidence level → wider interval',
            'Larger sample size → narrower interval',
            'Use z for large samples or known σ; use t for small samples with unknown σ',
            'Interpretation is about the method, not a single interval',
            'CIs are preferable to p-values for reporting effect sizes'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What happens to the width of a confidence interval if you increase the sample size?
Ans: It narrows, because standard error decreases as n increases.`,
            `Q2: Why do we use the t-distribution for small samples?
Ans: Because estimating σ from the sample adds extra uncertainty; t has heavier tails to account for this.`,
            `Q3: A 99% CI is calculated as (10, 20). Can we say P(population mean in [10,20]) = 0.99?
Ans: No — the population mean is fixed; the 99% refers to the long-run performance of the method, not this specific interval.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Confidence Intervals</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Confidence Intervals")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'hypothesis-intro': {
      title: 'Introduction to Hypothesis Testing',
      subtitle: 'Making decisions with data using a structured framework',
      sections: [
        {
          heading: 'What is Hypothesis Testing?',
          text: 'Hypothesis testing is a formal procedure for evaluating claims about population parameters using sample data. It provides a structured, objective way to decide whether evidence supports or contradicts a belief.',
          list: [
            'Null Hypothesis (H₀): the default claim to be tested (e.g., no effect, no difference)',
            'Alternative Hypothesis (H₁): the claim we seek evidence for (e.g., there is an effect)',
            'Test Statistic: a number summarizing how far the sample result is from H₀',
            'p-value: probability of observing the sample result (or more extreme) if H₀ is true',
            'Significance Level (α): threshold for rejection — typically 0.05'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Hypothesis testing is a formal procedure for evaluating claims about population parameters using sample data. It provides a structured, objective way to decide whether evidence supports or contradicts a belief. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Hypothesis testing is a formal procedure for evaluating claims about population parameters using sample data. It provides a structured, objective way to decide whether evidence supports or contradicts a belief. Null Hypothesis (H₀): the default claim to be tested (e.g., no effect, no difference) Alternative Hypothesis (H₁): the claim we seek evidence for (e.g., there is an effect) Test Statistic: a number summarizing how far the sample result is from H₀ p-value: probability of observing the sample result (or more extreme) if H₀ is true Significance Level (α): threshold for rejection — typically 0.05</p>',
            '<p>You use introduction to hypothesis testing when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Hypothesis Testing

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Hypothesis Testing sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The p-value guides the decision: compare it to α.',
          example: {
            title: 'Example: One-sample z-test',
            code: `Claim: Average battery life = 10 hours

H₀: μ = 10
H₁: μ ≠ 10 (two-tailed)

Sample: n = 36, x̄ = 9.5, σ = 1.8

Test statistic:
  z = (x̄ - μ) / (σ/√n)
    = (9.5 - 10) / (1.8/6)
    = -0.5 / 0.3 = -1.67

p-value = 2 × P(Z < -1.67)
        ≈ 2 × 0.0475 = 0.095

Decision (α = 0.05):
  0.095 > 0.05 → Fail to reject H₀

Conclusion:
  Insufficient evidence that
  average battery life differs
  from 10 hours.`,
            output: 'A p-value above α means the data is not surprising enough under H₀ to abandon it.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'One-sample t-test on tips',
            code: `from scipy import stats
import seaborn as sns

tips = sns.load_dataset("tips")
# H0: mean bill = 20
t, p = stats.ttest_1samp(tips["total_bill"], popmean=20)
print(f"t={t:.3f}, p={p:.4f}")
print("Reject H0 at α=0.05?" , p < 0.05)`,
            output: 't≈-1.47, p≈0.14 — fail to reject H0; insufficient evidence mean ≠ 20.',
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
          text: 'One-tailed vs two-tailed tests serve different research questions.',
          table: {
            headers: [
              'Aspect',
              'One-Tailed Test',
              'Two-Tailed Test'
            ],
            rows: [
              [
                'H₁ direction',
                'Specifies direction (μ > μ₀ or μ < μ₀)',
                'Any difference (μ ≠ μ₀)'
              ],
              [
                'Rejection region',
                'One tail of distribution',
                'Both tails'
              ],
              [
                'p-value',
                'Area in one tail',
                'Area in both tails'
              ],
              [
                'Power',
                'Higher for the specified direction',
                'Lower per tail'
              ],
              [
                'When to use',
                'Strong directional prediction exists',
                'No directional prediction'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Saying "we accept the null hypothesis" (fix: we never accept H₀; we only fail to reject it — absence of evidence is not evidence of absence)',
            'Mistake 2: Changing from two-tailed to one-tailed after seeing the data (fix: choose the test direction before looking at results; post-hoc switching inflates Type I error)',
            'Mistake 3: Treating p < 0.05 as proof of a large or important effect (fix: report effect sizes and confidence intervals alongside p-values)'
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
          text: 'Hypothesis testing drives evidence-based decisions.',
          list: [
            'Pharmaceuticals: FDA requires trials to reject H₀ (no effect) before drug approval',
            'Tech: A/B tests use hypothesis testing to decide if a new feature improves metrics',
            'Manufacturing: quality control tests whether defect rates exceed acceptable thresholds',
            'Education: researchers test whether a new teaching method improves test scores'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'H₀ = default claim; H₁ = what we seek evidence for',
            'Test statistic measures distance from H₀ in standard-error units',
            'p-value = probability of seeing this result if H₀ were true',
            'If p < α, reject H₀; otherwise, fail to reject H₀',
            'Never "accept" H₀ — only fail to find enough evidence against it',
            'Report effect size and CI, not just p-value'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does a p-value of 0.03 mean when α = 0.05?
Ans: There is a 3% chance of observing the sample result (or more extreme) if the null hypothesis is true; since 0.03 < 0.05, we reject H₀.`,
            `Q2: What is wrong with saying "we accept the null hypothesis"?
Ans: Failing to reject H₀ does not prove it is true; it only means the data is insufficient to disprove it.`,
            `Q3: When should you use a one-tailed test instead of a two-tailed test?
Ans: Only when you have a strong, pre-specified directional prediction; switching after seeing data is invalid.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Hypothesis Testing</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Hypothesis Testing")
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
